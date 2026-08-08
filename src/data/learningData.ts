import { DetailedSubject, Chapter, Topic, Lesson } from '../types';
import { CHAPTER_1_LESSONS } from './chapter1Lessons';
import { CHAPTER_2_LESSONS } from './chapter2Lessons';

const RAW_DETAILED_SUBJECTS: DetailedSubject[] = [
  {
    id: 'basic-electrical',
    slug: 'basic-electrical-engineering',
    icon: 'Zap',
    title: {
      en: 'Basic Electrical Engineering',
      hi: 'बेसिक इलेक्ट्रिकल इंजीनियरिंग',
      bn: 'বেসিক ইলেকট্রিক্যাল ইঞ্জিনিয়ারিং'
    },
    description: {
      en: 'Foundational principles of DC circuits, AC fundamentals, magnetic circuits, transformers, and electrical safety.',
      hi: 'डीसी सर्किट, एसी सिद्धांत, चुंबकीय परिपथ, ट्रांसफॉर्मर और विद्युत सुरक्षा के मूलभूत सिद्धांत।',
      bn: 'ডিসি সার্কিট, এসি মূলনীতি, চুম্বকীয় সার্কিট, ট্রান্সফরমার এবং বৈদ্যুতিক নিরাপত্তার মৌলিক নীতিসমূহ।'
    },
    chapters: [
      {
        id: 'ch-elec-fund',
        subjectId: 'basic-electrical',
        order: 1,
        title: {
          en: 'Chapter 1: Electrical Fundamentals',
          hi: 'अध्याय 1: इलेक्ट्रिकल मूलभूत सिद्धांत',
          bn: 'অধ্যায় ১: ইলেকট্রিক্যাল মৌলিক ভিত্তি'
        },
        topics: [
          {
            id: 'tp-charge',
            chapterId: 'ch-elec-fund',
            order: 1,
            title: {
              en: 'Electric Charge',
              hi: 'विद्युत आवेश',
              bn: 'তড়িৎ আধান'
            }
          },
          {
            id: 'tp-current',
            chapterId: 'ch-elec-fund',
            order: 2,
            title: {
              en: 'Electric Current',
              hi: 'विद्युत धारा',
              bn: 'তড়িৎ প্রবাহ'
            }
          },
          {
            id: 'tp-voltage',
            chapterId: 'ch-elec-fund',
            order: 3,
            title: {
              en: 'Voltage / Potential Difference',
              hi: 'वोल्टेज / विभवांतर',
              bn: 'ভোল্টেজ / বিভব পার্থক্য'
            }
          },
          {
            id: 'tp-emf',
            chapterId: 'ch-elec-fund',
            order: 4,
            title: {
              en: 'EMF (Electromotive Force)',
              hi: 'ईएमएफ (विद्युत वाहक बल)',
              bn: 'ইএমএফ (ইলেক্ট্রোমোটিভ ফোর্স)'
            }
          },
          {
            id: 'tp-resistance',
            chapterId: 'ch-elec-fund',
            order: 5,
            title: {
              en: 'Resistance',
              hi: 'प्रतिरोध',
              bn: 'রোধ'
            }
          },
          {
            id: 'tp-conductance',
            chapterId: 'ch-elec-fund',
            order: 6,
            title: {
              en: 'Conductance',
              hi: 'चालकता (कंडक्टेंस)',
              bn: 'পরিবাহিতা (কন্ডাক্ট্যান্স)'
            }
          },
          {
            id: 'tp-power',
            chapterId: 'ch-elec-fund',
            order: 7,
            title: {
              en: 'Power',
              hi: 'विद्युत शक्ति',
              bn: 'বৈদ্যুতিক ক্ষমতা'
            }
          },
          {
            id: 'tp-energy',
            chapterId: 'ch-elec-fund',
            order: 8,
            title: {
              en: 'Energy',
              hi: 'विद्युत ऊर्जा',
              bn: 'বৈদ্যুতিক শক্তি'
            }
          },
          {
            id: 'tp-electrical-work',
            chapterId: 'ch-elec-fund',
            order: 9,
            title: {
              en: 'Electrical Work',
              hi: 'विद्युत कार्य',
              bn: 'বৈদ্যুতিক কাজ'
            }
          },
          {
            id: 'tp-units-si',
            chapterId: 'ch-elec-fund',
            order: 10,
            title: {
              en: 'Units & SI Units',
              hi: 'मात्रक एवं एसआई इकाइयाँ',
              bn: 'একক এবং এসআই একক'
            }
          },
          {
            id: 'tp-electrical-symbols',
            chapterId: 'ch-elec-fund',
            order: 11,
            title: {
              en: 'Electrical Symbols',
              hi: 'विद्युत संकेत एवं प्रतीक',
              bn: 'বৈদ্যুতিক প্রতীকসমূহ'
            }
          }
        ]
      },
      {
        id: 'ch-ohms-circuits',
        subjectId: 'basic-electrical',
        order: 2,
        title: {
          en: 'Chapter 2: Ohm\'s Law & Basic Circuits',
          hi: 'अध्याय 2: ओम का नियम एवं बुनियादी परिपथ',
          bn: 'অধ্যায় ২: ওহমের সূত্র ও মৌলিক সার্কিট'
        },
        topics: [
          {
            id: 'tp-ohms-law',
            chapterId: 'ch-ohms-circuits',
            order: 1,
            title: {
              en: 'Ohm\'s Law',
              hi: 'ओम का नियम',
              bn: 'ওহমের সূত্র'
            },
            lesson: {
              id: 'lsn-ohms-law',
              topicId: 'tp-ohms-law',
              order: 1,
              title: {
                en: 'Ohm\'s Law & Fundamental Circuit Relationships',
                hi: 'ओम का नियम एवं बुनियादी परिपथ संबंध',
                bn: 'ওহমের सूत्र ও মৌলিক সার্কিট সম্পর্ক'
              },
              easyExplanation: {
                en: 'Ohm\'s Law is the most fundamental rule in electrical engineering. It states that the electric current flowing through a conductor is directly proportional to the voltage applied across it and inversely proportional to its electrical resistance, provided the temperature remains constant.',
                hi: 'ओम का नियम इलेक्ट्रिकल इंजीनियरिंग का सबसे बुनियादी नियम है। इसके अनुसार, किसी चालक में बहने वाली विद्युत धारा (Current) उस पर लगाए गए विभवांतर (Voltage) के समानुपाती और उसके प्रतिरोध (Resistance) के व्युत्क्रमानुपाती होती है, यदि तापमान स्थिर रहे।',
                bn: 'ওহমের সূত্র ইলেকট্রিক্যাল ইঞ্জিনিয়ারিংয়ের সবচেয়ে মৌলিক নিয়ম। এই সূত্রানুসারে, কোনো পরিবাহীর মধ্য দিয়ে প্রবাহিত তড়িৎ প্রবাহ (Current) তার দুই প্রান্তের বিভব পার্থক্যের (Voltage) সমানুপাতিক এবং পরিবাহীর রোধের (Resistance) ব্যস্তানুপাতিক, যদি তাপমাত্রা অপরিবর্তিত থাকে।'
              },
              detailedExplanation: {
                en: 'Formulated by Georg Simon Ohm in 1827, Ohm\'s Law connects the three core electrical quantities: Potential Difference (V in Volts), Current (I in Amperes), and Resistance (R in Ohms). Mathematically expressed as V = I × R, it forms the mathematical foundation for analyzing DC circuits, calculating power dissipation, and sizing electrical conductors and circuit components.',
                hi: '1827 में जॉर्ज साइमन ओम द्वारा प्रतिपादित, ओम का नियम तीन प्रमुख विद्युत राशियों को जोड़ता है: विभवांतर (V - वोल्ट), विद्युत धारा (I - एम्पीयर), और प्रतिरोध (R - ओम)। गणितीय रूप से V = I × R द्वारा व्यक्त किया गया यह नियम डीसी सर्किट के विश्लेषण, बिजली की खपत की गणना और केबल का आकार तय करने का आधार है।',
                bn: '১৮২৭ সালে গেয়র্গ সিমন ওহম কর্তৃক আবিষ্কৃত এই সূত্রটি তিনটি প্রধান বৈদ্যুतिक রাশিকে সংযুক্ত করে: বিভব পার্থক্য (V - ভোল্ট), তড়িৎ প্রবাহ (I - অ্যাম্পিয়ার) এবং রোধ (R - ওহম)। গাণিতিক রূপ V = I × R। এটি ডিসি সার্কিট বিশ্লেষণ, পাওয়ার লস গণনা এবং ক্যাবলের আকার নির্ধারণের গাণিতিক ভিত্তি।'
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
                    bn: 'একটি ইলেকট্রিক হিটার ২৩০ V ডিসি সরবরাহে চলে এবং এর হিটিং এলিমেন্টের রোধ ৪৬ Ω। হিটারটি কত কারেন্ট গ্রহণ করবে তা নির্ণয় করো।'
                  },
                  givenValues: {
                    'Voltage (V)': '230 V',
                    'Resistance (R)': '46 Ω'
                  },
                  solution: {
                    en: 'Using Ohm\'s Law formula for current: I = V / R\nI = 230 V / 46 Ω = 5 Amperes.',
                    hi: 'धारा के लिए ओम के नियम का प्रयोग करें: I = V / R\nI = 230 V / 46 Ω = 5 एम्पीयर।',
                    bn: 'কারেন্ট নির্ণয়ে ওহমের সূত্র ব্যবহার করে: I = V / R\nI = ২৩০ V / ৪৬ Ω = ৫ অ্যাম্পিয়ার।'
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
                  'नॉन-ओमिया उपकरण जैसे सेमीकंडक्टर डायोड, ट्रांजिस्टर और डिस्चार्ज लैंप इसका पालन नहीं करते।',
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
                    { id: 'c', text: { en: 'Be doubled', hi: 'दोगुनी हो जाएगी', bn: 'দ্বিগুণ होकर रहेगी' } },
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
                    bn: 'একই উপাদান ও দৈর্ঘ্যের মোটা তারের চেয়ে সরু তারের বৈদ্যুतिक রোধ বেশি হয় কেন তা ব্যাখ্যা করো।'
                  },
                  hint: {
                    en: 'Recall the formula R = ρ × (L / A) where A represents cross-sectional area.',
                    hi: 'सूत्र R = ρ × (L / A) को याद करें जहां A अनुप्रस्थ काट का क्षेत्रफल है।',
                    bn: 'R = ρ × (L / A) সূত্রটি মনে করো যেখানে A হলো প্রস্থচ্ছেদের ক্ষেত্রফল।'
                  },
                  answerKey: {
                    en: 'Resistance is inversely proportional to cross-sectional area (A). A thin wire has a smaller area, offering greater opposition to electron movement.',
                    hi: 'प्रतिरोध अनुप्रस्थ काट के क्षेत्रफल (A) के व्युत्क्रमानुपाती होता है। पतले तार का क्षेत्रफल कम होता है, जिससे इलेक्ट्रॉनों के प्रवाह में अधिक बाधा आती है।',
                    bn: ' রোধ পরিবাহীর প্রস্থচ্ছেদের ক্ষেত্রফলের (A) ব্যস্তানুপাতিক। সরু তারের ক্ষেত্রফল কম হওয়ায় তা ইলেকট্রন প্রবাহে বেশি বাধা দেয়।'
                  }
                }
              ]
            }
          },
          {
            id: 'tp-v-i-r-rel',
            chapterId: 'ch-ohms-circuits',
            order: 2,
            title: {
              en: 'Voltage–Current–Resistance Relationship',
              hi: 'वोल्टेज-धारा-प्रतिरोध संबंध',
              bn: 'ভোল্টেজ-কারেন্ট-রেজিস্ট্যান্স সম্পর্ক'
            }
          },
          {
            id: 'tp-series-circuit',
            chapterId: 'ch-ohms-circuits',
            order: 3,
            title: {
              en: 'Series Circuit',
              hi: 'श्रेणी परिपथ (सीरीज सर्किट)',
              bn: 'সিরিজ সার্কিট'
            }
          },
          {
            id: 'tp-parallel-circuit',
            chapterId: 'ch-ohms-circuits',
            order: 4,
            title: {
              en: 'Parallel Circuit',
              hi: 'समानांतर परिपथ (पैरेलल सर्किट)',
              bn: 'প্যারালাল সার্কিট'
            }
          },
          {
            id: 'tp-series-parallel-circuit',
            chapterId: 'ch-ohms-circuits',
            order: 5,
            title: {
              en: 'Series-Parallel Circuit',
              hi: 'श्रेणी-समानांतर परिपथ',
              bn: 'সিরিজ-প্যারালাল সার্কিট'
            }
          },
          {
            id: 'tp-voltage-division',
            chapterId: 'ch-ohms-circuits',
            order: 6,
            title: {
              en: 'Voltage Division',
              hi: 'वोल्टेज विभाजन नियम',
              bn: 'ভোল্টেজ ডিভাইডার রুল'
            }
          },
          {
            id: 'tp-current-division',
            chapterId: 'ch-ohms-circuits',
            order: 7,
            title: {
              en: 'Current Division',
              hi: 'धारा विभाजन नियम',
              bn: 'কারেন্ট ডিভাইডার রুল'
            }
          },
          {
            id: 'tp-open-circuit',
            chapterId: 'ch-ohms-circuits',
            order: 8,
            title: {
              en: 'Open Circuit',
              hi: 'खुला परिपथ (ओपन सर्किट)',
              bn: 'ওপেন সার্কিট'
            }
          },
          {
            id: 'tp-short-circuit',
            chapterId: 'ch-ohms-circuits',
            order: 9,
            title: {
              en: 'Short Circuit',
              hi: 'लघु परिपथ (शॉर्ट सर्किट)',
              bn: 'শর্ট সার্কিট'
            }
          },
          {
            id: 'tp-practical-apps',
            chapterId: 'ch-ohms-circuits',
            order: 10,
            title: {
              en: 'Practical Applications',
              hi: 'व्यावहारिक अनुप्रयोग',
              bn: 'ব্যবহারিক প্রয়োগসমূহ'
            }
          }
        ]
      },
      {
        id: 'ch-power-energy',
        subjectId: 'basic-electrical',
        order: 3,
        title: {
          en: 'Chapter 3: Electrical Power & Energy',
          hi: 'अध्याय 3: विद्युत शक्ति एवं ऊर्जा',
          bn: 'অধ্যায় ৩: বৈদ্যুতিক ক্ষমতা ও শক্তি'
        },
        topics: [
          {
            id: 'tp-electrical-power',
            chapterId: 'ch-power-energy',
            order: 1,
            title: {
              en: 'Electrical Power',
              hi: 'विद्युत शक्ति',
              bn: 'বৈদ্যুতিক ক্ষমতা'
            }
          },
          {
            id: 'tp-power-formula',
            chapterId: 'ch-power-energy',
            order: 2,
            title: {
              en: 'Power Formula',
              hi: 'शक्ति का सूत्र',
              bn: 'পাওয়ারের সূত্র'
            }
          },
          {
            id: 'tp-dc-power',
            chapterId: 'ch-power-energy',
            order: 3,
            title: {
              en: 'DC Power',
              hi: 'डीसी पावर',
              bn: 'ডিসি পাওয়ার'
            }
          },
          {
            id: 'tp-ac-power-intro',
            chapterId: 'ch-power-energy',
            order: 4,
            title: {
              en: 'AC Power — Introduction',
              hi: 'एसी पावर — परिचय',
              bn: 'এসি পাওয়ার — পরিচিতি'
            }
          },
          {
            id: 'tp-electrical-energy',
            chapterId: 'ch-power-energy',
            order: 5,
            title: {
              en: 'Electrical Energy',
              hi: 'विद्युत ऊर्जा',
              bn: 'বৈদ্যুতিক শক্তি'
            }
          },
          {
            id: 'tp-kwh',
            chapterId: 'ch-power-energy',
            order: 6,
            title: {
              en: 'kWh (Kilowatt-Hour)',
              hi: 'किलोवाट-घंटा (kWh)',
              bn: 'কিলাওয়াট-ঘণ্টা (kWh)'
            }
          },
          {
            id: 'tp-electricity-consumption',
            chapterId: 'ch-power-energy',
            order: 7,
            title: {
              en: 'Electricity Consumption',
              hi: 'बिजली की खपत की गणना',
              bn: 'বিদ্যুৎ ব্যবহার ও খরচ'
            }
          },
          {
            id: 'tp-energy-meter-concept',
            chapterId: 'ch-power-energy',
            order: 8,
            title: {
              en: 'Energy Meter — Basic Concept',
              hi: 'एनर्जी मीटर — मूल अवधारणा',
              bn: 'এনার্জি মিটার — মৌলিক ধারণা'
            }
          },
          {
            id: 'tp-power-rating',
            chapterId: 'ch-power-energy',
            order: 9,
            title: {
              en: 'Power Rating',
              hi: 'पावर रेटिंग',
              bn: 'পাওয়ার রেটিং'
            }
          },
          {
            id: 'tp-efficiency',
            chapterId: 'ch-power-energy',
            order: 10,
            title: {
              en: 'Efficiency',
              hi: 'दक्षता (एफिशिएंसी)',
              bn: 'দক্ষতা (ইফিসিয়েন্সি)'
            }
          }
        ]
      },
      {
        id: 'ch-kirchhoffs-laws',
        subjectId: 'basic-electrical',
        order: 4,
        title: {
          en: 'Chapter 4: Kirchhoff\'s Laws',
          hi: 'अध्याय 4: किरचॉफ के नियम',
          bn: 'অধ্যায় ৪: কার্শফের সূত্রসমূহ'
        },
        topics: [
          {
            id: 'tp-kcl',
            chapterId: 'ch-kirchhoffs-laws',
            order: 1,
            title: {
              en: 'Kirchhoff\'s Current Law (KCL)',
              hi: 'किरचॉफ का धारा नियम (KCL)',
              bn: 'কার্শফের কারেন্ট সূত্র (KCL)'
            }
          },
          {
            id: 'tp-kvl',
            chapterId: 'ch-kirchhoffs-laws',
            order: 2,
            title: {
              en: 'Kirchhoff\'s Voltage Law (KVL)',
              hi: 'किरचॉफ का वोल्टेज नियम (KVL)',
              bn: 'কার্শফের ভোল্টেজ সূত্র (KVL)'
            }
          },
          {
            id: 'tp-junction-rule',
            chapterId: 'ch-kirchhoffs-laws',
            order: 3,
            title: {
              en: 'Junction Rule',
              hi: 'जंक्शन नियम',
              bn: 'জংশন রুল'
            }
          },
          {
            id: 'tp-loop-rule',
            chapterId: 'ch-kirchhoffs-laws',
            order: 4,
            title: {
              en: 'Loop Rule',
              hi: 'लूप नियम',
              bn: 'লুপ রুল'
            }
          },
          {
            id: 'tp-kcl-apps',
            chapterId: 'ch-kirchhoffs-laws',
            order: 5,
            title: {
              en: 'KCL Applications',
              hi: 'केसीएल के अनुप्रयोग',
              bn: 'KCL-এর প্রয়োগ'
            }
          },
          {
            id: 'tp-kvl-apps',
            chapterId: 'ch-kirchhoffs-laws',
            order: 6,
            title: {
              en: 'KVL Applications',
              hi: 'केवीएल के अनुप्रयोग',
              bn: 'KVL-এর প্রয়োগ'
            }
          },
          {
            id: 'tp-simple-circuit-problems',
            chapterId: 'ch-kirchhoffs-laws',
            order: 7,
            title: {
              en: 'Simple Circuit Problems',
              hi: 'सरल परिपथ समस्याएँ',
              bn: 'সহজ সার্কিট সমস্যানাবলি'
            }
          }
        ]
      },
      {
        id: 'ch-resistors',
        subjectId: 'basic-electrical',
        order: 5,
        title: {
          en: 'Chapter 5: Resistance & Resistors',
          hi: 'अध्याय 5: प्रतिरोध एवं प्रतिरोधक',
          bn: 'অধ্যায় ৫: রোধ ও রেজিস্টর'
        },
        topics: [
          {
            id: 'tp-types-resistance',
            chapterId: 'ch-resistors',
            order: 1,
            title: {
              en: 'Types of Resistance',
              hi: 'प्रतिरोध के प्रकार',
              bn: 'রোধের প্রকারভেদ'
            }
          },
          {
            id: 'tp-fixed-resistors',
            chapterId: 'ch-resistors',
            order: 2,
            title: {
              en: 'Fixed Resistors',
              hi: 'फिक्स्ड प्रतिरोधक',
              bn: 'ফিক্সড রেজিস্টর'
            }
          },
          {
            id: 'tp-variable-resistors',
            chapterId: 'ch-resistors',
            order: 3,
            title: {
              en: 'Variable Resistors',
              hi: 'परिवर्तनीय प्रतिरोधक (वेरिएबल)',
              bn: 'ভ্যারিয়েবল রেজিস্টর'
            }
          },
          {
            id: 'tp-resistor-colour-code',
            chapterId: 'ch-resistors',
            order: 4,
            title: {
              en: 'Resistor Colour Code',
              hi: 'प्रतिरोधक कलर कोड',
              bn: 'রেজিস্টর কালার কোড'
            }
          },
          {
            id: 'tp-resistance-tolerance',
            chapterId: 'ch-resistors',
            order: 5,
            title: {
              en: 'Resistance Tolerance',
              hi: 'प्रतिरोध सहष्णुता (टॉलरेंस)',
              bn: 'রেজিস্ট্যান্স টলারেন্স'
            }
          },
          {
            id: 'tp-temp-effect-resistance',
            chapterId: 'ch-resistors',
            order: 6,
            title: {
              en: 'Temperature Effect on Resistance',
              hi: 'प्रतिरोध पर तापमान का प्रभाव',
              bn: 'রোধের উপর তাপমাত্রার প্রভাব'
            }
          },
          {
            id: 'tp-temp-coefficient',
            chapterId: 'ch-resistors',
            order: 7,
            title: {
              en: 'Temperature Coefficient',
              hi: 'तापमान गुणांक',
              bn: 'তাপমাত্রা গুণাঙ্ক'
            }
          },
          {
            id: 'tp-resistors-series',
            chapterId: 'ch-resistors',
            order: 8,
            title: {
              en: 'Resistors in Series',
              hi: 'श्रेणी क्रम में प्रतिरोधक',
              bn: 'সিরিজে সংযুক্ত রেজিস্টর'
            }
          },
          {
            id: 'tp-resistors-parallel',
            chapterId: 'ch-resistors',
            order: 9,
            title: {
              en: 'Resistors in Parallel',
              hi: 'समानांतर क्रम में प्रतिरोधक',
              bn: 'প্যারালালে সংযুক্ত রেজিস্টর'
            }
          },
          {
            id: 'tp-equivalent-resistance',
            chapterId: 'ch-resistors',
            order: 10,
            title: {
              en: 'Equivalent Resistance',
              hi: 'तुल्य प्रतिरोध',
              bn: 'সমতুল্য রোধ (ইকুয়ালেন্ট রেজিস্ট্যান্স)'
            }
          }
        ]
      },
      {
        id: 'ch-electrical-sources',
        subjectId: 'basic-electrical',
        order: 6,
        title: {
          en: 'Chapter 6: Electrical Sources',
          hi: 'अध्याय 6: विद्युत स्रोत',
          bn: 'অধ্যায় ৬: বৈদ্যুতিক সোর্স'
        },
        topics: [
          {
            id: 'tp-voltage-source',
            chapterId: 'ch-electrical-sources',
            order: 1,
            title: {
              en: 'Voltage Source',
              hi: 'वोल्टेज स्रोत',
              bn: 'ভোল্টেজ সোর্স'
            }
          },
          {
            id: 'tp-current-source',
            chapterId: 'ch-electrical-sources',
            order: 2,
            title: {
              en: 'Current Source',
              hi: 'धारा स्रोत (करंट सोर्स)',
              bn: 'কারেন্ট সোর্স'
            }
          },
          {
            id: 'tp-ideal-source',
            chapterId: 'ch-electrical-sources',
            order: 3,
            title: {
              en: 'Ideal Source',
              hi: 'आदर्श स्रोत',
              bn: 'আইডিয়াল সোর্স'
            }
          },
          {
            id: 'tp-practical-source',
            chapterId: 'ch-electrical-sources',
            order: 4,
            title: {
              en: 'Practical Source',
              hi: 'व्यावहारिक स्रोत',
              bn: 'প্র্যাকটিক্যাল সোর্স'
            }
          },
          {
            id: 'tp-independent-source',
            chapterId: 'ch-electrical-sources',
            order: 5,
            title: {
              en: 'Independent Source',
              hi: 'स्वतंत्र स्रोत',
              bn: 'ইন্ডিপেন্ডেন্ট সোর্স'
            }
          },
          {
            id: 'tp-dependent-source-intro',
            chapterId: 'ch-electrical-sources',
            order: 6,
            title: {
              en: 'Dependent Source — Introduction',
              hi: 'निर्भर स्रोत — परिचय',
              bn: 'ডিপেন্ডেন্ট সোর্স — পরিচিতি'
            }
          },
          {
            id: 'tp-emf-internal-resistance',
            chapterId: 'ch-electrical-sources',
            order: 7,
            title: {
              en: 'EMF and Internal Resistance',
              hi: 'विद्युत वाहक बल एवं आंतरिक प्रतिरोध',
              bn: 'ইএমএফ ও অভ্যন্তরীণ রোধ'
            }
          },
          {
            id: 'tp-source-transformation-intro',
            chapterId: 'ch-electrical-sources',
            order: 8,
            title: {
              en: 'Source Transformation — Introduction',
              hi: 'स्रोत परिवर्तन — परिचय',
              bn: 'সোর্স ট্রান্সফরমেশন — পরিচিতি'
            }
          }
        ]
      },
      {
        id: 'ch-capacitors',
        subjectId: 'basic-electrical',
        order: 7,
        title: {
          en: 'Chapter 7: Capacitors',
          hi: 'अध्याय 7: संधारित्र (कैपेसिटर)',
          bn: 'অধ্যায় ৭: ক্যাপাসিটর'
        },
        topics: [
          {
            id: 'tp-electric-field',
            chapterId: 'ch-capacitors',
            order: 1,
            title: {
              en: 'Electric Field',
              hi: 'विद्युत क्षेत्र',
              bn: 'তড়িৎ ক্ষেত্র'
            }
          },
          {
            id: 'tp-capacitance',
            chapterId: 'ch-capacitors',
            order: 2,
            title: {
              en: 'Capacitance',
              hi: 'धारिता (कैपेसिटेंस)',
              bn: 'ধারকত্ব (ক্যাপাসিট্যান্স)'
            }
          },
          {
            id: 'tp-capacitor-construction',
            chapterId: 'ch-capacitors',
            order: 3,
            title: {
              en: 'Capacitor Construction',
              hi: 'संधारित्र की बनावट',
              bn: 'ক্যাপাসিটরের গঠন'
            }
          },
          {
            id: 'tp-types-capacitors',
            chapterId: 'ch-capacitors',
            order: 4,
            title: {
              en: 'Types of Capacitors',
              hi: 'कैपेसिटर के प्रकार',
              bn: 'ক্যাপাসিটরের প্রকারভেদ'
            }
          },
          {
            id: 'tp-capacitor-units',
            chapterId: 'ch-capacitors',
            order: 5,
            title: {
              en: 'Capacitor Units',
              hi: 'कैपेसिटर की इकाइयाँ',
              bn: 'ক্যাপাসিটরের একক'
            }
          },
          {
            id: 'tp-capacitors-series',
            chapterId: 'ch-capacitors',
            order: 6,
            title: {
              en: 'Capacitors in Series',
              hi: 'श्रेणी क्रम में कैपेसिटर',
              bn: 'সিরিজে ক্যাপাসিটর'
            }
          },
          {
            id: 'tp-capacitors-parallel',
            chapterId: 'ch-capacitors',
            order: 7,
            title: {
              en: 'Capacitors in Parallel',
              hi: 'समानांतर क्रम में कैपेसिटर',
              bn: 'প্যারালালে ক্যাপাসিটর'
            }
          },
          {
            id: 'tp-energy-stored-capacitor',
            chapterId: 'ch-capacitors',
            order: 8,
            title: {
              en: 'Energy Stored in Capacitor',
              hi: 'कैपेसिटर में संचित ऊर्जा',
              bn: 'ক্যাপাসিটরে সঞ্চিত শক্তি'
            }
          },
          {
            id: 'tp-charging-discharging',
            chapterId: 'ch-capacitors',
            order: 9,
            title: {
              en: 'Charging & Discharging',
              hi: 'चार्जिंग एवं डिस्चार्जिंग',
              bn: 'চার্জিং ও ডিসচার্জিং'
            }
          },
          {
            id: 'tp-capacitor-apps',
            chapterId: 'ch-capacitors',
            order: 10,
            title: {
              en: 'Capacitor Applications',
              hi: 'कैपेसिटर के अनुप्रयोग',
              bn: 'ক্যাপাসিটরের প্রয়োগ'
            }
          }
        ]
      },
      {
        id: 'ch-inductors',
        subjectId: 'basic-electrical',
        order: 8,
        title: {
          en: 'Chapter 8: Inductors',
          hi: 'अध्याय 8: प्रेरक (इंडक्टर)',
          bn: 'অধ্যায় ৮: ইন্ডাক্টর'
        },
        topics: [
          {
            id: 'tp-magnetic-field',
            chapterId: 'ch-inductors',
            order: 1,
            title: {
              en: 'Magnetic Field',
              hi: 'चुंबकीय क्षेत्र',
              bn: 'চৌম্বক ক্ষেত্র'
            }
          },
          {
            id: 'tp-inductance',
            chapterId: 'ch-inductors',
            order: 2,
            title: {
              en: 'Inductance',
              hi: 'प्रेरकत्व (इंडक्टेंस)',
              bn: 'আবেশকত্ব (ইন্ডাক্ট্যান্স)'
            }
          },
          {
            id: 'tp-self-inductance',
            chapterId: 'ch-inductors',
            order: 3,
            title: {
              en: 'Self Inductance',
              hi: 'स्व-प्रेरकत्व (सेल-इंडक्टेंस)',
              bn: 'স্ব-আবেশ (সেলফ ইন্ডাক্ট্যান্স)'
            }
          },
          {
            id: 'tp-mutual-inductance',
            chapterId: 'ch-inductors',
            order: 4,
            title: {
              en: 'Mutual Inductance',
              hi: 'पारस्परिक प्रेरकत्व (म्यूचुअल इंडक्टेंस)',
              bn: 'পারস্পরিক আবেশ (মিউচুয়াল ইন্ডাক্ট্যান্স)'
            }
          },
          {
            id: 'tp-inductance-unit',
            chapterId: 'ch-inductors',
            order: 5,
            title: {
              en: 'Unit of Inductance',
              hi: 'इंडक्टेंस की इकाई',
              bn: 'ইন্ডাক্ট্যান্সের একক'
            }
          },
          {
            id: 'tp-inductor-construction',
            chapterId: 'ch-inductors',
            order: 6,
            title: {
              en: 'Inductor Construction',
              hi: 'इंडक्टर की संरचना',
              bn: 'ইন্ডাক্টরের গঠন'
            }
          },
          {
            id: 'tp-inductors-series',
            chapterId: 'ch-inductors',
            order: 7,
            title: {
              en: 'Inductors in Series',
              hi: 'श्रेणी क्रम में इंडक्टर',
              bn: 'সিরিজে ইন্ডাক্টর'
            }
          },
          {
            id: 'tp-energy-stored-inductor',
            chapterId: 'ch-inductors',
            order: 8,
            title: {
              en: 'Energy Stored in Inductor',
              hi: 'इंडक्टर में संचित ऊर्जा',
              bn: 'ইন্ডাক্টরে সঞ্চিত শক্তি'
            }
          },
          {
            id: 'tp-current-rise-decay',
            chapterId: 'ch-inductors',
            order: 9,
            title: {
              en: 'Rise & Decay of Current',
              hi: 'धारा का बढ़ना एवं घटना',
              bn: 'কারেন্টের বৃদ্ধি ও হ্রাস'
            }
          },
          {
            id: 'tp-inductor-apps',
            chapterId: 'ch-inductors',
            order: 10,
            title: {
              en: 'Inductor Applications',
              hi: 'इंडक्टर के अनुप्रयोग',
              bn: 'ইন্ডাক্টরের প্রয়োগ'
            }
          }
        ]
      },
      {
        id: 'ch-magnetic-circuits',
        subjectId: 'basic-electrical',
        order: 9,
        title: {
          en: 'Chapter 9: Magnetic Circuits',
          hi: 'अध्याय 9: चुंबकीय परिपथ',
          bn: 'অধ্যায় ৯: চুম্বকীয় সার্কিট'
        },
        topics: [
          {
            id: 'tp-magnetic-flux',
            chapterId: 'ch-magnetic-circuits',
            order: 1,
            title: {
              en: 'Magnetic Flux',
              hi: 'चुंबकीय फ्लक्स',
              bn: 'চুম্বকীয় ফ্লাক্স'
            }
          },
          {
            id: 'tp-flux-density',
            chapterId: 'ch-magnetic-circuits',
            order: 2,
            title: {
              en: 'Flux Density',
              hi: 'फ्लक्स घनत्व',
              bn: 'ফ্লাক্স ঘনত্ব'
            }
          },
          {
            id: 'tp-mmf',
            chapterId: 'ch-magnetic-circuits',
            order: 3,
            title: {
              en: 'Magnetomotive Force (MMF)',
              hi: 'चुंबकीय वाहक बल (MMF)',
              bn: 'ম্যাগনেটোমোটিভ ফোর্স (MMF)'
            }
          },
          {
            id: 'tp-reluctance',
            chapterId: 'ch-magnetic-circuits',
            order: 4,
            title: {
              en: 'Reluctance',
              hi: 'रिलक्टेंस (चुंबकीय प्रतिरोध)',
              bn: 'রিলাকট্যান্স'
            }
          },
          {
            id: 'tp-permeability',
            chapterId: 'ch-magnetic-circuits',
            order: 5,
            title: {
              en: 'Permeability',
              hi: 'पारगम्यता (पर्मिएबिलिटी)',
              bn: 'পারমিয়াবিলিটি'
            }
          },
          {
            id: 'tp-magnetic-field-strength',
            chapterId: 'ch-magnetic-circuits',
            order: 6,
            title: {
              en: 'Magnetic Field Strength',
              hi: 'चुंबकीय क्षेत्र की तीव्रता',
              bn: 'চৌম্বক ক্ষেত্রের তীব্রতা'
            }
          },
          {
            id: 'tp-amperes-law',
            chapterId: 'ch-magnetic-circuits',
            order: 7,
            title: {
              en: 'Ampere\'s Law',
              hi: 'एम्पीयर का नियम',
              bn: 'অ্যাম্পিয়ারের সূত্র'
            }
          },
          {
            id: 'tp-mag-vs-elec-circuit',
            chapterId: 'ch-magnetic-circuits',
            order: 8,
            title: {
              en: 'Magnetic Circuit vs Electrical Circuit',
              hi: 'चुंबकीय परिपथ बनाम विद्युत परिपथ',
              bn: 'চুম্বকীয় সার্কিট বনাম বৈদ্যুতিক সার্কিট'
            }
          },
          {
            id: 'tp-series-magnetic-circuit',
            chapterId: 'ch-magnetic-circuits',
            order: 9,
            title: {
              en: 'Series Magnetic Circuit',
              hi: 'श्रेणी चुंबकीय परिपथ',
              bn: 'সিরিজ ম্যাগনেটিক সার্কিট'
            }
          },
          {
            id: 'tp-magnetic-materials',
            chapterId: 'ch-magnetic-circuits',
            order: 10,
            title: {
              en: 'Magnetic Materials',
              hi: 'चुंबकीय पदार्थ',
              bn: 'চুম্বকীয় পদার্থসমূহ'
            }
          }
        ]
      },
      {
        id: 'ch-em-induction',
        subjectId: 'basic-electrical',
        order: 10,
        title: {
          en: 'Chapter 10: Electromagnetic Induction',
          hi: 'अध्याय 10: विद्युत चुंबकीय प्रेरण',
          bn: 'অধ্যায় ১০: তড়িৎচুম্বকীয় আবেশ'
        },
        topics: [
          {
            id: 'tp-faradays-law',
            chapterId: 'ch-em-induction',
            order: 1,
            title: {
              en: 'Faraday\'s Law',
              hi: 'फैराडे का नियम',
              bn: 'ফ্যারাডের সূত্র'
            }
          },
          {
            id: 'tp-lenzs-law',
            chapterId: 'ch-em-induction',
            order: 2,
            title: {
              en: 'Lenz\'s Law',
              hi: 'लेंज का नियम',
              bn: 'লেনজের সূত্র'
            }
          },
          {
            id: 'tp-flemings-right-hand-rule',
            chapterId: 'ch-em-induction',
            order: 3,
            title: {
              en: 'Fleming\'s Right-Hand Rule',
              hi: 'फ्लेमिंग का दायां हाथ का नियम',
              bn: 'ফ্লেমিংয়ের ডানহস্ত নিয়ম'
            }
          },
          {
            id: 'tp-dynamically-induced-emf',
            chapterId: 'ch-em-induction',
            order: 4,
            title: {
              en: 'Dynamically Induced EMF',
              hi: 'गतिक रूप से प्रेरित EMF',
              bn: 'ডায়নামিকালি আবিষ্ট ইএমএফ'
            }
          },
          {
            id: 'tp-statically-induced-emf',
            chapterId: 'ch-em-induction',
            order: 5,
            title: {
              en: 'Statically Induced EMF',
              hi: 'स्थैतिक रूप से प्रेरित EMF',
              bn: 'স্ট্যাটিকালি আবিষ্ট ইএমএফ'
            }
          },
          {
            id: 'tp-self-induced-emf',
            chapterId: 'ch-em-induction',
            order: 6,
            title: {
              en: 'Self-Induced EMF',
              hi: 'स्व-प्रेरित EMF',
              bn: 'স্ব-আবিষ্ট ইএমএফ'
            }
          },
          {
            id: 'tp-mutually-induced-emf',
            chapterId: 'ch-em-induction',
            order: 7,
            title: {
              en: 'Mutually Induced EMF',
              hi: 'पारस्परिक प्रेरित EMF',
              bn: 'পারস্পরিক আবিষ্ট ইএমএফ'
            }
          },
          {
            id: 'tp-em-induction-apps',
            chapterId: 'ch-em-induction',
            order: 8,
            title: {
              en: 'Applications of Electromagnetic Induction',
              hi: 'विद्युत चुंबकीय प्रेरण के अनुप्रयोग',
              bn: 'তড়িৎচুম্বকীয় আবেশের প্রয়োগ'
            }
          }
        ]
      },
      {
        id: 'ch-ac-fundamentals',
        subjectId: 'basic-electrical',
        order: 11,
        title: {
          en: 'Chapter 11: AC Fundamentals',
          hi: 'अध्याय 11: एसी मूलभूत सिद्धांत',
          bn: 'অধ্যায় ১১: এসি মৌলিক ভিত্তি'
        },
        topics: [
          {
            id: 'tp-ac-vs-dc',
            chapterId: 'ch-ac-fundamentals',
            order: 1,
            title: {
              en: 'AC vs DC',
              hi: 'एसी बनाम डीसी',
              bn: 'এসি বনাম ডিসি'
            }
          },
          {
            id: 'tp-sinusoidal-waveform',
            chapterId: 'ch-ac-fundamentals',
            order: 2,
            title: {
              en: 'Sinusoidal Waveform',
              hi: 'साइनसोइडल तरंगरूप',
              bn: 'সাইনুসয়েডাল ওয়েভফর্ম'
            }
          },
          {
            id: 'tp-cycle',
            chapterId: 'ch-ac-fundamentals',
            order: 3,
            title: {
              en: 'Cycle',
              hi: 'चक्र (साइकिल)',
              bn: 'সাইকেল'
            }
          },
          {
            id: 'tp-time-period',
            chapterId: 'ch-ac-fundamentals',
            order: 4,
            title: {
              en: 'Time Period',
              hi: 'आवर्तकाल (टाइम पीरियड)',
              bn: 'পর্যায়কাল (টাইম পিরিয়ড)'
            }
          },
          {
            id: 'tp-frequency',
            chapterId: 'ch-ac-fundamentals',
            order: 5,
            title: {
              en: 'Frequency',
              hi: 'आवृत्ति (फ्रीक्वेंसी)',
              bn: 'কম্পাঙ্ক (ফ্রিকোয়েন্সি)'
            }
          },
          {
            id: 'tp-angular-frequency',
            chapterId: 'ch-ac-fundamentals',
            order: 6,
            title: {
              en: 'Angular Frequency',
              hi: 'कोणीय आवृत्ति',
              bn: 'কৌণিক কম্পাঙ্ক'
            }
          },
          {
            id: 'tp-amplitude',
            chapterId: 'ch-ac-fundamentals',
            order: 7,
            title: {
              en: 'Amplitude',
              hi: 'आयाम (एंप्लीटुड)',
              bn: 'বিস্তার (অ্যাম্প্লিচিউড)'
            }
          },
          {
            id: 'tp-instantaneous-value',
            chapterId: 'ch-ac-fundamentals',
            order: 8,
            title: {
              en: 'Instantaneous Value',
              hi: 'तात्क्षणिक मान',
              bn: 'তাৎক্ষণিক মান'
            }
          },
          {
            id: 'tp-average-value',
            chapterId: 'ch-ac-fundamentals',
            order: 9,
            title: {
              en: 'Average Value',
              hi: 'औसत मान (एवरेज वैल्यू)',
              bn: 'গড় মান (অ্যাভারেজ ভ্যালু)'
            }
          },
          {
            id: 'tp-rms-value',
            chapterId: 'ch-ac-fundamentals',
            order: 10,
            title: {
              en: 'RMS Value',
              hi: 'आरएमएस मान (RMS Value)',
              bn: 'আরএমএস মান (RMS ভ্যালু)'
            }
          },
          {
            id: 'tp-form-factor',
            chapterId: 'ch-ac-fundamentals',
            order: 11,
            title: {
              en: 'Form Factor',
              hi: 'फॉर्म फैक्टर',
              bn: 'ফর্ম ফ্যাক্টর'
            }
          },
          {
            id: 'tp-peak-factor',
            chapterId: 'ch-ac-fundamentals',
            order: 12,
            title: {
              en: 'Peak Factor',
              hi: 'पीक फैक्टर',
              bn: 'পিক ফ্যাক্টর'
            }
          },
          {
            id: 'tp-phase-difference',
            chapterId: 'ch-ac-fundamentals',
            order: 13,
            title: {
              en: 'Phase & Phase Difference',
              hi: 'कला एवं कलांतर (फेज एवं फेज अंतर)',
              bn: 'ফেজ ও ফেজ পার্থক্য'
            }
          }
        ]
      },
      {
        id: 'ch-ac-circuits',
        subjectId: 'basic-electrical',
        order: 12,
        title: {
          en: 'Chapter 12: AC Circuits',
          hi: 'अध्याय 12: एसी परिपथ',
          bn: 'অধ্যায় ১২: এসি সার্কিট'
        },
        topics: [
          {
            id: 'tp-pure-resistive',
            chapterId: 'ch-ac-circuits',
            order: 1,
            title: {
              en: 'Pure Resistive Circuit',
              hi: 'शुद्ध प्रतिरोधी परिपथ',
              bn: 'পিওর রেজিস্ট্রিভ সার্কিট'
            }
          },
          {
            id: 'tp-pure-inductive',
            chapterId: 'ch-ac-circuits',
            order: 2,
            title: {
              en: 'Pure Inductive Circuit',
              hi: 'शुद्ध प्रेरक परिपथ',
              bn: 'পিওর ইন্ডাক্টিভ সার্কিট'
            }
          },
          {
            id: 'tp-pure-capacitive',
            chapterId: 'ch-ac-circuits',
            order: 3,
            title: {
              en: 'Pure Capacitive Circuit',
              hi: 'शुद्ध कैपेसिटिव परिपथ',
              bn: 'পিওর ক্যাপাসিটিভ সার্কিট'
            }
          },
          {
            id: 'tp-rl-circuit',
            chapterId: 'ch-ac-circuits',
            order: 4,
            title: {
              en: 'RL Circuit',
              hi: 'आरएल परिपथ (RL Circuit)',
              bn: 'আরএল সার্কিট (RL Circuit)'
            }
          },
          {
            id: 'tp-rc-circuit',
            chapterId: 'ch-ac-circuits',
            order: 5,
            title: {
              en: 'RC Circuit',
              hi: 'आरसी परिपथ (RC Circuit)',
              bn: 'আরসি সার্কিট (RC Circuit)'
            }
          },
          {
            id: 'tp-rlc-circuit',
            chapterId: 'ch-ac-circuits',
            order: 6,
            title: {
              en: 'RLC Circuit',
              hi: 'आरएलसी परिपथ (RLC Circuit)',
              bn: 'আরএলসি সার্কিট (RLC Circuit)'
            }
          },
          {
            id: 'tp-impedance',
            chapterId: 'ch-ac-circuits',
            order: 7,
            title: {
              en: 'Impedance',
              hi: 'प्रतिबाधा (इम्पीडेंस)',
              bn: 'ইম্পিডেন্স'
            }
          },
          {
            id: 'tp-reactance',
            chapterId: 'ch-ac-circuits',
            order: 8,
            title: {
              en: 'Reactance',
              hi: 'रिएक्टेंस',
              bn: 'রিয়্যাক্ট্যান্স'
            }
          },
          {
            id: 'tp-admittance-intro',
            chapterId: 'ch-ac-circuits',
            order: 9,
            title: {
              en: 'Admittance — Introduction',
              hi: 'प्रवेश्यता (एडमिटेंस) — परिचय',
              bn: 'অ্যাডমিট্যান্স — পরিচিতি'
            }
          },
          {
            id: 'tp-phasor-concept',
            chapterId: 'ch-ac-circuits',
            order: 10,
            title: {
              en: 'Phasor Concept',
              hi: 'फेजर अवधारणा',
              bn: 'ফেজর ধারণা'
            }
          },
          {
            id: 'tp-power-ac-circuit',
            chapterId: 'ch-ac-circuits',
            order: 11,
            title: {
              en: 'Power in AC Circuit',
              hi: 'एसी परिपथ में शक्ति',
              bn: 'এসি সার্কিটে পাওয়ার'
            }
          }
        ]
      },
      {
        id: 'ch-power-factor',
        subjectId: 'basic-electrical',
        order: 13,
        title: {
          en: 'Chapter 13: Power Factor',
          hi: 'अध्याय 13: पावर फैक्टर (शक्ति गुणांक)',
          bn: 'অধ্যায় ১৩: পাওয়ার ফ্যাক্টর'
        },
        topics: [
          {
            id: 'tp-pf-definition',
            chapterId: 'ch-power-factor',
            order: 1,
            title: {
              en: 'Definition of Power Factor',
              hi: 'पावर फैक्टर की परिभाषा',
              bn: 'পাওয়ার ফ্যাক্টরের সংজ্ঞায়ন'
            }
          },
          {
            id: 'tp-lagging-pf',
            chapterId: 'ch-power-factor',
            order: 2,
            title: {
              en: 'Lagging Power Factor',
              hi: 'लैगिंग पावर फैक्टर',
              bn: 'ল্যাগিং পাওয়ার ফ্যাক্টর'
            }
          },
          {
            id: 'tp-leading-pf',
            chapterId: 'ch-power-factor',
            order: 3,
            title: {
              en: 'Leading Power Factor',
              hi: 'लीडिंग पावर फैक्टर',
              bn: 'লিডিং পাওয়ার ফ্যাক্টর'
            }
          },
          {
            id: 'tp-unity-pf',
            chapterId: 'ch-power-factor',
            order: 4,
            title: {
              en: 'Unity Power Factor',
              hi: 'यूनिटी पावर फैक्टर',
              bn: 'ইউনিটি পাওয়ার ফ্যাক্টর'
            }
          },
          {
            id: 'tp-active-power',
            chapterId: 'ch-power-factor',
            order: 5,
            title: {
              en: 'Active Power',
              hi: 'एक्टिव पावर (वास्तविक शक्ति)',
              bn: 'অ্যাক্টিভ পাওয়ার (প্রকৃত শক্তি)'
            }
          },
          {
            id: 'tp-reactive-power',
            chapterId: 'ch-power-factor',
            order: 6,
            title: {
              en: 'Reactive Power',
              hi: 'रिएक्टिव पावर (प्रतिघाती शक्ति)',
              bn: 'রিয়্যাক্টিভ পাওয়ার (প্রতিক্রিয়াশীল শক্তি)'
            }
          },
          {
            id: 'tp-apparent-power',
            chapterId: 'ch-power-factor',
            order: 7,
            title: {
              en: 'Apparent Power',
              hi: 'एपेरेंट पावर (आभासी शक्ति)',
              bn: 'অ্যাপারেন্ট পাওয়ার (আপাত শক্তি)'
            }
          },
          {
            id: 'tp-power-triangle',
            chapterId: 'ch-power-factor',
            order: 8,
            title: {
              en: 'Power Triangle',
              hi: 'पावर ट्रायंगल (शक्ति त्रिभुज)',
              bn: 'পাওয়ার ট্রায়াঙ্গেল'
            }
          },
          {
            id: 'tp-pf-calculation',
            chapterId: 'ch-power-factor',
            order: 9,
            title: {
              en: 'Power Factor Calculation',
              hi: 'पावर फैक्टर की गणना',
              bn: 'পাওয়ার ফ্যাক্টর গণনা'
            }
          },
          {
            id: 'tp-pf-improvement-intro',
            chapterId: 'ch-power-factor',
            order: 10,
            title: {
              en: 'Power Factor Improvement — Introduction',
              hi: 'पावर फैक्टर सुधार — परिचय',
              bn: 'পাওয়ার ফ্যাক্টর উন্নয়ন — পরিচিতি'
            }
          }
        ]
      },
      {
        id: 'ch-three-phase',
        subjectId: 'basic-electrical',
        order: 14,
        title: {
          en: 'Chapter 14: Three-Phase Fundamentals',
          hi: 'अध्याय 14: थ्री-फेज मूलभूत सिद्धांत',
          bn: 'অধ্যায় ১৪: থ্রি-ফেজ মৌলিক ভিত্তি'
        },
        topics: [
          {
            id: 'tp-single-vs-three-phase',
            chapterId: 'ch-three-phase',
            order: 1,
            title: {
              en: 'Single Phase vs Three Phase',
              hi: 'सिंगल फेज बनाम थ्री फेज',
              bn: 'সিঙ্গেল ফেজ বনাম থ্রি ফেজ'
            }
          },
          {
            id: 'tp-three-phase-supply',
            chapterId: 'ch-three-phase',
            order: 2,
            title: {
              en: 'Three-Phase Supply',
              hi: 'थ्री-फेज सप्लाई',
              bn: 'থ্রি-ফেজ সরবরাহ'
            }
          },
          {
            id: 'tp-star-connection',
            chapterId: 'ch-three-phase',
            order: 3,
            title: {
              en: 'Star (Y) Connection',
              hi: 'स्टार (Y) कनेक्शन',
              bn: 'স্টার (Y) কানেকশন'
            }
          },
          {
            id: 'tp-delta-connection',
            chapterId: 'ch-three-phase',
            order: 4,
            title: {
              en: 'Delta (Δ) Connection',
              hi: 'डेल्टा (Δ) कनेक्शन',
              bn: 'ডেল্টা (Δ) কানেকশন'
            }
          },
          {
            id: 'tp-line-voltage',
            chapterId: 'ch-three-phase',
            order: 5,
            title: {
              en: 'Line Voltage',
              hi: 'लाइन वोल्टेज',
              bn: 'লাইন ভোল্টেজ'
            }
          },
          {
            id: 'tp-phase-voltage',
            chapterId: 'ch-three-phase',
            order: 6,
            title: {
              en: 'Phase Voltage',
              hi: 'फेज वोल्टेज',
              bn: 'ফেজ ভোল্টেজ'
            }
          },
          {
            id: 'tp-line-current',
            chapterId: 'ch-three-phase',
            order: 7,
            title: {
              en: 'Line Current',
              hi: 'लाइन करंट',
              bn: 'লাইন কারেন্ট'
            }
          },
          {
            id: 'tp-phase-current',
            chapterId: 'ch-three-phase',
            order: 8,
            title: {
              en: 'Phase Current',
              hi: 'फेज करंट',
              bn: 'ফেজ কারেন্ট'
            }
          },
          {
            id: 'tp-star-delta-rel',
            chapterId: 'ch-three-phase',
            order: 9,
            title: {
              en: 'Star-Delta Relationship',
              hi: 'स्टार-डेल्टा संबंध',
              bn: 'স্টার-ডেল্টা সম্পর্ক'
            }
          },
          {
            id: 'tp-three-phase-power',
            chapterId: 'ch-three-phase',
            order: 10,
            title: {
              en: 'Three-Phase Power',
              hi: 'थ्री-फेज पावर',
              bn: 'থ্রি-ফেজ পাওয়ার'
            }
          },
          {
            id: 'tp-balanced-load',
            chapterId: 'ch-three-phase',
            order: 11,
            title: {
              en: 'Balanced Load',
              hi: 'बैलेंस्ड लोड (संतुलित भार)',
              bn: 'ব্যালেন্সড লোড'
            }
          }
        ]
      },
      {
        id: 'ch-electrical-safety',
        subjectId: 'basic-electrical',
        order: 15,
        title: {
          en: 'Chapter 15: Electrical Safety Basics',
          hi: 'अध्याय 15: विद्युत सुरक्षा मूलभूत बातें',
          bn: 'অধ্যায় ১৫: বৈদ্যুতিক নিরাপত্তা ভিত্তি'
        },
        topics: [
          {
            id: 'tp-electric-shock',
            chapterId: 'ch-electrical-safety',
            order: 1,
            title: {
              en: 'Electric Shock',
              hi: 'इलेक्ट्रिक शौक (विद्युत झटका)',
              bn: 'ইলেকট্রিক শক'
            }
          },
          {
            id: 'tp-causes-electrical-accidents',
            chapterId: 'ch-electrical-safety',
            order: 2,
            title: {
              en: 'Causes of Electrical Accidents',
              hi: 'विद्युत दुर्घटनाओं के कारण',
              bn: 'বৈদ্যুতিক দুর্ঘটনার কারণসমূহ'
            }
          },
          {
            id: 'tp-earthing-concept',
            chapterId: 'ch-electrical-safety',
            order: 3,
            title: {
              en: 'Earthing — Basic Concept',
              hi: 'अर्थिंग — मूल अवधारणा',
              bn: 'আর্থিং — মৌলিক ধারণা'
            }
          },
          {
            id: 'tp-fuse',
            chapterId: 'ch-electrical-safety',
            order: 4,
            title: {
              en: 'Fuse',
              hi: 'फ्यूज',
              bn: 'ফিউজ'
            }
          },
          {
            id: 'tp-mcb-concept',
            chapterId: 'ch-electrical-safety',
            order: 5,
            title: {
              en: 'MCB — Basic Concept',
              hi: 'एमसीबी (MCB) — मूल अवधारणा',
              bn: 'এমসিবি (MCB) — মৌলিক ধারণা'
            }
          },
          {
            id: 'tp-rccb-elcb-concept',
            chapterId: 'ch-electrical-safety',
            order: 6,
            title: {
              en: 'RCCB/ELCB — Basic Concept',
              hi: 'आरसीसीबी/इएलसीबी — मूल अवधारणा',
              bn: 'আরসিসিবি/ইএলসিবি — মৌলিক ধারণা'
            }
          },
          {
            id: 'tp-electrical-isolation',
            chapterId: 'ch-electrical-safety',
            order: 7,
            title: {
              en: 'Electrical Isolation',
              hi: 'विद्युत पृथक्करण (आइसोलेशन)',
              bn: 'বৈদ্যুতিক আইসোলেশন'
            }
          },
          {
            id: 'tp-safe-working-practices',
            chapterId: 'ch-electrical-safety',
            order: 8,
            title: {
              en: 'Safe Working Practices',
              hi: 'सुरक्षित कार्य पद्धतियाँ',
              bn: 'নিরাপদ কাজের নিয়মাবলী'
            }
          },
          {
            id: 'tp-basic-ppe',
            chapterId: 'ch-electrical-safety',
            order: 9,
            title: {
              en: 'Basic PPE',
              hi: 'बुनियादी पीपीई (PPE)',
              bn: 'মৌলিক পিপিই (PPE)'
            }
          },
          {
            id: 'tp-first-response-accidents',
            chapterId: 'ch-electrical-safety',
            order: 10,
            title: {
              en: 'First Response to Electrical Accidents',
              hi: 'विद्युत दुर्घटनाओं पर प्राथमिक प्रतिक्रिया',
              bn: 'বৈদ্যুতিক দুর্ঘটনায় প্রাথমিক চিকিৎসা ও প্রতিক্রিয়া'
            }
          }
        ]
      }
    ]
  }
];

