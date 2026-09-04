import { Lesson } from '../types';

export const LESSON_AC_THEVENIN_NORTON: Lesson = {
  id: 'lsn-ch12-ac-thevenin-norton',
  topicId: 'tp-pure-resistive',
  chapterId: 'ch-ac-circuits',
  order: 1,
  title: {
    en: 'AC Thevenin & Norton Theorems in Phasor Domain',
    hi: 'फेजर डोमेन में एसी थेवेनिन एवं नॉर्टन प्रमेय',
    bn: 'ফেজর ডোমেনে এসি থেভেনিন ও নর্টন উপপাদ্য'
  },
  description: {
    en: 'Master phasor-domain network reduction using AC Thevenin and Norton theorems. Learn to calculate complex open-circuit voltage phasors, short-circuit current phasors, internal complex impedance with frequency-dependent reactances, source transformations, and load transfer across arbitrary complex impedances.',
    hi: 'एसी थेवेनिन एवं नॉर्टन प्रमेयों का उपयोग करके फेजर-डोमेन नेटवर्क न्यूनीकरण में महारत हासिल करें। जटिल ओपन-सर्किट वोल्टेज फेजर, शॉर्ट-सर्किट धारा फेजर, आवृत्ति-निर्भर प्रतिघातों के साथ आंतरिक सम्मिश्र प्रतिबाधा, स्रोत रूपांतरण एवं सम्मिश्र लोड स्थानांतरण की गणना सीखें।',
    bn: 'এসি থেভেনিন ও নর্টন উপপাদ্য ব্যবহার করে ফেজর-ডোমেন নেটওয়ার্ক রিডাকশন আয়ত্ত করুন। জটিল ওপেন-সার্কিট ভোল্টেজ ফেজর, শর্ট-সার্কিট কারেন্ট ফেজর, কম্পাঙ্ক-নির্ভর রিঅ্যাক্ট্যান্স সহ অভ্যন্তরীণ জটিল প্রতিবাধা, উৎস রূপান্তর ও লোড স্থানান্তর গণনা শিখুন।'
  },
  estimatedMinutes: 40,
  easyExplanation: {
    en: 'Just as DC circuits can be simplified into a single voltage source and series resistor, any linear AC circuit operating at a constant sinusoidal frequency can be reduced to a single AC voltage phasor (V_th) in series with a complex impedance (Z_th = R_th + jX_th). Similarly, the Norton equivalent replaces this with an AC current phasor (I_N) in parallel with the exact same complex impedance (Z_N = Z_th). Because AC impedances combine resistance and frequency-dependent reactances (inductors and capacitors), all calculations use complex numbers in rectangular or polar coordinates.',
    hi: 'जिस प्रकार दिष्ट धारा (DC) परिपथों को एकल वोल्टेज स्रोत एवं श्रेणी प्रतिरोधक में सरलीकृत किया जा सकता है, उसी प्रकार किसी भी स्थिर ज्यावक्रीय आवृत्ति पर कार्य करने वाले रैखिक AC परिपथ को एक सम्मिश्र प्रतिबाधा (Z_th = R_th + jX_th) के साथ श्रेणीक्रम में एकल AC वोल्टेज फेजर (V_th) में घटाया जा सकता है। इसी प्रकार, नॉर्टन तुल्य परिपथ इसे उसी सम्मिश्र प्रतिबाधा (Z_N = Z_th) के समानांतर में एक AC धारा फेजर (I_N) से प्रतिस्थापित करता है।',
    bn: 'ডিসি বর্তনীর মতোই, নির্দিষ্ট সাইনুসয়েডাল কম্পাঙ্কে ক্রিয়াশীল যে কোনো রৈখিক এসি বর্তনীকে একটি জটিল প্রতিবাধা (Z_th = R_th + jX_th) এর সাথে শ্রেণিতে যুক্ত একটিমাত্র এসি ভোল্টেজ ফেজর (V_th) দ্বারা প্রতিস্থাপন করা যায়। একইভাবে, নর্টন সমতুল্য বর্তনী একে একই জটিল প্রতিবাধার সাথে সমান্তরালে যুক্ত একটি এসি কারেন্ট ফেজর (I_N) দ্বারা প্রকাশ করে।'
  },
  detailedExplanation: {
    en: 'In sinusoidal steady-state analysis, circuit variables are represented as phasors and passive elements as complex impedances: Z_R = R, Z_L = jωL, and Z_C = 1/(jωC) = -j/(ωC). Thevenin\'s and Norton\'s theorems hold universally in the frequency domain for all linear, bilateral, time-invariant AC networks.\n\n1. Thevenin Equivalent Phasor (V_th): The open-circuit phasor voltage appearing across designated load terminals A-B when the load impedance Z_L is disconnected: V_th = V_oc = V_A - V_B.\n\n2. Complex Thevenin Impedance (Z_th): The equivalent impedance looking back into terminals A-B with all independent sources deactivated (voltage sources replaced by short circuits, current sources by open circuits). For networks containing dependent sources, Z_th is determined by applying an external test phasor source V_test and computing Z_th = V_test / I_test, or via the ratio Z_th = V_oc / I_sc.\n\n3. Norton Current Phasor (I_N): The short-circuit phasor current flowing from terminal A to terminal B when terminals A and B are directly short-circuited: I_N = I_sc.\n\n4. Source Transformation in the Phasor Domain: V_th and I_N are interrelated through generalized Ohm\'s law in phasor form: V_th = I_N · Z_th, with Z_N = Z_th.\n\n5. Terminal Load Response: When load impedance Z_L = R_L + jX_L is connected across the Thevenin equivalent, the load current phasor is I_L = V_th / (Z_th + Z_L), and complex apparent power delivered to the load is S_L = V_L · I_L* = P_L + jQ_L.',
    hi: 'ज्यावक्रीय स्थिर-अवस्था विश्लेषण में, परिपथ चरों को फेजर के रूप में और निष्क्रिय घटकों को सम्मिश्र प्रतिबाधाओं के रूप में दर्शाया जाता है: Z_R = R, Z_L = jωL, एवं Z_C = -j/(ωC)।\n\n1. थेवेनिन तुल्य फेजर (V_th): लोड प्रतिबाधा Z_L को हटाने पर निर्दिष्ट टर्मिनलों A-B के आर-पार दिखने वाला खुला-परिपथ फेजर वोल्टेज: V_th = V_oc।\n2. सम्मिश्र थेवेनिन प्रतिबाधा (Z_th): सभी स्वतंत्र स्रोतों को निष्क्रिय करने के बाद टर्मिनलों A-B से अंदर देखने पर प्राप्त कुल प्रतिबाधा।\n3. नॉर्टन धारा फेजर (I_N): टर्मिनलों A एवं B को शॉर्ट-सर्किट करने पर बहने वाली धारा: I_N = I_sc।\n4. स्रोत रूपांतरण: V_th = I_N · Z_th, जहाँ Z_N = Z_th।\n5. लोड प्रतिक्रिया: लोड धारा I_L = V_th / (Z_th + Z_L), और लोड को दी गई सम्मिश्र शक्ति S_L = V_L · I_L* = P_L + jQ_L।',
    bn: 'সাইনুসয়েডাল স্থির-অবস্থা বিশ্লেষণে, বর্তনীর চলকগুলোকে ফেজর এবং প্যাসিভ উপাদানগুলোকে জটিল প্রতিবাধা হিসেবে প্রকাশ করা হয়: Z_R = R, Z_L = jωL, এবং Z_C = -j/(ωC)।\n\n১. থেভেনিন সমতুল্য ফেজর (V_th): লোড বিচ্ছিন্ন অবস্থায় A-B টার্মিনালে উন্মুক্ত-বর্তনীর ভোল্টেজ: V_th = V_oc।\n২. জটিল থেভেনিন প্রতিবাধা (Z_th): সকল স্বাধীন উৎস নিষ্ক্রিয় করে A-B টার্মিনাল থেকে পরিমাপকৃত মোট প্রতিবাধা।\n৩. নর্টন কারেন্ট ফেজর (I_N): A-B টার্মিনাল শর্ট করলে প্রবাহিত কারেন্ট: I_N = I_sc।\n৪. উৎস রূপান্তর: V_th = I_N · Z_th, যেখানে Z_N = Z_th।\n৫. লোড রেসপন্স: লোড কারেন্ট I_L = V_th / (Z_th + Z_L), এবং লোডে স্থানান্তরিত জটিল ক্ষমতা S_L = V_L · I_L* = P_L + jQ_L।'
  },
  formulas: [
    {
      id: 'f-ac-thevenin-voltage',
      symbol: 'V_{th}',
      expression: '\\mathbf{V}_{th} = \\mathbf{V}_{oc}',
      title: {
        en: 'AC Thevenin Voltage Phasor',
        hi: 'एसी थेवेनिन वोल्टेज फेजर',
        bn: 'এসি থেভেনিন ভোল্টেজ ফেজর'
      },
      description: {
        en: 'Open-circuit voltage phasor measured across the unloaded output port terminals.',
        hi: 'लोड रहित आउटपुट पोर्ट टर्मिनलों पर मापा गया ओपन-सर्किट वोल्टेज फेजर।',
        bn: 'লোডমুক্ত আউটপুট পোর্ট টার্মিনালে পরিমাপকৃত ওপেন-সার্কিট ভোল্টেজ ফেজর।'
      },
      variables: [
        { symbol: '\\mathbf{V}_{th}', name: { en: 'Thevenin equivalent voltage phasor (V)', hi: 'थेवेनिन तुल्य वोल्टेज फेजर (V)', bn: 'থেভেনিন সমতুল্য ভোল্টেজ ফেজর (V)' } },
        { symbol: '\\mathbf{V}_{oc}', name: { en: 'Open-circuit voltage phasor (V)', hi: 'ओपन-सर्किट वोल्टेज फेजर (V)', bn: 'ওপেন-সার্কিট ভোল্টেজ ফেজর (V)' } }
      ]
    },
    {
      id: 'f-ac-thevenin-impedance',
      symbol: 'Z_{th}',
      expression: '\\mathbf{Z}_{th} = \\frac{\\mathbf{V}_{oc}}{\\mathbf{I}_{sc}} = R_{th} + jX_{th}',
      title: {
        en: 'Complex Thevenin Internal Impedance',
        hi: 'सम्मिश्र थेवेनिन आंतरिक प्रतिबाधा',
        bn: 'জটিল থেভেনিন অভ্যন্তরীণ প্রতিবাধা'
      },
      description: {
        en: 'Calculates equivalent internal impedance from the ratio of open-circuit voltage to short-circuit current.',
        hi: 'ओपन-सर्किट वोल्टेज एवं शॉर्ट-सर्किट धारा के अनुपात से तुल्य आंतरिक प्रतिबाधा की गणना करता है।',
        bn: 'ওপেন-সার্কিট ভোল্টেজ ও শর্ট-সার্কিট কারেন্টের অনুপাত থেকে সমতুল্য অভ্যন্তরীণ প্রতিবাধা গণনা করে।'
      },
      variables: [
        { symbol: '\\mathbf{Z}_{th}', name: { en: 'Complex Thevenin impedance (Ω)', hi: 'सम्मिश्र थेवेनिन प्रतिबाधा (Ω)', bn: 'জটিল থেভেনিন প্রতিবাধা (Ω)' } },
        { symbol: 'R_{th}', name: { en: 'Thevenin resistance (Ω)', hi: 'थेवेनिन प्रतिरोध (Ω)', bn: 'থেভেনিন রোধ (Ω)' } },
        { symbol: 'X_{th}', name: { en: 'Thevenin reactance (Ω)', hi: 'थेवेनिन प्रतिघात (Ω)', bn: 'থেভেনিন রিঅ্যাক্ট্যান্স (Ω)' } }
      ]
    },
    {
      id: 'f-ac-source-transform',
      symbol: 'I_N',
      expression: '\\mathbf{I}_N = \\frac{\\mathbf{V}_{th}}{\\mathbf{Z}_{th}}, \\quad \\mathbf{Z}_N = \\mathbf{Z}_{th}',
      title: {
        en: 'Phasor Source Transformation (Thevenin to Norton)',
        hi: 'फेजर स्रोत रूपांतरण (थेवेनिन से नॉर्टन)',
        bn: 'ফেজর উৎস রূপান্তর (থেভেনিন থেকে নর্টন)'
      },
      description: {
        en: 'Interrelates Thevenin and Norton equivalents in the complex frequency domain.',
        hi: 'सम्मिश्र आवृत्ति डोमेन में थेवेनिन एवं नॉर्टन समकक्षों को परस्पर जोड़ता है।',
        bn: 'জটিল কম্পাঙ্ক ডোমেনে থেভেনিন ও নর্টন সমতুল্য রূপান্তর নির্দেশ করে।'
      },
      variables: [
        { symbol: '\\mathbf{I}_N', name: { en: 'Norton short-circuit current phasor (A)', hi: 'नॉर्टन शॉर्ट-सर्किट धारा फेजर (A)', bn: 'নর্টন শর্ট-সার্কিট কারেন্ট ফেজর (A)' } },
        { symbol: '\\mathbf{Z}_N', name: { en: 'Norton parallel impedance (Ω)', hi: 'नॉर्टन समानांतर प्रतिबाधा (Ω)', bn: 'নর্টন সমান্তরাল প্রতিবাধা (Ω)' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-ch12-l01-phasor-reduction',
      title: {
        en: 'Phasor Domain Network Representation',
        hi: 'फेजर डोमेन नेटवर्क निरूपण',
        bn: 'ফেজর ডোমেন নেটওয়ার্ক উপস্থাপন'
      },
      content: {
        en: 'In AC circuit analysis, solving multi-loop or multi-node circuits using differential equations in the time domain is computationally prohibitive. By transforming sinusoidal excitations v(t) = V_m cos(ωt + ϕ) into complex phasors V = V_rms ∠ϕ and element constitutive relations into complex impedances Z(jω), differential equations convert into algebraic equations with complex coefficients.\n\nWhen applying Thevenin\'s theorem:\n1. Identify the specific two terminals (A and B) where the load or subcircuit connects.\n2. Disconnect the load impedance Z_L.\n3. Solve the resulting circuit for the open-circuit terminal voltage phasor V_oc = V_th using nodal or mesh analysis.\n4. Determine the input impedance Z_th looking into terminals A-B with all independent voltage sources replaced by short circuits (0 V) and independent current sources replaced by open circuits (0 A).',
        hi: 'एसी परिपथ विश्लेषण में, समय डोमेन में अवकल समीकरणों को हल करना अत्यधिक जटिल होता है। ज्यावक्रीय संकेतों को फेजर एवं घटकों को सम्मिश्र प्रतिबाधाओं में बदलकर हम बीजगणितीय समीकरण प्राप्त करते हैं। थेवेनिन प्रमेय लागू करते समय लोड को हटाकर खुला वोल्टेज V_oc ज्ञात किया जाता है और स्वतंत्र स्रोतों को शून्य करके आंतरिक प्रतिबाधा Z_th की गणना की जाती है।',
        bn: 'এসি বর্তনী বিশ্লেষণে সময় ডোমেনে ব্যবকলনীয় সমীকরণ সমাধান করা জটিল। সাইনুসয়েডাল সংকেতকে ফেজর ও উপাদানগুলোকে জটিল প্রতিবাধায় রূপান্তরিত করে বীজগাণিতিক সমীকরণ তৈরি করা হয়। থেভেনিন উপপাদ্য প্রয়োগের জন্য লোড বিচ্ছিন্ন করে উন্মুক্ত ভোল্টেজ V_oc এবং স্বাধীন উৎস নিষ্ক্রিয় করে অভ্যন্তরীণ প্রতিবাধা Z_th নির্ণয় করা হয়।'
      }
    },
    {
      id: 'sec-ch12-l01-dependent-sources',
      title: {
        en: 'Handling Circuits with Dependent Sources',
        hi: 'आश्रित स्रोतों वाले परिपथों का समाधान',
        bn: 'নির্ভরশীল উৎসযুক্ত বর্তনী সমাধান'
      },
      content: {
        en: 'When an AC circuit contains dependent (controlled) voltage or current sources:\n- You CANNOT deactivate dependent sources when calculating Z_th because their control variables depend on voltages or currents in the remaining network.\n- Method 1 (V_oc / I_sc): Determine V_oc with load open, then compute the short-circuit current I_sc with terminals A-B shorted. The Thevenin impedance is Z_th = V_oc / I_sc.\n- Method 2 (Test Source): Deactivate only independent sources. Apply a fictitious 1 V ∠0° test voltage phasor across terminals A-B. Solve for the resulting test current I_test entering terminal A. Then Z_th = V_test / I_test.',
        hi: 'जब किसी एसी परिपथ में आश्रित (नियंत्रित) स्रोत होते हैं, तो Z_th ज्ञात करते समय आश्रित स्रोतों को निष्क्रिय नहीं किया जा सकता। ऐसी स्थिति में या तो Z_th = V_oc / I_sc विधि अपनाई जाती है, या स्वतंत्र स्रोतों को बंद करके टर्मिनलों पर 1 V ∠0° का परीक्षण स्रोत जोड़कर Z_th = V_test / I_test निकाला जाता है।',
        bn: 'যখন কোনো এসি বর্তনীতে নির্ভরশীল উৎস থাকে, তখন Z_th নির্ণয়ের সময় নির্ভরশীল উৎস নিষ্ক্রিয় করা যায় না। এক্ষেত্রে Z_th = V_oc / I_sc পদ্ধতি অথবা স্বাধীন উৎস বন্ধ করে টার্মিনালে ১ V ∠০° টেস্ট সোর্স যুক্ত করে Z_th = V_test / I_test গণনা করা হয়।'
      }
    },
    {
      id: 'sec-ch12-l01-norton-source-trans',
      title: {
        en: 'Norton Equivalents and Source Transformations',
        hi: 'नॉर्टन तुल्य परिपथ एवं स्रोत रूपांतरण',
        bn: 'নর্টন সমতুল্য বর্তনী ও উৎস রূপান্তর'
      },
      content: {
        en: 'The AC Norton equivalent replaces the network with an ideal sinusoidal current source I_N in parallel with impedance Z_N = Z_th.\n\nSource transformation enables rapid circuit simplification:\n- A phasor voltage source V_s in series with impedance Z_s is identical in its terminal behavior to a phasor current source I_s = V_s / Z_s in parallel with Z_s.\n- Conversely, a phasor current source I_s in parallel with Z_p transforms into a series voltage source V_s = I_s · Z_p in series with Z_p.\nThis duality allows engineers to convert bridge and ladder AC circuits into single-mesh or single-node topologies without writing full matrix equations.',
        hi: 'एसी नॉर्टन तुल्य परिपथ नेटवर्क को एक आदर्श धारा स्रोत I_N और समानांतर प्रतिबाधा Z_N = Z_th में बदल देता है। स्रोत रूपांतरण द्वारा श्रेणी वोल्टेज स्रोत को समानांतर धारा स्रोत (I_s = V_s / Z_s) में बदला जा सकता है, जिससे जटिल परिपथों को त्वरित गति से हल किया जा सकता है।',
        bn: 'এসি নর্টন সমতুল্য বর্তনী মূল নেটওয়ার্ককে একটি আদর্শ কারেন্ট সোর্স I_N ও সমান্তরাল প্রতিবাধা Z_N = Z_th দ্বারা প্রতিস্থাপন করে। উৎস রূপান্তরের মাধ্যমে একটি সিরিজ ভোল্টেজ সোর্স ও প্রতিবাধাকে সমান্তরাল কারেন্ট সোর্স ও প্রতিবাধায় রূপান্তর করে দ্রুত সমাধান করা যায়।'
      }
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch12-l01-01',
      problem: {
        en: 'An AC source V_s = 120∠0° V (RMS) at ω = 1000 rad/s feeds a series resistor R_1 = 30 Ω in series with an inductor L_1 = 40 mH (Branch Z_1). This is connected in parallel across a capacitor C_2 = 25 µF (Branch Z_2). Determine the Thevenin equivalent voltage V_th and impedance Z_th across the capacitor terminals A-B.',
        hi: 'एक एसी स्रोत V_s = 120∠0° V (ω = 1000 rad/s पर) एक श्रेणी प्रतिरोधक R_1 = 30 Ω एवं प्रेरक L_1 = 40 mH (शाखा Z_1) को ऊर्जा देता है। यह एक संधारित्र C_2 = 25 µF (शाखा Z_2) के समानांतर जुड़ा है। संधारित्र के टर्मिनलों A-B पर थेवेनिन वोल्टेज V_th एवं प्रतिबाधा Z_th ज्ञात कीजिए।',
        bn: 'একটি এসি উৎস V_s = ১২০∠০° V (ω = ১০০০ rad/s) একটি রোধ R_1 = ৩০ Ω ও আবেশক L_1 = ৪০ mH (শাখা Z_1) এর সাথে সংযুক্ত। এর সমান্তরালে একটি ধারক C_2 = ২৫ µF (শাখা Z_2) যুক্ত আছে। ধারকের টার্মিনাল A-B এর সাপেক্ষে থেভেনিন ভোল্টেজ V_th ও প্রতিবাধা Z_th নির্ণয় করুন।'
      },
      formula: {
        en: 'X_L = ωL_1, X_C = -1/(ωC_2), Z_1 = R_1 + jX_L, Z_2 = -jX_C, V_th = V_s · [Z_2 / (Z_1 + Z_2)], Z_th = (Z_1 · Z_2) / (Z_1 + Z_2)',
        hi: 'X_L = ωL_1, X_C = -1/(ωC_2), Z_1 = R_1 + jX_L, Z_2 = -jX_C, V_th = V_s · [Z_2 / (Z_1 + Z_2)], Z_th = (Z_1 · Z_2) / (Z_1 + Z_2)',
        bn: 'X_L = ωL_1, X_C = -১/(ωC_2), Z_1 = R_1 + jX_L, Z_2 = -jX_C, V_th = V_s · [Z_2 / (Z_1 + Z_2)], Z_th = (Z_1 · Z_2) / (Z_1 + Z_2)'
      },
      substitution: {
        en: 'X_L = 1000 · 0.040 = 40 Ω → Z_1 = 30 + j40 Ω = 50∠53.13° Ω.\nX_C = 1 / (1000 · 25×10^-6) = 40 Ω → Z_2 = -j40 Ω = 40∠-90° Ω.\nSum Z_1 + Z_2 = (30 + j40) + (-j40) = 30 + j0 = 30 Ω.\nV_th = 120∠0° · [40∠-90° / 30∠0°] = 160∠-90° V = -j160 V.\nZ_th = (50∠53.13° · 40∠-90°) / 30∠0° = 2000∠-36.87° / 30 = 66.67∠-36.87° Ω.',
        hi: 'X_L = 40 Ω → Z_1 = 30 + j40 Ω। X_C = 40 Ω → Z_2 = -j40 Ω।\nयोग Z_1 + Z_2 = 30 Ω।\nV_th = 120 · (-j40) / 30 = -j160 V = 160∠-90° V।\nZ_th = (30 + j40)(-j40) / 30 = (1600 - j1200) / 30 = 53.33 - j40 Ω = 66.67∠-36.87° Ω।',
        bn: 'X_L = ৪০ Ω → Z_1 = ৩০ + j৪০ Ω। X_C = ৪০ Ω → Z_2 = -j৪০ Ω।\nযোগফল Z_1 + Z_2 = ৩০ Ω।\nV_th = ১২০ · (-j৪০) / ৩০ = -j১৬০ V = ১৬০∠-৯০° V।\nZ_th = (৩০ + j৪০)(-j৪০) / ৩০ = ৫৩.৩৩ - j৪০ Ω = ৬৬.৬৭∠-৩৬.৮৭° Ω।'
      },
      calculation: {
        en: 'In rectangular form, Z_th = 66.67 · cos(-36.87°) + j 66.67 · sin(-36.87°) = 53.33 - j40.0 Ω.',
        hi: 'आयताकार रूप में, Z_th = 53.33 - j40.0 Ω।',
        bn: 'আয়তাকার রূপে, Z_th = ৫৩.৩৩ - j৪০.০ Ω।'
      },
      finalAnswer: {
        en: 'V_th = 160.0∠-90.0° V (or -j160 V); Z_th = 53.33 - j40.0 Ω = 66.67∠-36.87° Ω',
        hi: 'V_th = 160.0∠-90.0° V; Z_th = 53.33 - j40.0 Ω = 66.67∠-36.87° Ω',
        bn: 'V_th = ১৬০.০∠-৯০.০° V; Z_th = ৫৩.৩৩ - j৪০.০ Ω = ৬৬.৬৭∠-৩৬.৮৭° Ω'
      }
    },
    {
      id: 'ex-ch12-l01-02',
      problem: {
        en: 'For the circuit solved in Example 1, calculate the Norton equivalent current I_N. Then, determine the complex power S_L delivered to an inductive load Z_L = 20 + j40 Ω connected across terminals A-B.',
        hi: 'उदाहरण 1 के परिपथ के लिए नॉर्टन तुल्य धारा I_N की गणना कीजिए। इसके पश्चात टर्मिनलों A-B पर जुड़े प्रेरक भार Z_L = 20 + j40 Ω को दी गई सम्मिश्र शक्ति S_L ज्ञात कीजिए।',
        bn: 'উদাহরণ ১ এর বর্তনীর জন্য নর্টন সমতুল্য কারেন্ট I_N গণনা করুন। এরপর টার্মিনাল A-B তে যুক্ত লোড Z_L = ২০ + j৪০ Ω এ স্থানান্তরিত জটিল ক্ষমতা S_L নির্ণয় করুন।'
      },
      formula: {
        en: 'I_N = V_th / Z_th, I_L = V_th / (Z_th + Z_L), S_L = |I_L|^2 · Z_L',
        hi: 'I_N = V_th / Z_th, I_L = V_th / (Z_th + Z_L), S_L = |I_L|^2 · Z_L',
        bn: 'I_N = V_th / Z_th, I_L = V_th / (Z_th + Z_L), S_L = |I_L|^2 · Z_L'
      },
      substitution: {
        en: 'I_N = 160∠-90° / 66.67∠-36.87° = 2.40∠-53.13° A = (1.44 - j1.92) A.\nTotal series impedance Z_total = Z_th + Z_L = (53.33 - j40) + (20 + j40) = 73.33 + j0 = 73.33 Ω.\nLoad current I_L = 160∠-90° / 73.33∠0° = 2.182∠-90° A.\n|I_L| = 2.182 A.\nP_L = |I_L|^2 · R_L = (2.182)^2 · 20 = 4.76 · 20 = 95.2 W.\nQ_L = |I_L|^2 · X_L = (2.182)^2 · 40 = 4.76 · 40 = 190.4 VAR.',
        hi: 'I_N = 160∠-90° / 66.67∠-36.87° = 2.40∠-53.13° A।\nकुल प्रतिबाधा Z_total = 73.33 Ω (काल्पनिक भाग रद्द हो जाता है)।\nI_L = 160 / 73.33 = 2.182 A।\nP_L = (2.182)^2 × 20 = 95.2 W।\nQ_L = (2.182)^2 × 40 = 190.4 VAR।',
        bn: 'I_N = ১৬০∠-৯০° / ৬৬.৬৭∠-৩৬.৮৭° = ২.৪০∠-৫৩.১৩° A।\nমোট প্রতিবাধা Z_total = ৭৩.৩৩ Ω (রিঅ্যাক্ট্যান্স পরস্পর নাকচ হয়)।\nI_L = ১৬০ / ৭৩.৩৩ = ২.১৮২ A।\nP_L = (২.১৮২)^২ × ২০ = ৯৫.২ W।\nQ_L = (২.১৮২)^২ × ৪০ = ১৯০.৪ VAR।'
      },
      calculation: {
        en: 'S_L = 95.2 + j190.4 VA, with apparent power |S_L| = sqrt(95.2^2 + 190.4^2) = 212.9 VA.',
        hi: 'S_L = 95.2 + j190.4 VA, |S_L| = 212.9 VA।',
        bn: 'S_L = ৯৫.২ + j১৯০.৪ VA, |S_L| = ২১২.৯ VA।'
      },
      finalAnswer: {
        en: 'I_N = 2.40∠-53.13° A; S_L = 95.2 W + j190.4 VAR (|S_L| = 212.9 VA)',
        hi: 'I_N = 2.40∠-53.13° A; S_L = 95.2 W + j190.4 VAR',
        bn: 'I_N = ২.৪০∠-৫৩.১৩° A; S_L = ৯৫.২ W + j১৯০.৪ VAR'
      },
      }
  ],
  practicalApplications: {
    en: [
      'Power Grid Short-Circuit Capacity and Thevenin Impedance: Power utility engineers model immense 400 kV / 220 kV interconnected transmission grids as a single AC Thevenin equivalent at industrial plant substations to calculate prospective symmetrical short-circuit currents and size high-voltage circuit breakers.',
      'RF Antenna and Transmission Line Modeling: At radio frequencies, receiving antennas are represented by their AC Thevenin open-circuit signal voltage and complex antenna radiation impedance Z_ant = R_rad + jX_ant to design low-noise impedance matching front-ends.'
    ],
    hi: [
      'पावर ग्रिड शॉर्ट-सर्किट क्षमता एवं थेवेनिन प्रतिबाधा: विद्युत उपयोगिता इंजीनियर औद्योगिक सबस्टेशनों पर संभावित शॉर्ट-सर्किट धाराओं की गणना करने और उच्च-वोल्टेज सर्किट ब्रेकरों का आकार निर्धारित करने के लिए विशाल ट्रांसमिशन ग्रिड को एकल एसी थेवेनिन समकक्ष के रूप में मॉडल करते हैं।',
      'आरएफ एंटीना एवं ट्रांसमिशन लाइन मॉडलिंग: रेडियो आवृत्तियों पर, रिसीविंग एंटेना को उनके एसी थेवेनिन ओपन-सर्किट सिग्नल वोल्टेज एवं सम्मिश्र एंटीना प्रतिबाधा द्वारा दर्शाया जाता है ताकि कम-शोर वाले मिलान परिपथ डिजाइन किए जा सकें।'
    ],
    bn: [
      'পাওয়ার গ্রিড শর্ট-সার্কিট ক্ষমতা ও থেভেনিন প্রতিবাধা: বিদ্যুৎ প্রকৌশলীরা শিল্প সাবস্টেশনে শর্ট-সার্কিট কারেন্ট গণনা করতে এবং হাই-ভোল্টেজ সার্কিট ব্রেকারের রেটিং নির্ধারণ করতে বিশাল ট্রান্সমিশন গ্রিডকে একটিমাত্র এসি থেভেনিন সমতুল্য হিসেবে মডেল করেন।',
      'আরএফ অ্যান্টেনা ও ট্রান্সমিশন লাইন মডেলিং: রেডিও কম্পাঙ্কে রিসিভিং অ্যান্টেনাগুলোকে তাদের এসি থেভেনিন সিগন্যাল ভোল্টেজ এবং জটিল অ্যান্টেনা প্রতিবাধা দ্বারা প্রকাশ করে লো-নয়েজ ম্যাচিং সার্কিট ডিজাইন করা হয়।'
    ]
  },
  importantPoints: {
    en: [
      'AC Thevenin and Norton equivalents are strictly valid at a SINGLE operating frequency (ω). If the operating frequency changes, all reactive impedances change and new equivalents must be calculated.',
      'Never deactivate dependent sources when finding Z_th. Always use the open-circuit/short-circuit ratio Z_th = V_oc / I_sc or apply an external test source.'
    ],
    hi: [
      'एसी थेवेनिन एवं नॉर्टन समकक्ष केवल एक ही परिचालन आवृत्ति (ω) पर मान्य होते हैं। यदि आवृत्ति बदलती है, तो सभी प्रतिघात बदल जाते हैं और नए समकक्षों की गणना करनी पड़ती है।',
      'Z_th ज्ञात करते समय आश्रित स्रोतों को कभी निष्क्रिय न करें। सदैव Z_th = V_oc / I_sc का उपयोग करें या परीक्षण स्रोत लागू करें।'
    ],
    bn: [
      'এসি থেভেনিন ও নর্টন সমতুল্য শুধুমাত্র একটি নির্দিষ্ট কম্পাঙ্কে (ω) কার্যকর। কম্পাঙ্ক পরিবর্তিত হলে সমস্ত রিঅ্যাক্ট্যান্স পরিবর্তিত হয় এবং নতুন সমতুল্য হিসাব করতে হয়।',
      'Z_th নির্ণয়ের সময় নির্ভরশীল উৎস কখনো নিষ্ক্রিয় করবেন না। সর্বদা Z_th = V_oc / I_sc অনুপাত অথবা টেস্ট সোর্স ব্যবহার করুন।'
    ]
  },
  commonMistakes: {
    en: [
      'Mistake: Adding phasor magnitudes algebraically instead of performing complex vector addition (e.g., treating 30 + j40 as 70 Ω instead of 50∠53.13° Ω). Correction: Always maintain real (resistive) and imaginary (reactive) parts separately in rectangular form or transform into polar magnitude and angle form before multiplication and division.'
    ],
    hi: [
      'त्रुटि: सम्मिश्र सदिश योग करने के बजाय फेजर परिमाणों को सीधे जोड़ना (उदा. 30 + j40 को 50∠53.13° के बजाय 70 Ω मानना)। सुधार: गुणा एवं भाग से पहले हमेशा आयताकार रूप में वास्तविक एवं काल्पनिक भागों को अलग रखें या ध्रुवीय रूप में बदलें।'
    ],
    bn: [
      'ভুল: জটিল ভেক্টর যোগ না করে সরাসরি মান যোগ করা (যেমন ৩০ + j৪০ কে ৫০∠৫৩.১৩° এর বদলে ৭০ Ω বিবেচনা করা)। সংশোধন: গুণ ও ভাগের পূর্বে সর্বদা আয়তাকার বা পোলার রূপে বাস্তব ও কাল্পনিক অংশ সঠিকভাবে বিবেচনা করুন।'
    ]
  },
  keyTakeaways: {
    en: [
      'Any linear AC network across two terminals can be reduced to V_th in series with Z_th, or I_N in parallel with Z_N, where V_th = I_N · Z_th.'
    ],
    hi: [
      'दो टर्मिनलों पर किसी भी रैखिक एसी नेटवर्क को Z_th के साथ श्रेणी में V_th, या Z_N के साथ समानांतर में I_N में घटाया जा सकता है, जहाँ V_th = I_N · Z_th।'
    ],
    bn: [
      'যেকোনো রৈখিক এসি নেটওয়ার্ককে Z_th এর সাথে সিরিজে V_th, অথবা Z_N এর সাথে সমান্তরালে I_N দ্বারা প্রতিস্থাপন করা যায়, যেখানে V_th = I_N · Z_th।'
    ]
  },
  practiceQuestions: [
    {
      id: 'pq-ch12-l01-01',
      question: {
        en: 'Explain why the Thevenin impedance Z_th of an AC network cannot be measured directly using an ordinary DC ohmmeter across the disconnected terminals.',
        hi: 'स्पष्ट कीजिए कि किसी एसी नेटवर्क की थेवेनिन प्रतिबाधा Z_th को डिस्कनेक्ट किए गए टर्मिनलों पर साधारण डीसी ओह्ममीटर से सीधे क्यों नहीं मापा जा सकता।',
        bn: 'ব্যাখ্যা করুন কেন কোনো এসি নেটওয়ার্কের থেভেনিন প্রতিবাধা Z_th সাধারণ ডিসি ওহমমিটার দিয়ে সরাসরি পরিমাপ করা যায় না।'
      },
      hint: {
        en: 'Consider the frequency dependence of inductors (ωL) and capacitors (1/ωC) and how a DC meter uses 0 Hz (DC) test currents.',
        hi: 'प्रेरकों (ωL) और संधारित्रों (1/ωC) की आवृत्ति निर्भरता पर विचार करें और ध्यान दें कि डीसी मीटर 0 Hz धारा का उपयोग करता है।',
        bn: 'আবেশক (ωL) ও ধারকের (১/ωC) কম্পাঙ্ক নির্ভরতা এবং ডিসি মিটারের ০ Hz টেস্ট কারেন্ট ব্যবহারের বিষয়টি বিবেচনা করুন।'
      }
    },
    {
      id: 'pq-ch12-l01-02',
      question: {
        en: 'An AC circuit has an open-circuit voltage V_oc = 100∠30° V and short-circuit current I_sc = 5∠-15° A. Find its Thevenin impedance Z_th in rectangular form.',
        hi: 'एक एसी परिपथ में ओपन-सर्किट वोल्टेज V_oc = 100∠30° V एवं शॉर्ट-सर्किट धारा I_sc = 5∠-15° A है। इसका थेवेनिन प्रतिबाधा Z_th आयताकार रूप में ज्ञात कीजिए।',
        bn: 'একটি এসি বর্তনীতে ওপেন-সার্কিট ভোল্টেজ V_oc = ১০০∠৩০° V এবং শর্ট-সার্কিট কারেন্ট I_sc = ৫∠-১৫° A। এর থেভেনিন প্রতিবাধা Z_th আয়তাকার রূপে নির্ণয় করুন।'
      },
      hint: {
        en: 'Z_th = V_oc / I_sc = (100 / 5) ∠(30° - (-15°)) = 20∠45° Ω = 20(cos 45° + j sin 45°).',
        hi: 'Z_th = V_oc / I_sc = 20∠45° Ω = 14.14 + j14.14 Ω।',
        bn: 'Z_th = V_oc / I_sc = ২০∠৪৫° Ω = ১৪.১৪ + j১৪.১৪ Ω।'
      }
    }
  ],
  mcqs: [
    {
      id: 'mcq-ch12-l01-01',
      question: {
        en: 'In sinusoidal steady-state analysis, what does the AC Thevenin voltage V_th represent?',
        hi: 'ज्यावक्रीय स्थिर-अवस्था विश्लेषण में, एसी थेवेनिन वोल्टेज V_th क्या दर्शाता है?',
        bn: 'সাইনুসয়েডাল স্থির-অবস্থা বিশ্লেষণে এসি থেভেনিন ভোল্টেজ V_th কী নির্দেশ করে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'The RMS voltage across the source inside the network', hi: 'नेटवर्क के अंदर स्रोत का RMS वोल्टेज', bn: 'নেটওয়ার্কের অভ্যন্তরীণ উৎসের আরএমএস ভোল্টেজ' } },
        { id: 'opt-2', text: { en: 'The open-circuit phasor voltage appearing across the unloaded load terminals', hi: 'लोड रहित टर्मिनलों पर दिखने वाला ओपन-सर्किट फेजर वोल्टेज', bn: 'লোডমুক্ত টার্মিনালে দৃশ্যমান ওপেন-সার্কিট ফেজর ভোল্টেজ' } },
        { id: 'opt-3', text: { en: 'The voltage when the output terminals are short-circuited', hi: 'आउटपुट टर्मिनलों के शॉर्ट-सर्किट होने पर वोल्टेज', bn: 'আউটপুট টার্মিনাল শর্ট করা অবস্থায় ভোল্টেজ' } },
        { id: 'opt-4', text: { en: 'The instantaneous DC offset voltage', hi: 'तत्कालिक डीसी ऑफसेट वोल्टेज', bn: 'তাৎক্ষণিক ডিসি অফসেট ভোল্টেজ' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'Thevenin voltage V_th is defined strictly as the open-circuit voltage phasor V_oc measured across the output terminals when the external load impedance is disconnected.',
        hi: 'थेवेनिन वोल्टेज V_th को बाह्य लोड प्रतिबाधा हटाने पर आउटपुट टर्मिनलों पर मापे गए ओपन-सर्किट वोल्टेज फेजर V_oc के रूप में परिभाषित किया जाता है।',
        bn: 'থেভেনিন ভোল্টেজ V_th হলো বহিরাগত লোড বিচ্ছিন্ন অবস্থায় আউটপুট টার্মিনালে পরিমাপকৃত ওপেন-সার্কিট ভোল্টেজ ফেজর V_oc।'
      }
    },
    {
      id: 'mcq-ch12-l01-02',
      question: {
        en: 'When deactivating an independent AC voltage source to compute Thevenin impedance Z_th, the source is replaced by:',
        hi: 'थेवेनिन प्रतिबाधा Z_th की गणना के लिए स्वतंत्र एसी वोल्टेज स्रोत को निष्क्रिय करते समय स्रोत को किससे बदला जाता है?',
        bn: 'থেভেনিন প্রতিবাধা Z_th গণনার সময় স্বাধীন এসি ভোল্টেজ উৎস নিষ্ক্রিয় করতে উৎসটিকে কী দ্বারা প্রতিস্থাপন করা হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'An open circuit (infinite impedance)', hi: 'एक ओपन सर्किट (अनंत प्रतिबाधा)', bn: 'একটি ওপেন সার্কিট (অসীম প্রতিবাধা)' } },
        { id: 'opt-2', text: { en: 'A short circuit (zero impedance)', hi: 'एक शॉर्ट सर्किट (शून्य प्रतिबाधा)', bn: 'একটি শর্ট সার্কিট (শূন্য প্রতিবাধা)' } },
        { id: 'opt-3', text: { en: 'A 50 Ω terminating resistor', hi: 'एक 50 Ω टर्मिनेटिंग प्रतिरोधक', bn: 'একটি ৫০ Ω রোধ' } },
        { id: 'opt-4', text: { en: 'Its internal capacitive reactance', hi: 'इसकी आंतरिक धारिता प्रतिघात', bn: 'এর অভ্যন্তরীণ ধারকীয় রিঅ্যাক্ট্যান্স' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'An ideal voltage source maintains zero potential difference when turned off (V = 0), which physically corresponds to an ideal short circuit.',
        hi: 'एक आदर्श वोल्टेज स्रोत बंद होने पर शून्य विभवांतर (V = 0) बनाए रखता है, जो शॉर्ट सर्किट के अनुरूप है।',
        bn: 'একটি আদর্শ ভোল্টেজ উৎস নিষ্ক্রিয় অবস্থায় শূন্য বিভব পার্থক্য (V = ০) বজায় রাখে, যা শর্ট সার্কিটের সমতুল্য।'
      }
    },
    {
      id: 'mcq-ch12-l01-03',
      question: {
        en: 'How are the phasor Norton current I_N and Thevenin voltage V_th related?',
        hi: 'फेजर नॉर्टन धारा I_N एवं थेवेनिन वोल्टेज V_th कैसे संबंधित हैं?',
        bn: 'ফেজর নর্টন কারেন্ট I_N ও থেভেনিন ভোল্টেজ V_th কীভাবে সম্পর্কিত?'
      },
      options: [
        { id: 'opt-1', text: { en: 'I_N = V_th · Z_th', hi: 'I_N = V_th · Z_th', bn: 'I_N = V_th · Z_th' } },
        { id: 'opt-2', text: { en: 'I_N = V_th / Z_th', hi: 'I_N = V_th / Z_th', bn: 'I_N = V_th / Z_th' } },
        { id: 'opt-3', text: { en: 'I_N = V_th + Z_th', hi: 'I_N = V_th + Z_th', bn: 'I_N = V_th + Z_th' } },
        { id: 'opt-4', text: { en: 'I_N = Z_th / V_th', hi: 'I_N = Z_th / V_th', bn: 'I_N = Z_th / V_th' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'By Ohm’s law in the phasor domain, the short-circuit Norton current is I_N = V_oc / Z_th = V_th / Z_th.',
        hi: 'फेजर डोमेन में ओम के नियम से, शॉर्ट-सर्किट नॉर्टन धारा I_N = V_th / Z_th होती है।',
        bn: 'ফেজর ডোমেনে ওহমের সূত্রানুসারে, শর্ট-সার্কিট নর্টন কারেন্ট I_N = V_th / Z_th।'
      }
    },
    {
      id: 'mcq-ch12-l01-04',
      question: {
        en: 'If an AC circuit contains dependent sources, which method must NOT be used to find Z_th?',
        hi: 'यदि किसी एसी परिपथ में आश्रित स्रोत हैं, तो Z_th ज्ञात करने के लिए किस विधि का उपयोग नहीं किया जाना चाहिए?',
        bn: 'যদি কোনো এসি বর্তনীতে নির্ভরশীল উৎস থাকে, তবে Z_th নির্ণয়ে কোন পদ্ধতিটি ব্যবহার করা যাবে না?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Taking the ratio of open-circuit voltage to short-circuit current (V_oc / I_sc)', hi: 'ओपन-सर्किट वोल्टेज एवं शॉर्ट-सर्किट धारा का अनुपात (V_oc / I_sc) लेना', bn: 'ওপেন-সার্কিট ভোল্টেজ ও শর্ট-সার্কিট কারেন্টের অনুপাত (V_oc / I_sc) নেওয়া' } },
        { id: 'opt-2', text: { en: 'Applying an external test source V_test and finding V_test / I_test', hi: 'बाह्य परीक्षण स्रोत लगाकर V_test / I_test ज्ञात करना', bn: 'বহিরাগত টেস্ট সোর্স প্রয়োগ করে V_test / I_test নির্ণয় করা' } },
        { id: 'opt-3', text: { en: 'Deactivating dependent sources by replacing them with shorts or opens', hi: 'आश्रित स्रोतों को शॉर्ट या ओपन से बदलकर निष्क्रिय करना', bn: 'নির্ভরশীল উৎসগুলোকে শর্ট বা ওপেন করে নিষ্ক্রিয় করা' } },
        { id: 'opt-4', text: { en: 'Deactivating only independent sources while keeping dependent sources active with a test source', hi: 'केवल स्वतंत्र स्रोतों को निष्क्रिय करना जबकि आश्रित स्रोतों को सक्रिय रखना', bn: 'কেবল স্বাধীন উৎস নিষ্ক্রিয় রেখে নির্ভরশীল উৎস সক্রিয় রাখা' } }
      ],
      correctOptionId: 'opt-3',
      explanation: {
        en: 'Dependent sources cannot be deactivated independently because their controlled output is driven by currents/voltages elsewhere in the active network.',
        hi: 'आश्रित स्रोतों को स्वतंत्र रूप से निष्क्रिय नहीं किया जा सकता क्योंकि उनका आउटपुट परिपथ के अन्य चरों पर निर्भर करता है।',
        bn: 'নির্ভরশীল উৎসগুলোকে সরাসরি নিষ্ক্রিয় করা যায় না কারণ তাদের মান বর্তনীর অন্যান্য উপাদানের কারেন্ট বা ভোল্টেজের ওপর নির্ভরশীল।'
      }
    },
    {
      id: 'mcq-ch12-l01-05',
      question: {
        en: 'An AC network has V_oc = 50∠0° V and Z_th = 3 + j4 Ω. What is the magnitude of the short-circuit Norton current |I_N|?',
        hi: 'एक एसी नेटवर्क में V_oc = 50∠0° V एवं Z_th = 3 + j4 Ω है। शॉर्ट-सर्किट नॉर्टन धारा का परिमाण |I_N| क्या है?',
        bn: 'একটি এসি নেটওয়ার্কে V_oc = ৫০∠০° V এবং Z_th = ৩ + j৪ Ω। শর্ট-সার্কিট নর্টন কারেন্টের মান |I_N| কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '50 A', hi: '50 A', bn: '৫০ A' } },
        { id: 'opt-2', text: { en: '10 A', hi: '10 A', bn: '১০ A' } },
        { id: 'opt-3', text: { en: '7.14 A', hi: '7.14 A', bn: '৭.১৪ A' } },
        { id: 'opt-4', text: { en: '12.5 A', hi: '12.5 A', bn: '১২.৫ A' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: '|Z_th| = sqrt(3^2 + 4^2) = 5 Ω. Therefore, |I_N| = |V_oc| / |Z_th| = 50 / 5 = 10 A.',
        hi: '|Z_th| = sqrt(3^2 + 4^2) = 5 Ω। अतः |I_N| = 50 / 5 = 10 A।',
        bn: '|Z_th| = রুট(৩^২ + ৪^২) = ৫ Ω। সুতরাং |I_N| = ৫০ / ৫ = ১০ A।'
      }
    },
    {
      id: 'mcq-ch12-l01-06',
      question: {
        en: 'If the operating frequency ω of an AC circuit doubles, what happens to its Thevenin equivalent parameters?',
        hi: 'यदि किसी एसी परिपथ की परिचालन आवृत्ति ω दोगुनी हो जाती है, तो इसके थेवेनिन समकक्ष प्राचलों का क्या होता है?',
        bn: 'যদি কোনো এসি বর্তনীর অপারেটিং কম্পাঙ্ক ω দ্বিগুণ হয়, তবে এর থেভেনিন সমতুল্য প্যারামিটারগুলোর কী পরিবর্তন ঘটে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'They remain completely unchanged because resistance is constant', hi: 'वे पूरी तरह अपरिवर्तित रहते हैं क्योंकि प्रतिरोध स्थिर है', bn: 'তারা সম্পূর্ণ অপরিবর্তিত থাকে কারণ রোধ ধ্রুবক' } },
        { id: 'opt-2', text: { en: 'Both V_th and Z_th generally change because inductive (ωL) and capacitive (-1/ωC) reactances are frequency-dependent', hi: 'V_th और Z_th दोनों सामान्यतः बदल जाते हैं क्योंकि प्रेरक और धारिता प्रतिघात आवृत्ति पर निर्भर करते हैं', bn: 'V_th এবং Z_th উভয়ই পরিবর্তিত হয় কারণ আবেশীয় ও ধারকীয় রিঅ্যাক্ট্যান্স কম্পাঙ্কের ওপর নির্ভরশীল' } },
        { id: 'opt-3', text: { en: 'Only V_th changes, Z_th is invariant', hi: 'केवल V_th बदलता है, Z_th अपरिवर्तनीय है', bn: 'কেবল V_th পরিবর্তিত হয়, Z_th অপরিবর্তিত থাকে' } },
        { id: 'opt-4', text: { en: 'The circuit ceases to be linear', hi: 'परिपथ रैखिक नहीं रह जाता', bn: 'বর্তনীটি আর রৈখিক থাকে না' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'Inductive reactance XL = ωL and capacitive reactance XC = 1/(ωC) depend directly on frequency. A change in ω alters the impedance of reactive branches, altering both V_th and Z_th.',
        hi: 'आवृत्ति बदलने से प्रेरकीय एवं धारितीय प्रतिघात बदल जाते हैं, जिससे V_th एवं Z_th दोनों का मान बदल जाता है।',
        bn: 'কম্পাঙ্ক পরিবর্তিত হলে আবেশীয় ও ধারকীয় রিঅ্যাক্ট্যান্সের পরিবর্তনের ফলে V_th এবং Z_th উভয়ই পরিবর্তিত হয়।'
      }
    },
    {
      id: 'mcq-ch12-l01-07',
      question: {
        en: 'A Thevenin equivalent has Z_th = 20 - j15 Ω. What is the nature of this internal impedance?',
        hi: 'एक थेवेनिन समकक्ष में Z_th = 20 - j15 Ω है। इस आंतरिक प्रतिबाधा की प्रकृति क्या है?',
        bn: 'একটি থেভেনিন সমতুল্য বর্তনীতে Z_th = ২০ - j১৫ Ω। এই অভ্যন্তরীণ প্রতিবাধার প্রকৃতি কেমন?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Purely inductive', hi: 'विशुद्ध प्रेरक', bn: 'বিশুদ্ধ আবেশীয়' } },
        { id: 'opt-2', text: { en: 'Resistive with capacitive reactance', hi: 'धारिता प्रतिघात के साथ प्रतिरोधी', bn: 'ধারকীয় রিঅ্যাক্ট্যান্সযুক্ত রোধীয়' } },
        { id: 'opt-3', text: { en: 'Resistive with inductive reactance', hi: 'प्रेरक प्रतिघात के साथ प्रतिरोधी', bn: 'আবেশীয় রিঅ্যাক্ট্যান্সযুক্ত রোধীয়' } },
        { id: 'opt-4', text: { en: 'Non-linear active impedance', hi: 'गैर-रैखिक सक्रिय प्रतिबाधा', bn: 'অরৈখিক সক্রিয় প্রতিবাধা' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'A negative imaginary part (-j15 Ω) represents capacitive reactance (X_C = -1/(ωC)), while the real part (20 Ω) is resistance.',
        hi: 'ऋणात्मक काल्पनिक भाग (-j15 Ω) धारिता प्रतिघात को दर्शाता है, जबकि वास्तविक भाग (20 Ω) प्रतिरोध है।',
        bn: 'ঋণাত্মক কাল্পনিক অংশ (-j১৫ Ω) ধারকীয় রিঅ্যাক্ট্যান্স প্রকাশ করে এবং বাস্তব অংশ (২০ Ω) রোধ নির্দেশ করে।'
      }
    },
    {
      id: 'mcq-ch12-l01-08',
      question: {
        en: 'In source transformation, converting a phasor current source I_s in parallel with Z_s into a Thevenin equivalent results in:',
        hi: 'स्रोत रूपांतरण में, Z_s के समानांतर फेजर धारा स्रोत I_s को थेवेनिन समकक्ष में बदलने पर क्या प्राप्त होता है?',
        bn: 'উৎস রূপান্তরে Z_s এর সাথে সমান্তরালে থাকা কারেন্ট সোর্স I_s কে থেভেনিন সমতুল্যে রূপান্তর করলে কী পাওয়া যায়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'A voltage source V_s = I_s · Z_s in series with Z_s', hi: 'Z_s के साथ श्रेणी में वोल्टेज स्रोत V_s = I_s · Z_s', bn: 'Z_s এর সাথে শ্রেণিতে যুক্ত ভোল্টেজ সোর্স V_s = I_s · Z_s' } },
        { id: 'opt-2', text: { en: 'A voltage source V_s = I_s / Z_s in series with Z_s', hi: 'Z_s के साथ श्रेणी में वोल्टेज स्रोत V_s = I_s / Z_s', bn: 'Z_s এর সাথে শ্রেণিতে যুক্ত ভোল্টেজ সোর্স V_s = I_s / Z_s' } },
        { id: 'opt-3', text: { en: 'A voltage source V_s = I_s · Z_s in parallel with 1/Z_s', hi: '1/Z_s के साथ समानांतर में वोल्टेज स्रोत V_s = I_s · Z_s', bn: '১/Z_s এর সাথে সমান্তরালে যুক্ত ভোল্টেজ সোর্স V_s = I_s · Z_s' } },
        { id: 'opt-4', text: { en: 'Zero equivalent impedance', hi: 'शून्य तुल्य प्रतिबाधा', bn: 'শূন্য সমতুল্য প্রতিবাধা' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'By source transformation, a parallel current source I_s with impedance Z_s transforms into a series voltage source V_s = I_s · Z_s with the same series impedance Z_s.',
        hi: 'स्रोत रूपांतरण के अनुसार, समानांतर धारा स्रोत I_s और प्रतिबाधा Z_s, श्रेणी वोल्टेज स्रोत V_s = I_s · Z_s और समान श्रेणी प्रतिबाधा Z_s में बदल जाते हैं।',
        bn: 'উৎস রূপান্তর নীতি অনুসারে, সমান্তরাল কারেন্ট সোর্স I_s ও প্রতিবাধা Z_s একটি সিরিজ ভোল্টেজ সোর্স V_s = I_s · Z_s এবং একই সিরিজ প্রতিবাধা Z_s এ রূপান্তরিত হয়।'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-ch12-l01-01',
      title: {
        en: 'AC Thevenin and Norton Equivalents in the Phasor Domain',
        hi: 'परिपथ योजनाबद्ध आरेख',
        bn: 'বর্তনী স্কিম্যাটিক চিত্র'
      },
      caption: {
        en: 'AC Thevenin and Norton Equivalents in the Phasor Domain',
        hi: 'फेजर डोमेन में एसी थेवेनिन एवं नॉर्टन समकक्ष परिपथ',
        bn: 'ফেজর ডোমেনে এসি থেভেনিন ও নর্টন সমতুল্য বর্তনী'
      },
      svgType: 'circuit-ch12-ac-thevenin-norton'
    }
  ]
};
