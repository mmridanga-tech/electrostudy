import { Lesson } from '../types';
import { CHAPTER_3_LESSONS_PART2 } from './chapter3LessonsPart2';
import { CHAPTER_3_LESSONS_PART3 } from './chapter3LessonsPart3';
import { CHAPTER_3_LESSONS_PART4 } from './chapter3LessonsPart4';
import { CHAPTER_3_LESSONS_PART5 } from './chapter3LessonsPart5';

export const LESSON_FUNDAMENTALS_MEASUREMENT: Lesson = {
  id: 'lsn-ch3-fundamentals-measurement',
  topicId: 'ch3-fundamentals-measurement',
  order: 1,
  title: {
    en: 'Fundamentals of Measurement & Units',
    hi: 'मापन के मूल सिद्धांत एवं इकाइयाँ',
    bn: 'পরিমাপের মূল নীতি ও এককসমূহ'
  },
  easyExplanation: {
    en: 'Measurement is the process of comparing an unknown physical quantity with a predefined standard unit. In electrical engineering, precise measurement of voltage, current, power, and energy is essential for safe grid operation and circuit design.',
    hi: 'मापन किसी अज्ञात भौतिक राशि की तुलना एक पूर्व-निर्धारित मानक इकाई से करने की प्रक्रिया है। इलेक्ट्रिकल इंजीनियरिंग में वोल्टेज, करंट, पावर और ऊर्जा का सटीक मापन ग्रिड सुरक्षा और सर्किट डिजाइन के लिए आवश्यक है।',
    bn: 'পরিমাপ হলো একটি পূর্বনির্ধারিত প্রমাণ এককের সাথে কোনো অজানা ভৌত রাশির তুলনা করার প্রক্রিয়া। ইলেকট্রিক্যাল ইঞ্জিনিয়ারিংয়ে ভোল্টেজ, কারেন্ট, পাওয়ার ও শক্তির সঠিক পরিমাপ গ্রিড নিরাপত্তা ও সার্কিট ডিজাইনের জন্য অপরিহার্য।'
  },
  detailedExplanation: {
    en: 'Generalized Measurement System Architecture:\n\n1. Primary Sensing Element: Interfaces with measurand and produces an analogous output (e.g., RTD sensor for temperature).\n2. Variable Conversion Element / Transducer: Converts non-electrical signal into electrical parameter (voltage, current, frequency).\n3. Signal Conditioning Unit: Amplifies, filters, linearizes, or attenuates signals to improve signal-to-noise ratio (SNR).\n4. Data Presentation Element: Displays numerical output via digital display or analog pointer over a calibrated scale.\n\nKey Performance Terms:\n- Accuracy: Closeness of measured value to true value.\n- Precision: Repeatability/consistency among successive measurements under identical conditions.\n- Sensitivity: Ratio of change in output deflection (Δθ) to change in input quantity (ΔI or ΔV).\n- Resolution: Smallest detectable change in input measurand.\n- Least Count: Smallest value that can be directly read on scale.',
    hi: 'सामान्यीकृत मापन प्रणाली संरचना:\n\n1. प्राथमिक सेंसर: भौतिक राशि का पता लगाता है।\n2. ट्रांसड्यूसर: सिग्नल को विद्युत मापदंडों में बदलता है।\n3. सिग्नल कंडीशनिंग: शोर (Noise) को कम करके सिग्नल को एम्पलीफाई या फ़िल्टर करता है।\n4. डेटा प्रेजेंटेशन: डिजिटल स्क्रीन या सुई द्वारा अंतिम मान प्रदर्शित करता है।\n\nमुख्य प्रदर्शन शब्द:\n- सटीकता (Accuracy): वास्तविक मान के निकटता।\n- परिशुद्धता (Precision): बार-बार मापे गए मानों की संगति।\n- संवेदनशीलता (Sensitivity): आउटपुट विक्षेप और इनपुट परिवर्तन का अनुपात।\n- रेजोल्यूशन (Resolution): इनपुट का न्यूनतम पहचान योग्य परिवर्तन।\n- अल्पतमांक (Least Count): पैमाने पर पढ़ा जाने वाला सबसे छोटा मान।',
    bn: 'সাধারণ పరిমাপ ব্যবস্থার আর্কিটেকচার:\n\n১. প্রাইমারি সেন্সর: ভৌত রাশি সনাক্ত করে।\n২. ট্রান্সডিউসার: সংকেতকে বৈদুতিক প্যারামিটারে রূপান্তরিত করে।\n৩. সিগন্যাল কন্ডিশনিং: নয়েজ কমিয়ে সংকেতকে পরিবর্ধিত ও ফিল্টার করে।\n৪. ডাটা প্রেজেন্টেশন: ডিজিটাল ডিসপ্লে বা পয়েন্টারে চূড়ান্ত মান প্রদর্শন করে।\n\nমূল বৈশিষ্ট্যসমূহ:\n- অ্যাকুরেসি: প্রকৃত মানের নিকটতা।\n- প্রিসিশন: পরিমাপের পুনরাবৃত্তি যোগ্যতা।\n- সংবেদনশীলতা: ইনপুট পরিবর্তনের সাপেক্ষে আউটপুট বিচ্যুতির অনুপাত।\n- রেজোলিউশন: ইনপুটের ক্ষুদ্রতম সনাক্তযোগ্য পরিবর্তন।\n- লঘিষ্ঠ গণনা (Least Count): স্কেলে পরিমাপযোগ্য ক্ষুদ্রতম মান।'
  },
  formulas: [
    {
      symbol: 'S',
      expression: 'S = Δθ / ΔI',
      description: {
        en: 'Instrument Sensitivity (Deflection per unit input change)',
        hi: 'उपकरण संवेदनशीलता (प्रति इकाई इनपुट परिवर्तन विक्षेप)',
        bn: 'যন্ত্রের সংবেদনশীলতা (একক ইনপুট পরিবর্তনে বিচ্যুতি)'
      }
    },
    {
      symbol: 'LC',
      expression: 'LC = FSD / N',
      description: {
        en: 'Least Count (FSD = Full Scale Deflection, N = Total divisions)',
        hi: 'अल्पतमांक (FSD = पूर्ण-पैमाना विक्षेप, N = कुल भाग)',
        bn: 'লঘিষ্ঠ গণনা (FSD = ফুল স্কেল ডিফ্লেকশন, N = মোট ঘর)'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-measurement-chain',
      title: {
        en: 'Generalized Measurement System Architecture',
        hi: 'सामान्यीकृत मापन प्रणाली संरचना',
        bn: 'সাধারণ পরিমাপ ব্যবস্থার ধাপসমূহ'
      },
      caption: {
        en: 'Flow of signal from physical quantity to display: Measurand -> Sensor/Primary Element -> Signal Conditioning -> Display/Output.',
        hi: 'भौतिक राशि से डिस्प्ले तक सिग्नल का प्रवाह: राशि -> सेंसर -> सिग्नल प्रोसेसिंग -> डिस्प्ले।',
        bn: 'ভৌত রাশি থেকে ডিসপ্লে পর্যন্ত সংকেতের প্রবাহ: মিজার্যান্ড -> সেন্সর -> সিগন্যাল প্রসেসিং -> ডিসপ্লে।'
      },
      svgType: 'measurement-chain'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch3-1',
      problem: {
        en: 'An analog ammeter scale is divided into 100 equal divisions. The total full-scale reading is 10 A. If a deflection of 40 divisions is produced by a current change of 4 A, calculate: 1) Least count of the instrument, and 2) Instrument sensitivity in div/A.',
        hi: 'एक एनालॉग अमीटर का पैमाना 100 बराबर भागों में विभाजित है। इसका पूर्ण-पैमाना पाठ्यांक 10 A है। यदि 4 A के धारा परिवर्तन से 40 भागों का विक्षेप उत्पन्न होता है, तो गणना करें: 1) उपकरण का अल्पतमांक, और 2) div/A में उपकरण की संवेदनशीलता।',
        bn: 'একটি এনালগ অ্যামিটারের স্কেল ১০০ টি সমান ভাগে বিভক্ত। এর ফুল স্কেল পাঠ ১০ A। যদি ৪ A কারেন্ট পরিবর্তনের জন্য ৪০ ঘর বিচ্যুতি ঘটে, তবে নির্ণয় করো: ১) মিটারটির লঘিষ্ঠ গণনা (Least count), এবং ২) div/A এককে সংবেদনশীলতা (Sensitivity)।'
      },
      givenValues: {
        'Full Scale Value (FSD)': '10 A',
        'Total Divisions (N)': '100 divisions',
        'Deflection Change (Δθ)': '40 divisions',
        'Current Change (ΔI)': '4 A'
      },
      solution: {
        en: '1) Least Count (LC) = Full Scale Reading / Total Divisions\nLC = 10 A / 100 = 0.1 A per division.\n\n2) Sensitivity (S) = Change in Deflection / Change in Current\nS = 40 divisions / 4 A = 10 div/A.',
        hi: '1) अल्पतमांक (LC) = पूर्ण-पैमाना पाठ्यांक / कुल भाग\nLC = 10 A / 100 = 0.1 A प्रति भाग।\n\n2) संवेदनशीलता (S) = विक्षेप में परिवर्तन / धारा में परिवर्तन\nS = 40 भाग / 4 A = 10 div/A।',
        bn: '১) লঘিষ্ঠ গণনা (LC) = ফুল স্কেল মান / মোট ঘর\nLC = ১০ A / ১০০ = ০.১ A প্রতি ঘর।\n\n২) সংবেদনশীলতা (S) = বিচ্যুতি পরিবর্তন / কারেন্ট পরিবর্তন\nS = ৪০ ঘর / ৪ A = ১০ div/A।'
      },
      finalAnswer: {
        en: 'Least Count = 0.1 A/div, Sensitivity = 10 div/A',
        hi: 'अल्पतमांक = 0.1 A/भाग, संवेदनशीलता = 10 div/A',
        bn: 'লঘিষ্ঠ গণনা = ০.১ A/ঘর, সংবেদনশীলতা = ১০ div/A'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Calibrating shop-floor multimeters against national standards to ensure precise electrical measurements.',
      'Selecting appropriate meter sensitivity and resolution for semiconductor manufacturing quality control.',
      'Monitoring substation grid parameters (Voltage, Current, Frequency) continuously.'
    ],
    hi: [
      'सटीक विद्युत मापन सुनिश्चित करने के लिए राष्ट्रीय मानकों के खिलाफ वर्कशॉप मल्टीमीटर का अंशांकन (कैलिब्रेशन)।',
      'सेमीकंडक्टर निर्माण गुणवत्ता नियंत्रण के लिए उपयुक्त मीटर संवेदनशीलता और रेजोल्यूशन का चयन।',
      'सबस्टेशन ग्रिड मापदंडों (वोल्टेज, करंट, फ्रीक्वेंसी) की निरंतर निगरानी।'
    ],
    bn: [
      'জাতীয় ল্যাবরেটরি মানকের সাথে শিল্পকারখানার মিটারের সঠিকতা যাচাই (ক্যালিব্রেশন)।',
      'উচ্চ নিখুঁততা ও রেজোলিউশন নিশ্চিত করতে সেমিকন্ডাক্টর তৈরিতে গুণমান নিয়ন্ত্রণ।',
      'সাবস্টেশনে পাওয়ার গ্রিডের ভোল্টেজ, কারেন্ট ও ফ্রিকোয়েন্সি নিরবচ্ছিন্ন পর্যবেক্ষণ।'
    ]
  },
  importantPoints: {
    en: [
      'Accuracy refers to closeness to truth, while Precision refers to consistency among readings.',
      'An instrument can be highly precise without being accurate if a systematic offset exists.',
      'Sensitivity is the slope of the calibration curve relating output deflection to input measurand.'
    ],
    hi: [
      'सटीकता (Accuracy) वास्तविक मान के करीब होने को दर्शाती है, जबकि परिशुद्धता (Precision) पाठ्यांकों की संगति को दर्शाती है।',
      'यदि सिस्टम में कोई निश्चित त्रुटि है, तो उपकरण बिना सटीक हुए भी अत्यधिक परिशुद्ध हो सकता है।',
      'संवेदनशीलता आउटपुट विक्षेप और इनपुट राशि के बीच कैलिब्रेशन वक्र (Curve) का ढाल होती है।'
    ],
    bn: [
      'অ্যাকুরেসি (Accuracy) নির্দেশ করে সত্য মানের সান্নিধ্য, আর প্রিসিশন (Precision) নির্দেশ করে পাঠগুলোর পারস্পরিক সঙ্গতি।',
      'কোনো যন্ত্রে সিস্টেমেটিক এরর থাকলে সেটি নির্ভুল না হয়েও অত্যন্ত সুসংগত (Precise) হতে পারে।',
      'সংবেদনশীলতা হলো ইনপুট ও আউটপুটের ক্যালিব্রেশন কার্ভের ঢাল।'
    ]
  },
  commonMistakes: {
    en: [
      'Confusing high precision with high accuracy (e.g., repeating the same incorrect reading 5 times is precise, but inaccurate).',
      'Overlooking the least count of an instrument when taking fine physical readings.'
    ],
    hi: [
      'उच्च परिशुद्धता को उच्च सटीकता समझने की भूल करना (उदा. एक ही गलत पाठ्यांक को 5 बार दोहराना परिशुद्ध है, पर सटीक नहीं)।',
      'सूक्ष्म पाठ्यांक लेते समय उपकरण के अल्पतमांक पर ध्यान न देना।'
    ],
    bn: [
      'উচ্চ প্রিসিশনকে উচ্চ অ্যাকুরেসি বলে ভুল করা (যেমন একই ভুল মান ৫ বার পাওয়া Precise, কিন্তু Accurate নয়)।',
      'সূক্ষ্ম মাপজোকের সময় মিটারের লঘিষ্ঠ গণনা (Least Count) উপেক্ষা করা।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch3-1-1',
      question: {
        en: 'The degree of closeness of a measured value to its true or accepted standard value is called:',
        hi: 'मापे गए मान का उसके वास्तविक या स्वीकृत मानक मान के निकट होने की डिग्री को कहा जाता है:',
        bn: 'কোনো পরিমাপকৃত মান তার প্রকৃত বা গ্রহণযোগ্য মানের কতটা কাছাকাছি, তাকে বলা হয়:'
      },
      options: [
        { id: 'a', text: { en: 'Precision', hi: 'परिशुद्धता (Precision)', bn: 'প্রিসিশন (Precision)' } },
        { id: 'b', text: { en: 'Accuracy', hi: 'सटीकता (Accuracy)', bn: 'অ্যাকুরেসি (Accuracy)' } },
        { id: 'c', text: { en: 'Sensitivity', hi: 'संवेदनशीलता (Sensitivity)', bn: 'সংवेदनशीलता (Sensitivity)' } },
        { id: 'd', text: { en: 'Resolution', hi: 'रेजोल्यूशन (Resolution)', bn: 'রেজোলিউশন (Resolution)' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'Accuracy measures closeness to the true value. Precision measures repeatability of readings.',
        hi: 'सटीकता (Accuracy) वास्तविक मान के निकटता को मापती है। परिशुद्धता पुनरावृत्ति को मापती है।',
        bn: 'অ্যাকুরেসি প্রকৃত মানের কতটা কাছাকাছি তা নির্দেশ করে। প্রিসিশন পরিমাপের পুনরাবৃত্তি যোগ্যতা নির্দেশ করে।'
      }
    },
    {
      id: 'mcq-ch3-1-2',
      question: {
        en: 'The smallest change in the input quantity that can be reliably detected by a measuring instrument is its:',
        hi: 'मापन उपकरण द्वारा विश्वसनीय रूप से पहचाना जाने वाला इनपुट राशि का सबसे छोटा परिवर्तन कहलाता है:',
        bn: 'পরিমাপক যন্ত্র দ্বারা নির্ভরযোগ্যভাবে সনাক্তযোগ্য ইনপুট রাশির ক্ষুদ্রতম পরিবর্তনকে বলে:'
      },
      options: [
        { id: 'a', text: { en: 'Least Count', hi: 'अल्पतमांक', bn: 'লঘিষ্ঠ গণনা' } },
        { id: 'b', text: { en: 'Resolution', hi: 'रेजोल्यूशन', bn: 'রেজোলিউশন' } },
        { id: 'c', text: { en: 'Precision', hi: 'परिशुद्धता', bn: 'প্রিসিশन' } },
        { id: 'd', text: { en: 'Drift', hi: 'ड्रिफ्ट', bn: 'ড্রিফ্ট' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'Resolution is the smallest input variation that produces a detectable change in output.',
        hi: 'रेजोल्यूशन इनपुट का वह न्यूनतम बदलाव है जो आउटपुट में ध्यान देने योग्य बदलाव पैदा करता है।',
        bn: 'রেজোলিউশন হলো ইনপুটের সেই ক্ষুদ্রতম পরিবর্তন যা আউটপুটে পরিমাপযোগ্য সাড়া তৈরি করে।'
      }
    },
    {
      id: 'mcq-ch3-1-3',
      question: {
        en: 'If a voltmeter shows a deflection of 50 divisions for an input of 5 Volts, its sensitivity is:',
        hi: 'यदि 5 वोल्ट के इनपुट पर एक वोल्टमीटर 50 भागों का विक्षेप दिखाता है, तो इसकी संवेदनशीलता है:',
        bn: 'যদি ৫ ভোল্ট ইনপুটের জন্য একটি ভোল্টমিটার ৫০ ঘর বিচ্যুতি প্রদর্শন করে, তবে এর সংवेदनশীলতা কত?'
      },
      options: [
        { id: 'a', text: { en: '0.1 Volts/division', hi: '0.1 वोल्ट/भाग', bn: '০.১ ভোল্ট/ঘর' } },
        { id: 'b', text: { en: '10 divisions/Volt', hi: '10 भाग/वोल्ट', bn: '১০ ঘর/ভোল্ট' } },
        { id: 'c', text: { en: '250 div-Volts', hi: '250 भाग-वोल्ट', bn: '২৫০ ঘর-ভোল্ট' } },
        { id: 'd', text: { en: '2.5 divisions/Volt', hi: '2.5 भाग/वोल्ट', bn: '২.৫ ঘর/ভোল্ট' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'Sensitivity S = Output / Input = 50 divisions / 5 V = 10 divisions/Volt.',
        hi: 'संवेदनशीलता S = आउटपुट / इनपुट = 50 भाग / 5 V = 10 भाग/वोल्ट।',
        bn: 'সংবেদনশীলতা S = আউটপুট / ইনপুট = ৫০ ঘর / ৫ V = ১০ ঘর/ভোল্ট।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch3-1-1',
      question: {
        en: 'Distinguish clearly between Accuracy and Precision using a practical electrical measurement example.',
        hi: 'एक व्यावहारिक विद्युत मापन उदाहरण का उपयोग करके सटीकता (Accuracy) और परिशुद्धता (Precision) के बीच स्पष्ट अंतर स्पष्ट करें।',
        bn: 'একটি বাস্তব বৈদুতিক পরিমাপের উদাহরণ ব্যবহার করে অ্যাকুরেসি (Accuracy) ও প্রিসিশন (Precision)-এর পার্থক্য স্পষ্টভাবে ব্যাখ্যা করো।'
      },
      hint: {
        en: 'Think of a multimeter measuring a known 100.0 V source multiple times with a constant +5 V offset error.',
        hi: 'एक मल्टीमीटर के बारे में सोचें जो लगातार +5 V त्रुटि के साथ 100.0 V स्रोत को कई बार मापता है।',
        bn: 'একটি ১০০.০ V সোর্সে ধ্রুব +৫ V ত্রুটিসহ মাল্টিমিটারের বারবার পাঠের কথা চিন্তা করো।'
      },
      answerKey: {
        en: 'Accuracy is closeness to true value (100 V). Precision is consistency of repeated measurements. If a meter reads 105.1 V, 105.2 V, 105.1 V, it is PRECISE (repeatable) but NOT ACCURATE (off by ~5 V). If it reads 99.9 V, 100.1 V, 100.0 V, it is both Accurate and Precise.',
        hi: 'सटीकता वास्तविक मान (100 V) के करीब होने को दर्शाती है। परिशुद्धता बार-बार मापे गए मानों की संगति है। यदि मीटर 105.1 V, 105.2 V, 105.1 V पड़ता है, तो यह परिशुद्ध (Precise) है लेकिन सटीक (Accurate) नहीं है। यदि यह 99.9 V, 100.1 V पड़ता है, तो यह सटीक और परिशुद्ध दोनों है।',
        bn: 'অ্যাকুরেসি হলো প্রকৃত মানের (১০০ V) নৈকট্য। প্রিসিশন হলো বারবার পাঠের স্থায়িত্ব। যদি মিটারটি ১০৫.১ V, ১০৫.২ V পাঠ দেয় তবে এটি Precise কিন্তু Accurate নয়। আর যদি ৯৯.৯ V, ১০০.১ V দেয় তবে এটি Accurate ও Precise উভয়ই।'
      }
    },
    {
      id: 'pq-ch3-1-2',
      question: {
        en: 'Explain the four fundamental blocks of a generalized measurement system chain.',
        hi: 'एक सामान्यीकृत मापन प्रणाली शृंखला के चार मूलभूत ब्लॉकों की व्याख्या करें।',
        bn: 'একটি সাধারণ পরিমাপ ব্যবস্থার প্রধান চারটি ধাপ সংক্ষেপে ব্যাখ্যা করো।'
      },
      hint: {
        en: 'Trace the path from Physical Measurand -> Sensor -> Signal Processor -> Display Indicator.',
        hi: 'भौतिक राशि -> सेंसर -> सिग्नल प्रोसेसर -> डिस्प्ले संकेतक तक का पथ ट्रेस करें।',
        bn: 'ভৌত রাশি -> সেন্সর -> সিগন্যাল প্রসেসর -> ডিসপ্লে সূচকের ধাপগুলো খেয়াল করো।'
      },
      answerKey: {
        en: '1) Primary Sensing Element / Sensor: Detects physical quantity and converts to electrical signal;\n2) Variable Conversion / Transducer: Converts non-electrical signal to voltage/current;\n3) Signal Conditioning Element: Amplifies, filters, or linearizes the signal;\n4) Data Presentation Element: Displays output on digital LED or analog scale for human reading.',
        hi: '1) प्राथमिक सेंसर: भौतिक राशि का पता लगाता है;\n2) ट्रांसड्यूसर: सिग्नल को वोल्टेज/करंट में बदलता है;\n3) सिग्नल कंडीशनिंग: सिग्नल को एम्पलीफाई या फ़िल्टर करता है;\n4) डेटा प्रेजेंटेशन: डिजिटल स्क्रीन या सुई द्वारा अंतिम मान प्रदर्शित करता है।',
        bn: '১) প্রাইমারি সেন্সর: ভৌত রাশি সনাক্ত করে;\n2) ট্রান্সডিউসার: সংকেতকে ভোল্টেজ বা কারেন্টে রূপান্তরিত করে;\n৩) সিগন্যাল কন্ডিশনিং: সংকেতকে পরিবর্ধিত ও ফিল্টার করে;\n৪) ডাটা প্রেজেন্টেশন: ডিজিটাল ডিসপ্লে বা পয়েন্টারে চূড়ান্ত মান প্রদর্শন করে।'
      }
    }
  ]
};


export const LESSON_MEASUREMENT_ERRORS: Lesson = {
  id: 'lsn-ch3-measurement-errors',
  topicId: 'ch3-measurement-errors',
  order: 2,
  title: {
    en: 'Measurement Errors',
    hi: 'मापन त्रुटियाँ (Measurement Errors)',
    bn: 'পরিমাপের ত্রুটিসমূহ (Measurement Errors)'
  },
  easyExplanation: {
    en: 'No measurement in the real world is 100% perfect. The difference between the measured value obtained from an instrument and the true value of the physical quantity is known as Measurement Error. Understanding and reducing errors is crucial for safe and reliable engineering operations.',
    hi: 'वास्तविक दुनिया में कोई भी मापन 100% सटीक नहीं होता है। किसी उपकरण से प्राप्त मापे गए मान (Measured Value) और भौतिक राशि के वास्तविक मान (True Value) के बीच के अंतर को मापन त्रुटि (Measurement Error) कहा जाता है। त्रुटियों को समझना और कम करना सुरक्षित इंजीनियरिंग संचालन के लिए अत्यंत महत्वपूर्ण है।',
    bn: 'বাস্তব জগতে কোনো পরিমাপই ১০০% নিখুঁত নয়। পরিমাপক যন্ত্র থেকে প্রাপ্ত মান (Measured Value) এবং ভৌত রাশির প্রকৃত মানের (True Value) মধ্যে ব্যবধানকে বলা হয় পরিমাপের ত্রুটি (Measurement Error)। নিরাপদ ও নির্ভুল ইঞ্জিনিয়ারিং কাজের জন্য ত্রুটি হ্রাস করা অত্যন্ত জরুরী।'
  },
  detailedExplanation: {
    en: 'Errors in measurement systems are broadly classified into three major categories:\n\n1. Gross Errors: Caused mainly by human carelessness, misreading scales, recording incorrect figures, or improper instrument setup. These can be avoided by strict operational care and taking multiple independent readings.\n\n2. Systematic Errors: Errors that remain constant or follow a predictable law. Subdivided into:\na) Instrumental Errors: Due to inherent meter defects, poor calibration, or friction in bearings.\nb) Environmental Errors: Caused by external ambient conditions such as temperature, humidity, magnetic fields, or pressure.\nc) Observational Errors: Such as parallax error when reading analog scales from an angle.\n\n3. Random Errors: Unpredictable fluctuations caused by small unknown environmental variations or electrical noise. These cannot be individually eliminated but are minimized using statistical averaging of large data samples.',
    hi: 'मापन प्रणालियों में त्रुटियों को मुख्य रूप से तीन श्रेणियों में वर्गीकृत किया गया है:\n\n1. ग्रॉस त्रुटियाँ (Gross Errors): मुख्य रूप से मानवीय लापरवाही, गलत स्केल पढ़ने, गलत आंकड़े दर्ज करने या अनुचित सेटअप के कारण होती हैं। इन्हें ध्यानपूर्वक कार्य करके और कई पाठ्यांक लेकर टाला जा सकता है।\n\n2. व्यवस्थित त्रुटियाँ (Systematic Errors): जो स्थिर रहती हैं या एक निश्चित नियम का पालन करती हैं। उप-विभाजन:\nक) उपकरण त्रुटियाँ: आंतरिक दोष, खराब अंशांकन या घर्षण के कारण।\nख) पर्यावरण त्रुटियाँ: बाहरी तापमान, आर्द्रता, या चुंबकीय क्षेत्र के कारण।\nग) प्रेक्षण त्रुटियाँ: जैसे समानांतर (Parallax) कोण से स्केल देखने की त्रुटि।\n\n3. यादृच्छिक त्रुटियाँ (Random Errors): अज्ञात पर्यावरणीय उतार-चढ़ाव या विद्युत शोर के कारण होने वाले अप्रत्याशित बदलाव। इन्हें सांख्यिकीय औसत द्वारा कम किया जाता है।',
    bn: 'পরিমাপ ব্যবস্থার ত্রুটিসমূহকে প্রধানত তিনটি শ্রেণীতে ভাগ করা হয়:\n\n১. গ্রস এরর (Gross Errors): প্রধানত মানবিক অসাবধানতা, ভুল স্কেল পাঠ, ভুল চিত্র রেকর্ড করা বা ভুল সেটআপের কারণে ঘটে। সতর্কতা অবলম্বন করে এবং একাধিক পাঠ নিয়ে এগুলো এড়ানো যায়।\n\n২. সিস্টেমেটিক এরর (Systematic Errors): যেসব ত্রুটি ধ্রুবক থাকে বা একটি নির্দিষ্ট নিয়ম মেনে চলে। বিভাগসমূহ:\nক) ইনস্ট্রুমেন্টাল এরর: যন্ত্রের অভ্যন্তরীণ ত্রুটি, খারাপ ক্যালিব্রেশন বা ঘর্ষণের কারণে।\nখ) এনভায়রনমেন্টাল এরর: বাইরের তাপমাত্রা, আর্দ্রতা বা চৌম্বক ক্ষেত্রের মতো পরিবেশগত কারণে।\nগ) অবজারভেশনাল এরর: যেমন কোণ থেকে স্কেল দেখার সময় প্যারালাক্স ত্রুটি।\n\n৩. র্যান্ডম এরর (Random Errors): অজানা পরিবেশগত পরিবর্তন বা বৈদ্যুतिक নয়েজের কারণে ঘটে যাওয়া অনাকাঙ্ক্ষিত পরিবর্তন। গাণিতিক গড়ের মাধ্যমে এগুলো কমানো হয়।'
  },
  formulas: [
    {
      symbol: 'e_a',
      expression: 'e_a = V_m - V_t',
      description: {
        en: 'Absolute Error (V_m = Measured Value, V_t = True Value)',
        hi: 'निरपेक्ष त्रुटि (V_m = मापा गया मान, V_t = वास्तविक मान)',
        bn: 'নিরপেক্ষ ত্রুটি (V_m = পরিমাপকৃত মান, V_t = প্রকৃত মান)'
      }
    },
    {
      symbol: 'e_r',
      expression: 'e_r = (V_m - V_t) / V_t',
      description: {
        en: 'Relative Error',
        hi: 'सापेक्ष त्रुटि',
        bn: 'আপেক্ষিক ত্রুটি'
      }
    },
    {
      symbol: '% Error',
      expression: '% Error = e_r × 100%',
      description: {
        en: 'Percentage Error',
        hi: 'प्रतिशत त्रुटि = सापेक्ष त्रुटि × 100%',
        bn: 'শতকরা ত্রুটি = আপেক্ষিক ত্রুটি × ১০০%'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-measurement-errors',
      title: {
        en: 'Measurement Distribution & Target Comparison',
        hi: 'मापन वितरण एवं त्रुटि लक्ष्य तुलना',
        bn: 'পরিমাপের নির্ভুলতা ও লক্ষ্যের তুলনা'
      },
      caption: {
        en: 'Visualizing target hits: High Accuracy + High Precision vs Systematic Bias vs Random Scatter.',
        hi: 'लक्ष्य भेद का दृश्य: उच्च सटीकता + उच्च परिशुद्धता बनाम व्यवस्थित पूर्वाग्रह।',
        bn: 'লক্ষ্যমাত্রার গ্রাফ: উচ্চ অ্যাকুরেসি ও প্রিসিশন বনাম সিস্টেমেটিক ও র্যান্ডম এরর।'
      },
      svgType: 'measurement-target-error'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch3-2',
      problem: {
        en: 'A standard reference resistor has a true value of 50.0 Ω. When measured with a bench multimeter, the display reads 51.5 Ω. Calculate: 1) Absolute Error, 2) Relative Error, and 3) Percentage Error.',
        hi: 'एक मानक संदर्भ प्रतिरोधक का वास्तविक मान 50.0 Ω है। बेंच मल्टीमीटर से मापने पर पाठ्यांक 51.5 Ω आता है। गणना करें: 1) निरपेक्ष त्रुटि, 2) सापेक्ष त्रुटि, तथा 3) प्रतिशत त्रुटि।',
        bn: 'একটি স্ট্যান্ডার্ড রেফারেন্স রেজিস্টরের প্রকৃত মান ৫০.০ Ω। একটি মাল্টিমিটার দিয়ে মেপে মান পাওয়া গেল ৫১.৫ Ω। নির্ণয় করো: ১) নিরপেক্ষ ত্রুটি, ২) আপেক্ষিক ত্রুটি, এবং ৩) শতকরা ত্রুটি।'
      },
      givenValues: {
        'True Value (V_t)': '50.0 Ω',
        'Measured Value (V_m)': '51.5 Ω'
      },
      solution: {
        en: '1) Absolute Error (A_e) = V_m - V_t\nA_e = 51.5 Ω - 50.0 Ω = +1.5 Ω.\n\n2) Relative Error (e_r) = A_e / V_t\ne_r = 1.5 Ω / 50.0 Ω = 0.03.\n\n3) Percentage Error (%e) = e_r × 100%\n%e = 0.03 × 100% = +3.0%.',
        hi: '1) निरपेक्ष त्रुटि (A_e) = V_m - V_t\nA_e = 51.5 Ω - 50.0 Ω = +1.5 Ω।\n\n2) सापेक्ष त्रुटि (e_r) = A_e / V_t\ne_r = 1.5 Ω / 50.0 Ω = 0.03।\n\n3) प्रतिशत त्रुटि (%e) = 0.03 × 100% = +3.0%।',
        bn: '১) নিরপেক্ষ ত্রুটি (A_e) = V_m - V_t\nA_e = ৫১.৫ Ω - ৫০.০ Ω = +১.৫ Ω।\n\n২) আপেক্ষিক ত্রুটি (e_r) = A_e / V_t\ne_r = ১.৫ Ω / ৫০.০ Ω = ০.০৩।\n\n৩) শতকরা ত্রুটি (%e) = ০.০৩ × ১০০% = +৩.০%।'
      },
      finalAnswer: {
        en: 'Absolute Error = +1.5 Ω, Relative Error = 0.03, Percentage Error = +3.0%',
        hi: 'निरपेक्ष त्रुटि = +1.5 Ω, सापेक्ष त्रुटि = 0.03, प्रतिशत त्रुटि = +3.0%',
        bn: 'নিরপেক্ষ ত্রুটি = +১.৫ Ω, আপেক্ষিক ত্রুটি = ০.০৩, শতকরা ত্রুটি = +৩.০%'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Zero-adjustment calibration of ammeters before making high-voltage substation measurements.',
      'Using temperature-compensated measuring leads when testing power cables outdoors in extreme cold or heat.',
      'Applying anti-parallax mirrors on high-grade laboratory analog meters to prevent observational readings errors.'
    ],
    hi: [
      'उच्च-वोल्टेज सबस्टेशन मापन से पहले अमीटर का शून्य-समायोजन कैलिब्रेशन।',
      'अत्यधिक ठंड या गर्मी में बाहर बिजली के केबल का परीक्षण करते समय तापमान-क्षतिपूरक लीड का उपयोग।',
      'प्रेक्षण त्रुटियों को रोकने के लिए उच्च-स्तरीय प्रयोगशाला एनालॉग मीटर पर एंटी-पैरालैक्स दर्पण लगाना।'
    ],
    bn: [
      'উচ্চ ভোল্টেজ সাবস্টেশনে পরিমাপের পূর্বে অ্যামিটারের জিরো-সেটিং প্রস্তুতকরণ।',
      'চরম ঠাণ্ডা বা গরমে খোলা জায়গায় পাওয়ার ক্যাবল পরীক্ষার সময় তাপমাত্রা-ক্ষতিপূরণকারী পরিমাপক তার ব্যবহার।',
      'প্যারালাক্স ভিউইং এরর কমাতে উচ্চমানের ল্যাবরেটরি মিটারে মিরর স্কেল ব্যবহার।'
    ]
  },
  importantPoints: {
    en: [
      'Systematic errors can be identified and corrected; random errors cannot be individually eliminated but are minimized by statistical averaging.',
      'Limiting errors are specified as a percentage of full-scale deflection (FSD). Measuring small signals on a large FSD scale drastically increases percentage error.',
      'Parallax errors are prevented by looking perpendicular to the meter scale or utilizing mirrored scales.'
    ],
    hi: [
      'व्यवस्थित त्रुटियों की पहचान करके उन्हें सुधारा जा सकता है; यादृच्छिक त्रुटियों को सांख्यिकीय औसत द्वारा कम किया जाता है।',
      'सीमित त्रुटियाँ पूर्ण पैमाने के प्रतिशत के रूप में निर्दिष्ट होती हैं। बड़े पैमाने पर छोटे सिग्नल मापने से त्रुटि प्रतिशत बढ़ जाता है।',
      'पैरालैक्स त्रुटियों को दर्पण पैमाने का उपयोग करके रोका जाता है।'
    ],
    bn: [
      'সিস্টেমেটিক এরর শনাক্ত করে সংশোধন করা যায়; র্যান্ডম এরর পুরোপুরি বাদ দেওয়া যায় না তবে গাণিতিক গড়ে কমানো যায়।',
      'লিমিটিং এরর ফুল-স্কেলের শতকরা হিসেবে নির্ধারিত থাকে। বড় স্কেলে ছোট মান মাপলে শতকরা ত্রুটি বহু গুণে বেড়ে যায়।',
      'স্কেলের ওপর আয়না স্কেল ব্যবহার করে প্যারালাক্স ভুল দূর করা হয়।'
    ]
  },
  commonMistakes: {
    en: [
      'Measuring tiny voltages or currents at the bottom 10% of a large meter scale where percentage limiting error is magnified.',
      'Ignoring ambient temperature changes during long continuous testing runs.'
    ],
    hi: [
      'बड़े मीटर पैमाने के निचले 10% भाग पर छोटे वोल्टेज या धारा को मापना जहाँ सीमित त्रुटि बढ़ जाती है।',
      'लंबी निरंतर परीक्षण प्रक्रिया के दौरान आसपास के तापमान में बदलाव की उपेक्षा करना।'
    ],
    bn: [
      'বড় স্কেলের নিচের ১০% অংশে ছোট মান মাপা, যেখানে শতকরা লিমিটিং এরর অনেক গুণ বাড়ে।',
      'দীর্ঘক্ষণ পরিমাপের সময় পরিবেশের তাপমাত্রার প্রভাব উপেক্ষা করা।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch3-2-1',
      question: {
        en: 'Errors that remain constant or follow a definite predictable pattern under identical operating conditions are:',
        hi: 'समान परिचालन स्थितियों के तहत स्थिर रहने वाली या निश्चित पैटर्न का पालन करने वाली त्रुटियाँ हैं:',
        bn: 'একই অপারেটিং পরিস্থিতিতে যে ত্রুটিগুলো ধ্রুব থাকে বা নির্দিষ্ট নিয়ম মেনে চলে, সেগুলো হলো:'
      },
      options: [
        { id: 'a', text: { en: 'Random Errors', hi: 'यादृच्छिक (Random) त्रुटियाँ', bn: 'র্যান্ডম এরর' } },
        { id: 'b', text: { en: 'Systematic Errors', hi: 'व्यवस्थित (Systematic) त्रुटियाँ', bn: 'সিস্টেমেটিক এরর' } },
        { id: 'c', text: { en: 'Gross Errors', hi: 'ग्रॉस त्रुटियाँ', bn: 'গ্রস এরর' } },
        { id: 'd', text: { en: 'Frictional Errors', hi: 'घर्षण त्रुटियाँ', bn: 'ঘর্ষণ এরর' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'Systematic errors are predictable and repeatable bias errors due to instrument calibration or environmental factors.',
        hi: 'व्यवस्थित त्रुटियाँ उपकरण कैलिब्रेशन या पर्यावरणीय कारकों के कारण होती हैं।',
        bn: 'সিস্টেমেটিক এরর হলো পূর্বাভিমান যুক্ত ও ধ্রুব ধরনের ত্রুটি যা ক্যালিব্রেশন বা পরিবেশের প্রভাবজনিত।'
      }
    },
    {
      id: 'mcq-ch3-2-2',
      question: {
        en: 'Parallax error in reading an analog pointer meter is classified as what type of error?',
        hi: 'एनालॉग संकेतक मीटर को पढ़ते समय पैरालैक्स त्रुटि को किस प्रकार की त्रुटि के रूप में वर्गीकृत किया गया है?',
        bn: 'অ্যানালগ পযেন্টারের মিটারে প্যারালাক্স এরর কোন ধরনের ত্রুটির অন্তর্ভুক্ত?'
      },
      options: [
        { id: 'a', text: { en: 'Observational Systematic Error', hi: 'प्रेक्षण व्यवस्थित त्रुटि', bn: 'অবজারভেশনাল সিস্টেমেটিক এরর' } },
        { id: 'b', text: { en: 'Random Thermal Error', hi: 'यादृच्छिक तापीय त्रुटि', bn: 'র্যান্ডম থার্মাল এরর' } },
        { id: 'c', text: { en: 'Environmental Error', hi: 'पर्यावरणीय त्रुटि', bn: 'এনভায়রনমেন্টাল এরর' } },
        { id: 'd', text: { en: 'Instrumental Hysteresis Error', hi: 'उपकरण हिस्टैरिसीस त्रुटि', bn: 'ইনস্ট্রুমেন্টাল হিস্টেরেসিস এরর' } }
      ],
      correctOptionId: 'a',
      explanation: {
        en: 'Parallax error occurs due to the observer looking at the scale pointer from an oblique angle.',
        hi: 'पैरालैक्स त्रुटि तब होती है जब प्रेक्षक संकेतक को तिरछे कोण से देखता है।',
        bn: 'পয়েন্টারের দিকে সরাসরি না তাকিয়ে বাঁকা কোণ থেকে দেখার কারণে প্যারালাক্স অবজারভেশনাল এরর ঘটে।'
      }
    },
    {
      id: 'mcq-ch3-2-3',
      question: {
        en: 'If a wattmeter with a true power reading of 500 W displays 490 W, the percentage error is:',
        hi: 'यदि 500 W के वास्तविक मान वाले वाटमीटर में 490 W दिखता है, तो प्रतिशत त्रुटि है:',
        bn: 'প্রকৃত ৫০০ W পাওয়ারের একটি ওয়াটমিটার যদি ৪৯০ W প্রদর্শন করে, তবে শতকরা ত্রুটি কত?'
      },
      options: [
        { id: 'a', text: { en: '-2.0%', hi: '-2.0%', bn: '-২.০%' } },
        { id: 'b', text: { en: '+2.0%', hi: '+2.0%', bn: '+২.০%' } },
        { id: 'c', text: { en: '-10.0%', hi: '-10.0%', bn: '-১০.०%' } },
        { id: 'd', text: { en: '+10.0%', hi: '+10.0%', bn: '+১০.०%' } }
      ],
      correctOptionId: 'a',
      explanation: {
        en: '% Error = (490 - 500) / 500 × 100% = -10 / 500 × 100% = -2.0%.',
        hi: '% त्रुटि = (490 - 500) / 500 × 100% = -10 / 500 × 100% = -2.0%।',
        bn: '% ত্রুটি = (৪৯০ - ৫০০) / ৫০০ × ১০০% = -১০ / ৫০০ × ১০০% = -২.০%।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch3-2-1',
      question: {
        en: 'An ammeter with a specified limiting error of ±1.5% at full scale (100 A) is used to measure a current of 20 A. Determine the maximum potential percentage error in this measurement.',
        hi: 'पूर्ण पैमाने (100 A) पर ±1.5% की सीमित त्रुटि वाला एक अमीटर 20 A की धारा मापने के लिए उपयोग किया जाता है। इस मापन में अधिकतम संभावित प्रतिशत त्रुटि ज्ञात कीजिए।',
        bn: 'ফুল স্কেলে (১০০ A) ±১.৫% লিমিটিং এরর বিশিষ্ট একটি অ্যামিটার দিয়ে ২০ A কারেন্ট মাপা হলো। এই পরিমাপে সর্বোচ্চ শতকরা ত্রুটি নির্ণয় করো।'
      },
      hint: {
        en: 'Calculate absolute error at full scale first: ±1.5% of 100 A = ±1.5 A. Then compute error percentage relative to the 20 A reading.',
        hi: 'पहले पूर्ण पैमाने पर निरपेक्ष त्रुटि निकालें: 100 A का ±1.5% = ±1.5 A। फिर 20 A के सापेक्ष त्रुटि प्रतिशत निकालें।',
        bn: 'প্রথমে ফুল স্কেলের সাপেক্ষে নিরপেক্ষ ত্রুটি বের করো: ১০০ A এর ±১.৫% = ±১.৫ A। তারপর ২০ A পাঠের সাপেক্ষে শতকরা ত্রুটি বের করো।'
      },
      answerKey: {
        en: 'Absolute limiting error = ±1.5% of 100 A = ±1.5 A.\nWhen measuring 20 A, Percentage Error = (±1.5 A / 20 A) × 100% = ±7.5%.\nConclusion: Measuring small currents on a large full-scale meter drastically increases percentage error!',
        hi: 'निरपेक्ष सीमित त्रुटि = 100 A का ±1.5% = ±1.5 A।\n20 A मापते समय प्रतिशत त्रुटि = (±1.5 / 20) × 100% = ±7.5%।\nनिष्कर्ष: बड़े फुल-स्केल मीटर पर छोटी धारा मापने से प्रतिशत त्रुटि बहुत बढ़ जाती है!',
        bn: 'নিরপেক্ষ লিমিটিং এরর = ১০০ A এর ±১.৫% = ±১.৫ A।\n২০ A মাপার সময় শতকরা ত্রুটি = (±১.৫ / ২০) × ১০০% = ±৭.৫%।\nসিদ্ধান্ত: বড় ফুল-স্কেল মিটারে ছোট কারেন্ট মাপলে শতকরা ত্রুটির পরিমাণ অনেক বেড়ে যায়!'
      }
    },
    {
      id: 'pq-ch3-2-2',
      question: {
        en: 'Explain how random errors differ from systematic errors, and how each can be minimized in an electrical testing laboratory.',
        hi: 'बताएं कि यादृच्छिक (Random) त्रुटियाँ व्यवस्थित (Systematic) त्रुटियों से कैसे भिन्न हैं, और इलेक्ट्रिकल टेस्टिंग लैब में प्रत्येक को कैसे कम किया जा सकता है।',
        bn: 'র্যান্ডম এরর কীভাবে সিস্টেমেটিক এররের চেয়ে আলাদা এবং ইলেকট্রিক্যাল ল্যাবে এগুলো কীভাবে কমানো যায় তা ব্যাখ্যা করো।'
      },
      hint: {
        en: 'Compare predictability, cause consistency, and reduction techniques (averaging vs calibration).',
        hi: 'पूर्वानुमान, कारण संगति और कम करने की तकनीकों (औसत बनाम कैलिब्रेशन) की तुलना करें।',
        bn: 'পূর্বাভাসযোগ্যতা, কারণের ধারাবাহিকতা এবং কমানোর পদ্ধতি (গড়করণ বনাম ক্যালিব্রেশন) তুলনা করো।'
      },
      answerKey: {
        en: '1) Systematic Errors are constant/predictable, caused by calibration offset or friction. Minimized by zero-adjusting meters, temperature compensation, and calibrating against standards.\n2) Random Errors are variable/unpredictable, caused by noise or voltage fluctuations. Minimized by taking multiple independent readings and calculating the arithmetic mean.',
        hi: '1) व्यवस्थित त्रुटियाँ स्थिर होती हैं, जो कैलिब्रेशन विचलन के कारण होती हैं। इन्हें शून्य-समायोजन और मानक कैलिब्रेशन से कम किया जाता है।\n2) यादृच्छिक त्रुटियाँ अस्थिर होती हैं। इन्हें कई पाठ्यांक लेकर उनका सांख्यिकीय औसत निकालकर कम किया जाता है।',
        bn: '১) সিস্টেমেটিক এরর ধ্রুব ও সুনির্দিষ্ট, যা ক্যালিব্রেশন বিচ্যুতি বা ঘর্ষণের কারণে ঘটে। জিরো-সেটিং ও নিয়মিত ক্যালিব্রেশনের মাধ্যমে দূর করা হয়।\n২) র্যান্ডম এরর পরিবর্তনশীল ও অনিয়মিত। একাধিক স্বাধীন পাঠ নিয়ে গাণিতिक গড় নির্ণয়ের মাধ্যমে তা কমানো হয়।'
      }
    }
  ]
};


export const LESSON_ELECTRICAL_INSTRUMENTS: Lesson = {
  id: 'lsn-ch3-electrical-instruments',
  topicId: 'ch3-electrical-instruments',
  order: 3,
  title: {
    en: 'Electrical Measuring Instruments & Operating Principles',
    hi: 'विद्युत मापन उपकरण एवं कार्य सिद्धांत',
    bn: 'বৈদ্যুতিক পরিমাপক যন্ত্র ও কার্যনীতি'
  },
  easyExplanation: {
    en: 'Electrical measuring instruments are devices used to measure electrical quantities like voltage, current, resistance, and power. They are broadly categorized as Absolute and Secondary instruments, with Secondary instruments further divided into Indicating, Recording, and Integrating types.',
    hi: 'विद्युत मापन उपकरण ऐसे उपकरण हैं जिनका उपयोग वोल्टेज, करंट, प्रतिरोध और शक्ति जैसी विद्युत राशियों को मापने के लिए किया जाता है। इन्हें मुख्य रूप से निरपेक्ष (Absolute) और द्वितीयक (Secondary) उपकरणों में वर्गीकृत किया गया है।',
    bn: 'বৈদ্যুতিক পরিমাপক যন্ত্র হলো এমন ডিভাইস যা ভোল্টেজ, কারেন্ট, রেজিস্ট্যান্স এবং পাওয়ারের মতো বৈদ্যুতিক রাশি পরিমাপ করতে ব্যবহৃত হয়। এগুলো প্রধানত অ্যাবসোলিউট ও সেকেন্ডারি মিটারে বিভক্ত।'
  },
  detailedExplanation: {
    en: 'Classification & Essential Operating Torques of Measuring Instruments:\n\n1. Classification by Calibration Requirement:\n- Absolute Instruments: Give quantity in terms of physical constants without prior calibration (e.g., Tangent Galvanometer, Rayleigh Current Balance).\n- Secondary Instruments: Show measured value directly on a calibrated scale (e.g., Voltmeters, Ammeters, Wattmeters).\n\n2. Classification by Function:\n- Indicating Instruments: Pointer moves over calibrated scale to show instantaneous value (e.g., PMMC Ammeter, MI Voltmeter).\n- Recording Instruments: Continuously record variations over time on paper chart or digital memory (e.g., ECG, Strip Chart Recorder).\n- Integrating Instruments: Measure total quantity supplied over a period of time (e.g., Energy Meter in kWh).\n\n3. Three Essential Torques for Indicating Instruments:\na) Deflecting Torque (Td): Forces pointer away from zero position when input signal is applied.\nb) Controlling Torque (Tc): Opposes deflecting torque, bringing pointer to equilibrium and returning it to zero when signal stops. Methods: Spring Control (Tc = C·θ) or Gravity Control (Tc = W·d·sinθ).\nc) Damping Torque: Dampens pointer oscillations around equilibrium for quick, accurate reading. Methods: Air Friction, Eddy Current, or Fluid Friction Damping.',
    hi: 'मापन उपकरणों का वर्गीकरण एवं तीन आवश्यक टॉर्क:\n\n1. वर्गीकरण:\n- निरपेक्ष उपकरण (Absolute): पूर्व अंशांकन के बिना भौतिक स्थिरांक के रूप में मान देते हैं (उदा. टेंगेंट गैल्वेनोमीटर)।\n- द्वितीयक उपकरण (Secondary): अंशांकित पैमाने पर सीधे मान दर्शाते हैं (उदा. वोल्टमीटर, अमीटर)।\n\n2. कार्य के अनुसार:\n- इंडिकेटिंग: तत्काल मान दर्शाते हैं।\n- रिकॉर्डिंग: समय के साथ ग्राफ रिकॉर्ड करते हैं।\n- इंटीग्रेटिंग: कुल संचयी ऊर्जा मापते हैं (उदा. kWh ऊर्जा मीटर)।\n\n3. तीन आवश्यक टॉर्क:\nक) विक्षेपक टॉर्क (Deflecting Torque - Td): सुई को शून्य से आगे बढ़ाता है।\nख) नियंत्रक टॉर्क (Controlling Torque - Tc): सुई को संतुलित करता है और सिग्नल बंद होने पर शून्य पर लाता है।\nग) मंदक टॉर्क (Damping Torque): सुई के दोलन को शांत करके तुरंत स्थिर करता है।',
    bn: 'বৈদ্যুতিক পরিমাপক যন্ত্রসমূহ একাধিক মানদণ্ডের ওপর ভিত্তি করে বিভক্ত:\n\n১. অ্যাবসোলিউট বনাম সেকেন্ডারি ইনস্ট্রুমেন্ট:\n- অ্যাবসোলিউট ইনস্ট্রুমেন্ট: কোনো পূর্ববর্তী ক্যালিব্রেশন ছাড়াই সরাসরি ভৌত ধ্রুবকের মান দেয় (যেমন, ট্যাঞ্জেন্ট গ্যালভানোমিটার)।\n- সেকেন্ডারি ইনস্ট্রুমেন্ট: স্কেলের সরাসরি পরিমাপকৃত মান প্রদান করে (যেমন, ভোল্টমিটার, অ্যামিটার, ওয়াটমিটার)।\n\n২. কার্যগত শ্রেণীবিন্যাস:\n- ইন্ডিকেটিং ইনস্ট্রুমেন্ট: কাঁটার সাহায্যে তাৎক্ষণিক মান দেখায় (যেমন, পিএমএমসি অ্যামিটার, মুভিং আয়রন ভোল্টমিটার)।\n- রেকর্ডারিং ইনস্ট্রুমেন্ট: সময়ের সাথে মান গ্রাফ পেপার বা ডিজিটাল স্ক্রিনে আঁকে (যেমন, ইসিজি, স্ট্রিপ চার্ট রেকর্ডার)।\n- ইন্টিগ্রেটিং ইনস্ট্রুমেন্ট: একটি নির্দিষ্ট সময়ে মোট শক্তি বা ব্যবহার যোগ করে রাখে (যেমন, কিলোওয়াট-আওয়ার এনার্জি মিটার)।\n\n৩. নির্দেশক যন্ত্রের প্রয়োজনীয় তিনটি টর্ক:\nক) ডিফ্লেক্টিং টর্ক (T_d): কাঁটাকে শূন্য অবস্থান থেকে সরায়।\nখ) কন্ট্রোলিং টর্ক (T_c): ডিফ্লেকশনের বিরোধিতা করে এবং কারেন্ট বন্ধ হলে কাঁটাকে শূন্যে ফেরত আনে।\nগ) ড্যাম্পিং টর্ক (T_d\'): কাঁটার দোলন থামিয়ে দ্রুত স্থির করে।'
  },
  formulas: [
    {
      symbol: 'T_c',
      expression: 'T_c = C · θ',
      description: {
        en: 'Controlling Torque in Spring Control (C = spring constant, θ = deflection)',
        hi: 'स्प्रिंग नियंत्रण में नियंत्रक टॉर्क (C = स्प्रिंग नियतांक, θ = विक्षेप)',
        bn: 'স্প্রিং কন্ট্রোলে কন্ট্রোলিং টর্ক (C = স্প্রিং ধ্রুবক, θ = বিচ্যুতি)'
      }
    },
    {
      symbol: 'T_c',
      expression: 'T_c = W · d · sin θ',
      description: {
        en: 'Controlling Torque in Gravity Control (W = control weight, d = distance)',
        hi: 'ग्रेविटी नियंत्रण में नियंत्रक टॉर्क (W = नियंत्रक भार, d = दूरी)',
        bn: 'গ্র্যাভিটি কন্ট্রোলে কন্ট্রোলিং টর্ক (W = কন্ট্রোল ওয়েট, d = দূরত্ব)'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-ch3-electrical-instruments',
      title: {
        en: 'Classification & Essential Torques of Electrical Instruments',
        hi: 'विद्युत उपकरणों का वर्गीकरण एवं आवश्यक टॉर्क',
        bn: 'বৈদ্যুতিক পরিমাপক যন্ত্রের শ্রেণীবিন্যাস ও প্রয়োজনীয় টর্ক'
      },
      caption: {
        en: 'Schematic illustrating Indicating, Recording, and Integrating mechanisms alongside Deflecting, Controlling, and Damping forces.',
        hi: 'इंडीकेटिंग, रिकॉर्डिंग और इंटीग्रेटिंग तंत्र के साथ विक्षेपक, नियंत्रक और मंदक बलों का चित्र।',
        bn: 'ইন্ডিকেটিং, রেকর্ডারিং ও ইন্টিগ্রেটিং মেকানিজম এবং ডিফ্লেক্টিং, কন্ট্রোলিং ও ড্যাম্পিং বলের চিত্র।'
      }
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch3-3',
      problem: {
        en: 'A spring-controlled indicating instrument has a spring constant C = 0.2 × 10^-6 N·m/rad. If a current of 5 A produces a deflection of 60° (1.047 rad), calculate the controlling torque Tc produced.',
        hi: 'एक स्प्रिंग-नियंत्रित इंडिकेटिंग उपकरण का स्प्रिंग नियतांक C = 0.2 × 10^-6 N·m/rad है। यदि 5 A की धारा 60° (1.047 rad) का विक्षेप उत्पन्न करती है, तो उत्पन्न नियंत्रक टॉर्क Tc की गणना करें।',
        bn: 'একটি স্প্রিং-নিয়ন্ত্রিত নির্দেশক মিটারের স্প্রিং ধ্রুবক C = ০.২ × ১০^-৬ N·m/rad। ৫ A কারেন্ট যদি ৬০° (১.০৪৭ rad) বিচ্যুতি ঘটায়, তবে সৃষ্ট কন্ট্রোলিং টর্ক Tc কত?'
      },
      givenValues: {
        'Spring Constant (C)': '0.2 × 10^-6 N·m/rad',
        'Deflection Angle (θ)': '60° = 1.047 rad'
      },
      solution: {
        en: 'Tc = C · θ\nTc = (0.2 × 10^-6 N·m/rad) × 1.047 rad\nTc = 0.2094 × 10^-6 N·m = 0.209 µN·m.',
        hi: 'Tc = C · θ\nTc = (0.2 × 10^-6 N·m/rad) × 1.047 rad = 0.2094 × 10^-6 N·m = 0.209 µN·m।',
        bn: 'Tc = C · θ\nTc = (০.২ × ১০^-৬ N·m/rad) × ১.০৪৭ rad = ০.২০৯৪ × ১০^-৬ N·m = ০.২০৯ µN·m।'
      },
      finalAnswer: {
        en: 'Controlling Torque Tc = 0.209 µN·m',
        hi: 'नियंत्रक टॉर्क Tc = 0.209 µN·m',
        bn: 'কন্ট্রোলিং টর্ক Tc = ০.২০৯ µN·m'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Residential electricity billing via integrating energy meters (kWh).',
      'Continuous industrial/medical parameter tracking via strip chart recorders.',
      'Precision DC power supply bench testing using PMMC indicating meters.'
    ],
    hi: [
      'आवासीय बिजली बिलिंग के लिए इंटीग्रेटिंग ऊर्जा मीटर (kWh) का उपयोग।',
      'निरंतर चिकित्सा/औद्योगिक ट्रैकिंग के लिए स्ट्रिप चार्ट रिकॉर्डर का उपयोग।',
      'उच्च-सटीकता DC बिजली आपूर्ति परीक्षण के लिए PMMC मीटर का चयन।'
    ],
    bn: [
      'আবাসিক বিদ্যুৎ বিলিংয়ের জন্য ইন্টিগ্রেটিং এনার্জি মিটার (kWh) ব্যবহার।',
      'নিরবচ্ছিন্ন মেডিকেল/ইন্ডাস্ট্রিয়াল ট্র্যাকিংয়ের জন্য স্ট্রিপ চার্ট রেকর্ডার ব্যবহার।',
      'সঠিক ডিসি পাওয়ার সাপ্লাই পরীক্ষার জন্য পিএমএমসি নির্দেশক মিটারের নির্বাচন।'
    ]
  },
  importantPoints: {
    en: [
      'Absolute instruments require no calibration; Secondary instruments must be calibrated against absolute standards.',
      'Indicating meters show real-time values; Recording meters plot time history; Integrating meters accumulate total values.',
      'Three essential torques required: Deflecting (moves pointer), Controlling (restores zero), Damping (stops oscillations).'
    ],
    hi: [
      'एब्सोल्यूट उपकरणों को अंशांकन की आवश्यकता नहीं होती; सेकेंडरी उपकरणों को अंशांकित किया जाना चाहिए।',
      'इंडिकेटिंग मीटर वास्तविक समय के मान दर्शाते हैं; रिकॉर्डिंग मीटर समय इतिहास प्लॉट करते हैं; इंटीग्रेटिंग मीटर कुल मान संचित करते हैं।',
      'तीन आवश्यक टॉर्क आवश्यक हैं: विक्षेपक (सुई को चलाता है), नियंत्रक (शून्य पुनर्स्थापित करता है), मंदक (दोलनों को रोकता है)।'
    ],
    bn: [
      'অ্যাবসোলিউট ইনস্ট্রুমেন্টের কোনো ক্যালিব্রেশন লাগে না; সেকেন্ডারি ইনস্ট্রুমেন্টকে অবশ্যই স্ট্যান্ডার্ড দিয়ে ক্যালিব্রেট করতে হয়।',
      'ইন্ডিকেটিং মিটার তাৎক্ষণিক মান দেখায়; রেকর্ডারিং মিটার গ্রাফ আঁকে; ইন্টিগ্রেটিং মিটার মোট মান যোগ করে।',
      'তিনটি টর্ক প্রয়োজন: ডিফ্লেক্টিং (কাঁটা সরায়), কন্ট্রোলিং (জিরোতে ফেরত আনে), ড্যাম্পিং (দোলন থামায়)।'
    ]
  },
  commonMistakes: {
    en: [
      'Confusing Gravity Control (non-linear scale) with Spring Control (linear scale).',
      'Operating an indicating meter without damping, causing heavy pointer oscillations and unreadable values.'
    ],
    hi: [
      'ग्रेविटी नियंत्रण (अरैखिक पैमाना) को स्प्रिंग नियंत्रण (रैखिक पैमाना) के साथ भ्रमित करना।',
      'बिना मंदन के इंडिकेटिंग मीटर चलाना, जिससे सुई में भारी दोलन होता है और पाठ्यांक अपठनीय हो जाता है।'
    ],
    bn: [
      'গ্র্যাভিটি কন্ট্রোল (অরৈখিক স্কেল) এবং স্প্রিং কন্ট্রোল (রৈখিক স্কেল) গুলিয়ে ফেলা।',
      'ড্যাম্পিং ছাড়া নির্দেশক মিটার চালানো, যার ফলে কাঁটা দুলতে থাকে এবং সঠিক পাঠ নেওয়া সম্ভব হয় না।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch3-3-1',
      question: {
        en: 'An energy meter measuring total kilowatt-hours (kWh) consumed over a month is classified as what type of instrument?',
        hi: 'एक महीने में खपत की गई कुल किलोवाट-घंटे (kWh) को मापने वाले ऊर्जा मीटर को किस प्रकार के उपकरण के रूप में वर्गीकृत किया गया है?',
        bn: 'এক মাসে ব্যবহৃত মোট কিলোওয়াট-আওয়ার (kWh) পরিমাপকারী এনার্জি মিটার কোন ধরনের ইনস্ট্রুমেন্ট?'
      },
      options: [
        { id: 'a', text: { en: 'Absolute Instrument', hi: 'निरपेक्ष उपकरण', bn: 'অ্যাবসোলিউট ইনস্ট্রুমেন্ট' } },
        { id: 'b', text: { en: 'Indicating Instrument', hi: 'इंडिकेटिंग उपकरण', bn: 'ইন্ডিকেটিং ইনস্ট্রুমেন্ট' } },
        { id: 'c', text: { en: 'Recording Instrument', hi: 'रिकॉर्डिंग उपकरण', bn: 'রেকর্ডারিং ইনস্ট্রুমেন্ট' } },
        { id: 'd', text: { en: 'Integrating Instrument', hi: 'इंटीग्रेटिंग उपकरण', bn: 'ইন্টিগ্রেটিং ইনস্ট্রুমেন্ট' } }
      ],
      correctOptionId: 'd',
      explanation: {
        en: 'Integrating instruments measure and add up the total quantity consumed over a given period.',
        hi: 'इंटीग्रेटिंग उपकरण एक निश्चित अवधि में खपत की गई कुल मात्रा को मापते और जोड़ते हैं।',
        bn: 'ইন্টিগ্রেটিং ইনস্ট্রুমেন্ট নির্দিষ্ট সময়ের মোট ব্যবহার যোগ করে রাখে।'
      }
    },
    {
      id: 'mcq-ch3-3-2',
      question: {
        en: 'In a spring-controlled indicating instrument, the relationship between deflecting torque Td and deflection angle θ at equilibrium is:',
        hi: 'एक स्प्रिंग-नियंत्रित इंडिकेटिंग उपकरण में, साम्यावस्था पर विक्षेपक टॉर्क Td और विक्षेप कोण θ के बीच संबंध है:',
        bn: 'স্প্রিং-নিয়ন্ত্রিত নির্দেশক যন্ত্রে সাম্যাবস্থায় ডিফ্লেক্টিং টর্ক Td এবং বিচ্যুতি কোণ θ এর সম্পর্ক কী?'
      },
      options: [
        { id: 'a', text: { en: 'Td ∝ θ', hi: 'Td ∝ θ', bn: 'Td ∝ θ' } },
        { id: 'b', text: { en: 'Td ∝ sin θ', hi: 'Td ∝ sin θ', bn: 'Td ∝ sin θ' } },
        { id: 'c', text: { en: 'Td ∝ θ²', hi: 'Td ∝ θ²', bn: 'Td ∝ θ²' } },
        { id: 'd', text: { en: 'Td ∝ 1/θ', hi: 'Td ∝ 1/θ', bn: 'Td ∝ 1/θ' } }
      ],
      correctOptionId: 'a',
      explanation: {
        en: 'Spring controlling torque Tc = C·θ. At equilibrium Td = Tc ⟹ Td = C·θ, making deflection directly proportional to Td (linear scale).',
        hi: 'स्प्रिंग नियंत्रक टॉर्क Tc = C·θ। साम्यावस्था पर Td = Tc ⟹ Td ∝ θ (रैखिक पैमाना)।',
        bn: 'স্প্রিং কন্ট্রোলিং টর্ক Tc = C·θ। সাম্যাবস্থায় Td = Tc ⟹ Td ∝ θ (রৈখিক স্কেল)।'
      }
    },
    {
      id: 'mcq-ch3-3-3',
      question: {
        en: 'Which controlling mechanism requires the instrument to be strictly kept in a perfectly vertical position during operation?',
        hi: 'किस नियंत्रण तंत्र में संचालन के दौरान उपकरण को सख्ती से पूरी तरह लंबवत स्थिति में रखना आवश्यक है?',
        bn: 'কোন কন্ট্রোলিং মেকানিজমে কাজ করার সময় মিটারটিকে অবশ্যই পুরোপুরি খাড়া বা ভার্টিকাল পজিশনে রাখতে হয়?'
      },
      options: [
        { id: 'a', text: { en: 'Spring Control', hi: 'स्प्रिंग नियंत्रण', bn: 'স্প্রিং কন্ট্রোল' } },
        { id: 'b', text: { en: 'Gravity Control', hi: 'ग्रेविटी नियंत्रण', bn: 'গ্র্যাভিটি কন্ট্রোল' } },
        { id: 'c', text: { en: 'Fluid Damping Control', hi: 'द्रव मंदन नियंत्रण', bn: 'ফ্লুইড ড্যাম্পিং কন্ট্রোল' } },
        { id: 'd', text: { en: 'Eddy Current Control', hi: 'भंवर धारा नियंत्रण', bn: 'এডি কারেন্ট কন্ট্রোল' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'Gravity control relies on gravitational force acting on small adjustable weights, requiring precise vertical positioning.',
        hi: 'ग्रेविटी नियंत्रण छोटे समायोज्य भार पर गुरुत्वाकर्षण बल पर निर्भर करता है, जिसके लिए लंबवत स्थिति आवश्यक है।',
        bn: 'গ্র্যাভিটি কন্ট্রোল ওজন ও অভिकর্ষ বলের ওপর নির্ভর করে, তাই মিটারটিকে খাড়া রাখতে হয়।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch3-3-1',
      question: {
        en: 'Compare Spring Control and Gravity Control mechanisms across 4 key parameters: scale linearity, position sensitivity, temperature effect, and cost.',
        hi: '4 मुख्य मापदंडों पर स्प्रिंग नियंत्रण और ग्रेविटी नियंत्रण की तुलना करें: पैमाना रैखिकता, स्थिति संवेदनशीलता, तापमान प्रभाव और लागत।',
        bn: '৪টি বিষয় দিয়ে স্প্রিং কন্ট্রোল ও গ্র্যাভিটি কন্ট্রোলের তুলনা করো: স্কেলের সমতা, পজিশন সংবেদনশীলতা, তাপমাত্রার প্রভাব এবং খরচ।'
      },
      hint: {
        en: 'Spring control gives Tc = C·θ (linear), whereas gravity gives Tc = W·d·sinθ (non-linear).',
        hi: 'स्प्रिंग नियंत्रण Tc = C·θ (रैखिक) देता है, जबकि ग्रेविटी Tc = W·d·sinθ (अरैखिक) देता है।',
        bn: 'স্প্রিং কন্ট্রোলে Tc = C·θ (রৈখিক), কিন্তু গ্র্যাভিটি কন্ট্রোলে Tc = W·d·sinθ (অরৈখিক)।'
      },
      answerKey: {
        en: '1) Scale Linearity: Spring Control = Uniform/Linear scale; Gravity Control = Non-uniform (cramped near zero);\n2) Position Sensitivity: Spring = Can be used in any position; Gravity = Must be strictly vertical;\n3) Temperature Effect: Spring = Affected by temperature change (spring constant varies); Gravity = Temperature independent;\n4) Cost: Spring = Slightly higher cost; Gravity = Lower cost.',
        hi: '1) पैमाना रैखिकता: स्प्रिंग = एकसमान; ग्रेविटी = असमान;\n2) स्थिति: स्प्रिंग = किसी भी स्थिति में; ग्रेविटी = केवल लंबवत;\n3) तापमान: स्प्रिंग = प्रभावित होता है; ग्रेविटी = अप्रभावित;\n4) लागत: स्प्रिंग = अधिक; ग्रेविटी = कम।',
        bn: '১) স্কেলের রৈখিকতা: স্প্রিং = সুষম স্কেল; গ্র্যাভিটি = অসুষম স্কেল;\n২) অবস্থান: স্প্রিং = যেকোনো অবস্থানে ব্যবহারযোগ্য; গ্র্যাভিটি = অবশ্যই খাড়া রাখতে হবে;\n৩) তাপমাত্রা: স্প্রিং = তাপমাত্রা সংবেদনশীল; গ্র্যাভিটি = তাপমাত্রায় পরিবর্তন হয় না;\n৪) খরচ: স্প্রিং = বেশি; গ্র্যাভিটি = কম।'
      }
    },
    {
      id: 'pq-ch3-3-2',
      question: {
        en: 'Why is damping torque necessary in an indicating instrument? Explain what happens under under-damped, over-damped, and critically-damped conditions.',
        hi: 'इंडिकेटिंग उपकरण में मंदक टॉर्क (Damping Torque) क्यों आवश्यक है? अंडर-डैंप्ड, ओवर-डैंप्ड और क्रिटिकली-डैंप्ड स्थितियों की व्याख्या करें।',
        bn: 'ইন্ডিকেটিং ইনস্ট্রুমেন্টে ড্যাম্পিং টর্কের প্রয়োজনীয়তা কী? আন্ডার-ড্যাম্পড, ওভার-ড্যাম্পড এবং ক্রিটিক্যালি-ড্যাম্পড অবস্থার ফলাফল ব্যাখ্যা করো।'
      },
      hint: {
        en: 'Without damping, pointer oscillates due to inertia around the final equilibrium reading.',
        hi: 'मंदन के बिना, जड़त्व के कारण सुई अंतिम संतुलित पाठ्यांक के आसपास दोलन करती है।',
        bn: 'ড্যাম্পিং না থাকলে জড়তার কারণে পয়েন্টার সঠিক পাঠের চারপাশে কাঁপতে থাকে।'
      },
      answerKey: {
        en: 'Damping torque stops pointer oscillations so the user can quickly take a steady reading.\n1) Under-damped: Pointer oscillates heavily past equilibrium before settling (wastes time);\n2) Over-damped: Pointer moves excessively slowly to equilibrium position (sluggish);\n3) Critically-damped: Pointer moves smoothly and quickly to exact reading without overshooting (Ideal operating condition).',
        hi: 'मंदन टॉर्क सुई के दोलन को रोकता है ताकि उपयोगकर्ता तुरंत स्थिर पाठ्यांक ले सके।\n1) अंडर-डैंप्ड: सुई बहुत देर तक दोलन करती है;\n2) ओवर-डैंप्ड: सुई बहुत धीरे-धीरे चलती है;\n3) क्रिटिकली-डैंप्ड: सुई बिना किसी दोलन के तुरंत सही स्थान पर रुकती है (आदर्श स्थिति)।',
        bn: 'ড্যাম্পিং টর্ক পয়েন্টারের কাপন থামিয়ে দ্রুত সঠিক মান দেখতে সাহায্য করে।\n১) আন্ডার-ড্যাম্পড: পয়েন্টার কাঁপে ও স্থির হতে সময় নেয়;\n২) ওভার-ড্যাম্পড: পয়েন্টার অত্যন্ত ধীরে ধীরে এগোয় (ধীরগতি);\n৩) ক্রিটিক্যালি-ড্যাম্পড: পয়েন্টার কোনো দোলন ছাড়াই দ্রুত সঠিক মানে গিয়ে স্থির হয় (আদর্শ অবস্থা)।'
}
}
]
};


export const LESSON_PMMC_INSTRUMENTS: Lesson = {
id: 'lsn-ch3-pmmc-instruments',
topicId: 'ch3-pmmc-instruments',
order: 4,
title: {
en: 'Permanent Magnet Moving Coil (PMMC) Instruments',
        hi: 'स्थायी चुंबक मूविंग कॉइल (PMMC) उपकरण',
        bn: 'স্থায়ী চুম্বক মুভিং কয়েল (PMMC) ইনস্ট্রুমেন্ট'
},
easyExplanation: {
en: 'A Permanent Magnet Moving Coil (PMMC) instrument, also known as a D’Arsonval movement, uses a light coil suspended in a strong permanent magnetic field. When DC current passes through the coil, an electromagnetic torque rotates the coil and pointer over a uniform linear scale. PMMC instruments work exclusively on DC.',
        hi: 'स्थायी चुंबक मूविंग कॉइल (PMMC) उपकरण एक हल्की कॉइल का उपयोग करता है जो एक मजबूत स्थायी चुंबकीय क्षेत्र में स्थित होती है। जब कॉइल से DC धारा गुजरती है, तो एक चुंबकीय टॉर्क कॉइल और सुई को एकसमान रैखिक पैमाने पर घुमाता है। PMMC उपकरण केवल DC पर कार्य करते हैं।',
        bn: 'পারমানেন্ট ম্যাগনেট মুভিং কয়েল (PMMC) ইনস্ট্রুমেন্ট একটি শক্তিশালী স্থায়ী চৌম্বক ক্ষেত্রে একটি হালকা কয়েল ব্যবহার করে। যখন কয়েলের মধ্য দিয়ে ডিসি কারেন্ট প্রবাহিত হয়, তখন এটি একটি রৈখিক স্কেলের ওপর কাঁটাকে ঘুরায়। পিএমএমসি মিটার শুধুমাত্র ডিসিতে কাজ করে।'
},
detailedExplanation: {
en: 'Construction & Operating Principle of PMMC Instruments:\n\n1. Constructional Features:\n   - Permanent Magnet: A strong U-shaped permanent magnet made of Alnico creates a high density uniform magnetic field.\n   - Moving Coil: Wound with fine insulated copper wire on a light rectangular aluminum former. Mounted on a steel spindle with jewel bearings.\n   - Soft Iron Core: A stationary cylindrical soft iron core placed inside the coil concentrates magnetic flux radial across the air gap.\n   - Control Springs: Two phosphor-bronze hairsprings wound in opposite directions provide controlling torque (Tc = C·θ) and serve as electrical leads to the coil.\n   - Damping: Eddy current damping is provided by eddy currents induced in the aluminum coil former as it rotates in the permanent magnetic field.\n\n2. Torque Equations & Scale Linearity:\n   - Deflecting Torque: Td = B · I · L · N · r = B · A · N · I\n     (where B = flux density, A = coil area, N = number of turns, I = current)\n   - Controlling Torque: Tc = C · θ\n   - At Equilibrium: Tc = Td ⟹ C · θ = (B · A · N) · I ⟹ θ = (B · A · N / C) · I\n   - Since B, A, N, and C are constants, Deflection Angle θ ∝ Current I.\n   - This produces a completely linear, uniformly spaced scale!\n\n3. Key Characteristics:\n   - Measures DC (Average value) only. If connected to AC, the pointer cannot follow rapid reversals (50 Hz) due to inertia and vibrates around 0.\n   - High torque-to-weight ratio ensures high sensitivity and precision.',
        hi: 'PMMC उपकरणों की संरचना एवं कार्य सिद्धांत:\n\n1. संरचनात्मक विशेषताएँ:\n   - स्थायी चुंबक: अल्निको का यू-आकार चुंबक जो मजबूत चुंबकीय क्षेत्र प्रदान करता है।\n   - मूविंग कॉइल: एल्यूमीनियम फ्रेम पर बारीक तांबे के तार से लपेटी गई कॉइल।\n   - नरम लोहे का कोर: चुंबकीय फ्लक्स को वायु अंतराल में त्रिज्यात्मक (radial) बनाता है।\n   - स्प्रिंग्स: फॉस्फोर-ब्रोंज हेयरस्प्रिंग्स जो नियंत्रक टॉर्क (Tc = C·θ) प्रदान करते हैं।\n   - मंदन: एल्यूमीनियम पूर्ववर्ती में उत्पन्न भंवर धाराओं (Eddy currents) द्वारा मंदन।\n\n2. टॉर्क समीकरण एवं रैखिक पैमाना:\n   - विक्षेपक टॉर्क: Td = B · A · N · I\n   - साम्यावस्था पर: θ = (B · A · N / C) · I ⟹ θ ∝ I (एकसमान रैखिक पैमाना)।\n\n3. मुख्य विशेषताएँ:\n   - केवल DC (औसत मान) मापता है। AC जोड़ने पर सुई शून्य पर कंपन करती है।\n   - उच्च टॉर्क-भार अनुपात उच्च सटीकता प्रदान करता है।',
        bn: 'PMMC ইনস্ট্রুমেন্টের গঠন ও কার্যনীতি:\n\n১. গঠনগত বৈশিষ্ট্য:\n   - স্থায়ী চুম্বক: আলনিকো ধাতু দিয়ে তৈরি U-আকৃতির শক্তিশালী চুম্বক।\n   - মুভিং কয়েল: অ্যালুমিনিয়াম ফ্রেমের ওপর পেঁচানো সুক্ষ্ম তামার তার।\n   - নরম লোহার কোর: বায়ু ফাঁকে ফ্লাক্সকে রাডিয়াল বা ব্যাসার্ধীয় করে তোলে।\n   - স্প্রিং: ফসফর-ব্রোঞ্জ স্প্রিং যা কন্ট্রোলিং টর্ক (Tc = C·θ) তৈরি করে।\n   - ড্যাম্পিং: অ্যালুমিনিয়াম ফ্রেমে সৃষ্ট এডি কারেন্ট ড্যাম্পিং।\n\n২. টর্ক সমীকরণ ও রৈখিক স্কেল:\n   - ডিফ্লেক্টিং টর্ক: Td = B · A · N · I\n   - সাম্যাবস্থায়: θ ∝ I (রৈখিক স্কেল)।\n\n৩. মূল বৈশিষ্ট্য:\n   - শুধুমাত্র ডিসি (গড় মান) মাপে। এসিতে যুক্ত করলে কাঁটা ০ তে কাপতে থাকে।\n   - উচ্চ টর্ক-ওজন অনুপাত নিখুঁত পরিমাপ প্রদান করে।'
},
formulas: [
{
symbol: 'T_d',
expression: 'T_d = B · A · N · I',
description: {
en: 'Deflecting Torque (B = flux density, A = coil area, N = turns, I = current)',
        hi: 'विक्षेपक टॉर्क (B = फ्लक्स घनत्व, A = क्षेत्रफल, N = फेरे, I = धारा)',
        bn: 'ডিফ্লেক্টিং টর্ক (B = ফ্লাক্স ডেনসিটি, A = ক্ষেত্রফল, N = প্যাঁচ, I = কারেন্ট)'
}
},
{
symbol: 'θ',
expression: 'θ = (B · A · N / C) · I   ⟹   θ ∝ I',
description: {
en: 'Linear Scale Deflection Relation (C = spring constant)',
        hi: 'रैखिक पैमाना विक्षेप संबंध (C = स्प्रिंग नियतांक)',
        bn: 'রৈখিক স্কেল বিচ্যুতি সম্পর্ক (C = স্প্রিং ধ্রুবক)'
}
}
],
diagrams: [
{
id: 'diag-ch3-pmmc',
title: {
en: 'PMMC Meter Internal Construction',
        hi: 'PMMC मीटर आंतरिक संरचना',
        bn: 'PMMC মিটারের অভ্যন্তরীণ গঠন'
},
caption: {
en: 'Diagram showing Permanent Magnets, Radial Soft Iron Core, Moving Coil, Hairsprings, and Linear Dial.',
        hi: 'स्थायी चुंबक, नरम लोहे का कोर, मूविंग कॉइल, हेयरस्प्रिंग एवं रैखिक डायल का आरेख।',
        bn: 'স্থায়ী চুম্বক, নরম লোহার কোর, মুভিং কয়েল, স্প্রিং ও রৈখিক স্কেলের চিত্র।'
}
}
],
solvedExamples: [
{
id: 'ex-ch3-4-1',
problem: {
en: 'A PMMC instrument has a coil of dimensions 20 mm × 15 mm wound with 100 turns. The magnetic flux density in the air gap is 0.2 T and the spring control constant C = 2 × 10^-6 N·m/rad. Calculate the deflection angle in degrees when a DC current of 5 mA flows through the coil.',
        hi: 'एक PMMC उपकरण की कॉइल का आकार 20 mm × 15 mm है जिसमें 100 फेरे हैं। वायु अंतराल में चुंबकीय फ्लक्स घनत्व 0.2 T तथा स्प्रिंग नियतांक C = 2 × 10^-6 N·m/rad है। 5 mA धारा प्रवाहित होने पर डिग्री में विक्षेप कोण की गणना करें।',
        bn: 'একটি PMMC মিটারের কয়েলের আকার ২০ mm × ১৫ mm এবং প্যাঁচ সংখ্যা ১০০। চৌম্বক ফ্লাক্স ডেনসিটি ০.২ T এবং স্প্রিং ধ্রুবক C = ২ × ১০^-৬ N·m/rad। ৫ mA ডিসি কারেন্ট গেলে ডিগ্রি এককে ডিফ্লেকশন কত হবে?'
},
givenValues: {
'Area (A)': '20 mm × 15 mm = 300 mm² = 3 × 10^-4 m²',
'Turns (N)': '100',
'Flux Density (B)': '0.2 T',
'Spring Constant (C)': '2 × 10^-6 N·m/rad',
'Current (I)': '5 mA = 5 × 10^-3 A'
},
solution: {
en: '1) Deflecting Torque Td = B · A · N · I\n   Td = 0.2 × (3 × 10^-4) × 100 × (5 × 10^-3) = 3 × 10^-5 N·m.\n\n2) Deflection angle in radians θ = Td / C\n   θ = (3 × 10^-5) / (2 × 10^-6) = 15 radians.\n\n3) Converting to degrees: θ = 15 rad × (180° / π) = 859.4° (or in standard scaled meters θ_deg = 85.9° when scaled proportionally).',
        hi: '1) विक्षेपक टॉर्क Td = B · A · N · I = 3 × 10^-5 N·m।\n2) विक्षेप कोण θ = Td / C = 15 रेडियन।\n3) डिग्री में रूपांतरण = 15 × (180 / π)।',
        bn: '১) ডিফ্লেক্টিং টর্ক Td = B · A · N · I = ৩ × ১০^-৫ N·m।\n২) বিচ্যুতি কোণ θ = Td / C = ১৫ রেডিয়ান।\n৩) ডিগ্রিতে রূপান্তর = ১৫ × (১৮০ / π)।'
},
finalAnswer: {
en: 'Deflecting Torque = 3 × 10^-5 N·m, Deflection = 15 rad (or proportionally scaled)',
        hi: 'विक्षेपक टॉर्क = 3 × 10^-5 N·m, विक्षेप = 15 रेडियन',
        bn: 'ডিফ্লেক্টিং টর্ক = ৩ × ১০^-৫ N·m, ডিফ্লেকশন = ১৫ রেডিয়ান'
}
}
],
practicalApplications: {
en: [
'Precision laboratory DC Ammeters and Voltmeters.',
'Galvanometers for null detection in Wheatstone and potentiometer bridges.',
'Core movement mechanism inside analog multimeters.'
],
        hi: [
'प्रयोगशाला DC अमीटर एवं वोल्टमीटर।',
'वीटस्टोन एवं पोटेंशियोमीटर ब्रिज में शून्य परीक्षण के लिए गैल्वेनोमीटर।',
'एनालॉग मल्टीमीटर का आंतरिक कोर तंत्र।'
],
        bn: [
'ল্যাবরেটরির সুনির্দিষ্ট ডিসি অ্যামিটার ও ভোল্টমিটার।',
'হুইটস্টোন ব্রিজে শূন্য-পাঠ নির্ণয়ের গ্যালভানোমিটার।',
'অ্যানালগ মাল্টিমিটারের মূল মেকানিজম।'
]
},
importantPoints: {
en: [
'PMMC instruments measure ONLY DC (Average) values.',
'Scale is completely linear and uniform (θ ∝ I).',
'Eddy current damping on the aluminum former provides fast, deadbeat response.'
],
        hi: [
'PMMC उपकरण केवल DC (औसत) मान मापते हैं।',
'पैमाना पूर्णतः रैखिक एवं एकसमान होता है (θ ∝ I)।',
'एल्यूमीनियम फ्रेम पर भंवर धारा मंदन त्वरित स्थिरता देता है।'
],
        bn: [
'পিএমএমসি মিটার কেবল ডিসি (গড়) মান পরিমাপ করে।',
'স্কেল সম্পূর্ণরূপে রৈখিক ও সমান ব্যবধানযুক্ত (θ ∝ I)।',
'অ্যালুমিনিয়াম ফ্রেমে এডি কারেন্ট ড্যাম্পিং দ্রুত স্থির পাঠ প্রদান করে।'
]
},
commonMistakes: {
en: [
'Attempting to measure AC voltage or current directly with a PMMC meter without a rectifier (pointer vibrates at zero).',
'Assuming PMMC scale is non-linear like Moving Iron meters.'
],
        hi: [
'बिना रेक्टिफायर के PMMC मीटर से सीधे AC मापने का प्रयास करना (सुई शून्य पर कांपती है)।',
'PMMC पैमाने को मूविंग आयरन की तरह अरैखिक मानना।'
],
        bn: [
'রেকটিফায়ার ছাড়া পিএমএমসি মিটারে এসি মাপার চেষ্টা করা (কাঁটা ০ দাগে কাঁপতে থাকে)।',
'পিএমএমসি স্কেলকে মুভিং আয়রনের মতো অরৈখিক মনে করা।'
]
},
mcqs: [
{
id: 'mcq-ch3-4-1',
question: {
en: 'A Permanent Magnet Moving Coil (PMMC) instrument measures:',
        hi: 'स्थायी चुंबक मूविंग कॉइल (PMMC) उपकरण क्या मापता है?',
        bn: 'পারমানেন্ট ম্যাগনেট মুভিং কয়েল (PMMC) মিটার কী পরিমাপ করে?'
},
options: [
{ id: 'a', text: { en: 'AC RMS Value only', hi: 'केवल AC RMS मान', bn: 'শুধু এসি আরএমএস মান' } },
{ id: 'b', text: { en: 'DC (Average) Value only', hi: 'केवल DC (औसत) मान', bn: 'শুধু ডিসি (গড়) মান' } },
{ id: 'c', text: { en: 'Both AC and DC RMS values', hi: 'AC और DC दोनों RMS मान', bn: 'এসি ও ডিসি উভয় আরএমএস মান' } },
{ id: 'd', text: { en: 'Peak-to-Peak AC value', hi: 'पिक-टू-पिक AC मान', bn: 'পিক-টু-পিক এসি মান' } }
],
correctOptionId: 'b',
explanation: {
en: 'PMMC responds strictly to the average value of current. For symmetrical AC, average value is zero, so the pointer remains at zero.',
        hi: 'PMMC केवल धारा के औसत मान का जवाब देता है। AC का औसत मान शून्य होता है, इसलिए सुई 0 पर रहती है।',
        bn: 'পিএমএমসি কেবল গড় মান পরিমাপ করে। সাইনোসয়ডাল এসির গড় মান শূন্য হওয়ায় কাঁটা ০ তে থাকে।'
}
},
{
id: 'mcq-ch3-4-2',
question: {
en: 'Why is the scale of a PMMC instrument linear?',
        hi: 'PMMC उपकरण का पैमाना रैखिक क्यों होता है?',
        bn: 'PMMC ইনস্ট্রুমেন্টের স্কেল রৈখিক হয় কেন?'
},
options: [
{ id: 'a', text: { en: 'Because deflecting torque is proportional to current (Td ∝ I)', hi: 'क्योंकि विक्षेपक टॉर्क धारा के समानुपाती होता है (Td ∝ I)', bn: 'কারণ ডিফ্লেক্টিং টর্ক কারেন্টের সমানুপাতিক (Td ∝ I)' } },
{ id: 'b', text: { en: 'Because deflecting torque is proportional to square of current (Td ∝ I²)', hi: 'क्योंकि विक्षेपक टॉर्क धारा के वर्ग के समानुपाती होता है', bn: 'কারণ ডিফ্লেক্টিং টর্ক কারেন্টের বর্গের সমানুপাতিক' } },
{ id: 'c', text: { en: 'Because air friction damping is used', hi: 'क्योंकि वायु घर्षण मंदन प्रयुक्त होता है', bn: 'কারণ এয়ার ফ্রিকশন ড্যাম্পিং ব্যবহৃত হয়' } },
{ id: 'd', text: { en: 'Because gravity control is used', hi: 'क्योंकि गुरुत्वाकर्षण नियंत्रण प्रयुक्त होता है', bn: 'কারণ গ্র্যাভিটি কন্ট্রোল ব্যবহৃত হয়' } }
],
correctOptionId: 'a',
explanation: {
en: 'In PMMC, Td = B·A·N·I and Tc = C·θ. Balancing them gives θ = (B·A·N/C)·I, making deflection directly proportional to I.',
        hi: 'Td = B·A·N·I और Tc = C·θ। इन्हें संतुलित करने पर θ ∝ I प्राप्त होता है, जिससे पैमाना रैखिक बनता है।',
        bn: 'Td = B·A·N·I এবং Tc = C·θ। এদের সাম্যাবস্থায় θ ∝ I পাওয়া যায়, ফলে স্কেল রৈখিক হয়।'
}
},
{
id: 'mcq-ch3-4-3',
question: {
en: 'Which type of damping is employed in PMMC instruments?',
        hi: 'PMMC उपकरणों में किस प्रकार का मंदन (Damping) उपयोग किया जाता है?',
        bn: 'PMMC মিটারে কোন ধরনের ড্যাম্পিং ব্যবহার করা হয়?'
},
options: [
{ id: 'a', text: { en: 'Air Friction Damping', hi: 'वायु घर्षण मंदन', bn: 'এয়ার ফ্রিকশন ড্যাম্পিং' } },
{ id: 'b', text: { en: 'Fluid Friction Damping', hi: 'द्रव घर्षण मंदन', bn: 'ফ্লুইড ফ্রিকশন ড্যাম্পিং' } },
{ id: 'c', text: { en: 'Eddy Current Damping', hi: 'भंवर धारा (Eddy Current) मंदन', bn: 'এডি কারেন্ট ড্যাম্পিং' } },
{ id: 'd', text: { en: 'Hysteresis Damping', hi: 'हिस्टैरिसीस मंदन', bn: 'হিস্টেরেসিস ড্যাম্পিং' } }
],
correctOptionId: 'c',
explanation: {
en: 'Eddy currents induced in the metallic aluminum coil former rotating in the permanent magnetic field provide effective damping.',
        hi: 'स्थायी चुंबकीय क्षेत्र में घूमते धातु एल्यूमीनियम फ्रेम में भंवर धाराएँ प्रभावी मंदन प्रदान करती हैं।',
        bn: 'স্থায়ী চৌম্বক ক্ষেত্রে অ্যালুমিনিয়াম সাবেক ঘোরে এডি কারেন্ট সৃষ্টি হয়ে নিখুঁত ড্যাম্পিং প্রদান করে।'
}
}
],
practiceQuestions: [
{
id: 'pq-ch3-4-1',
question: {
en: 'Explain with neat torque equations why a PMMC meter cannot be used directly to measure AC power supply current.',
        hi: 'टॉर्क समीकरणों के साथ समझाइए कि PMMC मीटर का उपयोग सीधे AC बिजली आपूर्ति धारा को मापने के लिए क्यों नहीं किया जा सकता है।',
        bn: 'টর্ক সমীকরণসহ ব্যাখ্যা করো কেন একটি PMMC মিটার সরাসরি এসি পাওয়ার পরিমাপে ব্যবহার করা যায় না।'
},
hint: {
en: 'Consider the direction of deflecting torque during positive and negative half-cycles of AC.',
        hi: 'AC के धनात्मक और ऋणात्मक अर्ध-चक्रों के दौरान विक्षेपक टॉर्क की दिशा पर विचार करें।',
        bn: 'এসির পজিটিভ ও নেগেটিভ হাফ সাইকেলে ডিফ্লেক্টিং টর্কের দিকের কথা চিন্তা করো।'
},
answerKey: {
en: '1) Deflecting torque Td = B·A·N·I. Since B is fixed by permanent magnet, Td changes direction whenever current I reverses.\n2) During positive half-cycle, Td acts clockwise. During negative half-cycle, Td acts counter-clockwise.\n3) At 50 Hz supply frequency, torque reverses 100 times/sec. Due to mechanical inertia of coil and pointer, the movement cannot respond and stays vibrating at zero.',
        hi: '1) Td = B·A·N·I। B स्थिर है, इसलिए I बदलने पर Td की दिशा बदलती है।\n2) AC के सकारात्मक अर्ध-चक्र में टॉर्क घड़ी की दिशा में तथा नकारात्मक अर्ध-चक्र में विपरीत दिशा में लगता है।\n3) 50 Hz पर प्रति सेकंड 100 बार टॉर्क बदलता है, जिससे जड़त्व के कारण सुई 0 पर स्थिर कांपती रहती है।',
        bn: '১) Td = B·A·N·I সমীকরণে B স্থির থাকায় কারেন্ট দিক বদলালে টর্কের দিক বদলায়।\n২) পজিটিভ সাইকেলে টর্ক ঘড়ির কাঁটার দিকে এবং নেগেটিভ সাইকেলে বিপরীতে কাজ করে।\n৩) ৫০ হার্জ এসি সরবরাহে প্রতি সেকেন্ডে ১০০ বার দিক বদল হওয়ায় জড়তার কারণে কাঁটা ০ দাগে কাঁপতে থাকে।'
}
},
{
id: 'pq-ch3-4-2',
question: {
en: 'A PMMC meter movement has a full-scale deflection current of 1 mA and internal coil resistance of 100 Ω. How can it be converted into a Voltmeter reading up to 100 V?',
        hi: 'एक PMMC मीटर में 1 mA की पूर्ण-पैमाना धारा और 100 Ω का आंतरिक प्रतिरोध है। इसे 100 V तक मापने वाले वोल्टमीटर में कैसे बदला जा सकता है?',
        bn: 'একটি PMMC মিটারের ফুল-স্কেল কারেন্ট ১ mA এবং অভ্যন্তরীণ রোধ ১০০ Ω। এটিকে কীভাবে ১০০ V পরিমাপক ভোল্টমিটারে রূপান্তর করবে?'
},
hint: {
en: 'Calculate the required series multiplier resistance Rs = (V / I_fs) - R_m.',
        hi: 'आवश्यक श्रेणी गुणक प्रतिरोध Rs = (V / I_fs) - R_m की गणना करें।',
        bn: 'প্রয়োজনীয় সিরিজ রেজিস্ট্যান্স Rs = (V / I_fs) - R_m এর সূত্র ব্যবহার করো।'
},
answerKey: {
en: '1) Total resistance required R_total = V_max / I_fs = 100 V / (1 × 10^-3 A) = 100,000 Ω = 100 kΩ.\n2) Series Multiplier Resistance Rs = R_total - R_m = 100,000 Ω - 100 Ω = 99,900 Ω = 99.9 kΩ.\n3) Connect a 99.9 kΩ non-inductive resistor in series with the PMMC meter coil.',
        hi: '1) कुल आवश्यक प्रतिरोध = 100 V / 1 mA = 100,000 Ω = 100 kΩ।\n2) श्रेणी गुणक प्रतिरोध Rs = 100,000 - 100 = 99,900 Ω = 99.9 kΩ।\n3) PMMC कॉइल के साथ श्रेणी में 99.9 kΩ का प्रतिरोध जोड़ें।',
        bn: '১) মোট প্রয়োজনীয় রোধ = ১০০ V / ১ mA = ১০০,০০০ Ω = ১০০ kΩ।\n২) সিরিজ মাল্টিপ্লায়ার রোধ Rs = ১০০,০০০ - ১০০ = ৯৯,৯০০ Ω = ৯৯.৯ kΩ।\n৩) PMMC মিটারের সাথে ৯৯.৯ kΩ রোধ সিরিজে সংযুক্ত করতে হবে।'
}
}
]
};


export const LESSON_MOVING_IRON: Lesson = {
id: 'lsn-ch3-moving-iron',
topicId: 'ch3-moving-iron',
order: 5,
title: {
en: 'Moving Iron (MI) Instruments',
        hi: 'मूविंग आयरन (MI) उपकरण',
        bn: 'মুভিং আয়রন (MI) ইনস্ট্রুমেন্ট'
},
easyExplanation: {
en: 'Moving Iron (MI) instruments use soft iron vanes that are magnetized by the field of a stationary coil. Because the magnetic force depends on current squared (I²), MI instruments measure True RMS values on both AC and DC supplies!',
        hi: 'मूविंग आयरन (MI) उपकरण नरम लोहे की पत्तियों का उपयोग करते हैं जो एक स्थिर कॉइल द्वारा चुंबकीय होती हैं। चूंकि चुंबकीय बल धारा के वर्ग (I²) पर निर्भर करता है, MI उपकरण AC और DC दोनों पर वास्तविक RMS मान मापते हैं!',
        bn: 'মুভিং আয়রন (MI) ইনস্ট্রুমেন্ট একটি স্থির কয়েলের চৌম্বক ক্ষেত্র দ্বারা নরম লোহার পাত চুম্বকিত করে কাজ করে। এর বল কারেন্টের বর্গের (I²) ওপর নির্ভর করে বলে এটি এসি ও ডিসি উভয়েই ট্রু আরএমএস মান মাপে!'
},
detailedExplanation: {
en: 'Moving Iron (MI) Instruments Construction and Working Principle:\n\n1. Types of MI Instruments:\n   a) Attraction Type: A single soft iron disc is attracted into the magnetic field created at the center of a current-carrying solenoid coil.\n   b) Repulsion Type: Consists of two soft iron vanes placed inside the solenoid coil—one fixed vane and one moving vane. Current in the coil magnetizes both vanes with identical polarities, creating repulsion force.\n\n2. Torque Equation & Non-Linear Scale:\n   - Deflecting Torque: Td = 0.5 · I² · (dL / dθ)\n     (where L = self-inductance of coil, dL/dθ = rate of change of inductance with angle θ)\n   - Controlling Torque: Tc = C · θ (Spring control)\n   - At Equilibrium: C · θ = 0.5 · I² · (dL / dθ) ⟹ θ ∝ I²\n   - Because deflection θ is proportional to current squared (I²):\n     • Instrument measures True RMS value regardless of waveform shape (sinusoidal or non-sinusoidal AC waveforms at power frequencies).\n     • The scale is non-linear (cramped/crowded near zero and expanded at higher values).\n\n3. Damping & Shielding:\n   - Air Friction Damping is used (using a lightweight aluminum vane in an air chamber) to avoid using permanent magnets that would distort the coil field.\n   - Iron shielding protects against external stray magnetic fields.',
        hi: 'मूविंग आयरन (MI) उपकरणों की संरचना एवं कार्य सिद्धांत:\n\n1. प्रकार:\n   क) आकर्षण प्रकार: सोलेनोइड कॉइल के चुंबकीय क्षेत्र में एक लोहे की डिस्क आकर्षित होती है।\n   ख) प्रतिकर्षण प्रकार: कॉइल के भीतर दो लोहे की पत्तियां समान ध्रुवता से चुंबकीय होकर प्रतिकर्षित होती हैं।\n\n2. टॉर्क समीकरण एवं अरैखिक पैमाना:\n   - विक्षेपक टॉर्क: Td = 0.5 · I² · (dL / dθ)\n   - साम्यावस्था पर: θ ∝ I² (पैमाना अरैखिक/Non-linear होता है, शुरुआती अंक पास-पास होते हैं)।\n   - धारा के वर्ग (I²) पर निर्भरता के कारण यह AC और DC दोनों पर True RMS मान मापता है।\n\n3. मंदन:\n   - वायु घर्षण मंदन (Air Friction Damping) का उपयोग होता है।',
        bn: 'মুভিং আয়রন (MI) ইনস্ট্রুমেন্টের গঠন ও কার্যনীতি:\n\n১. প্রকারভেদ:\n   ক) আকর্ষণ টাইপ: কয়েলের কেন্দ্রে লোহার পাত আকর্ষিত হয়।\n   খ) বিকর্ষণ টাইপ: কয়েলের ভেতরের দুটি পাত একই মেরু পেয়ে পরস্পরকে ঠেলে সরিয়ে দেয়।\n\n২. টর্ক সমীকরণ ও অরৈখিক স্কেল:\n   - ডিফ্লেক্টিং টর্ক: Td = 0.5 · I² · (dL / dθ)\n   - সাম্যাবস্থায়: θ ∝ I² (স্কেল অরৈখিক, শুরুর দিকে ঘন সন্নিবেশিত)।\n   - কারেন্টের বর্গের (I²) সাপেক্ষে ডিফ্লেকশন হওয়ায় এটি এসি ও ডিসিতে ট্রু আরএমএস মান মাপে।\n\n৩. ড্যাম্পিং:\n   - এরিয়া ফ্রিকশন ড্যাম্পিং ব্যবহৃত হয়।'
},
formulas: [
{
symbol: 'T_d',
expression: 'T_d = 0.5 · I² · (dL / dθ)',
description: {
en: 'Deflecting Torque (L = inductance, θ = deflection angle)',
        hi: 'विक्षेपक टॉर्क (L = प्रेरकत्व, θ = विक्षेप कोण)',
        bn: 'ডিফ্লেক্টিং টর্ক (L = ইন্ডিউসড আবেশক, θ = বিচ্যুতি কোণ)'
}
},
{
symbol: 'θ',
expression: 'θ ∝ I²',
description: {
en: 'Non-linear Scale Relation (Deflection proportional to square of RMS current)',
        hi: 'अरैखिक पैमाना संबंध (विक्षेप RMS धारा के वर्ग के समानुपाती)',
        bn: 'অরৈখিক স্কেল সম্পর্ক (বিচ্যুতি আরএমএস কারেন্টের বর্গের সমানুপাতিক)'
}
}
],
diagrams: [
{
id: 'diag-ch3-moving-iron',
title: {
en: 'Attraction & Repulsion Type Moving Iron Meter',
        hi: 'आकर्षण एवं प्रतिकर्षण प्रकार मूविंग आयरन मीटर',
        bn: 'আকর্ষণ ও বিকর্ষণ টাইপ মুভিং আয়রন মিটার'
},
caption: {
en: 'Diagrams illustrating solenoid coil, soft iron vanes, air damping chamber, and non-linear scale.',
        hi: 'सोलेनोइड कॉइल, लोहे की पत्ती, वायु मंदन कक्ष एवं अरैखिक पैमाने का आरेख।',
        bn: 'সোলেনয়েড কয়েল, নরম লোহার পাত, এয়ার ড্যাম্পিং চেম্বার ও অরৈখিক স্কেলের চিত্র।'
}
}
],
solvedExamples: [
{
id: 'ex-ch3-5-1',
problem: {
en: 'The inductance of a Moving Iron ammeter is given by L = (10 + 3θ - 0.5θ²) µH, where θ is deflection in radians. The control spring constant is C = 10 × 10^-6 N·m/rad. Calculate the deflection in radians for a current of 5 A.',
        hi: 'एक मूविंग आयरन अमीटर का प्रेरकत्व L = (10 + 3θ - 0.5θ²) µH है, जहाँ θ रेडियन में विक्षेप है। स्प्रिंग नियतांक C = 10 × 10^-6 N·m/rad है। 5 A धारा के लिए रेडियन में विक्षेप ज्ञात कीजिए।',
        bn: 'একটি মুভিং আয়রন অ্যামিটারের আবেশক L = (১০ + ৩θ - ০.৫θ²) µH, যেখানে θ রেডিয়ানে ডিফ্লেকশন। স্প্রিং ধ্রুবক C = ১০ × ১০^-৬ N·m/rad। ৫ A কারেন্টের জন্য ডিফ্লেকশন নির্ণয় করো।'
},
givenValues: {
'L': '(10 + 3θ - 0.5θ²) × 10^-6 H',
'dL/dθ': '(3 - θ) × 10^-6 H/rad',
'C': '10 × 10^-6 N·m/rad',
'I': '5 A'
},
solution: {
en: '1) dL/dθ = (3 - θ) × 10^-6 H/rad.\n2) Deflecting Torque Td = 0.5 · I² · (dL/dθ) = 0.5 × 25 × (3 - θ) × 10^-6 = 12.5(3 - θ) × 10^-6 N·m.\n3) Controlling Torque Tc = C · θ = 10 × 10^-6 · θ.\n4) Equating Tc = Td:\n   10·θ = 12.5(3 - θ) = 37.5 - 12.5·θ\n   22.5·θ = 37.5  ⟹  θ = 37.5 / 22.5 = 1.67 radians.',
        hi: '1) dL/dθ = (3 - θ) × 10^-6।\n2) Td = 0.5 × 25 × (3 - θ) × 10^-6 = 12.5(3 - θ) × 10^-6 N·m।\n3) Tc = 10 × 10^-6 · θ।\n4) 22.5·θ = 37.5 ⟹ θ = 1.67 रेडियन।',
        bn: '১) dL/dθ = (৩ - θ) × ১০^-৬।\n২) Td = ০.৫ × ২৫ × (৩ - θ) × ১০^-৬ = ১২.৫(৩ - θ) × ১০^-৬ N·m।\n৩) Tc = ১০ × ১০^-৬ · θ।\n৪) ২২.৫·θ = ৩৭.৫ ⟹ θ = ১.৬৭ রেডিয়ান।'
},
finalAnswer: {
en: 'Deflection angle θ = 1.67 radians (approx 95.6°)',
        hi: 'विक्षेप कोण θ = 1.67 रेडियन (लगभग 95.6°)',
        bn: 'ডিফ্লেকশন কোণ θ = ১.৬৭ রেডিয়ান (প্রায় ৯৫.৬°)'
}
}
],
practicalApplications: {
en: [
'Commercial switchboard AC Ammeters and Voltmeters.',
'Rugged industrial measuring instruments for power plants.',
'General purpose AC mains line monitoring.'
],
        hi: [
'व्यावसायिक स्विचबोर्ड AC अमीटर एवं वोल्टमीटर।',
'पावर प्लांट हेतु मजबूत औद्योगिक मापन उपकरण।',
'सामान्य AC मेन्स लाइन मॉनिटरिंग।'
],
        bn: [
'বাণিজ্যিক সুইচবোর্ড এসি অ্যামিটার ও ভোল্টমিটার।',
'বিদ্যুৎ কেন্দ্রের জন্য শিল্পমানের টেকসই মিটার।',
'সাধারণ এসি মেইনস লাইন মনিটরিং।'
]
},
importantPoints: {
en: [
'Measures True RMS value for both AC and DC supplies.',
'Deflection is proportional to current squared (θ ∝ I²), making the scale cramped near zero.',
'Air friction damping is used to prevent magnetic field distortions.'
],
        hi: [
'AC और DC दोनों के लिए True RMS मान मापता है।',
'विक्षेप धारा के वर्ग के समानुपाती (θ ∝ I²) होता है जिससे शुरुआती पैमाना संकीर्ण होता है।',
'वायु घर्षण मंदन का उपयोग चुंबकीय क्षेत्र विकृति रोकने हेतु किया जाता है।'
],
        bn: [
'এসি ও ডিসি উভয়ের জন্য ট্রু আরএমএস মান পরিমাপ করে।',
'ডিফ্লেকশন কারেন্টের বর্গের সমানুপাতিক (θ ∝ I²), ফলে স্কেলের শুরুর দিকে দাগগুলো ঘন হয়।',
'চৌম্বক ক্ষেত্রের বিকৃতি এড়াতে এয়ার ফ্রিকশন ড্যাম্পিং ব্যবহৃত হয়।'
]
},
commonMistakes: {
en: [
'Assuming Moving Iron scale is linear (it is non-linear due to I² dependence!).',
'Confusing Eddy Current Damping with Air Friction Damping in MI instruments (MI uses air friction damping).'
],
        hi: [
'मूविंग आयरन पैमाने को रैखिक मानना (I² निर्भरता के कारण यह अरैखिक है!)।',
'MI उपकरणों में भंवर धारा मंदन और वायु घर्षण मंदन में भ्रमित होना।'
],
        bn: [
'মুভিং আয়রন স্কেলকে রৈখিক মনে করা (I² এর কারণে এটি অরৈখিক!)।',
'মুভিং আয়রনে এডি কারেন্টের পরিবর্তে এয়ার ফ্রিকশন ড্যাম্পিং ব্যবহৃত হয় তা ভুলে যাওয়া।'
]
},
mcqs: [
{
id: 'mcq-ch3-5-1',
question: {
en: 'A Moving Iron (MI) instrument responds to:',
        hi: 'मूविंग आयरन (MI) उपकरण किस मान का जवाब देता है?',
        bn: 'মুভিং আয়রন (MI) মিটার কী মান নির্দেশ করে?'
},
options: [
{ id: 'a', text: { en: 'Average value of current', hi: 'धारा का औसत मान', bn: 'কারেন্টের গড় মান' } },
{ id: 'b', text: { en: 'True RMS value of current', hi: 'धारा का वास्तविक RMS मान', bn: 'কারেন্টের ট্রু আরএমএস মান' } },
{ id: 'c', text: { en: 'Peak value of current', hi: 'धारा का शिखर (Peak) मान', bn: 'কারেন্টের পিক মান' } },
{ id: 'd', text: { en: 'Instantaneous current at maximum', hi: 'अधिकतम तात्कालिक धारा', bn: 'সর্বোচ্চ তাৎক্ষণিক কারেন্ট' } }
],
correctOptionId: 'b',
explanation: {
en: 'Because deflecting torque Td ∝ I², the average torque is proportional to the mean square value of current, making deflection indicate true RMS value.',
        hi: 'चूँकि विक्षेपक टॉर्क Td ∝ I², औसत टॉर्क धारा के मध्यमान वर्ग के समानुपाती होता है जिससे यह True RMS दर्शाता है।',
        bn: 'যেহেতু Td ∝ I², গড় টর্ক কারেন্টের গড় বর্গমানের সমানুপাতিক, ফলে এটি ট্রু আরএমএস মান নির্দেশ করে।'
}
},
{
id: 'mcq-ch3-5-2',
question: {
en: 'Which type of damping is used in Moving Iron instruments?',
        hi: 'मूविंग आयरन उपकरणों में किस प्रकार का मंदन (Damping) प्रयुक्त होता है?',
        bn: 'মুভিং আয়রন যন্ত্রে কোন ধরনের ড্যাম্পিং ব্যবহৃত হয়?'
},
options: [
{ id: 'a', text: { en: 'Eddy current damping', hi: 'भंवर धारा मंदन', bn: 'এডি কারেন্ট ড্যাম্পিং' } },
{ id: 'b', text: { en: 'Air friction damping', hi: 'वायु घर्षण (Air friction) मंदन', bn: 'এয়ার ফ্রিকশন ড্যাম্পিং' } },
{ id: 'c', text: { en: 'Fluid friction damping', hi: 'द्रव घर्षण मंदन', bn: 'ফ্লুইড ফ্রিকশন ড্যাম্পিং' } },
{ id: 'd', text: { en: 'Gravity damping', hi: 'गुरुत्वाकर्षण मंदन', bn: 'গ্র্যাভিটি ড্যাম্পিং' } }
],
correctOptionId: 'b',
explanation: {
en: 'Air friction damping is used to prevent permanent magnets needed for eddy current damping from distorting the coil’s weak magnetic field.',
        hi: 'एडी करंट डैम्पिंग हेतु आवश्यक चुंबक के कारण कॉइल के कमजोर चुंबकीय क्षेत्र में विकृति न हो, इसलिए वायु घर्षण मंदन प्रयुक्त होता है।',
        bn: 'এডি কারেন্টের চুম্বক ক্ষেত্রের প্রভাব এড়িয়ে নির্ঝঞ্ঝাট পরিচালনার জন্য এয়ার ফ্রিকশন ড্যাম্পিং ব্যবহার করা হয়।'
}
},
{
id: 'mcq-ch3-5-3',
question: {
en: 'How does the scale of a Moving Iron instrument behave near its zero mark?',
        hi: 'मूविंग आयरन उपकरण का पैमाना शून्य अंक के निकट कैसा व्यवहार करता है?',
        bn: 'মুভিং আয়রন যন্ত্রের স্কেল ০ দাগের কাছাকাছি কেমন দেখায়?'
},
options: [
{ id: 'a', text: { en: 'Linearly spaced', hi: 'रैखिक रूप से फैला हुआ', bn: 'রৈখিকভাবে সমান' } },
{ id: 'b', text: { en: 'Cramped or crowded', hi: 'संकीर्ण या पास-पास (Cramped)', bn: 'ঘন বা খুব কাছাকাছি (Cramped)' } },
{ id: 'c', text: { en: 'Widely separated', hi: 'बहुत दूर-दूर', bn: 'খুব দূরে দূরে' } },
{ id: 'd', text: { en: 'Logarithmically expanded', hi: 'लघुगणकीय रूप से विस्तारित', bn: 'লগারিদমিকভাবে বিস্তৃত' } }
],
correctOptionId: 'b',
explanation: {
en: 'Since θ ∝ I², small currents produce extremely small torque and deflection, making the initial scale markings cramped.',
        hi: 'चूँकि θ ∝ I², छोटी धाराओं पर टॉर्क बहुत कम होता है, जिससे शुरुआती पैमाना संकीर्ण (Cramped) होता है।',
        bn: 'যেহেতু θ ∝ I², কম কারেন্টে ডিফ্লেকশন অতি ক্ষুদ্র হয়, ফলে স্কেলের শুরুর দিকের দাগগুলো ঘন সন্নিবেশিত থাকে।'
}
}
],
practiceQuestions: [
{
id: 'pq-ch3-5-1',
question: {
en: 'Compare Attraction-type and Repulsion-type Moving Iron instruments in terms of construction and working principle.',
        hi: 'संरचना एवं कार्य सिद्धांत के आधार पर आकर्षण प्रकार और प्रतिकर्षण प्रकार के मूविंग आयरन उपकरणों की तुलना कीजिए।',
        bn: 'গঠন ও কার্যনীতির ভিত্তিতে আকর্ষণ টাইপ ও বিকর্ষণ টাইপ মুভিং আয়রন মিটারের তুলনা করো।'
},
hint: {
en: 'Focus on how the soft iron element is positioned and magnetized relative to the solenoid field coil.',
        hi: 'विचार करें कि सोलेनोइड कॉइल के सापेक्ष नरम लोहे की पत्ती कैसे स्थित और चुंबकीय होती है।',
        bn: 'সোলেনয়েড কয়েলের সাপেক্ষে আয়রন ভেন কীভাবে চুম্বকিত হয় তা নিয়ে ভাবো।'
},
answerKey: {
en: '1) Attraction Type: Contains an oval soft iron disc attached to a spindle. When current flows in solenoid coil, magnetic field draws the iron disc into the center of coil where field is strongest.\n2) Repulsion Type: Contains two soft iron vanes inside the coil—one fixed, one moving. Current magnetizes both vanes with identical polarities at the same ends, causing repulsion which moves the pointer.\n3) Repulsion type is generally preferred in commercial meters due to greater accuracy and better scale linearity.',
        hi: '1) आकर्षण प्रकार: लोहे की पत्ती कॉइल के केंद्र में खींची जाती है।\n2) प्रतिकर्षण प्रकार: कॉइल के भीतर दो लोहे की पत्तियां समान ध्रुवता से चुंबकीय होकर एक-दूसरे को प्रतिकर्षित करती हैं।\n3) प्रतिकर्षण प्रकार अधिक सटीक और वाणिज्यिक मीटरों में लोकप्रिय है।',
        bn: '১) আকর্ষণ টাইপ: কয়েলে কারেন্ট গেলে লোহা কেন্দ্র প্যানে আকর্ষিত হয়।\n২) বিকর্ষণ টাইপ: কয়েলের ভেতরে থাকা দুটি আয়রন পাত একই পোলারিটি পেয়ে পরস্পরকে ঠেলে সরিয়ে দেয়।\n৩) বিকর্ষণ টাইপ বাণিজ্যিক মিটারে অধিক ব্যবহৃত হয়।'
}
},
{
id: 'pq-ch3-5-2',
question: {
en: 'Explain why Moving Iron instruments suffer from hysteresis error on DC, but not significantly on AC.',
        hi: 'समझाइए कि मूविंग आयरन उपकरण DC पर हिस्टैरिसीस त्रुटि से क्यों ग्रस्त होते हैं, लेकिन AC पर नहीं।',
        bn: 'মুভিং আয়রন মিটার কেন ডিসিতে হিস্টেরেসিস ত্রুটি প্রদর্শন করে, কিন্তু এসিতে করে না ব্যাখ্যা করো।'
},
hint: {
en: 'Consider residual magnetism in the soft iron core during increasing vs decreasing DC current.',
        hi: 'बढ़ते बनाम घटते DC करंट के दौरान नरम लोहे की पत्ती में अवशिष्ट चुंबकत्व पर विचार करें।',
        bn: 'ডিসি কারেন্ট বাড়া ও কমানোর সময় আয়রন ভেনের অবশিষ্ট চুম্বকত্বের কথা ভাবো।'
},
answerKey: {
en: '1) On DC, due to hysteresis property of soft iron, the flux density B for decreasing current is higher than for increasing current at the same current value (residual magnetism).\n2) This causes meter reading to be slightly higher when current is decreasing than when it is increasing.\n3) On AC, current reverses direction 100 times per second (at 50 Hz), constantly cycling the iron through hysteresis loops, averaging out residual flux effect.',
        hi: '1) DC पर घटते करंट के समय अवशिष्ट चुंबकत्व के कारण रीडिंग थोड़ी अधिक होती है।\n2) AC पर प्रति सेकंड 100 बार दिशा बदलने से अवशिष्ट चुंबकत्व का प्रभाव औसत होकर समाप्त हो जाता है।',
        bn: '১) ডিসিতে কারেন্ট কমানোর সময় অবশিষ্ট চুম্বকত্বের কারণে রিডিং সামান্য বেশি দেখায়।\n২) এসিতে প্রতি সেকেন্ডে ১০০ বার দিক পরিবর্তিত হওয়ায় অবশিষ্টাংশ ট্র্যাকিং গড় হয়ে হিস্টেরেসিস প্রভাব দূর হয়।'
}
}
]
};


export const LESSON_ELECTRODYNAMOMETER: Lesson = {
id: 'lsn-ch3-electrodynamometer',
topicId: 'ch3-electrodynamometer',
order: 6,
title: {
en: 'Electrodynamometer Instruments',
        hi: 'इलेक्ट्रोडायनेमोमीटर उपकरण (Electrodynamometer Instruments)',
        bn: 'ইলেক্ট্রোডায়নামোমিটার যন্ত্র (Electrodynamometer Instruments)'
},
easyExplanation: {
en: 'An Electrodynamometer instrument replaces permanent magnets with air-cored fixed coils. When current flows through both fixed and moving coils, their magnetic fields interact to turn the pointer. When used as a Wattmeter, it measures true AC Active Power (P = V·I·cosφ) on a completely linear scale!',
        hi: 'इलेक्ट्रोडायनेमोमीटर उपकरण में स्थायी चुंबक की जगह फिक्स्ड कॉइल्स होती हैं। जब फिक्स्ड और मूविंग कॉइल्स दोनों से करंट बहता है, तो उनके चुंबकीय क्षेत्र सुई को घुमाते हैं। वाटमीटर के रूप में यह AC सक्रिय शक्ति (P = V·I·cosφ) को बिल्कुल रैखिक पैमाने पर मापता है!',
        bn: 'ইলেক্ট্রোডায়নামোমিটার যন্ত্রে স্থায়ী চুম্বকের পরিবর্তে এয়ার-কোর ফিক্সড কয়েল থাকে। ফিক্সড ও মুভিং কয়েলের মধ্য দিয়ে কারেন্ট গেলে তাদের চৌম্বক ক্ষেত্রের বিক্রিয়া কাঁটাকে ঘোরায়। ওয়াটমিটার হিসেবে এটি এক্টিভ পাওয়ারকে (P = V·I·cosφ) রৈখিক স্কেলে নিখুঁত মাপে!'
},
detailedExplanation: {
en: 'Electrodynamometer instruments are air-cored transfer instruments operating on the magnetic force exerted between fixed coils and a moving coil.\n\nConstructional Details:\n1) Fixed Coils (Current Coil - CC): Split into two coaxial halves to provide a uniform magnetic field in the central region where the moving coil rotates. Wound with thick wire for carrying circuit current.\n2) Moving Coil (Pressure/Voltage Coil - PC): Mounted on an aluminum spindle positioned between the fixed coil halves. Wound with fine wire and connected in series with a high non-inductive resistance across the voltage supply.\n3) Damping: Air Friction Damping (piston and air chamber) is employed to prevent eddy current distortions that metal damping parts would introduce into the air-core field.\n4) Control Springs: Phosphor-bronze hairsprings provide controlling torque Tc = k·θ and serve as leads to the moving coil.\n\nOperating Principle & Wattmeter Formula:\n• Deflecting Torque: Td = I_fixed · I_moving · (dM / dθ)\n• In Wattmeter Connection:\n  - Fixed Coil Current I_f = Load Current I\n  - Moving Coil Current I_m = V / R_p (proportional to Load Voltage V and in-phase with V)\n• Average Deflecting Torque: Td_avg ∝ V · I · cos φ = Active Power P\n• Equilibrium: Tc = Td ⟹ k·θ ∝ P ⟹ θ ∝ P (Linear Power Scale!)\n\nAdvantages & Limitations:\n• Advantages: High accuracy, measures AC and DC active power, acts as a Transfer Instrument (produces identical deflection for equal DC and AC RMS values due to air-cored construction without iron losses, allowing calibration on precision DC standards for direct AC RMS measurement), linear scale for wattmeter.\n• Limitations: Weak magnetic field (air-cored) requires high current/power, susceptible to stray magnetic fields (requires iron shielding), higher cost.',
        hi: 'इलेक्ट्रोडायनेमोमीटर उपकरण एयर-कोर्ड ट्रांसफर उपकरण हैं जो फिक्स्ड कॉइल्स और मूविंग कॉइल के बीच चुंबकीय बल पर कार्य करते हैं।\n\nसंरचनात्मक विवरण:\n1) फिक्स्ड कॉइल्स (करंट कॉइल - CC): दो भागों में विभाजित जो एकसमान चुंबकीय क्षेत्र बनाती हैं।\n2) मूविंग कॉइल (प्रेशर कॉइल - PC): फिक्स्ड कॉइल्स के बीच स्थित होती है तथा उच्च प्रतिरोध के साथ श्रेणी में सप्लाई पर जुड़ी होती है।\n3) मंदन: वायु घर्षण मंदन (Air Friction Damping)।\n\nवाटमीटर सिद्धांत एवं सूत्र:\n• विक्षेपक टॉर्क: Td = I_f · I_m · (dM / dθ)\n• वाटमीटर संयोजन में:\n  - I_f = लोड धारा I\n  - I_m = V / R_p\n• औसत टॉर्क: Td_avg ∝ V · I · cos φ = सक्रिय शक्ति P\n• साम्यावस्था: θ ∝ P (वाटमीटर के लिए रैखिक पैमाना!)।\n\nमुख्य लाभ:\n• ट्रांसफर इंस्ट्रूमेंट (DC पर कैलिब्रेट करके AC पर सीधे प्रयोग योग्य)।\n• वाटमीटर के रूप में अत्यंत सटीक व रैखिक पैमाना।',
        bn: 'ইলেক্ট্রোডায়নামোমিটার যন্ত্র এয়ার-কোর যুক্ত ট্রান্সফার মিটায় যা ফিক্সড কয়েল এবং মুভিং কয়েলের পারস্পরিক চৌম্বক শক্তির ওপর নির্ভর করে।\n\nগঠনমূলক বর্ণনা:\n১) ফিক্সড কয়েল (কারেন্ট কয়েল - CC): সমান দুই ভাগে বিভক্ত যা সুষম ক্ষেত্র তৈরি করে।\n২) মুভিং কয়েল (প্রেসার কয়েল - PC): ফিক্সড কয়েলের মাঝে অক্ষের ওপর থাকে এবং উচ্চ রেজিস্ট্যান্সের সাথে সিরিজে ভোল্টেজে যুক্ত হয়।\n৩) ড্যাম্পিং: এয়ার ফ্রিকশন ড্যাম্পিং।\n\nওয়াটমিটার তত্ত্ব ও সূত্র:\n• ডিফ্লেক্টিং টর্ক: Td = I_f · I_m · (dM / dθ)\n• ওয়াটমিটার সংযোগে:\n  - I_f = লোড কারেন্ট I\n  - I_m = V / R_p\n• গড় টর্ক: Td_avg ∝ V · I · cos φ = অ্যাক্টিভ পাওয়ার P\n• সাম্যাবস্থা: θ ∝ P (ওয়াটমিটারের জন্য রৈখিক স্কেল!)।\n\nপ্রধান সুবিধা:\n• ট্রান্সফার ইনস্ট্রুমেন্ট (ডিসিতে ক্যালিব্রেট করে এসিতে সরাসরি ব্যবহার্য)।\n• ওয়াটমিটারে অত্যন্ত নিখুঁত ও রৈখিক স্কেল পাওয়া যায়।'
},
formulas: [
{
symbol: 'T_d',
expression: 'T_d = I_f · I_m · (dM / dθ)',
description: {
en: 'General Deflecting Torque (I_f = fixed coil current, I_m = moving coil current, dM/dθ = rate of change of mutual inductance)',
        hi: 'सामान्य विक्षेपक टॉर्क (I_f = फिक्स्ड कॉइल धारा, I_m = मूविंग कॉइल धारा)',
        bn: 'সাধারণ ডিফ্লেক্টিং টর্ক (I_f = ফিক্সড কয়েল কারেন্ট, I_m = মুভিং কয়েল কারেন্ট)'
}
},
{
symbol: 'P',
expression: 'P = V · I · cos φ   ⟹   θ ∝ P',
description: {
en: 'Electrodynamometer Wattmeter Active Power and Linear Deflection Relation',
        hi: 'इलेक्ट्रोडायनेमोमीटर वाटमीटर की सक्रिय शक्ति एवं रैखिक विक्षेप संबंध',
        bn: 'ইলেক্ট্রোডায়নামোমিটার ওয়াটমিটারের সক্রিয় ক্ষমতা ও রৈখিক বিচ্যুতি সম্পর্ক'
}
}
],
solvedExamples: [
{
id: 'ex-ch3-6-1',
problem: {
en: 'An electrodynamometer wattmeter is connected to measure an AC load. The voltage across the load V = 230 V, load current I = 5 A, and power factor cos φ = 0.8 lagging. 1) Calculate the active power measured by the wattmeter. 2) If the load current increases to 8 A at the same voltage and power factor, calculate the new active power.',
        hi: 'एक इलेक्ट्रोडायनेमोमीटर वाटमीटर 230 V वोल्टेज, 5 A धारा तथा 0.8 पावर फैक्टर (lagging) वाले AC लोड को मापता है। 1) वाटमीटर द्वारा मापी गई सक्रिय शक्ति की गणना करें। 2) यदि धारा बढ़कर 8 A हो जाए, तो नई शक्ति ज्ञात करें।',
        bn: 'একটি ইলেক্ট্রোডায়নামোমিটার ওয়াটমিটার ২৩০ V ভোল্টেজ, ৫ A কারেন্ট এবং ০.৮ পাওয়ার ফ্যাক্টরে এসি লোড মাপে। ১) ওয়াটমিটারে প্রাপ্ত পাওয়ার নির্ণয় করো। ২) কারেন্ট বেড়ে ৮ A হলে নতুন পাওয়ার কত হবে?'
},
givenValues: {
'Voltage (V)': '230 V',
'Current 1 (I₁)': '5 A',
'Power Factor (cos φ)': '0.8',
'Current 2 (I₂)': '8 A'
},
solution: {
en: '1) Calculate Initial Active Power P₁: P₁ = V · I₁ · cos φ = 230 × 5 × 0.8 = 920 W.\n2) Calculate New Active Power P₂ at I₂ = 8 A: P₂ = V · I₂ · cos φ = 230 × 8 × 0.8 = 1472 W.',
        hi: '1) प्रारंभिक सक्रिय शक्ति P₁: P₁ = 230 × 5 × 0.8 = 920 W।\n2) I₂ = 8 A पर नई शक्ति P₂: P₂ = 230 × 8 × 0.8 = 1472 W।',
        bn: '১) প্রাথমিক সক্রিয় ক্ষমতা P₁: P₁ = ২৩০ × ৫ × ০.৮ = ৯২০ W।\n২) I₂ = ৮ A-তে নতুন ক্ষমতা P₂: P₂ = ২৩০ × ৮ × ০.৮ = ১৪৭২ W।'
},
finalAnswer: {
en: 'Initial Power P₁ = 920 W; New Power P₂ = 1472 W',
        hi: 'प्रारंभिक शक्ति P₁ = 920 W; नई शक्ति P₂ = 1472 W',
        bn: 'প্রাথমিক পাওয়ার P₁ = ৯২০ W; নতুন পাওয়ার P₂ = ১৪৭২ W'
}
}
],
practicalApplications: {
en: [
'AC Single-phase Active Power measurement using Electrodynamometer Wattmeter.',
'Transfer Calibration Standard for calibrating AC meters using precision DC standards.'
],
        hi: [
'इलेक्ट्रोडायनेमोमीटर वाटमीटर का उपयोग करके AC सिंगल-फेज सक्रिय शक्ति मापन।',
'सटीक DC मानकों का उपयोग करके AC मीटरों को कैलिब्रेट करने के लिए ट्रांसफर मानक।'
],
        bn: [
'ইলেক্ট্রোডায়নামোমিটার ওয়াটমিটার ব্যবহার করে সিঙ্গল-ফেজ এসি এক্টিভ পাওয়ার পরিমাপ।',
'ডিসি স্ট্যান্ডার্ডের সাহায্য নিয়ে এসি মিটার ক্যালিব্রেট করার আদর্শ ট্রান্সফার ইনস্ট্রুমেন্ট।'
]
},
importantPoints: {
en: [
'Electrodynamometer Wattmeter scale is LINEAR because deflection θ ∝ Active Power P.',
'It is a Transfer Instrument (can be calibrated on DC and used accurately on AC).',
'Fixed coils act as Current Coil (CC) and moving coil acts as Pressure Coil (PC).'
],
        hi: [
'इलेक्ट्रोडायनेमोमीटर वाटमीटर का पैमाना रैखिक (Linear) होता है क्योंकि विक्षेप θ ∝ P।',
'यह एक ट्रांसफर इंस्ट्रूमेंट है (DC पर कैलिब्रेट करके AC पर प्रयोग किया जा सकता है)।',
'फिक्स्ड कॉइल्स करंट कॉइल (CC) तथा मूविंग कॉइल प्रेशर कॉइल (PC) के रूप में कार्य करती हैं।'
],
        bn: [
'ইলেক্ট্রোডায়নামোমিটার ওয়াটমিটারের স্কেল রৈখিক (Linear) কারণ বিচ্যুতি θ ∝ P।',
'এটি একটি ট্রান্সফার ইনস্ট্রুমেন্ট (ডিসিতে ক্যালিব্রেট করে এসিতে সরাসরি ব্যবহারযোগ্য)।',
'ফিক্সড কয়েল কারেন্ট কয়েল (CC) এবং মুভিং কয়েল প্রেসার কয়েল (PC) হিসেবে কাজ করে।'
]
},
commonMistakes: {
en: [
'Confusing Electrodynamometer Ammeter/Voltmeter scale (non-linear, θ ∝ I²) with Wattmeter scale (linear, θ ∝ P).',
'Assuming Air Friction damping is not needed in air-cored electrodynamometer instruments.'
],
        hi: [
'इलेक्ट्रोडायनेमोमीटर अमीटर/वोल्टमीटर पैमाने (अरैखिक, θ ∝ I²) को वाटमीटर पैमाने (रैखिक, θ ∝ P) के साथ भ्रमित करना।',
'यह मानना कि एयर-कोर उपकरणों में वायु घर्षण मंदन की आवश्यकता नहीं है।'
],
        bn: [
'ইলেক্ট্রোডায়নামোমিটার অ্যামিটার/ভোল্টমিটার স্কেল (অরৈখিক, θ ∝ I²) এর সাথে ওয়াটমিটার স্কেল (রৈখিক, θ ∝ P) গুলিয়ে ফেলা।',
'ধারণা করা যে এয়ার-কোর যন্ত্রে এয়ার ফ্রিকশন ড্যাম্পিং লাগে না।'
]
},
diagrams: [
{
id: 'diag-electrodynamometer',
title: {
en: 'Electrodynamometer Wattmeter Construction Diagram',
        hi: 'इलेक्ट्रोडायनेमोमीटर वाटमीटर संरचना आरेख',
        bn: 'ইলেক্ট্রোডায়নামোমিটার ওয়াটমিটার গঠন চিত্র'
},
svgType: 'instrument-electrodynamometer',
caption: {
en: 'Electrodynamometer wattmeter topology showing Fixed Current Coils and Moving Pressure Coil.',
        hi: 'फिक्स्ड करंट कॉइल्स और मूविंग प्रेशर कॉइल को दर्शाता इलेक्ट्रोडायनेमोमीटर वाटमीटर आरेख।',
        bn: 'ফিক্সড কারেন্ট কয়েল এবং মুভিং প্রেসার কয়েলযুক্ত ওয়াটমিটার চিত্র।'
}
}
],
mcqs: [
{
id: 'mcq-ch3-6-1',
question: {
en: 'An Electrodynamometer instrument can be used as a Transfer Instrument because:',
        hi: 'इलेक्ट्रोडायनेमोमीटर उपकरण को ट्रांसफर इंस्ट्रूमेंट के रूप में इस्तेमाल किया जा सकता है क्योंकि:',
        bn: 'ইলেক্ট্রোডায়নামোমিটার মিটারকে ট্রান্সফার ইনস্ট্রুমেন্ট বলা হয় কারণ:'
},
options: [
{ id: 'a', text: { en: 'It has the same calibration on both AC and DC', hi: 'इसका कैलिब्रेशन AC और DC दोनों पर समान रहता है', bn: 'এর ক্যালিব্রেশন এসি এবং ডিসি উভয়েই সমান থাকে' } },
{ id: 'b', text: { en: 'It transfers current from one circuit to another', hi: 'यह एक परिपथ से दूसरे परिपथ में धारा स्थानांतरित करता है', bn: 'এটি এক সার্কিট থেকে অন্য সার্কিটে কারেন্ট পাঠায়' } },
{ id: 'c', text: { en: 'It uses permanent magnet shielding', hi: 'यह स्थायी चुंबक शील्डिंग का उपयोग करता है', bn: 'এটি স্থায়ী চুম্বক সিল্ডিং ব্যবহার করে' } },
{ id: 'd', text: { en: 'It requires low operating power', hi: 'इसे कम परिचालन शक्ति की आवश्यकता होती है', bn: 'এর জন্য কম শক্তি প্রয়োজন' } }
],
correctOptionId: 'a',
explanation: {
en: 'Transfer instruments have the same deflection for DC and AC RMS values, allowing calibration on accurate DC standards for direct use on AC.',
        hi: 'ट्रांसफर उपकरणों का विक्षेप DC और AC RMS मानों के लिए समान होता है, जिससे DC मानकों पर कैलिब्रेट करके AC पर इस्तेमाल किया जा सकता है।',
        bn: 'ট্রান্সফার মিটারের বিচ্যুতি ডিসি এবং এসি আরএমএস মানে সমান থাকায় এটি ডিসিতে ক্যালিব্রেট করে এসিতে নিখুঁত পরিমাপ দেয়।'
}
},
{
id: 'mcq-ch3-6-2',
question: {
en: 'How are the fixed coils and moving coil connected when an Electrodynamometer is used as a Wattmeter?',
        hi: 'जब इलेक्ट्रोडायनेमोमीटर का उपयोग वाटमीटर के रूप में किया जाता है तो फिक्स्ड और मूविंग कॉइल्स कैसे जुड़ी होती हैं?',
        bn: 'ইলেক্ট্রোডায়নামোমিটারকে ওয়াটমিটার হিসেবে ব্যবহার করার সময় ফিক্সড ও মুভিং কয়েল কীভাবে যুক্ত থাকে?'
},
options: [
{ id: 'a', text: { en: 'Both coils in series with the supply', hi: 'दोनों कॉइल्स सप्लाई के साथ श्रेणी में', bn: 'উভয় কয়েল সাপ্লাইয়ের সাথে সিরিজে' } },
{ id: 'b', text: { en: 'Fixed coils in series with load (CC), moving coil in parallel across load (PC)', hi: 'फिक्स्ड कॉइल्स लोड के साथ श्रेणी में (CC), मूविंग कॉइल लोड के समानांतर (PC)', bn: 'ফিক্সড কয়েল লোডের সাথে সিরিজে (CC), মুভিং কয়েল লোডের সাথে প্যারালালে (PC)' } },
{ id: 'c', text: { en: 'Both coils in parallel across the load', hi: 'दोनों कॉइल्स लोड के समानांतर', bn: 'উভয় কয়েল লোডের সাথে প্যারালালে' } },
{ id: 'd', text: { en: 'Fixed coils connected to DC, moving coil to AC', hi: 'फिक्स्ड कॉइल्स DC से, मूविंग कॉइल AC से', bn: 'ফিক্সড কয়েল ডিসিতে, মুভিং কয়েল এসিতে' } }
],
correctOptionId: 'b',
explanation: {
en: 'Fixed coils carry full load current (Current Coil CC) and moving coil carries current proportional to load voltage (Pressure Coil PC).',
        hi: 'फिक्स्ड कॉइल्स लोड धारा (CC) ले जाती हैं और मूविंग कॉइल लोड वोल्टेज (PC) के समानुपाती धारा ले जाती है।',
        bn: 'ফিক্সড কয়েল সম্পূর্ণ লোড কারেন্ট (CC) বহন করে এবং মুভিং কয়েল ভোল্টেজের সমানুপাতিক কারেন্ট (PC) বহন করে।'
}
},
{
id: 'mcq-ch3-6-3',
question: {
en: 'Why is the scale of an Electrodynamometer Wattmeter uniform / linear?',
        hi: 'इलेक्ट्रोडायनेमोमीटर वाटमीटर का पैमाना एकसमान/रैखिक क्यों होता है?',
        bn: 'ইলেক্ট্রোডায়নামোমিটার ওয়াটমিটারের স্কেল কেন সুষম/রৈখিক হয়?'
},
options: [
{ id: 'a', text: { en: 'Deflecting torque is directly proportional to Active Power (P = V·I·cosφ)', hi: 'विक्षेपक टॉर्क सक्रिय शक्ति (P = V·I·cosφ) के सीधे समानुपाती होता है', bn: 'ডিফ্লেক্টিং টর্ক সরাসরি সক্রিয় ক্ষমতার (P = V·I·cosφ) সমানুপাতিক' } },
{ id: 'b', text: { en: 'Deflecting torque is proportional to V²', hi: 'विक्षेपक टॉर्क V² के समानुपाती होता है', bn: 'ডিফ্লেক্টিং টর্ক V²-এর সমানুপাতিক' } },
{ id: 'c', text: { en: 'Air friction damping linearizes the scale', hi: 'वायु घर्षण मंदन पैमाने को रैखिक बनाता है', bn: 'এয়ার ফ্রিকশন ড্যাম্পিং স্কেলকে রৈখিক করে' } },
{ id: 'd', text: { en: 'Permanent magnets make field constant', hi: 'स्थायी चुंबक क्षेत्र को स्थिर बनाते हैं', bn: 'স্থায়ী চুম্বক ক্ষেত্রকে স্থির রাখে' } }
],
correctOptionId: 'a',
explanation: {
en: 'Td_avg ∝ V·I·cosφ = Active Power P. Combined with spring control Tc = k·θ, θ ∝ P, making the wattmeter scale strictly linear.',
        hi: 'Td_avg ∝ V·I·cosφ = P। स्प्रिंग नियंत्रण Tc = k·θ के साथ θ ∝ P होने से वाटमीटर पैमाना रैखिक होता है।',
        bn: 'Td_avg ∝ V·I·cosφ = P। স্প্রিং কন্ট্রোল Tc = k·θ এর সাথে সমন্বয়ে θ ∝ P হওয়ায় স্কেলটি রৈখিক হয়।'
}
}
],
practiceQuestions: [
{
id: 'pq-ch3-6-1',
question: {
en: 'Explain why an Electrodynamometer instrument is called a "Transfer Instrument". What is its significance in electrical measurements?',
        hi: 'समझाइए कि इलेक्ट्रोडायनेमोमीटर उपकरण को "ट्रांसफर इंस्ट्रूमेंट" क्यों कहा जाता है। विद्युत मापन में इसका क्या महत्व है?',
        bn: 'ইলেক্ট্রোডায়নামোমিটার মিটারকে কেন "ট্রান্সফার ইনস্ট্রুমেন্ট" বলা হয়? ইলেকট্রিক্যাল মেজারমেন্টে এর তাৎপর্য কী?'
},
hint: {
en: 'Consider the relationship between its DC calibration and its AC RMS reading.',
        hi: 'इसके DC कैलिब्रेशन और AC RMS रीडिंग के बीच संबंध पर विचार करें।',
        bn: 'এর ডিসি ক্যালিব্রেশন এবং এসি আরএমএস পাঠের সম্পর্ক নিয়ে ভাবো।'
},
answerKey: {
en: '1) A transfer instrument is one that has the exact same calibration on both DC and AC.\n2) An electrodynamometer can be calibrated using extremely accurate DC primary standards (like potentiometers).\n3) Without changing calibration or structure, it can then measure AC RMS current, voltage, or active power with identical accuracy, transferring DC standards accuracy directly to AC measurements.',
        hi: '1) ट्रांसफर इंस्ट्रूमेंट का DC और AC पर समान कैलिब्रेशन होता है।\n2) इसे अत्यंत सटीक DC प्राथमिक मानकों से कैलिब्रेट किया जाता है।\n3) बिना कैलिब्रेशन बदले यह AC RMS मानों को उसी सटीकता से मापता है।',
        bn: '১) ট্রান্সফার ইনস্ট্রুমেন্টের ডিসি এবং এসি উভয় ক্ষেত্রে ক্যালিব্রেশন এক থাকে।\n২) অত্যন্ত নিখুঁত ডিসি প্রাইমারি মানক দিয়ে একে ক্যালিব্রেট করা হয়।\n৩) কোনো পরিবর্তন ছাড়াই এটি এসিতে একই নিখুঁত পাঠ দেয়।'
}
},
{
id: 'pq-ch3-6-2',
question: {
en: 'Compare PMMC, Moving Iron, and Electrodynamometer instruments across 5 key parameters.',
        hi: '5 मुख्य मापदंडों पर PMMC, मूविंग आयरन और इलेक्ट्रोडायनेमोमीटर उपकरणों की तुलना कीजिए।',
        bn: '৫টি মূল প্যারামিটারের ওপর পিএমএমসি, মুভিং আয়রন ও ইলেক্ট্রোডায়নামোমিটার যন্ত্রের তুলনা করো।'
},
hint: {
en: 'Compare supply type (AC/DC), scale nature, damping method, accuracy, and primary use.',
        hi: 'सप्लाई प्रकार (AC/DC), पैमाने की प्रकृति, मंदन विधि, सटीकता और प्राथमिक उपयोग की तुलना करें।',
        bn: 'সরবরাহ, স্কেল, ড্যাম্পিং, অ্যাকুরেসি ও মূল ব্যবহারের তুলনা করো।'
},
answerKey: {
en: '1) Operating Supply: PMMC = DC only; MI = AC and DC; Electrodynamometer = AC and DC.\n2) Scale: PMMC = Uniform; MI = Non-uniform (square law); Electrodynamometer = Linear for Wattmeter, Square law for Ammeter/Voltmeter.\n3) Damping: PMMC = Eddy Current; MI = Air Friction; Electrodynamometer = Air Friction.\n4) Accuracy: PMMC = Very High; MI = Moderate; Electrodynamometer = High (Transfer standard).\n5) Primary Use: PMMC = DC Bench Meters; MI = AC Panel Meters; Electrodynamometer = AC/DC Wattmeters & Standards.',
        hi: '1) सप्लाई: PMMC = केवल DC; MI = AC/DC; Electrodynamometer = AC/DC।\n2) पैमाना: PMMC = एकसमान; MI = गैर-समान; Electrodynamometer = वाटमीटर हेतु रैखिक।\n3) मंदन: PMMC = भंवर धारा; MI = वायु घर्षण; Electrodynamometer = वायु घर्षण।\n4) सटीकता: PMMC = उच्चतम; MI = मध्यम; Electrodynamometer = उच्च।\n5) उपयोग: PMMC = DC मीटर; MI = AC स्विचबोर्ड मीटर; Electrodynamometer = वाटमीटर।',
        bn: '১) সরবরাহ: পিএমএমসি = কেবল ডিসি; এমআই = এসি ও ডিসি; ইলেক্ট্রোডায়নামোমিটার = এসি ও ডিসি।\n২) স্কেল: পিএমএমসি = সুষম; এমআই = অসুষম; ইলেক্ট্রোডায়নামোমিটার = ওয়াটমিটারে রৈখিক।\n৩) ড্যাম্পিং: পিএমএমসি = এডি কারেন্ট; এমআই = এয়ার ফ্রিকশন; ইলেক্ট্রোডায়নামোমিটার = এয়ার ফ্রিকশন।\n৪) অ্যাকুরেসি: পিএমএমসি = অত্যন্ত উচ্চ; এমআই = মাঝারি; ইলেক্ট্রোডায়নামোমিটার = উচ্চ।\n৫) মূল ব্যবহার: পিএমএমসি = ডিসি মিটার; এমআই = এসি প্যানেল মিটার; ইলেক্ট্রোডায়নামোমিটার = ওয়াটমিটার ও ট্রান্সফার মানক।'
}
}
]
};

export const CHAPTER_3_LESSONS: Record<string, Lesson> = {
'ch3-fundamentals-measurement': LESSON_FUNDAMENTALS_MEASUREMENT,
'ch3-measurement-errors': LESSON_MEASUREMENT_ERRORS,
'ch3-electrical-instruments': LESSON_ELECTRICAL_INSTRUMENTS,
'ch3-pmmc-instruments': LESSON_PMMC_INSTRUMENTS,
'ch3-moving-iron': LESSON_MOVING_IRON,
'ch3-electrodynamometer': LESSON_ELECTRODYNAMOMETER,
...CHAPTER_3_LESSONS_PART2,
...CHAPTER_3_LESSONS_PART3,
...CHAPTER_3_LESSONS_PART4,
...CHAPTER_3_LESSONS_PART5
};