export const DETAILED_SUBJECTS: DetailedSubject[] = RAW_DETAILED_SUBJECTS.map((subject) => {
  if (subject.id !== 'basic-electrical') return subject;
  return {
    ...subject,
    chapters: subject.chapters.map((chapter) => {
      if (chapter.id === 'ch-elec-fund') {
        return {
          ...chapter,
          topics: chapter.topics.map((topic) => ({
            ...topic,
            lesson: CHAPTER_1_LESSONS[topic.id] || topic.lesson
          }))
        };
      }
      if (chapter.id === 'ch-ohms-circuits') {
        return {
          ...chapter,
          topics: chapter.topics.map((topic) => ({
            ...topic,
            lesson: CHAPTER_2_LESSONS[topic.id] || topic.lesson
          }))
        };
      }
      return chapter;
    })
  };
});

export function getDetailedSubject(subjectId: string): DetailedSubject | undefined {
  return DETAILED_SUBJECTS.find(s => s.id === subjectId || s.slug === subjectId);
}

export interface TopicContext {
  subject: DetailedSubject;
  chapter: Chapter;
  topic: Topic;
  lesson?: Lesson;
  topicIndex: number;
  totalTopics: number;
  prevTopic?: Topic;
  nextTopic?: Topic;
}

export function getTopicContext(topicId: string): TopicContext | undefined {
  for (const subject of DETAILED_SUBJECTS) {
    for (const chapter of subject.chapters) {
      const topicIdx = chapter.topics.findIndex(t => 
        t.id === topicId || 
        (t.lesson && (t.lesson.id === topicId || t.lesson.topicId === topicId))
      );
      if (topicIdx !== -1) {
        const topic = chapter.topics[topicIdx];
        const prevTopic = topicIdx > 0 ? chapter.topics[topicIdx - 1] : undefined;
        const nextTopic = topicIdx < chapter.topics.length - 1 ? chapter.topics[topicIdx + 1] : undefined;
        return {
          subject,
          chapter,
          topic,
          lesson: topic.lesson,
          topicIndex: topicIdx + 1,
          totalTopics: chapter.topics.length,
          prevTopic,
          nextTopic
        };
      }
    }
  }
  return undefined;
}

