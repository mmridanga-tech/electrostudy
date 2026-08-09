import { Lesson } from '../types';

export const LESSON_CALIBRATION_TESTING: Lesson = {
  id: 'lsn-ch3-calibration-testing',
  topicId: 'ch3-calibration-testing',
  order: 18,
  title: {
    en: 'Calibration & Testing',
    hi: 'कैलिब्रेशन एवं परीक्षण (Calibration & Testing)',
    bn: 'ক্যালিব্রেশন ও টেস্টিং (Calibration & Testing)'
  },
  easyExplanation: {
    en: 'Calibration is the process of comparing a measuring instrument against a highly accurate standard reference instrument to determine its measurement error. Regular calibration ensures measuring instruments remain accurate, trustworthy, and compliant with international standards over time!',
    hi: 'कैलिब्रेशन एक मापने वाले उपकरण की तुलना अत्यधिक सटीक मानक संदर्भ उपकरण से करके उसकी माप त्रुटि का निर्धारण करने की प्रक्रिया है। नियमित कैलिब्रेशन यह सुनिश्चित करता है कि मापने वाले उपकरण समय के साथ सटीक, विश्वसनीय और अंतर्राष्ट्रीय मानकों के अनुरूप रहें!',
    bn: 'ক্যালিব্রেশন হলো একটি পরিমাপক যন্ত্রকে অত্যন্ত নির্ভুল স্ট্যান্ডার্ড রেফারেন্স যন্ত্রের সাথে তুলনা করে তার পাঠের নির্ভুলতা বা ভুল নির্ণয় করা। নিয়মিত ক্যালিব্রেশন নিশ্চিত করে যন্ত্রটি সবসময় সঠিক পাঠ দিচ্ছে এবং আর্ন্তজাতিক মান বজায় রাখছে!'
  },
  detailedExplanation: {
    en: 'Calibration and quality testing guarantee that measurements made in industrial manufacturing, medical equipment, and electrical power grids are accurate and legally traceable.\n\n1. Calibration Definition & Purpose:\n   • Calibration: Set of operations establishing the relationship between values indicated by a measuring instrument under test (IUT) and corresponding known values realized by a reference standard.\n   • Why Instruments Drift: Component aging, temperature fluctuations, mechanical vibration/shock, component degradation, overloads.\n   • Accuracy Ratio Rule: Reference standard must be at least 4 times (4:1) or 10 times (10:1) more accurate than the Instrument Under Test.\n\n2. Traceability Pyramid (Metrological Traceability):\n   • Working Standard (Laboratory / Shop Floor) $\\to$ Secondary Standard (Regional Calibration Lab) $\\to$ Primary Standard (National Metrology Institute, e.g., NPL India) $\\to$ International Standard (BIPM, SI Definitions).\n\n3. Calibration Workflow Procedure:\n   a) Visual & Environmental Inspection: Ensure stable temperature ($23^\\circ\\text{C} \\pm 2^\\circ\\text{C}$) and humidity.\n   b) Zero Adjustment: Adjust mechanical or electrical zero screw when input is strictly zero.\n   c) Span Adjustment: Apply 100% full-scale reference input and adjust span potentiometer/trimmer.\n   d) Multi-point Linearity Check: Test at 5-10 cardinal scale points (e.g. 0%, 25%, 50%, 75%, 100% of range) ascending and descending to detect hysteresis.\n\n4. Error Metrics & Calibration Curve:\n   • Measurement Error: $E = V_{IUT} - V_{Standard}$.\n   • Correction Factor: $C = -E = V_{Standard} - V_{IUT}$.\n   • Percentage Full Scale Error: $\% FSE = \\frac{V_{IUT} - V_{Standard}}{V_{FullScale}} \\times 100\\%$.\n   • Calibration Certificate: Documents environmental conditions, test data points, uncertainty budget, and calibration validity interval.',
    hi: 'कैलिब्रेशन एवं मेट्रोलॉजिकल ट्रेसबिलिटी सिद्धांत:\n\n1. कैलिब्रेशन की परिभाषा:\n   परीक्षणाधीन उपकरण (IUT) के पाठ्यांकों की तुलना ज्ञात उच्च सटीकता वाले मानक उपकरण के साथ करने की प्रक्रिया।\n   • सटीकता अनुपात (Accuracy Ratio): मानक उपकरण IUT से कम से कम 4 गुना (4:1) या 10 गुना अधिक सटीक होना चाहिए।\n\n2. ट्रेसबिलिटी पिरामिड (Metrological Traceability):\n   कार्यकारी मानक (Working) $\\to$ द्वितीयक मानक (Secondary) $\\to$ प्राथमिक राष्ट्रीय मानक (NPL) $\\to$ अंतर्राष्ट्रीय SI मानक (BIPM)।\n\n3. कैलिब्रेशन प्रक्रिया:\n   • जीरो समायोजन (Zero Adjustment)\n   • स्पैन समायोजन (100% फुल-स्केल)\n   • 5-बिंदु रैखिकता जांच (0%, 25%, 50%, 75%, 100% ascending & descending)।\n\n4. त्रुटि सूत्र:\n   • माप त्रुटि: $E = V_{IUT} - V_{Standard}$।\n   • सुधार (Correction): $C = -E$।\n   • प्रतिशत फुल स्केल त्रुटि: $\% FSE = \\frac{V_{IUT} - V_{Standard}}{V_{FullScale}} \\times 100\\%$।',
    bn: 'ক্যালিব্রেশন ও ট্রেসেবিলিটি নীতিমালা:\n\n১. ক্যালিব্রেশনের সংজ্ঞা:\n   টেস্টে থাকা যন্ত্রের (IUT) পাঠের সাথে অতি-নির্ভুল স্ট্যান্ডার্ড মানক যন্ত্রের পাঠের সাথে তুলনা করা।\n   • একুরেসি অনুপাত: মানক রেফারেন্স যন্ত্রটিকে টেস্টে থাকা মিটার অপেক্ষা অন্তত ৪ গুণ বা ১০ গুণ বেশি নির্ভুল হতে হবে।\n\n২. ট্রেসেবিলিটি পিরামিড:\n   ওয়ার্কিং স্ট্যান্ডার্ড $\\to$ সেকেন্ডারি ল্যাব স্ট্যান্ডার্ড $\\to$ জাতীয় প্রাইমারি ল্যাব (NPL) $\\to$ আন্তর্জাতিক SI একক (BIPM)।\n\n৩. ক্যালিব্রেশন ধাপসমূহ:\n   • জিরো এডজাস্টমেন্ট (Zero Adjustment)\n   • স্প্যান এডজাস্টমেন্ট (Full Scale Adjustment)\n   • ৫-পয়েন্ট লিনিয়ারিটি চেক (০%, ২৫%, ৫০%, ৭৫%, ১০০%)।\n\n৪. ত্রুটি হিসাবের সূত্র:\n   • পরিমাপ ত্রুটি: $E = V_{IUT} - V_{Standard}$।\n   • কারেকশন: $C = -E$।\n   • শতকরা ফুল স্কেল ত্রুটি: $\% FSE = \\frac{V_{IUT} - V_{Standard}}{V_{FullScale}} \\times ১০০\\%$।'
  },
  formulas: [
    {
      symbol: 'E',
      expression: 'E = V_{IUT} - V_{standard}',
      description: {
        en: 'Absolute Calibration Error = Reading of Instrument Under Test - True Standard Value',
        hi: 'निरपेक्ष कैलिब्रेशन त्रुटि = परीक्षण उपकरण का पाठ्यांक - वास्तविक मानक मान',
        bn: 'ক্যালিব্রেশন ত্রুটি = টেস্ট মিটারের পাঠ - প্রকৃত মানক মান'
      }
    },
    {
      symbol: 'C',
      expression: 'C = -E = V_{standard} - V_{IUT}',
      description: {
        en: 'Correction Factor = True Standard Value - Reading of Instrument Under Test',
        hi: 'सुधार कारक = वास्तविक मानक मान - परीक्षण उपकरण का पाठ्यांक',
        bn: 'কারেকশন ফ্যাক্টর = প্রকৃত মানক মান - টেস্ট মিটারের পাঠ'
      }
    },
    {
      symbol: '\\% FSE',
      expression: '\\% FSE = \\frac{V_{IUT} - V_{standard}}{V_{FullScale}} \\times 100\\%',
      description: {
        en: 'Percent Full Scale Error = (Absolute Error / Full Scale Range) × 100%',
        hi: 'प्रतिशत फुल स्केल त्रुटि = (निरपेक्ष त्रुटि / फुल स्केल रेंज) × 100%',
        bn: 'শতকরা ফুল স্কেল ত্রুটি = (পরিমাপ ত্রুটি / ফুল স্কেল সীমা) × ১০০%'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-calibration-workflow',
      title: {
        en: 'Metrological Traceability Pyramid & Calibration Flowchart',
        hi: 'मेट्रोलॉजिकल ट्रेसबिलिटी पिरामिड और कैलिब्रेशन फ्लोचार्ट',
        bn: 'মেট্রোলজিক্যাল ট্রেসেবিলিটি পিরামিড ও ক্যালিব্রেশন ফ্লোচার্ট'
      },
      caption: {
        en: 'Reference Standard -> Compare with IUT -> Calculate Error -> Zero/Span Adjust -> Issue Certificate.',
        hi: 'मानक -> IUT से तुलना -> त्रुटि गणना -> जीरो/स्पैन समायोजन -> प्रमाण पत्र।',
        bn: 'রেফারেন্স স্ট্যান্ডার্ড -> আইইউটি তুলনা -> ত্রুটি হিসাব -> জিরো/স্প্যান এডজাস্ট -> সার্টিফিকেট বিতরণ।'
      },
      svgType: 'calibration-workflow'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch3-cal-1',
      problem: {
        en: 'A high-precision primary calibrator applies a reference voltage of $100.00\\text{ V}$ to an analog DC voltmeter under test (Full Scale Range = $150\\text{ V}$). The voltmeter reads $102.40\\text{ V}$. Calculate:\n1) Absolute Measurement Error ($E$)\n2) Calibration Correction ($C$)\n3) Percent Full Scale Error ($\\% FSE$)\n4) If the meter manufacturer claims Class 1.0 accuracy (max $\\pm 1.0\\% FSE$), state whether the voltmeter passes or fails calibration.',
        hi: 'एक उच्च-सटीकता प्राथमिक कैलिब्रेटर परीक्षण के तहत एक एनालॉग डीसी वोल्टमीटर (फुल स्केल रेंज = $150\\text{ V}$) पर $100.00\\text{ V}$ का संदर्भ वोल्टेज लागू करता है। वोल्टमीटर $102.40\\text{ V}$ पढ़ता है। गणना करें:\n1) निरपेक्ष माप त्रुटि ($E$)\n2) कैलिब्रेशन सुधार ($C$)\n3) प्रतिशत फुल स्केल त्रुटि ($\\% FSE$)\n4) यदि निर्माता क्लास 1.0 सटीकता (अधिकतम $\\pm 1.0\\% FSE$) का दावा करता है, तो बताएं कि वोल्टमीटर पास होता है या विफल।',
        bn: 'একটি ১৫০ V ফুল স্কেল সীমার ভোল্টমিটারের ১০০.০০ V প্রকৃত মান প্রয়োগকালে মিটারটির পাঠ ১০২.৪০ V। বের করো:\n১) পরিমাপের ভুল বা এরর ($E$)\n২) কারেকশন ($C$)\n৩) শতকরা ফুল স্কেল ত্রুটি ($\\% FSE$)\n৪) মিটারটি ক্লাস ১.০ (সর্বোচ্চ $\\pm ১.০\\% FSE$) মান অর্জন করে পাস করেছে কিনা।'
      },
      givenValues: {
        'V_standard': '100.00 V',
        'V_IUT': '102.40 V',
        'V_FullScale': '150 V',
        'Class Limit': '±1.0% FSE'
      },
      solution: {
        en: '1) Absolute Error $E = V_{IUT} - V_{standard} = 102.40\\text{ V} - 100.00\\text{ V} = +2.40\\text{ V}$.\n2) Correction $C = -E = -2.40\\text{ V}$.\n3) $\% FSE = \\frac{+2.40\\text{ V}}{150\\text{ V}} \\times 100\\% = +1.60\\%$.\n4) Since calculated $\% FSE = +1.60\\%$ exceeds the maximum allowable Class 1.0 limit ($1.0\\%$), the voltmeter FAILS calibration and requires internal zero/span adjustment!',
        hi: '1) निरपेक्ष त्रुटि $E = 102.40 - 100.00 = +2.40\\text{ V}$।\n2) सुधार $C = -2.40\\text{ V}$।\n3) $\% FSE = \\frac{2.40}{150} \\times 100\\% = +1.60\\%$।\n4) चूंकि $1.60\\% > 1.0\\%$, वोल्टमीटर कैलिब्रेशन में विफल रहता है!',
        bn: '১) এরর $E = ১০২.৪০ - ১০০.০০ = +২.৪০\\text{ V}$।\n২) কারেকশন $C = -২.৪০\\text{ V}$।\n৩) $\% FSE = \\frac{২.৪০}{১৫০} \\times ১০০\\% = +১.৬০\\%$।\n৪) যেহেতু ১.৬০% মান ১.০% লিমিট ছাড়িয়ে গেছে, তাই মিটারটি ফেল করেছে!'
      },
      finalAnswer: {
        en: 'Error = +2.40 V, Correction = -2.40 V, %FSE = +1.60% (FAIL)',
        hi: 'त्रुटि = +2.40 V, सुधार = -2.40 V, %FSE = +1.60% (विफल)',
        bn: 'ত্রুটি = +২.৪০ V, কারেকশন = -২.৪০ V, %FSE = +১.৬০% (ফেল)'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Periodic annual calibration of multimeters and power analyzers in ISO 9001 certified industrial plants.',
      'Medical equipment calibration (patient monitors, defibrillators) for clinical safety compliance.',
      'Utility billing revenue meter calibration (Class 0.2 energy meters) to prevent billing disputes.'
    ],
    hi: [
      'ISO 9001 प्रमाणित औद्योगिक संयंत्रों में मल्टीमीटर और पावर एनालाइजर का वार्षिक कैलिब्रेशन।',
      'नैदानिक सुरक्षा अनुपालन के लिए चिकित्सा उपकरण कैलिब्रेशन (रोगी मॉनिटर, डिफिब्रिलेटर)।',
      'बिलिंग विवादों को रोकने के लिए उपयोगिता बिलिंग राजस्व मीटर कैलिब्रेशन (क्लास 0.2)।'
    ],
    bn: [
      'ISO 9001 সার্টিফাইড শিল্প কারখানায় মিটারসমূহের বাৎসরিক ক্যালিব্রেশন।',
      'হাসপাতালের লাইফ সাপোর্ট চিকিৎসা যন্ত্রপাতির পরিমাপ সুরক্ষা চেক করা।',
      'পাওয়ার গ্রিডের বাণিজ্যিক এনার্জি মিটারের পাঠের স্বচ্ছতা রক্ষায় ক্যালিব্রেশন।'
    ]
  },
  importantPoints: {
    en: [
      'Calibration compares Instrument Under Test against a standard of known superior accuracy (at least 4:1 ratio).',
      'Traceability links working calibration standards all the way up to national standards (NPL) and international SI definitions.',
      'Zero adjustment aligns null reading; Span adjustment aligns full-scale reading.',
      'Absolute Error $E = V_{IUT} - V_{standard}$; Correction $C = -E$.',
      'Percent Full Scale Error $\% FSE = (E / V_{FullScale}) \\times 100\\%$.',
      'Adjusting an instrument alters its reading; verification checks if error falls within tolerance specification.'
    ],
    hi: [
      'कैलिब्रेशन ज्ञात श्रेष्ठ सटीकता (कम से कम 4:1 अनुपात) के मानक के खिलाफ उपकरण की तुलना करता है।',
      'ट्रेसबिलिटी राष्ट्रीय मानकों (NPL) और अंतर्राष्ट्रीय SI परिभाषाओं तक जुड़ी होती है।',
      'जीरो समायोजन शून्य पाठ को संरेखित करता है; स्पैन समायोजन फुल-स्केल पाठ को संरेखित करता है।',
      'निरपेक्ष त्रुटि $E = V_{IUT} - V_{standard}$; सुधार $C = -E$।',
      '% FSE = (त्रुटि / फुल स्केल मान) × 100%।'
    ],
    bn: [
      'ক্যালিব্রেশন হলো উচ্চ মান সম্পন্ন মিটারের পাঠের সাথে নিজের মিটারের পাঠ মিলিয়ে দেখা (অন্তত ৪:১ অনুপাত)।',
      'ট্রেসেবিলিটি লিংক স্থানীয় ল্যাব থেকে জাতীয় মানক (NPL) ও আন্তর্জাতিক মানক (BIPM) নির্দেশ করে।',
      'জিরো এডজাস্টমেন্ট জিরো পাঠ ঠিক করে, আর স্প্যান এডজাস্টমেন্ট ফুল স্কেলের পাঠ ঠিক করে।',
      'পরিমাপের ভুল $E = V_{IUT} - V_{standard}$; কারেকশন $C = -E$।',
      'শতকরা এরর $\% FSE = (E / V_{FullScale}) \\times ১০০\\%$।'
    ]
  },
  commonMistakes: {
    en: [
      'Confusing Calibration with Repair/Adjustment: Calibration strictly measures and records error; adjustment alters internal potentiometers/trim settings.',
      'Using a reference standard of equal or lower accuracy than the instrument under test (violating the 4:1 accuracy ratio rule).',
      'Calculating percentage error based on instantaneous reading instead of Full Scale Range when specifying % FSE accuracy classes.'
    ],
    hi: [
      'कैलिब्रेशन को मरम्मत/समायोजन के साथ भ्रमित करना: कैलिब्रेशन केवल त्रुटि को मापता और रिकॉर्ड करता है; समायोजन आंतरिक सेटिंग्स को बदलता है।',
      'परीक्षणाधीन उपकरण की तुलना में समान या कम सटीकता के मानक का उपयोग करना (4:1 नियम का उल्लंघन)।',
      '% FSE सटीकता कक्षाओं को निर्दिष्ट करते समय तत्काल पाठ्यांक के आधार पर प्रतिशत त्रुटि की गणना करना।'
    ],
    bn: [
      'ক্যালিব্রেশন ও মেরামত/এডজাস্টমেন্ট গুলিয়ে ফেলা: ক্যালিব্রেশন শুধু ভুল মেপে রিপোর্ট দেয়; এডজাস্টমেন্ট অভ্যন্তরীণ নডি পরিবর্তন করে।',
      'পরীক্ষাধীন যন্ত্রের সমান বা কম মানসম্পন্ন রেফারেন্স মিটার দিয়ে টেস্ট করা (৪:১ অনুপাত না মানা)।',
      'ফুল স্কেল স্কেল লিমিটের বদলে তাৎক্ষণিক পাঠের ওপর ভিত্তি করে % FSE এরর বের করে ফেলানো।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch3-cal-1',
      question: {
        en: 'What is the minimum recommended Accuracy Ratio between a Reference Calibration Standard and the Instrument Under Test (IUT)?',
        hi: 'संदर्भ कैलिब्रेशन मानक और परीक्षणाधीन उपकरण (IUT) के बीच न्यूनतम अनुशंसित सटीकता अनुपात क्या है?',
        bn: 'রেফারেন্স ক্যালিব্রেশন স্ট্যান্ডার্ড মিটার এবং টেস্ট মিটারের (IUT) মধ্যে সর্বনিম্ন একুরেসি অনুপাত কত হওয়া উচিত?'
      },
      options: [
        { id: 'a', text: { en: '1 : 1', hi: '1 : 1', bn: '১ : ১' } },
        { id: 'b', text: { en: '2 : 1', hi: '2 : 1', bn: '২ : ১' } },
        { id: 'c', text: { en: '4 : 1', hi: '4 : 1', bn: '৪ : ১' } },
        { id: 'd', text: { en: '100 : 1', hi: '100 : 1', bn: '১০০ : ১' } }
      ],
      correctOptionId: 'c',
      explanation: {
        en: 'Standard metrology guidelines recommend that reference standards must be at least 4 times (4:1) or preferably 10 times more accurate than the instrument under test.',
        hi: 'मानक मेट्रोलॉजी दिशानिर्देश अनुशंसा करते हैं कि संदर्भ मानक परीक्षणाधीन उपकरण से कम से कम 4 गुना (4:1) अधिक सटीक होने चाहिए।',
        bn: 'মানক গাইডলাইন অনুযায়ী রেফারেন্স স্ট্যান্ডার্ড মিটারকে টেস্টে থাকা মিটার অপেক্ষা অন্তত ৪:১ গুণ বেশি নিখুঁত হতে হয়।'
      }
    },
    {
      id: 'mcq-ch3-cal-2',
      question: {
        en: 'If a standard calibrator delivers 50.0 V and a voltmeter reads 51.0 V, what is the required Calibration Correction C?',
        hi: 'यदि एक मानक कैलिब्रेटर 50.0 V देता है और एक वोल्टमीटर 51.0 V पढ़ता है, तो आवश्यक कैलिब्रेशन सुधार C क्या है?',
        bn: 'যদি মানক রেফারেন্স ৫০.০ V দেয় কিন্তু ভোল্টমিটারের পাঠ ৫১.০ V হয়, তবে প্রয়োজনীয় কারেকশন C কত?'
      },
      options: [
        { id: 'a', text: { en: '+1.0 V', hi: '+1.0 V', bn: '+১.০ V' } },
        { id: 'b', text: { en: '-1.0 V', hi: '-1.0 V', bn: '-১.০ V' } },
        { id: 'c', text: { en: '+2.0 V', hi: '+2.0 V', bn: '+২.০ V' } },
        { id: 'd', text: { en: '0.0 V', hi: '0.0 V', bn: '০.০ V' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'Error E = V_IUT - V_std = 51.0 - 50.0 = +1.0 V. Correction C = -E = -1.0 V.',
        hi: 'त्रुटि E = 51.0 - 50.0 = +1.0 V। सुधार C = -E = -1.0 V।',
        bn: 'ত্রুটি E = ৫১.০ - ৫০.০ = +১.০ V। তাই কারেকশন C = -E = -১.০ V।'
      }
    },
    {
      id: 'mcq-ch3-cal-3',
      question: {
        en: 'Which Indian national laboratory maintains the primary measurement standards for electrical units in India?',
        hi: 'भारत में कौन सी भारतीय राष्ट्रीय प्रयोगशाला विद्युत इकाइयों के प्राथमिक माप मानकों को बनाए रखती है?',
        bn: 'ভারতের কোন জাতীয় ল্যাবরেটরি মেজারিং ইউনিটসমূহের প্রাইমারি মানক রক্ষা করে?'
      },
      options: [
        { id: 'a', text: { en: 'ISRO', hi: 'इसरो (ISRO)', bn: 'ইসরো (ISRO)' } },
        { id: 'b', text: { en: 'CSIR - National Physical Laboratory (NPL)', hi: 'CSIR - राष्ट्रीय भौतिक प्रयोगशाला (NPL)', bn: 'CSIR - ন্যাশনাল ফিজিক্যাল ল্যাবরেটরি (NPL)' } },
        { id: 'c', text: { en: 'DRDO', hi: 'डीआरडीओ (DRDO)', bn: 'ডিআরডিও (DRDO)' } },
        { id: 'd', text: { en: 'BHEL', hi: 'भेल (BHEL)', bn: 'ভেল (BHEL)' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'CSIR-NPL (National Physical Laboratory, New Delhi) is the custodian of primary national standards of physical and electrical measurements in India.',
        hi: 'CSIR-NPL (राष्ट्रीय भौतिक प्रयोगशाला, नई दिल्ली) भारत में भौतिक और विद्युत मापों के प्राथमिक राष्ट्रीय मानकों का संरक्षक है।',
        bn: 'CSIR-NPL (নতুন দিল্লি) ভারতে সমস্ত প্রাইমারি মেজারিং রেফারেন্স স্ট্যান্ডার্ড সংরক্ষণ করে।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch3-cal-1',
      question: {
        en: 'Define Calibration, Traceability, and Calibration Correction. Why is metrological traceability essential in engineering measurements?',
        hi: 'कैलिब्रेशन, ट्रेसबिलिटी और कैलिब्रेशन सुधार को परिभाषित करें। इंजीनियरिंग मापों में मेट्रोलॉजिकल ट्रेसबिलिटी क्यों आवश्यक है?',
        bn: 'ক্যালিব্রেশন, ট্রেসেবিলিটি ও কারেকশন ফ্যাক্টরের সংজ্ঞা দাও। প্রকৌশল পরিমাপে ট্রেসেবিলিটি কেন অপরিহার্য?'
      },
      hint: {
        en: 'Traceability is an unbroken chain of comparisons linking working instrument readings to international SI standards.',
        hi: 'ट्रेसबिलिटी अंतर्राष्ट्रीय SI मानकों से जुड़े मापों की एक अटूट श्रृंखला है।',
        bn: 'ট্রেসেবিলিটি হলো স্থানীয় ল্যাব থেকে আন্তর্জাতিক এককের সাথে তুলনার একটি অবিচ্ছিন্ন লিংক চেইন।'
      },
      answerKey: {
        en: '1) Calibration: Comparison of values indicated by an instrument under test (IUT) against a traceable standard instrument of known higher accuracy.\n2) Metrological Traceability: Property of a measurement result whereby the result can be related to national or international standards (BIPM/SI units) through an unbroken, documented chain of calibrations, each contributing to measurement uncertainty.\n3) Calibration Correction ($C$): The value added algebraically to the uncorrected result of a measurement to compensate for systematic error ($C = V_{standard} - V_{IUT} = -E$).\n4) Essential Purpose: Ensures global uniformity, interchangeability of manufactured components, statutory trade fairness, and safety across international borders.',
        hi: '1) कैलिब्रेशन: उच्च सटीकता के ज्ञात मानक के खिलाफ उपकरण के पाठ्यांकों की तुलना।\n2) ट्रेसबिलिटी: एक अखंड दस्तावेजी श्रृंखला के माध्यम से राष्ट्रीय या अंतर्राष्ट्रीय मानकों से माप परिणाम को जोड़ने की संपत्ति।\n3) सुधार ($C$): व्यवस्थित त्रुटि की भरपाई के लिए जोड़ा गया मान ($C = -E$)।\n4) महत्व: वैश्विक एकरूपता, व्यापार में निष्पक्षता और निर्मित घटकों की विनिमेयता सुनिश्चित करता है।',
        bn: '১) ক্যালিব্রেশন: পরিমাপক যন্ত্রকে অতি-নির্ভুল মানক যন্ত্রের সাথে তুলনা করে ভুল নির্ণয় করা।\n২) ট্রেসেবিলিটি: স্থানীয় পরিমাপকে আন্তর্জাতিক SI এককের সাথে তুলনার এক অবিচ্ছিন্ন ডকুমেন্টেশন শৃঙ্খল।\n৩) কারেকশন ($C$): সিস্টেমেটিক এরর বা ভুল দূর করতে পাঠের সাথে যোগ করা মান ($C = -E$)।\n৪) গুরুত্ব: আন্তর্জাতিক বাণিজ্য, সুরক্ষার বিশ্বজনীন স্বীকৃতি এবং পার্টস ইন্টারচেঞ্জিবিলিটি বজায় রাখতে এটি জরুরি।'
      }
    },
    {
      id: 'pq-ch3-cal-2',
      question: {
        en: 'Outline the step-by-step calibration procedure for an analog DC voltmeter using a precision voltage calibrator source.',
        hi: 'एक सटीक वोल्टेज कैलिब्रेटर स्रोत का उपयोग करके एक एनालॉग डीसी वोल्टमीटर के लिए चरण-दर-चरण कैलिब्रेशन प्रक्रिया की रूपरेखा तैयार करें।',
        bn: 'একটি নিখুঁত ভোল্টেজ সোর্স ব্যবহার করে একটি এনালগ ডিসি ভোল্টমিটারের ক্যালিব্রেশন ধাপসমূহ বর্ণনা করো।'
      },
      hint: {
        en: '1) Environmental control, 2) Zero adjustment, 3) Full scale span adjustment, 4) 5-point ascending/descending linearity test, 5) Error report certificate.',
        hi: '1) पर्यावरण नियंत्रण, 2) जीरो समायोजन, 3) फुल स्केल स्पैन समायोजन, 4) 5-बिंदु परीक्षण, 5) प्रमाण पत्र।',
        bn: '১) তাপমাত্রা নিয়ন্ত্রণ, ২) জিরো এডজাস্ট, ৩) ফুল স্কেল স্প্যান এডজাস্ট, ৪) ৫-পয়েন্ট এরর টেস্ট, ৫) রিপোর্ট।'
      },
      answerKey: {
        en: '1) Environmental Setup: Place instruments in a temperature-controlled laboratory ($23^\\circ\\text{C} \\pm 2^\\circ\\text{C}$) and allow warm-up time (~30 minutes).\n2) Mechanical Zero Check: With zero input applied, adjust the mechanical zero screw on front panel until needle points exactly to 0 V line.\n3) Full-Scale Span Adjustment: Apply 100% full-scale reference voltage from precision calibrator (e.g., 100 V for 100 V range). Adjust internal span trimmer if needle strays from 100 V.\n4) Linearity & Hysteresis Test: Apply reference voltages at 0%, 25%, 50%, 75%, and 100% of full scale in ASCENDING order, recording readings at each point. Repeat in DESCENDING order to check mechanical needle hysteresis.\n5) Documentation: Calculate $\% FSE$ error at each point, plot calibration curve, verify against Class tolerance rating, and issue Calibration Certificate with next recalibration due date.',
        hi: '1) पर्यावरण सेटअप: $23^\\circ\\text{C}$ पर 30 मिनट के लिए गर्म होने दें।\n2) मैकेनिकल जीरो जांच: शून्य इनपुट पर नीडल को ठीक 0 V पर समायोजित करें।\n3) स्पैन समायोजन: 100% वोल्टेज लागू करें और स्पैन ट्रिमर को 100 V पर समायोजित करें।\n4) रैखिकता परीक्षण: 0%, 25%, 50%, 75%, 100% पर आरोही और अवरोही क्रम में पाठ दर्ज करें।\n5) दस्तावेज़ीकरण: % FSE की गणना करें और कैलिब्रेशन प्रमाण पत्र जारी करें।',
        bn: '১) পরিবেশ নিয়ন্ত্রণ: ল্যাবের তাপমাত্রা ২৩°C এ রেখে যন্ত্র ৩০ মিনিট ওয়ার্মআপ হতে দাও।\n২) জিরো এডজাস্টমেন্ট: ইনপুট না থাকা অবস্থায় কাঁটাকে ঠিক ০ V পজিশনে আনো।\n৩) স্প্যান এডজাস্টমেন্ট: সোর্স থেকে ১০০% মান (যেমন ১০০ V) দিয়ে কাঁটাকে ঠিক ১০০ V দাগে মিলাও।\n৪) ৫-পয়েন্ট টেস্ট: ০%, ২৫%, ৫০%, ৭৫% ও ১০০% মানে একবার বাড়িয়ে ও পরে কমিয়ে পাঠ লিখে রাখো (Hysteresis চেক)।\n৫) রিপোর্ট: প্রতিটি পয়েন্টের % FSE এরর বের করে ক্যালিব্রেশন সার্টিফিকেট প্রদান করো।'
      }
    }
  ]
};

export const LESSON_PRACTICAL_SAFETY: Lesson = {
  id: 'lsn-ch3-practical-safety',
  topicId: 'ch3-practical-safety',
  order: 19,
  title: {
    en: 'Practical Measurement & Safety',
    hi: 'व्यवहारिक मापन एवं सुरक्षा (Practical Measurement & Safety)',
    bn: 'ব্যবহারিক পরিমাপ ও নিরাপত্তা (Practical Measurement & Safety)'
  },
  easyExplanation: {
    en: 'Electrical safety is the single most important priority during measurement! Connecting meters correctly (Ammeter in series, Voltmeter in parallel), selecting the proper CAT safety rating, using insulated personal protective equipment (PPE), and strictly following the "Test-Before-Touch" principle prevents severe electric shocks, equipment destruction, and arc-flash explosions!',
    hi: 'मापन के दौरान विद्युत सुरक्षा सबसे महत्वपूर्ण प्राथमिकता है! मीटरों को सही ढंग से जोड़ना (श्रेणीक्रम में अमीटर, समांतर में वोल्टमीटर), उचित CAT सुरक्षा रेटिंग चुनना, इंसुलेटेड पीपीई का उपयोग करना और "टेस्ट-बिफोर-टच" सिद्धांत का सख्ती से पालन करना बिजली के झटके, उपकरण विनाश और आर्क-फ्लैश विस्फोटों को रोकता है!',
    bn: 'বৈদ্যুতিক পরিমাপের ক্ষেত্রে নিজের নিরাপত্তাই সর্বাগ্রে! মিটারের সঠিক সংযোজন (শ্রেণিতে অ্যামিটার, সমান্তরালে ভোল্টমিটার), সঠিক CAT সেফটি ক্যাটাগরি বাছাই, হাতমোজা পরিধান ও "টেস্ট-বিফোর-টাচ" নীতি মেনে চলা জীবন বাঁচায় ও দুর্ঘটনা রোধ করে!'
  },
  detailedExplanation: {
    en: 'Electrical measurements on commercial power equipment involve high energy levels. Mishandling test leads or misconnecting meters can trigger fatal electric shock or short-circuit arc blasts.\n\n1. Meter Connection Topology Rules:\n   • Ammeter Connection: Connected strictly in SERIES with the load. Internal resistance $R_A \\approx 0\\,\\Omega$.\n     - DANGER: Never connect an ammeter in parallel across a voltage source! Due to $R_A \\approx 0$, it creates a catastrophic short circuit ($I_{short} = V / R_A \\approx 1000\\text{A}+$); vaporizing probes, blowing internal meter fuses, or exploding the DMM in your hands!\n   • Voltmeter Connection: Connected in PARALLEL across the voltage drop points. Internal resistance $R_V \\approx \\infty$ ($> 10\\text{ M}\\Omega$).\n\n2. IEC 61010 Multimeter Overvoltage CAT Ratings:\n   • CAT I: Electronic equipment, signal generators, protected low-voltage circuits.\n   • CAT II: Single-phase wall outlets, residential appliances, portable tools.\n   • CAT III: 3-phase commercial distribution panels, industrial feeders, motors, busbars.\n   • CAT IV: Utility service entrance, outdoor overhead power lines, electric meters.\n   - Rule: Always use CAT III (1000V) or CAT IV (600V) rated meters with high-energy internal fusing (10kA+ interrupt capacity) for industrial power circuits.\n\n3. Personal Protective Equipment (PPE):\n   • Insulated Rubber Gloves (Class 0 / 1000V rated with leather protectors).\n   • Arc-Flash Face Shield / Visor.\n   • Non-conductive safety shoes and flame-resistant cotton clothing.\n\n4. Test-Before-Touch (3-Point Safety Verification Method):\n   Before touching any exposed electrical terminal presumed dead:\n   1) Test DMM voltage on a KNOWN LIVE energized source (confirm meter works).\n   2) Test DMM voltage on the TARGET DE-ENERGIZED circuit (confirm 0 V reading).\n   3) Re-test DMM voltage on the KNOWN LIVE energized source again (confirm meter did not fail during measurement!).\n\n5. Discharge & Isolation Precautions:\n   Discharge high-voltage capacitors using a high-wattage bleed resistor before touching. Lockout/Tagout (LOTO) all supply breakers.',
    hi: 'सुरक्षित माप नियम एवं CAT रेटिंग:\n\n1. कनेक्शन नियम:\n   • अमीटर: हमेशा श्रेणीक्रम (Series) में जोडें ($R_A \\approx 0$)। कभी भी समांतर में न जोड़ें!\n   • वोल्टमीटर: हमेशा समांतर (Parallel) में जोड़ें ($R_V > 10\\text{ M}\\Omega$)।\n\n2. IEC 61010 CAT ओवरवोल्टेज सुरक्षा श्रेणी:\n   • CAT I: इलेक्ट्रॉनिक्स उपकरण।\n   • CAT II: सॉकेट और घरेलू उपकरण।\n   • CAT III: 3-फेज औद्योगिक पैनल, मोटर, मुख्य वितरण।\n   • CAT IV: आउटडोर उपयोगिता लाइनें, मुख्य सर्विस एंट्रेंस।\n\n3. टेस्ट-बिफोर-टच (3-बिंदु सत्यापन विधि):\n   1) ज्ञात लाइव स्रोत पर मीटर की जांच करें $\\to$ 2) लक्ष्य परिपथ पर 0 V जांचें $\\to$ 3) पुनः ज्ञात लाइव स्रोत पर जांचें।\n\n4. पीपीई: इंसुलेटेड रबर के दस्ताने (1000V), आर्क-फ्लैश शील्ड।',
    bn: 'নিরাপদ পরিমাপ পদ্ধতি ও CAT সেফটি ক্যাটালগ:\n\n১. মিটার সংযোগ নিয়মাবলী:\n   • অ্যামিটার: সবসময় শ্রেণিতে (Series) যুক্ত হবে ($R_A \\approx ০$)। ভুলেও সমান্তরালে লাগাবেন না!\n   • ভোল্টমিটার: সবসময় সমান্তরালে (Parallel) যুক্ত হবে ($R_V > ১০\\text{ M}\\Omega$)।\n\n২. IEC 61010 ওভারভোল্টেজ CAT ক্যাটালগ:\n   • CAT I: সাধারণ ইলেকট্রনিক্স সার্কিট।\n   • CAT II: বাসাবাড়ির ওয়াল প্লাগ পয়েন্ট ও টিভি/ফ্রিজ।\n   • CAT III: ৩-ফেজ কারখানার সাব-প্যানেল, মোটর ও বাসব্রার।\n   • CAT IV: আউটডোর মেইন পাওয়ার গ্রিড ইনকামার লাইন।\n\n৩. "টেস্ট-বিফোর-টাচ" (৩-পয়েন্ট মেথড):\n   ১) সচল পাওয়ার পয়েন্টে মিটার চেক করো $\\to$ ২) অফ থাকা আসল সার্কিটে ০ V চেক করো $\\to$ ৩) পুনরায় সচল পয়েন্টে মিটার ঠিক আছে কিনা চেক করো।'
  },
  formulas: [
    {
      symbol: 'I_{fault}',
      expression: 'I_{fault} = \\frac{V_{line}}{R_A + R_{source}}',
      description: {
        en: 'Fault Current if Ammeter is misconnected in parallel = Line Voltage / (Ammeter internal R + Source R)',
        hi: 'समांतर में अमीटर के गलत जुड़ने पर फॉल्ट धारा = लाइन वोल्टेज / (अमीटर प्रतिरोध + स्रोत प्रतिरोध)',
        bn: 'অ্যামিটার সমান্তরালে লাগালে শর্ট সার্কিট কারেন্ট = ভোল্টেজ / (অ্যামিটার রেজিস্ট্যান্স + সোর্স বাধা)'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-electrical-safety',
      title: {
        en: 'Safe vs Unsafe Meter Connection & CAT Rating Chart',
        hi: 'सुरक्षित बनाम असुरक्षित मीटर कनेक्शन और CAT रेटिंग चार्ट',
        bn: 'নিরাপদ ও বিপজ্জনক মিটার সংযোগ পদ্ধতি এবং CAT সেফটি চার্ট'
      },
      caption: {
        en: 'Ammeter in series (SAFE) vs Ammeter in parallel (DANGER SHORT CIRCUIT), plus CAT I to CAT IV zones.',
        hi: 'श्रेणीक्रम में अमीटर (सुरक्षित) बनाम समांतर में अमीटर (खतरनाक शॉर्ट सर्किट)।',
        bn: 'শ্রেণিতে অ্যামিটার (নিরাপদ) বনাম সমান্তরালে অ্যামিটার (বিপজ্জনক শর্ট সার্কিট)।'
      },
      svgType: 'electrical-safety'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch3-saf-1',
      problem: {
        en: 'A technician accidentally connects a digital multimeter set on the $10\\text{ A}$ DC Current range (internal ammeter resistance $R_A = 0.04\\,\\Omega$) directly across a $230\\text{ V}$ AC wall socket (source internal impedance $R_s = 0.20\\,\\Omega$). Calculate:\n1) Prospective short-circuit fault current ($I_{fault}$).\n2) Power dissipated across the meter probes during fault.\n3) Explain why cheap un-fused meters can explode under this condition.',
        hi: 'एक तकनीशियन गलती से $10\\text{ A}$ डीसी करंट रेंज (आंतरिक अमीटर प्रतिरोध $R_A = 0.04\\,\\Omega$) पर सेट एक डिजिटल मल्टीमीटर को सीधे $230\\text{ V}$ एसी वॉल सॉकेट (स्रोत आंतरिक प्रतिबाधा $R_s = 0.20\\,\\Omega$) पर जोड़ देता है। गणना करें:\n1) संभावित शॉर्ट-सर्किट फॉल्ट धारा ($I_{fault}$)।\n2) फॉल्ट के दौरान मीटर प्रोब में खपत शक्ति।\n3) बताएं कि इस स्थिति में सस्ते बिना फ्यूज वाले मीटर क्यों फट सकते हैं।',
        bn: 'একজন টেকনিশিয়ান ভুল করে ১০ A এসি অ্যামিটার মোডে থাকা মিটারকে (রোদ $R_A = ০.০৪\\,\\Omega$) সরাসরি ২৩০ V ওয়াল সকেটে লাগালেন (সোর্স রোদ $R_s = ০.২০\\,\\Omega$)। বের করো:\n১) সম্ভাব্য শর্ট সার্কিট ফল্ট কারেন্ট ($I_{fault}$)।\n২) ফল্টের সময় মিটারে অপচয়কৃত পাওয়ার।\n৩) ফিউজহীন সস্তা মিটার কেন এ অবস্থায় ব্রাস্ট হয়ে যায়?'
      },
      givenValues: {
        'V_line': '230 V',
        'R_A': '0.04 Ω',
        'R_s': '0.20 Ω'
      },
      solution: {
        en: '1) Total loop impedance $R_{total} = R_A + R_s = 0.04 + 0.20 = 0.24\\,\\Omega$.\n   Prospective Fault Current $I_{fault} = \\frac{230\\text{ V}}{0.24\\,\\Omega} = 958.33\\text{ A}$!\n2) Power dissipated in meter probes $P = I^2 \\times R_A = (958.33)^2 \\times 0.04 = 918,400 \\times 0.04 = 36,736\\text{ W} \\approx 36.7\\text{ kW}$!\n3) Over 36 kW of thermal flash energy is released instantly. Unfused meters melt instantly, causing explosive plasma arc flashes that blast hot copper and glass into technician hands and eyes!',
        hi: '1) $R_{total} = 0.04 + 0.20 = 0.24\\,\\Omega$।\n   $I_{fault} = \\frac{230}{0.24} = 958.33\\text{ A}$!\n2) $P = (958.33)^2 \\times 0.04 = 36,736\\text{ W} = 36.7\\text{ kW}$!\n3) 36 kW की गर्मी प्रोब को पिघला देती है, जिससे प्लाज्मा आर्क धमाका होता है!',
        bn: '১) মোট রোদ $R_{total} = ০.০৪ + ০.২০ = ০.২৪\\,\\Omega$।\n   ফল্ট কারেন্ট $I_{fault} = \\frac{২৩০}{০.২৪} = ৯৫৮.৩৩\\text{ A}$!\n২) পাওয়ার লস $P = (৯৫৮.৩৩)^২ \\times ০.০৪ = ৩৬,৭৩৬\\text{ W} = ৩৬.৭\\text{ kW}$!\n৩) মুহূর্তে ৩৬.৭ kW শক্তি জমা হয়ে সস্তা মিটারে প্লাজমা বিস্ফোরণ ঘটে যা হাত ও চোখ ঝলসে দেয়!'
      },
      finalAnswer: {
        en: 'Fault Current = 958.3 A, Fault Power = 36.7 kW (Explosive Short Circuit)',
        hi: 'फॉल्ट धारा = 958.3 A, फॉल्ट शक्ति = 36.7 kW (विस्फोटक शॉर्ट सर्किट)',
        bn: 'ফল্ট কারেন্ট = ৯৫৮.৩ A, পাওয়ার = ৩৬.৭ kW (বিস্ফোরক শর্ট সার্কিট)'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Safety auditing of industrial panel meters in 415V 3-phase factory distribution systems.',
      'Safe electrical troubleshooting in solar PV inverter installations and high-voltage EV battery packs.',
      'Utility lineman safety protocols during transformer maintenance.'
    ],
    hi: [
      '415V 3-फेज फ़ैक्टरी वितरण प्रणालियों में औद्योगिक पैनल मीटरों की सुरक्षा लेखापरीक्षा।',
      'सौर पीवी इन्वर्टर प्रतिष्ठानों और उच्च-वोल्टेज ईवी बैटरी पैक में सुरक्षित विद्युत समस्या निवारण।',
      'ट्रांसफार्मर रखरखाव के दौरान बिजली लाइनमैन सुरक्षा प्रोटोकॉल।'
    ],
    bn: [
      '৪১৫V ৩-ফেজ ফ্যাক্টরি প্যানেলে সেফটি ইন্সপেকশন করা।',
      'সোলার পাওয়ার প্লান্ট ও হাই-ভোল্টেজ ইলেকট্রিক কার (EV) ব্যাটারিতে নিরাপদ ভোল্টেজ চেক।',
      'ট্রান্সফরমার মেনটেনেন্সে পাওয়ার লাইন্সের সেফটি গাইডলাইন মেনে চলা।'
    ]
  },
  importantPoints: {
    en: [
      'Ammeter must ALWAYS be connected in SERIES ($R_A \\approx 0$). Connecting in parallel causes catastrophic short circuits!',
      'Voltmeter must ALWAYS be connected in PARALLEL ($R_V > 10\\text{ M}\\Omega$).',
      'CAT III / CAT IV multimeters feature high-energy ceramic fuses capable of safely interrupting 10kA+ short circuit currents.',
      'Test-Before-Touch 3-point method: Test live source $\\to$ Test de-energized circuit $\\to$ Re-test live source.',
      'Class 0 insulated rubber gloves (1000V rated) and face shields are compulsory for high-voltage testing.',
      'Always discharge high-voltage filter capacitors before touching circuit terminals.'
    ],
    hi: [
      'अमीटर को हमेशा श्रेणीक्रम (SERIES) में जोड़ा जाना चाहिए ($R_A \\approx 0$)। समांतर में जोड़ने से विनाशकारी शॉर्ट सर्किट होता है!',
      'वोल्टमीटर को हमेशा समांतर (PARALLEL) में जोड़ा जाना चाहिए ($R_V > 10\\text{ M}\\Omega$)।',
      'CAT III / CAT IV मल्टीमीटर में उच्च ऊर्जा सिरेमिक फ्यूज होते हैं जो 10kA+ फॉल्ट धाराओं को रोक सकते हैं।',
      'टेस्ट-बिफोर-टच 3-बिंदु विधि: लाइव जांचें $\\to$ मृत जांचें $\\to$ पुनः लाइव जांचें।',
      'उच्च-वोल्टेज परीक्षण के लिए इंसुलेटेड रबर के दस्ताने (1000V) अनिवार्य हैं।'
    ],
    bn: [
      'অ্যামিটার সবসময় শ্রেণিতে (Series) যুক্ত হতে হবে। সমান্তরালে লাগালে শর্ট সার্কিট ব্লাস্ট ঘটে!',
      'ভোল্টমিটার সবসময় সমান্তরালে (Parallel) যুক্ত হতে হবে ($R_V > ১০\\text{ M}\\Omega$)।',
      'CAT III/IV মিটারে ১০kA সেফটি গ্লাস-সিরামিক ফিউজ থাকে যা আর্কিং থেকে টেকনিশিয়ানকে বাঁচায়।',
      'টেস্ট-বিফোর-টাচ মেথড: সচল পাওয়ার $\\to$ অচল পাওয়ার $\\to$ পুনরায় সচল পাওয়ার চেক করা।',
      '১০০০V কাজের জন্য সেফটি গ্লাভস ও সান গ্লাস পরিধান করা বাধ্যতামূলক।'
    ]
  },
  commonMistakes: {
    en: [
      'Placing DMM test leads in Current (A) jack while attempting to measure AC voltage across power lines!',
      'Using CAT I / CAT II cheap handheld multimeters on 3-phase industrial power feeders (CAT III / IV hazard zone).',
      'Assuming a circuit is de-energized based on switch position without verifying with a known working voltmeter ("Test-Before-Touch").'
    ],
    hi: [
      'पावर लाइनों के पार एसी वोल्टेज मापने का प्रयास करते समय करंट (A) जैक में DMM टेस्ट लेड लगाना!',
      '3-फेज औद्योगिक पावर फीडर पर सस्ते हाथ से पकड़े जाने वाले मल्टीमीटर (CAT I / II) का उपयोग करना।',
      'ज्ञात कार्यशील वोल्टमीटर ("टेस्ट-बिफोर-टच") से पुष्टि किए बिना स्विच स्थिति के आधार पर सर्किट को बंद मान लेना।'
    ],
    bn: [
      'ভোল্টেজ মাপা কালে ভুল করে প্রব দুটি কারেন্ট (A) পোর্টে সকেটে গুঁজে লাইনে স্পর্শ করানো!',
      'শিল্প কারখানার ৩-ফেজ লাইনে (CAT III জোন) সস্তা ২ টাকার CAT I মিটার ব্যবহার করে বিপদ ডেকে আনা।',
      'টেস্ট না করেই সুইচের অফ পজিশন দেখে তারে হাত দিয়ে কারেন্ট খাওয়া।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch3-saf-1',
      question: {
        en: 'What happens if an ammeter with near-zero internal resistance is accidentally connected in parallel across a 230V AC power supply?',
        hi: 'यदि लगभग-शून्य आंतरिक प्रतिरोध वाला अमीटर गलती से 230V एसी बिजली आपूर्ति के पार समांतर में जुड़ जाए तो क्या होगा?',
        bn: 'শূন্যের কাছাকাছি বাধা বিশিষ্ট একটি অ্যামিটার ভুলবশত ২৩০V এসি সকেটের সমান্তরালে লাগিয়ে দিলে কী ঘটবে?'
      },
      options: [
        { id: 'a', text: { en: 'Meter reads 0 A safely', hi: 'मीटर सुरक्षित रूप से 0 A पढ़ता है', bn: 'মিটার নিরাপদে ০ A দেখাবে' } },
        { id: 'b', text: { en: 'Severe short circuit occurs, blowing fuse or destroying meter', hi: 'गंभीर शॉर्ट सर्किट होता है, फ्यूज उड़ जाता है या मीटर नष्ट हो जाता है', bn: 'ভয়ানক শর্ট সার্কিট ঘটে ফিউজ উড়ে যাবে বা মিটার ব্লাস্ট হবে' } },
        { id: 'c', text: { en: 'Supply voltage drops to zero without damage', hi: 'बिना नुकसान के आपूर्ति वोल्टेज शून्य हो जाता है', bn: 'ক্ষতি ছাড়াই ভোল্টেজ ড্রপ হবে' } },
        { id: 'd', text: { en: 'Meter converts automatically to voltmeter', hi: 'मीटर स्वचालित रूप से वोल्टमीटर में बदल जाता है', bn: 'মিটার নিজে নিজেই ভোল্টমিটারে বদলে যাবে' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'Near-zero internal resistance connected directly across supply creates massive short-circuit fault current, triggering protective fuses or explosive arc blasts.',
        hi: 'लगभग शून्य आंतरिक प्रतिरोध सीधे आपूर्ति के पार जुड़ने से भारी शॉर्ट-सर्किट धारा उत्पन्न होती है, जिससे फ्यूज उड़ जाता है या विस्फोट होता है।',
        bn: 'সরাসরি সকেটে প্রায় শূন্য বাধা দেওয়ায় বিশালাকার ফল্ট কারেন্ট প্রবাহিত হয়ে মিটার ও তার পুড়িয়ে ব্লাস্ট করে দেয়।'
      }
    },
    {
      id: 'mcq-ch3-saf-2',
      question: {
        en: 'Which IEC 61010 Overvoltage Category rating is mandatory for test instruments used on 3-phase industrial distribution panels and motors?',
        hi: '3-फेज औद्योगिक वितरण पैनलों और मोटरों पर उपयोग किए जाने वाले परीक्षण उपकरणों के लिए कौन सी IEC 61010 ओवरवोल्टेज श्रेणी रेटिंग अनिवार्य है?',
        bn: '৩-ফেজ শিল্প কারখানার ডিস্ট্রিবিউশন প্যানেল ও মোটর টেস্টে কোন IEC 61010 CAT সেফটি মিটার ব্যবহার বাধ্যতামূলক?'
      },
      options: [
        { id: 'a', text: { en: 'CAT I', hi: 'CAT I', bn: 'CAT I' } },
        { id: 'b', text: { en: 'CAT II', hi: 'CAT II', bn: 'CAT II' } },
        { id: 'c', text: { en: 'CAT III or CAT IV', hi: 'CAT III या CAT IV', bn: 'CAT III বা CAT IV' } },
        { id: 'd', text: { en: 'No rating required', hi: 'कोई रेटिंग आवश्यक नहीं', bn: 'কোনো ক্যাট সেফটি লাগে না' } }
      ],
      correctOptionId: 'c',
      explanation: {
        en: 'CAT III is designed for 3-phase distribution equipment and CAT IV is for utility service entrances to withstand high-energy transient voltage spikes.',
        hi: 'CAT III को 3-फेज वितरण उपकरणों के लिए और CAT IV को उपयोगिता सेवा प्रवेश द्वार के लिए उच्च-ऊर्जा स्पाइक्स का सामना करने के लिए डिज़ाइन किया गया है।',
        bn: 'CAT III ৩-ফেজ কমার্শিয়াল ডিস্ট্রিবিউশন লাইনে হাই-ভোল্টেজ স্পাইক থেকে সুরক্ষার জন্য সার্টিফাইড।'
      }
    },
    {
      id: 'mcq-ch3-saf-3',
      question: {
        en: 'What is the correct sequence in the 3-Point "Test-Before-Touch" safety procedure?',
        hi: '3-बिंदु "टेस्ट-बिफोर-टच" सुरक्षा प्रक्रिया में सही क्रम क्या है?',
        bn: '৩-পয়েন্ট "টেস্ট-বিফোর-টাচ" সেফটি প্রক্রিয়ার সঠিক ধাপ কোনটি?'
      },
      options: [
        { id: 'a', text: { en: 'Test target circuit -> Touch wires -> Test live source', hi: 'लक्ष्य परिपथ -> तारों को स्पर्श करें -> लाइव स्रोत', bn: 'টার্গেট সার্কিট -> তার স্পর্ষ -> সচল সোর্স' } },
        { id: 'b', text: { en: 'Test known live source -> Test target circuit -> Re-test known live source', hi: 'ज्ञात लाइव स्रोत जांचें -> लक्ष्य परिपथ जांचें -> पुनः ज्ञात लाइव स्रोत जांचें', bn: 'সচল লাইভ সোর্স চেক -> আসল টার্গেট সার্কিট চেক -> পুনরায় সচল সোর্স দিয়ে মিটার চেক' } },
        { id: 'c', text: { en: 'Check switch position -> Touch wires directly', hi: 'स्विच स्थिति जांचें -> तारों को सीधे स्पर्श करें', bn: 'সুইচ বন্ধ দেখে সরাসরি হাত দাও' } },
        { id: 'd', text: { en: 'Test target circuit twice', hi: 'लक्ष्य परिपथ का दो बार परीक्षण करें', bn: 'টার্গেট সার্কিট দুইবার মেপো' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'First verify meter works on a known live source, test the target circuit for 0V, then re-verify the meter on the known live source to ensure meter did not blow during testing.',
        hi: 'पहले सत्यापित करें कि मीटर एक ज्ञात लाइव स्रोत पर काम करता है, 0V के लिए लक्ष्य परिपथ का परीक्षण करें, फिर पुनः सत्यापित करें कि परीक्षण के दौरान मीटर खराब तो नहीं हुआ।',
        bn: 'প্রথমে সচল লাইনে মিটার টেস্ট করো, তারপর বন্ধ লাইনে ০V নিশ্চিত করো, শেষে পুনরায় সচল লাইনে মেপে নিশ্চিত হও যে টেস্টকালে মিটার কেটে যায়নি।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch3-saf-1',
      question: {
        en: 'Explain the "Test-Before-Touch" 3-point measurement protocol and why each step is essential for electrical safety.',
        hi: '3-बिंदु "टेस्ट-बिफोर-टच" मापन प्रोटोकॉल की व्याख्या करें और बताएं कि विद्युत सुरक्षा के लिए प्रत्येक चरण क्यों आवश्यक है।',
        bn: '৩-পয়েন্ট "টেস্ট-বিফোর-টাচ" পরিমাপ প্রটোকলটি বর্ণনা করো এবং প্রতিটি ধাপ কেন নিরাপত্তায় জরুরি তা স্পষ্ট করো।'
      },
      hint: {
        en: 'Step 1: Test known live source. Step 2: Test target dead circuit. Step 3: Re-test known live source.',
        hi: 'चरण 1: ज्ञात लाइव स्रोत। चरण 2: लक्ष्य मृत परिपथ। चरण 3: पुनः ज्ञात लाइव स्रोत।',
        bn: 'ধাপ ১: সচল লাইনে টেস্ট। ধাপ ২: আসল সার্কিট টেস্ট। ধাপ ৩: পুনরায় সচল লাইনে টেস্ট।'
      },
      answerKey: {
        en: '1) Step 1 - Verify Meter Functionality: Measure a KNOWN LIVE voltage source (e.g. 230V outlet). Confirms the multimeter, internal fuse, selector knob, and test lead continuity are 100% operational.\n2) Step 2 - Test Target Circuit: Measure the target circuit presumed de-energized. Confirm reading is strictly 0.00 V AC/DC.\n3) Step 3 - Re-verify Meter Integrity: Immediately re-test the multimeter on the same KNOWN LIVE voltage source again. This crucial final step proves that the multimeter internal fuse or display did not fail or blow during Step 2, which could otherwise falsely indicate 0V on a live circuit and cause fatal electrocution!',
        hi: '1) चरण 1 - मीटर कार्यक्षमता सत्यापित करें: एक ज्ञात लाइव स्रोत (230V) मापें। पुष्टि करता है कि लेड और फ्यूज ठीक हैं।\n2) चरण 2 - लक्ष्य परिपथ जांचें: पुष्टि करें कि पाठ्यांक ठीक 0 V है।\n3) चरण 3 - पुनः मीटर अखंडता जांचें: तुरंत फिर से ज्ञात लाइव स्रोत मापें। यह साबित करता है कि चरण 2 के दौरान मीटर का फ्यूज उड़ा नहीं है जो झूठा 0V दिखा सकता था।',
        bn: '১) ধাপ ১ - মিটারের সচলতা যাচাই: চালু থাকা সকেটে মেপে নিশ্চিত হও মিটার ও ফিউজ ১০০% সচল।\n২) ধাপ ২ - আসল সার্কিট পরিমাপ: বন্ধ সার্কিটে মেপে নিশ্চিত হও পাঠ ঠিক ০.০০ V।\n৩) ধাপ ৩ - মিটারের পুনর্যাচাই: সঙ্গে সঙ্গে আবার সচল সকেটে মেপে নিশ্চিত হও যে ধাপ ২ মেপে ওঠার সময়ে মিটারের নিজস্ব ফিউজ কেটে মিটার অচল হয়ে যায়নি, যা হলে ভুয়ো ০V দেখিয়ে প্রাণ কেড়ে নিতে পারত!'
      }
    },
    {
      id: 'pq-ch3-saf-2',
      question: {
        en: 'Differentiate between IEC Overvoltage Categories CAT I, CAT II, CAT III, and CAT IV. Why must a CAT I meter never be used on a CAT III industrial feeder panel?',
        hi: 'IEC ओवरवोल्टेज श्रेणियों CAT I, CAT II, CAT III, और CAT IV के बीच अंतर करें। एक CAT I मीटर का उपयोग CAT III औद्योगिक फीडर पैनल पर कभी क्यों नहीं किया जाना चाहिए?',
        bn: 'IEC ওভারভোল্টেজ ক্যাটাগরি CAT I, CAT II, CAT III ও CAT IV এর পার্থক্য লেখো। CAT I মিটারকে কেন ৩-ফেজ শিল্প কারখানায় (CAT III জোন) ব্যবহার করা যাবে না?'
      },
      hint: {
        en: 'Distance from utility supply determines transient arc energy. CAT IV (outdoor) -> CAT III (panel) -> CAT II (outlet) -> CAT I (electronics).',
        hi: 'उपयोगिता आपूर्ति से दूरी क्षणिक आर्क ऊर्जा निर्धारित करती है।',
        bn: 'পাওয়ার স্টেশন থেকে দুরত্ব দিয়ে ক্যাটাগরি ও আর্কিং এনার্জি নির্ধারিত হয়।'
      },
      answerKey: {
        en: '1) Categories Definition:\n   • CAT I: Protected electronic equipment and low-voltage signal processing.\n   • CAT II: Single-phase wall outlets and plug-in household appliance loads.\n   • CAT III: 3-phase commercial distribution feeders, circuit breaker panels, motors, busbars.\n   • CAT IV: Primary utility service entrance, outdoor electric meters, overhead lines.\n2) Hazard of using CAT I meter on CAT III Panel:\n   - CAT III circuits are close to utility transformers with huge short-circuit current capacity (10,000A+).\n   - Lightning or switching transients produce 6000V+ spike impulses.\n   - CAT I meters lack internal high-energy arc-containment and ceramic fuses. A voltage spike will cause internal arc breakdown, exploding the meter in an explosive flash arc that causes severe burns and blindness!',
        hi: '1) श्रेणियां: CAT I (इलेक्ट्रॉनिक्स), CAT II (घरेलू सॉकेट), CAT III (3-फेज औद्योगिक पैनल), CAT IV (आउटडोर लाइनें)।\n2) खतरा: CAT III परिपथों में उच्च शॉर्ट-सर्किट क्षमता होती है। CAT I मीटरों में सुरक्षात्मक सिरेमिक फ्यूज और आर्क बैरियर नहीं होते हैं। वोल्टेज स्पाइक मीटर में विस्फोट का कारण बनता है, जिससे गंभीर जलन और अंधापन होता है!',
        bn: '১) ক্যাটাগরি পরিচিতি: CAT I (ইলেকট্রনিক্স সার্কিট), CAT II (ওয়াল প্লাগ সকেট), CAT III (৩-ফেজ প্যানেল ও বাববার), CAT IV (বাহিরের সোর্স ইনকামার)।\n২) বিপদজনক দিক: CAT III জোনে ১০,০০০A শর্ট সার্কিট পাওয়ার থাকে। CAT I মিটারে সেফটি সিরামিক ফিউজ থাকে না। ভোল্টেজ স্পাইক লাগলে সস্তা মিটারে প্লাজমা বিস্ফোরণ ঘটে টেকনিশিয়ানকে মারাত্মক ঝলসে দেবে!'
      }
    }
  ]
};

export const LESSON_TROUBLESHOOTING: Lesson = {
  id: 'lsn-ch3-troubleshooting',
  topicId: 'ch3-troubleshooting',
  order: 20,
  title: {
    en: 'Measurement Applications & Troubleshooting',
    hi: 'मापन अनुप्रयोग एवं ट्रबलशूटिंग (Measurement Applications & Troubleshooting)',
    bn: 'পরিমাপ প্রয়োগ ও ট্রাবলশুটিং (Measurement Applications & Troubleshooting)'
  },
  easyExplanation: {
    en: 'Troubleshooting is the systematic electrical diagnostic technique used to isolate faults in circuits, motors, sensors, and power lines. By following a logical measurement plan (Voltage $\\to$ Continuity $\\to$ Resistance $\\to$ Insulation $\\to$ Current), technicians quickly pinpoint broken wires, blown fuses, or shorted windings!',
    hi: 'ट्रबलशूटिंग परिपथों, मोटरों, सेंसरों और पावर लाइनों में दोषों को अलग करने के लिए उपयोग की जाने वाली व्यवस्थित विद्युत नैदानिक तकनीक है। एक तार्किक मापन योजना (वोल्टेज $\\to$ निरंतरता $\\to$ प्रतिरोध $\\to$ इंसुलेशन $\\to$ धारा) का पालन करके, तकनीशियन टूटे हुए तारों, उड़े हुए फ्यूज या शॉर्ट वाइंडिंग को तुरंत पहचान लेते हैं!',
    bn: 'ট্রাবলশুটিং হলো বৈদ্যুতিক সার্কিট, মোটর, সেন্সর ও পাওয়ার লাইনের ত্রুটি সনাক্তকরণের সুশৃঙ্খল পদ্ধতি। একটি সুনির্দিষ্ট পরিমাপ প্ল্যান (ভোল্টেজ $\\to$ কন্টিনিউটি $\\to$ রেজিস্ট্যান্স $\\to$ ইনসুলেশন $\\to$ কারেন্ট) অনুসরণ করে নিমিষেই কাটা তার, পোড়া ফিউজ বা শর্ট কয়েল খুঁজে বের করা যায়!'
  },
  detailedExplanation: {
    en: 'Systematic troubleshooting avoids guesswork, saves repair time, and prevents damaging expensive replacement components.\n\n1. Universal 6-Step Electrical Diagnostic Methodology:\n   Step 1: Symptom Analysis (Listen to operator, observe status LEDs, panel meters).\n   Step 2: Safety & Isolation (Perform LOTO - Lockout/Tagout, verify 0V using Test-Before-Touch).\n   Step 3: Measure Power Supply Voltage (Verify phase-to-phase and phase-to-neutral voltages).\n   Step 4: Check Protection Devices & Continuity (Test fuses, circuit breakers, emergency stop buttons with continuity beeper $R < 10\\,\\Omega$).\n   Step 5: Measure Component Resistance & Insulation (Test motor coil resistance and Megger insulation resistance to earth $> 1\\text{ M}\\Omega$).\n   Step 6: Controlled Energization & Current Verification (Measure clamp meter current draw during startup).\n\n2. Real-World Practical Troubleshooting Case Studies:\n   a) Case Study 1: 3-Phase Induction Motor Fails to Start\n      • Step A: Measure supply line voltage at contactor terminals ($V_{L1-L2} = 415\\text{ V}$). If $0\\text{ V}$, check main breaker.\n      • Step B: De-energize and check overload relay trip status.\n      • Step C: Measure motor winding coil resistance ($R_{U-V} = R_{V-W} = R_{W-U} \\approx 2.5\\,\\Omega$). If $\\infty$, winding is open-circuit!\n      • Step D: Test insulation resistance with Megger ($500\\text{ V}$ DC) from each phase to motor frame. If $< 1\\text{ M}\\Omega$, winding is grounded!\n   b) Case Study 2: "Ghost" / Phantom Voltage Readings\n      • High input impedance DMMs ($10\\text{ M}\\Omega$) pick up capacitively coupled voltages ($120\\text{ V} - 180\\text{ V}$) on de-energized ungrounded wires running parallel to live cables.\n      • Solution: Use a Low Impedance (LoZ) multimeter mode (~3 kΩ input load) to safely collapse phantom voltage.\n   c) Case Study 3: 4-20 mA Industrial Transducer Process Loop Fault\n      • Process value reads 0% constant. Measure voltage across $250\\,\\Omega$ precision resistor ($V = I \\times R$).\n      • Expected range: $4\\text{ mA} \\times 250\\,\\Omega = 1.0\\text{ V}$ (0%) to $20\\text{ mA} \\times 250\\,\\Omega = 5.0\\text{ V}$ (100%).\n      • If $V = 0\\text{ V}$, check loop DC power supply (24V DC) or broken sensor transmitter cable.',
    hi: 'व्यवस्थित ट्रबलशूटिंग एवं केस स्टडी:\n\n1. सार्वभौमिक 6-चरणीय डायग्नोस्टिक विधि:\n   1) लक्षण विश्लेषण $\\to$ 2) सुरक्षा और LOTO $\\to$ 3) आपूर्ति वोल्टेज मापन $\\to$ 4) फ्यूज निरंतरता (Continuity) $\\to$ 5) वाइंडिंग प्रतिरोध एवं इंसुलेशन (Megger) $\\to$ 6) क्लैंप मीटर करंट जांच।\n\n2. केस स्टडी 1: 3-फेज मोटर चालू नहीं हो रही है\n   • लाइन वोल्टेज जांचें ($415\\text{ V}$)।\n   • ओवरलोड रिले और फ्यूज निरंतरता जांचें ($R < 10\\,\\Omega$)।\n   • कॉइल प्रतिरोध मापें ($R_{U-V} = R_{V-W} = R_{W-U}$)।\n   • मेगर से अर्थ इंसुलेशन मापें ($> 1\\text{ M}\\Omega$ होना चाहिए)।\n\n3. फैंटम (Ghost) वोल्टेज: उच्च इम्पीडेंस मीटर समांतर तारों के कारण कपल्ड वोल्टेज दिखाते हैं। LoZ मोड का उपयोग करके इसे हल करें।',
    bn: 'সুশৃঙ্খল ট্রাবলশুটিং ও প্র্যাকটিক্যাল কেস স্টাডি:\n\n১. সার্বজনীন ৬-ধাপ ডায়াগনস্টিক মেথড:\n   ১) লক্ষণ পর্যবেক্ষণ $\\to$ ২) নিরাপত্তা ও LOTO $\\to$ ৩) ভোল্টেজ পরিমাপ $\\to$ ৪) ফিউজ কন্টিনিউটি $\\to$ ৫) ওয়াইন্ডিং রোদ ও ইনসুলেশন (মেগার) $\\to$ ৬) ক্ল্যাম্প মিটারে কারেন্ট পরীক্ষা।\n\n২. কেস স্টাডি ১: ৩-ফেজ মোটর চালু হচ্ছে না\n   • সাপ্লাই ভোল্টেজ চেক ($৪১৫\\text{ V}$)।\n   • থার্মাল ওভারলোড ও ফিউজ কন্টিনিউটি টেস্ট ($R < ১০\\,\\Omega$)।\n   • মোটরের কয়েল রেজিস্ট্যান্স টেস্ট ($R_{U-V} = R_{V-W} = R_{W-U}$)।\n   • মেগার দিয়ে বডি ইনসুলেশন টেস্ট ($> ১\\text{ M}\\Omega$ হতে হবে)।\n\n৩. গোস্ট (Ghost) ভোল্টেজ: উচ্চ বাধা মিটারে পাশে থাকা তারের আবেশের কারণে ভোল্টেজ দেখায়। এটি সরাতে মিটারের LoZ মোড ব্যবহার করতে হয়।'
  },
  formulas: [
    {
      symbol: 'V_{loop}',
      expression: 'V_{loop} = I_{loop} \\times R_{sense} \\quad (4\\text{mA} \\to 1\\text{V}, \\; 20\\text{mA} \\to 5\\text{V} \\text{ for } 250\\Omega)',
      description: {
        en: '4-20 mA Loop Voltage = Loop Current × Sensing Resistance (250 Ω gives 1V to 5V output)',
        hi: '4-20 mA लूप वोल्टेज = लूप धारा × संवेदन प्रतिरोध (250 Ω पर 1V से 5V आउटपुट)',
        bn: '৪-২০ mA লুপ ভোল্টেজ = লুপ কারেন্ট × ২৫০ ওহম রেজিস্ট্যান্স (১V থেকে ৫V মান)'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-troubleshooting-flow',
      title: {
        en: 'Systematic Electrical Troubleshooting Decision Tree Flowchart',
        hi: 'व्यवस्थित विद्युत ट्रबलशूटिंग निर्णय वृक्ष फ्लोचार्ट',
        bn: 'সুশৃঙ্খল ইলেকট্রিক্যাল ট্রাবলশুটিং ডিসিশন ট্রি ফ্লোচার্ট'
      },
      caption: {
        en: 'Symptom -> Voltage Test -> Continuity Test -> Resistance Test -> Insulation Megger -> Conclusion.',
        hi: 'लक्षण -> वोल्टेज परीक्षण -> निरंतरता -> प्रतिरोध -> इंसुलेशन मेगर -> निष्कर्ष।',
        bn: 'লক্ষণ -> ভোল্টেজ টেস্ট -> কন্টিনিউটি -> রেজিস্ট্যান্স -> ইনসুলেশন টেস্ট -> সমাধান।'
      },
      svgType: 'troubleshooting-flow'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch3-trb-1',
      problem: {
        en: 'A technician is troubleshooting a 4-20 mA industrial pressure transmitter loop. Across a $250\\,\\Omega$ precision resistor connected in the control panel, the DMM measures $2.00\\text{ V}$ DC. The sensor range is 0 to 100 bar pressure. Calculate:\n1) Current flowing in the 4-20 mA loop ($I_{loop}$).\n2) Process value percentage ($PV\\%$).\n3) Measured pressure in bar.',
        hi: 'एक तकनीशियन 4-20 mA औद्योगिक दबाव ट्रांसमीटर लूप की समस्या निवारण कर रहा है। कंट्रोल पैनल में जुड़े 250 Ω परिशुद्धता प्रतिरोधक के पार DMM 2.00 V DC मापता है। सेंसर रेंज 0 से 100 बार दबाव है। गणना करें:\n1) 4-20 mA लूप में बहने वाली धारा ($I_{loop}$)।\n2) प्रक्रिया मान प्रतिशत ($PV\\%$) ।\n3) बार में मापा गया दबाव।',
        bn: 'একজন টেকনিশিয়ান ৪-২০ mA প্রেসার সেন্সর টেস্ট করছেন। ২৫০ Ω প্রিসিশন রোদের দুই প্রান্তে ভোল্টেজ পাওয়া গেল ২.০০ V। সেন্সরের মেজারিং রেঞ্জ ০ থেকে ১০০ bar। বের করো:\n১) ৪-২০ mA লুপের বর্তমান কারেন্ট ($I_{loop}$)।\n২) প্রসেস মান শতাংশ ($PV\\%$) ।\n৩) মেজারকৃত চাপের পরিমাণ (bar)।'
      },
      givenValues: {
        'V_measured': '2.00 V',
        'R_sense': '250 Ω',
        'Pressure Range': '0 to 100 bar'
      },
      solution: {
        en: '1) Loop Current $I_{loop} = \\frac{V}{R_{sense}} = \\frac{2.00\\text{ V}}{250\\,\\Omega} = 0.008\\text{ A} = 8.00\\text{ mA}$.\n2) Process Value Percentage:\n   Span current = $20\\text{ mA} - 4\\text{ mA} = 16\\text{ mA}$.\n   $PV\\% = \\frac{8.00\\text{ mA} - 4.00\\text{ mA}}{16.00\\text{ mA}} \\times 100\\% = \\frac{4.00}{16.00} \\times 100\\% = 25.0\\%$.\n3) Pressure value = $0 + 25.0\\% \\times (100 - 0)\\text{ bar} = 25.0\\text{ bar}$.',
        hi: '1) $I_{loop} = \\frac{2.00}{250} = 0.008\\text{ A} = 8.00\\text{ mA}$।\n2) $PV\\% = \\frac{8.00 - 4.00}{16.00} \\times 100\\% = 25.0\\%$।\n3) मापा गया दबाव = $25.0\\% \\times 100\\text{ bar} = 25.0\\text{ bar}$।',
        bn: '১) লুপ কারেন্ট $I_{loop} = \\frac{২.০০}{২৫০} = ০.০০৮\\text{ A} = ৮.০০\\text{ mA}$।\n২) প্রসেস মান $\% = \\frac{৮.০০ - ৪.০০}{১৬.০০} \\times ১০০\\% = ২৫.০\\%$।\n৩) মেজারকৃত চাপ = ২৫.০% \\times ১০০\\text{ bar} = ২৫.০\\text{ bar}।'
      },
      finalAnswer: {
        en: 'Loop Current = 8.0 mA, Process Value = 25% (25.0 bar)',
        hi: 'लूप धारा = 8.0 mA, प्रक्रिया मान = 25% (25.0 बार)',
        bn: 'লুপ কারেন্ট = ৮.০ mA, প্রসেস মান = ২৫% (২৫.০ bar)'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Diagnostic troubleshooting of industrial PLC 4-20 mA process loops and automated SCADA systems.',
      'Field maintenance of 3-phase induction motors, contactors, and variable frequency drives (VFDs).',
      'Locating cable faults in buried underground power distribution networks.'
    ],
    hi: [
      'औद्योगिक पीएलसी 4-20 mA प्रक्रिया लूप्स और स्वचालित स्कैडा सिस्टम का नैदानिक ट्रबलशूटिंग।',
      '3-फेज प्रेरण मोटरों, कॉन्टैक्टर्स और परिवर्तनीय आवृत्ति ड्राइव (VFD) का क्षेत्र रखरखाव।',
      'भूमिगत बिजली वितरण नेटवर्क में केबल दोषों का पता लगाना।'
    ],
    bn: [
      'শিল্প কারখানার PLC ও SCADA অটোমেশন প্রসেস লুপের ট্রাবলশুটিং করা।',
      '৩-ফেজ মোটর, ম্যাগনেটিক কন্ট্রাক্টর ও VFD ড্রাইভের মেদানিক রক্ষণাবেক্ষণ।',
      'মাটির নিচের আন্ডারগ্রাউন্ড পাওয়ার ক্যাবলের ফল্ট লোকেশন শনাক্ত করা।'
    ]
  },
  importantPoints: {
    en: [
      'Systematic sequence: Voltage $\\to$ Protection/Continuity $\\to$ Resistance $\\to$ Insulation $\\to$ Operating Current.',
      'Always observe LOTO (Lockout/Tagout) safety before touching internal power wiring.',
      'Continuity test checks unbroken paths ($R < 10\\,\\Omega$ gives audio beep).',
      'Motor coil resistance between all 3 phases (U-V, V-W, W-U) must be equal within 2% variance.',
      'Insulation resistance to ground motor frame must be $> 1\\text{ M}\\Omega$ (tested at 500V DC).',
      'Phantom / Ghost voltages caused by capacitive coupling can be collapsed using Low Impedance (LoZ) DMM mode.'
    ],
    hi: [
      'व्यवस्थित क्रम: वोल्टेज $\\to$ सुरक्षा/निरंतरता $\\to$ प्रतिरोध $\\to$ इंसुलेशन $\\to$ कार्यशील धारा।',
      'आंतरिक पावर वायरिंग को छूने से पहले हमेशा LOTO सुरक्षा का पालन करें।',
      'निरंतरता परीक्षण बिना टूटे रास्तों की जांच करता है ($R < 10\\,\\Omega$ पर बीप बजती है)।',
      'सभी 3 फेजों (U-V, V-W, W-U) के बीच मोटर कॉइल का प्रतिरोध 2% भिन्नता के भीतर समान होना चाहिए।',
      'ग्राउंड मोटर फ्रेम के लिए इंसुलेशन प्रतिरोध $> 1\\text{ M}\\Omega$ होना चाहिए (500V DC पर परीक्षण)।'
    ],
    bn: [
      'ধারাবাহিক পর্যায়: ভোল্টেজ $\\to$ কন্টিনিউটি $\\to$ কয়েল রেজিস্ট্যান্স $\\to$ ইনসুলেশন $\\to$ অপারেটিং কারেন্ট।',
      'বিদ্যুৎ লাইনে কাজ করার পূর্বে অবশ্যই LOTO লকআউট সেফটি ব্যবহার করতে হবে।',
      'কন্টিনিউটি টেস্টে তার জোড়া সঠিক থাকলে মিটার বিপ ($R < ১০\\,\\Omega$) দেয়।',
      '৩-ফেজ মোটরের প্রতিটি কয়েল রেজিস্ট্যান্স (U-V, V-W, W-U) পরস্পরের সমান (২% এর মধ্যে) হতে হবে।',
      'বডির সাথে বডি ইনসুলেশন রোদ অবশ্যই $> ১\\text{ M}\\Omega$ হতে হবে (৫০০V DC দিয়ে টেস্ট করে)।'
    ]
  },
  commonMistakes: {
    en: [
      'Measuring resistance ($R$) or continuity on an energized circuit, blowing the internal DMM fuse!',
      'Replacing a blown meter fuse with a copper wire or foil jumper, removing short-circuit explosion protection.',
      'Misinterpreting phantom voltage (e.g. 110V capacitive pickup on disconnected wire) as true live power supply.'
    ],
    hi: [
      'ऊर्जावान परिपथ पर प्रतिरोध ($R$) या निरंतरता मापना, जिससे आंतरिक DMM फ्यूज उड़ जाता है!',
      'उड़े हुए मीटर फ्यूज को तांबे के तार से बदलना, जिससे विस्फोट सुरक्षा हट जाती है।',
      'फैंटम वोल्टेज को वास्तविक लाइव बिजली आपूर्ति के रूप में गलत समझना।'
    ],
    bn: [
      'পাওয়ার চালিত থাকা অবস্থায় রেজিস্ট্যান্স বা কন্টিনিউটি মেপে মিটারের ফিউজ পুড়িয়ে ফেলা!',
      'কেটে যাওয়া ফিউজের বদলে তামা বা এলুমিনিয়ামের ফয়েল জড়িয়ে বিপদের মাত্রা বাড়ানো।',
      'গোস্ট ভোল্টেজকে (অফ থাকা তারে ভূতুড়ে ইনডিকেশন) সত্যি পাওয়ার বলে ভুল ভাবা।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch3-trb-1',
      question: {
        en: 'In a 3-phase induction motor winding test, what is the minimum acceptable insulation resistance to ground measured with a 500V Megger?',
        hi: '3-फेज इंडक्शन मोटर वाइंडिंग टेस्ट में, 500V मेगर से मापे गए ग्राउंड का न्यूनतम स्वीकार्य इंसुलेशन प्रतिरोध क्या है?',
        bn: 'একটি ৩-ফেজ মোটরের কয়েল থেকে বডির মধ্যে ৫০০V মেগার দিয়ে মাপা সর্বনিম্ন গ্রহণযোগ্য ইনসুলেশন রেজিস্ট্যান্স কত?'
      },
      options: [
        { id: 'a', text: { en: '0.1 Ω', hi: '0.1 Ω', bn: '০.১ Ω' } },
        { id: 'b', text: { en: '100 Ω', hi: '100 Ω', bn: '১০০ Ω' } },
        { id: 'c', text: { en: '1 kΩ', hi: '1 kΩ', bn: '১ kΩ' } },
        { id: 'd', text: { en: '1 MΩ', hi: '1 MΩ', bn: '১ MΩ' } }
      ],
      correctOptionId: 'd',
      explanation: {
        en: 'Electrical standards specify a minimum insulation resistance of 1 MΩ per kV rating (minimum 1 MΩ for low-voltage motors) to prevent short circuits to frame.',
        hi: 'विद्युत मानक फ्रेम में शॉर्ट सर्किट को रोकने के लिए प्रति kV रेटिंग में 1 MΩ न्यूनतम इंसुलेशन प्रतिरोध निर्दिष्ट करते हैं।',
        bn: 'ইলেকট্রিক্যাল কোড অনুযায়ী বডি শর্ট সার্কিট এড়াতে ন্যূনতম ১ মেগাওহম (1 MΩ) ইনসুলেশন থাকা বাধ্যতামূলক।'
      }
    },
    {
      id: 'mcq-ch3-trb-2',
      question: {
        en: 'What feature on a digital multimeter should be used to collapse phantom/ghost voltage readings on ungrounded wires?',
        hi: 'अनग्राउंडेड तारों पर फैंटम/गोस्ट वोल्टेज पाठ्यांकों को गिराने के लिए डिजिटल मल्टीमीटर की किस सुविधा का उपयोग किया जाना चाहिए?',
        bn: 'বন্ধ থাকা তারে আবেশিত ভূতুড়ে (Ghost) ভোল্টেজ বাদ দিতে মিটারের কোন মোডটি চালু করা উচিত?'
      },
      options: [
        { id: 'a', text: { en: 'High Voltage Mode', hi: 'हाई वोल्टेज मोड', bn: 'হাই ভোল্টেজ মোড' } },
        { id: 'b', text: { en: 'Low Impedance (LoZ) Mode', hi: 'लो इम्पीडेंस (LoZ) मोड', bn: 'লো ইমপিডেন্স (LoZ) মোড' } },
        { id: 'c', text: { en: 'Peak Hold Mode', hi: 'पीक होल्ड मोड', bn: 'পিক হোল্ড মোড' } },
        { id: 'd', text: { en: 'Continuity Beeper', hi: 'निरंतरता बीपर', bn: 'কন্টিনিউটি বিপার' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'LoZ mode places a low input resistance (~3 kΩ) across meter leads to bleed off stray capacitive charge voltages.',
        hi: 'LoZ मोड आवारा कैपेसिटिव चार्ज वोल्टेज को खत्म करने के लिए मीटर लेड्स पर एक कम इनपुट प्रतिरोध (~3 kΩ) रखता है।',
        bn: 'LoZ মোড মিটারের ইনপুট রোদ কমিয়ে (প্রায় ৩ kΩ) ক্যাপাসিটিভ আবেশিত ভোল্টেজকে ড্রেন করে সঠিক মান দেখায়।'
      }
    },
    {
      id: 'mcq-ch3-trb-3',
      question: {
        en: 'In a standard 4-20 mA industrial current loop, what voltage appears across a 250 Ω precision resistor at 100% process output (20 mA)?',
        hi: 'एक मानक 4-20 mA औद्योगिक धारा लूप में, 100% प्रक्रिया आउटपुट (20 mA) पर 250 Ω परिशुद्धता प्रतिरोधक के पार कौन सा वोल्टेज दिखाई देता है?',
        bn: 'একটি ৪-২০ mA অটোমেশন প্রসেস লুপে ১০০% আউটপুটে (২০ mA) ২৫০ Ω রেজিস্ট্যান্সের দুই প্রান্তে ভোল্টেজ কত হবে?'
      },
      options: [
        { id: 'a', text: { en: '1.0 V', hi: '1.0 V', bn: '১.০ V' } },
        { id: 'b', text: { en: '2.5 V', hi: '2.5 V', bn: '২.৫ V' } },
        { id: 'c', text: { en: '5.0 V', hi: '5.0 V', bn: '৫.০ V' } },
        { id: 'd', text: { en: '10.0 V', hi: '10.0 V', bn: '১০.০ V' } }
      ],
      correctOptionId: 'c',
      explanation: {
        en: 'V = I × R = 20 mA × 250 Ω = 0.020 A × 250 Ω = 5.0 V DC.',
        hi: 'V = I × R = 20 mA × 250 Ω = 0.020 A × 250 Ω = 5.0 V DC।',
        bn: 'V = I × R = ২০ mA × ২৫০ Ω = ০.০২০ A × ২৫০ Ω = ৫.০ V DC।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch3-trb-1',
      question: {
        en: 'Formulate a practical troubleshooting step sequence for diagnosing a 3-phase AC motor that fails to rotate when the START button is pressed.',
        hi: 'स्टार्ट बटन दबाने पर घूर्णन करने में विफल रहने वाली 3-फेज एसी मोटर का निदान करने के लिए एक व्यावहारिक ट्रबलशूटिंग चरण क्रम तैयार करें।',
        bn: 'স্টার্ট বাটন চাপার পরও একটি ৩-ফেজ এসি মোটর চালু না হলে তার ত্রুটি বের করার ব্যবহারিক ডায়াগনস্টিক ধাপসমূহ সাজাও।'
      },
      hint: {
        en: '1) Verify main supply voltage, 2) Test control circuit fuses & overload relay, 3) Test coil resistance, 4) Test Megger insulation to frame.',
        hi: '1) मुख्य आपूर्ति वोल्टेज, 2) फ्यूज और ओवरलोड, 3) कॉइल प्रतिरोध, 4) मेगर इंसुलेशन।',
        bn: '১) সোর্স ভোল্টেজ, ২) ফিউজ ও ওভারলোড, ৩) কয়েল রেজিস্ট্যান্স, ৪) মেগার টেস্ট।'
      },
      answerKey: {
        en: '1) Step 1 - Check Supply Voltage: Measure line-to-line voltages at contactor input terminals ($V_{L1-L2}, V_{L2-L3}, V_{L3-L1} = 415\\text{ V} \\pm 10\\%$). If $0\\text{ V}$, check main distribution circuit breaker.\n2) Step 2 - Check Control & Overload Circuit: Verify thermal overload relay status. Test continuity ($R < 10\\,\\Omega$) across stop button, overload contacts, and contactor operating coil ($A_1 - A_2$). Replace blown control fuses if required.\n3) Step 3 - Check Motor Winding Resistance: Perform Lockout/Tagout (LOTO). Measure phase resistance between motor terminals ($R_{U-V}, R_{V-W}, R_{W-U}$). All 3 readings must be balanced within 2%. An infinite reading indicates an open winding.\n4) Step 4 - Test Insulation Resistance to Ground: Apply 500V DC Megger between each phase terminal and motor metallic earthing frame. Minimum acceptable value is $1\\text{ M}\\Omega$. Reading near $0\\,\\Omega$ indicates a grounded fault coil that must be rewound.',
        hi: '1) चरण 1 - आपूर्ति वोल्टेज जांचें: इनपुट टर्मिनलों पर लाइन-टू-लाइन वोल्टेज (415V) मापें।\n2) चरण 2 - नियंत्रण और ओवरलोड जांचें: थर्मल ओवरलोड स्थिति और स्टॉप बटन/कॉइल में निरंतरता ($R < 10\\,\\Omega$) जांचें।\n3) चरण 3 - वाइंडिंग प्रतिरोध मापें: LOTO करें। मोटर टर्मिनलों ($R_{U-V}, R_{V-W}, R_{W-U}$) के बीच प्रतिरोध मापें। सभी 3 संतुलित होने चाहिए।\n4) चरण 4 - ग्राउंड इंसुलेशन मापें: 500V DC मेगर से मोटर फ्रेम की जांच करें। न्यूनतम स्वीकार्य मान $1\\text{ M}\\Omega$ है।',
        bn: '১) ধাপ ১ - পাওয়ার সাপ্লাই ভোল্টেজ চেক: ইনকামার প্যানেলে ৩-ফেজ ভোল্টেজ (৪১৫V) ঠিক আছে কিনা মেপো।\n২) ধাপ ২ - কন্ট্রোল ও ওভারলোড সার্কিট চেক: ওভারলোড ট্রিপ বা কন্টাক্টরের কয়েল পয়েন্টের ($A_1-A_2$) কন্টিনিউটি টেস্ট করো।\n৩) ধাপ ৩ - কয়েল রেজিস্ট্যান্স টেস্ট: বিদ্যুৎ বিচ্ছিন্ন (LOTO) করে ৩ কয়েলের রেজিস্ট্যান্স (U-V, V-W, W-U) মেপো (সবগুলো সমান হতে হবে)।\n৪) ধাপ ৪ - মেগার দিয়ে ইনসুলেশন টেস্ট: ৫০০V DC মেগার দিয়ে কয়েল থেকে বডির ইনসুলেশন মেপো (> ১ MΩ থাকা চাই)।'
      }
    },
    {
      id: 'pq-ch3-trb-2',
      question: {
        en: 'Explain the phenomenon of "Ghost" or "Phantom" voltage in electrical measurement. How does it occur and how can a technician eliminate it?',
        hi: 'विद्युत मापन में "फैंटम" या "गोस्ट" वोल्टेज की घटना को समझाएं। यह कैसे होता है और एक तकनीशियन इसे कैसे समाप्त कर सकता है?',
        bn: 'ইলেকট্রিক্যাল পরিমাপে "ভূতুড়ে" বা "গোस्ट (Ghost)" ভোল্টেজ কী? এটি কীভাবে ঘটে এবং কীভাবে টেকনিশিয়ান এটি দূর করতে পারেন?'
      },
      hint: {
        en: 'Capacitive coupling between adjacent energized and de-energized wires creates charge. High input impedance DMM ($10\\text{ M}\\Omega$) measures it. Collapse using LoZ mode (~3 kΩ).',
        hi: 'कैपेसिटिव कपलिंग के कारण। LoZ मोड (~3 kΩ) का उपयोग करके इसे हल करें।',
        bn: 'পাশে থাকা তারের ক্যাপাসিটিভ আবেশে ঘটে। মিটারের LoZ মোড দিলে লোড পেয়ে ড্রেন হয়।'
      },
      answerKey: {
        en: '1) Cause of Ghost Voltage: When a de-energized ungrounded wire runs parallel to energized high-voltage AC cables in the same conduit, stray capacitance ($C_{stray}$) is formed between the insulated conductors. Small AC currents flow through this stray capacitance, charging the de-energized wire.\n2) Why DMM Reads It: Modern Digital Multimeters have an extremely high input impedance ($10\\text{ M}\\Omega$) on voltage ranges. Because the meter draws virtually zero current, it measures this capacitively coupled phantom voltage (typically 50V to 180V AC) without collapsing it, tricking technicians into thinking the wire is live!\n3) Elimination Technique: Switch the multimeter to Low Impedance (LoZ) voltage mode. LoZ mode introduces a low input resistance (~3 kΩ) across the probe leads. This low resistance bleeds off the tiny capacitive charge to ground harmlessly, dropping the phantom voltage display to strictly 0.00 V AC. If real line power is present, the LoZ meter will continue to accurately display full line voltage (230V AC).',
        hi: '1) कारण: जब एक बंद तार पाइप में ऊर्जावान एसी केबलों के समानांतर चलता है, तो आवारा कैपेसिटेंस ($C_{stray}$) बनता है जो बंद तार को चार्ज करता है।\n2) DMM क्यों पढ़ता है: आधुनिक DMM का इनपुट इम्पीडेंस बहुत अधिक ($10\\text{ M}\\Omega$) होता है, इसलिए यह इस कपल्ड वोल्टेज (50V - 180V) को बिना गिराए मापता है।\n3) समाधान: लो इम्पीडेंस (LoZ) मोड पर स्विच करें। LoZ मोड प्रोब के पार कम प्रतिरोध (~3 kΩ) रखता है जो आवारा चार्ज को सुरक्षित रूप से निकाल देता है, जिससे फैंटम वोल्टेज घटकर 0V हो जाता है।',
        bn: '১) সৃষ্টির কারণ: কন্ডুয়েট পাইপের ভেতর একটি অফ থাকা তার যদি অনেক দূর সচল লাইনের পাশ দিয়ে যায়, তবে তারের মধ্যে ক্যাপাসিটিভ আবেশ ($C_{stray}$) ঘটার দরুন অফ থাকা তারে চার্জ জমে।\n২) মিটার কেন পাঠ দেখায়: বর্তমান ডিজিটাল মিটারের ইনপুট রোদ বিশাল ($১০\\text{ M}\\Omega$)। তাই কোনো কারেন্ট ডাইভার্ট না হয়ে এটি সেই ভূতুড়ে ভোল্টেজ (৫০V - ১৮০V) মেপে দেখায়।\n৩) সমাধানের উপায়: মিটারকে লো-ইমপিডেন্স (LoZ) মোডে দাও। LoZ মোডে ৩ kΩ বাধা তৈরি করে এই সঞ্চিত ভূতুড়ে চার্জকে শূন্য করে দেয়, কিন্তু যদি সত্যি কারেন্ট থাকে তবে আসল পাঠ ফুটিয়ে তোলে।'
      }
    }
  ]
};

export const CHAPTER_3_LESSONS_PART5: Record<string, Lesson> = {
  'ch3-calibration-testing': LESSON_CALIBRATION_TESTING,
  'ch3-practical-safety': LESSON_PRACTICAL_SAFETY,
  'ch3-troubleshooting': LESSON_TROUBLESHOOTING
};
