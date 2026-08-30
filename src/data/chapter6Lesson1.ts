import { Lesson } from '../types';

export const LESSON_ELECTRICAL_MACHINES_FUNDAMENTALS: Lesson = {
  id: 'lsn-ch6-electrical-machines-fundamentals',
  topicId: 'ch6-electrical-machines-fundamentals',
  chapterId: 'ch-electrical-machines',
  order: 9,
  title: {
    en: 'Electrical Machines Fundamentals & Energy Conversion',
    hi: 'विद्युत मशीनों के मूल सिद्धांत एवं ऊर्जा रूपांतरण',
    bn: 'ইলেকট্রিক্যাল মেশিনের মৌলিক ধারণা ও শক্তি রূপান্তর'
  },
  description: {
    en: 'Electromechanical energy conversion principles, motor/generator/transformer actions, magnetic coupling, and power flow.',
    hi: 'विद्युत-यांत्रिक ऊर्जा रूपांतरण सिद्धांत, मोटर/जनरेटर/ट्रांसफॉर्मर क्रियाएं, चुंबकीय युग्मन एवं शक्ति प्रवाह।',
    bn: 'ইলেক্ট্রোমেকানিক্যাল শক্তি রূপান্তরের মূলনীতি, মোটর/জেনারেটর/ট্রান্সফরমার কার্যপ্রণালী ও পাওয়ার প্রবাহ।'
  },
  easyExplanation: {
    en: 'An electrical machine is an electromechanical or electromagnetic device that converts mechanical energy into electrical energy (Generator), electrical energy into mechanical energy (Motor), or changes the voltage/current levels of AC electrical power statically (Transformer), using a magnetic field as the coupling medium.',
    hi: 'विद्युत मशीन एक विद्युत-यांत्रिक या विद्युतचुंबकीय उपकरण है जो चुंबकीय क्षेत्र को माध्यम बनाकर यांत्रिक ऊर्जा को विद्युत ऊर्जा में (जनरेटर), विद्युत ऊर्जा को यांत्रिक ऊर्जा में (मोटर), या AC विद्युत शक्ति के वोल्टेज स्तर को स्थिर रूप से (ट्रांसफॉर्मर) परिवर्तित करती है।',
    bn: 'ইলেকট্রিক্যাল মেশিন হলো একটি তড়িচ্চুম্বকীয় যন্ত্র যা চৌম্বক ক্ষেত্রকে মাধ্যম হিসেবে ব্যবহার করে যান্ত্রিক শক্তিকে বিদ্যুৎ শক্তিতে (জেনারেটর), বিদ্যুৎ শক্তিকে যান্ত্রিক শক্তিতে (মোটর), অথবা স্থিরভাবে AC বিদ্যুতের ভোল্টেজ রূপান্তর (ট্রান্সফরমার) করে।'
  },
  detailedExplanation: {
    en: `1. What is an Electrical Machine?
An electrical machine is an apparatus that converts energy from one form to another where at least one of the forms is electrical. Electrical machines are the backbone of modern power generation, transmission, industrial automation, transportation, and consumer appliances.

2. Principles of Energy Conversion:
All energy conversion processes obey the fundamental First Law of Thermodynamics (Law of Conservation of Energy):
Total Input Energy = Useful Output Energy + Energy Stored in Field + Energy Dissipated as Losses.
In steady-state continuous operation, net field energy change is zero over a complete cycle, giving:
P_input = P_output + P_losses.

3. Electrical-to-Mechanical Conversion (Motor Action):
When electric current flows through a conductor placed within a magnetic field, the conductor experiences a Lorentz mechanical force:
F = B · I · L · sin(θ) [Newtons]
In rotary machines, the cumulative tangential forces developed on armature conductors produce an electromagnetic torque (T_e), driving mechanical rotation.

4. Mechanical-to-Electrical Conversion (Generator Action):
When a conductor is moved mechanically through a magnetic flux density (or magnetic flux changes relative to a coil), an electromotive force (EMF) is dynamically induced according to Faraday's Law of Electromagnetic Induction:
e = B · L · v · sin(θ) [Volts]
When closed through an external circuit, this induced EMF circulates an electric load current, delivering electrical power.

5. Electromechanical Energy Conversion:
Electromechanical conversion involves moving parts (rotors, shafts). The magnetic field acts as an elastic, bidirectional coupling medium connecting the electrical and mechanical systems. Energy cannot transfer directly; it must be temporarily stored and transmitted through the magnetic field in the air gap.

6. Transformer Action (Stationary Electromagnetic Conversion):
A transformer is a static electrical machine with no moving parts. It transfers AC electrical power between two or more circuits at the same frequency through time-varying mutual magnetic flux linking primary and secondary windings. (Note: Transformers are electromagnetic conversion devices, not electromechanical machines).

7. The Magnetic Field as the Energy Transfer Medium:
Why is a magnetic field used rather than an electric (electrostatic) field?
- Magnetic fields possess substantially higher energy density (W_mag = B² / 2μ₀ ≈ 400,000 J/m³ at 1.0 Tesla) compared to dielectric breakdown limits of electrostatic fields in air (~40 J/m³ at 3 kV/mm).
- High-permeability ferromagnetic materials (silicon steel) efficiently channel and concentrate magnetic flux with minimal excitation power.

8. Classification of Electrical Machines:
- Rotating Machines (Electromechanical):
  * DC Machines: DC Motors (Shunt, Series, Compound, BLDC) and DC Generators.
  * AC Machines: Synchronous Machines (Alternators, Synchronous Motors) and Asynchronous / Induction Machines (Squirrel-cage, Slip-ring).
- Static Machines (Electromagnetic):
  * Transformers: Single-phase, Three-phase, Step-up, Step-down, Autotransformers, Instrument transformers (CT/PT).

9. Efficiency Concept:
The efficiency (η) of any electrical machine is the ratio of useful output power to total input power, expressed as a percentage:
η = (P_output / P_input) × 100% = [ P_output / (P_output + P_losses) ] × 100%
For motors: P_in is electrical (V·I), P_out is mechanical (T·ω).
For generators: P_in is mechanical (T·ω), P_out is electrical (V·I).

10. Machine Losses Overview:
- Copper Losses (I²R): Ohmic heating in armature and field winding conductors.
- Iron / Core Losses: Hysteresis loss (energy lost in cyclic domain reversal) and Eddy current loss (circulating currents in magnetic core laminations).
- Mechanical Losses: Friction at bearings/brushes and aerodynamic windage resistance of the rotor.
- Stray Load Losses: Additional high-frequency and leakage flux distortion losses.`,
    hi: `1. विद्युत मशीन क्या है?
विद्युत मशीन वह उपकरण है जो ऊर्जा को एक रूप से दूसरे रूप में परिवर्तित करता है जिसमें कम से कम एक रूप विद्युत ऊर्जा होता है। यह आधुनिक विद्युत उत्पादन, पारेषण एवं औद्योगिक स्वचालन का आधार है।

2. ऊर्जा रूपांतरण के सिद्धांत:
सभी ऊर्जा रूपांतरण ऊर्जा संरक्षण के नियम का पालन करते हैं:
कुल इनपुट ऊर्जा = उपयोगी आउटपुट ऊर्जा + हानियों के रूप में नष्ट ऊर्जा।
स्थिर अवस्था में: P_in = P_out + P_losses।

3. विद्युत से यांत्रिक रूपांतरण (मोटर क्रिया):
जब चुंबकीय क्षेत्र में स्थित चालक में धारा बहती है, तो उस पर लोरेंट्ज़ बल (F = B·I·L·sinθ) कार्य करता है, जो रोटर पर टॉर्क उत्पन्न कर यांत्रिक घूर्णन पैदा करता है।

4. यांत्रिक से विद्युत रूपांतरण (जनरेटर क्रिया):
जब किसी चालक को चुंबकीय क्षेत्र में घुमाया जाता है, तो फैराडे के नियमानुसार उसमें गतिशील EMF (e = B·L·v·sinθ) उत्पन्न होता है, जिससे विद्युत धारा बहती है।

5. विद्युत-यांत्रिक ऊर्जा रूपांतरण:
चुंबकीय क्षेत्र विद्युत और यांत्रिक प्रणालियों के बीच एक लचीले युग्मन माध्यम के रूप में कार्य करता है। ऊर्जा सीधे स्थानांतरित नहीं होती बल्कि एयर-गैप के चुंबकीय क्षेत्र के माध्यम से प्रवाहित होती है।

6. ट्रांसफॉर्मर क्रिया (स्थैतिक रूपांतरण):
ट्रांसफॉर्मर एक स्थिर विद्युत मशीन है जिसमें कोई घूमने वाला भाग नहीं होता। यह पारस्परिक चुंबकीय प्रेरण द्वारा समान आवृत्ति पर AC वोल्टेज स्तर को बदलता है।

7. ऊर्जा माध्यम के रूप में चुंबकीय क्षेत्र:
चुंबकीय क्षेत्र की ऊर्जा घनत्व (B²/2μ) स्थिरवैद्युत क्षेत्र की तुलना में हजारों गुना अधिक होती है, जिससे अत्यधिक कॉम्पैक्ट और शक्तिशाली मशीनें बनाई जा सकती हैं।

8. मशीनों का वर्गीकरण:
- घूर्णन मशीनें: डीसी मशीनें (मोटर, जनरेटर) एवं एसी मशीनें (इंडक्शन मोटर, सिंक्रोनस मशीनें)।
- स्थैतिक मशीनें: ट्रांसफॉर्मर (स्टेप-अप, स्टेप-डाउन, ऑटो-ट्रांसफॉर्मर)।

9. दक्षता (Efficiency, η):
दक्षता आउटपुट पावर और इनपुट पावर का प्रतिशत अनुपात है:
η = (P_out / P_in) × 100% = [ P_out / (P_out + P_losses) ] × 100%।

10. हानियाँ (Losses):
- कॉपर हानियाँ (I²R): वाइंडिंग में ऊष्मा।
- लौह/कोर हानियाँ: हिस्टैरिसीस एवं भंवर धारा (एडी करंट) हानियाँ।
- यांत्रिक हानियाँ: बेयरिंग घर्षण एवं वायु घर्षण (विंडेज)।`,
    bn: `১. ইলেকট্রিক্যাল মেশিন কী?
ইলেকট্রিক্যাল মেশিন হলো এমন একটি প্রযুক্তিগত যন্ত্র যা শক্তির এক রূপ থেকে অন্য রূপে রূপান্তর ঘটায় যার অন্তত একটি রূপ হলো বিদ্যুৎ শক্তি।

২. শক্তি রূপান্তরের মূলনীতি:
শক্তি সংরক্ষণশীলতা নীতি অনুযায়ী:
মোট ইনপুট শক্তি = প্রয়োজনীয় আউটপুট শক্তি + অপচয়কৃত ক্ষয়ক্ষতি।
স্থির অবস্থায়: P_in = P_out + P_losses।

৩. বিদ্যুৎ থেকে যান্ত্রিক রূপান্তর (মোটর কার্যপ্রণালী):
চৌম্বক ক্ষেত্রে স্থাপিত বিদ্যুৎবাহী পরিবাহীর ওপর লরেন্টজ বল (F = B·I·L·sinθ) প্রযুক্ত হয়, যা আর্মেচারে ইলেক্ট্রোম্যাগনেটিক টর্ক সৃষ্টি করে রোটরকে ঘোরায়।

৪. যান্ত্রিক থেকে বিদ্যুৎ রূপান্তর (জেনারেটর কার্যপ্রণালী):
চৌম্বক ক্ষেত্রে পরিবাহী গতিশীল হলে ফ্যারাডের তড়িচ্চুম্বকীয় আবেশ সূত্রানুযায়ী গতিশীল EMF (e = B·L·v·sinθ) আবিষ্ট হয় এবং বিদ্যুৎ উৎপাদিত হয়।

৫. ইলেক্ট্রোমেকানিক্যাল শক্তি রূপান্তর:
চৌম্বক ক্ষেত্র বিদ্যুৎ ও যান্ত্রিক ব্যবস্থার মাঝে সংযোগকারী কাপলিং মাধ্যম হিসেবে কাজ করে। এয়ার-গ্যাপে চৌম্বক ফ্লাক্সের মাধ্যমে শক্তি সঞ্চালিত হয়।

৬. ট্রান্সফরমার অ্যাকশন (স্থির তড়িচ্চুম্বকীয় রূপান্তর):
ট্রান্সফরমার একটি স্থির যন্ত্র যার কোনো ঘূর্ণায়মান অংশ নেই। এটি পারস্পরিক আবেশের মাধ্যমে অভিন্ন কম্পাঙ্কে AC ভোল্টেজ রূপান্তর করে।

৭. চৌম্বক ক্ষেত্রের গুরুত্ব:
চৌম্বক ক্ষেত্রের শক্তি ঘনত্ব স্থির তড়িৎক্ষেত্রের চেয়ে বহুগুণ বেশি, ফলে কম আয়তনে বিপুল শক্তি রূপান্তর সম্ভব হয়।

৮. ইলেকট্রিক্যাল মেশিনের শ্রেণিবিভাগ:
- ঘূর্ণায়মান মেশিন: ডিসি মেশিন (ডিসি মোটর, ডিসি জেনারেটর), এসি মেশিন (ইন্ডাকশন মোটর, সিঙ্ক্রোনাস মেশিন)।
- স্থির মেশিন: ট্রান্সফরমার (স্টেপ-আপ, স্টেপ-ডাউন)।

৯. কর্মদক্ষতা (Efficiency, η):
η = (P_out / P_in) × 100% = [ P_out / (P_out + P_losses) ] × 100%।

১০. অপচয় বা লস (Losses):
- কপার লস (I²R): তারের ওহমিক রেজিস্ট্যান্সজনিত তাপ।
- কোর বা আয়রন লস: হিস্টেরেসিস লস ও এডি কারেন্ট লস।
- মেকানিক্যাল লস: বিয়ারিং ঘর্ষণ ও বায়বীয় ঘর্ষণ (উইন্ডেজ)।`
  },
  formulas: [
    {
      symbol: 'η',
      expression: '\\eta = \\frac{P_{\\text{out}}}{P_{\\text{in}}} \\times 100\\% = \\frac{P_{\\text{out}}}{P_{\\text{out}} + P_{\\text{loss}}} \\times 100\\%',
      description: {
        en: 'Efficiency of an electrical machine (Percentage)',
        hi: 'विद्युत मशीन की दक्षता (प्रतिशत में)',
        bn: 'ইলেকট্রিক্যাল মেশিনের কর্মদক্ষতা (শতকরা)'
      }
    },
    {
      symbol: 'P_mech',
      expression: 'P_{\\text{mech}} = T \\cdot \\omega = \\frac{2\\pi N T}{60}',
      description: {
        en: 'Mechanical rotational power (T in N·m, N in RPM, P in Watts)',
        hi: 'यांत्रिक घूर्णन शक्ति (T न्यूटन-मीटर में, N चक्कर प्रति मिनट में)',
        bn: 'যান্ত্রিক ঘূর্ণন ক্ষমতা (T হলো টর্ক N·m, N হলো RPM)'
      }
    },
    {
      symbol: 'F',
      expression: 'F = B \\cdot I \\cdot L \\cdot \\sin(\\theta)',
      description: {
        en: 'Lorentz electromagnetic force on current-carrying conductor in magnetic field',
        hi: 'चुंबकीय क्षेत्र में धारावाही चालक पर लोरेंट्ज़ विद्युतचुंबकीय बल',
        bn: 'চৌম্বক ক্ষেত্রে বিদ্যুৎবাহী পরিবাহীর ওপর প্রযুক্ত লরেন্টজ বল'
      }
    },
    {
      symbol: 'e',
      expression: 'e = B \\cdot L \\cdot v \\cdot \\sin(\\theta)',
      description: {
        en: 'Dynamically induced electromotive force (Faraday induction)',
        hi: 'गतिक प्रेरित विद्युतवाहक बल (फैराडे प्रेरण)',
        bn: 'গতিশীল আবিষ্ট তড়িচ্চালক বল (ফ্যারাডের আবেশ)'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-machine-energy-conversion',
      title: {
        en: 'Electromechanical & Electromagnetic Energy Flow Diagram',
        hi: 'विद्युत-यांत्रिक एवं विद्युतचुंबकीय ऊर्जा प्रवाह आरेख',
        bn: 'ইলেক্ট্রোমেকানিক্যাল ও ইলেক্ট্রোম্যাগনেটিক শক্তি প্রবাহ চিত্র'
      },
      caption: {
        en: 'Comprehensive energy conversion path showing electrical system, coupling magnetic field, mechanical output, and internal loss mechanisms.',
        hi: 'विद्युत प्रणाली, युग्मन चुंबकीय क्षेत्र, यांत्रिक आउटपुट एवं आंतरिक हानियों को दर्शाने वाला संपूर्ण ऊर्जा रूपांतरण पथ।',
        bn: 'বৈদ্যুতিক ব্যবস্থা, চৌম্বক কাপলিং মাধ্যম, যান্ত্রিক আউটপুট এবং অভ্যন্তরীণ অপচয় প্রদর্শনকারী সার্বিক শক্তি প্রবাহ ডায়াগ্রাম।'
      },
      svgType: 'machine-energy-conversion'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch6-motor-efficiency',
      problem: {
        en: 'A 415 V, 3-phase electric induction motor draws an electrical input power of 15 kW from the mains supply. If the total internal losses (copper, core, and friction) amount to 2.25 kW, calculate: (a) Useful mechanical output power in kW and horsepower (1 hp = 746 W), and (b) Motor operational efficiency (η).',
        hi: 'एक 415 V, 3-फेज विद्युत मोटर मेन्स से 15 kW विद्युत इनपुट पावर लेती है। यदि कुल आंतरिक हानियाँ 2.25 kW हैं, तो गणना करें: (a) उपयोगी यांत्रिक आउटपुट पावर (kW एवं hp में), और (b) मोटर की परिचालन दक्षता (η)।',
        bn: 'একটি ৪১৫ V, ৩-ফেজ মোটর মেইন সরবরাহ থেকে ১৫ kW বৈদ্যুতিক ইনপুট ক্ষমতা গ্রহণ করে। মোট অভ্যন্তরীণ লস ২.২৫ kW হলে নির্ণয় করুন: (a) কার্যকর যান্ত্রিক আউটপুট ক্ষমতা (kW এবং hp তে), এবং (b) মোটরের কর্মদক্ষতা (η)।'
      },
      solution: {
        en: `Given:
- Input Power P_in = 15 kW = 15,000 W
- Total Losses P_loss = 2.25 kW = 2,250 W

Formulae:
1. P_out = P_in - P_loss
2. Output Power in HP = P_out (Watts) / 746
3. Efficiency η = (P_out / P_in) × 100%

Substitution & Calculation:
(a) P_out = 15 kW - 2.25 kW = 12.75 kW (12,750 W)
    Power in HP = 12,750 / 746 = 17.09 hp

(b) Efficiency:
    η = (12.75 / 15.00) × 100% = 0.850 × 100% = 85.0%

Final Answer:
- Output Power = 12.75 kW (17.09 hp)
- Efficiency η = 85.0%`,
        hi: `दिया गया है:
- इनपुट पावर P_in = 15 kW
- कुल हानियाँ P_loss = 2.25 kW

सूत्र:
1. P_out = P_in - P_loss
2. आउटपुट (HP में) = P_out (वाट्स) / 746
3. दक्षता η = (P_out / P_in) × 100%

गणना:
(a) P_out = 15 - 2.25 = 12.75 kW
    HP = 12,750 / 746 = 17.09 hp
(b) η = (12.75 / 15.00) × 100 = 85.0%

उत्तर:
आउटपुट पावर = 12.75 kW (17.09 hp), दक्षता = 85.0%।`,
        bn: `প্রদত্ত:
- ইনপুট ক্ষমতা P_in = ১৫ kW
- মোট লস P_loss = ২.২৫ kW

সূত্র:
১. P_out = P_in - P_loss
২. HP ক্ষমতা = P_out / ৭৪৬
৩. কর্মদক্ষতা η = (P_out / P_in) × ১০০%

হিসাব:
(a) P_out = ১৫ - ২.২৫ = ১২.৭৫ kW
    HP = ১২,৭৫০ / ৭৪৬ = ১৭.০৯ hp
(b) η = (১২.৭৫ / ১৫.০০) × ১০০ = ৮৫.০%

উত্তর:
আউটপুট ক্ষমতা = ১২.৭৫ kW (১৭.০৯ hp), কর্মদক্ষতা = ৮৫.০%।`
      },
      givenValues: {
        'Input Power (P_in)': '15 kW',
        'Total Losses (P_loss)': '2.25 kW'
      },
      finalAnswer: {
        en: 'Mechanical Output = 12.75 kW (17.09 hp), Efficiency η = 85.0%',
        hi: 'यांत्रिक आउटपुट = 12.75 kW (17.09 hp), दक्षता η = 85.0%',
        bn: 'যান্ত্রিক আউটপুট = ১২.৭৫ kW (১৭.০৯ hp), কর্মদক্ষতা η = ৮৫.০%'
      }
    },
    {
      id: 'ex-ch6-motor-torque',
      problem: {
        en: 'A DC motor delivers a useful mechanical output shaft power of 7.5 kW while running smoothly at a rated rotational speed of N = 1440 RPM. Calculate the mechanical torque (T) developed on the motor shaft in Newton-meters (N·m).',
        hi: 'एक डीसी मोटर N = 1440 RPM की रेटेड गति पर चलते हुए 7.5 kW की उपयोगी यांत्रिक शाफ्ट पावर प्रदान करती है। मोटर शाफ्ट पर विकसित यांत्रिक टॉर्क (T) की न्यूटन-मीटर (N·m) में गणना करें।',
        bn: 'একটি ডিসি মোটর N = ১৪৪০ RPM গতিতে ঘুরতে ঘুরতে ৭.৫ kW কার্যকর যান্ত্রিক শ্যাফট ক্ষমতা প্রদান করে। মোটরের শ্যাফটে উৎপন্ন যান্ত্রিক টর্ক (T) N·m এককে নির্ণয় করুন।'
      },
      solution: {
        en: `Given:
- Output Mechanical Power P_out = 7.5 kW = 7,500 W
- Rotational Speed N = 1440 RPM

Formula:
Mechanical Power P = T · ω = (2 · π · N · T) / 60
Therefore, Torque T = (P × 60) / (2 · π · N)

Substitution:
T = (7500 × 60) / (2 × 3.14159265 × 1440)
T = 450,000 / (9047.787)

Calculation:
T = 49.735 N·m

Final Answer:
Developed Shaft Torque T = 49.74 N·m.`,
        hi: `दिया गया है:
- आउटपुट पावर P_out = 7.5 kW = 7500 W
- घूर्णन गति N = 1440 RPM

सूत्र:
P = (2 · π · N · T) / 60
टॉर्क T = (60 · P) / (2 · π · N)

मान रखने पर:
T = (60 × 7500) / (2 × π × 1440) = 450,000 / 9047.79 = 49.74 N·m

उत्तर:
उत्पन्न टॉर्क T = 49.74 N·m।`,
        bn: `প্রদত্ত:
- আউটপুট ক্ষমতা P_out = ৭.৫ kW = ৭৫০০ W
- ঘূর্ণন গতি N = ১৪৪০ RPM

সূত্র:
P = (২ · π · N · T) / ৬০
টর্ক T = (৬০ · P) / (২ · π · N)

মান বসিয়ে:
T = (৬০ × ৭৫০০) / (২ × π × ১৪৪০) = ৪৫০,০০০ / ৯০৪৭.৭৯ = ৪৯.৭৪ N·m

উত্তর:
উৎপন্ন টর্ক T = ৪৯.৭৪ N·m।`
      },
      givenValues: {
        'Output Power (P_out)': '7.5 kW (7500 W)',
        'Speed (N)': '1440 RPM'
      },
      finalAnswer: {
        en: 'Developed Torque T = 49.74 N·m',
        hi: 'विकसित टॉर्क T = 49.74 N·m',
        bn: 'উৎপন্ন টর্ক T = ৪৯.৭৪ N·m'
      }
    },
    {
      id: 'ex-ch6-generator-losses',
      problem: {
        en: 'A diesel-driven electrical generator supplies an electrical load of 50 kW at 92.5% efficiency. Calculate: (a) Total mechanical power required from the diesel prime mover, and (b) The total internal power lost as heat within the generator.',
        hi: 'एक डीजल चालित विद्युत जनरेटर 92.5% दक्षता पर 50 kW का विद्युत लोड प्रदान करता है। गणना करें: (a) डीजल प्राइम मूवर से आवश्यक कुल यांत्रिक इनपुट पावर, और (b) जनरेटर के भीतर ऊष्मा के रूप में नष्ट कुल आंतरिक शक्ति।',
        bn: 'একটি ডিজেল চালিত বিদ্যুৎ জেনারেটর ৯২.৫% দক্ষতায় ৫০ kW বৈদ্যুতিক লোড সরবরাহ করে। নির্ণয় করুন: (a) ডিজেল প্রাইম মুভার থেকে প্রয়োজনীয় মোট যंत्रिक ইনপুট ক্ষমতা, এবং (b) জেনারেটরের অভ্যন্তরে তাপরূপে অপচয়কৃত মোট লস।'
      },
      solution: {
        en: `Given:
- Electrical Output Power P_out = 50 kW
- Generator Efficiency η = 92.5% = 0.925

Formulae:
1. Efficiency η = P_out / P_in  =>  P_in = P_out / η
2. Total Losses P_loss = P_in - P_out

Substitution & Calculation:
(a) Prime Mover Input Power:
    P_in = 50 kW / 0.925 = 54.054 kW

(b) Total Internal Losses:
    P_loss = 54.054 kW - 50.000 kW = 4.054 kW (4,054 W)

Final Answer:
- Required Prime Mover Input = 54.05 kW
- Internal Losses = 4.05 kW`,
        hi: `दिया गया है:
- आउटपुट पावर P_out = 50 kW
- दक्षता η = 92.5% = 0.925

सूत्र:
1. P_in = P_out / η
2. P_loss = P_in - P_out

गणना:
(a) P_in = 50 / 0.925 = 54.054 kW
(b) P_loss = 54.054 - 50 = 4.054 kW

उत्तर:
इनपुट पावर = 54.05 kW, आंतरिक हानियाँ = 4.05 kW।`,
        bn: `প্রদত্ত:
- আউটপুট ক্ষমতা P_out = ৫০ kW
- কর্মদক্ষতা η = ৯২.৫% = ০.৯২৫

সূত্র:
১. P_in = P_out / η
২. P_loss = P_in - P_out

হিসাব:
(a) ইনপুট ক্ষমতা P_in = ৫০ / ০.৯২৫ = ৫৪.০৫৪ kW
(b) মোট অপচয় P_loss = ৫৪.০৫৪ - ৫০ = ৪.০৫৪ kW

উত্তর:
ইনপুট ক্ষমতা = ৫৪.০৫ kW, মোট লস = ৪.০৫ kW।`
      },
      givenValues: {
        'Output Power (P_out)': '50 kW',
        'Efficiency (η)': '92.5%'
      },
      finalAnswer: {
        en: 'Prime Mover Input = 54.05 kW, Total Losses = 4.05 kW',
        hi: 'प्राइम मूवर इनपुट = 54.05 kW, कुल हानियाँ = 4.05 kW',
        bn: 'প্রাইম মুভার ইনপুট = ৫৪.০৫ kW, মোট লস = ৪.০৫ kW'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Thermal & Hydroelectric Power Plants: Large synchronous generators (turbogenerators and hydrogenerators) converting steam and water kinetic energy into gigawatts of electricity.',
      'Electric Vehicles & High-Speed Rail: Permanent magnet synchronous motors (PMSM) and induction traction motors providing high starting torque and regenerative braking.',
      'Electrical Transmission & Distribution: Step-up and step-down power transformers matching voltage levels to minimize transmission I²R losses.',
      'Industrial Manufacturing: Variable-speed DC and AC induction motors driving conveyor belts, CNC machines, cranes, pumps, and compressors.'
    ],
    hi: [
      'ताप एवं जलविद्युत गृह: विशाल सिंक्रोनस जनरेटर जो भाप एवं जल की गतिज ऊर्जा को गीगावाट बिजली में बदलते हैं।',
      'इलेक्ट्रिक वाहन एवं हाई-स्पीड ट्रेनें: पीएमएसएम और इंडक्शन ट्रैक्शन मोटरें जो उच्च स्टार्टिंग टॉर्क और रीजेनेरेटिव ब्रेकिंग प्रदान करती हैं।',
      'विद्युत पारेषण एवं वितरण: स्टेप-अप एवं स्टेप-डाउन पावर ट्रांसफॉर्मर जो वोल्टेज स्तर को बढ़ाकर संचरण हानियों को कम करते हैं।',
      'औद्योगिक निर्माण: कन्वेयर बेल्ट, सीएनसी मशीनों, क्रेन और पंपों को चलाने वाली परिवर्तनीय-गति डीसी एवं एसी मोटरें।'
    ],
    bn: [
      'তাপ ও জলবিদ্যুৎ কেন্দ্র: সুবিশাল সিঙ্ক্রোনাস জেনারেটর যা বাষ্প ও জলের গতিশক্তিকে গিগাওয়াট বিদ্যুৎ শক্তিতে রূপান্তর করে।',
      'বৈদ্যুতিক যানবাহন ও রেলওয়ে: পার্মানেন্ট ম্যাগনেট মোটর ও ট্র্যাকশন মোটর যা শক্তিশালী স্টার্টিং টর্ক ও রিজেনারেটিভ ব্রেকিং দেয়।',
      'বিদ্যুৎ সঞ্চালন ও বিতরণ: স্টেপ-আপ ও স্টেপ-ডাউন পাওয়ার ট্রান্সফরমার যা সঞ্চালন অপচয় হ্রাসে ভোল্টেজ রূপান্তর করে।',
      'শিল্প কারখানা: কনভেয়ার বেল্ট, সিএনসি মেশিন, ক্রেন ও পাম্প পরিচালনায় পরিবর্তনশীল গতির মোটর।'
    ]
  },
  importantPoints: {
    en: [
      'All electrical machines operate on the fundamental principle of electromechanical or electromagnetic energy conversion mediated by magnetic fields.',
      'A magnetic field is preferred over an electric field because its practical energy storage density is thousands of times higher in air.',
      'Rotating machines convert energy electromechanically (Motors & Generators), whereas Transformers convert energy statically (Electromagnetic).',
      'The law of conservation of energy mandates that Total Input Power = Useful Output Power + Losses in steady-state operation.',
      'Core losses (hysteresis and eddy currents) depend on excitation frequency and flux density, whereas copper losses depend on load current squared (I²R).'
    ],
    hi: [
      'सभी विद्युत मशीनें चुंबकीय क्षेत्र द्वारा मध्यस्थता वाले विद्युत-यांत्रिक या विद्युतचुंबकीय ऊर्जा रूपांतरण सिद्धांत पर कार्य करती हैं।',
      'स्थिरवैद्युत क्षेत्र की तुलना में चुंबकीय क्षेत्र को प्राथमिकता दी जाती है क्योंकि वायु में इसकी व्यावहारिक ऊर्जा भंडारण क्षमता हजारों गुना अधिक होती है।',
      'घूर्णन मशीनें यांत्रिक-विद्युत ऊर्जा रूपांतरण करती हैं (मोटर और जनरेटर), जबकि ट्रांसफॉर्मर स्थिर रूप से कार्य करते हैं।',
      'ऊर्जा संरक्षण के नियम के अनुसार स्थिर अवस्था में इनपुट पावर = आउटपुट पावर + हानियाँ होती हैं।',
      'कोर हानियाँ आवृत्ति और फ्लक्स घनत्व पर निर्भर करती हैं, जबकि कॉपर हानियाँ धारा के वर्ग (I²R) पर निर्भर करती हैं।'
    ],
    bn: [
      'সকল ইলেকট্রিক্যাল মেশিন চৌম্বক ক্ষেত্রকে মাধ্যম হিসেবে ব্যবহার করে শক্তি রূপান্তর নীতিতে কাজ করে।',
      'স্থির তড়িৎক্ষেত্রের চেয়ে চৌম্বক ক্ষেত্র অধিক উপযোগী কারণ বায়ুতে এর ব্যবহারিক শক্তি সঞ্চয় ক্ষমতা হাজার গুণ বেশি।',
      'ঘূর্ণায়মান মেশিনসমূহ মেকানিক্যাল-ইলেকট্রিক্যাল রূপান্তর ঘটায় (মোটর ও জেনারেটর), আর ট্রান্সফরমার স্থির রূপান্তর ঘটায়।',
      'শক্তি সংরক্ষণশীলতা নীতি অনুযায়ী ইনপুট পাওয়ার = আউটপুট পাওয়ার + মোট সিস্টেম লস।',
      'কোর লস ফ্রিকোয়েন্সি ও ফ্লাক্স ঘনত্বের ওপর এবং কপার লস কারেন্টের বর্গের (I²R) ওপর নির্ভরশীল।'
    ]
  },
  commonMistakes: {
    en: [
      'Assuming transformers are electromechanical machines: Transformers are static electromagnetic devices with NO moving mechanical parts.',
      'Believing generators produce energy from nowhere: Generators convert mechanical shaft torque into electrical energy against counter-electromagnetic torque.',
      'Neglecting air gap magnetic reluctance: Even a 1 mm air gap introduces higher reluctance than a 1-meter steel core path.',
      'Confusing mechanical power (T·ω) with electrical power (V·I) in efficiency calculations: Always ensure P_out and P_in use matching unit definitions.'
    ],
    hi: [
      'ट्रांसफॉर्मर को विद्युत-यांत्रिक मशीन समझना: ट्रांसफॉर्मर स्थैतिक विद्युतचुंबकीय उपकरण हैं जिनमें कोई घूमने वाला भाग नहीं होता।',
      'यह सोचना कि जनरेटर शून्य से ऊर्जा उत्पन्न करते हैं: जनरेटर यांत्रिक शाफ्ट कार्य को विद्युत ऊर्जा में बदलते हैं।',
      'एयर-गैप के रिलक्टेंस को नगण्य मानना: 1 मिमी का एयर-गैप भी 1 मीटर लंबे स्टील कोर से अधिक रिलक्टेंस पैदा करता है।',
      'दक्षता गणना में यांत्रिक शक्ति (T·ω) और विद्युत शक्ति (V·I) को भ्रमित करना: हमेशा समान मात्रकों का ध्यान रखें।'
    ],
    bn: [
      'ট্রান্সফরমারকে ইলেক্ট্রোমেকানিক্যাল মেশিন মনে করা: ট্রান্সফরমার স্থির ইলেক্ট্রোম্যাগনেটিক যন্ত্র যার কোনো ঘূর্ণায়মান অংশ নেই।',
      'জেনারেটর শূন্য থেকে শক্তি তৈরি করে ভাবা: জেনারেটর মেকানিক্যাল ঘূর্ণন শক্তিকে বিদ্যুৎ শক্তিতে রূপান্তর করে।',
      'এয়ার-গ্যাপের রিলাক্ট্যান্স উপেক্ষা করা: ১ মিলিমিটার এয়ার-গ্যাপের রিলাক্ট্যান্স ১ মিটার দীর্ঘ স্টিল কোরের চেয়েও বেশি হতে পারে।',
      'কর্মদক্ষতা হিসাবে যান্ত্রিক ক্ষমতা (T·ω) এবং বৈদ্যুতিক ক্ষমতার (V·I) একক গুলিয়ে ফেলা।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch6-l1-1',
      question: {
        en: 'Why is a magnetic field predominantly chosen as the coupling medium in electromechanical energy converters rather than an electric field?',
        hi: 'विद्युत-यांत्रिक ऊर्जा रूपांतरण में स्थिरवैद्युत क्षेत्र के बजाय मुख्य रूप से चुंबकीय क्षेत्र को माध्यम के रूप में क्यों चुना जाता है?',
        bn: 'ইলেক্ট্রোমেকানিক্যাল শক্তি রূপান্তরে বৈদ্যুতিক ক্ষেত্রের চেয়ে চৌম্বক ক্ষেত্রকে প্রধান কাপলিং মাধ্যম হিসেবে কেন বেছে নেওয়া হয়?'
      },
      options: [
        {
          id: 'opt-a',
          text: {
            en: 'Magnetic fields have thousands of times higher practical energy density than electrostatic fields in air.',
            hi: 'हवा में स्थिरवैद्युत क्षेत्र की तुलना में चुंबकीय क्षेत्र की व्यावहारिक ऊर्जा घनत्व हजारों गुना अधिक होती है।',
            bn: 'বায়ুতে স্থির তড়িৎক্ষেত্রের তুলনায় চৌম্বক ক্ষেত্রের ব্যবহারিক শক্তি ঘনত্ব হাজার গুণ বেশি।'
          }
        },
        {
          id: 'opt-b',
          text: {
            en: 'Magnetic fields do not produce any heat losses in iron cores.',
            hi: 'चुंबकीय क्षेत्र लोहे के कोर में कोई ऊष्मा हानि उत्पन्न नहीं करते हैं।',
            bn: 'চৌম্বক ক্ষেত্র আয়রন কোরে কোনো তাপ ক্ষয় তৈরি করে না।'
          }
        },
        {
          id: 'opt-c',
          text: {
            en: 'Electric fields cannot exert physical mechanical forces on moving charges.',
            hi: 'विद्युत क्षेत्र गतिशील आवेशों पर भौतिक यांत्रिक बल नहीं लगा सकते।',
            bn: 'বৈদ্যুতিক ক্ষেত্র চলমান চার্জের ওপর কোনো যান্ত্রিক বল প্রয়োগ করতে পারে না।'
          }
        },
        {
          id: 'opt-d',
          text: {
            en: 'Permanent magnets eliminate the need for electrical energy inputs completely.',
            hi: 'स्थायी चुंबक विद्युत ऊर्जा इनपुट की आवश्यकता को पूरी तरह समाप्त कर देते हैं।',
            bn: 'স্থায়ী চুম্বক বিদ্যুৎ ইনপুটের প্রয়োজনীয়তা সম্পূর্ণ দূর করে।'
          }
        }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'Magnetic fields achieve energy densities around 400,000 J/m³ at 1.0 Tesla, whereas the breakdown electric field of air limits electrostatic energy density to approximately 40 J/m³.',
        hi: '1.0 टेस्ला पर चुंबकीय क्षेत्र की ऊर्जा घनत्व लगभग 400,000 J/m³ होती है, जबकि वायु में स्थिरवैद्युत क्षेत्र की अधिकतम सीमा केवल 40 J/m³ होती है।',
        bn: '১.০ টেসলা ফ্লাক্সে চৌম্বক ক্ষেত্রের শক্তি ঘনত্ব প্রায় ৪০০,০০০ J/m³, যেখানে বায়ুর ব্রেকডাউন ভোল্টেজের কারণে স্থির তড়িৎক্ষেত্রের শক্তি ঘনত্ব মাত্র ৪০ J/m³।'
      }
    },
    {
      id: 'mcq-ch6-l1-2',
      question: {
        en: 'Which of the following electrical machines is classified as a STATIC electromagnetic device (no moving mechanical rotor)?',
        hi: 'निम्नलिखित में से कौन सी विद्युत मशीन एक स्थैतिक (स्थिर) विद्युतचुंबकीय उपकरण के रूप में वर्गीकृत है?',
        bn: 'নিচের কোন ইলেকট্রিক্যাল মেশিনটি একটি স্থির (ঘূর্ণায়মান অংশবিহীন) তড়িচ্চুম্বকীয় যন্ত্র?'
      },
      options: [
        {
          id: 'opt-a',
          text: {
            en: '3-Phase Squirrel Cage Induction Motor',
            hi: '3-फेज स्क्विरल केज इंडक्शन मोटर',
            bn: '৩-ফেজ স্কুইরেল কেজ ইন্ডাকশন মোটর'
          }
        },
        {
          id: 'opt-b',
          text: {
            en: 'Power Transformer',
            hi: 'पावर ट्रांसफॉर्मर',
            bn: 'পাওয়ার ট্রান্সফরমার'
          }
        },
        {
          id: 'opt-c',
          text: {
            en: 'DC Shunt Generator',
            hi: 'डीसी शंट जनरेटर',
            bn: 'ডিসি শান্ট জেনারেটর'
          }
        },
        {
          id: 'opt-d',
          text: {
            en: 'Salient-Pole Synchronous Alternator',
            hi: 'सेलियेंट-पोल सिंक्रोनस अल्टरनेटर',
            bn: 'স্যালিয়েন্ট-পোল সিঙ্ক্রোনাস অল্টারনেটর'
          }
        }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'A transformer operates purely through stationary mutual electromagnetic induction between stationary coils; it has no moving parts and is therefore a static machine.',
        hi: 'ट्रांसफॉर्मर स्थिर कॉइल्स के बीच पारस्परिक चुंबकीय प्रेरण द्वारा कार्य करता है; इसमें कोई घूमने वाला भाग नहीं होता, अतः यह एक स्थैतिक मशीन है।',
        bn: 'ট্রান্সফরমার স্থির কয়েলের মাঝে পারস্পরিক তড়িচ্চুম্বকীয় আবেশের মাধ্যমে কাজ করে; এর কোনো গতিশীল অংশ না থাকায় এটি একটি স্থির মেশিন।'
      }
    },
    {
      id: 'mcq-ch6-l1-3',
      question: {
        en: 'A motor converts 20 kW of electrical input power into 17 kW of mechanical output. What is the total power dissipated as heat losses?',
        hi: 'एक मोटर 20 kW विद्युत इनपुट को 17 kW यांत्रिक आउटपुट में बदलती है। ऊष्मा हानि के रूप में नष्ट कुल शक्ति कितनी है?',
        bn: 'একটি মোটর ২০ kW বৈদ্যুতিক ইনপুটকে ১৭ kW যান্ত্রিক আউটপুটে রূপান্তর করে। তাপ হিসেবে ক্ষয়প্রাপ্ত মোট ক্ষমতা কত?'
      },
      options: [
        { id: 'opt-a', text: { en: '37 kW', hi: '37 kW', bn: '৩৭ kW' } },
        { id: 'opt-b', text: { en: '3.0 kW', hi: '3.0 kW', bn: '৩.০ kW' } },
        { id: 'opt-c', text: { en: '1.18 kW', hi: '1.18 kW', bn: '১.১৮ kW' } },
        { id: 'opt-d', text: { en: '0.85 kW', hi: '0.85 kW', bn: '০.৮৫ kW' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'By conservation of energy, P_loss = P_in - P_out = 20 kW - 17 kW = 3.0 kW.',
        hi: 'ऊर्जा संरक्षण के अनुसार, P_loss = P_in - P_out = 20 kW - 17 kW = 3.0 kW।',
        bn: 'শক্তি সংরক্ষণের সূত্রানুযায়ী, P_loss = P_in - P_out = ২০ kW - ১৭ kW = ৩.০ kW।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch6-l1-1',
      question: {
        en: 'Explain why the efficiency of a static power transformer (typically 95% to 99%) is significantly higher than that of a rotating electric motor of identical power rating.',
        hi: 'स्पष्ट करें कि समान रेटिंग की घूर्णन मोटर की तुलना में स्थैतिक पावर ट्रांसफॉर्मर की दक्षता (95% से 99%) काफी अधिक क्यों होती है।',
        bn: 'ব্যাখ্যা করুন কেন সমমানের ঘূর্ণায়মান মোটরের তুলনায় স্থির পাওয়ার ট্রান্সফরমারের কর্মদক্ষতা (সাধারণত ৯৫% থেকে ৯৯%) উল্লেখযোগ্যভাবে বেশি হয়।'
      },
      hint: {
        en: 'Consider the physical presence of mechanical bearings, brush friction, aerodynamic rotor windage, and air gaps.',
        hi: 'यांत्रिक बेयरिंग, ब्रश घर्षण, वायु प्रतिरोध (विंडेज) और एयर-गैप की उपस्थिति पर विचार करें।',
        bn: 'যান্ত্রিক বিয়ারিং, ব্রাশ ঘর্ষণ, বাতাসের প্রতিরোধ (উইন্ডেজ) এবং এয়ার-গ্যাপের পার্থক্যের কথা বিবেচনা করুন।'
      },
      answerKey: {
        en: 'Transformers are completely static devices with no moving mechanical components. Consequently, they suffer zero mechanical friction and windage losses. Furthermore, transformers have continuous closed iron cores with no air gaps, minimizing magnetizing current and leakage losses.',
        hi: 'ट्रांसफॉर्मर पूरी तरह से स्थैतिक उपकरण हैं जिनमें कोई घूमने वाला भाग नहीं होता। इसलिए इनमें यांत्रिक घर्षण और विंडेज हानियाँ शून्य होती हैं। इसके अलावा, इनमें एयर-गैप न होने के कारण लीकेज और मैग्नेटाइजिंग धारा बहुत कम होती है।',
        bn: 'ট্রান্সফরমার সম্পূর্ণ স্থির যন্ত্র হওয়ায় এতে কোনো বিয়ারিং বা উইন্ডেজ ঘর্ষণজনিত যান্ত্রিক লস থাকে না। অধিকন্তু, এতে কোনো এয়ার-গ্যাপ না থাকায় ফ্লাক্স লিকেজ ও ম্যাগনেটাইজিং কারেন্ট খুব কম প্রয়োজন হয়।'
      }
    },
    {
      id: 'pq-ch6-l1-2',
      question: {
        en: 'An industrial electric hoist motor lifts a 1500 kg elevator cab vertically upwards at a steady velocity of 2.0 m/s. If the overall motor-gearbox efficiency is 80%, calculate the electrical power drawn from the 400 V power supply (Take g = 9.81 m/s²).',
        hi: 'एक औद्योगिक मोटर 1500 kg के लिफ्ट कैब को 2.0 m/s के स्थिर वेग से ऊपर उठाती है। यदि समग्र दक्षता 80% है, तो 400 V आपूर्ति से ली गई विद्युत शक्ति ज्ञात करें (g = 9.81 m/s² लें)।',
        bn: 'একটি শিল্প কারখানার মোটর ১৫০০ kg ভরের লিফট ক্যাবকে ২.০ m/s স্থির বেগে ওপরে তোলে। সামগ্রিক কর্মদক্ষতা ৮০% হলে ৪০০ V মেইন সরবরাহ থেকে গৃহীত বৈদ্যুতিক ক্ষমতা নির্ণয় করুন (g = ৯.৮১ m/s²)।'
      },
      hint: {
        en: 'Mechanical output power P_mech = Force × Velocity = (m · g) × v. Then apply P_in = P_out / η.',
        hi: 'यांत्रिक शक्ति P_mech = बल × वेग = (m · g) × v। फिर P_in = P_out / η लागू करें।',
        bn: 'যান্ত্রিক আউটপুট ক্ষমতা P_mech = বল × বেগ = (m · g) × v। তারপর P_in = P_out / η প্রয়োগ করুন।'
      },
      answerKey: {
        en: 'Force required F = m · g = 1500 × 9.81 = 14,715 N.\nUseful mechanical output power P_out = F · v = 14,715 × 2.0 = 29,430 W = 29.43 kW.\nElectrical input power P_in = P_out / η = 29.43 kW / 0.80 = 36.7875 kW (approx 36.79 kW).',
        hi: 'आवश्यक बल F = 1500 × 9.81 = 14,715 N।\nयांत्रिक आउटपुट P_out = F · v = 14,715 × 2.0 = 29,430 W = 29.43 kW।\nविद्युत इनपुट P_in = 29.43 / 0.80 = 36.79 kW।',
        bn: 'প্রয়োজনীয় বল F = ১৫০০ × ৯.৮১ = ১৪,৭১৫ N।\nযান্ত্রিক আউটপুট ক্ষমতা P_out = F · v = ১৪,৭১৫ × ২.০ = ২৯,৪৩০ W = ২৯.৪৩ kW।\nগৃহীত বৈদ্যুতিক ইনপুট ক্ষমতা P_in = ২৯.৪৩ / ০.৮০ = ৩৬.৭৯ kW।'
      }
    }
  ]
};
