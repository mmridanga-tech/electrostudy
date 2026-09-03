import { Lesson } from '../types';

export const LESSON_FUSE: Lesson = {
  id: 'lsn-ch15-fuse',
  topicId: 'tp-fuse',
  chapterId: 'ch-electrical-safety',
  order: 4,
  title: {
    en: 'Fuse',
    hi: 'फ्यूज',
    bn: 'ফিউজ'
  },
  description: {
    en: 'Comprehensive engineering analysis of fuses: thermal melting physics, fuse elements (silver, copper, alloys), rated current vs minimum fusing current, fusing factor, Preece’s law, prospective vs cut-off current, I²t energy let-through, and High Rupturing Capacity (HRC) fuse design with silica sand arc extinction.',
    hi: 'फ्यूज का व्यापक इंजीनियरिंग विश्लेषण: तापीय पिघलने की भौतिकी, फ्यूज तत्व (चांदी, तांबा, मिश्र धातु), निर्धारित धारा बनाम न्यूनतम फ्यूजिंग धारा, फ्यूजिंग फैक्टर, प्रीस का नियम, संभावित बनाम कट-ऑफ धारा, I²t ऊर्जा वहन, और सिलिका रेत द्वारा आर्क शमन के साथ एचआरसी (HRC) फ्यूज डिजाइन।',
    bn: 'ফিউজের বিশদ প্রকৌশলগত বিশ্লেষণ: তাপীয় গলন প্রক্রিয়া, ফিউজ উপাদান (রূপা, তামা, সংকর ধাতু), রেটেড কারেন্ট বনাম ন্যূনতম ফিউজিং কারেন্ট, ফিউজিং ফ্যাক্টর, প্রিসের সূত্র, সম্ভাব্য বনাম কাট-অফ কারেন্ট, I²t শক্তি প্রবাহ এবং সিলিকা বালির সাহায্যে আর্ক নির্বাপক এইচআরসি (HRC) ফিউজ নকশা।'
  },
  estimatedMinutes: 35,
  easyExplanation: {
    en: 'A fuse is the simplest and oldest electrical safety device: it is a deliberate "weak link" inserted in series with a circuit. Inside the fuse is a thin metal wire or strip (made of silver, tinned copper, or zinc). Under normal currents, the wire remains cool and conducts power without issue. But if an overload or short circuit occurs, the heavy current generates intense heat (Joule heating Q = I²Rt). Because the fuse wire is engineered with a specific melting point and small cross-section, it melts and vaporizes before the building’s hidden wiring can catch fire! In advanced High Rupturing Capacity (HRC) fuses, the wire is surrounded by pure quartz sand: when the element vaporizes in a short circuit, the sand instantly absorbs the intense heat, fuses into glass-like beads, and snuffs out the dangerous electrical arc within milliseconds.',
    hi: 'फ्यूज सबसे सरल और पुराना विद्युत सुरक्षा उपकरण है: यह परिपथ में जानबूझकर डाली गई एक "कमजोर कड़ी" है। फ्यूज के अंदर चांदी, टिन लगे तांबे या जस्ता की एक पतली धातु की पट्टी होती है। सामान्य धारा पर यह तार ठंडा रहता है और बिजली जाने देता है। लेकिन जब ओवरलोड या शॉर्ट सर्किट होता है, तो भारी धारा अत्यधिक गर्मी (Q = I²Rt) पैदा करती है। चूंकि फ्यूज तार का गलनांक और मोटाई तय होती है, इसलिए दीवारों के अंदर के तारों में आग लगने से पहले ही यह तार पिघल कर टूट जाता है! उन्नत एचआरसी (HRC) फ्यूज में तार शुद्ध सिलिका (क्वार्ट्ज) रेत से घिरा होता है: शॉर्ट सर्किट पर जब तार पिघलता है, तो रेत उस भयानक गर्मी को सोखकर कांच जैसे मनकों में बदल जाती है और बिजली के आर्क को कुछ ही मिलीसेकंड में बुझा देती है।',
    bn: 'ফিউজ হলো সবচেয়ে সহজ ও প্রাচীনতম বৈদ্যুতিক সুরক্ষা ব্যবস্থা: এটি বর্তনীতে সিরিজে যুক্ত একটি সচেতন "দুর্বল সংযোগ"। ফিউজের ভেতরে রূপা, টিনযুক্ত তামা বা দস্তার একটি পাতলা তার থাকে। সাধারণ কারেন্টে তারটি ঠান্ডা থাকে এবং স্বাভাবিকভাবে বিদ্যুৎ পরিবহন করে। কিন্তু ওভারলোড বা শর্ট সার্কিট ঘটলে অতিরিক্ত কারেন্ট তীব্র তাপ (Q = I²Rt) উৎপন্ন করে। ফিউজ তারের নির্দিষ্ট গলনাঙ্ক ও সরু ব্যাস থাকার কারণে ঘরের দেয়ালের ভেতরের তারে আগুন লাগার আগেই ফিউজ তারটি গলে বিচ্ছিন্ন হয়ে যায়! উন্নত এইচআরসি (HRC) ফিউজে তারের চারপাশে খাঁটি কোয়ার্টজ বালি ভরা থাকে: শর্ট সার্কিটে তারটি বাষ্পীভূত হওয়ার সাথে সাথে বালি তাপ শোষণ করে কাঁচের দানায় পরিণত হয় এবং ক্ষতিকর আর্ক নিমিষেই নিভিয়ে ফেলে।'
  },
  detailedExplanation: {
    en: 'A fuse operates as an inverse-time overcurrent protective device. Its technical characteristics are defined by strict thermodynamic and electromechanical parameters:\n\n1. Rated Current (Continuous Current, I_n):\nThe maximum RMS alternating or direct current that the fuse element can carry continuously under standardized ambient temperature without exceeding temperature rise limits or undergoing physical degradation.\n\n2. Minimum Fusing Current (I_f):\nThe minimum current at which the fuse element melts and clears the circuit. By definition, I_f is always strictly greater than I_n.\n\n3. Fusing Factor (K_f):\nThe ratio of minimum fusing current to rated current: K_f = I_f / I_n. For semi-enclosed rewirable (Kit-Kat) fuses, K_f is relatively high (1.4 to 2.0), providing poor overcurrent discrimination. For precision cartridge and HRC fuses, K_f is calibrated between 1.2 and 1.5, offering tightly controlled overcurrent protection.\n\n4. Preece’s Law (Thermal Equilibrium):\nSir William Preece established the empirical relationship between the diameter d of a round wire and its fusing current I:\nI = k · d^(1.5) = k · d^(3/2), where k is Preece’s constant depending on the metal (e.g., k ≈ 2530 for copper, 1660 for aluminum, 405 for lead, 755 for tin-lead alloy in inches; or standardized metric equivalents).\n\n5. Pre-Arcing and Arcing Times (I²t Let-Through):\n• Pre-arcing time (melting time, t_m): The time from the inception of fault current until the metal element melts and the arc initiates. During this rapid adiabatic interval: ∫ i² dt = (constant) = Joule integral.\n• Arcing time (t_a): The time from arc initiation until the dielectric recovery of the medium fully extinguishes the arc at current zero.\n• Total Operating Time: t_total = t_m + t_a.\n\n6. Cut-Off Characteristic (Current Limiting):\nDuring a bolted short circuit where the prospective peak current could reach 50 kA or 100 kA, a fast-acting HRC fuse melts within the first quarter-cycle (t < 2-5 ms), chopping the current at a much lower "cut-off current" I_cut << I_peak. This drastically limits both electromagnetic stress (proportional to I²) and thermal damage to downstream transformers and cables.',
    hi: 'फ्यूज एक व्युत्क्रम-समय ओवरकरंट सुरक्षा उपकरण के रूप में कार्य करता है। इसकी तकनीकी विशेषताएं:\n\n1. रेटेड धारा (I_n): वह अधिकतम धारा जिसे फ्यूज बिना पिघले और बिना अत्यधिक गर्म हुए लगातार वहन कर सकता है।\n2. न्यूनतम फ्यूजिंग धारा (I_f): वह न्यूनतम धारा जिस पर फ्यूज का तार पिघल जाता है। यह हमेशा I_n से अधिक होती है।\n3. फ्यूजिंग फैक्टर (K_f): न्यूनतम फ्यूजिंग धारा और रेटेड धारा का अनुपात: K_f = I_f / I_n। रिवायरएबल फ्यूज के लिए यह 1.4 से 2.0 होता है; HRC फ्यूज के लिए यह 1.2 से 1.5 होता है।\n4. प्रीस का नियम (Preece’s Law): तार के व्यास d और पिघलने वाली धारा I के बीच संबंध: I = k · d^(1.5)। तांबे के लिए k का मान बहुत अधिक होता है।\n5. प्री-आर्किंग और आर्किंग समय (I²t):\n• प्री-आर्किंग समय: फॉल्ट शुरू होने से तार पिघलने तक का समय।\n• आर्किंग समय: आर्क बनने से उसके पूरी तरह बुझने तक का समय।\n• कुल समय = प्री-आर्किंग समय + आर्किंग समय।\n6. कट-ऑफ विशेषता (करंट लिमिटिंग): उच्च शॉर्ट-सर्किट फॉल्ट पर एक तेज़ HRC फ्यूज करंट के अपने चरम (peak) तक पहुंचने से पहले ही (2-5 ms में) पिघल जाता है, जिससे केबलों पर यांत्रिक और तापीय तनाव भारी मात्रा में कम हो जाता है।',
    bn: 'ফিউজ একটি ব্যস্তানুপাতিক সময় বিশিষ্ট ওভারকারেন্ট প্রোটেকশন ডিভাইস। এর কারিগরি বৈশিষ্ট্যসমূহ:\n\n১. রেটেড কারেন্ট (I_n): সর্বোচ্চ অবিচ্ছিন্ন কারেন্ট যা ফিউজ কোনো অতিরিক্ত উত্তাপ বা ক্ষতি ছাড়াই ক্রমাগত বহন করতে পারে।\n২. ন্যূনতম ফিউজিং কারেন্ট (I_f): সর্বনিম্ন যে কারেন্টে ফিউজ তার গলে গিয়ে সার্কিট বিচ্ছিন্ন হয় (I_f সর্বদা I_n অপেক্ষা বড়)।\n৩. ফিউজিং ফ্যাক্টর (K_f): ন্যূনতম ফিউজিং কারেন্ট ও রেটেড কারেন্টের অনুপাত: K_f = I_f / I_n। রিওয়্যারেবল ফিউজের ক্ষেত্রে এটি ১.৪ থেকে ২.০ এবং সুনির্দিষ্ট এইচআরসি ফিউজের ক্ষেত্রে ১.২ থেকে ১.৫।\n৪. প্রিসের সূত্র (Preece’s Law): তারের ব্যাস d এবং গলন কারেন্ট I এর সম্পর্ক: I = k · d^(১.৫)।\n৫. প্রি-আর্কিং ও আর্কিং সময় (I²t):\n• প্রি-আর্কিং সময়: ফল্ট শুরু থেকে তার গলে আর্ক সৃষ্টির পূর্ব মুহূর্ত পর্যন্ত সময়।\n• আর্কিং সময়: আর্ক সৃষ্টি থেকে তা সম্পূর্ণ নিভে যাওয়ার সময়কাল।\n• মোট সময় = প্রি-আর্কিং সময় + আর্কিং সময়।\n৬. কাট-অফ বৈশিষ্ট্য: মারাত্মক শর্ট সার্কিটে পিক কারেন্ট ৫০ বা ১০০ kA তে পৌঁছানোর আগেই এইচআরসি ফিউজ মাত্র ২-৫ মিলিসেকেন্ডের মধ্যে তার গলিয়ে বিদ্যুৎ প্রবাহ ছিন্ন করে, যা ক্যাবল ও ট্রান্সফরমারকে ধ্বংস হওয়া থেকে বাঁচায়।'
  },
  formulas: [
    {
      id: 'f-fusing-factor',
      symbol: 'K_f',
      expression: 'K_f = \frac{I_f}{I_n}',
      title: {
        en: 'Fusing Factor',
        hi: 'फ्यूजिंग फैक्टर',
        bn: 'ফিউজিং ফ্যাক্টর'
      },
      description: {
        en: 'Ratio of the minimum fusing current to the continuous rated current of the fuse (always > 1).',
        hi: 'न्यूनतम फ्यूजिंग धारा और सतत रेटेड धारा का अनुपात (हमेशा > 1)।',
        bn: 'ন্যূনতম ফিউজিং কারেন্ট এবং অবিচ্ছিন্ন রেটেড কারেন্টের অনুপাত (সর্বদা > ১)।'
      },
      variables: [
        { symbol: 'K_f', name: { en: 'Fusing factor (dimensionless)', hi: 'फ्यूजिंग फैक्टर (विमाहीन)', bn: 'ফিউজিং ফ্যাক্টর (এককহীন)' } },
        { symbol: 'I_f', name: { en: 'Minimum fusing current (A)', hi: 'न्यूनतम फ्यूजिंग धारा (A)', bn: 'ন্যূনতম ফিউজিং কারেন্ট (A)' } },
        { symbol: 'I_n', name: { en: 'Rated continuous current (A)', hi: 'रेटेड सतत धारा (A)', bn: 'রেটেড অবিচ্ছিন্ন কারেন্ট (A)' } }
      ]
    },
    {
      id: 'f-preece-fusing-law',
      symbol: 'I_melt',
      expression: 'I = k \cdot d^{1.5} = k \cdot d^{3/2}',
      title: {
        en: 'Preece’s Fusing Law',
        hi: 'प्रीस का फ्यूजिंग नियम',
        bn: 'প্রিসের ফিউজিং সূত্র'
      },
      description: {
        en: 'Relates the fusing current of a round metallic wire to its diameter d and material constant k.',
        hi: 'एक गोल धातु के तार की फ्यूजिंग धारा को उसके व्यास d और सामग्री स्थिरांक k से जोड़ता है।',
        bn: 'গোলাকার ধাতব তারের ফিউজিং কারেন্ট এবং তার ব্যাস d এর মধ্যকার সম্পর্ক নির্ধারণ করে।'
      },
      variables: [
        { symbol: 'I', name: { en: 'Fusing current (A)', hi: 'फ्यूजिंग धारा (A)', bn: 'ফিউজিং কারেন্ট (A)' } },
        { symbol: 'd', name: { en: 'Conductor wire diameter (mm or cm)', hi: 'तार का व्यास (mm या cm)', bn: 'তারের ব্যাস (mm বা cm)' } },
        { symbol: 'k', name: { en: 'Preece material constant', hi: 'प्रीस सामग्री स्थिरांक', bn: 'প্রিস উপাদান ধ্রুবক' } }
      ]
    },
    {
      id: 'f-i2t-let-through',
      symbol: 'I^2 t',
      expression: 'I^2 t = \int_0^{t_{\text{clearing}}} i(t)^2 \, dt',
      title: {
        en: 'Joule Integral / I²t Let-Through Energy',
        hi: 'जूल समाकल / I²t लेट-थ्रू ऊर्जा',
        bn: 'জুল ইন্টিগ্রাল / I²t শক্তি মান'
      },
      description: {
        en: 'Measure of the thermal and mechanical energy let through by the fuse to downstream cables and apparatus before complete clearance.',
        hi: 'फॉल्ट पूरी तरह कटने से पहले फ्यूज द्वारा उपकरणों तक जाने दी जाने वाली तापीय ऊर्जा का माप।',
        bn: 'সম্পূর্ণ সংযোগ বিচ্ছিন্ন হওয়ার পূর্ব পর্যন্ত ফিউজের মধ্য দিয়ে প্রবাহিত তাপীয় ও যান্ত্রিক শক্তির পরিমাণ।'
      },
      variables: [
        { symbol: 'I²t', name: { en: 'Energy let-through (A²·s)', hi: 'लेट-थ्रू ऊर्जा (A²·s)', bn: 'প্রবাহিত শক্তি মান (A²·s)' } },
        { symbol: 't_clearing', name: { en: 'Total clearing time (s)', hi: 'कुल समाशोधन समय (s)', bn: 'মোট ক্লিয়ারিং সময় (s)' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-ch15-l04-hrc-construction',
      title: {
        en: 'HRC Fuse Architecture and Arc Extinction Mechanisms',
        hi: 'एचआरसी (HRC) फ्यूज संरचना एवं आर्क शमन प्रक्रिया',
        bn: 'এইচআরসি ফিউজের গঠন ও আর্ক নির্বাপণ কৌশল'
      },
      content: {
        en: 'High Rupturing Capacity (HRC) fuses are precision-engineered to safely interrupt prospective short-circuit currents up to 80 kA to 120 kA at 415 V to 11 kV without explosion or emitting flames:\n\n1. Structural Anatomy of an HRC Fuse:\n• Outer Body: High-grade ceramic or steatite porcelain cylinder possessing extraordinary mechanical strength, thermal shock resistance, and zero porosity.\n• End Caps and Tags: Heavy brass or tinned copper end contacts securely fixed to the ceramic body with screws and pressure-sealing gaskets.\n• Fuse Element: Pure silver (Ag) strip or wires. Silver is chosen because it resists oxidation at normal operating temperatures (preventing deterioration of calibration), has high electrical conductivity, low specific heat, and uniform melting characteristics. The silver element incorporates calibrated reduced sections (waists/notches) that localize the melting points.\n• Arc Quenching Medium: High-purity, granular quartz silica sand (SiO2) thoroughly dried and compacted. The sand fills 100% of the interior volume around the silver elements.\n\n2. Arc Quenching Physics:\nWhen a massive fault current vaporizes the silver at the notched sections, an electric arc is struck through the silver vapor plasma. The intense thermal energy (thousands of kelvins) instantly transfers to the surrounding silica sand grains. The silica sand melts and undergoes chemical fusion with the silver vapor to form an inert, highly insulating glass-like solid structure called "fulgurite". This rapidly increases the arc resistance, forcing the fault current to zero well before the natural AC current zero, extinguishing the arc within 2 to 5 milliseconds.',
        hi: 'हाई रप्चरिंग कैपेसिटी (HRC) फ्यूज 80 kA से 120 kA तक के विशाल शॉर्ट-सर्किट करंट को बिना विस्फोट या आग के सुरक्षित रूप से काटने के लिए बनाए जाते हैं:\n\n1. HRC फ्यूज की संरचना:\n• बाहरी बॉडी: उच्च शक्ति वाले सिरेमिक या चीनी मिट्टी का सिलेंडर जो अत्यधिक दबाव और गर्मी सह सकता है।\n• एंड कैप्स: पीतल या तांबे के मजबूत टर्मिनल जो सिरेमिक बॉडी पर मजबूती से सील होते हैं।\n• फ्यूज तत्व (Element): शुद्ध चांदी (Silver) की पत्तियां। चांदी का उपयोग इसलिए किया जाता है क्योंकि यह सामान्य तापमान पर ऑक्सीडाइज नहीं होती और इसका प्रतिरोध बहुत कम होता है। चांदी की पत्ती में निश्चित स्थानों पर खांचे (notches) बने होते हैं।\n• आर्क शमन माध्यम: शुद्ध क्वार्ट्ज सिलिका रेत (Silica Sand)। यह फ्यूज के अंदर पूरी तरह ठूंस-ठूंस कर भरी होती है।\n\n2. आर्क बुझाने की भौतिकी:\nजब भारी फॉल्ट पर चांदी के खांचे पिघलकर भाप बनते हैं, तो आर्क उत्पन्न होता है। सिलिका रेत उस भयानक गर्मी को तुरंत सोख लेती है और चांदी की वाष्प के साथ मिलकर "फुल्गुराइट" (fulgurite) नामक अचालक कांच का रूप ले लेती है। इससे आर्क का प्रतिरोध अचानक लाखों गुना बढ़ जाता है और करंट 2 से 5 मिलीसेकंड में शून्य हो जाता है।',
        bn: 'হাই রাপচারিং ক্যাপাসিটি (HRC) ফিউজ কোনো প্রকার বিস্ফোরণ বা অগ্নিশিখা নির্গমন ছাড়াই ৮০ kA থেকে ১২০ kA পর্যন্ত শর্ট সার্কিট কারেন্ট নিরাপদে বিচ্ছিন্ন করতে পারে:\n\n১. এইচআরসি ফিউজের অভ্যন্তরীণ গঠন:\n• বহিরাবরণ: উচ্চ তাপীয় ও যান্ত্রিক চাপ সহ্য করতে সক্ষম সিরামিক বা পোরসিলেন সিলিন্ডার।\n• এন্ড ক্যাপ ও ট্যাগ: সিরামিক বডির সাথে মজবুতভাবে আটকানো ব্রাস বা তামার তৈরি টার্মিনাল।\n• ফিউজ উপাদান: খাঁটি রূপার (Ag) সরু পাত। রূপা স্বাভাবিক তাপে জারিত হয় না এবং এর পরিবাহিতা সর্বোচ্চ। পাতটিতে সুনির্দিষ্ট স্থানে খাঁজ কাটা থাকে যেখানে প্রথমে গলন ঘটে।\n• আর্ক নির্বাপক বালি: উচ্চ বিশুদ্ধতার দানাদার সিলিকা কোয়ার্টজ বালি (SiO2) দ্বারা ভেতরের ফাঁকা স্থান সম্পূর্ণ ঠাসা থাকে।\n\n২. আর্ক নির্বাপণের ভৌত প্রক্রিয়া:\nশর্ট সার্কিটে রূপার খাঁজ গলে যখন বাষ্পে পরিণত হয়, তখন সৃষ্ট আর্ক বালির দানায় প্রচণ্ড তাপ সঞ্চালন করে। বালি গলে রূপার সাথে বিক্রিয়া করে "ফুলগুরাইট" নামক অপরিবাহী কাঁচ সদৃশ কঠিন বস্তুতে রূপ নেয়। এতে আর্কের রোধ তীব্রভাবে বৃদ্ধি পায় এবং মাত্র ২ থেকে ৫ মিলিসেকেন্ডের মধ্যেই কারেন্ট শূন্যে নেমে গিয়ে আর্ক নিভে যায়।'
      },
      schematicId: 'circuit-ch15-fuse-characteristics'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch15-l04-01',
      problem: {
        en: 'A semi-enclosed rewirable fuse wire has a continuous current rating of In = 20 A. In laboratory testing, it melts consistently when the continuous current reaches 36 A.\n(a) Calculate the fusing factor of this rewirable fuse.\n(b) A precision HRC cartridge fuse protecting the same feeder has a continuous rating of In = 20 A and a certified fusing factor of 1.25. Calculate the minimum current required to melt the HRC fuse.\n(c) Discuss why the HRC fuse provides superior overcurrent protection for building cables.',
        hi: 'एक सेमी-एनक्लोज्ड रिवायरएबल फ्यूज तार की सतत करंट रेटिंग In = 20 A है। प्रयोगशाला परीक्षण में, यह तब पिघलता है जब धारा 36 A तक पहुंचती है।\n(a) इस रिवायरएबल फ्यूज के फ्यूजिंग फैक्टर की गणना कीजिए।\n(b) उसी फीडर की सुरक्षा करने वाले एक HRC कार्ट्रिज फ्यूज की रेटिंग In = 20 A और प्रमाणित फ्यूजिंग फैक्टर 1.25 है। HRC फ्यूज को पिघलाने के लिए आवश्यक न्यूनतम धारा की गणना कीजिए।\n(c) स्पष्ट कीजिए कि HRC फ्यूज केबलों के लिए बेहतर सुरक्षा क्यों प्रदान करता है।',
        bn: 'একটি রিওয়্যারেবল ফিউজের রেটেড কারেন্ট In = ২০ A। পরীক্ষায় দেখা গেল কারেন্ট ৩৬ A এ পৌঁছালে এটি গলে যায়।\n(a) এই ফিউজটির ফিউজিং ফ্যাক্টর নির্ণয় করুন।\n(b) একই লাইনে ব্যবহৃত একটি ২০ A এইচআরসি কার্ট্রিজ ফিউজের সার্টিফাইড ফিউজিং ফ্যাক্টর ১.২৫ হলে এটি গলতে ন্যূনতম কত কারেন্ট প্রয়োজন?\n(c) কেন এইচআরসি ফিউজ ক্যাবলের জন্য অধিকতর উন্নত সুরক্ষা প্রদান করে তা ব্যাখ্যা করুন।'
      },
      solution: {
        en: 'Given:\n• Rewirable fuse: In = 20 A, If = 36 A\n• HRC fuse: In = 20 A, Kf_HRC = 1.25\n\nStep 1: Calculate Fusing Factor for Rewirable Fuse\nFormula: K_f = I_f / I_n\nSubstitution: K_f = 36 A / 20 A = 1.80\n\nStep 2: Calculate Minimum Fusing Current for HRC Fuse\nFormula: I_f = K_f · I_n\nSubstitution: I_f = 1.25 · 20 A = 25.0 A\n\nStep 3: Engineering Comparison\n• The rewirable fuse allows the circuit to carry up to 35 A indefinitely without blowing (a 75% overload above its 20 A rating), causing severe thermal deterioration of the cable insulation.\n• In contrast, the HRC fuse will reliably melt at 25 A (just a 25% overload), ensuring the cable never operates under prolonged damaging overloads. Furthermore, HRC calibration is completely hermetic and does not deteriorate with atmospheric oxidation.',
        hi: 'चरण 1: रिवायरएबल फ्यूज का फ्यूजिंग फैक्टर\nK_f = 36 / 20 = 1.80\n\nचरण 2: HRC फ्यूज की न्यूनतम फ्यूजिंग धारा\nI_f = 1.25 × 20 = 25.0 A\n\nचरण 3: तुलनात्मक निष्कर्ष\nरिवायरएबल फ्यूज 35 A तक के भारी ओवरलोड (75% अधिक) पर भी नहीं पिघलता, जिससे केबल जल सकती है। जबकि HRC फ्यूज मात्र 25 A (25% ओवरलोड) पर ही पिघल कर परिपथ को सुरक्षित काट देता है।',
        bn: 'ধাপ ১: রিওয়্যারেবল ফিউজের ফিউজিং ফ্যাক্টর\nK_f = ৩৬ / ২০ = ১.৮০\n\nধাপ ২: এইচআরসি ফিউজের ন্যূনতম ফিউজিং কারেন্ট\nI_f = ১.২৫ × ২০ = ২৫.০ A\n\nধাপ ৩: প্রযুক্তিগত তুলনা\nরিওয়্যারেবল ফিউজে ৭৫% অতিরিক্ত লোড (৩৫ A) চললেও তা কাটে না, যা ক্যাবলের ক্ষতি করে। পক্ষান্তরে এইচআরসি ফিউজ মাত্র ২৫ A তেই গলে গিয়ে নিখুঁত সুরক্ষা নিশ্চিত করে।'
      },
      givenValues: { 'In': '20 A', 'If_rewirable': '36 A', 'Kf_HRC': '1.25' },
      finalAnswer: {
        en: 'Rewirable fusing factor = 1.80; HRC minimum fusing current = 25.0 A (HRC trips much earlier on overloads)',
        hi: 'रिवायरएबल फ्यूजिंग फैक्टर = 1.80; HRC न्यूनतम फ्यूजिंग धारा = 25.0 A (HRC ओवरलोड पर बहुत पहले ट्रिप होता है)',
        bn: 'রিওয়্যারেবল ফিউজিং ফ্যাক্টর = ১.৮০; এইচআরসি ন্যূনতম ফিউজিং কারেন্ট = ২৫.০ A (এইচআরসি অনেক আগেই সুরক্ষা দেয়)'
      }
    },
    {
      id: 'ex-ch15-l04-02',
      problem: {
        en: 'According to Preece’s law, a copper wire with diameter d1 = 0.20 mm has a fusing current of I1 = 10.0 A. Determine the required diameter d2 of a copper fuse wire designed to blow at a fusing current of I2 = 27.0 A, assuming identical heat dissipation conditions.',
        hi: 'प्रीस के नियम के अनुसार, व्यास d1 = 0.20 mm वाले तांबे के तार की फ्यूजिंग धारा I1 = 10.0 A है। समान ऊष्मा स्थितियों को मानते हुए, I2 = 27.0 A की फ्यूजिंग धारा पर पिघलने वाले तांबे के फ्यूज तार के आवश्यक व्यास d2 का निर्धारण कीजिए।',
        bn: 'প্রিসের সূত্রানুসারে, d1 = ০.২০ মিমি ব্যাসের তামার তারের ফিউজিং কারেন্ট I1 = ১০.০ A। একই তাপীয় পরিবেশে I2 = ২৭.০ A কারেন্টে গলার জন্য তামার ফিউজ তারের প্রয়োজনীয় ব্যাস d2 কত হতে হবে?'
      },
      solution: {
        en: 'Given:\n• d1 = 0.20 mm, I1 = 10.0 A\n• I2 = 27.0 A\n\nStep 1: Apply Preece’s Law\nI = k · d^(1.5) = k · d^(3/2)\nTherefore: (I2 / I1) = (d2 / d1)^(1.5)\n\nStep 2: Solve for Diameter Ratio\n(d2 / d1) = (I2 / I1)^(1 / 1.5) = (I2 / I1)^(2 / 3)\n\nStep 3: Substitution & Calculation\nI2 / I1 = 27.0 / 10.0 = 2.70\n(d2 / d1) = (2.70)^(2/3) = (2.70)^(0.6667) ≈ 1.938\n\nStep 4: Calculate d2\nd2 = d1 · 1.938 = 0.20 mm · 1.938 ≈ 0.388 mm (approx. 0.39 mm)',
        hi: 'चरण 1: प्रीस का नियम\nI2 / I1 = (d2 / d1)^(1.5)\n\nचरण 2: व्यास अनुपात\nd2 / d1 = (I2 / I1)^(2/3) = (27 / 10)^(2/3) = (2.70)^(0.6667) ≈ 1.938\n\nचरण 3: d2 का मान\nd2 = 0.20 × 1.938 ≈ 0.388 mm',
        bn: 'ধাপ ১: প্রিসের সূত্রের অনুপাত\nI2 / I1 = (d2 / d1)^(১.৫)\n\nধাপ ২: ব্যাসের অনুপাত নির্ণয়\nd2 / d1 = (২৭ / ১০)^(২/৩) = (২.৭)^(০.৬৬৬৭) ≈ ১.৯৩৮\n\nধাপ ৩: d2 এর মান\nd2 = ০.২০ × ১.৯৩৮ ≈ ০.৩৮৮ মিমি (প্রায় ০.৩৯ মিমি)'
      },
      givenValues: { 'd1': '0.20 mm', 'I1': '10.0 A', 'I2': '27.0 A' },
      finalAnswer: {
        en: 'Required copper wire diameter d2 ≈ 0.388 mm (approx. 0.39 mm)',
        hi: 'आवश्यक तांबे के तार का व्यास d2 ≈ 0.388 mm (लगभग 0.39 mm)',
        bn: 'প্রয়োজনীয় তামার তারের ব্যাস d2 ≈ ০.৩৮৮ মিমি (প্রায় ০.৩৯ মিমি)'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Industrial motor circuit branch protection using motor-rated dual-element time-delay fuses to handle high inductive inrush currents without nuisance blowing.',
      'High-voltage distribution transformer primary fusing using expulsion and drop-out fuses (DO fuses) on overhead lines.',
      'Semiconductor protection using ultra-rapid (fast-acting) silver HRC fuses with minimal I²t energy let-through to protect sensitive IGBTs and thyristors.',
      'Backup protection ahead of circuit breakers with limited interrupting capacity to handle potential 100 kA grid short-circuit levels.'
    ],
    hi: [
      'इंडस्ट्रियल मोटरों के भारी स्टार्टिंग करंट को बिना ट्रिप हुए झेलने के लिए टाइम-डिले HRC फ्यूज का उपयोग।',
      'ओवरहेड लाइनों पर वितरण ट्रांसफार्मर की सुरक्षा के लिए ड्रॉप-आउट (DO) फ्यूज का उपयोग।',
      'आईजीबीटी (IGBT) और थाइरिस्टर जैसे संवेदनशील इलेक्ट्रॉनिक उपकरणों को बचाने के लिए सुपर-फास्ट सिल्वर HRC फ्यूज का उपयोग।',
      'ग्रिड के 100 kA शॉर्ट-सर्किट स्तर को सुरक्षित रूप से संभालने के लिए सर्किट ब्रेकरों के आगे बैकअप सुरक्षा के रूप में।'
    ],
    bn: [
      'মোটরের উচ্চ স্টার্টিং কারেন্ট নিরাপদে সামলাতে ইন্ডাস্ট্রিয়াল মোটরে টাইম-ডিলে বিশিষ্ট এইচআরসি ফিউজ স্থাপন।',
      'ওভারহেড লাইনে ডিস্ট্রিবিউশন ট্রান্সফরমারের সুরক্ষায় ড্রপ-আউট (DO) ফিউজের বহুল ব্যবহার।',
      'আইজিবিটি (IGBT) ও থাইরিস্টরের মতো সংবেদনশীল অর্ধপরিবাহী ডিভাইস বাঁচাতে অতি-দ্রুতগতির সিলভার এইচআরসি ফিউজ প্রয়োগ।',
      'পাওয়ার গ্রিডের ১০০ kA সম্ভাব্য শর্ট সার্কিট স্তর নিরাপদে সামলাতে সাবস্টেশনে ব্যাকআপ ফিউজ হিসেবে ব্যবহার।'
    ]
  },
  importantPoints: {
    en: [
      'Fusing factor Kf is always strictly greater than 1.0 (typically 1.2 to 1.5 for HRC fuses and 1.4 to 2.0 for rewirable fuses).',
      'Preece’s law states that fusing current scales with diameter as I = k · d^(1.5).',
      'HRC fuses achieve current-limiting cut-off action, extinguishing the fault in under 5 ms before peak prospective current can be attained.',
      'Silver is preferred for HRC elements because of its chemical stability against oxidation and predictable thermal fusing characteristics.',
      'Quartz silica sand in HRC fuses melts into an insulating vitrified composite (fulgurite) to rapidly snuff out the arc.'
    ],
    hi: [
      'फ्यूजिंग फैक्टर Kf हमेशा 1.0 से बड़ा होता है (HRC के लिए 1.2-1.5 और रिवायरएबल के लिए 1.4-2.0)।',
      'प्रीस के नियम के अनुसार फ्यूजिंग धारा व्यास के 1.5 घात (d^1.5) के अनुपात में होती है।',
      'HRC फ्यूज 5 ms से कम समय में करंट को काटकर अपने चरम मान से पहले ही शॉर्ट-सर्किट बुझा देते हैं।',
      'चांदी का उपयोग HRC में इसलिए होता है क्योंकि इस पर जंग नहीं लगती और इसका गलनांक स्थिर रहता है।',
      'सिलिका रेत पिघलकर कांच जैसी फुल्गुराइट बनाती है जो बिजली के आर्क को तुरंत बुझा देती है।'
    ],
    bn: [
      'ফিউজিং ফ্যাক্টর সর্বদা ১.০ অপেক্ষা বেশি হয় (এইচআরসি ফিউজে ১.২-১.৫ এবং রিওয়্যারেবলে ১.৪-২.০)।',
      'প্রিসের সূত্রানুসারে ফিউজিং কারেন্ট তারের ব্যাসের ১.৫ ঘাতের (d^১.৫) সমানুপাতিক।',
      'এইচআরসি ফিউজ কারেন্ট লিমিটিং অ্যাকশনের মাধ্যমে ৫ মিলিসেকেন্ডের মধ্যে পিক কারেন্টে পৌঁছানোর আগেই লাইন বিচ্ছিন্ন করে।',
      'রূপার রাসায়নিক স্থায়িত্ব ও নির্ভরযোগ্য গলন বৈশিষ্ট্যের কারণে এটি এইচআরসি উপাদানে সেরা।',
      'কোয়ার্টজ বালি গলে অপরিবাহী ফুলগুরাইট তৈরি করে বিদ্যুৎ ক্ষরণ ও মারাত্মক আর্ক নিভিয়ে দেয়।'
    ]
  },
  commonMistakes: {
    en: [
      'Replacing a blown fuse wire with a thicker wire (or copper nails/wire twists), which completely disables overcurrent protection and leads directly to building fires.',
      'Assuming that a 16 A fuse will blow immediately at 16.5 A; in reality, continuous current must exceed the minimum fusing current (e.g., 20-25 A) to melt the element.',
      'Refilling blown HRC fuse cartridges with ordinary sand; only specialized high-purity graded quartz silica sand can withstand arc pressures and quench plasma.',
      'Believing fuses offer ground fault shock protection for humans; typical human shock currents (30-100 mA) are hundreds of times too small to blow a 16 A fuse.'
    ],
    hi: [
      'उड़े हुए फ्यूज में मोटा तार या लोहे की कील लगा देना, जिससे सुरक्षा पूरी तरह खत्म हो जाती है और आग लग जाती है।',
      'यह सोचना कि 16 A का फ्यूज 16.5 A पर तुरंत उड़ जाएगा; वास्तव में उसे उड़ने के लिए न्यूनतम फ्यूजिंग धारा (20-25 A) की आवश्यकता होती है।',
      'उड़े हुए HRC फ्यूज में साधारण नदी की रेत भर देना; केवल विशेष शुद्ध क्वार्ट्ज सिलिका रेत ही आर्क को बुझा सकती है।',
      'यह मानना कि फ्यूज इंसान को बिजली के झटके से बचा सकता है; झटके का करंट (30 mA) 16 A के फ्यूज को उड़ाने के लिए बहुत छोटा होता है।'
    ],
    bn: [
      'ফিউজ কাটলে মোটা তার বা তামার তারের গোছা পেঁচিয়ে দেওয়া, যা অগ্নিকাণ্ডের সরাসরি প্রধান কারণ।',
      'মনে করা যে ১৬ অ্যাম্পিয়ারের ফিউজ ১৬.১ অ্যাম্পিয়ারেই সাথে সাথে গলে যাবে; গলনের জন্য কারেন্টকে ন্যূনতম ফিউজিং মানে পৌঁছাতে হয়।',
      'এইচআরসি ফিউজে সাধারণ নদীর বালি ভরা; শুধুমাত্র বিশেষ রাসায়নিকভাবে বিশুদ্ধ কোয়ার্টজ বালিই আর্ক নেভাতে পারে।',
      'বিশ্বাস করা যে ফিউজ মানুষকে ইলেকট্রিক শক থেকে বাঁচাবে; মানুষের শক কারেন্ট (৩০ mA) ১৬ A ফিউজ গলানোর মতো তীব্র নয়।'
    ]
  },
  keyTakeaways: {
    en: [
      'Fuses protect circuit wiring and equipment against destructive thermal overloads and short circuits via sacrificial thermal melting.',
      'Fusing factor Kf = If / In dictates sensitivity; lower values mean tighter overcurrent protection.',
      'HRC fuses feature high breaking capacity (>80 kA) and fast current-limiting cut-off action with silica sand arc extinction.',
      'Always replace blown fuses with exact certified ratings and never bridge fuse carriers with uncalibrated conductors.'
    ],
    hi: [
      'फ्यूज परिपथ के तारों को जलने से बचाने के लिए खुद पिघलकर सुरक्षा प्रदान करता है।',
      'फ्यूजिंग फैक्टर Kf = If / In संवेदनशीलता तय करता है; कम मान बेहतर सुरक्षा देता है।',
      'HRC फ्यूज की ब्रेकिंग क्षमता बहुत अधिक (>80 kA) होती है और यह सिलिका रेत से आर्क को तुरंत बुझाता है।',
      'हमेशा सही रेटिंग के प्रमाणित फ्यूज का ही उपयोग करें।'
    ],
    bn: [
      'ফিউজ নিজে আত্মহুতি দিয়ে তারের অতিরিক্ত গরম হওয়া ও শর্ট সার্কিট থেকে সার্কিট রক্ষা করে।',
      'ফিউজিং ফ্যাক্টর Kf = If / In সুরক্ষার সংবেদনশীলতা নির্দেশ করে; কম মান মানে দ্রুত ওভারলোড সুরক্ষা।',
      'এইচআরসি ফিউজের ব্রেকিং ক্যাপাসিটি অনেক বেশি (>৮০ kA) এবং এটি বালি দিয়ে দ্রুত আর্ক নেভায়।',
      'সর্বদা সঠিক রেটিংয়ের সার্টিফাইড ফিউজ ব্যবহার করুন, কখনও আনুমানিক তার জোড়া লাগাবেন না।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch15-l04-01',
      question: {
        en: 'What is the definition of "Fusing Factor" in electrical fuse technology?',
        hi: 'विद्युत फ्यूज तकनीक में "फ्यूजिंग फैक्टर" की परिभाषा क्या है?',
        bn: 'বৈদ্যুতিক ফিউজ প্রযুক্তিতে "ফিউজিং ফ্যাক্টর" এর সংজ্ঞা কী?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Ratio of rated current to supply voltage', hi: 'रेटेड धारा और आपूर्ति वोल्टेज का अनुपात', bn: 'রেটেড কারেন্ট ও সাপ্লাই ভোল্টেজের অনুপাত' } },
        { id: 'opt-2', text: { en: 'Ratio of minimum fusing current to rated continuous current (If / In)', hi: 'न्यूनतम फ्यूजिंग धारा और रेटेड सतत धारा का अनुपात (If / In)', bn: 'ন্যূনতম ফিউজিং কারেন্ট ও অবিচ্ছিন্ন রেটেড কারেন্টের অনুপাত (If / In)' } },
        { id: 'opt-3', text: { en: 'Ratio of fuse length to its diameter', hi: 'फ्यूज की लंबाई और उसके व्यास का अनुपात', bn: 'ফিউজের দৈর্ঘ্য ও তার ব্যাসের অনুপাত' } },
        { id: 'opt-4', text: { en: 'Ratio of ambient temperature to copper melting point', hi: 'परिवेशी तापमान और तांबे के गलनांक का अनुपात', bn: 'পরিবেশের তাপমাত্রা ও তামার গলনাঙ্কের অনুপাত' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'Fusing factor is defined as the ratio of minimum fusing current (the threshold current at which the wire melts) to the rated continuous current (K_f = I_f / I_n).',
        hi: 'फ्यूजिंग फैक्टर न्यूनतम फ्यूजिंग धारा और रेटेड धारा का अनुपात होता है (Kf = If / In)।',
        bn: 'ফিউজিং ফ্যাক্টর হলো ন্যূনতম ফিউজিং কারেন্ট এবং রেটেড অবিচ্ছিন্ন কারেন্টের অনুপাত (Kf = If / In)।'
      }
    },
    {
      id: 'mcq-ch15-l04-02',
      question: {
        en: 'What is the theoretical numerical relationship between wire diameter (d) and fusing current (I) according to Preece’s Law?',
        hi: 'प्रीस के नियम के अनुसार तार के व्यास (d) और फ्यूजिंग धारा (I) के बीच सैद्धांतिक संबंध क्या है?',
        bn: 'প্রিসের সূত্রানুসারে তারের ব্যাস (d) এবং ফিউজিং কারেন্ট (I) এর মধ্যকার সম্পর্ক কী?'
      },
      options: [
        { id: 'opt-1', text: { en: 'I ∝ d', hi: 'I ∝ d', bn: 'I ∝ d' } },
        { id: 'opt-2', text: { en: 'I ∝ d²', hi: 'I ∝ d²', bn: 'I ∝ d²' } },
        { id: 'opt-3', text: { en: 'I ∝ d^(1.5) (or d^(3/2))', hi: 'I ∝ d^(1.5) (या d^(3/2))', bn: 'I ∝ d^(১.৫) (বা d^(৩/২))' } },
        { id: 'opt-4', text: { en: 'I ∝ 1 / d', hi: 'I ∝ 1 / d', bn: 'I ∝ ১ / d' } }
      ],
      correctOptionId: 'opt-3',
      explanation: {
        en: 'Preece derived from steady-state thermal equilibrium that heat generated (I²R) equals heat radiated and convected (proportional to surface area π d l), giving I = k · d^(1.5).',
        hi: 'प्रीस के नियम के अनुसार तापीय संतुलन में उत्पन्न ऊष्मा और सतह से निकलने वाली ऊष्मा के आधार पर I ∝ d^(1.5) होता है।',
        bn: 'তাপীয় সাম্যাবস্থার সমীকরণ থেকে প্রিস দেখান যে উৎপন্ন তাপ ও বিকিরিত তাপের ভারসাম্যে I ∝ d^(১.৫) সম্পর্ক প্রযোজ্য।'
      }
    },
    {
      id: 'mcq-ch15-l04-03',
      question: {
        en: 'Why is pure silver (Ag) predominantly preferred over copper or aluminum for high-precision HRC fuse elements?',
        hi: 'उच्च-सटीक HRC फ्यूज तत्वों के लिए तांबे या एल्यूमीनियम की तुलना में शुद्ध चांदी (Ag) को प्रमुखता क्यों दी जाती है?',
        bn: 'উচ্চ-মানের এইচআরসি ফিউজ উপাদান হিসেবে তামা বা অ্যালুমিনিয়ামের চেয়ে খাঁটি রূপা (Ag) অধিক পছন্দ করা হয় কেন?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Silver is completely radioactive', hi: 'चांदी पूरी तरह से रेडियोधर्मी होती है', bn: 'রূপা সম্পূর্ণ তেজস্ক্রিয়' } },
        { id: 'opt-2', text: { en: 'Silver resists atmospheric oxidation, preventing long-term deterioration of calibrated fusing ratings, and has low specific heat with high conductivity', hi: 'चांदी पर वायुमंडलीय जंग नहीं लगती जिससे इसकी रेटिंग नहीं बदलती, और इसकी उच्च चालकता तथा कम विशिष्ट ऊष्मा होती है', bn: 'রূপায় জারণ ধরে না ফলে রেটিং অপরিবর্তিত থাকে এবং এর উচ্চ পরিবাহিতা ও কম আপেক্ষিক তাপ রয়েছে' } },
        { id: 'opt-3', text: { en: 'Silver has the highest melting point of any metal (>3,000°C)', hi: 'चांदी का गलनांक किसी भी धातु से सबसे अधिक (>3,000°C) होता है', bn: 'রূপার গলনাঙ্ক যেকোনো ধাতুর চেয়ে বেশি (>৩,০০০°C)' } },
        { id: 'opt-4', text: { en: 'Silver is cheaper than iron', hi: 'चांदी लोहे से सस्ती होती है', bn: 'রূপা লোহার চেয়ে সস্তা' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'Silver does not oxidize readily under continuous operating temperatures, ensuring that its cross-section and calibrated melting characteristics remain constant for decades without nuisance blowing.',
        hi: 'चांदी पर ऑक्सीकरण का प्रभाव नहीं पड़ता जिससे इसका क्रॉस-सेक्शन और ट्रिपिंग समय दशकों तक स्थिर रहता है।',
        bn: 'রূপা স্বাভাবিক তাপে জারিত হয় না বলে এর প্রস্থচ্ছেদ ও ট্রিপিং রেটিং বছরের পর বছর অপরিবর্তিত থাকে।'
      }
    },
    {
      id: 'mcq-ch15-l04-04',
      question: {
        en: 'What is the role of quartz silica sand packed inside an HRC fuse cartridge?',
        hi: 'HRC फ्यूज कार्ट्रिज के अंदर भरी क्वार्ट्ज सिलिका रेत की क्या भूमिका होती है?',
        bn: 'একটি এইচআরসি ফিউজের ভেতর ঠাসা কোয়ার্টজ বালির মূল ভূমিকা কী?'
      },
      options: [
        { id: 'opt-1', text: { en: 'To make the fuse heavier so it cannot blow away in the wind', hi: 'फ्यूज को भारी बनाना ताकि हवा में न उड़े', bn: 'ফিউজ ভারী করা যাতে বাতাসে উড়ে না যায়' } },
        { id: 'opt-2', text: { en: 'To rapidly absorb arc thermal energy and fuse with metal vapor into an insulating composite (fulgurite) to extinguish the arc', hi: 'आर्क की गर्मी को तेजी से सोखना और धातु वाष्प के साथ मिलकर एक अचालक ठोस (फुल्गुराइट) बनाकर आर्क को बुझाना', bn: 'আর্কের তাপ দ্রুত শোষণ করে ধাতব বাষ্পের সাথে বিক্রিয়ায় অপরিবাহী পদার্থ (ফুলগুরাইট) গঠন করে আর্ক নিভিয়ে ফেলা' } },
        { id: 'opt-3', text: { en: 'To conduct electric current in parallel with the silver wire', hi: 'चांदी के तार के समानांतर विद्युत धारा का संचालन करना', bn: 'রূপার তারের সমান্তরালে বিদ্যুৎ পরিবহন করা' } },
        { id: 'opt-4', text: { en: 'To dissolve the ceramic outer body', hi: 'सिरेमिक बाहरी आवरण को घोलना', bn: 'সিরামিক বডি গলিয়ে ফেলা' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'The fine silica sand rapidly cools the plasma arc and fuses into a glass-like fulgurite compound with very high electrical resistance, extinguishing the arc within milliseconds.',
        hi: 'सिलिका रेत प्लाज्मा आर्क को तेजी से ठंडा करती है और फुल्गुराइट नामक उच्च प्रतिरोधक कांच जैसी संरचना में बदलकर आर्क बुझा देती है।',
        bn: 'সিলিকা বালি আর্ক প্লাজমার তাপ টেনে নিয়ে অপরিবাহী ফুলগুরাইট কাঁচ তৈরি করে সেকেন্ডের ভগ্নাংশে আর্ক নির্বাপণ করে।'
      }
    },
    {
      id: 'mcq-ch15-l04-05',
      question: {
        en: 'What is meant by the "Current Limiting (Cut-off)" characteristic of an HRC fuse?',
        hi: 'HRC फ्यूज की "करंट लिमिटिंग (कट-ऑफ)" विशेषता से क्या तात्पर्य है?',
        bn: 'এইচআরসি ফিউজের "কারেন্ট লিমিটিং (কাট-অফ)" বৈশিষ্ট্য বলতে কী বোঝায়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'The fuse melts so quickly during a short circuit that current is interrupted before it can reach its theoretical peak prospective value', hi: 'शॉर्ट सर्किट के दौरान फ्यूज इतनी तेजी से पिघलता है कि धारा अपने सैद्धांतिक चरम (peak) मान तक पहुंचने से पहले ही कट जाती है', bn: 'শর্ট সার্কিটে ফিউজ এত দ্রুত গলে যায় যে সম্ভাব্য পিক কারেন্টে পৌঁছানোর পূর্বেই লাইন কেটে যায়' } },
        { id: 'opt-2', text: { en: 'The fuse converts alternating current directly into battery direct current', hi: 'फ्यूज प्रत्यावर्ती धारा को सीधे दिष्ट धारा में बदल देता है', bn: 'ফিউজ এসি কারেন্টকে সরাসরি ডিসিতে রূপান্তর করে' } },
        { id: 'opt-3', text: { en: 'The fuse restricts the voltage to zero at all times', hi: 'फ्यूज हर समय वोल्टेज को शून्य पर सीमित रखता है', bn: 'ফিউজ সব সময় ভোল্টেজ শূন্য করে রাখে' } },
        { id: 'opt-4', text: { en: 'The fuse operates only when the user presses an emergency button', hi: 'फ्यूज केवल तभी काम करता है जब उपयोगकर्ता आपातकालीन बटन दबाता है', bn: 'ব্যবহারকারী বোতাম টিপলেই কেবল ফিউজ কাটে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Fast-acting HRC fuses melt during the initial sub-cycle rise of a short circuit, chopping the current at a cut-off value far below the prospective short-circuit peak.',
        hi: 'HRC फ्यूज शॉर्ट सर्किट करंट के अपने चरम तक पहुंचने से पहले ही (सब-साइकिल में) पिघल जाता है, जिससे अधिकतम फॉल्ट करंट बहुत कम स्तर पर ही रुक जाता है।',
        bn: 'এইচআরসি ফিউজ প্রথম সাইকেলের এক-চতুর্থাংশ সময়ের মধ্যেই গলে গিয়ে কারেন্টকে তার সম্ভাব্য সর্বোচ্চ মানে পৌঁছাতে বাধা দেয়।'
      }
    },
    {
      id: 'mcq-ch15-l04-06',
      question: {
        en: 'What is the typical range of fusing factor for common rewirable (Kit-Kat) semi-enclosed fuses?',
        hi: 'सामान्य रिवायरएबल (किट-कैट) अर्ध-संलग्न फ्यूज के लिए फ्यूजिंग फैक्टर की सामान्य सीमा क्या है?',
        bn: 'সাধারণ রিওয়্যারেবল (কিট-ক্যাট) ফিউজের ক্ষেত্রে ফিউজিং ফ্যাক্টরের সাধারণ সীমা কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '0.1 to 0.5', hi: '0.1 से 0.5', bn: '০.১ থেকে ০.৫' } },
        { id: 'opt-2', text: { en: '1.0 exactly', hi: 'बिल्कुल 1.0', bn: 'ঠিক ১.০' } },
        { id: 'opt-3', text: { en: '1.4 to 2.0', hi: '1.4 से 2.0', bn: '১.৪ থেকে ২.০' } },
        { id: 'opt-4', text: { en: '10 to 50', hi: '10 से 50', bn: '১০ থেকে ৫০' } }
      ],
      correctOptionId: 'opt-3',
      explanation: {
        en: 'Rewirable fuses have high fusing factors between 1.4 and 2.0, meaning they require 40% to 100% sustained overload current before melting.',
        hi: 'रिवायरएबल फ्यूज का फ्यूजिंग फैक्टर 1.4 से 2.0 होता है, यानी पिघलने के लिए इन्हें 40% से 100% अधिक ओवरलोड धारा की आवश्यकता होती है।',
        bn: 'রিওয়্যারেবল ফিউজের ফিউজিং ফ্যাক্টর ১.৪ থেকে ২.০, অর্থাৎ তার গলতে রেটিংয়ের চেয়ে ৪০% থেকে ১০০% অতিরিক্ত কারেন্টের প্রয়োজন হয়।'
      }
    },
    {
      id: 'mcq-ch15-l04-07',
      question: {
        en: 'Why is it strictly forbidden to bridge a blown fuse carrier with copper binding wire or nails?',
        hi: 'उड़े हुए फ्यूज कैरियर को तांबे के तार या कीलों से जोड़ना सख्त वर्जित क्यों है?',
        bn: 'ফিউজ কেটে গেলে তার ক্যারিয়ারে তামার তারের বাঁধন বা পেরেক লাগানো কঠোরভাবে নিষিদ্ধ কেন?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Because copper looks unattractive inside the box', hi: 'क्योंकि बॉक्स के अंदर तांबा देखने में अच्छा नहीं लगता', bn: 'কারণ বক্সের ভেতর তামা দেখতে সুন্দর লাগে না' } },
        { id: 'opt-2', text: { en: 'Because an oversized conductor will not melt during a fault, causing the hidden building wiring to overheat, ignite, and destroy the structure', hi: 'क्योंकि अधिक मोटा तार फॉल्ट में नहीं पिघलेगा, जिससे दीवारों के अंदर की वायरिंग गर्म होकर आग पकड़ लेगी और भवन नष्ट हो जाएगा', bn: 'কারণ অতিরিক্ত মোটা পরিবাহী ফল্টেও গলবে না, ফলে দেয়ালের ভেতরের তার অতিরিক্ত গরম হয়ে অগ্নিকাণ্ড ঘটাবে' } },
        { id: 'opt-3', text: { en: 'Because nails cause the voltage to drop to negative values', hi: 'क्योंकि कीलों से वोल्टेज ऋणात्मक हो जाता है', bn: 'কারণ পেরেক লাগালে ভোল্টেজ ঋণাত্মক হয়' } },
        { id: 'opt-4', text: { en: 'Because it improves the power factor too much', hi: 'क्योंकि यह पावर फैक्टर को बहुत अधिक बढ़ा देता है', bn: 'কারণ এতে পাওয়ার ফ্যাক্টর অতিরিক্ত বাড়ে' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'Using unrated wire or nails eliminates the calibrated weak link. Fault currents continue to flow unimpeded until the building cables catch fire.',
        hi: 'मोटे तार या कील लगाने से सुरक्षा समाप्त हो जाती है और फॉल्ट करंट के कारण पूरी वायरिंग में आग लग जाती है।',
        bn: 'অনির্দিষ্ট তার বা পেরেক লাগালে ফিউজের সুরক্ষা নষ্ট হয় এবং ফল্ট কারেন্টের কারণে লাইনে আগুন ধরে যায়।'
      }
    },
    {
      id: 'mcq-ch15-l04-08',
      question: {
        en: 'What physical quantity does the "I²t" rating of a fuse describe?',
        hi: 'फ्यूज की "I²t" रेटिंग किस भौतिक राशि का वर्णन करती है?',
        bn: 'একটি ফিউজের "I²t" রেটিং কোন ভৌত রাশি নির্দেশ করে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Thermal energy let-through into the protected circuit during fault clearing', hi: 'फॉल्ट क्लीयरेंस के दौरान संरक्षित परिपथ में जाने वाली तापीय ऊर्जा का माप', bn: 'ফল্ট ক্লিয়ারিংয়ের সময় সার্কিটে প্রবাহিত তাপীয় ও যান্ত্রিক শক্তির পরিমাণ' } },
        { id: 'opt-2', text: { en: 'The weight of the fuse in kilograms', hi: 'किलोग्राम में फ्यूज का वजन', bn: 'কিলোগ্রামে ফিউজের ওজন' } },
        { id: 'opt-3', text: { en: 'The frequency of the alternating current in hertz', hi: 'हर्ट्ज़ में प्रत्यावर्ती धारा की आवृत्ति', bn: 'হার্টজে এসি কারেন্টের কম্পাঙ্ক' } },
        { id: 'opt-4', text: { en: 'The length of the ceramic cartridge in inches', hi: 'इंच में सिरेमिक कार्ट्रिज की लंबाई', bn: 'ইঞ্চিতে সিরামিক কাঠামোর দৈর্ঘ্য' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'The Joule integral I²t (Ampere-squared seconds) represents the thermal energy let through by the fuse to downstream cables and semiconductor components before total interruption.',
        hi: 'जूल समाकल I²t फॉल्ट कटने से पहले फ्यूज द्वारा आगे जाने दी जाने वाली तापीय ऊर्जा का पैमाना है।',
        bn: 'জুল ইন্টিগ্রাল I²t হলো সম্পূর্ণ সার্কিট বিচ্ছিন্ন হওয়ার আগে ক্যাবল বা ডিভাইসে পরিবাহিত তাপীয় শক্তির নির্দেশক।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch15-l04-01',
      question: {
        en: 'Explain why a fuse must always be inserted in the phase (live) conductor and never in the neutral conductor of a single-phase AC circuit.',
        hi: 'स्पष्ट कीजिए कि सिंगल-फेज AC परिपथ में फ्यूज हमेशा फेज (लाइव) तार में ही क्यों लगाया जाना चाहिए और कभी भी न्यूट्रल तार में क्यों नहीं लगाना चाहिए।',
        bn: 'ব্যাখ্যা করুন কেন সিঙ্গেল ফেজ এসি সার্কিটে ফিউজ সর্বদা ফেজ তারে স্থাপন করতে হয় এবং কখনোই নিউট্রাল তারে লাগানো উচিত নয়।'
      },
      hint: {
        en: 'Consider what happens to the voltage on the appliance chassis if a neutral fuse blows during a fault while the phase conductor remains energized.',
        hi: 'विचार करें कि यदि न्यूट्रल फ्यूज उड़ जाए और फेज जुड़ा रहे तो उपकरण की बॉडी पर 230 V का लाइव वोल्टेज बना रहेगा।',
        bn: 'নিউট্রাল ফিউজ কাটলে কিন্তু ফেজ তার সংযুক্ত থাকলে যন্ত্রপাতির বডি সম্পূর্ণ লাইভ (২৩০ V) থেকে যাবে, ফলে মারাত্মক শক ঝুঁকি তৈরি হবে।'
      }
    },
    {
      id: 'pq-ch15-l04-02',
      question: {
        en: 'A 63 A HRC fuse has a pre-arcing I²t value of 4,200 A²·s and an arcing I²t value of 7,800 A²·s. Calculate the total operating I²t let-through of this fuse.',
        hi: 'एक 63 A HRC फ्यूज का प्री-आर्किंग I²t मान 4,200 A²·s और आर्किंग I²t मान 7,800 A²·s है। इस फ्यूज के कुल ऑपरेटिंग I²t लेट-थ्रू की गणना कीजिए।',
        bn: 'একটি ৬৩ A এইচআরসি ফিউজের প্রি-আর্কিং I²t হলো ৪,২০০ A²·s এবং আর্কিং I²t হলো ৭,৮০০ A²·s। মোট অপারেটিং I²t নির্ণয় করুন।'
      },
      hint: {
        en: 'Total I²t = Pre-arcing I²t + Arcing I²t = 4,200 + 7,800 = 12,000 A²·s.',
        hi: 'कुल I²t = 4,200 + 7,800 = 12,000 A²·s।',
        bn: 'মোট I²t = ৪,২০০ + ৭,৮০০ = ১২,০০০ A²·s।'
      }
    }
  ]
};

export const LESSON_FUSE_CONCEPT = LESSON_FUSE;
