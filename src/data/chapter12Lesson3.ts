import { Lesson } from '../types';

export const LESSON_COUPLED_CIRCUITS_DOT: Lesson = {
  id: 'lsn-ch12-coupled-circuits-dot-convention',
  topicId: 'tp-pure-capacitive',
  chapterId: 'ch-ac-circuits',
  order: 3,
  title: {
    en: 'Coupled Inductors, Mutual Inductance & Dot Convention',
    hi: 'युग्मित प्रेरक, अन्योन्य प्रेरकत्व एवं बिंदु परिपाटी',
    bn: 'সংযুক্ত আবেশক, পারস্পরিক আবেশাঙ্ক ও ডট কনভেনশন'
  },
  description: {
    en: 'Master magnetic coupling between AC coils. Formulate rigorous mesh equations incorporating mutual inductance M and the Dot Convention. Analyze series-aiding (L1 + L2 + 2M) and series-opposing (L1 + L2 - 2M) configurations, coupling coefficient k, and mutually induced electromotive forces.',
    hi: 'एसी कुंडलियों के मध्य चुंबकीय युग्मन में महारत हासिल करें। अन्योन्य प्रेरकत्व M और डॉट परिपाटी (Dot Convention) को शामिल करते हुए मेश समीकरण स्थापित करें। श्रेणी-सहायक (L1 + L2 + 2M) एवं श्रेणी-विरोधी (L1 + L2 - 2M) विन्यास, युग्मन गुणांक k, और अन्योन्य प्रेरित EMF का विश्लेषण करें।',
    bn: 'এসি কুণ্ডলীর মাঝে চৌম্বকীয় যুগ্মন পুঙ্খানুপুঙ্খভাবে আয়ত্ত করুন। পারস্পরিক আবেশাঙ্ক M এবং ডট কনভেনশন ব্যবহার করে মেশ সমীকরণ গঠন করুন। শ্রেণি-সহায়ক (L1 + L2 + 2M) ও শ্রেণি-বিরোধী (L1 + L2 - 2M) সংযোগ, যুগ্মন সহগ k এবং পারস্পরিক আবিষ্ট EMF বিশ্লেষণ করুন।'
  },
  estimatedMinutes: 40,
  easyExplanation: {
    en: 'When two coils are physically close, changing AC current in Coil 1 produces a dynamic magnetic flux that penetrates Coil 2, inducing an AC voltage in Coil 2 without any direct electrical connection! This magnetic linkage is measured by Mutual Inductance (M in Henrys). The coupling coefficient (k between 0 and 1) measures how well flux is shared. To determine whether the mutually induced voltage aids or opposes the self-induced voltage, engineers use the Dot Convention: If a current enters the dotted terminal of one coil, it induces a positive voltage at the dotted terminal of the second coil.',
    hi: 'जब दो कुंडलियाँ पास-पास रखी होती हैं, तो पहली कुंडली में बदलती हुई एसी धारा एक चुंबकीय फ्लक्स उत्पन्न करती है जो दूसरी कुंडली से होकर गुजरता है, जिससे बिना किसी सीधे विद्युत संपर्क के दूसरी कुंडली में एक वोल्टेज प्रेरित होता है। इस प्रभाव को अन्योन्य प्रेरकत्व (M) कहते हैं। प्रेरित वोल्टेज जुड़ता है या घटता है, यह जानने के लिए डॉट परिपाटी (Dot Convention) का उपयोग किया जाता है: यदि धारा एक कुंडली के डॉट वाले सिरे में प्रवेश करती है, तो वह दूसरी कुंडली के डॉट वाले सिरे पर धनात्मक वोल्टेज प्रेरित करती है।',
    bn: 'যখন দুটি কুণ্ডলী পাশাপাশি থাকে, তখন ১ম কুণ্ডলীর পরিবর্তী এসি কারেন্টের চৌম্বক ফ্লাক্স ২য় কুণ্ডলীকে ছেদ করে কোনো তারের সংযোগ ছাড়াই ভোল্টেজ আবিষ্ট করে। একে পারস্পরিক আবেশাঙ্ক (M) বলে। আবিষ্ট ভোল্টেজ যোগ হবে না বিয়োগ হবে তা নির্ধারণ করতে ডট কনভেনশন ব্যবহার করা হয়: কারেন্ট একটি কুণ্ডলীর ডট চিহ্নিত প্রান্তে প্রবেশ করলে অপর কুণ্ডলীর ডট প্রান্তে ধনাত্মক ভোল্টেজ আবিষ্ট হয়।'
  },
  detailedExplanation: {
    en: '1. Fundamentals of Mutual Inductance: When a time-varying current i_1(t) flows through coil 1 (with N_1 turns), it produces magnetic flux ϕ_11 linking itself and mutual flux ϕ_21 linking coil 2 (with N_2 turns). Faraday\'s law establishes the mutually induced electromotive force in coil 2 as:\nv_2(t) = N_2 (dϕ_21 / dt) = M (di_1 / dt).\nIn the sinusoidal phasor domain at angular frequency ω, this becomes a complex voltage phasor: V_2 = ± jωM I_1.\nBy reciprocity in linear, non-magnetic-saturation media, M_12 = M_21 = M.\n\n2. Coupling Coefficient (k): The fraction of magnetic flux established by one coil that links the other is expressed by the dimensionless coupling coefficient k:\nk = M / √(L_1 L_2), where 0 ≤ k ≤ 1.\n- Loosely coupled / Air-core coils: k < 0.5 (typical RF coils: k ≈ 0.05 to 0.3).\n- Tightly coupled / Iron-core transformers: k ≈ 0.95 to 0.999.\n- Ideal coupling: k = 1 (M = √(L_1 L_2)).\n\n3. The Dot Convention:\nRule: When current enters the dotted terminal of one inductor, the polarity of the mutually induced voltage in the second coupled inductor is POSITIVE at its own dotted terminal.\n- If current I_1 enters the dot of L_1, it induces voltage +jωM I_1 at the dotted terminal of L_2.\n- If current I_1 leaves the dot of L_1, it induces voltage -jωM I_1 at the dotted terminal of L_2.\n\n4. Series Connections of Coupled Inductors:\n- Series-Aiding: Currents in both coils enter their respective dotted terminals simultaneously. Magnetic fluxes reinforce each other:\n  L_eq = L_1 + L_2 + 2M.\n- Series-Opposing: Current enters the dotted terminal of one coil and leaves the dotted terminal of the other. Magnetic fluxes oppose:\n  L_eq = L_1 + L_2 - 2M.\n- Measurement of M: M = (L_aiding - L_opposing) / 4.\n\n5. Parallel Connections of Coupled Inductors:\n- Parallel-Aiding (dots tied together):\n  L_eq = (L_1 L_2 - M^2) / (L_1 + L_2 - 2M).\n- Parallel-Opposing (one dot tied to non-dot):\n  L_eq = (L_1 L_2 - M^2) / (L_1 + L_2 + 2M).',
    hi: '1. अन्योन्य प्रेरकत्व: कुंडली 1 में धारा परिवर्तन से कुंडली 2 में प्रेरित EMF: v_2(t) = M (di_1 / dt), फेजर रूप में V_2 = ± jωM I_1।\n2. युग्मन गुणांक (k): k = M / √(L_1 L_2), जहाँ 0 ≤ k ≤ 1।\n3. डॉट परिपाटी (Dot Convention): जब धारा एक प्रेरक के डॉट वाले सिरे में प्रवेश करती है, तो दूसरे युग्मित प्रेरक में प्रेरित वोल्टेज का मान उसके डॉट वाले सिरे पर धनात्मक होता है।\n4. श्रेणी संयोजन:\n- श्रेणी-सहायक (Series-Aiding): L_eq = L_1 + L_2 + 2M\n- श्रेणी-विरोधी (Series-Opposing): L_eq = L_1 + L_2 - 2M\n- अन्योन्य प्रेरकत्व का मापन: M = (L_सहायक - L_विरोधी) / 4।\n5. समानांतर संयोजन:\n- समानांतर-सहायक: L_eq = (L_1 L_2 - M^2) / (L_1 + L_2 - 2M)।',
    bn: '১. পারস্পরিক আবেশাঙ্ক: কুণ্ডলী ১ এ কারেন্ট পরিবর্তনের ফলে কুণ্ডলী ২ এ আবিষ্ট EMF: v_2(t) = M (di_1 / dt), ফেজরে V_2 = ± jωM I_1।\n২. যুগ্মন সহগ (k): k = M / √(L_1 L_2), যেখানে ০ ≤ k ≤ ১।\n৩. ডট কনভেনশন: কারেন্ট কোনো আবেশকের ডট প্রান্তে প্রবেশ করলে অন্য আবেশকের ডট প্রান্তে আবিষ্ট ভোল্টেজ ধনাত্মক হয়।\n৪. শ্রেণি সংযোগ:\n- শ্রেণি-সহায়ক: L_eq = L_1 + L_2 + 2M\n- শ্রেণি-বিরোধী: L_eq = L_1 + L_2 - 2M\n- M পরিমাপ: M = (L_সহায়ক - L_বিরোধী) / ৪।\n৫. সমান্তরাল সংযোগ:\n- সমান্তরাল-সহায়ক: L_eq = (L_1 L_2 - M^2) / (L_1 + L_2 - 2M)।'
  },
  formulas: [
    {
      id: 'f-coupling-coeff',
      symbol: 'k',
      expression: 'k = \\frac{M}{\\sqrt{L_1 L_2}}, \\quad (0 \\le k \\le 1)',
      title: {
        en: 'Coefficient of Magnetic Coupling',
        hi: 'चुंबकीय युग्मन गुणांक',
        bn: 'চৌম্বকীয় যুগ্মন সহগ'
      },
      description: {
        en: 'Defines the degree of magnetic flux linkage between two coupled inductors.',
        hi: 'दो युग्मित प्रेरकों के मध्य चुंबकीय फ्लक्स लिंकेज की डिग्री को परिभाषित करता है।',
        bn: 'দুটি সংযুক্ত আবেশকের মাঝে চৌম্বকীয় ফ্লাক্স সংযোগের মাত্রা প্রকাশ করে।'
      },
      variables: [
        { symbol: 'k', name: { en: 'Coupling coefficient (dimensionless)', hi: 'युग्मन गुणांक (विमाहीन)', bn: 'যুগ্মন সহগ (মাত্রাহীন)' } },
        { symbol: 'M', name: { en: 'Mutual inductance (H)', hi: 'अन्योन्य प्रेरकत्व (H)', bn: 'পারস্পরিক আবেশাঙ্ক (H)' } },
        { symbol: 'L_1, L_2', name: { en: 'Self-inductances of coils 1 and 2 (H)', hi: 'कुंडलियों 1 एवं 2 का स्व-प्रेरकत्व (H)', bn: 'কুণ্ডলী ১ ও ২ এর স্বকীয় আবেশাঙ্ক (H)' } }
      ]
    },
    {
      id: 'f-series-coupled',
      symbol: 'L_{eq}',
      expression: 'L_{eq} = L_1 + L_2 \\pm 2M',
      title: {
        en: 'Equivalent Inductance in Series Connection',
        hi: 'श्रेणी संयोजन में तुल्य प्रेरकत्व',
        bn: 'শ্রেণি সংযোগে সমতুল্য আবেশাঙ্ক'
      },
      description: {
        en: '+2M for series-aiding (reinforcing flux); -2M for series-opposing (bucking flux).',
        hi: 'श्रेणी-सहायक के लिए +2M; श्रेणी-विरोधी के लिए -2M।',
        bn: 'শ্রেণি-সহায়কের জন্য +2M এবং শ্রেণি-বিরোধীর জন্য -2M।'
      },
      variables: [
        { symbol: 'L_{eq}', name: { en: 'Total equivalent inductance (H)', hi: 'कुल तुल्य प्रेरकत्व (H)', bn: 'মোট সমতুল্য আবেশাঙ্ক (H)' } },
        { symbol: 'M', name: { en: 'Mutual inductance (H)', hi: 'अन्योन्य प्रेरकत्व (H)', bn: 'পারস্পরিক আবেশাঙ্ক (H)' } }
      ]
    },
    {
      id: 'f-mesh-coupled-voltage',
      symbol: 'V_{ind}',
      expression: '\\mathbf{V}_{L1} = j\\omega L_1 \\mathbf{I}_1 \\pm j\\omega M \\mathbf{I}_2',
      title: {
        en: 'Phasor Terminal Voltage of Coupled Inductor',
        hi: 'युग्मित प्रेरक का फेजर टर्मिनल वोल्टेज',
        bn: 'সংযুক্ত আবেশকের ফেজর টার্মিনাল ভোল্টেজ'
      },
      description: {
        en: 'Total voltage across coil 1 combining self-induced and mutually induced reactances.',
        hi: 'स्व-प्रेरित एवं अन्योन्य प्रेरित प्रतिघातों को मिलाकर कुंडली 1 का कुल वोल्टेज।',
        bn: 'স্বকীয় ও পারস্পরিক আবিষ্ট রিঅ্যাক্ট্যান্সের সমন্বয়ে কুণ্ডলী ১ এর মোট ভোল্টেজ।'
      },
      variables: [
        { symbol: '\\mathbf{V}_{L1}', name: { en: 'Phasor voltage across coil 1 (V)', hi: 'कुंडली 1 का फेजर वोल्टेज (V)', bn: 'কুণ্ডলী ১ এর ফেজর ভোল্টেজ (V)' } },
        { symbol: '\\omega M', name: { en: 'Mutual reactance (Ω)', hi: 'अन्योन्य प्रतिघात (Ω)', bn: 'পারস্পরিক রিঅ্যাক্ট্যান্স (Ω)' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-ch12-l03-dot-rules',
      title: {
        en: 'Physical Origin and Rules of the Dot Convention',
        hi: 'डॉट परिपाटी का भौतिक मूल एवं नियम',
        bn: 'ডট কনভেনশনের ভৌত ভিত্তি ও নিয়ম'
      },
      content: {
        en: 'Because schematic diagrams cannot clearly show the 3D physical winding direction (clockwise vs. counter-clockwise) of wire wrapped around a magnetic core, dots are placed near one terminal of each coil.\n\nTwo fundamental Dot Rules:\n1. If a current enters the dotted terminal of coil 1, the reference polarity of the mutually induced voltage in coil 2 is positive at the dotted terminal of coil 2.\n2. If a current leaves the dotted terminal of coil 1, the reference polarity of the mutually induced voltage in coil 2 is negative at the dotted terminal of coil 2.\n\nWhen writing KVL around a loop containing coil 1:\n- The self-induced voltage drop is always +jωL_1 I_1 in the direction of the current.\n- The mutually induced voltage drop is +jωM I_2 if loop current I_2 enters the dot of coil 2, and -jωM I_2 if I_2 leaves the dot of coil 2.',
        hi: 'क्योंकि परिपथ आरेख में कुंडलियों के लपेटने की 3D दिशा (दक्षिणावर्त या वामावर्त) को स्पष्ट रूप से नहीं दिखाया जा सकता, इसलिए प्रत्येक कुंडली के एक सिरे पर बिंदु (Dot) लगाया जाता है।\nडॉट नियम:\n1. यदि धारा कुंडली 1 के डॉट वाले सिरे में प्रवेश करती है, तो कुंडली 2 के डॉट वाले सिरे पर प्रेरित वोल्टेज धनात्मक होता है।\n2. KVL लिखते समय: स्व-प्रेरित वोल्टेज हमेशा +jωL_1 I_1 होता है, जबकि अन्योन्य प्रेरित वोल्टेज +jωM I_2 या -jωM I_2 होता है (डॉट में धारा के प्रवेश या निकास के आधार पर)।',
        bn: 'বর্তনী চিত্রে কুণ্ডলীর তার প্যাঁচানোর ত্রিমাত্রিক দিক সরাসরি দেখানো সম্ভব হয় না বলে প্রতিটি কুণ্ডলীর একটি প্রান্তে ডট চিহ্ন দেওয়া হয়।\nডট নিয়ম:\n১. কুণ্ডলী ১ এর ডট প্রান্তে কারেন্ট প্রবেশ করলে কুণ্ডলী ২ এর ডট প্রান্তে আবিষ্ট ভোল্টেজ ধনাত্মক হয়।\n২. KVL লেখার সময়: স্বকীয় ভোল্টেজ সর্বদা +jωL_1 I_1 এবং পারস্পরিক ভোল্টেজ ডটের অভিমুখের ওপর ভিত্তি করে +jωM I_2 বা -jωM I_2 হয়।'
      }
    },
    {
      id: 'sec-ch12-l03-measuring-m',
      title: {
        en: 'Laboratory Determination of Mutual Inductance',
        hi: 'प्रयोगशाला में अन्योन्य प्रेरकत्व का निर्धारण',
        bn: 'ল্যাবরেটরিতে পারস্পরিক আবেশাঙ্ক নির্ণয়'
      },
      content: {
        en: 'A standard laboratory technique to measure mutual inductance M and coupling coefficient k:\n1. Connect the two coils in series-aiding configuration and measure the total inductance with an LCR meter: L_aiding = L_1 + L_2 + 2M.\n2. Reverse the connections of one coil to form a series-opposing configuration and measure again: L_opposing = L_1 + L_2 - 2M.\n3. Subtracting the two measurements yields:\n   L_aiding - L_opposing = 4M  ⇒  M = (L_aiding - L_opposing) / 4.\n4. Measure individual self-inductances L_1 and L_2 with the other coil open-circuited.\n5. Compute the coupling coefficient: k = M / √(L_1 L_2).',
        hi: 'प्रयोगशाला में अन्योन्य प्रेरकत्व M मापने की विधि:\n1. दोनों कुंडलियों को श्रेणी-सहायक में जोड़कर LCR मीटर से कुल प्रेरकत्व मापें: L_सहायक = L_1 + L_2 + 2M।\n2. एक कुंडली के कनेक्शन उलटकर श्रेणी-विरोधी में मापें: L_विरोधी = L_1 + L_2 - 2M।\n3. M = (L_सहायक - L_विरोधी) / 4।\n4. व्यक्तिगत प्रेरकत्व L_1 एवं L_2 मापकर युग्मन गुणांक k = M / √(L_1 L_2) की गणना करें।',
        bn: 'ল্যাবে পারস্পরিক আবেশাঙ্ক M নির্ণয় পদ্ধতি:\n১. কুণ্ডলী দুটিকে শ্রেণি-সহায়ক সংযোগে যুক্ত করে LCR মিটার দিয়ে মাপুন: L_সহায়ক = L_1 + L_2 + 2M।\n২. একটি কুণ্ডলীর সংযোগ উল্টে শ্রেণি-বিরোধী সংযোগে মাপুন: L_বিরোধী = L_1 + L_2 - 2M।\n৩. M = (L_সহায়ক - L_বিরোধী) / ৪।\n৪. কুণ্ডলীর স্বকীয় আবেশাঙ্ক মেপে যুগ্মন সহগ k = M / √(L_1 L_2) গণনা করুন।'
      }
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch12-l03-01',
      problem: {
        en: 'Two magnetically coupled coils are tested with an impedance analyzer. When connected in series-aiding, their equivalent inductance is measured as L_aid = 380 mH. When connected in series-opposing, the equivalent inductance drops to L_opp = 140 mH. The self-inductance of coil 1 is independently measured as L_1 = 150 mH. Calculate: (a) the mutual inductance M, (b) the self-inductance of coil 2 (L_2), and (c) the coupling coefficient k.',
        hi: 'दो चुंबकीय रूप से युग्मित कुंडलियों का परीक्षण किया जाता है। जब श्रेणी-सहायक में जोड़ा जाता है, तो L_aid = 380 mH मापा जाता है। जब श्रेणी-विरोधी में जोड़ा जाता है, तो L_opp = 140 mH मापा जाता है। कुंडली 1 का स्व-प्रेरकत्व L_1 = 150 mH है। ज्ञात कीजिए: (a) अन्योन्य प्रेरकत्व M, (b) कुंडली 2 का स्व-प्रेरकत्व L_2, एवं (c) युग्मन गुणांक k।',
        bn: 'দুটি চৌম্বকীয়ভাবে সংযুক্ত কুণ্ডলী পরীক্ষা করা হলো। শ্রেণি-সহায়ক সংযোগে মোট আবেশাঙ্ক L_aid = ৩৮০ mH এবং শ্রেণি-বিরোধী সংযোগে L_opp = ১৪০ mH। ১ম কুণ্ডলীর স্বকীয় আবেশাঙ্ক L_1 = ১৫০ mH। নির্ণয় করুন: (ক) পারস্পরিক আবেশাঙ্ক M, (খ) ২য় কুণ্ডলীর স্বকীয় আবেশাঙ্ক L_2 এবং (গ) যুগ্মন সহগ k।'
      },
      formula: {
        en: 'M = (L_aid - L_opp) / 4, L_aid + L_opp = 2(L_1 + L_2) ⇒ L_2 = (L_aid + L_opp)/2 - L_1, k = M / sqrt(L_1 · L_2)',
        hi: 'M = (L_aid - L_opp) / 4, L_2 = (L_aid + L_opp)/2 - L_1, k = M / sqrt(L_1 · L_2)',
        bn: 'M = (L_aid - L_opp) / ৪, L_2 = (L_aid + L_opp)/২ - L_1, k = M / রুট(L_1 · L_2)'
      },
      substitution: {
        en: '(a) M = (380 - 140) / 4 = 240 / 4 = 60 mH = 0.060 H.\n(b) L_1 + L_2 = (L_aid + L_opp) / 2 = (380 + 140) / 2 = 520 / 2 = 260 mH.\nL_2 = 260 - L_1 = 260 - 150 = 110 mH = 0.110 H.\n(c) k = M / sqrt(L_1 · L_2) = 60 / sqrt(150 · 110) = 60 / sqrt(16500) = 60 / 128.45 = 0.467.',
        hi: '(a) M = (380 - 140) / 4 = 60 mH।\n(b) L_2 = (520 / 2) - 150 = 260 - 150 = 110 mH।\n(c) k = 60 / sqrt(150 × 110) = 60 / 128.45 = 0.467।',
        bn: '(ক) M = (৩৮০ - ১৪০) / ৪ = ৬০ mH।\n(খ) L_2 = (৫২০ / ২) - ১৫০ = ২৬০ - ১৫০ = ১১০ mH।\n(গ) k = ৬০ / রুট(১৫০ × ১১০) = ৬০ / ১২৮.৪৫ = ০.৪৬৭।'
      },
      calculation: {
        en: 'k = 0.467 indicates moderate magnetic coupling without an iron core (e.g., tightly wound air-core or ferrite slug).',
        hi: 'k = 0.467 मध्यम चुंबकीय युग्मन को दर्शाता है।',
        bn: 'k = ০.৪৬৭ মাঝারি মানের চৌম্বকীয় যুগ্মন নির্দেশ করে।'
      },
      finalAnswer: {
        en: '(a) M = 60 mH; (b) L_2 = 110 mH; (c) k = 0.467',
        hi: '(a) M = 60 mH; (b) L_2 = 110 mH; (c) k = 0.467',
        bn: '(ক) M = ৬০ mH; (খ) L_2 = ১১০ mH; (গ) k = ০.৪৬৭'
      }
    },
    {
      id: 'ex-ch12-l03-02',
      problem: {
        en: 'In a coupled AC circuit operating at ω = 100 rad/s, Loop 1 has an AC voltage source V_s = 100∠0° V, a series resistance R_1 = 4 Ω, and coil 1 with self-inductance L_1 = 0.1 H (dot at input terminal). Loop 2 contains coil 2 with L_2 = 0.4 H (dot at output terminal) connected to a resistive load R_2 = 16 Ω. The mutual inductance between the coils is M = 0.1 H. Write the mesh equations and solve for the primary current phasor I_1 and secondary current phasor I_2.',
        hi: 'ω = 100 rad/s पर कार्यरत एक युग्मित एसी परिपथ में, लूप 1 में V_s = 100∠0° V, R_1 = 4 Ω, और L_1 = 0.1 H (इनपुट पर डॉट) है। लूप 2 में L_2 = 0.4 H (आउटपुट पर डॉट) और लोड R_2 = 16 Ω है। M = 0.1 H है। मेश समीकरण लिखिए और प्राथमिक धारा फेजर I_1 एवं द्वितीयक धारा फेजर I_2 ज्ञात कीजिए।',
        bn: 'ω = ১০০ rad/s এ একটি সংযুক্ত এসি বর্তনীতে লুপ ১ এ V_s = ১০০∠০° V, R_1 = ৪ Ω এবং L_1 = ০.১ H (ইনপুটে ডট)। লুপ ২ এ L_2 = ০.৪ H (আউটপুটে ডট) এবং লোড R_2 = ১৬ Ω। পারস্পরিক আবেশাঙ্ক M = ০.১ H। মেশ সমীকরণ গঠন করে প্রাথমিক কারেন্ট I_1 ও গৌণ কারেন্ট I_2 নির্ণয় করুন।'
      },
      formula: {
        en: 'X_L1 = ωL_1 = 10 Ω, X_L2 = ωL_2 = 40 Ω, X_M = ωM = 10 Ω.\nLoop 1 KVL: (R_1 + jX_L1) I_1 - jX_M I_2 = V_s\nLoop 2 KVL: -jX_M I_1 + (R_2 + jX_L2) I_2 = 0\n(Note the minus sign because I_1 enters dot while I_2 leaves dot)',
        hi: 'Loop 1: (4 + j10) I_1 - j10 I_2 = 100∠0°\nLoop 2: -j10 I_1 + (16 + j40) I_2 = 0',
        bn: 'লুপ ১: (৪ + j১০) I_1 - j১০ I_2 = ১০০∠০°\nলুপ ২: -j১০ I_1 + (১৬ + j৪০) I_2 = ০'
      },
      substitution: {
        en: 'From Loop 2: I_2 = [j10 / (16 + j40)] I_1.\nSubstitute into Loop 1:\n[(4 + j10) - (j10)^2 / (16 + j40)] I_1 = 100∠0°.\nSince (j10)^2 = -100: -(-100)/(16 + j40) = +100 / (16 + j40).\n100 / (16 + j40) = 100(16 - j40) / (256 + 1600) = (1600 - j4000) / 1856 = 0.862 - j2.155 Ω (Reflected Impedance!).\nTotal primary loop impedance: Z_in = (4 + j10) + (0.862 - j2.155) = 4.862 + j7.845 Ω.\nPolar: |Z_in| = sqrt(4.862^2 + 7.845^2) = sqrt(23.64 + 61.54) = sqrt(85.18) = 9.23 Ω.\nAngle = arctan(7.845 / 4.862) = 58.21°.\nI_1 = 100∠0° / 9.23∠58.21° = 10.83∠-58.21° A.\nNow compute I_2:\nI_2 = [10∠90° / (43.08∠68.20°)] · 10.83∠-58.21°\nI_2 = 0.232∠21.80° · 10.83∠-58.21° = 2.51∠-36.41° A.',
        hi: 'लूप 2 से: I_2 = [j10 / (16 + j40)] I_1।\nZ_in = (4 + j10) + (0.862 - j2.155) = 4.862 + j7.845 Ω = 9.23∠58.21° Ω।\nI_1 = 100 / 9.23∠58.21° = 10.83∠-58.21° A।\nI_2 = 2.51∠-36.41° A।',
        bn: 'লুপ ২ থেকে: I_2 = [j১০ / (১৬ + j৪০)] I_1।\nZ_in = (৪ + j১০) + (০.৮৬২ - j২.১৫৫) = ৪.৮৬২ + j৭.৮৪৫ Ω = ৯.২৩∠৫৮.২১° Ω।\nI_1 = ১০০ / ৯.২৩∠৫৮.২১° = ১০.৮৩∠-৫৮.২১° A।\nI_2 = ২.৫১∠-৩৬.৪১° A।'
      },
      calculation: {
        en: 'Notice that the secondary inductance reflects back into the primary as a CAPACITIVE term (-j2.155 Ω), reducing total net primary reactance from 10 Ω to 7.85 Ω.',
        hi: 'द्वितीयक प्रेरकत्व प्राथमिक में धारितीय पद (-j2.155 Ω) के रूप में परावर्तित होता है, जिससे कुल प्राथमिक प्रतिघात कम हो जाता है।',
        bn: 'গৌণ কুণ্ডলীর আবেশাঙ্ক প্রাথমিকে ধারকীয় রূপ (-j২.১৫৫ Ω) হিসেবে প্রতিফলিত হয়ে মোট রিঅ্যাক্ট্যান্স কমিয়ে দেয়।'
      },
      finalAnswer: {
        en: 'I_1 = 10.83∠-58.21° A; I_2 = 2.51∠-36.41° A',
        hi: 'I_1 = 10.83∠-58.21° A; I_2 = 2.51∠-36.41° A',
        bn: 'I_1 = ১০.৮৩∠-৫৮.২১° A; I_2 = ২.৫১∠-৩৬.৪১° A'
      },
      }
  ],
  practicalApplications: {
    en: [
      'Contactless Qi Wireless Charging: Smartphone wireless charging pads utilize loosely coupled air-core coils (k ≈ 0.4 to 0.7) operating near 110–205 kHz, where series resonant capacitors cancel leakage reactances to maximize power transfer across the air gap.',
      'Common-Mode Chokes in Switch-Mode Power Supplies: EMI filter chokes wind both AC line and neutral wires on a shared toroidal ferrite core in series-aiding for common-mode noise (presenting massive inductance L + M), but series-opposing for normal differential load current (canceling flux so L_net ≈ 0).'
    ],
    hi: [
      'कॉन्टैक्टलेस क्यूई वायरलेस चार्जिंग: स्मार्टफोन वायरलेस चार्जिंग पैड शिथिल रूप से युग्मित एयर-कोर कुंडलियों (k ≈ 0.4 से 0.7) का उपयोग करते हैं, जहाँ अनुनादी संधारित्र रिसाव प्रतिघात को रद्द करके हवा के अंतराल के पार शक्ति स्थानांतरित करते हैं।',
      'स्विच-मोड पावर सप्लाई में कॉमन-मोड चोक: ईएमआई फिल्टर चोक दोनों एसी तारों को एक ही कोर पर लपेटते हैं ताकि कॉमन-मोड शोर के लिए उच्च प्रेरकत्व (L + M) मिले, लेकिन उपयोगी लोड धारा के लिए फ्लक्स रद्द होकर शून्य हो जाए।'
    ],
    bn: [
      'কন্ট্যাক্টলেস কিউই ওয়্যারলেস চার্জিং: স্মার্টফোনের ওয়্যারলেস চার্জিংয়ে আবেশীয় কুণ্ডলী (k ≈ ০.৪ - ০.৭) ব্যবহার করে রেজোন্যান্ট ক্যাপাসিটরের সাহায্যে এয়ার গ্যাপের মধ্য দিয়ে ক্ষমতা স্থানান্তর করা হয়।',
      'সুইচ-মোড পাওয়ার সাপ্লাইয়ে কমন-মোড চোক: ইএমআই ফিল্টার চোক কমন-মোড নয়েজ রোধ করতে উচ্চ আবেশাঙ্ক (L + M) প্রদান করে, কিন্তু সাধারণ লোড কারেন্টের জন্য ফ্লাক্স নাকচ করে নিম্ন বাধা সৃষ্টি করে।'
    ]
  },
  importantPoints: {
    en: [
      'The coupling coefficient k can never exceed 1.0 in any passive physical inductor system (k = 1 represents 100% ideal flux linkage with zero magnetic leakage).',
      'If currents in both coupled inductors enter their dotted terminals, the mutually induced voltage terms have positive signs; if one enters and one leaves, the sign is negative.'
    ],
    hi: [
      'किसी भी निष्क्रिय भौतिक प्रेरक प्रणाली में युग्मन गुणांक k कभी भी 1.0 से अधिक नहीं हो सकता (k = 1 शून्य रिसाव के साथ 100% आदर्श फ्लक्स लिंकेज को दर्शाता है)।',
      'यदि दोनों कुंडलियों में धाराएँ उनके डॉट वाले सिरों में प्रवेश करती हैं, तो प्रेरित वोल्टेज के पद धनात्मक होते हैं; यदि एक में प्रवेश और दूसरे से निकास हो, तो पद ऋणात्मक होता है।'
    ],
    bn: [
      'যেকোনো প্যাসিভ আবেশক ব্যবস্থায় যুগ্মন সহগ k এর মান কখনো ১.০ এর বেশি হতে পারে না (k = ১ হলো শতভাগ আদর্শ যুগ্মন)।',
      'উভয় আবেশকের ডট প্রান্তে কারেন্ট প্রবেশ করলে আবিষ্ট ভোল্টেজ পদগুলো ধনাত্মক হয়; একটিতে প্রবেশ ও অন্যটি থেকে বের হলে চিহ্ন ঋণাত্মক হয়।'
    ]
  },
  commonMistakes: {
    en: [
      'Mistake: Assuming mutual inductance M only affects the second coil and forgetting that Coil 2 current simultaneously induces a back-voltage into Coil 1. Correction: Mutual coupling is strictly reciprocal (M_12 = M_21 = M). Both mesh equations must contain mutual voltage terms (±jωM I_2 in mesh 1 and ±jωM I_1 in mesh 2).'
    ],
    hi: [
      'त्रुटि: यह मान लेना कि अन्योन्य प्रेरकत्व M केवल दूसरी कुंडली को प्रभावित करता है और यह भूल जाना कि कुंडली 2 की धारा भी कुंडली 1 में वोल्टेज प्रेरित करती है। सुधार: अन्योन्य युग्मन परस्पर सममित होता है। दोनों मेश समीकरणों में अन्योन्य पद (मेश 1 में ±jωM I_2 एवं मेश 2 में ±jωM I_1) अवश्य होने चाहिए।'
    ],
    bn: [
      'ভুল: মনে করা যে পারস্পরিক আবেশাঙ্ক কেবল ২য় কুণ্ডলীকে প্রভাবিত করে এবং ভুলে যাওয়া যে ২য় কুণ্ডলীর কারেন্টও ১ম কুণ্ডলীতে ব্যাক-ভোল্টেজ তৈরি করে। সংশোধন: পারস্পরিক যুগ্মন দ্বিমুখী। উভয় মেশ সমীকরণেই পারস্পরিক ভোল্টেজ পদ অন্তর্ভুক্ত থাকতে হবে।'
    ]
  },
  keyTakeaways: {
    en: [
      'The Dot Convention determines the polarity of mutually induced AC voltages: entering a dot induces a positive potential at the other coil\'s dot.'
    ],
    hi: [
      'डॉट परिपाटी अन्योन्य प्रेरित एसी वोल्टेज की ध्रुवता निर्धारित करती है: डॉट में धारा का प्रवेश दूसरी कुंडली के डॉट पर धनात्मक विभव उत्पन्न करता है।'
    ],
    bn: [
      'ডট কনভেনশন পারস্পরিক আবিষ্ট এসি ভোল্টেজের পোলারিটি নির্ধারণ করে: ডটে প্রবেশকারী কারেন্ট অপর কুণ্ডলীর ডটে ধনাত্মক বিভব তৈরি করে।'
    ]
  },
  practiceQuestions: [
    {
      id: 'pq-ch12-l03-01',
      question: {
        en: 'Two coils with L_1 = 18 mH and L_2 = 32 mH have a mutual inductance M = 12 mH. Calculate the coupling coefficient k and state whether the coils are tightly or loosely coupled.',
        hi: 'L_1 = 18 mH और L_2 = 32 mH वाली दो कुंडलियों का अन्योन्य प्रेरकत्व M = 12 mH है। युग्मन गुणांक k की गणना कीजिए।',
        bn: 'L_1 = ১৮ mH এবং L_2 = ৩২ mH বিশিষ্ট দুটি কুণ্ডলীর পারস্পরিক আবেশাঙ্ক M = ১২ mH। যুগ্মন সহগ k গণনা করুন।'
      },
      hint: {
        en: 'k = M / sqrt(L_1 · L_2) = 12 / sqrt(18 · 32) = 12 / sqrt(576) = 12 / 24 = 0.50.',
        hi: 'k = 12 / sqrt(18 × 32) = 12 / 24 = 0.50।',
        bn: 'k = ১২ / রুট(১৮ × ৩২) = ১২ / ২৪ = ০.৫০।'
      }
    },
    {
      id: 'pq-ch12-l03-02',
      question: {
        en: 'Explain why two inductors connected in series-opposing have a total inductance LESS than L_1 + L_2.',
        hi: 'स्पष्ट कीजिए कि श्रेणी-विरोधी में जुड़े दो प्रेरकों का कुल प्रेरकत्व L_1 + L_2 से कम क्यों होता है।',
        bn: 'ব্যাখ্যা করুন কেন শ্রেণি-বিরোধী সংযোগে দুটি আবেশকের মোট আবেশাঙ্ক L_1 + L_2 এর চেয়ে কম হয়।'
      },
      hint: {
        en: 'Because their opposing magnetic fluxes partially cancel each other out, reducing the net stored magnetic energy: L_eq = L_1 + L_2 - 2M.',
        hi: 'क्योंकि उनके विरोधी चुंबकीय फ्लक्स एक-दूसरे को आंशिक रूप से रद्द कर देते हैं, जिससे संग्रहीत ऊर्जा घट जाती है: L_eq = L_1 + L_2 - 2M।',
        bn: 'কারণ তাদের বিপরীতমুখী চৌম্বক ফ্লাক্স পরস্পরকে আংশিক নাকচ করে দেয়, ফলে সংরক্ষিত শক্তি হ্রাস পায়: L_eq = L_1 + L_2 - 2M।'
      }
    }
  ],
  mcqs: [
    {
      id: 'mcq-ch12-l03-01',
      question: {
        en: 'According to the Dot Convention for coupled inductors, if current enters the dotted terminal of coil 1, what is the polarity of the mutually induced voltage at the dotted terminal of coil 2?',
        hi: 'युग्मित प्रेरकों के लिए डॉट परिपाटी के अनुसार, यदि धारा कुंडली 1 के डॉट वाले सिरे में प्रवेश करती है, तो कुंडली 2 के डॉट वाले सिरे पर प्रेरित वोल्टेज की ध्रुवता क्या होगी?',
        bn: 'সংযুক্ত আবেশকের ডট কনভেনশন অনুসারে, কারেন্ট কুণ্ডলী ১ এর ডট প্রান্তে প্রবেশ করলে কুণ্ডলী ২ এর ডট প্রান্তে আবিষ্ট ভোল্টেজের পোলারিটি কী হবে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Negative', hi: 'ऋणात्मक', bn: 'ঋণাত্মক' } },
        { id: 'opt-2', text: { en: 'Positive', hi: 'धनात्मक', bn: 'ধনাত্মক' } },
        { id: 'opt-3', text: { en: 'Zero', hi: 'शून्य', bn: 'শূন্য' } },
        { id: 'opt-4', text: { en: 'Undefined without knowing frequency', hi: 'आवृत्ति जाने बिना अनिर्धारित', bn: 'কম্পাঙ্ক না জেনে অনির্ণেয়' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'The dot convention dictates that current entering a dotted terminal induces a voltage that is positive at the corresponding dotted terminal of any magnetically coupled coil.',
        hi: 'डॉट परिपाटी के अनुसार डॉट सिरे में प्रवेश करने वाली धारा दूसरी कुंडली के डॉट सिरे पर धनात्मक विभव प्रेरित करती है।',
        bn: 'ডট কনভেনশন অনুসারে ডট প্রান্তে প্রবেশকারী কারেন্ট অপর কুণ্ডলীর ডট প্রান্তে ধনাত্মক বিভব আবিষ্ট করে।'
      }
    },
    {
      id: 'mcq-ch12-l03-02',
      question: {
        en: 'What is the theoretical upper limit of the magnetic coupling coefficient k between two passive coils?',
        hi: 'दो निष्क्रिय कुंडलियों के मध्य चुंबकीय युग्मन गुणांक k की सैद्धांतिक ऊपरी सीमा क्या है?',
        bn: 'দুটি প্যাসিভ কুণ্ডলীর মাঝে চৌম্বকীয় যুগ্মন সহগ k এর তাত্ত্বিক সর্বোচ্চ সীমা কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '0.5', hi: '0.5', bn: '০.৫' } },
        { id: 'opt-2', text: { en: '1.0', hi: '1.0', bn: '১.০' } },
        { id: 'opt-3', text: { en: '2.0', hi: '2.0', bn: '২.০' } },
        { id: 'opt-4', text: { en: 'Infinity', hi: 'अनंत', bn: 'অসীম' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'By conservation of magnetic energy, mutual inductance cannot exceed the geometric mean of the self-inductances: M ≤ √(L_1 L_2), which restricts k = M / √(L_1 L_2) ≤ 1.0.',
        hi: 'चुंबकीय ऊर्जा संरक्षण के अनुसार M ≤ √(L_1 L_2) होता है, जिससे k ≤ 1.0 की बाध्यता होती है।',
        bn: 'চৌম্বক শক্তির সংরক্ষণশীলতার কারণে M ≤ √(L_1 L_2), ফলে k ≤ ১.০ হতে বাধ্য।'
      }
    },
    {
      id: 'mcq-ch12-l03-03',
      question: {
        en: 'Two coupled coils with L_1 = 50 mH and L_2 = 200 mH are connected in series-aiding. If their mutual inductance is M = 80 mH, what is the total equivalent inductance L_eq?',
        hi: 'L_1 = 50 mH और L_2 = 200 mH वाली दो कुंडलियों को श्रेणी-सहायक में जोड़ा गया है। यदि M = 80 mH है, तो कुल तुल्य प्रेरकत्व L_eq क्या है?',
        bn: 'L_1 = ৫০ mH এবং L_2 = ২০০ mH বিশিষ্ট দুটি কুণ্ডলী শ্রেণি-সহায়ক সংযোগে যুক্ত। M = ৮০ mH হলে মোট সমতুল্য আবেশাঙ্ক L_eq কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '250 mH', hi: '250 mH', bn: '২৫০ mH' } },
        { id: 'opt-2', text: { en: '330 mH', hi: '330 mH', bn: '৩৩০ mH' } },
        { id: 'opt-3', text: { en: '410 mH', hi: '410 mH', bn: '৪১০ mH' } },
        { id: 'opt-4', text: { en: '90 mH', hi: '90 mH', bn: '৯০ mH' } }
      ],
      correctOptionId: 'opt-3',
      explanation: {
        en: 'In series-aiding connection, L_eq = L_1 + L_2 + 2M = 50 + 200 + 2(80) = 250 + 160 = 410 mH.',
        hi: 'श्रेणी-सहायक में L_eq = L_1 + L_2 + 2M = 50 + 200 + 160 = 410 mH।',
        bn: 'শ্রেণি-সহায়ক সংযোগে L_eq = L_1 + L_2 + 2M = ৫০ + ২০০ + ১৬০ = ৪১০ mH।'
      }
    },
    {
      id: 'mcq-ch12-l03-04',
      question: {
        en: 'If the two coils from the previous question (L_1 = 50 mH, L_2 = 200 mH, M = 80 mH) are connected in series-opposing, what is the new equivalent inductance?',
        hi: 'यदि पिछली प्रश्न वाली कुंडलियों को श्रेणी-विरोधी में जोड़ा जाए, तो नया तुल्य प्रेरकत्व क्या होगा?',
        bn: 'পূর্ববর্তী প্রশ্নের কুণ্ডলী দুটিকে শ্রেণি-বিরোধী সংযোগে যুক্ত করলে নতুন সমতুল্য আবেশাঙ্ক কত হবে?'
      },
      options: [
        { id: 'opt-1', text: { en: '90 mH', hi: '90 mH', bn: '৯০ mH' } },
        { id: 'opt-2', text: { en: '170 mH', hi: '170 mH', bn: '১৭০ mH' } },
        { id: 'opt-3', text: { en: '250 mH', hi: '250 mH', bn: '২৫০ mH' } },
        { id: 'opt-4', text: { en: '-90 mH', hi: '-90 mH', bn: '-৯০ mH' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'In series-opposing connection, L_eq = L_1 + L_2 - 2M = 50 + 200 - 2(80) = 250 - 160 = 90 mH.',
        hi: 'श्रेणी-विरोधी में L_eq = L_1 + L_2 - 2M = 50 + 200 - 160 = 90 mH।',
        bn: 'শ্রেণি-বিরোধী সংযোগে L_eq = L_1 + L_2 - 2M = ৫০ + ২০০ - ১৬০ = ৯০ mH।'
      }
    },
    {
      id: 'mcq-ch12-l03-05',
      question: {
        en: 'Two identical coils with L_1 = L_2 = 10 mH are tightly wound together such that k = 1.0. When connected in series-opposing, the net inductance is:',
        hi: 'L_1 = L_2 = 10 mH वाली दो समान कुंडलियाँ k = 1.0 पर युग्मित हैं। श्रेणी-विरोधी में जोड़ने पर कुल प्रेरकत्व क्या होगा?',
        bn: 'L_1 = L_2 = ১০ mH বিশিষ্ট দুটি অভিন্ন কুণ্ডলী k = ১.০ সহকারে পেঁচানো। শ্রেণি-বিরোধী সংযোগে মোট আবেশাঙ্ক কত হবে?'
      },
      options: [
        { id: 'opt-1', text: { en: '20 mH', hi: '20 mH', bn: '২০ mH' } },
        { id: 'opt-2', text: { en: '40 mH', hi: '40 mH', bn: '৪০ mH' } },
        { id: 'opt-3', text: { en: '0 mH', hi: '0 mH', bn: '০ mH' } },
        { id: 'opt-4', text: { en: '10 mH', hi: '10 mH', bn: '১০ mH' } }
      ],
      correctOptionId: 'opt-3',
      explanation: {
        en: 'With k = 1 and identical coils, M = √(L · L) = 10 mH. Then L_opposing = L_1 + L_2 - 2M = 10 + 10 - 2(10) = 0 mH. This forms a non-inductive bifilar resistor.',
        hi: 'M = 10 mH होने पर L_opposing = 10 + 10 - 20 = 0 mH। यह एक प्रेरकत्व-रहित प्रतिरोधक बनाता है।',
        bn: 'M = ১০ mH হলে L_opposing = ১০ + ১০ - ২০ = ০ mH। এটি একটি আবেশহীন রোধ তৈরি করে।'
      }
    },
    {
      id: 'mcq-ch12-l03-06',
      question: {
        en: 'The SI unit of mutual inductance M is:',
        hi: 'अन्योन्य प्रेरकत्व M का SI मात्रक है:',
        bn: 'পারস্পরিক আবেশাঙ্ক M এর এসআই একক হলো:'
      },
      options: [
        { id: 'opt-1', text: { en: 'Weber (Wb)', hi: 'वेबर (Wb)', bn: 'ওয়েবার (Wb)' } },
        { id: 'opt-2', text: { en: 'Tesla (T)', hi: 'टेस्ला (T)', bn: 'টেসলা (T)' } },
        { id: 'opt-3', text: { en: 'Henry (H) or Volt-second per Ampere (V·s/A)', hi: 'हेनरी (H) या वोल्ट-सेकंड प्रति एम्पीयर', bn: 'হেনরি (H) বা ভোল্ট-সেকেন্ড পার অ্যাম্পিয়ার' } },
        { id: 'opt-4', text: { en: 'Farad (F)', hi: 'फैराड (F)', bn: 'ফ্যারাড (F)' } }
      ],
      correctOptionId: 'opt-3',
      explanation: {
        en: 'Since v = M (di/dt), M has units of V / (A/s) = V·s/A, which is defined as the Henry (H).',
        hi: 'v = M (di/dt) से M का मात्रक V·s/A = हेनरी (H) होता है।',
        bn: 'v = M (di/dt) সমীকরণ থেকে M এর একক V·s/A = হেনরি (H)।'
      }
    },
    {
      id: 'mcq-ch12-l03-07',
      question: {
        en: 'When measuring mutual inductance in the laboratory, the measured series-aiding inductance is 220 mH and series-opposing inductance is 100 mH. What is the value of M?',
        hi: 'प्रयोगशाला में अन्योन्य प्रेरकत्व मापते समय श्रेणी-सहायक 220 mH और श्रेणी-विरोधी 100 mH प्राप्त होता है। M का मान क्या है?',
        bn: 'ল্যাবে পারস্পরিক আবেশাঙ্ক পরিমাপে শ্রেণি-সহায়ক আবেশাঙ্ক ২২০ mH এবং শ্রেণি-বিরোধী আবেশাঙ্ক ১০০ mH পাওয়া গেল। M এর মান কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '120 mH', hi: '120 mH', bn: '১২০ mH' } },
        { id: 'opt-2', text: { en: '60 mH', hi: '60 mH', bn: '৬০ mH' } },
        { id: 'opt-3', text: { en: '30 mH', hi: '30 mH', bn: '৩০ mH' } },
        { id: 'opt-4', text: { en: '15 mH', hi: '15 mH', bn: '১৫ mH' } }
      ],
      correctOptionId: 'opt-3',
      explanation: {
        en: 'M = (L_aid - L_opp) / 4 = (220 - 100) / 4 = 120 / 4 = 30 mH.',
        hi: 'M = (220 - 100) / 4 = 120 / 4 = 30 mH।',
        bn: 'M = (২২০ - ১০০) / ৪ = ১২০ / ৪ = ৩০ mH।'
      }
    },
    {
      id: 'mcq-ch12-l03-08',
      question: {
        en: 'In an AC circuit operating at angular frequency ω, what is the phasor expression for the voltage induced in coil 1 due to current I_2 entering the dot of coil 2 (assuming I_1 also enters the dot of coil 1)?',
        hi: 'कोणीय आवृत्ति ω पर, कुंडली 2 के डॉट में धारा I_2 के प्रवेश के कारण कुंडली 1 में प्रेरित वोल्टेज का फेजर व्यंजक क्या है (यदि I_1 भी डॉट में प्रवेश करती है)?',
        bn: 'কৌণিক কম্পাঙ্ক ω-তে কুণ্ডলী ২ এর ডটে কারেন্ট I_2 প্রবেশের কারণে কুণ্ডলী ১ এ আবিষ্ট ভোল্টেজের ফেজর সমীকরণ কী?'
      },
      options: [
        { id: 'opt-1', text: { en: '+ jωM I_2', hi: '+ jωM I_2', bn: '+ jωM I_2' } },
        { id: 'opt-2', text: { en: '- jωM I_2', hi: '- jωM I_2', bn: '- jωM I_2' } },
        { id: 'opt-3', text: { en: '+ M I_2', hi: '+ M I_2', bn: '+ M I_2' } },
        { id: 'opt-4', text: { en: '+ j/(ωM) I_2', hi: '+ j/(ωM) I_2', bn: '+ j/(ωM) I_2' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'In the phasor domain, d/dt is replaced by jω. With both currents entering their respective dots, the mutual induced voltage drop is +jωM I_2.',
        hi: 'फेजर डोमेन में d/dt को jω से बदला जाता है। दोनों धाराओं के डॉट में प्रवेश करने पर अन्योन्य वोल्टेज +jωM I_2 होता है।',
        bn: 'ফেজর ডোমেনে d/dt কে jω দ্বারা প্রতিস্থাপন করা হয়। উভয় কারেন্ট ডটে প্রবেশ করলে পারস্পরিক ভোল্টেজ ড্রপ +jωM I_2 হয়।'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-ch12-l03-01',
      title: {
        en: 'Mutual Inductance and Dot Convention Configurations',
        hi: 'परिपथ योजनाबद्ध आरेख',
        bn: 'বর্তনী স্কিম্যাটিক চিত্র'
      },
      caption: {
        en: 'Mutual Inductance and Dot Convention Configurations',
        hi: 'अन्योन्य प्रेरकत्व एवं डॉट परिपाटी विन्यास',
        bn: 'পারস্পরিক আবেশাঙ্ক ও ডট কনভেনশন বিন্যাস'
      },
      svgType: 'circuit-ch12-coupled-circuits-dot-convention'
    }
  ]
};
