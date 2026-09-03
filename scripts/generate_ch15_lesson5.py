# -*- coding: utf-8 -*-
lesson5_code = '''import { Lesson } from '../types';

export const LESSON_MCB_CONCEPT: Lesson = {
  id: 'lsn-ch15-mcb-concept',
  topicId: 'tp-mcb-concept',
  chapterId: 'ch-electrical-safety',
  order: 5,
  title: {
    en: 'MCB — Basic Concept',
    hi: 'MCB — मूल अवधारणा',
    bn: 'এমসিবি (MCB) — মৌলিক ধারণা'
  },
  description: {
    en: 'In-depth engineering operation of Miniature Circuit Breakers (MCBs): dual tripping mechanisms (thermal bimetallic overload and magnetic solenoid short-circuit), de-ion arc chute dynamics, tripping characteristics (Types B, C, D per IEC 60898), breaking capacity, and energy limiting classes.',
    hi: 'मिनिएचर सर्किट ब्रेकर (MCB) का गहन इंजीनियरिंग संचालन: दोहरी ट्रिपिंग प्रणाली (थर्मल बायोमेटेलिक ओवरलोड और चुंबकीय सोलेनॉइड शॉर्ट-सर्किट), डी-आयन आर्क चूट की गतिशीलता, ट्रिपिंग वक्र (IEC 60898 के अनुसार टाइप B, C, D), ब्रेकिंग क्षमता और ऊर्जा सीमांत वर्ग।',
    bn: 'মিনিয়েচার সার্কিট ব্রেকারের (MCB) বিশদ কার্যপদ্ধতি: দ্বিমুখী ট্রিপিং মেকানিজম (থার্মাল বাইমেটালিক ওভারলোড এবং ম্যাগনেটিক সলিনয়েড শর্ট সার্কিট), ডি-আয়ন আর্ক চুট ও আর্ক বিভাজন কৌশল, ট্রিপিং বৈশিষ্ট্য (IEC 60898 মান অনুসারে টাইপ B, C, D), ব্রেকিং ক্যাপাসিটি এবং এনার্জি লিমিটিং ক্লাস।'
  },
  estimatedMinutes: 40,
  easyExplanation: {
    en: 'A Miniature Circuit Breaker (MCB) is a modern, resettable automatic switch that replaces old single-use wire fuses. Unlike a fuse that self-destructs by melting, an MCB simply "trips" off when a dangerous electrical fault occurs, and can be immediately switched back on with a lever once the fault is fixed. Inside every MCB are two distinct detection brains working together: (1) A thermal bimetallic strip made of two bonded metals with different thermal expansion rates. When moderate overload current flows for several seconds or minutes, the strip slowly bends and unlatches the spring mechanism. (2) An electromagnetic coil (solenoid) with a spring-loaded plunger. When a violent short circuit occurs, the massive surge of current creates a powerful magnetic field that punches the plunger forward in under 3 to 10 milliseconds, snapping the contacts open instantly! The resulting spark is drawn into a stack of metal plates called an "arc chute", which dices the arc into tiny harmless pieces and cools it.',
    hi: 'मिनिएचर सर्किट ब्रेकर (MCB) एक आधुनिक, पुनः चालू (रीसेट) किया जाने वाला स्वचालित स्विच है जो पुराने तार वाले फ्यूज का स्थान लेता है। फ्यूज की तरह पिघल कर नष्ट होने के बजाय, फॉल्ट होने पर MCB का स्विच नीचे "ट्रिप" हो जाता है, और फॉल्ट ठीक करने के बाद इसे लीवर द्वारा तुरंत वापस चालू किया जा सकता है। प्रत्येक MCB के अंदर दो सुरक्षा तंत्र मिलकर काम करते हैं: (1) थर्मल बाई-मेटेलिक पट्टी: जब लगातार ओवरलोड करंट बहता है, तो यह द्विधात्विक पट्टी गर्म होकर मुड़ती है और स्प्रिंग लीवर को ट्रिप कर देती है। (2) इलेक्ट्रोमैग्नेटिक सोलेनॉइड (कॉइल): जब खतरनाक शॉर्ट सर्किट होता है, तो भारी करंट से कॉइल में तीव्र चुंबकत्व बनता है जो एक प्लंजर को 3 से 10 मिलीसेकंड में धक्का देकर संपर्कों को तुरंत खोल देता है! उत्पन्न होने वाले स्पार्क को "आर्क चूट" में खींचकर ठंडी धातु की पत्तियों द्वारा बुझा दिया जाता है।',
    bn: 'মিনিয়েচার সার্কিট ব্রেকার (MCB) হলো একটি আধুনিক, রিসেটযোগ্য স্বয়ংক্রিয় সুইচ যা পুরনো এককালীন ফিউজের বিকল্প হিসেবে ব্যবহৃত হয়। ফিউজের মতো তার পুড়ে নষ্ট হওয়ার বদলে এমসিবি কোনো বিপজ্জনক ফল্ট ঘটলে সাথে সাথে "ট্রিপ" করে লাইন বন্ধ করে দেয় এবং ত্রুটি মেরামতের পর লিভার তুলে পুনরায় চালু করা যায়। প্রতিটি এমসিবির ভেতরে দুটি সুরক্ষা ব্যবস্থা একসাথে কাজ করে: (১) থার্মাল বাইমেটালিক স্ট্রিপ: সাধারণ ওভারলোডে ভিন্ন প্রসারণ গুণাঙ্কের দুটি ধাতুর পাত ধীরে ধীরে বেঁকে গিয়ে স্প্রিং মেকানিজম ট্রিপ করায়। (২) ইলেক্ট্রোম্যাগনেটিক সলিনয়েড: মারাত্মক শর্ট সার্কিট ঘটলে বিপুল কারেন্টের কারণে কয়েলে তীব্র চৌম্বক ক্ষেত্র তৈরি হয়, যা ৩ থেকে ১০ মিলিসেকেন্ডের মধ্যে প্লাঞ্জারকে ধাক্কা দিয়ে কন্টাক্ট সম্পূর্ণ বিচ্ছিন্ন করে! আর এর ফলে সৃষ্ট মারাত্মক বৈদ্যুতিক স্ফুলিঙ্গকে "আর্ক চুট" এর পাতলা ধাতব পাতে বিভক্ত করে দ্রুত ঠান্ডা করে নিভিয়ে ফেলা হয়।'
  },
  detailedExplanation: {
    en: 'An MCB conforming to IEC/EN 60898-1 or IEC 60947-2 is an electromechanical safety switch incorporating two complementary tripping systems and an arc quenching chamber:\\n\\n1. Thermal Tripping Mechanism (Inverse-Time Overload Protection):\\nA bimetal strip consists of two bonded metals with different coefficients of thermal expansion (e.g., Invar with low expansion and brass or high-nickel alloy with high expansion). When current I flows through the strip (or an adjacent heater element), Joule heating causes differential thermal elongation. The bimetal bends towards the low-expansion side. The mechanical deflection δ is governed by Timoshenko’s bimetal equation: δ ∝ (Δα · ΔT · L²) / t. Overload deflection engages the operating mechanism’s tripping catch. The trip delay is strictly inverse-time: higher overload results in faster heating and shorter disconnection time.\\n\\n2. Magnetic Tripping Mechanism (Instantaneous Short-Circuit Protection):\\nA copper solenoid coil wound around a fixed magnetic yoke houses a movable ferromagnetic plunger biased by a calibrated restoring spring. Under normal currents, the magnetic reluctance force is insufficient to overcome the spring preload. However, under high fault currents (I ≥ 3 · I_n to 10 · I_n), the magnetic tractive force F_mag ∝ (N · I)² overcomes spring resistance. The plunger fires forward at high velocity, directly striking the trip lever and mechanically forcing the moving contact open in less than 2 to 5 milliseconds, independent of the thermal bimetal.\\n\\n3. Arc De-Ionization and Chute Extinction:\\nWhen contacts separate under full short-circuit current, a high-temperature electric arc forms. The moving contact arm and magnetic blowout field generate a Lorentz force (F = I × B) that drives the arc along copper runners into the arc chute. The chute consists of 10 to 15 parallel ferromagnetic (de-ion) plates. The single arc of voltage V_arc is split into n series arcs (each requiring ~20-25 V anode-cathode drop). When n · V_drop exceeds the system supply voltage, the arc becomes unstable and quenches at the first current zero.\\n\\n4. Tripping Characteristics (IEC 60898 Standards):\\n• Type B: Magnetic trip between 3 · I_n and 5 · I_n. Used for domestic resistive circuits, lighting, and long cable runs where fault currents may be limited.\\n• Type C: Magnetic trip between 5 · I_n and 10 · I_n. Used for commercial and industrial loads, fluorescent lighting banks, small pumps, and general motor loads with moderate inrush currents.\\n• Type D: Magnetic trip between 10 · I_n and 20 · I_n. Used for highly inductive loads, welding equipment, X-ray machines, and large distribution transformers with severe starting inrush currents.\\n• Type K & Z: Ultra-sensitive curves (2-3 · I_n) designed to protect sensitive semiconductors and precision instrumentation.',
    hi: 'IEC 60898-1 के अनुसार MCB में दो पूरक ट्रिपिंग तंत्र और एक आर्क शमन कक्ष होता है:\\n\\n1. थर्मल ट्रिपिंग प्रणाली (ओवरलोड सुरक्षा):\\nयह दो अलग-अलग तापीय प्रसार गुणांक वाली धातुओं (जैसे इन्वार और पीतल) की द्विधात्विक पट्टी से बनी होती है। ओवरलोड धारा बहने पर यह पट्टी गर्म होकर मुड़ती है। मुड़ने की दर धारा के परिमाण पर निर्भर करती है—जितनी अधिक धारा, उतनी ही जल्दी ट्रिपिंग (Inverse Time)।\\n\\n2. चुंबकीय ट्रिपिंग प्रणाली (शॉर्ट-सर्किट सुरक्षा):\\nएक कॉपर कॉइल के अंदर स्प्रिंग से बंधा हुआ चुंबकीय प्लंजर होता है। भारी शॉर्ट-सर्किट धारा (रेटिंग के 3 से 10 गुना) बहने पर चुंबकीय बल (F ∝ I²) स्प्रिंग के तनाव को हरा देता है और प्लंजर 3-5 मिलीसेकंड में संपर्कों को सीधे अलग कर देता है।\\n\\n3. आर्क चूट और डी-आयन प्लेट्स:\\nसंपर्क खुलते समय बनने वाले भयंकर आर्क को लोरेंत्ज़ बल (F = I × B) द्वारा आर्क रनर के माध्यम से 10-15 समानांतर धातु की प्लेटों (आर्क चूट) में धकेल दिया जाता है। चूट आर्क को छोटे-छोटे टुकड़ों में विभाजित कर देती है, जिससे आर्क वोल्टेज आपूर्ति वोल्टेज से अधिक हो जाता है और आर्क बुझ जाता है।\\n\\n4. MCB के प्रकार (IEC 60898):\\n• टाइप B: 3 से 5 गुना रेटिंग पर ट्रिप (घरेलू हीटर, लाइटिंग)।\\n• टाइप C: 5 से 10 गुना रेटिंग पर ट्रिप (मोटर, पंखे, फ्लोरोसेंट लाइट)।\\n• टाइप D: 10 से 20 गुना रेटिंग पर ट्रिप (वेल्डिंग मशीन, ट्रांसफार्मर, एक्स-रे)।\\n• टाइप K/Z: 2 से 3 गुना रेटिंग पर अति-संवेदनशील ट्रिपिंग (इलेक्ट्रॉनिक्स उपकरण)।',
    bn: 'IEC 60898 মান অনুসারে একটি এমসিবিতে দুটি স্বয়ংক্রিয় সুরক্ষা ব্যবস্থা ও একটি আর্ক চেম্বার বিদ্যমান:\\n\\n১. থার্মাল ট্রিপিং মেকানিজম (ওভারলোড প্রটেকশন):\\nভিন্ন প্রসারণশীলতার দুটি ধাতুর তৈরি বাইমেটালিক স্ট্রিপের মধ্য দিয়ে ওভারলোড কারেন্ট চললে অসম প্রসারণের কারণে এটি বেঁকে যায়। কারেন্ট যত বেশি হয়, স্ট্রিপটি তত দ্রুত বেঁকে স্প্রিংকে মুক্ত করে (ব্যস্তানুপাতিক সময় বৈশিষ্ট্য)।\\n\\n২. ম্যাগনেটিক ট্রিপিং মেکানিজম (শর্ট সার্কিট প্রটেকশন):\\nএকটি কয়েলের ভেতরে থাকা স্প্রিং-নিয়ন্ত্রিত লোহার প্লাঞ্জার শর্ট সার্কিটের তীব্র কারেন্টে (৩ থেকে ১০ গুণ) শক্তিশালী চৌম্বক বল (F ∝ I²) লাভ করে। প্লাঞ্জারটি মাত্র ৩-৫ মিলিসেকেন্ডে সরাসরি আঘাত করে কন্টাক্ট খুলে দেয়।\\n\\n৩. আর্ক চুট ও ডি-আয়ন প্লেট:\\nকন্টাক্ট খোলার মুহূর্তে উৎপন্ন উচ্চ তাপমাত্রার আর্ককে লরেন্টজ বলের সাহায্যে ১০-১৫টি ধাতব প্লেটের স্তূপে ঠেলে দেওয়া হয়। প্লেটগুলি একক আর্কটিকে একাধিক ছোট আর্কে বিভক্ত করে শীতল করে নিভিয়ে ফেলে।\\n\\n৪. এমসিবির ট্রিপিং কার্ভ (IEC 60898):\\n• টাইপ B: ৩ থেকে ৫ গুণ রেটিংয়ে তাৎক্ষণিক ট্রিপ (আবাসিক রেজিস্ট্যান্ট লোড ও সাধারণ লাইটিং)।\\n• টাইপ C: ৫ থেকে ১০ গুণ রেটিংয়ে ট্রিপ (কমার্শিয়াল ইন্ডাক্টিভ লোড, মোটর ও ফ্লুরোসেন্ট বাতি)।\\n• টাইপ D: ১০ থেকে ২০ গুণ রেটিংয়ে ট্রিপ (ওয়েল্ডিং মেশিন, ট্রান্সফরমার ও ভারী মোটর)।\\n• টাইপ K ও Z: ২ থেকে ৩ গুণ রেটিংয়ে অতি-সংবেদনশীল ট্রিপ (ইলেকট্রনিক্স ও সেমিকন্ডাক্টর রক্ষা)।'
  },
  formulas: [
    {
      id: 'f-mcb-magnetic-trip-threshold',
      symbol: 'I_{mag}',
      expression: 'k_1 \\cdot I_n \\le I_{\\text{mag}} \\le k_2 \\cdot I_n',
      title: {
        en: 'Instantaneous Magnetic Trip Range',
        hi: 'तात्कालिक चुंबकीय ट्रिप सीमा',
        bn: 'তাৎক্ষণিক চৌম্বকীয় ট্রিপ সীমা'
      },
      description: {
        en: 'Defines the boundaries of instantaneous magnetic tripping current per IEC 60898 (Type B: 3-5 In, Type C: 5-10 In, Type D: 10-20 In).',
        hi: 'IEC 60898 के अनुसार तात्कालिक चुंबकीय ट्रिपिंग धारा की सीमाओं को परिभाषित करता है (टाइप B: 3-5 In, टाइप C: 5-10 In, टाइप D: 10-20 In)।',
        bn: 'IEC 60898 মান অনুসারে তাৎক্ষণিক ম্যাগনেটিক ট্রিপিং কারেন্টের সীমা নির্ধারণ করে (টাইপ B: ৩-৫ In, টাইপ C: ৫-১০ In, টাইপ D: ১০-২০ In)।'
      },
      variables: [
        { symbol: 'I_mag', name: { en: 'Instantaneous magnetic trip current (A)', hi: 'तात्कालिक चुंबकीय ट्रिप धारा (A)', bn: 'তাৎক্ষণিক ম্যাগনেটিক ট্রিপ কারেন্ট (A)' } },
        { symbol: 'I_n', name: { en: 'Rated continuous current (A)', hi: 'रेटेड सतत धारा (A)', bn: 'রেটেড অবিচ্ছিন্ন কারেন্ট (A)' } },
        { symbol: 'k_1, k_2', name: { en: 'Trip curve multiplier boundaries (e.g. 5 and 10 for Type C)', hi: 'ट्रिप वक्र गुणक सीमाएं (जैसे टाइप C के लिए 5 और 10)', bn: 'ট্রিপ কার্ভ গুণক সীমা (যেমন টাইপ সি এর জন্য ৫ ও ১০)' } }
      ]
    },
    {
      id: 'f-arc-chute-voltage-split',
      symbol: 'V_{arc}',
      expression: 'V_{\\text{arc, total}} = n \\cdot V_{\\text{plate}}',
      title: {
        en: 'De-ion Arc Chute Total Extinction Voltage',
        hi: 'डी-आयन आर्क चूट कुल शमन वोल्टेज',
        bn: 'ডি-আয়ন আর্ক চুট মোট আর্ক ভোল্টেজ'
      },
      description: {
        en: 'Splits a single high-energy arc into n series arc segments across splitter plates, building total arc voltage above system voltage to force rapid arc extinction.',
        hi: 'एकल उच्च-ऊर्जा आर्क को n प्लेटों में विभाजित करता है, जिससे कुल आर्क वोल्टेज सिस्टम वोल्टेज से अधिक होकर आर्क को बुझा देता है।',
        bn: 'একটি শক্তিশালী আর্ককে n সংখ্যক সমান্তরাল প্লেটে বিভক্ত করে মোট আর্ক ভোল্টেজ বাড়িয়ে দ্রুত নিভিয়ে ফেলে।'
      },
      variables: [
        { symbol: 'V_arc, total', name: { en: 'Total arc voltage across chute (V)', hi: 'चूट के पार कुल आर्क वोल्टेज (V)', bn: 'মোট আর্ক ভোল্টেজ (V)' } },
        { symbol: 'n', name: { en: 'Number of series splitter gaps', hi: 'प्लेट विभाजक अंतरालों की संख्या', bn: 'স্প্লিটার প্লেট ফাঁকের সংখ্যা' } },
        { symbol: 'V_plate', name: { en: 'Cathode-anode sheath voltage drop per plate (~20-25 V)', hi: 'प्रति प्लेट कैथोड-एनोड वोल्टेज ड्रॉप (~20-25 V)', bn: 'প্রতি প্লেটে অ্যানোড-ক্যাথোড ভোল্টেজ ড্রপ (~২০-২৫ V)' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-ch15-l05-selection-sizing',
      title: {
        en: 'MCB Type Selection, Breaking Capacity, and Energy Class',
        hi: 'MCB प्रकार चयन, ब्रेकिंग क्षमता एवं ऊर्जा वर्ग',
        bn: 'এমসিবি নির্বাচন, ব্রেকিং ক্যাপাসিটি এবং এনার্জি ক্লাস'
      },
      content: {
        en: 'Selecting the correct MCB requires matching three critical ratings to the specific installation parameters:\\n\\n1. Tripping Curve Selection:\\n• Use Type B for domestic lighting, immersion heaters, and long cable runs where the prospective short-circuit current is low.\\n• Use Type C for typical commercial offices, air conditioning units, computer workstations, and small induction motors. A Type B MCB installed on an induction motor will suffer nuisance tripping during the initial 6x starting inrush current.\\n• Use Type D for transformers, spot-welders, and MRI machines with severe inrush transients (up to 12-15x full-load current).\\n\\n2. Rated Breaking Capacity (I_cn / I_cu):\\nThe maximum short-circuit current that the MCB can interrupt safely without suffering structural destruction or permanent welding of contacts. Standard domestic breakers have a breaking capacity of 6,000 A (6 kA) or 10,000 A (10 kA) marked inside a small rectangle (e.g., [6000] or [10000]). In industrial switchboards located adjacent to large step-down transformers, breaking capacities of 15 kA to 25 kA are required.\\n\\n3. Energy Limiting Class (Class 1, 2, or 3):\\nMarked inside a square below the breaking capacity. Class 3 is the highest performance tier, restricting let-through energy I²t to the lowest certified levels, thereby providing maximum thermal protection to building wiring.',
        hi: 'सही MCB का चयन तीन मुख्य तकनीकी मानकों पर निर्भर करता है:\\n\\n1. ट्रिपिंग वक्र (Curve) का चयन:\\n• टाइप B: घरेलू हीटर, लाइटिंग और लंबी केबलों के लिए।\\n• टाइप C: सामान्य कार्यालय, एसी (AC), पंखे और सामान्य मोटरों के लिए। यदि मोटर पर टाइप B लगाया जाए तो स्टार्टिंग करंट के झटके से वह बार-बार अनावश्यक ट्रिप होगा।\\n• टाइप D: वेल्डिंग मशीन और ट्रांसफार्मर के लिए जहां भारी स्टार्टिंग करंट (12-15 गुना) होता है।\\n\\n2. रेटेड ब्रेकिंग क्षमता (Breaking Capacity):\\nअधिकतम शॉर्ट-सर्किट करंट जिसे MCB बिना फटे सुरक्षित रूप से काट सकती है। इसे आयत के अंदर [6000] या [10000] (6 kA या 10 kA) के रूप में लिखा जाता है।\\n\\n3. एनर्जी लिमिटिंग क्लास (Class 1, 2, 3):\\nआयत के नीचे वर्ग में लिखा 3 (Class 3) सर्वोत्तम प्रदर्शन दर्शाता है, जो तारों में न्यूनतम फॉल्ट ऊर्जा जाने देता है।',
        bn: 'সঠিক এমসিবি নির্বাচনের জন্য তিনটি প্রধান প্যারামিটার মিলিয়ে দেখতে হয়:\\n\\n১. ট্রিপিং কার্ভ নির্বাচন:\\n• টাইপ B: আবাসিক হিটার, লাইটিং ও দূরবর্তী ক্যাবলের জন্য।\\n• টাইপ C: বাণিজ্যিক অফিস, এয়ার কন্ডিশনার এবং সাধারণ ইন্ডাকশন মোটরের জন্য। মোটরে টাইপ B বসালে স্টার্টিং কারেন্টের ধাক্কায় তা অনাকাঙ্ক্ষিতভাবে ট্রিপ করবে।\\n• টাইপ D: ভারী ওয়েল্ডিং মেশিন ও ট্রান্সফরমারের জন্য যেখানে স্টার্টিং ইনরাশ কারেন্ট ১২-১৫ গুণ পর্যন্ত ওঠে।\\n\\n২. ব্রেকিং ক্যাপাসিটি (I_cn):\\nসর্বোচ্চ শর্ট সার্কিট কারেন্ট যা এমসিবি কোনো স্থায়ী ক্ষতি বা ঝালাই হওয়া ছাড়াই বিচ্ছিন্ন করতে পারে। এটি একটি বাক্সের ভেতর [6000] বা [10000] (৬ kA বা ১০ kA) আকারে লেখা থাকে।\\n\\n৩. এনার্জি লিমিটিং ক্লাস (Class 3):\\nব্রেকিং ক্যাপাসিটির নিচে লেখা "৩" নির্দেশ করে এটি সর্বোচ্চ মানের এবং ক্যাবলের মধ্য দিয়ে সর্বনিম্ন ক্ষতিকর শক্তি প্রবাহিত হতে দেয়।'
      },
      schematicId: 'circuit-ch15-mcb-internal-tripping'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch15-l05-01',
      problem: {
        en: 'A 2.2 kW single-phase 230 V induction pump motor has a full-load current of 12.5 A and a starting inrush current of 6.5 times full-load current lasting for 80 ms.\\n(a) Calculate the starting inrush current of the motor.\\n(b) If an electrician installs a 16 A Type B MCB (magnetic trip range: 3 to 5 · In), evaluate whether nuisance tripping will occur during motor starting.\\n(c) What type of 16 A MCB (Type B, C, or D) should be installed to prevent nuisance tripping while ensuring optimal protection?',
        hi: 'एक 2.2 kW सिंगल-फेज 230 V इंडक्शन पंप मोटर की पूर्ण-भार धारा 12.5 A है और 80 ms तक चलने वाली स्टार्टिंग इनरश धारा पूर्ण-भार धारा की 6.5 गुना है।\\n(a) मोटर की स्टार्टिंग इनरश धारा की गणना कीजिए।\\n(b) यदि एक इलेक्ट्रीशियन 16 A टाइप B MCB (चुंबकीय ट्रिप सीमा: 3 से 5 · In) स्थापित करता है, तो मूल्यांकन कीजिए कि क्या मोटर शुरू होने पर वह अनावश्यक ट्रिप हो जाएगी।\\n(c) इष्टतम सुरक्षा सुनिश्चित करते हुए अनावश्यक ट्रिपिंग को रोकने के लिए किस प्रकार का 16 A MCB स्थापित किया जाना चाहिए?',
        bn: 'একটি ২.২ kW সিঙ্গেল-ফেজ ২৩০ V মোটরের ফুল-লোড কারেন্ট ১২.৫ A এবং ৮০ মিলিসেকেন্ড স্থায়ী স্টার্টিং ইনরাশ কারেন্ট ফুল-লোডের ৬.৫ গুণ।\\n(a) মোটরের স্টার্টিং ইনরাশ কারেন্ট নির্ণয় করুন।\\n(b) একজন টেকনিশিয়ান যদি ১৬ A টাইপ বি এমসিবি (ম্যাগনেটিক ট্রিপ রেঞ্জ: ৩ থেকে ৫ · In) লাগান, তবে মোটর চালুর সময় কি ব্রেকার ট্রিপ করবে?\\n(c) অনাকাঙ্ক্ষিত ট্রিপিং রোধে কোন টাইপের ১৬ A এমসিবি নির্বাচন করা উচিত?'
      },
      solution: {
        en: 'Given:\\n• Motor Full-Load Current (I_fl) = 12.5 A\\n• Inrush ratio = 6.5 · I_fl\\n• Installed MCB: 16 A, Type B\\n\\nStep 1: Calculate Inrush Current\\nI_inrush = 6.5 · 12.5 A = 81.25 A\\n\\nStep 2: Evaluate Type B Magnetic Trip Thresholds (IEC 60898)\\nFor a 16 A Type B MCB:\\n• Lower threshold (will not trip magnetically): 3 · 16 A = 48 A\\n• Upper threshold (must trip magnetically within 0.1 s): 5 · 16 A = 80 A\\n\\nComparison:\\nActual inrush current = 81.25 A.\\nSince 81.25 A > 80 A (the upper limit of Type B), the electromagnetic solenoid will instantly fire its plunger and trip the circuit on every single startup attempt!\\n\\nStep 3: Correct MCB Selection\\nFor a 16 A Type C MCB:\\n• Magnetic trip range: 5 to 10 · In = 5 · 16 A to 10 · 16 A = 80 A to 160 A.\\nBecause the 81.25 A inrush is safely below the maximum magnetic trip threshold of 160 A (and well below the instantaneous ceiling for the short 80 ms duration), a Type C 16 A MCB will ride through the starting inrush without nuisance tripping while providing robust instantaneous short-circuit protection for faults exceeding 160 A.',
        hi: 'चरण 1: स्टार्टिंग धारा की गणना\\nI_inrush = 6.5 × 12.5 = 81.25 A\\n\\nचरण 2: टाइप B MCB की ट्रिप सीमा (16 A)\\n• 3 × 16 = 48 A\\n• 5 × 16 = 80 A (अधिकतम सीमा)\\nचूंकि स्टार्टिंग धारा (81.25 A) 80 A से अधिक है, अतः टाइप B MCB मोटर चालू करते ही तुरंत ट्रिप हो जाएगी!\\n\\nचरण 3: सही चयन\\nटाइप C MCB की ट्रिप सीमा 5 से 10 गुना (80 A से 160 A) होती है। अतः 81.25 A पर टाइप C बिना ट्रिप हुए मोटर को सुगमता से स्टार्ट होने देगा।',
        bn: 'ধাপ ১: স্টার্টিং কারেন্ট নির্ণয়\\nI_inrush = ৬.৫ × ১২.৫ = ৮১.২৫ A\\n\\nধাপ ২: টাইপ বি এমসিবির ট্রিপ রেঞ্জ (১৬ A)\\n• ৩ × ১৬ = ৪৮ A\\n• ৫ × ১৬ = ৮০ A\\nযেহেতু মোটরের কারেন্ট ৮১.২৫ A, যা ৮০ A এর বেশি, তাই মোটর অন করলেই টাইপ বি এমসিবি প্রতিবার তাৎক্ষণিক ট্রিপ করে যাবে।\\n\\nধাপ ৩: সঠিক এমসিবি নির্বাচন\\n১৬ A টাইপ সি এমসিবির ম্যাগনেটিক সীমা ৮০ থেকে ১৬০ A। ফলে ৮১.২৫ A কারেন্টে এটি ট্রিপ না করে সফলভাবে মোটর চালু হতে দেবে।'
      },
      givenValues: { 'I_fl': '12.5 A', 'Inrush_factor': '6.5', 'MCB_rating': '16 A' },
      finalAnswer: {
        en: 'Inrush current = 81.25 A. The Type B MCB WILL suffer nuisance tripping (>80 A). A Type C 16 A MCB must be installed.',
        hi: 'स्टार्टिंग धारा = 81.25 A। टाइप B MCB अनावश्यक ट्रिप होगी (>80 A)। इसके स्थान पर टाइप C 16 A MCB लगाना अनिवार्य है।',
        bn: 'ইনরাশ কারেন্ট = ৮১.২৫ A। টাইপ বি এমসিবি অনাকাঙ্ক্ষিতভাবে ট্রিপ করবে (>৮০ A)। এর বদলে টাইপ সি ১৬ A এমসিবি স্থাপন আবশ্যক।'
      }
    },
    {
      id: 'ex-ch15-l05-02',
      problem: {
        en: 'An MCB arc chute contains 12 steel splitter de-ion plates forming 13 equal series arc gaps. During high-current interruption, each arc-gap sheath voltage drop is V_plate = 22 V. If the arc column voltage across the chute is 80 V:\\n(a) Calculate the total arc extinguishing voltage developed across the arc chute.\\n(b) If the instantaneous supply voltage across the contacts is 325 V peak (from a 230 V RMS AC mains), determine whether the arc will be forced into rapid extinction.',
        hi: 'एक MCB आर्क चूट में 12 स्टील विभाजक डी-आयन प्लेटें हैं जो 13 समान श्रृंखला आर्क अंतराल बनाती हैं। उच्च धारा रुकावट के दौरान, प्रत्येक अंतराल पर वोल्टेज ड्रॉप V_plate = 22 V है। यदि चूट में आर्क कॉलम वोल्टेज 80 V है:\\n(a) आर्क चूट में विकसित कुल आर्क शमन वोल्टेज की गणना कीजिए।\\n(b) यदि संपर्कों के पार तात्कालिक आपूर्ति वोल्टेज 325 V (230 V RMS का शिखर) है, तो निर्धारित कीजिए कि क्या आर्क तेजी से बुझ जाएगा।',
        bn: 'একটি এমসিবি আর্ক চুটে ১২টি স্টিল স্প্লিটার প্লেট ১৩টি সমান আর্ক ফাঁক তৈরি করে। কারেন্ট বিচ্ছিন্নকালে প্রতি ফাঁকে ভোল্টেজ ড্রপ V_plate = ২২ V। কলাম ভোল্টেজ ৮০ V হলে:\\n(a) মোট উৎপন্ন আর্ক নির্বাপক ভোল্টেজ নির্ণয় করুন।\\n(b) কন্টাক্টের দুই প্রান্তে পিক সাপ্লাই ভোল্টেজ ৩২৫ V হলে আর্কটি কি দ্রুত নিভে যাবে?'
      },
      solution: {
        en: 'Given:\\n• Number of series gaps (n) = 13\\n• Voltage drop per gap (V_plate) = 22 V\\n• Arc column voltage (V_col) = 80 V\\n• Peak supply voltage (V_peak) = 325 V\\n\\nStep 1: Calculate Total Sheath Voltage Drop\\nV_sheath_total = n · V_plate = 13 · 22 V = 286 V\\n\\nStep 2: Calculate Total Arc Voltage (V_arc)\\nV_arc_total = V_sheath_total + V_col = 286 V + 80 V = 366 V\\n\\nStep 3: Arc Extinction Condition\\nFor an AC arc to be extinguished, the total arc counter-voltage must exceed the instantaneous driving system voltage (V_arc > V_system):\\n• Total arc voltage developed = 366 V\\n• Instantaneous system voltage = 325 V\\nSince 366 V > 325 V, the counter-voltage exceeds the driving electromotive force! Current is forced towards zero at an accelerated rate, and the arc is extinguished before the next half-cycle.',
        hi: 'चरण 1: प्लेटों पर कुल वोल्टेज ड्रॉप\\nV_sheath = 13 × 22 = 286 V\\n\\nचरण 2: कुल आर्क वोल्टेज\\nV_arc = 286 + 80 = 366 V\\n\\nचरण 3: आर्क शमन विश्लेषण\\nसप्लाई का शिखर वोल्टेज = 325 V है।\\nचूंकि विकसित आर्क वोल्टेज (366 V) सप्लाई वोल्टेज (325 V) से अधिक है, अतः आर्क करंट तेजी से शून्य हो जाएगा और आर्क तुरंत बुझ जाएगा।',
        bn: 'ধাপ ১: প্লেট ড্রপের সমষ্টি\\nV_sheath = ১৩ × ২২ = ২৮৬ V\\n\\nধাপ ২: মোট আর্ক ভোল্টেজ\\nV_arc = ২৮৬ + ৮০ = ৩৬৬ V\\n\\nধাপ ৩: নির্বাপণ শর্ত যাচাই\\nসাপ্লাই পিক ভোল্টেজ = ৩২৫ V।\\nযেহেতু মোট আর্ক ভোল্টেজ (৩৬৬ V) সাপ্লাই ভোল্টেজ অপেক্ষা বেশি, তাই কারেন্ট দ্রুত শূন্যে নেমে যাবে এবং আর্ক সাথে সাথে নিভে যাবে।'
      },
      givenValues: { 'n': '13', 'V_plate': '22 V', 'V_col': '80 V', 'V_peak': '325 V' },
      finalAnswer: {
        en: 'Total arc chute voltage = 366 V; Since 366 V > 325 V peak mains, the arc is successfully forced into rapid extinction.',
        hi: 'कुल आर्क वोल्टेज = 366 V; चूंकि 366 V > 325 V शिखर वोल्टेज, अतः आर्क तेजी से बुझ जाएगा।',
        bn: 'মোট আর্ক ভোল্টেজ = ৩৬৬ V; ৩২৫ V পিক ভোল্টেজ অপেক্ষা বেশি হওয়ায় আর্কটি সফলভাবে দ্রুত নিভে যাবে।'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Residential distribution board final sub-circuit protection against branch overloads and short circuits.',
      'Air conditioning and heat pump branch circuit protection using Type C MCBs to absorb compressor start-up transients.',
      'Industrial motor control centers (MCC) utilizing Type D MCBs and motor protection circuit breakers (MPCBs) with adjustable thermal overload settings.',
      'Selective discrimination coordination between upstream MCCBs and downstream MCBs to isolate only the faulted branch without blacking out entire facilities.'
    ],
    hi: [
      'घरेलू वितरण बोर्डों में ओवरलोड और शॉर्ट-सर्किट से सुरक्षा के लिए फाइनल सब-सर्किट में MCB लगाना।',
      'एयर कंडीशनर और पंपों के लिए टाइप C MCB का उपयोग ताकि कंप्रेसर शुरू होने पर अनावश्यक ट्रिपिंग न हो।',
      'औद्योगिक मोटर कंट्रोल सेंटर (MCC) में टाइप D MCB का उपयोग करना।',
      'सुरक्षात्मक समन्वय (Discrimination) ताकि केवल फॉल्ट वाला परिपथ ही बंद हो और पूरा संयंत्र बंद न हो।'
    ],
    bn: [
      'আবাসিক ডিস্ট্রিবিউশন বোর্ডে তারের ওভারলোড ও শর্ট সার্কিট সুরক্ষায় এমসিবির সার্বজনীন ব্যবহার।',
      'এয়ার কন্ডিশনার ও পানির পাম্পে টাইপ সি এমসিবি স্থাপন যাতে কম্প্রেসার চালুর ধাক্কায় অযথা বিদ্যুৎ না যায়।',
      'ভারী শিল্প কারখানার মোটর প্যানেলে টাইপ ডি এমসিবি ও এমপিসিবি (MPCB) ব্যবহার।',
      'সার্কিটের সিলেক্টিভ সমন্বয় নিশ্চিত করা যাতে শুধু ত্রুটিপূর্ণ লাইন বিচ্ছিন্ন হয় এবং পুরো কারখানা অন্ধকার না হয়।'
    ]
  },
  importantPoints: {
    en: [
      'An MCB has two tripping triggers: thermal bimetal for slow overloads and electromagnetic solenoid for instantaneous short circuits.',
      'IEC 60898 specifies Type B (3-5 In), Type C (5-10 In), and Type D (10-20 In) magnetic instantaneous tripping curves.',
      'De-ion splitter plates extinguish arcs by chopping the arc into series segments that raise total arc voltage above the supply voltage.',
      'Standard breaking capacity is marked in Amperes inside a rectangle (e.g. [6000] for 6 kA, [10000] for 10 kA).',
      'MCBs do NOT provide human shock protection against direct contact (leakage currents of 30 mA are far below the MCB tripping threshold).'
    ],
    hi: [
      'MCB में दो ट्रिपिंग ट्रिगर होते हैं: ओवरलोड के लिए थर्मल बाई-मेटल और शॉर्ट-सर्किट के लिए सोलेनॉइड।',
      'IEC 60898 मानक: टाइप B (3-5 In), टाइप C (5-10 In), और टाइप D (10-20 In)।',
      'डी-आयन प्लेट्स आर्क को छोटे-छोटे टुकड़ों में विभाजित कर बुझाती हैं।',
      'ब्रेकिंग क्षमता आयत के अंदर लिखी होती है (जैसे [6000] = 6 kA)।',
      'MCB मानव को बिजली के झटके से सीधे सुरक्षा नहीं देती (30 mA करंट पर MCB ट्रिप नहीं हो सकती)।'
    ],
    bn: [
      'এমসিবিতে দুটি ট্রিগার থাকে: ওভারলোডের জন্য থার্মাল বাইমেটাল এবং শর্ট সার্কিটের জন্য দ্রুতগতির সলিনয়েড।',
      'IEC 60898 মান অনুসারে: টাইপ B (৩-৫ In), টাইপ C (৫-১০ In), এবং টাইপ D (১০-২০ In)।',
      'ডি-আয়ন প্লেট আর্কটিকে একাধিক ক্ষুদ্র খণ্ডে বিভক্ত করে সাপ্লাই ভোল্টেজের চেয়ে উচ্চ ভোল্টেজ সৃষ্টি করে নিভিয়ে ফেলে।',
      'ব্রেকিং ক্যাপাসিটি একটি আয়তাকার বাক্সে লেখা থাকে (যেমন [6000] = ৬ kA)।',
      'এমসিবি সাধারণ মানুষকে সরাসরি শকের হাত থেকে বাঁচাতে পারে না (৩০ মিলিঅ্যাম্পিয়ারে এমসিবি ট্রিপ করে না)।'
    ]
  },
  commonMistakes: {
    en: [
      'Installing a Type B MCB on an air conditioner or motor, leading to constant tripping every time the compressor kicks on.',
      'Confusing an MCB with an RCCB: an MCB protects wiring from overcurrent, while an RCCB protects humans from current leakage and electrocution.',
      'Assuming an MCB with a 6 kA rating can safely interrupt a 25 kA fault right next to a main grid substation transformer.',
      'Forcing an MCB toggle lever held in the "ON" position with tape or wire; modern MCBs feature "trip-free" mechanisms that trip internally regardless of lever hold.'
    ],
    hi: [
      'एसी या मोटर पर टाइप B MCB लगा देना, जिससे कंप्रेसर शुरू होते ही वह बार-बार ट्रिप होती रहे।',
      'MCB और RCCB को एक समझना: MCB तारों को जलने से बचाती है जबकि RCCB इंसान को करंट लगने से बचाती है।',
      'यह मानना कि 6 kA वाली सामान्य MCB सबस्टेशन ट्रांसफार्मर के पास 25 kA का फॉल्ट सुरक्षित रूप से काट सकती है।',
      'MCB के लीवर को टेप या तार से "ON" स्थिति में जबरन बांधना; आधुनिक MCB "ट्रिप-फ्री" होती हैं और लीवर बंधे होने पर भी अंदर से ट्रिप हो जाती हैं।'
    ],
    bn: [
      'এসি বা মোটরের লাইনে টাইপ বি এমসিবি লাগানো, যার ফলে কম্প্রেসার চালু হলেই বারবার ট্রিপ করে।',
      'এমসিবি এবং আরসিসিবিকে গুলিয়ে ফেলা: এমসিবি তার রক্ষা করে, আর আরসিসিবি মানুষকে শকের হাত থেকে রক্ষা করে।',
      'মনে করা যে ৬ kA রেটিংয়ের সাধারণ এমসিবি সাবস্টেশনের ২৫ kA শর্ট সার্কিট নিরাপদে কাটতে পারবে।',
      'এমসিবির লিভার তার বা টেপ দিয়ে জোর করে "ON" করে আটকে রাখা; আধুনিক এমসিবির ট্রিপ-ফ্রি মেকানিজমে লিভার ধরা থাকলেও ভেতরে লাইন বিচ্ছিন্ন হয়ে যায়।'
    ]
  },
  keyTakeaways: {
    en: [
      'MCBs provide reusable, calibrated overcurrent and short-circuit protection for electrical circuits.',
      'Dual tripping: bimetal strip handles long-term overloads; electromagnetic solenoid clears instantaneous short circuits.',
      'Always select MCB tripping curve (B, C, or D) based on the inrush characteristics of the connected electrical load.',
      'For human electrocution protection, always install a 30 mA RCCB in series with MCB branch protection.'
    ],
    hi: [
      'MCB परिपथों के लिए पुनः प्रयोज्य और सटीक ओवरलोड एवं शॉर्ट-सर्किट सुरक्षा प्रदान करती है।',
      'दोहरी सुरक्षा: बाई-मेटल पट्टी ओवरलोड संभालती है और सोलेनॉइड शॉर्ट-सर्किट को तुरंत काटता है।',
      'लोड की स्टार्टिंग धारा के आधार पर ही MCB का प्रकार (B, C या D) चुनें।',
      'बिजली के झटके से सुरक्षा के लिए हमेशा MCB के साथ 30 mA RCCB भी लगाएं।'
    ],
    bn: [
      'এমসিবি বৈদ্যুতিক লাইনের জন্য বারবার ব্যবহারযোগ্য ও নির্ভরযোগ্য শর্ট সার্কিট এবং ওভারলোড সুরক্ষা প্রদান করে।',
      'দ্বৈত ব্যবস্থা: বাইমেটাল স্ট্রিপ দীর্ঘস্থায়ী ওভারলোড নিয়ন্ত্রণ করে এবং সলিনয়েড তাৎক্ষণিক শর্ট সার্কিট বিচ্ছিন্ন করে।',
      'সংযুক্ত লোডের স্টার্টিং ইনরাশ কারেন্ট বিবেচনা করে সঠিক টাইপ (B, C বা D) নির্বাচন করুন।',
      'মানুষকে শকের হাত থেকে বাঁচাতে এমসিবির পাশাপাশি অবশ্যই ৩০ মিলিঅ্যাম্পিয়ার আরসিসিবি স্থাপন করুন।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch15-l05-01',
      question: {
        en: 'Which component inside a Miniature Circuit Breaker (MCB) is responsible for clearing moderate, sustained overloads?',
        hi: 'मिनिएचर सर्किट ब्रेकर (MCB) के अंदर कौन सा घटक मध्यम और लंबे समय तक चलने वाले ओवरलोड को ट्रिप करने के लिए जिम्मेदार है?',
        bn: 'মিনিয়েচার সার্কিট ব্রেকারের (MCB) অভ্যন্তরে কোন উপাদানটি দীর্ঘস্থায়ী সাধারণ ওভারলোড বিচ্ছিন্ন করার জন্য দায়ী?'
      },
      options: [
        { id: 'opt-1', text: { en: 'A calibrated bimetallic strip that deflects due to differential thermal expansion', hi: 'एक अंशांकित द्विधात्विक (बाय-मेटेलिक) पट्टी जो तापीय प्रसार के अंतर के कारण मुड़ती है', bn: 'একটি ক্যালিব্রেটেড বাইমেটালিক স্ট্রিপ যা তাপীয় প্রসারণ পার্থক্যের কারণে বেঁকে যায়' } },
        { id: 'opt-2', text: { en: 'A permanent ceramic magnet with zero resistance', hi: 'शून्य प्रतिरोध वाला एक स्थायी सिरेमिक चुंबक', bn: 'শূন্য রোধবিশিষ্ট একটি স্থায়ী সিরামিক চুম্বক' } },
        { id: 'opt-3', text: { en: 'A glass tube filled with carbon dioxide', hi: 'कार्बन डाइऑक्साइड से भरी कांच की नली', bn: 'কার্বন ডাই অক্সাইডে ভরা একটি কাঁচের টিউব' } },
        { id: 'opt-4', text: { en: 'A miniature digital clock timer', hi: 'एक छोटी डिजिटल घड़ी टाइमर', bn: 'একটি ডিজিটাল ঘড়ির ক্ষুদ্র টাইমার' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'The thermal bimetal strip heats up as current flows through it; differential thermal expansion between its two bonded metal layers causes it to bend and mechanically trip the latch on overloads.',
        hi: 'बाई-मेटेलिक पट्टी धारा बहने पर गर्म होती है और दो धातुओं के प्रसार अंतर के कारण मुड़कर ओवरलोड पर ट्रिप कराती है।',
        bn: 'কারেন্ট চলাকালে বাইমেটালিক স্ট্রিপ উত্তপ্ত হয় এবং দুটি ভিন্ন ধাতুর অসম প্রসারণের ফলে বেঁকে গিয়ে ওভারলোডে ব্রেকার ট্রিপ করায়।'
      }
    },
    {
      id: 'mcq-ch15-l05-02',
      question: {
        en: 'Which mechanism provides instantaneous tripping (within 3 to 10 ms) during a severe short-circuit fault in an MCB?',
        hi: 'MCB में गंभीर शॉर्ट-सर्किट फॉल्ट के दौरान तात्कालिक ट्रिपिंग (3 से 10 ms में) कौन सा तंत्र प्रदान करता है?',
        bn: 'মারাত্মক শর্ট সার্কিটে এমসিবিতে ৩ থেকে ১০ মিলিসেকেন্ডের মধ্যে তাৎক্ষণিক ট্রিপিং নিশ্চিত করে কোন ব্যবস্থা?'
      },
      options: [
        { id: 'opt-1', text: { en: 'A melting mercury pool', hi: 'पिघलने वाला पारा', bn: 'তরল পারদের আধার' } },
        { id: 'opt-2', text: { en: 'An electromagnetic solenoid coil whose magnetic field drives an armature plunger to strike the trip lever', hi: 'एक विद्युत चुम्बकीय सोलेनॉइड कॉइल जिसका चुंबकीय क्षेत्र प्लंजर को ट्रिप लीवर से टकराने के लिए प्रेरित करता है', bn: 'একটি ইলেক্ট্রোম্যাগনেটিক সলিনয়েড কয়েল যার চৌম্বক ক্ষেত্র একটি প্লাঞ্জারকে ধাক্কা দিয়ে ট্রিপ লিভারে আঘাত করে' } },
        { id: 'opt-3', text: { en: 'A hand-cranked gear reduction train', hi: 'हाथ से घुमाया जाने वाला गियर', bn: 'হাতে ঘোরানো গিয়ার ট্রেন' } },
        { id: 'opt-4', text: { en: 'A chemical battery expansion cell', hi: 'एक रासायनिक बैटरी सेल', bn: 'একটি রাসায়নিক ব্যাটারি সেল' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'The high short-circuit current produces a strong electromagnetic field in the solenoid that pulls the plunger forward instantaneously, physically driving open the contact mechanism.',
        hi: 'भारी शॉर्ट-सर्किट करंट सोलेनॉइड कॉइल में तीव्र चुंबकीय क्षेत्र बनाता है जो प्लंजर को तुरंत धक्का देकर सर्किट खोल देता है।',
        bn: 'তীব্র শর্ট সার্কিট কারেন্ট সলিনয়েডে শক্তিশালী চৌম্বক বল সৃষ্টি করে যা প্লাঞ্জারকে নিমেষেই ধাক্কা দিয়ে লাইন খুলে দেয়।'
      }
    },
    {
      id: 'mcq-ch15-l05-03',
      question: {
        en: 'According to IEC 60898, what is the instantaneous magnetic tripping current range for a Type C MCB with rated current In?',
        hi: 'IEC 60898 के अनुसार, रेटेड धारा In वाले टाइप C MCB के लिए तात्कालिक चुंबकीय ट्रिपिंग धारा सीमा क्या है?',
        bn: 'IEC 60898 মান অনুসারে রেটেড কারেন্ট In বিশিষ্ট একটি টাইপ সি এমসিবির তাৎক্ষণিক ম্যাগনেটিক ট্রিপিং রেঞ্জ কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '1 to 2 · In', hi: '1 से 2 · In', bn: '১ থেকে ২ · In' } },
        { id: 'opt-2', text: { en: '3 to 5 · In', hi: '3 से 5 · In', bn: '৩ থেকে ৫ · In' } },
        { id: 'opt-3', text: { en: '5 to 10 · In', hi: '5 से 10 · In', bn: '৫ থেকে ১০ · In' } },
        { id: 'opt-4', text: { en: '50 to 100 · In', hi: '50 से 100 · In', bn: '৫০ থেকে ১০০ · In' } }
      ],
      correctOptionId: 'opt-3',
      explanation: {
        en: 'Type C MCBs are calibrated to trip instantaneously between 5 · In and 10 · In, making them ideal for handling moderate inrush currents from inductive loads like motors and lighting banks.',
        hi: 'टाइप C MCB 5 से 10 गुना रेटेड धारा पर तात्कालिक ट्रिप होती है, जो मोटरों के शुरुआती करंट के लिए उपयुक्त है।',
        bn: 'টাইপ সি এমসিবি ৫ থেকে ১০ গুণ রেটেড কারেন্টে তাৎক্ষণিক ট্রিপ করে, যা মোটরের মতো ইন্ডাক্টিভ লোডের জন্য উপযুক্ত।'
      }
    },
    {
      id: 'mcq-ch15-l05-04',
      question: {
        en: 'Which type of MCB tripping characteristic is specifically designed for residential circuits with predominantly resistive loads and tungsten/LED lighting?',
        hi: 'मुख्य रूप से प्रतिरोधी लोड और टंगस्टन/LED लाइटिंग वाले आवासीय परिपथों के लिए किस प्रकार की MCB ट्रिपिंग विशेषता विशेष रूप से डिज़ाइन की गई है?',
        bn: 'আবাসিক ভবনে মূলত রেজিস্ট্যান্স লোড এবং লাইটিং সার্কিটের জন্য কোন ধরনের এমসিবি ট্রিপিং কার্ভ বিশেষভাবে নির্ধারিত?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Type B (trips at 3 to 5 · In)', hi: 'टाइप B (3 से 5 · In पर ट्रिप)', bn: 'টাইপ B (৩ থেকে ৫ · In এ ট্রিপ)' } },
        { id: 'opt-2', text: { en: 'Type D (trips at 10 to 20 · In)', hi: 'टाइप D (10 से 20 · In पर ट्रिप)', bn: 'টাইপ D (১০ থেকে ২০ · In এ ট্রিপ)' } },
        { id: 'opt-3', text: { en: 'Type X (trips at 50 · In)', hi: 'टाइप X (50 · In पर ट्रिप)', bn: 'টাইপ X (৫০ · In এ ট্রিপ)' } },
        { id: 'opt-4', text: { en: 'Type Z (trips at 0.5 · In)', hi: 'टाइप Z (0.5 · In पर ट्रिप)', bn: 'টাইপ Z (০.৫ · In এ ট্রিপ)' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Type B MCBs trip at 3 to 5 times rated current, providing fast and sensitive short-circuit protection for domestic installations without heavy inrush transients.',
        hi: 'टाइप B MCB 3 से 5 गुना रेटिंग पर ट्रिप होती है और बिना भारी इनरश करंट वाले घरेलू प्रतिष्ठानों के लिए सबसे सुरक्षित है।',
        bn: 'টাইপ বি এমসিবি ৩ থেকে ৫ গুণ রেটিংয়ে ট্রিপ করে এবং উচ্চ ইনরাশহীন সাধারণ গৃহস্থালি লাইনের জন্য সর্বোত্তম সুরক্ষা দেয়।'
      }
    },
    {
      id: 'mcq-ch15-l05-05',
      question: {
        en: 'How does an MCB arc chute (de-ion plates) extinguish an electrical arc formed between separating contacts?',
        hi: 'MCB आर्क चूट (डी-आयन प्लेट्स) अलग होते संपर्कों के बीच बनने वाले विद्युत आर्क को कैसे बुझाती है?',
        bn: 'এমসিবি আর্ক চুট কীভাবে সংযোগ বিচ্ছিন্নকালে উৎপন্ন বৈদ্যুতিক আর্ক নিভিয়ে ফেলে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'By spraying distilled water onto the copper contacts', hi: 'तांबे के संपर्कों पर आसुत जल का छिड़काव करके', bn: 'তামার কন্টাক্টের ওপর ডিস্টিল্ড ওয়াটার ছিটিয়ে' } },
        { id: 'opt-2', text: { en: 'By splitting the single arc into multiple small series arcs across metal plates, dramatically elevating arc voltage above system voltage to force current zero', hi: 'धातु की प्लेटों में एकल आर्क को कई छोटे श्रृंखला आर्कों में विभाजित करके, जिससे आर्क वोल्टेज सिस्टम वोल्टेज से अधिक हो जाता है', bn: 'ধাতব প্লেটের সাহায্যে একটি একক আর্ককে একাধিক ছোট সিরিজে বিভক্ত করে, যার ফলে মোট আর্ক ভোল্টেজ বেড়ে কারেন্ট নিভে যায়' } },
        { id: 'opt-3', text: { en: 'By heating the surrounding plastic until it melts over the contacts', hi: 'आसपास के प्लास्टिक को पिघलाकर संपर्कों पर गिराकर', bn: 'চারপাশের প্লাস্টিক গলিয়ে কন্টাক্ট ঢেকে দিয়ে' } },
        { id: 'opt-4', text: { en: 'By reversing the direction of gravity', hi: 'गुरुत्वाकर्षण की दिशा उलट कर', bn: 'মাধ্যাকর্ষণ দিক পরিবর্তন করে' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'The splitter plates divide the arc into several smaller arcs in series. Each gap introduces a cathode-anode sheath voltage drop (~20-25 V), building total arc voltage until it exceeds line voltage, quenching the arc.',
        hi: 'विभाजक प्लेटें आर्क को कई छोटी श्रृंखलाओं में बांटती हैं। इससे कुल आर्क वोल्टेज लाइन वोल्टेज से अधिक हो जाता है और आर्क बुझ जाता है।',
        bn: 'স্প্লিটার প্লেটগুলি আর্কটিকে বহু ক্ষুদ্র আর্কে বিভক্ত করে মোট আর্ক ভোল্টেজকে মেইনস ভোল্টেজের চেয়ে বাড়িয়ে দেয়, ফলে আর্ক নিভে যায়।'
      }
    },
    {
      id: 'mcq-ch15-l05-06',
      question: {
        en: 'What does the number "10000" enclosed in a rectangle on the front face of an MCB signify?',
        hi: 'MCB के सामने एक आयत में बंद संख्या "10000" क्या दर्शाती है?',
        bn: 'এমসিবির সামনের গায়ে একটি আয়তাকার বাক্সে লেখা "10000" সংখ্যাটি কী নির্দেশ করে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'The price of the MCB in cents', hi: 'सेंट में MCB की कीमत', bn: 'সেন্টে এমসিবির দাম' } },
        { id: 'opt-2', text: { en: 'Rated short-circuit breaking capacity of 10,000 Amperes (10 kA)', hi: '10,000 एम्पीयर (10 kA) की रेटेड शॉर्ट-सर्किट ब्रेकिंग क्षमता', bn: '১০,০০০ অ্যাম্পিয়ার (১০ kA) রেটেড শর্ট সার্কিট ব্রেকিং ক্যাপাসিটি' } },
        { id: 'opt-3', text: { en: 'The maximum operating altitude in meters', hi: 'मीटर में अधिकतम संचालन ऊंचाई', bn: 'মিটারে সর্বোচ্চ অপারেটিং উচ্চতা' } },
        { id: 'opt-4', text: { en: 'The date of manufacture (October 2000)', hi: 'निर्माण की तारीख (अक्टूबर 2000)', bn: 'উৎপাদনের তারিখ (অক্টোবর ২০০০)' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'Per IEC standards, the number in the box indicates the rated short-circuit breaking capacity in Amperes. [10000] indicates the MCB can safely clear a 10 kA fault.',
        hi: 'IEC मानकों के अनुसार, बॉक्स में संख्या एम्पीयर में रेटेड शॉर्ट-सर्किट ब्रेकिंग क्षमता दर्शाती है ([10000] = 10 kA)।',
        bn: 'IEC মান অনুসারে বাক্সের সংখ্যাটি অ্যাম্পিয়ারে শর্ট সার্কিট ব্রেকিং ক্যাপাসিটি প্রকাশ করে ([10000] = ১০ kA)।'
      }
    },
    {
      id: 'mcq-ch15-l05-07',
      question: {
        en: 'What is the "Trip-Free" mechanism safety feature found in all certified modern MCBs?',
        hi: 'सभी प्रमाणित आधुनिक MCB में पाई जाने वाली "ट्रिप-फ्री" तंत्र सुरक्षा विशेषता क्या है?',
        bn: 'সকল সার্টিফাইড আধুনিক এমসিবিতে বিদ্যমান "ট্রিপ-ফ্রি" মেকানিজমের নিরাপত্তা সুবিধা কী?'
      },
      options: [
        { id: 'opt-1', text: { en: 'The MCB is provided free of charge by the power utility', hi: 'MCB बिजली कंपनी द्वारा मुफ्त दी जाती है', bn: 'বিদ্যুৎ কোম্পানি বিনামূল্যে এমসিবি সরবরাহ করে' } },
        { id: 'opt-2', text: { en: 'The contacts will trip and isolate the circuit during a fault even if the operating toggle lever is held or locked in the ON position', hi: 'फॉल्ट के दौरान संपर्क खुल जाएंगे और परिपथ कट जाएगा, भले ही ऑपरेटिंग टॉगल लीवर को जबरन ON स्थिति में पकड़ कर या बांध कर रखा गया हो', bn: 'ফল্ট ঘটলে ভেতরের কন্টাক্ট বিচ্ছিন্ন হয়ে লাইন কেটে যাবে, এমনকি যদি বাইরের অন লিভারটিকে জোর করে বা টেপ দিয়ে আটকে রাখা হয়' } },
        { id: 'opt-3', text: { en: 'The MCB will never trip under any circumstance', hi: 'MCB किसी भी परिस्थिति में कभी ट्रिप नहीं होगी', bn: 'কোনো অবস্থাতেই এমসিবি ট্রিপ করবে না' } },
        { id: 'opt-4', text: { en: 'The user does not have to pay for replacement parts', hi: 'उपयोगकर्ता को पुर्जों के लिए भुगतान नहीं करना पड़ता', bn: 'রিসেটের জন্য কোনো চার্জ লাগে না' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'A trip-free mechanism ensures that internal contacts decouple from the external operating toggle during a fault, preventing unsafe manual override.',
        hi: 'ट्रिप-फ्री तंत्र यह सुनिश्चित करता है कि फॉल्ट होने पर आंतरिक संपर्क तुरंत खुल जाएं, चाहे किसी ने बाहरी लीवर को जबरन दबा कर ही क्यों न रखा हो।',
        bn: 'ট্রিপ-ফ্রি মেকানিজম নিশ্চিত করে যে ফল্ট ঘটলে লিভার জোরপূর্বক অন পজিশনে ধরে রাখলেও ভেতরের কন্টাক্ট সম্পূর্ণ বিচ্ছিন্ন হয়ে যাবে।'
      }
    },
    {
      id: 'mcq-ch15-l05-08',
      question: {
        en: 'Can a standard 16 A or 32 A MCB protect a human being against fatal electric shock from touching an energized 230 V live conductor?',
        hi: 'क्या एक मानक 16 A या 32 A MCB किसी व्यक्ति को 230 V के नंगे लाइव तार को छूने से लगने वाले जानलेवा बिजली के झटके से बचा सकती है?',
        bn: 'একটি সাধারণ ১৬ A বা ৩২ A এমসিবি কি কোনো মানুষকে সরাসরি ২৩০ V লাইভ তার স্পর্শজনিত প্রাণঘাতী শক থেকে রক্ষা করতে পারে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Yes, because MCBs trip instantly on all types of electrical events', hi: 'हाँ, क्योंकि MCB सभी प्रकार की विद्युत घटनाओं पर तुरंत ट्रिप होती है', bn: 'হ্যাঁ, কারণ এমসিবি সব ধরনের বৈদ্যুতিক ত্রুটিতে সাথে সাথে ট্রিপ করে' } },
        { id: 'opt-2', text: { en: 'No; human shock current through the body (approx. 50–200 mA) is hundreds of times too small to trigger the thermal or magnetic trip of an MCB (requires >16 A)', hi: 'नहीं; मानव शरीर से बहने वाला शॉक करंट (लगभग 50-200 mA) MCB को ट्रिप कराने के लिए आवश्यक करंट (>16 A) से सैकड़ों गुना कम होता है', bn: 'না; মানবদেহের মধ্য দিয়ে প্রবাহিত প্রাণঘাতী কারেন্ট (৫০-২০০ mA) এমসিবির ট্রিপিং কারেন্টের (>১৬ A) তুলনায় শত গুণ কম' } },
        { id: 'opt-3', text: { en: 'Yes, provided the person is wearing heavy leather boots', hi: 'हाँ, यदि व्यक्ति ने चमड़े के जूते पहने हों', bn: 'হ্যাঁ, যদি ব্যক্তি চামড়ার জুতো পরে থাকেন' } },
        { id: 'opt-4', text: { en: 'Yes, if the room humidity is below 10%', hi: 'हाँ, यदि कमरे की नमी 10% से कम हो', bn: 'হ্যাঁ, যদি ঘরের আর্দ্রতা ১০% এর কম থাকে' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'Human body shock current at 230 V is typically 50 to 200 mA (0.05 to 0.2 A). An MCB rated at 16 A requires at least 18-20 A to trip thermally and 48-80 A to trip magnetically. Human protection requires a 30 mA RCCB.',
        hi: 'बिजली के झटके का करंट 50 से 200 mA (0.05-0.2 A) होता है, जबकि 16 A MCB को ट्रिप होने के लिए कम से कम 18-48 A चाहिए। अतः झटके से सुरक्षा के लिए 30 mA RCCB अनिवार्य है।',
        bn: '২৩০ ভোল্টে মানবদেহের শক কারেন্ট মাত্র ৫০-২০০ মিলিঅ্যাম্পিয়ার। ১৬ A এমসিবি ট্রিপ করাতে ন্যূনতম ১৮-৮০ অ্যাম্পিয়ার লাগে। মানব সুরক্ষায় ৩০ mA আরসিসিবি অত্যাবশ্যক।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch15-l05-01',
      question: {
        en: 'Compare the operating characteristics and appropriate application domains of Type B, Type C, and Type D MCBs.',
        hi: 'टाइप B, टाइप C और टाइप D MCB की संचालन विशेषताओं और उपयुक्त अनुप्रयोग क्षेत्रों की तुलना कीजिए।',
        bn: 'টাইপ B, টাইপ C এবং টাইপ D এমসিবির কার্যপ্রণালী ও উপযুক্ত প্রয়োগক্ষেত্রের তুলনামূলক আলোচনা করুন।'
      },
      hint: {
        en: 'State the magnetic trip multiplier ranges (3-5 In, 5-10 In, 10-20 In) and connect each to resistive, moderate inductive, and heavy transformer/welder loads.',
        hi: 'चुंबकीय ट्रिप गुणक सीमाएं (3-5 In, 5-10 In, 10-20 In) और उनके संगत लोड (घरेलू, मोटर, ट्रांसफार्मर) बताएं।',
        bn: 'ম্যাগনেটিক ট্রিপ রেঞ্জ (৩-৫ In, ৫-১০ In, ১০-২০ In) উল্লেখ করে তাদের উপযুক্ত লোডের সাথে মেলান।'
      }
    },
    {
      id: 'pq-ch15-l05-02',
      question: {
        en: 'A commercial fluorescent lighting bank draws a steady-state current of 18 A, but upon turn-on, the electronic ballasts create an initial inrush current spike of 130 A lasting for 25 ms. Determine whether a 20 A Type B or a 20 A Type C MCB is required.',
        hi: 'एक वाणिज्यिक फ्लोरोसेंट लाइटिंग बैंक 18 A की स्थिर धारा लेता है, लेकिन चालू करने पर 25 ms के लिए 130 A का इनरश करंट स्पाइक पैदा करता है। निर्धारित कीजिए कि 20 A टाइप B या 20 A टाइप C MCB की आवश्यकता है।',
        bn: 'একটি বাণিজ্যিক লাইটিং ব্যাংক ১৮ A কারেন্ট নেয়, তবে চালুর মুহূর্তে ২৫ মিলিসেকেন্ড স্থায়ী ১৩০ A ইনরাশ কারেন্ট সৃষ্টি করে। ২০ A টাইপ B নাকি ২০ A টাইপ C এমসিবি প্রয়োজন?'
      },
      hint: {
        en: 'Type B magnetic upper limit: 5 × 20 = 100 A. Since 130 A > 100 A, Type B will nuisance trip. Type C range: 5-10 × 20 = 100-200 A. 130 A falls safely within Type C.',
        hi: 'टाइप B सीमा = 5 × 20 = 100 A। 130 A > 100 A होने से यह ट्रिप हो जाएगी। टाइप C सीमा 100-200 A है, अतः टाइप C उपयुक्त है।',
        bn: 'টাইপ বি সর্বোচ্চ সীমা = ৫ × ২০ = ১০০ A। ১৩০ A > ১০০ A হওয়ায় এটি ট্রিপ করবে। টাইপ সি সীমা ১০০-২০০ A, তাই টাইপ সি আবশ্যক।'
      }
    }
  ]
};
'''

with open('src/data/chapter15Lesson5.ts', 'w', encoding='utf-8') as f:
  f.write(lesson5_code)

print("Created src/data/chapter15Lesson5.ts")
