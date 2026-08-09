import sys

with open('/app/applet/src/data/chapter4Lessons.ts', 'r', encoding='utf-8', errors='replace') as f:
    text = f.read()

# Extract header & imports
header = "import { Lesson } from '../types';\n\n"

# Find positions
p_fund = text.find("export const LESSON_DC_NETWORK_FUNDAMENTALS: Lesson = {")
p_kcl = text.find("export const LESSON_KCL: Lesson = {")
p_kvl = text.find("export const LESSON_KVL: Lesson = {")
p_nb = text.find("export const LESSON_NODE_BRANCH: Lesson = {")
p_nodal = text.find("export const LESSON_NODAL_ANALYSIS: Lesson = {")
p_mesh = text.find("export const LESSON_MESH_ANALYSIS: Lesson = {")
p_red = text.find("export const LESSON_NETWORK_REDUCTION: Lesson = {")
p_intro = text.rfind("export const LESSON_NETWORK_THEOREMS_INTRO: Lesson = {")
p_export = text.find("export const CHAPTER_4_LESSONS:")

# Extract lessons 1, 2, 3
lesson_fund_to_kvl = text[p_fund:p_nb]

# Clean LESSON_NODE_BRANCH
lesson_node_branch = '''export const LESSON_NODE_BRANCH: Lesson = {
  id: 'lsn-ch4-node-branch',
  subjectId: 'basic-electrical',
  chapterId: 'ch-dc-network-analysis',
  topicId: 'ch4-node-branch',
  order: 4,
  title: {
    en: 'Nodes, Branches, Loops and Meshes',
    hi: 'नोड, शाखाएं, लूप और मेष',
    bn: 'নোড, ব্রাঞ্চ, লুপ এবং মেশ'
  },
  description: {
    en: 'Understanding network topology definitions: junction nodes, essential nodes, branch paths, independent closed loops, planar meshes, and graph relations.',
    hi: 'नेटवर्क टोपोलॉजी की परिभाषाएं: जंक्शन नोड, मुख्य नोड, शाखा मार्ग, स्वतंत्र बंद लूप, समतलीय मेष और ग्राफ संबंध।',
    bn: 'নেটওয়ার্ক টপোলজি পরিচিতি: জংশন নোড, এসেনশিয়াল নোড, ব্রাঞ্চ পথ, স্বাধীন বন্ধ লুপ, সমতলীয় মেশ ও গ্রাফ সম্পর্ক।'
  },
  easyExplanation: {
    en: 'A node is a junction point. A branch is a path containing a component. A loop is any closed path. A mesh is an open window loop with no inside sub-loops.',
    hi: 'नोड एक जंक्शन बिंदु है। शाखा वह मार्ग है जिसमें घटक होता है। लूप कोई भी बंद मार्ग है। मेष बिना किसी आंतरिक लूप वाला एक खुला खिड़की-लूप है।',
    bn: 'নোড হলো সংযোগ বিন্দু। ব্রাঞ্চ হলো উপাদানযুক্ত পথ। লুপ হলো যেকোনো আবদ্ধ পথ। মেশ হলো এমন লুপ যার অভ্যন্তরে অন্য কোনো লুপ থাকে না।'
  },
  detailedExplanation: {
    en: '1. Network Topology: The geometric arrangement and interconnections of circuit elements regardless of their nature (resistors, sources) or specific physical dimensions.\\n\\n2. Node: Any terminal or junction point in a circuit where two or more circuit elements are physically connected together.\\n\\n3. Essential Node (Principal Node): A junction point where THREE OR MORE circuit elements meet. Essential nodes form the basis for Nodal Analysis.\\n\\n4. Non-Essential Node (Simple Node): A junction point where strictly TWO circuit elements connect in series.\\n\\n5. Branch: A continuous path connecting two nodes that contains a single electrical component or series combination of elements.\\n\\n6. Element Branch (Principal Branch): A path connecting two essential nodes containing one or more circuit elements without passing through another essential node.\\n\\n7. Loop: Any closed path in a circuit network formed by starting at a specific node and tracing through branches to return to the starting node without visiting any intermediate node twice.\\n\\n8. Mesh: A fundamental independent loop that DOES NOT contain any other closed loops within its interior region. All meshes are loops, but not all loops are meshes.\\n\\n9. Path: An open or closed continuous sequence of adjacent nodes and connecting branches traversed without repeating any node.\\n\\n10. Open vs Closed Path: An open path has distinct start and end nodes; a closed path returns to its initial starting node forming a closed loop.\\n\\n11. Independent Loop: A loop that contains at least one branch that is not a part of any other independent loop.\\n\\n12. Difference Between Loop and Mesh: A mesh is a window pane containing no internal sub-loops; a loop can enclose multiple meshes or sub-loops.\\n\\n13. Node/Branch/Loop Relationship (Graph Theory): Fundamental relation M = B - N + 1, where M is independent meshes, B is total branches, and N is total nodes.\\n\\n14. Why Topology Matters: Graph topology dictates the exact minimum number of independent KCL equations (N_e - 1) or KVL equations (M = B - N + 1) required for complete circuit solutions.\\n\\n15. Preparing for Nodal Analysis: Identifying essential nodes reduces unnecessary equations; reference ground is picked at the essential node with maximum branches.\\n\\n16. Preparing for Mesh Analysis: Identifying planar meshes establishes unambiguous clockwise mesh currents.',
    hi: '1. नेटवर्क टोपोलॉजी: घटकों के प्रकार (प्रतिरोधक, स्रोत) की परवाह किए बिना सर्किट संयोजनों की ज्यामितीय संरचना।\\n\\n2. नोड: परिपथ का कोई भी जंक्शन बिंदु जहाँ 2 या अधिक घटक मिलते हैं।\\n\\n3. मुख्य नोड (Essential Node): वह जंक्शन बिंदु जहाँ तीन या अधिक घटक मिलते हैं। यह नोडल विश्लेषण का आधार है।\\n\\n4. साधारण नोड (Non-Essential Node): वह जंक्शन जहाँ केवल दो घटक श्रेणी में मिलते हैं।\\n\\n5. शाखा (Branch): दो नोड्स को जोड़ने वाला मार्ग जिसमें घटक मौजूद हों।\\n\\n6. मुख्य शाखा (Element Branch): दो मुख्य नोड्स को जोड़ने वाला मार्ग।\\n\\n7. लूप (Loop): किसी नोड से शुरू होकर बिना किसी नोड को दोहराए उसी नोड पर लौटने वाला बंद मार्ग।\\n\\n8. मेष (Mesh): एक मौलिक स्वतंत्र लूप जिसके अंदर कोई अन्य लूप न हो। सभी मेष लूप होते हैं, लेकिन सभी लूप मेष नहीं होते।\\n\\n9. पाथ (Path): नोड्स और शाखाओं का एक निरंतर अनुक्रम।\\n\\n10. खुला बनाम बंद पाथ: खुले पाथ के प्रारंभिक और अंतिम बिंदु अलग होते हैं; बंद पाथ वापस प्रारंभिक बिंदु पर आता है।\\n\\n11. स्वतंत्र लूप: ऐसा लूप जिसमें कम से कम एक ऐसी शाखा हो जो किसी अन्य स्वतंत्र लूप का हिस्सा न हो।\\n\\n12. लूप और मेष में अंतर: मेष खिड़की के शीशे की तरह है जिसके अंदर कोई अन्य लूप नहीं होता; लूप में कई मेष हो सकते हैं।\\n\\n13. नोड/शाखा/लूप संबंध: M = B - N + 1 (M = स्वतंत्र मेष, B = शाखाएँ, N = नोड)।\\n\\n14. टोपोलॉजी का महत्व: न्यूनतम स्वतंत्र समीकरणों की संख्या तय करता है।\\n\\n15. नोडल विश्लेषण की तैयारी: मुख्य नोड्स की पहचान से समीकरणों की संख्या घटती है।\\n\\n16. मेष विश्लेषण की तैयारी: समतलीय मेषों की पहचान मेष धाराएँ तय करती है।',
    bn: '১. নেটওয়ার্ক টপোলজি: উপাদানগুলোর ধরন নির্বিশেষে সার্কিট সংযোগের জ্যামিতিক বিন্যাস।\\n\\n২. নোড: সার্কিটের যে সংযোগস্থলে ২ বা ততোধিক উপাদান যুক্ত হয়।\\n\\n৩. এসেনশিয়াল নোড: যে সংযোগস্থলে তিন বা ততোধিক উপাদান যুক্ত হয়। এটি নোডাল অ্যানালিসিসের ভিত্তি।\\n\\n৪. নন-এসেনশিয়াল নোড: যে সংযোগস্থলে কেবল দুটি উপাদান যুক্ত থাকে।\\n\\n৫. ব্রাঞ্চ: দুটি নোডকে যুক্তকারী উপাদানযুক্ত পথ।\\n\\n৬. এলিমেন্ট ব্রাঞ্চ: দুটি এসেনশিয়াল নোডের মধ্যবর্তী উপাদানযুক্ত পথ।\\n\\n৭. লুপ: কোনো নোড পুনরাবৃত্তি না করে তৈরি যেকোনো আবদ্ধ পথ।\\n\\n৮. মেশ: এমন এক মৌলিক লুপ যার অভ্যন্তরে অন্য কোনো লুপ থাকে না। সকল মেশ-ই লুপ, কিন্তু সকল লুপ মেশ নয়।\\n\\n৯. পাথ: নোড ও ব্রাঞ্চের ধারাবাহিক পথ।\\n\\n১০. উন্মুক্ত বনাম আবদ্ধ পথ: উন্মুক্ত পথের শুরু ও শেষ নোড ভিন্ন, আবদ্ধ পথ আদি নোডে ফিরে আসে।\\n\\n১১. স্বাধীন লুপ: অন্তত ১ টি ভিন্ন ব্রাঞ্চযুক্ত লুপ।\\n\\n১২. লুপ ও মেশের পার্থক্য: মেশের ভেতরে অন্য লুপ থাকে না; লুপের ভেতরে একাধিক মেশ থাকতে পারে।\\n\\n১৩. নোড/ব্রাঞ্চ/লুপ সম্পর্ক: M = B - N + ১।\\n\\n১৪. টপোলজির গুরুত্ব: গাণিতিক সমীকরণের সর্বনিম্ন সংখ্যা নির্ধারণ করে।\\n\\n১৫. নোডাল অ্যানালিসিসের প্রস্তুতি: এসেনশিয়াল নোড চিহ্নিতকরণ।\\n\\n১৬. মেশ অ্যানালিসিসের প্রস্তুতি: মেশ কারেন্ট নির্ধারণ।'
  },
  svgType: 'circuit-node-branch',
  summary: {
    en: 'Mastering circuit graph topology (nodes, branches, loops, meshes) establishes the mathematical relation M = B - N + 1 to determine the exact number of equations required for full circuit solutions.',
    hi: 'सर्किट टोपोलॉजी में महारत हासिल करने से गणितात्मक संबंध M = B - N + 1 स्थापित होता है, जो संपूर्ण परिपथ समाधान के लिए आवश्यक समीकरणों की सटीक संख्या तय करता है।',
    bn: 'সার্কিট টপোলজি আয়ত্ত করার মাধ্যমে M = B - N + ১ সূত্র প্রয়োগ করে সার্কিট সমাধানের সঠিক সমীকরণ সংখ্যা নির্ধারণ করা সম্ভব হয়।'
  },
  sections: [
    {
      id: 'sec-nb-nodes-branches',
      title: { en: '1. Nodes and Branches', hi: '1. नोड और शाखाएँ', bn: '১. নোড এবং ব্রাঞ্চ' },
      content: {
        en: 'A node is a connection junction. An essential node joins 3 or more branches and forms the key reference for nodal analysis.',
        hi: 'नोड एक कनेक्शन जंक्शन है। मुख्य नोड 3 या अधिक शाखाओं को जोड़ता है और नोडल विश्लेषण का आधार बनता है।',
        bn: 'নোড হলো সংযোগস্থল। এসেনশিয়াল নোড ৩ বা ততোধিক ব্রাঞ্চকে যুক্ত করে নোডাল অ্যানালিসিসের মূল ভিত্তি তৈরি করে।'
      }
    },
    {
      id: 'sec-nb-loops-meshes',
      title: { en: '2. Loops versus Meshes', hi: '2. लूप बनाम मेष', bn: '২. লুপ এবং মেশের পার্থক্য' },
      content: {
        en: 'A loop is any closed branch path. A mesh is a planar loop containing no internal sub-loops. Relation: M = B - N + 1.',
        hi: 'लूप कोई भी बंद मार्ग है। मेष बिना आंतरिक लूप वाला समतलीय लूप है। संबंध: M = B - N + 1।',
        bn: 'লুপ যেকোনো আবদ্ধ পথ। মেশ হলো অভ্যন্তরীণ লুপহীন একটি স্বাধীন লুপ। সম্পর্ক: M = B - N + ১।'
      }
    }
  ],
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
        bn: 'ডিসি নেটওয়ার্কে নোড, এসেনশিয়াল নোড, ব্রাঞ্চ ও মেশের ভিজ্যুয়াল চিত্র।'
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
};\n\n'''

