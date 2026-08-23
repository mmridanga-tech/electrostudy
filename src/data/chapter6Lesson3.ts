import { Lesson } from '../types';

export const LESSON_DC_MACHINE_CONSTRUCTION: Lesson = {
  id: 'lsn-ch6-dc-machine-construction',
  topicId: 'ch6-dc-machine-construction',
  chapterId: 'ch-electrical-machines',
  order: 3,
  title: {
    en: 'DC Machine Construction & Working Principle',
    hi: 'डीसी मशीन संरचना एवं कार्य सिद्धांत',
    bn: 'ডিসি মেশিনের গঠন ও কার্যপ্রণালী'
  },
  description: {
    en: 'Constructional anatomy of DC machines, stator yoke, poles, armature core, commutator, carbon brushes, and generator/motor working principles.',
    hi: 'डीसी मशीन की आंतरिक संरचना, स्टेटर योक, पोल, आर्मेचर कोर, कम्यूटेटर, कार्बन ब्रश एवं जनरेटर/मोटर कार्य सिद्धांत।',
    bn: 'ডিসি মেশিনের গঠনগত অঙ্গসংস্থান, স্টেটর ইয়োক, পোল, আর্মেচার কোর, কমিউটেটর, কার্বন ব্রাশ ও জেনারেটর/মোটর কার্যপ্রণালী।'
  },
  easyExplanation: {
    en: 'A DC Machine is an electromechanical device that acts as a DC Generator when driven mechanically to produce DC electricity, or as a DC Motor when supplied with DC electricity to produce mechanical rotation. It consists of a stationary stator that creates a magnetic field and a rotating armature that converts energy via a mechanical commutator and carbon brushes.',
    hi: 'डीसी मशीन एक विद्युत-यांत्रिक उपकरण है जो यांत्रिक रूप से घुमाए जाने पर डीसी बिजली पैदा करता है (जनरेटर), या डीसी बिजली दिए जाने पर यांत्रिक घूर्णन उत्पन्न करता है (मोटर)। इसमें चुंबकीय क्षेत्र बनाने वाला स्थिर स्टेटर और कम्यूटेटर एवं कार्बन ब्रश युक्त घूमने वाला आर्मेचर होता है।',
    bn: 'ডিসি মেশিন হলো একটি তড়িচ্চুম্বকীয় যন্ত্র যা যান্ত্রিকভাবে চালিত হলে DC বিদ্যুৎ উৎপাদন করে (জেনারেটর), এবং DC বিদ্যুৎ সরবরাহ পেলে যান্ত্রিক ঘূর্ণন তৈরি করে (মোটর)। এতে চৌম্বক ক্ষেত্র সৃষ্টিকারী স্থির স্টেটর এবং কমিউটেটর ও কার্বন ব্রাশযুক্ত ঘূর্ণায়মান আর্মেচার থাকে।'
  },
  detailedExplanation: {
    en: `1. Principle of Reversibility:
The same physical DC machine can operate interchangeably as either a DC generator or a DC motor. The mechanical construction is essentially identical:
- Motor: Electrical energy in → Electromagnetic torque out.
- Generator: Mechanical torque in → Electrical energy out.

2. Major Structural Components:
A standard DC machine consists of two main assemblies: the stationary Stator and the rotating Rotor (Armature).

A. Stator Assembly (Stationary Parts):
- 1. Yoke / Magnetic Frame:
  * Material: Cast iron (for small machines) or cast/rolled steel (for large machines).
  * Function: Provides rigid mechanical enclosure and completes the magnetic flux return circuit between opposite field poles.
- 2. Field Poles & Pole Shoes:
  * Material: Annealed silicon steel laminations (0.5 mm thick) bolted to the yoke inner surface.
  * Function: Pole core carries field windings; flared pole shoes spread the magnetic flux uniformly across the air gap into the cylindrical armature and mechanically support the field coils.
- 3. Field Windings (Exciting Coils):
  * Material: Enamelled electrolytic copper wire.
  * Function: When carrying DC excitation current, they create alternate North (N) and South (S) magnetic poles across the periphery.

B. Rotor Assembly (Rotating Parts):
- 4. Armature Core:
  * Material: Slotted circular stampings of high-permeability, low-hysteresis silicon steel (0.35 to 0.5 mm thick) coated with insulating varnish.
  * Function: Houses insulated armature conductors in peripheral slots and provides a low-reluctance magnetic return path.
- 5. Armature Windings:
  * Material: Insulated copper conductors connected in Lap or Wave configurations.
  * Lap Winding: Parallel paths A = P (Number of poles). Best for low-voltage, high-current applications.
  * Wave Winding: Parallel paths A = 2 (always 2 paths). Best for high-voltage, low-current applications.
- 6. Commutator:
  * Material: Hard-drawn wedge-shaped electrolytic copper segments insulated from each other by thin V-mica sheets (0.5 to 0.8 mm).
  * Function: Serves as a synchronous mechanical rectifier (in generators) converting generated AC into external DC, or as a mechanical inverter (in motors) reversing current direction in armature coils as they cross the magnetic neutral axis (MNA).
- 7. Carbon Brushes & Brush Holders:
  * Material: High-grade electro-graphite or carbon blocks held under spring tension (15 to 25 kPa) in brush boxes.
  * Function: Collects current from the rotating commutator to stationary output terminals. Carbon provides self-lubrication, high contact resistance that dampens sparking during commutation, and negative temperature coefficient of resistance.
- 8. Shaft & Bearings:
  * Material: Mild steel shaft with ball or roller bearings housed in end-bells for low-friction mechanical power transfer.

3. Working Principle of a DC Generator:
When the prime mover rotates the armature conductors through the magnetic field:
- Dynamic EMF is induced in each conductor: e = B · L · v.
- Total Induced Armature EMF (E_g):
  E_g = (P · Φ · Z · N) / (60 · A) [Volts]
  Where P = poles, Φ = flux per pole (Wb), Z = total armature conductors, N = speed (RPM), A = parallel paths.

4. Working Principle of a DC Motor:
When DC voltage is applied to the brushes, current flows into the armature coils:
- Lorentz force F = B · I_a · L acts tangentially on conductors on opposite sides of the rotor in opposite directions, producing electromagnetic torque:
  T_e = (P · Φ · Z · I_a) / (2π · A) = (E_b · I_a) / ω_m [N·m]
- As the armature rotates, conductors cut the magnetic field, inducing a counter-electromotive force or Back EMF (E_b):
  V_applied = E_b + I_a · R_a

5. Commutation & Interpoles:
Commutation is the process of reversing current in an armature coil during the short time interval it is short-circuited by a brush. To prevent sparking caused by self-induced reactance voltage (L · di/dt), modern DC machines incorporate narrow auxiliary Interpoles (Commutating poles) wired in series with the armature.`,
    hi: `1. उत्क्रमणीयता का सिद्धांत:
वही समान डीसी मशीन मोटर और जनरेटर दोनों के रूप में कार्य कर सकती है।
- मोटर: विद्युत ऊर्जा इनपुट → यांत्रिक टॉर्क आउटपुट।
- जनरेटर: यांत्रिक इनपुट → विद्युत ऊर्जा आउटपुट।

2. डीसी मशीन के मुख्य भाग:
A. स्टेटर (स्थिर भाग):
- 1. योक (फ्रेम): आंतरिक भागों को सुरक्षा देता है और चुंबकीय फ्लक्स का वापसी पथ पूरा करता है।
- 2. पोल एवं पोल शू: लैमिनेटेड सिलिकॉन स्टील से बने होते हैं; फ्लक्स को एयर-गैप में फैलाते हैं।
- 3. फील्ड वाइंडिंग: कॉपर कॉइल जो DC करंट द्वारा N और S ध्रुव बनाती है।

B. रोटर (घूमने वाला भाग):
- 4. आर्मेचर कोर: भंवर धारा कम करने के लिए लैमिनेटेड सिलिकॉन स्टील डिस्क से बनी स्लॉटेड कोर।
- 5. आर्मेचर वाइंडिंग: स्लॉट्स में रखी कॉपर वाइंडिंग (लैप: A = P, वेव: A = 2)।
- 6. कम्यूटेटर: माइका से इंसुलेटेड हार्ड-कॉपर सेगमेंट्स; यह जनरेटर में AC को DC में बदलता है और मोटर में आर्मेचर करंट की दिशा उलटता है।
- 7. कार्बन ब्रश: कम्यूटेटर से करंट एकत्र करते हैं; सेल्फ-लुब्रिकेटिंग और स्पार्किंग-रोधी।
- 8. शाफ्ट एवं बेयरिंग: यांत्रिक शक्ति का स्थानांतरण करते हैं।

3. जनरेटर का EMF समीकरण:
E_g = (P · Φ · Z · N) / (60 · A) [वोल्ट]

4. मोटर का टॉर्क समीकरण:
T_e = (P · Φ · Z · I_a) / (2π · A) [N·m]
बैक EMF संबंध: V = E_b + I_a · R_a।

5. कम्यूटेशन एवं इंटरपोल:
ब्रश के नीचे कॉइल में करंट उलटने की प्रक्रिया कम्यूटेशन कहलाती है। स्पार्किंग रोकने के लिए इंटरपोल लगाए जाते हैं।`,
    bn: `১. রিভার্সিবিলিটি নীতি:
একই ডিসি মেশিন মোটর এবং জেনারেটর উভয় রূপেই কাজ করতে পারে।
- মোটর: বৈদ্যুতিক ইনপুট → যান্ত্রিক আউটপুট টর্ক।
- জেনারেটর: যান্ত্রিক ইনপুট → বৈদ্যুতিক আউটপুট শক্তি।

২. ডিসি মেশিনের প্রধান অংশসমূহ:
A. স্টেটর (স্থির অংশ):
- ১. ইয়োক (ফ্রেম): বাহ্যিক সুরক্ষা এবং চৌম্বক ফ্লাক্সের রিটার্ন পথ প্রদান করে।
- ২. পোল ও পোল শু: লেমিনেটেড সিলিকন স্টিল দিয়ে তৈরি; এয়ার-গ্যাপে ফ্লাক্স সুষমভাবে ছড়ায়।
- ৩. ফিল্ড ওয়াইন্ডিং: কপার তারের কয়েল যা N ও S চৌম্বক মেরু তৈরি করে।

B. রোটর (ঘূর্ণায়মান অংশ):
- ৪. আর্মেচার কোর: খাঁজকাটা পাতলা সিলিকন স্টিল লেমিনেশন দিয়ে গঠিত।
- ৫. আর্মেচার ওয়াইন্ডিং: স্লটে স্থাপিত কপার ওয়াইন্ডিং (ল্যাপ: A = P, ওয়েভ: A = ২)।
- ৬. কমিউটেটর: মাইকা ইনসুলেটেড হার্ড কপার সেগমেন্ট; মেকানিক্যাল রেকটিফায়ার হিসেবে AC-কে DC করে।
- ৭. কার্বন ব্রাশ: স্প্রিং যুক্ত ব্রাশ যা কমিউটেটর থেকে কারেন্ট সংগ্রহ করে।
- ৮. শ্যাফট ও বিয়ারিং: যান্ত্রিক শক্তি আদান-প্রদান করে।

৩. জেনারেটরের EMF সমীকরণ:
E_g = (P · Φ · Z · N) / (60 · A) [ভোল্ট]

৪. মোটরের টর্ক ও ব্যাক EMF:
T_e = (P · Φ · Z · I_a) / (২π · A) [N·m]
মোটর সমীকরণ: V = E_b + I_a · R_a।`
  },
  formulas: [
    {
      symbol: 'E_g',
      expression: 'E_g = \\frac{P \\cdot \\Phi \\cdot Z \\cdot N}{60 \\cdot A}',
      description: {
        en: 'Generated Armature EMF Equation (P = Poles, Φ = Flux/pole in Wb, Z = Total conductors, N = RPM, A = Parallel paths)',
        hi: 'उत्पन्न आर्मेचर EMF समीकरण (P = पोल, Φ = फ्लक्स/पोल, Z = चालक, N = RPM, A = समानांतर पथ)',
        bn: 'উৎপন্ন আর্মেচার EMF সমীকরণ (P = পোল, Φ = ফ্লাক্স/পোল, Z = মোট পরিবাহী, N = RPM, A = সমান্তরাল পথ)'
      }
    },
    {
      symbol: 'T_e',
      expression: 'T_e = \\frac{P \\cdot \\Phi \\cdot Z \\cdot I_a}{2\\pi \\cdot A} = \\frac{E_b \\cdot I_a}{\\omega_m}',
      description: {
        en: 'Electromagnetic Torque Equation of DC Motor (I_a = Armature Current, ω_m = 2πN/60)',
        hi: 'डीसी मोटर का विद्युतचुंबकीय टॉर्क समीकरण',
        bn: 'ডিসি মোটরের তড়িচ্চুম্বকীয় টর্ক সমীকরণ'
      }
    },
    {
      symbol: 'V',
      expression: 'V = E_b + I_a \\cdot R_a \\implies I_a = \\frac{V - E_b}{R_a}',
      description: {
        en: 'DC Motor Voltage Balance Equation with Back EMF (E_b) and Armature Resistance (R_a)',
        hi: 'डीसी मोटर का वोल्टेज संतुलन समीकरण',
        bn: 'ডিসি মোটরের ভোল্টেজ সমীকরণ ও ব্যাক EMF'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-dc-machine-construction',
      title: {
        en: 'DC Machine Cross-Sectional Anatomy & Commutator System',
        hi: 'डीसी मशीन की आंतरिक संरचना एवं कम्यूटेटर प्रणाली',
        bn: 'ডিসি মেশিনের অভ্যন্তরীণ গঠন ও কমিউটেটর ব্যবস্থা'
      },
      caption: {
        en: 'Detailed cross-section illustrating stator yoke, salient field poles, armature slots, commutator bars, and carbon brush alignment.',
        hi: 'स्टेटर योक, मुख्य फील्ड पोल, आर्मेचर स्लॉट्स, कम्यूटेटर और कार्बन ब्रश को प्रदर्शित करने वाला अनुप्रस्थ काट।',
        bn: 'স্টেটর ইয়োক, ফিল্ড পোল, আর্মেচার স্লট, কমিউটেটর বার এবং কার্বন ব্রাশ সমন্বিত ক্রস-সেকশন ডায়াগ্রাম।'
      },
      svgType: 'dc-machine-construction'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch6-dc-generator-emf',
      problem: {
        en: 'A 4-pole DC generator has a wave-wound armature winding with Z = 480 total conductors. The flux per pole is Φ = 0.025 Wb (25 mWb). If the armature is driven by a prime mover at a rotational speed of N = 1200 RPM, calculate the generated armature EMF (E_g).',
        hi: 'एक 4-पोल डीसी जनरेटर में वेव-वाउंड आर्मेचर वाइंडिंग है जिसमें कुल Z = 480 चालक हैं। प्रति पोल फ्लक्स Φ = 0.025 Wb है। यदि आर्मेचर को N = 1200 RPM पर घुमाया जाता है, तो उत्पन्न आर्मेचर EMF (E_g) ज्ञात करें।',
        bn: 'একটি ৪-পোল ডিসি জেনারেটরে ওয়েভ-ওয়াইন্ডিং আর্মেচার রয়েছে যাতে মোট Z = ৪৮০টি পরিবাহী আছে। প্রতি পোলের ফ্লাক্স Φ = ০.০২৫ Wb। আর্মেচারটি N = ১২০০ RPM গতিতে চালিত হলে উৎপন্ন EMF (E_g) নির্ণয় করুন।'
      },
      solution: {
        en: `Given:
- Number of Poles P = 4
- Total Armature Conductors Z = 480
- Flux per pole Φ = 0.025 Wb
- Speed N = 1200 RPM
- Winding type: Wave winding => Parallel paths A = 2 (always 2 for wave winding)

Formula:
Generated EMF E_g = (P · Φ · Z · N) / (60 · A)

Substitution:
E_g = (4 × 0.025 × 480 × 1200) / (60 × 2)

Calculation:
Numerator = 4 × 0.025 × 480 × 1200 = 57,600
Denominator = 60 × 2 = 120
E_g = 57,600 / 120 = 480.0 Volts

Final Answer:
Generated Armature EMF E_g = 480.0 V.`,
        hi: `दिया गया है:
- P = 4, Z = 480, Φ = 0.025 Wb, N = 1200 RPM
- वेव वाइंडिंग के लिए समानांतर पथ A = 2

सूत्र:
E_g = (P · Φ · Z · N) / (60 · A)

मान रखने पर:
E_g = (4 × 0.025 × 480 × 1200) / (60 × 2) = 57,600 / 120 = 480 V

उत्तर:
उत्पन्न EMF E_g = 480.0 V।`,
        bn: `প্রদত্ত:
- P = ৪, Z = ৪৮০, Φ = ০.০২৫ Wb, N = ১২০০ RPM
- ওয়েভ ওয়াইন্ডিংয়ের জন্য A = ২

সূত্র:
E_g = (P · Φ · Z · N) / (৬০ · A)

মান বসিয়ে:
E_g = (৪ × ০.০২৫ × ৪৮০ × ১২০০) / (৬০ × ২) = ৫৭,৬০০ / ১২০ = ৪৮০ V

উত্তর:
উৎপন্ন EMF E_g = ৪৮০.০ V।`
      },
      givenValues: {
        'Poles (P)': '4',
        'Conductors (Z)': '480',
        'Flux per pole (Φ)': '0.025 Wb',
        'Speed (N)': '1200 RPM',
        'Parallel Paths (A)': '2 (Wave)'
      },
      finalAnswer: {
        en: 'Generated EMF E_g = 480.0 Volts',
        hi: 'उत्पन्न EMF E_g = 480.0 V',
        bn: 'উৎপন্ন EMF E_g = ৪৮০.০ V'
      }
    },
    {
      id: 'ex-ch6-dc-lap-vs-wave',
      problem: {
        en: 'A 6-pole DC generator armature has Z = 600 conductors and operates at N = 1000 RPM with flux per pole Φ = 0.03 Wb. Calculate the generated EMF if the armature is: (a) Lap-wound, and (b) Wave-wound.',
        hi: 'एक 6-पोल डीसी जनरेटर आर्मेचर में Z = 600 चालक हैं और यह Φ = 0.03 Wb फ्लक्स के साथ N = 1000 RPM पर चलता है। उत्पन्न EMF की गणना करें यदि आर्मेचर: (a) लैप-वाउंड है, और (b) वेव-वाउंड है।',
        bn: 'একটি ৬-পোল ডিসি জেনারেটরে Z = ৬০০ পরিবাহী রয়েছে এবং Φ = ০.০৩ Wb ফ্লাক্সে N = ১০০০ RPM এ চলে। উৎপন্ন EMF নির্ণয় করুন যদি আর্মেচারটি: (a) ল্যাপ-ওয়াইন্ডিং, এবং (b) ওয়েভ-ওয়াইন্ডিং হয়।'
      },
      solution: {
        en: `Given:
- Poles P = 6
- Conductors Z = 600
- Flux Φ = 0.03 Wb
- Speed N = 1000 RPM

Formula:
E_g = (P · Φ · Z · N) / (60 · A)

(a) For Lap Winding:
    Parallel paths A = P = 6
    E_g(lap) = (6 × 0.03 × 600 × 1000) / (60 × 6) = 108,000 / 360 = 300.0 V

(b) For Wave Winding:
    Parallel paths A = 2
    E_g(wave) = (6 × 0.03 × 600 × 1000) / (60 × 2) = 108,000 / 120 = 900.0 V

Comparison Note: Wave winding produces P/2 = 3 times higher EMF than lap winding for the identical machine core!`,
        hi: `दिया गया है:
- P = 6, Z = 600, Φ = 0.03 Wb, N = 1000 RPM

गणना:
(a) लैप वाइंडिंग (A = P = 6):
    E_g = (6 × 0.03 × 600 × 1000) / (60 × 6) = 300 V
(b) वेव वाइंडिंग (A = 2):
    E_g = (6 × 0.03 × 600 × 1000) / (60 × 2) = 900 V

उत्तर:
लैप EMF = 300 V, वेव EMF = 900 V।`,
        bn: `প্রদত্ত:
- P = ৬, Z = ৬০০, Φ = ০.০৩ Wb, N = ১০০০ RPM

হিসাব:
(a) ল্যাপ ওয়াইন্ডিং (A = P = ৬):
    E_g = (৬ × ০.০৩ × ৬০০ × ১০০০) / (৬০ × ৬) = ৩০০ V
(b) ওয়েভ ওয়াইন্ডিং (A = ২):
    E_g = (৬ × ০.০৩ × ৬০০ × ১০০০) / (৬০ × ২) = ৯০০ V

উত্তর:
ল্যাপ EMF = ৩০০ V, ওয়েভ EMF = ৯০০ V।`
      },
      givenValues: {
        'Poles (P)': '6',
        'Conductors (Z)': '600',
        'Flux per pole (Φ)': '0.03 Wb',
        'Speed (N)': '1000 RPM'
      },
      finalAnswer: {
        en: 'Lap EMF = 300.0 V, Wave EMF = 900.0 V (3x higher)',
        hi: 'लैप EMF = 300.0 V, वेव EMF = 900.0 V (3 गुना अधिक)',
        bn: 'ল্যাপ EMF = ৩০০.০ V, ওয়েভ EMF = ৯০০.০ V (৩ গুণ বেশি)'
      }
    },
    {
      id: 'ex-ch6-dc-motor-back-emf',
      problem: {
        en: 'A 230 V DC shunt motor has an armature winding resistance of R_a = 0.5 Ω. When running at full load, it draws an armature current of I_a = 30 A. Calculate: (a) The Back EMF (E_b) developed in the armature, (b) The mechanical power developed in the armature in kW, and (c) Starting current if started directly without a starter (when E_b = 0).',
        hi: 'एक 230 V डीसी शंट मोटर का आर्मेचर प्रतिरोध R_a = 0.5 Ω है। फुल लोड पर यह I_a = 30 A आर्मेचर धारा लेती है। गणना करें: (a) आर्मेचर में विकसित बैक EMF (E_b), (b) आर्मेचर में विकसित यांत्रिक शक्ति, और (c) बिना स्टार्टर के डायरेक्ट स्टार्टिंग करंट (जब E_b = 0)।',
        bn: 'একটি ২৩০ V ডিসি শান্ট মোটরের আর্মেচার রোধ R_a = ০.৫ Ω। পূর্ণ লোডে এটি I_a = ৩০ A কারেন্ট গ্রহণ করে। নির্ণয় করুন: (a) আর্মেচারে উৎপন্ন ব্যাক EMF (E_b), (b) আর্মেচারে উৎপন্ন যান্ত্রিক ক্ষমতা, এবং (c) স্টার্টার ছাড়া সরাসরি চালুর সময় শুরুর প্রারম্ভিক কারেন্ট (যখন E_b = ০)।'
      },
      solution: {
        en: `Given:
- Applied Terminal Voltage V = 230 V
- Armature Resistance R_a = 0.5 Ω
- Full-load Armature Current I_a = 30 A

Formulae:
1. Back EMF E_b = V - I_a · R_a
2. Developed Mechanical Power P_dev = E_b · I_a
3. Starting Current I_start = V / R_a (since E_b = 0 at standstill)

Substitution & Calculation:
(a) Back EMF:
    E_b = 230 - (30 × 0.5) = 230 - 15 = 215.0 Volts

(b) Developed Power:
    P_dev = 215.0 V × 30 A = 6,450 Watts = 6.45 kW

(c) Direct Starting Current:
    I_start = 230 V / 0.5 Ω = 460.0 Amperes (15.3 times rated full load current!)

Final Answer:
- Back EMF E_b = 215.0 V
- Developed Power = 6.45 kW
- Direct Starting Current = 460 A (demonstrates why starters are mandatory).`,
        hi: `दिया गया है:
- V = 230 V, R_a = 0.5 Ω, I_a = 30 A

गणना:
(a) E_b = 230 - (30 × 0.5) = 215.0 V
(b) P_dev = 215 × 30 = 6450 W = 6.45 kW
(c) स्टार्टिंग धारा I_start = 230 / 0.5 = 460 A

उत्तर:
बैक EMF = 215.0 V, यांत्रिक शक्ति = 6.45 kW, स्टार्टिंग धारा = 460 A।`,
        bn: `প্রদত্ত:
- V = ২৩০ V, R_a = ০.৫ Ω, I_a = ৩০ A

হিসাব:
(a) E_b = ২৩০ - (৩০ × ০.৫) = ২১৫.০ V
(b) P_dev = ২১৫ × ৩০ = ৬৪৫০ W = ৬.৪৫ kW
(c) স্টার্টিং কারেন্ট I_start = ২৩০ / ০.৫ = ৪৬০ A

উত্তর:
ব্যাক EMF = ২১৫.০ V, যান্ত্রিক ক্ষমতা = ৬.৪৫ kW, স্টার্টিং কারেন্ট = ৪৬০ A।`
      },
      givenValues: {
        'Terminal Voltage (V)': '230 V',
        'Armature Resistance (R_a)': '0.5 Ω',
        'Rated Current (I_a)': '30 A'
      },
      finalAnswer: {
        en: 'Back EMF E_b = 215.0 V, Developed Power = 6.45 kW, Starting Current = 460 A',
        hi: 'बैक EMF E_b = 215.0 V, विकसित शक्ति = 6.45 kW, स्टार्टिंग धारा = 460 A',
        bn: 'ব্যাক EMF E_b = ২১৫.০ V, উৎপন্ন ক্ষমতা = ৬.৪৫ kW, স্টার্টিং কারেন্ট = ৪৬০ A'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Electric Traction & Locomotives: DC Series Motors delivering exceptionally high starting torque for subway trains, trams, and cranes.',
      'Precision Industrial Drives: DC Shunt Motors with Ward-Leonard speed control in paper mills, steel rolling mills, and elevators.',
      'Automotive Starters: Compact high-current DC series motors used as engine starter cranking motors in vehicles.',
      'Emergency Standby Power & Welding: DC Generators used in specialized arc welding units and isolated DC microgrid charging stations.'
    ],
    hi: [
      'इलेक्ट्रिक ट्रैक्शन एवं लोकोमोटिव: ट्रेनों, ट्रामों और क्रेनों के लिए अत्यधिक उच्च स्टार्टिंग टॉर्क प्रदान करने वाली डीसी सीरीज मोटरें।',
      'सटीक औद्योगिक ड्राइव: पेपर मिलों, स्टील रोलिंग मिलों और लिफ्टों में वॉर्ड-लियोनार्ड गति नियंत्रण वाली डीसी शंट मोटरें।',
      'ऑटोमोटिव स्टार्टर: वाहनों में इंजन शुरू करने के लिए कॉम्पैक्ट हाई-करंट डीसी सीरीज स्टार्टर मोटरें।',
      'आर्क वेल्डिंग एवं इमरजेंसी बैकअप: विशेष वेल्डिंग इकाइयों में प्रयुक्त डीसी जनरेटर।'
    ],
    bn: [
      'রেল ট্র্যাকশন ও লোকোমোটিভ: সাবওয়ে ও ট্রেনের জন্য উচ্চ প্রারম্ভিক টর্ক সরবরাহকারী ডিসি সিরিজ মোটর।',
      'শিল্প কারখানার ড্রাইভ: কাগজ কল ও স্টিল মিলে সুনির্দিষ্ট গতি নিয়ন্ত্রণের জন্য ডিসি শান্ট মোটর।',
      'গাড়ির ক্র্যাঙ্কিং স্টার্টার: অটোমোবাইলে ইঞ্জিন স্টার্ট করার জন্য ব্যবহৃত শক্তিশালী ডিসি মোটর।',
      'আর্ক ওয়েল্ডিং ও ব্যাকআপ: বিশেষ ওয়েল্ডিং প্ল্যান্টে ব্যবহৃত ডিসি জেনারেটর।'
    ]
  },
  importantPoints: {
    en: [
      'Any DC machine is physically reversible; it operates as a generator when driven mechanically or as a motor when supplied electrically.',
      'Armature EMF generated is E_g = (P · Φ · Z · N) / (60 · A), where A = P for Lap winding and A = 2 for Wave winding.',
      'The Commutator is a mechanical synchronous rectifier/inverter that allows bidirectional armature current while keeping torque unidirectional.',
      'Back EMF (E_b) acts as a self-regulating governor in DC motors: I_a = (V - E_b) / R_a.',
      'Armature cores are always laminated with silicon steel to suppress cyclic eddy current losses.'
    ],
    hi: [
      'कोई भी डीसी मशीन भौतिक रूप से उत्क्रमणीय होती है; यह जनरेटर और मोटर दोनों की तरह कार्य कर सकती है।',
      'उत्पन्न EMF समीकरण: E_g = (P · Φ · Z · N) / (60 · A), जहाँ लैप के लिए A = P और वेव के लिए A = 2 है।',
      'कम्यूटेटर एक मैकेनिकल रेक्टिफायर है जो टॉर्क को एकदिशीय बनाए रखने के लिए आर्मेचर करंट को उलटता है।',
      'बैक EMF (E_b) मोटर में स्व-विनियमन गवर्नर के रूप में कार्य करता है: I_a = (V - E_b) / R_a।',
      'भंवर धारा हानि कम करने के लिए आर्मेचर कोर को हमेशा सिलिकॉन स्टील से लैमिनेट किया जाता है।'
    ],
    bn: [
      'যেকোনো ডিসি মেশিন রিভার্সিবল; এটি যান্ত্রিক ইনপুটে জেনারেটর এবং বৈদ্যুতিক ইনপুটে মোটর হিসেবে চলে।',
      'উৎপন্ন EMF সমীকরণ: E_g = (P · Φ · Z · N) / (৬০ · A), যেখানে ল্যাপ ওয়াইন্ডিংয়ে A = P এবং ওয়েভে A = ২।',
      'কমিউটেটর হলো একটি মেকানিক্যাল রেকটিফায়ার যা টর্ককে একমুখী রাখতে সাহায্য করে।',
      'মোটরে ব্যাক EMF (E_b) একটি স্বয়ংক্রিয় নিয়ন্ত্রক হিসেবে কাজ করে: I_a = (V - E_b) / R_a।',
      'এডি কারেন্ট লস কমাতে আর্মেচার কোর সর্বদা পাতলা লেমিনেটেড সিলিকন স্টিল দিয়ে তৈরি হয়।'
    ]
  },
  commonMistakes: {
    en: [
      'Confusing parallel paths (A) in Lap vs. Wave windings: Remember Lap is A = P, Wave is ALWAYS A = 2.',
      'Assuming induced EMF inside the rotating armature is DC: The armature internally produces pure AC; the commutator mechanically converts it to external DC.',
      'Neglecting the danger of starting DC motors without a starter: At standstill E_b = 0, causing destructive starting currents (I_start = V / R_a).',
      'Confusing Lap and Wave applications: Lap winding is for high current / low voltage; Wave winding is for high voltage / low current.'
    ],
    hi: [
      'लैप और वेव वाइंडिंग में समानांतर पथ (A) को गलत याद रखना: लैप में A = P और वेव में सदैव A = 2 होता है।',
      'यह सोचना कि आर्मेचर के भीतर DC उत्पन्न होती है: आर्मेचर में शुद्ध AC उत्पन्न होती है जिसे कम्यूटेटर DC बनाता है।',
      'बिना स्टार्टर के डीसी मोटर शुरू करने का जोखिम भूलना: शून्य गति पर E_b = 0 होने से स्टार्टिंग धारा विनाशकारी हो सकती है।',
      'लैप (उच्च धारा/कम वोल्टेज) और वेव (उच्च वोल्टेज/कम धारा) अनुप्रयोगों में भ्रमित होना।'
    ],
    bn: [
      'ল্যাপ ও ওয়েভ ওয়াইন্ডিংয়ে সমান্তরাল পথের সংখ্যা ভুল করা: ল্যাপে A = P, এবং ওয়েভে সর্বদা A = ২।',
      'আর্মেচারের ভেতরে DC তৈরি হয় ভাবা: আর্মেচারের কয়েলে খাঁটি AC তৈরি হয়, যা কমিউটেটর দ্বারা DC-তে রূপান্তরিত হয়।',
      'স্টার্টার ছাড়া মোটর চালুর ঝুঁকি ভুলে যাওয়া: শুরুতে E_b = ০ থাকায় মারাত্মক উচ্চ কারেন্ট (I = V/R_a) প্রবাহিত হয়।',
      'ল্যাপ (উচ্চ কারেন্ট) ও ওয়েভ (উচ্চ ভোল্টেজ) এর ব্যবহারিক প্রয়োগ গুলিয়ে ফেলা।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch6-l3-1',
      question: {
        en: 'What is the primary function of the Commutator in a DC Generator?',
        hi: 'डीसी जनरेटर में कम्यूटेटर का प्राथमिक कार्य क्या है?',
        bn: 'ডিসি জেনারেটরে কমিউটেটরের প্রধান কাজ কী?'
      },
      options: [
        {
          id: 'opt-a',
          text: {
            en: 'It mechanically rectifies the alternating EMF induced in rotating armature coils into unidirectional direct current (DC) for the external circuit.',
            hi: 'यह घूमने वाले आर्मेचर में उत्पन्न AC को बाहरी परिपथ के लिए एकदिशीय दिष्ट धारा (DC) में यांत्रिक रूप से परिवर्तित करता है।',
            bn: 'এটি ঘূর্ণায়মান আর্মেচারে উৎপন্ন AC-কে যান্ত্রিকভাবে একমুখী ডিসি কারেন্টে (DC) রূপান্তরিত করে।'
          }
        },
        {
          id: 'opt-b',
          text: {
            en: 'It increases the magnetic permeability of the air gap.',
            hi: 'यह एयर-गैप की चुंबकीय पारगम्यता को बढ़ाता है।',
            bn: 'এটি এয়ার-গ্যাপের চৌম্বক প্রবেশ্যতা বৃদ্ধি করে।'
          }
        },
        {
          id: 'opt-c',
          text: {
            en: 'It eliminates copper resistance losses in the field windings completely.',
            hi: 'यह फील्ड वाइंडिंग में कॉपर हानियों को पूरी तरह समाप्त कर देता है।',
            bn: 'এটি ফিল্ড ওয়াইন্ডিংয়ে কপার লস সম্পূর্ণ দূর করে।'
          }
        },
        {
          id: 'opt-d',
          text: {
            en: 'It stores mechanical rotational kinetic energy as a flywheel.',
            hi: 'यह फ्लाईव्हील की तरह यांत्रिक घूर्णन गतिज ऊर्जा को संग्रहीत करता है।',
            bn: 'এটি ফ্লাইহুইলের মতো যান্ত্রিক ঘূর্ণন শক্তি সঞ্চয় করে।'
          }
        }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'Inside any rotating armature, the induced EMF is naturally alternating (AC). The commutator and brush assembly acts as a mechanical synchronous full-wave rectifier to deliver unidirectional DC to the load.',
        hi: 'घूमने वाले आर्मेचर में सदैव AC उत्पन्न होता है। कम्यूटेटर और ब्रश मिलकर एक मैकेनिकल रेक्टिफायर के रूप में इसे बाहरी लोड के लिए DC बनाते हैं।',
        bn: 'আর্মেচার কয়েলে সর্বদা AC আবিষ্ট হয়। কমিউটেটর ও ব্রাশ ব্যবস্থা একটি মেকানিক্যাল রেকটিফায়ার হিসেবে বাহ্যিক লোডে DC সরবরাহ করে।'
      }
    },
    {
      id: 'mcq-ch6-l3-2',
      question: {
        en: 'Why is Lap Winding preferred over Wave Winding in heavy industrial DC machines designed for low-voltage, high-current service?',
        hi: 'निम्न-वोल्टेज, उच्च-धारा अनुप्रयोगों के लिए भारी औद्योगिक डीसी मशीनों में वेव वाइंडिंग की तुलना में लैप वाइंडिंग को प्राथमिकता क्यों दी जाती है?',
        bn: 'কম ভোল্টেজ ও উচ্চ কারেন্ট সেবার জন্য ডিজাইন করা ডিসি মেশিনে ওয়েভ ওয়াইন্ডিংয়ের চেয়ে ল্যাপ ওয়াইন্ডিং কেন পছন্দ করা হয়?'
      },
      options: [
        {
          id: 'opt-a',
          text: {
            en: 'Lap winding provides A = P parallel current paths, allowing large total currents to divide safely among multiple paths.',
            hi: 'लैप वाइंडिंग में A = P समानांतर पथ होते हैं, जिससे बड़ी कुल धारा कई पथों में सुरक्षित रूप से विभाजित हो जाती है।',
            bn: 'ল্যাপ ওয়াইন্ডিংয়ে A = P সংখ্যক সমান্তরাল পথ থাকে, যার ফলে উচ্চ কারেন্ট নিরাপদে বিভিন্ন পথে ভাগ হয়ে প্রবাহিত হতে পারে।'
          }
        },
        {
          id: 'opt-b',
          text: {
            en: 'Lap winding always produces 5 times higher voltage than wave winding.',
            hi: 'लैप वाइंडिंग हमेशा वेव वाइंडिंग की तुलना में 5 गुना अधिक वोल्टेज उत्पन्न करती है।',
            bn: 'ল্যাপ ওয়াইন্ডিং সবসময় ওয়েভ ওয়াইন্ডিংয়ের চেয়ে ৫ গুণ বেশি ভোল্টেজ তৈরি করে।'
          }
        },
        {
          id: 'opt-c',
          text: {
            en: 'Lap winding does not require any carbon brushes.',
            hi: 'लैप वाइंडिंग में किसी कार्बन ब्रश की आवश्यकता नहीं होती है।',
            bn: 'ল্যাপ ওয়াইন্ডিংয়ে কোনো কার্বন ব্রাশ প্রয়োজন হয় না।'
          }
        },
        {
          id: 'opt-d',
          text: {
            en: 'Lap winding reduces iron core hysteresis loss to absolute zero.',
            hi: 'लैप वाइंडिंग कोर हिस्टैरिसीस हानि को शून्य कर देती है।',
            bn: 'ল্যাপ ওয়াইন্ডিং আয়রন কোরের হিস্টেরেসিস লস শূন্য করে দেয়।'
          }
        }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'In Lap winding, the number of parallel paths A equals the number of poles P (A = P), whereas Wave winding is restricted to A = 2. Multiple parallel paths divide high armature currents into manageable portions per conductor.',
        hi: 'लैप वाइंडिंग में समानांतर पथों की संख्या पोलों की संख्या के बराबर (A = P) होती है, जो उच्च धारा वहन करने के लिए आदर्श है।',
        bn: 'ল্যাপ ওয়াইন্ডিংয়ে সমান্তরাল পথ A = P, যেখানে ওয়েভ ওয়াইন্ডিংয়ে সর্বদা A = ২। বহু সমান্তরাল পথ থাকায় উচ্চ কারেন্ট সহজে পরিবাহিত হয়।'
      }
    },
    {
      id: 'mcq-ch6-l3-3',
      question: {
        en: 'What happens to the armature current (I_a) of a DC motor at the very instant of starting before the rotor begins to spin?',
        hi: 'रोटर के घूमने से ठीक पहले, स्टार्टिंग के क्षण डीसी मोटर के आर्मेचर करंट (I_a) का क्या होता है?',
        bn: 'রোটর ঘোরার ঠিক পূর্ব মুহূর্তে, ডিসি মোটর চালুর মুহূর্তে আর্মেচার কারেন্টের (I_a) কী ঘটে?'
      },
      options: [
        {
          id: 'opt-a',
          text: {
            en: 'It is dangerously high (I_start = V / R_a) because Back EMF (E_b) is zero at zero speed.',
            hi: 'यह अत्यधिक और खतरनाक रूप से उच्च होता है (I_start = V / R_a) क्योंकि शून्य गति पर बैक EMF (E_b) शून्य होता है।',
            bn: 'এটি বিপজ্জনক মাত্রায় উচ্চ হয় (I_start = V / R_a) কারণ শূন্য গতিতে ব্যাক EMF (E_b) শূন্য থাকে।'
          }
        },
        {
          id: 'opt-b',
          text: {
            en: 'It is zero because the brushes are not yet energized.',
            hi: 'यह शून्य होता है क्योंकि ब्रश अभी सक्रिय नहीं हुए हैं।',
            bn: 'এটি শূন্য থাকে কারণ ব্রাশে তখনও বিদ্যুৎ সংযোগ পৌঁছায়নি।'
          }
        },
        {
          id: 'opt-c',
          text: {
            en: 'It is equal to exactly 10% of rated full-load current.',
            hi: 'यह रेटेड फुल-लोड धारा के ठीक 10% के बराबर होता है।',
            bn: 'এটি রেটেড ফুল-লোড কারেন্টের ঠিক ১০% এর সমান হয়।'
          }
        },
        {
          id: 'opt-d',
          text: {
            en: 'It reverses polarity at 50 Hz frequency.',
            hi: 'यह 50 Hz आवृत्ति पर ध्रुवता बदलता है।',
            bn: 'এটি ৫০ Hz কম্পাঙ্কে পোলারিটি পরিবর্তন করে।'
          }
        }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'Back EMF E_b is directly proportional to speed (E_b ∝ N). At standstill (N = 0), E_b = 0. Therefore, I_a = (V - 0) / R_a, which is 10 to 20 times rated current, requiring a motor starter to protect windings.',
        hi: 'शून्य गति पर बैक EMF शून्य होता है, जिससे स्टार्टिंग करंट I_a = V / R_a अत्यधिक बढ़ जाता है, जिसके लिए स्टार्टर अनिवार्य है।',
        bn: 'স্থির অবস্থায় N = ০ হওয়ায় E_b = ০। ফলে প্রারম্ভিক কারেন্ট I_a = V / R_a রেটেড মানের চেয়ে ১০-২০ গুণ বেশি হয় এবং মোটর স্টার্টার প্রয়োজন হয়।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch6-l3-1',
      question: {
        en: 'Why is the Armature Core of a DC machine always constructed from thin laminated silicon steel stampings rather than solid cast iron?',
        hi: 'डीसी मशीन का आर्मेचर कोर ठोस लोहे के बजाय हमेशा पतली लैमिनेटेड सिलिकॉन स्टील पत्तियों से क्यों बनाया जाता है?',
        bn: 'ডিসি মেশিনের আর্মেচার কোর কেন নিরেট ঢালাই লোহার পরিবর্তে পাতলা লেমিনেটেড সিলিকন স্টিল শিট দিয়ে তৈরি করা হয়?'
      },
      hint: {
        en: 'Consider the alternating magnetic flux experienced by the rotating armature and the two types of core losses (eddy current and hysteresis).',
        hi: 'घूमते आर्मेचर द्वारा अनुभव किए जाने वाले प्रत्यावर्ती फ्लक्स और दो प्रकार की कोर हानियों (एडी करंट एवं हिस्टैरिसीस) पर विचार करें।',
        bn: 'ঘূর্ণায়মান আর্মেচারে পরিবর্তনশীল ফ্লাক্সের প্রভাব এবং দুই প্রকার কোর লস (এডি কারেন্ট ও হিস্টেরেসিস) এর কথা ভাবুন।'
      },
      answerKey: {
        en: 'As the armature rotates through alternating North and South poles, its core material is subjected to continuous magnetic flux reversals. This induces eddy currents within the iron. Laminating the core with thin sheets insulated by varnish restricts eddy current paths, dramatically reducing eddy current loss (P_e ∝ t²). Adding 3-4% silicon to the steel increases resistivity and narrows the B-H hysteresis loop, minimizing hysteresis loss.',
        hi: 'चूँकि आर्मेचर N और S पोलों के बीच घूमता है, इसमें लगातार चुंबकीय फ्लक्स बदलता है। लैमिनेशन एडी करंट के पथ को तोड़कर भंवर धारा हानि (P_e ∝ t²) को बहुत कम कर देता है। सिलिकॉन मिलाने से प्रतिरोधकता बढ़ती है और हिस्टैरिसीस हानि घटती है।',
        bn: 'আর্মেচার N ও S পোল অতিক্রম করার সময় এতে অবিরাম ফ্লাক্স বিপরীতমুখী হয়। পাতলা লেমিনেশন এডি কারেন্ট লস (P_e ∝ t²) ব্যাপকভাবে হ্রাস করে এবং সিলিকন স্টিল হিস্টেরেসিস লস কমিয়ে দেয়।'
      }
    },
    {
      id: 'pq-ch6-l3-2',
      question: {
        en: 'A 4-pole DC motor is supplied from a 240 V DC line and develops an electromagnetic torque of 80 N·m while rotating at 1200 RPM. If armature circuit resistance is R_a = 0.4 Ω, calculate the Back EMF (E_b) and armature current (I_a).',
        hi: 'एक 4-पोल डीसी मोटर 240 V आपूर्ति पर चलती है और 1200 RPM पर 80 N·m का टॉर्क विकसित करती है। यदि R_a = 0.4 Ω है, तो बैक EMF (E_b) और आर्मेचर करंट (I_a) की गणना करें।',
        bn: 'একটি ৪-পোল ডিসি মোটর ২৪০ V লাইনে চালিত হয়ে ১২০০ RPM গতিতে ৮০ N·m টর্ক উৎপন্ন করে। আর্মেচার রোধ R_a = ০.৪ Ω হলে ব্যাক EMF (E_b) এবং আর্মেচার কারেন্ট (I_a) নির্ণয় করুন।'
      },
      hint: {
        en: 'First calculate mechanical power P = T · ω = T · (2πN/60). Then use P = E_b · I_a and V = E_b + I_a · R_a to solve for E_b and I_a.',
        hi: 'पहले यांत्रिक शक्ति P = T · ω = T · (2πN/60) निकालें। फिर P = E_b · I_a और V = E_b + I_a · R_a का प्रयोग करें।',
        bn: 'প্রথমে যান্ত্রিক ক্ষমতা P = T · ω = T · (২πN/৬০) বের করুন। তারপর P = E_b · I_a ও V = E_b + I_a · R_a সমীকরণ ব্যবহার করুন।'
      },
      answerKey: {
        en: 'Angular speed ω = (2 × π × 1200) / 60 = 125.664 rad/s.\nDeveloped Power P = T · ω = 80 × 125.664 = 10,053.1 W = 10.053 kW.\nSince P = E_b · I_a and E_b = V - I_a · R_a = 240 - 0.4 · I_a:\nI_a · (240 - 0.4 · I_a) = 10,053.1\n0.4 I_a² - 240 I_a + 10,053.1 = 0\nI_a² - 600 I_a + 25,132.75 = 0\nUsing quadratic formula: I_a = [600 - √(360,000 - 100,531)] / 2 = [600 - 509.38] / 2 = 45.31 A.\nBack EMF E_b = 240 - (45.31 × 0.4) = 240 - 18.12 = 221.88 Volts.',
        hi: 'कोणीय वेग ω = 2π × 1200 / 60 = 125.66 rad/s।\nशक्ति P = 80 × 125.66 = 10,053 W।\nसमीकरण हल करने पर: I_a = 45.31 A, बैक EMF E_b = 221.88 V।',
        bn: 'কৌণিক বেগ ω = ১২৫.৬৬ rad/s।\nক্ষমতা P = ৮০ × ১২৫.৬৬ = ১০,০৫৩ W।\nসমীকরণ সমাধান করে: I_a = ৪৫.৩১ A, ব্যাক EMF E_b = ২২১.৮৮ V।'
      }
    }
  ]
};
