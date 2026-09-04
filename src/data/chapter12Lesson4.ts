import { Lesson } from '../types';

export const LESSON_LINEAR_TRANSFORMERS_REFLECTED: Lesson = {
  id: 'lsn-ch12-reflected-impedance-t-models',
  topicId: 'tp-rl-circuit',
  chapterId: 'ch-ac-circuits',
  order: 4,
  title: {
    en: 'Linear Transformers, Reflected Impedance & Equivalent T/Π Models',
    hi: 'रैखिक ट्रांसफार्मर, परावर्तित प्रतिबाधा एवं तुल्य T/Π मॉडल',
    bn: 'রৈখিক ট্রান্সফরমার, প্রতিফলিত প্রতিবাধা ও সমতুল্য T/Π মডেল'
  },
  description: {
    en: 'Analyze air-core and linear loosely coupled transformers in the phasor domain. Master total input impedance Zin = Z11 + Zref, the reflected impedance formula Zref = (ωM)² / Z22, impedance inversion phenomena, and synthesis of conductively coupled equivalent T and Π networks.',
    hi: 'फेजर डोमेन में एयर-कोर एवं रैखिक शिथिल युग्मित ट्रांसफार्मरों का विश्लेषण करें। कुल इनपुट प्रतिबाधा Zin = Z11 + Zref, परावर्तित प्रतिबाधा सूत्र Zref = (ωM)² / Z22, प्रतिबाधा व्युत्क्रमण परिघटना, और चालक रूप से युग्मित तुल्य T एवं Π नेटवर्कों के निर्माण में महारत हासिल करें।',
    bn: 'ফেজর ডোমেনে এয়ার-কোর ও রৈখিক ট্রান্সফরমার বিশ্লেষণ করুন। মোট ইনপুট প্রতিবাধা Zin = Z11 + Zref, প্রতিফলিত প্রতিবাধা সূত্র Zref = (ωM)² / Z22, প্রতিবাধা উল্টানোর বৈশিষ্ট্য এবং সমতুল্য T ও Π নেটওয়ার্ক গঠন আয়ত্ত করুন।'
  },
  estimatedMinutes: 40,
  easyExplanation: {
    en: 'In an ordinary ideal iron-core transformer, voltage and current transform by a simple turns ratio (N1/N2). But in radio-frequency and air-core transformers, coupling is imperfect (k < 1) and there is no ferromagnetic core. Here, whatever electrical load is connected to the secondary winding "reflects" back into the primary circuit through mutual inductance! This is called Reflected Impedance: Z_ref = (ωM)² / Z₂₂. Remarkably, because Z₂₂ is in the denominator, the reactive sign INVERTS: a capacitive load in the secondary acts like an INDUCTOR in the primary, and an inductive load in the secondary acts like a CAPACITOR in the primary!',
    hi: 'एक साधारण आदर्श ट्रांसफार्मर में वोल्टेज और धारा फेरों के अनुपात (N1/N2) से बदलते हैं। लेकिन एयर-कोर और आरएफ ट्रांसफार्मरों में चुंबकीय युग्मन अपूर्ण होता है (k < 1)। यहाँ द्वितीयक परिपथ में लगा कोई भी लोड अन्योन्य प्रेरकत्व के माध्यम से प्राथमिक परिपथ में "परावर्तित" होता है: Z_ref = (ωM)² / Z₂₂। आश्चर्यजनक रूप से, क्योंकि Z₂₂ हर (denominator) में है, प्रतिघात का चिह्न उल्टा हो जाता है: द्वितीयक का संधारित्र प्राथमिक में प्रेरक की तरह व्यवहार करता है, और द्वितीयक का प्रेरक प्राथमिक में संधारित्र की तरह दिखता है!',
    bn: 'আদর্শ আয়রন-কোর ট্রান্সফরমারে ভোল্টেজ ও কারেন্ট ঘূর্ণন অনুপাত (N1/N2) দিয়ে পরিবর্তিত হয়। কিন্তু এয়ার-কোর বা আরএফ ট্রান্সফরমারে চৌম্বকীয় যুগ্মন আংশিক (k < ১) থাকে। এখানে দ্বিতীয়ক বর্তনীর লোডটি পারস্পরিক আবেশের মাধ্যমে প্রাথমিকে প্রতিফলিত হয়: Z_ref = (ωM)² / Z₂₂। মজার বিষয় হলো, Z₂₂ হরে থাকায় চিহ্নের বিপরীত রূপান্তর ঘটে: দ্বিতীয়কের ধারকীয় লোড প্রাথমিকে আবেশকের মতো এবং আবেশীয় লোড প্রাথমিকে ধারকের মতো আচরণ করে!'
  },
  detailedExplanation: {
    en: '1. Governing Loop Equations of a Linear Transformer:\nConsider a primary winding (resistance R_1, inductance L_1) driven by source V_s, coupled via mutual inductance M to a secondary winding (R_2, L_2) terminated with load impedance Z_L = R_L + jX_L.\nLoop 1 (Primary): (R_1 + jωL_1) I_1 - jωM I_2 = V_s  ⇒  Z_11 I_1 - jωM I_2 = V_s\nLoop 2 (Secondary): -jωM I_1 + (R_2 + jωL_2 + Z_L) I_2 = 0  ⇒  -jωM I_1 + Z_22 I_2 = 0\nwhere Z_11 = R_1 + jωL_1 is the total self-impedance of loop 1, and Z_22 = (R_2 + R_L) + j(ωL_2 + X_L) is the total impedance of loop 2.\n\n2. Reflected Impedance and Input Impedance:\nSolving the secondary loop equation for I_2 gives:\nI_2 = (jωM / Z_22) I_1.\nSubstituting I_2 into Loop 1 yields:\n[Z_11 - jωM (jωM / Z_22)] I_1 = V_s  ⇒  [Z_11 - (j^2 ω^2 M^2 / Z_22)] I_1 = V_s  ⇒  [Z_11 + (ωM)^2 / Z_22] I_1 = V_s.\nTherefore, the input impedance looking into the primary terminals is:\nZ_in = V_s / I_1 = Z_11 + Z_ref,\nwhere the Reflected Impedance is defined as:\nZ_ref = (ωM)^2 / Z_22 = (ωM)^2 / (R_22 + jX_22).\nMultiplying numerator and denominator by the complex conjugate Z_22*:\nZ_ref = [(ωM)^2 (R_22 - jX_22)] / (R_22^2 + X_22^2) = R_ref + jX_ref.\nNotice that:\nR_ref = (ωM)^2 R_22 / |Z_22|^2  (always POSITIVE: load resistance adds resistive dissipation to the primary).\nX_ref = -(ωM)^2 X_22 / |Z_22|^2  (INVERTED SIGN: secondary inductance causes negative/capacitive reflected reactance; secondary capacitance causes positive/inductive reflected reactance).\n\n3. Equivalent Conductively Coupled T-Network (T-Model):\nAny linear coupled two-winding transformer sharing a common reference ground can be replaced by a purely conductive 3-branch T-network without mutual terms:\n- Branch A (Primary series): Z_A = (R_1 + jωL_1) - jωM = R_1 + jω(L_1 - M)\n- Branch B (Secondary series): Z_B = (R_2 + jωL_2) - jωM = R_2 + jω(L_2 - M)\n- Branch C (Shunt branch): Z_C = jωM.\nThis elimination of magnetic terms allows solution using standard nodal or mesh analysis in standard SPICE simulators.',
    hi: '1. रैखिक ट्रांसफार्मर के लूप समीकरण:\nप्राथमिक लूप: Z_11 I_1 - jωM I_2 = V_s\nद्वितीयक लूप: -jωM I_1 + Z_22 I_2 = 0\nजहाँ Z_11 = R_1 + jωL_1 और Z_22 = (R_2 + R_L) + j(ωL_2 + X_L)।\n2. परावर्तित प्रतिबाधा (Reflected Impedance):\nZ_in = Z_11 + Z_ref, जहाँ Z_ref = (ωM)^2 / Z_22 = [(ωM)^2 (R_22 - jX_22)] / |Z_22|^2।\nध्यान दें कि R_ref सदैव धनात्मक होता है, जबकि X_ref का चिह्न उल्टा हो जाता है (-X_22)।\n3. तुल्य चालक T-नेटवर्क (T-Model):\nचुंबकीय युग्मन को हटाकर समतुल्य 3-शाखा T-परिपथ बनाया जा सकता है:\n- Z_A = R_1 + jω(L_1 - M)\n- Z_B = R_2 + jω(L_2 - M)\n- Z_C = jωM।',
    bn: '১. রৈখিক ট্রান্সফরমারের লুপ সমীকরণ:\nপ্রাথমিক লুপ: Z_11 I_1 - jωM I_2 = V_s\nগৌণ লুপ: -jωM I_1 + Z_22 I_2 = 0\nযেখানে Z_11 = R_1 + jωL_1 এবং Z_22 = (R_2 + R_L) + j(ωL_2 + X_L)।\n২. প্রতিফলিত প্রতিবাধা: Z_in = Z_11 + Z_ref, যেখানে Z_ref = (ωM)^2 / Z_22 = [(ωM)^2 (R_22 - jX_22)] / |Z_22|^2।\nবাস্তব অংশ R_ref সর্বদা ধনাত্মক এবং কাল্পনিক অংশ X_ref এর চিহ্ন বিপরীত (-X_22) হয়।\n৩. সমতুল্য টি-নেটওয়ার্ক (T-Model):\n- Z_A = R_1 + jω(L_1 - M)\n- Z_B = R_2 + jω(L_2 - M)\n- Z_C = jωM।'
  },
  formulas: [
    {
      id: 'f-reflected-impedance',
      symbol: 'Z_{ref}',
      expression: 'Z_{ref} = \\frac{(\\omega M)^2}{Z_{22}} = \\frac{(\\omega M)^2}{R_{22} + jX_{22}} = \\frac{(\\omega M)^2 (R_{22} - jX_{22})}{R_{22}^2 + X_{22}^2}',
      title: {
        en: 'Reflected Impedance of Coupled Secondary',
        hi: 'युग्मित द्वितीयक की परावर्तित प्रतिबाधा',
        bn: 'সংযুক্ত গৌণ কুণ্ডলীর প্রতিফলিত প্রতিবাধা'
      },
      description: {
        en: 'The impedance reflected from the secondary loop back into the primary circuit via magnetic coupling.',
        hi: 'चुंबकीय युग्मन के माध्यम से द्वितीयक लूप से प्राथमिक परिपथ में परावर्तित प्रतिबाधा।',
        bn: 'চৌম্বকীয় যুগ্মনের মাধ্যমে গৌণ লুপ থেকে প্রাথমিকে প্রতিফলিত প্রতিবাধা।'
      },
      variables: [
        { symbol: 'Z_{ref}', name: { en: 'Reflected complex impedance (Ω)', hi: 'परावर्तित सम्मिश्र प्रतिबाधा (Ω)', bn: 'প্রতিফলিত জটিল প্রতিবাধা (Ω)' } },
        { symbol: '\\omega M', name: { en: 'Mutual reactance (Ω)', hi: 'अन्योन्य प्रतिघात (Ω)', bn: 'পারস্পরিক রিঅ্যাক্ট্যান্স (Ω)' } },
        { symbol: 'Z_{22}', name: { en: 'Total series secondary loop impedance (Ω)', hi: 'कुल द्वितीयक लूप प्रतिबाधा (Ω)', bn: 'মোট গৌণ লুপ প্রতিবাধা (Ω)' } }
      ]
    },
    {
      id: 'f-input-impedance-coupled',
      symbol: 'Z_{in}',
      expression: 'Z_{in} = Z_{11} + Z_{ref} = (R_1 + j\\omega L_1) + \\frac{(\\omega M)^2}{Z_{22}}',
      title: {
        en: 'Total Input Impedance of Linear Transformer',
        hi: 'रैखिक ट्रांसफार्मर की कुल इनपुट प्रतिबाधा',
        bn: 'রৈখিক ট্রান্সফরমারের মোট ইনপুট প্রতিবাধা'
      },
      description: {
        en: 'Total driving-point impedance seen by the primary AC source.',
        hi: 'प्राथमिक एसी स्रोत द्वारा देखी गई कुल ड्राइविंग-पॉइंट प्रतिबाधा।',
        bn: 'প্রাথমিক এসি উৎস দ্বারা অনুভূত মোট ইনপুট প্রতিবাধা।'
      },
      variables: [
        { symbol: 'Z_{in}', name: { en: 'Input impedance (Ω)', hi: 'इनपुट प्रतिबाधा (Ω)', bn: 'ইনপুট প্রতিবাধা (Ω)' } },
        { symbol: 'Z_{11}', name: { en: 'Primary self-impedance (Ω)', hi: 'प्राथमिक स्व-प्रतिबाधा (Ω)', bn: 'প্রাথমিক স্বকীয় প্রতিবাধা (Ω)' } }
      ]
    },
    {
      id: 'f-t-network-branches',
      symbol: 'Z_A, Z_B, Z_C',
      expression: 'Z_A = Z_1 - j\\omega M, \\quad Z_B = Z_2 - j\\omega M, \\quad Z_C = j\\omega M',
      title: {
        en: 'Equivalent Conductive T-Network Branches',
        hi: 'तुल्य चालक T-नेटवर्क शाखाएँ',
        bn: 'সমতুল্য পরিবাহী টি-নেটওয়ার্ক শাখা'
      },
      description: {
        en: 'Replaces magnetic coupling with direct conductive connections without mutual terms.',
        hi: 'चुंबकीय युग्मन को सीधे चालक संपर्कों से बदलता है।',
        bn: 'চৌম্বকীয় যুগ্মন অপসারণ করে সরাসরি পরিবাহী সংযোগ দ্বারা সমতুল্য বর্তনী গঠন করে।'
      },
      variables: [
        { symbol: 'Z_A, Z_B', name: { en: 'Series primary and secondary branches (Ω)', hi: 'श्रेणी प्राथमिक एवं द्वितीयक शाखाएँ (Ω)', bn: 'শ্রেণি প্রাথমিক ও গৌণ শাখা (Ω)' } },
        { symbol: 'Z_C', name: { en: 'Shunt mutual branch (Ω)', hi: 'शंट अन्योन्य शाखा (Ω)', bn: 'শান্ট পারস্পরিক শাখা (Ω)' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-ch12-l04-inversion-phenomenon',
      title: {
        en: 'The Reactive Inversion Property of Reflected Impedance',
        hi: 'परावर्तित प्रतिबाधा का प्रतिघात व्युत्क्रमण गुण',
        bn: 'প্রতিফলিত প্রতিবাধার রিঅ্যাক্ট্যান্স উল্টানোর ধর্ম'
      },
      content: {
        en: 'A cornerstone of coupled circuit theory is the sign inversion of reflected reactance:\nZ_ref = R_ref + jX_ref = (ωM)^2 · (R_22 - jX_22) / (R_22^2 + X_22^2).\n\nConsequences:\n1. Secondary Resistance (R_22 > 0): Always reflects into the primary as POSITIVE resistance: R_ref = (ωM)^2 R_22 / |Z_22|^2 > 0. Power absorbed by the secondary load extracts real energy from the primary source.\n2. Secondary Inductive Reactance (X_22 > 0, e.g. secondary coil inductance + inductive load): Since X_ref = -(ωM)^2 X_22 / |Z_22|^2, this reflects as NEGATIVE (capacitive) reactance! It reduces the primary loop\'s inductive reactance.\n3. Secondary Capacitive Reactance (X_22 < 0): Reflects as POSITIVE (inductive) reactance!\n4. Secondary Series Resonance (X_22 = 0): If the secondary circuit is tuned to series resonance (ωL_2 = 1/(ωC_L)), X_22 = 0. Then Z_ref is purely resistive: Z_ref = (ωM)^2 / R_22. This maximizes reflected load resistance into the primary.',
        hi: 'परावर्तित प्रतिबाधा में प्रतिघात के चिह्न का व्युत्क्रमण एक महत्वपूर्ण सिद्धांत है:\n1. द्वितीयक प्रतिरोध हमेशा प्राथमिक में धनात्मक प्रतिरोध के रूप में परावर्तित होता है (R_ref > 0)।\n2. द्वितीयक प्रेरक प्रतिघात (X_22 > 0) प्राथमिक में संधारित्र (-j) की तरह परावर्तित होता है, जिससे प्राथमिक का कुल प्रतिघात घटता है।\n3. द्वितीयक संधारित्र प्रतिघात (X_22 < 0) प्राथमिक में प्रेरक (+j) की तरह परावर्तित होता है।\n4. द्वितीयक अनुनाद (X_22 = 0) पर परावर्तित प्रतिबाधा विशुद्ध रूप से प्रतिरोधी हो जाती है: Z_ref = (ωM)^2 / R_22।',
        bn: 'প্রতিফলিত প্রতিবাধায় চিহ্নের উল্টো প্রতিফলন একটি অনন্য বৈশিষ্ট্য:\n১. গৌণ বর্তনীর রোধ প্রাথমিকে সর্বদা ধনাত্মক রোধ হিসেবে প্রতিফলিত হয় (R_ref > ০)।\n২. গৌণ বর্তনীর আবেশীয় রিঅ্যাক্ট্যান্স (X_22 > ০) প্রাথমিকে ধারকের মতো (-j) আচরণ করে।\n৩. গৌণ বর্তনীর ধারকীয় রিঅ্যাক্ট্যান্স (X_22 < ০) প্রাথমিকে আবেশকের মতো (+j) প্রতিফলিত হয়।\n৪. গৌণ অনুরণনে (X_22 = ০) প্রতিফলিত প্রতিবাধা পুরোপুরি রোধীয় হয়: Z_ref = (ωM)^2 / R_22।'
      }
    },
    {
      id: 'sec-ch12-l04-t-network-synthesis',
      title: {
        en: 'Synthesizing the Conductively Coupled T-Equivalent',
        hi: 'चालक रूप से युग्मित तुल्य T-नेटवर्क का संश्लेषण',
        bn: 'পরিবাহী সমতুল্য টি-নেটওয়ার্ক সংশ্লেষণ'
      },
      content: {
        en: 'When simulating coupled circuits in circuit solvers like SPICE, or analyzing networks with common grounds, replacing mutually coupled coils with an equivalent conductively connected T-network is exceptionally useful.\n\nDerivation:\nFor a standard coupled pair with dots at the top:\nV_1 = jωL_1 I_1 + jωM I_2 = (jωL_1 - jωM) I_1 + jωM (I_1 + I_2)\nV_2 = jωM I_1 + jωL_2 I_2 = jωM (I_1 + I_2) + (jωL_2 - jωM) I_2\n\nComparing with a standard T-network with series arms Z_A, Z_B and shunt arm Z_C carrying current (I_1 + I_2):\nV_1 = Z_A I_1 + Z_C (I_1 + I_2)\nV_2 = Z_C (I_1 + I_2) + Z_B I_2\n\nEquating coefficients yields:\nZ_A = jω(L_1 - M)\nZ_B = jω(L_2 - M)\nZ_C = jωM\nNote: If L_1 < M or L_2 < M (or if dot polarities are reversed), one of the series inductors can be mathematically NEGATIVE. While an isolated negative inductor cannot exist as a physical component, the complete T-network remains physically valid and realizable as an integrated two-port system.',
        hi: 'चुंबकीय युग्मन को हटाकर T-नेटवर्क में बदलने के लिए:\nZ_A = jω(L_1 - M)\nZ_B = jω(L_2 - M)\nZ_C = jωM।\nयदि लपेटने की दिशा उल्टी हो, तो M का चिह्न बदलकर T-नेटवर्क की शाखाओं की पुनर्गणना की जाती है।',
        bn: 'চৌম্বকীয় যুগ্মনমুক্ত পরিবাহী টি-নেটওয়ার্কের বাহুগুলো:\nZ_A = jω(L_1 - M)\nZ_B = jω(L_2 - M)\nZ_C = jωM।\nডটের দিক উল্টো হলে M এর চিহ্ন ঋণাত্মক ধরে গণনা করতে হয়।'
      }
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch12-l04-01',
      problem: {
        en: 'A linear air-core transformer operates at ω = 400 rad/s. Primary winding has R_1 = 10 Ω and L_1 = 0.1 H. Secondary winding has R_2 = 20 Ω and L_2 = 0.25 H. Mutual inductance is M = 0.1 H. A capacitive load Z_L = 30 - j40 Ω is connected across the secondary. If a sinusoidal voltage V_s = 100∠0° V is applied to the primary, calculate: (a) total secondary loop impedance Z_22, (b) reflected impedance Z_ref, (c) total input impedance Z_in, and (d) primary current phasor I_1.',
        hi: 'एक रैखिक एयर-कोर ट्रांसफार्मर ω = 400 rad/s पर कार्य करता है। प्राथमिक: R_1 = 10 Ω, L_1 = 0.1 H। द्वितीयक: R_2 = 20 Ω, L_2 = 0.25 H। अन्योन्य प्रेरकत्व M = 0.1 H। द्वितीयक पर Z_L = 30 - j40 Ω का लोड जुड़ा है। प्राथमिक वोल्टेज V_s = 100∠0° V है। ज्ञात कीजिए: (a) Z_22, (b) Z_ref, (c) Z_in, एवं (d) प्राथमिक धारा I_1।',
        bn: 'একটি রৈখিক এয়ার-কোর ট্রান্সফরমার ω = ৪০০ rad/s এ ক্রিয়াশীল। প্রাথমিক: R_1 = ১০ Ω, L_1 = ০.১ H। গৌণ: R_2 = ২০ Ω, L_2 = ০.২৫ H। M = ০.১ H। গৌণে Z_L = ৩০ - j৪০ Ω লোড যুক্ত। V_s = ১০০∠০° V হলে নির্ণয় করুন: (ক) Z_22, (খ) Z_ref, (গ) Z_in এবং (ঘ) প্রাথমিক কারেন্ট I_1।'
      },
      formula: {
        en: 'X_L1 = ωL_1 = 40 Ω, X_L2 = ωL_2 = 100 Ω, X_M = ωM = 40 Ω.\nZ_11 = R_1 + jX_L1 = 10 + j40 Ω.\nZ_22 = (R_2 + R_L) + j(X_L2 + X_L) = (20 + 30) + j(100 - 40) = 50 + j60 Ω.\nZ_ref = (X_M)^2 / Z_22 = (40)^2 / (50 + j60).\nZ_in = Z_11 + Z_ref.\nI_1 = V_s / Z_in.',
        hi: 'X_L1 = 40 Ω, X_L2 = 100 Ω, X_M = 40 Ω।\nZ_11 = 10 + j40 Ω।\nZ_22 = 50 + j60 Ω।\nZ_ref = 1600 / (50 + j60)।\nZ_in = Z_11 + Z_ref।',
        bn: 'X_L1 = ৪০ Ω, X_L2 = ১০০ Ω, X_M = ৪০ Ω।\nZ_11 = ১০ + j৪০ Ω।\nZ_22 = ৫০ + j৬০ Ω।\nZ_ref = ১৬০০ / (৫০ + j৬০)।\nZ_in = Z_11 + Z_ref।'
      },
      substitution: {
        en: '(a) Z_22 = 50 + j60 Ω = 78.10∠50.19° Ω.\n(b) Z_ref = 1600 / (50 + j60) = 1600(50 - j60) / (2500 + 3600) = (80000 - j96000) / 6100 = 13.11 - j15.74 Ω.\n(c) Z_in = Z_11 + Z_ref = (10 + j40) + (13.11 - j15.74) = 23.11 + j24.26 Ω.\nIn polar form: |Z_in| = sqrt(23.11^2 + 24.26^2) = sqrt(534.07 + 588.55) = sqrt(1122.62) = 33.51 Ω.\nAngle θ = arctan(24.26 / 23.11) = 46.39°.\n(d) I_1 = 100∠0° / 33.51∠46.39° = 2.98∠-46.39° A.',
        hi: '(a) Z_22 = 50 + j60 Ω।\n(b) Z_ref = 13.11 - j15.74 Ω।\n(c) Z_in = 23.11 + j24.26 Ω = 33.51∠46.39° Ω।\n(d) I_1 = 100 / 33.51∠46.39° = 2.98∠-46.39° A।',
        bn: '(ক) Z_22 = ৫০ + j৬০ Ω।\n(খ) Z_ref = ১৩.১১ - j১৫.৭৪ Ω।\n(গ) Z_in = ২৩.১১ + j২৪.২৬ Ω = ৩৩.৫১∠৪৬.৩৯° Ω।\n(ঘ) I_1 = ১০০ / ৩৩.৫১∠৪৬.৩৯° = ২.৯৮∠-৪৬.৩৯° A।'
      },
      calculation: {
        en: 'Secondary net inductive reactance (+j60 Ω) reflected into primary as capacitive reactance (-j15.74 Ω), lowering net reactance from 40 Ω to 24.26 Ω.',
        hi: 'द्वितीयक प्रेरक प्रतिघात (+j60 Ω) प्राथमिक में संधारित्र (-j15.74 Ω) के रूप में परावर्तित हुआ, जिससे कुल प्रतिघात घट गया।',
        bn: 'গৌণ আবেশীয় রিঅ্যাক্ট্যান্স (+j৬০ Ω) প্রাথমিকে ধারকীয় রিঅ্যাক্ট্যান্স (-j১৫.৭৪ Ω) হিসেবে প্রতিফলিত হয়ে মোট প্রতিঘাত কমিয়ে দিয়েছে।'
      },
      finalAnswer: {
        en: 'Z_22 = 50 + j60 Ω; Z_ref = 13.11 - j15.74 Ω; Z_in = 23.11 + j24.26 Ω (33.51∠46.39° Ω); I_1 = 2.98∠-46.39° A',
        hi: 'Z_22 = 50 + j60 Ω; Z_ref = 13.11 - j15.74 Ω; Z_in = 23.11 + j24.26 Ω; I_1 = 2.98∠-46.39° A',
        bn: 'Z_22 = ৫০ + j৬০ Ω; Z_ref = ১৩.১১ - j১৫.৭৪ Ω; Z_in = ২৩.১১ + j২৪.২৬ Ω; I_1 = ২.৯৮∠-৪৬.৩৯° A'
      }
    },
    {
      id: 'ex-ch12-l04-02',
      problem: {
        en: 'Two magnetically coupled coils have self-inductances L_1 = 80 mH and L_2 = 120 mH with mutual inductance M = 50 mH (both dots at upper terminals). Determine the branch inductances L_A, L_B, and L_C of the equivalent conductively coupled T-network.',
        hi: 'दो युग्मित कुंडलियों के स्व-प्रेरकत्व L_1 = 80 mH और L_2 = 120 mH तथा अन्योन्य प्रेरकत्व M = 50 mH हैं। तुल्य चालक T-नेटवर्क की शाखा प्रेरकत्व L_A, L_B, एवं L_C ज्ञात कीजिए।',
        bn: 'দুটি সংযুক্ত কুণ্ডলীর স্বকীয় আবেশাঙ্ক L_1 = ৮০ mH ও L_2 = ১২০ mH এবং পারস্পরিক আবেশাঙ্ক M = ৫০ mH। সমতুল্য পরিবাহী টি-নেটওয়ার্কের শাখা আবেশাঙ্ক L_A, L_B ও L_C নির্ণয় করুন।'
      },
      formula: {
        en: 'L_A = L_1 - M, L_B = L_2 - M, L_C = M',
        hi: 'L_A = L_1 - M, L_B = L_2 - M, L_C = M',
        bn: 'L_A = L_1 - M, L_B = L_2 - M, L_C = M'
      },
      substitution: {
        en: 'L_A = 80 - 50 = 30 mH.\nL_B = 120 - 50 = 70 mH.\nL_C = 50 mH.',
        hi: 'L_A = 80 - 50 = 30 mH।\nL_B = 120 - 50 = 70 mH।\nL_C = 50 mH।',
        bn: 'L_A = ৮০ - ৫০ = ৩০ mH।\nL_B = ১২০ - ৫০ = ৭০ mH।\nL_C = ৫০ mH।'
      },
      calculation: {
        en: 'All inductances are strictly positive because M < min(L_1, L_2).',
        hi: 'सभी प्रेरकत्व धनात्मक हैं क्योंकि M < min(L_1, L_2)।',
        bn: 'সকল আবেশাঙ্ক ধনাত্মক কারণ M < min(L_1, L_2)।'
      },
      finalAnswer: {
        en: 'L_A = 30 mH, L_B = 70 mH, L_C = 50 mH',
        hi: 'L_A = 30 mH, L_B = 70 mH, L_C = 50 mH',
        bn: 'L_A = ৩০ mH, L_B = ৭০ mH, L_C = ৫০ mH'
      },
      }
  ],
  practicalApplications: {
    en: [
      'RF Intermediate-Frequency (IF) Transformers: Superheterodyne radio receivers employ double-tuned coupled IF transformers (455 kHz or 10.7 MHz) where secondary tuning capacitors reflect purely resistive load at resonance, providing steep bandpass selectivity.',
      'Inductive Power Transfer (IPT) for Electric Vehicles: Roadway wireless EV charging systems model the large physical air gap (15–20 cm) as a loosely coupled transformer (k ≈ 0.2). Reflected impedance calculations dictate the primary series-parallel resonant compensation network topology.'
    ],
    hi: [
      'आरएफ इंटरमीडिएट-फ्रीक्वेंसी (IF) ट्रांसफार्मर: रेडियो रिसीवरों में डबल-ट्यून्ड IF ट्रांसफार्मर का उपयोग किया जाता है जहाँ द्वितीयक ट्यूनिंग संधारित्र अनुनाद पर विशुद्ध प्रतिरोधी लोड परावर्तित करते हैं, जिससे उत्कृष्ट बैंडपास चयनात्मकता मिलती है।',
      'इलेक्ट्रिक वाहनों के लिए प्रेरक शक्ति स्थानांतरण (IPT): ईवी वायरलेस चार्जिंग में बड़े वायु अंतराल (15–20 सेमी) को शिथिल रूप से युग्मित ट्रांसफार्मर के रूप में मॉडल किया जाता है, जहाँ परावर्तित प्रतिबाधा प्राथमिक अनुनादी नेटवर्क को डिजाइन करने में सहायता करती है।'
    ],
    bn: [
      'আরএফ ইন্টারমিডিয়েট-ফ্রিকোয়েন্সি (IF) ট্রান্সফরমার: রেডিও রিসিভারে ডাবল-টিউনড IF ট্রান্সফরমার ব্যবহার করা হয় যেখানে গৌণ টিউনিং ক্যাপাসিটর অনুরণনে বিশুদ্ধ রোধীয় লোড প্রতিফলিত করে তীক্ষ্ণ ব্যান্ডপাস ফিল্টারিং প্রদান করে।',
      'বৈদ্যুতিক গাড়ির জন্য আবেশীয় ক্ষমতা স্থানান্তর (IPT): ইভি ওয়্যারলেস চার্জিংয়ে বড় এয়ার গ্যাপকে শিথিলভাবে সংযুক্ত ট্রান্সফরমার হিসেবে বিবেচনা করে প্রতিফলিত প্রতিবাধার সাহায্যে রেজোন্যান্ট নেটওয়ার্ক ডিজাইন করা হয়।'
    ]
  },
  importantPoints: {
    en: [
      'The real part of reflected impedance R_ref is ALWAYS positive for any passive secondary load, which means the secondary load always dissipates energy drawn from the primary source.',
      'The imaginary part of reflected impedance INVERTS sign: inductive secondary reactance reflects as capacitive, while capacitive secondary reactance reflects as inductive.'
    ],
    hi: [
      'किसी भी निष्क्रिय द्वितीयक लोड के लिए परावर्तित प्रतिबाधा का वास्तविक भाग R_ref हमेशा धनात्मक होता है, जिसका अर्थ है कि द्वितीयक लोड हमेशा प्राथमिक स्रोत से ऊर्जा खींचता है।',
      'परावर्तित प्रतिबाधा का काल्पनिक भाग चिह्न उलट देता है: द्वितीयक का प्रेरक प्रतिघात संधारित्र की तरह, और संधारित्र प्रतिघात प्रेरक की तरह परावर्तित होता है।'
    ],
    bn: [
      'প্যাসিভ গৌণ লোডের জন্য প্রতিফলিত প্রতিবাধার বাস্তব অংশ R_ref সর্বদা ধনাত্মক হয়, যা নির্দেশ করে লোডটি প্রাথমিক উৎস থেকে শক্তি গ্রহণ করছে।',
      'প্রতিফলিত প্রতিবাধার কাল্পনিক অংশ চিহ্ন উল্টে দেয়: গৌণ আবেশীয় প্রতিঘাত ধারকের মতো এবং ধারকীয় প্রতিঘাত আবেশকের মতো প্রতিফলিত হয়।'
    ]
  },
  commonMistakes: {
    en: [
      'Mistake: Forgetting that secondary coil resistance R_2 and self-inductance L_2 are part of Z_22 alongside the external load Z_L. Correction: Always compute Z_22 as the TOTAL loop impedance: Z_22 = (R_2 + R_L) + j(ωL_2 + X_L).'
    ],
    hi: [
      'त्रुटि: यह भूल जाना कि द्वितीयक कुंडली का प्रतिरोध R_2 और स्व-प्रेरकत्व L_2 भी बाहरी लोड Z_L के साथ Z_22 का हिस्सा हैं। सुधार: हमेशा Z_22 को कुल लूप प्रतिबाधा के रूप में जोड़ें: Z_22 = (R_2 + R_L) + j(ωL_2 + X_L)।'
    ],
    bn: [
      'ভুল: ভুলে যাওয়া যে বহিরাগত লোড Z_L এর পাশাপাশি গৌণ কুণ্ডলীর নিজস্ব রোধ R_2 ও আবেশাঙ্ক L_2 ও Z_22 এর অন্তর্ভুক্ত। সংশোধন: সর্বদা Z_22 কে সম্পূর্ণ লুপ প্রতিবাধা হিসেবে হিসাব করুন: Z_22 = (R_2 + R_L) + j(ωL_2 + X_L)।'
    ]
  },
  keyTakeaways: {
    en: [
      'The input impedance of a linear transformer is Z_in = Z_11 + (ωM)^2 / Z_22. Mutual coupling allows secondary loads to be represented directly inside the primary loop.'
    ],
    hi: [
      'रैखिक ट्रांसफार्मर की इनपुट प्रतिबाधा Z_in = Z_11 + (ωM)^2 / Z_22 होती है। अन्योन्य युग्मन द्वितीयक लोड को सीधे प्राथमिक लूप में दर्शाने की अनुमति देता है।'
    ],
    bn: [
      'রৈখিক ট্রান্সফরমারের ইনপুট প্রতিবাধা Z_in = Z_11 + (ωM)^2 / Z_22। পারস্পরিক যুগ্মনের ফলে গৌণ লোডকে সরাসরি প্রাথমিক লুপের অংশ হিসেবে বিবেচনা করা যায়।'
    ]
  },
  practiceQuestions: [
    {
      id: 'pq-ch12-l04-01',
      question: {
        en: 'What happens to the reflected impedance Z_ref if the secondary circuit is open-circuited (Z_L = ∞)?',
        hi: 'यदि द्वितीयक परिपथ खुला (Z_L = ∞) हो, तो परावर्तित प्रतिबाधा Z_ref का क्या होता है?',
        bn: 'গৌণ বর্তনী উন্মুক্ত (Z_L = ∞) থাকলে প্রতিফলিত প্রতিবাধা Z_ref এর কী ঘটবে?'
      },
      hint: {
        en: 'When Z_22 → ∞, (ωM)^2 / Z_22 → 0. No impedance is reflected, and Z_in = Z_11.',
        hi: 'जब Z_22 → ∞, तो Z_ref → 0। कोई प्रतिबाधा परावर्तित नहीं होती।',
        bn: 'যখন Z_22 → ∞, তখন Z_ref → ০। কোনো প্রতিবাধা প্রতিফলিত হয় না।'
      }
    },
    {
      id: 'pq-ch12-l04-02',
      question: {
        en: 'If a secondary circuit is tuned to series resonance such that its net reactance is zero (X_22 = 0) and total loop resistance is R_22 = 4 Ω, calculate Z_ref if ωM = 20 Ω.',
        hi: 'यदि द्वितीयक परिपथ श्रेणी अनुनाद पर ट्यून है (X_22 = 0) और R_22 = 4 Ω है, तो ωM = 20 Ω होने पर Z_ref की गणना कीजिए।',
        bn: 'গৌণ বর্তনী শ্রেণি অনুরণনে থাকলে (X_22 = ০) এবং মোট রোধ R_22 = ৪ Ω হলে, ωM = ২০ Ω এর জন্য Z_ref কত হবে?'
      },
      hint: {
        en: 'Z_ref = (ωM)^2 / R_22 = 20^2 / 4 = 400 / 4 = 100 Ω (purely resistive).',
        hi: 'Z_ref = (20)^2 / 4 = 100 Ω (विशुद्ध प्रतिरोधी)।',
        bn: 'Z_ref = (২০)^২ / ৪ = ১০০ Ω (বিশুদ্ধ রোধীয়)।'
      }
    }
  ],
  mcqs: [
    {
      id: 'mcq-ch12-l04-01',
      question: {
        en: 'What is the general expression for the reflected impedance Z_ref in a linear coupled transformer?',
        hi: 'रैखिक युग्मित ट्रांसफार्मर में परावर्तित प्रतिबाधा Z_ref का सामान्य व्यंजक क्या है?',
        bn: 'রৈখিক সংযুক্ত ট্রান্সফরমারে প্রতিফলিত প্রতিবাধা Z_ref এর সাধারণ সমীকরণ কী?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Z_ref = Z_22 / (ωM)^2', hi: 'Z_ref = Z_22 / (ωM)^2', bn: 'Z_ref = Z_22 / (ωM)^2' } },
        { id: 'opt-2', text: { en: 'Z_ref = (ωM)^2 / Z_22', hi: 'Z_ref = (ωM)^2 / Z_22', bn: 'Z_ref = (ωM)^2 / Z_22' } },
        { id: 'opt-3', text: { en: 'Z_ref = ωM · Z_22', hi: 'Z_ref = ωM · Z_22', bn: 'Z_ref = ωM · Z_22' } },
        { id: 'opt-4', text: { en: 'Z_ref = (ωM) / Z_11', hi: 'Z_ref = (ωM) / Z_11', bn: 'Z_ref = (ωM) / Z_11' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'Derived from substituting secondary loop current into the primary KVL equation: Z_ref = (ωM)^2 / Z_22.',
        hi: 'प्राथमिक KVL समीकरण में द्वितीयक धारा प्रतिस्थापित करने से: Z_ref = (ωM)^2 / Z_22 प्राप्त होता है।',
        bn: 'প্রাথমিক KVL সমীকরণে গৌণ কারেন্ট প্রতিস্থাপন করে পাওয়া যায়: Z_ref = (ωM)^2 / Z_22।'
      }
    },
    {
      id: 'mcq-ch12-l04-02',
      question: {
        en: 'If the secondary loop of a linear transformer contains net INDUCTIVE reactance (X_22 > 0), how does it reflect into the primary winding?',
        hi: 'यदि रैखिक ट्रांसफार्मर के द्वितीयक लूप में कुल प्रेरक प्रतिघात (X_22 > 0) है, तो यह प्राथमिक वाइंडिंग में कैसे परावर्तित होता है?',
        bn: 'রৈখিক ট্রান্সফরমারের গৌণ লুপে মোট আবেশীয় রিঅ্যাক্ট্যান্স (X_22 > ০) থাকলে তা প্রাথমিকে কীভাবে প্রতিফলিত হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'As additional inductive reactance (+j)', hi: 'अतिरिक्त प्रेरक प्रतिघात (+j) के रूप में', bn: 'অতিরিক্ত আবেশীয় রিঅ্যাক্ট্যান্স (+j) হিসেবে' } },
        { id: 'opt-2', text: { en: 'As capacitive reactance (-j)', hi: 'संधारित्र प्रतिघात (-j) के रूप में', bn: 'ধারকীয় রিঅ্যাক্ট্যান্স (-j) হিসেবে' } },
        { id: 'opt-3', text: { en: 'As pure negative resistance', hi: 'शुद्ध ऋणात्मक प्रतिरोध के रूप में', bn: 'বিশুদ্ধ ঋণাত্মক রোধ হিসেবে' } },
        { id: 'opt-4', text: { en: 'It has zero effect on primary reactance', hi: 'प्राथमिक प्रतिघात पर इसका कोई प्रभाव नहीं पड़ता', bn: 'প্রাথমিক রিঅ্যাক্ট্যান্সে কোনো প্রভাব ফেলে না' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'Because Z_22 appears in the denominator, Z_ref = (ωM)^2 (R_22 - jX_22) / |Z_22|^2. Thus a positive X_22 creates a negative imaginary component (-jX_ref), which behaves as a capacitor.',
        hi: 'क्योंकि Z_22 हर में आता है, Z_ref में -jX_22 का पद होता है। अतः धनात्मक X_22 संधारित्र (-j) की तरह परावर्तित होता है।',
        bn: 'যেহেতু Z_22 হরে থাকে, তাই Z_ref এ -jX_22 পদ আসে। ফলে ধনাত্মক X_22 ধারকের মতো (-j) আচরণ করে।'
      }
    },
    {
      id: 'mcq-ch12-l04-03',
      question: {
        en: 'In the equivalent conductively coupled T-network for two magnetically coupled coils with upper dots, what is the value of the shunt branch Z_C?',
        hi: 'ऊपरी डॉट्स वाली दो कुंडलियों के तुल्य चालक T-नेटवर्क में शंट शाखा Z_C का मान क्या है?',
        bn: 'উপরের প্রান্তে ডটযুক্ত দুটি আবেশকের সমতুল্য পরিবাহী টি-নেটওয়ার্কে শান্ট শাখা Z_C এর মান কত?'
      },
      options: [
        { id: 'opt-1', text: { en: 'jω(L_1 + L_2)', hi: 'jω(L_1 + L_2)', bn: 'jω(L_1 + L_2)' } },
        { id: 'opt-2', text: { en: 'jωM', hi: 'jωM', bn: 'jωM' } },
        { id: 'opt-3', text: { en: 'jω(L_1 - M)', hi: 'jω(L_1 - M)', bn: 'jω(L_1 - M)' } },
        { id: 'opt-4', text: { en: '-j/(ωM)', hi: '-j/(ωM)', bn: '-j/(ωM)' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'In the standard T-equivalent model, the common shunt leg carries the sum of both loop currents and represents the mutual coupling impedance Z_C = jωM.',
        hi: 'मानक T-तुल्य मॉडल में, उभयनिष्ठ शंट शाखा दोनों धाराओं को वहन करती है और अन्योन्य प्रतिबाधा Z_C = jωM को दर्शाती है।',
        bn: 'আদর্শ টি-মডেলে সাধারণ শান্ট বাহুটি উভয় লুপ কারেন্ট বহন করে এবং পারস্পরিক প্রতিবাধা Z_C = jωM প্রকাশ করে।'
      }
    },
    {
      id: 'mcq-ch12-l04-04',
      question: {
        en: 'What happens to the total input impedance Z_in of a linear transformer if the secondary terminals are directly short-circuited (Z_L = 0)?',
        hi: 'यदि रैखिक ट्रांसफार्मर के द्वितीयक टर्मिनलों को सीधे शॉर्ट-सर्किट (Z_L = 0) कर दिया जाए, तो कुल इनपुट प्रतिबाधा Z_in का क्या होता है?',
        bn: 'রৈখিক ট্রান্সফরমারের গৌণ টার্মিনাল সরাসরি শর্ট-সার্কিট (Z_L = ০) করলে মোট ইনপুট প্রতিবাধা Z_in এর কী পরিবর্তন হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Z_in becomes zero', hi: 'Z_in शून्य हो जाती है', bn: 'Z_in শূন্য হয়ে যায়' } },
        { id: 'opt-2', text: { en: 'Z_in = Z_11 + (ωM)^2 / (R_2 + jωL_2)', hi: 'Z_in = Z_11 + (ωM)^2 / (R_2 + jωL_2)', bn: 'Z_in = Z_11 + (ωM)^2 / (R_2 + jωL_2)' } },
        { id: 'opt-3', text: { en: 'Z_in becomes infinite', hi: 'Z_in अनंत हो जाती है', bn: 'Z_in অসীম হয়ে যায়' } },
        { id: 'opt-4', text: { en: 'Z_in equals Z_11 only', hi: 'Z_in केवल Z_11 के बराबर होती है', bn: 'Z_in কেবল Z_11 এর সমান হয়' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'With Z_L = 0, the secondary loop impedance is solely the secondary winding impedance Z_22 = R_2 + jωL_2. Thus Z_in = Z_11 + (ωM)^2 / (R_2 + jωL_2).',
        hi: 'Z_L = 0 होने पर Z_22 केवल द्वितीयक वाइंडिंग की प्रतिबाधा (R_2 + jωL_2) होती है, इसलिए Z_in = Z_11 + (ωM)^2 / (R_2 + jωL_2)।',
        bn: 'Z_L = ০ হলে গৌণ লুপ প্রতিবাধা কেবল কুণ্ডলীর প্রতিবাধা Z_22 = R_2 + jωL_2 হয়। ফলে Z_in = Z_11 + (ωM)^2 / (R_2 + jωL_2)।'
      }
    },
    {
      id: 'mcq-ch12-l04-05',
      question: {
        en: 'Under what condition is the reflected impedance Z_ref PURELY RESISTIVE in a linear transformer?',
        hi: 'किस स्थिति में रैखिक ट्रांसफार्मर में परावर्तित प्रतिबाधा Z_ref विशुद्ध रूप से प्रतिरोधी होती है?',
        bn: 'কোন শর্তে রৈখিক ট্রান্সফরমারে প্রতিফলিত প্রতিবাধা Z_ref সম্পূর্ণরূপে রোধীয় হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'When the primary winding has zero resistance (R_1 = 0)', hi: 'जब प्राथमिक का प्रतिरोध शून्य हो', bn: 'যখন প্রাথমিকে কোনো রোধ থাকে না' } },
        { id: 'opt-2', text: { en: 'When the secondary loop operates at series resonance (X_22 = 0)', hi: 'जब द्वितीयक लूप श्रेणी अनुनाद (X_22 = 0) पर कार्य करता है', bn: 'যখন গৌণ লুপটি শ্রেণি অনুরণনে (X_22 = ০) থাকে' } },
        { id: 'opt-3', text: { en: 'When the coupling coefficient k = 0', hi: 'जब युग्मन गुणांक k = 0 हो', bn: 'যখন যুগ্মন সহগ k = ০ হয়' } },
        { id: 'opt-4', text: { en: 'When the frequency is zero (DC)', hi: 'जब आवृत्ति शून्य (DC) हो', bn: 'যখন কম্পাঙ্ক শূন্য (ডিসি) হয়' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'Since Z_ref = (ωM)^2 (R_22 - jX_22) / |Z_22|^2, the reactive part vanishes if and only if X_22 = 0 (secondary circuit at resonance).',
        hi: 'चूँकि Z_ref का काल्पनिक भाग X_22 पर निर्भर करता है, इसलिए X_22 = 0 (अनुनाद) होने पर यह विशुद्ध प्रतिरोधी हो जाता है।',
        bn: 'যেহেতু Z_ref এর কাল্পনিক অংশ X_22 এর ওপর নির্ভরশীল, তাই X_22 = ০ (অনুরণন) হলে প্রতিবাধাটি বিশুদ্ধ রোধীয় হয়।'
      }
    },
    {
      id: 'mcq-ch12-l04-06',
      question: {
        en: 'For a coupled coil pair with L_1 = 20 mH, L_2 = 50 mH, and M = 15 mH, what is the series primary branch inductance L_A in the equivalent T-network?',
        hi: 'L_1 = 20 mH, L_2 = 50 mH, एवं M = 15 mH वाली कुंडलियों के तुल्य T-नेटवर्क में प्राथमिक शाखा प्रेरकत्व L_A क्या है?',
        bn: 'L_1 = ২০ mH, L_2 = ৫০ mH এবং M = ১৫ mH বিশিষ্ট সংযুক্ত কুণ্ডলীর সমতুল্য টি-নেটওয়ার্কে প্রাথমিক শাখা আবেশাঙ্ক L_A কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '35 mH', hi: '35 mH', bn: '৩৫ mH' } },
        { id: 'opt-2', text: { en: '5 mH', hi: '5 mH', bn: '৫ mH' } },
        { id: 'opt-3', text: { en: '15 mH', hi: '15 mH', bn: '১৫ mH' } },
        { id: 'opt-4', text: { en: '20 mH', hi: '20 mH', bn: '২০ mH' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'L_A = L_1 - M = 20 - 15 = 5 mH.',
        hi: 'L_A = L_1 - M = 20 - 15 = 5 mH।',
        bn: 'L_A = L_1 - M = ২০ - ১৫ = ৫ mH।'
      }
    },
    {
      id: 'mcq-ch12-l04-07',
      question: {
        en: 'If a capacitive load Z_L = -j50 Ω is connected across the secondary of a linear transformer, how does it affect the primary circuit?',
        hi: 'यदि रैखिक ट्रांसफार्मर के द्वितीयक पर Z_L = -j50 Ω का संधारित्र लोड जोड़ा जाए, तो यह प्राथमिक परिपथ को कैसे प्रभावित करता है?',
        bn: 'রৈখিক ট্রান্সফরমারের গৌণে Z_L = -j৫০ Ω ধারকীয় লোড যুক্ত করলে তা প্রাথমিক বর্তনীকে কীভাবে প্রভাবিত করে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'It reflects as an inductive reactance, adding positive reactance to the primary', hi: 'यह प्रेरक प्रतिघात के रूप में परावर्तित होता है, जिससे प्राथमिक में धनात्मक प्रतिघात जुड़ता है', bn: 'এটি আবেশীয় রিঅ্যাক্ট্যান্স হিসেবে প্রতিফলিত হয়ে প্রাথমিকে ধনাত্মক রিঅ্যাক্ট্যান্স যোগ করে' } },
        { id: 'opt-2', text: { en: 'It reflects as a short circuit', hi: 'यह शॉर्ट सर्किट के रूप में परावर्तित होता है', bn: 'এটি শর্ট সার্কিট হিসেবে প্রতিফলিত হয়' } },
        { id: 'opt-3', text: { en: 'It decreases primary resistance to negative values', hi: 'यह प्राथमिक प्रतिरोध को ऋणात्मक कर देता है', bn: 'এটি প্রাথমিক রোধকে ঋণাত্মক করে তোলে' } },
        { id: 'opt-4', text: { en: 'It isolates the secondary completely', hi: 'यह द्वितीयक को पूरी तरह अलग कर देता है', bn: 'এটি গৌণকে সম্পূর্ণ বিচ্ছিন্ন করে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Due to reactive sign inversion in Z_ref = (ωM)^2 (R_22 - jX_22) / |Z_22|^2, a negative secondary reactance reflects as a positive (inductive) reactance in the primary.',
        hi: 'प्रतिघात व्युत्क्रमण के कारण ऋणात्मक द्वितीयक प्रतिघात प्राथमिक में धनात्मक (प्रेरक) प्रतिघात के रूप में परावर्तित होता है।',
        bn: 'রিঅ্যাক্ট্যান্স চিহ্নের উল্টো প্রতিফলনের কারণে ঋণাত্মক গৌণ রিঅ্যাক্ট্যান্স প্রাথমিকে ধনাত্মক (আবেশীয়) রিঅ্যাক্ট্যান্স হিসেবে প্রতিফলিত হয়।'
      }
    },
    {
      id: 'mcq-ch12-l04-08',
      question: {
        en: 'In a linear transformer, if mutual inductance M is doubled while all other parameters and frequency remain constant, what happens to the reflected impedance Z_ref?',
        hi: 'यदि अन्य सभी प्राचल एवं आवृत्ति स्थिर रहते हुए अन्योन्य प्रेरकत्व M को दोगुना कर दिया जाए, तो परावर्तित प्रतिबाधा Z_ref का क्या होता है?',
        bn: 'অন্যান্য সব প্যারামিটার ও কম্পাঙ্ক স্থির রেখে পারস্পরিক আবেশাঙ্ক M দ্বিগুণ করলে প্রতিফলিত প্রতিবাধা Z_ref এর কী পরিবর্তন হবে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'It doubles (increases by 2x)', hi: 'यह दोगुनी हो जाती है (2x)', bn: 'এটি দ্বিগুণ হয় (২x)' } },
        { id: 'opt-2', text: { en: 'It quadruples (increases by 4x)', hi: 'यह चार गुना हो जाती है (4x)', bn: 'এটি চারগুণ হয় (৪x)' } },
        { id: 'opt-3', text: { en: 'It halves (decreases to 0.5x)', hi: 'यह आधी हो जाती है (0.5x)', bn: 'এটি অর্ধেক হয় (০.৫x)' } },
        { id: 'opt-4', text: { en: 'It remains unchanged', hi: 'यह अपरिवर्तित रहती है', bn: 'এটি অপরিবর্তিত থাকে' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'Z_ref is proportional to M^2: Z_ref = (ωM)^2 / Z_22. Doubling M increases (2M)^2 = 4 M^2, quadrupling Z_ref.',
        hi: 'Z_ref, M^2 के समानुपाती होता है। M को दोगुना करने पर (2M)^2 = 4 गुना वृद्धि होती है।',
        bn: 'Z_ref সরাসরি M^2 এর সমানুপাতিক। M দ্বিগুণ করলে (২M)^২ = ৪ গুণ বৃদ্ধি পায়।'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-ch12-l04-01',
      title: {
        en: 'Linear Transformer and Conductively Equivalent T-Network',
        hi: 'परिपथ योजनाबद्ध आरेख',
        bn: 'বর্তনী স্কিম্যাটিক চিত্র'
      },
      caption: {
        en: 'Linear Transformer and Conductively Equivalent T-Network',
        hi: 'रैखिक ट्रांसफार्मर एवं तुल्य चालक T-नेटवर्क',
        bn: 'রৈখিক ট্রান্সফরমার ও সমতুল্য পরিবাহী টি-নেটওয়ার্ক'
      },
      svgType: 'circuit-ch12-reflected-impedance-t-models'
    }
  ]
};
