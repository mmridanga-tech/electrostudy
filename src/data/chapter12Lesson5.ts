import { Lesson } from '../types';

export const LESSON_IDEAL_TRANSFORMERS_PUZ: Lesson = {
  id: 'lsn-ch12-passive-filters-design',
  topicId: 'tp-rc-circuit',
  chapterId: 'ch-ac-circuits',
  order: 5,
  title: {
    en: 'Ideal Transformers, Complex Turns Ratio & Per-Unit (p.u.) Impedance',
    hi: 'आदर्श ट्रांसफार्मर, सम्मिश्र फेरा अनुपात एवं प्रति-इकाई (p.u.) प्रतिबाधा',
    bn: 'আদর্শ ট্রান্সফরমার, জটিল ঘূর্ণন অনুপাত ও পার-ইউনিট (p.u.) প্রতিবাধা'
  },
  description: {
    en: 'Master ideal transformer phasor equations, dot-polarity rules, and impedance scaling across windings (Z1 = a² Z2). Explore complex turns ratios for phase-shifting transformers and formulate per-unit (p.u.) impedance calculations for power system network analysis.',
    hi: 'आदर्श ट्रांसफार्मर फेजर समीकरणों, डॉट-ध्रुवता नियमों एवं वाइंडिंग के आर-पार प्रतिबाधा स्केलिंग (Z1 = a² Z2) में महारत हासिल करें। फेज-शिफ्टिंग ट्रांसफार्मरों के लिए सम्मिश्र फेरा अनुपात और पावर सिस्टम विश्लेषण के लिए प्रति-इकाई (p.u.) प्रतिबाधा गणना का अध्ययन करें।',
    bn: 'আদর্শ ট্রান্সফরমারের ফেজর সমীকরণ, ডট-পোলারিটি নীতি এবং কুণ্ডলী জুড়ে প্রতিবাধা রূপান্তর (Z1 = a² Z2) আয়ত্ত করুন। ফেজ-শিফটিং ট্রান্সফরমারের জটিল ঘূর্ণন অনুপাত ও পাওয়ার সিস্টেম বিশ্লেষণের জন্য পার-ইউনিট (p.u.) প্রতিবাধা গণনা শিখুন।'
  },
  estimatedMinutes: 40,
  easyExplanation: {
    en: 'An ideal transformer is a lossless, perfectly coupled magnetic device (k = 1, core permeability μ → ∞) that changes AC voltages and currents according to its turns ratio a = N1/N2. The voltage scales directly (V1 = a V2), current scales inversely (I1 = I2 / a), and complex power is conserved (V1 I1* = V2 I2*). When a load impedance Z_L is connected to the secondary, the primary "sees" this load magnified or shrunk by the square of the turns ratio: Z_in = a² Z_L! In large multi-voltage electrical grids, engineers eliminate these confusing turns ratios entirely by using Per-Unit (p.u.) normalization, where transformers have identical p.u. impedance on both primary and secondary sides.',
    hi: 'एक आदर्श ट्रांसफार्मर एक हानिरहित, पूर्णतः युग्मित उपकरण है (k = 1, कोर चुंबकशीलता μ → ∞) जो अपने फेरों के अनुपात a = N1/N2 के अनुसार वोल्टेज और धारा को बदलता है। वोल्टेज सीधे अनुपात में बढ़ता है (V1 = a V2), धारा उल्टे अनुपात में बदलती है (I1 = I2 / a), और शक्ति संरक्षित रहती है। जब लोड Z_L द्वितीयक से जुड़ा होता है, तो प्राथमिक को यह फेरा अनुपात के वर्ग से गुणा होकर दिखाई देता है: Z_in = a² Z_L! बड़े पावर ग्रिडों में इंजीनियर प्रति-इकाई (p.u.) प्रणाली का उपयोग करते हैं जिससे ट्रांसफार्मर की दोनों तरफ प्रतिबाधा समान हो जाती है।',
    bn: 'আদর্শ ট্রান্সফরমার হলো অপচয়হীন ও নিখুঁতভাবে সংযুক্ত একটি চৌম্বকীয় ব্যবস্থা (k = ১, μ → ∞) যা ঘূর্ণন অনুপাত a = N1/N2 অনুসারে ভোল্টেজ ও কারেন্ট রূপান্তর করে। ভোল্টেজ সরল অনুপাতে (V1 = a V2) এবং কারেন্ট ব্যস্তানুপাতে (I1 = I2 / a) পরিবর্তিত হয়, কিন্তু ক্ষমতা অপরিবর্তিত থাকে। দ্বিতীয়কে Z_L লোড যুক্ত থাকলে প্রাথমিকে তা Z_in = a² Z_L হিসেবে অনুভূত হয়! পাওয়ার গ্রিডে প্রকৌশলীরা পার-ইউনিট (p.u.) পদ্ধতি ব্যবহার করে এই জটিল রূপান্তরকে সহজ করে তোলেন।'
  },
  detailedExplanation: {
    en: '1. Defining Properties of an Ideal Transformer:\nAn ideal transformer has four physical idealizations:\n- Perfect coupling: k = 1 (zero leakage flux).\n- Infinite permeability of core: μ_r → ∞ (zero magnetizing current required to produce flux: I_mag = 0).\n- Zero winding resistances: R_1 = 0, R_2 = 0 (zero I²R copper losses).\n- Zero core losses: No hysteresis or eddy-current losses in the core.\n\n2. Phasor Terminal Relations and Dot Polarities:\nLet turns ratio be defined as a = N_1 / N_2.\n- Voltage relation: V_1 / V_2 = a (if both dotted terminals have positive voltage reference).\n  If one dot has positive and the other has negative reference, V_1 / V_2 = -a.\n- Current relation: I_1 / I_2 = 1 / a  ⇒  N_1 I_1 = N_2 I_2 (if current I_1 enters the dot and I_2 leaves the dot).\n  If both currents enter their respective dots, I_1 / I_2 = -1 / a  ⇒  N_1 I_1 + N_2 I_2 = 0.\n- Complex Power Conservation: S_in = V_1 I_1* = (a V_2) (I_2 / a)* = V_2 I_2* = S_out.\n  An ideal transformer consumes zero active power (P = 0) and zero reactive power (Q = 0).\n\n3. Impedance Reflection Across Windings:\nIf load Z_L = V_2 / I_2 is connected to the secondary winding:\nZ_in = V_1 / I_1 = (a V_2) / (I_2 / a) = a^2 (V_2 / I_2) = a^2 Z_L.\n- Secondary impedance reflected to primary: Z\'_1 = a^2 Z_2.\n- Primary impedance reflected to secondary: Z\'_2 = Z_1 / a^2.\n\n4. Complex Turns Ratio (Phase-Shifting Transformers):\nIn high-voltage transmission interties, phase-angle regulating transformers (quadrature boosters) introduce a complex turns ratio: a = |a| e^{jα} = n ∠α.\nThen: V_1 / V_2 = n ∠α  and  I_1 / I_2 = (1/n) ∠α.\nThe phase shift α forces active power P to flow between unsynchronized transmission corridors.\n\n5. Per-Unit (p.u.) Normalization:\nIn power systems with multiple voltage transformations, calculations are normalized using base quantities:\nBase impedance: Z_base = (V_base)^2 / S_base.\nPer-unit impedance: Z_pu = Z_actual (in Ω) / Z_base.\nCrucial Theorem: When base voltages are selected across an ideal transformer such that V_base1 / V_base2 = N_1 / N_2, the per-unit impedance of any component is IDENTICAL whether referred to the primary or secondary side: Z_pu1 = Z_pu2.',
    hi: '1. आदर्श ट्रांसफार्मर के गुण: शून्य ताम्र हानि (R=0), शून्य कोर हानि, शून्य रिसाव फ्लक्स (k=1), एवं अनंत चुंबकशीलता (μ→∞)।\n2. फेजर संबंध:\n- वोल्टेज: V_1 / V_2 = a = N_1 / N_2\n- धारा: I_1 / I_2 = 1 / a (यदि I_1 डॉट में प्रवेश करे और I_2 बाहर निकले)\n- सम्मिश्र शक्ति संरक्षण: S_in = S_out।\n3. प्रतिबाधा परावर्तन: प्राथमिक द्वारा देखी गई प्रतिबाधा Z_in = a^2 Z_L।\n4. सम्मिश्र फेरा अनुपात (फेज-शिफ्टिंग ट्रांसफार्मर): a = |a| e^{jα}। यह ट्रांसमिशन लाइनों में शक्ति प्रवाह को नियंत्रित करता है।\n5. प्रति-इकाई (p.u.) प्रणाली: Z_base = V_base^2 / S_base और Z_pu = Z_Ω / Z_base। आधार वोल्टेज को फेरा अनुपात के अनुसार चुनने पर दोनों तरफ p.u. प्रतिबाधा एक समान होती है।',
    bn: '১. আদর্শ ট্রান্সফরমারের বৈশিষ্ট্য: শূন্য অপচয় (R=0), নিখুঁত যুগ্মন (k=1) ও অসীম ভেদ্যতা (μ→∞)।\n২. ফেজর সম্পর্ক: V_1 / V_2 = a = N_1 / N_2 এবং I_1 / I_2 = 1 / a। ক্ষমতা সর্বদা সংরক্ষিত (S_in = S_out)।\n৩. প্রতিবাধা রূপান্তর: Z_in = a^2 Z_L।\n৪. জটিল ঘূর্ণন অনুপাত: a = |a| e^{jα}, যা ফেজ শিফটের মাধ্যমে পাওয়ার ফ্লো নিয়ন্ত্রণ করে।\n৫. পার-ইউনিট (p.u.) পদ্ধতি: Z_base = V_base^2 / S_base এবং Z_pu = Z_Ω / Z_base। উপযুক্ত বেস ভোল্টেজ নির্বাচনে উভয় দিকে p.u. প্রতিবাধা সমান হয়।'
  },
  formulas: [
    {
      id: 'f-ideal-turns-ratio',
      symbol: 'a',
      expression: 'a = \\frac{N_1}{N_2} = \\frac{\\mathbf{V}_1}{\\mathbf{V}_2} = \\frac{\\mathbf{I}_2}{\\mathbf{I}_1}',
      title: {
        en: 'Ideal Transformer Turns Ratio Relations',
        hi: 'आदर्श ट्रांसफार्मर फेरा अनुपात संबंध',
        bn: 'আদর্শ ট্রান্সফরমার ঘূর্ণন অনুপাত সম্পর্ক'
      },
      description: {
        en: 'Relates terminal voltages and currents between primary and secondary windings.',
        hi: 'प्राथमिक एवं द्वितीयक वाइंडिंग के बीच वोल्टेज एवं धारा को संबंधित करता है।',
        bn: 'প্রাথমিক ও গৌণ কুণ্ডলীর ভোল্টেজ ও কারেন্ট সম্পর্ক নির্দেশ করে।'
      },
      variables: [
        { symbol: 'a', name: { en: 'Turns ratio N1/N2 (dimensionless)', hi: 'फेरा अनुपात (विमाहीन)', bn: 'ঘূর্ণন অনুপাত (মাত্রাহীন)' } },
        { symbol: 'V_1, V_2', name: { en: 'Primary and secondary terminal voltages (V)', hi: 'प्राथमिक एवं द्वितीयक वोल्टेज (V)', bn: 'প্রাথমিক ও গৌণ ভোল্টেজ (V)' } },
        { symbol: 'I_1, I_2', name: { en: 'Primary and secondary currents (A)', hi: 'प्राथमिक एवं द्वितीयक धारा (A)', bn: 'প্রাথমিক ও গৌণ কারেন্ট (A)' } }
      ]
    },
    {
      id: 'f-reflected-ideal-z',
      symbol: 'Z_{in}',
      expression: 'Z_{in} = \\frac{\\mathbf{V}_1}{\\mathbf{I}_1} = a^2 Z_L = \\left(\\frac{N_1}{N_2}\\right)^2 Z_L',
      title: {
        en: 'Impedance Reflection Across Ideal Transformer',
        hi: 'आदर्श ट्रांसफार्मर के पार प्रतिबाधा परावर्तन',
        bn: 'আদর্শ ট্রান্সফরমারে প্রতিবাধা রূপান্তর'
      },
      description: {
        en: 'The secondary load impedance referred to the primary is scaled by a².',
        hi: 'प्राथमिक की ओर संदर्भित द्वितीयक लोड प्रतिबाधा a² द्वारा बढ़ाई जाती है।',
        bn: 'প্রাথমিকের সাপেক্ষে গৌণ লোড প্রতিবাধা a² গুণ বৃদ্ধি পায়।'
      },
      variables: [
        { symbol: 'Z_{in}', name: { en: 'Input impedance looking into primary (Ω)', hi: 'प्राथमिक इनपुट प्रतिबाधा (Ω)', bn: 'প্রাথমিক ইনপুট প্রতিবাধা (Ω)' } },
        { symbol: 'Z_L', name: { en: 'Secondary load impedance (Ω)', hi: 'द्वितीयक लोड प्रतिबाधा (Ω)', bn: 'গৌণ লোড প্রতিবাধা (Ω)' } }
      ]
    },
    {
      id: 'f-per-unit-impedance',
      symbol: 'Z_{pu}',
      expression: 'Z_{base} = \\frac{V_{base}^2}{S_{base}}, \\quad Z_{pu} = \\frac{Z_{\\Omega}}{Z_{base}} = Z_{\\Omega} \\frac{S_{base}}{V_{base}^2}',
      title: {
        en: 'Per-Unit (p.u.) Impedance Normalization',
        hi: 'प्रति-इकाई (p.u.) प्रतिबाधा प्रसामान्यीकरण',
        bn: 'পার-ইউনিট (p.u.) প্রতিবাধা রূপান্তর'
      },
      description: {
        en: 'Expresses ohmic impedance as a dimensionless fraction of system base impedance.',
        hi: 'ओम प्रतिबाधा को सिस्टम आधार प्रतिबाधा के विमाहीन अंश के रूप में व्यक्त करता है।',
        bn: 'ওহমিক প্রতিবাধাকে বেস প্রতিবাধার মাত্রাহীন ভগ্নাংশ হিসেবে প্রকাশ করে।'
      },
      variables: [
        { symbol: 'Z_{pu}', name: { en: 'Per-unit impedance (dimensionless p.u.)', hi: 'प्रति-इकाई प्रतिबाधा (p.u.)', bn: 'পার-ইউনিট প্রতিবাধা (p.u.)' } },
        { symbol: 'Z_{base}', name: { en: 'Base impedance (Ω)', hi: 'आधार प्रतिबाधा (Ω)', bn: 'বেস প্রতিবাধা (Ω)' } },
        { symbol: 'S_{base}', name: { en: 'Base apparent power (VA)', hi: 'आधार आभासी शक्ति (VA)', bn: 'বেস আপাত ক্ষমতা (VA)' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-ch12-l05-dot-polarity',
      title: {
        en: 'Polarity Analysis with the Dot Convention in Transformers',
        hi: 'ट्रांसफार्मर में डॉट परिपाटी के साथ ध्रुवता विश्लेषण',
        bn: 'ট্রান্সফরমারে ডট কনভেনশনের সাহায্যে পোলারিটি বিশ্লেষণ'
      },
      content: {
        en: 'The relative placement of dots on an ideal transformer dictates the algebraic signs of voltages and currents:\n\n1. In-Phase Connections (Standard):\nDots are at the top of both primary and secondary windings.\n- If V_1 reference is (+) at dot, V_2 reference is (+) at dot: V_1 / V_2 = +a.\n- If current I_1 enters the primary dot and I_2 leaves the secondary dot: I_1 / I_2 = +1/a.\n\n2. 180° Inverted Connections:\nPrimary dot is at the top terminal; secondary dot is at the bottom terminal.\n- A positive voltage at the primary dot produces a NEGATIVE voltage at the secondary top terminal: V_1 / V_2 = -a (or 180° phase shift).\n- In terms of phasors: V_2 = (1/a) V_1 ∠180° = - (1/a) V_1.\n\n3. Referring Impedances and Sources Across Boundaries:\nTo solve circuits with ideal transformers:\n- Step 1: Remove the transformer by multiplying all secondary impedances by a².\n- Step 2: Multiply all secondary independent voltage sources by a.\n- Step 3: Divide all secondary independent current sources by a.\n- Step 4: Solve the unified single-loop network with standard circuit laws.',
        hi: 'ट्रांसफार्मर पर डॉट्स का स्थान वोल्टेज और धारा के बीजगणितीय चिह्नों को निर्धारित करता है:\n1. इन-फेज (In-Phase): दोनों डॉट्स शीर्ष पर हों तो V_1 / V_2 = +a तथा I_1 / I_2 = +1/a।\n2. 180° उल्टा (Inverted): एक डॉट ऊपर और दूसरा नीचे हो तो V_1 / V_2 = -a (180° का कलांतर)।\n3. परिपथ हल करने की विधि: ट्रांसफार्मर को हटाकर द्वितीयक प्रतिबाधाओं को a² से गुणा करें, वोल्टेज स्रोतों को a से गुणा करें और धारा स्रोतों को a से विभाजित करें।',
        bn: 'ট্রান্সফরমারে ডট চিহ্নের অবস্থান ভোল্টেজ ও কারেন্টের দিক নির্ধারণ করে:\n১. ইন-ফেজ: উভয় ডট শীর্ষে থাকলে V_1 / V_2 = +a এবং I_1 / I_2 = +1/a।\n২. ১৮০° বিপরীত: একটি ডট শীর্ষে ও অন্যটি নিচে থাকলে ১৮০° ফেজ পার্থক্য হয় (V_1 / V_2 = -a)।\n৩. বর্তনী সমাধানের নিয়ম: গৌণ প্রতিবাধাকে a² দিয়ে গুণ এবং ভোল্টেজ উৎসকে a দিয়ে গুণ করে সরাসরি একটি লুপে রূপান্তর করুন।'
      }
    },
    {
      id: 'sec-ch12-l05-pu-system',
      title: {
        en: 'The Per-Unit (p.u.) System in AC Power Engineering',
        hi: 'एसी पावर इंजीनियरिंग में प्रति-इकाई (p.u.) प्रणाली',
        bn: 'এসি পাওয়ার ইঞ্জিনিয়ারিংয়ে পার-ইউনিট (p.u.) পদ্ধতি'
      },
      content: {
        en: 'In power systems containing generators (13.8 kV), transmission lines (400 kV), subtransmission (69 kV), and distribution (4.16 kV), tracking actual voltages and turns ratios across dozens of transformers leads to frequent errors.\n\nThe Per-Unit (p.u.) methodology resolves this by normalizing all quantities:\n- Choose a single system-wide base MVA (e.g., S_base = 100 MVA).\n- Select base voltages in each region such that their ratios match the transformer turns ratios:\n  V_base1 / V_base2 = N_1 / N_2.\n\nUnder this convention:\n1. The ideal transformer turns ratio becomes 1.0 : 1.0 in per-unit!\n2. The transformer equivalent leakage impedance Z_pu has the EXACT SAME numerical value whether calculated using primary base or secondary base.\n3. Voltage drops, fault currents, and power flows can be calculated across the entire grid without multiplying by turns ratios.',
        hi: 'पावर सिस्टम में कई वोल्टेज स्तर (13.8 kV, 400 kV, 11 kV) होते हैं। प्रति-इकाई (p.u.) प्रणाली पूरे सिस्टम के लिए एक बेस शक्ति (उदा. 100 MVA) चुनकर और फेरा अनुपात के अनुसार बेस वोल्टेज तय करके गणना को सरल बनाती है। p.u. में आदर्श ट्रांसफार्मर का फेरा अनुपात 1:1 हो जाता है और दोनों तरफ प्रतिबाधा का मान बिल्कुल समान रहता है।',
        bn: 'পাওয়ার সিস্টেমে বিভিন্ন ভোল্টেজ স্তর (যেমন ১৩.৮ kV, ৪০০ kV, ১১ kV) থাকে। পার-ইউনিট (p.u.) পদ্ধতিতে একটি সাধারণ বেস ক্ষমতা (যেমন ১০০ MVA) এবং ঘূর্ণন অনুপাত অনুযায়ী প্রতিটি অঞ্চলের বেস ভোল্টেজ নির্বাচন করে সব মান স্বাভাবিক করা হয়। ফলে p.u.-তে ট্রান্সফরমারের ঘূর্ণন অনুপাত ১:১ হয় এবং জটিল রূপান্তর পরিহার করা যায়।'
      }
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch12-l05-01',
      problem: {
        en: 'An AC source V_s = 240∠0° V (rms) with internal impedance Z_s = 2 + j4 Ω supplies power through an ideal transformer with turns ratio N_1 : N_2 = 4 : 1 (dots at upper terminals). The secondary is connected to a series load Z_L = 3 + j1 Ω. Calculate: (a) the turns ratio a, (b) the reflected load impedance Z\'_L referred to the primary, (c) the primary current phasor I_1, (d) the secondary current phasor I_2, and (e) the secondary load voltage V_2.',
        hi: 'आंतरिक प्रतिबाधा Z_s = 2 + j4 Ω वाला स्रोत V_s = 240∠0° V एक आदर्श ट्रांसफार्मर (N_1 : N_2 = 4 : 1) को शक्ति देता है। द्वितीयक पर लोड Z_L = 3 + j1 Ω जुड़ा है। ज्ञात कीजिए: (a) फेरा अनुपात a, (b) परावर्तित लोड प्रतिबाधा Z\'_L, (c) प्राथमिक धारा I_1, (d) द्वितीयक धारा I_2, एवं (e) द्वितीयक लोड वोल्टेज V_2।',
        bn: 'অভ্যন্তরীণ প্রতিবাধা Z_s = ২ + j৪ Ω বিশিষ্ট একটি উৎস V_s = ২৪০∠০° V একটি আদর্শ ট্রান্সফরমার (N_1 : N_2 = ৪ : ১) কে চালিত করে। গৌণে লোড Z_L = ৩ + j১ Ω যুক্ত। নির্ণয় করুন: (ক) ঘূর্ণন অনুপাত a, (খ) প্রাথমিকে প্রতিফলিত লোড প্রতিবাধা Z\'_L, (গ) প্রাথমিক কারেন্ট I_1, (ঘ) গৌণ কারেন্ট I_2 এবং (ঙ) গৌণ লোড ভোল্টেজ V_2।'
      },
      formula: {
        en: 'a = N_1 / N_2 = 4.\nZ\'_L = a^2 Z_L = 16(3 + j1) = 48 + j16 Ω.\nZ_total = Z_s + Z\'_L = (2 + j4) + (48 + j16) = 50 + j20 Ω.\nI_1 = V_s / Z_total.\nI_2 = a I_1.\nV_2 = V_1 / a = I_2 Z_L.',
        hi: 'a = 4। Z\'_L = a^2 Z_L = 16(3 + j1) = 48 + j16 Ω। Z_total = 50 + j20 Ω। I_1 = V_s / Z_total। I_2 = a I_1।',
        bn: 'a = ৪। Z\'_L = a^2 Z_L = ১৬(৩ + j১) = ৪৮ + j১৬ Ω। Z_total = ৫০ + j২০ Ω। I_1 = V_s / Z_total। I_2 = a I_1।'
      },
      substitution: {
        en: '(a) a = 4.\n(b) Z\'_L = 4^2 · (3 + j1) = 16(3 + j1) = 48 + j16 Ω.\n(c) Z_total = (2 + j4) + (48 + j16) = 50 + j20 Ω = 53.85∠21.80° Ω.\nI_1 = 240∠0° / 53.85∠21.80° = 4.457∠-21.80° A.\n(d) I_2 = a I_1 = 4 · 4.457∠-21.80° = 17.83∠-21.80° A.\n(e) Load impedance in polar form: Z_L = 3 + j1 = 3.162∠18.43° Ω.\nV_2 = I_2 · Z_L = (17.83∠-21.80°) · (3.162∠18.43°) = 56.38∠-3.37° V.\nCheck: Primary transformer voltage V_1 = V_s - I_1 Z_s = I_1 Z\'_L = (4.457∠-21.80°) · (50.59∠18.43°) = 225.5∠-3.37° V.\nV_2 = V_1 / 4 = 225.5 / 4 = 56.38∠-3.37° V (verified!).',
        hi: '(a) a = 4।\n(b) Z\'_L = 48 + j16 Ω।\n(c) Z_total = 50 + j20 Ω = 53.85∠21.80° Ω।\nI_1 = 240 / 53.85∠21.80° = 4.46∠-21.80° A।\n(d) I_2 = 4 × 4.46 = 17.83∠-21.80° A।\n(e) V_2 = 17.83∠-21.80° × 3.162∠18.43° = 56.38∠-3.37° V।',
        bn: '(ক) a = ৪।\n(খ) Z\'_L = ৪৮ + j১৬ Ω।\n(গ) Z_total = ৫০ + j২০ Ω = ৫৩.৮৫∠২১.৮০° Ω।\nI_1 = ২৪০ / ৫৩.৮৫∠২১.৮০° = ৪.৪৬∠-২১.৮০° A।\n(ঘ) I_2 = ৪ × ৪.৪৬ = ১৭.৮৩∠-২১.৮০° A।\n(ঙ) V_2 = ১৭.৮৩∠-২১.৮০° × ৩.১৬২∠১৮.৪৩° = ৫৬.৩৮∠-৩.৩৭° V।'
      },
      calculation: {
        en: 'Active power delivered by source: P = |I_1|^2 (R_s + R\'_L) = 4.457^2 · 50 = 993.2 W. Power dissipated in secondary load: P_L = |I_2|^2 R_L = 17.83^2 · 3 = 953.7 W. Power lost in source resistance: 4.457^2 · 2 = 39.7 W. 953.7 + 39.7 = 993.4 W (energy perfectly conserved).',
        hi: 'शक्ति संतुलन: स्रोत द्वारा दी गई सक्रिय शक्ति = लोड द्वारा उपभोग की गई शक्ति + आंतरिक प्रतिरोध में हानि। ऊर्जा पूर्णतः संरक्षित है।',
        bn: 'ক্ষমতা ভারসাম্য: মোট সরবরাহকৃত ক্ষমতা = লোডে ব্যয়িত ক্ষমতা + অভ্যন্তরীণ অপচয়। শক্তি সম্পূর্ণরূপে সংরক্ষিত।'
      },
      finalAnswer: {
        en: 'a = 4; Z\'_L = 48 + j16 Ω; I_1 = 4.46∠-21.80° A; I_2 = 17.83∠-21.80° A; V_2 = 56.38∠-3.37° V',
        hi: 'a = 4; Z\'_L = 48 + j16 Ω; I_1 = 4.46∠-21.80° A; I_2 = 17.83∠-21.80° A; V_2 = 56.38∠-3.37° V',
        bn: 'a = ৪; Z\'_L = ৪৮ + j১৬ Ω; I_1 = ৪.৪৬∠-২১.৮০° A; I_2 = ১৭.৮৩∠-২১.৮০° A; V_2 = ৫৬.৩৮∠-৩.৩৭° V'
      }
    },
    {
      id: 'ex-ch12-l05-02',
      problem: {
        en: 'A 50 MVA, 13.8 kV / 138 kV single-phase power transformer has an equivalent leakage reactance of X = 3.808 Ω measured from the low-voltage (13.8 kV) primary side. Calculate: (a) the low-voltage base impedance Z_base1, (b) the per-unit reactance X_pu on the transformer rated base, (c) the high-voltage base impedance Z_base2, (d) the ohmic reactance X referred to the high-voltage side, and (e) verify that X_pu calculated from the high-voltage side is identical.',
        hi: 'एक 50 MVA, 13.8 kV / 138 kV ट्रांसफार्मर का निम्न-वोल्टेज (13.8 kV) पक्ष से मापा गया रिसाव प्रतिघात X = 3.808 Ω है। ज्ञात कीजिए: (a) Z_base1, (b) X_pu, (c) Z_base2, (d) उच्च-वोल्टेज पक्ष का X, एवं (e) सत्यापित कीजिए कि उच्च-वोल्टेज पक्ष से X_pu समान है।',
        bn: 'একটি ৫০ MVA, ১৩.৮ kV / ১৩৮ kV ট্রান্সফরমারের নিম্ন-ভোল্টেজ পাশে রিঅ্যাক্ট্যান্স X = ৩.৮০৮ Ω। নির্ণয় করুন: (ক) Z_base1, (খ) X_pu, (গ) Z_base2, (ঘ) উচ্চ-ভোল্টেজ পাশে X এবং (ঙ) প্রমাণ করুন উচ্চ-ভোল্টেজ পাশেও X_pu একই।'
      },
      formula: {
        en: 'Z_base = V_base^2 / S_base.\nX_pu = X_actual / Z_base.\nX_2 = a_inv^2 · X_1 = (V_2 / V_1)^2 · X_1.',
        hi: 'Z_base = V_base^2 / S_base, X_pu = X_actual / Z_base, X_2 = (V_2 / V_1)^2 · X_1।',
        bn: 'Z_base = V_base^2 / S_base, X_pu = X_actual / Z_base, X_2 = (V_2 / V_1)^2 · X_1।'
      },
      substitution: {
        en: '(a) Z_base1 = (13.8 kV)^2 / 50 MVA = 190.44 / 50 = 3.8088 Ω.\n(b) X_pu = X_1 / Z_base1 = 3.808 Ω / 3.8088 Ω = 0.100 p.u. (or 10% reactance).\n(c) Z_base2 = (138 kV)^2 / 50 MVA = 19044 / 50 = 380.88 Ω.\n(d) Referred to high-voltage side: turns ratio N_2/N_1 = 138 / 13.8 = 10.\nX_2 = 10^2 · X_1 = 100 · 3.808 Ω = 380.8 Ω.\n(e) X_pu(HV) = X_2 / Z_base2 = 380.8 Ω / 380.88 Ω = 0.100 p.u.',
        hi: '(a) Z_base1 = (13.8)^2 / 50 = 3.809 Ω।\n(b) X_pu = 3.808 / 3.809 = 0.10 p.u. (10%)।\n(c) Z_base2 = (138)^2 / 50 = 380.9 Ω।\n(d) X_2 = 100 × 3.808 = 380.8 Ω।\n(e) X_pu(HV) = 380.8 / 380.9 = 0.10 p.u.।',
        bn: '(ক) Z_base1 = (১৩.৮)^২ / ৫০ = ৩.৮০৯ Ω।\n(খ) X_pu = ৩.৮০৮ / ৩.৮০৯ = ০.১০ p.u. (১০%)।\n(গ) Z_base2 = (১৩৮)^২ / ৫০ = ৩৮০.৯ Ω।\n(ঘ) X_2 = ১০০ × ৩.৮০৮ = ৩৮০.৮ Ω।\n(ঙ) X_pu(HV) = ৩৮০.৮ / ৩৮০.৯ = ০.১০ p.u.।'
      },
      calculation: {
        en: 'The per-unit reactance is exactly 0.10 p.u. on either side of the transformer. This proves why power engineers prefer per-unit representations.',
        hi: 'प्रति-इकाई प्रतिघात दोनों पक्षों में ठीक 0.10 p.u. है। यह सिद्ध करता है कि पावर इंजीनियर p.u. प्रणाली को क्यों प्राथमिकता देते हैं।',
        bn: 'উভয় পাশে পার-ইউনিট রিঅ্যাক্ট্যান্স হুবহু ০.১০ p.u.। এটি প্রমাণ করে কেন পাওয়ার ইঞ্জিনিয়ারিংয়ে পার-ইউনিট পদ্ধতি অপরিহার্য।'
      },
      finalAnswer: {
        en: 'Z_base1 = 3.81 Ω; X_pu = 0.10 p.u. (10%); Z_base2 = 380.9 Ω; X_2 = 380.8 Ω; X_pu is invariant across windings.',
        hi: 'Z_base1 = 3.81 Ω; X_pu = 0.10 p.u.; Z_base2 = 380.9 Ω; X_2 = 380.8 Ω; दोनों पक्षों में X_pu समान है।',
        bn: 'Z_base1 = ৩.৮১ Ω; X_pu = ০.১০ p.u.; Z_base2 = ৩৮০.৯ Ω; X_2 = ৩৮০.৮ Ω; উভয় পাশে X_pu অভিন্ন।'
      },
      }
  ],
  practicalApplications: {
    en: [
      'Audio Impedance Matching Transformers: Vacuum-tube audio power amplifiers with high plate resistance (e.g. 5000 Ω) use an output transformer with turns ratio a = √(5000 / 8) = 25:1 to reflect an 8 Ω loudspeaker into 5000 Ω, achieving maximum power transfer with negligible distortion.',
      'Quadrature Phase-Shifting Transformers (PST): Cross-border high-voltage grids deploy phase-shifting transformers with complex turns ratios a = |a|∠α to redirect active megawatt loop flows away from congested transmission corridors without building new physical lines.'
    ],
    hi: [
      'ऑडियो प्रतिबाधा मिलान ट्रांसफार्मर: ऑडियो एम्पलीफायर उच्च प्लेट प्रतिरोध (5000 Ω) को 8 Ω लाउडस्पीकर से मिलाने के लिए a = 25:1 वाले ट्रांसफार्मर का उपयोग करते हैं ताकि अधिकतम शक्ति स्थानांतरित हो सके।',
      'क्वाड्रैचर फेज-शिफ्टिंग ट्रांसफार्मर (PST): हाई-वोल्टेज ग्रिड भीड़भाड़ वाली ट्रांसमिशन लाइनों से सक्रिय बिजली प्रवाह को मोड़ने के लिए सम्मिश्र फेरा अनुपात a = |a|∠α वाले फेज-शिफ्टिंग ट्रांसफार्मर लगाते हैं।'
    ],
    bn: [
      'অডিও প্রতিবাধা ম্যাচিং ট্রান্সফরমার: ভ্যাকুয়াম টিউব অডিও অ্যাম্প্লিফায়ার উচ্চ রোধকে ৮ ওহম লাউডস্পিকারের সাথে ম্যাচ করাতে ২৫:১ ঘূর্ণন অনুপাতের ট্রান্সফরমার ব্যবহার করে সর্বোচ্চ ক্ষমতা স্থানান্তর নিশ্চিত করে।',
      'কোয়াড্রেচার ফেজ-শিফটিং ট্রান্সফরমার (PST): উচ্চ ভোল্টেজের পাওয়ার গ্রিডে জটিল ঘূর্ণন অনুপাত a = |a|∠α বিশিষ্ট ফেজ-শিফটিং ট্রান্সফরমার ব্যবহার করে অতিরিক্ত চাপযুক্ত লাইন থেকে বিদ্যুৎ প্রবাহ অন্যদিকে চালিত করা হয়।'
    ]
  },
  importantPoints: {
    en: [
      'Secondary impedance reflects to the primary scaled by a² = (N_1/N_2)², preserving phase angle. Inductive loads stay inductive; capacitive loads stay capacitive (unlike linear air-core transformers where reactance sign inverts).',
      'In the per-unit system with regional base voltages chosen in accordance with transformer turns ratios, the per-unit impedance of a transformer is identical from either side.'
    ],
    hi: [
      'द्वितीयक प्रतिबाधा प्राथमिक में a² = (N_1/N_2)² से गुणा होकर परावर्तित होती है, तथा कला कोण सुरक्षित रहता है (रैखिक एयर-कोर ट्रांसफार्मर के विपरीत जहाँ प्रतिघात का चिह्न उल्टा हो जाता है)।',
      'प्रति-इकाई प्रणाली में फेरा अनुपात के अनुसार बेस वोल्टेज चुनने पर, ट्रांसफार्मर की p.u. प्रतिबाधा दोनों तरफ बिल्कुल समान होती है।'
    ],
    bn: [
      'গৌণ প্রতিবাধা প্রাথমিকে a² = (N_1/N_2)² গুণ হয়ে প্রতিফলিত হয় এবং ফেজ কোণ অপরিবর্তিত থাকে (রৈখিক ট্রান্সফরমারের মতো চিহ্ন উল্টায় না)।',
      'পার-ইউনিট পদ্ধতিতে ঘূর্ণন অনুপাত অনুযায়ী বেস ভোল্টেজ নির্বাচন করলে ট্রান্সফরমারের p.u. প্রতিবাধা উভয় পাশে হুবহু সমান হয়।'
    ]
  },
  commonMistakes: {
    en: [
      'Mistake: Reflecting secondary impedance by multiplying by a instead of a². Correction: Because V scales by a and I scales by 1/a, the ratio V/I scales by a / (1/a) = a².'
    ],
    hi: [
      'त्रुटि: द्वितीयक प्रतिबाधा को a² के बजाय केवल a से गुणा करना। सुधार: चूँकि V, a से बढ़ता है और I, 1/a से बदलता है, इसलिए प्रतिबाधा V/I = a² से गुणा होती है।'
    ],
    bn: [
      'ভুল: গৌণ প্রতিবাধাকে a² এর পরিবর্তে কেবল a দিয়ে গুণ করা। সংশোধন: যেহেতু ভোল্টেজ a গুণ এবং কারেন্ট 1/a গুণ পরিবর্তিত হয়, তাই প্রতিবাধা V/I = a² গুণ বৃদ্ধি পায়।'
    ]
  },
  keyTakeaways: {
    en: [
      'Ideal transformers scale voltages by a, currents by 1/a, and impedances by a². Per-unit normalization simplifies power networks by making transformer turns ratios effectively 1:1.'
    ],
    hi: [
      'आदर्श ट्रांसफार्मर वोल्टेज को a, धारा को 1/a, और प्रतिबाधा को a² द्वारा स्केल करते हैं। प्रति-इकाई प्रणाली फेरा अनुपातों को 1:1 बनाकर पावर नेटवर्क को सरल बनाती है।'
    ],
    bn: [
      'আদর্শ ট্রান্সফরমার ভোল্টেজকে a, কারেন্টকে 1/a এবং প্রতিবাধাকে a² দ্বারা রূপান্তর করে। পার-ইউনিট পদ্ধতি পাওয়ার নেটওয়ার্কের জটিল গণনাকে সহজ করে।'
    ]
  },
  practiceQuestions: [
    {
      id: 'pq-ch12-l05-01',
      question: {
        en: 'An ideal transformer has N_1 = 500 turns and N_2 = 100 turns. If a load of Z_L = 8∠30° Ω is connected to the secondary, what is the input impedance Z_in seen by the primary source?',
        hi: 'एक आदर्श ट्रांसफार्मर में N_1 = 500 और N_2 = 100 फेरे हैं। यदि द्वितीयक पर Z_L = 8∠30° Ω का लोड जुड़ा है, तो प्राथमिक इनपुट प्रतिबाधा Z_in क्या है?',
        bn: 'একটি আদর্শ ট্রান্সফরমারে N_1 = ৫০০ এবং N_2 = ১০০ প্যাঁচ রয়েছে। গৌণে Z_L = ৮∠৩০° Ω লোড যুক্ত থাকলে প্রাথমিকে ইনপুট প্রতিবাধা Z_in কত?'
      },
      hint: {
        en: 'a = 500 / 100 = 5. Z_in = a² Z_L = 25 · 8∠30° = 200∠30° Ω.',
        hi: 'a = 5। Z_in = 5^2 × 8∠30° = 200∠30° Ω।',
        bn: 'a = ৫। Z_in = ৫^২ × ৮∠৩০° = ২০০∠৩০° Ω।'
      }
    },
    {
      id: 'pq-ch12-l05-02',
      question: {
        en: 'Why does an ideal transformer have zero reactive power consumption (Q = 0)?',
        hi: 'एक आदर्श ट्रांसफार्मर में शून्य प्रतिक्रियी शक्ति खपत (Q = 0) क्यों होती है?',
        bn: 'আদর্শ ট্রান্সফরমারে রিঅ্যাক্টিভ পাওয়ার অপচয় শূন্য (Q = ০) কেন হয়?'
      },
      hint: {
        en: 'Because core permeability is infinite (requiring zero magnetizing current, so no reactive magnetic field energy is stored) and leakage inductance is zero.',
        hi: 'क्योंकि कोर की चुंबकशीलता अनंत होती है (शून्य चुंबकन धारा) और रिसाव प्रेरकत्व शून्य होता है।',
        bn: 'কারণ কোরের ভেদ্যতা অসীম (চৌম্বকায়ন কারেন্ট শূন্য) এবং লিকেজ আবেশাঙ্ক শূন্য।'
      }
    }
  ],
  mcqs: [
    {
      id: 'mcq-ch12-l05-01',
      question: {
        en: 'If a secondary load impedance Z_L = 10 + j20 Ω is connected to an ideal transformer with turns ratio a = N_1 / N_2 = 5, what is the reflected impedance seen at the primary terminals?',
        hi: 'यदि फेरा अनुपात a = 5 वाले आदर्श ट्रांसफार्मर के द्वितीयक पर Z_L = 10 + j20 Ω का लोड जुड़ा हो, तो प्राथमिक टर्मिनलों पर परावर्तित प्रतिबाधा क्या होगी?',
        bn: 'ঘূর্ণন অনুপাত a = ৫ বিশিষ্ট একটি আদর্শ ট্রান্সফরমারের গৌণে Z_L = ১০ + j২০ Ω লোড যুক্ত থাকলে প্রাথমিকে প্রতিফলিত প্রতিবাধা কত হবে?'
      },
      options: [
        { id: 'opt-1', text: { en: '2 + j4 Ω', hi: '2 + j4 Ω', bn: '২ + j৪ Ω' } },
        { id: 'opt-2', text: { en: '50 + j100 Ω', hi: '50 + j100 Ω', bn: '৫০ + j১০০ Ω' } },
        { id: 'opt-3', text: { en: '250 + j500 Ω', hi: '250 + j500 Ω', bn: '২৫০ + j৫০০ Ω' } },
        { id: 'opt-4', text: { en: '0.4 + j0.8 Ω', hi: '0.4 + j0.8 Ω', bn: '০.৪ + j০.৮ Ω' } }
      ],
      correctOptionId: 'opt-3',
      explanation: {
        en: 'Z_in = a^2 Z_L = 5^2 · (10 + j20) = 25 · (10 + j20) = 250 + j500 Ω.',
        hi: 'Z_in = a^2 Z_L = 25 × (10 + j20) = 250 + j500 Ω।',
        bn: 'Z_in = a^2 Z_L = ২৫ × (১০ + j২০) = ২৫০ + j৫০০ Ω।'
      }
    },
    {
      id: 'mcq-ch12-l05-02',
      question: {
        en: 'In an ideal transformer, what is the relationship between primary complex apparent power S_1 and secondary complex apparent power S_2?',
        hi: 'आदर्श ट्रांसफार्मर में प्राथमिक सम्मिश्र शक्ति S_1 और द्वितीयक सम्मिश्र शक्ति S_2 के बीच क्या संबंध होता है?',
        bn: 'আদর্শ ট্রান্সফরমারে প্রাথমিক আপাত ক্ষমতা S_1 এবং গৌণ আপাত ক্ষমতা S_2 এর মাঝে সম্পর্ক কী?'
      },
      options: [
        { id: 'opt-1', text: { en: 'S_1 = a^2 S_2', hi: 'S_1 = a^2 S_2', bn: 'S_1 = a^2 S_2' } },
        { id: 'opt-2', text: { en: 'S_1 = S_2', hi: 'S_1 = S_2', bn: 'S_1 = S_2' } },
        { id: 'opt-3', text: { en: 'S_1 = a S_2', hi: 'S_1 = a S_2', bn: 'S_1 = a S_2' } },
        { id: 'opt-4', text: { en: 'S_1 = S_2 / a', hi: 'S_1 = S_2 / a', bn: 'S_1 = S_2 / a' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'An ideal transformer is strictly lossless and stores no net energy: S_1 = V_1 I_1* = (a V_2)(I_2 / a)* = V_2 I_2* = S_2.',
        hi: 'आदर्श ट्रांसफार्मर में शून्य हानि होती है: S_1 = S_2 (शक्ति पूर्णतः संरक्षित रहती है)।',
        bn: 'আদর্শ ট্রান্সফরমারে কোনো অপচয় নেই: S_1 = S_2 (ক্ষমতা সম্পূর্ণ সংরক্ষিত)।'
      }
    },
    {
      id: 'mcq-ch12-l05-03',
      question: {
        en: 'If dots are located at the top of the primary winding and the bottom of the secondary winding, what is the phase relationship between V_1 and V_2?',
        hi: 'यदि डॉट्स प्राथमिक के शीर्ष और द्वितीयक के तल पर स्थित हों, तो V_1 और V_2 के बीच क्या कला संबंध होता है?',
        bn: 'যদি ডট চিহ্ন প্রাথমিকের শীর্ষে এবং গৌণের নিচে অবস্থিত হয়, তবে V_1 ও V_2 এর মাঝে ফেজ সম্পর্ক কী?'
      },
      options: [
        { id: 'opt-1', text: { en: 'In phase (0° phase shift)', hi: 'समान कला में (0°)', bn: 'একই ফেজে (০°)' } },
        { id: 'opt-2', text: { en: '90° leading', hi: '90° अग्रगामी', bn: '৯০° এগিয়ে' } },
        { id: 'opt-3', text: { en: '180° out of phase (inverted)', hi: '180° विपरीत कला में (उल्टा)', bn: '১৮০° বিপরীত ফেজে' } },
        { id: 'opt-4', text: { en: '90° lagging', hi: '90° पश्चगामी', bn: '৯০° পিছিয়ে' } }
      ],
      correctOptionId: 'opt-3',
      explanation: {
        en: 'Opposite dot placement inverts polarity: V_1 / V_2 = -a = a ∠180°.',
        hi: 'विपरीत डॉट स्थिति ध्रुवता को उलट देती है, जिससे 180° का कलांतर होता है।',
        bn: 'বিপরীতমুখী ডট অবস্থানের কারণে পোলারিটি উল্টে যায় এবং ১৮০° ফেজ পার্থক্য সৃষ্টি হয়।'
      }
    },
    {
      id: 'mcq-ch12-l05-04',
      question: {
        en: 'What is the base impedance Z_base for a system with base voltage V_base = 20 kV and base power S_base = 100 MVA?',
        hi: 'आधार वोल्टेज V_base = 20 kV और आधार शक्ति S_base = 100 MVA वाले सिस्टम की आधार प्रतिबाधा Z_base क्या है?',
        bn: 'বেস ভোল্টেজ V_base = ২০ kV এবং বেস ক্ষমতা S_base = ১০০ MVA বিশিষ্ট সিস্টেমের বেস প্রতিবাধা Z_base কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '4.0 Ω', hi: '4.0 Ω', bn: '৪.০ Ω' } },
        { id: 'opt-2', text: { en: '0.2 Ω', hi: '0.2 Ω', bn: '০.২ Ω' } },
        { id: 'opt-3', text: { en: '40 Ω', hi: '40 Ω', bn: '৪০ Ω' } },
        { id: 'opt-4', text: { en: '400 Ω', hi: '400 Ω', bn: '৪০০ Ω' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Z_base = V_base^2 / S_base = (20 × 10^3)^2 / (100 × 10^6) = (400 × 10^6) / (100 × 10^6) = 4.0 Ω.',
        hi: 'Z_base = (20 kV)^2 / 100 MVA = 400 / 100 = 4.0 Ω।',
        bn: 'Z_base = (২০ kV)^২ / ১০০ MVA = ৪০০ / ১০০ = ৪.০ Ω।'
      }
    },
    {
      id: 'mcq-ch12-l05-05',
      question: {
        en: 'A phase-shifting transformer has a complex turns ratio a = 1.0 ∠ 15°. How does it modify the voltage angle between primary and secondary?',
        hi: 'एक फेज-शिफ्टिंग ट्रांसफार्मर का सम्मिश्र फेरा अनुपात a = 1.0 ∠ 15° है। यह प्राथमिक और द्वितीयक के बीच वोल्टेज कोण को कैसे बदलता है?',
        bn: 'একটি ফেজ-শিফটিং ট্রান্সফরমারের জটিল ঘূর্ণন অনুপাত a = ১.০ ∠ ১৫°। এটি প্রাথমিক ও গৌণের মাঝে ভোল্টেজ কোণ কীভাবে পরিবর্তন করে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'It keeps angles identical', hi: 'यह कोणों को समान रखता है', bn: 'কোণ অপরিবর্তিত রাখে' } },
        { id: 'opt-2', text: { en: 'It advances V_1 ahead of V_2 by 15° without changing voltage magnitude', hi: 'यह वोल्टेज परिमाण बदले बिना V_1 को V_2 से 15° आगे करता है', bn: 'ভোল্টেজের মান অপরিবর্তিত রেখে V_1 কে V_2 এর চেয়ে ১৫° এগিয়ে নেয়' } },
        { id: 'opt-3', text: { en: 'It increases the voltage magnitude by 15%', hi: 'यह वोल्टेज परिमाण 15% बढ़ाता है', bn: 'ভোল্টেজের মান ১৫% বৃদ্ধি করে' } },
        { id: 'opt-4', text: { en: 'It shifts the frequency by 15 Hz', hi: 'यह आवृत्ति को 15 Hz बदलता है', bn: 'কম্পাঙ্ক ১৫ Hz পরিবর্তন করে' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'Since V_1 = a V_2 = (1.0 ∠ 15°) V_2, V_1 has the same magnitude as V_2 but leads V_2 by 15° in phase angle.',
        hi: 'V_1 = a V_2 से वोल्टेज का परिमाण समान रहता है परंतु कला में 15° का अंतर आ जाता है।',
        bn: 'V_1 = a V_2 সমীকরণ অনুসারে মান একই থাকে কিন্তু ফেজ কোণে ১৫° পরিবর্তন ঘটে।'
      }
    },
    {
      id: 'mcq-ch12-l05-06',
      question: {
        en: 'Which of the following is an assumed characteristic of an IDEAL transformer?',
        hi: 'निम्नलिखित में से कौन सी एक आदर्श ट्रांसफार्मर की मानी गई विशेषता है?',
        bn: 'নিচের কোনটি একটি আদর্শ ট্রান্সফরমারের বৈশিষ্ট্য?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Core permeability μ is zero', hi: 'कोर चुंबकशीलता शून्य होती है', bn: 'কোরের ভেদ্যতা শূন্য' } },
        { id: 'opt-2', text: { en: 'Winding resistances R_1 and R_2 are infinite', hi: 'वाइंडिंग प्रतिरोध अनंत होते हैं', bn: 'কুণ্ডলীর রোধ অসীম' } },
        { id: 'opt-3', text: { en: 'Coupling coefficient k = 1 and winding resistances R = 0', hi: 'युग्मन गुणांक k = 1 एवं वाइंडिंग प्रतिरोध R = 0', bn: 'যুগ্মন সহগ k = ১ এবং কুণ্ডলীর রোধ R = ০' } },
        { id: 'opt-4', text: { en: 'Eddy currents are maximized', hi: 'भंवर धाराएँ अधिकतम होती हैं', bn: 'এডি কারেন্ট সর্বোচ্চ হয়' } }
      ],
      correctOptionId: 'opt-3',
      explanation: {
        en: 'An ideal transformer has zero winding resistance (R=0), zero core loss, unity coupling coefficient (k=1), and infinite core permeability (μ→∞).',
        hi: 'आदर्श ट्रांसफार्मर में शून्य प्रतिरोध (R=0) और पूर्ण युग्मन (k=1) माना जाता है।',
        bn: 'আদর্শ ট্রান্সফরমারে কুণ্ডলীর রোধ শূন্য (R=0) এবং নিখুঁত যুগ্মন (k=1) বিবেচনা করা হয়।'
      }
    },
    {
      id: 'mcq-ch12-l05-07',
      question: {
        en: 'If a transmission line has an impedance of 20 Ω and the base impedance is Z_base = 80 Ω, what is its per-unit impedance?',
        hi: 'यदि एक ट्रांसमिशन लाइन की प्रतिबाधा 20 Ω है और आधार प्रतिबाधा 80 Ω है, तो इसकी प्रति-इकाई प्रतिबाधा क्या है?',
        bn: 'একটি সঞ্চালন লাইনের প্রতিবাধা ২০ Ω এবং বেস প্রতিবাধা ৮০ Ω হলে, এর পার-ইউনিট প্রতিবাধা কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '4.0 p.u.', hi: '4.0 p.u.', bn: '৪.০ p.u.' } },
        { id: 'opt-2', text: { en: '0.25 p.u.', hi: '0.25 p.u.', bn: '০.২৫ p.u.' } },
        { id: 'opt-3', text: { en: '1600 p.u.', hi: '1600 p.u.', bn: '১৬০০ p.u.' } },
        { id: 'opt-4', text: { en: '0.50 p.u.', hi: '0.50 p.u.', bn: '০.৫০ p.u.' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'Z_pu = Z_actual / Z_base = 20 Ω / 80 Ω = 0.25 p.u.',
        hi: 'Z_pu = 20 / 80 = 0.25 p.u.।',
        bn: 'Z_pu = ২০ / ৮০ = ০.২৫ p.u.।'
      }
    },
    {
      id: 'mcq-ch12-l05-08',
      question: {
        en: 'A 100 Ω resistor is connected to the secondary of an ideal step-down transformer with N_1/N_2 = 10. What resistance is seen by the primary generator?',
        hi: 'N_1/N_2 = 10 वाले आदर्श स्टेप-डाउन ट्रांसफार्मर के द्वितीयक पर 100 Ω का प्रतिरोधक जुड़ा है। प्राथमिक जनरेटर को कितना प्रतिरोध दिखाई देगा?',
        bn: 'N_1/N_2 = ১০ বিশিষ্ট স্টেপ-ডাউন আদর্শ ট্রান্সফরমারের গৌণে ১০০ Ω রোধ যুক্ত। প্রাথমিক জেনারেটরে অনুভূত রোধ কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '1 Ω', hi: '1 Ω', bn: '১ Ω' } },
        { id: 'opt-2', text: { en: '10 Ω', hi: '10 Ω', bn: '১০ Ω' } },
        { id: 'opt-3', text: { en: '1,000 Ω', hi: '1,000 Ω', bn: '১,০০০ Ω' } },
        { id: 'opt-4', text: { en: '10,000 Ω (10 kΩ)', hi: '10,000 Ω (10 kΩ)', bn: '১০,০০০ Ω (১০ kΩ)' } }
      ],
      correctOptionId: 'opt-4',
      explanation: {
        en: 'R_in = a^2 R_L = 10^2 · 100 Ω = 100 · 100 = 10,000 Ω = 10 kΩ.',
        hi: 'R_in = 10^2 × 100 = 10,000 Ω = 10 kΩ।',
        bn: 'R_in = ১০^২ × ১০০ = ১০,০০০ Ω = ১০ kΩ।'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-ch12-l05-01',
      title: {
        en: 'Ideal Transformer Phasor Relations and Per-Unit Model',
        hi: 'परिपथ योजनाबद्ध आरेख',
        bn: 'বর্তনী স্কিম্যাটিক চিত্র'
      },
      caption: {
        en: 'Ideal Transformer Phasor Relations and Per-Unit Model',
        hi: 'आदर्श ट्रांसफार्मर फेजर संबंध एवं प्रति-इकाई मॉडल',
        bn: 'আদর্শ ট্রান্সফরমার ফেজর সম্পর্ক ও পার-ইউনিট মডেল'
      },
      svgType: 'circuit-ch12-passive-filters-design'
    }
  ]
};
