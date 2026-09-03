# -*- coding: utf-8 -*-
lesson2_code = '''import { Lesson } from '../types';

export const LESSON_CAUSES_ELECTRICAL_ACCIDENTS: Lesson = {
  id: 'lsn-ch15-causes-electrical-accidents',
  topicId: 'tp-causes-electrical-accidents',
  chapterId: 'ch-electrical-safety',
  order: 2,
  title: {
    en: 'Causes of Electrical Accidents',
    hi: 'विद्युत दुर्घटनाओं के कारण',
    bn: 'বৈদ্যুতিক দুর্ঘটনার কারণসমূহ'
  },
  description: {
    en: 'Systematic analysis of electrical accident root causes: insulation breakdown and deterioration, conductor overloading and thermal runaway, loose cable terminations and series arcing, arc flash explosion dynamics, environmental moisture ingress, absence of effective earthing, and human operational failures.',
    hi: 'विद्युत दुर्घटनाओं के मूल कारणों का व्यवस्थित विश्लेषण: इन्सुलेशन का टूटना और क्षरण, चालकों का ओवरलोडिंग और थर्मल रनवे, ढीले टर्मिनल और श्रृंखला आर्किंग, आर्क फ्लैश विस्फोट, पर्यावरणीय नमी का प्रवेश, प्रभावी अर्थिंग की अनुपस्थिति और मानवीय परिचालन त्रुटियाँ।',
    bn: 'বৈদ্যুতিক দুর্ঘটনার মূল কারণসমূহের সুশৃঙ্খল বিশ্লেষণ: ইনসুলেশন ক্ষয় ও বিনষ্ট হওয়া, পরিবাহীর ওভারলোডিং ও তাপীয় ক্ষতি, ঢিলে সংযোগ ও আর্কিং, আর্ক ফ্ল্যাশ বিস্ফোরণ গতিবিদ্যা, আর্দ্রতার অনুপ্রবেশ, কার্যকরী আর্থিংয়ের অভাব এবং মানবীয় পরিচালনাগত ত্রুটি।'
  },
  estimatedMinutes: 35,
  easyExplanation: {
    en: 'Electrical accidents do not happen randomly; they follow predictable physical failure pathways. The most common cause is damaged or degraded insulation: when the plastic sleeve around a wire cracks from heat, sunlight, or physical crushing, the bare energized copper touches metal frames or nearby conductors. Another major culprit is loose screw terminations: a loose wire joint introduces contact resistance; as heavy current flows, Joule heating (I²R) turns the terminal into a miniature electric heater reaching 500°C to 1,000°C, igniting surrounding plastic. Finally, when short circuits occur across high-power busbars, the ionized air conducts a massive fireball called an Arc Flash—radiating temperatures up to 20,000°C (four times hotter than the sun’s surface) that vaporizes copper into toxic gas and creates explosive pressure waves.',
    hi: 'विद्युत दुर्घटनाएं अचानक नहीं होतीं; वे भौतिक विफलताओं का परिणाम होती हैं। सबसे आम कारण इंसुलेशन का खराब होना है: जब गर्मी या घिसाव से तार का प्लास्टिक कवर फट जाता है, तो नंगा तांबा उपकरण की धातु या अन्य तारों को छू लेता है। दूसरा प्रमुख कारण ढीले टर्मिनल कनेक्शन हैं: ढीले जोड़ पर संपर्क प्रतिरोध बढ़ जाता है; भारी धारा बहने पर I²R ऊष्मा उस जोड़ को 500°C से 1,000°C तक तपा देती है, जिससे आग लग जाती है। इसके अलावा, जब उच्च क्षमता वाले बसबार पर शॉर्ट सर्किट होता है, तो हवा आयनित होकर "आर्क फ्लैश" का रूप ले लेती है—जिसका तापमान 20,000°C तक पहुंच जाता है (सूर्य की सतह से चार गुना अधिक गर्म), जो तांबे को भाप बना देता है और धमाका करता है।',
    bn: 'বৈদ্যুতিক দুর্ঘটনা আকস্মিকভাবে ঘটে না; এগুলি সুনির্দিষ্ট ভৌত ত্রুটির কারণে সৃষ্টি হয়। সর্বাধিক প্রচলিত কারণ হলো তারের ইনসুলেশন নষ্ট হওয়া: তাপ, সূর্যের আলো বা যান্ত্রিক চাপে যখন প্লাস্টিক কভার ফেটে যায়, তখন উন্মুক্ত পরিবাহী যন্ত্রপাতির বডি স্পর্শ করে। দ্বিতীয় প্রধান কারণ হলো সংযোগস্থলের স্ক্রু ঢিলে থাকা: ঢিলে সংযোগে উচ্চ রোধ সৃষ্টি হয়; ভারী কারেন্ট চলাকালে I²R হিটিংয়ের কারণে সংযোগস্থলটি ৫০০°C থেকে ১,০০০°C পর্যন্ত উত্তপ্ত হয়ে প্লাস্টিকে আগুন ধরিয়ে দেয়। এছাড়া উচ্চ ক্ষমতার বাসবারে শর্ট সার্কিট ঘটলে বাতাস আয়নিত হয়ে সৃষ্টি হয় বিধ্বংসী "আর্ক ফ্ল্যাশ"—যার তাপমাত্রা ২০,০০০°C পর্যন্ত পৌঁছায় (সূর্যের পৃষ্ঠের চেয়ে ৪ গুণ বেশি), যা তামা বাষ্পীভূত করে এবং তীব্র বিস্ফোরণ ঘটায়।'
  },
  detailedExplanation: {
    en: 'Forensic electrical engineering identifies seven primary root-cause mechanisms responsible for industrial and domestic electrical mishaps:\\n\\n1. Insulation Breakdown and Aging: Dielectric materials (PVC, XLPE, EPR, varnishes) undergo Arrhenius thermal degradation over time. Operating a cable just 10°C above its rated temperature halves its operational lifespan (Montsinger’s 10-degree rule). Mechanical crushing, chemical contamination, moisture, and ultraviolet radiation accelerate micro-cracking, leading to phase-to-phase or phase-to-earth fault currents.\\n\\n2. Loose Connections and Contact Resistance: An imperfectly torqued screw terminal creates microscopic asperities where true metal-to-metal contact is limited to a tiny fraction of the nominal contact area. This constriction resistance elevates local resistance R_joint. The thermal power dissipated P = I² · R_joint creates localized hot spots. As copper oxidizes, copper oxide (Cu2O) forms—a semiconductor with higher resistance—accelerating thermal runaway until adjacent insulation ignites.\\n\\n3. Cable Overloading: When circuit demand exceeds the current-carrying capacity (ampacity) of conductors, continuous I²R heating softens the insulation, causing conductor migration and eventual dielectric breakdown.\\n\\n4. Arcing Faults and Arc Flash Hazards: An arc fault is a high-power electrical discharge between energized conductors through ionized gas (plasma). Arc flashes generate intense thermal radiation (flux > 1.2 cal/cm² causes second-degree burns), molten metal shrapnel moving at hundreds of meters per second, blinding ultraviolet radiation, and deafening acoustic blast waves (>140 dB) caused by the instantaneous expansion of vaporized copper (expanding 67,000-fold from solid to vapor).\\n\\n5. Water and Conductive Dust Ingress: Water containing dissolved ions provides a conductive electrolytic bridge across insulating surfaces, initiating tracking currents and flashovers across terminal blocks.\\n\\n6. Defective or Absent Protective Earthing: In the absence of a low-resistance protective earth path, a line-to-chassis insulation failure fails to draw enough current to trip circuit breakers, leaving the metal enclosure permanently energized at line potential (230 V or 415 V).\\n\\n7. Human Operational Errors and Lack of Isolation: Performing maintenance on energized apparatus without verifying isolation, bypassing interlocks, using unrated multimeters (CAT ratings), or failing to apply Lockout/Tagout (LOTO) protocols.',
    hi: 'विद्युत इंजीनियरिंग दुर्घटनाओं के सात प्राथमिक मूल कारणों की पहचान करती है:\\n\\n1. इंसुलेशन का टूटना और पुराना होना: केबल का तापमान अपनी सीमा से 10°C अधिक होने पर उसकी उम्र आधी हो जाती है (मोंटसिंगर का नियम)। रासायनिक प्रभाव, नमी और पराबैंगनी किरणें इंसुलेशन को कमजोर करती हैं।\\n2. ढीले जोड़ और संपर्क प्रतिरोध: ढीले टर्मिनल पर संपर्क क्षेत्र घट जाता है जिससे R_joint बढ़ जाता है। P = I² · R_joint के कारण जोड़ गर्म होता है और कॉपर ऑक्साइड बनने से आग लग जाती है।\\n3. केबल ओवरलोडिंग: जब धारा केबल की सुरक्षित वहन क्षमता से अधिक हो जाती है, तो निरंतर हीटिंग से इंसुलेशन पिघल जाता है।\\n4. आर्किंग फॉल्ट और आर्क फ्लैश: उच्च शक्ति वाले तारों के बीच आयनित हवा के माध्यम से भारी डिस्चार्ज आर्क फ्लैश कहलाता है। इसका तापमान 20,000°C तक होता है और तांबा 67,000 गुना आयतन में फैलकर धमाका करता है।\\n5. पानी और धूल का प्रवेश: पानी में घुले आयन सतह पर लीकेज धारा को बढ़ाते हैं जिससे शॉर्ट सर्किट होता है।\\n6. अर्थिंग का अभाव या दोष: अर्थिंग न होने पर उपकरण का बाहरी आवरण 230 V पर चार्ज रहता है और ब्रेकर ट्रिप नहीं होता।\\n7. मानवीय परिचालन त्रुटियां: बिजली बंद किए बिना काम करना, गलत मल्टीमीटर (कैट रेटिंग) का उपयोग और लॉकआउट/टैगआउट (LOTO) का पालन न करना।',
    bn: 'তড়িৎ প্রকৌশলে বৈদ্যুতিক দুর্ঘটনার সাতটি প্রধান মূল কারণ চিহ্নিত করা হয়েছে:\\n\\n১. ইনসুলেশন বিনষ্ট হওয়া: রেটেড তাপমাত্রার চেয়ে ১০°C বেশি তাপমাত্রায় চললে কেবলের আয়ু অর্ধেক হয়ে যায় (মন্টসিংগারের সূত্র)। রাসায়নিক প্রভাব, আর্দ্রতা ও রোদে ইনসুলেশন ক্ষয়প্রাপ্ত হয়।\\n২. ঢিলে সংযোগ ও উচ্চ রোধ: টার্মিনাল স্ক্রু ঢিলে থাকলে সংযোগ বিন্দুতে রোধ বেড়ে যায়। P = I² · R_joint সমীকরণানুসারে চরম উত্তাপ সৃষ্টি হয় এবং কপার অক্সাইড তৈরি হয়ে আগুন লেগে যায়।\\n৩. তারের ওভারলোডিং: অনুমোদিত অ্যাম্পাসিটির চেয়ে অতিরিক্ত কারেন্ট চললে তাপমাত্রায় ইনসুলেশন নরম হয়ে ভেতরের তার শর্ট হয়ে যায়।\\n৪. আর্কিং ও আর্ক ফ্ল্যাশ: বাতাসের মধ্য দিয়ে উচ্চ শক্তির তড়িৎ ক্ষরণই আর্ক ফ্ল্যাশ। এর তাপমাত্রা ২০,০০০°C পর্যন্ত ওঠে এবং কঠিন তামা গ্যাসে পরিণত হয়ে ৬৭,০০০ গুণ আয়তনে প্রসারিত হয়ে বিস্ফোরণ ঘটায়।\\n৫. পানি ও ধূলিকণার অনুপ্রবেশ: আর্দ্রতার কারণে ডাইইলেক্ট্রিক শক্তি নষ্ট হয় এবং সারফেস ট্র্যাকিংয়ের মাধ্যমে শর্ট সার্কিট হয়।\\n৬. ত্রুটিযুক্ত বা অনুপস্থিত আর্থিং: আর্থিং না থাকলে মেটাল বডি লাইভ ভোল্টেজে থেকে যায় এবং ব্রেকার ট্রিপ করে না।\\n৭. মানবীয় অসাবধানতা: লাইভ লাইনে কাজ করা, ভুল ক্যাট রেটিংয়ের মিটার ব্যবহার এবং লকআউট/ট্যাগআউট (LOTO) না মানা।'
  },
  formulas: [
    {
      id: 'f-contact-resistance-heating',
      symbol: 'P_joint',
      expression: 'P_{\\text{joint}} = I^2 \\cdot R_{\\text{joint}}',
      title: {
        en: 'Loose Termination Power Dissipation',
        hi: 'ढीले टर्मिनल पर शक्ति क्षय',
        bn: 'ঢিলে সংযোগে শক্তি ক্ষয়'
      },
      description: {
        en: 'Calculates the localized thermal power generated at a high-resistance loose electrical connection.',
        hi: 'उच्च-प्रतिरोध वाले ढीले विद्युत कनेक्शन पर उत्पन्न स्थानीय तापीय शक्ति की गणना करता है।',
        bn: 'উচ্চ রোধযুক্ত ঢিলে বৈদ্যুতিক সংযোগে উৎপন্ন স্থানীয় তাপীয় শক্তি গণনা করে।'
      },
      variables: [
        { symbol: 'P_joint', name: { en: 'Thermal heating power (W)', hi: 'तापीय शक्ति (W)', bn: 'তাপীয় শক্তি (W)' } },
        { symbol: 'I', name: { en: 'Load current flowing through joint (A)', hi: 'जोड़ से बहने वाली लोड धारा (A)', bn: 'সংযোগের মধ্য দিয়ে প্রবাহিত লোড কারেন্ট (A)' } },
        { symbol: 'R_joint', name: { en: 'Defective joint contact resistance (Ω)', hi: 'दोषपूर्ण जोड़ संपर्क प्रतिरोध (Ω)', bn: 'ত্রুটিযুক্ত সংযোগের রোধ (Ω)' } }
      ]
    },
    {
      id: 'f-arc-flash-incident-energy',
      symbol: 'E_arc',
      expression: 'E_{\\text{incident}} \\propto \\frac{V \\cdot I_{\\text{bf}} \\cdot t_{\\text{arc}}}{d^2}',
      title: {
        en: 'Arc Flash Incident Energy Density (IEEE 1584)',
        hi: 'आर्क फ्लैश आपतित ऊर्जा घनत्व (IEEE 1584)',
        bn: 'আর্ক ফ্ল্যাশ আপতিত শক্তি ঘনত্ব (IEEE 1584)'
      },
      description: {
        en: 'Estimates thermal energy per unit area delivered to a worker’s skin at working distance d during an arc fault.',
        hi: 'आर्क फॉल्ट के दौरान d दूरी पर कार्यकर्ता की त्वचा पर आपतित प्रति इकाई क्षेत्र तापीय ऊर्जा का अनुमान लगाता है।',
        bn: 'আর্ক ফল্টের সময় d দূরত্বে থাকা কর্মীর ত্বকে প্রতি একক ক্ষেত্রফলে আপতিত তাপীয় শক্তি নির্ধারণ করে।'
      },
      variables: [
        { symbol: 'E_incident', name: { en: 'Incident energy (cal/cm² or J/cm²)', hi: 'आपतित ऊर्जा (cal/cm²)', bn: 'আপতিত শক্তি (cal/cm²)' } },
        { symbol: 'I_bf', name: { en: 'Bolted short-circuit current (kA)', hi: 'शॉर्ट-सर्किट धारा (kA)', bn: 'শর্ট সার্কিট কারেন্ট (kA)' } },
        { symbol: 't_arc', name: { en: 'Arc clearing duration (s)', hi: 'आर्क समय (s)', bn: 'আর্কের সময়কাল (s)' } },
        { symbol: 'd', name: { en: 'Working distance from arc (mm or inches)', hi: 'कार्य दूरी (mm)', bn: 'কাজের দূরত্ব (mm)' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-ch15-l02-accident-analysis',
      title: {
        en: 'Detailed Anatomy of Electrical Failures and Arc Flash',
        hi: 'विद्युत विफलताओं एवं आर्क फ्लैश का विस्तृत विश्लेषण',
        bn: 'বৈদ্যুতিক ব্যর্থতা ও আর্ক ফ্ল্যাশের বিশদ বিশ্লেষণ'
      },
      content: {
        en: 'Understanding electrical accident dynamics allows engineers to implement hierarchical safety barriers:\\n\\n1. Overcurrent and Cable Sizing:\\nEvery cable possesses a thermal limit governed by the adiabatic equation S = √(I²t) / k, where S is conductor cross-section (mm²), I is fault current, t is disconnection time, and k is the material factor (115 for PVC/copper). Undersized cables experience thermal runaway during overloads.\\n\\n2. The Physics of Loose Connections:\\nWhen a terminal lug is not torqued to manufacturer specifications, the actual contact area is reduced to microscopic high points (a-spots). As current passes through these tiny constrictions, current density shoots up to thousands of A/mm², producing intense localized temperatures. This melts neighboring insulation, produces toxic gases, and eventually triggers an open arc or phase-to-earth fault.\\n\\n3. Arc Flash vs Arc Blast:\\nAn Arc Flash is the intense thermal radiation released by an arcing fault (up to 20,000°C), emitting radiant energy that can ignite non-flame-retardant clothing at several meters. An Arc Blast is the accompanying supersonic mechanical pressure wave created by metal vaporization (expanding up to 67,000 times) and heating of surrounding air, capable of blowing panel doors off hinges, propelling molten shrapnel, and rupturing eardrums.\\n\\n4. Preventive Hierarchy (Hierarchy of Controls):\\n• Elimination: De-energize and electrically isolate before touching.\\n• Engineering Controls: Install Arc Flash-resistant switchgear, sensitive RCCBs, and proper earthing loops.\\n• Administrative Controls: Lockout/Tagout (LOTO), annual thermographic infrared surveys of switchboards, and safe operating procedures (SOP).\\n• Personal Protective Equipment (PPE): Arc-rated face shields, arc flash suits (rated in cal/cm²), and insulated voltage-rated gloves (ASTM D120).',
        hi: 'विद्युत दुर्घटनाओं की भौतिकी को समझकर इंजीनियर सुरक्षा मानक स्थापित करते हैं:\\n\\n1. ओवरकरंट और केबल साइजिंग: प्रत्येक केबल की एक तापीय वहन सीमा होती है। छोटे आकार के केबल ओवरलोड होने पर तेजी से पिघलते हैं।\\n2. ढीले जोड़ों की भौतिकी: जब स्क्रू सही टॉर्क से नहीं कसा जाता, तो संपर्क सतह बहुत कम रह जाती है। अत्यधिक धारा घनत्व से जोड़ भट्टी की तरह गर्म हो जाता है और आग पकड़ लेता है।\\n3. आर्क फ्लैश बनाम आर्क ब्लास्ट: आर्क फ्लैश 20,000°C का भयानक तापीय विकिरण है जो कपड़ों को जला देता है। आर्क ब्लास्ट तांबे के वाष्पीकरण से उत्पन्न होने वाला उच्च-दबाव का यांत्रिक धमाका है जो पैनल के दरवाजों को उड़ा देता है।\\n4. सुरक्षा नियंत्रण पदानुक्रम: सबसे पहले लाइन बंद करें (Elimination), सुरक्षित आरसीसीबी और अर्थिंग लगाएं (Engineering), एलओटीओ (LOTO) और इंफ्रारेड थर्मल स्कैनिंग अपनाएं (Administrative), तथा आर्क-रेटेड पीपीई किट पहनें (PPE)।',
        bn: 'বৈদ্যুতিক দুর্ঘটনার মেকানিজম অনুধাবন করে প্রতিরোধ ব্যবস্থা গড়ে তোলা সম্ভব:\\n\\n১. ওভারকারেন্ট ও তারের আকার: প্রতিটি পরিবাহীর তাপীয় সহনশীলতা সীমা রয়েছে। ছোট তারে অতিরিক্ত লোড দিলে ইনসুলেশন দ্রুত গলে আগুন ধরে যায়।\\n২. ঢিলে সংযোগের ভৌত প্রক্রিয়া: টার্মিনাল সঠিকভাবে টাইট না হলে সংযোগস্থল মারাত্মক উত্তপ্ত হয়ে কপার অক্সাইড তৈরি করে এবং আগুন ছড়ায়।\\n৩. আর্ক ফ্ল্যাশ বনাম আর্ক ব্লাস্ট: আর্ক ফ্ল্যাশ হলো ২০,০০০°C তাপমাত্রার তীব্র তেজস্ক্রিয় তাপীয় বিকিরণ। আর্ক ব্লাস্ট হলো তামা বাষ্পীভূত হয়ে সৃষ্ট উচ্চচাপের বিধ্বংসী বিস্ফোরণ যা প্যানেল ধ্বংস করে।\\n৪. নিরাপত্তা নিয়ন্ত্রণ স্তর: বিদ্যুৎ সরবরাহ সম্পূর্ণ বিচ্ছিন্ন করা (এলিমিনেশন), আরসিসিবি ও উন্নত আর্থিং স্থাপন (ইঞ্জিনিয়ারিং), এলওটিও ও থার্মোগ্রাফিক স্ক্যানিং (অ্যাডমিনিস্ট্রেটিভ), এবং উপযুক্ত আর্ক-রেটেড পিপিই পোশাক পরিধান (পিপিই)।'
      },
      schematicId: 'circuit-ch15-accident-causes-hazards'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch15-l02-01',
      problem: {
        en: 'A loose screw termination in a 32 A industrial motor circuit develops a contact resistance of 0.75 Ω due to corrosion and improper torque. During full-load operation at 28 A:\\n(a) Calculate the continuous heat power generated at the loose joint.\\n(b) If this thermal energy is confined within a 100 g copper terminal lug (specific heat capacity c = 385 J/(kg·°C)), estimate the initial rate of temperature rise (°C/s) assuming negligible heat dissipation.',
        hi: '32 A इंडस्ट्रियल मोटर सर्किट में जंग और गलत टॉर्क के कारण एक ढीले स्क्रू टर्मिनल पर 0.75 Ω का संपर्क प्रतिरोध विकसित हो जाता है। 28 A के पूर्ण-लोड संचालन के दौरान:\\n(a) ढीले जोड़ पर उत्पन्न निरंतर तापीय शक्ति की गणना कीजिए।\\n(b) यदि यह ऊष्मा 100 ग्राम तांबे के टर्मिनल में ही केंद्रित रहे (विशिष्ट ऊष्मा क्षमता c = 385 J/(kg·°C)), तो तापमान वृद्धि की प्रारंभिक दर (°C/s) का अनुमान लगाइए।',
        bn: '৩২ A ইন্ডাস্ট্রিয়াল মোটর সার্কিটে ঢিলে স্ক্রু সংযোগে মরচে ও ত্রুটিযুক্ত টর্কের কারণে ০.৭৫ Ω রোধ সৃষ্টি হয়। ২৮ A ফুল-লোড চলাকালে:\\n(a) ঢিলে সংযোগস্থলে উৎপন্ন অবিচ্ছিন্ন তাপীয় শক্তি নির্ণয় করুন।\\n(b) এই তাপ শক্তি ১০০ গ্রাম তামার টার্মিনালে কেন্দ্রীভূত থাকলে (আপেক্ষিক তাপ c = ৩৮৫ J/(kg·°C)), তাপমাত্রার বৃদ্ধির প্রাথমিক হার (°C/s) নির্ণয় করুন।'
      },
      solution: {
        en: 'Given:\\n• Current (I) = 28 A\\n• Contact resistance (R_joint) = 0.75 Ω\\n• Mass of lug (m) = 100 g = 0.10 kg\\n• Specific heat of copper (c) = 385 J/(kg·°C)\\n\\nStep 1: Calculate Heat Power Dissipation\\nP_joint = I² · R_joint\\nP_joint = (28)² · 0.75 = 784 · 0.75 = 588 Watts\\n\\nStep 2: Calculate Initial Rate of Temperature Rise\\nThermal equation: P = m · c · (dT / dt)\\nRearranging: dT / dt = P / (m · c)\\nSubstitution: dT / dt = 588 / (0.10 · 385) = 588 / 38.5 ≈ 15.27 °C/s\\n\\nStep 3: Engineering Hazard Analysis\\nA heating power of 588 W in a tiny terminal lug produces a rapid temperature spike (>15 °C per second). Within less than 30 to 45 seconds, the terminal will exceed 400°C to 500°C, thoroughly destroying the PVC/rubber cable insulation and creating an immediate fire and short-circuit disaster.',
        hi: 'दिया गया है:\\n• धारा (I) = 28 A\\n• संपर्क प्रतिरोध (R_joint) = 0.75 Ω\\n• द्रव्यमान (m) = 0.10 kg\\n• विशिष्ट ऊष्मा (c) = 385 J/(kg·°C)\\n\\nचरण 1: तापीय शक्ति की गणना\\nP = I² × R_joint = (28)² × 0.75 = 588 वाट\\n\\nचरण 2: तापमान वृद्धि की दर\\ndT/dt = P / (m × c) = 588 / (0.10 × 385) = 15.27 °C/सेकंड\\n\\nनिष्कर्ष: 588 W की ऊष्मा टर्मिनल को 15.27 °C प्रति सेकंड की दर से गर्म करती है। 30-40 सेकंड में तापमान 500°C पार कर जाएगा जिससे केबल का प्लास्टिक जल उठेगा।',
        bn: 'প্রদত্ত:\\n• কারেন্ট (I) = ২৮ A\\n• সংযোগ রোধ (R_joint) = ০.৭৫ Ω\\n• ভর (m) = ০.১০ kg\\n• তামার আপেক্ষিক তাপ (c) = ৩৮৫ J/(kg·°C)\\n\\nধাপ ১: তাপীয় শক্তি নির্ণয়\\nP = I² × R_joint = (২৮)² × ০.৭৫ = ৫৮৮ ওয়াট\\n\\nধাপ ২: তাপমাত্রা বৃদ্ধির হার\\ndT/dt = P / (m × c) = ৫৮৮ / (০.১০ × ৩৮৫) = ১৫.২৭ °C/সেকেন্ড\\n\\nব্যাখ্যা: ৫৮৮ ওয়াট তাপমাত্রায় প্রতি সেকেন্ডে ১৫ ডিগ্রির বেশি তাপমাত্রা বাড়ে। আধা মিনিটের মধ্যেই তাপমাত্রা ৫০০ ডিগ্রি ছাড়িয়ে মারাত্মক অগ্নিকাণ্ড ঘটাবে।'
      },
      givenValues: { 'I': '28 A', 'R_joint': '0.75 Ω', 'm': '0.10 kg', 'c': '385 J/(kg·°C)' },
      finalAnswer: {
        en: 'Joint power dissipation = 588 W; Initial rate of temperature rise ≈ 15.27 °C/s',
        hi: 'जोड़ पर शक्ति क्षय = 588 W; प्रारंभिक तापमान वृद्धि दर ≈ 15.27 °C/s',
        bn: 'সংযোগস্থলে শক্তি ক্ষয় = ৫৮৮ W; তাপমাত্রা বৃদ্ধির প্রাথমিক হার ≈ ১৫.২৭ °C/s'
      }
    },
    {
      id: 'ex-ch15-l02-02',
      problem: {
        en: 'A 415 V three-phase distribution panel experiences a bolted prospective short-circuit fault of 16 kA. An upstream circuit breaker clears the fault in 150 ms (0.15 s). If the electrical arc develops across a working distance of 450 mm, the calculated incident energy is 7.2 cal/cm². Determine:\\n(a) Whether this energy exceeds the threshold for second-degree skin burns (1.2 cal/cm²).\\n(b) What minimum NFPA 70E Arc Flash PPE Category (Category 1: up to 4 cal/cm², Category 2: up to 8 cal/cm², Category 3: up to 25 cal/cm²) is mandatory for a technician standing at this working distance.',
        hi: '415 V थ्री-फेज वितरण पैनल में 16 kA का शॉर्ट-सर्किट फॉल्ट होता है। सर्किट ब्रेकर 150 ms (0.15 s) में फॉल्ट को साफ करता है। यदि 450 mm की कार्य दूरी पर आपतित ऊर्जा 7.2 cal/cm² है, तो निर्धारण करें:\\n(a) क्या यह ऊर्जा द्वितीय-डिग्री त्वचा के जलने की सीमा (1.2 cal/cm²) से अधिक है।\\n(b) इस दूरी पर खड़े तकनीशियन के लिए कौन सी न्यूनतम NFPA 70E आर्क फ्लैश PPE श्रेणी अनिवार्य है।',
        bn: 'একটি ৪১৫ V থ্রি-ফেজ প্যানেলে ১৬ kA শর্ট-সার্কিট ঘটে। সার্কিট ব্রেকার ১৫০ ms (০.১৫ সেকেন্ডে) লাইন বিচ্ছিন্ন করে। ৪৫০ mm কাজের দূরত্বে আপতিত শক্তি ৭.২ cal/cm² হলে:\\n(a) এটি দ্বিতীয়-ডিগ্রি পোড়ার সীমা (১.২ cal/cm²) অতিক্রম করে কি না তা নির্ধারণ করুন।\\n(b) এই দূরত্বে কর্মীর জন্য ন্যূনতম কোন NFPA 70E আর্ক ফ্ল্যাশ পিপিই ক্যাটাগরি আবশ্যক?'
      },
      solution: {
        en: 'Given:\\n• Incident energy (E_inc) = 7.2 cal/cm²\\n• Second-degree burn threshold = 1.2 cal/cm²\\n\\nStep 1: Compare with Burn Threshold\\n7.2 cal/cm² is 6.0 times the second-degree burn threshold (1.2 cal/cm²). Without arc-rated protective clothing, an exposed worker would suffer extensive second- and third-degree burns across exposed skin and non-fire-retardant clothes would ignite.\\n\\nStep 2: PPE Category Selection (NFPA 70E Table 130.5 / 130.7):\\n• Category 1: Minimum Arc Rating = 4 cal/cm² (Insufficient for 7.2 cal/cm²)\\n• Category 2: Minimum Arc Rating = 8 cal/cm² (Provides adequate protection since 8.0 > 7.2 cal/cm²)\\n• Category 3: Minimum Arc Rating = 25 cal/cm²\\n\\nTherefore, a Category 2 Arc-Rated suit (including arc-rated balaclava, face shield, heavy-duty leather gloves, and safety glasses) is strictly mandatory.',
        hi: 'विश्लेषण:\\n(a) 7.2 cal/cm² मान 1.2 cal/cm² की सीमा से 6 गुना अधिक है। बिना सुरक्षा कपड़े के त्वचा बुरी तरह जल जाएगी।\\n(b) NFPA 70E श्रेणियों के अनुसार:\\n• श्रेणी 1: 4 cal/cm² (अपर्याप्त)\\n• श्रेणी 2: 8 cal/cm² (7.2 cal/cm² के लिए उपयुक्त)\\nअतः तकनीशियन के लिए श्रेणी 2 (Category 2) आर्क-रेटेड PPE अनिवार्य है।',
        bn: 'বিশ্লেষণ:\\n(a) ৭.২ cal/cm² আপতিত শক্তি দ্বিতীয়-ডিগ্রি পোড়ার সীমা ১.২ cal/cm² এর চেয়ে ৬ গুণ বেশি। ফলে সাধারণ পোশাকে মারাত্মক দগ্ধ হওয়ার ঝুঁকি রয়েছে।\\n(b) NFPA 70E মান অনুযায়ী:\\n• ক্যাটাগরি ১: ৪ cal/cm² (অপর্যাপ্ত)\\n• ক্যাটাগরি ২: ৮ cal/cm² (৭.২ cal/cm² এর জন্য নিরাপদ)\\nঅতএব কর্মীর জন্য ন্যূনতম ক্যাটাগরি ২ (Category 2) আর্ক-রেটেড পিপিই স্যুট পরিধান বাধ্যতামূলক।'
      },
      givenValues: { 'E_incident': '7.2 cal/cm²', 'Threshold_burn': '1.2 cal/cm²' },
      finalAnswer: {
        en: 'Incident energy (7.2 cal/cm²) is 6x the burn threshold; Minimum requirement is NFPA 70E PPE Category 2 (8 cal/cm² rating)',
        hi: 'आपतित ऊर्जा (7.2 cal/cm²) जलन सीमा से 6 गुना अधिक है; न्यूनतम आवश्यकता NFPA 70E PPE श्रेणी 2 (8 cal/cm²) है',
        bn: 'আপতিত শক্তি (৭.২ cal/cm²) পোড়ার সীমার ৬ গুণ; ন্যূনতম প্রয়োজনীয় সুরক্ষা হলো NFPA 70E PPE ক্যাটাগরি ২ (৮ cal/cm²)'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Performing periodic infrared thermographic inspections of electrical switchboards and busbar joints to detect overheating loose terminations before failure.',
      'Conducting comprehensive Arc Flash risk assessments and labelling panels with incident energy levels and safe boundary distances.',
      'Implementing strict calibrated torque screwdriver and wrench policies in electrical manufacturing and panel assembly.',
      'Selecting proper Ingress Protection (IP) ratings (e.g., IP65/IP66) for industrial equipment exposed to water washing, dust, or outdoor weather.'
    ],
    hi: [
      'ढीले जोड़ों को समय रहते पकड़ने के लिए स्विचबोर्ड का नियमित इंफ्रारेड थर्मोग्राफिक परीक्षण करना।',
      'पैनलों पर आर्क फ्लैश जोखिम का आकलन कर सुरक्षित दूरी और ऊर्जा स्तर के चेतावनी लेबल लगाना।',
      'पैनल असेंबली में टर्मिनलों को सही ढंग से कसने के लिए टॉर्क स्क्रूड्राइवर का अनिवार्य उपयोग।',
      'पानी और धूल वाले वातावरण में सुरक्षित संचालन हेतु सही IP रेटिंग (जैसे IP65/IP66) के उपकरणों का चयन।'
    ],
    bn: [
      'ঢিলে সংযোগের কারণে আগুনের ঝুঁকি এড়াতে সুইচবোর্ডে নিয়মিত ইনফ্রারেড থার্মোগ্রাফিক পরীক্ষা পরিচালনা করা।',
      'প্যানেলে আর্ক ফ্ল্যাশ বিশ্লেষণ সম্পন্ন করে নিরাপদ দূরত্ব ও সতর্কতামূলক লেবেল স্থাপন।',
      'টার্মিনাল স্ক্রু সঠিকভাবে টাইট করতে নিয়ন্ত্রিত টর্ক রেঞ্চ ও স্ক্রু-ড্রাইভারের ব্যবহার নিশ্চিত করা।',
      'আর্দ্র ও ধূলিময় পরিবেশে যন্ত্রপাতির সুরক্ষায় উপযুক্ত আইপি রেটিং (যেমন IP65/IP66) নিশ্চিতকরণ।'
    ]
  },
  importantPoints: {
    en: [
      'Operating electrical insulation 10°C above its rated temperature cuts its service life in half (Montsinger’s Law).',
      'A loose terminal acts as a heating element; power dissipation scales quadratically with current (P = I²R).',
      'Arc Flash temperatures can reach 20,000°C, which is four times hotter than the surface of the Sun.',
      'Copper expands 67,000 times in volume when transitioning instantaneously from solid to vapor, generating destructive pressure blast waves.',
      'The threshold incident energy for second-degree skin burns is just 1.2 cal/cm² (5.0 J/cm²).'
    ],
    hi: [
      'इंसुलेशन को उसके अनुमत तापमान से 10°C ऊपर चलाने पर उसकी कार्यशील आयु आधी हो जाती है।',
      'ढीला टर्मिनल हीटर की तरह काम करता है; शक्ति क्षय धारा के वर्ग (I²R) के अनुपात में बढ़ता है।',
      'आर्क फ्लैश का तापमान 20,000°C तक पहुंच सकता है, जो सूर्य की सतह से चार गुना अधिक गर्म है।',
      'ठोस से वाष्प बनने पर तांबा 67,000 गुना फैलता है, जिससे भयानक धमाका (ब्लास्ट) होता है।',
      'त्वचा पर द्वितीय-डिग्री जलन पैदा करने के लिए केवल 1.2 cal/cm² आपतित ऊर्जा ही पर्याप्त है।'
    ],
    bn: [
      'রেটেড তাপমাত্রার চেয়ে ১০°C বেশি তাপে চললে ইনসুলেশনের আয়ুষ্কাল অর্ধেক হয়ে যায়।',
      'ঢিলে টার্মিনাল হিটারের মতো কাজ করে এবং কারেন্টের বর্গের অনুপাতে (P = I²R) তাপ উৎপন্ন করে।',
      'আর্ক ফ্ল্যাশের তাপমাত্রা ২০,০০০°C পর্যন্ত হতে পারে, যা সূর্যের উপরিভাগের ৪ গুণ।',
      'বাষ্পে রূপান্তরের সময় কঠিন তামা ৬৭,০০০ গুণ আয়তনে প্রসারিত হয়ে প্রচণ্ড বিস্ফোরণ সৃষ্টি করে।',
      'ত্বকে দ্বিতীয়-ডিগ্রি পোড়া ক্ষতের সৃষ্টি করতে মাত্র ১.২ cal/cm² তাপশক্তিই যথেষ্ট।'
    ]
  },
  commonMistakes: {
    en: [
      'Relying on standard safety glasses or cotton clothing to protect against an Arc Flash event.',
      'Assuming that a breaker will trip instantly on an arcing fault; low-current series arcs often draw less current than normal load trips.',
      'Overtightening screws without a torque tool, which strips copper threads and creates worse contact resistance than under-tightening.',
      'Using unrated consumer multimeters on high-energy industrial busbars, leading to catastrophic multimeter explosions.'
    ],
    hi: [
      'आर्क फ्लैश से बचने के लिए सामान्य चश्मे या साधारण सूती कपड़ों पर भरोसा करना।',
      'यह मानना कि आर्किंग फॉल्ट पर ब्रेकर तुरंत ट्रिप हो जाएगा; छोटे सीरीज आर्क ब्रेकर को ट्रिप नहीं कराते।',
      'बिना टॉर्क टूल के अत्यधिक जोर से स्क्रू कसना, जिससे थ्रेड कट जाते हैं और जोड़ खराब हो जाता है।',
      'उच्च ऊर्जा वाले औद्योगिक पैनलों पर साधारण घरेलू मल्टीमीटर का उपयोग करना, जिससे मीटर में धमाका हो सकता है।'
    ],
    bn: [
      'আর্ক ফ্ল্যাশের বিরুদ্ধে সাধারণ চশমা বা সুতি পোশাক পর্যাপ্ত মনে করা।',
      'মনে করা যে যেকোনো আর্কিংয়ে সার্কিট ব্রেকার সাথে সাথে ট্রিপ করবে; নিম্ন-মাত্রার আর্কে ব্রেকার ট্রিপ নাও করতে পারে।',
      'টর্ক টুল ছাড়া অতিরিক্ত টাইট দিয়ে স্ক্রুর প্যাঁচ নষ্ট করা, যা সংযোগের রোধ বাড়িয়ে দেয়।',
      'শিল্প-কারখানার প্রধান প্যানেলে অনুপযুক্ত সস্তা মাল্টিমিটার ব্যবহার করা, যা মিটারে বিস্ফোরণ ঘটাতে পারে।'
    ]
  },
  keyTakeaways: {
    en: [
      'Most electrical fires originate from insulation degradation or loose high-resistance terminations.',
      'Arc flashes are high-energy explosive plasma events requiring certified arc-rated PPE and proper boundary distances.',
      'Hierarchy of controls strictly mandates electrical de-energization and isolation before maintenance.',
      'Preventive infrared thermography and torque verification are indispensable for facility electrical safety.'
    ],
    hi: [
      'अधिकांश विद्युत आग इंसुलेशन की खराबी या ढीले टर्मिनलों के उच्च प्रतिरोध के कारण लगती है।',
      'आर्क फ्लैश अत्यधिक ऊर्जा वाले विस्फोटक प्लाज्मा इवेंट हैं जिनके लिए प्रमाणित आर्क PPE की आवश्यकता होती है।',
      'रखरखाव से पहले लाइन को बंद और आइसोलेट करना सुरक्षा का सर्वोच्च नियम है।',
      'इंफ्रारेड थर्मोग्राफी और नियमित टॉर्क जांच आग की रोकथाम के लिए अत्यंत आवश्यक हैं।'
    ],
    bn: [
      'অধিকাংশ বৈদ্যুতিক অগ্নিকাণ্ড ইনসুলেশন বিনষ্ট হওয়া বা ঢিলে সংযোগের উচ্চ রোধের কারণে শুরু হয়।',
      'আর্ক ফ্ল্যাশ হলো উচ্চ-শক্তির প্লাজমা বিস্ফোরণ যার জন্য বিশেষ আর্ক-রেটেড পিপিই পরিধান আবশ্যক।',
      'রক্ষণাবেক্ষণ শুরুর পূর্বে লাইন সম্পূর্ণ বিচ্ছিন্ন ও আইসোলেট করা বাধ্যতামূলক নিয়ম।',
      'নিয়মিত ইনফ্রারেড থার্মোগ্রাফি ও টর্ক পর্যবেক্ষণ অগ্নিকাণ্ড রোধের অন্যতম প্রধান চাবিকাঠি।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch15-l02-01',
      question: {
        en: 'According to Montsinger’s rule for electrical insulation, what happens to insulation lifespan if the operating temperature continuously exceeds its rating by 10°C?',
        hi: 'विद्युत इंसुलेशन के लिए मोंटसिंगर के नियम के अनुसार, यदि ऑपरेटिंग तापमान रेटिंग से 10°C लगातार अधिक रहता है तो इंसुलेशन के जीवनकाल पर क्या प्रभाव पड़ता है?',
        bn: 'বৈদ্যুতিক ইনসুলেশনের ক্ষেত্রে মন্টসিংগারের সূত্র অনুসারে, অপারেটিং তাপমাত্রা রেটিংয়ের চেয়ে ১০°C বেশি থাকলে ইনসুলেশনের আয়ুষ্কালের কী ঘটে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Lifespan increases by 25%', hi: 'जीवनकाल 25% बढ़ जाता है', bn: 'আয়ু ২৫% বৃদ্ধি পায়' } },
        { id: 'opt-2', text: { en: 'Lifespan is halved (reduced by 50%)', hi: 'जीवनकाल आधा (50% कम) हो जाता है', bn: 'আয়ুষ্কাল অর্ধেক (৫০% হ্রাস) হয়ে যায়' } },
        { id: 'opt-3', text: { en: 'Lifespan remains unchanged', hi: 'जीवनकाल अपरिवर्तित रहता है', bn: 'আয়ুষ্কাল অপরিবর্তিত থাকে' } },
        { id: 'opt-4', text: { en: 'Lifespan increases tenfold', hi: 'जीवनकाल दस गुना बढ़ जाता है', bn: 'আয়ু দশ গুণ বেড়ে যায়' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'Thermal degradation follows an Arrhenius rate; for common electrical insulation classes, each 10°C continuous temperature rise above the thermal class halves the expected insulation life.',
        hi: 'थर्मल क्षरण अरेनियस दर का पालन करता है; तापमान में प्रत्येक 10°C की वृद्धि से इंसुलेशन का जीवनकाल आधा हो जाता है।',
        bn: 'তাপীয় ক্ষয় আরহেনিয়াস সমীকরণ মেনে চলে; প্রতি ১০°C তাপমাত্রা বৃদ্ধির জন্য ইনসুলেশনের কার্যকর আয়ু অর্ধেক হয়ে যায়।'
      }
    },
    {
      id: 'mcq-ch15-l02-02',
      question: {
        en: 'What is the primary physical cause of localized overheating at a loose electrical cable terminal?',
        hi: 'ढीले विद्युत केबल टर्मिनल पर स्थानीय अत्यधिक हीटिंग का प्राथमिक भौतिक कारण क्या है?',
        bn: 'ঢিলে বৈদ্যুতিক টার্মিনালে স্থানীয় অতিরিক্ত উত্তাপের প্রাথমিক ভৌত কারণ কী?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Excessive magnetic eddy currents in the surrounding air', hi: 'हवा में अत्यधिक चुंबकीय भंवर धाराएं', bn: 'বাতাসে অতিরিক্ত চৌম্বকীয় এডি কারেন্ট' } },
        { id: 'opt-2', text: { en: 'High constriction contact resistance dissipating Joule heat (P = I²R)', hi: 'उच्च संपर्क प्रतिरोध जो जूल ऊष्मा (P = I²R) का क्षय करता है', bn: 'উচ্চ সংযোগ রোধ যা জুল তাপ (P = I²R) উৎপন্ন করে' } },
        { id: 'opt-3', text: { en: 'Rapid decay of atmospheric nitrogen', hi: 'वायुमंडलीय नाइट्रोजन का क्षय', bn: 'বায়ুমণ্ডলীয় নাইট্রোজেনের দ্রুত ক্ষয়' } },
        { id: 'opt-4', text: { en: 'Sudden drop of voltage to zero', hi: 'वोल्टेज का अचानक शून्य हो जाना', bn: 'ভোল্টেজ হঠাৎ শূন্যে নেমে যাওয়া' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'A loose joint has microscopic contact area, creating constriction resistance R_joint. The load current produces intense localized I²R heating that can reach hundreds of degrees Celsius.',
        hi: 'ढीले जोड़ पर वास्तविक संपर्क क्षेत्र घट जाता है जिससे प्रतिरोध बढ़ता है और I²R सूत्रानुसार तीव्र ऊष्मा उत्पन्न होती है।',
        bn: 'ঢিলে সংযোগে সূক্ষ্ম কন্টাক্ট পয়েন্টের কারণে রোধ বাড়ে এবং লোড কারেন্টের দরুন I²R সমীকরণে প্রচণ্ড তাপ সৃষ্টি হয়।'
      }
    },
    {
      id: 'mcq-ch15-l02-03',
      question: {
        en: 'What peak temperature can an industrial electrical Arc Flash reach in its plasma core?',
        hi: 'एक औद्योगिक विद्युत आर्क फ्लैश अपने प्लाज्मा कोर में किस अधिकतम तापमान तक पहुंच सकता है?',
        bn: 'একটি শিল্প কারখানার বৈদ্যুতিক আর্ক ফ্ল্যাশের প্লাজমা কেন্দ্রে সর্বোচ্চ তাপমাত্রা কত হতে পারে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Approx. 100°C', hi: 'लगभग 100°C', bn: 'প্রায় ১০০°C' } },
        { id: 'opt-2', text: { en: 'Approx. 1,000°C', hi: 'लगभग 1,000°C', bn: 'প্রায় ১,০০০°C' } },
        { id: 'opt-3', text: { en: 'Up to 20,000°C (approx. four times hotter than the sun’s surface)', hi: '20,000°C तक (सूर्य की सतह से लगभग चार गुना अधिक गर्म)', bn: '২০,০০০°C পর্যন্ত (সূর্যের পৃষ্ঠের চেয়ে প্রায় ৪ গুণ বেশি)' } },
        { id: 'opt-4', text: { en: 'Absolute zero (-273°C)', hi: 'परम शून्य (-273°C)', bn: 'পরম শূন্য (-২৭৩°C)' } }
      ],
      correctOptionId: 'opt-3',
      explanation: {
        en: 'Arc flash plasma reaches between 10,000°C and 20,000°C, instantly vaporizing copper conductors and emitting lethal thermal radiation.',
        hi: 'आर्क फ्लैश प्लाज्मा 10,000°C से 20,000°C तक पहुंच जाता है, जिससे तांबे के तार तुरंत भाप बन जाते हैं।',
        bn: 'আর্ক ফ্ল্যাশ প্লাজমার তাপমাত্রা ১০,০০০°C থেকে ২০,০০০°C পর্যন্ত হতে পারে, যা তামাকে বাষ্পীভূত করে ফেলে।'
      }
    },
    {
      id: 'mcq-ch15-l02-04',
      question: {
        en: 'What is the threshold incident thermal energy level required to cause a second-degree skin burn (the basis of Arc Flash boundary calculations)?',
        hi: 'द्वितीय-डिग्री त्वचा के जलने का कारण बनने के लिए आवश्यक आपतित तापीय ऊर्जा स्तर (आर्क फ्लैश सीमा गणना का आधार) क्या है?',
        bn: 'ত্বকে দ্বিতীয়-ডিগ্রি পোড়া ক্ষত সৃষ্টির জন্য ন্যূনতম আপতিত তাপীয় শক্তির মান কত (আর্ক ফ্ল্যাশ সীমানা গণনার ভিত্তি)?'
      },
      options: [
        { id: 'opt-1', text: { en: '0.1 cal/cm²', hi: '0.1 cal/cm²', bn: '০.১ cal/cm²' } },
        { id: 'opt-2', text: { en: '1.2 cal/cm² (approx. 5.0 J/cm²)', hi: '1.2 cal/cm² (लगभग 5.0 J/cm²)', bn: '১.২ cal/cm² (প্রায় ৫.০ J/cm²)' } },
        { id: 'opt-3', text: { en: '50 cal/cm²', hi: '50 cal/cm²', bn: '৫০ cal/cm²' } },
        { id: 'opt-4', text: { en: '100 cal/cm²', hi: '100 cal/cm²', bn: '১০০ cal/cm²' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'IEEE 1584 and NFPA 70E define the Arc Flash Protection Boundary as the distance at which incident energy equals 1.2 cal/cm², the onset of curable second-degree burns.',
        hi: 'IEEE 1584 और NFPA 70E 1.2 cal/cm² को द्वितीय-डिग्री त्वचा जलने की सीमा के रूप में परिभाषित करते हैं।',
        bn: 'IEEE 1584 এবং NFPA 70E অনুসারে ১.২ cal/cm² আপতিত শক্তিকে দ্বিতীয়-ডিগ্রি পোড়ার সূচনা সীমা হিসেবে নির্ধারণ করা হয়েছে।'
      }
    },
    {
      id: 'mcq-ch15-l02-05',
      question: {
        en: 'By how much does copper expand in volume when it violently vaporizes from solid metal to gas during an electrical arc blast?',
        hi: 'विद्युत आर्क ब्लास्ट के दौरान ठोस धातु से गैस में वाष्पीकृत होने पर तांबा अपने आयतन में कितना फैलता है?',
        bn: 'বৈদ্যুতিক আর্ক ব্লাস্টে কঠিন ধাতু থেকে গ্যাসে বাষ্পীভূত হওয়ার সময় তামার আয়তন কত গুণ প্রসারিত হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Approximately 2 times', hi: 'लगभग 2 गुना', bn: 'প্রায় ২ গুণ' } },
        { id: 'opt-2', text: { en: 'Approximately 10 times', hi: 'लगभग 10 गुना', bn: 'প্রায় ১০ গুণ' } },
        { id: 'opt-3', text: { en: 'Approximately 67,000 times', hi: 'लगभग 67,000 गुना', bn: 'প্রায় ৬৭,০০০ গুণ' } },
        { id: 'opt-4', text: { en: 'It shrinks to zero volume', hi: 'यह सिकुड़कर शून्य हो जाता है', bn: 'আয়তন সংকুচিত হয়ে শূন্য হয়' } }
      ],
      correctOptionId: 'opt-3',
      explanation: {
        en: 'Copper expands roughly 67,000 times in volume when transitioning instantaneously to vapor, creating explosive mechanical pressure waves that destroy switchgear enclosures.',
        hi: 'तांबा ठोस से गैस बनने पर लगभग 67,000 गुना फैलता है, जिससे शक्तिशाली विस्फोटक दबाव तरंगें उत्पन्न होती हैं।',
        bn: 'কঠিন থেকে বাষ্পে রূপান্তরের সময় তামা প্রায় ৬৭,০০০ গুণ আয়তনে প্রসারিত হয়ে শক্তিশালী বিস্ফোরণ সৃষ্টি করে।'
      }
    },
    {
      id: 'mcq-ch15-l02-06',
      question: {
        en: 'Which method is the most effective non-destructive predictive maintenance technique for finding loose electrical joints before they ignite?',
        hi: 'ढीले जोड़ों में आग लगने से पहले उनका पता लगाने के लिए सबसे प्रभावी गैर-विनाशकारी निवारक रखरखाव तकनीक कौन सी है?',
        bn: 'ঢিলে সংযোগে আগুন লাগার পূর্বেই তা শনাক্ত করতে সবচেয়ে কার্যকর অ-বিধ্বংসী পদ্ধতি কোনটি?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Touching terminals with bare fingers while live', hi: 'चालू लाइन पर नंगे हाथों से छूना', bn: 'চালু অবস্থায় খালি হাতে তার স্পর্শ করা' } },
        { id: 'opt-2', text: { en: 'Infrared (IR) thermographic inspection under load', hi: 'लोड के तहत इंफ्रारेड (IR) थर्मोग्राफिक निरीक्षण', bn: 'লোড চলাকালীন ইনফ্রারেড (IR) থার্মোগ্রাফিক পরীক্ষা' } },
        { id: 'opt-3', text: { en: 'Spraying cold water on the circuit breaker', hi: 'सर्किट ब्रेकर पर ठंडा पानी छिड़कना', bn: 'সার্কিট ব্রেকারে ঠান্ডা জল ছিটানো' } },
        { id: 'opt-4', text: { en: 'Tapping terminals with an iron hammer', hi: 'लोहे के हथौड़े से टर्मिनलों को पीटना', bn: 'লোহার হাতুড়ি দিয়ে টার্মিনাল পেটানো' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'Infrared thermography non-invasively visualizes thermal radiation, instantly revealing hot spots caused by high contact resistance under normal operating loads.',
        hi: 'इंफ्रारेड थर्मोग्राफी लोड के तहत उच्च प्रतिरोध वाले गर्म जोड़ों को बिना छुए तुरंत प्रदर्शित कर देती है।',
        bn: 'ইনফ্রারেড থার্মোগ্রাফির সাহায্যে স্পর্শ ছাড়াই লোড চলাকালে উত্তপ্ত ঢিলে সংযোগ সহজেই শনাক্ত করা যায়।'
      }
    },
    {
      id: 'mcq-ch15-l02-07',
      question: {
        en: 'Why is water ingress into an electrical panel particularly dangerous for insulation integrity?',
        hi: 'विद्युत पैनल में पानी का प्रवेश इंसुलेशन की अखंडता के लिए विशेष रूप से खतरनाक क्यों है?',
        bn: 'বৈদ্যুতিক প্যানেলে পানি প্রবেশ করা ইনসুলেশনের জন্য বিশেষভাবে বিপজ্জনক কেন?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Water increases the dielectric strength of plastics tenfold', hi: 'पानी प्लास्टिक की इन्सुलेटिंग शक्ति को दस गुना बढ़ा देता है', bn: 'পানি প্লাস্টিকের ইনসুলেটিং ক্ষমতা দশ গুণ বাড়ায়' } },
        { id: 'opt-2', text: { en: 'Dissolved minerals make water conductive, causing tracking currents and flashovers across insulator surfaces', hi: 'घुले खनिज पानी को सुचालक बनाते हैं, जिससे सतह पर ट्रैकिंग धाराएं और फ्लैशओवर होते हैं', bn: 'দ্রবীভূত খনিজের কারণে পানি পরিবাহী হয়ে সারফেস ট্র্যাকিং ও মারাত্মক ফ্ল্যাশওভার ঘটায়' } },
        { id: 'opt-3', text: { en: 'Water cools the conductors and makes them stop carrying current', hi: 'पानी तारों को ठंडा करके धारा का प्रवाह बंद कर देता है', bn: 'পানি তার ঠান্ডা করে কারেন্ট প্রবাহ বন্ধ করে' } },
        { id: 'opt-4', text: { en: 'Water prevents any oxidation from occurring', hi: 'पानी किसी भी प्रकार के ऑक्सीकरण को रोकता है', bn: 'পানি জারণ প্রক্রিয়া সম্পূর্ণ রোধ করে' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'Natural and industrial water contains dissolved salts, creating conductive ionic paths across insulating surfaces that initiate surface tracking, arcing, and short circuits.',
        hi: 'पानी में घुले लवण आयनिक प्रवाह मार्ग बनाते हैं, जिससे इंसुलेटर की सतह पर लीकेज धारा और शॉर्ट सर्किट होता है।',
        bn: 'পানিতে দ্রবীভূত লবণ পরিবাহী আয়ন তৈরি করে, যার ফলে ইনসুলেটরের ওপর দিয়ে বিদ্যুৎ পরিবাহিত হয়ে শর্ট সার্কিট হয়।'
      }
    },
    {
      id: 'mcq-ch15-l02-08',
      question: {
        en: 'In the Hierarchy of Controls for electrical safety, which safety measure represents the highest and most effective level of risk reduction?',
        hi: 'विद्युत सुरक्षा के लिए नियंत्रण पदानुक्रम में कौन सा सुरक्षा उपाय जोखिम कम करने के उच्चतम स्तर का प्रतिनिधित्व करता है?',
        bn: 'বৈদ্যুতিক নিরাপত্তার কন্ট্রোল হায়ারার্কিতে কোন সুরক্ষা পদক্ষেপটি ঝুঁকি হ্রাসের সর্বোচ্চ ও সবচেয়ে কার্যকর স্তর?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Wearing safety sunglasses and cotton gloves', hi: 'धूप का चश्मा और सूती दस्ताने पहनना', bn: 'সানগ্লাস ও সাধারণ সুতি গ্লাভস পরা' } },
        { id: 'opt-2', text: { en: 'Putting warning stickers on the panel door', hi: 'पैनल के दरवाजे पर चेतावनी स्टिकर लगाना', bn: 'প্যানেলের দরজায় সতর্কীকরণ স্টিকার লাগানো' } },
        { id: 'opt-3', text: { en: 'Elimination: Complete de-energization and verified electrical isolation before working', hi: 'उन्मूलन (Elimination): काम करने से पहले पूर्ण डी-एनर्जाइजेशन और सत्यापित विद्युत पृथक्करण', bn: 'এলিমিনেশন: কাজ শুরুর পূর্বে সম্পূর্ণ বিদ্যুৎ বিচ্ছিন্নকরণ ও যাচাইকৃত আইসোলেশন' } },
        { id: 'opt-4', text: { en: 'Working faster so contact time is minimized', hi: 'तेजी से काम करना ताकि संपर्क समय कम हो', bn: 'দ্রুত কাজ করে সংযোগের সময় কম রাখা' } }
      ],
      correctOptionId: 'opt-3',
      explanation: {
        en: 'Elimination is the pinnacle of the Hierarchy of Controls; removing the hazard entirely through de-energization and verified zero-energy state prevents accidents before they can occur.',
        hi: 'नियंत्रण पदानुक्रम में "उन्मूलन" सर्वोच्च है; बिजली को पूरी तरह काटकर शून्य-ऊर्जा स्थिति सत्यापित करना दुर्घटना को जड़ से समाप्त करता है।',
        bn: 'কন্ট্রোল হায়ারার্কির শীর্ষে রয়েছে "এলিমিনেশন"; লাইন সম্পূর্ণ ডি-এনার্জাইজ করে শূন্য ভোল্টেজ নিশ্চিত করাই পরম সুরক্ষা।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch15-l02-01',
      question: {
        en: 'Differentiate between an Arc Flash and an Arc Blast in terms of their physical damage mechanisms.',
        hi: 'आर्क फ्लैश और आर्क ब्लास्ट के बीच उनके भौतिक क्षति तंत्र के संदर्भ में अंतर स्पष्ट कीजिए।',
        bn: 'ভৌত ক্ষয়ক্ষতির প্রক্রিয়ার ভিত্তিতে একটি আর্ক ফ্ল্যাশ এবং একটি আর্ক ব্লাস্টের মধ্যে পার্থক্য ব্যাখ্যা করুন।'
      },
      hint: {
        en: 'Focus on thermal electromagnetic radiation (flash) vs supersonic mechanical pressure shock waves (blast).',
        hi: 'तापीय विद्युत चुंबकीय विकिरण (फ्लैश) बनाम सुपरसोनिक यांत्रिक दबाव तरंगों (ब्लास्ट) पर ध्यान दें।',
        bn: 'তাপীয় বিকিরণ (ফ্ল্যাশ) বনাম সুপারসনিক যান্ত্রিক চাপের তরঙ্গ (ব্লাস্ট) এর দিকে মনোযোগ দিন।'
      }
    },
    {
      id: 'pq-ch15-l02-02',
      question: {
        en: 'A 50 A feeder cable has an undersized lug with 0.4 Ω contact resistance. Calculate the annual energy wasted as heat in kWh if the circuit operates 10 hours per day for 300 days per year.',
        hi: 'एक 50 A फीडर केबल के ढीले लUG में 0.4 Ω संपर्क प्रतिरोध है। यदि परिपथ प्रति वर्ष 300 दिन, प्रतिदिन 10 घंटे चलता है तो kWh में प्रति वर्ष व्यर्थ हुई ऊष्मीय ऊर्जा की गणना कीजिए।',
        bn: 'একটি ৫০ A তারের সংযোগে ০.৪ Ω রোধ রয়েছে। সার্কিটটি বছরে ৩০০ দিন এবং দিনে ১০ ঘণ্টা চললে বছরে কত kWh বিদ্যুৎ অপচয় হবে?'
      },
      hint: {
        en: 'P = I²R = 50² × 0.4 = 1000 W = 1 kW. Total hours = 3,000 h. Energy = P × t.',
        hi: 'P = I²R = 2500 × 0.4 = 1000 W = 1 kW। कुल घंटे = 3,000। ऊर्जा = P × t।',
        bn: 'P = I²R = ৫০² × ০.৪ = ১০০০ W = ১ kW। মোট সময় = ৩,০০০ ঘণ্টা। শক্তি = P × t।'
      }
    }
  ]
};
'''

with open('src/data/chapter15Lesson2.ts', 'w', encoding='utf-8') as f:
  f.write(lesson2_code)

print("Created src/data/chapter15Lesson2.ts")
