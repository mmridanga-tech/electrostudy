import { Lesson } from '../types';

export const LESSON_DC_NETWORK_FUNDAMENTALS: Lesson = {
  id: 'lsn-ch4-dc-network-fundamentals',
  topicId: 'ch4-dc-network-fundamentals',
  order: 1,
  title: {
    en: 'DC Network Fundamentals & Circuit Terminology',
    hi: 'डीसी नेटवर्क के मूल सिद्धांत एवं शब्दावली',
    bn: 'ডিসি নেটওয়ার্কের মৌলিক ভিত্তি ও সার্কিট পরিভাষা'
  },
  easyExplanation: {
    en: 'An electrical network is an interconnection of various electrical elements such as voltage sources, current sources, resistors, inductors, and capacitors. A network provides a closed path for electric current to perform work.',
    hi: 'विद्युत नेटवर्क विभिन्न विद्युत घटकों जैसे वोल्टेज स्रोत, धारा स्रोत, प्रतिरोधक, प्रेरक और संधारित्र का एक अंतर-संबद्ध संयोजन है। यह विद्युत धारा को प्रवाहित होने के लिए एक बंद मार्ग प्रदान करता है।',
    bn: 'একটি বৈদ্যুতিক নেটওয়ার্ক হলো ভোল্টেজ সোর্স, কারেন্ট সোর্স, রেজিস্টর, ইনডাক্টর এবং ক্যাপাসিটরের মতো বিভিন্ন উপাদানগুলোর আন্তঃসংযোগ। এটি কারেন্ট প্রবাহের জন্য নির্দিষ্ট পথ তৈরি করে।'
  },
  detailedExplanation: {
    en: '1. Electrical Network vs Circuit: An electrical network is any combination of active and passive circuit elements connected together, which may or may not form a closed path. An electrical circuit is a specific closed network containing at least one closed loop with a source to drive current.\n\n2. Active vs Passive Elements: Active elements generate or supply electrical energy to the circuit (e.g., batteries, DC generators, transistors, op-amps). Passive elements absorb or store electrical energy without generating energy (e.g., resistors, inductors, capacitors).\n\n3. Linear vs Non-Linear Elements: Linear elements follow Ohm\'s Law where current is directly proportional to applied voltage (V-I graph is a straight line through the origin, e.g., metal resistors). Non-linear elements do not exhibit constant resistance; V-I characteristic is curved (e.g., diodes, transistors, thermistors, varistors).\n\n4. Bilateral vs Unilateral Elements: Bilateral elements conduct current equally in both directions with identical impedance (e.g., resistors, inductors). Unilateral elements conduct current preferentially or exclusively in one direction (e.g., PN junction diodes, rectifiers).\n\n5. Independent vs Dependent Sources: Independent sources deliver constant voltage or current regardless of other branch parameters (e.g., ideal battery). Dependent (controlled) sources produce voltage or current determined by a voltage or current elsewhere in the circuit (VCVS, VCCS, CCVS, CCCS).\n\n6. Ideal vs Practical Sources: Ideal voltage source has zero internal resistance (R_s = 0 Ω); practical voltage source has small series internal resistance (R_s > 0). Ideal current source has infinite internal parallel resistance (R_s = ∞); practical current source has finite parallel resistance.\n\n7. Topological Definitions:\n- Node: Any junction point where two or more circuit elements are connected.\n- Essential Node: A junction where three or more circuit elements meet.\n- Branch: A path connecting two nodes that contains a single circuit element.\n- Loop: Any closed path in a network formed by starting at a node and returning without repeating nodes.\n- Mesh: An independent loop that does not contain any other loops within its boundary.\n- Path: A sequence of adjacent nodes and branches traversed without repeating any node.',
    hi: '1. नेटवर्क बनाम सर्किट: नेटवर्क सक्रिय और निष्क्रिय तत्वों का कोई भी संयोजन है जो बंद हो भी सकता है और नहीं भी। सर्किट एक बंद नेटवर्क है जिसमें धारा प्रवाह के लिए कम से कम एक बंद मार्ग होता है।\n\n2. एक्टिव बनाम पैसिव: एक्टिव घटक ऊर्जा उत्पन्न/आपूर्ति करते हैं (जैसे बैटरी, जनरेटर)। पैसिव घटक ऊर्जा का अवशोषण या भंडारण करते हैं (जैसे प्रतिरोधक, प्रेरक, संधारित्र)।\n\n3. लीनियर बनाम नॉन-लीनियर: लीनियर घटक ओम के नियम का पालन करते हैं (V-I वक्र सीधी रेखा होता है)। नॉन-लीनियर घटक ओम के नियम का पालन नहीं करते (जैसे डायोड, ट्रांजिस्टर)।\n\n4. बायलेटरल बनाम यूनिलेटरल: बायलेटरल घटक दोनों दिशाओं में समान रूप से धारा प्रवाहित करते हैं (प्रतिरोधक)। यूनिलेटरल केवल एक दिशा में संचालन करते हैं (डायोड)।\n\n5. स्वतंत्र बनाम निर्भर स्रोत: स्वतंत्र स्रोत स्थिर मान देते हैं। निर्भर स्रोत का मान परिपथ के किसी अन्य भाग की वोल्टेज या धारा पर निर्भर करता है।\n\n6. आदर्श बनाम व्यावहारिक स्रोत: आदर्श वोल्टेज स्रोत का आंतरिक प्रतिरोध शून्य (R_s = 0) होता है; व्यावहारिक में श्रेणी प्रतिरोध होता है। आदर्श धारा स्रोत का समांतर प्रतिरोध अनंत (R_s = ∞) होता है।\n\n7. टोपोलॉजी शब्दावली:\n- नोड: वह बिंदु जहाँ 2 या अधिक घटक मिलते हैं।\n- मुख्य नोड (Essential Node): जहाँ 3 या अधिक घटक मिलते हैं।\n- शाखा (Branch): दो नोड्स को जोड़ने वाला मार्ग जिसमें एक घटक हो।\n- लूप (Loop): परिपथ में कोई भी बंद मार्ग।\n- मेष (Mesh): ऐसा लूप जिसके अंदर कोई अन्य लूप न हो।',
    bn: '১. নেটওয়ার্ক বনাম সার্কিট: বৈদুতিক নেটওয়ার্ক হলো অ্যাক্টিভ ও প্যাসিভ উপাদানের যেকোনো সংযোগ। সার্কিট হলো অন্তত একটি বদ্ধ লুপযুক্ত নেটওয়ার্ক।\n\n২. অ্যাক্টিভ বনাম প্যাসিভ: অ্যাক্টিভ উপাদান সার্কিটে শক্তি সরবরাহ করে (যেমন ব্যাটারি, জেনারেটর)। প্যাসিভ উপাদান শক্তি শোষণ বা সঞ্চয় করে (যেমন রেজিস্টর, ইনডাক্টর, ক্যাপাসিটর)।\n\n৩. লিনিয়ার বনাম নন-লিনিয়ার: লিনিয়ার উপাদান ওহমের সূত্র মেনে চলে (V-I লেখচিত্র সরলরেখা)। নন-লিনিয়ার উপাদান ওহমের সূত্র মানে না (যেমন ডায়োড, ট্রানজিস্টর)।\n\n৪. বাইল্যাটারাল বনাম ইউনিলেটারাল: বাইল্যাটারাল উপাদানে উভয় দিকে সমান কারেন্ট চলে (রেজিস্টর)। ইউনিলেটারাল উপাদান কেবল একমুখী বিদ্যুৎ পরিবহন করে (ডায়োড)।\n\n৫. স্বাধীন বনাম নির্ভরশীল সোর্স: স্বাধীন সোর্স ধ্রুবক মান দেয়। নির্ভরশীল সোর্সের মান সার্কিটের অন্য প্রান্তের ভোল্টেজ বা কারেন্টের ওপর নির্ভরশীল।\n\n৬. আদর্শ বনাম ব্যবহারিক সোর্স: আদর্শ ভোল্টেজ সোর্সের অভ্যন্তরীণ রেজিস্ট্যান্স শূন্য (R_s = 0); ব্যবহারিক সোর্সে সিরিজে অভ্যন্তরীণ রেজিস্ট্যান্স থাকে। আদর্শ কারেন্ট সোর্সের প্যারালাল রেজিস্ট্যান্স অসীম (R_s = ∞)।\n\n৭. টপোলজি পরিভাষা:\n- নোড: দুই বা ততোধিক উপাদান যুক্ত হওয়ার স্থান।\n- এসেনশিয়াল নোড: তিন বা ততোধিক উপাদান যুক্ত হওয়ার সংযোগস্থল।\n- ব্রাঞ্চ: দুটি নোডের মধ্যবর্তী উপাদানযুক্ত পথ।\n- লুপ: কোনো নোড পুনরাবৃত্তি না করে তৈরি বদ্ধ পথ।\n- মেশ: এমন একটি লুপ যার অভ্যন্তরে অন্য কোনো লুপ থাকে না।'
  },
  formulas: [
    {
      symbol: 'M',
      expression: 'M = B - N + 1',
      description: {
        en: 'Number of Independent Meshes / Fundamental Loops (B = Branches, N = Total Nodes)',
        hi: 'स्वतंत्र मेषों / लूपों की संख्या (B = शाखाएँ, N = कुल नोड)',
        bn: 'স্বাধীন মেশ সংখ্যা (B = ব্রাঞ্চ, N = মোট নোড)'
      }
    },
    {
      symbol: 'V_L',
      expression: 'V_L = V_S - I_L · R_s',
      description: {
        en: 'Terminal Voltage of Practical Voltage Source under Load I_L',
        hi: 'लोड धारा I_L के तहत व्यावहारिक वोल्टेज स्रोत का टर्मिनल वोल्टेज',
        bn: 'লোড কারেন্ট I_L এর ক্ষেত্রে ব্যবহারিক ভোল্টেজ সোর্সের টার্মিনাল ভোল্টেজ'
      }
    },
    {
      symbol: 'I_L',
      expression: 'I_L = I_S · (R_s / (R_s + R_L))',
      description: {
        en: 'Load Current delivered by Practical Current Source with Parallel Internal Resistance R_s',
        hi: 'समांतर आंतरिक प्रतिरोध R_s वाले व्यावहारिक धारा स्रोत की लोड धारा',
        bn: 'প্যারালাল অভ্যন্তরীণ রেজিস্ট্যান্স R_s বিশিষ্ট ব্যবহারিক কারেন্ট সোর্সের লোড কারেন্ট'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-dc-network-terminology',
      title: {
        en: 'DC Network Structural Topology & Component Classification',
        hi: 'डीसी नेटवर्क संरचनात्मक टोपोलॉजी एवं घटक वर्गीकरण',
        bn: 'ডিসি নেটওয়ার্কের গাঠনিক টপোলজি ও উপাদানের শ্রেণীবিন্যাস'
      },
      caption: {
        en: 'Visual representation of active/passive elements, linear/non-linear devices, nodes, essential nodes, branches, and meshes in a DC network.',
        hi: 'डीसी नेटवर्क में एक्टिव/पैसिव घटक, नोड, मुख्य नोड, शाखाएँ और मेष का दृश्य निरूपण।',
        bn: 'ডিসি নেটওয়ার্কে অ্যাক্টিভ/প্যাসিভ উপাদান, নোড, এসেনশিয়াল নোড, ব্রাঞ্চ এবং মেশের ভিজ্যুয়াল চিত্র।'
      },
      svgType: 'circuit-dc-network-terminology'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch4-topology-count',
      problem: {
        en: 'A DC electrical network consists of 6 branches and 4 junction nodes. Calculate the total number of independent mesh equations (M) required to completely solve the network.',
        hi: 'एक डीसी विद्युत नेटवर्क में 6 शाखाएँ और 4 जंक्शन नोड हैं। नेटवर्क को पूरी तरह से हल करने के लिए आवश्यक स्वतंत्र मेष समीकरणों (M) की कुल संख्या की गणना करें।',
        bn: 'একটি ডিসি বৈদ্যুতিক নেটওয়ার্কে ৬ টি ব্রাঞ্চ এবং ৪ টি নোড রয়েছে। নেটওয়ার্ক সম্পূর্ণ সমাধানের জন্য প্রয়োজনীয় স্বাধীন মেশ সমীকরণের (M) সংখ্যা নির্ণয় করুন।'
      },
      solution: {
        en: 'Given:\n- Number of Branches (B) = 6\n- Number of Nodes (N) = 4\n\nFormula:\nIndependent Meshes M = B - N + 1\n\nSubstitution:\nM = 6 - 4 + 1\nM = 3\n\nConclusion:\nExactly 3 independent mesh loop equations are required to solve for all branch currents.',
        hi: 'दिया गया है:\n- शाखाओं की संख्या (B) = 6\n- नोड की संख्या (N) = 4\n\nसूत्र:\nस्वतंत्र मेष M = B - N + 1\n\nमान रखने पर:\nM = 6 - 4 + 1 = 3\n\nनिष्कर्ष:\nसभी शाखा धाराओं के लिए 3 स्वतंत्र मेष समीकरणों की आवश्यकता होगी।',
        bn: 'প্রদত্ত:\n- ব্রাঞ্চ সংখ্যা (B) = ৬\n- নোড সংখ্যা (N) = ৪\n\nসূত্র:\nস্বাধীন মেশ M = B - N + 1\n\nমান বসিয়ে:\nM = ৬ - ৪ + ১ = ৩\n\nউপসংহার:\nসকল ব্রাঞ্চ কারেন্ট নির্ণয়ের জন্য ৩ টি স্বাধীন মেশ সমীকরণ প্রয়োজন।'
      },
      givenValues: {
        'B (Branches)': '6',
        'N (Nodes)': '4'
      },
      finalAnswer: {
        en: 'Independent Meshes M = 3',
        hi: 'स्वतंत्र मेष M = 3',
        bn: 'স্বাধীন মেশ M = ৩'
      }
    },
    {
      id: 'ex-ch4-practical-source',
      problem: {
        en: 'A practical DC voltage source has an open-circuit voltage of 24 V and an internal resistance R_s = 0.5 Ω. Calculate its terminal voltage V_L when connected to a load resistor R_L = 11.5 Ω.',
        hi: 'एक व्यावहारिक डीसी वोल्टेज स्रोत का ओपन-सर्किट वोल्टेज 24 V है और आंतरिक प्रतिरोध R_s = 0.5 Ω है। जब इसे R_L = 11.5 Ω लोड प्रतिरोधक से जोड़ा जाता है, तो इसके टर्मिनल वोल्टेज V_L की गणना करें।',
        bn: 'একটি ব্যবহারিক ডিসি ভোল্টেজ সোর্সের ওপেন সার্কিট ভোল্টেজ ২৪ V এবং অভ্যন্তরীণ রেজিস্ট্যান্স R_s = ০.৫ Ω। যখন এটি R_L = ১১.৫ Ω লোডের সাথে যুক্ত হয়, তখন টার্মিনাল ভোল্টেজ V_L নির্ণয় করুন।'
      },
      solution: {
        en: 'Given:\n- Open Circuit Source Voltage V_S = 24 V\n- Internal Source Resistance R_s = 0.5 Ω\n- Load Resistance R_L = 11.5 Ω\n\nStep 1: Calculate Total Circuit Resistance\nR_total = R_s + R_L = 0.5 + 11.5 = 12.0 Ω\n\nStep 2: Calculate Circuit Load Current I_L\nI_L = V_S / R_total = 24 / 12 = 2.0 A\n\nStep 3: Calculate Terminal Voltage V_L\nV_L = V_S - (I_L · R_s) = 24 - (2.0 · 0.5) = 24 - 1.0 = 23.0 V\n(Alternatively: V_L = I_L · R_L = 2.0 · 11.5 = 23.0 V)',
        hi: 'दिया गया है:\n- ओपन सर्किट वोल्टेज V_S = 24 V\n- आंतरिक प्रतिरोध R_s = 0.5 Ω\n- लोड प्रतिरोध R_L = 11.5 Ω\n\nचरण 1: कुल प्रतिरोध\nR_total = 0.5 + 11.5 = 12.0 Ω\n\nचरण 2: लोड धारा\nI_L = 24 / 12 = 2.0 A\n\nचरण 3: टर्मिनल वोल्टेज\nV_L = 24 - (2.0 × 0.5) = 23.0 V',
        bn: 'প্রদত্ত:\n- ওপেন সার্কিট ভোল্টেজ V_S = ২৪ V\n- অভ্যন্তরীণ রেজিস্ট্যান্স R_s = ০.৫ Ω\n- লোড রেজিস্ট্যান্স R_L = ১১.৫ Ω\n\nধাপ ১: মোট রেজিস্ট্যান্স\nR_total = ০.৫ + ১১.৫ = ১২.০ Ω\n\nধাপ ২: লোড কারেন্ট\nI_L = ২৪ / ১২ = ২.০ A\n\nধাপ ৩: টার্মিনাল ভোল্টেজ\nV_L = ২৪ - (২.০ × ০.৫) = ২৩.০ V'
      },
      givenValues: {
        'V_S': '24 V',
        'R_s': '0.5 Ω',
        'R_L': '11.5 Ω'
      },
      finalAnswer: {
        en: 'Terminal Voltage V_L = 23.0 V (Load Current I_L = 2.0 A)',
        hi: 'टर्मिनल वोल्टेज V_L = 23.0 V (लोड धारा I_L = 2.0 A)',
        bn: 'টার্মিনাল ভোল্টেজ V_L = ২৩.০ V (লোড কারেন্ট I_L = ২.০ A)'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Substation Busbar Architecture: Identifying essential nodes and branches for circuit breaker zoning.',
      'Printed Circuit Board (PCB) Layout: Classifying power traces and signal ground meshes to eliminate loop interference.',
      'Battery Management Systems (BMS): Modeling internal source resistance (R_s) in electric vehicle (EV) battery cells.',
      'Industrial PLC Instrumentation: Interfacing 4-20 mA current loops using high-impedance current source equivalents.'
    ],
    hi: [
      'सबस्टेशन बसबार संरचना: सर्किट ब्रेकर जोनिंग के लिए आवश्यक नोड और शाखाओं की पहचान करना।',
      'प्रिंटेड सर्किट बोर्ड (PCB) लेआउट: लूप इंटरफेरेंस को खत्म करने के लिए पावर सिग्नल मेष का वर्गीकरण।',
      'बैटरी प्रबंधन प्रणाली (BMS): इलेक्ट्रिक वाहनों में आंतरिक स्रोत प्रतिरोध (R_s) का मॉडलिंग।',
      'औद्योगिक पीएलसी इंस्ट्रूमेंटेशन: उच्च-प्रतिबाधा धारा स्रोतों द्वारा 4-20 mA करंट लूप इंटरफेसिंग।'
    ],
    bn: [
      'সাবস্টেশন বাসবার আর্কিটেকচার: সার্কিট ব্রেকার জোনিংয়ের জন্য এসেনশিয়াল নোড ও ব্রাঞ্চ চিহ্নিতকরণ।',
      'প্রিন্টেড সার্কিট বোর্ড (PCB) লেআউট: সিগন্যাল ট্রেস ও গ্রাউন্ড মেশে ইন্টারফেরেন্স কমানো।',
      'ব্যাটারি ম্যানেজমেন্ট সিস্টেম (BMS): ইভি ব্যাটারিতে অভ্যন্তরীণ সোর্স রেজিস্ট্যান্স (R_s) মডেলিং।',
      'শিল্প পিসিএল ইনস্ট্রুমেন্টেশন: ৪-২০ mA কারেন্ট লুপ সিস্টেম ডিজাইন।'
    ]
  },
  importantPoints: {
    en: [
      'An ideal voltage source has zero internal resistance (R_s = 0 Ω); an ideal current source has infinite internal resistance (R_s = ∞).',
      'Linear elements follow V-I proportionality; non-linear elements do not.',
      'Bilateral elements conduct equally in both directions; unilateral elements (e.g., diodes) do not.',
      'A mesh is a loop that contains no internal loops. Every mesh is a loop, but not every loop is a mesh.',
      'The number of independent mesh equations required to solve a network is M = B - N + 1.'
    ],
    hi: [
      'आदर्श वोल्टेज स्रोत का आंतरिक प्रतिरोध शून्य (R_s = 0) और आदर्श धारा स्रोत का अनंत (R_s = ∞) होता है।',
      'लीनियर घटक V-I समानुपात का पालन करते हैं; नॉन-लीनियर घटक नहीं करते।',
      'बायलेटरल घटक दोनों दिशाओं में समान रूप से संचालन करते हैं; यूनिलेटरल घटक (डायोड) नहीं करते।',
      'प्रत्येक मेष एक लूप है, लेकिन प्रत्येक लूप मेष नहीं है।',
      'नेटवर्क हल करने के लिए आवश्यक स्वतंत्र मेष समीकरण M = B - N + 1 होते हैं।'
    ],
    bn: [
      'আদর্শ ভোল্টেজ সোর্সের অভ্যন্তরীণ রেজিস্ট্যান্স শূন্য (R_s = 0); আদর্শ কারেন্ট সোর্সের অসীম (R_s = ∞)।',
      'লিনিয়ার উপাদান V-I অনুপাত মেনে চলে; নন-লিনিয়ার উপাদান মেনে চলে না।',
      'বাইল্যাটারাল উপাদান উভয় দিকে সমান বিদ্যুৎ পরিচালনা করে; ইউনিলেটারাল উপাদান (ডায়োড) করে না।',
      'প্রতিটি মেশ একটি লুপ, কিন্তু প্রতিটি লুপ মেশ নয়।',
      'সার্কিট সমাধানের জন্য স্বাধীন মেশ সমীকরণ সংখ্যা M = B - N + 1।'
    ]
  },
  commonMistakes: {
    en: [
      'Confusing a general loop with a mesh: A mesh cannot contain any other inner loop.',
      'Assuming ideal sources in practical calculations: Real batteries always drop terminal voltage under load due to internal resistance R_s.',
      'Misidentifying essential nodes: A simple series connection of 2 elements is a node, but not an essential node (needs ≥3 branches).',
      'Treating diodes as bilateral elements: Diodes conduct in forward bias but block in reverse bias.'
    ],
    hi: [
      'सामान्य लूप को मेष समझ लेना: मेष के अंदर कोई अन्य आंतरिक लूप नहीं हो सकता।',
      'गणना में व्यावहारिक स्रोतों को आदर्श मानना: वास्तविक बैटरी लोड के तहत आंतरिक प्रतिरोध R_s के कारण टर्मिनल वोल्टेज कम कर देती है।',
      'मुख्य नोड की गलत पहचान: 2 घटकों का सरल श्रेणी संयोजन नोड है, लेकिन मुख्य नोड नहीं (कम से कम 3 शाखाएँ चाहिए)।',
      'डायोड को बायलेटरल समझना: डायोड फॉरवर्ड बायस में संचालित होता है लेकिन रिवर्स बायस में रोकता है।'
    ],
    bn: [
      'সাধারণ লুপ ও মেশের মধ্যে ভুল করা: মেশের ভেতরে অন্য কোনো লুপ থাকতে পারে না।',
      'গাণিতিক হিসাবের ক্ষেত্রে ব্যবহারিক সোর্সকে আদর্শ ভাবা: রিয়েল ব্যাটারিতে লোড যুক্ত করলে आंतरिक রেজিস্ট্যান্সের জন্য ভোল্টেজ ড্রপ হয়।',
      'এসেনশিয়াল নোড শনাক্তকরণে ভুল: ২ টি উপাদানের সাধারণ সিরিজ সংযোগ নোড হলেও এসেনশিয়াল নোড নয় (ন্যূনতম ৩ টি ব্রাঞ্চ প্রয়োজন)।',
      'ডায়োডকে বাইল্যাটারাল ভাবা: ডায়োড কেবল ফরোয়ার্ড বায়াসে কারেন্ট পরিবহন করে।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch4-fund-1',
      question: {
        en: 'Which of the following circuit elements is classified as an ACTIVE element?',
        hi: 'निम्नलिखित में से किस परिपथ घटक को सक्रिय (ACTIVE) घटक के रूप में वर्गीकृत किया गया है?',
        bn: 'নিচের কোন উপাদানটিকে অ্যাক্টিভ (ACTIVE) উপাদান হিসেবে শ্রেণীবদ্ধ করা হয়?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Ideal Resistor', hi: 'आदर्श प्रतिरोधक', bn: 'আদর্শ রেজিস্টর' } },
        { id: 'opt-b', text: { en: 'PN Junction Diode', hi: 'पीएन जंक्शन डायोड', bn: 'পিএন জংশন ডায়োড' } },
        { id: 'opt-c', text: { en: 'Independent Current Source', hi: 'स्वतंत्र धारा स्रोत', bn: 'স্বাধীন কারেন্ট সোর্স' } },
        { id: 'opt-d', text: { en: 'Air-core Inductor', hi: 'वायु-कोर प्रेरक', bn: 'এয়ার-কোর ইনডাক্টর' } }
      ],
      correctOptionId: 'opt-c',
      explanation: {
        en: 'Independent current sources supply electrical energy to the circuit continuously, so they are classified as active elements. Resistors, diodes, and inductors are passive elements.',
        hi: 'स्वतंत्र धारा स्रोत परिपथ को लगातार विद्युत ऊर्जा प्रदान करते हैं, इसलिए इन्हें सक्रिय घटक कहा जाता है। प्रतिरोधक, डायोड और प्रेरक निष्क्रिय घटक हैं।',
        bn: 'স্বাধীন কারেন্ট সোর্স সার্কিটে ক্রমাগত শক্তি সরবরাহ করে, তাই এটি অ্যাক্টিভ উপাদান। রেজিস্টর, ডায়োড ও ইনডাক্টর হলো প্যাসিভ উপাদান।'
      }
    },
    {
      id: 'mcq-ch4-fund-2',
      question: {
        en: 'What is the internal resistance of an IDEAL Voltage Source and an IDEAL Current Source respectively?',
        hi: 'एक आदर्श वोल्टेज स्रोत और एक आदर्श धारा स्रोत का आंतरिक प्रतिरोध क्रमशः कितना होता है?',
        bn: 'একটি আদর্শ ভোল্টেজ সোর্স এবং একটি আদর্শ কারেন্ট সোর্সের অভ্যন্তরীণ রেজিস্ট্যান্স যথাক্রমে কত?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Zero and Infinite', hi: 'शून्य एवं अनंत', bn: 'শূন্য এবং অসীম' } },
        { id: 'opt-b', text: { en: 'Infinite and Zero', hi: 'अनंत एवं शून्य', bn: 'অসীম এবং শূন্য' } },
        { id: 'opt-c', text: { en: '1 Ω and 1 Ω', hi: '1 Ω एवं 1 Ω', bn: '১ Ω এবং ১ Ω' } },
        { id: 'opt-d', text: { en: 'Zero and Zero', hi: 'शून्य एवं शून्य', bn: 'শূন্য এবং শূন্য' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'An ideal voltage source maintains a constant terminal voltage regardless of load current, requiring zero series internal resistance (0 Ω). An ideal current source delivers constant current regardless of voltage, requiring infinite parallel internal resistance (∞ Ω).',
        hi: 'आदर्श वोल्टेज स्रोत का श्रेणी आंतरिक प्रतिरोध शून्य (0 Ω) होता है और आदर्श धारा स्रोत का समांतर आंतरिक प्रतिरोध अनंत (∞ Ω) होता है।',
        bn: 'আদর্শ ভোল্টেজ সোর্সের অভ্যন্তরীণ রেজিস্ট্যান্স শূন্য (0 Ω) এবং আদর্শ কারেন্ট সোর্সের প্যারালাল অভ্যন্তরীণ রেজিস্ট্যান্স অসীম (∞ Ω)।'
      }
    },
    {
      id: 'mcq-ch4-fund-3',
      question: {
        en: 'In network graph theory, a junction where THREE or more circuit elements meet is specifically defined as a:',
        hi: 'नेटवर्क ग्राफ सिद्धांत में, वह जंक्शन जहाँ तीन या अधिक परिपथ घटक मिलते हैं, विशेष रूप से क्या कहलाता है?',
        bn: 'নেটওয়ার্ক থিওরিতে যে সংযোগস্থলে তিন বা ততোধিক উপাদান যুক্ত হয় তাকে কী বলা হয়?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Simple Node', hi: 'साधारण नोड', bn: 'সাধারণ নোড' } },
        { id: 'opt-b', text: { en: 'Essential Node (Junction)', hi: 'मुख्य नोड (एसेंशियल नोड)', bn: 'এসেনশিয়াল নোড (জংশন)' } },
        { id: 'opt-c', text: { en: 'Mesh', hi: 'मेष', bn: 'মেশ' } },
        { id: 'opt-d', text: { en: 'Branch', hi: 'शाखा', bn: 'ব্রাঞ্চ' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'While any point connecting 2 elements is a node, a junction connecting 3 or more branches is specifically defined as an essential node (principal node).',
        hi: 'यद्यपि 2 घटकों को जोड़ने वाला कोई भी बिंदु नोड है, लेकिन 3 या अधिक शाखाओं को जोड़ने वाला जंक्शन मुख्य नोड (Essential Node) कहलाता है।',
        bn: 'যেকোনো দুই উপাদান সংযোগকারী বিন্দু নোড হলেও, ৩ বা তার বেশি ব্রাঞ্চের সংযোগস্থলকে এসেনশিয়াল নোড বলা হয়।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch4-fund-1',
      question: {
        en: 'Differentiate clearly between a Linear Element and a Non-Linear Element with two practical engineering examples for each.',
        hi: 'प्रत्येक के लिए दो व्यावहारिक उदाहरणों के साथ एक लीनियर घटक और एक नॉन-लीनियर घटक के बीच अंतर स्पष्ट करें।',
        bn: 'প্রতিটির ক্ষেত্রে দুটি ব্যবহারিক উদাহরণসহ একটি লিনিয়ার উপাদান এবং একটি নন-লিনিয়ার উপাদানের পার্থক্য ব্যাখ্যা করুন।'
      },
      hint: {
        en: 'Consider compliance with Ohm\'s Law and whether the V-I characteristic curve is a straight line through the origin.',
        hi: 'ओम के नियम के पालन और V-I वक्र की सीधी रेखा होने पर विचार करें।',
        bn: 'ওহমের সূত্রের প্রতিফলন এবং V-I লেখচিত্র সরলরেখা কি না তা বিবেচনা করুন।'
      },
      answerKey: {
        en: 'Linear Element: Follows Ohm\'s Law where resistance remains constant regardless of applied voltage or current magnitude (V-I characteristic is a straight line through the origin). Examples: Metallic resistors (film/wirewound) and air-core inductors operated within saturation limits.\n\nNon-Linear Element: Does not obey Ohm\'s Law; resistance changes dynamically with operating voltage, current, or temperature (V-I characteristic is non-linear). Examples: Semiconductor PN junction diodes and NTC thermistors.',
        hi: 'लीनियर घटक: ओम के नियम का पालन करता है (V-I वक्र मूल बिंदु से गुजरने वाली सीधी रेखा है)। उदाहरण: धातु फिल्म प्रतिरोधक और वायु-कोर प्रेरक।\n\nनॉन-लीनियर घटक: ओम के नियम का पालन नहीं करता (प्रतिरोध बदलता रहता है)। उदाहरण: सेमीकंडक्टर पीएन जंक्शन डायोड और थर्मिस्टर।',
        bn: 'লিনিয়ার উপাদান: ওহমের সূত্র মেনে চলে (V-I কার্ভ মূলবিন্দুগামী সরলরেখা)। উদাহরণ: মেটাল ফিল্ম রেজিস্টর এবং এয়ার-কোর ইনডাক্টর।\n\nনন-লিনিয়ার উপাদান: ওহমের সূত্র মানে না (রেজিস্ট্যান্স পরিবর্তিত হয়)। উদাহরণ: সেমিকন্ডাক্টর পিএন জংশন ডায়োড এবং থার্মিস্টার।'
      }
    },
    {
      id: 'pq-ch4-fund-2',
      question: {
        en: 'Explain why an ideal current source cannot be left open-circuited in electrical system analysis.',
        hi: 'व्याख्या करें कि विद्युत प्रणाली विश्लेषण में एक आदर्श धारा स्रोत को ओपन-सर्किट क्यों नहीं छोड़ा जा सकता।',
        bn: 'ব্যাখ্যা করুন কেন বৈদুতিক সিস্টেমে একটি আদর্শ কারেন্ট সোর্সকে ওপেন সার্কিট হিসেবে রাখা যায় না।'
      },
      hint: {
        en: 'Think about V = I × R when R = ∞ (open circuit).',
        hi: 'विचार करें कि जब R = ∞ (ओपन सर्किट) हो तो V = I × R क्या होगा।',
        bn: 'বিবেচনা করুন R = ∞ (ওপেন সার্কিট) হলে V = I × R কী ঘটবে।'
      },
      answerKey: {
        en: 'An ideal current source drives a fixed current I_S regardless of circuit resistance. If left open-circuited (R_L = ∞), the required voltage across its terminals to force current across infinite resistance would approach infinity (V = I_S × ∞ = ∞ V). In practice, this results in severe insulation breakdown, hazardous high-voltage arcing, or destructive physical damage to the equipment.',
        hi: 'एक आदर्श धारा स्रोत निश्चित धारा I_S प्रवाहित करता है। यदि इसे ओपन-सर्किट (R_L = ∞) छोड़ दिया जाए, तो इसके टर्मिनलों पर उत्पन्न वोल्टेज अनंत (V = I_S × ∞ = ∞ V) की ओर प्रवृत्त होगा। व्यावहारिक रूप से, इससे गंभीर इंसुलेशन ब्रेकडाउन, खतरनाक हाई-वोल्टेज आर्किंग और उपकरण नष्ट हो सकते हैं।',
        bn: 'একটি আদর্শ কারেন্ট সোর্স যেকোনো বাধা অতিক্রম করে নির্দিষ্ট কারেন্ট I_S পরিচালনা করতে চায়। এটি ওপেন সার্কিট (R_L = ∞) থাকলে টার্মিনালে অসীম ভোল্টেজ (V = I_S × ∞ = ∞ V) তৈরির চেষ্টা করে। যার ফলে মারাত্মক ইনসুলেশন ব্রেকডাউন ও দুর্ঘটনাবশত স্পার্কিঙের মাধ্যমে সরঞ্জাম নষ্ট হতে পারে।'
      }
    }
  ]
};

export const LESSON_KCL: Lesson = {
  id: 'lsn-ch4-kcl',
  topicId: 'ch4-kcl',
  order: 2,
  title: {
    en: "Kirchhoff's Current Law (KCL)",
    hi: 'किरचॉफ का धारा नियम (KCL)',
    bn: 'কার্শফের কারেন্ট সূত্র (KCL)'
  },
  easyExplanation: {
    en: "Kirchhoff's Current Law (KCL) states that electric charge is conserved at every junction node in a circuit. The total current entering a node must strictly equal the total current leaving that node.",
    hi: 'किरचॉफ का धारा नियम (KCL) बताता है कि परिपथ के प्रत्येक जंक्शन नोड पर विद्युत आवेश संरक्षित रहता है। नोड में प्रवेश करने वाली कुल धारा नोड से बाहर निकलने वाली कुल धारा के ठीक बराबर होनी चाहिए।',
    bn: 'কার্শফের কারেন্ট সূত্র (KCL) অনুযায়ী সার্কিটের যেকোনো নোডে আধান সংরক্ষিত থাকে। কোনো নোডে প্রবেশকারী মোট কারেন্ট তা থেকে বের হওয়া মোট কারেন্টের হুবহু সমান।'
  },
  detailedExplanation: {
    en: '1. Fundamentals & Conservation Principle: Kirchhoff\'s Current Law (KCL) is a direct consequence of the Principle of Conservation of Electric Charge. Since a junction node has zero localized capacitance, electric charge cannot accumulate or be destroyed at a node under steady-state DC conditions.\n\n2. Formal Statement: The algebraic sum of all electric currents meeting at any node in a electrical network is zero:\n   Σ I_k = 0  (from k = 1 to N branches connected at node)\n\n3. Equivalent Formulation: Sum of currents entering a node equals sum of currents leaving the node:\n   Σ I_entering = Σ I_leaving\n\n4. Algebraic Sign Convention:\n- Convention A: Currents entering the node are assigned POSITIVE (+), currents leaving are assigned NEGATIVE (-).\n- Convention B: Currents entering are assigned NEGATIVE (-), currents leaving are assigned POSITIVE (+).\nBoth sign conventions yield identical mathematical equations when set to zero.\n\n5. Solving for Unknown Currents:\n- Assign assumed current directions for all branches connected to the node.\n- Formulate the KCL equation using a consistent sign convention.\n- Solve algebraically for the unknown current magnitude.\n- Interpretation of Negative Result: If the calculated numerical value of a branch current turns out to be negative (e.g., I_3 = -2.5 A), it simply indicates that the true physical current flows in the direction opposite to the initial assumed arrow.',
    hi: '1. मूलभूत एवं संरक्षण सिद्धांत: किरचॉफ का धारा नियम (KCL) विद्युत आवेश के संरक्षण के सिद्धांत का सीधा परिणाम है। नोड में कोई धारिता नहीं होती, इसलिए डीसी स्थितियों में नोड पर आवेश जमा या नष्ट नहीं हो सकता।\n\n2. नियम का कथन: विद्युत परिपथ में किसी भी नोड पर मिलने वाली सभी धाराओं का बीजगणितीय योग शून्य होता है:\n   Σ I_k = 0\n\n3. तुल्य रूप: नोड में प्रवेश करने वाली धाराओं का योग = नोड से बाहर निकलने वाली धाराओं का योग:\n   Σ I_entering = Σ I_leaving\n\n4. बीजगणितीय चिह्न परिपाटी:\n- नोड में प्रवेश करने वाली धाराओं को धनात्मक (+), निकलने वाली धाराओं को ऋणात्मक (-) माना जाता है।\n- दोनों परिपाटियाँ शून्य के बराबर रखने पर समान समीकरण देती हैं।\n\n5. ऋणात्मक परिणाम की व्याख्या: यदि गणना के बाद धारा का मान ऋणात्मक आता है (जैसे I = -2.5 A), तो इसका अर्थ है कि वास्तविक धारा मानी गई दिशा के ठीक विपरीत बह रही है।',
    bn: '১. আধান সংরক্ষণ মূলনীতি: কার্শফের কারেন্ট সূত্র (KCL) সরাসরি বৈদুতিক আধান সংরক্ষণ নীতির ওপর প্রতিষ্ঠিত। স্থির অবস্থায় কোনো নোডে চার্জ জমতে বা ধ্বংস হতে পারে না।\n\n২. সূত্রের মূল কথা: যেকোনো নোডে মিলিত কারেন্টসমূহের বীজগণিতীয় যোগফল শূন্য:\n   Σ I_k = 0\n\n৩. বিকল্প রূপ: প্রবেশকারী মোট কারেন্ট = বহির্গামী মোট কারেন্ট:\n   Σ I_entering = Σ I_leaving\n\n৪. সাইন কনভেনশন:\n- নোডে প্রবেশকারী কারেন্ট ধনাত্মক (+), বহির্গামী কারেন্ট ঋণাত্মক (-)।\n\n৫. ঋণাত্মক মানের ব্যাখ্যা: গণনায় প্রাপ্ত কারেন্টের মান ঋণাত্মক হলে (যেমন I = -২.৫ A), বুঝতে হবে প্রকৃত কারেন্ট ধরে নেওয়া দিকের বিপরীত দিকে প্রবাহিত হচ্ছে।'
  },
  formulas: [
    {
      symbol: 'ΣI',
      expression: 'Σ I_entering = Σ I_leaving',
      description: {
        en: 'KCL Node Balance Equation (Sum of entering currents equals sum of leaving currents)',
        hi: 'KCL नोड संतुलन समीकरण (प्रवेश धारा योग = निकास धारा योग)',
        bn: 'KCL নোড সমীকরণ (প্রবেশকারী কারেন্ট = বহির্গামী কারেন্ট)'
      }
    },
    {
      symbol: 'ΣI_k',
      expression: 'Σ_{k=1}^{N} I_k = 0',
      description: {
        en: 'Algebraic Sum of Currents at a Node (with sign convention)',
        hi: 'नोड पर धाराओं का बीजगणितीय योग (चिह्न परिपाटी के साथ)',
        bn: 'নোডে কারেন্টের বীজগণিতীয় যোগফল'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-kcl-node',
      title: {
        en: 'KCL Multi-Branch Node Currents Scheme',
        hi: 'KCL बहु-शाखा नोड धारा योजना',
        bn: 'KCL মাল্টি-ব্রাঞ্চ নোড কারেন্ট প্রবাহ চিত্র'
      },
      caption: {
        en: 'Schematic representation of currents entering and leaving an essential node according to Kirchhoff\'s Current Law.',
        hi: 'किरचॉफ के धारा नियम के अनुसार नोड में प्रवेश करने और बाहर निकलने वाली धाराओं का निरूपण।',
        bn: 'কার্শফের কারেন্ট সূত্র অনুযায়ী নোডে প্রবেশকারী ও বহির্গামী কারেন্টের চিত্র।'
      },
      svgType: 'circuit-kcl-node'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-kcl-1',
      problem: {
        en: 'At a junction node in a DC control circuit, four branches meet. Current I1 = 8 A enters the node, I2 = 4 A enters the node, and I3 = 7 A leaves the node. Calculate the magnitude and direction of the unknown current I4.',
        hi: 'एक डीसी नियंत्रण परिपथ के जंक्शन नोड पर चार शाखाएँ मिलती हैं। धारा I1 = 8 A नोड में प्रवेश करती है, I2 = 4 A प्रवेश करती है, तथा I3 = 7 A बाहर निकलती है। अज्ञात धारा I4 का मान और दिशा ज्ञात करें।',
        bn: 'একটি ডিসি কন্ট্রোল সার্কিটের নোডে ৪ টি ব্রাঞ্চ যুক্ত আছে। কারেন্ট I1 = ৮ A প্রবেশ করে, I2 = ৪ A প্রবেশ করে, এবং I3 = ৭ A বের হয়ে যায়। অজানা কারেন্ট I4 এর মান ও দিক বের করুন।'
      },
      solution: {
        en: 'Given:\n- Entering currents: I1 = 8 A, I2 = 4 A\n- Leaving current: I3 = 7 A\n- Unknown current: I4\n\nSign Convention:\nLet currents entering node = (+) and leaving node = (-).\nAssume I4 is LEAVING the node.\n\nKCL Equation:\nΣ I_entering = Σ I_leaving\nI1 + I2 = I3 + I4\n\nSubstitution:\n8 + 4 = 7 + I4\n12 = 7 + I4\n\nCalculation:\nI4 = 12 - 7\nI4 = 5 A\n\nSince calculated I4 is positive (+5 A), our assumption that I4 LEAVES the node is CORRECT.\n\nAnswer: Unknown current I4 = 5 A (leaving the node).',
        hi: 'दिया गया है:\n- प्रवेश धाराएँ: I1 = 8 A, I2 = 4 A\n- निकास धारा: I3 = 7 A\n\nमाना I4 नोड से बाहर निकल रही है।\n\nKCL समीकरण:\nI1 + I2 = I3 + I4\n8 + 4 = 7 + I4\n12 = 7 + I4\nI4 = 5 A\n\nउत्तर: अज्ञात धारा I4 = 5 A (नोड से बाहर निकल रही है)।',
        bn: 'প্রদত্ত:\n- প্রবেশকারী কারেন্ট: I1 = ৮ A, I2 = ৪ A\n- বহির্গামী কারেন্ট: I3 = ৭ A\n\nধরি I4 নোড থেকে বের হচ্ছে।\n\nKCL সমীকরণ:\nI1 + I2 = I3 + I4\n৮ + ৪ = ৭ + I4\n১২ = ৭ + I4\nI4 = ৫ A\n\nউত্তর: অজানা কারেন্ট I4 = ৫ A (বহির্গামী)।'
      },
      givenValues: {
        'I1 (In)': '8 A',
        'I2 (In)': '4 A',
        'I3 (Out)': '7 A'
      },
      finalAnswer: {
        en: 'I4 = 5 A (Leaving the node)',
        hi: 'I4 = 5 A (नोड से बाहर निकल रही है)',
        bn: 'I4 = ৫ A (বহির্গামী)'
      }
    },
    {
      id: 'ex-kcl-2',
      problem: {
        en: 'In a parallel branch DC distribution network node, five currents meet: I1 = 15 A (in), I2 = 6 A (out), I3 = -4 A (assumed out), and I4 = 9 A (out). Determine the exact value and true physical direction of the unknown current I5.',
        hi: 'समांतर शाखा डीसी वितरण नेटवर्क नोड पर पाँच धाराएँ मिलती हैं: I1 = 15 A (प्रवेश), I2 = 6 A (निकास), I3 = -4 A (निकास माना गया), और I4 = 9 A (निकास)। अज्ञात धारा I5 का सटीक मान और वास्तविक दिशा ज्ञात करें।',
        bn: 'প্যারালাল ব্রাঞ্চ ডিসি ডিস্ট্রিবিউশন নোডে ৫ টি কারেন্ট মিলিত হয়: I1 = ১৫ A (প্রবেশ), I2 = ৬ A (বহির্গামী), I3 = -৪ A (বহির্গামী ধরা হয়েছে), এবং I4 = ৯ A (বহির্গামী)। অজানা কারেন্ট I5 এর মান ও প্রকৃত দিক নির্ণয় করুন।'
      },
      solution: {
        en: 'Given:\n- I1 = +15 A (entering)\n- I2 = +6 A (leaving)\n- I3 = -4 A (assigned leaving direction, which means true physical current is 4 A entering)\n- I4 = +9 A (leaving)\n- Unknown: I5 (assume leaving)\n\nKCL Equation (Σ I_entering = Σ I_leaving):\nI1 = I2 + I3 + I4 + I5\n\nSubstitution:\n15 = 6 + (-4) + 9 + I5\n15 = 11 + I5\n\nCalculation:\nI5 = 15 - 11\nI5 = 4 A\n\nSince calculated I5 is positive (+4 A), I5 actually LEAVES the node.\n\nVerification:\nTotal entering = I1 + true(I3) = 15 + 4 = 19 A.\nTotal leaving = I2 + I4 + I5 = 6 + 9 + 4 = 19 A.\n19 A = 19 A (KCL Balanced).',
        hi: 'दिया गया है:\n- I1 = 15 A (प्रवेश)\n- I2 = 6 A (निकास), I3 = -4 A (निकास), I4 = 9 A (निकास)\n\nKCL समीकरण:\n15 = 6 + (-4) + 9 + I5\n15 = 11 + I5\nI5 = 4 A\n\nसत्यापन: कुल प्रवेश धारा = 15 + 4 = 19 A। कुल निकास धारा = 6 + 9 + 4 = 19 A। (संतुलित)।',
        bn: 'প্রদত্ত:\n- I1 = ১৫ A (প্রবেশ)\n- I2 = ৬ A, I3 = -৪ A, I4 = ৯ A (সব বহির্গামী ধরা হয়েছে)\n\nKCL সমীকরণ:\n১৫ = ৬ + (-৪) + ৯ + I5\n১৫ = ১১ + I5\nI5 = ৪ A\n\nযাচাইকরণ: মোট প্রবেশকারী কারেন্ট = ১৫ + ৪ = ১৯ A। মোট বহির্গামী কারেন্ট = ৬ + ৯ + ৪ = ১৯ A। (সাম্যাবস্থা নিশ্চিত)।'
      },
      givenValues: {
        'I1': '15 A (In)',
        'I2': '6 A (Out)',
        'I3': '-4 A (Out)',
        'I4': '9 A (Out)'
      },
      finalAnswer: {
        en: 'I5 = 4 A (Leaving the node)',
        hi: 'I5 = 4 A (नोड से बाहर निकल रही है)',
        bn: 'I5 = ৪ A (বহির্গামী)'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Junction Box Wiring Analysis: Verifying neutral wire current equilibrium in 3-wire DC distribution systems.',
      'Control Panel Busbar Branch Sizing: Ensuring total branch feeder currents do not exceed main trunk copper busbar ampacity.',
      'DC Telecom Power Plants: Calculating battery float charging branch currents vs load branch currents.',
      'Protection Relay Current Transformers (CT): Summing CT secondary currents in differential protection schemes (ΣI = 0 under healthy conditions).'
    ],
    hi: [
      'जंक्शन बॉक्स वायरिंग विश्लेषण: 3-तार डीसी वितरण प्रणालियों में न्यूट्रल तार धारा संतुलन का सत्यापन।',
      'कंट्रोल पैनल बसबार शाखा निर्धारण: यह सुनिश्चित करना कि कुल शाखा धाराएँ मुख्य ट्रंक बसबार की क्षमता से अधिक न हों।',
      'डीसी टेलीकॉम पावर प्लांट: बैटरी फ्लोट चार्जिंग शाखा धाराओं और लोड शाखा धाराओं की गणना।',
      'संरक्षण रिले करंट ट्रांसफॉर्मर (CT): डिफ्रेंशियल प्रोटेक्शन स्कीम में CT धाराओं का योग (सामान्य स्थिति में ΣI = 0)।'
    ],
    bn: [
      'জংশন বক্স ওয়ারিং বিশ্লেষণ: ৩-তার বিশিষ্ট ডিসি ডিস্ট্রিবিউশনে নিউট্রাল তারের কারেন্ট সাম্যাবস্থা যাচাই।',
      'কন্ট্রোল প্যানেল বাসবার সাইজিং: ব্রাঞ্চ কারেন্টের যোগফল যাতে মূল বাসবারের ধারণক্ষমতা অতিক্রম না করে তা নিশ্চিতকরণ।',
      'ডিসি টেলিকম পাওয়ার প্ল্যান্ট: চার্জিং ব্রাঞ্চ কারেন্ট ও লোড ব্রাঞ্চ কারেন্টের সামঞ্জস্যতা হিসাব।',
      'ডিফারেনশিয়াল প্রোটেকশন রিলে: ট্র্যান্সফরমার প্রোটেকশনে CT সেকেন্ডারি কারেন্টের যোগফল যাচাই (স্বাভাবিক অবস্থায় ΣI = 0)।'
    ]
  },
  importantPoints: {
    en: [
      'KCL is based on the Conservation of Charge.',
      'KCL is applied at a NODE or JUNCTION in a circuit.',
      'KCL applies to both linear and non-linear, active and passive DC networks.',
      'A negative calculated current value means the true current flows opposite to the assumed direction arrow.',
      'Nodal analysis method is formulated by applying KCL at all essential non-reference nodes.'
    ],
    hi: [
      'KCL आवेश संरक्षण के सिद्धांत पर आधारित है।',
      'KCL परिपथ के नोड या जंक्शन पर लागू होता है।',
      'KCL लीनियर और नॉन-लीनियर दोनों डीसी नेटवर्क पर लागू होता है।',
      'ऋणात्मक धारा मान का अर्थ है कि वास्तविक धारा मानी गई दिशा के विपरीत बह रही है।',
      'नोडल विश्लेषण विधि सभी मुख्य नोड्स पर KCL लागू करके बनाई जाती है।'
    ],
    bn: [
      'KCL আধান সংরক্ষণের নীতির ওপর প্রতিষ্ঠিত।',
      'KCL সার্কিটের নোড বা জংশনে প্রয়োগ করা হয়।',
      'KCL লিনিয়ার এবং নন-লিনিয়ার উভয় প্রকার নেটওয়ার্কে প্রযোজ্য।',
      'ঋণাাত্মক কারেন্ট মান নির্দেশ করে প্রকৃত কারেন্ট ধরে নেওয়া তীরের বিপরীত দিকে প্রবাহিত।',
      'নোডাল অ্যানালিসিস পদ্ধতি KCL প্রয়োগের ওপর ভিত্তি করে গঠিত।'
    ]
  },
  commonMistakes: {
    en: [
      'Mixing up algebraic sign conventions mid-calculation: Stick to one sign convention (+ for entering, - for leaving) throughout.',
      'Ignoring negative signs in given problem values: A given current of -3 A leaving a node is mathematically identical to +3 A entering that node.',
      'Forgetting hidden branches: Ensure every conductor connected to the node is counted in the equation.',
      'Applying KCL around a closed loop instead of at a single node (KCL is a node law, KVL is a loop law).'
    ],
    hi: [
      'गणना के बीच में चिह्न परिपाटी को मिला देना: पूरी गणना में एक ही चिह्न परिपाटी (+ प्रवेश के लिए, - निकास के लिए) का पालन करें।',
      'दिए गए मानों में ऋणात्मक चिह्नों को नजरअंदाज करना: -3 A निकास धारा +3 A प्रवेश धारा के बराबर होती है।',
      'छिपी हुई शाखाओं को भूलना: सुनिश्चित करें कि नोड से जुड़े प्रत्येक चालक की गणना की गई है।',
      'नोड के बजाय लूप के चारों ओर KCL लागू करना (KCL नोड का नियम है)।'
    ],
    bn: [
      'গণনার মাঝামাঝি সাইন কনভেনশন বদলে ফেলা: সর্বদা একটি নির্দিষ্ট নিয়ম অনুসরণ করুন।',
      'ঋণাত্মক মান উপেক্ষা করা: -৩ A বের হওয়ার অর্থ হলো +৩ A প্রবেশ করা।',
      'যেকোনো ব্রাঞ্চ বাদ দেওয়া: নোডে যুক্ত সকল তার বা কন্ডাক্টর গণনায় যুক্ত করতে হবে।',
      'নোডের পরিবর্তে বন্ধ লুপে KCL প্রয়োগ করা (KCL নোডের নিয়ম, KVL লুপের নিয়ম)।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-kcl-1',
      question: {
        en: "Kirchhoff's Current Law (KCL) is a direct manifestation of which fundamental conservation law of physics?",
        hi: 'किरचॉफ का धारा नियम (KCL) भौतिकी के किस मूलभूत संरक्षण नियम की प्रत्यक्ष अभिव्यक्ति है?',
        bn: 'কার্শফের কারেন্ট সূত্র (KCL) পদার্থবিজ্ঞানের কোন মৌলিক সংরক্ষণ নীতির ওপর প্রতিষ্ঠিত?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Conservation of Energy', hi: 'ऊर्जा का संरक्षण', bn: 'শক্তি সংরক্ষণ নীতি' } },
        { id: 'opt-b', text: { en: 'Conservation of Charge', hi: 'आवेश का संरक्षण', bn: 'আধান সংরক্ষণ নীতি' } },
        { id: 'opt-c', text: { en: 'Conservation of Momentum', hi: 'संवेग का संरक्षण', bn: 'ভরবেগ সংরক্ষণ নীতি' } },
        { id: 'opt-d', text: { en: 'Conservation of Magnetic Flux', hi: 'चुंबकीय फ्लक्स का संरक्षण', bn: 'চৌম্বক ফ্লাক্স সংরক্ষণ নীতি' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'KCL is based on the principle of conservation of electric charge, stating that charge cannot accumulate or dissipate at a junction node under steady conditions.',
        hi: 'KCL विद्युत आवेश के संरक्षण के सिद्धांत पर आधारित है, जो बताता है कि नोड पर आवेश जमा नहीं हो सकता।',
        bn: 'KCL আধান সংরক্ষণের নীতির ওপর প্রতিষ্ঠিত, যা নির্দেশ করে নোডে চার্জ জমতে পারে না।'
      }
    },
    {
      id: 'mcq-kcl-2',
      question: {
        en: 'At a circuit node, three currents are entering: 2 A, 5 A, and 1 A. Two currents are leaving: 3 A and I_x. What is the value of I_x?',
        hi: 'एक सर्किट नोड पर, तीन धाराएँ प्रवेश कर रही हैं: 2 A, 5 A, और 1 A। दो धाराएँ निकल रही हैं: 3 A और I_x। I_x का मान क्या है?',
        bn: 'একটি নোডে তিনটি কারেন্ট প্রবেশ করছে: ২ A, ৫ A, এবং ১ A। দুটি কারেন্ট বের হচ্ছে: ৩ A এবং I_x। I_x এর মান কত?'
      },
      options: [
        { id: 'opt-a', text: { en: '8 A', hi: '8 A', bn: '৮ A' } },
        { id: 'opt-b', text: { en: '5 A', hi: '5 A', bn: '৫ A' } },
        { id: 'opt-c', text: { en: '11 A', hi: '11 A', bn: '১১ A' } },
        { id: 'opt-d', text: { en: '2 A', hi: '2 A', bn: '২ A' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'Sum entering = 2 + 5 + 1 = 8 A. Sum leaving = 3 + I_x = 8 A. Therefore, I_x = 8 - 3 = 5 A.',
        hi: 'कुल प्रवेश = 2 + 5 + 1 = 8 A। कुल निकास = 3 + I_x = 8 A। इसलिए I_x = 5 A।',
        bn: 'মোট প্রবেশ = ২ + ৫ + ১ = ৮ A। মোট বের হওয়া = ৩ + I_x = ৮ A। সুতরাং I_x = ৫ A।'
      }
    },
    {
      id: 'mcq-kcl-3',
      question: {
        en: 'If a calculated branch current in a circuit nodal equation turns out to be -3.5 A, what does the negative sign signify?',
        hi: 'यदि नोडल समीकरण में किसी शाखा धारा का परिकलित मान -3.5 A आता है, तो ऋणात्मक चिह्न क्या दर्शाता है?',
        bn: 'গণনায় প্রাপ্ত কোনো ব্রাঞ্চ কারেন্টের মান -৩.৫ A হলে, ঋণাত্মক চিহ্নটি কী নির্দেশ করে?'
      },
      options: [
        { id: 'opt-a', text: { en: 'The calculation contains a numerical error', hi: 'गणना में कोई त्रुटि है', bn: 'গণনায় কোনো ত্রুটি রয়েছে' } },
        { id: 'opt-b', text: { en: 'The current magnitude is zero', hi: 'धारा का मान शून्य है', bn: 'কারেন্টের মান শূন্য' } },
        { id: 'opt-c', text: { en: 'The actual physical current flows opposite to the assumed direction', hi: 'वास्तविक धारा मानी गई दिशा के विपरीत बह रही है', bn: 'প্রকৃত কারেন্ট ধরে নেওয়া তীরের বিপরীত দিকে বইছে' } },
        { id: 'opt-d', text: { en: 'The circuit node is storing power', hi: 'नोड शक्ति संचित कर रहा है', bn: 'নোড শক্তি সঞ্চয় করছে' } }
      ],
      correctOptionId: 'opt-c',
      explanation: {
        en: 'A negative current result simply indicates that the true direction of physical electron/charge flow is opposite to the initial assumed arrow direction.',
        hi: 'ऋणात्मक धारा मान का अर्थ है कि वास्तविक धारा मानी गई तीर की दिशा के ठीक विपरीत बह रही है।',
        bn: 'ঋণাত্মক মান নির্দেশ করে যে প্রকৃত কারেন্ট ধরে নেওয়া দিক চিহ্নিত তীরের উল্টো দিকে প্রবাহিত হচ্ছে।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-kcl-1',
      question: {
        en: 'State Kirchhoff\'s Current Law (KCL) in both words and mathematical equation form. Why is charge conservation guaranteed at a circuit node?',
        hi: 'शब्दों और गणितीय समीकरण दोनों रूपों में किरचॉफ का धारा नियम (KCL) लिखें। नोड पर आवेश संरक्षण क्यों निश्चित होता है?',
        bn: 'কার্শফের কারেন্ট সূত্র (KCL) গাণিতিক রূপ ও কথায় লিখুন। কেন নোডে আধান সংরক্ষিত থাকে?'
      },
      hint: {
        en: 'Mention zero nodal capacitance and steady-state charge flow.',
        hi: 'नोड पर शून्य धारिता और स्थिर धारा प्रवाह का उल्लेख करें।',
        bn: 'নোডে শূন্য ক্যাপাসিট্যান্স এবং আধান প্রবাহের কথা উল্লেখ করুন।'
      },
      answerKey: {
        en: 'KCL Statement: The algebraic sum of all currents entering and leaving a junction node in an electrical circuit is equal to zero (ΣI = 0), or equivalently, Total Entering Current = Total Leaving Current.\n\nCharge Conservation Reason: A circuit node is a single geometric point with zero physical volume and zero capacitance. Charges cannot accumulate or be stored at a node under steady DC conditions; every electron arriving at a node must instantaneously leave through available parallel branches.',
        hi: 'KCL कथन: विद्युत परिपथ के किसी जंक्शन नोड पर मिलने वाली सभी धाराओं का बीजगणितीय योग शून्य होता है (ΣI = 0)।\n\nकारण: नोड का आयतन और धारिता शून्य होती है। इसलिए डीसी परिस्थितियों में आवेश जमा नहीं हो सकता; प्रवेश करने वाले प्रत्येक इलेक्ट्रॉन को तुरंत बाहर निकलना पड़ता है।',
        bn: 'KCL সূত্র: বৈদুতিক সার্কিটের যেকোনো নোডে মিলিত কারেন্টসমূহের বীজগণিতীয় যোগফল শূন্য (ΣI = 0), অর্থাৎ প্রবেশকারী কারেন্ট = বহির্গামী কারেন্ট।\n\nকারণ: নোডের স্থান বা ক্যাপাসিট্যান্স শূন্য। তাই স্থায়ী অবস্থায় চার্জ জমা হতে পারে না; প্রবেশকৃত ইলেকট্রন সাথে সাথে বের হয়ে যায়।'
      }
    },
    {
      id: 'pq-kcl-2',
      question: {
        en: 'In a 4-branch essential node, branch currents are defined as: I1 = 10 A (entering), I2 = 3 A (leaving), I3 = -5 A (entering). Calculate the unknown current I4 and state its true physical direction.',
        hi: 'एक 4-शाखा मुख्य नोड में: I1 = 10 A (प्रवेश), I2 = 3 A (निकास), I3 = -5 A (प्रवेश)। अज्ञात धारा I4 की गणना करें और इसकी वास्तविक दिशा बताएं।',
        bn: 'একটি ৪-ব্রাঞ্চ নোডে: I1 = ১০ A (প্রবেশ), I2 = ৩ A (বহির্গামী), I3 = -৫ A (প্রবেশ)। অজানা কারেন্ট I4 এবং এর প্রকৃত দিক নির্ণয় করুন।'
      },
      hint: {
        en: 'A current of -5 A entering is equivalent to +5 A leaving.',
        hi: '-5 A प्रवेश करने वाली धारा +5 A बाहर निकलने वाली धारा के बराबर है।',
        bn: '-৫ A প্রবেশকারী কারেন্ট হলো +৫ A বহির্গামী কারেন্টের সমতুল্য।'
      },
      answerKey: {
        en: 'Given:\n- Entering currents: I1 = +10 A, I3 = -5 A (which means +5 A is actually leaving)\n- Leaving currents: I2 = +3 A, and unknown I4 (assume leaving)\n\nKCL Equation:\nΣ I_entering = Σ I_leaving\nI1 = I2 + (true I3 leaving) + I4\n10 = 3 + 5 + I4\n10 = 8 + I4\nI4 = 10 - 8 = +2 A\n\nSince calculated I4 = +2 A (positive), I4 physically LEAVES the node with a magnitude of 2 A.',
        hi: 'प्रवेश धाराएँ: I1 = 10 A, I3 = -5 A (अर्थात 5 A बाहर निकल रही है)।\nनिकास धाराएँ: I2 = 3 A, I4 (निकास माना गया)।\n\nKCL समीकरण:\n10 = 3 + 5 + I4\n10 = 8 + I4\nI4 = 2 A\n\nउत्तर: I4 = 2 A (नोड से बाहर निकल रही है)।',
        bn: 'প্রবেশকারী: I1 = ১০ A, I3 = -৫ A (অর্থাৎ ৫ A বহির্গামী)।\nবহির্গামী: I2 = ৩ A, I4 (ধরা যাক বহির্গামী)।\n\nKCL সমীকরণ:\n১০ = ৩ + ৫ + I4\n১০ = ৮ + I4\nI4 = ২ A\n\nউত্তর: I4 = ২ A (বহির্গামী)।'
      }
    }
  ]
};

export const LESSON_KVL: Lesson = {
  id: 'lsn-ch4-kvl',
  topicId: 'ch4-kvl',
  order: 3,
  title: {
    en: "Kirchhoff's Voltage Law (KVL)",
    hi: 'किरचॉफ का वोल्टेज नियम (KVL)',
    bn: 'কার্শফের ভোল্টেজ সূত্র (KVL)'
  },
  easyExplanation: {
    en: "Kirchhoff's Voltage Law (KVL) states that the sum of all electric potential differences (voltage rises and voltage drops) around any closed loop in a circuit must equal zero. This guarantees conservation of energy.",
    hi: 'किरचॉफ का वोल्टेज नियम (KVL) बताता है कि परिपथ के किसी भी बंद लूप में सभी विभवांतरों (वोल्टेज वृद्धि और वोल्टेज गिरावट) का योग शून्य होना चाहिए। यह ऊर्जा के संरक्षण की गारंटी देता है।',
    bn: 'কার্শফের ভোল্টেজ সূত্র (KVL) অনুযায়ী সার্কিটের যেকোনো আবদ্ধ লুপের বিভব পার্থক্যের (ভোল্টেজ বৃদ্ধি ও পতন) বীজগণিতীয় যোগফল শূন্য। এটি শক্তি সংরক্ষণের প্রতীক।'
  },
  detailedExplanation: {
    en: '1. Fundamentals & Conservation Principle: Kirchhoff\'s Voltage Law (KVL) is derived directly from the Principle of Conservation of Energy. In a conservative electrostatic field, the net work done in moving a unit charge around any closed loop path is zero.\n\n2. Formal Statement: The algebraic sum of all voltages (potential differences) around any closed loop in a circuit is zero:\n   Σ V_k = 0  (around a closed loop)\n\n3. Equivalent Formulation: Sum of potential rises = Sum of potential drops:\n   Σ V_rises = Σ V_drops\n\n4. Loop Traversal & Sign Conventions:\n- Choose a traversal direction around the closed loop: Clockwise (CW) or Counter-Clockwise (CCW).\n- Potential Rise (+): Moving from a lower potential (-) terminal to a higher potential (+) terminal (e.g., across a DC battery from - to +) represents a potential RISE (+V).\n- Potential Drop (-): Moving from a higher potential (+) terminal to a lower potential (-) terminal (e.g., in the direction of current through a resistor) represents a potential DROP (-I·R).\n\n5. Steps for Applying KVL in Loop Analysis:\n- Assign branch current directions (e.g., I_1, I_2).\n- Mark voltage polarities across all passive resistors (+ where current enters, - where current leaves).\n- Trace around the closed loop in one chosen direction.\n- Write the KVL equation setting the sum of all voltage terms to zero.\n\n6. Comparison: KCL vs KVL:\n- KCL: Based on Conservation of Charge | Applied at a Node | Solves for Node Voltages.\n- KVL: Based on Conservation of Energy | Applied around a Closed Loop | Solves for Loop Currents.',
    hi: '1. मूलभूत एवं संरक्षण सिद्धांत: किरचॉफ का वोल्टेज नियम (KVL) सीधे ऊर्जा के संरक्षण के सिद्धांत से उत्पन्न होता है। बंद लूप के चारों ओर एक इकाई आवेश को स्थानांतरित करने में किया गया कुल कार्य शून्य होता है।\n\n2. नियम का कथन: परिपथ में किसी भी बंद लूप के चारों ओर सभी वोल्टेज (विभवांतरों) का बीजगणितीय योग शून्य होता है:\n   Σ V_k = 0\n\n3. तुल्य रूप: वोल्टेज वृद्धि का योग = वोल्टेज गिरावट का योग:\n   Σ V_rises = Σ V_drops\n\n4. लूप ट्रैवर्सल एवं चिह्न परिपाटी:\n- पोटेंशियल राइज (+): ऋणात्मक (-) से धनात्मक (+) टर्मिनल की ओर जाने पर वोल्टेज वृद्धि (+V) होती है।\n- पोटेंशियल ड्रॉप (-): धनात्मक (+) से ऋणात्मक (-) टर्मिनल की ओर जाने पर वोल्टेज गिरावट (-I·R) होती है।\n\n5. KCL बनाम KVL तुलना:\n- KCL: आवेश संरक्षण पर आधारित | नोड पर लागू | नोड वोल्टेज हल करता है।\n- KVL: ऊर्जा संरक्षण पर आधारित | बंद लूप पर लागू | लूप धारा हल करता है।',
    bn: '১. শক্তি সংরক্ষণ মূলনীতি: কার্শফের ভোল্টেজ সূত্র (KVL) সরাসরি শক্তি সংরক্ষণ নীতির ওপর ভিত্তি করে গঠিত। আবদ্ধ লুপে একটি আধানকে ঘুরিয়ে আনতে মোট কাজের পরিমাণ শূন্য।\n\n২. সূত্রের মূল কথা: সার্কিটের যেকোনো আবদ্ধ লুপে ভোল্টেজসমূহের বীজগণিতীয় যোগফল শূন্য:\n   Σ V_k = 0\n\n৩. বিকল্প রূপ: বিভব বৃদ্ধি = বিভব পতন:\n   Σ V_rises = Σ V_drops\n\n৪. দিক নির্ধারণ ও প্রতীক:\n- বিভব বৃদ্ধি (+): ঋণাত্মক (-) থেকে ধনাত্মক (+) টার্মিনালে যাওয়ার সময় ভোল্টেজ বৃদ্ধি পায় (+V)।\n- বিভব পতন (-): ধনাত্মক (+) থেকে ঋণাত্মক (-) টার্মিনালে যাওয়ার সময় ভোল্টেজ পতন ঘটে (-I·R)।\n\n৫. KCL বনাম KVL তুলনা:\n- KCL: আধান সংরক্ষণের নীতি | নোডে প্রযোজ্য | নোড ভোল্টেজ নির্ণয় করে।\n- KVL: শক্তি সংরক্ষণের নীতি | আবদ্ধ লুপে প্রযোজ্য | লুপ কারেন্ট নির্ণয় করে।'
  },
  formulas: [
    {
      symbol: 'ΣV',
      expression: 'Σ V_rises = Σ V_drops',
      description: {
        en: 'KVL Loop Energy Balance Equation (Voltage rises equal voltage drops in closed loop)',
        hi: 'KVL लूप ऊर्जा संतुलन समीकरण (वोल्टेज वृद्धि = वोल्टेज गिरावट)',
        bn: 'KVL লুপ সমীকরণ (বিভব বৃদ্ধি = বিভব পতন)'
      }
    },
    {
      symbol: 'ΣV_loop',
      expression: 'V_S - I·R₁ - I·R₂ - I·R₃ = 0',
      description: {
        en: 'Single-source series loop KVL equation',
        hi: 'एकल-स्रोत श्रेणी लूप KVL समीकरण',
        bn: 'একক সোর্স বিশিষ্ট সিরিজ লুপ KVL সমীকরণ'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-kvl-loop',
      title: {
        en: 'KVL Closed Electrical Loop Diagram',
        hi: 'KVL बंद विद्युत लूप आरेख',
        bn: 'KVL ক্লোজড বৈদুতিক লুপ চিত্র'
      },
      caption: {
        en: 'Schematic representation of potential rises across source and potential drops across series resistors in a closed KVL loop.',
        hi: 'बंद KVL लूप में स्रोत पर वोल्टेज वृद्धि और श्रेणी प्रतिरोधकों पर वोल्टेज गिरावट का निरूपण।',
        bn: 'আবদ্ধ KVL লুপে সোর্স ভোল্টেজ বৃদ্ধি এবং রেজিস্টরের ভোল্টেজ পতনের চিত্র।'
      },
      svgType: 'circuit-kvl-loop'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-kvl-1',
      problem: {
        en: 'A single-loop DC circuit contains a 36 V battery connected in series with three resistors: R1 = 6 Ω, R2 = 8 Ω, and R3 = 4 Ω. Calculate the loop current I, individual voltage drops across each resistor (V1, V2, V3), and verify KVL around the loop.',
        hi: 'एक एकल-लूप डीसी परिपथ में 36 V की बैटरी तीन प्रतिरोधकों: R1 = 6 Ω, R2 = 8 Ω, तथा R3 = 4 Ω के साथ श्रेणीक्रम में जुड़ी है। लूप धारा I, प्रत्येक प्रतिरोधक पर वोल्टेज गिरावट (V1, V2, V3) की गणना करें और KVL का सत्यापन करें।',
        bn: 'একটি সিঙ্গেল লুপ সার্কিটে ৩৬ V ব্যাটারি তিনটি রেজিস্টরের সাথে সিরিজে যুক্ত: R1 = ৬ Ω, R2 = ৮ Ω, এবং R3 = ৪ Ω। লুপ কারেন্ট I, রেজিস্টরসমূহের ভোল্টেজ ড্রপ (V1, V2, V3) নির্ণয় করুন এবং KVL যাচাই করুন।'
      },
      solution: {
        en: 'Given:\n- Source Voltage V_S = 36 V\n- Resistors: R1 = 6 Ω, R2 = 8 Ω, R3 = 4 Ω\n\nStep 1: Calculate Total Loop Resistance\nR_total = R1 + R2 + R3 = 6 + 8 + 4 = 18 Ω\n\nStep 2: Calculate Circuit Loop Current I\nI = V_S / R_total = 36 / 18 = 2.0 A\n\nStep 3: Calculate Individual Voltage Drops\n- V1 = I · R1 = 2.0 · 6 = 12.0 V\n- V2 = I · R2 = 2.0 · 8 = 16.0 V\n- V3 = I · R3 = 2.0 · 4 = 8.0 V\n\nStep 4: Verify KVL around Clockwise Loop\nΣ V_rises = 36 V\nΣ V_drops = V1 + V2 + V3 = 12 + 16 + 8 = 36 V\nΣ V = V_S - V1 - V2 - V3 = 36 - 12 - 16 - 8 = 0 V (KVL Verified!).',
        hi: 'दिया गया है:\n- V_S = 36 V, R1 = 6 Ω, R2 = 8 Ω, R3 = 4 Ω\n\nचरण 1: कुल प्रतिरोध R_total = 6 + 8 + 4 = 18 Ω\nचरण 2: लूप धारा I = 36 / 18 = 2.0 A\nचरण 3: वोल्टेज गिरावट:\n- V1 = 2 × 6 = 12 V\n- V2 = 2 × 8 = 16 V\n- V3 = 2 × 4 = 8 V\n\nसत्यापन: 36 - 12 - 16 - 8 = 0 V (KVL सत्य है)।',
        bn: 'প্রদত্ত:\n- V_S = ৩৬ V, R1 = ৬ Ω, R2 = ৮ Ω, R3 = ৪ Ω\n\nধাপ ১: মোট রেজিস্ট্যান্স R_total = ৬ + ৮ + ৪ = ১৮ Ω\nধাপ ২: লুপ কারেন্ট I = ৩৬ / ১৮ = ২.০ A\nধাপ ৩: ভোল্টেজ ড্রপ:\n- V1 = ২ × ৬ = ১২ V\n- V2 = ২ × ৮ = ১৬ V\n- V3 = ২ × ৪ = ৮ V\n\nযাচাইকরণ: ৩৬ - ১২ - ১৬ - ৮ = ০ V (KVL প্রমাণিত)।'
      },
      givenValues: {
        'V_S': '36 V',
        'R1': '6 Ω',
        'R2': '8 Ω',
        'R3': '4 Ω'
      },
      finalAnswer: {
        en: 'Loop Current I = 2.0 A | V1 = 12V, V2 = 16V, V3 = 8V (ΣV = 0 V)',
        hi: 'लूप धारा I = 2.0 A | V1 = 12V, V2 = 16V, V3 = 8V (ΣV = 0 V)',
        bn: 'লুপ কারেন্ট I = ২.০ A | V1 = ১২V, V2 = ১৬V, V3 = ৮V (ΣV = ০ V)'
      }
    },
    {
      id: 'ex-kvl-2',
      problem: {
        en: 'A closed single loop contains two opposing DC batteries E1 = 28 V and E2 = 10 V connected in series opposition along with resistors R1 = 4 Ω and R2 = 5 Ω. Find the magnitude of loop current I and the terminal voltage across resistor R2.',
        hi: 'एक बंद एकल लूप में दो विरोधी डीसी बैटरियां E1 = 28 V और E2 = 10 V श्रेणी विरोध में जुड़ी हैं, साथ में प्रतिरोधक R1 = 4 Ω और R2 = 5 Ω हैं। लूप धारा I का मान तथा प्रतिरोधक R2 पर टर्मिनल वोल्टेज ज्ञात करें।',
        bn: 'একটি বন্ধ লুপে দুটি বিপরীত ব্যাটারি E1 = ২৮ V এবং E2 = ১০ V সিরিজে বিপরীতভাবে যুক্ত, এবং রেজিস্টর R1 = ৪ Ω ও R2 = ৫ Ω আছে। লুপ কারেন্ট I এবং R2 এর ভোল্টেজ নির্ণয় করুন।'
      },
      solution: {
        en: 'Given:\n- Battery E1 = 28 V (aiding counter-clockwise current)\n- Battery E2 = 10 V (opposing counter-clockwise current)\n- Net EMF E_net = E1 - E2 = 28 - 10 = 18 V\n- Resistors: R1 = 4 Ω, R2 = 5 Ω\n\nStep 1: Calculate Total Loop Resistance\nR_total = R1 + R2 = 4 + 5 = 9 Ω\n\nStep 2: Calculate Loop Current I\nI = E_net / R_total = 18 / 9 = 2.0 A\n\nStep 3: Calculate Voltage Drop V_R2\nV_R2 = I · R2 = 2.0 · 5 = 10.0 V\n\nVerification by KVL:\nE1 - I·R1 - E2 - I·R2 = 0\n28 - (2·4) - 10 - (2·5) = 28 - 8 - 10 - 10 = 0 V.',
        hi: 'दिया गया है:\n- कुल प्रभावी EMF = 28 - 10 = 18 V\n- कुल प्रतिरोध R_total = 4 + 5 = 9 Ω\n\nलूप धारा I = 18 / 9 = 2.0 A\nV_R2 = 2.0 × 5 = 10.0 V\n\nसत्यापन: 28 - 8 - 10 - 10 = 0 V (KVL सत्यापित)।',
        bn: 'প্রদত্ত:\n- নিট EMF = ২৮ - ১০ = ১৮ V\n- মোট রেজিস্ট্যান্স R_total = ৪ + ৫ = ৯ Ω\n\nলুপ কারেন্ট I = ১৮ / ৯ = ২.০ A\nV_R2 = ২.০ × ৫ = ১০.০ V\n\nযাচাইকরণ: ২৮ - ৮ - ১০ - ১০ = ০ V (KVL প্রমাণিত)।'
      },
      givenValues: {
        'E1': '28 V',
        'E2 (Opposing)': '10 V',
        'R1': '4 Ω',
        'R2': '5 Ω'
      },
      finalAnswer: {
        en: 'Loop Current I = 2.0 A | Voltage across R2 = 10.0 V',
        hi: 'लूप धारा I = 2.0 A | R2 पर वोल्टेज = 10.0 V',
        bn: 'লুপ কারেন্ট I = ২.০ A | R2 এর ভোল্টেজ = ১০.০ V'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Substation Loop Mesh Voltage Profiling: Calculating voltage drops across transmission lines during heavy peak loads.',
      'DC Solar Array String Calculations: Verifying string open-circuit voltage against inverter maximum input DC voltage limits.',
      'Mesh Analysis in Power Grids: Formulation of loop impedance matrices (Z_mesh) for industrial short-circuit fault analysis.',
      'Automotive Harness Drop Diagnostics: Detecting high-resistance corrosion contacts by measuring voltage drop across closed loops.'
    ],
    hi: [
      'सबस्टेशन लूप मेष वोल्टेज प्रोफ़ाइलिंग: भारी पीक लोड के दौरान ट्रांसमिशन लाइनों में वोल्टेज गिरावट की गणना।',
      'डीसी सोलर एरे स्ट्रिंग गणना: इन्वर्टर की अधिकतम इनपुट सीमा के विरुद्ध स्ट्रिंग वोल्टेज का सत्यापन।',
      'पावर ग्रिड में मेष विश्लेषण: औद्योगिक शॉर्ट-सर्किट फॉल्ट विश्लेषण के लिए लूप प्रतिबाधा आव्यूह (Z_mesh) का निर्माण।',
      'ऑटोमोटिव हार्नेस ड्रॉप डायग्नोस्टिक्स: बंद लूप में वोल्टेज ड्रॉप मापकर उच्च-प्रतिरोध जंग संपर्कों का पता लगाना।'
    ],
    bn: [
      'সাবস্টেশন লুপ মেশ ভোল্টেজ প্রোফাইলিং: পিক লোড চলাকালে সোর্স ট্রান্সমিশন লাইনে ভোল্টেজ ড্রপ হিসাব।',
      'ডিসি সোলার অ্যারে স্ট্রিং গণনা: ইনভার্টারের সর্বোচ্চ ভোল্টেজ ক্ষমতার সাথে সোলার স্ট্রিং ভোল্টেজ মেলানো।',
      'পাওয়ার গ্রিডে মেশ অ্যানালিসিস: শিল্পক্ষেত্রে শর্ট সার্কিট ফল্ট নির্ধারণের জন্য লুপ ইম্পিডেন্স ম্যাট্রিক্স তৈরি।',
      'অটোমোটিভ ওয়্যারিং ড্রপ ডায়াগনস্টিকস: বন্ধ লুপে ভোল্টেজ ড্রপ মেপে সংযোগস্থলের মরিচা বা লুজ কানেকশন নির্ণয়।'
    ]
  },
  importantPoints: {
    en: [
      'KVL is based on the Conservation of Energy.',
      'KVL is applied around a CLOSED LOOP or MESH.',
      'Potential RISE occurs when moving from (-) to (+) terminal; Potential DROP occurs when moving from (+) to (-) terminal.',
      'In a resistor, potential drops in the direction of electric current flow.',
      'Mesh analysis method uses KVL equations written around each independent loop.'
    ],
    hi: [
      'KVL ऊर्जा के संरक्षण पर आधारित है।',
      'KVL एक बंद लूप या मेष के चारों ओर लागू होता है।',
      '(-) से (+) जाने पर वोल्टेज वृद्धि; (+) से (-) जाने पर वोल्टेज गिरावट होती है।',
      'प्रतिरोधक में धारा प्रवाह की दिशा में विभव घटता (ड्रॉप) है।',
      'मेष विश्लेषण विधि प्रत्येक स्वतंत्र लूप में KVL समीकरणों का उपयोग करती है।'
    ],
    bn: [
      'KVL শক্তি সংরক্ষণের নীতির ওপর প্রতিষ্ঠিত।',
      'KVL যেকোনো বন্ধ লুপ বা মেশের ক্ষেত্রে প্রযোজ্য।',
      '(-) থেকে (+) টার্মিনালে যাওয়ার সময় বিভব বৃদ্ধি এবং (+) থেকে (-) টার্মিনালে বিভব পতন ঘটে।',
      'রেজিস্টরের মধ্য দিয়ে কারেন্ট প্রবাহের দিকে ভোল্টেজ ড্রপ ঘটে।',
      'মেশ অ্যানালিসিস পদ্ধতি প্রতিটি স্বাধীন লুপে KVL প্রয়োগের মাধ্যমে কাজ করে।'
    ]
  },
  commonMistakes: {
    en: [
      'Forgetting resistor polarity: Always mark + where current enters a passive resistor and - where it exits.',
      'Confusing opposing source polarities: Two batteries in series with (+) connected to (+) oppose each other (E_net = E1 - E2).',
      'Omitting internal resistance drops: Real voltage sources have internal resistance R_s that causes a drop I·R_s.',
      'Mixing up KCL and KVL: KCL sums currents at a node (ΣI=0); KVL sums voltages around a closed loop (ΣV=0).'
    ],
    hi: [
      'प्रतिरोधक की ध्रुवता भूलना: हमेशा पैसिव प्रतिरोधक में धारा प्रवेश बिंदु पर + और निकास बिंदु पर - चिह्नित करें।',
      'विरोधी स्रोत ध्रुवताओं में भ्रमित होना: (+) से (+) जुड़ी दो बैटरियां एक-दूसरे का विरोध करती हैं।',
      'आंतरिक प्रतिरोध गिरावट को छोड़ना: वास्तविक स्रोतों में R_s होता है जो I·R_s गिरावट का कारण बनता है।',
      'KCL और KVL में भ्रमित होना (KCL नोड पर धारा का योग है; KVL लूप में वोल्टेज का योग है)।'
    ],
    bn: [
      'রেজিস্টরের পোলারিটি চিহ্নে ভুল: রেজিস্টরে কারেন্ট প্রবেশের স্থান + এবং বের হওয়ার স্থান - হিসেবে চিহ্নিত করতে হবে।',
      'বিপরীত সোর্স পোলারিটিতে বিভ্রান্তি: দুটি ব্যাটারির (+) প্রান্তের সাথে (+) যুক্ত থাকলে তারা পরস্পরকে বাধা দেয় (E_net = E1 - E2)।',
      'অভ্যন্তরীণ রেজিস্ট্যান্সের ড্রপ বাদ দেওয়া: বাস্তব সোর্সে R_s ড্রপ হিসাব না করলে ফলাফল নির্ভুল হবে না।',
      'KCL এবং KVL এর মধ্যে ভুল করা (KCL নোডে কারেন্টের যোগফল, KVL বন্ধ লুপে ভোল্টেজের যোগফল)।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-kvl-1',
      question: {
        en: "Kirchhoff's Voltage Law (KVL) is derived directly from which physical principle?",
        hi: 'किरचॉफ का वोल्टेज नियम (KVL) सीधे किस भौतिक सिद्धांत से व्युत्पन्न हुआ है?',
        bn: 'কার্শফের ভোল্টেজ সূত্র (KVL) সরাসরি কোন ভৌত নীতির ওপর ভিত্তি করে তৈরি?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Conservation of Energy', hi: 'ऊर्जा का संरक्षण', bn: 'শক্তি সংরক্ষণ নীতি' } },
        { id: 'opt-b', text: { en: 'Conservation of Charge', hi: 'आवेश का संरक्षण', bn: 'আধান সংরক্ষণ নীতি' } },
        { id: 'opt-c', text: { en: 'Ohm\'s Law', hi: 'ओम का नियम', bn: 'ওহমের সূত্র' } },
        { id: 'opt-d', text: { en: 'Coulomb\'s Law', hi: 'कूलॉम का नियम', bn: 'কুলম্বের সূত্র' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'KVL is based on the principle of conservation of energy. The work done in taking a unit charge around any closed loop in a circuit must be zero.',
        hi: 'KVL ऊर्जा संरक्षण के सिद्धांत पर आधारित है। किसी बंद लूप में एक इकाई आवेश को ले जाने में किया गया कार्य शून्य होता है।',
        bn: 'KVL শক্তি সংরক্ষণ নীতির ওপর ভিত্তি করে গঠিত। কোনো আবদ্ধ লুপে চার্জ ঘুরিয়ে আনতে মোট কাজের পরিমাণ শূন্য।'
      }
    },
    {
      id: 'mcq-kvl-2',
      question: {
        en: 'In a single closed loop containing a 20 V battery and two series resistors of 3 Ω and 7 Ω, what is the voltage drop across the 7 Ω resistor?',
        hi: '20 V बैटरी और 3 Ω तथा 7 Ω के दो श्रेणी प्रतिरोधकों वाले एक बंद लूप में, 7 Ω प्रतिरोधक पर वोल्टेज गिरावट कितनी है?',
        bn: '২০ V ব্যাটারি এবং ৩ Ω ও ৭ Ω এর দুটি সিরিজ রেজিস্টরযুক্ত বন্ধ লুপে, ৭ Ω রেজিস্টরের ভোল্টেজ ড্রপ কত?'
      },
      options: [
        { id: 'opt-a', text: { en: '6 V', hi: '6 V', bn: '৬ V' } },
        { id: 'opt-b', text: { en: '14 V', hi: '14 V', bn: '১৪ V' } },
        { id: 'opt-c', text: { en: '20 V', hi: '20 V', bn: '২০ V' } },
        { id: 'opt-d', text: { en: '10 V', hi: '10 V', bn: '১০ V' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'Total Resistance R = 3 + 7 = 10 Ω. Current I = 20 / 10 = 2 A. Voltage drop across 7 Ω = I × R = 2 × 7 = 14 V.',
        hi: 'कुल प्रतिरोध R = 3 + 7 = 10 Ω। धारा I = 20 / 10 = 2 A। 7 Ω पर वोल्टेज = 2 × 7 = 14 V।',
        bn: 'মোট রেজিস্ট্যান্স R = ৩ + ৭ = ১০ Ω। কারেন্ট I = ২০ / ১০ = ২ A। ৭ Ω এ ভোল্টেজ ড্রপ = ২ × ৭ = ১৪ V।'
      }
    },
    {
      id: 'mcq-kvl-3',
      question: {
        en: 'When traversing a closed loop during KVL analysis, moving across a battery from its POSITIVE (+) terminal to its NEGATIVE (-) terminal represents a:',
        hi: 'KVL विश्लेषण के दौरान बंद लूप में चलते समय, बैटरी के धनात्मक (+) टर्मिनल से ऋणात्मक (-) टर्मिनल की ओर जाना क्या दर्शाता है?',
        bn: 'KVL বিশ্লেষণে লুপ ঘোরার সময়, ব্যাটারির ধনাত্মক (+) থেকে ঋণাত্মক (-) টার্মিনালে যাওয়ার ঘটনাটি কী প্রকাশ করে?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Potential Rise (+V)', hi: 'वोल्टेज वृद्धि (+V)', bn: 'বিভব বৃদ্ধি (+V)' } },
        { id: 'opt-b', text: { en: 'Potential Drop (-V)', hi: 'वोल्टेज गिरावट (-V)', bn: 'বিভব পতন (-V)' } },
        { id: 'opt-c', text: { en: 'Current Generation', hi: 'धारा जनन', bn: 'কারেন্ট তৈরি' } },
        { id: 'opt-d', text: { en: 'Zero Voltage Change', hi: 'शून्य वोल्टेज परिवर्तन', bn: 'শূন্য ভোল্টেজ পরিবর্তন' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'Moving from a higher potential (+) terminal to a lower potential (-) terminal is a decrease in potential, which is defined as a Potential Drop (-V).',
        hi: 'उच्च विभव (+) से निम्न विभव (-) की ओर जाना विभव में कमी है, जिसे वोल्टेज गिरावट (-V) कहा जाता है।',
        bn: 'উচ্চ বিভব (+) থেকে নিম্ন বিভবে (-) যাওয়া হলো বিভবের হ্রাস, যাকে বিভব পতন (-V) বলা হয়।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-kvl-1',
      question: {
        en: 'Compare Kirchhoff\'s Current Law (KCL) and Kirchhoff\'s Voltage Law (KVL) across three key engineering dimensions: fundamental physics law, domain of application, and primary analytical variable.',
        hi: 'तीन मुख्य इंजीनियरिंग आयामों पर किरचॉफ के धारा नियम (KCL) और वोल्टेज नियम (KVL) की तुलना करें: मूलभूत भौतिकी नियम, अनुप्रयोग का क्षेत्र, और प्राथमिक विश्लेषणात्मक चर।',
        bn: 'তিনটি প্রধান ইঞ্জিনিয়ারিং বৈশিষ্ট্যের সাপেক্ষে KCL এবং KVL এর পার্থক্য তুলে ধরুন: মূল নীতি, প্রয়োগ ক্ষেত্র, এবং বিশ্লেষণের প্রধান চলক।'
      },
      hint: {
        en: 'Structure into a clean 3-point comparison.',
        hi: '3-बिंदु तुलना में व्यवस्थित करें।',
        bn: '৩ টি স্পষ্ট পয়েন্টে সাজান।'
      },
      answerKey: {
        en: '1. Fundamental Law of Physics: KCL is based on Conservation of Charge; KVL is based on Conservation of Energy.\n2. Domain of Application: KCL is applied at a single JUNCTION NODE; KVL is applied around a CLOSED LOOP or MESH.\n3. Primary Analytical Variable: KCL equations solve for unknown NODE VOLTAGES (Nodal Analysis); KVL equations solve for unknown MESH CURRENTS (Mesh Analysis).',
        hi: '1. भौतिकी का नियम: KCL आवेश संरक्षण पर आधारित है; KVL ऊर्जा संरक्षण पर आधारित है।\n2. अनुप्रयोग का क्षेत्र: KCL जंक्शन नोड पर लागू होता है; KVL बंद लूप/मेष पर लागू होता है।\n3. विश्लेषणात्मक चर: KCL नोड वोल्टेज हल करता है; KVL मेष धारा हल करता है।',
        bn: '১. মৌলিক নীতি: KCL আধান সংরক্ষণের নীতি; KVL শক্তি সংরক্ষণের নীতি।\n২. প্রয়োগ ক্ষেত্র: KCL একক জংশন নোডে প্রযোজ্য; KVL আবদ্ধ লুপ বা মেশে প্রযোজ्य।\n৩. মূল চলক: KCL দিয়ে নোড ভোল্টেজ নির্ণয় করা হয়; KVL দিয়ে লুপ কারেন্ট নির্ণয় করা হয়।'
      }
    },
    {
      id: 'pq-kvl-2',
      question: {
        en: 'A 24 V DC source powers a closed loop with resistors R1 = 5 Ω and R2 = 7 Ω in series. If a stray fault causes a 12 V potential drop across an unmodeled contact resistance, calculate the actual circuit current and verify KVL.',
        hi: '24 V डीसी स्रोत 5 Ω और 7 Ω के श्रेणी प्रतिरोधकों वाले बंद लूप को शक्ति प्रदान करता है। यदि एक फॉल्ट के कारण 12 V का वोल्टेज ड्रॉप अवांछित संपर्क प्रतिरोध पर होता है, तो वास्तविक धारा की गणना करें और KVL सत्यापित करें।',
        bn: '২৪ V সোর্স ৫ Ω এবং ৭ Ω সিরিজ রেজিস্টরের মাধ্যমে লুপে শক্তি যোগায়। লুজ কানেকশনে অতিরিক্ত ১২ V বিভব পতন ঘটলে, মোট লুপ কারেন্ট নির্ণয় করুন এবং KVL যাচাই করুন।'
      },
      hint: {
        en: 'Total voltage drops = V_R1 + V_R2 + V_fault = 24 V.',
        hi: 'कुल वोल्टेज गिरावट = V_R1 + V_R2 + V_fault = 24 V।',
        bn: 'মোট ভোল্টেজ পতন = V_R1 + V_R2 + V_fault = ২৪ V।'
      },
      answerKey: {
        en: 'Given:\n- Source Voltage V_S = 24 V\n- Known Resistors: R1 = 5 Ω, R2 = 7 Ω\n- Fault Voltage Drop V_fault = 12 V\n\nKVL Equation around Closed Loop:\nV_S - (I · R1) - (I · R2) - V_fault = 0\n24 - 5I - 7I - 12 = 0\n12 - 12I = 0\n12I = 12\nI = 1.0 A\n\nCalculated Drops:\n- V_R1 = 1.0 · 5 = 5 V\n- V_R2 = 1.0 · 7 = 7 V\n- V_fault = 12 V\nTotal Drops = 5 + 7 + 12 = 24 V = V_S.\nKVL Verified (ΣV = 24 - 24 = 0 V).',
        hi: 'समीकरण: 24 - 5I - 7I - 12 = 0\n12 - 12I = 0 ⇒ I = 1.0 A\n\nड्रॉप्स: V_R1 = 5 V, V_R2 = 7 V, V_fault = 12 V।\nकुल गिरावट = 24 V = V_S (KVL सत्यापित)।',
        bn: 'সমীকরণ: ২৪ - ৫I - ৭I - ১২ = ০\n১২ - ১২I = ০ ⇒ I = ১.০ A\n\nড্রপস: V_R1 = ৫ V, V_R2 = ৭ V, V_fault = ১২ V।\nমোট পতন = ২৪ V = V_S (KVL প্রমাণিত)।'
      }
    }
  ]
};

export const LESSON_NODE_BRANCH: Lesson = {
  id: 'lsn-ch4-node-branch',
  topicId: 'ch4-node-branch',
  order: 4,
  title: {
    en: 'Nodes, Branches, Loops and Meshes',
    hi: 'नोड, शाखाएं, लूप और मेष',
    bn: 'নোড, ব্রাঞ্চ, লুপ এবং মেশ'
  },
  easyExplanation: {
    en: 'A node is a junction point. A branch is a path containing a component. A loop is any closed path. A mesh is an open window loop with no inside sub-loops.',
    hi: 'नोड एक जंक्शन बिंदु है। शाखा वह मार्ग है जिसमें घटक होता है। लूप कोई भी बंद मार्ग है। मेष बिना किसी आंतरिक लूप वाला एक खुला खिड़की-लूप है।',
    bn: 'নোড হলো সংযোগ বিন্দু। ব্রাঞ্চ হলো উপাদানযুক্ত পথ। লুপ হলো যেকোনো আবদ্ধ পথ। মেশ হলো এমন লুপ যার অভ্যন্তরে অন্য কোনো লুপ থাকে না।'
  },
  detailedExplanation: {
    en: '1. Network Topology: The geometric arrangement and interconnections of circuit elements regardless of their nature (resistors, sources) or specific physical dimensions.\n\n2. Node: Any terminal or junction point in a circuit where two or more circuit elements are physically connected together.\n\n3. Essential Node (Principal Node): A junction point where THREE OR MORE circuit elements meet. Essential nodes form the basis for Nodal Analysis.\n\n4. Non-Essential Node (Simple Node): A junction point where strictly TWO circuit elements connect in series.\n\n5. Branch: A continuous path connecting two nodes that contains a single electrical component or series combination of elements.\n\n6. Element Branch (Principal Branch): A path connecting two essential nodes containing one or more circuit elements without passing through another essential node.\n\n7. Loop: Any closed path in a circuit network formed by starting at a specific node and tracing through branches to return to the starting node without visiting any intermediate node twice.\n\n8. Mesh: A fundamental independent loop that DOES NOT contain any other closed loops within its interior region. All meshes are loops, but not all loops are meshes.\n\n9. Path: An open or closed continuous sequence of adjacent nodes and connecting branches traversed without repeating any node.\n\n10. Open vs Closed Path: An open path has distinct start and end nodes; a closed path returns to its initial starting node forming a closed loop.\n\n11. Independent Loop: A loop that contains at least one branch that is not a part of any other independent loop.\n\n12. Difference Between Loop and Mesh: A mesh is a window pane containing no internal sub-loops; a loop can enclose multiple meshes or sub-loops.\n\n13. Node/Branch/Loop Relationship (Graph Theory): Fundamental relation M = B - N + 1, where M is independent meshes, B is total branches, and N is total nodes.\n\n14. Why Topology Matters: Graph topology dictates the exact minimum number of independent KCL equations (N_e - 1) or KVL equations (M = B - N + 1) required for complete circuit solutions.\n\n15. Preparing for Nodal Analysis: Identifying essential nodes reduces unnecessary equations; reference ground is picked at the essential node with maximum branches.\n\n16. Preparing for Mesh Analysis: Identifying planar meshes establishes unambiguous clockwise mesh currents.',
    hi: '1. नेटवर्क टोपोलॉजी: घटकों के प्रकार की परवाह किए बिना सर्किट संयोजनों की ज्यामितीय संरचना।\n\n2. नोड: परिपथ का कोई भी जंक्शन बिंदु जहाँ 2 या अधिक घटक मिलते हैं।\n\n3. मुख्य नोड: वह जंक्शन बिंदु जहाँ तीन या अधिक घटक मिलते हैं।\n\n4. साधारण नोड: वह जंक्शन जहाँ केवल दो घटक श्रेणी में मिलते हैं।\n\n5. शाखा (Branch): दो नोड्स को जोड़ने वाला मार्ग जिसमें घटक मौजूद हों।\n\n6. मुख्य शाखा: दो मुख्य नोड्स को जोड़ने वाला मार्ग।\n\n7. लूप (Loop): किसी नोड से शुरू होकर बिना किसी नोड को दोहराए उसी नोड पर लौटने वाला बंद मार्ग।\n\n8. मेष (Mesh): एक मौलिक स्वतंत्र लूप जिसके अंदर कोई अन्य लूप न हो।\n\n9. पाथ (Path): नोड्स और शाखाओं का एक निरंतर अनुक्रम।\n\n10. खुला बनाम बंद पाथ: खुले पाथ के प्रारंभिक और अंतिम बिंदु अलग होते हैं।\n\n11. स्वतंत्र लूप: ऐसा लूप जिसमें कम से कम एक ऐसी शाखा हो जो किसी अन्य स्वतंत्र लूप का हिस्सा न हो।\n\n12. लूप और मेष में अंतर: मेष खिड़की के शीशे की तरह है जिसके अंदर कोई अन्य लूप नहीं होता।\n\n13. नोड/शाखा/लूप संबंध: M = B - N + 1।\n\n14. टोपोलॉजी का महत्व: न्यूनतम स्वतंत्र समीकरणों की संख्या तय करता है।\n\n15. नोडल विश्लेषण की तैयारी: मुख्य नोड्स की पहचान से समीकरणों की संख्या घटती है।\n\n16. मेष विश्लेषण की तैयारी: समतलीय मेषों की पहचान मेष धाराएँ तय करती है।',
    bn: '১. নেটওয়ার্ক টপোলজি: উপাদানগুলোর ধরন নির্বিশেষে সার্কিট সংযোগের জ্যামিতিক বিন্যাস।\n\n২. নোড: সার্কিটের যে সংযোগস্থলে ২ বা ততোধিক উপাদান যুক্ত হয়।\n\n৩. এসেনশিয়াল নোড: যে সংযোগস্থলে তিন বা ততোধিক উপাদান যুক্ত হয়।\n\n৪. নন-এসেনশিয়াল নোড: যে সংযোগস্থলে কেবল দুটি উপাদান যুক্ত থাকে।\n\n৫. ব্রাঞ্চ: দুটি নোডকে যুক্তকারী উপাদানযুক্ত পথ।\n\n৬. এলিমেন্ট ব্রাঞ্চ: দুটি এসেনশিয়াল নোডের মধ্যবর্তী উপাদানযুক্ত পথ।\n\n৭. লুপ: কোনো নোড পুনরাবৃত্তি না করে তৈরি যেকোনো আবদ্ধ পথ।\n\n৮. মেশ: এমন এক মৌলিক লুপ যার অভ্যন্তরে অন্য কোনো লুপ থাকে না।\n\n৯. পাথ: নোড ও ব্রাঞ্চের ধারাবাহিক পথ।\n\n১০. উন্মুক্ত বনাম আবদ্ধ পথ: উন্মুক্ত পথের শুরু ও শেষ নোড ভিন্ন।\n\n১১. স্বাধীন লুপ: অন্তত ১ টি ভিন্ন ব্রাঞ্চযুক্ত লুপ।\n\n১২. লুপ ও মেশের পার্থক্য: মেশের ভেতরে অন্য লুপ থাকে না।\n\n১৩. নোড/ব্রাঞ্চ/লুপ সম্পর্ক: M = B - N + ১।\n\n১৪. টপোলজির গুরুত্ব: গাণিতিক সমীকরণের সর্বনিম্ন সংখ্যা নির্ধারণ করে।\n\n১৫. নোডাল অ্যানালিসিসের প্রস্তুতি: এসেনশিয়াল নোড চিহ্নিতকরণ।\n\n১৬. মেশ অ্যানালিসিসের প্রস্তুতি: মেশ কারেন্ট নির্ধারণ।'
  },
  formulas: [
    {
      symbol: 'M',
      expression: 'M = B - N + 1',
      description: {
        en: 'Number of Independent Mesh Loops (B = Branches, N = Nodes)',
        hi: 'स्वतंत्र मेष लूपों की संख्या (B = शाखाएँ, N = नोड)',
        bn: 'স্বাধীন মেশ সংখ্যা (B = ব্রাঞ্চ, N = মোট নোড)'
      }
    },
    {
      symbol: 'N_{KCL}',
      expression: 'N_{KCL} = N_e - 1',
      description: {
        en: 'Number of Independent Nodal Equations Required (Ne = Essential Nodes)',
        hi: 'आवश्यक स्वतंत्र नोडल समीकरणों की संख्या (Ne = मुख्य नोड)',
        bn: 'প্রয়োজনীয় স্বাধীন নোডাল সমীকরণের সংখ্যা (Ne = এসেনশিয়াল নোড)'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-node-branch',
      title: {
        en: 'Network Topology Diagram (Nodes, Essential Nodes, Branches & Meshes)',
        hi: 'नेटवर्क टोपोलॉजी आरेख (नोड, मुख्य नोड, शाखाएँ एवं मेष)',
        bn: 'নেটওয়ার্ক টপোলজি চিত্র (নোড, এসেনশিয়াল নোড, ব্রাঞ্চ ও মেশ)'
      },
      caption: {
        en: 'Illustrating nodes, essential nodes, branch paths, and independent meshes in a DC network.',
        hi: 'डीसी नेटवर्क में नोड्स, मुख्य नोड्स, शाखा मार्गों और स्वतंत्र मेषों का चित्रण।',
        bn: 'ডিসি নেটওয়ার্কে নোড, एসেনশিয়াল नोড, ব্রাঞ্চ ও মেশের ভিজ্যুয়াল চিত্র।'
      },
      svgType: 'circuit-node-branch'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-nb-1',
      problem: {
        en: 'A circuit network has 7 branches and 5 nodes. Find the number of independent mesh loops required for analysis.',
        hi: 'एक सर्किट नेटवर्क में 7 शाखाएँ और 5 नोड हैं। विश्लेषण के लिए आवश्यक स्वतंत्र मेष लूपों की संख्या ज्ञात कीजिए।',
        bn: 'একটি সার্কিট নেটওয়ার্কে ৭ টি ব্রাঞ্চ এবং ৫ টি নোড রয়েছে। বিশ্লেষণের জন্য প্রয়োজনীয় স্বাধীন মেশ লুপের সংখ্যা নির্ণয় করুন।'
      },
      solution: {
        en: 'Given: B = 7, N = 5.\n\nFormula: M = B - N + 1\nM = 7 - 5 + 1 = 3\n\n3 independent mesh equations are required.',
        hi: 'M = 7 - 5 + 1 = 3\n3 स्वतंत्र मेष समीकरणों की आवश्यकता है।',
        bn: 'M = ৭ - ৫ + ১ = ৩\n৩ টি স্বাধীন মেশ সমীকরণ প্রয়োজন।'
      },
      givenValues: {
        'B': '7',
        'N': '5'
      },
      finalAnswer: {
        en: 'M = 3 independent meshes',
        hi: 'M = 3 स्वतंत्र मेष',
        bn: 'M = ৩ স্বাধীন মেশ'
      }
    }
  ],
  mcqs: [
    {
      id: 'mcq-nb-1',
      question: {
        en: 'What defines an Essential Node in circuit topology?',
        hi: 'सर्किट टोपोलॉजी में मुख्य नोड (Essential Node) को क्या परिभाषित करता है?',
        bn: 'সার্কিট টপোলজিতে এসেনশিয়াল নোড বলতে কী বোঝায়?'
      },
      options: [
        { id: 'opt-a', text: { en: 'A junction where 2 elements meet in series', hi: 'एक जंक्शन जहाँ 2 घटक श्रेणी में मिलते हैं', bn: 'এমন সংযোগস্থল যেখানে ২টি উপাদান সিরিজে যুক্ত' } },
        { id: 'opt-b', text: { en: 'A junction where 3 or more circuit elements meet', hi: 'एक जंक्शन जहाँ 3 या अधिक परिपथ घटक मिलते हैं', bn: 'এমন সংযোগস্থল যেখানে ৩ বা ততোধিক উপাদান যুক্ত' } },
        { id: 'opt-c', text: { en: 'Any point connected directly to ground', hi: 'ग्राउंड से सीधे जुड़ा कोई भी बिंदु', bn: 'গ্রাউন্ডের সাথে যুক্ত যেকোনো বিন্দু' } },
        { id: 'opt-d', text: { en: 'The positive terminal of a DC power supply', hi: 'डीसी पावर सप्लाई का धनात्मक टर्मिनल', bn: 'ডিসি পাওয়ার সাপ্লাইয়ের পজিটিভ টার্মিনাল' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'An essential node is a junction where three or more branches connect.',
        hi: 'मुख्य नोड वह जंक्शन है जहाँ तीन या अधिक शाखाएँ जुड़ती हैं।',
        bn: 'এসেনশিয়াল নোড হলো এমন সংযোগস্থল যেখানে তিন বা ততোধিক ব্রাঞ্চ যুক্ত থাকে।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-nb-1',
      question: {
        en: 'For a circuit with B = 8 branches and N = 5 nodes, calculate tree branches T and link branches L.',
        hi: 'B = 8 शाखाओं और N = 5 नोड्स वाले सर्किट के लिए ट्री शाखाएं T और लिंक शाखाएं L परिकलित करें।',
        bn: 'B = ৮ ব্রাঞ্চ এবং N = ৫ নোডযুক্ত সার্কিটের জন্য ট্রি ব্রাঞ্চ T এবং লিঙ্ক ব্রাঞ্চ L নির্ণয় করুন।'
      },
      hint: {
        en: 'Tree branches T = N - 1; Link branches L = B - T.',
        hi: 'ट्री शाखाएँ T = N - 1; लिंक L = B - T।',
        bn: 'ট্রি ব্রাঞ্চ T = N - 1; লিঙ্ক L = B - T।'
      },
      answerKey: {
        en: 'Given:\n- Branches B = 8\n- Nodes N = 5\n\nStep 1: Tree Branches T = N - 1 = 5 - 1 = 4\nStep 2: Link Branches L = B - T = 8 - 4 = 4\nStep 3: Independent Meshes M = B - N + 1 = 8 - 5 + 1 = 4\n\nConclusion: Number of links L = 4 equals independent meshes M = 4.',
        hi: 'T = 5 - 1 = 4\nL = 8 - 4 = 4\nM = 8 - 5 + 1 = 4\n\nलिंकों की संख्या L = 4 मेष M = 4 के बराबर है।',
        bn: 'T = ৫ - ১ = ৪\nL = ৮ - ৪ = ৪\nM = ৮ - ৫ + ১ = ৪\n\nলিঙ্ক সংখ্যা L = ৪ স্বাধীন মেশ M = ৪ এর সমান।'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Circuit graph reduction in automated EDA tools (Cadence, Altium)',
      'State-space model formulation in power grid network control',
      'Structural complexity analysis of printed circuit board (PCB) traces'
    ],
    hi: [
      'दूरसंचार में मल्टी-लूप समतलीय फ़िल्टर ग्रिड विश्लेषण',
      'पावर ट्रांसफार्मर मेष समतुल्य परिपथ गणना',
      'मल्टी-ब्रांच औद्योगिक ग्राउंडिंग ग्रिड में लूप प्रतिरोध विश्लेषण'
    ],
    bn: [
      'টেলিযোগাযোগে মাল্টি-লুপ সমতলীয় ফিল্টার গ্রিড বিশ্লেষণ',
      'পাওয়ার ট্রান্সফরমার মেশ সমতুল্য সার্কিট গণনা',
      'শিল্প গ্রাউন্ডিং গ্রিডে লুপ রেজিস্ট্যান্স বিশ্লেষণ'
    ]
  },
  importantPoints: {
    en: [
      'Nodes connect components; essential nodes join 3 or more elements.',
      'Meshes are minimal window loops with no internal sub-loops.',
      'Graph theory formula M = B - N + 1 defines independent equations.'
    ],
    hi: [
      'नोड घटकों को जोड़ते हैं; मुख्य नोड 3 या अधिक घटकों को जोड़ते हैं।',
      'मेष न्यूनतम बंद लूप हैं जिनमें कोई आंतरिक लूप नहीं होता।',
      'ग्राफ सिद्धांत सूत्र M = B - N + 1 स्वतंत्र समीकरणों को तय करता है।'
    ],
    bn: [
      'নোড উপাদান যুক্ত করে; এসেনশিয়াল নোড ৩ বা ততোধিক উপাদান যুক্ত করে।',
      'মেশ হলো ক্ষুদ্রতম আবদ্ধ লুপ যার ভেতরে অন্য লুপ থাকে না।',
      'গ্রাফ থিওরি সূত্র M = B - N + ১ স্বাধীন সমীকরণ নির্ধারণ করে।'
    ]
  },
  commonMistakes: {
    en: [
      'Confusing simple series 2-element nodes with 3-element essential nodes',
      'Counting non-planar crossing loops as independent meshes',
      'Miscalculating total branches B by counting multiple series elements separately'
    ],
    hi: [
      'साधारण 2-घटक नोड को 3-घटक मुख्य नोड के साथ भ्रमित करना',
      'क्रॉसिंग लूपों को स्वतंत्र मेष के रूप में गिनना',
      'श्रेणी घटकों को अलग मानकर कुल शाखाओं की गलत गणना'
    ],
    bn: [
      'সাধারণ ২টি উপাদানের নোড এবং ৩টি উপাদানের এসেনশিয়াল নোড গুলিয়ে ফেলা',
      'অ-সমতলীয় ক্রস লুপকে স্বাধীন মেশ হিসেবে গণনা করা',
      'সিরিজ উপাদানগুলোকে আলাদা ব্রাঞ্চ ধরে মোট ব্রাঞ্চ B ভুল হিসাব করা'
    ]
  }
};
export const LESSON_NODAL_ANALYSIS: Lesson = {
  id: 'lsn-ch4-nodal-analysis',
  topicId: 'ch4-nodal-analysis',
  order: 5,
  title: {
    en: 'Nodal Analysis',
    hi: 'नोडल विश्लेषण',
    bn: 'নোডাল অ্যানালিসিস'
  },
  easyExplanation: {
    en: 'Nodal analysis applies KCL at every non-reference node using Ohm law to express branch currents in terms of node voltages.',
    hi: 'नोडल विश्लेषण नोड वोल्टेज के रूप में शाखा धाराओं को व्यक्त करने के लिए प्रत्येक गैर-संदर्भ नोड पर KCL लागू करता है।',
    bn: 'নোডাল অ্যানালিসিস ওহমের সূত্র ব্যবহার করে নোড ভোল্টেজের মাধ্যমে কারেন্ট প্রকাশ করে প্রতিটি নন-রেফারেন্স নোডে KCL প্রয়োগ করে।'
  },
  detailedExplanation: {
    en: '1. Definition & Fundamental Principle: Nodal Analysis is a systematic technique for finding all node voltages in an electrical network relative to a chosen reference node by applying KCL at every non-reference essential node.\n\n2. Applicable Domain: Applicable to ALL circuit topologies (both planar and non-planar networks containing resistors, independent/dependent sources).\n\n3. Step-by-Step Procedure:\n   a. Identify all N essential nodes in the circuit.\n   b. Select one essential node as the Reference Node (Ground, 0 V). Best choice is the node with the maximum branch connections.\n   c. Label remaining (N - 1) essential nodes with unknown node voltage variables (V1, V2, ..., Vn-1).\n   d. Apply KCL at each non-reference node: Sum of currents leaving the node equals zero.\n   e. Express branch currents using Ohm Law: I = (V_from - V_to) / R.\n   f. Solve simultaneous linear equations using Cramer Rule or Matrix Inversion [G][V] = [I].\n\n4. Conductance Matrix Structure [G]:\n   - Diagonal elements G11, G22: Sum of conductances connected to Node 1, Node 2 (ALWAYS POSITIVE).\n   - Off-diagonal elements G12 = G21 = -G12: Mutual conductance connected between Node 1 and Node 2 (ALWAYS NEGATIVE).\n\n5. Supernode Concept: When an ideal voltage source is connected directly between two non-reference nodes, combine both nodes into a single SUPERNODE. Write one KCL equation for the supernode boundary and supplement it with a voltage constraint equation (V1 - V2 = Vs).',
    hi: '1. परिभाषा एवं मूल सिद्धांत: नोडल विश्लेषण प्रत्येक गैर-संदर्भ मुख्य नोड पर KCL लागू करके नेटवर्क में सभी नोड वोल्टेज ज्ञात करने की एक विधि है।\n\n2. प्रयोज्यता: सभी सर्किट टोपोलॉजी (समतलीय और गैर-समतलीय) पर लागू।\n\n3. चरणबद्ध प्रक्रिया:\n   a. सभी N मुख्य नोड्स की पहचान करें।\n   b. एक मुख्य नोड को संदर्भ नोड (ग्राउंड, 0 V) चुनें।\n   c. शेष (N - 1) मुख्य नोड्स को अज्ञात नोड वोल्टेज (V1, V2...) लेबल करें।\n   d. प्रत्येक गैर-संदर्भ नोड पर KCL लागू करें।\n   e. ओम के नियम का उपयोग करके शाखा धाराओं को व्यक्त करें: I = (V1 - V2) / R।\n   f. [G][V] = [I] मैट्रिक्स बनाकर समीकरणों को हल करें।\n\n4. सुपरनोड अवधारणा: जब दो गैर-संदर्भ नोड्स के बीच एक आदर्श वोल्टेज स्रोत जुड़ा होता है, तो दोनों नोड्स को मिलाकर एक सुपरनोड बनाया जाता है।',
    bn: '১. সংজ্ঞা ও মূলনীতি: নোডাল অ্যানালিসিস হলো রেফারেন্স নোডের সাপেক্ষে সার্কিটের সকল নোড ভোল্টেজ বের করার একটি নিয়মমাফিক পদ্ধতি।\n\n২. প্রয়োগক্ষেত্র: সমতলীয় এবং অ-সমতলীয় সকল প্রকার সার্কিটে প্রযোজ্য।\n\n৩. পর্যায়ক্রমিক ধাপসমূহ:\n   ক. সকল N টি এসেনশিয়াল নোড চিহ্নিত করুন।\n   খ. যেকোনো একটি এসেনশিয়াল নোডকে রেফারেন্স নোড (গ্রাউন্ড, 0 V) হিসেবে ধরে নিন।\n   গ. বাকি (N - ১) টি নোডকে অজানা ভোল্টেজ (V1, V2...) দ্বারা চিহ্নিত করুন।\n   ঘ. প্রতিটি নন-রেফারেন্স নোডে KCL প্রয়োগ করুন।\n   ঙ. ওহমের সূত্র দিয়ে কারেন্ট প্রকাশ করুন: I = (V1 - V2) / R।\n   চ. [G][V] = [I] ম্যাট্রিক্স গঠন করে মান বের করুন।\n\n৪. সুপারনোড ধারণা: দুটি নন-রেফারেন্স নোডের মাঝে সরাসরি ভোল্টেজ সোর্স থাকলে নোড দুটিকে একত্রিত করে একটি সুপারনোড গঠন করা হয়।'
  },
  formulas: [
    {
      symbol: 'I_{branch}',
      expression: 'I_{branch} = \\frac{V_{from} - V_{to}}{R}',
      description: {
        en: 'Branch Current leaving Node via Resistor R towards adjacent Node',
        hi: 'प्रतिरोधक R के माध्यम से आसन्न नोड की ओर जाने वाली शाखा धारा',
        bn: 'রেজিস্টর R এর মধ্য দিয়ে পার্শ্ববর্তী নোডের দিকে প্রবাহিত কারেন্ট'
      }
    },
    {
      symbol: '[G][V] = [I]',
      expression: '\\begin{bmatrix} G_{11} & G_{12} \\\\ G_{21} & G_{22} \\end{bmatrix} \\begin{bmatrix} V_1 \\\\ V_2 \\end{bmatrix} = \\begin{bmatrix} I_1 \\\\ I_2 \\end{bmatrix}',
      description: {
        en: 'Nodal Conductance Matrix Formulation for 2-Node System',
        hi: '2-नोड प्रणाली के लिए नोडल कंडक्टेंस मैट्रिक्स संरचना',
        bn: '২-নোড সার্কিটের জন্য নোডাল কন্ডাকট্যান্স ম্যাট্রিক্স সমীকরণ'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-nodal-analysis',
      title: {
        en: 'Nodal Analysis Circuit Diagram with Essential Nodes & Ground',
        hi: 'मुख्य नोड्स और ग्राउंड वाला नोडल विश्लेषण सर्किट आरेख',
        bn: 'এসেনশিয়াল নোড এবং গ্রাউন্ডযুক্ত নোডাল অ্যানালিসিস সার্কিট চিত্র'
      },
      caption: {
        en: '2-node active network showing essential nodes V1 and V2, reference ground, branch currents, and nodal equations.',
        hi: 'मुख्य नोड्स V1 व V2, संदर्भ ग्राउंड, शाखा धाराओं और नोडल समीकरणों को दर्शाने वाला 2-नोड परिपथ।',
        bn: 'এসেনশিয়াল নোড V1 ও V2, রেফারেন্স গ্রাউন্ড এবং ব্রাঞ্চ কারেন্ট নির্দেশকারী ২-নোড সার্কিট।'
      },
      svgType: 'circuit-nodal-analysis'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-nodal-1',
      problem: {
        en: 'A 2-node DC network has an independent current source Is = 6 A entering Node 1, R1 = 4 Ω connected to ground, R2 = 12 Ω connected between Node 1 and Node 2, R3 = 6 Ω connected to ground at Node 2, and a current source Is2 = 2 A leaving Node 2. Calculate node voltages V1 and V2.',
        hi: 'एक 2-नोड डीसी परिपथ में Is = 6 A नोड 1 में प्रवेश कर रहा है, R1 = 4 Ω नोड 1 से ग्राउंड है, R2 = 12 Ω नोड 1 और 2 के बीच है, R3 = 6 Ω नोड 2 से ग्राउंड है, तथा Is2 = 2 A नोड 2 से बाहर जा रहा है। नोड वोल्टेज V1 और V2 ज्ञात करें।',
        bn: '২-নোড ডিসি সার্কিটে Is = 6 A নোড ১ এ প্রবেশ করছে, R1 = 4 Ω নোড ১ থেকে গ্রাউন্ডে যুক্ত, R2 = 12 Ω নোড ১ ও ২ এর মাঝে যুক্ত, R3 = 6 Ω নোড ২ থেকে গ্রাউন্ডে এবং Is2 = 2 A নোড ২ থেকে বের হচ্ছে। V1 ও V2 নির্ণয় করুন।'
      },
      solution: {
        en: 'Given:\n- Conductances: G11 = 1/4 + 1/12 = 0.25 + 0.0833 = 0.333 S\n  G12 = G21 = -1/12 = -0.0833 S\n  G22 = 1/12 + 1/6 = 0.0833 + 0.1667 = 0.25 S\n\n- Currents entering nodes: I_node1 = 6 A, I_node2 = -2 A\n\nNodal Matrix System:\n[ 0.333   -0.0833 ] [ V1 ] = [  6 ]\n[ -0.0833   0.25  ] [ V2 ] = [ -2 ]\n\nStep 1: Calculate Determinant Δ\nΔ = (0.333)(0.25) - (-0.0833)(-0.0833) = 0.0833 - 0.00694 = 0.0764 S²\n\nStep 2: Solve V1 using Cramer Rule\nV1 = [(6)(0.25) - (-2)(-0.0833)] / 0.0764 = [1.5 - 0.1667] / 0.0764 = 1.333 / 0.0764 = 17.45 V\n\nStep 3: Solve V2 using Cramer Rule\nV2 = [(0.333)(-2) - (-0.0833)(6)] / 0.0764 = [-0.6667 + 0.50] / 0.0764 = -0.1667 / 0.0764 = -2.18 V\n\nAnswer:\nNode Voltages: V1 = 17.45 V, V2 = -2.18 V',
        hi: 'कंडक्टेंस मैट्रिक्स हल करने पर:\nV1 = 17.45 V, V2 = -2.18 V',
        bn: 'কন্ডাকট্যান্স ম্যাট্রিক্স সমাধান করে পাওয়া যায়:\nV1 = ১৭.৪৫ V, V2 = -২.১৮ V'
      },
      givenValues: {
        'Is1, Is2': '6 A, 2 A',
        'R1, R2, R3': '4 Ω, 12 Ω, 6 Ω'
      },
      finalAnswer: {
        en: 'V1 = 17.45 V, V2 = -2.18 V',
        hi: 'V1 = 17.45 V, V2 = -2.18 V',
        bn: 'V1 = ১৭.৪৫ V, V2 = -২.১৮ V'
      }
    }
  ],
  mcqs: [
    {
      id: 'mcq-na-1',
      question: {
        en: 'Nodal Analysis is based primarily on which fundamental Kirchhoff circuit law?',
        hi: 'नोडल विश्लेषण मुख्य रूप से किस मौलिक किर्चॉफ परिपथ नियम पर आधारित है?',
        bn: 'নোডাল অ্যানালিসিস মূলত কোন মৌলিক কার্শফ সূত্রের ওপর প্রতিষ্ঠিত?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Kirchhoff Current Law (KCL)', hi: 'किर्चॉफ धारा नियम (KCL)', bn: 'কার্শফ কারেন্ট ল (KCL)' } },
        { id: 'opt-b', text: { en: 'Kirchhoff Voltage Law (KVL)', hi: 'किर्चॉफ वोल्टेज नियम (KVL)', bn: 'কার্শফ ভোল্টেজ ল (KVL)' } },
        { id: 'opt-c', text: { en: 'Faraday Law of Induction', hi: 'फैराडे का प्रेरण नियम', bn: 'ফ্যারাডের ইলেকট্রোম্যাগনেটিক আবেশ সূত্র' } },
        { id: 'opt-d', text: { en: 'Ampere Circuital Law', hi: 'एम्पीयर का परिपथीय नियम', bn: 'অ্যাম্পিয়ারের সার্কিটাল ল' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'Nodal Analysis applies KCL at non-reference essential nodes to express node voltages.',
        hi: 'नोडल विश्लेषण नोड वोल्टेज व्यक्त करने के लिए गैर-संदर्भ नोड्स पर KCL लागू करता है।',
        bn: 'নোডাল অ্যানালিসিসে নন-রেফারেন্স নোডগুলোতে KCL প্রয়োগ করা হয়।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-na-1',
      question: {
        en: 'Explain what a Supernode is in Nodal Analysis and write the boundary conditions for a 12 V source connected between Node 1 and Node 2.',
        hi: 'नोडल विश्लेषण में सुपरनोड क्या है, यह समझाएं तथा नोड 1 और 2 के बीच जुड़े 12 V स्रोत के लिए सीमा स्थिति लिखें।',
        bn: 'নোডাল অ্যানালিসিসে সুপারনোড কী তা ব্যাখ্যা করুন এবং নোড ১ ও নোড ২ এর মাঝে যুক্ত ১২ V সোর্সের শর্ত লিখুন।'
      },
      hint: {
        en: 'A Supernode is formed when an ideal voltage source is connected between two ungrounded nodes. Write V1 - V2 = 12 V and write KCL around the combined node.',
        hi: 'V1 - V2 = 12 V लिखें और संयुक्त नोड पर KCL लागू करें।',
        bn: 'V1 - V2 = 12 V লিখুন এবং যৌথ নোডে KCL প্রয়োগ করুন।'
      },
      answerKey: {
        en: '1. Definition: A Supernode is formed when an ideal voltage source is connected between two non-reference essential nodes.\n2. Voltage Constraint Equation: V1 - V2 = 12 V.\n3. KCL Boundary Equation: Write KCL for the combined surface enclosing Node 1, Node 2, and the 12 V source.',
        hi: '1. परिभाषा: जब दो गैर-संदर्भ नोड्स के बीच वोल्टेज स्रोत जुड़ा हो।\n2. वोल्टेज बाधा समीकरण: V1 - V2 = 12 V।\n3. KCL समीकरण: संयुक्त सुपरनोड सतह के लिए KCL लिखें।',
        bn: '১. সংজ্ঞা: দুটি নন-রেফারেন্স নোডের মাঝে ভোল্টেজ সোর্স যুক্ত থাকলে সুপারনোড তৈরি হয়।\n২. শর্ত সমীকরণ: V1 - V2 = 12 V।\n৩. KCL সমীকরণ: যৌথ সীমানার ওপর KCL প্রয়োগ করুন।'
      }
    }
  ],
  practicalApplications: {
    en: [
      'SPICE simulation engine matrix formulation for circuit design',
      'Power distribution bus voltage monitoring in electrical grids',
      'Integrated circuit (IC) substrate node voltage bias analysis'
    ],
    hi: [
      'सर्किट डिजाइन के लिए स्पाइस सिमुलेशन इंजन मैट्रिक्स संरचना',
      'विद्युत ग्रिड में पावर डिस्ट्रीब्यूशन बस वोल्टेज निगरानी',
      'इंटीग्रेटेड सर्किट (IC) सबस्ट्रेट नोड वोल्टेज बायस विश्लेषण'
    ],
    bn: [
      'সার্কিট ডিজাইনে স্পাইস সিমুলেশন ইঞ্জিনের ম্যাট্রিক্স গঠন',
      'পাওয়ার গ্রিডে ডিস্ট্রিবিউশন বাস ভোল্টেজ পর্যবেক্ষণ',
      'ইন্টিগ্রেটেড সার্কিটে (IC) নোড ভোল্টেজ বায়াস বিশ্লেষণ'
    ]
  },
  importantPoints: {
    en: [
      'Nodal Analysis applies KCL at non-reference essential nodes.',
      'One reference ground node (0 V) must be selected.',
      'Supernode simplifies circuits containing ungrounded voltage sources.'
    ],
    hi: [
      'नोडल विश्लेषण गैर-संदर्भ नोड्स पर KCL लागू करता है।',
      'एक संदर्भ ग्राउंड नोड (0 V) चुनना आवश्यक है।',
      'सुपरनोड बिना-ग्राउंड वाले वोल्टेज स्रोतों वाले सर्किटों को सरल बनाता है।'
    ],
    bn: [
      'নোডাল অ্যানালিসিসে নন-রেফারেন্স নোডে KCL প্রয়োগ করা হয়।',
      'একটি রেফারেন্স গ্রাউন্ড নোড (0 V) নির্বাচন করতে হয়।',
      'সুপারনোড ভোল্টেজ সোর্সযুক্ত সার্কিটকে সহজ করে তোলে।'
    ]
  },
  commonMistakes: {
    en: [
      'Forgetting to subtract node voltage when determining current direction in branch resistors',
      'Mishandling polarity signs in Supernode constraint equations',
      'Choosing a reference node with fewer branch connections instead of the node with maximum connections'
    ],
    hi: [
      'शाखा प्रतिरोधकों में धारा की दिशा तय करते समय नोड वोल्टेज घटाना भूल जाना',
      'सुपरनोड बाधा समीकरणों में ध्रुवता चिह्नों को गलत संभालना',
      'कम शाखाओं वाले नोड को संदर्भ नोड चुनना'
    ],
    bn: [
      'রেজিস্টরের ব্রাঞ্চ কারেন্ট নির্ধারণে নোড ভোল্টেজের বিয়োগফল মিস করা',
      'সুপারনোড শর্ত সমীকরণে পোলারিটি ভুল ধরা',
      'কম ব্রাঞ্চযুক্ত নোডকে রেফারেন্স নোড বেছে নেওয়া'
    ]
  }
};
export const LESSON_MESH_ANALYSIS: Lesson = {
  id: 'lsn-ch4-mesh-analysis',
  topicId: 'ch4-mesh-analysis',
  order: 6,
  title: {
    en: 'Mesh Analysis',
    hi: 'मेष विश्लेषण',
    bn: 'মেশ অ্যানালিসিস'
  },
  easyExplanation: {
    en: 'Mesh analysis assigns a hypothetical clockwise loop current to every basic mesh window, then applies KVL around each mesh to form simultaneous linear equations [R][I] = [V].',
    hi: 'मेष विश्लेषण प्रत्येक मेष खिड़की में एक काल्पनिक दक्षिणावर्त धारा मानता है, फिर प्रत्येक मेष में KVL लागू करके रेखीय समीकरण [R][I] = [V] बनाता है।',
    bn: 'মেশ অ্যানালিসিসে প্রতিটি মেশে ঘড়ির কাঁটার দিকে একটি কাল্পনিক মেশ কারেন্ট ধরা হয়, তারপর KVL প্রয়োগ করে সমীকরণ জোট [R][I] = [V] গঠন করা হয়।'
  },
  detailedExplanation: {
    en: '1. Definition & Fundamental Principle: Mesh Analysis (or Loop Current Method) is a systematic technique for determining unknown branch currents in planar circuits by writing KVL equations around independent closed mesh loops.\n\n2. Applicable Domain: Applicable STRICTLY to Planar Networks (circuits that can be drawn on a flat plane without any branch wires crossing over each other).\n\n3. Mesh Current Concept: Mesh current is a fictitious circulating quantity that flows continuously around the perimeter of a minimal window loop. Actual branch current equals the algebraic sum of mesh currents passing through that branch.\n\n4. Step-by-Step Execution Procedure:\n   a. Verify network planarity and identify all M independent planar mesh loops (M = B - N + 1).\n   b. Assign a clockwise mesh current variable (I1, I2, ..., Im) to each mesh window.\n   c. Write KVL for each mesh in terms of mesh currents. Voltage drop across a shared resistor Rm between Mesh 1 and Mesh 2 is Rm(I1 - I2).\n   d. Formulate the matrix system [R][I] = [V] and solve using Cramer Rule or Matrix Inversion.\n\n5. Resistance Matrix Structure [R]:\n   - Diagonal elements R11, R22: Total resistance around Mesh 1, Mesh 2 (ALWAYS POSITIVE).\n   - Off-diagonal elements R12 = R21 = -Rm: Mutual resistance shared between Mesh 1 and Mesh 2 (ALWAYS NEGATIVE for clockwise currents).\n\n6. Supermesh Concept: When a current source is shared between two adjacent meshes, a Supermesh is formed by removing the current source branch and writing KVL around the combined outer loop, supplemented by a current constraint equation (e.g., I1 - I2 = Is).',
    hi: '1. परिभाषा एवं मूल सिद्धांत: मेष विश्लेषण समतलीय परिपथों में KVL का उपयोग करके अज्ञात शाखा धाराओं को ज्ञात करने की एक व्यवस्थित विधि है।\n\n2. प्रयोज्यता: केवल समतलीय (Planar) परिपथों पर लागू होती है।\n\n3. मेष धारा की अवधारणा: यह एक काल्पनिक परिपत्र धारा है। वास्तविक शाखा धारा इसमें से गुजरने वाली मेष धाराओं का बीजीय योग होती है।\n\n4. चरणबद्ध प्रक्रिया:\n   a. सभी M स्वतंत्र मेषों की पहचान करें (M = B - N + 1)।\n   b. प्रत्येक मेष को दक्षिणावर्त मेष धारा (I1, I2...) असाइन करें।\n   c. प्रत्येक मेष के लिए KVL समीकरण लिखें।\n   d. [R][I] = [V] मैट्रिक्स बनाकर हल करें।\n\n5. प्रतिरोध मैट्रिक्स संरचना [R]:\n   - मुख्य विकर्ण R11, R22: मेष का कुल प्रतिरोध (हमेशा धनात्मक)।\n   - ऑफ-डायगोनल R12 = R21 = -Rm: साझा प्रतिरोध (हमेशा ऋणात्मक)।\n\n6. सुपरमेष: जब दो आसन्न मेषों के बीच धारा स्रोत साझा होता है, तो धारा स्रोत शाखा को हटाकर बाहरी लूप पर KVL लिखा जाता है।',
    bn: '১. সংজ্ঞা ও মূলনীতি: মেশ অ্যানালিসিস হলো সমতলীয় সার্কিটে KVL প্রয়োগের মাধ্যমে অজ্ঞাত কারেন্ট নির্ণয়ের একটি সুনির্দিষ্ট পদ্ধতি।\n\n২. প্রয়োগক্ষেত্র: কেবল সমতলীয় (Planar) সার্কিটে প্রযোজ্য।\n\n৩. মেশ কারেন্ট ধারণা: এটি একটি কাল্পনিক লুপ কারেন্ট।\n\n৪. পর্যায়ক্রমিক ধাপসমূহ:\n   ক. স্বাধীন M টি মেশ চিহ্নিত করুন (M = B - N + ১)।\n   খ. প্রতিটি মেশে ঘড়ির কাঁটার দিকে মেশ কারেন্ট ধরুন।\n   গ. KVL প্রয়োগ করুন।\n   ঘ. [R][I] = [V] ম্যাট্রিক্স গঠন করে সমীকরণ সমাধান করুন।\n\n৫. রেজিস্ট্যান্স ম্যাট্রিক্স রূপ [R]:\n   - ডায়াগোনাল উপাদান R11, R22: মেশের মোট প্রতিরোধ।\n   - অফ-ডায়াগোনাল R12 = R21 = -Rm: পারষ্পরিক প্রতিরোধ।\n\n৬. সুপারমেশ: দুটি পাশাপাশি মেশের মাঝে কারেন্ট সোর্স থাকলে ওই সোর্স বাদ দিয়ে বাইরের লুপে KVL লেখা হয়।'
  },
  formulas: [
    {
      symbol: 'V_{Rm}',
      expression: 'V_{Rm} = R_m \\cdot (I_1 - I_2)',
      description: {
        en: 'Voltage Drop across Shared Resistor Rm between Mesh 1 (I1 CW) & Mesh 2 (I2 CW)',
        hi: 'मेष 1 (I1) और मेष 2 (I2) के बीच साझा प्रतिरोधक Rm पर वोल्टेज गिरावट',
        bn: 'মেশ ১ (I1) এবং মেশ ২ (I2) এর মধ্যবর্তী শেয়ার্ড রেজিস্টর Rm এ বিভব পতন'
      }
    },
    {
      symbol: '[R][I] = [V]',
      expression: '\\begin{bmatrix} R_{11} & R_{12} \\\\ R_{21} & R_{22} \\end{bmatrix} \\begin{bmatrix} I_1 \\\\ I_2 \\end{bmatrix} = \\begin{bmatrix} V_{11} \\\\ V_{22} \\end{bmatrix}',
      description: {
        en: 'Mesh Resistance Matrix Formulation for 2-Mesh Network',
        hi: '2-मेष प्रतिरोध नेटवर्क के लिए मेष प्रतिरोध मैट्रिक्स फॉर्मूलेशन',
        bn: '২-মেশ নেটওয়ার্কের জন্য মেশ রেজিস্ট্যান্স ম্যাট্রিক্স সমীকরণ'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-mesh-analysis',
      title: {
        en: 'Mesh Analysis Circuit Diagram with Independent Meshes',
        hi: 'स्वतंत्र मेषों वाला मेष विश्लेषण सर्किट आरेख',
        bn: 'স্বাধীন মেশযুক্ত মেশ অ্যানালিসিস সার্কিট চিত্র'
      },
      caption: {
        en: '2-mesh planar DC network showing clockwise mesh currents I1 & I2, shared resistor Rm, and voltage drives.',
        hi: 'दक्षिणावर्त मेष धाराओं I1 व I2, साझा प्रतिरोधक Rm और वोल्टेज स्रोतों को दर्शाने वाला 2-मेष डीसी नेटवर्क।',
        bn: 'ঘড়ির কাঁটার দিকে মেশ কারেন্ট I1 ও I2, শেয়ার্ড রেজিস্টর Rm এবং ভোল্টেজ সোর্সসহ ২-মেশ ডিসি সার্কিট।'
      },
      svgType: 'circuit-mesh-analysis'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-mesh-1',
      problem: {
        en: 'A single mesh circuit contains a Vs = 24 V DC source and three series resistors R1 = 4 Ω, R2 = 6 Ω, and R3 = 2 Ω. Calculate the mesh current I1 and power dissipated in R2.',
        hi: 'एक एकल मेष सर्किट में एक Vs = 24 V डीसी स्रोत और तीन श्रेणी प्रतिरोधक R1 = 4 Ω, R2 = 6 Ω, और R3 = 2 Ω हैं। मेष धारा I1 और R2 में क्षयित शक्ति की गणना करें।',
        bn: 'একক মেশ সার্কিটে একটি Vs = 24 V সোর্স এবং তিনটি সিরিজ রেজিস্টর R1 = 4 Ω, R2 = 6 Ω, এবং R3 = 2 Ω রয়েছে। মেশ কারেন্ট I1 এবং R2 তে অপচয়কৃত ক্ষমতা নির্ণয় করুন।'
      },
      solution: {
        en: 'Given:\n- Vs = 24 V\n- Series Resistors: R1 = 4 Ω, R2 = 6 Ω, R3 = 2 Ω\n\nStep 1: Write KVL around single mesh (Clockwise I1)\nVs - I1·R1 - I1·R2 - I1·R3 = 0\n24 - I1(4 + 6 + 2) = 0\n24 - 12 I1 = 0\n12 I1 = 24\nI1 = 2.0 A\n\nStep 2: Calculate Power Dissipated in R2\nP_R2 = I1² · R2 = (2.0)² · 6 = 4 · 6 = 24.0 W\n\nAnswer:\nMesh Current I1 = 2.0 A\nPower in R2 = 24.0 W',
        hi: 'KVL समीकरण: 24 - I1(4 + 6 + 2) = 0 ⇒ 12 I1 = 24 ⇒ I1 = 2.0 A\nP_R2 = (2.0)² × 6 = 24.0 W',
        bn: 'KVL সমীকরণ: ২৪ - I1(৪ + ৬ + ২) = ০ ⇒ ১২ I1 = ২৪ ⇒ I1 = ২.০ A\nP_R2 = (২.০)² × ৬ = ২৪.০ W'
      },
      givenValues: {
        'Vs': '24 V',
        'R1, R2, R3': '4 Ω, 6 Ω, 2 Ω'
      },
      finalAnswer: {
        en: 'Mesh Current I1 = 2.0 A, Power P_R2 = 24.0 W',
        hi: 'मेष धारा I1 = 2.0 A, शक्ति P_R2 = 24.0 W',
        bn: 'মেশ কারেন্ট I1 = ২.০ A, ক্ষমতা P_R2 = ২৪.০ W'
      }
    }
  ],
  mcqs: [
    {
      id: 'mcq-ma-1',
      question: {
        en: 'Mesh Analysis is strictly applicable to which classification of electrical networks?',
        hi: 'मेष विश्लेषण विद्युत नेटवर्क के किस वर्गीकरण पर सख्ती से लागू होता है?',
        bn: 'মেশ অ্যানালিসিস প্রধানত কোন ধরনের বৈদ্যুতিক নেটওয়ার্কে প্রযোজ্য?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Planar networks (circuits that can be drawn on a flat plane without crossing wires)', hi: 'समतलीय नेटवर्क (जिन्हें बिना तारों को क्रास किए समतल पर खींचा जा सकता है)', bn: 'সমতলীয় নেটওয়ার্ক (যা তারের ওভারল্যাপ ছাড়া সমতলে আঁকা যায়)' } },
        { id: 'opt-b', text: { en: 'Non-planar 3D cross-over networks only', hi: 'केवल गैर-समतलीय 3D क्रॉस-ओवर नेटवर्क', bn: 'केवल অ-সমতলীয় ত্রিমাত্রिक নেটওয়ার্ক' } },
        { id: 'opt-c', text: { en: 'AC high-frequency transmission lines only', hi: 'केवल एसी उच्च-आवृत्ति ट्रांसमिशन लाइनें', bn: 'কেবল এসি উচ্চ-কম্পাঙ্কের ট্র্যান্সমিশন লাইন' } },
        { id: 'opt-d', text: { en: 'Unilateral diode networks only', hi: 'केवल यूनिलेटरल डायोड नेटवर्क', bn: 'केवल ইউনিলেটারাল ডায়োড নেটওয়ার্ক' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'Mesh analysis relies on well-defined planar windows with interior boundary loops.',
        hi: 'मेष विश्लेषण सुपरिभाषित समतलीय खिड़कियों पर निर्भर करता है।',
        bn: 'মেশ অ্যানালিসিস সুনির্দিষ্ট সমতলীয় লুপের ওপর নির্ভরশীল।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ma-1',
      question: {
        en: 'Provide a structured comparison between Nodal Analysis and Mesh Analysis across 4 key technical criteria.',
        hi: '4 मुख्य तकनीकी मानदंडों के आधार पर नोडल विश्लेषण और मेष विश्लेषण के बीच एक संरचित तुलना प्रदान करें।',
        bn: '৪ টি প্রধান বৈশিষ্ট্যের সাপেক্ষে নোডাল অ্যানালিসিস এবং মেশ অ্যানালিসিসের তুলনামূলক পার্থক্য সংক্ষেপে উপস্থাপন করুন।'
      },
      hint: {
        en: 'Compare fundamental physics law, primary variable, applicability (planar vs non-planar), and special boundary cases.',
        hi: 'मूल भौतिकी नियम, प्राथमिक चर, प्रयोज्यता और विशेष सीमाओं की तुलना करें।',
        bn: 'মৌলিক নীতি, প্রধান চলক, প্রয়োগক্ষেত্র এবং বিশেষ শর্তের তুলনা করুন।'
      },
      answerKey: {
        en: '1. Fundamental Law: Nodal Analysis uses KCL; Mesh Analysis uses KVL.\n2. Primary Variable: Nodal solves for Node Voltages; Mesh solves for Mesh Currents.\n3. Circuit Applicability: Nodal applies to ALL networks; Mesh applies strictly to PLANAR networks.\n4. Special Case: Nodal creates a SUPERNODE for ungrounded voltage sources; Mesh creates a SUPERMESH for shared current sources.',
        hi: '1. मूल नियम: नोडल KCL का उपयोग करता है; मेष KVL का उपयोग करता है।\n2. प्राथमिक चर: नोडल नोड वोल्टेज हल करता है; मेष मेष धारा हल करता है।\n3. प्रयोज्यता: नोडल सभी नेटवर्क पर लागू होता है; मेष केवल समतलीय नेटवर्क पर लागू होता है।\n4. विशेष मामला: नोडल में सुपरनोड बनता है; मेष में सुपरमेष बनता है।',
        bn: '১. মৌলিক নীতি: নোডাল KCL ব্যবহার করে; মেশ KVL ব্যবহার করে।\n২. প্রধান চলক: নোডাল নোড ভোল্টেজ বের করে; মেশ মেশ কারেন্ট বের করে।\n৩. প্রয়োগক্ষেত্র: নোডাল সব সার্কিটে প্রযোজ্য; মেশ কেবল সমতলীয় সার্কিটে প্রযোজ্য।\n৪. বিশেষ ক্ষেত্র: নোডাले সুপারনোড এবং মেশে সুপারমেশ গঠিত হয়।'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Multi-loop planar filter grid analysis in telecommunications',
      'Power transformer mesh equivalent circuit calculation',
      'Loop resistance analysis in multi-branch industrial grounding grids'
    ],
    hi: [
      'दूरसंचार में मल्टी-लूप समतलीय फ़िल्टर ग्रिड विश्लेषण',
      'पावर ट्रांसफार्मर मेष समतुल्य परिपथ गणना',
      'मल्टी-ब्रांच औद्योगिक ग्राउंडिंग ग्रिड में लूप प्रतिरोध विश्लेषण'
    ],
    bn: [
      'টেলিযোগাযোগে মাল্টি-লুপ সমতলীয় ফিল্টার গ্রিড বিশ্লেষণ',
      'পাওয়ার ট্রান্সফরমার মেশ সমতুল্য সার্কিট গণনা',
      'শিল্প গ্রাউন্ডিং গ্রিডে লুপ রেজিস্ট্যান্স বিশ্লেষণ'
    ]
  },
  importantPoints: {
    en: [
      'Mesh Analysis strictly applies ONLY to planar networks.',
      'Mesh current is a fictitious circulating quantity assigned to a minimal closed window loop.',
      'Supermesh bypasses current sources shared between adjacent meshes by combining mesh loops.'
    ],
    hi: [
      'मेष विश्लेषण केवल समतलीय नेटवर्क पर ही लागू होता है।',
      'मेष धारा एक काल्पनिक परिसंचारी मात्रा है।',
      'सुपरमेष आसन्न मेषों के बीच साझा धारा स्रोतों को बायपास करता है।'
    ],
    bn: [
      'মেশ অ্যানালিসিস কেবল সমতলীয় নেটওয়ার্কে কার্যকর।',
      'মেশ কারেন্ট একটি কাল্পনিক কারেন্ট।',
      'সুপারমেশ দুটি লুপকে একত্রিত করে সাধারণ কারেন্ট সোর্স এড়িয়ে চলে।'
    ]
  },
  commonMistakes: {
    en: [
      'Attempting to apply Mesh Analysis to non-planar 3D circuits with crossing branches',
      'Mishandling direction signs when writing KVL for shared mutual resistors between meshes',
      'Including the interior current source term inside a Supermesh KVL loop equation'
    ],
    hi: [
      'क्रॉसिंग शाखाओं वाले गैर-समतलीय 3D सर्किटों पर मेष विश्लेषण लागू करने का प्रयास करना',
      'मेषों के बीच साझा पारस्परिक प्रतिरोधकों के लिए KVL लिखते समय दिशा चिह्नों को गलत संभालना',
      'सुपरमेष KVL लूप समीकरण के अंदर आंतरिक धारा स्रोत पद को शामिल करना'
    ],
    bn: [
      'ওভারল্যাপিং ব্রাঞ্চযুক্ত অ-সমতলীয় ৩D সার্কিটে মেশ অ্যানালিসিস প্রয়োগের চেষ্টা করা',
      'শেয়ার্ড রেজিস্টরে KVL লেখার সময় কারেন্টের বিপরীত দিক বিবেচনা না করা',
      'সুপারমেশ KVL সমীকরণের ভেতরে অভ্যন্তরীণ কারেন্ট সোর্সের পদ যুক্ত করা'
    ]
  }
};
export const LESSON_NETWORK_REDUCTION: Lesson = {
  id: 'lsn-ch4-network-reduction',
  topicId: 'ch4-network-reduction',
  order: 7,
  title: {
    en: 'Series and Parallel Network Reduction Method',
    hi: 'श्रेणी एवं समानांतर नेटवर्क रिडक्शन विधि',
    bn: 'সিরিজ ও প্যারালাল নেটওয়ার্ক রিডাকশন পদ্ধতি'
  },
  easyExplanation: {
    en: 'Network reduction is a systematic technique for simplifying complex multi-resistor DC circuits into a single equivalent resistance (R_eq) connected across the source terminals.',
    hi: 'नेटवर्क रिडक्शन जटिल मल्टी-प्रतिरोधक डीसी सर्किट को स्रोत टर्मिनलों के बीच एकल समतुल्य प्रतिरोध (R_eq) में बदलने की एक व्यवस्थित विधि है।',
    bn: 'নেটওয়ার্ক রিডাকশন হলো সোর্স টার্মিনালের সাথে যুক্ত একাধিক রেজিস্টর সমন্বিত জটিল ডিসি সার্কিটকে একটি সমতুল্য রেজিস্টেন্সে (R_eq) রূপান্তরিত করার প্রণালীবদ্ধ পদ্ধতি।'
  },
  detailedExplanation: {
    en: '1. Objective of Network Reduction: Complex DC circuits often contain combinations of series and parallel components. Network reduction systematically combines these components step-by-step from the load side toward the source terminals until a single total equivalent resistance R_eq is obtained.\n\n2. Identifying Series Connections: Two or more resistors are strictly in series if they are connected end-to-end at a single junction node with no other branch connected to that junction. The same current flows sequentially through all series resistors: R_series = R_1 + R_2 + ... + R_n.\n\n3. Identifying Parallel Connections: Two or more resistors are strictly in parallel if both of their respective terminals are connected across the exact same pair of nodes. The voltage drop across all parallel resistors is identical: 1/R_parallel = 1/R_1 + 1/R_2 + ... + 1/R_n. For two parallel resistors: R_p = (R_1 · R_2) / (R_1 + R_2).\n\n4. Systematic Reduction Procedure:\nStep A: Examine the circuit diagram and identify the farthest sub-circuits relative to the source.\nStep B: Simplify pure series or pure parallel resistor groups into single equivalent values.\nStep C: Redraw the simplified circuit diagram.\nStep D: Repeat until only one equivalent resistance R_eq remains across the source.\nStep E: Calculate total source current I_total = V_s / R_eq.\n\n5. Back-Substitution Method: Once R_eq and total current I_total are known, work backward through the reduction steps to determine individual branch currents and node voltages throughout the entire network.',
    hi: '1. नेटवर्क रिडक्शन का उद्देश्य: जटिल डीसी सर्किट में श्रेणी और समानांतर घटकों के संयोजन होते हैं। यह विधि इन्हें चरण-दर-चरण घटाकर एकल समतुल्य प्रतिरोध R_eq प्राप्त करती है।\n\n2. श्रेणी संयोजन पहचानना: दो या अधिक प्रतिरोधक श्रेणी में तब होते हैं जब वे एक ही जंक्शन नोड पर अंत-से-अंत तक जुड़े हों और उस जंक्शन से कोई अन्य शाखा न निकलती हो: R_series = R_1 + R_2 + ... + R_n।\n\n3. समानांतर संयोजन पहचानना: दो या अधिक प्रतिरोधक समानांतर में तब होते हैं जब उनके दोनों सिरे समान नोड्स के बीच जुड़े हों: 1/R_parallel = 1/R_1 + 1/R_2 + ... + R_n। दो के लिए: R_p = (R_1 · R_2) / (R_1 + R_2)।\n\n4. व्यवस्थित रिडक्शन प्रक्रिया:\nचरण A: स्रोत से सबसे दूर के उप-परिपथों की पहचान करें।\nचरण B: शुद्ध श्रेणी या समानांतर समूहों को सरल बनाएं।\nचरण C: परिपथ आरेख को फिर से बनाएं।\nचरण D: जब तक केवल एक समतुल्य प्रतिरोध R_eq न बचे, प्रक्रिया दोहराएं।\nचरण E: कुल स्रोत धारा I_total = V_s / R_eq की गणना करें।\n\n5. बैक-प्रतिस्थापन विधि: R_eq प्राप्त होने के बाद, पूरे परिपथ में व्यक्तिगत शाखा धाराओं और नोड वोल्टेज निर्धारित करने के लिए उलटे चरणों में काम करें।',
    bn: '১. নেটওয়ার্ক রিডাকশনের উদ্দেশ্য: একাধিক রেজিস্টরের গঠিত জটিল ডিসি সার্কিটকে ধাপে ধাপে কমিয়ে সোর্সের সাথে একটিমাত্র সমতুল্য রেজিস্ট্যান্স R_eq এ রূপান্তর করা।\n\n২. সিরিজ সংযোগ সনাক্তকরণ: দুটি বা তার বেশি রেজিস্টর সিরিজে থাকবে যদি তারা কোনো অতিরিক্ত ব্রাঞ্চ ছাড়া একক নোডে যুক্ত থাকে: R_series = R_1 + R_2 + ... + R_n।\n\n৩. প্যারালাল সংযোগ সনাক্তকরণ: রেজিস্টরগুলো প্যারালালে থাকবে যদি তাদের উভয় প্রান্ত একই দুটি নোডের মধ্যে যুক্ত থাকে: ১/R_parallel = ১/R_1 + ১/R_2 + ... + ১/R_n। দুটি রেজিস্টরের ক্ষেত্রে: R_p = (R_1 · R_2) / (R_1 + R_2)।\n\n৪. পর্যায়ক্রমিক রিডাকশন ধাপসমূহ:\nধাপ A: সোর্স থেকে দূরবর্তী উপক্লাস্টার সনাক্ত করুন।\nধাপ B: পিওর সিরিজ ও প্যারালাল গ্রুপগুলোকে একক রেজিস্টেন্সে রূপান্তরিত করুন।\nধাপ C: সার্কিট আবার আঁকুন।\nধাপ D: কেবল একটি সমতুল্য রেজিস্ট্যান্স R_eq অবশিষ্ট না থাকা পর্যন্ত পুনরাবৃত্তি করুন।\nধাপ E: মোট সোর্স কারেন্ট I_total = V_s / R_eq বের করুন।\n\n৫. ব্যাক-সাবস্টিটিউশন পদ্ধতি: R_eq এবং মোট কারেন্ট পাওয়ার পর, পূর্ববর্তী ধাপে ফেরত গিয়ে স্বতন্ত্র ব্রাঞ্চ কারেন্ট ও নোড ভোল্টেজ নির্ণয় করুন।'
  },
  formulas: [
    {
      symbol: 'R_{series}',
      expression: 'R_{series} = \\sum_{i=1}^{n} R_i',
      description: {
        en: 'Equivalent Resistance of n Resistors Connected in Series',
        hi: 'श्रेणी में जुड़े n प्रतिरोधकों का समतुल्य प्रतिरोध',
        bn: 'সিরিজে যুক্ত n সংখ্যক রেজিস্টরের সমতুল্য রেজিস্ট্যান্স'
      }
    },
    {
      symbol: 'R_{parallel}',
      expression: 'R_{parallel} = \\frac{R_1 \\cdot R_2}{R_1 + R_2}',
      description: {
        en: 'Equivalent Resistance of Two Parallel Resistors R1 & R2',
        hi: 'दो समानांतर प्रतिरोधकों R1 और R2 का समतुल्य प्रतिरोध',
        bn: 'দুটি প্যারালাল রেজিস্টর R1 ও R2 এর সমতুল্য রেজিস্ট্যান্স'
      }
    },
    {
      symbol: 'I_{total}',
      expression: 'I_{total} = \\frac{V_s}{R_{eq}}',
      description: {
        en: 'Total Source Current Delivered to Equivalent Network R_eq',
        hi: 'समतुल्य नेटवर्क R_eq को दी जाने वाली कुल स्रोत धारा',
        bn: 'সমতুল্য নেটওয়ার্ক R_eq এ ব্যবহৃত মোট সোর্স কারেন্ট'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-network-reduction',
      title: {
        en: 'Multi-Stage Series-Parallel Network Reduction Flow Diagram',
        hi: 'मल्टी-स्टेज श्रेणी-समानांतर नेटवर्क रिडक्शन प्रवाह आरेख',
        bn: 'বহু-ধাপের সিরিজ-প্যারালাল নেটওয়ার্ক রিডাকশন ফ্লো চিত্র'
      },
      caption: {
        en: 'Progressive reduction of a complex ladder network showing step-by-step simplification into equivalent resistance Req.',
        hi: 'समतुल्य प्रतिरोध Req में चरण-दर-चरण सरलीकरण को दर्शाने वाला जटिल लेडर नेटवर्क रिडक्शन।',
        bn: 'ধাপে ধাপে সমতুল্য রেজিস্ট্যান্স Req তে রূপান্তরিত করার জটিল লেডার নেটওয়ার্ক রিডাকশন চিত্র।'
      },
      svgType: 'circuit-network-reduction'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-reduction-1',
      problem: {
        en: 'A DC circuit driven by a 60 V voltage source consists of R1 = 6 Ω in series with a network containing two parallel blocks: Block 1 has R2 = 20 Ω in parallel with R3 = 30 Ω; Block 2 has R4 = 24 Ω in parallel with a series branch of R5 = 10 Ω and R6 = 14 Ω. Calculate the total equivalent resistance R_eq and total source current I_total.',
        hi: '60 V स्रोत से संचालित एक डीसी सर्किट में R1 = 6 Ω श्रेणी में है, जिसके साथ दो समानांतर ब्लॉक हैं: ब्लॉक 1 में R2 = 20 Ω, R3 = 30 Ω के समानांतर है; ब्लॉक 2 में R4 = 24 Ω, R5 = 10 Ω और R6 = 14 Ω की श्रेणी शाखा के समानांतर है। R_eq और I_total की गणना करें।',
        bn: '৬০ V সোর্স চালিত সার্কিটে R1 = ৬ Ω এর সাথে দুটি প্যারালাল ব্লক যুক্ত: ব্লক ১ এ R2 = ২০ Ω ও R3 = ৩০ Ω প্যারালালে; ব্লক ২ এ R4 = ২৪ Ω এর সাথে R5 = ১০ Ω ও R6 = ১৪ Ω এর সিরিজ ব্রাঞ্চ প্যারালালে যুক্ত। R_eq এবং I_total নির্ণয় করুন।'
      },
      solution: {
        en: 'Given:\n- Vs = 60 V\n- R1 = 6 Ω\n- Block 1: R2 = 20 Ω, R3 = 30 Ω\n- Block 2: R4 = 24 Ω, R5 = 10 Ω, R6 = 14 Ω\n\nStep 1: Reduce Series Branch in Block 2\nRs1 = R5 + R6 = 10 + 14 = 24 Ω\n\nStep 2: Reduce Parallel Pair in Block 1\nRp1 = (R2 · R3) / (R2 + R3) = (20 · 30) / (20 + 30) = 600 / 50 = 12 Ω\n\nStep 3: Reduce Parallel Pair in Block 2 (R4 || Rs1)\nRp2 = (R4 · Rs1) / (R4 + Rs1) = (24 · 24) / (24 + 24) = 576 / 48 = 12 Ω\n\nStep 4: Calculate Total Equivalent Resistance R_eq\nR_eq = R1 + Rp1 + Rp2 = 6 + 12 + 12 = 30 Ω\n\nStep 5: Calculate Total Source Current I_total\nI_total = Vs / R_eq = 60 / 30 = 2.0 A\n\nAnswer:\nR_eq = 30.0 Ω, I_total = 2.0 A',
        hi: 'चरण 1: श्रेणी शाखा Rs1 = 10 + 14 = 24 Ω\nचरण 2: पहला समानांतर ब्लॉक Rp1 = (20 × 30) / 50 = 12 Ω\nचरण 3: दूसरा समानांतर ब्लॉक Rp2 = (24 × 24) / 48 = 12 Ω\nचरण 4: कुल R_eq = 6 + 12 + 12 = 30 Ω\nचरण 5: कुल धारा I_total = 60 / 30 = 2.0 A',
        bn: 'ধাপ ১: সিরিজ ব্রাঞ্চ Rs1 = ১০ + ১৪ = ২৪ Ω\nধাপ ২: প্রথম প্যারালাল ব্লক Rp1 = (২০ × ৩০) / ৫০ = ১২ Ω\nধাপ ৩: দ্বিতীয় প্যারালাল ব্লক Rp2 = (২৪ × ২৪) / ৪৮ = ১২ Ω\nধাপ ৪: মোট R_eq = ৬ + ১২ + ১২ = ৩০ Ω\nধাপ ৫: মোট কারেন্ট I_total = ৬০ / ৩০ = ২.০ A'
      },
      givenValues: {
        'Vs': '60 V',
        'R1': '6 Ω',
        'R2, R3': '20 Ω, 30 Ω',
        'R4, R5, R6': '24 Ω, 10 Ω, 14 Ω'
      },
      finalAnswer: {
        en: 'R_eq = 30.0 Ω, I_total = 2.0 A',
        hi: 'R_eq = 30.0 Ω, I_total = 2.0 A',
        bn: 'R_eq = ৩০.০ Ω, I_total = ২.০ A'
      }
    },
    {
      id: 'ex-reduction-2',
      problem: {
        en: 'For the circuit in Example 1, perform back-substitution to calculate the voltage drop VRp1 across Block 1 and the branch currents IR2 and IR3.',
        hi: 'उदाहरण 1 के सर्किट के लिए, ब्लॉक 1 पर वोल्टेज ड्रॉप VRp1 और शाखा धाराओं IR2 व IR3 की गणना के लिए बैक-प्रतिस्थापन करें।',
        bn: 'উদাহরণ ১ এর সার্কিটের জন্য ব্যাক-সাবস্টিটিউশন প্রয়োগ করে ব্লক ১ এর ভোল্টেজ VRp1 এবং ব্রাঞ্চ কারেন্ট IR2 ও IR3 নির্ণয় করুন।'
      },
      solution: {
        en: 'Given from Example 1:\n- I_total = 2.0 A\n- Rp1 = 12 Ω, R2 = 20 Ω, R3 = 30 Ω\n\nStep 1: Calculate Voltage Drop across Block 1 (Rp1)\nVRp1 = I_total · Rp1 = 2.0 · 12 = 24.0 V\n\nStep 2: Calculate Current through Branch R2\nIR2 = VRp1 / R2 = 24.0 / 20 = 1.20 A\n\nStep 3: Calculate Current through Branch R3\nIR3 = VRp1 / R3 = 24.0 / 30 = 0.80 A\n\nVerification: IR2 + IR3 = 1.20 + 0.80 = 2.00 A (✓ Equals I_total)',
        hi: 'VRp1 = 2.0 × 12 = 24.0 V\nIR2 = 24.0 / 20 = 1.20 A\nIR3 = 24.0 / 30 = 0.80 A\nसत्यापन: 1.20 + 0.80 = 2.00 A (✓ I_total)',
        bn: 'VRp1 = ২.০ × ১২ = ২৪.০ V\nIR2 = ২৪.০ / ২০ = ১.২০ A\nIR3 = ২৪.০ / ৩০ = ০.৮০ A\nসত্যতা যাচাই: ১.২০ + ০.৮০ = ২.০০ A (✓ I_total)'
      },
      givenValues: {
        'I_total': '2.0 A',
        'Rp1': '12 Ω',
        'R2, R3': '20 Ω, 30 Ω'
      },
      finalAnswer: {
        en: 'VRp1 = 24.0 V, IR2 = 1.20 A, IR3 = 0.80 A',
        hi: 'VRp1 = 24.0 V, IR2 = 1.20 A, IR3 = 0.80 A',
        bn: 'VRp1 = ২৪.০ V, IR2 = ১.২০ A, IR3 = ০.৮০ A'
      }
    }
  ],
  mcqs: [
    {
      id: 'mcq-nr-1',
      question: {
        en: 'When simplifying a complex resistor network, at which location should you begin combining resistors?',
        hi: 'जटिल प्रतिरोधक नेटवर्क को सरल करते समय, आपको प्रतिरोधकों को जोड़ना किस स्थान से शुरू करना चाहिए?',
        bn: 'জটিল রেজিস্টর নেটওয়ার্ক সহজীকরণে রেজিস্টর যুক্ত করা কোথা থেকে শুরু করা উচিত?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Directly at the voltage source terminals', hi: 'सीधे वोल्टेज स्रोत टर्मिनलों पर', bn: 'সরাসরি ভোল্টেজ সোর্স টার্মিনালে' } },
        { id: 'opt-b', text: { en: 'At the farthest sub-circuit away from the source terminals', hi: 'स्रोत टर्मिनलों से सबसे दूर के उप-परिपथ पर', bn: 'সোর্স টার্মিনাল থেকে সবচেয়ে দূরবর্তী উপক্লাস্টারে' } },
        { id: 'opt-c', text: { en: 'Always starting with the highest resistance value', hi: 'हमेशा उच्चतम प्रतिरोध मान से शुरू करके', bn: 'সর্বদা সর্বোচ্চ রেজিস্ট্যান্স মান দিয়ে' } },
        { id: 'opt-d', text: { en: 'At any ground node randomly', hi: 'किसी भी ग्राउंड नोड पर यादृच्छिक रूप से', bn: 'যেকোনো গ্রাউন্ড নোডে অসংলগ্নভাবে' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'Reduction works systematically from the farthest load elements back toward the source terminals.',
        hi: 'रिडक्शन स्रोत टर्मिनलों की ओर सबसे दूर के लोड तत्वों से व्यवस्थित रूप से काम करता है।',
        bn: 'রিডাকশন প্রক্রিয়া দূরবর্তী উপাদান থেকে শুরু করে সোর্স টার্মিনালের দিকে আসে।'
      }
    },
    {
      id: 'mcq-nr-2',
      question: {
        en: 'Two resistors R1 and R2 are connected in parallel across a 12 V source. If R1 = 10 Ω and R2 = 10 Ω, what is the total equivalent resistance?',
        hi: 'दो प्रतिरोधक R1 और R2 12 V स्रोत से समानांतर में जुड़े हैं। यदि R1 = 10 Ω और R2 = 10 Ω है, तो कुल समतुल्य प्रतिरोध क्या है?',
        bn: 'দুটি রেজিস্টর R1 ও R2 ১২ V সোর্সে প্যারালালে যুক্ত। যদি R1 = ১০ Ω এবং R2 = ১০ Ω হয়, মোট সমতুল্য রেজিস্ট্যান্স কত?'
      },
      options: [
        { id: 'opt-a', text: { en: '20 Ω', hi: '20 Ω', bn: '২০ Ω' } },
        { id: 'opt-b', text: { en: '10 Ω', hi: '10 Ω', bn: '১০ Ω' } },
        { id: 'opt-c', text: { en: '5 Ω', hi: '5 Ω', bn: '৫ Ω' } },
        { id: 'opt-d', text: { en: '2.5 Ω', hi: '2.5 Ω', bn: '২.৫ Ω' } }
      ],
      correctOptionId: 'opt-c',
      explanation: {
        en: 'For two equal parallel resistors of value R, R_p = R / 2 = 10 / 2 = 5 Ω.',
        hi: 'R मान वाले दो समान समानांतर प्रतिरोधकों के लिए: R_p = R / 2 = 10 / 2 = 5 Ω।',
        bn: 'সমান মানের দুটি প্যারালাল রেজিস্টরের জন্য: R_p = R / ২ = ১০ / ২ = ৫ Ω।'
      }
    },
    {
      id: 'mcq-nr-3',
      question: {
        en: 'What is the purpose of the back-substitution method in network reduction?',
        hi: 'नेटवर्क रिडक्शन में बैक-प्रतिस्थापन विधि का उद्देश्य क्या है?',
        bn: 'নেটওয়ার্ক রিডাকশনে ব্যাক-সাবস্টিটিউশন পদ্ধতির উদ্দেশ্য কী?'
      },
      options: [
        { id: 'opt-a', text: { en: 'To convert DC sources into AC sources', hi: 'डीसी स्रोतों को एसी स्रोतों में बदलने के लिए', bn: 'ডিসি সোর্সকে এসি সোর্সে রূপান্তর' } },
        { id: 'opt-b', text: { en: 'To determine individual branch currents and node voltages using the total source current', hi: 'कुल स्रोत धारा का उपयोग करके व्यक्तिगत शाखा धाराओं और नोड वोल्टेज को निर्धारित करने के लिए', bn: 'মোট সোর্স কারেন্ট ব্যবহার করে স্বতন্ত্র ব্রাঞ্চ কারেন্ট ও নোড ভোল্টেজ বের করা' } },
        { id: 'opt-c', text: { en: 'To measure thermal power loss in capacitors', hi: 'संधारित्रों में तापीय शक्ति हानि को मापने के लिए', bn: 'ক্যাপাসিটরের তাপীয় অপচয় পরিমাপ করা' } },
        { id: 'opt-d', text: { en: 'To remove ground references from the network', hi: 'नेटवर्क से ग्राउंड संदर्भों को हटाने के लिए', bn: 'নেটওয়ার্ক থেকে গ্রাউন্ড তুলে দেওয়া' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'Back-substitution works backward through simplified stages to find internal voltage drops and branch currents.',
        hi: 'बैक-प्रतिस्थापन आंतरिक वोल्टेज ड्रॉप और शाखा धाराओं को खोजने के लिए उलटे चरणों में काम करता है।',
        bn: 'ব্যাক-সাবস্টিটিউশন পদ্ধতি অভ্যন্তরীণ ভোল্টেজ পতন ও ব্রাঞ্চ কারেন্ট নির্ণয়ে ব্যবহৃত হয়।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-nr-1',
      question: {
        en: 'State the 4 main steps required to calculate the total equivalent resistance of a ladder network containing 4 resistors.',
        hi: '4 प्रतिरोधकों वाले लेडर नेटवर्क के कुल समतुल्य प्रतिरोध की गणना के लिए आवश्यक 4 मुख्य चरणों का उल्लेख करें।',
        bn: '৪ টি রেজিস্টর বিশিষ্ট একটি লেডার নেটওয়ার্কের মোট সমতুল্য রেজিস্ট্যান্স নির্ণয়ের প্রধান ৪ টি ধাপ উল্লেখ করুন।'
      },
      hint: {
        en: 'Identify end branch, combine series/parallel, redraw, repeat.',
        hi: 'अंतिम शाखा पहचानें, श्रेणी/समानांतर जोड़ें, पुनः आरेखित करें, दोहराएं।',
        bn: 'শেষ ব্রাঞ্চ চিহ্নিত করুন, সিরিজ/প্যারালাল যোগ করুন, নতুন সার্কিট আঁকুন।'
      },
      answerKey: {
        en: '1. Identify the farthest branch from the source terminals.\n2. Combine series or parallel resistors in that farthest section into a single value.\n3. Redraw the reduced circuit diagram.\n4. Repeat the combination inward until only one resistor R_eq remains across the input source.',
        hi: '1. स्रोत टर्मिनलों से सबसे दूर की शाखा की पहचान करें।\n2. सबसे दूर के हिस्से में श्रेणी या समानांतर प्रतिरोधकों को एक में जोड़ें।\n3. घटाये गए परिपथ आरेख को पुनः चित्रित करें।\n4. जब तक केवल R_eq न बचे, प्रक्रिया दोहराएं।',
        bn: '১. সোর্স থেকে সবচেয়ে দূরবর্তী ব্রাঞ্চ চিহ্নিত করুন।\n২. দূরবর্তী অংশটিকে একক রেজিস্টেন্সে পরিণত করুন।\n৩. নতুন সার্কিট আঁকুন।\n৪. কেবল একটি R_eq না থাকা পর্যন্ত পুনরাবৃত্তি করুন।'
      }
    },
    {
      id: 'pq-nr-2',
      question: {
        en: 'Three 30 Ω resistors are connected in parallel. Calculate their equivalent resistance R_p. Then calculate total current when connected to a 90 V DC battery.',
        hi: 'तीन 30 Ω प्रतिरोधक समानांतर में जुड़े हैं। उनके समतुल्य प्रतिरोध R_p की गणना करें। फिर 90 V डीसी बैटरी से जुड़ने पर कुल धारा की गणना करें।',
        bn: 'তিনটি ৩০ Ω রেজিস্টর প্যারালালে যুক্ত। তাদের সমতুল্য রেজিস্ট্যান্স R_p নির্ণয় করুন। এরপর ৯০ V ব্যাটারির সাথে যুক্ত হলে মোট কারেন্ট কত হবে?'
      },
      hint: {
        en: 'For n equal parallel resistors: R_p = R / n. Then I = V / R_p.',
        hi: 'n समान समानांतर प्रतिरोधकों के लिए: R_p = R / n। फिर I = V / R_p।',
        bn: 'সমান্তরাল n সমমানের রেজিস্টরে: R_p = R / n। এরপর I = V / R_p।'
      },
      answerKey: {
        en: '1. Equivalent Resistance: R_p = R / 3 = 30 / 3 = 10.0 Ω\n2. Total Source Current: I_total = V_s / R_p = 90 / 10 = 9.0 A',
        hi: '1. समतुल्य प्रतिरोध: R_p = 30 / 3 = 10.0 Ω\n2. कुल धारा: I_total = 90 / 10 = 9.0 A',
        bn: '১. সমতুল্য রেজিস্ট্যান্স: R_p = ৩০ / ৩ = ১০.০ Ω\n২. মোট কারেন্ট: I_total = ৯০ / ১০ = ৯.০ A'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Power grid line loss and total load impedance calculation',
      'Audio speaker multi-driver crossover network matching',
      'Electronic PCB power distribution rail impedance optimization'
    ],
    hi: [
      'पावर ग्रिड लाइन हानि और कुल लोड प्रतिबाधा की गणना',
      'ऑडियो स्पीकर मल्टी-ड्राइवर क्रॉसओवर नेटवर्क मैचिंग',
      'इलेक्ट्रॉनिक पीसीबी पावर डिस्ट्रीब्यूशन रेल प्रतिबाधा अनुकूलन'
    ],
    bn: [
      'পাওয়ার গ্রিড লাইন লস এবং মোট লোড ইম্পিড্যান্স গণনা',
      'অডিও স্পিকার মাল্টি-ড্রাইভার ক্রসওভার নেটওয়ার্ক ম্যাচিং',
      'ইলেকট্রনিক পিসিবি পাওয়ার নেটওয়ার্ক ইম্পিড্যান্স অপটিমাইজেশন'
    ]
  },
  importantPoints: {
    en: [
      'Network reduction simplifies complex circuits without altering terminal I-V characteristics.',
      'Series components share identical current; parallel components share identical voltage.',
      'Always start reduction from the farthest branch away from source terminals.'
    ],
    hi: [
      'नेटवर्क रिडक्शन टर्मिनल I-V विशेषताओं को बदले बिना जटिल सर्किटों को सरल बनाता है।',
      'श्रेणी घटक समान धारा साझा करते हैं; समानांतर घटक समान वोल्टेज साझा करते हैं।',
      'हमेशा स्रोत टर्मिनलों से सबसे दूर की शाखा से रिडक्शन शुरू करें।'
    ],
    bn: [
      'নেটওয়ার্ক রিডাকশন সোর্স টার্মিনালের I-V বৈশিষ্ট্য পরিবর্তন না করে জটিল সার্কিট সহজ করে।',
      'সিরিজ উপাদান অভিন্ন কারেন্ট প্রবাহ পায়; প্যারালাল উপাদান অভিন্ন ভোল্টেজ পায়।',
      'সর্বদা সোর্স টার্মিনাল থেকে দূরবর্তী অংশ হতে রিডাকশন শুরু করুন।'
    ]
  },
  commonMistakes: {
    en: [
      'Assuming two resistors are in series when an intermediate node connects to a third branch',
      'Assuming two resistors are in parallel when they do not share BOTH node terminals',
      'Forgetting to redraw the circuit after each reduction step'
    ],
    hi: [
      'दो प्रतिरोधकों को श्रेणी में मान लेना जब एक मध्यवर्ती नोड तीसरी शाखा से जुड़ता है',
      'दो प्रतिरोधकों को समानांतर में मान लेना जब वे दोनों नोड टर्मिनलों को साझा नहीं करते हैं',
      'प्रत्येक रिडक्शन चरण के बाद परिपथ को फिर से चित्रित करना भूल जाना'
    ],
    bn: [
      'মাঝখানের নোডে তৃতীয় কোনো ব্রাঞ্চ থাকা সত্ত্বেও দুটি রেজিস্টরকে সিরিজে বিবেচনা করা',
      'উভয় প্রান্ত একই দুটি নোডে যুক্ত না থাকা সত্ত্বেও তাদের প্যারালালে বিবেচনা করা',
      'প্রতিটি রিডাকশন ধাপের পর নতুন সার্কিট আঁকতে ভুলে যাওয়া'
    ]
  }
};

export const LESSON_DIVIDER_NETWORKS: Lesson = {
  id: 'lsn-ch4-divider-networks',
  topicId: 'ch4-divider-networks',
  order: 8,
  title: {
    en: 'Voltage and Current Division in Complex Networks',
    hi: 'जटिल नेटवर्कों में वोल्टेज एवं धारा विभाजन',
    bn: 'জটিল নেটওয়ার্কে ভোল্টেজ ও কারেন্ট ডিভিশন'
  },
  easyExplanation: {
    en: 'Voltage Division Rule (VDR) determines voltage drops across series resistors directly. Current Division Rule (CDR) determines branch currents in parallel networks directly.',
    hi: 'वोल्टेज विभाजन नियम (VDR) सीधे श्रेणी प्रतिरोधकों पर वोल्टेज ड्रॉप निर्धारित करता है। धारा विभाजन नियम (CDR) सीधे समानांतर नेटवर्कों में शाखा धाराएं निर्धारित करता है।',
    bn: 'ভোল্টেজ ডিভিশন রুল (VDR) সরাসরি সিরিজ রেজিস্টরের ভোল্টেজ পতন নির্ণয় করে। কারেন্ট ডিভিশন রুল (CDR) সরাসরি প্যারালাল নেটওয়ার্কের ব্রাঞ্চ কারেন্ট নির্ণয় করে।'
  },
  detailedExplanation: {
    en: '1. Principle of Voltage Division (VDR): In a series circuit containing resistors R1, R2, ..., Rn connected across source Vs, the total voltage divides directly proportional to individual resistance values.\nFormula: V_x = V_s · (R_x / R_total).\n\n2. Loaded Voltage Dividers: When a load resistor R_L is connected in parallel across one resistor of a voltage divider, the lower effective parallel resistance reduces that section\'s output voltage.\n\n3. Principle of Current Division (CDR): In a parallel circuit, total input current I_total divides inversely proportional to individual branch resistances (or directly proportional to conductances G = 1/R).\n\n4. CDR for Two Parallel Branches: For branches R1 and R2:\nI_1 = I_total · [R_2 / (R_1 + R_2)]\nI_2 = I_total · [R_1 / (R_1 + R_2)]\nNotice the opposite resistor is in the numerator because lower resistance draws a larger share of current!\n\n5. CDR for N Parallel Branches (Conductance Method): For branches with conductances G1, G2, ..., Gn:\nI_x = I_total · (G_x / G_total) where G_total = G1 + G2 + ... + Gn.\n\n6. Application in Complex Networks: Use VDR and CDR in reduced block stages to solve branch values rapidly without calculating intermediate whole-circuit parameters.',
    hi: '1. वोल्टेज विभाजन का सिद्धांत (VDR): Vs से जुड़े श्रेणी प्रतिरोधकों R1, R2, ..., Rn में, कुल वोल्टेज सीधे प्रतिरोध मानों के समानुपाती विभाजित होता है:\nV_x = V_s · (R_x / R_total)।\n\n2. लोडेड वोल्टेज डिवाइडर: जब एक लोड प्रतिरोधक R_L वोल्टेज डिवाइडर के एक प्रतिरोधक पर समानांतर में जोड़ा जाता है, तो कम प्रभावी समानांतर प्रतिरोध उस खंड के आउटपुट वोल्टेज को कम कर देता है।\n\n3. धारा विभाजन का सिद्धांत (CDR): समानांतर परिपथ में, कुल इनपुट धारा I_total व्यक्तिगत शाखा प्रतिरोधों के व्युत्क्रमानुपाती विभाजित होती है (या चालकता G = 1/R के समानुपाती)।\n\n4. दो समानांतर शाखाओं के लिए CDR:\nI_1 = I_total · [R_2 / (R_1 + R_2)]\nI_2 = I_total · [R_1 / (R_1 + R_2)]\nध्यान दें कि विपरीत प्रतिरोधक अंश में है क्योंकि कम प्रतिरोध अधिक धारा खींचता है!\n\n5. N समानांतर शाखाओं के लिए CDR (चालकता विधि):\nI_x = I_total · (G_x / G_total) जहाँ G_total = G1 + G2 + ... + Gn।\n\n6. जटिल नेटवर्कों में अनुप्रयोग: संपूर्ण सर्किट मापदंडों की गणना किए बिना शाखा मानों को तेज़ी से हल करने के लिए VDR और CDR का उपयोग करें।',
    bn: '১. ভোল্টেজ ডিভিশন নীতি (VDR): Vs সোর্সের সাথে সিরিজে যুক্ত রেজিস্টর R1, R2, ..., Rn এর ক্ষেত্রে ভোল্টেজ সরাসরি রেজিস্ট্যান্সের সমানুপাতে বিভক্ত হয়:\nV_x = V_s · (R_x / R_total)।\n\n২. লোডেড ভোল্টেজ ডিভাইডার: যখন ভোল্টেজ ডিভাইডারের কোনো নির্দিষ্ট অংশে একটি লোড রেজিস্টর R_L প্যারালালে যুক্ত করা হয়, তখন কার্যকর সমতুল্য রেজিস্ট্যান্স কমে আউটপুট ভোল্টেজ কমে যায়।\n\n৩. কারেন্ট ডিভিশন নীতি (CDR): প্যারালাল সার্কিটে মোট কারেন্ট I_total প্রতিটি ব্রাঞ্চের রেজিস্ট্যান্সের ব্যস্তানুপাতে (বা পরিবাহিতা G = ১/R এর সরাসরি সমানুপাতে) বিভক্ত হয়।\n\n৪. দুই ব্রাঞ্চের জন্য CDR:\nI_1 = I_total · [R_2 / (R_1 + R_2)]\nI_2 = I_total · [R_1 / (R_1 + R_2)]\nমনে রাখুন, লবে বিপরীত রেজিস্ট্যান্স থাকে কারণ কম রোধে বেশি কারেন্ট প্রবাহিত হয়!\n\n৫. N সংখ্যক প্যারালাল ব্রাঞ্চের জন্য CDR (পরিবাহিতা ফর্ম):\nI_x = I_total · (G_x / G_total) যেখানে G_total = G1 + G2 + ... + Gn।\n\n৬. জটিল নেটওয়ার্কে প্রয়োগ: পুরো সার্কিট রিডাকশন ছাড়া দ্রুত ব্রাঞ্চ কারেন্ট ও ভোল্টেজ বের করতে VDR ও CDR নিয়মগুলো প্রয়োগ করুন।'
  },
  formulas: [
    {
      symbol: 'V_x',
      expression: 'V_x = V_s \\cdot \\left(\\frac{R_x}{R_{total}}\\right)',
      description: {
        en: 'Voltage Divider Formula for Resistor Rx in Series Network',
        hi: 'श्रेणी नेटवर्क में प्रतिरोधक Rx के लिए वोल्टेज डिवाइडर सूत्र',
        bn: 'সিরিজ নেটওয়ার্কে রেজিস্টর Rx এর জন্য ভোল্টেজ ডিভাইডার সূত্র'
      }
    },
    {
      symbol: 'I_1',
      expression: 'I_1 = I_{total} \\cdot \\left(\\frac{R_2}{R_1 + R_2}\\right)',
      description: {
        en: 'Current Divider Formula for Branch R1 in 2-Branch Parallel Network',
        hi: '2-शाखा समानांतर नेटवर्क में शाखा R1 के लिए धारा डिवाइडर सूत्र',
        bn: '২-ব্রাঞ্চ প্যারালাল নেটওয়ার্কে ব্রাঞ্চ R1 এর জন্য কারেন্ট ডিভাইডার সূত্র'
      }
    },
    {
      symbol: 'I_x',
      expression: 'I_x = I_{total} \\cdot \\left(\\frac{G_x}{\\sum G_k}\\right)',
      description: {
        en: 'General Conductance Form Current Divider Formula for Multi-Branch Parallel Circuit',
        hi: 'मल्टी-ब्रांच समानांतर परिपथ के लिए सामान्य चालकता रूप धारा डिवाइडर सूत्र',
        bn: 'মাল্টি-ব্রাঞ্চ প্যারালাল সার্কিটের জন্য সাধারণ পরিবাহিতা ফর্ম কারেন্ট ডিভাইডার সূত্র'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-divider-networks',
      title: {
        en: 'Voltage and Current Division Principles Diagram',
        hi: 'वोल्टेज एवं धारा विभाजन सिद्धांत आरेख',
        bn: 'ভোল্টেজ ও কারেন্ট ডিভিশন নীতি চিত্র'
      },
      caption: {
        en: 'Schematic representation of series voltage divider and parallel current divider networks.',
        hi: 'श्रेणी वोल्टेज डिवाइडर और समानांतर धारा डिवाइडर नेटवर्कों का योजनाबद्ध निरूपण।',
        bn: 'সিরিজ ভোল্টেজ ডিভাইডার এবং প্যারালাল কারেন্ট ডিভাইডার সার্কিটের ভিজ্যুয়াল স্কিম্যাটিক চিত্র।'
      },
      svgType: 'circuit-divider-networks'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-divider-1',
      problem: {
        en: 'A series voltage divider connected across a Vs = 24 V source consists of R1 = 10 Ω, R2 = 20 Ω, and R3 = 30 Ω. Calculate the individual voltage drops V1, V2, and V3 using the Voltage Divider Rule.',
        hi: 'Vs = 24 V स्रोत से जुड़ा एक श्रेणी वोल्टेज डिवाइडर R1 = 10 Ω, R2 = 20 Ω, और R3 = 30 Ω से बना है। वोल्टेज डिवाइडर नियम का उपयोग करके व्यक्तिगत वोल्टेज ड्रॉप V1, V2, और V3 की गणना करें।',
        bn: 'Vs = ২৪ V সোর্সে যুক্ত একটি সিরিজ ভোল্টেজ ডিভাইডারে R1 = ১০ Ω, R2 = ২০ Ω, এবং R3 = ৩০ Ω রয়েছে। ভোল্টেজ ডিভাইডার রুল প্রয়োগ করে V1, V2, ও V3 নির্ণয় করুন।'
      },
      solution: {
        en: 'Given:\n- Vs = 24 V\n- R1 = 10 Ω, R2 = 20 Ω, R3 = 30 Ω\n\nStep 1: Calculate Total Series Resistance\nR_total = R1 + R2 + R3 = 10 + 20 + 30 = 60 Ω\n\nStep 2: Apply Voltage Divider Rule for V1\nV1 = Vs · (R1 / R_total) = 24 · (10 / 60) = 4.0 V\n\nStep 3: Apply Voltage Divider Rule for V2\nV2 = Vs · (R2 / R_total) = 24 · (20 / 60) = 8.0 V\n\nStep 4: Apply Voltage Divider Rule for V3\nV3 = Vs · (R3 / R_total) = 24 · (30 / 60) = 12.0 V\n\nVerification: V1 + V2 + V3 = 4 + 8 + 12 = 24 V (✓ Equals Vs)',
        hi: 'R_total = 10 + 20 + 30 = 60 Ω\nV1 = 24 × (10 / 60) = 4.0 V\nV2 = 24 × (20 / 60) = 8.0 V\nV3 = 24 × (30 / 60) = 12.0 V\nसत्यापन: 4 + 8 + 12 = 24 V',
        bn: 'R_total = ১০ + ২০ + ৩০ = ৬০ Ω\nV1 = ২৪ × (১০ / ৬০) = ৪.০ V\nV2 = ২৪ × (২০ / ৬০) = ৮.০ V\nV3 = ২৪ × (৩০ / ৬০) = ১২.০ V\nসত্যতা যাচাই: ৪ + ৮ + ১২ = ২৪ V'
      },
      givenValues: {
        'Vs': '24 V',
        'R1, R2, R3': '10 Ω, 20 Ω, 30 Ω'
      },
      finalAnswer: {
        en: 'V1 = 4.0 V, V2 = 8.0 V, V3 = 12.0 V',
        hi: 'V1 = 4.0 V, V2 = 8.0 V, V3 = 12.0 V',
        bn: 'V1 = ৪.০ V, V2 = ৮.০ V, V3 = ১২.০ V'
      }
    },
    {
      id: 'ex-divider-2',
      problem: {
        en: 'A total current I_total = 12 A enters a parallel network containing two branches R1 = 10 Ω and R2 = 15 Ω. Calculate branch currents I1 and I2 using the Current Divider Rule.',
        hi: 'कुल धारा I_total = 12 A दो शाखाओं R1 = 10 Ω और R2 = 15 Ω वाले समानांतर नेटवर्क में प्रवेश करती है। धारा विभाजन नियम का उपयोग करके शाखा धाराओं I1 और I2 की गणना करें।',
        bn: 'মোট ১২ A কারেন্ট R1 = ১০ Ω এবং R2 = ১৫ Ω এর একটি প্যারালাল নেটওয়ার্কে প্রবেশ করে। কারেন্ট ডিভাইডার রুল ব্যবহার করে ব্রাঞ্চ কারেন্ট I1 এবং I2 নির্ণয় করুন।'
      },
      solution: {
        en: 'Given:\n- I_total = 12 A\n- R1 = 10 Ω, R2 = 15 Ω\n\nStep 1: Apply Current Divider Rule for I1\nI1 = I_total · [R2 / (R1 + R2)] = 12 · [15 / (10 + 15)] = 12 · (15 / 25) = 7.20 A\n\nStep 2: Apply Current Divider Rule for I2\nI2 = I_total · [R1 / (R1 + R2)] = 12 · [10 / (10 + 15)] = 12 · (10 / 25) = 4.80 A\n\nVerification: I1 + I2 = 7.20 + 4.80 = 12.00 A (✓ Equals I_total)',
        hi: 'I1 = 12 × [15 / (10 + 15)] = 7.20 A\nI2 = 12 × [10 / (10 + 15)] = 4.80 A\nसत्यापन: 7.20 + 4.80 = 12.00 A',
        bn: 'I1 = ১২ × [১৫ / (১০ + ১৫)] = ৭.২০ A\nI2 = ১২ × [১০ / (১০ + ১৫)] = ৪.৮০ A\nসত্যতা যাচাই: ৭.২০ + ৪.৮০ = ১২.০০ A'
      },
      givenValues: {
        'I_total': '12 A',
        'R1, R2': '10 Ω, 15 Ω'
      },
      finalAnswer: {
        en: 'I1 = 7.20 A, I2 = 4.80 A',
        hi: 'I1 = 7.20 A, I2 = 4.80 A',
        bn: 'I1 = ৭.২০ A, I2 = ৪.৮০ A'
      }
    }
  ],
  mcqs: [
    {
      id: 'mcq-dn-1',
      question: {
        en: 'In a series voltage divider, how is the voltage drop across an individual resistor related to its resistance value?',
        hi: 'श्रेणी वोल्टेज डिवाइडर में, किसी व्यक्तिगत प्रतिरोधक पर वोल्टेज ड्रॉप उसके प्रतिरोध मान से कैसे संबंधित है?',
        bn: 'সিরিজ ভোল্টেজ ডিভাইডারে কোনো রেজিস্টরের ভোল্টেজ পতন তার রেজিস্ট্যান্স মানের সাথে কীভাবে সম্পর্কিত?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Inversely proportional to resistance', hi: 'प्रतिरोध के व्युत्क्रमानुपाती', bn: 'রেজিস্ট্যান্সের ব্যস্তানুপাতিক' } },
        { id: 'opt-b', text: { en: 'Directly proportional to resistance', hi: 'प्रतिरोध के सीधे समानुपाती', bn: 'রেজিস্ট্যান্সের সরাসরি সমানুপাতিক' } },
        { id: 'opt-c', text: { en: 'Independent of resistance', hi: 'प्रतिरोध से स्वतंत्र', bn: 'রেজিস্ট্যান্সের ওপর নির্ভর করে না' } },
        { id: 'opt-d', text: { en: 'Proportional to square of resistance', hi: 'प्रतिरोध के वर्ग के समानुपाती', bn: 'রেজিস্ট্যান্সের বর্গের সমানুপাতিক' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'Since current is constant in series, V = I · R implies voltage drop V is directly proportional to R.',
        hi: 'चूँकि श्रेणी में धारा स्थिर होती है, V = I · R का अर्थ है कि वोल्टेज ड्रॉप V सीधे R के समानुपाती है।',
        bn: 'সিরিজে কারেন্ট ধ্রুবক হওয়ায়, V = I · R অনুযায়ী ভোল্টেজ পতন V সরাসরি R এর সমানুপাতিক।'
      }
    },
    {
      id: 'mcq-dn-2',
      question: {
        en: 'Why does the opposite resistor (R2) appear in the numerator of the 2-branch current divider formula I1 = I_total · [R2 / (R1 + R2)]?',
        hi: '2-शाखा धारा डिवाइडर सूत्र I1 = I_total · [R2 / (R1 + R2)] के अंश में विपरीत प्रतिरोधक (R2) क्यों दिखाई देता है?',
        bn: '২-ব্রাঞ্চ কারেন্ট ডিভাইডার সূত্র I1 = I_total · [R2 / (R1 + R2)] এর লবে বিপরীত রেজিস্টর (R2) থাকে কেন?'
      },
      options: [
        { id: 'opt-a', text: { en: 'It is a mathematical error in textbook formulas', hi: 'यह पाठ्यपुस्तक के सूत्रों में एक गणितीय त्रुटि है', bn: 'এটি পাঠ্যবইয়ের একটি গাণিতিক ভুল' } },
        { id: 'opt-b', text: { en: 'Because current divides inversely with resistance; a smaller R1 branch must receive a larger share proportional to R2', hi: 'क्योंकि धारा प्रतिरोध के साथ व्युत्क्रमानुपाती विभाजित होती है; एक छोटी R1 शाखा को R2 के समानुपाती बड़ा हिस्सा मिलना चाहिए', bn: 'কারণ কারেন্ট রেজিস্ট্যান্সের ব্যস্তানুপাতে বিভক্ত হয়; কম রোধের R1 ব্রাঞ্চে বেশি কারেন্ট পাওয়ার সুবিধার্থে R2 লবে থাকে' } },
        { id: 'opt-c', text: { en: 'Because parallel resistors always add directly', hi: 'क्योंकि समानांतर प्रतिरोधक हमेशा सीधे जुड़ते हैं', bn: 'কারণ প্যারালাল রেজিস্টর সর্বদা সরাসরি যোগ হয়' } },
        { id: 'opt-d', text: { en: 'To cancel out source voltage units', hi: 'स्रोत वोल्टेज इकाइयों को रद्द करने के लिए', bn: 'সোর্স ভোল্টেজ একক বাতিল করার জন্য' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'Since I1 = V / R1 and V = I_total · [R1 R2 / (R1 + R2)], substituting V yields I1 = I_total · [R2 / (R1 + R2)].',
        hi: 'चूँकि I1 = V / R1 और V = I_total · [R1 R2 / (R1 + R2)], V को प्रतिस्थापित करने पर I1 = I_total · [R2 / (R1 + R2)] प्राप्त होता है।',
        bn: 'যেহেতু I1 = V / R1 এবং V = I_total · [R1 R2 / (R1 + R2)], মান বসিয়ে পাই I1 = I_total · [R2 / (R1 + R2)]।'
      }
    },
    {
      id: 'mcq-dn-3',
      question: {
        en: 'What happens to the output voltage of an unloaded voltage divider when a low-resistance load R_L is connected across its output terminals?',
        hi: 'जब एक अनलोडेड वोल्टेज डिवाइडर के आउटपुट टर्मिनलों पर कम-प्रतिरोध लोड R_L जोड़ा जाता है, तो इसके आउटपुट वोल्टेज का क्या होता है?',
        bn: 'একটি আনলোডেড ভোল্টেজ ডিভাইডারের আউটপুটে কম রেজিস্ট্যান্সের লোড R_L যুক্ত করলে আউটপুট ভোল্টেজের কী ঘটে?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Output voltage increases significantly', hi: 'आउटपुट वोल्टेज में काफी वृद्धि होती है', bn: 'আউটপুট ভোল্টেজ উল্লেখযোগ্যভাবে বৃদ্ধি পায়' } },
        { id: 'opt-b', text: { en: 'Output voltage remains exactly unchanged', hi: 'आउटपुट वोल्टेज बिल्कुल अपरिवर्तित रहता है', bn: 'আউটপুট ভোল্টেজ সম্পূর্ণ অপরিবর্তিত থাকে' } },
        { id: 'opt-c', text: { en: 'Output voltage drops due to loading effect', hi: 'लोडिंग प्रभाव के कारण आउटपुट वोल्टेज गिर जाता है', bn: 'লোডিং প্রভাবের কারণে আউটপুট ভোল্টেজ কমে যায়' } },
        { id: 'opt-d', text: { en: 'Output voltage reverses polarity', hi: 'आउटपुट वोल्टेज की ध्रुवता उलट जाती है', bn: 'আউটপুট ভোল্টেজের পোলারিটি উল্টে যায়' } }
      ],
      correctOptionId: 'opt-c',
      explanation: {
        en: 'Connecting R_L in parallel reduces effective bottom resistance, thereby reducing the output voltage drop (loading effect).',
        hi: 'समानांतर में R_L जोड़ने से नीचे का प्रभावी प्रतिरोध कम हो जाता है, जिससे आउटपुट वोल्टेज गिर जाता है।',
        bn: 'প্যারালালে R_L যুক্ত করলে কার্যকর সমতুল্য রেজিস্ট্যান্স কমে ভোল্টেজ পতন কমে যায় (লোডিং ইফেক্ট)।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-dn-1',
      question: {
        en: 'Write down the general conductance-form current divider formula for a 3-branch parallel network with conductances G1, G2, and G3.',
        hi: 'चालकता G1, G2, और G3 वाली 3-शाखा समानांतर नेटवर्क के लिए सामान्य चालकता-रूप धारा डिवाइडर सूत्र लिखें।',
        bn: 'G1, G2 এবং G3 পরিবাহিতাবিশিষ্ট ৩-ব্রাঞ্চ প্যারালাল নেটওয়ার্কের জন্য সাধারণ কন্ডাকট্যান্স-ফর্ম কারেন্ট ডিভাইডার সূত্রটি লিখুন।'
      },
      hint: {
        en: 'I_x = I_total · (G_x / G_total) where G_total = G1 + G2 + G3.',
        hi: 'I_x = I_total · (G_x / G_total)।',
        bn: 'I_x = I_total · (G_x / G_total)।'
      },
      answerKey: {
        en: 'General Conductance Form:\nI_1 = I_total · [ G1 / (G1 + G2 + G3) ]\nI_2 = I_total · [ G2 / (G1 + G2 + G3) ]\nI_3 = I_total · [ G3 / (G1 + G2 + G3) ]\nwhere G_k = 1 / R_k.',
        hi: 'I_1 = I_total · [ G1 / (G1 + G2 + G3) ]\nI_2 = I_total · [ G2 / (G1 + G2 + G3) ]\nI_3 = I_total · [ G3 / (G1 + G2 + G3) ]',
        bn: 'I_1 = I_total · [ G1 / (G1 + G2 + G3) ]\nI_2 = I_total · [ G2 / (G1 + G2 + G3) ]\nI_3 = I_total · [ G3 / (G1 + G2 + G3) ]'
      }
    },
    {
      id: 'pq-dn-2',
      question: {
        en: 'A 100 V DC source feeds two series resistors R1 = 30 Ω and R2 = 70 Ω. Calculate V1 and V2 using VDR.',
        hi: '100 V डीसी स्रोत दो श्रेणी प्रतिरोधकों R1 = 30 Ω और R2 = 70 Ω को आपूर्ति करता है। VDR का उपयोग करके V1 और V2 की गणना करें।',
        bn: '১০০ V ডিসি সোর্স দুটি সিরিজ রেজিস্টর R1 = ৩০ Ω এবং R2 = ৭০ Ω এ সংযুক্ত। VDR ব্যবহার করে V1 এবং V2 নির্ণয় করুন।'
      },
      hint: {
        en: 'R_total = 100 Ω. V1 = 100 · (30 / 100); V2 = 100 · (70 / 100).',
        hi: 'R_total = 100 Ω। V1 = 30 V, V2 = 70 V।',
        bn: 'R_total = ১০০ Ω। V1 = ৩০ V, V2 = ৭০ V।'
      },
      answerKey: {
        en: '1. R_total = 30 + 70 = 100 Ω\n2. V1 = 100 · (30 / 100) = 30.0 V\n3. V2 = 100 · (70 / 100) = 70.0 V',
        hi: '1. R_total = 100 Ω\n2. V1 = 30.0 V\n3. V2 = 70.0 V',
        bn: '১. R_total = ১০০ Ω\n২. V1 = ৩০.০ V\n৩. V2 = ৭০.০ V'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Potentiometer volume controls and adjustable sensor biasing',
      'Multimeter range extension using shunt and multiplier resistors',
      'Analog-to-Digital Converter (ADC) reference voltage scaling'
    ],
    hi: [
      'पोटेंशियोमीटर वॉल्यूम नियंत्रण और समायोज्य सेंसर बायसिंग',
      'शंट और गुणक प्रतिरोधकों का उपयोग करके मल्टीमीटर रेंज विस्तार',
      'एनालॉग-टू-डिजिटल कनवर्टर (ADC) संदर्भ वोल्टेज स्केलिंग'
    ],
    bn: [
      'পোটেনশিওমিটার ভলিউম কন্ট্রোল এবং সেন্সর বায়াসিং',
      'শান্ট ও মাল্টিপ্লায়ার ব্যবহার করে মাল্টিমিটার রেঞ্জ বাড়ানো',
      'এডিডি (ADC) রেফারেন্স ভোল্টেজ স্কেলিং'
    ]
  },
  importantPoints: {
    en: [
      'Voltage Division Rule applies strictly to series elements sharing identical current.',
      'Current Division Rule applies strictly to parallel elements sharing identical voltage.',
      'In 2-branch current division, the opposite branch resistance is in the numerator.'
    ],
    hi: [
      'वोल्टेज विभाजन नियम केवल समान धारा साझा करने वाले श्रेणी घटकों पर लागू होता है।',
      'धारा विभाजन नियम केवल समान वोल्टेज साझा करने वाले समानांतर घटकों पर लागू होता है।',
      '2-शाखा धारा विभाजन में, विपरीत शाखा का प्रतिरोध अंश में होता है।'
    ],
    bn: [
      'ভোল্টেজ ডিভাইডার রুল কেবল সমান কারেন্ট বিশিষ্ট সিরিজ উপাদানে প্রযোজ্য।',
      'কারেন্ট ডিভাইডার রুল কেবল সমান ভোল্টেজ বিশিষ্ট প্যারালাল উপাদানে প্রযোজ্য।',
      '২-ব্রাঞ্চ কারেন্ট ডিভিশনে লবে বিপরীত ব্রাঞ্চের রেজিস্ট্যান্স থাকে।'
    ]
  },
  commonMistakes: {
    en: [
      'Putting the same branch resistor in the numerator during 2-branch current division',
      'Applying Voltage Divider Rule to parallel resistors',
      'Ignoring the loading effect of connecting a low-impedance meter or load across a divider'
    ],
    hi: [
      '2-शाखा धारा विभाजन के दौरान अंश में वही शाखा प्रतिरोधक रखना',
      'समानांतर प्रतिरोधकों पर वोल्टेज डिवाइडर नियम लागू करना',
      'डिवाइडर पर कम प्रतिबाधा मीटर या लोड जोड़ने के लोडिंग प्रभाव को नजरअंदाज करना'
    ],
    bn: [
      '২-ব্রাঞ্চ কারেন্ট ডিভিশনে লবে বিপরীতটার বদলে নিজের রেজিস্টর বসিয়ে দেওয়া',
      'প্যারালাল রেজিস্টরে ভোল্টেজ ডিভাইডার রুল প্রয়োগ করা',
      'ভোল্টেজ ডিভাইডারে লোড বা মিটার যুক্ত করলে লোডিং প্রভাব উপেক্ষা করা'
    ]
  }
};

export const LESSON_STAR_DELTA: Lesson = {
  id: 'lsn-ch4-star-delta',
  topicId: 'ch4-star-delta',
  order: 9,
  title: {
    en: 'Star-Delta (Delta-Wye) Transformation Method',
    hi: 'स्टार-डेल्टा (स्टार-डेल्टा) रूपांतरण विधि',
    bn: 'স্টার-ডেল্টা (স্টার-ডেল্টা) রূপান্তর পদ্ধতি'
  },
  easyExplanation: {
    en: 'Star-Delta transformation converts a 3-terminal Delta (Δ) mesh connection into an equivalent 3-terminal Star (Y) node connection (or vice versa) to simplify complex bridge networks.',
    hi: 'स्टार-डेल्टा रूपांतरण जटिल ब्रिज नेटवर्कों को सरल बनाने के लिए 3-टर्मिनल डेल्टा (Δ) कनेक्शन को समतुल्य 3-टर्मिनल स्टार (Y) कनेक्शन में बदलता है।',
    bn: 'স্টার-ডেল্টা রূপান্তর হলো ৩-টার্মিনাল ডেল্টা (Δ) কানেকশনকে সমতুল্য ৩-টার্মিনাল স্টার (Y) কানেকশনে রূপান্তরের পদ্ধতি, যা জটিল ব্রিজ নেটওয়ার্ক সমাধান সহজ করে।'
  },
  detailedExplanation: {
    en: '1. Purpose of Star-Delta Transformation: Certain bridge or lattice networks contain resistor configurations that are neither purely in series nor purely in parallel. Star-Delta transformation converts these 3-terminal blocks to make the overall network reducible using standard series-parallel rules.\n\n2. Delta (Δ) Network Topology: Consists of 3 resistors RAB, RBC, and RCA connected in a closed mesh triangle across 3 external terminals A, B, and C.\n\n3. Star (Y or Wye) Network Topology: Consists of 3 resistors RA, RB, and RC connected from a common central node N to 3 external terminals A, B, and C.\n\n4. Delta to Star (Δ → Y) Transformation Equations:\nTo find Star arm RA connected to terminal A:\nR_A = (R_{AB} · R_{CA}) / (R_{AB} + R_{BC} + R_{CA})\n\nTo find Star arm RB connected to terminal B:\nR_B = (R_{AB} · R_{BC}) / (R_{AB} + R_{BC} + R_{CA})\n\nTo find Star arm RC connected to terminal C:\nR_C = (R_{BC} · R_{CA}) / (R_{AB} + R_{BC} + R_{CA})\n\nRule: Any Star arm resistance = (Product of two adjacent Delta side resistances) / (Sum of all three Delta side resistances).\n\n5. Star to Delta (Y → Δ) Transformation Equations:\nTo find Delta side RAB between terminals A and B:\nR_{AB} = (R_A · R_B + R_B · R_C + R_C · R_A) / R_C\n\nTo find Delta side RBC between terminals B and C:\nR_{BC} = (R_A · R_B + R_B · R_C + R_C · R_A) / R_A\n\nTo find Delta side RCA between terminals C and A:\nR_{CA} = (R_A · R_B + R_B · R_C + R_C · R_A) / R_B\n\nRule: Any Delta side resistance = (Sum of pairwise products of Star arm resistances) / (Opposite Star arm resistance).\n\n6. Balanced Network Special Case: If all Delta resistors are equal (R_Δ), the equivalent Star arm resistors are equal: R_Y = R_Δ / 3. Conversely, R_Δ = 3 · R_Y.',
    hi: '1. स्टार-डेल्टा रूपांतरण का उद्देश्य: कुछ ब्रिज नेटवर्कों में ऐसे प्रतिरोधक होते हैं जो न तो शुद्ध श्रेणी में होते हैं और न ही समानांतर में। यह रूपांतरण 3-टर्मिनल ब्लॉक को बदल देता है ताकि पूरा नेटवर्क सरल हो सके।\n\n2. डेल्टा (Δ) टोपोलॉजी: 3 बाह्य टर्मिनलों A, B, C के बीच बंद त्रिभुज में जुड़े 3 प्रतिरोधक RAB, RBC, RCA।\n\n3. स्टार (Y) टोपोलॉजी: एक उभयनिष्ठ केंद्र नोड N से 3 बाह्य टर्मिनलों A, B, C से जुड़े 3 प्रतिरोधक RA, RB, RC।\n\n4. डेल्टा से स्टार (Δ → Y) रूपांतरण सूत्र:\nR_A = (R_{AB} · R_{CA}) / (R_{AB} + R_{BC} + R_{CA})\nR_B = (R_{AB} · R_{BC}) / (R_{AB} + R_{BC} + R_{CA})\nR_C = (R_{BC} · R_{CA}) / (R_{AB} + R_{BC} + R_{CA})\nनियम: कोई भी स्टार आर्म = (दो आसन्न डेल्टा भुजाओं का गुणनफल) / (तीनों डेल्टा भुजाओं का योग)।\n\n5. स्टार से डेल्टा (Y → Δ) रूपांतरण सूत्र:\nR_{AB} = (R_A · R_B + R_B · R_C + R_C · R_A) / R_C\nR_{BC} = (R_A · R_B + R_B · R_C + R_C · R_A) / R_A\nR_{CA} = (R_A · R_B + R_B · R_C + R_C · R_A) / R_B\nनियम: कोई भी डेल्टा भुजा = (स्टार आर्म युग्म गुणनफलों का योग) / (विपरीत स्टार आर्म)।\n\n6. संतुलित स्थिति: यदि सभी डेल्टा प्रतिरोधक R_Δ हैं, तो R_Y = R_Δ / 3।',
    bn: '১. স্টার-ডেল্টা রূপান্তরের উদ্দেশ্য: কিছু বীজ সার্কিট রয়েছে যেখানে রেজিস্টরগুলো পুরোপুরি সিরিজে বা প্যারালালে থাকে না। এই রূপান্তর ৩-টার্মিনাল ব্লককে পরিবর্তন করে সাধারণ সিরিজ-প্যারালালে সহজীকরণযোগ্য করে।\n\n২. ডেল্টা (Δ) টপোলজি: ৩ টি বাহ্যিক টার্মিনাল A, B, C এর মাঝে ত্রিভুজাকারে যুক্ত ৩ টি রেজিস্টর RAB, RBC, RCA।\n\n৩. স্টার (Y) টপোলজি: সাধারণ কেন্দ্র নোড N হতে ৩ টি টার্মিনাল A, B, C তে যুক্ত ৩ টি আর্ম রেজিস্টর RA, RB, RC।\n\n৪. ডেল্টা হতে স্টার (Δ → Y) রূপান্তর সমীকরণ:\nR_A = (R_{AB} · R_{CA}) / (R_{AB} + R_{BC} + R_{CA})\nR_B = (R_{AB} · R_{BC}) / (R_{AB} + R_{BC} + R_{CA})\nR_C = (R_{BC} · R_{CA}) / (R_{AB} + R_{BC} + R_{CA})\nনিয়ম: স্টার আর্ম = (সংলগ্ন দুটি ডেল্টা বাহুর গুণফল) / (তিনটি ডেল্টা বাহুর যোগফল)।\n\n৫. স্টার হতে ডেল্টা (Y → Δ) রূপান্তর সমীকরণ:\nR_{AB} = (R_A · R_B + R_B · R_C + R_C · R_A) / R_C\nR_{BC} = (R_A · R_B + R_B · R_C + R_C · R_A) / R_A\nR_{CA} = (R_A · R_B + R_B · R_C + R_C · R_A) / R_B\nনিয়ম: ডেল্টা বাহু = (স্টার আর্মগুলোর জোড়া গুণফলের সমষ্টি) / (বিপরীত স্টার আর্ম)।\n\n৬. সুষম সার্কিটের বিশেষ ক্ষেত্র: সব ডেল্টা রেজিস্ট্যান্স R_Δ হলে, R_Y = R_Δ / ৩।'
  },
  formulas: [
    {
      symbol: 'R_A (\\Delta \\rightarrow Y)',
      expression: 'R_A = \\frac{R_{AB} \\cdot R_{CA}}{R_{AB} + R_{BC} + R_{CA}}',
      description: {
        en: 'Delta-to-Star Conversion Formula for Star Arm Ra Connected to Node A',
        hi: 'नोड A से जुड़े स्टार आर्म Ra के लिए डेल्टा-से-स्टार रूपांतरण सूत्र',
        bn: 'নোড A এর সাথে যুক্ত স্টার আর্ম Ra এর জন্য ডেল্টা-টু-স্টার রূপান্তর সূত্র'
      }
    },
    {
      symbol: 'R_{AB} (Y \\rightarrow \\Delta)',
      expression: 'R_{AB} = \\frac{R_A \\cdot R_B + R_B \\cdot R_C + R_C \\cdot R_A}{R_C}',
      description: {
        en: 'Star-to-Delta Conversion Formula for Delta Side Rab Between Nodes A & B',
        hi: 'नोड्स A और B के बीच डेल्टा भुजा Rab के लिए स्टार-से-डेल्टा रूपांतरण सूत्र',
        bn: 'নোড A ও B এর মধ্যবর্তী ডেল্টা বাহু Rab এর জন্য স্টার-টু-ডেল্টা রূপান্তর সূত্র'
      }
    },
    {
      symbol: 'R_Y (Balanced)',
      expression: 'R_Y = \\frac{R_\\Delta}{3}',
      description: {
        en: 'Balanced Network Equivalence Relationship',
        hi: 'संतुलित नेटवर्क समतुल्यता संबंध',
        bn: 'সুষম নেটওয়ার্ক সমতুল্যতা সম্পর্ক'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-star-delta',
      title: {
        en: 'Star (Y) and Delta (Δ) Equivalence Topologies Diagram',
        hi: 'स्टार (Y) और डेल्टा (Δ) समतुल्यता टोपोलॉजी आरेख',
        bn: 'স্টার (Y) এবং ডেল্টা (Δ) সমতুল্যতা টপোলজি চিত্র'
      },
      caption: {
        en: 'Comparison showing terminal node matching between Delta triangle mesh and Star wye node configuration.',
        hi: 'डेल्टा त्रिभुज मेष और स्टार नोड कॉन्फ़िगरेशन के बीच टर्मिनल नोड मिलान को दर्शाने वाली तुलना।',
        bn: 'ডেল্টা ত্রিভুজ মেশ এবং স্টার নোড বিন্যাসের মধ্যে টার্মিনাল মিল নির্দেশক চিত্র।'
      },
      svgType: 'circuit-star-delta'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-stardelta-1',
      problem: {
        en: 'A balanced Delta network consists of three equal resistors RAB = RBC = RCA = 30 Ω. Calculate the equivalent Star arm resistances RA, RB, and RC.',
        hi: 'एक संतुलित डेल्टा नेटवर्क में तीन समान प्रतिरोधक RAB = RBC = RCA = 30 Ω हैं। समतुल्य स्टार आर्म प्रतिरोधों RA, RB, और RC की गणना करें।',
        bn: 'একটি সুষম ডেল্টা নেটওয়ার্কে তিনটি সমমানের রেজিস্টর RAB = RBC = RCA = ৩০ Ω রয়েছে। সমতুল্য স্টার আর্ম রেজিস্ট্যান্স RA, RB, এবং RC নির্ণয় করুন।'
      },
      solution: {
        en: 'Given:\n- RAB = 30 Ω, RBC = 30 Ω, RCA = 30 Ω\n\nStep 1: Calculate Sum of Delta Resistors\nSum = RAB + RBC + RCA = 30 + 30 + 30 = 90 Ω\n\nStep 2: Calculate Star Arm RA\nRA = (RAB · RCA) / Sum = (30 · 30) / 90 = 900 / 90 = 10.0 Ω\n\nStep 3: Calculate Star Arm RB and RC\nRB = (30 · 30) / 90 = 10.0 Ω\nRC = (30 · 30) / 90 = 10.0 Ω\n\nShortcut Check: R_Y = R_Δ / 3 = 30 / 3 = 10.0 Ω (✓ Verification Passed)',
        hi: 'योग = 30 + 30 + 30 = 90 Ω\nRA = (30 × 30) / 90 = 10.0 Ω\nRB = 10.0 Ω, RC = 10.0 Ω\nशॉर्टकट: R_Y = 30 / 3 = 10.0 Ω',
        bn: 'যোগফল = ৩০ + ৩০ + ৩০ = ৯০ Ω\nRA = (৩০ × ৩০) / ৯০ = ১০.০ Ω\nRB = ১০.০ Ω, RC = ১০.০ Ω\nসংক্ষিপ্ত সূত্র: R_Y = ৩০ / ৩ = ১০.০ Ω'
      },
      givenValues: {
        'RAB, RBC, RCA': '30 Ω'
      },
      finalAnswer: {
        en: 'RA = RB = RC = 10.0 Ω',
        hi: 'RA = RB = RC = 10.0 Ω',
        bn: 'RA = RB = RC = ১০.০ Ω'
      }
    },
    {
      id: 'ex-stardelta-2',
      problem: {
        en: 'An unbalanced Star network has arm resistances RA = 10 Ω, RB = 20 Ω, and RC = 30 Ω. Calculate the equivalent Delta side resistance RAB.',
        hi: 'एक असंतुलित स्टार नेटवर्क में आर्म प्रतिरोध RA = 10 Ω, RB = 20 Ω, और RC = 30 Ω हैं। समतुल्य डेल्टा भुजा प्रतिरोध RAB की गणना करें।',
        bn: 'একটি বিষম স্টার নেটওয়ার্কের আর্ম রেজিস্ট্যান্স RA = ১০ Ω, RB = ২০ Ω, এবং RC = ৩০ Ω। সমতুল্য ডেল্টা বাহু রেজিস্ট্যান্স RAB নির্ণয় করুন।'
      },
      solution: {
        en: 'Given:\n- RA = 10 Ω, RB = 20 Ω, RC = 30 Ω\n\nStep 1: Calculate Pairwise Product Sum\nNumerator = (RA · RB) + (RB · RC) + (RC · RA)\nNumerator = (10 · 20) + (20 · 30) + (30 · 10) = 200 + 600 + 300 = 1100 Ω²\n\nStep 2: Calculate Delta Resistance RAB (Opposite Arm is RC)\nRAB = Numerator / RC = 1100 / 30 = 36.67 Ω\n\nAnswer: RAB = 36.67 Ω',
        hi: 'अंश = (10 × 20) + (20 × 30) + (30 × 10) = 200 + 600 + 300 = 1100 Ω²\nRAB = 1100 / 30 = 36.67 Ω',
        bn: 'লব = (১০ × ২০) + (২০ × ৩০) + (৩০ × ১০) = ২০০ + ৩০০ + ৬০০ = ১১০০ Ω²\nRAB = ১১০০ / ৩০ = ৩৬.৬৭ Ω'
      },
      givenValues: {
        'RA, RB, RC': '10 Ω, 20 Ω, 30 Ω'
      },
      finalAnswer: {
        en: 'RAB = 36.67 Ω',
        hi: 'RAB = 36.67 Ω',
        bn: 'RAB = ৩৬.৬৭ Ω'
      }
    }
  ],
  mcqs: [
    {
      id: 'mcq-sd-1',
      question: {
        en: 'For a balanced Delta network where each side has resistance R_Δ, what is the equivalent resistance of each Star arm R_Y?',
        hi: 'एक संतुलित डेल्टा नेटवर्क के लिए जहाँ प्रत्येक भुजा में प्रतिरोध R_Δ है, प्रत्येक स्टार आर्म R_Y का समतुल्य प्रतिरोध क्या है?',
        bn: 'একটি সুষম ডেল্টা নেটওয়ার্কে প্রতিটি বাহুর রোধ R_Δ হলে, এর সমতুল্য প্রতিটি স্টার আর্মের রোধ R_Y কত হবে?'
      },
      options: [
        { id: 'opt-a', text: { en: '3 · R_Δ', hi: '3 · R_Δ', bn: '৩ · R_Δ' } },
        { id: 'opt-b', text: { en: 'R_Δ / 3', hi: 'R_Δ / 3', bn: 'R_Δ / ৩' } },
        { id: 'opt-c', text: { en: 'R_Δ / 2', hi: 'R_Δ / 2', bn: 'R_Δ / ২' } },
        { id: 'opt-d', text: { en: 'R_Δ / 9', hi: 'R_Δ / 9', bn: 'R_Δ / ৯' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'For balanced networks, Star arm resistance is one-third of Delta side resistance: R_Y = R_Δ / 3.',
        hi: 'संतुलित नेटवर्कों के लिए, स्टार आर्म प्रतिरोध डेल्टा भुजा प्रतिरोध का एक तिहाई होता है: R_Y = R_Δ / 3।',
        bn: 'সুষম নেটওয়ার্কে স্টার আর্মের রোধ ডেল্টা বাহুর রোধের এক-তৃতীয়াংশ হয়: R_Y = R_Δ / ৩।'
      }
    },
    {
      id: 'mcq-sd-2',
      question: {
        en: 'Which denominator is used when converting Star arms (RA, RB, RC) into Delta side RAB?',
        hi: 'स्टार आर्म्स (RA, RB, RC) को डेल्टा भुजा RAB में बदलते समय किस हर (Denominator) का उपयोग किया जाता है?',
        bn: 'স্টার আর্ম (RA, RB, RC) কে ডেল্টা বাহু RAB তে রূপান্তরের সময় হরে (Denominator) কোনটি থাকে?'
      },
      options: [
        { id: 'opt-a', text: { en: 'The adjacent arm RA', hi: 'आसन्न आर्म RA', bn: 'সংলগ্ন আর্ম RA' } },
        { id: 'opt-b', text: { en: 'The adjacent arm RB', hi: 'आसन्न आर्म RB', bn: 'সংলগ্ন আর্ম RB' } },
        { id: 'opt-c', text: { en: 'The opposite arm RC', hi: 'विपरीत आर्म RC', bn: 'বিপরীত আর্ম RC' } },
        { id: 'opt-d', text: { en: 'The sum RA + RB + RC', hi: 'योग RA + RB + RC', bn: 'যোগফল RA + RB + RC' } }
      ],
      correctOptionId: 'opt-c',
      explanation: {
        en: 'When finding Delta side RAB between terminals A and B, the opposite unconnected Star arm RC forms the denominator.',
        hi: 'टर्मिनलों A और B के बीच डेल्टा भुजा RAB पाते समय, विपरीत असंबद्ध स्टार आर्म RC हर बनता है।',
        bn: 'টার্মিনাল A ও B এর মধ্যকার ডেল্টা বাহু RAB বের করার সময় বিপরীত অপর যুক্ত আর্ম RC হরে থাকে।'
      }
    },
    {
      id: 'mcq-sd-3',
      question: {
        en: 'When is Star-Delta transformation essential in DC network analysis?',
        hi: 'डीसी नेटवर्क विश्लेषण में स्टार-डेल्टा रूपांतरण कब आवश्यक होता है?',
        bn: 'ডিসি নেটওয়ার্ক বিশ্লেষণে স্টার-ডেল্টা রূপান্তর কখন অত্যাবশ্যক হয়ে পড়ে?'
      },
      options: [
        { id: 'opt-a', text: { en: 'When resistors are in a simple single series loop', hi: 'जब प्रतिरोधक एक साधारण एकल श्रेणी लूप में हों', bn: 'যখন রেজিস্টরগুলো একক সিরিজ লুপে থাকে' } },
        { id: 'opt-b', text: { en: 'When resistors form a bridge mesh that is neither in pure series nor pure parallel', hi: 'जब प्रतिरोधक एक ऐसा ब्रिज मेष बनाते हैं जो न तो शुद्ध श्रेणी में है और न ही शुद्ध समानांतर में', bn: 'যখন রেজিস্টরগুলো এমন একটি ব্রিজ গঠন করে যা সরাসরি সিরিজেও নেই, প্যারালালেও নেই' } },
        { id: 'opt-c', text: { en: 'When replacing ideal batteries with ideal current sources', hi: 'आदर्श बैटरियों को आदर्श धारा स्रोतों से बदलते समय', bn: 'ব্যাটারিকে কারেন্ট সোর্সে রূপান্তরের সময়' } },
        { id: 'opt-d', text: { en: 'Only when alternating current (AC) frequency is high', hi: 'केवल जब प्रत्यावर्ती धारा (AC) आवृत्ति उच्च हो', bn: 'কেবল উচ্চ এসি ফ্রিকোয়েন্সিতে' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'Star-Delta transformation simplifies complex bridge configurations where resistors cannot be combined using simple series/parallel formulas.',
        hi: 'स्टार-डेल्टा रूपांतरण जटिल ब्रिज कॉन्फ़िगरेशन को सरल बनाता है जिन्हें साधारण श्रेणी/समानांतर सूत्रों द्वारा हल नहीं किया जा सकता है।',
        bn: 'স্টার-ডেল্টা রূপান্তর জটিল ব্রিজ সার্কিটকে সাধারণ সিরিজ-প্যারালাল নিয়মে সমাধানযোগ্য করে তোলে।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-sd-1',
      question: {
        en: 'Write down the 3 Delta-to-Star transformation equations for finding RA, RB, and RC from RAB, RBC, and RCA.',
        hi: 'RAB, RBC, और RCA से RA, RB, और RC खोजने के लिए 3 डेल्टा-से-स्टार रूपांतरण समीकरण लिखें।',
        bn: 'RAB, RBC এবং RCA হতে RA, RB এবং RC নির্ণয়ের ৩ টি ডেল্টা-টু-স্টার রূপান্তর সমীকরণ লিখুন।'
      },
      hint: {
        en: 'Star arm = (Product of adjacent sides) / Sum of all 3 sides.',
        hi: 'स्टार आर्म = (आसन्न भुजाओं का गुणनफल) / 3 भुजाओं का योग।',
        bn: 'স্টার আর্ম = (সংলগ্ন দুটির গুণফল) / ৩ টির যোগফল।'
      },
      answerKey: {
        en: '1. RA = (RAB · RCA) / (RAB + RBC + RCA)\n2. RB = (RAB · RBC) / (RAB + RBC + RCA)\n3. RC = (RBC · RCA) / (RAB + RBC + RCA)',
        hi: '1. RA = (RAB · RCA) / (RAB + RBC + RCA)\n2. RB = (RAB · RBC) / (RAB + RBC + RCA)\n3. RC = (RBC · RCA) / (RAB + RBC + RCA)',
        bn: '১. RA = (RAB · RCA) / (RAB + RBC + RCA)\n২. RB = (RAB · RBC) / (RAB + RBC + RCA)\n৩. RC = (RBC · RCA) / (RAB + RBC + RCA)'
      }
    },
    {
      id: 'pq-sd-2',
      question: {
        en: 'A Star network has three equal arms RA = RB = RC = 12 Ω. Calculate the equivalent Delta side resistances RAB, RBC, and RCA.',
        hi: 'एक स्टार नेटवर्क में तीन समान आर्म्स RA = RB = RC = 12 Ω हैं। समतुल्य डेल्टा भुजा प्रतिरोधों RAB, RBC, और RCA की गणना करें।',
        bn: 'একটি স্টার নেটওয়ার্কের তিনটি সমমানের আর্ম রয়েছে RA = RB = RC = ১২ Ω। সমতুল্য ডেল্টা বাহু রেজিস্ট্যান্স RAB, RBC এবং RCA নির্ণয় করুন।'
      },
      hint: {
        en: 'Balanced relation: R_Δ = 3 · R_Y.',
        hi: 'संतुलित संबंध: R_Δ = 3 · R_Y।',
        bn: 'সুষম সম্পর্ক: R_Δ = ৩ · R_Y।'
      },
      answerKey: {
        en: '1. Using balanced formula: R_Δ = 3 · R_Y = 3 · 12 = 36.0 Ω\n2. RAB = RBC = RCA = 36.0 Ω',
        hi: '1. R_Δ = 3 × 12 = 36.0 Ω\n2. RAB = RBC = RCA = 36.0 Ω',
        bn: '১. R_Δ = ৩ × ১২ = ৩৬.০ Ω\n২. RAB = RBC = RCA = ৩৬.০ Ω'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Wheatstone bridge network simplification for precision measurement',
      'Three-phase electrical power distribution motor starting (Star-Delta starters)',
      'Heavy industrial grid load flow and short-circuit fault calculations'
    ],
    hi: [
      'सटीक माप के लिए व्हीटस्टोन ब्रिज नेटवर्क सरलीकरण',
      'थ्री-फेज विद्युत शक्ति वितरण मोटर स्टार्टिंग (स्टार-डेल्टा स्टार्टर्स)',
      'भारी औद्योगिक ग्रिड लोड प्रवाह और शॉर्ट-सर्किट फॉल्ट गणना'
    ],
    bn: [
      'সূক্ষ্ম পরিমাপের জন্য হুইটস্টোন ব্রিজ নেটওয়ার্ক সহজীকরণ',
      'থ্রি-ফেজ মোটরের জন্য স্টার-ডেল্টা স্টার্টার প্রয়োগ',
      'শিল্প বিদ্যুৎ গ্রিড লোড ফ্লো ও শর্ট-সার্কিট ফল্ট বিশ্লেষণ'
    ]
  },
  importantPoints: {
    en: [
      'Star-Delta transformation preserves electrical equivalence at external terminals A, B, and C.',
      'Delta to Star reduces node count and simplifies bridge loops.',
      'For balanced networks: R_Star = R_Delta / 3 and R_Delta = 3 · R_Star.'
    ],
    hi: [
      'स्टार-डेल्टा रूपांतरण बाह्य टर्मिनलों A, B, C पर विद्युत समतुल्यता बनाए रखता है।',
      'डेल्टा से स्टार नोड संख्या को कम करता है और ब्रिज लूप्स को सरल बनाता है।',
      'संतुलित नेटवर्कों के लिए: R_Star = R_Delta / 3 और R_Delta = 3 · R_Star।'
    ],
    bn: [
      'স্টার-ডেল্টা রূপান্তর বাহ্যিক টার্মিনাল A, B, C এর ইম্পিড্যান্স সামঞ্জস্য বজায় রাখে।',
      'ডেল্টা থেকে স্টার সংযোগ রূপান্তর লুপ গঠন সহজ করে।',
      'সুষম নেটওয়ার্কে: R_Star = R_Delta / ৩ এবং R_Delta = ৩ · R_Star।'
    ]
  },
  commonMistakes: {
    en: [
      'Confusing the numerator and denominator rules between Delta-to-Star and Star-to-Delta formulas',
      'Using adjacent arms instead of the opposite arm in the denominator of Star-to-Delta conversion',
      'Multiplying by 3 instead of dividing by 3 when converting a balanced Delta to Star'
    ],
    hi: [
      'डेल्टा-से-स्टार और स्टार-से-डेल्टा सूत्रों के बीच अंश और हर के नियमों को भ्रमित करना',
      'स्टार-से-डेल्टा रूपांतरण के हर में विपरीत आर्म के बजाय आसन्न आर्म्स का उपयोग करना',
      'संतुलित डेल्टा को स्टार में बदलते समय 3 से भाग देने के बजाय 3 से गुणा करना'
    ],
    bn: [
      'ডেল্টা-টু-স্টার এবং স্টার-টু-ডেল্টা সূত্রের লব ও হরের নিয়ম গুলিয়ে ফেলা',
      'স্টার-টু-ডেল্টা রূপান্তরের হরে বিপরীত আর্মের পরিবর্তে সংলগ্ন আর্ম বসিয়ে ফেলা',
      'সুষম ডেল্টা থেকে স্টারে রূপান্তরের সময় ৩ দিয়ে ভাগের বদলে গুণ করা'
    ]
  }
};

export const LESSON_NETWORK_THEOREMS_INTRO: Lesson = {
  id: 'lsn-ch4-network-theorems-intro',
  topicId: 'ch4-network-theorems-intro',
  order: 10,
  title: {
    en: 'Introduction to Network Theorems',
    hi: 'नेटवर्क प्रमेयों का परिचय',
    bn: 'নেটওয়ার্ক থিওরেম পরিচিতি'
  },
  easyExplanation: {
    en: 'Network theorems are advanced mathematical principles that simplify complex linear electrical circuits into simple equivalent models for rapid analysis.',
    hi: 'नेटवर्क प्रमेय उन्नत गणितीय सिद्धांत हैं जो जटिल रेखीय विद्युत परिपथों को त्वरित विश्लेषण के लिए सरल समतुल्य मॉडलों में सरल बनाते हैं।',
    bn: 'নেটওয়ার্ক থিওরেমসমূহ হলো এমন গাণিতিক নীতি যা জটিল লিনিয়ার সার্কিটকে সহজ সমতুল্য মডেলে রূপান্তর করে দ্রুত সমাধান নিশ্চিত করে।'
  },
  detailedExplanation: {
    en: '1. What is a Network Theorem? A network theorem is a fundamental mathematical law or simplification rule derived from Kirchhoff Circuit Laws (KCL & KVL) that allows engineers to determine voltages, currents, or power in complex linear electrical networks without solving large systems of simultaneous equations.\n\n2. Why Network Theorems Are Useful: Direct application of KCL/KVL or Mesh/Nodal analysis to large networks produces large systems of linear equations (e.g., 5 to 10 simultaneous equations). Theorems reduce these complex networks to equivalent 1-loop or 2-node models, saving massive computational effort.\n\n3. Equivalent Circuit Concept: Two electrical networks are said to be electrically equivalent if they exhibit identical voltage-current (V-I) relationships at a specified pair of output terminals A-B, regardless of internal circuit topology differences.\n\n4. Linear Network Concept: A linear network consists exclusively of linear circuit elements where response (current/voltage) is directly proportional to excitation (applied voltage/current). Superposition and source transformation principles apply strictly to linear networks.\n\n5. Active vs Passive Networks: Active networks contain independent or dependent power sources (generators, batteries, amplifiers). Passive networks contain only energy dissipation or storage elements (resistors, inductors, capacitors) with no internal power generation.\n\n6. Independent vs Dependent Sources: Independent sources maintain constant terminal voltage or current regardless of circuit conditions. Dependent (controlled) sources produce outputs controlled by a voltage or current elsewhere in the network.\n\n7. Source Deactivation Rules (Crucial for Theorem Calculations):\n   - Ideal Voltage Sources: Replaced by a SHORT CIRCUIT (zero impedance, V = 0).\n   - Ideal Current Sources: Replaced by an OPEN CIRCUIT (infinite impedance, I = 0).\n   - Internal Resistance: Practical sources retain their internal series or parallel resistances.\n\n8. Overview of Major DC Network Theorems:\n   - Thevenin Theorem: Replaces any linear network connected to a load with an open-circuit voltage source (Vth) in series with equivalent resistance (Rth).\n   - Norton Theorem: Replaces the network with a short-circuit current source (IN) in parallel with equivalent resistance (RN).\n   - Superposition Theorem: Analyzes multi-source circuits by calculating individual responses per source and summing them algebraically.\n   - Maximum Power Transfer Theorem: Determines the load resistance (RL = Rth) required to receive maximum power from a supply system.\n   - Reciprocity Theorem: States that in a single-source linear bilateral network, the ratio of excitation to response remains identical when source and response positions are interchanged.',
    hi: '1. नेटवर्क प्रमेय क्या है? नेटवर्क प्रमेय KCL और KVL से प्राप्त गणितीय नियम हैं जो जटिल परिपथों को सरल बनाते हैं।\n\n2. उपयोगिता: KCL/KVL से प्राप्त बड़े समीकरणों को हल करने के बजाय, प्रमेय परिपथ को 1-लूप मॉडल में बदलकर गणना आसान बनाते हैं।\n\n3. समतुल्य परिपथ अवधारणा: दो परिपथ आउटपुट टर्मिनलों A-B पर समान V-I व्यवहार प्रदर्शित करते हैं।\n\n4. रेखीय नेटवर्क: वे नेटवर्क जो ओम के नियम और सुपरपोजिशन का पालन करते हैं।\n\n5. स्रोत बंद करने के नियम:\n   - आदर्श वोल्टेज स्रोत -> शॉर्ट सर्किट (0 Ω)\n   - आदर्श धारा स्रोत -> ओपन सर्किट (∞ Ω)',
    bn: '১. নেটওয়ার্ক থিওরেম কী? এগুলো হলো গাণিতিক নীতি যা জটিল লিনিয়ার সার্কিট সহজ করতে ব্যবহৃত হয়।\n\n২. কেন প্রয়োজন: সরাসরি KCL/KVL ব্যবহারে জটিল সমীকরণ তৈরি হয়। থিওরেম সার্কিটকে ১-লুপ মডেলে রূপান্তর করে।\n\n৩. সমতুল্য সার্কিট ধারণা: দুটি ভিন্ন সার্কিট নির্দিষ্ট A-B টার্মিনালে একই V-I বৈশিষ্ট্য দেখায়।\n\n৪. সোর্স বন্ধ করার নিয়ম:\n   - আদর্শ ভোল্টেজ সোর্স -> শর্ট সার্কিট (0 Ω)\n   - আদর্শ কারেন্ট সোর্স -> ওপেন সার্কিট (অসীম Ω)'
  },
  formulas: [
    {
      symbol: 'V_{source} \\rightarrow 0',
      expression: '\\text{Voltage Source } \\rightarrow \\text{Short Circuit (0 } \\Omega), \\quad \\text{Current Source } \\rightarrow \\text{Open Circuit (}\\infty \\Omega)',
      description: {
        en: 'Independent Source Deactivation Rules for Equivalent Resistance Evaluation',
        hi: 'तुल्य प्रतिरोध मूल्यांकन के लिए स्वतंत्र स्रोत बंद करने के नियम',
        bn: 'তুল্য রেজিস্ট্যান্স নির্ণয়ে স্বাধীন সোর্স বন্ধ করার নিয়মাবলী'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-network-theorems-intro',
      title: {
        en: 'Concept of Circuit Equivalence and Black-Box Network',
        hi: 'परिपथ समतुल्यता और ब्लैक-बॉक्स नेटवर्क की अवधारणा',
        bn: 'সার্কিট সমতুল্যতা ও ব্ল্যাক-বক্স নেটওয়ার্কের ধারণা'
      },
      caption: {
        en: 'Showing a complex active network replaced by its simplified two-terminal equivalent circuit.',
        hi: 'एक जटिल सक्रिय नेटवर्क को उसके सरलीकृत दो-टर्मिनल समतुल्य परिपथ में बदलते हुए।',
        bn: 'জটিল অ্যাক্টিভ সার্কিটকে সরল টু-টার্মিনাল সমতুল্য সার্কিটে রূপান্তরের চিত্র।'
      },
      svgType: 'circuit-thevenin-concept'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-nti-1',
      problem: {
        en: 'A complex linear active network connected to load RL is reduced to a simple equivalent circuit. State the source deactivation conditions required to find internal looking-back resistance R_in.',
        hi: 'लोड RL से जुड़ा एक रेखीय नेटवर्क एक सरल समतुल्य परिपथ में बदला जाता है। आंतरिक प्रतिरोध R_in ज्ञात करने के लिए स्रोत बंद करने की शर्तें बताएं।',
        bn: 'লোড RL এর সাথে যুক্ত একটি লিনিয়ার সার্কিটকে সরল সমতুল্য সার্কিটে রূপান্তর করা হলো। অভ্যন্তরীণ রেজিস্ট্যান্স R_in বের করার সোর্স ডিঅ্যাক্টিভেশন শর্ত লিখুন।'
      },
      solution: {
        en: 'Step 1: Remove load resistor RL across terminals A-B.\nStep 2: Deactivate all independent voltage sources by replacing them with SHORT CIRCUITS (0 Ω).\nStep 3: Deactivate all independent current sources by replacing them with OPEN CIRCUITS (infinite Ω).\nStep 4: Keep all dependent sources active in place.\nStep 5: Calculate equivalent resistance across terminals A-B.',
        hi: '1. लोड RL हटाएँ।\n2. वोल्टेज स्रोतों को शॉर्ट सर्किट करें।\n3. धारा स्रोतों को ओपन सर्किट करें।\n4. A-B के बीच तुल्य प्रतिरोध R_in ज्ञात करें।',
        bn: '১. লোড RL সরিয়ে ফেলুন।\n২. ভোল্টেজ সোর্স শর্ট সার্কিট করুন।\n৩. কারেন্ট সোর্স ওপেন সার্কিট করুন।\n৪. A-B টার্মিনালে তুল্য রেজিস্ট্যান্স R_in হিসাব করুন।'
      },
      givenValues: {
        'Condition': 'Deactivate Independent Sources'
      },
      finalAnswer: {
        en: 'Voltage sources -> Short, Current sources -> Open',
        hi: 'वोल्टेज स्रोत -> शॉर्ट, धारा स्रोत -> ओपन',
        bn: 'ভোল্টেজ সোর্স -> শর্ট, কারেন্ট সোর্স -> ওপেন'
      }
    }
  ],
  mcqs: [
    {
      id: 'mcq-nti-1',
      question: {
        en: 'When deactivating an ideal independent voltage source to determine network equivalent resistance, how must it be replaced?',
        hi: 'नेटवर्क का तुल्य प्रतिरोध ज्ञात करने के लिए आदर्श स्वतंत्र वोल्टेज स्रोत को कैसे प्रतिस्थापित किया जाता है?',
        bn: 'তুল্য রেজিস্ট্যান্স নির্ণয়ে আদর্শ স্বাধীন ভোল্টেজ সোর্স কীভাবে বন্ধ করা হয়?'
      },
      options: [
        { id: 'opt-a', text: { en: 'By a Short Circuit (zero resistance wire)', hi: 'शॉर्ट सर्किट द्वारा (शून्य प्रतिरोध तार)', bn: 'শর্ট সার্কিট দ্বারা (জিরো রেজিস্ট্যান্স তার)' } },
        { id: 'opt-b', text: { en: 'By an Open Circuit (infinite resistance break)', hi: 'ओपन सर्किट द्वारा (अनंत प्रतिरोध)', bn: 'ওপেন সার্কিট দ্বারা (অসীম রেজিস্ট্যান্স)' } },
        { id: 'opt-c', text: { en: 'By a 1 kΩ standard resistor', hi: '1 kΩ मानक प्रतिरोधक द्वारा', bn: '১ kΩ স্ট্যান্ডার্ড রেজিস্টর দ্বারা' } },
        { id: 'opt-d', text: { en: 'By an ideal current source', hi: 'आदर्श धारा स्रोत द्वारा', bn: 'আদর্শ কারেন্ট সোর্স দ্বারা' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'Ideal voltage sources have zero internal impedance and are deactivated by short-circuiting.',
        hi: 'आदर्श वोल्टेज स्रोत का आंतरिक प्रतिरोध शून्य होता है, इसलिए इसे शॉर्ट किया जाता है।',
        bn: 'আদর্শ ভোল্টেজ সোর্সের অভ্যন্তরীণ বাঁধা শূন্য বলে এটিকে শর্ট সার্কিট করা হয়।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-nti-1',
      question: {
        en: 'Summarize the primary difference between Thevenin Theorem and Norton Theorem in terms of source model and load connection.',
        hi: 'स्रोत मॉडल और लोड कनेक्शन के संदर्भ में थेवेनिन प्रमेय और नॉर्टन प्रमेय के बीच प्राथमिक अंतर संक्षेप में बताएं।',
        bn: 'সোর্স মডেল ও লোড সংযোগের ভিত্তিতে থেভেনিন ও নর্টন থিওরেমের প্রধান পার্থক্য সংক্ষেপে লিখুন।'
      },
      hint: {
        en: 'Thevenin provides a voltage source Vth in SERIES with Rth; Norton provides a current source IN in PARALLEL with RN.',
        hi: 'थेवेनिन श्रेणी में Vth और Rth देता है; नॉर्टन समानांतर में IN और RN देता है।',
        bn: 'থেভেনিন সিরিজে Vth ও Rth দেয়; নর্টন প্যারালালে IN ও RN দেয়।'
      },
      answerKey: {
        en: '1. Thevenin Theorem reduces the network to a Voltage Source Vth connected in SERIES with resistance Rth.\n2. Norton Theorem reduces the network to a Current Source IN connected in PARALLEL with resistance RN.\n3. Both resistance values are identical: RN = Rth.',
        hi: '1. थेवेनिन: श्रेणी में Vth और Rth।\n2. नॉर्टन: समानांतर में IN और RN।\n3. दोनों प्रतिरोध समान होते हैं: RN = Rth।',
        bn: '১. থেভেনিন: সিরিজে Vth এবং Rth।\n২. নর্টন: প্যারালালে IN এবং RN।\n৩. উভয় রেজিস্ট্যান্স অভিন্ন: RN = Rth।'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Circuit modularization in integrated circuit (IC) block design',
      'Power grid line equivalence modeling for load flow studies',
      'Audio equipment impedance matching and signal transfer analysis'
    ],
    hi: [
      'इंटीग्रेटेड सर्किट (IC) ब्लॉक डिजाइन में सर्किट मॉडुलराइजेशन',
      'लोड फ्लो अध्ययन के लिए पावर ग्रिड लाइन समतुल्यता मॉडलिंग',
      'ऑडियो उपकरण प्रतिबाधा मिलान और सिग्नल ट्रांसफर विश्लेषण'
    ],
    bn: [
      'ইন্টিগ্রেটেড সার্কিট (IC) ব্লক ডিজাইনে সার্কিট মডেলিং',
      'পাওয়ার গ্রিডে লোড ফ্লো স্টাডির জন্য লাইন সমতুল্যতা মডেলিং',
      'অডিও ডিভাইসে ইম্পিড্যান্স ম্যাচিং ও সিগন্যাল ট্রান্সফার বিশ্লেষণ'
    ]
  },
  importantPoints: {
    en: [
      'Network theorems simplify complex linear circuits into 1-loop or 2-node equivalents.',
      'Independent voltage sources are short-circuited; current sources are open-circuited.',
      'Theorems apply strictly to linear, bilateral electrical networks.'
    ],
    hi: [
      'नेटवर्क प्रमेय जटिल रेखीय परिपथों को 1-लूप या 2-नोड समतुल्य में सरल बनाते हैं।',
      'स्वतंत्र वोल्टेज स्रोतों को शॉर्ट और धारा स्रोतों को ओपन किया जाता है।',
      'प्रमेय केवल रेखीय, बायलेटरल परिपथों पर लागू होते हैं।'
    ],
    bn: [
      'নেটওয়ার্ক থিওরেম জটিল লিনিয়ার সার্কিটকে ১-লুপ বা ২-নোড মডেলে রূপান্তর করে।',
      'স্বাধীন ভোল্টেজ সোর্স শর্ট এবং কারেন্ট সোর্স ওপেন করা হয়।',
      'উপপাদ্যগুলো কেবল লিনিয়ার ও বাইল্যাটারাল সার্কিটে কার্যকর।'
    ]
  },
  commonMistakes: {
    en: [
      'Short-circuiting current sources or open-circuiting voltage sources during deactivation',
      'Deactivating dependent sources (dependent sources must remain active during analysis)',
      'Attempting to apply linear network theorems directly to non-linear diodes or transistors'
    ],
    hi: [
      'धारा स्रोतों को शॉर्ट या वोल्टेज स्रोतों को ओपन कर देना',
      'निर्भर स्रोतों को बंद कर देना (निर्भर स्रोत हमेशा सक्रिय रहते हैं)',
      'गैर-रेखीय घटकों पर रेखीय प्रमेयों को सीधे लागू करने का प्रयास करना'
    ],
    bn: [
      'কারেন্ট সোর্স শর্ট বা ভোল্টেজ সোর্স ওপেন করে ফেলা',
      'ডিপেন্ডেন্ট সোর্স বন্ধ করে ফেলা (ডিপেন্ডেন্ট সোর্স সর্বদা সচল রাখতে হয়)',
      'নন-লিনিয়ার ডায়োড বা ট্রানজিস্টরে সরাসরি লিনিয়ার থিওরেম প্রয়োগের চেষ্টা করা'
    ]
  }
};
export const LESSON_THEVENIN: Lesson = {
  id: 'lsn-ch4-thevenin',
  topicId: 'ch4-thevenins-theorem',
  order: 11,
  title: {
    en: "Thevenin's Theorem",
    hi: "थेवेनिन का प्रमेय",
    bn: "থেভেনিনের উপপাদ্য"
  },
  easyExplanation: {
    en: "Thevenin's Theorem states that any complex linear DC network can be replaced across two load terminals by a single voltage source Vth in series with an equivalent resistance Rth.",
    hi: "थेवेनिन का प्रमेय कहता है कि किसी भी जटिल रेखीय डीसी नेटवर्क को दो लोड टर्मिनलों पर श्रेणी में जुड़े एक वोल्टेज स्रोत Vth और प्रतिरोधक Rth द्वारा बदला जा सकता है।",
    bn: "থেভেনিনের উপপাদ্য অনুসারে, যেকোনো জটিল লিনিয়ার ডিসি সার্কিটকে দুটি লোড টার্মিনালের সাপেক্ষে একটি ভোল্টেজ সোর্স Vth এবং তার সাথে সিরিজে যুক্ত রেজিস্টর Rth দ্বারা প্রতিস্থাপন করা যায়।"
  },
  detailedExplanation: {
    en: "1. Statement of Thevenin's Theorem: Any linear, two-terminal bilateral DC network containing independent or dependent voltage/current sources and passive resistors can be replaced by an equivalent simple series circuit consisting of a single voltage source Vth and an equivalent resistance Rth connected in series with the load resistor RL across terminals A-B.\n\n2. Thevenin Voltage (Vth): Defined as the open-circuit voltage across the specified output load terminals A and B when the load resistance RL is removed (Voc = Vth).\n\n3. Thevenin Resistance (Rth): Defined as the total equivalent resistance looking back into the open load terminals A and B with all independent sources deactivated.\n\n4. Procedure to Find Vth:\n   a. Disconnect load resistor RL from terminals A and B.\n   b. Calculate open-circuit voltage Voc across A-B using Nodal Analysis, Mesh Analysis, or KVL/KCL. This voltage is Vth = Voc.\n\n5. Procedure to Find Rth:\n   a. Disconnect load resistor RL from terminals A and B.\n   b. Deactivate independent sources (Short voltage sources, Open current sources).\n   c. Calculate total equivalent resistance across terminals A and B. This is Rth.\n\n6. Reconnecting Load and Load Current Formula: IL = Vth / (Rth + RL)\n7. Load Voltage & Power: VL = IL · RL, PL = IL² · RL\n8. Advantage: Solves complex network ONCE for Vth and Rth, allowing instant evaluation for changing RL values.",
    hi: "1. थेवेनिन प्रमेय का कथन: किसी भी दो-टर्मिनल रेखीय परिपथ को A-B टर्मिनलों पर एक एकल वोल्टेज स्रोत Vth और श्रेणी में जुड़े प्रतिरोध Rth में बदला जा सकता है।\n\n2. थेवेनिन वोल्टेज (Vth): RL हटाने पर टर्मिनलों A और B के बीच खुला-परिपथ वोल्टेज Voc = Vth।\n\n3. थेवेनिन प्रतिरोध (Rth): स्वतंत्र स्रोतों को बंद करने के बाद A-B से परिपथ में दिखने वाला कुल तुल्य प्रतिरोध।\n\n4. Vth व Rth ज्ञात करने के चरण:\n   - RL हटाकर A-B पर खुला-परिपथ वोल्टेज Vth ज्ञात करें।\n   - स्रोतों को बंद करके A-B से तुल्य प्रतिरोध Rth ज्ञात करें।\n\n5. लोड धारा सूत्र: IL = Vth / (Rth + RL)",
    bn: "১. থেভেনিনের উপপাদ্যের মূল বিবৃতি: যেকোনো লিনিয়ার টু-টার্মিনাল ডিসি সার্কিটকে A-B টার্মিনালের সাপেক্ষে সিরিজে যুক্ত Vth এবং Rth বিশিষ্ট সমতুল্য সার্কিটে রূপান্তরিত করা যায়।\n\n২. থেভেনিন ভোল্টেজ (Vth): লোড RL অপসারণের পর A-B টার্মিনালের ওপেন-সার্কিট ভোল্টেজ Voc = Vth।\n\n৩. থেভেনিন রেজিস্ট্যান্স (Rth): সকল স্বাধীন সোর্স বন্ধ করার পর A-B টার্মিনাল থেকে পরিমাপকৃত মোট বাঁধ।\n\n৪. ধাপসমূহ:\n   - RL সরিয়ে A-B এর ওপেন-সার্কিট বিভব Vth বের করুন।\n   - সোর্স নিষ্ক্রিয় করে A-B থেকে Rth বের করুন।\n\n৫. লোড কারেন্ট সমীকরণ: IL = Vth / (Rth + RL)"
  },
  formulas: [
    {
      symbol: 'V_{th}',
      expression: 'V_{th} = V_{oc} = V_{AB} \\quad (R_L \\text{ removed})',
      description: {
        en: 'Thevenin Voltage equal to Open-Circuit Voltage across Load Terminals A-B',
        hi: 'लोड टर्मिनलों A-B पर खुला-परिपथ वोल्टेज के बराबर थेवेनिन वोल्टेज',
        bn: 'লোড টার্মিনাল A-B এর উন্মুক্ত বিভবের সমান থেভেনিন ভোল্টেজ'
      }
    },
    {
      symbol: 'R_{th}',
      expression: 'R_{th} = R_{AB} \\quad (\\text{Independent Sources Deactivated})',
      description: {
        en: 'Thevenin Resistance looking back into Terminals A-B with Sources Zeroed',
        hi: 'स्रोतों को बंद करके A-B टर्मिनलों से परिपथ में देखने पर प्राप्त थेवेनिन प्रतिरोध',
        bn: 'সোর্স নিষ্ক্রিয় করার পর A-B টার্মিনাল থেকে প্রাপ্ত থেভেনিন রেজিস্ট্যান্স'
      }
    },
    {
      symbol: 'I_L',
      expression: 'I_L = \\frac{V_{th}}{R_{th} + R_L}',
      description: {
        en: 'Load Current through Load Resistor RL in Thevenin Equivalent Circuit',
        hi: 'थेवेनिन समतुल्य परिपथ में लोड प्रतिरोधक RL से प्रवाहित लोड धारा',
        bn: 'থেভেনিন সমতুল্য সার্কিটে লোড রেজিস্টর RL এর মধ্য দিয়ে প্রবাহিত কারেন্ট'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-thevenin',
      title: {
        en: 'Thevenin Equivalent Circuit Diagram',
        hi: 'थेवेनिन समतुल्य परिपथ आरेख',
        bn: 'থেভেনিন সমতুল্য সার্কিট চিত্র'
      },
      caption: {
        en: 'Showing complex network reduced to Vth in series with Rth, connected across load terminals A-B to load RL.',
        hi: 'जटिल परिपथ को Vth और Rth के श्रेणी संयोजन में बदलकर लोड RL से जोड़ा गया है।',
        bn: 'জটিল সার্কিটকে সিরিজে থাকা Vth ও Rth এ রূপান্তর করে লোড RL এর সাথে যুক্ত চিত্র।'
      },
      svgType: 'circuit-thevenin-concept'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-thev-1',
      problem: {
        en: 'A DC circuit consists of a Vs = 30 V source connected across a series combination of R1 = 12 Ω and parallel branches R2 = 6 Ω and load RL = 8 Ω connected across terminals A-B. Find the Thevenin equivalent circuit across terminals A-B and calculate the load current IL.',
        hi: 'एक डीसी परिपथ में Vs = 30 V स्रोत R1 = 12 Ω के साथ श्रेणीबद्ध है, तथा टर्मिनलों A-B पर R2 = 6 Ω और लोड RL = 8 Ω समानांतर हैं। A-B टर्मिनलों पर थेवेनिन समतुल्य परिपथ ज्ञात करें तथा लोड धारा IL की गणना करें।',
        bn: 'একটি ডিসি সার্কিটে Vs = 30 V সোর্স R1 = 12 Ω এর সাথে সিরিজে এবং A-B টার্মিনালে R2 = 6 Ω ও লোড RL = 8 Ω প্যারালালে যুক্ত। A-B টার্মিনালের সাপেক্ষে থেভেনিন সমতুল্য সার্কিট এবং লোড কারেন্ট IL নির্ণয় করুন।'
      },
      solution: {
        en: 'Given:\n- Vs = 30 V, R1 = 12 Ω, R2 = 6 Ω, RL = 8 Ω\n\nStep 1: Calculate Vth (Remove RL)\nVth = Voc = Vs · [R2 / (R1 + R2)] = 30 · [6 / (12 + 6)] = 30 · (6 / 18) = 10.0 V\n\nStep 2: Calculate Rth (Deactivate Vs)\nRth = R1 || R2 = (12 · 6) / (12 + 6) = 72 / 18 = 4.0 Ω\n\nStep 3: Calculate Load Current IL\nIL = Vth / (Rth + RL) = 10.0 / (4.0 + 8.0) = 10.0 / 12.0 = 0.833 A (833.3 mA)\n\nAnswer: Vth = 10.0 V, Rth = 4.0 Ω, IL = 0.833 A',
        hi: 'Vth = 30 × [6 / 18] = 10.0 V\nRth = (12 × 6) / 18 = 4.0 Ω\nIL = 10.0 / (4.0 + 8.0) = 0.833 A',
        bn: 'Vth = ৩০ × [৬ / ১৮] = ১০.০ V\nRth = (১২ × ৬) / ১৮ = ৪.০ Ω\nIL = ১০.০ / (৪.০ + ৮.০) = ০.৮৩৩ A'
      },
      givenValues: {
        'Vs': '30 V',
        'R1, R2': '12 Ω, 6 Ω',
        'RL': '8 Ω'
      },
      finalAnswer: {
        en: 'Vth = 10.0 V, Rth = 4.0 Ω, Load Current IL = 0.833 A',
        hi: 'Vth = 10.0 V, Rth = 4.0 Ω, लोड धारा IL = 0.833 A',
        bn: 'Vth = ১০.০ V, Rth = ৪.০ Ω, লোড কারেন্ট IL = ০.৮৩৩ A'
      }
    }
  ],
  mcqs: [
    {
      id: 'mcq-thev-1',
      question: {
        en: "According to Thevenin's Theorem, how is the Thevenin Voltage Vth determined?",
        hi: "थेवेनिन के प्रमेय के अनुसार, थेवेनिन वोल्टेज Vth कैसे ज्ञात किया जाता है?",
        bn: "থেভেনিনের উপপাদ্য অনুযায়ী, থেভেনিন ভোল্টেজ Vth কীভাবে নির্ণয় করা হয়?"
      },
      options: [
        { id: 'opt-a', text: { en: 'Short-circuiting load terminals A-B', hi: 'लोड टर्मिनलों को शॉर्ट करके', bn: 'লোড টার্মিনাল শর্ট করে' } },
        { id: 'opt-b', text: { en: 'Removing load resistor and calculating open-circuit voltage across A-B', hi: 'लोड प्रतिरोधक हटाकर A-B पर खुला-परिपथ वोल्टेज ज्ञात करके', bn: 'লোড রেজিস্টর সরিয়ে A-B এর ওপেন-সার্কিট ভোল্টেজ বের করে' } },
        { id: 'opt-c', text: { en: 'Connecting zero resistance wire across terminals A-B', hi: 'A-B पर शून्य प्रतिरोधक तार जोड़कर', bn: 'A-B তে জিরো রেজিস্ট্যান্স তার যুক্ত করে' } },
        { id: 'opt-d', text: { en: 'Dividing total voltage by total resistors', hi: 'कुल वोल्टेज को कुल प्रतिरोधकों से भाग देकर', bn: 'মোট ভোল্টেজকে মোট রেজিস্টর দিয়ে ভাগ করে' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'Vth is the open-circuit voltage across terminals A-B obtained after removing RL.',
        hi: 'Vth लोड RL हटाने के बाद A-B पर खुला-परिपथ वोल्टेज है।',
        bn: 'Vth হলো লোড RL অপসারণের পর A-B এ প্রাপ্ত ওপেন-সার্কিট ভোল্টেজ।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-thev-1',
      question: {
        en: "Explain why Thevenin's Theorem simplifies analyzing variable load resistors.",
        hi: "समझाएं कि थेवेनिन प्रमेय परिवर्तनशील लोड का विश्लेषण क्यों सरल बनाता है।",
        bn: "পরিবর্তনশীল লোড বিশ্লেষণে থেভেনিনের উপপাদ্য কেন সুবিধা দেয় তা ব্যাখ্যা করুন।"
      },
      hint: {
        en: "Analyze original circuit ONCE to find constant Vth and Rth, then use IL = Vth / (Rth + RL).",
        hi: "Vth और Rth केवल एक बार ज्ञात करें, फिर IL = Vth / (Rth + RL) का उपयोग करें।",
        bn: "Vth এবং Rth কেবল একবার বের করুন, তারপর IL = Vth / (Rth + RL) সূত্রে মান বসান।"
      },
      answerKey: {
        en: "1. The complex active network behind terminals A-B is analyzed ONCE for Vth and Rth.\n2. For any new RL value, load current IL = Vth / (Rth + RL) is evaluated instantly without re-solving the global circuit.",
        hi: "1. परिपथ का विश्लेषण केवल एक बार करके Vth और Rth ज्ञात किए जाते हैं।\n2. किसी भी नए RL के लिए, IL = Vth / (Rth + RL) से तुरंत मान मिल जाता है।",
        bn: "১. পুরো সার্কিটের জন্য Vth এবং Rth কেবল একবারই বের করতে হয়।\n২. যেকোনো নতুন RL এর জন্য IL = Vth / (Rth + RL) সূত্রে সরাসরি লোড কারেন্ট পাওয়া যায়।"
      }
    }
  ],
  practicalApplications: {
    en: [
      'Power supply output impedance characterization',
      'Audio amplifier speaker matching (4 Ω / 8 Ω speakers)',
      'Battery internal resistance evaluation in automotive starter circuits'
    ],
    hi: [
      'पावर सप्लाई आउटपुट प्रतिबाधा परीक्षण',
      'ऑडियो एम्पलीफायर स्पीकर मैचिंग',
      'ऑटोमोटिव स्टार्टर सर्किट में बैटरी के आंतरिक प्रतिरोध का मूल्यांकन'
    ],
    bn: [
      'পাওয়ার সাপ্লাই আউটপুট রেজিস্ট্যান্স পরীক্ষা',
      'অডিও অ্যাম্প্লিফায়ার স্পিকার ম্যাচিং',
      'অটোমোবাইল স্টার্টার সার্কিটে ব্যাটারির অভ্যন্তরীণ রেজিস্ট্যান্স মূল্যায়ন'
    ]
  },
  importantPoints: {
    en: [
      'Vth is the open-circuit voltage across terminals A-B with RL removed.',
      'Rth is calculated looking back into terminals A-B with independent sources zeroed.',
      'Applies strictly to linear bilateral networks.'
    ],
    hi: [
      'Vth RL हटाने के बाद A-B पर खुला-परिपथ वोल्टेज है।',
      'Rth स्रोतों को बंद करके A-B से तुल्य प्रतिरोध है।',
      'केवल रेखीय बायलेटरल नेटवर्क पर लागू होता है।'
    ],
    bn: [
      'Vth হলো লোড RL অপসারণের পর উন্মুক্ত টার্মিনালের ভোল্টেজ।',
      'Rth হলো সোর্স বন্ধ করে A-B টার্মিনাল থেকে পরিমাপকৃত মোট বাঁধা।',
      'কেবল লিনিয়ার ও বাইল্যাটারাল সার্কিটে কার্যকর।'
    ]
  },
  commonMistakes: {
    en: [
      'Forgetting to remove load resistor RL before calculating Voc or Rth',
      'Open-circuiting voltage sources or short-circuiting current sources when deactivating',
      'Assuming Rth is a single physical resistor inside the circuit'
    ],
    hi: [
      'Voc या Rth की गणना से पहले लोड RL को हटाना भूल जाना',
      'स्रोतों को बंद करते समय गलत तरीके से ओपन या शॉर्ट करना',
      'Rth को सर्किट के अंदर का एक वास्तविक प्रतिरोधक मान लेना'
    ],
    bn: [
      'Voc বা Rth বের করার আগে লোড RL সরাতে ভুলে যাওয়া',
      'সোর্স বন্ধ করার সময় ভুল করা',
      'Rth কে সার্কিটের ভেতরের ফিজিক্যাল রেজিস্টর ভাবা'
    ]
  }
};
export const LESSON_NORTON: Lesson = {
  id: 'lsn-ch4-norton',
  topicId: 'ch4-nortons-theorem',
  order: 12,
  title: {
    en: "Norton's Theorem",
    hi: "नॉर्टन का प्रमेय",
    bn: "নর্টনের উপপাদ্য"
  },
  easyExplanation: {
    en: "Norton's Theorem states that any complex linear DC network can be replaced across two load terminals by a single current source IN in parallel with an equivalent resistance RN.",
    hi: "नॉर्टन का प्रमेय कहता है कि किसी भी जटिल रेखीय डीसी नेटवर्क को दो लोड टर्मिनलों पर समानांतर में जुड़े एक धारा स्रोत IN और प्रतिरोधक RN द्वारा बदला जा सकता है।",
    bn: "নর্টনের উপপাদ্য অনুসারে, যেকোনো জটিল লিনিয়ার ডিসি সার্কিটকে দুটি লোড টার্মিনালের সাপেক্ষে একটি কারেন্ট সোর্স IN এবং তার সাথে প্যারালালে যুক্ত রেজিস্টর RN দ্বারা প্রতিস্থাপন করা যায়।"
  },
  detailedExplanation: {
    en: "1. Statement of Norton's Theorem: Any linear, two-terminal bilateral DC network containing independent or dependent voltage/current sources and passive resistors can be replaced by an equivalent parallel circuit consisting of a single current source IN in parallel with an equivalent resistance RN connected across output terminals A-B.\n\n2. Norton Current (IN): Defined as the short-circuit current flowing through terminals A and B when shorted together with a zero-resistance wire (Isc = IN).\n\n3. Norton Resistance (RN): Defined as the total equivalent resistance looking back into open terminals A and B with independent sources deactivated. Note that RN = Rth.\n\n4. Procedure to Find IN:\n   a. Disconnect load resistor RL from terminals A and B.\n   b. Connect a short-circuit wire across terminals A and B.\n   c. Calculate short-circuit current Isc through this wire. This is IN = Isc.\n\n5. Procedure to Find RN:\n   a. Disconnect load RL and short-circuit wire.\n   b. Deactivate independent sources (Short voltage sources, Open current sources).\n   c. Calculate total equivalent resistance across A and B. This is RN (RN = Rth).\n\n6. Reconnecting Load and Load Current Formula: Using Current Divider Rule, IL = IN · [RN / (RN + RL)]\n7. Source Transformation Duality: IN = Vth / Rth, RN = Rth, Vth = IN · RN",
    hi: "1. नॉर्टन प्रमेय का कथन: किसी भी दो-टर्मिनल रेखीय परिपथ को A-B टर्मिनलों पर समानांतर में जुड़े धारा स्रोत IN और प्रतिरोधक RN द्वारा बदला जा सकता है।\n\n2. नॉर्टन धारा (IN): A-B टर्मिनलों को शॉर्ट करने पर प्रवाहित होने वाली शॉर्ट-सर्किट धारा Isc = IN।\n\n3. नॉर्टन प्रतिरोध (RN): A-B से परिपथ में दिखने वाला कुल तुल्य प्रतिरोध (RN = Rth)।\n\n4. धारा विभाजन नियम से लोड धारा: IL = IN · [RN / (RN + RL)]\n5. स्रोत रूपांतरण द्वैतता: IN = Vth / Rth, RN = Rth",
    bn: "১. নর্টনের উপপাদ্যের মূল বিবৃতি: যেকোনো লিনিয়ার টু-টার্মিনাল ডিসি সার্কিটকে A-B টার্মিনালের সাপেক্ষে প্যারালালে যুক্ত IN এবং RN বিশিষ্ট সমতুল্য সার্কিটে রূপান্তরিত করা যায়।\n\n২. নর্টন কারেন্ট (IN): A-B টার্মিনাল শর্ট সার্কিট করলে প্রবাহিত শর্ট-সার্কিট কারেন্ট Isc = IN।\n\n৩. নর্টন রেজিস্ট্যান্স (RN): A-B টার্মিনাল থেকে পরিমাপকৃত মোট বাধা (RN = Rth)।\n\n৪. কারেন্ট ডিভাইডার সূত্র দ্বারা লোড কারেন্ট: IL = IN · [RN / (RN + RL)]\n৫. সোর্স ট্রান্সফরমেশন: IN = Vth / Rth, RN = Rth"
  },
  formulas: [
    {
      symbol: 'I_N',
      expression: 'I_N = I_{sc} = I_{AB} \\quad (\\text{Terminals A-B Short-Circuited})',
      description: {
        en: 'Norton Current equal to Short-Circuit Current through Terminals A-B',
        hi: 'टर्मिनलों A-B को शॉर्ट करने पर प्राप्त नॉर्टन धारा',
        bn: 'টার্মিনাল A-B শর্ট সার্কিট করলে প্রাপ্ত নর্টন কারেন্ট'
      }
    },
    {
      symbol: 'R_N',
      expression: 'R_N = R_{th} = R_{AB} \\quad (\\text{Independent Sources Deactivated})',
      description: {
        en: 'Norton Resistance equal to Thevenin Resistance looking into Terminals A-B',
        hi: 'A-B टर्मिनलों से प्राप्त नॉर्टन प्रतिरोध जो थेवेनिन प्रतिरोध के बराबर होता है',
        bn: 'A-B টার্মিনাল থেকে প্রাপ্ত নর্টন রেজিস্ট্যান্স যা থেভেনিন রেজিস্ট্যান্সের সমান'
      }
    },
    {
      symbol: 'I_L',
      expression: 'I_L = I_N \\cdot \\frac{R_N}{R_N + R_L}',
      description: {
        en: 'Load Current calculated using Current Divider Rule in Norton Equivalent',
        hi: 'नॉर्टन समतुल्य परिपथ में धारा विभाजन नियम द्वारा प्राप्त लोड धारा',
        bn: 'নর্টন সার্কিটে কারেন্ট ডিভাইডার সূত্র দ্বারা প্রাপ্ত লোড কারেন্ট'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-norton',
      title: {
        en: 'Norton Equivalent Circuit Diagram',
        hi: 'नॉर्टन समतुल्य परिपथ आरेख',
        bn: 'নর্টন সমতুল্য সার্কিট চিত্র'
      },
      caption: {
        en: 'Showing complex network reduced to IN in parallel with RN, connected across load terminals A-B to load RL.',
        hi: 'जटिल परिपथ को समानांतर धारा स्रोत IN और RN में बदलकर लोड RL से जोड़ा गया है।',
        bn: 'জটিল সার্কিটকে প্যারালালে থাকা IN ও RN এ রূপান্তর করে লোড RL এর সাথে যুক্ত চিত্র।'
      },
      svgType: 'circuit-norton-concept'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-nort-1',
      problem: {
        en: 'A DC network consists of a Vs = 24 V source connected across series resistor R1 = 6 Ω and parallel branch R2 = 12 Ω. Find the Norton equivalent circuit across terminals A-B and calculate load current IL when RL = 4 Ω.',
        hi: 'एक परिपथ में Vs = 24 V स्रोत R1 = 6 Ω के श्रेणी तथा R2 = 12 Ω के समानांतर है। A-B टर्मिनलों पर नॉर्टन समतुल्य परिपथ ज्ञात करें तथा RL = 4 Ω के लिए लोड धारा IL की गणना करें।',
        bn: 'একটি সার্কিটে Vs = 24 V সোর্স R1 = 6 Ω এর সাথে সিরিজে এবং R2 = 12 Ω এর সাথে প্যারালালে যুক্ত। A-B টার্মিনালে নর্টন সমতুল্য সার্কিট এবং RL = 4 Ω এর জন্য লোড কারেন্ট IL নির্ণয় করুন।'
      },
      solution: {
        en: 'Given:\n- Vs = 24 V, R1 = 6 Ω, R2 = 12 Ω, RL = 4 Ω\n\nStep 1: Calculate IN (Short-Circuit A-B)\nWith A-B shorted, R2 is bypassed. IN = Vs / R1 = 24 / 6 = 4.0 A\n\nStep 2: Calculate RN (Deactivate Vs)\nRN = R1 || R2 = (6 · 12) / (6 + 12) = 72 / 18 = 4.0 Ω\n\nStep 3: Calculate Load Current IL via Current Divider Rule\nIL = IN · [RN / (RN + RL)] = 4.0 · [4.0 / (4.0 + 4.0)] = 4.0 · (4/8) = 2.0 A\n\nAnswer: IN = 4.0 A, RN = 4.0 Ω, IL = 2.0 A',
        hi: 'IN = 24 / 6 = 4.0 A\nRN = (6 × 12) / 18 = 4.0 Ω\nIL = 4.0 × [4 / 8] = 2.0 A',
        bn: 'IN = ২৪ / ৬ = ৪.০ A\nRN = (৬ × ১২) / ১৮ = ৪.০ Ω\nIL = ৪.০ × [৪ / ৮] = ২.০ A'
      },
      givenValues: {
        'Vs': '24 V',
        'R1, R2': '6 Ω, 12 Ω',
        'RL': '4 Ω'
      },
      finalAnswer: {
        en: 'IN = 4.0 A, RN = 4.0 Ω, Load Current IL = 2.0 A',
        hi: 'IN = 4.0 A, RN = 4.0 Ω, लोड धारा IL = 2.0 A',
        bn: 'IN = ৪.০ A, RN = ৪.০ Ω, লোড কারেন্ট IL = ২.০ A'
      }
    }
  ],
  mcqs: [
    {
      id: 'mcq-nort-1',
      question: {
        en: "According to Norton's Theorem, how is the Norton Current IN calculated?",
        hi: "नॉर्टन के प्रमेय के अनुसार, नॉर्टन धारा IN की गणना कैसे की जाती है?",
        bn: "নর্টনের উপপাদ্য অনুযায়ী, নর্টন কারেন্ট IN কীভাবে হিসাব করা হয়?"
      },
      options: [
        { id: 'opt-a', text: { en: 'Measuring open-circuit voltage across load terminals A-B', hi: 'लोड टर्मिनलों पर खुला-परिपथ वोल्टेज मापकर', bn: 'লোড টার্মিনালে ওপেন-সার্কিট ভোল্টেজ মেপে' } },
        { id: 'opt-b', text: { en: 'Short-circuiting load terminals A-B and measuring short-circuit current', hi: 'लोड टर्मिनलों A-B को शॉर्ट करके शॉर्ट-सर्किट धारा मापकर', bn: 'লোড টার্মিনাল A-B শর্ট সার্কিট করে শর্ট-সার্কিট কারেন্ট মেপে' } },
        { id: 'opt-c', text: { en: 'Multiplying total voltage by total circuit resistance', hi: 'कुल वोल्टेज को कुल प्रतिरोध से गुणा करके', bn: 'মোট ভোল্টেজকে মোট রেজিস্ট্যান্স দিয়ে গুণ করে' } },
        { id: 'opt-d', text: { en: 'Replacing load resistor with a capacitor', hi: 'लोड प्रतिरोधक को संधारित्र से बदलकर', bn: 'লোড রেজিস্টরকে ক্যাপাসিটর দিয়ে বদলে' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'IN is the short-circuit current flowing through terminals A-B when shorted together.',
        hi: 'IN A-B टर्मिनलों को शॉर्ट करने पर प्रवाहित होने वाली शॉर्ट-सर्किट धारा है।',
        bn: 'IN হলো A-B টার্মিনাল শর্ট করার পর প্রবাহিত শর্ট-সার্কিট কারেন্ট।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-nort-1',
      question: {
        en: "Show that load current IL calculated using Thevenin's Theorem matches IL calculated using Norton's Theorem.",
        hi: "दिखाएं कि थेवेनिन प्रमेय और नॉर्टन प्रमेय से प्राप्त लोड धारा IL समान होती है।",
        bn: "প্রমাণ করুন যে থেভেনিন ও নর্টন উভয় সূত্রের সাহায্যে প্রাপ্ত লোড কারেন্ট IL অভিন্ন।"
      },
      hint: {
        en: "Substitute Vth = IN · RN and Rth = RN into IL = Vth / (Rth + RL).",
        hi: "IL = Vth / (Rth + RL) में Vth = IN · RN और Rth = RN रखें।",
        bn: "IL = Vth / (Rth + RL) সমীকরণে Vth = IN · RN এবং Rth = RN বসান।"
      },
      answerKey: {
        en: "IL = Vth / (Rth + RL) = (IN · RN) / (RN + RL) = IN · [RN / (RN + RL)]. This exact expression is the Norton load current formula using Current Divider Rule.",
        hi: "IL = Vth / (Rth + RL) = (IN · RN) / (RN + RL) = IN · [RN / (RN + RL)]। दोनों प्रमेय समान परिणाम देते हैं।",
        bn: "IL = Vth / (Rth + RL) = (IN · RN) / (RN + RL) = IN · [RN / (RN + RL)]। উভয় সূত্র অভিন্ন ফলাফল দেয়।"
      }
    }
  ],
  practicalApplications: {
    en: [
      'Transistor small-signal collector current modeling',
      'Parallel current-fed sensor network modeling',
      'Industrial current loop (4-20 mA) transmitter circuit design'
    ],
    hi: [
      'ट्रांजिस्टर स्मॉल-सिग्नल कलेक्टर धारा मॉडलिंग',
      'समानांतर धारा-आधारित सेंसर नेटवर्क मॉडलिंग',
      'औद्योगिक धारा लूप (4-20 mA) ट्रांसमीटर सर्किट डिजाइन'
    ],
    bn: [
      'ট্রানজিস্টর স্মল-সিগন্যাল কালেক্টর কারেন্ট মডেলিং',
      'প্যারালাল কারেন্ট-ফিড সেন্সর নেটওয়ার্ক মডেলিং',
      'ইন্ডাস্ট্রিয়াল কারেন্ট লুপ (4-20 mA) ট্র্যান্সমিটার সার্কিট ডিজাইন'
    ]
  },
  importantPoints: {
    en: [
      'IN is the short-circuit current through load terminals A-B.',
      'RN is identical to Rth (RN = Rth) calculated with sources deactivated.',
      'Source transformation bridges Thevenin and Norton models: Vth = IN · RN.'
    ],
    hi: [
      'IN लोड टर्मिनलों A-B से बहने वाली शॉर्ट-सर्किट धारा है।',
      'RN थेवेनिन प्रतिरोध के समान होता है (RN = Rth)।',
      'स्रोत रूपांतरण दोनों प्रमेयों को जोड़ता है: Vth = IN · RN।'
    ],
    bn: [
      'IN হলো টার্মিনাল A-B শর্ট করার পর প্রবাহিত শর্ট-সার্কিট কারেন্ট।',
      'RN এবং Rth সম্পূর্ণ অভিন্ন (RN = Rth)।',
      'সোর্স ট্রান্সফরমেশন সূত্রে থেভেনিন ও নর্টন মডেল রূপান্তরিত হয়: Vth = IN · RN।'
    ]
  },
  commonMistakes: {
    en: [
      'Measuring open-circuit voltage instead of short-circuit current when determining IN',
      'Connecting Norton resistance RN in series with current source IN instead of parallel',
      'Applying Voltage Divider Rule instead of Current Divider Rule when evaluating IL'
    ],
    hi: [
      'IN निर्धारित करते समय शॉर्ट-सर्किट धारा के बजाय ओपन-सर्किट वोल्टेज मापना',
      'धारा स्रोत IN के समानांतर के बजाय श्रेणी में प्रतिरोधक RN जोड़ना',
      'लोड धारा IL ज्ञात करते समय धारा विभाजन के बजाय वोल्टेज विभाजन नियम लगाना'
    ],
    bn: [
      'IN নির্ণয়ে শর্ট-সার্কিট কারেন্টের বদলে ওপেন-সার্কিট ভোল্টেজ মেপে ফেলা',
      'কারেন্ট সোর্স IN এর সাথে প্যারালালের বদলে সিরিজে RN যুক্ত করে ফেলা',
      'লোড কারেন্ট IL হিসাবের সময় কারেন্ট ডিভাইডার রুলের বদলে ভোল্টেজ ডিভাইডার রুল প্রয়োগ করা'
    ]
  }
};

export const LESSON_SUPERPOSITION: Lesson = {
  id: 'lsn-ch4-superposition-theorem',
  topicId: 'ch4-superposition-theorem',
  order: 13,
  title: {
    en: 'Superposition Theorem',
    hi: 'सुपरपोजिशन प्रमेय (Superposition Theorem)',
    bn: 'সুপারপজিশন উপপাদ্য (Superposition Theorem)'
  },
  easyExplanation: {
    en: 'The Superposition Theorem states that in a linear network containing multiple independent sources, the total current or voltage in any branch is equal to the algebraic sum of currents or voltages produced by each independent source acting alone while all other independent sources are deactivated.',
    hi: 'सुपरपोजिशन प्रमेय बताता है कि कई स्वतंत्र स्रोतों वाले किसी रैखिक नेटवर्क में, किसी भी शाखा में कुल धारा या वोल्टेज प्रत्येक स्वतंत्र स्रोत द्वारा अकेले उत्पन्न धाराओं या वोल्टेज के बीजगणितीय योग के बराबर होता है, जब अन्य सभी स्वतंत्र स्रोत निष्क्रिय कर दिए जाते हैं।',
    bn: 'সুপারপজিশন উপপাদ্য অনুসারে একাধিক স্বাধীন সোর্সযুক্ত একটি রৈখিক নেটওয়ার্কে যেকোনো ব্রাঞ্চে মোট কারেন্ট বা ভোল্টেজ হলো প্রতিটি স্বাধীন সোর্স এককভাবে সক্রিয় রেখে (অন্যান্য সোর্স নিষ্ক্রিয় করে) প্রাপ্ত কারেন্ট বা ভোল্টেজের বীজগণিতীয় যোগফল।'
  },
  detailedExplanation: {
    en: '1. Theorem Principle & Definition: In any linear bilateral circuit driven by more than one independent source, the response (voltage or current) at any point is the algebraic sum of responses caused by each independent source operating independently.\n\n2. Deactivation Rules for Independent Sources:\n- Independent Voltage Sources: Deactivated by replacing them with a short circuit (internal impedance = 0 Ω).\n- Independent Current Sources: Deactivated by replacing them with an open circuit (internal impedance = ∞ Ω).\n- Internal Source Resistance: Practical internal source resistances must remain in the circuit during source deactivation.\n\n3. Dependent (Controlled) Sources Rule: CRITICAL RULE — Dependent (controlled) voltage or current sources MUST NEVER be deactivated or turned off. They remain active in the circuit because their output depends on voltages or currents controlled elsewhere.\n\n4. One-Source-at-a-Time Procedure:\n- Step 1: Select one independent source to remain active.\n- Step 2: Deactivate all other independent sources (short voltage sources, open current sources).\n- Step 3: Calculate the branch current or node voltage response (e.g., I1\').\n- Step 4: Repeat Steps 1–3 for every independent source in turn (obtaining I1\'\', I1\'\'\', etc.).\n- Step 5: Sum all partial responses algebraically considering direction/polarity: I_total = I1\' + I1\'\' + ...\n\n5. Power Calculation Warning: Superposition CANNOT be directly applied to power calculations (P ≠ P1 + P2). Power is a non-linear quadratic function of current/voltage (P = I²R = V²/R). To find total power dissipated in a resistor, you must first determine the total current or voltage using superposition, and then compute P = (I_total)² · R.',
    hi: '1. प्रमेय का सिद्धांत एवं परिभाषा: एक से अधिक स्वतंत्र स्रोतों वाले रैखिक द्विपक्षीय परिपथ में, किसी भी बिंदु पर कुल अनुक्रिया (वोल्टेज या धारा) प्रत्येक स्वतंत्र स्रोत द्वारा अकेले कार्य करने पर उत्पन्न अनुक्रियाओं का बीजगणितीय योग होती है।\n\n2. स्वतंत्र स्रोतों को निष्क्रिय करने के नियम:\n- स्वतंत्र वोल्टेज स्रोत: इन्हें शॉर्ट सर्किट (आंतरिक प्रतिरोध = 0 Ω) से बदला जाता है।\n- स्वतंत्र धारा स्रोत: इन्हें ओपन सर्किट (आंतरिक प्रतिरोध = ∞ Ω) से बदला जाता है।\n- व्यावहारिक आंतरिक प्रतिरोध परिपथ में बना रहता है।\n\n3. निर्भर (नियंत्रित) स्रोतों का नियम: अत्यंत महत्वपूर्ण — निर्भर स्रोतों को कभी भी बंद या निष्क्रिय नहीं किया जाता है। वे परिपथ में सक्रिय बने रहते हैं।\n\n4. एक-समय-पर-एक-स्रोत प्रक्रिया:\n- चरण 1: एक स्वतंत्र स्रोत को सक्रिय चुनें।\n- चरण 2: अन्य सभी स्वतंत्र स्रोतों को निष्क्रिय करें (वोल्टेज स्रोत शॉर्ट, धारा स्रोत ओपन)।\n- चरण 3: लक्ष्य शाखा की धारा या वोल्टेज ज्ञात करें (जैसे I1\')।\n- चरण 4: प्रत्येक स्वतंत्र स्रोत के लिए इसे दोहराएं (I1\'\', I1\'\'\' आदि प्राप्त करें)।\n- चरण 5: दिशा और ध्रुवता का ध्यान रखते हुए बीजगणितीय योग करें: I_total = I1\' + I1\'\' + ...\n\n5. शक्ति गणना चेतावनी: सुपरपोजिशन सीधे शक्ति गणना पर लागू नहीं होता है (P ≠ P1 + P2)। शक्ति एक गैर-रेखीय द्विघात फलन है (P = I²R)। कुल शक्ति ज्ञात करने के लिए पहले सुपरपोजिशन से कुल धारा I_total ज्ञात करें, फिर P = (I_total)² · R निकालें।',
    bn: '১. উপপাদ্যের মূল নীতি ও সংজ্ঞা: একাধিক স্বাধীন সোর্স দ্বারা পরিচালিত যেকোনো লিনিয়ার বাইল্যাটারাল সার্কিটে যেকোনো উপাদানের রেসপন্স (কারেন্ট বা ভোল্টেজ) হলো প্রতিটি সোর্স পৃথকভাবে কার্যকর রেখে প্রাপ্ত রেসপন্সসমূহের বীজগণিতীয় যোগফল।\n\n২. স্বাধীন সোর্স নিষ্ক্রিয় করার নিয়ম:\n- স্বাধীন ভোল্টেজ সোর্স: শর্ট সার্কিট (অভ্যন্তরীণ রেজিস্ট্যান্স = ০ Ω) দ্বারা প্রতিস্থাপিত হয়।\n- স্বাধীন কারেন্ট সোর্স: ওপেন সার্কিট (অভ্যন্তরীণ রেজিস্ট্যান্স = ∞ Ω) দ্বারা প্রতিস্থাপিত হয়।\n- সোর্সের ব্যবহারিক অভ্যন্তরীণ রেজিস্ট্যান্স সার্কিটে বিদ্যমান থাকে।\n\n৩. নির্ভরশীল (ডিপেনডেন্ট) সোর্সের নিয়ম: অত্যন্ত গুরুত্বপূর্ণ — নির্ভরশীল ভোল্টেজ বা কারেন্ট সোর্স কোনো অবস্থাতেই বন্ধ বা নিষ্ক্রিয় করা যাবে না।\n\n৪. ধাপে ধাপে হিসাব করার পদ্ধতি:\n- ধাপ ১: একটি স্বাধীন সোর্স নির্বাচন করুন।\n- ধাপ ২: অন্য সব স্বাধীন সোর্স নিষ্ক্রিয় করুন (ভোল্টেজ সোর্স শর্ট, কারেন্ট সোর্স ওপেন)।\n- ধাপ ৩: কাঙ্ক্ষিত ব্রাঞ্চের কারেন্ট বা ভোল্টেজ নির্ণয় করুন (যেমন I1\')।\n- ধাপ ৪: প্রতিটি স্বাধীন সোর্সের জন্য এই প্রক্রিয়া পুনরাবৃত্তি করুন (I1\'\', I1\'\'\' নির্ণয় করুন)।\n- ধাপ ৫: অভিমুখ ও দিক বিবেচনা করে বীজগণিতীয় যোগ করুন: I_total = I1\' + I1\'\' + ...\n\n৫. পাওয়ার হিসাবের সতর্কতা: সুপারপজিশন সরাসরি পাওয়ার বা শক্তির হিসাবে প্রয়োগ করা যায় না (P ≠ P1 + P2)। কারণ পাওয়ার হলো কারেন্ট বা ভোল্টেজের অ-রৈখিক দ্বিঘাত ফাংশন (P = I²R)। তাই প্রথমে মোট কারেন্ট বা ভোল্টেজ নির্ণয় করে তারপর P = (I_total)² · R বের করতে হবে।'
  },
  formulas: [
    {
      symbol: 'I_{total}',
      expression: 'I_{total} = \\sum_{k=1}^{n} I_k\' = I_1\' + I_1\'\' + I_1\'\'\' + \\dots',
      description: {
        en: 'Total branch current equal to the algebraic sum of component currents from each independent source',
        hi: 'प्रत्येक स्वतंत्र स्रोत से प्राप्त घटक धाराओं के बीजगणितीय योग के बराबर कुल शाखा धारा',
        bn: 'প্রতিটি স্বাধীন সোর্স থেকে প্রাপ্ত কারেন্টের বীজগণিতীয় যোগফলের সমান মোট ব্রাঞ্চ কারেন্ট'
      }
    },
    {
      symbol: 'V_{total}',
      expression: 'V_{total} = \\sum_{k=1}^{n} V_k\' = V_1\' + V_1\'\' + V_1\'\'\' + \\dots',
      description: {
        en: 'Total node voltage equal to the algebraic sum of component voltages',
        hi: 'घटक वोल्टेज के बीजगणितीय योग के बराबर कुल नोड वोल्टेज',
        bn: 'উপাদান ভোল্টেজের বীজগণিতীয় যোগফলের সমান মোট নোড ভোল্টেজ'
      }
    },
    {
      symbol: 'P_{total}',
      expression: 'P_{total} = (I_{total})^2 \\cdot R \\neq P_1 + P_2 + \\dots',
      description: {
        en: 'Total electrical power dissipated in a resistor calculated using total superimposed current (Power is non-linear)',
        hi: 'कुल सुपरइम्पोज़्ड धारा का उपयोग करके प्रतिरोधक में कुल शक्ति खपत (शक्ति गैर-रेखीय होती है)',
        bn: 'মোট সুপারইম্পোজড কারেন্ট ব্যবহার করে রেজিস্টরে অপচয়কৃত মোট শক্তি (শক্তি অ-রৈখিক)'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-superposition-theorem',
      title: {
        en: 'Superposition Theorem Deactivation & Decomposition Model',
        hi: 'सुपरपोजिशन प्रमेय का विखंडन एवं स्रोत निष्क्रिएशन मॉडल',
        bn: 'সুপারপজিশন উপপাদ্যের সোর্স নিষ্ক্রিয়করণ ও উপাদান বিভাজন মডেল'
      },
      caption: {
        en: 'Decomposing a multi-source network into single-source sub-circuits by short-circuiting voltage sources and open-circuiting current sources.',
        hi: 'वोल्टेज स्रोतों को शॉर्ट और धारा स्रोतों को ओपन करके बहु-स्रोत परिपथ को एकल-स्रोत उप-परिपथों में विभाजित करना।',
        bn: 'ভোল্টেজ সোর্স শর্ট ও কারেন্ট সোর্স ওপেন করে বহুমাত্রিক সার্কিটকে একক সোর্স সার্কিটে রূপান্তর চিত্র।'
      },
      svgType: 'circuit-superposition-concept'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-super-1',
      problem: {
        en: 'A DC circuit contains two voltage sources V1 = 24 V and V2 = 12 V connected with resistors R1 = 6 Ω, R2 = 12 Ω, and load RL = 4 Ω in a T-network. Calculate the current IL flowing through load RL using the Superposition Theorem.',
        hi: 'एक डीसी परिपथ में दो वोल्टेज स्रोत V1 = 24 V और V2 = 12 V प्रतिरोधकों R1 = 6 Ω, R2 = 12 Ω, तथा लोड RL = 4 Ω के साथ जुड़े हैं। सुपरपोजिशन प्रमेय का उपयोग करके लोड RL से बहने वाली धारा IL ज्ञात करें।',
        bn: 'একটি ডিসি সার্কিটে দুটি ভোল্টেজ সোর্স V1 = 24 V এবং V2 = 12 V, রেজিস্টর R1 = 6 Ω, R2 = 12 Ω এবং লোড RL = 4 Ω যুক্ত রয়েছে। সুপারপজিশন উপপাদ্য প্রয়োগ করে লোড RL এর কারেন্ট IL নির্ণয় করুন।'
      },
      solution: {
        en: 'Given:\n- V1 = 24 V, V2 = 12 V\n- R1 = 6 Ω, R2 = 12 Ω, RL = 4 Ω\n\nStep 1: Case 1 — V1 Active (24 V), V2 Shorted (0 V)\n- Parallel combination of R2 and RL: R2 || RL = (12 · 4) / (12 + 4) = 48 / 16 = 3.0 Ω\n- Total circuit resistance seen by V1: R_total1 = R1 + (R2 || RL) = 6 + 3 = 9.0 Ω\n- Total supply current from V1: I_s1 = V1 / R_total1 = 24 / 9 = 2.667 A\n- Load current component IL\' via Current Divider Rule:\n  IL\' = I_s1 · [R2 / (R2 + RL)] = (24/9) · [12 / (12 + 4)] = (8/3) · (3/4) = 2.0 A (downward)\n\nStep 2: Case 2 — V2 Active (12 V), V1 Shorted (0 V)\n- Parallel combination of R1 and RL: R1 || RL = (6 · 4) / (6 + 4) = 24 / 10 = 2.4 Ω\n- Total circuit resistance seen by V2: R_total2 = R2 + (R1 || RL) = 12 + 2.4 = 14.4 Ω\n- Total supply current from V2: I_s2 = V2 / R_total2 = 12 / 14.4 = 0.833 A\n- Load current component IL\'\' via Current Divider Rule:\n  IL\'\' = I_s2 · [R1 / (R1 + RL)] = (12 / 14.4) · [6 / (6 + 4)] = (1/1.2) · 0.6 = 0.5 A (downward)\n\nStep 3: Algebraic Superposition\n- Total Load Current IL = IL\' + IL\'\' = 2.0 A + 0.5 A = 2.5 A (downward)\n\nFinal Answer: Load Current IL = 2.5 A',
        hi: 'चरण 1: V1 सक्रिय (24 V), V2 शॉर्ट:\nR2 || RL = (12 × 4) / 16 = 3.0 Ω\nR_total1 = 6 + 3 = 9.0 Ω\nI_s1 = 24 / 9 = 2.667 A\nIL\' = 2.667 × (12 / 16) = 2.0 A (नीचे की ओर)\n\nचरण 2: V2 सक्रिय (12 V), V1 शॉर्ट:\nR1 || RL = (6 × 4) / 10 = 2.4 Ω\nR_total2 = 12 + 2.4 = 14.4 Ω\nI_s2 = 12 / 14.4 = 0.833 A\nIL\'\' = 0.833 × (6 / 10) = 0.5 A (नीचे की ओर)\n\nचरण 3: सुपरपोजिशन योग:\nIL = 2.0 A + 0.5 A = 2.5 A',
        bn: 'ধাপ ১: V1 সক্রিয় (24 V), V2 শর্ট:\nR2 || RL = (12 × 4) / 16 = 3.0 Ω\nR_total1 = 6 + 3 = 9.0 Ω\nI_s1 = 24 / 9 = 2.667 A\nIL\' = 2.667 × (12 / 16) = 2.0 A (নিচের দিকে)\n\nধাপ ২: V2 সক্রিয় (12 V), V1 শর্ট:\nR1 || RL = (6 × 4) / 10 = 2.4 Ω\nR_total2 = 12 + 2.4 = 14.4 Ω\nI_s2 = 12 / 14.4 = 0.833 A\nIL\'\' = 0.833 × (6 / 10) = 0.5 A (নিচের দিকে)\n\nধাপ ৩: সুপারপজিশন যোগফল:\nIL = 2.0 A + 0.5 A = 2.5 A'
      },
      givenValues: {
        'V1, V2': '24 V, 12 V',
        'R1, R2, RL': '6 Ω, 12 Ω, 4 Ω'
      },
      finalAnswer: {
        en: 'Load Current IL = 2.5 A',
        hi: 'लोड धारा IL = 2.5 A',
        bn: 'লোড কারেন্ট IL = ২.৫ A'
      }
    },
    {
      id: 'ex-super-2',
      problem: {
        en: 'A network contains a voltage source VS = 20 V and an independent current source IS = 4 A connected across resistors R1 = 10 Ω and R2 = 10 Ω in parallel with a load RL = 10 Ω. Find the voltage VL across load RL using the Superposition Theorem.',
        hi: 'एक नेटवर्क में वोल्टेज स्रोत VS = 20 V और स्वतंत्र धारा स्रोत IS = 4 A प्रतिरोधकों R1 = 10 Ω, R2 = 10 Ω और लोड RL = 10 Ω से जुड़े हैं। सुपरपोजिशन का उपयोग करके RL का वोल्टेज VL ज्ञात करें।',
        bn: 'একটি নেটওয়ার্কে ভোল্টেজ সোর্স VS = 20 V এবং স্বাধীন কারেন্ট সোর্স IS = 4 A, রেজিস্টর R1 = 10 Ω, R2 = 10 Ω এবং লোড RL = 10 Ω এর সাথে যুক্ত। সুপারপজিশন প্রয়োগ করে RL এর ভোল্টেজ VL নির্ণয় করুন।'
      },
      solution: {
        en: 'Given:\n- Voltage Source VS = 20 V\n- Current Source IS = 4 A\n- Resistors R1 = 10 Ω, R2 = 10 Ω, RL = 10 Ω\n\nStep 1: Case 1 — Voltage Source VS Active (20 V), Current Source IS Open (0 A)\n- Since IS is open, circuit is a simple series-parallel voltage divider.\n- Parallel combination of R2 and RL: R2 || RL = (10 · 10) / (10 + 10) = 5.0 Ω\n- Load Voltage component VL\':\n  VL\' = VS · [(R2 || RL) / (R1 + (R2 || RL))] = 20 · [5.0 / (10 + 5.0)] = 20 · (5/15) = 6.667 V\n\nStep 2: Case 2 — Current Source IS Active (4 A), Voltage Source VS Shorted (0 V)\n- With VS shorted, R1 is connected in parallel with R2 and RL across the node.\n- Equivalent parallel resistance: R_p = R1 || R2 || RL = 10 || 10 || 10 = 10 / 3 = 3.333 Ω\n- Load Voltage component VL\'\':\n  VL\'\' = IS · R_p = 4.0 A · (10 / 3) Ω = 40 / 3 = 13.333 V\n\nStep 3: Algebraic Summation\n- Total Load Voltage VL = VL\' + VL\'\' = 6.667 V + 13.333 V = 20.0 V\n\nFinal Answer: Load Voltage VL = 20.0 V',
        hi: 'चरण 1: VS सक्रिय (20 V), IS ओपन (0 A):\n(R2 || RL) = 5.0 Ω\nVL\' = 20 × (5 / 15) = 6.667 V\n\nचरण 2: IS सक्रिय (4 A), VS शॉर्ट (0 V):\nR_p = 10 || 10 || 10 = 3.333 Ω\nVL\'\' = 4 × 3.333 = 13.333 V\n\nचरण 3: बीजगणितीय योग:\nVL = 6.667 + 13.333 = 20.0 V',
        bn: 'ধাপ ১: VS সক্রিয় (20 V), IS ওপেন (0 A):\n(R2 || RL) = 5.0 Ω\nVL\' = 20 × (5 / 15) = 6.667 V\n\nধাপ ২: IS সক্রিয় (4 A), VS শর্ট (0 V):\nR_p = 10 || 10 || 10 = 3.333 Ω\nVL\'\' = 4 × 3.333 = 13.333 V\n\nধাপ ৩: বীজগণিতীয় যোগফল:\nVL = 6.667 + 13.333 = 20.0 V'
      },
      givenValues: {
        'VS, IS': '20 V, 4 A',
        'R1, R2, RL': '10 Ω, 10 Ω, 10 Ω'
      },
      finalAnswer: {
        en: 'Load Voltage VL = 20.0 V',
        hi: 'लोड वोल्टेज VL = 20.0 V',
        bn: 'লোড ভোল্টেজ VL = ২০.০ V'
      }
    },
    {
      id: 'ex-super-3',
      problem: {
        en: 'Demonstrate why Superposition Theorem cannot be directly applied to calculate power. A 5 Ω resistor carries partial currents I1\' = 3 A and I2\'\' = 2 A due to two separate DC sources acting independently. Calculate: (a) Total superimposed current, (b) True total power dissipated, and (c) Sum of individual powers (P1 + P2) to verify inequality.',
        hi: 'प्रदर्शित करें कि शक्ति की गणना के लिए सीधे सुपरपोजिशन क्यों नहीं लगाया जा सकता। 5 Ω का प्रतिरोधक स्वतंत्र रूप से कार्य करने वाले दो डीसी स्रोतों के कारण I1\' = 3 A और I2\'\' = 2 A धाराएँ ले जाता है। गणना करें: (a) कुल धारा, (b) वास्तविक कुल शक्ति, और (c) व्यक्तिगत शक्तियों का योग (P1 + P2)।',
        bn: 'পাওয়ার হিসাবের ক্ষেত্রে কেন সরাসরি সুপারপজিশন প্রয়োগ করা যায় না তা প্রদর্শন করুন। ৫ Ω এর একটি রেজিস্টরে দুটি আলাদা সোর্সের জন্য কারেন্ট যথাক্রমে I1\' = ৩ A এবং I2\'\' = ২ A। বের করুন: (ক) মোট কারেন্ট, (খ) প্রকৃত মোট পাওয়ার, এবং (গ) পৃথক পাওয়ারের যোগফল (P1 + P2)।'
      },
      solution: {
        en: 'Given:\n- Resistor R = 5 Ω\n- Partial current from Source 1: I1\' = 3.0 A\n- Partial current from Source 2: I2\'\' = 2.0 A\n\nPart (a): Total Superimposed Current\nI_total = I1\' + I2\'\' = 3.0 + 2.0 = 5.0 A\n\nPart (b): True Total Power Dissipated P_total\nP_total = (I_total)² · R = (5.0)² · 5 = 25 · 5 = 125.0 Watts\n\nPart (c): Sum of Individual Powers (P1 + P2)\n- Power from Source 1 alone: P1 = (I1\')² · R = (3.0)² · 5 = 9 · 5 = 45 Watts\n- Power from Source 2 alone: P2 = (I2\'\')² · R = (2.0)² · 5 = 4 · 5 = 20 Watts\n- Sum P1 + P2 = 45 + 20 = 65.0 Watts\n\nComparison & Verification:\nP_total (125 W) ≠ P1 + P2 (65 W)\nThis clearly proves that P_total = (I1\' + I2\'\')² · R = (I1\')²R + (I2\'\')²R + 2·I1\'·I2\'\'·R = P1 + P2 + 2·I1\'·I2\'\'·R.\nThe cross-term 2·I1\'·I2\'\'·R makes power non-linear, so superposition must be applied to current/voltage first.',
        hi: '(a) कुल धारा I_total = 3 + 2 = 5 A\n(b) वास्तविक कुल शक्ति P_total = 5² × 5 = 125 वाट\n(c) अलग-अलग शक्ति P1 = 3² × 5 = 45 W, P2 = 2² × 5 = 20 W\nयोग P1 + P2 = 45 + 20 = 65 वाट\n\nनिष्कर्ष: 125 W ≠ 65 W। शक्ति अ-रेखीय है, इसलिए सुपरपोजिशन केवल धारा/वोल्टेज पर लागू होता है।',
        bn: '(ক) মোট কারেন্ট I_total = ৩ + ২ = ৫ A\n(খ) প্রকৃত মোট পাওয়ার P_total = ৫² × ৫ = ১২৫ ওয়াট\n(গ) পৃথক পাওয়ার P1 = ৩² × ৫ = ৪৫ W, P2 = ২² × ৫ = ২০ W\nযোগফল P1 + P2 = ৪৫ + ২০ = ৬৫ ওয়াট\n\nউপসংহার: ১২৫ W ≠ ৬৫ W। সুতরাং পাওয়ারের ওপর সরাসরি সুপারপজিশন খাটে না।'
      },
      givenValues: {
        'R': '5 Ω',
        'I1\', I2\'\'': '3 A, 2 A'
      },
      finalAnswer: {
        en: 'Total Power P_total = 125 W, while P1 + P2 = 65 W (Proving P_total ≠ P1 + P2)',
        hi: 'कुल शक्ति P_total = 125 W, जबकि P1 + P2 = 65 W (सिद्ध हुआ P_total ≠ P1 + P2)',
        bn: 'মোট পাওয়ার P_total = ১২৫ W, কিন্তু P1 + P2 = ৬৫ W (প্রমাণিত P_total ≠ P1 + P2)'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Multi-source analog sensor circuit and operational amplifier summer node analysis',
      'Power supply grid analysis with multiple distributed generating stations',
      'Communication receiver RF front-end mixing and intermodulation signal analysis'
    ],
    hi: [
      'बहु-स्रोत एनालॉग सेंसर परिपथ तथा सेशन ऑप-एम्प समर नोड विश्लेषण',
      'कई वितरित जनरेटिंग स्टेशनों के साथ पावर सप्लाई ग्रिड विश्लेषण',
      'संचार रिसीवर आरएफ फ्रंट-एंड मिक्सिंग तथा सिग्नल विश्लेषण'
    ],
    bn: [
      'মাল্টি-সোর্স অ্যানালগ সেন্সর সার্কিট এবং অপ-অ্যাম্প সামিং নোড বিশ্লেষণ',
      'একাধিক ডিস্ট্রিবিউটেড জেনারেটিং স্টেশনযুক্ত পাওয়ার গ্রিড বিশ্লেষণ',
      'কমিউনিকেশন রিসিভার আরএফ ফ্রন্ট-এন্ড মিক্সিং ও সিগন্যাল বিশ্লেষণ'
    ]
  },
  importantPoints: {
    en: [
      'Superposition Theorem applies ONLY to linear bilateral networks.',
      'Voltage sources are deactivated by replacing with short circuits (0 Ω); current sources by open circuits (∞ Ω).',
      'Dependent (controlled) sources MUST NEVER be deactivated during analysis.',
      'Superposition CANNOT be directly applied to power calculations due to non-linear P = I²R relationship.'
    ],
    hi: [
      'सुपरपोजिशन प्रमेय केवल रैखिक द्विपक्षीय नेटवर्कों पर लागू होता है।',
      'वोल्टेज स्रोतों को शॉर्ट सर्किट (0 Ω) और धारा स्रोतों को ओपन सर्किट (∞ Ω) से बदला जाता है।',
      'निर्भर (नियंत्रित) स्रोतों को कभी भी बंद नहीं किया जाना चाहिए।',
      'गैर-रेखीय P = I²R संबंध के कारण शक्ति गणना पर सीधे सुपरपोजिशन लागू नहीं हो सकता।'
    ],
    bn: [
      'সুপারপজিশন উপপাদ্য কেবল লিনিয়ার বাইল্যাটারাল সার্কিটে প্রযোজ্য।',
      'ভোল্টেজ সোর্স শর্ট সার্কিট (০ Ω) এবং কারেন্ট সোর্স ওপেন সার্কিট (∞ Ω) করতে হয়।',
      'নির্ভরশীল সোর্স বিশ্লেষণকালে কোনো অবস্থাতেই বন্ধ করা যাবে না।',
      'অ-রৈখিক P = I²R সম্পর্কের কারণে সরাসরি পাওয়ার হিসাবে সুপারপজিশন প্রয়োগ করা যায় না।'
    ]
  },
  commonMistakes: {
    en: [
      'Deactivating dependent sources along with independent sources during sub-circuit setup',
      'Attempting to sum individual component powers (P1 + P2) directly instead of computing total current first',
      'Ignoring polarity and current direction when algebraically summing component responses'
    ],
    hi: [
      'स्वतंत्र स्रोतों के साथ-साथ निर्भर स्रोतों को भी गलती से बंद कर देना',
      'पहले कुल धारा ज्ञात किए बिना व्यक्तिगत शक्तियों (P1 + P2) को सीधे जोड़ने का प्रयास करना',
      'घटक अनुक्रियाओं का योग करते समय धारा की दिशा और ध्रुवता की उपेक्षा करना'
    ],
    bn: [
      'স্বাধীন সোর্সের সাথে সাথে ভুলবশত নির্ভরশীল সোর্সও বন্ধ করে ফেলা',
      'মোট কারেন্ট বের না করে সরাসরি পৃথক পাওয়ার (P1 + P2) যোগ করে ফেলা',
      'কারেন্টের অভিমুখ ও চিহ্ন বিবেচনা না করে উপাদান রেসপন্স যোগ করা'
    ]
  },
  mcqs: [
    {
      id: 'mcq-super-1',
      question: {
        en: 'When applying Superposition Theorem, an ideal independent voltage source is deactivated by replacing it with a:',
        hi: 'सुपरपोजिशन प्रमेय लागू करते समय, एक आदर्श स्वतंत्र वोल्टेज स्रोत को किससे बदलकर निष्क्रिय किया जाता है?',
        bn: 'সুপারপজিশন উপপাদ্য প্রয়োগে একটি আদর্শ স্বাধীন ভোল্টেজ সোর্স নিষ্ক্রিয় করতে এটি কী দিয়ে প্রতিস্থাপন করা হয়?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Open circuit (∞ Ω)', hi: 'ओपन सर्किट (∞ Ω)', bn: 'ওপেন সার্কিট (∞ Ω)' } },
        { id: 'opt-b', text: { en: 'Short circuit (0 Ω)', hi: 'शॉर्ट सर्किट (0 Ω)', bn: 'শর্ট সার্কিট (০ Ω)' } },
        { id: 'opt-c', text: { en: 'Resistor equal to load resistance', hi: 'लोड प्रतिरोध के बराबर प्रतिरोधक', bn: 'লোড রেজিস্ট্যান্সের সমান রেজিস্টর' } },
        { id: 'opt-d', text: { en: 'Capacitor of infinite capacitance', hi: 'अनंत धारिता का संधारित्र', bn: 'অসীম ক্যাপাসিট্যান্সের ক্যাপাসিটর' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'Ideal voltage sources have zero internal resistance, so deactivating them requires replacing them with a short circuit (0 Ω).',
        hi: 'आदर्श वोल्टेज स्रोतों का आंतरिक प्रतिरोध शून्य होता है, इसलिए उन्हें शॉर्ट सर्किट (0 Ω) से बदला जाता है।',
        bn: 'আদর্শ ভোল্টেজ সোর্সের অভ্যন্তরীণ রেজিস্ট্যান্স শূন্য, তাই এটি শর্ট সার্কিট (০ Ω) দ্বারা প্রতিস্থাপিত হয়।'
      }
    },
    {
      id: 'mcq-super-2',
      question: {
        en: 'Why can Superposition Theorem NOT be applied directly to calculate electrical power in a resistor?',
        hi: 'प्रतिरोधक में विद्युत शक्ति की गणना के लिए सीधे सुपरपोजिशन प्रमेय क्यों लागू नहीं किया जा सकता?',
        bn: 'রেজিস্টরে পাওয়ার বা শক্তির হিসাব করতে কেন সরাসরি সুপারপজিশন উপপাদ্য প্রয়োগ করা যায় না?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Power is an AC parameter only', hi: 'शक्ति केवल एक एसी पैरामीटर है', bn: 'পাওয়ার কেবলমাত্র একটি এসি প্যারামিটার' } },
        { id: 'opt-b', text: { en: 'Power depends on frequency', hi: 'शक्ति आवृत्ति पर निर्भर करती है', bn: 'পাওয়ার ফ্রিকোয়েন্সির ওপর নির্ভর করে' } },
        { id: 'opt-c', text: { en: 'Power is a non-linear quadratic function of current/voltage (P = I²R)', hi: 'शक्ति धारा/वोल्टेज का एक गैर-रेखीय द्विघात फलन है (P = I²R)', bn: 'পাওয়ার হলো কারেন্ট বা ভোল্টেজের অ-রৈখিক দ্বিঘাত ফাংশন (P = I²R)' } },
        { id: 'opt-d', text: { en: 'Power is always zero in linear DC circuits', hi: 'रेखीय डीसी परिपथों में शक्ति हमेशा शून्य होती है', bn: 'লিনিয়ার ডিসি সার্কিটে পাওয়ার সর্বদা শূন্য' } }
      ],
      correctOptionId: 'opt-c',
      explanation: {
        en: 'Superposition applies strictly to linear relationships (V = IR). Power P = I²R is non-linear, so P_total ≠ P1 + P2.',
        hi: 'सुपरपोजिशन केवल रेखीय संबंधों (V = IR) पर लागू होता है। शक्ति P = I²R गैर-रेखीय है, इसलिए P_total ≠ P1 + P2।',
        bn: 'সুপারপজিশন কেবল রৈখিক সম্পর্কের ক্ষেত্রে প্রযোজ্য। পাওয়ার P = I²R একটি অ-রৈখিক সমীকরণ, তাই P_total ≠ P1 + P2।'
      }
    },
    {
      id: 'mcq-super-3',
      question: {
        en: 'What happens to dependent (controlled) sources when applying the Superposition Theorem?',
        hi: 'सुपरपोजिशन प्रमेय लागू करते समय निर्भर (नियंत्रित) स्रोतों का क्या होता है?',
        bn: 'সুপারপজিশন উপপাদ্য প্রয়োগের সময় নির্ভরশীল (ডিপেনডেন্ট) সোর্সের কী ঘটে?'
      },
      options: [
        { id: 'opt-a', text: { en: 'They are short-circuited like voltage sources', hi: 'उन्हें वोल्टेज स्रोतों की तरह शॉर्ट किया जाता है', bn: 'ভোল্টেজ সোর্সের মতো শর্ট করা হয়' } },
        { id: 'opt-b', text: { en: 'They are open-circuited like current sources', hi: 'उन्हें धारा स्रोतों की तरह ओपन किया जाता है', bn: 'কারেন্ট সোর্সের মতো ওপেন করা হয়' } },
        { id: 'opt-c', text: { en: 'They remain active in the circuit throughout the analysis', hi: 'वे पूरे विश्लेषण के दौरान परिपथ में सक्रिय बने रहते हैं', bn: 'তারা পুরো বিশ্লেষণজুড়ে সার্কিটে সক্রিয় থাকে' } },
        { id: 'opt-d', text: { en: 'They are replaced with independent 1V sources', hi: 'उन्हें स्वतंत्र 1V स्रोतों से बदल दिया जाता है', bn: 'স্বাধীন ১V সোর্স দিয়ে প্রতিস্থাপন করা হয়' } }
      ],
      correctOptionId: 'opt-c',
      explanation: {
        en: 'Dependent sources depend on voltages/currents elsewhere in the network and MUST NEVER be deactivated.',
        hi: 'निर्भर स्रोत परिपथ के अन्य भागों पर निर्भर करते हैं और उन्हें कभी भी निष्क्रिय नहीं किया जाना चाहिए।',
        bn: 'নির্ভরশীল সোর্স সার্কিটের ওপর নির্ভরশীল তাই এদের কখনোই নিষ্ক্রিয় করা যায় না।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-super-1',
      question: {
        en: 'A network has three independent DC voltage sources. State the step-by-step procedure to determine the voltage across a target resistor using Superposition Theorem.',
        hi: 'तीन स्वतंत्र डीसी वोल्टेज स्रोतों वाले नेटवर्क में सुपरपोजिशन प्रमेय द्वारा लक्ष्य प्रतिरोधक के वोल्टेज ज्ञात करने की चरणबद्ध प्रक्रिया लिखें।',
        bn: 'তিনটি স্বাধীন ডিসি ভোল্টেজ সোর্সযুক্ত সার্কিটে সুপারপজিশন উপপাদ্যের সাহায্যে কোনো নির্দিষ্ট রেজিস্টরের ভোল্টেজ বের করার ধাপে ধাপে পদ্ধতি বর্ণনা করুন।'
      },
      hint: {
        en: 'Explain deactivating 2 sources at a time while keeping 1 active, calculating 3 partial responses, and summing algebraically.',
        hi: 'एक समय में 1 स्रोत सक्रिय रखते हुए 2 को बंद करने, 3 आंशिक वोल्टेज ज्ञात करने और योग करने का वर्णन करें।',
        bn: 'একবারে ১টি সোর্স চালু রেখে বাকি ২টি সোর্স শর্ট করে ৩টি আংশিক ভোল্টেজ বের করার নিয়ম লিখুন।'
      },
      answerKey: {
        en: '1. Keep V1 active, short V2 & V3 -> find V1\'. 2. Keep V2 active, short V1 & V3 -> find V2\'. 3. Keep V3 active, short V1 & V2 -> find V3\'. 4. Algebraic Sum: V_total = V1\' + V2\' + V3\'.',
        hi: '1. V1 सक्रिय रखें, V2 और V3 शॉर्ट करें -> V1\' ज्ञात करें। 2. V2 सक्रिय रखें, V1 और V3 शॉर्ट करें -> V2\' ज्ञात करें। 3. V3 सक्रिय रखें -> V3\' ज्ञात करें। 4. कुल योग: V_total = V1\' + V2\' + V3\'।',
        bn: '১. V1 চালু, V2 ও V3 শর্ট -> V1\'। ২. V2 চালু, V1 ও V3 শর্ট -> V2\'। ৩. V3 চালু, V1 ও V2 শর্ট -> V3\'। ৪. মোট ভোল্টেজ: V_total = V1\' + V2\' + V3\'।'
      }
    },
    {
      id: 'pq-super-2',
      question: {
        en: 'Explain why Superposition Theorem is not applicable to non-linear circuit elements such as semiconductor diodes or thermistors.',
        hi: 'समझाइए कि सेमीकंडक्टर डायोड या थर्मिस्टर जैसे गैर-रेखीय घटकों पर सुपरपोजिशन लागू क्यों नहीं होता है।',
        bn: 'সেমিকন্ডাক্টর ডায়োড বা থার্মিস্টরের মতো অ-রৈখিক উপাদানে কেন সুপারপজিশন প্রযোজ্য নয় ব্যাখ্যা করুন।'
      },
      hint: {
        en: 'Consider whether the resistance of non-linear devices remains constant when multiple sources change.',
        hi: 'विचार करें कि क्या स्रोतों के बदलने पर गैर-रेखीय घटकों का प्रतिरोध स्थिर रहता है या बदलता है।',
        bn: 'সোর্স পরিবর্তনের সাথে সাথে অ-রৈখিক উপাদানের রেজিস্ট্যান্স পরিবর্তনশীল কিনা চিন্তা করুন।'
      },
      answerKey: {
        en: 'Superposition relies on the mathematical principle of linearity f(x+y) = f(x) + f(y). In non-linear devices, dynamic resistance varies with operating voltage/current, violating proportionality and additivity.',
        hi: 'सुपरपोजिशन रेखीयता सिद्धांत f(x+y) = f(x) + f(y) पर आधारित है। गैर-रेखीय घटकों में प्रतिरोध धारा/वोल्टेज के साथ बदलता है, जिससे यह नियम विफल हो जाता है।',
        bn: 'সুপারপজিশন রৈখিকতা নীতি মেনে চলে। কিন্তু অ-রৈখিক উপাদানে রেজিস্ট্যান্স পরিবর্তনশীল হওয়ায় অনুপাত ও সংযোজনশীলতার নিয়ম ভঙ্গ হয়।'
      }
    }
  ]
};

export const LESSON_MAX_POWER: Lesson = {
  id: 'lsn-ch4-max-power-transfer',
  topicId: 'ch4-max-power-transfer',
  order: 14,
  title: {
    en: 'Maximum Power Transfer Theorem',
    hi: 'अधिकतम शक्ति हस्तांतरण प्रमेय (Maximum Power Transfer Theorem)',
    bn: 'সর্বোচ্চ পাওয়ার ট্রান্সফার উপপাদ্য (Maximum Power Transfer Theorem)'
  },
  easyExplanation: {
    en: 'The Maximum Power Transfer Theorem states that maximum electrical power is transferred from a driving source network to a load resistance when the load resistance (RL) equals the internal Thevenin resistance (Rth) of the source network.',
    hi: 'अधिकतम शक्ति हस्तांतरण प्रमेय बताता है कि किसी स्रोत नेटवर्क से लोड प्रतिरोध में अधिकतम विद्युत शक्ति तब स्थानांतरित होती है जब लोड प्रतिरोध (RL) स्रोत के आंतरिक थेवेनिन प्रतिरोध (Rth) के बराबर होता है।',
    bn: 'সর্বোচ্চ পাওয়ার ট্রান্সফার উপপাদ্য অনুসারে একটি ড্রাইভ সোর্স নেটওয়ার্ক থেকে লোডে সর্বোচ্চ পাওয়ার স্থানান্তরিত হয় যখন লোড রেজিস্ট্যান্স (RL) সোর্সের অভ্যন্তরীণ থেভেনিন রেজিস্ট্যান্সের (Rth) সমান হয়।'
  },
  detailedExplanation: {
    en: '1. Theorem Statement & Matching Condition: In any active DC network represented by its Thevenin equivalent circuit (Vth in series with Rth), the power transferred to an adjustable load resistor RL reaches its maximum value when:\n   RL = Rth (Load Resistance = Internal Source Resistance)\n\n2. Mathematical Derivation:\n- Load Current: IL = Vth / (Rth + RL)\n- Power dissipated in Load RL: PL = IL² · RL = [Vth / (Rth + RL)]² · RL\n- To maximize PL with respect to variable RL, set derivative dPL / dRL = 0:\n  dPL / dRL = Vth² · [(Rth + RL)² - 2·RL·(Rth + RL)] / (Rth + RL)⁴ = 0\n  (Rth + RL) - 2·RL = 0  =>  RL = Rth\n\n3. Maximum Power Formula Pmax:\nSubstituting RL = Rth into power equation:\nPmax = [Vth / (2·Rth)]² · Rth = (Vth² / 4·Rth² ) · Rth\nPmax = Vth² / (4 · Rth)\n\n4. Load Parameters at Maximum Power Point:\n- Load Current at Max Power: IL = Vth / (2 · Rth)\n- Terminal Load Voltage at Max Power: VL = IL · RL = (Vth / 2·Rth) · Rth = Vth / 2\n\n5. Electrical Efficiency (η) Analysis:\n- Total Power generated by source: P_total = IL² · (Rth + RL)\n- Efficiency η = (P_load / P_total) × 100% = [RL / (Rth + RL)] × 100%\n- At Maximum Power Transfer (RL = Rth):\n  η = [Rth / (Rth + Rth)] × 100% = (1 / 2) × 100% = 50%\n\n6. Power vs Efficiency Engineering Trade-off:\n- At maximum power transfer, efficiency is EXACTLY 50%. Half the total generated power is lost as internal heat in Rth.\n- Power Distribution Systems (Power Grids): Operate at RL >> Rth to achieve high efficiency (>90–95%), minimizing energy loss.\n- Communication, Audio & Signal Systems: Operate at impedance matching (RL = Rth) to maximize signal voltage/power transfer regardless of 50% efficiency.',
    hi: '1. प्रमेय का कथन एवं मैचिंग शर्त: थेवेनिन समतुल्य परिपथ (Vth और Rth) द्वारा दर्शाए गए किसी भी सक्रिय डीसी नेटवर्क में, परिवर्तनशील लोड RL को स्थानांतरित शक्ति तब अधिकतम होती है जब:\n   RL = Rth (लोड प्रतिरोध = आंतरिक थेवेनिन प्रतिरोध)\n\n2. गणितीय व्युत्पत्ति:\n- लोड धारा: IL = Vth / (Rth + RL)\n- लोड शक्ति: PL = IL² · RL = [Vth / (Rth + RL)]² · RL\n- अधिकतम शक्ति के लिए dPL / dRL = 0 करने पर: RL = Rth\n\n3. अधिकतम शक्ति का सूत्र Pmax:\nRL = Rth रखने पर:\nPmax = Vth² / (4 · Rth)\n\n4. अधिकतम शक्ति बिंदु पर लोड पैरामीटर:\n- लोड धारा: IL = Vth / (2 · Rth)\n- लोड वोल्टेज: VL = Vth / 2\n\n5. विद्युत दक्षता (η) विश्लेषण:\n- दक्षता η = [RL / (Rth + RL)] × 100%\n- अधिकतम शक्ति हस्तांतरण पर (RL = Rth):\n  η = 50%\n\n6. शक्ति बनाम दक्षता इंजीनियरिंग समझौता:\n- अधिकतम शक्ति हस्तांतरण पर दक्षता ठीक 50% होती है। आधी ऊर्जा आंतरिक Rth में ऊष्मा के रूप में नष्ट हो जाती है।\n- पावर ग्रिड प्रणालियाँ उच्च दक्षता (>90%) के लिए RL >> Rth पर कार्य करती हैं।\n- संचार एवं ऑडियो प्रणालियाँ सिग्नल शक्ति को अधिकतम करने के लिए प्रतिबाधा मिलान (RL = Rth) पर कार्य करती हैं।',
    bn: '১. উপপাদ্য ও কন্ডিশন: থেভেনিন সমতুল্য পরিপথের (Vth ও Rth) ক্ষেত্রে পরিবর্তনশীল লোড RL এ সর্বোচ্চ পাওয়ার স্থানান্তরিত হবে যখন:\n   RL = Rth (লোড রেজিস্ট্যান্স = অভ্যন্তরীণ থেভেনিন রেজিস্ট্যান্স)\n\n২. গাণিতিক প্রমাণ:\n- লোড কারেন্ট: IL = Vth / (Rth + RL)\n- লোড পাওয়ার: PL = [Vth / (Rth + RL)]² · RL\n- সর্বোচ্চ পাওয়ারের জন্য dPL / dRL = 0 বসালে পাওয়া যায়: RL = Rth\n\n৩. সর্বোচ্চ পাওয়ারের সূত্র Pmax:\nRL = Rth বসালে:\nPmax = Vth² / (4 · Rth)\n\n৪. সর্বোচ্চ পাওয়ার পয়েন্টে প্যারামিটার:\n- লোড কারেন্ট: IL = Vth / (2 · Rth)\n- লোড ভোল্টেজ: VL = Vth / 2\n\n৫. বৈদুতিক দক্ষতা (η):\n- দক্ষতা η = [RL / (Rth + RL)] × 100%\n- সর্বোচ্চ পাওয়ার ট্রান্সফারে (RL = Rth):\n  η = ৫০%\n\n৬. পাওয়ার বনাম দক্ষতার তুলনা:\n- সর্বোচ্চ পাওয়ার ট্রান্সফারে এফিসিয়েন্সি বা দক্ষতা ঠিক ৫০% হয়। অর্ধেকাংশ সোর্সের ভেতর নষ্ট হয়।\n- পাওয়ার গ্রিড সিস্টেমে উচ্চ দক্ষতার জন্য (>৯০%) RL >> Rth রাখা হয়।\n- অডিও ও কমিউনিকেশন সিস্টেমে সিগন্যাল পাওয়ার বাড়াতে RL = Rth ব্যবহার করা হয়।'
  },
  formulas: [
    {
      symbol: 'R_L',
      expression: 'R_L = R_{th}',
      description: {
        en: 'Matching condition required for maximum power transfer',
        hi: 'अधिकतम शक्ति हस्तांतरण के लिए आवश्यक मैचिंग शर्त',
        bn: 'সর্বোচ্চ পাওয়ার ট্রান্সফারের জন্য প্রয়োজনীয় কন্ডিশন'
      }
    },
    {
      symbol: 'P_{max}',
      expression: 'P_{max} = \\frac{V_{th}^2}{4 \\cdot R_{th}}',
      description: {
        en: 'Maximum power transferred to the load at RL = Rth match',
        hi: 'RL = Rth मैचिंग पर लोड को स्थानांतरित अधिकतम शक्ति',
        bn: 'RL = Rth কন্ডিশনে লোডে স্থানান্তরিত সর্বোচ্চ পাওয়ার'
      }
    },
    {
      symbol: '\\eta',
      expression: '\\eta = \\frac{R_L}{R_{th} + R_L} \\times 100\\% \\quad (\\eta = 50\\% \\text{ at } R_L = R_{th})',
      description: {
        en: 'Electrical efficiency equal to exactly 50% under maximum power transfer condition',
        hi: 'अधिकतम शक्ति हस्तांतरण स्थिति के तहत ठीक 50% के बराबर विद्युत दक्षता',
        bn: 'সর্বোচ্চ পাওয়ার ট্রান্সফার অবস্থায় ঠিক ৫০% এর সমান বৈদুতিক दक्षता'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-max-power-transfer',
      title: {
        en: 'Maximum Power Transfer Curve & Equivalent Circuit',
        hi: 'अधिकतम शक्ति हस्तांतरण वक्र एवं समतुल्य परिपथ',
        bn: 'সর্বোচ্চ পাওয়ার ট্রান্সফার কার্ভ ও সমতুল্য সার্কিট'
      },
      caption: {
        en: 'Plot of Load Power PL vs RL showing peak Pmax occurring precisely when RL = Rth.',
        hi: 'RL = Rth पर सटीक रूप से Pmax शिखर दर्शाने वाला PL बनाम RL ग्राफ।',
        bn: 'RL = Rth বিন্দুতে পিক Pmax প্রদর্শনকারী PL বনাম RL গ্রাফ চিত্র।'
      },
      svgType: 'circuit-maxpower-concept'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-maxp-1',
      problem: {
        en: 'A DC source network has a Thevenin voltage Vth = 24 V and Thevenin internal resistance Rth = 8 Ω. Determine: (a) Value of load resistance RL for maximum power transfer, (b) Maximum power Pmax delivered to the load, and (c) Total power supplied by the source at maximum power point.',
        hi: 'एक डीसी स्रोत नेटवर्क का थेवेनिन वोल्टेज Vth = 24 V और आंतरिक प्रतिरोध Rth = 8 Ω है। ज्ञात करें: (a) अधिकतम शक्ति के लिए RL का मान, (b) लोड को दी गई अधिकतम शक्ति Pmax, और (c) स्रोत द्वारा आपूर्ति की गई कुल शक्ति।',
        bn: 'একটি ডিসি নেটওয়ার্কের থেভেনিন ভোল্টেজ Vth = 24 V এবং অভ্যন্তরীণ রেজিস্ট্যান্স Rth = 8 Ω। বের করুন: (ক) সর্বোচ্চ পাওয়ারের জন্য RL এর মান, (খ) লোডে প্রাপ্ত সর্বোচ্চ পাওয়ার Pmax, এবং (গ) সোর্স কর্তৃক প্রদত্ত মোট পাওয়ার।'
      },
      solution: {
        en: 'Given:\n- Thevenin Voltage Vth = 24 V\n- Thevenin Resistance Rth = 8 Ω\n\nPart (a): Load Resistance RL for Max Power\nRL = Rth = 8.0 Ω\n\nPart (b): Maximum Power Pmax Delivered to Load\nPmax = Vth² / (4 · Rth) = (24)² / (4 · 8) = 576 / 32 = 18.0 Watts\n\nPart (c): Total Power Supplied by Source P_total\n- At RL = Rth = 8 Ω, total circuit resistance R_total = Rth + RL = 8 + 8 = 16 Ω\n- Circuit current IL = Vth / R_total = 24 / 16 = 1.5 A\n- Total Power P_total = Vth · IL = 24 V · 1.5 A = 36.0 Watts\n- Notice that Efficiency η = Pmax / P_total = 18 W / 36 W = 50.0%\n\nFinal Answer: RL = 8.0 Ω, Pmax = 18.0 W, P_total = 36.0 W',
        hi: '(a) RL = Rth = 8.0 Ω\n(b) Pmax = 24² / (4 × 8) = 576 / 32 = 18.0 वाट\n(c) IL = 24 / 16 = 1.5 A\nP_total = 24 × 1.5 = 36.0 वाट (दक्षता η = 50%)',
        bn: '(ক) RL = Rth = ৮.০ Ω\n(খ) Pmax = ২৪² / (৪ × ৮) = ৫৭৬ / ৩২ = ১৮.০ ওয়াট\n(গ) IL = ২৪ / ১৬ = ১.৫ A\nP_total = ২৪ × ১.৫ = ৩৬.০ ওয়াট (দক্ষতা η = ৫০%)'
      },
      givenValues: {
        'Vth': '24 V',
        'Rth': '8 Ω'
      },
      finalAnswer: {
        en: 'RL = 8.0 Ω, Pmax = 18.0 Watts, Total Source Power = 36.0 Watts',
        hi: 'RL = 8.0 Ω, Pmax = 18.0 वाट, कुल स्रोत शक्ति = 36.0 वाट',
        bn: 'RL = ৮.০ Ω, Pmax = ১৮.০ ওয়াট, মোট সোর্স পাওয়ার = ৩৬.০ ওয়াট'
      }
    },
    {
      id: 'ex-maxp-2',
      problem: {
        en: 'A circuit consists of a Vs = 30 V source connected with series resistor R1 = 10 Ω and parallel resistor R2 = 40 Ω. An adjustable load RL is connected across terminals A-B. Find the value of RL to absorb maximum power and calculate Pmax.',
        hi: 'एक परिपथ में Vs = 30 V स्रोत R1 = 10 Ω के श्रेणी तथा R2 = 40 Ω के समानांतर है। A-B पर परिवर्तनशील लोड RL जुड़ा है। अधिकतम शक्ति अवशोषित करने के लिए RL का मान और Pmax ज्ञात करें।',
        bn: 'একটি সার্কিটে Vs = 30 V সোর্স R1 = 10 Ω এর সাথে সিরিজে এবং R2 = 40 Ω এর সাথে প্যারালালে যুক্ত। A-B টার্মিনালে পরিবর্তনশীল লোড RL যুক্ত রয়েছে। সর্বোচ্চ পাওয়ারের জন্য RL এবং Pmax নির্ণয় করুন।'
      },
      solution: {
        en: 'Given:\n- Vs = 30 V, R1 = 10 Ω, R2 = 40 Ω\n\nStep 1: Calculate Open-Circuit Thevenin Voltage Vth across A-B\nVth = Vs · [R2 / (R1 + R2)] = 30 · [40 / (10 + 40)] = 30 · (40/50) = 24.0 V\n\nStep 2: Calculate Thevenin Resistance Rth (Deactivate Vs by shorting)\nRth = R1 || R2 = (10 · 40) / (10 + 40) = 400 / 50 = 8.0 Ω\n\nStep 3: Condition for Max Power Transfer\nRL = Rth = 8.0 Ω\n\nStep 4: Calculate Maximum Load Power Pmax\nPmax = Vth² / (4 · Rth) = (24)² / (4 · 8) = 576 / 32 = 18.0 Watts\n\nFinal Answer: RL = 8.0 Ω, Pmax = 18.0 W',
        hi: 'Vth = 30 × (40 / 50) = 24.0 V\nRth = (10 × 40) / 50 = 8.0 Ω\nRL = Rth = 8.0 Ω\nPmax = 24² / (4 × 8) = 18.0 वाट',
        bn: 'Vth = ৩০ × (৪০ / ৫০) = ২৪.০ V\nRth = (১০ × ৪০) / ৫০ = ৮.০ Ω\nRL = Rth = ৮.০ Ω\nPmax = ২৪² / (৪ × ৮) = ১৮.০ ওয়াট'
      },
      givenValues: {
        'Vs': '30 V',
        'R1, R2': '10 Ω, 40 Ω'
      },
      finalAnswer: {
        en: 'RL = 8.0 Ω, Pmax = 18.0 W',
        hi: 'RL = 8.0 Ω, Pmax = 18.0 वाट',
        bn: 'RL = ৮.০ Ω, Pmax = ১৮.০ W'
      }
    },
    {
      id: 'ex-maxp-3',
      problem: {
        en: 'An audio amplifier module has an internal output impedance Rth = 8 Ω and delivers an open-circuit audio signal Vth = 16 V. Compare the power delivered to three different speakers: (a) RL = 4 Ω, (b) RL = 8 Ω, and (c) RL = 16 Ω to verify that power peaks at RL = 8 Ω.',
        hi: 'एक ऑडियो एम्पलीफायर का आंतरिक प्रतिरोध Rth = 8 Ω है और Vth = 16 V देता है। तीन अलग-अलग स्पीकर: (a) RL = 4 Ω, (b) RL = 8 Ω, और (c) RL = 16 Ω को दी गई शक्ति की तुलना करें।',
        bn: 'একটি অডিও অ্যাম্প্লিফায়ারের অভ্যন্তরীণ ইম্পিডেন্স Rth = 8 Ω এবং Vth = 16 V। তিনটি স্পিকারের প্রাপ্ত পাওয়ার তুলনা করুন: (ক) RL = 4 Ω, (খ) RL = 8 Ω, এবং (গ) RL = 16 Ω।'
      },
      solution: {
        en: 'Given:\n- Amplifier Vth = 16 V, Rth = 8 Ω\n\nCase (a): RL = 4 Ω\n- Current IL = Vth / (Rth + RL) = 16 / (8 + 4) = 16 / 12 = 1.333 A\n- Power P_4 = IL² · RL = (1.333)² · 4 = 1.778 · 4 = 7.11 Watts\n\nCase (b): RL = 8 Ω (RL = Rth Match)\n- Current IL = 16 / (8 + 8) = 16 / 16 = 1.0 A\n- Power P_8 = IL² · RL = (1.0)² · 8 = 8.0 Watts (PEAK MAXIMUM POWER)\n\nCase (c): RL = 16 Ω\n- Current IL = 16 / (8 + 16) = 16 / 24 = 0.667 A\n- Power P_16 = IL² · RL = (0.667)² · 16 = 0.444 · 16 = 7.11 Watts\n\nComparison:\nP_8 (8.0 W) > P_4 (7.11 W) and P_16 (7.11 W).\nThis confirms that maximum audio signal power is delivered when load impedance equals source output impedance (8 Ω).',
        hi: '(a) RL = 4 Ω: IL = 16/12 = 1.333 A -> P = 7.11 वाट\n(b) RL = 8 Ω: IL = 16/16 = 1.0 A -> P = 8.0 वाट (अधिकतम)\n(c) RL = 16 Ω: IL = 16/24 = 0.667 A -> P = 7.11 वाट',
        bn: '(ক) RL = 4 Ω: IL = ১৬/১২ = ১.৩৩৩ A -> P = ৭.১১ ওয়াট\n(খ) RL = 8 Ω: IL = ১৬/১৬ = ১.০ A -> P = ৮.০ ওয়াট (সর্বোচ্চ)\n(গ) RL = 16 Ω: IL = ১৬/২৪ = ০.৬৬৭ A -> P = ৭.১১ ওয়াট'
      },
      givenValues: {
        'Vth, Rth': '16 V, 8 Ω',
        'RL values': '4 Ω, 8 Ω, 16 Ω'
      },
      finalAnswer: {
        en: 'Power delivered: 7.11 W at 4 Ω, 8.0 W at 8 Ω (Peak Max), 7.11 W at 16 Ω',
        hi: 'दी गई शक्ति: 4 Ω पर 7.11 W, 8 Ω पर 8.0 W (अधिकतम), 16 Ω पर 7.11 W',
        bn: 'প্রাপ্ত পাওয়ার: ৪ Ω এ ৭.১১ W, ৮ Ω এ ৮.০ W (সর্বোচ্চ), ১৬ Ω এ ৭.১১ W'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Audio amplifier and loudspeaker impedance matching (4 Ω, 8 Ω, 16 Ω speakers)',
      'RF antenna and coaxial transmission line impedance matching (50 Ω / 75 Ω)',
      'Solar PV panel Maximum Power Point Tracking (MPPT) electronic charge controllers'
    ],
    hi: [
      'ऑडियो एम्पलीफायर और लाउडस्पीकर प्रतिबाधा मिलान (4 Ω, 8 Ω, 16 Ω)',
      'आरएफ एंटीना और कोएक्सिएल ट्रांसमिशन लाइन प्रतिबाधा मिलान (50 Ω / 75 Ω)',
      'सोलर पीवी पैनल मैक्सिमम पावर पॉइंट ट्रैकिंग (MPPT) चार्ज कंट्रोलर'
    ],
    bn: [
      'অডিও অ্যাম্প্লিফায়ার ও লাউডস্পিকার ইম্পিডেন্স ম্যাচিং (৪, ৮, ১৬ ওহম)',
      'আরএফ অ্যান্টেন ও কোঅ্যাক্সিয়াল লাইন ইম্পিডেন্স ম্যাচিং (৫০ / ৭৫ ওহম)',
      'সোলার পিভি প্যানেল ম্যাক্সিমাম পাওয়ার পয়েন্ট ট্র্যাকিং (MPPT) চার্জ কন্ট্রোলার'
    ]
  },
  importantPoints: {
    en: [
      'Maximum power transfer occurs when load resistance RL equals Thevenin resistance Rth (RL = Rth).',
      'Maximum power Pmax = Vth² / (4 · Rth).',
      'Electrical efficiency at maximum power point is ALWAYS exactly 50%.',
      'Power distribution grids DO NOT use maximum power transfer because 50% loss is unacceptable; they use RL >> Rth.'
    ],
    hi: [
      'अधिकतम शक्ति हस्तांतरण तब होता है जब लोड प्रतिरोध RL थेवेनिन प्रतिरोध Rth के बराबर होता है।',
      'अधिकतम शक्ति Pmax = Vth² / (4 · Rth)।',
      'अधिकतम शक्ति बिंदु पर विद्युत दक्षता हमेशा ठीक 50% होती है।',
      'पावर ग्रिड में इसका उपयोग नहीं किया जाता क्योंकि 50% ऊर्जा हानि अस्वीकार्य है; वे RL >> Rth का उपयोग करते हैं।'
    ],
    bn: [
      'সর্বোচ্চ পাওয়ার ট্রান্সফার ঘটে যখন লোড রেজিস্ট্যান্স RL সমান থেভেনিন রেজিস্ট্যান্স Rth হয়।',
      'সর্বোচ্চ পাওয়ার Pmax = Vth² / (4 · Rth)।',
      'সর্বোচ্চ পাওয়ার পয়েন্টে বৈদুতিক এফিসিয়েন্সি সর্বদা ঠিক ৫০%।',
      'পাওয়ার গ্রিডে ৫০% অপচয় গ্রহণযোগ্য নয় তাই সেখানে RL >> Rth রাখা হয়।'
    ]
  },
  commonMistakes: {
    en: [
      'Assuming efficiency is 100% at maximum power transfer instead of 50%',
      'Confusing internal source resistance Rth with variable load resistance RL when deriving Pmax',
      'Applying Maximum Power Transfer Theorem directly to power transmission utility grids'
    ],
    hi: [
      'यह मान लेना कि अधिकतम शक्ति हस्तांतरण पर दक्षता 50% के बजाय 100% होती है',
      'Pmax व्युत्पन्न करते समय आंतरिक प्रतिरोध Rth को लोड प्रतिरोध RL से भ्रमित करना',
      'पावर ट्रांसमिशन यूटिलिटी ग्रिड पर सीधे इस प्रमेय को लागू करना'
    ],
    bn: [
      'সর্বোচ্চ পাওয়ার ট্রান্সফারে দক্ষতা ৫০% এর বদলে ১০০% মনে করে ভুল করা',
      'Pmax প্রমাণের সময় সোর্সের Rth এবং পরিবর্তনশীল RL গুলিয়ে ফেলা',
      'পাওয়ার ডিস্ট্রিবিউশন গ্রিডে সরাসরি এই উপপাদ্য প্রয়োগের ভুল চিন্তাধারা'
    ]
  },
  mcqs: [
    {
      id: 'mcq-maxp-1',
      question: {
        en: 'Under the condition of maximum power transfer, what is the electrical efficiency of the system?',
        hi: 'अधिकतम शक्ति हस्तांतरण की स्थिति के तहत, प्रणाली की विद्युत दक्षता क्या होती है?',
        bn: 'সর্বোচ্চ পাওয়ার ট্রান্সফারের শর্তে সার্কিটের বৈদুতিক এফিসিয়েন্সি বা দক্ষতা কত হয়?'
      },
      options: [
        { id: 'opt-a', text: { en: '100%', hi: '100%', bn: '১০০%' } },
        { id: 'opt-b', text: { en: '75%', hi: '75%', bn: '৭৫%' } },
        { id: 'opt-c', text: { en: '50%', hi: '50%', bn: '৫০%' } },
        { id: 'opt-d', text: { en: '25%', hi: '25%', bn: '২৫%' } }
      ],
      correctOptionId: 'opt-c',
      explanation: {
        en: 'At RL = Rth, efficiency η = [RL / (Rth + RL)] × 100% = [Rth / (2·Rth)] × 100% = 50%.',
        hi: 'RL = Rth पर, दक्षता η = [Rth / (2·Rth)] × 100% = 50% होती है।',
        bn: 'RL = Rth হলে, এফিসিয়েন্সি η = [Rth / (২·Rth)] × ১০০% = ৫০%।'
      }
    },
    {
      id: 'mcq-maxp-2',
      question: {
        en: 'If a DC network has a Thevenin resistance Rth = 10 Ω and Vth = 20 V, what is the maximum power that can be delivered to an adjustable load RL?',
        hi: 'यदि किसी परिपथ में Rth = 10 Ω और Vth = 20 V है, तो परिवर्तनशील लोड RL को दी जाने वाली अधिकतम शक्ति क्या है?',
        bn: 'একটি ডিসি সার্কিটে Rth = 10 Ω এবং Vth = 20 V হলে, পরিবর্তনশীল লোড RL এ স্থানান্তরিত সর্বোচ্চ পাওয়ার কত?'
      },
      options: [
        { id: 'opt-a', text: { en: '40 Watts', hi: '40 वाट', bn: '৪০ ওয়াট' } },
        { id: 'opt-b', text: { en: '10 Watts', hi: '10 वाट', bn: '১০ वाट' } },
        { id: 'opt-c', text: { en: '20 Watts', hi: '20 वाट', bn: '২০ ওয়াট' } },
        { id: 'opt-d', text: { en: '5 Watts', hi: '5 वाट', bn: '৫ ওয়াট' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'Pmax = Vth² / (4 · Rth) = (20)² / (4 · 10) = 400 / 40 = 10 Watts.',
        hi: 'Pmax = Vth² / (4 · Rth) = (20)² / (4 · 10) = 400 / 40 = 10 वाट।',
        bn: 'Pmax = Vth² / (৪ · Rth) = (২০)² / (৪ · ১০) = ৪০০ / ৪০ = ১০ ওয়াট।'
      }
    },
    {
      id: 'mcq-maxp-3',
      question: {
        en: 'Why do electrical power transmission utility companies NOT design distribution grids for maximum power transfer?',
        hi: 'विद्युत शक्ति वितरण कंपनियाँ वितरण ग्रिडों को अधिकतम शक्ति हस्तांतरण के लिए क्यों डिजाइन नहीं करती हैं?',
        bn: 'বৈদ্যুতিক পাওয়ার ডিস্ট্রিবিউশন কোম্পানিগুলো কেন সর্বোচ্চ পাওয়ার ট্রান্সফারের জন্য গ্রিড ডিজাইন করে না?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Because voltage would become infinite', hi: 'क्योंकि वोल्टेज अनंत हो जाएगा', bn: 'কারণ ভোল্টেজ অসীম হয়ে যাবে' } },
        { id: 'opt-b', text: { en: 'Because efficiency is only 50%, resulting in huge 50% power loss in internal lines', hi: 'क्योंकि दक्षता केवल 50% होती है, जिससे आंतरिक लाइनों में 50% भारी ऊर्जा हानि होगी', bn: 'কারণ এতে এফিসিয়েন্সি মাত্র ৫০%, যার ফলে লাইনে ৫০% শক্তি অপচয় হবে' } },
        { id: 'opt-c', text: { en: 'Because load resistance cannot be measured', hi: 'क्योंकि लोड प्रतिरोध मापा नहीं जा सकता', bn: 'কারণ লোড রেজিস্ট্যান্স মেপে বের করা যায় না' } },
        { id: 'opt-d', text: { en: 'Because current becomes zero at maximum power', hi: 'क्योंकि अधिकतम शक्ति पर धारा शून्य हो जाती है', bn: 'কারণ সর্বোচ্চ পাওয়ারে কারেন্ট শূন্য হয়ে যায়' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'Power transmission systems prioritize high efficiency (>90%), making 50% line loss completely unacceptable.',
        hi: 'पावर ट्रांसमिशन सिस्टम उच्च दक्षता (>90%) को प्राथमिकता देते हैं, जिससे 50% हानि अस्वीकार्य है।',
        bn: 'পাওয়ার সিস্টেমে উচ্চ এফিসিয়েন্সি (>৯০%) প্রধান লক্ষ্য, তাই ৫০% অপচয় একেবারেই অগ্রহণযোগ্য।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-maxp-1',
      question: {
        en: 'Derive the formula for Maximum Power Pmax = Vth² / (4 · Rth) starting from the load power expression PL = IL² · RL.',
        hi: 'लोड शक्ति व्यंजक PL = IL² · RL से शुरू करते हुए अधिकतम शक्ति Pmax = Vth² / (4 · Rth) के सूत्र का व्युत्पत्ति करें।',
        bn: 'লোড পাওয়ারের সমীকরণ PL = IL² · RL থেকে শুরু করে সর্বোচ্চ পাওয়ার Pmax = Vth² / (4 · Rth) সূত্রের গাণিতিক প্রমাণ লিখুন।'
      },
      hint: {
        en: 'Substitute IL = Vth / (Rth + RL), differentiate PL with respect to RL, set dPL/dRL = 0 to get RL = Rth, then substitute back.',
        hi: 'IL = Vth / (Rth + RL) रखें, RL के सापेक्ष अवकलन करें, dPL/dRL = 0 रखकर RL = Rth प्राप्त करें।',
        bn: 'IL = Vth / (Rth + RL) বসিয়ে dPL/dRL = 0 ধরে RL = Rth বের করে মূল সমীকরণে বসান।'
      },
      answerKey: {
        en: '1. PL = [Vth / (Rth + RL)]² · RL. 2. dPL/dRL = 0 gives (Rth + RL) - 2RL = 0 => RL = Rth. 3. Pmax = [Vth / (2Rth)]² · Rth = Vth² / (4Rth).',
        hi: '1. PL = [Vth / (Rth + RL)]² · RL। 2. dPL/dRL = 0 से RL = Rth। 3. Pmax = [Vth / (2Rth)]² · Rth = Vth² / (4Rth)।',
        bn: '১. PL = [Vth / (Rth + RL)]² · RL। ২. dPL/dRL = 0 বসালে RL = Rth। ৩. Pmax = [Vth / (2Rth)]² · Rth = Vth² / (4Rth)।'
      }
    },
    {
      id: 'pq-maxp-2',
      question: {
        en: 'Explain the fundamental difference between operating goals of power distribution grids vs electronic communication matching networks.',
        hi: 'पावर वितरण ग्रिड बनाम इलेक्ट्रॉनिक संचार मैचिंग नेटवर्क के संचालन लक्ष्यों के बीच मूलभूत अंतर समझाइए।',
        bn: 'পাওয়ার ডিস্ট্রিবিউশন গ্রিড এবং ইলেকট্রনিক্স কমিউনিকেশন সার্কিটের মূল লক্ষ্যগত পার্থক্য ব্যাখ্যা করুন।'
      },
      hint: {
        en: 'Focus on efficiency (>90% vs 50%) and primary parameter being transmitted (energy vs signal power).',
        hi: 'दक्षता (>90% बनाम 50%) और मुख्य लक्ष्य (ऊर्जा संरक्षण बनाम सिग्नल पावर) पर ध्यान केंद्रित करें।',
        bn: 'দক্ষতা (>৯০% বনাম ৫০%) এবং মূল লক্ষ্য (শক্তি সাশ্রয় বনাম সিগন্যাল পাওয়া) বিবেচনা করুন।'
      },
      answerKey: {
        en: 'Power grids aim to minimize energy loss and maximize efficiency (η > 90%, operating at RL >> Rth). Communication networks aim to maximize signal power transfer to the load (RL = Rth), accepting 50% efficiency because signal voltage level is critical.',
        hi: 'पावर ग्रिड ऊर्जा हानि को कम करने और उच्च दक्षता (η > 90%, RL >> Rth) पर कार्य करते हैं। संचार नेटवर्क सिग्नल शक्ति को अधिकतम करने के लिए RL = Rth पर कार्य करते हैं, जहाँ 50% दक्षता स्वीकार्य है।',
        bn: 'পাওয়ার গ্রিডের প্রধান লক্ষ্য অপচয় কমিয়ে উচ্চ দক্ষতা (>৯০%, RL >> Rth) অর্জন করা। কমিউনিকেশন সার্কিটের লক্ষ্য সিগন্যাল পাওয়ার সর্বোচ্চ করা (RL = Rth), যেখানে ৫০% দক্ষতা গ্রহণযোগ্য।'
      }
    }
  ]
};

export const LESSON_RECIPROCITY: Lesson = {
  id: 'lsn-ch4-reciprocity-theorem',
  topicId: 'ch4-reciprocity-theorem',
  order: 15,
  title: {
    en: 'Reciprocity Theorem',
    hi: 'रेसीप्रोसिटी (पारस्परिकता) प्रमेय',
    bn: 'রেসিপ্রোসিটি উপপাদ্য (Reciprocity Theorem)'
  },
  easyExplanation: {
    en: 'The Reciprocity Theorem states that in any linear, bilateral, passive network driven by a single independent source, the ratio of excitation (voltage or current source) at Port 1 to the resulting response (current or voltage) at Port 2 remains unchanged when the positions of excitation and response are interchanged.',
    hi: 'रेसीप्रोसिटी प्रमेय बताता है कि केवल एक स्वतंत्र स्रोत द्वारा संचालित किसी भी रैखिक, द्विपक्षीय, निष्क्रीय नेटवर्क में, पोर्ट 1 पर उत्तेजना (स्रोतः वोल्टेज/धारा) और पोर्ट 2 पर अनुक्रिया (धारा/वोल्टेज) का अनुपात समान रहता है जब उत्तेजना और अनुक्रिया के स्थानों को आपस में बदल दिया जाता है।',
    bn: 'রেসিপ্রোসিটি উপপাদ্য অনুসারে একটি স্বাধীন সোর্সযুক্ত যেকোনো রৈখিক, দ্বিপক্ষীয় ও নিষ্ক্রিয় নেটওয়ার্কে পোর্ট ১ এ সোর্স প্রয়োগে পোর্ট ২ এ প্রাপ্ত রেসপন্সের অনুপাত, সোর্স ও রেসপন্সের অবস্থান অদল-বদল করলেও অভিন্ন থাকে।'
  },
  detailedExplanation: {
    en: '1. Theorem Definition & Principle: In a linear bilateral passive network containing a single independent voltage source V connected at mesh/port 1 that produces a short-circuit current I at mesh/port 2, removing V from port 1 and placing an identical source V at port 2 will produce the EXACT same short-circuit current I at port 1.\n\n2. Transfer Admittance & Impedance Expression:\n- Transfer Admittance Case A (Source V at Port 1, Ammeter at Port 2): Y21 = I2A / V1\n- Transfer Admittance Case B (Source V at Port 2, Ammeter at Port 1): Y12 = I1B / V2\n- According to Reciprocity Theorem: Y21 = Y12  =>  (I2A / V1) = (I1B / V2)\n- If V1 = V2 = V, then I2A = I1B.\n\n3. Verification Procedure:\n- Step 1: Connect independent voltage source V at Port 1. Connect an ideal Ammeter (short circuit) across Port 2. Measure response current I2A.\n- Step 2: Calculate transfer admittance Y21 = I2A / V.\n- Step 3: Remove source from Port 1 and replace Port 1 with an ideal Ammeter. Place identical voltage source V at Port 2. Measure response current I1B.\n- Step 4: Calculate transfer admittance Y12 = I1B / V.\n- Step 5: Verify that I2A = I1B (and Y21 = Y12).\n\n4. Network Requirements & Conditions:\n- Must be Linear: Resistors, inductors, capacitors must obey linear Ohm\'s law.\n- Must be Bilateral: Conduction must be identical in both forward and reverse directions (e.g., pure resistors).\n- Must be Passive: Network must contain NO internal energy sources (no independent batteries inside).\n- Single Independent Source: Reciprocity applies with one independent excitation at a time.\n- Initial Energy Storage MUST be zero.\n\n5. Limitations & Non-Reciprocal Networks:\n- Unilateral Elements: Networks containing diodes, transistors, or rectifiers ARE NOT reciprocal.\n- Dependent Sources: Networks containing controlled sources (VCVS, VCCS, etc.) ARE NOT reciprocal.\n- Non-linear Elements: Varistors, thermistors, magnetic cores break reciprocity.',
    hi: '1. प्रमेय की परिभाषा एवं सिद्धांत: किसी रैखिक द्विपक्षीय निष्क्रीय नेटवर्क में जब पोर्ट 1 पर वोल्टेज स्रोत V लगाने पर पोर्ट 2 पर शॉर्ट-सर्किट धारा I प्राप्त होती है, तो स्रोत V को पोर्ट 2 पर लगाने पर पोर्ट 1 पर ठीक वही शॉर्ट-सर्किट धारा I प्राप्त होगी।\n\n2. ट्रांसफर एडमिटेंस एवं व्यंजक:\n- केस A (पोर्ट 1 पर स्रोत V, पोर्ट 2 पर अमीटर): Y21 = I2A / V1\n- केस B (पोर्ट 2 पर स्रोत V, पोर्ट 1 पर अमीटर): Y12 = I1B / V2\n- रेसीप्रोसिटी नियम अनुसार: Y21 = Y12  =>  I2A = I1B (यदि V1 = V2)।\n\n3. सत्यापन प्रक्रिया:\n- चरण 1: पोर्ट 1 पर V जोड़ें, पोर्ट 2 पर अमीटर जोड़ें। धारा I2A मापें।\n- चरण 2: Y21 = I2A / V ज्ञात करें।\n- चरण 3: पोर्ट 1 पर अमीटर और पोर्ट 2 पर वही स्रोत V लगाएं। धारा I1B मापें।\n- चरण 4: सत्यापित करें कि I2A = I1B है।\n\n4. परिपथ की आवश्यक शर्तें:\n- रैखिक होना चाहिए (Linear)।\n- द्विपक्षीय होना चाहिए (Bilateral)।\n- निष्क्रीय होना चाहिए (Passive - कोई आंतरिक स्वतंत्र स्रोत नहीं)।\n- प्रारंभिक ऊर्जा शून्य होनी चाहिए।\n\n5. सीमाएँ:\n- एकतरफा घटक (डायोड, ट्रांजिस्टर) रेसीप्रोकल नहीं होते।\n- निर्भर स्रोत (Dependent sources) होने पर यह नियम लागू नहीं होता।',
    bn: '১. উপপাদ্যের মূল নীতি: একটি লিনিয়ার বাইল্যাটারাল প্যাসিভ নেটওয়ার্কে পোর্ট ১ এ ভোল্টেজ সোর্স V দিলে পোর্ট ২ এ শর্ট-সার্কিট কারেন্ট I পাওয়া গেলে, সোর্স V কে পোর্ট ২ এ স্থানান্তর করলে পোর্ট ১ এ ঠিক একই শর্ট-সার্কিট কারেন্ট I পাওয়া যাবে।\n\n২. ট্রান্সফার অ্যাডমিট্যান্স সূত্র:\n- কেস A (পোর্ট ১ এ সোর্স V, পোর্ট ২ এ অ্যামিটার): Y21 = I2A / V1\n- কেস B (পোর্ট ২ এ সোর্স V, পোর্ট ১ এ অ্যামিটার): Y12 = I1B / V2\n- রেসিপ্রোসিটি উপপাদ্য অনুযায়ী: Y21 = Y12  =>  I2A = I1B (যদি V1 = V2 হয়)।\n\n৩. প্রমাণ করার নিয়ম:\n- ধাপ ১: পোর্ট ১ এ সোর্স V এবং পোর্ট ২ এ অ্যামিটার যুক্ত করে I2A বের করুন।\n- ধাপ ২: ট্রান্সফার অ্যাডমিট্যান্স Y21 = I2A / V হিসাব করুন।\n- ধাপ ৩: সোর্স ও অ্যামিটারের স্থান অদল-বদল করে পোর্ট ১ এর কারেন্ট I1B মেপে দেখুন।\n- ধাপ ৪: নিশ্চিত করুন যে I2A = I1B (এবং Y21 = Y12)।\n\n৪. প্রয়োজনীয় শর্তাবলী:\n- রৈখিক (Linear) হতে হবে।\n- দ্বিপক্ষীয় (Bilateral) হতে হবে।\n- নিষ্ক্রিয় (Passive) হতে হবে (অভ্যন্তরীণ কোনো সোর্স থাকা যাবে না)।\n\n৫. সীমাবদ্ধতা:\n- একমুখী উপাদান (ডায়োড, ট্রানজিস্টর) থাকলে রেসিপ্রোসিটি কাজ করে না।\n- নির্ভরশীল সোর্স (Dependent sources) থাকলে এটি খাটে না।'
  },
  formulas: [
    {
      symbol: 'Y_{21} = Y_{12}',
      expression: '\\frac{I_{2A}}{V_1} = \\frac{I_{1B}}{V_2} \\quad (\\text{Transfer Admittance Symmetry})',
      description: {
        en: 'Equality of forward and reverse transfer admittances in a linear bilateral passive network',
        hi: 'रैखिक द्विपक्षीय निष्क्रीय नेटवर्क में फॉरवर्ड और रिवर्स ट्रांसफर एडमिटेंस की समानता',
        bn: 'লিনিয়ার বাইল্যাটারাল প্যাসিভ সার্কিটে ফরওয়ার্ড ও রিভার্স ট্রান্সফার অ্যাডমিট্যান্সের সমতা'
      }
    },
    {
      symbol: 'Z_{21} = Z_{12}',
      expression: '\\frac{V_{2A}}{I_1} = \\frac{V_{1B}}{I_2} \\quad (\\text{Transfer Impedance Symmetry})',
      description: {
        en: 'Equality of forward and reverse transfer impedances under open-circuit response conditions',
        hi: 'ओपन-सर्किट अनुक्रिया स्थितियों के तहत फॉरवर्ड और रिवर्स ट्रांसफर प्रतिबाधा की समानता',
        bn: 'ওপেন-সার্কিট রেসপন্স অবস্থায় ফরওয়ার্ড ও রিভার্স ট্রান্সফার ইম্পিডেন্সের সমতা'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-reciprocity-theorem',
      title: {
        en: 'Reciprocity Theorem Port Interchange Diagram',
        hi: 'रेसीप्रोसिटी प्रमेय पोर्ट अदला-बदली आरेख',
        bn: 'রেসিপ্রোসিটি উপপাদ্য পোর্ট বিনিময় চিত্র'
      },
      caption: {
        en: 'Interchanging excitation V and response I between Port 1 and Port 2 demonstrating I2A = I1B.',
        hi: 'पोर्ट 1 और पोर्ट 2 के बीच उत्तेजना V और अनुक्रिया I की अदला-बदली दर्शाने वाला आरेख।',
        bn: 'পোর্ট ১ ও পোর্ট ২ এর মাঝে সোর্স V ও রেসপন্স I বিনিময়ে I2A = I1B প্রদর্শনী চিত্র।'
      },
      svgType: 'circuit-reciprocity-concept'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-recip-1',
      problem: {
        en: 'A symmetric T-network consists of series resistors R1 = 10 Ω, R2 = 15 Ω, and shunt resistor R3 = 20 Ω. Calculate: (a) Case A short-circuit current I2A at Port 2 when a V1 = 20 V DC source is connected at Port 1, (b) Case B short-circuit current I1B at Port 1 when the V2 = 20 V DC source is moved to Port 2, and (c) Verify Reciprocity Theorem.',
        hi: 'एक टी-नेटवर्क में R1 = 10 Ω, R2 = 15 Ω, और शंट R3 = 20 Ω हैं। ज्ञात करें: (a) केस A में पोर्ट 1 पर V1 = 20 V लगाने पर पोर्ट 2 की धारा I2A, (b) केस B में पोर्ट 2 पर V2 = 20 V लगाने पर पोर्ट 1 की धारा I1B, और (c) रेसीप्रोसिटी का सत्यापन करें।',
        bn: 'একটি টি-নেটওয়ার্কে R1 = 10 Ω, R2 = 15 Ω, এবং শান্ট R3 = 20 Ω। বের করুন: (ক) কেস A তে পোর্ট ১ এ V1 = 20 V দিলে পোর্ট ২ এর কারেন্ট I2A, (খ) কেস B তে পোর্ট ২ এ V2 = 20 V দিলে পোর্ট ১ এর কারেন্ট I1B, এবং (গ) রেসিপ্রোসিটি উপপাদ্য প্রমাণ করুন।'
      },
      solution: {
        en: 'Given:\n- R1 = 10 Ω, R2 = 15 Ω, R3 = 20 Ω\n- Excitation Source Voltage V = 20 V\n\nStep 1: Case A — Source V1 = 20 V at Port 1, Ammeter at Port 2 (Port 2 shorted)\n- With Port 2 shorted, R2 is in parallel with R3: R2 || R3 = (15 · 20) / (15 + 20) = 300 / 35 = 8.5714 Ω\n- Total input resistance seen by V1: R_inA = R1 + (R2 || R3) = 10 + 8.5714 = 18.5714 Ω\n- Total supply current from Port 1: I_sA = V1 / R_inA = 20 / 18.5714 = 1.0769 A\n- Short-circuit current I2A at Port 2 via Current Divider Rule:\n  I2A = I_sA · [R3 / (R2 + R3)] = 1.0769 · [20 / (15 + 20)] = 1.0769 · (20/35) = 0.6154 A\n\nStep 2: Case B — Source V2 = 20 V at Port 2, Ammeter at Port 1 (Port 1 shorted)\n- With Port 1 shorted, R1 is in parallel with R3: R1 || R3 = (10 · 20) / (10 + 20) = 200 / 30 = 6.6667 Ω\n- Total input resistance seen by V2: R_inB = R2 + (R1 || R3) = 15 + 6.6667 = 21.6667 Ω\n- Total supply current from Port 2: I_sB = V2 / R_inB = 20 / 21.6667 = 0.9231 A\n- Short-circuit current I1B at Port 1 via Current Divider Rule:\n  I1B = I_sB · [R3 / (R1 + R3)] = 0.9231 · [20 / (10 + 20)] = 0.9231 · (20/30) = 0.6154 A\n\nStep 3: Reciprocity Verification\n- I2A = 0.6154 A and I1B = 0.6154 A\n- Transfer Admittance Y21 = I2A / V1 = 0.6154 / 20 = 0.03077 S\n- Transfer Admittance Y12 = I1B / V2 = 0.6154 / 20 = 0.03077 S\n- Since Y21 = Y12 (and I2A = I1B), Reciprocity Theorem is VERIFIED.',
        hi: 'केस A: R2 || R3 = 8.5714 Ω\nR_inA = 18.5714 Ω -> I_sA = 1.0769 A\nI2A = 1.0769 × (20 / 35) = 0.6154 A\n\nकेस B: R1 || R3 = 6.6667 Ω\nR_inB = 21.6667 Ω -> I_sB = 0.9231 A\nI1B = 0.9231 × (20 / 30) = 0.6154 A\n\nI2A = I1B = 0.6154 A। रेसीप्रोसिटी प्रमेय सिद्ध हुआ।',
        bn: 'কেস A: R2 || R3 = ৮.৫৭১৪ Ω\nR_inA = ১৮.৫৭১৪ Ω -> I_sA = ১.০৭৬৯ A\nI2A = ১.০৭৬৯ × (২০ / ৩৫) = ০.৬১৫৪ A\n\nকেস B: R1 || R3 = ৬.৬৬৬৭ Ω\nR_inB = ২১.৬৬৬৭ Ω -> I_sB = ০.৯২৩১ A\nI1B = ০.৯২৩১ × (২০ / ৩০) = ০.৬১৫৪ A\n\nI2A = I1B = ০.৬১৫৪ A। রেসিপ্রোসিটি উপপাদ্য প্রমাণিত।'
      },
      givenValues: {
        'V': '20 V',
        'R1, R2, R3': '10 Ω, 15 Ω, 20 Ω'
      },
      finalAnswer: {
        en: 'Case A Current I2A = 0.6154 A, Case B Current I1B = 0.6154 A (I2A = I1B Verified)',
        hi: 'केस A धारा I2A = 0.6154 A, केस B धारा I1B = 0.6154 A (I2A = I1B सिद्ध)',
        bn: 'কেস A কারেন্ট I2A = ০.৬১৫৪ A, কেস B কারেন্ট I1B = ০.৬১৫৪ A (I2A = I1B প্রমাণিত)'
      }
    },
    {
      id: 'ex-recip-2',
      problem: {
        en: 'A Pi-network has series resistor R_a = 10 Ω connected between Port 1 and Port 2, with shunt resistor R_b = 20 Ω at Port 1 and shunt resistor R_c = 20 Ω at Port 2. Verify Reciprocity Theorem by evaluating transfer admittance Y21 and Y12 when a 10 V source is applied.',
        hi: 'एक पाई-नेटवर्क में पोर्ट 1 और 2 के बीच R_a = 10 Ω, पोर्ट 1 पर शंट R_b = 20 Ω तथा पोर्ट 2 पर शंट R_c = 20 Ω हैं। 10 V स्रोत के लिए ट्रांसफर एडमिटेंस Y21 और Y12 ज्ञात करके रेसीप्रोसिटी सत्यापित करें।',
        bn: 'একটি পাই-নেটওয়ার্কে R_a = 10 Ω, পোর্ট ১ এ R_b = 20 Ω এবং পোর্ট ২ এ R_c = 20 Ω। ১০ V সোর্সের জন্য Y21 এবং Y12 হিসাব করে রেসিপ্রোসিটি প্রমাণ করুন।'
      },
      solution: {
        en: 'Given:\n- Pi-network parameters: R_a = 10 Ω, R_b = 20 Ω, R_c = 20 Ω\n- Excitation Voltage V = 10 V\n\nStep 1: Case A — V1 = 10 V at Port 1, Port 2 Shorted\n- With Port 2 shorted, shunt resistor R_c is short-circuited (0 V across it).\n- Resistor R_a connects directly from Port 1 to the shorted Port 2.\n- Current I2A through shorted Port 2 comes entirely through series branch R_a:\n  I2A = V1 / R_a = 10 V / 10 Ω = 1.0 A\n- Transfer Admittance Y21 = I2A / V1 = 1.0 A / 10 V = 0.10 Siemens (S)\n\nStep 2: Case B — V2 = 10 V at Port 2, Port 1 Shorted\n- With Port 1 shorted, shunt resistor R_b is short-circuited.\n- Resistor R_a connects directly from Port 2 to the shorted Port 1.\n- Current I1B through shorted Port 1 comes entirely through series branch R_a:\n  I1B = V2 / R_a = 10 V / 10 Ω = 1.0 A\n- Transfer Admittance Y12 = I1B / V2 = 1.0 A / 10 V = 0.10 Siemens (S)\n\nConclusion:\nSince Y21 = Y12 = 0.10 S (and I2A = I1B = 1.0 A), Reciprocity Theorem is fully verified.',
        hi: 'केस A: I2A = 10 / 10 = 1.0 A -> Y21 = 1.0 / 10 = 0.10 S\nकेस B: I1B = 10 / 10 = 1.0 A -> Y12 = 1.0 / 10 = 0.10 S\nY21 = Y12 = 0.10 S। सिद्ध हुआ।',
        bn: 'কেস A: I2A = ১০ / ১০ = ১.০ A -> Y21 = ১.০ / ১০ = ০.১০ S\nকেস B: I1B = ১০ / ১০ = ১.০ A -> Y12 = ১.০ / ১০ = ০.১০ S\nY21 = Y12 = ০.১০ S। প্রমাণিত।'
      },
      givenValues: {
        'V': '10 V',
        'R_a, R_b, R_c': '10 Ω, 20 Ω, 20 Ω'
      },
      finalAnswer: {
        en: 'Y21 = Y12 = 0.10 Siemens, I2A = I1B = 1.0 A (Reciprocity Verified)',
        hi: 'Y21 = Y12 = 0.10 सीमेंस, I2A = I1B = 1.0 A (रेसीप्रोसिटी सिद्ध)',
        bn: 'Y21 = Y12 = ০.১০ সিমেন্স, I2A = I1B = ১.০ A (রেসিপ্রোসিটি প্রমাণিত)'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Two-port network parameter matrix (Z-parameters, Y-parameters, h-parameters) modeling',
      'Antenna radiation pattern reciprocity (transmitting vs receiving radiation resistance and gain)',
      'Acoustic transducer and sonar transducer calibration (microphone/speaker duality)'
    ],
    hi: [
      'टू-पोर्ट नेटवर्क पैरामीटर मैट्रिक्स (Z-पैरामीटर, Y-पैरामीटर) मॉडलिंग',
      'एंटीना विकिरण पैटर्न पारस्परिकता (प्रसारण बनाम रिसेप्शन गेन)',
      'ध्वनिक ट्रांसड्यूसर और सोनार ट्रांसड्यूसर कैलिब्रेशन'
    ],
    bn: [
      'টু-পোর্ট নেটওয়ার্ক প্যারামিটার ম্যাট্রিক্স (Z-প্যারামিটার, Y-প্যারামিটার) মডেলিং',
      'অ্যান্টেনা বিকিরণ প্যাটার্ন রেসিপ্রোসিটি (ট্রান্সমিটিং ও রিসিভিং গেইন)',
      'অ্যাকোস্টিক ট্র্যান্সডিউসার ও সোনার ক্যাালিব্রেশন'
    ]
  },
  importantPoints: {
    en: [
      'Reciprocity Theorem applies strictly to linear, bilateral, passive networks.',
      'The ratio of excitation to response is identical before and after interchanging source and ammeter (Y21 = Y12).',
      'Initial energy storage must be zero.',
      'Networks containing unilateral components (diodes, transistors) or dependent sources are NOT reciprocal.'
    ],
    hi: [
      'रेसीप्रोसिटी प्रमेय केवल रैखिक, द्विपक्षीय, निष्क्रीय नेटवर्कों पर लागू होता है।',
      'स्रोत और अमीटर की अदला-बदली से पहले और बाद में उत्तेजना और अनुक्रिया का अनुपात समान रहता है (Y21 = Y12)।',
      'प्रारंभिक ऊर्जा शून्य होनी चाहिए।',
      'एकतरफा घटकों (डायोड) या निर्भर स्रोतों वाले नेटवर्क रेसीप्रोकल नहीं होते।'
    ],
    bn: [
      'রেসিপ্রোসিটি উপপাদ্য কেবলমাত্র লিনিয়ার, বাইল্যাটারাল, প্যাসিভ সার্কিটে প্রযোজ্য।',
      'সোর্স ও অ্যামিটার অদল-বদলের পূর্বে ও পরে অনুপাত অভিন্ন থাকে (Y21 = Y12)।',
      'প্রাথমিক সঞ্চিত শক্তি শূন্য হতে হবে।',
      'একমুখী উপাদান (ডায়োড, ট্রানজিস্টর) বা নির্ভরশীল সোর্স থাকলে এটি কাজ করে না।'
    ]
  },
  commonMistakes: {
    en: [
      'Attempting to apply Reciprocity Theorem to networks containing PN junction diodes or transistors',
      'Applying the theorem to circuits containing controlled (dependent) sources',
      'Failing to keep internal branch impedances unchanged when relocating the excitation source'
    ],
    hi: [
      'पीएन जंक्शन डायोड या ट्रांजिस्टर वाले नेटवर्कों पर रेसीप्रोसिटी लागू करने का प्रयास करना',
      'नियंत्रित (निर्भर) स्रोतों वाले परिपथों पर प्रमेय लागू करना',
      'स्रोत को स्थानांतरित करते समय आंतरिक शाखा प्रतिरोधों को अपरिवर्तित रखने में विफल रहना'
    ],
    bn: [
      'পিএন জংশন ডায়োড বা ট্রানজিস্টরযুক্ত সার্কিটে রেসিপ্রোসিটি প্রয়োগের চেষ্টা করা',
      'নির্ভরশীল সোর্স থাকা সত্ত্বেও ভুলবশত উপপাদ্য প্রয়োগ করা',
      'সোর্স সরানোর সময় সংশ্লিষ্ট শাখার অভ্যন্তরীণ রেজিস্ট্যান্স একই না রাখা'
    ]
  },
  mcqs: [
    {
      id: 'mcq-recip-1',
      question: {
        en: 'The Reciprocity Theorem is applicable ONLY to networks that are:',
        hi: 'रेसीप्रोसिटी प्रमेय केवल उन नेटवर्कों पर लागू होता है जो हैं:',
        bn: 'রেসিপ্রোসিটি উপপাদ্য কেবলমাত্র সেই সব সার্কিটে প্রযোজ্য যেগুলো হলো:'
      },
      options: [
        { id: 'opt-a', text: { en: 'Non-linear and unilateral', hi: 'गैर-रेखीय और एकतरफा', bn: 'অ-রৈখিক ও একমুখী' } },
        { id: 'opt-b', text: { en: 'Linear, bilateral, and passive', hi: 'रैखिक, द्विपक्षीय, और निष्क्रीय', bn: 'রৈখিক, দ্বিপক্ষীয় ও নিষ্ক্রিয়' } },
        { id: 'opt-c', text: { en: 'Active with dependent sources', hi: 'निर्भर स्रोतों वाले सक्रिय', bn: 'নির্ভরশীল সোর্সযুক্ত সক্রিয়' } },
        { id: 'opt-d', text: { en: 'Unilateral with initial energy storage', hi: 'प्रारंभिक ऊर्जा वाले एकतरफा', bn: 'প্রাথমিক শক্তিযুক্ত একমুখী' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'Reciprocity requires linear Ohm\'s law behavior, identical bidirectional conduction (bilateral), and no internal active sources (passive).',
        hi: 'रेसीप्रोसिटी के लिए रैखिक व्यवहार, दोनों दिशाओं में समान संचालन (द्विपक्षीय) और कोई आंतरिक सक्रिय स्रोत नहीं (निष्क्रीय) होना आवश्यक है।',
        bn: 'রেসিপ্রোসিটির জন্য রৈখিক আচরণ, উভমুখী পরিবহন (বাইল্যাটারাল) এবং কোনো অভ্যন্তরীণ অ্যাক্টিভ সোর্স না থাকা (প্যাসিভ) বাধ্যতামূলক।'
      }
    },
    {
      id: 'mcq-recip-2',
      question: {
        en: 'Which component presence in a network breaks the validity of the Reciprocity Theorem?',
        hi: 'परिपथ में किस घटक की उपस्थिति रेसीप्रोसिटी प्रमेय की वैधता को समाप्त कर देती है?',
        bn: 'সার্কিটে নিচের কোন উপাদানটি থাকলে রেসিপ্রোসিটি উপপাদ্য অকার্যকর হয়ে যায়?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Pure Carbon Resistor', hi: 'शुद्ध कार्बन प्रतिरोधक', bn: 'বিশুদ্ধ কার্বন রেজিস্টর' } },
        { id: 'opt-b', text: { en: 'Air-core Inductor', hi: 'एयर-कोर प्रेरक', bn: 'এয়ার-কোর ইনডাক্টর' } },
        { id: 'opt-c', text: { en: 'PN Junction Diode', hi: 'पीएन जंक्शन डायोड', bn: 'पीएन जंक्शन डायोड' } },
        { id: 'opt-d', text: { en: 'Mica Capacitor', hi: 'मायका संधारित्र', bn: 'মাইকা ক্যাপাসিটর' } }
      ],
      correctOptionId: 'opt-c',
      explanation: {
        en: 'Diodes are unilateral semiconductor components that conduct current in only one direction, violating bilateral symmetry.',
        hi: 'डायोड एकतरफा सेमीकंडक्टर घटक हैं जो केवल एक दिशा में धारा प्रवाहित करते हैं, जिससे द्विपक्षीय समरूपता समाप्त हो जाती है।',
        bn: 'ডায়োড একমুখী সেমিকন্ডাক্টর যা কেবল একদিকে কারেন্ট পাঠায়, ফলে বাইল্যাটারাল সামঞ্জস্য নষ্ট হয়।'
      }
    },
    {
      id: 'mcq-recip-3',
      question: {
        en: 'In terms of two-port network parameters, Reciprocity Theorem guarantees that:',
        hi: 'टू-पोर्ट नेटवर्क पैरामीटर के संदर्भ में, रेसीप्रोसिटी प्रमेय गारंटी देता है कि:',
        bn: 'টু-পোর্ট নেটওয়ার্ক প্যারামিটারের ক্ষেত্রে, রেসিপ্রোসিটি উপপাদ্য কী নিশ্চিত করে?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Y21 = Y12 and Z21 = Z12', hi: 'Y21 = Y12 और Z21 = Z12', bn: 'Y21 = Y12 এবং Z21 = Z12' } },
        { id: 'opt-b', text: { en: 'Y11 = Y22 and Z11 = Z22', hi: 'Y11 = Y22 और Z11 = Z22', bn: 'Y11 = Y22 এবং Z11 = Z22' } },
        { id: 'opt-c', text: { en: 'Z11 = 0 and Z22 = 0', hi: 'Z11 = 0 और Z22 = 0', bn: 'Z11 = 0 এবং Z22 = 0' } },
        { id: 'opt-d', text: { en: 'Y21 = -Y12', hi: 'Y21 = -Y12', bn: 'Y21 = -Y12' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'Symmetry of transfer admittances (Y21 = Y12) and transfer impedances (Z21 = Z12) is the fundamental mathematical expression of reciprocity.',
        hi: 'ट्रांसफर एडमिटेंस (Y21 = Y12) और ट्रांसफर प्रतिबाधा (Z21 = Z12) की समरूपता रेसीप्रोसिटी का मूल गणितीय व्यंजक है।',
        bn: 'ট্রান্সফার অ্যাডমিট্যান্স (Y21 = Y12) এবং ইম্পিডেন্সের (Z21 = Z12) সমতা হলো রেসিপ্রোসিটির মূল গাণিতিক রূপ।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-recip-1',
      question: {
        en: 'State the Reciprocity Theorem and list four necessary circuit conditions required for its validity.',
        hi: 'रेसीप्रोसिटी प्रमेय लिखिए और इसकी वैधता के लिए आवश्यक चार परिपथ शर्तें सूचीबद्ध करें।',
        bn: 'রেসিপ্রোসিটি উপপাদ্যটি বিবৃত করুন এবং এটি কার্যকর হওয়ার চারটি প্রয়োজনীয় শর্ত লিখুন।'
      },
      hint: {
        en: 'Recall requirements regarding linearity, bilateral conduction, passive elements, and independent source count.',
        hi: 'रैखिक, द्विपक्षीय, निष्क्रीय घटक और स्वतंत्र स्रोतों की संख्या संबंधी आवश्यकताओं को याद करें।',
        bn: 'রৈখিকতা, দ্বিপক্ষীয় বৈশিষ্ট্য, নিষ্ক্রিয় উপাদান ও স্বাধীন সোর্সের শর্ত মনে করুন।'
      },
      answerKey: {
        en: 'Theorem: Ratio of excitation at Port 1 to response at Port 2 equals ratio when source & response are swapped. Conditions: 1. Linear elements only. 2. Bilateral conduction. 3. Passive network (no active internal sources). 4. Single independent excitation source.',
        hi: 'प्रमेय: पोर्ट 1 पर स्रोत और पोर्ट 2 की अनुक्रिया का अनुपात अदला-बदली के बाद समान रहता है। शर्तें: 1. केवल रैखिक घटक। 2. द्विपक्षीय संचालन। 3. निष्क्रीय परिपथ। 4. केवल एक स्वतंत्र स्रोत।',
        bn: 'উপপাদ্য: সোর্স ও রেসপন্সের স্থান বিনিময়ের পূর্বে ও পরে অনুপাত অভিন্ন থাকে। শর্তাবলী: ১. কেবল লিনিয়ার উপাদান। ২. বাইল্যাটারাল পরিবহন। ৩. প্যাসিভ সার্কিট। ৪. একটিমাত্র স্বাধীন সোর্স।'
      }
    },
    {
      id: 'pq-recip-2',
      question: {
        en: 'Explain why antenna radiation patterns satisfy reciprocity between transmitting and receiving modes.',
        hi: 'समझाइए कि एंटीना विकिरण पैटर्न ट्रांसमिटिंग और रिसीविंग मोड के बीच पारस्परिकता का पालन क्यों करते हैं।',
        bn: 'ট্রান্সমিটিং ও রিসিভিং উভয় মোডে অ্যান্টেনার রেডিয়েশন প্যাটার্ন কেন রেসিপ্রোসিটি মেনে চলে ব্যাখ্যা করুন।'
      },
      hint: {
        en: 'Consider electromagnetic wave propagation and passive linear antenna conductor properties.',
        hi: 'विद्युत चुम्बकीय तरंग प्रसार और निष्क्रीय रैखिक एंटीना चालकों के गुणों पर विचार करें।',
        bn: 'ইলেক্ট্রোম্যাগনেটিক ওয়েভ এবং প্যাসিভ লিনিয়ার অ্যান্টেনা কন্ডাক্টরের ধর্ম চিন্তা করুন।'
      },
      answerKey: {
        en: 'Antenna conductors and free space form a linear bilateral passive electromagnetic medium. By Reciprocity Theorem, directional gain, radiation impedance, and effective aperture are identical whether transmitting or receiving.',
        hi: 'एंटीना चालक और मुक्त आकाश एक रैखिक द्विपक्षीय निष्क्रीय माध्यम बनाते हैं। रेसीप्रोसिटी नियम से, दिशात्मक गेन और प्रतिबाधा ट्रांसमिटिंग और रिसीविंग दोनों में समान होती है।',
        bn: 'অ্যান্টেনা ও ফাকা স্থান একটি লিনিয়ার বাইল্যাটারাল প্যাসিভ মাধ্যম গঠন করে। রেসিপ্রোসিটি উপপাদ্য অনুযায়ী ডিরেকশনাল গেইন ও ইম্পিডেন্স উভয় মোডেই অভিন্ন থাকে।'
      }
    }
  ]
};

export const LESSON_SOURCE_TRANSFORMATION: Lesson = {
  id: 'lsn-ch4-source-transformation',
  topicId: 'ch4-source-transformation',
  order: 16,
  title: {
    en: 'Source Transformation Techniques',
    hi: 'स्रोत रूपांतरण तकनीक (Source Transformation)',
    bn: 'সোর্স ট্রান্সফরমেশন পদ্ধতি'
  },
  easyExplanation: {
    en: 'Source transformation is an electrical simplification technique that allows us to replace a practical voltage source (voltage source in series with a resistor) with an equivalent practical current source (current source in parallel with a resistor), and vice versa, without altering voltages or currents in the rest of the circuit.',
    hi: 'स्रोत रूपांतरण एक विद्युत सरलीकरण तकनीक है जिसके द्वारा एक व्यवहार्य वोल्टेज स्रोत (श्रृंखला प्रतिरोध युक्त वोल्टेज स्रोत) को एक समानांतर प्रतिरोध वाले व्यवहार्य धारा स्रोत में या इसके विपरीत बदला जा सकता है, जिससे शेष परिपथ पर कोई प्रभाव नहीं पड़ता।',
    bn: 'সোর্স ট্রান্সফরমেশন হলো একটি সার্কিট সহজীকরণ পদ্ধতি যার মাধ্যমে একটি ব্যবহারিক ভোল্টেজ সোর্সকে (সিরিজ রেজিস্টরসহ) একটি সমতুল্য ব্যবহারিক কারেন্ট সোর্সে (প্যারালাল রেজিস্টরসহ) এবং এর বিপরীত রূপান্তর করা যায়, যা বহিস্থ সার্কিটের ভোল্টেজ বা কারেন্ট অপরিবর্তিত রাখে।'
  },
  detailedExplanation: {
    en: 'A practical voltage source consists of an ideal independent voltage source Vs in series with an internal resistance Rs. An equivalent practical current source consists of an ideal independent current source Is in parallel with an internal resistance Rp.\n\nAccording to Ohm\'s Law, the equivalence relationship between the parameters is:\nIs = Vs / Rs  or  Vs = Is × Rp\nand Rp = Rs.\n\nKey Engineering Principles:\n1. Terminal Equivalence: At terminals A-B, both sources produce identical open-circuit voltage (Voc = Vs) and identical short-circuit current (Isc = Is).\n2. Dual Transformation: Transformation works in both directions (Voltage Source ↔ Current Source).\n3. Internal Resistance Value: The numerical value of the series resistance Rs remains exactly equal to the parallel resistance Rp.\n4. Arrow and Polarity Direction: The current arrow of the equivalent current source points toward the positive terminal (+) of the original voltage source.',
    hi: 'एक व्यावहारिक वोल्टेज स्रोत में एक आदर्श वोल्टेज स्रोत Vs के साथ श्रेणी में आंतरिक प्रतिरोध Rs जुड़ा होता है। एक समतुल्य व्यवहार्य धारा स्रोत में आदर्श धारा स्रोत Is के समानांतर में प्रतिरोध Rp जुड़ा होता है।\n\nओम के नियम के अनुसार, संबंधों का सूत्र है:\nIs = Vs / Rs  अथवा  Vs = Is × Rp\nतथा Rp = Rs।\n\nमूल सिद्धांत:\n1. टर्मिनल समतुल्यता: टर्मिनल A-B पर दोनों स्रोत समान ओपन-सर्किट वोल्टेज (Voc = Vs) और समान शॉर्ट-सर्किट धारा (Isc = Is) उत्पन्न करते हैं।\n2. द्विमार्गी रूपांतरण: रूपांतरण दोनों दिशाओं में संभव है (वोल्टेज स्रोत ↔ धारा स्रोत)।\n3. आंतरिक प्रतिरोध का मान: श्रेणी प्रतिरोध Rs का मान समानांतर प्रतिरोध Rp के समान रहता है।\n4. धारा की दिशा: धारा स्रोत के तीर की दिशा मूल वोल्टेज स्रोत के धनात्मक (+) टर्मिनल की ओर होती है।',
    bn: 'একটি ব্যবহারিক ভোল্টেজ সোর্সে আদর্শ ভোল্টেজ সোর্স Vs এর সাথে সিরিজে অভ্যন্তরীণ রেজিস্ট্যান্স Rs যুক্ত থাকে। এর সমতুল্য ব্যবহারিক কারেন্ট সোর্সে একটি কারেন্ট সোর্স Is এর সাথে প্যারালালে রেজিস্ট্যান্স Rp যুক্ত থাকে।\n\nওহমের সূত্রের মাধ্যমে পারস্পরিক গাণিতিক সম্পর্ক হলো:\nIs = Vs / Rs  অথবা  Vs = Is × Rp\nএবং Rp = Rs।\n\nমূল ইঞ্জিনিয়ারিং নীতিমালা:\n১. টার্মিনাল সমতুল্যতা: A-B টার্মিনালে উভয় সোর্সই অভিন্ন ওপেন-সার্কিট ভোল্টেজ (Voc = Vs) এবং অভিন্ন শর্ট-সার্কিট কারেন্ট (Isc = Is) প্রদান করে।\n২. উভমুখী রূপান্তর: ভোল্টেজ সোর্স থেকে কারেন্ট সোর্স এবং কারেন্ট সোর্স থেকে ভোল্টেজ সোর্সে রূপান্তর উভয়ই সম্ভব।\n৩. রেজিস্ট্যান্সের মান: সিরিজ রেজিস্ট্যান্স Rs এর মান প্যারালাল রেজিস্ট্যান্স Rp এর সমান থাকে।\n৪. দিকনির্দেশনা: কারেন্ট সোর্সের তীরের দিক মূল ভোল্টেজ সোর্সের ধনাত্মক (+) টার্মিনালের দিকে নির্দেশ করে।'
  },
  formulas: [
    {
      symbol: 'Is',
      expression: 'Is = Vs / Rs',
      description: {
        en: 'Equivalent current source value derived from voltage source Vs and series resistance Rs',
        hi: 'वोल्टेज स्रोत Vs और श्रेणी प्रतिरोध Rs से प्राप्त समतुल्य धारा स्रोत मान',
        bn: 'ভোল্টেজ সোর্স Vs ও সিরিজ রেজিস্ট্যান্স Rs থেকে প্রাপ্ত সমতুল্য কারেন্ট সোর্সের মান'
      }
    },
    {
      symbol: 'Vs',
      expression: 'Vs = Is × Rp',
      description: {
        en: 'Equivalent voltage source value derived from current source Is and parallel resistance Rp',
        hi: 'धारा स्रोत Is और समानांतर प्रतिरोध Rp से प्राप्त समतुल्य वोल्टेज स्रोत मान',
        bn: 'কারেন্ট সোর্স Is ও প্যারালাল রেজিস্ট্যান্স Rp থেকে প্রাপ্ত সমতুল্য ভোল্টেজ সোর্সের মান'
      }
    },
    {
      symbol: 'Rp = Rs',
      expression: 'Rp = Rs',
      description: {
        en: 'Internal resistance magnitude remains invariant during source transformation',
        hi: 'स्रोत रूपांतरण के दौरान आंतरिक प्रतिरोध का मान अपरिवर्तित रहता है',
        bn: 'সোর্স ট্রান্সফরমেশনের সময় অভ্যন্তরীণ রেজিস্ট্যান্স অপরিবর্তित থাকে'
      }
    }
  ],
  solvedExamples: [
    {
      id: 'ex-st-1',
      problem: {
        en: 'Convert a practical voltage source with Vs = 24V and series resistance Rs = 6 Ω into an equivalent practical current source.',
        hi: 'Vs = 24V और श्रेणी प्रतिरोध Rs = 6 Ω वाले एक व्यावहारिक वोल्टेज स्रोत को समतुल्य धारा स्रोत में बदलें।',
        bn: 'Vs = 24V এবং সিরিজ রেজিস্ট্যান্স Rs = 6 Ω বিশিষ্ট ভোল্টেজ সোর্সকে সমতুল্য কারেন্ট সোর্সে রূপান্তর করুন।'
      },
      solution: {
        en: 'Step 1: Calculate equivalent current source magnitude:\nIs = Vs / Rs = 24V / 6 Ω = 4.0 A.\nStep 2: Determine parallel resistance value:\nRp = Rs = 6.0 Ω.\nConclusion: The equivalent source consists of a 4.0 A current source in parallel with a 6.0 Ω resistor.',
        hi: 'चरण 1: समतुल्य धारा स्रोत मान की गणना करें:\nIs = Vs / Rs = 24V / 6 Ω = 4.0 A।\nचरण 2: समानांतर प्रतिरोध मान ज्ञात करें:\nRp = Rs = 6.0 Ω।\nनिष्कर्ष: समतुल्य स्रोत में 4.0 A का धारा स्रोत 6.0 Ω के समानांतर प्रतिरोध के साथ जुड़ा होगा।',
        bn: 'ধাপ ১: সমতুল্য কারেন্ট সোর্সের মান হিসাব করুন:\nIs = Vs / Rs = 24V / 6 Ω = 4.0 A।\nধাপ ২: প্যারালাল রেজিস্ট্যান্সের মান নির্ধারণ করুন:\nRp = Rs = 6.0 Ω।\nসিদ্ধান্ত: সমতুল্য সোর্সে একটি 4.0 A কারেন্ট সোর্স 6.0 Ω প্যারালাল রেজিস্টরের সাথে যুক্ত থাকবে।'
      },
      givenValues: { 'Vs': '24 V', 'Rs': '6 Ω' },
      finalAnswer: {
        en: 'Is = 4.0 A in parallel with Rp = 6.0 Ω',
        hi: 'Is = 4.0 A समानांतर में Rp = 6.0 Ω के साथ',
        bn: 'Is = 4.0 A প্যারালালে Rp = 6.0 Ω এর সাথে'
      }
    },
    {
      id: 'ex-st-2',
      problem: {
        en: 'A current source of Is = 5.0 A is connected in parallel with Rp = 10 Ω. Convert this into an equivalent voltage source and find the terminal voltage across a load resistor RL = 15 Ω.',
        hi: 'Is = 5.0 A का धारा स्रोत Rp = 10 Ω के समानांतर में जुड़ा है। इसे समतुल्य वोल्टेज स्रोत में बदलें और RL = 15 Ω लोड पर वोल्टेज ज्ञात करें।',
        bn: 'Is = 5.0 A কারেন্ট সোর্স Rp = 10 Ω এর সাথে প্যারালালে যুক্ত। একে সমতুল্য ভোল্টেজ সোর্সে রূপান্তর করুন এবং RL = 15 Ω লোডের টার্মিনাল ভোল্টেজ নির্ণয় করুন।'
      },
      solution: {
        en: 'Step 1: Calculate equivalent voltage Vs:\nVs = Is × Rp = 5.0 A × 10 Ω = 50 V.\nStep 2: Equivalent series resistance Rs = Rp = 10 Ω.\nStep 3: Calculate load terminal voltage VL across RL = 15 Ω:\nVL = Vs × [RL / (Rs + RL)] = 50 V × [15 / (10 + 15)] = 50 × (15/25) = 30.0 V.',
        hi: 'चरण 1: समतुल्य वोल्टेज Vs की गणना करें:\nVs = Is × Rp = 5.0 A × 10 Ω = 50 V।\nचरण 2: श्रेणी प्रतिरोध Rs = Rp = 10 Ω।\nचरण 3: RL = 15 Ω पर टर्मिनल वोल्टेज VL ज्ञात करें:\nVL = Vs × [RL / (Rs + RL)] = 50 V × [15 / (10 + 15)] = 30.0 V।',
        bn: 'ধাপ ১: সমতুল্য ভোল্টেজ Vs হিসাব করুন:\nVs = Is × Rp = 5.0 A × 10 Ω = 50 V।\nধাপ ২: সিরিজ রেজিস্ট্যান্স Rs = Rp = 10 Ω।\nধাপ ৩: RL = 15 Ω লোডের টার্মিনাল ভোল্টেজ VL হিসাব করুন:\nVL = Vs × [RL / (Rs + RL)] = 50 V × [15 / (10 + 15)] = 30.0 V।'
      },
      givenValues: { 'Is': '5.0 A', 'Rp': '10 Ω', 'RL': '15 Ω' },
      finalAnswer: {
        en: 'Vs = 50 V, Rs = 10 Ω, VL = 30.0 V',
        hi: 'Vs = 50 V, Rs = 10 Ω, VL = 30.0 V',
        bn: 'Vs = 50 V, Rs = 10 Ω, VL = 30.0 V'
      }
    },
    {
      id: 'ex-st-3',
      problem: {
        en: 'Use repeated source transformations to simplify a network containing a 12V source in series with 3 Ω, connected in parallel with a 2A source having 6 Ω parallel resistance, and find current through a 4 Ω load.',
        hi: 'बारंबार स्रोत रूपांतरण का उपयोग करके 12V श्रेणी 3 Ω और 2A समानांतर 6 Ω वाले परिपथ को सरल बनाएं और 4 Ω लोड धारा ज्ञात करें।',
        bn: 'পুনরাবৃত্ত সোর্স ট্রান্সফরমেশন ব্যবহার করে ১২V সোর্স (৩ Ω সিরিজে) এবং ২A সোর্স (৬ Ω প্যারালালে) এর সার্কিট সহজ করে ৪ Ω লোড কারেন্ট বের করুন।'
      },
      solution: {
        en: 'Step 1: Convert 12V + 3 Ω voltage source to current source:\nIs1 = 12 / 3 = 4 A, Rp1 = 3 Ω.\nStep 2: Combine parallel current sources and resistors:\nTotal Is = Is1 + Is2 = 4 A + 2 A = 6 A.\nTotal Rp = (3 Ω || 6 Ω) = (3 × 6) / (3 + 6) = 2 Ω.\nStep 3: Convert back to single equivalent voltage source:\nVs_eq = 6 A × 2 Ω = 12 V, Rs_eq = 2 Ω.\nStep 4: Calculate current through 4 Ω load:\nI_load = Vs_eq / (Rs_eq + R_load) = 12 V / (2 + 4) = 2.0 A.',
        hi: 'चरण 1: 12V + 3 Ω वोल्टेज स्रोत को धारा स्रोत में बदलें:\nIs1 = 12 / 3 = 4 A, Rp1 = 3 Ω।\nचरण 2: समानांतर धारा स्रोतों और प्रतिरोधों को जोड़ें:\nकुल Is = 4 A + 2 A = 6 A।\nकुल Rp = (3 || 6) = 2 Ω।\nचरण 3: पुनः एकल वोल्टेज स्रोत में बदलें:\nVs_eq = 6 A × 2 Ω = 12 V, Rs_eq = 2 Ω।\nचरण 4: 4 Ω लोड धारा ज्ञात करें:\nI_load = 12 / (2 + 4) = 2.0 A।',
        bn: 'ধাপ ১: ১২V + ৩ Ω সোর্সকে কারেন্ট সোর্সে রূপান্তর:\nIs1 = 12 / 3 = 4 A, Rp1 = 3 Ω।\nধাপ ২: প্যারালাল সোর্স ও রেজিস্টর যুক্তকরণ:\nমোট Is = 4 A + 2 A = 6 A।\nমোট Rp = (3 || 6) = 2 Ω।\nধাপ ৩: পুনরায় একক ভোল্টেজ সোর্সে রূপান্তর:\nVs_eq = 6 A × 2 Ω = 12 V, Rs_eq = 2 Ω।\nধাপ ৪: ৪ Ω লোড কারেন্ট নির্ণয়:\nI_load = 12 / (2 + 4) = 2.0 A।'
      },
      givenValues: { 'Vs1': '12 V', 'Rs1': '3 Ω', 'Is2': '2 A', 'Rp2': '6 Ω', 'RL': '4 Ω' },
      finalAnswer: {
        en: 'Equivalent Vs = 12V, Rs = 2 Ω; Load Current = 2.0 A',
        hi: 'समतुल्य Vs = 12V, Rs = 2 Ω; लोड धारा = 2.0 A',
        bn: 'সমতুল্য Vs = 12V, Rs = 2 Ω; লোড কারেন্ট = 2.0 A'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Simplifying complex multi-source active node ladder networks into single equivalent sources.',
      'Analyzing transistor and FET amplifier small-signal equivalent circuits (converting Hybrid-pi to Norton/Thevenin models).',
      'Power supply design for converting constant-voltage grid lines into constant-current LED drivers.',
      'IC design where current-steering DACs are converted into equivalent driving voltage signals.'
    ],
    hi: [
      'जटिल बहु-स्रोत सक्रिय नेटवर्क को एकल समतुल्य स्रोत में सरल बनाना।',
      'ट्रांजिस्टर और FET एम्पलीफायर स्मॉल-सिग्नल सर्किट का विश्लेषण करना।',
      'कॉन्स्टेंट-वोल्टेज ग्रिड लाइनों को कॉन्स्टेंट-करंट एलईडी ड्राइवरों में बदलना।',
      'आईसी डिजाइन में करंट-स्टीयर्ड DAC को वोल्टेज सिग्नल में परिवर्तित करना।'
    ],
    bn: [
      'জটিল মাল্টি-সোর্স অ্যানালিসিসে সার্কিট ছোট ও সহজ করে রূপান্তর করা।',
      'ট্রানজিস্টর ও FET অ্যাম্প্লিফায়ার সার্কিটের স্মল-সিগন্যাল ইকুয়ালেন্ট অ্যানালিসিস।',
      'পাওয়ার সাপ্লাই ডিজাইনে কনস্ট্যান্ট ভোল্টেজকে এলইডির জন্য কনস্ট্যান্ট কারেন্টে রূপান্তর।',
      'আইসি ডিজাইনে কারেন্ট-স্টিয়ারিং DAC রূপান্তর।'
    ]
  },
  importantPoints: {
    en: [
      'Source transformation is valid ONLY for practical sources with non-zero internal resistance.',
      'Ideal voltage sources (Rs = 0) and ideal current sources (Rp = ∞) CANNOT be transformed directly.',
      'The value of internal resistance remains identical in numerical magnitude (Rs = Rp).',
      'External load voltage and current are unaffected, but internal power dissipation inside the source differs between models.'
    ],
    hi: [
      'स्रोत रूपांतरण केवल गैर-शून्य आंतरिक प्रतिरोध वाले व्यवहार्य स्रोतों पर लागू होता है।',
      'आदर्श वोल्टेज स्रोतों (Rs = 0) और आदर्श धारा स्रोतों (Rp = ∞) का सीधा रूपांतरण संभव नहीं है।',
      'आंतरिक प्रतिरोध का संख्यात्मक मान समान रहता है (Rs = Rp)।',
      'बाहरी लोड वोल्टेज और धारा समान रहते हैं, परंतु स्रोत के भीतर आंतरिक शक्ति खपत दोनों मॉडलों में भिन्न होती है।'
    ],
    bn: [
      'সোর্স ট্রান্সফরমেশন কেবল অ-শূন্য অভ্যন্তরীণ রেজিস্ট্যান্স থাকা ব্যবহারিক সোর্সে কার্যকর।',
      'আদর্শ ভোল্টেজ সোর্স (Rs = 0) এবং আদর্শ কারেন্ট সোর্সকে (Rp = ∞) সরাসরি রূপান্তর করা যায় না।',
      'অভ্যন্তরীণ রেজিস্ট্যান্সের মান সমান থাকে (Rs = Rp)।',
      'বহিস্থ লোডের ভোল্টেজ ও কারেন্ট অপরিবর্তিত থাকলেও সোর্সের ভেতরের নিজস্ব পাওয়ার অপচয় দুই মডেলে ভিন্ন হতে পারে।'
    ]
  },
  commonMistakes: {
    en: [
      'Attempting to transform an ideal voltage source without any series resistance.',
      'Changing the numeric value of internal resistance when moving from series to parallel configuration.',
      'Reversing the polarity of the current arrow during voltage-to-current transformation.',
      'Assuming that internal power loss in the source resistor is identical in both models.'
    ],
    hi: [
      'बिना श्रेणी प्रतिरोध वाले आदर्श वोल्टेज स्रोत को रूपांतरित करने का प्रयास करना।',
      'श्रेणी से समानांतर में जाते समय आंतरिक प्रतिरोध का मान बदल देना।',
      'वोल्टेज से धारा रूपांतरण के दौरान धारा के तीर की दिशा उल्टी कर देना।',
      'यह मान लेना कि दोनों मॉडलों में आंतरिक शक्ति खपत समान होती है।'
    ],
    bn: [
      'সিরিজ রেজিস্টর ছাড়া আদর্শ ভোল্টেজ সোর্সকে রূপান্তরের চেষ্টা করা।',
      'সিরিজ থেকে প্যারালালে রূপান্তরের সময় রেজিস্ট্যান্সের মান বদলে ফেলা।',
      'ভোল্টেজ থেকে কারেন্ট সোর্স রূপান্তরে কারেন্টের তীর চিহ্ন বিপরীত দিকে দেওয়া।',
      'ধরে নেওয়া যে সোর্স রেজিস্টরের ভেতরের পাওয়ার অপচয় উভয় মডেলেই অভিন্ন।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-st-1',
      question: {
        en: 'A practical voltage source of 20 V with an internal series resistance of 4 Ω is equivalent to a current source of:',
        hi: '4 Ω आंतरिक श्रेणी प्रतिरोध वाले 20 V के व्यवहार्य वोल्टेज स्रोत का समतुल्य धारा स्रोत क्या होगा?',
        bn: '৪ Ω সিরিজ রেজিস্ট্যান্সসহ ২০ V ভোল্টেজ সোর্সের সমতুল্য কারেন্ট সোর্স কত হবে?'
      },
      options: [
        { id: 'opt-a', text: { en: '5 A in parallel with 4 Ω', hi: '5 A समानांतर में 4 Ω के साथ', bn: '৫ A প্যারালালে ৪ Ω এর সাথে' } },
        { id: 'opt-b', text: { en: '5 A in series with 4 Ω', hi: '5 A श्रेणी में 4 Ω के साथ', bn: '৫ A সিরিজে ৪ Ω এর সাথে' } },
        { id: 'opt-c', text: { en: '80 A in parallel with 4 Ω', hi: '80 A समानांतर में 4 Ω के साथ', bn: '৮০ A প্যারালালে ৪ Ω এর সাথে' } },
        { id: 'opt-d', text: { en: '20 A in parallel with 0.25 Ω', hi: '20 A समानांतर में 0.25 Ω के साथ', bn: '২০ A প্যারালালে ০.২৫ Ω এর সাথে' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'Is = Vs / Rs = 20 V / 4 Ω = 5 A, and parallel resistance Rp = Rs = 4 Ω.',
        hi: 'Is = Vs / Rs = 20 V / 4 Ω = 5 A, तथा समानांतर प्रतिरोध Rp = Rs = 4 Ω।',
        bn: 'Is = Vs / Rs = ২০ V / ৪ Ω = ৫ A, এবং প্যারালাল রেজিস্ট্যান্স Rp = Rs = ৪ Ω।'
      }
    },
    {
      id: 'mcq-st-2',
      question: {
        en: 'Source transformation is based primarily on which fundamental electrical law?',
        hi: 'स्रोत रूपांतरण मुख्य रूप से किस मूल विद्युत नियम पर आधारित है?',
        bn: 'সোর্স ট্রান্সফরমেশন প্রধানত কোন মৌলিক সূত্রের ওপর প্রতিষ্ঠিত?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Faraday\'s Law of Induction', hi: 'फैराडे का प्रेरण नियम', bn: 'ফ্যারাডের আবেশ সূত্র' } },
        { id: 'opt-b', text: { en: 'Ohm\'s Law (V = I × R)', hi: 'ओम का नियम (V = I × R)', bn: 'ওহমের সূত্র (V = I × R)' } },
        { id: 'opt-c', text: { en: 'Ampere\'s Circuital Law', hi: 'एम्पीयर का नियम', bn: 'অ্যাম্পিয়ারের সূত্র' } },
        { id: 'opt-d', text: { en: 'Gauss\'s Law', hi: 'गाउस का नियम', bn: 'গাউসের সূত্র' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'Source transformation directly uses Ohm\'s law (Vs = Is × R) to interconvert equivalent voltage and current models.',
        hi: 'स्रोत रूपांतरण सीधे ओम के नियम (Vs = Is × R) का उपयोग करता है।',
        bn: 'সোর্স ট্রান্সফরমেশন সরাসরি ওহমের সূত্রের (Vs = Is × R) ওপর ভিত্তি করে কাজ করে।'
      }
    },
    {
      id: 'mcq-st-3',
      question: {
        en: 'Why can an IDEAL voltage source NOT be transformed into an equivalent current source?',
        hi: 'एक आदर्श वोल्टेज स्रोत को समतुल्य धारा स्रोत में रूपांतरित क्यों नहीं किया जा सकता है?',
        bn: 'একটি আদর্শ ভোল্টেজ সোর্সকে কেন সরাসরি কারেন্ট সোর্সে রূপান্তর করা যায় না?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Because its internal series resistance is zero, leading to division by zero (Is = Vs / 0)', hi: 'क्योंकि इसका श्रेणी प्रतिरोध शून्य होता है, जिससे शून्य से विभाजन (Is = Vs / 0) होता है', bn: 'কারণ এর সিরিজ রেজিস্ট্যান্স শূন্য, ফলে শূন্য দিয়ে ভাগ (Is = Vs / 0) তৈরি হয়' } },
        { id: 'opt-b', text: { en: 'Because ideal sources violate energy conservation', hi: 'क्योंकि आदर्श स्रोत ऊर्जा संरक्षण का उल्लंघन करते हैं', bn: 'কারণ আদর্শ সোর্স শক্তি সংরক্ষণ নীতি লঙ্ঘন করে' } },
        { id: 'opt-c', text: { en: 'Because ideal current sources do not exist in practice', hi: 'क्योंकि आदर्श धारा स्रोत व्यवहार में मौजूद नहीं हैं', bn: 'কারণ আদর্শ কারেন্ট সোর্স বাস্তবজগতে নেই' } },
        { id: 'opt-d', text: { en: 'Because internal power loss is infinite', hi: 'क्योंकि आंतरिक शक्ति हानि अनंत है', bn: 'কারণ অভ্যন্তরীণ পাওয়ার অপচয় অসীম' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'For an ideal voltage source, Rs = 0. Converting yields Is = Vs / 0 = ∞, which is mathematically undefined.',
        hi: 'आदर्श वोल्टेज स्रोत के लिए Rs = 0 होता है, जिससे Is = Vs / 0 = ∞ (अपरिभाषित) बनता है।',
        bn: 'আদর্শ ভোল্টেজ সোর্সে Rs = 0, ফলে Is = Vs / 0 = অসীম বা অসংজ্ঞায়িত হয়।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-st-1',
      question: {
        en: 'State the procedure for source transformation and explain why external load conditions remain unchanged.',
        hi: 'स्रोत रूपांतरण की प्रक्रिया लिखिए और समझाइए कि बाहरी लोड स्थितियां अपरिवर्तित क्यों रहती हैं।',
        bn: 'সোর্স ট্রান্সফরমেশন পদ্ধতি বর্ণনা করুন এবং কারণ লিখুন কেন বহিস্থ লোডের অবস্থা অপরিবর্তিত থাকে।'
      },
      hint: {
        en: 'Focus on open-circuit voltage Voc and short-circuit current Isc equivalence at terminals A-B.',
        hi: 'टर्मिनल A-B पर ओपन-सर्किट वोल्टेज Voc और शॉर्ट-सर्किट धारा Isc समतुल्यता पर ध्यान केंद्रित करें।',
        bn: 'A-B টার্মিনালে ওপেন-সার্কিট ভোল্টেজ ও শর্ট-সার্কিট কারেন্টের সমতার ওপর আলোকপাত করুন।'
      },
      answerKey: {
        en: 'Procedure: Replace Vs in series with Rs by Is = Vs/Rs in parallel with Rp = Rs. Equivalence: Terminal characteristics V-I line equation V = Vs - I*Rs is identical for both configurations.',
        hi: 'प्रक्रिया: Vs और श्रेणी Rs को Is = Vs/Rs और समानांतर Rp = Rs से बदलें। समतुल्यता: टर्मिनल V-I समीकरण V = Vs - I*Rs दोनों रूपों में समान रहता है।',
        bn: 'পদ্ধতি: সিরিজে থাকা Vs ও Rs কে প্যারালালে থাকা Is = Vs/Rs ও Rp = Rs দ্বারা প্রতিস্থাপন করা হয়। সমতুল্যতা: উভয় মডেলেই টার্মিনাল V-I সমীকরণ V = Vs - I*Rs অভিন্ন থাকে।'
      }
    },
    {
      id: 'pq-st-2',
      question: {
        en: 'A 48V DC battery with 2 Ω internal resistance powers a variable load RL. Calculate the load power when transformed into a current source model with RL = 10 Ω.',
        hi: '2 Ω आंतरिक प्रतिरोध वाली 48V DC बैटरी RL = 10 Ω लोड को शक्ति देती है। धारा स्रोत मॉडल का उपयोग करके लोड शक्ति की गणना करें।',
        bn: '২ Ω অভ্যন্তরীণ বাধা বিশিষ্ট ৪৮V ডিসি ব্যাটারি ১০ Ω লোডকে শক্তি যোগায়। কারেন্ট সোর্স মডেল ব্যবহার করে লোডের পাওয়ার নির্ণয় করুন।'
      },
      hint: {
        en: 'Convert to Is = 24A, Rp = 2 Ω, then calculate load current IL using current divider rule.',
        hi: 'Is = 24A, Rp = 2 Ω में बदलें, फिर धारा विभाजन नियम से IL ज्ञात करें।',
        bn: 'Is = 24A, Rp = 2 Ω এ রূপান্তর করুন, তারপর কারেন্ট ডিভাইডার সূত্রে IL বের করুন।'
      },
      answerKey: {
        en: 'Is = 48/2 = 24 A, Rp = 2 Ω. IL = 24 × [2 / (2 + 10)] = 4.0 A. Load Power PL = IL² × RL = (4.0)² × 10 = 160.0 W.',
        hi: 'Is = 24 A, Rp = 2 Ω। IL = 24 × (2/12) = 4.0 A। लोड शक्ति PL = 4² × 10 = 160.0 W।',
        bn: 'Is = 24 A, Rp = 2 Ω। IL = 24 × (2/12) = 4.0 A। লোড পাওয়ার PL = (4.0)² × 10 = 160.0 W।'
      }
    }
  ]
};

export const LESSON_DC_FAULT_ANALYSIS: Lesson = {
  id: 'lsn-ch4-dc-fault-analysis',
  topicId: 'ch4-dc-fault-analysis',
  order: 17,
  title: {
    en: 'DC Network Fault Analysis & Bridge Networks',
    hi: 'डीसी नेटवर्क फॉल्ट विश्लेषण एवं ब्रिज नेटवर्क',
    bn: 'ডিসি নেটওয়ার্ক ফল্ট অ্যানালিসিস ও ব্রিজ নেটওয়ার্ক'
  },
  easyExplanation: {
    en: 'DC fault analysis involves systematically identifying open circuits, short circuits, and high-resistance connection degradations in electrical networks. Bridge networks, particularly the Wheatstone bridge, provide ultra-precise measurements of unknown resistances and fault diagnostics.',
    hi: 'डीसी फॉल्ट विश्लेषण में परिपथ में ओपन सर्किट, शॉर्ट सर्किट और उच्च प्रतिरोध दोषों की पहचान की जाती है। व्हीटस्टोन ब्रिज जैसे नेटवर्क अज्ञात प्रतिरोधों और फॉल्ट के अति-सटीक माप में मदद करते हैं।',
    bn: 'ডিসি ফল্ট অ্যানালিসিস হলো ইলেকট্রিক্যাল নেটওয়ার্কে ওপেন সার্কিট, শর্ট সার্কিট এবং হাই-রেজিস্ট্যান্স সংযোগের ত্রুটি শনাক্তকরণের পদ্ধতি। হুইটস্টোন ব্রিজের মাধ্যমে অজানা রেজিস্ট্যান্স ও ফল্ট অত্যন্ত নিখুঁতভাবে পরিমাপ করা যায়।'
  },
  detailedExplanation: {
    en: 'Fault Types in DC Networks:\n1. Open-Circuit Fault: Complete interruption of current flow in a branch (R = ∞). Terminal voltage across the open break jumps to the supply rail voltage Vs, while branch current drops to 0 A.\n2. Short-Circuit Fault: Zero or near-zero resistance fault path (R ≈ 0). Causes extreme current surge (I = Vs / R_line), voltage collapse across the shorted element to 0 V, and tripping of protective fuses/breakers.\n3. High-Resistance Fault: Partial degradation due to terminal oxidation or loose contacts, inserting abnormal resistance into the branch and causing localized heating and undervoltage.\n\nWheatstone Bridge Network Principle:\nA Wheatstone bridge consists of four resistance arms (R1, R2, R3, R4) forming a closed ring powered by supply Vs, with a sensitive galvanometer connected across nodes C and D.\n\nBridge Balance Condition:\nThe bridge is balanced when zero current flows through the detector (ID = 0 mA):\nV_C = V_D  ⇒  R1 / R2 = R3 / R4  ⇒  R1 × R4 = R2 × R3.\n\nUnder balanced condition, unknown resistance Rx = R3 × (R2 / R1).',
    hi: 'डीसी नेटवर्क में फॉल्ट के प्रकार:\n1. ओपन-सर्किट फॉल्ट: शाखा में धारा प्रवाह पूर्णतः बंद हो जाना (R = ∞)। ओपन सिरे के पार टर्मिनल वोल्टेज सप्लाई के बराबर हो जाता है और धारा 0 A हो जाती है।\n2. शॉर्ट-सर्किट फॉल्ट: शून्य प्रतिरोध पथ (R ≈ 0)। इससे अत्यधिक धारा प्रवाहित होती है और शॉर्ट घटक के पार वोल्टेज 0 V हो जाता है।\n3. उच्च-प्रतिरोध फॉल्ट: ढीले संपर्कों के कारण अतिरिक्त प्रतिरोध उत्पन्न होना जो वोल्टेज ड्रॉप बढ़ाता है।\n\nव्हीटस्टोन ब्रिज सिद्धांत:\nव्हीटस्टोन ब्रिज में चार प्रतिरोध भुजाएँ होती हैं। जब डिटेक्टर से शून्य धारा (ID = 0) प्रवाहित होती है, तो ब्रिज संतुलित कहलाता है:\nR1 / R2 = R3 / R4  ⇒  R1 × R4 = R2 × R3।',
    bn: 'ডিসি নেটওয়ার্কে ফল্টের ধরন:\n১. ওপেন-সার্কিট ফল্ট: ব্রাঞ্চে কারেন্ট প্রবাহ সম্পূর্ণ বন্ধ হয়ে যাওয়া (R = ∞)। বিচ্ছিন্ন প্রান্তের ভোল্টেজ সোর্স ভোল্টেজের সমান হয় এবং কারেন্ট 0 A হয়।\n২. শর্ট-সার্কিট ফল্ট: প্রায় শূন্য রেজিস্ট্যান্সের পথ তৈরি হওয়া (R ≈ 0)। এর ফলে উচ্চমানের কারেন্ট প্রবাহিত হয় এবং ভোল্টেজ 0 V এ নেমে আসে।\n৩. হাই-রেজিস্ট্যান্স ফল্ট: টার্মিনাল অক্সিডেশন বা লুজ কন্টাক্টের ফলে অপ্রয়োজনীয় রেজিস্ট্যান্স তৈরি হওয়া।\n\nহুইটস্টোন ব্রিজ নীতি:\nচারটি রেজিস্ট্যান্স বাহু নিয়ে গঠিত ব্রিজ সার্কিটে যখন ডিটেক্টরের কারেন্ট শূন্য হয় (ID = 0 mA), তখন ব্রিজটি সাম্য অবস্থায় থাকে:\nR1 / R2 = R3 / R4  ⇒  R1 × R4 = R2 × R3।'
  },
  formulas: [
    {
      symbol: 'R1/R2 = R3/R4',
      expression: 'R1 × R4 = R2 × R3',
      description: {
        en: 'Wheatstone bridge balance condition for zero galvanometer current',
        hi: 'शून्य गैल्वेनोमीटर धारा के लिए व्हीटस्टोन ब्रिज संतुलन शर्त',
        bn: 'শূন্য গ্যালভানোমিটার কারেন্টের জন্য হুইটস্টোন ব্রিজ সাম্যাবস্থা শর্ত'
      }
    },
    {
      symbol: 'Rx',
      expression: 'Rx = R3 × (R2 / R1)',
      description: {
        en: 'Unknown resistance calculation in a balanced Wheatstone bridge',
        hi: 'संतुलित व्हीटस्टोन ब्रिज में अज्ञात प्रतिरोध की गणना',
        bn: 'সাম্য অবস্থায় হুইটস্টোন ব্রিজে অজানা রেজিস্ট্যান্স নির্ণয়'
      }
    },
    {
      symbol: 'V_CD',
      expression: 'V_CD = Vs × [ (R2 / (R1 + R2)) - (R4 / (R3 + R4)) ]',
      description: {
        en: 'Unbalanced Wheatstone bridge output voltage across nodes C and D',
        hi: 'असंतुलित व्हीटस्टोन ब्रिज के नोड C और D के बीच आउटपुट वोल्टेज',
        bn: 'অসাম্য অবস্থায় হুইটস্টোন ব্রিজের C ও D নোডের মধ্যকার ভোল্টেজ'
      }
    }
  ],
  solvedExamples: [
    {
      id: 'ex-df-1',
      problem: {
        en: 'In a balanced Wheatstone bridge, R1 = 100 Ω, R2 = 500 Ω, and R3 = 80 Ω. Calculate the value of the unknown resistance Rx (R4).',
        hi: 'एक संतुलित व्हीटस्टोन ब्रिज में R1 = 100 Ω, R2 = 500 Ω और R3 = 80 Ω हैं। अज्ञात प्रतिरोध Rx (R4) का मान ज्ञात करें।',
        bn: 'একটি সাম্য অবস্থার হুইটস্টোন ব্রিজে R1 = 100 Ω, R2 = 500 Ω এবং R3 = 80 Ω হলে অজানা রেজিস্ট্যান্স Rx (R4) এর মান বের করুন।'
      },
      solution: {
        en: 'Step 1: Apply Wheatstone bridge balance formula:\nR1 / R2 = R3 / R4  ⇒  R4 = R3 × (R2 / R1).\nStep 2: Substitute values:\nRx = 80 Ω × (500 Ω / 100 Ω) = 80 × 5 = 400.0 Ω.',
        hi: 'चरण 1: व्हीटस्टोन ब्रिज संतुलन सूत्र लागू करें:\nR1 / R2 = R3 / R4  ⇒  R4 = R3 × (R2 / R1)।\nचरण 2: मान रखें:\nRx = 80 Ω × (500 / 100) = 400.0 Ω।',
        bn: 'ধাপ ১: হুইটস্টোন ব্রিজ সাম্যাবস্থা সূত্র প্রয়োগ করুন:\nR1 / R2 = R3 / R4  ⇒  R4 = R3 × (R2 / R1)।\nধাপ ২: মান বসান:\nRx = 80 Ω × (500 / 100) = 400.0 Ω।'
      },
      givenValues: { 'R1': '100 Ω', 'R2': '500 Ω', 'R3': '80 Ω' },
      finalAnswer: {
        en: 'Rx (R4) = 400.0 Ω',
        hi: 'Rx (R4) = 400.0 Ω',
        bn: 'Rx (R4) = 400.0 Ω'
      }
    },
    {
      id: 'ex-df-2',
      problem: {
        en: 'A 24V DC circuit supplies two parallel branches: Branch 1 (R1 = 12 Ω in series with R2 = 24 Ω) and Branch 2 (R3 = 12 Ω in series with R4 = 24 Ω). If R2 develops an OPEN-CIRCUIT fault, calculate the new voltage at the node between R1 and R2.',
        hi: '24V DC परिपथ दो समानांतर शाखाओं को आपूर्ति करता है। यदि R2 में ओपन-सर्किट फॉल्ट उत्पन्न होता है, तो R1 और R2 के बीच नोड पर नया वोल्टेज ज्ञात करें।',
        bn: '২৪V ডিসি সার্কিটে R2 তে ওপেন-সার্কিট ফল্ট ঘটলে R1 ও R2 এর মধ্যকার নোড ভোল্টেজ কত হবে তা নির্ণয় করুন।'
      },
      solution: {
        en: 'Step 1: Under normal condition, V_node = 24V × [24 / (12 + 24)] = 16.0 V.\nStep 2: When R2 becomes open circuit (R2 = ∞), branch current drops to 0 A.\nStep 3: Voltage drop across R1 = I × R1 = 0 A × 12 Ω = 0 V.\nStep 4: Node voltage jumps to full supply potential: V_node = Vs - 0V = 24.0 V DC.',
        hi: 'चरण 1: सामान्य अवस्था में V_node = 24V × (24/36) = 16.0 V।\nचरण 2: R2 ओपन (R2 = ∞) होने पर धारा 0 A हो जाती है।\nचरण 3: R1 के पार वोल्टेज ड्रॉप = 0 V।\nचरण 4: नोड वोल्टेज सप्लाई वोल्टेज के बराबर हो जाता है: V_node = 24.0 V DC।',
        bn: 'ধাপ ১: স্বাভাবিক অবস্থায় V_node = ২৪V × (২৪/৩৬) = ১৬.০ V।\nধাপ ২: R2 ওপেন হলে কারেন্ট ০ A হয়ে যায়।\nধাপ ৩: R1 এর ভোল্টেজ ড্রপ = ০ V।\nধাপ ৪: নোড ভোল্টেজ সরাসরি সোর্স ভোল্টেজে উন্নীত হয়: V_node = ২৪.০ V DC।'
      },
      givenValues: { 'Vs': '24 V', 'R1': '12 Ω', 'R2_fault': 'Open (∞)' },
      finalAnswer: {
        en: 'Node Voltage V_node = 24.0 V DC (Pulled to Vs)',
        hi: 'नोड वोल्टेज V_node = 24.0 V DC (सप्लाई वोल्टेज के बराबर)',
        bn: 'নোড ভোল্টেজ V_node = ২৪.০ V DC (সোর্স ভোল্টেজের সমান)'
      }
    },
    {
      id: 'ex-df-3',
      problem: {
        en: 'An unbalanced Wheatstone bridge powered by Vs = 12V has R1 = 100 Ω, R2 = 200 Ω, R3 = 100 Ω, and R4 = 300 Ω. Calculate the open-circuit output voltage V_CD across nodes C and D.',
        hi: '12V से संचालित असंतुलित व्हीटस्टोन ब्रिज में R1 = 100 Ω, R2 = 200 Ω, R3 = 100 Ω और R4 = 300 Ω हैं। C और D के बीच आउटपुट वोल्टेज V_CD ज्ञात करें।',
        bn: '১২V সোর্সের অসাম্য হুইটস্টোন ব্রিজে R1 = 100 Ω, R2 = 200 Ω, R3 = 100 Ω এবং R4 = 300 Ω। C ও D নোডের মধ্যবর্তী ভোল্টেজ V_CD নির্ণয় করুন।'
      },
      solution: {
        en: 'Step 1: Calculate Node C voltage VC:\nVC = Vs × [R2 / (R1 + R2)] = 12 V × [200 / (100 + 200)] = 12 × (2/3) = 8.0 V.\nStep 2: Calculate Node D voltage VD:\nVD = Vs × [R4 / (R3 + R4)] = 12 V × [300 / (100 + 300)] = 12 × (3/4) = 9.0 V.\nStep 3: Calculate difference V_CD = VC - VD = 8.0 V - 9.0 V = -1.0 V (or 1.0 V magnitude).',
        hi: 'चरण 1: नोड C वोल्टेज VC ज्ञात करें:\nVC = 12 × (200/300) = 8.0 V।\nचरण 2: नोड D वोल्टेज VD ज्ञात करें:\nVD = 12 × (300/400) = 9.0 V।\nचरण 3: अंतर V_CD = 8.0 - 9.0 = -1.0 V (परिमाण 1.0 V)।',
        bn: 'ধাপ ১: নোড C ভোল্টেজ VC হিসাব করুন:\nVC = ১২ × (২০০/৩০০) = ৮.০ V।\nধাপ ২: নোড D ভোল্টেজ VD হিসাব করুন:\nVD = ১২ × (৩০০/৪০০) = ৯.০ V।\nধাপ ৩: পার্থক্য V_CD = ৮.০ - ৯.০ = -১.০ V (মান ১.০ V)।'
      },
      givenValues: { 'Vs': '12 V', 'R1': '100 Ω', 'R2': '200 Ω', 'R3': '100 Ω', 'R4': '300 Ω' },
      finalAnswer: {
        en: 'V_CD = -1.0 V (Node D is 1.0V higher than Node C)',
        hi: 'V_CD = -1.0 V (नोड D, नोड C से 1.0V अधिक है)',
        bn: 'V_CD = -১.০ V (নোড D, নোড C অপেক্ষা ১.০V বেশি)'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Industrial strain gauge and load cell weight measurement instrumentation.',
      'Precision Resistance Temperature Detector (RTD Pt100) temperature sensing bridges.',
      'Underground cable fault localization using Murray Loop and Varley Loop bridge tests.',
      'Quality control testing of motor winding and transformer DC resistance.'
    ],
    hi: [
      'औद्योगिक स्ट्रेन गेज और लोड सेल वजन मापन उपकरण।',
      'सटीक आरटीडी (RTD Pt100) तापमान संवेदन ब्रिज।',
      'मरे लूप और वार्ले लूप टेस्ट द्वारा भूमिगत केबल फॉल्ट की स्थिति ज्ञात करना।',
      'मोटर वाइंडिंग और ट्रांसफार्मर डीसी प्रतिरोध का गुणवत्ता परीक्षण।'
    ],
    bn: [
      'শিল্পক্ষেত্রে স্ট্রেন গেজ ও লোড সেল ওজন পরিমাপক যন্ত্রে ব্যবহার।',
      'নিখুঁত আরটিডি (RTD Pt100) তাপমাত্রা সেন্সিং ব্রিজ।',
      'আন্ডারগ্রাউন্ড কেবল ফল্ট শনাক্তকরণে মারে লুপ ও ভার্লে লুপ টেস্ট।',
      'মোটর ওয়াইন্ডিং ও ট্র্যান্সফরমারের ডিসি রেজিস্ট্যান্স মান নিশ্চিতকরণ।'
    ]
  },
  importantPoints: {
    en: [
      'In an open-circuit fault, branch current drops to zero while terminal break voltage rises to full supply voltage.',
      'In a short-circuit fault, voltage collapses to zero while current surges to high values limited only by line resistance.',
      'Wheatstone bridge sensitivity is maximum when all four arm resistances are approximately equal (R1 = R2 = R3 = R4).',
      'Ohmmeter resistance measurements MUST be taken on completely DE-ENERGIZED circuits only.'
    ],
    hi: [
      'ओपन-सर्किट फॉल्ट में धारा शून्य हो जाती है जबकि ब्रेक पर टर्मिनल वोल्टेज पूरे सप्लाई वोल्टेज तक बढ़ जाता है।',
      'शॉर्ट-सर्किट फॉल्ट में वोल्टेज शून्य हो जाता है जबकि धारा अत्यधिक बढ़ जाती है।',
      'व्हीटस्टोन ब्रिज की संवेदनशीलता तब अधिकतम होती है जब चारों भुजाओं के प्रतिरोध लगभग समान हों।',
      'ओहममीटर द्वारा प्रतिरोध का माप केवल पूरी तरह से पावर बंद (De-energized) परिपथ पर ही किया जाना चाहिए।'
    ],
    bn: [
      'ওপেন-সার্কিট ফল্টে কারেন্ট শূন্য হয় কিন্তু খোলা প্রান্তের ভোল্টেজ সোর্স ভোল্টেজে উঠে যায়।',
      'শর্ট-সার্কিট ফল্টে ভোল্টেজ শূন্যে নেমে আসে কিন্তু কারেন্ট মারাত্মকভাবে বেড়ে যায়।',
      'চারটি বাহুর রেজিস্ট্যান্স সমান হলে হুইটস্টোন ব্রিজের সংবেদনশীলতা সর্বাধিক হয়।',
      'ওহমমিটার দিয়ে রেজিস্ট্যান্স টেস্ট কেবল পাওয়ার সম্পূর্ণ বন্ধ (De-energized) সার্কিটে করা বাধ্যতামূলক।'
    ]
  },
  commonMistakes: {
    en: [
      'Connecting an ohmmeter to a live energized circuit, causing instrument damage and false readings.',
      'Confusing open-circuit voltage (Vs) with short-circuit current (Isc) characteristics during troubleshooting.',
      'Neglecting lead wire resistance when measuring very low resistances using a standard Wheatstone bridge (requires Kelvin Double Bridge).',
      'Assuming a Wheatstone bridge remains linear when highly unbalanced.'
    ],
    hi: [
      'लाइव (चालू) परिपथ में ओहममीटर जोड़ना, जिससे मीटर जल सकता है।',
      'ट्रबलशूटिंग के दौरान ओपन-सर्किट वोल्टेज और शॉर्ट-सर्किट धारा के लक्षणों में भ्रमित होना।',
      'कम प्रतिरोध मापते समय केबल लीड प्रतिरोध की उपेक्षा करना (इसके लिए केल्विन डबल ब्रिज चाहिए)।',
      'अत्यधिक असंतुलित होने पर भी व्हीटस्टोन ब्रिज को रेखीय मान लेना।'
    ],
    bn: [
      'চালু সার্কিটে ওহমমিটার যুক্ত করা, যা মিটার নষ্ট করে দেয়।',
      'ট্রাবলশুটিংকালে ওপেন-সার্কিট ভোল্টেজ ও শর্ট-সার্কিট কারেন্টের বৈশিষ্ট্যে বিভ্রান্ত হওয়া।',
      'অতি ক্ষুদ্র রেজিস্ট্যান্স মাপে সাধারণ হুইটস্টোন ব্রিজ ব্যবহার করা (কেলভিন ডাবল ব্রিজ প্রয়োজন)।',
      'অতিরিক্ত অসাম্য অবস্থায় হুইটস্টোন ব্রিজকে লিনিয়ার মনে করা।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-df-1',
      question: {
        en: 'When a branch in a DC circuit suffers an OPEN-CIRCUIT fault, what happens to the branch current and terminal voltage across the break?',
        hi: 'जब किसी डीसी परिपथ शाखा में ओपन-सर्किट फॉल्ट होता है, तो शाखा धारा और टर्मिनल वोल्टेज पर क्या प्रभाव पड़ता है?',
        bn: 'ডিসি সার্কিটের কোনো ব্রাঞ্চে ওপেন-সার্কিট ফল্ট হলে ব্রাঞ্চ কারেন্ট ও টার্মিনাল ভোল্টেজের কী ঘটে?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Current becomes zero, terminal voltage equals supply voltage', hi: 'धारा शून्य हो जाती है, टर्मिनल वोल्टेज सप्लाई वोल्टेज के बराबर होता है', bn: 'কারেন্ট শূন্য হয়, টার্মিনাল ভোল্টেজ সোর্স ভোল্টেজের সমান হয়' } },
        { id: 'opt-b', text: { en: 'Current becomes infinite, terminal voltage becomes zero', hi: 'धारा अनंत हो जाती है, टर्मिनल वोल्टेज शून्य हो जाता है', bn: 'কারেন্ট অসীম হয়, টার্মিনাল ভোল্টেজ শূন্য হয়' } },
        { id: 'opt-c', text: { en: 'Both current and voltage become zero', hi: 'धारा और वोल्टेज दोनों शून्य हो जाते हैं', bn: 'কারেন্ট ও ভোল্টেজ উভয়ই শূন্য হয়' } },
        { id: 'opt-d', text: { en: 'Current doubles, voltage halves', hi: 'धारा दोगुनी हो जाती है, वोल्टेज आधा हो जाता है', bn: 'কারেন্ট দ্বিগুণ হয়, ভোল্টেজ অর্ধেক হয়' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'In an open circuit, infinite resistance drops branch current to 0 A. By KVL, the full supply voltage appears across the open gap.',
        hi: 'ओपन परिपथ में अनंत प्रतिरोध धारा को 0 A कर देता है तथा KVL के अनुसार पूरा सप्लाई वोल्टेज ओपन गैप के पार आ जाता है।',
        bn: 'ওপেন সার্কিটে অসীম বাধার কারণে কারেন্ট ০ A হয় এবং KVL অনুযায়ী পূর্ণ সোর্স ভোল্টেজ বিচ্ছিন্ন প্রান্তে অবস্থান করে।'
      }
    },
    {
      id: 'mcq-df-2',
      question: {
        en: 'A Wheatstone bridge is balanced when:',
        hi: 'व्हीटस्टोन ब्रिज संतुलित होता है जब:',
        bn: 'হুইটস্টোন ব্রিজ সাম্য অবস্থায় থাকে যখন:'
      },
      options: [
        { id: 'opt-a', text: { en: 'Galvanometer detector current is zero (ID = 0)', hi: 'गैल्वेनोमीटर डिटेक्टर धारा शून्य होती है (ID = 0)', bn: 'গ্যালভানোমিটার ডিটেক্টর কারেন্ট শূন্য হয় (ID = 0)' } },
        { id: 'opt-b', text: { en: 'Supply current is zero', hi: 'सप्लाई धारा शून्य होती है', bn: 'সোর্স কারেন্ট শূন্য হয়' } },
        { id: 'opt-c', text: { en: 'All four resistors are burned out', hi: 'चारों प्रतिरोधक जल जाते हैं', bn: 'চারটি রেজিস্টর পুড়ে যায়' } },
        { id: 'opt-d', text: { en: 'Output voltage across detector equals supply voltage', hi: 'डिटेक्टर पर आउटपुट वोल्टेज सप्लाई वोल्टेज के बराबर होता है', bn: 'ডিটেক্টর আউটপুট ভোল্টেজ সোর্স ভোল্টেজের সমান হয়' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'Bridge balance by definition means zero potential difference between detector nodes C and D, causing zero detector current.',
        hi: 'ब्रिज संतुलन का अर्थ है डिटेक्टर नोड C और D के बीच शून्य विभवांतर होना, जिससे धारा शून्य होती है।',
        bn: 'সাম্যাবস্থার সংজ্ঞানুযায়ী C ও D নোডের বিভব পার্থক্য শূন্য হওয়ায় ডিটেক্টর কারেন্ট শূন্য হয়।'
      }
    },
    {
      id: 'mcq-df-3',
      question: {
        en: 'Which bridge modification is used for measuring extremely low resistances (< 1 Ω) to eliminate lead contact resistance errors?',
        hi: 'अत्यधिक कम प्रतिरोधों (< 1 Ω) को मापने के लिए किस ब्रिज का उपयोग किया जाता है?',
        bn: 'অতি ক্ষুদ্র রেজিস্ট্যান্স (< ১ Ω) নিখুঁতভাবে মাপার জন্য কোন ব্রিজের পরিবর্তিত রূপ ব্যবহার করা হয়?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Kelvin Double Bridge', hi: 'केल्विन डबल ब्रिज', bn: 'কেলভিন ডাবল ব্রিজ' } },
        { id: 'opt-b', text: { en: 'Maxwell Bridge', hi: 'मैक्सवेल ब्रिज', bn: 'ম্যাক্সওয়েল ব্রিজ' } },
        { id: 'opt-c', text: { en: 'Schering Bridge', hi: 'शेरिंग ब्रिज', bn: 'শেরিং ব্রিজ' } },
        { id: 'opt-d', text: { en: 'Wien Bridge', hi: 'वीन ब्रिज', bn: 'উইন ব্রিজ' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'The Kelvin Double Bridge uses two sets of ratio arms to eliminate lead wire and contact resistance errors when measuring sub-ohm resistances.',
        hi: 'केल्विन डबल ब्रिज sub-ohm प्रतिरोध मापते समय केबल लीड और संपर्क प्रतिरोध त्रुटियों को समाप्त करता है।',
        bn: 'কেলভিন ডাবল ব্রিজে দুই সেট রেশিও আর্ম ব্যবহার করে ক্ষুদ্র রেজিস্ট্যান্স মাপে কানেক্টিং তারের বাধা দূর করা হয়।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-df-1',
      question: {
        en: 'Derive the balance equation R1/R2 = R3/R4 for a Wheatstone bridge starting from node potentials VC and VD.',
        hi: 'नोड विभव VC और VD से प्रारंभ करके व्हीटस्टोन ब्रिज का संतुलन समीकरण R1/R2 = R3/R4 व्युत्पन्न करें।',
        bn: 'নোড বিভব VC ও VD থেকে শুরু করে হুইটস্টোন ব্রিজের সাম্যাবস্থা সমীকরণ R1/R2 = R3/R4 প্রতিপাদন করুন।'
      },
      hint: {
        en: 'Set VC = VD, express VC and VD using voltage divider rule, and simplify.',
        hi: 'VC = VD रखें, वोल्टेज डिवाइडर नियम का उपयोग करके व्यक्त करें और सरल बनाएं।',
        bn: 'VC = VD ধরুন, ভোল্টেজ ডিভাইডার সূত্র দিয়ে প্রকাশ করে সরলীকরণ করুন।'
      },
      answerKey: {
        en: 'VC = Vs*(R2/(R1+R2)), VD = Vs*(R4/(R3+R4)). For ID=0, VC=VD ⇒ R2/(R1+R2) = R4/(R3+R4) ⇒ R2*(R3+R4) = R4*(R1+R2) ⇒ R2*R3 = R1*R4 ⇒ R1/R2 = R3/R4.',
        hi: 'VC = Vs*(R2/(R1+R2)), VD = Vs*(R4/(R3+R4))। ID=0 के लिए VC=VD ⇒ R1/R2 = R3/R4।',
        bn: 'VC = Vs*(R2/(R1+R2)), VD = Vs*(R4/(R3+R4))। ID=0 এর জন্য VC=VD ⇒ R1/R2 = R3/R4।'
      }
    },
    {
      id: 'pq-df-2',
      question: {
        en: 'Explain the three-step troubleshooting workflow for diagnosing an unknown DC control circuit failure.',
        hi: 'अज्ञात डीसी नियंत्रण परिपथ विफलता का निदान करने के लिए तीन-चरण ट्रबलशूटिंग वर्कफ़्लो की व्याख्या करें।',
        bn: 'একটি অজানা ডিসি কন্ট্রোল সার্কিট বিকল হলে ডায়াগনস্টিকের তিন ধাপের ট্রাবলশুটিং পদ্ধতি ব্যাখ্যা করুন।'
      },
      hint: {
        en: 'Step 1: Visual & Power verification; Step 2: Node Voltage mapping; Step 3: Isolated De-energized Resistance test.',
        hi: 'चरण 1: दृश्य व पावर जांच; चरण 2: नोड वोल्टेज मैपिंग; चरण 3: डी-एनर्जाइज्ड प्रतिरोध परीक्षण।',
        bn: 'ধাপ ১: ভিজ্যুয়াল ও সোর্স ভোল্টেজ পরীক্ষা; ধাপ ২: নোড ভোল্টেজ ট্র্যাকিং; ধাপ ৩: পাওয়ার বন্ধ করে রেজিস্ট্যান্স টেস্ট।'
      },
      answerKey: {
        en: 'Step 1: Supply Check (Verify Vs at terminals). Step 2: Live Voltage Mapping (Measure node voltages against GND to locate open/short branches). Step 3: De-energized Resistance Test (Isolate component and measure with ohmmeter to confirm root cause).',
        hi: 'चरण 1: सप्लाई जांच। चरण 2: लाइव नोड वोल्टेज मैपिंग (ओपन/शॉर्ट का पता लगाने के लिए)। चरण 3: डी-एनर्जाइज्ड प्रतिरोध परीक्षण (मूल कारण की पुष्टि के लिए)।',
        bn: 'ধাপ ১: সোর্স ভোল্টেজ টেস্ট। ধাপ ২: লাইভ নোড ভোল্টেজ ট্র্যাকিং (ওপেন বা শর্ট চিহ্নিত করতে)। ধাপ ৩: পাওয়ার বন্ধ রেখে রেজিস্ট্যান্স টেস্ট (মূল ত্রুটি নিশ্চিত করতে)।'
      }
    }
  ]
};

export const LESSON_PRACTICAL_DC_APPLICATIONS: Lesson = {
  id: 'lsn-ch4-practical-dc-applications',
  topicId: 'ch4-practical-dc-applications',
  order: 18,
  title: {
    en: 'Practical DC Circuit & Industrial Applications',
    hi: 'व्यावहारिक डीसी सर्किट एवं औद्योगिक अनुप्रयोग',
    bn: 'ব্যবহারিক ডিসি সার্কিট ও শিল্প প্রয়োগ'
  },
  easyExplanation: {
    en: 'This capstone lesson connects all Chapter 4 DC circuit analysis techniques (KCL, KVL, Nodal, Mesh, Thevenin, Norton, Superposition, Source Transformation) to real-world industrial systems including automation control loops, substation DC battery banks, solar PV arrays, and factory PLC power distribution networks.',
    hi: 'यह पाठ अध्याय 4 के सभी डीसी सर्किट विश्लेषण तकनीकों (KCL, KVL, नोडल, मेष, थेवेनिन, नॉर्टन, सुपरपोजिशन) को वास्तविक औद्योगिक प्रणालियों जैसे स्वचालन नियंत्रण, सबस्टेशन डीसी बैटरी बैंक, सौर पीवी ऐरे और फैक्ट्री पीएलसी नेटवर्क से जोड़ता है।',
    bn: 'এই পাঠে অধ্যায় ৪ এর সকল ডিসি সার্কিট অ্যানালিসিস পদ্ধতিসমূহকে (KCL, KVL, নোডাল, মেশ, থেভেনিন, নর্টন, সুপারপজিশন, সোর্স ট্রান্সফরমেশন) শিল্পকারখানার বাস্তব সিস্টেম যেমন অটোমেশন কন্ট্রোল, সাবস্টেশন ডিসি ব্যাকআপ, সোলার পিভি অ্যারে এবং পিএলসি প্যানেল সিস্টেমের সাথে সম্পর্কিত করা হয়েছে।'
  },
  detailedExplanation: {
    en: 'Industrial DC Electrical Engineering Applications:\n1. Factory Automation Control Loops (24V DC / 4-20mA Loops):\nIndustrial sensors use 4-20mA current loops powered by 24V DC supplies. The current loop model utilizes Norton equivalence where loop current represents the measured process variable regardless of line resistance.\n\n2. Electrical Substation Auxiliary DC Power:\nHigh-voltage substations rely on 110V or 220V DC battery banks to power protection trip coils and circuit breaker operating mechanisms. Battery sizing and branch load sharing require DC network loop mesh analysis.\n\n3. Commercial Solar Photovoltaic (PV) Arrays:\nSolar arrays are modeled as non-linear DC current sources in parallel with diodes. Strings of PV modules are connected in series/parallel, requiring source transformation and maximum power point tracking (MPPT).\n\n4. PLC Power Panel Distribution & Noise Decoupling:\nFactory PLCs require isolated DC rails. Inductive load switching (solenoids, contactors) generates high back-EMF (e = -L di/dt), requiring flywheel freewheeling diodes and branch isolation filter networks.',
    hi: 'औद्योगिक डीसी इलेक्ट्रिकल एप्लीकेशन:\n1. फैक्ट्री ऑटोमेशन कंट्रोल लूप्स (24V DC / 4-20mA लूप्स):\nऔद्योगिक सेंसर 24V DC सप्लाई से संचालित 4-20mA करंट लूप्स का उपयोग करते हैं जो लाइन प्रतिरोध से अप्रभावित रहते हैं।\n\n2. सबस्टेशन सहायक डीसी पावर:\nउच्च-वोल्टेज सबस्टेशन सुरक्षा ट्रिप कॉइल को पावर देने के लिए 110V या 220V डीसी बैटरी बैंक पर निर्भर होते हैं।\n\n3. सोलर फोटोवोल्टिक (पीवी) ऐरे:\nसोलर पैनलों को गैर-रेखीय डीसी धारा स्रोतों के रूप में तैयार किया जाता है जो अधिकतम शक्ति बिंदु (MPPT) पर कार्य करते हैं।\n\n4. पीएलसी पावर पैनल वितरण और शोर पृथक्करण:\nइंडक्टिव स्विचिंग (सोलेनोइड्स) से उत्पन्न बैक-EMF स्पाइक्स को रोकने के लिए फ्लाईव्हील डायोड का उपयोग किया जाता है।',
    bn: 'শিল্পকারখানার ডিসি ইলেকট্রিক্যাল অ্যাপ্লিকেশন:\n১. ফ্যাক্টরি অটোমেশন কন্ট্রোল লুপস (২৪V DC / ৪-২০mA লুপস):\nইন্ডাস্ট্রিয়াল সেন্সরে ২৪V DC থেকে পরিচালিত ৪-২০mA কারেন্ট লুপ ব্যবহৃত হয় যা কেবল রেজিস্ট্যান্স দ্বারা প্রভাবিত হয় না।\n\n২. বৈদ্যুতিক সাবস্টেশন সহায়ক ডিসি পাওয়ার:\nউচ্চ-ভোল্টেজ সাবস্টেশনে প্রোটেকশন ট্রিপ কয়েল চালানোর জন্য ১১০V বা ২২০V ডিসি ব্যাটারি ব্যাংক ব্যবহৃত হয়।\n\n৩. কমার্শিয়াল সোলার ফটোভোলটাইক (পিভি) অ্যারে:\nসোলার প্যানেলগুলোকে নন-লিনিয়ার ডিসি কারেন্ট সোর্স হিসেবে মডেল করা হয় যার ম্যাক্সিমাম পাওয়ার পয়েন্ট ট্র্যাক (MPPT) প্রয়োজন।\n\n৪. পিএলসি পাওয়ার প্যানেল ডিস্ট্রিবিউশন ও নয়েজ ফিল্টারিং:\nসলিনয়েড চালুর সময় সৃষ্ট ব্যাক-EMF ভোল্টেজ স্পাইক দূর করতে ফ্লাইহুইল ডায়োড ব্যবহৃত হয়।'
  },
  formulas: [
    {
      symbol: 'V_loop',
      expression: 'V_loop = I_loop × (R_line + R_sense) ≤ V_supply',
      description: {
        en: 'Industrial 4-20mA current loop voltage compliance limit',
        hi: 'औद्योगिक 4-20mA करंट लूप वोल्टेज अनुपालन सीमा',
        bn: 'ইন্ডাস্ট্রিয়াল ৪-২০mA কারেন্ট লুপের ভোল্টেজ সীমা'
      }
    },
    {
      symbol: 'e_back_emf',
      expression: 'e = -L × (di / dt)',
      description: {
        en: 'Inductive back-EMF spike generated across switched DC solenoid coils',
        hi: 'डीसी सोलेनोइड कॉइल स्विचिंग के दौरान उत्पन्न इंडक्टिव बैक-EMF',
        bn: 'স্যুইচড ডিসি সলিনয়েড কয়েলে সৃষ্ট ইনডাক্টর ব্যাক-EMF স্পাইক'
      }
    },
    {
      symbol: 'P_array',
      expression: 'P_array = V_mp × I_mp = N_series × V_cell × N_parallel × I_cell',
      description: {
        en: 'Total solar PV array peak DC output power calculation',
        hi: 'कुल सोलर पीवी ऐरे पीक डीसी आउटपुट पावर गणना',
        bn: 'মোট সোলার পিভি অ্যারের সর্বোচ্চ ডিসি পাওয়ার আউটপুট হিসাব'
      }
    }
  ],
  solvedExamples: [
    {
      id: 'ex-prac-1',
      problem: {
        en: 'An industrial pressure transmitter outputs a 4-20mA current signal powered by a 24V DC supply. The loop wire resistance R_line is 250 Ω and the PLC input sensing resistor R_sense is 250 Ω. Calculate the sensing voltage V_sense at minimum (4mA) and maximum (20mA) process measurement.',
        hi: '24V DC सप्लाई द्वारा संचालित औद्योगिक प्रेशर ट्रांसमीटर 4-20mA करंट सिग्नल आउटपुट देता है। लाइन प्रतिरोध 250 Ω और PLC इनपुट सेंसिंग प्रतिरोध 250 Ω है। न्यूनतम (4mA) और अधिकतम (20mA) पर सेंसिंग वोल्टेज V_sense की गणना करें।',
        bn: '২৪V DC সোর্সের একটি ইন্ডাস্ট্রিয়াল প্রেসার ট্রান্সমিটার ৪-২০mA কারেন্ট সংকেত পাঠায়। লাইন রেজিস্ট্যান্স ২৫০ Ω এবং PLC ইনপুট সেন্সিং রেজিস্টর ২৫০ Ω হলে সর্বনিম্ন (৪mA) ও সর্বোচ্চ (২০mA) সিগন্যালে V_sense নির্ণয় করুন।'
      },
      solution: {
        en: 'Step 1: Calculate sensing voltage V_sense = I_loop × R_sense.\nStep 2: At minimum signal (4 mA = 0.004 A):\nV_sense_min = 0.004 A × 250 Ω = 1.0 V DC.\nStep 3: At maximum signal (20 mA = 0.020 A):\nV_sense_max = 0.020 A × 250 Ω = 5.0 V DC.\nStep 4: Verify loop compliance voltage drop:\nTotal V_drop = 20mA × (250 + 250) = 0.020 A × 500 Ω = 10.0 V ≤ 24.0 V (Compliant).',
        hi: 'चरण 1: V_sense = I_loop × R_sense की गणना करें।\nचरण 2: न्यूनतम पर (4 mA): V_sense_min = 0.004 × 250 = 1.0 V DC।\nचरण 3: अधिकतम पर (20 mA): V_sense_max = 0.020 × 250 = 5.0 V DC।\nचरण 4: कुल लूप ड्रॉप = 20mA × 500 Ω = 10.0 V ≤ 24 V (अनुपालित)।',
        bn: 'ধাপ ১: সেন্সিং ভোল্টেজ V_sense = I_loop × R_sense।\nধাপ ২: সর্বনিম্ন সিগন্যালে (৪ mA): V_sense_min = ০.০০৪ × ২৫০ = ১.০ V DC।\nধাপ ৩: সর্বোচ্চ সিগন্যালে (২০ mA): V_sense_max = ০.০২০ × ২৫০ = ৫.০ V DC।\nধাপ ৪: মোট ড্রপ = ২০mA × ৫০০ Ω = ১০.০ V ≤ ২৪ V (সঠিক)।'
      },
      givenValues: { 'Vs': '24 V', 'I_min': '4 mA', 'I_max': '20 mA', 'R_line': '250 Ω', 'R_sense': '250 Ω' },
      finalAnswer: {
        en: 'V_sense = 1.0V DC (at 4mA) to 5.0V DC (at 20mA)',
        hi: 'V_sense = 1.0V DC (4mA पर) से 5.0V DC (20mA पर)',
        bn: 'V_sense = ১.০V DC (৪mA তে) থেকে ৫.০V DC (২০mA তে)'
      }
    },
    {
      id: 'ex-prac-2',
      problem: {
        en: 'A 24V DC solenoid valve coil has inductance L = 0.5 H and internal resistance R = 48 Ω. Calculate the steady-state coil current and the theoretical back-EMF spike magnitude if current is interrupted in dt = 1.0 ms without a flywheel diode.',
        hi: '24V DC सोलेनोइड कॉइल का प्रेरकत्व L = 0.5 H और प्रतिरोध R = 48 Ω है। स्थिर-अवस्था धारा और बिना फ्लाईव्हील डायोड के dt = 1.0 ms में धारा बंद होने पर बैक-EMF स्पाइक का परिमाण ज्ञात करें।',
        bn: '২৪V ডিসি সলিনয়েড কয়েলের ইনডাক্ট্যান্স L = ০.৫ H এবং রেজিস্ট্যান্স R = ৪৮ Ω। কারেন্ট বন্ধে ফ্লাইহুইল ডায়োড ছাড়া dt = ১.০ ms সময়ে তত্ত্বীয় ব্যাক-EMF স্পাইক নির্ণয় করুন।'
      },
      solution: {
        en: 'Step 1: Calculate steady-state DC current I_ss:\nI_ss = V / R = 24 V / 48 Ω = 0.50 A.\nStep 2: Calculate back-EMF magnitude during current break:\ne = L × (di / dt) = 0.5 H × (0.50 A / 0.001 s) = 0.5 × 500 = 250.0 V DC.\nConclusion: The 250V spike is > 10x supply voltage, proving why freewheeling diodes are essential to protect PLC output transistors.',
        hi: 'चरण 1: स्थिर-अवस्था धारा I_ss ज्ञात करें:\nI_ss = 24 / 48 = 0.50 A।\nचरण 2: बैक-EMF की गणना करें:\ne = L × (di/dt) = 0.5 H × (0.50 A / 0.001 s) = 250.0 V DC।\nनिष्कर्ष: 250V स्पाइक सप्लाई वोल्टेज का > 10 गुना है, जिससे फ्लाईव्हील डायोड अनिवार्य हो जाता है।',
        bn: 'ধাপ ১: স্থির অবস্থা কারেন্ট I_ss বের করুন:\nI_ss = ২৪ / ৪৮ = ০.৫০ A।\nধাপ ২: ব্যাক-EMF মান হিসাব করুন:\ne = L × (di/dt) = ০.৫ H × (০.৫০ A / ০.০০১ s) = ২৫০.০ V DC।\nসিদ্ধান্ত: ২৫০V স্পাইক সোর্স ভোল্টেজের ১০ গুণেরও বেশি, যা সিওএস ট্রানজিস্টর সুরক্ষায় ফ্লাইহুইল ডায়োডের প্রয়োজনীয়তা প্রমাণ করে।'
      },
      givenValues: { 'V': '24 V', 'L': '0.5 H', 'R': '48 Ω', 'dt': '1.0 ms' },
      finalAnswer: {
        en: 'I_ss = 0.50 A, Back-EMF Spike = 250.0 V DC',
        hi: 'I_ss = 0.50 A, बैक-EMF स्पाइक = 250.0 V DC',
        bn: 'I_ss = ০.৫০ A, ব্যাক-EMF স্পাইক = ২৫০.০ V DC'
      }
    },
    {
      id: 'ex-prac-3',
      problem: {
        en: 'A commercial solar rooftop installation consists of 4 parallel strings of PV modules, each producing Voc = 800V DC and I_sc = 9.0A. Calculate total array short-circuit current and open-circuit voltage at the DC combiner busbar.',
        hi: 'सोलर रूफटॉप प्लांट में PV मॉड्यूल की 4 समानांतर स्ट्रिंग्स हैं, प्रत्येक में Voc = 800V DC और I_sc = 9.0A है। DC कंबाइनर बसबार पर कुल शॉर्ट-सर्किट धारा और ओपन-सर्किट वोल्टेज ज्ञात करें।',
        bn: 'একটি কমার্শিয়াল সোলার প্ল্যান্টে পিভি মডিউলের ৪টি প্যারালাল স্ট্রিং রয়েছে, প্রতিটিতে Voc = ৮০০V DC এবং I_sc = ৯.০A। ডিসি কম্বাইনার বাসবারে মোট শর্ট-সার্কিট কারেন্ট ও ওপেন-সার্কিট ভোল্টেজ কত হবে?'
      },
      solution: {
        en: 'Step 1: Open-circuit voltage Voc in parallel connections equals individual string voltage:\nVoc_total = Voc_string = 800.0 V DC.\nStep 2: Short-circuit current Isc in parallel connections adds up across all 4 strings:\nIsc_total = 4 × I_sc_string = 4 × 9.0 A = 36.0 A DC.\nStep 3: Total short-circuit DC power capability = Voc × Isc = 800 V × 36 A = 28.8 kW.',
        hi: 'चरण 1: समानांतर कनेक्शन में Voc प्रत्येक स्ट्रिंग के समान रहता है: Voc_total = 800.0 V DC।\nचरण 2: समानांतर में कुल धारा जुड़ती है: Isc_total = 4 × 9.0 A = 36.0 A DC।\nचरण 3: कुल शक्ति क्षमता = 800V × 36A = 28.8 kW।',
        bn: 'ধাপ ১: প্যারালাল সংযোগে ওপেন-সার্কিট ভোল্টেজ প্রতিটি স্ট্রিংয়ের সমান থাকে: Voc_total = ৮০০.০ V DC।\nধাপ ২: প্যারালালে কারেন্ট যুক্ত হয়: Isc_total = ৪ × ৯.০ A = ৩৬.০ A DC।\nধাপ ৩: মোট ডিসি ক্ষমতা = ৮০০V × ৩৬A = ২৮.৮ kW।'
      },
      givenValues: { 'N_parallel': '4', 'Voc_string': '800 V', 'Isc_string': '9.0 A' },
      finalAnswer: {
        en: 'Voc_total = 800.0 V DC, Isc_total = 36.0 A DC',
        hi: 'Voc_total = 800.0 V DC, Isc_total = 36.0 A DC',
        bn: 'Voc_total = ৮০০.০ V DC, Isc_total = ৩৬.০ A DC'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Factory automation 24V DC instrumentation and PLC I/O wiring design.',
      'Electric vehicle (EV) traction battery pack module balancing and BMS protection.',
      'Data center high-availability 48V DC telecom power rack distribution.',
      'Solar PV farm DC combiner box sizing and reverse-current protection diode sizing.'
    ],
    hi: [
      'फैक्ट्री ऑटोमेशन 24V DC इंस्ट्रूमेंटेशन और PLC I/O वायरिंग डिजाइन।',
      'इलेक्ट्रिक वाहन (EV) बैटरी पैक मॉड्यूल संतुलन और BMS सुरक्षा।',
      'डेटा सेंटर 48V DC टेलीकॉम पावर रैक वितरण।',
      'सोलर पीवी फार्म डीसी कंबाइनर बॉक्स और रिवर्स-करंट प्रोटेक्शन डायोड साइजिंग।'
    ],
    bn: [
      'ফ্যাক্টরি অটোমেশন ২৪V DC ইনস্ট্রুমেন্টেশন ও PLC I/O ওয়ারিং ডিজাইন।',
      'ইলেকট্রিক যান (EV) ব্যাটারি প্যাক মডিউল ব্যালেন্সিং ও BMS নিরাপত্তা।',
      'ডাটা সেন্টার ৪৮V DC টেলিকম পাওয়ার রাক ডিস্ট্রিবিউশন।',
      'সোলার পিভি ফার্ম ডিসি কম্বাইনার বক্স ও রিভার্স কারেন্ট ডায়োড সাইজিং।'
    ]
  },
  importantPoints: {
    en: [
      'Industrial 4-20mA current loops are immune to line wire resistance up to the power supply compliance limit.',
      'Inductive DC loads (solenoids, relays, contactors) MUST always have freewheeling flywheel diodes installed across their terminals.',
      'DC battery banks require strict cell internal resistance matching to prevent thermal runaway and current hogging in parallel strings.',
      'Always isolate DC power supplies before performing continuity or ohmmeter resistance measurements.'
    ],
    hi: [
      'औद्योगिक 4-20mA करंट लूप पावर सप्लाई अनुपालन सीमा तक केबल प्रतिरोध से अप्रभावित रहते हैं।',
      'इंडक्टिव डीसी लोड (सोलेनोइड्स, रिले) के टर्मिनलों पर हमेशा फ्लाईव्हील डायोड स्थापित होना चाहिए।',
      'डीसी बैटरी बैंकों में तापीय असंतुलन रोकने के लिए सेल आंतरिक प्रतिरोध का मिलान आवश्यक है।',
      'कंटिन्यूटी या ओहममीटर माप करने से पहले हमेशा डीसी पावर सप्लाई को अलग करें।'
    ],
    bn: [
      'ইন্ডাস্ট্রিয়াল ৪-২০mA কারেন্ট লুপ সোর্সের ক্ষমতা পর্যন্ত লাইন রেজিস্ট্যান্স দ্বারা প্রভাবিত হয় না।',
      'ইন্ডাক্টিভ ডিসি লোডের (সলিনয়েড, রিলে) টার্মিনালে সর্বদা অ্যান্টি-প্যারালাল ফ্লাইহুইল ডায়োড লাগানো বাধ্যতামূলক।',
      'ডিসি ব্যাটারি ব্যাংকে থার্মাল সমস্যা এড়াতে সেলগুলোর অভ্যন্তরীণ বাধার সামঞ্জস্য থাকা জরুরি।',
      'ওহমমিটার টেস্টের পূর্বে ডিসি পাওয়ার সাপ্লাই বিচ্ছিন্ন করা নিশ্চিত করুন।'
    ]
  },
  commonMistakes: {
    en: [
      'Omitting freewheeling diodes across DC inductive solenoid valves, leading to destroyed PLC output transistor channels.',
      'Connecting 4-20mA current loop transmitters into voltage-mode high-impedance PLC input channels without a 250 Ω sense resistor.',
      'Connecting unequal voltage battery strings in parallel, causing massive circulating equalizing currents.',
      'Using AC circuit breakers or switches on DC lines without verifying DC arc-quenching voltage ratings.'
    ],
    hi: [
      'डीसी इंडक्टिव सोलेनोइड वाल्व के पार फ्लाईव्हील डायोड न लगाना, जिससे PLC आउटपुट ट्रांजिस्टर जल जाते हैं।',
      'बिना 250 Ω सेंस प्रतिरोध के 4-20mA ट्रांसमीटर को हाई-इम्पीडेंस PLC चैनल से जोड़ना।',
      'असमान वोल्टेज वाली बैटरी स्ट्रिंग्स को समानांतर में जोड़ना, जिससे अत्यधिक परिसंचारी धारा बहती है।',
      'डीसी रेटिंग का सत्यापन किए बिना डीसी लाइनों पर एसी सर्किट ब्रेकर का उपयोग करना।'
    ],
    bn: [
      'ডিসি সলিনয়েড ভালভে ফ্লাইহুইল ডায়োড না লাগানো, যার ফলে PLC আউটপুট ট্রানজিস্টর পুড়ে যায়।',
      '২৫০ Ω সেন্সিং রেজিস্টর ছাড়া ৪-২০mA ট্রান্সমিটারকে PLC ভোল্টেজ চ্যানেলে যুক্ত করা।',
      'অসমান ভোল্টেজের ব্যাটারি স্ট্রিং প্যারালালে যুক্ত করা, যা মারাত্মক সার্কুলেটিং কারেন্ট তৈরি করে।',
      'ডিসি আর্ক রেটিং যাচাই না করে ডিসি লাইনে এসি সার্কিট ব্রেকার ব্যবহার করা।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-prac-1',
      question: {
        en: 'Why are 4-20mA current loops widely preferred over 0-10V voltage signals for long-distance industrial sensor wiring?',
        hi: 'लंबी दूरी की औद्योगिक सेंसर वायरिंग के लिए 0-10V वोल्टेज सिग्नल की तुलना में 4-20mA करंट लूप को व्यापक रूप से प्राथमिकता क्यों दी जाती है?',
        bn: 'দীর্ঘ দূরত্বের শিল্প সেন্সর ওয়ারিংয়ে ০-১০V ভোল্টেজ সিগন্যালের চেয়ে ৪-২০mA কারেন্ট লুপ কেন বহুল ব্যবহৃত হয়?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Current signal is independent of cable line resistance voltage drops', hi: 'करंट सिग्नल केबल लाइन प्रतिरोध के कारण होने वाले वोल्टेज ड्रॉप से अप्रभावित रहता है', bn: 'কারেন্ট সংকেত কেবলের বাধার কারণে ভোল্টেজ ড্রপ দ্বারা প্রভাবিত হয় না' } },
        { id: 'opt-b', text: { en: 'Current signals consume zero electrical power', hi: 'करंट सिग्नल शून्य विद्युत शक्ति की खपत करते हैं', bn: 'কারেন্ট সংকেত কোনো পাওয়ার খরচ করে না' } },
        { id: 'opt-c', text: { en: 'Voltage signals require fiber optic cables', hi: 'वोल्टेज सिग्नल के लिए फाइबर ऑप्टिक केबल की आवश्यकता होती है', bn: 'ভোল্টেজ সংকেতের জন্য ফাইবার অপটিক কেবল লাগে' } },
        { id: 'opt-d', text: { en: 'Current signals operate at 1000V AC', hi: 'करंट सिग्नल 1000V AC पर कार्य करते हैं', bn: 'কারেন্ট সংকেত ১০০০V AC তে চলে' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'By Kirchhoff\'s Current Law, current in a single loop is constant everywhere. The transmitter automatically boosts voltage to maintain exact loop current despite cable resistance.',
        hi: 'KCL के अनुसार, एकल लूप में धारा सभी स्थानों पर समान रहती है। ट्रांसमीटर केबल प्रतिरोध के बावजूद सटीक धारा बनाए रखने के लिए वोल्टेज समायोजित करता है।',
        bn: 'KCL অনুযায়ী একটি লুপে কারেন্ট সর্বত্র সমান। ট্রান্সমিটার কেবলের বাধা সত্ত্বেও সঠিক কারেন্ট পাঠাতে স্বয়ংক্রিয়ভাবে ভোল্টেজ অ্যাডজাস্ট করে।'
      }
    },
    {
      id: 'mcq-prac-2',
      question: {
        en: 'What is the primary purpose of connecting a freewheeling (flywheel) diode across a DC relay or solenoid coil?',
        hi: 'डीसी रिले या सोलेनोइड कॉइल के पार फ्लाईव्हील डायोड जोड़ने का प्राथमिक उद्देश्य क्या है?',
        bn: 'ডিসি রিলে বা সলিনয়েড কয়েলের টার্মিনালে ফ্লাইহুইল ডায়োড যুক্ত করার মূল উদ্দেশ্য কী?'
      },
      options: [
        { id: 'opt-a', text: { en: 'To clamp high inductive back-EMF voltage spikes when current is switched off', hi: 'धारा बंद होने पर उच्च इंडक्टिव बैक-EMF वोल्टेज स्पाइक्स को दबाना', bn: 'কারেন্ট বন্ধের সময় সৃষ্ট ক্ষতিকর ব্যাক-EMF ভোল্টেজ স্পাইক প্রশমিত করা' } },
        { id: 'opt-b', text: { en: 'To increase coil operating temperature', hi: 'कॉइल ऑपरेटिंग तापमान बढ़ाना', bn: 'কয়েলের তাপমাত্রা বৃদ্ধি করা' } },
        { id: 'opt-c', text: { en: 'To convert DC voltage into AC voltage', hi: 'डीसी वोल्टेज को एसी वोल्टेज में बदलना', bn: 'ডিসি ভোল্টেজকে এসি ভোল্টেজে রূপান্তর করা' } },
        { id: 'opt-d', text: { en: 'To double the steady-state operating current', hi: 'स्थिर-अवस्था ऑपरेटिंग धारा को दोगुना करना', bn: 'স্থির অবস্থার অপারেটিং কারেন্ট দ্বিগুণ করা' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'When coil current is interrupted (di/dt < 0), the inductor generates a reverse voltage spike e = -L(di/dt). The freewheel diode provides a safe discharge path.',
        hi: 'जब कॉइल धारा बंद होती है, तो इंडक्टर विपरीत वोल्टेज स्पाइक उत्पन्न करता है। फ्लाईव्हील डायोड इसे सुरक्षित रूप से डिस्चार्ज होने का मार्ग प्रदान करता है।',
        bn: 'কয়েল কারেন্ট বিচ্ছিন্ন হলে ইনডাক্টর বিপরীত ভোল্টেজ স্পাইক তৈরি করে। ফ্লাইহুইল ডায়োড নিরাপদে সেই বিদ্যুৎ ক্ষয়ের পথ প্রদান করে।'
      }
    },
    {
      id: 'mcq-prac-3',
      question: {
        en: 'In a 4-20mA industrial current loop, what does a measured current reading of 0.0mA indicate?',
        hi: '4-20mA औद्योगिक करंट लूप में 0.0mA की मापी गई धारा क्या दर्शाती है?',
        bn: 'একটি ৪-২০mA ইন্ডাস্ট্রিয়াল কারেন্ট লুপে ০.০mA কারেন্ট রিডিং কী নির্দেশ করে?'
      },
      options: [
        { id: 'opt-a', text: { en: 'A broken wire or open-circuit fault in the loop (Live Zero concept)', hi: 'लूप में टूटी हुई तार या ओपन-सर्किट फॉल्ट (लाइव ज़ीरो अवधारणा)', bn: 'লুপের তারের বিচ্ছিন্নতা বা ওপেন-সার্কিট ফল্ট (লাইভ জিরো ধারণা)' } },
        { id: 'opt-b', text: { en: 'Process measurement is at 0% (normal minimum)', hi: 'प्रक्रिया माप 0% पर है (सामान्य न्यूनतम)', bn: 'প্রসেস মান ০% তে রয়েছে (স্বাভাবিক সর্বনিম্ন)' } },
        { id: 'opt-c', text: { en: 'Process measurement is at 100% (maximum)', hi: 'प्रक्रिया माप 100% पर है (अधिकतम)', bn: 'প্রসেস মান ১০০% তে রয়েছে (সর্বোচ্চ)' } },
        { id: 'opt-d', text: { en: 'Transmitter is operating normally', hi: 'ट्रांसमीटर सामान्य रूप से काम कर रहा है', bn: 'ট্রান্সমিটার স্বাভাবিকভাবে কাজ করছে' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: '4-20mA loops use "Live Zero" where 4mA represents 0% process value. A reading of 0mA indicates a loop fault (wire break/power loss).',
        hi: '4-20mA लूप्स "लाइव ज़ीरो" का उपयोग करते हैं जहां 4mA = 0% माप। 0mA पढ़ना लूप फॉल्ट (तार टूटना) दर्शाता है।',
        bn: '৪-২০mA লুপে "লাইভ জিরো" ব্যবহৃত হয় যেখানে ৪mA মানে ০% মান। ০.০mA রিডিং মানে কেবল কাটা বা ফল্ট রয়েছে।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-prac-1',
      question: {
        en: 'Explain the "Live Zero" concept in 4-20mA industrial instrumentation and why it enables wire break fault detection.',
        hi: '4-20mA औद्योगिक इंस्ट्रूमेंटेशन में "लाइव ज़ीरो" अवधारणा की व्याख्या करें और समझाइए कि यह तार टूटने के फॉल्ट का पता लगाने में कैसे मदद करती है।',
        bn: '৪-২০mA ইন্ডাস্ট্রিয়াল ইনস্ট্রুমেন্টেশনে "লাইভ জিরো" ধারণাটি ব্যাখ্যা করুন এবং কীভাবে এটি তার কাটার ফল্ট শনাক্ত করে তা লিখুন।'
      },
      hint: {
        en: 'Compare 4mA (normal 0% signal) with 0mA (dead open circuit wire break).',
        hi: '4mA (सामान्य 0% सिग्नल) की तुलना 0mA (ओपन सर्किट वायर ब्रेक) से करें।',
        bn: '৪mA (স্বাভাবিক ০% সংকেত) এর সাথে ০mA (তার কাটার ফল্ট) তুলনা করুন।'
      },
      answerKey: {
        en: 'In 4-20mA, 4mA corresponds to 0% measurement and 20mA corresponds to 100%. Because 0mA is never used for valid signals, a current reading of 0mA immediately indicates a physical wire break or power failure fault.',
        hi: '4-20mA में, 4mA = 0% तथा 20mA = 100% होता है। चूंकि 0mA का उपयोग सामान्य सिग्नल के लिए नहीं किया जाता, इसलिए 0mA तुरंत तार टूटने या पावर विफलता का संकेत देता है।',
        bn: '৪-২০mA তে, ৪mA নির্দেশ করে ০% প্রসেস মান এবং ২০mA নির্দেশ করে ১০০% মান। যেহেতু ০mA কোনো বৈধ সংকেত নয়, তাই ০mA রিডিং দেখা মাত্রই তা তার বিচ্ছিন্নতা বা পাওয়ার কাট স্পষ্ট নির্দেশ করে।'
      }
    },
    {
      id: 'pq-prac-2',
      question: {
        en: 'A 110V DC substation battery string powers a protection relay trip coil rated at 220 W. Calculate the current drawn during trip coil actuation and the voltage drop across a 0.5 Ω cable loop.',
        hi: '110V DC सबस्टेशन बैटरी स्ट्रिंग 220 W रेटेड ट्रिप कॉइल को पावर देती है। ट्रिप कॉइल एक्टिवेशन के दौरान धारा और 0.5 Ω केबल लूप में वोल्टेज ड्रॉप की गणना करें।',
        bn: '১১০V DC সাবস্টেশন ব্যাটারি স্ট্রিং ২২০ W ক্ষমতার প্রোটেকশন ট্রিপ কয়েল চালায়। কয়েল সচল অবস্থায় কারেন্ট ও ০.৫ Ω কেবলে ভোল্টেজ ড্রপ নির্ণয় করুন।'
      },
      hint: {
        en: 'Calculate I = P / V, then calculate V_drop = I × R_cable.',
        hi: 'I = P / V की गणना करें, फिर V_drop = I × R_cable ज्ञात करें।',
        bn: 'I = P / V বের করুন, তারপর V_drop = I × R_cable হিসাব করুন।'
      },
      answerKey: {
        en: 'Trip Coil Current I = P / V = 220 W / 110 V = 2.0 A DC. Cable Voltage Drop V_drop = I × R_cable = 2.0 A × 0.5 Ω = 1.0 V DC. Terminal voltage at coil = 109.0 V DC.',
        hi: 'ट्रिप कॉइल धारा I = 220 / 110 = 2.0 A DC। केबल वोल्टेज ड्रॉप = 2.0 × 0.5 = 1.0 V DC। कॉइल पर वोल्टेज = 109.0 V DC।',
        bn: 'ট্রিপ কয়েল কারেন্ট I = ২২০ / ১১০ = ২.০ A DC। কেবল ভোল্টেজ ড্রপ = ২.০ × ০.৫ = ১.০ V DC। কয়েলে অবশিষ্ট ভোল্টেজ = ১০৯.০ V DC।'
      }
    }
  ]
};

export const CHAPTER_4_LESSONS: Record<string, Lesson> = {
  'ch4-dc-network-fundamentals': LESSON_DC_NETWORK_FUNDAMENTALS,
  'ch4-kcl': LESSON_KCL,
  'ch4-kvl': LESSON_KVL,
  'ch4-node-branch': LESSON_NODE_BRANCH,
  'ch4-nodal-analysis': LESSON_NODAL_ANALYSIS,
  'ch4-mesh-analysis': LESSON_MESH_ANALYSIS,
  'ch4-network-reduction': LESSON_NETWORK_REDUCTION,
  'ch4-divider-networks': LESSON_DIVIDER_NETWORKS,
  'ch4-star-delta': LESSON_STAR_DELTA,
  'ch4-network-theorems-intro': LESSON_NETWORK_THEOREMS_INTRO,
  'ch4-thevenins-theorem': LESSON_THEVENIN,
  'ch4-nortons-theorem': LESSON_NORTON,
  'ch4-superposition-theorem': LESSON_SUPERPOSITION,
  'ch4-max-power-transfer': LESSON_MAX_POWER,
  'ch4-reciprocity-theorem': LESSON_RECIPROCITY,
  'ch4-source-transformation': LESSON_SOURCE_TRANSFORMATION,
  'ch4-dc-fault-analysis': LESSON_DC_FAULT_ANALYSIS,
  'ch4-practical-dc-applications': LESSON_PRACTICAL_DC_APPLICATIONS
};

