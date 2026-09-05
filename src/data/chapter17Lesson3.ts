import { Lesson } from '../types';

export const LESSON_OVERCURRENT_COORDINATION: Lesson = {
  id: 'lsn-ch17-overcurrent-relay-coordination',
  topicId: 'tp-ch17-overcurrent-relay-coordination',
  chapterId: 'ch-advanced-power-system-protection',
  order: 3,
  title: {
    en: 'Overcurrent Protection and Relay Coordination',
    hi: 'अतिधारा सुरक्षा एवं रिले समन्वय',
    bn: 'ওভারকারেন্ট সুরক্ষা ও রিলে সমন্বয়'
  },
  description: {
    en: 'Mathematical formulation and engineering application of time-graded overcurrent protection: IEC 60255 characteristics (Standard, Very, Extremely Inverse), Plug Setting Multiplier (PSM), Time Multiplier Setting (TMS), Coordination Time Interval (CTI) grading, directional overcurrent (ANSI 67/67N), and ring main feeder protection.',
    hi: 'समय-ग्रेडेड अतिधारा सुरक्षा का गणितीय निरूपण और इंजीनियरिंग अनुप्रयोग: IEC 60255 विशेषताएँ (मानक, अति, अत्यंत व्युत्क्रम), प्लग सेटिंग मल्टीप्लायर (PSM), टाइम मल्टीप्लायर सेटिंग (TMS), समन्वय समय अंतराल (CTI) ग्रेडिंग, दिशात्मक अतिधारा (ANSI 67/67N), और रिंग मेन फीडर सुरक्षा।',
    bn: 'টাইম-গ্রেডেড ওভারকারেন্ট সুরক্ষার গাণিতিক সূত্র ও ইঞ্জিনিয়ারিং প্রয়োগ: IEC 60255 বৈশিষ্ট্য (স্ট্যান্ডার্ড, ভেরি, এক্সট্রিমলি ইনভার্স), প্লাগ সেটিং মাল্টিপ্লায়ার (PSM), টাইম মাল্টিপ্লায়ার সেটিং (TMS), কোঅর্ডিনেশন টাইম ইন্টারভাল (CTI) গ্রেডিং, ডিরেকশনাল ওভারকারেন্ট (ANSI 67/67N) এবং রিং মেইন ফিডার সুরক্ষা।'
  },
  estimatedMinutes: 50,
  easyExplanation: {
    en: 'Radial and interconnected distribution feeders are protected by Inverse Definite Minimum Time (IDMT) relays. The term "inverse" means that the higher the fault current, the faster the relay trips. When multiple circuit breakers are connected in series along a distribution feeder line from the source to distant consumers, they must be coordinated in time. If a short circuit occurs at the farthest end of the line, only the breaker immediately upstream of the fault should open, while the upstream substation breakers wait patiently. If the downstream breaker fails to open, the upstream breaker trips after a predetermined safety delay (the Coordination Time Interval, typically 0.3 seconds). To achieve this coordination, protection engineers configure two vital relay settings: the Plug Setting (current sensitivity) and the Time Multiplier Setting (TMS, speed scaling factor).',
    hi: 'वितरण फीडरों को इनवर्स डेफिनिट मिनिमम टाइम (IDMT) रिले द्वारा संरक्षित किया जाता है। "इनवर्स" का अर्थ है कि फॉल्ट करंट जितना अधिक होगा, रिले उतनी ही तेजी से ट्रिप करेगा। जब ग्रिड में कई सर्किट ब्रेकर एक के बाद एक श्रेणी (सीरीज) में जुड़े होते हैं, तो उन्हें समय के अनुसार समन्वित किया जाना चाहिए। यदि लाइन के अंतिम छोर पर कोई फॉल्ट होता है, तो केवल उसी फॉल्ट के सबसे नजदीकी ब्रेकर को खुलना चाहिए, जबकि मुख्य सबस्टेशन के ब्रेकर इंतजार करते हैं। यदि निचला ब्रेकर विफल हो जाता है, तो ऊपरी ब्रेकर 0.3 सेकंड के सुरक्षा अंतराल (CTI) के बाद बैकअप के रूप में ट्रिप करता है।',
    bn: 'ডিস্ট্রিবিউশন ফিডারগুলো সাধারণত ইনভার্স ডেফিনিট মিনিমাম টাইম (IDMT) রিলে দ্বারা সুরক্ষিত থাকে। "ইনভার্স" এর অর্থ হলো ফল্ট কারেন্ট যত বেশি হবে, রিলে তত দ্রুত ট্রিপ করবে। সোর্স থেকে গ্রাহক পর্যন্ত একাধিক সার্কিট ব্রেকার সিরিজে যুক্ত থাকলে তাদের মাঝে সময়ের সঠিক সমন্বয় প্রয়োজন। লাইনের শেষ প্রান্তে ফল্ট হলে যেন কেবল ফল্টের সবচেয়ে কাছের ব্রেকারটি খোলে এবং আপস্ট্রিম সাবস্টেশনের ব্রেকারগুলো শান্ত থাকে। তবে কাছের ব্রেকারটি ব্যর্থ হলে আপস্ট্রিম ব্রেকার ০.৩ সেকেন্ড (CTI) ব্যাকআপ সময় পর ট্রিপ করবে।'
  },
  detailedExplanation: {
    en: 'Overcurrent protection is the workhorse of power distribution networks (IEC 60255 / IEEE C37.112):\n\n1. IEC Standard IDMT Tripping Curves:\nThe general mathematical operating time formula is:\nt = TMS * [ k / ((I / I_pickup)^alpha - 1) ]\nwhere:\n• Standard Inverse (SI): k = 0.14, alpha = 0.02 (Gradual curve; standard for general utility distribution).\n• Very Inverse (VI): k = 13.5, alpha = 1.0 (Steeper curve; ideal where fault current drops substantially with line distance).\n• Extremely Inverse (EI): k = 80.0, alpha = 2.0 (Mirrors thermal I²t withstand of transformers and cables; excellent for high inrush loads and grading with fuses).\n• Long-Time Inverse: k = 120.0, alpha = 1.0 (Used for motor thermal and neutral earthing resistor protection).\n\n2. Key Operational Parameters:\n• Plug Setting (PS): Primary pickup current threshold = Plug Setting % * CT Primary Rating.\n• Plug Setting Multiplier (PSM): Ratio of actual primary fault current to relay pickup current:\nPSM = I_fault / (Plug_Setting * CT_primary) = I_secondary / (Plug_Setting * CT_secondary)\n• Time Multiplier Setting (TMS): Scales the operating time curve vertically between 0.05 and 1.0 to achieve precise discrimination.\n\n3. Coordination Time Interval (CTI):\nTo prevent race conditions and miscoordination between series breakers, the upstream relay time (t_upstream) must exceed downstream clearing time by CTI:\nCTI = t_breaker + t_overshoot + t_relay_error + t_safety_margin\nTypical CTI values: 0.35 to 0.40 s for electromechanical relays; 0.20 to 0.25 s for modern numerical relays.\n\n4. Directional Overcurrent Protection (ANSI 67 / 67N):\nIn ring main systems and parallel feeders, current can flow in either direction. Non-directional relays would cause widespread blackouts for single feeder faults. Directional relays incorporate a Voltage Transformer (VT) polarizing input to compute the phase angle between fault current and voltage (using Maximum Torque Angle, MTA ≈ 30° to 45° for phase faults and 60° to 70° for ground faults). The relay trips only when fault current flows into the protected feeder away from the busbar.',
    hi: 'अतिधारा रिले समन्वय के मुख्य सिद्धांत:\n1. IEC 60255 IDMT वक्र सूत्र: t = TMS * [ k / ((I / I_pickup)^alpha - 1) ]\n• स्टैंडर्ड इनवर्स: k = 0.14, alpha = 0.02\n• वेरी इनवर्स: k = 13.5, alpha = 1.0\n• एक्सट्रीमली इनवर्स: k = 80.0, alpha = 2.0 (I²t थर्मल सीमा से मेल खाता है)\n2. प्लग सेटिंग मल्टीप्लायर (PSM): PSM = फॉल्ट धारा / (प्लग सेटिंग * CT प्राइमरी)\n3. समन्वय समय अंतराल (CTI): आधुनिक न्यूमेरिकल रिले के लिए 0.25 से 0.30 सेकंड का अंतर अनिवार्य है ताकि गलत ट्रिपिंग न हो।\n4. दिशात्मक रिले (ANSI 67): रिंग मेन और समानांतर फीडरों में, रिले केवल तभी ट्रिप करता है जब फॉल्ट धारा बसबार से बाहर लाइन की ओर बहती है।',
    bn: 'ওভারকারেন্ট রিলে কোঅর্ডিনেশনের মূল দিকসমূহ:\n১. IEC 60255 IDMT ট্রিপিং কার্ভ: t = TMS * [ k / ((I / I_pickup)^alpha - 1) ]\n• স্ট্যান্ডার্ড ইনভার্স: k = 0.14, alpha = 0.02\n• ভেরি ইনভার্স: k = 13.5, alpha = 1.0\n• এক্সট্রিমলি ইনভার্স: k = 80.0, alpha = 2.0 (তার ও ট্রান্সফরমারের I²t তাপীয় সহনশীলতার সাথে সঙ্গতিপূর্ণ)\n২. প্লাগ সেটিং মাল্টিপ্লায়ার (PSM) = ফল্ট কারেন্ট / পিকআপ কারেন্ট\n৩. সমন্বয় সময় ব্যবধান (CTI): দুটি ধারাবাহিক রিলের মধ্যে ০.২৫-০.৩০ সেকেন্ডের মার্জিন রাখা হয়।\n৪. ডিরেকশনাল ওভারকারেন্ট (ANSI 67): রিং মেইন গ্রিডে বিদ্যুৎ প্রবাহের দিক নির্ধারণ করে কেবল নির্ধারিত দিকের ফল্টেই ট্রিপ করে।'
  },
  formulas: [
    {
      id: 'f-ch17-iec-idmt',
      symbol: 't_{trip}',
      expression: 't = TMS \\cdot \\frac{k}{\\left(\\frac{I}{I_s}\\right)^\\alpha - 1}',
      title: {
        en: 'IEC 60255 IDMT Operating Time Formula',
        hi: 'IEC 60255 IDMT ऑपरेटिंग समय सूत्र',
        bn: 'IEC 60255 IDMT অপারেটিং সময় সূত্র'
      },
      description: {
        en: 'Calculates the trip time of an inverse-time overcurrent relay as a function of fault current ratio and time multiplier setting.',
        hi: 'फॉल्ट करंट अनुपात और टाइम मल्टीप्लायर सेटिंग के आधार पर रिले के ट्रिप समय की गणना करता है।',
        bn: 'ফল্ট কারেন্ট অনুপাত এবং টাইম মাল্টিপ্লায়ার সেটিংয়ের ভিত্তিতে রিলের ট্রিপ সময় নির্ণয় করে।'
      },
      variables: [
        { symbol: 't', name: { en: 'Operating trip time (seconds)', hi: 'ऑपरेटिंग समय (सेकंड)', bn: 'অপারেটিং সময় (সেকেন্ড)' } },
        { symbol: 'TMS', name: { en: 'Time Multiplier Setting (0.05 to 1.0)', hi: 'टाइम मल्टीप्लायर सेटिंग', bn: 'টাইম মাল্টিপ্লায়ার সেটিং' } },
        { symbol: 'I/I_s', name: { en: 'Plug Setting Multiplier (PSM = If / I_pickup)', hi: 'प्लग सेटिंग मल्टीप्लायर (PSM)', bn: 'প্লাগ সেটিং মাল্টিপ্লায়ার (PSM)' } },
        { symbol: 'k, \\alpha', name: { en: 'Curve constants (SI: k=0.14, a=0.02; VI: k=13.5, a=1.0; EI: k=80, a=2.0)', hi: 'वक्र स्थिरांक', bn: 'কার্ভ কনস্ট্যান্ট' } }
      ]
    },
    {
      id: 'f-ch17-psm',
      symbol: 'PSM',
      expression: 'PSM = \\frac{I_{fault,primary}}{\\text{Plug Setting} \\times I_{CT,primary}}',
      title: {
        en: 'Plug Setting Multiplier Formula',
        hi: 'प्लग सेटिंग मल्टीप्लायर सूत्र',
        bn: 'প্লাগ সেটিং মাল্টিপ্লায়ার সূত্র'
      },
      description: {
        en: 'Defines the multiple by which the fault current exceeds the continuous operating pickup threshold of the relay.',
        hi: 'यह निर्धारित करता है कि फॉल्ट करंट रिले के पिकअप थ्रेशोल्ड से कितने गुना अधिक है।',
        bn: 'ফল্ট কারেন্ট রিলের পিকআপ কারেন্টের কত গুণ তা প্রকাশ করে।'
      },
      variables: [
        { symbol: 'PSM', name: { en: 'Plug Setting Multiplier (dimensionless)', hi: 'प्लग सेटिंग मल्टीप्लायर', bn: 'প্লাগ সেটিং মাল্টিপ্লায়ার' } },
        { symbol: 'I_{fault,primary}', name: { en: 'Prospective primary fault current (A)', hi: 'प्राथमिक फॉल्ट धारा (A)', bn: 'প্রাইমারি ফল্ট কারেন্ট (A)' } },
        { symbol: 'I_{CT,primary}', name: { en: 'CT primary rated current (A)', hi: 'CT प्राथमिक रेटेड धारा (A)', bn: 'সিটি প্রাইমারি রেটেড কারেন্ট (A)' } }
      ]
    }
  ],
  keyPoints: [
    {
      en: 'The IEC Standard Inverse curve (k=0.14, a=0.02) provides standard coordination across distribution radial networks.',
      hi: 'IEC स्टैंडर्ड इनवर्स वक्र (k=0.14, a=0.02) वितरण नेटवर्क में मानक समन्वय प्रदान करता है।',
      bn: 'IEC স্ট্যান্ডার্ড ইনভার্স কার্ভ ডিস্ট্রিবিউশন রেডিয়াল লাইনের সুরক্ষায় সর্বাধিক ব্যবহৃত হয়।'
    },
    {
      en: 'The Extremely Inverse curve (k=80, a=2.0) matches cable and transformer thermal damage curves (I²t) and coordinates cleanly with power fuses.',
      hi: 'एक्सट्रीमली इनवर्स वक्र (k=80, a=2.0) केबल और ट्रांसफार्मर की I²t थर्मल सीमा से मेल खाता है और फ़्यूज़ के साथ अच्छी तरह समन्वय करता है।',
      bn: 'এক্সট্রিমলি ইনভার্স কার্ভ ক্যাবল ও ট্রান্সফরমারের I²t তাপীয় ক্ষতির সাথে নিখুঁতভাবে সমন্বয় করে।'
    },
    {
      en: 'A minimum Coordination Time Interval (CTI = 0.25 to 0.35 s) prevents upstream relays from racing and false-tripping before downstream breakers clear the arc.',
      hi: 'न्यूनतम समन्वय समय अंतराल (CTI = 0.25 से 0.35 s) डाउनस्ट्रीम ब्रेकर द्वारा आर्क बुझाने से पहले अपस्ट्रीम रिले को गलत ट्रिपिंग से रोकता है।',
      bn: 'ন্যূনতম ০.২৫ থেকে ০.৩৫ সেকেন্ডের কোঅর্ডিনেশন টাইম ইন্টারভাল (CTI) আপস্ট্রিম রিলের অপ্রয়োজনীয় ট্রিপ প্রতিরোধ করে।'
    },
    {
      en: 'Directional overcurrent relays (ANSI 67) utilize voltage phase polarization to discriminate between forward in-zone and reverse out-of-zone fault currents.',
      hi: 'दिशात्मक अतिधारा रिले (ANSI 67) आगे के इन-ज़ोन और पीछे के आउट-ऑफ-ज़ोन फॉल्ट में भेद करने के लिए वोल्टेज ध्रुवीकरण का उपयोग करते हैं।',
      bn: 'ডিরেকশনাল ওভারকারেন্ট রিলে (ANSI 67) ভোল্টেজ পোলারাইজেশনের সাহায্যে ফল্ট কারেন্টের দিক নিখুঁতভাবে শনাক্ত করে।'
    }
  ],
  schematics: [
    {
      id: 'sch-ch17-l03-01',
      title: {
        en: 'Radial Feeder IDMT Time-Current Grading & Directional Ring Main Protection',
        hi: 'रेडियल फीडर IDMT टाइम-करंट ग्रेडिंग एवं दिशात्मक रिंग मेन सुरक्षा',
        bn: 'রেডিয়াল ফিডার IDMT টাইম-কারেন্ট গ্রেডিং ও ডিরেকশনাল রিং মেইন সুরক্ষা'
      },
      content: {
        en: 'The schematic diagrams two critical architectures: (1) A three-substation radial feeder showing the progressive time discrimination margins (CTI = 0.3 s) from the load back to the main generating substation, and (2) A closed ring-main distribution loop demonstrating why directional relays (ANSI 67) pointing away from buses are mandatory to isolate single faulted sections without de-energizing other substations.',
        hi: 'यह आरेख दो महत्वपूर्ण संरचनाओं को दिखाता है: (1) एक तीन-सबस्टेशन रेडियल फीडर जो लोड से स्रोत तक समय समन्वय (CTI = 0.3 s) दिखाता है, और (2) एक बंद रिंग-मेन लूप जिसमें दिशात्मक रिले (67) की आवश्यकता दिखाई गई है।',
        bn: 'এই ডায়াগ্রামে দুটি প্রধান স্কিম দেখানো হয়েছে: (১) ৩টি সাবস্টেশনের রেডিয়াল ফিডারে সময়ের ক্রমান্বয়ে গ্রেডিং (CTI = ০.৩ s), এবং (২) রিং-মেইন সিস্টেমে ডিরেকশনাল রিলে (ANSI 67) এর মাধ্যমে ত্রুটিপূর্ণ ফিডার আলাদা করার কৌশল।'
      },
      schematicId: 'sch-ch17-overcurrent-relay-coordination'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch17-l03-01',
      problem: {
        en: 'A 400/5 A CT feeds an IEC Standard Inverse overcurrent relay set at 125% plug setting. A fault current of 4000 A flows through the primary. Calculate: (a) The Plug Setting Multiplier (PSM), (b) The nominal operating time at TMS = 1.0, and (c) The actual trip time if the relay TMS is set to 0.25.',
        hi: 'एक 400/5 A CT 125% प्लग सेटिंग पर सेट IEC स्टैंडर्ड इनवर्स ओवरकरेंट रिले को फीड करता है। प्राइमरी से 4000 A की फॉल्ट धारा बहती है। गणना करें: (a) PSM, (b) TMS = 1.0 पर ऑपरेटिंग समय, और (c) यदि TMS = 0.25 पर सेट है तो वास्तविक ट्रिप समय।',
        bn: 'একটি ৪০০/৫ A সিটি ১২৫% প্লাগ সেটিংয়ে থাকা IEC স্ট্যান্ডার্ড ইনভার্স রিলের সাথে যুক্ত। প্রাইমারিতে ৪০০০ A ফল্ট কারেন্ট প্রবাহিত হয়। নির্ণয় করুন: (a) PSM, (b) TMS = ১.০ এ অপারেটিং সময়, এবং (c) TMS = ০.২৫ এ প্রকৃত ট্রিপ সময়।'
      },
      solution: {
        en: 'Given:\n• CT Ratio = 400/5 A (CT_primary = 400 A)\n• Plug Setting PS = 125% = 1.25\n• Primary Fault Current I_fault = 4000 A\n• IEC Standard Inverse constants: k = 0.14, alpha = 0.02\n\nStep 1: Calculate relay pickup current (I_pickup):\nI_pickup,primary = PS * CT_primary = 1.25 * 400 A = 500 A\n\nStep 2: Calculate Plug Setting Multiplier (PSM):\nPSM = I_fault / I_pickup,primary = 4000 A / 500 A = 8.0\n\nStep 3: Calculate nominal operating time at TMS = 1.0:\nt(TMS=1.0) = 0.14 / (PSM^0.02 - 1)\nPSM^0.02 = 8.0^0.02 = 1.04256\nDenominator = 1.04256 - 1 = 0.04256\nt(TMS=1.0) = 0.14 / 0.04256 = 3.289 seconds\n\nStep 4: Calculate actual trip time at TMS = 0.25:\nt_actual = TMS * t(TMS=1.0) = 0.25 * 3.289 s = 0.822 seconds',
        hi: 'चरण 1: पिकअप करंट = 1.25 * 400 = 500 A\nचरण 2: PSM = 4000 / 500 = 8.0\nचरण 3: t(TMS=1) = 0.14 / (8^0.02 - 1) = 0.14 / 0.04256 = 3.289 s\nचरण 4: t(TMS=0.25) = 0.25 * 3.289 = 0.822 सेकंड',
        bn: 'ধাপ ১: পিকআপ কারেন্ট = ১.২৫ * ৪০০ = ৫০০ A\nধাপ ২: PSM = ৪০০০ / ৫০০ = ৮.০\nধাপ ৩: t(TMS=১) = ০.১৪ / (৮^০.০২ - ১) = ৩.২৮৯ সেকেন্ড\nধাপ ৪: t(TMS=০.২৫) = ০.২৫ * ৩.২৮৯ = ০.৮২২ সেকেন্ড'
      },
      givenValues: { 'CT': '400/5 A', 'PS': '125%', 'If': '4000 A', 'TMS': '0.25' },
      finalAnswer: {
        en: 'PSM = 8.0, t(TMS=1.0) = 3.29 s, Actual Trip Time = 0.822 s',
        hi: 'PSM = 8.0, t(TMS=1.0) = 3.29 s, वास्तविक ट्रिप समय = 0.822 s',
        bn: 'PSM = ৮.০, t(TMS=১.০) = ৩.২৯ s, প্রকৃত ট্রিপ সময় = ০.৮২২ s'
      }
    },
    {
      id: 'ex-ch17-l03-02',
      problem: {
        en: 'In a radial distribution feeder, downstream Relay B clears a maximum fault in 0.45 seconds. Upstream Relay A has an IEC Standard Inverse curve with a calculated PSM of 10.0 for this fault. If the required Coordination Time Interval (CTI) between Relay A and Relay B is 0.35 seconds, determine the required Time Multiplier Setting (TMS) for Relay A.',
        hi: 'एक रेडियल वितरण फीडर में, डाउनस्ट्रीम रिले B अधिकतम फॉल्ट को 0.45 सेकंड में साफ करता है। अपस्ट्रीम रिले A का PSM 10.0 है (स्टैंडर्ड इनवर्स)। यदि आवश्यक CTI 0.35 सेकंड है, तो रिले A के लिए आवश्यक TMS ज्ञात कीजिए।',
        bn: 'একটি রেডিয়াল ডিস্ট্রিবিউশন ফিডারে ডাউনস্ট্রিম রিলে B ফল্ট ০.৪৫ সেকেন্ডে দূর করে। আপস্ট্রিম রিলে A এর PSM হলো ১০.০ (স্ট্যান্ডার্ড ইনভার্স)। প্রয়োজনীয় CTI ০.৩৫ সেকেন্ড হলে রিলে A এর TMS কত সেট করতে হবে?'
      },
      solution: {
        en: 'Step 1: Determine the required total operating time of upstream Relay A:\nt_A = t_B + CTI = 0.45 s + 0.35 s = 0.80 seconds\n\nStep 2: Calculate operating time of Relay A at TMS = 1.0 for PSM = 10.0:\nFormula: t(TMS=1.0) = 0.14 / (PSM^0.02 - 1)\nPSM^0.02 = 10.0^0.02 = 1.04713\nDenominator = 1.04713 - 1 = 0.04713\nt(TMS=1.0) = 0.14 / 0.04713 = 2.9705 seconds\n\nStep 3: Solve for required TMS of Relay A:\nt_A = TMS_A * t(TMS=1.0)\nTMS_A = t_A / t(TMS=1.0) = 0.80 s / 2.9705 s = 0.2693\n\nPractical Setting: In practice, set TMS_A = 0.27 (or round up to 0.275 according to numerical relay step resolution).',
        hi: 'चरण 1: रिले A का आवश्यक समय = 0.45 + 0.35 = 0.80 s\nचरण 2: t(TMS=1) = 0.14 / (10^0.02 - 1) = 2.971 s\nचरण 3: TMS_A = 0.80 / 2.971 = 0.2693 ≈ 0.27',
        bn: 'ধাপ ১: আপস্ট্রিম রিলে A এর প্রয়োজনীয় সময় = ০.৪৫ + ০.৩৫ = ০.৮০ s\nধাপ ২: t(TMS=১) = ০.১৪ / (১০^০.০২ - ১) = ২.৯৭১ s\nধাপ ৩: TMS_A = ০.৮০ / ২.৯৭১ = ০.২৬৯৩ ≈ ০.২৭'
      },
      givenValues: { 't_B': '0.45 s', 'CTI': '0.35 s', 'PSM_A': '10.0' },
      finalAnswer: {
        en: 'Required TMS for Relay A = 0.27',
        hi: 'रिले A के लिए आवश्यक TMS = 0.27',
        bn: 'রিলে A এর জন্য প্রয়োজনীয় TMS = ০.২৭'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Grading 11 kV and 33 kV urban utility distribution feeders with auto-reclosers and sectionalizers.',
      'Configuring directional overcurrent relays (ANSI 67/67N) on closed-loop municipal ring mains.',
      'Protecting captive generator interconnects and large industrial motor feed breakers against sustained overload and short circuits.'
    ],
    hi: [
      'ऑटो-रिक्लोसर और सेक्शनलाइज़र के साथ 11 kV और 33 kV शहरी फीडरों की ग्रेडिंग।',
      'क्लोज्ड-लूप रिंग मेन पर दिशात्मक ओवरकरेंट रिले (ANSI 67/67N) का विन्यास।',
      'कैप्टिव जनरेटर और बड़े औद्योगिक मोटरों को शॉर्ट सर्किट से बचाना।'
    ],
    bn: [
      '১১ kV ও ৩৩ kV ডিস্ট্রিবিউশন ফিডারে অটো-রিক্লোজার ও রিলে সমন্বয়।',
      'রিং-মেইন ডিস্ট্রিবিউশন নেটওয়ার্কে ডিরেকশনাল ওভারকারেন্ট রিলে (ANSI 67/67N) সেটিং।',
      'শিল্প-কারখানার হেভি মোটর ও জেনারেটরের ওভারকারেন্ট সুরক্ষা নিশ্চিতকরণ।'
    ]
  },
  commonMistakes: {
    en: [
      'Using an insufficient Coordination Time Interval (CTI < 0.2 s), leading to simultaneous tripping of both upstream and downstream breakers.',
      'Applying non-directional relays in closed ring-main systems, which causes the entire ring to trip out for a single branch fault.',
      'Confusing Plug Setting Multiplier (PSM) with Time Multiplier Setting (TMS).'
    ],
    hi: [
      'अपर्याप्त CTI (<0.2 s) का उपयोग करना, जिससे दोनों ब्रेकर एक साथ ट्रिप हो जाते हैं।',
      'रिंग मेन में गैर-दिशात्मक रिले लगाना, जिससे एक ही फॉल्ट पर पूरा रिंग बंद हो जाता है।',
      'PSM और TMS को एक ही समझ लेना।'
    ],
    bn: [
      'পর্যাপ্ত CTI (< ০.২ s) না রাখা, যার ফলে ত্রুটিযুক্ত ব্রেকারের সাথে আপস্ট্রিম ব্রেকারও ভুলবশত ট্রিপ করে।',
      'রিং মেইন সিস্টেমে নন-ডিরেকশনাল রিলে ব্যবহার করা, যার ফলে একটিমাত্র ফল্টে পুরো রিং বন্ধ হয়ে যায়।',
      'PSM এবং TMS এর ধারণার মধ্যে বিভ্রান্তি তৈরি করা।'
    ]
  },
  keyTakeaways: {
    en: [
      'IDMT characteristics provide an inverse relationship between fault severity and tripping duration.',
      'Coordination Time Interval (CTI = 0.25 to 0.35 s) ensures safe backup grading without cascading false trips.',
      'Directional relays (ANSI 67) are indispensable for ring-main and multi-source distribution systems.'
    ],
    hi: [
      'IDMT वक्र फॉल्ट करंट और ट्रिपिंग समय के बीच व्युत्क्रम संबंध प्रदान करते हैं।',
      'समन्वय समय अंतराल (CTI = 0.25 से 0.35 s) सुरक्षित बैकअप ग्रेडिंग सुनिश्चित करता है।',
      'दिशात्मक रिले (ANSI 67) रिंग-मेन और बहु-स्रोत वितरण प्रणालियों के लिए अपरिहार्य हैं।'
    ],
    bn: [
      'IDMT বৈশিষ্ট্যের মাধ্যমে ফল্ট কারেন্টের পরিমাণের সাথে ট্রিপিং সময়ের ব্যস্তানুপাতিক সম্পর্ক নিশ্চিত হয়।',
      'কোঅর্ডিনেশন টাইম ইন্টারভাল (CTI) নিরাপদ ব্যাকআপ নিশ্চিত করে সিস্টেমকে ব্ল্যাকআউট থেকে বাঁচায়।',
      'মাল্টি-সোর্স এবং রিং-মেইন সিস্টেমে ডিরেকশনাল রিলে (ANSI 67) অপরিহার্য।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch17-l03-01',
      question: {
        en: 'What is the mathematical definition of the Plug Setting Multiplier (PSM) of an overcurrent relay?',
        hi: 'अतिधारा रिले के प्लग सेटिंग मल्टीप्लायर (PSM) की गणितीय परिभाषा क्या है?',
        bn: 'ওভারকারেন্ট রিলের প্লাগ সেটিং মাল্টিপ্লায়ার (PSM)-এর গাণিতিক সংজ্ঞা কী?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Fault current divided by (Plug Setting * CT primary rating)', hi: 'फॉल्ट धारा / (प्लग सेटिंग * CT प्राइमरी रेटिंग)', bn: 'ফল্ট কারেন্ট / (প্লাগ সেটিং * সিটি প্রাইমারি রেটিং)' } },
        { id: 'opt-2', text: { en: 'Relay operating time multiplied by line voltage', hi: 'रिले ऑपरेटिंग समय * लाइन वोल्टेज', bn: 'রিলে অপারেটিং সময় * লাইন ভোল্টেজ' } },
        { id: 'opt-3', text: { en: 'CT ratio multiplied by breaker opening time', hi: 'CT अनुपात * ब्रेकर खुलने का समय', bn: 'সিটি অনুপাত * ব্রেকার খোলার সময়' } },
        { id: 'opt-4', text: { en: 'Nominal line current divided by short-circuit MVA', hi: 'सामान्य लाइन करंट / शॉर्ट-सर्किट MVA', bn: 'স্বাভাবিক লাইন কারেন্ট / শর্ট সার্কিট MVA' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'PSM = I_fault / (Plug_Setting * CT_primary_rating). It quantifies the number of times the actual fault current exceeds the nominal pickup threshold of the relay.',
        hi: 'PSM = फॉल्ट करंट / रिले की पिकअप करंट। यह बताता है कि फॉल्ट करंट रिले की सेटिंग से कितने गुना अधिक है।',
        bn: 'PSM = ফল্ট কারেন্ট / পিকআপ কারেন্ট। এটি নির্দেশ করে ফল্ট কারেন্ট রিলের নির্ধারিত পিকআপ মানের কত গুণ।'
      }
    },
    {
      id: 'mcq-ch17-l03-02',
      question: {
        en: 'Which IEC standard inverse IDMT curve has a tripping time inversely proportional to the SQUARE of the fault current (operating as an I²t thermal mirror)?',
        hi: 'किस IEC मानक IDMT वक्र का ट्रिपिंग समय फॉल्ट धारा के वर्ग (I²t) के व्युत्क्रमानुपाती होता है?',
        bn: 'কোন IEC স্ট্যান্ডার্ড IDMT কার্ভের ট্রিপিং সময় ফল্ট কারেন্টের বর্গের ব্যস্তানুপাতিক (I²t তাপীয় প্রতিকৃতি)?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Extremely Inverse (EI, alpha = 2.0)', hi: 'एक्सट्रीमली इनवर्स (EI, alpha = 2.0)', bn: 'এক্সট্রিমলি ইনভার্স (EI, alpha = ২.০)' } },
        { id: 'opt-2', text: { en: 'Standard Inverse (SI, alpha = 0.02)', hi: 'स्टैंडर्ड इनवर्स (SI, alpha = 0.02)', bn: 'স্ট্যান্ডার্ড ইনভার্স (SI, alpha = ০.০২)' } },
        { id: 'opt-3', text: { en: 'Very Inverse (VI, alpha = 1.0)', hi: 'वेरी इनवर्स (VI, alpha = 1.0)', bn: 'ভেরি ইনভার্স (VI, alpha = ১.০)' } },
        { id: 'opt-4', text: { en: 'Definite Time (alpha = 0)', hi: 'डेफिनिट टाइम (alpha = 0)', bn: 'ডেফিনিট টাইম (alpha = ০)' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'The Extremely Inverse curve has alpha = 2.0 (t = 80 * TMS / (PSM² - 1)). This square dependence matches the I²t heating characteristics of power cables, transformers, and power fuses.',
        hi: 'एक्सट्रीमली इनवर्स में alpha = 2.0 होता है, जो केबलों और ट्रांसफार्मर की I²t हीटिंग सीमा से बिल्कुल मेल खाता है।',
        bn: 'এক্সট্রিমলি ইনভার্স কার্ভে alpha = ২.০ থাকে, যা ক্যাবল ও ট্রান্সফরমারের I²t তাপীয় সীমাবদ্ধতার সাথে নিখুঁতভাবে সঙ্গতিপূর্ণ।'
      }
    },
    {
      id: 'mcq-ch17-l03-03',
      question: {
        en: 'What typical Coordination Time Interval (CTI) is required between modern numerical relays in series to ensure safe discrimination?',
        hi: 'सुरक्षित भेदभाव सुनिश्चित करने के लिए श्रृंखला में आधुनिक संख्यात्मक रिले के बीच किस विशिष्ट समन्वय समय अंतराल (CTI) की आवश्यकता होती है?',
        bn: 'নিরাপদ সমন্বয় নিশ্চিত করতে সিরিজে থাকা আধুনিক নিউমেরিক্যাল রিলের মধ্যে সাধারণত কত CTI ব্যবধান রাখা হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: '0.20 to 0.30 seconds', hi: '0.20 से 0.30 सेकंड', bn: '০.২০ থেকে ০.৩০ সেকেন্ড' } },
        { id: 'opt-2', text: { en: '1.5 to 2.0 seconds', hi: '1.5 से 2.0 सेकंड', bn: '১.৫ থেকে ২.০ সেকেন্ড' } },
        { id: 'opt-3', text: { en: '10 to 20 milliseconds', hi: '10 से 20 मिलीसेकंड', bn: '১০ থেকে ২০ মিলিসেকেন্ড' } },
        { id: 'opt-4', text: { en: '5.0 seconds', hi: '5.0 सेकंड', bn: '৫.০ সেকেন্ড' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Numerical relays have minimal overshoot (~20 ms) and low timing error, allowing the CTI to be safely reduced to 0.20–0.30 s (compared to 0.40–0.50 s for legacy electromechanical induction disc relays).',
        hi: 'न्यूमेरिकल रिले में कम समय त्रुटि और न्यूनतम ओवरशूट होता है, जिससे CTI को घटाकर 0.20 से 0.30 सेकंड किया जा सकता है।',
        bn: 'নিউমেরিক্যাল রিলের উচ্চ নির্ভুলতা ও কম ওভারশুটের কারণে CTI মার্জিন ০.২০ থেকে ০.৩০ সেকেন্ডে রাখা সম্ভব।'
      }
    },
    {
      id: 'mcq-ch17-l03-04',
      question: {
        en: 'Why are directional overcurrent relays (ANSI 67) strictly required on closed ring-main distribution feeders?',
        hi: 'क्लोज्ड रिंग-मेन वितरण फीडरों पर दिशात्मक ओवरकरेंट रिले (ANSI 67) अनिवार्य क्यों हैं?',
        bn: 'ক্লোজড রিং-মেইন ডিস্ট্রিবিউশন ফিডারে ডিরেকশনাল ওভারকারেন্ট রিলে (ANSI 67) ব্যবহার বাধ্যতামূলক কেন?'
      },
      options: [
        { id: 'opt-1', text: { en: 'To trip only for fault current flowing away from the bus into the faulted feeder, preventing healthy parallel feeders from tripping', hi: 'केवल बस से दूर फॉल्ट फीडर में बहने वाली धारा पर ट्रिप करने के लिए, स्वस्थ फीडरों को ट्रिपिंग से बचाने हेतु', bn: 'কেবল বাসবার থেকে ফিডারের দিকে প্রবাহিত কারেন্টে ট্রিপ করতে, যাতে সুস্থ সমান্তরাল ফিডারগুলো অপ্রয়োজনে বন্ধ না হয়' } },
        { id: 'opt-2', text: { en: 'To boost line voltage during peak load hours', hi: 'पीक लोड के घंटों के दौरान लाइन वोल्टेज बढ़ाने के लिए', bn: 'পিক আওয়ারের সময় লাইনের ভোল্টেজ বৃদ্ধি করতে' } },
        { id: 'opt-3', text: { en: 'To eliminate the need for current transformers', hi: 'करंट ट्रांसफार्मर की आवश्यकता को समाप्त करने के लिए', bn: 'কারেন্ট ট্রান্সফরমারের প্রয়োজনীয়তা দূর করতে' } },
        { id: 'opt-4', text: { en: 'To convert single-phase faults into three-phase faults', hi: 'सिंगल-फेज फॉल्ट को थ्री-फेज फॉल्ट में बदलने के लिए', bn: 'সিঙ্গেল ফেজ ফল্টকে থ্রি ফেজ ফল্টে রূপান্তর করতে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'In a ring main, fault current feeds into the fault from both clockwise and counter-clockwise directions. Directional sensing ensures that only the two breakers bounding the faulted cable section open.',
        hi: 'रिंग मेन में फॉल्ट दोनों दिशाओं से पोषित होता है। दिशात्मक रिले सुनिश्चित करते हैं कि केवल खराब केबल के दोनों सिरों के ब्रेकर ही खुलें।',
        bn: 'রিং মেইনে উভয় দিক থেকেই ফল্ট কারেন্ট প্রবাহিত হয়। ডিরেকশনাল রিলে নিশ্চিত করে যে কেবল ত্রুটিপূর্ণ ক্যাবলটির দুই প্রান্তের ব্রেকারই খুলবে।'
      }
    },
    {
      id: 'mcq-ch17-l03-05',
      question: {
        en: 'How does an increase in the Time Multiplier Setting (TMS) affect the operating time of an IDMT relay at a constant fault current?',
        hi: 'स्थिर फॉल्ट करंट पर टाइम मल्टीप्लायर सेटिंग (TMS) बढ़ाने से IDMT रिले के ऑपरेटिंग समय पर क्या प्रभाव पड़ता है?',
        bn: 'স্থির ফল্ট কারেন্টে টাইম মাল্টিপ্লায়ার সেটিং (TMS) বৃদ্ধি করলে IDMT রিলের অপারেটিং সময়ে কী প্রভাব পড়ে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'The operating time increases proportionally (relay trips slower)', hi: 'ऑपरेटिंग समय आनुपातिक रूप से बढ़ जाता है (रिले धीमे ट्रिप करता है)', bn: 'অপারেটিং সময় সমানুপাতিক হারে বৃদ্ধি পায় (রিলে দেরিতে ট্রিপ করে)' } },
        { id: 'opt-2', text: { en: 'The operating time decreases to zero instantly', hi: 'ऑपरेटिंग समय तुरंत शून्य हो जाता है', bn: 'অপারেটিং সময় তৎক্ষণাৎ শূন্যে নেমে আসে' } },
        { id: 'opt-3', text: { en: 'The relay will fail to detect ground faults', hi: 'रिले ग्राउंड फॉल्ट का पता लगाने में विफल रहेगा', bn: 'রিলে গ্রাউন্ড ফল্ট শনাক্তকরণে ব্যর্থ হবে' } },
        { id: 'opt-4', text: { en: 'The pickup current doubles in magnitude', hi: 'पिकअप करंट का परिमाण दोगुना हो जाता है', bn: 'পিকআপ কারেন্টের মান দ্বিগুণ হয়ে যায়' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Since operating time is directly multiplied by TMS (t = TMS · f(PSM)), increasing the TMS shifts the curve vertically upward, proportionally increasing the trip time.',
        hi: 'चूंकि ऑपरेटिंग समय सीधे TMS से गुणा होता है (t = TMS · f(PSM)), TMS बढ़ाने से ट्रिप समय आनुपातिक रूप से बढ़ जाता है।',
        bn: 'যেহেতু ট্রিপিং সময় সরাসরি TMS দ্বারা গুণিত হয় (t = TMS · f(PSM)), তাই TMS বৃদ্ধি করলে রিলের ট্রিপিং সময় সমানুপাতিক হারে বৃদ্ধি পায়।'
      }
    },
    {
      id: 'mcq-ch17-l03-06',
      question: {
        en: 'What is the purpose of adding an instantaneous overcurrent element (ANSI 50) alongside an IDMT time-delayed element (ANSI 51)?',
        hi: 'IDMT समय-विलंबित तत्व (51) के साथ तात्कालिक तत्व (ANSI 50) जोड़ने का क्या उद्देश्य है?',
        bn: 'IDMT টাইম-ডিলেড উপাদানের (ANSI 51) সাথে একটি তাৎক্ষণিক উপাদান (ANSI 50) যুক্ত করার উদ্দেশ্য কী?'
      },
      options: [
        { id: 'opt-1', text: { en: 'To clear close-in catastrophic high-current faults with zero intentional time delay', hi: 'बिना किसी समय देरी के निकटवर्ती उच्च-करंट फॉल्ट को तुरंत साफ करना', bn: 'নিকটবর্তী মারাত্মক উচ্চ-কারেন্টের ফল্ট কোনো বিলম্ব ছাড়াই তাত্ক্ষণিকভাবে দূর করা' } },
        { id: 'opt-2', text: { en: 'To delay tripping for at least 10 seconds during lightning surges', hi: 'आकाशीय बिजली के दौरान कम से कम 10 सेकंड के लिए ट्रिपिंग में देरी करना', bn: 'বজ্রপাতের সময় কমপক্ষে ১০ সেকেন্ডের ট্রিপ বিলম্ব ঘটানো' } },
        { id: 'opt-3', text: { en: 'To continuously regulate the power factor of the substation', hi: 'सबस्टेशन के पावर फैक्टर को लगातार नियंत्रित करना', bn: 'সাবস্টেশনের পাওয়ার ফ্যাক্টর ক্রমাগত নিয়ন্ত্রণ করা' } },
        { id: 'opt-4', text: { en: 'To reduce the physical weight of the circuit breaker contacts', hi: 'सर्किट ब्रेकर संपर्कों के वजन को कम करना', bn: 'সার্কিট ব্রেকারের কন্টাক্টের ওজন কমানো' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Instantaneous element 50 is set to pick up for severe faults close to the substation (where fault currents are massive), bypassing the IDMT time delay to clear dangerous faults in 20–40 ms.',
        hi: 'तत्व 50 बहुत अधिक फॉल्ट करंट के लिए तुरंत (20-40 ms में) संचालित होता है, जिससे सबस्टेशन के पास के भयानक फॉल्ट तुरंत साफ हो जाते हैं।',
        bn: 'উপাদান 50 সাবস্টেশনের কাছাকাছি অত্যন্ত তীব্র ফল্ট কারেন্টে কোনো কৃত্রিম বিলম্ব ছাড়াই ২০-৪০ ms এর মধ্যে সাথে সাথে সার্কিট বিচ্ছিন্ন করে।'
      }
    },
    {
      id: 'mcq-ch17-l03-07',
      question: {
        en: 'In directional relays, what is the Maximum Torque Angle (MTA)?',
        hi: 'दिशात्मक रिले में, अधिकतम टॉर्क कोण (MTA) क्या है?',
        bn: 'ডিরেকশনাল রিলেতে ম্যাক্সিমাম টর্ক অ্যাঙ্গেল (MTA) বলতে কী বোঝায়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'The phase angle between polarizing voltage and operating current at which the relay produces maximum tripping sensitivity', hi: 'ध्रुवीकरण वोल्टेज और ऑपरेटिंग धारा के बीच का फेज कोण जिस पर रिले अधिकतम ट्रिपिंग संवेदनशीलता उत्पन्न करता है', bn: 'পোলারাইজিং ভোল্টেজ ও অপারেটিং কারেন্টের মধ্যকার ফেজ কোণ যাতে রিলে সর্বাধিক সংবেদনশীলতা লাভ করে' } },
        { id: 'opt-2', text: { en: 'The mechanical rotational angle of the circuit breaker shaft', hi: 'सर्किट ब्रेकर शाफ्ट का यांत्रिक घूर्णन कोण', bn: 'সার্কিট ব্রেকারের শ্যাফটের মেকানিক্যাল ঘূর্ণন কোণ' } },
        { id: 'opt-3', text: { en: 'The maximum allowable phase imbalance in a three-phase motor', hi: 'थ्री-फेज मोटर में अधिकतम स्वीकार्य फेज असंतुलन', bn: 'থ্রি-ফেজ মোটরে অনুমোদিত সর্বোচ্চ ফেজ ভারসাম্যহীনতা' } },
        { id: 'opt-4', text: { en: 'The angular twist of the overhead conductor during high winds', hi: 'तेज हवाओं के दौरान ओवरहेड कंडक्टर का कोणीय झुकाव', bn: 'প্রচণ্ড বাতাসে ওভারহেড তারের কৌণিক মোচড়' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'MTA is the characteristic angle between current and voltage for which the directional comparator outputs maximum operating torque or highest positive directional decision.',
        hi: 'MTA वह कोण है जिस पर रिले में अधिकतम टॉर्क उत्पन्न होता है, जो आमतौर पर फॉल्ट पाथ के प्रतिबाधा कोण से मेल खाता है।',
        bn: 'MTA হলো কারেন্ট ও ভোল্টেজের মধ্যবর্তী এমন একটি বৈশিষ্ট্যপূর্ণ কোণ যাতে রিলে সর্বোচ্চ ইতিবাচক ট্রিপ টর্ক উৎপাদন করে।'
      }
    },
    {
      id: 'mcq-ch17-l03-08',
      question: {
        en: 'A 200/1 A CT feeds an IDMT relay with PS = 100% and TMS = 0.3. For a primary fault of 2000 A, what is the PSM and the approximate operating time using the IEC Standard Inverse curve?',
        hi: 'एक 200/1 A CT 100% PS और 0.3 TMS वाले रिले को फीड करता है। 2000 A के फॉल्ट के लिए PSM और लगभग ऑपरेटिंग समय क्या होगा?',
        bn: 'একটি ২০০/১ A সিটি ১০০% PS এবং ০.৩ TMS বিশিষ্ট রিলেতে যুক্ত। ২০০০ A ফল্টের জন্য PSM এবং আনুমানিক ট্রिप সময় কত হবে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'PSM = 10.0, Trip Time ≈ 0.89 seconds', hi: 'PSM = 10.0, ट्रिप समय ≈ 0.89 सेकंड', bn: 'PSM = ১০.০, ট্রিপ সময় ≈ ০.৮৯ সেকেন্ড' } },
        { id: 'opt-2', text: { en: 'PSM = 5.0, Trip Time ≈ 4.50 seconds', hi: 'PSM = 5.0, ट्रिप समय ≈ 4.50 सेकंड', bn: 'PSM = ৫.০, ট্রিপ সময় ≈ ৪.৫০ সেকেন্ড' } },
        { id: 'opt-3', text: { en: 'PSM = 20.0, Trip Time ≈ 0.12 seconds', hi: 'PSM = 20.0, ट्रिप समय ≈ 0.12 सेकंड', bn: 'PSM = ২০.০, ট্রিপ সময় ≈ ০.১২ সেকেন্ড' } },
        { id: 'opt-4', text: { en: 'PSM = 1.0, Trip Time = Infinity', hi: 'PSM = 1.0, ट्रिप समय = अनंत', bn: 'PSM = ১.০, ট্রিপ সময় = অসীম' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'PSM = 2000 / (1.0 · 200) = 10.0. For Standard Inverse at PSM = 10, t(TMS=1.0) = 0.14 / (10^0.02 - 1) = 2.97 s. Actual trip time = 0.3 · 2.97 s ≈ 0.89 seconds.',
        hi: 'PSM = 2000 / 200 = 10.0। t(TMS=1) = 2.97 s। वास्तविक समय = 0.3 * 2.97 ≈ 0.89 सेकंड।',
        bn: 'PSM = ২০০০ / ২০০ = ১০.০। t(TMS=১) = ২.৯৭ s। প্রকৃত সময় = ০.৩ * ২.৯৭ ≈ ০.৮৯ সেকেন্ড।'
      }
    }
  ]
};

export const LESSON_OVERCURRENT_EARTH_FAULT = LESSON_OVERCURRENT_COORDINATION;
