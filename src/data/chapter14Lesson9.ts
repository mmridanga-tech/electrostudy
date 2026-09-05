import { Lesson } from '../types';

export const LESSON_INDUSTRIAL_METERING_CASE_STUDY: Lesson = {
  id: 'lsn-ch14-industrial-metering-case-study',
  topicId: 'tp-industrial-three-phase-metering',
  chapterId: 'ch-three-phase',
  order: 9,
  title: {
    en: 'Industrial Three-Phase Measurement, Metering & Troubleshooting',
    hi: 'औद्योगिक थ्री-फेज मापन, मीटरिंग एवं ट्रबलशूटिंग',
    bn: 'শিল্প থ্রি-ফেজ পরিমাপ, মিটারিং ও ট্রাবলশুটিং'
  },
  description: {
    en: 'Master industrial switchboard metering schemes, CT/PT secondary wiring topologies, test blocks (FT switches), meter multiplying factor calculations, and systematic field troubleshooting. Diagnose reversed CT polarities, open CT hazards, blown PT fuses, phase sequence reversals, 2-element vs 2.5-element vs 3-element meter architectures, and industrial energy billing metrics (kWh, kVARh, kVAh, Maximum Demand) with sequence fault diagnostics.',
    hi: 'औद्योगिक स्विचबोर्ड मीटरिंग योजनाओं, CT/PT सेकेंडरी वायरिंग, टेस्ट टर्मिनल ब्लॉक (FT स्विच), मीटर गुणन कारक (MF) की गणना और व्यवस्थित फील्ड ट्रबलशूटिंग में महारत हासिल करें। उल्टे CT पोलरिटी, ओपन CT के खतरे, उड़े हुए PT फ्यूज, फेज रिवर्सल, 2 बनाम 2.5 बनाम 3-एलिमेंट मीटर और औद्योगिक टैरिफ बिलिंग (kWh, kVARh, kVAh, अधिकतम मांग MD) का निदान करें।',
    bn: 'শিল্প সুইচবোর্ড মিটারিং ব্যবস্থা, CT/PT সেকেন্ডারি ওয়্যারিং, টেস্ট ব্লক (FT সুইচ), মিটার গুণক ফ্যাক্টর (MF) গণনা এবং মাঠপর্যায়ের নিয়মতান্ত্রিক ত্রুটি নিরসন আয়ত্ত করুন। বিপরীত CT পোলারিটি, ওপেন CT এর বিপদ, ব্লোন PT ফিউজ, ফেজ রিভার্সাল, ২-এলিমেন্ট বনাম ২.৫-এলিমেন্ট বনাম ৩-এলিমেন্ট মিটার এবং শিল্প এনার্জি বিলিং মেট্রিক্স (kWh, kVARh, kVAh, সর্বোচ্চ চাহিদা MD) নির্ণয় করুন।'
  },
  estimatedMinutes: 50,
  easyExplanation: {
    en: 'In large industrial factories, electricity bills run into hundreds of thousands of dollars each month. Because massive currents (e.g., 2000 A) and medium voltages (11 kV or 33 kV) cannot be wired directly into an energy meter, instrument transformers (CTs and PTs) step them down to safe secondary levels (110 V and 5 A). But connecting these meters correctly is an engineering art! If an electrician connects just ONE current transformer wire backward (swapping S1 and S2), that phase measures negative power, canceling out the other phases so the meter spins backward or reports an artificially tiny power factor, triggering huge utility penalty fines! Learn how engineers use test switch blocks, phasor diagrams, and multimeter diagnostics to spot wiring bugs, blown PT fuses, and maximum demand billing traps.',
    hi: 'बड़े कारखानों में बिजली का बिल लाखों रुपये आता है। भारी करंट (2000 A) और हाई वोल्टेज (11 kV) को सीधे मीटर में नहीं जोड़ा जा सकता, इसलिए CT और PT इन्हें 110 V और 5 A में बदलते हैं। लेकिन इनकी वायरिंग में यदि एक भी तार उल्टा लग जाए (S1 और S2 उलट जाएं), तो वह फेज निगेटिव पावर मापने लगता है! इससे मीटर बहुत कम बिल दिखाता है या पावर फैक्टर पेनल्टी लगा देता है। टेस्ट टर्मिनल ब्लॉक (TTB), फेजर आरेख और मल्टीमीटर से इन गलतियों, उड़े हुए PT फ्यूज और मैक्सिमम डिमांड (MD) की समस्याओं को पकड़ना सीखें।',
    bn: 'বিশাল শিল্প কারখানায় প্রতি মাসে বিপুল অঙ্কের বিদ্যুৎ বিল আসে। সরাসরি ২০০০ A কারেন্ট বা ১১ kV ভোল্টেজ মিটারে দেওয়া যায় না, তাই CT ও PT ব্যবহার করে ১১০ V ও ৫ A তে নামিয়ে আনা হয়। কিন্তু মিটার ওয়্যারিংয়ে একটি মাত্র তার উল্টো লাগলে (S1 ও S2 পরিবর্তন হলে) মিটার উল্টো ঘোরে বা মারাত্মক পাওয়ার ফ্যাক্টর পেনাল্টি তৈরি হয়! টেস্ট ব্লক (FT সুইচ), ফেজর ডায়াগ্রাম এবং ফিল্ড ট্রাবলশুটিং কৌশলের মাধ্যমে ওয়্যারিং ত্রুটি, ব্লোন ফিউজ ও ম্যাক্সিমাম ডিমান্ড (MD) সমস্যা সমাধান করতে শিখুন।'
  },
  detailedExplanation: {
    en: 'Industrial electrical metering and switchboard instrumentation require rigorous engineering compliance with ANSI C12.20, IEC 62053, and utility tariff guidelines:\n\n1. Meter Element Topologies & Blondel\'s Application:\n   • 2-Element Meter: Employs 2 current coils and 2 potential coils. Applicable ONLY to 3-wire systems (delta or ungrounded star). Blondel\'s theorem proves N - 1 = 2 elements measure total 3-wire power under all balance conditions.\n   • 2.5-Element Meter: Utilizes 3 CTs but only 2 PTs (or delta PT configuration with star CTs). Employs cross-connected current circuits to estimate the third phase voltage via virtual vector addition. Accurate only when phase voltages remain reasonably balanced.\n   • 3-Element Meter: Contains 3 independent current elements and 3 potential elements connected to a common neutral. Strictly MANDATORY for 4-wire systems (star distribution with neutral return) carrying single-phase unbalanced loads.\n\n2. Meter Multiplying Factor (MF) & Energy Tariff Metrics:\n   • Meter Multiplying Factor: MF = CTR × PTR = (I_pri / I_sec) × (V_pri / V_sec).\n   • Active Energy: kWh = Meter Delta kWh × MF.\n   • Reactive Energy: kVARh (used to compute average monthly power factor = cos[arctan(kVARh / kWh)]).\n   • Apparent Energy: kVAh = √[kWh² + kVARh²]. In kVAh billing tariffs, low power factor directly increases the bill.\n   • Maximum Demand (MD): The highest average apparent power (kVA) or real power (kW) integrated over a 15-minute or 30-minute block interval during the billing cycle.\n\n3. Common Field Wiring Faults & Systematic Diagnostics:\n   • Reversed CT Polarity (S1-S2 Inversion): Current phasor is inverted by 180°. The affected meter element registers negative active power (P_ph = V·I·cos(θ + 180°) = -V·I·cos θ). The meter displays an artificially depressed total power and a drastically false capacitive power factor, triggering utility penalty tariffs.\n   • Blown PT Secondary Fuse: One potential coil reads 0.0 V while the other two read 110 V. The meter element loses 33.3% to 50% of its energy accumulation, while protective digital distance/undervoltage relays trip falsely on PT failure (VT fuse fail alarm).\n   • Open CT Secondary Circuit: Generates destructive high-voltage inductive peaks (several thousand volts) across the open terminals due to unsaturation of the transformer core by uncancelled primary ampere-turns. Immediate danger of insulation flashover and fatal electric shock. Always use shorting pins on the Test Terminal Block (TTB / FT Switch) BEFORE removing any meter lead!\n   • Phase Reversal (ACB vs ABC): Reverses motor rotation directions and causes directional overcurrent and power flow relays to trip improperly.\n\n4. Asymmetrical Fault Diagnostics in Industrial Systems:\n   • When metering detects severe current surges or asymmetrical voltage drops, engineers correlate symmetrical sequence components to identify fault types: SLG (series sequence loop, neutral current flows), Line-to-Line (parallel sequence loop, zero neutral current), and Double Line-to-Ground.',
    hi: 'औद्योगिक मीटरिंग एवं स्विचबोर्ड ट्रबलशूटिंग (ANSI C12 / IEC 62053):\n\n1. मीटर एलिमेंट वर्गीकरण:\n   • 2-एलिमेंट: केवल 3-तार प्रणालियों (डेल्टा) के लिए।\n   • 2.5-एलिमेंट: 3 CT और 2 PT वाली किफायती योजना।\n   • 3-एलिमेंट: 4-तार स्टार वितरण के लिए अनिवार्य।\n2. मीटर मल्टीप्लाइंग फैक्टर एवं बिलिंग:\n   • MF = CTR × PTR।\n   • एक्टिव (kWh), रिएक्टिव (kVARh) और अपरेंट (kVAh)।\n   • मैक्सिमम डिमांड (MD): 15 या 30 मिनट के अंतराल में अधिकतम kVA मांग।\n3. फील्ड वायरिंग दोष एवं निदान:\n   • उल्टा CT (S1-S2): 180° फेज उल्टा होकर निगेटिव पावर मापता है और भारी बिलिंग पेनल्टी लगती है।\n   • उड़ा हुआ PT फ्यूज: एक फेज वोल्टेज 0 V हो जाता है, जिससे मीटर कम ऊर्जा रिकॉर्ड करता है।\n   • ओपन CT सेकेंडरी: कोर में अनियंत्रित फ्लक्स से हजारों वोल्ट का घातक झटका और स्पार्क होता है। मीटर खोलने से पहले TTB पर शॉर्टिंग पिन लगाना अनिवार्य है।\n   • फेज रिवर्सल: मोटरों की दिशा उल्टी कर देता है और रिले को गलत ट्रिप करता है।',
    bn: 'শিল্প মিটারিং ও মাঠপর্যায়ের ত্রুটি নিরসন (ANSI C12 / IEC 62053):\n\n১. মিটার এলিমেন্ট প্রকারভেদ:\n   • ২-এলিমেন্ট: ৩-তার সিস্টেমের (ডেল্টা) জন্য উপযুক্ত।\n   • ২.৫-এলিমেন্ট: ৩টি CT ও ২টি PT যুক্ত ব্যবস্থা।\n   • ৩-এলিমেন্ট: ৪-তার স্টার সিস্টেমের জন্য অপরিহার্য।\n২. মিটার গুণক ও বিলিং মেট্রিক্স:\n   • MF = CTR × PTR।\n   • সক্রিয় শক্তি (kWh), প্রতিক্রিয়াশীল শক্তি (kVARh) ও আপাত শক্তি (kVAh)।\n   • ম্যাক্সিমাম ডিমান্ড (MD): ১৫ বা ৩০ মিনিটের উইন্ডোতে সর্বোচ্চ kVA চাহিদা।\n৩. সাধারণ ফিল্ড ত্রুটি ও সমাধান:\n   • বিপরীত CT পোলারিটি (S1-S2): ১৮০° ফেজ উল্টে গিয়ে নেগেটিভ পাওয়ার দেখায় ও পেনাল্টি সৃষ্টি করে।\n   • ব্লোন PT ফিউজ: এক ফেজে ০ ভোল্ট দেখায় এবং এক-তৃতীয়াংশ বিদ্যুৎ কম রেকর্ড হয়।\n   • ওপেন CT সেকেন্ডারি: কোর স্যাচুরেশনের কারণে মারাত্মক উচ্চ ভোল্টেজ (হাজার ভোল্ট) সৃষ্টি করে যা প্রাণঘাতী। মিটারের কাজ করার আগে টেস্ট ব্লকে শর্টিং পিন لگانا আবশ্যক।\n   • ফেজ রিভার্সাল: মোটরের ঘূর্ণন দিক উল্টে দেয় এবং সুরক্ষা রিলে ভুলভাবে সক্রিয় করে।'
  },
  formulas: [
    {
      id: 'f-slg-fault-current',
      symbol: 'I_{fault(SLG)}',
      expression: 'I_{fault(SLG)} = 3 \\cdot I_{a1} = \\frac{3 \\cdot E_a}{Z_1 + Z_2 + Z_0 + 3 \\cdot Z_f}',
      title: {
        en: 'Single Line-to-Ground Fault Current Formula',
        hi: 'सिंगल लाइन-टू-ग्राउंड फॉल्ट धारा सूत्र',
        bn: 'সিঙ্গেল লাইন-টু-গ্রাউন্ড ফল্ট কারেন্ট সূত্র'
      },
      description: {
        en: 'Computes the total short-circuit ground return current for an SLG fault with sequence networks connected in series.',
        hi: 'सीरीज में जुड़े सीक्वेंस नेटवर्कों के साथ SLG फॉल्ट की कुल शॉर्ट-सर्किट धारा की गणना करता है।',
        bn: 'সিরিজে যুক্ত সিকোয়েন্স নেটওয়ার্কের সাহায্যে SLG ফল্টের মোট শর্ট-সার্কিট কারেন্ট হিসাব করে।'
      },
      variables: [
        { symbol: 'E_a', name: { en: 'Pre-fault Phase A Thévenin internal line-to-neutral EMF (V)', hi: 'फॉल्ट से पहले का फेज A वोल्टेज (V)', bn: 'ফল্ট পূর্ববর্তী ফেজ A ভোল্টেজ (V)' } },
        { symbol: 'Z_1, Z_2, Z_0', name: { en: 'Positive, Negative, and Zero sequence Thévenin impedances (Ω)', hi: 'पॉजिटिव, नेगेटिव, जीरो सीक्वेंस प्रतिबाधाएं (Ω)', bn: 'পজিটিভ, নেগেটিভ ও জিরো সিকোয়েন্স ইম্পিডেন্স (Ω)' } },
        { symbol: 'Z_f', name: { en: 'Fault arc and contact impedance (Ω)', hi: 'फॉल्ट आर्क प्रतिबाधा (Ω)', bn: 'ফল্ট আর্ক ইম্পিডেন্স (Ω)' } }
      ]
    },
    {
      id: 'f-ll-fault-current',
      symbol: 'I_{fault(LL)}',
      expression: 'I_{fault(LL)} = \\sqrt{3} \\cdot I_{a1} = \\frac{\\sqrt{3} \\cdot E_a}{Z_1 + Z_2 + Z_f}',
      title: {
        en: 'Line-to-Line Fault Current Formula',
        hi: 'लाइन-टू-लाइन फॉल्ट धारा सूत्र',
        bn: 'লাইন-টু-লাইন ফল্ট কারেন্ট সূত্র'
      },
      description: {
        en: 'Calculates the line short-circuit current for a phase-to-phase fault with positive and negative networks in parallel.',
        hi: 'पैरेलल में जुड़े पॉजिटिव और नेगेटिव नेटवर्क के साथ दो फेजों के बीच फॉल्ट धारा की गणना करता है।',
        bn: 'প্যারালালে যুক্ত পজিটিভ ও নেগেটিভ নেটওয়ার্কের সাহায্যে লাইন-টু-লাইন ফল্ট কারেন্ট নির্ণয় করে।'
      },
      variables: [
        { symbol: 'I_{fault(LL)}', name: { en: 'RMS Short-Circuit Current flowing between faulted lines (A)', hi: 'फॉल्ट लाइनों के बीच RMS शॉर्ट-सर्किट धारा (A)', bn: 'ফল্ট লাইনের মধ্যবর্তী RMS শর্ট-সার্কিট কারেন্ট (A)' } }
      ]
    }
  ],
  diagrams: [
    {
      id: 'diag-ch14-fault-analysis',
      title: {
        en: 'Sequence Network Interconnections for SLG, LL, and DLG Faults',
        hi: 'SLG, LL एवं DLG फॉल्ट के लिए सीक्वेंस नेटवर्क इंटरकनेक्शन',
        bn: 'SLG, LL এবং DLG ফল্টের জন্য সিকোয়েন্স নেটওয়ার্ক ইন্টারকানেকশন'
      },
      caption: {
        en: 'Master schematic displaying Series connection for SLG fault, Parallel connection without zero sequence for LL fault, and 3-way Parallel connection for DLG fault.',
        hi: 'SLG के लिए सीरीज, LL के लिए पैरेलल (जीरो के बिना) और DLG के लिए 3-वे पैरेलल कनेक्शन आरेख।',
        bn: 'SLG এর জন্য সিরিজ, LL এর জন্য প্যারালাল এবং DLG এর জন্য ৩-মুখী প্যারালাল সিকোয়েন্স নেটওয়ার্ক সংযোগ চিত্র।'
      },
      svgType: 'circuit-ch14-industrial-metering'
    }
  ],
  sections: [
    {
      id: 'sec-ch14-substation-breaker-sizing',
      title: {
        en: 'Substation Engineering Paradox: Sizing Circuit Breakers for SLG Duty',
        hi: 'सबस्टेशन इंजीनियरिंग विरोधाभास: SLG ड्यूटी के लिए सर्किट ब्रेकर का आकार',
        bn: 'সাবস্টেশন ইঞ্জিনিয়ারিং প্যারাডক্স: SLG ডিউটির জন্য সার্কিট ব্রেকার সাইজিং'
      },
      content: {
        en: 'Junior electrical engineers often assume that a balanced three-phase fault (bolted 3-phase short circuit) always represents the worst-case, highest-magnitude fault current in a substation. Consequently, they size circuit breaker interrupting capacities based solely on 3-phase fault MVA.\n\nThis assumption can be disastrous! In modern substations with multiple solidly grounded autotransformers operating in parallel, the zero-sequence Thévenin impedance Z0 can be as low as 0.4 · Z1 to 0.6 · Z1! Substituting into the SLG formula with solid fault:\n\n• 3-Phase Fault Current: I_3ph = Ea / Z1\n• SLG Fault Current: I_SLG = 3·Ea / (Z1 + Z2 + Z0) ≈ 3·Ea / (Z1 + Z1 + 0.5·Z1) = 3·Ea / (2.5·Z1) = 1.20 · I_3ph!\n\nThe Single Line-to-Ground fault current is TWENTY PERCENT HIGHER than the 3-phase fault current! Failing to account for this causes circuit breakers to fail violently (arc chute explosion) during common single-phase lightning flashovers.',
        hi: 'कई नए इंजीनियर सोचते हैं कि 3-फेज फॉल्ट हमेशा सबसे बड़ा होता है। लेकिन बड़े सबस्टेशनों में जहां कई ट्रांसफार्मर ग्राउंड होते हैं, वहां Z0 का मान Z1 से बहुत कम (लगभग 0.5·Z1) हो जाता है। ऐसी स्थिति में SLG फॉल्ट करंट 3-फेज फॉल्ट से 20% तक अधिक हो सकता है! यदि ब्रेकर इसके अनुसार न चुना जाए, तो वह धमाके के साथ फट सकता है।',
        bn: 'অনেকেই মনে করেন ৩-ফেজ ফল্টই সর্বদা সর্বোচ্চ ফল্ট কারেন্ট তৈরি করে। কিন্তু বহু গ্রাউন্ডেড ট্রান্সফরমারযুক্ত সাবস্টেশনে Z0 এর মান Z1 এর চেয়ে কম (০.৫·Z1) হতে পারে। এর ফলে SLG ফল্ট কারেন্ট ৩-ফেজ ফল্ট অপেক্ষাও ২০% বেশি হতে পারে! সঠিক সাইজের ব্রেকার না দিলে সাধারণ বজ্রপাতের ফলেই ব্রেকার বিস্ফোরিত হতে পারে।'
      }
    }
  ],
  workedExamples: [
    {
      id: 'we-ch14-l09-01',
      title: {
        en: 'Single Line-to-Ground Short Circuit Current on a 132 kV Substation Bus',
        hi: '132 kV सबस्टेशन बस पर सिंगल लाइन-टू-ग्राउंड फॉल्ट धारा गणना',
        bn: '১৩২ kV সাবস্টেশন বাসে সিঙ্গেল লাইন-টু-গ্রাউন্ড ফল্ট কারেন্ট নির্ণয়'
      },
      problem: {
        en: 'A 132 kV (line-to-line), 50 Hz substation busbar has the following sequence Thévenin impedances:\nZ1 = j12.0 Ω, Z2 = j12.0 Ω, Z0 = j6.0 Ω.\nA solid Single Line-to-Ground (SLG) fault occurs on Phase A (fault impedance Zf = 0). Calculate: (a) Pre-fault line-to-neutral voltage Ea, (b) Positive sequence fault current Ia1, (c) Total short-circuit fault current Ifault, and (d) Compare Ifault with the balanced 3-phase fault current I_3ph.',
        hi: '132 kV सबस्टेशन बस पर प्रतिबाधाएं हैं: Z1 = j12 Ω, Z2 = j12 Ω, Z0 = j6 Ω। फेज A पर सॉलिड SLG फॉल्ट होने पर ज्ञात करें: (a) Ea, (b) Ia1, (c) कुल फॉल्ट धारा Ifault, और (d) 3-फेज फॉल्ट धारा से तुलना।',
        bn: 'একটি ১৩২ kV সাবস্টেশন বাসে সিকোয়েন্স ইম্পিডেন্স: Z1 = j১২ Ω, Z2 = j১২ Ω, Z0 = j৬ Ω। ফেজ A তে সলিড SLG ফল্ট হলে নির্ণয় করুন: (a) Ea, (b) Ia1, (c) মোট ফল্ট কারেন্ট Ifault, এবং (d) ৩-ফেজ ফল্টের সাথে তুলনা।'
      },
      solutionSteps: [
        {
          stepNumber: 1,
          description: {
            en: 'Pre-fault line-to-neutral voltage Ea:\nEa = 132,000 V / √3 = 76,210 V ∠0° = 76.21 kV.',
            hi: 'फॉल्ट पूर्व वोल्टेज Ea = 132,000 / √3 = 76,210 V।',
            bn: 'ফল্ট পূর্ববর্তী ভোল্টেজ Ea = ১৩২,০০০ / √3 = ৭৬,২১০ V।'
          }
        },
        {
          stepNumber: 2,
          description: {
            en: 'Total series loop sequence impedance:\nZ_loop = Z1 + Z2 + Z0 + 3·Zf = j12.0 + j12.0 + j6.0 + 0 = j30.0 Ω = 30.0 ∠90° Ω.',
            hi: 'कुल सीरीज लूप प्रतिबाधा = j12 + j12 + j6 = j30 Ω।',
            bn: 'মোট সিরিজ লুপ ইম্পিডেন্স = j১২ + j১২ + j৬ = j৩০ Ω।'
          }
        },
        {
          stepNumber: 3,
          description: {
            en: 'Compute sequence current Ia1:\nIa1 = Ea / Z_loop = 76,210 ∠0° / 30.0 ∠90° = 2,540.3 ∠-90° A = -j 2,540.3 A.',
            hi: 'सीक्वेंस धारा Ia1 = 76,210 / 30 = 2,540.3 A।',
            bn: 'সিকোয়েন্স কারেন্ট Ia1 = ৭৬,২১০ / ৩০ = ২,৫৪০.৩ A।'
          }
        },
        {
          stepNumber: 4,
          description: {
            en: 'Compute total SLG fault current Ifault:\nIfault = Ia = 3 · Ia1 = 3 · 2,540.3 A = 7,621 A = 7.621 kA.\nNow compare with balanced 3-phase fault current:\nI_3ph = Ea / Z1 = 76,210 / 12.0 = 6,351 A = 6.351 kA.\nNotice: Ifault_SLG (7.62 kA) is 20% LARGER than I_3ph (6.35 kA)! Ratio = 7621 / 6351 = 1.20.',
            hi: 'कुल SLG फॉल्ट धारा = 3 × 2,540.3 = 7,621 A (7.62 kA)।\n3-फेज फॉल्ट धारा = 76,210 / 12 = 6,351 A (6.35 kA)।\nSLG फॉल्ट 3-फेज फॉल्ट से ठीक 20% बड़ा है!',
            bn: 'মোট SLG ফল্ট কারেন্ট = ৩ × ২,৫৪০.৩ = ৭,৬২১ A (৭.৬২ kA)।\n৩-ফেজ ফল্ট কারেন্ট = ৭৬,২১০ / ১২ = ৬,৩৫১ A (৬.৩৫ kA)।\nSLG ফল্ট ৩-ফেজ ফল্টের চেয়ে ঠিক ২০% বড়!'
          }
        }
      ]
    },
    {
      id: 'we-ch14-l09-02',
      title: {
        en: 'Line-to-Line (LL) Asymmetrical Fault Analysis',
        hi: 'लाइन-टू-लाइन (LL) असममित फॉल्ट विश्लेषण',
        bn: 'লাইন-টু-লাইন (LL) অপ্রতিসম ফল্ট বিশ্লেষণ'
      },
      problem: {
        en: 'An 11 kV (line-to-line), 50 Hz synchronous generator with internal line-to-neutral pre-fault EMF Ea = 6,350.8 ∠0° V has sequence impedances Z1 = j1.5 Ω, Z2 = j1.5 Ω, and Z0 = j0.8 Ω. An ungrounded line-to-line short circuit occurs between phases B and C (Zf = 0). Determine: (a) The positive and negative sequence currents Ia1 and Ia2, (b) The fault current flowing in faulted phase B, and (c) The ratio of this LL fault current to the symmetrical 3-phase fault current.',
        hi: 'एक 11 kV (Ea = 6,350.8 V) जनरेटर में सीक्वेंस प्रतिबाधाएं Z1 = j1.5 Ω, Z2 = j1.5 Ω, Z0 = j0.8 Ω हैं। फेज B और C के बीच लाइन-टू-लाइन फॉल्ट होता है। ज्ञात करें: (a) सीक्वेंस धाराएं Ia1 और Ia2, (b) फॉल्ट धारा Ib, और (c) 3-फेज फॉल्ट धारा से इसका अनुपात।',
        bn: 'একটি ১১ kV (Ea = ৬,৩৫০.৮ V) জেনারেটরে সিকোয়েন্স ইম্পিডেন্স Z1 = j১.৫ Ω, Z2 = j১.৫ Ω, Z0 = j০.৮ Ω। ফেজ B ও C এর মধ্যে লাইন-টু-লাইন শর্ট সার্কিট ঘটে। নির্ণয় করুন: (a) সিকোয়েন্স কারেন্ট Ia1 ও Ia2, (b) ফল্ট কারেন্ট Ib, এবং (c) ৩-ফেজ ফল্ট কারেন্টের সাথে এর অনুপাত।'
      },
      solutionSteps: [
        {
          stepNumber: 1,
          description: {
            en: 'For an ungrounded LL fault between lines B and C, the positive and negative sequence networks connect in parallel (Ia0 = 0):\nIa1 = -Ia2 = Ea / (Z1 + Z2 + Zf) = 6,350.8 ∠0° / (j1.5 + j1.5) = 6,350.8 / j3.0 = -j 2,116.9 A = 2,116.9 ∠-90° A.',
            hi: 'LL फॉल्ट के लिए पॉजिटिव और नेगेटिव नेटवर्क पैरेलल में होते हैं: Ia1 = -Ia2 = Ea / (Z1 + Z2) = 6,350.8 / j3.0 = 2,116.9 ∠-90° A।',
            bn: 'LL ফল্টের ক্ষেত্রে পজিটিভ ও নেগেটিভ নেটওয়ার্ক প্যারালালে থাকে: Ia1 = -Ia2 = Ea / (Z1 + Z2) = ৬,৩৫০.৮ / j৩.০ = ২,১১৬.৯ ∠-৯০° A।'
          }
        },
        {
          stepNumber: 2,
          description: {
            en: 'Compute faulted phase B current Ib using symmetrical component synthesis:\nIb = Ia0 + a²·Ia1 + a·Ia2 = 0 + a²·Ia1 - a·Ia1 = (a² - a)·Ia1 = -j√3 · Ia1.\nIb = (-j√3) · (-j 2,116.9 A) = -√3 · 2,116.9 A = -3,666.6 A = 3,666.6 ∠180° A.\nFault current in phase C is equal and opposite: Ic = -Ib = +3,666.6 A.',
            hi: 'फेज B में फॉल्ट धारा: Ib = (a² - a)·Ia1 = -j√3 · Ia1 = -3,666.6 A (मान = 3,666.6 A)।',
            bn: 'ফেজ B তে ফল্ট কারেন্ট: Ib = (a² - a)·Ia1 = -j√3 · Ia1 = -৩,৬৬৬.৬ A (মান = ৩,৬৬৬.৬ A)।'
          }
        },
        {
          stepNumber: 3,
          description: {
            en: 'Compare with symmetrical 3-phase fault current:\nI_3ph = Ea / Z1 = 6,350.8 / 1.5 = 4,233.9 A.\nRatio of LL fault current to 3-phase fault current:\n|Ib_LL| / |I_3ph| = (√3 / 2) = 0.8660 = 86.6%.\nEngineering Principle: An ungrounded line-to-line fault current is ALWAYS exactly √3/2 (86.6%) of the symmetrical 3-phase fault current when Z1 = Z2.',
            hi: '3-फेज फॉल्ट से तुलना: I_3ph = 6,350.8 / 1.5 = 4,233.9 A। अनुपात = 3,666.6 / 4,233.9 = √3 / 2 = 86.6%।',
            bn: '৩-ফেজ ফল্টের সাথে তুলনা: I_3ph = ৬,৩৫০.৮ / ১.৫ = ৪,২৩৩.৯ A। অনুপাত = ৩,৬৬৬.৬ / ৪,২৩৩.৯ = √3 / ২ = ৮৬.৬%।'
          }
        }
      ]
    }
  ],
  importantPoints: {
    en: [
      'Single Line-to-Ground (SLG) fault connects Positive, Negative, and Zero sequence networks strictly in SERIES.',
      'Line-to-Line (LL) fault connects Positive and Negative sequence networks in PARALLEL, with Zero sequence deactivated.',
      'Double Line-to-Ground (DLG) fault connects all three sequence networks (Positive, Negative, Zero) in PARALLEL.',
      'When zero-sequence impedance Z0 is less than positive-sequence impedance Z1, the SLG fault current exceeds the 3-phase fault current.'
    ],
    hi: [
      'सिंगल लाइन-टू-ग्राउंड (SLG) फॉल्ट में तीनों नेटवर्क (Z1, Z2, Z0) बिल्कुल सीरीज में जुड़ते हैं।',
      'लाइन-टू-लाइन (LL) फॉल्ट में पॉजिटिव और नेगेटिव नेटवर्क पैरेलल में जुड़ते हैं और जीरो नेटवर्क बंद रहता है।',
      'डबल लाइन-टू-ग्राउंड (DLG) फॉल्ट में तीनों नेटवर्क पैरेलल में जुड़ते हैं।',
      'जब जीरो-सीक्वेंस प्रतिबाधा Z0, Z1 से कम होती है, तो SLG फॉल्ट धारा 3-फेज फॉल्ट धारा से भी अधिक हो जाती है।'
    ],
    bn: [
      'সিঙ্গেল লাইন-টু-গ্রাউন্ড (SLG) ফল্টে পজিটিভ, নেগেটিভ ও জিরো সিকোয়েন্স নেটওয়ার্ক নিশ্চিতভাবে সিরিজে যুক্ত হয়।',
      'লাইন-টু-লাইন (LL) ফল্টে পজিটিভ ও নেগেটিভ নেটওয়ার্ক প্যারালালে যুক্ত হয় এবং জিরো নেটওয়ার্ক বন্ধ থাকে।',
      'ডাবল লাইন-টু-গ্রাউন্ড (DLG) ফল্টে তিনটি নেটওয়ার্কই প্যারালালে সংযুক্ত হয়।',
      'যখন জিরো সিকোয়েন্স ইম্পিডেন্স Z0 পজিটিভ ইম্পিডেন্স Z1 এর চেয়ে কম হয়, তখন SLG ফল্ট কারেন্ট ৩-ফেজ ফল্টের চেয়েও বেশি হয়।'
    ]
  },
  commonMistakes: {
    en: [
      'Mistake: Sizing substation switchgear assuming that the 3-phase fault current is always the highest possible fault current. Correction: Solidly grounded systems with low Z0 experience higher currents during SLG faults.',
      'Mistake: Forgetting the factor of 3 in the fault impedance term (3·Zf) when connecting the zero sequence network in series for an SLG fault.',
      'Mistake: Attempting to include a zero-sequence network in an ungrounded Line-to-Line fault. Correction: Without a ground path, zero-sequence current cannot flow (Ia0 = 0).'
    ],
    hi: [
      'त्रुटि: यह मानकर ब्रेकर चुनना कि 3-फेज फॉल्ट हमेशा सबसे बड़ा होगा। सुधार: Z0 कम होने पर SLG फॉल्ट बड़ा होता है।',
      'त्रुटि: SLG सूत्र में फॉल्ट प्रतिबाधा के साथ 3 का गुणा (3·Zf) भूल जाना।',
      'त्रुटि: लाइन-टू-लाइन फॉल्ट में जीरो सीक्वेंस नेटवर्क को जोड़ना। सुधार: बिना अर्थ के जीरो सीक्वेंस धारा नहीं बह सकती (Ia0 = 0)।'
    ],
    bn: [
      'ভুল: ৩-ফেজ ফল্ট সর্বদা সর্বোচ্চ হবে ধরে নিয়ে ব্রেকার নির্ধারণ করা। সংশোধন: Z0 কম হলে SLG ফল্ট কারেন্ট বেশি হয়।',
      'ভুল: SLG সূত্রে ফল্ট ইম্পিডেন্সের সাথে ৩ এর গুণ (3·Zf) বাদ দেওয়া।',
      'ভুল: লাইন-টু-লাইন ফল্টে জিরো সিকোয়েন্স নেটওয়ার্ক যুক্ত করা। সংশোধন: গ্রাউন্ড পথ না থাকলে জিরো সিকোয়েন্স কারেন্ট শূন্য হয়।'
    ]
  },
  keyTakeaways: {
    en: [
      'Symmetrical components reduce complex 3-phase asymmetrical faults to elementary single-phase series and parallel circuits.',
      'Over 70% of power system faults are Single Line-to-Ground faults caused by insulation flashover and tree contacts.',
      'Protective relays (such as distance ANSI 21 and ground overcurrent ANSI 51N) rely on sequence currents to trip breakers selectively.'
    ],
    hi: [
      'सममितीय घटक जटिल 3-फेज फॉल्टों को साधारण एकल-फेज सीरीज और पैरेलल परिपथों में बदल देते हैं।',
      'पावर सिस्टम के 70% से अधिक फॉल्ट सिंगल लाइन-टू-ग्राउंड होते हैं।',
      'दूरी रिले (ANSI 21) और अर्थ फॉल्ट रिले (ANSI 51N) फॉल्ट को अलग करने के लिए इन सीक्वेंस धाराओं का उपयोग करते हैं।'
    ],
    bn: [
      'সিমেট্রিক্যাল কম্পোনেন্টস জটিল ৩-ফেজ ফল্টকে সহজ একক-ফেজ সিরিজ ও প্যারালাল সার্কিটে রূপান্তর করে।',
      'পাওয়ার সিস্টেমের ৭০% এর বেশি ত্রুটি হলো সিঙ্গেল লাইন-টু-গ্রাউন্ড ফল্ট।',
      'দূরত্ব রিলে (ANSI 21) এবং আর্থ ফল্ট রিলে (ANSI 51N) সুরক্ষার কাজে এই সিকোয়েন্স কারেন্ট ব্যবহার করে।'
    ]
  },
  practiceQuestions: [
    {
      id: 'pq-ch14-l09-01',
      question: {
        en: 'A solid Line-to-Line fault occurs on a generator with sequence impedances Z1 = j0.20 pu and Z2 = j0.20 pu. If pre-fault internal EMF is 1.0 pu, find the fault current in per-unit.',
        hi: 'Z1 = j0.20 pu और Z2 = j0.20 pu वाले जनरेटर पर लाइन-टू-लाइन फॉल्ट होने पर फॉल्ट धारा प्रति-इकाई (pu) में ज्ञात करें।',
        bn: 'Z1 = j০.২০ pu এবং Z2 = j০.২০ pu বিশিষ্ট জেনারেটরে লাইন-টু-লাইন ফল্ট হলে পার-ইউনিটে ফল্ট কারেন্ট কত হবে?'
      },
      hint: {
        en: 'Ia1 = 1.0 / (Z1 + Z2) = 1.0 / (j0.40) = -j2.5 pu. Then Ifault = √3 · |Ia1| = 1.732 · 2.5 = 4.33 pu.',
        hi: 'Ia1 = 1.0 / (j0.20 + j0.20) = -j2.5 pu। फॉल्ट धारा = √3 × 2.5 = 4.33 pu।',
        bn: 'Ia1 = ১.০ / (j০.২০ + j০.২০) = -j২.৫ pu। ফল্ট কারেন্ট = √3 × ২.৫ = ৪.৩৩ pu।'
      }
    },
    {
      id: 'pq-ch14-l09-02',
      question: {
        en: 'Why does a delta-star transformer block zero-sequence fault current from passing from its star secondary side to its delta primary side?',
        hi: 'डेल्टा-स्टार ट्रांसफार्मर जीरो-सीक्वेंस फॉल्ट धारा को स्टार सेकेंडरी से डेल्टा प्राइमरी में जाने से क्यों रोकता है?',
        bn: 'ডেল্টা-স্টার ট্রান্সফরমার কেন জিরো-সিকোয়েন্স ফল্ট কারেন্টকে স্টার সেকেন্ডারি থেকে ডেল্টা প্রাইমারিতে যেতে বাধা দেয়?'
      },
      hint: {
        en: 'Zero-sequence currents induced in the delta primary can only circulate inside the closed delta winding; with no neutral return wire on the delta side, they cannot flow into the primary lines.',
        hi: 'डेल्टा प्राइमरी में उत्पन्न जीरो-सीक्वेंस धारा केवल डेल्टा लूप के अंदर घूमती है; न्यूट्रल न होने के कारण यह लाइन तारों में नहीं जा सकती।',
        bn: 'ডেল্টায় আবিষ্ট জিরো-সিকোয়েন্স কারেন্ট কেবল ডেল্টা লুপের ভেতর ঘোরে; কোনো নিউট্রাল না থাকায় প্রাইমারি লাইনে যেতে পারে না।'
      }
    }
  ],
  mcqs: [
    {
      id: 'mcq-ch14-l09-01',
      question: {
        en: 'How are the three sequence networks (Positive, Negative, and Zero) interconnected to represent a Single Line-to-Ground (SLG) fault?',
        hi: 'सिंगल लाइन-टू-ग्राउंड (SLG) फॉल्ट को दर्शाने के लिए तीनों सीक्वेंस नेटवर्क कैसे आपस में जुड़े होते हैं?',
        bn: 'সিঙ্গেল লাইন-টু-গ্রাউন্ড (SLG) ফল্ট প্রকাশের জন্য তিনটি সিকোয়েন্স নেটওয়ার্ক কীভাবে পরস্পরের সাথে যুক্ত থাকে?'
      },
      options: [
        { en: 'All three sequence networks are connected strictly in SERIES', hi: 'तीनों सीक्वेंस नेटवर्क पूरी तरह सीरीज (श्रेणी) में जुड़े होते हैं', bn: 'তিনটি সিকোয়েন্স নেটওয়ার্কই পুরোপুরি সিরিজে যুক্ত থাকে' },
        { en: 'All three sequence networks are connected strictly in PARALLEL', hi: 'तीनों नेटवर्क पूरी तरह पैरेलल में जुड़े होते हैं', bn: 'তিনটি নেটওয়ার্ক পুরোপুরি প্যারালালে যুক্ত থাকে' },
        { en: 'Positive and Negative in parallel, with Zero disconnected', hi: 'पॉजिटिव और नेगेटिव पैरेलल में, जीरो अलग', bn: 'পজিটিভ ও নেগেটিভ প্যারালালে, জিরো বিচ্ছিন্ন' },
        { en: 'Zero sequence only, with Positive and Negative omitted', hi: 'केवल जीरो सीक्वेंस', bn: 'শুধুমাত্র জিরো সিকোয়েন্স' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'For an SLG fault on Phase A, boundary conditions dictate Ia1 = Ia2 = Ia0 = (1/3)·Ia. Equal current flowing through all three networks requires a SERIES interconnection.',
        hi: 'SLG फॉल्ट में तीनों सीक्वेंस धाराएं समान होती हैं (Ia1 = Ia2 = Ia0), इसलिए तीनों नेटवर्क सीरीज में जुड़े होते हैं।',
        bn: 'SLG ফল্টে তিনটি সিকোয়েন্স কারেন্ট সমান হয় (Ia1 = Ia2 = Ia0), ফলে তিনটি নেটওয়ার্ক অবশ্যই সিরিজে যুক্ত থাকে।'
      }
    },
    {
      id: 'mcq-ch14-l09-02',
      question: {
        en: 'Under what condition does the short-circuit current of a Single Line-to-Ground (SLG) fault exceed that of a balanced 3-phase symmetrical fault at the same bus?',
        hi: 'किस स्थिति में सिंगल लाइन-टू-ग्राउंड (SLG) फॉल्ट की शॉर्ट-सर्किट धारा उसी बस पर 3-फेज फॉल्ट से अधिक हो जाती है?',
        bn: 'কোন শর্তে একটি সিঙ্গেল লাইন-টু-গ্রাউন্ড (SLG) ফল্ট কারেন্ট একই বাসের ৩-ফেজ সুষম ফল্ট কারেন্টকে ছাড়িয়ে যায়?'
      },
      options: [
        { en: 'When the system zero-sequence impedance is significantly lower than the positive-sequence impedance (Z0 < Z1)', hi: 'जब प्रणाली की जीरो-सीक्वेंस प्रतिबाधा, पॉजिटिव-सीक्वेंस प्रतिबाधा से काफी कम हो (Z0 < Z1)', bn: 'যখন সিস্টেমের জিরো সিকোয়েন্স ইম্পিডেন্স পজিটিভ সিকোয়েন্স ইম্পিডেন্সের চেয়ে উল্লেখযোগ্যভাবে কম হয় (Z0 < Z1)' },
        { en: 'When all transformer neutrals are completely ungrounded', hi: 'जब ट्रांसफार्मर न्यूट्रल अनग्राउंडेड हों', bn: 'যখন সব ট্রান্সফরমার নিউট্রাল আনগ্রাউন্ডেড থাকে' },
        { en: 'When fault resistance Zf is greater than 100 Ω', hi: 'जब फॉल्ट प्रतिरोध 100 Ω से अधिक हो', bn: 'যখন ফল্ট রেজিস্ট্যান্স ১০০ Ω এর বেশি হয়' },
        { en: 'When system frequency drops to 25 Hz', hi: 'जब आवृत्ति 25 Hz हो जाती है', bn: 'যখন ফ্রিকোয়েন্সি ২৫ Hz এ নেমে যায়' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Ifault_SLG = 3·E / (2·Z1 + Z0), while I_3ph = E / Z1 = 3·E / 3·Z1. If Z0 < Z1, the denominator (2·Z1 + Z0) is smaller than 3·Z1, making Ifault_SLG greater than I_3ph.',
        hi: 'यदि Z0 < Z1 हो, तो SLG के हर (2·Z1 + Z0) का मान 3·Z1 से कम हो जाता है, जिससे SLG करंट 3-फेज करंट से बड़ा हो जाता है।',
        bn: 'যদি Z0 < Z1 হয়, তবে SLG এর হর (2·Z1 + Z0) ৩-ফেজের হরের (3·Z1) চেয়ে ছোট হয়, ফলে SLG ফল্ট কারেন্ট ৩-ফেজ অপেক্ষা বৃদ্ধি পায়।'
      }
    },
    {
      id: 'mcq-ch14-l09-03',
      question: {
        en: 'How are the sequence networks interconnected to analyze an ungrounded Line-to-Line (LL) fault between Phase B and Phase C?',
        hi: 'फेज B और C के बीच अनग्राउंडेड लाइन-टू-लाइन (LL) फॉल्ट का विश्लेषण करने के लिए सीक्वेंस नेटवर्क कैसे जोड़े जाते हैं?',
        bn: 'ফেজ B ও C এর মাঝে আনগ্রাউন্ডেড লাইন-টু-লাইন (LL) ফল্ট বিশ্লেষণে সিকোয়েন্স নেটওয়ার্ক কীভাবে যুক্ত হয়?'
      },
      options: [
        { en: 'Positive and Negative sequence networks in parallel, with the Zero sequence network completely disconnected (open circuit)', hi: 'पॉजिटिव और नेगेटिव नेटवर्क पैरेलल में, और जीरो सीक्वेंस नेटवर्क पूरी तरह खुला (डिस्कनेक्ट)', bn: 'পজিটিভ ও নেগেটিভ সিকোয়েন্স নেটওয়ার্ক প্যারালালে এবং জিরো সিকোয়েন্স নেটওয়ার্ক সম্পূর্ণ বিচ্ছিন্ন (ওপেন সার্কিট)' },
        { en: 'All three networks in series', hi: 'तीनों नेटवर्क सीरीज में', bn: 'সবগুলি নেটওয়ার্ক সিরিজে' },
        { en: 'Positive and Zero sequence networks in parallel', hi: 'पॉजिटिव और जीरो पैरेलल में', bn: 'পজিটিভ ও জিরো প্যারালালে' },
        { en: 'Negative and Zero sequence networks in series', hi: 'नेगेटिव और जीरो सीरीज में', bn: 'নেগেটিভ ও জিরো সিরিজে' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'In an LL fault with no ground contact, Ia0 = 0 (zero sequence open). Ia1 = -Ia2 and Va1 - Va2 = Ia1 · Zf, representing a parallel interconnection of positive and negative networks.',
        hi: 'बिना ग्राउंड वाले LL फॉल्ट में जमीन का रास्ता न होने से Ia0 = 0 होता है। Ia1 = -Ia2 होने से पॉजिटिव और नेगेटिव नेटवर्क पैरेलल में जुड़ते हैं।',
        bn: 'গ্রাউন্ডবিহীন LL ফল্টে কোনো আর্থ পথ না থাকায় Ia0 = ০ হয়। Ia1 = -Ia2 হওয়ায় পজিটিভ ও নেগেটিভ নেটওয়ার্ক প্যারালালে যুক্ত হয়।'
      }
    },
    {
      id: 'mcq-ch14-l09-04',
      question: {
        en: 'In an ungrounded Line-to-Line fault with Z1 = Z2 and fault impedance Zf = 0, what is the ratio of LL fault current to balanced 3-phase fault current?',
        hi: 'Z1 = Z2 और Zf = 0 वाले अनग्राउंडेड लाइन-टू-लाइन फॉल्ट में LL फॉल्ट धारा का 3-फेज फॉल्ट धारा से अनुपात क्या होता है?',
        bn: 'Z1 = Z2 এবং Zf = ০ বিশিষ্ট আনগ্রাউন্ডেড লাইন-টু-লাইন ফল্টে LL ফল্ট কারেন্ট ও ৩-ফেজ ফল্ট কারেন্টের অনুপাত কত?'
      },
      options: [
        { en: '√3 / 2 ≈ 0.866 (86.6%)', hi: '√3 / 2 ≈ 0.866 (86.6%)', bn: '√3 / ২ ≈ ০.৮৬৬ (৮৬.৬%)' },
        { en: '1.000 (100%)', hi: '1.000 (100%)', bn: '১.০০০ (১০০%)' },
        { en: '0.500 (50%)', hi: '0.500 (50%)', bn: '০.৫০০ (৫০%)' },
        { en: '1.732 (173.2%)', hi: '1.732 (173.2%)', bn: '১.৭৩২ (১৭৩.২%)' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'I_LL = √3 · Ia1 = √3 · [E / (2·Z1)] = (√3 / 2) · (E / Z1) = 0.866 · I_3ph.',
        hi: 'I_LL = √3 · [E / (2·Z1)] = (√3 / 2) · I_3ph = 0.866 · I_3ph (86.6%)।',
        bn: 'I_LL = √3 · [E / (২·Z1)] = (√3 / ২) · I_3ph = ০.৮৬৬ · I_3ph (৮৬.৬%)।'
      }
    },
    {
      id: 'mcq-ch14-l09-05',
      question: {
        en: 'How are the three sequence networks interconnected to analyze a Double Line-to-Ground (DLG) fault?',
        hi: 'डबल लाइन-टू-ग्राउंड (DLG) फॉल्ट का विश्लेषण करने के लिए तीनों सीक्वेंस नेटवर्क कैसे जोड़े जाते हैं?',
        bn: 'ডাবল লাইন-টু-গ্রাউন্ড (DLG) ফল্ট বিশ্লেষণের জন্য তিনটি সিকোয়েন্স নেটওয়ার্ক কীভাবে যুক্ত করা হয়?'
      },
      options: [
        { en: 'All three sequence networks (Positive, Negative, and Zero) are connected in PARALLEL at the fault node', hi: 'तीनों सीक्वेंस नेटवर्क (पॉजिटिव, नेगेटिव, जीरो) फॉल्ट नोड पर पैरेलल (समानांतर) में जुड़े होते हैं', bn: 'তিনটি সিকোয়েন্স নেটওয়ার্কই (পজিটিভ, নেগেটিভ ও জিরো) ফল্ট নোডে প্যারালালে যুক্ত থাকে' },
        { en: 'All three sequence networks in series', hi: 'तीनों नेटवर्क सीरीज में', bn: 'সবগুলি নেটওয়ার্ক সিরিজে' },
        { en: 'Positive in series with parallel combination of Negative and Zero', hi: 'पॉजिटिव सीरीज में, नेगेटिव-जीरो पैरेलल में', bn: 'পজিটিভ সিরিজে এবং নেগেটিভ-জিরো প্যারালালে' },
        { en: 'Zero sequence is omitted entirely', hi: 'जीरो सीक्वेंस पूरी तरह हटा दिया जाता है', bn: 'জিরো সিকোয়েন্স সম্পূর্ণ বাদ দেওয়া হয়' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'For a DLG fault on phases B and C, sequence voltages satisfy Va1 = Va2 = Va0 (for Zf=0), and currents satisfy Ia1 + Ia2 + Ia0 = 0. This uniquely defines a 3-way PARALLEL connection.',
        hi: 'DLG फॉल्ट में तीनों सीक्वेंस वोल्टेज बराबर होते हैं (Va1 = Va2 = Va0) और धाराओं का योग शून्य होता है, जो पैरेलल कनेक्शन को दर्शाता है।',
        bn: 'DLG ফল্টে তিনটি সিকোয়েন্স ভোল্টেজ সমান হয় (Va1 = Va2 = Va0) এবং কারেন্টের সমষ্টি শূন্য হয়, যা ৩-মুখী প্যারালাল সংযোগ নির্দেশ করে।'
      }
    },
    {
      id: 'mcq-ch14-l09-06',
      question: {
        en: 'What percentage of all short-circuit faults occurring on high-voltage overhead transmission lines are Single Line-to-Ground (SLG) faults?',
        hi: 'हाई-वोल्टेज ओवरहेड ट्रांसमिशन लाइनों पर होने वाले कुल शॉर्ट-सर्किट फॉल्टों में सिंगल लाइन-टू-ग्राउंड (SLG) फॉल्ट का प्रतिशत कितना है?',
        bn: 'উচ্চ-ভোল্টেজ ওভারহেড ট্রান্সমিশন লাইনে সংঘটিত মোট শর্ট-সার্কিট ফল্টের কত শতাংশ সিঙ্গেল লাইন-টু-গ্রাউন্ড (SLG) ফল্ট?'
      },
      options: [
        { en: 'Approximately 70% to 80%', hi: 'लगभग 70% से 80%', bn: 'প্রায় ৭০% থেকে ৮০%' },
        { en: 'Exactly 5%', hi: 'ठीक 5%', bn: 'ঠিক ৫%' },
        { en: '100% at all times', hi: 'हमेशा 100%', bn: 'সর্বদা ১০০%' },
        { en: 'Less than 1%', hi: '1% से कम', bn: '১% এর কম' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Statistical field data shows that ~70% of all overhead faults are SLG (lightning insulator flashover, tree contact), ~15% are Line-to-Line, ~10% are Double Line-to-Ground, and only ~5% are balanced 3-phase faults.',
        hi: 'आंकड़ों के अनुसार लगभग 70% फॉल्ट SLG होते हैं (पेड़ छूने या आकाशीय बिजली से)। 3-फेज फॉल्ट केवल 5% होते हैं।',
        bn: 'পরিসংখ্যান অনুযায়ী প্রায় ৭০% ফল্টই SLG (গাছের ডাল বা বজ্রপাতজনিত)। ৩-ফেজ ফল্ট ঘটে মাত্র ৫% ক্ষেত্রে।'
      }
    },
    {
      id: 'mcq-ch14-l09-07',
      question: {
        en: 'What protective relay function code (ANSI) operates specifically by detecting zero-sequence ground fault current (3·I0) in a transmission line?',
        hi: 'कौन सा ANSI रिले कोड ट्रांसमिशन लाइन में जीरो-सीक्वेंस ग्राउंड फॉल्ट करंट (3·I0) का पता लगाकर काम करता है?',
        bn: 'কোন ANSI রিলে কোডটি ট্রান্সমিশন লাইনে জিরো সিকোয়েন্স গ্রাউন্ড ফল্ট কারেন্ট (3·I0) শনাক্ত করে ট্রিপ করায়?'
      },
      options: [
        { en: 'ANSI 50N / 51N (Ground Instantaneous / Time Overcurrent Relay)', hi: 'ANSI 50N / 51N (ग्राउंड ओवरकरंट रिले)', bn: 'ANSI 50N / 51N (গ্রাউন্ড ওভারকারেন্ট রিলে)' },
        { en: 'ANSI 27 (Undervoltage)', hi: 'ANSI 27 (अंडरवोल्टेज)', bn: 'ANSI 27 (আন্ডারভোল্টেজ)' },
        { en: 'ANSI 81 (Frequency Relay)', hi: 'ANSI 81 (आवृत्ति रिले)', bn: 'ANSI 81 (ফ্রিকোয়েন্সি রিলে)' },
        { en: 'ANSI 25 (Synchrocheck)', hi: 'ANSI 25 (सिंक्रोचेक)', bn: 'ANSI 25 (সিনক্রোচেক)' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'ANSI 50N and 51N relays monitor the neutral or residual current CT input (In = Ia + Ib + Ic = 3·I0) to trip breakers for earth faults.',
        hi: 'ANSI 50N/51N रिले न्यूट्रल में बहने वाले 3·I0 करंट को मापकर अर्थ फॉल्ट पर ब्रेकर ट्रिप करते हैं।',
        bn: 'ANSI 50N/51N রিলে নিউট্রালে প্রবাহিত 3·I0 কারেন্ট পর্যবেক্ষণ করে আর্থ ফল্টের সময় ব্রেকার ট্রিপ করায়।'
      }
    },
    {
      id: 'mcq-ch14-l09-08',
      question: {
        en: 'Why is fault arc impedance Zf multiplied by a factor of 3 (as 3·Zf) when inserted into the series loop for a Single Line-to-Ground fault?',
        hi: 'सिंगल लाइन-टू-ग्राउंड फॉल्ट के सीरीज लूप में फॉल्ट प्रतिबाधा Zf को 3 से गुणा (3·Zf) क्यों किया जाता है?',
        bn: 'সিঙ্গেল লাইন-টু-গ্রাউন্ড ফল্টের সিরিজ লুপে ফল্ট ইম্পিডেন্স Zf কে কেন ৩ দিয়ে গুণ (3·Zf) করা হয়?'
      },
      options: [
        { en: 'Because the total ground fault current flowing through Zf is Ia = 3·Ia1, so the voltage drop across Zf is (3·Ia1)·Zf = Ia1·(3·Zf)', hi: 'क्योंकि Zf से बहने वाली कुल धारा Ia = 3·Ia1 होती है, अतः वोल्टेज ड्रॉप (3·Ia1)·Zf = Ia1·(3·Zf) बनता है', bn: 'কারণ Zf দিয়ে প্রবাহিত মোট কারেন্ট হলো Ia = 3·Ia1, ফলে ভোল্টেজ ড্রপ হয় (3·Ia1)·Zf = Ia1·(3·Zf)' },
        { en: 'Because there are three phases in the system', hi: 'क्योंकि सिस्टम में तीन फेज होते हैं', bn: 'কারণ সিস্টেমে তিনটি ফেজ রয়েছে' },
        { en: 'Because the speed of light is 3 × 10^8 m/s', hi: 'क्योंकि प्रकाश की चाल 3 × 10^8 m/s होती है', bn: 'কারণ আলোর গতি ৩ × ১০^৮ m/s' },
        { en: 'Because the transformer turns ratio is always 3:1', hi: 'क्योंकि टर्न अनुपात 3:1 होता है', bn: 'কারণ টার্ন অনুপাত সর্বদা ৩:১' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'The boundary condition is Va = Ia · Zf. Since Ia = Ia1 + Ia2 + Ia0 = 3·Ia1, Va = (3·Ia1)·Zf. In the single-phase equivalent circuit carrying current Ia1, this appears as an effective impedance of 3·Zf.',
        hi: 'चूंकि कुल धारा Ia = 3·Ia1 होती है, अतः प्रतिबाधा Zf पर वोल्टेज ड्रॉप 3·Ia1·Zf होता है, जो एकल-फेज समकक्ष सर्किट में 3·Zf के रूप में दिखता है।',
        bn: 'যেহেতু মোট ফল্ট কারেন্ট Ia = 3·Ia1, তাই Zf এর আড়াআড়ি ভোল্টেজ ড্রপ হয় (3·Ia1)·Zf, যা সমতুল্য একক-ফেজ সার্কিটে 3·Zf হিসেবে উপস্থাপিত হয়।'
      }
    }
  ]
};

// Canonical export alias for backward compatibility and registry access
export const LESSON_ASYMMETRICAL_FAULT_ANALYSIS = LESSON_INDUSTRIAL_METERING_CASE_STUDY;
