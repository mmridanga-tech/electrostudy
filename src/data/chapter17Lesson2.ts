import { Lesson } from '../types';

export const LESSON_INSTRUMENT_TRANSFORMERS: Lesson = {
  id: 'lsn-ch17-instrument-transformers-protection',
  topicId: 'tp-ch17-instrument-transformers-protection',
  chapterId: 'ch-advanced-power-system-protection',
  order: 2,
  title: {
    en: 'Instrument Transformers for Protection (CTs and VTs/CVTs)',
    hi: 'सुरक्षा के लिए उपकरण ट्रांसफार्मर (CT एवं VT/CVT)',
    bn: 'সুরক্ষার জন্য ইন্সট্রুমেন্ট ট্রান্সফরমার (সিটি ও ভিটি/সিভিটি)'
  },
  description: {
    en: 'Comprehensive engineering analysis of Current Transformers (CTs) and Voltage Transformers (VTs/CVTs): metering vs. protection cores, Class 5P/10P accuracy limit factor (ALF), Class PS knee-point voltage (Vk) determination, CT saturation under DC offset, secondary burden calculations, and open-circuit hazard mitigation.',
    hi: 'करंट ट्रांसफार्मर (CT) और वोल्टेज ट्रांसफार्मर (VT/CVT) का व्यापक विश्लेषण: मीटरिंग बनाम सुरक्षा कोर, क्लास 5P/10P एक्यूरेसी लिमिट फैक्टर (ALF), क्लास PS नी-पॉइंट वोल्टेज (Vk) गणना, डीसी ऑफसेट पर CT सैचुरेशन, सेकेंडरी बर्डन गणना और ओपन-सर्किट खतरों से बचाव।',
    bn: 'কারেন্ট ট্রান্সফরমার (সিটি) এবং ভোল্টেজ ট্রান্সফরমার (ভিটি/সিভিটি)-এর পূর্ণাঙ্গ ইঞ্জিনিয়ারিং বিশ্লেষণ: মিটারিং বনাম প্রটেকশন কোর, ক্লাস 5P/10P অ্যাকুরেসি লিমিট ফ্যাক্টর (ALF), ক্লাস PS নী-পয়েন্ট ভোল্টেজ (Vk) নির্ধারণ, ডিসি অফসেটে সিটি স্যাচুরেশন, সেকেন্ডারি বার্ডেন এবং ওপেন-সার্কিট বিপত্তি নিরসন।'
  },
  estimatedMinutes: 50,
  easyExplanation: {
    en: 'Protection relays operate on low, standardized electrical signals—typically 1 A or 5 A for current and 110 V for voltage. However, high-voltage transmission lines carry thousands of amperes at hundreds of thousands of volts. Instrument transformers step these dangerous, colossal primary currents and voltages down to safe, measurable secondary values while providing essential galvanic isolation to protect personnel and numerical microprocessors. Unlike revenue metering CTs—which are designed to saturate quickly to protect sensitive energy meters from fault surges—protection CTs MUST NOT saturate under massive short-circuit currents up to 20 to 30 times their rated rating. If a protection CT saturates, its secondary current collapses, blinding the protective relay and causing catastrophic failure to clear the fault!',
    hi: 'सुरक्षा रिले कम और मानकीकृत संकेतों पर काम करते हैं—आमतौर पर करंट के लिए 1 A या 5 A और वोल्टेज के लिए 110 V। लेकिन पारेषण लाइनों में हजारों एम्पीयर और लाखों वोल्ट बहते हैं। उपकरण ट्रांसफार्मर (CT और VT) इन विशाल मानों को सुरक्षित स्तरों पर घटाते हैं और रिले को उच्च वोल्टेज से अलग (आइसोलेट) रखते हैं। मीटरिंग CT के विपरीत (जो मीटर की सुरक्षा के लिए जल्दी सैचुरेट हो जाते हैं), सुरक्षा CT को विशाल शॉर्ट-सर्किट करंट के तहत सैचुरेट नहीं होना चाहिए! यदि कोई सुरक्षा CT सैचुरेट हो जाता है, तो उसका सेकेंडरी करंट गिर जाता है, रिले अंधा हो जाता है और फॉल्ट को साफ करने में विफल रहता है।',
    bn: 'সুরক্ষা রিলেগুলো সাধারণত ১ A বা ৫ A কারেন্ট এবং ১১০ V ভোল্টেজের নিরাপদ মাত্রায় কাজ করে। কিন্তু উচ্চ ভোল্টেজ গ্রিডে হাজার হাজার অ্যাম্পিয়ার বিদ্যুৎ প্রবাহিত হয়। ইন্সট্রুমেন্ট ট্রান্সফরমার (সিটি ও ভিটি) এই মারাত্মক মাত্রার বিদ্যুৎকে কমিয়ে রিলের উপযোগী করে তোলে এবং বৈদ্যুতিক আইসোলেশন নিশ্চিত করে। মিটারিং সিটির কাজ হলো ফল্ট হলে দ্রুত স্যাচুরেট হয়ে মিটার বাঁচানো, কিন্তু প্রোটেকশন সিটিকে ফল্টের সময় কোনোভাবেই স্যাচুরেট হওয়া চলবে না! প্রোটেকশন সিটি স্যাচুরেট হলে রিলের সিগন্যাল বিকৃত হয়ে রিলে নিষ্ক্রিয় হয়ে পড়ে।'
  },
  detailedExplanation: {
    en: 'Instrument transformers are the vital sensory organs of power system protection. Their operation and selection are governed by international standards (IEC 61869-2 / IEEE C57.13):\n\n1. Metering vs. Protection Cores:\n• Metering CTs (Class 0.2, 0.5): High accuracy near rated current (10% to 120% In). Engineered with an Instrument Security Factor (ISF ≤ 5 or 10) so the magnetic core saturates early, shielding sensitive electronic energy meters during grid faults.\n• Protection CTs (Class P and Class PS/PX): High accuracy up to 20 to 30 times rated current. Engineered with large magnetic cross-sections and high-silicon or cold-rolled grain-oriented (CRGO) steel to faithfully reproduce fault current waveforms containing severe asymmetrical DC offset components.\n\n2. IEC Standard Class P Specification (e.g., 15VA Class 5P20):\n• 15 VA: Rated burden (volt-ampere capacity at rated secondary current).\n• 5P: Composite error not exceeding 5% at the rated accuracy limit.\n• 20: Accuracy Limit Factor (ALF = 20), guaranteeing less than 5% error up to 20 times rated current when operating at rated burden.\n\nEffective ALF under reduced burden:\nALF_effective = ALF_rated * (R_internal + R_rated_burden) / (R_internal + R_actual_burden)\n\n3. Class PS / Class PX (Special Protection) and Knee-Point Voltage:\nUnit schemes like differential (87) and high-impedance restricted earth fault (64R) require dedicated Class PS cores defined by their Knee-Point Voltage (Vk). According to IEC standards, Vk is the point on the excitation curve where a 10% increase in secondary RMS voltage produces a 50% increase in magnetizing current.\n\nClass PS Formula for Stability:\nVk ≥ 2 * (If_max / N) * (Rct + 2*Rlead + Rrelay)\nwhere If_max is maximum through-fault current, N is CT turns ratio, Rct is secondary winding resistance, Rlead is one-way cable run resistance, and Rrelay is relay burden.\n\n4. Transient Saturation & DC Offset Remanence:\nShort circuits initiated at voltage zero-crossings exhibit a 100% decaying DC offset component. The flux in the CT core must support both AC and DC flux. The required core dimension multiplier is the Transient Dimensioning Factor (Ktd = 1 + X/R). Residual magnetism (remanence) left in closed iron cores from prior faults drastically accelerates saturation, leading to modern Class PR (low remanence) or Class TPZ (linearized air-gapped) CT designs.',
    hi: 'उपकरण ट्रांसफार्मर के तकनीकी पहलू:\n1. मीटरिंग बनाम सुरक्षा कोर: मीटरिंग कोर कम करंट पर अत्यधिक सटीक होते हैं और मीटर की रक्षा के लिए ISF ≤ 5 पर सैचुरेट हो जाते हैं। सुरक्षा कोर (5P20) 20 गुना करंट तक संतृप्त हुए बिना काम करते हैं।\n2. क्लास 5P20 का अर्थ: 20 गुना रेटेड करंट पर समग्र त्रुटि 5% से कम होगी जब रेटेड बर्डन (15VA) जुड़ा हो।\n3. क्लास PS और नी-पॉइंट वोल्टेज (Vk): नी-पॉइंट वोल्टेज वह बिंदु है जहाँ वोल्टेज में 10% वृद्धि से उत्तेजना धारा में 50% वृद्धि होती है। डिफरेंशियल सुरक्षा के लिए Vk ≥ 2 * (If_max / N) * (Rct + 2*Rlead + Rrelay) होना आवश्यक है।\n4. ओपन सर्किट खतरा: CT के सेकेंडरी को कभी भी खुला नहीं छोड़ना चाहिए, क्योंकि इससे अत्यधिक उच्च वोल्टेज (हजारों वोल्ट) उत्पन्न होता है जो इन्सुलेशन को नष्ट कर सकता है और जानलेवा हो सकता है।',
    bn: 'ইন্সট্রুমেন্ট ট্রান্সফরমারের মূল বিষয়সমূহ:\n১. মিটারিং বনাম প্রটেকশন কোর: মিটারিং কোরে ISF কম থাকে যাতে ফল্টে দ্রুত স্যাচুরেট হয়ে মিটার সুরক্ষিত থাকে। প্রটেকশন কোরে ২০-৩০ গুণ কারেন্টেও স্যাচুরেশন না ঘটে এমন ব্যবস্থা থাকে।\n২. ক্লাস 5P20 স্পেসিফিকেশন: রেটেড বার্ডেনে রেটেড কারেন্টের ২০ গুণ পর্যন্ত কম্পোজিট এরর ৫% এর নিচে থাকবে।\n৩. ক্লাস PS এবং নী-পয়েন্ট ভোল্টেজ (Vk): এক্সাইটেশন কার্ভে ভোল্টেজ ১০% বাড়ালে যদি ম্যাগনেটাইজিং কারেন্ট ৫০% বৃদ্ধি পায় তবে তাকে নী-পয়েন্ট বলে। ডিফারেনশিয়াল সুরক্ষায় রিলের স্থিতিশীলতার জন্য Vk এর মান পর্যাপ্ত হতে হয়।\n৪. ওপেন সার্কিট সতর্কতা: সিটির সেকেন্ডারি কখনোই খোলা রাখা যাবে না; এতে মারাত্মক উচ্চ ভোল্টেজ তৈরি হয়ে প্রাণহানি ও আগুন ঘটতে পারে।'
  },
  formulas: [
    {
      id: 'f-ch17-ct-knee-point',
      symbol: 'V_k',
      expression: 'V_k \\ge 2 \\cdot \\left(\\frac{I_{f,max}}{N}\\right) \\cdot (R_{ct} + 2\\cdot R_{lead} + R_{relay})',
      title: {
        en: 'Class PS Knee-Point Voltage Formula',
        hi: 'क्लास PS नी-पॉइंट वोल्टेज सूत्र',
        bn: 'ক্লাস PS নী-পয়েন্ট ভোল্টেজ সূত্র'
      },
      description: {
        en: 'Calculates the minimum required knee-point voltage to prevent CT saturation during an external through-fault with 100% DC offset in differential schemes.',
        hi: 'डिफरेंशियल योजनाओं में बाहरी फॉल्ट के दौरान 100% डीसी ऑफसेट के साथ CT सैचुरेशन को रोकने के लिए आवश्यक न्यूनतम नी-पॉइंट वोल्टेज की गणना करता है।',
        bn: 'ডিফারেনশিয়াল স্কিমে বাহ্যিক থ্রু-ফল্টের সময় ১০০% ডিসি অফসেটেও সিটি স্যাচুরেশন ঠেকাতে প্রয়োজনীয় ন্যূনতম নী-পয়েন্ট ভোল্টেজ নির্ণয় করে।'
      },
      variables: [
        { symbol: 'V_k', name: { en: 'Knee-point voltage (V RMS)', hi: 'नी-पॉइंट वोल्टेज (V RMS)', bn: 'নী-পয়েন্ট ভোল্টেজ (V RMS)' } },
        { symbol: 'I_{f,max}', name: { en: 'Maximum prospective symmetrical through-fault current (A)', hi: 'अधिकतम संभावित थ्रू-फॉल्ट धारा (A)', bn: 'সর্বোচ্চ সম্ভাব্য থ্রু-ফল্ট কারেন্ট (A)' } },
        { symbol: 'N', name: { en: 'CT turns ratio (Np:Ns = N:1)', hi: 'CT टर्न्स अनुपात', bn: 'সিটি টার্নস অনুপাত' } },
        { symbol: 'R_{ct}', name: { en: 'CT secondary winding resistance at 75°C (Ω)', hi: 'CT द्वितीयक वाइंडिंग प्रतिरोध (Ω)', bn: 'সিটি সেকেন্ডারি উইন্ডিং রেজিস্ট্যান্স (Ω)' } },
        { symbol: 'R_{lead}', name: { en: 'One-way pilot lead resistance (Ω)', hi: 'एकतरफा पायलट लीड प्रतिरोध (Ω)', bn: 'একমুখী পাইলট লিড রেজিস্ট্যান্স (Ω)' } },
        { symbol: 'R_{relay}', name: { en: 'Relay input burden resistance (Ω)', hi: 'रिले इनपुट बर्डन प्रतिरोध (Ω)', bn: 'রিলে ইনপুট বার্ডেন রেজিস্ট্যান্স (Ω)' } }
      ]
    },
    {
      id: 'f-ch17-effective-alf',
      symbol: 'ALF_{eff}',
      expression: 'ALF_{eff} = ALF_{rated} \\cdot \\frac{R_{ct} + R_{b,rated}}{R_{ct} + R_{b,actual}}',
      title: {
        en: 'Effective Accuracy Limit Factor Formula',
        hi: 'प्रभावी एक्यूरेसी लिमिट फैक्टर सूत्र',
        bn: 'কার্যকর অ্যাকুরেসি লিমিট ফ্যাক্টর সূত্র'
      },
      description: {
        en: 'Calculates the true capability of a Class P protective CT to handle fault currents without saturation when connected to a burden lower than its nameplate rating.',
        hi: 'नेमप्लेट रेटिंग से कम बर्डन से जुड़े होने पर बिना सैचुरेशन के फॉल्ट करंट को संभालने की क्लास P CT की वास्तविक क्षमता की गणना करता है।',
        bn: 'নেমপ্লেট রেটিংয়ের চেয়ে কম বার্ডেন যুক্ত থাকলে স্যাচুরেশন ছাড়া ফল্ট কারেন্ট বহনে ক্লাস P সিটির প্রকৃত ক্ষমতা নির্ণয় করে।'
      },
      variables: [
        { symbol: 'ALF_{eff}', name: { en: 'Effective Accuracy Limit Factor', hi: 'प्रभावी ALF', bn: 'কার্যকর ALF' } },
        { symbol: 'ALF_{rated}', name: { en: 'Rated Accuracy Limit Factor (e.g., 20 in 5P20)', hi: 'रेटेड ALF (उदा. 5P20 में 20)', bn: 'রেটেড ALF (যেমন 5P20 তে ২০)' } },
        { symbol: 'R_{b,rated}', name: { en: 'Rated burden resistance = VA / I_n² (Ω)', hi: 'रेटेड बर्डन प्रतिरोध (Ω)', bn: 'রেটেড বার্ডেন রেজিস্ট্যান্স (Ω)' } },
        { symbol: 'R_{b,actual}', name: { en: 'Actual total external burden resistance (Ω)', hi: 'वास्तविक कुल बाहरी बर्डन (Ω)', bn: 'প্রকৃত মোট বহিঃস্থ বার্ডেন (Ω)' } }
      ]
    }
  ],
  keyPoints: [
    {
      en: 'Protection CTs (5P, 10P, PS) are designed with large iron cores to withstand 20 to 30 times rated current without saturation.',
      hi: 'सुरक्षा CT (5P, 10P, PS) बड़े लोहे के कोर के साथ बनाए जाते हैं ताकि वे बिना सैचुरेशन के रेटेड करंट के 20 से 30 गुना करंट को सहन कर सकें।',
      bn: 'প্রটেকশন সিটিগুলো (5P, 10P, PS) বিশালাকার আয়রন কোরের সাহায্যে এমনভাবে তৈরি যাতে রেটেড কারেন্টের ২০-৩০ গুণ কারেন্টেও স্যাচুরেট না হয়।'
    },
    {
      en: 'Under no circumstances should a CT secondary circuit be opened while primary current is flowing; doing so creates lethal voltages exceeding several kV.',
      hi: 'प्राथमिक धारा बहने के दौरान कभी भी CT सेकेंडरी परिपथ को नहीं खोलना चाहिए; ऐसा करने से कई kV का जानलेवा वोल्टेज उत्पन्न होता है।',
      bn: 'প্রাইমারিতে বিদ্যুৎ প্রবাহ থাকা অবস্থায় কোনো অবস্থাতেই সিটির সেকেন্ডারি ওপেন করা যাবে না; এতে কয়েক হাজার ভোল্টের প্রাণঘাতী শক সৃষ্টি হতে পারে।'
    },
    {
      en: 'A lower connected burden increases the effective Accuracy Limit Factor, delaying saturation during severe system faults.',
      hi: 'कम बर्डन कनेक्ट करने से प्रभावी ALF बढ़ जाता है, जिससे गंभीर फॉल्ट के दौरान सैचुरेशन में देरी होती है।',
      bn: 'কম বার্ডেন যুক্ত করলে কার্যকর ALF বৃদ্ধি পায়, যা মারাত্মক ফল্টের সময়ও সিটির স্যাচুরেশন বিলম্বিত করে।'
    },
    {
      en: 'Capacitive Voltage Transformers (CVTs) utilize ferroresonance suppression circuits to damp dangerous subharmonic non-linear oscillations.',
      hi: 'कैपेसिटिव वोल्टेज ट्रांसफार्मर (CVT) खतरनाक फेरोरेसोनेंस दोलनों को दबाने के लिए सप्रेशन सर्किट का उपयोग करते हैं।',
      bn: 'ক্যাপাসিটিভ ভোল্টেজ ট্রান্সফরমার (CVT) বিপজ্জনক ফেরোরেজোন্যান্স দূর করতে সাপ্রেশন সার্কিট ব্যবহার করে।'
    }
  ],
  schematics: [
    {
      id: 'sch-ch17-l02-01',
      title: {
        en: 'Protection CT Equivalent Circuit, Magnetizing Branch & Knee-Point Curve',
        hi: 'सुरक्षा CT समतुल्य परिपथ, उत्तेजना शाखा एवं नी-पॉइंट वक्र',
        bn: 'প্রটেকশন সিটি সমতুল্য সার্কিট, ম্যাগনেটাইজিং শাখা ও নী-পয়েন্ট কার্ভ'
      },
      content: {
        en: 'The schematic details the physical equivalent circuit of a current transformer: ideal transformation ratio, secondary winding resistance (Rct), non-linear magnetizing branch (Xm), connected cable run resistance (2*Rlead), and the relay burden (Rrelay). The excitation curve graph shows the linear region, knee-point voltage (Vk), and the deep saturation zone where current reproduction collapses.',
        hi: 'यह आरेख करंट ट्रांसफार्मर के समकक्ष परिपथ को दिखाता है: आदर्श अनुपात, द्वितीयक वाइंडिंग प्रतिरोध (Rct), गैर-रेखीय उत्तेजना शाखा (Xm), केबल प्रतिरोध और रिले बर्डन। नी-पॉइंट वक्र रैखिक क्षेत्र और संतृप्ति क्षेत्र को स्पष्ट रूप से दर्शाता है।',
        bn: 'এই স্কিম্যাটিকটি সিটির সমতুল্য সার্কিট প্রদর্শন করে: আদর্শ অনুপাত, ওয়াইন্ডিং রেজিস্ট্যান্স (Rct), নন-লিনিয়ার ম্যাগনেটাইজিং শাখা (Xm), লিড রেজিস্ট্যান্স এবং রিলে বার্ডেন। নী-পয়েন্ট কার্ভে লিনিয়ার ও ডিপ স্যাচুরেশন অঞ্চল স্পষ্ট দেখানো হয়েছে।'
      },
      schematicId: 'sch-ch17-instrument-transformers-protection'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch17-l02-01',
      problem: {
        en: 'A 2000/1 A Class PS CT is applied to the differential protection of a 400 kV busbar. The maximum symmetrical three-phase fault current is 40 kA. The secondary winding resistance is Rct = 4.2 Ω. The one-way pilot wire run from the switchyard to the control room is 250 meters of 4 mm² copper conductor (resistivity ρ = 0.0175 Ω·mm²/m). The numerical relay burden is 0.1 Ω. Calculate the required Knee-Point Voltage (Vk) to ensure complete stability under maximum fault conditions with full DC offset.',
        hi: 'एक 2000/1 A क्लास PS CT 400 kV बसबार की डिफरेंशियल सुरक्षा पर लगाया गया है। अधिकतम फॉल्ट करंट 40 kA है। सेकेंडरी वाइंडिंग प्रतिरोध Rct = 4.2 Ω है। स्विचयार्ड से कंट्रोल रूम तक 250 मीटर का 4 mm² कॉपर केबल (ρ = 0.0175 Ω·mm²/m) है। रिले बर्डन 0.1 Ω है। आवश्यक नी-पॉइंट वोल्टेज (Vk) की गणना करें।',
        bn: 'একটি ২০০০/১ A ক্লাস PS সিটি ৪০০ kV বাসবারের ডিফারেনশিয়াল সুরক্ষায় ব্যবহৃত হয়েছে। সর্বোচ্চ সিমেট্রিক্যাল ফল্ট কারেন্ট ৪০ kA। সেকেন্ডারি উইন্ডিং রেজিস্ট্যান্স Rct = ৪.২ Ω। সুইচইয়ার্ড থেকে কন্ট্রোল রুম পর্যন্ত ২৫০ মিটার ৪ mm² তামার তার রয়েছে (ρ = ০.০১৭৫ Ω·mm²/m)। রিলের বার্ডেন ০.১ Ω। পূর্ণ ডিসি অফসেটে স্থিতিশীলতার জন্য প্রয়োজনীয় নী-পয়েন্ট ভোল্টেজ (Vk) কত হবে?'
      },
      solution: {
        en: 'Given:\n• CT Ratio = 2000/1 A (Turns Ratio N = 2000)\n• If_max = 40,000 A\n• Secondary Fault Current Is_max = If_max / N = 40,000 / 2000 = 20 A\n• Rct = 4.2 Ω\n• Length L = 250 m, Area A = 4 mm²\n• Relay Burden Rrelay = 0.1 Ω\n\nStep 1: Calculate one-way lead resistance Rlead:\nRlead = ρ * L / A = (0.0175 * 250) / 4 = 4.375 / 4 = 1.094 Ω\nTotal loop resistance of pilot wires = 2 * Rlead = 2 * 1.094 = 2.188 Ω\n\nStep 2: Calculate total secondary loop resistance Rtotal:\nRtotal = Rct + 2*Rlead + Rrelay = 4.2 + 2.188 + 0.1 = 6.488 Ω\n\nStep 3: Apply Class PS Knee-Point Voltage formula:\nVk ≥ 2 * Is_max * Rtotal\nVk ≥ 2 * 20 A * 6.488 Ω = 259.52 V\n\nResult: The CT specification should mandate a knee-point voltage of at least Vk ≥ 260 V (typically rounded up to 300 V in engineering tenders).',
        hi: 'दिया गया है:\n• CT अनुपात = 2000/1 A, If_max = 40 kA, Is_max = 20 A\n• Rct = 4.2 Ω, Rrelay = 0.1 Ω\n\nचरण 1: केबल लूप प्रतिरोध: Rlead = 0.0175 * 250 / 4 = 1.094 Ω → 2*Rlead = 2.188 Ω\nचरण 2: कुल प्रतिरोध = 4.2 + 2.188 + 0.1 = 6.488 Ω\nचरण 3: Vk ≥ 2 * 20 * 6.488 = 259.52 V\nनिष्कर्ष: आवश्यक नी-पॉइंट वोल्टेज कम से कम 260 V होना चाहिए।',
        bn: 'প্রদত্ত:\n• সিটি অনুপাত = ২০০০/১ A, If_max = ৪০ kA, Is_max = ২০ A\n• Rct = ৪.২ Ω, রিলের বার্ডেন = ০.১ Ω\n\nধাপ ১: লিড লুপ রেজিস্ট্যান্স: Rlead = ০.০১৭৫ * ২৫০ / ৪ = ১.০৯৪ Ω → ২*Rlead = ২.১৮৮ Ω\nধাপ ২: মোট লুপ রেজিস্ট্যান্স = ৪.২ + ২.১৮৮ + ০.১ = ৬.৪৮৮ Ω\nধাপ ৩: Vk ≥ ২ * ২০ * ৬.৪৮৮ = ২৫৯.৫২ V\nসিদ্ধান্ত: প্রয়োজনীয় নী-পয়েন্ট ভোল্টেজ কমপক্ষে ২৬০ V হতে হবে।'
      },
      givenValues: { 'If': '40 kA', 'Ratio': '2000/1 A', 'Rct': '4.2 Ω', 'Length': '250 m', 'Rrelay': '0.1 Ω' },
      finalAnswer: {
        en: 'Required Vk ≥ 260 V RMS',
        hi: 'आवश्यक Vk ≥ 260 V RMS',
        bn: 'প্রয়োজনীয় Vk ≥ ২৬০ V RMS'
      }
    },
    {
      id: 'ex-ch17-l02-02',
      problem: {
        en: 'A protection CT is rated 15 VA, Class 5P20, with a secondary rated current of 5 A and internal winding resistance of Rct = 0.25 Ω. If the actual total burden connected to the secondary (leads plus numerical relay) is only 0.35 Ω, calculate the effective Accuracy Limit Factor (ALF_eff).',
        hi: 'एक सुरक्षा CT 15 VA, क्लास 5P20, सेकेंडरी 5 A और Rct = 0.25 Ω का है। यदि वास्तविक कनेक्टेड बर्डन केवल 0.35 Ω है, तो प्रभावी एक्यूरेसी लिमिट फैक्टर (ALF_eff) की गणना करें।',
        bn: 'একটি প্রোটেকশন সিটি ১৫ VA, ক্লাস 5P20, যার সেকেন্ডারি ৫ A এবং অভ্যন্তরীণ রেজিস্ট্যান্স Rct = ০.২৫ Ω। যদি প্রকৃত যুক্ত বার্ডেন মাত্র ০.৩৫ Ω হয়, তবে কার্যকর একুরেসি লিমিট ফ্যাক্টর (ALF_eff) নির্ণয় করুন।'
      },
      solution: {
        en: 'Given:\n• Rated Burden VA = 15 VA\n• Rated Secondary Current In = 5 A\n• Rated ALF = 20\n• Internal Resistance Rct = 0.25 Ω\n• Actual Connected Burden R_b,actual = 0.35 Ω\n\nStep 1: Calculate rated burden resistance R_b,rated:\nR_b,rated = VA / In² = 15 / 5² = 15 / 25 = 0.60 Ω\n\nStep 2: Apply effective ALF formula:\nALF_eff = ALF_rated * (Rct + R_b,rated) / (Rct + R_b,actual)\nALF_eff = 20 * (0.25 + 0.60) / (0.25 + 0.35)\nALF_eff = 20 * (0.85) / (0.60) = 20 * 1.4167 = 28.33\n\nConclusion: Because the modern numerical relay represents a smaller burden than the CT nameplate rating, the CT can sustain fault currents up to 28.3 times rated current before exceeding 5% composite error.',
        hi: 'चरण 1: रेटेड बर्डन प्रतिरोध = 15 / 5² = 0.60 Ω\nचरण 2: ALF_eff = 20 * (0.25 + 0.60) / (0.25 + 0.35) = 20 * 0.85 / 0.60 = 28.33\nनिष्कर्ष: कम बर्डन के कारण CT 28.3 गुना करंट तक बिना सैचुरेट हुए काम कर सकता है।',
        bn: 'ধাপ ১: রেটেড বার্ডেন রেজিস্ট্যান্স = ১৫ / ৫² = ০.৬০ Ω\nধাপ ২: ALF_eff = ২০ * (০.২৫ + ০.৬০) / (০.২৫ + ০.৩৫) = ২০ * ০.৮৫ / ০.৬০ = ২৮.৩৩\nসিদ্ধান্ত: কম বার্ডেনের সুবাদে সিটিটি রেটেড কারেন্টের ২৮.৩ গুণ পর্যন্ত কম্পোজিট এরর ৫% এর নিচে রেখে পরিচালনা করতে সক্ষম।'
      },
      givenValues: { 'VA': '15 VA', 'In': '5 A', 'ALF': '20', 'Rct': '0.25 Ω', 'R_actual': '0.35 Ω' },
      finalAnswer: {
        en: 'Effective ALF = 28.33',
        hi: 'प्रभावी ALF = 28.33',
        bn: 'কার্যকর ALF = ২৮.৩৩'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Specifying Class PS CT cores for unit differential protection of 500 MVA generator-transformers.',
      'Sizing secondary copper cable cross-sections (e.g., choosing 4 mm² vs. 6 mm²) to restrict loop burden and prevent early CT saturation.',
      'Configuring Ferroresonance Suppression Circuits (FRSC) on 220 kV and 400 kV Capacitor Voltage Transformers (CVTs).'
    ],
    hi: [
      '500 MVA जनरेटर-ट्रांसफार्मर के डिफरेंशियल प्रोटेक्शन के लिए क्लास PS CT कोर का चयन।',
      'केबल लूप बर्डन को सीमित करने के लिए द्वितीयक तांबे के केबल क्रॉस-सेक्शन (4 mm² बनाम 6 mm²) का आकार निर्धारित करना।',
      '220 kV और 400 kV कैपेसिटिव वोल्टेज ट्रांसफार्मर (CVT) पर फेरोरेसोनेंस सप्रेशन सर्किट कॉन्फ़िगर करना।'
    ],
    bn: [
      '৫০০ MVA জেনারেটর-ট্রান্সফরমারের ডিফারেনশিয়াল সুরক্ষায় ক্লাস PS সিটির স্পেসিফিকেশন নির্ধারণ।',
      'লুপ বার্ডেন কমাতে সিটির সেকেন্ডারি কেবলের সাইজ (৪ mm² বনাম ৬ mm²) নির্বাচন।',
      '২২০ kV ও ৪০০ kV ক্যাপাসিটর ভোল্টেজ ট্রান্সফরমারে (CVT) ফেরোরেজোন্যান্স সাপ্রেশন সার্কিট স্থাপন।'
    ]
  },
  commonMistakes: {
    en: [
      'Leaving a CT secondary circuit open while the primary is energized, generating thousands of volts that cause explosive flashover and death.',
      'Using a metering CT core for protection relays; metering CTs saturate prematurely during faults, causing relays to fail to trip.',
      'Omitting the factor of 2 in the loop resistance (forgetting that current travels out and returns along the pilot cable: 2 * Rlead).'
    ],
    hi: [
      'प्राइमरी चालू रहने पर CT सेकेंडरी को खुला छोड़ना, जिससे हजारों वोल्ट का खतरनाक वोल्टेज बनता है।',
      'सुरक्षा रिले के लिए मीटरिंग CT का उपयोग करना; मीटरिंग CT फॉल्ट के दौरान तुरंत सैचुरेट हो जाते हैं जिससे रिले ट्रिप नहीं करता।',
      'केबल लूप प्रतिरोध में 2 के गुणक को भूल जाना (केबल जाने और वापस आने दोनों का प्रतिरोध 2 * Rlead होता है)।'
    ],
    bn: [
      'প্রাইমারিতে বিদ্যুৎ প্রবাহ চলাকালে সিটির সেকেন্ডারি খোলা রাখা, যা হাজার হাজার ভোল্টের মারাত্মক ফ্ল্যাশওভার ঘটায়।',
      'প্রোটেকশন রিলের সাথে ভুলবশত মিটারিং সিটি যুক্ত করা; মিটারিং সিটি দ্রুত স্যাচুরেট হয়ে রিলেকে অন্ধ করে ফেলে।',
      'কেবল লুপ রেজিস্ট্যান্সে ২ দিয়ে গুণ করতে ভুলে যাওয়া (তারের যাওয়া ও আসার মোট রোধ হলো ২ * Rlead)।'
    ]
  },
  keyTakeaways: {
    en: [
      'Protection CTs must maintain linear fidelity under massive fault currents; metering CTs deliberately saturate early to protect delicate instruments.',
      'Class PS knee-point voltage must exceed Vk ≥ 2 · If/N · (Rct + 2Rlead + Rrelay) to ensure stability under asymmetrical fault transients.',
      'Never open-circuit a live CT secondary; always short-circuit before disconnecting any relay burden.'
    ],
    hi: [
      'सुरक्षा CT को विशाल फॉल्ट धाराओं के तहत लीनियर रहना चाहिए; मीटरिंग CT मीटर की रक्षा के लिए जल्दी सैचुरेट होते हैं।',
      'डिफरेंशियल स्थिरता के लिए क्लास PS नी-पॉइंट वोल्टेज Vk ≥ 2 · If/N · (Rct + 2Rlead + Rrelay) होना आवश्यक है।',
      'जीवित CT सेकेंडरी को कभी खुला न छोड़ें; रिले हटाने से पहले हमेशा सेकेंडरी को शॉर्ट-सर्किट करें।'
    ],
    bn: [
      'প্রটেকশন সিটিকে মারাত্মক ফল্ট কারেন্টেও লিনিয়ার থাকতে হয়; মিটারিং সিটি ইচ্ছে করেই দ্রুত স্যাচুরেট হয় মিটার বাঁচাতে।',
      'ট্রানজিয়েন্ট স্থিতিশীলতার জন্য ক্লাস PS সিটির নী-পয়েন্ট ভোল্টেজ পর্যাপ্ত হওয়া আবশ্যক।',
      'চলন্ত সিটির সেকেন্ডারি কখনোই ওপেন করবেন না; যেকোনো কাজ করার আগে টার্মিনাল শর্ট করুন।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch17-l02-01',
      question: {
        en: 'What does the designation "5P20" on a protective current transformer nameplate signify?',
        hi: 'सुरक्षात्मक करंट ट्रांसफार्मर नेमप्लेट पर "5P20" पदनाम क्या दर्शाता है?',
        bn: 'প্রটেকশন কারেন্ট ট্রান্সফরমারের নেমপ্লেটে "5P20" লেখা থাকলে তার অর্থ কী?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Composite error ≤ 5% up to 20 times rated current at rated burden', hi: 'रेटेड बर्डन पर 20 गुना रेटेड करंट तक समग्र त्रुटि ≤ 5%', bn: 'রেটেড বার্ডেনে রেটেড কারেন্টের ২০ গুণ পর্যন্ত কম্পোজিট এরর ≤ ৫%' } },
        { id: 'opt-2', text: { en: '5% primary current rating with 20 minutes thermal withstand', hi: '20 मिनट की थर्मल क्षमता के साथ 5% प्राथमिक करंट', bn: '২০ মিনিট থার্মাল উইথস্ট্যান্ড সহ ৫% প্রাইমারি কারেন্ট' } },
        { id: 'opt-3', text: { en: '5 phases operating at 20 kV line voltage', hi: '20 kV लाइन वोल्टेज पर काम करने वाले 5 फेज', bn: '২০ kV লাইনে পরিচালিত ৫টি ফেজ' } },
        { id: 'opt-4', text: { en: 'Accuracy limit factor of 5 at 20 VA rated burden', hi: '20 VA बर्डन पर 5 का एक्यूरेसी लिमिट फैक्टर', bn: '২০ VA বার্ডেনে ৫ অ্যাকুরেসি লিমিট ফ্যাক্টর' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'In IEC nomenclature, 5P represents a protection core with maximum 5% composite error, and 20 is the Accuracy Limit Factor (ALF), guaranteeing this accuracy up to 20 times rated symmetrical primary current.',
        hi: 'IEC मानकों में, 5P का अर्थ 5% अधिकतम त्रुटि है और 20 एक्यूरेसी लिमिट फैक्टर (ALF) है जो 20 गुना करंट तक लागू होता है।',
        bn: 'আইইসি নিয়ম অনুযায়ী, 5P মানে সর্বোচ্চ ৫% কম্পোজিট এরর এবং ২০ হলো একুরেসি লিমিট ফ্যাক্টর (ALF), যা রেটেড কারেন্টের ২০ গুণ পর্যন্ত প্রযোজ্য।'
      }
    },
    {
      id: 'mcq-ch17-l02-02',
      question: {
        en: 'Why is it strictly forbidden to open-circuit the secondary winding of a current transformer while primary current is flowing?',
        hi: 'प्राथमिक धारा बहने के दौरान करंट ट्रांसफार्मर की द्वितीयक वाइंडिंग को खुला छोड़ना सख्त मना क्यों है?',
        bn: 'প্রাইমারিতে কারেন্ট থাকা অবস্থায় সিটির সেকেন্ডারি উইন্ডিং ওপেন করা সম্পূর্ণ নিষিদ্ধ কেন?'
      },
      options: [
        { id: 'opt-1', text: { en: 'All primary current becomes magnetizing current, producing lethal peak voltages of thousands of volts and core burnout', hi: 'सभी प्राथमिक धारा चुंबकन धारा बन जाती है, जिससे हजारों वोल्ट का जानलेवा वोल्टेज बनता है और कोर जल जाता है', bn: 'সমস্ত প্রাইমারি কারেন্ট ম্যাগনেটাইজিং কারেন্টে পরিণত হয়ে হাজার হাজার ভোল্টের মারাত্মক ভোল্টেজ তৈরি করে এবং কোর পুড়িয়ে ফেলে' } },
        { id: 'opt-2', text: { en: 'The primary transmission line will immediately trip on overvoltage', hi: 'प्राथमिक पारेषण लाइन ओवरवोल्टेज पर तुरंत ट्रिप हो जाएगी', bn: 'প্রাইমারি ট্রান্সমিশন লাইনে সাথে সাথে ওভারভোল্টেজ ট্রিপ ঘটবে' } },
        { id: 'opt-3', text: { en: 'The CT secondary current will rise to infinity', hi: 'CT द्वितीयक धारा अनंत तक बढ़ जाएगी', bn: 'সিটির সেকেন্ডারি কারেন্ট অসীমে বৃদ্ধি পাবে' } },
        { id: 'opt-4', text: { en: 'The power factor of the transmission grid becomes zero leading', hi: 'पावर ग्रिड का पावर फैक्टर शून्य लीडिंग हो जाता है', bn: 'পাওয়ার গ্রিডের পাওয়ার ফ্যাক্টর শূন্য লিডিংয়ে নেমে যাবে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Without secondary demagnetizing MMF, the full primary MMF forces the core into extreme saturation. The rate of flux change (dPhi/dt) during zero-crossings generates lethal peak voltages across the open terminals.',
        hi: 'सेकेंडरी करंट न होने पर पूरी प्राइमरी करंट कोर को अत्यधिक संतृप्त करती है, जिससे खुले टर्मिनलों पर जानलेवा उच्च वोल्टेज स्पाइक्स बनते हैं।',
        bn: 'সেকেন্ডারি ডি-ম্যাগনেটাইজিং এমএমএফ না থাকায় সম্পূর্ণ প্রাইমারি এমএমএফ কোরকে স্যাচুরেট করে এবং শূন্য-ক্রসিংয়ে মারাত্মক পিক ভোল্টেজ তৈরি করে।'
      }
    },
    {
      id: 'mcq-ch17-l02-03',
      question: {
        en: 'How does reducing the connected burden on a Class 5P protective CT affect its performance?',
        hi: 'क्लास 5P सुरक्षा CT पर कनेक्टेड बर्डन को कम करने से उसके प्रदर्शन पर क्या प्रभाव पड़ता है?',
        bn: 'ক্লাস 5P প্রোটেকশন সিটিতে যুক্ত বার্ডেন কমিয়ে দিলে তার কার্যক্ষমতায় কী প্রভাব পড়ে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'It increases the effective Accuracy Limit Factor, allowing higher fault currents before saturation', hi: 'यह प्रभावी ALF को बढ़ाता है, जिससे सैचुरेशन से पहले उच्च फॉल्ट धाराओं की अनुमति मिलती है', bn: 'এটি কার্যকর ALF বৃদ্ধি করে, যার ফলে উচ্চতর ফল্ট কারেন্টেও স্যাচুরেশন ঘটে না' } },
        { id: 'opt-2', text: { en: 'It immediately causes core saturation at normal load current', hi: 'यह सामान्य लोड पर ही कोर को तुरंत सैचुरेट कर देता है', bn: 'এটি স্বাভাবিক লোডেই কোরকে স্যাচুরেট করে দেয়' } },
        { id: 'opt-3', text: { en: 'It reverses the secondary polarity of the CT', hi: 'यह CT की सेकेंडरी ध्रुवीयता को उलट देता है', bn: 'এটি সিটির সেকেন্ডারি পোলারিটি উল্টে দেয়' } },
        { id: 'opt-4', text: { en: 'It reduces the primary continuous current rating by 50%', hi: 'यह प्राथमिक करंट रेटिंग को 50% कम कर देता है', bn: 'এটি প্রাইমারি কারেন্ট ধারণক্ষমতা ৫০% কমিয়ে দেয়' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Because voltage drop is reduced with lower external burden (V = Is · Z_burden), less magnetizing flux is required, dramatically increasing the effective accuracy limit factor (ALF_eff).',
        hi: 'कम बाहरी बर्डन के साथ वोल्टेज ड्रॉप कम हो जाता है, जिससे कम फ्लक्स की आवश्यकता होती है और प्रभावी ALF बढ़ जाता है।',
        bn: 'কম বার্ডেন মানে কম ভোল্টেজ ড্রপ, ফলে কোরে কম ফ্লাক্স দরকার হয় এবং কার্যকর ALF বহুগুণ বেড়ে যায়।'
      }
    },
    {
      id: 'mcq-ch17-l02-04',
      question: {
        en: 'According to IEC standards, how is the Knee-Point Voltage (Vk) of a Class PS CT defined on its excitation curve?',
        hi: 'IEC मानकों के अनुसार, इसके उत्तेजना वक्र पर क्लास PS CT के नी-पॉइंट वोल्टेज (Vk) को कैसे परिभाषित किया जाता है?',
        bn: 'আইইসি মানদণ্ড অনুযায়ী, এক্সাইটেশন কার্ভে ক্লাস PS সিটির নী-পয়েন্ট ভোল্টেজ (Vk) কীভাবে সংজ্ঞায়িত হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'The point where a 10% increase in secondary voltage causes a 50% increase in magnetizing current', hi: 'वह बिंदु जहां सेकेंडरी वोल्टेज में 10% की वृद्धि से उत्तेजना धारा में 50% की वृद्धि होती है', bn: 'যে বিন্দুতে সেকেন্ডারি ভোল্টেজ ১০% বৃদ্ধি করলে ম্যাগনেটাইজিং কারেন্ট ৫০% বৃদ্ধি পায়' } },
        { id: 'opt-2', text: { en: 'The point where secondary voltage reaches 1000 V RMS', hi: 'वह बिंदु जहां सेकेंडरी वोल्टेज 1000 V RMS तक पहुंचता है', bn: 'যে বিন্দুতে সেকেন্ডারি ভোল্টেজ ১০০০ V এ পৌঁছায়' } },
        { id: 'opt-3', text: { en: 'The point where current ratio error exceeds exactly 1%', hi: 'वह बिंदु जहां करंट अनुपात त्रुटि ठीक 1% से अधिक हो जाती है', bn: 'যে বিন্দুতে কারেন্ট রেশিও এরর ঠিক ১% ছাড়িয়ে যায়' } },
        { id: 'opt-4', text: { en: 'The maximum breakdown voltage of the terminal oil', hi: 'टर्मिनल तेल का अधिकतम ब्रेकडाउन वोल्टेज', bn: 'টার্মিনাল অয়েলের সর্বোচ্চ ব্রেকডাউন ভোল্টেজ' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'IEC 61869-2 defines the knee-point voltage as the point on the excitation curve where a 10% increase in sinusoidal secondary voltage produces a 50% increase in excitation (magnetizing) current.',
        hi: 'IEC 61869-2 के अनुसार नी-पॉइंट वह वोल्टेज है जहां वोल्टेज 10% बढ़ाने पर उत्तेजना धारा 50% बढ़ जाती है।',
        bn: 'আইইসি 61869-2 অনুযায়ী এক্সাইটেশন কার্ভের যে বিন্দুতে সেকেন্ডারি ভোল্টেজ ১০% বাড়ালে এক্সাইটেশন কারেন্ট ৫০% বৃদ্ধি পায় তাকে নী-পয়েন্ট বলে।'
      }
    },
    {
      id: 'mcq-ch17-l02-05',
      question: {
        en: 'Why do revenue metering CTs incorporate an Instrument Security Factor (e.g., ISF ≤ 5)?',
        hi: 'रेवेन्यू मीटरिंग CT में इंस्ट्रूमेंट सिक्योरिटी फैक्टर (जैसे ISF ≤ 5) क्यों शामिल किया जाता है?',
        bn: 'মিটারিং সিটিতে ইন্সট্রুমেন্ট সিকিউরিটি ফ্যাক্টর (যেমন ISF ≤ 5) কেন অন্তর্ভুক্ত করা হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'To intentionally saturate during short circuits, limiting secondary current and protecting delicate energy meters', hi: 'फॉल्ट के दौरान जानबूझकर सैचुरेट होने के लिए, ताकि सेकेंडरी करंट सीमित रहे और संवेदनशील ऊर्जा मीटर सुरक्षित रहें', bn: 'ফল্টের সময় ইচ্ছে করেই স্যাচুরেট হতে, যাতে সেকেন্ডারি কারেন্ট সীমিত থেকে সূক্ষ্ম এনার্জি মিটার সুরক্ষিত থাকে' } },
        { id: 'opt-2', text: { en: 'To ensure the CT can withstand 100 kA faults without saturation', hi: 'यह सुनिश्चित करने के लिए कि CT बिना सैचुरेशन के 100 kA फॉल्ट सहन कर सके', bn: 'সিটি যেন স্যাচুরেশন ছাড়াই ১০০ kA ফল্ট সহ্য করতে পারে' } },
        { id: 'opt-3', text: { en: 'To measure harmonic distortion up to the 50th order', hi: '50वें क्रम तक हार्मोनिक विकृति को मापने के लिए', bn: '৫০তম অর্ডার পর্যন্ত হারমোনিক পরিমাপ করতে' } },
        { id: 'opt-4', text: { en: 'To eliminate the need for grounding the secondary neutral', hi: 'सेकेंडरी न्यूट्रल को ग्राउंड करने की आवश्यकता को समाप्त करने के लिए', bn: 'সেকেন্ডারি নিউট্রাল গ্রাউন্ডিংয়ের প্রয়োজনীয়তা দূর করতে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Metering cores are designed to saturate at modest overcurrents (5 to 10 times rated) so that devastating fault currents are not transferred into sensitive revenue meters and transducer coils.',
        hi: 'मीटरिंग कोर 5 से 10 गुना करंट पर सैचुरेट हो जाते हैं ताकि विनाशकारी फॉल्ट करंट संवेदनशील मीटरों में न जाए।',
        bn: 'মিটারিং কোর সামান্য ওভারকারেন্টেই (৫-১০ গুণ) স্যাচুরেট হয়ে যায় যাতে মারাত্মক ফল্ট কারেন্ট সেনসিটিভ মিটারের কয়েল ধ্বংস না করতে পারে।'
      }
    },
    {
      id: 'mcq-ch17-l02-06',
      question: {
        en: 'What is the primary cause of transient saturation in protection CTs during the first few cycles of a fault?',
        hi: 'फॉल्ट के पहले कुछ चक्रों के दौरान सुरक्षा CT में क्षणिक संतृप्ति (क्षणिक सैचुरेशन) का मुख्य कारण क्या है?',
        bn: 'ফল্ট শুরুর প্রথম কয়েকটি সাইকেলে প্রোটেকশন সিটিতে ট্রানজিয়েন্ট স্যাচুরেশনের মূল কারণ কী?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Exponentially decaying DC offset component in the asymmetrical fault current', hi: 'असममित फॉल्ट धारा में तेजी से घटता हुआ डीसी ऑफसेट घटक', bn: 'অপ্রতিসম ফল্ট কারেন্টে থাকা সূচকীয়ভাবে ক্ষয়প্রাপ্ত ডিসি অফসেট কম্পোনেন্ট' } },
        { id: 'opt-2', text: { en: 'High ambient temperature in the outdoor switchyard', hi: 'आउटडोर स्विचयार्ड में उच्च परिवेश का तापमान', bn: 'আউটডোর সুইচইয়ার্ডের অতিরিক্ত তাপমাত্রা' } },
        { id: 'opt-3', text: { en: 'Skin effect in the secondary wiring conductor', hi: 'द्वितीयक वायरिंग कंडक्टर में स्किन इफेक्ट', bn: 'সেকেন্ডারি তারের স্কিন ইফেক্ট' } },
        { id: 'opt-4', text: { en: 'High power factor of the transmission line load', hi: 'पारेषण लाइन लोड का उच्च पावर फैक्टर', bn: 'ট্রান্সমিশন লাইনের উচ্চ পাওয়ার ফ্যাক্টর' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'The slowly decaying unidirectional DC component of asymmetrical fault current drives unidirectional magnetic flux into the CT core, multiplying the required flux by (1 + X/R) and triggering rapid iron saturation.',
        hi: 'फॉल्ट करंट का डीसी ऑफसेट घटक कोर में एकदिशीय फ्लक्स को बढ़ाता है, जिससे कुछ ही चक्रों में तीव्र सैचुरेशन हो जाता है।',
        bn: 'ফল্ট কারেন্টের ডিসি অফসেট কোরে একমুখী ফ্লাক্স বৃদ্ধি করে ফ্লাক্সের চাহিদাকে বহুগুণ বাড়িয়ে দেয় এবং দ্রুত আয়রন স্যাচুরেশন ঘটায়।'
      }
    },
    {
      id: 'mcq-ch17-l02-07',
      question: {
        en: 'Capacitive Voltage Transformers (CVTs) applied at 220 kV and above are prone to which potentially destructive non-linear resonance phenomenon?',
        hi: '220 kV और उससे ऊपर लागू कैपेसिटिव वोल्टेज ट्रांसफार्मर (CVT) किस विनाशकारी गैर-रेखीय अनुनाद घटना के शिकार होते हैं?',
        bn: '২২০ kV ও তদূর্ধ্ব সিস্টেমে ব্যবহৃত ক্যাপাসিটিভ ভোল্টেজ ট্রান্সফরমার (CVT) কোন বিপজ্জনক নন-লিনিয়ার রেজোন্যান্সের ঝুঁকিতে থাকে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Ferroresonance', hi: 'फेरोरेसोनेंस (Ferroresonance)', bn: 'ফেরোরেজোন্যান্স (Ferroresonance)' } },
        { id: 'opt-2', text: { en: 'Corona discharge resonance', hi: 'कोरोना डिस्चार्ज अनुनाद', bn: 'করোনা ডিসচার্জ রেজোন্যান্স' } },
        { id: 'opt-3', text: { en: 'Mechanical shaft resonance', hi: 'यांत्रिक शाफ्ट अनुनाद', bn: 'মেকানিক্যাল শ্যাফট রেজোন্যান্স' } },
        { id: 'opt-4', text: { en: 'Plasma arc pulsation', hi: 'प्लाज्मा आर्क स्पंदन', bn: 'প্লাজমা আর্ক পালসেশন' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'CVTs couple capacitive dividers with saturable electromagnetic inductive transformers. Switching transients can trigger ferroresonance—sustained, highly distorted subharmonic overvoltages that can explode the CVT.',
        hi: 'CVT में कैपेसिटर और सेचुरेबल इंडक्टर मिलकर फेरोरेसोनेंस पैदा कर सकते हैं, जिससे अत्यधिक खतरनाक ओवरवोल्टेज उत्पन्न होते हैं।',
        bn: 'সিভিটির ক্যাপাসিটর এবং স্যাচুরেবল ট্রান্সফরমারের মিথস্ক্রিয়ায় বিপজ্জনক ফেরোরেজোন্যান্স তৈরি হয় যা সিভিটিকে বিস্ফোরিত করতে পারে।'
      }
    },
    {
      id: 'mcq-ch17-l02-08',
      question: {
        en: 'A 1000/1 A CT has secondary winding resistance Rct = 2 Ω and is connected via a 200 m 2.5 mm² copper cable (loop resistance 2.8 Ω) to a relay of 0.2 Ω burden. For an external fault of 25 kA, what minimum knee-point voltage Vk is required by Class PS criteria?',
        hi: 'एक 1000/1 A CT का Rct = 2 Ω है, केबल लूप प्रतिरोध 2.8 Ω और रिले बर्डन 0.2 Ω है। 25 kA के बाहरी फॉल्ट के लिए आवश्यक न्यूनतम क्लास PS नी-पॉइंट वोल्टेज Vk क्या है?',
        bn: 'একটি ১০০০/১ A সিটির Rct = ২ Ω, কেবলের লুপ রেজিস্ট্যান্স ২.৮ Ω এবং রিলের বার্ডেন ০.২ Ω। ২৫ kA বহিরাগত ফল্টের জন্য ক্লাস PS অনুযায়ী ন্যূনতম নী-পয়েন্ট ভোল্টেজ Vk কত হবে?'
      },
      options: [
        { id: 'opt-1', text: { en: '250 V RMS', hi: '250 V RMS', bn: '২৫০ V RMS' } },
        { id: 'opt-2', text: { en: '125 V RMS', hi: '125 V RMS', bn: '১২৫ V RMS' } },
        { id: 'opt-3', text: { en: '500 V RMS', hi: '500 V RMS', bn: '৫০০ V RMS' } },
        { id: 'opt-4', text: { en: '50 V RMS', hi: '50 V RMS', bn: '৫০ V RMS' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Secondary fault current Is = 25,000 / 1000 = 25 A. Total secondary resistance Rtotal = Rct + Rloop + Rrelay = 2 + 2.8 + 0.2 = 5.0 Ω. Formula: Vk ≥ 2 · Is · Rtotal = 2 · 25 A · 5.0 Ω = 250 V RMS.',
        hi: 'Is = 25,000 / 1000 = 25 A। कुल प्रतिरोध = 2 + 2.8 + 0.2 = 5.0 Ω। Vk ≥ 2 · 25 · 5 = 250 V RMS।',
        bn: 'Is = ২৫,০০০ / ১০০০ = ২৫ A। মোট রোধ = ২ + ২.৮ + ০.২ = ৫.০ Ω। সূত্র: Vk ≥ ২ · ২৫ · ৫.০ = ২৫০ V RMS।'
      }
    }
  ]
};
