import { Lesson } from '../types';

export const LESSON_LENZS_LAW_CONSERVATION_ENERGY: Lesson = {
  id: 'lsn-ch10-lenzs-law-conservation-energy',
  topicId: 'ch10-lenzs-law-conservation-energy',
  chapterId: 'ch-em-induction',
  order: 2,
  title: {
    en: 'Lenz’s Law & Conservation of Energy Principle',
    hi: 'लेंज का नियम एवं ऊर्जा संरक्षण का सिद्धांत',
    bn: 'লেনজের সূত্র ও শক্তি সংরক্ষণ নীতি'
  },
  description: {
    en: 'Rigorous analysis of Lenz’s Law, magnetic flux opposition mechanisms, thermodynamic energy conservation proof, generator back-torque, and electrodynamic repulsion/attraction principles.',
    hi: 'लेंज के नियम का गहन विश्लेषण, चुंबकीय फ्लक्स विरोध तंत्र, ऊष्मागतिकी ऊर्जा संरक्षण प्रमाण, जनरेटर बैक-टॉर्क एवं विद्युत गतिक प्रतिकर्षण/आकर्षण सिद्धांतों का अध्ययन।',
    bn: 'লেনজের সূত্রের গভীর বিশ্লেষণ, চৌম্বক ফ্লাক্স বিরোধিতার কৌশল, তাপগতিবিদ্যা শক্তি সংরক্ষণ প্রমাণ, জেনারেটরের ব্যাক-টর্ক এবং ইলেকট্রোডাইনামিক বিকর্ষণ/আকর্ষণ নীতি।'
  },
  estimatedMinutes: 32,
  easyExplanation: {
    en: "Lenz's Law is nature's fundamental rule against 'free energy'. When you push a magnet toward a coil, the coil fights back like a magnetic spring! It induces a current that creates a matching magnetic pole to push you away. If you try to pull it back, it switches magnetic poles to pull you in! The mechanical effort you spend fighting this resistance is exactly what converts into electrical energy.",
    hi: 'लेंज का नियम प्रकृति का वह नियम है जो "मुफ्त ऊर्जा" को रोकता है। जब आप किसी चुंबक को कुंडली की ओर धकेलते हैं, तो कुंडली एक चुंबकीय स्प्रिंग की तरह विरोध करती है! इसमें ऐसी धारा बहती है जो आपके चुंबक को दूर धकेलने के लिए समान ध्रुव बना देती है। जब आप इसे दूर खींचते हैं, तो यह विपरीत ध्रुव बनाकर आकर्षित करती है। इस विरोध के विरुद्ध आपके द्वारा किया गया यांत्रिक कार्य ही बिजली (विद्युत ऊर्जा) में बदलता है।',
    bn: 'লেনজের সূত্র হলো প্রকৃতির "বিনা পরিশ্রমে শক্তি উৎপাদন" ঠেকানোর নীতি। যখন আপনি কোনো চুম্বককে কয়েলের দিকে এগিয়ে নেন, কয়েলটি একটি স্প্রিংয়ের মতো বাধা দেয়! এতে এমনভাবে কারেন্ট প্রবাহিত হয় যা চুম্বককে বিকর্ষণ করতে একই মেরু তৈরি করে। আবার চুম্বকটিকে দূরে টেনে আনলে বিপরীত মেরু সৃষ্টি করে আকর্ষণ করে। এই বাধার বিরুদ্ধে আমরা যে যান্ত্রিক কাজ করি, ঠিক সেটাই বিদ্যুৎ শক্তিতে রূপান্তরিত হয়।'
  },
  detailedExplanation: {
    en: `1. Statement of Lenz’s Law (Heinrich Lenz, 1834):
"The polarity of the induced electromotive force (EMF) and the direction of the induced current in any closed circuit is always such that it sets up a magnetic field which directly opposes the change in magnetic flux that produced it."

2. The Mechanical Opposition Mechanism:
- Case 1 (North Pole Approaching Coil, ΔΦ > 0):
  As the North pole of a magnet approaches a coil face, the magnetic flux passing through the coil increases. According to Lenz's Law, the induced current in the coil flows in an anticlockwise direction (viewed from the magnet side), establishing an induced North pole on the facing end. This induced North pole creates an electrostatic/magnetic repulsive force (F_Lenz) pushing against the oncoming magnet. To continue pushing the magnet forward, an external agent must perform positive mechanical work against this repulsive force.
- Case 2 (North Pole Receding from Coil, ΔΦ < 0):
  When the North pole is pulled away from the coil, the magnetic flux decreases. The induced current instantly reverses direction to clockwise, creating an induced South pole at the near face. This South pole exerts an attractive force pulling the magnet back. Mechanical work must be done by the external agent against this attraction to continue pulling the magnet away.
- Case 3 (South Pole Approaching / Receding):
  Similarly, approaching a South pole induces a South pole (repulsion); receding a South pole induces a North pole (attraction).

3. Rigorous Proof of Energy Conservation:
Suppose Lenz's Law were false, and the induced current aided (reinforced) the change in magnetic flux rather than opposing it:
- Pushing a North pole toward a coil would induce a South pole, attracting the magnet faster.
- The magnet would accelerate automatically into the coil with increasing velocity (v ↑).
- A larger velocity would increase dΦ/dt, producing a larger induced current (I ↑), creating stronger attraction, and resulting in runaway perpetual acceleration with infinite kinetic and electrical energy generated from zero initial work!
- This would blatantly violate the First Law of Thermodynamics (Conservation of Energy).
- Therefore, nature strictly enforces that the induced current must oppose the flux change. Mechanical Work Input (W = ∫ F · dx) = Electrical Energy Generated (∫ e · i · dt) + Joule Thermal Losses (∫ i² · R · dt).

4. Back-Torque in Electric Generators:
In industrial power station alternators and DC generators, when electrical loads (cities, factories) consume more current (I_armature ↑), the magnetic field of the armature reacts against the main rotor field. This creates a powerful counter-torque or "back-torque" (T_back ∝ I_a · Φ_field) that directly opposes the prime mover's rotation. Steam or hydro turbines must burn more fuel or pass more water to maintain grid frequency (50 Hz / 60 Hz).`,

    hi: `1. लेंज के नियम का कथन (हेनरिक लेंज, 1834):
"किसी परिपथ में प्रेरित विद्युत वाहक बल (EMF) और प्रेरित धारा की दिशा सदैव इस प्रकार होती है कि वह उस चुंबकीय फ्लक्स परिवर्तन का सीधे विरोध करती है जिसके द्वारा वह उत्पन्न हुई है।"

2. यांत्रिक विरोध की क्रियाविधि:
- स्थिति 1 (उत्तरी ध्रुव पास लाना, ΔΦ > 0):
  जब उत्तरी ध्रुव को कुंडली के पास लाया जाता है, तो कुंडली के मुख पर प्रेरित धारा वामावर्त (एंटी-क्लॉकवाइज) बहकर एक प्रेरित उत्तरी ध्रुव बनाती है। यह उत्तरी ध्रुव चुंबक पर प्रतिकर्षण बल (F_lenz) लगाता है। चुंबक को आगे बढ़ाने के लिए बाह्य स्रोत को इस प्रतिकर्षण के विरुद्ध यांत्रिक कार्य करना पड़ता है।
- स्थिति 2 (उत्तरी ध्रुव दूर ले जाना, ΔΦ < 0):
  जब उत्तरी ध्रुव को दूर खींचा जाता है, तो धारा दक्षिणावर्त (क्लॉकवाइज) होकर दक्षिणी ध्रुव बनाती है, जो चुंबक को आकर्षित कर रोकता है।
- दोनों ही स्थितियों में किया गया यांत्रिक कार्य (Mechanical Work) ही विद्युत ऊर्जा में रूपांतरित होता है।

3. ऊर्जा संरक्षण का प्रमाण:
यदि लेंज का नियम असत्य होता और प्रेरित धारा फ्लक्स का सहयोग करती:
- चुंबक को थोड़ा सा हिलाने पर वह स्वतः ही असीमित गति से त्वरित होता चला जाता।
- बिना किसी बाह्य ऊर्जा के अनंत बिजली और गतिज ऊर्जा उत्पन्न होती, जो ऊष्मागतिकी के प्रथम नियम (ऊर्जा संरक्षण) का उल्लंघन है।
- अतः प्रकृति में ऊर्जा संरक्षण के लिए लेंज का नियम आवश्यक और अकाट्य है।

4. जनरेटर में बैक-टॉर्क (Back-Torque):
जब जनरेटर पर विद्युत लोड बढ़ता है (धारा I बढ़ती है), तो आर्मेचर में उत्पन्न विरोधी चुंबकीय क्षेत्र जनरेटर के घूमने का विरोध करता है। इस विरोधी आघूर्ण (Back-Torque) को घुमाने के लिए टरबाइन को अधिक कोयला, गैस या जल प्रवाहित करना पड़ता है।`,

    bn: `১. লেনজের সূত্রের বিবৃতি (হেনরিক লেনজ, ১৮৩৪):
"তড়িৎচৌম্বকীয় আবেশের ক্ষেত্রে আবিষ্ট তড়িৎচালক বল বা আবিষ্ট তড়িৎপ্রবাহের অভিমুখ সর্বদা এমন হয় যেন তা সেই কারণকে বাধা দেয় যার জন্য এই তড়িৎপ্রবাহের সৃষ্টি হয়েছে।"

২. যান্ত্রিক বাধার কৌশল:
- অবস্থা ১ (উত্তর মেরুর আগমন, ΔΦ > 0):
  উত্তর মেরু কয়েলের দিকে এলে কয়েলের সামনের তলে ঘড়ির কাঁটার বিপরীত দিকে কারেন্ট প্রবাহিত হয়ে উত্তর মেরু তৈরি করে। ফলে সমমেরুর বিকর্ষণ সৃষ্টি হয়। এই বিকর্ষণের বিরুদ্ধে বাহ্যিক বল প্রয়োগ করে কাজ করতে হয়।
- অবস্থা ২ (উত্তর মেরুর প্রস্থান, ΔΦ < 0):
  উত্তর মেরু দূরে সরিয়ে নিলে কয়েলে ঘড়ির কাঁটার দিকে কারেন্ট চলে দক্ষিণ মেরু গঠন করে এবং চুম্বককে আকর্ষণ করে আটকে রাখতে চায়।
- উভয় ক্ষেত্রে যান্ত্রিক কাজই বৈদ্যুতিক শক্তিতে রূপান্তরিত হয়।

৩. শক্তি সংরক্ষণ নীতির প্রমাণ:
যদি লেনজের সূত্র সত্য না হতো এবং কয়েল আকর্ষণ করতো:
- সামান্য স্পর্শেই চুম্বকটি স্বতঃস্ফূর্তভাবে অসীম বেগে কয়েলে প্রবেশ করতো।
- বিনা শক্তিতেই অসীম বিদ্যুৎ ও গতিশক্তি তৈরি হতো, যা তাপগতিবিদ্যার প্রথম সূত্রের চরম লঙ্ঘন।
- সুতরাং শক্তি সংরক্ষণ রক্ষার্থেই লেনজের সূত্রের ঋণাত্মক চিহ্ন ক্রিয়াশীল থাকে।

৪. জেনারেটরের ব্যাক-টর্ক:
বিদ্যুৎকেন্দ্রে যখন লোড বেশি কারেন্ট টানে, আর্মেচারে উৎপন্ন বিপরীত চৌম্বক ক্ষেত্র টারবাইনের ঘূর্ণনে তীব্র বাধা বা ব্যাক-টর্ক সৃষ্টি করে। ফলে ফ্রিকোয়েন্সি ঠিক রাখতে টারবাইনে বেশি বাষ্প বা জ্বালানি সরবরাহ করতে হয়।`
  },
  formulas: [
    {
      id: 'f-lenz-faraday-combined',
      symbol: 'e',
      expression: 'e = - N · (dΦ / dt)',
      title: {
        en: "Faraday-Lenz Law of Induction",
        hi: 'फैराडे-लेंज प्रेरण नियम',
        bn: 'ফ্যারাডে-লেনজ আবেশ সূত্র'
      },
      description: {
        en: 'The negative sign represents Lenz’s opposing magnetic reaction',
        hi: 'ऋणात्मक चिह्न लेंज की विरोधी चुंबकीय प्रतिक्रिया को दर्शाता है',
        bn: 'ঋণাত্মক চিহ্নটি লেনজের বিরোধী চৌম্বক প্রতিক্রিয়া নির্দেশ করে'
      },
      variables: [
        { symbol: 'e', name: { en: 'Induced EMF (Volts)', hi: 'प्रेरित ईएमएफ (वोल्ट)', bn: 'আবিষ্ট ইএমএফ (ভোল্ট)' } },
        { symbol: 'N', name: { en: 'Coil turns', hi: 'कुंडली के फेरे', bn: 'কয়েলের পাকসংখ্যা' } },
        { symbol: 'dΦ/dt', name: { en: 'Rate of magnetic flux change (Wb/s)', hi: 'फ्लक्स परिवर्तन की दर (Wb/s)', bn: 'ফ্লাক্স পরিবর্তনের হার (Wb/s)' } }
      ]
    },
    {
      id: 'f-lenz-opposing-force',
      symbol: 'F_Lenz',
      expression: 'F_Lenz = i · l · B · sin(θ)',
      title: {
        en: 'Lenz Opposing Retarding Force',
        hi: 'लेंज विरोधी मंदक बल',
        bn: 'লেনজের বিরোধী মন্দনকারী বল'
      },
      description: {
        en: 'Lorentz counter-force resisting motion of conductor or magnet',
        hi: 'चालक अथवा चुंबक की गति का विरोध करने वाला लोरेंट्ज़ विरोधी बल',
        bn: 'পরিবাহী বা চুম্বকের গতির প্রতিরোধক লোরেন্ৎজ বিপরীত বল'
      },
      variables: [
        { symbol: 'F_Lenz', name: { en: 'Opposing retarding force (Newtons, N)', hi: 'विरोधी मंदक बल (न्यूटन, N)', bn: 'বিরোধী মন্দনকারী বল (নিউটন, N)' } },
        { symbol: 'i', name: { en: 'Induced current in circuit (A)', hi: 'परिपथ में प्रेरित धारा (A)', bn: 'বর্তনীতে আবিষ্ট প্রবাহ (A)' } },
        { symbol: 'l', name: { en: 'Conductor length in field (m)', hi: 'चालक की लंबाई (m)', bn: 'পরিবাহীর দৈর্ঘ্য (m)' } },
        { symbol: 'B', name: { en: 'Magnetic flux density (Tesla)', hi: 'चुंबकीय फ्लक्स घनत्व (Tesla)', bn: 'চৌম্বক ফ্লাক্স ঘনত্ব (Tesla)' } }
      ]
    },
    {
      id: 'f-lenz-energy-balance',
      symbol: 'W_mech',
      expression: 'W_mech = ∫ F_ext · dx = ∫ e · i · dt + ∫ i² · R · dt',
      title: {
        en: 'Electromechanical Energy Conservation Balance',
        hi: 'विद्युत-यांत्रिक ऊर्जा संरक्षण संतुलन',
        bn: 'তড়িৎ-যান্ত্রিক শক্তি সংরক্ষণ সমীকরণ'
      },
      description: {
        en: 'Mechanical work done against Lenz resistance equals electrical energy plus Joule heat',
        hi: 'लेंज प्रतिरोध के विरुद्ध किया गया यांत्रिक कार्य विद्युत ऊर्जा एवं जूल ऊष्मा के बराबर होता है',
        bn: 'লেনজ বাধার বিরুদ্ধে কৃত যান্ত্রিক কাজ উৎপন্ন বৈদ্যুতিক শক্তি ও জুল তাপের সমান'
      },
      variables: [
        { symbol: 'W_mech', name: { en: 'Mechanical work done (Joules)', hi: 'किया गया यांत्रिक कार्य (जूल)', bn: 'কৃত যান্ত্রিক কাজ (জুল)' } },
        { symbol: 'e · i', name: { en: 'Instantaneous electrical power (Watts)', hi: 'तात्कालिक विद्युत शक्ति (वाट)', bn: 'তাৎক্ষণিক বৈদ্যুতিক ক্ষমতা (ওয়াট)' } },
        { symbol: 'i² · R', name: { en: 'Joule thermal dissipation (Watts)', hi: 'जूल ऊष्मीय क्षय (वाट)', bn: 'জুল তাপীয় অপচয় (ওয়াট)' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-lenz-energy-proof',
      title: {
        en: 'Mathematical & Thermodynamic Energy Conservation Proof',
        hi: 'गणितीय एवं ऊष्मागतिकी ऊर्जा संरक्षण प्रमाण',
        bn: 'গাণিতিক ও তাপগতিবিদ্যাভিত্তিক শক্তি সংরক্ষণ প্রমাণ'
      },
      content: {
        en: `Consider a straight conducting rod of length l and electrical resistance R sliding with velocity v along frictionless conductive rails in a perpendicular uniform magnetic field B:
1. When moved by distance dx in time dt (v = dx/dt), the area change is dA = l · dx, causing flux change dΦ = B · dA = B · l · dx.
2. The induced motional EMF is:
   e = - dΦ/dt = - B · l · (dx/dt) = - B · l · v
3. The resulting induced loop current is:
   i = e / R = (B · l · v) / R
4. This induced current flowing in the presence of magnetic field B experiences a magnetic Lorentz force directed OPPOSITE to velocity v:
   F_Lenz = i · l · B = [(B · l · v) / R] · l · B = (B² · l² · v) / R
5. To maintain constant speed v, an external pulling force F_ext = F_Lenz must be exerted:
   Mechanical Input Power = P_mech = F_ext · v = (B² · l² · v²) / R
6. The Electrical Power dissipated in the circuit resistance is:
   P_elec = i² · R = [(B · l · v) / R]² · R = (B² · l² · v²) / R

Notice that P_mech ≡ P_elec. Mechanical rate of working precisely equals electrical rate of dissipation. If Lenz's law did not have the negative sign, energy would be created from nothing, violating thermodynamics!`,
        hi: `B फ्लक्स घनत्व के समरूप चुंबकीय क्षेत्र में v वेग से फिसलने वाली l लंबाई की छड़ पर विचार करें:
1. फ्लक्स परिवर्तन: dΦ = B · l · dx
2. प्रेरित ईएमएफ: e = B · l · v
3. प्रेरित धारा: i = (B · l · v) / R
4. लेंज विरोधी बल: F_Lenz = i · l · B = (B² · l² · v) / R
5. यांत्रिक इनपुट शक्ति: P_mech = F · v = (B² · l² · v²) / R
6. विद्युत शक्ति: P_elec = i² · R = (B² · l² · v²) / R
यहाँ P_mech = P_elec है। यह सिद्ध करता है कि यांत्रिक कार्य ही विद्युत ऊर्जा में बदलता है।`,
        bn: `একটি সুষম চৌম্বক ক্ষেত্র B-তে v বেগে গতিশীল l দৈর্ঘ্যের পরিবাহী দণ্ডের ক্ষেত্রে:
১. ফ্লাক্স পরিবর্তন: dΦ = B · l · dx
২. আবিষ্ট ইএমএফ: e = B · l · v
৩. আবিষ্ট তড়িৎপ্রবাহ: i = (B · l · v) / R
৪. লেনজের বিপরীতমুখী বল: F_Lenz = i · l · B = (B² · l² · v) / R
৫. যান্ত্রিক ইনপুট ক্ষমতা: P_mech = F · v = (B² · l² · v²) / R
৬. বৈদ্যুতিক শক্তি অপচয়: P_elec = i² · R = (B² · l² · v²) / R
এখানে P_mech = P_elec, যা প্রমাণ করে কৃত যান্ত্রিক কাজই সম্পূর্ণভাবে বৈদ্যুতিক শক্তিতে রূপান্তরিত হয়।`
      },
      schematicId: 'circuit-ch10-lenz-law-flux-opposition',
      keyEquations: [
        'F_Lenz = (B² · l² · v) / R',
        'P_mech = F · v = (B² · l² · v²) / R',
        'P_elec = i² · R = P_mech'
      ]
    }
  ],
  solvedExamples: [
    {
      id: 'ex-lenz-1',
      problem: {
        en: 'A conducting wire loop with total resistance 0.50 Ω is placed perpendicular to a uniform magnetic field. An external agent pulls the loop out of the field, causing the magnetic flux to decrease uniformly at a rate of 1.2 Wb/s. (a) Find the induced EMF. (b) Find the induced current. (c) Calculate the mechanical power required to sustain this motion.',
        hi: '0.50 Ω कुल प्रतिरोध वाली एक चालक तार लूप एकसमान चुंबकीय क्षेत्र के लंबवत रखी है। एक बाह्य कारक लूप को क्षेत्र से बाहर खींचता है, जिससे चुंबकीय फ्लक्स 1.2 Wb/s की दर से घटता है। (a) प्रेरित ईएमएफ ज्ञात कीजिए। (b) प्रेरित धारा ज्ञात कीजिए। (c) इस गति को बनाए रखने के लिए आवश्यक यांत्रिक शक्ति की गणना कीजिए।',
        bn: '০.৫০ Ω মোট রোধের একটি পরিবাহী লুপ সুষম চৌম্বক ক্ষেত্রে অবস্থিত। একটি বাহ্যিক বল লুপটিকে টেনে বাইরে আনলে ফ্লাক্স ১.২ Wb/s হারে হ্রাস পায়। (ক) আবিষ্ট ইএমএফ নির্ণয় করুন। (খ) আবিষ্ট তড়িৎপ্রবাহ নির্ণয় করুন। (গ) গতি বজায় রাখতে প্রয়োজনীয় যান্ত্রিক ক্ষমতা কত?'
      },
      givenValues: {
        'Loop Resistance (R)': '0.50 Ω',
        'Flux change rate (dΦ/dt)': '-1.2 Wb/s (decreasing)',
        'Coil turns (N)': '1 turn'
      },
      solution: {
        en: `(a) Calculate Induced EMF:
  e = - N · (dΦ/dt) = - (1) × (-1.2 V) = +1.2 Volts.

(b) Calculate Induced Current:
  i = e / R = 1.2 V / 0.50 Ω = 2.4 Amperes.

(c) Calculate Mechanical Power Required:
  By Conservation of Energy, Mechanical Input Power = Electrical Dissipated Power:
  P_mech = P_elec = e · i = i² · R
  P_mech = (1.2 V) × (2.4 A) = 2.88 Watts
  Alternatively: P_mech = (2.4 A)² × 0.50 Ω = 5.76 × 0.50 = 2.88 W.`,
        hi: `(a) प्रेरित ईएमएफ:
  e = - (1) × (-1.2) = +1.2 वोल्ट।

(b) प्रेरित धारा:
  i = e / R = 1.2 / 0.50 = 2.4 एम्पीयर।

(c) आवश्यक यांत्रिक शक्ति:
  ऊर्जा संरक्षण के अनुसार P_mech = e × i = 1.2 × 2.4 = 2.88 वाट।`,
        bn: `(ক) আবিষ্ট ইএমএফ:
  e = - (১) × (-১.২) = +১.২ ভোল্ট।

(খ) আবিষ্ট কারেন্ট:
  i = e / R = ১.২ / ০.৫০ = ২.৪ অ্যাম্পিয়ার।

(গ) প্রয়োজনীয় যান্ত্রিক ক্ষমতা:
  শক্তি সংরক্ষণ নীতি অনুসারে P_mech = e × i = ১.২ × ২.৪ = ২.৮৮ ওয়াট।`
      },
      finalAnswer: {
        en: '(a) EMF = 1.2 V, (b) Current = 2.4 A, (c) Mechanical Power = 2.88 W.',
        hi: '(a) ईएमएफ = 1.2 V, (b) धारा = 2.4 A, (c) यांत्रिक शक्ति = 2.88 W।',
        bn: '(ক) ইএমএফ = ১.২ V, (খ) কারেন্ট = ২.৪ A, (গ) যান্ত্রিক ক্ষমতা = ২.৮৮ W।'
      }
    },
    {
      id: 'ex-lenz-2',
      problem: {
        en: 'A 0.40 m long metal rod slides at a constant speed of 5.0 m/s across parallel rails connected to a 4.0 Ω resistor in a uniform 0.60 T magnetic field. Calculate the retarding magnetic force (Lenz force) acting on the rod.',
        hi: '0.40 m लंबी धातु की छड़ 0.60 T के चुंबकीय क्षेत्र में 4.0 Ω प्रतिरोध से जुड़े समानांतर रेल पर 5.0 m/s की स्थिर गति से फिसलती है। छड़ पर लगने वाले मंदक चुंबकीय बल (लेंज बल) की गणना कीजिए।',
        bn: '০.৪০ m দৈর্ঘ্যের একটি ধাতব দণ্ড ০.৬০ T চৌম্বক ক্ষেত্রে ৪.০ Ω রোধ বিশিষ্ট সমান্তরাল রেলের উপর ৫.০ m/s সুষম বেগে গতিশীল। দণ্ডে ক্রিয়ারত বিপরীত মন্দনকারী বল (লেনজ বল) নির্ণয় করুন।'
      },
      givenValues: {
        'Rod Length (l)': '0.40 m',
        'Speed (v)': '5.0 m/s',
        'Magnetic Field (B)': '0.60 T',
        'Resistance (R)': '4.0 Ω'
      },
      solution: {
        en: `Step 1: Calculate Induced Motional EMF:
  e = B · l · v = 0.60 T × 0.40 m × 5.0 m/s = 1.20 Volts.

Step 2: Calculate Induced Loop Current:
  i = e / R = 1.20 V / 4.0 Ω = 0.30 Amperes.

Step 3: Calculate Retarding Lorentz / Lenz Force:
  F_Lenz = i · l · B = 0.30 A × 0.40 m × 0.60 T = 0.072 Newtons (N).`,
        hi: `चरण 1: प्रेरित ईएमएफ e = B · l · v = 0.60 × 0.40 × 5.0 = 1.20 V।
चरण 2: धारा i = e / R = 1.20 / 4.0 = 0.30 A।
चरण 3: लेंज विरोधी बल F = i · l · B = 0.30 × 0.40 × 0.60 = 0.072 N।`,
        bn: `ধাপ ১: আবিষ্ট ইএমএফ e = B · l · v = ০.৬০ × ০.৪০ × ৫.০ = ১.২০ V।
ধাপ ২: আবিষ্ট প্রবাহ i = e / R = ১.২০ / ৪.০ = ০.৩০ A।
ধাপ ৩: লেনজের মন্দনকারী বল F = i · l · B = ০.৩০ × ০.৪০ × ০.৬০ = ০.০৭২ N।`
      },
      finalAnswer: {
        en: 'The retarding Lenz force on the rod is 0.072 N (or 72 mN) directed opposite to velocity.',
        hi: 'छड़ पर लगने वाला विरोधी लेंज बल 0.072 N है (गति के विपरीत दिशा में)।',
        bn: 'দণ্ডের উপর বিপরীত লেনজ বলের মান হলো ০.০৭২ N।'
      }
    }
  ],
  workedExamples: [
    {
      id: 'wex-lenz-1',
      problem: {
        en: 'A 0.40 m long metal rod slides at a constant speed of 5.0 m/s across parallel rails connected to a 4.0 Ω resistor in a uniform 0.60 T magnetic field. Calculate the retarding magnetic force (Lenz force) acting on the rod.',
        hi: '0.40 m लंबी धातु की छड़ 0.60 T के क्षेत्र में 4.0 Ω प्रतिरोध से जुड़े ट्रैक पर 5.0 m/s की गति से चलती है। विरोधी बल ज्ञात कीजिए।',
        bn: '০.৪০ m দৈর্ঘ্যের ধাতব দণ্ড ০.৬০ T ক্ষেত্রে ৪.০ Ω রোধে ৫.০ m/s বেগে চলছে। বিপরীত বল কত?'
      },
      givenValues: {
        'l': '0.40 m',
        'v': '5.0 m/s',
        'B': '0.60 T',
        'R': '4.0 Ω'
      },
      solution: {
        en: 'e = Blv = 0.6×0.4×5 = 1.2 V. i = 1.2/4 = 0.3 A. F_lenz = ilB = 0.3×0.4×0.6 = 0.072 N.',
        hi: 'e = 1.2 V। i = 0.3 A। F = 0.072 N।',
        bn: 'e = ১.২ V। i = ০.৩ A। F = ০.০৭২ N।'
      },
      finalAnswer: {
        en: 'F_Lenz = 0.072 N',
        hi: 'विरोधी बल = 0.072 N',
        bn: 'বিপরীত বল = ০.০৭২ N'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Electromagnetic Braking: High-speed bullet trains (TGV, Shinkansen) and roller coasters use Lenz opposing eddy currents to brake smoothly without mechanical friction or brake pad wear.',
      'Galvanometer Damping: Moving coil meters wind their coil on a conductive aluminum former so that Lenz opposing currents rapidly damp needle oscillations, bringing it to a dead-beat stop.',
      'Turbine Governor Action in Power Stations: Grid electrical load increases create generator back-torque, prompting automatic turbine governors to open steam/water valves.',
      'Induction Cooker Pan Detection: Sensing the magnetic repulsion and eddy current loading confirms that a ferromagnetic pot is present on the cooktop.',
      'Metal Detectors and Security Scanners: When a concealed metallic weapon disturbs the search coil flux, the induced Lenz eddy field is detected by receiver circuitry.'
    ],
    hi: [
      'विद्युत चुंबकीय ब्रेकिंग: बुलेट ट्रेनों और रोलर कोस्टर में बिना किसी घर्षण या ब्रेक पैड के घिसने के चिकनी ब्रेकिंग के लिए लेंज विरोधी बलों का उपयोग होता है।',
      'गैल्वेनोमीटर डैम्पिंग: एल्युमिनियम फ्रेम पर कुंडली लपेटने से उत्पन्न लेंज विरोधी धाराएं सुई के दोलनों को तुरंत शांत (Dead-beat) कर देती हैं।',
      'पावर स्टेशन में बैक-टॉर्क नियंत्रण: ग्रिड पर लोड बढ़ने पर जनरेटर में बैक-टॉर्क बढ़ता है, जिससे टरबाइन के स्टीम वाल्व स्वतः अधिक खुलते हैं।',
      'इंडक्शन कुकर में बर्तन पहचान: प्रेरित चुंबकीय विरोध से इंडक्शन कुकटॉप यह पहचानता है कि सही बर्तन रखा है या नहीं।',
      'मेटल डिटेक्टर एवं सुरक्षा स्कैनर: धातु के हथियार से उत्पन्न लेंज विरोधी फ्लक्स को रिसीवर कॉइल तुरंत पहचान लेती है।'
    ],
    bn: [
      'তড়িৎচৌম্বকীয় ব্রেকিং: বুলেট ট্রেন ও রোলার কোস্টারে কোনো ঘর্ষণ বা ব্রেক প্যাডের ক্ষয় ছাড়াই মসৃণ ব্রেকিং নিশ্চিত করতে লেনজের বিরোধী বল ব্যবহৃত হয়।',
      'গ্যালভানোমিটার ড্যাম্পিং: অ্যালুমিনিয়াম ফ্রেমে কয়েল পেঁচিয়ে লেনজের বিরোধী কারেন্ট দ্বারা কাঁটার দোলন থামিয়ে দ্রুত স্থির (Dead-beat) করা হয়।',
      'বিদ্যুৎকেন্দ্রে টারবাইন নিয়ন্ত্রণ: গ্রিডে লোড বাড়লে ব্যাক-টর্ক বৃদ্ধির কারণে গভর্নর স্বয়ংক্রিয়ভাবে টারবাইনে বাষ্প প্রবাহ বাড়ায়।',
      'ইন্ডাকশন কুকারে পাত্র শনাক্তকরণ: চৌম্বকীয় বিকর্ষণ ও এডি কারেন্ট সেন্স করে পাত্রের উপস্থিতি নিশ্চিত করা হয়।',
      'মেটাল ডিটেক্টর ও নিরাপত্তা স্ক্যানার: লুকানো ধাতব বস্তুর লেনজ প্রতিক্রিয়া সেন্স করে শব্দ সংকেত দেয়।'
    ]
  },
  importantPoints: {
    en: [
      'Lenz’s law is a direct consequence of Conservation of Energy: No electrical energy can ever be harvested without doing equivalent mechanical or source work.',
      'Approaching pole induces a like pole (Repulsion): North approaching creates North; South approaching creates South.',
      'Receding pole induces an opposite pole (Attraction): North leaving creates South; South leaving creates North.',
      'Back-torque in generators is directly proportional to load current: Drawing more power from a generator mechanically stiffens its rotor.'
    ],
    hi: [
      'लेंज का नियम ऊर्जा संरक्षण का सीधा परिणाम है: समतुल्य यांत्रिक कार्य किए बिना कोई भी विद्युत ऊर्जा प्राप्त नहीं की जा सकती।',
      'पास आने पर समान ध्रुव बनता है (प्रतिकर्षण): उत्तर आने पर उत्तर; दक्षिण आने पर दक्षिण।',
      'दूर जाने पर विपरीत ध्रुव बनता है (आकर्षण): उत्तर जाने पर दक्षिण; दक्षिण जाने पर उत्तर।',
      'जनरेटर का बैक-टॉर्क लोड धारा के समानुपाती होता है: अधिक बिजली खींचने पर जनरेटर को घुमाना यांत्रिक रूप से भारी हो जाता है।'
    ],
    bn: [
      'লেনজের সূত্র সরাসরি শক্তি সংরক্ষণ নীতির ফল: সমপরিমাণ যান্ত্রিক কাজ ছাড়া কোনো বৈদ্যুতিক শক্তি উৎপন্ন হতে পারে না।',
      'কাছে এলে সমমেরু সৃষ্টি হয় (বিকর্ষণ): উত্তর মেরু এলে উত্তর; দক্ষিণ মেরু এলে দক্ষিণ।',
      'দূরে গেলে বিপরীত মেরু সৃষ্টি হয় (আকর্ষণ): উত্তর মেরু গেলে দক্ষিণ; দক্ষিণ মেরু গেলে উত্তর।',
      'জেনারেটরের ব্যাক-টর্ক লোড কারেন্টের সমানুপাতিক: বেশি বিদ্যুৎ খরচ করলে জেনারেটর ঘোরানো যান্ত্রিকভাবে কঠিন হয়।'
    ]
  },
  commonMistakes: {
    en: [
      'Thinking Lenz’s law opposes current flow: Lenz’s law opposes the *change in magnetic flux* (the cause), not the current itself.',
      'Believing energy is created out of nothing: Forgetting that the human hand or steam turbine doing mechanical work against the Lenz force is the sole energy source.',
      'Confusing pole polarity during recession: Misidentifying that when a North pole is pulled away, the coil face forms a South pole (attraction), not a North pole.',
      'Assuming motionless magnets experience Lenz force: Lenz forces only exist dynamically when relative velocity v ≠ 0.'
    ],
    hi: [
      'यह सोचना कि लेंज का नियम धारा का विरोध करता है: लेंज का नियम *फ्लक्स में बदलाव (मूल कारण)* का विरोध करता है, धारा का नहीं।',
      'मुफ्त ऊर्जा का भ्रम: यह भूल जाना कि लेंज बल के विरुद्ध किया गया यांत्रिक कार्य ही ऊर्जा का वास्तविक स्रोत है।',
      'दूर ले जाते समय ध्रुवता में गलती: जब उत्तरी ध्रुव दूर जाता है, तो सामने दक्षिणी ध्रुव (आकर्षण) बनता है, उत्तरी नहीं।',
      'स्थिर चुंबक पर बल मानना: लेंज बल केवल गति के दौरान (v ≠ 0) ही उत्पन्न होता है।'
    ],
    bn: [
      'ভাবা যে লেনজের সূত্র কারেন্টকে বাধা দেয়: লেনজের সূত্র কারেন্ট নয়, বরং *ফ্লাক্স পরিবর্তনের মূল কারণকে* বাধা দেয়।',
      'বিনা পরিশ্রমে শক্তি প্রাপ্তির ভুল ধারণা: বাধার বিরুদ্ধে যে যান্ত্রিক শক্তি ব্যয় হয় সেটাই বিদ্যুৎ শক্তির প্রকৃত উৎস।',
      'দূরে নেওয়ার সময় মেরু চিহ্নিতকরণে ভুল: উত্তর মেরু দূরে নিলে আকর্ষণ করতে দক্ষিণ মেরু সৃষ্টি হয়, উত্তর নয়।',
      'স্থির চুম্বকে লেনজ বলের প্রত্যাশা: আপেক্ষিক বেগ v ≠ ০ হলেই কেবল লেনজ বল ক্রিয়াশীল হয়।'
    ]
  },
  mcqs: [
    {
      id: "mcq-ch10-l2-1",
      question: {
        en: "When the North pole of a bar magnet is moved rapidly toward the front face of a circular coil, the induced magnetic pole at that face is:",
        hi: "जब एक छड़ चुंबक के उत्तरी ध्रुव को तेजी से वृत्ताकार कुंडली के सामने लाया जाता है, तो उस मुख पर कौन सा प्रेरित चुंबकीय ध्रुव बनता है?",
        bn: "একটি দণ্ড চুম্বকের উত্তর মেরুকে দ্রুত তারকুণ্ডলীর সামনে আনলে কয়েলের সেই তলে কোন চৌম্বক মেরু আবিষ্ট হয়?"
      },
      options: [
        { id: "opt-1", text: { en: "A South pole (to attract the magnet)", hi: "एक दक्षिणी ध्रुव (चुंबक को आकर्षित करने हेतु)", bn: "একটি দক্ষিণ মেরু (চুম্বককে আকর্ষণ করতে)" } },
        { id: "opt-2", text: { en: "A North pole (to repel and oppose the entry of the magnet)", hi: "एक उत्तरी ध्रुव (चुंबक के प्रवेश का विरोध करने हेतु प्रतिकर्षण)", bn: "একটি উত্তর মেরু (চুম্বকের আগমনকে বাধা দিতে বিকর্ষণ)" } },
        { id: "opt-3", text: { en: "No magnetic pole is formed", hi: "कोई चुंबकीय ध्रुव नहीं बनता", bn: "কোনো চৌম্বক মেরু তৈরি হয় না" } },
        { id: "opt-4", text: { en: "Alternating North and South at 50 Hz", hi: "50 Hz पर बारी-बारी से उत्तर और दक्षिण", bn: "৫০ হার্টজে পর্যায়ক্রমে উত্তর ও দক্ষিণ" } }
      ],
      correctOptionId: "opt-2",
      explanation: {
        en: "According to Lenz’s Law, the induced current creates a North pole to oppose the approaching North pole via magnetic repulsion.",
        hi: "लेंज के नियमानुसार, प्रेरित धारा आने वाले उत्तरी ध्रुव का विरोध करने के लिए प्रतिकारक उत्तरी ध्रुव बनाती है।",
        bn: "লেনজের সূত্রানুযায়ী, আগমনকারী উত্তর মেরুর গতির বিরোধিতা করতে বিকর্ষক উত্তর মেরু সৃষ্টি হয়।"
      }
    },
    {
      id: "mcq-ch10-l2-2",
      question: {
        en: "Lenz’s law is a direct consequence of which universal law of physics?",
        hi: "लेंज का नियम भौतिकी के किस सार्वभौमिक नियम का सीधा परिणाम है?",
        bn: "লেনজের সূত্রটি পদার্থবিজ্ঞানের কোন সার্বজনীন সূত্রের সরাসরি ফলাফল?"
      },
      options: [
        { id: "opt-1", text: { en: "Law of Conservation of Linear Momentum", hi: "रेखीय संवेग संरक्षण का नियम", bn: "রৈখিক ভরবেগ সংরক্ষণ সূত্র" } },
        { id: "opt-2", text: { en: "Law of Conservation of Energy", hi: "ऊर्जा संरक्षण का नियम", bn: "শক্তি সংরক্ষণ সূত্র" } },
        { id: "opt-3", text: { en: "Coulomb’s Electrostatic Law", hi: "कूलम्ब का स्थिरविद्युत नियम", bn: "কুলম্বের স্থিরবৈদ্যুতিক সূত্র" } },
        { id: "opt-4", text: { en: "Newton’s Law of Universal Gravitation", hi: "न्यूटन का सार्वभौमिक गुरुत्वाकर्षण नियम", bn: "নিউটনের মহাকর্ষ সূত্র" } }
      ],
      correctOptionId: "opt-2",
      explanation: {
        en: "Lenz’s law ensures that electrical energy is only generated through equivalent mechanical work, strictly upholding the Conservation of Energy.",
        hi: "लेंज का नियम यह सुनिश्चित करता है कि विद्युत ऊर्जा केवल समतुल्य यांत्रिक कार्य द्वारा ही उत्पन्न हो, जो ऊर्जा संरक्षण का नियम है।",
        bn: "লেনজের সূত্র নিশ্চিত করে যে সমপরিমাণ যান্ত্রিক কাজ ছাড়া বিদ্যুৎ উৎপন্ন হতে পারে না, যা শক্তি সংরক্ষণ নীতির মূল ভিত্তি।"
      }
    },
    {
      id: "mcq-ch10-l2-3",
      question: {
        en: "What happens to the mechanical effort required to drive an electrical power generator when the connected consumer electrical load increases?",
        hi: "जब किसी विद्युत जनरेटर से जुड़े उपभोक्ता लोड की मांग बढ़ जाती है, तो जनरेटर को घुमाने के लिए आवश्यक यांत्रिक प्रयास पर क्या प्रभाव पड़ता है?",
        bn: "গ্রিডে বৈদ্যুতিক লোড বৃদ্ধি পেলে বিদ্যুৎ জেনারেটর ঘোরানোর জন্য প্রয়োজনীয় যান্ত্রিক শক্তির কী পরিবর্তন ঘটে?"
      },
      options: [
        { id: "opt-1", text: { en: "It decreases because higher current lubricates the rotor", hi: "यह घट जाता है क्योंकि अधिक धारा रोटर को चिकना करती है", bn: "এটি হ্রাস পায় কারণ বেশি কারেন্ট রোটরকে মসৃণ করে" } },
        { id: "opt-2", text: { en: "It remains completely unchanged", hi: "यह पूरी तरह अपरिवर्तित रहता है", bn: "এটি সম্পূর্ণ অপরিবর্তিত থাকে" } },
        { id: "opt-3", text: { en: "It increases due to larger opposing electromagnetic back-torque", hi: "अधिक विरोधी विद्युत चुंबकीय बैक-टॉर्क के कारण यह बढ़ जाता है", bn: "বৃহত্তর বিপরীত তড়িৎচৌম্বকীয় ব্যাক-টর্কের কারণে এটি বৃদ্ধি পায়" } },
        { id: "opt-4", text: { en: "It drops to zero instantly", hi: "यह तुरंत शून्य हो जाता है", bn: "এটি অবিলম্বে শূন্যে নেমে আসে" } }
      ],
      correctOptionId: "opt-3",
      explanation: {
        en: "Larger load currents induce stronger opposing armature magnetic fields, increasing mechanical back-torque (T_back ∝ I_a). The turbine must supply more mechanical input power.",
        hi: "अधिक लोड धारा अधिक शक्तिशाली विरोधी बैक-टॉर्क उत्पन्न करती है, जिससे टरबाइन को अधिक यांत्रिक शक्ति देनी पड़ती है।",
        bn: "বেশি লোড কারেন্টের কারণে আর্মেচারে শক্তিশালী বিপরীত ব্যাক-টর্ক তৈরি হয়, ফলে টারবাইনকে বেশি যান্ত্রিক শক্তি সরবরাহ করতে হয়।"
      }
    },
    {
      id: "mcq-ch10-l02-04",
      question: {
        en: "A strong neodymium magnet is dropped vertically through an open vertical copper pipe. The magnet accelerates briefly and then falls:",
        hi: "एक शक्तिशाली नियोडिमियम चुंबक को तांबे के लंबवत खुले पाइप में गिराया जाता है। चुंबक थोड़ा त्वरित होकर फिर गिरता है:",
        bn: "একটি শক্তিশালী নিওডিমিয়াম চুম্বককে উল্লম্ব তামার নলের মধ্য দিয়ে ফেলা হলে, চুম্বকটি সামান্য ত্বরান্বিত হওয়ার পর:"
      },
      options: [
        { id: "opt-1", text: { en: "With standard gravitational acceleration g = 9.8 m/s²", hi: "सामान्य गुरुत्वीय त्वरण g = 9.8 m/s² के साथ", bn: "স্বাভাবিক অভিকর্ষজ ত্বরণ g = ৯.৮ m/s² বেগে" } },
        { id: "opt-2", text: { en: "At a steady terminal velocity much slower than free fall due to opposing eddy current forces", hi: "विरोधी भंवर धारा बलों के कारण मुक्त पतन से बहुत धीमी स्थिर टर्मिनल गति से", bn: "বাধা সৃষ্টিকারী এডি কারেন্টের কারণে মুক্ত পতনের চেয়ে অনেক কম স্থির প্রান্তিক বেগে" } },
        { id: "opt-3", text: { en: "With ever-increasing acceleration exceeding 2g", hi: "2g से अधिक लगातार बढ़ते त्वरण के साथ", bn: "২g এর চেয়েও ক্রমাগত দ্রুততর ত্বরণে" } },
        { id: "opt-4", text: { en: "It bounces backward out of the top entrance of the pipe", hi: "यह पाइप के ऊपरी सिरे से वापस उछल जाता है", bn: "এটি নলের ওপরের মুখ দিয়ে পেছনে ফিরে আসে" } }
      ],
      correctOptionId: "opt-2",
      explanation: {
        en: "As the magnet falls, changing magnetic flux induces eddy currents in the copper wall. By Lenz’s law, these currents create an upward opposing magnetic force that balances gravity, establishing a slow constant terminal velocity.",
        hi: "चुंबक के गिरने से तांबे में भंवर धाराएं उत्पन्न होती हैं। लेंज के नियम से ये धाराएं ऊपर की ओर विरोधी चुंबकीय बल लगाती हैं, जिससे चुंबक धीमी टर्मिनल गति प्राप्त कर लेता है।",
        bn: "চুম্বক পড়ার সময় তামার দেয়ালে এডি কারেন্ট আবিষ্ট হয়। লেনজের সূত্রানুযায়ী এই কারেন্ট ওপরের দিকে বাধাদায়ী বল প্রয়োগ করে মহাকর্ষ বলকে প্রশমিত করে এবং ধীর প্রান্তিক বেগ দেয়।"
      }
    },
    {
      id: "mcq-ch10-l02-05",
      question: {
        en: "If the induced EMF acted in a direction to reinforce rather than oppose the change in magnetic flux, what fundamental law of physics would be violated?",
        hi: "यदि प्रेरित EMF चुंबकीय फ्लक्स के परिवर्तन का विरोध करने के बजाय उसे और बढ़ाने की दिशा में कार्य करता, तो भौतिकी के किस नियम का उल्लंघन होता?",
        bn: "যদি আবিষ্ট EMF চৌম্বক ফ্লাক্স পরিবর্তনের বিরোধিতা না করে তা বৃদ্ধি করার দিকে কাজ করত, তবে পদার্থবিজ্ঞানের কোন মৌলিক সূত্র লঙ্ঘিত হতো?"
      },
      options: [
        { id: "opt-1", text: { en: "The Law of Conservation of Energy", hi: "ऊर्जा संरक्षण का नियम", bn: "শক্তি সংরক্ষণ সূত্র" } },
        { id: "opt-2", text: { en: "Newton’s First Law of Inertia", hi: "न्यूटन का जड़त्व का प्रथम नियम", bn: "নিউটনের প্রথম গতিসূত্র" } },
        { id: "opt-3", text: { en: "Coulomb’s Law of Electrostatics", hi: "कूलॉम का स्थिरवैद्युत नियम", bn: "কুলম্বের স্থিরতাড়িতিক সূত্র" } },
        { id: "opt-4", text: { en: "Snell’s Law of Refraction", hi: "स्नेल का अपवर्तन नियम", bn: "স্নেলের প্রতিসরণ সূত্র" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "If induced current aided flux change, current and magnetic field would grow indefinitely without external work, creating infinite energy from nothing and violating the Law of Conservation of Energy.",
        hi: "यदि धारा फ्लक्स वृद्धि में सहायता करती, तो बिना किसी बाहरी कार्य के ऊर्जा अनंत रूप से बढ़ती जाती, जो ऊर्जा संरक्षण के नियम का सीधा उल्लंघन होता।",
        bn: "কারেন্ট যদি ফ্লাক্স বৃদ্ধিতে সহায়তা করত, তবে কোনো বহিঃস্থ কাজ ছাড়াই শক্তি আপনা-আপনি অসীম পর্যন্ত বৃদ্ধি পেত, যা শক্তি সংরক্ষণ সূত্রের ঘোর বিরোধী।"
      }
    },
    {
      id: "mcq-ch10-l02-06",
      question: {
        en: "When the South pole of a bar magnet is moved rapidly away from the front face of a stationary coil, the front face of the coil develops:",
        hi: "जब किसी छड़ चुंबक के दक्षिणी ध्रुव को स्थिर कुंडली के सामने से तेजी से दूर ले जाया जाता है, तो कुंडली के सामने का सिरा विकसित करता है:",
        bn: "যখন কোনো দণ্ডচুম্বকের দক্ষিণ মেরুকে একটি স্থির কয়েলের সম্মুখভাগ থেকে দ্রুত দূরে সরিয়ে নেওয়া হয়, তখন কয়েলের সম্মুখভাগে উৎপন্ন হয়:"
      },
      options: [
        { id: "opt-1", text: { en: "A North magnetic pole that attracts the receding South pole to oppose withdrawal", hi: "एक उत्तरी चुंबकीय ध्रुव जो दूर जाते दक्षिणी ध्रुव को आकर्षित कर दूर जाने का विरोध करता है", bn: "একটি উত্তর মেরু যা অপসৃয়মাণ দক্ষিণ মেরুকে আকর্ষণ করে দূরে সরার বিরোধিতা করে" } },
        { id: "opt-2", text: { en: "A South magnetic pole that repels the magnet further away", hi: "एक दक्षिणी चुंबकीय ध्रुव जो चुंबक को और दूर धकेलता है", bn: "একটি দক্ষিণ মেরু যা চুম্বককে আরও দূরে ঠেলে দেয়" } },
        { id: "opt-3", text: { en: "Zero magnetic polarity because the magnet is moving away", hi: "शून्य चुंबकीय ध्रुवता क्योंकि चुंबक दूर जा रहा है", bn: "কোনো চৌম্বক মেরু তৈরি হয় না কারণ চুম্বক দূরে যাচ্ছে" } },
        { id: "opt-4", text: { en: "An electrostatic positive charge only", hi: "केवल स्थिरवैद्युत धनात्मक आवेश", bn: "কেবল স্থিরতাড়িতিক ধনাত্মক আধান" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "By Lenz’s law, the induced current opposes the withdrawal of the magnet. To oppose the South pole moving away, the coil face induces a North pole to exert an attractive force.",
        hi: "लेंज के नियम से प्रेरित धारा चुंबक के दूर जाने का विरोध करती है। अतः दक्षिणी ध्रुव को दूर जाने से रोकने के लिए कुंडली अपने सामने उत्तरी ध्रुव बनाती है ताकि उसे आकर्षित कर सके।",
        bn: "লেনজের সূত্রানুযায়ী আবিষ্ট কারেন্ট চুম্বকের দূরে সরে যাওয়ার বিরোধিতা করে। দক্ষিণ মেরুর অপসরণ রোধ করতে কয়েলের মুখে উত্তর মেরুর সৃষ্টি হয় যাতে তা আকর্ষণ বল সৃষ্টি করে।"
      }
    },
    {
      id: "mcq-ch10-l02-07",
      question: {
        en: "In Elihu Thomson’s famous jumping ring experiment, why does a light aluminum ring placed over an AC-energized iron-core solenoid shoot violently upward?",
        hi: "एलिहू थॉमसन के प्रसिद्ध जंपिंग रिंग प्रयोग में, एसी धारा से सक्रिय लोहे के कोर वाले सोलनॉइड पर रखी एल्यूमीनियम की अंगूठी तेजी से ऊपर क्यों उछल जाती है?",
        bn: "এলিহু থমসনের বিখ্যাত জাম্পিং রিং পরীক্ষায়, এসি বিদ্যুতে সচল লোহার কোরযুক্ত সলেনয়েডের ওপর রাখা অ্যালুমিনিয়াম রিং তীব্র বেগে ওপরে লাফিয়ে ওঠে কেন?"
      },
      options: [
        { id: "opt-1", text: { en: "Induced eddy currents in the ring produce a magnetic field that repels the primary alternating flux", hi: "अंगूठी में प्रेरित भंवर धाराएं ऐसा चुंबकीय क्षेत्र बनाती हैं जो प्राथमिक फ्लक्स का विरोध और प्रतिकर्षण करता है", bn: "রিংয়ে আবিষ্ট এডি কারেন্ট এমন একটি চৌম্বক ক্ষেত্র তৈরি করে যা প্রাথমিক পরিবর্তী ফ্লাক্সকে বিকর্ষণ করে" } },
        { id: "opt-2", text: { en: "The aluminum ring melts instantly and evaporates", hi: "एल्यूमीनियम की अंगूठी तुरंत पिघलकर वाष्पित हो जाती है", bn: "অ্যালুমিনিয়াম রিংটি মুহূর্তে গলে বাষ্পীভূত হয়" } },
        { id: "opt-3", text: { en: "Thermal air convection pushes the ring upward", hi: "गर्म हवा का संवहन अंगूठी को ऊपर धकेलता है", bn: "উত্তপ্ত বায়ুর পরিচলন রিংটিকে ওপরে ঠেলে দেয়" } },
        { id: "opt-4", text: { en: "Static electricity charges the ring negatively against the ground", hi: "स्थिर बिजली अंगूठी को जमीन के सापेक्ष ऋणावेशित कर देती है", bn: "স্থির বিদ্যুৎ রিংটিকে মাটির সাপেক্ষে ঋণাত্মক আধান দেয়" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "The rising AC flux induces large circumferential eddy currents in the ring. By Lenz’s law, the magnetic polarity of the ring opposes the solenoid field, generating a strong repulsive Lorentz force that flings the ring upward.",
        hi: "बढ़ता हुआ एसी फ्लक्स अंगूठी में तेज भंवर धाराएं बनाता है। लेंज के नियम से अंगूठी का चुंबकीय क्षेत्र सोलनॉइड के क्षेत्र के विपरीत होता है, जिससे लगा प्रतिकर्षण बल अंगूठी को ऊपर उछाल देता है।",
        bn: "ক্রমবর্ধমান এসি ফ্লাক্স রিংয়ে প্রবল এডি কারেন্ট আবিষ্ট করে। লেনজের সূত্রানুযায়ী রিংটির চৌম্বক দিক সলেনয়েডের বিপরীত হওয়ায় শক্তিশালী বিকর্ষণ বল রিংটিকে ওপরে ছুড়ে দেয়।"
      }
    },
    {
      id: "mcq-ch10-l02-08",
      question: {
        en: "A conducting loop of resistance R and width l is pulled with constant velocity v out of a uniform perpendicular magnetic field B. The external mechanical power supplied equals:",
        hi: "R प्रतिरोध और l चौड़ाई वाले एक चालक लूप को समान चुंबकीय क्षेत्र B से बाहर नियत वेग v से खींचा जाता है। प्रदान की गई बाहरी यांत्रिक शक्ति बराबर होती है:",
        bn: "R রোধ এবং l প্রস্থের একটি পরিবাহী লুপকে সমান্তরাল সুষম চৌম্বক ক্ষেত্র B থেকে স্থির বেগ v তে বাইরে টানা হচ্ছে। প্রযুক্ত বহিঃস্থ যান্ত্রিক ক্ষমতা কার সমান?"
      },
      options: [
        { id: "opt-1", text: { en: "The electrical Joule heating rate I²R = (B² l² v²) / R in the loop", hi: "लूप में विद्युत जूल तापीय दर I²R = (B² l² v²) / R के", bn: "লুপের বৈদ্যুতিক জুল তাপীয় অপচয় হার I²R = (B² l² v²) / R এর সমান" } },
        { id: "opt-2", text: { en: "Zero, because magnetic forces do no work", hi: "शून्य, क्योंकि चुंबकीय बल कोई कार्य नहीं करते", bn: "শূন্য, কারণ চৌম্বক বল কোনো কাজ করে না" } },
        { id: "opt-3", text: { en: "Half the electrical dissipation rate", hi: "विद्युत अपव्यय दर की आधी", bn: "বৈদ্যুতিক অপচয়ের অর্ধেক" } },
        { id: "opt-4", text: { en: "The square of the gravitational potential energy", hi: "गुरुत्वीय स्थितिज ऊर्जा के वर्ग के", bn: "অভিকর্ষজ বিভব শক্তির বর্গের সমান" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Conservation of energy dictates that 100% of the mechanical work performed against the retarding Lorentz force (F_mag = B²l²v/R, P_mech = F·v = B²l²v²/R) converts directly into electrical Joule heating (I²R).",
        hi: "ऊर्जा संरक्षण के अनुसार विरोधी लोरेंत्ज़ बल के विरुद्ध किया गया यांत्रिक कार्य (P = F·v = B²l²v²/R) सीधे लूप में विद्युत जूल ऊष्मा (I²R) में परिवर्तित होता है।",
        bn: "শক্তি সংরক্ষণ নীতি অনুসারে বাধাদায়ী লরেন্টজ বলের বিরুদ্ধে কৃত যান্ত্রিক কাজ (P = F·v = B²l²v²/R) শতভাগ সরাসরি কয়েলের বৈদ্যুতিক জুল তাপে (I²R) রূপান্তরিত হয়।"
      }
    }
  ],
  mcqQuestions: [
    {
      id: "mcq-ch10-l2-1",
      question: {
        en: "When the North pole of a bar magnet is moved rapidly toward the front face of a circular coil, the induced magnetic pole at that face is:",
        hi: "जब एक छड़ चुंबक के उत्तरी ध्रुव को तेजी से वृत्ताकार कुंडली के सामने लाया जाता है, तो उस मुख पर कौन सा प्रेरित चुंबकीय ध्रुव बनता है?",
        bn: "একটি দণ্ড চুম্বকের উত্তর মেরুকে দ্রুত তারকুণ্ডলীর সামনে আনলে কয়েলের সেই তলে কোন চৌম্বক মেরু আবিষ্ট হয়?"
      },
      options: [
        { id: "opt-1", text: { en: "A South pole (to attract the magnet)", hi: "एक दक्षिणी ध्रुव (चुंबक को आकर्षित करने हेतु)", bn: "একটি দক্ষিণ মেরু (চুম্বককে আকর্ষণ করতে)" } },
        { id: "opt-2", text: { en: "A North pole (to repel and oppose the entry of the magnet)", hi: "एक उत्तरी ध्रुव (चुंबक के प्रवेश का विरोध करने हेतु प्रतिकर्षण)", bn: "একটি উত্তর মেরু (চুম্বকের আগমনকে বাধা দিতে বিকর্ষণ)" } },
        { id: "opt-3", text: { en: "No magnetic pole is formed", hi: "कोई चुंबकीय ध्रुव नहीं बनता", bn: "কোনো চৌম্বক মেরু তৈরি হয় না" } },
        { id: "opt-4", text: { en: "Alternating North and South at 50 Hz", hi: "50 Hz पर बारी-बारी से उत्तर और दक्षिण", bn: "৫০ হার্টজে পর্যায়ক্রমে উত্তর ও দক্ষিণ" } }
      ],
      correctOptionId: "opt-2",
      explanation: {
        en: "According to Lenz’s Law, the induced current creates a North pole to oppose the approaching North pole via magnetic repulsion.",
        hi: "लेंज के नियमानुसार, प्रेरित धारा आने वाले उत्तरी ध्रुव का विरोध करने के लिए प्रतिकारक उत्तरी ध्रुव बनाती है।",
        bn: "লেনজের সূত্রানুযায়ী, আগমনকারী উত্তর মেরুর গতির বিরোধিতা করতে বিকর্ষক উত্তর মেরু সৃষ্টি হয়।"
      }
    },
    {
      id: "mcq-ch10-l2-2",
      question: {
        en: "Lenz’s law is a direct consequence of which universal law of physics?",
        hi: "लेंज का नियम भौतिकी के किस सार्वभौमिक नियम का सीधा परिणाम है?",
        bn: "লেনজের সূত্রটি পদার্থবিজ্ঞানের কোন সার্বজনীন সূত্রের সরাসরি ফলাফল?"
      },
      options: [
        { id: "opt-1", text: { en: "Law of Conservation of Linear Momentum", hi: "रेखीय संवेग संरक्षण का नियम", bn: "রৈখিক ভরবেগ সংরক্ষণ সূত্র" } },
        { id: "opt-2", text: { en: "Law of Conservation of Energy", hi: "ऊर्जा संरक्षण का नियम", bn: "শক্তি সংরক্ষণ সূত্র" } },
        { id: "opt-3", text: { en: "Coulomb’s Electrostatic Law", hi: "कूलम्ब का स्थिरविद्युत नियम", bn: "কুলম্বের স্থিরবৈদ্যুতিক সূত্র" } },
        { id: "opt-4", text: { en: "Newton’s Law of Universal Gravitation", hi: "न्यूटन का सार्वभौमिक गुरुत्वाकर्षण नियम", bn: "নিউটনের মহাকর্ষ সূত্র" } }
      ],
      correctOptionId: "opt-2",
      explanation: {
        en: "Lenz’s law ensures that electrical energy is only generated through equivalent mechanical work, strictly upholding the Conservation of Energy.",
        hi: "लेंज का नियम यह सुनिश्चित करता है कि विद्युत ऊर्जा केवल समतुल्य यांत्रिक कार्य द्वारा ही उत्पन्न हो, जो ऊर्जा संरक्षण का नियम है।",
        bn: "লেনজের সূত্র নিশ্চিত করে যে সমপরিমাণ যান্ত্রিক কাজ ছাড়া বিদ্যুৎ উৎপন্ন হতে পারে না, যা শক্তি সংরক্ষণ নীতির মূল ভিত্তি।"
      }
    },
    {
      id: "mcq-ch10-l2-3",
      question: {
        en: "What happens to the mechanical effort required to drive an electrical power generator when the connected consumer electrical load increases?",
        hi: "जब किसी विद्युत जनरेटर से जुड़े उपभोक्ता लोड की मांग बढ़ जाती है, तो जनरेटर को घुमाने के लिए आवश्यक यांत्रिक प्रयास पर क्या प्रभाव पड़ता है?",
        bn: "গ্রিডে বৈদ্যুতিক লোড বৃদ্ধি পেলে বিদ্যুৎ জেনারেটর ঘোরানোর জন্য প্রয়োজনীয় যান্ত্রিক শক্তির কী পরিবর্তন ঘটে?"
      },
      options: [
        { id: "opt-1", text: { en: "It decreases because higher current lubricates the rotor", hi: "यह घट जाता है क्योंकि अधिक धारा रोटर को चिकना करती है", bn: "এটি হ্রাস পায় কারণ বেশি কারেন্ট রোটরকে মসৃণ করে" } },
        { id: "opt-2", text: { en: "It remains completely unchanged", hi: "यह पूरी तरह अपरिवर्तित रहता है", bn: "এটি সম্পূর্ণ অপরিবর্তিত থাকে" } },
        { id: "opt-3", text: { en: "It increases due to larger opposing electromagnetic back-torque", hi: "अधिक विरोधी विद्युत चुंबकीय बैक-टॉर्क के कारण यह बढ़ जाता है", bn: "বৃহত্তর বিপরীত তড়িৎচৌম্বকীয় ব্যাক-টর্কের কারণে এটি বৃদ্ধি পায়" } },
        { id: "opt-4", text: { en: "It drops to zero instantly", hi: "यह तुरंत शून्य हो जाता है", bn: "এটি অবিলম্বে শূন্যে নেমে আসে" } }
      ],
      correctOptionId: "opt-3",
      explanation: {
        en: "Larger load currents induce stronger opposing armature magnetic fields, increasing mechanical back-torque (T_back ∝ I_a). The turbine must supply more mechanical input power.",
        hi: "अधिक लोड धारा अधिक शक्तिशाली विरोधी बैक-टॉर्क उत्पन्न करती है, जिससे टरबाइन को अधिक यांत्रिक शक्ति देनी पड़ती है।",
        bn: "বেশি লোড কারেন্টের কারণে আর্মেচারে শক্তিশালী বিপরীত ব্যাক-টর্ক তৈরি হয়, ফলে টারবাইনকে বেশি যান্ত্রিক শক্তি সরবরাহ করতে হয়।"
      }
    },
    {
      id: "mcq-ch10-l02-04",
      question: {
        en: "A strong neodymium magnet is dropped vertically through an open vertical copper pipe. The magnet accelerates briefly and then falls:",
        hi: "एक शक्तिशाली नियोडिमियम चुंबक को तांबे के लंबवत खुले पाइप में गिराया जाता है। चुंबक थोड़ा त्वरित होकर फिर गिरता है:",
        bn: "একটি শক্তিশালী নিওডিমিয়াম চুম্বককে উল্লম্ব তামার নলের মধ্য দিয়ে ফেলা হলে, চুম্বকটি সামান্য ত্বরান্বিত হওয়ার পর:"
      },
      options: [
        { id: "opt-1", text: { en: "With standard gravitational acceleration g = 9.8 m/s²", hi: "सामान्य गुरुत्वीय त्वरण g = 9.8 m/s² के साथ", bn: "স্বাভাবিক অভিকর্ষজ ত্বরণ g = ৯.৮ m/s² বেগে" } },
        { id: "opt-2", text: { en: "At a steady terminal velocity much slower than free fall due to opposing eddy current forces", hi: "विरोधी भंवर धारा बलों के कारण मुक्त पतन से बहुत धीमी स्थिर टर्मिनल गति से", bn: "বাধা সৃষ্টিকারী এডি কারেন্টের কারণে মুক্ত পতনের চেয়ে অনেক কম স্থির প্রান্তিক বেগে" } },
        { id: "opt-3", text: { en: "With ever-increasing acceleration exceeding 2g", hi: "2g से अधिक लगातार बढ़ते त्वरण के साथ", bn: "২g এর চেয়েও ক্রমাগত দ্রুততর ত্বরণে" } },
        { id: "opt-4", text: { en: "It bounces backward out of the top entrance of the pipe", hi: "यह पाइप के ऊपरी सिरे से वापस उछल जाता है", bn: "এটি নলের ওপরের মুখ দিয়ে পেছনে ফিরে আসে" } }
      ],
      correctOptionId: "opt-2",
      explanation: {
        en: "As the magnet falls, changing magnetic flux induces eddy currents in the copper wall. By Lenz’s law, these currents create an upward opposing magnetic force that balances gravity, establishing a slow constant terminal velocity.",
        hi: "चुंबक के गिरने से तांबे में भंवर धाराएं उत्पन्न होती हैं। लेंज के नियम से ये धाराएं ऊपर की ओर विरोधी चुंबकीय बल लगाती हैं, जिससे चुंबक धीमी टर्मिनल गति प्राप्त कर लेता है।",
        bn: "চুম্বক পড়ার সময় তামার দেয়ালে এডি কারেন্ট আবিষ্ট হয়। লেনজের সূত্রানুযায়ী এই কারেন্ট ওপরের দিকে বাধাদায়ী বল প্রয়োগ করে মহাকর্ষ বলকে প্রশমিত করে এবং ধীর প্রান্তিক বেগ দেয়।"
      }
    },
    {
      id: "mcq-ch10-l02-05",
      question: {
        en: "If the induced EMF acted in a direction to reinforce rather than oppose the change in magnetic flux, what fundamental law of physics would be violated?",
        hi: "यदि प्रेरित EMF चुंबकीय फ्लक्स के परिवर्तन का विरोध करने के बजाय उसे और बढ़ाने की दिशा में कार्य करता, तो भौतिकी के किस नियम का उल्लंघन होता?",
        bn: "যদি আবিষ্ট EMF চৌম্বক ফ্লাক্স পরিবর্তনের বিরোধিতা না করে তা বৃদ্ধি করার দিকে কাজ করত, তবে পদার্থবিজ্ঞানের কোন মৌলিক সূত্র লঙ্ঘিত হতো?"
      },
      options: [
        { id: "opt-1", text: { en: "The Law of Conservation of Energy", hi: "ऊर्जा संरक्षण का नियम", bn: "শক্তি সংরক্ষণ সূত্র" } },
        { id: "opt-2", text: { en: "Newton’s First Law of Inertia", hi: "न्यूटन का जड़त्व का प्रथम नियम", bn: "নিউটনের প্রথম গতিসূত্র" } },
        { id: "opt-3", text: { en: "Coulomb’s Law of Electrostatics", hi: "कूलॉम का स्थिरवैद्युत नियम", bn: "কুলম্বের স্থিরতাড়িতিক সূত্র" } },
        { id: "opt-4", text: { en: "Snell’s Law of Refraction", hi: "स्नेल का अपवर्तन नियम", bn: "স্নেলের প্রতিসরণ সূত্র" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "If induced current aided flux change, current and magnetic field would grow indefinitely without external work, creating infinite energy from nothing and violating the Law of Conservation of Energy.",
        hi: "यदि धारा फ्लक्स वृद्धि में सहायता करती, तो बिना किसी बाहरी कार्य के ऊर्जा अनंत रूप से बढ़ती जाती, जो ऊर्जा संरक्षण के नियम का सीधा उल्लंघन होता।",
        bn: "কারেন্ট যদি ফ্লাক্স বৃদ্ধিতে সহায়তা করত, তবে কোনো বহিঃস্থ কাজ ছাড়াই শক্তি আপনা-আপনি অসীম পর্যন্ত বৃদ্ধি পেত, যা শক্তি সংরক্ষণ সূত্রের ঘোর বিরোধী।"
      }
    },
    {
      id: "mcq-ch10-l02-06",
      question: {
        en: "When the South pole of a bar magnet is moved rapidly away from the front face of a stationary coil, the front face of the coil develops:",
        hi: "जब किसी छड़ चुंबक के दक्षिणी ध्रुव को स्थिर कुंडली के सामने से तेजी से दूर ले जाया जाता है, तो कुंडली के सामने का सिरा विकसित करता है:",
        bn: "যখন কোনো দণ্ডচুম্বকের দক্ষিণ মেরুকে একটি স্থির কয়েলের সম্মুখভাগ থেকে দ্রুত দূরে সরিয়ে নেওয়া হয়, তখন কয়েলের সম্মুখভাগে উৎপন্ন হয়:"
      },
      options: [
        { id: "opt-1", text: { en: "A North magnetic pole that attracts the receding South pole to oppose withdrawal", hi: "एक उत्तरी चुंबकीय ध्रुव जो दूर जाते दक्षिणी ध्रुव को आकर्षित कर दूर जाने का विरोध करता है", bn: "একটি উত্তর মেরু যা অপসৃয়মাণ দক্ষিণ মেরুকে আকর্ষণ করে দূরে সরার বিরোধিতা করে" } },
        { id: "opt-2", text: { en: "A South magnetic pole that repels the magnet further away", hi: "एक दक्षिणी चुंबकीय ध्रुव जो चुंबक को और दूर धकेलता है", bn: "একটি দক্ষিণ মেরু যা চুম্বককে আরও দূরে ঠেলে দেয়" } },
        { id: "opt-3", text: { en: "Zero magnetic polarity because the magnet is moving away", hi: "शून्य चुंबकीय ध्रुवता क्योंकि चुंबक दूर जा रहा है", bn: "কোনো চৌম্বক মেরু তৈরি হয় না কারণ চুম্বক দূরে যাচ্ছে" } },
        { id: "opt-4", text: { en: "An electrostatic positive charge only", hi: "केवल स्थिरवैद्युत धनात्मक आवेश", bn: "কেবল স্থিরতাড়িতিক ধনাত্মক আধান" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "By Lenz’s law, the induced current opposes the withdrawal of the magnet. To oppose the South pole moving away, the coil face induces a North pole to exert an attractive force.",
        hi: "लेंज के नियम से प्रेरित धारा चुंबक के दूर जाने का विरोध करती है। अतः दक्षिणी ध्रुव को दूर जाने से रोकने के लिए कुंडली अपने सामने उत्तरी ध्रुव बनाती है ताकि उसे आकर्षित कर सके।",
        bn: "লেনজের সূত্রানুযায়ী আবিষ্ট কারেন্ট চুম্বকের দূরে সরে যাওয়ার বিরোধিতা করে। দক্ষিণ মেরুর অপসরণ রোধ করতে কয়েলের মুখে উত্তর মেরুর সৃষ্টি হয় যাতে তা আকর্ষণ বল সৃষ্টি করে।"
      }
    },
    {
      id: "mcq-ch10-l02-07",
      question: {
        en: "In Elihu Thomson’s famous jumping ring experiment, why does a light aluminum ring placed over an AC-energized iron-core solenoid shoot violently upward?",
        hi: "एलिहू थॉमसन के प्रसिद्ध जंपिंग रिंग प्रयोग में, एसी धारा से सक्रिय लोहे के कोर वाले सोलनॉइड पर रखी एल्यूमीनियम की अंगूठी तेजी से ऊपर क्यों उछल जाती है?",
        bn: "এলিহু থমসনের বিখ্যাত জাম্পিং রিং পরীক্ষায়, এসি বিদ্যুতে সচল লোহার কোরযুক্ত সলেনয়েডের ওপর রাখা অ্যালুমিনিয়াম রিং তীব্র বেগে ওপরে লাফিয়ে ওঠে কেন?"
      },
      options: [
        { id: "opt-1", text: { en: "Induced eddy currents in the ring produce a magnetic field that repels the primary alternating flux", hi: "अंगूठी में प्रेरित भंवर धाराएं ऐसा चुंबकीय क्षेत्र बनाती हैं जो प्राथमिक फ्लक्स का विरोध और प्रतिकर्षण करता है", bn: "রিংয়ে আবিষ্ট এডি কারেন্ট এমন একটি চৌম্বক ক্ষেত্র তৈরি করে যা প্রাথমিক পরিবর্তী ফ্লাক্সকে বিকর্ষণ করে" } },
        { id: "opt-2", text: { en: "The aluminum ring melts instantly and evaporates", hi: "एल्यूमीनियम की अंगूठी तुरंत पिघलकर वाष्पित हो जाती है", bn: "অ্যালুমিনিয়াম রিংটি মুহূর্তে গলে বাষ্পীভূত হয়" } },
        { id: "opt-3", text: { en: "Thermal air convection pushes the ring upward", hi: "गर्म हवा का संवहन अंगूठी को ऊपर धकेलता है", bn: "উত্তপ্ত বায়ুর পরিচলন রিংটিকে ওপরে ঠেলে দেয়" } },
        { id: "opt-4", text: { en: "Static electricity charges the ring negatively against the ground", hi: "स्थिर बिजली अंगूठी को जमीन के सापेक्ष ऋणावेशित कर देती है", bn: "স্থির বিদ্যুৎ রিংটিকে মাটির সাপেক্ষে ঋণাত্মক আধান দেয়" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "The rising AC flux induces large circumferential eddy currents in the ring. By Lenz’s law, the magnetic polarity of the ring opposes the solenoid field, generating a strong repulsive Lorentz force that flings the ring upward.",
        hi: "बढ़ता हुआ एसी फ्लक्स अंगूठी में तेज भंवर धाराएं बनाता है। लेंज के नियम से अंगूठी का चुंबकीय क्षेत्र सोलनॉइड के क्षेत्र के विपरीत होता है, जिससे लगा प्रतिकर्षण बल अंगूठी को ऊपर उछाल देता है।",
        bn: "ক্রমবর্ধমান এসি ফ্লাক্স রিংয়ে প্রবল এডি কারেন্ট আবিষ্ট করে। লেনজের সূত্রানুযায়ী রিংটির চৌম্বক দিক সলেনয়েডের বিপরীত হওয়ায় শক্তিশালী বিকর্ষণ বল রিংটিকে ওপরে ছুড়ে দেয়।"
      }
    },
    {
      id: "mcq-ch10-l02-08",
      question: {
        en: "A conducting loop of resistance R and width l is pulled with constant velocity v out of a uniform perpendicular magnetic field B. The external mechanical power supplied equals:",
        hi: "R प्रतिरोध और l चौड़ाई वाले एक चालक लूप को समान चुंबकीय क्षेत्र B से बाहर नियत वेग v से खींचा जाता है। प्रदान की गई बाहरी यांत्रिक शक्ति बराबर होती है:",
        bn: "R রোধ এবং l প্রস্থের একটি পরিবাহী লুপকে সমান্তরাল সুষম চৌম্বক ক্ষেত্র B থেকে স্থির বেগ v তে বাইরে টানা হচ্ছে। প্রযুক্ত বহিঃস্থ যান্ত্রিক ক্ষমতা কার সমান?"
      },
      options: [
        { id: "opt-1", text: { en: "The electrical Joule heating rate I²R = (B² l² v²) / R in the loop", hi: "लूप में विद्युत जूल तापीय दर I²R = (B² l² v²) / R के", bn: "লুপের বৈদ্যুতিক জুল তাপীয় অপচয় হার I²R = (B² l² v²) / R এর সমান" } },
        { id: "opt-2", text: { en: "Zero, because magnetic forces do no work", hi: "शून्य, क्योंकि चुंबकीय बल कोई कार्य नहीं करते", bn: "শূন্য, কারণ চৌম্বক বল কোনো কাজ করে না" } },
        { id: "opt-3", text: { en: "Half the electrical dissipation rate", hi: "विद्युत अपव्यय दर की आधी", bn: "বৈদ্যুতিক অপচয়ের অর্ধেক" } },
        { id: "opt-4", text: { en: "The square of the gravitational potential energy", hi: "गुरुत्वीय स्थितिज ऊर्जा के वर्ग के", bn: "অভিকর্ষজ বিভব শক্তির বর্গের সমান" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Conservation of energy dictates that 100% of the mechanical work performed against the retarding Lorentz force (F_mag = B²l²v/R, P_mech = F·v = B²l²v²/R) converts directly into electrical Joule heating (I²R).",
        hi: "ऊर्जा संरक्षण के अनुसार विरोधी लोरेंत्ज़ बल के विरुद्ध किया गया यांत्रिक कार्य (P = F·v = B²l²v²/R) सीधे लूप में विद्युत जूल ऊष्मा (I²R) में परिवर्तित होता है।",
        bn: "শক্তি সংরক্ষণ নীতি অনুসারে বাধাদায়ী লরেন্টজ বলের বিরুদ্ধে কৃত যান্ত্রিক কাজ (P = F·v = B²l²v²/R) শতভাগ সরাসরি কয়েলের বৈদ্যুতিক জুল তাপে (I²R) রূপান্তরিত হয়।"
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch10-l2-1',
      question: {
        en: 'A copper ring is dropped vertically through a horizontal magnetic field with its plane horizontal. What happens to its downward acceleration compared to gravitational acceleration g?',
        hi: 'एक तांबे के छल्ले को क्षैतिज चुंबकीय क्षेत्र में से लंबवत नीचे गिराया जाता है। गुरुत्वीय त्वरण g की तुलना में इसके नीचे गिरने के त्वरण पर क्या प्रभाव पड़ेगा?',
        bn: 'একটি তামার রিংকে আনুভূমিক চৌম্বক ক্ষেত্রের মধ্য দিয়ে উলম্বভাবে ফেলে দেওয়া হলো। অভিকর্ষজ ত্বরণ g-এর তুলনায় এর নিম্নমুখী ত্বরণ কেমন হবে?'
      },
      hint: {
        en: 'As the ring enters and leaves the field, magnetic flux changes, inducing circulating currents and upward Lenz retarding forces.',
        hi: 'छल्ले के क्षेत्र में प्रवेश एवं निकास के समय फ्लक्स बदलता है, जिससे ऊपर की ओर विरोधी लेंज बल लगता है।',
        bn: 'রিংটি ক্ষেত্রে প্রবেশ ও ত্যাগের সময় ফ্লাক্স পরিবর্তনে আবিষ্ট কারেন্ট ঊর্ধ্বমুখী বিপরীত লেনজ বল প্রয়োগ করে।'
      },
      answerKey: {
        en: 'The downward acceleration a is strictly LESS than g (a < g) while entering and leaving the field due to upward opposing Lenz magnetic forces (F_net = mg - F_Lenz). Inside a completely uniform field, a = g.',
        hi: 'प्रवेश और निकास के समय ऊपर की ओर विरोधी लेंज बल लगने के कारण त्वरण g से कम (a < g) होगा। पूरी तरह समरूप क्षेत्र के अंदर a = g रहेगा।',
        bn: 'প্রবেশ ও বের হওয়ার মুহূর্তে ঊর্ধ্বমুখী বিপরীত লেনজ বলের কারণে ত্বরণ g অপেক্ষা কম হবে (a < g)। সুষম ক্ষেত্রের অভ্যন্তরে a = g হবে।'
      }
    },
    {
      id: 'pq-ch10-l2-2',
      question: {
        en: 'Explain with energy equations why Lenz’s Law forbids the existence of a perpetual motion machine that generates electric power without mechanical input.',
        hi: 'ऊर्जा समीकरणों के साथ स्पष्ट कीजिए कि लेंज का नियम बिना यांत्रिक इनपुट के बिजली बनाने वाली शाश्वत गति मशीन (Perpetual Motion Machine) को क्यों रोकता है।',
        bn: 'শক্তি সমীকরণের সাহায্যে ব্যাখ্যা করুন কেন লেনজের সূত্র যান্ত্রিক ইনপুট ছাড়া অবিরাম বিদ্যুৎ উৎপাদনকারী যন্ত্রের অস্তিত্বকে নিষিদ্ধ করে।'
      },
      hint: {
        en: 'Show that without Lenz opposition (F_opp = 0), mechanical work input W_mech = ∫ F·dx = 0, but electrical output W_elec = ∫ i²R dt > 0, violating the First Law of Thermodynamics.',
        hi: 'दर्शाइए कि यदि विरोधी बल F = 0 हो, तो इनपुट यांत्रिक कार्य 0 होगा परंतु विद्युत ऊर्जा > 0 होगी, जो असंभव है।',
        bn: 'দেখান যে বিরোধী বল F = ০ হলে ইনপুট কাজ ০ হবে কিন্তু আউটপুট শক্তি > ০ হবে, যা তাপগতিবিদ্যার প্রথম সূত্রের পরিপন্থী।'
      },
      answerKey: {
        en: 'If F_opp were 0 or attractive, W_in = 0 while W_out = ∫ i²R dt > 0, creating energy from nothing. Lenz’s law enforces F_ext = (B²l²v)/R such that Mechanical Input Power P_mech = F·v = (B²l²v²)/R ≡ i²R (P_elec), proving 100% strict energy conservation.',
        hi: 'यदि विरोधी बल न होता, तो बिना इनपुट कार्य के विद्युत ऊर्जा बनती जो असंभव है। लेंज नियम सुनिश्चित करता है कि इनपुट यांत्रिक शक्ति P_mech = F·v ठीक आउटपुट विद्युत शक्ति P_elec = i²R के बराबर हो।',
        bn: 'লেনজের বাধা না থাকলে কোনো কাজ ছাড়াই বিদ্যুৎ তৈরি হতো যা অসম্ভব। লেনজের সূত্র অনুসারে ইনপুট যান্ত্রিক ক্ষমতা P_mech = F·v ঠিক আউটপুট বিদ্যুৎ ক্ষমতা i²R এর সমান হয়।'
      }
    }
  ]
};
