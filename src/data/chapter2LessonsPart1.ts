import { Lesson } from '../types';

export const CHAPTER_2_LESSONS_PART1: Record<string, Lesson> = {
  'tp-ohms-law': {
    id: 'lsn-ohms-law',
    topicId: 'tp-ohms-law',
    order: 1,
    title: {
      en: 'Ohm\'s Law & Fundamental Circuit Relationships',
      hi: 'ओम का नियम एवं बुनियादी परिपथ संबंध',
      bn: 'ওহমের সূত্র ও মৌলিক সার্কিট সম্পর্ক'
    },
    easyExplanation: {
      en: 'Ohm\'s Law is the most fundamental rule in electrical engineering. It states that the electric current flowing through a conductor is directly proportional to the voltage applied across it and inversely proportional to its electrical resistance, provided the temperature remains constant.',
      hi: 'ओम का नियम इलेक्ट्रिकल इंजीनियरिंग का सबसे बुनियादी नियम है। इसके अनुसार, किसी चालक में बहने वाली विद्युत धारा (Current) उस पर लगाए गए विभवांतर (Voltage) के समानुपाती और उसके प्रतिरोध (Resistance) के व्युत्क्रमानुपाती होती है, यदि तापमान स्थिर रहे।',
      bn: 'ওহমের সূত্র ইলেকট্রিক্যাল ইঞ্জিনিয়ারিংয়ের সবচেয়ে মৌলিক নিয়ম। এই সূত্রানুসারে, কোনো পরিবাহীর মধ্য দিয়ে প্রবাহিত তড়িৎ প্রবাহ (Current) তার দুই প্রান্তের বিভব পার্থক্যের (Voltage) সমানুপাতিক এবং পরিবাহীর রোধের (Resistance) ব্যস্তানুপাতিক, যদি তাপমাত্রা অপরিবর্তিত থাকে।'
    },
    detailedExplanation: {
      en: 'Formulated by Georg Simon Ohm in 1827, Ohm\'s Law connects the three core electrical quantities: Potential Difference (V in Volts), Current (I in Amperes), and Resistance (R in Ohms). Mathematically expressed as V = I × R, it forms the mathematical foundation for analyzing DC circuits, calculating power dissipation, and sizing electrical conductors and circuit components.',
      hi: '1827 में जॉर्ज साइमन ओम द्वारा प्रतिपादित, ओम का नियम तीन प्रमुख विद्युत राशियों को जोड़ता है: विभवांतर (V - वोल्ट), विद्युत धारा (I - एम्पीयर), और प्रतिरोध (R - ओम)। गणितीय रूप से V = I × R द्वारा व्यक्त किया गया यह नियम डीसी सर्किट के विश्लेषण, बिजली की खपत की गणना और केबल का आकार तय करने का आधार है।',
      bn: '১৮২৭ সালে গেয়র্গ সিমন ওহম কর্তৃক আবিষ্কৃত এই সূত্রটি তিনটি প্রধান বৈদ্যুতিক রাশিকে সংযুক্ত করে: বিভব পার্থক্য (V - ভোল্ট), তড়িৎ প্রবাহ (I - অ্যাম্পিয়ার) এবং রোধ (R - ওহম)। গাণিতিক রূপ V = I × R। এটি ডিসি সার্কিট বিশ্লেষণ, পাওয়ার লস গণনা এবং ক্যাবলের আকার নির্ধারণের গাণিতিক ভিত্তি।'
    },
    formulas: [
      {
        symbol: 'V',
        expression: 'V = I × R',
        description: {
          en: 'Voltage (Volts) = Current (Amperes) × Resistance (Ohms)',
          hi: 'वोल्टेज (वोल्ट) = धारा (एम्पीयर) × प्रतिरोध (ओम)',
          bn: 'ভোল্টেজ (ভোল্ট) = কারেন্ট (অ্যাম্পিয়ার) × রেজিস্ট্যান্স (ওহম)'
        }
      },
      {
        symbol: 'I',
        expression: 'I = V / R',
        description: {
          en: 'Current (Amperes) = Voltage (Volts) / Resistance (Ohms)',
          hi: 'धारा (एम्पीयर) = वोल्टेज (वोल्ट) / प्रतिरोध (ओम)',
          bn: 'কারেন্ট (অ্যাম্পিয়ার) = ভোল্টেজ (ভোল্ট) / রেজিস্ট্যান্স (ওহম)'
        }
      },
      {
        symbol: 'R',
        expression: 'R = V / I',
        description: {
          en: 'Resistance (Ohms) = Voltage (Volts) / Current (Amperes)',
          hi: 'प्रतिरोध (ओम) = वोल्टेज (वोल्ट) / धारा (एम्पीयर)',
          bn: 'রেজিস্ট্যান্স (ওহম) = ভোল্টেজ (ভোল্ট) / কারেন্ট (অ্যাম্পিয়ার)'
        }
      }
    ],
    diagrams: [
      {
        id: 'diag-ohms-triangle',
        title: {
          en: 'Ohm\'s Law Triangle & Basic Circuit Schema',
          hi: 'ओम का नियम त्रिभुज एवं परिपथ आरेख',
          bn: 'ওহমের সূত্রের ত্রিভুজ ও সার্কিট ডায়াগ্রাম'
        },
        caption: {
          en: 'Visual memory tool for calculating V, I, and R in linear DC networks.',
          hi: 'रेखीय डीसी नेटवर्क में V, I, और R की गणना के लिए दृश्य आरेख।',
          bn: 'লিনিয়ার ডিসি সার্কিটে V, I এবং R গণনার সহজ চিত্র।'
        },
        svgType: 'circuit-ohm'
      }
    ],
    solvedExamples: [
      {
        id: 'ex-1',
        problem: {
          en: 'An electric heater operating at a 230 V DC supply has a heating element resistance of 46 Ω. Calculate the electric current drawn by the heater.',
          hi: '230 V डीसी आपूर्ति पर चलने वाले एक इलेक्ट्रिक हीटर के हीटिंग एलिमेंट का प्रतिरोध 46 Ω है। हीटर द्वारा ली जाने वाली विद्युत धारा की गणना करें।',
          bn: 'একটি ইলেকট্রিক হিটার ২ ৩০ V ডিসি সরবরাহে চলে এবং এর হিটিং এলিমেন্টের রোধ ৪৬ Ω। হিটারটি কত কারেন্ট গ্রহণ করবে তা নির্ণয় করো।'
        },
        givenValues: {
          'Voltage (V)': '230 V',
          'Resistance (R)': '46 Ω'
        },
        solution: {
          en: 'Given:\n  Voltage V = 230 V\n  Resistance R = 46 Ω\n\nFormula:\n  I = V / R\n\nSubstitution & Calculation:\n  I = 230 V / 46 Ω\n  I = 5 Amperes.',
          hi: 'दिया गया है:\n  वोल्टेज V = 230 V\n  प्रतिरोध R = 46 Ω\n\nसूत्र:\n  I = V / R\n\nप्रतिस्थापन एवं गणना:\n  I = 230 V / 46 Ω\n  I = 5 एम्पीयर।',
          bn: 'দেওয়া আছে:\n  ভোল্টেজ V = ২৩০ V\n  রেজিস্ট্যান্স R = ৪৬ Ω\n\nসূত্র:\n  I = V / R\n\nমান বসিয়ে পাই:\n  I = ২৩০ V / ৪৬ Ω\n  I = ৫ অ্যাম্পিয়ার।'
        },
        finalAnswer: {
          en: 'Current drawn (I) = 5 A',
          hi: 'ली गई धारा (I) = 5 A',
          bn: 'গৃহীত কারেন্ট (I) = ৫ A'
        }
      }
    ],
    practicalApplications: {
      en: [
        'Sizing fuses and miniature circuit breakers (MCBs) for house wiring.',
        'Calculating current-limiting resistor values for LED indicators.',
        'Estimating voltage drops across transmission lines and motor power cables.'
      ],
      hi: [
        'घर की वायरिंग के लिए फ्यूज तथा एमसीबी का सही रेटिंग चुनना।',
        'एलईडी सूचक परिपथों के लिए धारा सीमित करने वाले प्रतिरोधक का मान ज्ञात करना।',
        'ट्रांसमिशन लाइनों तथा मोटर पावर केबलों में वोल्टेज ड्रॉप का अनुमान लगाना।'
      ],
      bn: [
        'বাসাবাড়ির ওয়্যারিংয়ে ফিউজ ও সার্কিট ব্রেকারের মান সঠিক রূপায়ণে।',
        'এলইডি ইন্ডিকেটর সার্কিটের কারেন্ট রেজিস্টর নির্বাচন করতে।',
        'পাওয়ার ট্রান্সমিশন লাইন ও মোটরের ক্যাবলে ভোল্টেজ ড্রপ নির্ধারণে।'
      ]
    },
    importantPoints: {
      en: [
        'Ohm\'s Law applies strictly to ohmic (linear) conductors like metals at constant temperature.',
        'Non-ohmic devices like semiconductor diodes, transistors, thermistors, and discharge lamps do not follow Ohm\'s Law.',
        'Power expression derived with Ohm\'s Law: P = V × I = I²R = V² / R.'
      ],
      hi: [
        'ओम का नियम केवल ओमिया (रेखीय) चालकों जैसे धातुओं पर स्थिर तापमान पर लागू होता है।',
        'नॉन-ओमिय उपकरण जैसे सेमीकंडक्टर डायोड, ट्रांजिस्टर और डिस्चार्ज लैंप इसका पालन नहीं करते।',
        'ओम के नियम से शक्ति का व्यंजक: P = V × I = I²R = V² / R।'
      ],
      bn: [
        'ওহমের সূত্র কেবলমাত্র স্থির তাপমাত্রায় ধাতু জাতীয় রৈখিক পরিবাহীতে প্রযোজ্য।',
        'সেমিকন্ডাক্টর ডায়োড, ট্রানজিস্টর ও ডিসচার্জ ল্যাম্পের মতো অ-রৈখিক ডিভাইসে এটি প্রযোজ্য নয়।',
        'ওহমের সূত্র থেকে পাওয়ারের রাশিমালা: P = V × I = I²R = V² / R।'
      ]
    },
    commonMistakes: {
      en: [
        'Applying DC Ohm\'s Law directly to AC circuits without substituting Impedance (Z) for Resistance (R).',
        'Neglecting the effect of temperature rise which increases conductor resistance during heavy load operations.'
      ],
      hi: [
        'प्रतिबाधा (Z) के स्थान पर सीधे केवल प्रतिरोध (R) का उपयोग करके एसी परिपथ में ओम का नियम लागू करना।',
        'अधिक लोड पर चलने के दौरान तापमान वृद्धि के कारण चालक प्रतिरोध में होने वाली वृद्धि की उपेक्षा करना।'
      ],
      bn: [
        'এসি সার্কিটে ইম্পিডেন্স (Z) বিবেচনা না করে কেবল রেজিস্ট্যান্স (R) দিয়ে সরাসরি হিসাব করা।',
        'উচ্চ লোডে তাপমাত্রা বৃদ্ধির সাথে ক্যাবলের রেজিস্ট্যান্স বৃদ্ধি পাওয়ার সত্যতা ভুলে যাওয়া।'
      ]
    },
    mcqs: [
      {
        id: 'mcq-1',
        question: {
          en: 'According to Ohm\'s Law, if the voltage across a resistor is doubled while resistance remains constant, the current will:',
          hi: 'ओम के नियम के अनुसार, यदि प्रतिरोध स्थिर रखते हुए वोल्टेज को दोगुना कर दिया जाए, तो धारा:',
          bn: 'ওহমের সূত্রানুসারে, রেজিস্ট্যান্স স্থির রেখে ভোল্টেজ দ্বিগুণ করলে কারেন্ট:'
        },
        options: [
          { id: 'a', text: { en: 'Remain unchanged', hi: 'अपरिवर्तित रहेगी', bn: 'একই থাকবে' } },
          { id: 'b', text: { en: 'Be halved', hi: 'आधी हो जाएगी', bn: 'অর্ধেক হয়ে যাবে' } },
          { id: 'c', text: { en: 'Be doubled', hi: 'दोगुनी हो जाएगी', bn: 'দ্বিগুণ হয়ে যাবে' } },
          { id: 'd', text: { en: 'Become four times', hi: 'चौगुनी हो जाएगी', bn: 'চার গুণ হয়ে যাবে' } }
        ],
        correctOptionId: 'c',
        explanation: {
          en: 'Since I = V / R, electric current is directly proportional to applied voltage. Doubling V doubles I.',
          hi: 'चूंकि I = V / R, विद्युत धारा लगाए गए वोल्टेज के समानुपाती होती है। V को दोगुना करने पर I भी दोगुना हो जाएगा।',
          bn: 'যেহেতু I = V / R, তড়িৎ প্রবাহ ভোল্টেজের সমানুপাতিক। V দ্বিগুণ করলে I-ও দ্বিগুণ হবে।'
        }
      },
      {
        id: 'mcq-2',
        question: {
          en: 'Which of the following electrical components does NOT follow Ohm\'s Law?',
          hi: 'निम्नलिखित में से कौन सा विद्युत घटक ओम के नियम का पालन नहीं करता है?',
          bn: 'নিচের কোন বৈদ্যুতিক উপাদানটি ওহমের সূত্র মেনে চলে না?'
        },
        options: [
          { id: 'a', text: { en: 'Copper Cable', hi: 'तांबे का केबल', bn: 'তামার ক্যাবল' } },
          { id: 'b', text: { en: 'Semiconductor Diode', hi: 'सेमीकंडक्टर डायोड', bn: 'সেমিকন্ডাক্টর ডায়োড' } },
          { id: 'c', text: { en: 'Nichrome Resistance Wire', hi: 'नाइक्रोम प्रतिरोधक तार', bn: 'নাইক্রোম রেজিস্ট্যান্স তার' } },
          { id: 'd', text: { en: 'Carbon Film Resistor', hi: 'कार्बन फिल्म प्रतिरोधक', bn: 'কার্বন ফিল্ম রেজিস্টর' } }
        ],
        correctOptionId: 'b',
        explanation: {
          en: 'Diodes are non-linear semiconductor devices whose resistance changes with applied voltage direction and magnitude.',
          hi: 'डायोड नॉन-लीनियर सेमीकंडक्टर उपकरण हैं जिनका प्रतिरोध लागू वोल्टेज की दिशा और मान के साथ बदलता है।',
          bn: 'ডায়োড একটি অ-রৈখিক উপাদান যার রেজিস্ট্যান্স প্রয়োগকৃত ভোল্টেজের অভিমুখ ও মানের সাথে পরিবর্তিত হয়।'
        }
      },
      {
        id: 'mcq-3',
        question: {
          en: 'What is the electrical power dissipated in a 10 Ω resistor carrying a current of 2 A?',
          hi: '2 A की धारा ले जाने वाले 10 Ω के प्रतिरोधक में कितनी विद्युत शक्ति नष्ट होगी?',
          bn: '১০ Ω রেজিস্টরের মধ্য দিয়ে ২ A কারেন্ট প্রবাহিত হলে কী পরিমাণ পাওয়ার ব্যয় হবে?'
        },
        options: [
          { id: 'a', text: { en: '20 Watts', hi: '20 वाट', bn: '২০ ওয়াট' } },
          { id: 'b', text: { en: '40 Watts', hi: '40 वाट', bn: '৪০ ওয়াট' } },
          { id: 'c', text: { en: '100 Watts', hi: '100 वाट', bn: '১০০ ওয়াট' } },
          { id: 'd', text: { en: '5 Watts', hi: '5 वाट', bn: '৫ वाट' } }
        ],
        correctOptionId: 'b',
        explanation: {
          en: 'Power P = I² × R = (2 A)² × 10 Ω = 4 × 10 = 40 Watts.',
          hi: 'शक्ति P = I² × R = (2 A)² × 10 Ω = 4 × 10 = 40 वाट।',
          bn: 'পাওয়ার P = I² × R = (২ A)² × ১০ Ω = ৪ × ১০ = ৪০ ওয়াট।'
        }
      }
    ],
    practiceQuestions: [
      {
        id: 'pq-1',
        question: {
          en: 'A 12 V automotive battery is connected to a DC lamp with a resistance of 4 Ω. Calculate the current in the circuit and the power consumed by the lamp.',
          hi: '12 V की ऑटोमोटिव बैटरी 4 Ω प्रतिरोध वाले लैंप से जुड़ी है। परिपथ में धारा और लैंप द्वारा खपत की गई विद्युत शक्ति की गणना करें।',
          bn: 'একটি ১২ V গাড়ির ব্যাটারি ৪ Ω রেজিস্ট্যান্সের ল্যাম্পের সাথে যুক্ত। সার্কিটের কারেন্ট এবং ল্যাম্প কর্তৃক ব্যবহৃত শক্তি বের করো।'
        },
        hint: {
          en: 'Calculate current using I = V / R, then find power using P = V × I.',
          hi: 'I = V / R से धारा ज्ञात करें, फिर P = V × I से शक्ति ज्ञात करें।',
          bn: 'আই = V / R দিয়ে কারেন্ট বের করো, তারপর P = V × I দিয়ে পাওয়ার বের করো।'
        },
        answerKey: {
          en: 'Current I = 12 / 4 = 3 A. Power P = 12 V × 3 A = 36 W.',
          hi: 'धारा I = 12 / 4 = 3 A। शक्ति P = 12 V × 3 A = 36 W।',
          bn: 'কারেন্ট I = ১২ / ৪ = ৩ A। পাওয়ার P = ১২ V × ৩ A = ৩৬ W।'
        }
      },
      {
        id: 'pq-2',
        question: {
          en: 'Explain why a thin conductor wire has higher resistance compared to a thick wire of the same length and material.',
          hi: 'समझाइए कि समान लंबाई और पदार्थ के मोटे तार की तुलना में पतले तार का प्रतिरोध अधिक क्यों होता है।',
          bn: 'একই উপাদান ও দৈর্ঘ্যের মোটা তারের চেয়ে সরু তারের বৈদ্যুতিক রোধ বেশি হয় কেন তা ব্যাখ্যা করো।'
        },
        hint: {
          en: 'Recall the formula R = ρ × (L / A) where A represents cross-sectional area.',
          hi: 'सूत्र R = ρ × (L / A) को याद करें जहां A अनुप्रस्थ काट का क्षेत्रफल है।',
          bn: 'R = ρ × (L / A) সূত্রটি মনে করো যেখানে A হলো প্রস্থচ্ছেদের ক্ষেত্রফল।'
        },
        answerKey: {
          en: 'Resistance is inversely proportional to cross-sectional area (A). A thin wire has a smaller area, offering greater opposition to electron movement.',
          hi: 'प्रतिरोध अनुप्रस्थ काट के क्षेत्रफल (A) के व्युत्क्रमानुपाती होता है। पतले तार का क्षेत्रफल कम होता है, जिससे इलेक्ट्रॉनों के प्रवाह में अधिक बाधा आती है।',
          bn: 'রোধ পরিবাহীর প্রস্থচ্ছেদের ক্ষেত্রফলের (A) ব্যস্তানুপাতিক। সরু তারের ক্ষেত্রফল কম হওয়ায় তা ইলেকট্রন প্রবাহে বেশি বাধা দেয়।'
        }
      }
    ]
  },

  'tp-v-i-r-rel': {
    id: 'lsn-vir-rel',
    topicId: 'tp-v-i-r-rel',
    order: 2,
    title: {
      en: 'Voltage–Current–Resistance Relationship',
      hi: 'वोल्टेज-धारा-प्रतिरोध अंतर्संबंध',
      bn: 'ভোল্টেজ-কারেন্ট-রেজিস্ট্যান্স পারস্পরিক সম্পর্ক'
    },
    easyExplanation: {
      en: 'Voltage, Current, and Resistance are interlinked like a water pump system. Voltage is the pressure pushing charge, Current is the flow rate of charge, and Resistance is the restriction in the pipe. Changing any one quantity immediately changes the others.',
      hi: 'वोल्टेज, धारा और प्रतिरोध पानी के पंप सिस्टम की तरह आपस में जुड़े हुए हैं। वोल्टेज धक्का देने वाला दबाव है, धारा प्रवाह की दर है, और प्रतिरोध पाइप में रुकावट है। किसी एक राशि को बदलने पर अन्य राशियाँ तुरंत बदल जाती हैं।',
      bn: 'ভোল্টেজ, কারেন্ট এবং রেজিস্ট্যান্স একটি ওয়াটার পাম্প সিস্টেমের মতো পরস্পরের সাথে যুক্ত। ভোল্টেজ হলো আধানকে ঠেলে দেওয়ার চাপ, কারেন্ট হলো প্রবাহের হার, আর রেজিস্ট্যান্স হলো পাইপের বাধা। একটি রাশি পরিবর্তন করলে অন্যগুলো সরাসরি প্রভাবিত হয়।'
    },
    detailedExplanation: {
      en: 'In linear electrical networks, current (I) is directly proportional to potential difference (V) when resistance (R) is constant, and inversely proportional to resistance (R) when potential difference (V) is constant. The slope of the V-I characteristic graph represents the resistance R (for V on vertical axis and I on horizontal axis, slope = ΔV/ΔI = R). Linear (ohmic) resistors show a straight line through the origin, whereas non-ohmic components like filament lamps and diodes produce curved V-I plots.',
      hi: 'रेखीय विद्युत नेटवर्क में, धारा (I) विभवांतर (V) के समानुपाती होती है जब प्रतिरोध (R) स्थिर हो, और प्रतिरोध (R) के व्युत्क्रमानुपाती होती है जब विभवांतर (V) स्थिर हो। V-I ग्राफ का ढाल (Slope) प्रतिरोध R को दर्शाता है। ओमिया (लीनियर) घटकों के लिए यह ग्राफ मूल बिंदु से गुजरने वाली एक सीधी रेखा होती है, जबकि फिलामेंट लैंप और डायोड में यह वक्र होती है।',
      bn: 'রৈখিক বৈদ্যুতিক সার্কিটে, রেজিস্ট্যান্স (R) স্থির থাকলে কারেন্ট (I) বিভব পার্থক্যের (V) সমানুপাতিক হয়, আর বিভব পার্থক্য (V) স্থির থাকলে কারেন্ট (I) রেজিস্ট্যান্সের (R) ব্যস্তানুপাতিক হয়। V-I লেখচিত্রের ঢাল (Slope = ΔV/ΔI) রেজিস্ট্যান্স R নির্দেশ করে। ওহমীয় উপাদানের জন্য V-I গ্রাফ মূলবিন্দুগামী একটি সরলরেখা এবং অ-ওহমীয় উপাদান যেমন ফিলামেন্ট ল্যাম্প ও ডায়োডের জন্য এটি একটি বক্ররেখা।'
    },
    formulas: [
      {
        symbol: 'I ∝ V',
        expression: 'I = V / R',
        description: {
          en: 'At constant R: Current increases linearly with Voltage.',
          hi: 'स्थिर R पर: धारा वोल्टेज के साथ रेखीय रूप से बढ़ती है।',
          bn: 'স্থির R-এ: ভোল্টেজ বাড়লে কারেন্ট রৈখিকভাবে বাড়ে।'
        }
      },
      {
        symbol: 'I ∝ 1/R',
        expression: 'I = V / R',
        description: {
          en: 'At constant V: Current decreases as Resistance increases.',
          hi: 'स्थिर V पर: प्रतिरोध बढ़ने पर धारा घटती है।',
          bn: 'স্থির V-এ: রেজিস্ট্যান্স বাড়লে কারেন্ট কমে।'
        }
      },
      {
        symbol: 'R = ΔV / ΔI',
        expression: 'R = (V₂ - V₁) / (I₂ - I₁)',
        description: {
          en: 'Resistance equals the slope of V-I characteristic curve.',
          hi: 'प्रतिरोध V-I ग्राफ के ढाल के बराबर होता है।',
          bn: 'রেজিস্ট্যান্স হলো V-I গ্রাফের ঢালের সমান।'
        }
      }
    ],
    diagrams: [
      {
        id: 'diag-vir-rel',
        title: {
          en: 'V-I Characteristic Curves for Ohmic vs Non-Ohmic Conductors',
          hi: 'ओमिया एवं नॉन-ओमिया चालकों का V-I ग्राफ',
          bn: 'ওহমীয় ও অ-ওহমীয় পরিবাহীর V-I বৈশিষ্ট্যসূচক গ্রাফ'
        },
        caption: {
          en: 'Ohmic resistor produces a straight line (constant R); filament lamp curves upward due to thermal resistance rise.',
          hi: 'ओमिया प्रतिरोधक सीधी रेखा (स्थिर R) देता है; फिलामेंट लैंप तापीय वृद्धि के कारण वक्र रेखा देता है।',
          bn: 'ওহমীয় রেজিস্টরে সোজা সরলরেখা পাওয়া যায়; ফিলামেন্ট ল্যাম্পে তাপমাত্রা বৃদ্ধির কারণে এটি বক্ররেখা হয়।'
        },
        svgType: 'circuit-vir-triangle'
      }
    ],
    solvedExamples: [
      {
        id: 'ex-vir-1',
        problem: {
          en: 'A fixed resistor R = 20 Ω is connected across a variable voltage supply. Case A: Voltage is set to 100 V. Case B: Voltage is doubled to 200 V. Calculate current in both cases and state the proportional relationship.',
          hi: 'एक स्थिर प्रतिरोधक R = 20 Ω एक परिवर्त्य वोल्टेज स्रोत से जुड़ा है। स्थिति A: वोल्टेज 100 V है। स्थिति B: वोल्टेज बढ़ाकर 200 V कर दिया जाता है। दोनों स्थितियों में धारा की गणना करें।',
          bn: 'একটি স্থির রেজিস্টর R = ২০ Ω পরিবর্তনশীল ভোল্টেজ উৎসের সাথে যুক্ত। ক্ষেত্র A: ভোল্টেজ ১০০ V। ক্ষেত্র B: ভোল্টেজ বাড়িয়ে ২০০ V করা হলো। উভয় ক্ষেত্রে কারেন্ট নির্ণয় করো।'
        },
        givenValues: {
          'Resistance (R)': '20 Ω',
          'Voltage A (V₁)': '100 V',
          'Voltage B (V₂)': '200 V'
        },
        solution: {
          en: 'Given:\n  R = 20 Ω\n  V₁ = 100 V, V₂ = 200 V\n\nFormula:\n  I = V / R\n\nCalculation Case A:\n  I₁ = 100 V / 20 Ω = 5 A\n\nCalculation Case B:\n  I₂ = 200 V / 20 Ω = 10 A\n\nObservation:\n  Doubling voltage from 100 V to 200 V exactly doubles current from 5 A to 10 A, proving direct proportionality (I ∝ V).',
          hi: 'दिया गया है:\n  R = 20 Ω\n  V₁ = 100 V, V₂ = 200 V\n\nसूत्र:\n  I = V / R\n\nगणना स्थिति A:\n  I₁ = 100 V / 20 Ω = 5 A\n\nगणना स्थिति B:\n  I₂ = 200 V / 20 Ω = 10 A\n\nनिष्कर्ष:\n  वोल्टेज को 100 V से 200 V करने पर धारा 5 A से बढ़कर 10 A हो जाती है (समानुपाती संबंध I ∝ V)।',
          bn: 'দেওয়া আছে:\n  R = ২০ Ω\n  V₁ = ১০০ V, V₂ = ২০০ V\n\nসূত্র:\n  I = V / R\n\nক্ষেত্র A গণনাসমূহ:\n  I₁ = ১০০ V / ২০ Ω = ৫ A\n\nক্ষেত্র B গণনাসমূহ:\n  I₂ = ২০০ V / ২০ Ω = ১০ A\n\nসিদ্ধান্ত:\n  ভোল্টেজ ১০০ V থেকে ২০০ V দ্বিগুণ করায় কারেন্ট ৫ A থেকে ১০ A-তে দ্বিগুণ হয়, যা প্রমাণ করে I ∝ V।'
        },
        finalAnswer: {
          en: 'Current I₁ = 5 A, I₂ = 10 A (Direct Proportionality Verified)',
          hi: 'धारा I₁ = 5 A, I₂ = 10 A (समानुपाती संबंध सत्यापित)',
          bn: 'কারেন্ট I₁ = ৫ A, I₂ = ১০ A (সমানুপাতিক সম্পর্ক প্রমাণিত)'
        }
      }
    ],
    practicalApplications: {
      en: [
        'Variable speed control of DC motors using rheostats.',
        'Calibrating light dimmers and electronic heater controls.',
        'Selecting proper cable gauges to limit line current heating.'
      ],
      hi: [
        'रियोस्टेट द्वारा डीसी मोटर की गति नियंत्रण।',
        'लाइट डिमर और इलेक्ट्रॉनिक हीटर कंट्रोल का कैलिब्रेशन।',
        'केबल हीटिंग को सीमित करने के लिए सही तार का चयन।'
      ],
      bn: [
        'রিওস্ট্যাট ব্যবহার করে ডিসি মোটরের স্পিড কন্ট্রোল করতে।',
        'লাইটের ডিমার ও ইলেকট্রনিক হিটারের মান সামঞ্জস্য করতে।',
        'তারের হিট কমানোর জন্য সঠিক সাইজের ক্যাবল বাছতে।'
      ]
    },
    importantPoints: {
      en: [
        'If V is kept constant, doubling R reduces current to half (I₂ = I₁ / 2).',
        'The slope of a V-I graph with V on the Y-axis and I on the X-axis is Resistance R.',
        'The slope of an I-V graph with I on the Y-axis and V on the X-axis is Conductance G = 1/R.'
      ],
      hi: [
        'यदि V को स्थिर रखा जाए, तो R को दोगुना करने पर धारा आधी हो जाती है।',
        'Y-अक्ष पर V और X-अक्ष पर I वाले ग्राफ का ढाल प्रतिरोध R होता है।',
        'Y-अक्ष पर I और X-अक्ष पर V वाले ग्राफ का ढाल चालकता G = 1/R होता है।'
      ],
      bn: [
        'V স্থির রাখলে R দ্বিগুণ করলে কারেন্ট অর্ধেক হয়ে যায়।',
        'Y-অক্ষে V এবং X-অক্ষে I ধরে আঁকা গ্রাফের ঢাল হলো রেজিস্ট্যান্স R।',
        'Y-অক্ষে I এবং X-অক্ষে V ধরে আঁকা গ্রাফের ঢাল হলো কন্ডাকট্যান্স G = 1/R।'
      ]
    },
    commonMistakes: {
      en: [
        'Confusing V-I graph slope (R) with I-V graph slope (1/R).',
        'Assuming resistance changes automatically when applied voltage changes in an ohmic material.'
      ],
      hi: [
        'V-I ग्राफ के ढाल (R) को I-V ग्राफ के ढाल (1/R) के साथ भ्रमित करना।',
        'यह मान लेना कि ओमिया पदार्थ में वोल्टेज बदलने पर प्रतिरोध अपने आप बदल जाता है।'
      ],
      bn: [
        'V-I গ্রাফের ঢাল (R) এবং I-V গ্রাফের ঢাল (1/R) গুলিয়ে ফেলা।',
        'ওহমীয় উপাদানে ভোল্টেজ পরিবর্তন করলে রেজিস্ট্যান্স বদলে যায় ভেবে ভুল করা।'
      ]
    },
    mcqs: [
      {
        id: 'mcq-vir-1',
        question: {
          en: 'In a DC circuit with a constant voltage supply, if the circuit resistance is tripled, the current will:',
          hi: 'स्थिर वोल्टेज आपूर्ति वाले डीसी सर्किट में, यदि परिपथ का प्रतिरोध तिगुना कर दिया जाए, तो धारा:',
          bn: 'স্থির ভোল্টেজের একটি ডিসি সার্কিটে রেজিস্ট্যান্স তিনগুণ বৃদ্ধি করলে কারেন্ট কত হবে?'
        },
        options: [
          { id: 'a', text: { en: 'Triple', hi: 'तिगुनी हो जाएगी', bn: 'তিনগুণ হবে' } },
          { id: 'b', text: { en: 'Reduce to one-third', hi: 'एक तिहाई हो जाएगी', bn: 'এক-তৃতীয়াংশ হবে' } },
          { id: 'c', text: { en: 'Remain the same', hi: 'समान रहेगी', bn: 'একই থাকবে' } },
          { id: 'd', text: { en: 'Become nine times', hi: 'नौ गुना हो जाएगी', bn: 'নয় গুণ হবে' } }
        ],
        correctOptionId: 'b',
        explanation: {
          en: 'Because I = V / R, current is inversely proportional to resistance. Tripling R decreases I to 1/3.',
          hi: 'चूंकि I = V / R, धारा प्रतिरोध के व्युत्क्रमानुपाती होती है। R को तिगुना करने पर I घटकर 1/3 हो जाती है।',
          bn: 'যেহেতু I = V / R, কারেন্ট রেজিস্ট্যান্সের ব্যস্তানুপাতিক। R তিনগুণ করলে I হবে ১/৩।'
        }
      },
      {
        id: 'mcq-vir-2',
        question: {
          en: 'What does the slope of a V-I graph represent when V is plotted on the Y-axis and I on the X-axis?',
          hi: 'यदि V को Y-अक्ष और I को X-अक्ष पर दर्शाया जाए, तो V-I ग्राफ का ढाल क्या दर्शाता है?',
          bn: 'Y-অক্ষে V এবং X-অক্ষে I ধরে আঁকা V-I গ্রাফের ঢাল কী নির্দেশ করে?'
        },
        options: [
          { id: 'a', text: { en: 'Electrical Power', hi: 'विद्युत शक्ति', bn: 'বৈদ্যুতিক পাওয়ার' } },
          { id: 'b', text: { en: 'Electrical Conductance', hi: 'विद्युत चालकता', bn: 'বৈদ্যুতিক কন্ডাকট্যান্স' } },
          { id: 'c', text: { en: 'Electrical Resistance', hi: 'विद्युत प्रतिरोध', bn: 'বৈদ্যুতিক রেজিস্ট্যান্স' } },
          { id: 'd', text: { en: 'Electric Charge', hi: 'विद्युत आवेश', bn: 'বৈদ্যুতিক আধান' } }
        ],
        correctOptionId: 'c',
        explanation: {
          en: 'Slope = ΔY / ΔX = ΔV / ΔI = R (Resistance in Ohms).',
          hi: 'ढाल = ΔY / ΔX = ΔV / ΔI = R (प्रतिरोध ओम में)।',
          bn: 'ঢাল = ΔY / ΔX = ΔV / ΔI = R (ওহমে রেজিস্ট্যান্স)।'
        }
      },
      {
        id: 'mcq-vir-3',
        question: {
          en: 'If a lamp operating at 12 V draws 2 A, what resistance does its filament present?',
          hi: 'यदि 12 V पर चलने वाला लैंप 2 A धारा लेता है, तो इसके फिलामेंट का प्रतिरोध कितना होगा?',
          bn: 'একটি ১২ V ল্যাম্প যদি ২ A কারেন্ট নেয়, তবে ফিলামেন্টের রেজিস্ট্যান্স কত?'
        },
        options: [
          { id: 'a', text: { en: '24 Ω', hi: '24 Ω', bn: '২৪ Ω' } },
          { id: 'b', text: { en: '6 Ω', hi: '6 Ω', bn: '৬ Ω' } },
          { id: 'c', text: { en: '0.16 Ω', hi: '0.16 Ω', bn: '০.১৬ Ω' } },
          { id: 'd', text: { en: '14 Ω', hi: '14 Ω', bn: '১৪ Ω' } }
        ],
        correctOptionId: 'b',
        explanation: {
          en: 'R = V / I = 12 V / 2 A = 6 Ω.',
          hi: 'R = V / I = 12 V / 2 A = 6 Ω।',
          bn: 'R = V / I = ১২ V / ২ A = ৬ Ω।'
        }
      }
    ],
    practiceQuestions: [
      {
        id: 'pq-vir-1',
        question: {
          en: 'A circuit operating at 230 V draws 10 A. If the line voltage drops by 10% to 207 V while resistance stays constant, calculate the new current.',
          hi: '230 V पर चलने वाला परिपथ 10 A धारा लेता है। यदि प्रतिरोध स्थिर रहते हुए वोल्टेज 10% घटकर 207 V हो जाए, तो नई धारा ज्ञात करें।',
          bn: '২৩০ V-এর একটি সার্কিট ১০ A কারেন্ট টানে। রেজিস্ট্যান্স স্থির রেখে ভোল্টেজ ১০% কমে ২০৭ V হলে নতুন কারেন্ট কত হবে?'
        },
        hint: {
          en: 'First calculate resistance R = 230 / 10 = 23 Ω, then find new current I_new = 207 / 23.',
          hi: 'पहले R = 230 / 10 = 23 Ω निकालें, फिर I_new = 207 / 23 ज्ञात करें।',
          bn: 'প্রথমে R = ২৩০ / ১০ = ২৩ Ω বের করো, তারপর I_new = ২০৭ / ২৩ বের করো।'
        },
        answerKey: {
          en: 'R = 23 Ω. New current I = 207 V / 23 Ω = 9 A.',
          hi: 'R = 23 Ω। नई धारा I = 207 V / 23 Ω = 9 A।',
          bn: 'R = ২৩ Ω। নতুন কারেন্ট I = ২০৭ V / ২৩ Ω = ৯ A।'
        }
      },
      {
        id: 'pq-vir-2',
        question: {
          en: 'Distinguish between linear (ohmic) and non-linear (non-ohmic) circuit elements with two practical examples of each.',
          hi: 'रेखीय (ओमिया) तथा अरेखीय (नॉन-ओमिया) परिपथ घटकों के बीच अंतर दो-दो व्यावहारिक उदाहरणों सहित स्पष्ट करें।',
          bn: 'রৈখিক (ওহমীয়) এবং অ-রৈখিক (অ-ওহমীয়) উপাদানের পার্থক্য দুটি করে বাস্তব উদাহরণ সহ লেখো।'
        },
        hint: {
          en: 'Linear elements have constant R independent of V or I (e.g., resistors, copper wires). Non-linear elements have variable R (e.g., diodes, filament lamps).',
          hi: 'रेखीय घटकों का R स्थिर रहता है (जैसे प्रतिरोधक, तांबे के तार)। अरेखीय घटकों का R बदलता है (जैसे डायोड, फिलामेंट लैंप)।',
          bn: 'রৈখিক উপাদানের R স্থির থাকে (যেমন রেজিস্টর, তামার তার)। অ-রৈখিক উপাদানের R পরিবর্তিত হয় (যেমন ডায়োড, ফিলামেন্ট ল্যাম্প)।'
        },
        answerKey: {
          en: 'Linear: Carbon resistors, copper conductors (constant slope V-I line). Non-linear: PN junction diode, incandescent lamp filament (curved V-I graph due to temperature/semiconductor effects).',
          hi: 'रेखीय: कार्बन प्रतिरोधक, तांबे का तार। अरेखीय: पीएन जंक्शन डायोड, फिलामेंट लैंप।',
          bn: 'রৈখিক: কার্বন রেজিস্টর, তামার পরিবাহী। অ-রৈখিক: পি-এন জংশন ডায়োড, ফিলামেন্ট ল্যাম্প।'
        }
      }
    ]
  },

  'tp-series-circuit': {
    id: 'lsn-series-circuit',
    topicId: 'tp-series-circuit',
    order: 3,
    title: {
      en: 'Series Circuit',
      hi: 'श्रेणी परिपथ (सीरीज सर्किट)',
      bn: 'সিরিজ সার্কিট'
    },
    easyExplanation: {
      en: 'A series circuit is a single continuous loop where components are connected end-to-end. Exactly the same current flows through every component. If any single component breaks or opens, the entire circuit stops working.',
      hi: 'श्रेणी परिपथ (Series Circuit) एक एकल लूप है जहाँ घटक एक के बाद एक जुड़े होते हैं। प्रत्येक घटक से ठीक एक समान धारा बहती है। यदि कोई एक घटक भी टूट जाए, तो पूरा परिपथ बंद हो जाता है।',
      bn: 'সিরিজ সার্কিট হলো একটি একক লুপ যেখানে উপাদানগুলো পর পর এক লাইনে যুক্ত থাকে। প্রতিটি উপাদানের মধ্য দিয়ে একই কারেন্ট প্রবাহিত হয়। কোনো একটি উপাদান নষ্ট হলে পুরো সার্কিট বন্ধ হয়ে যায়।'
    },
    detailedExplanation: {
      en: 'In a series circuit, resistors R₁, R₂, R₃... are connected end-to-end across a single voltage source V_T. By Kirchhoff’s Current Law (KCL), the current is identical at every point: I_T = I₁ = I₂ = I₃. The total equivalent resistance R_eq is the algebraic sum of all individual resistances: R_eq = R₁ + R₂ + R₃ + ... + R_n. By Kirchhoff’s Voltage Law (KVL), the total supply voltage equals the sum of voltage drops across individual components: V_T = V₁ + V₂ + V₃. Adding more series resistors increases total resistance and decreases circuit current.',
      hi: 'श्रेणी परिपथ में प्रतिरोधक R₁, R₂, R₃... एक ही वोल्टेज स्रोत V_T के साथ श्रेणी में जुड़े होते हैं। किरचॉफ के धारा नियम (KCL) के अनुसार, हर बिंदु पर धारा समान होती है: I_T = I₁ = I₂ = I₃। कुल समतुल्य प्रतिरोध R_eq सभी प्रतिरोधों का योग होता है: R_eq = R₁ + R₂ + R₃। किरचॉफ के वोल्टेज नियम (KVL) के अनुसार, कुल आपूर्ति वोल्टेज सभी घटकों के वोल्टेज ड्रॉप के योग के बराबर होता है: V_T = V₁ + V₂ + V₃।',
      bn: 'সিরিজ সার্কিটে রেজিস্টর R₁, R₂, R₃... পর পর সংযুক্ত থাকে। কির্শফের কারেন্ট ল (KCL) অনুযায়ী, প্রতিটি বিন্দুতে কারেন্ট সমান: I_T = I₁ = I₂ = I₃। সার্কিটের মোট তুল্য রোধ R_eq হলো সব রেজিস্ট্যান্সের যোগফল: R_eq = R₁ + R₂ + R₃ + ...। কির্শফের ভোল্টেজ ল (KVL) অনুযায়ী, সরবরাহকৃত মোট ভোল্টেজ উপাদানগুলোর ভোল্টেজ ড্রপের যোগফলের সমান: V_T = V₁ + V₂ + V₃।'
    },
    formulas: [
      {
        symbol: 'R_eq',
        expression: 'R_eq = R₁ + R₂ + R₃ + ... + R_n',
        description: {
          en: 'Equivalent Resistance in Series (Ohms)',
          hi: 'श्रेणी में समतुल्य प्रतिरोध (ओम)',
          bn: 'সিরিজ সার্কিটের তুল্য রোধ (ওহম)'
        }
      },
      {
        symbol: 'I_T',
        expression: 'I_T = I₁ = I₂ = I₃ = V_T / R_eq',
        description: {
          en: 'Total Current is constant throughout series path.',
          hi: 'कुल धारा पूरे श्रेणी पथ में समान रहती है।',
          bn: 'সিরিজ পথের সর্বত্র মোট কারেন্ট ধ্রুবক থাকে।'
        }
      },
      {
        symbol: 'V_T',
        expression: 'V_T = V₁ + V₂ + V₃ = I_T(R₁ + R₂ + R₃)',
        description: {
          en: 'Total Voltage equals sum of individual voltage drops.',
          hi: 'कुल वोल्टेज सभी वोल्टेज ड्रॉप्स के योग के बराबर है।',
          bn: 'মোট ভোল্টেজ প্রতিটি ভোল্টেজ ড্রপের যোগফলের সমান।'
        }
      }
    ],
    diagrams: [
      {
        id: 'diag-series-circuit',
        title: {
          en: 'Series Circuit Schematic with Voltage Drops V₁, V₂, V₃',
          hi: 'श्रेणी परिपथ आरेख (वोल्टेज ड्रॉप V₁, V₂, V₃ के साथ)',
          bn: 'সিরিজ সার্কিট ডায়াগ্রাম (ভোল্টেজ ড্রপ V₁, V₂, V₃ সহ)'
        },
        caption: {
          en: 'Single current path I_T flowing sequentially through R₁, R₂, and R₃ across source V_T.',
          hi: 'स्रोत V_T के पार R₁, R₂ और R₃ से होकर बहने वाली एकल धारा I_T।',
          bn: 'উৎস V_T থেকে R₁, R₂ এবং R₃-এর মধ্য দিয়ে প্রবাহিত একক কারেন্ট পথ I_T।'
        },
        svgType: 'circuit-series'
      }
    ],
    solvedExamples: [
      {
        id: 'ex-series-1',
        problem: {
          en: 'Three resistors R₁ = 10 Ω, R₂ = 20 Ω, and R₃ = 30 Ω are connected in series across a 120 V DC source. Calculate: (a) Equivalent resistance R_eq, (b) Total circuit current I_T, and (c) Voltage drop V₂ across resistor R₂.',
          hi: 'तीन प्रतिरोधक R₁ = 10 Ω, R₂ = 20 Ω, और R₃ = 30 Ω 120 V डीसी स्रोत के साथ श्रेणी में जुड़े हैं। गणना करें: (a) समतुल्य प्रतिरोध R_eq, (b) कुल धारा I_T, और (c) R₂ पर वोल्टेज ड्रॉप V₂।',
          bn: 'তিনটি রেজিস্টর R₁ = ১০ Ω, R₂ = ২০ Ω, এবং R₃ = ৩০ Ω একটি ১২০ V ডিসি উৎসের সাথে সিরিজে যুক্ত। নির্ণয় করো: (a) তুল্য রোধ R_eq, (b) মোট কারেন্ট I_T, এবং (c) R₂-এর আড়াআড়ি ভোল্টেজ ড্রপ V₂।'
        },
        givenValues: {
          'R₁': '10 Ω',
          'R₂': '20 Ω',
          'R₃': '30 Ω',
          'Source Voltage (V_T)': '120 V'
        },
        solution: {
          en: 'Given:\n  R₁ = 10 Ω, R₂ = 20 Ω, R₃ = 30 Ω\n  V_T = 120 V\n\n(a) Equivalent Resistance R_eq:\n  R_eq = R₁ + R₂ + R₃\n  R_eq = 10 + 20 + 30 = 60 Ω\n\n(b) Total Current I_T:\n  I_T = V_T / R_eq = 120 V / 60 Ω = 2 A\n\n(c) Voltage drop across R₂:\n  V₂ = I_T × R₂ = 2 A × 20 Ω = 40 V\n\nCheck KVL:\n  V₁ = 2×10 = 20 V, V₃ = 2×30 = 60 V\n  V_T = 20 + 40 + 60 = 120 V (Verified).',
          hi: 'दिया गया है:\n  R₁ = 10 Ω, R₂ = 20 Ω, R₃ = 30 Ω\n  V_T = 120 V\n\n(a) समतुल्य प्रतिरोध R_eq:\n  R_eq = 10 + 20 + 30 = 60 Ω\n\n(b) कुल धारा I_T:\n  I_T = 120 V / 60 Ω = 2 A\n\n(c) R₂ पर वोल्टेज ड्रॉप:\n  V₂ = 2 A × 20 Ω = 40 V\n\nजांच KVL:\n  20 + 40 + 60 = 120 V (सत्यापित)।',
          bn: 'দেওয়া আছে:\n  R₁ = ১০ Ω, R₂ = ২০ Ω, R₃ = ৩০ Ω\n  V_T = ১২০ V\n\n(a) তুল্য রোধ R_eq:\n  R_eq = ১০ + ২০ + ৩০ = ৬০ Ω\n\n(b) মোট কারেন্ট I_T:\n  I_T = ১২০ V / ৬০ Ω = ২ A\n\n(c) R₂-এর ভোল্টেজ ড্রপ V₂:\n  V₂ = ২ A × ২০ Ω = ৪০ V\n\nযাচাই (KVL):\n  ২০ + ৪০ + ৬০ = ১২০ V (সত্যতা প্রমাণিত)।'
        },
        finalAnswer: {
          en: 'R_eq = 60 Ω, Total Current I_T = 2 A, V₂ = 40 V',
          hi: 'R_eq = 60 Ω, कुल धारा I_T = 2 A, V₂ = 40 V',
          bn: 'R_eq = ৬০ Ω, মোট কারেন্ট I_T = ২ A, V₂ = ৪০ V'
        }
      }
    ],
    practicalApplications: {
      en: [
        'String lighting (festive fairy lights) where bulbs share total line voltage.',
        'Current limiting resistors connected in series with sensitive LED indicators.',
        'Series battery connections in UPS and electric vehicles to step up system voltage.'
      ],
      hi: [
        'सजावटी लाइटिंग (फेयरी लाइट्स) जहां बल्ब कुल वोल्टेज साझा करते हैं।',
        'संवेदनशील एलईडी इंडिकेटर के साथ श्रेणी में लगे धारा सीमित करने वाले प्रतिरोधक।',
        'वोल्टेज बढ़ाने के लिए यूपीएस और ईवी में बैटरी श्रेणी संयोजन।'
      ],
      bn: [
        'উৎসবের মরিচ বাতি বা ডেকোরেশন লাইট যেখানে বাতিগুলো মোট ভোল্টেজ ভাগ করে নেয়।',
        'সংবেদনশীল এলইডি ইন্ডিকেটরের সাথে সিরিজে সংযুক্ত কারেন্ট লিমিটিং রেজিস্টর।',
        'ইউপিএস এবং ইভিতে ভোল্টেজ বাড়াতে সিরিজে ব্যাটারি সংযোগ।'
      ]
    },
    importantPoints: {
      en: [
        'The equivalent resistance R_eq of a series circuit is ALWAYS greater than the largest individual resistance.',
        'If n identical resistors of value R are connected in series, R_eq = n × R.',
        'An open circuit at any point in a series network reduces circuit current to zero.'
      ],
      hi: [
        'श्रेणी परिपथ का समतुल्य प्रतिरोध R_eq हमेशा सबसे बड़े व्यक्तिगत प्रतिरोध से बड़ा होता है।',
        'यदि मान R के n समान प्रतिरोधक श्रेणी में जुड़े हों, तो R_eq = n × R।',
        'श्रेणी परिपथ के किसी भी बिंदु पर ब्रेक होने से कुल धारा शून्य हो जाती है।'
      ],
      bn: [
        'সিরিজ সার্কিটের তুল্য রোধ R_eq সর্বদা সার্কিটের বৃহত্তম রেজিস্ট্যান্সের চেয়ে বড় হয়।',
        'R মানের n সংখ্যক একই রেজিস্টর সিরিজে থাকলে R_eq = n × R।',
        'সিরিজ সার্কিটের যেকোনো পয়েন্টে বিচ্ছিন্নতা ঘটলে পুরো সার্কিটের কারেন্ট ০ হয়ে যায়।'
      ]
    },
    commonMistakes: {
      en: [
        'Assuming voltage is equal across unequal series resistors.',
        'Calculating total resistance using parallel reciprocal formula instead of addition.'
      ],
      hi: [
        'असमान श्रेणी प्रतिरोधकों पर वोल्टेज को समान मान लेना।',
        'जोड़ने के बजाय समानांतर व्युत्क्रम सूत्र से कुल प्रतिरोध की गणना करना।'
      ],
      bn: [
        'অসমান রেজিস্টরে সিরিজে একই ভোল্টেজ ড্রপ হবে ভেবে ভুল করা।',
        'যোগ করার বদলে প্যারালালের সূত্র দিয়ে মোট রেজিস্ট্যান্স হিসাব করা।'
      ]
    },
    mcqs: [
      {
        id: 'mcq-series-1',
        question: {
          en: 'Four resistors of 5 Ω each are connected in series. What is the total equivalent resistance?',
          hi: '5 Ω के चार प्रतिरोधक श्रेणी में जुड़े हैं। कुल समतुल्य प्रतिरोध कितना होगा?',
          bn: '৫ Ω-এর চারটি রেজিস্টর সিরিজে যুক্ত করা হলে তুল্য রোধ কত হবে?'
        },
        options: [
          { id: 'a', text: { en: '1.25 Ω', hi: '1.25 Ω', bn: '১.২৫ Ω' } },
          { id: 'b', text: { en: '5 Ω', hi: '5 Ω', bn: '৫ Ω' } },
          { id: 'c', text: { en: '20 Ω', hi: '20 Ω', bn: '২০ Ω' } },
          { id: 'd', text: { en: '25 Ω', hi: '25 Ω', bn: '২৫ Ω' } }
        ],
        correctOptionId: 'c',
        explanation: {
          en: 'R_eq = R₁ + R₂ + R₃ + R₄ = 5 + 5 + 5 + 5 = 20 Ω.',
          hi: 'R_eq = 5 + 5 + 5 + 5 = 20 Ω।',
          bn: 'R_eq = ৫ + ৫ + ৫ + ৫ = ২০ Ω।'
        }
      },
      {
        id: 'mcq-series-2',
        question: {
          en: 'In a series circuit, if one bulb fuses and creates an open circuit, what happens to the remaining bulbs?',
          hi: 'श्रेणी परिपथ में, यदि एक बल्ब फ्यूज होकर ओपन सर्किट बना दे, तो शेष बल्बों का क्या होगा?',
          bn: 'সিরিজ সার্কিটে একটি বাতি ফিউজ হয়ে ওপেন সার্কিট হলে বাকি বাতিগুলোর কী হবে?'
        },
        options: [
          { id: 'a', text: { en: 'They glow brighter', hi: 'वे अधिक तेज चमकेंगे', bn: 'তারা আরও উজ্জ্বল হয়ে জ্বলবে' } },
          { id: 'b', text: { en: 'They all turn OFF', hi: 'वे सभी बंद हो जाएंगे', bn: 'সবগুলো বাতি বন্ধ হয়ে যাবে' } },
          { id: 'c', text: { en: 'They remain unchanged', hi: 'वे अपरिवर्तित रहेंगे', bn: 'একইভাবে জ্বলতে থাকবে' } },
          { id: 'd', text: { en: 'Only half of them glow', hi: 'केवल आधे चमकेंगे', bn: 'শুধু অর্ধেক বাতি জ্বলবে' } }
        ],
        correctOptionId: 'b',
        explanation: {
          en: 'Since there is only one current path in series, a break in one component stops current flow through the entire circuit.',
          hi: 'चूंकि श्रेणी में केवल एक धारा पथ होता है, एक घटक में ब्रेक से पूरे परिपथ की धारा रुक जाती है।',
          bn: 'যেহেতু সিরিজে কারেন্ট প্রবাহের একটিই পথ, একটি উপাদান বিচ্ছিন্ন হলে পুরো সার্কিটের কারেন্ট বন্ধ হয়।'
        }
      },
      {
        id: 'mcq-series-3',
        question: {
          en: 'Two resistors of 30 Ω and 60 Ω are connected in series across a 90 V battery. What is the voltage drop across the 60 Ω resistor?',
          hi: '30 Ω और 60 Ω के दो प्रतिरोधक 90 V बैटरी से श्रेणी में जुड़े हैं। 60 Ω के प्रतिरोधक पर वोल्टेज ड्रॉप कितना होगा?',
          bn: '৩০ Ω এবং ৬০ Ω-এর দুটি রেজিস্টর ৯০ V ব্যাটারির সাথে সিরিজে যুক্ত। ৬০ Ω রেজিস্টরের আড়াআড়ি ভোল্টেজ ড্রপ কত?'
        },
        options: [
          { id: 'a', text: { en: '30 V', hi: '30 V', bn: '৩০ V' } },
          { id: 'b', text: { en: '60 V', hi: '60 V', bn: '৬০ V' } },
          { id: 'c', text: { en: '90 V', hi: '90 V', bn: '৯০ V' } },
          { id: 'd', text: { en: '45 V', hi: '45 V', bn: '৪৫ V' } }
        ],
        correctOptionId: 'b',
        explanation: {
          en: 'R_eq = 30 + 60 = 90 Ω. Current I = 90 / 90 = 1 A. V_60 = I × 60 = 1 A × 60 Ω = 60 V.',
          hi: 'R_eq = 90 Ω। धारा I = 1 A। V_60 = 1 A × 60 Ω = 60 V।',
          bn: 'R_eq = ৯০ Ω। কারেন্ট I = ১ A। V_60 = ১ A × ৬০ Ω = ৬০ V।'
        }
      }
    ],
    practiceQuestions: [
      {
        id: 'pq-series-1',
        question: {
          en: 'A festive string lights decoration contains 50 identical miniature bulbs connected in series across a 230 V mains supply. Calculate: (a) Voltage across each bulb, and (b) Resistance of each bulb if total string current is 0.1 A.',
          hi: 'एक सजावटी लाइटिंग लड़ी में 230 V की मुख्य आपूर्ति पर श्रेणी में 50 समान छोटे बल्ब जुड़े हैं। गणना करें: (a) प्रत्येक बल्ब पर वोल्टेज, और (b) प्रत्येक बल्ब का प्रतिरोध यदि कुल धारा 0.1 A है।',
          bn: 'একটি ডেকোরেশন মরিচ বাতির লড়িতে ২৩০ V লাইনের সাথে সিরিজে ৫০টি একই ধরনের বাতি সংযুক্ত। নির্ণয় করো: (a) প্রতিটি বাতির আড়াআড়ি ভোল্টেজ, এবং (b) লড়ির কারেন্ট ০.১ A হলে প্রতিটি বাতির রেজিস্ট্যান্স।'
        },
        hint: {
          en: 'Equal voltage drop V_bulb = V_total / n. Then apply R_bulb = V_bulb / I.',
          hi: 'समान वोल्टेज ड्रॉप V_bulb = V_total / n। फिर R_bulb = V_bulb / I लागू करें।',
          bn: 'সমান ভোল্টেজ ড্রপ V_bulb = V_total / n। তারপর R_bulb = V_bulb / I প্রয়োগ করো।'
        },
        answerKey: {
          en: '(a) V_bulb = 230 V / 50 = 4.6 V per bulb. (b) R_bulb = 4.6 V / 0.1 A = 46 Ω.',
          hi: '(a) V_bulb = 230 V / 50 = 4.6 V प्रति बल्ब। (b) R_bulb = 4.6 V / 0.1 A = 46 Ω।',
          bn: '(a) V_bulb = ২৩০ V / ৫০ = ৪.৬ V। (b) R_bulb = ৪.৬ V / ০.১ A = ৪৬ Ω।'
        }
      },
      {
        id: 'pq-series-2',
        question: {
          en: 'Three resistors R₁, R₂, and R₃ are in series. The voltage drops across them are 12 V, 18 V, and 30 V respectively when drawing 2 A. Find individual resistances and total source voltage.',
          hi: 'तीन प्रतिरोधक R₁, R₂, और R₃ श्रेणी में हैं। 2 A धारा लेते समय उन पर वोल्टेज ड्रॉप क्रमशः 12 V, 18 V, और 30 V है। व्यक्तिगत प्रतिरोध और कुल स्रोत वोल्टेज ज्ञात करें।',
          bn: 'তিনটি রেজিস্টর R₁, R₂, এবং R₃ সিরিজে যুক্ত। ২ A কারেন্ট প্রবাহের সময় তাদের ভোল্টেজ ড্রপ যথাক্রমে ১২ V, ১৮ V, এবং ৩০ V। প্রতিটি রেজিস্ট্যান্স এবং মোট ভোল্টেজ নির্ণয় করো।'
        },
        hint: {
          en: 'V_source = sum of drops. Individual R = V / I for each component.',
          hi: 'V_source = ड्रॉप्स का योग। प्रत्येक घटक के लिए R = V / I।',
          bn: 'V_source = ভোল্টেজ ড্রপের যোগফল। প্রতিটি রেজিস্টরের জন্য R = V / I।'
        },
        answerKey: {
          en: 'V_source = 12 + 18 + 30 = 60 V. R₁ = 12/2 = 6 Ω, R₂ = 18/2 = 9 Ω, R₃ = 30/2 = 15 Ω.',
          hi: 'V_source = 60 V। R₁ = 6 Ω, R₂ = 9 Ω, R₃ = 15 Ω।',
          bn: 'V_source = ৬০ V। R₁ = ৬ Ω, R₂ = ৯ Ω, R₃ = ১৫ Ω।'
        }
      }
    ]
  },

  'tp-parallel-circuit': {
    id: 'lsn-parallel-circuit',
    topicId: 'tp-parallel-circuit',
    order: 4,
    title: {
      en: 'Parallel Circuit',
      hi: 'समानांतर परिपथ (पैरेलल सर्किट)',
      bn: 'প্যারালাল সার্কিট'
    },
    easyExplanation: {
      en: 'A parallel circuit provides multiple independent pathways for electric current. The voltage across every parallel branch is identical to the supply voltage. Switching OFF or removing one branch does not affect the operation of other branches.',
      hi: 'समानांतर परिपथ (Parallel Circuit) विद्युत धारा के लिए कई स्वतंत्र मार्ग प्रदान करता है। प्रत्येक समानांतर शाखा पर वोल्टेज आपूर्ति वोल्टेज के समान होता है। एक शाखा को बंद करने से अन्य शाखाएं प्रभावित नहीं होती हैं।',
      bn: 'প্যারালাল সার্কিট কারেন্ট প্রবাহের জন্য একাধিক স্বাধীন পথ তৈরি করে। প্রতিটি প্যারালাল শাখার আড়াআড়ি ভোল্টেজ মূল সাপ্লাই ভোল্টেজের সমান। একটি শাখা বন্ধ করলেও বাকি শাখাগুলো স্বাভাবিকভাবে চলতে থাকে।'
    },
    detailedExplanation: {
      en: 'In a parallel circuit, resistors R₁, R₂, R₃... are connected between the same pair of nodes across supply voltage V_T. By definition, potential difference across every branch is equal: V_T = V₁ = V₂ = V₃. By Kirchhoff’s Current Law (KCL), total source current I_T equals the sum of branch currents: I_T = I₁ + I₂ + I₃ + ... + I_n. Equivalent resistance R_eq is calculated using reciprocals: 1/R_eq = 1/R₁ + 1/R₂ + 1/R₃ + ... + 1/R_n. For two parallel resistors, R_eq = (R₁ × R₂) / (R₁ + R₂). Adding more parallel branches lowers total equivalent resistance and increases total line current.',
      hi: 'समानांतर परिपथ में प्रतिरोधक R₁, R₂, R₃... एक ही नोड जोड़ी के बीच जुड़े होते हैं। परिभाषा के अनुसार, प्रत्येक शाखा का विभवांतर समान होता है: V_T = V₁ = V₂ = V₃। किरचॉफ के धारा नियम (KCL) के अनुसार, कुल धारा शाखा धाराओं का योग होती है: I_T = I₁ + I₂ + I₃। समतुल्य प्रतिरोध 1/R_eq = 1/R₁ + 1/R₂ + 1/R₃ होता है। दो प्रतिरोधकों के लिए R_eq = (R₁ × R₂) / (R₁ + R₂)। अधिक शाखाएँ जोड़ने से कुल प्रतिरोध घटता है और कुल धारा बढ़ती है।',
      bn: 'প্যারালাল সার্কিটে রেজিস্টর R₁, R₂, R₃... একই নোড জোড়ার মাঝে যুক্ত থাকে। ফলে প্রতিটি শাখার ভোল্টেজ সমান: V_T = V₁ = V₂ = V₃। কির্শফের কারেন্ট ল (KCL) অনুযায়ী, মোট সাপ্লাই কারেন্ট শাখা কারেন্টগুলোর যোগফলের সমান: I_T = I₁ + I₂ + I₃। তুল্য রোধের সূত্র: ১/R_eq = ১/R₁ + ১/R₂ + ১/R₃...। দুটি রেজিস্টরের জন্য R_eq = (R₁ × R₂) / (R₁ + R₂)। নতুন শাখা যুক্ত করলে মোট রেজিস্ট্যান্স কমে এবং লাইন কারেন্ট বাড়ে।'
    },
    formulas: [
      {
        symbol: '1/R_eq',
        expression: '1/R_eq = 1/R₁ + 1/R₂ + 1/R₃ + ...',
        description: {
          en: 'Reciprocal Equivalent Resistance Formula in Parallel',
          hi: 'समानांतर में समतुल्य प्रतिरोध का व्युत्क्रम सूत्र',
          bn: 'প্যারালালে তুল্য রোধের বিপরীত সূত্র'
        }
      },
      {
        symbol: 'R_eq (2 branches)',
        expression: 'R_eq = (R₁ × R₂) / (R₁ + R₂)',
        description: {
          en: 'Product-over-Sum formula for two parallel resistors',
          hi: 'दो समानांतर प्रतिरोधकों के लिए गुणनफल-बटा-योग सूत्र',
          bn: 'দুটি প্যারালাল রেজিস্টরের জন্য গুণফল-ভাগ-যোগফল সূত্র'
        }
      },
      {
        symbol: 'I_T',
        expression: 'I_T = I₁ + I₂ + I₃ = V_T / R_eq',
        description: {
          en: 'Total Current equals sum of individual branch currents.',
          hi: 'कुल धारा व्यक्तिगत शाखा धाराओं के योग के बराबर है।',
          bn: 'মোট কারেন্ট শাখা কারেন্টগুলোর যোগফলের সমান।'
        }
      }
    ],
    diagrams: [
      {
        id: 'diag-parallel-circuit',
        title: {
          en: 'Parallel Circuit Schematic with Branch Currents I₁, I₂, I₃',
          hi: 'समानांतर परिपथ आरेख (शाखा धाराओं I₁, I₂, I₃ के साथ)',
          bn: 'প্যারালাল সার্কিট ডায়াগ্রাম (শাখা কারেন্ট I₁, I₂, I₃ সহ)'
        },
        caption: {
          en: 'Main line current I_T splits into independent branches R₁, R₂, R₃ across constant voltage V_T.',
          hi: 'मुख्य लाइन धारा I_T स्थिर वोल्टेज V_T पर स्वतंत्र शाखाओं R₁, R₂, R₃ में विभाजित होती है।',
          bn: 'মূল লাইন কারেন্ট I_T স্থির ভোল্টেজ V_T-এর আড়াআড়ি স্বাধীন শাখা R₁, R₂, R₃-এ বিভক্ত হয়।'
        },
        svgType: 'circuit-parallel'
      }
    ],
    solvedExamples: [
      {
        id: 'ex-parallel-1',
        problem: {
          en: 'Two resistors R₁ = 20 Ω and R₂ = 30 Ω are connected in parallel across a 60 V DC voltage source. Calculate: (a) Equivalent resistance R_eq, (b) Branch currents I₁ and I₂, and (c) Total supply current I_T.',
          hi: 'दो प्रतिरोधक R₁ = 20 Ω और R₂ = 30 Ω 60 V डीसी स्रोत के समानांतर जुड़े हैं। गणना करें: (a) समतुल्य प्रतिरोध R_eq, (b) शाखा धाराएं I₁ और I₂, तथा (c) कुल आपूर्ति धारा I_T।',
          bn: 'দুটি রেজিস্টর R₁ = ২০ Ω এবং R₂ = ৩০ Ω একটি ৬০ V ডিসি উৎসের সাথে প্যারালালে যুক্ত। নির্ণয় করো: (a) তুল্য রোধ R_eq, (b) শাখা কারেন্ট I₁ ও I₂, এবং (c) মোট সাপ্লাই কারেন্ট I_T।'
        },
        givenValues: {
          'R₁': '20 Ω',
          'R₂': '30 Ω',
          'Voltage (V_T)': '60 V'
        },
        solution: {
          en: 'Given:\n  R₁ = 20 Ω, R₂ = 30 Ω, V_T = 60 V\n\n(a) Equivalent Resistance R_eq:\n  R_eq = (R₁ × R₂) / (R₁ + R₂)\n  R_eq = (20 × 30) / (20 + 30) = 600 / 50 = 12 Ω\n\n(b) Branch Currents:\n  I₁ = V_T / R₁ = 60 V / 20 Ω = 3 A\n  I₂ = V_T / R₂ = 60 V / 30 Ω = 2 A\n\n(c) Total Current I_T:\n  I_T = I₁ + I₂ = 3 A + 2 A = 5 A\n  Check using Ohm\'s Law: I_T = 60 V / 12 Ω = 5 A (Verified).',
          hi: 'दिया गया है:\n  R₁ = 20 Ω, R₂ = 30 Ω, V_T = 60 V\n\n(a) समतुल्य प्रतिरोध R_eq:\n  R_eq = (20 × 30) / (20 + 30) = 600 / 50 = 12 Ω\n\n(b) शाखा धाराएं:\n  I₁ = 60 / 20 = 3 A\n  I₂ = 60 / 30 = 2 A\n\n(c) कुल धारा I_T:\n  I_T = 3 + 2 = 5 A। (सत्यापित: 60 / 12 = 5 A)।',
          bn: 'দেওয়া আছে:\n  R₁ = ২০ Ω, R₂ = ৩০ Ω, V_T = ৬০ V\n\n(a) তুল্য রোধ R_eq:\n  R_eq = (২০ × ৩০) / (২০ + ৩০) = ৬০০ / ৫০ = ১২ Ω\n\n(b) শাখা কারেন্টসমূহ:\n  I₁ = ৬০ / ২০ = ৩ A\n  I₂ = ৬০ / ৩০ = ২ A\n\n(c) মোট কারেন্ট I_T:\n  I_T = ৩ + ২ = ৫ A (যাচাই: ৬০ / ১২ = ৫ A)।'
        },
        finalAnswer: {
          en: 'R_eq = 12 Ω, Branch Currents: I₁ = 3 A, I₂ = 2 A, Total Current I_T = 5 A',
          hi: 'R_eq = 12 Ω, शाखा धाराएं: I₁ = 3 A, I₂ = 2 A, कुल धारा I_T = 5 A',
          bn: 'R_eq = ১২ Ω, শাখা কারেন্ট: I₁ = ৩ A, I₂ = ২ A, মোট কারেন্ট I_T = ৫ A'
        }
      }
    ],
    practicalApplications: {
      en: [
        'Residential house wiring where all wall sockets and light fixtures are connected in parallel at 230 V.',
        'Automotive 12 V electrical systems powering headlights, radio, and starter motor independently.',
        'Industrial motor control panels where control sub-circuits operate across parallel buses.'
      ],
      hi: [
        'आवासीय घर की वायरिंग जहां सभी सॉकेट और लाइटें 230 V पर समानांतर में जुड़ी होती हैं।',
        'ऑटोमोटिव 12 V इलेक्ट्रिकल सिस्टम जो हेडलाइट्स और रेडियो को स्वतंत्र रूप से बिजली देता है।',
        'औद्योगिक मोटर नियंत्रण पैनल जहां सब-सर्किट समानांतर बसों से जुड़े होते हैं।'
      ],
      bn: [
        'বাসাবাড়ির ইলেকট্রিক ওয়্যারিং যেখানে সব সকেট ও লাইটিং ফিক্সচার ২৩০ V-এ প্যারালালে যুক্ত।',
        'গাড়ির ১২ V ইলেকট্রিক্যাল সিস্টেম যা হেডলাইট ও অন্যান্য যন্ত্রকে স্বাধীনভাবে পাওয়ার দেয়।',
        'ইন্ডাস্ট্রিয়াল মোটর কন্ট্রোল প্যানেল যেখানে সাব-সার্কিটগুলো প্যারালাল বাসবার থেকে কানেক্টেড।'
      ]
    },
    importantPoints: {
      en: [
        'The equivalent resistance R_eq of a parallel circuit is ALWAYS SMALLER than the smallest individual branch resistance.',
        'If n identical resistors of value R are connected in parallel, R_eq = R / n.',
        'All parallel components operate at full rated voltage independently.'
      ],
      hi: [
        'समानांतर परिपथ का समतुल्य प्रतिरोध R_eq हमेशा सबसे छोटी शाखा के प्रतिरोध से छोटा होता है।',
        'यदि मान R के n समान प्रतिरोधक समानांतर में जुड़े हों, तो R_eq = R / n।',
        'सभी समानांतर घटक स्वतंत्र रूप से पूर्ण रेटेड वोल्टेज पर काम करते हैं।'
      ],
      bn: [
        'প্যারালাল সার্কিটের তুল্য রোধ R_eq সর্বদা ক্ষুদ্রতম শাখা রেজিস্ট্যান্সের চেয়েও কম হয়।',
        'R মানের n সংখ্যক সমান রেজিস্টর প্যারালালে থাকলে R_eq = R / n।',
        'সবগুলো প্যারালাল উপাদান স্বাধীনভাবে পূর্ণ রেটেড ভোল্টেজে কাজ করে।'
      ]
    },
    commonMistakes: {
      en: [
        'Adding branch resistances directly (R₁ + R₂) instead of taking reciprocals.',
        'Forgetting to invert the final sum when using the reciprocal formula 1/R_eq.'
      ],
      hi: [
        'व्युत्क्रम लेने के बजाय सीधे शाखा प्रतिरोधों (R₁ + R₂) को जोड़ना।',
        '1/R_eq सूत्र का उपयोग करते समय अंतिम योग को उलटना भूल जाना।'
      ],
      bn: [
        'রেসিপ্রোকাল না নিয়ে সরাসরি রেজিস্ট্যান্স (R₁ + R₂) যোগ করা।',
        '১/R_eq সূত্র ব্যবহারের পর শেষ যোগফলকে উল্টাতে ভুলে যাওয়া।'
      ]
    },
    mcqs: [
      {
        id: 'mcq-parallel-1',
        question: {
          en: 'Two resistors of 10 Ω and 10 Ω are connected in parallel. What is their combined equivalent resistance?',
          hi: '10 Ω और 10 Ω के दो प्रतिरोधक समानांतर में जुड़े हैं। उनका संयुक्त समतुल्य प्रतिरोध क्या होगा?',
          bn: '১০ Ω এবং ১০ Ω-এর দুটি রেজিস্টর প্যারালালে সংযুক্ত। তাদের সম্মিলিত তুল্য রোধ কত?'
        },
        options: [
          { id: 'a', text: { en: '20 Ω', hi: '20 Ω', bn: '২০ Ω' } },
          { id: 'b', text: { en: '5 Ω', hi: '5 Ω', bn: '৫ Ω' } },
          { id: 'c', text: { en: '100 Ω', hi: '100 Ω', bn: '১০০ Ω' } },
          { id: 'd', text: { en: '1 Ω', hi: '1 Ω', bn: '১ Ω' } }
        ],
        correctOptionId: 'b',
        explanation: {
          en: 'For equal parallel resistors R_eq = R / n = 10 / 2 = 5 Ω.',
          hi: 'समान समानांतर प्रतिरोधकों के लिए R_eq = R / n = 10 / 2 = 5 Ω।',
          bn: 'সমান প্যারালাল রেজিস্টরের জন্য R_eq = R / n = ১০ / ২ = ৫ Ω।'
        }
      },
      {
        id: 'mcq-parallel-2',
        question: {
          en: 'Why are domestic electrical appliances connected in parallel rather than in series?',
          hi: 'घरेलू विद्युत उपकरणों को श्रेणी के बजाय समानांतर में क्यों जोड़ा जाता है?',
          bn: 'বাসাবাড়ির বৈদ্যুতিক সরঞ্জাম সিরিজে যুক্ত না করে প্যারালালে সংযুক্ত করা হয় কেন?'
        },
        options: [
          { id: 'a', text: { en: 'To reduce total current drawn from mains', hi: 'मुख्य आपूर्ति से ली जाने वाली कुल धारा को घटाने के लिए', bn: 'মেইন লাইন থেকে মোট কারেন্ট প্রবাহ কমানোর জন্য' } },
          { id: 'b', text: { en: 'To ensure every appliance gets full supply voltage independently', hi: 'यह सुनिश्चित करने के लिए कि प्रत्येक उपकरण को स्वतंत्र रूप से पूर्ण वोल्टेज मिले', bn: 'প্রতিটি সরঞ্জাম যেন স্বাধীনভাবে পূর্ণ ভোল্টেজ পায় তা নিশ্চিত করতে' } },
          { id: 'c', text: { en: 'To increase the overall circuit resistance', hi: 'कुल परिपथ प्रतिरोध को बढ़ाने के लिए', bn: 'সার্কিটের মোট রেজিস্ট্যান্স বৃদ্ধি করার জন্য' } },
          { id: 'd', text: { en: 'To save cable wire cost', hi: 'केबल तार की लागत बचाने के लिए', bn: 'ক্যাবল তারের খরচ কমানোর জন্য' } }
        ],
        correctOptionId: 'b',
        explanation: {
          en: 'Parallel connection ensures each appliance operates at full supply voltage (230 V) independently without interference from other switched appliances.',
          hi: 'समानांतर कनेक्शन सुनिश्चित करता है कि प्रत्येक उपकरण बिना किसी हस्तक्षेप के पूर्ण 230 V पर स्वतंत्र रूप से काम करे।',
          bn: 'প্যারালাল সংযোগ নিশ্চিত করে যে প্রতিটি ডিভাইস অন্যগুলোর ওপর নির্ভর না করে স্বাধীনভাবে ২৩০ V ভোল্টেজে চলে।'
        }
      },
      {
        id: 'mcq-parallel-3',
        question: {
          en: 'Three parallel branches have resistances of 6 Ω, 12 Ω, and 4 Ω. What is the equivalent resistance?',
          hi: 'तीन समानांतर शाखाओं का प्रतिरोध 6 Ω, 12 Ω, और 4 Ω है। समतुल्य प्रतिरोध क्या है?',
          bn: 'তিনটি প্যারালাল শাখার রেজিস্ট্যান্স ৬ Ω, ১২ Ω এবং ৪ Ω। তুল্য রোধ কত?'
        },
        options: [
          { id: 'a', text: { en: '22 Ω', hi: '22 Ω', bn: '২২ Ω' } },
          { id: 'b', text: { en: '2 Ω', hi: '2 Ω', bn: '২ Ω' } },
          { id: 'c', text: { en: '4 Ω', hi: '4 Ω', bn: '৪ Ω' } },
          { id: 'd', text: { en: '0.5 Ω', hi: '0.5 Ω', bn: '০.৫ Ω' } }
        ],
        correctOptionId: 'b',
        explanation: {
          en: '1/R_eq = 1/6 + 1/12 + 1/4 = (2 + 1 + 3) / 12 = 6/12 = 1/2. Therefore R_eq = 2 Ω.',
          hi: '1/R_eq = 1/6 + 1/12 + 1/4 = 6/12 = 1/2। इसलिए R_eq = 2 Ω।',
          bn: '১/R_eq = ১/৬ + ১/১২ + ১/৪ = ৬/১২ = ১/২। অতএব R_eq = ২ Ω।'
        }
      }
    ],
    practiceQuestions: [
      {
        id: 'pq-parallel-1',
        question: {
          en: 'A household lighting circuit has three lamps connected in parallel across 230 V supply. The lamps draw 0.2 A, 0.3 A, and 0.5 A respectively. Calculate total circuit current and equivalent circuit resistance.',
          hi: 'एक घरेलू लाइटिंग परिपथ में 230 V आपूर्ति पर तीन लैंप समानांतर में जुड़े हैं। लैंप क्रमशः 0.2 A, 0.3 A, और 0.5 A धारा लेते हैं। कुल धारा और समतुल्य प्रतिरोध की गणना करें।',
          bn: 'একটি বাসাবাড়ির লাইটিং সার্কিটে ২৩০ V সাপ্লাইয়ের সাথে তিনটি ল্যাম্প প্যারালালে যুক্ত। ল্যাম্পগুলো যথাক্রমে ০.২ A, ০.৩ A এবং ০.৫ A কারেন্ট নেয়। মোট কারেন্ট ও তুল্য রোধ বের করো।'
        },
        hint: {
          en: 'I_total = sum of branch currents. R_eq = V / I_total.',
          hi: 'I_total = शाखा धाराओं का योग। R_eq = V / I_total।',
          bn: 'I_total = শাখা কারেন্টের যোগফল। R_eq = V / I_total।'
        },
        answerKey: {
          en: 'I_total = 0.2 + 0.3 + 0.5 = 1.0 A. R_eq = 230 V / 1.0 A = 230 Ω.',
          hi: 'I_total = 1.0 A। R_eq = 230 V / 1.0 A = 230 Ω।',
          bn: 'I_total = ১.০ A। R_eq = ২৩০ V / ১.০ A = ২৩০ Ω।'
        }
      },
      {
        id: 'pq-parallel-2',
        question: {
          en: 'Two resistors R₁ = 40 Ω and R₂ = 60 Ω are connected in parallel. If total entering current is 5 A, calculate the current through each resistor.',
          hi: 'दो प्रतिरोधक R₁ = 40 Ω और R₂ = 60 Ω समानांतर में जुड़े हैं। यदि प्रवेश करने वाली कुल धारा 5 A है, तो प्रत्येक प्रतिरोधक से बहने वाली धारा की गणना करें।',
          bn: 'দুটি রেজিস্টর R₁ = ৪০ Ω এবং R₂ = ৬০ Ω প্যারালালে যুক্ত। মূল লাইনের মোট কারেন্ট ৫ A হলে প্রতিটি রেজিস্টরের কারেন্ট নির্ণয় করো।'
        },
        hint: {
          en: 'First calculate parallel voltage V = I_total × R_eq where R_eq = (40×60)/(40+60) = 24 Ω.',
          hi: 'पहले समानांतर वोल्टेज V = I_total × R_eq निकालें जहाँ R_eq = 24 Ω।',
          bn: 'প্রথমে প্যারালাল ভোল্টেজ V = I_total × R_eq বের করো যেখানে R_eq = ২৪ Ω।'
        },
        answerKey: {
          en: 'R_eq = (40×60)/100 = 24 Ω. Voltage V = 5 A × 24 Ω = 120 V. I₁ = 120/40 = 3 A, I₂ = 120/60 = 2 A.',
          hi: 'R_eq = 24 Ω। V = 120 V। I₁ = 3 A, I₂ = 2 A।',
          bn: 'R_eq = ২৪ Ω। V = ১২০ V। I₁ = ৩ A, I₂ = ২ A।'
        }
      }
    ]
  },

  'tp-series-parallel-circuit': {
    id: 'lsn-series-parallel-circuit',
    topicId: 'tp-series-parallel-circuit',
    order: 5,
    title: {
      en: 'Series-Parallel Circuit',
      hi: 'श्रेणी-समानांतर परिपथ',
      bn: 'সিরিজ-প্যারালাল সার্কিট'
    },
    easyExplanation: {
      en: 'A series-parallel circuit combines both series and parallel connections in the same network. To solve these circuits, simplify parallel groups into single equivalent resistors step-by-step until the whole circuit becomes a simple equivalent series loop.',
      hi: 'श्रेणी-समानांतर परिपथ (Series-Parallel Circuit) एक ही नेटवर्क में श्रेणी और समानांतर दोनों कनेक्शनों को जोड़ता है। इन्हें हल करने के लिए, समानांतर समूहों को चरण-दर-चरण एकल समतुल्य प्रतिरोधक में सरल बनाया जाता है।',
      bn: 'সিরিজ-প্যারালাল সার্কিট হলো একই সাথে সিরিজ ও প্যারালাল উভয় সংযোগের মিশ্রণ। এই সার্কিট সমাধানের নিয়ম হলো প্যারালাল অংশগুলোকে ধাপে ধাপে একটি তুল্য রেজিস্টরে রূপান্তর করে পুরো সার্কিটকে সরল করা।'
    },
    detailedExplanation: {
      en: 'Series-parallel networks are complex passive circuits requiring systematic block reduction. First, identify clearly defined parallel branches (resistors sharing both terminals) and replace them with equivalent parallel resistance R_p = (R_a × R_b) / (R_a + R_b). Second, identify series strings (resistors carrying identical current) and add them algebraically R_s = R_1 + R_2. Third, calculate total equivalent resistance R_eq, then use Ohm’s Law to determine total source current I_total = V_source / R_eq. Finally, apply Kirchhoff’s laws (KVL/KCL) or division rules to find individual branch voltages and currents.',
      hi: 'श्रेणी-समानांतर नेटवर्क जटिल निष्क्रिय परिपथ हैं जिन्हें व्यवस्थित ब्लॉक रिडक्शन की आवश्यकता होती है। सबसे पहले, स्पष्ट समानांतर शाखाओं को पहचानें और R_p = (R_a × R_b) / (R_a + R_b) से बदलें। दूसरा, श्रेणी स्ट्रिंग्स को पहचानें और R_s = R_1 + R_2 से जोड़ें। तीसरा, कुल समतुल्य प्रतिरोध R_eq ज्ञात करें और कुल धारा I_total = V_source / R_eq निकालें। अंत में शाखा धाराओं और वोल्टेज ड्रॉप्स की गणना करें।',
      bn: 'সিরিজ-প্যারালাল নেটওয়ার্কগুলোকে ধাপে ধাপে সরল করতে হয়। প্রথম ধাপে, স্পষ্ট প্যারালাল শাখাগুলো চিহ্নিত করে R_p = (R_a × R_b) / (R_a + R_b) দিয়ে একটি তুল্য রেজিস্টর বের করতে হয়। দ্বিতীয় ধাপে, সিরিজ অংশগুলো যোগ করতে হয় (R_s = R_1 + R_2)। তৃতীয় ধাপে, মোট তুল্য রোধ R_eq এবং মেইন কারেন্ট I_total = V_source / R_eq বের করে শাখা ভোল্টেজ ও কারেন্ট হিসাব করা হয়।'
    },
    formulas: [
      {
        symbol: 'R_p',
        expression: 'R_p = (R₂ × R₃) / (R₂ + R₃)',
        description: {
          en: 'Equivalent resistance of parallel branch group',
          hi: 'समानांतर शाखा समूह का समतुल्य प्रतिरोध',
          bn: 'প্যারালাল শাখা গ্রুপের তুল্য রোধ'
        }
      },
      {
        symbol: 'R_eq',
        expression: 'R_eq = R₁ + R_p',
        description: {
          en: 'Total equivalent circuit resistance (Series R₁ + Parallel block R_p)',
          hi: 'कुल समतुल्य परिपथ प्रतिरोध (श्रेणी R₁ + समानांतर ब्लॉक R_p)',
          bn: 'মোট তুল্য সার্কিট রোধ (সিরিজ R₁ + প্যারালাল ব্লক R_p)'
        }
      },
      {
        symbol: 'I_total',
        expression: 'I_total = V_source / R_eq',
        description: {
          en: 'Total source current drawn by combination network',
          hi: 'संयोजन नेटवर्क द्वारा ली गई कुल स्रोत धारा',
          bn: 'মিক্সড নেটওয়ার্ক কর্তৃক গৃহীত মোট সাপ্লাই কারেন্ট'
        }
      }
    ],
    diagrams: [
      {
        id: 'diag-series-parallel',
        title: {
          en: 'Series-Parallel Combination Network (R₁ in series with R₂ || R₃)',
          hi: 'श्रेणी-समानांतर संयोजन नेटवर्क (R₁ के साथ R₂ || R₃ श्रेणी में)',
          bn: 'সিরিজ-প্যারালাল মিক্সড নেটওয়ার্ক ডায়াগ্রাম (R₁-এর সাথে R₂ || R₃ সিরিজে)'
        },
        caption: {
          en: 'Resistor R₁ carries total current I_total before splitting into parallel branches R₂ and R₃ across source V_T.',
          hi: 'प्रतिरोधक R₁ समानांतर शाखाओं R₂ और R₃ में विभाजित होने से पहले कुल धारा I_total ले जाता है।',
          bn: 'রেজিস্টর R₁ প্যারালাল শাখা R₂ এবং R₃-এ বিভক্ত হওয়ার আগে মোট কারেন্ট I_total গ্রহণ করে।'
        },
        svgType: 'circuit-series-parallel'
      }
    ],
    solvedExamples: [
      {
        id: 'ex-series-parallel-1',
        problem: {
          en: 'A circuit consists of a resistor R₁ = 10 Ω in series with a parallel group of R₂ = 20 Ω and R₃ = 20 Ω, connected across a 40 V DC supply. Calculate: (a) Equivalent resistance of parallel group R_p, (b) Total equivalent resistance R_eq, (c) Total supply current I_total, and (d) Voltage drop V₁ across R₁.',
          hi: 'एक परिपथ में 40 V डीसी आपूर्ति पर 10 Ω का प्रतिरोधक R₁ 20 Ω और 20 Ω के समानांतर समूह (R₂, R₃) के साथ श्रेणी में जुड़ा है। गणना करें: (a) समानांतर समूह का R_p, (b) कुल समतुल्य प्रतिरोध R_eq, (c) कुल आपूर्ति धारा I_total, तथा (d) R₁ पर वोल्टेज ड्रॉप V₁।',
          bn: 'একটি সার্কিটে ১০ Ω-এর একটি রেজিস্টর R₁-এর সাথে ২০ Ω ও ২০ Ω-এর দুটি প্যারালাল রেজিস্টর (R₂, R₃) সিরিজে যুক্ত। সাপ্লাই ভোল্টেজ ৪০ V। নির্ণয় করো: (a) প্যারালাল ব্লকের R_p, (b) মোট তুল্য রোধ R_eq, (c) মোট কারেন্ট I_total, এবং (d) R₁-এর আড়াআড়ি ভোল্টেজ ড্রপ V₁।'
        },
        givenValues: {
          'R₁': '10 Ω',
          'R₂': '20 Ω',
          'R₃': '20 Ω',
          'Voltage (V_source)': '40 V'
        },
        solution: {
          en: 'Given:\n  R₁ = 10 Ω, R₂ = 20 Ω, R₃ = 20 Ω, V_source = 40 V\n\n(a) Parallel Equivalent R_p:\n  R_p = (R₂ × R₃) / (R₂ + R₃)\n  R_p = (20 × 20) / (20 + 20) = 400 / 40 = 10 Ω\n\n(b) Total Equivalent Resistance R_eq:\n  R_eq = R₁ + R_p = 10 Ω + 10 Ω = 20 Ω\n\n(c) Total Supply Current I_total:\n  I_total = V_source / R_eq = 40 V / 20 Ω = 2 A\n\n(d) Voltage drop V₁ across R₁:\n  V₁ = I_total × R₁ = 2 A × 10 Ω = 20 V.',
          hi: 'दिया गया है:\n  R₁ = 10 Ω, R₂ = 20 Ω, R₃ = 20 Ω, V = 40 V\n\n(a) समानांतर समतुल्य R_p:\n  R_p = (20 × 20) / 40 = 10 Ω\n\n(b) कुल समतुल्य प्रतिरोध R_eq:\n  R_eq = 10 + 10 = 20 Ω\n\n(c) कुल आपूर्ति धारा I_total:\n  I_total = 40 V / 20 Ω = 2 A\n\n(d) R₁ पर वोल्टेज ड्रॉप V₁:\n  V₁ = 2 A × 10 Ω = 20 V।',
          bn: 'দেওয়া আছে:\n  R₁ = ১০ Ω, R₂ = ২০ Ω, R₃ = ২০ Ω, V = ৪০ V\n\n(a) প্যারালাল সমতুল্য R_p:\n  R_p = (২০ × ২০) / ৪০ = ১০ Ω\n\n(b) মোট তুল্য রোধ R_eq:\n  R_eq = ১০ + ১০ = ২০ Ω\n\n(c) মোট সাপ্লাই কারেন্ট I_total:\n  I_total = ৪০ V / ২০ Ω = ২ A\n\n(d) R₁-এর ভোল্টেজ ড্রপ V₁:\n  V₁ = ২ A × ১০ Ω = ২০ V।'
        },
        finalAnswer: {
          en: 'R_p = 10 Ω, R_eq = 20 Ω, Total Current I_total = 2 A, Voltage V₁ = 20 V',
          hi: 'R_p = 10 Ω, R_eq = 20 Ω, कुल धारा I_total = 2 A, वोल्टेज V₁ = 20 V',
          bn: 'R_p = ১০ Ω, R_eq = ২০ Ω, মোট কারেন্ট I_total = ২ A, ভোল্টেজ V₁ = ২০ V'
        }
      }
    ],
    practicalApplications: {
      en: [
        'Transistor amplifier biasing and feedback networks.',
        'Audio loudspeaker crossover networks splitting high and low frequencies.',
        'Complex industrial DC power distribution and sensor excitation loops.'
      ],
      hi: [
        'ट्रांजिस्टर एम्पलीफायर बायसिंग और फीडबैक नेटवर्क।',
        'ऑडियो लाउडस्पीकर क्रॉसओवर नेटवर्क जो उच्च और निम्न आवृत्तियों को अलग करते हैं।',
        'जटिल औद्योगिक डीसी बिजली वितरण और सेंसर लूप।'
      ],
      bn: [
        'ট্রানজিস্টর অ্যাম্প্লিফায়ার বায়াসিং ও ফিডব্যাক নেটওয়ার্ক।',
        'অডিও স্পিকার ক্রসওভার নেটওয়ার্ক যা হাই ও লো ফ্রিকোয়েন্সি আলাদা করে।',
        'শিল্পকারখানার ডিসি পাওয়ার ডিস্ট্রিবিউশন ও সেন্সর সার্কিট।'
      ]
    },
    importantPoints: {
      en: [
        'Always reduce the innermost parallel or series branch combinations first before solving outer loops.',
        'Redraw the simplified schematic diagram after each reduction step to avoid missing nodes.',
        'Total power dissipated equals the sum of power consumed in all individual resistors regardless of network arrangement.'
      ],
      hi: [
        'बाहरी लूप को हल करने से पहले हमेशा सबसे आंतरिक समानांतर या श्रेणी शाखा को सरल बनाएं।',
        'नोड्स से बचने के लिए प्रत्येक रिडक्शन के बाद सरलीकृत आरेख दोबारा बनाएं।',
        'नेटवर्क व्यवस्था की परवाह किए बिना कुल शक्ति सभी प्रतिरोधकों में खपत शक्ति के योग के बराबर होती है।'
      ],
      bn: [
        'বাইরের লুপ সমাধানের আগে সবসময় ভেতরের প্যারালাল বা সিরিজ ব্লককে আগে সরল করতে হয়।',
        'প্রতিটি স্টেপে সার্কিটের নতুন ছবি আঁকলে ভুল হওয়ার সম্ভাবনা দূর হয়।',
        'সার্কিটের মোট পাওয়ার ক্ষয় সবসময় প্রতিটি উপাদান দ্বারা ক্ষয়কৃত পাওয়ারের যোগফলের সমান।'
      ]
    },
    commonMistakes: {
      en: [
        'Attempting to combine a resistor in series with a group before replacing the parallel group with its single equivalent R_p.',
        'Assuming total line current passes through every parallel branch.'
      ],
      hi: [
        'समानांतर समूह को उसके एकल समतुल्य R_p से बदलने से पहले श्रेणी प्रतिरोधक को जोड़ने का प्रयास करना।',
        'यह मान लेना कि कुल लाइन धारा प्रत्येक समानांतर शाखा से होकर गुजरती है।'
      ],
      bn: [
        'প্যারালাল ব্লক সরল করার আগেই বাইরের সিরিজ রেজিস্টরের সাথে যোগ করে ফেলা।',
        'ভাবা যে মোট লাইন কারেন্ট প্রতিটি প্যারালাল শাখার ভেতর দিয়েই যাবে।'
      ]
    },
    mcqs: [
      {
        id: 'mcq-sp-1',
        question: {
          en: 'In a circuit where R₁ is in series with a parallel pair (R₂ || R₃), if R₂ = 30 Ω and R₃ = 60 Ω, what is the equivalent resistance of the parallel pair alone?',
          hi: 'एक परिपथ में जहां R₁ एक समानांतर जोड़ी (R₂ || R₃) के साथ श्रेणी में है, यदि R₂ = 30 Ω और R₃ = 60 Ω है, तो केवल समानांतर जोड़ी का समतुल्य प्रतिरोध क्या होगा?',
          bn: 'একটি সার্কিটে R₁-এর সাথে (R₂ || R₃) প্যারালাল জোড়া সিরিজে যুক্ত। R₂ = ৩০ Ω এবং R₃ = ৬০ Ω হলে কেবল প্যারালাল জোড়ার তুল্য রোধ কত?'
        },
        options: [
          { id: 'a', text: { en: '90 Ω', hi: '90 Ω', bn: '৯০ Ω' } },
          { id: 'b', text: { en: '20 Ω', hi: '20 Ω', bn: '২০ Ω' } },
          { id: 'c', text: { en: '45 Ω', hi: '45 Ω', bn: '৪৫ Ω' } },
          { id: 'd', text: { en: '15 Ω', hi: '15 Ω', bn: '১৫ Ω' } }
        ],
        correctOptionId: 'b',
        explanation: {
          en: 'R_p = (30 × 60) / (30 + 60) = 1800 / 90 = 20 Ω.',
          hi: 'R_p = (30 × 60) / 90 = 20 Ω।',
          bn: 'R_p = (৩০ × ৬০) / ৯০ = ২০ Ω।'
        }
      },
      {
        id: 'mcq-sp-2',
        question: {
          en: 'If a 10 Ω resistor is connected in series with the 20 Ω parallel pair calculated above across a 60 V battery, what is the total circuit current?',
          hi: 'यदि 60 V बैटरी पर ऊपर गणना की गई 20 Ω समानांतर जोड़ी के साथ श्रेणी में 10 Ω का प्रतिरोधक जोड़ा जाता है, तो कुल परिपथ धारा क्या होगी?',
          bn: 'যদি উপরোক্ত ২০ Ω প্যারালাল ব্লকের সাথে ১০ Ω রেজিস্টর সিরিজে যুক্ত করে ৬০ V ব্যাটারিতে দেয়া হয়, তবে মোট কারেন্ট কত?'
        },
        options: [
          { id: 'a', text: { en: '2 A', hi: '2 A', bn: '২ A' } },
          { id: 'b', text: { en: '3 A', hi: '3 A', bn: '৩ A' } },
          { id: 'c', text: { en: '6 A', hi: '6 A', bn: '৬ A' } },
          { id: 'd', text: { en: '1 A', hi: '1 A', bn: '১ A' } }
        ],
        correctOptionId: 'a',
        explanation: {
          en: 'R_eq = 10 + 20 = 30 Ω. Total current I = V / R_eq = 60 V / 30 Ω = 2 A.',
          hi: 'R_eq = 10 + 20 = 30 Ω। धारा I = 60 / 30 = 2 A।',
          bn: 'R_eq = ১০ + ২০ = ৩০ Ω। কারেন্ট I = ৬০ / ৩০ = ২ A।'
        }
      },
      {
        id: 'mcq-sp-3',
        question: {
          en: 'In solving a series-parallel circuit, what is the correct first step?',
          hi: 'श्रेणी-समानांतर परिपथ को हल करने में पहला सही कदम क्या है?',
          bn: 'সিরিজ-প্যারালাল সার্কিট সমাধানের প্রথম সঠিক ধাপ কোনটি?'
        },
        options: [
          { id: 'a', text: { en: 'Add all resistors directly in series', hi: 'सभी प्रतिरोधकों को सीधे श्रेणी में जोड़ें', bn: 'সব রেজিস্টর সরাসরি সিরিজে যোগ করা' } },
          { id: 'b', text: { en: 'Identify and simplify clearly defined parallel or series sub-groups', hi: 'स्पष्ट समानांतर या श्रेणी उप-समूहों की पहचान करें और उन्हें सरल बनाएं', bn: 'সুনির্দিষ্ট প্যারালাল বা সিরিজ সাব-গ্রুপ চিহ্নিত করে তাদের ছোট করা' } },
          { id: 'c', text: { en: 'Divide supply voltage by number of components', hi: 'आपूर्ति वोल्टेज को घटकों की संख्या से विभाजित करें', bn: 'উপাদানের সংখ্যা দিয়ে মোট ভোল্টেজকে ভাগ করা' } },
          { id: 'd', text: { en: 'Assume all currents are equal', hi: 'मान लें कि सभी धाराएं समान हैं', bn: 'ধরে নেওয়া যে সব কারেন্ট সমান' } }
        ],
        correctOptionId: 'b',
        explanation: {
          en: 'Always reduce clearly identifiable parallel or series sub-branches first to simplify the network layout step-by-step.',
          hi: 'नेटवर्क लेआउट को चरण-दर-चरण सरल बनाने के लिए हमेशा सबसे पहले स्पष्ट समानांतर या श्रेणी उप-शाखाओं को कम करें।',
          bn: 'ধাপে ধাপে সহজ করতে প্রথমে স্পষ্ট প্যারালাল বা সিরিজ অংশ চিহ্নিত করে সরল করতে হবে।'
        }
      }
    ],
    practiceQuestions: [
      {
        id: 'pq-sp-1',
        question: {
          en: 'A circuit has a resistor R₁ = 5 Ω connected in series with a parallel branch consisting of R₂ = 12 Ω and R₃ = 6 Ω across a 27 V DC supply. Find: (a) R_p, (b) R_eq, (c) Total current I_total, and (d) Voltage across the parallel branch.',
          hi: 'एक परिपथ में 27 V डीसी आपूर्ति पर 5 Ω का प्रतिरोधक R₁ 12 Ω और 6 Ω के समानांतर शाखा (R₂, R₃) के साथ श्रेणी में जुड़ा है। ज्ञात करें: (a) R_p, (b) R_eq, (c) कुल धारा I_total, तथा (d) समानांतर शाखा पर वोल्टेज।',
          bn: 'একটি সার্কিটে ২৭ V ডিসি লাইনে ৫ Ω-এর একটি রেজিস্টর R₁-এর সাথে ১২ Ω ও ৬ Ω-এর দুটি প্যারালাল রেজিস্টর সিরিজে যুক্ত। নির্ণয় করো: (a) R_p, (b) R_eq, (c) মোট কারেন্ট I_total, এবং (d) প্যারালাল ব্লকের আড়াআড়ি ভোল্টেজ।'
        },
        hint: {
          en: 'R_p = (12×6)/(12+6) = 4 Ω. R_eq = 5 + 4 = 9 Ω. I_total = 27 / 9 = 3 A. V_p = I_total × R_p.',
          hi: 'R_p = 4 Ω। R_eq = 9 Ω। I_total = 3 A। V_p = 3 A × 4 Ω = 12 V।',
          bn: 'R_p = ৪ Ω। R_eq = ৯ Ω। I_total = ৩ A। V_p = ৩ A × ৪ Ω = ১২ V।'
        },
        answerKey: {
          en: '(a) R_p = 4 Ω. (b) R_eq = 9 Ω. (c) Total Current I_total = 3 A. (d) Parallel Branch Voltage V_p = 3 A × 4 Ω = 12 V.',
          hi: '(a) R_p = 4 Ω। (b) R_eq = 9 Ω। (c) कुल धारा = 3 A। (d) समानांतर शाखा वोल्टेज = 12 V।',
          bn: '(a) R_p = ৪ Ω। (b) R_eq = ৯ Ω। (c) মোট কারেন্ট = ৩ A। (d) প্যারালাল ব্লক ভোল্টেজ = ১২ V।'
        }
      },
      {
        id: 'pq-sp-2',
        question: {
          en: 'Explain how you would measure branch current I₂ in a series-parallel circuit using a digital multimeter safely without damaging the meter.',
          hi: 'डिजिटल मल्टीमीटर का उपयोग करके श्रेणी-समानांतर परिपथ में मीटर को नुकसान पहुँचाए बिना सुरक्षित रूप से शाखा धारा I₂ को कैसे मापेंगे?',
          bn: 'ডিজিটাল মাল্টিমিটারের কোনো ক্ষতি না করে সিরিজ-প্যারালাল সার্কিটে শাখা কারেন্ট I₂ কীভাবে নিরাপদে পরিমাপ করবে ব্যাখ্যা করো।'
        },
        hint: {
          en: 'Must break the circuit at branch 2 and connect the meter in SERIES with that branch after setting DMM to DC Amperes mode.',
          hi: 'DMM को DC एम्पीयर मोड पर सेट करने के बाद शाखा 2 पर परिपथ तोड़कर मीटर को श्रेणी में जोड़ना होगा।',
          bn: 'মাল্টিমিটারকে ডিসি অ্যাম্পিয়ার মোডে সেটিং করার পর শাখা-২ ডিসকানেক্ট করে মাল্টিমিটারকে উক্ত শাখার সাথে সিরিজে যুক্ত করতে হবে।'
        },
        answerKey: {
          en: '1. Turn OFF power supply. 2. Set DMM red lead to 10A port and selector to DC Amperes. 3. Disconnect one end of branch resistor R₂. 4. Connect DMM in SERIES in that broken branch. 5. Turn ON power and read current value.',
          hi: '1. पावर बंद करें। 2. DMM को DC एम्पीयर पर सेट करें। 3. R₂ का एक सिरा खोलें। 4. DMM को उस शाखा में श्रेणी (Series) में जोड़ें। 5. पावर चालू करके रीडिंग लें।',
          bn: '১. পাওয়ার সাপ্লাই বন্ধ করো। ২. মাল্টিমিটার ডিসি অ্যাম্পিয়ার মোডে সেট করো। ৩. রেজিস্টর R₂-এর এক প্রান্ত ডিসকানেক্ট করো। ৪. মিটারটিকে ওই শাখার সাথে সিরিজে যুক্ত করো। ৫. পাওয়ার অন করে রিডিং নাও।'
        }
      }
    ]
  }
};
