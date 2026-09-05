import { Lesson } from '../types';

export const LESSON_POWER_FLOW_METHODS: Lesson = {
  id: 'lsn-ch16-power-flow-methods',
  topicId: 'tp-ch16-power-flow-methods',
  chapterId: 'ch-advanced-power-system-analysis',
  order: 7,
  title: {
    en: 'Power Flow Analysis: Gauss-Seidel, Newton-Raphson & Fast Decoupled',
    hi: 'पावर फ्लो विश्लेषण: गॉस-सीडेल, न्यूटन-राफसन एवं फास्ट डिकपल्ड',
    bn: 'পাওয়ার ফ্লো বিশ্লেষণ: গস-সাইডেল, নিউটন-র‌্যাফসন ও ফাস্ট ডিকাপল্ড'
  },
  description: {
    en: 'Non-linear power flow problem formulation: bus classification (Slack, PV, PQ), static load flow equations, iterative solution techniques (Gauss-Seidel, polar Newton-Raphson with 4-submatrix Jacobian J1-J4), Fast Decoupled Load Flow (FDLF B\' and B\'\'), and DC load flow approximation.',
    hi: 'अरेखीय पावर फ्लो समस्या का निरूपण: बस वर्गीकरण (स्लैक, PV, PQ), स्थैतिक लोड फ्लो समीकरण, पुनरावृत्त समाधान तकनीकें (गॉस-सीडेल, 4-उपमैट्रिक्स जैकोबियन J1-J4 के साथ पोलर न्यूटन-राफसन), फास्ट डिकपल्ड लोड फ्लो (FDLF B\' एवं B\'\'), तथा DC लोड फ्लो सन्निकटन।',
    bn: 'নন-লিনিয়ার পাওয়ার ফ্লো সমীকরণ: বাস শ্রেণিবিন্যাস (স্ল্যাক, PV, PQ), স্ট্যাটিক লোড ফ্লো সমীকরণ, পুনরাবৃত্তিমূলক সমাধান কৌশল (গস-সাইডেল, ৪-সাবম্যাট্রিক্স জ্যাকোবিয়ান সহ নিউটন-র‌্যাফসন), ফাস্ট ডিকাপল্ড লোড ফ্লো (FDLF) এবং ডিসি লোড ফ্লো আসন্নায়ন।'
  },
  estimatedMinutes: 46,
  easyExplanation: {
    en: 'In power systems engineering, the "Power Flow" or "Load Flow" problem is the most frequently run computer simulation in the world. It determines the exact operating state of the entire grid: voltage magnitude and phase angle at every substation, and active and reactive power flowing through every transmission line and transformer. Because electric loads draw constant power (P + jQ) rather than acting as constant linear impedances, the governing equations are non-linear and cannot be solved with simple algebra. Instead, powerful iterative algorithms are used. The Gauss-Seidel method updates voltages sequentially with low memory but converges slowly. The Newton-Raphson (NR) method uses multidimensional calculus via a Jacobian matrix of partial derivatives to achieve rapid quadratic convergence in 3 to 5 iterations. The Fast Decoupled Load Flow (FDLF) exploits the physical reality of high-voltage grids—that real power (P) couples tightly to voltage angles (theta), while reactive power (Q) couples tightly to voltage magnitudes (V)—to solve massive networks at lightning speed!',
    hi: 'पावर फ्लो विश्लेषण ग्रिड का सबसे महत्वपूर्ण सिमुलेशन है। यह प्रत्येक बस पर वोल्टेज परिमाण, फेज कोण और सभी लाइनों में बहने वाली वास्तविक व प्रतिघाती शक्ति (P और Q) का पता लगाता है। चूंकि लोड स्थिर शक्ति खींचते हैं, इसलिए समीकरण अरेखीय (non-linear) होते हैं जिन्हें पुनरावृत्त (iterative) विधियों से हल किया जाता है। गॉस-सीडेल विधि सरल है लेकिन धीमी है। न्यूटन-राफसन (NR) विधि जैकोबियन मैट्रिक्स का उपयोग करके केवल 3 से 5 चरणों में सटीक समाधान देती है। फास्ट डिकपल्ड (FDLF) विधि P-θ और Q-V के भौतिक अलगाव का लाभ उठाकर ग्रिड को अत्यधिक तेजी से हल करती है!',
    bn: 'পাওয়ার ফ্লো বিশ্লেষণ হলো গ্রিডের সর্বাধিক ব্যবহৃত কম্পিউটার সিমুলেশন। এটি প্রতিটি সাবস্টেশনের ভোল্টেজের মান ও কোণ এবং লাইনের মধ্য দিয়ে প্রবাহিত রিয়েল ও রিঅ্যাক্টিভ পাওয়ার (P ও Q) নির্ধারণ করে। লোডসমূহ কনস্ট্যান্ট পাওয়ার গ্রহণ করায় সমীকরণগুলো নন-লিনিয়ার হয় এবং পুনরাবৃত্তিমূলক পদ্ধতিতে সমাধান করতে হয়। গস-সাইডেল পদ্ধতি ধীরগতির হলেও মেমোরি কম নেয়। নিউটন-র‌্যাফসন (NR) পদ্ধতি জ্যাকোবিয়ান ম্যাট্রিক্স ব্যবহার করে মাত্র ৩ থেকে ৫ ধাপে দ্বিঘাত হারে নির্ভুল ফল দেয়। ফাস্ট ডিকাপল্ড (FDLF) পদ্ধতি P-θ এবং Q-V এর সংযোগ পৃথক করে অতি দ্রুত বিশাল নেটওয়ার্ক সমাধান করে!'
  },
  detailedExplanation: {
    en: 'The static load-flow problem calculates steady-state bus voltages and branch flows for specified generation schedules and customer demands:\n\n1. Bus Classification (4 Variables per Bus: |V_i|, delta_i, P_i, Q_i):\n• Slack / Swing Bus (Reference Bus, 1 per island): Specified |V_1| (usually 1.0 pu) and delta_1 = 0°. Unknowns: P_1 and Q_1. Absorbs system power mismatches and total grid transmission losses.\n• Generator / Voltage-Controlled Bus (PV Bus): Specified active generation P_gi and voltage magnitude |V_i|. Unknowns: phase angle delta_i and reactive generation Q_gi (subject to generator rotor thermal MVAR limits: Q_min <= Q_gi <= Q_max). If a limit is breached, the bus converts to PQ.\n• Load Bus (PQ Bus): Specified consumer demands P_di and Q_di (P_i = -P_di, Q_i = -Q_di). Unknowns: voltage magnitude |V_i| and phase angle delta_i.\n\n2. Static Power Flow Equations:\nP_i = |V_i| * sum_{j=1}^N |V_j| * |Y_ij| * cos(delta_i - delta_j - theta_ij)\nQ_i = |V_i| * sum_{j=1}^N |V_j| * |Y_ij| * sin(delta_i - delta_j - theta_ij)\nwhere Y_ij = |Y_ij| ∠theta_ij is the bus admittance entry.\n\n3. Newton-Raphson (NR) Method in Polar Coordinates:\nThe power mismatches are Delta P_i = P_i^spec - P_i^calc and Delta Q_i = Q_i^spec - Q_i^calc. The linear system is:\n[Delta P] = [J11  J12] [Delta delta]\n[Delta Q]   [J21  J22] [Delta |V| / |V|]\nwhere the Jacobian submatrices consist of partial derivatives:\n• J11: dP_i / d_delta_j\n• J12: |V_j| * dP_i / d|V_j|\n• J21: dQ_i / d_delta_j\n• J22: |V_j| * dQ_i / d|V_j|\nConvergence is quadratic: error decreases as (error)² per iteration, typically converging in 3 to 5 iterations regardless of system size.\n\n4. Fast Decoupled Load Flow (FDLF):\nIn high-voltage transmission grids, line resistance R is much smaller than reactance X (X/R >> 1), and voltage phase angle differences across lines are small (delta_i - delta_j ≈ 0):\n• Active power mismatches affect only voltage angles: Delta P / |V| = B\' * Delta delta\n• Reactive power mismatches affect only voltage magnitudes: Delta Q / |V| = B\'\' * Delta |V|\nB\' and B\'\' are constant real symmetric matrices formed from line series reactances (neglecting resistances and line charging). They are factorized only once at the start, making FDLF 4 to 5 times faster per iteration than full Newton-Raphson.',
    hi: 'लोड फ्लो समस्या में 4 चरों (|V|, delta, P, Q) में से प्रत्येक बस पर 2 ज्ञात और 2 अज्ञात होते हैं:\n\n1. बस वर्गीकरण:\n• स्लैक बस: |V| और delta = 0° ज्ञात; P और Q अज्ञात।\n• PV बस (जनरेटर): P और |V| ज्ञात; delta और Q अज्ञात।\n• PQ बस (लोड): P और Q ज्ञात; |V| और delta अज्ञात।\n\n2. न्यूटन-राफसन (NR) विधि:\nपावर मिसमैच और जैकोबियन मैट्रिक्स [J11 J12; J21 J22] का उपयोग करती है। यह 3 से 5 चरणों में द्विघात अभिसरण (quadratic convergence) देती है।\n\n3. फास्ट डिकपल्ड लोड फ्लो (FDLF):\nX/R >> 1 होने के कारण P-θ और Q-V को अलग किया जाता है:\nDelta P / |V| = B\' * Delta delta\nDelta Q / |V| = B\'\' * Delta |V|।\nस्थिर B\' और B\'\' मैट्रिक्स के कारण यह अत्यधिक तेज होती है।',
    bn: 'লোড ফ্লো সমস্যায় প্রতি বাসে ৪টি চলের (|V|, delta, P, Q) মধ্যে ২টি নির্দিষ্ট এবং ২টি অজানা থাকে:\n\n১. বাস প্রকারভেদ:\n• স্ল্যাক বাস: |V| ও delta = ০° নির্দিষ্ট; P ও Q অজানা।\n• PV বাস: P ও |V| নির্দিষ্ট; delta ও Q অজানা।\n• PQ বাস: P ও Q নির্দিষ্ট; |V| ও delta অজানা।\n\n২. নিউটন-র‌্যাফসন পদ্ধতি:\nপাওয়ার মিসম্যাচ এবং জ্যাকোবিয়ান ম্যাট্রিক্স ব্যবহার করে মাত্র ৩-৫ পুনরাবৃত্তিতে সমাধান প্রদান করে।\n\n৩. ফাস্ট ডিকাপল্ড পদ্ধতি (FDLF):\nX/R >> ১ অনুপাতের কারণে P-ডেল্টা এবং Q-ভোল্টেজ সংযোগ পৃথক করা হয়:\nDelta P / |V| = B\' * Delta delta এবং Delta Q / |V| = B\'\' * Delta |V|।'
  },
  formulas: [
    {
      id: 'f-ch16-power-flow-equations',
      symbol: 'P_i, Q_i',
      expression: 'P_i = \\sum_{j=1}^N |V_i| |V_j| |Y_{ij}| \\cos(\\delta_i - \\delta_j - \\theta_{ij}), \\quad Q_i = \\sum_{j=1}^N |V_i| |V_j| |Y_{ij}| \\sin(\\delta_i - \\delta_j - \\theta_{ij})',
      title: {
        en: 'Static Real and Reactive Power Injection Equations',
        hi: 'स्थैतिक वास्तविक एवं प्रतिघाती शक्ति अंतःक्षेपण समीकरण',
        bn: 'স্ট্যাটিক রিয়েল ও রিঅ্যাক্টিভ পাওয়ার ইনজেকশন সমীকরণ'
      },
      description: {
        en: 'Non-linear power flow algebraic equations relating net active and reactive bus injections to bus voltage magnitudes, phase angles, and Y_bus parameters.',
        hi: 'बस वोल्टेज, फेज कोण और Y_bus के संदर्भ में शुद्ध सक्रिय और प्रतिघाती शक्ति अंतःक्षेपण।',
        bn: 'বাস ভোল্টেজ, ফেজ কোণ ও Y_bus উপাদানের সাহায্যে নিট সক্রিয় ও প্রতিক্রিয়াশীল শক্তির বীজগণিতীয় সমীকরণ।'
      },
      variables: [
        { symbol: 'P_i, Q_i', name: { en: 'Calculated active and reactive power injected at bus i (pu)', hi: 'बस i पर परिकलित वास्तविक एवं प्रतिघाती शक्ति (pu)', bn: 'বাস i এ নিট রিয়েল ও রিঅ্যাক্টিভ পাওয়ার (pu)' } },
        { symbol: '|V_i|, |V_j|', name: { en: 'Voltage magnitudes at buses i and j (pu)', hi: 'बस i और j पर वोल्टेज परिमाण (pu)', bn: 'বাস i ও j এর ভোল্টেজ মান (pu)' } },
        { symbol: '\\delta_i, \\delta_j', name: { en: 'Voltage phase angles at buses i and j (rad)', hi: 'वोल्टेज फेज कोण (rad)', bn: 'ভোল্টেজ ফেজ কোণ (rad)' } },
        { symbol: '|Y_{ij}|, \\theta_{ij}', name: { en: 'Magnitude and angle of bus admittance entry Y_ij', hi: 'बस एडमिटेंस Y_ij का परिमाण एवं कोण', bn: 'বাস অ্যাডমিট্যান্স Y_ij এর মান ও কোণ' } }
      ]
    },
    {
      id: 'f-ch16-newton-raphson-jacobian',
      symbol: '[J]',
      expression: '\\begin{bmatrix} \\Delta P \\\\ \\Delta Q \\end{bmatrix} = \\begin{bmatrix} J_{11} & J_{12} \\\\ J_{21} & J_{22} \\end{bmatrix} \\begin{bmatrix} \\Delta \\delta \\\\ \\frac{\\Delta |V|}{|V|} \\end{bmatrix}',
      title: {
        en: 'Newton-Raphson Polar Power Flow Jacobian Matrix',
        hi: 'न्यूटन-राफसन पोलर पावर फ्लो जैकोबियन मैट्रिक्स',
        bn: 'নিউটন-র‌্যাফসন পোলার পাওয়ার ফ্লো জ্যাকোবিয়ান ম্যাট্রিক্স'
      },
      description: {
        en: 'Linearized mismatch relationship using partial derivative Jacobian submatrices J11 (dP/ddelta), J12 (dP/d|V|), J21 (dQ/ddelta), and J22 (dQ/d|V|).',
        hi: 'आंशिक अवकलज जैकोबियन उपमैट्रिक्स J11, J12, J21, और J22 का उपयोग करते हुए रैखिक संबंध।',
        bn: 'আংশিক ব্যবকলন জ্যাকোবিয়ান সাবম্যাট্রিক্স J11, J12, J21 ও J22 ব্যবহার করে রৈখিক মিসম্যাচ সম্পর্ক।'
      },
      variables: [
        { symbol: '\\Delta P, \\Delta Q', name: { en: 'Active and reactive power mismatch vectors (pu)', hi: 'सक्रिय एवं प्रतिघाती शक्ति मिसमैच वेक्टर (pu)', bn: 'পাওয়ার মিসম্যাচ ভেক্টর (pu)' } },
        { symbol: '\\Delta \\delta', name: { en: 'Bus voltage phase angle correction vector (rad)', hi: 'वोल्टेज फेज कोण सुधार वेक्टर (rad)', bn: 'ভোল্টেজ ফেজ কোণ সংশোধন ভেক্টর (rad)' } },
        { symbol: '\\Delta |V| / |V|', name: { en: 'Normalized voltage magnitude correction vector (pu)', hi: 'सामान्यीकृत वोल्टेज परिमाण सुधार वेक्टर (pu)', bn: 'ভোল্টেজ মান সংশোধন ভেক্টর (pu)' } }
      ]
    },
    {
      id: 'f-ch16-fdlf-equations',
      symbol: 'B\', B\'\'',
      expression: '\\frac{\\Delta P}{|V|} = B\' \\Delta \\delta, \\quad \\frac{\\Delta Q}{|V|} = B\'\' \\Delta |V|',
      title: {
        en: 'Fast Decoupled Load Flow (FDLF) Decoupled Matrix Equations',
        hi: 'फास्ट डिकपल्ड लोड फ्लो (FDLF) मैट्रिक्स समीकरण',
        bn: 'ফাস্ট ডিকাপল্ড লোড ফ্লো (FDLF) ম্যাট্রিক্স সমীকরণ'
      },
      description: {
        en: 'Decouples active and reactive equations using constant sparse susceptibility matrices B\' (size (N-1)x(N-1)) and B\'\' (size N_pq x N_pq).',
        hi: 'सक्रिय और प्रतिघाती समीकरणों को अलग-अलग स्थिर ससेप्टेंस मैट्रिक्स B\' और B\'\' द्वारा हल करता है।',
        bn: 'ধ্রুবক সাসপেনশন ম্যাট্রিক্স B\' এবং B\'\' ব্যবহার করে সক্রিয় ও প্রতিক্রিয়াশীল সমীকরণ পৃথক করে সমাধান করে।'
      },
      variables: [
        { symbol: 'B\'', name: { en: 'Susceptance matrix for active power-angle subproblem', hi: 'सक्रिय शक्ति-कोण उपसमस्या हेतु ससेप्टेंस मैट्रिक्स', bn: 'রিয়েল পাওয়ার-অ্যাঙ্গেল সাবপ্রবলেমের সাসপেনশন ম্যাট্রিক্স' } },
        { symbol: 'B\'\'', name: { en: 'Susceptance matrix for reactive power-voltage subproblem', hi: 'प्रतिघाती शक्ति-वोल्टेज उपसमस्या हेतु ससेप्टेंस मैट्रिक्स', bn: 'রিঅ্যাক্টিভ পাওয়ার-ভোল্টেজ সাবপ্রবলেমের সাসপেনশন ম্যাট্রিক্স' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-ch16-l07-algorithms-comparison',
      title: {
        en: 'Comparison of Power Flow Solution Algorithms',
        hi: 'पावर फ्लो समाधान एल्गोरिदम की तुलना',
        bn: 'পাওয়ার ফ্লো অ্যালগরিদমসমূহের তুলনামূলক আলোচনা'
      },
      content: {
        en: 'Selecting the optimal power flow solver depends on system size, R/X ratio, conditioning, and real-time execution constraints:\n\n1. Gauss-Seidel Method:\n• Convergence: Linear convergence. Requires 50 to 500+ iterations.\n• Computational Cost: O(N) per iteration; very simple to program with no matrix inversion.\n• Weakness: Slow convergence on large interconnected systems; highly sensitive to choice of acceleration factor (alpha ≈ 1.4 to 1.6).\n\n2. Newton-Raphson Method:\n• Convergence: Quadratic convergence (error doubles in decimal precision each step). Requires 3 to 5 iterations regardless of network bus count.\n• Computational Cost: Requires rebuilding the Jacobian matrix and performing sparse LU factorization each iteration.\n• Strength: Highly robust, virtually independent of system size, reliably converges even on stressed networks.\n\n3. Fast Decoupled Load Flow (Stott-Alsac Formulation):\n• Exploits P-theta and Q-V decoupling in EHV transmission where X >> R and line angular differences are small.\n• Inverts B\' and B\'\' only once; successive iterations require only back-substitutions.\n• Iteration speed is 4 to 5 times faster than NR with identical final precision, making it the industry workhorse for online contingency screening in SCADA/EMS.',
        hi: 'गॉस-सीडेल सरल है लेकिन 50+ पुनरावृत्तियाँ लेता है। न्यूटन-राफसन 3 से 5 चरणों में सटीक हल देता है और ग्रिड के आकार पर निर्भर नहीं करता। फास्ट डिकपल्ड (FDLF) विधि B\' और B\'\' का केवल एक बार फैक्टराइजेशन करती है, जिससे यह ऑनलाइन सुरक्षा विश्लेषण और SCADA के लिए उद्योग का मानक बन गई है।',
        bn: 'গস-সাইডেল পদ্ধতি সহজ হলেও ৫০টির বেশি পুনরাবৃত্তি নেয়। নিউটন-র‌্যাফসন পদ্ধতি মাত্র ৩-৫ ধাপে নির্ভুল সমাধান দেয়। ফাস্ট ডিকাপল্ড পদ্ধতি B\' ও B\'\' ম্যাট্রিক্স মাত্র একবার নির্ণয় করায় অনলাইন গ্রিড অপারেশনে এবং SCADA সিস্টেমে সবচেয়ে বেশি ব্যবহৃত হয়।'
      },
      schematicId: 'sch-ch16-power-flow-jacobian'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch16-l07-01',
      problem: {
        en: 'A 2-bus power system consists of Bus 1 (Slack Bus) with V_1 = 1.0 ∠0° pu, and Bus 2 (PQ Load Bus) demanding P_d2 = 0.5 pu and Q_d2 = 0.2 pu (injected P_2 = -0.5 pu, Q_2 = -0.2 pu). The transmission line connecting them has series impedance z = j0.2 pu (admittance y = -j5.0 pu). Perform one iteration of the Gauss-Seidel power flow method starting with flat voltage start V_2^(0) = 1.0 ∠0° pu to find V_2^(1).',
        hi: 'एक 2-बस सिस्टम में बस 1 (स्लैक बस) V_1 = 1.0 ∠0° pu है और बस 2 (PQ लोड बस) P_2 = -0.5 pu, Q_2 = -0.2 pu मांगती है। जोड़ने वाली लाइन की प्रतिबाधा z = j0.2 pu (y = -j5.0 pu) है। फ्लैट स्टार्ट V_2^(0) = 1.0 ∠0° pu से प्रारंभ करके V_2^(1) ज्ञात करने के लिए गॉस-सीडेल विधि का एक चरण हल कीजिए।',
        bn: 'একটি ২-বাস সিস্টেমে বাস ১ (স্ল্যাক বাস) V_1 = ১.০ ∠০° pu এবং বাস ২ (PQ লোড বাস) P_2 = -০.৫ pu, Q_2 = -০.২ pu বিদ্যুৎ গ্রহণ করে। সংযোগকারী লাইনের ইম্পিডেন্স z = j০.২ pu (y = -j৫.০ pu)। ফ্ল্যাট স্টার্ট V_2^(0) = ১.০ ∠০° pu ধরে গস-সাইডেল পদ্ধতির একটি পুনরাবৃত্তি সম্পন্ন করে V_2^(1) নির্ণয় করুন।'
      },
      solution: {
        en: 'Given:\n• Bus 1: V_1 = 1.0 + j0 pu\n• Bus 2: P_2 = -0.5 pu, Q_2 = -0.2 pu  ==>  P_2 - jQ_2 = -0.5 - j(-0.2) = -0.5 + j0.2 pu\n• Line Admittance y_12 = 1 / (j0.2) = -j5.0 pu\n• Y_bus matrix elements: Y_22 = y_12 = -j5.0 pu, Y_21 = -y_12 = +j5.0 pu\n\nStep 1: Gauss-Seidel Formula for PQ Bus:\nV_2^(k+1) = (1 / Y_22) * [ (P_2 - jQ_2) / (V_2^(k))* - Y_21 * V_1 ]\n\nStep 2: Evaluate at k = 0 (Flat Start V_2^(0) = 1.0 ∠0° pu):\n• (V_2^(0))* = 1.0 - j0 = 1.0\n• (P_2 - jQ_2) / (V_2^(0))* = (-0.5 + j0.2) / 1.0 = -0.5 + j0.2 pu\n• Y_21 * V_1 = (+j5.0) * (1.0 + j0) = +j5.0 pu\n• Numerator bracket = (-0.5 + j0.2) - (+j5.0) = -0.5 - j4.8 pu\n\nStep 3: Divide by Y_22 = -j5.0:\nV_2^(1) = (-0.5 - j4.8) / (-j5.0) = (-0.5 - j4.8) * (j / 5.0) = (-j0.5 + 4.8) / 5.0\nV_2^(1) = 0.96 - j0.10 pu\n\nStep 4: Express in Polar Form:\n• Magnitude: |V_2^(1)| = sqrt((0.96)² + (-0.10)²) = sqrt(0.9216 + 0.0100) = sqrt(0.9316) = 0.9652 pu\n• Phase Angle: delta_2^(1) = arctan(-0.10 / 0.96) = -5.94° (-0.1038 rad)\nV_2^(1) = 0.9652 ∠-5.94° pu',
        hi: 'चरण 1: V_2^(1) = (1 / Y_22) * [ (P_2 - jQ_2) / (V_2^(0))* - Y_21 * V_1 ]\nचरण 2: P_2 - jQ_2 = -0.5 + j0.2 pu; Y_21 * V_1 = j5.0 pu\nकोष्ठक = -0.5 - j4.8 pu\nचरण 3: V_2^(1) = (-0.5 - j4.8) / (-j5.0) = 0.96 - j0.10 pu\nचरण 4: पोलर रूप: |V_2| = 0.9652 pu, delta = -5.94°।',
        bn: 'ধাপ ১: গস-সাইডেল সূত্র: V_2^(১) = (১ / Y_22) * [ (P_2 - jQ_2) / (V_2^(০))* - Y_21 * V_1 ]\nধাপ ২: লব = (-০.৫ + j০.২) - j৫.০ = -০.৫ - j৪.৮ pu\nধাপ ৩: V_2^(১) = (-০.৫ - j৪.৮) / (-j৫.০) = ০.৯৬ - j০.১০ pu\nধাপ ৪: পোলার রূপ: V_2^(১) = ০.৯৬৫২ ∠-৫.৯৪° pu।'
      },
      givenValues: { 'V_1': '1.0 ∠0° pu', 'P_2': '-0.5 pu', 'Q_2': '-0.2 pu', 'z_12': 'j0.2 pu' },
      finalAnswer: {
        en: 'V_2^(1) = 0.96 - j0.10 pu = 0.9652 ∠-5.94° pu',
        hi: 'V_2^(1) = 0.96 - j0.10 pu = 0.9652 ∠-5.94° pu',
        bn: 'V_2^(১) = ০.৯৬ - j০.১০ pu = ০.৯৬৫২ ∠-৫.৯৪° pu'
      }
    },
    {
      id: 'ex-ch16-l07-02',
      problem: {
        en: 'For the same 2-bus system from Example 1 (V_1 = 1.0 ∠0° pu, Bus 2 has P_2^spec = -0.5 pu, Q_2^spec = -0.2 pu, line series reactance X = 0.2 pu with zero resistance), calculate the initial power mismatches Delta P_2^(0) and Delta Q_2^(0) at flat start (V_2^(0) = 1.0 ∠0° pu), and compute the Jacobian sub-element J11 = dP_2 / d_delta_2.',
        hi: 'उदाहरण 1 के उसी 2-बस सिस्टम के लिए (V_1 = 1.0 ∠0° pu, बस 2 पर P_2^spec = -0.5, Q_2^spec = -0.2, X = 0.2 pu, R = 0), फ्लैट स्टार्ट (V_2 = 1.0 ∠0°) पर प्रारंभिक पावर मिसमैच Delta P_2^(0), Delta Q_2^(0) और जैकोबियन तत्व J11 = dP_2/ddelta_2 ज्ञात कीजिए।',
        bn: 'উদাহরণ ১ এর ২-বাস সিস্টেমের জন্য (V_1 = ১.০ ∠০° pu, বাস ২ এ P_2^spec = -০.৫, Q_2^spec = -০.২, X = ০.২ pu, R = ০), ফ্ল্যাট স্টার্টে প্রাথমিক পাওয়ার মিসম্যাচ Delta P_2^(০), Delta Q_2^(০) এবং জ্যাকোবিয়ান উপাদান J11 = dP_2/ddelta_2 নির্ণয় করুন।'
      },
      solution: {
        en: 'Given:\n• |V_1| = 1.0, delta_1 = 0°\n• At flat start: |V_2| = 1.0, delta_2 = 0°\n• Admittance: y_12 = 1 / (j0.2) = -j5.0 pu  ==>  |Y_12| = 5.0, theta_12 = -90° (-pi/2 rad)\n• Y_22 = -j5.0 pu  ==>  |Y_22| = 5.0, theta_22 = -90°\n\nStep 1: Calculate Calculated Powers P_2^(0) and Q_2^(0) at Flat Start:\n• P_2 = |V_2|² |Y_22| cos(-theta_22) + |V_2||V_1||Y_21| cos(delta_2 - delta_1 - theta_21)\n  = (1.0)² * (5.0) * cos(90°) + (1.0)*(1.0)*(5.0)*cos(0° - 0° - (-90°))\n  = 0 + 5.0 * cos(90°) = 0 + 0 = 0.0 pu\n• Q_2 = -|V_2|² |Y_22| sin(-theta_22) + |V_2||V_1||Y_21| sin(delta_2 - delta_1 - theta_21)\n  = -(1.0)² * (5.0) * sin(90°) + 5.0 * sin(90°) = -5.0 + 5.0 = 0.0 pu\n\nStep 2: Calculate Power Mismatches:\n• Delta P_2^(0) = P_2^spec - P_2^(0) = -0.5 - 0.0 = -0.5 pu\n• Delta Q_2^(0) = Q_2^spec - Q_2^(0) = -0.2 - 0.0 = -0.2 pu\n\nStep 3: Calculate Jacobian Element J11 = dP_2 / d_delta_2:\n• J11 = dP_2 / d_delta_2 = -|V_2||V_1||Y_21| sin(delta_2 - delta_1 - theta_21)\n  = -(1.0)*(1.0)*(5.0)*sin(0° - (-90°)) = -5.0 * sin(90°) = -5.0 * 1.0 = -5.0 pu\nAlternatively, since P_2 = (|V_1||V_2| / X) * sin(delta_2 - delta_1) = (1.0 / 0.2) * sin(delta_2) = 5.0 * sin(delta_2):\n• dP_2 / d_delta_2 = 5.0 * cos(delta_2) = 5.0 * cos(0°) = +5.0 pu (depending on flow direction sign convention; here J11 = 5.0).',
        hi: 'चरण 1: फ्लैट स्टार्ट पर P_2^(0) = 0.0 pu, Q_2^(0) = 0.0 pu\nचरण 2: मिसमैच Delta P_2 = -0.5 - 0 = -0.5 pu; Delta Q_2 = -0.2 - 0 = -0.2 pu\nचरण 3: J11 = dP_2 / d_delta_2 = (|V_1||V_2| / X) * cos(delta_2 - delta_1) = (1.0*1.0 / 0.2) * cos(0°) = 5.0 pu।',
        bn: 'ধাপ ১: ফ্ল্যাট স্টার্টে P_2^(০) = ০.০ pu, Q_2^(০) = ০.০ pu\nধাপ ২: মিসম্যাচ Delta P_2 = -০.৫ pu, Delta Q_2 = -০.২ pu\nধাপ ৩: J11 = dP_2 / d_delta_2 = (১.০ * ১.০ / ০.২) * cos(০°) = ৫.০ pu।'
      },
      givenValues: { 'P_2^spec': '-0.5 pu', 'Q_2^spec': '-0.2 pu', 'X': '0.2 pu', 'Flat start': '|V| = 1.0, delta = 0°' },
      finalAnswer: {
        en: 'Delta P_2 = -0.5 pu, Delta Q_2 = -0.2 pu, J11 = 5.0 pu',
        hi: 'Delta P_2 = -0.5 pu, Delta Q_2 = -0.2 pu, J11 = 5.0 pu',
        bn: 'Delta P_2 = -০.৫ pu, Delta Q_2 = -০.২ pu, J11 = ৫.০ pu'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Day-ahead energy market clearing and generation dispatch feasibility verification.',
      'Real-time N-1 contingency analysis in transmission control centers (EMS) using Fast Decoupled Load Flow.',
      'Assessing voltage stability margins and transmission line thermal overload risks.'
    ],
    hi: [
      'डे-अहेड ऊर्जा बाजार क्लियरिंग और उत्पादन शेड्यूलिंग की व्यवहार्यता जांच।',
      'ट्रांसमिशन कंट्रोल सेंटर (EMS) में फास्ट डिकपल्ड विधि द्वारा रियल-टाइम N-1 कंटीजेंसी विश्लेषण।',
      'वोल्टेज स्थिरता मार्जिन और लाइन ओवरलोड जोखिमों का मूल्यांकन।'
    ],
    bn: [
      'বিদ্যুৎ বাজারের জন্য উৎপাদন সময়সূচী ও গ্রিড সক্ষমতা যাচাই।',
      'কন্ট্রোল সেন্টারে (EMS) ফাস্ট ডিকাপল্ড পদ্ধতির সাহায্যে রিয়েল-টাইম N-১ কনটিনজেন্সি বিশ্লেষণ।',
      'ভোল্টেজ স্থিতিশীলতার মার্জিন ও ট্রান্সমিশন লাইনের ওভারলোড ঝুঁকি নিরূপণ।'
    ]
  },
  importantPoints: {
    en: [
      'The Slack bus (Reference bus) fixes angle delta = 0° and supplies system active and reactive transmission losses.',
      'At PV (generator) buses, reactive generation Q_g must remain strictly within Q_min and Q_max; violating limits converts the bus into a PQ bus.',
      'Newton-Raphson achieves quadratic convergence (3 to 5 iterations), independent of grid size.',
      'Fast Decoupled Load Flow (FDLF) separates active (P-delta) and reactive (Q-V) subproblems using constant B\' and B\'\' matrices.'
    ],
    hi: [
      'स्लैक बस कोण delta = 0° तय करती है और सिस्टम की कुल पारेषण हानियों की भरपाई करती है।',
      'PV बस में यदि रिएक्टिव पावर सीमा (Q_min, Q_max) टूटती है, तो वह PQ बस में बदल जाती है।',
      'न्यूटन-राफसन विधि 3 से 5 चरणों में द्विघात अभिसरण प्राप्त करती है।',
      'FDLF स्थिर B\' और B\'\' मैट्रिक्स द्वारा P-delta और Q-V को अलग-अलग हल करता है।'
    ],
    bn: [
      'স্ল্যাক বাস delta = ০° কোণ নির্ধারণ করে এবং সিস্টেমের মোট বিদ্যুৎ অপচয় পূরণ করে।',
      'PV বাসের রিঅ্যাক্টিভ পাওয়ার সীমা অতিক্রম করলে তা PQ বাসে রূপান্তরিত হয়।',
      'নিউটন-র‌্যাফসন পদ্ধতি সিস্টেমের আকার নির্বিশেষে ৩-৫ পদক্ষেপে সমাধান সম্পন্ন করে।',
      'FDLF পদ্ধতি স্থির B\' ও B\'\' ম্যাট্রিক্সের সাহায্যে P-delta এবং Q-V কে পৃথকভাবে দ্রুত সমাধান করে।'
    ]
  },
  commonMistakes: {
    en: [
      'Treating the Slack bus as an ordinary PV bus in the Jacobian formulation (Slack bus rows and columns are completely omitted).',
      'Forgetting that angles in the Jacobian derivative formulas must be expressed in radians, not degrees.',
      'Not switching a PV bus to a PQ bus when its reactive power output exceeds Q_max.'
    ],
    hi: [
      'जैकोबियन बनाते समय स्लैक बस को सामान्य बस मान लेना (स्लैक बस की पंक्तियों और स्तंभों को छोड़ दिया जाता है)।',
      'यह भूल जाना कि जैकोबियन के सूत्रों में कोण हमेशा रेडियन में होने चाहिए, डिग्री में नहीं।',
      'Q_max पार होने पर PV बस को PQ बस में बदलना भूल जाना।'
    ],
    bn: [
      'জ্যাকোবিয়ান ম্যাট্রিক্সে স্ল্যাক বাস অন্তর্ভুক্ত করা (স্ল্যাক বাসের সারি ও কলাম বাদ দিতে হয়)।',
      'জ্যাকোবিয়ান সূত্রে কোণকে ডিগ্রির বদলে রেডিয়ানে প্রকাশ করতে ভুলে যাওয়া।',
      'Q_max অতিক্রম করার পর PV বাসকে PQ বাসে রূপান্তর না করা।'
    ]
  },
  keyTakeaways: {
    en: [
      'Power flow non-linearities stem from constant-power consumer load models.',
      'Newton-Raphson is the gold standard for robust convergence, while FDLF provides unmatched computational speed.',
      'Accurate handling of generator reactive limits (Q-limits) is critical to prevent simulated voltage collapse.'
    ],
    hi: [
      'लोड फ्लो की अरेखीयता स्थिर-शक्ति उपभोक्ता लोड मॉडल के कारण होती है।',
      'न्यूटन-राफसन मजबूत अभिसरण के लिए मानक है, जबकि FDLF बेजोड़ गति प्रदान करती है।',
      'वोल्टेज पतन को रोकने के लिए जनरेटर Q-सीमाओं का सटीक प्रबंधन अत्यंत महत्वपूर्ण है।'
    ],
    bn: [
      'কনস্ট্যান্ট-পাওয়ার লোড মডেলিংয়ের কারণে পাওয়ার ফ্লো সমস্যা নন-লিনিয়ার হয়।',
      'নির্ভুলতার জন্য নিউটন-র‌্যাফসন এবং ক্ষিপ্রতার জন্য ফাস্ট ডিকাপল্ড পদ্ধতি বিশ্বজুড়ে ব্যবহৃত হয়।',
      'সিস্টেমের ভোল্টেজ পতন এড়াতে জেনারেটরের Q-সীমার সঠিক প্রয়োগ অপরিহার্য।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch16-l07-01',
      question: {
        en: 'What are the two specified (known) input quantities at a Generator (PV) Bus in power flow analysis?',
        hi: 'पावर फ्लो विश्लेषण में जनरेटर (PV) बस पर कौन सी दो इनपुट राशियाँ निर्दिष्ट (ज्ञात) होती हैं?',
        bn: 'পাওয়ার ফ্লো বিশ্লেষণে একটি জেনারেটর (PV) বাসে কোন দুটি ইনপুট রাশি নির্দিষ্ট (জানা) থাকে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Real power generation (P) and voltage magnitude (|V|)', hi: 'वास्तविक शक्ति उत्पादन (P) और वोल्टेज परिमाण (|V|)', bn: 'রিয়েল পাওয়ার উৎপাদন (P) এবং ভোল্টেজ মান (|V|)' } },
        { id: 'opt-2', text: { en: 'Real power (P) and reactive power (Q)', hi: 'वास्तविक शक्ति (P) और प्रतिघाती शक्ति (Q)', bn: 'রিয়েল পাওয়ার (P) এবং রিঅ্যাক্টিভ পাওয়ার (Q)' } },
        { id: 'opt-3', text: { en: 'Voltage magnitude (|V|) and phase angle (delta)', hi: 'वोल्टेज परिमाण (|V|) और फेज कोण (delta)', bn: 'ভোল্টেজ মান (|V|) এবং ফেজ কোণ (delta)' } },
        { id: 'opt-4', text: { en: 'Reactive power (Q) and phase angle (delta)', hi: 'प्रतिघाती शक्ति (Q) और फेज कोण (delta)', bn: 'রিঅ্যাক্টিভ পাওয়ার (Q) এবং ফেজ কোণ (delta)' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'At a PV bus, the turbine governor sets active power P, while the generator excitation system (AVR) holds voltage magnitude |V| constant.',
        hi: 'PV बस पर गवर्नर वास्तविक शक्ति P और AVR वोल्टेज परिमाण |V| को नियंत्रित करता है।',
        bn: 'PV বাসে গভর্নর রিয়েল পাওয়ার P নিয়ন্ত্রণ করে এবং AVR ভোল্টেজ মান |V| নির্দিষ্ট রাখে।'
      }
    },
    {
      id: 'mcq-ch16-l07-02',
      question: {
        en: 'Why is a Slack (Swing) Bus mandatory in power flow formulation?',
        hi: 'पावर फ्लो निरूपण में स्लैक (स्विंग) बस अनिवार्य क्यों है?',
        bn: 'পাওয়ার ফ্লো সমীকরণে একটি স্ল্যাক (সুইং) বাস রাখা বাধ্যতামূলক কেন?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Total system I²R transmission losses cannot be calculated a priori until all bus voltages and branch currents are solved', hi: 'सभी बस वोल्टेज और धाराओं के हल होने से पहले ग्रिड की कुल ट्रांसमिशन हानियों (losses) का अग्रिम पता नहीं लगाया जा सकता', bn: 'সকল বাস ভোল্টেজ ও কারেন্ট নির্ণয়ের পূর্বে গ্রিডের মোট সঞ্চালন অপচয় আগে থেকে জানা অসম্ভব' } },
        { id: 'opt-2', text: { en: 'It provides direct mechanical grounding for lightning protection', hi: 'यह तड़ित सुरक्षा के लिए सीधा ग्राउंडिंग प्रदान करती है', bn: 'এটি বজ্রপাত সুরক্ষায় গ্রাউন্ডিং প্রদান করে' } },
        { id: 'opt-3', text: { en: 'To convert all AC currents into DC currents', hi: 'सभी AC धाराओं को DC में बदलने के लिए', bn: 'সকল এসি কারেন্টকে ডিসিতে রূপান্তর করতে' } },
        { id: 'opt-4', text: { en: 'Because transmission line resistance is always exactly zero', hi: 'क्योंकि लाइन प्रतिरोध हमेशा ठीक शून्य होता है', bn: 'কারণ লাইনের রোধ সর্বদা শূন্য থাকে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Since grid transmission losses depend on line currents which are unknown before convergence, the slack generator must dynamically make up the difference between total generation and total demand plus losses.',
        hi: 'चूंकि कुल सिस्टम हानियां पहले से ज्ञात नहीं होतीं, इसलिए स्लैक बस मांग और हानियों के बीच के अंतर की पूर्ति करती है।',
        bn: 'সিস্টেমের মোট অপচয় আগে থেকে জানা না থাকায় স্ল্যাক বাস উৎপাদন ও মোট চাহিদার মধ্যকার ঘাটতি পূরণ করে।'
      }
    },
    {
      id: 'mcq-ch16-l07-03',
      question: {
        en: 'What mathematical convergence characteristic does the Newton-Raphson power flow method exhibit near the solution?',
        hi: 'न्यूटन-राफसन पावर फ्लो विधि समाधान के निकट कौन सा गणितीय अभिसरण अभिलक्षण प्रदर्शित करती है?',
        bn: 'সমাধানের কাছাকাছি পৌঁছালে নিউটন-র‌্যাফসন পাওয়ার ফ্লো পদ্ধতি কোন গাণিতিক অভিসরণ বৈশিষ্ট্য প্রদর্শন করে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Quadratic convergence (error squared in each iteration)', hi: 'द्विघात अभिसरण (प्रत्येक चरण में त्रुटि का वर्ग होता है)', bn: 'দ্বিঘাত অভিসরণ (প্রতি পদক্ষেপে ত্রুটি বর্গাকারে হ্রাস পায়)' } },
        { id: 'opt-2', text: { en: 'Linear convergence (fixed geometric ratio)', hi: 'रैखिक अभिसरण (निश्चित ज्यामितीय अनुपात)', bn: 'রৈখিক অভিসরণ' } },
        { id: 'opt-3', text: { en: 'Logarithmic convergence', hi: 'लघुगणकीय अभिसरण', bn: 'লগারিদমিক অভিসরণ' } },
        { id: 'opt-4', text: { en: 'Exponential divergence', hi: 'घातीय विचलन', bn: 'সূচকীয় অপসারণ' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Newton-Raphson has quadratic convergence (epsilon_{k+1} ≈ C * epsilon_k²), doubling significant correct decimal digits on each iteration near the root.',
        hi: 'न्यूटन-राफसन में द्विघात अभिसरण होता है, जिससे प्रत्येक चरण में सही दशमलव अंकों की संख्या दोगुनी हो जाती है।',
        bn: 'নিউটন-র‌্যাফসন পদ্ধতিতে প্রতি পুনরাবৃত্তিতে ত্রুটির মাত্রা বর্গাকারে কমে গিয়ে দ্রুত নির্ভুল মান পাওয়া যায়।'
      }
    },
    {
      id: 'mcq-ch16-l07-04',
      question: {
        en: 'If an N-bus power system contains 1 Slack bus, N_pv Generator buses, and N_pq Load buses, what is the dimension of the Jacobian matrix in the Newton-Raphson method?',
        hi: 'यदि एक N-बस सिस्टम में 1 स्लैक बस, N_pv जनरेटर बसें और N_pq लोड बसें हैं, तो न्यूटन-राफसन जैकोबियन मैट्रिक्स का आयाम क्या होगा?',
        bn: 'একটি N-বাস পাওয়ার সিস্টেমে ১টি স্ল্যাক বাস, N_pv জেনারেটর বাস এবং N_pq লোড বাস থাকলে নিউটন-র‌্যাফসন জ্যাকোবিয়ান ম্যাট্রিক্সের মাত্রা কত হবে?'
      },
      options: [
        { id: 'opt-1', text: { en: '(2 * N_pq + N_pv) x (2 * N_pq + N_pv)', hi: '(2 * N_pq + N_pv) x (2 * N_pq + N_pv)', bn: '(২ * N_pq + N_pv) x (২ * N_pq + N_pv)' } },
        { id: 'opt-2', text: { en: '(2N) x (2N)', hi: '(2N) x (2N)', bn: '(২N) x (২N)' } },
        { id: 'opt-3', text: { en: '(N - 1) x (N - 1)', hi: '(N - 1) x (N - 1)', bn: '(N - ১) x (N - ১)' } },
        { id: 'opt-4', text: { en: '(N_pq) x (N_pv)', hi: '(N_pq) x (N_pv)', bn: '(N_pq) x (N_pv)' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Unknowns are (N-1) angles (from N_pv + N_pq buses) plus N_pq voltage magnitudes. Total size = (N_pv + N_pq) + N_pq = 2*N_pq + N_pv.',
        hi: 'अज्ञात चर (N_pv + N_pq) कोण और N_pq वोल्टेज परिमाण होते हैं, इसलिए आकार (2*N_pq + N_pv) होता है।',
        bn: 'অজানা চলক হলো (N_pv + N_pq) সংখ্যক কোণ এবং N_pq সংখ্যক ভোল্টেজ মান, যার মোট আকার (২*N_pq + N_pv)।'
      }
    },
    {
      id: 'mcq-ch16-l07-05',
      question: {
        en: 'What happens during load flow iterations when the calculated reactive power generation Q_g at a PV bus exceeds its rated maximum limit Q_max?',
        hi: 'लोड फ्लो के दौरान जब PV बस पर परिकलित प्रतिघाती शक्ति Q_g अपनी अधिकतम सीमा Q_max से अधिक हो जाती है तो क्या होता है?',
        bn: 'লোড ফ্লো পুনরাবৃত্তির সময় কোনো PV বাসের রিঅ্যাক্টিভ পাওয়ার উৎপাদন Q_g তার সর্বোচ্চ সীমা Q_max অতিক্রম করলে কী ঘটে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'The bus is immediately converted to a PQ bus with Q fixed at Q_max and |V| freed as an unknown', hi: 'बस तुरंत PQ बस में बदल जाती है जहाँ Q = Q_max तय हो जाता है और |V| अज्ञात चर बन जाता है', bn: 'বাসটি অবিলম্বে PQ বাসে রূপান্তরিত হয় যেখানে Q = Q_max নির্দিষ্ট থাকে এবং |V| অজানা চলকে পরিণত হয়' } },
        { id: 'opt-2', text: { en: 'The entire simulation aborts with an unrecoverable error', hi: 'सिमुलेशन तुरंत बंद हो जाता है', bn: 'সম্পূর্ণ সিমুলেশন বন্ধ হয়ে যায়' } },
        { id: 'opt-3', text: { en: 'The bus becomes the new Slack bus', hi: 'बस नई स्लैक बस बन जाती है', bn: 'বাসটি নতুন স্ল্যাক বাসে পরিণত হয়' } },
        { id: 'opt-4', text: { en: 'The line connected to that generator is automatically disconnected', hi: 'जनरेटर से जुड़ी लाइन अपने आप कट जाती है', bn: 'জেনারেটরের লাইনটি বিচ্ছিন্ন হয়ে যায়' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'When a generator hits its MVAR ceiling, AVR can no longer maintain voltage. Q is clamped to Q_max, and the bus is treated as a PQ bus, allowing |V| to decline.',
        hi: 'जब जनरेटर की MVAR सीमा समाप्त हो जाती है, तो AVR वोल्टेज बनाए नहीं रख सकता। Q को Q_max पर स्थिर कर दिया जाता है और बस PQ बस बन जाती है।',
        bn: 'জেনারেটর সর্বোচ্চ MVAR সীমায় পৌঁছালে AVR ভোল্টেজ ধরে রাখতে পারে না। Q কে Q_max এ ফিক্স করে বাসটিকে PQ বাস হিসেবে বিবেচনা করা হয়।'
      }
    },
    {
      id: 'mcq-ch16-l07-06',
      question: {
        en: 'What core physical assumption enables the Fast Decoupled Load Flow (FDLF) formulation?',
        hi: 'कौन सी मूलभूत भौतिक धारणा फास्ट डिकपल्ड लोड फ्लो (FDLF) निरूपण को सक्षम बनाती है?',
        bn: 'কোন মূল ভৌত অনুমানের ওপর ভিত্তি করে ফাস্ট ডিকাপল্ড লোড ফ্লো (FDLF) পদ্ধতি প্রতিষ্ঠিত?'
      },
      options: [
        { id: 'opt-1', text: { en: 'High X/R transmission ratio (P couples strongly to angle delta, while Q couples strongly to voltage |V|)', hi: 'उच्च X/R अनुपात (P का कोण delta से मजबूत संबंध है, जबकि Q का वोल्टेज |V| से संबंध है)', bn: 'উচ্চ X/R সঞ্চালন অনুপাত (P দৃঢ়ভাবে কোণ delta এর সাথে এবং Q দৃঢ়ভাবে ভোল্টেজ |V| এর সাথে যুক্ত)' } },
        { id: 'opt-2', text: { en: 'Transmission lines have zero reactance (X = 0)', hi: 'लाइनों में शून्य प्रतिघात (X = 0) होता है', bn: 'লাইনের রিঅ্যাক্ট্যান্স শূন্য (X = ০)' } },
        { id: 'opt-3', text: { en: 'All generator buses operate on Direct Current', hi: 'सभी जनरेटर बसें दिष्ट धारा (DC) पर काम करती हैं', bn: 'সকল জেনারেটর ডিসিতে চলে' } },
        { id: 'opt-4', text: { en: 'Load demand is constant impedance rather than constant power', hi: 'लोड मांग स्थिर प्रतिबाधा है न कि स्थिर शक्ति', bn: 'লোড সর্বদা কনস্ট্যান্ট ইম্পিডেন্স প্রকৃতির' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Because X >> R on EHV grids, active power flow is predominantly governed by phase angle differences, and reactive flow is governed by voltage magnitude gradients.',
        hi: 'EHV ग्रिड पर X >> R होने के कारण वास्तविक शक्ति फेज कोण से और प्रतिघाती शक्ति वोल्टेज परिमाण से नियंत्रित होती है।',
        bn: 'উচ্চ ভোল্টেজ গ্রিডে X >> R হওয়ায় রিয়েল পাওয়ার ফেজ কোণের পার্থক্যে এবং রিঅ্যাক্টিভ পাওয়ার ভোল্টেজ মানের পার্থক্যে প্রবাহিত হয়।'
      }
    },
    {
      id: 'mcq-ch16-l07-07',
      question: {
        en: 'In the DC power flow approximation, what is the active power flow P_ij on a lossless branch connecting bus i and bus j with reactance X_ij?',
        hi: 'DC पावर फ्लो सन्निकटन में, प्रतिघात X_ij वाली हानिरहित शाखा पर सक्रिय शक्ति प्रवाह P_ij क्या है?',
        bn: 'ডিসি পাওয়ার ফ্লো আসন্নায়নে, রিঅ্যাক্ট্যান্স X_ij বিশিষ্ট লসলেস শাখায় সক্রিয় শক্তি প্রবাহ P_ij কত?'
      },
      options: [
        { id: 'opt-1', text: { en: 'P_ij = (delta_i - delta_j) / X_ij', hi: 'P_ij = (delta_i - delta_j) / X_ij', bn: 'P_ij = (delta_i - delta_j) / X_ij' } },
        { id: 'opt-2', text: { en: 'P_ij = (delta_i + delta_j) * X_ij', hi: 'P_ij = (delta_i + delta_j) * X_ij', bn: 'P_ij = (delta_i + delta_j) * X_ij' } },
        { id: 'opt-3', text: { en: 'P_ij = X_ij / (delta_i - delta_j)', hi: 'P_ij = X_ij / (delta_i - delta_j)', bn: 'P_ij = X_ij / (delta_i - delta_j)' } },
        { id: 'opt-4', text: { en: 'P_ij = (V_i - V_j) / X_ij', hi: 'P_ij = (V_i - V_j) / X_ij', bn: 'P_ij = (V_i - V_j) / X_ij' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'DC load flow assumes |Vi| ≈ |Vj| ≈ 1.0 pu, R = 0, and sin(delta_i - delta_j) ≈ delta_i - delta_j, yielding P_ij = (delta_i - delta_j) / X_ij.',
        hi: 'DC लोड फ्लो में |V| = 1.0 और sin(delta) = delta माना जाता है, जिससे P_ij = (delta_i - delta_j) / X_ij प्राप्त होता है।',
        bn: 'ডিসি লোড ফ্লোতে |V| = ১.০ এবং sin(delta) = delta ধরা হয়, ফলে P_ij = (delta_i - delta_j) / X_ij হয়।'
      }
    },
    {
      id: 'mcq-ch16-l07-08',
      question: {
        en: 'Why is an acceleration factor (alpha ≈ 1.4 to 1.6) commonly used in the Gauss-Seidel power flow method?',
        hi: 'गॉस-सीडेल पावर फ्लो विधि में आमतौर पर त्वरण कारक (alpha ≈ 1.4 से 1.6) का उपयोग क्यों किया जाता है?',
        bn: 'গস-সাইডেল পাওয়ার ফ্লো পদ্ধতিতে অ্যাক্সিলারেশন ফ্যাক্টর (alpha ≈ ১.৪ থেকে ১.৬) ব্যবহারের উদ্দেশ্য কী?'
      },
      options: [
        { id: 'opt-1', text: { en: 'To accelerate the rate of convergence and reduce total required iterations', hi: 'अभिसरण की दर को तेज करने और कुल आवश्यक चरणों को कम करने के लिए', bn: 'অভিসরণের গতি বৃদ্ধি এবং মোট পুনরাবৃত্তি সংখ্যা হ্রাস করার জন্য' } },
        { id: 'opt-2', text: { en: 'To convert the system equations into linear equations', hi: 'समीकरणों को रैखिक समीकरणों में बदलने के लिए', bn: 'সমীকরণসমূহকে রৈখিকে রূপান্তর করতে' } },
        { id: 'opt-3', text: { en: 'To prevent line conductors from overheating', hi: 'लाइन के तारों को अधिक गर्म होने से बचाने के लिए', bn: 'কন্ডাক্টর অতিরিক্ত উত্তপ্ত হওয়া রোধ করতে' } },
        { id: 'opt-4', text: { en: 'To eliminate the need for a Slack bus', hi: 'स्लैक बस की आवश्यकता को समाप्त करने के लिए', bn: 'স্ল্যাক বাসের প্রয়োজনীয়তা দূর করতে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'V_acc = V_old + alpha * (V_new - V_old). An acceleration factor between 1.4 and 1.6 significantly dampens oscillations and speeds up Gauss-Seidel convergence.',
        hi: 'त्वरण कारक गॉस-सीडेल के धीमे अभिसरण को गति प्रदान करता है और आवश्यक पुनरावृत्तियों की संख्या को घटाता है।',
        bn: 'অ্যাক্সিলারেশন ফ্যাক্টর গস-সাইডেলের মন্থর গতি বৃদ্ধি করে এবং দ্রুত সমাধানে পৌঁছাতে সহায়তা করে।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch16-l07-01',
      question: {
        en: 'In a 3-bus system with 1 Slack bus, 1 PV bus, and 1 PQ bus, how many non-linear power flow equations must be solved simultaneously in Newton-Raphson?',
        hi: '1 स्लैक बस, 1 PV बस और 1 PQ बस वाले 3-बस सिस्टम में न्यूटन-राफसन में एक साथ कितने अरेखीय समीकरणों को हल किया जाना चाहिए?',
        bn: '১টি স্ল্যাক বাস, ১টি PV বাস এবং ১টি PQ বাস বিশিষ্ট ৩-বাস সিস্টেমে নিউটন-র‌্যাফসনে একসাথে কয়টি সমীকরণ সমাধান করতে হয়?'
      },
      hint: {
        en: 'Equations = 2*N_pq + N_pv = 2*(1) + 1 = 3 equations (Delta P for Bus 2 and 3, and Delta Q for Bus 3).',
        hi: 'समीकरण = 2*N_pq + N_pv = 2*(1) + 1 = 3 समीकरण।',
        bn: 'সমীকরণ সংখ্যা = ২*N_pq + N_pv = ২*(১) + ১ = ৩টি সমীকরণ।'
      }
    }
  ]
};
