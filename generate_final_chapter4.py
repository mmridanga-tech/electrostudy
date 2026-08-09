import sys

# Read original text
with open('/app/applet/src/data/chapter4Lessons.ts', 'r', encoding='utf-8', errors='replace') as f:
    text = f.read()

# Locate positions of original lessons
p_fund = text.find("export const LESSON_DC_NETWORK_FUNDAMENTALS: Lesson = {")
p_kcl = text.find("export const LESSON_KCL: Lesson = {")
p_kvl = text.find("export const LESSON_KVL: Lesson = {")
p_nb = text.find("export const LESSON_NODE_BRANCH: Lesson = {")

# Extract lessons 1, 2, 3 cleanly
lesson_1_2_3 = text[p_fund:p_nb]

# Clean Python string for LESSON 4 (Node Branch)
lesson_4 = """export const LESSON_NODE_BRANCH: Lesson = {
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
    en: '1. Network Topology: The geometric arrangement and interconnections of circuit elements regardless of their nature (resistors, sources) or specific physical dimensions.\\n\\n2. Node: Any terminal or junction point in a circuit where two or more circuit elements are physically connected together.\\n\\n3. Essential Node (Principal Node): A junction point where THREE OR MORE circuit elements meet. Essential nodes form the basis for Nodal Analysis.\\n\\n4. Non-Essential Node (Simple Node): A junction point where strictly TWO circuit elements connect in series.\\n\\n5. Branch: A continuous path connecting two nodes that contains a single electrical component or series combination of elements.\\n\\n6. Element Branch (Principal Branch): A path connecting two essential nodes containing one or more circuit elements without passing through another essential node.\\n\\n7. Loop: Any closed path in a circuit network formed by starting at a specific node and tracing through branches to return to the starting node without visiting any intermediate node twice.\\n\\n8. Mesh: A fundamental independent loop that DOES NOT contain any other closed loops within its interior region. All meshes are loops, but not all loops are meshes.\\n\\n9. Path: An open or closed continuous sequence of adjacent nodes and connecting branches traversed without repeating any node.\\n\\n10. Open vs Closed Path: An open path has distinct start and end nodes; a closed path returns to its initial starting node forming a closed loop.\\n\\n11. Independent Loop: A loop that contains at least one branch that is not a part of any other independent loop.\\n\\n12. Difference Between Loop and Mesh: A mesh is a window pane containing no internal sub-loops; a loop can enclose multiple meshes or sub-loops.\\n\\n13. Node/Branch/Loop Relationship (Graph Theory): Fundamental relation M = B - N + 1, where M is independent meshes, B is total branches, and N is total nodes.\\n\\n14. Why Topology Matters: Graph topology dictates the exact minimum number of independent KCL equations (N_e - 1) or KVL equations (M = B - N + 1) required for complete circuit solutions.\\n\\n15. Preparing for Nodal Analysis: Identifying essential nodes reduces unnecessary equations; reference ground is picked at the essential node with maximum branches.\\n\\n16. Preparing for Mesh Analysis: Identifying planar meshes establishes unambiguous clockwise mesh currents.',
    hi: '1. नेटवर्क टोपोलॉजी: घटकों के प्रकार की परवाह किए बिना सर्किट संयोजनों की ज्यामितीय संरचना।\\n\\n2. नोड: परिपथ का कोई भी जंक्शन बिंदु जहाँ 2 या अधिक घटक मिलते हैं।\\n\\n3. मुख्य नोड: वह जंक्शन बिंदु जहाँ तीन या अधिक घटक मिलते हैं।\\n\\n4. साधारण नोड: वह जंक्शन जहाँ केवल दो घटक श्रेणी में मिलते हैं।\\n\\n5. शाखा (Branch): दो नोड्स को जोड़ने वाला मार्ग जिसमें घटक मौजूद हों।\\n\\n6. मुख्य शाखा: दो मुख्य नोड्स को जोड़ने वाला मार्ग।\\n\\n7. लूप (Loop): किसी नोड से शुरू होकर बिना किसी नोड को दोहराए उसी नोड पर लौटने वाला बंद मार्ग।\\n\\n8. मेष (Mesh): एक मौलिक स्वतंत्र लूप जिसके अंदर कोई अन्य लूप न हो।\\n\\n9. पाथ (Path): नोड्स और शाखाओं का एक निरंतर अनुक्रम।\\n\\n10. खुला बनाम बंद पाथ: खुले पाथ के प्रारंभिक और अंतिम बिंदु अलग होते हैं।\\n\\n11. स्वतंत्र लूप: ऐसा लूप जिसमें कम से कम एक ऐसी शाखा हो जो किसी अन्य स्वतंत्र लूप का हिस्सा न हो।\\n\\n12. लूप और मेष में अंतर: मेष खिड़की के शीशे की तरह है जिसके अंदर कोई अन्य लूप नहीं होता।\\n\\n13. नोड/शाखा/लूप संबंध: M = B - N + 1।\\n\\n14. टोपोलॉजी का महत्व: न्यूनतम स्वतंत्र समीकरणों की संख्या तय करता है।\\n\\n15. नोडल विश्लेषण की तैयारी: मुख्य नोड्स की पहचान से समीकरणों की संख्या घटती है।\\n\\n16. मेष विश्लेषण की तैयारी: समतलीय मेषों की पहचान मेष धाराएँ तय करती है।',
    bn: '১. নেটওয়ার্ক টপোলজি: উপাদানগুলোর ধরন নির্বিশেষে সার্কিট সংযোগের জ্যামিতিক বিন্যাস।\\n\\n২. নোড: সার্কিটের যে সংযোগস্থলে ২ বা ততোধিক উপাদান যুক্ত হয়।\\n\\n৩. এসেনশিয়াল নোড: যে সংযোগস্থলে তিন বা ততোধিক উপাদান যুক্ত হয়।\\n\\n৪. নন-এসেনশিয়াল নোড: যে সংযোগস্থলে কেবল দুটি উপাদান যুক্ত থাকে।\\n\\n৫. ব্রাঞ্চ: দুটি নোডকে যুক্তকারী উপাদানযুক্ত পথ।\\n\\n৬. এলিমেন্ট ব্রাঞ্চ: দুটি এসেনশিয়াল নোডের মধ্যবর্তী উপাদানযুক্ত পথ।\\n\\n৭. লুপ: কোনো নোড পুনরাবৃত্তি না করে তৈরি যেকোনো আবদ্ধ পথ।\\n\\n৮. মেশ: এমন এক মৌলিক লুপ যার অভ্যন্তরে অন্য কোনো লুপ থাকে না।\\n\\n৯. পাথ: নোড ও ব্রাঞ্চের ধারাবাহিক পথ।\\n\\n১০. উন্মুক্ত বনাম আবদ্ধ পথ: উন্মুক্ত পথের শুরু ও শেষ নোড ভিন্ন।\\n\\n১১. স্বাধীন লুপ: অন্তত ১ টি ভিন্ন ব্রাঞ্চযুক্ত লুপ।\\n\\n১২. লুপ ও মেশের পার্থক্য: মেশের ভেতরে অন্য লুপ থাকে না।\\n\\n১৩. নোড/ব্রাঞ্চ/লুপ সম্পর্ক: M = B - N + ১।\\n\\n১৪. টপোলজির গুরুত্ব: গাণিতিক সমীকরণের সর্বনিম্ন সংখ্যা নির্ধারণ করে।\\n\\n১৫. নোডাল অ্যানালিসিসের প্রস্তুতি: এসেনশিয়াল নোড চিহ্নিতকরণ।\\n\\n১৬. মেশ অ্যানালিসিসের প্রস্তুতি: মেশ কারেন্ট নির্ধারণ।'
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
        en: 'Given: B = 7, N = 5.\\n\\nFormula: M = B - N + 1\\nM = 7 - 5 + 1 = 3\\n\\n3 independent mesh equations are required.',
        hi: 'M = 7 - 5 + 1 = 3\\n3 स्वतंत्र मेष समीकरणों की आवश्यकता है।',
        bn: 'M = ৭ - ৫ + ১ = ৩\\n৩ টি স্বাধীন মেশ সমীকরণ প্রয়োজন।'
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
        en: 'Given:\\n- Branches B = 8\\n- Nodes N = 5\\n\\nStep 1: Tree Branches T = N - 1 = 5 - 1 = 4\\nStep 2: Link Branches L = B - T = 8 - 4 = 4\\nStep 3: Independent Meshes M = B - N + 1 = 8 - 5 + 1 = 4\\n\\nConclusion: Number of links L = 4 equals independent meshes M = 4.',
        hi: 'T = 5 - 1 = 4\\nL = 8 - 4 = 4\\nM = 8 - 5 + 1 = 4\\n\\nलिंकों की संख्या L = 4 मेष M = 4 के बराबर है।',
        bn: 'T = ৫ - ১ = ৪\\nL = ৮ - ৪ = ৪\\nM = ৮ - ৫ + ১ = ৪\\n\\nলিঙ্ক সংখ্যা L = ৪ স্বাধীন মেশ M = ৪ এর সমান।'
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
"""

