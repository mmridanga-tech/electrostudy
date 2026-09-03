import { Lesson } from '../types';

export const LESSON_EARTHING_CONCEPT: Lesson = {
  id: 'lsn-ch15-earthing-concept',
  topicId: 'tp-earthing-concept',
  chapterId: 'ch-electrical-safety',
  order: 3,
  title: {
    en: 'Earthing — Basic Concept',
    hi: 'अर्थिंग — मूल अवधारणा',
    bn: 'আর্থিং — মৌলিক ধারণা'
  },
  description: {
    en: 'Foundational principles of earthing (grounding): distinction between system earthing and equipment earthing, earth electrode resistance components, soil resistivity, earth fault loop impedance (Zs), touch and step voltage mitigation, and protective clearing of earth fault currents.',
    hi: 'अर्थिंग (ग्राउंडिंग) के मूलभूत सिद्धांत: सिस्टम अर्थिंग और उपकरण अर्थिंग के बीच अंतर, अर्थ इलेक्ट्रोड प्रतिरोध के घटक, मृदा प्रतिरोधकता, अर्थ फॉल्ट लूप प्रतिबाधा (Zs), स्पर्श एवं चरण वोल्टेज में कमी तथा अर्थ फॉल्ट धाराओं का सुरक्षात्मक निवारण।',
    bn: 'আর্থিংয়ের (গ্রাউন্ডিং) মৌলিক নীতিসমূহ: সিস্টেম আর্থিং ও ইকুইপমেন্ট আর্থিংয়ের পার্থক্য, আর্থ ইলেকট্রোড রোধের উপাদান, মাটির আপেক্ষিক রোধ, আর্থ ফল্ট লুপ প্রতিবাধা (Zs), স্পর্শ ও পদক্ষেপ ভোল্টেজ হ্রাসকরণ এবং আর্থ ফল্ট কারেন্টের দ্রুত অপনয়ন।'
  },
  estimatedMinutes: 40,
  easyExplanation: {
    en: 'Earthing means connecting the non-current-carrying metallic enclosures of electrical equipment (like refrigerators, washing machines, or industrial motors) to the general mass of the earth via a low-resistance copper or galvanized iron conductor. Why is this critical? Imagine a live wire inside a washing machine becomes loose and touches the steel casing. If there is NO earthing, the metal body charges up to 230 V. The moment a person touches it, their body becomes the return path to ground—causing a severe or fatal electric shock! But if the body is properly EARTHED with a low resistance (e.g., under 2 ohms), the fault current rushes down the earth wire instead of through the human body. This massive surge of fault current instantly blows the fuse or trips the circuit breaker in under 0.4 seconds, isolating the dangerous circuit and saving lives.',
    hi: 'अर्थिंग का अर्थ है बिजली के उपकरणों (जैसे फ्रिज, वाशिंग मशीन या मोटर) के बाहरी धातु के आवरण को कम प्रतिरोध वाले तार के माध्यम से धरती की सामान्य मिट्टी से जोड़ना। यह क्यों जरूरी है? मान लीजिए किसी वाशिंग मशीन के अंदर का फेज तार टूटकर उसकी लोहे की बॉडी को छू लेता है। यदि अर्थिंग नहीं है, तो धातु का पूरा आवरण 230 V पर चार्ज हो जाएगा। जैसे ही कोई व्यक्ति उसे छुएगा, करंट उसके शरीर से होकर जमीन में जाएगा—जिससे जानलेवा झटका लगेगा! लेकिन यदि उपकरण का आवरण ठीक से अर्थ किया हुआ है (प्रतिरोध 2 ओम से कम), तो करंट व्यक्ति के बजाय सीधे अर्थ वायर से बहेगा। यह भारी फॉल्ट करंट तुरंत फ्यूज को उड़ा देगा या सर्किट ब्रेकर को 0.4 सेकंड के अंदर ट्रिप कर देगा, जिससे बिजली कट जाएगी और व्यक्ति की जान बच जाएगी।',
    bn: 'আর্থিং হলো বৈদ্যুতিক যন্ত্রপাতির (যেমন ফ্রিজ, ওয়াশিং মেশিন বা মোটর) অনাকাঙ্ক্ষিত বিদ্যুৎ পরিবাহী বহিরাগত ধাতব অংশকে কম রোধবিশিষ্ট তারের মাধ্যমে মাটির সাথে যুক্ত করা। এটি কেন অত্যন্ত জরুরি? ধরা যাক ওয়াশিং মেশিনের ভেতরের ফেজ তারটি আলগা হয়ে এর মেটাল বডিতে স্পর্শ করল। যদি আর্থিং না থাকে, তবে ধাতব বডিটি সরাসরি ২৩০ ভোল্টে আহিত হয়ে থাকবে। কোনো ব্যক্তি তা স্পর্শ করামাত্র তার শরীরের মধ্য দিয়ে বিদ্যুৎ মাটিতে প্রবাহিত হবে—ফলে ঘটবে মারাত্মক শক! কিন্তু বডিটি যদি উপযুক্তভাবে আর্থিং করা থাকে (যেমন ২ ওহমের কম রোধ), তবে ফল্ট কারেন্ট মানবদেহের বদলে আর্থ তার দিয়ে মাটিতে নেমে যাবে। এই বিপুল কারেন্ট ০.৪ সেকেন্ডের মধ্যে ফিউজ গলিয়ে বা ব্রেকার ট্রিপ করিয়ে বিপজ্জনক লাইনটি সাথে সাথে বন্ধ করে দেবে।'
  },
  detailedExplanation: {
    en: 'In modern electrical engineering according to IS 3043 and IEC 60364, Earthing is bifurcated into two foundational categories:\n\n1. System Earthing (Neutral Earthing):\nThe intentional electrical connection of the neutral conductor of a power transformer or generator to earth. Its primary engineering functions are:\n• Stabilizing the system neutral potential relative to earth, preventing neutral float.\n• Limiting phase-to-ground voltage rise during line-to-ground faults on healthy phases.\n• Providing a closed, defined low-impedance return path for earth fault currents back to the transformer star point so that protective overcurrent relays can operate reliably.\n\n2. Equipment Earthing (Protective Earthing):\nThe intentional bonding of all exposed conductive parts (metal casings, switchgear frames, conduits, cable armoring) to the protective conductor (PE / CPC). Under normal healthy conditions, no current flows in the protective conductor. Under insulation failure (phase touching chassis), it ensures that:\n• Touch voltage U_touch on the enclosure remains below the statutory limit (U_L ≤ 50 V dry, ≤ 25 V wet).\n• Earth fault loop impedance Z_s is sufficiently low to satisfy the automatic disconnection condition: I_fault = U_0 / Z_s ≥ I_a, where I_a is the current causing disconnection of the protective device within 0.4 seconds (for 230 V circuits).\n\nPhysics of Earth Electrode Resistance:\nThe total resistance of an earth electrode R_e comprises three parts:\n1. Resistance of the metal rod/plate and its lead wire (virtually negligible, < 0.05 Ω).\n2. Contact resistance between the electrode surface and surrounding soil (negligible if soil is well compacted).\n3. Resistance of the soil shells surrounding the electrode extending to infinity (accounts for >95% of total resistance). The resistance of a hemispherical soil shell of radius r and thickness dr is dR = ρ · dr / (2π r²), where ρ is soil resistivity in Ω·m.\n\nIntegrating from electrode radius r_0 to infinity reveals that over 90% of total ground resistance is concentrated within a radius of 2 to 3 meters from the electrode—the "resistance area" of the earth electrode.',
    hi: 'IS 3043 और IEC 60364 के अनुसार अर्थिंग को दो प्राथमिक श्रेणियों में विभाजित किया गया है:\n\n1. सिस्टम अर्थिंग (न्यूट्रल अर्थिंग):\nट्रांसफार्मर या जनरेटर के न्यूट्रल बिंदु को जमीन से जोड़ना। इसके कार्य हैं:\n• सिस्टम के न्यूट्रल वोल्टेज को जमीन के सापेक्ष स्थिर रखना।\n• फॉल्ट के दौरान स्वस्थ फेजों पर वोल्टेज वृद्धि को रोकना।\n• ट्रांसफार्मर तक फॉल्ट धारा के लिए एक निश्चित निम्न-प्रतिबाधा वापसी मार्ग प्रदान करना ताकि रिले सही काम कर सके।\n\n2. उपकरण अर्थिंग (सुरक्षात्मक अर्थिंग):\nउपकरणों के धातु के बाहरी ढांचों को अर्थ वायर (PE) से जोड़ना। सामान्य स्थिति में इसमें कोई धारा नहीं बहती। इंसुलेशन फेल होने पर यह सुनिश्चित करता है कि:\n• चेसिस पर स्पर्श वोल्टेज 50 V से नीचे रहे।\n• अर्थ फॉल्ट लूप प्रतिबाधा (Zs) इतनी कम हो कि फॉल्ट धारा I_fault = U_0 / Zs सर्किट ब्रेकर को 0.4 सेकंड में ट्रिप कर सके।\n\nअर्थ इलेक्ट्रोड प्रतिरोध की भौतिकी:\nइलेक्ट्रोड का कुल प्रतिरोध R_e मुख्य रूप से उसके चारों ओर मिट्टी के संकेंद्रित गोले (soil shells) के प्रतिरोध से बनता है। सूत्र: dR = ρ · dr / (2π r²)। कुल प्रतिरोध का 90% से अधिक हिस्सा इलेक्ट्रोड के 2-3 मीटर के दायरे में ही केंद्रित होता है।',
    bn: 'IS 3043 এবং IEC 60364 অনুসারে আর্থিংকে দুটি প্রধান শ্রেণীতে ভাগ করা হয়:\n\n১. সিস্টেম আর্থিং (নিউট্রাল আর্থিং):\nট্রান্সফরমার বা জেনারেটরের নিউট্রাল তারকে সরাসরি মাটির সাথে যুক্ত করা। এর প্রধান কাজ হলো:\n• মাটির সাপেক্ষে সিস্টেম নিউট্রাল ভোল্টেজ স্থিতিশীল রাখা।\n• এক ফেজে ফল্ট হলে অন্য ফেজগুলিতে অতিরিক্ত ভোল্টেজ বৃদ্ধি রোধ করা।\n• ট্রান্সফরমারের স্টার পয়েন্টে ফল্ট কারেন্ট ফিরে যাওয়ার জন্য একটি সুনির্দিষ্ট কম-প্রতিবাধার পথ নিশ্চিত করা যাতে রিলে কাজ করে।\n\n২. ইকুইপমেন্ট আর্থিং (প্রটেক্টিভ আর্থিং):\nযন্ত্রপাতির বহিরাগত ধাতব বডি ও প্যানেল ফ্রেমকে আর্থিং তারের সাথে যুক্ত করা। স্বাভাবিক অবস্থায় এতে কোনো কারেন্ট থাকে না। ইনসুলেশন নষ্ট হলে এটি নিশ্চিত করে:\n• মেটাল বডির স্পর্শ ভোল্টেজ ৫০ ভোল্টের নিচে থাকে।\n• আর্থ ফল্ট লুপ প্রতিবাধা (Zs) এত কম থাকে যাতে পর্যাপ্ত ফল্ট কারেন্ট তৈরি হয় এবং ব্রেকার ০.৪ সেকেন্ডের মধ্যে ট্রিপ করে।\n\nআর্থ ইলেকট্রোড রোধের ভৌত কাঠামো:\nআর্থ রডের মোট রোধ মূলত রডটিকে ঘিরে থাকা মাটির বিভিন্ন স্তরের রোধের সমষ্টি। সূত্র: dR = ρ · dr / (2π r²)। মোট রোধের ৯০ শতাংশেরও বেশি রডের ২ থেকে ৩ মিটার ব্যাসার্ধের মাটির মধ্যে কেন্দ্রীভূত থাকে।'
  },
  formulas: [
    {
      id: 'f-earth-fault-loop-impedance',
      symbol: 'Z_s',
      expression: 'Z_s = Z_e + R_1 + R_2',
      title: {
        en: 'Earth Fault Loop Impedance',
        hi: 'अर्थ फॉल्ट लूप प्रतिबाधा',
        bn: 'আর্থ ফল্ট লুপ প্রতিবাধা'
      },
      description: {
        en: 'Total loop impedance through which earth fault current flows from the source, through phase conductor, to chassis, and returning via earth back to the source neutral.',
        hi: 'कुल लूप प्रतिबाधा जिसके माध्यम से अर्थ फॉल्ट धारा स्रोत से, फेज तार द्वारा, चेसिस तक और फिर जमीन से होते हुए न्यूट्रल में लौटती है।',
        bn: 'মোট লুপ প্রতিবাধা যার মধ্য দিয়ে ফল্ট কারেন্ট উৎস থেকে ফেজ তার, মেটাল বডি এবং মাটির রিটার্ন পথ দিয়ে নিউট্রালে ফিরে আসে।'
      },
      variables: [
        { symbol: 'Z_s', name: { en: 'Total earth fault loop impedance (Ω)', hi: 'कुल अर्थ फॉल्ट लूप प्रतिबाधा (Ω)', bn: 'মোট আর্থ ফল্ট লুপ প্রতিবাধা (Ω)' } },
        { symbol: 'Z_e', name: { en: 'External earth fault loop impedance of source (Ω)', hi: 'स्रोत की बाहरी लूप प्रतिबाधा (Ω)', bn: 'উৎস ও গ্রিডের বহিঃস্থ লুপ প্রতিবাধা (Ω)' } },
        { symbol: 'R_1', name: { en: 'Resistance of phase conductor (Ω)', hi: 'फेज तार का प्रतिरोध (Ω)', bn: 'ফেজ পরিবাহীর রোধ (Ω)' } },
        { symbol: 'R_2', name: { en: 'Resistance of protective conductor / earth return (Ω)', hi: 'सुरक्षात्मक अर्थ कंडक्टर का प्रतिरोध (Ω)', bn: 'আর্থিং পরিবাহীর রোধ (Ω)' } }
      ]
    },
    {
      id: 'f-disconnection-condition',
      symbol: 'I_a',
      expression: 'Z_s \le \frac{U_0}{I_a}',
      title: {
        en: 'Automatic Disconnection Condition (BS 7671 / IEC 60364)',
        hi: 'स्वचालित वियोग शर्त (IEC 60364)',
        bn: 'স্বয়ংক্রিয় সংযোগ বিচ্ছিন্নকরণ শর্ত (IEC 60364)'
      },
      description: {
        en: 'Ensures earth fault current is large enough to operate the overcurrent protective device within the statutory disconnection time (0.4 s for 230 V socket circuits).',
        hi: 'यह सुनिश्चित करता है कि अर्थ फॉल्ट धारा इतनी बड़ी हो कि सुरक्षा उपकरण 0.4 सेकंड में परिपथ को काट सके।',
        bn: 'নিশ্চিত করে যে ফল্ট কারেন্টের মান ০.৪ সেকেন্ডের মধ্যে ওভারকারেন্ট প্রোটেকশন ডিভাইস ট্রিপ করানোর মতো যথেষ্ট উচ্চ।'
      },
      variables: [
        { symbol: 'U_0', name: { en: 'Nominal AC RMS phase voltage to earth (e.g., 230 V)', hi: 'पृथ्वी के सापेक्ष नाममात्र फेज वोल्टेज (230 V)', bn: 'মাটির সাপেক্ষে ফেজ ভোল্টেজ (২৩০ V)' } },
        { symbol: 'I_a', name: { en: 'Current causing automatic disconnection in required time (A)', hi: 'निर्धारित समय में वियोग कराने वाली आवश्यक धारा (A)', bn: 'নির্দিষ্ট সময়ে সংযোগ বিচ্ছিন্ন করতে প্রয়োজনীয় কারেন্ট (A)' } }
      ]
    },
    {
      id: 'f-pipe-rod-electrode-resistance',
      symbol: 'R_rod',
      expression: 'R = \frac{\rho}{2 \pi L} \ln\left(\frac{4L}{d}\right)',
      title: {
        en: 'Driven Rod Earth Electrode Resistance (IS 3043)',
        hi: 'रॉड अर्थ इलेक्ट्रोड प्रतिरोध (IS 3043)',
        bn: 'রড আর্থ ইলেকট্রোড রোধ সমীকরণ (IS 3043)'
      },
      description: {
        en: 'Calculates the theoretical resistance to earth of a vertically driven cylindrical rod or pipe electrode.',
        hi: 'ऊर्ध्वाधर रूप से संचालित बेलनाकार रॉड या पाइप इलेक्ट्रोड के पृथ्वी प्रतिरोध की गणना करता है।',
        bn: 'মাটিতে উল্লম্বভাবে প্রোথিত সিলিন্ডার আকৃতির রড বা পাইপ ইলেকট্রোডের আর্থ রোধ গণনা করে।'
      },
      variables: [
        { symbol: 'R', name: { en: 'Electrode resistance to earth (Ω)', hi: 'इलेक्ट्रोड का पृथ्वी प्रतिरोध (Ω)', bn: 'ইলেকট্রোডের আর্থ রোধ (Ω)' } },
        { symbol: 'ρ', name: { en: 'Soil resistivity (Ω·m)', hi: 'मिट्टी की प्रतिरोधकता (Ω·m)', bn: 'মাটির আপেক্ষিক রোধ (Ω·m)' } },
        { symbol: 'L', name: { en: 'Driven length of the rod in ground (m)', hi: 'जमीन में रॉड की लंबाई (m)', bn: 'মাটিতে প্রোথিত রডের দৈর্ঘ্য (m)' } },
        { symbol: 'd', name: { en: 'Diameter of the rod (m)', hi: 'रॉड का व्यास (m)', bn: 'রডের ব্যাস (m)' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-ch15-l03-earthing-mechanics',
      title: {
        en: 'Touch and Step Voltage Control and Earthing Systems',
        hi: 'स्पर्श एवं चरण वोल्टेज नियंत्रण और अर्थिंग प्रणालियाँ',
        bn: 'স্পর্শ ও পদক্ষেপ ভোল্টেজ নিয়ন্ত্রণ এবং আর্থিং পদ্ধতি'
      },
      content: {
        en: 'To protect human personnel in industrial substations and domestic installations, two spatial voltage concepts are strictly regulated:\n\n1. Touch Voltage (E_touch):\nThe potential difference between a person’s hand in contact with an energized metallic frame and the ground surface on which their feet stand. During an earth fault, the metallic frame rises to potential V_fault = I_fault · R_earth. If the earth resistance R_earth is too high, V_fault can exceed 100-200 V, posing an immediate electrocution hazard.\n\n2. Step Voltage (E_step):\nThe potential difference between two points on the ground surface separated by a distance of one pace (standardized as 1.0 meter) during fault current injection into soil. As current fans out radially from the earth electrode, the soil surface potential drops steeply according to a logarithmic potential gradient curve. A person walking near the electrode experiences a potential difference across their feet, driving current through their legs and lower abdomen.\n\n3. International Earthing Arrangements (IEC 60364-3):\n• TN-S System: Separate Neutral (N) and Protective Earth (PE) conductors throughout the installation. Most reliable and safe for domestic and commercial facilities.\n• TN-C-S System (PME): Combined PEN conductor from substation transformer to consumer intake, then split into separate PE and Neutral buses.\n• TT System: Supply neutral is earthed at transformer, and consumer frames are connected to an independent local earth electrode. Because earth return path through soil has relatively high resistance (10 to 100 Ω), an RCCB/RCD is strictly mandatory to clear faults.\n• IT System: Supply neutral is isolated or earthed through high impedance; exposed frames are solidly earthed. High reliability; first fault does not cause disconnection (ideal for hospital operating theatres and continuous chemical plants).',
        hi: 'औद्योगिक सबस्टेशनों और घरेलू प्रतिष्ठानों में दो मुख्य वोल्टेज अवधारणाओं को नियंत्रित किया जाता है:\n\n1. स्पर्श वोल्टेज (Touch Voltage):\nउपकरण के धातु आवरण (जिस पर हाथ है) और जमीन की सतह (जिस पर पैर हैं) के बीच का विभवांतर। यदि अर्थिंग प्रतिरोध अधिक है, तो आवरण का वोल्टेज 200 V तक बढ़ सकता है, जिससे झटका लग सकता है।\n2. चरण वोल्टेज (Step Voltage):\nजमीन पर एक मीटर (एक कदम) की दूरी पर स्थित दो बिंदुओं के बीच का विभवांतर जब फॉल्ट करंट मिट्टी में फैलता है। सबस्टेशन के पास चलने वाले व्यक्ति के दोनों पैरों के बीच यह विभवांतर करंट प्रवाहित कर सकता है।\n3. प्रमुख अंतरराष्ट्रीय अर्थिंग प्रणालियाँ (IEC 60364):\n• TN-S: न्यूट्रल और अर्थ तार पूरी प्रणाली में अलग-अलग होते हैं (सर्वाधिक सुरक्षित)।\n• TN-C-S: ट्रांसफार्मर से घर तक संयुक्त PEN तार, फिर अलग न्यूट्रल और अर्थ।\n• TT: ट्रांसफार्मर का अपना अर्थ और उपभोक्ता का अपना स्वतंत्र अर्थ इलेक्ट्रोड। इसमें आरसीसीबी लगाना अनिवार्य है।\n• IT: न्यूट्रल पूरी तरह जमीन से अलग (आइसोलेटेड)। पहले फॉल्ट पर बिजली बंद नहीं होती (अस्पतालों और खदानों के लिए उपयुक्त)।',
        bn: 'সাবস্টেশন ও আবাসিক ভবনে কর্মীদের সুরক্ষায় দুটি স্থানিক ভোল্টেজ অত্যন্ত গুরুত্বপূর্ণ:\n\n১. স্পর্শ ভোল্টেজ (Touch Voltage):\nহাত দিয়ে স্পর্শ করা ধাতব ফ্রেম এবং পায়ের নিচে মাটির পৃষ্ঠের মধ্যকার বিভব পার্থক্য। আর্থিং রোধ বেশি হলে ফল্টের সময় বডির ভোল্টেজ বিপদজনক মাত্রায় বেড়ে যায়।\n২. পদক্ষেপ ভোল্টেজ (Step Voltage):\nফল্ট কারেন্ট মাটিতে ছড়ানোর সময় মাটির পৃষ্ঠে এক কদম (১ মিটার) দূরত্বের দুটি বিন্দুর মধ্যে সৃষ্ট বিভব পার্থক্য। রডের কাছাকাছি হাঁটার সময় দুই পায়ের মধ্যে এই ভোল্টেজের কারণে শক লাগে।\n৩. আন্তর্জাতিক আর্থিং কনফিগারেশন (IEC 60364):\n• TN-S সিস্টেম: নিউট্রাল (N) এবং প্রটেক্টিভ আর্থ (PE) সম্পূর্ণ পৃথক। সর্বাধিক নিরাপদ।\n• TN-C-S সিস্টেম: মূল সরবরাহ লাইনে যৌথ PEN তার, ভবনে এসে পৃথক N ও PE বাসে বিভক্ত হয়।\n• TT সিস্টেম: গ্রাহকের নিজস্ব পৃথক আর্থ ইলেকট্রোড থাকে। ফল্ট লুপ রোধ বেশি হওয়ায় আরসিসিবি বাধ্যতামূলক।\n• IT সিস্টেম: নিউট্রাল মাটির সাথে সরাসরি যুক্ত থাকে না। প্রথম ফল্টে বিদ্যুৎ বিচ্ছিন্ন হয় না (হাসপাতালের ওটি ও জাহাজে ব্যবহৃত)।'
      },
      schematicId: 'circuit-ch15-earthing-system-fault-path'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch15-l03-01',
      problem: {
        en: 'A 230 V single-phase domestic circuit is protected by a 16 A Type B Miniature Circuit Breaker (MCB). According to IEC 60898, a Type B MCB requires an instantaneous trip current of 5 times its rating (I_a = 5 · I_n) to clear a short-circuit/fault within 0.1 s.\n(a) Calculate the minimum fault current I_a required for instantaneous magnetic tripping.\n(b) Calculate the maximum permissible earth fault loop impedance Z_s to guarantee automatic disconnection.\n(c) If the measured Z_s of the installation is 3.8 Ω, determine whether the installation complies with safety standards.',
        hi: 'एक 230 V सिंगल-फेज घरेलू सर्किट 16 A टाइप B मिनिएचर सर्किट ब्रेकर (MCB) द्वारा सुरक्षित है। IEC 60898 के अनुसार, टाइप B MCB को 0.1 s में फॉल्ट हटाने के लिए अपनी रेटिंग के 5 गुना (I_a = 5 · I_n) तात्कालिक ट्रिप करंट की आवश्यकता होती है।\n(a) तात्कालिक चुंबकीय ट्रिपिंग के लिए आवश्यक न्यूनतम फॉल्ट धारा I_a की गणना कीजिए।\n(b) स्वचालित वियोग की गारंटी के लिए अधिकतम अनुमत अर्थ फॉल्ट लूप प्रतिबाधा Z_s की गणना कीजिए।\n(c) यदि स्थापना का मापा गया Z_s मान 3.8 Ω है, तो निर्धारित कीजिए कि क्या यह सुरक्षा मानकों का अनुपालन करता है।',
        bn: 'একটি ২৩০ V সিঙ্গেল-ফেজ সার্কিট ১৬ A টাইপ বি এমসিবি (MCB) দ্বারা সুরক্ষিত। IEC 60898 অনুসারে টাইপ বি এমসিবি ০.১ সেকেন্ডে ট্রিপ করার জন্য রেটিংয়ের ৫ গুণ কারেন্ট (I_a = ৫ · I_n) প্রয়োজন।\n(a) তাৎক্ষণিক ট্রিপিংয়ের জন্য প্রয়োজনীয় ফল্ট কারেন্ট I_a নির্ণয় করুন।\n(b) স্বয়ংক্রিয় সংযোগ বিচ্ছিন্নকরণের জন্য সর্বোচ্চ অনুমোদিত আর্থ ফল্ট লুপ প্রতিবাধা Z_s নির্ণয় করুন।\n(c) পরিমাপকৃত Z_s মান ৩.৮ Ω হলে সিস্টেমটি মানসম্মত কি না যাচাই করুন।'
      },
      solution: {
        en: 'Given:\n• Nominal Phase Voltage (U_0) = 230 V\n• MCB Rating (I_n) = 16 A, Type B (Trip multiplier = 5)\n• Measured loop impedance (Z_s_measured) = 3.8 Ω\n\nStep 1: Calculate Minimum Required Trip Current (I_a)\nI_a = 5 · I_n = 5 · 16 A = 80 A\n\nStep 2: Calculate Maximum Permissible Earth Loop Impedance (Z_s_max)\nCondition: Z_s ≤ U_0 / I_a\nZ_s_max = 230 V / 80 A = 2.875 Ω ≈ 2.88 Ω\n\nStep 3: Safety Compliance Evaluation\n• Permissible maximum Z_s = 2.88 Ω\n• Actual measured Z_s = 3.80 Ω\nSince measured Z_s (3.8 Ω) > permissible Z_s (2.88 Ω), the prospective earth fault current would be:\nI_fault = 230 V / 3.8 Ω = 60.5 A\nBecause 60.5 A is less than the required 80 A, the MCB will NOT trip instantaneously via its magnetic solenoid! It would take several seconds to trip thermally, exposing occupants to prolonged lethal touch voltages.\n\nConclusion: Non-compliant! Remedial action required: improve bonding/earth conductors, or install a 30 mA RCCB.',
        hi: 'चरण 1: आवश्यक ट्रिप धारा (I_a)\nI_a = 5 × 16 = 80 A\n\nचरण 2: अधिकतम अनुमत लूप प्रतिबाधा (Z_s_max)\nZ_s_max = U_0 / I_a = 230 / 80 = 2.875 Ω\n\nचरण 3: सुरक्षा मूल्यांकन\nमापा गया Z_s = 3.8 Ω, जो अनुमत 2.88 Ω से अधिक है।\nवास्तविक फॉल्ट धारा = 230 / 3.8 = 60.5 A होगी, जो आवश्यक 80 A से कम है। MCB तुरंत ट्रिप नहीं होगा और जानलेवा स्थिति बनेगी।\nअतः यह स्थापना असुरक्षित और अमान्य है।',
        bn: 'ধাপ ১: প্রয়োজনীয় ট্রিপ কারেন্ট (I_a)\nI_a = ৫ × ১৬ = ৮০ A\n\nধাপ ২: সর্বোচ্চ অনুমোদিত লুপ প্রতিবাধা (Z_s_max)\nZ_s_max = ২৩০ / ৮০ = ২.৮৭৫ Ω\n\nধাপ ৩: নিরাপত্তা যাচাই\nপরিমাপকৃত Z_s = ৩.৮ Ω, যা অনুমোদিত ২.৮৮ Ω অপেক্ষা বেশি।\nফল্ট কারেন্ট = ২৩০ / ৩.৮ = ৬০.৫ A, যা ৮০ A এর কম হওয়ায় এমসিবি তাৎক্ষণিকভাবে ট্রিপ করবে না।\nঅতএব এটি অনিরাপদ ও বাতিলযোগ্য। প্রতিকার: আর্থিং উন্নত করতে হবে অথবা ৩০ mA আরসিসিবি স্থাপন করতে হবে।'
      },
      givenValues: { 'U_0': '230 V', 'I_n': '16 A', 'Type': 'B', 'Z_s_measured': '3.8 Ω' },
      finalAnswer: {
        en: 'I_a = 80 A; Maximum allowable Z_s = 2.88 Ω. The installation (3.8 Ω) FAILS safety compliance.',
        hi: 'I_a = 80 A; अधिकतम अनुमत Z_s = 2.88 Ω। स्थापना (3.8 Ω) सुरक्षा अनुपालन में विफल है।',
        bn: 'I_a = ৮০ A; সর্বোচ্চ অনুমোদিত Z_s = ২.৮৮ Ω। ইনস্টলেশনটি (৩.৮ Ω) নিরাপত্তা শর্ত পূরণে ব্যর্থ।'
      }
    },
    {
      id: 'ex-ch15-l03-02',
      problem: {
        en: 'A mild steel pipe earth electrode of length L = 3.0 m and external diameter d = 0.04 m (40 mm) is driven vertically into moist loam soil with a measured soil resistivity ρ = 40 Ω·m. Using the IS 3043 formula R = [ρ / (2π L)] · ln(4L / d), calculate the theoretical resistance to earth of this single electrode.',
        hi: 'लंबाई L = 3.0 m और बाहरी व्यास d = 0.04 m (40 mm) का एक माइल्ड स्टील पाइप अर्थ इलेक्ट्रोड 40 Ω·m मिट्टी की प्रतिरोधकता (ρ) वाली नम दोमट मिट्टी में लंबवत संचालित किया गया है। IS 3043 सूत्र R = [ρ / (2π L)] · ln(4L / d) का उपयोग करके इस एकल इलेक्ट्रोड के पृथ्वी प्रतिरोध की गणना कीजिए।',
        bn: 'L = ৩.০ মিটার দৈর্ঘ্য এবং d = ০.০৪ মিটার (৪০ মিমি) ব্যাসের একটি মাইল্ড স্টিল পাইপ আর্থ ইলেকট্রোড ৪০ Ω·m মাটির আপেক্ষিক রোধবিশিষ্ট ভেজা মাটিতে উল্লম্বভাবে স্থাপন করা হলো। IS 3043 সূত্রানুসারে একক ইলেকট্রোডের তাত্ত্বিক আর্থ রোধ নির্ণয় করুন।'
      },
      solution: {
        en: 'Given:\n• Soil resistivity (ρ) = 40 Ω·m\n• Electrode driven length (L) = 3.0 m\n• Electrode diameter (d) = 0.04 m\n\nStep 1: State Formula (IS 3043 / BS 7430)\nR = [ρ / (2 · π · L)] · ln(4L / d)\n\nStep 2: Calculate Geometric Ratio\n4L / d = (4 · 3.0) / 0.04 = 12.0 / 0.04 = 300\nNatural log: ln(300) ≈ 5.7038\n\nStep 3: Calculate Prefactor\nρ / (2 · π · L) = 40 / (2 · 3.14159 · 3.0) = 40 / 18.8496 ≈ 2.122 Ω\n\nStep 4: Total Resistance to Earth\nR = 2.122 · 5.7038 ≈ 12.10 Ω\n\nEngineering Note: In a TT domestic installation, 12.1 Ω is an excellent earth electrode resistance value (well below the 200 Ω stable TT limit).',
        hi: 'चरण 1: सूत्र\nR = [ρ / (2π L)] × ln(4L / d)\n\nचरण 2: मान रखना\n4L / d = 12 / 0.04 = 300\nln(300) = 5.704\n\nचरण 3: गुणांक\n40 / (2 × 3.1416 × 3) = 2.122 Ω\n\nचरण 4: कुल प्रतिरोध\nR = 2.122 × 5.704 = 12.10 Ω',
        bn: 'ধাপ ১: সূত্র প্রয়োগ\nR = [ρ / (2π L)] × ln(4L / d)\n\nধাপ ২: অনুপাত ও লগারিদম\n4L / d = ১২ / ০.০৪ = ৩০০\nln(৩০০) = ৫.৭০৪\n\nধাপ ৩: ধ্রুবক গণনা\n৪০ / (২ × ৩.১৪১৬ × ৩) = ২.১২২\n\nধাপ ৪: মোট আর্থ রোধ\nR = ২.১২২ × ৫.৭০৪ = ১২.১০ Ω'
      },
      givenValues: { 'ρ': '40 Ω·m', 'L': '3.0 m', 'd': '0.04 m' },
      finalAnswer: {
        en: 'Theoretical earth electrode resistance R ≈ 12.1 Ω',
        hi: 'सैद्धांतिक अर्थ इलेक्ट्रोड प्रतिरोध R ≈ 12.1 Ω',
        bn: 'তাত্ত্বিক আর্থ ইলেকট্রোড রোধ R ≈ ১২.১ Ω'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Design of substation earthing grids using meshed copper conductors to maintain touch and step voltages within IEEE 80 safety limits.',
      'Bentonite clay and chemical earthing compound treatment to reduce electrode resistance in rocky or dry sandy terrains.',
      'Equipment bonding of metal pipework, structural steel, and lightning protection systems to a single Master Earth Bar (equipotential bonding).',
      'Periodic soil resistivity testing via Wenner 4-pin method and electrode testing via Fall-of-Potential 3-pin method.'
    ],
    hi: [
      'सबस्टेशन में टच और स्टेप वोल्टेज को सुरक्षित सीमाओं में रखने के लिए मेश अर्थिंग ग्रिड का डिजाइन।',
      'पथरीली या रेतीली मिट्टी में अर्थ प्रतिरोध घटाने के लिए बेंटोनाइट क्ले और केमिकल अर्थिंग का उपयोग।',
      'पाइपलाइन, स्ट्रक्चरल स्टील और तड़ित चालकों को मुख्य अर्थ बार से जोड़कर समविभव बॉन्डिंग बनाना।',
      'वेनर 4-पिन विधि द्वारा मिट्टी की प्रतिरोधकता और 3-पिन विधि द्वारा अर्थ इलेक्ट्रोड की आवधिक जांच।'
    ],
    bn: [
      'সাবস্টেশনে স্পর্শ ও পদক্ষেপ ভোল্টেজ নিয়ন্ত্রণে তামার তারের জালিকাযুক্ত আর্থিং গ্রিড স্থাপন।',
      'পাথুরে বা শুষ্ক বালুময় মাটিতে আর্থ রোধ কমাতে বেন্টোনাইট ও রাসায়নিক যৌগ প্রয়োগ।',
      'ভবনের পাইপলাইন, স্টিল স্ট্রাকচার ও বজ্রনিরোধককে একক মাস্টার আর্থ বারে যুক্ত করে সমবিভব নিশ্চিতকরণ।',
      'ওয়েনার ৪-পিন পদ্ধতিতে মাটির রোধ এবং ৩-পিন পদ্ধতিতে ইলেকট্রোডের কার্যক্ষমতা নিয়মিত পরীক্ষা করা।'
    ]
  },
  importantPoints: {
    en: [
      'System earthing stabilizes neutral potential; equipment earthing prevents lethal chassis touch voltages.',
      'Over 90% of earth electrode resistance is concentrated in the immediate surrounding soil within a 2 to 3-meter radius.',
      'A low earth fault loop impedance (Zs) is vital: if Zs is too high, the fault current will be too low to trip the circuit breaker.',
      'In a TT earthing system, soil resistance is naturally high (10-100 Ω); therefore, an RCCB is mandatory because MCBs cannot trip reliably on ground faults.',
      'Touch voltage on exposed metal parts must not exceed 50 V AC in dry environments (IEC 60364).'
    ],
    hi: [
      'सिस्टम अर्थिंग न्यूट्रल को स्थिर रखती है; उपकरण अर्थिंग बॉडी पर जानलेवा वोल्टेज बनने से रोकती है।',
      'अर्थ इलेक्ट्रोड के कुल प्रतिरोध का 90% से अधिक हिस्सा उसके आसपास 2-3 मीटर की मिट्टी में होता है।',
      'कम लूप प्रतिबाधा (Zs) अनिवार्य है: यदि Zs अधिक हुआ तो फॉल्ट करंट ब्रेकर को ट्रिप नहीं करा पाएगी।',
      'TT सिस्टम में मिट्टी का प्रतिरोध अधिक होता है; इसलिए आरसीसीबी लगाना अनिवार्य है क्योंकि सामान्य MCB ट्रिप नहीं हो पाती।',
      'खुले धातु भागों पर स्पर्श वोल्टेज सामान्य स्थिति में 50 V से अधिक नहीं होना चाहिए।'
    ],
    bn: [
      'সিস্টেম আর্থিং নিউট্রাল বিভব স্থিতিশীল রাখে; ইকুইপমেন্ট আর্থিং মেটাল বডিতে প্রাণঘাতী ভোল্টেজ জমতে দেয় না।',
      'আর্থ ইলেকট্রোডের ৯০% রোধ রডের চারপাশের ২ থেকে ৩ মিটার ব্যাসার্ধের মাটির মধ্যে সীমাবদ্ধ।',
      'কম ফল্ট লুপ প্রতিবাধা (Zs) আবশ্যক: Zs বেশি হলে ফল্ট কারেন্ট কমে যাবে এবং ব্রেকার ট্রিপ করবে না।',
      'TT সিস্টেমে মাটির রোধ তুলনামূলক বেশি থাকে, তাই শুধু এমসিবি দিয়ে সুরক্ষা সম্ভব নয়—আরসিসিবি বাধ্যতামূলক।',
      'শুষ্ক পরিবেশে উন্মুক্ত ধাতব অংশে স্পর্শ ভোল্টেজ কোনোভাবেই ৫০ V AC অতিক্রম করা উচিত নয়।'
    ]
  },
  commonMistakes: {
    en: [
      'Assuming that connecting a machine frame to the earth automatically makes it safe, even if the earth loop impedance is too high to trip the breaker.',
      'Confusing Neutral with Protective Earth (PE); neutral carries regular load current, while PE carries current ONLY under fault conditions.',
      'Pouring salt and water randomly into an earth pit without understanding that corrosion from raw salt accelerates the destruction of the copper/GI electrode.',
      'Believing that an MCB alone protects against electric shock in high-resistance TT installations without an RCCB.'
    ],
    hi: [
      'यह मान लेना कि उपकरण को जमीन से जोड़ देने मात्र से वह सुरक्षित हो गया, चाहे अर्थ प्रतिरोध कितना भी अधिक क्यों न हो।',
      'न्यूट्रल और अर्थ वायर को एक जैसा समझना; न्यूट्रल सामान्य लोड धारा ले जाता है जबकि अर्थ केवल फॉल्ट धारा ले जाता है।',
      'अर्थ पिट में अत्यधिक नमक डालना, जिससे इलेक्ट्रोड तेजी से संक्षारित (जंग लगकर नष्ट) हो जाता है।',
      'यह सोचना कि उच्च प्रतिरोध वाले TT सिस्टम में बिना RCCB के केवल MCB झटके से बचा सकती है।'
    ],
    bn: [
      'মনে করা যে শুধু তার দিয়ে মাটির সাথে জোড়া দিলেই যন্ত্র নিরাপদ, অথচ উচ্চ লুপ রোধের কারণে ব্রেকার ট্রিপ না করলে ঝুঁকি থেকেই যায়।',
      'নিউট্রাল এবং আর্থ তারকে গুলিয়ে ফেলা; নিউট্রালে নিয়মিত লোড কারেন্ট থাকে, কিন্তু আর্থে শুধু ফল্ট হলেই কারেন্ট যায়।',
      'সরাসরি অতিরিক্ত কাঁচা লবণ ঢেলে রড ক্ষয়প্রাপ্ত করে বিনষ্ট করা।',
      'উচ্চ রোধযুক্ত TT সিস্টেমে আরসিসিবি ছাড়া কেবল এমসিবির ওপর নির্ভর করে বসে থাকা।'
    ]
  },
  keyTakeaways: {
    en: [
      'Earthing creates a controlled low-impedance path to divert fault currents and rapidly trip protective devices.',
      'Earth fault loop impedance Zs governs disconnection time; Zs must satisfy Zs ≤ U0 / Ia.',
      'Soil resistivity (ρ) is the dominant factor determining electrode resistance and varies dramatically with moisture and mineral content.',
      'TN-S and TN-C-S systems provide metallic return paths; TT systems rely on soil return and require RCCB protection.'
    ],
    hi: [
      'अर्थिंग फॉल्ट करंट को सुरक्षित रूप से निकालने और सुरक्षा उपकरणों को तेजी से ट्रिप कराने के लिए कम प्रतिबाधा वाला मार्ग बनाती है।',
      'लूप प्रतिबाधा Zs वियोग समय निर्धारित करती है और Zs ≤ U0 / Ia का पालन करना आवश्यक है।',
      'मिट्टी की प्रतिरोधकता इलेक्ट्रोड प्रतिरोध तय करने वाला सबसे बड़ा कारक है।',
      'TN-S और TN-C-S प्रणालियों में धात्विक वापसी मार्ग होता है; TT प्रणाली में आरसीसीबी अनिवार्य है।'
    ],
    bn: [
      'আর্থিং একটি নিম্ন-প্রতিবাধার পথ নিশ্চিত করে ফল্ট কারেন্ট অপসারণ ও দ্রুত প্রোটেকশন ডিভাইস ট্রিপ করায়।',
      'আর্থ লুপ প্রতিবাধা Zs স্বয়ংক্রিয় লাইন কাটার মূল নিয়ন্ত্রক (Zs ≤ U0 / Ia)।',
      'মাটির আপেক্ষিক রোধ (ρ) আর্থিং ইলেকট্রোডের মোট রোধের প্রধান নিয়ামক।',
      'TN সিস্টেমে ধাতব রিটার্ন পথ থাকে; TT সিস্টেম মাটির পরিবাহিতার ওপর নির্ভর করায় আরসিসিবি অত্যাবশ্যক।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch15-l03-01',
      question: {
        en: 'What is the primary safety purpose of equipment earthing (protective bonding)?',
        hi: 'उपकरण अर्थिंग (सुरक्षात्मक बॉन्डिंग) का प्राथमिक सुरक्षा उद्देश्य क्या है?',
        bn: 'ইকুইপমেন্ট আর্থিংয়ের (সুরক্ষামূলক বন্ধন) প্রাথমিক উদ্দেশ্য কী?'
      },
      options: [
        { id: 'opt-1', text: { en: 'To increase the speed of the motor', hi: 'मोटर की गति बढ़ाना', bn: 'মোটরের গতি বৃদ্ধি করা' } },
        { id: 'opt-2', text: { en: 'To maintain exposed metal enclosures at or near ground potential and provide a low-impedance path to trip overcurrent protection during faults', hi: 'धातु आवरणों को ग्राउंड विभव पर रखना और फॉल्ट के दौरान सुरक्षा उपकरणों को ट्रिप करने के लिए कम प्रतिबाधा का मार्ग प्रदान करना', bn: 'ধাতব বডিকে গ্রাউন্ড বিভবে রাখা এবং ফল্টের সময় প্রোটেকশন ডিভাইস ট্রিপ করানোর জন্য নিম্ন-রোধের পথ তৈরি করা' } },
        { id: 'opt-3', text: { en: 'To provide a return path for everyday lighting loads', hi: 'दैनिक प्रकाश लोड के लिए वापसी मार्ग प्रदान करना', bn: 'নিয়মিত লাইটিং লোডের রিটার্ন পথ হিসেবে কাজ করা' } },
        { id: 'opt-4', text: { en: 'To step up the supply voltage to 1,000 V', hi: 'आपूर्ति वोल्टेज को 1,000 V तक बढ़ाना', bn: 'সরবরাহ ভোল্টেজ ১,০০০ ভোল্টে উন্নীত করা' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'Equipment earthing keeps the chassis near 0 V during an insulation failure and provides a low-impedance fault loop path to force large overcurrent that rapidly trips the fuse or MCB.',
        hi: 'उपकरण अर्थिंग चेसिस को 0 V के करीब रखती है और कम प्रतिबाधा का मार्ग देकर फ्यूज या MCB को तेजी से ट्रिप कराती है।',
        bn: 'ইকুইপমেন্ট আর্থিং মেটাল বডিকে মাটির বিভবে রাখে এবং কম রোধের পথ নিশ্চিত করে ফিউজ বা এমসিবি দ্রুত ট্রিপ করায়।'
      }
    },
    {
      id: 'mcq-ch15-l03-02',
      question: {
        en: 'In a single-rod vertical earth electrode, where is over 90% of the total ground resistance concentrated?',
        hi: 'एकल-रॉड ऊर्ध्वाधर अर्थ इलेक्ट्रोड में कुल पृथ्वी प्रतिरोध का 90% से अधिक हिस्सा कहाँ केंद्रित होता है?',
        bn: 'একটি উল্লম্ব একক রড আর্থ ইলেকট্রোডের মোট আর্থ রোধের ৯০ শতাংশের বেশি কোথায় কেন্দ্রীভূত থাকে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Within the copper rod itself', hi: 'स्वयं तांबे की रॉड के भीतर', bn: 'তামার রডের নিজের ভেতরে' } },
        { id: 'opt-2', text: { en: 'Within a 2 to 3-meter radius of soil immediately surrounding the electrode', hi: 'इलेक्ट्रोड के ठीक चारों ओर 2 से 3 मीटर के दायरे की मिट्टी में', bn: 'ইলেকট্রোডের চারপাশের ২ থেকে ৩ মিটার ব্যাসার্ধের মাটির স্তরে' } },
        { id: 'opt-3', text: { en: 'At the exact center of the Earth’s core', hi: 'पृथ्वी के कोर के ठीक केंद्र में', bn: 'পৃথিবীর কেন্দ্রস্থলে' } },
        { id: 'opt-4', text: { en: 'In the overhead high-voltage clouds', hi: 'ऊपरी बादलों में', bn: 'আকাশের মেঘে' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'Due to concentric spherical soil shells, cross-sectional area increases with distance squared; hence, resistance is concentrated in the immediate 2-3 meter radius around the rod.',
        hi: 'संकेंद्रित मिट्टी के गोलों का क्षेत्रफल दूरी के साथ बढ़ता है, इसलिए 90% से अधिक प्रतिरोध रॉड के पास 2-3 मीटर की मिट्टी में होता है।',
        bn: 'দূরত্ব বাড়ার সাথে মাটির ক্ষেত্রফল বহুগুণ বৃদ্ধি পায়, ফলে ৯০% এর বেশি রোধ রডের নিকটবর্তী ২-৩ মিটারের মাটিতেই সীমাবদ্ধ থাকে।'
      }
    },
    {
      id: 'mcq-ch15-l03-03',
      question: {
        en: 'What is the primary technical difference between System Earthing and Equipment Earthing?',
        hi: 'सिस्टम अर्थिंग और उपकरण अर्थिंग के बीच प्राथमिक तकनीकी अंतर क्या है?',
        bn: 'সিস্টেম আর্থিং এবং ইকুইপমেন্ট আর্থিংয়ের মধ্যকার প্রধান প্রযুক্তিগত পার্থক্য কী?'
      },
      options: [
        { id: 'opt-1', text: { en: 'System earthing grounds the electrical neutral for supply stabilization; equipment earthing bonds non-current-carrying metal frames for personnel safety', hi: 'सिस्टम अर्थिंग न्यूट्रल को जोड़ती है; उपकरण अर्थिंग गैर-धारावाही धातु ढांचों को सुरक्षा के लिए जोड़ती है', bn: 'সিস্টেম আর্থিং বিদ্যুৎ সরবরাহের নিউট্রালকে গ্রাউন্ড করে; ইকুইপমেন্ট আর্থিং অ-পরিবাহী ধাতব কাঠামোকে মানব সুরক্ষায় আর্থ করে' } },
        { id: 'opt-2', text: { en: 'System earthing is only used on Mars', hi: 'सिस्टम अर्थिंग केवल मंगल ग्रह पर उपयोग की जाती है', bn: 'সিস্টেম আর্থিং শুধু মঙ্গল গ্রহে ব্যবহৃত হয়' } },
        { id: 'opt-3', text: { en: 'Equipment earthing must always use plastic wires', hi: 'उपकरण अर्थिंग में हमेशा प्लास्टिक के तारों का उपयोग होना चाहिए', bn: 'ইকুইপমেন্ট আর্থিংয়ে কেবল প্লাস্টিক তার ব্যবহার করতে হয়' } },
        { id: 'opt-4', text: { en: 'There is no difference; they are completely identical', hi: 'कोई अंतर नहीं है; वे बिल्कुल एक जैसे हैं', bn: 'উভয়ের মধ্যে কোনো পার্থক্য নেই' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'System earthing relates to power source conductors (transformer neutral point), whereas equipment earthing relates to dead metallic enclosures that must not become energized.',
        hi: 'सिस्टम अर्थिंग स्रोत (न्यूट्रल) से संबंधित है, जबकि उपकरण अर्थिंग बाहरी धातु ढांचों से संबंधित है।',
        bn: 'সিস্টেম আর্থিং পাওয়ার সিস্টেমের নিউট্রালের সাথে সম্পর্কিত, আর ইকুইপমেন্ট আর্থিং যন্ত্রপাতির মেটাল বডির সাথে সম্পর্কিত।'
      }
    },
    {
      id: 'mcq-ch15-l03-04',
      question: {
        en: 'What is "Step Voltage" in an electrical substation?',
        hi: 'विद्युत सबस्टेशन में "चरण वोल्टेज (Step Voltage)" क्या है?',
        bn: 'বৈদ্যুতিক সাবস্টেশনে "পদক্ষেপ ভোল্টেজ (Step Voltage)" বলতে কী বোঝায়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'The potential difference between two points on the ground separated by one normal pace (1.0 meter)', hi: 'जमीन पर एक सामान्य कदम (1.0 मीटर) की दूरी पर स्थित दो बिंदुओं के बीच का विभवांतर', bn: 'মাটির পৃষ্ঠে এক কদম (১.০ মিটার) দূরত্বের দুটি বিন্দুর মধ্যবর্তী বিভব পার্থক্য' } },
        { id: 'opt-2', text: { en: 'The voltage produced by walking up a wooden staircase', hi: 'लकड़ी की सीढ़ी पर चढ़ने से उत्पन्न वोल्टेज', bn: 'কাঠের সিঁড়ি বেয়ে ওঠার ভোল্টেজ' } },
        { id: 'opt-3', text: { en: 'The voltage of a digital smartwatch', hi: 'डिजिटल घड़ी का वोल्टेज', bn: 'স্মার্ট ঘড়ির ভোল্টেজ' } },
        { id: 'opt-4', text: { en: 'The voltage required to turn on a step motor', hi: 'स्टेप मोटर चालू करने के लिए आवश्यक वोल्टेज', bn: 'স্টেপ মোটর চালুর ভোল্টেজ' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Step voltage is the potential gradient experienced across the span of a person’s feet (standardized at 1 meter) when fault current discharges into earth.',
        hi: 'चरण वोल्टेज जमीन में फॉल्ट धारा बहने पर एक व्यक्ति के दोनों पैरों (1 मीटर) के बीच का विभवांतर होता है।',
        bn: 'ফল্ট কারেন্ট মাটিতে প্রবেশের সময় মাটির বিভব পরিবর্তনের কারণে দুই পায়ের মধ্যকার (১ মিটার) বিভব পার্থক্যই স্টেপ ভোল্টেজ।'
      }
    },
    {
      id: 'mcq-ch15-l03-05',
      question: {
        en: 'In an IEC 60364 "TT" earthing system, why is a Residual Current Circuit Breaker (RCCB/RCD) practically mandatory?',
        hi: 'IEC 60364 "TT" अर्थिंग सिस्टम में अवशिष्ट धारा सर्किट ब्रेकर (RCCB) व्यावहारिक रूप से अनिवार्य क्यों है?',
        bn: 'IEC 60364 "TT" আর্থিং সিস্টেমে রেসিডুয়াল কারেন্ট সার্কিট ব্রেকার (RCCB) কার্যত বাধ্যতামূলক কেন?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Because TT systems use wireless electricity', hi: 'क्योंकि TT सिस्टम वायरलेस बिजली का उपयोग करते हैं', bn: 'কারণ TT সিস্টেম তারবিহীন বিদ্যুৎ ব্যবহার করে' } },
        { id: 'opt-2', text: { en: 'Because the earth return path through soil has high resistance (10–100 Ω), limiting fault current below the instantaneous trip threshold of standard MCBs', hi: 'क्योंकि मिट्टी के माध्यम से अर्थ वापसी मार्ग का प्रतिरोध उच्च (10-100 Ω) होता है, जिससे फॉल्ट करंट सामान्य MCB को ट्रिप कराने के लिए बहुत कम रह जाता है', bn: 'কারণ মাটির মধ্য দিয়ে রিটার্ন পথের রোধ বেশি (১০-১০০ ওহম) হওয়ায় ফল্ট কারেন্টের মান সাধারণ এমসিবি ট্রিপ করানোর জন্য অপর্যাপ্ত হয়' } },
        { id: 'opt-3', text: { en: 'Because TT stands for "Total Transformer"', hi: 'क्योंकि TT का अर्थ "टोटल ट्रांसफार्मर" है', bn: 'কারণ TT মানে টোটাল ট্রান্সফরমার' } },
        { id: 'opt-4', text: { en: 'To make the installation 100% immune to lightning', hi: 'स्थापना को बिजली गिरने से 100% सुरक्षित करने के लिए', bn: 'বজ্রপাত থেকে ১০০% মুক্ত রাখতে' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'In TT systems, fault current must pass through the earth mass. With 20-50 Ω ground resistance, fault current is only 4-10 A at 230 V, which cannot trip a 16 A or 32 A MCB, but an RCCB trips at 30 mA.',
        hi: 'TT सिस्टम में मिट्टी का प्रतिरोध 20-50 Ω होने से फॉल्ट करंट केवल 4-10 A रहता है, जो MCB को ट्रिप नहीं करा सकता; परंतु RCCB 30 mA पर तुरंत ट्रिप हो जाता है।',
        bn: 'TT সিস্টেমে মাটির রোধ ২০-৫০ ওহম হওয়ায় ফল্ট কারেন্ট মাত্র ৪-১০ অ্যাম্পিয়ার হয়, যা এমসিবি ট্রিপ করাতে পারে না; কিন্তু আরসিসিবি ৩০ মিলিঅ্যাম্পিয়ারেই ট্রिप করে।'
      }
    },
    {
      id: 'mcq-ch15-l03-06',
      question: {
        en: 'If a 230 V circuit has an earth fault loop impedance Zs of 1.15 Ω, what is the prospective earth fault current?',
        hi: 'यदि 230 V परिपथ की अर्थ फॉल्ट लूप प्रतिबाधा Zs 1.15 Ω है, तो संभावित अर्थ फॉल्ट धारा क्या होगी?',
        bn: 'যদি ২৩০ V সার্কিটের আর্থ ফল্ট লুপ প্রতিবাধা Zs ১.১৫ Ω হয়, তবে সম্ভাব্য আর্থ ফল্ট কারেন্ট কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '20 A', hi: '20 A', bn: '২০ A' } },
        { id: 'opt-2', text: { en: '200 A', hi: '200 A', bn: '২০০ A' } },
        { id: 'opt-3', text: { en: '264.5 A', hi: '264.5 A', bn: '২৬৪.৫ A' } },
        { id: 'opt-4', text: { en: '0.005 A', hi: '0.005 A', bn: '০.০০৫ A' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'Prospective earth fault current I_pf = U_0 / Z_s = 230 V / 1.15 Ω = 200 A.',
        hi: 'I = U_0 / Z_s = 230 / 1.15 = 200 A।',
        bn: 'I = U_0 / Z_s = ২৩০ / ১.১৫ = ২০০ A।'
      }
    },
    {
      id: 'mcq-ch15-l03-07',
      question: {
        en: 'Which earthing configuration separates the Neutral (N) and Protective Earth (PE) conductors completely throughout the entire distribution network?',
        hi: 'कौन सा अर्थिंग विन्यास पूरे वितरण नेटवर्क में न्यूट्रल (N) और प्रोटेक्टिव अर्थ (PE) तारों को पूरी तरह से अलग रखता है?',
        bn: 'কোন আর্থিং কনফিগারেশনটি সমগ্র নেটওয়ার্কে নিউট্রাল (N) এবং প্রটেক্টিভ আর্থ (PE) তারকে সম্পূর্ণ পৃথক রাখে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'TN-C', hi: 'TN-C', bn: 'TN-C' } },
        { id: 'opt-2', text: { en: 'TN-S', hi: 'TN-S', bn: 'TN-S' } },
        { id: 'opt-3', text: { en: 'IT without earth', hi: 'बिना अर्थ वाला IT', bn: 'আর্থহীন IT' } },
        { id: 'opt-4', text: { en: 'Floating star connection', hi: 'फ्लोटिंग स्टार कनेक्शन', bn: 'ভাসমান স্টার সংযোগ' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'In a TN-S system (Terre-Neutre-Séparé), the neutral and protective earth conductors are strictly separated from source to load.',
        hi: 'TN-S प्रणाली में स्रोत से लोड तक न्यूट्रल और अर्थ कंडक्टर पूरी तरह अलग-अलग होते हैं।',
        bn: 'TN-S সিস্টেমে উৎস থেকে লোড পর্যন্ত নিউট্রাল ও প্রটেক্টিভ আর্থ তার দুটি সম্পূর্ণ আলাদা থাকে।'
      }
    },
    {
      id: 'mcq-ch15-l03-08',
      question: {
        en: 'What standard test method is used to measure soil resistivity using four equally spaced ground pins driven along a straight line?',
        hi: 'एक सीधी रेखा में संचालित चार समान दूरी वाले ग्राउंड पिन का उपयोग करके मिट्टी की प्रतिरोधकता मापने के लिए किस मानक परीक्षण विधि का उपयोग किया जाता है?',
        bn: 'একটি সরলরেখায় সমান দূরত্বে চারটি পিন স্থাপন করে মাটির আপেক্ষিক রোধ পরিমাপের স্ট্যান্ডার্ড পদ্ধতির নাম কী?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Wheatstone Bridge Method', hi: 'व्हीटस्टोन ब्रिज विधि', bn: 'হুইটস্টোন ব্রিজ পদ্ধতি' } },
        { id: 'opt-2', text: { en: 'Wenner 4-Pin Method', hi: 'वेनर 4-पिन विधि (Wenner Method)', bn: 'ওয়েনার ৪-পিন পদ্ধতি (Wenner Method)' } },
        { id: 'opt-3', text: { en: 'De Sauty Capacitance Method', hi: 'डी सॉटी धारिता विधि', bn: 'ডি সটি ক্যাপাসিট্যান্স পদ্ধতি' } },
        { id: 'opt-4', text: { en: 'Barkhausen Noise Method', hi: 'बार्कहाउसन शोर विधि', bn: 'বার্কহাউসেন নয়েজ পদ্ধতি' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'The Wenner four-pin (four-electrode) method injects current between outer pins and measures potential between inner pins to calculate soil resistivity ρ = 2π a R.',
        hi: 'वेनर 4-पिन विधि में बाहरी पिनों के बीच करंट प्रवाहित किया जाता है और आंतरिक पिनों के बीच विभव मापकर ρ = 2π a R की गणना की जाती है।',
        bn: 'ওয়েনার ৪-পিন পদ্ধতিতে প্রান্তীয় পিনে কারেন্ট প্রয়োগ করে অভ্যন্তরীণ পিনের বিভব মেপে মাটির রোধ ρ = 2π a R নির্ণয় করা হয়।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch15-l03-01',
      question: {
        en: 'Explain why raw salt should not be placed in direct contact with copper earth electrodes in modern chemical earthing pits.',
        hi: 'स्पष्ट कीजिए कि आधुनिक रासायनिक अर्थिंग गड्ढों में तांबे के अर्थ इलेक्ट्रोड के सीधे संपर्क में कच्चा नमक क्यों नहीं रखा जाना चाहिए।',
        bn: 'ব্যাখ্যা করুন কেন আধুনিক রাসায়নিক আর্থিং পিটে তামার ইলেকট্রোডের প্রত্যক্ষ সংস্পর্শে কাঁচা লবণ রাখা উচিত নয়।'
      },
      hint: {
        en: 'Chloride ions promote aggressive galvanic and pitting corrosion, destroying the electrode over time; bentonite clay or carbon-based conductive compounds are preferred.',
        hi: 'क्लोराइड आयन तीव्र संक्षारण को बढ़ावा देते हैं जिससे इलेक्ट्रोड नष्ट हो जाता है; बेंटोनाइट क्ले बेहतर विकल्प है।',
        bn: 'ক্লোরাইড আয়ন দ্রুত ক্ষয় তৈরি করে রড নষ্ট করে ফেলে; বেন্টোনাইট বা কার্বন যৌগ দীর্ঘস্থায়ী ও নিরাপদ।'
      }
    },
    {
      id: 'pq-ch15-l03-02',
      question: {
        en: 'Calculate the maximum allowable earth fault loop impedance Zs for a 32 A Type C MCB on a 230 V AC supply, given that Type C instantaneous tripping requires Ia = 10 · In.',
        hi: '230 V AC आपूर्ति पर 32 A टाइप C MCB के लिए अधिकतम अनुमत अर्थ फॉल्ट लूप प्रतिबाधा Zs की गणना कीजिए, यदि टाइप C के लिए Ia = 10 · In हो।',
        bn: '২৩০ V AC সরবরাহে একটি ৩২ A টাইপ সি এমসিবির জন্য সর্বোচ্চ অনুমোদিত Zs নির্ণয় করুন, যেখানে টাইপ সির জন্য Ia = ১০ · In।'
      },
      hint: {
        en: 'Ia = 10 × 32 = 320 A. Zs = 230 / 320 = 0.718 Ω.',
        hi: 'Ia = 10 × 32 = 320 A। Zs = 230 / 320 = 0.718 Ω।',
        bn: 'Ia = ১০ × ৩২ = ৩২০ A। Zs = ২৩০ / ৩২০ = ০.৭১৮ Ω।'
      }
    }
  ]
};
