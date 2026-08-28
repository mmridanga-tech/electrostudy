import { DetailedSubject } from '../types';

export const MEASUREMENTS_SUBJECT: DetailedSubject = {
  id: 'electrical-measurements',
  slug: 'electrical-measurements',
  icon: 'Gauge',
  title: {
    en: 'Electrical Measurements & Instrumentation',
    hi: 'इलेक्ट्रिकल मापन एवं यंत्र (Instrumentation)',
    bn: 'ইলেকট্রিক্যাল মেজারমেন্টস ও ইনস্ট্রুমেন্টেশন'
  },
  description: {
    en: 'Comprehensive engineering curriculum covering Error Analysis, Analog PMMC & MI Meters, Wattmeters, Energy Meters, DC/AC Bridges, CRO/DSO, and Modern Industrial Transducers.',
    hi: 'मापन त्रुटियां, PMMC एवं MI मीटर, वाटमीटर, एनर्जी मीटर, डीसी/एसी ब्रिज, CRO/DSO और औद्योगिक ट्रांसड्यूसर का संपूर्ण इंजीनियरिंग पाठ्यक्रम।',
    bn: 'মেজারমেন্ট ত্রুটি বিশ্লেষণ, PMMC ও MI মিটার, ওয়াটমিটার, এনার্জি মিটার, ডিসি ও এসি ব্রিজ, CRO/DSO এবং আধুনিক সেন্সর ও ট্রান্সডিউসারের সম্পূর্ণ সিলেবাস।'
  },
  chapters: [
    {
      id: 'meas-ch1-fundamentals',
      subjectId: 'electrical-measurements',
      order: 1,
      title: {
        en: 'Module 1: Measurement Fundamentals & Error Analysis',
        hi: 'मॉड्यूल 1: मापन के मूलभूत सिद्धांत एवं त्रुटि विश्लेषण',
        bn: 'মডিউল ১: পরিমাপের মূলভিত্তি ও ত্রুটি বিশ্লেষণ'
      },
      topics: [
        {
          id: 'meas-tp1-errors-characteristics',
          chapterId: 'meas-ch1-fundamentals',
          order: 1,
          level: 'Foundation',
          title: {
            en: '1. Static Characteristics & Measurement Errors',
            hi: '1. स्थैतिक विशेषताएं एवं मापन त्रुटियां',
            bn: '১. স্ট্যাটিক বৈশিষ্ট্য ও পরিমাপের ত্রুটিসমূহ'
          },
          description: {
            en: 'Accuracy, Precision, Sensitivity, Linearity, Drift, Gross errors, Systematic errors, Random errors, and Limiting error calculations.',
            hi: 'सटीकता (Accuracy), यथार्थता (Precision), सुग्राहिता (Sensitivity), सकल त्रुटियां, व्यवस्थित त्रुटियां और सीमित त्रुटि (Limiting Error)।',
            bn: 'অ্যাকুরেসি, প্রিসিশন, সংবেদনশীলতা, লিনিয়ারিটি, গ্রস ত্রুটি, সিস্টেমেটিক ত্রুটি ও লিমিটিং এরর নির্ণয়।'
          },
          lesson: {
            id: 'lesson-meas-tp1',
            topicId: 'meas-tp1-errors-characteristics',
            title: {
              en: 'Static Characteristics & Error Analysis in Measurements',
              hi: 'मापन में स्थैतिक विशेषताएं एवं त्रुटि विश्लेषण',
              bn: 'পরিমাপের স্ট্যাটিক বৈশিষ্ট্য ও ত্রুটি বিশ্লেষণ'
            },
            description: {
              en: 'Mathematical concepts of Accuracy, Precision, Resolution, Systematic vs Random errors, and absolute/relative limiting errors.',
              hi: 'सटीकता, यथार्थता, रेजोल्यूशन और सीमित त्रुटियों की गणितीय अवधारणाएं।',
              bn: 'অ্যাকুরেসি, প্রিসিশন, রেজোলিউশন এবং পরম ও আপেক্ষিক লিমিটিং এররের গাণিতিক বিশ্লেষণ।'
            },
            detailedExplanation: {
              en: 'Measurement is the quantitative comparison between an unknown quantity and a predefined standard. The quality of a measuring instrument is determined by its static characteristics:\n\n1. Accuracy: Closeness of the measured value to the true value.\n2. Precision: Measure of reproducibility and consistency of repeated readings under identical conditions.\n3. Sensitivity (S): Ratio of output response (deflection) to change in measured input quantity (S = dθ / dI in mm/μA or scale-divisions/Volt).\n4. Resolution: The smallest change in input quantity that produces a detectable change in the instrument output.\n5. Limiting Error (Guarantee Error): Manufacturers specify accuracy as a percentage of full-scale deflection (FSD). If an instrument has a guaranteed accuracy of ±1% of full scale (say 100V), the absolute limiting error is ±1V at any reading across the scale. When measuring 10V, the relative limiting error becomes ±(1V / 10V) × 100 = ±10%!',
              hi: 'मापन अज्ञात राशि और पूर्व-निर्धारित मानक के बीच मात्रात्मक तुलना है। उपकरण की गुणवत्ता उसकी विशेषताओं पर निर्भर करती है:\n1. शुद्धता (Accuracy): मापे गए मान का वास्तविक मान के निकट होना।\n2. परिशुद्धता (Precision): एक ही परिस्थिति में बार-बार लिए गए पाठ्यांकों की एकरूपता।\n3. सुग्राहिता (Sensitivity): आउटपुट विक्षेप और इनपुट में परिवर्तन का अनुपात (S = dθ/dI)।\n4. रेजोल्यूशन (Resolution): इनपुट का वह न्यूनतम परिवर्तन जिसे मीटर पहचान सके।\n5. सीमित त्रुटि (Limiting Error): यदि 100V मीटर की सटीकता ±1% FSD है, तो 10V नापने पर वास्तविक त्रुटि ±10% हो जाती है!',
              bn: 'পরিমাপ হলো কোনো অজানা রাশির সাথে পূর্ব-নির্ধারিত আন্তর্জাতিক মানের তুলনা। এর গুরুত্বপূর্ণ বৈশিষ্ট্যসমূহ:\n১. অ্যাকুরেসি (Accuracy): পরিমাপকৃত মান প্রকৃত মানের কতটা কাছাকাছি।\n২. প্রিসিশন (Precision): একই শর্তে একাধিকবার পরিমাপের মানের পুনরাবৃত্তি ও সামঞ্জস্য।\n৩. সেনসিটিভিটি (Sensitivity): ইনপুটের পরিবর্তনের সাপেক্ষে আউটপুট ডিফ্লেকশনের অনুপাত (S = dθ/dI)।\n৪. রেজোলিউশন (Resolution): ইনপুটের ক্ষুদ্রতম যে পরিবর্তনের জন্য মিটারে প্রতিক্রিয়া দেখা যায়।\n৫. লিমিটিং এরর (Limiting Error): ফুল-স্কেল ডিফ্লেকশনের (FSD) শতকরা হিসেবে ঘোষিত নির্ভুলতা। ১০০V মিটারে ±১% FSD ত্রুটি থাকলে ১০V পরিমাপে আপেক্ষিক ত্রুটি বেড়ে ±১০% হয়ে যায়!'
            },
            formulas: [
              {
                id: 'f-abs-error',
                name: { en: 'Absolute Error', hi: 'निरपेक्ष त्रुटि', bn: 'পরম ত্রুটি' },
                formula: '\\delta A = A_m - A_t',
                description: {
                  en: 'Absolute Error (Am = Measured Value, At = True Value)',
                  hi: 'निरपेक्ष त्रुटि (Am = मापा गया मान, At = वास्तविक मान)',
                  bn: 'পরম ত্রুটি (Am = পরিমাপকৃত মান, At = প্রকৃত মান)'
                }
              },
              {
                id: 'f-rel-error',
                name: { en: 'Relative Percentage Error', hi: 'सापेक्ष प्रतिशत त्रुटि', bn: 'আপেক্ষিক শতাংশ ত্রুটি' },
                formula: '\\%\\epsilon_r = \\frac{A_m - A_t}{A_t} \\times 100\\%',
                description: {
                  en: 'Relative Percentage Error with respect to True Value',
                  hi: 'वास्तविक मान के सापेक्ष प्रतिशत त्रुटि',
                  bn: 'প্রকৃত মানের সাপেক্ষে আপেক্ষিক শতকরা ত্রুটি'
                }
              },
              {
                id: 'f-limiting-error',
                name: { en: 'Limiting Error at Partial Reading', hi: 'आंशिक रीडिंग पर सीमित त्रुटि', bn: 'আংশিক পাঠে লিমিটিং এরর' },
                formula: '\\%\\epsilon_{\\text{reading}} = \\left( \\frac{\\text{FSD}}{\\text{Reading}} \\right) \\times (\\%\\text{Accuracy}_{\\text{FSD}})',
                description: {
                  en: 'Relative Limiting Error at Partial Scale Reading',
                  hi: 'पैमाने के किसी आंशिक मान पर सापेक्ष सीमित त्रुटि',
                  bn: 'স্কেলের যেকোনো নির্দিষ্ট পাঠে আপেক্ষিক লিমিটিং এরর'
                }
              },
              {
                id: 'f-combined-errors',
                name: { en: 'Error Propagation in Products', hi: 'गुणनफल में त्रुटि संयोजन', bn: 'গুণফলে ত্রুটির বিস্তার' },
                formula: 'X = A \\times B \\implies \\frac{\\delta X}{X} = \\pm \\left( \\frac{\\delta A}{A} + \\frac{\\delta B}{B} \\right)',
                description: {
                  en: 'Worst-case Error Propagation for Product & Quotient',
                  hi: 'गुणन एवं भाग में अधिकतम संभावित त्रुटि फैलाव',
                  bn: 'গুণ ও ভাগের ক্ষেত্রে সর্বোচ্চ সম্ভাব্য ত্রুটি সংযোজন'
                }
              }
            ],
            solvedExamples: [
              {
                id: 'ex-meas-1',
                problem: {
                  en: 'A 0–150V voltmeter has a guaranteed accuracy of 1% of full-scale reading. The voltage measured by this instrument is 75V. Calculate the limiting error in percentage at this reading.',
                  hi: 'एक 0-150V वोल्टमीटर की पूर्ण-पैमाने पर गारंटीड सटीकता 1% है। इसके द्वारा 75V मापा गया। इस रीडिंग पर प्रतिशत सीमित त्रुटि ज्ञात कीजिए।',
                  bn: 'একটি ০-১৫০V ভোল্টমিটারের ফুল স্কেলে ঘোষিত অ্যাকুরেসি ১%। মিটারটি দ্বারা ৭৫V পরিমাপ করা হলে উক্ত পাঠে শতকরা লিমিটিং এরর কত?'
                },
                solution: {
                  en: 'Step 1: Full scale deflection (FSD) = 150 V\nStep 2: Absolute limiting error = ±1% of 150 V = ±(0.01 × 150) = ±1.5 V\nStep 3: Percentage limiting error at 75V = (±1.5 V / 75 V) × 100% = ±2.0%',
                  hi: 'चरण 1: पूर्ण पैमाना (FSD) = 150 V\nचरण 2: निरपेक्ष सीमित त्रुटि = ±1% of 150 V = ±1.5 V\nचरण 3: 75V पर प्रतिशत सीमित त्रुटि = (±1.5 / 75) × 100% = ±2.0%',
                  bn: 'ধাপ ১: ফুল স্কেল ডিফ্লেকশন (FSD) = ১৫০ V\nধাপ ২: পরম লিমিটিং এরর = ±১% of ১৫০ V = ±১.৫ V\nধাপ ৩: ৭৫V পাঠে শতকরা লিমিটিং এরর = (±১.৫ / ৭৫) × ১০০% = ±২.০%'
                },
                givenValues: { 'FSD': '150 V', 'Guaranteed Accuracy': '±1% FSD', 'Measured Value': '75 V' },
                finalAnswer: {
                  en: 'Limiting Error at 75V = ±2.0%',
                  hi: '75V पर सीमित त्रुटि = ±2.0%',
                  bn: '৭৫V পাঠে লিমিটিং এরর = ±২.০%'
                }
              }
            ],
            mcqs: [
              {
                id: 'mcq-meas-1',
                question: {
                  en: 'If a 0-200V voltmeter having ±2% accuracy at full scale is used to measure 50V, the percentage limiting error will be:',
                  hi: 'यदि 0-200V वोल्टमीटर (±2% FSD सटीकता) का उपयोग 50V मापने के लिए किया जाए, तो प्रतिशत सीमित त्रुटि होगी:',
                  bn: 'যদি একটি ০-২০০V ভোল্টমিটারের (±২% FSD নির্ভুলতা) সাহায্যে ৫০V মাপা হয়, তবে শতকরা লিমিটিং এরর হবে:'
                },
                options: [
                  { id: 'opt-1', text: { en: '±2%', hi: '±2%', bn: '±২%' } },
                  { id: 'opt-2', text: { en: '±4%', hi: '±4%', bn: '±৪%' } },
                  { id: 'opt-3', text: { en: '±8%', hi: '±8%', bn: '±৮%' } },
                  { id: 'opt-4', text: { en: '±1%', hi: '±1%', bn: '±১%' } }
                ],
                correctOptionId: 'opt-3',
                explanation: {
                  en: 'Absolute error = 2% of 200V = ±4V. At 50V reading, relative limiting error = (±4V / 50V) × 100% = ±8%.',
                  hi: 'निरपेक्ष त्रुटि = 200V का 2% = ±4V। 50V पर सापेक्ष त्रुटि = (±4V / 50V) × 100% = ±8%।',
                  bn: 'পরম ত্রুটি = ২০০V এর ২% = ±৪V। ৫০V পাঠে আপেক্ষিক ত্রুটি = (±৪V / ৫০V) × ১০০% = ±৮%।'
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 'meas-ch2-analog-meters',
      subjectId: 'electrical-measurements',
      order: 2,
      title: {
        en: 'Module 2: Analog Indicating Meters (PMMC, MI & Dynamometer)',
        hi: 'मॉड्यूल 2: एनालॉग इंडिकेटिंग मीटर (PMMC, MI एवं डायनेमोमीटर)',
        bn: 'মডিউল ২: অ্যানালগ মিটার (PMMC, MI ও ডায়নামোমিটার)'
      },
      topics: [
        {
          id: 'meas-tp2-pmmc-instruments',
          chapterId: 'meas-ch2-analog-meters',
          order: 1,
          level: 'Core',
          title: {
            en: '2. Permanent Magnet Moving Coil (PMMC) Instruments',
            hi: '2. स्थायी चुंबक मूविंग कॉइल (PMMC) यंत्र',
            bn: '২. পার্মানেন্ট ম্যাগনেট মুভিং কয়েল (PMMC) মিটার'
          },
          description: {
            en: 'Deflecting torque equation (Td = BINA), linear scale, eddy current damping, phosphor bronze spring control, DC only operation, and Shunts/Multipliers.',
            hi: 'विक्षेपक बलआघूर्ण (Td = BINA), रैखिक पैमाना, भंवर धारा डैम्पिंग, केवल डीसी उपयोग, शंट एवं मल्टीप्लायर।',
            bn: 'ডিফ্লেক্টিং টর্ক (Td = BINA), লিনিয়ার স্কেল, এডি কারেন্ট ড্যাম্পিং, স্প্রিং কন্ট্রোল, কেবল ডিসি ব্যবহার ও শান্ট/মাল্টিপ্লায়ার।'
          },
          lesson: {
            id: 'lesson-meas-tp2',
            topicId: 'meas-tp2-pmmc-instruments',
            title: {
              en: 'PMMC Instruments & Range Extension (Shunts & Multipliers)',
              hi: 'PMMC यंत्र एवं रेंज विस्तार (शंट और मल्टीप्लायर)',
              bn: 'PMMC মিটার ও রেঞ্জ সম্প্রসারণ (শান্ট ও মাল্টিপ্লায়ার)'
            },
            description: {
              en: 'Operating principles of PMMC meters, torque equations, linear deflection, and extension of ammeter and voltmeter measuring ranges.',
              hi: 'PMMC मीटर का कार्य सिद्धांत, टॉर्क समीकरण, रैखिक विक्षेप और एमीटर व वोल्टमीटर का परास विस्तार।',
              bn: 'PMMC মিটারের কার্যপ্রণালী, টর্ক সমীকরণ এবং অ্যামিটার ও ভোল্টমিটারের রেঞ্জ বৃদ্ধির কৌশল।'
            },
            detailedExplanation: {
              en: 'PMMC instruments work on D\'Arsonval principle: when a current-carrying coil of N turns is placed in a uniform radial magnetic field (B), Lorentz force acts on the coil sides, generating deflecting torque:\n\n$$T_d = B \\cdot I \\cdot N \\cdot A$$\n\nControl torque is provided by phosphor-bronze hairsprings ($T_c = C \\cdot \\theta$). At steady-state equilibrium ($T_d = T_c$):\n$$\\theta = \\left( \\frac{B \\cdot N \\cdot A}{C} \\right) I \\implies \\theta \\propto I$$\n\nBecause deflection $\\theta$ is directly proportional to current $I$, PMMC meters have a perfectly linear (uniform) scale. If AC is applied, the instantaneous torque alternates sinusoidally at 50 Hz, and due to pointer inertia, the average deflection is zero (pointer vibrates around zero).\n\nRange Extension:\n1. Ammeter Shunt: A low-resistance manganin resistor ($R_{sh}$) connected in parallel with the meter ($R_m$):\n$$R_{sh} = \\frac{R_m}{m - 1}, \\quad \\text{where } m = \\frac{I}{I_m} \\text{ (Multiplying factor)}$$\n2. Voltmeter Multiplier: A high-resistance non-inductive manganin resistor ($R_{se}$) connected in series with the meter:\n$$R_{se} = R_m (m - 1), \\quad \\text{where } m = \\frac{V}{V_m}$$',
              hi: 'PMMC मीटर डी\'अर्सोनवल सिद्धांत पर कार्य करता है। जब चुंबकीय क्षेत्र (B) में धारावाही कॉइल रखी जाती है, तो उस पर टॉर्क $T_d = BINA$ लगता है।\nस्प्रिंग द्वारा नियंत्रण टॉर्क $T_c = C\\theta$ प्रदान किया जाता है।\nसंतुलन पर: $\\theta \\propto I$, जिससे इसका पैमाना पूर्णतः रैखिक (Linear) होता है।\nएसी धारा देने पर औसत टॉर्क शून्य होने से पॉइंटर शून्य पर कांपता है।\n\nरेंज विस्तार:\n- एमीटर शंट: $R_{sh} = \\frac{R_m}{m-1}$ (समानांतर में कम प्रतिरोध)\n- वोल्टमीटर मल्टीप्लायर: $R_{se} = R_m(m-1)$ (श्रेणी में उच्च प्रतिरोध)',
              bn: 'PMMC মিটার ডি\'আর্সনভাল নীতিতে কাজ করে। সুষম চৌম্বক ক্ষেত্রে কারেন্টযুক্ত কয়েল স্থাপন করলে ডিফ্লেক্টিং টর্ক $T_d = BINA$ উৎপন্ন হয়।\nস্প্রিং কন্ট্রোল টর্ক $T_c = C\\theta$।\nভারসাম্যাবস্থায়: $\\theta \\propto I$, তাই PMMC এর স্কেল সম্পূর্ণ লিনিয়ার (সুষম) হয়। এসি প্রয়োগ করলে গড় টর্ক শূন্য হওয়ায় পয়েন্টার নড়ে না।\n\nরেঞ্জ বৃদ্ধি:\n- অ্যামিটার শান্ট: $R_{sh} = \\frac{R_m}{m-1}$ (কয়েলের সাথে প্যারালালে স্বল্প মানের রোধ)\n- ভোল্টমিটার মাল্টিপ্লায়ার: $R_{se} = R_m(m-1)$ (সিরিজে উচ্চ মানের রোধ)'
            },
            formulas: [
              {
                id: 'f-pmmc-td',
                name: { en: 'PMMC Deflecting Torque', hi: 'PMMC विक्षेपक टॉर्क', bn: 'PMMC ডিফ্লেক্টিং টর্ক' },
                formula: 'T_d = B \\cdot I \\cdot N \\cdot A = G \\cdot I',
                description: {
                  en: 'PMMC Deflecting Torque (B = Flux density, I = Current, N = Turns, A = Area)',
                  hi: 'PMMC विक्षेपक टॉर्क (B = फ्लक्स घनत्व, I = धारा, N = फेरे, A = क्षेत्रफल)',
                  bn: 'PMMC ডিফ্লেক্টিং টর্ক সমীকরণ'
                }
              },
              {
                id: 'f-shunt-res',
                name: { en: 'Ammeter Shunt Resistance', hi: 'एमीटर शंट प्रतिरोध', bn: 'অ্যামিটার শান্ট রোধ' },
                formula: 'R_{sh} = \\frac{R_m}{m - 1} = \\frac{I_m R_m}{I - I_m}',
                description: {
                  en: 'Ammeter Shunt Resistance for Multiplier Factor m = I / Im',
                  hi: 'एमीटर शंट प्रतिरोध सूत्र',
                  bn: 'শান্ট রোধ নির্ণয়ের সূত্র'
                }
              },
              {
                id: 'f-multiplier-res',
                name: { en: 'Voltmeter Multiplier Resistance', hi: 'वोल्टमीटर मल्टीप्लायर प्रतिरोध', bn: 'ভোল্টমিটার মাল্টিপ্লায়ার রোধ' },
                formula: 'R_{se} = R_m (m - 1) = \\frac{V - V_m}{I_m}',
                description: {
                  en: 'Voltmeter Multiplier Series Resistance for m = V / Vm',
                  hi: 'वोल्टमीटर श्रेणी मल्टीप्लायर प्रतिरोध सूत्र',
                  bn: 'ভোল্টমিটারের সিরিজ মাল্টিপ্লায়ার রোধ সূত্র'
                }
              }
            ],
            solvedExamples: [
              {
                id: 'ex-meas-pmmc-1',
                problem: {
                  en: 'A moving-coil galvanometer has an internal resistance of 25 Ω and gives full-scale deflection with 2 mA. Calculate (a) the shunt resistance required to convert it into a 0–10 A ammeter, and (b) the series resistance required to convert it into a 0–250 V voltmeter.',
                  hi: 'एक मूविंग कॉइल मीटर का आंतरिक प्रतिरोध 25 Ω है और यह 2 mA पर पूर्ण विक्षेप देता है। (a) इसे 0-10A एमीटर में बदलने हेतु शंट प्रतिरोध, एवं (b) इसे 0-250V वोल्टमीटर में बदलने हेतु मल्टीप्लायर प्रतिरोध ज्ञात करें।',
                  bn: 'একটি মুভিং কয়েল মিটারের অভ্যন্তরীণ রোধ ২৫ Ω এবং এটি ২ mA কারেন্টে ফুল স্কেল পাঠ দেয়। (ক) একে ০-১০A অ্যামিটারে রূপান্তরে শান্ট রোধ এবং (খ) ০-২৫০V ভোল্টমিটারে রূপান্তরে মাল্টিপ্লায়ার রোধ নির্ণয় করুন।'
                },
                solution: {
                  en: 'Part (a) Ammeter: m = I / Im = 10 / 0.002 = 5000\nRsh = Rm / (m - 1) = 25 / 4999 = 0.005001 Ω = 5.001 mΩ\n\nPart (b) Voltmeter: Vm = Im × Rm = 0.002 × 25 = 0.05 V\nm = V / Vm = 250 / 0.05 = 5000\nRse = Rm × (m - 1) = 25 × 4999 = 124,975 Ω = 124.98 kΩ',
                  hi: 'भाग (a) एमीटर: m = 10 / 0.002 = 5000\nRsh = 25 / 4999 = 5.001 mΩ\n\nभाग (b) वोल्टमीटर: Vm = 0.002 × 25 = 0.05 V\nm = 250 / 0.05 = 5000\nRse = 25 × 4999 = 124.98 kΩ',
                  bn: 'অংশ (ক) অ্যামিটার: m = ১০ / ০.০০২ = ৫০০০\nRsh = ২৫ / ৪৯৯৯ = ৫.০০১ mΩ\n\nঅংশ (খ) ভোল্টমিটার: Vm = ০.০০২ × ২৫ = ০.০৫ V\nm = ২৫০ / ০.০৫ = ৫০০০\nRse = ২৫ × ৪৯৯৯ = ১২৪.৯৮ kΩ'
                },
                givenValues: { 'Rm': '25 Ω', 'Im (FSD)': '2 mA', 'Target Current I': '10 A', 'Target Voltage V': '250 V' },
                finalAnswer: {
                  en: 'Rsh = 5.001 mΩ, Rse = 124.98 kΩ',
                  hi: 'Rsh = 5.001 mΩ, Rse = 124.98 kΩ',
                  bn: 'Rsh = ৫.০০১ mΩ, Rse = ১২৪.৯৮ kΩ'
                }
              }
            ],
            mcqs: [
              {
                id: 'mcq-meas-2',
                question: {
                  en: 'Why does a PMMC instrument have a uniform (linear) scale?',
                  hi: 'PMMC मीटर का पैमाना एकसमान (रैखिक) क्यों होता है?',
                  bn: 'PMMC মিটারের স্কেল সুষম (লিনিয়ার) হয় কেন?'
                },
                options: [
                  { id: 'opt-1', text: { en: 'Because deflecting torque is proportional to the square of current (Td ∝ I²)', hi: 'क्योंकि टॉर्क धारा के वर्ग के समानुपाती होता है', bn: 'কারণ টর্ক কারেন্টের বর্গের সমানুপাতিক' } },
                  { id: 'opt-2', text: { en: 'Because deflecting torque is directly proportional to current (Td ∝ I) and control torque is linear (Tc ∝ θ)', hi: 'क्योंकि विक्षेपक टॉर्क धारा के समानुपाती (Td ∝ I) और नियंत्रण टॉर्क रैखिक (Tc ∝ θ) होता है', bn: 'কারণ ডিফ্লেক্টিং টর্ক কারেন্টের সমানুপাতিক (Td ∝ I) এবং স্প্রিং কন্ট্রোল টর্ক লিনিয়ার (Tc ∝ θ)' } },
                  { id: 'opt-3', text: { en: 'Because it uses eddy current damping', hi: 'क्योंकि यह भंवर धारा डैम्पिंग का उपयोग करता है', bn: 'কারণ এতে এডি কারেন্ট ড্যাম্পিং ব্যবহৃত হয়' } },
                  { id: 'opt-4', text: { en: 'Because it uses gravity control', hi: 'क्योंकि यह गुरुत्वाकर्षण नियंत्रण का उपयोग करता है', bn: 'কারণ এতে গ্র্যাভিটি কন্ট্রোল ব্যবহৃত হয়' } }
                ],
                correctOptionId: 'opt-2',
                explanation: {
                  en: 'In PMMC, Td = BINA and Tc = Cθ. At equilibrium BINA = Cθ, yielding θ ∝ I, which results in a linear scale.',
                  hi: 'PMMC में Td = BINA और Tc = Cθ होने से θ ∝ I प्राप्त होता है, जिससे पैमाना रैखिक बनता है।',
                  bn: 'PMMC এ Td = BINA এবং Tc = Cθ হওয়ায় সাম্যাবস্থায় θ ∝ I হয়, ফলে স্কেল সম্পূর্ণ লিনিয়ার হয়।'
                }
              }
            ]
          }
        },
        {
          id: 'meas-tp3-moving-iron-instruments',
          chapterId: 'meas-ch2-analog-meters',
          order: 2,
          level: 'Core',
          title: {
            en: '3. Moving Iron (MI) Instruments & Comparison',
            hi: '3. मूविंग आयरन (MI) यंत्र एवं तुलना',
            bn: '৩. মুভিং আয়রন (MI) মিটার ও তুলনা'
          },
          description: {
            en: 'Attraction & Repulsion types, square-law response (Td = 1/2 I² dL/dθ), non-linear cramped scale, True RMS measurement on AC & DC, Air friction damping.',
            hi: 'आकर्षण एवं प्रतिकर्षण प्रकार, वर्ग-नियम अनुक्रिया (Td = ½ I² dL/dθ), गैर-रैखिक पैमाना, AC एवं DC पर वास्तविक RMS मापन।',
            bn: 'অ্যাট্রাকশন ও রিপালশন টাইপ, বর্গ-নিয়ম টর্ক (Td = ½ I² dL/dθ), নন-লিনিয়ার ক্র্যাম্পড স্কেল এবং ট্রু আরএমএস (True RMS) পরিমাপ।'
          },
          lesson: {
            id: 'lesson-meas-tp3',
            topicId: 'meas-tp3-moving-iron-instruments',
            title: {
              en: 'Moving Iron (MI) Ammeters & Voltmeters (Attraction & Repulsion)',
              hi: 'मूविंग आयरन (MI) एमीटर एवं वोल्टमीटर',
              bn: 'মুভিং আয়রন (MI) অ্যামিটার ও ভোল্টমিটার'
            },
            description: {
              en: 'Working mechanism of moving iron meters, non-linear torque equation, frequency/hysteresis errors, and differences with PMMC.',
              hi: 'MI मीटर की कार्यप्रणाली, वर्ग नियम टॉर्क, हिस्टैरिसीस त्रुटियां और PMMC के साथ तुलना।',
              bn: 'মুভিং আয়রন মিটারের গঠন, বর্গ নিয়ম টর্ক সমীকরণ, এসি-ডিসি আরএমএস পরিমাপ ও PMMC এর সাথে তুলনা।'
            },
            detailedExplanation: {
              en: 'Moving Iron (MI) instruments are widely used in power engineering because they measure True RMS value on both AC and DC systems. They are categorized into:\n1. Attraction type: A soft iron disc is attracted into the core of a stationary current-carrying coil.\n2. Repulsion type: Two soft iron vanes (one fixed, one movable) are placed inside a coil. Current produces identical magnetic polarities in both vanes, causing mutual repulsion.\n\nTorque Equation:\n$$T_d = \\frac{1}{2} I^2 \\frac{dL}{d\\theta}$$\n\nEquating with spring control torque $T_c = C\\theta$:\n$$\\theta = \\frac{1}{2C} I^2 \\frac{dL}{d\\theta} \\implies \\theta \\propto I_{\\text{RMS}}^2$$\n\nKey Scale Characteristics:\n- Square-law scale: Cramped at the beginning (low values) and spread out at higher values.\n- Damping: Air friction damping in an enclosed chamber (eddy current damping cannot be used because permanent magnets would distort the coil field).\n- Errors on AC: Hysteresis error, Eddy current error, and Frequency variation.',
              hi: 'मूविंग आयरन (MI) मीटर एसी और डीसी दोनों पर True RMS मान मापते हैं।\nटॉर्क समीकरण: $T_d = \\frac{1}{2} I^2 \\frac{dL}{d\\theta}$\nसंतुलन पर: $\\theta \\propto I_{\\text{RMS}}^2$\n- पैमाना: वर्ग नियम (Square law) के कारण शुरुआत में संकुचित (cramped) और अंत में खुला होता है।\n- डैम्पिंग: वायु घर्षण (Air friction) डैम्पिंग का प्रयोग होता है।\n- आवृत्ति बढ़ने पर कॉइल की प्रतिघात ($X_L = 2\\pi f L$) बढ़ने से वोल्टमीटर में त्रुटि आती है।',
              bn: 'মুভিং আয়রন (MI) মিটার এসি ও ডিসি উভয় ব্যবস্থাতেই ট্রু আরএমএস (True RMS) মান পরিমাপ করে।\nটর্ক সমীকরণ: $T_d = \\frac{1}{2} I^2 \\frac{dL}{d\\theta}$\nভারসাম্যে: $\\theta \\propto I_{\\text{RMS}}^2$\n- স্কেল বৈশিষ্ট্য: স্কয়ার-ল হওয়ার কারণে স্কেলের শুরুর অংশ ঘন (Cramped) এবং শেষের অংশ ফাঁকা থাকে।\n- ড্যাম্পিং: এয়ার ফ্রিকশন ড্যাম্পিং চেম্বার ব্যবহৃত হয় (এডি কারেন্ট ড্যাম্পিং ব্যবহার করা যায় না)।\n- ফ্রিকোয়েন্সি বৃদ্ধি পেলে ভোল্টমিটার কয়েলের রিঅ্যাক্ট্যান্স ($X_L = 2\\pi f L$) বৃদ্ধি পেয়ে পরিমাপে ত্রুটি দেখা দেয়।'
            },
            formulas: [
              {
                id: 'f-mi-torque',
                name: { en: 'MI Deflecting Torque', hi: 'MI विक्षेपक टॉर्क', bn: 'MI ডিফ্লেক্টিং টর্ক' },
                formula: 'T_d = \\frac{1}{2} I^2 \\frac{dL}{d\\theta}',
                description: {
                  en: 'MI Deflecting Torque (dL/dθ = Rate of change of self inductance)',
                  hi: 'MI विक्षेपक टॉर्क समीकरण',
                  bn: 'MI মিটারের ডিফ্লেক্টিং টর্ক সমীকরণ'
                }
              },
              {
                id: 'f-mi-deflection',
                name: { en: 'Steady State Deflection Angle', hi: 'स्थिर अवस्था विक्षेप कोण', bn: 'ডিফ্লেকশন কোণ' },
                formula: '\\theta = \\frac{1}{2 C} I_{\\text{rms}}^2 \\frac{dL}{d\\theta}',
                description: {
                  en: 'Steady State Deflection Angle (Proportional to square of RMS current)',
                  hi: 'RMS धारा के वर्ग के समानुपाती विक्षेप कोण',
                  bn: 'আরএমএস কারেন্টের বর্গের সমানুপাতিক ডিফ্লেকশন'
                }
              }
            ],
            solvedExamples: [
              {
                id: 'ex-mi-1',
                problem: {
                  en: 'The inductance of a 25A moving iron ammeter is given by L = (10 + 5θ - θ²) μH, where θ is in radians. If the spring control constant is C = 12 × 10⁻⁶ Nm/rad, calculate the deflection in degrees for a current of 5 A.',
                  hi: 'एक 25A MI एमीटर का प्रेरकत्व L = (10 + 5θ - θ²) μH है (θ रेडियन में)। यदि स्प्रिंग नियतांक C = 12 × 10⁻⁶ Nm/rad है, तो 5A धारा के लिए विक्षेप (डिग्री में) ज्ञात कीजिए।',
                  bn: 'একটি ২৫A মুভিং আয়রন অ্যামিটারের ইন্ডাকট্যান্স L = (১০ + ৫θ - θ²) μH (θ রেডিয়ানে)। স্প্রিং কনস্ট্যান্ট C = ১২ × ১০⁻⁶ Nm/rad হলে ৫A কারেন্টের জন্য ডিফ্লেকশন ডিগ্রিতে নির্ণয় করুন।'
                },
                solution: {
                  en: 'Step 1: dL/dθ = d/dθ [10 + 5θ - θ²] = (5 - 2θ) × 10⁻⁶ H/rad\nStep 2: Torque balance: C θ = ½ I² (dL/dθ)\n12 × 10⁻⁶ × θ = ½ × (5)² × (5 - 2θ) × 10⁻⁶\n12 θ = 12.5 × (5 - 2θ) = 62.5 - 25 θ\n37 θ = 62.5 ⟹ θ = 1.689 radians\nStep 3: In degrees = 1.689 × (180 / π) = 96.8°',
                  hi: 'चरण 1: dL/dθ = (5 - 2θ) × 10⁻⁶ H/rad\nचरण 2: 12 × 10⁻⁶ × θ = ½ × 25 × (5 - 2θ) × 10⁻⁶\n37 θ = 62.5 ⟹ θ = 1.689 rad\nचरण 3: डिग्री में = 1.689 × (180 / π) = 96.8°',
                  bn: 'ধাপ ১: dL/dθ = (৫ - ২θ) × ১০⁻⁶ H/rad\nধাপ ২: ১২ × ১০⁻⁶ × θ = ½ × ২৫ × (৫ - ২θ) × ১০⁻⁶\n৩৭ θ = ৬২.৫ ⟹ θ = ১.৬৮৯ rad\nধাপ ৩: ডিগ্রিতে = ১.৬৮৯ × (১৮০ / π) = ৯৬.৮°'
                },
                givenValues: { 'L(θ)': '(10 + 5θ - θ²) μH', 'C': '12 × 10⁻⁶ Nm/rad', 'Current I': '5 A' },
                finalAnswer: {
                  en: 'Deflection θ = 1.689 rad (96.8°)',
                  hi: 'विक्षेप θ = 1.689 rad (96.8°)',
                  bn: 'ডিফ্লেকশন θ = ১.৬৮৯ rad (৯৬.৮°)'
                }
              }
            ],
            mcqs: [
              {
                id: 'mcq-meas-3',
                question: {
                  en: 'If a sinusoidal AC current with peak value 10A is passed through a PMMC ammeter and an MI ammeter in series, their readings will be respectively:',
                  hi: 'यदि 10A शिखर मान वाली ज्यावक्रीय AC धारा श्रेणी में जुड़े PMMC और MI एमीटर से प्रवाहित हो, तो उनके पाठ्यांक क्रमशः होंगे:',
                  bn: '১০A শীর্ষ মানের সাইনুসয়ডাল এসি কারেন্ট সিরিজে সংযুক্ত PMMC ও MI অ্যামিটারের মধ্য দিয়ে প্রবাহিত হলে তাদের পাঠ হবে যথাক্রমে:'
                },
                options: [
                  { id: 'opt-1', text: { en: '0 A and 7.07 A', hi: '0 A एवं 7.07 A', bn: '০ A এবং ৭.০৭ A' } },
                  { id: 'opt-2', text: { en: '7.07 A and 0 A', hi: '7.07 A एवं 0 A', bn: '৭.০৭ A এবং ০ A' } },
                  { id: 'opt-3', text: { en: '10 A and 7.07 A', hi: '10 A एवं 7.07 A', bn: '১০ A এবং ৭.০৭ A' } },
                  { id: 'opt-4', text: { en: '6.37 A and 7.07 A', hi: '6.37 A एवं 7.07 A', bn: '৬.৩৭ A এবং ৭.০৭ A' } }
                ],
                correctOptionId: 'opt-1',
                explanation: {
                  en: 'PMMC measures average value of symmetrical AC which is 0 A. MI ammeter measures RMS value which is 10 / √2 = 7.07 A.',
                  hi: 'PMMC सममित AC का औसत मान (0 A) मापता है, जबकि MI मीटर RMS मान (10/√2 = 7.07 A) मापता है।',
                  bn: 'PMMC প্রতিসম এসি তরঙ্গের গড় মান (০ A) পরিমাপ করে। অপরপক্ষে MI অ্যামিটার আরএমএস মান (১০/√২ = ৭.০৭ A) প্রদর্শন করে।'
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 'meas-ch3-power-energy',
      subjectId: 'electrical-measurements',
      order: 3,
      title: {
        en: 'Module 3: Measurement of Power & Energy',
        hi: 'मॉड्यूल 3: विद्युत शक्ति एवं ऊर्जा का मापन',
        bn: 'মডিউল ৩: বিদ্যুৎ শক্তি (Power) ও এনার্জি পরিমাপ'
      },
      topics: [
        {
          id: 'meas-tp4-wattmeters-two-wattmeter',
          chapterId: 'meas-ch3-power-energy',
          order: 1,
          level: 'Core',
          title: {
            en: '4. Electrodynamometer Wattmeter & Two-Wattmeter Method',
            hi: '4. इलेक्ट्रोडायनेमोमीटर वाटमीटर एवं टू-वाटमीटर विधि',
            bn: '৪. ইলেকট্রোডায়নামোমিটার ওয়াটমিটার ও টু-ওয়াটমিটার পদ্ধতি'
          },
          description: {
            en: 'Current coil (fixed), Pressure coil (moving), errors due to PC inductance, Two-wattmeter method for 3-phase power, total power (P = W1 + W2), and power factor angle calculation.',
            hi: 'करंट कॉइल, प्रेशर कॉइल, 3-फेज में 2-वाटमीटर विधि द्वारा कुल पावर एवं पावर फैक्टर (cos φ) की गणना।',
            bn: 'কারেন্ট কয়েল, প্রেসার কয়েল, ৩-ফেজ সার্কিটে টু-ওয়াটমিটার পদ্ধতিতে মোট পাওয়ার ও পাওয়ার ফ্যাক্টর নির্ণয়।'
          },
          lesson: {
            id: 'lesson-meas-tp4',
            topicId: 'meas-tp4-wattmeters-two-wattmeter',
            title: {
              en: '3-Phase Power & Power Factor Measurement via Two-Wattmeter Method',
              hi: 'टू-वाटमीटर विधि द्वारा 3-फेज पावर एवं पावर फैक्टर मापन',
              bn: 'টু-ওয়াটমিটার পদ্ধতিতে ৩-ফেজ পাওয়ার ও পাওয়ার ফ্যাক্টর পরিমাপ'
            },
            description: {
              en: 'Detailed mathematical derivation of Two-Wattmeter method on balanced 3-phase star/delta loads, individual readings, and power factor determination.',
              hi: 'संतुलित 3-फेज लोड में दो वाटमीटर विधि का संपूर्ण गणितीय विश्लेषण और cos φ का निर्धारण।',
              bn: 'ব্যালেন্সড ৩-ফেজ স্টার/ডেল্টা লোডে টু-ওয়াটমিটার পদ্ধতির সম্পূর্ণ গাণিতিক প্রমাণ ও পাওয়ার ফ্যাক্টর বিশ্লেষণ।'
            },
            detailedExplanation: {
              en: 'In an electrodynamometer wattmeter, the fixed current coils (CC) carry load current, while the moving pressure coil (PC) carries voltage proportional current. Deflecting torque is proportional to average active power:\n$$T_d \\propto V I \\cos\\phi$$\n\nTwo-Wattmeter Method for 3-Phase 3-Wire Systems (Blondel\'s Theorem):\nTwo wattmeters are connected with current coils in lines R and Y, and pressure coils connected to the third common line B:\n\n$$W_1 = V_L I_L \\cos(30^\\circ - \\phi)$$\n$$W_2 = V_L I_L \\cos(30^\\circ + \\phi)$$\n\nSum of readings:\n$$W_1 + W_2 = V_L I_L [\\cos(30^\\circ - \\phi) + \\cos(30^\\circ + \\phi)] = \\sqrt{3} V_L I_L \\cos\\phi = P_{\\text{total}}$$\n\nDifference of readings:\n$$W_1 - W_2 = V_L I_L [\\sin 30^\\circ \\sin\\phi \\cdot 2] = V_L I_L \\sin\\phi$$\n\nPower Factor Angle Calculation:\n$$\\tan\\phi = \\sqrt{3} \\left( \\frac{W_1 - W_2}{W_1 + W_2} \\right) \\implies \\cos\\phi = \\cos\\left[ \\tan^{-1}\\left( \\sqrt{3} \\frac{W_1 - W_2}{W_1 + W_2} \\right) \\right]$$\n\nSpecial Cases of Load Power Factor:\n1. Unity PF ($\\cos\\phi = 1, \\phi = 0^\\circ$): $W_1 = W_2$ (Both meters read equal positive values).\n2. 0.5 Lagging PF ($\\phi = 60^\\circ$): $W_1 = V_L I_L \\cos(-30^\\circ) = \\frac{\\sqrt{3}}{2} V_L I_L$, $W_2 = V_L I_L \\cos(90^\\circ) = 0$ (One meter reads total power, second meter reads zero).\n3. Less than 0.5 PF ($\\phi > 60^\\circ$): $W_2$ becomes negative ($W_2 < 0$), requiring reversing the pressure coil connection and taking $W_2$ as a negative quantity in the equation.',
              hi: '3-फेज 3-तार प्रणाली में दो वाटमीटरों की रीडिंग:\n$$W_1 = V_L I_L \\cos(30^\\circ - \\phi)$$\n$$W_2 = V_L I_L \\cos(30^\\circ + \\phi)$$\n\nकुल पावर: $P = W_1 + W_2$\nपावर फैक्टर: $\\tan\\phi = \\sqrt{3} \\left( \\frac{W_1 - W_2}{W_1 + W_2} \\right)$\n\nविशेष स्थितियां:\n1. $\\cos\\phi = 1$: दोनों वाटमीटर बराबर पढ़ते हैं ($W_1 = W_2$)\n2. $\\cos\\phi = 0.5$: एक वाटमीटर शून्य पढ़ता है ($W_2 = 0$)\n3. $\\cos\\phi < 0.5$: एक वाटमीटर ऋणात्मक (Negative) पढ़ता है।',
              bn: '৩-ফেজ ৩-ওয়্যার সিস্টেমে ব্লনডেলের উপপাদ্য অনুযায়ী দুটি ওয়াটমিটারের পাঠ:\n$$W_1 = V_L I_L \\cos(30^\\circ - \\phi)$$\n$$W_2 = V_L I_L \\cos(30^\\circ + \\phi)$$\n\nমোট পাওয়ার: $P = W_1 + W_2$\nপাওয়ার ফ্যাক্টর কোণ: $\\tan\\phi = \\sqrt{3} \\left( \\frac{W_1 - W_2}{W_1 + W_2} \\right)$\n\nগুরুত্বপূর্ণ অবস্থাসমূহ:\n১. $\\cos\\phi = ১$: উভয় ওয়াটমিটার সমান পজিটিভ মান প্রদর্শন করে ($W_1 = W_2$)\n২. $\\cos\\phi = ০.৫$: একটি ওয়াটমিটার মোট পাওয়ার নির্দেশ করে এবং অপরটি শূন্য ($W_2 = 0$) দেখায়\n৩. $\\cos\\phi < ০.৫$: একটি ওয়াটমিটার নেগেটিভ পাঠ দেয়।'
            },
            formulas: [
              {
                id: 'f-w1-reading',
                name: { en: 'Wattmeter 1 Reading', hi: 'वाटमीटर 1 रीडिंग', bn: 'ওয়াটমিটার ১ রিডিং' },
                formula: 'W_1 = V_L I_L \\cos(30^\\circ - \\phi)',
                description: {
                  en: 'Reading of Wattmeter 1 in Two-Wattmeter Method',
                  hi: 'दो-वाटमीटर विधि में प्रथम वाटमीटर का पाठ',
                  bn: 'টু-ওয়াটমিটার পদ্ধতিতে ১ম ওয়াটমিটারের পাঠ'
                }
              },
              {
                id: 'f-w2-reading',
                name: { en: 'Wattmeter 2 Reading', hi: 'वाटमीटर 2 रीडिंग', bn: 'ওয়াটমিটার ২ রিডিং' },
                formula: 'W_2 = V_L I_L \\cos(30^\\circ + \\phi)',
                description: {
                  en: 'Reading of Wattmeter 2 in Two-Wattmeter Method',
                  hi: 'दो-वाटमीटर विधि में द्वितीय वाटमीटर का पाठ',
                  bn: 'টু-ওয়াটমিটার পদ্ধতিতে ২য় ওয়াটমিটারের পাঠ'
                }
              },
              {
                id: 'f-tan-phi',
                name: { en: 'Power Factor Angle', hi: 'पावर फैक्टर कोण सूत्र', bn: 'পাওয়ার ফ্যাক্টর কোণ' },
                formula: '\\tan\\phi = \\sqrt{3} \\left( \\frac{W_1 - W_2}{W_1 + W_2} \\right)',
                description: {
                  en: 'Power Factor Angle in Two-Wattmeter Method',
                  hi: 'दो वाटमीटर रीडिंग से cos φ निकालने का सूत्र',
                  bn: 'ওয়াটমিটারের পাঠ থেকে পাওয়ার ফ্যাক্টর কোণ নির্ণয়'
                }
              }
            ],
            solvedExamples: [
              {
                id: 'ex-2w-1',
                problem: {
                  en: 'Two wattmeters connected to measure 3-phase power in a balanced system read 5 kW and 1 kW respectively, the latter reading being obtained after reversing the pressure coil connections. Calculate total active power and load power factor.',
                  hi: 'संतुलित 3-फेज प्रणाली में दो वाटमीटर 5 kW और 1 kW (प्रेशर कॉइल कनेक्शन उलटने के बाद) पढ़ते हैं। कुल सक्रिय शक्ति और पावर फैक्टर ज्ञात कीजिए।',
                  bn: 'ব্যালেন্সড ৩-ফেজ সিস্টেমে দুটি ওয়াটমিটার ৫ kW এবং ১ kW (প্রেসার কয়েলের সংযোগ উল্টানোর পর) পাঠ দেয়। মোট একটিভ পাওয়ার ও পাওয়ার ফ্যাক্টর নির্ণয় করুন।'
                },
                solution: {
                  en: 'Step 1: W1 = 5 kW, W2 = -1 kW (recorded after reversing PC connection)\nStep 2: Total Active Power P = W1 + W2 = 5 + (-1) = 4 kW\nStep 3: tan φ = √3 [(W1 - W2) / (W1 + W2)] = √3 [(5 - (-1)) / (5 - 1)] = √3 × (6 / 4) = 1.5 × 1.732 ≈ 2.598\nStep 4: φ = tan⁻¹(2.598) = 68.95°\nStep 5: Power Factor cos φ = cos(68.95°) = 0.359 Lagging',
                  hi: 'चरण 1: W1 = 5 kW, W2 = -1 kW\nचरण 2: कुल पावर P = 5 + (-1) = 4 kW\nचरण 3: tan φ = √3 [(5 - (-1))/(4)] = 2.598 ⟹ φ = 68.95°\nचरण 4: cos φ = cos(68.95°) = 0.359 Lagging',
                  bn: 'ধাপ ১: W1 = ৫ kW, W2 = -১ kW\nধাপ ২: মোট পাওয়ার P = ৫ + (-১) = ৪ kW\nধাপ ৩: tan φ = √৩ [(৫ - (-১))/(৪)] = ২.৫৯৮ ⟹ φ = ৬৮.৯৫°\nধাপ ৪: cos φ = cos(৬৮.৯৫°) = ০.৩৫৯ Lagging'
                },
                givenValues: { 'W1': '5 kW', 'W2 (Reversed)': '-1 kW' },
                finalAnswer: {
                  en: 'Total Power P = 4.0 kW, Power Factor cos φ = 0.359 Lagging',
                  hi: 'कुल पावर P = 4.0 kW, पावर फैक्टर cos φ = 0.359 Lagging',
                  bn: 'মোট পাওয়ার P = ৪.০ kW, পাওয়ার ফ্যাক্টর cos φ = ০.৩৫৯ Lagging'
                }
              }
            ],
            mcqs: [
              {
                id: 'mcq-meas-4',
                question: {
                  en: 'In a 3-phase balanced load power measurement by two-wattmeter method, if both wattmeters read identical positive values (W1 = W2), the load power factor is:',
                  hi: 'दो-वाटमीटर विधि में यदि दोनों वाटमीटर समान धनात्मक मान (W1 = W2) पढ़ते हैं, तो लोड पावर फैक्टर होगा:',
                  bn: 'টু-ওয়াটমিটার পদ্ধতিতে উভয় ওয়াটমিটার যদি সমান পজিটিভ মান (W1 = W2) পাঠ দেয়, তবে লোড পাওয়ার ফ্যাক্টর হবে:'
                },
                options: [
                  { id: 'opt-1', text: { en: '0.5 lagging', hi: '0.5 पश्चगामी', bn: '০.৫ ল্যাগিং' } },
                  { id: 'opt-2', text: { en: '0.866 lagging', hi: '0.866 पश्चगामी', bn: '০.৮৬৬ ল্যাগিং' } },
                  { id: 'opt-3', text: { en: '1.0 (Unity)', hi: '1.0 (इकाई)', bn: '১.০ (ইউনিটি)' } },
                  { id: 'opt-4', text: { en: 'Zero', hi: 'शून्य', bn: 'শূন্য' } }
                ],
                correctOptionId: 'opt-3',
                explanation: {
                  en: 'When W1 = W2, tan φ = √3 (0) = 0 ⟹ φ = 0° ⟹ cos(0°) = 1.0 (Unity power factor).',
                  hi: 'जब W1 = W2 होता है, तो tan φ = 0 ⟹ φ = 0° ⟹ cos(0°) = 1.0 (यूनिटी पावर फैक्टर)।',
                  bn: 'যখন W1 = W2 হয়, তখন tan φ = ০ ⟹ φ = ০° ⟹ cos(০°) = ১.০ (ইউনিটি পাওয়ার ফ্যাক্টর)।'
                }
              }
            ]
          }
        },
        {
          id: 'meas-tp5-energy-meters',
          chapterId: 'meas-ch3-power-energy',
          order: 2,
          level: 'Core',
          title: {
            en: '5. Single-Phase Induction Energy Meter & Calibration',
            hi: '5. सिंगल-फेज इंडक्शन एनर्जी मीटर एवं अंशांकन',
            bn: '৫. সিঙ্গেল-ফেজ ইন্ডাকশন এনার্জি মিটার ও ক্যালিব্রেশন'
          },
          description: {
            en: 'Shunt magnet, Series magnet, Aluminum disc eddy torque, Creeping error & prevention holes, Braking magnet, and Meter Constant (rev/kWh).',
            hi: 'शंट चुंबक, सीरीज चुंबक, एल्यूमीनियम डिस्क, क्रीपिंग त्रुटि (रेंगना) और रोकथाम, ब्रेकिंग चुंबक, मीटर स्थिरांक (rev/kWh)।',
            bn: 'শান্ট ম্যাগনেট, সিরিজ ম্যাগনেট, অ্যালুমিনিয়াম ডিস্ক টর্ক, ক্রিপিং ত্রুটি ও প্রতিকার, ব্রেকিং ম্যাগনেট এবং মিটার কনস্ট্যান্ট (rev/kWh)।'
          },
          lesson: {
            id: 'lesson-meas-tp5',
            topicId: 'meas-tp5-energy-meters',
            title: {
              en: 'Induction Type Energy Meter: Working, Errors & Testing',
              hi: 'इंडक्शन प्रकार एनर्जी मीटर: कार्यप्रणाली, त्रुटियां एवं परीक्षण',
              bn: 'ইন্ডাকশন টাইপ এনার্জি মিটার: কার্যপ্রণালী, ত্রুটি ও পরীক্ষা'
            },
            description: {
              en: 'Operating physics of kWh energy meters, eddy currents in rotating disc, braking torque, creeping phenomenon, and phantom loading tests.',
              hi: 'kWh एनर्जी मीटर की भौतिकी, डिस्क में भंवर धाराएं, ब्रेकिंग टॉर्क, क्रीपिंग घटना और फैंटम लोडिंग टेस्ट।',
              bn: 'kWh এনার্জি মিটারের মূলনীতি, ঘূর্ণায়মান ডিস্কের এডি কারেন্ট, ক্রিপিং সমস্যা ও ফ্যান্টম লোডিং টেস্ট।'
            },
            detailedExplanation: {
              en: 'An induction type energy meter integrates active electrical power over time ($E = \\int P \\, dt$ in kWh). Key constructional components include:\n\n1. Shunt Magnet: Connected across supply voltage ($V$). It has a highly inductive coil of many turns of fine wire. The flux $\\Phi_{sh}$ lags supply voltage by nearly $90^\\circ$ (adjusted to exactly $90^\\circ$ using a copper shading band).\n2. Series Magnet: Connected in series with load current ($I$). It has a few turns of thick wire. Its flux $\\Phi_{se}$ is in phase with load current.\n3. Aluminum Disc: Located in the air gap between the two magnets. The interaction between $\\Phi_{sh}, \\Phi_{se}$ and their induced eddy currents produces a continuous deflecting torque:\n$$T_d \\propto \\Phi_{sh} \\Phi_{se} \\sin\\beta \\propto V I \\cos\\phi = P$$\n4. Braking System: A permanent C-magnet produces braking torque ($T_b \\propto N$, rotational speed) by generating eddy currents in the rotating disc.\nAt steady speed: $T_d = T_b \\implies N \\propto P \\implies \\text{Total Revolutions } \\int N \\, dt \\propto \\int P \\, dt = \\text{Energy (kWh)}$.\n\nCreeping Error:\nSlow continuous rotation of the disc under NO-LOAD condition when only pressure coil is energized. Causes: Overcompensation for friction, excessive supply voltage, or stray magnetic fields. Prevention: Two diametrically opposite holes are drilled in the aluminum disc; when a hole reaches under the shunt pole, reluctance increases, locking the disc from continuous rotation.',
              hi: 'इंडक्शन एनर्जी मीटर सक्रिय शक्ति का समय के साथ समाकलन करता है ($E = \\int P dt$) kWh में।\n- शंट चुंबक वोल्टेज के समानांतर और सीरीज चुंबक लोड करंट के श्रेणी में जुड़ता है।\n- ड्राइविंग टॉर्क $T_d \\propto V I \\cos\\phi$ और ब्रेकिंग टॉर्क स्थायी चुंबक द्वारा $T_b \\propto N$ दिया जाता है।\n\nक्रीपिंग (रेंगने की त्रुटि):\nबिना किसी लोड के, केवल वोल्टेज लागू होने पर भी डिस्क का धीरे-धीरे घूमना क्रीपिंग कहलाता है।\nरोकथाम: एल्युमिनियम डिस्क में आमने-सामने दो छोटे छेद (holes) कर दिए जाते हैं।',
              bn: 'ইন্ডাকশন এনার্জি মিটার সময়ের সাথে সাথে সক্রিয় শক্তি সঞ্চয় করে ($E = \\int P dt$) kWh এককে।\n- শান্ট ম্যাগনেট ভোল্টেজের সাথে প্যারালালে এবং সিরিজ ম্যাগনেট লোড কারেন্টের সাথে সিরিজে থাকে।\n- ড্রাইভিং টর্ক $T_d \\propto V I \\cos\\phi$ এবং সি-আকৃতির পার্মানেন্ট ম্যাগনেট দ্বারা ব্রেকিং টর্ক $T_b \\propto N$ তৈরি হয়।\n\nক্রিপিং ত্রুটি (Creeping):\nনো-লোড অবস্থায় (লোড কারেন্ট শূন্য থাকা সত্ত্বেও) কেবল সাপ্লাই ভোল্টেজের উপস্থিতিতে ডিস্কের অবিরাম ধীরে ধীরে ঘোরাকে ক্রিপিং বলে।\nপ্রতিকার: অ্যালুমিনিয়াম ডিস্কের পরিধির বিপরীত দিকে দুটি ছোট ছিদ্র (anti-creep holes) করা হয়।'
            },
            formulas: [
              {
                id: 'f-meter-constant',
                name: { en: 'Energy Meter Constant', hi: 'मीटर स्थिरांक', bn: 'মিটার কনস্ট্যান্ট' },
                formula: 'K = \\frac{\\text{Total Revolutions}}{\\text{Energy Consumed [kWh]}} \\quad [\\text{rev/kWh}]',
                description: {
                  en: 'Energy Meter Constant (K in revolutions per kilowatt-hour)',
                  hi: 'ऊर्जा मीटर स्थिरांक (चक्कर प्रति किलोवाट-घंटा)',
                  bn: 'এনার্জি মিটার কনস্ট্যান্ট (ঘূর্ণন প্রতি কিলোওয়াট-ঘণ্টা)'
                }
              },
              {
                id: 'f-energy-error',
                name: { en: 'Percentage Error in Registration', hi: 'प्रतिशत मीटर त्रुटि', bn: 'শতকরা মিটার ত্রুটি' },
                formula: '\\%\\text{Error} = \\frac{\\text{Recorded Rev} - \\text{True Rev}}{\\text{True Rev}} \\times 100\\%',
                description: {
                  en: 'Percentage Error in Energy Meter Registration',
                  hi: 'ऊर्जा मीटर की प्रतिशत त्रुटि',
                  bn: 'এনার্জি মিটারের শতকরা ত্রুটি'
                }
              }
            ],
            solvedExamples: [
              {
                id: 'ex-em-1',
                problem: {
                  en: 'A 230 V, 5 A energy meter having a meter constant of 1200 rev/kWh makes 480 revolutions during a test under full load at unity power factor lasting 20 minutes. Calculate the percentage error of the meter.',
                  hi: 'एक 230V, 5A एनर्जी मीटर (1200 rev/kWh स्थिरांक) 20 मिनट के पूर्ण लोड टेस्ट (यूनिटी PF) में 480 चक्कर लगाता है। मीटर की प्रतिशत त्रुटि ज्ञात कीजिए।',
                  bn: 'একটি ২৩০V, ৫A এনার্জি মিটারের কনস্ট্যান্ট ১২০০ rev/kWh। ফুল লোড ও ইউনিটি পাওয়ার ফ্যাক্টরে ২০ মিনিটের পরীক্ষায় এটি ৪৮০ বার ঘোরে। মিটারের শতকরা ত্রুটি কত?'
                },
                solution: {
                  en: 'Step 1: Power P = 230 V × 5 A × 1.0 = 1150 W = 1.15 kW\nStep 2: Time t = 20/60 = 1/3 hour\nStep 3: True Energy = 1.15 kW × (1/3) h = 0.38333 kWh\nStep 4: Expected True Revolutions = 1200 rev/kWh × 0.38333 kWh = 460 revolutions\nStep 5: % Error = [(480 - 460) / 460] × 100% = +4.35% (Meter runs Fast)',
                  hi: 'चरण 1: शक्ति P = 230 × 5 × 1.0 = 1.15 kW\nचरण 2: समय t = 1/3 घंटा\nचरण 3: वास्तविक ऊर्जा = 1.15 × (1/3) = 0.3833 kWh\nचरण 4: अपेक्षित चक्कर = 1200 × 0.3833 = 460 चक्कर\nचरण 5: % त्रुटि = [(480 - 460) / 460] × 100% = +4.35% (मीटर तेज चल रहा है)',
                  bn: 'ধাপ ১: পাওয়ার P = ২৩০ × ৫ × ১.০ = ১.১৫ kW\nধাপ ২: সময় t = ১/৩ ঘণ্টা\nধাপ ৩: প্রকৃত শক্তি = ১.১৫ × (১/৩) = ০.৩৮৩৩ kWh\nধাপ ৪: প্রত্যাশিত ঘূর্ণন = ১২০০ × ০.৩৮৩৩ = ৪৬০ rev\nধাপ ৫: % ত্রুটি = [(৪৮০ - ৪৬০) / ৪৬০] × ১০০% = +৪.৩৫% (মিটার দ্রুত চলছে)'
                },
                givenValues: { 'Voltage': '230 V', 'Current': '5 A', 'PF': '1.0', 'Duration': '20 mins', 'Constant K': '1200 rev/kWh', 'Actual Revs': '480' },
                finalAnswer: {
                  en: 'Percentage Error = +4.35% Fast',
                  hi: 'प्रतिशत त्रुटि = +4.35% तेज (Fast)',
                  bn: 'শতকরা ত্রুটি = +৪.৩৫% ফাস্ট (Fast)'
                }
              }
            ],
            mcqs: [
              {
                id: 'mcq-meas-5',
                question: {
                  en: 'Creeping in a single-phase induction type energy meter can be prevented by:',
                  hi: 'सिंगल फेज इंडक्शन एनर्जी मीटर में क्रीपिंग की रोकथाम की जाती है:',
                  bn: 'সিঙ্গেল ফেজ ইন্ডাকশন এনার্জি মিটারে ক্রিপিং প্রতিরোধ করা হয়:'
                },
                options: [
                  { id: 'opt-1', text: { en: 'Using eddy current damping', hi: 'भंवर धारा डैम्पिंग द्वारा', bn: 'এডি কারেন্ট ড্যাম্পিং দ্বারা' } },
                  { id: 'opt-2', text: { en: 'Drilling two diametrically opposite holes in the aluminum disc', hi: 'एल्यूमीनियम डिस्क में दो विपरीत छेद करके', bn: 'অ্যালুমিনিয়াম ডিস্কে ব্যাসের বিপরীতে দুটি ছিদ্র করে' } },
                  { id: 'opt-3', text: { en: 'Increasing the strength of the braking magnet', hi: 'ब्रेकिंग चुंबक की शक्ति बढ़ाकर', bn: 'ব্রেকিং ম্যাগনেটের শক্তি বৃদ্ধি করে' } },
                  { id: 'opt-4', text: { en: 'Connecting a resistor in series with current coil', hi: 'करंट कॉइल के श्रेणी में प्रतिरोध जोड़कर', bn: 'কারেন্ট কয়েলের সাথে সিরিজে রোধ যুক্ত করে' } }
                ],
                correctOptionId: 'opt-2',
                explanation: {
                  en: 'Two diametrically opposite holes in the aluminum disc increase reluctance when aligned under shunt pole, stopping no-load creeping.',
                  hi: 'डिस्क में दो विपरीत छेद शंट पोल के नीचे आने पर रिलक्टेंस बढ़ाते हैं जिससे बिना लोड पर डिस्क नहीं घूमती।',
                  bn: 'ডিস্কের বিপরীত দিকে থাকা দুটি ছিদ্র শান্ট পোলের নিচে এলে রিলাকট্যান্স বৃদ্ধি পায়, ফলে নো-লোড ক্রিপিং বন্ধ হয়।'
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 'meas-ch4-bridges',
      subjectId: 'electrical-measurements',
      order: 4,
      title: {
        en: 'Module 4: DC & AC Measurement Bridges',
        hi: 'मॉड्यूल 4: डीसी एवं एसी मापन ब्रिज',
        bn: 'মডিউল ৪: ডিসি ও এসি পরিমাপক ব্রিজ'
      },
      topics: [
        {
          id: 'meas-tp6-dc-bridges',
          chapterId: 'meas-ch4-bridges',
          order: 1,
          level: 'Core',
          title: {
            en: '6. DC Resistance Bridges (Wheatstone & Kelvin Double Bridge)',
            hi: '6. डीसी प्रतिरोध ब्रिज (व्हीटस्टोन एवं केल्विन डबल ब्रिज)',
            bn: '৬. ডিসি রেজিস্ট্যান্স ব্রিজ (হুইটস্টোন ও কেলভিন ডাবল ব্রিজ)'
          },
          description: {
            en: 'Classification of resistances (Low < 1Ω, Medium 1Ω–100kΩ, High > 100kΩ), Wheatstone bridge sensitivity, Kelvin Double Bridge for low resistance elimination of lead/contact resistances.',
            hi: 'प्रतिरोध का वर्गीकरण, व्हीटस्टोन ब्रिज, निम्न प्रतिरोध (<1Ω) मापन हेतु केल्विन डबल ब्रिज एवं लीड प्रतिरोध का निवारण।',
            bn: 'রোধের শ্রেণিবিভাগ, হুইটস্টোন ব্রিজ, নিম্ন মানের রোধ (<১Ω) নিখুঁত পরিমাপে কেলভিন ডাবল ব্রিজ ও লিড রোধ বর্জন।'
          },
          lesson: {
            id: 'lesson-meas-tp6',
            topicId: 'meas-tp6-dc-bridges',
            title: {
              en: 'Measurement of Resistance: Wheatstone Bridge & Kelvin Double Bridge',
              hi: 'प्रतिरोध मापन: व्हीटस्टोन एवं केल्विन डबल ब्रिज',
              bn: 'রোধ পরিমাপ: হুইটস্টোন ও কেলভিন ডাবল ব্রিজ'
            },
            description: {
              en: 'Mathematical balance equations for Wheatstone bridge, bridge sensitivity, and Kelvin double bridge derivation for low resistance measurement.',
              hi: 'व्हीटस्टोन ब्रिज संतुलन समीकरण, ब्रिज सुग्राहिता और केल्विन डबल ब्रिज का संपूर्ण व्युत्पत्ति सूत्र।',
              bn: 'হুইটস্টোন ব্রিজের ব্যালেন্স সমীকরণ এবং কেলভিন ডাবল ব্রিজের সাহায্যে ক্ষুদ্র রোধ পরিমাপের গাণিতিক সমাধান।'
            },
            detailedExplanation: {
              en: 'Resistances are classified into three ranges:\n1. Low Resistance (< 1 Ω): Armature windings, ammeter shunts, cable conductors. Measured using Kelvin Double Bridge, Potentiometer.\n2. Medium Resistance (1 Ω to 100 kΩ): General resistors, heater elements. Measured using Wheatstone Bridge, Ammeter-Voltmeter method.\n3. High Resistance (> 100 kΩ): Insulation resistance, cable sheath resistance. Measured using Megger, Loss of Charge method.\n\nWheatstone Bridge Balance:\n$$R_x = R_3 \\left( \\frac{R_2}{R_1} \\right)$$\n\nKelvin Double Bridge for Low Resistance:\nIn low-resistance measurements (< 1 Ω), connecting lead and contact resistances ($r$) introduce massive percentage errors. The Kelvin double bridge incorporates two sets of ratio arms ($P/Q$ and $p/q$):\n\n$$R_x = \\frac{P}{Q} S + \\frac{q r}{p + q + r} \\left( \\frac{P}{Q} - \\frac{p}{q} \\right)$$\n\nBy ensuring exact equality of resistance arm ratios ($\\frac{P}{Q} = \\frac{p}{q}$), the second term vanishes completely:\n$$R_x = \\frac{P}{Q} S$$\nThus, the unknown low resistance $R_x$ is determined completely independent of the lead and contact resistance $r$!',
              hi: 'प्रतिरोध का वर्गीकरण:\n- निम्न (< 1 Ω): केल्विन डबल ब्रिज एवं पोटेंशियोमीटर द्वारा मापा जाता है।\n- मध्यम (1 Ω से 100 kΩ): व्हीटस्टोन ब्रिज द्वारा।\n- उच्च (> 100 kΩ): मेगर (Megger) द्वारा।\n\nकेल्विन डबल ब्रिज समीकरण:\n$$R_x = \\frac{P}{Q} S + \\frac{q r}{p+q+r}\\left(\\frac{P}{Q} - \\frac{p}{q}\\right)$$\nयदि $\\frac{P}{Q} = \\frac{p}{q}$ रखा जाए, तो लीड प्रतिरोध $r$ का प्रभाव समाप्त हो जाता है: $R_x = \\frac{P}{Q} S$',
              bn: 'রোধের শ্রেণিবিভাগ:\n- নিম্ন (< ১ Ω): কেলভিন ডাবল ব্রিজ ও পটেনশিওমিটার দ্বারা পরিমাপযোগ্য।\n- মাঝারি (১ Ω থেকে ১০০ kΩ): হুইটস্টোন ব্রিজ দ্বারা।\n- উচ্চ (> ১০০ kΩ): মেগার (Megger) দ্বারা।\n\nকেলভিন ডাবল ব্রিজ সমীকরণ:\n$$R_x = \\frac{P}{Q} S + \\frac{q r}{p+q+r}\\left(\\frac{P}{Q} - \\frac{p}{q}\\right)$$\nঅনুপাত $\\frac{P}{Q} = \\frac{p}{q}$ রাখা হলে সংযোগ তারের রোধ ($r$) সম্পূর্ণ বিলুপ্ত হয়ে যায়: $R_x = \\frac{P}{Q} S$'
            },
            formulas: [
              {
                id: 'f-wheatstone-balance',
                name: { en: 'Wheatstone Bridge Balance', hi: 'व्हीटस्टोन ब्रिज संतुलन', bn: 'হুইটস্টোন ব্রিজ ভারসাম্য' },
                formula: 'R_x = \\frac{P}{Q} \\cdot S',
                description: {
                  en: 'Wheatstone Bridge Balance Condition',
                  hi: 'व्हीटस्टोन ब्रिज संतुलन स्थिति',
                  bn: 'হুইটস্টোন ব্রিজের ব্যালেন্স সূত্র'
                }
              },
              {
                id: 'f-kelvin-double',
                name: { en: 'Kelvin Double Bridge Equation', hi: 'केल्विन डबल ब्रिज समीकरण', bn: 'কেলভিন ডাবল ব্রিজ সমীকরণ' },
                formula: 'R_x = \\frac{P}{Q} S + \\frac{q \\cdot r}{p + q + r}\\left( \\frac{P}{Q} - \\frac{p}{q} \\right)',
                description: {
                  en: 'Kelvin Double Bridge General Balance Equation',
                  hi: 'केल्विन डबल ब्रिज का सामान्य संतुलन सूत्र',
                  bn: 'কেলভিন ডাবল ব্রিজের সাধারণ ব্যালেন্স সূত্র'
                }
              }
            ],
            solvedExamples: [
              {
                id: 'ex-kelvin-1',
                problem: {
                  en: 'In a Kelvin Double Bridge, ratio arms P/Q and p/q are both set to 100. The standard resistance S is 0.005 Ω. If the link resistance between Rx and S is 0.002 Ω, calculate the value of unknown low resistance Rx.',
                  hi: 'केल्विन डबल ब्रिज में अनुपात भुजाएं P/Q और p/q दोनों 100 हैं। मानक प्रतिरोध S = 0.005 Ω है। यदि लिंक प्रतिरोध r = 0.002 Ω है, तो अज्ञात प्रतिरोध Rx ज्ञात कीजिए।',
                  bn: 'একটি কেলভিন ডাবল ব্রিজে আর্ম অনুপাত P/Q এবং p/q উভয়ই ১০০। স্ট্যান্ডার্ড রোধ S = ০.০০৫ Ω এবং সংযোগ তারের রোধ r = ০.০০২ Ω হলে অজ্ঞাত নিম্ন রোধ Rx এর মান নির্ণয় করুন।'
                },
                solution: {
                  en: 'Step 1: Given P/Q = 100 and p/q = 100, so (P/Q - p/q) = 0\nStep 2: Second error term vanishes completely\nStep 3: Rx = (P / Q) × S = 100 × 0.005 Ω = 0.50 Ω',
                  hi: 'चरण 1: P/Q = p/q = 100 होने से त्रुटि पद शून्य हो जाता है।\nचरण 2: Rx = (P/Q) × S = 100 × 0.005 = 0.50 Ω',
                  bn: 'ধাপ ১: P/Q = p/q = ১০০ হওয়ায় ত্রুটি পদটি শূন্য হয়ে যায়।\nধাপ ২: Rx = (P/Q) × S = ১০০ × ০.০০৫ = ০.৫০ Ω'
                },
                givenValues: { 'P/Q': '100', 'p/q': '100', 'Standard Resistance S': '0.005 Ω', 'Lead Resistance r': '0.002 Ω' },
                finalAnswer: {
                  en: 'Unknown Low Resistance Rx = 0.50 Ω',
                  hi: 'अज्ञात निम्न प्रतिरोध Rx = 0.50 Ω',
                  bn: 'অজ্ঞাত নিম্ন রোধ Rx = ০.৫০ Ω'
                }
              }
            ],
            mcqs: [
              {
                id: 'mcq-meas-6',
                question: {
                  en: 'Which instrument is specifically used for measuring very low resistances such as ammeter shunts and generator armature windings?',
                  hi: 'एमीटर शंट और आर्मेचर वाइंडिंग जैसे अत्यंत निम्न प्रतिरोध मापने के लिए कौन सा ब्रिज उपयुक्त है?',
                  bn: 'অ্যামিটার শান্ট ও জেনারেটরের আর্মেচার উইন্ডিংয়ের মতো অতি নিম্ন মানের রোধ পরিমাপে কোন ব্রিজ ব্যবহৃত হয়?'
                },
                options: [
                  { id: 'opt-1', text: { en: 'Wheatstone Bridge', hi: 'व्हीटस्टोन ब्रिज', bn: 'হুইটস্টোন ব্রিজ' } },
                  { id: 'opt-2', text: { en: 'Kelvin Double Bridge', hi: 'केल्विन डबल ब्रिज', bn: 'কেলভিন ডাবল ব্রিজ' } },
                  { id: 'opt-3', text: { en: 'Megger', hi: 'मेगर (Megger)', bn: 'মেগার' } },
                  { id: 'opt-4', text: { en: 'Wien Bridge', hi: 'वीन ब्रिज', bn: 'ওয়েন ব্রিজ' } }
                ],
                correctOptionId: 'opt-2',
                explanation: {
                  en: 'Kelvin Double Bridge eliminates errors caused by lead and contact resistances, making it the standard method for low resistance (< 1 Ω).',
                  hi: 'केल्विन डबल ब्रिज लीड और संपर्क प्रतिरोध के प्रभाव को पूरी तरह समाप्त कर देता है।',
                  bn: 'কেলভিন ডাবল ব্রিজ সংযোগ তার ও কন্টাক্ট রোধের প্রভাব বর্জন করে নিখুঁতভাবে নিম্ন রোধ (< ১ Ω) পরিমাপ করে।'
                }
              }
            ]
          }
        },
        {
          id: 'meas-tp7-ac-bridges',
          chapterId: 'meas-ch4-bridges',
          order: 2,
          level: 'Advanced',
          title: {
            en: '7. AC Impedance Bridges (Maxwell, Hay, Schering & Wien)',
            hi: '7. एसी प्रतिबाधा ब्रिज (मैक्सवेल, हेय, शेरिंग एवं वीन ब्रिज)',
            bn: '৭. এসি ইম্পিডেন্স ব্রিজ (ম্যাক্সওয়েল, হেইস, শিয়ারিং ও ওয়েন ব্রিজ)'
          },
          description: {
            en: 'General AC bridge balance (Z1 Z4 = Z2 Z3 with angle balance), Maxwell Bridge (medium Q inductors), Hay\'s Bridge (high Q > 10), Schering Bridge (capacitance & dielectric loss tan δ), and Wien Bridge (frequency).',
            hi: 'एसी ब्रिज संतुलन, मैक्सवेल ब्रिज (मध्यम Q), हेय ब्रिज (उच्च Q), शेरिंग ब्रिज (धारिता एवं tan δ), वीन ब्रिज (आवृत्ति)।',
            bn: 'এসি ব্রিজ ব্যালেন্স, ম্যাক্সওয়েল ব্রিজ (মিডিয়াম Q), হেইস ব্রিজ (উচ্চ Q > ১০), শিয়ারিং ব্রিজ (ক্যাপাসিট্যান্স ও ডাই-ইলেকট্রিক লস tan δ) এবং ওয়েন ব্রিজ (ফ্রিকোয়েন্সি)।'
          },
          lesson: {
            id: 'lesson-meas-tp7',
            topicId: 'meas-tp7-ac-bridges',
            title: {
              en: 'AC Bridges for Inductance, Capacitance, Quality Factor & Frequency',
              hi: 'प्रेरकत्व, धारिता, Q-फैक्टर एवं आवृत्ति मापन हेतु एसी ब्रिज',
              bn: 'ইন্ডাকট্যান্স, ক্যাপাসিট্যান্স, Q-ফ্যাক্টর ও ফ্রিকোয়েন্সি পরিমাপে এসি ব্রিজ'
            },
            description: {
              en: 'Mastering AC bridge balance conditions, phasor analysis, selection matrix for Maxwell, Hay, Anderson, Schering, and Wien bridges.',
              hi: 'एसी ब्रिज संतुलन की शर्तें, फेजर विश्लेषण और विभिन्न ब्रिज के अनुप्रयोग।',
              bn: 'এসি ব্রিজের ভারসাম্য শর্ত, ফেজার ডায়াগ্রাম এবং ম্যাক্সওয়েল, হেইস, শিয়ারিং ও ওয়েন ব্রিজের তুলনামূলক ব্যবহার।'
            },
            detailedExplanation: {
              en: 'General AC Bridge Balance requires simultaneous satisfaction of two independent conditions (magnitude and phase):\n\n$$\\mathbf{Z_1} \\mathbf{Z_4} = \\mathbf{Z_2} \\mathbf{Z_3}$$\n$$|Z_1| |Z_4| = |Z_2| |Z_3| \\quad \\text{and} \\quad \\theta_1 + \\theta_4 = \\theta_2 + \\theta_3$$\n\nApplication Matrix of AC Bridges:\n\n1. Maxwell Inductance-Capacitance Bridge: Measures unknown medium-Q inductance ($1 < Q < 10$) in terms of standard capacitor:\n$$L_x = R_2 R_3 C_4, \\quad R_x = \\frac{R_2 R_3}{R_4}$$\n\n2. Hay\'s Bridge: Specifically designed for high-Q coils ($Q > 10$). The standard capacitor and resistor are in series:\n$$L_x = \\frac{R_2 R_3 C_4}{1 + (\\omega C_4 R_4)^2} \\approx R_2 R_3 C_4 \\quad (\\text{for } Q \\gg 10)$$\n\n3. Schering Bridge: Measures unknown capacitance ($C_x$), insulating material dielectric loss ($R_x$), and loss tangent ($\\tan \\delta = \\omega C_x R_x = \\omega C_4 R_4$). Widely used for high-voltage testing of cables and bushings.\n\n4. Anderson Bridge: Precise measurement of low inductance without requiring variable standard capacitance.\n\n5. Wien Bridge: Audio frequency measurement ($f = \\frac{1}{2\\pi R C}$) and harmonic distortion analyzers.',
              hi: 'एसी ब्रिज के दो संतुलन नियम:\n1. परिमाण: $|Z_1||Z_4| = |Z_2||Z_3|$\n2. कोण: $\\theta_1 + \\theta_4 = \\theta_2 + \\theta_3$\n\nप्रमुख ब्रिज एवं उपयोग:\n- मैक्सवेल ब्रिज: मध्यम Q ($1 < Q < 10$) कॉइल का प्रेरकत्व।\n- हेय (Hay\'s) ब्रिज: उच्च Q ($Q > 10$) कॉइल का प्रेरकत्व।\n- शेरिंग ब्रिज: धारिता ($C_x$) एवं परावैद्युत हानि कोण ($\\tan\\delta$) मापन।\n- वीन ब्रिज: ऑडियो आवृत्ति ($f = \\frac{1}{2\\pi RC}$) मापन।',
              bn: 'এসি ব্রিজের দুটি ভারসাম্য শর্ত:\n১. মান: $|Z_1||Z_4| = |Z_2||Z_3|$\n২. কোণ: $\\theta_1 + \\theta_4 = \\theta_2 + \\theta_3$\n\nকোন ব্রিজ কোথায় ব্যবহৃত হয়:\n- ম্যাক্সওয়েল ব্রিজ: মিডিয়াম Q ($১ < Q < ১০$) ইন্ডাকট্যান্স পরিমাপে।\n- হেইস ব্রিজ (Hay\'s): উচ্চ কোয়ালিটি ফ্যাক্টর ($Q > ১০$) যুক্ত কয়েলের ইন্ডাকট্যান্স নির্ণয়ে।\n- শিয়ারিং ব্রিজ: ক্যাপাসিট্যান্স ($C_x$) ও ডাই-ইলেকট্রিক লস ($\\tan\\delta$) পরিমাপে।\n- ওয়েন ব্রিজ (Wien): অডিও ফ্রিকোয়েন্সি ($f = \\frac{1}{2\\pi RC}$) পরিমাপে।'
            },
            formulas: [
              {
                id: 'f-maxwell-bridge',
                name: { en: 'Maxwell Bridge Balance', hi: 'मैक्सवेल ब्रिज समीकरण', bn: 'ম্যাক্সওয়েল ব্রিজ সূত্র' },
                formula: 'L_x = R_2 R_3 C_4, \\quad R_x = \\frac{R_2 R_3}{R_4}',
                description: {
                  en: 'Maxwell Bridge Inductance & Resistance in terms of standard C4',
                  hi: 'मानक धारिता C4 के संदर्भ में प्रेरकत्व एवं प्रतिरोध',
                  bn: 'স্ট্যান্ডার্ড ক্যাপাসিটর C4 এর সাপেক্ষে ইন্ডাকট্যান্স ও রেজিস্ট্যান্স'
                }
              },
              {
                id: 'f-wien-freq',
                name: { en: 'Wien Bridge Frequency', hi: 'वीन ब्रिज आवृत्ति सूत्र', bn: 'ওয়েন ব্রিজ ফ্রিকোয়েন্সি' },
                formula: 'f = \\frac{1}{2\\pi R C}',
                description: {
                  en: 'Wien Bridge Frequency Determination',
                  hi: 'वीन ब्रिज आवृत्ति निर्धारण समीकरण',
                  bn: 'ওয়েন ব্রিজের সাহায্যে ফ্রিকোয়েন্সি নির্ণয়'
                }
              }
            ],
            solvedExamples: [
              {
                id: 'ex-maxwell-1',
                problem: {
                  en: 'A Maxwell bridge is balanced with R2 = 1000 Ω, R3 = 500 Ω, R4 = 2000 Ω, and C4 = 0.5 μF. Calculate the unknown inductance Lx, resistance Rx, and quality factor Q at 1000 Hz.',
                  hi: 'एक मैक्सवेल ब्रिज R2 = 1000 Ω, R3 = 500 Ω, R4 = 2000 Ω एवं C4 = 0.5 μF पर संतुलित है। 1000 Hz पर अज्ञात प्रेरकत्व Lx, प्रतिरोध Rx एवं Q-फैक्टर ज्ञात कीजिए।',
                  bn: 'একটি ম্যাক্সওয়েল ব্রিজ R2 = ১০০০ Ω, R3 = ৫০০ Ω, R4 = ২০০০ Ω এবং C4 = ০.৫ μF এ ব্যালেন্সড। ১০০০ Hz এ অজ্ঞাত ইন্ডাকট্যান্স Lx, রোধ Rx এবং Q-ফ্যাক্টর নির্ণয় করুন।'
                },
                solution: {
                  en: 'Step 1: Lx = R2 × R3 × C4 = 1000 × 500 × (0.5 × 10⁻⁶) = 0.25 H = 250 mH\nStep 2: Rx = (R2 × R3) / R4 = (1000 × 500) / 2000 = 250 Ω\nStep 3: ω = 2π × 1000 = 6283.18 rad/s\nStep 4: Q = (ω Lx) / Rx = (6283.18 × 0.25) / 250 = 6.28',
                  hi: 'चरण 1: Lx = 1000 × 500 × 0.5×10⁻⁶ = 0.25 H = 250 mH\nचरण 2: Rx = (1000 × 500) / 2000 = 250 Ω\nचरण 3: Q = (2π × 1000 × 0.25) / 250 = 6.28',
                  bn: 'ধাপ ১: Lx = ১০০০ × ৫০০ × ০.৫×১০⁻⁶ = ০.২৫ H = ২৫০ mH\nধাপ ২: Rx = (১০০০ × ৫০০) / ২০০০ = ২৫০ Ω\nধাপ ৩: Q = (২π × ১০০০ × ০.২৫) / ২৫০ = ৬.২৮'
                },
                givenValues: { 'R2': '1000 Ω', 'R3': '500 Ω', 'R4': '2000 Ω', 'C4': '0.5 μF', 'Frequency f': '1000 Hz' },
                finalAnswer: {
                  en: 'Lx = 250 mH, Rx = 250 Ω, Quality Factor Q = 6.28',
                  hi: 'Lx = 250 mH, Rx = 250 Ω, Q-फैक्टर = 6.28',
                  bn: 'Lx = ২৫০ mH, Rx = ২৫০ Ω, Q-ফ্যাক্টর = ৬.২৮'
                }
              }
            ],
            mcqs: [
              {
                id: 'mcq-meas-7',
                question: {
                  en: 'Which AC bridge is used for measuring high-Q (Q > 10) inductors?',
                  hi: 'उच्च गुणवत्ता कारक (Q > 10) वाले प्रेरकत्व मापने हेतु कौन सा ब्रिज प्रयुक्त होता है?',
                  bn: 'উচ্চ কোয়ালিটি ফ্যাক্টর (Q > ১০) বিশিষ্ট ইন্ডাকটর পরিমাপে কোন ব্রিজ ব্যবহৃত হয়?'
                },
                options: [
                  { id: 'opt-1', text: { en: 'Maxwell Bridge', hi: 'मैक्सवेल ब्रिज', bn: 'ম্যাক্সওয়েল ব্রিজ' } },
                  { id: 'opt-2', text: { en: 'Hay\'s Bridge', hi: 'हेय (Hay\'s) ब्रिज', bn: 'হেইস ব্রিজ' } },
                  { id: 'opt-3', text: { en: 'Schering Bridge', hi: 'शेरिंग ब्रिज', bn: 'শিয়ারিং ব্রিজ' } },
                  { id: 'opt-4', text: { en: 'De Sauty Bridge', hi: 'डी सॉटी ब्रिज', bn: 'ডি সটি ব্রিজ' } }
                ],
                correctOptionId: 'opt-2',
                explanation: {
                  en: 'Hay\'s bridge uses a series capacitor-resistor combination in arm 4, making balance sharp and practical for high Q inductors.',
                  hi: 'हेय ब्रिज की भुजा 4 में श्रेणी कैपेसिटर-प्रतिरोध होता है, जो उच्च Q कॉइल्स के लिए सर्वोत्तम है।',
                  bn: 'হেইস ব্রিজের ৪ নং আর্মে ক্যাপাসিটর ও রেজিস্টর সিরিজে যুক্ত থাকায় এটি উচ্চ Q কয়েলের জন্য সবচেয়ে নিখুঁত ব্যালেন্স দেয়।'
                }
              }
            ]
          }
        }
      ]
    },
    {
      id: 'meas-ch5-electronic-transducers',
      subjectId: 'electrical-measurements',
      order: 5,
      title: {
        en: 'Module 5: Electronic Meters, CRO/DSO & Transducers',
        hi: 'मॉड्यूल 5: इलेक्ट्रॉनिक मीटर, CRO/DSO एवं ट्रांसड्यूसर',
        bn: 'মডিউল ৫: ডিজিটাল মিটার, CRO/DSO ও ট্রান্সডিউসার'
      },
      topics: [
        {
          id: 'meas-tp8-cro-oscilloscope',
          chapterId: 'meas-ch5-electronic-transducers',
          order: 1,
          level: 'Core',
          title: {
            en: '8. Cathode Ray Oscilloscope (CRO) & DSO',
            hi: '8. कैथोड रे ऑसिलोस्कोप (CRO) एवं DSO',
            bn: '৮. ক্যাথোড রে অসিলোস্কোপ (CRO) ও ডিজিটাল স্টোরেজ অসিলোস্কোপ (DSO)'
          },
          description: {
            en: 'CRT electron gun, electrostatic deflection, time base generator, Lissajous figures for frequency and phase angle measurement, and Digital Storage Oscilloscopes.',
            hi: 'CRT इलेक्ट्रॉन गन, इलेक्ट्रोस्टैटिक विक्षेप, टाइम बेस जनरेटर, लिसाजू आकृतियों (Lissajous) द्वारा आवृत्ति एवं फेज मापन।',
            bn: 'CRT ইলেকট্রন গান, ইলেক্ট্রোস্ট্যাটিক ডিফ্লেকশন, টাইম বেস জেনারেটর এবং লিসাজাস ফিগারের মাধ্যমে ফেজ ও ফ্রিকোয়েন্সি পরিমাপ।'
          },
          lesson: {
            id: 'lesson-meas-tp8',
            topicId: 'meas-tp8-cro-oscilloscope',
            title: {
              en: 'Cathode Ray Oscilloscope: Construction, Time Base & Lissajous Patterns',
              hi: 'कैथोड रे ऑसिलोस्कोप: संरचना, टाइम बेस एवं लिसाजू पैटर्न',
              bn: 'ক্যাথোড রে অসিলোস্কোপ: গঠন, টাইম বেস ও লিসাজাস প্যাটার্ন'
            },
            description: {
              en: 'Comprehensive principles of CRT, sawtooth sweep generator, synchronization, and phase/frequency determination via Lissajous patterns.',
              hi: 'CRT के सिद्धांत, सॉटूथ स्वीप जनरेटर और लिसाजू पैटर्न से फेज एवं आवृत्ति ज्ञात करने की विधियां।',
              bn: 'CRT এর কার্যপদ্ধতি, স-টুথ সুইপ জেনারেটর এবং লিসাজাস প্যাটার্ন দ্বারা ফেজ ডিফারেন্স ও ফ্রিকোয়েন্সি নির্ণয়।'
            },
            detailedExplanation: {
              en: 'The Cathode Ray Oscilloscope (CRO) is a versatile visual instrument for displaying voltage waveforms against time. Key subsystems of the Cathode Ray Tube (CRT):\n\n1. Electron Gun: Indirectly heated barium oxide cathode emits electrons by thermionic emission. Control grid (negative potential) regulates beam intensity/brightness. Pre-accelerating and accelerating anodes (high positive potential, 1–10 kV) accelerate and focus the beam into a fine pencil.\n2. Deflection Plates:\n- Y-plates (Vertical): Driven by the input signal to deflect the beam vertically.\n- X-plates (Horizontal): Driven by a linear sawtooth voltage generator (Time Base Generator) to sweep the electron spot across the screen horizontally from left to right at constant velocity.\n3. Phosphor Screen: Coated with zinc sulfide or phosphorus to emit visible light upon electron impact (fluorescence & phosphorescence).\n\nLissajous Patterns (X-Y Mode):\nWhen two sinusoidal signals of frequencies $f_y$ and $f_x$ are applied simultaneously to vertical and horizontal plates without time base:\n\n$$\\frac{f_y}{f_x} = \\frac{\\text{Number of Horizontal Tangencies}}{\\text{Number of Vertical Tangencies}}$$\n\nPhase Difference ($\\phi$) Measurement from Ellipse in 1st & 3rd Quadrants:\n$$\\sin\\phi = \\frac{Y_1}{Y_2} = \\frac{\\text{Y-intercept}}{\\text{Y-maximum}}$$',
              hi: 'CRO वोल्टेज तरंगों को समय के सापेक्ष स्क्रीन पर प्रदर्शित करता है।\n- इलेक्ट्रॉन गन: कैथोड से उत्सर्जित इलेक्ट्रॉनों को बीम के रूप में केंद्रित करता है।\n- वर्टिकल प्लेट्स (Y): इनपुट सिग्नल प्राप्त करती हैं।\n- हॉरिजॉन्टल प्लेट्स (X): टाइम बेस जनरेटर से सॉटूथ वोल्टेज प्राप्त करती हैं।\n\nलिसाजू पैटर्न (Lissajous Patterns):\nजब X और Y दोनों प्लेटों पर साइन तरंगे दी जाती हैं:\n$$\\frac{f_y}{f_x} = \\frac{\\text{हॉरिजॉन्टल स्पर्श रेखाओं की संख्या}}{\\text{वर्टिकल स्पर्श रेखाओं की संख्या}}$$\nफेज अंतर: $\\sin\\phi = \\frac{Y_1}{Y_2}$ (Y-अक्ष अंतःखंड / Y-अधिकतम)',
              bn: 'CRO ভোল্টেজ তরঙ্গকে সময়ের সাপেক্ষে স্ক্রিনে প্রদর্শন করে।\n- ইলেকট্রন গান: ইলেকট্রন নির্গমন ও সরু বিম তৈরি করে।\n- ভার্টিক্যাল প্লেট (Y): পরিমাপযোগ্য ইনপুট সিগন্যাল গ্রহণ করে।\n- হরাইজন্টাল প্লেট (X): টাইম বেস জেনারেটরের স-টুথ সুইপ ভোল্টেজ পায়।\n\nলিসাজাস প্যাটার্ন (Lissajous Figures):\nX এবং Y উভয় প্লেটে এসি সিগন্যাল প্রয়োগ করলে উৎপন্ন চিত্র:\n$$\\frac{f_y}{f_x} = \\frac{\\text{অনুভূমিক স্পর্শকের সংখ্যা}}{\\text{উল্লম্ব স্পর্শকের সংখ্যা}}$$\nফেজ পার্থক্য: $\\sin\\phi = \\frac{Y_1}{Y_2}$'
            },
            formulas: [
              {
                id: 'f-lissajous-freq',
                name: { en: 'Frequency Ratio from Lissajous', hi: 'लिसाजू से आवृत्ति अनुपात', bn: 'লিসাজাস ফ্রিকোয়েন্সি অনুপাত' },
                formula: '\\frac{f_y}{f_x} = \\frac{N_H}{N_V} = \\frac{\\text{Horizontal Tangencies}}{\\text{Vertical Tangencies}}',
                description: {
                  en: 'Frequency Ratio from Lissajous Pattern Tangencies',
                  hi: 'हॉरिजॉन्टल एवं वर्टिकल स्पर्श रेखाओं से आवृत्ति अनुपात',
                  bn: 'স্পর্শকের সংখ্যা থেকে ফ্রিকোয়েন্সি অনুপাত নির্ণয়'
                }
              },
              {
                id: 'f-lissajous-phase',
                name: { en: 'Phase Angle Difference', hi: 'फेज अंतर सूत्र', bn: 'ফেজ পার্থক্য সমীকরণ' },
                formula: '\\sin\\phi = \\frac{Y_1}{Y_2} \\implies \\phi = \\sin^{-1}\\left(\\frac{Y_1}{Y_2}\\right)',
                description: {
                  en: 'Phase Angle Difference from Ellipse Y-intercept and Y-max',
                  hi: 'Y1 और Y2 द्वारा फेज कोण का निर्धारण',
                  bn: 'লিসাজাস উপবৃত্ত থেকে ফেজ কোণ নির্ণয়'
                }
              }
            ],
            solvedExamples: [
              {
                id: 'ex-cro-1',
                problem: {
                  en: 'A symmetrical ellipse is obtained on a CRO screen when two sinusoidal signals of the same frequency are applied to X and Y channels. The ellipse cuts the vertical axis at Y1 = 3 cm and maximum vertical deflection is Y2 = 5 cm. Calculate the phase difference between the signals.',
                  hi: 'CRO स्क्रीन पर X और Y चैनलों पर समान आवृत्ति के सिग्नलों से एक सममित दीर्घवृत्त प्राप्त होता है। यह Y-अक्ष को Y1 = 3 cm पर काटता है और अधिकतम विक्षेप Y2 = 5 cm है। फेज अंतर ज्ञात करें।',
                  bn: 'একটি CRO স্ক্রিনে একই ফ্রিকোয়েন্সির দুটি এসি সিগন্যাল প্রয়োগে একটি উপবৃত্ত পাওয়া গেল যা উল্লম্ব অক্ষকে Y1 = ৩ cm এ কাটে এবং সর্বোচ্চ বিস্তার Y2 = ৫ cm। সিগন্যালদ্বয়ের মধ্যকার ফেজ পার্থক্য নির্ণয় করুন।'
                },
                solution: {
                  en: 'Step 1: sin φ = Y1 / Y2 = 3 / 5 = 0.60\nStep 2: φ = sin⁻¹(0.60) = 36.87° (or 180° - 36.87° = 143.13°)',
                  hi: 'चरण 1: sin φ = 3 / 5 = 0.60\nचरण 2: φ = sin⁻¹(0.60) = 36.87°',
                  bn: 'ধাপ ১: sin φ = ৩ / ৫ = ০.৬০\nধাপ ২: φ = sin⁻¹(০.৬০) = ৩৬.৮৭°'
                },
                givenValues: { 'Y1 (Y-intercept)': '3 cm', 'Y2 (Y-max)': '5 cm' },
                finalAnswer: {
                  en: 'Phase Angle Difference φ = 36.87°',
                  hi: 'फेज कोण अंतर φ = 36.87°',
                  bn: 'ফেজ কোণ পার্থক্য φ = ৩৬.৮৭°'
                }
              }
            ],
            mcqs: [
              {
                id: 'mcq-meas-8',
                question: {
                  en: 'When two sinusoidal signals of equal amplitude and 90° phase difference are applied to the X and Y plates of a CRO, the displayed screen pattern will be a:',
                  hi: 'जब समान आयाम और 90° फेज अंतर वाले दो सिग्नल CRO के X और Y प्लेटों पर दिए जाते हैं, तो स्क्रीन पर दिखने वाला पैटर्न होगा:',
                  bn: 'সমান বিস্তার এবং ৯০° ফেজ পার্থক্যের দুটি এসি সিগন্যাল CRO এর X ও Y প্লেটে প্রয়োগ করা হলে স্ক্রিনে কোন চিত্র দেখা যাবে:'
                },
                options: [
                  { id: 'opt-1', text: { en: 'Straight line at 45°', hi: '45° पर सीधी रेखा', bn: '৪৫° কোণে সরলরেখা' } },
                  { id: 'opt-2', text: { en: 'Circle', hi: 'वृत्त (Circle)', bn: 'বৃত্ত (Circle)' } },
                  { id: 'opt-3', text: { en: 'Horizontal ellipse', hi: 'क्षैतिज दीर्घवृत्त', bn: 'অনুভূমিক উপবৃত্ত' } },
                  { id: 'opt-4', text: { en: 'Figure-eight (8)', hi: 'आठ (8) की आकृति', bn: 'আট (8) আকৃতির ফিগার' } }
                ],
                correctOptionId: 'opt-2',
                explanation: {
                  en: 'Equal amplitudes with φ = 90° yields x² + y² = R², generating a perfect circle on the CRO screen.',
                  hi: 'समान आयाम और 90° कोण पर x² + y² = R² का समीकरण बनता है जो एक पूर्ण वृत्त बनाता है।',
                  bn: 'সমান বিস্তার ও ৯০° ফেজ পার্থক্যে সমীকরণটি x² + y² = R² হয় যা একটি সম্পূর্ণ বৃত্ত তৈরি করে।'
                }
              }
            ]
          }
        },
        {
          id: 'meas-tp9-transducers-sensors',
          chapterId: 'meas-ch5-electronic-transducers',
          order: 2,
          level: 'Core',
          title: {
            en: '9. Industrial Transducers (LVDT, RTD, Thermocouple & Strain Gauge)',
            hi: '9. औद्योगिक ट्रांसड्यूसर (LVDT, RTD, थर्मोकपल एवं स्ट्रेन गेज)',
            bn: '৯. ইন্ডাস্ট্রিয়াল ট্রান্সডিউসার ও সেন্সর (LVDT, RTD, থার্মোকাপল ও স্ট্রেন গেজ)'
          },
          description: {
            en: 'Primary vs Secondary transducers, LVDT linear displacement, RTD (Pt-100 Callendar-Van Dusen equation), Thermocouple (Seebeck effect), Piezoelectric effect, and Strain Gauge gauge factor (GF).',
            hi: 'प्राथमिक एवं द्वितीयक ट्रांसड्यूसर, LVDT विस्थापन मापन, RTD (Pt-100), थर्मोकपल (सीबेक प्रभाव), स्ट्रेन गेज (गेज फैक्टर)।',
            bn: 'LVDT লিনিয়ার ডিসপ্লেসমেন্ট সেন্সর, RTD (Pt-100), থার্মোকাপল (সিব্যাক প্রভাব), পিজোইলেকট্রিক সেন্সর এবং স্ট্রেন গেজ ফ্যাক্টর।'
          },
          lesson: {
            id: 'lesson-meas-tp9',
            topicId: 'meas-tp9-transducers-sensors',
            title: {
              en: 'Electrical Transducers for Industrial Automation & Instrumentation',
              hi: 'औद्योगिक ऑटोमेशन एवं मापन हेतु इलेक्ट्रिकल ट्रांसड्यूसर',
              bn: 'ইন্ডাস্ট্রিয়াল অটোমেশন ও ইনস্ট্রুমেন্টেশনের জন্য ইলেকট্রিক্যাল ট্রান্সডিউসার'
            },
            description: {
              en: 'Classification of transducers, detailed operation of LVDT differential transformer, temperature sensors (RTD vs Thermocouple), and strain measurement.',
              hi: 'ट्रांसड्यूसर का वर्गीकरण, LVDT का कार्य सिद्धांत, तापमान सेंसर और स्ट्रेन गेज विश्लेषण।',
              bn: 'ট্রান্সডিউসারের শ্রেণিবিভাগ, LVDT ডিফারেনশিয়াল ট্রান্সফরমার, তাপমাত্রা সেন্সর (RTD ও থার্মোকাপল) এবং স্ট্রেন পরিমাপ।'
            },
            detailedExplanation: {
              en: 'A transducer converts a non-electrical physical quantity (displacement, temperature, pressure, force) into an electrical voltage, current, or resistance variation.\n\n1. Linear Variable Differential Transformer (LVDT):\nPassive inductive displacement transducer consisting of one primary winding ($P$) and two identical secondary windings ($S_1, S_2$) wound differentially in series opposition on a cylindrical former. A movable soft iron core inside modulates mutual coupling:\n$$V_{\\text{out}} = V_{S1} - V_{S2}$$\n- At null position (center): $V_{S1} = V_{S2} \\implies V_{\\text{out}} = 0$.\n- Motion to left: $V_{S1} > V_{S2} \\implies V_{\\text{out}}$ is in phase with primary.\n- Motion to right: $V_{S2} > V_{S1} \\implies V_{\\text{out}}$ is $180^\\circ$ out of phase with primary.\n\n2. Resistance Temperature Detector (RTD - Pt100):\nPositive temperature coefficient (PTC) device using pure platinum ($R_0 = 100\\,\\Omega$ at $0^\\circ\\text{C}$):\n$$R_T = R_0 (1 + \\alpha T)$$\nHigh linearity, excellent stability and repeatability for $-200^\\circ\\text{C}$ to $+650^\\circ\\text{C}$.\n\n3. Thermocouple:\nActive transducer based on the Seebeck Effect: when two dissimilar metal wires (e.g. Chromel-Alumel Type K, Iron-Constantan Type J) are joined at two junctions maintained at different temperatures ($T_{\\text{hot}}$ and $T_{\\text{ref}}$), a thermo-EMF is generated:\n$$E = a \\Delta T + b (\\Delta T)^2$$\n\n4. Strain Gauge:\nPiezoresistive sensor where mechanical strain ($\\epsilon = \\Delta L / L$) changes electrical resistance:\n$$\\text{Gauge Factor (GF)} = \\frac{\\Delta R / R}{\\Delta L / L} = 1 + 2\\nu + \\frac{\\Delta \\rho / \\rho}{\\epsilon}$$',
              hi: 'ट्रांसड्यूसर गैर-विद्युत भौतिक राशि (ताप, दाब, विस्थापन) को विद्युत सिग्नल में बदलता है।\n\n1. LVDT: विस्थापन मापन हेतु एक प्राइमरी और दो विपरीत जुड़ी सेकेंडरी कॉइल होती हैं। आउटपुट $V_{\\text{out}} = V_{S1} - V_{S2}$।\n2. RTD (Pt-100): प्लैटिनम का तापमान बढ़ने पर प्रतिरोध बढ़ता है ($R_T = R_0(1+\\alpha T)$)।\n3. थर्मोकपल: सीबेक प्रभाव (Seebeck Effect) पर आधारित सक्रिय तापमान सेंसर।\n4. स्ट्रेन गेज: यांत्रिक खिंचाव से प्रतिरोध बदलता है। गेज फैक्टर $GF = \\frac{\\Delta R/R}{\\Delta L/L}$।',
              bn: 'ট্রান্সডিউসার কোনো ভৌত রাশিকে (তাপমাত্রা, চাপ, সরণ, বল) আনুপাতিক বৈদ্যুতিক সংকেতে রূপান্তর করে।\n\n১. LVDT: ইন্ডাকটিভ ডিসপ্লেসমেন্ট সেন্সর যার সেকেন্ডারি কয়েল দুটি সিরিজে বিপরীতমুখী যুক্ত থাকে ($V_{\\text{out}} = V_{S1} - V_{S2}$)।\n২. RTD (Pt-100): প্ল্যাটিনামের ধনাত্মক তাপমাত্রা সহগ নির্ভর রোধ পরিবর্তন ($R_T = R_0(1+\\alpha T)$)।\n৩. থার্মোকাপল: সিব্যাক ইফেক্টের ওপর ভিত্তি করে তাপমাত্রার পার্থক্যে ইএমএফ উৎপন্নকারী সক্রিয় সেন্সর।\n৪. স্ট্রেন গেজ: মেকানিক্যাল টানের কারণে রোধের পরিবর্তন। গেজ ফ্যাক্টর $GF = \\frac{\\Delta R/R}{\\Delta L/L}$।'
            },
            formulas: [
              {
                id: 'f-lvdt-out',
                name: { en: 'LVDT Output Differential Voltage', hi: 'LVDT आउटपुट वोल्टेज', bn: 'LVDT আউটপুট ভোল্টেজ' },
                formula: 'V_{\\text{out}} = V_{S1} - V_{S2} \\propto x \\quad [\\text{mV}]',
                description: {
                  en: 'Differential Output Voltage of LVDT directly proportional to core displacement x',
                  hi: 'LVDT का डिफरेंशियल आउटपुट वोल्टेज',
                  bn: 'কোরের সরণের সমানুপাতিক LVDT ডিফারেনশিয়াল ভোল্টেজ'
                }
              },
              {
                id: 'f-gauge-factor',
                name: { en: 'Strain Gauge Factor', hi: 'स्ट्रेन गेज फैक्टर', bn: 'স্ট্রেন গেজ ফ্যাক্টর' },
                formula: 'GF = \\frac{\\Delta R / R}{\\epsilon} = 1 + 2\\nu + \\frac{\\Delta\\rho / \\rho}{\\epsilon}',
                description: {
                  en: 'Strain Gauge Factor (ν = Poisson Ratio, ε = Strain)',
                  hi: 'स्ट्रेन गेज फैक्टर समीकरण',
                  bn: 'স্ট্রেন গেজ ফ্যাক্টর সমীকরণ'
                }
              }
            ],
            solvedExamples: [
              {
                id: 'ex-strain-1',
                problem: {
                  en: 'A resistance strain gauge with nominal resistance R = 120 Ω and Gauge Factor GF = 2.0 is subjected to a strain of 1000 microstrain (1000 × 10⁻⁶). Calculate the change in resistance ΔR.',
                  hi: 'एक 120 Ω प्रतिरोध एवं 2.0 गेज फैक्टर वाले स्ट्रेन गेज पर 1000 माइक्रोस्ट्रेन (1000 × 10⁻⁶) का खिंचाव लगाया जाता है। प्रतिरोध में परिवर्तन ΔR ज्ञात कीजिए।',
                  bn: 'একটি ১২০ Ω নামমাত্র রোধ এবং ২.০ গেজ ফ্যাক্টর বিশিষ্ট স্ট্রেন গেজের ওপর ১০০০ মাইক্রোস্ট্রেন (১০০০ × ১০⁻⁶) প্রয়োগ করা হলো। রোধের পরিবর্তন ΔR নির্ণয় করুন।'
                },
                solution: {
                  en: 'Step 1: Formula GF = (ΔR / R) / ε\nStep 2: ΔR = GF × R × ε = 2.0 × 120 Ω × (1000 × 10⁻⁶)\nStep 3: ΔR = 2.0 × 120 × 0.001 = 0.24 Ω\nStep 4: New total resistance = 120 + 0.24 = 120.24 Ω',
                  hi: 'चरण 1: ΔR = GF × R × ε\nचरण 2: ΔR = 2.0 × 120 × 0.001 = 0.24 Ω',
                  bn: 'ধাপ ১: ΔR = GF × R × ε\nধাপ ২: ΔR = ২.০ × ১২০ × ০.০০১ = ০.২৪ Ω'
                },
                givenValues: { 'Nominal Resistance R': '120 Ω', 'Gauge Factor (GF)': '2.0', 'Strain (ε)': '1000 × 10⁻⁶' },
                finalAnswer: {
                  en: 'Change in Resistance ΔR = 0.24 Ω',
                  hi: 'प्रतिरोध में परिवर्तन ΔR = 0.24 Ω',
                  bn: 'রোধের পরিবর্তন ΔR = ০.২৪ Ω'
                }
              }
            ],
            mcqs: [
              {
                id: 'mcq-meas-9',
                question: {
                  en: 'At the null position of an LVDT, the output differential voltage is ideally:',
                  hi: 'LVDT की नल (केंद्र) स्थिति पर आउटपुट विभवांतर आदर्श रूप से होता है:',
                  bn: 'LVDT এর কেন্দ্রস্থ (Null) অবস্থানে আউটপুট ডিফারেনশিয়াল ভোল্টেজ আদর্শ ক্ষেত্রে কত হয়:'
                },
                options: [
                  { id: 'opt-1', text: { en: 'Maximum positive', hi: 'अधिकतम धनात्मक', bn: 'সর্বোচ্চ পজিটিভ' } },
                  { id: 'opt-2', text: { en: 'Zero', hi: 'शून्य (Zero)', bn: 'শূন্য (Zero)' } },
                  { id: 'opt-3', text: { en: '180° out of phase with supply', hi: '180° फेज विपरीत', bn: '১৮০° বিপরীত ফেজে' } },
                  { id: 'opt-4', text: { en: 'Infinite', hi: 'अनंत', bn: 'অসীম' } }
                ],
                correctOptionId: 'opt-2',
                explanation: {
                  en: 'At center null position, equal magnetic fluxes link both secondary windings (VS1 = VS2), producing zero net output voltage.',
                  hi: 'केंद्र में दोनों सेकेंडरी कॉइल्स में समान वोल्टेज (VS1 = VS2) प्रेरित होता है, जिससे आउटपुट Vout = VS1 - VS2 = 0 होता है।',
                  bn: 'কেন্দ্রে উভয় সেকেন্ডারি কয়েলে সমান ভোল্টেজ (VS1 = VS2) আবিষ্ট হওয়ায় নিট আউটপুট ভোল্টেজ শূন্য হয়।'
                }
              }
            ]
          }
        }
      ]
    }
  ]
};
