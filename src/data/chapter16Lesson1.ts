import { Lesson } from '../types';

export const LESSON_PER_UNIT_SYSTEM: Lesson = {
  id: 'lsn-ch16-per-unit-system',
  topicId: 'tp-ch16-per-unit-system',
  chapterId: 'ch-advanced-power-system-analysis',
  order: 1,
  title: {
    en: 'Per-Unit System Formulation & Base Change Calculations',
    hi: 'प्रति-इकाई (Per-Unit) प्रणाली निरूपण एवं आधार परिवर्तन गणना',
    bn: 'পার-ইউনিট (Per-Unit) সিস্টেম প্রণয়ন ও বেস রূপান্তর গণনা'
  },
  description: {
    en: 'Mathematical formulation of the per-unit (p.u.) system in electrical power grids: definition of base power, base voltage, base impedance, base current, and derivation of the base conversion formula for multi-voltage transformer networks.',
    hi: 'विद्युत ग्रिड में प्रति-इकाई (p.u.) प्रणाली का गणितीय निरूपण: आधार शक्ति, आधार वोल्टेज, आधार प्रतिबाधा, आधार धारा की परिभाषा और बहु-वोल्टेज ट्रांसफार्मर नेटवर्क के लिए आधार रूपांतरण सूत्र का निगमन।',
    bn: 'বৈদ্যুতিক পাওয়ার গ্রিডে পার-ইউনিট (p.u.) সিস্টেমের গাণিতিক প্রণয়ন: বেস পাওয়ার, বেস ভোল্টেজ, বেস ইম্পিডেন্স, বেস কারেন্ট এবং বহু-ভোল্টেজ বিশিষ্ট ট্রান্সফরমার নেটওয়ার্কের জন্য বেস রূপান্তর সূত্রের ব্যুৎপত্তি।'
  },
  estimatedMinutes: 40,
  easyExplanation: {
    en: 'In large power systems, electrical energy travels across multiple voltage levels: generators produce power at 11 kV or 22 kV, step-up transformers boost it to 220 kV or 400 kV for transmission lines, and step-down substations lower it to 33 kV, 11 kV, and 415 V for distribution. Calculating currents, voltages, and impedances across all these different transformer turns ratios requires constant, tedious impedance reflections. The Per-Unit (p.u.) method eliminates this complexity by expressing every electrical quantity as a dimensionless fraction of a chosen base value. Under the per-unit system, the equivalent impedance of a transformer is identical whether referred to the primary or secondary winding, and the factor of sqrt(3) disappears from three-phase power formulas!',
    hi: 'विद्युत शक्ति प्रणालियों में विद्युत ऊर्जा कई वोल्टेज स्तरों से होकर गुजरती है: जनरेटर 11 kV या 22 kV पर बिजली उत्पन्न करते हैं, स्टेप-अप ट्रांसफार्मर इसे 220 kV या 400 kV तक बढ़ाते हैं, और स्टेप-डाउन सबस्टेशन इसे वितरण के लिए 33 kV, 11 kV और 415 V तक घटाते हैं। इन सभी अलग-अलग वोल्टेज स्तरों पर गणना करना बहुत जटिल होता है। प्रति-इकाई (Per-Unit) प्रणाली प्रत्येक राशि को एक चुने गए आधार मान के अनुपात के रूप में व्यक्त करके इस जटिलता को समाप्त कर देती है। प्रति-इकाई प्रणाली में, किसी ट्रांसफार्मर की प्रतिबाधा समान रहती है चाहे उसे प्राथमिक पक्ष से देखा जाए या द्वितीयक पक्ष से!',
    bn: 'বৃহৎ পাওয়ার সিস্টেমে বিদ্যুৎ একাধিক ভোল্টেজ স্তরের মধ্য দিয়ে প্রবাহিত হয়: জেনারেটর ১১ kV বা ২২ kV তে বিদ্যুৎ উৎপাদন করে, স্টেপ-আপ ট্রান্সফরমার সঞ্চালনের জন্য তা ২২০ kV বা ৪০০ kV তে উন্নীত করে এবং স্টেপ-ডাউন সাবস্টেশন বিতরণের জন্য তা ৩৩ kV, ১১ kV ও ৪১৫ V তে নামিয়ে আনে। পার-ইউনিট (p.u.) পদ্ধতি প্রতিটি বৈদ্যুতিক রাশিকে একটি নির্দিষ্ট বেস মানের ভগ্নাংশ বা অনুপাত হিসেবে প্রকাশ করে এই জটিলতা দূর করে। পার-ইউনিট পদ্ধতিতে কোনো ট্রান্সফরমারের সমতুল্য ইম্পিডেন্স প্রাইমারি বা সেকেন্ডারি যেকোনো দিক থেকেই একই থাকে!'
  },
  detailedExplanation: {
    en: 'The per-unit value of any electrical quantity is defined as the ratio of its actual value in physical engineering units to its designated base value having identical dimensions:\n\nValue (p.u.) = Actual Value / Base Value\n\nIn three-phase power system analysis, two independent fundamental base values are arbitrarily selected for the entire interconnected network:\n1. Base Three-Phase Apparent Power (S_base,3ph in MVA or kVA) — typically held constant across the whole power system.\n2. Base Line-to-Line Voltage (V_base,LL in kV) — chosen for one reference section and then propagated across transformer boundaries in proportion to nominal transformer winding line-to-line voltage ratios.\n\nFrom these two primary bases, the secondary electrical base quantities are derived directly:\n• Base Current: I_base = S_base,3ph / (sqrt(3) * V_base,LL)\n• Base Impedance: Z_base = (V_base,LL)² / S_base,3ph = (V_base,LN)² / S_base,1ph\n• Base Admittance: Y_base = 1 / Z_base = S_base,3ph / (V_base,LL)²\n\nBase Conversion (Change of Base):\nApparatus such as generators, transformers, and synchronous condensers are rated on their own individual nameplate bases (S_base,old and V_base,old). To combine them into a single system-wide reactance network on a common study base (S_base,new and V_base,new), the per-unit impedance must be converted using the universal base-change formula:\n\nZ_pu,new = Z_pu,old * (V_base,old / V_base,new)² * (S_base,new / S_base,old)\n\nKey Advantages in Grid Engineering:\n• Transformers: Per-unit leakage reactance is identical whether calculated from the primary or secondary winding.\n• Normalization: Machine parameters fall within narrow, predictable ranges (e.g., synchronous generator subtransient reactance Xd" is almost always 0.12 to 0.25 p.u.) regardless of physical machine size.\n• Elimination of sqrt(3): Complex 3-phase per-unit power is S_pu = V_pu * I_pu*, simplifying network matrix formulations.',
    hi: 'प्रति-इकाई मान को किसी भी भौतिक राशि के वास्तविक मान और उसी इकाई वाले आधार मान के अनुपात के रूप में परिभाषित किया जाता है:\n\nValue (p.u.) = Actual Value / Base Value\n\nथ्री-फेज पावर सिस्टम विश्लेषण में संपूर्ण नेटवर्क के लिए दो स्वतंत्र मूल आधार मान चुने जाते हैं:\n1. बेस थ्री-फेज आभासी शक्ति (S_base,3ph in MVA)\n2. बेस लाइन-टू-लाइन वोल्टेज (V_base,LL in kV)\n\nइन दोनों प्राथमिक आधारों से व्युत्पन्न आधार राशियाँ:\n• बेस धारा: I_base = S_base / (sqrt(3) * V_base)\n• बेस प्रतिबाधा: Z_base = (V_base)² / S_base\n\nआधार परिवर्तन सूत्र (Base Conversion):\nउपकरणों की नेमप्लेट रेटिंग्स को एक सामान्य अध्ययन आधार पर लाने के लिए:\nZ_pu,new = Z_pu,old * (V_base,old / V_base,new)² * (S_base,new / S_base,old)\n\nप्रति-इकाई प्रणाली के प्रमुख लाभ:\n• ट्रांसफार्मर की प्रति-इकाई प्रतिबाधा प्राथमिक या द्वितीयक दोनों सिरों पर समान होती है।\n• थ्री-फेज सूत्रों से sqrt(3) समाप्त हो जाता है।',
    bn: 'যেকোনো বৈদ্যুতিক রাশির পার-ইউনিট মান হলো তার প্রকৃত মান এবং একই এককের একটি নির্বাচিত বেস মানের অনুপাত:\n\nValue (p.u.) = Actual Value / Base Value\n\nথ্রি-ফেজ সিস্টেমে দুটি প্রধান বেস মান স্বাধীনভাবে নির্বাচন করা হয়:\n১. বেস থ্রি-ফেজ অ্যাপারেন্ট পাওয়ার (S_base,3ph in MVA)\n২. বেস লাইন-টু-লাইন ভোল্টেজ (V_base,LL in kV)\n\nএই দুটি থেকে প্রাপ্ত অন্যান্য বেস রাশি:\n• বেস কারেন্ট: I_base = S_base / (sqrt(3) * V_base)\n• বেস ইম্পিডেন্স: Z_base = (V_base)² / S_base\n\nবেস পরিবর্তন সূত্র:\nZ_pu,new = Z_pu,old * (V_base,old / V_base,new)² * (S_base,new / S_base,old)\n\nপ্রধান সুবিধাসমূহ:\n• ট্রান্সফরমারের পার-ইউনিট ইম্পিডেন্স প্রাইমারি ও সেকেন্ডারি উভয় দিকেই সমান হয়।\n• থ্রি-ফেজ সূত্রে sqrt(3) এর পুনরাবৃত্তি দূর হয়।'
  },
  formulas: [
    {
      id: 'f-ch16-z-base',
      symbol: 'Z_{base}',
      expression: 'Z_{base} = \\frac{(V_{base,LL})^2}{S_{base,3ph}}',
      title: {
        en: 'Base Impedance Formula',
        hi: 'आधार प्रतिबाधा सूत्र',
        bn: 'বেস ইম্পিডেন্স সূত্র'
      },
      description: {
        en: 'Derives the base ohmic impedance from the selected line-to-line base voltage in kV and three-phase base power in MVA.',
        hi: 'kV में लाइन-टू-लाइन बेस वोल्टेज और MVA में थ्री-फेज बेस पावर से बेस ओमिक प्रतिबाधा प्राप्त करता है।',
        bn: 'kV এককে বেস ভোল্টেজ এবং MVA এককে বেস পাওয়ার থেকে ওহমিক বেস ইম্পিডেন্স নির্ণয় করে।'
      },
      variables: [
        { symbol: 'Z_{base}', name: { en: 'Base impedance (Ω)', hi: 'आधार प्रतिबाधा (Ω)', bn: 'বেস ইম্পিডেন্স (Ω)' } },
        { symbol: 'V_{base,LL}', name: { en: 'Line-to-line base voltage (kV)', hi: 'लाइन-टू-लाइन आधार वोल्टेज (kV)', bn: 'লাইন-টু-লাইন বেস ভোল্টেজ (kV)' } },
        { symbol: 'S_{base,3ph}', name: { en: 'Three-phase base apparent power (MVA)', hi: 'थ्री-फेज आधार आभासी शक्ति (MVA)', bn: 'থ্রি-ফেজ বেস পাওয়ার (MVA)' } }
      ]
    },
    {
      id: 'f-ch16-base-change',
      symbol: 'Z_{pu,new}',
      expression: 'Z_{pu,new} = Z_{pu,old} \\cdot \\left(\\frac{V_{base,old}}{V_{base,new}}\\right)^2 \\cdot \\left(\\frac{S_{base,new}}{S_{base,old}}\\right)',
      title: {
        en: 'Universal Per-Unit Base Conversion Formula',
        hi: 'सार्वभौमिक प्रति-इकाई आधार परिवर्तन सूत्र',
        bn: 'সার্বজনীন পার-ইউনিট বেস রূপান্তর সূত্র'
      },
      description: {
        en: 'Converts the per-unit impedance of an electrical machine from its manufacturer nameplate base to a newly designated common system study base.',
        hi: 'किसी विद्युत मशीन की प्रति-इकाई प्रतिबाधा को उसकी नेमप्लेट रेटिंग से नए सामान्य सिस्टम अध्ययन आधार में परिवर्तित करता है।',
        bn: 'একটি মেশিনের নেমপ্লেট বেস থেকে নতুন সিস্টেম বেসে পার-ইউনিট ইম্পিডেন্স রূপান্তর করে।'
      },
      variables: [
        { symbol: 'Z_{pu,new}', name: { en: 'Impedance on new common study base (p.u.)', hi: 'नए आधार पर प्रतिबाधा (p.u.)', bn: 'নতুন বেসে ইম্পিডেন্স (p.u.)' } },
        { symbol: 'Z_{pu,old}', name: { en: 'Impedance on manufacturer nameplate base (p.u.)', hi: 'पुराने नेमप्लेट आधार पर प्रतिबाधा (p.u.)', bn: 'পুরাতন নেমপ্লেট বেসে ইম্পিডেন্স (p.u.)' } },
        { symbol: 'V_{base,old}', name: { en: 'Old rated voltage (kV)', hi: 'पुराना रेटेड वोल्टेज (kV)', bn: 'পুরাতন রেটেড ভোল্টেজ (kV)' } },
        { symbol: 'V_{base,new}', name: { en: 'New base voltage assigned to that zone (kV)', hi: 'नया आधार वोल्टेज (kV)', bn: 'নতুন বেস ভোল্টেজ (kV)' } },
        { symbol: 'S_{base,old}', name: { en: 'Old rated MVA capacity', hi: 'पुराना रेटेड MVA मान', bn: 'পুরাতন রেটেড MVA মান' } },
        { symbol: 'S_{base,new}', name: { en: 'New chosen system base MVA', hi: 'नया सिस्टम बेस MVA मान', bn: 'নতুন সিস্টেম বেস MVA মান' } }
      ]
    },
    {
      id: 'f-ch16-current-base',
      symbol: 'I_{base}',
      expression: 'I_{base} = \\frac{S_{base,3ph}}{\\sqrt{3} \\cdot V_{base,LL}}',
      title: {
        en: 'Base Line Current Formula',
        hi: 'आधार लाइन धारा सूत्र',
        bn: 'বেস লাইন কারেন্ট সূত্র'
      },
      description: {
        en: 'Calculates the base current in kiloamperes (kA) or amperes (A) for a balanced three-phase network section.',
        hi: 'संतुलित थ्री-फेज नेटवर्क अनुभाग के लिए किलोएम्पियर (kA) या एम्पियर (A) में आधार धारा की गणना करता है।',
        bn: 'ভারসাম্যপূর্ণ থ্রি-ফেজ নেটওয়ার্ক অংশের জন্য kA বা A এককে বেস কারেন্ট নির্ণয় করে।'
      },
      variables: [
        { symbol: 'I_{base}', name: { en: 'Base current (kA)', hi: 'आधार धारा (kA)', bn: 'বেস কারেন্ট (kA)' } },
        { symbol: 'S_{base,3ph}', name: { en: 'Base three-phase power (MVA)', hi: 'आधार शक्ति (MVA)', bn: 'বেস পাওয়ার (MVA)' } },
        { symbol: 'V_{base,LL}', name: { en: 'Line-to-line base voltage (kV)', hi: 'आधार वोल्टेज (kV)', bn: 'বেস ভোল্টেজ (kV)' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-ch16-l01-pu-foundations',
      title: {
        en: 'Per-Unit System Foundations & Zone Subdivision',
        hi: 'प्रति-इकाई प्रणाली की नींव एवं ज़ोन विभाजन',
        bn: 'পার-ইউনিট সিস্টেমের ভিত্তি ও জোন বিভাজন'
      },
      content: {
        en: 'A major strength of the per-unit system is how it partitions a complex multi-voltage grid into distinct voltage zones separated by transformers:\n\n1. Selection of Global S_base: A single three-phase MVA base (commonly 100 MVA in utility transmission studies) is chosen and held uniform across the entire grid.\n\n2. Selection of Local V_base: The base voltage is specified for one reference bus. As you cross any transformer, the base voltage in the adjoining zone is automatically determined by the transformer turns ratio:\n\nV_base,Zone2 = V_base,Zone1 * (V_rating,secondary / V_rating,primary)\n\n3. Resistance and Reactance in p.u.: When an actual transmission line has an impedance of Z = R + jX in ohms, its per-unit value is simply:\nZ_pu = (R + jX) / Z_base,zone.\n\nBecause Z_base depends on the square of the voltage (V² / S), higher voltage transmission corridors have drastically higher base impedances, causing their per-unit impedances to remain pleasantly small and well-conditioned for numerical solvers.',
        hi: 'प्रति-इकाई प्रणाली की एक प्रमुख विशेषता यह है कि यह ट्रांसफार्मर द्वारा अलग किए गए बहु-वोल्टेज ग्रिड को अलग-अलग वोल्टेज ज़ोन में विभाजित करती है। पूरे ग्रिड के लिए एक सामान्य MVA बेस (जैसे 100 MVA) चुना जाता है, और ट्रांसफार्मर के अनुपात के आधार पर प्रत्येक ज़ोन का बेस वोल्टेज तय होता है।',
        bn: 'পার-ইউনিট সিস্টেমের একটি প্রধান শক্তি হলো এটি ট্রান্সফরমার দ্বারা পৃথকীকৃত বহু-ভোল্টেজ গ্রিডকে স্বতন্ত্র ভোল্টেজ জোনে বিভক্ত করে। পুরো গ্রিডের জন্য একটি সাধারণ বেস MVA (যেমন ১০০ MVA) নির্বাচন করা হয়।'
      },
      schematicId: 'sch-ch16-per-unit-system'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch16-l01-01',
      problem: {
        en: 'A three-phase, 50 MVA, 13.8 kV synchronous generator has a subtransient reactance of Xd" = 0.20 p.u. based on its own nameplate rating. Determine its per-unit reactance on a common system study base of 100 MVA and 13.2 kV.',
        hi: 'एक थ्री-फेज, 50 MVA, 13.8 kV तुल्यकालिक जनरेटर का सबट्रांजिएंट प्रतिघात उसकी अपनी नेमप्लेट रेटिंग के आधार पर Xd" = 0.20 p.u. है। 100 MVA और 13.2 kV के सामान्य सिस्टम अध्ययन आधार पर इसका प्रति-इकाई प्रतिघात ज्ञात कीजिए।',
        bn: 'একটি থ্রি-ফেজ, ৫০ MVA, ১৩.৮ kV সিনক্রোনাস জেনারেটরের নিজস্ব রেটিংয়ে সাবট্রানজিয়েন্ট রিঅ্যাক্ট্যান্স Xd" = ০.২০ p.u.। ১০০ MVA এবং ১৩.২ kV এর সাধারণ সিস্টেম বেসে এর পার-ইউনিট রিঅ্যাক্ট্যান্স নির্ণয় করুন।'
      },
      solution: {
        en: 'Given:\n• Old Base: S_base,old = 50 MVA, V_base,old = 13.8 kV, Z_pu,old = 0.20 p.u.\n• New Base: S_base,new = 100 MVA, V_base,new = 13.2 kV\n\nStep 1: Apply the universal base change formula:\nZ_pu,new = Z_pu,old * (V_base,old / V_base,new)² * (S_base,new / S_base,old)\n\nStep 2: Substitute given parameters:\nZ_pu,new = 0.20 * (13.8 / 13.2)² * (100 / 50)\n\nStep 3: Calculate intermediate ratios:\n• Voltage ratio: 13.8 / 13.2 = 1.04545\n• Squared voltage ratio: (1.04545)² = 1.09298\n• Power ratio: 100 / 50 = 2.0\n\nStep 4: Final calculation:\nZ_pu,new = 0.20 * 1.09298 * 2.0 = 0.4372 p.u.',
        hi: 'दिया गया है:\n• पुराना आधार: S_old = 50 MVA, V_old = 13.8 kV, Z_old = 0.20 p.u.\n• नया आधार: S_new = 100 MVA, V_new = 13.2 kV\n\nसूत्र: Z_pu,new = Z_pu,old * (V_old / V_new)² * (S_new / S_old)\nगणना: Z_pu,new = 0.20 * (13.8 / 13.2)² * (100 / 50) = 0.20 * 1.093 * 2 = 0.4372 p.u.',
        bn: 'প্রদত্ত:\n• পুরাতন বেস: S_old = ৫০ MVA, V_old = ১৩.৮ kV, Z_old = ০.২০ p.u.\n• নতুন বেস: S_new = ১০০ MVA, V_new = ১৩.২ kV\n\nসূত্র: Z_pu,new = Z_pu,old * (V_old / V_new)² * (S_new / S_old)\nমান বসিয়ে: Z_pu,new = ০.২০ * (১৩.৮ / ১৩.২)² * (১০০ / ৫০) = ০.৪৩৭২ p.u.'
      },
      givenValues: { 'S_old': '50 MVA', 'V_old': '13.8 kV', 'Z_old': '0.20 p.u.', 'S_new': '100 MVA', 'V_new': '13.2 kV' },
      finalAnswer: {
        en: 'Xd" (new base) = 0.4372 p.u.',
        hi: 'Xd" (नया आधार) = 0.4372 p.u.',
        bn: 'Xd" (নতুন বেস) = ০.৪৩৭২ p.u.'
      }
    },
    {
      id: 'ex-ch16-l01-02',
      problem: {
        en: 'A 220 kV transmission line has an actual series inductive reactance of X = 48.4 Ω. Calculate its per-unit reactance on a base of 100 MVA and 220 kV.',
        hi: 'एक 220 kV पारेषण लाइन का वास्तविक सीरीज प्रेरणिक प्रतिघात X = 48.4 Ω है। 100 MVA और 220 kV के आधार पर इसके प्रति-इकाई प्रतिघात की गणना कीजिए।',
        bn: 'একটি ২২০ kV ট্রান্সমিশন লাইনের প্রকৃত সিরিজ ইনডাক্টিভ রিঅ্যাক্ট্যান্স X = ৪৮.৪ Ω। ১০০ MVA এবং ২২০ kV বেসে এর পার-ইউনিট রিঅ্যাক্ট্যান্স নির্ণয় করুন।'
      },
      solution: {
        en: 'Given:\n• Actual Reactance X_actual = 48.4 Ω\n• System Base: S_base = 100 MVA, V_base = 220 kV\n\nStep 1: Calculate the base impedance of the 220 kV zone:\nZ_base = (V_base)² / S_base = (220 kV)² / 100 MVA = 48,400 / 100 = 484.0 Ω\n\nStep 2: Calculate per-unit reactance:\nX_pu = X_actual / Z_base = 48.4 Ω / 484.0 Ω = 0.100 p.u.',
        hi: 'दिया गया है:\n• वास्तविक प्रतिघात X_actual = 48.4 Ω\n• आधार: S_base = 100 MVA, V_base = 220 kV\n\nचरण 1: बेस प्रतिबाधा की गणना:\nZ_base = (220)² / 100 = 484.0 Ω\n\nचरण 2: प्रति-इकाई प्रतिघात:\nX_pu = 48.4 / 484.0 = 0.100 p.u.',
        bn: 'প্রদত্ত:\n• প্রকৃত রিঅ্যাক্ট্যান্স X_actual = ৪৮.৪ Ω\n• সিস্টেম বেস: S_base = ১০০ MVA, V_base = ২২০ kV\n\nধাপ ১: বেস ইম্পিডেন্স নির্ণয়:\nZ_base = (২২০)² / ১০০ = ৪৮৪.০ Ω\n\nধাপ ২: পার-ইউনিট রিঅ্যাক্ট্যান্স:\nX_pu = ৪৮.৪ / ৪৮৪.০ = ০.১০০ p.u.'
      },
      givenValues: { 'X_actual': '48.4 Ω', 'V_base': '220 kV', 'S_base': '100 MVA' },
      finalAnswer: {
        en: 'X_pu = 0.100 p.u. (Base Z = 484 Ω)',
        hi: 'X_pu = 0.100 p.u. (बेस Z = 484 Ω)',
        bn: 'X_pu = ০.১০০ p.u. (বেস Z = ৪৮৪ Ω)'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Industrial load flow and short-circuit fault studies using software packages like ETAP, PSS/E, and DigSILENT PowerFactory.',
      'Protective relay setting calculations where CT and PT secondary ratios are normalized to primary network bases.',
      'Comparison of manufacturer equipment data across different vendors regardless of rated voltage or MVA sizing.'
    ],
    hi: [
      'ETAP, PSS/E और DigSILENT जैसे सॉफ्टवेयर में औद्योगिक लोड फ्लो और शॉर्ट-सर्किट अध्ययन।',
      'रिले सुरक्षा सेटिंग्स की गणना जहां CT और PT अनुपातों को प्राथमिक नेटवर्क आधार पर सामान्यीकृत किया जाता है।',
      'विभिन्न निर्माताओं के उपकरणों के डेटा की निष्पक्ष तुलना।'
    ],
    bn: [
      'ETAP, PSS/E এবং DigSILENT সফটওয়্যারের মাধ্যমে ইন্ডাস্ট্রিয়াল লোড ফ্লো ও শর্ট-সার্কিট স্টাডি।',
      'রিলে প্রোটেকশন সেটিং নির্ধারণ যেখানে CT ও PT অনুপাতকে নেটওয়ার্ক বেসে রূপান্তর করা হয়।',
      'ভিন্ন ভোল্টেজ বা ক্ষমতার যন্ত্রপাতির কার্যক্ষমতা তুলনামূলক বিশ্লেষণ।'
    ]
  },
  importantPoints: {
    en: [
      'Per-unit impedance of a transformer is identical on both primary and secondary sides.',
      'Base MVA is uniform across the entire power system, while base kV changes across each transformer according to its turns ratio.',
      'In per-unit notation, 3-phase complex power is simply S_pu = V_pu * I_pu* without any sqrt(3) factor.',
      'Base impedance is inversely proportional to base power and directly proportional to the square of base voltage: Z_base = V_base² / S_base.'
    ],
    hi: [
      'ट्रांसफार्मर की प्रति-इकाई प्रतिबाधा प्राथमिक और द्वितीयक दोनों पक्षों पर समान होती है।',
      'बेस MVA पूरे सिस्टम में एक समान रहता है, जबकि बेस kV प्रत्येक ट्रांसफार्मर पर बदलता है।',
      'प्रति-इकाई संकेतन में, 3-फेज शक्ति केवल S_pu = V_pu * I_pu* होती है, sqrt(3) की आवश्यकता नहीं होती।',
      'बेस प्रतिबाधा सूत्र: Z_base = V_base² / S_base।'
    ],
    bn: [
      'ট্রান্সফরমারের পার-ইউনিট ইম্পিডেন্স প্রাইমারি ও সেকেন্ডারি উভয় দিকেই পুরোপুরি অভিন্ন।',
      'বেস MVA সম্পূর্ণ গ্রিডে স্থির থাকে, কিন্তু বেস kV ট্রান্সফরমার অনুপাতে পরিবর্তিত হয়।',
      'পার-ইউনিট পদ্ধতিতে থ্রি-ফেজ পাওয়ারের সূত্রে sqrt(3) থাকে না: S_pu = V_pu * I_pu*।',
      'বেস ইম্পিডেন্স সূত্র: Z_base = V_base² / S_base।'
    ]
  },
  commonMistakes: {
    en: [
      'Forgetting to square the voltage ratio when applying the base change formula (using V_old/V_new instead of (V_old/V_new)²).',
      'Changing base MVA from one zone to another across a transformer (base MVA must remain constant throughout the entire grid).',
      'Using line-to-neutral voltage with 3-phase base power instead of line-to-line voltage in Z_base = V_base,LL² / S_base,3ph.'
    ],
    hi: [
      'बेस परिवर्तन सूत्र में वोल्टेज अनुपात का वर्ग करना भूल जाना ((V_old/V_new)² के स्थान पर केवल V_old/V_new लिखना)।',
      'ट्रांसफार्मर के पार बेस MVA बदलना (बेस MVA पूरे सिस्टम में समान होना चाहिए)।',
      'Z_base सूत्र में लाइन-टू-लाइन वोल्टेज के स्थान पर फेज वोल्टेज का उपयोग कर बैठना।'
    ],
    bn: [
      'বেস পরিবর্তনের সময় ভোল্টেজ অনুপাতের বর্গ করতে ভুলে যাওয়া ((V_old/V_new)² এর পরিবর্তে V_old/V_new ব্যবহার)।',
      'ট্রান্সফরমারের কারণে বেস MVA পরিবর্তন করা (বেস MVA সমগ্র গ্রিডে একই থাকে)।',
      'Z_base সূত্রে লাইন-টু-লাইন ভোল্টেজের পরিবর্তে ফেজ ভোল্টেজ বসানো।'
    ]
  },
  keyTakeaways: {
    en: [
      'Per-unit normalization makes complex multi-transformer networks solvable as single continuous circuits.',
      'The base change formula Z_new = Z_old * (V_old/V_new)² * (S_new/S_old) is essential for integrating vendor equipment data into grid models.',
      'Transformer impedances are identical whether referred to the HV or LV winding when expressed in per-unit.'
    ],
    hi: [
      'प्रति-इकाई सामान्यीकरण जटिल बहु-ट्रांसफार्मर नेटवर्क को एकल निरंतर परिपथ के रूप में हल करने योग्य बनाता है।',
      'आधार परिवर्तन सूत्र Z_new = Z_old * (V_old/V_new)² * (S_new/S_old) ग्रिड मॉडलिंग के लिए अत्यंत महत्वपूर्ण है।',
      'प्रति-इकाई में ट्रांसफार्मर प्रतिबाधा उच्च या निम्न वोल्टेज किसी भी पक्ष से समान होती है।'
    ],
    bn: [
      'পার-ইউনিট পদ্ধতি একাধিক ট্রান্সফরমারযুক্ত জটিল গ্রিডকে একটি অবিচ্ছিন্ন একক সার্কিটে রূপান্তরিত করে।',
      'বেস পরিবর্তন সূত্র Z_new = Z_old * (V_old/V_new)² * (S_new/S_old) গ্রিড বিশ্লেষণের জন্য অপরিহার্য।',
      'পার-ইউনিট মানে ট্রান্সফরমারের ইম্পিডেন্স উচ্চ বা নিম্ন যেকোনো ভোল্টেজ সাইড থেকেই সমান।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch16-l01-01',
      question: {
        en: 'What is the base impedance (Z_base) of a power system zone having a base voltage of 132 kV and a three-phase base power of 100 MVA?',
        hi: '132 kV बेस वोल्टेज और 100 MVA थ्री-फेज बेस पावर वाले पावर सिस्टम ज़ोन की बेस प्रतिबाधा (Z_base) क्या है?',
        bn: '১৩২ kV বেস ভোল্টেজ এবং ১০০ MVA বেস পাওয়ার বিশিষ্ট একটি পাওয়ার সিস্টেম জোনের বেস ইম্পিডেন্স (Z_base) কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '174.24 Ω', hi: '174.24 Ω', bn: '১৭৪.২৪ Ω' } },
        { id: 'opt-2', text: { en: '132.00 Ω', hi: '132.00 Ω', bn: '১৩২.০০ Ω' } },
        { id: 'opt-3', text: { en: '1.32 Ω', hi: '1.32 Ω', bn: '১.৩২ Ω' } },
        { id: 'opt-4', text: { en: '1742.4 Ω', hi: '1742.4 Ω', bn: '১৭৪২.৪ Ω' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Z_base = (V_base,kV)² / S_base,MVA = (132)² / 100 = 17,424 / 100 = 174.24 Ω.',
        hi: 'Z_base = (V_base,kV)² / S_base,MVA = (132)² / 100 = 174.24 Ω।',
        bn: 'Z_base = (V_base,kV)² / S_base,MVA = (১৩২)² / ১০০ = ১৭৪.২৪ Ω।'
      }
    },
    {
      id: 'mcq-ch16-l01-02',
      question: {
        en: 'A 20 MVA transformer has an impedance of 0.08 p.u. on its own rating. What is its per-unit impedance on a 100 MVA system base with the same voltage rating?',
        hi: 'एक 20 MVA ट्रांसफार्मर की अपनी रेटिंग पर प्रतिबाधा 0.08 p.u. है। समान वोल्टेज रेटिंग वाले 100 MVA सिस्टम बेस पर इसकी प्रति-इकाई प्रतिबाधा क्या होगी?',
        bn: 'একটি ২০ MVA ট্রান্সফরমারের নিজস্ব রেটিংয়ে ইম্পিডেন্স ০.০৮ p.u.। একই ভোল্টেজ রেটিংয়ে ১০০ MVA সিস্টেমে এর পার-ইউনিট ইম্পিডেন্স কত হবে?'
      },
      options: [
        { id: 'opt-1', text: { en: '0.016 p.u.', hi: '0.016 p.u.', bn: '০.০১৬ p.u.' } },
        { id: 'opt-2', text: { en: '0.400 p.u.', hi: '0.400 p.u.', bn: '০.৪০০ p.u.' } },
        { id: 'opt-3', text: { en: '0.080 p.u.', hi: '0.080 p.u.', bn: '০.০৮০ p.u.' } },
        { id: 'opt-4', text: { en: '0.800 p.u.', hi: '0.800 p.u.', bn: '০.৮০০ p.u.' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'Since the voltage base is unchanged: Z_new = Z_old * (S_new / S_old) = 0.08 * (100 / 20) = 0.08 * 5 = 0.40 p.u.',
        hi: 'वोल्टेज बेस समान होने पर: Z_new = Z_old * (S_new / S_old) = 0.08 * (100 / 20) = 0.40 p.u.।',
        bn: 'ভোল্টেজ বেস অপরিবর্তিত থাকায়: Z_new = Z_old * (S_new / S_old) = ০.০৮ * (১০০ / ২০) = ০.৪০ p.u.।'
      }
    },
    {
      id: 'mcq-ch16-l01-03',
      question: {
        en: 'Which of the following is a major advantage of the per-unit representation of a two-winding transformer?',
        hi: 'दो-वाइंडिंग ट्रांसफार्मर के प्रति-इकाई निरूपण का मुख्य लाभ निम्नलिखित में से कौन सा है?',
        bn: 'টু-ওয়াইন্ডিং ট্রান্সফরমারের পার-ইউনিট উপস্থাপনার প্রধান সুবিধা কোনটি?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Per-unit impedance is identical when referred to either the primary or secondary winding', hi: 'प्रति-इकाई प्रतिबाधा प्राथमिक या द्वितीयक किसी भी वाइंडिंग से देखने पर समान होती है', bn: 'প্রাইমারি বা সেকেন্ডারি যেকোনো ওয়াইন্ডিং থেকেই পার-ইউনিট ইম্পিডেন্স সমান থাকে' } },
        { id: 'opt-2', text: { en: 'It completely eliminates core magnetizing losses', hi: 'यह कोर मैग्नेटाइजिंग हानियों को पूरी तरह समाप्त कर देता है', bn: 'এটি কোর ম্যাগনেটাইজিং লস সম্পূর্ণ দূর করে' } },
        { id: 'opt-3', text: { en: 'Transformer efficiency becomes exactly 100%', hi: 'ट्रांसफार्मर की दक्षता ठीक 100% हो जाती है', bn: 'ট্রান্সফরমারের দক্ষতা ঠিক ১০০% হয়ে যায়' } },
        { id: 'opt-4', text: { en: 'Turns ratio must always equal 1:1', hi: 'टर्न अनुपात हमेशा 1:1 होना चाहिए', bn: 'টার্ন রেশিও সর্বদা ১:১ হতে হয়' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Because base impedances in the primary and secondary zones scale proportionally with the square of the transformer turns ratio, the resulting per-unit leakage impedance is exactly the same on both sides.',
        hi: 'क्योंकि प्राथमिक और द्वितीयक ज़ोन में बेस प्रतिबाधा टर्न अनुपात के वर्ग के अनुपात में बदलती है, इसलिए प्रति-इकाई प्रतिबाधा दोनों पक्षों पर समान रहती है।',
        bn: 'যেহেতু প্রাইমারি ও সেকেন্ডারি জোনের বেস ইম্পিডেন্স টার্ন রেশিওর বর্গের সাথে সমানুপাতিক, তাই পার-ইউনিট ইম্পিডেন্স উভয় দিকেই সমান হয়।'
      }
    },
    {
      id: 'mcq-ch16-l01-04',
      question: {
        en: 'In a three-phase power system, how is the base current (I_base) calculated from S_base (MVA) and V_base (kV line-to-line)?',
        hi: 'थ्री-फेज पावर सिस्टम में, S_base (MVA) और V_base (kV लाइन-टू-लाइन) से बेस धारा (I_base) की गणना कैसे की जाती है?',
        bn: 'থ্রি-ফেজ সিস্টেমে S_base (MVA) এবং V_base (kV লাইন-টু-লাইন) থেকে কীভাবে বেস কারেন্ট (I_base) গণনা করা হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'I_base = S_base / (sqrt(3) * V_base)', hi: 'I_base = S_base / (sqrt(3) * V_base)', bn: 'I_base = S_base / (sqrt(3) * V_base)' } },
        { id: 'opt-2', text: { en: 'I_base = S_base / (3 * V_base)', hi: 'I_base = S_base / (3 * V_base)', bn: 'I_base = S_base / (3 * V_base)' } },
        { id: 'opt-3', text: { en: 'I_base = (sqrt(3) * S_base) / V_base', hi: 'I_base = (sqrt(3) * S_base) / V_base', bn: 'I_base = (sqrt(3) * S_base) / V_base' } },
        { id: 'opt-4', text: { en: 'I_base = S_base * V_base', hi: 'I_base = S_base * V_base', bn: 'I_base = S_base * V_base' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'For a three-phase system, apparent power is S = sqrt(3) * V_LL * I_L. Therefore, I_base = S_base / (sqrt(3) * V_base,LL).',
        hi: 'थ्री-फेज सिस्टम के लिए, S = sqrt(3) * V_LL * I_L होता है। इसलिए I_base = S_base / (sqrt(3) * V_base,LL)।',
        bn: 'থ্রি-ফেজ সিস্টেমের জন্য S = sqrt(3) * V_LL * I_L। সুতরাং I_base = S_base / (sqrt(3) * V_base,LL)।'
      }
    },
    {
      id: 'mcq-ch16-l01-05',
      question: {
        en: 'If base voltage is doubled while base MVA remains constant, what happens to base impedance Z_base?',
        hi: 'यदि बेस MVA स्थिर रहते हुए बेस वोल्टेज को दोगुना कर दिया जाए, तो बेस प्रतिबाधा Z_base पर क्या प्रभाव पड़ेगा?',
        bn: 'যদি বেস MVA স্থির রেখে বেস ভোল্টেজ দ্বিগুণ করা হয়, তবে বেস ইম্পিডেন্স Z_base এর কী পরিবর্তন ঘটবে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'It quadruples (increases by 4 times)', hi: 'यह चार गुना हो जाती है (4 गुना वृद्धि)', bn: 'এটি চারগুণ বৃদ্ধি পায়' } },
        { id: 'opt-2', text: { en: 'It doubles (increases by 2 times)', hi: 'यह दोगुनी हो जाती है', bn: 'এটি দ্বিগুণ হয়' } },
        { id: 'opt-3', text: { en: 'It is halved (reduced by 50%)', hi: 'यह आधी हो जाती है', bn: 'এটি অর্ধেক হয়ে যায়' } },
        { id: 'opt-4', text: { en: 'It remains unchanged', hi: 'यह अपरिवर्तित रहती है', bn: 'এটি অপরিবর্তিত থাকে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Since Z_base = (V_base)² / S_base, doubling V_base scales (2)² = 4 times.',
        hi: 'चूंकि Z_base = (V_base)² / S_base होता है, इसलिए वोल्टेज दोगुना करने पर प्रतिबाधा (2)² = 4 गुना हो जाती है।',
        bn: 'যেহেতু Z_base = (V_base)² / S_base, তাই ভোল্টেজ দ্বিগুণ করলে ইম্পিডেন্স (২)² = ৪ গুণ বৃদ্ধি পায়।'
      }
    },
    {
      id: 'mcq-ch16-l01-06',
      question: {
        en: 'A transmission line has an impedance of 0.25 p.u. on a 100 MVA, 400 kV base. What is its actual ohmic reactance?',
        hi: 'एक पारेषण लाइन का 100 MVA, 400 kV आधार पर प्रतिघात 0.25 p.u. है। इसका वास्तविक ओमिक प्रतिघात क्या है?',
        bn: '১০০ MVA, ৪০০ kV বেসে একটি ট্রান্সমিশন লাইনের রিঅ্যাক্ট্যান্স ০.২৫ p.u.। এর প্রকৃত ওহমিক রিঅ্যাক্ট্যান্স কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '400.0 Ω', hi: '400.0 Ω', bn: '৪০০.০ Ω' } },
        { id: 'opt-2', text: { en: '1600.0 Ω', hi: '1600.0 Ω', bn: '১৬০০.০ Ω' } },
        { id: 'opt-3', text: { en: '100.0 Ω', hi: '100.0 Ω', bn: '১০০.০ Ω' } },
        { id: 'opt-4', text: { en: '25.0 Ω', hi: '25.0 Ω', bn: '২৫.০ Ω' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Z_base = (400)² / 100 = 160,000 / 100 = 1,600 Ω. Actual impedance = Z_pu * Z_base = 0.25 * 1,600 = 400 Ω.',
        hi: 'Z_base = (400)² / 100 = 1,600 Ω। वास्तविक प्रतिबाधा = 0.25 * 1,600 = 400 Ω।',
        bn: 'Z_base = (৪০০)² / ১০০ = ১,৬০০ Ω। প্রকৃত ইম্পিডেন্স = ০.২৫ * ১,৬০০ = ৪০০ Ω।'
      }
    },
    {
      id: 'mcq-ch16-l01-07',
      question: {
        en: 'Why does the factor sqrt(3) disappear from three-phase complex power calculations in the per-unit system?',
        hi: 'प्रति-इकाई प्रणाली में थ्री-फेज सम्मिश्र शक्ति गणनाओं से sqrt(3) गुणक क्यों लुप्त हो जाता है?',
        bn: 'পার-ইউনিট সিস্টেমে থ্রি-ফেজ জটিল পাওয়ার গণনায় sqrt(3) গুণকটি কেন বাদ যায়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Because base power is defined such that S_base = sqrt(3) * V_base,LL * I_base, cancelling the factor', hi: 'क्योंकि बेस पावर को S_base = sqrt(3) * V_base * I_base के रूप में परिभाषित किया जाता है जिससे यह कट जाता है', bn: 'কারণ বেস পাওয়ার S_base = sqrt(3) * V_base * I_base সংজ্ঞায়িত হওয়ায় এটি বিলুপ্ত হয়' } },
        { id: 'opt-2', text: { en: 'Because per-unit calculations assume single-phase circuits only', hi: 'क्योंकि प्रति-इकाई गणना केवल सिंगल-फेज परिपथ मानती है', bn: 'কারণ পার-ইউনিট হিসাব শুধুমাত্র সিঙ্গল-ফেজ ধরে নেওয়া হয়' } },
        { id: 'opt-3', text: { en: 'Because the neutral conductor carries all third harmonics', hi: 'क्योंकि न्यूट्रल तार सभी तृतीय हार्मोनिक्स वहन करता है', bn: 'কারণ নিউট্রাল কন্ডাক্টর সকল ৩য় হারমোনিক বহন করে' } },
        { id: 'opt-4', text: { en: 'Because line resistance is neglected', hi: 'क्योंकि लाइन प्रतिरोध को नगण्य माना जाता है', bn: 'কারণ লাইনের রোধ অগ্রাহ্য করা হয়' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Actual power is S = sqrt(3) * V * I. Dividing by S_base = sqrt(3) * V_base * I_base yields S_pu = (V / V_base) * (I / I_base) = V_pu * I_pu, eliminating sqrt(3).',
        hi: 'वास्तविक शक्ति S = sqrt(3) * V * I होती है। S_base = sqrt(3) * V_base * I_base से भाग देने पर sqrt(3) कट जाता है और S_pu = V_pu * I_pu बचता है।',
        bn: 'প্রকৃত পাওয়ার S = sqrt(3) * V * I। একে S_base = sqrt(3) * V_base * I_base দিয়ে ভাগ করলে sqrt(3) বাদ গিয়ে S_pu = V_pu * I_pu দাঁড়ায়।'
      }
    },
    {
      id: 'mcq-ch16-l01-08',
      question: {
        en: 'An equipment manufacturer specifies transformer reactance as X = 10% on 25 MVA, 11 kV. If the new base is chosen as 50 MVA and 22 kV, what is the new per-unit reactance?',
        hi: 'एक उपकरण निर्माता 25 MVA, 11 kV पर ट्रांसफार्मर प्रतिघात X = 10% निर्दिष्ट करता है। यदि नया आधार 50 MVA और 22 kV चुना जाता है, तो नया प्रति-इकाई प्रतिघात क्या है?',
        bn: 'একটি ২৫ MVA, ১১ kV ট্রান্সফরমারের নিজস্ব রিঅ্যাক্ট্যান্স X = ১০%। নতুন বেস ৫০ MVA এবং ২২ kV হলে নতুন পার-ইউনিট রিঅ্যাক্ট্যান্স কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '0.050 p.u. (5%)', hi: '0.050 p.u. (5%)', bn: '০.০৫০ p.u. (৫%)' } },
        { id: 'opt-2', text: { en: '0.200 p.u. (20%)', hi: '0.200 p.u. (20%)', bn: '০.২০০ p.u. (২০%)' } },
        { id: 'opt-3', text: { en: '0.400 p.u. (40%)', hi: '0.400 p.u. (40%)', bn: '০.৪০০ p.u. (৪০%)' } },
        { id: 'opt-4', text: { en: '0.025 p.u. (2.5%)', hi: '0.025 p.u. (2.5%)', bn: '০.০২৫ p.u. (২.৫%)' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Z_new = Z_old * (V_old / V_new)² * (S_new / S_old) = 0.10 * (11 / 22)² * (50 / 25) = 0.10 * (1/4) * 2 = 0.10 * 0.5 = 0.05 p.u.',
        hi: 'Z_new = 0.10 * (11 / 22)² * (50 / 25) = 0.10 * (0.25) * 2 = 0.05 p.u. (5%)।',
        bn: 'Z_new = ০.১০ * (১১ / ২২)² * (৫০ / ২৫) = ০.১০ * (১/৪) * ২ = ০.০৫০ p.u. (৫%)।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch16-l01-01',
      question: {
        en: 'A 3-phase, 100 MVA, 22 kV generator has Xd" = 0.18 p.u. connected to a 100 MVA, 22/220 kV step-up transformer with X = 0.10 p.u. Find the total impedance up to the 220 kV bus on a 100 MVA, 220 kV base.',
        hi: 'एक 3-फेज, 100 MVA, 22 kV जनरेटर (Xd" = 0.18 p.u.) 100 MVA, 22/220 kV स्टेप-अप ट्रांसफार्मर (X = 0.10 p.u.) से जुड़ा है। 100 MVA, 220 kV आधार पर 220 kV बस तक कुल प्रतिबाधा ज्ञात कीजिए।',
        bn: 'একটি ১০০ MVA, ২২ kV জেনারেটর (Xd" = ০.১৮ p.u.) একটি ১০০ MVA, ২২/২২০ kV স্টেপ-আপ ট্রান্সফরমার (X = ০.১০ p.u.) এর সাথে যুক্ত। ১০০ MVA, ২২০ kV বেসে মোট ইম্পিডেন্স কত?'
      },
      hint: {
        en: 'Because both items share the 100 MVA base and their nominal voltage matches the zone bases (22 kV and 220 kV), simply add the per-unit reactances: X_total = 0.18 + 0.10 = 0.28 p.u.',
        hi: 'चूंकि दोनों उपकरण 100 MVA आधार साझा करते हैं, केवल प्रतिघातों को जोड़ें: X_total = 0.18 + 0.10 = 0.28 p.u.।',
        bn: 'উভয় যন্ত্রপাতির বেস ১০০ MVA হওয়ায় সরাসরি যোগ করুন: X_total = ০.১৮ + ০.১০ = ০.২৮ p.u.।'
      }
    }
  ]
};
