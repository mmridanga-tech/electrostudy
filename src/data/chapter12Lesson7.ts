import { Lesson } from '../types';

export const LESSON_TWO_PORT_PARAMETERS_AC: Lesson = {
  id: 'lsn-ch12-two-port-network-parameters',
  topicId: 'tp-admittance-intro',
  chapterId: 'ch-ac-circuits',
  order: 7,
  title: {
    en: 'Two-Port Network Parameters in the AC Domain (Z, Y, ABCD, h)',
    hi: 'एसी डोमेन में टू-पोर्ट नेटवर्क प्राचल (Z, Y, ABCD, h)',
    bn: 'এসি ডোমেনে টু-পোর্ট নেটওয়ার্ক প্যারামিটার (Z, Y, ABCD, h)'
  },
  description: {
    en: 'Formulate AC two-port network representations with complex phasor voltages and currents. Master Impedance (Z), Admittance (Y), Transmission/Chain (ABCD), and Hybrid (h) matrices. Determine reciprocity (z12 = z21, AD - BC = 1) and symmetry (z11 = z22, A = D) conditions, parameter interconversions, and cascade/series/parallel modular analysis.',
    hi: 'सम्मिश्र फेजर वोल्टेज एवं धाराओं के साथ एसी टू-पोर्ट नेटवर्क निरूपण तैयार करें। प्रतिबाधा (Z), प्रवेश्यता (Y), संचरण/श्रृंखला (ABCD), एवं हाइब्रिड (h) मैट्रिक्स में महारत हासिल करें। पारस्परिकता (z12 = z21, AD - BC = 1) और सममिति (z11 = z22, A = D) शर्तें, प्राचल अंतःरूपांतरण, तथा कैस्केड/श्रेणी/समानांतर विश्लेषण सीखें।',
    bn: 'জটিল ফেজর ভোল্টেজ ও কারেন্ট দিয়ে এসি টু-পোর্ট নেটওয়ার্ক ম্যাট্রিক্স গঠন করুন। প্রতিবাধা (Z), প্রবেশ্যতা (Y), সঞ্চালন (ABCD) এবং হাইব্রিড (h) ম্যাট্রিক্স আয়ত্ত করুন। দ্বিমুখীতা (z12 = z21, AD - BC = 1) ও প্রতিসাম্য (z11 = z22, A = D) শর্ত, পারস্পরিক রূপান্তর এবং ক্যাসকেড/শ্রেণি/সমান্তরাল সংযোগ পদ্ধতি শিখুন।'
  },
  estimatedMinutes: 45,
  easyExplanation: {
    en: 'Complex AC sub-systems (like transmission lines, audio filters, amplifiers, and transformer networks) can be treated as a "black box" having two pairs of electrical terminals: an Input Port (Port 1 with V1 and I1) and an Output Port (Port 2 with V2 and I2). Instead of re-solving all internal components every time, engineers characterize the black box with four compact complex parameters. Z-parameters treat currents as inputs and express voltages; Y-parameters treat voltages as inputs and express currents; ABCD (Transmission) parameters express input quantities in terms of output quantities (vital for cascading long transmission lines); and h-parameters combine voltage and current (ideal for transistors).',
    hi: 'जटिल एसी प्रणालियों (जैसे ट्रांसमिशन लाइन, ऑडियो फिल्टर, और ट्रांसफार्मर) को एक "ब्लैक बॉक्स" के रूप में माना जा सकता है जिसमें दो टर्मिनल जोड़े होते हैं: इनपुट पोर्ट 1 (V1, I1) और आउटपुट पोर्ट 2 (V2, I2)। हर बार आंतरिक घटकों को हल करने के बजाय, चार सम्मिश्र प्राचलों से नेटवर्क का वर्णन किया जाता है। Z-प्राचल धाराओं से वोल्टेज देते हैं; Y-प्राचल वोल्टेज से धारा देते हैं; ABCD प्राचल लंबी ट्रांसमिशन लाइनों के कैस्केड संयोजन के लिए सबसे उपयोगी हैं; और h-प्राचल ट्रांजिस्टर सर्किट में प्रयुक्त होते हैं।',
    bn: 'জটিল এসি ব্যবস্থা (যেমন সঞ্চালন লাইন, ফিল্টার, ট্রান্সফরমার) কে একটি "ব্ল্যাক বক্স" হিসেবে বিবেচনা করা যায় যার দুটি পোর্ট থাকে: ইনপুট পোর্ট ১ (V1, I1) এবং আউটপুট পোর্ট ২ (V2, I2)। প্রতিবার ভেতরের সব উপাদান আলাদাভাবে সমাধানের বদলে চারটি প্যারামিটারের ম্যাট্রিক্স দিয়ে নেটওয়ার্ক প্রকাশ করা হয়। Z-প্যারামিটার ভোল্টেজ ও কারেন্টের সম্পর্ক দেয়, Y-প্যারামিটার অ্যাডমিট্যান্স প্রকাশ করে, ABCD সঞ্চালন লাইনের ক্যাসকেড সংযোগে ব্যবহৃত হয় এবং h-প্যারামিটার ট্রানজিস্টরে কার্যকর।'
  },
  detailedExplanation: {
    en: '1. Standard Two-Port Convention:\nA port is a pair of terminals where current entering one terminal equals current leaving the other. Standard convention: currents I_1 and I_2 BOTH enter the network at positive voltage terminals V_1 and V_2.\n\n2. Impedance (Z) Parameters:\nExpress port voltages as linear functions of port currents:\n[V_1]   [z_11  z_12] [I_1]\n[V_2] = [z_21  z_22] [I_2]\n- z_11 = (V_1 / I_1)|_{I_2 = 0} (Open-circuit input impedance)\n- z_12 = (V_1 / I_2)|_{I_1 = 0} (Open-circuit reverse transfer impedance)\n- z_21 = (V_2 / I_1)|_{I_2 = 0} (Open-circuit forward transfer impedance)\n- z_22 = (V_2 / I_2)|_{I_1 = 0} (Open-circuit output impedance)\n\n3. Admittance (Y) Parameters:\nExpress port currents as linear functions of port voltages:\n[I_1]   [y_11  y_12] [V_1]\n[I_2] = [y_21  y_22] [V_2]\n- y_11 = (I_1 / V_1)|_{V_2 = 0} (Short-circuit input admittance)\n- y_12 = (I_1 / V_2)|_{V_1 = 0} (Short-circuit reverse transfer admittance)\n- y_21 = (I_2 / V_1)|_{V_2 = 0} (Short-circuit forward transfer admittance)\n- y_22 = (I_2 / V_2)|_{V_1 = 0} (Short-circuit output admittance)\nMatrix relation: [Y] = [Z]^{-1}.\n\n4. Transmission / Chain (ABCD) Parameters:\nRelate sending-end (input) quantities to receiving-end (output) quantities:\n[V_1]   [A  B] [ V_2 ]\n[I_1] = [C  D] [-I_2 ]\n(Note the negative sign -I_2, representing current flowing OUT into the load):\n- A = (V_1 / V_2)|_{I_2 = 0} (Open-circuit voltage ratio, dimensionless)\n- B = (V_1 / -I_2)|_{V_2 = 0} (Short-circuit transfer impedance in Ω)\n- C = (I_1 / V_2)|_{I_2 = 0} (Open-circuit transfer admittance in S)\n- D = (I_1 / -I_2)|_{V_2 = 0} (Short-circuit current ratio, dimensionless)\n\n5. Hybrid (h) Parameters:\n[V_1]   [h_11  h_12] [I_1]\n[I_2] = [h_21  h_22] [V_2]\n- h_11 (short-circuit input impedance in Ω), h_12 (open-circuit reverse voltage gain), h_21 (short-circuit forward current gain), h_22 (open-circuit output admittance in S).\n\n6. Reciprocity and Symmetry Theorems:\n- Reciprocity (network contains only linear, passive, bilateral components R, L, C, M without active dependent sources):\n  Z-parameters: z_12 = z_21\n  Y-parameters: y_12 = y_21\n  ABCD-parameters: AD - BC = 1 (Determinant Δ_T = 1)\n  h-parameters: h_12 = -h_21\n- Symmetry (network looks identical when viewed from Port 1 or Port 2):\n  Z-parameters: z_11 = z_22\n  Y-parameters: y_11 = y_22\n  ABCD-parameters: A = D\n  h-parameters: det(h) = h_11 h_22 - h_12 h_21 = 1\n\n7. Interconnection of Two-Port Networks:\n- Series-Series: [Z_total] = [Z_A] + [Z_B]\n- Parallel-Parallel: [Y_total] = [Y_A] + [Y_B]\n- Cascade (Tandem): [T_total] = [T_A] · [T_B] (ABCD matrix multiplication!).',
    hi: '1. टू-पोर्ट नेटवर्क में धाराएँ I_1 एवं I_2 हमेशा नेटवर्क में प्रवेश करती हैं।\n2. Z-प्राचल: V_1 = z_11 I_1 + z_12 I_2 एवं V_2 = z_21 I_1 + z_22 I_2।\n3. Y-प्राचल: [Y] = [Z]^-1। शार्ट-सर्किट स्थितियाँ।\n4. ABCD प्राचल: V_1 = A V_2 - B I_2 तथा I_1 = C V_2 - D I_2। ट्रांसमिशन लाइन विश्लेषण के लिए महत्वपूर्ण।\n5. h-प्राचल: ट्रांजिस्टर मॉडल के लिए प्रयुक्त।\n6. पारस्परिकता (Reciprocity): z_12 = z_21, y_12 = y_21, AD - BC = 1, h_12 = -h_21।\n7. सममिति (Symmetry): z_11 = z_22, y_11 = y_22, A = D।\n8. संयोजन: कैस्केड में ABCD मैट्रिक्स का गुणा किया जाता है: [T] = [T_A] × [T_B]।',
    bn: '১. টু-পোর্ট নেটওয়ার্কে কারেন্ট I_1 ও I_2 উভয়ই নেটওয়ার্কে প্রবেশ করে।\n২. Z-প্যারামিটার: V_1 = z_11 I_1 + z_12 I_2 এবং V_2 = z_21 I_1 + z_22 I_2।\n৩. Y-প্যারামিটার: [Y] = [Z]^-1।\n৪. ABCD প্যারামিটার: V_1 = A V_2 - B I_2 এবং I_1 = C V_2 - D I_2। সঞ্চালন লাইনের ক্ষেত্রে উপযোগী।\n৫. h-প্যারামিটার: ট্রানজিস্টর মডেলে কার্যকর।\n৬. দ্বিমুখীতা: z_12 = z_21, y_12 = y_21, AD - BC = 1, h_12 = -h_21।\n৭. প্রতিসাম্য: z_11 = z_22, y_11 = y_22, A = D।\n৮. ক্যাসকেড সংযোগে ম্যাট্রিক্স গুণন হয়: [T] = [T_A] × [T_B]।'
  },
  formulas: [
    {
      id: 'f-z-parameters-matrix',
      symbol: '[Z]',
      expression: '\\begin{bmatrix} \\mathbf{V}_1 \\\\ \\mathbf{V}_2 \\end{bmatrix} = \\begin{bmatrix} z_{11} & z_{12} \\\\ z_{21} & z_{22} \\end{bmatrix} \\begin{bmatrix} \\mathbf{I}_1 \\\\ \\mathbf{I}_2 \\end{bmatrix}',
      title: {
        en: 'Impedance (Z) Matrix Equation',
        hi: 'प्रतिबाधा (Z) मैट्रिक्स समीकरण',
        bn: 'প্রতিবাধা (Z) ম্যাট্রিক্স সমীকরণ'
      },
      description: {
        en: 'Defines port voltages in terms of port currents under open-circuit test conditions.',
        hi: 'ओपन-सर्किट स्थितियों में पोर्ट धाराओं के संदर्भ में पोर्ट वोल्टेज को परिभाषित करता है।',
        bn: 'উন্মুক্ত বর্তনী অবস্থায় পোর্ট কারেন্টের সাপেক্ষে পোর্ট ভোল্টেজ প্রকাশ করে।'
      },
      variables: [
        { symbol: 'z_{11}, z_{22}', name: { en: 'Driving-point impedances (Ω)', hi: 'ड्राइविंग-पॉइंट प्रतिबाधाएँ (Ω)', bn: 'ড্রাইভিং-পয়েন্ট প্রতিবাধা (Ω)' } },
        { symbol: 'z_{12}, z_{21}', name: { en: 'Transfer impedances (Ω)', hi: 'ट्रांसफर प्रतिबाधाएँ (Ω)', bn: 'স্থানান্তর প্রতিবাধা (Ω)' } }
      ]
    },
    {
      id: 'f-abcd-parameters-matrix',
      symbol: '[T]',
      expression: '\\begin{bmatrix} \\mathbf{V}_1 \\\\ \\mathbf{I}_1 \\end{bmatrix} = \\begin{bmatrix} A & B \\\\ C & D \\end{bmatrix} \\begin{bmatrix} \\mathbf{V}_2 \\\\ -\\mathbf{I}_2 \\end{bmatrix}',
      title: {
        en: 'Transmission (ABCD / Chain) Matrix Equation',
        hi: 'संचरण (ABCD / चेन) मैट्रिक्स समीकरण',
        bn: 'সঞ্চালন (ABCD) ম্যাট্রিক্স সমীকরণ'
      },
      description: {
        en: 'Relates sending-end variables to receiving-end variables with output current directed into load.',
        hi: 'आउटपुट धारा को लोड की दिशा में मानते हुए इनपुट चरों को आउटपुट चरों से जोड़ता है।',
        bn: 'লোডমুখী কারেন্ট বিবেচনা করে ইনপুট চলককে আউটপুট চলকের সাথে সংযুক্ত করে।'
      },
      variables: [
        { symbol: 'A, D', name: { en: 'Dimensionless voltage and current ratios', hi: 'विमाहीन वोल्टेज एवं धारा अनुपात', bn: 'মাত্রাহীন ভোল্টেজ ও কারেন্ট অনুপাত' } },
        { symbol: 'B', name: { en: 'Transfer impedance (Ω)', hi: 'ट्रांसफर प्रतिबाधा (Ω)', bn: 'স্থানান্তর প্রতিবাধা (Ω)' } },
        { symbol: 'C', name: { en: 'Transfer admittance (S)', hi: 'ट्रांसफर प्रवेश्यता (S)', bn: 'স্থানান্তর অ্যাডমিট্যান্স (S)' } }
      ]
    },
    {
      id: 'f-reciprocity-symmetry',
      symbol: 'Cond',
      expression: '\\text{Reciprocal: } z_{12} = z_{21}, \\, AD - BC = 1; \\quad \\text{Symmetrical: } z_{11} = z_{22}, \\, A = D',
      title: {
        en: 'Reciprocity and Symmetry Conditions',
        hi: 'पारस्परिकता एवं सममिति की शर्तें',
        bn: 'দ্বিমুখীতা ও প্রতিসাম্যের শর্তাবলী'
      },
      description: {
        en: 'Mathematical tests determining if a network is bilateral and geometrically symmetrical.',
        hi: 'गणितीय परीक्षण जो यह निर्धारित करते हैं कि नेटवर्क द्विपक्षीय एवं सममित है या नहीं।',
        bn: 'নেটওয়ার্কটি দ্বিমুখী এবং জ্যামিতিক প্রতিসম কিনা তা যাচাইয়ের গাণিতিক শর্ত।'
      },
      variables: [
        { symbol: 'AD - BC', name: { en: 'Determinant of ABCD matrix', hi: 'ABCD मैट्रिक्स का सारणिक', bn: 'ABCD ম্যাট্রিক্সের নির্ণায়ক' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-ch12-l07-t-pi-formulas',
      title: {
        en: 'Z and Y Parameters of Symmetrical T and Π Networks',
        hi: 'सममित T एवं Π नेटवर्कों के Z एवं Y प्राचल',
        bn: 'প্রতিসম টি ও পাই নেটওয়ার্কের Z ও Y প্যারামিটার'
      },
      content: {
        en: 'Two canonical passive topologies illustrate parameter extraction:\n\n1. Symmetrical T-Network:\nSeries arms = Z_1, Z_2; Shunt arm = Z_3.\n- z_11 = Z_1 + Z_3\n- z_22 = Z_2 + Z_3\n- z_12 = z_21 = Z_3\nIf symmetrical (Z_1 = Z_2 = Z_series): z_11 = z_22 = Z_series + Z_3.\n\n2. Symmetrical Π-Network:\nSeries arm = Y_3; Shunt input arm = Y_1; Shunt output arm = Y_2.\n- y_11 = Y_1 + Y_3\n- y_22 = Y_2 + Y_3\n- y_12 = y_21 = -Y_3\nIf symmetrical (Y_1 = Y_2 = Y_shunt): y_11 = y_22 = Y_shunt + Y_3.\n\nNotice how simple T-networks naturally yield Z-parameters, while Π-networks naturally yield Y-parameters!',
        hi: '1. सममित T-नेटवर्क (श्रेणी भुजाएँ Z_1, Z_2; शंट भुजा Z_3):\n- z_11 = Z_1 + Z_3, z_22 = Z_2 + Z_3, z_12 = z_21 = Z_3।\n2. सममित Π-नेटवर्क (श्रेणी भुजा Y_3; शंट भुजाएँ Y_1, Y_2):\n- y_11 = Y_1 + Y_3, y_22 = Y_2 + Y_3, y_12 = y_21 = -Y_3।',
        bn: '১. প্রতিসম টি-নেটওয়ার্ক (শ্রেণি বাহু Z_1, Z_2; শান্ট বাহু Z_3):\n- z_11 = Z_1 + Z_3, z_22 = Z_2 + Z_3, z_12 = z_21 = Z_3।\n২. প্রতিসম পাই-নেটওয়ার্ক (শ্রেণি বাহু Y_3; শান্ট বাহু Y_1, Y_2):\n- y_11 = Y_1 + Y_3, y_22 = Y_2 + Y_3, y_12 = y_21 = -Y_3।'
      }
    },
    {
      id: 'sec-ch12-l07-cascade-power',
      title: {
        en: 'Cascading Networks with ABCD Matrices in Power Systems',
        hi: 'पावर सिस्टम में ABCD मैट्रिक्स के साथ कैस्केडिंग नेटवर्क',
        bn: 'পাওয়ার সিস্টেমে ABCD ম্যাট্রিক্সের সাহায্যে ক্যাসকেড সংযোগ'
      },
      content: {
        en: 'When two-port networks are cascaded in tandem (output of Network A feeds input of Network B):\n[V_1]               [V_2A]               [V_2B]\n[   ] = [T_A] · [    ] = [T_A] · [T_B] · [    ]\n[I_1]               [-I_2A]              [-I_2B]\n\nThe overall transmission matrix is the direct matrix product:\n[T_overall] = [T_A] · [T_B] = [A_A A_B + B_A C_B,  A_A B_B + B_A D_B;  C_A A_B + D_A C_B,  C_A B_B + D_A D_B].\n\nThis property makes ABCD parameters the universal standard for long electrical power transmission lines divided into series sections with intermediate shunt reactors and transformers.',
        hi: 'जब दो टू-पोर्ट नेटवर्क कैस्केड में जुड़े होते हैं (नेटवर्क A का आउटपुट नेटवर्क B का इनपुट बनता है), तो कुल ट्रांसमिशन मैट्रिक्स दोनों मैट्रिक्स का गुणनफल होती है: [T_कुल] = [T_A] × [T_B]। यह गुण पावर ट्रांसमिशन लाइनों के विश्लेषण को अत्यधिक सुगम बनाता है।',
        bn: 'যখন দুটি টু-পোর্ট নেটওয়ার্ক ক্যাসকেডে যুক্ত থাকে (A এর আউটপুট B এর ইনপুট হয়), তখন মোট সঞ্চালন ম্যাট্রিক্স হলো দুটি ম্যাট্রিক্সের গুণফল: [T_মোট] = [T_A] × [T_B]। পাওয়ার সঞ্চালন লাইনের বিশ্লেষণে এটি অত্যন্ত কার্যকর।'
      }
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch12-l07-01',
      problem: {
        en: 'An AC resistive-inductive T-network has a series input arm Z_1 = 4 + j6 Ω, a series output arm Z_2 = 2 + j3 Ω, and a central shunt arm Z_3 = 10 - j5 Ω. (a) Determine the four Z-parameters z_11, z_12, z_21, and z_22. (b) Verify whether the network is reciprocal and whether it is symmetrical. (c) If Port 2 is terminated in an open circuit (I_2 = 0) and an AC current phasor I_1 = 2∠0° A is injected into Port 1, find V_1 and V_2.',
        hi: 'एक एसी T-नेटवर्क में इनपुट शाखा Z_1 = 4 + j6 Ω, आउटपुट शाखा Z_2 = 2 + j3 Ω, और शंट शाखा Z_3 = 10 - j5 Ω है। (a) चारों Z-प्राचल ज्ञात कीजिए। (b) जांचें कि क्या नेटवर्क पारस्परिक और सममित है। (c) यदि Port 2 खुला हो (I_2 = 0) और Port 1 में I_1 = 2∠0° A दिया जाए, तो V_1 एवं V_2 ज्ञात कीजिए।',
        bn: 'একটি এসি টি-নেটওয়ার্কে ইনপুট বাহু Z_1 = ৪ + j৬ Ω, আউটপুট বাহু Z_2 = ২ + j৩ Ω এবং শান্ট বাহু Z_3 = ১০ - j৫ Ω। (ক) চারটি Z-প্যারামিটার নির্ণয় করুন। (খ) নেটওয়ার্কটি দ্বিমুখী ও প্রতিসম কিনা যাচাই করুন। (গ) Port 2 উন্মুক্ত থাকলে (I_2 = ০) এবং Port 1 এ I_1 = ২∠০° A কারেন্ট দিলে V_1 ও V_2 কত হবে?'
      },
      formula: {
        en: 'z_11 = Z_1 + Z_3\nz_22 = Z_2 + Z_3\nz_12 = z_21 = Z_3\nReciprocity: z_12 = z_21.\nSymmetry: z_11 = z_22.\nV_1 = z_11 I_1 + z_12 I_2\nV_2 = z_21 I_1 + z_22 I_2',
        hi: 'z_11 = Z_1 + Z_3, z_22 = Z_2 + Z_3, z_12 = z_21 = Z_3।',
        bn: 'z_11 = Z_1 + Z_3, z_22 = Z_2 + Z_3, z_12 = z_21 = Z_3।'
      },
      substitution: {
        en: '(a) z_11 = (4 + j6) + (10 - j5) = 14 + j1 Ω.\nz_22 = (2 + j3) + (10 - j5) = 12 - j2 Ω.\nz_12 = z_21 = Z_3 = 10 - j5 Ω.\n(b) Reciprocity check: z_12 = 10 - j5 Ω and z_21 = 10 - j5 Ω. Since z_12 = z_21, the network is strictly RECIPROCAL.\nSymmetry check: z_11 = 14 + j1 Ω ≠ z_22 = 12 - j2 Ω. Since z_11 ≠ z_22, the network is ASYMMETRICAL (not symmetrical).\n(c) With I_2 = 0 and I_1 = 2∠0° A:\nV_1 = z_11 · I_1 = (14 + j1) · 2 = 28 + j2 V = 28.07∠4.09° V.\nV_2 = z_21 · I_1 = (10 - j5) · 2 = 20 - j10 V = 22.36∠-26.57° V.',
        hi: '(a) z_11 = 14 + j1 Ω, z_22 = 12 - j2 Ω, z_12 = z_21 = 10 - j5 Ω।\n(b) z_12 = z_21 होने से नेटवर्क पारस्परिक (Reciprocal) है। z_11 ≠ z_22 होने से यह असममित (Asymmetrical) है।\n(c) V_1 = (14 + j1) × 2 = 28 + j2 V = 28.07∠4.09° V।\nV_2 = (10 - j5) × 2 = 20 - j10 V = 22.36∠-26.57° V।',
        bn: '(ক) z_11 = ১৪ + j১ Ω, z_22 = ১২ - j২ Ω, z_12 = z_21 = ১০ - j৫ Ω।\n(খ) z_12 = z_21 হওয়ায় নেটওয়ার্কটি দ্বিমুখী (Reciprocal)। কিন্তু z_11 ≠ z_22 হওয়ায় এটি অপ্রতিসম।\n(গ) V_1 = (১৪ + j১) × ২ = ২৮ + j২ V = ২৮.০৭∠৪.০৯° V।\nV_2 = (১০ - j৫) × ২ = ২০ - j১০ V = ২২.৩৬∠-২৬.৫৭° V।'
      },
      calculation: {
        en: 'The open-circuit voltage at Port 2 (V_2 = 22.36∠-26.57° V) equals the voltage drop across shunt arm Z_3 produced by primary current I_1.',
        hi: 'Port 2 पर ओपन-सर्किट वोल्टेज शंट शाखा Z_3 पर प्राथमिक धारा द्वारा उत्पन्न वोल्टेज ड्रॉप के बराबर है।',
        bn: 'Port 2 এর ওপেন-সার্কিট ভোল্টেজ মূলত শান্ট বাহু Z_3 তে প্রাথমিক কারেন্ট দ্বারা তৈরি ভোল্টেজ ড্রপ।'
      },
      finalAnswer: {
        en: '[Z] = [14+j1, 10-j5; 10-j5, 12-j2] Ω; Network is Reciprocal, but Asymmetrical; V_1 = 28.07∠4.09° V, V_2 = 22.36∠-26.57° V',
        hi: '[Z] = [14+j1, 10-j5; 10-j5, 12-j2] Ω; नेटवर्क पारस्परिक है परंतु असममित; V_1 = 28.07∠4.09° V, V_2 = 22.36∠-26.57° V',
        bn: '[Z] = [১৪+j১, ১০-j৫; ১০-j৫, ১২-j২] Ω; নেটওয়ার্কটি দ্বিমুখী কিন্তু অপ্রতিসম; V_1 = ২৮.০৭∠৪.০৯° V, V_2 = ২২.৩৬∠-২৬.৫৭° V'
      }
    },
    {
      id: 'ex-ch12-l07-02',
      problem: {
        en: 'A medium-length power transmission line is modeled as a nominal Π-network at 50 Hz. The total series impedance is Z = 20 + j80 Ω, and each shunt admittance branch at the two ends is Y/2 = j0.5 × 10^-3 S. (a) Derive the ABCD parameters of the transmission line. (b) Verify that AD - BC = 1. (c) If receiving-end voltage is V_2 = 220 kV line-to-neutral (220∠0° kV) under open-circuit condition (no-load, I_2 = 0), calculate the required sending-end voltage V_1 and the Ferranti rise in voltage.',
        hi: 'एक मध्यम ट्रांसमिशन लाइन को नाममात्र Π-नेटवर्क के रूप में मॉडल किया गया है। कुल श्रेणी प्रतिबाधा Z = 20 + j80 Ω है और प्रत्येक सिरे पर शंट प्रवेश्यता Y/2 = j0.5 × 10^-3 S है। (a) लाइन के ABCD प्राचल ज्ञात कीजिए। (b) सत्यापित कीजिए कि AD - BC = 1 है। (c) यदि नो-लोड (I_2 = 0) पर V_2 = 220 kV हो, तो भेजने वाले सिरे का वोल्टेज V_1 ज्ञात कीजिए।',
        bn: 'একটি মাঝারি সঞ্চালন লাইনকে পাই-নেটওয়ার্ক হিসেবে মডেল করা হলো। মোট শ্রেণি প্রতিবাধা Z = ২০ + j৮০ Ω এবং প্রতিটি প্রান্তে শান্ট অ্যাডমিট্যান্স Y/২ = j০.৫ × ১০^-৩ S। (ক) ABCD প্যারামিটার নির্ণয় করুন। (খ) প্রমাণ করুন AD - BC = ১। (গ) নো-লোড অবস্থায় (I_2 = ০) গ্রহণ প্রান্তে V_2 = ২২০ kV হলে প্রেরণ প্রান্তের ভোল্টেজ V_1 নির্ণয় করুন।'
      },
      formula: {
        en: 'For nominal Π-line:\nA = D = 1 + (Z · Y) / 2\nB = Z\nC = Y · (1 + Z · Y / 4)\nV_1 = A V_2 - B I_2 = A V_2 (when I_2 = 0)',
        hi: 'A = D = 1 + ZY/2, B = Z, C = Y(1 + ZY/4), V_1 = A V_2।',
        bn: 'A = D = ১ + ZY/২, B = Z, C = Y(১ + ZY/৪), V_1 = A V_2।'
      },
      substitution: {
        en: '(a) Compute Z · Y:\nZ · Y = (20 + j80) · (j0.001) = j0.02 - 0.08 = -0.08 + j0.02.\n(Z · Y) / 2 = -0.04 + j0.01.\nA = D = 1 + (-0.04 + j0.01) = 0.96 + j0.01 = 0.96005∠0.597°.\nB = Z = 20 + j80 Ω = 82.46∠75.96° Ω.\nC = Y · (1 + ZY / 4) = j0.001 · [1 + (-0.02 + j0.005)] = j0.001 · (0.98 + j0.005) = -0.000005 + j0.00098 S = 0.98 × 10^-3 ∠90.29° S.\n(b) Check AD - BC:\nAD = A^2 = (0.96 + j0.01)^2 = 0.9216 - 0.0001 + j0.0192 = 0.9215 + j0.0192.\nBC = (20 + j80) · (-0.000005 + j0.00098) = (-0.0001 - 0.0784) + j(0.0196 - 0.0004) = -0.0785 + j0.0192.\nAD - BC = (0.9215 + j0.0192) - (-0.0785 + j0.0192) = 1.0000 + j0 = 1.0 (verified!).\n(c) Open-circuit sending-end voltage:\nV_1 = A · V_2 = (0.96 + j0.01) · 220 kV = 211.2 + j2.2 kV = 211.21∠0.597° kV.\nFerranti Effect: |V_2| (220 kV) is GREATER than |V_1| (211.2 kV) on open circuit due to line charging capacitance!',
        hi: '(a) A = D = 0.96 + j0.01, B = 20 + j80 Ω, C = -0.000005 + j0.00098 S।\n(b) AD - BC = 1.0 + j0 (सत्यापित)।\n(c) V_1 = A × 220 kV = 211.21∠0.597° kV। नो-लोड पर लाइन की धारिता के कारण प्राप्त वोल्टेज भेजा गया वोल्टेज से अधिक होता है (फेरेंटी प्रभाव)।',
        bn: '(ক) A = D = ০.৯৬ + j০.০১, B = ২০ + j৮০ Ω, C = -০.০০০০০৫ + j০.০০০৯৮ S।\n(খ) AD - BC = ১.০ + j০ (প্রমাণিত)।\n(গ) V_1 = A × ২২০ kV = ২১১.২১∠০.৫৯৭° kV। লাইন চার্জিং ক্যাপাসিট্যান্সের কারণে নো-লোডে গ্রহণ প্রান্তের ভোল্টেজ বেশি হয় (ফেরান্তি প্রভাব)।'
      },
      calculation: {
        en: 'The voltage rise at the receiving end is 220 - 211.21 = +8.79 kV (+4.16% voltage rise under no-load condition).',
        hi: 'नो-लोड पर प्राप्त सिरे पर वोल्टेज वृद्धि 8.79 kV (4.16%) है।',
        bn: 'নো-লোড অবস্থায় গ্রহণ প্রান্তে ভোল্টেজ বৃদ্ধি ৮.৭৯ kV (৪.১৬%)।'
      },
      finalAnswer: {
        en: 'A = D = 0.96 + j0.01; B = 20 + j80 Ω; C = -5×10^-6 + j9.8×10^-4 S; AD - BC = 1; V_1 = 211.21∠0.597° kV',
        hi: 'A = D = 0.96 + j0.01; B = 20 + j80 Ω; C = j0.98 mS; AD - BC = 1; V_1 = 211.21∠0.597° kV',
        bn: 'A = D = ০.৯৬ + j০.০১; B = ২০ + j৮০ Ω; C = j০.৯৮ mS; AD - BC = ১; V_1 = ২১১.২১∠০.৫৯৭° kV'
      },
      }
  ],
  practicalApplications: {
    en: [
      'Power Grid High-Voltage Transmission Line Modeling: Utility operators model hundreds of kilometers of 400 kV transmission lines using ABCD matrices to compute receiving-end voltage regulation, corona losses, reactive power compensation, and the Ferranti effect.',
      'RF Amplifier S-Parameter and Hybrid Matrix Design: Bipolar Junction Transistors (BJTs) at low frequencies are specified by manufacturers using h-parameters (h_fe, h_ie), while high-frequency microwave transistors convert between Z, Y, and Scattering (S) parameters to guarantee stability.'
    ],
    hi: [
      'पावर ग्रिड हाई-वोल्टेज ट्रांसमिशन लाइन मॉडलिंग: बिजली कंपनियां वोल्टेज नियमन, लाइन चार्जिंग करंट, और फेरेंटी प्रभाव की गणना करने के लिए 400 kV ट्रांसमिशन लाइनों को ABCD मैट्रिक्स का उपयोग करके मॉडल करती हैं।',
      'आरएफ एम्पलीफायर एस-पैरामीटर एवं हाइब्रिड मैट्रिक्स डिजाइन: बीजेटी ट्रांजिस्टर को कम आवृत्तियों पर h-प्राचलों (h_fe, h_ie) द्वारा निर्दिष्ट किया जाता है, जबकि माइक्रोवेव ट्रांजिस्टर स्थिरता के लिए Z, Y और S-प्राचलों का उपयोग करते हैं।'
    ],
    bn: [
      'পাওয়ার গ্রিড হাই-ভোল্টেজ সঞ্চালন লাইন মডেলিং: বিদ্যুৎ বিতরণকারী সংস্থাগুলি ভোল্টেজ রেগুলেশন এবং ফেরান্তি প্রভাব নির্ণয়ে ৪০০ kV সঞ্চালন লাইনকে ABCD ম্যাট্রিক্সের সাহায্যে মডেল করে থাকে।',
      'আরএফ অ্যাম্প্লিফায়ার এস-প্যারামিটার ও হাইব্রিড ম্যাট্রিক্স ডিজাইন: কম কম্পাঙ্কে বিজিটি ট্রানজিস্টর নির্মাতারা h-প্যারামিটার উল্লেখ করে থাকেন এবং উচ্চ কম্পাঙ্কের মাইক্রোওয়েভে সার্কিট স্থিতিশীলতার জন্য Z, Y ও S প্যারামিটার ব্যবহৃত হয়।'
    ]
  },
  importantPoints: {
    en: [
      'For any reciprocal passive AC network without dependent sources, the transmission matrix determinant is identically unity: AD - BC = 1, and the impedance matrix is symmetric: z_12 = z_21.',
      'When connecting two-port networks in cascade, the overall transmission matrix is obtained by matrix multiplication: [T_total] = [T_1] · [T_2].'
    ],
    hi: [
      'निर्भर स्रोतों के बिना किसी भी निष्क्रिय एसी नेटवर्क के लिए संचरण मैट्रिक्स का सारणिक इकाई होता है: AD - BC = 1, तथा z_12 = z_21।',
      'जब दो टू-पोर्ट नेटवर्क कैस्केड में जुड़े होते हैं, तो कुल संचरण मैट्रिक्स दोनों के गुणनफल से प्राप्त होती है: [T_कुल] = [T_1] × [T_2]।'
    ],
    bn: [
      'ডিপেন্ডেন্ট উৎসবিহীন যেকোনো প্যাসিভ নেটওয়ার্কে সঞ্চালন ম্যাট্রিক্সের নির্ণায়ক সর্বদা এক হয়: AD - BC = ১, এবং z_12 = z_21।',
      'ক্যাসকেড সংযোগের ক্ষেত্রে সামগ্রিক সঞ্চালন ম্যাট্রিক্স পাওয়া যায় ম্যাট্রিক্স গুণনের মাধ্যমে: [T_মোট] = [T_1] × [T_2]।'
    ]
  },
  commonMistakes: {
    en: [
      'Mistake: Writing the transmission equation with positive I_2 instead of -I_2, which causes sign errors in columns B and D. Correction: The standard transmission definition uses -I_2 because output current leaves the network into the load: V_1 = A V_2 - B I_2 and I_1 = C V_2 - D I_2.'
    ],
    hi: [
      'त्रुटि: संचरण समीकरण में -I_2 के बजाय +I_2 लिखना, जिससे B और D में चिह्न त्रुटि हो जाती है। सुधार: मानक संचरण परिभाषा में -I_2 का उपयोग होता है क्योंकि धारा लोड की ओर बाहर निकलती है: V_1 = A V_2 - B I_2।'
    ],
    bn: [
      'ভুল: সঞ্চালন সমীকরণে -I_2 এর পরিবর্তে +I_2 লেখা, যার ফলে B ও D কলামে ভুল চিহ্ন আসে। সংশোধন: আউটপুট কারেন্ট লোডের দিকে প্রবাহিত হওয়ায় ট্রান্সমিশন সমীকরণে -I_2 ব্যবহৃত হয়: V_1 = A V_2 - B I_2।'
    ]
  },
  keyTakeaways: {
    en: [
      'Two-port parameters (Z, Y, ABCD, h) reduce complex AC networks to manageable 2x2 matrices. ABCD parameters excel for cascaded transmission networks where AD - BC = 1 validates reciprocity.'
    ],
    hi: [
      'टू-पोर्ट प्राचल (Z, Y, ABCD, h) जटिल एसी नेटवर्कों को 2x2 मैट्रिक्स में बदलते हैं। कैस्केड ट्रांसमिशन के लिए ABCD प्राचल सर्वोत्तम हैं जहाँ AD - BC = 1 पारस्परिकता को प्रमाणित करता है।'
    ],
    bn: [
      'টু-পোর্ট প্যারামিটার (Z, Y, ABCD, h) জটিল এসি বর্তনীকে ২x২ ম্যাট্রিক্সে রূপান্তর করে। ক্যাসকেড সঞ্চালন লাইনের জন্য ABCD প্যারামিটার আদর্শ যেখানে AD - BC = ১ দ্বিমুখীতা নিশ্চিত করে।'
    ]
  },
  practiceQuestions: [
    {
      id: 'pq-ch12-l07-01',
      question: {
        en: 'A symmetrical two-port network has A = 0.95 ∠ 1.2° and B = 45 ∠ 82° Ω. If the network is reciprocal, find parameter D.',
        hi: 'एक सममित टू-पोर्ट नेटवर्क में A = 0.95 ∠ 1.2° है। यदि नेटवर्क पारस्परिक और सममित है, तो प्राचल D क्या है?',
        bn: 'একটি প্রতিসম টু-পোর্ট নেটওয়ার্কে A = ০.৯৫ ∠ ১.২°। নেটওয়ার্কটি প্রতিসম ও দ্বিমুখী হলে প্যারামিটার D কত?'
      },
      hint: {
        en: 'For any symmetrical network, A = D. Therefore, D = 0.95 ∠ 1.2°.',
        hi: 'सममित नेटवर्क के लिए A = D होता है, अतः D = 0.95 ∠ 1.2°।',
        bn: 'প্রতিসম নেটওয়ার্কের শর্ত A = D, সুতরাং D = ০.৯৫ ∠ ১.২°।'
      }
    },
    {
      id: 'pq-ch12-l07-02',
      question: {
        en: 'State the matrix operation required to combine two two-port networks connected in parallel at both input and output ports.',
        hi: 'इनपुट एवं आउटपुट दोनों पोर्ट पर समानांतर में जुड़े दो टू-पोर्ट नेटवर्कों को संयोजित करने के लिए आवश्यक मैट्रिक्स संक्रिया बताइए।',
        bn: 'উভয় প্রান্তে সমান্তরাল সংযোগে যুক্ত দুটি টু-পোর্ট নেটওয়ার্কের তুল্য প্যারামিটার পেতে কোন ম্যাট্রিক্স যোগ করতে হয়?'
      },
      hint: {
        en: 'Add their Admittance matrices: [Y_total] = [Y_1] + [Y_2].',
        hi: 'उनकी प्रवेश्यता (Y) मैट्रिक्स को जोड़ें: [Y_कुल] = [Y_1] + [Y_2]।',
        bn: 'তাদের অ্যাডমিট্যান্স ম্যাট্রিক্স যোগ করতে হবে: [Y_মোট] = [Y_1] + [Y_2]।'
      }
    }
  ],
  mcqs: [
    {
      id: 'mcq-ch12-l07-01',
      question: {
        en: 'What is the mathematical condition for a passive two-port AC network to be RECIPROCAL in terms of its transmission (ABCD) parameters?',
        hi: 'संचरण (ABCD) प्राचलों के संदर्भ में एक निष्क्रिय टू-पोर्ट नेटवर्क के पारस्परिक (Reciprocal) होने की गणितीय शर्त क्या है?',
        bn: 'সঞ্চালন (ABCD) প্যারামিটারের সাপেক্ষে একটি প্যাসিভ টু-পোর্ট নেটওয়ার্কের দ্বিমুখী (Reciprocal) হওয়ার গাণিতিক শর্ত কী?'
      },
      options: [
        { id: 'opt-1', text: { en: 'A = D', hi: 'A = D', bn: 'A = D' } },
        { id: 'opt-2', text: { en: 'AD - BC = 1', hi: 'AD - BC = 1', bn: 'AD - BC = ১' } },
        { id: 'opt-3', text: { en: 'B = C', hi: 'B = C', bn: 'B = C' } },
        { id: 'opt-4', text: { en: 'AD + BC = 0', hi: 'AD + BC = 0', bn: 'AD + BC = ০' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'In any linear bilateral passive network, the determinant of the transmission matrix is identically 1: det[T] = AD - BC = 1.',
        hi: 'किसी भी द्विपक्षीय निष्क्रिय नेटवर्क में ट्रांसमिशन मैट्रिक्स का सारणिक 1 होता है: AD - BC = 1।',
        bn: 'যেকোনো প্যাসিভ দ্বিমুখী নেটওয়ার্কে সঞ্চালন ম্যাট্রিক্সের নির্ণায়ক সর্বদা ১ হয়: AD - BC = ১।'
      }
    },
    {
      id: 'mcq-ch12-l07-02',
      question: {
        en: 'What is the condition for an AC two-port network to be SYMMETRICAL in terms of its impedance (Z) parameters?',
        hi: 'प्रतिबाधा (Z) प्राचलों के संदर्भ में एसी टू-पोर्ट नेटवर्क के सममित (Symmetrical) होने की शर्त क्या है?',
        bn: 'প্রতিবাধা (Z) প্যারামিটারের সাপেক্ষে একটি এসি টু-পোর্ট নেটওয়ার্কের প্রতিসম (Symmetrical) হওয়ার শর্ত কী?'
      },
      options: [
        { id: 'opt-1', text: { en: 'z_12 = z_21', hi: 'z_12 = z_21', bn: 'z_12 = z_21' } },
        { id: 'opt-2', text: { en: 'z_11 = z_22', hi: 'z_11 = z_22', bn: 'z_11 = z_22' } },
        { id: 'opt-3', text: { en: 'z_11 · z_22 - z_12 · z_21 = 1', hi: 'z_11 · z_22 - z_12 · z_21 = 1', bn: 'z_11 · z_22 - z_12 · z_21 = ১' } },
        { id: 'opt-4', text: { en: 'z_11 + z_22 = 0', hi: 'z_11 + z_22 = 0', bn: 'z_11 + z_22 = ০' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'Symmetry requires the input impedance of Port 1 with Port 2 open to equal the input impedance of Port 2 with Port 1 open: z_11 = z_22.',
        hi: 'सममिति का अर्थ है कि दोनों तरफ से देखने पर इनपुट प्रतिबाधा समान हो: z_11 = z_22।',
        bn: 'প্রতিসাম্যের শর্ত হলো উভয় দিক থেকে ইনপুট প্রতিবাধা সমান হতে হবে: z_11 = z_22।'
      }
    },
    {
      id: 'mcq-ch12-l07-03',
      question: {
        en: 'How are Z-parameters and Y-parameters mathematically related for an invertible AC network?',
        hi: 'एक व्युत्क्रमणीय एसी नेटवर्क के लिए Z-प्राचल और Y-प्राचल गणितीय रूप से कैसे संबंधित हैं?',
        bn: 'একটি বিপরীতযোগ্য এসি নেটওয়ার্কে Z-প্যারামিটার ও Y-প্যারামিটার কীভাবে সম্পর্কিত?'
      },
      options: [
        { id: 'opt-1', text: { en: '[Y] = [Z]^T', hi: '[Y] = [Z]^T', bn: '[Y] = [Z]^T' } },
        { id: 'opt-2', text: { en: '[Y] = [Z]^{-1}', hi: '[Y] = [Z]^{-1}', bn: '[Y] = [Z]^{-1}' } },
        { id: 'opt-3', text: { en: '[Y] = -[Z]', hi: '[Y] = -[Z]', bn: '[Y] = -[Z]' } },
        { id: 'opt-4', text: { en: 'y_ij = 1 / z_ij for each element individually', hi: 'प्रत्येक घटक के लिए y_ij = 1/z_ij', bn: 'প্রতিটি উপাদানের জন্য y_ij = ১/z_ij' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'Since [V] = [Z][I] and [I] = [Y][V], the admittance matrix is the matrix inverse of the impedance matrix: [Y] = [Z]^{-1}. (Notice: individual elements are NOT simple reciprocals!).',
        hi: 'चूँकि [V] = [Z][I] और [I] = [Y][V], इसलिए प्रवेश्यता मैट्रिक्स प्रतिबाधा मैट्रिक्स का व्युत्क्रम होती है: [Y] = [Z]^-1।',
        bn: 'যেহেতু [V] = [Z][I] এবং [I] = [Y][V], তাই অ্যাডমিট্যান্স ম্যাট্রিক্স হলো ইম্পিড্যান্স ম্যাট্রিক্সের বিপরীত ম্যাট্রিক্স: [Y] = [Z]^-1।'
      }
    },
    {
      id: 'mcq-ch12-l07-04',
      question: {
        en: 'In the transmission parameter matrix [ABCD], what are the physical units of parameters B and C, respectively?',
        hi: 'संचरण प्राचल मैट्रिक्स [ABCD] में प्राचल B और C की भौतिक इकाइयाँ क्रमशः क्या हैं?',
        bn: 'ABCD প্যারামিটার ম্যাট্রিক্সে B এবং C এর ভৌত একক যথাক্রমে কী?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Both are dimensionless', hi: 'दोनों विमाहीन हैं', bn: 'উভয়ই মাত্রাহীন' } },
        { id: 'opt-2', text: { en: 'B is in Ohms (Ω), C is in Siemens (S)', hi: 'B ओम (Ω) में है, C सीमेंस (S) में है', bn: 'B ওহম (Ω) এককে, C সিমেন্স (S) এককে' } },
        { id: 'opt-3', text: { en: 'B is in Siemens (S), C is in Ohms (Ω)', hi: 'B सीमेंस में है, C ओम में है', bn: 'B সিমেন্সে, C ওহমে' } },
        { id: 'opt-4', text: { en: 'B is in Volts, C is in Amperes', hi: 'B वोल्ट में है, C एम्पीयर में है', bn: 'B ভোল্টে, C অ্যাম্পিয়ারে' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'B = (V_1 / -I_2)|_{V_2 = 0} has units of V/A = Ω (transfer impedance). C = (I_1 / V_2)|_{I_2 = 0} has units of A/V = S (transfer admittance). A and D are dimensionless.',
        hi: 'B = V/I (ओम) एक ट्रांसफर प्रतिबाधा है, और C = I/V (सीमेंस) एक ट्रांसफर प्रवेश्यता है। A और D विमाहीन हैं।',
        bn: 'B = V/I (ওহম) হলো স্থানান্তর প্রতিবাধা এবং C = I/V (সিমেন্স) হলো স্থানান্তর অ্যাডমিট্যান্স। A ও D মাত্রাহীন।'
      }
    },
    {
      id: 'mcq-ch12-l07-05',
      question: {
        en: 'When two two-port networks are connected in CASCADE (tandem), how is the overall ABCD matrix obtained?',
        hi: 'जब दो टू-पोर्ट नेटवर्क कैस्केड में जुड़े होते हैं, तो कुल ABCD मैट्रिक्स कैसे प्राप्त की जाती है?',
        bn: 'দুটি টু-পোর্ট নেটওয়ার্ক ক্যাসকেডে যুক্ত থাকলে সামগ্রিক ABCD ম্যাট্রিক্স কীভাবে নির্ণয় করা হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'By adding the matrices: [T_1] + [T_2]', hi: 'मैट्रिक्स जोड़कर: [T_1] + [T_2]', bn: 'ম্যাট্রিক্স যোগ করে: [T_1] + [T_2]' } },
        { id: 'opt-2', text: { en: 'By matrix multiplication: [T_1] · [T_2]', hi: 'मैट्रिक्स गुणन द्वारा: [T_1] · [T_2]', bn: 'ম্যাট্রিক্স গুণ করে: [T_1] · [T_2]' } },
        { id: 'opt-3', text: { en: 'By inverting the sum of matrices', hi: 'योग के व्युत्क्रम द्वारा', bn: 'যোগফলের বিপরীত নিয়ে' } },
        { id: 'opt-4', text: { en: 'By multiplying corresponding individual elements', hi: 'व्यक्तिगत तत्वों को गुणा करके', bn: 'অনুরূপ উপাদানগুলো গুণ করে' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'Because output variables of network 1 become input variables of network 2, the chain rule yields matrix multiplication: [T_overall] = [T_1] · [T_2].',
        hi: 'कैस्केड संयोजन में आउटपुट चर अगले नेटवर्क के इनपुट बन जाते हैं, जिससे मैट्रिक्स गुणन [T_1] × [T_2] प्राप्त होता है।',
        bn: 'ক্যাসকেড সংযোগে ১ম নেটওয়ার্কের আউটপুট ২য় নেটওয়ার্কের ইনপুট হওয়ায় ম্যাট্রিক্স গুণন [T_1] · [T_2] প্রযোজ্য হয়।'
      }
    },
    {
      id: 'mcq-ch12-l07-06',
      question: {
        en: 'In a symmetrical T-network with series arms Z_1 = Z_2 = 5 Ω and shunt arm Z_3 = 20 Ω, what is the value of parameter z_11?',
        hi: 'श्रेणी भुजाओं Z_1 = Z_2 = 5 Ω और शंट भुजा Z_3 = 20 Ω वाले सममित T-नेटवर्क में z_11 का मान क्या है?',
        bn: 'শ্রেণি বাহু Z_1 = Z_2 = ৫ Ω এবং শান্ট বাহু Z_3 = ২০ Ω বিশিষ্ট প্রতিসম টি-নেটওয়ার্কে z_11 এর মান কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '5 Ω', hi: '5 Ω', bn: '৫ Ω' } },
        { id: 'opt-2', text: { en: '20 Ω', hi: '20 Ω', bn: '২০ Ω' } },
        { id: 'opt-3', text: { en: '25 Ω', hi: '25 Ω', bn: '২৫ Ω' } },
        { id: 'opt-4', text: { en: '4 Ω', hi: '4 Ω', bn: '৪ Ω' } }
      ],
      correctOptionId: 'opt-3',
      explanation: {
        en: 'For a T-network, open-circuit input impedance z_11 = Z_1 + Z_3 = 5 + 20 = 25 Ω.',
        hi: 'T-नेटवर्क के लिए z_11 = Z_1 + Z_3 = 5 + 20 = 25 Ω।',
        bn: 'টি-নেটওয়ার্কের ক্ষেত্রে z_11 = Z_1 + Z_3 = ৫ + ২০ = ২৫ Ω।'
      }
    },
    {
      id: 'mcq-ch12-l07-07',
      question: {
        en: 'For an ideal transformer with turns ratio a = N_1 / N_2, what are its transmission parameters [ABCD]?',
        hi: 'फेरा अनुपात a = N_1 / N_2 वाले आदर्श ट्रांसफार्मर के संचरण प्राचल [ABCD] क्या होते हैं?',
        bn: 'ঘূর্ণন অনুপাত a = N_1 / N_2 বিশিষ্ট একটি আদর্শ ট্রান্সফরমারের ABCD প্যারামিটার কী?'
      },
      options: [
        { id: 'opt-1', text: { en: 'A = a, B = 0, C = 0, D = 1/a', hi: 'A = a, B = 0, C = 0, D = 1/a', bn: 'A = a, B = 0, C = 0, D = 1/a' } },
        { id: 'opt-2', text: { en: 'A = 1, B = 0, C = 0, D = 1', hi: 'A = 1, B = 0, C = 0, D = 1', bn: 'A = 1, B = 0, C = 0, D = 1' } },
        { id: 'opt-3', text: { en: 'A = 0, B = a, C = 1/a, D = 0', hi: 'A = 0, B = a, C = 1/a, D = 0', bn: 'A = 0, B = a, C = 1/a, D = 0' } },
        { id: 'opt-4', text: { en: 'A = a^2, B = 0, C = 0, D = 1/a^2', hi: 'A = a^2, B = 0, C = 0, D = 1/a^2', bn: 'A = a^2, B = 0, C = 0, D = 1/a^2' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'For an ideal transformer: V_1 = a V_2 and I_1 = (1/a) (-I_2). Comparing to V_1 = A V_2 - B I_2 and I_1 = C V_2 - D I_2 gives A = a, B = 0, C = 0, D = 1/a. Notice det[T] = A D - B C = a(1/a) - 0 = 1.',
        hi: 'V_1 = a V_2 और I_1 = (1/a)(-I_2) से A = a, B = 0, C = 0, D = 1/a प्राप्त होता है। सारणिक a(1/a) = 1 होता है।',
        bn: 'V_1 = a V_2 এবং I_1 = (১/a)(-I_2) সমীকরণ তুলনা করে পাওয়া যায় A = a, B = 0, C = 0, D = 1/a। এর নির্ণায়ক a(1/a) = ১।'
      }
    },
    {
      id: 'mcq-ch12-l07-08',
      question: {
        en: 'Which two-port parameter set is most natural and convenient for analyzing the SERIES connection of two two-port networks?',
        hi: 'दो टू-पोर्ट नेटवर्कों के श्रेणी (Series) संयोजन का विश्लेषण करने के लिए कौन सा प्राचल सेट सबसे उपयुक्त है?',
        bn: 'দুটি টু-পোর্ট নেটওয়ার্কের শ্রেণি সংযোগ বিশ্লেষণের জন্য সবচেয়ে সুবিধাজনক প্যারামিটার কোনটি?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Y-parameters', hi: 'Y-प्राचल', bn: 'Y-প্যারামিটার' } },
        { id: 'opt-2', text: { en: 'Z-parameters (Impedance)', hi: 'Z-प्राचल (प्रतिबाधा)', bn: 'Z-প্যারামিটার (ইম্পিড্যান্স)' } },
        { id: 'opt-3', text: { en: 'ABCD-parameters', hi: 'ABCD-प्राचल', bn: 'ABCD-প্যারামিটার' } },
        { id: 'opt-4', text: { en: 'h-parameters', hi: 'h-प्राचल', bn: 'h-প্যারামিটার' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'In a series-series connection, the port currents are identical and terminal voltages add directly. Therefore, the overall impedance matrix is simply the sum of the individual Z matrices: [Z_total] = [Z_1] + [Z_2].',
        hi: 'श्रेणी-श्रेणी संयोजन में धाराएँ समान होती हैं और वोल्टेज सीधे जुड़ते हैं, इसलिए [Z_कुल] = [Z_1] + [Z_2] होता है।',
        bn: 'শ্রেণি-শ্রেণি সংযোগে কারেন্ট একই থাকে এবং ভোল্টেজ সরাসরি যোগ হয়, ফলে [Z_মোট] = [Z_1] + [Z_2] প্রযোজ্য হয়।'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-ch12-l07-01',
      title: {
        en: 'Two-Port Network Parameter Representations and Configurations',
        hi: 'परिपथ योजनाबद्ध आरेख',
        bn: 'বর্তনী স্কিম্যাটিক চিত্র'
      },
      caption: {
        en: 'Two-Port Network Parameter Representations and Configurations',
        hi: 'टू-पोर्ट नेटवर्क प्राचल निरूपण एवं विन्यास',
        bn: 'টু-পোর্ট নেটওয়ার্ক প্যারামিটার ও বর্তনী বিন্যাস'
      },
      svgType: 'circuit-ch12-two-port-network-parameters'
    }
  ]
};
