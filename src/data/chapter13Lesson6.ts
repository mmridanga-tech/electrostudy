import { Lesson } from '../types';

export const LESSON_HARMONICS_RESONANCE_DETUNING: Lesson = {
  id: 'lsn-ch13-harmonics-capacitor-resonance',
  topicId: 'tp-harmonic-pfc-interaction',
  chapterId: 'ch-power-factor',
  order: 6,
  title: {
    en: 'Harmonics, Resonance & Detuned Filter Design',
    hi: 'हार्मोनिक्स, अनुनाद एवं डिट्यून्ड फिल्टर डिज़ाइन',
    bn: 'হারমোনিকস, রেজোন্যান্স ও ডিটিউনড ফিল্টার ডিজাইন'
  },
  description: {
    en: 'Examine the dangerous interaction between non-linear harmonic loads (VFDs, rectifiers) and standard shunt capacitor banks. Calculate the parallel resonance frequency h_res = √(S_sc / Q_c), analyze the root cause of capacitor thermal explosions, design series detuned reactors (p = 5.67%, 7%, 14%), and calculate the mandatory capacitor terminal overvoltage rating V_cap = V_bus / (1 - p).',
    hi: 'नॉन-लीनियर लोड (VFDs, रेक्टिफायर) और साधारण शंट कैपेसिटर बैंकों के बीच खतरनाक अंतःक्रिया का गहन अध्ययन। समानांतर अनुनाद आवृत्ति h_res = √(S_sc / Q_c) की गणना करें, कैपेसिटर विस्फोट के मूल कारणों का विश्लेषण करें, सीरीज डिट्यून्ड रिएक्टरों (p = 5.67%, 7%, 14%) का डिज़ाइन करें, और कैपेसिटर ओवरवोल्टेज रेटिंग V_cap = V_bus / (1 - p) की गणना सीखें।',
    bn: 'নন-লিনিয়ার লোড (VFD, রেকটিফায়ার) এবং স্ট্যান্ডার্ড শান্ট ক্যাপাসিটর ব্যাংকের মধ্যকার বিপজ্জনক মিথস্ক্রিয়া বিশ্লেষণ। প্যারালাল রেজোন্যান্স কম্পাঙ্ক h_res = √(S_sc / Q_c) নির্ণয়, ক্যাপাসিটর বিস্ফোরণের কারণ অনুসন্ধান, সিরিজ ডিটিউনড রিঅ্যাক্টর ডিজাইন (p = ৫.৬৭%, ৭%, ১৪%) এবং ক্যাপাসিটরের ভোল্টেজ রেটিং বৃদ্ধি V_cap = V_bus / (1 - p) এর বিশদ প্রকৌশল রূপরেখা।'
  },
  estimatedMinutes: 55,
  easyExplanation: {
    en: 'Adding a standard capacitor bank to a modern factory with variable frequency drives (VFDs) is like putting a microphone right in front of a giant loudspeaker: at a certain frequency, it creates a deafening, destructive acoustic feedback screech. In an electrical network, the transformer has inductance, and the capacitor bank has capacitance. Together, they form an electrical tuning tank. If this tank resonates at the 5th or 7th harmonic created by motor drives, harmonic currents get amplified by 500% to 1,000%! The capacitors overheat, swell up, and explode. To prevent this disaster, engineers install a "Detuning Reactor" (an inductive coil) in series with the capacitor. This alters the tuning frequency below the 5th harmonic, making the capacitor bank look like an inductor to all harmonic currents and completely eliminating resonance!',
    hi: 'आधुनिक VFD मोटरों वाले कारखाने में साधारण कैपेसिटर लगाना लाउडस्पीकर के सामने माइक रखने जैसा है: एक खास फ्रीक्वेंसी पर भयानक सीटी जैसी आवाज (फीडबैक) उत्पन्न होती है। ग्रिड में ट्रांसफार्मर के पास प्रेरकत्व (इंडक्टेंस) होता है और कैपेसिटर के पास धारिता (कैपेसिटेंस)। ये दोनों मिलकर एक ट्यूनिंग सर्किट बनाते हैं। यदि यह ट्यूनिंग VFD द्वारा उत्पन्न 5वें या 7वें हार्मोनिक से मेल खा जाती है, तो हार्मोनिक करंट 5 से 10 गुना बढ़ जाता है! कैपेसिटर फूलकर फट जाते हैं। इस विनाश को रोकने के लिए कैपेसिटर के साथ श्रेणी में एक "डिट्यून्ड रिएक्टर" (कॉइल) जोड़ा जाता है। यह अनुनाद (रेज़ोनेंस) को पूरी तरह समाप्त कर देता है!',
    bn: 'আধুনিক কারখানায় VFD মোটরের সাথে সাধারণ ক্যাপাসিটর ব্যাংক লাগানো হলো লাউডস্পিকারের সামনে মাইক্রোফোন ধরার মতো: একটি নির্দিষ্ট কম্পাঙ্কে তীব্র ও ধ্বংসাত্মক ফিডব্যাক তৈরি হয়। ট্রান্সফরমারের ইন্ডাক্ট্যান্স এবং ক্যাপাসিটর ব্যাংক একসাথে একটি অনুনাদী সার্কিট তৈরি করে। মোটর ড্রাইভের ৫ম বা ৭ম হারমোনিকের সাথে এই সার্কিটের রেজোন্যান্স ঘটলে হারমোনিক কারেন্ট ৫০০% থেকে ১০০০% পর্যন্ত বৃদ্ধি পায়! ফলে ক্যাপাসিটর অতিরিক্ত গরম হয়ে বিস্ফোরিত হয়। এই বিপর্যয় রোধ করতে প্রকৌশলীরা ক্যাপাসিটরের সাথে সিরিজে একটি "ডিটিউনড রিঅ্যাক্টর" (কয়েল) যুক্ত করেন। এটি রেজোন্যান্সের কম্পাঙ্ক পরিবর্তন করে ক্যাপাসিটর ব্যাংকের বিস্ফোরণ স্থায়ীভাবে রোধ করে।'
  },
  detailedExplanation: {
    en: 'Modern industrial networks are dominated by non-linear electronic loads: Variable Frequency Drives (VFDs), uninterruptible power supplies (UPS), arc furnaces, and LED lighting. A 6-pulse bridge rectifier draws harmonic currents at orders:\nh = 6k ± 1 = 5th (250 Hz), 7th (350 Hz), 11th (550 Hz), 13th (650 Hz)...\n\n1. The Mechanism of Harmonic Parallel Resonance:\nAt any industrial bus, the upstream grid and substation transformer appear as a series inductive reactance: X_tx(h) = h · X_tx1.\nA shunt capacitor bank connected to the bus presents a capacitive reactance: X_c(h) = X_c1 / h.\nFrom the perspective of harmonic current sources on the plant bus, the transformer inductance and the capacitor bank are connected in PARALLEL. The parallel impedance is:\nZ_parallel(h) = [j(h·X_tx1) · (-jX_c1/h)] / [j(h·X_tx1 - X_c1/h)] = [X_tx1 · X_c1] / [j(h·X_tx1 - X_c1/h)]\nWhen h·X_tx1 = X_c1 / h, the denominator drops to zero, and the bus impedance approaches infinity (limited only by network damping resistance). This is Parallel Resonance.\nThe resonant harmonic order is given by:\nh_res = √(S_sc / Q_c) = √(X_c1 / X_tx1)\nwhere S_sc is the short-circuit capacity of the incoming substation (in kVA/MVA) and Q_c is the capacitor bank rating (in kVAR/MVAR).\nIf h_res lands near the 5th (4.8–5.2) or 7th (6.7–7.2) harmonic, the harmonic current injected by drives is amplified by the circuit Quality Factor Q_f (typically 5 to 10). This creates severe voltage distortion (THD_v > 15–30%), blowing fuses, causing nuisance breaker trips, and detonating capacitor cans.\n\n2. Detuned Reactor Solution:\nTo neutralize resonance, a series iron-core or air-core Detuning Reactor (L_d) is connected in series with each capacitor stage (C).\nThe detuning factor p is defined as the ratio of reactor impedance to capacitor impedance at fundamental frequency (50 Hz):\np = X_L / X_C (expressed as a percentage: 5.67%, 7%, or 14%)\nThe resonant tuning frequency of the combined LC branch is:\nf_tune = f_grid / √p\n- For p = 7% (0.07): f_tune = 50 / √0.07 = 189 Hz (order 3.78)\n- For p = 5.67% (0.0567): f_tune = 50 / √0.0567 = 210 Hz (order 4.2)\n- For p = 14% (0.14): f_tune = 50 / √0.14 = 134 Hz (order 2.67)\n\n3. The Duality Principle of Detuned Filters:\n- At 50 Hz fundamental frequency: X_C > X_L. The branch remains net CAPACITIVE: X_net = X_C - X_L = X_C · (1 - p). It delivers the required reactive power for power factor correction!\n- At all harmonic frequencies (h ≥ 5, 250 Hz+): Because inductive reactance grows as h·X_L while capacitive reactance shrinks as X_C/h, the reactor dominates: h·X_L > X_C/h. The entire bank becomes NET INDUCTIVE to all harmonic orders! Since both the grid and the capacitor bank are inductive, parallel resonance is mathematically impossible!\n\n4. Terminal Overvoltage on Capacitors with Detuned Reactors:\nThe series reactor causes a fundamental voltage rise at the capacitor terminals:\nV_cap = V_bus / (1 - p)\nFor a 415 V bus with a 7% reactor: V_cap = 415 V / (1 - 0.07) = 446.2 V. Factoring in utility overvoltage tolerances (+10%), the capacitor will see continuous voltages exceeding 490 V. Therefore, standard 415 V rated capacitors CANNOT be used with 7% detuned reactors; heavy-duty capacitors rated for 480 V, 525 V, or 690 V are mandatory.',
    hi: 'औद्योगिक नेटवर्कों में हार्मोनिक्स और रेज़ोनेंस:\n\n1. हार्मोनिक समानांतर अनुनाद (Parallel Resonance):\nट्रांसफार्मर का इंडक्टेंस X_tx और कैपेसिटर X_c मिलकर हार्मोनिक्स के लिए एक समानांतर सर्किट बनाते हैं।\nअनुनाद आवृत्ति: h_res = √(S_sc / Q_c)।\nयदि यह 5वें (250 Hz) या 7वें (350 Hz) हार्मोनिक से मेल खा जाती है, तो हार्मोनिक धारा 5 से 10 गुना तक बढ़ जाती है, जिससे भयंकर वोल्टेज विकृति (THD) उत्पन्न होती है और कैपेसिटर फट जाते हैं।\n\n2. डिट्यून्ड रिएक्टर (Detuned Reactor):\nकैपेसिटर के साथ श्रेणी में एक इंडक्टर (रिएक्टर) लगाया जाता है जिसका डिट्यूनिंग फैक्टर p = X_L / X_C होता है (जैसे 7% या 14%)।\nट्यूनिंग आवृत्ति: f_tune = f / √p। 7% रिएक्टर के लिए f_tune = 189 Hz होती है जो 5वें हार्मोनिक (250 Hz) से काफी नीचे है।\n- 50 Hz पर यह कैपेसिटिव रहता है और पावर फैक्टर सुधारता है।\n- 250 Hz और उससे ऊपर यह इंडक्टिव बन जाता है, जिससे अनुनाद असंभव हो जाता है।\n\n3. कैपेसिटर पर वोल्टेज वृद्धि:\nरिएक्टर के कारण कैपेसिटर टर्मिनलों पर वोल्टेज बढ़ जाता है: V_cap = V_bus / (1 - p)।\n415 V पर 7% रिएक्टर लगाने से कैपेसिटर पर 446 V आता है। इसलिए साधारण 415 V कैपेसिटर के स्थान पर हमेशा 480 V या 525 V रेटेड कैपेसिटर ही लगाए जाने चाहिए।',
    bn: 'হারমোনিকস ও রেজোন্যান্সের প্রকৌশল নীতি:\n\n১. প্যারালাল রেজোন্যান্স:\nসাবস্টেশন ট্রান্সফরমারের ইন্ডাক্ট্যান্স এবং কারখানার ক্যাপাসিটর ব্যাংক সমান্তরালে যুক্ত হয়ে প্যারালাল রেজোন্যান্ট সার্কিট তৈরি করে।\nরেজোন্যান্স কম্পাঙ্ক: h_res = √(S_sc / Q_c)।\nযদি h_res ৫ম (২৫০ Hz) বা ৭ম (৩৫০ Hz) হারমোনিকের কাছাকাছি হয়, তবে কারেন্ট বহুগুণ বিবর্ধিত হয় এবং মারাত্মক ভোল্টেজ বিকৃতি (THD) সহ ক্যাপাসিটর বিস্ফোরিত হয়।\n\n২. ডিটিউনড রিঅ্যাক্টর:\nক্যাপাসিটরের সাথে সিরিজে একটি ইন্ডাক্টর যুক্ত করা হয় যার ডিটিউনিং ফ্যাক্টর p = X_L / X_C (সাধারণত ৭% বা ১৪%)।\nটউনিং কম্পাঙ্ক: f_tune = f / √p। ৭% রিঅ্যাক্টরের জন্য f_tune = ১৮৯ Hz।\n- ৫০ Hz এ এটি ক্যাপাসিটিভ থাকে এবং পাওয়ার ফ্যাক্টর সংশোধন করে।\n- ২৫০ Hz বা তার বেশি কম্পাঙ্কে এটি ইন্ডাক্টিভ আচরণ করে, ফলে প্যারালাল রেজোন্যান্স হওয়া তাত্ত্বিকভাবে অসম্ভব হয়ে পড়ে।\n\n৩. টার্মিনাল ভোল্টেজ বৃদ্ধি:\nসিরিজ রিঅ্যাক্টরের কারণে ক্যাপাসিটরের ওপর ভোল্টেজ বৃদ্ধি পায়: V_cap = V_bus / (1 - p)।\n৪১৫ V লাইনে ৭% রিঅ্যাক্টর লাগালে ক্যাপাসিটরে ৪৪৬ V তৈরি হয়। এই কারণে সাধারণ ৪১৫ V ক্যাপাসিটরের পরিবর্তে ৪৮০ V বা ৫২৫ V রেটিংয়ের ক্যাপাসিটর ব্যবহার করা আবশ্যক।'
  },
  formulas: [
    {
      id: 'f-parallel-resonance-order',
      symbol: 'h_{\\text{res}}',
      expression: 'h_{\\text{res}} = \\sqrt{\\frac{S_{\\text{sc}}}{Q_C}} = \\sqrt{\\frac{X_{C1}}{X_{\\text{tx}1}}}',
      title: {
        en: 'System Parallel Harmonic Resonance Order',
        hi: 'सिस्टम समानांतर हार्मोनिक अनुनाद क्रम',
        bn: 'প্যারালাল হারমোনিক রেজোন্যান্স অর্ডার সমীকরণ'
      },
      description: {
        en: 'Calculates the harmonic order h at which the substation transformer inductance and shunt capacitor bank enter destructive parallel resonance.',
        hi: 'उस हार्मोनिक क्रम h की गणना करता है जिस पर ट्रांसफार्मर प्रेरकत्व और कैपेसिटर बैंक समानांतर अनुनाद में प्रवेश करते हैं।',
        bn: 'যে হারমোনিক অর্ডারে ট্রান্সফরমার ইন্ডাক্ট্যান্স ও ক্যাপাসিটর ব্যাংক সমান্তরাল রেজোন্যান্সে লিপ্ত হয় তা নির্ণয় করে।'
      },
      variables: [
        { symbol: 'h_{\\text{res}}', name: { en: 'Resonant harmonic order (e.g., 5.0 = 250 Hz)', hi: 'अनुनादी हार्मोनिक क्रम', bn: 'রেজোন্যান্ট হারমোনিক অর্ডার' } },
        { symbol: 'S_{\\text{sc}}', name: { en: 'Transformer short-circuit fault capacity (kVA or MVA)', hi: 'ट्रांसफार्मर शॉर्ट-सर्किट क्षमता', bn: 'ট্রান্সফরমার শর্ট-সার্কিট ক্ষমতা' } },
        { symbol: 'Q_C', name: { en: 'Total shunt capacitor bank rating (kVAR or MVAR)', hi: 'शंट कैपेसिटर बैंक रेटिंग', bn: 'শান্ট ক্যাপাসিটর ব্যাংক রেটিং' } }
      ]
    },
    {
      id: 'f-detuned-frequency',
      symbol: 'f_{\\text{tune}}',
      expression: 'f_{\\text{tune}} = \\frac{f_{\\text{grid}}}{\\sqrt{p}} = \\frac{f_{\\text{grid}}}{\\sqrt{\\frac{X_L}{X_C}}}',
      title: {
        en: 'Series Detuned Filter Resonant Tuning Frequency',
        hi: 'सीरीज डिट्यून्ड फिल्टर अनुनादी ट्यूनिंग आवृत्ति',
        bn: 'সিরিজ ডিটিউনড ফিল্টার টিউনিং কম্পাঙ্ক সমীকরণ'
      },
      description: {
        en: 'Determines the series resonance frequency of a detuned capacitor-reactor branch with detuning factor p.',
        hi: 'डिट्यूनिंग कारक p वाले कैपेसिटर-रिएक्टर चरण की श्रृंखला अनुनाद आवृत्ति की गणना करता है।',
        bn: 'ডিটিউনিং ফ্যাক্টর p বিশিষ্ট ক্যাপাসিটর-রিঅ্যাক্টর শাখার সিরিজ রেজোন্যান্স কম্পাঙ্ক নির্ণয়।'
      },
      variables: [
        { symbol: 'f_{\\text{tune}}', name: { en: 'Tuning series resonance frequency (Hz)', hi: 'ट्यूनिंग श्रृंखला अनुनाद आवृत्ति (Hz)', bn: 'টিউনিং সিরিজ রেজোন্যান্স কম্পাঙ্ক (Hz)' } },
        { symbol: 'f_{\\text{grid}}', name: { en: 'Power system grid frequency (50 Hz or 60 Hz)', hi: 'ग्रिड आवृत्ति (Hz)', bn: 'গ্রিড ফ্রিকোয়েন্সি (Hz)' } },
        { symbol: 'p', name: { en: 'Reactor detuning factor ratio (p = X_L / X_C, e.g., 0.07 for 7%)', hi: 'रिएक्टर डिट्यूनिंग कारक (p = X_L / X_C)', bn: 'রিঅ্যাক্টর ডিটিউনিং ফ্যাক্টর (p = X_L / X_C)' } }
      ]
    },
    {
      id: 'f-capacitor-voltage-rise',
      symbol: 'V_{\\text{cap}}',
      expression: 'V_{\\text{cap}} = \\frac{V_{\\text{bus}}}{1 - p}',
      title: {
        en: 'Capacitor Terminal Voltage Rise with Series Reactor',
        hi: 'सीरीज रिएक्टर के साथ कैपेसिटर टर्मिनल वोल्टेज वृद्धि',
        bn: 'সিরিজ রিঅ্যাক্টরের কারণে ক্যাপাসিটর টার্মিনাল ভোল্টেজ বৃদ্ধি'
      },
      description: {
        en: 'Calculates the elevated fundamental operating voltage across the capacitor terminals when connected in series with a detuning reactor of factor p.',
        hi: 'डिट्यूनिंग रिएक्टर के साथ जुड़े होने पर कैपेसिटर टर्मिनलों पर बढ़े हुए मौलिक वोल्टेज की गणना।',
        bn: 'সিরিজ ডিটিউনিং রিঅ্যাক্টরের উপস্থিতিতে ক্যাপাসিটর টার্মিনালে বর্ধিত মৌলিক ভোল্টেজ নির্ণয়।'
      },
      variables: [
        { symbol: 'V_{\\text{cap}}', name: { en: 'Fundamental voltage across capacitor terminals (V)', hi: 'कैपेसिटर पर मौलिक वोल्टेज (V)', bn: 'ক্যাপাসিটর টার্মিনালে মৌলিক ভোল্টেজ (V)' } },
        { symbol: 'V_{\\text{bus}}', name: { en: 'Line bus supply voltage (V)', hi: 'बस आपूर्ति वोल्टेज (V)', bn: 'বাস সাপ্লাই ভোল্টেজ (V)' } },
        { symbol: 'p', name: { en: 'Reactor detuning factor (e.g., 0.07 for 7%)', hi: 'रिएक्टर डिट्यूनिंग कारक', bn: 'রিঅ্যাক্টর ডিটিউনিং ফ্যাক্টর' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-ch13-l06-resonance-math',
      title: {
        en: 'Mathematical Derivation of Parallel Resonance Explosion',
        hi: 'समानांतर अनुनाद विस्फोट की गणितीय व्युत्पत्ति',
        bn: 'প্যারালাল রেজোন্যান্স বিস্ফোরণের গাণিতিক প্রতিপাদন'
      },
      content: {
        en: 'Let a substation transformer have rating S_tx (kVA) and percentage impedance %Z_tx. The short-circuit capacity at the secondary bus is:\nS_sc = S_tx / (%Z_tx / 100)\n\nAt fundamental frequency f₁ (50 Hz):\nTransformer reactance: X_tx1 = V_L² / S_sc\nCapacitor bank reactance: X_c1 = V_L² / Q_c\n\nAt harmonic order h:\nTransformer reactance increases linearly: X_tx(h) = h · X_tx1\nCapacitor reactance decreases inversely: X_c(h) = X_c1 / h\n\nParallel resonance occurs when these two reactances are equal:\nh_res · X_tx1 = X_c1 / h_res\nh_res² = X_c1 / X_tx1\nh_res = √(X_c1 / X_tx1)\nSubstituting the power equations:\nh_res = √[ (V_L² / Q_c) / (V_L² / S_sc) ] = √(S_sc / Q_c)\n\nReal-World Hazard Example:\nConsider a 1,500 kVA, 415 V transformer with %Z = 6% supplying a plant:\nS_sc = 1,500 / 0.06 = 25,000 kVA = 25 MVA.\nIf the electrical contractor installs a standard un-detuned 500 kVAR capacitor bank to correct power factor:\nh_res = √(25,000 kVA / 500 kVAR) = √50 = 7.07 ≈ 7th harmonic!\nThe plant AC drives produce large 7th harmonic currents (350 Hz). Because the system resonates exactly at order 7, the 7th harmonic voltage surges to over 25% THD, and circulating 7th harmonic current through the capacitors reaches 800% of nominal rating. Within weeks, the capacitors overheat and suffer violent casing rupture.',
        hi: 'समानांतर अनुनाद की गणितीय व्युत्पत्ति:\n\nट्रांसफार्मर शॉर्ट-सर्किट क्षमता: S_sc = S_tx / (%Z / 100)।\nफंडामेंटल पर: X_tx1 = V_L² / S_sc और X_c1 = V_L² / Q_c।\nh-वें हार्मोनिक पर: X_tx(h) = h · X_tx1 और X_c(h) = X_c1 / h।\n\nअनुनाद तब होता है जब दोनों बराबर होते हैं: h_res = √(S_sc / Q_c)।\n\nवास्तविक खतरा:\nएक 1,500 kVA, 6% प्रतिबाधा वाले ट्रांसफार्मर का S_sc = 25,000 kVA है। यदि इस पर 500 kVAR का साधारण कैपेसिटर लगाया जाए:\nh_res = √(25,000 / 500) = √50 = 7.07 (7वाँ हार्मोनिक!)।\nVFD मोटरों से निकलने वाला 7वाँ हार्मोनिक सीधे इस बैंक को हिट करेगा और करंट 8 गुना बढ़ जाएगा, जिससे कैपेसिटर फट जाएंगे।',
        bn: 'প্যারালাল রেজোন্যান্সের গাণিতিক প্রমাণ:\n\nট্রান্সফরমার শর্ট-সার্কিট ক্ষমতা: S_sc = S_tx / (%Z / ১০০)।\nফান্ডামেন্টালে: X_tx1 = V_L² / S_sc এবং X_c1 = V_L² / Q_c।\nh-তম হারমোনিকে: h_res = √(S_sc / Q_c)।\n\nবাস্তব বিপদ:\nএকটি ১,৫০০ kVA, ৬% ইম্পিডেন্স ট্রান্সফরমারের S_sc = ২৫,০০০ kVA। এতে যদি ৫০০ kVAR সাধারণ ক্যাপাসিটর লাগানো হয়:\nh_res = √(২৫,০০০ / ৫০০) = √৫০ = ৭.০৭ (৭ম হারমোনিক!)।\nVFD ড্রাইভের ৭ম হারমোনিক কারেন্ট সার্কিটে ৮০০% বিবর্ধিত হবে এবং কয়েক সপ্তাহের মধ্যে ক্যাপাসিটর ফেটে আগুন ধরে যাবে।'
      }
    },
    {
      id: 'sec-ch13-l06-detuned-design',
      title: {
        en: 'Engineering Design of Detuned Capacitor Banks (7% vs 14%)',
        hi: 'डिट्यून्ड कैपेसिटर बैंकों का इंजीनियरिंग डिज़ाइन (7% बनाम 14%)',
        bn: 'ডিটিউনড ক্যাপাসিটর ব্যাংকের ইঞ্জিনিয়ারিং ডিজাইন (৭% বনাম ১৪%)'
      },
      content: {
        en: 'To eliminate resonance, a reactor of inductance L is added in series with capacitance C in every phase branch.\n\n1. Selection of Detuning Factor p:\n- p = 7% (f_tune = 189 Hz): Standard industrial specification for systems with 3-phase 6-pulse non-linear loads (VFDs, UPS, DC drives). Since the lowest harmonic order is the 5th (250 Hz), tuning to 189 Hz places the resonance point safely BELOW the 5th harmonic, completely blocking parallel resonance.\n- p = 5.67% (f_tune = 210 Hz): Used where 5th harmonic distortion is low, maximizing capacitive kVAR yield per dollar.\n- p = 14% (f_tune = 134 Hz): Mandatory for facilities with substantial single-phase non-linear loads (computers, LED lighting, servers) that generate severe 3rd harmonic currents (150 Hz). A 7% reactor cannot protect against the 3rd harmonic (189 Hz is above 150 Hz!). The 14% reactor tunes the bank down to 134 Hz, safely below the 3rd harmonic.\n\n2. Why Standard 415 V Capacitors Will Fail:\nIn a series LC circuit at 50 Hz:\nV_bus = V_cap - V_reactor = V_cap - (p · V_cap) = V_cap · (1 - p)\nV_cap = V_bus / (1 - p)\nFor a 415 V line bus with a 7% reactor:\nV_cap = 415 / (1 - 0.07) = 446.2 V fundamental continuous voltage.\nAccounting for standard utility grid overvoltages (+10% = 456 V line):\nV_cap_max = 456 / 0.93 = 490.3 V!\nIf you use cheap 415 V rated capacitors, the dielectric will be subjected to continuous overvoltage, breaking down within days. Engineers specify 480 V, 525 V, or 690 V rated capacitors for 7% detuned systems.',
        hi: 'डिट्यून्ड कैपेसिटर बैंक डिज़ाइन:\n\n1. डिट्यूनिंग फैक्टर का चयन:\n- p = 7% (f_tune = 189 Hz): 3-फेज VFD लोड के लिए मानक, जो 5वें हार्मोनिक (250 Hz) से सुरक्षित रूप से नीचे है।\n- p = 14% (f_tune = 134 Hz): सर्वर, कंप्यूटर और LED लाइटिंग वाले स्थानों के लिए अनिवार्य जहाँ 3रा हार्मोनिक (150 Hz) मौजूद होता है।\n\n2. 415 V कैपेसिटर क्यों फेल हो जाते हैं:\nसीरीज रिएक्टर कैपेसिटर के सिरों पर वोल्टेज बढ़ा देता है: V_cap = V_bus / (1 - p)।\n415 V लाइन पर 7% रिएक्टर लगाने पर कैपेसिटर पर 446 V आता है। ग्रिड के 10% उतार-चढ़ाव के साथ यह 490 V तक जा सकता है। इसलिए 7% सिस्टम में हमेशा 480 V या 525 V रेटेड कैपेसिटर ही लगाए जाते हैं।',
        bn: 'ডিটিউনড ক্যাপাসিটর ব্যাংক নকশা:\n\n১. ডিটিউনিং ফ্যাক্টর নির্বাচন:\n- p = ৭% (f_tune = ১৮৯ Hz): ৩-ফেজ VFD লোডের জন্য আদর্শ, যা ৫ম হারমোনিকের (২৫০ Hz) নিচে থাকে।\n- p = ১৪% (f_tune = ১৩৪ Hz): কম্পিউটার, ডেটা সেন্টার বা LED বাতির মতো ৩য় হারমোনিক (১৫০ Hz) যুক্ত লোডের জন্য বাধ্যতামূলক।\n\n২. সাধারণ ৪১৫ V ক্যাপাসিটর কেন নষ্ট হয়:\nসিরিজ রিঅ্যাক্টরের কারণে ভোল্টেজ বেড়ে যায়: V_cap = V_bus / (1 - p)।\n৪১৫ V বাসে ৭% রিঅ্যাক্টর লাগালে ক্যাপাসিটরে ৪৪৬ V ভোল্টেজ আসে, যা গ্রিডের ওঠানামায় ৪৯০ ভোল্ট ছাড়িয়ে যেতে পারে। তাই ৭% ডিটিউনড ব্যাংকে সর্বদা ৪৮০ V বা ৫২৫ V রেটিংয়ের ক্যাপাসিটর ব্যবহার করতে হয়।'
      }
    }
  ],
  examples: [
    {
      id: 'ex-ch13-l06-01',
      title: {
        en: 'Factory Parallel Resonance Harmonic Order Calculation',
        hi: 'फैक्ट्री समानांतर अनुनाद हार्मोनिक क्रम गणना',
        bn: 'কারখানার প্যারালাল রেজোন্যান্স হারমোনিক অর্ডার হিসাব'
      },
      problem: {
        en: 'A 2,000 kVA, 415 V, 50 Hz substation transformer has a percentage leakage impedance of %Z = 5.0%. The factory installs a 400 kVAR standard un-detuned shunt capacitor bank to correct power factor. The plant operates twenty 45 kW Variable Frequency Drives (6-pulse rectifiers).\n1. Calculate the transformer short-circuit capacity S_sc in kVA.\n2. Calculate the parallel resonant harmonic order h_res and resonant frequency f_res.\n3. Identify whether dangerous resonance will occur with drive harmonics.',
        hi: 'एक 2,000 kVA, 415 V, 50 Hz सबस्टेशन ट्रांसफार्मर का प्रतिशत प्रतिबाधा %Z = 5.0% है। फैक्ट्री में 400 kVAR का साधारण शंट कैपेसिटर बैंक लगाया गया है। प्लांट में बीस 45 kW के VFD (6-पल्स रेक्टिफायर) चलते हैं।\n1. ट्रांसफार्मर शॉर्ट-सर्किट क्षमता S_sc की गणना करें।\n2. समानांतर अनुनाद हार्मोनिक क्रम h_res और आवृत्ति f_res ज्ञात करें।\n3. क्या VFD हार्मोनिक्स के साथ खतरनाक अनुनाद होगा?',
        bn: 'একটি ২,০০০ kVA, ৪১৫ V, ৫০ Hz সাবস্টেশন ট্রান্সফরমারের লিকেজ ইম্পিডেন্স %Z = ৫.০%। কারখানায় একটি ৪০০ kVAR সাধারণ শান্ট ক্যাপাসিটর ব্যাংক লাগানো হলো। কারখানায় ২০টি ৪৫ kW VFD (৬-পালস) চালিত হয়।\n১. ট্রান্সফরমারের শর্ট-সার্কিট ক্ষমতা S_sc নির্ণয় করুন।\n২. প্যারালাল রেজোন্যান্স হারমোনিক অর্ডার h_res এবং রেজোন্যান্স কম্পাঙ্ক f_res নির্ণয় করুন।\n৩. ড্রাইভের হারমোনিকসের সাথে বিপজ্জনক রেজোন্যান্স ঘটবে কিনা বিশ্লেষণ করুন।'
      },
      solution: {
        en: 'Step 1: Calculate short-circuit capacity S_sc:\nS_sc = S_tx / (%Z / 100) = 2,000 kVA / (5.0 / 100) = 2,000 / 0.05 = 40,000 kVA = 40 MVA\n\nStep 2: Calculate parallel resonance harmonic order h_res:\nh_res = √(S_sc / Q_c) = √(40,000 kVA / 400 kVAR) = √100 = 10.0\nResonant frequency: f_res = h_res · f_grid = 10 · 50 Hz = 500 Hz.\n\nNow consider realistic plant variations: As motors cycle, fewer capacitor steps are connected (e.g., 250 kVAR or 300 kVAR):\nAt Q_c = 300 kVAR: h_res = √(40,000 / 300) = √133.3 = 11.55 (near 11th harmonic at 550 Hz!).\nAt Q_c = 800 kVAR (if bank expanded): h_res = √(40,000 / 800) = √50 = 7.07 (EXACT 7th harmonic at 350 Hz!).\n\nStep 3: Hazard Assessment:\n6-pulse VFDs generate 5th (250 Hz), 7th (350 Hz), 11th (550 Hz), and 13th (650 Hz) harmonics. At Q_c = 400 kVAR, h_res = 10.0 lies between the 7th and 11th. However, during normal step switching in the APFC panel, when stages equal 300 kVAR or if grid fault level drops slightly, h_res will coincide directly with the 11th (550 Hz) or 7th (350 Hz) harmonic, producing catastrophic parallel resonance.\n\nConclusion: Installing standard un-detuned capacitors is unsafe. A 7% detuned reactor bank MUST be installed to force the resonant frequency down to 189 Hz (h = 3.78), completely immune to all drive harmonics.',
        hi: 'चरण 1: S_sc = 2,000 / 0.05 = 40,000 kVA।\n\nचरण 2: h_res = √(40,000 / 400) = √100 = 10.0 (500 Hz)।\n\nचरण 3: खतरा विश्लेषण:\n6-पल्स VFDs 5वां, 7वां और 11वां हार्मोनिक पैदा करते हैं। लोड बदलने पर जब APFC पैनल के कुछ स्टेप बंद होंगे (उदा. 300 kVAR बचेगा), तो h_res = 11.55 हो जाएगा जो सीधे 11वें हार्मोनिक (550 Hz) से टकराएगा। इससे खतरनाक अनुनाद होगा।\n\nनिष्कर्ष: साधारण कैपेसिटर हटाकर 7% डिट्यून्ड रिएक्टर लगाना अनिवार्य है जो ट्यूनिंग को 189 Hz पर ले जाएगा।',
        bn: 'ধাপ ১: S_sc = ২,০০০ / ০.০৫ = ৪০,০০০ kVA।\n\nধাপ ২: h_res = √(৪০,০০০ / ৪০০) = √১০০ = ১০.০ (৫০০ Hz)।\n\nধাপ ৩: বিপদ পর্যালোচনা:\n৬-পালস VFD ৫ম, ৭ম ও ১১তম হারমোনিক তৈরি করে। APFC প্যানেল যখন ধাপে ধাপে ৩০০ kVAR এ নামবে, তখন h_res = ১১.৫৫ হবে, যা সরাসরি ১১তম হারমোনিকের (৫৫০ Hz) সাথে রেজোন্যান্স ঘটাবে।\n\nফলাফল: সাধারণ ক্যাপাসিটর ব্যাংক রাখা বিপজ্জনক। রেজোন্যান্স কম্পাঙ্ক ১৮৯ Hz এ নামিয়ে আনতে ৭% ডিটিউনড রিঅ্যাক্টর ব্যাংক স্থাপন করা বাধ্যতামূলক।'
      }
    },
    {
      id: 'ex-ch13-l06-02',
      title: {
        en: '7% Detuned Reactor Component Sizing & Voltage Rating Specification',
        hi: '7% डिट्यून्ड रिएक्टर घटक साइज़िंग एवं वोल्टेज रेटिंग विनिर्देश',
        bn: '৭% ডিটিউনড রিঅ্যাক্টর কম্পোনেন্ট সাইজিং ও ভোল্টেজ রেটিং স্পেসিফিকেশন'
      },
      problem: {
        en: 'An engineer is designing a 50 kVAR (effective output at 415 V, 50 Hz) 3-phase detuned capacitor step with a p = 7% series reactor. Determine:\n1. The series resonance tuning frequency f_tune.\n2. The actual fundamental voltage V_cap across the capacitor terminals when the bus is at 415 V.\n3. The actual nameplate kVAR rating that the capacitor must possess at its rated voltage of 480 V to yield exactly 50 kVAR effective net output at 415 V with the 7% reactor.',
        hi: 'एक इंजीनियर 415 V, 50 Hz पर 50 kVAR प्रभावी आउटपुट देने वाले 7% डिट्यून्ड कैपेसिटर चरण का डिज़ाइन कर रहा है। ज्ञात कीजिए:\n1. श्रृंखला अनुनाद ट्यूनिंग आवृत्ति f_tune।\n2. 415 V बस पर कैपेसिटर टर्मिनलों पर वास्तविक वोल्टेज V_cap।\n3. 7% रिएक्टर के साथ 415 V पर 50 kVAR शुद्ध आउटपुट देने के लिए 480 V रेटेड कैपेसिटर की नेमप्लेट kVAR रेटिंग।',
        bn: 'একজন প্রকৌশলী ৪১৫ V, ৫০ Hz লাইনে ৫০ kVAR কার্যকর আউটপুট পাওয়ার জন্য p = ৭% সিরিজ রিঅ্যাক্টরযুক্ত একটি ডিটিউনড স্টেপ ডিজাইন করছেন। নির্ণয় করুন:\n১. সিরিজ রেজোন্যান্স টিউনিং ফ্রিকোয়েন্সি f_tune।\n২. ৪১৫ V বাসে ক্যাপাসিটরের টার্মিনালে তৈরি হওয়া প্রকৃত মৌলিক ভোল্টেজ V_cap।\n৩. ৭% রিঅ্যাক্টরের সাথে ৪১৫ V বাসে ৫০ kVAR নেট পাওয়ার দিতে ৪৮০ V রেটিংয়ের ক্যাপাসিটরের নেমপ্লেট kVAR কত হতে হবে?'
      },
      solution: {
        en: 'Step 1: Calculate tuning frequency f_tune:\nf_tune = f_grid / √p = 50 Hz / √0.07 = 50 / 0.264575 = 189.0 Hz (harmonic order h = 3.78).\n\nStep 2: Calculate fundamental voltage across capacitor:\nV_cap = V_bus / (1 - p) = 415 V / (1 - 0.07) = 415 / 0.93 = 446.24 V.\n\nStep 3: Calculate required capacitor nameplate rating:\nThe net effective reactive power produced by a detuned LC branch at bus voltage V_bus is:\nQ_eff = Q_cap_at_Vbus / (1 - p)\nwhere Q_cap_at_Vbus = Q_rated · (V_bus / V_rated)²\nSubstituting:\nQ_eff = [Q_rated · (V_bus / V_rated)²] / (1 - p)\nRearranging for required nameplate Q_rated at V_rated = 480 V:\nQ_rated = Q_eff · (1 - p) · (V_rated / V_bus)²\nQ_rated = 50 kVAR · (1 - 0.07) · (480 / 415)²\nQ_rated = 50 · 0.93 · (1.1566)² = 46.5 · 1.3378 = 62.2 kVAR.\n\nConclusion: To achieve a safe 50 kVAR net effective output on a 415 V bus with a 7% detuning reactor, the engineer must procure a capacitor rated at 62.2 kVAR at 480 V (or 74.4 kVAR at 525 V). A standard 50 kVAR 415 V unit would burn out.',
        hi: 'चरण 1: ट्यूनिंग आवृत्ति:\nf_tune = 50 / √0.07 = 189.0 Hz (3.78वाँ हार्मोनिक)।\n\nचरण 2: कैपेसिटर पर वोल्टेज:\nV_cap = 415 / (1 - 0.07) = 446.24 V।\n\nचरण 3: आवश्यक नेमप्लेट रेटिंग (480 V पर):\nQ_rated = Q_eff · (1 - p) · (V_rated / V_bus)²\nQ_rated = 50 · 0.93 · (480 / 415)² = 46.5 · 1.3378 = 62.2 kVAR।\n\nनिष्कर्ष: 415 V पर 50 kVAR प्रभावी आउटपुट पाने के लिए 480 V पर 62.2 kVAR का कैपेसिटर खरीदना होगा।',
        bn: 'ধাপ ১: টিউনিং কম্পাঙ্ক:\nf_tune = ৫০ / √০.০৭ = ১৮৯.০ Hz (৩.৭৮তম হারমোনিক)।\n\nধাপ ২: ক্যাপাসিটরে মৌলিক ভোল্টেজ:\nV_cap = ৪১৫ / (১ - ০.০৭) = ৪৪৬.২৪ V।\n\nধাপ ৩: ৪৮০ V ক্যাপাসিটরের নেমপ্লেট রেটিং:\nQ_rated = ৫০ · (১ - ০.০৭) · (৪৮০ / ৪১৫)² = ৪৬.৫ · ১.৩৩৭৮ = ৬২.২ kVAR।\n\nফলাফল: ৪১৫ V লাইনে ৭% রিঅ্যাক্টরের সাথে ৫০ kVAR নেট আউটপুট নিশ্চিত করতে ৪৮০ V রেটিংয়ে ৬২.২ kVAR নেমপ্লেটের ক্যাপাসিটর কিনতে হবে।'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Automotive Stamping Plants with VFD Heavy Automation: Installing 7% detuned capacitor panels to eliminate harmonic resonance caused by hundreds of variable speed servo press drives.',
      'Data Centers & Server Farms: Installing 14% detuned capacitor banks (tuned to 134 Hz) to suppress triplen 3rd harmonics generated by single-phase server switch-mode power supplies.',
      'Hospital Imaging Centers: Protecting MRI and CT scanners from voltage notching and harmonic distortion using detuned APFC stages.'
    ],
    hi: [
      'ऑटोमोबाइल असेंबली प्लांट: सैकड़ों सर्वो ड्राइव्स के कारण होने वाले हार्मोनिक अनुनाद को रोकने के लिए 7% डिट्यून्ड कैपेसिटर पैनल लगाना।',
      'डेटा सेंटर एवं सर्वर फार्म: कंप्यूटर बिजली आपूर्तियों द्वारा उत्पन्न 3रे हार्मोनिक (150 Hz) से सुरक्षा के लिए 14% डिट्यून्ड बैंक (134 Hz) लगाना।',
      'अस्पताल इमेजिंग सेंटर: एमआरआई और सीटी स्कैनर को हार्मोनिक विकृति से बचाने के लिए डिट्यून्ड APFC चरणों का उपयोग।'
    ],
    bn: [
      'অটোমোবাইল উৎপাদন কারখানা: শত শত পরিবর্তনশীল গতির ড্রাইভের হারমোনিক রেজোন্যান্স রোধ করতে ৭% ডিটিউনড ক্যাপাসিটর প্যানেল স্থাপন।',
      'ডেটা সেন্টার ও সার্ভার রুম: একক ফেজ সার্ভারের ৩য় হারমোনিক (১৫০ Hz) সামলাতে ১৪% ডিটিউনড ব্যাংক (১৩৪ Hz) স্থাপন।',
      'হাসপাতাল ডায়াগনস্টিক সেন্টার: এমআরআই ও সিটি স্ক্যানারকে ভোল্টেজ বিকৃতি থেকে বাঁচাতে ডিটিউনড ফিল্টার ব্যবহার।'
    ]
  },
  importantPoints: {
    en: [
      'Standard un-detuned capacitor banks must NEVER be installed in facilities where non-linear loads exceed 15–20% of total plant capacity.',
      'A 7% series reactor tunes the branch to 189 Hz, making it net inductive to all drive harmonics (5th, 7th, 11th) and physically preventing parallel resonance.',
      'A 7% reactor increases capacitor terminal voltage to 446 V at 415 V nominal bus; capacitors must be rated for at least 480 V or 525 V continuous duty.'
    ],
    hi: [
      'जिस संयंत्र में नॉन-लीनियर लोड 15-20% से अधिक हो, वहाँ कभी भी साधारण बिना रिएक्टर वाले कैपेसिटर नहीं लगाने चाहिए।',
      '7% सीरीज रिएक्टर ट्यूनिंग को 189 Hz पर ले जाता है, जिससे बैंक सभी VFD हार्मोनिक्स (5वें, 7वें) के लिए इंडक्टिव बन जाता है और अनुनाद असंभव हो जाता है।',
      '7% रिएक्टर के कारण 415 V लाइन पर कैपेसिटर पर 446 V आता है; अतः कैपेसिटर की वोल्टेज रेटिंग कम से कम 480 V या 525 V होनी चाहिए।'
    ],
    bn: [
      'যেসব কারখানায় নন-লিনিয়ার লোড মোট ক্ষমতার ১৫-২০% এর বেশি, সেখানে সাধারণ ক্যাপাসিটর ব্যাংক লাগানো সম্পূর্ণরূপে নিষিদ্ধ।',
      '৭% সিরিজ রিঅ্যাক্টর টিউনিংকে ১৮৯ Hz এ নামিয়ে আনে, ফলে এটি ড্রাইভের সব হারমোনিকসের জন্য ইন্ডাক্টিভ হয়ে রেজোন্যান্স পুরোপুরি রোধ করে।',
      '৭% রিঅ্যাক্টরের কারণে ৪১৫ V লাইনে ক্যাপাসিটরে ৪৪৬ V তৈরি হয়; তাই ক্যাপাসিটরের ভোল্টেজ রেটিং কমপক্ষে ৪৮০ V বা ৫২৫ V হতে হবে।'
    ]
  },
  commonMistakes: {
    en: [
      'Mistake: Installing standard 415 V capacitors with 7% detuning reactors. Correction: The reactor raises terminal voltage to 446 V (and over 490 V during grid overvoltage). Standard 415 V units experience rapid dielectric puncture. Always specify 480 V, 525 V, or 690 V capacitors.',
      'Mistake: Using a 7% detuned reactor to filter 3rd harmonic currents in data centers. Correction: A 7% reactor is tuned to 189 Hz, which is ABOVE the 3rd harmonic (150 Hz). The bank remains capacitive at 150 Hz and can trigger disastrous 3rd harmonic resonance! A 14% reactor (134 Hz) is strictly required for 3rd harmonics.'
    ],
    hi: [
      'त्रुटि: 7% डिट्यूनिंग रिएक्टर के साथ साधारण 415 V कैपेसिटर लगा देना। सुधार: रिएक्टर वोल्टेज को 446 V तक बढ़ा देता है। हमेशा 480 V या 525 V रेटेड कैपेसिटर का ही उपयोग करें।',
      'त्रुटि: डेटा सेंटरों में 3रे हार्मोनिक (150 Hz) के लिए 7% रिएक्टर का उपयोग करना। सुधार: 7% रिएक्टर 189 Hz पर ट्यून होता है जो 150 Hz से ऊपर है। 3रे हार्मोनिक के लिए 14% रिएक्टर (134 Hz) ही अनिवार्य है।'
    ],
    bn: [
      'ভুল: ৭% ডিটিউনিং রিঅ্যাক্টরের সাথে সাধারণ ৪১৫ V ক্যাপাসিটর লাগানো। সংশোধন: রিঅ্যাক্টরের কারণে ভোল্টেজ ৪৪৬ ভোল্টে উঠে যায়। সর্বদা ৪৮০ V বা ৫২৫ V রেটিংয়ের ক্যাপাসিটর ব্যবহার করুন।',
      'ভুল: ডেটা সেন্টারের ৩য় হারমোনিক (১৫০ Hz) দূর করতে ৭% রিঅ্যাক্টর ব্যবহার করা। সংশোধন: ৭% রিঅ্যাক্টর ১৮৯ Hz এ টিউন থাকে যা ১৫০ Hz এর ওপরে। ৩য় হারমোনিকের জন্য অবশ্যই ১৪% রিঅ্যাক্টর (১৩৪ Hz) ব্যবহার করতে হবে।'
    ]
  },
  keyTakeaways: {
    en: [
      'Parallel resonance amplifies harmonic currents, destroying un-detuned capacitor banks.',
      'Detuning reactors change the resonant frequency below harmonic orders, rendering the bank net inductive to harmonics.',
      'Capacitors in detuned banks operate at elevated terminal voltages and require higher voltage insulation ratings.'
    ],
    hi: [
      'समानांतर अनुनाद हार्मोनिक धाराओं को कई गुना बढ़ाकर साधारण कैपेसिटर बैंकों को नष्ट कर देता है।',
      'डिट्यूनिंग रिएक्टर अनुनाद आवृत्ति को हार्मोनिक्स से नीचे ले जाते हैं, जिससे बैंक हार्मोनिक्स के लिए इंडक्टिव बन जाता है।',
      'डिट्यून्ड बैंकों में कैपेसिटर बढ़े हुए वोल्टेज पर काम करते हैं, इसलिए उच्च वोल्टेज रेटिंग आवश्यक है।'
    ],
    bn: [
      'প্যারালাল রেজোন্যান্স হারমোনিক কারেন্টকে বহুগুণ বিবর্ধিত করে সাধারণ ক্যাপাসিটর ব্যাংক ধ্বংস করে।',
      'ডিটিউনিং রিঅ্যাক্টর রেজোন্যান্স ফ্রিকোয়েন্সিকে হারমোনিকের নিচে নামিয়ে এনে ব্যাংকটিকে হারমোনিকসের জন্য ইন্ডাক্টিভ বানায়।',
      'ডিটিউনড ব্যাংকের ক্যাপাসিটরে অতিরিক্ত ভোল্টেজ তৈরি হওয়ায় উচ্চ ভোল্টেজ রেটিংযুক্ত ক্যাপাসিটর আবশ্যক।'
    ]
  },
  practiceQuestions: [
    {
      id: 'pq-ch13-l06-01',
      question: {
        en: 'A plant has a 1,000 kVA, 415 V transformer with %Z = 5% and a 250 kVAR capacitor bank. Calculate the parallel resonance order. If the plant adds five 6-pulse VFDs, explain what catastrophic events will occur.',
        hi: 'एक प्लांट में 1,000 kVA, 415 V, %Z = 5% का ट्रांसफार्मर और 250 kVAR का कैपेसिटर बैंक है। समानांतर अनुनाद क्रम की गणना करें। यदि प्लांट में पांच 6-पल्स VFD जोड़े जाएं, तो क्या विनाशकारी घटनाएं होंगी?',
        bn: 'একটি কারখানায় ১,০০০ kVA, ৪১৫ V, %Z = ৫% ট্রান্সফরমার এবং ২৫০ kVAR ক্যাপাসিটর ব্যাংক আছে। প্যারালাল রেজোন্যান্স অর্ডার কত? কারখানায় পাঁচটি ৬-পালস VFD যুক্ত করলে কী বিপর্যয় ঘটবে?'
      },
      hint: {
        en: 'Compute S_sc = 1,000 / 0.05 = 20,000 kVA. Then h_res = √(20,000 / 250) = √80 = 8.94. If capacitors step down to 200 kVAR, h_res = 10; if to 150 kVAR, h_res = 11.5. Analyze resonance with 11th harmonic.',
        hi: 'S_sc निकालें। फिर h_res की गणना करें। जब कैपेसिटर के कुछ स्टेप बंद होंगे तो क्या यह 11वें हार्मोनिक (550 Hz) से टकराएगा?',
        bn: 'S_sc এবং h_res বের করুন। ক্যাপাসিটর ধাপ পরিবর্তনের সাথে সাথে এটি কীভাবে ১১তম হারমোনিকের (৫৫০ Hz) সাথে রেজোন্যান্স ঘটাবে তা ব্যাখ্যা করুন।'
      }
    },
    {
      id: 'pq-ch13-l06-02',
      question: {
        en: 'Why is a 14% detuned reactor required instead of a 7% reactor in electrical distribution boards feeding commercial office data centers with heavy switch-mode power supply (SMPS) loads?',
        hi: 'भारी स्विच-मोड पावर सप्लाई (SMPS) लोड वाले वाणिज्यिक कार्यालय डेटा सेंटरों में 7% रिएक्टर के स्थान पर 14% डिट्यून्ड रिएक्टर की आवश्यकता क्यों होती है?',
        bn: 'প্রচুর সুইচ-মোড পাওয়ার সাপ্লাই (SMPS) বিশিষ্ট বাণিজ্যিক ডেটা সেন্টারে ৭% রিঅ্যাক্টরের পরিবর্তে ১৪% ডিটিউনড রিঅ্যাক্টর কেন প্রয়োজন?'
      },
      hint: {
        en: 'Calculate tuning frequencies: f_tune = 50 / √0.07 = 189 Hz vs 50 / √0.14 = 134 Hz. Compare against the 3rd harmonic (150 Hz) generated by single-phase loads.',
        hi: 'दोनों ट्यूनिंग आवृत्तियों की तुलना सिंगल-फेज लोड से निकलने वाले 3रे हार्मोनिक (150 Hz) से करें।',
        bn: 'উভয় টিউনিং ফ্রিকোয়েন্সির (১৮৯ Hz বনাম ১৩৪ Hz) সাথে সিঙ্গেল ফেজ লোড থেকে উৎপন্ন ৩য় হারমোনিকের (১৫০ Hz) তুলনা করুন।'
      }
    }
  ],
  mcqs: [
    {
      id: 'mcq-ch13-l06-01',
      question: {
        en: 'What mathematical formula defines the system parallel harmonic resonance order h_res between a substation transformer and a shunt capacitor bank?',
        hi: 'सबस्टेशन ट्रांसफार्मर और शंट कैपेसिटर बैंक के बीच समानांतर हार्मोनिक अनुनाद क्रम h_res को कौन सा गणितीय सूत्र परिभाषित करता है?',
        bn: 'সাবস্টেশন ট্রান্সফরমার এবং শান্ট ক্যাপাসিটর ব্যাংকের মধ্যকার প্যারালাল হারমোনিক রেজোন্যান্স অর্ডার h_res কোন সূত্র দ্বারা নির্ধারিত হয়?'
      },
      options: [
        { en: 'h_res = √(S_sc / Q_c)', hi: 'h_res = √(S_sc / Q_c)', bn: 'h_res = √(S_sc / Q_c)' },
        { en: 'h_res = S_sc / Q_c', hi: 'h_res = S_sc / Q_c', bn: 'h_res = S_sc / Q_c' },
        { en: 'h_res = √(Q_c / S_sc)', hi: 'h_res = √(Q_c / S_sc)', bn: 'h_res = √(Q_c / S_sc)' },
        { en: 'h_res = (S_sc · Q_c) / 100', hi: 'h_res = (S_sc · Q_c) / 100', bn: 'h_res = (S_sc · Q_c) / 100' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Parallel resonance occurs when transformer inductive reactance equals capacitor reactance (h·X_tx = X_c/h), leading directly to h_res = √(X_c / X_tx) = √(S_sc / Q_c).',
        hi: 'समानांतर अनुनाद तब होता है जब ट्रांसफार्मर का इंडक्टिव प्रतिघात कैपेसिटर प्रतिघात के बराबर होता है, जिससे h_res = √(S_sc / Q_c) प्राप्त होता है।',
        bn: 'ট্রান্সফরমারের ইন্ডাক্টিভ রিঅ্যাক্ট্যান্স এবং ক্যাপাসিটরের রিঅ্যাক্ট্যান্স সমান হলে রেজোন্যান্স ঘটে, যার সমীকরণ h_res = √(S_sc / Q_c)।'
      }
    },
    {
      id: 'mcq-ch13-l06-02',
      question: {
        en: 'What is the primary engineering purpose of connecting a 7% series detuning reactor with each capacitor branch in an APFC panel?',
        hi: 'APFC पैनल में प्रत्येक कैपेसिटर शाखा के साथ 7% सीरीज डिट्यूनिंग रिएक्टर जोड़ने का प्राथमिक इंजीनियरिंग उद्देश्य क्या है?',
        bn: 'APFC প্যানেলে প্রতিটি ক্যাপাসিটর শাখার সাথে ৭% সিরিজ ডিটিউনিং রিঅ্যাক্টর সংযোগের মূল প্রকৌশল উদ্দেশ্য কী?'
      },
      options: [
        { en: 'To shift the LC branch resonant frequency to 189 Hz (below the 5th harmonic), making the bank net inductive to all harmonic frequencies and preventing parallel resonance', hi: 'शाखा अनुनाद आवृत्ति को 189 Hz (5वें हार्मोनिक से नीचे) ले जाना, जिससे बैंक हार्मोनिक्स के लिए इंडक्टिव बन जाए और अनुनाद रुक जाए', bn: 'রেজোন্যান্স কম্পাঙ্ককে ১৮৯ Hz (৫ম হারমোনিকের নিচে) এ নামিয়ে আনা, যাতে ব্যাংকটি সব হারমোনিকের জন্য ইন্ডাক্টিভ আচরণ করে রেজোন্যান্স বন্ধ করে' },
        { en: 'To step down the incoming bus voltage from 415 V to 230 V', hi: 'इनकमिंग बस वोल्टेज को 415 V से घटाकर 230 V करना', bn: 'ইনকামিং বাস ভোল্টেজ ৪১৫ V থেকে কমিয়ে ২৩০ V করা' },
        { en: 'To convert reactive kVAR directly into consumable active kilowatts', hi: 'रिएक्टिव kVAR को सीधे उपयोगी एक्टिव किलोवाट में बदलना', bn: 'রিঅ্যাক্টিভ kVAR কে সরাসরি সক্রিয় কিলোওয়াটে রূপান্তর করা' },
        { en: 'To act as an emergency backup DC battery charger', hi: 'एक आपातकालीन बैकअप डीसी बैटरी चार्जर के रूप में कार्य करना', bn: 'জরুরি ব্যাকআপ ডিসি ব্যাটারি চার্জার হিসেবে কাজ করা' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'A 7% reactor (f_tune = 50 / √0.07 = 189 Hz) ensures that at all harmonic frequencies (250 Hz, 350 Hz, etc.), the inductive reactance h·X_L exceeds capacitive reactance X_c/h. The bank behaves as an inductor to harmonics, making parallel resonance impossible.',
        hi: '7% रिएक्टर ट्यूनिंग को 189 Hz पर ले जाता है। 250 Hz और उससे ऊपर बैंक इंडक्टिव व्यवहार करता है, जिससे समानांतर अनुनाद पूरी तरह असंभव हो जाता है।',
        bn: '৭% রিঅ্যাক্টর টিউনিংকে ১৮৯ Hz এ নামিয়ে আনে। ফলে ২৫০ Hz বা তার বেশি কম্পাঙ্কে এটি ইন্ডাক্টর হিসেবে কাজ করে প্যারালাল রেজোন্যান্সের ঝুঁকি পুরোপুরি দূর করে।'
      }
    },
    {
      id: 'mcq-ch13-l06-03',
      question: {
        en: 'On a 415 V supply bus, what fundamental continuous voltage appears across the terminals of a capacitor connected in series with a 7% detuning reactor?',
        hi: '415 V सप्लाई बस पर, 7% डिट्यूनिंग रिएक्टर के साथ जुड़े कैपेसिटर के टर्मिनलों पर कितना मौलिक निरंतर वोल्टेज उत्पन्न होता है?',
        bn: '৪১৫ V সাপ্লাই বাসে ৭% ডিটিউনিং রিঅ্যাক্টরের সাথে সিরিজে যুক্ত ক্যাপাসিটরের টার্মিনালে কত মৌলিক অবিচ্ছিন্ন ভোল্টেজ তৈরি হয়?'
      },
      options: [
        { en: '446.2 V (calculated via V_cap = V_bus / (1 - 0.07))', hi: '446.2 V (V_cap = V_bus / (1 - 0.07) द्वारा)', bn: '৪৪৬.২ V (V_cap = V_bus / (1 - 0.07) সূত্র দ্বারা)' },
        { en: 'Exactly 415.0 V with zero change', hi: 'बिना किसी बदलाव के ठीक 415.0 V', bn: 'কোনো পরিবর্তন ছাড়া ঠিক ৪১৫.০ V' },
        { en: '290.5 V', hi: '290.5 V', bn: '২৯০.৫ V' },
        { en: '1,000.0 V', hi: '1,000.0 V', bn: '১,০০০.০ V' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'In a series LC circuit at fundamental frequency: V_bus = V_cap - V_reactor = V_cap · (1 - p). Therefore, V_cap = 415 V / (1 - 0.07) = 415 / 0.93 = 446.24 V.',
        hi: 'सीरीज LC परिपथ में V_cap = V_bus / (1 - p) होता है। 415 V के लिए: 415 / 0.93 = 446.24 V।',
        bn: 'সিরিজ LC সার্কিটে V_cap = V_bus / (1 - p)। ৪১৫ V এর জন্য: ৪১৫ / (১ - ০.০৭) = ৪৪৬.২৪ V।'
      }
    },
    {
      id: 'mcq-ch13-l06-04',
      question: {
        en: 'Why is a 14% detuned reactor (tuned to 134 Hz) chosen over a 7% reactor in data centers and modern commercial buildings?',
        hi: 'डेटा सेंटरों और आधुनिक वाणिज्यिक भवनों में 7% रिएक्टर के स्थान पर 14% डिट्यून्ड रिएक्टर (134 Hz) क्यों चुना जाता है?',
        bn: 'ডেটা সেন্টার এবং আধুনিক বাণিজ্যিক ভবনে ৭% রিঅ্যাক্টরের পরিবর্তে ১৪% ডিটিউনড রিঅ্যাক্টর (১৩৪ Hz) কেন ব্যবহার করা হয়?'
      },
      options: [
        { en: 'Single-phase computers and LED drivers produce severe 3rd harmonic currents (150 Hz); a 7% reactor (189 Hz) cannot prevent 3rd harmonic resonance, but 14% (134 Hz) can', hi: 'सिंगल-फेज कंप्यूटर 3रा हार्मोनिक (150 Hz) पैदा करते हैं; 7% रिएक्टर (189 Hz) इसे नहीं रोक सकता, लेकिन 14% (134 Hz) सुरक्षित रूप से रोकता है', bn: 'সিঙ্গেল-ফেজ কম্পিউটার ৩য় হারমোনিক (১৫০ Hz) তৈরি করে; ৭% রিঅ্যাক্টর (১৮৯ Hz) ৩য় হারমোনিকের ওপরে হওয়ায় রেজোন্যান্স ঠেকাতে পারে না, কিন্তু ১৪% (১৩৪ Hz) পারে' },
        { en: 'A 14% reactor weighs 90% less than a 7% reactor', hi: '14% रिएक्टर का वजन 7% रिएक्टर से 90% कम होता है', bn: '১৪% রিঅ্যাক্টরের ওজন ৭% রিঅ্যাক্টরের চেয়ে ৯০% কম' },
        { en: 'A 14% reactor works exclusively on direct current (DC)', hi: '14% रिएक्टर विशेष रूप से दिष्ट धारा (डीसी) पर कार्य करता है', bn: '১৪% রিঅ্যাক্টর কেবল ডিসিতে কাজ করে' },
        { en: 'To double the speed of network data transmission cables', hi: 'नेटवर्क डेटा ट्रांसमिशन केबलों की गति दोगुनी करने के लिए', bn: 'নেটওয়ার্ক ইন্টারনেটের গতি দ্বিগুণ করতে' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'The 3rd harmonic frequency is 3 · 50 = 150 Hz. A 7% reactor tunes to 189 Hz, which is ABOVE 150 Hz; therefore, the bank is still capacitive at 150 Hz and can resonate. A 14% reactor tunes to 50 / √0.14 = 134 Hz, safely below the 3rd harmonic.',
        hi: '3रे हार्मोनिक की आवृत्ति 150 Hz होती है। 7% रिएक्टर 189 Hz पर होता है जो 150 Hz से ऊपर है और अनुनाद कर सकता है। 14% रिएक्टर 134 Hz पर ट्यून होकर 3रे हार्मोनिक से पूर्ण सुरक्षा देता है।',
        bn: '৩য় হারমোনিকের কম্পাঙ্ক ১৫০ Hz। ৭% রিঅ্যাক্টর ১৮৯ Hz এ থাকায় এটি ১৫০ Hz এ ক্যাপাসিটিভ থাকে এবং রেজোন্যান্স ঘটাতে পারে। ১৪% রিঅ্যাক্টর ১৩৪ Hz এ টিউন থাকে বলে এটি ৩য় হারমোনিক থেকে সম্পূর্ণ নিরাপদ।'
      }
    },
    {
      id: 'mcq-ch13-l06-05',
      question: {
        en: 'What minimum capacitor voltage rating should an engineer specify for a 415 V industrial system equipped with 7% detuned reactors?',
        hi: '7% डिट्यून्ड रिएक्टर वाले 415 V औद्योगिक सिस्टम के लिए एक इंजीनियर को न्यूनतम किस वोल्टेज रेटिंग के कैपेसिटर का चयन करना चाहिए?',
        bn: '৭% ডিটিউনড রিঅ্যাক্টরযুক্ত ৪১৫ V শিল্প ব্যবস্থার জন্য একজন প্রকৌশলীর কমপক্ষে কত ভোল্টেজ রেটিংয়ের ক্যাপাসিটর নির্বাচন করা উচিত?'
      },
      options: [
        { en: 'At least 480 V or 525 V continuous rating', hi: 'कम से कम 480 V या 525 V निरंतर रेटिंग', bn: 'কমপক্ষে ৪৮০ V বা ৫২৫ V রেটিং' },
        { en: 'Standard 415 V rating', hi: 'मानक 415 V रेटिंग', bn: 'সাধারণ ৪১৫ V রেটিং' },
        { en: '230 V single-phase rating', hi: '230 V सिंगल-फेज रेटिंग', bn: '২৩০ V সিঙ্গেল ফেজ রেটিং' },
        { en: 'Voltage rating does not matter for capacitors', hi: 'कैपेसिटर के लिए वोल्टेज रेटिंग का कोई महत्व नहीं है', bn: 'ক্যাপাসিটরের ভোল্টেজ রেটিংয়ের কোনো গুরুত্ব নেই' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'With a 7% reactor, fundamental voltage is 446.2 V. Factoring in utility +10% overvoltages and harmonic voltage distortion, peak voltages exceed 490 V. Capacitors rated for 480 V or 525 V are essential to prevent premature dielectric puncture.',
        hi: '7% रिएक्टर के साथ वोल्टेज 446 V हो जाता है और ग्रिड के 10% उतार-चढ़ाव पर 490 V से अधिक हो जाता है। अतः 480 V या 525 V रेटेड कैपेसिटर ही सुरक्षित हैं।',
        bn: '৭% রিঅ্যাক্টরের কারণে ভোল্টেজ ৪৪৬ V এবং গ্রিড ওভারভোল্টেজে ৪৯০ V ছাড়িয়ে যায়। তাই ডাই-ইলেকট্রিক ব্রেকডাউন ঠেকাতে ৪৮০ V বা ৫২৫ V রেটিংয়ের ক্যাপাসিটর আবশ্যক।'
      }
    },
    {
      id: 'mcq-ch13-l06-06',
      question: {
        en: 'Which harmonic orders are characteristic of 3-phase 6-pulse Variable Frequency Drives (VFDs)?',
        hi: '3-फेज 6-पल्स वेरिएबल फ्रीक्वेंसी ड्राइव्स (VFDs) के विशिष्ट हार्मोनिक क्रम कौन से हैं?',
        bn: '৩-ফেজ ৬-পালস ভেরিয়েবল ফ্রিকোয়েন্সি ড্রাইভের (VFD) বৈশিষ্ট্যপূর্ণ হারমোনিক অর্ডার কোনগুলো?'
      },
      options: [
        { en: '5th, 7th, 11th, 13th, 17th, 19th... (h = 6k ± 1)', hi: '5वाँ, 7वाँ, 11वाँ, 13वाँ... (h = 6k ± 1)', bn: '৫ম, ৭ম, ১১তম, ১৩তম, ১৭তম... (h = 6k ± 1)' },
        { en: '2nd, 4th, 6th, 8th... (even harmonics only)', hi: 'केवल सम हार्मोनिक्स: 2रा, 4था, 6ठा...', bn: 'শুধুমাত্র জোড় হারমোনিকস: ২য়, ৪র্থ, ৬ষ্ঠ...' },
        { en: '3rd, 9th, 15th, 21st... (triplen harmonics only)', hi: 'केवल ट्रिपलन हार्मोनिक्स: 3रा, 9वाँ, 15वाँ...', bn: 'শুধুমাত্র ট্রিপলেন হারমোনিকস: ৩য়, ৯ম, ১৫তম...' },
        { en: 'Only DC zero-frequency current', hi: 'केवल डीसी शून्य-आवृत्ति धारा', bn: 'শুধুমাত্র ডিসি শূন্য ফ্রিকোয়েন্সি কারেন্ট' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Standard 6-pulse rectifiers produce harmonics according to the formula h = 6k ± 1 for integers k = 1, 2, 3... yielding the 5th (250 Hz), 7th (350 Hz), 11th (550 Hz), and 13th (650 Hz).',
        hi: 'मानक 6-पल्स रेक्टिफायर h = 6k ± 1 सूत्र के अनुसार 5वें, 7वें, 11वें और 13वें हार्मोनिक उत्पन्न करते हैं।',
        bn: 'স্ট্যান্ডার্ড ৬-পালস রেকটিফায়ার h = 6k ± 1 সূত্রানুসারে ৫ম (২৫০ Hz), ৭ম (৩৫০ Hz), ১১তম (৫৫০ Hz) ও ১৩তম (৬৫০ Hz) হারমোনিক তৈরি করে।'
      }
    },
    {
      id: 'mcq-ch13-l06-07',
      question: {
        en: 'What happens to the net impedance of a 7% detuned capacitor bank at the 5th harmonic frequency (250 Hz)?',
        hi: '5वें हार्मोनिक आवृत्ति (250 Hz) पर 7% डिट्यून्ड कैपेसिटर बैंक के शुद्ध प्रतिबाधा का क्या व्यवहार होता है?',
        bn: '৫ম হারমোনিক কম্পাঙ্কে (২৫০ Hz) একটি ৭% ডিটিউনড ক্যাপাসিটর ব্যাংকের নেট ইম্পিডেন্সের আচরণ কেমন হয়?'
      },
      options: [
        { en: 'It is net INDUCTIVE because inductive reactance (5·X_L) exceeds capacitive reactance (X_C / 5)', hi: 'यह शुद्ध इंडक्टिव होता है क्योंकि प्रेरकीय प्रतिघात (5·X_L) धारितीय प्रतिघात (X_C / 5) से अधिक होता है', bn: 'এটি নেট ইন্ডাক্টিভ আচরণ করে কারণ ইন্ডাক্টিভ রিঅ্যাক্ট্যান্স (৫·X_L) ক্যাপাসিটিভ রিঅ্যাক্ট্যান্সের (X_C / ৫) চেয়ে বড় হয়' },
        { en: 'It becomes a pure infinite resistance that dissipates all power as steam', hi: 'यह एक शुद्ध अनंत प्रतिरोध बन जाता है जो ऊर्जा को भाप बना देता है', bn: 'এটি অসীম রোধে পরিণত হয়ে সব শক্তি বাষ্প আকারে নষ্ট করে' },
        { en: 'It drops to exactly zero ohms and shorts out the substation transformer', hi: 'यह ठीक शून्य ओम तक गिर जाता है और ट्रांसफार्मर को शॉर्ट कर देता है', bn: 'এটি শূন্য ওহমে নেমে এসে ট্রান্সফরমার শর্ট করে দেয়' },
        { en: 'It remains strongly capacitive and amplifies the 5th harmonic by 10x', hi: 'यह दृढ़ता से कैपेसिटिव बना रहता है और 5वें हार्मोनिक को 10 गुना बढ़ा देता है', bn: 'এটি ক্যাপাসিটিভ থেকে ৫ম হারমোনিককে ১০ গুণ বিবর্ধিত করে' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'At 189 Hz, X_L = X_C. Above 189 Hz (including 250 Hz for the 5th harmonic), the reactor reactance (proportional to f) dominates over the capacitor reactance (inversely proportional to f). The branch becomes net inductive, eliminating resonance.',
        hi: '189 Hz के ऊपर (जैसे 250 Hz पर) रिएक्टर का प्रभाव कैपेसिटर से अधिक हो जाता है, जिससे पूरी शाखा इंडक्टिव बन जाती है और अनुनाद समाप्त हो जाता है।',
        bn: '১৮৯ Hz এর ওপরের কম্পাঙ্কে (যেমন ২৫০ Hz) রিঅ্যাক্টরের প্রভাব ক্যাপাসিটরের চেয়ে বেশি হয়, ফলে পুরো শাখাটি ইন্ডাক্টিভ আচরণ করে রেজোন্যান্স প্রতিরোধ করে।'
      }
    },
    {
      id: 'mcq-ch13-l06-08',
      question: {
        en: 'A 1,000 kVA transformer with %Z = 5.0% has S_sc = 20,000 kVA. What size capacitor bank Q_c would trigger exact 5th harmonic (h = 5) parallel resonance?',
        hi: '1,000 kVA, %Z = 5.0% वाले ट्रांसफार्मर का S_sc = 20,000 kVA है। कितने आकार का कैपेसिटर बैंक Q_c ठीक 5वें हार्मोनिक (h = 5) पर समानांतर अनुनाद उत्पन्न करेगा?',
        bn: '১,০০০ kVA, %Z = ৫.০% ট্রান্সফরমারের S_sc = ২০,০০০ kVA। কত সাইজের ক্যাপাসিটর ব্যাংক Q_c যুক্ত করলে ঠিক ৫ম হারমোনিকে (h = ৫) প্যারালাল রেজোন্যান্স ঘটবে?'
      },
      options: [
        { en: '800 kVAR (since Q_c = S_sc / h² = 20,000 / 25 = 800 kVAR)', hi: '800 kVAR (Q_c = S_sc / h² = 20,000 / 25 = 800 kVAR द्वारा)', bn: '৮০০ kVAR (যেহেতু Q_c = S_sc / h² = ২০,০০০ / ২৫ = ৮০০ kVAR)' },
        { en: '4,000 kVAR', hi: '4,000 kVAR', bn: '৪,০০০ kVAR' },
        { en: '50 kVAR', hi: '50 kVAR', bn: '৫০ kVAR' },
        { en: '100 kVAR', hi: '100 kVAR', bn: '১০০ kVAR' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'h_res = √(S_sc / Q_c) => h² = S_sc / Q_c => Q_c = S_sc / h² = 20,000 kVA / 5² = 20,000 / 25 = 800 kVAR.',
        hi: 'h_res = √(S_sc / Q_c) => Q_c = S_sc / h² = 20,000 / 25 = 800 kVAR।',
        bn: 'h_res = √(S_sc / Q_c) => Q_c = S_sc / h² = ২০,০০০ / ২৫ = ৮০০ kVAR।'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-ch13-harmonic-resonance',
      title: {
        en: 'Harmonic Resonance & 7% Detuned Filter Circuit',
        hi: 'हार्मोनिक अनुनाद एवं 7% डिट्यून्ड फिल्टर परिपथ',
        bn: 'হারমোনিক রেজোন্যান্স ও ৭% ডিটিউনড ফিল্টার বর্তনী'
      },
      caption: {
        en: 'System impedance vs frequency response showing parallel anti-resonance peak and series detuned reactor shifting the resonant point to 189 Hz (below the 5th harmonic).',
        hi: 'सिस्टम प्रतिबाधा बनाम आवृत्ति वक्र जो समानांतर अनुनाद और 189 Hz (5वें हार्मोनिक से नीचे) पर सीरीज डिट्यून्ड रिएक्टर के प्रभाव को दर्शाता है।',
        bn: 'সিস্টেম ইম্পিড্যান্স বনাম ফ্রিকোয়েন্সি গ্রাফ যা প্যারালাল রেজোন্যান্স পিক এবং ১৮৯ Hz-এ (৫ম হারমোনিকের নিচে) সিরিজ ডিটিউনড রিঅ্যাক্টরের স্থানান্তর প্রদর্শন করে।'
      },
      svgType: 'circuit-ch13-harmonic-resonance'
    }
  ]
};