lesson_5 = """export const LESSON_NODAL_ANALYSIS: Lesson = {
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
    en: '1. Definition & Fundamental Principle: Nodal Analysis is a systematic technique for finding all node voltages in an electrical network relative to a chosen reference node by applying KCL at every non-reference essential node.\\n\\n2. Applicable Domain: Applicable to ALL circuit topologies (both planar and non-planar networks containing resistors, independent/dependent sources).\\n\\n3. Step-by-Step Procedure:\\n   a. Identify all N essential nodes in the circuit.\\n   b. Select one essential node as the Reference Node (Ground, 0 V). Best choice is the node with the maximum branch connections.\\n   c. Label remaining (N - 1) essential nodes with unknown node voltage variables (V1, V2, ..., Vn-1).\\n   d. Apply KCL at each non-reference node: Sum of currents leaving the node equals zero.\\n   e. Express branch currents using Ohm Law: I = (V_from - V_to) / R.\\n   f. Solve simultaneous linear equations using Cramer Rule or Matrix Inversion [G][V] = [I].\\n\\n4. Conductance Matrix Structure [G]:\\n   - Diagonal elements G11, G22: Sum of conductances connected to Node 1, Node 2 (ALWAYS POSITIVE).\\n   - Off-diagonal elements G12 = G21 = -G12: Mutual conductance connected between Node 1 and Node 2 (ALWAYS NEGATIVE).\\n\\n5. Supernode Concept: When an ideal voltage source is connected directly between two non-reference nodes, combine both nodes into a single SUPERNODE. Write one KCL equation for the supernode boundary and supplement it with a voltage constraint equation (V1 - V2 = Vs).',
    hi: '1. परिभाषा एवं मूल सिद्धांत: नोडल विश्लेषण प्रत्येक गैर-संदर्भ मुख्य नोड पर KCL लागू करके नेटवर्क में सभी नोड वोल्टेज ज्ञात करने की एक विधि है।\\n\\n2. प्रयोज्यता: सभी सर्किट टोपोलॉजी (समतलीय और गैर-समतलीय) पर लागू।\\n\\n3. चरणबद्ध प्रक्रिया:\\n   a. सभी N मुख्य नोड्स की पहचान करें।\\n   b. एक मुख्य नोड को संदर्भ नोड (ग्राउंड, 0 V) चुनें।\\n   c. शेष (N - 1) मुख्य नोड्स को अज्ञात नोड वोल्टेज (V1, V2...) लेबल करें।\\n   d. प्रत्येक गैर-संदर्भ नोड पर KCL लागू करें।\\n   e. ओम के नियम का उपयोग करके शाखा धाराओं को व्यक्त करें: I = (V1 - V2) / R।\\n   f. [G][V] = [I] मैट्रिक्स बनाकर समीकरणों को हल करें।\\n\\n4. सुपरनोड अवधारणा: जब दो गैर-संदर्भ नोड्स के बीच एक आदर्श वोल्टेज स्रोत जुड़ा होता है, तो दोनों नोड्स को मिलाकर एक सुपरनोड बनाया जाता है।',
    bn: '১. সংজ্ঞা ও মূলনীতি: নোডাল অ্যানালিসিস হলো রেফারেন্স নোডের সাপেক্ষে সার্কিটের সকল নোড ভোল্টেজ বের করার একটি নিয়মমাফিক পদ্ধতি।\\n\\n২. প্রয়োগক্ষেত্র: সমতলীয় এবং অ-সমতলীয় সকল প্রকার সার্কিটে প্রযোজ্য।\\n\\n৩. পর্যায়ক্রমিক ধাপসমূহ:\\n   ক. সকল N টি এসেনশিয়াল নোড চিহ্নিত করুন।\\n   খ. যেকোনো একটি এসেনশিয়াল নোডকে রেফারেন্স নোড (গ্রাউন্ড, 0 V) হিসেবে ধরে নিন।\\n   গ. বাকি (N - ১) টি নোডকে অজানা ভোল্টেজ (V1, V2...) দ্বারা চিহ্নিত করুন।\\n   ঘ. প্রতিটি নন-রেফারেন্স নোডে KCL প্রয়োগ করুন।\\n   ঙ. ওহমের সূত্র দিয়ে কারেন্ট প্রকাশ করুন: I = (V1 - V2) / R।\\n   চ. [G][V] = [I] ম্যাট্রিক্স গঠন করে মান বের করুন।\\n\\n৪. সুপারনোড ধারণা: দুটি নন-রেফারেন্স নোডের মাঝে সরাসরি ভোল্টেজ সোর্স থাকলে নোড দুটিকে একত্রিত করে একটি সুপারনোড গঠন করা হয়।'
  },
  formulas: [
    {
      symbol: 'I_{branch}',
      expression: 'I_{branch} = \\\\frac{V_{from} - V_{to}}{R}',
      description: {
        en: 'Branch Current leaving Node via Resistor R towards adjacent Node',
        hi: 'प्रतिरोधक R के माध्यम से आसन्न नोड की ओर जाने वाली शाखा धारा',
        bn: 'রেজিস্টর R এর মধ্য দিয়ে পার্শ্ববর্তী নোডের দিকে প্রবাহিত কারেন্ট'
      }
    },
    {
      symbol: '[G][V] = [I]',
      expression: '\\\\begin{bmatrix} G_{11} & G_{12} \\\\\\\\ G_{21} & G_{22} \\\\end{bmatrix} \\\\begin{bmatrix} V_1 \\\\\\\\ V_2 \\\\end{bmatrix} = \\\\begin{bmatrix} I_1 \\\\\\\\ I_2 \\\\end{bmatrix}',
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
        en: 'Given:\\n- Conductances: G11 = 1/4 + 1/12 = 0.25 + 0.0833 = 0.333 S\\n  G12 = G21 = -1/12 = -0.0833 S\\n  G22 = 1/12 + 1/6 = 0.0833 + 0.1667 = 0.25 S\\n\\n- Currents entering nodes: I_node1 = 6 A, I_node2 = -2 A\\n\\nNodal Matrix System:\\n[ 0.333   -0.0833 ] [ V1 ] = [  6 ]\\n[ -0.0833   0.25  ] [ V2 ] = [ -2 ]\\n\\nStep 1: Calculate Determinant Δ\\nΔ = (0.333)(0.25) - (-0.0833)(-0.0833) = 0.0833 - 0.00694 = 0.0764 S²\\n\\nStep 2: Solve V1 using Cramer Rule\\nV1 = [(6)(0.25) - (-2)(-0.0833)] / 0.0764 = [1.5 - 0.1667] / 0.0764 = 1.333 / 0.0764 = 17.45 V\\n\\nStep 3: Solve V2 using Cramer Rule\\nV2 = [(0.333)(-2) - (-0.0833)(6)] / 0.0764 = [-0.6667 + 0.50] / 0.0764 = -0.1667 / 0.0764 = -2.18 V\\n\\nAnswer:\\nNode Voltages: V1 = 17.45 V, V2 = -2.18 V',
        hi: 'कंडक्टेंस मैट्रिक्स हल करने पर:\\nV1 = 17.45 V, V2 = -2.18 V',
        bn: 'কন্ডাকট্যান্স ম্যাট্রিক্স সমাধান করে পাওয়া যায়:\\nV1 = ১৭.৪৫ V, V2 = -২.১৮ V'
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
        en: '1. Definition: A Supernode is formed when an ideal voltage source is connected between two non-reference essential nodes.\\n2. Voltage Constraint Equation: V1 - V2 = 12 V.\\n3. KCL Boundary Equation: Write KCL for the combined surface enclosing Node 1, Node 2, and the 12 V source.',
        hi: '1. परिभाषा: जब दो गैर-संदर्भ नोड्स के बीच वोल्टेज स्रोत जुड़ा हो।\\n2. वोल्टेज बाधा समीकरण: V1 - V2 = 12 V।\\n3. KCL समीकरण: संयुक्त सुपरनोड सतह के लिए KCL लिखें।',
        bn: '১. সংজ্ঞা: দুটি নন-রেফারেন্স নোডের মাঝে ভোল্টেজ সোর্স যুক্ত থাকলে সুপারনোড তৈরি হয়।\\n২. শর্ত সমীকরণ: V1 - V2 = 12 V।\\n৩. KCL সমীকরণ: যৌথ সীমানার ওপর KCL প্রয়োগ করুন।'
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
"""