# Extract LESSON_NODAL_ANALYSIS (pos p_nodal to p_mesh)
lesson_nodal = text[p_nodal:p_mesh]

# Clean LESSON_MESH_ANALYSIS
lesson_mesh = '''export const LESSON_MESH_ANALYSIS: Lesson = {
  id: 'lsn-ch4-mesh-analysis',
  subjectId: 'basic-electrical',
  chapterId: 'ch-dc-network-analysis',
  topicId: 'ch4-mesh-analysis',
  order: 6,
  title: {
    en: 'Mesh Analysis',
    hi: 'मेष विश्लेषण',
    bn: 'মেশ অ্যানালিসিস'
  },
  description: {
    en: 'Systematic loop current method using KVL, resistance matrix formulation, supermesh technique for shared current sources, and planar network applicability.',
    hi: 'KVL का उपयोग करके व्यवस्थित लूप धारा विधि, प्रतिरोध मैट्रिक्स संरचना, साझा धारा स्रोतों के लिए सुपरमेष तकनीक तथा समतलीय परिपथ प्रयोज्यता।',
    bn: 'KVL ভিত্তিক নিয়মমাফিক মেশ কারেন্ট পদ্ধতি, রেজিস্ট্যান্স ম্যাট্রিক্স সমীকরণ, শেয়ার্ড কারেন্ট সোর্সের জন্য সুপারমেশ কৌশল এবং সমতলীয় সার্কিট প্রয়োগ।'
  },
  easyExplanation: {
    en: 'Mesh analysis assigns a hypothetical clockwise loop current to every basic mesh window, then applies KVL around each mesh to form simultaneous linear equations [R][I] = [V].',
    hi: 'मेष विश्लेषण प्रत्येक मेष खिड़की में एक काल्पनिक दक्षिणावर्त धारा मानता है, फिर प्रत्येक मेष में KVL लागू करके रेखीय समीकरण [R][I] = [V] बनाता है।',
    bn: 'মেশ অ্যানালিসিসে প্রতিটি মেশে ঘড়ির কাঁটার দিকে একটি কাল্পনিক মেশ কারেন্ট ধরা হয়, তারপর KVL প্রয়োগ করে সমীকরণ জোট [R][I] = [V] গঠন করা হয়।'
  },
  detailedExplanation: {
    en: '1. Definition & Fundamental Principle: Mesh Analysis (or Loop Current Method) is a systematic technique for determining unknown branch currents in planar circuits by writing KVL equations around independent closed mesh loops.\\n\\n2. Applicable Domain: Applicable STRICTLY to Planar Networks (circuits that can be drawn on a flat plane without any branch wires crossing over each other).\\n\\n3. Mesh Current Concept: Mesh current is a fictitious circulating quantity that flows continuously around the perimeter of a minimal window loop. Actual branch current equals the algebraic sum of mesh currents passing through that branch.\\n\\n4. Step-by-Step Execution Procedure:\\n   a. Verify network planarity and identify all M independent planar mesh loops (M = B - N + 1).\\n   b. Assign a clockwise mesh current variable (I1, I2, ..., Im) to each mesh window.\\n   c. Write KVL for each mesh in terms of mesh currents. Voltage drop across a shared resistor Rm between Mesh 1 and Mesh 2 is Rm(I1 - I2).\\n   d. Formulate the matrix system [R][I] = [V] and solve using Cramer\'s Rule, Matrix Inversion, or Substitution.\\n\\n5. Resistance Matrix Structure [R]:\\n   - Diagonal elements R11, R22: Total resistance around Mesh 1, Mesh 2 (ALWAYS POSITIVE).\\n   - Off-diagonal elements R12 = R21 = -Rm: Mutual resistance shared between Mesh 1 and Mesh 2 (ALWAYS NEGATIVE for clockwise currents).\\n\\n6. Supermesh Concept: When a current source is shared between two adjacent meshes, a Supermesh is formed by removing the current source branch and writing KVL around the combined outer loop, supplemented by a current constraint equation (e.g., I1 - I2 = Is).\\n\\n7. Comparison with Nodal Analysis: Mesh analysis is preferred when the circuit has fewer meshes than essential nodes (M < Ne - 1) or when voltage sources predominate.',
    hi: '1. परिभाषा एवं मूल सिद्धांत: मेष विश्लेषण समतलीय परिपथों में KVL का उपयोग करके अज्ञात शाखा धाराओं को ज्ञात करने की एक व्यवस्थित विधि है।\\n\\n2. प्रयोज्यता: केवल समतलीय (Planar) परिपथों पर लागू होती है।\\n\\n3. मेष धारा की अवधारणा: यह एक काल्पनिक परिपत्र धारा है। वास्तविक शाखा धारा इसमें से गुजरने वाली मेष धाराओं का बीजीय योग होती है।\\n\\n4. चरणबद्ध प्रक्रिया:\\n   a. सभी M स्वतंत्र मेषों की पहचान करें (M = B - N + 1)।\\n   b. प्रत्येक मेष को दक्षिणावर्त मेष धारा (I1, I2...) असाइन करें।\\n   c. प्रत्येक मेष के लिए KVL समीकरण लिखें। साझा प्रतिरोधक पर वोल्टेज ड्रॉप Rm(I1 - I2) होता है।\\n   d. [R][I] = [V] मैट्रिक्स बनाकर क्रैमर नियम से हल करें।\\n\\n5. प्रतिरोध मैट्रिक्स संरचना [R]:\\n   - मुख्य विकर्ण R11, R22: मेष का कुल प्रतिरोध (हमेशा धनात्मक)।\\n   - ऑफ-डायगोनल R12 = R21 = -Rm: साझा प्रतिरोध (दक्षिणावर्त धाराओं के लिए हमेशा ऋणात्मक)।\\n\\n6. सुपरमेष: जब दो आसन्न मेषों के बीच धारा स्रोत साझा होता है, तो धारा स्रोत शाखा को हटाकर बाहरी लूप पर KVL लिखा जाता है और धारा बाधा समीकरण I1 - I2 = Is का उपयोग किया जाता है।',
    bn: '১. সংজ্ঞা ও মূলনীতি: মেশ অ্যানালিসিস হলো সমতলীয় সার্কিটে KVL প্রয়োগের মাধ্যমে অজ্ঞাত কারেন্ট নির্ণয়ের একটি সুনির্দিষ্ট পদ্ধতি।\\n\\n২. প্রয়োগক্ষেত্র: কেবল সমতলীয় (Planar) সার্কিটে প্রযোজ্য।\\n\\n৩. মেশ কারেন্ট ধারণা: এটি একটি কাল্পনিক লুপ কারেন্ট। প্রকৃত ব্রাঞ্চ কারেন্ট হলো ওই ব্রাঞ্চ দিয়ে প্রবাহিত মেশ কারেন্টগুলোর বীজগণিতীয় যোগফল।\\n\\n৪. পর্যায়ক্রমিক ধাপসমূহ:\\n   ক. স্বাধীন M টি মেশ চিহ্নিত করুন (M = B - N + ১)।\\n   খ. প্রতিটি মেশে ঘড়ির কাঁটার দিকে মেশ কারেন্ট (I1, I2...) ধরুন।\\n   গ. KVL প্রয়োগ করুন। শেয়ার্ড রেজিস্টরে বিভব পতন Rm(I1 - I2)।\\n   ঘ. [R][I] = [V] ম্যাট্রিক্স গঠন করে সমীকরণ সমাধান করুন।\\n\\n৫. রেজিস্ট্যান্স ম্যাট্রিক্স রূপ [R]:\\n   - ডায়াগোনাল উপাদান R11, R22: মেশের মোট প্রতিরোধ (সর্বদা ধনাত্মক)।\\n   - অফ-ডায়াগোনাল R12 = R21 = -Rm: পারষ্পরিক প্রতিরোধ (সর্বদা ঋণাত্মক)।\\n\\n৬. সুপারমেশ: দুটি পাশাপাশি মেশের মাঝে কারেন্ট সোর্স থাকলে ওই সোর্স বাদ দিয়ে বাইরের লুপে KVL লেখা হয় এবং শর্ত সমীকরণ I1 - I2 = Is ব্যবহার করা হয়।'
  },
  svgType: 'circuit-mesh-analysis',
  summary: {
    en: 'Mesh Analysis uses KVL to establish simultaneous mesh current equations [R][I] = [V] for planar networks, utilizing Supermesh loops when current sources are shared.',
    hi: 'मेष विश्लेषण समतलीय परिपथों के लिए KVL का उपयोग करके समीकरण [R][I] = [V] बनाता है तथा साझा धारा स्रोतों के लिए सुपरमेष का उपयोग करता है।',
    bn: 'মেশ অ্যানালিসিস KVL প্রয়োগের মাধ্যমে [R][I] = [V] ম্যাট্রিক্স গঠন করে এবং সাধারণ কারেন্ট সোর্সের ক্ষেত্রে সুপারমেশ প্রয়োগ করে সার্কিট সমাধান করে।'
  },
  sections: [
    {
      id: 'sec-mesh-procedure',
      title: { en: '1. Mesh Equation Formulation', hi: '1. मेष समीकरण संरचना', bn: '১. মেশ সমীকরণ গঠন' },
      content: {
        en: 'Assign clockwise mesh currents I1, I2... Apply KVL around each mesh. Mutual resistance terms enter with negative signs: -Rm I2.',
        hi: 'दक्षिणावर्त मेष धाराएँ असाइन करें। प्रत्येक मेष में KVL लागू करें। पारस्परिक प्रतिरोध पद ऋणात्मक चिन्ह (-Rm I2) के साथ आते हैं।',
        bn: 'ঘড়ির কাঁটার দিকে মেশ কারেন্ট ধরুন। KVL প্রয়োগ করুন। পারষ্পরিক রেজিস্ট্যান্স ঋণাত্মক চিহ্ন (-Rm I2) ধারণ করে।'
      }
    },
    {
      id: 'sec-supermesh',
      title: { en: '2. Supermesh Analysis', hi: '2. सुपरमेष विश्लेषण', bn: '২. सुपरमेश অ্যানালিসিস' },
      content: {
        en: 'When a current source is shared between two adjacent meshes, bypass it to form a Supermesh KVL loop and write a current constraint equation.',
        hi: 'जब दो मेषों के बीच धारा स्रोत साझा हो, तो इसे बायपास करके सुपरमेष KVL लूप बनाएं और धारा बाधा समीकरण लिखें।',
        bn: 'দুটি মেশের মাঝে কারেন্ট সোর্স থাকলে তা এড়িয়ে সুপারমেশ KVL লুপ গঠন করুন এবং কারেন্ট শর্ত সমীকরণ লিখুন।'
      }
    }
  ],
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
    },
    {
      symbol: 'I_{supermesh}',
      expression: 'I_1 - I_2 = I_s',
      description: {
        en: 'Supermesh Current Constraint Equation across Shared Current Source Is',
        hi: 'साझा धारा स्रोत Is के बीच सुपरमेष धारा बाधा समीकरण',
        bn: 'শেয়ার্ড কারেন্ট সোর্স Is এর মধ্যে সুপারমেশ কারেন্ট শর্ত সমীকরণ'
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
    },
    {
      id: 'ex-mesh-2',
      problem: {
        en: 'A 2-mesh network has circuit values: Vs1 = 28 V (Mesh 1 drive), Vs2 = 12 V (Mesh 2 drive opposing), R1 = 6 Ω (Mesh 1 exclusive), R2 = 8 Ω (Mesh 2 exclusive), and shared resistor Rm = 4 Ω between Mesh 1 and Mesh 2. Calculate clockwise mesh currents I1 and I2, and current Irm in shared resistor.',
        hi: 'एक 2-मेष नेटवर्क में मान हैं: Vs1 = 28 V, Vs2 = 12 V, R1 = 6 Ω, R2 = 8 Ω, और साझा प्रतिरोधक Rm = 4 Ω। दक्षिणावर्त मेष धाराओं I1 और I2, तथा साझा प्रतिरोधक में धारा Irm की गणना करें।',
        bn: '২-মেশ নেটওয়ার্কে মানসমূহ: Vs1 = 28 V, Vs2 = 12 V, R1 = 6 Ω, R2 = 8 Ω, এবং শেয়ার্ড রেজিস্টর Rm = 4 Ω। ঘড়ির কাঁটার দিকে মেশ কারেন্ট I1 ও I2 এবং শেয়ার্ড ব্রাঞ্চের কারেন্ট Irm নির্ণয় করুন।'
      },
      solution: {
        en: 'Given:\\n- Resistance Matrix Elements:\\n  R11 = R1 + Rm = 6 + 4 = 10 Ω\\n  R12 = -Rm = -4 Ω\\n  R21 = -Rm = -4 Ω\\n  R22 = R2 + Rm = 8 + 4 = 12 Ω\\n\\n- Voltage Vector:\\n  V1 = Vs1 = 28 V\\n  V2 = -Vs2 = -12 V\\n\\nSystem Equations:\\n10 I1 - 4 I2 = 28\\n-4 I1 + 12 I2 = -12\\n\\nStep 1: Calculate Determinant Δ\\nΔ = (10)(12) - (-4)(-4) = 120 - 16 = 104\\n\\nStep 2: Solve I1 using Cramer\'s Rule\\nI1 = [(28)(12) - (-12)(-4)] / 104 = [336 - 48] / 104 = 288 / 104 = 2.769 A\\n\\nStep 3: Solve I2 using Cramer\'s Rule\\nI2 = [(10)(-12) - (-4)(28)] / 104 = [-120 + 112] / 104 = -8 / 104 = -0.077 A\\n\\nStep 4: Shared Branch Current Irm (downward in Rm)\\nIrm = I1 - I2 = 2.769 - (-0.077) = 2.846 A\\n\\nAnswer:\\nI1 = 2.769 A, I2 = -0.077 A, Irm = 2.846 A',
        hi: 'समीकरण प्रणाली:\\n10 I1 - 4 I2 = 28\\n-4 I1 + 12 I2 = -12\\n\\nडिटरमिनेंट Δ = 104\\nI1 = (336 - 48) / 104 = 2.769 A\\nI2 = (-120 + 112) / 104 = -0.077 A\\nIrm = 2.769 - (-0.077) = 2.846 A',
        bn: 'সমীকরণ জোট:\\n10 I1 - 4 I2 = 28\\n-4 I1 + 12 I2 = -12\\n\\nনির্ণায়ক Δ = 104\\nI1 = (৩৩৬ - ৪৮) / ১০৪ = ২.৭৬৯ A\\nI2 = (-১২০ + ১১২) / ১০৪ = -০.০৭৭ A\\nIrm = ২.৭৬৯ - (-০.০৭৭) = ২.৮৪৬ A'
      },
      givenValues: {
        'Vs1, Vs2': '28 V, 12 V',
        'R1, R2, Rm': '6 Ω, 8 Ω, 4 Ω'
      },
      finalAnswer: {
        en: 'I1 = 2.769 A, I2 = -0.077 A, Shared Irm = 2.846 A',
        hi: 'I1 = 2.769 A, I2 = -0.077 A, साझा Irm = 2.846 A',
        bn: 'I1 = ২.৭৬৯ A, I2 = -০.০৭৭ A, শেয়ার্ড Irm = ২.৮৪৬ A'
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
        { id: 'opt-b', text: { en: 'Non-planar 3D cross-over networks only', hi: 'केवल गैर-समतलीय 3D क्रॉस-ओवर नेटवर्क', bn: 'কেবল অ-সমতলীয় ত্রিমাত্রিক নেটওয়ার্ক' } },
        { id: 'opt-c', text: { en: 'AC high-frequency transmission lines only', hi: 'केवल एसी उच्च-आवृत्ति ट्रांसमिशन लाइनें', bn: 'কেবল এসি উচ্চ-কম্পাঙ্কের ট্র্যান্সমিশন লাইন' } },
        { id: 'opt-d', text: { en: 'Unilateral diode networks only', hi: 'केवल यूनिलेटरल डायोड नेटवर्क', bn: 'केवल ইউনিলেটারাল ডায়োড নেটওয়ার্ক' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'Mesh analysis relies on well-defined planar windows with interior boundary loops. Non-planar networks require Loop Analysis instead.',
        hi: 'मेष विश्लेषण सुपरिभाषित समतलीय खिड़कियों पर निर्भर करता है। गैर-समतलीय नेटवर्क के लिए लूप विश्लेषण की आवश्यकता होती है।',
        bn: 'মেশ অ্যানালিসিস সুনির্দিষ্ট সমতলীয় লুপের ওপর নির্ভরশীল। অ-সমতলীয় নেটওয়ার্কে লুপ অ্যানালিসিস প্রয়োজন।'
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
        en: 'Compare fundamental physics law, primary variable, applicability (planar vs non-planar), and special boundary cases (supernode vs supermesh).',
        hi: 'मूल भौतिकी नियम, प्राथमिक चर, प्रयोज्यता और विशेष सीमाओं की तुलना करें।',
        bn: 'মৌলিক নীতি, প্রধান চলক, প্রয়োগক্ষেত্র এবং বিশেষ শর্তের তুলনা করুন।'
      },
      answerKey: {
        en: '1. Fundamental Law: Nodal Analysis uses KCL; Mesh Analysis uses KVL.\\n2. Primary Variable: Nodal solves for Node Voltages; Mesh solves for Mesh Currents.\\n3. Circuit Applicability: Nodal applies to ALL networks; Mesh applies strictly to PLANAR networks.\\n4. Special Case: Nodal creates a SUPERNODE for ungrounded voltage sources; Mesh creates a SUPERMESH for shared current sources.',
        hi: '1. मूल नियम: नोडल KCL का उपयोग करता है; मेष KVL का उपयोग करता है।\\n2. प्राथमिक चर: नोडल नोड वोल्टेज हल करता है; मेष मेष धारा हल करता है।\\n3. प्रयोज्यता: नोडल सभी नेटवर्क पर लागू होता है; मेष केवल समतलीय नेटवर्क पर लागू होता है।\\n4. विशेष मामला: नोडल में सुपरनोड बनता है; मेष में सुपरमेष बनता है।',
        bn: '১. মৌলিক নীতি: নোডাল KCL ব্যবহার করে; মেশ KVL ব্যবহার করে।\\n২. প্রধান চলক: নোডাল নোড ভোল্টেজ বের করে; মেশ মেশ কারেন্ট বের করে।\\n৩. প্রয়োগক্ষেত্র: নোডাল সব সার্কিটে প্রযোজ্য; মেশ কেবল সমতলীয় সার্কিটে প্রযোজ্য।\\n৪. বিশেষ ক্ষেত্র: নোডালে সুপারনোড এবং মেশে সুপারমেশ গঠিত হয়।'
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
      'मेष धारा एक काल्पनिक परिसंचारी मात्रा है जो एक न्यूनतम बंद खिड़की लूप को सौंपी जाती है।',
      'सुपरमेष मेष लूपों को जोड़कर आसन्न मेषों के बीच साझा धारा स्रोतों को बायपास करता है।'
    ],
    bn: [
      'মেশ অ্যানালিসিস কেবল সমতলীয় নেটওয়ার্কে কার্যকর।',
      'মেশ কারেন্ট একটি কাল্পনিক কারেন্ট যা একটি ক্ষুদ্রতম আবদ্ধ লুপে ধরা হয়।',
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
};\n\n'''

