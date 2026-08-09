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
  'ch4-nortons-theorem': LESSON_NORTON
};
