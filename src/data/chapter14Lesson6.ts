import { Lesson } from '../types';

export const LESSON_THREE_WATTMETER_METHOD: Lesson = {
  id: 'lsn-ch14-three-wattmeter-method',
  topicId: 'tp-three-wattmeter-measurement',
  chapterId: 'ch-three-phase',
  order: 6,
  title: {
    en: 'Three-Wattmeter Method, Four-Wire Systems & Reactive Power',
    hi: 'त्रि-वाटमीटर विधि, चार-तार प्रणालियां एवं प्रतिघाती शक्ति',
    bn: 'ত্রি-ওয়াটমিটার পদ্ধতি, চার-তার সিস্টেম ও রিঅ্যাক্টিভ পাওয়ার'
  },
  description: {
    en: 'Master precision power measurement in four-wire electrical distribution networks carrying unbalanced line and neutral currents. Explore three-wattmeter topologies, artificial neutral point configurations for 3-wire systems, and modern digital multifunction energy meter algorithms compliant with ANSI C12.20 and IEC 62053.',
    hi: 'असंतुलित लाइन और न्यूट्रल धारा ले जाने वाले 4-तार विद्युत वितरण नेटवर्कों में सटीक शक्ति मापन का अध्ययन करें। त्रि-वाटमीटर टोपोलॉजी, 3-तार प्रणालियों के लिए कृत्रिम न्यूट्रल बिंदु और आधुनिक डिजिटल मल्टीफंक्शन ऊर्जा मीटर एल्गोरिदम को समझें।',
    bn: 'ভারসাম্যহীন লাইন ও নিউট্রাল কারেন্ট বহনকারী ৪-তার বিদ্যুৎ বিতরণ নেটওয়ার্কে নির্ভুল পাওয়ার পরিমাপ আয়ত্ত করুন। ত্রি-ওয়াটমিটার টপোলজি, ৩-তার সিস্টেমের জন্য কৃত্রিম নিউট্রাল কনফিগারেশন এবং আধুনিক ডিজিটাল মাল্টিফাংশন এনার্জি মিটার অ্যালগরিদম বিশদভাবে পর্যালোচনা করুন।'
  },
  estimatedMinutes: 45,
  easyExplanation: {
    en: 'When a commercial building has thousands of separate single-phase lighting, computing, and elevator circuits, the three phases and the neutral wire are all carrying wildly different currents. To measure the exact power consumed across all four wires, Blondel\'s Theorem tells us that 4 - 1 = 3 wattmeters are strictly required. Each meter is dedicated to one phase: its current coil sits in that phase line, and its voltage coil connects directly between that line and the neutral wire. Meter 1 measures Phase A power, Meter 2 measures Phase B power, and Meter 3 measures Phase C power. Adding the three readings together gives the exact, undisputed energy bill, regardless of how unbalanced the loads become!',
    hi: 'जब किसी वाणिज्यिक भवन में बहुत सारे सिंगल-फेज कंप्यूटर, लाइट और पंखे जुड़े होते हैं, तो तीनों फेजों और न्यूट्रल में बहुत अलग-अलग धारा बहती है। ऐसी 4-तार प्रणाली में कुल शक्ति मापने के लिए ब्लोंडेल प्रमेय के अनुसार 4 - 1 = 3 वाटमीटर आवश्यक हैं। प्रत्येक मीटर एक फेज के लिए समर्पित होता है: उसका करंट कॉइल उस फेज तार में और वोल्टेज कॉइल उस फेज और न्यूट्रल के बीच जुड़ता है। तीनों मीटरों की रीडिंग का योग (W1 + W2 + W3) पूरी तरह सटीक कुल शक्ति देता है, चाहे लोड कितना भी असंतुलित क्यों न हो!',
    bn: 'যখন কোনো বাণিজ্যিক ভবনে হাজার হাজার কম্পিউটার, বাতি ও একক-ফেজ লোড সংযুক্ত থাকে, তখন প্রতিটি ফেজ ও নিউট্রাল তারে সম্পূর্ণ ভিন্ন মানের কারেন্ট প্রবাহিত হয়। ৪-তারের এই ব্যবস্থায় মোট বিদ্যুৎ পরিমাপ করতে ব্লন্ডেল উপপাদ্য অনুযায়ী ৪ - ১ = ৩টি ওয়াটমিটার প্রয়োজন। প্রতিটি মিটার একটি নির্দিষ্ট ফেজের সাথে যুক্ত থাকে: কারেন্ট কয়েলটি লাইনে এবং ভোল্টেজ কয়েলটি লাইন ও নিউট্রালের মাঝে যুক্ত হয়। তিনটি মিটারের যোগফল (W1 + W2 + W3) লোডের ভারসাম্যহীনতা নির্বিশেষে শতভাগ নির্ভুল বিদ্যুৎ খরচ পরিমাপ করে!'
  },
  detailedExplanation: {
    en: 'In three-phase four-wire distribution circuits (such as 415V/240V or 208V/120V systems), single-phase loads connected line-to-neutral cause significant phase unbalance and neutral return currents. The three-wattmeter method provides the ultimate measurement accuracy:\n\n1. Three-Wattmeter Connection for 4-Wire Systems:\n   • Meter A (WA): Current coil in Line A; Potential coil across Line A and Neutral N.\n   • Meter B (WB): Current coil in Line B; Potential coil across Line B and Neutral N.\n   • Meter C (WC): Current coil in Line C; Potential coil across Line C and Neutral N.\n   Because each meter directly samples the true phase-to-neutral voltage and line current:\n   • WA = |Van| · |Ia| · cos(ϕa) = Pa\n   • WB = |Vbn| · |Ib| · cos(ϕb) = Pb\n   • WC = |Vcn| · |Ic| · cos(ϕc) = Pc\n   Total Active Power: P_total = WA + WB + WC = Pa + Pb + Pc.\n   This equality holds unconditionally under any degree of voltage unbalance, current asymmetry, and harmonic distortion.\n\n2. Three-Wattmeter Method on 3-Wire Systems (Artificial Neutral):\n   When measuring power in a 3-wire system without an available neutral, three wattmeters can still be utilized by connecting the three potential coil return terminals together to form an "Artificial Neutral Star Point" N*.\n   To avoid neutral shift, the three potential coil circuits must have EXACTLY IDENTICAL internal resistances (R_pc1 = R_pc2 = R_pc3). Under these conditions, the artificial star point N* assumes the exact theoretical centroid potential (0 V), and the sum WA + WB + WC equals the total system power.\n\n3. Modern Electronic Multifunction Meters (Form 9S & Form 16S):\n   Modern smart meters sample voltages and currents simultaneously at 10 to 50 kHz using high-speed Sigma-Delta ADCs:\n   • Total Energy E = ∫ (va(t)·ia(t) + vb(t)·ib(t) + vc(t)·ic(t)) dt\n   • Active Power P = (1/T) · ∫ p(t) dt\n   • Apparent Power: Vector Apparent Power S_vec = |Pa + Pb + Pc + j(Qa + Qb + Qc)| vs Arithmetic Apparent Power S_arith = Sa + Sb + Sc (crucial for utility tariff billing under IEEE 1459).',
    hi: '3-फेज 4-तार वितरण प्रणालियों में सिंगल-फेज लोड के कारण भारी असंतुलन होता है:\n\n1. 4-तार प्रणाली में त्रि-वाटमीटर कनेक्शन:\n   • मीटर A (WA): फेज A और न्यूट्रल के बीच (Pa = Van·Ia·cos ϕa)\n   • मीटर B (WB): फेज B और न्यूट्रल के बीच (Pb = Vbn·Ib·cos ϕb)\n   • मीटर C (WC): फेज C और न्यूट्रल के बीच (Pc = Vcn·Ic·cos ϕc)\n   कुल शक्ति: P_total = WA + WB + WC = Pa + Pb + Pc।\n2. 3-तार प्रणाली में कृत्रिम न्यूट्रल (आर्टिफिशियल स्टार पॉइंट): तीनों मीटरों के वोल्टेज कॉइल को एक साथ जोड़कर समान प्रतिरोध के माध्यम से एक केंद्र बिंदु बनाया जाता है।\n3. आधुनिक इलेक्ट्रॉनिक मीटर (Form 9S): हाई-स्पीड एडीसी द्वारा प्रत्येक क्षणिक वोल्टेज और धारा का गुणनफल करके सटीक ऊर्जा मापी जाती है।',
    bn: '৩-ফেজ ৪-তার বিতরণ লাইনে একক-ফেজ লোডের কারণে প্রচুর ভারসাম্যহীনতা সৃষ্টি হয়:\n\n১. ৪-তার সিস্টেমে ত্রি-ওয়াটমিটার সংযোগ:\n   • মিটার A (WA): ফেজ A ও নিউট্রালের মাঝে (Pa = Van·Ia·cos ϕa)\n   • মিটার B (WB): ফেজ B ও নিউট্রালের মাঝে (Pb = Vbn·Ib·cos ϕb)\n   • মিটার C (WC): ফেজ C ও নিউট্রালের মাঝে (Pc = Vcn·Ic·cos ϕc)\n   মোট ক্ষমতা: P_total = WA + WB + WC = Pa + Pb + Pc।\n২. ৩-তার সিস্টেমে কৃত্রিম নিউট্রাল: তিনটি মিটারের ভোল্টেজ কয়েলকে একসাথে যুক্ত করে সমান রোধের মাধ্যমে কৃত্রিম নিউট্রাল বিন্দু N* তৈরি করা হয়।\n৩. আধুনিক ইলেকট্রনিক মিটার (Form 9S): উচ্চগতির এডিসি দ্বারা তাৎক্ষণিক ভোল্টেজ ও কারেন্ট গুণ করে মোট এনার্জি পরিমাপ করা হয়।'
  },
  formulas: [
    {
      id: 'f-three-wattmeter-power',
      symbol: 'P_{total}',
      expression: 'P_{total} = W_A + W_B + W_C = V_{an} I_a \\cos(\\phi_a) + V_{bn} I_b \\cos(\\phi_b) + V_{cn} I_c \\cos(\\phi_c)',
      title: {
        en: 'Total Active Power in 4-Wire Three-Wattmeter Method',
        hi: '4-तार त्रि-वाटमीटर विधि में कुल सक्रिय शक्ति',
        bn: '৪-তার ত্রি-ওয়াটমিটার পদ্ধতিতে মোট সক্রিয় ক্ষমতা'
      },
      description: {
        en: 'Sum of individual phase powers measured by three single-phase wattmeter elements referenced to neutral.',
        hi: 'न्यूट्रल से जुड़े तीन एकल-फेज वाटमीटरों द्वारा मापी गई अलग-अलग फेज शक्तियों का योग।',
        bn: 'নিউট্রাল সাপেক্ষে যুক্ত তিনটি সিঙ্গেল-ফেজ ওয়াটমিটার দ্বারা পরিমাপকৃত স্বতন্ত্র ফেজ ক্ষমতার যোগফল।'
      },
      variables: [
        { symbol: 'W_A, W_B, W_C', name: { en: 'Readings of phase wattmeters A, B, and C (Watts)', hi: 'फेज वाटमीटर A, B, C की रीडिंग (W)', bn: 'ফেজ ওয়াটমিটার A, B, C এর পাঠ (W)' } }
      ]
    },
    {
      id: 'f-apparent-power-ieee1459',
      symbol: 'S_{arith}, S_{vec}',
      expression: 'S_{arith} = S_A + S_B + S_C, \\quad S_{vec} = \\sqrt{(P_A + P_B + P_C)^2 + (Q_A + Q_B + Q_C)^2}',
      title: {
        en: 'Arithmetic vs. Vector Apparent Power (IEEE 1459)',
        hi: 'अंकगणितीय बनाम सदिश आभासी शक्ति (IEEE 1459)',
        bn: 'পাটিগাণিতিক বনাম ভেক্টর আপাত ক্ষমতা (IEEE 1459)'
      },
      description: {
        en: 'Distinguishes between scalar sum of apparent powers and vector sum under unbalanced conditions.',
        hi: 'असंतुलित परिस्थितियों में आभासी शक्ति के अदिश और सदिश योग के अंतर को स्पष्ट करता है।',
        bn: 'ভারসাম্যহীন অবস্থায় আপাত ক্ষমতার স্কেলার ও ভেক্টর যোগফলের পার্থক্য নির্দেশ করে।'
      },
      variables: [
        { symbol: 'S_{arith}', name: { en: 'Arithmetic Apparent Power (kVA)', hi: 'अंकगणितीय आभासी शक्ति (kVA)', bn: 'পাটিগাণিতিক আপাত ক্ষমতা (kVA)' } },
        { symbol: 'S_{vec}', name: { en: 'Vector Apparent Power (kVA)', hi: 'सदिश आभासी शक्ति (kVA)', bn: 'ভেক্টর আপাত ক্ষমতা (kVA)' } }
      ]
    }
  ],
  diagrams: [
    {
      id: 'diag-ch14-three-wattmeter',
      title: {
        en: 'Three-Wattmeter Wiring in 4-Wire System and Artificial Star Point Scheme',
        hi: '4-तार प्रणाली में त्रि-वाटमीटर वायरिंग एवं कृत्रिम स्टार बिंदु योजना',
        bn: '৪-তার সিস্টেমে ত্রি-ওয়াটমিটার ওয়্যারিং এবং কৃত্রিম স্টার পয়েন্ট স্কিম'
      },
      caption: {
        en: 'Circuit schematic displaying three current coils in phases A, B, and C with potential coils connected to common system neutral, alongside artificial star configuration.',
        hi: 'फेज A, B, C में तीन करंट कॉइल और न्यूट्रल से जुड़े पोटेंशियल कॉइल का परिपथ आरेख।',
        bn: 'ফেজ A, B, C তে তিনটি কারেন্ট কয়েল এবং নিউট্রালে যুক্ত ভোল্টেজ কয়েলের সার্কিট ডায়াগ্রাম।'
      },
      svgType: 'sch-ch14-three-wattmeter'
    }
  ],
  sections: [
    {
      id: 'sec-ch14-revenue-metering-standards',
      title: {
        en: 'Industrial Revenue Metering: Why Utilities Mandate 3-Element Meters for 4-Wire Feeds',
        hi: 'औद्योगिक ऊर्जा मीटरिंग: उपयोगिताएं 4-तार के लिए 3-तत्व मीटर क्यों अनिवार्य करती हैं',
        bn: 'শিল্প এনার্জি মিটারিং: বিদ্যুৎ সংস্থাগুলি কেন ৪-তারের জন্য ৩-এলিমেন্ট মিটার বাধ্যতামূলক করে'
      },
      content: {
        en: 'A persistent electrical contracting blunder is attempting to use a 2-element (or 2.5-element) meter on a 4-wire commercial distribution service. If a 2-element meter is connected across lines A, B with Line C as reference, any single-phase load connected between Phase C and Neutral draws current that flows through Phase C and returns through Neutral without ever passing through Meter 1 or Meter 2 current coils!\n\nThis unmetered current is completely lost to the revenue register, allowing large commercial consumers to receive up to 33% of their power unbilled! Modern utility revenue standards (such as ANSI C12.20 Class 0.2 and IEC 62053-22) strictly mandate Form 9S or Form 16S three-element meters for all four-wire commercial installations.',
        hi: '4-तार प्रणाली पर 2-तत्व मीटर का उपयोग करने से फेज C और न्यूट्रल के बीच जुड़ा सिंगल-फेज लोड मीटर में दर्ज हुए बिना बिजली का उपभोग कर लेता है, जिससे उपभोक्ता को 33% तक मुफ्त बिजली मिल सकती है। इस राजस्व हानि को रोकने के लिए बिजली कंपनियां 4-तार सेवाओं के लिए 3-तत्व (Form 9S) इलेक्ट्रॉनिक मीटर लगाना अनिवार्य करती हैं।',
        bn: '৪-তার সিস্টেমে ২-এলিমেন্ট মিটার ব্যবহার করলে ফেজ C ও নিউট্রালের মাঝে যুক্ত লোডের কারেন্ট কোনো মিটারের কারেন্ট কয়েল দিয়ে যায় না। ফলে প্রায় ৩৩% পর্যন্ত বিদ্যুৎ কোনো বিল ছাড়াই ব্যবহৃত হতে পারে! এই চুরি ও রাজস্ব ক্ষতি বন্ধ করতে বিদ্যুৎ বোর্ডগুলি ৪-তার সংযোগের জন্য ৩-এলিমেন্ট (Form 9S) ডিজিটাল মিটার বাধ্যতামূলক করেছে।'
      }
    }
  ],
  workedExamples: [
    {
      id: 'we-ch14-l06-01',
      title: {
        en: 'Power and Energy Computation in Unbalanced 4-Wire Commercial Substation',
        hi: 'असंतुलित 4-तार वाणिज्यिक सबस्टेशन में शक्ति एवं ऊर्जा गणना',
        bn: 'ভারসাম্যহীন ৪-তার বাণিজ্যিক সাবস্টেশনে ক্ষমতা ও বিদ্যুৎ শক্তি গণনা'
      },
      problem: {
        en: 'A three-element digital meter installed on a 400V / 230V 4-wire supply records the following phase values:\n• Phase A: Van = 230 V, Ia = 50 A, cos(ϕa) = 0.95 lagging\n• Phase B: Vbn = 228 V, Ib = 80 A, cos(ϕb) = 0.80 lagging\n• Phase C: Vcn = 232 V, Ic = 30 A, cos(ϕc) = 1.00 (resistive)\nCalculate: (a) Power measured by each element WA, WB, WC, (b) Total active power P, and (c) Total active energy consumed during an 8-hour shift.',
        hi: '400V/230V 4-तार आपूर्ति पर एक 3-तत्व डिजिटल मीटर के आंकड़े निम्न हैं:\n• Phase A: 230 V, 50 A, 0.95 PF\n• Phase B: 228 V, 80 A, 0.80 PF\n• Phase C: 232 V, 30 A, 1.00 PF\n(a) प्रत्येक तत्व की शक्ति, (b) कुल सक्रिय शक्ति, (c) 8 घंटे में कुल ऊर्जा की गणना करें।',
        bn: 'একটি ৪০০V/২৩০V ৪-তার সরবরাহে ৩-এলিমেন্ট ডিজিটাল মিটারের মান:\n• Phase A: ২৩০ V, ৫০ A, ০.৯৫ PF\n• Phase B: ২২৮ V, ৮০ A, ০.৮০ PF\n• Phase C: ২৩২ V, ৩০ A, ১.০০ PF\n(a) প্রতিটি এলিমেন্টের ক্ষমতা, (b) মোট সক্রিয় ক্ষমতা, (c) ৮ ঘণ্টায় মোট শক্তি নির্ণয় করুন।'
      },
      solutionSteps: [
        {
          stepNumber: 1,
          description: {
            en: 'Calculate active power measured by Element A:\nWA = Van · Ia · cos(ϕa) = 230 · 50 · 0.95 = 10,925 W = 10.925 kW.',
            hi: 'तत्व A की शक्ति: WA = 230 · 50 · 0.95 = 10,925 W = 10.925 kW।',
            bn: 'এলিমেন্ট A এর ক্ষমতা: WA = ২৩০ · ৫০ · ০.৯৫ = ১০,৯২৫ W = ১০.৯২৫ kW।'
          }
        },
        {
          stepNumber: 2,
          description: {
            en: 'Calculate active power measured by Element B:\nWB = Vbn · Ib · cos(ϕb) = 228 · 80 · 0.80 = 14,592 W = 14.592 kW.',
            hi: 'तत्व B की शक्ति: WB = 228 · 80 · 0.80 = 14,592 W = 14.592 kW।',
            bn: 'এলিমেন্ট B এর ক্ষমতা: WB = ২২৮ · ৮০ · ০.৮০ = ১৪,৫৯২ W = ১৪.৫৯২ kW।'
          }
        },
        {
          stepNumber: 3,
          description: {
            en: 'Calculate active power measured by Element C:\nWC = Vcn · Ic · cos(ϕc) = 232 · 30 · 1.00 = 6,960 W = 6.960 kW.',
            hi: 'तत्व C की शक्ति: WC = 232 · 30 · 1.00 = 6,960 W = 6.960 kW।',
            bn: 'এলিমেন্ট C এর ক্ষমতা: WC = ২৩২ · ৩০ · ১.০০ = ৬,৯৬০ W = ৬.৯৬০ kW।'
          }
        },
        {
          stepNumber: 4,
          description: {
            en: 'Total Active Power P = WA + WB + WC = 10.925 + 14.592 + 6.960 = 32.477 kW.\nTotal Energy consumed over 8 hours: E = P · t = 32.477 kW · 8 h = 259.82 kWh.',
            hi: 'कुल शक्ति P = 10.925 + 14.592 + 6.960 = 32.477 kW।\n8 घंटे में कुल ऊर्जा E = 32.477 · 8 = 259.82 kWh।',
            bn: 'মোট সক্রিয় ক্ষমতা P = ১০.৯২৫ + ১৪.৫৯২ + ৬.৯৬০ = ৩২.৪৭৭ kW।\n৮ ঘণ্টায় মোট শক্তি E = ৩২.৪৭৭ · ৮ = ২৫৯.৮২ kWh।'
          }
        }
      ]
    },
    {
      id: 'we-ch14-l06-02',
      title: {
        en: 'Revenue Metering Discrepancy: 3-Element vs. 2-Element on 4-Wire Load',
        hi: '4-तार लोड पर 3-एलिमेंट बनाम 2-एलिमेंट मीटरिंग राजस्व अंतर',
        bn: '৪-তার লোডে ৩-এলিমেন্ট বনাম ২-এলিমেন্ট মিটারিং রাজস্ব পার্থক্য'
      },
      problem: {
        en: 'An unbalanced commercial building connected to a 400 V / 230 V, 4-wire system draws the following single-phase loads: Phase A draws 80 A at 0.90 pf lag; Phase B draws 50 A at 0.80 pf lag; Phase C draws 20 A at unity pf (1.0). (a) Calculate the true total active power P_true recorded by a 3-element meter. (b) Explain why a 2-element meter violates Blondel\'s theorem here and how neutral return current creates metering error.',
        hi: 'एक 400 V / 230 V, 4-तार भवन में लोड हैं: Phase A पर 80 A (0.90 pf), Phase B पर 50 A (0.80 pf), Phase C पर 20 A (1.0 pf)। (a) 3-एलिमेंट मीटर द्वारा मापी गई वास्तविक शक्ति P_true ज्ञात करें। (b) समझाएं कि 2-एलिमेंट मीटर यहाँ ब्लोंडेल प्रमेय का उल्लंघन क्यों करता है।',
        bn: 'একটি ৪০০ V / ২৩০ V, ৪-তার ভবনে লোড রয়েছে: ফেজ A তে ৮০ A (০.৯০ pf), ফেজ B তে ৫০ A (০.৮০ pf), ফেজ C তে ২০ A (১.০ pf)। (a) ৩-এলিমেন্ট মিটার দ্বারা পরিমাপকৃত প্রকৃত ক্ষমতা P_true নির্ণয় করুন। (b) ব্যাখ্যা করুন কেন ২-এলিমেন্ট মিটার এখানে ব্লন্ডেল উপপাদ্য লঙ্ঘন করে।'
      },
      solutionSteps: [
        {
          stepNumber: 1,
          description: {
            en: 'Calculate true per-phase active power registered by the 3 elements:\nWA = Van · Ia · cos(ϕa) = 230 · 80 · 0.90 = 16,560 W = 16.56 kW\nWB = Vbn · Ib · cos(ϕb) = 230 · 50 · 0.80 = 9,200 W = 9.20 kW\nWC = Vcn · Ic · cos(ϕc) = 230 · 20 · 1.00 = 4,600 W = 4.60 kW.',
            hi: 'प्रत्येक फेज की वास्तविक शक्ति: WA = 16.56 kW, WB = 9.20 kW, WC = 4.60 kW।',
            bn: 'প্রতি ফেজের প্রকৃত ক্ষমতা: WA = ১৬.৫৬ kW, WB = ৯.২০ kW, WC = ৪.৬০ kW।'
          }
        },
        {
          stepNumber: 2,
          description: {
            en: 'Total true active power registered by the 3-element meter:\nP_true = WA + WB + WC = 16.56 + 9.20 + 4.60 = 30.36 kW.',
            hi: '3-एलिमेंट मीटर द्वारा कुल वास्तविक शक्ति: P_true = 16.56 + 9.20 + 4.60 = 30.36 kW।',
            bn: '৩-এলিমেন্ট মিটার দ্বারা মোট প্রকৃত ক্ষমতা: P_true = ১৬.৫৬ + ৯.২০ + ৪.৬০ = ৩০.৩৬ kW।'
          }
        },
        {
          stepNumber: 3,
          description: {
            en: 'Blondel\'s Theorem Violation Analysis: A 4-wire system has N = 4 active conductors. Blondel\'s theorem mandates N - 1 = 3 wattmeter elements. If an installer incorrectly connects a 2-element meter (using Line C as common), the potential coils measure Vac and Vbc instead of Van and Vbn, completely omitting the neutral conductor voltage drop (Vn) from the measurement equation.',
            hi: 'ब्लोंडेल प्रमेय उल्लंघन विश्लेषण: 4-तार प्रणाली में N = 4 चालक होते हैं, अतः N - 1 = 3 मीटर अनिवार्य हैं। 2-एलिमेंट मीटर लगाने से न्यूट्रल करंट की ऊर्जा मीटरिंग से छूट जाती है।',
            bn: 'ব্লন্ডেল উপপাদ্য লঙ্ঘন বিশ্লেষণ: ৪-তার ব্যবস্থায় পরিবাহী N = ৪, ফলে N - ১ = ৩ এলিমেন্ট বাধ্যতামূলক। ২-এলিমেন্ট মিটার লাগালে নিউট্রাল কারেন্টের মাধ্যমে পরিবাহিত ক্ষমতা বাদ পড়ে যায়।'
          }
        },
        {
          stepNumber: 4,
          description: {
            en: 'Engineering Conclusion: Because the neutral conductor carries significant unbalanced return current (In = -(Ia + Ib + Ic) ≠ 0), a 2-element meter creates substantial revenue errors (often 10% to 30% under-billing or over-billing depending on load unbalance). Utility standards (e.g., ANSI C12.1 and IEC 62053) legally require 3-element meters (3P4W) for all four-wire commercial and industrial revenue points.',
            hi: 'इंजीनियरिंग निष्कर्ष: न्यूट्रल में करंट बहने के कारण 2-तत्व मीटर 10% से 30% तक बिलिंग त्रुटि देता है। अतः औद्योगिक 4-तार सप्लाई पर 3-एलिमेंट (3P4W) मीटर लगाना कानूनी रूप से अनिवार्य है।',
            bn: 'প্রকৌশলগত সিদ্ধান্ত: নিউট্রাল দিয়ে প্রচুর কারেন্ট প্রবাহিত হওয়ার কারণে ২-এলিমেন্ট মিটারে ১০% থেকে ৩০% পর্যন্ত ভুল বিলিং হতে পারে। তাই ৪-তার সংযোগে ৩-এলিমেন্ট (3P4W) মিটার বসানো বিধিবদ্ধ নিয়ম।'
          }
        }
      ]
    }
  ],
  importantPoints: {
    en: [
      'In a 4-wire system, Blondel\'s Theorem strictly requires N - 1 = 3 wattmeters to achieve 100% metering accuracy under unbalanced load.',
      'Each of the three wattmeter elements measures the true per-phase active power: P = Van·Ia·cos(ϕa).',
      'Using a 2-element meter on a 4-wire service allows unmetered power to return through the neutral conductor, creating massive billing errors.',
      'An artificial neutral star point created with equal resistors allows three-wattmeter power measurement on 3-wire systems.'
    ],
    hi: [
      '4-तार प्रणाली में सटीक मापन के लिए ब्लोंडेल प्रमेय के अनुसार 3 वाटमीटर अनिवार्य हैं।',
      'प्रत्येक वाटमीटर तत्व अपने फेज की वास्तविक शक्ति मापता है: P = Van·Ia·cos(ϕa)।',
      '4-तार सेवा पर 2-तत्व मीटर लगाने से न्यूट्रल से लौटने वाली बिजली मीटर में दर्ज नहीं हो पाती।',
      'समान प्रतिरोधों द्वारा बनाए गए कृत्रिम न्यूट्रल से 3-तार प्रणालियों में भी 3-वाटमीटर विधि का उपयोग किया जा सकता है।'
    ],
    bn: [
      '৪-তার সিস্টেমে শতভাগ সঠিক পরিমাপের জন্য ব্লন্ডেল উপপাদ্য মতে ৩টি ওয়াটমিটার ব্যবহার করা বাধ্যতামূলক।',
      'তিনটি ওয়াটমিটারের প্রতিটি নিজ নিজ ফেজের প্রকৃত ক্ষমতা পরিমাপ করে: P = Van·Ia·cos(ϕa)।',
      '৪-তার লাইনে ২-এলিমেন্ট মিটার বসালে নিউট্রাল দিয়ে ফিরে যাওয়া কারেন্টের বিদ্যুৎ চুরি বা অপচয় ধরা পড়ে না।',
      'সমান মানের রেজিস্টর দিয়ে তৈরি কৃত্রিম নিউট্রালের সাহায্যে ৩-তার সিস্টেমেও ৩-ওয়াটমিটার পদ্ধতি প্রয়োগ করা যায়।'
    ]
  },
  commonMistakes: {
    en: [
      'Mistake: Installing a 2-element meter on a 4-wire commercial service to cut metering costs. Correction: 2-element meters fail to register power returned via the neutral, resulting in up to 33% under-billing.',
      'Mistake: Using unequal resistors when constructing an artificial neutral star point. Correction: The artificial star point will shift off-center (neutral displacement), inducing measurement errors.',
      'Mistake: Assuming that 3-element meters cannot handle reverse power flow from rooftop solar PV. Correction: Modern 4-quadrant digital meters measure bidirectional active and reactive energy independently.'
    ],
    hi: [
      'त्रुटि: लागत बचाने के लिए 4-तार लाइन पर 2-तत्व मीटर लगाना। सुधार: 2-तत्व मीटर न्यूट्रल करंट को नहीं माप पाते, जिससे 33% तक राजस्व हानि होती है।',
      'त्रुटि: कृत्रिम न्यूट्रल बनाते समय असमान प्रतिरोधों का उपयोग करना। सुधार: प्रतिरोध बिल्कुल समान होने चाहिए ताकि न्यूट्रल केंद्र में रहे।',
      'त्रुटि: यह मानना कि 3-तत्व मीटर सोलर पैनल से आने वाली रिवर्स पावर नहीं माप सकते। सुधार: आधुनिक 4-क्वाड्रेंट मीटर दोनों दिशाओं की बिजली सही मापते हैं।'
    ],
    bn: [
      'ভুল: খরচ কমাতে ৪-তার বাণিজ্যিক লাইনে ২-এলিমেন্ট মিটার বসানো। সংশোধন: ২-এলিমেন্ট মিটার নিউট্রাল কারেন্ট রেকর্ড করতে পারে না, ফলে ৩৩% পর্যন্ত বিল ঘাটতি হয়।',
      'ভুল: কৃত্রিম নিউট্রাল তৈরির সময় অসমান রোধ ব্যবহার করা। সংশোধন: তিনটি রোধের মান হুবহু সমান হতে হবে যেন নিউট্রাল পয়েন্ট কেন্দ্রেই থাকে।',
      'ভুল: ধারণা করা যে ৩-এলিমেন্ট মিটার সোলার পিভির বিপরীত বিদ্যুৎ মাপতে পারে না। সংশোধন: আধুনিক ৪-কোয়াড্রেন্ট মিটার উভয় দিকের বিদ্যুৎ সঠিকভাবে পরিমাপ করে।'
    ]
  },
  keyTakeaways: {
    en: [
      'The three-wattmeter method is the global engineering standard for all four-wire commercial and industrial installations.',
      'It provides individual phase diagnostic insights (per-phase kW, kVAR, V, and I unbalance) in addition to aggregate totals.',
      'Modern solid-state electronic meters sample waveforms directly, computing active, reactive, and harmonic distortion powers according to IEEE 1459.'
    ],
    hi: [
      'त्रि-वाटमीटर विधि सभी 4-तार वाणिज्यिक और औद्योगिक प्रतिष्ठानों के लिए वैश्विक मानक है।',
      'यह कुल शक्ति के साथ-साथ प्रत्येक फेज के अलग-अलग kW, kVAR और वोल्टेज-धारा असंतुलन की जानकारी देती है।',
      'आधुनिक सॉलिड-स्टेट मीटर सीधे तरंगरूपों को डिजिटाइज़ करके IEEE 1459 के अनुसार हार्मोनिक्स और शक्ति की गणना करते हैं।'
    ],
    bn: [
      'ত্রি-ওয়াটমিটার পদ্ধতি হলো সমস্ত ৪-তার বাণিজ্যিক ও শিল্প প্রতিষ্ঠানের জন্য বৈশ্বিক প্রকৌশল মানদণ্ড।',
      'এটি মোট বিদ্যুতের পাশাপাশি প্রতিটি ফেজের স্বতন্ত্র kW, kVAR এবং ভোল্টেজ-কারেন্ট ভারসাম্যহীনতা প্রদর্শন করে।',
      'আধুনিক ডিজিটাল মিটারগুলি সরাসরি ওয়েভফর্ম ডিজিটাইজ করে IEEE 1459 নিয়ম অনুযায়ী প্রকৃত ক্ষমতা ও হারমোনিক্স হিসাব করে।'
    ]
  },
  practiceQuestions: [
    {
      id: 'pq-ch14-l06-01',
      question: {
        en: 'A 4-wire star load is fed by a 400V/230V system. Single-phase loads draw: Ia = 100 A at unity PF on Phase A, Ib = 0 A on Phase B, and Ic = 0 A on Phase C. What does each of the three wattmeters read, and what is total power?',
        hi: 'एक 4-तार प्रणाली में फेज A पर 100 A (यूनिटी PF), फेज B पर 0 A तथा फेज C पर 0 A लोड है। तीनों वाटमीटर क्या पढ़ेंगे और कुल शक्ति क्या होगी?',
        bn: 'একটি ৪-তার সিস্টেমে ফেজ A তে ১০০ A (ইউনিটি PF), ফেজ B তে ০ A এবং ফেজ C তে ০ A লোড আছে। তিনটি ওয়াটমিটার কত পাঠ প্রদর্শন করবে এবং মোট ক্ষমতা কত?'
      },
      hint: {
        en: 'WA = 230 · 100 · 1.0 = 23 kW; WB = 228 · 0 = 0 kW; WC = 230 · 0 = 0 kW. Total power = 23 kW.',
        hi: 'WA = 23 kW, WB = 0 kW, WC = 0 kW। कुल शक्ति = 23 kW होगी।',
        bn: 'WA = ২৩ kW, WB = ০ kW, WC = ০ kW। মোট ক্ষমতা = ২৩ kW।'
      }
    },
    {
      id: 'pq-ch14-l06-02',
      question: {
        en: 'Why must the three resistors forming an artificial star point in a 3-wire system have high ohmic values compared to the supply line impedance?',
        hi: '3-तार प्रणाली में कृत्रिम स्टार बिंदु बनाने वाले तीनों प्रतिरोधों का मान लाइन प्रतिबाधा की तुलना में बहुत अधिक क्यों होना चाहिए?',
        bn: '৩-তার সিস্টেমে কৃত্রিম স্টার পয়েন্ট গঠনকারী রেজিস্টরগুলির মান লাইন ইম্পিডেন্সের তুলনায় অনেক বেশি হওয়া জরুরি কেন?'
      },
      hint: {
        en: 'High resistance ensures that the measurement circuit draws negligible shunt current from the lines, avoiding loading errors and thermal dissipation losses.',
        hi: 'उच्च प्रतिरोध यह सुनिश्चित करता है कि मापन परिपथ लाइनों से नगण्य करंट ले, जिससे भार त्रुटि और बिजली की बर्बादी न हो।',
        bn: 'উচ্চ মানের রোধ নিশ্চিত করে যে পরিমাপ সার্কিটটি লাইন থেকে নগণ্য কারেন্ট গ্রহণ করে, ফলে লোডিং ত্রুটি ও অপচয় ঘটে না।'
      }
    }
  ],
  mcqs: [
    {
      id: 'mcq-ch14-l06-01',
      question: {
        en: 'Why does Blondel\'s Theorem require THREE wattmeter elements instead of two to measure power in a four-wire three-phase system?',
        hi: 'ब्लोंडेल प्रमेय के अनुसार 4-तार थ्री-फेज प्रणाली में शक्ति मापने के लिए दो के बजाय तीन वाटमीटर तत्वों की आवश्यकता क्यों होती है?',
        bn: 'ব্লন্ডেল উপপাদ্য অনুসারে ৪-তার থ্রি-ফেজ সিস্টেমে পাওয়ার পরিমাপে দুটির বদলে তিনটি ওয়াটমিটার এলিমেন্টের প্রয়োজন হয় কেন?'
      },
      options: [
        { en: 'Because an N-conductor system requires N - 1 elements, so a 4-conductor system requires 4 - 1 = 3 measurement elements referenced to the neutral', hi: 'क्योंकि N-तार प्रणाली के लिए N - 1 तत्वों की आवश्यकता होती है, अतः 4-तार प्रणाली के लिए 4 - 1 = 3 तत्व चाहिए', bn: 'কারণ N-তারবিশিষ্ট সিস্টেমে N - 1 টি এলিমেন্ট লাগে, তাই ৪-তার সিস্টেমে ৪ - ১ = ৩টি পরিমাপক এলিমেন্ট প্রয়োজন' },
        { en: 'Because three wattmeters run three times faster', hi: 'क्योंकि तीन वाटमीटर तीन गुना तेज चलते हैं', bn: 'কারণ তিনটি ওয়াটমিটার তিন গুণ দ্রুত ঘোরে' },
        { en: 'Because neutral conductors always carry direct current', hi: 'क्योंकि न्यूट्रल तार हमेशा डीसी ले जाता है', bn: 'কারণ নিউট্রাল সর্বদা ডিসি বহন করে' },
        { en: 'Because line voltage cannot be measured in a 4-wire system', hi: 'क्योंकि 4-तार प्रणाली में लाइन वोल्टेज नहीं मापा जा सकता', bn: 'কারণ ৪-তার সিস্টেমে লাইন ভোল্টেজ মাপা যায় না' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'In a 4-wire system (3 phases + 1 neutral), N = 4. Blondel\'s theorem strictly dictates that N - 1 = 3 wattmeter elements are required to capture the full energy flow.',
        hi: '4-तार प्रणाली में N = 4 होता है, अतः ब्लोंडेल प्रमेय के अनुसार 4 - 1 = 3 वाटमीटर तत्व आवश्यक होते हैं।',
        bn: '৪-তার সিস্টেমে N = ৪, তাই ব্লন্ডেল উপপাদ্য অনুসারে সম্পূর্ণ বিদ্যুৎ প্রবাহ পরিমাপ করতে ৪ - ১ = ৩টি এলিমেন্ট প্রয়োজন।'
      }
    },
    {
      id: 'mcq-ch14-l06-02',
      question: {
        en: 'Where are the current coils and potential coils connected in the standard three-wattmeter configuration for a four-wire star network?',
        hi: '4-तार स्टार नेटवर्क के लिए मानक त्रि-वाटमीटर विन्यास में करंट कॉइल और पोटेंशियल कॉइल कहां जुड़े होते हैं?',
        bn: '৪-তার স্টার নেটওয়ার্কের জন্য আদর্শ ত্রি-ওয়াটমিটার সংযোগে কারেন্ট কয়েল ও ভোল্টেজ কয়েল কীভাবে যুক্ত থাকে?'
      },
      options: [
        { en: 'One current coil in each of the three phase lines (A, B, C); each potential coil connected between its respective phase line and the common neutral wire (N)', hi: 'तीनों फेज लाइनों (A, B, C) में एक-एक करंट कॉइल; प्रत्येक पोटेंशियल कॉइल अपनी संबंधित फेज लाइन और कॉमन न्यूट्रल (N) के बीच', bn: 'প্রতিটি ফেজ লাইনে (A, B, C) একটি করে কারেন্ট কয়েল; এবং প্রতিটি ভোল্টেজ কয়েল নিজ নিজ ফেজ লাইন ও সাধারণ নিউট্রালের (N) মধ্যে' },
        { en: 'All three current coils in the neutral conductor in series', hi: 'तीनों करंट कॉइल न्यूट्रल में सीरीज में', bn: 'সবগুলি কারেন্ট কয়েল নিউট্রাল তারে সিরিজে' },
        { en: 'Two current coils in line A and one in line B', hi: 'दो करंट कॉइल लाइन A में और एक लाइन B में', bn: 'দুটি কারেন্ট কয়েল লাইন A তে এবং একটি লাইন B তে' },
        { en: 'Potential coils connected between phase lines only, leaving neutral disconnected', hi: 'पोटेंशियल कॉइल केवल फेज के बीच, न्यूट्रल खुला छोड़कर', bn: 'ভোল্টেজ কয়েল কেবল ফেজ লাইনে, নিউট্রাল সংযোগহীন রেখে' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Each wattmeter element measures one phase: current coil senses line current Ia, Ib, or Ic; potential coil senses phase voltage Van, Vbn, or Vcn.',
        hi: 'प्रत्येक वाटमीटर एक फेज को मापता है: करंट कॉइल फेज धारा लेती है और पोटेंशियल कॉइल फेज वोल्टेज (Van, Vbn, Vcn) लेती है।',
        bn: 'প্রতিটি ওয়াটমিটার একটি নির্দিষ্ট ফেজ পরিমাপ করে: কারেন্ট কয়েল লাইন কারেন্ট নেয় এবং ভোল্টেজ কয়েল ফেজ ভোল্টেজ (Van, Vbn, Vcn) পরিমাপ করে।'
      }
    },
    {
      id: 'mcq-ch14-l06-03',
      question: {
        en: 'What financial consequence occurs if an electrical utility installs a 2-element meter on a four-wire commercial customer service with heavy single-phase loads on Phase C?',
        hi: 'यदि बिजली कंपनी भारी सिंगल-फेज लोड वाली 4-तार सेवा पर 2-तत्व मीटर लगा दे, तो क्या वित्तीय परिणाम होगा?',
        bn: 'ভারী একক-ফেজ লোডযুক্ত ৪-তার সংযোগে বিদ্যুৎ সংস্থা যদি ২-এলিমেন্ট মিটার বসায়, তবে কী আর্থিক ক্ষতি হবে?'
      },
      options: [
        { en: 'Phase C loads returning through the neutral are completely unmetered, resulting in massive under-billing of up to 33% of total consumption', hi: 'न्यूट्रल से लौटने वाला फेज C का लोड मीटर में दर्ज नहीं होगा, जिससे कुल खपत का 33% तक बिल नहीं बनेगा (राजस्व हानि)', bn: 'নিউট্রাল দিয়ে ফিরে আসা ফেজ C এর লোড মোটেই রেকর্ড হবে না, ফলে মোট খরচের ৩৩% পর্যন্ত বিদ্যুৎ ফ্রি চলে যাবে' },
        { en: 'The meter spins backward at double speed', hi: 'मीटर दोगुनी गति से उल्टा घूमेगा', bn: 'মিটার দ্বিগুণ গতিতে উল্টো ঘুরবে' },
        { en: 'Customer is overbilled by 173%', hi: 'ग्राहक से 173% अधिक बिल वसूला जाएगा', bn: 'গ্রাহকের বিল ১৭৩% বেশি আসবে' },
        { en: 'The utility transformer will explode', hi: 'ट्रांसफार्मर ब्लास्ट हो जाएगा', bn: 'ট্রান্সফরমার বিস্ফোরিত হবে' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'In a 2-element meter, Phase C acts as the common voltage reference and has no current coil. Current from Phase C to Neutral never passes through either current coil, so it is never billed.',
        hi: '2-तत्व मीटर में फेज C पर कोई करंट कॉइल नहीं होती। अतः फेज C से न्यूट्रल में जाने वाला करंट कभी मीटर में दर्ज नहीं होता।',
        bn: '২-এলিমেন্ট মিটারে ফেজ C তে কোনো কারেন্ট কয়েল থাকে না। ফলে ফেজ C থেকে নিউট্রালে যাওয়া কারেন্ট মিটারে রেকর্ড হয় না এবং বিল হয় না।'
      }
    },
    {
      id: 'mcq-ch14-l06-04',
      question: {
        en: 'How can the three-wattmeter method be used to measure power in a 3-phase 3-wire network when no system neutral is physically present?',
        hi: 'जब कोई सिस्टम न्यूट्रल मौजूद न हो, तब 3-तार नेटवर्क में 3-वाटमीटर विधि का उपयोग कैसे किया जा सकता है?',
        bn: 'যখন কোনো ফিজিক্যাল নিউট্রাল উপস্থিত থাকে না, তখন ৩-তার নেটওয়ার্কে কীভাবে ৩-ওয়াটমিটার পদ্ধতি প্রয়োগ করা যায়?'
      },
      options: [
        { en: 'By creating an Artificial Star Point by connecting the return terminals of the three identical-resistance potential coils together', hi: 'तीनों समान-प्रतिरोध वाले पोटेंशियल कॉइल के रिटर्न टर्मिनलों को एक साथ जोड़कर कृत्रिम स्टार बिंदु बनाकर', bn: 'তিনটি সম-মানের রোধবিশিষ্ট ভোল্টেজ কয়েলের শেষ প্রান্ত একসাথে যুক্ত করে একটি কৃত্রিম স্টার পয়েন্ট তৈরি করার মাধ্যমে' },
        { en: 'By burying a copper rod into the ground and connecting potential coils to dirt', hi: 'जमीन में तांबे की छड़ गाड़कर', bn: 'মাটিতে তামার রড পুঁতে' },
        { en: 'By short-circuiting Phase A to Phase B', hi: 'फेज A और B को शॉर्ट करके', bn: 'ফেজ A ও B শর্ট করে' },
        { en: 'By connecting all three current coils in series with one phase', hi: 'तीनों करंट कॉइल को एक फेज में जोड़कर', bn: 'সবগুলি কারেন্ট কয়েল একটি ফেজে যুক্ত করে' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Connecting three matched potential coils in star forms an artificial star point at the centroid potential (0 V), allowing accurate 3-wattmeter measurement.',
        hi: 'तीन समान पोटेंशियल कॉइल को स्टार में जोड़ने से केंद्र में 0 V का एक कृत्रिम न्यूट्रल बन जाता है, जिससे सटीक मापन संभव होता है।',
        bn: 'তিনটি সমান মানের ভোল্টেজ কয়েল স্টারে যুক্ত করলে কেন্দ্রে একটি কৃত্রিম নিউট্রাল বিন্দু (০ V) তৈরি হয় যা সঠিক পাঠ দেয়।'
      }
    },
    {
      id: 'mcq-ch14-l06-05',
      question: {
        en: 'In an unbalanced 4-wire star load, three wattmeters read: WA = 15 kW, WB = 10 kW, and WC = 5 kW. What is the total real power supplied to the load?',
        hi: 'एक असंतुलित 4-तार स्टार लोड में तीन वाटमीटर WA = 15 kW, WB = 10 kW, और WC = 5 kW पढ़ते हैं। कुल वास्तविक शक्ति क्या होगी?',
        bn: 'একটি ভারসাম্যহীন ৪-তার স্টার লোডে তিনটি ওয়াটমিটার WA = ১৫ kW, WB = ১০ kW এবং WC = ৫ kW পাঠ প্রদর্শন করে। মোট বাস্তব ক্ষমতা কত?'
      },
      options: [
        { en: '30 kW', hi: '30 kW', bn: '৩০ kW' },
        { en: '10 kW', hi: '10 kW', bn: '১০ kW' },
        { en: '51.96 kW', hi: '51.96 kW', bn: '৫১.৯৬ kW' },
        { en: '15 kW', hi: '15 kW', bn: '১৫ kW' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Total real power in the three-wattmeter method is the algebraic sum of the three readings: P = WA + WB + WC = 15 + 10 + 5 = 30 kW.',
        hi: 'त्रि-वाटमीटर विधि में कुल शक्ति तीनों रीडिंग का साधारण योग होती है: P = 15 + 10 + 5 = 30 kW।',
        bn: 'ত্রি-ওয়াটমিটার পদ্ধতিতে মোট বাস্তব ক্ষমতা হলো তিনটি পাঠের সরাসরি যোগফল: P = ১৫ + ১০ + ৫ = ৩০ kW।'
      }
    },
    {
      id: 'mcq-ch14-l06-06',
      question: {
        en: 'Which ANSI meter form designation denotes a full 3-element, 4-wire wye revenue socket meter with three current and three voltage sensors?',
        hi: 'कौन सा ANSI मीटर पदनाम 3-तत्व, 4-तार वाई (स्टार) राजस्व सॉकेट मीटर को दर्शाता है?',
        bn: 'কোন ANSI মিটার ফর্মটি পূর্ণাঙ্গ ৩-এলিমেন্ট, ৪-তার ওয়াই (স্টার) এনার্জি মিটার নির্দেশ করে?'
      },
      options: [
        { en: 'Form 9S (or Form 16S)', hi: 'Form 9S (या Form 16S)', bn: 'Form 9S (বা Form 16S)' },
        { en: 'Form 2S', hi: 'Form 2S', bn: 'Form 2S' },
        { en: 'Form 1S', hi: 'Form 1S', bn: 'Form 1S' },
        { en: 'Form 12S', hi: 'Form 12S', bn: 'Form 12S' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'ANSI Form 9S (transformer rated) and Form 16S (self-contained) are the industry standard 3-element meters designed specifically for 4-wire wye services.',
        hi: 'ANSI Form 9S और Form 16S विशेष रूप से 4-तार स्टार सेवाओं के लिए बनाए गए मानक 3-तत्व मीटर हैं।',
        bn: 'ANSI Form 9S এবং Form 16S হলো ৪-তার স্টার লাইনের জন্য বিশেষভাবে তৈরি স্ট্যান্ডার্ড ৩-এলিমেন্ট মিটার।'
      }
    },
    {
      id: 'mcq-ch14-l06-07',
      question: {
        en: 'Under IEEE Standard 1459, what is the difference between Arithmetic Apparent Power (S_arith) and Vector Apparent Power (S_vec) in an unbalanced system?',
        hi: 'IEEE 1459 के तहत असंतुलित प्रणाली में अंकगणितीय आभासी शक्ति (S_arith) और सदिश आभासी शक्ति (S_vec) में क्या अंतर है?',
        bn: 'IEEE 1459 অনুসারে ভারসাম্যহীন সিস্টেমে পাটিগাণিতিক আপাত ক্ষমতা (S_arith) ও ভেক্টর আপাত ক্ষমতার (S_vec) মধ্যে পার্থক্য কী?'
      },
      options: [
        { en: 'S_arith is the scalar sum of phase apparent powers (Sa + Sb + Sc) and is always greater than or equal to S_vec, accurately reflecting thermal loading of conductors', hi: 'S_arith फेज आभासी शक्तियों का अदिश योग (Sa + Sb + Sc) है जो हमेशा S_vec से बड़ा या बराबर होता है और तारों के थर्मल लोड को सही दर्शाता है', bn: 'S_arith হলো ফেজ আপাত ক্ষমতাগুলির স্কেলার যোগফল (Sa + Sb + Sc), যা সর্বদা S_vec এর চেয়ে বড় বা সমান হয় এবং তারের তাপীয় লোড সঠিকভাবে প্রকাশ করে' },
        { en: 'S_arith is always zero', hi: 'S_arith हमेशा शून्य होता है', bn: 'S_arith সর্বদা শূন্য' },
        { en: 'S_vec ignores active power', hi: 'S_vec सक्रिय शक्ति की उपेक्षा करता है', bn: 'S_vec সক্রিয় ক্ষমতাকে অগ্রাহ্য করে' },
        { en: 'There is no difference; they are mathematically identical', hi: 'कोई अंतर नहीं है, दोनों समान हैं', bn: 'কোনো পার্থক্য নেই, দুটিই হুবহু এক' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'In unbalanced circuits, S_arith = Sa + Sb + Sc >= S_vec. S_arith represents the true physical thermal capacity required from transformers and cables, making it favored for demand billing under IEEE 1459.',
        hi: 'असंतुलित सर्किट में S_arith >= S_vec होता है। S_arith ट्रांसफार्मर और तारों की वास्तविक हीटिंग क्षमता को दर्शाता है।',
        bn: 'ভারসাম্যহীন সার্কিটে S_arith >= S_vec হয়। S_arith তার ও ট্রান্সফরমারের প্রকৃত তাপীয় ক্ষমতা প্রকাশ করায় বিলিংয়ে এটি অত্যন্ত গুরুত্বপূর্ণ।'
      }
    },
    {
      id: 'mcq-ch14-l06-08',
      question: {
        en: 'If one phase of a three-element electronic energy meter has its voltage test link left open by mistake during commissioning, what will happen?',
        hi: 'यदि चालू करते समय 3-तत्व इलेक्ट्रॉनिक मीटर के एक फेज का वोल्टेज टेस्ट लिंक गलती से खुला रह जाए, तो क्या होगा?',
        bn: 'কমিশনিংয়ের সময় ৩-এলিমেন্ট ইলেকট্রনিক এনার্জি মিটারের একটি ফেজের ভোল্টেজ টেস্ট লিংক ভুলবশত খোলা থাকলে কী ঘটবে?'
      },
      options: [
        { en: 'That phase element senses zero voltage and registers zero kilowatt-hours, under-registering total facility consumption by approximately one-third', hi: 'वह तत्व शून्य वोल्टेज समझेगा और शून्य kWh दर्ज करेगा, जिससे कुल बिलिंग लगभग एक-तिहाई कम हो जाएगी', bn: 'ঐ ফেজের এলিমেন্টটি শূন্য ভোল্টেজ পাবে এবং শূন্য kWh রেকর্ড করবে, ফলে মোট বিদ্যুৎ বিল প্রায় এক-তৃতীয়াংশ কম আসবে' },
        { en: 'The meter explodes immediately', hi: 'मीटर तुरंत ब्लास्ट हो जाएगा', bn: 'মিটার সাথে সাথে বিস্ফোরিত হবে' },
        { en: 'The meter automatically doubles the voltage on the other two phases', hi: 'मीटर अन्य दो फेजों पर वोल्टेज दोगुना कर देगा', bn: 'মিটার বাকি দুটি ফেজে স্বয়ংক্রিয়ভাবে ভোল্টেজ দ্বিগুণ করবে' },
        { en: 'The neutral conductor will melt', hi: 'न्यूट्रल पिघल जाएगा', bn: 'নিউট্রাল তার গলে যাবে' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'With the voltage link open, V = 0 for that element. Therefore, P = V · I · cos(ϕ) = 0 · I · cos(ϕ) = 0. That entire phase\'s power goes unmeasured until discovered during an audit.',
        hi: 'वोल्टेज लिंक खुला होने पर उस तत्व पर V = 0 होता है, जिससे P = 0 हो जाता है और उस फेज की बिजली रिकॉर्ड नहीं होती।',
        bn: 'ভোল্টেজ লিংক খোলা থাকলে ঐ এলিমেন্টের V = ০ হয়, ফলে P = ০ হয়ে যায় এবং সম্পূর্ণ ফেজের বিদ্যুৎ রেকর্ডহীন থেকে যায়।'
      }
    }
  ]
};

export const LESSON_THREE_WATTMETER_FOUR_WIRE_MEASUREMENT = LESSON_THREE_WATTMETER_METHOD;