lesson_6 = """export const LESSON_MESH_ANALYSIS: Lesson = {
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
    en: '1. Definition & Fundamental Principle: Mesh Analysis (or Loop Current Method) is a systematic technique for determining unknown branch currents in planar circuits by writing KVL equations around independent closed mesh loops.\\n\\n2. Applicable Domain: Applicable STRICTLY to Planar Networks (circuits that can be drawn on a flat plane without any branch wires crossing over each other).\\n\\n3. Mesh Current Concept: Mesh current is a fictitious circulating quantity that flows continuously around the perimeter of a minimal window loop. Actual branch current equals the algebraic sum of mesh currents passing through that branch.\\n\\n4. Step-by-Step Execution Procedure:\\n   a. Verify network planarity and identify all M independent planar mesh loops (M = B - N + 1).\\n   b. Assign a clockwise mesh current variable (I1, I2, ..., Im) to each mesh window.\\n   c. Write KVL for each mesh in terms of mesh currents. Voltage drop across a shared resistor Rm between Mesh 1 and Mesh 2 is Rm(I1 - I2).\\n   d. Formulate the matrix system [R][I] = [V] and solve using Cramer Rule or Matrix Inversion.\\n\\n5. Resistance Matrix Structure [R]:\\n   - Diagonal elements R11, R22: Total resistance around Mesh 1, Mesh 2 (ALWAYS POSITIVE).\\n   - Off-diagonal elements R12 = R21 = -Rm: Mutual resistance shared between Mesh 1 and Mesh 2 (ALWAYS NEGATIVE for clockwise currents).\\n\\n6. Supermesh Concept: When a current source is shared between two adjacent meshes, a Supermesh is formed by removing the current source branch and writing KVL around the combined outer loop, supplemented by a current constraint equation (e.g., I1 - I2 = Is).',
    hi: '1. परिभाषा एवं मूल सिद्धांत: मेष विश्लेषण समतलीय परिपथों में KVL का उपयोग करके अज्ञात शाखा धाराओं को ज्ञात करने की एक व्यवस्थित विधि है।\\n\\n2. प्रयोज्यता: केवल समतलीय (Planar) परिपथों पर लागू होती है।\\n\\n3. मेष धारा की अवधारणा: यह एक काल्पनिक परिपत्र धारा है। वास्तविक शाखा धारा इसमें से गुजरने वाली मेष धाराओं का बीजीय योग होती है।\\n\\n4. चरणबद्ध प्रक्रिया:\\n   a. सभी M स्वतंत्र मेषों की पहचान करें (M = B - N + 1)।\\n   b. प्रत्येक मेष को दक्षिणावर्त मेष धारा (I1, I2...) असाइन करें।\\n   c. प्रत्येक मेष के लिए KVL समीकरण लिखें।\\n   d. [R][I] = [V] मैट्रिक्स बनाकर हल करें।\\n\\n5. प्रतिरोध मैट्रिक्स संरचना [R]:\\n   - मुख्य विकर्ण R11, R22: मेष का कुल प्रतिरोध (हमेशा धनात्मक)।\\n   - ऑफ-डायगोनल R12 = R21 = -Rm: साझा प्रतिरोध (हमेशा ऋणात्मक)।\\n\\n6. सुपरमेष: जब दो आसन्न मेषों के बीच धारा स्रोत साझा होता है, तो धारा स्रोत शाखा को हटाकर बाहरी लूप पर KVL लिखा जाता है।',
    bn: '১. সংজ্ঞা ও মূলনীতি: মেশ অ্যানালিসিস হলো সমতলীয় সার্কিটে KVL প্রয়োগের মাধ্যমে অজ্ঞাত কারেন্ট নির্ণয়ের একটি সুনির্দিষ্ট পদ্ধতি।\\n\\n২. প্রয়োগক্ষেত্র: কেবল সমতলীয় (Planar) সার্কিটে প্রযোজ্য।\\n\\n৩. মেশ কারেন্ট ধারণা: এটি একটি কাল্পনিক লুপ কারেন্ট।\\n\\n৪. পর্যায়ক্রমিক ধাপসমূহ:\\n   ক. স্বাধীন M টি মেশ চিহ্নিত করুন (M = B - N + ১)।\\n   খ. প্রতিটি মেশে ঘড়ির কাঁটার দিকে মেশ কারেন্ট ধরুন।\\n   গ. KVL প্রয়োগ করুন।\\n   ঘ. [R][I] = [V] ম্যাট্রিক্স গঠন করে সমীকরণ সমাধান করুন।\\n\\n৫. রেজিস্ট্যান্স ম্যাট্রিক্স রূপ [R]:\\n   - ডায়াগোনাল উপাদান R11, R22: মেশের মোট প্রতিরোধ।\\n   - অফ-ডায়াগোনাল R12 = R21 = -Rm: পারষ্পরিক প্রতিরোধ।\\n\\n৬. সুপারমেশ: দুটি পাশাপাশি মেশের মাঝে কারেন্ট সোর্স থাকলে ওই সোর্স বাদ দিয়ে বাইরের লুপে KVL লেখা হয়।'
  },
  formulas: [
    {
      symbol: 'V_{Rm}',
      expression: 'V_{Rm} = R_m \\\\cdot (I_1 - I_2)',
      description: {
        en: 'Voltage Drop across Shared Resistor Rm between Mesh 1 (I1 CW) & Mesh 2 (I2 CW)',
        hi: 'मेष 1 (I1) और मेष 2 (I2) के बीच साझा प्रतिरोधक Rm पर वोल्टेज गिरावट',
        bn: 'মেশ ১ (I1) এবং মেশ ২ (I2) এর মধ্যবর্তী শেয়ার্ড রেজিস্টর Rm এ বিভব পতন'
      }
    },
    {
      symbol: '[R][I] = [V]',
      expression: '\\\\begin{bmatrix} R_{11} & R_{12} \\\\\\\\ R_{21} & R_{22} \\\\end{bmatrix} \\\\begin{bmatrix} I_1 \\\\\\\\ I_2 \\\\end{bmatrix} = \\\\begin{bmatrix} V_{11} \\\\\\\\ V_{22} \\\\end{bmatrix}',
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
        en: 'Given:\\n- Vs = 24 V\\n- Series Resistors: R1 = 4 Ω, R2 = 6 Ω, R3 = 2 Ω\\n\\nStep 1: Write KVL around single mesh (Clockwise I1)\\nVs - I1·R1 - I1·R2 - I1·R3 = 0\\n24 - I1(4 + 6 + 2) = 0\\n24 - 12 I1 = 0\\n12 I1 = 24\\nI1 = 2.0 A\\n\\nStep 2: Calculate Power Dissipated in R2\\nP_R2 = I1² · R2 = (2.0)² · 6 = 4 · 6 = 24.0 W\\n\\nAnswer:\\nMesh Current I1 = 2.0 A\\nPower in R2 = 24.0 W',
        hi: 'KVL समीकरण: 24 - I1(4 + 6 + 2) = 0 ⇒ 12 I1 = 24 ⇒ I1 = 2.0 A\\nP_R2 = (2.0)² × 6 = 24.0 W',
        bn: 'KVL সমীকরণ: ২৪ - I1(৪ + ৬ + ২) = ০ ⇒ ১২ I1 = ২৪ ⇒ I1 = ২.০ A\\nP_R2 = (২.০)² × ৬ = ২৪.০ W'
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
        en: '1. Fundamental Law: Nodal Analysis uses KCL; Mesh Analysis uses KVL.\\n2. Primary Variable: Nodal solves for Node Voltages; Mesh solves for Mesh Currents.\\n3. Circuit Applicability: Nodal applies to ALL networks; Mesh applies strictly to PLANAR networks.\\n4. Special Case: Nodal creates a SUPERNODE for ungrounded voltage sources; Mesh creates a SUPERMESH for shared current sources.',
        hi: '1. मूल नियम: नोडल KCL का उपयोग करता है; मेष KVL का उपयोग करता है।\\n2. प्राथमिक चर: नोडल नोड वोल्टेज हल करता है; मेष मेष धारा हल करता है।\\n3. प्रयोज्यता: नोडल सभी नेटवर्क पर लागू होता है; मेष केवल समतलीय नेटवर्क पर लागू होता है।\\n4. विशेष मामला: नोडल में सुपरनोड बनता है; मेष में सुपरमेष बनता है।',
        bn: '১. মৌলিক নীতি: নোডাল KCL ব্যবহার করে; মেশ KVL ব্যবহার করে।\\n২. প্রধান চলক: নোডাল নোড ভোল্টেজ বের করে; মেশ মেশ কারেন্ট বের করে।\\n৩. প্রয়োগক্ষেত্র: নোডাল সব সার্কিটে প্রযোজ্য; মেশ কেবল সমতলীয় সার্কিটে প্রযোজ্য।\\n৪. বিশেষ ক্ষেত্র: নোডাले সুপারনোড এবং মেশে সুপারমেশ গঠিত হয়।'
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
"""

