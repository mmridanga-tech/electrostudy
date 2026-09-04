import { Lesson } from '../types';

export const LESSON_BASIC_PPE: Lesson = {
  id: 'lsn-ch15-basic-ppe',
  topicId: 'tp-basic-ppe',
  chapterId: 'ch-electrical-safety',
  order: 9,
  title: {
    en: 'Basic PPE',
    hi: 'बुनियादी पीपीई (PPE)',
    bn: 'মৌলিক পিপিই (PPE)'
  },
  description: {
    en: 'Engineering standards for Electrical Personal Protective Equipment (PPE): ASTM D120 / IEC 60903 insulating glove voltage classes (00 to 4), leather protector requirements, mandatory air inflation tests, 6-month dielectric re-test cycles, NFPA 70E Arc Flash PPE Categories (1 through 4 up to 40 cal/cm²), ASTM F2413 EH dielectric footwear, and Class E 20 kV hard hats.',
    hi: 'विद्युत व्यक्तिगत सुरक्षा उपकरण (PPE) के इंजीनियरिंग मानक: ASTM D120 / IEC 60903 इंसुलेटिंग दस्ताने वोल्टेज वर्ग (00 से 4), चमड़े के रक्षक कवर, अनिवार्य वायु फुलाव परीक्षण, 6 महीने का री-टेस्ट चक्र, NFPA 70E आर्क फ्लैश श्रेणियां (1 से 4, 40 cal/cm² तक), ASTM F2413 EH डाइइलेक्ट्रिक जूते, और क्लास E 20 kV हेलमेट।',
    bn: 'বৈদ্যুতিক ব্যক্তিগত সুরক্ষাসামগ্রীর (PPE) প্রকৌশল মানদণ্ড: ASTM D120 / IEC 60903 ইনসুলেটিং গ্লাভস ভোল্টেজ শ্রেণি (০০ থেকে ৪), চামড়ার কভারের আবশ্যকতা, বাধ্যতামূলক বায়ু স্ফীতি পরীক্ষা, ৬ মাসের ল্যাব ডাইইলেক্ট্রিক টেস্ট চক্র, NFPA 70E আর্ক ফ্ল্যাশ শ্রেণি (১ থেকে ৪, ৪০ cal/cm² পর্যন্ত), ASTM F2413 EH বুট এবং ক্লাস E ২০ kV হেলমেট।'
  },
  estimatedMinutes: 45,
  easyExplanation: {
    en: 'Electrical PPE (Personal Protective Equipment) is the specialized armor that protects technicians from two distinct fatal hazards: Electric Shock (current flowing through your body) and Arc Flash (explosive thermal fireball reaching 19,000°C). Ordinary work clothes and leather gardening gloves offer ZERO protection—in fact, synthetic fabrics like polyester or nylon melt into burning plastic on human skin during an arc flash! True electrical protection relies on a calibrated system: (1) Rubber Insulating Gloves, certified by ASTM voltage classes (Class 00 for up to 500 V, Class 0 for 1,000 V, up to Class 4 for 36,000 V), which must ALWAYS be protected by top-grain leather outer gloves to prevent punctures. (2) Arc-Rated (AR) Clothing and Flash Suits rated in cal/cm² (from Category 1 at 4 cal/cm² up to Category 4 at 40 cal/cm² with a full astronaut-style hood). (3) Dielectric Safety Boots (EH rated for 18,000 V) and Class E Hard Hats that shield the skull from 20,000 V contact.',
    hi: 'विद्युत पीपीई (PPE) वह विशेष सुरक्षा कवच है जो तकनीशियनों को दो सबसे बड़े खतरों से बचाता है: बिजली का झटका (शरीर से करंट बहना) और आर्क फ्लैश (19,000°C का भयानक आग का गोला)। साधारण कपड़े या सामान्य दस्ताने कोई सुरक्षा नहीं देते—बल्कि पॉलिएस्टर या नायलॉन जैसे कपड़े आर्क की गर्मी में पिघलकर त्वचा पर चिपक जाते हैं! वास्तविक विद्युत सुरक्षा एक प्रमाणित प्रणाली पर काम करती है: (1) रबर इंसुलेटिंग दस्ताने, जो वोल्टेज क्लास के अनुसार चुने जाते हैं (क्लास 00: 500 V तक, क्लास 0: 1,000 V तक, क्लास 4: 36,000 V तक)। रबर के दस्तानों को फटने से बचाने के लिए उन पर चमड़े के बाहरी दस्ताने पहनना अनिवार्य है। (2) आर्क-रेटेड कपड़े और सूट (Category 1 से 4, 40 cal/cm² तक हुड सहित)। (3) डाइइलेक्ट्रिक सेफ्टी शूज (EH रेटेड, 18,000 V तक सुरक्षित) और क्लास E हेलमेट जो सिर को 20,000 V से बचाते हैं।',
    bn: 'বৈদ্যুতিক সুরক্ষাসামগ্রী (PPE) হলো বিশেষ বর্ম যা বিদ্যুৎকর্মীদের দুটি মারাত্মক ঝুঁকি থেকে রক্ষা করে: ইলেকট্রিক শক (শরীরে কারেন্ট প্রবাহ) এবং আর্ক ফ্ল্যাশ (১৯,০০০° সেলসিয়াসের উত্তপ্ত প্লাজমা বিস্ফোরণ)। সাধারণ সুতি বা পলিয়েস্টারের পোশাক কোনো সুরক্ষা দেয় না—বরং পলিয়েস্টার বা সিন্থেটিক কাপড় গলে গিয়ে ত্বকের সাথে পুড়ে আটকে যায়! নিরাপদ সুরক্ষার তিনটি মূল স্তম্ভ: (১) রবার ইনসুলেটিং গ্লাভস, যা ভোল্টেজ শ্রেণি অনুযায়ী নির্ধারিত (ক্লাস ০০: ৫০০ V, ক্লাস ০: ১,০০০ V, ক্লাস ৪: ৩৬,০০০ V পর্যন্ত)। রবার যেন ফুটো না হয় সেজন্য এর উপর চামড়ার সুরক্ষামূলক গ্লাভস পরা বাধ্যতামূলক। (২) আর্ক-রেটেড স্যুট (ক্যাটাগরি ১ থেকে ৪, ৪০ cal/cm² পর্যন্ত অ্যাস্ট্রোনট ধাঁচের স্পেস হুডসহ)। (৩) ডাইইলেক্ট্রিক সেফটি জুতো (EH রেটেড ১৮,০০০ V) এবং ক্লাস E সেফটি হেলমেট যা ২০,০০০ ভোল্টের স্পর্শ থেকে মাথার খুলিকে রক্ষা করে।'
  },
  detailedExplanation: {
    en: 'Electrical PPE engineering is governed by strict international standards (ASTM D120, ASTM F1506, ASTM F2413, IEC 60903, and NFPA 70E):\n\n1. ASTM D120 / IEC 60903 Insulating Rubber Gloves Voltage Classes:\n• Class 00 (Beige Tag): Max AC Use = 500 V; Max DC Use = 750 V; Proof Test = 2,500 V AC.\n• Class 0 (Red Tag): Max AC Use = 1,000 V; Max DC Use = 1,500 V; Proof Test = 5,000 V AC.\n• Class 1 (White Tag): Max AC Use = 7,500 V; Max DC Use = 11,250 V; Proof Test = 10,000 V AC.\n• Class 2 (Yellow Tag): Max AC Use = 17,000 V; Max DC Use = 25,500 V; Proof Test = 20,000 V AC.\n• Class 3 (Green Tag): Max AC Use = 26,500 V; Max DC Use = 39,750 V; Proof Test = 30,000 V AC.\n• Class 4 (Orange Tag): Max AC Use = 36,000 V; Max DC Use = 54,000 V; Proof Test = 40,000 V AC.\n\n2. The Three-Layer Glove System:\n• Layer 1 (Innermost): Cotton knit absorbent liner to wick sweat and prevent dermatitis.\n• Layer 2 (Middle): Seamless vulcanized dielectric rubber glove providing voltage breakdown resistance.\n• Layer 3 (Outer): Top-grain cowhide or goatskin leather protector. Dielectric rubber has low mechanical tear resistance; sharp burs on copper busbars would instantly puncture it without leather.\n\n3. Daily Inspection and Re-test Intervals (OSHA 1910.137):\n• Daily Air Test: Before every shift, roll the glove cuff tightly toward the fingers to trap air and submerge or listen near the ear; any hissing or pressure drop indicates pinholes and mandates condemnation.\n• Re-test Cycle: Insulating gloves MUST undergo laboratory dielectric proof testing every 6 months (or 12 months if unopened in factory hermetic storage).\n\n4. NFPA 70E Arc Flash PPE Categories:\n• Category 1 (Min Arc Rating 4 cal/cm²): Arc-rated long-sleeve shirt/pants or coverall, face shield, hard hat, safety glasses, Class 0/00 gloves.\n• Category 2 (Min Arc Rating 8 cal/cm²): Arc-rated shirt & pants (8 cal/cm²), arc face shield with chin cup + 8 cal balaclava or full arc hood, heavy leather boots.\n• Category 3 (Min Arc Rating 25 cal/cm²): Arc-rated flash suit jacket and bib overalls (25 cal/cm²), full arc-rated hood, rubber insulating gloves with leather protectors.\n• Category 4 (Min Arc Rating 40 cal/cm²): Multi-layer arc flash suit (40 cal/cm²), 40 cal hood with fresh air ventilation, hearing protection, dielectric footwear. (Tasks > 40 cal/cm² are deemed EXTREMELY DANGEROUS; energized work is strictly forbidden!).\n\n5. Head and Foot Protection:\n• Hard Hats (ANSI/ISEA Z89.1): Class E (Electrical) tested to 20,000 V; Class G (General) tested to 2,200 V; Class C (Conductive) offers zero electrical protection.\n• Safety Footwear (ASTM F2413 EH): Non-conductive electrical hazard soles tested to withstand 18,000 V AC at 60 Hz for 1 minute with leakage current < 1.0 mA.',
    hi: 'विद्युत पीपीई इंजीनियरिंग अंतरराष्ट्रीय मानकों (ASTM D120, IEC 60903, NFPA 70E) द्वारा निर्देशित होती है:\n\n1. ASTM D120 इंसुलेटिंग रबर दस्ताने वर्ग:\n• क्लास 00 (बेज टैग): अधिकतम 500 V AC / 750 V DC (प्रूफ टेस्ट 2,500 V)।\n• क्लास 0 (लाल टैग): अधिकतम 1,000 V AC / 1,500 V DC (प्रूफ टेस्ट 5,000 V)।\n• क्लास 1 (सफेद टैग): अधिकतम 7,500 V AC (प्रूफ टेस्ट 10,000 V)।\n• क्लास 2 (पीला टैग): अधिकतम 17,000 V AC (प्रूफ टेस्ट 20,000 V)।\n• क्लास 3 (हरा टैग): अधिकतम 26,500 V AC (प्रूफ टेस्ट 30,000 V)।\n• क्लास 4 (नारंगी टैग): अधिकतम 36,000 V AC (प्रूफ टेस्ट 40,000 V)।\n\n2. तीन-परत दस्ताना प्रणाली:\n• भीतरी परत: पसीना सोखने वाला कॉटन इनर।\n• मध्य परत: सीमलेस वल्केनाइज्ड रबर का वोल्टेज दस्ताना।\n• बाहरी परत: चमड़े का लेदर प्रोटेक्टर। रबर नुकीले तारों से कट सकता है, चमड़ा उसकी रक्षा करता है।\n\n3. दैनिक निरीक्षण एवं री-टेस्ट नियम:\n• दैनिक एयर टेस्ट: उपयोग से पहले दस्ताने को मोड़कर हवा भरें और कान के पास सुनें; हवा रिसने पर उसे तुरंत नष्ट कर दें।\n• 6-महीने का नियम: हर 6 महीने में प्रयोगशाला में हाई-वोल्टेज टेस्ट कराना अनिवार्य है।\n\n4. NFPA 70E आर्क फ्लैश श्रेणियां:\n• श्रेणी 1: 4 cal/cm² तक (शर्ट, पैंट, फेस शील्ड)।\n• श्रेणी 2: 8 cal/cm² तक (8 cal सूट, फेस शील्ड + बालाक्लावा)।\n• श्रेणी 3: 25 cal/cm² तक (25 cal आर्क फ्लैश जैकेट और बिब पैंट)।\n• श्रेणी 4: 40 cal/cm² तक (40 cal सूट और एस्ट्रोनॉट हुड)। 40 cal/cm² से ऊपर लाइव काम प्रतिबंधित है!\n\n5. जूते और हेलमेट:\n• क्लास E हेलमेट: 20,000 V सुरक्षा के लिए प्रमाणित।\n• ASTM F2413 EH जूते: 18,000 V पर 1 मिनट तक लीकेज करंट < 1 mA रखते हैं।',
    bn: 'বৈদ্যুতিক সুরক্ষাসামগ্রীর প্রকৌশল মানদণ্ড (ASTM D120, IEC 60903, NFPA 70E):\n\n১. ASTM D120 রবার ইনসুলেটিং গ্লাভস শ্রেণি:\n• ক্লাস ০০ (বেইজ ট্যাগ): সর্বোচ্চ ৫০০ V AC / ৭৫০ V DC (টেস্ট ২,৫০০ V)।\n• ক্লাস ০ (লাল ট্যাগ): সর্বোচ্চ ১,০০০ V AC / ১,৫০০ V DC (টেস্ট ৫,০০০ V)।\n• ক্লাস ১ (সাদা ট্যাগ): সর্বোচ্চ ৭,৫০০ V AC (টেস্ট ১০,০০০ V)।\n• ক্লাস ২ (হলুদ ট্যাগ): সর্বোচ্চ ১৭,০০০ V AC (টেস্ট ২০,০০০ V)।\n• ক্লাস ৩ (সবুজ ট্যাগ): সর্বোচ্চ ২৬,৫০০ V AC (টেস্ট ৩০,০০০ V)।\n• ক্লাস ৪ (কমলা ট্যাগ): সর্বোচ্চ ৩৬,০০০ V AC (টেস্ট ৪০,০০০ V)।\n\n২. তিন স্তরের গ্লাভস পরিকাঠামো:\n• ভেতরের স্তর: ঘাম শোষণকারী সুতি লাইনার।\n• মধ্যবর্তী স্তর: ডাইইলেক্ট্রিক ইনসুলেটিং রবার গ্লাভস।\n• বাইরের স্তর: খাঁটি গরুর বা ছাগলের চামড়ার লেদার প্রোটেক্টর যা রবারকে তীক্ষ্ণ তামার পাত থেকে কেটে যাওয়া রোধ করে।\n\n৩. দৈনিক এয়ার টেস্ট ও ৬ মাসের টেস্ট চক্র:\n• দৈনিক বায়ু পরীক্ষা: ব্যবহারের পূর্বে গ্লাভসের কব্জি গুটিয়ে বায়ু আটকে ছিদ্র পরীক্ষা করা।\n• ল্যাব রি-টেস্ট: প্রতি ৬ মাস অন্তর অনুমোদিত ল্যাবে উচ্চ ভোল্টেজ ডাইইলেক্ট্রিক প্রুফ টেস্ট বাধ্যতামূলক।\n\n৪. NFPA 70E আর্ক ফ্ল্যাশ শ্রেণি:\n• ক্যাটাগরি ১: ৪ cal/cm² রেটিং (আর্ক শার্ট, প্যান্ট ও ফেস শিল্ড)।\n• ক্যাটাগরি ২: ৮ cal/cm² রেটিং (৮ cal স্যুট + বালাক্লাভা হুড)।\n• ক্যাটাগরি ৩: ২৫ cal/cm² রেটিং (২৫ cal ফ্ল্যাশ জ্যাকেট ও প্যান্ট)।\n• ক্যাটাগরি ৪: ৪০ cal/cm² রেটিং (৪০ cal বহুস্তরীয় স্যুট ও পূর্ণাঙ্গ হুড)। ৪০ cal/cm² এর বেশি শক্তিতে কোনো কাজ করা সম্পূর্ণ নিষিদ্ধ!\n\n৫. জুতো ও হেলমেট:\n• ক্লাস E হেলমেট: ২০,০০০ ভোল্ট ডাইইলেক্ট্রিক প্রতিরোধ ক্ষমতা।\n• ASTM F2413 EH জুতো: ১৮,০০০ ভোল্টে ৬০ হার্টজে ১ মিনিট ধরে লিকেজ কারেন্ট ১ মিলিঅ্যাম্পিয়ারের নিচে বজায় রাখে।'
  },
  formulas: [
    {
      id: 'f-atpv-thermal-safety-margin',
      symbol: 'SM_{arc}',
      expression: 'SM_{\text{arc}} = \frac{\text{ATPV} - E_{\text{incident}}}{E_{\text{incident}}} \times 100\%',
      title: {
        en: 'Arc Thermal Protective Safety Margin',
        hi: 'आर्क तापीय सुरक्षा मार्जिन',
        bn: 'আর্ক থার্মাল সুরক্ষা ব্যবধান সমীকরণ'
      },
      description: {
        en: 'Quantifies the percentage safety buffer between the rated Arc Thermal Performance Value (ATPV in cal/cm²) of the protective suit and the calculated incident energy (E_incident). A positive margin (ATPV > E_incident) prevents second-degree burns.',
        hi: 'सूट के ATPV रेटिंग और वास्तविक आपतित ऊर्जा के बीच प्रतिशत सुरक्षा अंतर की गणना करता है।',
        bn: 'স্যুটের নির্ধারিত ATPV রেটিং এবং হিসাবকৃত বিকিরিত শক্তির মধ্যকার শতকরা সুরক্ষা ব্যবধান নির্ণয় করে।'
      },
      variables: [
        { symbol: 'SM_{arc}', name: { en: 'Safety margin percentage (%)', hi: 'सुरक्षा मार्जिन प्रतिशत (%)', bn: 'নিরাপত্তা মার্জিন শতকরা (%)' } },
        { symbol: 'ATPV', name: { en: 'Arc Thermal Performance Value (cal/cm²)', hi: 'आर्क थर्मल परफॉर्मेंस वैल्यू (cal/cm²)', bn: 'আর্ক থার্মাল পারফরম্যান্স ভ্যালু (cal/cm²)' } },
        { symbol: 'E_{incident}', name: { en: 'Calculated incident thermal energy (cal/cm²)', hi: 'आपतित तापीय ऊर्जा (cal/cm²)', bn: 'হিসাবকৃত বিকিরিত তাপ শক্তি (cal/cm²)' } }
      ]
    },
    {
      id: 'f-dielectric-safety-factor-gloves',
      symbol: 'SF_{glove}',
      expression: 'SF_{\text{glove}} = \frac{V_{\text{proof}}}{V_{\text{operating}}}',
      title: {
        en: 'Insulating Glove Dielectric Safety Factor',
        hi: 'इंसुलेटिंग दस्ताना परावैद्युत सुरक्षा अनुपात',
        bn: 'ইনসুলেটিং গ্লাভসের ডাইইলেক্ট্রিক নিরাপত্তা অনুপাত'
      },
      description: {
        en: 'The ratio of the factory proof-test voltage (V_proof) to the maximum nominal operating line voltage (V_operating), ensuring high dielectric integrity against breakdown surges.',
        hi: 'प्रूफ टेस्ट वोल्टेज और ऑपरेटिंग वोल्टेज का अनुपात।',
        bn: 'কারখানার প্রুফ টেস্ট ভোল্টেজ এবং লাইনের কার্যকর ভোল্টেজের অনুপাত।'
      },
      variables: [
        { symbol: 'SF_{glove}', name: { en: 'Dielectric safety factor ratio', hi: 'डाइइलेक्ट्रिक सुरक्षा कारक', bn: 'ডাইইলেক্ট্রিক সুরক্ষা গুণক' } },
        { symbol: 'V_{proof}', name: { en: 'Standard factory AC proof test voltage (V)', hi: 'फैक्ट्री प्रूफ टेस्ट वोल्टेज (V)', bn: 'কারখানার এসি প্রুফ টেস্ট ভোল্টেজ (V)' } },
        { symbol: 'V_{operating}', name: { en: 'Operating line-to-line AC voltage (V)', hi: 'ऑपरेटिंग लाइन वोल्टेज (V)', bn: 'কার্যকরী লাইন ভোল্টেজ (V)' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-ch15-l09-ppe-standards-matrix',
      title: {
        en: 'Glove Classes and Arc Flash Categories Matrix',
        hi: 'दस्ताने वर्ग एवं आर्क फ्लैश श्रेणियाँ मैट्रिक्स',
        bn: 'গ্লাভস শ্রেণি ও আর্ক ফ্ল্যাশ ক্যাটাগরি ছক'
      },
      content: {
        en: 'Selecting electrical PPE requires strict matching of voltage classes and incident energy levels:\n\n1. Glove Class Selection Protocol:\n• For 230 V single-phase or 415 V three-phase systems: Class 00 (500 V) or Class 0 (1,000 V) is mandatory.\n• For 3.3 kV or 6.6 kV industrial distribution: Class 1 (7,500 V) is mandatory.\n• For 11 kV substations: Class 2 (17,000 V) is mandatory (Proof tested at 20,000 V).\n• For 33 kV grid installations: Class 4 (36,000 V) is mandatory (Proof tested at 40,000 V).\n\n2. The Leather Protector Clearance Gap:\nTo prevent electrical tracking across the conductive leather surface to the skin, ASTM F696 mandates a minimum clearance distance between the top of the leather protector cuff and the bead of the rubber glove:\n• Class 00 and 0: Minimum 13 mm (0.5 inch) rubber clearance gap.\n• Class 1: Minimum 25 mm (1.0 inch) rubber clearance gap.\n• Class 2: Minimum 51 mm (2.0 inches) rubber clearance gap.\n• Class 3: Minimum 76 mm (3.0 inches) rubber clearance gap.\n• Class 4: Minimum 102 mm (4.0 inches) rubber clearance gap.\n\n3. Arc Flash Category Summary:\nCategory 1: 4 cal/cm² | Category 2: 8 cal/cm² | Category 3: 25 cal/cm² | Category 4: 40 cal/cm².\nAny installation calculated > 40 cal/cm² presents a fatal blast pressure risk (sound > 165 dB, shrapnel > 1,100 km/h) where NO commercial PPE is rated; power MUST be cut upstream before opening.',
        hi: 'विद्युत पीपीई का चयन वोल्टेज और ऊर्जा के सटीक मिलान पर निर्भर करता है:\n\n1. दस्ताने चयन प्रोटोकॉल:\n• 230 V या 415 V के लिए: क्लास 00 (500 V) या क्लास 0 (1,000 V) अनिवार्य है।\n• 6.6 kV के लिए: क्लास 1 (7,500 V)।\n• 11 kV सबस्टेशन के लिए: क्लास 2 (17,000 V)।\n• 33 kV स्विचयार्ड के लिए: क्लास 4 (36,000 V)।\n\n2. लेदर प्रोटेक्टर और रबर के बीच का अंतर:\nचमड़े के ऊपर से करंट को हाथ तक कूदने से रोकने के लिए रबर और चमड़े के कफ के बीच न्यूनतम अंतर (Clearance Gap) होना अनिवार्य है (क्लास 0 के लिए 13 mm, क्लास 2 के लिए 51 mm)।\n\n3. आर्क फ्लैश श्रेणियाँ:\nश्रेणी 1: 4 cal/cm² | श्रेणी 2: 8 cal/cm² | श्रेणी 3: 25 cal/cm² | श्रेणी 4: 40 cal/cm²।\n40 cal/cm² से अधिक ऊर्जा वाले पैनल पर कोई भी सूट काम नहीं करता; वहाँ केवल शटडाउन करके ही काम हो सकता है।',
        bn: 'বৈদ্যুতিক সুরক্ষাসামগ্রীর সঠিক নির্বাচন ভোল্টেজ ও শক্তির তুলনার উপর নির্ভরশীল:\n\n১. গ্লাভস শ্রেণি নির্বাচনের নিয়মাবলী:\n• ২৩০ V বা ৪১৫ V সিস্টেমের জন্য: ক্লাস ০০ (৫০০ V) অথবা ক্লাস ০ (১,০০০ V)।\n• ৬.৬ kV ডিস্ট্রিবিউশনের জন্য: ক্লাস ১ (৭,৫০০ V)।\n• ১১ kV সাবস্টেশনের জন্য: ক্লাস ২ (১৭,০০০ V)।\n• ৩৩ kV গ্রিড লাইনের জন্য: ক্লাস ৪ (৩৬,০০০ V)।\n\n২. লেদার কভার ও রবারের মধ্যকার নিরাপদ দূরত্ব (Clearance Gap):\nচামড়া থেকে বিদ্যুৎ যেন সরাসরি হাতে লাফিয়ে না আসে সেজন্য রবারের কিছুটা অংশ উন্মুক্ত রাখা বাধ্যতামূলক (ক্লাস ০ এর জন্য ১৩ মিমি, ক্লাস ২ এর জন্য ৫১ মিমি)।\n\n৩. আর্ক ফ্ল্যাশ ক্যাটাগরি:\nক্যাটাগরি ১: ৪ cal/cm² | ক্যাটাগরি ২: ৮ cal/cm² | ক্যাটাগরি ৩: ২৫ cal/cm² | ক্যাটাগরি ৪: ৪০ cal/cm²।\n৪০ cal/cm² এর বেশি তীব্রতার প্যানেলে কোনো স্যুটই সুরক্ষা দিতে পারে না; সেখানে কাজ করা সম্পূর্ণ নিষিদ্ধ।'
      },
      schematicId: 'circuit-ch15-electrical-ppe-matrix'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch15-l09-01',
      problem: {
        en: 'An industrial engineer needs to select the proper ASTM D120 insulating rubber gloves for an 11 kV (11,000 V line-to-line) three-phase distribution switchgear room. Review the glove classes and determine:\n(a) Which ASTM glove class is the minimum required rating for 11 kV AC line-to-line work?\n(b) What is the maximum rated AC operating voltage of this class?\n(c) What factory proof-test voltage did this glove pass?\n(d) Calculate the dielectric safety factor SF_glove relative to the 11 kV system voltage.',
        hi: 'एक 11 kV (11,000 V) थ्री-फेज स्विचगियर रूम के लिए ASTM D120 रबर दस्ताने का चयन करना है:\n(a) 11 kV AC के लिए न्यूनतम किस क्लास के दस्ताने की आवश्यकता है?\n(b) इस क्लास का अधिकतम रेटेड AC वर्किंग वोल्टेज क्या है?\n(c) फैक्ट्री में यह किस प्रूफ-टेस्ट वोल्टेज को पास करता है?\n(d) 11 kV सिस्टम के लिए डाइइलेक्ट्रिक सुरक्षा कारक की गणना कीजिए।',
        bn: 'একটি ১১ kV (১১,০০০ V) থ্রি-ফেজ সুইচগিয়ার রুমে কাজের জন্য উপযুক্ত ASTM D120 ইনসুলেটিং গ্লাভস নির্বাচন করতে হবে:\n(a) ১১ kV AC লাইনের জন্য সর্বনিম্ন কোন শ্রেণির গ্লাভস বাধ্যতামূলক?\n(b) এই ক্লাসের সর্বোচ্চ অনুমোদিত এসি অপারেটিং ভোল্টেজ কত?\n(c) কারখানায় এই গ্লাভস কত ভোল্টেজ প্রুফ টেস্টে উত্তীর্ণ হয়?\n(d) ১১ kV সিস্টেমের সাপেক্ষে ডাইইলেক্ট্রিক সুরক্ষা অনুপাত নির্ণয় করুন।'
      },
      solution: {
        en: 'Step 1: Glove Class Evaluation\n• Class 00: Max AC Use = 500 V (< 11,000 V - Insufficient)\n• Class 0: Max AC Use = 1,000 V (< 11,000 V - Insufficient)\n• Class 1: Max AC Use = 7,500 V (< 11,000 V - Insufficient)\n• Class 2: Max AC Use = 17,000 V AC (> 11,000 V - Fully Compliant!)\n\n(a) Minimum required ASTM Class = Class 2 (Yellow Tag).\n\n(b) Maximum AC operating voltage of Class 2 = 17,000 V AC.\n\n(c) Standard factory proof-test voltage = 20,000 V AC.\n\n(d) Dielectric Safety Factor Calculation:\nSF_glove = V_proof / V_operating = 20,000 V / 11,000 V ≈ 1.82\n\nConclusion:\nClass 2 gloves with outer leather protectors providing at least 51 mm (2.0 inches) of cuff clearance are mandatory for 11 kV maintenance.',
        hi: 'चरण 1: क्लास का चयन\n11,000 V के लिए क्लास 1 (7,500 V) कम है। अतः क्लास 2 (पीला टैग) अनिवार्य है।\n(a) न्यूनतम क्लास: क्लास 2 (Yellow Tag)\n(b) अधिकतम रेटिंग: 17,000 V AC\n(c) फैक्ट्री टेस्ट: 20,000 V AC\n(d) सुरक्षा कारक: 20,000 / 11,000 = 1.82।',
        bn: 'ধাপ ১: শ্রেণি যাচাইকরণ\n১১,০০০ ভোল্টের জন্য ক্লাস ১ (৭,৫০০ V) অপর্যাপ্ত। অতএব ক্লাস ২ (হলুদ ট্যাগ) নির্বাচন করতে হবে।\n(a) ন্যূনতম শ্রেণি: ক্লাস ২ (Yellow Tag)\n(b) সর্বোচ্চ কাজের ভোল্টেজ: ১৭,০০০ V AC\n(c) ফ্যাক্টরি প্রুফ টেস্ট: ২০,০০০ V AC\n(d) সুরক্ষা অনুপাত: ২০,০০০ / ১১,০০০ = ১.৮২।'
      },
      givenValues: { 'V_system': '11,000 V', 'Glove Class': 'Class 2', 'V_proof': '20,000 V' },
      finalAnswer: {
        en: 'Class 2 (Yellow Tag) rated for 17,000 V AC, proof-tested to 20,000 V AC, yielding a dielectric safety factor of 1.82.',
        hi: 'क्लास 2 (पीला टैग), 17,000 V AC के लिए रेटेड, 20,000 V AC पर टेस्टेड, सुरक्षा कारक = 1.82।',
        bn: 'ক্লাস ২ (হলুদ ট্যাগ), ১৭,০০০ V AC রেটিং, ২০,০০০ V AC তে পরীক্ষিত, ডাইইলেক্ট্রিক সুরক্ষা ফ্যাক্টর = ১.৮২।'
      }
    },
    {
      id: 'ex-ch15-l09-02',
      problem: {
        en: 'An arc flash incident energy study for a 415 V main distribution panel calculates an incident thermal energy of E_incident = 6.8 cal/cm² at the working distance. An electrician intends to wear a Category 1 outfit rated at ATPV = 4.0 cal/cm².\n(a) Determine whether the Category 1 outfit is acceptable.\n(b) Identify the correct NFPA 70E Arc Flash PPE Category and minimum ATPV required.\n(c) Calculate the protective safety margin SM_arc if a Category 2 outfit rated at ATPV = 8.5 cal/cm² is selected.',
        hi: 'एक 415 V पैनल के लिए आपतित तापीय ऊर्जा 6.8 cal/cm² मापी गई है। एक इलेक्ट्रीशियन 4.0 cal/cm² वाला श्रेणी 1 सूट पहनना चाहता है:\n(a) क्या श्रेणी 1 सूट स्वीकार्य है?\n(b) सही NFPA 70E श्रेणी और आवश्यक न्यूनतम रेटिंग क्या है?\n(c) यदि 8.5 cal/cm² वाला श्रेणी 2 सूट चुना जाता है, तो सुरक्षा मार्जिन (%) की गणना कीजिए।',
        bn: 'একটি ৪১৫ V প্যানেলে বিকিরিত তাপ শক্তি পাওয়া গেল ৬.৮ cal/cm²। একজন কর্মী ৪.০ cal/cm² রেটিংয়ের ক্যাটাগরি ১ পোশাক পরতে চাচ্ছেন:\n(a) ক্যাটাগরি ১ কি গ্রহণযোগ্য?\n(b) সঠিক NFPA 70E ক্যাটাগরি ও ন্যূনতম প্রয়োজনীয় রেটিং কত?\n(c) কর্মীকে ৮.৫ cal/cm² রেটিংয়ের ক্যাটাগরি ২ স্যুট দিলে শতকরা সুরক্ষা ব্যবধান কত হবে?'
      },
      solution: {
        en: 'Step 1: Category 1 Assessment\n• Calculated Incident Energy E_incident = 6.8 cal/cm²\n• Outfit Rating ATPV = 4.0 cal/cm²\nBecause E_incident (6.8 cal/cm²) > ATPV (4.0 cal/cm²), the garment will be breached and the technician will suffer serious second-to-third-degree thermal burns. Category 1 is UNACCEPTABLE!\n\nStep 2: Correct Category Selection\n• Category 1: Up to 4.0 cal/cm² (Insufficient)\n• Category 2: Minimum 8.0 cal/cm² (Covers up to 8.0 cal/cm² - Acceptable!)\nCorrect choice is Category 2 (Min 8 cal/cm²).\n\nStep 3: Calculate Safety Margin for ATPV = 8.5 cal/cm²\nSM_arc = [(ATPV - E_incident) / E_incident] × 100%\nSM_arc = [(8.5 - 6.8) / 6.8] × 100%\nSM_arc = [1.7 / 6.8] × 100% = +25.0%\n\nConclusion:\nThe technician must wear a Category 2 arc flash system (minimum 8 cal/cm²), providing a comfortable +25% thermal protection cushion.',
        hi: 'चरण 1: श्रेणी 1 का मूल्यांकन\n6.8 cal/cm² मान 4.0 cal/cm² से अधिक है। कपड़ा जल जाएगा और गंभीर चोट लगेगी। अतः श्रेणी 1 अस्वीकार्य है।\n\nचरण 2: सही श्रेणी\nश्रेणी 2 (न्यूनतम 8.0 cal/cm²) सही विकल्प है।\n\nचरण 3: सुरक्षा मार्जिन\nSM = [(8.5 - 6.8) / 6.8] × 100% = +25.0%।',
        bn: 'ধাপ ১: ক্যাটাগরি ১ মূল্যায়ন\nযেহেতু ৬.৮ cal/cm² > ৪.০ cal/cm², পোশাকটি ঝলসে যাবে এবং কর্মী মারাত্মকভাবে পুড়ে যাবেন। ক্যাটাগরি ১ সম্পূর্ণ অগ্রহণযোগ্য!\n\nধাপ ২: সঠিক ক্যাটাগরি নির্বাচন\nক্যাটাগরি ২ (ন্যূনতম ৮.০ cal/cm²) নির্বাচন করতে হবে।\n\nধাপ ৩: নিরাপত্তা মার্জিন হিসাব\nSM = [(৮.৫ - ৬.৮) / ৬.৮] × ১০০% = +২৫.০%।'
      },
      givenValues: { 'E_incident': '6.8 cal/cm²', 'Category 1 Rating': '4.0 cal/cm²', 'Category 2 Selected': '8.5 cal/cm²' },
      finalAnswer: {
        en: 'Category 1 is rejected. Category 2 (min 8 cal/cm²) is mandatory. With an 8.5 cal/cm² suit, the safety margin is +25.0%.',
        hi: 'श्रेणी 1 खारिज। श्रेणी 2 (न्यूनतम 8 cal) अनिवार्य है। 8.5 cal सूट के साथ सुरक्षा मार्जिन +25.0% है।',
        bn: 'ক্যাটাগরি ১ বাতিল। ক্যাটাগরি ২ (কমপক্ষে ৮ cal) বাধ্যতামূলক। ৮.৫ cal স্যুটে সুরক্ষা মার্জিন +২৫.০%।'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Pre-shift visual inspection and manual air roll-up inflation testing of Class 0 rubber gloves before working inside motor control centers (MCCs).',
      'Donning 40 cal/cm² Category 4 arc flash suits with powered air purifying respirators (PAPR) during manual bus coupler racking.',
      'Mandatory wearing of ASTM F2413 Electrical Hazard (EH) boots in damp industrial water pump rooms.',
      'Enforcing Class E hard hats and arc face shields with chin cups during voltage testing of 415 V distribution panels.'
    ],
    hi: [
      'MCC पैनल में काम शुरू करने से पहले क्लास 0 रबर दस्तानों की हवा भरकर (Air Test) रोजाना जांच करना।',
      '11 kV बस कपलर को रैक करने के दौरान 40 cal/cm² श्रेणी 4 का पूरा आर्क सूट पहनना।',
      'गीले वाटर पंप रूम में ASTM F2413 EH-रेटेड सेफ्टी जूते पहनना।',
      '415 V पैनल की वोल्टेज जांचते समय क्लास E हेलमेट और चिन कप वाली फेस शील्ड लगाना।'
    ],
    bn: [
      'মোটর কন্ট্রোল সেন্টারে (MCC) কাজ শুরুর আগে ক্লাস ০ রবার গ্লাভসে বাতাস ফুলিয়ে ফুটো বা ফাটল পরীক্ষা।',
      '১১ kV বাস কাপলার র্যাকিংয়ের সময় ৪০ cal/cm² ক্যাটাগরি ৪ স্পেস-স্যুট পরিধান।',
      'ভেজা পাম্প হাউজে ১৮,০০০ ভোল্ট সহনশীল ASTM F2413 EH সেফটি বুট ব্যবহার।',
      '৪১৫ V প্যানেলে ভোল্টেজ পরিমাপের সময় ক্লাস E হেলমেট এবং চিবুক ঢাকা ফেস শিল্ড ব্যবহার।'
    ]
  },
  importantPoints: {
    en: [
      'Insulating rubber gloves must ALWAYS be worn with top-grain leather protectors over them; rubber alone has virtually zero puncture resistance.',
      'Perform a manual air test on rubber gloves daily before every shift; any air leakage requires immediate disposal.',
      'Gloves must be re-tested in a high-voltage test lab every 6 months under OSHA 1910.137.',
      'Never wear synthetic fibers (polyester, nylon, spandex) under arc flash gear; they melt at 250°C and fuse into human flesh.',
      'Only Class E hard hats are rated for 20,000 V electrical contact; Class C hard hats provide zero electrical protection.'
    ],
    hi: [
      'रबर के दस्तानों के ऊपर हमेशा चमड़े के लेदर प्रोटेक्टर पहनें; रबर नुकीले तारों से तुरंत फट जाता है।',
      'दस्तानों का रोजाना एयर टेस्ट करें; हवा रिसने पर उसे तुरंत नष्ट कर दें।',
      'हर 6 महीने में अधिकृत लैब में दस्तानों का हाई-वोल्टेज टेस्ट कराना कानूनन अनिवार्य है।',
      'आर्क सूट के अंदर कभी भी नायलॉन या पॉलिएस्टर के कपड़े न पहनें; वे पिघलकर त्वचा में चिपक जाते हैं।',
      'केवल क्लास E हेलमेट 20,000 V से सुरक्षा देता है; क्लास C हेलमेट बिजली से बिल्कुल नहीं बचाता।'
    ],
    bn: [
      'রবার গ্লাভসের উপর সর্বদা চামড়ার লেদার কভার পরতে হবে; অন্যথায় ধারালো তামার পাতে রবার কেটে যাবে।',
      'প্রতিদিন কাজের পূর্বে গ্লাভসে বায়ু ফুলিয়ে লিক পরীক্ষা করা বাধ্যতামূলক।',
      'OSHA 1910.137 মান অনুসারে প্রতি ৬ মাস অন্তর গ্লাভসের হাই-ভোল্টেজ ল্যাব টেস্ট করাতে হয়।',
      'আর্ক স্যুটের নিচে কখনো সিন্থেটিক বা পলিয়েস্টার পোশাক পরবেন না; তা গলে গিয়ে ত্বকের মাংসের সাথে পুড়ে মিশে যায়।',
      'শুধুমাত্র ক্লাস E হেলমেট ২০,০০০ ভোল্ট বিদ্যুৎ প্রতিরোধী; ক্লাস C হেলমেটে কোনো বৈদ্যুতিক নিরাপত্তা নেই।'
    ]
  },
  commonMistakes: {
    en: [
      'Wearing rubber gloves without leather outer protectors, allowing sharp burrs to puncture the dielectric barrier unnoticed.',
      'Using rubber gloves that have passed their 6-month laboratory expiration date stamped on the cuff.',
      'Wearing ordinary sunglasses or standard clear safety glasses instead of arc-rated polycarbonate face shields with chin protection.',
      'Wearing nylon/polyester base layers under arc-rated cotton shirts, creating horrific melt-burn injuries.',
      'Storing rubber gloves folded or crumpled inside toolboxes alongside sharp screwdrivers and oils.'
    ],
    hi: [
      'चमड़े के कवर के बिना रबर के दस्ताने पहनना, जिससे नुकीले तारों से छेद हो सकता है।',
      'कफ पर लगी 6-महीने की टेस्ट एक्सपायरी तारीख निकलने के बाद भी दस्तानों का उपयोग करना।',
      'आर्क-रेटेड फेस शील्ड के स्थान पर सामान्य चश्मे पहनना।',
      'आर्क सूट के नीचे नायलॉन की टी-शर्ट पहनना, जो आग लगने पर प्लास्टिक की तरह पिघल जाती है।',
      'दस्तानों को मुड़े हुए हालत में पेचकस और तेल के साथ टूलबॉक्स में फेंक देना।'
    ],
    bn: [
      'চামড়ার কভার ছাড়া কেবল রবার গ্লাভস পরা, ফলে খালি চোখেই দেখা যায় না এমন সূক্ষ্ম ফুটো হয়ে মারাত্মক শক লাগা।',
      'কব্জিতে সিলমারা ৬ মাসের ল্যাব টেস্টের মেয়াদ উত্তীর্ণ হওয়ার পরও পুরোনো গ্লাভস ব্যবহার করা।',
      'আর্ক শিল্ডের বদলে সাধারণ রোদচশমা পরে প্যানেলে কাজ করা।',
      'আর্ক পোশাকের নিচে সিন্থেটিক গেঞ্জি পরা যা তাপে গলে চামড়া ধ্বংস করে দেয়।',
      'ধারালো স্ক্রু-ড্রাইভার ও তেলের সাথে গ্লাভস ভাঁজ করে নোংরা ব্যাগে রাখা।'
    ]
  },
  keyTakeaways: {
    en: [
      'Class 00 (500 V) and Class 0 (1,000 V) protect in low-voltage; Class 2 (17,000 V) is the standard for 11 kV substations.',
      'Always observe the minimum clearance gap between the leather protector cuff and the rubber glove bead.',
      'Arc Flash PPE is categorized from Category 1 (4 cal/cm²) to Category 4 (40 cal/cm²). Beyond 40 cal/cm², de-energization is mandatory.',
      'Dielectric boots must be certified ASTM F2413 EH (18 kV rated), and hard hats must be Class E (20 kV rated).'
    ],
    hi: [
      'क्लास 00 (500 V) और क्लास 0 (1,000 V) लो-वोल्टेज के लिए हैं; 11 kV सबस्टेशन के लिए क्लास 2 (17,000 V) मानक है।',
      'चमड़े और रबर के कफ के बीच हमेशा निर्धारित अंतर (क्लियरेंस) बनाए रखें।',
      'आर्क फ्लैश PPE श्रेणी 1 (4 cal) से श्रेणी 4 (40 cal) तक होती है। 40 cal से ऊपर केवल शटडाउन संभव है।',
      'सेफ्टी शूज ASTM F2413 EH (18 kV) और हेलमेट क्लास E (20 kV) रेटेड होने चाहिए।'
    ],
    bn: [
      'লো-ভোল্টেজের জন্য ক্লাস ০০ (৫০০ V) ও ক্লাস ০ (১,০০০ V); ১১ kV সাবস্টেশনের জন্য ক্লাস ২ (১৭,০০০ V) আবশ্যক।',
      'চামড়ার কভার ও রবারের প্রান্তের মধ্যে বাধ্যতামূলক নিরাপদ দূরত্ব বজায় রাখুন।',
      'আর্ক ফ্ল্যাশ পিপিই ক্যাটাগরি ১ (৪ cal) থেকে ক্যাটাগরি ৪ (৪০ cal) পর্যন্ত হয়। ৪০ cal এর বেশি থাকলে শাটডাউন ছাড়া কাজ নিষেধ।',
      'সেফটি জুতো ASTM F2413 EH (১৮ kV) এবং হেলমেট ক্লাস E (২০ kV) হওয়া অপরিহার্য।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch15-l09-01',
      question: {
        en: 'According to ASTM D120 and IEC 60903, what is the maximum rated AC operating voltage and color identification tag for Class 0 electrical insulating rubber gloves?',
        hi: 'ASTM D120 और IEC 60903 के अनुसार, क्लास 0 इंसुलेटिंग रबर दस्तानों का अधिकतम रेटेड AC वर्किंग वोल्टेज और पहचान टैग का रंग क्या है?',
        bn: 'ASTM D120 এবং IEC 60903 অনুসারে, ক্লাস ০ ইনসুলেটিং রবার গ্লাভসের সর্বোচ্চ অনুমোদিত এসি অপারেটিং ভোল্টেজ এবং সনাক্তকারী ট্যাগের রং কী?'
      },
      options: [
        { id: 'opt-1', text: { en: '1,000 V AC (Max Use) with a Red identification tag', hi: '1,000 V AC (अधिकतम उपयोग) लाल पहचान टैग के साथ', bn: '১,০০০ V AC (সর্বোচ্চ ব্যবহার) লাল রঙের সনাক্তকারী ট্যাগসহ' } },
        { id: 'opt-2', text: { en: '500 V AC with a Beige tag', hi: '500 V AC बेज टैग के साथ', bn: '৫০০ V AC বেইজ ট্যাগসহ' } },
        { id: 'opt-3', text: { en: '17,000 V AC with a Yellow tag', hi: '17,000 V AC पीले टैग के साथ', bn: '১৭,০০০ V AC হলুদ ট্যাগসহ' } },
        { id: 'opt-4', text: { en: '36,000 V AC with an Orange tag', hi: '36,000 V AC नारंगी टैग के साथ', bn: '৩৬,০০০ V AC কমলা ট্যাগসহ' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Class 0 gloves are identified by a Red label and are certified for a maximum AC operating voltage of 1,000 V AC / 1,500 V DC, proof-tested at 5,000 V AC.',
        hi: 'क्लास 0 दस्तानों पर लाल टैग होता है और वे 1,000 V AC / 1,500 V DC के लिए रेटेड होते हैं (प्रूफ टेस्ट 5,000 V)।',
        bn: 'ক্লাস ০ গ্লাভসে লাল রঙের ট্যাগ থাকে এবং এটি সর্বোচ্চ ১,০০০ V AC / ১,৫০০ V DC লাইনে কাজের জন্য প্রত্যয়িত (প্রুফ টেস্ট ৫,০০০ V)।'
      }
    },
    {
      id: 'mcq-ch15-l09-02',
      question: {
        en: 'Why must electrical insulating rubber gloves ALWAYS be worn with an outer layer of top-grain leather protector gloves?',
        hi: 'इंसुलेटिंग रबर दस्तानों के ऊपर हमेशा चमड़े के बाहरी दस्ताने पहनना क्यों अनिवार्य है?',
        bn: 'ইনসুলেটিং রবার গ্লাভসের উপর সর্বদা শীর্ষমানের চামড়ার লেদার প্রোটেক্টর গ্লাভস পরা বাধ্যতামূলক কেন?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Pure dielectric rubber has low mechanical tear and puncture resistance; leather protects the thin rubber from sharp metal burrs, pinholes, and abrasions', hi: 'शुद्ध रबर आसानी से कट और फट सकता है; चमड़ा पतले रबर को नुकीले तारों, कटने और छिलने से बचाता है', bn: 'বিশুদ্ধ ডাইইলেক্ট্রিক রবারের যান্ত্রিক সহনশীলতা খুব কম; চামড়া সূক্ষ্ম রবারকে ধারালো তামার পাত, ছিদ্র ও ঘর্ষণ থেকে রক্ষা করে' } },
        { id: 'opt-2', text: { en: 'To make the gloves look stylish on site', hi: 'ताकि दस्ताने देखने में सुंदर लगें', bn: 'গ্লাভস দেখতে সুন্দর লাগার জন্য' } },
        { id: 'opt-3', text: { en: 'Leather conducts electricity safely into the ground', hi: 'चमड़ा बिजली को जमीन में सुरक्षित बहा देता है', bn: 'চামড়া বিদ্যুৎ সহজে মাটিতে প্রবাহিত করে দেয়' } },
        { id: 'opt-4', text: { en: 'Because rubber attracts mosquitoes', hi: 'क्योंकि रबर से मच्छर आकर्षित होते हैं', bn: 'কারণ রবার মশা আকর্ষণ করে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Dielectric rubber will instantly puncture if snagged against sharp sheet metal edges or copper busbars. A microscopic pinhole ruins electrical insulation and causes immediate electrocution.',
        hi: 'रबर नुकीली धातु या तांबे के किनारों से तुरंत कट सकता है। एक छोटा सा छेद भी इंसुलेशन खत्म करके जानलेवा झटका दे सकता है।',
        bn: 'প্যানেলের ধারালো ধাতব কোণায় লেগে রবার সহজেই ফুটো হয়ে যেতে পারে। একটি অদৃশ্য ছিদ্রও ইনসুলেশন অকেজো করে প্রাণঘাতী শকের কারণ হয়।'
      }
    },
    {
      id: 'mcq-ch15-l09-03',
      question: {
        en: 'Under OSHA 1910.137 regulations, what is the mandatory laboratory dielectric re-testing frequency for electrical insulating rubber gloves in active regular service?',
        hi: 'OSHA 1910.137 नियमों के तहत, नियमित उपयोग में आने वाले रबर इंसुलेटिंग दस्तानों का प्रयोगशाला में हाई-वोल्टेज री-टेस्ट कितने समय में अनिवार्य है?',
        bn: 'OSHA 1910.137 আইন অনুসারে, নিয়মিত ব্যবহৃত ইনসুলেটিং রবার গ্লাভস প্রতি কতদিন অন্তর পরীক্ষাগারে হাই-ভোল্টেজ রি-টেস্ট করানো বাধ্যতামূলক?'
      },
      options: [
        { id: 'opt-1', text: { en: 'At least once every 6 months (or 12 months if unopened in original hermetic packaging)', hi: 'कम से कम हर 6 महीने में एक बार (या मूल सीलबंद पैकेज में होने पर 12 महीने में)', bn: 'কমপক্ষে প্রতি ৬ মাস অন্তর একবার (অথবা সিলগালা প্যাকেটে অব্যবহৃত থাকলে ১২ মাস অন্তর)' } },
        { id: 'opt-2', text: { en: 'Once every 10 years', hi: 'हर 10 साल में एक बार', bn: 'প্রতি ১০ বছরে একবার' } },
        { id: 'opt-3', text: { en: 'Only when the glove physically tears in half', hi: 'केवल तब जब दस्ताना बीच से फट जाए', bn: 'কেবলমাত্র গ্লাভস ছিঁড়ে দুই টুকরো হয়ে গেলে' } },
        { id: 'opt-4', text: { en: 'Never; factory tests last permanently forever', hi: 'कभी नहीं; फैक्ट्री टेस्ट जीवनभर चलता है', bn: 'কখনোই নয়; কারখানার টেস্ট আজীবন স্থায়ী হয়' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'OSHA 1910.137 and ASTM F496 mandate dielectric proof re-testing in an accredited laboratory every 6 months for gloves in service to detect invisible ozone cracking or dielectric degradation.',
        hi: 'हर 6 महीने में दस्तानों का लैब टेस्ट अनिवार्य है ताकि अदृश्य दरारों या ओजोन क्षरण की जांच की जा सके।',
        bn: 'OSHA 1910.137 অনুসারে নিয়মিত ব্যবহৃত গ্লাভস প্রতি ৬ মাসে অনুমোদিত ল্যাবে উচ্চ ভোল্টেজ পরীক্ষা করানো বাধ্যতামূলক।'
      }
    },
    {
      id: 'mcq-ch15-l09-04',
      question: {
        en: 'What is the daily field check that every technician MUST execute on insulating rubber gloves prior to starting any electrical shift?',
        hi: 'हर शिफ्ट शुरू करने से पहले प्रत्येक तकनीशियन द्वारा इंसुलेटिंग रबर दस्तानों पर कौन सा दैनिक फील्ड परीक्षण करना अनिवार्य है?',
        bn: 'প্রতিটি শিফট শুরুর পূর্বে ইনসুলেটিং রবার গ্লাভসের উপর বিদ্যুৎকর্মীর কোন দৈনিক মাঠ-পরীক্ষাটি করা বাধ্যতামূলক?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Manual air inflation test: rolling the cuff tightly to trap air and listening/feeling for micro-punctures and leaks', hi: 'दैनिक एयर टेस्ट: कफ को कसकर रोल करके हवा फंसाना और रिसाव/छिद्रों को सुनना व महसूस करना', bn: 'ম্যানুয়াল এয়ার ইনফ্লেশন টেস্ট: কফ পেঁচিয়ে ভেতরে বাতাস আটকে কোনো সূক্ষ্ম ফুটো বা বাতাসের হিসহিস শব্দ আছে কি না তা পরীক্ষা করা' } },
        { id: 'opt-2', text: { en: 'Soaking the gloves in motor oil for 2 hours', hi: 'दस्तानों को 2 घंटे तक इंजन ऑयल में डुबोना', bn: 'গ্লাভসকে ২ ঘণ্টা ইঞ্জিন অয়েলে ভিজিয়ে রাখা' } },
        { id: 'opt-3', text: { en: 'Touching a 230 V live wire with bare hands first to test sensitivity', hi: 'पहले नंगे हाथों से 230 V तार छूकर देखना', bn: 'খালি হাতে ২৩০ ভোল্টের তার স্পর্শ করে সংবেদনশীলতা দেখা' } },
        { id: 'opt-4', text: { en: 'Stretching the glove with pliers until it snaps', hi: 'दस्ताने को प्लायर से खींचकर देखना', bn: 'প্লায়ার দিয়ে টেনে লম্বা করা' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'The manual air test (trapping pressurized air inside the glove by rolling the cuff) expands the rubber, revealing micro-pinholes that are otherwise invisible to the naked eye.',
        hi: 'एयर टेस्ट में कफ को मोड़कर अंदर हवा भरी जाती है, जिससे रबर फैलने पर सूक्ष्म छिद्र तुरंत पकड़ में आ जाते हैं।',
        bn: 'ম্যানুয়াল এয়ার টেস্টে বাতাস আটকে চাপ দিলে রবার সামান্য প্রসারিত হয়, ফলে খালি চোখে দেখা যায় না এমন অতিক্ষুদ্র ছিদ্রও শব্দ বা অনুভূতির মাধ্যমে ধরা পড়ে।'
      }
    },
    {
      id: 'mcq-ch15-l09-05',
      question: {
        en: 'What is the minimum Arc Thermal Performance Value (ATPV) required for Category 4 Arc Flash PPE under NFPA 70E?',
        hi: 'NFPA 70E के तहत श्रेणी 4 आर्क फ्लैश PPE के लिए आवश्यक न्यूनतम आर्क थर्मल परफॉर्मेंस वैल्यू (ATPV) क्या है?',
        bn: 'NFPA 70E মানদণ্ডে ক্যাটাগরি ৪ আর্ক ফ্ল্যাশ পিপিই-এর জন্য ন্যূনতম প্রয়োজনীয় ATPV রেটিং কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '40 cal/cm²', hi: '40 cal/cm²', bn: '৪০ cal/cm²' } },
        { id: 'opt-2', text: { en: '4 cal/cm²', hi: '4 cal/cm²', bn: '৪ cal/cm²' } },
        { id: 'opt-3', text: { en: '8 cal/cm²', hi: '8 cal/cm²', bn: '৮ cal/cm²' } },
        { id: 'opt-4', text: { en: '100 cal/cm²', hi: '100 cal/cm²', bn: '১০০ cal/cm²' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'NFPA 70E Table 130.7(C)(15) specifies Category 4 PPE requires an arc rating of at least 40 cal/cm² (multi-layer flash suit, hood with fresh air supply, heavy-duty gloves).',
        hi: 'NFPA 70E के अनुसार श्रेणी 4 के लिए न्यूनतम रेटिंग 40 cal/cm² होना अनिवार्य है।',
        bn: 'NFPA 70E তালিকা ১৩০.৭(C)(১৫) মতে ক্যাটাগরি ৪ পিপিই-এর জন্য ন্যূনতম ৪০ cal/cm² রেটিং সম্পন্ন বহুস্তরীয় স্যুট ও পূর্ণাঙ্গ হুড আবশ্যক।'
      }
    },
    {
      id: 'mcq-ch15-l09-06',
      question: {
        en: 'Why is wearing clothing made of synthetic materials such as polyester, nylon, rayon, or acetate strictly prohibited under arc flash safety standards?',
        hi: 'आर्क फ्लैश सुरक्षा मानकों के तहत पॉलिएस्टर, नायलॉन या रेयान जैसे सिंथेटिक कपड़ों को पहनना सख्त वर्जित क्यों है?',
        bn: 'আর্ক ফ্ল্যাশ সুরক্ষা মানদণ্ড অনুসারে পলিয়েস্টার, নাইলন বা রেয়নের মতো কৃত্রিম তন্তুর পোশাক পরিধান সম্পূর্ণ নিষিদ্ধ কেন?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Synthetics melt at low temperatures into boiling liquid plastic that adheres tightly to skin, causing catastrophic, irreversible full-thickness burns', hi: 'सिंथेटिक कपड़े कम तापमान पर पिघलकर उबलता हुआ प्लास्टिक बन जाते हैं जो त्वचा से चिपककर गहरे जानलेवा घाव पैदा करता है', bn: 'সিন্থেটিক কাপড় স্বল্প তাপে গলে গিয়ে ফুটন্ত তরল প্লাস্টিকে পরিণত হয় এবং ত্বকের সাথে আঁকড়ে ধরে মারাত্মক তৃতীয় মাত্রার দহন সৃষ্টি করে' } },
        { id: 'opt-2', text: { en: 'Synthetics are too heavy to wear', hi: 'सिंथेटिक कपड़े बहुत भारी होते हैं', bn: 'সিন্থেটিক কাপড় খুব ভারী' } },
        { id: 'opt-3', text: { en: 'Synthetics cause radio interference with switchboards', hi: 'सिंथेटिक कपड़े स्विचबोर्ड के साथ रेडियो व्यवधान पैदा करते हैं', bn: 'সিন্থেটিক কাপড় সুইচবোর্ডে রেডিও ইন্টারফেয়ারেন্স ঘটায়' } },
        { id: 'opt-4', text: { en: 'Synthetics absorb magnetic flux lines', hi: 'सिंथेटिक कपड़े चुंबकीय फ्लक्स को सोख लेते हैं', bn: 'সিন্থেটিক তন্তু চৌম্বক ফ্লাক্স শোষণ করে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'NFPA 70E explicitly prohibits meltable fabrics. While 100% untreated cotton may scorch, synthetics melt into searing liquid plastic that fuses directly with epidermal and dermal tissues.',
        hi: 'सिंथेटिक कपड़े आग में पिघलकर प्लास्टिक बन जाते हैं और त्वचा में समा जाते हैं। अतः केवल गैर-पिघलने वाले आर्क-रेटेड कपड़े ही अनुमत हैं।',
        bn: 'সিন্থেটিক কাপড় উত্তাপে গলে সরাসরি ত্বকের কোষকলায় মিশে যায় যা চিকিৎসকদের পক্ষে কেটে অপসারণ করাও অসম্ভব হয়ে পড়ে। তাই এটি কঠোরভাবে নিষিদ্ধ।'
      }
    },
    {
      id: 'mcq-ch15-l09-07',
      question: {
        en: 'Which ANSI Z89.1 electrical class of industrial hard hat is certified to protect personnel from high-voltage electrical contact up to 20,000 Volts phase-to-ground?',
        hi: 'औद्योगिक हेलमेट का कौन सा ANSI Z89.1 क्लास 20,000 वोल्ट तक के हाई-वोल्टेज संपर्क से सुरक्षा के लिए प्रमाणित है?',
        bn: 'শিল্প সেফটি হেলমেটের কোন ANSI Z89.1 শ্রেণিটি ২০,০০০ ভোল্ট পর্যন্ত উচ্চ ভোল্টেজ স্পর্শ থেকে মাথাকে সুরক্ষার জন্য প্রত্যয়িত?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Class E (Electrical) - tested to withstand 20,000 V AC', hi: 'क्लास E (Electrical) - 20,000 V AC सहने के लिए परीक्षित', bn: 'ক্লাস E (Electrical) - ২০,০০০ V AC প্রতিরোধে পরীক্ষিত' } },
        { id: 'opt-2', text: { en: 'Class C (Conductive) - zero electrical rating', hi: 'क्लास C (चालक) - शून्य विद्युत सुरक्षा', bn: 'ক্লাস C (Conductive) - কোনো বৈদ্যুতিক সুরক্ষা নেই' } },
        { id: 'opt-3', text: { en: 'Class G (General) - limited to 2,200 V', hi: 'क्लास G (सामान्य) - 2,200 V तक सीमित', bn: 'ক্লাস G (General) - ২,২০০ V পর্যন্ত সীমাবদ্ধ' } },
        { id: 'opt-4', text: { en: 'Class A (Automotive) - tested to 12 V', hi: 'क्लास A - 12 V पर परीक्षित', bn: 'ক্লাস A - ১২ V এ পরীক্ষিত' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Under ANSI Z89.1, Class E hard hats undergo dielectric testing at 20,000 V AC (with leakage < 9 mA). Class G is only tested to 2,200 V, and Class C provides zero dielectric protection.',
        hi: 'क्लास E (Electrical) हेलमेट का 20,000 V पर परीक्षण किया जाता है। क्लास G केवल 2,200 V के लिए है और क्लास C कोई सुरक्षा नहीं देता।',
        bn: 'ANSI Z89.1 অনুসারে ক্লাস E হেলমেট ২০,০০০ V AC তে ডাইইলেক্ট্রিক টেস্টে উত্তীর্ণ হয়। ক্লাস G কেবল ২,২০০ ভোল্টের জন্য এবং ক্লাস C পরিবাহী।'
      }
    },
    {
      id: 'mcq-ch15-l09-08',
      question: {
        en: 'Under ASTM F2413 specifications, what electrical hazard rating (EH) performance is certified for electrical safety footwear?',
        hi: 'ASTM F2413 विनिर्देशों के तहत, इलेक्ट्रिकल हैजर्ड (EH) सेफ्टी जूतों के लिए क्या प्रदर्शन प्रमाणित किया गया है?',
        bn: 'ASTM F2413 মানদণ্ড অনুসারে, ইলেকট্রিক্যাল হ্যাজার্ড (EH) সেফটি জুতোর জন্য কোন প্রযুক্তিগত সুরক্ষা প্রত্যয়িত থাকে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Soles withstand 18,000 V AC at 60 Hz for 1 minute in dry conditions with leakage current under 1.0 mA', hi: 'सूखी स्थिति में तलवे 1 मिनट तक 18,000 V AC सहन करते हैं और लीकेज करंट 1.0 mA से कम रहता है', bn: 'শুষ্ক অবস্থায় সোলে ১৮,০০০ V AC ৬০ হার্টজে ১ মিনিট ধরে ১.০ মিলিঅ্যাম্পিয়ারের কম লিকেজ কারেন্টে সহনশীল থাকে' } },
        { id: 'opt-2', text: { en: 'Boots can be safely submerged in water at 100,000 V indefinitely', hi: 'जूते 100,000 V पर पानी में डुबोए जा सकते हैं', bn: 'জুতো এক লক্ষ ভোল্টে পানিতে ডুবিয়ে রাখা যায়' } },
        { id: 'opt-3', text: { en: 'Soles contain copper wires to attract lightning strikes', hi: 'तलवों में बिजली खींचने के लिए तांबे के तार होते हैं', bn: 'সোলের ভেতর তামার তার থাকে যা বজ্রপাত আকর্ষণ করে' } },
        { id: 'opt-4', text: { en: 'Shoes are only rated for static electricity up to 5 Volts', hi: 'जूते केवल 5 वोल्ट की स्थैतिक बिजली के लिए हैं', bn: 'জুতো কেবল ৫ ভোল্ট স্ট্যাটিক বিদ্যুতের জন্য' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'ASTM F2413 EH footwear features non-conductive, shock-resistant soles and heels tested to withstand 18,000 V AC at 60 Hz for 1 minute with a leakage current not exceeding 1.0 mA.',
        hi: 'EH जूते 18,000 V AC पर 1 मिनट तक टेस्ट किए जाते हैं और लीकेज करंट 1.0 mA से कम होना चाहिए।',
        bn: 'ASTM F2413 EH জুতো ১৮,০০০ ভোল্ট এসি ৬০ হার্টজে ১ মিনিট ডাইইলেক্ট্রিক পরীক্ষায় লিকেজ কারেন্ট ১ মিলিঅ্যাম্পিয়ারের নিচে বজায় রেখে উত্তীর্ণ হয়।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch15-l09-01',
      question: {
        en: 'Explain why leather protector gloves are mandatory over rubber insulating gloves and why the cuff clearance gap is critical.',
        hi: 'बताइए कि रबर के दस्तानों के ऊपर चमड़े के रक्षक दस्ताने क्यों अनिवार्य हैं और कफ का गैप क्यों महत्वपूर्ण है।',
        bn: 'রবার ইনসুলেটিং গ্লাভসের উপর লেদার প্রোটেক্টর পরা কেন বাধ্যতামূলক এবং কফের ক্লিয়ারেন্স গ্যাপের গুরুত্ব কী?'
      },
      hint: {
        en: 'Leather protects the delicate rubber from punctures and tears. The clearance gap prevents current from flashing over along the conductive leather surface onto the skin.',
        hi: 'चमड़ा रबर को फटने से बचाता है। कफ का अंतर करंट को चमड़े के ऊपर से कूदकर हाथ तक पहुँचने से रोकता है।',
        bn: 'চামড়া রবারকে ফুটো হওয়া থেকে বাঁচায়। ক্লিয়ারেন্স গ্যাপ বিদ্যুৎকে চামড়ার উপর দিয়ে লাফিয়ে সরাসরি হাতে পৌঁছাতে বাধা দেয়।'
      }
    },
    {
      id: 'pq-ch15-l09-02',
      question: {
        en: 'Describe the 4 NFPA 70E Arc Flash PPE categories and state what must be done if calculated incident energy exceeds 40 cal/cm².',
        hi: 'NFPA 70E की 4 आर्क फ्लैश श्रेणियों का वर्णन करें और बताएं कि यदि ऊर्जा 40 cal/cm² से अधिक हो तो क्या किया जाना चाहिए।',
        bn: 'NFPA 70E এর ৪টি আর্ক ফ্ল্যাশ ক্যাটাগরি বর্ণনা করুন এবং হিসাবকৃত বিকিরিত শক্তি ৪০ cal/cm² অতিক্রম করলে কী করণীয় তা লিখুন।'
      },
      hint: {
        en: 'Cat 1 (4 cal), Cat 2 (8 cal), Cat 3 (25 cal), Cat 4 (40 cal). If > 40 cal/cm², energized work is strictly forbidden due to fatal blast pressure; system must be shut down.',
        hi: 'कैट 1 (4 cal), कैट 2 (8 cal), कैट 3 (25 cal), कैट 4 (40 cal)। 40 cal से अधिक होने पर काम वर्जित है; केवल शटडाउन संभव है।',
        bn: 'ক্যাট ১ (৪ cal), ক্যাট ২ (৮ cal), ক্যাট ৩ (২৫ cal), ক্যাট ৪ (৪০ cal)। ৪০ cal এর বেশি হলে কাজ করা সম্পূর্ণ নিষিদ্ধ; লাইন শাটডাউন করতে হবে।'
      }
    }
  ]
};
