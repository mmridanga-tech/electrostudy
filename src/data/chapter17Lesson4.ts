import { Lesson } from '../types';

export const LESSON_DIFFERENTIAL_PROTECTION: Lesson = {
  id: 'lsn-ch17-differential-protection-principles',
  topicId: 'tp-ch17-differential-protection-principles',
  chapterId: 'ch-advanced-power-system-protection',
  order: 4,
  title: {
    en: 'Differential Protection Principles and Applications',
    hi: 'डिफरेंशियल सुरक्षा सिद्धांत एवं अनुप्रयोग',
    bn: 'ডিফারেনশিয়াল সুরক্ষার মূলনীতি ও প্রয়োগ'
  },
  description: {
    en: 'In-depth analysis of unit differential protection: Kirchhoff’s Current Law implementation, Merz-Price circulating current scheme, CT mismatch and spill currents, percentage biased differential relays with dual-slope restraint, and high-impedance differential protection (ANSI 87B/64R) with stabilizing resistors and Metrosils.',
    hi: 'यूनिट डिफरेंशियल सुरक्षा का गहन विश्लेषण: किरचॉफ के करंट नियम का अनुप्रयोग, मर्ज-प्राइस सर्कुलेटिंग करंट योजना, CT बेमेल और स्पिल धाराएं, दोहरी ढलान (ड्यूल-स्लोप) संयम के साथ प्रतिशत बायस्ड डिफरेंशियल रिले, और स्टेबिलाइजिंग रेसिस्टर व मेट्रोसिल के साथ उच्च-प्रतिबाधा सुरक्षा (ANSI 87B/64R)।',
    bn: 'ইউনিট ডিফারেনশিয়াল সুরক্ষার বিশদ বিশ্লেষণ: কার্শফের কারেন্ট সূত্রের প্রয়োগ, মার্জ-প্রাইস সংবহন স্কিম, সিটির অমিল ও স্পিল কারেন্ট, ডুয়াল-স্লোপ বিশিষ্ট পার্সেন্টেজ বায়াসড ডিফারেনশিয়াল রিলে এবং স্ট্যাবিলাইজিং রেজিস্ট্যান্স ও মেট্রোসিল সহ হাই-ইম্পিডেন্স সুরক্ষা (ANSI 87B/64R)।'
  },
  estimatedMinutes: 55,
  easyExplanation: {
    en: 'Differential protection is the gold standard of electrical protection for high-value apparatus such as generators, transformers, and substation busbars. It is based directly on Kirchhoff’s Current Law: whatever current enters a protected equipment must exactly equal the current leaving it. Current transformers (CTs) are installed at both the input and output terminals and connected together in a circulating loop with a central relay coil. Under normal loading or external faults, the incoming and outgoing currents balance to zero, and no current flows through the relay coil. But if an insulation breakdown occurs inside the equipment, the current balance is shattered, and a massive difference current ("spill current") surges into the relay, commanding the circuit breakers to trip instantaneously within 20 milliseconds!',
    hi: 'डिफरेंशियल सुरक्षा जनरेटर, ट्रांसफार्मर और बसबार जैसे महंगे उपकरणों की सुरक्षा के लिए सबसे सटीक और भरोसेमंद तकनीक है। यह किरचॉफ के करंट नियम पर आधारित है: उपकरण में प्रवेश करने वाली धारा बाहर निकलने वाली धारा के बिल्कुल बराबर होनी चाहिए। उपकरण के दोनों सिरों पर CT लगाए जाते हैं। सामान्य स्थिति या बाहरी फॉल्ट में, दोनों सिरों का करंट संतुलित रहता है और रिले में कोई करंट नहीं जाता। लेकिन जब उपकरण के अंदर कोई आंतरिक फॉल्ट होता है, तो करंट का संतुलन बिगड़ जाता है और रिले तुरंत (20 मिलीसेकंड के भीतर) सभी ब्रेकर्स को ट्रिप करने का आदेश देता है!',
    bn: 'জেনারেটর, ট্রান্সফরমার ও বাসবারের মতো মূল্যবান যন্ত্রপাতির জন্য ডিফারেনশিয়াল সুরক্ষা হলো সেরা ও নির্ভরযোগ্য পদ্ধতি। এটি কার্শফের কারেন্ট সূত্রের ওপর ভিত্তি করে কাজ করে: যন্ত্রপাতিতে যে পরিমাণ বিদ্যুৎ প্রবেশ করবে, ঠিক সেই পরিমাণ বিদ্যুৎ বেরিয়ে যাবে। যন্ত্রের উভয় প্রান্তে সিটি বসিয়ে একটি লুপ তৈরি করে রিলের সাথে যুক্ত করা হয়। স্বাভাবিক অবস্থায় বা বাইরের ফল্টে রিলের মধ্য দিয়ে কোনো কারেন্ট যায় না। কিন্তু যন্ত্রের অভ্যন্তরে কোনো ফল্ট দেখা দিলে উভয় দিকের ভারসাম্য নষ্ট হয়ে একটি বড় "স্পিল কারেন্ট" রিলের ভেতর দিয়ে প্রবাহিত হয় এবং ২০ মিলিসেকন্ডের মধ্যে ব্রেকার তাৎক্ষণিক ট্রিপ করে!'
  },
  detailedExplanation: {
    en: 'Differential protection (ANSI 87) is a strictly bounded unit protection scheme that requires no external time grading:\n\n1. Merz-Price Circulating Current Principle:\nUnder healthy conditions or external through-faults, primary currents I1 and I2 satisfy I1 = I2. The secondary currents circulate harmlessly through the pilot leads, resulting in zero differential operating current:\nI_diff = |I1_sec - I2_sec| = 0\nDuring an in-zone internal fault, fault current feeds from both terminals (or from one terminal to ground), causing the secondary currents to add together in the central branch:\nI_diff = |I1_sec + I2_sec| > 0 (tripping the relay immediately).\n\n2. The Problem of Spill Current & False Tripping:\nIn practical systems, secondary currents never balance perfectly due to:\n• CT manufacturing tolerances and slight turns ratio differences.\n• Unequal magnetic saturation of CT cores during severe through-faults with DC offset.\n• Transformer on-load tap changers (OLTC) altering turns ratios by ±10% to ±15%.\nThe resulting false difference current flowing into the relay during external faults is termed "spill current".\n\n3. Percentage Biased (Restrained) Differential Relay:\nTo prevent false tripping on external faults, restraining coils are introduced to generate a stabilizing force proportional to the through-current:\n• Operating (Differential) Current: I_diff = |I1 - I2|\n• Restraining (Bias) Current: I_rest = (|I1| + |I2|) / 2  (or max(|I1|, |I2|) in some numerical standards)\nThe relay trips ONLY when:\nI_diff > Slope * I_rest + I_pickup\nModern numerical relays utilize a Dual-Slope Characteristic:\n• Slope 1 (typically 15% to 30%): Handles normal CT mismatch and OLTC tap variation at moderate load currents.\n• Slope 2 (typically 50% to 80%): Engaged beyond a breakpoint current (e.g., 2 to 3 times rated) to guarantee complete restraint against severe CT saturation during catastrophic through-faults.\n\n4. High-Impedance Differential Protection (ANSI 87B / 64R):\nWidely used for substation busbars and Restricted Earth Fault (REF) protection. Rather than using restraining coils, all CTs are wired in parallel across a high ohmic stabilizing resistor (R_stab). If one CT saturates completely during an external fault, its magnetizing branch becomes a short circuit. The stabilizing resistor forces the spill current to divert harmlessly through the saturated CT secondary rather than through the sensitive relay coil.\nFormula for Stabilizing Resistance:\nR_stab = [ (If_max / N) * (Rct + 2*Rlead) ] / I_relay_pickup\nA non-linear silicon carbide resistor (Metrosil varistor) is placed in parallel to clamp dangerous overvoltages during internal faults to safe limits (<2 kV).',
    hi: 'डिफरेंशियल सुरक्षा के गहन तकनीकी सिद्धांत:\n1. सर्कुलेटिंग करंट सिद्धांत: सामान्य स्थिति में I_diff = |I1 - I2| = 0। आंतरिक फॉल्ट में I_diff = |I1 + I2| > 0 होता है और रिले ट्रिप कर जाता है।\n2. स्पिल करंट और बायस्ड रिले: CT असंतुलन और सैचुरेशन के कारण बाहरी फॉल्ट पर गलत स्पिल करंट बनता है। इससे बचने के लिए बायसिंग कॉइल (रेस्ट्रेनिंग कॉइल) लगाई जाती है। रिले तभी ट्रिप करता है जब I_diff > Slope * I_rest हो।\n3. डुअल-स्लोप विशेषता: स्लोप 1 (20-30%) सामान्य टैप बदलाव को संभालता है; स्लोप 2 (60-80%) भारी थ्रू-फॉल्ट में CT सैचुरेशन के समय गलत ट्रिपिंग रोकता है।\n4. हाई-इम्पीडेंस डिफरेंशियल प्रोटेक्शन (87B/64R): बसबार और ट्रांसफार्मर अर्थ फॉल्ट के लिए उपयोग किया जाता है। इसमें एक स्टेबिलाइजिंग रेसिस्टर (R_stab) और वोल्टेज को सीमित करने के लिए मेट्रोसिल लगाया जाता है।',
    bn: 'ডিফারেনশিয়াল সুরক্ষার মূল প্রযুক্তিগত বৈশিষ্ট্য:\n১. সংবহন নীতি: স্বাভাবিক অবস্থায় I_diff = |I1 - I2| = ০। অভ্যন্তরীণ ফল্টে I_diff রিলের মধ্য দিয়ে গিয়ে তাৎক্ষণিক ট্রিপ নিশ্চিত করে।\n২. স্পিল কারেন্ট ও বায়াসড রিলে: বাহ্যিক ফল্টে সিটি স্যাচুরেশনের কারণে সৃষ্ট স্পিল কারেন্টে যেন অযাচিত ট্রিপ না হয় সেজন্য রেস্ট্রেইনিং বা বায়াস কারেন্ট প্রয়োগ করা হয়।\n৩. ডুয়াল-স্লোপ কার্ভ: স্লোপ ১ (২০-৩০%) সাধারণ লোডে ট্যাপ চেঞ্জারের তারতম্য সামলায়; স্लोপ ২ (৬০-৮০%) বিশাল থ্রু-ফল্টে সিটি স্যাচুরেট হলেও রিলেকে ভুল ট্রিপ থেকে বিরত রাখে।\n৪. হাই-ইম্পিডেন্স ডিফারেনশিয়াল স্কিম (87B/64R): বাসবার ও রেস্ট্রিক্টেড আর্থ ফল্টে ব্যবহৃত হয়। এতে একটি স্ট্যাবিলাইজিং রেজিস্ট্যান্স (R_stab) এবং ভোল্টেজ নিরাপদ রাখতে মেট্রোসিল ভ্যারিস্টর সমান্তরালে যুক্ত থাকে।'
  },
  formulas: [
    {
      id: 'f-ch17-biased-diff',
      symbol: 'I_{diff}',
      expression: 'I_{diff} > K_{slope} \\cdot I_{bias} + I_{pickup}',
      title: {
        en: 'Biased Differential Relay Operating Condition',
        hi: 'बायस्ड डिफरेंशियल रिले ऑपरेटिंग शर्त',
        bn: 'বায়াসড ডিফারেনশিয়াল রিলের ট্রিপিং শর্ত'
      },
      description: {
        en: 'Mathematical threshold condition for a percentage biased differential relay to initiate a trip command.',
        hi: 'बायस्ड डिफरेंशियल रिले द्वारा ट्रिप कमांड शुरू करने के लिए गणितीय थ्रेशोल्ड शर्त।',
        bn: 'পার্সেন্টেজ বায়াসড ডিফারেনশিয়াল রিলের ট্রিপ নির্দেশ জারির গাণিতিক শর্ত।'
      },
      variables: [
        { symbol: 'I_{diff}', name: { en: 'Differential operating current = |I1 - I2|', hi: 'डिफरेंशियल ऑपरेटिंग धारा', bn: 'ডিফারেনশিয়াল অপারেটিং কারেন্ট' } },
        { symbol: 'I_{bias}', name: { en: 'Restraining bias current = (|I1| + |I2|) / 2', hi: 'रेस्ट्रेनिंग बायस धारा', bn: 'রেস্ট্রেইনিং বায়াস কারেন্ট' } },
        { symbol: 'K_{slope}', name: { en: 'Percentage bias slope setting (0.15 to 0.80)', hi: 'प्रतिशत बायस स्लोप सेटिंग', bn: 'পার্সেন্টেজ বায়াস স্লোপ সেটিং' } },
        { symbol: 'I_{pickup}', name: { en: 'Minimum initial pickup setting (0.1 to 0.3 In)', hi: 'न्यूनतम प्रारंभिक पिकअप सेटिंग', bn: 'ন্যূনতম প্রাথমিক পিকআপ সেটিং' } }
      ]
    },
    {
      id: 'f-ch17-stabilizing-resistor',
      symbol: 'R_{stab}',
      expression: 'R_{stab} = \\frac{\\left(\\frac{I_{f,max}}{N}\\right) \\cdot (R_{ct} + 2\\cdot R_{lead})}{I_{set}} - R_{relay}',
      title: {
        en: 'High-Impedance Stabilizing Resistor Sizing Formula',
        hi: 'उच्च-प्रतिबाधा स्टेबिलाइजिंग रेसिस्टर साइजिंग सूत्र',
        bn: 'হাই-ইম্পিডেন্স স্ট্যাবিলাইজিং রেজিস্ট্যান্স সাইজিং সূত্র'
      },
      description: {
        en: 'Calculates the ohmic resistance of the series stabilizing resistor required to prevent high-impedance relay operation during maximum through-faults with complete single CT saturation.',
        hi: 'एक CT के पूर्ण सैचुरेशन के साथ अधिकतम थ्रू-फॉल्ट के दौरान रिले को स्थिर रखने के लिए आवश्यक स्टेबिलाइजिंग रेसिस्टर की गणना करता है।',
        bn: 'একটি সিটি সম্পূর্ণ স্যাচুরেট হলেও সর্বোচ্চ থ্রু-ফল্টের সময় রিলের স্থায়িত্ব বজায় রাখতে প্রয়োজনীয় স্ট্যাবিলাইজিং রেজিস্ট্যান্সের মান নির্ণয় করে।'
      },
      variables: [
        { symbol: 'R_{stab}', name: { en: 'Stabilizing resistor value (Ω)', hi: 'स्टेबिलाइजिंग रेसिस्टर मान (Ω)', bn: 'স্ট্যাবিলাইজিং রেজিস্ট্যান্স (Ω)' } },
        { symbol: 'I_{f,max}', name: { en: 'Maximum through-fault primary current (A)', hi: 'अधिकतम थ्रू-फॉल्ट धारा (A)', bn: 'সর্বোচ্চ থ্রু-ফল্ট কারেন্ট (A)' } },
        { symbol: 'N', name: { en: 'CT turns ratio', hi: 'CT टर्न्स अनुपात', bn: 'সিটি টার্নস অনুপাত' } },
        { symbol: 'R_{ct}', name: { en: 'CT secondary resistance (Ω)', hi: 'CT द्वितीयक प्रतिरोध (Ω)', bn: 'সিটি সেকেন্ডারি রেজিস্ট্যান্স (Ω)' } },
        { symbol: 'R_{lead}', name: { en: 'One-way pilot lead resistance (Ω)', hi: 'एकतरफा केबल प्रतिरोध (Ω)', bn: 'একমুখী ক্যাবল রেজিস্ট্যান্স (Ω)' } },
        { symbol: 'I_{set}', name: { en: 'Relay current pickup setting (A)', hi: 'रिले करंट सेटिंग (A)', bn: 'রিলে কারেন্ট সেটিং (A)' } }
      ]
    }
  ],
  keyPoints: [
    {
      en: 'Differential protection operates strictly for in-zone faults and provides unconditional stability for through-faults.',
      hi: 'डिफरेंशियल सुरक्षा केवल इन-ज़ोन फॉल्ट के लिए संचालित होती है और थ्रू-फॉल्ट पर पूरी तरह स्थिर रहती है।',
      bn: 'ডিফারেনশিয়াল সুরক্ষা সম্পূর্ণভাবে ইন-জোন ফল্টে কাজ করে এবং বহিঃস্থ ফল্টে শতভাগ স্থিতিশীল থাকে।'
    },
    {
      en: 'Dual-slope percentage restraint allows sensitive tripping for light internal faults while preventing spurious trips on heavy external fault CT saturation.',
      hi: 'दोहरी ढलान प्रतिशत संयम आंतरिक फॉल्ट पर संवेदनशील ट्रिपिंग देता है जबकि भारी बाहरी फॉल्ट पर CT सैचुरेशन के कारण गलत ट्रिपिंग रोकता है।',
      bn: 'ডুয়াল-স্লোপ রেস্ট্রেইন্ট হালকা অভ্যন্তরীণ ফল্টেও উচ্চ সংবেদনশীলতা বজায় রাখে এবং তীব্র বাহ্যিক ফল্টে সিটির স্যাচুরেশনেও ভুল ট্রিপ প্রতিরোধ করে।'
    },
    {
      en: 'High-impedance schemes (87B/64R) rely on a stabilizing resistor to force spill current through saturated CT paths rather than the relay coil.',
      hi: 'हाई-इम्पीडेंस स्कीमें (87B/64R) स्पिल करंट को रिले के बजाय सैचुरेटेड CT के रास्ते डायवर्ट करने के लिए स्टेबिलाइजिंग रेसिस्टर का उपयोग करती हैं।',
      bn: 'হাই-ইম্পিডেন্স স্কিমে স্ট্যাবিলাইজিং রেজিস্ট্যান্স স্পিল কারেন্টকে রিলের পরিবর্তে স্যাচুরেট হওয়া সিটির মধ্য দিয়ে সরিয়ে দিয়ে স্থায়িত্ব আনে।'
    },
    {
      en: 'Metrosil non-linear resistors clamp lethal transient overvoltages during internal faults to under 2 kV, protecting relay insulation.',
      hi: 'मेट्रोसिल गैर-रेखीय प्रतिरोधक आंतरिक फॉल्ट के दौरान जानलेवा वोल्टेज को 2 kV से नीचे सीमित करते हैं।',
      bn: 'মেট্রোসিল নন-লিনিয়ার রেজিস্টর অভ্যন্তরীণ ফল্টে সৃষ্ট বিপজ্জনক ভোল্টেজকে ২ kV এর নিচে সীমাবদ্ধ রেখে রিলের ইনসুলেশন রক্ষা করে।'
    }
  ],
  schematics: [
    {
      id: 'sch-ch17-l04-01',
      title: {
        en: 'Biased Differential Relay Circuit & High-Impedance Stabilizing Scheme',
        hi: 'बायस्ड डिफरेंशियल रिले परिपथ एवं उच्च-प्रतिबाधा स्थिरीकरण योजना',
        bn: 'বায়াসড ডিফারেনশিয়াল রিলে সার্কিট ও হাই-ইম্পিডেন্স স্ট্যাবিলাইজেশন স্কিম'
      },
      content: {
        en: 'The schematic details: (1) The dual-slope percentage differential comparator showing the operating coil and split restraining coils, illustrating current flow during healthy through-load vs. an internal bus fault, and (2) The high-impedance differential topology showing parallel-connected CT secondaries, series stabilizing resistor (R_stab), and the non-linear Metrosil overvoltage clamp.',
        hi: 'यह आरेख दो महत्वपूर्ण भागों को दर्शाता है: (1) ऑपरेटिंग कॉइल और स्प्लिट रेस्ट्रेनिंग कॉइल के साथ डुअल-स्लोप बायस्ड रिले, और (2) पैरेलल CTs, सीरीज स्टेबिलाइजिंग रेसिस्टर (R_stab) और मेट्रोसिल क्लैंप के साथ हाई-इम्पीडेंस सर्किट।',
        bn: 'এই স্কিম্যাটিকে দেখানো হয়েছে: (১) অপারেটিং ও রেস্ট্রেইনিং কয়েল সহ ডুয়াল-স্লোপ বায়াসড ডিফারেনশিয়াল স্কিম এবং (২) প্যারালাল সিটি সেকেন্ডারি, সিরিজ স্ট্যাবিলাইজিং রেজিস্ট্যান্স (R_stab) এবং মেট্রোসিল ভ্যারিস্টর সমন্বিত হাই-ইম্পিডেন্স সার্কিট।'
      },
      schematicId: 'sch-ch17-differential-protection-principles'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch17-l04-01',
      problem: {
        en: 'A biased differential relay has an initial pickup setting of I_pickup = 0.2 A, a slope setting of K_slope = 30%, and bias current defined as I_bias = (|I1| + |I2|) / 2. During an external through-fault, CT1 secondary delivers 18.0 A, while CT2 suffers partial saturation and delivers only 14.0 A in phase. Determine: (a) The differential current (I_diff), (b) The restraining current (I_bias), (c) The relay operating threshold, and (d) Whether the relay trips or restrains.',
        hi: 'एक बायस्ड डिफरेंशियल रिले की पिकअप 0.2 A, स्लोप 30% और I_bias = (|I1| + |I2|) / 2 है। बाहरी फॉल्ट के दौरान, CT1 सेकेंडरी 18.0 A देता है, जबकि CT2 सैचुरेट होकर केवल 14.0 A देता है। गणना करें: (a) I_diff, (b) I_bias, (c) रिले ट्रिप थ्रेशोल्ड, और (d) क्या रिले ट्रिप करेगा या रुकेगा।',
        bn: 'একটি বায়াসড ডিফারেনশিয়াল রিলের পিকআপ ০.২ A, স্লোপ ৩০% এবং I_bias = (|I1| + |I2|) / ২। বাহ্যিক ফল্টের সময় CT1 সেকেন্ডারি ১৮.০ A সরবরাহ করে, কিন্তু CT2 আংশিক স্যাচুরেট হয়ে কেবল ১৪.০ A সরবরাহ করে। নির্ণয় করুন: (a) I_diff, (b) I_bias, (c) ট্রিপিং থ্রেশহোল্ড, এবং (d) রিলেটি ট্রিপ করবে নাকি স্থিতিশীল থাকবে।'
      },
      solution: {
        en: 'Given:\n• Secondary current 1: I1 = 18.0 A\n• Secondary current 2: I2 = 14.0 A\n• Pickup setting I_pickup = 0.2 A\n• Slope K_slope = 30% = 0.30\n\nStep 1: Calculate Differential Current (I_diff):\nI_diff = |I1 - I2| = |18.0 - 14.0| = 4.0 A\n\nStep 2: Calculate Restraining Current (I_bias):\nI_bias = (|I1| + |I2|) / 2 = (18.0 + 14.0) / 2 = 32.0 / 2 = 16.0 A\n\nStep 3: Calculate required operating threshold (I_trip_threshold):\nI_trip_threshold = K_slope * I_bias + I_pickup\nI_trip_threshold = (0.30 * 16.0 A) + 0.2 A = 4.8 A + 0.2 A = 5.0 A\n\nStep 4: Comparison and Decision:\nSince I_diff (4.0 A) < I_trip_threshold (5.0 A), the operating force is insufficient to overcome the restraining force.\nConclusion: The relay correctly RESTRAINS and remains stable, successfully preventing a false trip!',
        hi: 'चरण 1: I_diff = |18.0 - 14.0| = 4.0 A\nचरण 2: I_bias = (18.0 + 14.0) / 2 = 16.0 A\nचरण 3: आवश्यक ट्रिप करंट = (0.30 * 16.0) + 0.2 = 4.8 + 0.2 = 5.0 A\nचरण 4: चूंकि I_diff (4.0 A) < 5.0 A है, रिले सुरक्षित रूप से संयमित (RESTRAINS) रहेगा और ट्रिप नहीं करेगा।',
        bn: 'ধাপ ১: I_diff = |১৮.০ - ১৪.০| = ৪.০ A\nধাপ ২: I_bias = (১৮.০ + ১৪.০) / ২ = ১৬.০ A\nধাপ ৩: প্রয়োজনীয় ট্রিপ কারেন্ট = (০.৩০ * ১৬.০) + ০.২ = ৪.৮ + ০.২ = ৫.০ A\nধাপ ৪: যেহেতু I_diff (৪.০ A) < ৫.০ A, তাই রিলে সফলভাবে ট্রিপিং রোধ (RESTRAIN) করবে।'
      },
      givenValues: { 'I1': '18 A', 'I2': '14 A', 'Slope': '30%', 'Pickup': '0.2 A' },
      finalAnswer: {
        en: 'I_diff = 4.0 A, I_bias = 16.0 A, Threshold = 5.0 A; Relay RESTRAINS (No Trip)',
        hi: 'I_diff = 4.0 A, I_bias = 16.0 A, थ्रेशोल्ड = 5.0 A; रिले संयमित रहता है (कोई ट्रिप नहीं)',
        bn: 'I_diff = ৪.০ A, I_bias = ১৬.০ A, থ্রেশহোল্ড = ৫.০ A; রিলে ট্রিপ করবে না (স্থিতিশীল থাকবে)'
      }
    },
    {
      id: 'ex-ch17-l04-02',
      problem: {
        en: 'A high-impedance Restricted Earth Fault (REF) scheme protects a 132 kV transformer winding. The CT ratio is 1000/1 A, secondary winding resistance is Rct = 3.5 Ω, and pilot loop resistance is 2*Rlead = 1.5 Ω. The maximum prospective through-fault current is 20 kA. The relay current pickup is set at I_set = 0.2 A, and relay internal resistance is Rrelay = 1.0 Ω. Calculate: (a) The stability voltage (V_stab), and (b) The required resistance of the series stabilizing resistor (R_stab).',
        hi: 'एक 132 kV ट्रांसफार्मर पर हाई-इम्पीडेंस REF योजना लगी है। CT अनुपात 1000/1 A, Rct = 3.5 Ω, केबल लूप 2*Rlead = 1.5 Ω, अधिकतम फॉल्ट 20 kA है। रिले पिकअप 0.2 A और आंतरिक प्रतिरोध 1.0 Ω है। गणना करें: (a) स्थिरता वोल्टेज (V_stab), और (b) आवश्यक स्टेबिलाइजिंग रेसिस्टर (R_stab)।',
        bn: 'একটি ১৩২ kV ট্রান্সফরমারের ওয়াইন্ডিংয়ে হাই-ইম্পিডেন্স REF স্কিম যুক্ত। সিটি অনুপাত ১০০০/১ A, Rct = ৩.৫ Ω, কেবল লুপ রেজিস্ট্যান্স ২*Rlead = ১.৫ Ω এবং সর্বোচ্চ থ্রু-ফল্ট ২০ kA। রিলের পিকআপ ০.২ A এবং অভ্যন্তরীণ রোধ ১.০ Ω। নির্ণয় করুন: (a) স্ট্যাবিলিটি ভোল্টেজ (V_stab), এবং (b) প্রয়োজনীয় স্ট্যাবিলাইজিং রেজিস্ট্যান্স (R_stab)।'
      },
      solution: {
        en: 'Given:\n• CT Ratio N = 1000 / 1 = 1000\n• If_max = 20,000 A\n• Secondary Fault Current Is_max = 20,000 / 1000 = 20 A\n• CT Secondary Resistance Rct = 3.5 Ω\n• Pilot Cable Loop Resistance 2*Rlead = 1.5 Ω\n• Total Fault Loop Resistance = Rct + 2*Rlead = 3.5 + 1.5 = 5.0 Ω\n• Relay Setting I_set = 0.2 A\n• Relay Internal Resistance Rrelay = 1.0 Ω\n\nStep 1: Calculate Stability Voltage (V_stab):\nV_stab = Is_max * (Rct + 2*Rlead)\nV_stab = 20 A * 5.0 Ω = 100.0 V\n\nStep 2: Calculate Required Stabilizing Resistance (R_stab):\nR_total_branch = V_stab / I_set = 100.0 V / 0.2 A = 500.0 Ω\nR_stab = R_total_branch - Rrelay = 500.0 Ω - 1.0 Ω = 499.0 Ω\n\nConclusion: A 500 Ω adjustable stabilizing resistor with appropriate continuous and short-time wattage rating should be installed in series with the relay.',
        hi: 'चरण 1: V_stab = 20 A * (3.5 + 1.5) = 20 * 5.0 = 100.0 V\nचरण 2: कुल प्रतिरोध = 100.0 V / 0.2 A = 500.0 Ω\nR_stab = 500.0 - 1.0 = 499.0 Ω ≈ 500 Ω\nनिष्कर्ष: रिले के साथ सीरीज में 500 Ω का स्टेबिलाइजिंग रेसिस्टर लगाना होगा।',
        bn: 'ধাপ ১: V_stab = ২০ A * (৩.৫ + ১.৫) = ২০ * ৫.০ = ১০০.০ V\nধাপ ২: মোট রোধ = ১০০.০ V / ০.২ A = ৫০০.০ Ω\nR_stab = ৫০০.০ - ১.০ = ৪৯৯.০ Ω ≈ ৫০০ Ω\nসিদ্ধান্ত: রিলের সাথে সিরিজে একটি ৫০০ Ω স্ট্যাবিলাইজিং রেজিস্টর যুক্ত করতে হবে।'
      },
      givenValues: { 'If': '20 kA', 'CT': '1000/1 A', 'Rct': '3.5 Ω', 'Rloop': '1.5 Ω', 'Iset': '0.2 A' },
      finalAnswer: {
        en: 'V_stab = 100 V, Required R_stab = 499 Ω (nominally 500 Ω)',
        hi: 'V_stab = 100 V, आवश्यक R_stab = 499 Ω (लगभग 500 Ω)',
        bn: 'V_stab = ১০০ V, প্রয়োজনীয় R_stab = ৪৯৯ Ω (প্রায় ৫০০ Ω)'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Substation busbar differential protection (ANSI 87B) protecting multi-bay gas-insulated (GIS) and air-insulated switchgear.',
      'Restricted Earth Fault (REF / ANSI 64R) unit protection for power transformer wye-connected neutral windings.',
      'Stator differential protection (ANSI 87G) for utility steam, gas, and hydro turbogenerators.'
    ],
    hi: [
      'सबस्टेशन बसबार डिफरेंशियल सुरक्षा (ANSI 87B) जो गैस-इंसुलेटेड और एयर-इंसुलेटेड स्विचगियर की रक्षा करती है।',
      'पावर ट्रांसफार्मर न्यूट्रल वाइंडिंग के लिए रेस्ट्रिक्टेड अर्थ फॉल्ट (REF/64R) यूनिट सुरक्षा।',
      'स्टीम, गैस और हाइड्रो टर्बोजनरेटर के लिए स्टेटर डिफरेंशियल सुरक्षा (87G)।'
    ],
    bn: [
      'সাবস্টেশন বাসবার ডিফারেনশিয়াল সুরক্ষা (ANSI 87B) যা জিআইএস ও এআইএস সুইচগিয়ার রক্ষা করে।',
      'পাওয়ার ট্রান্সফরমারের স্টার-কানেক্টেড নিউট্রালের জন্য রেস্ট্রিক্টেড আর্থ ফল্ট (REF/64R) সুরক্ষা।',
      'টার্বো-জেনারেটরের জন্য স্টেটর ডিফারেনশিয়াল সুরক্ষা (ANSI 87G)।'
    ]
  },
  commonMistakes: {
    en: [
      'Using mismatched CT ratios or different magnetic saturation classes without compensation, causing catastrophic false trips during external faults.',
      'Omitting the non-linear Metrosil surge varistor in high-impedance schemes, leading to flashover of relay insulation during internal faults.',
      'Reversing the secondary polarity of one CT set, causing the relay to see normal full load current as a 200% differential fault!'
    ],
    hi: [
      'बिना क्षतिपूर्ति के बेमेल CT अनुपातों का उपयोग करना, जिससे बाहरी फॉल्ट के दौरान गलत ट्रिपिंग होती है।',
      'हाई-इम्पीडेंस स्कीम में मेट्रोसिल वैरिस्टर को छोड़ना, जिससे आंतरिक फॉल्ट पर रिले इंसुलेशन जल जाता है।',
      'एक CT की सेकेंडरी पोलारिटी को उल्टा जोड़ना, जिससे रिले सामान्य लोड करंट को 200% फॉल्ट मानकर तुरंत ट्रिप कर देता है।'
    ],
    bn: [
      'সঠিক ক্ষতিপূরণ ছাড়া অমিল অনুপাতের সিটি ব্যবহার করা, যার ফলে বাইরের ফল্টেও রিলে ভুল ট্রিপ করে।',
      'হাই-ইম্পিডেন্স স্কিমে মেট্রোসিল ভ্যারিস্টর বাদ দেওয়া, যার ফলে অভ্যন্তরীণ ফল্টে রিলের ইনসুলেশন জ্বলে যায়।',
      'একটি সিটির পোলারিটি উল্টো সংযোগ করা, যার ফলে স্বাভাবিক লোড কারেন্টকেও রিলে মারাত্মক ফল্ট হিসেবে বিবেচনা করে সাথে সাথে ট্রিপ করে।'
    ]
  },
  keyTakeaways: {
    en: [
      'Differential protection applies Kirchhoff’s Current Law to provide ultra-fast, strictly bounded unit protection.',
      'Dual-slope percentage bias ensures immunity against spill current caused by CT saturation and tap changer changes.',
      'High-impedance schemes use stabilizing resistors and Metrosils to provide infallible busbar stability.'
    ],
    hi: [
      'डिफरेंशियल सुरक्षा अल्ट्रा-फास्ट यूनिट सुरक्षा प्रदान करने के लिए किरचॉफ के करंट नियम को लागू करती है।',
      'दोहरी ढलान प्रतिशत बायस CT सैचुरेशन और टैप चेंजर के कारण होने वाले स्पिल करंट से प्रतिरक्षा सुनिश्चित करता है।',
      'हाई-इम्पीडेंस स्कीमें बसबार की अचूक स्थिरता प्रदान करने के लिए स्टेबिलाइजिंग रेसिस्टर्स और मेट्रोसिल का उपयोग करती हैं।'
    ],
    bn: [
      'ডিফারেনশিয়াল সুরক্ষা কার্শফের কারেন্ট সূত্র প্রয়োগ করে অতি দ্রুত ও সুনির্দিষ্ট ইউনিট সুরক্ষা প্রদান করে।',
      'ডুয়াল-স্লোপ পার্সেন্টেজ বায়াস সিটি স্যাচুরেশন এবং ট্যাপ চেঞ্জারের কারণে সৃষ্ট স্পিল কারেন্ট থেকে সুরক্ষা দেয়।',
      'হাই-ইম্পিডেন্স স্কিম স্ট্যাবিলাইজিং রেজিস্ট্যান্স ও মেট্রোসিলের সাহায্যে বাসবারে ত্রুটিহীন স্থায়িত্ব নিশ্চিত করে।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch17-l04-01',
      question: {
        en: 'What fundamental circuit law forms the operating foundation of differential protection (ANSI 87)?',
        hi: 'डिफरेंशियल सुरक्षा (ANSI 87) का परिचालन आधार कौन सा मूलभूत परिपथ नियम है?',
        bn: 'কোন মৌলিক সার্কিট সূত্রটি ডিফারেনশিয়াল সুরক্ষার (ANSI 87) ভিত্তি হিসেবে কাজ করে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Kirchhoff’s Current Law (KCL)', hi: 'किरचॉफ का करंट नियम (KCL)', bn: 'কার্শফের কারেন্ট সূত্র (KCL)' } },
        { id: 'opt-2', text: { en: 'Faraday’s Law of Electromagnetic Induction', hi: 'फैराडे का विद्युत चुम्बकीय प्रेरण का नियम', bn: 'ফ্যারাডের তড়িৎচৌম্বকীয় আবেশ সূত্র' } },
        { id: 'opt-3', text: { en: 'Ohm’s Law for non-linear varistors', hi: 'गैर-रेखीय वैरिस्टर के लिए ओम का नियम', bn: 'নন-লিনিয়ার ভ্যারিস্টরের জন্য ওহমের সূত্র' } },
        { id: 'opt-4', text: { en: 'Coulomb’s Electrostatic Law', hi: 'कूलम्ब का इलेक्ट्रोस्टैटिक नियम', bn: 'কুলম্বের স্থিরতড়িৎ সূত্র' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Differential protection relies directly on Kirchhoff’s Current Law: under healthy conditions, the vector sum of all currents entering and leaving a bounded node must equal zero.',
        hi: 'डिफरेंशियल सुरक्षा सीधे KCL पर निर्भर करती है: किसी उपकरण में प्रवेश करने वाली और बाहर जाने वाली धाराओं का बीजगणितीय योग शून्य होना चाहिए।',
        bn: 'ডিফারেনশিয়াল সুরক্ষা সরাসরি KCL এর ওপর প্রতিষ্ঠিত: সুস্থ অবস্থায় কোনো আবদ্ধ নোডে প্রবেশকারী ও বহির্গামী কারেন্টের ভেক্টর যোগফল সর্বদা শূন্য হয়।'
      }
    },
    {
      id: 'mcq-ch17-l04-02',
      question: {
        en: 'What is "spill current" in a differential protection scheme?',
        hi: 'डिफरेंशियल सुरक्षा योजना में "स्पिल करंट" क्या है?',
        bn: 'ডিফারেনশিয়াল সুরক্ষা স্কিমে "স্পিল কারেন্ট" বলতে কী বোঝায়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'A false difference current flowing into the relay during an external through-fault due to CT ratio errors or unequal saturation', hi: 'CT अनुपात त्रुटियों या असमान संतृप्ति के कारण बाहरी फॉल्ट के दौरान रिले में बहने वाली गलत अंतर धारा', bn: 'সিটির অমিল বা অসমান স্যাচুরেশনের কারণে বাহ্যিক ফল্টের সময় রিলের মধ্য দিয়ে প্রবাহিত মিথ্যা পার্থক্য কারেন্ট' } },
        { id: 'opt-2', text: { en: 'Transformer cooling oil leaking into the circuit breaker tank', hi: 'सर्किट ब्रेकर टैंक में ट्रांसफार्मर का तेल लीक होना', bn: 'সার্কিট ব্রেকারের ট্যাংকে ট্রান্সফরমারের কুলিং তেল লিক হওয়া' } },
        { id: 'opt-3', text: { en: 'Capacitive charging current of long underground cables', hi: 'लंबी भूमिगत केबलों की कैपेसिटिव चार्जिंग धारा', bn: 'দীর্ঘ আন্ডারগ্রাউন্ড ক্যাবলের ক্যাপাসিটিভ চার্জিং কারেন্ট' } },
        { id: 'opt-4', text: { en: 'Direct current injected into the substation earth grid', hi: 'सबस्टेशन अर्थ ग्रिड में इंजेक्ट की गई डीसी धारा', bn: 'সাবস্টেশনের আর্থ গ্রিডে প্রবেশ করানো ডিসি কারেন্ট' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Spill current is the residual difference current (I1_sec - I2_sec) caused by CT tolerance mismatches, tap changers, and unequal magnetic saturation during heavy through-faults.',
        hi: 'स्पिल करंट वह अवांछित अंतर धारा है जो बाहरी फॉल्ट के दौरान CT त्रुटियों या सैचुरेशन के कारण रिले कॉइल में बहती है।',
        bn: 'স্পিল কারেন্ট হলো সিটির সহনশীলতার তারতম্য বা স্যাচুরেশনের কারণে বাহ্যিক ফল্টের সময় রিলের মধ্য দিয়ে প্রবাহিত অবাঞ্ছিত কারেন্ট।'
      }
    },
    {
      id: 'mcq-ch17-l04-03',
      question: {
        en: 'In a percentage biased differential relay, what is the engineering purpose of the second slope (Slope 2) on the operating characteristic?',
        hi: 'प्रतिशत बायस्ड डिफरेंशियल रिले में, ऑपरेटिंग विशेषता पर दूसरे ढलान (Slope 2) का क्या उद्देश्य है?',
        bn: 'পার্সেন্টেজ বায়াসড ডিফারেনশিয়াল রিলের বৈশিষ্ট্যে দ্বিতীয় স্লোপ (Slope 2) ব্যবহারের উদ্দেশ্য কী?'
      },
      options: [
        { id: 'opt-1', text: { en: 'To maintain high restraint and prevent false tripping when heavy external through-faults drive CTs into deep saturation', hi: 'उच्च संयम बनाए रखना और जब भारी बाहरी फॉल्ट CTs को संतृप्त कर दें तो गलत ट्रिपिंग रोकना', bn: 'তীব্র বহিঃস্থ ফল্টে সিটি স্যাচুরেট হলেও উচ্চ প্রতিরোধ বজায় রেখে ভুল ট্রিপ প্রতিরোধ করা' } },
        { id: 'opt-2', text: { en: 'To disconnect solar panels during cloudy weather', hi: 'बादल वाले मौसम में सोलर पैनलों को डिस्कनेक्ट करना', bn: 'মেঘলা আবহাওয়ায় সোলার প্যানেল সংযোগ বিচ্ছিন্ন করা' } },
        { id: 'opt-3', text: { en: 'To compensate for negative sequence motor loading', hi: 'मोटर के नेगेटिव सीक्वेंस लोड की भरपाई करना', bn: 'মোটরের নেগেটিভ সিকোয়েন্স লোডের ক্ষতিপূরণ করা' } },
        { id: 'opt-4', text: { en: 'To provide reverse power protection for generators', hi: 'जनरेटर के लिए रिवर्स पावर सुरक्षा प्रदान करना', bn: 'জেনারেটরে রিভার্স পাওয়ার সুরক্ষা নিশ্চিত করা' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Under severe external faults exceeding 2–3 times rated current, CTs can saturate heavily. Slope 2 (typically 60–80%) requires a massive differential current before tripping, ensuring security.',
        hi: 'भारी बाहरी फॉल्ट पर CT के गहरे सैचुरेशन से निपटने के लिए स्लोप 2 (60-80%) लगाया जाता है ताकि गलत ट्रिपिंग न हो।',
        bn: 'মারাত্মক বাহ্যিক ফল্টে সিটি স্যাচুরেশনের ফলে সৃষ্ট ভুল ট্রিপ এড়াতে স্লোপ ২ (৬০-৮০%) প্রয়োগ করা হয়।'
      }
    },
    {
      id: 'mcq-ch17-l04-04',
      question: {
        en: 'What is the role of the series stabilizing resistor (R_stab) in high-impedance differential protection (ANSI 87B)?',
        hi: 'हाई-इम्पीडेंस डिफरेंशियल सुरक्षा (ANSI 87B) में सीरीज स्टेबिलाइजिंग रेसिस्टर (R_stab) की क्या भूमिका है?',
        bn: 'হাই-ইম্পিডেন্স ডিফারেনশিয়াল সুরক্ষায় (ANSI 87B) সিরিজ স্ট্যাবিলাইজিং রেজিস্ট্যান্সের (R_stab) কাজ কী?'
      },
      options: [
        { id: 'opt-1', text: { en: 'It raises relay circuit impedance, forcing external fault spill current to divert through the saturated CT secondary rather than the relay coil', hi: 'यह रिले परिपथ की प्रतिबाधा बढ़ाता है, जिससे स्पिल करंट रिले कॉइल के बजाय सैचुरेटेड CT के रास्ते चला जाता है', bn: 'এটি রিলে সার্কিটের রোধ বৃদ্ধি করে, যার ফলে ফল্ট স্পিল কারেন্ট রিলের মধ্য দিয়ে না গিয়ে স্যাচুরেটেড সিটির মধ্য দিয়ে ঘুরে যায়' } },
        { id: 'opt-2', text: { en: 'It cools down the current transformer oil during summer', hi: 'यह गर्मियों में करंट ट्रांसफार्मर के तेल को ठंडा करता है', bn: 'এটি গ্রীষ্মকালে সিটির তেল ঠান্ডা রাখতে সাহায্য করে' } },
        { id: 'opt-3', text: { en: 'It acts as a fuse to disconnect the relay during faults', hi: 'यह फॉल्ट के दौरान रिले को डिस्कनेक्ट करने के लिए फ़्यूज़ का काम करता है', bn: 'ফল্ট চলাকালীন রিলে বিচ্ছিন্ন করতে ফিউজ হিসেবে কাজ করে' } },
        { id: 'opt-4', text: { en: 'It steps up the line frequency from 50 Hz to 60 Hz', hi: 'यह लाइन आवृत्ति को 50 Hz से 60 Hz तक बढ़ाता है', bn: 'এটি লাইনের ফ্রিকোয়েন্সি ৫০ Hz থেকে ৬০ Hz এ বৃদ্ধি করে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'By adding a large series resistance, the relay branch voltage is made higher than the maximum voltage that can appear across a fully saturated CT during an external fault, keeping the relay stable.',
        hi: 'उच्च प्रतिरोध जोड़कर, रिले शाखा का वोल्टेज बाहरी फॉल्ट के दौरान सैचुरेटेड CT पर बनने वाले वोल्टेज से अधिक रखा जाता है जिससे रिले ट्रिप नहीं करता।',
        bn: 'উচ্চ রেজিস্ট্যান্স যোগ করার ফলে স্পিল কারেন্ট রিলের ভেতর দিয়ে প্রবাহিত না হয়ে স্যাচুরেটেড সিটির লো-রেজিস্ট্যান্স পাথে প্রবাহিত হয়ে রিলেকে ট্রিপ করা থেকে বিরত রাখে।'
      }
    },
    {
      id: 'mcq-ch17-l04-05',
      question: {
        en: 'Why is a non-linear Metrosil varistor connected in parallel with the stabilizing resistor and relay in high-impedance protection schemes?',
        hi: 'हाई-इम्पीडेंस सुरक्षा में स्टेबिलाइजिंग रेसिस्टर और रिले के समानांतर में एक गैर-रेखीय मेट्रोसिल वैरिस्टर क्यों जोड़ा जाता है?',
        bn: 'হাই-ইম্পিডেন্স সুরক্ষা স্কিমে স্ট্যাবিলাইজিং রেজিস্টর ও রিলের সমান্তরালে একটি নন-লিনিয়ার মেট্রোসিল ভ্যারিস্টর কেন যুক্ত করা হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'To clamp dangerous peak overvoltages to safe levels (<2 kV) during internal faults, protecting personnel and relay insulation', hi: 'आंतरिक फॉल्ट के दौरान खतरनाक ओवरवोल्टेज को सुरक्षित स्तर (<2 kV) तक सीमित करने के लिए', bn: 'অভ্যন্তরীণ ফল্টের সময় বিপজ্জনক পিক ভোল্টেজকে নিরাপদ মাত্রায় (<২ kV) নামিয়ে আনতে' } },
        { id: 'opt-2', text: { en: 'To calibrate the relay timer accurately', hi: 'रिले टाइमर को सटीक रूप से कैलिब्रेट करने के लिए', bn: 'রিলের টাইমার সঠিকভাবে ক্যালিব্রেট করতে' } },
        { id: 'opt-3', text: { en: 'To supply DC auxiliary power to the substation', hi: 'सबस्टेशन को डीसी सहायक शक्ति की आपूर्ति करने के लिए', bn: 'সাবস্টেশনে ডিসি অক্সিলিয়ারি পাওয়ার সরবরাহ করতে' } },
        { id: 'opt-4', text: { en: 'To filter out lightning surges from high-speed trains', hi: 'हाई-स्पीड ट्रेनों से बिजली के सर्ज को फिल्टर करने के लिए', bn: 'ট্রেনের সার্জ থেকে গ্রিড রক্ষা করতে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'During internal faults, huge fault currents entering the high-impedance circuit would create lethal open-circuit voltage spikes (exceeding 10 kV). The Metrosil conducts non-linearly to clamp this voltage safely.',
        hi: 'आंतरिक फॉल्ट पर विशाल फॉल्ट धारा उच्च प्रतिबाधा में हजारों वोल्ट बना सकती है। मेट्रोसिल वोल्टेज को सुरक्षित मान (<2 kV) पर क्लैंप करता है।',
        bn: 'অভ্যন্তরীণ ফল্টে হাই-ইম্পিডেন্স সার্কিটে মারাত্মক ভোল্টেজ স্পাইক তৈরি হতে পারে। মেট্রোসিল কন্ডাক্ট করে ভোল্টেজকে ২ kV এর নিচে নিরাপদে নামিয়ে রাখে।'
      }
    },
    {
      id: 'mcq-ch17-l04-06',
      question: {
        en: 'Restricted Earth Fault (REF / ANSI 64R) protection is specifically designed to provide sensitive detection of which type of fault?',
        hi: 'रेस्ट्रिक्टेड अर्थ फॉल्ट (REF / ANSI 64R) सुरक्षा विशेष रूप से किस प्रकार के फॉल्ट का संवेदनशील पता लगाने के लिए बनाई गई है?',
        bn: 'রেস্ট্রিক্টেড আর্থ ফল্ট (REF / ANSI 64R) সুরক্ষা বিশেষত কোন ধরণের ফল্ট অত্যন্ত সংবেদনশীলভাবে শনাক্ত করার জন্য ডিজাইন করা হয়েছে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Earth faults occurring inside the transformer winding, especially close to the grounded neutral point', hi: 'ट्रांसफार्मर वाइंडिंग के अंदर, विशेष रूप से ग्राउंडेड न्यूट्रल बिंदु के पास होने वाले अर्थ फॉल्ट', bn: 'ট্রান্সফরমার উইন্ডিংয়ের অভ্যন্তরীণ আর্থ ফল্ট, বিশেষ করে গ্রাউন্ডেড নিউট্রালের কাছাকাছি ঘটিত ফল্ট' } },
        { id: 'opt-2', text: { en: 'Three-phase symmetrical short circuits on overhead transmission lines', hi: 'पारेषण लाइनों पर थ्री-फेज सममित शॉर्ट सर्किट', bn: 'ওভারহেড সঞ্চালন লাইনের থ্রি-ফেজ সিমেট্রিক্যাল ফল্ট' } },
        { id: 'opt-3', text: { en: 'Substation battery charger failure', hi: 'सबस्टेशन बैटरी चार्जर की विफलता', bn: 'সাবস্টেশন ব্যাটারি চার্জারের ব্যর্থতা' } },
        { id: 'opt-4', text: { en: 'Overheating of generator bearings due to low oil pressure', hi: 'कम तेल के दबाव के कारण जनरेटर बियरिंग का गर्म होना', bn: 'লুব্রিকেশনের অভাবে জেনারেটর বিয়ারিং অতিরিক্ত উত্তপ্ত হওয়া' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Earth faults near the neutral produce very low fault currents that standard overcurrent or biased differential relays miss. REF compares neutral CT current with residual phase CT currents to detect faults along up to 90–95% of the winding.',
        hi: 'न्यूट्रल के पास अर्थ फॉल्ट होने पर बहुत कम करंट बहता है जिसे सामान्य रिले नहीं पकड़ पाते। REF वाइंडिंग के 90-95% हिस्से की रक्षा करता है।',
        bn: 'নিউট্রালের কাছাকাছি আর্থ ফল্টে খুব কম কারেন্ট প্রবাহিত হওয়ায় সাধারণ ডিফারেনশিয়াল রিলে তা ধরতে পারে না। REF ওয়াইন্ডিংয়ের ৯০-৯৫% অংশের ফল্ট শনাক্ত করে।'
      }
    },
    {
      id: 'mcq-ch17-l04-07',
      question: {
        en: 'If one set of CT secondary leads in a three-phase differential protection circuit is accidentally reversed in polarity, what will occur when normal load current flows?',
        hi: 'यदि थ्री-फेज डिफरेंशियल परिपथ में CT सेकेंडरी लीड के एक सेट की ध्रुवीयता गलती से उलट दी जाए, तो सामान्य लोड करंट बहने पर क्या होगा?',
        bn: 'থ্রি-ফেজ ডিফারেনশিয়াল সার্কিটে একটি সিটির সেকেন্ডারি লিডের পোলারিটি ভুলবশত উল্টে দিলে স্বাভাবিক লোড কারেন্ট প্রবাহিত হওয়ার সময় কী ঘটবে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'The secondary currents will ADD instead of cancel, causing instantaneous false tripping on normal load current', hi: 'सेकेंडरी धाराएं रद्द होने के बजाय जुड़ जाएंगी, जिससे सामान्य लोड पर ही तुरंत गलत ट्रिपिंग होगी', bn: 'সেকেন্ডারি কারেন্টগুলো কাটাকাটি না হয়ে যুক্ত হয়ে যাবে, ফলে স্বাভাবিক লোডেই রিলে তাৎক্ষণিক ভুল ট্রিপ করবে' } },
        { id: 'opt-2', text: { en: 'The relay will become immune to all short circuits', hi: 'रिले सभी शॉर्ट सर्किट के प्रति असंवेदनशील हो जाएगा', bn: 'রিলেটি সকল শর্ট সার্কিট শনাক্তকরণে স্থায়ীভাবে অক্ষম হয়ে যাবে' } },
        { id: 'opt-3', text: { en: 'The transformer turns ratio will physically reverse', hi: 'ट्रांसफार्मर का टर्न्स अनुपात भौतिक रूप से उलट जाएगा', bn: 'ট্রান্সফরমারের টার্নস রেশিও বাস্তবিকভাবে উল্টে যাবে' } },
        { id: 'opt-4', text: { en: 'The relay operating coil will short circuit to ground safely', hi: 'रिले ऑपरेटिंग कॉइल सुरक्षित रूप से ग्राउंड हो जाएगी', bn: 'রিলের অপারেটিং কয়েলটি নিরাপদে গ্রাউন্ডে শর্ট হয়ে যাবে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Reversed polarity turns subtraction into addition: I_diff = |I1 - (-I2)| = |I1 + I2| = 2·I_load. Because differential current is double the load current, the relay trips instantly upon energization.',
        hi: 'उल्टी पोलारिटी से घटाव के बजाय जोड़ हो जाता है: I_diff = 2 * I_load, जिससे सिस्टम चालू होते ही तुरंत ट्रिप हो जाता है।',
        bn: 'পোলারিটি উল্টে গেলে বিয়োগের বদলে যোগ হয়ে যায়: I_diff = ২ * I_load, যার ফলে চালু করা মাত্রই স্বাভাবিক লোডেই রিলে ভুলবশত ট্রिप করে।'
      }
    },
    {
      id: 'mcq-ch17-l04-08',
      question: {
        en: 'For a differential relay with I_diff = 3.0 A, I_bias = 8.0 A, I_pickup = 0.3 A, and Slope = 40%, what is the state of the relay?',
        hi: 'I_diff = 3.0 A, I_bias = 8.0 A, I_pickup = 0.3 A, और स्लोप = 40% वाले रिले की स्थिति क्या है?',
        bn: 'I_diff = ৩.০ A, I_bias = ৮.০ A, I_pickup = ০.৩ A এবং স্লোপ = ৪০% বিশিষ্ট একটি রিলের অবস্থা কী হবে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Restrains (Threshold is 3.5 A, which exceeds I_diff)', hi: 'संयमित (थ्रेशोल्ड 3.5 A है, जो I_diff से अधिक है)', bn: 'ট্রিপ করবে না (থ্রেশহোল্ড ৩.৫ A, যা I_diff এর চেয়ে বেশি)' } },
        { id: 'opt-2', text: { en: 'Trips (Threshold is 2.5 A, which is less than I_diff)', hi: 'ट्रिप करेगा (थ्रेशोल्ड 2.5 A है, जो I_diff से कम है)', bn: 'ট্রিপ করবে (থ্রেশহোল্ড ২.৫ A, যা I_diff এর চেয়ে কম)' } },
        { id: 'opt-3', text: { en: 'Trips after a 10-second deliberate time delay', hi: '10 सेकंड की जानबूझकर की गई देरी के बाद ट्रिप करेगा', bn: '১০ সেকেন্ড কৃত্রিম বিলম্বের পর ট্রিপ করবে' } },
        { id: 'opt-4', text: { en: 'Blows the substation auxiliary DC fuse', hi: 'सबस्टेशन सहायक डीसी फ़्यूज़ उड़ जाता है', bn: 'সাবস্টেশনের ডিসি ফিউজ উড়িয়ে দেবে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Threshold = Slope · I_bias + I_pickup = 0.40 · 8.0 A + 0.3 A = 3.2 A + 0.3 A = 3.5 A. Since I_diff = 3.0 A < 3.5 A, the differential current does not reach the tripping threshold, so the relay restrains.',
        hi: 'थ्रेशोल्ड = 0.40 * 8.0 + 0.3 = 3.5 A। चूंकि I_diff = 3.0 A < 3.5 A है, रिले ट्रिप नहीं करेगा (Restrains)।',
        bn: 'থ্রেশহোল্ড = ০.৪০ * ৮.০ + ০.৩ = ৩.৫ A। যেহেতু I_diff = ৩.০ A < ৩.৫ A, তাই অপারেটিং ফোর্স যথেষ্ট নয় এবং রিলে স্থিতিশীল থাকবে (Restrain)।'
      }
    }
  ]
};