p_red = text.find("export const LESSON_NETWORK_REDUCTION: Lesson = {")
p_intro = text.rfind("export const LESSON_NETWORK_THEOREMS_INTRO: Lesson = {")

# Extract lessons 7, 8, 9 cleanly
lesson_7_8_9 = text[p_red:p_intro]

# Clean LESSON 10, 11, 12
lesson_10 = """export const LESSON_NETWORK_THEOREMS_INTRO: Lesson = {
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
    en: '1. What is a Network Theorem? A network theorem is a fundamental mathematical law or simplification rule derived from Kirchhoff Circuit Laws (KCL & KVL) that allows engineers to determine voltages, currents, or power in complex linear electrical networks without solving large systems of simultaneous equations.\\n\\n2. Why Network Theorems Are Useful: Direct application of KCL/KVL or Mesh/Nodal analysis to large networks produces large systems of linear equations (e.g., 5 to 10 simultaneous equations). Theorems reduce these complex networks to equivalent 1-loop or 2-node models, saving massive computational effort.\\n\\n3. Equivalent Circuit Concept: Two electrical networks are said to be electrically equivalent if they exhibit identical voltage-current (V-I) relationships at a specified pair of output terminals A-B, regardless of internal circuit topology differences.\\n\\n4. Linear Network Concept: A linear network consists exclusively of linear circuit elements where response (current/voltage) is directly proportional to excitation (applied voltage/current). Superposition and source transformation principles apply strictly to linear networks.\\n\\n5. Active vs Passive Networks: Active networks contain independent or dependent power sources (generators, batteries, amplifiers). Passive networks contain only energy dissipation or storage elements (resistors, inductors, capacitors) with no internal power generation.\\n\\n6. Independent vs Dependent Sources: Independent sources maintain constant terminal voltage or current regardless of circuit conditions. Dependent (controlled) sources produce outputs controlled by a voltage or current elsewhere in the network.\\n\\n7. Source Deactivation Rules (Crucial for Theorem Calculations):\\n   - Ideal Voltage Sources: Replaced by a SHORT CIRCUIT (zero impedance, V = 0).\\n   - Ideal Current Sources: Replaced by an OPEN CIRCUIT (infinite impedance, I = 0).\\n   - Internal Resistance: Practical sources retain their internal series or parallel resistances.\\n\\n8. Overview of Major DC Network Theorems:\\n   - Thevenin Theorem: Replaces any linear network connected to a load with an open-circuit voltage source (Vth) in series with equivalent resistance (Rth).\\n   - Norton Theorem: Replaces the network with a short-circuit current source (IN) in parallel with equivalent resistance (RN).\\n   - Superposition Theorem: Analyzes multi-source circuits by calculating individual responses per source and summing them algebraically.\\n   - Maximum Power Transfer Theorem: Determines the load resistance (RL = Rth) required to receive maximum power from a supply system.\\n   - Reciprocity Theorem: States that in a single-source linear bilateral network, the ratio of excitation to response remains identical when source and response positions are interchanged.',
    hi: '1. नेटवर्क प्रमेय क्या है? नेटवर्क प्रमेय KCL और KVL से प्राप्त गणितीय नियम हैं जो जटिल परिपथों को सरल बनाते हैं।\\n\\n2. उपयोगिता: KCL/KVL से प्राप्त बड़े समीकरणों को हल करने के बजाय, प्रमेय परिपथ को 1-लूप मॉडल में बदलकर गणना आसान बनाते हैं।\\n\\n3. समतुल्य परिपथ अवधारणा: दो परिपथ आउटपुट टर्मिनलों A-B पर समान V-I व्यवहार प्रदर्शित करते हैं।\\n\\n4. रेखीय नेटवर्क: वे नेटवर्क जो ओम के नियम और सुपरपोजिशन का पालन करते हैं।\\n\\n5. स्रोत बंद करने के नियम:\\n   - आदर्श वोल्टेज स्रोत -> शॉर्ट सर्किट (0 Ω)\\n   - आदर्श धारा स्रोत -> ओपन सर्किट (∞ Ω)',
    bn: '১. নেটওয়ার্ক থিওরেম কী? এগুলো হলো গাণিতিক নীতি যা জটিল লিনিয়ার সার্কিট সহজ করতে ব্যবহৃত হয়।\\n\\n২. কেন প্রয়োজন: সরাসরি KCL/KVL ব্যবহারে জটিল সমীকরণ তৈরি হয়। থিওরেম সার্কিটকে ১-লুপ মডেলে রূপান্তর করে।\\n\\n৩. সমতুল্য সার্কিট ধারণা: দুটি ভিন্ন সার্কিট নির্দিষ্ট A-B টার্মিনালে একই V-I বৈশিষ্ট্য দেখায়।\\n\\n৪. সোর্স বন্ধ করার নিয়ম:\\n   - আদর্শ ভোল্টেজ সোর্স -> শর্ট সার্কিট (0 Ω)\\n   - আদর্শ কারেন্ট সোর্স -> ওপেন সার্কিট (অসীম Ω)'
  },
  formulas: [
    {
      symbol: 'V_{source} \\\\rightarrow 0',
      expression: '\\\\text{Voltage Source } \\\\rightarrow \\\\text{Short Circuit (0 } \\\\Omega), \\\\quad \\\\text{Current Source } \\\\rightarrow \\\\text{Open Circuit (}\\\\infty \\\\Omega)',
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
        en: 'Step 1: Remove load resistor RL across terminals A-B.\\nStep 2: Deactivate all independent voltage sources by replacing them with SHORT CIRCUITS (0 Ω).\\nStep 3: Deactivate all independent current sources by replacing them with OPEN CIRCUITS (infinite Ω).\\nStep 4: Keep all dependent sources active in place.\\nStep 5: Calculate equivalent resistance across terminals A-B.',
        hi: '1. लोड RL हटाएँ।\\n2. वोल्टेज स्रोतों को शॉर्ट सर्किट करें।\\n3. धारा स्रोतों को ओपन सर्किट करें।\\n4. A-B के बीच तुल्य प्रतिरोध R_in ज्ञात करें।',
        bn: '১. লোড RL সরিয়ে ফেলুন।\\n২. ভোল্টেজ সোর্স শর্ট সার্কিট করুন।\\n৩. কারেন্ট সোর্স ওপেন সার্কিট করুন।\\n৪. A-B টার্মিনালে তুল্য রেজিস্ট্যান্স R_in হিসাব করুন।'
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
        en: '1. Thevenin Theorem reduces the network to a Voltage Source Vth connected in SERIES with resistance Rth.\\n2. Norton Theorem reduces the network to a Current Source IN connected in PARALLEL with resistance RN.\\n3. Both resistance values are identical: RN = Rth.',
        hi: '1. थेवेनिन: श्रेणी में Vth और Rth।\\n2. नॉर्टन: समानांतर में IN और RN।\\n3. दोनों प्रतिरोध समान होते हैं: RN = Rth।',
        bn: '১. থেভেনিন: সিরিজে Vth এবং Rth।\\n২. নর্টন: প্যারালালে IN এবং RN।\\n৩. উভয় রেজিস্ট্যান্স অভিন্ন: RN = Rth।'
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
"""

