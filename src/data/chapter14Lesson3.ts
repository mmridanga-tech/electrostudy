import { Lesson } from '../types';

export const LESSON_UNBALANCED_THREE_PHASE_LOADS: Lesson = {
  id: 'lsn-ch14-unbalanced-three-phase-load-analysis',
  topicId: 'tp-unbalanced-three-phase-loads',
  chapterId: 'ch-three-phase',
  order: 3,
  title: {
    en: 'Unbalanced Three-Phase Loads & Neutral Displacement',
    hi: 'असंतुलित थ्री-फेज लोड एवं न्यूट्रल विस्थापन',
    bn: 'ভারসাম্যহীন থ্রি-ফেজ লোড ও নিউট্রাল সরণ'
  },
  description: {
    en: 'Master rigorous mesh and nodal analysis of unbalanced three-phase systems. Calculate branch phase currents, line conductor currents, complex neutral return current in 4-wire star loads, mesh delta branch currents, and aggregate active and reactive power consumption under severe phase impedance asymmetry.',
    hi: 'असंतुलित थ्री-फेज प्रणालियों के सटीक मेश और नोडल विश्लेषण का अध्ययन करें। 4-तार स्टार लोड में शाखा फेज धाराएं, लाइन चालक धाराएं, सम्मिश्र न्यूट्रल धारा, डेल्टा शाखा धाराएं और गंभीर प्रतिबाधा असंतुलन के तहत कुल सक्रिय व प्रतिघाती शक्ति की गणना करें।',
    bn: 'ভারসাম্যহীন থ্রি-ফেজ সিস্টেমের মেশ ও নোডাল বিশ্লেষণ পুঙ্খানুপুঙ্খভাবে আয়ত্ত করুন। ৪-তার স্টার লোডে ফেজ কারেন্ট, লাইন কারেন্ট, জটিল নিউট্রাল রিটার্ন কারেন্ট, ডেল্টা লুপ কারেন্ট এবং গুরুতর অসম ইম্পিডেন্সে মোট সক্রিয় ও প্রতিক্রিয়াশীল শক্তির হিসাব সম্পন্ন করুন।'
  },
  estimatedMinutes: 45,
  easyExplanation: {
    en: 'In an ideal three-phase world, all three phases draw identical currents and cancel each other out completely in the neutral wire (In = 0). But in real buildings, Phase A might feed a commercial kitchen, Phase B might power office computers, and Phase C might supply elevator motors. Because each phase has a different impedance, the currents are unequal in magnitude and misaligned in angle. In a four-wire star system, the difference spills directly into the neutral wire. In an unbalanced delta system, there is no neutral wire, but the three line currents become wildly unequal, though their sum still strictly equals zero according to Kirchhoff\'s Current Law.',
    hi: 'आदर्श स्थिति में तीनों फेजों की धारा समान होती है और न्यूट्रल में करंट शून्य होता है। लेकिन वास्तविक भवनों में, फेज A में रसोई, फेज B में कंप्यूटर और फेज C में लिफ्ट जुड़ी हो सकती है। अलग-अलग लोड होने के कारण धाराएं असमान हो जाती हैं। 4-तार स्टार में, बचा हुआ करंट सीधे न्यूट्रल तार से वापस जाता है। डेल्टा में कोई न्यूट्रल नहीं होता, लेकिन लाइन धाराएं काफी असमान हो जाती हैं, यद्यपि KCL के अनुसार तीनों लाइन धाराओं का योग हमेशा शून्य रहता है।',
    bn: 'আদর্শ অবস্থায় তিনটি ফেজেই সমান কারেন্ট থাকে এবং নিউট্রালে কোনো কারেন্ট থাকে না (In = ০)। কিন্তু বাস্তবে ফেজ A তে হয়তো রান্নাঘরের লোড, ফেজ B তে কম্পিউটার এবং ফেজ C তে এসি বা মোটর চলতে পারে। ফলে প্রতিটি ফেজে কারেন্ট অসমান হয়। ৪-তার স্টার সিস্টেমে এই অতিরিক্ত কারেন্ট নিউট্রাল তার দিয়ে ফিরে যায়। ডেল্টায় কোনো নিউট্রাল তার থাকে না, তবে লাইন কারেন্টগুলি মারাত্মক অসমান হয়ে পড়ে, যদিও KCL নিয়ম অনুসারে তিনটি লাইনের কারেন্টের যোগফল সর্বদা শূন্য হয়।'
  },
  detailedExplanation: {
    en: 'When branch impedances Za, Zb, and Zc are unequal, the system is unbalanced. Analysis differs between Star and Delta configurations:\n\n1. Unbalanced Four-Wire Star Load with Solid Neutral (Zn ≈ 0):\n   Because the neutral point of the load is solidly bonded to the source neutral, the voltage across each phase of the load remains firmly clamped to the respective source phase voltage:\n   • Ia = Van / Za\n   • Ib = Vbn / Zb\n   • Ic = Vcn / Zc\n   Applying Kirchhoff\'s Current Law at the star neutral junction N:\n   In + Ia + Ib + Ic = 0  ==>  In = -(Ia + Ib + Ic)\n   The neutral conductor carries the phasor sum of the three phase currents. Under unbalanced loading, In is non-zero and can even exceed the individual line currents if severe harmonic or phase displacement exists.\n\n2. Unbalanced Delta Connected Load:\n   In a delta configuration, each branch impedance connects directly across two line conductors:\n   • Iab = Vab / Zab\n   • Ibc = Vbc / Zbc\n   • Ica = Vca / Zca\n   Applying KCL at vertices A, B, and C gives the line currents:\n   • IA = Iab - Ica\n   • IB = Ibc - Iab\n   • IC = Ica - Ibc\n   Note that adding the three line equations yields:\n   IA + IB + IC = (Iab - Ica) + (Ibc - Iab) + (Ica - Ibc) ≡ 0 identically!\n   Thus, in any three-wire delta network (balanced or unbalanced), the sum of the three line currents entering the load is ALWAYS zero.\n\n3. Power in Unbalanced Systems:\n   Total Active Power P = Pa + Pb + Pc = |Va|·|Ia|·cos(ϕa) + |Vb|·|Ib|·cos(ϕb) + |Vc|·|Ic|·cos(ϕc)\n   Total Reactive Power Q = Qa + Qb + Qc = |Va|·|Ia|·sin(ϕa) + |Vb|·|Ib|·sin(ϕb) + |Vc|·|Ic|·sin(ϕc)\n   Total Complex Power S = Sa + Sb + Sc = P + jQ, with |S| = √(P² + Q²).\n   CAUTION: The textbook balanced formula P = √3·VL·IL·cos(ϕ) CANNOT be used when loads are unbalanced!',
    hi: 'जब शाखा प्रतिबाधाएं Za, Zb, Zc असमान होती हैं:\n\n1. 4-तार स्टार लोड (ठोस न्यूट्रल Zn ≈ 0):\n   फेज धाराएं: Ia = Van/Za, Ib = Vbn/Zb, Ic = Vcn/Zc। न्यूट्रल धारा In = -(Ia + Ib + Ic)।\n2. असंतुलित डेल्टा लोड:\n   डेल्टा फेज धाराएं: Iab = Vab/Zab, Ibc = Vbc/Zbc, Ica = Vca/Zca।\n   लाइन धाराएं: IA = Iab - Ica, IB = Ibc - Iab, IC = Ica - Ibc। यहां IA + IB + IC = 0 हमेशा सत्य रहता है।\n3. असंतुलित शक्ति गणना:\n   कुल सक्रिय शक्ति P = Pa + Pb + Pc और कुल प्रतिघाती शक्ति Q = Qa + Qb + Qc होती है। असंतुलित प्रणाली में सूत्र P = √3·VL·IL·cos(ϕ) का उपयोग कभी न करें।',
    bn: 'যখন শাখা ইম্পিডেন্স Za, Zb, Zc অসমান হয়:\n\n১. ৪-তার স্টার লোড (সলিড নিউট্রাল): ফেজ কারেন্টগুলি হলো Ia = Van/Za, Ib = Vbn/Zb, Ic = Vcn/Zc। নিউট্রাল কারেন্ট In = -(Ia + Ib + Ic)।\n২. ভারসাম্যহীন ডেল্টা লোড: শাখা কারেন্ট Iab = Vab/Zab, Ibc = Vbc/Zbc, Ica = Vca/Zca। লাইন কারেন্ট IA = Iab - Ica, IB = Ibc - Iab, IC = Ica - Ibc। ডেল্টায় সর্বদা IA + IB + IC = 0 হয়।\n৩. ক্ষমতা গণনা: মোট ক্ষমতা প্রতিটি ফেজের আলাদা আলাদা ক্ষমতার সমষ্টি: P = Pa + Pb + Pc এবং Q = Qa + Qb + Qc। ভারসাম্যহীন অবস্থায় P = √3·VL·IL·cos(ϕ) সূত্র প্রযোজ্য নয়।'
  },
  formulas: [
    {
      id: 'f-star-neutral-kcl',
      symbol: 'I_n',
      expression: 'I_n = -(I_a + I_b + I_c) = -\\left( \\frac{V_{an}}{Z_a} + \\frac{V_{bn}}{Z_b} + \\frac{V_{cn}}{Z_c} \\right)',
      title: {
        en: 'Neutral Return Current in 4-Wire Star',
        hi: '4-तार स्टार में न्यूट्रल वापसी धारा',
        bn: '৪-তার স্টারে নিউট্রাল রিটার্ন কারেন্ট'
      },
      description: {
        en: 'Computes the vector neutral return current from individual phase load currents in a four-wire system.',
        hi: '4-तार प्रणाली में अलग-अलग फेज धाराओं से न्यूट्रल वापसी धारा की गणना।',
        bn: '৪-তার সিস্টেমে স্বতন্ত্র ফেজ কারেন্ট থেকে নিউট্রাল কারেন্ট হিসাবের সূত্র।'
      },
      variables: [
        { symbol: 'I_n', name: { en: 'Neutral Current Phasor (A)', hi: 'न्यूट्रल धारा फेजर (A)', bn: 'নিউট্রাল কারেন্ট ফেজর (A)' } },
        { symbol: 'Z_a, Z_b, Z_c', name: { en: 'Phase Load Impedances (Ω)', hi: 'फेज लोड प्रतिबाधाएं (Ω)', bn: 'ফেজ লোড ইম্পিডেন্স (Ω)' } }
      ]
    },
    {
      id: 'f-delta-line-currents',
      symbol: 'I_A, I_B, I_C',
      expression: 'I_A = I_{ab} - I_{ca}, \\quad I_B = I_{bc} - I_{ab}, \\quad I_C = I_{ca} - I_{bc}',
      title: {
        en: 'Delta Load Line-Phase KCL Relations',
        hi: 'डेल्टा लोड लाइन-फेज KCL संबंध',
        bn: 'ডেল্টা লোড লাইন-ফেজ KCL সম্পর্ক'
      },
      description: {
        en: 'Calculates external line currents from internal delta branch phase currents using nodal Kirchhoff equations.',
        hi: 'नोडल किरचॉफ समीकरणों का उपयोग करके आंतरिक डेल्टा शाखा धाराओं से बाहरी लाइन धाराएं ज्ञात करता है।',
        bn: 'নোডাল কার্শফ সমীকরণ ব্যবহার করে অভ্যন্তরীণ ডেল্টা শাখা কারেন্ট থেকে বাহ্যিক লাইন কারেন্ট গণনা করে।'
      },
      variables: [
        { symbol: 'I_{ab}', name: { en: 'Phase current flowing from A to B (A)', hi: 'A से B तक प्रवाहित फेज धारा (A)', bn: 'A থেকে B ফেজ কারেন্ট (A)' } },
        { symbol: 'I_A', name: { en: 'Line A conductor current (A)', hi: 'लाइन A चालक धारा (A)', bn: 'লাইন A পরিবাহী কারেন্ট (A)' } }
      ]
    },
    {
      id: 'f-total-unbalanced-power',
      symbol: 'P_{total}',
      expression: 'P_{total} = \\sum_{k=a,b,c} \\text{Re}\\{V_k \\cdot I_k^*\\} = P_a + P_b + P_c',
      title: {
        en: 'Total Active Power in Unbalanced Network',
        hi: 'असंतुलित नेटवर्क में कुल सक्रिय शक्ति',
        bn: 'ভারসাম্যহীন নেটওয়ার্কে মোট সক্রিয় ক্ষমতা'
      },
      description: {
        en: 'Exact sum of individual per-phase real powers in an asymmetrical three-phase system.',
        hi: 'असममितीय थ्री-फेज प्रणाली में अलग-अलग फेजों की वास्तविक शक्ति का सटीक योग।',
        bn: 'অসম থ্রি-ফেজ সিস্টেমে স্বতন্ত্র ফেজের বাস্তব ক্ষমতার সুনির্দিষ্ট যোগফল।'
      },
      variables: [
        { symbol: 'P_{total}', name: { en: 'Total Real Power (W or kW)', hi: 'कुल वास्तविक शक्ति (W / kW)', bn: 'মোট বাস্তব ক্ষমতা (W / kW)' } }
      ]
    }
  ],
  diagrams: [
    {
      id: 'diag-ch14-unbalanced-loads',
      title: {
        en: 'Unbalanced Star & Delta Load Topology and Current Flows',
        hi: 'असंतुलित स्टार एवं डेल्टा लोड टोपोलॉजी एवं धारा प्रवाह',
        bn: 'ভারসাম্যহীন স্টার ও ডেল্টা লোড টপোলজি ও কারেন্ট প্রবাহ'
      },
      caption: {
        en: 'Circuit schematic displaying unbalanced 4-wire star load with neutral return current In, and unbalanced delta load showing branch vs line current vectors.',
        hi: 'न्यूट्रल धारा In वाले असंतुलित 4-तार स्टार और डेल्टा लोड का परिपथ आरेख।',
        bn: 'নিউট্রাল কারেন্ট In সহ ভারসাম্যহীন ৪-তার স্টার এবং ডেল্টা লোডের সার্কিট ডায়াগ্রাম।'
      },
      svgType: 'sch-ch14-unbalanced-load'
    }
  ],
  sections: [
    {
      id: 'sec-ch14-neutral-sizing-dangers',
      title: {
        en: 'Neutral Conductor Sizing & Fire Hazards in Unbalanced Commercial Installations',
        hi: 'न्यूट्रल चालक का आकार एवं असंतुलित प्रतिष्ठानों में आग का खतरा',
        bn: 'নিউট্রাল তারের সাইজিং ও ভারসাম্যহীন ইনস্টলেশনে অগ্নিকাণ্ডের ঝুঁকি'
      },
      content: {
        en: 'In legacy electrical codes, neutral conductors were often sized at 50% of the phase conductor cross-section based on the assumption of balanced linear motor loads. However, in modern commercial buildings with large single-phase server racks, variable lighting loads, and EV chargers, neutral currents routinely exceed the line currents!\n\nWhen three single-phase loads are severely unbalanced, In can reach 100% to 120% of phase current even with linear loads. Furthermore, undersized neutrals suffer severe I²R overheating, insulation breakdown, and can melt open at terminal lugs. Loss of the neutral conductor creates catastrophic "floating neutral" overvoltages that destroy sensitive equipment. For this reason, modern standards (NEC 220.61 and IEC 60364-5-52) mandate 100% or 200% neutral sizing for high-unbalance and non-linear installations.',
        hi: 'पुराने नियमों में न्यूट्रल तार को फेज तार से आधा (50%) रखा जाता था। लेकिन आधुनिक भवनों में कंप्यूटर, सर्वर और सिंगल-फेज लोड के भारी असंतुलन के कारण न्यूट्रल में लाइन धारा से भी अधिक करंट बह सकता है। यदि न्यूट्रल तार पतला हो, तो वह अत्यधिक गर्म होकर जल सकता है। न्यूट्रल के कट जाने पर "फ्लोटिंग न्यूट्रल" की खतरनाक स्थिति बन जाती है जिससे उपकरण जल जाते हैं। इसलिए आधुनिक कोड में न्यूट्रल को 100% या 200% आकार का बनाना अनिवार्य है।',
        bn: 'পুরানো নিয়মে নিউট্রাল তারকে ফেজ তারের অর্ধেক মাপে রাখা হতো। কিন্তু আধুনিক ভবনে কম্পিউটার, সার্ভার ও অসম লোডের কারণে নিউট্রাল কারেন্ট ফেজ কারেন্টকেও ছাড়িয়ে যেতে পারে। সরু নিউট্রাল তার অতিরিক্ত গরম হয়ে পুড়ে যেতে পারে। নিউট্রাল তার বিচ্ছিন্ন হলে "ভাসমান নিউট্রাল" তৈরি হয় যা বৈদ্যুতিক সরঞ্জাম পুড়িয়ে ফেলে। তাই আধুনিক নিয়মে নিউট্রালকে ১০০% বা ২০০% ক্ষমতার রাখা বাধ্যতামূলক।'
      }
    }
  ],
  workedExamples: [
    {
      id: 'we-ch14-l03-01',
      title: {
        en: 'Neutral Current Computation in Unbalanced 4-Wire Star System',
        hi: 'असंतुलित 4-तार स्टार प्रणाली में न्यूट्रल धारा की गणना',
        bn: 'ভারসাম্যহীন ৪-তার স্টার সিস্টেমে নিউট্রাল কারেন্ট গণনা'
      },
      problem: {
        en: 'A 400 V (line-to-line), 50 Hz 4-wire star supply feeds an unbalanced resistive load:\nRa = 23 Ω, Rb = 46 Ω, Rc = 23 Ω.\nAssume positive sequence with Van as reference (Van = 230.9 ∠0° V, Vbn = 230.9 ∠-120° V, Vcn = 230.9 ∠120° V). Calculate: (a) Phase currents Ia, Ib, Ic, (b) Neutral conductor current In, and (c) Total power consumed.',
        hi: 'एक 400 V, 50 Hz 4-तार स्टार सप्लाई एक असंतुलित प्रतिरोधक लोड Ra = 23 Ω, Rb = 46 Ω, Rc = 23 Ω को ऊर्जा देती है। (a) फेज धाराएं, (b) न्यूट्रल धारा In, और (c) कुल शक्ति की गणना करें।',
        bn: 'একটি ৪০০ V, ৫০ Hz ৪-তার স্টার সরবরাহ একটি ভারসাম্যহীন লোড Ra = ২৩ Ω, Rb = ৪৬ Ω, Rc = ২৩ Ω এ যুক্ত। (a) ফেজ কারেন্ট, (b) নিউট্রাল কারেন্ট In, এবং (c) মোট ক্ষমতা নির্ণয় করুন।'
      },
      solutionSteps: [
        {
          stepNumber: 1,
          description: {
            en: 'Calculate individual phase currents:\nIa = 230.9 ∠0° / 23 = 10.04 ∠0° A = 10.04 + j0 A\nIb = 230.9 ∠-120° / 46 = 5.02 ∠-120° A = 5.02·(-0.5 - j0.866) = -2.51 - j4.35 A\nIc = 230.9 ∠120° / 23 = 10.04 ∠120° A = 10.04·(-0.5 + j0.866) = -5.02 + j8.69 A.',
            hi: 'फेज धाराएं निकालें: Ia = 10.04 + j0 A, Ib = -2.51 - j4.35 A, Ic = -5.02 + j8.69 A।',
            bn: 'ফেজ কারেন্ট বের করুন: Ia = ১০.০৪ + j০ A, Ib = -২.৫১ - j৪.৩৫ A, Ic = -৫.০২ + j৮.৬৯ A।'
          }
        },
        {
          stepNumber: 2,
          description: {
            en: 'Compute sum of phase currents (Ia + Ib + Ic):\nReal part = 10.04 - 2.51 - 5.02 = +2.51 A\nImaginary part = 0.0 - 4.35 + 8.69 = +4.34 A\nSum = 2.51 + j4.34 A = 5.01 ∠60° A.',
            hi: 'फेज धाराओं का योग करें: Sum = 2.51 + j4.34 A = 5.01 ∠60° A।',
            bn: 'ফেজ কারেন্টগুলির যোগফল: Sum = ২.৫১ + j৪.৩৪ A = ৫.০১ ∠৬০° A।'
          }
        },
        {
          stepNumber: 3,
          description: {
            en: 'Compute neutral current In:\nIn = -(Ia + Ib + Ic) = -(2.51 + j4.34) = -2.51 - j4.34 A = 5.01 ∠-120° A. Magnitude |In| = 5.01 A.',
            hi: 'न्यूट्रल धारा In निकालें: In = -(Ia + Ib + Ic) = 5.01 ∠-120° A (मान 5.01 A)।',
            bn: 'নিউট্রাল কারেন্ট: In = -(Ia + Ib + Ic) = ৫.০১ ∠-১২০° A (মান ৫.০১ A)।'
          }
        },
        {
          stepNumber: 4,
          description: {
            en: 'Total Active Power:\nPa = Ia²·Ra = (10.04)² · 23 = 2,318 W\nPb = Ib²·Rb = (5.02)² · 46 = 1,159 W\nPc = Ic²·Rc = (10.04)² · 23 = 2,318 W\nP_total = 2318 + 1159 + 2318 = 5,795 W (≈ 5.80 kW).',
            hi: 'कुल शक्ति: Pa = 2318 W, Pb = 1159 W, Pc = 2318 W। कुल P = 5,795 W (5.80 kW)।',
            bn: 'মোট ক্ষমতা: Pa = ২৩১৮ W, Pb = ১১৫৯ W, Pc = ২৩১৮ W। মোট P = ৫,৭৯৫ W (৫.৮০ kW)।'
          }
        }
      ]
    },
    {
      id: 'we-ch14-l03-02',
      title: {
        en: 'Unbalanced Delta-Connected Load Line Currents & Power Calculation',
        hi: 'असंतुलित डेल्टा-कनेक्टेड लोड लाइन धाराएं एवं शक्ति गणना',
        bn: 'ভারসাম্যহীন ডেল্টা-সংযুক্ত লোডের লাইন কারেন্ট ও ক্ষমতা হিসাব'
      },
      problem: {
        en: 'An unbalanced delta load is connected across a 400 V, 50 Hz, 3-phase supply (sequence ABC, with line voltages Vab = 400 ∠0° V, Vbc = 400 ∠-120° V, Vca = 400 ∠120° V). The branch impedances are Zab = 20 ∠0° Ω, Zbc = 20 ∠30° Ω, and Zca = 20 ∠-30° Ω. Determine: (a) Delta phase currents Iab, Ibc, Ica, (b) Line current IA, and (c) Total active power consumption P.',
        hi: '400 V, 50 Hz आपूर्ति से जुड़ा एक असंतुलित डेल्टा लोड (Vab = 400 ∠0°, Vbc = 400 ∠-120°, Vca = 400 ∠120° V) है। प्रतिबाधाएं हैं: Zab = 20 ∠0° Ω, Zbc = 20 ∠30° Ω, Zca = 20 ∠-30° Ω। ज्ञात करें: (a) डेल्टा धाराएं Iab, Ibc, Ica, (b) लाइन धारा IA, और (c) कुल सक्रिय शक्ति P।',
        bn: '৪০০ V, ৫০ Hz সাপ্লাইয়ে একটি ভারসাম্যহীন ডেল্টা লোড যুক্ত (Vab = 400 ∠0°, Vbc = 400 ∠-120°, Vca = 400 ∠120° V)। ইম্পিডেন্সগুলি: Zab = 20 ∠0° Ω, Zbc = 20 ∠30° Ω, Zca = 20 ∠-30° Ω। নির্ণয় করুন: (a) ফেজ কারেন্ট Iab, Ibc, Ica, (b) লাইন কারেন্ট IA, এবং (c) মোট সক্রিয় ক্ষমতা P।'
      },
      solutionSteps: [
        {
          stepNumber: 1,
          description: {
            en: 'Compute branch delta phase currents:\nIab = Vab / Zab = 400 ∠0° / 20 ∠0° = 20.0 ∠0° A = 20.0 + j0 A\nIbc = Vbc / Zbc = 400 ∠-120° / 20 ∠30° = 20.0 ∠-150° A = -17.32 - j10.0 A\nIca = Vca / Zca = 400 ∠120° / 20 ∠-30° = 20.0 ∠150° A = -17.32 + j10.0 A.',
            hi: 'शाखा धाराएं निकालें: Iab = 20.0 ∠0° A, Ibc = 20.0 ∠-150° A, Ica = 20.0 ∠150° A।',
            bn: 'শাখা কারেন্ট নির্ণয়: Iab = ২০.০ ∠০° A, Ibc = ২০.০ ∠-১৫০° A, Ica = ২০.০ ∠১৫০° A।'
          }
        },
        {
          stepNumber: 2,
          description: {
            en: 'Compute Line Current IA using KCL at node A (IA = Iab - Ica):\nIA = (20.0 + j0) - (-17.32 + j10.0) = (20.0 + 17.32) - j10.0 = 37.32 - j10.0 A.\nMagnitude |IA| = √(37.32² + (-10.0)²) = √(1392.8 + 100) = √1492.8 = 38.64 A (angle = -14.99°).',
            hi: 'नोड A पर लाइन धारा IA = Iab - Ica = 37.32 - j10.0 A (मान = 38.64 A)।',
            bn: 'নোড A তে লাইন কারেন্ট IA = Iab - Ica = ৩৭.৩২ - j১০.০ A (মান = ৩৮.৬৪ A)।'
          }
        },
        {
          stepNumber: 3,
          description: {
            en: 'Compute active power per branch:\nPab = |Vab|·|Iab|·cos(0°) = 400 · 20 · 1.0 = 8,000 W\nPbc = |Vbc|·|Ibc|·cos(30°) = 400 · 20 · 0.8660 = 6,928 W\nPca = |Vca|·|Ica|·cos(-30°) = 400 · 20 · 0.8660 = 6,928 W.',
            hi: 'प्रत्येक शाखा की सक्रिय शक्ति: Pab = 8,000 W, Pbc = 6,928 W, Pca = 6,928 W।',
            bn: 'প্রতি শাখার বাস্তব ক্ষমতা: Pab = ৮,০০০ W, Pbc = ৬,৯২৮ W, Pca = ৬,৯২৮ W।'
          }
        },
        {
          stepNumber: 4,
          description: {
            en: 'Total Active Power P = Pab + Pbc + Pca = 8,000 + 6,928 + 6,928 = 21,856 W ≈ 21.86 kW.',
            hi: 'कुल सक्रिय शक्ति P = 8000 + 6928 + 6928 = 21,856 W (21.86 kW)।',
            bn: 'মোট সক্রিয় ক্ষমতা P = ৮০০০ + ৬৯২৮ + ৬৯২৮ = ২১,৮৫৬ W (২১.৮৬ kW)।'
          }
        }
      ]
    }
  ],
  importantPoints: {
    en: [
      'In a 4-wire star load with solidly grounded neutral, phase voltages remain fixed regardless of impedance imbalance.',
      'The neutral current in an unbalanced 4-wire star load is the phasor sum of the three phase currents: In = -(Ia + Ib + Ic).',
      'In any delta load (balanced or unbalanced), the sum of the line currents is always identically zero: IA + IB + IC = 0.',
      'Never use P = √3·VL·IL·cos(ϕ) for unbalanced loads; compute per-phase powers and add them algebraically: P = Pa + Pb + Pc.'
    ],
    hi: [
      'ठोस ग्राउंडेड न्यूट्रल वाले 4-तार स्टार लोड में लोड असंतुलन के बावजूद फेज वोल्टेज स्थिर रहते हैं।',
      'असंतुलित 4-तार स्टार लोड में न्यूट्रल धारा तीनों फेज धाराओं का सदिश योग होती है: In = -(Ia + Ib + Ic)।',
      'डेल्टा लोड में लाइन धाराओं का योग हमेशा शून्य होता है: IA + IB + IC = 0।',
      'असंतुलित भार के लिए P = √3·VL·IL·cos(ϕ) का उपयोग न करें; प्रत्येक फेज की अलग शक्ति जोड़ें: P = Pa + Pb + Pc।'
    ],
    bn: [
      'সলিড গ্রাউন্ডেড ৪-তার স্টার লোডে ভারসাম্যহীনতা সত্ত্বেও প্রতিটি ফেজের ভোল্টেজ স্থির থাকে।',
      'ভারসাম্যহীন ৪-তার স্টারে নিউট্রাল কারেন্ট হলো তিনটি ফেজ কারেন্টের ভেক্টর যোগফল: In = -(Ia + Ib + Ic)।',
      'যেকোনো ডেল্টা লোডে লাইন কারেন্টগুলির সমষ্টি সর্বদা শূন্য হয়: IA + IB + IC = 0।',
      'ভারসাম্যহীন লোডে কখনোই P = √3·VL·IL·cos(ϕ) ব্যবহার করবেন না; প্রতিটি ফেজের ক্ষমতা আলাদাভাবে যোগ করুন।'
    ]
  },
  commonMistakes: {
    en: [
      'Mistake: Adding phase currents arithmetically to find neutral current (e.g., In = 10 + 5 + 10 = 25 A). Correction: Currents are phasors separated by 120°; you must add real and imaginary components vectorially.',
      'Mistake: Believing that an unbalanced delta load can have a non-zero line current sum. Correction: IA + IB + IC = 0 is an absolute mathematical identity enforced by KCL at the vertices.',
      'Mistake: Calculating neutral conductor size purely based on average phase load. Correction: Neutral conductors must be sized for maximum expected unbalance and triplen harmonic stacking.'
    ],
    hi: [
      'त्रुटि: न्यूट्रल धारा निकालने के लिए फेज धाराओं को साधारण जोड़ना (जैसे 10 + 5 + 10 = 25 A)। सुधार: धाराएं फेजर होती हैं, इनका सदिश योग किया जाना चाहिए।',
      'त्रुटि: असंतुलित डेल्टा में लाइन धाराओं का योग शून्य न मानना। सुधार: KCL के अनुसार IA + IB + IC = 0 हमेशा सत्य रहता है।',
      'त्रुटि: औसत लोड के आधार पर न्यूट्रल तार का चयन करना। सुधार: न्यूट्रल का आकार अधिकतम संभावित असंतुलन के अनुसार तय होना चाहिए।'
    ],
    bn: [
      'ভুল: নিউট্রাল কারেন্ট বের করতে ফেজ কারেন্টগুলোকে সাধারণ যোগ করা (যেমন ১০ + ৫ + ১০ = ২৫ A)। সংশোধন: কারেন্টগুলি ভেক্টর রাশি, তাই এদের ভেক্টর যোগফল করতে হবে।',
      'ভুল: ভারসাম্যহীন ডেল্টায় লাইন কারেন্টের যোগফল শূন্য হবে না মনে করা। সংশোধন: KCL অনুসারে ডেল্টায় সর্বদা IA + IB + IC = 0 হয়।',
      'ভুল: গড় লোডের ওপর ভিত্তি করে নিউট্রাল তারের সাইজ নির্ধারণ করা। সংশোধন: নিউট্রাল তারকে সর্বোচ্চ সম্ভাব্য ভারসাম্যহীনতার জন্য ডিজাইন করতে হয়।'
    ]
  },
  keyTakeaways: {
    en: [
      'Phase unbalance introduces non-zero neutral currents and increases power losses in the supply network.',
      'A solid neutral wire acts as a voltage stabilizer, keeping phase voltages balanced across unequal loads.',
      'Modern electrical codes require full-sized or oversized neutral conductors in commercial and IT facilities.'
    ],
    hi: [
      'फेज असंतुलन से न्यूट्रल में करंट बहने लगता है और वितरण नेटवर्क में बिजली का नुकसान बढ़ जाता है।',
      'एक ठोस न्यूट्रल तार वोल्टेज को स्थिर रखता है, जिससे असमान लोड होने पर भी उपकरण सुरक्षित रहते हैं।',
      'आधुनिक विद्युत नियमों में वाणिज्यिक भवनों में पूर्ण आकार के न्यूट्रल तार का उपयोग अनिवार्य है।'
    ],
    bn: [
      'ফেজ ভারসাম্যহীনতার কারণে নিউট্রাল দিয়ে কারেন্ট প্রবাহিত হয় এবং সিস্টেমে পাওয়ার লস বৃদ্ধি পায়।',
      'একটি কার্যকর নিউট্রাল তার প্রতিটি ফেজের ভোল্টেজকে স্থির রাখতে সাহায্য করে।',
      'বাণিজ্যিক ও আইটি স্থাপনায় পূর্ণ মাপের বা দ্বিগুণ মাপের নিউট্রাল তার ব্যবহার করা বাধ্যতামূলক।'
    ]
  },
  practiceQuestions: [
    {
      id: 'pq-ch14-l03-01',
      question: {
        en: 'A 415 V 4-wire star system has loads: Za = 10 ∠0° Ω, Zb = 10 ∠0° Ω, and Zc = open circuit (infinite impedance). Find the neutral current In.',
        hi: 'एक 415 V 4-तार स्टार प्रणाली में लोड हैं: Za = 10 ∠0° Ω, Zb = 10 ∠0° Ω, तथा Zc = खुला परिपथ। न्यूट्रल धारा In ज्ञात करें।',
        bn: 'একটি ৪১৫ V ৪-তার স্টার সিস্টেমে লোড: Za = ১০ ∠০° Ω, Zb = ১০ ∠০° Ω এবং Zc = ওপেন সার্কিট। নিউট্রাল কারেন্ট In কত হবে?'
      },
      hint: {
        en: 'Compute Ia = 240 ∠0° / 10 = 24 ∠0° A, Ib = 24 ∠-120° A, Ic = 0. Then In = -(Ia + Ib) = 24 ∠-60° A.',
        hi: 'Ia = 24 ∠0° A, Ib = 24 ∠-120° A, Ic = 0 निकालें। फिर In = -(Ia + Ib) = 24 ∠-60° A होगा।',
        bn: 'Ia = ২৪ ∠০° A, Ib = ২৪ ∠-১২০° A, Ic = ০ বের করে In = -(Ia + Ib) = ২৪ ∠-৬০° A নির্ণয় করুন।'
      }
    },
    {
      id: 'pq-ch14-l03-02',
      question: {
        en: 'Why is it strictly forbidden to install a single-pole fuse or circuit breaker switch on the neutral conductor of a 3-phase 4-wire installation?',
        hi: '3-फेज 4-तार प्रणाली में न्यूट्रल तार पर सिंगल-पोल फ्यूज या स्विच लगाना सख्त वर्जित क्यों है?',
        bn: '৩-ফেজ ৪-তার সিস্টেমে নিউট্রাল তারে একক পোলের ফিউজ বা সার্কিট ব্রেকার লাগানো কঠোরভাবে নিষিদ্ধ কেন?'
      },
      hint: {
        en: 'Consider what happens to phase voltages across unequal loads if the neutral fuse blows while phase lines remain energized (floating neutral).',
        hi: 'यदि फेज तार जुड़े रहें और न्यूट्रल फ्यूज उड़ जाए (फ्लोटिंग न्यूट्रल स्थिति), तो हल्के लोड पर अत्यधिक वोल्टेज आ जाता है।',
        bn: 'যদি নিউট্রাল ফিউজ কেটে যায় কিন্তু ফেজগুলি সচল থাকে, তবে অসম লোডের ক্ষেত্রে মারাত্মক অতিরিক্ত ভোল্টেজ সৃষ্টি হয়।'
      }
    }
  ],
  mcqs: [
    {
      id: 'mcq-ch14-l03-01',
      question: {
        en: 'In an unbalanced 3-phase 4-wire star-connected system with a solid neutral, what determines the voltage across each phase of the load?',
        hi: 'ठोस न्यूट्रल वाली असंतुलित 3-फेज 4-तार स्टार प्रणाली में लोड के प्रत्येक फेज के आर-पार वोल्टेज किसके द्वारा निर्धारित होता है?',
        bn: 'সলিড নিউট্রালযুক্ত ভারসাম্যহীন ৩-ফেজ ৪-তার স্টার সিস্টেমে লোডের প্রতিটি ফেজের ভোল্টেজ কী দ্বারা নির্ধারিত হয়?'
      },
      options: [
        { en: 'The source phase voltage, because the neutral firmly clamps the load neutral to the supply neutral', hi: 'स्रोत फेज वोल्टेज, क्योंकि न्यूट्रल लोड के न्यूट्रल को सप्लाई न्यूट्रल से मजबूती से बांधे रखता है', bn: 'উৎস ফেজ ভোল্টেজ, কারণ নিউট্রাল লোডের মধ্যবিন্দুকে সাপ্লাই নিউট্রালের সাথে আবদ্ধ রাখে' },
        { en: 'The ratio of the impedances Za, Zb, and Zc only', hi: 'केवल प्रतिबाधाओं Za, Zb, Zc का अनुपात', bn: 'শুধুমাত্র ইম্পিডেন্সের অনুপাত' },
        { en: 'The line-to-line voltage divided by 3', hi: 'लाइन-टू-लाइन वोल्टेज भाग 3', bn: 'লাইন ভোল্টেজ ভাগ ৩' },
        { en: 'It drops to zero on all phases', hi: 'यह सभी फेजों पर गिरकर शून्य हो जाता है', bn: 'সব ফেজেই ভোল্টেজ শূন্যে নেমে যায়' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'A solid neutral conductor of negligible impedance fixes the star point potential to 0 V, maintaining normal phase voltages across all three load branches.',
        hi: 'नगण्य प्रतिबाधा वाला ठोस न्यूट्रल स्टार बिंदु के विभव को 0 V पर स्थिर रखता है, जिससे लोड को सामान्य फेज वोल्टेज मिलता रहता है।',
        bn: 'নগণ্য ইম্পিডেন্সের সলিড নিউট্রাল লোডের স্টার পয়েন্টকে ০ V এ স্থির রাখে, ফলে প্রতিটি ফেজে স্বাভাবিক ভোল্টেজ বজায় থাকে।'
      }
    },
    {
      id: 'mcq-ch14-l03-02',
      question: {
        en: 'In an unbalanced 3-phase 3-wire delta load, what is the sum of the three incoming line currents (IA + IB + IC)?',
        hi: 'एक असंतुलित 3-फेज 3-तार डेल्टा लोड में तीनों आने वाली लाइन धाराओं का योग (IA + IB + IC) क्या होता है?',
        bn: 'একটি ভারসাম্যহীন ৩-ফেজ ৩-তার ডেল্টা লোডে তিনটি লাইন কারেন্টের যোগফল (IA + IB + IC) কত?'
      },
      options: [
        { en: 'Equal to the largest line current', hi: 'सबसे बड़ी लाइन धारा के बराबर', bn: 'সবচেয়ে বড় লাইন কারেন্টের সমান' },
        { en: 'Identically zero (0 A) at all times', hi: 'हर समय पूर्णतः शून्य (0 A)', bn: 'সর্বদা সম্পূর্ণ শূন্য (০ A)' },
        { en: 'Equal to √3 times the average phase current', hi: 'औसत फेज धारा का √3 गुना', bn: 'গড় ফেজ কারেন্টের √3 গুণ' },
        { en: 'Directly proportional to load unbalance percentage', hi: 'लोड असंतुलन प्रतिशत के सीधे आनुपातिक', bn: 'লোড ভারসাম্যহীনতার শতকরা হারের সমানুপাতিক' }
      ],
      correctAnswer: 1,
      explanation: {
        en: 'By Kirchhoff\'s Current Law, IA = Iab - Ica, IB = Ibc - Iab, IC = Ica - Ibc. Summing these three equations cancels all branch terms identically: IA + IB + IC = 0.',
        hi: 'KCL के अनुसार IA + IB + IC = (Iab - Ica) + (Ibc - Iab) + (Ica - Ibc) = 0 सदैव शून्य होता है।',
        bn: 'KCL নিয়ম অনুযায়ী তিনটি সমীকরণ যোগ করলে সমস্ত শাখা কারেন্ট বাতিল হয়ে যায়, ফলে IA + IB + IC = ০ সর্বদা সত্য।'
      }
    },
    {
      id: 'mcq-ch14-l03-03',
      question: {
        en: 'Why is the textbook formula P = √3 · VL · IL · cos(ϕ) invalid for calculating total power in an unbalanced three-phase system?',
        hi: 'असंतुलित थ्री-फेज प्रणाली में कुल शक्ति की गणना के लिए पाठ्यपुस्तक का सूत्र P = √3 · VL · IL · cos(ϕ) अमान्य क्यों है?',
        bn: 'ভারসাম্যহীন থ্রি-ফেজ সিস্টেমে মোট ক্ষমতা গণনায় পাঠ্যবইয়ের সূত্র P = √3 · VL · IL · cos(ϕ) অকার্যকর কেন?'
      },
      options: [
        { en: 'Because line currents and phase power factors are different across the three individual phases', hi: 'क्योंकि तीनों अलग-अलग फेजों में लाइन धाराएं और पावर फैक्टर भिन्न-भिन्न होते हैं', bn: 'কারণ তিনটি ফেজে লাইন কারেন্ট এবং পাওয়ার ফ্যাক্টরের মান ভিন্ন ভিন্ন হয়' },
        { en: 'Because voltage phasors disappear during unbalance', hi: 'क्योंकि असंतुलन के दौरान वोल्टेज फेजर गायब हो जाते हैं', bn: 'কারণ ভারসাম্যহীন অবস্থায় ভোল্টেজ উধাও হয়ে যায়' },
        { en: 'Because the factor √3 changes to √2 under unbalance', hi: 'क्योंकि असंतुलन में √3 बदलकर √2 हो जाता है', bn: 'কারণ ভারসাম্যহীনতায় √3 পরিবর্তিত হয়ে √2 হয়' },
        { en: 'Because active power cannot be defined for unbalanced circuits', hi: 'क्योंकि असंतुलित परिपथों के लिए सक्रिय शक्ति परिभाषित नहीं की जा सकती', bn: 'কারণ ভারসাম্যহীন সার্কিটে সক্রিয় ক্ষমতা সংজ্ঞায়িত করা যায় না' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'The formula P = √3·VL·IL·cos(ϕ) assumes a single uniform IL and a single uniform power factor angle ϕ across all three phases. In an unbalanced load, each phase must be evaluated separately.',
        hi: 'यह सूत्र सभी तीन फेजों में एक समान IL और एक समान पावर फैक्टर मानता है। असंतुलित प्रणाली में प्रत्येक फेज की शक्ति की अलग-अलग गणना की जाती है।',
        bn: 'এই সূত্রটি তিনটি ফেজেই একটি নির্দিষ্ট IL এবং নির্দিষ্ট পাওয়ার ফ্যাক্টর ধরে নেয়। কিন্তু ভারসাম্যহীন লোডে প্রতিটি ফেজের মান ভিন্ন হওয়ায় আলাদাভাবে হিসাব করতে হয়।'
      }
    },
    {
      id: 'mcq-ch14-l03-04',
      question: {
        en: 'An unbalanced star load has Ia = 20 ∠0° A, Ib = 0 A (Phase B off), and Ic = 20 ∠120° A. What is the RMS magnitude of the neutral current In?',
        hi: 'एक असंतुलित स्टार लोड में Ia = 20 ∠0° A, Ib = 0 A, तथा Ic = 20 ∠120° A है। न्यूट्रल धारा In का RMS मान क्या होगा?',
        bn: 'একটি ভারসাম্যহীন স্টার লোডে Ia = ২০ ∠০° A, Ib = ০ A এবং Ic = ২০ ∠১২০° A হলে নিউট্রাল কারেন্ট In এর মান কত?'
      },
      options: [
        { en: '40.0 A', hi: '40.0 A', bn: '৪০.০ A' },
        { en: '20.0 A', hi: '20.0 A', bn: '২০.০ A' },
        { en: '0.0 A', hi: '0.0 A', bn: '০.০ A' },
        { en: '34.64 A', hi: '34.64 A', bn: '৩৪.৬৪ A' }
      ],
      correctAnswer: 1,
      explanation: {
        en: 'Ia + Ic = 20 ∠0° + 20 ∠120° = (20 + j0) + (-10 + j17.32) = 10 + j17.32 = 20 ∠60° A. Therefore In = -(Ia + Ic) = 20 ∠-120° A. Magnitude is exactly 20.0 A.',
        hi: 'Ia + Ic = 20 ∠60° A होता है। अतः In = -20 ∠60° = 20 ∠-120° A, जिसका मान ठीक 20.0 A है।',
        bn: 'Ia + Ic = ২০ ∠৬০° A। অতএব In = -২০ ∠৬০° = ২০ ∠-১২০° A, যার পরম মান ঠিক ২০.০ A।'
      }
    },
    {
      id: 'mcq-ch14-l03-05',
      question: {
        en: 'Why is it strictly prohibited by national electrical codes to install a fuse on the neutral conductor of a three-phase four-wire distribution panel?',
        hi: 'राष्ट्रीय विद्युत कोड द्वारा थ्री-फेज चार-तार वितरण पैनल के न्यूट्रल चालक पर फ्यूज लगाना सख्त वर्जित क्यों है?',
        bn: 'ন্যাশনাল ইলেকট্রিক্যাল কোড অনুযায়ী থ্রি-ফেজ চার-তার ডিস্ট্রিবিউশন প্যানেলের নিউট্রাল তারে ফিউজ লাগানো নিষিদ্ধ কেন?'
      },
      options: [
        { en: 'If the neutral fuse blows while phase fuses remain intact, the star point floats, subjecting lightly loaded phases to destructive overvoltage', hi: 'यदि फेज चालू रहते हुए न्यूट्रल फ्यूज उड़ जाए, तो न्यूट्रल फ्लोट हो जाता है और कम लोड वाले फेजों पर अत्यधिक वोल्टेज आकर उपकरण नष्ट हो जाते हैं', bn: 'যদি ফেজ সচল থাকা অবস্থায় নিউট্রাল ফিউজ কেটে যায়, তবে স্টার পয়েন্ট ভেসে ওঠে এবং হালকা লোডের ফেজগুলিতে মারাত্মক ওভারভোল্টেজ হয়ে যন্ত্র পুড়ে যায়' },
        { en: 'Because neutral conductors never carry any electric current', hi: 'क्योंकि न्यूट्रल में कभी कोई धारा नहीं बहती', bn: 'কারণ নিউট্রালে কখনোই কারেন্ট প্রবাহিত হয় না' },
        { en: 'Because fuses only operate on direct current', hi: 'क्योंकि फ्यूज केवल डीसी पर काम करते हैं', bn: 'কারণ ফিউজ কেবল ডিসিতে কাজ করে' },
        { en: 'Because it decreases the transformer efficiency by 50%', hi: 'क्योंकि इससे ट्रांसफार्मर की दक्षता 50% घट जाती है', bn: 'কারণ এতে ট্রান্সফরমারের দক্ষতা ৫০% কমে যায়' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'A blown neutral fuse creates an ungrounded, floating neutral. The neutral point shifts toward the heavily loaded phase, driving the phase-to-neutral voltage on lightly loaded phases up toward the 415 V line voltage, destroying appliances.',
        hi: 'न्यूट्रल कट जाने पर स्टार बिंदु विस्थापित हो जाता है, जिससे कम लोड वाले उपकरणों पर 230 V के स्थान पर लगभग 400 V आ सकता है, जिससे वे तुरंत जल जाते हैं।',
        bn: 'নিউট্রাল বিচ্ছিন্ন হলে ভাসমান নিউট্রাল পরিস্থিতি তৈরি হয়, যার ফলে হালকা লোডে ২৩০ V এর বদলে প্রায় ৪০০ V পর্যন্ত চলে আসতে পারে এবং যন্ত্রপাতি সাথে সাথে নষ্ট হয়ে যায়।'
      }
    },
    {
      id: 'mcq-ch14-l03-06',
      question: {
        en: 'In an unbalanced delta load connected across lines A, B, and C, branch current Iab = 10 ∠0° A and branch current Ica = 10 ∠120° A. What is line current IA?',
        hi: 'एक असंतुलित डेल्टा लोड में शाखा धारा Iab = 10 ∠0° A और Ica = 10 ∠120° A है। लाइन धारा IA क्या होगी?',
        bn: 'একটি ভারসাম্যহীন ডেল্টা লোডে শাখা কারেন্ট Iab = ১০ ∠০° A এবং Ica = ১০ ∠১২০° A হলে লাইন কারেন্ট IA কত?'
      },
      options: [
        { en: '10.0 ∠0° A', hi: '10.0 ∠0° A', bn: '১০.০ ∠০° A' },
        { en: '17.32 ∠-30° A', hi: '17.32 ∠-30° A', bn: '১৭.৩২ ∠-৩০° A' },
        { en: '0.0 A', hi: '0.0 A', bn: '০.০ A' },
        { en: '20.0 ∠60° A', hi: '20.0 ∠60° A', bn: '২০.০ ∠৬০° A' }
      ],
      correctAnswer: 1,
      explanation: {
        en: 'IA = Iab - Ica = (10 + j0) - 10·(-0.5 + j0.866) = (10 + 5) - j8.66 = 15 - j8.66 = 17.32 ∠-30° A (which is √3 · 10 A).',
        hi: 'IA = Iab - Ica = (10 + j0) - (-5 + j8.66) = 15 - j8.66 = 17.32 ∠-30° A।',
        bn: 'IA = Iab - Ica = (১০ + j০) - (-৫ + j৮.৬৬) = ১৫ - j৮.৬৬ = ১৭.৩২ ∠-৩০° A।'
      }
    },
    {
      id: 'mcq-ch14-l03-07',
      question: {
        en: 'What causes neutral current to exceed line currents in modern commercial buildings even when loads appear roughly distributed across the three phases?',
        hi: 'आधुनिक वाणिज्यिक भवनों में सभी फेजों पर लोड लगभग समान होने पर भी न्यूट्रल धारा का लाइन धारा से अधिक होने का मुख्य कारण क्या है?',
        bn: 'আধুনিক বাণিজ্যিক ভবনে তিনটি ফেজে লোড প্রায় সমান থাকা সত্ত্বেও নিউট্রাল কারেন্ট লাইন কারেন্টকে ছাড়িয়ে যাওয়ার মূল কারণ কী?'
      },
      options: [
        { en: 'Triplen harmonics (3rd, 9th, 15th) from non-linear switch-mode power supplies that add in phase in the neutral conductor', hi: 'स्विच-मोड पावर सप्लाई से निकलने वाले ट्रिप्लन हार्मोनिक्स (3rd, 9th) जो न्यूट्रल में समान कला में जुड़ जाते हैं', bn: 'সুইচ-মোড পাওয়ার সাপ্লাই থেকে উৎপন্ন ট্রিপ্লেন হারমোনিক্স (৩য়, ৯ম) যা নিউট্রাল তারে সম-দশায় সরাসরি যোগ হয়' },
        { en: 'Excessive insulation resistance on phase conductors', hi: 'फेज तारों पर अत्यधिक इन्सुलेशन प्रतिरोध', bn: 'ফেজ তারে অতিরিক্ত ইনসুলেশন রোধ' },
        { en: 'Use of star-delta motor starters', hi: 'स्टार-डेल्टा मोटर स्टार्टर का उपयोग', bn: 'স্টার-ডেল্টা মোটর স্টার্টার ব্যবহার' },
        { en: 'High power factor correction capacitor switching', hi: 'उच्च पावर फैक्टर कैपेसिटर स्विचिंग', bn: 'উচ্চ পাওয়ার ফ্যাক্টর ক্যাপাসিটর সুইচিং' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Triplen harmonics (especially the 3rd harmonic, 150 Hz) are zero-sequence in nature. They do not cancel at 120°, but instead add arithmetically in the neutral wire, causing neutral currents of up to 140% to 173% of phase currents.',
        hi: 'तीसरे हार्मोनिक (150 Hz) की धाराएं न्यूट्रल में एक दूसरे को रद्द नहीं करतीं, बल्कि सीधे जुड़ जाती हैं, जिससे न्यूट्रल में फेज करंट से 1.7 गुना तक करंट बह सकता है।',
        bn: '৩য় হারমোনিক্স (১৫০ Hz) জিরো-সিকোয়েন্স প্রকৃতির হওয়ায় নিউট্রালে বাতিল হয় না, বরং বীজগাণিতিকভাবে সরাসরি যোগ হয়। ফলে নিউট্রাল কারেন্ট ফেজ কারেন্টের ১৭৩% পর্যন্ত হতে পারে।'
      }
    },
    {
      id: 'mcq-ch14-l03-08',
      question: {
        en: 'In an unbalanced 4-wire star load, Phase A draws 10 kW at unity PF, Phase B draws 8 kW at 0.8 lagging PF, and Phase C draws 6 kW at 0.6 leading PF. What is the total active power drawn from the source?',
        hi: 'एक असंतुलित 4-तार स्टार लोड में फेज A 10 kW (यूनिटी PF), फेज B 8 kW (0.8 लैगिंग PF) और फेज C 6 kW (0.6 लीडिंग PF) लेता है। स्रोत से ली गई कुल सक्रिय शक्ति क्या होगी?',
        bn: 'একটি ভারসাম্যহীন ৪-তার স্টার লোডে ফেজ A ১০ kW (ইউনিটি PF), ফেজ B ৮ kW (০.৮ ল্যাগিং PF) এবং ফেজ C ৬ kW (০.৬ লিডিং PF) গ্রহণ করে। উৎস থেকে গৃহীত মোট সক্রিয় ক্ষমতা কত?'
      },
      options: [
        { en: '24.0 kW', hi: '24.0 kW', bn: '২৪.০ kW' },
        { en: '14.0 kW', hi: '14.0 kW', bn: '১৪.০ kW' },
        { en: '41.5 kW', hi: '41.5 kW', bn: '৪১.৫ kW' },
        { en: '19.2 kW', hi: '19.2 kW', bn: '১৯.২ kW' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Total active power is simply the algebraic sum of the per-phase active powers: P_total = Pa + Pb + Pc = 10 kW + 8 kW + 6 kW = 24.0 kW.',
        hi: 'कुल सक्रिय शक्ति तीनों फेजों की सक्रिय शक्तियों का सीधा बीजगणितीय योग होती है: P = 10 + 8 + 6 = 24.0 kW।',
        bn: 'মোট সক্রিয় ক্ষমতা হলো প্রতিটি ফেজের বাস্তব ক্ষমতার সরাসরি বীজগাণিতিক যোগফল: P = ১০ + ৮ + ৬ = ২৪.০ kW।'
      }
    }
  ]
};

// Canonical export alias for backward compatibility and registry access
export const LESSON_UNBALANCED_THREE_PHASE_LOAD_ANALYSIS = LESSON_UNBALANCED_THREE_PHASE_LOADS;
