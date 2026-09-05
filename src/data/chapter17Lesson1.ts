import { Lesson } from '../types';

export const LESSON_PROTECTION_ZONES: Lesson = {
  id: 'lsn-ch17-protection-zones-overlap',
  topicId: 'tp-ch17-protection-zones-overlap',
  chapterId: 'ch-advanced-power-system-protection',
  order: 1,
  title: {
    en: 'Fundamentals of Power System Protection & Protection Zones',
    hi: 'विद्युत शक्ति प्रणाली सुरक्षा के मूल सिद्धांत एवं सुरक्षा ज़ोन',
    bn: 'পাওয়ার সিস্টেম সুরক্ষা ও সুরক্ষা জোনের মূলনীতি'
  },
  description: {
    en: 'Core engineering philosophy of power system protection: the five key attributes (reliability, selectivity, speed, sensitivity, simplicity), primary vs. backup protection schemes, and the engineering of overlapping protection zones to eliminate blind spots.',
    hi: 'विद्युत प्रणाली सुरक्षा का मुख्य इंजीनियरिंग दर्शन: पांच प्रमुख गुण (विश्वसनीयता, चयनात्मकता, गति, संवेदनशीलता, सरलता), प्राथमिक बनाम बैकअप सुरक्षा प्रणालियाँ, और ब्लाइंड स्पॉट समाप्त करने के लिए ओवरलैपिंग सुरक्षा ज़ोन की इंजीनियरिंग।',
    bn: 'পাওয়ার সিস্টেম সুরক্ষার মূল ইঞ্জিনিয়ারিং দর্শন: পাঁচটি মূল বৈশিষ্ট্য (নির্ভরযোগ্যতা, সিলেক্টিভিটি, গতি, সংবেদনশীলতা, সরলতা), প্রাইমারি বনাম ব্যাকআপ সুরক্ষা স্কিম এবং ব্লাইন্ড স্পট দূর করতে ওভারল্যাপিং সুরক্ষা জোনের ইঞ্জিনিয়ারিং।'
  },
  estimatedMinutes: 45,
  easyExplanation: {
    en: 'Electrical power systems are vulnerable to catastrophic short circuits, insulation breakdowns, lightning surges, and mechanical equipment failures. Protective relays and circuit breakers act as the automatic nervous system and muscles of the electrical grid. When a short circuit occurs, the protection scheme must instantly detect the abnormal current, determine exactly which piece of apparatus has failed, and isolate ONLY that faulty component while leaving the rest of the interconnected network energized and stable. To guarantee that no point in a substation or transmission grid is left unprotected, the power system is partitioned into defined "zones of protection" (generators, transformers, busbars, and lines) that deliberately overlap each other around every circuit breaker.',
    hi: 'विद्युत प्रणालियों में शॉर्ट सर्किट, इन्सुलेशन विफलता और बिजली गिरने जैसी गंभीर समस्याएं हो सकती हैं। प्रोटेक्टिव रिले और सर्किट ब्रेकर ग्रिड के तंत्रिका तंत्र और मांसपेशियों की तरह काम करते हैं। जब कोई खराबी आती है, तो सुरक्षा प्रणाली को तुरंत असामान्य धारा का पता लगाना चाहिए, यह पहचानना चाहिए कि कौन सा उपकरण खराब हुआ है, और केवल उसी खराब हिस्से को अलग करना चाहिए ताकि बाकी ग्रिड सुरक्षित रूप से चालू रहे। यह सुनिश्चित करने के लिए कि ग्रिड का कोई भी हिस्सा असुरक्षित न रहे, पूरे सिस्टम को "सुरक्षा ज़ोन" में विभाजित किया जाता है जो सर्किट ब्रेकर के चारों ओर एक-दूसरे पर ओवरलैप करते हैं।',
    bn: 'বৈদ্যুতিক পাওয়ার সিস্টেমে শর্ট সার্কিট, ইনসুলেশন ব্রেকডাউন বা বজ্রপাতের ফলে চরম ক্ষয়ক্ষতি হতে পারে। প্রোটেক্টিভ রিলে ও সার্কিট ব্রেকার গ্রিডের স্বয়ংক্রিয় স্নায়ুতন্ত্র ও পেশীর মতো কাজ করে। ফল্ট দেখা দিলে সুরক্ষা ব্যবস্থার কাজ হলো ত্রুটিপূর্ণ অংশটি দ্রুত শনাক্ত করা এবং কেবল সেই নির্দিষ্ট অংশটিকে বিচ্ছিন্ন করে গ্রিডের বাকি অংশের স্থিতিশীলতা রক্ষা করা। কোনো অংশ যেন সুরক্ষাহীন না থাকে সেজন্য পাওয়ার সিস্টেমকে কয়েকটি "সুরক্ষা জোনে" ভাগ করা হয় যা সার্কিট ব্রেকারের চারপাশে পরস্পরের ওপর ওভারল্যাপ করে।'
  },
  detailedExplanation: {
    en: 'Power system protection engineering is governed by five fundamental design criteria known as the "5S" qualities:\n\n1. Reliability: Subdivided into Dependability (certainty of tripping when a fault occurs within the designated zone) and Security (certainty of NOT tripping for external faults or normal switching transients).\n2. Selectivity (Discrimination): The capability to isolate only the faulted section of the network with the minimum number of circuit breaker operations, preserving maximum supply continuity to healthy loads.\n3. Speed: Fault clearance within cycle-times (typically 2 to 4 cycles, 40 to 80 ms in EHV/UHV systems) to prevent machine rotor instability, catastrophic transformer explosion, and conductor annealing.\n4. Sensitivity: Ability to detect low-magnitude internal faults (e.g., high-resistance ground faults or stator ground faults near the neutral point) without spurious tripping on full-load current.\n5. Simplicity & Economics: Providing maximum protection with minimal hardware and maintenance overhead.\n\nPrimary vs. Backup Protection:\n• Primary (Unit) Protection: First line of defense, high-speed, clearing faults strictly within its defined boundary without intentional time delay (e.g., differential relay 87, distance Zone 1).\n• Backup Protection: Acts as a safeguard if the primary relay, trip coil, or circuit breaker fails. Categorized into:\n  - Local Backup: Located in the same substation, using independent DC trip coils, breaker failure relays (50BF), or secondary relay cores.\n  - Remote Backup: Located at an adjacent upstream substation (e.g., overcurrent IDMT or distance Zone 2/3), operating with intentional time-delay grading (0.3 to 0.5 s).\n\nOverlapping Protection Zones and CT Placement:\nEvery major electrical apparatus—generators, transformers, busbars, transmission lines, and capacitor banks—forms an independent protective zone. The physical boundaries of each zone are determined by the location of Current Transformers (CTs). To ensure zero "blind spots", the CTs associated with adjacent zones are physically situated on opposite sides of each circuit breaker. If a fault occurs directly on the circuit breaker itself, both overlapping zones detect the fault and trip both surrounding breakers, safely extinguishing the short circuit.',
    hi: 'सुरक्षा प्रणाली इंजीनियरिंग पांच प्रमुख सिद्धांतों पर आधारित है: विश्वसनीयता (डिपेंडेबिलिटी और सिक्योरिटी), चयनात्मकता (केवल खराब हिस्से को अलग करना), गति (अति-उच्च गति पर फॉल्ट अलग करना), संवेदनशीलता (छोटे फॉल्ट धाराओं को पहचानना), और सरलता।\n\nप्राथमिक बनाम बैकअप सुरक्षा:\n• प्राथमिक सुरक्षा: बिना किसी समय देरी के अपने ज़ोन के भीतर के फॉल्ट को तुरंत ट्रिप करती है।\n• बैकअप सुरक्षा: प्राथमिक रिले या ब्रेकर के विफल होने पर काम करती है। यह स्थानीय (50BF रिले) या दूरस्थ (अपस्ट्रीम IDMT टाइम-ग्रेडेड) हो सकती है।\n\nओवरलैपिंग सुरक्षा ज़ोन और CT की स्थिति:\nप्रत्येक प्रमुख उपकरण (जनरेटर, ट्रांसफार्मर, बसबार, लाइन) का अपना सुरक्षा ज़ोन होता है जिसकी सीमाएं करंट ट्रांसफार्मर (CT) की स्थिति से तय होती हैं। किसी भी ब्लाइंड स्पॉट को खत्म करने के लिए, निकटवर्ती ज़ोन के CT सर्किट ब्रेकर के दोनों किनारों पर लगाए जाते हैं।',
    bn: 'পাওয়ার সিস্টেম সুরক্ষা পাঁচটি মৌলিক নীতির ওপর প্রতিষ্ঠিত: নির্ভরযোগ্যতা, সিলেক্টিভিটি, গতি, সংবেদনশীলতা ও সরলতা।\n\nপ্রাইমারি বনাম ব্যাকআপ সুরক্ষা:\n• প্রাইমারি সুরক্ষা: কোনো বিলম্ব ছাড়াই নির্ধারিত জোনের মধ্যকার ফল্ট তাৎক্ষণিকভাবে ক্লিয়ার করে।\n• ব্যাকআপ সুরক্ষা: প্রাইমারি রিলে বা ব্রেকার ব্যর্থ হলে নির্দিষ্ট সময় পর কাজ করে।\n\nওভারল্যাপিং সুরক্ষা জোন ও CT প্লেসমেন্ট:\nপাওয়ার সিস্টেমের প্রতিটি উপাদান (জেনারেটর, ট্রান্সফরমার, বাসবার, লাইন) একেকটি স্বতন্ত্র সুরক্ষাবলয় বা জোন গঠন করে। কারেন্ট ট্রান্সফরমার (CT)-এর অবস্থান জোনের সীমানা নির্ধারণ করে। ব্লাইন্ড স্পট রোধ করতে প্রতিটি সার্কিট ব্রেকারের উভয় পাশে CT স্থাপন করে জোন দুটিকে ওভারল্যাপ করানো হয়।'
  },
  formulas: [
    {
      id: 'f-ch17-dependability',
      symbol: 'D',
      expression: 'D = \\frac{N_{correct\\_trips}}{N_{internal\\_faults}} \\times 100\\%',
      title: {
        en: 'Protection Dependability Metric',
        hi: 'सुरक्षा डिपेंडेबिलिटी मीट्रिक',
        bn: 'সুরক্ষা ডিপেন্ডেবিলিটি পরিমাপক'
      },
      description: {
        en: 'Quantifies the probability that a protection relay will operate correctly whenever an internal fault occurs within its zone.',
        hi: 'यह संभावना मापता है कि जब उसके ज़ोन के भीतर कोई आंतरिक फॉल्ट हो तो सुरक्षा रिले सही ढंग से संचालित होगा।',
        bn: 'নির্ধারিত জোনে অভ্যন্তরীণ ফল্ট হলে রিলেটি সঠিকভাবে কাজ করার সম্ভাবনা পরিমাপ করে।'
      },
      variables: [
        { symbol: 'D', name: { en: 'Dependability percentage (%)', hi: 'डिपेंडेबिलिटी प्रतिशत (%)', bn: 'ডিপেন্ডেবিলিটি শতকরা (%)' } },
        { symbol: 'N_{correct_trips}', name: { en: 'Number of correct primary trip operations', hi: 'सही प्राथमिक ट्रिप ऑपरेशनों की संख्या', bn: 'সঠিক প্রাইমারি ট্রিপ অপারেশনের সংখ্যা' } },
        { symbol: 'N_{internal_faults}', name: { en: 'Total internal in-zone fault events', hi: 'कुल आंतरिक इन-ज़ोन फॉल्ट घटनाएं', bn: 'মোট অভ্যন্তরীণ ইন-জোন ফল্ট ঘটনা' } }
      ]
    },
    {
      id: 'f-ch17-security',
      symbol: 'S',
      expression: 'S = \\frac{N_{correct\\_restraints}}{N_{external\\_events}} \\times 100\\%',
      title: {
        en: 'Protection Security Metric',
        hi: 'सुरक्षा सिक्योरिटी मीट्रिक',
        bn: 'সুরক্ষা সিকিউরিটি পরিমাপক'
      },
      description: {
        en: 'Quantifies the probability that a protective relay will remain stable and restrain from false tripping during out-of-zone faults and normal transients.',
        hi: 'यह संभावना मापता है कि बाहरी फॉल्ट या सामान्य क्षणिक स्थितियों के दौरान सुरक्षा रिले गलत ट्रिपिंग से बचते हुए स्थिर रहेगा।',
        bn: 'বহিঃস্থ ফল্ট বা স্বাভাবিক ট্রানজিয়েন্টের সময় রিলে অযাচিত ট্রিপ না করে স্থিতিশীল থাকার সম্ভাবনা পরিমাপ করে।'
      },
      variables: [
        { symbol: 'S', name: { en: 'Security percentage (%)', hi: 'सिक्योरिटी प्रतिशत (%)', bn: 'সিকিউরিটি শতকরা (%)' } },
        { symbol: 'N_{correct_restraints}', name: { en: 'Correct restrain (non-trip) events', hi: 'सही संयम (नॉन-ट्रिप) घटनाएं', bn: 'সঠিক নন-ট্রিপ ঘটনার সংখ্যা' } },
        { symbol: 'N_{external_events}', name: { en: 'Total through-fault or transient events', hi: 'कुल थ्रू-फॉल्ट या क्षणिक घटनाएं', bn: 'মোট থ্রু-ফল্ট বা ট্রানজিয়েন্ট ঘটনা' } }
      ]
    }
  ],
  keyPoints: [
    {
      en: 'Dependability measures the certainty to trip for in-zone faults; Security measures certainty NOT to trip for out-of-zone faults.',
      hi: 'डिपेंडेबिलिटी इन-ज़ोन फॉल्ट के लिए ट्रिप करने की निश्चितता है; सिक्योरिटी आउट-ऑफ-ज़ोन फॉल्ट पर ट्रिप न करने की निश्चितता है।',
      bn: 'ডিপেন্ডেবিলিটি হলো ইন-জোন ফল্টে ট্রিপ করার নিশ্চয়তা; সিকিউরিটি হলো আউট-অব-জোন ফল্টে ট্রিপ না করার নিশ্চয়তা।'
    },
    {
      en: 'Primary protection clears faults at high speed without deliberate time delay; backup protection steps in if primary equipment fails.',
      hi: 'प्राथमिक सुरक्षा बिना किसी जानबूझकर की गई देरी के तीव्र गति से फॉल्ट साफ करती है; बैकअप सुरक्षा तब काम करती है जब प्राथमिक विफल हो।',
      bn: 'প্রাইমারি সুরক্ষা কোনো বিলম্ব ছাড়াই দ্রুত ফল্ট মুক্ত করে; ব্যাকআপ সুরক্ষা প্রাইমারি ব্যর্থ হলেই কার্যকর হয়।'
    },
    {
      en: 'Overlapping protection zones are created by placing current transformers (CTs) on both sides of each circuit breaker.',
      hi: 'प्रत्येक सर्किट ब्रेकर के दोनों किनारों पर CT लगाकर ओवरलैपिंग सुरक्षा ज़ोन बनाए जाते हैं।',
      bn: 'প্রতিটি সার্কিট ব্রেকারের উভয় পাশে সিটি (CT) স্থাপন করে ওভারল্যাপিং সুরক্ষা বলয় তৈরি করা হয়।'
    },
    {
      en: 'Breaker Failure Protection (ANSI 50BF) trips all adjacent circuit breakers if the designated breaker fails to open within 100–150 ms.',
      hi: 'यदि निर्धारित ब्रेकर 100-150 ms के भीतर खुलने में विफल रहता है तो ब्रेकर विफलता सुरक्षा (50BF) सभी निकटवर्ती ब्रेकर्स को ट्रिप करती है।',
      bn: 'নির্দিষ্ট ব্রেকার ১০০-১৫০ ms এর মধ্যে ওপেন হতে ব্যর্থ হলে ব্রেকার ফেইলিওর সুরক্ষা (50BF) সংলগ্ন সকল ব্রেকার ট্রিপ করে।'
    }
  ],
  schematics: [
    {
      id: 'sch-ch17-l01-01',
      title: {
        en: 'Substation Overlapping Zones of Protection & CT Boundaries',
        hi: 'सबस्टेशन ओवरलैपिंग सुरक्षा ज़ोन एवं CT सीमाएं',
        bn: 'সাবস্টেশন ওভারল্যাপিং সুরক্ষা জোন ও CT সীমানা'
      },
      content: {
        en: 'The schematic illustrates how the generator, step-up transformer, transmission busbar, and outgoing line zones overlap across each intervening circuit breaker. Note the CT placement on both sides of every breaker, ensuring that a fault occurring in the breaker tank or bushing trips both adjoining zones rather than escaping detection.',
        hi: 'यह आरेख दिखाता है कि कैसे जनरेटर, स्टेप-अप ट्रांसफार्मर, बसबार और लाइन ज़ोन सर्किट ब्रेकर के पार ओवरलैप करते हैं। प्रत्येक ब्रेकर के दोनों किनारों पर CT की स्थिति नोट करें।',
        bn: 'এই স্কিম্যাটিকে দেখানো হয়েছে কীভাবে জেনারেটর, ট্রান্সফরমার, বাসবার ও সঞ্চালন লাইনের সুরক্ষা জোনগুলো প্রতিটি সার্কিট ব্রেকারের ওপর ওভারল্যাপ করে ব্লাইন্ড স্পট দূর করে।'
      },
      schematicId: 'sch-ch17-protection-zones-overlap'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch17-l01-01',
      problem: {
        en: 'Over a 5-year operating period, a 400 kV transmission line protection system experienced 48 internal line faults. The primary line differential relay correctly tripped 46 times, failed to trip twice (cleared by Zone 2 backup), and false-tripped 3 times during 150 external through-fault events. Calculate the Dependability and Security indices of the primary relay.',
        hi: '5 वर्षों के दौरान, 400 kV पारेषण लाइन सुरक्षा प्रणाली ने 48 आंतरिक लाइन फॉल्ट देखे। प्राथमिक लाइन डिफरेंशियल रिले ने 46 बार सही ट्रिप किया, 2 बार विफल रहा (ज़ोन 2 बैकअप द्वारा साफ किया गया), और 150 बाहरी फॉल्ट के दौरान 3 बार गलत ट्रिप किया। प्राथमिक रिले की डिपेंडेबिलिटी और सिक्योरिटी की गणना करें।',
        bn: '৫ বছর মেয়াদে একটি ৪০০ kV ট্রান্সমিশন লাইনে ৪৮টি অভ্যন্তরীণ ফল্ট সংঘটিত হয়। প্রাইমারি ডিফারেনশিয়াল রিলে ৪৬ বার সফলভাবে ট্রিপ করে, ২ বার ব্যর্থ হয় এবং ১৫০টি বহিঃস্থ ফল্টের সময় ৩ বার অযাচিত ট্রিপ করে। রিলেটির ডিপেন্ডেবিলিটি ও সিকিউরিটি নির্ণয় করুন।'
      },
      solution: {
        en: 'Given:\n• Internal Faults N_internal = 48\n• Correct Primary Trips N_correct = 46\n• Failures to Trip = 2\n• External Through-Fault Events N_external = 150\n• False Trips = 3 (Correct Restraints = 150 - 3 = 147)\n\nStep 1: Calculate Dependability (D):\nD = (N_correct / N_internal) * 100%\nD = (46 / 48) * 100% = 95.83%\n\nStep 2: Calculate Security (S):\nS = (Correct Restraints / N_external) * 100%\nS = (147 / 150) * 100% = 98.00%',
        hi: 'दिया गया है:\n• आंतरिक फॉल्ट = 48, सही ट्रिप = 46, विफलता = 2\n• बाहरी घटनाएं = 150, गलत ट्रिप = 3, सही संयम = 147\n\nचरण 1: डिपेंडेबिलिटी (D) = (46 / 48) * 100% = 95.83%\nचरण 2: सिक्योरिटी (S) = (147 / 150) * 100% = 98.00%',
        bn: 'প্রদত্ত:\n• অভ্যন্তরীণ ফল্ট = ৪৮, সফল ট্রিপ = ৪৬, ব্যর্থতা = ২\n• বহিঃস্থ ঘটনা = ১৫০, ভুল ট্রিপ = ৩, সঠিক নন-ট্রিপ = ১৪৭\n\nধাপ ১: ডিপেন্ডেবিলিটি (D) = (৪৬ / ৪৮) * ১০০% = ৯৫.৮৩%\nধাপ ২: সিকিউরিটি (S) = (১৪৭ / ১৫০) * ১০০% = ৯৮.০০%'
      },
      givenValues: { 'N_internal': '48', 'N_trips': '46', 'N_external': '150', 'False_trips': '3' },
      finalAnswer: {
        en: 'Dependability = 95.83%, Security = 98.00%',
        hi: 'डिपेंडेबिलिटी = 95.83%, सिक्योरिटी = 98.00%',
        bn: 'ডিপেন্ডেবিলিটি = ৯৫.৮৩%, সিকিউরিটি = ৯৮.০০%'
      }
    },
    {
      id: 'ex-ch17-l01-02',
      problem: {
        en: 'A 220 kV circuit breaker has a total clearing time of 50 ms (2.5 cycles). The protective relay operating time is 20 ms. If a Breaker Failure protection (50BF) timer is set with a safety margin of 60 ms and relay reset time of 15 ms, what is the minimum 50BF timer setting required?',
        hi: 'एक 220 kV सर्किट ब्रेकर का कुल क्लियरिंग समय 50 ms है। सुरक्षा रिले ऑपरेटिंग समय 20 ms है। यदि 50BF ब्रेकर विफलता टाइमर को 60 ms के सुरक्षा मार्जिन और 15 ms के रिले रीसेट समय के साथ सेट किया जाता है, तो आवश्यक न्यूनतम 50BF टाइमर सेटिंग क्या है?',
        bn: 'একটি ২২০ kV সার্কিট ব্রেকারের মোট ক্লিয়ারিং সময় ৫০ ms। প্রোটেক্টিভ রিলের কার্যকাল ২০ ms। সেফটি মার্জিন ৬০ ms এবং রিলে রিসেট সময় ১৫ ms হলে ন্যুনতম 50BF ব্রেকার ফেইলিওর টাইমার সেটিং কত হবে?'
      },
      solution: {
        en: 'Formula for Breaker Failure Timer Setting (t_BF):\nt_BF = t_breaker_clearing + t_relay_reset + t_safety_margin\n\nGiven:\n• t_breaker_clearing = 50 ms\n• t_relay_reset = 15 ms\n• t_safety_margin = 60 ms\n\nCalculation:\nt_BF = 50 ms + 15 ms + 60 ms = 125 ms\n\nConclusion: The breaker failure relay will initiate a back-trip to all adjacent busbar breakers if current continues to flow 125 ms after the initial trip coil energization.',
        hi: 'सूत्र: t_BF = t_breaker + t_reset + t_margin\nगणना: t_BF = 50 ms + 15 ms + 60 ms = 125 ms\nनिष्कर्ष: यदि ट्रिप के 125 ms बाद भी करंट बहता रहता है, तो 50BF सभी निकटवर्ती ब्रेकर्स को ट्रिप कर देगा।',
        bn: 'সূত্র: t_BF = t_breaker + t_reset + t_margin\nগণনা: t_BF = ৫০ + ১৫ + ৬০ = ১২৫ ms\nসিদ্ধান্ত: প্রাথমিক ট্রিপ নির্দেশের ১২৫ ms পরেও কারেন্ট প্রবাহিত হতে থাকলে 50BF সংলগ্ন সকল ব্রেকার ব্যাক-ট্রিপ করবে।'
      },
      givenValues: { 't_breaker': '50 ms', 't_reset': '15 ms', 't_margin': '60 ms' },
      finalAnswer: {
        en: 'Minimum 50BF Timer Setting = 125 ms',
        hi: 'न्यूनतम 50BF टाइमर सेटिंग = 125 ms',
        bn: 'ন্যূনতম 50BF টাইমার সেটিং = ১২৫ ms'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Substation layout engineering: Configuring CT placement across GIS (Gas Insulated Switchgear) and AIS bays to guarantee zero blind spots.',
      'Breaker Failure (50BF / ANSI 50BF) scheme implementation in 400 kV and 765 kV transmission substations.',
      'Auditing power utility trip histories to calculate systemic dependability and security benchmarks.'
    ],
    hi: [
      'सबस्टेशन लेआउट इंजीनियरिंग: GIS और AIS बे में शून्य ब्लाइंड स्पॉट सुनिश्चित करने के लिए CT की स्थिति तय करना।',
      '400 kV और 765 kV सबस्टेशन में ब्रेकर विफलता (50BF) योजना का कार्यान्वयन।',
      'उपयोगिता ट्रिप इतिहास का ऑडिट करके सिस्टम की विश्वसनीयता का मूल्यांकन करना।'
    ],
    bn: [
      'সাবস্টেশন লেআউট ডিজাইন: জিআইএস (GIS) ও এআইএস বে-তে জিরো ব্লাইন্ড স্পট নিশ্চিত করতে সিটি স্থাপন।',
      '৪০০ kV ও ৭৬৫ kV সাবস্টেশনে ব্রেকার ফেইলিওর (50BF) স্কিম রূপায়ন।',
      'পাওয়ার গ্রিডের রিলে অপারেশনের ডিপেন্ডেবিলিটি ও সিকিউরিটি অডিট।'
    ]
  },
  commonMistakes: {
    en: [
      'Confusing Dependability with Security (Dependability is tripping on in-zone faults; Security is NOT tripping on out-of-zone faults).',
      'Placing CTs on only one side of a circuit breaker, creating an unprotected dead-zone between the CT and breaker contacts.',
      'Setting the Breaker Failure (50BF) timer too tight (<100 ms), causing catastrophic false trips before the circuit breaker can extinguish its arc.'
    ],
    hi: [
      'डिपेंडेबिलिटी और सिक्योरिटी में भ्रमित होना।',
      'सर्किट ब्रेकर के केवल एक तरफ CT लगाना, जिससे ब्रेकर और CT के बीच असुरक्षित डेड-ज़ोन बन जाता है।',
      '50BF टाइमर को बहुत कम (<100 ms) सेट करना, जिससे ब्रेकर के सामान्य रूप से खुलने से पहले ही बैकअप ट्रिप हो जाता है।'
    ],
    bn: [
      'ডিপেন্ডেবিলিটি এবং সিকিউরিটির পার্থক্য গুলিয়ে ফেলা।',
      'সার্কিট ব্রেকারের কেবল একপাশে সিটি স্থাপন করা, যার ফলে একটি অনিরাপদ ডেড-জোন সৃষ্টি হয়।',
      '50BF টাইমার খুব কম সময়ে (<১০০ ms) সেট করা, যার ফলে স্বাভাবিক আর্ক নির্বাপণের আগেই অযাচিত ট্রিপ ঘটে।'
    ]
  },
  keyTakeaways: {
    en: [
      'The 5S qualities (Reliability, Selectivity, Speed, Sensitivity, Simplicity) define the performance benchmark of every protection scheme.',
      'Overlapping protection zones formed by bilateral CT placement eliminate all blind spots across substations.',
      'Unit schemes provide instantaneous primary protection; time-graded schemes provide essential backup protection.'
    ],
    hi: [
      '5S गुण (विश्वसनीयता, चयनात्मकता, गति, संवेदनशीलता, सरलता) सुरक्षा प्रणाली का आधार हैं।',
      'सर्किट ब्रेकर के दोनों ओर CT लगाकर बनाए गए ओवरलैपिंग ज़ोन सबस्टेशन के ब्लाइंड स्पॉट्स को समाप्त करते हैं।',
      'यूनिट स्कीमें त्वरित प्राथमिक सुरक्षा प्रदान करती हैं; समय-ग्रेडेड स्कीमें आवश्यक बैकअप देती हैं।'
    ],
    bn: [
      '5S বৈশিষ্ট্য (নির্ভরযোগ্যতা, সিলেক্টিভিটি, গতি, সংবেদনশীলতা, সরলতা) প্রতিটি সুরক্ষা ব্যবস্থার মানদণ্ড।',
      'ব্রেকারের উভয় পাশে সিটি বসিয়ে গঠিত ওভারল্যাপিং জোন কোনো ব্লাইন্ড স্পট অবশিষ্ট রাখে না।',
      'ইউনিট স্কিম তাৎক্ষণিক প্রাইমারি সুরক্ষা দেয় এবং টাইম-গ্রেডেড স্কিম ব্যাকআপ সুরক্ষা নিশ্চিত করে।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch17-l01-01',
      question: {
        en: 'Which protection quality represents the certainty that a relay will NOT operate for out-of-zone faults or normal system transients?',
        hi: 'कौन सा सुरक्षा गुण यह सुनिश्चित करता है कि रिले अपने ज़ोन से बाहर के फॉल्ट या सामान्य क्षणिक स्थितियों के लिए संचालित नहीं होगा?',
        bn: 'কোন সুরক্ষা গুণটি নির্দেশ করে যে রিলেটি জোনের বাইরের ফল্ট বা স্বাভাবিক ট্রানজিয়েন্টে কাজ করবে না?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Security', hi: 'सिक्योरिटी (Security)', bn: 'সিকিউরিটি (Security)' } },
        { id: 'opt-2', text: { en: 'Dependability', hi: 'डिपेंडेबिलिटी (Dependability)', bn: 'ডিপেন্ডেবিলিটি (Dependability)' } },
        { id: 'opt-3', text: { en: 'Sensitivity', hi: 'संवेदनशीलता (Sensitivity)', bn: 'সংবেদনশীলতা (Sensitivity)' } },
        { id: 'opt-4', text: { en: 'Speed', hi: 'गति (Speed)', bn: 'গতি (Speed)' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Security is the aspect of reliability that expresses the certainty that a protection system will not operate falsely for external faults or normal disturbances.',
        hi: 'सिक्योरिटी विश्वसनीयता का वह पहलू है जो यह सुनिश्चित करता है कि रिले बाहरी फॉल्ट के दौरान गलत तरीके से ट्रिप नहीं करेगा।',
        bn: 'সিকিউরিটি হলো নির্ভরযোগ্যতার এমন একটি দিক যা নিশ্চিত করে যে বাহ্যিক ফল্টে রিলে ভুলবশত ট্রিপ করবে না।'
      }
    },
    {
      id: 'mcq-ch17-l01-02',
      question: {
        en: 'How are protection zones arranged around circuit breakers to ensure that no electrical apparatus is left without protection?',
        hi: 'सर्किट ब्रेकर के चारों ओर सुरक्षा ज़ोन को कैसे व्यवस्थित किया जाता है ताकि कोई भी उपकरण बिना सुरक्षा के न छूटे?',
        bn: 'কোনো বৈদ্যুতিক যন্ত্র যেন সুরক্ষাহীন না থাকে সেজন্য সার্কিট ব্রেকারের চারপাশে সুরক্ষা জোন কীভাবে বিন্যস্ত করা হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Zones are designed to overlap across the circuit breaker', hi: 'ज़ोन सर्किट ब्रेकर के आर-पार ओवरलैप करने के लिए डिज़ाइन किए गए हैं', bn: 'জোনগুলোকে সার্কিট ব্রেকারের চারপাশে ওভারল্যাপ করানো হয়' } },
        { id: 'opt-2', text: { en: 'Zones are separated by an intentional gap of 10 meters', hi: 'ज़ोन को 10 मीटर के जानबूझकर रखे गए अंतर से अलग किया जाता है', bn: 'জোনগুলোকে ১০ মিটারের ফাঁকা রেখে আলাদা রাখা হয়' } },
        { id: 'opt-3', text: { en: 'Zones only cover transformers and ignore transmission lines', hi: 'ज़ोन केवल ट्रांसफार्मर को कवर करते हैं और लाइनों को छोड़ देते हैं', bn: 'জোন কেবল ট্রান্সফরমার কভার করে এবং লাইন বাদ দেয়' } },
        { id: 'opt-4', text: { en: 'Adjacent zones are isolated using blocking capacitors', hi: 'आसन्न ज़ोन को ब्लॉकिंग कैपेसिटर का उपयोग करके अलग किया जाता है', bn: 'ব্লকিং ক্যাপাসিটর দিয়ে পাশাপাশি জোন বিচ্ছিন্ন করা হয়' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'By placing current transformers on both sides of a circuit breaker, adjacent protection zones overlap around the breaker, ensuring 100% protection coverage with zero blind spots.',
        hi: 'सर्किट ब्रेकर के दोनों किनारों पर करंट ट्रांसफार्मर रखकर, आसन्न ज़ोन ब्रेकर के चारों ओर ओवरलैप करते हैं जिससे कोई ब्लाइंड स्पॉट नहीं रहता।',
        bn: 'ব্রেকারের উভয় পাশে সিটি বসিয়ে জোনগুলোকে ওভারল্যাপ করানো হয় যার ফলে গ্রিডে কোনো ব্লাইন্ড স্পট থাকে না।'
      }
    },
    {
      id: 'mcq-ch17-l01-03',
      question: {
        en: 'What is the primary function of a Breaker Failure Protection (ANSI 50BF) scheme?',
        hi: 'ब्रेकर विफलता सुरक्षा (ANSI 50BF) योजना का प्राथमिक कार्य क्या है?',
        bn: 'ব্রেকার ফেইলিওর সুরক্ষা (ANSI 50BF) স্কিমের মূল কাজ কী?'
      },
      options: [
        { id: 'opt-1', text: { en: 'To trip all adjacent backup circuit breakers if the primary breaker fails to open', hi: 'यदि प्राथमिक ब्रेकर खुलने में विफल रहता है तो सभी निकटवर्ती बैकअप ब्रेकर्स को ट्रिप करना', bn: 'প্রাইমারি ব্রেকার খুলতে ব্যর্থ হলে সংলগ্ন সকল ব্যাকআপ ব্রেকার ট্রিপ করা' } },
        { id: 'opt-2', text: { en: 'To increase the operating speed of the circuit breaker mechanism', hi: 'सर्किट ब्रेकर तंत्र की परिचालन गति बढ़ाना', bn: 'সার্কিট ব্রেকারের মেকানিজমের গতি বৃদ্ধি করা' } },
        { id: 'opt-3', text: { en: 'To prevent lightning surges from entering the substation', hi: 'बिजली के सर्ज को सबस्टेशन में प्रवेश करने से रोकना', bn: 'সাবস্টেশনে বজ্রপাতজনিত সার্জ প্রবেশে বাধা দেওয়া' } },
        { id: 'opt-4', text: { en: 'To reclose the circuit breaker automatically after a transient fault', hi: 'क्षणिक फॉल्ट के बाद सर्किट ब्रेकर को स्वचालित रूप से दोबारा बंद करना', bn: 'ক্ষণস্থায়ী ফল্টের পর স্বয়ংক্রিয়ভাবে ব্রেকার রিক্লোজ করা' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'If a circuit breaker fails to open or clear fault current within a preset time (typically 100–150 ms) after receiving a trip command, ANSI 50BF initiates a backup trip to all surrounding breakers connected to the same busbar section.',
        hi: 'यदि ट्रिप कमांड के बाद ब्रेकर विफल हो जाता है, तो 50BF उसी बसबार से जुड़े सभी आसपास के बैकअप ब्रेकर्स को ट्रिप करता है।',
        bn: 'ট্রিপ নির্দেশ পাওয়ার পর নির্দিষ্ট সময়ের মধ্যে ব্রেকার ব্যর্থ হলে 50BF সংশ্লিষ্ট বাসবারের আশেপাশের সকল ব্রেকার ট্রিপ করে ফল্ট দূর করে।'
      }
    },
    {
      id: 'mcq-ch17-l01-04',
      question: {
        en: 'In high-voltage transmission systems, what typical fault clearance time is required to maintain transient rotor angle stability?',
        hi: 'उच्च-वोल्टेज पारेषण प्रणालियों में, रोटर कोण स्थिरता बनाए रखने के लिए आमतौर पर कितने समय में फॉल्ट क्लीयरेंस की आवश्यकता होती है?',
        bn: 'উচ্চ ভোল্টেজ সঞ্চালন লাইনে ট্রানজিয়েন্ট রোটর অ্যাঙ্গেল স্থিতিশীলতা বজায় রাখতে সাধারণত কত সময়ের মধ্যে ফল্ট ক্লিয়ারেন্স প্রয়োজন?'
      },
      options: [
        { id: 'opt-1', text: { en: '2 to 4 cycles (40 to 80 ms)', hi: '2 से 4 चक्र (40 से 80 ms)', bn: '২ থেকে ৪ সাইকেল (৪০ থেকে ৮০ ms)' } },
        { id: 'opt-2', text: { en: '1 to 2 seconds', hi: '1 से 2 सेकंड', bn: '১ থেকে ২ সেকেন্ড' } },
        { id: 'opt-3', text: { en: '10 to 15 cycles (200 to 300 ms)', hi: '10 से 15 चक्र (200 से 300 ms)', bn: '১০ থেকে ১৫ সাইকেল (২০০ থেকে ৩০০ ms)' } },
        { id: 'opt-4', text: { en: '5 minutes', hi: '5 मिनट', bn: '৫ মিনিট' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Extra High Voltage (400 kV+) networks mandate fault clearance within 40 to 80 ms (2–4 cycles of 50 Hz) to keep the power system below the Critical Clearing Time (CCT) and prevent generator loss of synchronism.',
        hi: 'EHV नेटवर्क में जनरेटर को सिंक्रनाइज़ेशन खोने से बचाने के लिए 40 से 80 ms (2-4 चक्र) के भीतर फॉल्ट क्लीयरेंस अनिवार्य है।',
        bn: 'জেনারেটরের সিনক্রোনিজম বজায় রাখতে EHV গ্রিডে ৪০ থেকে ৮০ ms (২-৪ সাইকেল) এর মধ্যে ফল্ট বিচ্ছিন্ন করা বাধ্যতামূলক।'
      }
    },
    {
      id: 'mcq-ch17-l01-05',
      question: {
        en: 'A relay that operates strictly within clearly defined physical boundaries without intentional time delay is known as:',
        hi: 'एक रिले जो बिना किसी जानबूझकर की गई समय देरी के स्पष्ट रूप से परिभाषित सीमाओं के भीतर संचालित होता है, कहलाता है:',
        bn: 'যে রিলে কোনো কৃত্রিম সময় বিলম্ব ছাড়াই নির্দিষ্ট ভৌগোলিক সীমানার মধ্যে দ্রুত কাজ করে তাকে কী বলা হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Unit (Primary) Protection', hi: 'यूनिट (प्राथमिक) सुरक्षा', bn: 'ইউনিট (প্রাইমারি) সুরক্ষা' } },
        { id: 'opt-2', text: { en: 'Non-unit Time-Graded Protection', hi: 'नॉन-यूनिट टाइम-ग्रेडेड सुरक्षा', bn: 'নন-ইউনিট টাইম-গ্রেডেড সুরক্ষা' } },
        { id: 'opt-3', text: { en: 'Thermal Overload Protection', hi: 'थर्मल ओवरलोड सुरक्षा', bn: 'থার্মাল ওভারলোড সুরক্ষা' } },
        { id: 'opt-4', text: { en: 'Reverse Power Protection', hi: 'रिवर्स पावर सुरक्षा', bn: 'রিভার্স পাওয়ার সুরক্ষা' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Unit protection schemes (such as differential protection) protect a specific, bounded zone and trip instantaneously without intentional time coordination with external networks.',
        hi: 'यूनिट सुरक्षा प्रणालियाँ (जैसे डिफरेंशियल सुरक्षा) एक विशिष्ट ज़ोन की रक्षा करती हैं और बिना किसी समय देरी के तुरंत ट्रिप होती हैं।',
        bn: 'ইউনিট প্রোটেকশন স্কিম (যেমন ডিফারেনশিয়াল সুরক্ষা) কেবল নির্দিষ্ট এলাকার ভেতরের ফল্টে কোনো কৃত্রিম বিলম্ব ছাড়াই তাৎক্ষণিক ট্রিপ করে।'
      }
    },
    {
      id: 'mcq-ch17-l01-06',
      question: {
        en: 'If a short circuit occurs exactly on the circuit breaker mechanism located between two overlapping protection zones, what is the expected operation?',
        hi: 'यदि दो ओवरलैपिंग सुरक्षा ज़ोन के बीच स्थित सर्किट ब्रेकर पर सीधे शॉर्ट सर्किट होता है, तो क्या अपेक्षित परिणाम होगा?',
        bn: 'দুটি ওভারল্যাপিং সুরক্ষা জোনের মধ্যবর্তী সার্কিট ব্রেকারে সরাসরি শর্ট সার্কিট ঘটলে কী ঘটবে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Both overlapping protection zones will detect the fault and trip their respective breakers', hi: 'दोनों ओवरलैपिंग ज़ोन फॉल्ट का पता लगाएंगे और अपने-अपने ब्रेकर्स को ट्रिप करेंगे', bn: 'উভয় ওভারল্যাপিং জোন ফল্ট শনাক্ত করবে এবং সংশ্লিষ্ট সকল ব্রেকার ট্রিপ করবে' } },
        { id: 'opt-2', text: { en: 'Neither zone will trip because the breaker is in a dead spot', hi: 'कोई भी ज़ोन ट्रिप नहीं करेगा क्योंकि ब्रेकर डेड स्पॉट में है', bn: 'কোনো জোনই ট্রিপ করবে না কারণ ব্রেকারটি ডেড স্পটে অবস্থিত' } },
        { id: 'opt-3', text: { en: 'Only the generator zone trips after a 5-second delay', hi: 'केवल जनरेटर ज़ोन 5 सेकंड की देरी के बाद ट्रिप करेगा', bn: 'কেবল জেনারেটর জোন ৫ সেকেন্ড দেরিতে ট্রিপ করবে' } },
        { id: 'opt-4', text: { en: 'The transformer will step up its voltage to extinguish the arc', hi: 'आर्क बुझाने के लिए ट्रांसफार्मर अपना वोल्टेज बढ़ाएगा', bn: 'আর্ক নেভাতে ট্রান্সফরমার ভোল্টেজ বৃদ্ধি করবে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Because the fault lies within both overlapping zones, both relay systems sense the fault as internal and immediately trip all breakers surrounding the faulty breaker, completely isolating it.',
        hi: 'चूंकि फॉल्ट दोनों ज़ोन के भीतर आता है, दोनों रिले सिस्टम इसे आंतरिक मानकर आसपास के सभी ब्रेकर्स को तुरंत ट्रिप कर देते हैं।',
        bn: 'ফল্টটি উভয় জোনের মধ্যে পড়ায় উভয় প্রোটেকশন রিলেই একে অভ্যন্তরীণ ফল্ট হিসেবে শনাক্ত করে চারপাশের সকল ব্রেকার তাৎক্ষণিক ট্রিপ করায়।'
      }
    },
    {
      id: 'mcq-ch17-l01-07',
      question: {
        en: 'What distinguishes Remote Backup from Local Backup in electrical protection?',
        hi: 'विद्युत सुरक्षा में रिमोट बैकअप को लोकल बैकअप से क्या अलग करता है?',
        bn: 'বৈদ্যুতিক সুরক্ষায় লোকাল ব্যাকআপ থেকে রিমোট ব্যাকআপের মূল পার্থক্য কী?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Remote backup is situated at an adjacent upstream substation; local backup is in the same substation', hi: 'रिमोट बैकअप आसन्न अपस्ट्रीम सबस्टेशन में स्थित होता है; लोकल बैकअप उसी सबस्टेशन में होता है', bn: 'রিমোট ব্যাকআপ দূরবর্তী আপস্ট্রিম সাবস্টেশনে থাকে; লোকাল ব্যাকআপ একই সাবস্টেশনে অবস্থিত থাকে' } },
        { id: 'opt-2', text: { en: 'Remote backup uses fiber optic cables while local backup uses telephone lines', hi: 'रिमोट बैकअप फाइबर ऑप्टिक केबल का उपयोग करता है', bn: 'রিমোট ব্যাকআপ অপটিক্যাল ফাইবার ব্যবহার করে' } },
        { id: 'opt-3', text: { en: 'Remote backup is always faster than local backup', hi: 'रिमोट बैकअप हमेशा लोकल बैकअप से तेज होता है', bn: 'রিমোট ব্যাকআপ সর্বদা লোকাল ব্যাকআপের চেয়ে দ্রুত কাজ করে' } },
        { id: 'opt-4', text: { en: 'Local backup only operates for direct current (DC) systems', hi: 'लोकल बैकअप केवल डीसी सिस्टम के लिए काम करता है', bn: 'লোকাল ব্যাকআপ কেবল ডিসি সিস্টেমে কার্যকর হয়' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Local backup uses redundant relays and breaker failure schemes in the same substation. Remote backup relies on upstream relays at adjacent substations, taking longer to trip and isolating a larger part of the grid.',
        hi: 'लोकल बैकअप उसी सबस्टेशन में अतिरिक्त रिले का उपयोग करता है, जबकि रिमोट बैकअप दूर के अपस्ट्रीम सबस्टेशन पर निर्भर करता है।',
        bn: 'লোকাল ব্যাকআপ একই সাবস্টেশনের বিকল্প রিলে ব্যবহার করে; অন্যদিকে রিমোট ব্যাকআপ দূরবর্তী আপস্ট্রিম সাবস্টেশনের রিলে দিয়ে সময় বিলম্ব ঘটিয়ে পরিচালিত হয়।'
      }
    },
    {
      id: 'mcq-ch17-l01-08',
      question: {
        en: 'A relay system with 100% dependability and poor security will likely suffer from:',
        hi: '100% डिपेंडेबिलिटी और खराब सिक्योरिटी वाली रिले प्रणाली में क्या समस्या होने की संभावना है?',
        bn: '১০০% ডিপেন্ডেবিলিটি কিন্তু নিম্নমানের সিকিউরিটি সম্পন্ন সুরক্ষা ব্যবস্থায় কী সমস্যা দেখা দেবে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Excessive false trips for external faults, disrupting healthy grid portions', hi: 'बाहरी फॉल्ट के लिए अत्यधिक गलत ट्रिप, जिससे स्वस्थ ग्रिड बाधित होगा', bn: 'বহিঃস্থ ফল্টে ঘন ঘন অযাচিত ট্রিপ, যার ফলে সুস্থ গ্রিড বিচ্ছিন্ন হবে' } },
        { id: 'opt-2', text: { en: 'Failure to trip when internal faults occur', hi: 'आंतरिक फॉल्ट होने पर ट्रिप करने में विफलता', bn: 'অভ্যন্তরীণ ফল্ট হলেও রিলে ট্রিপ করতে ব্যর্থ হবে' } },
        { id: 'opt-3', text: { en: 'Complete destruction of current transformer cores', hi: 'करंट ट्रांसफार्मर कोर का पूर्ण विनाश', bn: 'কারেন্ট ট্রান্সফরমারের কোর সম্পূর্ণ ভস্মীভূত হওয়া' } },
        { id: 'opt-4', text: { en: 'Inability to detect phase-to-phase short circuits', hi: 'फेज-टू-फेज शॉर्ट सर्किट का पता लगाने में असमर्थता', bn: 'ফেজ-টু-ফেজ শর্ট সার্কিট শনাক্ত করতে অক্ষমতা' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Poor security means the relay is hyper-sensitive or poorly restrained, leading to nuisance tripping during external through-faults or switching events, compromising overall power continuity.',
        hi: 'खराब सिक्योरिटी का अर्थ है कि रिले बाहरी फॉल्ट के दौरान भी अनावश्यक ट्रिपिंग करेगा, जिससे बिना जरूरत के स्वस्थ बिजली आपूर्ति बंद हो जाएगी।',
        bn: 'দুর্বল সিকিউরিটির অর্থ হলো রিলেটি অতিরিক্ত সংবেদনশীল এবং বাইরের ফল্টেও ভুল ট্রিপ করে গ্রিডের বিদ্যুৎ সরবরাহ বিঘ্নিত করবে।'
      }
    }
  ]
};

export const LESSON_PROTECTION_PHILOSOPHY_ZONES = LESSON_PROTECTION_ZONES;
