import { Lesson } from '../types';

export const LESSON_TRANSMISSION_PARAMETERS: Lesson = {
  id: 'lsn-ch16-transmission-line-parameters',
  topicId: 'tp-ch16-transmission-line-parameters',
  chapterId: 'ch-advanced-power-system-analysis',
  order: 3,
  title: {
    en: 'Transmission-Line Constants: GMR, GMD, Inductance & Capacitance',
    hi: 'पारेषण लाइन स्थिरांक: GMR, GMD, प्रेरकत्व एवं धारिता',
    bn: 'ট্রান্সমিশন লাইন ধ্রুবক: GMR, GMD, ইনডাকট্যান্স ও ক্যাপাসিট্যান্স'
  },
  description: {
    en: 'Rigorous calculation of overhead transmission line primary parameters: self and mutual Geometric Mean Distance (GMD), Geometric Mean Radius (GMR), loop and per-phase inductance of bundled conductor geometries, line-to-neutral capacitance, and earth effect using method of images.',
    hi: 'ओवरहेड पारेषण लाइन के प्राथमिक मापदंडों की सटीक गणना: स्व एवं पारस्परिक ज्यामितीय माध्य दूरी (GMD), ज्यामितीय माध्य त्रिज्या (GMR), बंडल कंडक्टर ज्यामिति का लूप एवं प्रति-फेज प्रेरकत्व, लाइन-टू-न्यूट्रल धारिता तथा प्रतिबिंब विधि द्वारा पृथ्वी का प्रभाव।',
    bn: 'ওভারহেড সঞ্চালন লাইনের প্রাথমিক প্যারামিটারসমূহের সুনির্দিষ্ট গণনা: স্ব ও পারস্পরিক জ্যামিতিক গড় দূরত্ব (GMD), জ্যামিতিক গড় ব্যাসার্ধ (GMR), বান্ডিল কন্ডাক্টরের প্রতি-ফেজ ইন্ডাকট্যান্স, লাইন-টু-নিউট্রাল ক্যাপাসিট্যান্স এবং প্রতিবিম্ব পদ্ধতির সাহায্যে ভূ-পৃষ্ঠের প্রভাব।'
  },
  estimatedMinutes: 42,
  easyExplanation: {
    en: 'When high-voltage AC electricity flows through long overhead transmission lines, the lines do not behave as simple copper or aluminum resistors. The alternating current sets up an alternating magnetic field inside and around the conductors, creating series inductance. Simultaneously, the thousands of volts between the conductors and the ground establish an electric field in the surrounding air, creating shunt capacitance. To calculate these values for real-world three-phase lines with complex wire spacings, power engineers use two elegant mathematical concepts: Geometric Mean Radius (GMR), which accounts for internal conductor magnetic flux and stranded/bundled configurations, and Geometric Mean Distance (GMD), which accounts for the physical separation between phases. Bundling conductors dramatically increases GMR, lowering line inductance, boosting surge impedance loading, and suppressing corona noise!',
    hi: 'जब उच्च-वोल्टेज AC बिजली लंबी ओवरहेड लाइनों से बहती है, तो वे केवल साधारण प्रतिरोधक की तरह व्यवहार नहीं करतीं। प्रत्यावर्ती धारा अपने चारों ओर चुंबकीय क्षेत्र बनाती है जिससे प्रेरकत्व (Inductance) उत्पन्न होता है। साथ ही तारों और पृथ्वी के बीच उच्च वोल्टेज वायु में विद्युत क्षेत्र बनाता है जिससे धारिता (Capacitance) उत्पन्न होती है। वास्तविक थ्री-फेज लाइनों के लिए इंजीनियर दो अवधारणाओं का उपयोग करते हैं: GMR (कंडक्टर की आंतरिक और बंडल ज्यामिति) और GMD (फेजों के बीच की दूरी)। बंडल कंडक्टर GMR को बढ़ाते हैं, जिससे लाइन का प्रतिघात घटता है और कोरोना डिस्चार्ज कम होता है!',
    bn: 'যখন উচ্চ ভোল্টেজের এসি বিদ্যুৎ দীর্ঘ ওভারহেড লাইনের মধ্য দিয়ে প্রবাহিত হয়, তখন তা কেবল রোধ হিসেবে কাজ করে না। পরিবর্তনশীল কারেন্ট চারপাশে চৌম্বক ক্ষেত্র তৈরি করে যা সিরিজ ইনডাকট্যান্স সৃষ্টি করে। একই সাথে উচ্চ ভোল্টেজ বাতাসে তড়িৎ ক্ষেত্র তৈরি করে যা শান্ট ক্যাপাসিট্যান্সের জন্ম দেয়। বাস্তব থ্রি-ফেজ লাইনের হিসাব সহজ করতে দুটি বিশেষ গাণিতিক পদ্ধতি ব্যবহৃত হয়: GMR (কন্ডাক্টরের অভ্যন্তরীণ ও বান্ডিল আকার) এবং GMD (ফেজসমূহের মধ্যবর্তী দূরত্ব)। বান্ডিল কন্ডাক্টর ব্যবহারের ফলে লাইনের GMR বৃদ্ধি পায়, ইন্ডাকট্যান্স হ্রাস পায় এবং করোনা হ্রাস পায়!'
  },
  detailedExplanation: {
    en: 'Transmission line parameters (Resistance R, Inductance L, Capacitance C, and Conductance G) govern power transfer capability, voltage drops, and wave propagation speeds across electrical grids.\n\n1. Inductance of a Conductor:\nThe total magnetic flux linkage lambda consists of two components: internal flux linkage (within the conductor body) and external flux linkage (surrounding the conductor up to the return path):\n• Internal inductance: L_int = (mu_0 / (8 * pi)) = 0.5 * 10^-7 H/m (independent of conductor diameter for uniform current distribution).\n• External inductance: L_ext = (mu_0 / (2 * pi)) * ln(D / r) H/m.\n• Combining both terms gives: L = (mu_0 / (2 * pi)) * ln(D / r\'), where r\' = r * e^(-1/4) = 0.7788 * r is the Geometric Mean Radius (GMR_L) of a solid cylindrical conductor.\n\n2. Three-Phase Lines and Symmetrical Transposition:\nIn untransposed three-phase lines with asymmetrical spacing (e.g., flat horizontal configuration), the induced EMFs in the three phases become unequal, causing voltage unbalance. Periodic transposition of conductors along the line route equalizes average phase inductances:\n• Geometric Mean Distance: GMD = (D_ab * D_bc * D_ca)^(1/3)\n• Inductance per phase: L = 2 * 10^-7 * ln(GMD / GMR_L) H/m\n\n3. Bundled Conductors:\nHigh-voltage lines (220 kV, 400 kV, 765 kV) employ bundled conductors (2, 3, 4, or 6 sub-conductors per phase separated by spacers of distance d):\n• 2-conductor bundle: GMR_b = sqrt(GMR_s * d)\n• 3-conductor bundle (equilateral triangle): GMR_b = (GMR_s * d²)^(1/3)\n• 4-conductor bundle (square): GMR_b = 1.091 * (GMR_s * d³)^(1/4)\nBundling significantly increases equivalent GMR without altering conductor cross-sectional area, reducing inductive reactance (X_L) by 20% to 35% and increasing surge impedance loading (SIL).\n\n4. Line-to-Neutral Capacitance and Method of Images:\nCharges on conductors terminate on ground planes. Earth presence is modeled by placing fictitious negative image conductors at equal depths beneath the ground surface. For typical line heights (h >> D), ground proximity slightly increases capacitance (< 1% to 2%):\n• Capacitance to neutral: C_n = (2 * pi * epsilon_0) / ln(GMD / r_eq) F/m, where r_eq is calculated using the physical radius r rather than the modified 0.7788r (since electrostatic charge resides exclusively on the outer surface of conductors).',
    hi: 'पारेषण लाइन के पैरामीटर (R, L, C, G) ग्रिड में विद्युत पारेषण क्षमता और वोल्टेज ड्रॉप को निर्धारित करते हैं।\n\n1. कंडक्टर का प्रेरकत्व:\nकुल फ्लक्स लिंकेज आंतरिक और बाहरी फ्लक्स का योग होता है। ठोस चालक के लिए GMR_L = 0.7788 * r होता है।\n\n2. थ्री-फेज लाइनों का ट्रांसपोजिशन:\nअसममित दूरी वाली लाइनों में फेजों को ट्रांसपोज किया जाता है ताकि औसत प्रेरकत्व समान रहे:\nGMD = (D_ab * D_bc * D_ca)^(1/3)\nL = 2 * 10^-7 * ln(GMD / GMR) H/m\n\n3. बंडल कंडक्टर:\nउच्च वोल्टेज लाइनों में प्रति फेज 2, 3 या 4 सब-कंडक्टर होते हैं। बंडलिंग से प्रभावी GMR बढ़ता है, जिससे प्रेरकत्व कम होता है और लाइन की क्षमता बढ़ती है।\n\n4. धारिता (Capacitance):\nधारिता गणना में कंडक्टर के बाहरी पृष्ठ पर आवेश होने के कारण वास्तविक त्रिज्या r का उपयोग किया जाता है। C_n = (2 * pi * epsilon_0) / ln(GMD / r) F/m।',
    bn: 'ট্রান্সমিশন লাইনের প্যারামিটারসমূহ (R, L, C, G) পাওয়ার গ্রিডের কর্মক্ষমতা নির্ধারণ করে।\n\n১. পরিবাহীর ইন্ডাকট্যান্স:\nঅভ্যন্তরীণ ও বাহ্যিক ফ্লাক্সের সমন্বয়ে মোট ইন্ডাকট্যান্স গঠিত। কঠিন তারের জন্য GMR_L = ০.৭৭৮৮ * r।\n\n২. থ্রি-ফেজ লাইনের ট্রান্সপোজিশন:\nফেজসমূহের ভোল্টেজ ভারসাম্য রক্ষা করতে লাইন ট্রান্সপোজ করা হয়:\nGMD = (D_ab * D_bc * D_ca)^(1/3)\nL = 2 * 10^-7 * ln(GMD / GMR) H/m\n\n৩. বান্ডিল কন্ডাক্টর:\nউচ্চ ভোল্টেজ লাইনে প্রতি ফেজে একাধিক সাব-কন্ডাক্টর ব্যবহার করা হয় যা কার্যকর GMR বাড়িয়ে ইন্ডাকট্যান্স কমায় ও পাওয়ার সঞ্চালন ক্ষমতা বৃদ্ধি করে।\n\n৪. ক্যাপাসিট্যান্স:\nচার্জ কেবল তারের বহিঃপৃষ্ঠে থাকায় ক্যাপাসিট্যান্সে প্রকৃত ব্যাসার্ধ r ব্যবহৃত হয়। C_n = (2 * pi * epsilon_0) / ln(GMD / r) F/m।'
  },
  formulas: [
    {
      id: 'f-ch16-inductance-transposed',
      symbol: 'L',
      expression: 'L = 2 \\cdot 10^{-7} \\cdot \\ln\\left(\\frac{GMD}{GMR_L}\\right) \\quad \\text{[H/m]}',
      title: {
        en: 'Per-Phase Inductance of a Completely Transposed Three-Phase Line',
        hi: 'पूर्णतः ट्रांसपोज्ड थ्री-फेज लाइन का प्रति-फेज प्रेरकत्व',
        bn: 'সম্পূর্ণরূপে ট্রান্সপোজড থ্রি-ফেজ লাইনের প্রতি-ফেজ ইন্ডাকট্যান্স'
      },
      description: {
        en: 'Calculates the positive-sequence series inductance per meter per phase for a transposed overhead line.',
        hi: 'ट्रांसपोज्ड ओवरहेड लाइन के लिए प्रति मीटर प्रति फेज पॉजिटिव-सीक्वेंस सीरीज प्रेरकत्व की गणना करता है।',
        bn: 'একটি ট্রান্সপোজড ওভারহেড লাইনের প্রতি মিটার প্রতি ফেজ পজিটিভ-সিকোয়েন্স সিরিজ ইন্ডাকট্যান্স নির্ণয় করে।'
      },
      variables: [
        { symbol: 'L', name: { en: 'Inductance per phase per unit length (H/m)', hi: 'प्रति इकाई लंबाई प्रेरकत्व (H/m)', bn: 'প্রতি একক দৈর্ঘ্যে ইন্ডাকট্যান্স (H/m)' } },
        { symbol: 'GMD', name: { en: 'Geometric Mean Distance between phases (m)', hi: 'फेजों के बीच ज्यामितीय माध्य दूरी (m)', bn: 'ফেজসমূহের মধ্যে জ্যামিতিক গড় দূরত্ব (m)' } },
        { symbol: 'GMR_L', name: { en: 'Geometric Mean Radius for inductance (m)', hi: 'प्रेरकत्व हेतु ज्यामितीय माध्य त्रिज्या (m)', bn: 'ইন্ডাকট্যান্সের জ্যামিতিক গড় ব্যাসার্ধ (m)' } }
      ]
    },
    {
      id: 'f-ch16-capacitance-neutral',
      symbol: 'C_n',
      expression: 'C_n = \\frac{2 \\pi \\varepsilon_0}{\\ln\\left(\\frac{GMD}{r_{eq}}\\right)} \\quad \\text{[F/m]}',
      title: {
        en: 'Line-to-Neutral Capacitance of a Transposed Three-Phase Line',
        hi: 'ट्रांसपोज्ड थ्री-फेज लाइन की लाइन-टू-न्यूट्रल धारिता',
        bn: 'ট্রান্সপোজড থ্রি-ফেজ লাইনের লাইন-টু-নিউট্রাল ক্যাপাসিট্যান্স'
      },
      description: {
        en: 'Calculates the shunt line-to-neutral electrostatic capacitance per meter per phase (epsilon_0 = 8.854 * 10^-12 F/m).',
        hi: 'प्रति मीटर प्रति फेज शंट लाइन-टू-न्यूट्रल धारिता की गणना करता है।',
        bn: 'প্রতি মিটার প্রতি ফেজ শান্ট লাইন-টু-নিউট্রাল ক্যাপাসিট্যান্স নির্ণয় করে।'
      },
      variables: [
        { symbol: 'C_n', name: { en: 'Capacitance to neutral (F/m)', hi: 'न्यूट्रल के सापेक्ष धारिता (F/m)', bn: 'নিউট্রালের সাপেক্ষে ক্যাপাসিট্যান্স (F/m)' } },
        { symbol: '\\varepsilon_0', name: { en: 'Permittivity of free space (8.854e-12 F/m)', hi: 'निर्वात की विद्युतशीलता (8.854e-12 F/m)', bn: 'শূন্যস্থানের ভেদ্যতা (8.854e-12 F/m)' } },
        { symbol: 'GMD', name: { en: 'Geometric Mean Distance (m)', hi: 'ज्यामितीय माध्य दूरी (m)', bn: 'জ্যামিতিক গড় দূরত্ব (m)' } },
        { symbol: 'r_{eq}', name: { en: 'Equivalent radius for capacitance (m)', hi: 'धारिता हेतु समतुल्य त्रिज्या (m)', bn: 'ক্যাপাসিট্যান্সের সমতুল্য ব্যাসার্ধ (m)' } }
      ]
    },
    {
      id: 'f-ch16-bundle-gmr',
      symbol: 'GMR_{bundle,4}',
      expression: 'GMR_{bundle,4} = 1.091 \\cdot \\left(GMR_s \\cdot d^3\\right)^{1/4}',
      title: {
        en: 'Equivalent GMR of a 4-Conductor Square Bundle',
        hi: '4-कंडक्टर वर्गाकार बंडल का समतुल्य GMR',
        bn: '৪-কন্ডাক্টর বর্গাকার বান্ডিলের সমতুল্য GMR'
      },
      description: {
        en: 'Computes the composite self-GMR of a quad-bundle transmission phase with bundle spacing d and sub-conductor GMR_s.',
        hi: 'बंडल अंतराल d और सब-कंडक्टर GMR_s वाले 4-कंडक्टर बंडल के समग्र GMR की गणना करता है।',
        bn: 'বান্ডিল ব্যবধান d এবং সাব-কন্ডাক্টরের GMR_s বিশিষ্ট চার কন্ডাক্টর বান্ডিলের সামগ্রিক GMR নির্ণয় করে।'
      },
      variables: [
        { symbol: 'GMR_{bundle,4}', name: { en: 'Composite bundle GMR (m)', hi: 'समग्र बंडल GMR (m)', bn: 'সামগ্রিক বান্ডিল GMR (m)' } },
        { symbol: 'GMR_s', name: { en: 'Individual sub-conductor self-GMR (m)', hi: 'सब-कंडक्टर का स्व-GMR (m)', bn: 'সাব-কন্ডাক্টরের নিজস্ব GMR (m)' } },
        { symbol: 'd', name: { en: 'Bundle spacer distance (m)', hi: 'बंडल स्पेसर दूरी (m)', bn: 'বান্ডিল স্পেসার দূরত্ব (m)' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-ch16-l03-bundle-transposition',
      title: {
        en: 'Bundled Conductor Physics & Surge Impedance Loading',
        hi: 'बंडल कंडक्टर भौतिकी एवं सर्ज इम्पीडेंस लोडिंग',
        bn: 'বান্ডিল কন্ডাক্টরের পদার্থবিজ্ঞান ও সার্জ ইম্পিডেন্স লোডিং'
      },
      content: {
        en: 'Bundling is the standard practice on modern Extra High Voltage (EHV > 220 kV) and Ultra High Voltage (UHV > 765 kV) grids for three critical physical reasons:\n\n1. Surface Electric Field Reduction: Multiple sub-conductors distribute electrical charges over an effectively huge perimeter. This reduces the peak electrostatic surface gradient below the breakdown threshold of air (~30 kV/cm peak dry air), suppressing audible buzzing, radio interference, and power loss from corona discharge.\n\n2. Inductance Reduction & Capacitance Increase: Because GMR appears in the denominator of inductance (ln(GMD/GMR)) and denominator of capacitance, bundling reduces inductive reactance X_L by 25-35% and increases shunt capacitance C_n by 25-35%.\n\n3. Surge Impedance Loading (SIL): The characteristic surge impedance of the line is Z_c = sqrt(L / C). Because L decreases and C increases, Z_c drops from ~400 Ω for a single conductor to ~250-280 Ω for a 4-conductor bundle. Consequently, the natural uncompensated power transmission capability (SIL = V_LL² / Z_c) surges dramatically, enabling 400 kV lines to deliver over 600 MW naturally.',
        hi: 'बंडल कंडक्टरों का उपयोग उच्च वोल्टेज लाइनों में कोरोना डिस्चार्ज को रोकने, लाइन प्रेरकत्व को घटाने और सर्ज इम्पीडेंस लोडिंग (SIL) को बढ़ाने के लिए किया जाता है। बंडलिंग से लाइन की प्राकृतिक पारेषण क्षमता 40% से अधिक बढ़ जाती है।',
        bn: 'উচ্চ ভোল্টেজ লাইনে করোনা লস রোধ, ইন্ডাকট্যান্স হ্রাস এবং সার্জ ইম্পিডেন্স লোডিং (SIL) বৃদ্ধির জন্য বান্ডিল কন্ডাক্টর ব্যবহৃত হয়। চার-কন্ডাক্টর বান্ডিল লাইনের প্রাকৃতিক বিদ্যুৎ পরিবহন ক্ষমতা উল্লেখযোগ্যভাবে বাড়িয়ে দেয়।'
      },
      schematicId: 'sch-ch16-transmission-parameters'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch16-l03-01',
      problem: {
        en: 'A completely transposed three-phase 400 kV line has horizontal flat spacing with 8 m between adjacent phases (D_ab = 8 m, D_bc = 8 m, D_ca = 16 m). Each phase consists of a 2-conductor bundle with sub-conductor radius r = 1.5 cm and spacing d = 40 cm. For a sub-conductor GMR_s = 0.7788 * r, calculate:\n(a) The Geometric Mean Distance (GMD).\n(b) The bundle GMR for inductance.\n(c) The series inductive reactance in Ω/km at 50 Hz.',
        hi: 'एक पूर्णतः ट्रांसपोज्ड 400 kV थ्री-फेज लाइन में क्षैतिज समतल विन्यास है जिसमें आसन्न फेजों के बीच 8 m की दूरी है (D_ab = 8 m, D_bc = 8 m, D_ca = 16 m)। प्रत्येक फेज में 2-कंडक्टर बंडल है (त्रिज्या r = 1.5 cm, बंडल अंतराल d = 40 cm, GMR_s = 0.7788 * r)। 50 Hz पर गणना कीजिए:\n(a) GMD\n(b) बंडल GMR\n(c) Ω/km में सीरीज प्रेरणिक प्रतिघात।',
        bn: 'একটি সম্পূর্ণ ট্রান্সপোজড ৪০০ kV থ্রি-ফেজ লাইনের অনুভূমিক বিন্যাসে ফেজ দূরত্ব যথাক্রমে ৮ m, ৮ m এবং ১৬ m। প্রতিটি ফেজে ২-কন্ডাক্টর বান্ডিল রয়েছে (ব্যাসার্ধ r = ১.৫ cm, স্পেসিং d = ৪০ cm, GMR_s = ০.৭৭৮৮ * r)। ৫০ Hz এ নির্ণয় করুন:\n(a) GMD\n(b) বান্ডিল GMR\n(c) Ω/km এককে সিরিজ রিঅ্যাক্ট্যান্স।'
      },
      solution: {
        en: 'Step 1: Calculate GMD:\nGMD = (D_ab * D_bc * D_ca)^(1/3) = (8 * 8 * 16)^(1/3) = (1024)^(1/3) = 10.079 m\n\nStep 2: Calculate Bundle GMR for Inductance:\n• Sub-conductor GMR_s = 0.7788 * 0.015 m = 0.011682 m\n• For 2-conductor bundle: GMR_b = sqrt(GMR_s * d) = sqrt(0.011682 * 0.40) = sqrt(0.0046728) = 0.06836 m\n\nStep 3: Calculate Inductance per Phase per Meter:\nL = 2 * 10^-7 * ln(GMD / GMR_b) = 2 * 10^-7 * ln(10.079 / 0.06836)\n• ln(147.44) = 4.9934\n• L = 2 * 10^-7 * 4.9934 = 9.987 * 10^-7 H/m = 0.9987 mH/km\n\nStep 4: Calculate Inductive Reactance at 50 Hz:\nX_L = 2 * pi * f * L = 2 * pi * 50 * (0.9987 * 10^-3) = 0.3138 Ω/km',
        hi: 'चरण 1: GMD = (8 * 8 * 16)^(1/3) = 10.079 m\nचरण 2: GMR_s = 0.7788 * 0.015 = 0.01168 m; GMR_b = sqrt(0.01168 * 0.40) = 0.06836 m\nचरण 3: L = 2e-7 * ln(10.079 / 0.06836) = 0.9987 mH/km\nचरण 4: X_L = 2 * pi * 50 * L = 0.3138 Ω/km',
        bn: 'ধাপ ১: GMD = (৮ * ৮ * ১৬)^(১/৩) = ১০.০৭৯ m\nধাপ ২: GMR_s = ০.৭৭৮৮ * ০.০১৫ = ০.০১১৬৮ m; GMR_b = sqrt(০.০১১৬৮ * ০.৪০) = ০.০৬৮৩৬ m\nধাপ ৩: L = 2e-7 * ln(১০.০৭৯ / ০.০৬৮৩৬) = ০.৯৯৮৭ mH/km\nধাপ ৪: X_L = ২ * pi * ৫০ * L = ০.৩১৩৮ Ω/km'
      },
      givenValues: { 'D_ab': '8 m', 'D_bc': '8 m', 'D_ca': '16 m', 'r': '0.015 m', 'd': '0.40 m', 'f': '50 Hz' },
      finalAnswer: {
        en: 'GMD = 10.079 m, GMR_b = 0.0684 m, L = 0.999 mH/km, X_L = 0.314 Ω/km',
        hi: 'GMD = 10.079 m, GMR_b = 0.0684 m, L = 0.999 mH/km, X_L = 0.314 Ω/km',
        bn: 'GMD = ১০.০৭৯ m, GMR_b = ০.০৬৮৪ m, L = ০.৯৯৯ mH/km, X_L = ০.৩১৪ Ω/km'
      }
    },
    {
      id: 'ex-ch16-l03-02',
      problem: {
        en: 'Calculate the line-to-neutral capacitance in microfarads per kilometer (μF/km) and charging susceptance (μS/km) at 50 Hz for the same 400 kV line in Example 1, where GMD = 10.079 m, sub-conductor radius r = 1.5 cm, and bundle spacing d = 40 cm.',
        hi: 'उदाहरण 1 की उसी 400 kV लाइन के लिए 50 Hz पर लाइन-टू-न्यूट्रल धारिता (μF/km) और चार्जिंग ससेप्टेंस (μS/km) ज्ञात कीजिए (GMD = 10.079 m, r = 1.5 cm, d = 40 cm)।',
        bn: 'উদাহরণ ১ এর ৪০০ kV লাইনের জন্য ৫০ Hz এ লাইন-টু-নিউট্রাল ক্যাপাসিট্যান্স (μF/km) এবং চার্জিং সাসেপ্ট্যান্স (μS/km) নির্ণয় করুন (GMD = ১০.০৭৯ m, r = ১.৫ cm, d = ৪০ cm)।'
      },
      solution: {
        en: 'Step 1: Calculate Equivalent Radius for Capacitance (r_eq):\nIn capacitance calculations, charge resides entirely on the outer surface, so use physical radius r instead of 0.7788r:\nr_eq = sqrt(r * d) = sqrt(0.015 * 0.40) = sqrt(0.006) = 0.07746 m\n\nStep 2: Calculate Line-to-Neutral Capacitance C_n:\nC_n = (2 * pi * epsilon_0) / ln(GMD / r_eq)\n• epsilon_0 = 8.854 * 10^-12 F/m\n• 2 * pi * epsilon_0 = 5.563 * 10^-11 F/m\n• ln(10.079 / 0.07746) = ln(130.12) = 4.8685\n• C_n = (5.563 * 10^-11) / 4.8685 = 1.1427 * 10^-11 F/m = 0.01143 μF/km\n\nStep 3: Calculate Shunt Charging Susceptance at 50 Hz:\nB_c = 2 * pi * f * C_n = 2 * pi * 50 * (1.1427 * 10^-11 * 1000) = 3.590 μS/km',
        hi: 'चरण 1: धारिता हेतु r_eq = sqrt(r * d) = sqrt(0.015 * 0.40) = 0.07746 m\nचरण 2: C_n = (2 * pi * 8.854e-12) / ln(10.079 / 0.07746) = 1.1427e-11 F/m = 0.01143 μF/km\nचरण 3: चार्जिंग ससेप्टेंस B_c = 2 * pi * 50 * C_n = 3.590 μS/km',
        bn: 'ধাপ ১: ক্যাপাসিট্যান্সের r_eq = sqrt(r * d) = ০.০৭৭৪৬ m\nধাপ ২: C_n = (2 * pi * 8.854e-12) / ln(১০.০৭৯ / ০.০৭৭৪৬) = ০.০১১৪৩ μF/km\nধাপ ৩: B_c = ২ * pi * ৫০ * C_n = ৩.৫৯০ μS/km'
      },
      givenValues: { 'GMD': '10.079 m', 'r': '0.015 m', 'd': '0.40 m', 'f': '50 Hz' },
      finalAnswer: {
        en: 'C_n = 0.01143 μF/km, B_c = 3.590 μS/km',
        hi: 'C_n = 0.01143 μF/km, B_c = 3.590 μS/km',
        bn: 'C_n = ০.০১১৪৩ μF/km, B_c = ৩.৫৯০ μS/km'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Design and tower dimensioning of 400 kV and 765 kV EHV lines to ensure surface voltage gradients do not exceed corona inception limits.',
      'Determining shunt reactor sizing in high-voltage substations to absorb reactive charging MVAR generated by line capacitance under light load.',
      'Accurate parameter entry into transmission line relay settings (distance relay zones 1, 2, and 3).'
    ],
    hi: [
      'कोरोना डिस्चार्ज रोकने के लिए 400 kV और 765 kV टावर की ज्यामिति और कंडक्टर बंडल का डिजाइन।',
      'कम लोड पर लाइन धारिता द्वारा उत्पन्न चार्जिंग MVAR को अवशोषित करने हेतु शंट रिएक्टर का आकार तय करना।',
      'डिस्टेंस रिले सेटिंग्स (जोन 1, 2, 3) के लिए सटीक ट्रांसमिशन लाइन पैरामीटर प्रविष्टि।'
    ],
    bn: [
      'করোনা নিঃসরণ রোধে ৪০০ kV ও ৭৬৫ kV টাওয়ারের জ্যামিতি ও কন্ডাক্টর বান্ডিল নকশাকরণ।',
      'হালকা লোডে সঞ্চালন লাইনের ক্যাপাসিট্যান্সে সৃষ্ট চার্জিং MVAR শোষণ করতে শান্ট রিঅ্যাক্টর নির্ধারণ।',
      'দূরত্ব প্রোটেকশন রিলে (জোন ১, ২, ৩) সেটিংয়ে সঠিক লাইন ইম্পিডেন্স প্যারামিটার ইনপুট প্রদান।'
    ]
  },
  importantPoints: {
    en: [
      'GMR for inductance (GMR_L) uses r\' = 0.7788 * r for solid conductors to incorporate internal magnetic flux linkage.',
      'GMR for capacitance uses the physical radius r because electrostatic charges reside purely on the conductor outer surface.',
      'Transposition of overhead conductors balances phase inductances and eliminates induced zero-sequence circulating currents.',
      'Bundling reduces inductive reactance and raises line capacitance, lowering surge impedance Z_c and significantly boosting surge impedance loading (SIL).'
    ],
    hi: [
      'प्रेरकत्व हेतु GMR में आंतरिक फ्लक्स के कारण r\' = 0.7788 * r का उपयोग किया जाता है।',
      'धारिता हेतु GMR में वास्तविक त्रिज्या r का उपयोग किया जाता है क्योंकि आवेश केवल बाहरी सतह पर रहता है।',
      'ओवरहेड लाइनों के ट्रांसपोजिशन से तीनों फेजों के प्रेरकत्व संतुलित रहते हैं।',
      'बंडल कंडक्टर प्रेरकत्व को घटाते हैं और सर्ज इम्पीडेंस लोडिंग (SIL) को बढ़ाते हैं।'
    ],
    bn: [
      'ইন্ডাকট্যান্সের ক্ষেত্রে অভ্যন্তরীণ ফ্লাক্সের কারণে r\' = ০.৭৭৮৮ * r ব্যবহৃত হয়।',
      'ক্যাপাসিট্যান্সের ক্ষেত্রে প্রকৃত ব্যাসার্ধ r ব্যবহৃত হয় কারণ চার্জ কেবল তারের বহিঃপৃষ্ঠে থাকে।',
      'সঞ্চালন লাইন ট্রান্সপোজিশনের মাধ্যমে তিন ফেজের ইন্ডাকট্যান্স ভারসাম্যপূর্ণ রাখা হয়।',
      'বান্ডিলিং ইন্ডাকট্যান্স কমিয়ে এবং ক্যাপাসিট্যান্স বাড়িয়ে সার্জ ইম্পিডেন্স লোডিং (SIL) উল্লেখযোগ্যভাবে বৃদ্ধি করে।'
    ]
  },
  commonMistakes: {
    en: [
      'Using r\' = 0.7788r in capacitance equations (must use physical radius r).',
      'Confusing GMD with arithmetic mean distance (GMD is the cube root of the product of the three distances: (D12 * D23 * D31)^(1/3)).',
      'Forgetting that bundling spacers d must be included inside the root when computing composite bundle GMR.'
    ],
    hi: [
      'धारिता के समीकरण में 0.7788r का उपयोग करना (धारिता में वास्तविक r का उपयोग किया जाना चाहिए)।',
      'GMD को अंकगणितीय औसत समझ लेना (GMD तीनों दूरियों के गुणनफल का घनमूल होता है)।',
      'समग्र बंडल GMR निकालते समय बंडल अंतराल d को रूट के अंदर शामिल करना भूल जाना।'
    ],
    bn: [
      'ক্যাপাসিট্যান্স সমীকরণে ০.৭৭৮৮r ব্যবহার করা (ক্যাপাসিট্যান্সে সর্বদা প্রকৃত r ব্যবহৃত হয়)।',
      'GMD কে সাধারণ পাটিগাণিতিক গড় মনে করা (GMD হলো তিনটি দূরত্বের গুণফলের ঘনমূল)।',
      'বান্ডিল GMR গণনার সময় স্পেসিং d কে রুটের মধ্যে নিতে ভুলে যাওয়া।'
    ]
  },
  keyTakeaways: {
    en: [
      'Inductance and capacitance of three-phase lines are strictly determined by geometric conductor spacing (GMD) and effective radius (GMR).',
      'Transposition ensures balanced series voltage drops across all three phases.',
      'Bundled conductors represent the definitive technological solution for EHV/UHV transmission corridors to maximize power transfer and eliminate corona.'
    ],
    hi: [
      'थ्री-फेज लाइनों का प्रेरकत्व और धारिता ज्यामितीय दूरी (GMD) और प्रभावी त्रिज्या (GMR) पर निर्भर करती है।',
      'ट्रांसपोजिशन तीनों फेजों में संतुलित वोल्टेज ड्रॉप सुनिश्चित करता है।',
      'बंडल कंडक्टर EHV/UHV लाइनों में कोरोना समाप्त करने और पावर ट्रांसफर बढ़ाने का प्रमुख साधन हैं।'
    ],
    bn: [
      'থ্রি-ফেজ সঞ্চালন লাইনের ইন্ডাকট্যান্স ও ক্যাপাসিট্যান্স জ্যামিতিক দূরত্ব (GMD) এবং ব্যাসার্ধ (GMR) দ্বারা নির্ধারিত হয়।',
      'ট্রান্সপোজিশন তিন ফেজে সমান ভোল্টেজ ড্রপ নিশ্চিত করে।',
      'বান্ডিল কন্ডাক্টর EHV/UHV সঞ্চালন লাইনে করোনা রোধ ও বিদ্যুৎ সঞ্চালন ক্ষমতা বৃদ্ধির মূল প্রযুক্তি।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch16-l03-01',
      question: {
        en: 'Why is a factor of 0.7788 applied to the conductor radius r when calculating self-inductance of a solid cylindrical wire?',
        hi: 'ठोस बेलनाकार तार के स्व-प्रेरकत्व की गणना करते समय चालक की त्रिज्या r पर 0.7788 का गुणक क्यों लगाया जाता है?',
        bn: 'কঠিন বেলনাকার তারের স্ব-ইন্ডাকট্যান্স গণনায় পরিবাহীর ব্যাসার্ধ r এর সাথে কেন ০.৭৭৮৮ গুণক প্রয়োগ করা হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'To account for internal magnetic flux linkages within the conductor material', hi: 'चालक सामग्री के भीतर आंतरिक चुंबकीय फ्लक्स लिंकेज को समाहित करने के लिए', bn: 'পরিবাহীর অভ্যন্তরে অভ্যন্তরীণ চৌম্বক ফ্লাক্স লিংকেজ অন্তর্ভুক্ত করার জন্য' } },
        { id: 'opt-2', text: { en: 'To correct for atmospheric air temperature variations', hi: 'वायुमंडलीय वायु तापमान के उतार-चढ़ाव को सही करने के लिए', bn: 'বায়ুমণ্ডলীয় তাপমাত্রার পরিবর্তন সংশোধন করতে' } },
        { id: 'opt-3', text: { en: 'Because skin effect pushes all current into the center core', hi: 'क्योंकि त्वचा प्रभाव (skin effect) सारी धारा को केंद्र में धकेलता है', bn: 'কারণ স্কিন ইফেক্টের কারণে কারেন্ট কেন্দ্রে প্রবাহিত হয়' } },
        { id: 'opt-4', text: { en: 'To compensate for copper dielectric losses', hi: 'तांबे की ढांकता हुआ (dielectric) हानियों की भरपाई करने के लिए', bn: 'তামার ডাইইলেক্ট্রিক ক্ষতি পূরণ করতে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'The internal inductance L_int = mu_0 / (8*pi) is mathematically incorporated into the external log formula by replacing r with r\' = r * e^(-1/4) ≈ 0.7788 * r.',
        hi: 'आंतरिक प्रेरकत्व L_int = mu_0 / (8*pi) को बाहरी लॉग सूत्र में समाहित करने के लिए r को r\' = r * e^(-1/4) = 0.7788 * r से प्रतिस्थापित किया जाता है।',
        bn: 'অভ্যন্তরীণ ইন্ডাকট্যান্স L_int = mu_0 / (8*pi) কে লগ সমীকরণে অন্তর্ভুক্ত করতে r এর বদলে r\' = r * e^(-1/4) = ০.৭৭৮৮ * r বসানো হয়।'
      }
    },
    {
      id: 'mcq-ch16-l03-02',
      question: {
        en: 'What is the Geometric Mean Distance (GMD) of a 3-phase line with conductors spaced horizontally at distances D_ab = 4 m, D_bc = 4 m, and D_ca = 8 m?',
        hi: 'D_ab = 4 m, D_bc = 4 m और D_ca = 8 m की क्षैतिज दूरी वाले 3-फेज लाइन का ज्यामितीय माध्य दूरी (GMD) क्या है?',
        bn: 'D_ab = ৪ m, D_bc = ৪ m এবং D_ca = ৮ m অনুভূমিক দূরত্বের একটি ৩-ফেজ লাইনের জ্যামিতিক গড় দূরত্ব (GMD) কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '5.04 m', hi: '5.04 m', bn: '৫.০৪ m' } },
        { id: 'opt-2', text: { en: '5.33 m', hi: '5.33 m', bn: '৫.৩৩ m' } },
        { id: 'opt-3', text: { en: '4.00 m', hi: '4.00 m', bn: '৪.০০ m' } },
        { id: 'opt-4', text: { en: '8.00 m', hi: '8.00 m', bn: '৮.০০ m' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'GMD = (D_ab * D_bc * D_ca)^(1/3) = (4 * 4 * 8)^(1/3) = (128)^(1/3) ≈ 5.0397 m.',
        hi: 'GMD = (4 * 4 * 8)^(1/3) = (128)^(1/3) = 5.04 m।',
        bn: 'GMD = (৪ * ৪ * ৮)^(১/৩) = (১২৮)^(১/৩) ≈ ৫.০৪ m।'
      }
    },
    {
      id: 'mcq-ch16-l03-03',
      question: {
        en: 'Why does transposition of transmission line conductors eliminate electrostatic and electromagnetic imbalance?',
        hi: 'पारेषण लाइन के ट्रांसपोजिशन से इलेक्ट्रोस्टैटिक और इलेक्ट्रोमैग्नेटिक असंतुलन क्यों समाप्त हो जाता है?',
        bn: 'সঞ্চালন লাইনের ট্রান্সপোজিশনের ফলে ইলেকট্রোস্ট্যাটিক ও ইলেকট্রোম্যাগনেটিক ভারসাম্যহীনতা কেন দূর হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Each phase occupies every physical tower position for one-third of the total line length, equalizing net mutual linkages', hi: 'प्रत्येक फेज कुल लंबाई के एक तिहाई हिस्से के लिए प्रत्येक टावर स्थिति में रहता है, जिससे पारस्परिक लिंकेज बराबर हो जाते हैं', bn: 'প্রতিটি ফেজ মোট লাইনের এক-তৃতীয়াংশ দৈর্ঘ্যে প্রতিটি অবস্থানে থাকে, ফলে গড় লিংকেজ সমান হয়' } },
        { id: 'opt-2', text: { en: 'It forces line resistance to drop to zero', hi: 'यह लाइन प्रतिरोध को शून्य कर देता है', bn: 'এটি লাইনের রোধ শূন্য করে দেয়' } },
        { id: 'opt-3', text: { en: 'It removes the need for circuit breakers in substations', hi: 'यह सबस्टेशनों में सर्किट ब्रेकर की आवश्यकता को समाप्त करता है', bn: 'এটি সাবস্টেশনে সার্কিট ব্রেকারের প্রয়োজন দূর করে' } },
        { id: 'opt-4', text: { en: 'It changes the three-phase AC waveform into pure DC', hi: 'यह थ्री-फेज AC को शुद्ध DC में परिवर्तित करता है', bn: 'এটি থ্রি-ফেজ এসিকে ডিসিতে রূপান্তর করে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'By rotating conductor positions at transposing towers every 1/3 of the route, each phase experiences identical average mutual flux linkages, equalizing phase voltage drops.',
        hi: 'प्रत्येक 1/3 दूरी पर तारों की स्थिति बदलने से प्रत्येक फेज को समान औसत फ्लक्स लिंकेज मिलता है, जिससे तीनों फेजों के वोल्टेज ड्रॉप बराबर हो जाते हैं।',
        bn: 'লাইনের প্রতি ১/৩ অংশে অবস্থান পরিবর্তনের মাধ্যমে প্রতিটি ফেজ সমান গড় ফ্লাক্স লিংকেজ পায়, ফলে ভোল্টেজ ড্রপ সমান হয়।'
      }
    },
    {
      id: 'mcq-ch16-l03-04',
      question: {
        en: 'What is the primary effect of using bundled conductors on the series inductive reactance (X_L) and shunt capacitance (C) of an EHV line?',
        hi: 'EHV लाइन के सीरीज प्रेरणिक प्रतिघात (X_L) और शंट धारिता (C) पर बंडल कंडक्टर के उपयोग का प्राथमिक प्रभाव क्या है?',
        bn: 'EHV সঞ্চালন লাইনে বান্ডিল কন্ডাক্টর ব্যবহারের ফলে সিরিজ রিঅ্যাক্ট্যান্স (X_L) এবং শান্ট ক্যাপাসিট্যান্স (C) এর ওপর প্রধান প্রভাব কী?'
      },
      options: [
        { id: 'opt-1', text: { en: 'X_L decreases and C increases', hi: 'X_L घटता है और C बढ़ता है', bn: 'X_L হ্রাস পায় এবং C বৃদ্ধি পায়' } },
        { id: 'opt-2', text: { en: 'Both X_L and C decrease', hi: 'X_L और C दोनों घटते हैं', bn: 'X_L ও C উভয়ই হ্রাস পায়' } },
        { id: 'opt-3', text: { en: 'X_L increases and C decreases', hi: 'X_L बढ़ता है और C घटता है', bn: 'X_L বৃদ্ধি পায় এবং C হ্রাস পায়' } },
        { id: 'opt-4', text: { en: 'Both X_L and C remain unchanged', hi: 'X_L और C दोनों अपरिवर्तित रहते हैं', bn: 'X_L ও C উভয়ই অপরিবর্তিত থাকে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Bundling increases the effective GMR. Because L is proportional to ln(GMD/GMR), L and X_L decrease. Because C is inversely proportional to ln(GMD/r_eq), C increases.',
        hi: 'बंडलिंग से प्रभावी GMR बढ़ता है। इसलिए प्रेरकत्व L (और X_L) घटता है, जबकि धारिता C बढ़ती है।',
        bn: 'বান্ডিলিং কার্যকর GMR বাড়ায়। ফলে L ও X_L কমে যায় এবং ক্যাপাসিট্যান্স C বৃদ্ধি পায়।'
      }
    },
    {
      id: 'mcq-ch16-l03-05',
      question: {
        en: 'For a 2-conductor bundle with sub-conductor spacing d and sub-conductor GMR_s, what is the composite bundle GMR for inductance?',
        hi: 'सब-कंडक्टर अंतराल d और स्व-GMR_s वाले 2-कंडक्टर बंडल का समग्र बंडल GMR क्या होता है?',
        bn: 'সাব-কন্ডাক্টর ব্যবধান d এবং নিজস্ব GMR_s বিশিষ্ট ২-কন্ডাক্টর বান্ডিলের সামগ্রিক GMR কত?'
      },
      options: [
        { id: 'opt-1', text: { en: 'sqrt(GMR_s * d)', hi: 'sqrt(GMR_s * d)', bn: 'sqrt(GMR_s * d)' } },
        { id: 'opt-2', text: { en: '(GMR_s * d) / 2', hi: '(GMR_s * d) / 2', bn: '(GMR_s * d) / 2' } },
        { id: 'opt-3', text: { en: 'GMR_s + d', hi: 'GMR_s + d', bn: 'GMR_s + d' } },
        { id: 'opt-4', text: { en: '(GMR_s * d²)^(1/3)', hi: '(GMR_s * d²)^(1/3)', bn: '(GMR_s * d²)^(1/3)' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'For a twin bundle: GMR_bundle = [ (GMR_s * d) * (d * GMR_s) ]^(1/4) = sqrt(GMR_s * d).',
        hi: '2-कंडक्टर बंडल के लिए: GMR_bundle = sqrt(GMR_s * d)।',
        bn: '২-কন্ডাক্টর বান্ডিলের জন্য: GMR_bundle = sqrt(GMR_s * d)।'
      }
    },
    {
      id: 'mcq-ch16-l03-06',
      question: {
        en: 'When calculating line-to-neutral capacitance of an overhead conductor, why is the physical radius r used instead of r\' = 0.7788r?',
        hi: 'ओवरहेड चालक की लाइन-टू-न्यूट्रल धारिता की गणना करते समय r\' = 0.7788r के स्थान पर वास्तविक त्रिज्या r का उपयोग क्यों किया जाता है?',
        bn: 'ওভারহেড কন্ডাক্টরের লাইন-টু-নিউট্রাল ক্যাপাসিট্যান্স গণনায় r\' = ০.৭৭৮৮r এর পরিবর্তে প্রকৃত ব্যাসার্ধ r কেন ব্যবহার করা হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Electrostatic charge resides entirely on the outer surface of conductors, with zero electric field inside', hi: 'इलेक्ट्रोस्टैटिक आवेश पूरी तरह से चालक की बाहरी सतह पर रहता है, और अंदर विद्युत क्षेत्र शून्य होता है', bn: 'স্থির বৈদ্যুতিক চার্জ সম্পূর্ণভাবে পরিবাহীর বহিঃপৃষ্ঠে থাকে এবং অভ্যন্তরে তড়িৎ ক্ষেত্র শূন্য হয়' } },
        { id: 'opt-2', text: { en: 'Capacitance is independent of conductor dimensions', hi: 'धारिता चालक के आयामों से स्वतंत्र होती है', bn: 'ক্যাপাসিট্যান্স কন্ডাক্টরের আকারের ওপর নির্ভর করে না' } },
        { id: 'opt-3', text: { en: 'Because air dielectric breakdown occurs inside the conductor', hi: 'क्योंकि चालक के भीतर वायु का ब्रेकडाउन होता है', bn: 'কারণ তারের ভেতরে বাতাসের ব্রেকডাউন ঘটে' } },
        { id: 'opt-4', text: { en: 'To account for earth resistivity variations', hi: 'पृथ्वी की प्रतिरोधकता के उतार-चढ़ाव को समाहित करने के लिए', bn: 'মাটির রোধের তারতম্য বিবেচনা করতে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'In electrostatics, net charge on a conductor resides on the outermost surface; there is no interior electric flux linkage analogous to internal magnetic flux linkage.',
        hi: 'इलेक्ट्रोस्टैटिक्स में आवेश पूरी तरह बाहरी सतह पर रहता है, इसलिए कोई आंतरिक इलेक्ट्रिक फ्लक्स नहीं होता। अतः वास्तविक त्रिज्या r प्रयुक्त होती है।',
        bn: 'স্থির তড়িতে চার্জ পুরোপুরি পরিবাহীর বাইরের পৃষ্ঠে অবস্থান করায় কোনো অভ্যন্তরীণ ফ্লাক্স থাকে না, তাই প্রকৃত r ব্যবহৃত হয়।'
      }
    },
    {
      id: 'mcq-ch16-l03-07',
      question: {
        en: 'How does the presence of the earth plane affect the line-to-neutral capacitance of an overhead transmission line?',
        hi: 'पृथ्वी तल की उपस्थिति ओवरहेड पारेषण लाइन की लाइन-टू-न्यूट्रल धारिता को कैसे प्रभावित करती है?',
        bn: 'ভূ-পৃষ্ঠের উপস্থিতি ওভারহেড সঞ্চালন লাইনের লাইন-টু-নিউট্রাল ক্যাপাসিট্যান্সে কী প্রভাব ফেলে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'It slightly increases the capacitance due to image charges', hi: 'प्रतिबिंब आवेशों के कारण यह धारिता को थोड़ा बढ़ा देता है', bn: 'প্রতিবিম্ব চার্জের কারণে এটি ক্যাপাসিট্যান্স সামান্য বৃদ্ধি করে' } },
        { id: 'opt-2', text: { en: 'It reduces capacitance to zero', hi: 'यह धारिता को घटाकर शून्य कर देता है', bn: 'এটি ক্যাপাসিট্যান্স কমিয়ে শূন্য করে' } },
        { id: 'opt-3', text: { en: 'It reverses the sign of capacitance, making it inductive', hi: 'यह धारिता के चिह्न को उल्टा कर प्रेरणिक बना देता है', bn: 'এটি ক্যাপাসিট্যান্সকে ইন্ডাক্ট্যান্সে রূপান্তর করে' } },
        { id: 'opt-4', text: { en: 'It has no physical effect whatsoever', hi: 'इसका कोई भौतिक प्रभाव नहीं होता है', bn: 'এর কোনো প্রভাব নেই' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'By the method of images, mirror charges of opposite polarity beneath the ground plane increase the electric field intensity, slightly increasing capacitance (typically by 1% to 2% at typical tower heights).',
        hi: 'प्रतिबिंब विधि के अनुसार पृथ्वी के नीचे विपरीत ध्रुवता के आवेश विद्युत क्षेत्र की तीव्रता बढ़ाते हैं, जिससे धारिता 1-2% थोड़ी बढ़ जाती है।',
        bn: 'ইমেজ মেথড অনুসারে মাটির নিচে বিপরীত পোলারিটির চার্জ তড়িৎ ক্ষেত্রের তীব্রতা বাড়ায়, ফলে ক্যাপাসিট্যান্স সামান্য (১-২%) বৃদ্ধি পায়।'
      }
    },
    {
      id: 'mcq-ch16-l03-08',
      question: {
        en: 'What is the effect on the Surge Impedance Loading (SIL) of a transmission line when bundled conductors are introduced?',
        hi: 'बंडल कंडक्टरों को शामिल करने पर पारेषण लाइन के सर्ज इम्पीडेंस लोडिंग (SIL) पर क्या प्रभाव पड़ता है?',
        bn: 'বান্ডিল কন্ডাক্টর ব্যবহারের ফলে সঞ্চালন লাইনের সার্জ ইম্পিডেন্স লোডিং (SIL) এর কী পরিবর্তন ঘটে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'SIL increases significantly because surge impedance Z_c decreases', hi: 'SIL काफी बढ़ जाती है क्योंकि सर्ज प्रतिबाधा Z_c घट जाती है', bn: 'SIL উল্লেখযোগ্যভাবে বৃদ্ধি পায় কারণ সার্জ ইম্পিডেন্স Z_c হ্রাস পায়' } },
        { id: 'opt-2', text: { en: 'SIL drops to zero', hi: 'SIL घटकर शून्य हो जाती है', bn: 'SIL কমে শূন্য হয়' } },
        { id: 'opt-3', text: { en: 'SIL remains identical because voltage rating is constant', hi: 'SIL समान रहती है क्योंकि वोल्टेज रेटिंग स्थिर है', bn: 'SIL অপরিবর্তিত থাকে' } },
        { id: 'opt-4', text: { en: 'SIL decreases by 50%', hi: 'SIL में 50% की कमी आती है', bn: 'SIL ৫০% হ্রাস পায়' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'SIL = V² / Z_c, where Z_c = sqrt(L/C). Since bundling reduces L and increases C, Z_c drops (e.g. from 400 Ω to 260 Ω), causing SIL to increase substantially.',
        hi: 'SIL = V² / Z_c होता है जहाँ Z_c = sqrt(L/C)। बंडलिंग से L घटता है और C बढ़ता है, जिससे Z_c घटता है और SIL बढ़ जाती है।',
        bn: 'SIL = V² / Z_c, যেখানে Z_c = sqrt(L/C)। বান্ডিলিংয়ের ফলে L কমে ও C বাড়ে, যার ফলে Z_c কমে গিয়ে SIL নাটকীয়ভাবে বৃদ্ধি পায়।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch16-l03-01',
      question: {
        en: 'A 3-phase equilateral triangular line has 6 m spacing between phases. Each phase conductor has an outside diameter of 3.0 cm (radius 1.5 cm). Find the inductance per phase per km if the conductor is solid.',
        hi: 'एक 3-फेज समबाहु त्रिभुजाकार लाइन में फेजों के बीच 6 m की दूरी है। प्रत्येक चालक का बाहरी व्यास 3.0 cm (त्रिज्या 1.5 cm) है। ठोस चालक के लिए प्रति फेज प्रति किमी प्रेरकत्व ज्ञात कीजिए।',
        bn: 'একটি সমবাহু ত্রিভুজাকার ৩-ফেজ লাইনে ফেজ ব্যবধান ৬ m। প্রতিটি পরিবাহীর ব্যাস ৩.০ cm (ব্যাসার্ধ ১.৫ cm)। কঠিন তারের ক্ষেত্রে প্রতি ফেজ প্রতি কিমি ইন্ডাকট্যান্স নির্ণয় করুন।'
      },
      hint: {
        en: 'GMD = 6 m. GMR_L = 0.7788 * 0.015 m = 0.01168 m. L = 2 * 10^-7 * ln(6 / 0.01168) = 2 * 10^-7 * ln(513.7) = 2 * 10^-7 * 6.2416 = 1.248 mH/km.',
        hi: 'GMD = 6 m, GMR_L = 0.7788 * 0.015 = 0.01168 m। L = 2e-7 * ln(6 / 0.01168) = 1.248 mH/km।',
        bn: 'GMD = ৬ m, GMR_L = ০.৭৭৮৮ * ০.০১৫ = ০.০১১৬৮ m। L = 2e-7 * ln(৬ / ০.০১১৬৮) = ১.২৪৮ mH/km।'
      }
    }
  ]
};