# Extract lessons 7, 8, 9
lesson_7_to_10 = text[p_red:p_intro]

# Extract LESSON_NETWORK_THEOREMS_INTRO
lesson_10 = text[p_intro:p_export]

# Define LESSON_THEVENIN and LESSON_NORTON
lesson_thevenin = '''export const LESSON_THEVENIN: Lesson = {
  id: 'lsn-ch4-thevenin',
  subjectId: 'basic-electrical',
  chapterId: 'ch-dc-network-analysis',
  topicId: 'ch4-thevenins-theorem',
  order: 11,
  title: {
    en: "Thevenin's Theorem",
    hi: "थेवेनिन का प्रमेय",
    bn: "থেভেনিনের উপপাদ্য"
  },
  description: {
    en: "Statement, equivalent circuit representation (Vth in series with Rth), step-by-step procedures for finding Vth and Rth, load current evaluation, and practical application rules.",
    hi: "कथन, समतुल्य परिपथ (श्रेणी में Vth और Rth), Vth व Rth ज्ञात करने के चरणबद्ध तरीके, लोड धारा मूल्यांकन तथा व्यावहारिक नियम।",
    bn: "মূল বিবৃতি, সমতুল্য সার্কিট (সিরিজে Vth ও Rth), Vth এবং Rth নির্ণয়ের ধাপভিত্তিক প্রক্রিয়া, লোড কারেন্ট হিসাব ও বাস্তব প্রয়োগ।"
  },
  easyExplanation: {
    en: "Thevenin's Theorem states that any complex linear DC network with voltage and current sources and resistors can be replaced, at any two load terminals A and B, by a single independent voltage source Vth connected in series with a single equivalent resistance Rth.",
    hi: "थेवेनिन का प्रमेय कहता है कि वोल्टेज, धारा स्रोतों और प्रतिरोधकों वाले किसी भी जटिल रेखीय डीसी नेटवर्क को किन्हीं दो लोड टर्मिनलों A और B पर एक एकल स्वतंत्र वोल्टेज स्रोत Vth और उसके साथ श्रेणी में जुड़े प्रतिरोधक Rth द्वारा बदला जा सकता है।",
    bn: "থেভেনিনের উপপাদ্য অনুসারে, ভোল্টেজ সোর্স, কারেন্ট সোর্স এবং রেজিস্টরযুক্ত যেকোনো জটিল লিনিয়ার ডিসি সার্কিটকে দুটি লোড টার্মিনাল A এবং B এর সাপেক্ষে একটি একক ভোল্টেজ সোর্স Vth এবং তার সাথে সিরিজে যুক্ত রেজিস্টর Rth দ্বারা প্রতিস্থাপন করা যায়।"
  },
  detailedExplanation: {
    en: "1. Statement of Thevenin's Theorem: Any linear, two-terminal bilateral DC network containing independent or dependent voltage/current sources and passive resistors can be replaced by an equivalent simple series circuit consisting of a single voltage source Vth and an equivalent resistance Rth connected in series with the load resistor RL across terminals A-B.\\n\\n2. Thevenin Voltage (Vth): Defined as the open-circuit voltage across the specified output load terminals A and B when the load resistance RL is removed (Voc = Vth).\\n\\n3. Thevenin Resistance (Rth): Defined as the total equivalent resistance looking back into the open load terminals A and B with all independent sources deactivated (voltage sources short-circuited, current sources open-circuited).\\n\\n4. Procedure to Find Vth (Open Circuit Voltage):\\n   a. Disconnect and remove the load resistor RL from output terminals A and B.\\n   b. Leave terminals A and B open (no load current flows through terminals A-B).\\n   c. Use standard circuit analysis methods (Nodal Analysis, Mesh Analysis, KVL/KCL, or Divider Rules) to calculate the open-circuit voltage across terminals A and B. This voltage is Vth = Voc.\\n\\n5. Procedure to Find Rth (Equivalent Internal Resistance):\\n   a. Disconnect the load resistor RL from output terminals A and B.\\n   b. Deactivate all independent sources:\\n      - Replace ideal voltage sources with a SHORT CIRCUIT (zero internal resistance).\\n      - Replace ideal current sources with an OPEN CIRCUIT (infinite internal resistance).\\n   c. Calculate the total equivalent resistance between terminals A and B looking into the circuit. This resistance is Rth.\\n\\n6. Reconnecting Load and Load Current Formula: Connect Vth in series with Rth and RL across terminals A-B. The load current IL flowing through RL is:\\n   IL = Vth / (Rth + RL)\\n\\n7. Load Voltage and Power Formulas:\\n   - Load Voltage: VL = IL · RL = Vth · [RL / (Rth + RL)]\\n   - Power Dissipated in Load: PL = IL² · RL = [Vth / (Rth + RL)]² · RL\\n\\n8. Key Insight on Rth: Rth is NOT the physical internal resistance of a single resistor or battery. It represents the collective effective internal opposition offered by the entire complex circuit topology as viewed from terminals A and B.\\n\\n9. Advantage of Thevenin's Theorem: When analyzing the effect of changing RL (e.g., trying 10 different load values), the complex network behind terminals A-B is solved ONCE for Vth and Rth. New load currents are evaluated instantly using IL = Vth / (Rth + RL) without re-solving the entire circuit.\\n\\n10. Limitations of Thevenin's Theorem: Applies strictly to LINEAR networks; cannot be directly applied to non-linear components like diodes, transistors, or iron-core inductors without small-signal linearization.",
    hi: "1. थेवेनिन प्रमेय का कथन: स्वतंत्र या निर्भर स्रोतों और निष्क्रिय प्रतिरोधकों वाले किसी भी रेखीय, दो-टर्मिनल नेटवर्क को टर्मिनलों A-B पर एक एकल वोल्टेज स्रोत Vth और श्रेणी में जुड़े तुल्य प्रतिरोध Rth वाले सरल परिपथ में बदला जा सकता है।\\n\\n2. थेवेनिन वोल्टेज (Vth): लोड प्रतिरोधक RL को हटाने पर निर्दिष्ट आउटपुट टर्मिनलों A और B के बीच खुला-परिपथ वोल्टेज (Voc = Vth)।\\n\\n3. थेवेनिन प्रतिरोध (Rth): सभी स्वतंत्र स्रोतों को निष्क्रिय करने के बाद खुले टर्मिनलों A और B से परिपथ में देखने पर मिलने वाला कुल तुल्य प्रतिरोध।\\n\\n4. Vth ज्ञात करने की विधि:\\n   a. टर्मिनलों A और B से लोड प्रतिरोधक RL को हटाएँ।\\n   b. टर्मिनलों A और B को खुला छोड़ दें।\\n   c. नोडल, मेष या KVL/KCL का उपयोग करके खुला-परिपथ वोल्टेज Voc = Vth की गणना करें।\\n\\n5. Rth ज्ञात करने की विधि:\\n   a. लोड प्रतिरोधक RL को हटाएँ।\\n   b. सभी स्वतंत्र स्रोतों को बंद करें (वोल्टेज स्रोत -> शॉर्ट सर्किट, धारा स्रोत -> ओपन सर्किट)।\\n   c. A-B टर्मिनलों के बीच कुल तुल्य प्रतिरोध Rth की गणना करें।\\n\\n6. लोड धारा सूत्र: IL = Vth / (Rth + RL)\\n7. लोड वोल्टेज व शक्ति: VL = IL · RL, PL = IL² · RL\\n8. महत्वपूर्ण बिंदु: Rth किसी एक घटक का भौतिक प्रतिरोध नहीं है, बल्कि A-B से दिखने वाला संपूर्ण सर्किट का प्रभावी प्रतिरोध है।\\n9. लाभ: बार-बार लोड RL बदलने पर संपूर्ण सर्किट को पुन: हल नहीं करना पड़ता।\\n10. सीमाएं: केवल रेखीय नेटवर्क पर लागू होता है (डायोड, ट्रांजिस्टर आदि गैर-रेखीय घटकों पर सीधे नहीं)।",
    bn: "১. থেভেনিনের উপপাদ্যের মূল বিবৃতি: স্বাধীন বা নির্ভরশীল সোর্স এবং প্যাসিভ রেজিস্টরযুক্ত যেকোনো লিনিয়ার, টু-টার্মিনাল ডিসি সার্কিটকে A-B টার্মিনালের সাপেক্ষে একটি ভোল্টেজ সোর্স Vth এবং তার সাথে সিরিজে যুক্ত রেজিস্টর Rth দ্বারা গঠিত তুল্য সার্কিটে রূপান্তরিত করা যায়।\\n\\n২. থেভেনিন ভোল্টেজ (Vth): লোড রেজিস্টর RL অপসারণের পর আউটপুট টার্মিনাল A এবং B এর মধ্যকার ওপেন-সার্কিট বিভব (Voc = Vth)।\\n\\n৩. থেভেনিন রেজিস্ট্যান্স (Rth): সকল স্বাধীন সোর্স নিষ্ক্রিয় করার পর উন্মুক্ত A-B টার্মিনাল থেকে সার্কিটের দিকে তাকালে প্রাপ্ত মোট তুল্য রেজিস্ট্যান্স।\\n\\n৪. Vth নির্ণয়ের ধাপসমূহ:\\n   ক. A এবং B টার্মিনাল থেকে লোড রেজিস্টর RL অপসারণ করুন।\\n   খ. A এবং B টার্মিনাল দুটিকে উন্মুক্ত (Open) রাখুন।\\n   গ. নোডাল, মেশ বা KVL/KCL প্রয়োগ করে A-B টার্মিনালের ওপেন-সার্কিট ভোল্টেজ Voc = Vth বের করুন।\\n\\n৫. Rth নির্ণয়ের ধাপসমূহ:\\n   ক. টার্মিনাল A-B থেকে লোড RL সরিয়ে ফেলুন।\\n   খ. সকল স্বাধীন সোর্স বন্ধ করুন (ভোল্টেজ সোর্সকে শর্ট সার্কিট এবং কারেন্ট সোর্সকে ওপেন সার্কিট করুন)।\\n   গ. A-B টার্মিনালের সাপেক্ষে মোট সমতুল্য প্রতিরোধ Rth নির্ণয় করুন।\\n\\n৬. লোড কারেন্ট সমীকরণ: IL = Vth / (Rth + RL)\\n৭. লোড ভোল্টেজ ও ক্ষমতা: VL = IL · RL, PL = IL² · RL\\n৮. বিশেষ বৈশিষ্ট্য: Rth কোনো একক উপাদানের শারীরিক রেজিস্ট্যান্স নয়, এটি পুরো সার্কিটের সম্মিলিত অভ্যন্তরীণ বাঁধা।\\n৯. সুবিধা: ভিন্ন ভিন্ন লোডের জন্য বারবার পুরো সার্কিট সমাধান করতে হয় না।\\n১০. সীমাবদ্ধতা: কেবল লিনিয়ার নেটওয়ার্কে প্রযোজ্য (ডায়োড বা ট্রানজিস্টরের মতো নন-লিনিয়ার উপাদানে সরাসরি প্রয়োগযোগ্য নয়)।"
  },
  svgType: 'circuit-thevenin-concept',
  summary: {
    en: "Thevenin's Theorem reduces any complex linear circuit to a single voltage source Vth in series with an equivalent resistance Rth across the load terminals, enabling quick load current calculation IL = Vth / (Rth + RL).",
    hi: "थेवेनिन का प्रमेय किसी भी जटिल रेखीय परिपथ को लोड टर्मिनलों पर श्रेणी में जुड़े वोल्टेज स्रोत Vth और प्रतिरोध Rth में बदल देता है, जिससे लोड धारा IL = Vth / (Rth + RL) की गणना त्वरित हो जाती है।",
    bn: "থেভেনিনের উপপাদ্য যেকোনো জটিল লিনিয়ার সার্কিটকে সিরিজে থাকা একটি ভোল্টেজ সোর্স Vth এবং রেজিস্টর Rth এ রূপান্তর করে, যা লোড কারেন্ট IL = Vth / (Rth + RL) দ্রুত হিসাব করতে সাহায্য করে।"
  },
  sections: [
    {
      id: 'sec-thevenin-statement',
      title: { en: "1. Statement & Equivalent Circuit", hi: "1. कथन और समतुल्य परिपथ", bn: "১. মূল বিবৃতি ও সমতুল্য সার্কিট" },
      content: {
        en: "Any linear two-terminal network can be replaced by an equivalent circuit consisting of a voltage source Vth in series with a resistor Rth connected across terminals A-B.",
        hi: "किसी भी दो-टर्मिनल रेखीय परिपथ को A-B टर्मिनलों पर श्रेणी में जुड़े वोल्टेज स्रोत Vth और प्रतिरोधक Rth द्वारा बदला जा सकता है।",
        bn: "যেকোনো টু-টার্মিনাল লিনিয়ার সার্কিটকে A-B টার্মিনালের সাপেক্ষে সিরিজে যুক্ত Vth এবং Rth সমন্বিত সমতুল্য সার্কিটে রূপান্তর করা যায়।"
      }
    },
    {
      id: 'sec-thevenin-procedure',
      title: { en: "2. Procedure to Determine Vth and Rth", hi: "2. Vth और Rth ज्ञात करने की कार्यविधि", bn: "২. Vth এবং Rth নির্ণয়ের ধাপসমূহ" },
      content: {
        en: "1. Remove RL and measure open-circuit voltage Voc across terminals A-B to obtain Vth.\\n2. Deactivate independent sources (short voltage sources, open current sources) and measure looking-back resistance across terminals A-B to obtain Rth.",
        hi: "1. RL को हटाकर A-B टर्मिनलों के बीच खुला-परिपथ वोल्टेज Voc ज्ञात करें जो Vth है।\\n2. स्वतंत्र स्रोतों को बंद करके (वोल्टेज स्रोत -> शॉर्ट, धारा स्रोत -> ओपन) A-B से तुल्य प्रतिरोध Rth ज्ञात करें।",
        bn: "১. RL সরিয়ে A-B টার্মিনালের ওপেন-সার্কিট ভোল্টেজ Voc পরিমাপ করুন যা Vth।\\n২. স্বাধীন সোর্সগুলো নিষ্ক্রিয় করে (ভোল্টেজ সোর্স শর্ট, কারেন্ট সোর্স ওপেন) A-B টার্মিনাল থেকে তুল্য রেজিস্ট্যান্স Rth বের করুন।"
      }
    }
  ],
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
    },
    {
      symbol: 'V_L',
      expression: 'V_L = I_L \\\\cdot R_L = V_{th} \\\\cdot \\\\frac{R_L}{R_{th} + R_L}',
      description: {
        en: 'Voltage Drop across Load Resistor RL',
        hi: 'लोड प्रतिरोधक RL पर वोल्टेज पतन',
        bn: 'লোড রেজিস্টর RL এ বিভব পতন'
      }
    },
    {
      symbol: 'P_L',
      expression: 'P_L = I_L^2 \\\\cdot R_L = \\\\left(\\\\frac{V_{th}}{R_{th} + R_L}\\\\right)^2 \\\\cdot R_L',
      description: {
        en: 'Power Dissipated by Load Resistor RL',
        hi: 'लोड प्रतिरोधक RL द्वारा खपत शक्ति',
        bn: 'লোড রেজিস্টর RL এ ব্যয়িত ক্ষমতা'
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
        en: 'Given:\\n- Vs = 30 V\\n- R1 = 12 Ω\\n- R2 = 6 Ω\\n- Load RL = 8 Ω across Terminals A-B\\n\\nStep 1: Calculate Thevenin Voltage Vth (Remove RL)\\nWith RL removed, terminals A-B are open-circuit.\\nThe open-circuit voltage across R2 is obtained via Voltage Divider Rule:\\nVth = Voc = Vs · [R2 / (R1 + R2)]\\nVth = 30 · [6 / (12 + 6)] = 30 · [6 / 18] = 30 · (1/3) = 10.0 V\\n\\nStep 2: Calculate Thevenin Resistance Rth (Deactivate Vs)\\nReplace Vs with a short circuit.\\nLooking back into terminals A-B, resistors R1 and R2 are in parallel:\\nRth = R1 || R2 = (R1 · R2) / (R1 + R2)\\nRth = (12 · 6) / (12 + 6) = 72 / 18 = 4.0 Ω\\n\\nStep 3: Calculate Load Current IL\\nIL = Vth / (Rth + RL) = 10.0 / (4.0 + 8.0) = 10.0 / 12.0 = 0.833 A (833.3 mA)\\n\\nAnswer:\\nThevenin Equivalent: Vth = 10.0 V, Rth = 4.0 Ω\\nLoad Current IL = 0.833 A',
        hi: 'Vth = 30 × [6 / (12 + 6)] = 10.0 V\\nRth = (12 × 6) / (12 + 6) = 4.0 Ω\\nIL = 10.0 / (4.0 + 8.0) = 0.833 A',
        bn: 'Vth = ৩০ × [৬ / (১২ + ৬)] = ১০.০ V\\nRth = (১২ × ৬) / (১২ + ৬) = ৪.০ Ω\\nIL = ১০.০ / (৪.০ + ৮.০) = ০.৮৩৩ A'
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
    },
    {
      id: 'ex-thev-2',
      problem: {
        en: 'In a bridge-fed active network, the open circuit voltage measured across load terminals A-B is Voc = 24 V. When a test load of RL = 10 Ω is connected across A-B, the measured load current is IL = 1.6 A. Determine the Thevenin resistance Rth of the circuit.',
        hi: 'एक परिपथ में, टर्मिनलों A-B पर खुला-परिपथ वोल्टेज Voc = 24 V है। जब RL = 10 Ω का लोड जोड़ा जाता है, तो लोड धारा IL = 1.6 A मापी जाती है। परिपथ का थेवेनिन प्रतिरोध Rth ज्ञात करें।',
        bn: 'একটি সার্কিটে A-B টার্মিনালে ওপেন-সার্কিট ভোল্টেজ Voc = 24 V। যখন RL = 10 Ω লোড যুক্ত করা হয়, তখন লোড কারেন্ট IL = 1.6 A পাওয়া যায়। সার্কিটটির থেভেনিন রেজিস্ট্যান্স Rth নির্ণয় করুন।'
      },
      solution: {
        en: 'Given:\\n- Open-circuit Voltage Vth = Voc = 24 V\\n- Load RL = 10 Ω\\n- Measured Load Current IL = 1.6 A\\n\\nFormula:\\nIL = Vth / (Rth + RL)\\n\\nStep 1: Rearrange equation for Rth\\nRth + RL = Vth / IL\\nRth + 10 = 24 / 1.6\\nRth + 10 = 15 Ω\\n\\nStep 2: Solve for Rth\\nRth = 15 - 10 = 5.0 Ω\\n\\nAnswer:\\nThevenin Resistance Rth = 5.0 Ω',
        hi: 'Rth + 10 = 24 / 1.6 = 15 ⇒ Rth = 15 - 10 = 5.0 Ω',
        bn: 'Rth + ১০ = ২৪ / ১.৬ = ১৫ ⇒ Rth = ১৫ - ১০ = ৫.০ Ω'
      },
      givenValues: {
        'Voc (Vth)': '24 V',
        'RL': '10 Ω',
        'IL': '1.6 A'
      },
      finalAnswer: {
        en: 'Rth = 5.0 Ω',
        hi: 'Rth = 5.0 Ω',
        bn: 'Rth = ৫.० Ω'
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
        { id: 'opt-a', text: { en: 'Short-circuiting the load terminals and measuring short-circuit current', hi: 'लोड टर्मिनलों को शॉर्ट करके धारा मापने से', bn: 'লোড টার্মিনাল শর্ট সার্কিট করে কারেন্ট মেপে' } },
        { id: 'opt-b', text: { en: 'Removing the load resistor and calculating open-circuit voltage across terminals A-B', hi: 'लोड प्रतिरोधक हटाकर A-B टर्मिनलों पर खुला-परिपथ वोल्टेज ज्ञात करके', bn: 'লোড রেজিস্টর সরিয়ে A-B টার্মিনালের ওপেন-সার্কিট ভোল্টেজ হিসাব করে' } },
        { id: 'opt-c', text: { en: 'Connecting a zero resistance wire across terminals A-B', hi: 'A-B टर्मिनलों पर शून्य प्रतिरोधक तार जोड़कर', bn: 'A-B টার্মিনালে জিরো রেজিস্ট্যান্স তার যুক্ত করে' } },
        { id: 'opt-d', text: { en: 'Dividing total source voltage by total number of resistors', hi: 'कुल वोल्टेज को कुल प्रतिरोधकों से विभाजित करके', bn: 'মোট সোর্স ভোল্টেজকে মোট রেজিস্টর দিয়ে ভাগ করে' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'Vth is strictly the open-circuit voltage across terminals A-B obtained after removing the load RL.',
        hi: 'Vth लोड RL हटाने के बाद A-B टर्मिनलों के बीच मापा गया खुला-परिपथ वोल्टेज है।',
        bn: 'Vth হলো লোড RL অপসারণের পর A-B টার্মিনালে প্রাপ্ত ওপেন-সার্কিট ভোল্টেজ।'
      }
    },
    {
      id: 'mcq-thev-2',
      question: {
        en: 'When finding Thevenin Resistance Rth, how must independent voltage sources and independent current sources be deactivated?',
        hi: 'थेवेनिन प्रतिरोध Rth ज्ञात करते समय, स्वतंत्र वोल्टेज स्रोतों और धारा स्रोतों को कैसे बंद किया जाना चाहिए?',
        bn: 'থেভেনিন রেজিস্ট্যান্স Rth নির্ণয়ের সময় স্বাধীন ভোল্টেজ ও কারেন্ট সোর্স কীভাবে নিষ্ক্রিয় করা হয়?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Voltage sources -> SHORT CIRCUIT, Current sources -> OPEN CIRCUIT', hi: 'वोल्टेज स्रोत -> शॉर्ट सर्किट, धारा स्रोत -> ओपन सर्किट', bn: 'ভোল্টেজ সোর্স -> শর্ট সার্কিট, কারেন্ট সোর্স -> ওপেন সার্কিট' } },
        { id: 'opt-b', text: { en: 'Voltage sources -> OPEN CIRCUIT, Current sources -> SHORT CIRCUIT', hi: 'वोल्टेज स्रोत -> ओपन सर्किट, धारा स्रोत -> शॉर्ट सर्किट', bn: 'ভোল্টেজ সোর্স -> ওপেন সার্কিট, কারেন্ট সোর্স -> শর্ट সার্কিট' } },
        { id: 'opt-c', text: { en: 'Both voltage and current sources replaced by 100 Ω resistors', hi: 'दोनों स्रोतों को 100 Ω के प्रतिरोधकों से बदलकर', bn: 'উভয় সোর্সকে ১০০ ওহম রেজিস্টর দিয়ে বদলে' } },
        { id: 'opt-d', text: { en: 'Leave all sources active and in place', hi: 'सभी स्रोतों को सक्रिय रहने दें', bn: 'সকল সোর্সকে সচল রেখে' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'Ideal voltage sources have zero internal resistance (Short Circuit); ideal current sources have infinite internal resistance (Open Circuit).',
        hi: 'आदर्श वोल्टेज स्रोत का आंतरिक प्रतिरोध शून्य होता है (शॉर्ट), तथा धारा स्रोत का अनंत होता है (ओपन)।',
        bn: 'আদর্শ ভোল্টেজ সোর্সের অভ্যন্তরীণ বাঁধা শূন্য (শর্ট) এবং কারেন্ট সোর্সের বাঁধা অসীম (ওপেন)।'
      }
    },
    {
      id: 'mcq-thev-3',
      question: {
        en: 'If a complex network has Vth = 20 V and Rth = 5 Ω, what load current flows through RL = 15 Ω?',
        hi: 'यदि एक परिपथ के लिए Vth = 20 V और Rth = 5 Ω है, तो RL = 15 Ω से कितनी धारा प्रवाहित होगी?',
        bn: 'একটি সার্কিটের Vth = 20 V এবং Rth = 5 Ω হলে, RL = 15 Ω এর মধ্য দিয়ে কত লোড কারেন্ট প্রবাহিত হবে?'
      },
      options: [
        { id: 'opt-a', text: { en: '1.0 A', hi: '1.0 A', bn: '১.০ A' } },
        { id: 'opt-b', text: { en: '2.0 A', hi: '2.0 A', bn: '২.০ A' } },
        { id: 'opt-c', text: { en: '4.0 A', hi: '4.0 A', bn: '৪.০ A' } },
        { id: 'opt-d', text: { en: '0.5 A', hi: '0.5 A', bn: '০.৫ A' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'IL = Vth / (Rth + RL) = 20 / (5 + 15) = 20 / 20 = 1.0 A.',
        hi: 'IL = 20 / (5 + 15) = 20 / 20 = 1.0 A।',
        bn: 'IL = ২০ / (৫ + ১৫) = ২০ / ২০ = ১.০ A।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-thev-1',
      question: {
        en: 'Explain step-by-step why Thevenin\'s Theorem is vastly superior to direct KCL/KVL when analyzing variable loads in DC systems.',
        hi: 'चरण-दर-चरण समझाएं कि डीसी प्रणालियों में परिवर्तनशील लोड का विश्लेषण करते समय थेवेनिन प्रमेय सीधे KCL/KVL की तुलना में अत्यधिक श्रेष्ठ क्यों है।',
        bn: 'পরিবর্তনশীল লোড বিশ্লেষণের ক্ষেত্রে সরাসরি KCL/KVL এর তুলনায় থেভেনিনের উপপাদ্য কেন অনেক বেশি সুবিধাজনক তা ব্যাখ্যা করুন।'
      },
      hint: {
        en: 'Focus on computational re-work required when changing RL under direct analysis versus single-variable equation substitution under Thevenin equivalent.',
        hi: 'सीधे विश्लेषण बनाम थेवेनिन मॉडल के तहत RL बदलने पर आवश्यक पुन: गणना पर ध्यान केंद्रित करें।',
        bn: 'বারবার RL পরিবর্তনের ফলে পুনঃগণনার জটিলতা বনাম থেভেনিন মডেলে সরাসরি মানের মান বসানোর পার্থক্যের ওপর আলোকপাত করুন।'
      },
      answerKey: {
        en: '1. Under direct KCL/KVL analysis, changing RL modifies the global system matrix equations. The entire set of simultaneous equations must be fully re-solved from scratch for EVERY new load value.\\n2. Under Thevenin\'s Theorem, the complex circuit behind terminals A-B is analyzed ONCE to find constant Vth and Rth.\\n3. For any subsequent change in RL, the new current is evaluated instantly via IL = Vth / (Rth + RL) without re-analyzing the original circuit network.',
        hi: '1. सीधे विश्लेषण में, RL बदलने पर पूरा परिपथ पुन: हल करना पड़ता है।\\n2. थेवेनिन मॉडल में, Vth और Rth केवल एक बार ज्ञात किए जाते हैं।\\n3. इसके बाद किसी भी नए RL के लिए, IL = Vth / (Rth + RL) से तुरंत मान प्राप्त हो जाता है।',
        bn: '১. সরাসরি KCL/KVL অ্যানালিসিসে লোড RL পরিবর্তন করলে প্রতিবার নতুন করে পুরো সার্কিট পুনঃসমাধান করতে হয়।\\n২. থেভেনিন মডেলে জটিল সার্কিটের জন্য Vth এবং Rth কেবল একবারই বের করতে হয়।\\n৩. পরবর্তীতে যেকোনো নতুন RL এর জন্য IL = Vth / (Rth + RL) সূত্রে মান বসিয়ে সরাসরি কারেন্ট বের করা যায়।'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Power supply output impedance characterization and load regulation testing',
      'Audio amplifier speaker matching (driving 4 Ω / 8 Ω speakers)',
      'Battery internal resistance evaluation in automotive starter circuits'
    ],
    hi: [
      'पावर सप्लाई आउटपुट प्रतिबाधा विशेषता और लोड विनियमन परीक्षण',
      'ऑडियो एम्पलीफायर स्पीकर मैचिंग (4 Ω / 8 Ω स्पीकर चलाना)',
      'ऑटोमोटिव स्टार्टर सर्किट में बैटरी के आंतरिक प्रतिरोध का मूल्यांकन'
    ],
    bn: [
      'পাওয়ার সাপ্লাই আউটপুট রেজিস্ট্যান্স নির্ণয় ও লোড রেগুলেশন পরীক্ষা',
      'অডিও অ্যাম্প্লিফায়ার স্পিকার ম্যাচিং (৪ Ω / ৮ Ω স্পিকার পরিচালনা)',
      'অটোমোবাইল স্টার্টার সার্কিটে ব্যাটারির অভ্যন্তরীণ রেজিস্ট্যান্স মূল্যায়ন'
    ]
  },
  importantPoints: {
    en: [
      'Vth is the OPEN-CIRCUIT voltage across load terminals with RL removed.',
      'Rth is calculated looking back into terminals A-B with ALL independent sources deactivated.',
      'Thevenin equivalent model applies strictly to linear bilateral networks.'
    ],
    hi: [
      'Vth लोड RL हटाने के बाद लोड टर्मिनलों पर खुला-परिपथ वोल्टेज है।',
      'Rth की गणना सभी स्वतंत्र स्रोतों को बंद करके A-B टर्मिनलों से की जाती है।',
      'थेवेनिन समतुल्य केवल रेखीय नेटवर्क पर लागू होता है।'
    ],
    bn: [
      'Vth হলো লোড RL অপসারণের পর উন্মুক্ত টার্মিনালের ভোল্টেজ।',
      'Rth হলো সকল স্বাধীন সোর্স বন্ধ করে A-B টার্মিনাল থেকে পরিমাপকৃত মোট বাঁধা।',
      'থেভেনিন মডেল কেবল লিনিয়ার সার্কিটের ক্ষেত্রে প্রযোজ্য।'
    ]
  },
  commonMistakes: {
    en: [
      'Forgetting to remove the load resistor RL before calculating Voc or Rth',
      'Open-circuiting voltage sources or short-circuiting current sources when deactivating sources',
      'Assuming Rth is a physical resistor inside the circuit rather than looking-back network opposition'
    ],
    hi: [
      'Voc या Rth की गणना करने से पहले लोड प्रतिरोधक RL को हटाना भूल जाना',
      'स्रोतों को बंद करते समय वोल्टेज स्रोतों को ओपन या धारा स्रोतों को शॉर्ट कर देना',
      'Rth को सर्किट के अंदर का एक वास्तविक भौतिक प्रतिरोधक मान लेना'
    ],
    bn: [
      'Voc বা Rth বের করার আগে লোড রেজিস্টর RL সরাতে ভুলে যাওয়া',
      'সোর্স বন্ধ করার সময় ভুলবশত ভোল্টেজ সোর্সকে ওপেন বা কারেন্ট সোর্সকে শর্ট করে ফেলা',
      'Rth কে সার্কিটের ভেতরের আসল ফিজিক্যাল রেজিস্টর হিসেবে ভুল ভাবা'
    ]
  }
};\n\n'''

