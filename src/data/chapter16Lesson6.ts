import { Lesson } from '../types';

export const LESSON_YBUS_FORMULATION: Lesson = {
  id: 'lsn-ch16-ybus-formulation',
  topicId: 'tp-ch16-ybus-formulation',
  chapterId: 'ch-advanced-power-system-analysis',
  order: 6,
  title: {
    en: 'Bus Admittance Matrix (Y_bus) Formation & Modification Algorithms',
    hi: 'बस एडमिटेंस मैट्रिक्स (Y_bus) निर्माण एवं संशोधन एल्गोरिदम',
    bn: 'বাস অ্যাডমিট্যান্স ম্যাট্রিক্স (Y_bus) গঠন ও পরিবর্তন অ্যালগরিদম'
  },
  description: {
    en: 'Systematic nodal analysis of interconnected power grids: direct inspection algorithm for self and mutual bus admittances, modeling off-nominal tap transformers and phase shifters, network modifications, and Kron reduction for passive bus elimination.',
    hi: 'इंटरकनेक्टेड पावर ग्रिड का व्यवस्थित नोडल विश्लेषण: स्व एवं पारस्परिक बस एडमिटेंस के लिए प्रत्यक्ष निरीक्षण विधि, ऑफ-नॉमिनल टैप ट्रांसफार्मर और फेज शिफ्टर का मॉडलिंग, नेटवर्क संशोधन, तथा पैसिव बसों के उन्मूलन हेतु क्रोन अपचयन (Kron reduction)।',
    bn: 'আন্তঃসংযুক্ত পাওয়ার গ্রিডের নিয়মানুগ নোডাল বিশ্লেষণ: সেলফ ও মিউচুয়াল অ্যাডমিট্যান্সের সরাসরি পরিদর্শন পদ্ধতি, অফ-নমিনাল ট্যাপ ট্রান্সফরমার ও ফেজ শিফটার মডেলিং, নেটওয়ার্ক পরিবর্তন এবং প্যাসিভ বাস অপসারণে ক্রোন রিডাকশন।'
  },
  estimatedMinutes: 44,
  easyExplanation: {
    en: 'To analyze a giant electrical grid with thousands of generators, substations, and transmission lines, computers cannot solve loop equations by hand. Instead, power engineers convert all line impedances into admittances (y = 1 / z) and organize the entire network into a master mathematical grid called the Bus Admittance Matrix, or Y_bus. The equation I_bus = Y_bus * V_bus represents Kirchhoff’s Current Law applied at every single substation bus simultaneously. Forming Y_bus is beautifully systematic: each diagonal element (Y_ii) is simply the sum of all admittances directly connected to bus i (including shunt capacitors and reactors), while each off-diagonal element (Y_ij) is the negative of the admittance directly linking bus i to bus j. Because substations are connected only to their immediate physical neighbors, real-world Y_bus matrices are over 99% zeros (extremely sparse), allowing computers to solve massive power flow problems in milliseconds!',
    hi: 'हजारों सबस्टेशनों वाले विशाल ग्रिड का विश्लेषण करने के लिए इंजीनियर सभी प्रतिबाधाओं को एडमिटेंस (y = 1/z) में बदलते हैं और बस एडमिटेंस मैट्रिक्स (Y_bus) बनाते हैं। समीकरण I_bus = Y_bus * V_bus प्रत्येक बस पर किरचॉफ के करंट नियम को दर्शाता है। मुख्य विकर्ण तत्व (Y_ii) बस i से जुड़े सभी एडमिटेंस का योग होता है, जबकि गैर-विकर्ण तत्व (Y_ij) बस i और j के बीच के एडमिटेंस का ऋणात्मक (-y_ij) होता है। चूंकि सबस्टेशन केवल अपने पड़ोसियों से जुड़े होते हैं, इसलिए Y_bus में 99% से अधिक शून्य होते हैं (स्पार्स मैट्रिक्स), जिससे कंप्यूटर तीव्र गति से हल निकाल पाते हैं!',
    bn: 'হাজার হাজার সাবস্টেশন বিশিষ্ট বিশাল পাওয়ার গ্রিড বিশ্লেষণের জন্য সমস্ত ইম্পিডেন্সকে অ্যাডমিট্যান্সে (y = ১/z) রূপান্তর করে একটি মাস্টার ম্যাট্রিক্স তৈরি করা হয় যাকে বাস অ্যাডমিট্যান্স ম্যাট্রিক্স (Y_bus) বলে। I_bus = Y_bus * V_bus সমীকরণটি প্রতিটি বাসে KCL এর প্রয়োগ। কর্ণের উপাদান (Y_ii) হলো ওই বাসে যুক্ত সমস্ত অ্যাডমিট্যান্সের যোগফল এবং অন্যান্য উপাদান (Y_ij) হলো দুই বাসের মধ্যবর্তী অ্যাডমিট্যান্সের ঋণাত্মক (-y_ij)। বাস্তব গ্রিডে প্রতিটি বাস কেবল কয়েকটি লাইনের সাথে যুক্ত থাকায় Y_bus ম্যাট্রিক্সের ৯৯% মানই শূন্য (স্পার্স ম্যাট্রিক্স) থাকে, যা দ্রুত গণনায় সাহায্য করে!'
  },
  detailedExplanation: {
    en: 'Nodal formulation of power networks forms the bedrock of modern load flow, fault analysis, and state estimation algorithms:\n\n1. Kirchhoff\'s Current Law in Matrix Form:\nAt any bus i in an N-bus power system, the net injected current phasor I_i is the algebraic sum of currents leaving bus i through transmission branches and shunt elements:\nI_i = Y_i0 * V_i + sum_{j=1, j != i}^N y_ij * (V_i - V_j)\nRearranging terms:\nI_i = (Y_i0 + sum_{j != i} y_ij) * V_i - sum_{j != i} y_ij * V_j\nIn compact matrix notation: [I_bus] = [Y_bus] [V_bus]\n\n2. Direct Inspection Algorithm:\n• Diagonal Elements (Self-Admittance Y_ii):\nY_ii = Y_i0 + sum_{k in connected(i)} y_ik\nEqual to the sum of all branch admittances connected to bus i plus all shunt admittances connected between bus i and ground (such as line charging capacitors, shunt reactors, and neutral grounding impedances).\n• Off-Diagonal Elements (Mutual Admittance Y_ij):\nY_ij = Y_ji = -y_ij (for i != j)\nEqual to the negative of the branch admittance directly connecting bus i and bus j. If no physical line exists between buses i and j, Y_ij = 0.\n\n3. Sparsity and Symmetry:\n• Symmetry: For networks without phase-shifting transformers, Y_ij = Y_ji, making Y_bus a complex symmetric matrix.\n• Extreme Sparsity: In typical utility grids, an average bus connects to only 2 to 4 other lines. For a 2,000-bus system, fewer than 0.2% of the matrix entries are non-zero. Sparse matrix techniques (e.g., Tinney schemes, compressed sparse row format) store only non-zero entries, saving gigabytes of RAM and reducing factorization time from O(N³) to O(N^1.2).\n\n4. Modeling Off-Nominal Tap Transformers (Tap Ratio a:1):\nA regulating transformer connected between bus i (tap side) and bus j (standard side) with series admittance y alters the admittance equation:\n• Self at tap bus i: Y_ii_add = |a|² * y\n• Self at bus j: Y_jj_add = y\n• Mutual between i and j: Y_ij = -a* * y, and Y_ji = -a * y\nFor a complex tap ratio a = |a| * e^(j*alpha) (phase shifter), Y_ij != Y_ji, destroying matrix symmetry.\n\n5. Kron Reduction for Passive Bus Elimination:\nWhen a power network contains intermediate junction buses with zero net current injection (I_k = 0), these passive buses can be mathematically eliminated while preserving exact terminal behavior:\nPartitioning the system into retained buses (r) and eliminated buses (e):\n[I_r]   [Y_rr  Y_re] [V_r]\n[ 0 ] = [Y_er  Y_ee] [V_e]\nSolving for V_e gives: V_e = -Y_ee^-1 * Y_er * V_r\nSubstituting into the top partition yields the reduced Kron matrix:\nY_bus,red = Y_rr - Y_re * Y_ee^-1 * Y_er.',
    hi: 'पावर नेटवर्क का नोडल विश्लेषण लोड फ्लो और फॉल्ट विश्लेषण की रीढ़ है:\n\n1. प्रत्यक्ष निरीक्षण विधि:\n• विकर्ण तत्व Y_ii: बस i से जुड़े सभी एडमिटेंस और शंट एडमिटेंस का योग।\n• गैर-विकर्ण तत्व Y_ij: बस i और j के बीच सीधे जुड़े एडमिटेंस का ऋणात्मक (-y_ij)।\n\n2. समरूपता और स्पार्सिटी:\nफेज शिफ्टर के बिना Y_bus सममित (Y_ij = Y_ji) और अत्यधिक स्पार्स होती है (अधिकांश तत्व शून्य होते हैं)।\n\n3. ट्रांसफार्मर टैप मॉडलिंग (a:1):\nटैप बस i पर Y_ii में |a|² * y जुड़ता है, बस j पर y जुड़ता है, और परस्पर एडमिटेंस -a * y होता है।\n\n4. क्रोन अपचयन (Kron Reduction):\nशून्य धारा वाली पैसिव बसों को हटाने के लिए:\nY_red = Y_rr - Y_re * (Y_ee)^-1 * Y_er।',
    bn: 'পাওয়ার সিস্টেমের নোডাল বিশ্লেষণ আধুনিক লোড ফ্লো ও ফল্ট বিশ্লেষণের ভিত্তি:\n\n১. সরাসরি পরিদর্শন পদ্ধতি:\n• কর্ণের উপাদান Y_ii: বাস i এর সাথে যুক্ত সমস্ত ব্রাঞ্চ ও শান্ট অ্যাডমিট্যান্সের যোগফল।\n• অফ-ডায়াগোনাল উপাদান Y_ij: বাস i ও j এর মধ্যবর্তী অ্যাডমিট্যান্সের ঋণাত্মক (-y_ij)।\n\n২. প্রতিসাম্য ও স্পার্সিটি:\nসাধারণ সিস্টেমে Y_bus প্রতিসম (Y_ij = Y_ji) এবং অত্যন্ত স্পার্স (অধিকাংশ মান শূন্য) হয়।\n\n৩. ট্রান্সফরমার ট্যাপ মডেলিং (a:১):\nট্যাপ বাসে Y_ii তে |a|² * y এবং মিউচুয়াল অ্যাডমিট্যান্সে -a * y অন্তর্ভুক্ত হয়।\n\n৪. ক্রোন রিডাকশন:\nযেসব বাসে কারেন্ট ইনজেকশন শূন্য (I = ০), সেগুলো অপসারণে ক্রোন রিডাকশন ব্যবহৃত হয়:\nY_red = Y_rr - Y_re * (Y_ee)^-১ * Y_er।'
  },
  formulas: [
    {
      id: 'f-ch16-ybus-direct',
      symbol: 'Y_{ii}, Y_{ij}',
      expression: 'Y_{ii} = y_{i0} + \\sum_{k \\ne i} y_{ik}, \\quad Y_{ij} = -y_{ij} \\quad (i \\ne j)',
      title: {
        en: 'Direct Inspection Rules for Bus Admittance Matrix',
        hi: 'बस एडमिटेंस मैट्रिक्स हेतु प्रत्यक्ष निरीक्षण नियम',
        bn: 'বাস অ্যাডমিট্যান্স ম্যাট্রিক্স গঠনের সরাসরি পরিদর্শন নিয়ম'
      },
      description: {
        en: 'Defines self-admittance as sum of all connected branch and shunt elements, and off-diagonal mutual terms as the negative of connecting branch admittances.',
        hi: 'स्व-एडमिटेंस को सभी जुड़े तत्वों के योग और गैर-विकर्ण शब्दों को मध्यवर्ती एडमिटेंस के ऋणात्मक के रूप में परिभाषित करता है।',
        bn: 'সেলফ-অ্যাডমিট্যান্সকে যুক্ত সকল উপাদানের যোগফল এবং অফ-ডায়াগোনাল উপাদানকে সংযোগকারী অ্যাডমিট্যান্সের ঋণাত্মক হিসেবে সংজ্ঞায়িত করে।'
      },
      variables: [
        { symbol: 'Y_{ii}', name: { en: 'Self-admittance of bus i (S)', hi: 'बस i का स्व-एडमिटेंस (S)', bn: 'বাস i এর নিজস্ব অ্যাডমিট্যান্স (S)' } },
        { symbol: 'Y_{ij}', name: { en: 'Mutual admittance between bus i and bus j (S)', hi: 'बस i और j के बीच पारस्परिक एडमिटेंस (S)', bn: 'বাস i ও j এর পারস্পরিক অ্যাডমিট্যান্স (S)' } },
        { symbol: 'y_{ik}', name: { en: 'Series branch admittance of line between i and k (S)', hi: 'लाइन की सीरीज एडमिटेंस (S)', bn: 'লাইনের সিরিজ অ্যাডমিট্যান্স (S)' } },
        { symbol: 'y_{i0}', name: { en: 'Total shunt admittance connected between bus i and earth (S)', hi: 'बस i और पृथ्वी के बीच शंट एडमिटेंस (S)', bn: 'বাস i ও মাটির মধ্যে শান্ট অ্যাডমিট্যান্স (S)' } }
      ]
    },
    {
      id: 'f-ch16-kron-reduction',
      symbol: 'Y_{bus}^{red}',
      expression: 'Y_{bus}^{red} = Y_{rr} - Y_{re} \\cdot Y_{ee}^{-1} \\cdot Y_{er}',
      title: {
        en: 'Kron Reduction Formula for Passive Bus Elimination',
        hi: 'पैसिव बस उन्मूलन हेतु क्रोन अपचयन सूत्र',
        bn: 'প্যাসিভ বাস অপসারণে ক্রোন রিডাকশন সূত্র'
      },
      description: {
        en: 'Eliminates passive nodes with zero net current injection from Y_bus while preserving exact electrical relationships at retained buses.',
        hi: 'शून्य धारा वाली पैसिव बसों को हटाते हुए शेष बसों पर सटीक संबंध बनाए रखता है।',
        bn: 'শূন্য কারেন্ট বিশিষ্ট নোডগুলো অপসারণ করে অবশিষ্ট বাসে নির্ভুল নেটওয়ার্ক সমীকরণ বজায় রাখে।'
      },
      variables: [
        { symbol: 'Y_{bus}^{red}', name: { en: 'Reduced bus admittance matrix', hi: 'अपचयित बस एडमिटेंस मैट्रिक्स', bn: 'হ্রাসকৃত বাস অ্যাডমিট্যান্স ম্যাট্রিক্স' } },
        { symbol: 'Y_{rr}', name: { en: 'Submatrix corresponding to retained buses', hi: 'बरकरार रखी गई बसों का सब-मैट्रिक्स', bn: 'সংরক্ষিত বাসসমূহের সাব-ম্যাট্রিক্স' } },
        { symbol: 'Y_{ee}', name: { en: 'Submatrix corresponding to eliminated buses', hi: 'उन्मूलित बसों का सब-मैट्रिक्स', bn: 'অপসারিত বাসসমূহের সাব-ম্যাট্রিক্স' } },
        { symbol: 'Y_{re}, Y_{er}', name: { en: 'Off-diagonal coupling submatrices', hi: 'कपलिंग सब-मैट्रिक्स', bn: 'কাপলিং সাব-ম্যাট্রিক্স' } }
      ]
    },
    {
      id: 'f-ch16-transformer-tap-pi',
      symbol: 'Y_{tap}',
      expression: 'Y_{ii} = \\frac{y}{|a|^2}, \\quad Y_{jj} = y, \\quad Y_{ij} = -\\frac{y}{a^*}, \\quad Y_{ji} = -\\frac{y}{a}',
      title: {
        en: 'Off-Nominal Tap-Changing Transformer Admittance Model',
        hi: 'ऑफ-नॉमिनल टैप-चेंजिंग ट्रांसफार्मर एडमिटेंस मॉडल',
        bn: 'অফ-নমিনাল ট্যাপ-চেঞ্জিং ট্রান্সফরমার অ্যাডমিট্যান্স মডেল'
      },
      description: {
        en: 'Nodal admittance contributions for an off-nominal regulating transformer with tap ratio a:1 connected between bus i and bus j.',
        hi: 'बस i और j के बीच जुड़े a:1 टैप अनुपात वाले रेगुलेटिंग ट्रांसफार्मर के लिए नोडल एडमिटेंस योगदान।',
        bn: 'বাস i ও j এর মধ্যে সংযুক্ত a:১ ট্যাপ অনুপাতের ট্রান্সফরমারের জন্য নোডাল অ্যাডমিট্যান্স অবদান।'
      },
      variables: [
        { symbol: 'y', name: { en: 'Transformer series leakage admittance (S)', hi: 'ट्रांसफार्मर लीकेज एडमिटेंस (S)', bn: 'ট্রান্সফরমার লিকেজ অ্যাডমিট্যান্স (S)' } },
        { symbol: 'a', name: { en: 'Complex off-nominal tap turns ratio', hi: 'सम्मिश्र टैप अनुपात', bn: 'ট্যাপ রেশিও' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-ch16-l06-ybus-mechanics',
      title: {
        en: 'Sparse Matrix Representation & Kron Reduction Mechanics',
        hi: 'स्पार्स मैट्रिक्स निरूपण एवं क्रोन अपचयन यांत्रिकी',
        bn: 'স্পার্স ম্যাট্রিক্স ও ক্রোন রিডাকশনের কার্যপদ্ধতি'
      },
      content: {
        en: 'In industrial energy management systems (EMS), Y_bus matrices reach dimensions of 50,000 x 50,000 buses. Operating on such structures requires high-performance computational techniques:\n\n1. Diagonal Dominance:\nBecause Y_ii = sum(y_ik) + y_i0, the absolute value of the diagonal element |Y_ii| is strictly greater than or equal to the sum of absolute values of all off-diagonal elements in row i. This property of strict diagonal dominance ensures that Y_bus is always non-singular and strictly invertible, guaranteeing numerical stability during LU decomposition.\n\n2. Line Outage and Network Modification:\nWhen a transmission line between bus i and bus j with admittance y_k is switched off by protective relays, Y_bus does not need to be reconstructed from scratch. Instead, it is updated instantly via rank-1 downdating:\n• Y_ii_new = Y_ii_old - y_k\n• Y_jj_new = Y_jj_old - y_k\n• Y_ij_new = Y_ij_old + y_k\n• Y_ji_new = Y_ji_old + y_k\nThis allows contingency analysis software to evaluate hundreds of line trips every second.\n\n3. Kron Reduction Physical Significance:\nIn transient stability simulations, generator internal voltages behind transient reactance (E\'_q) are the state variables. Kron reduction is used to eliminate all internal load and transmission junction buses, producing an equivalent multiport admittance matrix connecting only the generator internal nodes. This condenses thousands of algebraic network equations into a small set of differential swing equations.',
        hi: 'औद्योगिक पावर ग्रिड में Y_bus 50,000 x 50,000 आकार तक पहुंच सकती है। इसका मुख्य विकर्ण हमेशा अन्य तत्वों के योग से बड़ा होता है (विकर्ण प्रधानता), जिससे यह हमेशा व्युत्क्रमणीय (invertible) रहती है। लाइन ट्रिप होने पर पूरी मैट्रिक्स दोबारा बनाने के बजाय केवल 4 तत्वों को संशोधित किया जाता है। क्रोन अपचयन का उपयोग जनरेटर के आंतरिक नोड्स को छोड़कर शेष सभी पैसिव बसों को समाप्त करने के लिए किया जाता है।',
        bn: 'শিল্পক্ষেত্রে Y_bus ম্যাট্রিক্সের আকার ৫০,০০০ x ৫০,০০০ পর্যন্ত হতে পারে। ডায়াগোনাল ডমিন্যান্স বৈশিষ্ট্যের কারণে এটি সর্বদা সমাধানযোগ্য থাকে। কোনো লাইন ট্রিপ করলে পুরো ম্যাট্রিক্স নতুন করে না বানিয়ে কেবল ৪টি মান আপডেট করা হয়। ক্রোন রিডাকশনের মাধ্যমে লোড বাসগুলোকে বাদ দিয়ে কেবল জেনারেটরের অভ্যন্তরীণ নোডগুলোকে নিয়ে সমীকরণ সংক্ষেপ করা হয়।'
      },
      schematicId: 'sch-ch16-ybus-matrix'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch16-l06-01',
      problem: {
        en: 'A 3-bus power system has the following line branch series impedances (in per unit):\n• Line 1-2: z_12 = j0.10 pu\n• Line 2-3: z_23 = j0.20 pu\n• Line 1-3: z_13 = j0.25 pu\nShunt charging admittances are negligible. Form the 3x3 bus admittance matrix Y_bus using the direct inspection method.',
        hi: 'एक 3-बस पावर सिस्टम में लाइन सीरीज प्रतिबाधाएं (प्रति इकाई) हैं:\n• लाइन 1-2: z_12 = j0.10 pu\n• लाइन 2-3: z_23 = j0.20 pu\n• लाइन 1-3: z_13 = j0.25 pu\nशंट एडमिटेंस नगण्य है। प्रत्यक्ष निरीक्षण विधि द्वारा 3x3 Y_bus मैट्रिक्स बनाएं।',
        bn: 'একটি ৩-বাস পাওয়ার সিস্টেমের লাইন সিরিজ ইম্পিডেন্স নিম্নরূপ (pu তে):\n• লাইন ১-২: z_12 = j০.১০ pu\n• লাইন ২-৩: z_23 = j০.২০ pu\n• লাইন ১-৩: z_13 = j০.২৫ pu\nশান্ট অ্যাডমিট্যান্স অগ্রাহ্য করে সরাসরি পরিদর্শন পদ্ধতিতে ৩x৩ Y_bus ম্যাট্রিক্স গঠন করুন।'
      },
      solution: {
        en: 'Step 1: Calculate Branch Series Admittances (y = 1 / z):\n• y_12 = 1 / (j0.10) = -j10.0 pu\n• y_23 = 1 / (j0.20) = -j5.0 pu\n• y_13 = 1 / (j0.25) = -j4.0 pu\n\nStep 2: Calculate Diagonal Elements (Self-Admittances Y_ii):\n• Y_11 = y_12 + y_13 = -j10.0 + (-j4.0) = -j14.0 pu\n• Y_22 = y_12 + y_23 = -j10.0 + (-j5.0) = -j15.0 pu\n• Y_33 = y_13 + y_23 = -j4.0 + (-j5.0) = -j9.0 pu\n\nStep 3: Calculate Off-Diagonal Elements (Mutual Admittances Y_ij = -y_ij):\n• Y_12 = Y_21 = -y_12 = -(-j10.0) = +j10.0 pu\n• Y_13 = Y_31 = -y_13 = -(-j4.0) = +j4.0 pu\n• Y_23 = Y_32 = -y_23 = -(-j5.0) = +j5.0 pu\n\nStep 4: Assemble Y_bus Matrix:\n[Y_bus] = \n[ -j14.0   +j10.0   +j4.0 ]\n[ +j10.0   -j15.0   +j5.0 ]\n[  +j4.0    +j5.0   -j9.0 ] pu',
        hi: 'चरण 1: एडमिटेंस ज्ञात कीजिए: y_12 = -j10 pu, y_23 = -j5 pu, y_13 = -j4 pu\nचरण 2: विकर्ण तत्व Y_ii:\nY_11 = -j10 + (-j4) = -j14 pu\nY_22 = -j10 + (-j5) = -j15 pu\nY_33 = -j4 + (-j5) = -j9 pu\nचरण 3: गैर-विकर्ण तत्व Y_ij = -y_ij:\nY_12 = Y_21 = +j10 pu; Y_13 = Y_31 = +j4 pu; Y_23 = Y_32 = +j5 pu\nचरण 4: मैट्रिक्स:\n[-j14  +j10  +j4 ]\n[+j10  -j15  +j5 ]\n[ +j4   +j5  -j9 ]',
        bn: 'ধাপ ১: অ্যাডমিট্যান্স গণনা: y_12 = -j১০ pu, y_23 = -j৫ pu, y_13 = -j৪ pu\nধাপ ২: কর্ণের উপাদান:\nY_11 = -j১৪ pu, Y_22 = -j১৫ pu, Y_33 = -j৯ pu\nধাপ ৩: অন্যান্য উপাদান Y_ij = -y_ij:\nY_12 = +j১০ pu, Y_13 = +j৪ pu, Y_23 = +j৫ pu\nধাপ ৪: চূড়ান্ত Y_bus ম্যাট্রিক্স:\n[ -j১৪   +j১০   +j৪ ]\n[ +j১০   -j১৫   +j৫ ]\n[  +j৪    +j৫   -j৯ ] pu'
      },
      givenValues: { 'z_12': 'j0.10 pu', 'z_23': 'j0.20 pu', 'z_13': 'j0.25 pu' },
      finalAnswer: {
        en: 'Y_11 = -j14, Y_22 = -j15, Y_33 = -j9, Y_12 = +j10, Y_13 = +j4, Y_23 = +j5 pu',
        hi: 'Y_11 = -j14, Y_22 = -j15, Y_33 = -j9, Y_12 = +j10, Y_13 = +j4, Y_23 = +j5 pu',
        bn: 'Y_11 = -j১৪, Y_22 = -j১৫, Y_33 = -j৯, Y_12 = +j১০, Y_13 = +j৪, Y_23 = +j৫ pu'
      }
    },
    {
      id: 'ex-ch16-l06-02',
      problem: {
        en: 'Consider the 3-bus system from Example 1. Bus 3 is a passive load-free switching junction with zero injected current (I_3 = 0). Use Kron reduction to eliminate Bus 3 and derive the equivalent 2x2 reduced bus admittance matrix connecting Bus 1 and Bus 2.',
        hi: 'उदाहरण 1 के 3-बस सिस्टम पर विचार करें। बस 3 शून्य धारा (I_3 = 0) वाला एक पैसिव जंक्शन है। बस 3 को समाप्त करने और बस 1 एवं 2 को जोड़ने वाली 2x2 अपचयित Y_bus प्राप्त करने के लिए क्रोन अपचयन का उपयोग करें।',
        bn: 'উদাহরণ ১ এর ৩-বাস সিস্টেম বিবেচনা করুন। বাস ৩ হলো শূন্য কারেন্টযুক্ত (I_৩ = ০) একটি প্যাসিভ জাংশন। ক্রোন রিডাকশন প্রয়োগ করে বাস ৩ অপসারণপূর্বক বাস ১ ও ২ এর মধ্যকার ২x২ হ্রাসকৃত Y_bus ম্যাট্রিক্স নির্ণয় করুন।'
      },
      solution: {
        en: 'From Example 1:\nY_bus =\n[ -j14   +j10 |  +j4 ]\n[ +j10   -j15 |  +j5 ]\n-----------------------\n[  +j4    +j5 |  -j9 ]\n\nStep 1: Partition the Matrix:\n• Retained buses r = {1, 2}, Eliminated bus e = {3}\n• Y_rr = \n  [ -j14   +j10 ]\n  [ +j10   -j15 ]\n• Y_re = \n  [ +j4 ]\n  [ +j5 ]\n• Y_er = [ +j4   +j5 ]\n• Y_ee = [ -j9 ] (scalar)\n\nStep 2: Calculate Y_ee^-1:\nY_ee^-1 = 1 / (-j9) = j / 9\n\nStep 3: Calculate Coupling Product Y_re * Y_ee^-1 * Y_er:\n• Y_ee^-1 * Y_er = (j / 9) * [ +j4   +j5 ] = [ -4/9   -5/9 ]\n• Y_re * (Y_ee^-1 * Y_er) = \n  [ +j4 ] * [ -4/9   -5/9 ] = \n  [ -j16/9   -j20/9 ] = [ -j1.7778   -j2.2222 ]\n  [ -j20/9   -j25/9 ]   [ -j2.2222   -j2.7778 ]\n\nStep 4: Compute Reduced Matrix Y_bus,red = Y_rr - Y_re * Y_ee^-1 * Y_er:\n• Y_11,red = -j14 - (-j1.7778) = -j14 + j1.7778 = -j12.2222 pu\n• Y_22,red = -j15 - (-j2.7778) = -j15 + j2.7778 = -j12.2222 pu\n• Y_12,red = Y_21,red = +j10 - (-j2.2222) = +j10 + j2.2222 = +j12.2222 pu\n\nReduced 2x2 Matrix:\n[Y_bus,red] = \n[ -j12.2222   +j12.2222 ]\n[ +j12.2222   -j12.2222 ] pu',
        hi: 'चरण 1: Y_rr = [-j14 +j10; +j10 -j15], Y_re = [+j4; +j5], Y_ee = [-j9]\nचरण 2: Y_ee^-1 = j/9\nचरण 3: Y_re * Y_ee^-1 * Y_er =\n[-j16/9  -j20/9]\n[-j20/9  -j25/9]\nचरण 4: Y_red = Y_rr - Y_re*Y_ee^-1*Y_er =\n[-j12.222  +j12.222]\n[+j12.222  -j12.222] pu',
        bn: 'ধাপ ১: Y_rr = [-j১৪ +j১০; +j১০ -j১৫], Y_re = [+j৪; +j৫], Y_ee = [-j৯]\nধাপ ২: Y_ee^-১ = j/৯\nধাপ ৩: কাপলিং টার্ম বিয়োগ করে পাই:\nY_red = Y_rr - Y_re * Y_ee^-১ * Y_er =\n[ -j১২.২২২২   +j১২.২২২২ ]\n[ +j১২.২২২২   -j১২.২২২২ ] pu'
      },
      givenValues: { 'Eliminated bus': 'Bus 3 (I_3 = 0)', 'Y_ee': '-j9 pu' },
      finalAnswer: {
        en: 'Y_11,red = -j12.222, Y_22,red = -j12.222, Y_12,red = +j12.222 pu',
        hi: 'Y_11,red = -j12.222, Y_22,red = -j12.222, Y_12,red = +j12.222 pu',
        bn: 'Y_11,red = -j১২.২২২, Y_22,red = -j১২.২২২, Y_12,red = +j১২.২২২ pu'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Core mathematical engine for Gauss-Seidel and Newton-Raphson load-flow solution solvers.',
      'Transient stability studies: eliminating transmission buses through Kron reduction to connect generator rotor dynamic equations.',
      'Online automated topology processors: instantly modifying Y_bus upon breaker trip signals from SCADA.'
    ],
    hi: [
      'गॉस-सीडेल और न्यूटन-राफसन लोड-फ्लो सॉल्वर का मुख्य गणितीय इंजन।',
      'क्षणिक स्थिरता अध्ययन: जनरेटर रोटर स्विंग समीकरणों को हल करने हेतु क्रोन अपचयन।',
      'ऑनलाइन टोपोलॉजी प्रोसेसर: SCADA ब्रेकर सिग्नल पर तुरंत Y_bus को संशोधित करना।'
    ],
    bn: [
      'গস-সাইডেল ও নিউটন-র‌্যাফসন লোড-ফ্লো সমাধানের মূল গাণিতিক কাঠামো।',
      'ট্রানজিয়েন্ট স্ট্যাবিলিটি স্টাডিতে জেনারেটর সুইং সমীকরণ সমাধানে ক্রোন রিডাকশন প্রয়োগ।',
      'অনলাইন টপোলজি প্রসেসর: SCADA ব্রেকার ট্রিপ সিগন্যালে তাত্ক্ষণিক Y_bus আপডেট।'
    ]
  },
  importantPoints: {
    en: [
      'Self-admittance Y_ii is the sum of all branch admittances connected to bus i plus shunt connections.',
      'Mutual admittance Y_ij is the negative of the branch admittance connecting bus i and bus j.',
      'Y_bus is symmetric (Y_ij = Y_ji) unless complex-tap phase-shifting transformers are present.',
      'Kron reduction requires the eliminated bus to have zero net current injection (I = 0).'
    ],
    hi: [
      'स्व-एडमिटेंस Y_ii बस i से जुड़े सभी एडमिटेंस और शंट का योग होता है।',
      'परस्पर एडमिटेंस Y_ij बस i और j को जोड़ने वाले एडमिटेंस का ऋणात्मक (-y_ij) होता है।',
      'फेज शिफ्टर न होने पर Y_bus सममित (Y_ij = Y_ji) होती है।',
      'क्रोन अपचयन के लिए यह अनिवार्य है कि हटाई जाने वाली बस पर धारा शून्य (I = 0) हो।'
    ],
    bn: [
      'সেলফ অ্যাডমিট্যান্স Y_ii হলো বাস i এর সাথে যুক্ত সমস্ত ব্রাঞ্চ ও শান্টের যোগফল।',
      'মিউচুয়াল অ্যাডমিট্যান্স Y_ij হলো সংশ্লিষ্ট ব্রাঞ্চের ঋণাত্মক অ্যাডমিট্যান্স (-y_ij)।',
      'ফেজ শিফটার না থাকলে Y_bus ম্যাট্রিক্স সম্পূর্ণ প্রতিসম (Y_ij = Y_ji) হয়।',
      'ক্রোন রিডাকশনের প্রধান শর্ত হলো অপসারিত বাসে মোট কারেন্ট ইনজেকশন শূন্য (I = ০) হতে হবে।'
    ]
  },
  commonMistakes: {
    en: [
      'Forgetting the negative sign when writing off-diagonal elements (Y_ij = -y_ij).',
      'Neglecting line charging shunt capacitive admittances when computing diagonal elements Y_ii.',
      'Attempting to apply Kron reduction to a bus where a generator or load injects non-zero current without first converting the injection to Norton equivalent admittance.'
    ],
    hi: [
      'गैर-विकर्ण तत्वों को लिखते समय ऋणात्मक चिह्न लगाना भूल जाना (Y_ij = -y_ij)।',
      'विकर्ण तत्वों Y_ii की गणना करते समय लाइन चार्जिंग शंट एडमिटेंस को भूल जाना।',
      'शून्य धारा न होने पर भी किसी बस पर सीधे क्रोन अपचयन लागू कर देना।'
    ],
    bn: [
      'অফ-ডায়াগোনাল উপাদানে মাইনাস চিহ্ন দিতে ভুলে যাওয়া (Y_ij = -y_ij)।',
      'Y_ii গণনায় লাইনের শান্ট ক্যাপাসিটিভ অ্যাডমিট্যান্স বাদ দেওয়া।',
      'যে বাসে কারেন্ট ইনজেকশন শূন্য নয় সেখানে নর্টন রূপান্তর ছাড়া সরাসরি ক্রোন রিডাকশন প্রয়োগ করা।'
    ]
  },
  keyTakeaways: {
    en: [
      'Y_bus provides the universal foundation for computerized power network analysis.',
      'Extreme sparsity ensures that large systems with tens of thousands of buses can be solved rapidly.',
      'Kron reduction enables network equivalent modeling by collapsing passive nodes.'
    ],
    hi: [
      'Y_bus कम्प्यूटरीकृत पावर नेटवर्क विश्लेषण का सार्वभौमिक आधार है।',
      'अत्यधिक स्पार्सिटी के कारण हजारों बसों वाले बड़े सिस्टम को तेजी से हल किया जा सकता है।',
      'क्रोन अपचयन पैसिव नोड्स को समाप्त करके नेटवर्क के समतुल्य मॉडल तैयार करता है।'
    ],
    bn: [
      'Y_bus কম্পিউটারাইজড পাওয়ার নেটওয়ার্ক বিশ্লেষণের সার্বজনীন ভিত্তি।',
      'উচ্চমাত্রার স্পার্সিটির কারণে হাজার হাজার বাসের সিস্টেমও অত্যন্ত দ্রুত সমাধান করা যায়।',
      'ক্রোন রিডাকশন প্যাসিভ নোড অপসারণ করে সিস্টেমের আকার ছোট করতে ব্যবহৃত হয়।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch16-l06-01',
      question: {
        en: 'In the bus admittance matrix Y_bus, how is an off-diagonal element Y_ij (i != j) calculated from the branch admittance y_ij connecting bus i and bus j?',
        hi: 'बस एडमिटेंस मैट्रिक्स Y_bus में, बस i और j को जोड़ने वाले ब्रांच एडमिटेंस y_ij से गैर-विकर्ण तत्व Y_ij (i != j) की गणना कैसे की जाती है?',
        bn: 'বাস অ্যাডমিট্যান্স ম্যাট্রিক্স Y_bus এ, বাস i ও j এর মধ্যবর্তী ব্রাঞ্চ অ্যাডমিট্যান্স y_ij থেকে অফ-ডায়াগোনাল উপাদান Y_ij (i != j) কীভাবে নির্ণয় করা হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Y_ij = -y_ij', hi: 'Y_ij = -y_ij', bn: 'Y_ij = -y_ij' } },
        { id: 'opt-2', text: { en: 'Y_ij = +y_ij', hi: 'Y_ij = +y_ij', bn: 'Y_ij = +y_ij' } },
        { id: 'opt-3', text: { en: 'Y_ij = 1 / y_ij', hi: 'Y_ij = 1 / y_ij', bn: 'Y_ij = ১ / y_ij' } },
        { id: 'opt-4', text: { en: 'Y_ij = -(y_ij)²', hi: 'Y_ij = -(y_ij)²', bn: 'Y_ij = -(y_ij)²' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'From KCL at bus i: current leaving to bus j is y_ij * (Vi - Vj) = y_ij * Vi - y_ij * Vj. The coefficient of Vj is -y_ij, so Y_ij = -y_ij.',
        hi: 'किरचॉफ करंट नियम के अनुसार बस j के वोल्टेज Vj का गुणांक -y_ij होता है, अतः Y_ij = -y_ij।',
        bn: 'KCL সমীকরণে Vj এর সহগ হয় -y_ij, তাই অফ-ডায়াগোনাল উপাদান Y_ij = -y_ij।'
      }
    },
    {
      id: 'mcq-ch16-l06-02',
      question: {
        en: 'What does the diagonal element Y_ii (self-admittance) of the bus admittance matrix represent?',
        hi: 'बस एडमिटेंस मैट्रिक्स का विकर्ण तत्व Y_ii (स्व-एडमिटेंस) क्या दर्शाता है?',
        bn: 'বাস অ্যাডমিট্যান্স ম্যাট্রিক্সের ডায়াগোনাল উপাদান Y_ii (সেলফ অ্যাডমিট্যান্স) কী নির্দেশ করে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'The algebraic sum of all branch admittances and shunt admittances connected to bus i', hi: 'बस i से जुड़े सभी शाखा एडमिटेंस और शंट एडमिटेंस का बीजगणितीय योग', bn: 'বাস i এর সাথে যুক্ত সমস্ত ব্রাঞ্চ ও শান্ট অ্যাডমিট্যান্সের বীজগাণিতিক যোগফল' } },
        { id: 'opt-2', text: { en: 'The negative sum of all branch admittances leaving bus i', hi: 'बस i से निकलने वाली सभी शाखाओं के एडमिटेंस का ऋणात्मक योग', bn: 'বাস i থেকে বহির্গামী সমস্ত ব্রাঞ্চ অ্যাডমিট্যান্সের ঋণাত্মক যোগফল' } },
        { id: 'opt-3', text: { en: 'The reciprocal of the generator internal impedance', hi: 'जनरेटर आंतरिक प्रतिबाधा का व्युत्क्रम', bn: 'জেনারেটর অভ্যন্তরীণ ইম্পিডেন্সের বিপরীত মান' } },
        { id: 'opt-4', text: { en: 'The sum of all voltages connected to bus i', hi: 'बस i से जुड़े सभी वोल्टेज का योग', bn: 'বাস i এ সংযুক্ত সমস্ত ভোল্টেজের যোগফল' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Y_ii = y_i0 + sum(y_ik), which is the total admittance connected directly between bus i and all other nodes (including ground).',
        hi: 'Y_ii बस i से जुड़े सभी ट्रांसमिशन लाइनों और ग्राउंड शंट तत्वों के एडमिटेंस का कुल योग होता है।',
        bn: 'Y_ii হলো বাস i এর সাথে যুক্ত সকল লাইন এবং গ্রাউন্ডেড শান্ট উপাদানের অ্যাডমিট্যান্সের সমষ্টি।'
      }
    },
    {
      id: 'mcq-ch16-l06-03',
      question: {
        en: 'Under what physical condition does the bus admittance matrix Y_bus lose its mathematical symmetry (Y_ij != Y_ji)?',
        hi: 'किस भौतिक स्थिति के तहत बस एडमिटेंस मैट्रिक्स Y_bus अपनी गणितीय समरूपता (Y_ij != Y_ji) खो देती है?',
        bn: 'কোন ভৌত অবস্থায় বাস অ্যাডমিট্যান্স ম্যাট্রিক্স Y_bus তার গাণিতিক প্রতিসাম্য (Y_ij != Y_ji) হারায়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'When phase-shifting transformers with complex turns ratios are installed', hi: 'जब सम्मिश्र टर्न अनुपात वाले फेज-शिफ्टिंग ट्रांसफार्मर लगाए जाते हैं', bn: 'যখন জটিল সংখ্যার ট্রান্সফরমার টার্ন রেশিওযুক্ত ফেজ-শিফটার যুক্ত থাকে' } },
        { id: 'opt-2', text: { en: 'When all transmission lines are transposed', hi: 'जब सभी पारेषण लाइनें ट्रांसपोज्ड होती हैं', bn: 'যখন সমস্ত সঞ্চালন লাইন ট্রান্সপোজ করা হয়' } },
        { id: 'opt-3', text: { en: 'When bundled conductors are used', hi: 'जब बंडल कंडक्टर का उपयोग किया जाता है', bn: 'যখন বান্ডিল কন্ডাক্টর ব্যবহৃত হয়' } },
        { id: 'opt-4', text: { en: 'When power factor is exactly unity', hi: 'जब पावर फैक्टर ठीक इकाई (unity) होता है', bn: 'যখন পাওয়ার ফ্যাক্টর ঠিক ১.০ হয়' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'A phase-shifting transformer has a complex tap ratio a = |a|*e^(j*alpha). Its mutual terms become Y_ij = -a* * y and Y_ji = -a * y, which are unequal, destroying symmetry.',
        hi: 'फेज-शिफ्टिंग ट्रांसफार्मर में a सम्मिश्र संख्या होती है जिससे Y_ij = -a* * y और Y_ji = -a * y असमान हो जाते हैं, जिससे समरूपता समाप्त हो जाती है।',
        bn: 'ফেজ শিফটারে ট্যাপ রেশিও a একটি জটিল সংখ্যা হওয়ায় Y_ij = -a* * y এবং Y_ji = -a * y অসমান হয়, ফলে ম্যাট্রিক্সের প্রতিসাম্য নষ্ট হয়।'
      }
    },
    {
      id: 'mcq-ch16-l06-04',
      question: {
        en: 'Why is the bus admittance matrix Y_bus preferred over the bus impedance matrix Z_bus for power-flow formulation?',
        hi: 'पावर-फ्लो फॉर्मूलेशन के लिए बस इम्पीडेंस मैट्रिक्स Z_bus की तुलना में बस एडमिटेंस मैट्रिक्स Y_bus को प्राथमिकता क्यों दी जाती है?',
        bn: 'পাওয়ার-ফ্লো সমীকরণে বাস ইম্পিডেন্স ম্যাট্রিক্স Z_bus এর চেয়ে বাস অ্যাডমিট্যান্স ম্যাট্রিক্স Y_bus কে কেন প্রাধান্য দেওয়া হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Y_bus is extremely sparse (mostly zeros), saving massive memory and computing time', hi: 'Y_bus अत्यधिक स्पार्स (ज्यादातर शून्य) होती है, जिससे भारी मेमोरी और कंप्यूटिंग समय की बचत होती है', bn: 'Y_bus অত্যন্ত স্পার্স (বেশিরভাগ মান শূন্য), যা বিপুল মেমোরি ও গণনার সময় বাঁচায়' } },
        { id: 'opt-2', text: { en: 'Z_bus cannot represent transformers', hi: 'Z_bus ट्रांसफार्मर का प्रतिनिधित्व नहीं कर सकती', bn: 'Z_bus ট্রান্সফরমার প্রকাশ করতে পারে না' } },
        { id: 'opt-3', text: { en: 'Y_bus contains only real numbers', hi: 'Y_bus में केवल वास्तविक संख्याएं होती हैं', bn: 'Y_bus এ কেবল বাস্তব সংখ্যা থাকে' } },
        { id: 'opt-4', text: { en: 'Z_bus is always singular', hi: 'Z_bus हमेशा सिंगुलर होती है', bn: 'Z_bus সর্বদা সিঙ্গুলার' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Y_bus contains off-diagonal non-zeros only between buses connected by physical lines (~0.2% non-zero in large grids), whereas Z_bus is completely full (dense).',
        hi: 'Y_bus में केवल जुड़े हुए सबस्टेशनों के बीच ही गैर-शून्य मान होते हैं (99% से अधिक शून्य), जबकि Z_bus पूरी तरह भरी (dense) होती है।',
        bn: 'Y_bus এ কেবল সরাসরি যুক্ত বাসের মধ্যে মান থাকে (৯৯% এর বেশি শূন্য), পক্ষান্তরে Z_bus পুরোপুরি সংখ্যায় পূর্ণ (ডেনস) থাকে।'
      }
    },
    {
      id: 'mcq-ch16-l06-05',
      question: {
        en: 'What is the mathematical condition required to perform Kron reduction on a group of buses in Y_bus?',
        hi: 'Y_bus में बसों के एक समूह पर क्रोन अपचयन करने के लिए किस गणितीय शर्त की आवश्यकता होती है?',
        bn: 'Y_bus এ নির্দিষ্ট কিছু বাসের ওপর ক্রোন রিডাকশন প্রয়োগের জন্য কোন গাণিতিক শর্ত পূরণ বাধ্যতামূলক?'
      },
      options: [
        { id: 'opt-1', text: { en: 'The net current injection into the eliminated buses must be zero (I_e = 0)', hi: 'उन्मूलित की जाने वाली बसों में शुद्ध धारा अंतःक्षेपण शून्य होना चाहिए (I_e = 0)', bn: 'অপসারিত বাসে নিট কারেন্ট ইনজেকশন অবশ্যই শূন্য হতে হবে (I_e = ০)' } },
        { id: 'opt-2', text: { en: 'The eliminated buses must have zero voltage', hi: 'उन्मूलित बसों का वोल्टेज शून्य होना चाहिए', bn: 'অপসারিত বাসের ভোল্টেজ শূন্য হতে হবে' } },
        { id: 'opt-3', text: { en: 'The lines connected to eliminated buses must have zero resistance', hi: 'जुड़ी लाइनों का प्रतिरोध शून्य होना चाहिए', bn: 'সংযুক্ত লাইনের রোধ শূন্য হতে হবে' } },
        { id: 'opt-4', text: { en: 'The retained buses must be grounded', hi: 'बरकरार रखी गई बसें ग्राउंडेड होनी चाहिए', bn: 'সংরক্ষিত বাসগুলোকে গ্রাউন্ডেড হতে হবে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Kron reduction relies on solving [0] = Y_er*V_r + Y_ee*V_e for V_e, which strictly requires I_e = 0 at the eliminated nodes.',
        hi: 'क्रोन अपचयन V_e को हल करने के लिए I_e = 0 की शर्त पर आधारित है।',
        bn: 'ক্রোন রিডাকশনের সূত্রটি V_e প্রতিস্থাপনের জন্য I_e = ০ শর্তের ওপর সরাসরি নির্ভরশীল।'
      }
    },
    {
      id: 'mcq-ch16-l06-06',
      question: {
        en: 'If a transmission line having series admittance y_k connected between bus 2 and bus 4 is removed from service, how is Y_24 updated?',
        hi: 'यदि बस 2 और बस 4 के बीच जुड़े y_k एडमिटेंस वाली लाइन को सेवा से हटा दिया जाता है, तो Y_24 को कैसे अपडेट किया जाता है?',
        bn: 'বাস ২ ও ৪ এর মধ্যে সংযুক্ত y_k অ্যাডমিট্যান্সের লাইনটি বিচ্ছিন্ন করা হলে Y_24 কীভাবে আপডেট করা হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Y_24,new = Y_24,old + y_k', hi: 'Y_24,new = Y_24,old + y_k', bn: 'Y_24,new = Y_24,old + y_k' } },
        { id: 'opt-2', text: { en: 'Y_24,new = Y_24,old - y_k', hi: 'Y_24,new = Y_24,old - y_k', bn: 'Y_24,new = Y_24,old - y_k' } },
        { id: 'opt-3', text: { en: 'Y_24,new = 0', hi: 'Y_24,new = 0', bn: 'Y_24,new = ০' } },
        { id: 'opt-4', text: { en: 'Y_24,new = Y_24,old * y_k', hi: 'Y_24,new = Y_24,old * y_k', bn: 'Y_24,new = Y_24,old * y_k' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Since Y_ij,old = -y_k, removing line y_k means subtracting (-y_k), which is equivalent to adding +y_k (resulting in 0 if no other parallel lines exist).',
        hi: 'चूँकि Y_24 = -y_k होता है, लाइन हटाने पर -(-y_k) अर्थात् +y_k जोड़ दिया जाता है।',
        bn: 'যেহেতু Y_24 = -y_k, তাই লাইন বাদ দিলে -(-y_k) বা +y_k যোগ করতে হয়।'
      }
    },
    {
      id: 'mcq-ch16-l06-07',
      question: {
        en: 'What property guarantees that Y_bus of a passive power system with shunt elements is always invertible (non-singular)?',
        hi: 'कौन सा गुण यह सुनिश्चित करता है कि शंट तत्वों वाले निष्क्रिय पावर सिस्टम की Y_bus हमेशा व्युत्क्रमणीय (non-singular) होती है?',
        bn: 'কোন বৈশিষ্ট্যের কারণে শান্ট উপাদানযুক্ত প্যাসিভ পাওয়ার সিস্টেমের Y_bus সর্বদা নন-সিঙ্গুলার (ইনভার্টযোগ্য) হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Strict diagonal dominance', hi: 'कठोर विकर्ण प्रधानता (Strict diagonal dominance)', bn: 'কঠোর ডায়াগোনাল ডমিন্যান্স' } },
        { id: 'opt-2', text: { en: 'All off-diagonal elements are positive integers', hi: 'सभी गैर-विकर्ण तत्व धनात्मक पूर्णांक हैं', bn: 'সকল অফ-ডায়াগোনাল উপাদান ধনাত্মক পূর্ণসংখ্যা' } },
        { id: 'opt-3', text: { en: 'The trace of Y_bus is zero', hi: 'Y_bus का ट्रेस शून्य है', bn: 'Y_bus এর ট্রেস শূন্য' } },
        { id: 'opt-4', text: { en: 'All eigenvalues are purely imaginary', hi: 'सभी आइगेनवैल्यू विशुद्ध रूप से काल्पनिक हैं', bn: 'সকল আইগেনমান বিশুদ্ধ কাল্পনিক' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Because |Y_ii| = sum(|y_ik|) + |y_i0| > sum(|Y_ik|), the matrix is strictly diagonally dominant, guaranteeing invertibility by the Gershgorin circle theorem.',
        hi: 'चूंकि मुख्य विकर्ण का मान अन्य सभी तत्वों के योग से अधिक होता है, इसलिए गैरशगोरिन प्रमेय के अनुसार मैट्रिक्स हमेशा व्युत्क्रमणीय होती है।',
        bn: 'কর্ণের উপাদানের পরম মান সংশ্লিষ্ট সারির অন্যান্য মানের সমষ্টির চেয়ে বেশি হওয়ায় গার্শগোরিন উপপাদ্য অনুসারে এটি সর্বদা সমাধানযোগ্য।'
      }
    },
    {
      id: 'mcq-ch16-l06-08',
      question: {
        en: 'In a 2-bus system, bus 1 and bus 2 are connected by an impedance of z = j0.05 pu. If there are no shunt connections, what is Y_11?',
        hi: 'एक 2-बस सिस्टम में बस 1 और बस 2 प्रतिबाधा z = j0.05 pu से जुड़े हैं। यदि कोई शंट कनेक्शन नहीं है, तो Y_11 क्या है?',
        bn: 'একটি ২-বাস সিস্টেমে বাস ১ ও ২ এর মধ্যে z = j০.০৫ pu ইম্পিডেন্স সংযুক্ত। কোনো শান্ট না থাকলে Y_11 এর মান কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '-j20 pu', hi: '-j20 pu', bn: '-j২০ pu' } },
        { id: 'opt-2', text: { en: '+j20 pu', hi: '+j20 pu', bn: '+j২০ pu' } },
        { id: 'opt-3', text: { en: '-j0.05 pu', hi: '-j0.05 pu', bn: '-j০.০৫ pu' } },
        { id: 'opt-4', text: { en: '+j0.05 pu', hi: '+j0.05 pu', bn: '+j০.০৫ pu' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'y_12 = 1 / z = 1 / (j0.05) = -j20 pu. With no shunts, Y_11 = y_12 = -j20 pu.',
        hi: 'y_12 = 1 / (j0.05) = -j20 pu। शंट न होने पर Y_11 = y_12 = -j20 pu।',
        bn: 'y_12 = ১ / (j০.০৫) = -j২০ pu। শান্ট না থাকায় Y_11 = y_12 = -j২০ pu।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch16-l06-01',
      question: {
        en: 'Two buses are connected by a transformer with leakage impedance z = j0.1 pu and off-nominal tap ratio a = 1.05 at Bus 1. Compute the mutual admittance Y_12.',
        hi: 'दो बसें z = j0.1 pu और बस 1 पर टैप अनुपात a = 1.05 वाले ट्रांसफार्मर से जुड़ी हैं। परस्पर एडमिटेंस Y_12 की गणना कीजिए।',
        bn: 'দুটি বাস z = j০.১ pu এবং বাস ১ এ a = ১.০৫ ট্যাপ অনুপাতের ট্রান্সফরমার দিয়ে যুক্ত। মিউচুয়াল অ্যাডমিট্যান্স Y_12 নির্ণয় করুন।'
      },
      hint: {
        en: 'y = 1 / (j0.1) = -j10 pu. Y_12 = -y / a* = -(-j10) / 1.05 = +j9.524 pu.',
        hi: 'Y_12 = +j10 / 1.05 = +j9.524 pu।',
        bn: 'Y_12 = +j১০ / ১.০৫ = +j৯.৫২৪ pu।'
      }
    }
  ]
};