lesson_11 = """export const LESSON_THEVENIN: Lesson = {
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
    en: "1. Statement of Thevenin's Theorem: Any linear, two-terminal bilateral DC network containing independent or dependent voltage/current sources and passive resistors can be replaced by an equivalent simple series circuit consisting of a single voltage source Vth and an equivalent resistance Rth connected in series with the load resistor RL across terminals A-B.\\n\\n2. Thevenin Voltage (Vth): Defined as the open-circuit voltage across the specified output load terminals A and B when the load resistance RL is removed (Voc = Vth).\\n\\n3. Thevenin Resistance (Rth): Defined as the total equivalent resistance looking back into the open load terminals A and B with all independent sources deactivated.\\n\\n4. Procedure to Find Vth:\\n   a. Disconnect load resistor RL from terminals A and B.\\n   b. Calculate open-circuit voltage Voc across A-B using Nodal Analysis, Mesh Analysis, or KVL/KCL. This voltage is Vth = Voc.\\n\\n5. Procedure to Find Rth:\\n   a. Disconnect load resistor RL from terminals A and B.\\n   b. Deactivate independent sources (Short voltage sources, Open current sources).\\n   c. Calculate total equivalent resistance across terminals A and B. This is Rth.\\n\\n6. Reconnecting Load and Load Current Formula: IL = Vth / (Rth + RL)\\n7. Load Voltage & Power: VL = IL · RL, PL = IL² · RL\\n8. Advantage: Solves complex network ONCE for Vth and Rth, allowing instant evaluation for changing RL values.",
    hi: "1. थेवेनिन प्रमेय का कथन: किसी भी दो-टर्मिनल रेखीय परिपथ को A-B टर्मिनलों पर एक एकल वोल्टेज स्रोत Vth और श्रेणी में जुड़े प्रतिरोध Rth में बदला जा सकता है।\\n\\n2. थेवेनिन वोल्टेज (Vth): RL हटाने पर टर्मिनलों A और B के बीच खुला-परिपथ वोल्टेज Voc = Vth।\\n\\n3. थेवेनिन प्रतिरोध (Rth): स्वतंत्र स्रोतों को बंद करने के बाद A-B से परिपथ में दिखने वाला कुल तुल्य प्रतिरोध।\\n\\n4. Vth व Rth ज्ञात करने के चरण:\\n   - RL हटाकर A-B पर खुला-परिपथ वोल्टेज Vth ज्ञात करें।\\n   - स्रोतों को बंद करके A-B से तुल्य प्रतिरोध Rth ज्ञात करें।\\n\\n5. लोड धारा सूत्र: IL = Vth / (Rth + RL)",
    bn: "১. থেভেনিনের উপপাদ্যের মূল বিবৃতি: যেকোনো লিনিয়ার টু-টার্মিনাল ডিসি সার্কিটকে A-B টার্মিনালের সাপেক্ষে সিরিজে যুক্ত Vth এবং Rth বিশিষ্ট সমতুল্য সার্কিটে রূপান্তরিত করা যায়।\\n\\n২. থেভেনিন ভোল্টেজ (Vth): লোড RL অপসারণের পর A-B টার্মিনালের ওপেন-সার্কিট ভোল্টেজ Voc = Vth।\\n\\n৩. থেভেনিন রেজিস্ট্যান্স (Rth): সকল স্বাধীন সোর্স বন্ধ করার পর A-B টার্মিনাল থেকে পরিমাপকৃত মোট বাঁধ।\\n\\n৪. ধাপসমূহ:\\n   - RL সরিয়ে A-B এর ওপেন-সার্কিট বিভব Vth বের করুন।\\n   - সোর্স নিষ্ক্রিয় করে A-B থেকে Rth বের করুন।\\n\\n৫. লোড কারেন্ট সমীকরণ: IL = Vth / (Rth + RL)"
  },
  formulas: [
    {
      symbol: 'V_{th}',
      expression: 'V_{th} = V_{oc} = V_{AB} \\\\quad (R_L \\\\text{ removed})',
      description: {
        en: 'Thevenin Voltage equal to Open-Circuit Voltage across Load Terminals A-B',
        hi: 'लोड टर्मिनलों A-B पर खुला-परिपथ वोल्टेज के बराबर थेवेनिन वोल्टेज',
        bn: 'লোড টার্মিনাল A-B এর উন্মুক্ত বিভবের সমান থেভেনিন ভোল্টেজ'
      }
    },
    {
      symbol: 'R_{th}',
      expression: 'R_{th} = R_{AB} \\\\quad (\\\\text{Independent Sources Deactivated})',
      description: {
        en: 'Thevenin Resistance looking back into Terminals A-B with Sources Zeroed',
        hi: 'स्रोतों को बंद करके A-B टर्मिनलों से परिपथ में देखने पर प्राप्त थेवेनिन प्रतिरोध',
        bn: 'সোর্স নিষ্ক্রিয় করার পর A-B টার্মিনাল থেকে প্রাপ্ত থেভেনিন রেজিস্ট্যান্স'
      }
    },
    {
      symbol: 'I_L',
      expression: 'I_L = \\\\frac{V_{th}}{R_{th} + R_L}',
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
        en: 'Given:\\n- Vs = 30 V, R1 = 12 Ω, R2 = 6 Ω, RL = 8 Ω\\n\\nStep 1: Calculate Vth (Remove RL)\\nVth = Voc = Vs · [R2 / (R1 + R2)] = 30 · [6 / (12 + 6)] = 30 · (6 / 18) = 10.0 V\\n\\nStep 2: Calculate Rth (Deactivate Vs)\\nRth = R1 || R2 = (12 · 6) / (12 + 6) = 72 / 18 = 4.0 Ω\\n\\nStep 3: Calculate Load Current IL\\nIL = Vth / (Rth + RL) = 10.0 / (4.0 + 8.0) = 10.0 / 12.0 = 0.833 A (833.3 mA)\\n\\nAnswer: Vth = 10.0 V, Rth = 4.0 Ω, IL = 0.833 A',
        hi: 'Vth = 30 × [6 / 18] = 10.0 V\\nRth = (12 × 6) / 18 = 4.0 Ω\\nIL = 10.0 / (4.0 + 8.0) = 0.833 A',
        bn: 'Vth = ৩০ × [৬ / ১৮] = ১০.০ V\\nRth = (১২ × ৬) / ১৮ = ৪.০ Ω\\nIL = ১০.০ / (৪.০ + ৮.০) = ০.৮৩৩ A'
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
        en: "1. The complex active network behind terminals A-B is analyzed ONCE for Vth and Rth.\\n2. For any new RL value, load current IL = Vth / (Rth + RL) is evaluated instantly without re-solving the global circuit.",
        hi: "1. परिपथ का विश्लेषण केवल एक बार करके Vth और Rth ज्ञात किए जाते हैं।\\n2. किसी भी नए RL के लिए, IL = Vth / (Rth + RL) से तुरंत मान मिल जाता है।",
        bn: "১. পুরো সার্কিটের জন্য Vth এবং Rth কেবল একবারই বের করতে হয়।\\n২. যেকোনো নতুন RL এর জন্য IL = Vth / (Rth + RL) সূত্রে সরাসরি লোড কারেন্ট পাওয়া যায়।"
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
"""

