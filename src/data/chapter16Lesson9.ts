import { Lesson } from '../types';

export const LESSON_UNSYMMETRICAL_FAULTS: Lesson = {
  id: 'lsn-ch16-unsymmetrical-faults',
  topicId: 'tp-ch16-unsymmetrical-faults',
  chapterId: 'ch-advanced-power-system-analysis',
  order: 9,
  title: {
    en: 'Symmetrical Components & Unsymmetrical Faults (LG, LL, LLG)',
    hi: 'सममित घटक एवं असममित फॉल्ट (LG, LL, LLG)',
    bn: 'প্রতিসম উপাদান ও অপ্রতিসম ফল্ট (LG, LL, LLG)'
  },
  description: {
    en: 'Fortescue symmetrical component transformation: positive, negative, and zero sequence impedance networks of synchronous machines, transformers, and lines; rigorous mathematical formulation and sequence network interconnections for Single Line-to-Ground (SLG), Line-to-Line (LL), and Double Line-to-Ground (LLG) faults.',
    hi: 'फोर्टेस्क्यू सममित घटक रूपांतरण: सिंक्रोनस मशीनों, ट्रांसफार्मरों और लाइनों के धनात्मक, ऋणात्मक और शून्य अनुक्रम प्रतिबाधा नेटवर्क; सिंगल लाइन-टू-ग्राउंड (SLG), लाइन-टू-लाइन (LL), और डबल लाइन-टू-ग्राउंड (LLG) फॉल्ट के लिए सटीक गणितीय निरूपण और अनुक्रम नेटवर्क इंटरकनेक्शन।',
    bn: 'ফোরটেস্কু প্রতিসম উপাদান রূপান্তর: সিঙ্ক্রোনাস মেশিন, ট্রান্সফরমার ও লাইনের পজিটিভ, নেগেটিভ ও জিরো সিকোয়েন্স নেটওয়ার্ক; সিঙ্গেল লাইন-টু-গ্রাউন্ড (SLG), লাইন-টু-লাইন (LL) এবং ডাবল লাইন-টু-গ্রাউন্ড (LLG) ফল্টের গাণিতিক রূপ ও সিকোয়েন্স নেটওয়ার্ক আন্তঃসংযোগ।'
  },
  estimatedMinutes: 46,
  easyExplanation: {
    en: 'Over 95% of all real-world electrical faults are unsymmetrical—such as a tree branch brushing against a single phase wire (Single Line-to-Ground, SLG, ~70% of faults), two wires slapping together in a storm (Line-to-Line, LL, ~15%), or two wires falling into the mud (Double Line-to-Ground, LLG, ~10%). When an unsymmetrical fault strikes, the three phases become completely unbalanced, destroying the simple single-phase calculations used for balanced circuits. In 1918, Charles LeGeyt Fortescue made a brilliant breakthrough: any unbalanced 3-phase set of currents or voltages can be decomposed into three balanced fictitious sets: Positive Sequence (rotating normally ABC), Negative Sequence (rotating backwards ACB), and Zero Sequence (three identical in-phase currents flowing together into the earth). By solving these three decoupled sequence networks and interconnecting them according to the fault boundary conditions, engineers can calculate fault currents for any complex fault effortlessly!',
    hi: 'वास्तविक दुनिया के 95% से अधिक फॉल्ट असममित होते हैं—जैसे एक तार का जमीन से छूना (SLG, ~70%), दो तारों का टकराना (LL, ~15%), या दो तारों का जमीन पर गिरना (LLG, ~10%)। असममित फॉल्ट में तीनों फेज असंतुलित हो जाते हैं जिससे सामान्य विश्लेषण असंभव हो जाता है। 1918 में फोर्टेस्क्यू ने क्रांतिकारी विधि खोजी: किसी भी असंतुलित 3-फेज सिस्टम को तीन संतुलित घटकों में तोड़ा जा सकता है: पॉजिटिव सीक्वेंस (सामान्य घूर्णन ABC), नेगेटिव सीक्वेंस (उल्टा घूर्णन ACB), और जीरो सीक्वेंस (तीनों फेज एक साथ समान दिशा में जमीन में प्रवाहित)। इन तीनों नेटवर्क को जोड़कर किसी भी फॉल्ट को सरलता से हल किया जा सकता है!',
    bn: 'বাস্তব গ্রিডের ৯৫% এর বেশি ফল্ট অপ্রতিসম প্রকৃতির—যেমন একক তারের মাটিতে স্পর্শ (SLG, ~৭০%), দুটি তারের সংঘর্ষ (LL, ~১৫%), অথবা দুটি তার মাটিতে পড়া (LLG, ~১০%)। অপ্রতিসম ফল্টে তিন ফেজের ভারসাম্য নষ্ট হওয়ায় সাধারণ গণনা সম্ভব হয় না। ১৯১৮ সালে ফোরটেস্কু একটি যুগান্তকারী পদ্ধতি আবিষ্কার করেন: যেকোনো ভারসাম্যহীন ৩-ফেজ রাশিকে তিনটি ভারসাম্যপূর্ণ উপাদানে ভাগ করা যায়: পজিটিভ সিকোয়েন্স (স্বাভাবিক ঘূর্ণন ABC), নেগেটিভ সিকোয়েন্স (বিপরীত ঘূর্ণন ACB), এবং জিরো সিকোয়েন্স (তিনটি ফেজ একসাথে একই মান নিয়ে মাটিতে প্রবাহিত)। এই তিনটি নেটওয়ার্কের সংযোগের মাধ্যমে যেকোনো জটিল ফল্ট নিমিষেই সমাধান করা যায়!'
  },
  detailedExplanation: {
    en: 'Fortescue’s Symmetrical Component Transformation decouples unbalanced three-phase coupled networks into three independent single-phase sequence networks:\n\n1. The Fortescue Transformation Matrix (A):\nLet alpha = 1 ∠120° = -0.5 + j0.8660. The transformation relates phase quantities (a, b, c) to sequence quantities (0, 1, 2):\n[V_a]   [ 1   1      1     ] [V_a0]\n[V_b] = [ 1  alpha²  alpha ] [V_a1]\n[V_c]   [ 1  alpha   alpha²] [V_a2]\nInverting gives the sequence components in terms of phase components:\n• Zero Sequence: V_a0 = (1/3) * (V_a + V_b + V_c)\n• Positive Sequence: V_a1 = (1/3) * (V_a + alpha * V_b + alpha² * V_c)\n• Negative Sequence: V_a2 = (1/3) * (V_a + alpha² * V_b + alpha * V_c)\n\n2. Sequence Impedances of Power Equipment:\n• Transmission Lines: Z1 = Z2 (static conductors have identical impedance regardless of phase rotation). Z0 is 2 to 3.5 times Z1 because zero-sequence earth return current encounters earth resistivity and ground wire impedance.\n• Synchronous Generators: Z1 = jX"d, Z2 = j(X"d + X"q)/2 ≈ jX"d (negative sequence flux rotates at double speed past rotor damper bars, creating high eddy-current repulsion), Z0 is very small (leakage flux only). Neutral grounding impedance Z_n appears in the zero-sequence network as 3*Z_n.\n• Transformers: Z1 = Z2 = jX_leakage. Zero-sequence flow depends strictly on core construction and winding grounding:\n  - Delta winding: Isolates zero sequence; forms an open circuit to external buses but permits circulating currents internally.\n  - Ungrounded Star (Y): Blocks zero sequence entirely (open circuit).\n  - Grounded Star (Yg): Permits zero sequence to pass through to ground.\n\n3. Sequence Network Interconnections for Shunt Faults:\n• Single Line-to-Ground (SLG) Fault on Phase a (I_b = 0, I_c = 0, V_a = 0):\n  I_a0 = I_a1 = I_a2 = I_a / 3\n  ==> All three sequence networks (Z1, Z2, Z0) connected in SERIES!\n  I_a1 = V_f / (Z1 + Z2 + Z0 + 3*Z_f)\n  Fault Current: I_f = I_a = 3 * I_a1\n\n• Line-to-Line (LL) Fault between Phases b and c (I_a = 0, I_b = -I_c, V_b = V_c):\n  I_a0 = 0, and I_a1 = -I_a2\n  ==> Positive and Negative sequence networks connected in PARALLEL (Zero sequence open)!\n  I_a1 = V_f / (Z1 + Z2 + Z_f)\n  Fault Current: I_f = |I_b| = sqrt(3) * |I_a1|\n\n• Double Line-to-Ground (LLG) Fault on Phases b and c to Ground (I_a = 0, V_b = 0, V_c = 0):\n  V_a0 = V_a1 = V_a2\n  ==> All three sequence networks (Z1, Z2, and (Z0 + 3*Z_f)) connected in PARALLEL!\n  I_a1 = V_f / [ Z1 + (Z2 * (Z0 + 3*Z_f)) / (Z2 + Z0 + 3*Z_f) ]\n  Total ground fault current: I_f = 3 * I_a0.',
    hi: 'फोर्टेस्क्यू सममित घटक रूपांतरण असंतुलित प्रणालियों को तीन स्वतंत्र नेटवर्कों में विभाजित करता है:\n\n1. अनुक्रम घटक:\n• V_a0 = 1/3 * (Va + Vb + Vc)\n• V_a1 = 1/3 * (Va + alpha*Vb + alpha²*Vc)\n• V_a2 = 1/3 * (Va + alpha²*Vb + alpha*Vc)\n\n2. उपकरण प्रतिबाधा:\nलाइनों के लिए Z1 = Z2; पृथ्वी वापसी के कारण Z0 ≈ (2 से 3.5) * Z1। न्यूट्रल प्रतिबाधा जीरो सीक्वेंस में 3*Zn बन जाती है।\n\n3. फॉल्ट इंटरकनेक्शन:\n• SLG फॉल्ट (फेज a से ग्राउंड): तीनों नेटवर्क (Z1, Z2, Z0) श्रेणीक्रम (SERIES) में जुड़ते हैं! I_f = 3 * I_a1।\n• LL फॉल्ट (फेज b से c): Z1 और Z2 समानांतर (PARALLEL) में जुड़ते हैं (Z0 खुला रहता है)! I_f = sqrt(3) * I_a1।\n• LLG फॉल्ट (फेज b, c से ग्राउंड): तीनों नेटवर्क समानांतर (PARALLEL) में जुड़ते हैं! ग्राउंड धारा = 3 * I_a0।',
    bn: 'ফোরটেস্কুর প্রতিসম রূপান্তর ভারসাম্যহীন সিস্টেমকে তিনটি স্বাধীন নেটওয়ার্কে রূপান্তর করে:\n\n১. সিকোয়েন্স উপাদান:\n• V_a0 = ১/৩ * (Va + Vb + Vc)\n• V_a1 = ১/৩ * (Va + alpha*Vb + alpha²*Vc)\n• V_a2 = ১/৩ * (Va + alpha²*Vb + alpha*Vc)\n\n২. যন্ত্রপাতির ইম্পিডেন্স:\nলাইনের ক্ষেত্রে Z1 = Z2; তবে মাটির রোধের কারণে Z0 ≈ ২ থেকে ৩.৫ গুণ Z1 হয়। নিউট্রাল ইম্পিডেন্স জিরো সিকোয়েন্সে 3*Zn হয়।\n\n৩. ফল্ট সংযোগ:\n• SLG ফল্ট: তিনটি সিকোয়েন্স নেটওয়ার্ক (Z1, Z2, Z0) সিরিজে (SERIES) যুক্ত হয়! ফল্ট কারেন্ট I_f = ৩ * I_a1।\n• LL ফল্ট: Z1 এবং Z2 প্যারালালে (PARALLEL) যুক্ত হয় (Z0 বিচ্ছিন্ন থাকে)! I_f = sqrt(৩) * I_a1।\n• LLG ফল্ট: তিনটি সিকোয়েন্স নেটওয়ার্কই প্যারালালে (PARALLEL) যুক্ত হয়! গ্রাউন্ড কারেন্ট I_f = ৩ * I_a0।'
  },
  formulas: [
    {
      id: 'f-ch16-slg-fault-current',
      symbol: 'I_{f,SLG}',
      expression: 'I_f = 3 I_{a1} = \\frac{3 V_f}{Z_1 + Z_2 + Z_0 + 3 Z_f}',
      title: {
        en: 'Single Line-to-Ground (SLG) Fault Current Formula',
        hi: 'सिंगल लाइन-टू-ग्राउंड (SLG) फॉल्ट धारा सूत्र',
        bn: 'সিঙ্গেল লাইন-টু-গ্রাউন্ড (SLG) ফল্ট কারেন্ট সূত্র'
      },
      description: {
        en: 'Derived from series interconnection of positive, negative, and zero sequence Thevenin networks for a phase-a to ground bolted short circuit.',
        hi: 'फेज-a से ग्राउंड फॉल्ट के लिए पॉजिटिव, नेगेटिव और जीरो सीक्वेंस नेटवर्क के श्रेणी संयोजन से प्राप्त।',
        bn: 'ফেজ-a থেকে গ্রাউন্ড ফল্টের ক্ষেত্রে পজিটিভ, নেগেটিভ ও জিরো সিকোয়েন্স নেটওয়ার্কের সিরিজ সংযোগ থেকে প্রাপ্ত।'
      },
      variables: [
        { symbol: 'I_f', name: { en: 'Total fault current into ground (A or pu)', hi: 'ग्राउंड में कुल फॉल्ट धारा (A या pu)', bn: 'মাটিতে প্রবাহিত মোট ফল্ট কারেন্ট (A বা pu)' } },
        { symbol: 'V_f', name: { en: 'Pre-fault phase voltage at fault location (pu)', hi: 'फॉल्ट से पहले का फेज वोल्टेज (pu)', bn: 'ফল্ট পূর্ববর্তী ফেজ ভোল্টেজ (pu)' } },
        { symbol: 'Z_1, Z_2, Z_0', name: { en: 'Positive, negative, and zero sequence Thevenin impedances (pu)', hi: 'पॉजिटिव, नेगेटिव एवं जीरो सीक्वेंस प्रतिबाधाएँ (pu)', bn: 'পজিটিভ, নেগেটিভ ও জিরো সিকোয়েন্স ইম্পিডেন্স (pu)' } },
        { symbol: 'Z_f', name: { en: 'Fault arc impedance to ground (pu)', hi: 'ग्राउंड तक फॉल्ट आर्क प्रतिबाधा (pu)', bn: 'ফল্ট আর্কের ইম্পিডেন্স (pu)' } }
      ]
    },
    {
      id: 'f-ch16-ll-fault-current',
      symbol: 'I_{f,LL}',
      expression: '|I_f| = \\sqrt{3} |I_{a1}| = \\frac{\\sqrt{3} |V_f|}{|Z_1 + Z_2 + Z_f|}',
      title: {
        en: 'Line-to-Line (LL) Fault Current Formula',
        hi: 'लाइन-टू-लाइन (LL) फॉल्ट धारा सूत्र',
        bn: 'লাইন-টু-লাইন (LL) ফল্ট কারেন্ট সূত্র'
      },
      description: {
        en: 'Calculates the short-circuit current between two phases (b and c) derived from parallel connection of positive and negative sequence networks.',
        hi: 'पॉजिटिव और नेगेटिव सीक्वेंस नेटवर्क के समानांतर संयोजन से प्राप्त दो फेजों के बीच शॉर्ट-सर्किट धारा।',
        bn: 'পজিটিভ ও নেগেটিভ সিকোয়েন্স নেটওয়ার্কের সমান্তরাল সংযোগ থেকে প্রাপ্ত দুই ফেজের মধ্যকার শর্ট-সার্কিট কারেন্ট।'
      },
      variables: [
        { symbol: '|I_f|', name: { en: 'Magnitude of line-to-line fault current (A or pu)', hi: 'लाइन-टू-लाइन फॉल्ट धारा परिमाण (pu)', bn: 'লাইন-টু-লাইন ফল্ট কারেন্টের মান (pu)' } },
        { symbol: 'Z_1, Z_2', name: { en: 'Positive and negative sequence impedances (pu)', hi: 'पॉजिटिव और नेगेटिव सीक्वेंस प्रतिबाधाएँ (pu)', bn: 'পজিটিভ ও নেগেটিভ সিকোয়েন্স ইম্পিডেন্স (pu)' } }
      ]
    },
    {
      id: 'f-ch16-fortescue-transform',
      symbol: '[V_{abc}]',
      expression: '\\begin{bmatrix} V_a \\\\ V_b \\\\ V_c \\end{bmatrix} = \\begin{bmatrix} 1 & 1 & 1 \\\\ 1 & \\alpha^2 & \\alpha \\\\ 1 & \\alpha & \\alpha^2 \\end{bmatrix} \\begin{bmatrix} V_{a0} \\\\ V_{a1} \\\\ V_{a2} \\end{bmatrix}, \\quad \\alpha = 1\\angle 120^\\circ',
      title: {
        en: 'Fortescue Symmetrical Component Matrix Transformation',
        hi: 'फोर्टेस्क्यू सममित घटक मैट्रिक्स रूपांतरण',
        bn: 'ফোরটেস্কু প্রতিসম উপাদান ম্যাট্রিক্স রূপান্তর'
      },
      description: {
        en: 'Relates unbalanced three-phase vectors to three balanced sequence sets using complex rotation operator alpha.',
        hi: 'सम्मिश्र घूर्णन ऑपरेटर अल्फा का उपयोग करके असंतुलित फेजों को संतुलित अनुक्रमों से जोड़ता है।',
        bn: 'জটিল ঘূর্ণন অপারেটর আলফা ব্যবহার করে ৩-ফেজ ভারসাম্যহীন ভেক্টরকে তিনটি প্রতিসম উপাদানে রূপান্তর করে।'
      },
      variables: [
        { symbol: 'V_{a0}, V_{a1}, V_{a2}', name: { en: 'Zero, positive, and negative sequence components of phase a', hi: 'फेज a के जीरो, पॉजिटिव और नेगेटिव घटक', bn: 'ফেজ a এর জিরো, পজিটিভ ও নেগেটিভ উপাদান' } },
        { symbol: '\\alpha', name: { en: 'Phase shift operator e^(j*2*pi/3) = 1 ∠120°', hi: 'फेज शिफ्ट ऑपरेटर 1 ∠120°', bn: 'ফেজ শিফট অপারেটর ১ ∠১২০°' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-ch16-l09-sequence-network-interconnection',
      title: {
        en: 'Sequence Network Topologies for Unsymmetrical Faults',
        hi: 'असममित फॉल्ट के लिए अनुक्रम नेटवर्क टोपोलॉजी',
        bn: 'অপ্রতিসম ফল্টের জন্য সিকোয়েন্স নেটওয়ার্ক টপোলজি'
      },
      content: {
        en: 'The boundary conditions at the point of fault dictate how the sequence networks are interconnected:\n\n1. Single Line-to-Ground (SLG) Fault:\n• Boundary Conditions on Phase a: V_a = 0, I_b = 0, I_c = 0.\n• In Sequence Coordinates: I_a0 = I_a1 = I_a2 = I_a / 3.\n• Physical Interpretation: The same current flows through all three sequence networks. Therefore, the positive, negative, and zero sequence Thevenin networks must be connected in SERIES at the fault point.\n• Consequence: If the system neutral is ungrounded, Z0 = infinity, and SLG fault current drops to zero!\n\n2. Line-to-Line (LL) Fault:\n• Boundary Conditions between b and c: I_a = 0, I_b + I_c = 0, V_b = V_c.\n• In Sequence Coordinates: I_a0 = 0 (no ground connection), and I_a1 = -I_a2.\n• Physical Interpretation: The current leaving the positive-sequence network enters directly into the negative-sequence network. Therefore, the positive and negative sequence networks are connected in PARALLEL opposition. The zero-sequence network is completely isolated.\n\n3. Double Line-to-Ground (LLG) Fault:\n• Boundary Conditions: I_a = 0, V_b = 0, V_c = 0.\n• In Sequence Coordinates: V_a0 = V_a1 = V_a2.\n• Physical Interpretation: All three sequence networks share identical terminal voltages. Therefore, the positive, negative, and zero sequence networks are connected in PARALLEL.',
        hi: 'फॉल्ट बिंदु की सीमा स्थितियां यह तय करती हैं कि तीनों अनुक्रम नेटवर्क कैसे जुड़ेंगे:\n1. SLG फॉल्ट: I_a0 = I_a1 = I_a2, इसलिए पॉजिटिव, नेगेटिव और जीरो तीनों नेटवर्क श्रेणीक्रम (SERIES) में जुड़ते हैं। यदि सिस्टम न्यूट्रल ग्राउंडेड नहीं है, तो Z0 अनंत हो जाता है और करंट शून्य हो जाता है।\n2. LL फॉल्ट: I_a0 = 0 और I_a1 = -I_a2, इसलिए केवल पॉजिटिव और नेगेटिव नेटवर्क समानांतर (PARALLEL) में जुड़ते हैं।\n3. LLG फॉल्ट: V_a0 = V_a1 = V_a2, इसलिए तीनों नेटवर्क समानांतर (PARALLEL) में जुड़ते हैं।',
        bn: 'ফল্ট বিন্দুর শর্তানুসারে সিকোয়েন্স নেটওয়ার্কের সংযোগ নির্ধারিত হয়:\n১. SLG ফল্ট: I_a0 = I_a1 = I_a2 হওয়ায় পজিটিভ, নেগেটিভ ও জিরো নেটওয়ার্ক সিরিজে (SERIES) যুক্ত হয়। আনগ্রাউন্ডেড সিস্টেমে Z0 অসীম হওয়ায় SLG ফল্ট কারেন্ট শূন্য হয়।\n২. LL ফল্ট: I_a0 = ০ এবং I_a1 = -I_a2 হওয়ায় পজিটিভ ও নেগেটিভ নেটওয়ার্ক প্যারালালে (PARALLEL) যুক্ত হয়। জিরো নেটওয়ার্ক বাদ থাকে।\n৩. LLG ফল্ট: V_a0 = V_a1 = V_a2 হওয়ায় তিনটি নেটওয়ার্কই প্যারালালে (PARALLEL) যুক্ত হয়।'
      },
      schematicId: 'sch-ch16-unsymmetrical-faults'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch16-l09-01',
      problem: {
        en: 'A 3-phase, 11 kV, 25 MVA generator has the following sequence reactances on its own rating: X_1 = 0.20 pu, X_2 = 0.15 pu, and X_0 = 0.08 pu. The generator neutral is solidly grounded through an impedance Z_n = j0.02 pu. A bolted single line-to-ground (SLG) fault occurs on phase a at the generator terminals when operating at rated voltage on no load (pre-fault voltage V_f = 1.0 ∠0° pu). Calculate:\n(a) The sequence currents I_a1, I_a2, and I_a0 in per unit.\n(b) The subtransient fault current in per unit and in Amperes.\n(c) Compare this with the 3-phase symmetrical fault current.',
        hi: 'एक 11 kV, 25 MVA जनरेटर का X_1 = 0.20 pu, X_2 = 0.15 pu, X_0 = 0.08 pu है। न्यूट्रल Z_n = j0.02 pu के माध्यम से ग्राउंडेड है। टर्मिनल पर फेज a में एक SLG फॉल्ट होता है (V_f = 1.0 pu)। गणना कीजिए:\n(a) pu में अनुक्रम धाराएं I_a1, I_a2, I_a0\n(b) pu और एम्पीयर में फॉल्ट धारा\n(c) 3-फेज सममित फॉल्ट धारा से तुलना।',
        bn: 'একটি ১১ kV, ২৫ MVA জেনারেটরের X_1 = ০.২০ pu, X_2 = ০.১৫ pu, X_0 = ০.০৮ pu। নিউট্রাল Z_n = j০.০২ pu দিয়ে গ্রাউন্ডেড। টার্মিনালে ফেজ a তে একটি SLG ফল্ট ঘটলে (V_f = ১.০ pu) নির্ণয় করুন:\n(a) সিকোয়েন্স কারেন্ট I_a1, I_a2, I_a0 (pu তে)\n(b) ফল্ট কারেন্ট (pu এবং অ্যাম্পিয়ারে)\n(c) থ্রি-ফেজ প্রতিসম ফল্ট কারেন্টের সাথে তুলনা।'
      },
      solution: {
        en: 'Given:\n• V_f = 1.0 ∠0° pu\n• Z_1 = j0.20 pu\n• Z_2 = j0.15 pu\n• Z_0,total = Z_0 + 3*Z_n = j0.08 + 3*(j0.02) = j0.08 + j0.06 = j0.14 pu\n• Fault impedance Z_f = 0 (bolted fault)\n\nStep 1: Calculate Total Series Impedance for SLG Fault:\nZ_total = Z_1 + Z_2 + Z_0,total = j0.20 + j0.15 + j0.14 = j0.49 pu\n\nStep 2: Calculate Sequence Currents:\nFor SLG fault, sequence networks are in series:\nI_a1 = I_a2 = I_a0 = V_f / Z_total = (1.0 ∠0°) / (j0.49) = -j2.0408 pu\nMagnitude: |I_a1| = 2.0408 pu\n\nStep 3: Calculate Fault Current in Per Unit:\nI_f = I_a = 3 * I_a1 = 3 * (-j2.0408) = -j6.1224 pu\n|I_f| = 6.1224 pu\n\nStep 4: Calculate Actual Fault Current in Amperes:\n• Base Current on 11 kV: I_base = (25 * 10^6) / (sqrt(3) * 11,000) = 1,312.16 A\n• Fault Current I_f = 6.1224 * 1,312.16 A = 8,033.5 A = 8.034 kA\n\nStep 5: Compare with 3-Phase Symmetrical Fault Current:\n• I_f,3ph = V_f / Z_1 = 1.0 / (j0.20) = -j5.00 pu  ==>  |I_f,3ph| = 5.00 pu (6,560.8 A)\n• Ratio I_f,SLG / I_f,3ph = 6.1224 / 5.00 = 1.224 (The SLG fault current is 22.4% GREATER than the 3-phase fault current because Z_0,total < Z_1!).',
        hi: 'चरण 1: Z_0,total = j0.08 + 3*(j0.02) = j0.14 pu\nZ_total = j0.20 + j0.15 + j0.14 = j0.49 pu\nचरण 2: I_a1 = I_a2 = I_a0 = 1.0 / (j0.49) = -j2.041 pu\nचरण 3: I_f = 3 * I_a1 = 6.122 pu\nचरण 4: I_base = 25e6 / (sqrt(3)*11000) = 1312.2 A; I_f = 6.122 * 1312.2 = 8,034 A\nचरण 5: 3-फेज फॉल्ट = 1.0 / 0.20 = 5.0 pu। SLG फॉल्ट 3-फेज फॉल्ट से 22.4% अधिक है!',
        bn: 'ধাপ ১: Z_0,total = j০.০৮ + ৩*(j০.০২) = j০.১৪ pu\nZ_total = j০.২০ + j০.১৫ + j০.১৪ = j০.৪৯ pu\nধাপ ২: I_a1 = I_a2 = I_a0 = ১.০ / (j০.৪৯) = -j২.০৪১ pu\nধাপ ৩: I_f = ৩ * I_a1 = ৬.১২২ pu\nধাপ ৪: I_base = ১৩১২.২ A; I_f = ৬.১২২ * ১৩১২.২ = ৮,০৩৪ A\nধাপ ৫: ৩-ফেজ ফল্ট = ১.০ / ০.২০ = ৫.০ pu। এখানে SLG ফল্ট কারেন্ট ৩-ফেজ ফল্টের চেয়ে ২২.৪% বেশি!'
      },
      givenValues: { 'X_1': '0.20 pu', 'X_2': '0.15 pu', 'X_0': '0.08 pu', 'Z_n': 'j0.02 pu', 'S_base': '25 MVA', 'V_base': '11 kV' },
      finalAnswer: {
        en: 'I_a1 = I_a2 = I_a0 = -j2.041 pu, I_f = 6.122 pu (8,034 A) (SLG current is 1.22x higher than 3-phase fault)',
        hi: 'I_a1 = I_a2 = I_a0 = -j2.041 pu, I_f = 6.122 pu (8,034 A) (SLG धारा 3-फेज फॉल्ट से 1.22 गुना अधिक है)',
        bn: 'I_a1 = I_a2 = I_a0 = -j২.০৪১ pu, I_f = ৬.১২২ pu (৮,০৩৪ A) (SLG ফল্ট কারেন্ট ৩-ফেজ ফল্টের ১.২২ গুণ)'
      }
    },
    {
      id: 'ex-ch16-l09-02',
      problem: {
        en: 'For the same 25 MVA generator in Example 1 (Z_1 = j0.20 pu, Z_2 = j0.15 pu), a bolted line-to-line (LL) fault occurs between phases b and c. Calculate:\n(a) The sequence current I_a1 and I_a2 in per unit.\n(b) The line-to-line fault current magnitude |I_f| in per unit and in Amperes.',
        hi: 'उदाहरण 1 के उसी 25 MVA जनरेटर (Z_1 = j0.20 pu, Z_2 = j0.15 pu) के लिए फेज b और c के बीच एक लाइन-टू-लाइन (LL) फॉल्ट होता है। गणना कीजिए:\n(a) pu में अनुक्रम धाराएं I_a1 और I_a2\n(b) pu और एम्पीयर में लाइन-टू-लाइन फॉल्ट धारा का परिमाण |I_f|।',
        bn: 'উদাহরণ ১ এর ২৫ MVA জেনারেটরের (Z_1 = j০.২০ pu, Z_2 = j০.১৫ pu) ফেজ b ও c এর মধ্যে একটি লাইন-টু-লাইন (LL) ফল্ট হলে নির্ণয় করুন:\n(a) সিকোয়েন্স কারেন্ট I_a1 ও I_a2 (pu তে)\n(b) লাইন-টু-লাইন ফল্ট কারেন্ট |I_f| (pu এবং অ্যাম্পিয়ারে)।'
      },
      solution: {
        en: 'Given:\n• V_f = 1.0 ∠0° pu\n• Z_1 = j0.20 pu\n• Z_2 = j0.15 pu\n• Z_f = 0\n• I_base = 1,312.16 A\n\nStep 1: For a Line-to-Line Fault:\n• Zero sequence current I_a0 = 0 (no connection to earth).\n• Positive and negative sequence networks are in parallel opposition: I_a1 = -I_a2.\n• Equivalent Impedance: Z_eq = Z_1 + Z_2 = j0.20 + j0.15 = j0.35 pu.\n\nStep 2: Calculate Positive Sequence Current I_a1:\nI_a1 = V_f / (Z_1 + Z_2) = (1.0 ∠0°) / (j0.35) = -j2.8571 pu\nI_a2 = -I_a1 = +j2.8571 pu\n\nStep 3: Calculate Line Fault Current (I_b = -I_c):\nIn an LL fault, I_b = (alpha² - alpha) * I_a1 = -j*sqrt(3) * I_a1\n• Magnitude: |I_f| = sqrt(3) * |I_a1| = sqrt(3) * 2.8571 = 1.732 * 2.8571 = 4.9487 pu\n\nStep 4: Calculate Fault Current in Physical Amperes:\nI_f,actual = 4.9487 * 1,312.16 A = 6,493.5 A = 6.494 kA\n(Note: |I_f,LL| = (sqrt(3)/2) * |I_f,3ph| when Z_1 = Z_2 = 0.866 * 5.0 = 4.33 pu; here Z_2 < Z_1, yielding 4.95 pu).',
        hi: 'चरण 1: LL फॉल्ट में I_a0 = 0 और Z_eq = Z_1 + Z_2 = j0.20 + j0.15 = j0.35 pu\nचरण 2: I_a1 = 1.0 / (j0.35) = -j2.857 pu; I_a2 = +j2.857 pu\nचरण 3: |I_f| = sqrt(3) * |I_a1| = 1.732 * 2.857 = 4.949 pu\nचरण 4: I_f = 4.949 * 1312.2 A = 6,494 A (6.494 kA)।',
        bn: 'ধাপ ১: LL ফল্টে I_a0 = ০ এবং Z_eq = Z_1 + Z_2 = j০.৩৫ pu\nধাপ ২: I_a1 = ১.০ / (j০.৩৫) = -j২.৮৫৭ pu; I_a2 = +j২.৮৫৭ pu\nধাপ ৩: |I_f| = sqrt(৩) * |I_a1| = ১.৭৩২ * ২.৮৫৭ = ৪.৯৪৯ pu\nধাপ ৪: I_f = ৪.৯৪৯ * ১৩১২.২ A = ৬,৪৯৪ A (৬.৪৯৪ kA)।'
      },
      givenValues: { 'X_1': '0.20 pu', 'X_2': '0.15 pu', 'S_base': '25 MVA', 'V_base': '11 kV' },
      finalAnswer: {
        en: '|Ia1| = 2.857 pu, Fault current |If| = 4.949 pu (6,494 A)',
        hi: '|Ia1| = 2.857 pu, फॉल्ट धारा |If| = 4.949 pu (6,494 A)',
        bn: '|Ia1| = ২.৮৫৭ pu, ফল্ট কারেন্ট |If| = ৪.৯৪৯ pu (৬,৪৯৪ A)'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Protective relay coordination: setting zero-sequence ground overcurrent relays (51N/50N) to detect high-impedance ground faults.',
      'Sizing neutral grounding resistors (NGR) and reactors to limit SLG fault currents to safe levels (e.g., 200 A to 1000 A).',
      'Negative-sequence protection of generators (ANSI 46) to prevent severe rotor surface overheating caused by double-frequency induced eddy currents.'
    ],
    hi: [
      'सुरक्षात्मक रिले समन्वय: ग्राउंड ओवरकरंट रिले (51N/50N) की सेटिंग।',
      'SLG फॉल्ट करंट को सुरक्षित सीमा (200 A - 1000 A) तक सीमित करने के लिए न्यूट्रल ग्राउंडिंग रेसिस्टर (NGR) का आकार तय करना।',
      'रोटर को अधिक गर्म होने से बचाने के लिए जनरेटर का नेगेटिव-सीक्वेंस संरक्षण (ANSI 46)।'
    ],
    bn: [
      'প্রোটেকশন রিলে সমন্বয়: গ্রাউন্ড ফল্ট শনাক্তকরণে জিরো-সিকোয়েন্স রিলে (51N/50N) সেটিং।',
      'ফল্ট কারেন্ট নিরাপদ মাত্রায় (২০০ A - ১০০০ A) সীমিত করতে নিউট্রাল গ্রাউন্ডিং রেজিস্টর (NGR) সাইজিং।',
      'ডাবল-ফ্রিকোয়েন্সি এডি কারেন্টে রটার অতিরিক্ত গরম হওয়া রোধে নেগেটিভ-সিকোয়েন্স প্রোটেকশন (ANSI 46)।'
    ]
  },
  importantPoints: {
    en: [
      'SLG faults connect all three sequence networks (Z1, Z2, Z0) in SERIES; fault current is 3 * I_a1.',
      'LL faults connect Z1 and Z2 in PARALLEL; Z0 is open; fault current is sqrt(3) * |I_a1|.',
      'LLG faults connect all three sequence networks in PARALLEL; ground current is 3 * I_a0.',
      'If a system has solidly grounded neutrals and small Z0, the SLG fault current can exceed the symmetrical 3-phase fault current!'
    ],
    hi: [
      'SLG फॉल्ट में तीनों नेटवर्क श्रेणीक्रम (SERIES) में जुड़ते हैं; फॉल्ट धारा 3 * I_a1 होती है।',
      'LL फॉल्ट में Z1 और Z2 समानांतर (PARALLEL) में जुड़ते हैं; Z0 खुला रहता है; फॉल्ट धारा sqrt(3) * |I_a1| होती है।',
      'LLG फॉल्ट में तीनों नेटवर्क समानांतर (PARALLEL) में जुड़ते हैं; ग्राउंड धारा 3 * I_a0 होती है।',
      'ठोस रूप से ग्राउंडेड सिस्टम में SLG फॉल्ट धारा 3-फेज फॉल्ट धारा से भी अधिक हो सकती है!'
    ],
    bn: [
      'SLG ফল্টে তিনটি নেটওয়ার্ক সিরিজে যুক্ত হয়; মোট ফল্ট কারেন্ট ৩ * I_a1।',
      'LL ফল্টে Z1 ও Z2 প্যারালালে যুক্ত হয়; Z0 বিচ্ছিন্ন থাকে; ফল্ট কারেন্ট sqrt(৩) * |I_a1|।',
      'LLG ফল্টে তিনটি নেটওয়ার্ক প্যারালালে যুক্ত হয়; গ্রাউন্ড কারেন্ট ৩ * I_a0।',
      'সলিড গ্রাউন্ডেড সিস্টেমে Z0 খুব কম হলে SLG ফল্ট কারেন্ট ৩-ফেজ ফল্ট কারেন্টের চেয়েও বেশি হতে পারে!'
    ]
  },
  commonMistakes: {
    en: [
      'Forgetting the factor of 3 in the zero-sequence neutral impedance (it must always be entered as 3*Z_n).',
      'Assuming that a 3-phase fault is always the largest fault current (solidly grounded generators frequently experience higher SLG fault currents).',
      'Connecting the zero-sequence network in an LL fault (LL fault does not involve ground; Z0 is strictly an open circuit).'
    ],
    hi: [
      'जीरो सीक्वेंस न्यूट्रल प्रतिबाधा में 3 का गुणा करना भूल जाना (हमेशा 3*Z_n प्रयुक्त होता है)।',
      'यह मानना कि 3-फेज फॉल्ट हमेशा सबसे बड़ा होता है (सॉलिड ग्राउंडेड सिस्टम में SLG फॉल्ट बड़ा हो सकता है)।',
      'LL फॉल्ट में जीरो-सीक्वेंस नेटवर्क को जोड़ देना (LL फॉल्ट जमीन से नहीं जुड़ता, अतः Z0 खुला रहता है)।'
    ],
    bn: [
      'জিরো সিকোয়েন্স হিসেবে নিউট্রাল ইম্পিডেন্সে ৩ গুণ করতে ভুলে যাওয়া (সর্বদা 3*Z_n হতে হয়)।',
      'ধরে নেওয়া যে ৩-ফেজ ফল্ট সর্বদা বৃহত্তম (সলিড গ্রাউন্ডেড জেনারেটরে SLG ফল্ট কারেন্ট বেশি হতে পারে)।',
      'LL ফল্টে জিরো সিকোয়েন্স নেটওয়ার্ক সংযুক্ত করা (LL ফল্টে মাটি যুক্ত থাকে না, তাই Z0 ওপেন সার্কিট থাকে)।'
    ]
  },
  keyTakeaways: {
    en: [
      'Symmetrical components transform intractable unbalanced 3-phase networks into three simple decoupled single-phase circuits.',
      'SLG = Series network connection; LL = Parallel Z1-Z2 connection; LLG = Parallel three-way connection.',
      'Grounding design (solid, resistance, or ungrounded) dictates zero-sequence impedance and ground fault severity.'
    ],
    hi: [
      'सममित घटक जटिल असंतुलित प्रणालियों को तीन सरल एकल-फेज सर्किटों में बदल देते हैं।',
      'SLG = सीरीज कनेक्शन; LL = Z1-Z2 समानांतर कनेक्शन; LLG = त्रिपक्षीय समानांतर कनेक्शन।',
      'ग्राउंडिंग डिजाइन (ठोस, प्रतिरोध या अनग्राउंडेड) जीरो-सीक्वेंस प्रतिबाधा और फॉल्ट की गंभीरता तय करता है।'
    ],
    bn: [
      'প্রতিসম উপাদান রূপান্তর জটিল ৩-ফেজ অসমতাকে তিনটি সহজ ১-ফেজ সার্কিটে পরিণত করে।',
      'SLG = সিরিজ সংযোগ; LL = Z1 ও Z2 প্যারালাল সংযোগ; LLG = তিনমুখী প্যারালাল সংযোগ।',
      'গ্রাউন্ডিং পদ্ধতি (সলিড, রেজিস্ট্যান্স বা আনগ্রাউন্ডেড) জিরো-সিকোয়েন্স ফল্ট কারেন্টের মাত্রা নির্ধারণ করে।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch16-l09-01',
      question: {
        en: 'How are the positive, negative, and zero sequence Thevenin networks interconnected to simulate a Single Line-to-Ground (SLG) fault on phase a?',
        hi: 'फेज a पर सिंगल लाइन-टू-ग्राउंड (SLG) फॉल्ट का अनुकरण करने के लिए पॉजिटिव, नेगेटिव और जीरो सीक्वेंस नेटवर्क कैसे परस्पर जुड़े होते हैं?',
        bn: 'ফেজ a তে একটি সিঙ্গেল লাইন-টু-গ্রাউন্ড (SLG) ফল্ট রূপায়নে পজিটিভ, নেগেটিভ ও জিরো সিকোয়েন্স নেটওয়ার্ক কীভাবে পরস্পরের সাথে যুক্ত হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'All three sequence networks are connected in SERIES', hi: 'तीनों अनुक्रम नेटवर्क श्रेणीक्रम (SERIES) में जुड़े होते हैं', bn: 'তিনটি সিকোয়েন্স নেটওয়ার্কই সিরিজে (SERIES) যুক্ত হয়' } },
        { id: 'opt-2', text: { en: 'All three sequence networks are connected in PARALLEL', hi: 'तीनों अनुक्रम नेटवर्क समानांतर (PARALLEL) में जुड़े होते हैं', bn: 'তিনটি সিকোয়েন্স নেটওয়ার্কই প্যারালালে (PARALLEL) যুক্ত হয়' } },
        { id: 'opt-3', text: { en: 'Positive and negative sequence in parallel; zero sequence open', hi: 'पॉजिटिव और नेगेटिव समानांतर में; जीरो सीक्वेंस खुला', bn: 'পজিটিভ ও নেগেটিভ প্যারালালে; জিরো সিকোয়েন্স বিচ্ছিন্ন' } },
        { id: 'opt-4', text: { en: 'Zero sequence only; others are shorted', hi: 'केवल जीरो सीक्वेंस; अन्य शॉर्ट हैं', bn: 'কেবল জিরো সিকোয়েন্স; বাকিগুলো শর্ট' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'For an SLG fault on phase a: I_a0 = I_a1 = I_a2 = I_a / 3. Equal currents through each network dictates that all three sequence networks must be connected in SERIES.',
        hi: 'SLG फॉल्ट में I_a0 = I_a1 = I_a2 होता है। समान धारा बहने के कारण तीनों नेटवर्क श्रेणीक्रम (SERIES) में जुड़ते हैं।',
        bn: 'SLG ফল্টে I_a0 = I_a1 = I_a2 হওয়ায় সমান কারেন্ট প্রবাহের স্বার্থে তিনটি নেটওয়ার্ক সিরিজে যুক্ত থাকে।'
      }
    },
    {
      id: 'mcq-ch16-l09-02',
      question: {
        en: 'Why is the zero-sequence network an open circuit during a Line-to-Line (LL) fault between phases b and c?',
        hi: 'फेज b और c के बीच लाइन-टू-लाइन (LL) फॉल्ट के दौरान जीरो-सीक्वेंस नेटवर्क ओपन सर्किट क्यों होता है?',
        bn: 'ফেজ b ও c এর মধ্যে লাইন-টু-লাইন (LL) ফল্টের সময় জিরো-সিকোয়েন্স নেটওয়ার্ক কেন ওপেন সার্কিট থাকে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'The fault does not involve a connection to earth or neutral; hence, net zero-sequence current I_a0 = (Ia + Ib + Ic)/3 is zero', hi: 'फॉल्ट में पृथ्वी या न्यूट्रल से कोई संबंध नहीं होता है; इसलिए शून्य-अनुक्रम धारा I_a0 = 0 होती है', bn: 'ফল্টে মাটি বা নিউট্রালের কোনো সংযোগ থাকে না; ফলে নিট জিরো-সিকোয়েন্স কারেন্ট I_a0 = ০ হয়' } },
        { id: 'opt-2', text: { en: 'Zero-sequence voltage is always 100 kV', hi: 'जीरो-सीक्वेंस वोल्टेज हमेशा 100 kV होता है', bn: 'জিরো-সিকোয়েন্স ভোল্টেজ সর্বদা ১০০ kV থাকে' } },
        { id: 'opt-3', text: { en: 'The generator stops rotating immediately', hi: 'जनरेटर तुरंत घूमना बंद कर देता है', bn: 'জেনারেটর তৎক্ষণাৎ বন্ধ হয়ে যায়' } },
        { id: 'opt-4', text: { en: 'Because line conductors have zero resistance', hi: 'क्योंकि तारों में शून्य प्रतिरोध होता है', bn: 'কারণ তারের রোধ শূন্য থাকে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Since I_a = 0 and I_b = -I_c, total ground return current is I_n = I_a + I_b + I_c = 0. Therefore, I_a0 = 0, meaning the zero-sequence network is unexcited (open).',
        hi: 'चूंकि I_b = -I_c और I_a = 0, पृथ्वी में जाने वाली धारा शून्य होती है, इसलिए I_a0 = 0 (ओपन सर्किट) होता है।',
        bn: 'I_b = -I_c এবং I_a = ০ হওয়ায় মাটিতে কোনো কারেন্ট যায় না, ফলে I_a0 = ০ (ওপেন সার্কিট) হয়।'
      }
    },
    {
      id: 'mcq-ch16-l09-03',
      question: {
        en: 'How does an external neutral grounding impedance Z_n appear in the zero-sequence network of a grounded synchronous generator or transformer?',
        hi: 'एक ग्राउंडेड जनरेटर या ट्रांसफार्मर के जीरो-सीक्वेंस नेटवर्क में एक बाहरी न्यूट्रल ग्राउंडिंग प्रतिबाधा Z_n कैसे दिखाई देती है?',
        bn: 'গ্রাউন্ডেড জেনারেটর বা ট্রান্সফরমারের জিরো-সিকোয়েন্স নেটওয়ার্কে নিউট্রাল গ্রাউন্ডিং ইম্পিডেন্স Z_n কীভাবে অন্তর্ভুক্ত হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'As an impedance of 3 * Z_n in series with Z_0', hi: 'Z_0 के साथ श्रेणीक्रम में 3 * Z_n के रूप में', bn: 'Z_0 এর সাথে সিরিজে 3 * Z_n ইম্পিডেন্স হিসেবে' } },
        { id: 'opt-2', text: { en: 'As Z_n / 3 in parallel with Z_0', hi: 'Z_0 के समानांतर Z_n / 3 के रूप में', bn: 'Z_0 এর সাথে প্যারালালে Z_n / ৩ হিসেবে' } },
        { id: 'opt-3', text: { en: 'It is completely ignored in the zero-sequence network', hi: 'जीरो-सीक्वेंस में इसकी पूरी तरह उपेक्षा की जाती है', bn: 'জিরো সিকোয়েন্সে এটি পুরোপুরি বাদ পড়ে' } },
        { id: 'opt-4', text: { en: 'As a direct short circuit to ground', hi: 'ग्राउंड के लिए एक सीधे शॉर्ट सर्किट के रूप में', bn: 'সরাসরি শর্ট সার্কিট হিসেবে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'The neutral carries 3*I_a0. In a per-phase sequence circuit carrying I_a0, the neutral voltage drop is (3*I_a0)*Z_n = I_a0 * (3*Z_n), represented as 3*Z_n.',
        hi: 'न्यूट्रल में तीनों फेजों की जीरो-सीक्वेंस धारा बहती है (3*I_a0), इसलिए प्रति-फेज सर्किट में वोल्टेज ड्रॉप 3*I_a0 * Z_n = I_a0 * (3*Z_n) होता है।',
        bn: 'নিউট্রাল দিয়ে তিন ফেজের জিরো-সিকোয়েন্স কারেন্ট (৩*I_a0) প্রবাহিত হওয়ায় প্রতি-ফেজ সার্কিটে এর ড্রপ I_a0 * (৩*Z_n) অর্থাৎ ৩*Z_n হয়।'
      }
    },
    {
      id: 'mcq-ch16-l09-04',
      question: {
        en: 'Under what network grounding condition can the Single Line-to-Ground (SLG) fault current exceed the balanced 3-phase symmetrical fault current?',
        hi: 'किस नेटवर्क ग्राउंडिंग स्थिति में सिंगल लाइन-टू-ग्राउंड (SLG) फॉल्ट धारा संतुलित 3-फेज सममित फॉल्ट धारा से अधिक हो सकती है?',
        bn: 'কোন নেটওয়ার্ক গ্রাউন্ডিং অবস্থায় সিঙ্গেল লাইন-টু-গ্রাউন্ড (SLG) ফল্ট কারেন্ট ৩-ফেজ প্রতিসম ফল্ট কারেন্টের চেয়ে বেশি হতে পারে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'When the zero-sequence Thevenin impedance is significantly smaller than the positive-sequence impedance (Z_0 < Z_1)', hi: 'जब जीरो-सीक्वेंस थेवेनिन प्रतिबाधा पॉजिटिव-सीक्वेंस से काफी छोटी होती है (Z_0 < Z_1)', bn: 'যখন জিরো-সিকোয়েন্স থেভেনিন ইম্পিডেন্স পজিটিভ-সিকোয়েন্সের চেয়ে কম হয় (Z_0 < Z_1)' } },
        { id: 'opt-2', text: { en: 'When the system neutral is completely ungrounded (isolated neutral)', hi: 'जब सिस्टम न्यूट्रल पूरी तरह से अनग्राउंडेड होता है', bn: 'যখন সিস্টেম নিউট্রাল পুরোপুরি আনগ্রাউন্ডেড থাকে' } },
        { id: 'opt-3', text: { en: 'Only during direct current (DC) transmission', hi: 'केवल दिष्ट धारा (DC) पारेषण के दौरान', bn: 'কেবল ডিসি সঞ্চালনে' } },
        { id: 'opt-4', text: { en: 'This condition is mathematically impossible in all power systems', hi: 'यह स्थिति सभी पावर सिस्टम में गणितीय रूप से असंभव है', bn: 'এটি গাণিতিকভাবে সম্পূর্ণ অসম্ভব' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'If Z_0 < Z_1 (common in solidly grounded generators where X0 is tiny), Z_1 + Z_2 + Z_0 < 3*Z_1, making I_f,SLG = 3*V_f / (Z_1 + Z_2 + Z_0) > V_f / Z_1 = I_f,3ph.',
        hi: 'यदि Z_0 < Z_1 होता है, तो कुल प्रतिबाधा 3*Z_1 से कम हो जाती है, जिससे SLG फॉल्ट धारा 3-फेज फॉल्ट धारा से बड़ी हो जाती है।',
        bn: 'সলিড গ্রাউন্ডেড জেনারেটরে Z_0 < Z_1 হলে মোট ইম্পিডেন্স ৩*Z_1 এর চেয়ে কম হয়, ফলে SLG কারেন্ট ৩-ফেজ কারেন্টকে ছাড়িয়ে যায়।'
      }
    },
    {
      id: 'mcq-ch16-l09-05',
      question: {
        en: 'What is the value of the complex operator α = 1 ∠120° in rectangular coordinates?',
        hi: 'आयताकार निर्देशांकों (rectangular coordinates) में सम्मिश्र ऑपरेटर α = 1 ∠120° का मान क्या है?',
        bn: 'আয়তাকার স্থানাঙ্কে জটিল অপারেটর α = ১ ∠১২০° এর মান কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '-0.5 + j0.866', hi: '-0.5 + j0.866', bn: '-০.৫ + j০.৮৬৬' } },
        { id: 'opt-2', text: { en: '+0.5 + j0.866', hi: '+0.5 + j0.866', bn: '+০.৫ + j০.৮৬৬' } },
        { id: 'opt-3', text: { en: '-0.5 - j0.866', hi: '-0.5 - j0.866', bn: '-০.৫ - j০.৮৬৬' } },
        { id: 'opt-4', text: { en: '0 + j1.0', hi: '0 + j1.0', bn: '০ + j১.০' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'alpha = cos(120°) + j*sin(120°) = -0.5 + j(sqrt(3)/2) ≈ -0.5 + j0.8660.',
        hi: 'alpha = cos(120°) + j*sin(120°) = -0.5 + j0.866।',
        bn: 'alpha = cos(১২০°) + j*sin(১২০°) = -০.৫ + j০.৮৬৬।'
      }
    },
    {
      id: 'mcq-ch16-l09-06',
      question: {
        en: 'How are the sequence networks interconnected for a Double Line-to-Ground (LLG) fault on phases b and c?',
        hi: 'फेज b और c पर डबल लाइन-टू-ग्राउंड (LLG) फॉल्ट के लिए अनुक्रम नेटवर्क कैसे जुड़े होते हैं?',
        bn: 'ফেজ b ও c তে ডাবল লাইন-টু-গ্রাউন্ড (LLG) ফল্টের জন্য সিকোয়েন্স নেটওয়ার্কগুলো কীভাবে যুক্ত হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Positive, negative, and zero sequence networks are all connected in PARALLEL', hi: 'पॉजिटिव, नेगेटिव और जीरो सीक्वेंस नेटवर्क सभी समानांतर (PARALLEL) में जुड़े होते हैं', bn: 'পজিটিভ, নেগেটিভ ও জিরো সিকোয়েন্স নেটওয়ার্ক তিনটিই প্যারালালে (PARALLEL) যুক্ত হয়' } },
        { id: 'opt-2', text: { en: 'All three networks are connected in SERIES', hi: 'तीनों नेटवर्क श्रेणीक्रम (SERIES) में जुड़े होते हैं', bn: 'তিনটি নেটওয়ার্কই সিরিজে যুক্ত হয়' } },
        { id: 'opt-3', text: { en: 'Positive and negative in series; zero sequence in parallel', hi: 'पॉजिटिव और नेगेटिव श्रेणी में; जीरो समानांतर में', bn: 'পজিটিভ ও নেগেটিভ সিরিজে; জিরো প্যারালালে' } },
        { id: 'opt-4', text: { en: 'Zero sequence is completely disconnected', hi: 'जीरो सीक्वेंस पूरी तरह से डिस्कनेक्ट रहता है', bn: 'জিরো সিকোয়েন্স সম্পূর্ণ বিচ্ছিন্ন থাকে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'For an LLG fault: V_b = 0 and V_c = 0, which translates in sequence coordinates to V_a0 = V_a1 = V_a2. Identical voltages require a PARALLEL connection.',
        hi: 'LLG फॉल्ट में V_a0 = V_a1 = V_a2 होता है, अतः तीनों नेटवर्क समानांतर (PARALLEL) में जुड़ते हैं।',
        bn: 'LLG ফল্টে V_a0 = V_a1 = V_a2 হওয়ায় অভিন্ন ভোল্টেজের কারণে তিনটি নেটওয়ার্কই প্যারালালে যুক্ত হয়।'
      }
    },
    {
      id: 'mcq-ch16-l09-07',
      question: {
        en: 'Why is the zero-sequence impedance of an overhead transmission line substantially larger than its positive-sequence impedance (Z0 ≈ 2.5 to 3.5 * Z1)?',
        hi: 'ओवरहेड पारेषण लाइन की जीरो-सीक्वेंस प्रतिबाधा इसकी पॉजिटिव-सीक्वेंस प्रतिबाधा से काफी बड़ी (Z0 ≈ 2.5 से 3.5 * Z1) क्यों होती है?',
        bn: 'ওভারহেড সঞ্চালন লাইনের জিরো-সিকোয়েন্স ইম্পিডেন্স তার পজিটিভ-সিকোয়েন্স ইম্পিডেন্সের চেয়ে অনেক বেশি (Z0 ≈ ২.৫ থেকে ৩.৫ * Z1) হয় কেন?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Zero-sequence currents return through high-resistivity earth and ground wires with large conductor-to-earth loop area', hi: 'जीरो-सीक्वेंस धाराएं उच्च-प्रतिरोधकता वाली पृथ्वी और ग्राउंड तारों से होकर लौटती हैं जिनका लूप क्षेत्रफल बड़ा होता है', bn: 'জিরো-সিকোয়েন্স কারেন্ট উচ্চ রোধের মাটি ও গ্রাউন্ড তারের মধ্য দিয়ে প্রবাহিত হয় এবং লুপের ক্ষেত্রফল অনেক বড়' } },
        { id: 'opt-2', text: { en: 'Zero-sequence current creates no magnetic field', hi: 'जीरो-सीक्वेंस धारा कोई चुंबकीय क्षेत्र नहीं बनाती', bn: 'জিরো সিকোয়েন্স কারেন্ট কোনো চৌম্বক ক্ষেত্র সৃষ্টি করে না' } },
        { id: 'opt-3', text: { en: 'Transmission conductors are made of insulating ceramic', hi: 'पारेषण तार इंसुलेटिंग सिरेमिक से बने होते हैं', bn: 'সঞ্চালন তার সিরামিক দিয়ে তৈরি' } },
        { id: 'opt-4', text: { en: 'Zero sequence travels faster than the speed of light', hi: 'जीरो सीक्वेंस प्रकाश की चाल से तेज चलता है', bn: 'জিরো সিকোয়েন্স আলোর চেয়ে দ্রুত চলে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Carson’s earth-return equations show that zero-sequence return current penetrates deeply into the earth (creating huge fictitious conductor loops) and encounters significant soil resistivity.',
        hi: 'कार्सन के पृथ्वी-वापसी समीकरण के अनुसार धारा जमीन में गहराई तक जाती है जिससे लूप बड़ा बनता है और मिट्टी का प्रतिरोध जुड़ता है।',
        bn: 'কারসনের সমীকরণ অনুযায়ী জিরো-সিকোয়েন্স কারেন্ট মাটির গভীরে প্রবেশ করায় বিশাল লুপ তৈরি হয় এবং মাটির রোধ যুক্ত হয়।'
      }
    },
    {
      id: 'mcq-ch16-l09-08',
      question: {
        en: 'What is the most frequent type of unsymmetrical fault occurring on high-voltage overhead transmission lines?',
        hi: 'हाई-वोल्टेज ओवरहेड पारेषण लाइनों पर सबसे अधिक बार होने वाला असममित फॉल्ट कौन सा है?',
        bn: 'উচ্চ ভোল্টেজ ওভারহেড সঞ্চালন লাইনে সবচেয়ে বেশি সংঘটিত অপ্রতিসম ফল্ট কোনটি?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Single Line-to-Ground (SLG) fault (~70% of all faults)', hi: 'सिंगल लाइन-टू-ग्राउंड (SLG) फॉल्ट (सभी फॉल्ट का ~70%)', bn: 'সিঙ্গেল লাইন-টু-গ্রাউন্ড (SLG) ফল্ট (মোট ফল্টের ~৭০%)' } },
        { id: 'opt-2', text: { en: 'Line-to-Line (LL) fault (~15%)', hi: 'लाइन-टू-लाइन (LL) फॉल्ट (~15%)', bn: 'লাইন-টু-লাইন (LL) ফল্ট (~১৫%)' } },
        { id: 'opt-3', text: { en: 'Double Line-to-Ground (LLG) fault (~10%)', hi: 'डबल लाइन-टू-ग्राउंड (LLG) फॉल्ट (~10%)', bn: 'ডাবল লাইন-টু-গ্রাউন্ড (LLG) ফল্ট (~১০%)' } },
        { id: 'opt-4', text: { en: 'Three-phase symmetrical fault (~5%)', hi: 'थ्री-फेज सममित फॉल्ट (~5%)', bn: 'থ্রি-ফেজ প্রতিসম ফল্ট (~৫%)' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Single Line-to-Ground faults (flashover across a single insulator string due to lightning, bird streamer, or tree contact) account for roughly 70% of all transmission outages.',
        hi: 'बिजली गिरने या पेड़ की टहनी छूने से होने वाले सिंगल लाइन-टू-ग्राउंड फॉल्ट ग्रिड के कुल फॉल्ट का लगभग 70% होते हैं।',
        bn: 'বজ্রপাত বা গাছের ডাল স্পর্শের কারণে সংঘটিত সিঙ্গেল লাইন-টু-গ্রাউন্ড ফল্ট মোট ফল্টের প্রায় ৭০%।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch16-l09-01',
      question: {
        en: 'In a 3-phase system, Z1 = j0.25 pu, Z2 = j0.25 pu, and Z0 = j0.50 pu. Pre-fault voltage is 1.0 pu. Calculate the bolted SLG fault current in per unit.',
        hi: 'एक 3-फेज सिस्टम में Z1 = j0.25 pu, Z2 = j0.25 pu, Z0 = j0.50 pu और V_f = 1.0 pu है। SLG फॉल्ट धारा (pu) ज्ञात कीजिए।',
        bn: 'একটি ৩-ফেজ সিস্টেমে Z1 = j০.২৫ pu, Z2 = j০.২৫ pu, Z0 = j০.৫০ pu এবং V_f = ১.০ pu। বোল্টেড SLG ফল্ট কারেন্ট নির্ণয় করুন।'
      },
      hint: {
        en: 'Z_total = Z1 + Z2 + Z0 = j(0.25 + 0.25 + 0.50) = j1.0 pu. I_a1 = 1.0 / (j1.0) = -j1.0 pu. I_f = 3 * I_a1 = 3.0 pu.',
        hi: 'Z_total = j1.0 pu। I_f = 3 * (1.0 / 1.0) = 3.0 pu।',
        bn: 'Z_total = j১.০ pu। I_f = ৩ * (১.০ / ১.০) = ৩.০ pu।'
      }
    }
  ]
};
