import { Lesson } from '../types';

export const LESSON_THREE_PHASE_ENGINEERING_CAPSTONE: Lesson = {
  id: 'lsn-ch14-three-phase-engineering-capstone',
  topicId: 'tp-three-phase-engineering-capstone',
  chapterId: 'ch-three-phase',
  order: 10,
  title: {
    en: 'Complete Three-Phase Industrial System Analysis — Final Engineering Capstone',
    hi: 'पूर्ण थ्री-फेज औद्योगिक प्रणाली विश्लेषण — अंतिम इंजीनियरिंग कैपस्टोन',
    bn: 'সম্পূর্ণ থ্রি-ফেজ শিল্প সিস্টেম বিশ্লেষণ — চূড়ান্ত ইঞ্জিনিয়ারিং ক্যাপস্টোন'
  },
  description: {
    en: 'Capstone engineering laboratory synthesizing the full spectrum of advanced three-phase systems. Coordinate symmetrical sequence decomposition, unbalanced four-wire power flows, neutral conductor thermal loading, CT/PT revenue metering integration, harmonic filter design under IEEE 519, and substation protection scheme verification in an interactive industrial power studio.',
    hi: 'उन्नत थ्री-फेज प्रणालियों के संपूर्ण स्पेक्ट्रम को संश्लेषित करने वाली कैपस्टोन इंजीनियरिंग प्रयोगशाला। सममितीय अनुक्रम अपघटन, असंतुलित 4-तार विद्युत प्रवाह, न्यूट्रल चालक थर्मल लोडिंग, CT/PT राजस्व मीटरिंग एकीकरण, IEEE 519 के तहत हार्मोनिक फिल्टर डिजाइन और सबस्टेशन सुरक्षा का समन्वयन करें।',
    bn: 'উন্নত থ্রি-ফেজ সিস্টেমের সম্পূর্ণ পরিধিকে সমন্বিতকারী ক্যাপস্টোন ইঞ্জিনিয়ারিং ল্যাবরেটরি। প্রতিসম উপাদান বিশ্লেষণ, ভারসাম্যহীন ৪-তার বিদ্যুৎ প্রবাহ, নিউট্রাল তারের তাপীয় চাপ, CT/PT মিটারিং ইন্টিগ্রেশন, IEEE 519 অনুসারে হারমোনিক ফিল্টার ডিজাইন এবং সাবস্টেশন প্রোটেকশন সমন্বয় একটি ইন্টারঅ্যাক্টিভ শিল্প স্টুডিওতে পর্যালোচনা করুন।'
  },
  estimatedMinutes: 60,
  easyExplanation: {
    en: 'Welcome to the Chief Electrical Engineer\'s command room! In this capstone lesson, you pull together every single tool learned across Chapter 14 to run a real-world 11 kV / 415 V industrial substation. You are faced with real factory challenges: hundreds of single-phase office computers causing massive phase unbalance, large arc furnaces injecting dirty harmonics that vibrate transformers, an overloaded neutral busbar glowing hot, and electric induction motors overheating due to reverse negative-sequence currents. By diagnosing sequence components, rebalancing phase loads, switching in detuned capacitor banks, and calculating exact CT/PT multipliers, you will transform a failing, penalty-plagued industrial plant into an ultra-efficient, gold-standard green facility!',
    hi: 'चीफ इलेक्ट्रिकल इंजीनियर के कंट्रोल रूम में आपका स्वागत है! इस कैपस्टोन पाठ में आप एक 11 kV / 415 V औद्योगिक सबस्टेशन का प्रबंधन करने के लिए अध्याय 14 के सभी सिद्धांतों को एक साथ लाएंगे। यहां आपको वास्तविक चुनौतियों का सामना करना होगा: सिंगल-फेज कंप्यूटरों से फेज असंतुलन, हार्मोनिक्स से ट्रांसफार्मर में कंपन, अत्यधिक गर्म न्यूट्रल बसबार और नेगेटिव-सीक्वेंस के कारण मोटरों का गर्म होना। सीक्वेंस घटकों का निदान करके, भार को संतुलित करके, डिट्यून्ड कैपेसिटर बैंक लगाकर और सही CT/PT मल्टीप्लायर सेट करके आप एक असफल कारखाने को सर्वोत्तम हरित संयंत्र में बदलेंगे!',
    bn: 'প্রধান বৈদ্যুতিক প্রকৌশলীর নিয়ন্ত্রণ কক্ষে স্বাগতম! এই ক্যাপস্টোন পাঠে আপনি একটি বাস্তব ১১ kV / ৪১৫ V শিল্প সাবস্টেশন পরিচালনা করতে অধ্যায় ১৪ এর সব জ্ঞানকে একত্রিত করবেন। এখানে আপনি বাস্তব কারখানার চ্যালেঞ্জের মুখোমুখি হবেন: শত শত কম্পিউটারের কারণে ফেজ ভারসাম্যহীনতা, হারমোনিক্সে ট্রান্সফরমারের কম্পন, অতিরিক্ত উত্তপ্ত নিউট্রাল বাসবার এবং নেগেটিভ সিকোয়েন্সে মোটরের অতিরিক্ত গরম হওয়া। সিকোয়েন্স উপাদান নির্ণয়, ফেজ লোড ব্যালান্সিং, ক্যাপাসিটর ব্যাংক সংযোগ ও CT/PT গুণক নির্ধারণের মাধ্যমে আপনি একটি ক্ষতিগ্রস্ত কারখানাকে সর্বোচ্চ দক্ষতাসম্পন্ন কারখানায় রূপান্তর করবেন!'
  },
  detailedExplanation: {
    en: 'The modern industrial electrical engineer operates at the intersection of power flow theory, symmetrical component protection, power quality compliance, and financial metering. In this capstone synthesis, all analytical models converge:\n\n1. Real-Time Symmetrical Decomposition & NEMA Motor Derating:\n   Substation digital supervisory systems continuously monitor phase current phasors (Ia, Ib, Ic) and compute:\n   • Positive Sequence (Ia1): Powers mechanical shaft torque.\n   • Negative Sequence (Ia2): Induces double-frequency (100 Hz / 120 Hz) rotor eddy currents. Under NEMA MG-1, if the voltage unbalance factor VUF = (|V2|/|V1|) × 100% exceeds 1%, motor nameplate horsepower must be aggressively derated (derating factor down to 0.70 at 5% unbalance) to prevent winding burnouts.\n   • Zero Sequence (Ia0): Dictates ground return current In = 3·Ia0, which flows back to the transformer star neutral lug.\n\n2. Power Flow, Power Factor, and Harmonic Cross-Interaction:\n   • Active & Reactive Power: Total active power P = Σ P_phase; total reactive power Q = Σ Q_phase.\n   • Target Power Factor Correction: To raise power factor from cos(ϕ1) to target cos(ϕ2) without triggering harmonic resonance, detuned capacitor banks with 7% or 14% series iron-core reactors (tuned below the 5th harmonic at 189 Hz or 134 Hz) are switched.\n   • Total Harmonic Distortion: IEEE 519 enforces THD_V ≤ 5% at the Point of Common Coupling (PCC).\n\n3. High-Voltage CT/PT Metering & Relay Protection Architecture:\n   • Primary revenue settlement uses 3-element Form 9S digital meters with overall multiplying factor MF = CTR × PTR.\n   • Line protection incorporates ANSI 21 Distance, ANSI 51 Overcurrent, ANSI 51N Earth Fault, and ANSI 87T Transformer Differential Protection.\n   • Differential relay restraint coils cancel CT transformation ratio mismatches and phase angle shifts (e.g., Dyn11 30° phase lead) via internal digital matrix transformations.',
    hi: 'औद्योगिक सबस्टेशन में सभी सिद्धांतों का एकीकरण:\n\n1. सममितीय घटक एवं NEMA मोटर डीरेटिंग:\n   • पॉजिटिव सीक्वेंस (Ia1): मोटर को चलाता है।\n   • नेगेटिव सीक्वेंस (Ia2): मोटर रोटर में 100 Hz का करंट बनाता है जिससे मोटर जल सकती है। NEMA MG-1 के अनुसार असंतुलन होने पर मोटर की क्षमता कम (डीरेट) करनी पड़ती है।\n   • जीरो सीक्वेंस (Ia0): न्यूट्रल करंट In = 3·Ia0 बनाता है।\n2. पावर फैक्टर एवं हार्मोनिक सुधार:\n   • पावर फैक्टर सुधारने के लिए डिट्यून्ड कैपेसिटर बैंक (7% या 14% रिएक्टर युक्त) लगाए जाते हैं ताकि 5वें हार्मोनिक पर रेजोनेंस न हो।\n   • IEEE 519 मानक के तहत THD 5% से कम रखा जाता है।\n3. CT/PT मीटरिंग एवं सबस्टेशन सुरक्षा:\n   • 3-तत्व मीटर द्वारा बिलिंग (MF = CTR × PTR)।\n   • ट्रांसफार्मर सुरक्षा के लिए ANSI 87T डिफरेंशियल रिले का उपयोग।',
    bn: 'শিল্প সাবস্টেশনে সকল প্রকৌশল ধারণার সমন্বয়:\n\n১. প্রতিসম উপাদান ও NEMA মোটর ডিরেটিং:\n   • পজিটিভ সিকোয়েন্স (Ia1): মোটরের শ্যাফটে ঘূর্ণন তৈরি করে।\n   • নেগেটিভ সিকোয়েন্স (Ia2): রোটরে দ্বিগুণ ফ্রিকোয়েন্সির কারেন্ট তৈরি করে মারাত্মক গরম করে। NEMA MG-1 নিয়ম মতে অসম ভোল্টেজে মোটরের রেটিং কমাতে (ডিরেট) হয়।\n   • জিরো সিকোয়েন্স (Ia0): নিউট্রাল কারেন্ট In = 3·Ia0 তৈরি করে।\n২. পাওয়ার ফ্যাক্টর ও হারমোনিক প্রতিরোধ:\n   • পাওয়ার ফ্যাক্টর উন্নয়নে ৭% বা ১৪% ডিটিউন্ড রিঅ্যাক্টরযুক্ত ক্যাপাসিটর ব্যাংক ব্যবহৃত হয় যেন ৫ম হারমোনিকে রেজোন্যান্স না ঘটে।\n   • IEEE 519 মানদণ্ড অনুযায়ী ভোল্টেজ THD ৫% এর মধ্যে সীমাবদ্ধ রাখতে হয়।\n৩. CT/PT মিটারিং ও সাবস্টেশন সুরক্ষা:\n   • ৩-এলিমেন্ট মিটারে বিলিং (MF = CTR × PTR)।\n   • ট্রান্সফরমার সুরক্ষায় ANSI 87T ডিফারেনশিয়াল রিলে ব্যবহার।'
  },
  formulas: [
    {
      id: 'f-vuf-nema-unbalance',
      symbol: 'VUF',
      expression: 'VUF = \\frac{|V_2|}{|V_1|} \\times 100\\%',
      title: {
        en: 'Voltage Unbalance Factor (IEC / NEMA)',
        hi: 'वोल्टेज असंतुलन कारक (VUF)',
        bn: 'ভোল্টেজ ভারসাম্যহীনতা ফ্যাক্টর (VUF)'
      },
      description: {
        en: 'Ratio of negative-sequence voltage magnitude to positive-sequence voltage magnitude, governing motor derating.',
        hi: 'नेगेटिव सीक्वेंस वोल्टेज और पॉजिटिव सीक्वेंस वोल्टेज का अनुपात, जो मोटर डीरेटिंग तय करता है।',
        bn: 'পজিটিভ সিকোয়েন্স ভোল্টেজের সাপেক্ষে নেগেটিভ সিকোয়েন্স ভোল্টেজের অনুপাত, যা মোটরের ক্ষমতা হ্রাস নির্ধারণ করে।'
      },
      variables: [
        { symbol: 'V_2', name: { en: 'Negative-Sequence Voltage (V)', hi: 'नेगेटिव सीक्वेंस वोल्टेज (V)', bn: 'নেগেটিভ সিকোয়েন্স ভোল্টেজ (V)' } },
        { symbol: 'V_1', name: { en: 'Positive-Sequence Voltage (V)', hi: 'पॉजिटिव सीक्वेंस वोल्टेज (V)', bn: 'পজিটিভ সিকোয়েন্স ভোল্টেজ (V)' } }
      ]
    },
    {
      id: 'f-capstone-pfc-sizing',
      symbol: 'Q_{c}',
      expression: 'Q_c = P \\cdot \\left[ \\tan(\\arccos(\\text{PF}_1)) - \\tan(\\arccos(\\text{PF}_2)) \\right]',
      title: {
        en: 'Substation Capacitor Bank Sizing Formula',
        hi: 'सबस्टेशन कैपेसिटर बैंक आकार सूत्र',
        bn: 'সাবস্টেশন ক্যাপাসিটর ব্যাংক সাইজিং সূত্র'
      },
      description: {
        en: 'Calculates the required three-phase capacitive reactive power injection to elevate plant power factor from PF1 to PF2.',
        hi: 'प्लांट के पावर फैक्टर को PF1 से PF2 तक बढ़ाने के लिए आवश्यक 3-फेज कैपेसिटर क्षमता (kVAR) की गणना करता है।',
        bn: 'কারখানার পাওয়ার ফ্যাক্টর PF1 থেকে PF2 তে উন্নীত করার জন্য প্রয়োজনীয় থ্রি-ফেজ ক্যাপাসিটর ক্ষমতা (kVAR) হিসাব করে।'
      },
      variables: [
        { symbol: 'Q_c', name: { en: 'Required Reactive Compensation (kVAR)', hi: 'आवश्यक प्रतिघाती मुआवजा (kVAR)', bn: 'প্রয়োজনীয় ক্যাপাসিটিভ রিঅ্যাক্টিভ ক্ষমতা (kVAR)' } },
        { symbol: 'P', name: { en: 'Total Plant Real Power (kW)', hi: 'प्लांट की कुल सक्रिय शक्ति (kW)', bn: 'কারখানার মোট সক্রিয় ক্ষমতা (kW)' } }
      ]
    }
  ],
  diagrams: [
    {
      id: 'diag-ch14-substation-capstone',
      title: {
        en: 'Comprehensive 11kV/415V Industrial Substation One-Line & Protection Diagram',
        hi: 'व्यापक 11kV/415V औद्योगिक सबस्टेशन सिंगल-लाइन एवं सुरक्षा आरेख',
        bn: 'সামগ্রিক ১১kV/৪১৫V শিল্প সাবস্টেশন সিঙ্গেল-লাইন ও প্রোটেকশন ডায়াগ্রাম'
      },
      caption: {
        en: 'Comprehensive substation single-line diagram integrating 11kV incoming feeder, breaker, CT/PT metering, Dyn11 11kV/415V transformer, detuned PFC capacitor banks, active harmonic filters, and unbalanced motor/lighting distribution switchboard.',
        hi: '11kV इनकमिंग फीडर, ब्रेकर, CT/PT, Dyn11 ट्रांसफार्मर, डिट्यून्ड PFC बैंक और एक्टिव हार्मोनिक फिल्टर युक्त सबस्टेशन आरेख।',
        bn: '১১kV ইনকামিং ফিডার, ব্রেকার, CT/PT, Dyn11 ট্রান্সফরমার, ডিটিউন্ড ক্যাপাসিটর ব্যাংক ও অ্যাক্টিভ ফিল্টার সম্বলিত সাবস্টেশন ডায়াগ্রাম।'
      },
      svgType: 'circuit-ch14-capstone-system'
    }
  ],
  sections: [
    {
      id: 'sec-ch14-capstone-engineering-checklist',
      title: {
        en: 'Chief Engineer\'s Substation Commissioning & Health Checklist',
        hi: 'मुख्य इंजीनियर की सबस्टेशन कमीशनिंग एवं स्वास्थ्य चेकलिस्ट',
        bn: 'প্রধান প্রকৌশলীর সাবস্টেশন কমিশনিং ও স্বাস্থ্য চেকলিস্ট'
      },
      content: {
        en: 'Before commissioning a medium-voltage industrial substation or clearing an annual power quality audit, the lead commissioning engineer must sign off on five non-negotiable metrics:\n\n1. Voltage Unbalance Factor (VUF) < 1.0% under normal running load to prevent induction motor rotor damage (NEMA MG-1).\n2. Neutral Conductor Continuous Current < 50% of phase conductor ampacity, and verified 100% or 200% physical neutral conductor sizing.\n3. Total Harmonic Voltage Distortion (THD_V) < 5.0% and TDD_I within IEEE 519-2022 tables at the Point of Common Coupling.\n4. Power Factor ≥ 0.95 lagging during all operating shifts to avoid utility reactive demand financial penalties.\n5. Instrument Transformer shorting terminal blocks verified securely closed before meter servicing and neutral busbar solidly grounded with measured resistance < 1.0 Ω.\n\nMastery of these five pillars represents the pinnacle of electrical power engineering craftsmanship.',
        hi: 'सबस्टेशन चालू करने से पहले 5 प्रमुख मानकों की जांच अनिवार्य है:\n1. वोल्टेज असंतुलन (VUF) 1.0% से कम हो।\n2. न्यूट्रल करंट फेज रेटिंग के सुरक्षित दायरे में हो और न्यूट्रल तार 100% या 200% आकार का हो।\n3. वोल्टेज THD 5% से कम हो (IEEE 519)।\n4. पावर फैक्टर 0.95 से अधिक हो ताकि जुर्माना न लगे।\n5. अर्थिंग प्रतिरोध 1.0 ओम से कम हो और CT शॉर्टिंग ब्लॉक सुरक्षित हों।',
        bn: 'সাবস্টেশন কমিশনিংয়ের পূর্বে ৫টি অপরিহার্য শর্ত পূরণ করতে হয়:\n১. ভোল্টেজ ভারসাম্যহীনতা (VUF) ১.০% এর নিচে থাকতে হবে।\n২. নিউট্রাল কারেন্ট নিরাপদ সীমার মধ্যে এবং নিউট্রাল তার ১০০% বা ২০০% মাপের হতে হবে।\n৩. ভোল্টেজ THD ৫% এর নিচে রাখতে হবে (IEEE 519)।\n৪. পাওয়ার ফ্যাক্টর ০.৯৫ এর উপরে হতে হবে যেন জরিমানা না হয়।\n৫. আর্থিং রেজিস্ট্যান্স ১.০ ওহমের কম এবং CT শর্টিং ব্লক নিরাপদ থাকতে হবে।'
      }
    }
  ],
  workedExamples: [
    {
      id: 'we-ch14-l10-01',
      title: {
        en: 'Complete Substation Audit: Unbalance, Power Factor Correction, and Harmonic Mitigation',
        hi: 'संपूर्ण सबस्टेशन ऑडिट: असंतुलन, पावर फैक्टर सुधार एवं हार्मोनिक शमन',
        bn: 'সম্পূর্ণ সাবস্টেশন অডিট: ভারসাম্যহীনতা, পাওয়ার ফ্যাক্টর উন্নয়ন ও হারমোনিক নিয়ন্ত্রণ'
      },
      problem: {
        en: 'An 11 kV / 415 V, 1000 kVA substation supplies an industrial plant consuming 600 kW at an uncorrected power factor of 0.75 lagging. Digital power meters detect an unbalance factor VUF of 2.5% and a 5th harmonic current of 45 A. Determine: (a) kVAR rating of the capacitor bank required to raise power factor to 0.98 lagging, (b) Recommended tuning of the series detuning reactor to avoid 5th harmonic parallel resonance, and (c) Required motor derating under NEMA MG-1 for VUF = 2.5%.',
        hi: 'एक 1000 kVA सबस्टेशन 600 kW लोड पर 0.75 लैगिंग PF पर काम कर रहा है। VUF 2.5% और 5वां हार्मोनिक 45 A है। (a) PF 0.98 करने के लिए आवश्यक कैपेसिटर बैंक (kVAR), (b) 5वें हार्मोनिक रेजोनेंस से बचने के लिए सीरीज रिएक्टर ट्यूनिंग, और (c) 2.5% VUF पर मोटर डीरेटिंग ज्ञात करें।',
        bn: 'একটি ১০০০ kVA সাবস্টেশন ৬০০ kW লোডে ০.৭৫ ল্যাগিং PF এ চলছে। VUF ২.৫% এবং ৫ম হারমোনিক ৪৫ A। (a) PF ০.৯৮ এ উন্নীত করতে প্রয়োজনীয় ক্যাপাসিটার ব্যাংক (kVAR), (b) ৫ম হারমোনিক রেজোন্যান্স এড়াতে সিরিজের ডিটিউনিং রিঅ্যাক্টর এবং (c) ২.৫% VUF এ মোটরের ডিরেটিং ফ্যাক্টর নির্ণয় করুন।'
      },
      solutionSteps: [
        {
          stepNumber: 1,
          description: {
            en: 'Calculate required capacitor bank rating Qc:\nOriginal angle ϕ1 = arccos(0.75) = 41.41° ==> tan(ϕ1) = 0.8819\nTarget angle ϕ2 = arccos(0.98) = 11.48° ==> tan(ϕ2) = 0.2031\nQc = P · [tan(ϕ1) - tan(ϕ2)] = 600 kW · (0.8819 - 0.2031) = 600 · 0.6788 = 407.3 kVAR.\nStandard engineering specification: Install a 400 kVAR or 425 kVAR multi-step automatic capacitor bank.',
            hi: 'कैपेसिटर बैंक क्षमता: Qc = 600 · [tan(41.41°) - tan(11.48°)] = 600 · (0.8819 - 0.2031) = 407.3 kVAR। 400 kVAR का बैंक लगाएं।',
            bn: 'ক্যাপাসিটর ব্যাংকের ক্ষমতা: Qc = ৬০০ · [tan(৪১.৪১°) - tan(১১.৪৮°)] = ৬০০ · (০.৮৮১৯ - ০.২০৩১) = ৪০৭.৩ kVAR। ৪০০ kVAR ব্যাংক স্থাপন করতে হবে।'
          }
        },
        {
          stepNumber: 2,
          description: {
            en: 'Design series detuning reactor:\nThe 5th harmonic occurs at 250 Hz (5 × 50 Hz). A 7% series reactor (p = 0.07) sets the series resonance frequency to:\nf_res = f_fund / √p = 50 / √0.07 = 50 / 0.2646 = 189 Hz.\nSince 189 Hz is safely well below 250 Hz, the capacitor bank appears INDUCTIVE to all 5th and higher harmonics, completely preventing destructive parallel resonance!',
            hi: 'सीरीज रिएक्टर डिजाइन: 7% रिएक्टर (p = 0.07) लगाने से रेजोनेंस आवृत्ति 189 Hz बन जाती है, जो 5वें हार्मोनिक (250 Hz) से काफी नीचे है। इससे खतरनाक रेजोनेंस नहीं होता।',
            bn: 'সিরিজ রিঅ্যাক্টর ডিজাইন: ৭% রিঅ্যাক্টর (p = ০.০৭) ব্যবহার করলে রেজোন্যান্স ফ্রিকোয়েন্সি হয় ১৮৯ Hz, যা ২৫০ Hz (৫ম হারমোনিক) অপেক্ষা কম হওয়ায় রেজোন্যান্সের ঝুঁকি থাকে না।'
          }
        },
        {
          stepNumber: 3,
          description: {
            en: 'Evaluate NEMA MG-1 motor derating:\nAt VUF = 2.5% unbalance, the NEMA MG-1 derating curve specifies a Derating Factor of approximately 0.90 (90%).\nAll plant induction motors must be operated at a maximum of 90% of their nameplate horsepower rating (or rewound with higher insulation class) until phase balancing is restored.',
            hi: 'NEMA MG-1 मोटर डीरेटिंग: 2.5% असंतुलन पर डीरेटिंग फैक्टर 0.90 (90%) होता है। मोटरों को उनके रेटेड हॉर्सपावर के 90% से अधिक लोड पर न चलाएं।',
            bn: 'NEMA MG-1 মোটর ডিরেটিং: ২.৫% ভারসাম্যহীনতায় ডিরেটিং ফ্যাক্টর প্রায় ০.৯০ (৯০%)। ফেজ ব্যালান্স না করা পর্যন্ত মোটরগুলিকে তাদের পূর্ণ ক্ষমতার ৯০% এ চালাতে হবে।'
          }
        }
      ]
    },
    {
      id: 'we-ch14-l10-02',
      title: {
        en: 'Substation Maximum Demand & Power Factor Correction Synthesis',
        hi: 'सबस्टेशन अधिकतम मांग एवं पावर फैक्टर सुधार संश्लेषण',
        bn: 'সাবস্টেশন সর্বোচ্চ চাহিদা ও পাওয়ার ফ্যাক্টর সংশোধন সংশ্লেষণ'
      },
      problem: {
        en: 'An industrial facility fed by an 11 kV / 415 V, 1,500 kVA step-down transformer operates with an active load P = 1,050 kW at an uncompensated power factor of 0.70 lagging. (a) Compute the uncompensated apparent power S1 and transformer loading percentage. (b) Determine the required kVAR rating of an automatic power factor correction (APFC) capacitor bank to elevate the plant power factor to 0.96 lagging. (c) Calculate the new compensated apparent power S2 and the released transformer capacity available for factory expansion.',
        hi: '1,500 kVA ट्रांसफार्मर पर 1,050 kW का लोड 0.70 लैगिंग पावर फैक्टर पर चल रहा है। (a) प्रारंभिक S1 और ट्रांसफार्मर लोडिंग प्रतिशत निकालें। (b) PF को 0.96 लैगिंग तक सुधारने के लिए आवश्यक APFC कैपेसिटर बैंक (kVAR) निकालें। (c) नया S2 और भविष्य के विस्तार के लिए मुक्त ट्रांसफार्मर क्षमता ज्ञात करें।',
        bn: '১,৫০০ kVA ট্রান্সফর্মারে ১,০৫০ kW লোড ০.৭০ ল্যাগিং পাওয়ার ফ্যাক্টরে পরিচালিত হচ্ছে। (a) প্রাথমিক আপাত ক্ষমতা S1 ও ট্রান্সফর্মার লোডিং শতাংশ নির্ণয় করুন। (b) PF ০.৯৬ ল্যাগিং এ উন্নীত করতে প্রয়োজনীয় APFC ক্যাপাসিটর ব্যাংকের (kVAR) মান নির্ণয় করুন। (c) নতুন আপাত ক্ষমতা S2 এবং কারখানার সম্প্রসারণের জন্য অবমুক্ত ট্রান্সফর্মার ক্ষমতা হিসাব করুন।'
      },
      solutionSteps: [
        {
          stepNumber: 1,
          description: {
            en: 'Compute uncompensated apparent power and transformer loading:\nS1 = P / cos(ϕ1) = 1,050 kW / 0.70 = 1,500.0 kVA.\nTransformer loading = (1,500 / 1,500) × 100% = 100.0% (Transformer operates at 100% full thermal capacity with zero headroom!).\nInitial reactive power Q1 = P × tan(ϕ1) = 1,050 × tan(arccos(0.70)) = 1,050 × 1.0202 = 1,071.2 kVAR.',
            hi: 'प्रारंभिक आभासी शक्ति: S1 = 1,050 / 0.70 = 1,500 kVA (100% लोडिंग)। प्रारंभिक Q1 = 1,050 × tan(45.57°) = 1,071.2 kVAR।',
            bn: 'প্রাথমিক আপাত ক্ষমতা: S1 = ১,০৫০ / ০.৭০ = ১,৫০০ kVA (১০০% লোডিং)। প্রাথমিক Q1 = ১,০৫০ × tan(৪৫.৫৭°) = ১,০৭১.২ kVAR।'
          }
        },
        {
          stepNumber: 2,
          description: {
            en: 'Determine required APFC capacitor rating for target power factor cos(ϕ2) = 0.96 lagging:\ntan(ϕ2) = tan(arccos(0.96)) = tan(16.26°) = 0.2917.\nTarget reactive power Q2 = P × tan(ϕ2) = 1,050 × 0.2917 = 306.3 kVAR.\nRequired capacitor compensation: Qc = Q1 - Q2 = 1,071.2 - 306.3 = 764.9 kVAR (Standardize to 775 kVAR detuned bank).',
            hi: 'आवश्यक कैपेसिटर क्षमता: Q2 = 1,050 × 0.2917 = 306.3 kVAR। आवश्यक कैपेसिटर Qc = 1,071.2 - 306.3 = 764.9 kVAR।',
            bn: 'প্রয়োজনীয় ক্যাপাসিটর ক্ষমতা: Q2 = ১,০৫০ × ০.২৯১৭ = ৩০৬.৩ kVAR। প্রয়োজনীয় ক্যাপাসিটর Qc = ১,০৭১.২ - ৩০৬.৩ = ৭৬৪.৯ kVAR।'
          }
        },
        {
          stepNumber: 3,
          description: {
            en: 'Compute compensated demand and released capacity:\nCompensated apparent power S2 = P / cos(ϕ2) = 1,050 kW / 0.96 = 1,093.75 kVA.\nNew transformer loading = (1,093.75 / 1,500) × 100% = 72.9%.\nReleased Transformer Capacity = S1 - S2 = 1,500 - 1,093.75 = 406.25 kVA!\nSynthesis Summary: By compensating the power factor, the facility reduces substation demand by 406 kVA, eliminating utility low-PF penalties and unlocking 406 kVA of spare transformer capacity for factory production expansion without purchasing an expensive new substation transformer.',
            hi: 'सुधार के बाद स्थिति: नया S2 = 1,050 / 0.96 = 1,093.8 kVA (72.9% लोडिंग)। मुक्त क्षमता = 1,500 - 1,093.8 = 406.25 kVA! इससे पेनाल्टी बची और नया ट्रांसफार्मर खरीदे बिना विस्तार संभव हुआ।',
            bn: 'সংশোধনের পর পরিস্থিতি: নতুন S2 = ১,০৫০ / ০.৯৬ = ১,০৯৩.৮ kVA (৭২.৯% লোডিং)। অবমুক্ত ক্ষমতা = ১,৫০০ - ১,০৯৩.৮ = ৪০৬.২৫ kVA! এতে জরিমানা রোধ হলো এবং নতুন ট্রান্সফরমার কেনা ছাড়াই সম্প্রসারণের সুযোগ তৈরি হলো।'
          }
        }
      ]
    }
  ],
  importantPoints: {
    en: [
      'Comprehensive substation engineering requires simultaneous optimization of voltage unbalance, power factor, and harmonics.',
      'Negative-sequence voltage unbalance induces heavy double-frequency rotor losses, demanding motor derating under NEMA MG-1.',
      'Capacitor banks must be paired with series detuning reactors (typically 7% or 14%) to avoid resonant harmonic magnification.',
      'Revenue metering accuracy requires precision 3-element meters with verified CT/PT multiplying factors and proper polarity.'
    ],
    hi: [
      'व्यापक सबस्टेशन इंजीनियरिंग में असंतुलन, पावर फैक्टर और हार्मोनिक्स का एक साथ समाधान आवश्यक है।',
      'नेगेटिव सीक्वेंस असंतुलन से मोटर रोटर में भारी नुकसान होता है, जिससे NEMA MG-1 के तहत मोटर क्षमता घटानी पड़ती है।',
      'हार्मोनिक रेजोनेंस से बचने के लिए कैपेसिटर बैंक के साथ 7% या 14% के सीरीज डिट्यूनिंग रिएक्टर लगाना अनिवार्य है।',
      'मीटरिंग सटीकता के लिए सही पोलारिटी और CT/PT मल्टीप्लाइंग फैक्टर वाले 3-तत्व मीटर आवश्यक हैं।'
    ],
    bn: [
      'সামগ্রিক সাবস্টেশন ব্যবস্থাপনায় ভারসাম্যহীনতা, পাওয়ার ফ্যাক্টর ও হারমোনিক্সের যুগপৎ সমাধান করতে হয়।',
      'নেগেটিভ সিকোয়েন্স ভোল্টেজ মোটরের রোটরে তীব্র লস সৃষ্টি করে, ফলে NEMA MG-1 অনুযায়ী মোটরের ক্ষমতা কমাতে হয়।',
      'হারমোনিক রেজোন্যান্স ঠেকাতে ক্যাপাসিটর ব্যাংকের সাথে ৭% বা ১৪% ডিটিউন্ডিং রিঅ্যাক্টর ব্যবহার বাধ্যতামূলক।',
      'সঠিক বিলিংয়ের জন্য নির্ভুল পোলারিটি ও CT/PT গুণকযুক্ত ৩-এলিমেন্ট ডিজিটাল মিটার প্রয়োজন।'
    ]
  },
  commonMistakes: {
    en: [
      'Mistake: Installing plain power factor correction capacitors without detuning reactors in an industrial plant with VFDs, causing catastrophic capacitor explosion from harmonic resonance.',
      'Mistake: Running induction motors at 100% rated load during persistent 3% voltage unbalance, resulting in stator insulation burnout within weeks.',
      'Mistake: Calculating billing energy directly from raw meter counter displays without multiplying by the overall CT/PT factor (MF).'
    ],
    hi: [
      'त्रुटि: ड्राइव (VFD) वाले संयंत्र में बिना रिएक्टर के सीधे कैपेसिटर लगाना, जिससे हार्मोनिक रेजोनेंस से कैपेसिटर ब्लास्ट हो जाते हैं।',
      'त्रुटि: 3% वोल्टेज असंतुलन में मोटर को पूरे लोड पर चलाना, जिससे मोटर वाइंडिंग जल जाती है।',
      'त्रुटि: CT/PT गुणन कारक (MF) से गुणा किए बिना सीधे मीटर की रीडिंग से बिल बनाना।'
    ],
    bn: [
      'ভুল: ড্রাইভযুক্ত কারখানায় ডিটিউন্ডিং রিঅ্যাক্টর ছাড়া ক্যাপাসিটর লাগানো, যার ফলে রেজোন্যান্সে ক্যাপাসিটর বিস্ফোরিত হয়।',
      'ভুল: ৩% ভোল্টেজ ভারসাম্যহীনতায় মোটরকে শতভাগ লোডে চালানো, যা ওয়াইন্ডিং পুড়িয়ে ফেলে।',
      'ভুল: CT/PT মাল্টিপ্লাইং ফ্যাক্টর (MF) দিয়ে গুণ না করে সরাসরি সেকেন্ডারি মিটারের রিডিং দেখে বিদ্যুৎ বিল প্রস্তুত করা।'
    ]
  },
  keyTakeaways: {
    en: [
      'Chapter 14 equips electrical engineers with the complete analytical and practical toolkit to design, measure, and protect advanced three-phase networks.',
      'The interplay between sequence components, unbalance, harmonics, and metering forms the backbone of modern power system reliability.',
      'Substation engineers who master both mathematical fundamentals and hands-on commissioning rules ensure safe, efficient, and resilient energy delivery.'
    ],
    hi: [
      'अध्याय 14 इंजीनियरों को उन्नत थ्री-फेज नेटवर्कों के डिजाइन, मापन और सुरक्षा के लिए संपूर्ण ज्ञान प्रदान करता है।',
      'सीक्वेंस घटकों, असंतुलन, हार्मोनिक्स और मीटरिंग का परस्पर संबंध आधुनिक पावर ग्रिड की विश्वसनीयता की रीढ़ है।',
      'सिद्धांत और फील्ड नियमों दोनों में पारंगत इंजीनियर सुरक्षित और अत्यधिक कुशल विद्युत प्रणाली का निर्माण करते हैं।'
    ],
    bn: [
      'অধ্যায় ১৪ প্রকৌশলীদের উন্নত থ্রি-ফেজ সিস্টেমের ডিজাইন, পরিমাপ ও সুরক্ষার যাবতীয় তাত্ত্বিক ও ব্যবহারিক জ্ঞানে সমৃদ্ধ করে।',
      'সিকোয়েন্স উপাদান, ভারসাম্যহীনতা, হারমোনিক্স এবং মিটারিংয়ের সমন্বয়ই আধুনিক পাওয়ার সিস্টেমের প্রধান ভিত্তি।',
      'গণিত ও ব্যবহারিক উভয় ক্ষেত্রে দক্ষ প্রকৌশলীরাই একটি নিরাপদ, টেকসই ও উচ্চ ক্ষমতাসম্পন্ন বৈদ্যুতিক গ্রিড গড়ে তোলেন।'
    ]
  },
  practiceQuestions: [
    {
      id: 'pq-ch14-l10-01',
      question: {
        en: 'A factory bus has a line-to-line voltage of 415 V. A 100 kVAR capacitor bank is installed with a 7% series detuning reactor. What is the effective series resonance frequency of the combination at 50 Hz fundamental?',
        hi: '415 V बस पर 7% सीरीज डिट्यूनिंग रिएक्टर के साथ 100 kVAR कैपेसिटर बैंक लगाया गया है। 50 Hz पर इसकी प्रभावी रेजोनेंस आवृत्ति क्या होगी?',
        bn: '৪১৫ V বাসে ৭% সিরিজ ডিটিউনিং রিঅ্যাক্টর সহ ১০০ kVAR ক্যাপাসিটর ব্যাংক লাগানো হয়েছে। ৫০ Hz এ এর রেজোন্যান্স ফ্রিকোয়েন্সি কত হবে?'
      },
      hint: {
        en: 'f_res = f / √p = 50 / √0.07 = 50 / 0.2646 = 189 Hz (safely below the 5th harmonic at 250 Hz).',
        hi: 'f_res = 50 / √0.07 = 189 Hz (जो 5वें हार्मोनिक 250 Hz से नीचे है)।',
        bn: 'f_res = ৫০ / √০.০৭ = ১৮৯ Hz (যা ২৫০ Hz এর ৫ম হারমোনিক অপেক্ষা কম)।'
      }
    },
    {
      id: 'pq-ch14-l10-02',
      question: {
        en: 'State why ANSI 87T transformer differential protection relays require phase angle compensation when protecting a Delta-Star (Dyn11) step-down transformer.',
        hi: 'डेल्टा-स्टार (Dyn11) ट्रांसफार्मर की सुरक्षा करते समय ANSI 87T डिफरेंशियल रिले को फेज कोण मुआवजे की आवश्यकता क्यों होती है?',
        bn: 'ডেল্টা-স্টার (Dyn11) ট্রান্সফরমার সুরক্ষার সময় ANSI 87T ডিফারেনশিয়াল রিলেতে ফেজ অ্যাঙ্গেল ক্ষতিপূরণের প্রয়োজন হয় কেন?'
      },
      hint: {
        en: 'A Dyn11 transformer introduces an intrinsic 30° phase shift between primary line currents and secondary line currents; the relay must digitally shift CT inputs by 30° to prevent false tripping under normal load.',
        hi: 'Dyn11 ट्रांसफार्मर 30° का फेज शिफ्ट बनाता है; रिले को गलत ट्रिपिंग रोकने के लिए CT इनपुट को 30° घुमाना पड़ता है।',
        bn: 'Dyn11 ট্রান্সফরমার ৩০° ফেজ শিফট তৈরি করে; স্বাভাবিক লোডে ভুল ট্রিপিং এড়াতে রিলেকে ডিজিটালভাবে ৩০° ফেজ শিফট সমন্বয় করতে হয়।'
      }
    }
  ],
  mcqs: [
    {
      id: 'mcq-ch14-l10-01',
      question: {
        en: 'What is the primary operational hazard of installing standard power factor correction capacitor banks without series detuning reactors in an industrial facility containing variable frequency drives?',
        hi: 'VFD युक्त औद्योगिक संयंत्र में बिना सीरीज डिट्यूनिंग रिएक्टर के सीधे कैपेसिटर बैंक लगाने का मुख्य खतरा क्या है?',
        bn: 'ভেরিয়েবল ফ্রিকোয়েন্সি ড্রাইভযুক্ত কারখানায় সিরিজ ডিটিউনিং রিঅ্যাক্টর ছাড়া সাধারণ ক্যাপাসিটর ব্যাংক লাগানোর মূল বিপদ কী?'
      },
      options: [
        { en: 'The capacitor bank forms a parallel resonant circuit with the upstream transformer inductance near the 5th or 7th harmonic frequency, causing catastrophic harmonic current magnification, extreme overvoltage, and capacitor explosion', hi: 'कैपेसिटर बैंक ट्रांसफार्मर के साथ 5वें या 7वें हार्मोनिक पर पैरेलल रेजोनेंस बनाता है, जिससे भारी ओवरवोल्टेज और कैपेसिटर ब्लास्ट हो जाता है', bn: 'ক্যাপাসিটর ব্যাংকটি ট্রান্সফরমারের সাথে ৫ম বা ৭ম হারমোনিক ফ্রিকোয়েন্সিতে প্যারালাল রেজোন্যান্স তৈরি করে, ফলে মারাত্মক কারেন্ট বৃদ্ধি পেয়ে ক্যাপাসিটর বিস্ফোরিত হয়' },
        { en: 'The factory electric motors will instantly reverse their direction of rotation', hi: 'मोटरें तुरंत उल्टी दिशा में घूमने लगेंगी', bn: 'মোটরগুলি সাথে সাথে উল্টো দিকে ঘুরতে শুরু করবে' },
        { en: 'The incoming grid frequency drops permanently to 0 Hz', hi: 'ग्रिड आवृत्ति हमेशा के लिए 0 Hz हो जाएगी', bn: 'গ্রিড ফ্রিকোয়েন্সি চিরতরে ০ Hz হয়ে যাবে' },
        { en: 'The utility tariff automatically changes to residential domestic rates', hi: 'बिजली बिल घरेलू दरों पर आने लगेगा', bn: 'বিদ্যুৎ বিল স্বয়ংক্রিয়ভাবে আবাসিক হারে পরিবর্তিত হবে' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Without a detuning reactor, the capacitor capacitance resonates with system inductive reactance at f = 1/(2π√LC), typically near 250 Hz (5th harmonic). VFD harmonic currents excite this resonance, causing destructive overcurrents and explosions.',
        hi: 'बिना रिएक्टर के कैपेसिटर 250 Hz (5वें हार्मोनिक) के पास रेजोनेंस बना लेता है, जिससे अत्यधिक करंट और वोल्टेज से कैपेसिटर फट जाते हैं।',
        bn: 'রিঅ্যাক্টর না থাকলে ক্যাপাসিটর ২৫০ Hz (৫ম হারমোনিক) এর কাছাকাছি রেজোন্যান্স সৃষ্টি করে, ফলে তীব্র কারেন্ট ও ভোল্টেজে ক্যাপাসিটর পুড়ে নষ্ট হয়ে যায়।'
      }
    },
    {
      id: 'mcq-ch14-l10-02',
      question: {
        en: 'According to NEMA MG-1 standards, what operational precaution must be enforced if a three-phase induction motor is operated on an unbalanced supply with a Voltage Unbalance Factor (VUF) of 3.0%?',
        hi: 'NEMA MG-1 के अनुसार यदि 3-फेज मोटर को 3.0% वोल्टेज असंतुलन (VUF) वाली सप्लाई पर चलाया जाए, तो क्या सावधानी आवश्यक है?',
        bn: 'NEMA MG-1 মানদণ্ড অনুসারে ৩.০% ভোল্টেজ ভারসাম্যহীনতায় (VUF) থ্রি-ফেজ ইন্ডাকশন মোটর চালনার ক্ষেত্রে কোন সতর্কতা বাধ্যতামূলক?'
      },
      options: [
        { en: 'The motor must be derated to approximately 85% to 88% of its nameplate rated horsepower to prevent catastrophic winding insulation thermal failure', hi: 'मोटर को उसकी नेमप्लेट हॉर्सपावर के लगभग 85% से 88% तक डीरेट (भार कम) किया जाना चाहिए ताकि वाइंडिंग जलने से बचे', bn: 'ওয়াইন্ডিং পুড়ে যাওয়া রোধ করতে মোটরের ধারণক্ষমতা কমিয়ে নেমপ্লেট হর্সপাওয়ারের প্রায় ৮৫% থেকে ৮৮% এ ডিরেট করতে হবে' },
        { en: 'The motor should be run at double speed to cool the windings', hi: 'मोटर को दोगुनी गति से चलाना चाहिए', bn: 'মোটরকে দ্বিগুণ গতিতে চালানো উচিত' },
        { en: 'The motor requires no derating whatsoever', hi: 'किसी डीरेटिंग की आवश्यकता नहीं है', bn: 'কোনো ডিরেটিংয়ের প্রয়োজন নেই' },
        { en: 'One phase should be disconnected to make it a single-phase motor', hi: 'एक तार काटकर सिंगल-फेज बना देना चाहिए', bn: 'একটি তার বিচ্ছিন্ন করে একে সিঙ্গেল-ফেজে চালাতে হবে' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Even a 3% voltage unbalance produces 15% to 20% negative-sequence current unbalance in induction motors, causing localized rotor heating that demands a derating factor of ~0.88 under NEMA MG-1.',
        hi: '3% वोल्टेज असंतुलन से मोटर में 15-20% नेगेटिव-सीक्वेंस करंट बन जाता है जिससे रोटर बहुत गर्म हो जाता है। अतः NEMA MG-1 के तहत मोटर को 88% पर चलाना चाहिए।',
        bn: '৩% ভোল্টেজ ভারসাম্যহীনতায় মোটরে ১৫-২০% নেগেটিভ সিকোয়েন্স কারেন্ট তৈরি হয়, ফলে রোটর অতিরিক্ত উত্তপ্ত হওয়ায় NEMA MG-1 মতে মোটরের লোড ৮৮% এ নামিয়ে আনতে হয়।'
      }
    },
    {
      id: 'mcq-ch14-l10-03',
      question: {
        en: 'What is the effective series resonance frequency of a 50 Hz power factor correction capacitor bank equipped with a standard 7% series detuning reactor?',
        hi: 'मानक 7% सीरीज डिट्यूनिंग रिएक्टर से युक्त 50 Hz कैपेसिटर बैंक की प्रभावी रेजोनेंस आवृत्ति क्या होती है?',
        bn: 'একটি স্ট্যান্ডার্ড ৭% সিরিজ ডিটিউনিং রিঅ্যাক্টরযুক্ত ৫০ Hz ক্যাপাসিটর ব্যাংকের রেজোন্যান্স ফ্রিকোয়েন্সি কত?'
      },
      options: [
        { en: '189 Hz (safely below the 5th harmonic at 250 Hz)', hi: '189 Hz (5वें हार्मोनिक 250 Hz से सुरक्षित रूप से नीचे)', bn: '১৮৯ Hz (২৫০ Hz এর ৫ম হারমোনিক অপেক্ষা নিরাপদ দূরত্বে)' },
        { en: '250 Hz (exact 5th harmonic)', hi: '250 Hz (ठीक 5वां हार्मोनिक)', bn: '২৫০ Hz (ঠিক ৫ম হারমোনিক)' },
        { en: '50 Hz', hi: '50 Hz', bn: '৫০ Hz' },
        { en: '1,000 Hz', hi: '1,000 Hz', bn: '১,০০০ Hz' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'f_res = f_fund / √p = 50 / √0.07 = 50 / 0.264575 = 188.98 Hz ≈ 189 Hz. This ensures inductive behavior above 189 Hz, eliminating 5th harmonic resonance.',
        hi: 'f_res = 50 / √0.07 = 189 Hz। यह 189 Hz से ऊपर के सभी हार्मोनिक्स के लिए सिस्टम को प्रेरकीय (इंडक्टिव) बनाकर रेजोनेंस को रोकता है।',
        bn: 'f_res = ৫০ / √০.০৭ = ১৮৯ Hz। এটি ১৮৯ Hz এর উপরের সব হারমোনিক্সের জন্য সার্কিটকে ইন্ডাক্টিভ রেখে ৫ম হারমোনিক রেজোন্যান্স প্রতিরোধ করে।'
      }
    },
    {
      id: 'mcq-ch14-l10-04',
      question: {
        en: 'Which protective relay scheme (ANSI code) is universally applied to protect high-voltage power transformers against internal inter-turn and winding phase-to-phase faults?',
        hi: 'हाई-वोल्टेज पावर ट्रांसफार्मरों को आंतरिक वाइंडिंग फॉल्टों से बचाने के लिए कौन सी सुरक्षा रिले योजना (ANSI कोड) सार्वभौमिक रूप से लागू की जाती है?',
        bn: 'উচ্চ-ভোল্টেজ পাওয়ার ট্রান্সফরমারের অভ্যন্তরীণ ওয়াইন্ডিং ফল্ট সুরক্ষায় সার্বজনীনভাবে কোন রিলে স্কিম (ANSI কোড) ব্যবহৃত হয়?'
      },
      options: [
        { en: 'ANSI 87T (Transformer Percentage Differential Protection)', hi: 'ANSI 87T (ट्रांसफार्मर डिफरेंशियल प्रोटेक्शन)', bn: 'ANSI 87T (ট্রান্সফরমার ডিফারেনশিয়াল প্রোটেকশন)' },
        { en: 'ANSI 27 (Undervoltage Relay)', hi: 'ANSI 27 (अंडरवोल्टेज रिले)', bn: 'ANSI 27 (আন্ডারভোল্টেজ রিলে)' },
        { en: 'ANSI 81 (Underfrequency Relay)', hi: 'ANSI 81 (अंडरफ्रीक्वेंसी रिले)', bn: 'ANSI 81 (আন্ডারফ্রিকোয়েন্সি রিলে)' },
        { en: 'ANSI 59 (Overvoltage Relay)', hi: 'ANSI 59 (ओवरवोल्टेज रिले)', bn: 'ANSI 59 (ওভারভোল্টেজ রিলে)' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'ANSI 87T compares currents entering and leaving the transformer windings on a per-phase basis. Any internal fault creates a differential spill current that trips the breaker in under 20 milliseconds.',
        hi: 'ANSI 87T ट्रांसफार्मर में आने और जाने वाली धाराओं की तुलना करता है। आंतरिक फॉल्ट होने पर यह 20 मिलीसेकंड में ब्रेकर ट्रिप कर देता है।',
        bn: 'ANSI 87T ট্রান্সফরমারের ইনপুট ও আউটপুট কারেন্ট তুলনা করে। অভ্যন্তরীণ ত্রুটি ঘটলেই এটি ২০ মিলিকেকেন্ডের মধ্যে ব্রেকার ট্রিপ করায়।'
      }
    },
    {
      id: 'mcq-ch14-l10-05',
      question: {
        en: 'In an industrial substation with a 1000 kVA transformer, what is the maximum recommended earth pit grounding resistance to ensure proper operation of protective relays and personnel step/touch potential safety?',
        hi: 'सुरक्षा रिले के उचित संचालन और मानव सुरक्षा के लिए अधिकतम अनुमेय अर्थिंग प्रतिरोध क्या होना चाहिए?',
        bn: 'প্রোটেকশন রিলের সঠিক কার্যকারিতা এবং মানুষের নিরাপত্তার জন্য আর্থ পিটের সর্বোচ্চ অনুমোদিত রেজিস্ট্যান্স কত হওয়া উচিত?'
      },
      options: [
        { en: 'Less than 1.0 Ohm (< 1.0 Ω)', hi: '1.0 ओम से कम (< 1.0 Ω)', bn: '১.০ ওহমের কম (< ১.০ Ω)' },
        { en: 'Exactly 50 Ohms', hi: 'ठीक 50 ओम', bn: 'ঠিক ৫০ ওহম' },
        { en: 'Greater than 500 Ohms', hi: '500 ओम से अधिक', bn: '৫০০ ওহমের বেশি' },
        { en: '10,000 Ohms', hi: '10,000 ओम', bn: '১০,০০০ ওহম' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'IEEE 80 and IEEE 142 mandate that major substation grounding grid resistance must not exceed 1.0 Ω (and often < 0.5 Ω) to limit touch and step voltages during ground faults.',
        hi: 'IEEE 80 और IEEE 142 के अनुसार सबस्टेशन का अर्थिंग प्रतिरोध 1.0 ओम से कम होना चाहिए ताकि फॉल्ट के समय जमीन पर खतरनाक वोल्टेज न बने।',
        bn: 'IEEE 80 এবং IEEE 142 মানদণ্ড অনুসারে ফল্টের সময় স্পর্শ ভোল্টেজ নিরাপদ রাখতে সাবস্টেশনের আর্থ রেজিস্ট্যান্স অবশ্যই ১.০ ওহমের নিচে হতে হয়।'
      }
    },
    {
      id: 'mcq-ch14-l10-06',
      question: {
        en: 'Why do digital differential protection relays for Dyn11 distribution transformers require internal matrix phase angle compensation?',
        hi: 'Dyn11 ट्रांसफार्मर के लिए डिजिटल डिफरेंशियल रिले को आंतरिक मैट्रिक्स फेज कोण मुआवजे की आवश्यकता क्यों होती है?',
        bn: 'Dyn11 ডিস্ট্রিবিউশন ট্রান্সফরমারের জন্য ডিজিটাল ডিফারেনশিয়াল রিলেতে অভ্যন্তরীণ ফেজ অ্যাঙ্গেল ক্ষতিপূরণ কেন প্রয়োজন?'
      },
      options: [
        { en: 'Dyn11 transformers introduce a physical 30° phase lead between primary and secondary line currents; without digital mathematical compensation, this 30° mismatch would cause the relay to trip falsely under normal balanced load', hi: 'Dyn11 ट्रांसफार्मर 30° का फेज अंतर बनाता है; बिना डिजिटल सुधार के रिले सामान्य लोड पर भी फॉल्ट मानकर गलत ट्रिप कर देगी', bn: 'Dyn11 ট্রান্সফরমার প্রাইমারি ও সেকেন্ডারির মাঝে ৩০° ফেজ ব্যবধান তৈরি করে; ডিজিটাল ক্ষতিপূরণ না থাকলে স্বাভাবিক লোডেই রিলেটি ভুলবশত ট্রিপ করবে' },
        { en: 'To convert alternating current into radio waves', hi: 'एसी को रेडियो तरंगों में बदलने के लिए', bn: 'এসি কে রেডিও তরঙ্গে রূপান্তর করতে' },
        { en: 'To increase the grid voltage by 173%', hi: 'वोल्टेज 173% बढ़ाने के लिए', bn: 'ভোল্টেজ ১৭৩% বৃদ্ধি করতে' },
        { en: 'Because differential relays only work on direct current', hi: 'क्योंकि डिफरेंशियल रिले केवल डीसी पर काम करते हैं', bn: 'কারণ ডিফারেনশিয়াল রিলে কেবল ডিসিতে চলে' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'A Dyn11 transformer winding produces a 30° phase displacement (secondary leads primary by 30°). The digital relay numerically transforms the CT samples to align both sides to the same phase angle before performing differential subtraction.',
        hi: 'Dyn11 में 30° का कलांतर होता है। डिजिटल रिले CT से आने वाले करंट के कोण को बराबर करती है ताकि सामान्य स्थिति में दोनों का अंतर शून्य रहे।',
        bn: 'Dyn11 এ ৩০° ফেজ শিফট থাকে। ডিজিটাল রিলে গাণিতিকভাবে উভয় দিকের কারেন্টের ফেজ অ্যাঙ্গেল মিলিয়ে নেয় যেন স্বাভাবিক অবস্থায় কোনো কারেন্ট পার্থক্য না থাকে।'
      }
    },
    {
      id: 'mcq-ch14-l10-07',
      question: {
        en: 'An industrial plant consumes 800 kW at 0.707 lagging power factor. How much active power P is actually saved or reduced by installing a 400 kVAR capacitor bank?',
        hi: 'एक प्लांट 0.707 लैगिंग PF पर 800 kW बिजली लेता है। 400 kVAR कैपेसिटर लगाने से वास्तविक सक्रिय शक्ति P में कितनी बचत होगी?',
        bn: 'একটি কারখানা ০.৭০৭ ল্যাগিং PF এ ৮০০ kW বিদ্যুৎ খরচ করছে। ৪০০ kVAR ক্যাপাসিটর ব্যাংক বসালে মূল সক্রিয় ক্ষমতা P কতটুকু হ্রাস পাবে?'
      },
      options: [
        { en: '0 kW active power saved at the load (capacitors supply reactive power Q, reducing total kVA demand and upstream cable I²R losses, but the motor mechanical shaft load still requires 800 kW)', hi: 'लोड पर 0 kW सक्रिय शक्ति बचेगी (कैपेसिटर केवल रिएक्टिव शक्ति Q की भरपाई करते हैं जिससे kVA और लाइन हीटिंग घटती है, लेकिन मोटरों को अभी भी 800 kW चाहिए)', bn: 'লোড প্রান্তে ০ kW সক্রিয় ক্ষমতা কমবে (ক্যাপাসিটর কেবল রিঅ্যাক্টিভ পাওয়ার Q সরবরাহ করে kVA চাহিদা ও তারের উত্তাপ কমায়, কিন্তু মোটরের কাজের জন্য ৮০০ kW ই প্রয়োজন)' },
        { en: '400 kW', hi: '400 kW', bn: '৪০০ kW' },
        { en: '800 kW (100% savings)', hi: '800 kW (100% बचत)', bn: '৮০০ kW (১০০% সাশ্রয়)' },
        { en: '282.8 kW', hi: '282.8 kW', bn: '২৮২.৮ kW' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'A common misconception is that capacitors reduce active power (kW). Capacitors provide reactive power (kVAR), which reduces apparent power (kVA) and line current, lowering utility demand charges and line losses, but the load\'s real energy demand P remains 800 kW.',
        hi: 'कैपेसिटर सक्रिय शक्ति (kW) को कम नहीं करते, वे केवल रिएक्टिव शक्ति (kVAR) देते हैं जिससे कुल kVA और लाइन नुकसान कम होता है।',
        bn: 'ক্যাপাসিটর সক্রিয় ক্ষমতা (kW) কমায় না, এটি কেবল রিঅ্যাক্টিভ পাওয়ার (kVAR) সরবরাহ করে মোট kVA ও লাইনের অপচয় কমায়।'
      }
    },
    {
      id: 'mcq-ch14-l10-08',
      question: {
        en: 'What is the ultimate financial and operational benefit of maintaining three-phase system balance, high power factor (≥ 0.98), and low harmonic distortion (THD < 5%) in an industrial plant?',
        hi: 'एक औद्योगिक संयंत्र में 3-फेज संतुलन, उच्च पावर फैक्टर (≥ 0.98) और कम हार्मोनिक्स (THD < 5%) बनाए रखने का अंतिम वित्तीय और परिचालन लाभ क्या है?',
        bn: 'একটি শিল্প কারখানায় ৩-ফেজ ভারসাম্য, উচ্চ পাওয়ার ফ্যাক্টর (≥ ০.৯৮) এবং নিম্ন হারমোনিক্স (THD < ৫%) বজায় রাখার মূল আর্থিক ও পরিচালন সুবিধা কী?'
      },
      options: [
        { en: 'Elimination of utility tariff penalties, maximum equipment lifespan, minimized transformer and cable I²R losses, prevention of motor burnout, and uninterrupted production uptime', hi: 'बिजली कंपनी के जुर्माने की समाप्ति, उपकरणों का अधिकतम जीवन, तारों और ट्रांसफार्मर में बिजली नुकसान में कमी, मोटर जलने से बचाव और निर्बाध उत्पादन', bn: 'বিদ্যুৎ সংস্থার জরিমানা থেকে মুক্তি, যন্ত্রপাতির দীর্ঘস্থায়ী আয়ু, তার ও ট্রান্সফরমারের বিদ্যুৎ অপচয় হ্রাস, মোটর পুড়ে যাওয়া রোধ এবং নিরবচ্ছিন্ন উৎপাদন বজায় থাকা' },
        { en: 'The facility can run with zero electricity cost permanently', hi: 'बिजली का बिल शून्य हो जाता है', bn: 'বিদ্যুৎ বিল সম্পূর্ণ বিনামূল্যে হয়ে যায়' },
        { en: 'The factory can operate without any circuit breakers or fuses', hi: 'बिना ब्रेकर या फ्यूज के फैक्ट्री चल सकती है', bn: 'কোনো সার্কিট ব্রেকার বা ফিউজ ছাড়াই কারখানা চালানো যায়' },
        { en: 'The grid voltage rises to 1,000,000 Volts', hi: 'वोल्टेज 10 लाख वोल्ट हो जाता है', bn: 'ভোল্টেজ ১০ লক্ষ ভোল্টে উন্নীত হয়' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Power quality engineering eliminates penalty billing, prevents thermal breakdowns, improves system energy efficiency, and protects industrial plant investments.',
        hi: 'पावर क्वालिटी इंजीनियरिंग जुर्माने से बचाती है, उपकरणों की रक्षा करती है और बिजली की भारी बचत सुनिश्चित करती है।',
        bn: 'পাওয়ার কোয়ালিটি ইঞ্জিনিয়ারিং জরিমানা রোধ করে, যন্ত্রপাতির সুরক্ষা দেয় এবং বিদ্যুৎ দক্ষতার সর্বোচ্চ নিশ্চয়তা প্রদান করে।'
      }
    }
  ]
};

// Canonical export alias for backward compatibility and registry access
export const LESSON_INDUSTRIAL_SUBSTATION_POWER_STUDIO = LESSON_THREE_PHASE_ENGINEERING_CAPSTONE;