lesson_12 = """export const LESSON_NORTON: Lesson = {
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
    en: "1. Statement of Norton's Theorem: Any linear, two-terminal bilateral DC network containing independent or dependent voltage/current sources and passive resistors can be replaced by an equivalent parallel circuit consisting of a single current source IN in parallel with an equivalent resistance RN connected across output terminals A-B.\\n\\n2. Norton Current (IN): Defined as the short-circuit current flowing through terminals A and B when shorted together with a zero-resistance wire (Isc = IN).\\n\\n3. Norton Resistance (RN): Defined as the total equivalent resistance looking back into open terminals A and B with independent sources deactivated. Note that RN = Rth.\\n\\n4. Procedure to Find IN:\\n   a. Disconnect load resistor RL from terminals A and B.\\n   b. Connect a short-circuit wire across terminals A and B.\\n   c. Calculate short-circuit current Isc through this wire. This is IN = Isc.\\n\\n5. Procedure to Find RN:\\n   a. Disconnect load RL and short-circuit wire.\\n   b. Deactivate independent sources (Short voltage sources, Open current sources).\\n   c. Calculate total equivalent resistance across A and B. This is RN (RN = Rth).\\n\\n6. Reconnecting Load and Load Current Formula: Using Current Divider Rule, IL = IN · [RN / (RN + RL)]\\n7. Source Transformation Duality: IN = Vth / Rth, RN = Rth, Vth = IN · RN",
    hi: "1. नॉर्टन प्रमेय का कथन: किसी भी दो-टर्मिनल रेखीय परिपथ को A-B टर्मिनलों पर समानांतर में जुड़े धारा स्रोत IN और प्रतिरोधक RN द्वारा बदला जा सकता है।\\n\\n2. नॉर्टन धारा (IN): A-B टर्मिनलों को शॉर्ट करने पर प्रवाहित होने वाली शॉर्ट-सर्किट धारा Isc = IN।\\n\\n3. नॉर्टन प्रतिरोध (RN): A-B से परिपथ में दिखने वाला कुल तुल्य प्रतिरोध (RN = Rth)।\\n\\n4. धारा विभाजन नियम से लोड धारा: IL = IN · [RN / (RN + RL)]\\n5. स्रोत रूपांतरण द्वैतता: IN = Vth / Rth, RN = Rth",
    bn: "১. নর্টনের উপপাদ্যের মূল বিবৃতি: যেকোনো লিনিয়ার টু-টার্মিনাল ডিসি সার্কিটকে A-B টার্মিনালের সাপেক্ষে প্যারালালে যুক্ত IN এবং RN বিশিষ্ট সমতুল্য সার্কিটে রূপান্তরিত করা যায়।\\n\\n২. নর্টন কারেন্ট (IN): A-B টার্মিনাল শর্ট সার্কিট করলে প্রবাহিত শর্ট-সার্কিট কারেন্ট Isc = IN।\\n\\n৩. নর্টন রেজিস্ট্যান্স (RN): A-B টার্মিনাল থেকে পরিমাপকৃত মোট বাধা (RN = Rth)।\\n\\n৪. কারেন্ট ডিভাইডার সূত্র দ্বারা লোড কারেন্ট: IL = IN · [RN / (RN + RL)]\\n৫. সোর্স ট্রান্সফরমেশন: IN = Vth / Rth, RN = Rth"
  },
  formulas: [
    {
      symbol: 'I_N',
      expression: 'I_N = I_{sc} = I_{AB} \\\\quad (\\\\text{Terminals A-B Short-Circuited})',
      description: {
        en: 'Norton Current equal to Short-Circuit Current through Terminals A-B',
        hi: 'टर्मिनलों A-B को शॉर्ट करने पर प्राप्त नॉर्टन धारा',
        bn: 'টার্মিনাল A-B শর্ট সার্কিট করলে প্রাপ্ত নর্টন কারেন্ট'
      }
    },
    {
      symbol: 'R_N',
      expression: 'R_N = R_{th} = R_{AB} \\\\quad (\\\\text{Independent Sources Deactivated})',
      description: {
        en: 'Norton Resistance equal to Thevenin Resistance looking into Terminals A-B',
        hi: 'A-B टर्मिनलों से प्राप्त नॉर्टन प्रतिरोध जो थेवेनिन प्रतिरोध के बराबर होता है',
        bn: 'A-B টার্মিনাল থেকে প্রাপ্ত নর্টন রেজিস্ট্যান্স যা থেভেনিন রেজিস্ট্যান্সের সমান'
      }
    },
    {
      symbol: 'I_L',
      expression: 'I_L = I_N \\\\cdot \\\\frac{R_N}{R_N + R_L}',
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
        en: 'Given:\\n- Vs = 24 V, R1 = 6 Ω, R2 = 12 Ω, RL = 4 Ω\\n\\nStep 1: Calculate IN (Short-Circuit A-B)\\nWith A-B shorted, R2 is bypassed. IN = Vs / R1 = 24 / 6 = 4.0 A\\n\\nStep 2: Calculate RN (Deactivate Vs)\\nRN = R1 || R2 = (6 · 12) / (6 + 12) = 72 / 18 = 4.0 Ω\\n\\nStep 3: Calculate Load Current IL via Current Divider Rule\\nIL = IN · [RN / (RN + RL)] = 4.0 · [4.0 / (4.0 + 4.0)] = 4.0 · (4/8) = 2.0 A\\n\\nAnswer: IN = 4.0 A, RN = 4.0 Ω, IL = 2.0 A',
        hi: 'IN = 24 / 6 = 4.0 A\\nRN = (6 × 12) / 18 = 4.0 Ω\\nIL = 4.0 × [4 / 8] = 2.0 A',
        bn: 'IN = ২৪ / ৬ = ৪.০ A\\nRN = (৬ × ১২) / ১৮ = ৪.০ Ω\\nIL = ৪.০ × [৪ / ৮] = ২.০ A'
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
"""

export_record = """export const CHAPTER_4_LESSONS: Record<string, Lesson> = {
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
"""

header = "import { Lesson } from '../types';\n\n"

full_file = header + lesson_1_2_3 + lesson_4 + lesson_5 + lesson_6 + lesson_7_8_9 + lesson_10 + lesson_11 + lesson_12 + export_record

with open('/app/applet/src/data/chapter4Lessons.ts', 'w', encoding='utf-8') as f:
    f.write(full_file)

print("Generated clean chapter4Lessons.ts successfully!")

