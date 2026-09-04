import { Lesson } from '../types';

export const LESSON_SAFE_WORKING_PRACTICES: Lesson = {
  id: 'lsn-ch15-safe-working-practices',
  topicId: 'tp-safe-working-practices',
  chapterId: 'ch-electrical-safety',
  order: 8,
  title: {
    en: 'Safe Working Practices',
    hi: 'सुरक्षित कार्य पद्धतियाँ',
    bn: 'নিরাপদ কাজের নিয়মাবলী'
  },
  description: {
    en: 'Comprehensive industrial safe working practices: Hierarchy of Controls (elimination to PPE), Permit to Work (PTW) systems, Job Hazard Analysis (JHA), the One-Hand Rule, Two-Person (Buddy) Rule, NFPA 70E approach boundaries (Arc Flash, Limited, Restricted), and IEC 60900 1,000 V insulated tool safety standards.',
    hi: 'व्यापक औद्योगिक सुरक्षित कार्य प्रणालियाँ: नियंत्रण का पदानुक्रम (Hierarchy of Controls), परमिट टू वर्क (PTW) प्रणाली, जॉब हैजर्ड एनालिसिस (JHA), एक हाथ का नियम (One-Hand Rule), दो-व्यक्ति (बडी) नियम, NFPA 70E दृष्टिकोण सीमाएँ (आर्क फ्लैश, सीमित, प्रतिबंधित), और IEC 60900 1,000 V इंसुलेटेड टूल्स के मानक।',
    bn: 'সার্বিক শিল্প বৈদ্যুতিক নিরাপত্তা নিয়মাবলী: নিয়ন্ত্রণের স্তরবিন্যাস (Hierarchy of Controls), পারমিট টু ওয়ার্ক (PTW) ব্যবস্থা, জব হ্যাজার্ড অ্যানালাইসিস (JHA), এক-হাত নিয়ম (One-Hand Rule), দুই-ব্যক্তি দলগত নিয়ম, NFPA 70E নিরাপদ দূরত্বের সীমারেখা এবং IEC 60900 ১,০০০ V ইনসুলেটেড সরঞ্জামের প্রযুক্তিগত মানদণ্ড।'
  },
  estimatedMinutes: 45,
  easyExplanation: {
    en: 'Safe working practices are disciplined habits and formal procedures that keep electricians alive. The core philosophy starts with the "Hierarchy of Controls": whenever possible, completely ELIMINATE the danger by shutting down and locking out the power. Never treat PPE as your primary shield—it is only the final safety net if everything else fails! In every energized or potentially energized environment, technicians apply three cardinal golden habits: (1) The "One-Hand Rule"—keep your left hand in your pocket so that if an accidental arc or shock occurs, current cannot flow across your heart from hand to hand. (2) The "Two-Person Rule"—never work on high voltage alone; a qualified buddy must stand by outside the danger arc, equipped with an insulated rescue hook and trained in CPR/AED. (3) The "Permit to Work (PTW)"—a formal documented legal safety contract that certifies isolation, zero voltage verification, and gas/environmental testing before any tool touches a panel.',
    hi: 'सुरक्षित कार्य पद्धतियाँ ऐसे अनुशासित नियम और आदतें हैं जो इलेक्ट्रीशियन की जान बचाती हैं। इसका मूल सिद्धांत "नियंत्रण पदानुक्रम (Hierarchy of Controls)" है: जब भी संभव हो, पहले बिजली बंद करके और ताला लगाकर खतरे को पूरी तरह समाप्त (Eliminate) करें। पीपीई (PPE) को अपनी पहली ढाल न मानें—यह केवल अंतिम सुरक्षा जाल है! किसी भी जीवित पैनल के पास तीन सुनहरे नियम अपनाए जाते हैं: (1) "एक हाथ का नियम"—बाएं हाथ को जेब में या पीठ के पीछे रखें, ताकि यदि गलती से तार छू जाए, तो करंट दोनों हाथों से होते हुए दिल के आर-पार न जा सके। (2) "दो-व्यक्ति नियम (Buddy System)"—हाई-वोल्टेज पर कभी अकेले काम न करें; दूसरा योग्य साथी इंसुलेटेड रेस्क्यू हुक लेकर पास खड़ा रहे और उसे सीपीआर देना आता हो। (3) "परमिट टू वर्क (PTW)"—एक आधिकारिक कानूनी दस्तावेज जो काम शुरू करने से पहले आइसोलेशन और शून्य वोल्टेज की पुष्टि करता है।',
    bn: 'নিরাপদ কাজের নিয়মাবলী হলো সুশৃঙ্খল প্রকৌশল অভ্যাস যা বিদ্যুৎকর্মীর জীবন রক্ষা করে। এর মূল দর্শন "নিয়ন্ত্রণের স্তরবিন্যাস" (Hierarchy of Controls): সবচেয়ে প্রথম পদক্ষেপ হলো মেশিন পুরোপুরি বন্ধ ও লকআউট করে বিপদ শূন্যে নামিয়ে আনা (Elimination)। ব্যক্তিগত সুরক্ষাসামগ্রী (PPE) প্রথম প্রতিরক্ষা নয়—এটি কেবল শেষ প্রতিরোধ! যে কোনো বৈদ্যুতিক পরিবেশে তিনটি সোনালী নিয়ম মানতে হয়: (১) "এক-হাত নিয়ম" (One-Hand Rule)—কাজের সময় বাম হাত পকেটে বা পেছনে রাখুন, যাতে শক লাগলে কারেন্ট বাম হাত দিয়ে হৃদপিণ্ডের মধ্য দিয়ে প্রবাহিত হতে না পারে। (২) "দুই-ব্যক্তি নিয়ম" (Buddy Rule)—উচ্চ ভোল্টেজে কখনো একা কাজ করবেন না; উদ্ধারকারী হুক ও সিপিআর জানা একজন প্রশিক্ষিত সঙ্গী সর্বদা নিরাপদ দূরত্বে সতর্ক অবস্থায় থাকবেন। (৩) "পারমিট টু ওয়ার্ক" (PTW)—একটি আইনগত সুরক্ষা ছাড়পত্র যা লিখিতভাবে প্রমাণ করে যে লাইন সম্পূর্ণরূপে বিচ্ছিন্ন ও ভোল্টেজমুক্ত।'
  },
  detailedExplanation: {
    en: 'Industrial electrical safety practices are anchored in international standards (OSHA 1910.331-335, NFPA 70E, IEEE 1584, and ISO 45001):\n\n1. Hierarchy of Controls (ANSI/ASSP Z590.3 / ISO 45001):\n• Elimination (Level 1 - Most Effective): Physically remove the hazard by completely de-energizing the installation via verifiable disconnection and earthing.\n• Substitution (Level 2): Replace high hazard with lower hazard (e.g., using 24 V SELV control circuits instead of 230 V AC control loops).\n• Engineering Controls (Level 3): Isolate people from hazard via physical barriers, finger-safe IP2X terminal shrouds, interlocked door switches, and arc-resistant switchgear.\n• Administrative Controls (Level 4): Change the way people work through standard operating procedures (SOPs), Permit to Work (PTW), Job Hazard Analysis (JHA), Lockout/Tagout (LOTO), and safety signage.\n• Personal Protective Equipment (PPE) (Level 5 - Least Effective): Arc-rated clothing, insulating gloves, and face shields. PPE does not eliminate the hazard; it only reduces injury severity if a catastrophic failure occurs.\n\n2. NFPA 70E Approach Boundaries for Energized Electrical Conductors:\n• Arc Flash Boundary (AFB): The distance from an exposed energized conductor where incident thermal energy equals 1.2 cal/cm² (5.02 J/cm²), which is the onset of a curable second-degree burn on unprotected skin.\n• Limited Approach Boundary (LAB): An approach limit to keep unqualified persons at a safe distance from exposed energized electrical conductors. Unqualified persons may not cross unless continuously escorted by a qualified person.\n• Restricted Approach Boundary (RAB): An approach limit to be crossed ONLY by qualified electrical persons wearing rated insulating gloves, sleeves, and arc-rated PPE. Inadvertent movement inside this zone presents immediate shock risk.\n\n3. The One-Hand Rule and Body Positioning:\nWhen probing, switching, or operating electrical controls, the technician stands to the side of the cabinet (away from the door hinge ejection path) and operates the handle or probe with ONE hand only, keeping the free hand inside a pocket or behind the back. This prevents creating a hand-to-hand conductive path across the thorax, saving the cardiac sinus node and myocardium from ventricular fibrillation.\n\n4. Insulated Hand Tools (IEC 60900 / ASTM F1505):\nTools must be manufactured with dual-layer cross-linked insulation tested up to 10,000 V AC and certified for working up to 1,000 V AC / 1,500 V DC. Tools feature two distinct contrasting colored layers (e.g., yellow inner layer under red outer layer); any appearance of the yellow base indicates mechanical damage and requires immediate destruction and disposal of the tool.',
    hi: 'औद्योगिक विद्युत सुरक्षा पद्धतियाँ अंतरराष्ट्रीय मानकों (OSHA, NFPA 70E, ISO 45001) पर आधारित हैं:\n\n1. नियंत्रण का पदानुक्रम (Hierarchy of Controls):\n• उन्मूलन (Elimination - स्तर 1): खतरे को पूरी तरह समाप्त करना—सर्किट को बंद और अर्थ करके।\n• प्रतिस्थापन (Substitution - स्तर 2): उच्च वोल्टेज को कम वोल्टेज (जैसे 24 V SELV) से बदलना।\n• इंजीनियरिंग नियंत्रण (Engineering Controls - स्तर 3): बैरियर, IP2X फिंगर-सेफ टर्मिनल, और इंटरलॉकिंग दरवाजे।\n• प्रशासनिक नियंत्रण (Administrative Controls - स्तर 4): परमिट टू वर्क (PTW), SOP, और सुरक्षा प्रशिक्षण।\n• पीपीई (PPE - स्तर 5): इंसुलेटेड दस्ताने और आर्क सूट। यह खतरा नहीं मिटाता, केवल चोट कम करता है।\n\n2. NFPA 70E सुरक्षित दूरी सीमाएं (Approach Boundaries):\n• आर्क फ्लैश बाउंड्री (AFB): वह दूरी जहाँ तापीय ऊर्जा 1.2 cal/cm² तक गिर जाती है।\n• लिमिटेड एप्रोच बाउंड्री (LAB): गैर-प्रशिक्षित कर्मियों के प्रवेश की अंतिम सीमा।\n• रेस्ट्रिक्टेड एप्रोच बाउंड्री (RAB): केवल प्रमाणित इलेक्ट्रीशियन पूर्ण PPE के साथ ही प्रवेश कर सकते हैं।\n\n3. एक-हाथ का नियम (One-Hand Rule):\nपैनल चालू या बंद करते समय हमेशा साइड में खड़े हों और केवल एक हाथ का उपयोग करें। दूसरा हाथ जेब में रखें ताकि करंट छाती और दिल के आर-पार न बह सके।\n\n4. IEC 60900 इंसुलेटेड टूल्स (1000 V):\nपेचकस और प्लायर 1,000 V AC / 1,500 V DC के लिए प्रमाणित होते हैं। इनमें दो रंगों की परत होती है (लाल के नीचे पीला)। पीला रंग दिखने पर टूल को तुरंत हटा देना चाहिए।',
    bn: 'শিল্প বৈদ্যুতিক নিরাপত্তার বৈজ্ঞানিক ও প্রাতিষ্ঠানিক নির্দেশিকা (OSHA, NFPA 70E, ISO 45001):\n\n১. সুরক্ষার স্তরবিন্যাস (Hierarchy of Controls):\n• অপসরণ (Elimination - স্তর ১): সবচেয়ে কার্যকর—বিদ্যুৎ সম্পূর্ণ বিচ্ছিন্ন ও লকআউট করে বিপদ দূর করা।\n• প্রতিস্থাপন (Substitution - স্তর ২): ২৩০ V কন্ট্রোল লুপের বদলে ২৪ V সেফটি এক্সট্রা লো ভোল্টেজ (SELV) ব্যবহার।\n• ইঞ্জিনিয়ারিং নিয়ন্ত্রণ (Engineering Controls - স্তর ৩): শারীরিক প্রতিবন্ধক, IP2X ফিংগার-সেফ কভার ও ইন্টারলক ডোর সুইচ।\n• প্রশাসনিক নিয়ন্ত্রণ (Administrative Controls - স্তর ৪): পারমিট টু ওয়ার্ক (PTW), কাজের নির্দেশিকা ও প্রশিক্ষণ।\n• ব্যক্তিগত সুরক্ষাসামগ্রী (PPE - স্তর ৫): সবচেয়ে কম নির্ভরযোগ্য—ইনসুলেটিং গ্লাভস ও আর্ক ফ্ল্যাশ স্যুট।\n\n২. NFPA 70E নিরাপদ কাজের দূরত্বের সীমানা:\n• আর্ক ফ্ল্যাশ বাউন্ডারি (AFB): যে দূরত্বে বিকিরিত তাপ ১.২ cal/cm² এ নেমে আসে (দ্বিতীয় মাত্রার ত্বক পোড়ার সূচনা)।\n• লিমিটেড অ্যাপ্রোচ বাউন্ডারি (LAB): অপ্রশিক্ষিত ব্যক্তিরা এই সীমার ভেতরে অনুমতি ছাড়া প্রবেশ করতে পারে না।\n• রেস্ট্রিক্টেড অ্যাপ্রোচ বাউন্ডারি (RAB): কেবল উপযুক্ত গ্লাভস ও পিপিই পরিহিত অনুমোদিত প্রকৌশলী প্রবেশ করতে পারেন।\n\n৩. এক-হাত নিয়ম (One-Hand Rule):\nসুইচিং বা ভোল্টেজ পরীক্ষার সময় প্যানেলের দরজার পাশে দাঁড়াতে হয় এবং একটি মাত্র হাত দিয়ে কাজ করতে হয়। অন্য হাতটি পকেটে রাখতে হয় যাতে কারেন্ট উভয় হাতের মধ্য দিয়ে বুকে প্রবেশ করতে না পারে।\n\n৪. IEC 60900 ইনসুলেটেড টুলস (১,০০০ V):\nটুলসগুলো ১,০০০ V AC / ১,৫০০ V DC কাজের জন্য প্রত্যয়িত এবং ১০,০০০ ভোল্টে পরীক্ষিত। এতে দুটি ভিন্ন রঙের আস্তরণ থাকে (ভেতরে হলুদ, বাইরে লাল)। ভেতরে হলুদ রঙ দেখা দিলে বুঝতে হবে ইনসুলেশন নষ্ট হয়ে গেছে এবং তা বর্জনীয়।'
  },
  formulas: [
    {
      id: 'f-arc-flash-boundary-distance',
      symbol: 'D_B',
      expression: 'D_B = \sqrt{2.655 \cdot 10^4 \cdot V \cdot I_{bf} \cdot t}',
      title: {
        en: 'Arc Flash Protection Boundary Distance (NFPA 70E / Lee Formula)',
        hi: 'आर्क फ्लैश सुरक्षा सीमा दूरी (Lee सूत्र)',
        bn: 'আর্ক ফ্ল্যাশ সুরক্ষা দূরত্বের সমীকরণ (Lee ফর্মুলা)'
      },
      description: {
        en: 'Calculates the radial safe distance (in inches or mm) from an arc source where thermal energy drops to 1.2 cal/cm² (the threshold for second-degree skin burns).',
        hi: 'आर्क स्रोत से वह सुरक्षित त्रिज्य दूरी तय करता है जहाँ तापीय ऊर्जा घटकर 1.2 cal/cm² रह जाती है।',
        bn: 'আর্ক উৎস থেকে নিরাপদ ব্যাসার্ধ দূরত্ব নির্ধারণ করে যেখানে বিকিরিত তাপ শক্তি কমে ১.২ cal/cm² এ পৌঁছায়।'
      },
      variables: [
        { symbol: 'D_B', name: { en: 'Arc flash boundary distance (inches)', hi: 'आर्क फ्लैश सीमा दूरी (इंच)', bn: 'আর্ক ফ্ল্যাশ সীমানা দূরত্ব (ইঞ্চি)' } },
        { symbol: 'V', name: { en: 'System line-to-line voltage (kV)', hi: 'सिस्टम लाइन वोल्टेज (kV)', bn: 'লাইন ভোল্টেজ (kV)' } },
        { symbol: 'I_{bf}', name: { en: 'Bolted symmetrical fault current (kA)', hi: 'फॉल्ट करंट (kA)', bn: 'বোল্টেজ শর্ট-সার্কিট কারেন্ট (kA)' } },
        { symbol: 't', name: { en: 'Arc clearing time of protective device (seconds)', hi: 'सुरक्षा उपकरण का आर्क कटिंग समय (s)', bn: 'ব্রেকার দ্বারা আর্ক নেভানোর সময় (s)' } }
      ]
    },
    {
      id: 'f-incident-energy-distance-scaling',
      symbol: 'E_2',
      expression: 'E_2 = E_1 \cdot \left(\frac{D_1}{D_2}\right)^x',
      title: {
        en: 'Incident Energy Distance Attenuation (IEEE 1584)',
        hi: 'दूरी के साथ आपतित ऊर्जा में कमी (IEEE 1584)',
        bn: 'দূরত্বের সাথে বিকিরিত তাপ শক্তির হ্রাস সমীকরণ (IEEE 1584)'
      },
      description: {
        en: 'Governs how incident arc thermal radiation decays inversely with increasing distance from the switchgear busbar, where x is the distance exponent (typically x ≈ 2 in open air, x ≈ 1.47 in enclosed cubicles).',
        hi: 'दूरी बढ़ने पर आर्क थर्मल विकिरण कैसे घटता है, यह तय करता है।',
        bn: 'দূরত্ব বৃদ্ধির সাথে সাথে আর্ক বিকিরণের তীব্রতা কীভাবে হ্রাস পায় তা নির্ণয় করে।'
      },
      variables: [
        { symbol: 'E_2', name: { en: 'Incident thermal energy at new distance D2 (cal/cm²)', hi: 'नई दूरी D2 पर आपतित ऊर्जा (cal/cm²)', bn: 'নতুন দূরত্ব D2 তে বিকিরিত তাপ (cal/cm²)' } },
        { symbol: 'E_1', name: { en: 'Known incident energy at working distance D1 (cal/cm²)', hi: 'दूरी D1 पर ज्ञात ऊर्जा (cal/cm²)', bn: 'D1 দূরত্বে জানা শক্তির মান (cal/cm²)' } },
        { symbol: 'x', name: { en: 'Distance exponent factor', hi: 'दूरी घातांक कारक', bn: 'দূরত্ব ঘাত সহগ' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-ch15-l08-safe-working-architecture',
      title: {
        en: 'The Hierarchy of Controls and NFPA 70E Boundaries',
        hi: 'नियंत्रण का पदानुक्रम एवं NFPA 70E सीमाएँ',
        bn: 'সুরক্ষার স্তরবিন্যাস এবং NFPA 70E নিরাপদ সীমারেখা'
      },
      content: {
        en: 'Industrial safe working practices combine structural procedures and physical boundaries:\n\n1. Hierarchy of Controls Implementation:\n• Never rely on PPE as the default protection. PPE is the lowest tier (Level 5) because it relies 100% on human compliance and cannot stop an explosion.\n• Engineering controls (Level 3) such as arc flash mitigation relays with optical sensors reduce fault clearing time to under 10 milliseconds, slashing incident energy from lethal levels (> 40 cal/cm²) down to safe manageable levels (< 4 cal/cm²).\n\n2. The NFPA 70E Three-Zone Approach Boundaries:\n• Zone 1: Outer Area beyond Arc Flash Boundary (Safe for unqualified personnel without arc flash PPE).\n• Zone 2: Limited Approach Boundary (For 415 V systems, LAB is 1.0 m / 3 ft 6 in for exposed fixed parts. Unqualified staff must stay behind this boundary unless escorted).\n• Zone 3: Restricted Approach Boundary (For 415 V systems, RAB is 0.3 m / 1 ft. Only qualified personnel using insulated tools and rated voltage gloves may enter).\n\n3. The Buddy Rule (Two-Person System):\nWorking solo on live equipment > 50 V is prohibited. The designated safety observer stands outside the flash boundary, does not touch tools, maintains constant visual contact, holds an insulated rescue shepherd crook hook, and is certified in basic life support (BLS/CPR).',
        hi: 'औद्योगिक सुरक्षित कार्य प्रणाली संगठित प्रक्रियाओं और भौतिक सीमाओं को जोड़ती है:\n\n1. नियंत्रण का पदानुक्रम (Hierarchy of Controls):\n• पीपीई को प्राथमिक सुरक्षा कभी न समझें। यह सबसे निचला स्तर (Level 5) है।\n• इंजीनियरिंग नियंत्रण (जैसे ऑप्टिकल सेंसर वाले सुपरफास्ट आर्क रिले) आर्क को 10 मिलीसेकंड में काट देते हैं, जिससे जानलेवा ऊर्जा सुरक्षित स्तर पर आ जाती है।\n\n2. NFPA 70E की तीन सुरक्षा सीमाएं:\n• आर्क फ्लैश सीमा (AFB): बिना विशेष सूट के कोई भी व्यक्ति इसके अंदर नहीं जा सकता।\n• लिमिटेड एप्रोच सीमा (LAB): 415 V के लिए यह दूरी 1.0 मीटर है। अप्रशिक्षित लोग बाहर रहते हैं।\n• रेस्ट्रिक्टेड एप्रोच सीमा (RAB): 415 V के लिए यह दूरी 0.3 मीटर (12 इंच) है। केवल इन्सुलेटेड टूल्स और दस्ताने पहनकर ही अंदर जाया जा सकता है।\n\n3. दो-व्यक्ति (Buddy) नियम:\n50 V से ऊपर कभी अकेले काम न करें। दूसरा साथी दूर खड़ा रहकर नजर रखता है और उसके पास रेस्क्यू हुक होना चाहिए।',
        bn: 'শিল্প বৈদ্যুতিক নিরাপত্তার বৈজ্ঞানিক পরিকাঠামো:\n\n১. সুরক্ষার স্তরবিন্যাস প্রয়োগ:\n• পিপিই-কে কখনো প্রধান সুরক্ষা ব্যবস্থা ভাববেন না। এটি সর্বনিম্ন স্তরের (লেভেল ৫) সুরক্ষা।\n• ইঞ্জিনিয়ারিং নিয়ন্ত্রণ (যেমন অপটিক্যাল আর্ক ডিটেকশন রিলে) ১০ মিলিসেকেন্ডে ব্রেকার ট্রিপ করিয়ে ভয়াবহ বিস্ফোরণ শক্তিকে নিয়ন্ত্রণে আনে।\n\n২. NFPA 70E এর তিনটি দূরত্ব অঞ্চল:\n• অঞ্চল ১: আর্ক ফ্ল্যাশ বাউন্ডারির বাইরের এলাকা (পিপিই ছাড়া সাধারণ মানুষ থাকতে পারে)।\n• অঞ্চল ২: লিমিটেড অ্যাপ্রোচ বাউন্ডারি (৪১৫ V এর জন্য ১.০ মিটার দূরত্ব)। অনুমোদনহীন ব্যক্তিদের জন্য নিষিদ্ধ।\n• অঞ্চল ৩: রেস্ট্রিক্টেড অ্যাপ্রোচ বাউন্ডারি (৪১৫ V এর জন্য ০.৩ মিটার)। কেবল বিশেষ গ্লাভস ও ইনসুলেটেড টুলস নিয়ে প্রবেশ সম্ভব।\n\n৩. দুই-ব্যক্তি দলগত নিয়ম (Buddy Rule):\n৫০ ভোল্টের উর্ধ্বে কোনো প্যানেলে কখনো একা কাজ করা নিষেধ। উদ্ধারকারী ব্যক্তি উপযুক্ত প্লাস্টিক হুক নিয়ে সর্বদা পর্যবেক্ষণে থাকবেন।'
      },
      schematicId: 'circuit-ch15-safe-working-practices'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch15-l08-01',
      problem: {
        en: 'A 415 V (0.415 kV) industrial switchboard has an available bolted short-circuit fault current of I_bf = 25 kA. The upstream main circuit breaker clears an arcing fault in t = 0.12 seconds. Using the NFPA 70E / Lee theoretical formula D_B = √(2.655 × 10^4 × V × I_bf × t), calculate the Arc Flash Protection Boundary distance D_B in inches and meters.',
        hi: 'एक 415 V (0.415 kV) औद्योगिक स्विचबोर्ड में शॉर्ट-सर्किट फॉल्ट करंट I_bf = 25 kA है। अपस्ट्रीम सर्किट ब्रेकर t = 0.12 सेकंड में आर्क फॉल्ट को साफ करता है। Lee सूत्र D_B = √(2.655 × 10^4 × V × I_bf × t) का उपयोग करके, आर्क फ्लैश बाउंड्री D_B की गणना इंच और मीटर में कीजिए।',
        bn: 'একটি ৪১৫ V (০.৪১৫ kV) শিল্প সুইচবোর্ডে শর্ট-সার্কিট কারেন্ট I_bf = ২৫ kA। মেইন সার্কিট ব্রেকার t = ০.১২ সেকেন্ডে আর্ক নিভিয়ে দেয়। Lee সূত্র D_B = √(২.৬৫৫ × ১০^৪ × V × I_bf × t) ব্যবহার করে আর্ক ফ্ল্যাশ বাউন্ডারি দূরত্ব D_B ইঞ্চি ও মিটারে নির্ণয় করুন।'
      },
      solution: {
        en: 'Given:\n• System Voltage V = 0.415 kV\n• Bolted fault current I_bf = 25 kA\n• Clearing time t = 0.12 s\n• Constant K = 2.655 × 10^4 = 26,550\n\nStep 1: Calculate Product Term Inside Square Root\nProduct = 26,550 × 0.415 × 25 × 0.12\nProduct = 26,550 × 1.245 = 33,054.75\n\nStep 2: Calculate Boundary Distance D_B\nD_B = √(33,054.75) ≈ 181.81 inches\n\nStep 3: Convert to Metric Units (Meters)\n1 inch = 0.0254 meters\nD_B = 181.81 × 0.0254 ≈ 4.62 meters\n\nConclusion:\nAny personnel standing within 4.62 meters (approx. 15.1 feet) of the exposed switchgear terminals are exposed to incident heat energy ≥ 1.2 cal/cm² and MUST wear certified Arc Flash PPE.',
        hi: 'चरण 1: वर्गमूल के अंदर के मान की गणना\nProduct = 26,550 × 0.415 × 25 × 0.12 = 33,054.75\n\nचरण 2: सीमा दूरी (इंच)\nD_B = √(33,054.75) ≈ 181.8 इंच\n\nचरण 3: मीटर में रूपांतरण\nD_B = 181.8 × 0.0254 ≈ 4.62 मीटर।\n\nनिष्कर्ष:\nस्विचबोर्ड से 4.62 मीटर के दायरे में खड़े किसी भी व्यक्ति को आर्क सूट पहनना अनिवार्य है।',
        bn: 'ধাপ ১: রুটের ভেতরের গুণফল নির্ণয়\nমান = ২৬,৫৫০ × ০.৪১৫ × ২৫ × ০.১২ = ৩৩,০৫৪.৭৫\n\nধাপ ২: ইঞ্চি এককে দূরত্ব\nD_B = √(৩৩,০৫৪.৭৫) ≈ ১৮১.৮১ ইঞ্চি\n\nধাপ ৩: মিটার এককে রূপান্তর\nD_B = ১৮১.৮১ × ০.০২৫৪ ≈ ৪.৬২ মিটার।\n\nউপসংহার:\nসুইচবোর্ড থেকে ৪.৬২ মিটার দূরত্বের ভেতরের সকল কর্মীকে বাধ্যতামূলকভাবে পূর্ণাঙ্গ আর্ক ফ্ল্যাশ পিপিই পরিধান করতে হবে।'
      },
      givenValues: { 'V': '0.415 kV', 'I_bf': '25 kA', 't': '0.12 s' },
      finalAnswer: {
        en: 'Arc Flash Boundary D_B ≈ 181.8 inches (4.62 meters).',
        hi: 'आर्क फ्लैश सीमा D_B ≈ 181.8 इंच (4.62 मीटर)।',
        bn: 'আর্ক ফ্ল্যাশ সীমানা D_B ≈ ১৮১.৮ ইঞ্চি (৪.৬২ মিটার)।'
      }
    },
    {
      id: 'ex-ch15-l08-02',
      problem: {
        en: 'An electrical technician measures an incident energy level of E1 = 16 cal/cm² at a working distance of D1 = 18 inches (457 mm) from an open 415 V panel. If the technician moves backward to a distance of D2 = 36 inches (914 mm), calculate the new incident energy E2 assuming a distance decay exponent of x = 1.6 in an enclosed cubicle (E2 = E1 × (D1 / D2)^x).',
        hi: 'एक तकनीशियन पैनल से D1 = 18 इंच की दूरी पर 16 cal/cm² की आपतित ऊर्जा मापता है। यदि वह पीछे हटकर D2 = 36 इंच की दूरी पर खड़ा होता है, तो नई आपतित ऊर्जा E2 की गणना कीजिए (दूरी घातांक x = 1.6 मानते हुए)।',
        bn: 'একটি খোলা প্যানেল থেকে D1 = ১৮ ইঞ্চি দূরত্বে বিকিরিত তাপ শক্তি E1 = ১৬ cal/cm²। কর্মী যদি পিছিয়ে গিয়ে D2 = ৩৬ ইঞ্চি দূরত্বে অবস্থান নেন, তবে নতুন বিকিরিত তাপ শক্তি E2 নির্ণয় করুন (দূরত্ব ঘাত x = ১.৬ ধরে)।'
      },
      solution: {
        en: 'Given:\n• Initial incident energy E1 = 16.0 cal/cm²\n• Initial distance D1 = 18.0 inches\n• New distance D2 = 36.0 inches\n• Distance exponent x = 1.6\n\nStep 1: Distance Ratio Calculation\nRatio = D1 / D2 = 18.0 / 36.0 = 0.50\n\nStep 2: Apply Exponential Attenuation\nAttenuation Factor = (0.50)^1.6\nLog10(0.50) = -0.30103\n1.6 × (-0.30103) = -0.48165\n10^(-0.48165) ≈ 0.3299\n\nStep 3: Calculate New Incident Energy E2\nE2 = 16.0 × 0.3299 ≈ 5.28 cal/cm²\n\nConclusion:\nDoubling the distance from 18 inches to 36 inches slashes the thermal blast energy by more than 67% (from 16 cal/cm² down to 5.28 cal/cm²), demonstrating why spatial distance is a powerful administrative and engineering defense.',
        hi: 'चरण 1: दूरी का अनुपात = 18 / 36 = 0.5\n\nचरण 2: घातांक कारक = (0.5)^1.6 ≈ 0.3299\n\nचरण 3: नई ऊर्जा E2 = 16.0 × 0.3299 ≈ 5.28 cal/cm²।\n\nनिष्कर्ष:\nदूरी दोगुनी करने से ऊष्मा का झटका 67% से अधिक कम हो जाता है।',
        bn: 'ধাপ ১: দূরত্বের অনুপাত = ১৮ / ৩৬ = ০.৫\n\nধাপ ২: ঘাত সহগের মান = (০.৫)^১.৬ ≈ ০.৩২৯৯\n\nধাপ ৩: নতুন শক্তির মান E2 = ১৬ × ০.৩২৯৯ ≈ ৫.২৮ cal/cm²।\n\nউপসংহার:\nদূরত্ব দ্বিগুণ করলে তাপীয় আঘাতের তীব্রতা ৬৭ শতাংশের বেশি হ্রাস পায়।'
      },
      givenValues: { 'E1': '16 cal/cm²', 'D1': '18 inches', 'D2': '36 inches', 'x': '1.6' },
      finalAnswer: {
        en: 'New incident energy at 36 inches E2 ≈ 5.28 cal/cm² (a 67% reduction).',
        hi: '36 इंच पर नई ऊर्जा E2 ≈ 5.28 cal/cm² (67% की कमी)।',
        bn: '৩৬ ইঞ্চি দূরত্বে নতুন বিকিরিত শক্তি E2 ≈ ৫.২৮ cal/cm² (৬৭% হ্রাস)।'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Daily Pre-Job Safety Briefings (Toolbox Talks) identifying specific arc flash ratings and isolation points before dispatching technicians.',
      'Permit to Work (PTW) issuance for high-voltage substations requiring simultaneous sign-offs from authorized person and safety officer.',
      'Implementation of the "Left Hand in Pocket" rule during manual racking in/out of 11 kV drawout vacuum circuit breakers.',
      'Inspection of IEC 60900 insulated screwdrivers and torque wrenches prior to assembling energized busbar connections.'
    ],
    hi: [
      'रोजाना काम शुरू करने से पहले टूलबॉक्स टॉक (TBT) का आयोजन जिसमें आर्क रेटिंग और खतरों की समीक्षा की जाती है।',
      'हाई-वोल्टेज सबस्टेशनों में परमिट टू वर्क (PTW) जारी करना, जिस पर सेफ्टी ऑफिसर के हस्ताक्षर अनिवार्य होते हैं।',
      '11 kV वैक्यूम सर्किट ब्रेकर को रैक-इन या रैक-आउट करते समय "बायां हाथ जेब में" नियम का सख्त पालन।',
      'बसबार पर काम करने से पहले IEC 60900 प्रमाणित 1000 V इंसुलेटेड टूल्स की अखंडता जाँचना।'
    ],
    bn: [
      'কাজে নামার আগে দৈনিক টুলবক্স আলোচনা (TBT) যাতে সংশ্লিষ্ট প্যানেলের ঝুঁকি ও সুরক্ষাবিধি পর্যালোচনা করা হয়।',
      'সাবস্টেশনে পারমিট টু ওয়ার্ক (PTW) অনুমোদন যাতে যৌথভাবে প্রকৌশলী ও নিরাপত্তা কর্মকর্তা স্বাক্ষর করেন।',
      '১১ kV সার্কিট ব্রেকার র্যাকিংয়ের সময় "বাম হাত পকেটে রাখার" সুশৃঙ্খল প্রয়োগ।',
      'প্যানেলে স্ক্রু বাঁধার আগে IEC 60900 প্রত্যয়িত ১,০০০ V ইনসুলেটেড স্ক্রু-ড্রাইভার ও প্লায়ারের আস্তরণ পরীক্ষা।'
    ]
  },
  importantPoints: {
    en: [
      'In the Hierarchy of Controls, Elimination is Level 1 (most reliable) and PPE is Level 5 (least reliable).',
      'Never work on live systems without an active, countersigned Permit to Work (PTW) and Job Hazard Analysis (JHA).',
      'The One-Hand Rule protects the heart by eliminating the hand-to-hand conductive path across the thorax.',
      'The Buddy System mandates a second qualified person equipped with an insulated rescue hook standing outside the arc boundary.',
      'Insulated tools certified under IEC 60900 are tested to 10,000 V AC and rated for working up to 1,000 V AC / 1,500 V DC.'
    ],
    hi: [
      'नियंत्रण पदानुक्रम में, उन्मूलन (Elimination) स्तर 1 (सबसे प्रभावी) है और पीपीई स्तर 5 (सबसे कम प्रभावी) है।',
      'बिना हस्ताक्षरित परमिट टू वर्क (PTW) के कभी भी बिजली के काम में हाथ न डालें।',
      'एक-हाथ का नियम हाथ-से-हाथ के रास्ते को तोड़कर दिल को वेंट्रिकुलर फिब्रिलेशन से बचाता है।',
      'बडी सिस्टम में दूसरा साथी इंसुलेटेड रेस्क्यू हुक लेकर आर्क सीमा से बाहर निगरानी करता है।',
      'IEC 60900 टूल्स 10,000 V पर टेस्ट किए जाते हैं और 1,000 V AC / 1,500 V DC पर काम के लिए प्रमाणित होते हैं।'
    ],
    bn: [
      'সুরক্ষার স্তরবিন্যাসে বিপদ দূরীকরণ (Elimination) লেভেল ১ (সর্বোচ্চ) এবং পিপিই লেভেল ৫ (সর্বনিম্ন নির্ভরযোগ্য)।',
      'অনুমোদিত পারমিট টু ওয়ার্ক (PTW) ও জব হ্যাজার্ড অ্যানালাইসিস ছাড়া কখনোই বৈদ্যুতিক কাজ শুরু করবেন না।',
      'এক-হাত নিয়ম হাত-থেকে-হাতে কারেন্ট প্রবাহ রোধ করে হৃদপিণ্ডকে প্রাণঘাতী শক থেকে রক্ষা করে।',
      'বাডি সিস্টেমে উদ্ধারকারী হুকসহ একজন সার্বক্ষণিক পর্যবেক্ষক নিরাপদ দূরত্বে সজাগ থাকেন।',
      'IEC 60900 ইনসুলেটেড টুলস ১০,০০০ ভোল্টে পরীক্ষিত এবং ১,০০০ V AC / ১,৫০০ V DC লাইনে কাজের জন্য অনুমোদিত।'
    ]
  },
  commonMistakes: {
    en: [
      'Assuming PPE makes a worker invulnerable; severe arc blast pressure waves (up to 100 kPa) can cause blunt force trauma even if clothing does not burn.',
      'Working alone on live circuits because "it is only a minor 5-minute measurement".',
      'Continuing to use insulated hand tools after the inner yellow warning layer is exposed.',
      'Treating the Permit to Work as a useless bureaucratic paper rather than a live safety contract.',
      'Allowing unqualified visitors to cross the Limited Approach Boundary without continuous escort.'
    ],
    hi: [
      'यह सोचना कि PPE पहनने से कर्मचारी अमर हो गया है; आर्क का भयानक दबाव (100 kPa) अंगों को तोड़ सकता है।',
      'यह सोचकर अकेले काम करना कि "यह तो बस 5 मिनट का छोटा सा काम है"।',
      'इंसुलेटेड पेचकस से पीली अंदरूनी परत दिखने के बाद भी उसका इस्तेमाल जारी रखना।',
      'परमिट टू वर्क (PTW) को केवल एक कागजी औपचारिकता समझना।',
      'अप्रशिक्षित लोगों को बिना एस्कॉर्ट के लिमिटेड एप्रोच सीमा के अंदर जाने देना।'
    ],
    bn: [
      'মনে করা যে পিপিই পরলে কর্মী অবিনশ্বর; মারাত্মক আর্ক ব্লাস্টের তীব্র বায়ুচাপ (১০০ kPa) পিপিই ভেদ করেও হাড়গোড় ভেঙে ফেলতে পারে।',
      'মাত্র কয়েক মিনিটের কাজ ভেবে উচ্চ ভোল্টেজ প্যানেলে একা কাজ করা।',
      'ইনসুলেশনের ভেতরের হলুদ সংকেত বের হয়ে যাওয়ার পরও ভাঙা বা ক্ষয়প্রাপ্ত টুল ব্যবহার করা।',
      'পারমিট টু ওয়ার্ককে কেবল ফাইল সাজানোর কাজ মনে করে অবহেলা করা।',
      'অনভিজ্ঞ ব্যক্তিদের লিমিটেড অ্যাপ্রোচ বাউন্ডারির ভেতরে বিনা পাহারায় প্রবেশ করতে দেওয়া।'
    ]
  },
  keyTakeaways: {
    en: [
      'Control hazards at the source: de-energization and lockout are infinitely superior to relying on personal protective gear.',
      'Respect the three boundaries: Arc Flash Boundary, Limited Approach Boundary, and Restricted Approach Boundary.',
      'Always keep your non-dominant hand away from conductive chassis surfaces when probing live panels.',
      'The Buddy System is mandatory on live equipment above 50 volts.',
      'Check hand tools daily for insulation cracks, chips, and cuts.'
    ],
    hi: [
      'खतरे को स्रोत पर ही खत्म करें: डी-एनर्जाइजेशन और ताला लगाना PPE से कहीं बेहतर है।',
      'तीन सीमाओं का सम्मान करें: आर्क फ्लैश बाउंड्री, लिमिटेड बाउंड्री, और रेस्ट्रिक्टेड बाउंड्री।',
      'लाइव पैनल में काम करते समय दूसरा हाथ हमेशा जेब में या पीछे रखें।',
      '50 वोल्ट से अधिक के लाइव काम में बडी सिस्टम अनिवार्य है।',
      'इंसुलेटेड टूल्स में दरारों और कट की रोजाना जांच करें।'
    ],
    bn: [
      'উৎস থেকেই বিপদ নির্মূল করুন: লাইন ডি-এনার্জাইজ ও তালাবদ্ধ করা পিপিই-এর চেয়ে হাজার গুণ শ্রেয়।',
      'তিনটি সীমানা মেনে চলুন: আর্ক ফ্ল্যাশ, লিমিটেড ও রেস্ট্রিক্টেড বাউন্ডারি।',
      'প্যানেল পরীক্ষার সময় সর্বদা মুক্ত হাতটি পকেটে রাখুন।',
      '৫০ ভোল্টের উপরে কাজ করার সময় সার্বক্ষণিক উদ্ধারকারী সঙ্গী থাকা আবশ্যক।',
      'কাজে ব্যবহারের পূর্বে ইনসুলেটেড সরঞ্জামের নিখুঁত অবস্থা যাচাই করুন।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch15-l08-01',
      question: {
        en: 'In the international Hierarchy of Controls (ISO 45001 / ANSI Z590.3), which safety measure represents the highest and most effective level of hazard control?',
        hi: 'नियंत्रण के अंतरराष्ट्रीय पदानुक्रम (ISO 45001) में, कौन सा सुरक्षा उपाय खतरे के नियंत्रण का उच्चतम और सबसे प्रभावी स्तर दर्शाता है?',
        bn: 'আন্তর্জাতিক সুরক্ষার স্তরবিন্যাসে (ISO 45001) কোন নিরাপত্তা ব্যবস্থাটি বিপদমুক্তির সর্বোচ্চ ও সর্বাধিক কার্যকর স্তর?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Personal Protective Equipment (PPE)', hi: 'व्यक्तिगत सुरक्षा उपकरण (PPE)', bn: 'ব্যক্তিগত সুরক্ষাসামগ্রী (PPE)' } },
        { id: 'opt-2', text: { en: 'Hazard Elimination (complete physical de-energization and removal)', hi: 'खतरे का उन्मूलन (पूरी तरह बिजली काटना और हटाना)', bn: 'বিপদ নির্মূল বা অপসরণ (সম্পূর্ণ বিদ্যুৎ বিচ্ছিন্ন ও বিপদ বিলোপ)' } },
        { id: 'opt-3', text: { en: 'Administrative warning signs and caution tape', hi: 'प्रशासनिक चेतावनी संकेत और टेप', bn: 'প্রশাসনিক সতর্কবার্তা ও ফিতা' } },
        { id: 'opt-4', text: { en: 'Safety training seminars', hi: 'सुरक्षा प्रशिक्षण सेमिनार', bn: 'নিরাপত্তা প্রশিক্ষণ কর্মশালা' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'Elimination physically removes the hazard completely, eliminating risk without relying on human behavior or protective suits. PPE is the lowest (least effective) control tier.',
        hi: 'उन्मूलन (Elimination) खतरे को जड़ से खत्म करता है। पीपीई सबसे निचला और कम भरोसेमंद स्तर है।',
        bn: 'বিপদ দূরীকরণ (Elimination) সরাসরি বিপদের উৎস বিনষ্ট করে। ব্যক্তিগত সুরক্ষাসামগ্রী (PPE) হলো সর্বনিম্ন স্তরের প্রতিরক্ষা।'
      }
    },
    {
      id: 'mcq-ch15-l08-02',
      question: {
        en: 'According to NFPA 70E, what physical condition defines the "Arc Flash Boundary"?',
        hi: 'NFPA 70E के अनुसार, किस भौतिक स्थिति द्वारा "आर्क फ्लैश सीमा (Arc Flash Boundary)" को परिभाषित किया जाता है?',
        bn: 'NFPA 70E অনুসারে, কোন ভৌত অবস্থার ভিত্তিতে "আর্ক ফ্ল্যাশ বাউন্ডারি" সংজ্ঞায়িত হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'The distance at which incident thermal energy drops to 1.2 cal/cm² (onset of curable 2nd-degree burn on bare skin)', hi: 'वह दूरी जहाँ आपतित ऊष्मा ऊर्जा 1.2 cal/cm² तक गिर जाती है (त्वचा पर द्वितीय डिग्री जलन की शुरुआत)', bn: 'যে দূরত্বে বিকিরিত তাপ শক্তি কমে ১.২ cal/cm² এ পৌঁছায় (অনাবৃত ত্বকে দ্বিতীয় মাত্রার পোড়ার সূচনা)' } },
        { id: 'opt-2', text: { en: 'The physical edge of the metal switchboard door', hi: 'स्विचबोर्ड के दरवाजे का बाहरी किनारा', bn: 'সুইচবোর্ডের ধাতব দরজার সীমানা' } },
        { id: 'opt-3', text: { en: 'Exactly 100 meters from any transformer regardless of voltage', hi: 'ट्रांसफार्मर से ठीक 100 मीटर की दूरी', bn: 'ট্রান্সফরমার থেকে ঠিক ১০০ মিটার দূরত্ব' } },
        { id: 'opt-4', text: { en: 'The distance at which an arc sound becomes inaudible', hi: 'वह दूरी जहाँ धमाके की आवाज सुनाई न दे', bn: 'যে দূরত্বে বিস্ফোরণের শব্দ শোনা যায় না' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'NFPA 70E defines the Arc Flash Boundary as the approach limit distance where incident thermal energy equals 1.2 cal/cm² (5.02 J/cm²). Anyone crossing inside must wear rated arc flash PPE.',
        hi: 'आर्क फ्लैश सीमा वह दूरी है जहाँ आपतित तापीय ऊर्जा 1.2 cal/cm² होती है। इसके अंदर जाने पर आर्क सूट अनिवार्य है।',
        bn: 'NFPA 70E মতে ১.২ cal/cm² তাপশক্তি সীমাকে আর্ক ফ্ল্যাশ বাউন্ডারি বলা হয়। এর ভেতরে প্রবেশকারী সকল কর্মীকে প্রত্যয়িত স্যুট পরতে হয়।'
      }
    },
    {
      id: 'mcq-ch15-l08-03',
      question: {
        en: 'What is the primary physiological and biomechanical reason for adhering to the "One-Hand Rule" when interacting with energized electrical components?',
        hi: 'जीवित विद्युत घटकों के पास काम करते समय "एक-हाथ के नियम" का पालन करने का प्राथमिक शारीरिक कारण क्या है?',
        bn: 'বিদ্যুতায়িত যন্ত্রাংশে কাজ করার সময় "এক-হাত নিয়ম" মেনে চলার প্রধান শারীরবৃত্তীয় কারণ কী?'
      },
      options: [
        { id: 'opt-1', text: { en: 'It prevents creating a conductive circuit pathway across the chest cavity, protecting the heart from fatal ventricular fibrillation', hi: 'यह छाती के आर-पार करंट का रास्ता बनने से रोकता है, जिससे दिल वेंट्रिकुलर फिब्रिलेशन से बचता है', bn: 'এটি বুকের মধ্য দিয়ে কারেন্টের পথ তৈরি হতে বাধা দেয়, ফলে হৃদপিণ্ড প্রাণঘাতী ফিব্রিলেশন থেকে রক্ষা পায়' } },
        { id: 'opt-2', text: { en: 'It keeps the electrician from getting tired', hi: 'यह इलेक्ट्रीशियन को थकने से बचाता है', bn: 'এটি কর্মীকে ক্লান্ত হওয়া থেকে রক্ষা করে' } },
        { id: 'opt-3', text: { en: 'It allows the electrician to hold a cup of tea in the other hand', hi: 'ताकि दूसरे हाथ में चाय का कप पकड़ा जा सके', bn: 'অন্য হাতে চায়ের কাপ ধরে রাখার সুবিধার্থে' } },
        { id: 'opt-4', text: { en: 'It doubles the electrical resistance of the skin', hi: 'यह त्वचा का प्रतिरोध दोगुना कर देता है', bn: 'এটি ত্বকের রোধ দ্বিগুণ করে দেয়' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'If both hands contact energized or grounded metal surfaces, electric current flows across the heart, triggering lethal ventricular fibrillation even at 50 mA. Keeping the left hand in a pocket breaks this circuit.',
        hi: 'दोनों हाथ लगाने से करंट दिल के आर-पार बहता है। एक हाथ जेब में रखने से करंट दिल तक नहीं पहुंच पाता।',
        bn: 'উভয় হাত সংযুক্ত হলে তড়িৎপ্রবাহ সরাসরি হৃদপিণ্ডের মধ্য দিয়ে যায় এবং মাত্র ৫০ মিলিঅ্যাম্পিয়ারেই ফিব্রিলেশন ঘটায়। এক হাত পকেটে রাখলে এই পথ বিচ্ছিন্ন থাকে।'
      }
    },
    {
      id: 'mcq-ch15-l08-04',
      question: {
        en: 'In the "Two-Person Rule" (Buddy System) during high-risk electrical tasks, what is the mandatory responsibility and equipment of the safety standby observer?',
        hi: 'उच्च जोखिम वाले विद्युत कार्यों में "दो-व्यक्ति नियम (बडी सिस्टम)" के दौरान सुरक्षा पर्यवेक्षक का क्या दायित्व और उपकरण होता है?',
        bn: 'উচ্চ ঝুঁকির বৈদ্যুতিক কাজে "দুই-ব্যক্তি দলগত নিয়মে" নিরাপত্তা পর্যবেক্ষকের বাধ্যতামূলক দায়িত্ব ও সরঞ্জাম কী?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Stand outside the flash zone holding an insulated rescue hook, maintain constant visual contact, and be qualified in CPR/AED', hi: 'आर्क ज़ोन से बाहर इंसुलेटेड रेस्क्यू हुक लेकर खड़े रहना, लगातार नजर रखना, और सीपीआर/AED में प्रशिक्षित होना', bn: 'আর্ক সীমানার বাইরে ইনসুলেটেড উদ্ধারকারী হুক নিয়ে সতর্ক থাকা, সার্বক্ষণিক নজর রাখা এবং সিপিআর/AED তে পারদর্শী হওয়া' } },
        { id: 'opt-2', text: { en: 'Help turn screws with uninsulated pliers inside the panel', hi: 'पैनल के अंदर नंगे प्लायर से स्क्रू घुमाने में मदद करना', bn: 'প্যানেলের ভেতর স্ক্রু ড্রাইভার দিয়ে সাহায্য করা' } },
        { id: 'opt-3', text: { en: 'Leave the room to check email on their phone', hi: 'फोन पर ईमेल चेक करने के लिए कमरे से बाहर जाना', bn: 'ফোনে সামাজিক যোগাযোগ মাধ্যম দেখতে বাইরে যাওয়া' } },
        { id: 'opt-4', text: { en: 'Hold the technician’s belt with bare hands', hi: 'नंगे हाथों से तकनीशियन की बेल्ट पकड़ना', bn: 'খালি হাতে বিদ্যুৎকর্মীর বেল্ট ধরে রাখা' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'The standby observer must not perform physical work on the panel. Their sole duty is vigilance, holding an insulated shepherd rescue hook to pull the worker free, and administering immediate CPR.',
        hi: 'पर्यवेक्षक पैनल में हाथ नहीं लगाता। उसका एकमात्र काम नजर रखना, रेस्क्यू हुक से साथी को सुरक्षित खींचना और तुरंत सीपीआर देना है।',
        bn: 'পর্যবেক্ষক প্যানেলের ভেতর কোনো কাজ করবেন না। তার একমাত্র দায়িত্ব হলো সতর্ক পাহারা দেওয়া, দুর্ঘটনা ঘটলে ইনসুলেটেড হুক দিয়ে ভুক্তভোগীকে টেনে সরানো এবং তাৎক্ষণিক সিপিআর প্রদান।'
      }
    },
    {
      id: 'mcq-ch15-l08-05',
      question: {
        en: 'Hand tools certified according to international standard IEC 60900 / ASTM F1505 are factory dielectric tested at what voltage, and what is their maximum rated working voltage?',
        hi: 'मानक IEC 60900 के अनुसार प्रमाणित हैंड टूल्स का फैक्ट्री में किस वोल्टेज पर परीक्षण किया जाता है, और उनका अधिकतम रेटेड वर्किंग वोल्टेज क्या है?',
        bn: 'আন্তর্জাতিক মানদণ্ড IEC 60900 অনুসারে প্রত্যয়িত হ্যান্ড টুলস কারখানায় কত ভোল্টেজে ডাইইলেক্ট্রিক টেস্ট করা হয় এবং কাজের জন্য সর্বোচ্চ রেটিং কত?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Tested at 10,000 V AC; Rated for working up to 1,000 V AC / 1,500 V DC', hi: '10,000 V AC पर परीक्षण; 1,000 V AC / 1,500 V DC तक काम के लिए रेटेड', bn: '১০,০০০ V AC তে পরীক্ষিত; ১,০০০ V AC / ১,৫০০ V DC পর্যন্ত কাজের জন্য রেটেড' } },
        { id: 'opt-2', text: { en: 'Tested at 230 V AC; Rated for 230 V AC only', hi: 'केवल 230 V AC पर टेस्ट और रेटेड', bn: '২৩০ V AC তে টেস্ট ও রেটেড' } },
        { id: 'opt-3', text: { en: 'Tested at 50 V DC; Rated for 12 V automotive circuits', hi: '50 V DC पर टेस्ट; 12 V के लिए रेटेड', bn: '৫০ V DC তে টেস্ট; ১২ V এর জন্য রেটেড' } },
        { id: 'opt-4', text: { en: 'Tools with electrical tape wrapped around handles are equivalent to IEC 60900', hi: 'हैंडल पर टेप लपेटना IEC 60900 के बराबर है', bn: 'হ্যান্ডেলে স্কচটেপ পেঁচানোই IEC 60900 এর সমতুল্য' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'IEC 60900 mandates a 10:1 safety factor: tools are submerged in water and dielectrically proof-tested at 10,000 V AC for 3 minutes before receiving the 1,000 V AC / 1,500 V DC working certification symbol (double triangle).',
        hi: 'IEC 60900 के तहत टूल्स को 10:1 सुरक्षा अनुपात के साथ 10,000 V AC पर टेस्ट किया जाता है, ताकि वे 1,000 V AC पर सुरक्षित रहें।',
        bn: 'IEC 60900 মানদণ্ডে ১০:১ নিরাপত্তা ব্যবধানে পানিতে ডুবিয়ে ১০,০০০ V AC তে টেস্ট করা হয় এবং ১,০০০ V AC / ১,৫০০ V DC কাজের জন্য ডাবল-ট্রায়াঙ্গল প্রতীক দেওয়া হয়।'
      }
    },
    {
      id: 'mcq-ch15-l08-06',
      question: {
        en: 'If an insulated screwdriver shows a visible yellow colored layer underneath its outer red insulating coating, what action is strictly required?',
        hi: 'यदि किसी इंसुलेटेड स्क्रूड्राइवर के बाहरी लाल कवर के नीचे पीली चेतावनी परत दिखाई देने लगे, तो क्या कार्रवाई अनिवार्य है?',
        bn: 'যদি কোনো ইনসুলেটেড স্ক্রু ড্রাইভারের বাইরের লাল আবরণের নিচে ভেতরের হলুদ স্তরটি দৃশ্যমান হয়ে পড়ে, তবে কী ব্যবস্থা নেওয়া বাধ্যতামূলক?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Immediately remove the tool from service, destroy or render it unusable, and dispose of it', hi: 'टूल को तुरंत काम से हटाएँ, उसे नष्ट करें और फेंक दें', bn: 'টুলটি অবিলম্বে কাজ থেকে প্রত্যাহার করে বিনষ্ট ও বাতিল করতে হবে' } },
        { id: 'opt-2', text: { en: 'Paint over the yellow layer with red nail polish', hi: 'पीली परत पर लाल नेल पॉलिश लगा दें', bn: 'হলুদ অংশের উপর লাল নেইলপলিশ দিয়ে ঢেকে দেওয়া' } },
        { id: 'opt-3', text: { en: 'Wrap one layer of paper scotch tape over the nick', hi: 'उस पर पेपर टेप लपेट दें', bn: 'উপরে এক পরত কাগজের টেপ জড়িয়ে ব্যবহার চালিয়ে যাওয়া' } },
        { id: 'opt-4', text: { en: 'Use it only on 110 V instead of 230 V', hi: 'इसे केवल 110 V पर उपयोग करें', bn: '২৩০ ভোল্টের বদলে ১১০ ভোল্টে ব্যবহার করা' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Dual-layer insulated tools feature a contrasting yellow inner core. Exposure of yellow indicates mechanical damage breaching dielectric protection. Field repairs with tape are illegal; the tool must be condemned.',
        hi: 'पीली परत दिखना यह दर्शाता है कि इन्सुलेशन कट चुका है। ऐसे टूल पर टेप लगाना प्रतिबंधित है, इसे तुरंत नष्ट करना होगा।',
        bn: 'দ্বি-স্তর ইনসুলেশনে হলুদ স্তর বের হয়ে আসার অর্থ ইনসুলেশন ক্ষতিগ্রস্ত হয়েছে। টেপ লাগিয়ে মেরামত আইনত নিষিদ্ধ; টুলটি অবিলম্বে বিনষ্ট করতে হবে।'
      }
    },
    {
      id: 'mcq-ch15-l08-07',
      question: {
        en: 'What is the statutory role of a Permit to Work (PTW) in high-voltage industrial electrical maintenance?',
        hi: 'हाई-वोल्टेज औद्योगिक रखरखाव में परमिट टू वर्क (PTW) की वैधानिक भूमिका क्या है?',
        bn: 'উচ্চ ভোল্টেজের শিল্প বৈদ্যুতিক রক্ষণাবেক্ষণে পারমিট টু ওয়ার্ক (PTW) এর বিধিবদ্ধ ভূমিকা কী?'
      },
      options: [
        { id: 'opt-1', text: { en: 'It is a formal written safety contract documenting that specific circuits have been isolated, locked, tagged, tested dead, and earthed prior to work', hi: 'यह एक औपचारिक लिखित सुरक्षा अनुबंध है जो प्रमाणित करता है कि काम शुरू होने से पहले सर्किट अलग, बंद, जाँचा गया और अर्थ किया गया है', bn: 'এটি একটি আনুষ্ঠানিক লিখিত নিরাপত্তা চুক্তি যা সুনির্দিষ্টভাবে প্রমাণ করে যে কাজ শুরুর আগে লাইন আইসোলেট, লকআউট, ভোল্টেজমুক্ত ও আর্থিং করা হয়েছে' } },
        { id: 'opt-2', text: { en: 'It is a receipt used for ordering replacement fuses from the store room', hi: 'यह स्टोर रूम से फ्यूज मंगाने की रसीद है', bn: 'এটি স্টোর রুম থেকে নতুন ফিউজ উত্তোলনের স্লিপ' } },
        { id: 'opt-3', text: { en: 'It is an invoice sent to the customer for electricity billing', hi: 'यह बिजली बिल का इनवॉइस है', bn: 'এটি গ্রাহককে প্রেরিত বিদ্যুৎ বিলের কাগজ' } },
        { id: 'opt-4', text: { en: 'It is an optional checklist only needed during government audits', hi: 'यह केवल सरकारी ऑडिट के समय भरा जाने वाला फॉर्म है', bn: 'এটি কেবল অডিটের সময় দেখানো ঐচ্ছিক ফরম' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'A PTW is a legally binding safety management document. Work cannot commence until the Authorized Person hands the countersigned permit to the Competent Person, and the permit is formally closed upon completion.',
        hi: 'PTW एक कानूनी रूप से बाध्यकारी दस्तावेज है। जब तक अधिकृत अधिकारी आइसोलेशन की पुष्टि करके हस्ताक्षर नहीं करता, काम शुरू नहीं हो सकता।',
        bn: 'PTW একটি আইনত বাধ্যতামূলক সনদ। অনুমোদিত কর্মকর্তা আইসোলেশন ও গ্রাউন্ডিং নিশ্চিত করে স্বাক্ষর না করা পর্যন্ত কোনো কর্মী কাজে হাত দিতে পারেন না।'
      }
    },
    {
      id: 'mcq-ch15-l08-08',
      question: {
        en: 'Under NFPA 70E standards, which personnel are legally permitted to cross inside the "Restricted Approach Boundary" of exposed energized conductors?',
        hi: 'NFPA 70E मानकों के तहत, खुले जीवित तारों की "रेस्ट्रिक्टेड एप्रोच सीमा" के अंदर जाने की कानूनी अनुमति किन्हें है?',
        bn: 'NFPA 70E মানদণ্ড অনুসারে, উন্মুক্ত বিদ্যুতায়িত পরিবাহীর "রেস্ট্রিক্টেড অ্যাপ্রোচ বাউন্ডারির" ভেতরে প্রবেশের আইনগত অধিকার কার রয়েছে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Only qualified persons wearing documented shock-rated voltage gloves, arc flash PPE, and using insulated tools', hi: 'केवल प्रमाणित योग्य व्यक्ति जिन्होंने रेटेड इंसुलेटिंग दस्ताने, आर्क PPE पहने हों और इंसुलेटेड टूल्स का उपयोग कर रहे हों', bn: 'কেবলমাত্র উপযুক্ত ভোল্টেজ রেটেড ইনসুলেটিং গ্লাভস, আর্ক স্যুট ও ইনসুলেটেড টুলস ব্যবহারকারী সনদপ্রাপ্ত যোগ্য ব্যক্তি' } },
        { id: 'opt-2', text: { en: 'Any employee who has worked at the company for over 10 years', hi: 'कंपनी में 10 साल से अधिक काम करने वाला कोई भी कर्मचारी', bn: 'কোম্পানিতে ১০ বছরের বেশি কর্মরত যে কোনো কর্মচারী' } },
        { id: 'opt-3', text: { en: 'Unqualified visitors as long as they walk quickly', hi: 'अयोग्य आगंतुक यदि वे तेजी से चलें', bn: 'দ্রুত হেঁটে যাওয়া যে কোনো অনভিজ্ঞ দর্শনার্থী' } },
        { id: 'opt-4', text: { en: 'Cleaning staff using standard long metal mop handles', hi: 'सफाई कर्मचारी जो लंबे धातु के वाइपर का उपयोग कर रहे हों', bn: 'ধাতব মপ ব্যবহারকারী পরিচ্ছন্নতাকর্মী' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'The Restricted Approach Boundary has an extreme risk of arc flash and shock due to inadvertent movement. Only qualified electrical workers equipped with certified PPE and insulated tools may cross.',
        hi: 'रेस्ट्रिक्टेड सीमा के अंदर अत्यधिक खतरा होता है। केवल प्रशिक्षित इलेक्ट्रीशियन आवश्यक इंसुलेटेड गियर के साथ ही प्रवेश कर सकते हैं।',
        bn: 'রেস্ট্রিক্টেড বাউন্ডারির ভেতর আকস্মিক সামান্য নড়াচড়াতেও প্রাণঘাতী শক হতে পারে। কেবল বিশেষ সুরক্ষাসামগ্রী পরিহিত সনদপ্রাপ্ত প্রকৌশলীই প্রবেশের অধিকারী।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch15-l08-01',
      question: {
        en: 'List the 5 tiers of the Hierarchy of Controls from most effective to least effective and explain why PPE is the least effective tier.',
        hi: 'नियंत्रण के पदानुक्रम के 5 स्तरों को सबसे प्रभावी से कम प्रभावी क्रम में सूचीबद्ध करें और बताएं कि पीपीई सबसे कम प्रभावी क्यों है।',
        bn: 'সুরক্ষার স্তরবিন্যাসের ৫টি ধাপ সর্বাধিক কার্যকর থেকে সর্বনিম্ন ক্রমানুসারে লিখুন এবং পিপিই কেন সর্বনিম্ন কার্যকর তা ব্যাখ্যা করুন।'
      },
      hint: {
        en: 'Elimination > Substitution > Engineering Controls > Administrative Controls > PPE. PPE does not remove the hazard; it only lessens injury if a failure occurs.',
        hi: 'उन्मूलन > प्रतिस्थापन > इंजीनियरिंग नियंत्रण > प्रशासनिक नियंत्रण > PPE। पीपीई खतरे को नहीं मिटाता, केवल चोट कम करता है।',
        bn: 'অপসরণ > প্রতিস্থাপন > ইঞ্জিনিয়ারিং নিয়ন্ত্রণ > প্রশাসনিক নিয়ন্ত্রণ > পিপিই। পিপিই বিপদ দূর করে না, কেবল আঘাতের মাত্রা কমায়।'
      }
    },
    {
      id: 'pq-ch15-l08-02',
      question: {
        en: 'Define the difference between the Limited Approach Boundary and the Restricted Approach Boundary under NFPA 70E.',
        hi: 'NFPA 70E के तहत लिमिटेड एप्रोच बाउंड्री और रेस्ट्रिक्टेड एप्रोच बाउंड्री के बीच अंतर स्पष्ट कीजिए।',
        bn: 'NFPA 70E এর অধীনে লিমিটেড অ্যাপ্রোচ বাউন্ডারি ও রেস্ট্রিক্টেড অ্যাপ্রোচ বাউন্ডারির মধ্যে পার্থক্য লিখুন।'
      },
      hint: {
        en: 'Limited Approach keeps unqualified persons at distance; Restricted Approach is a shock-protection boundary crossed only by qualified workers wearing rated insulating gloves.',
        hi: 'लिमिटेड सीमा अप्रशिक्षित लोगों को दूर रखती है; रेस्ट्रिक्टेड सीमा में केवल दस्ताने और टूल्स के साथ योग्य इलेक्ट्रीशियन प्रवेश करते हैं।',
        bn: 'লিমিটেড বাউন্ডারি সাধারণ মানুষকে দূরে রাখে; রেস্ট্রিক্টেড বাউন্ডারিতে কেবল উপযুক্ত গ্লাভস পরিহিত দক্ষ প্রকৌশলী ঢুকতে পারেন।'
      }
    }
  ]
};