lesson_norton = '''export const LESSON_NORTON: Lesson = {
  id: 'lsn-ch4-norton',
  subjectId: 'basic-electrical',
  chapterId: 'ch-dc-network-analysis',
  topicId: 'ch4-nortons-theorem',
  order: 12,
  title: {
    en: "Norton's Theorem",
    hi: "नॉर्टन का प्रमेय",
    bn: "নর্টনের উপপাদ্য"
  },
  description: {
    en: "Statement, Norton equivalent circuit (current source IN in parallel with RN), step-by-step procedures for IN and RN, load current via Current Divider Rule, and source transformation duality.",
    hi: "कथन, नॉर्टन समतुल्य परिपथ (समानांतर में धारा स्रोत IN और RN), IN और RN की चरणबद्ध प्रक्रियाएं, धारा विभाजन नियम से लोड धारा तथा स्रोत रूपांतरण द्वैतता।",
    bn: "মূল বিবৃতি, নর্টন সমতুল্য সার্কিট (প্যারালালে কারেন্ট সোর্স IN ও RN), IN এবং RN নির্ণয়ের ধাপসমূহ, কারেন্ট ডিভাইডার রুল দ্বারা লোড কারেন্ট এবং সোর্স ট্রান্সফরমেশন।"
  },
  easyExplanation: {
    en: "Norton's Theorem states that any complex linear DC network can be replaced, at any two load terminals A and B, by an equivalent circuit consisting of a single independent current source IN connected in parallel with an equivalent resistance RN.",
    hi: "नॉर्टन का प्रमेय कहता है कि किसी भी जटिल रेखीय डीसी नेटवर्क को किन्हीं दो लोड टर्मिनलों A और B पर एक एकल स्वतंत्र धारा स्रोत IN और उसके समानांतर जुड़े तुल्य प्रतिरोधक RN द्वारा बदला जा सकता है।",
    bn: "নর্টনের উপপাদ্য অনুসারে, যেকোনো জটিল লিনিয়ার ডিসি সার্কিটকে দুটি লোড টার্মিনাল A এবং B এর সাপেক্ষে একটি একক কারেন্ট সোর্স IN এবং তার সাথে প্যারালালে যুক্ত রেজিস্টর RN সমন্বিত সমতুল্য সার্কিট দ্বারা প্রতিস্থাপন করা যায়।"
  },
  detailedExplanation: {
    en: "1. Statement of Norton's Theorem: Any linear, two-terminal bilateral DC network containing independent or dependent voltage/current sources and passive resistors can be replaced by an equivalent parallel circuit consisting of a single current source IN in parallel with an equivalent resistance RN connected across output terminals A-B.\\n\\n2. Norton Current (IN): Defined as the short-circuit current flowing through terminals A and B when the load terminals are directly shorted together with a zero-resistance wire (Isc = IN).\\n\\n3. Norton Resistance (RN): Defined as the total equivalent resistance looking back into open load terminals A and B with all independent sources deactivated. Notice that Norton resistance is IDENTICAL to Thevenin resistance: RN = Rth.\\n\\n4. Procedure to Find IN (Short Circuit Current):\\n   a. Remove the load resistor RL from output terminals A and B.\\n   b. Connect a short-circuit wire (zero resistance) directly across terminals A and B.\\n   c. Calculate the short-circuit current Isc flowing through this wire using standard network analysis (Nodal, Mesh, or KCL/KVL). This current is IN = Isc.\\n\\n5. Procedure to Find RN (Equivalent Internal Resistance):\\n   a. Disconnect the load resistor RL and short-circuit wire from terminals A and B.\\n   b. Deactivate all independent sources:\\n      - Replace ideal voltage sources with a SHORT CIRCUIT.\\n      - Replace ideal current sources with an OPEN CIRCUIT.\\n   c. Calculate the total equivalent resistance between terminals A and B looking into the network. This is RN (which equals Rth).\\n\\n6. Reconnecting Load and Load Current Formula: Connect IN in parallel with RN and load RL across terminals A-B. Applying the Current Divider Rule, the load current IL flowing through RL is:\\n   IL = IN · [RN / (RN + RL)]\\n\\n7. Load Voltage and Power Formulas:\\n   - Load Voltage: VL = IL · RL = IN · [(RN · RL) / (RN + RL)]\\n   - Power Dissipated in Load: PL = IL² · RL\\n\\n8. Relationship Between Thevenin and Norton Equivalents (Duality & Source Transformation):\\n   Norton's Theorem is the exact dual of Thevenin's Theorem. A Thevenin voltage model (Vth in series with Rth) can be transformed into a Norton current model (IN in parallel with RN) using:\\n   - IN = Vth / Rth\\n   - RN = Rth\\n   - Vth = IN · RN\\n\\n9. When to Prefer Norton over Thevenin: Norton's Theorem is particularly convenient when analyzing parallel load branches, transistor collector current models, or current-driven sensor interfaces.\\n\\n10. Limitations of Norton's Theorem: Applies strictly to LINEAR networks; cannot be directly applied to non-linear devices without small-signal approximation.",
    hi: "1. नॉर्टन प्रमेय का कथन: किसी भी दो-टर्मिनल रेखीय परिपथ को A-B टर्मिनलों पर समानांतर में जुड़े एक धारा स्रोत IN और तुल्य प्रतिरोधक RN द्वारा बदला जा सकता है।\\n\\n2. नॉर्टन धारा (IN): A-B टर्मिनलों को शून्य-प्रतिरोध तार से शॉर्ट करने पर प्रवाहित होने वाली शॉर्ट-सर्किट धारा (Isc = IN)।\\n\\n3. नॉर्टन प्रतिरोध (RN): सभी स्वतंत्र स्रोतों को बंद करके A-B टर्मिनलों से परिपथ में देखने पर मिलने वाला कुल तुल्य प्रतिरोध (RN = Rth)।\\n\\n4. IN ज्ञात करने की विधि:\\n   a. A और B टर्मिनलों से लोड RL को हटाएँ।\\n   b. A और B के बीच एक शॉर्ट-सर्किट तार जोड़ें।\\n   c. शॉर्ट-सर्किट तार से प्रवाहित धारा Isc = IN ज्ञात करें।\\n\\n5. RN ज्ञात करने की विधि:\\n   a. RL को हटाएँ और स्रोतों को बंद करें (वोल्टेज स्रोत -> शॉर्ट, धारा स्रोत -> ओपन)।\\n   b. A-B से तुल्य प्रतिरोध RN की गणना करें।\\n\\n6. धारा विभाजन नियम से लोड धारा: IL = IN · [RN / (RN + RL)]\\n7. थेवेनिन-नॉर्टन रूपांतरण (द्वैतता):\\n   - IN = Vth / Rth\\n   - RN = Rth\\n   - Vth = IN · RN\\n8. लाभ: समानांतर लोड शाखाओं और ट्रांजिस्टर परिपथों के विश्लेषण में अत्यंत उपयोगी।\\n9. सीमाएं: केवल रेखीय परिपथों के लिए लागू।",
    bn: "১. নর্টনের উপপাদ্যের মূল বিবৃতি: যেকোনো লিনিয়ার টু-টার্মিনাল ডিসি সার্কিটকে A-B টার্মিনালের সাপেক্ষে সমান্তরালে (Parallel) যুক্ত একটি কারেন্ট সোর্স IN এবং রেজিস্টর RN বিশিষ্ট সমতুল্য সার্কিটে রূপান্তরিত করা যায়।\\n\\n২. নর্টন কারেন্ট (IN): A এবং B টার্মিনাল দুটিকে জিরো-রেজিস্ট্যান্স তার দ্বারা শর্ট সার্কিট করলে যে শর্ট-সার্কিট কারেন্ট প্রবাহিত হয় (Isc = IN)।\\n\\n৩. নর্টন রেজিস্ট্যান্স (RN): সকল স্বাধীন সোর্স নিষ্ক্রিয় করার পর A-B টার্মিনাল থেকে পরিমাপকৃত মোট বাঁধা। মনে রাখবেন, নর্টন রেজিস্ট্যান্স এবং থেভেনিন রেজিস্ট্যান্স সম্পূর্ণ একই: RN = Rth।\\n\\n৪. IN নির্ণয়ের ধাপসমূহ:\\n   ক. A এবং B টার্মিনাল থেকে লোড RL সরিয়ে ফেলুন।\\n   খ. A ও B টার্মিনালকে সরাসরি একটি তার দিয়ে শর্ট সার্কিট করুন।\\n   গ. নোডাল বা মেশ অ্যানালিসিস প্রয়োগ করে শর্ট-সার্কিট তারের মধ্য দিয়ে প্রবাহিত কারেন্ট Isc = IN নির্ণয় করুন।\\n\\n৫. RN নির্ণয়ের ধাপসমূহ:\\n   ক. লোড RL অপসারণ করে সকল স্বাধীন সোর্স বন্ধ করুন (ভোল্টেজ সোর্স শর্ট, কারেন্ট সোর্স ওপেন)।\\n   খ. A-B টার্মিনালের সাপেক্ষে তুল্য প্রতিরোধ RN বের করুন।\\n\\n৬. কারেন্ট ডিভাইডার রুল দ্বারা লোড কারেন্ট: IL = IN · [RN / (RN + RL)]\\n৭. থেভেনিন ও নর্টনের পারস্পরিক রূপান্তর (Duality):\\n   - IN = Vth / Rth\\n   - RN = Rth\\n   - Vth = IN · RN\\n৮. সুবিধা: প্যারালাল ব্রাঞ্চ এবং ট্রানজিস্টর কারেন্ট মডেল বিশ্লেষণের জন্য অত্যন্ত কার্যকর।\\n৯. সীমাবদ্ধতা: কেবল লিনিয়ার সার্কিটে প্রযোজ্য।"
  },
  svgType: 'circuit-norton-concept',
  summary: {
    en: "Norton's Theorem reduces any complex linear circuit to a single current source IN in parallel with RN, enabling load current evaluation via Current Divider Rule IL = IN · [RN / (RN + RL)].",
    hi: "नॉर्टन का प्रमेय किसी भी जटिल रेखीय परिपथ को समानांतर में जुड़े धारा स्रोत IN और प्रतिरोध RN में बदल देता है, जिससे धारा विभाजन नियम IL = IN · [RN / (RN + RL)] द्वारा लोड धारा प्राप्त होती है।",
    bn: "নর্টনের উপপাদ্য যেকোনো জটিল লিনিয়ার সার্কিটকে প্যারালালে থাকা একটি কারেন্ট সোর্স IN এবং রেজিস্টর RN এ রূপান্তর করে, যা কারেন্ট ডিভাইডার সূত্রে লোড কারেন্ট IL = IN · [RN / (RN + RL)] হিসাব সহজ করে।"
  },
  sections: [
    {
      id: 'sec-norton-statement',
      title: { en: "1. Statement & Equivalent Circuit", hi: "1. कथन और समतुल्य परिपथ", bn: "১. মূল বিবৃতি ও সমতুল্য সার্কিট" },
      content: {
        en: "Any linear two-terminal network can be replaced by an equivalent circuit consisting of a current source IN in parallel with a resistor RN connected across terminals A-B.",
        hi: "किसी भी दो-टर्मिनल रेखीय परिपथ को A-B टर्मिनलों पर समानांतर में जुड़े धारा स्रोत IN और प्रतिरोधक RN द्वारा बदला जा सकता है।",
        bn: "যেকোনো টু-টার্মিনাল লিনিয়ার সার্কিটকে A-B টার্মিনালের সাপেক্ষে প্যারালালে যুক্ত IN এবং RN সমন্বিত সমতুল্য সার্কিটে রূপান্তর করা যায়।"
      }
    },
    {
      id: 'sec-norton-duality',
      title: { en: "2. Thevenin to Norton Transformation Duality", hi: "2. थेवेनिन से नॉर्टन रूपांतरण द्वैतता", bn: "২. থেভেনিন থেকে নর্টন রূপান্তর" },
      content: {
        en: "Thevenin and Norton circuits are dual representations of the same physical circuit. You can convert between them using Ohm's law: IN = Vth / Rth and RN = Rth.",
        hi: "थेवेनिन और नॉर्टन परिपथ एक ही भौतिक परिपथ के दो रूप हैं। इन्हें ओम के नियम का उपयोग करके बदला जा सकता है: IN = Vth / Rth और RN = Rth।",
        bn: "থেভেনিন ও নর্টন সার্কিট একই সার্কিটের দুটি রূপ। ওহমের সূত্র ব্যবহার করে এদের রূপান্তর সম্ভব: IN = Vth / Rth এবং RN = Rth।"
      }
    }
  ],
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
    },
    {
      symbol: 'V_{th} \\\\leftrightarrow I_N',
      expression: 'V_{th} = I_N \\\\cdot R_N, \\\\quad I_N = \\\\frac{V_{th}}{R_{th}}, \\\\quad R_N = R_{th}',
      description: {
        en: 'Source Transformation Duality Relations between Thevenin and Norton Models',
        hi: 'थेवेनिन और नॉर्टन मॉडल के बीच स्रोत रूपांतरण संबंध',
        bn: 'থেভেনিন এবং নর্টন মডেলের মধ্যকার সোর্স ট্রান্সফরমেশন সম্পর্ক'
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
        en: 'Given:\\n- Vs = 24 V\\n- R1 = 6 Ω\\n- R2 = 12 Ω\\n- Load RL = 4 Ω across Terminals A-B\\n\\nStep 1: Calculate Norton Current IN (Short-Circuit Terminals A-B)\\nWhen A-B is short-circuited, parallel resistor R2 is completely bypassed (v_AB = 0 V).\\nThe entire short-circuit current flows through R1 from source Vs:\\nIN = Isc = Vs / R1 = 24 / 6 = 4.0 A\\n\\nStep 2: Calculate Norton Resistance RN (Deactivate Vs)\\nReplace Vs with a short circuit.\\nLooking back into terminals A-B, resistors R1 and R2 are in parallel:\\nRN = R1 || R2 = (6 · 12) / (6 + 12) = 72 / 18 = 4.0 Ω\\n\\nStep 3: Calculate Load Current IL using Current Divider Rule\\nIL = IN · [RN / (RN + RL)]\\nIL = 4.0 · [4.0 / (4.0 + 4.0)] = 4.0 · (4.0 / 8.0) = 4.0 · 0.5 = 2.0 A\\n\\nAnswer:\\nNorton Equivalent: IN = 4.0 A, RN = 4.0 Ω\\nLoad Current IL = 2.0 A',
        hi: 'IN = 24 / 6 = 4.0 A\\nRN = (6 × 12) / (6 + 12) = 4.0 Ω\\nIL = 4.0 × [4 / (4 + 4)] = 2.0 A',
        bn: 'IN = ২৪ / ৬ = ৪.০ A\\nRN = (৬ × ১২) / (৬ + ১২) = ৪.০ Ω\\nIL = ৪.০ × [৪ / (৪ + ৪)] = ২.০ A'
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
    },
    {
      id: 'ex-nort-2',
      problem: {
        en: 'Convert the Thevenin equivalent circuit with Vth = 36 V and Rth = 12 Ω into its Norton equivalent representation, and verify load voltage VL across RL = 6 Ω using both methods.',
        hi: 'Vth = 36 V और Rth = 12 Ω वाले थेवेनिन समतुल्य परिपथ को नॉर्टन समतुल्य में बदलें, और दोनों विधियों से RL = 6 Ω पर लोड वोल्टेज VL की पुष्टि करें।',
        bn: 'Vth = 36 V এবং Rth = 12 Ω বিশিষ্ট থেভেনিন সমতুল্য সার্কিটকে নর্টন সমতুল্য সার্কিটে রূপান্তর করুন এবং উভয় পদ্ধতিতে RL = 6 Ω এ লোড ভোল্টেজ VL যাচাই করুন।'
      },
      solution: {
        en: 'Given Thevenin Parameters: Vth = 36 V, Rth = 12 Ω, Load RL = 6 Ω\\n\\nStep 1: Source Transformation to Norton\\n- Norton Current: IN = Vth / Rth = 36 / 12 = 3.0 A\\n- Norton Resistance: RN = Rth = 12.0 Ω\\n\\nStep 2: Calculate Load Voltage VL using Thevenin Model\\nIL_thev = Vth / (Rth + RL) = 36 / (12 + 6) = 36 / 18 = 2.0 A\\nVL_thev = IL_thev · RL = 2.0 · 6 = 12.0 V\\n\\nStep 3: Calculate Load Voltage VL using Norton Model\\nIL_nort = IN · [RN / (RN + RL)] = 3.0 · [12 / (12 + 6)] = 3.0 · (12/18) = 2.0 A\\nVL_nort = IL_nort · RL = 2.0 · 6 = 12.0 V\\n\\nConclusion:\\nBoth models give identical load current (2.0 A) and load voltage (12.0 V), proving source duality.',
        hi: 'IN = 36 / 12 = 3.0 A, RN = 12 Ω\\nथेवेनिन VL = (36 / 18) × 6 = 12.0 V\\nनॉर्टन VL = [3.0 × (12 / 18)] × 6 = 12.0 V',
        bn: 'IN = ৩৬ / ১২ = ৩.০ A, RN = ১২ Ω\\nথেভেনিন VL = (৩৬ / ১৮) × ৬ = ১২.০ V\\nনর্টন VL = [৩.০ × (১২ / ১৮)] × ৬ = ১২.০ V'
      },
      givenValues: {
        'Vth': '36 V',
        'Rth': '12 Ω',
        'RL': '6 Ω'
      },
      finalAnswer: {
        en: 'IN = 3.0 A, RN = 12.0 Ω, Verified Load Voltage VL = 12.0 V',
        hi: 'IN = 3.0 A, RN = 12.0 Ω, सत्यापित लोड वोल्टेज VL = 12.0 V',
        bn: 'IN = ৩.০ A, RN = ১২.০ Ω, প্রমাণিত লোড ভোল্টেজ VL = ১২.০ V'
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
        { id: 'opt-b', text: { en: 'Short-circuiting load terminals A-B and measuring the short-circuit current', hi: 'लोड टर्मिनलों A-B को शॉर्ट करके शॉर्ट-सर्किट धारा मापकर', bn: 'লোড টার্মিনাল A-B শর্ট সার্কিট করে শর্ট-সার্কিট কারেন্ট মেপে' } },
        { id: 'opt-c', text: { en: 'Multiplying total voltage by total circuit resistance', hi: 'कुल वोल्टेज को कुल प्रतिरोध से गुणा करके', bn: 'মোট ভোল্টেজকে মোট রেজিস্ট্যান্স দিয়ে গুণ করে' } },
        { id: 'opt-d', text: { en: 'Replacing load resistor with a 1 Farad capacitor', hi: 'लोड प्रतिरोधक को 1 फैराड संधारित्र से बदलकर', bn: 'লোড রেজিস্টরকে ১ ফ্যারাড ক্যাপাসিটর দিয়ে বদলে' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'IN is strictly defined as the short-circuit current flowing through terminals A-B when shorted together.',
        hi: 'IN A-B टर्मिनलों को शॉर्ट करने पर प्रवाहित होने वाली शॉर्ट-सर्किट धारा है।',
        bn: 'IN হলো A-B টার্মিনাল শর্ট করার পর প্রবাহিত শর্ট-সার্কিট কারেন্ট।'
      }
    },
    {
      id: 'mcq-nort-2',
      question: {
        en: 'What is the relationship between Norton Resistance RN and Thevenin Resistance Rth for the same active network?',
        hi: 'एक ही परिपथ के लिए नॉर्टन प्रतिरोध RN और थेवेनिन प्रतिरोध Rth में क्या संबंध है?',
        bn: 'একই সার্কিটের ক্ষেত্রে নর্টন রেজিস্ট্যান্স RN এবং থেভেনিন রেজিস্ট্যান্স Rth এর সম্পর্ক কী?'
      },
      options: [
        { id: 'opt-a', text: { en: 'RN is strictly equal to Rth (RN = Rth)', hi: 'RN बिल्कुल Rth के बराबर है (RN = Rth)', bn: 'RN এবং Rth সম্পূর্ণ সমান (RN = Rth)' } },
        { id: 'opt-b', text: { en: 'RN is double Rth (RN = 2 Rth)', hi: 'RN Rth का दुगना है', bn: 'RN হলো Rth এর দ্বিগুণ' } },
        { id: 'opt-c', text: { en: 'RN is the reciprocal of Rth (RN = 1/Rth)', hi: 'RN Rth का व्युत्क्रम है', bn: 'RN হলো Rth এর বিপরীত' } },
        { id: 'opt-d', text: { en: 'RN is zero for all circuits', hi: 'RN सभी सर्किटों के लिए शून्य है', bn: 'সব সার্কিটের জন্য RN শূন্য' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'RN and Rth represent the same looking-back equivalent resistance with sources deactivated: RN = Rth.',
        hi: 'स्रोत बंद करने पर RN और Rth समान तुल्य प्रतिरोध दर्शाते हैं: RN = Rth।',
        bn: 'সোর্স বন্ধ রেখে পরিমাপকৃত RN এবং Rth একই তুল্য রেজিস্ট্যান্স নির্দেশ করে: RN = Rth।'
      }
    },
    {
      id: 'mcq-nort-3',
      question: {
        en: 'If a circuit has IN = 5 A and RN = 10 Ω, what is its equivalent Thevenin Voltage Vth?',
        hi: 'यदि एक सर्किट में IN = 5 A और RN = 10 Ω है, तो इसका थेवेनिन वोल्टेज Vth क्या होगा?',
        bn: 'একটি সার্কিটে IN = 5 A এবং RN = 10 Ω হলে, এর থেভেনিন ভোল্টেজ Vth কত হবে?'
      },
      options: [
        { id: 'opt-a', text: { en: '50 V', hi: '50 V', bn: '৫০ V' } },
        { id: 'opt-b', text: { en: '2 V', hi: '2 V', bn: '২ V' } },
        { id: 'opt-c', text: { en: '0.5 V', hi: '0.5 V', bn: '০.৫ V' } },
        { id: 'opt-d', text: { en: '15 V', hi: '15 V', bn: '১৫ V' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'Vth = IN · RN = 5 · 10 = 50 V.',
        hi: 'Vth = 5 × 10 = 50 V।',
        bn: 'Vth = ৫ × ১০ = ৫০ V।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-nort-1',
      question: {
        en: 'Demonstrate mathematically that the load current IL calculated using Thevenin\'s Theorem IL = Vth / (Rth + RL) is identical to IL calculated using Norton\'s Theorem IL = IN · [RN / (RN + RL)].',
        hi: 'गणितीय रूप से सिद्ध करें कि थेवेनिन प्रमेय से प्राप्त लोड धारा नॉर्टन प्रमेय से प्राप्त लोड धारा के समान है।',
        bn: 'গাণিতিকভাবে প্রমাণ করুন যে থেভেনিন সূত্রে প্রাপ্ত লোড কারেন্ট এবং নর্টন সূত্রে প্রাপ্ত লোড কারেন্ট অভিন্ন।'
      },
      hint: {
        en: 'Substitute Vth = IN · RN and Rth = RN into the Thevenin equation IL = Vth / (Rth + RL).',
        hi: 'थेवेनिन समीकरण में Vth = IN · RN और Rth = RN रखें।',
        bn: 'থেভেনিন সমীকরণে Vth = IN · RN এবং Rth = RN বসান।'
      },
      answerKey: {
        en: 'Start with Thevenin equation:\\nIL = Vth / (Rth + RL)\\n\\nSubstitute Vth = IN · RN and Rth = RN:\\nIL = (IN · RN) / (RN + RL)\\nIL = IN · [RN / (RN + RL)]\\n\\nThis exact expression is the Norton load current formula using the Current Divider Rule. Hence, both theorems yield identical results.',
        hi: 'IL = Vth / (Rth + RL)\\nVth = IN · RN और Rth = RN रखने पर:\\nIL = (IN · RN) / (RN + RL) = IN · [RN / (RN + RL)]\\nयह सिद्ध करता है कि दोनों प्रमेय समान परिणाम देते हैं।',
        bn: 'IL = Vth / (Rth + RL)\\nVth = IN · RN এবং Rth = RN বসালে:\\nIL = (IN · RN) / (RN + RL) = IN · [RN / (RN + RL)]\\nযা সরাসরি নর্টনের কারেন্ট ডিভাইডার সূত্র নির্দেশ করে। প্রমাণিত।'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Transistor small-signal collector current modeling and Norton equivalent output impedance',
      'Parallel current-fed sensor network modeling',
      'Industrial current loop (4-20 mA) transmitter circuit design'
    ],
    hi: [
      'ट्रांजिस्टर स्मॉल-सिग्नल कलेक्टर धारा मॉडल और नॉर्टन आउटपुट प्रतिबाधा',
      'समानांतर धारा-आधारित सेंसर नेटवर्क मॉडलिंग',
      'औद्योगिक धारा लूप (4-20 mA) ट्रांसमीटर सर्किट डिजाइन'
    ],
    bn: [
      'ট্রানজিস্টর স্মল-সিগন্যাল কালেক্টর কারেন্ট মডেলিং ও নর্টন আউটপুট রেজিস্ট্যান্স',
      'প্যারালাল কারেন্ট-ফিড সেন্সর নেটওয়ার্ক মডেলিং',
      'ইন্ডাস্ট্রিয়াল কারেন্ট লুপ (4-20 mA) ট্র্যান্সমিটার সার্কিট ডিজাইন'
    ]
  },
  importantPoints: {
    en: [
      'IN is the SHORT-CIRCUIT current flowing through load terminals A-B.',
      'RN is identical to Rth (RN = Rth) calculated with sources deactivated.',
      'Source transformation bridges Thevenin and Norton equivalents: Vth = IN · RN.'
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
      'Connecting Norton resistance RN in series with current source IN instead of in parallel',
      'Applying Voltage Divider Rule instead of Current Divider Rule when evaluating load current IL'
    ],
    hi: [
      'IN निर्धारित करते समय शॉर्ट-सर्किट धारा के बजाय ओपन-सर्किट वोल्टेज मापना',
      'धारा स्रोत IN के समानांतर के बजाय श्रेणी में नॉर्टन प्रतिरोध RN जोड़ना',
      'लोड धारा IL ज्ञात करते समय धारा विभाजन के बजाय वोल्टेज विभाजन नियम लगाना'
    ],
    bn: [
      'IN নির্ণয়ে শর্ট-সার্কিট কারেন্টের বদলে ওপেন-সার্কিট ভোল্টেজ মেপে ফেলা',
      'কারেন্ট সোর্স IN এর সাথে প্যারালালের বদলে সিরিজে RN যুক্ত করে ফেলা',
      'লোড কারেন্ট IL হিসাবের সময় কারেন্ট ডিভাইডার রুলের বদলে ভোল্টেজ ডিভাইডার রুল প্রয়োগ করা'
    ]
  }
};\n\n'''

chapter_4_export = '''export const CHAPTER_4_LESSONS: Record<string, Lesson> = {
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
'''

full_code = header + lesson_fund_to_kvl + lesson_node_branch + lesson_nodal + lesson_mesh + lesson_7_to_10 + lesson_10 + lesson_thevenin + lesson_norton + chapter_4_export

with open('/app/applet/src/data/chapter4Lessons.ts', 'w', encoding='utf-8') as f:
    f.write(full_code)

print("Replaced /app/applet/src/data/chapter4Lessons.ts cleanly!")

