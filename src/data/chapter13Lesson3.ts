import { Lesson } from '../types';

export const LESSON_CAPACITOR_BANK_SIZING: Lesson = {
  id: 'lsn-ch13-capacitor-bank-sizing',
  topicId: 'tp-capacitor-bank-sizing',
  chapterId: 'ch-power-factor',
  order: 3,
  title: {
    en: 'Capacitor Bank Sizing & Engineering Design',
    hi: 'कैपेसिटर बैंक साइज़िंग एवं इंजीनियरिंग डिज़ाइन',
    bn: 'ক্যাপাসিটর ব্যাংক সাইজিং ও ইঞ্জিনিয়ারিং ডিজাইন'
  },
  description: {
    en: 'Master the rigorous mathematical sizing of 3-phase capacitor banks using real power and trigonometric tangent factors: Q_C = P · [tan(ϕ₁) - tan(ϕ₂)]. Analyze Delta versus Star bank configurations, capacitance per phase, discharge resistor safety standards (IEC 60831), overvoltage/overcurrent tolerances, and specialized capacitor-duty contactor switching.',
    hi: 'वास्तविक शक्ति और त्रिकोणमितीय स्पर्शज्या (tan) कारकों का उपयोग करके 3-फेज कैपेसिटर बैंकों के सटीक गणितीय आकार निर्धारण में महारत हासिल करें: Q_C = P · [tan(ϕ₁) - tan(ϕ₂)]। डेल्टा बनाम स्टार कॉन्फ़िगरेशन, प्रति फेज धारिता, डिस्चार्ज रेसिस्टर सुरक्षा मानक (IEC 60831), ओवरवोल्टेज/ओवरकरंट सहनशीलता और कैपेसिटर-ड्यूटी स्विचिंग का विश्लेषण करें।',
    bn: 'সক্রিয় ক্ষমতা এবং ত্রিকোণমিতিক ট্যানজেন্ট সূত্রের সাহায্যে ৩-ফেজ ক্যাপাসিটর ব্যাংকের নির্ভুল সাইজিং আয়ত্ত করুন: Q_C = P · [tan(ϕ₁) - tan(ϕ₂)]। ডেল্টা বনাম স্টার সংযোগ, প্রতি ফেজের ক্যাপাসিট্যান্স, ডিসচার্জ রেজিস্টর নিরাপত্তা মান (IEC 60831), ওভারভোল্টেজ/ওভারকারেন্ট সীমা এবং বিশেষায়িত ক্যাপাসিটর-ডিউটি কন্টাক্টরের নকশা পর্যালোচনা।'
  },
  estimatedMinutes: 50,
  easyExplanation: {
    en: 'When a factory runs at a poor power factor, calculating how much capacitor power (kVAR) to buy is straightforward: You take the real working power (kW) and multiply it by the difference between the tangent of your old bad angle and the tangent of your new target angle: Q_C = P · (tan ϕ₁ - tan ϕ₂). Inside the cabinet, capacitors are almost always wired in a Delta (Δ) triangle instead of a Star (Y). Why? Because in Delta, the full line voltage (415 V) appears across each capacitor element. Since power scales with voltage squared (V²), a Delta capacitor produces three times more reactive power than the same capacitor wired in Star, saving 66% in capacitor physical size and raw material costs!',
    hi: 'जब किसी कारखाने का पावर फैक्टर खराब होता है, तो आवश्यक कैपेसिटर रेटिंग (kVAR) निकालना बहुत आसान होता है: आपको वास्तविक लोड (kW) को पुराने कोण के tan और नए कोण के tan के अंतर से गुणा करना होता है: Q_C = P · (tan ϕ₁ - tan ϕ₂)। पैनल के अंदर 415 V पर कैपेसिटर आमतौर पर स्टार के बजाय डेल्टा में जोड़े जाते हैं। इसका कारण यह है कि डेल्टा में प्रत्येक कैपेसिटर पर पूरा लाइन वोल्टेज (415 V) आता है। चूंकि शक्ति वोल्टेज के वर्ग (V²) के अनुपात में बढ़ती है, डेल्टा में जुड़ा कैपेसिटर स्टार की तुलना में तीन गुना अधिक प्रतिघाती शक्ति देता है, जिससे आकार और लागत में भारी बचत होती है।',
    bn: 'কারখানায় কত kVAR এর ক্যাপাসিটর ব্যাংক লাগবে তা নির্ণয়ের নিয়ম অত্যন্ত চমৎকার: মোট সক্রিয় লোডকে (kW) পুরানো কোণের tan এবং নতুন লক্ষ্যমাত্রার কোণের tan এর বিয়োগফল দিয়ে গুণ করতে হয়: Q_C = P · (tan ϕ₁ - tan ϕ₂)। লো-ভোল্টেজ প্যানেলে ক্যাপাসিটরগুলি স্টার সংযোগের বদলে ডেল্টায় (Δ) যুক্ত করা হয়। কারণ ডেল্টায় পূর্ণ লাইন ভোল্টেজ (৪১৫ V) প্রতিটি উপাদানের ওপর থাকে। যেহেতু ক্ষমতা ভোল্টেজের বর্গের (V²) সমানুপাতিক, তাই ডেল্টায় সংযুক্ত ক্যাপাসিটর স্টারের তুলনায় ৩ গুণ বেশি রিঅ্যাক্টিভ পাওয়ার দেয়, যা ক্যাপাসিটরের আকার ও খরচ প্রায় দুই-তৃতীয়াংশ কমিয়ে দেয়।'
  },
  detailedExplanation: {
    en: 'The engineering design and sizing of industrial power factor capacitor banks involves several critical electro-technical considerations:\n\n1. Sizing Formula:\nGiven an active plant load P (in kW), an initial lagging power factor PF₁ = cos(ϕ₁), and a target improved power factor PF₂ = cos(ϕ₂):\nInitial reactive power: Q₁ = P · tan(ϕ₁)\nFinal uncompensated reactive power from the grid: Q₂ = P · tan(ϕ₂)\nThe required capacitive reactive power injection is:\nQ_C = Q₁ - Q₂ = P · [tan(ϕ₁) - tan(ϕ₂)]\n\n2. Delta (Δ) versus Star (Y) Bank Connection:\n- For a 3-phase Delta-connected bank across line voltage V_L:\n  Voltage across each phase capacitor: V_C = V_L\n  Reactive power per phase: Q_ph = V_L² / X_C_Δ = ω · C_Δ · V_L²\n  Total 3-phase reactive power: Q_total = 3 · ω · C_Δ · V_L²\n  Capacitance per phase: C_Δ = Q_total / (3 · ω · V_L²)\n- For a Star-connected bank:\n  Voltage across each phase: V_C = V_L / √3\n  Total 3-phase reactive power: Q_total = 3 · (V_L / √3)² / X_C_Y = ω · C_Y · V_L²\n  Capacitance per phase: C_Y = Q_total / (ω · V_L²)\nConclusion: C_Y = 3 · C_Δ. A Star bank requires THREE TIMES the physical capacitance (Farads) of a Delta bank to produce the same kVAR at the same line voltage! Consequently, low-voltage (415 V / 480 V) industrial banks are almost exclusively connected in Delta.\n\n3. Discharge Resistor Safety Standard (IEC 60831-1/2 & IEEE 18):\nCapacitors store dangerous trapped electrostatic energy when disconnected at the peak of the AC voltage wave (up to √2 · 415 V ≈ 587 V DC). Discharge resistors must be permanently bridged across terminals to safely discharge the terminal voltage to 50 V or less within 1 to 3 minutes (LV) or 5 minutes (HV), protecting technicians and preventing out-of-phase re-energization transients.\n\n4. Switching Inrush and Contactor De-Rating (AC-6b Duty):\nWhen an uncharged capacitor is switched onto a live bus, or parallel to energized banks (back-to-back switching), it acts as a momentary short circuit, drawing inrush currents up to 100–200 times rated current at high frequencies (several kHz). Standard AC-3 motor contactors will weld their silver contacts instantly. Specialized capacitor contactors (IEC AC-6b duty) equipped with early-make auxiliary contacts and series damping wire resistors are mandatory to suppress inrush spikes to < 30·I_n.',
    hi: 'औद्योगिक कैपेसिटर बैंक के आकार और डिजाइन में प्रमुख बिंदु:\n\n1. साइज़िंग सूत्र:\nQ_C = P · [tan(ϕ₁) - tan(ϕ₂)], जहाँ P सक्रिय भार (kW) है, ϕ₁ प्रारंभिक कोण है और ϕ₂ लक्षित कोण है।\n\n2. डेल्टा बनाम स्टार कनेक्शन:\nडेल्टा में कुल क्षमता Q = 3 · ω · C_Δ · V_L² होती है। स्टार में Q = ω · C_Y · V_L² होती है।\nसमान kVAR प्राप्त करने के लिए स्टार में डेल्टा से 3 गुना अधिक धारिता (C_Y = 3 · C_Δ) की आवश्यकता होती है। इसलिए 415 V पर हमेशा डेल्टा बैंक चुने जाते हैं।\n\n3. डिस्चार्ज रेसिस्टर मानक (IEC 60831):\nस्विच ऑफ होने के बाद कैपेसिटर में 587 V DC तक चार्ज फंसा रह सकता है। मानक के अनुसार डिस्चार्ज रेसिस्टर को 1 से 3 मिनट के भीतर वोल्टेज घटाकर 50 V या उससे कम करना अनिवार्य है।\n\n4. इनरश करंट और AC-6b कांटेक्टर:\nकैपेसिटर को चालू करते समय रेटेड करंट से 100 से 200 गुना अधिक क्षणिक इनरश करंट बह सकता है। साधारण कांटेक्टर वेल्ड होकर चिपक जाते हैं। अतः प्री-इंसर्शन डैम्पिंग रेसिस्टर युक्त AC-6b कांटेक्टर आवश्यक हैं।',
    bn: 'ক্যাপাসিটর ব্যাংক সাইজিং ও ডিজাইনের মূল নীতিসমূহ:\n\n১. সাইজিং সমীকরণ:\nQ_C = P · [tan(ϕ₁) - tan(ϕ₂)], যেখানে P হলো কিলোওয়াট (kW), ϕ₁ প্রাথমিক কোণ এবং ϕ₂ কাঙ্ক্ষিত উন্নত কোণ।\n\n২. ডেল্টা বনাম স্টার সংযোগ:\nডেল্টায় Q_total = ৩ · ω · C_Δ · V_L² এবং স্টারে Q_total = ω · C_Y · V_L²।\nএকই kVAR ক্ষমতার জন্য স্টারে ৩ গুণ বেশি ক্যাপাসিট্যান্স লাগে (C_Y = ৩ · C_Δ)। এই কারণে লো-ভোল্টেজ সিস্টেমে সর্বদা ডেল্টা সংযোগ ব্যবহার করা হয়।\n\n৩. ডিসচার্জ রেজিস্টর সুরক্ষা (IEC 60831):\nক্যাপাসিটর বন্ধ করার পর টার্মিনালে প্রায় ৫৮৭ V ডিসি সঞ্চিত থাকতে পারে। দুর্ঘটনা এড়াতে স্থায়ী ডিসচার্জ রেজিস্টরের মাধ্যমে ১-৩ মিনিটের মধ্যে অবশিষ্ট ভোল্টেজ ৫০ ভোল্টের নিচে নামিয়ে আনা বাধ্যতামূলক।\n\n৪. ইনরাশ কারেন্ট ও AC-6b কন্টাক্টর:\nক্যাপাসিটর অন করার সময় রেটেড কারেন্টের ১০০-২০০ গুণ ক্ষণস্থায়ী ইনরাশ কারেন্ট প্রবাহিত হয়। সাধারণ কন্টাক্টর পুড়ে যাওয়া ঠেকাতে প্রি-চার্জিং ড্যাম্পিং রেজিস্টর সহ AC-6b স্পেশাল কন্টাক্টর ব্যবহার করা হয়।'
  },
  formulas: [
    {
      id: 'f-capacitor-sizing-qc',
      symbol: 'Q_C',
      expression: 'Q_C = P \\cdot [\\tan(\\phi_1) - \\tan(\\phi_2)] = P \\cdot \\left[\\tan(\\arccos(PF_1)) - \\tan(\\arccos(PF_2))\\right]',
      title: {
        en: 'Required Capacitor Bank Rating Equation',
        hi: 'आवश्यक कैपेसिटर बैंक रेटिंग समीकरण',
        bn: 'প্রয়োজনীয় ক্যাপাসিটর ব্যাংক রেটিং সমীকরণ'
      },
      description: {
        en: 'Calculates the exact 3-phase capacitive reactive power needed to raise the power factor from PF1 to PF2 for an active load P.',
        hi: 'सक्रिय भार P के लिए पावर फैक्टर को PF1 से PF2 तक सुधारने हेतु आवश्यक कैपेसिटर प्रतिघाती शक्ति की सटीक गणना।',
        bn: 'P কিলোওয়াট লোডের পাওয়ার ফ্যাক্টর PF1 থেকে PF2 তে উন্নীত করতে প্রয়োজনীয় ৩-ফেজ ক্যাপাসিটর kVAR নির্ণয়।'
      },
      variables: [
        { symbol: 'Q_C', name: { en: 'Capacitor bank rating (kVAR)', hi: 'कैपेसिटर बैंक रेटिंग (kVAR)', bn: 'ক্যাপাসিটর ব্যাংক রেটিং (kVAR)' } },
        { symbol: 'P', name: { en: 'Total active load (kW)', hi: 'कुल सक्रिय भार (kW)', bn: 'মোট সক্রিয় লোড (kW)' } },
        { symbol: 'PF_1', name: { en: 'Initial lagging power factor', hi: 'प्रारंभिक लैगिंग पावर फैक्टर', bn: 'প্রাথমিক ল্যাগিং পাওয়ার ফ্যাক্টর' } },
        { symbol: 'PF_2', name: { en: 'Target improved power factor', hi: 'लक्षित सुधरा हुआ पावर फैक्टर', bn: 'কাঙ্ক্ষিত উন্নত পাওয়ার ফ্যাক্টর' } }
      ]
    },
    {
      id: 'f-capacitance-delta',
      symbol: 'C_\\Delta',
      expression: 'C_\\Delta = \\frac{Q_C}{3 \\cdot 2\\pi f \\cdot V_L^2} \\times 10^9 \\quad (\\mu\\text{F})',
      title: {
        en: 'Capacitance Per Phase in Delta Connection',
        hi: 'डेल्टा कनेक्शन में प्रति फेज धारिता',
        bn: 'ডেল্টা সংযোগে প্রতি ফেজের ক্যাপাসিট্যান্স'
      },
      description: {
        en: 'Determines the microfarad capacitance of each branch capacitor in a Delta-connected 3-phase bank at line voltage V_L and frequency f.',
        hi: 'लाइन वोल्टेज V_L और आवृत्ति f पर 3-फेज डेल्टा बैंक में प्रत्येक शाखा के लिए माइक्रोफैराड में धारिता की गणना।',
        bn: 'লাইন ভোল্টেজ V_L এবং কম্পাঙ্ক f-এ ডেল্টা সংযুক্ত ৩-ফেজ ব্যাংকের প্রতিটি শাখার মাইক্রোফ্যারাড মান।'
      },
      variables: [
        { symbol: 'C_\\Delta', name: { en: 'Capacitance per phase (μF)', hi: 'प्रति फेज धारिता (μF)', bn: 'প্রতি ফেজ ক্যাপাসিট্যান্স (μF)' } },
        { symbol: 'Q_C', name: { en: 'Total 3-phase reactive power (VAR)', hi: 'कुल 3-फेज प्रतिघाती शक्ति (VAR)', bn: 'মোট ৩-ফেজ রিঅ্যাক্টিভ পাওয়ার (VAR)' } },
        { symbol: 'V_L', name: { en: 'Line-to-line RMS voltage (V)', hi: 'लाइन-टू-लाइन वोल्टेज (V)', bn: 'লাইন-টু-লাইন ভোল্টেজ (V)' } },
        { symbol: 'f', name: { en: 'Grid frequency (Hz)', hi: 'ग्रिड आवृत्ति (Hz)', bn: 'গ্রিড কম্পাঙ্ক (Hz)' } }
      ]
    },
    {
      id: 'f-discharge-resistor',
      symbol: 'R_{dis}',
      expression: 'R_{dis} \\le \\frac{t}{k \\cdot C \\cdot \\ln\\left(\\frac{\\sqrt{2} \\cdot V_L}{V_{safe}}\\right)}',
      title: {
        en: 'Discharge Resistor Value for Safety De-energization',
        hi: 'सुरक्षित डिस्चार्ज हेतु डिस्चार्ज रेसिस्टर मान',
        bn: 'নিরাপদ ডিসচার্জের জন্য রেজিস্টর মান সমীকরণ'
      },
      description: {
        en: 'Calculates the maximum allowable resistance per phase to discharge peak DC residual voltage to V_safe (<= 50V) within time t seconds as per IEC 60831.',
        hi: 'IEC 60831 मानक के अनुसार समय t सेकंड में वोल्टेज को 50 V या उससे कम तक सुरक्षित डिस्चार्ज करने हेतु अधिकतम प्रतिरोध।',
        bn: 'IEC 60831 স্ট্যান্ডার্ড অনুসারে t সেকেন্ডের মধ্যে অবশিষ্ট ভোল্টেজ ৫০ ভোল্টের নিচে নামিয়ে আনার সর্বোচ্চ অনুমোদিত রোধ।'
      },
      variables: [
        { symbol: 'R_{dis}', name: { en: 'Maximum discharge resistance per phase (Ω)', hi: 'प्रति फेज अधिकतम डिस्चार्ज प्रतिरोध (Ω)', bn: 'প্রতি ফেজে সর্বোচ্চ ডিসচার্জ রোধ (Ω)' } },
        { symbol: 't', name: { en: 'Discharge time limit (typically 60s or 180s)', hi: 'डिस्चार्ज समय सीमा (60s या 180s)', bn: 'ডিসচার্জ সময়সীমা (৬০ বা ১৮০ সেকেন্ড)' } },
        { symbol: 'V_{safe}', name: { en: 'Safety threshold voltage (50 V)', hi: 'सुरक्षित वोल्टेज सीमा (50 V)', bn: 'নিরাপদ ভোল্টেজ সীমা (৫০ V)' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-ch13-l03-delta-vs-star',
      title: {
        en: 'Derivation: Why Delta Outperforms Star in LV Applications',
        hi: 'व्युत्पत्ति: LV अनुप्रयोगों में डेल्टा स्टार से बेहतर क्यों है',
        bn: 'গাণিতিক প্রমাণ: লো-ভোল্টেজ সিস্টেমে ডেল্টা কেন স্টারের চেয়ে সাশ্রয়ী'
      },
      content: {
        en: 'Consider a 3-phase system with line voltage V_L and frequency f = 50 Hz:\n\nIn a Delta (Δ) Configuration:\nEach capacitor unit is connected directly between two phase lines. The voltage across each capacitor is V_C = V_L.\nThe reactive power supplied per phase is:\nQ_Δ_ph = V_L² / X_C_Δ = ω · C_Δ · V_L²\nTotal 3-phase reactive power Q_total is:\nQ_total = 3 · Q_Δ_ph = 3 · ω · C_Δ · V_L²\n\nIn a Star (Y) Configuration:\nEach capacitor unit is connected between a phase line and the neutral point. The voltage across each capacitor is the phase voltage V_ph = V_L / √3.\nThe reactive power supplied per phase is:\nQ_Y_ph = V_ph² / X_C_Y = (V_L / √3)² · ω · C_Y = (V_L² / 3) · ω · C_Y\nTotal 3-phase reactive power Q_total is:\nQ_total = 3 · Q_Y_ph = ω · C_Y · V_L²\n\nEquating total 3-phase reactive power (Q_total,Δ = Q_total,Y):\n3 · ω · C_Δ · V_L² = ω · C_Y · V_L²\nDividing both sides by (ω · V_L²):\n3 · C_Δ = C_Y   =>   C_Y = 3 · C_Δ   or   C_Δ = C_Y / 3\n\nPractical Engineering Impact: To deliver 100 kVAR at 415 V, a Delta bank requires only 616 μF per phase, while a Star bank requires 1,848 μF per phase. Delta uses one-third the dielectric material and occupies one-third the cabinet volume. However, in Medium-Voltage (11 kV / 33 kV) and High-Voltage systems, Star configuration with grounded or floating neutral is preferred because it subjects the capacitor insulation to only phase voltage (V_L / √3), substantially lowering insulation cost.',
        hi: 'डेल्टा बनाम स्टार गणितीय तुलना:\n\nडेल्टा में वोल्टेज V_C = V_L होता है, अतः कुल 3-फेज आउटपुट:\nQ_total = 3 · ω · C_Δ · V_L²\n\nस्टार में वोल्टेज V_C = V_L / √3 होता है, अतः कुल 3-फेज आउटपुट:\nQ_total = ω · C_Y · V_L²\n\nदोनों को बराबर रखने पर: C_Y = 3 · C_Δ\n\nव्यावहारिक महत्व: 415 V पर 100 kVAR देने के लिए डेल्टा में केवल 616 μF चाहिए, जबकि स्टार में 1,848 μF। डेल्टा में 66% कम कैपेसिटेंस लगता है, जिससे पैनल का आकार और लागत बहुत कम हो जाती है। हालांकि 11 kV या 33 kV जैसे उच्च वोल्टेज पर इंसुलेशन तनाव कम रखने के लिए स्टार कनेक्शन को प्राथमिकता दी जाती है।',
        bn: 'ডেল্টা ও স্টার সংযোগের তুলনা:\n\nডেল্টায় প্রতি ক্যাপাসিটরে ভোল্টেজ V_C = V_L, ফলে মোট ক্ষমতা:\nQ_total = ৩ · ω · C_Δ · V_L²\n\nস্টারে প্রতি ক্যাপাসিটরে ভোল্টেজ V_C = V_L / √৩, ফলে মোট ক্ষমতা:\nQ_total = ω · C_Y · V_L²\n\nউভয় ক্ষেত্রে সমপরিমাণ kVAR পেতে: C_Y = ৩ · C_Δ\n\nপ্রকৌশলগত তাৎপর্য: ৪১৫ ভোল্টে ১০০ kVAR পাওয়ার জন্য ডেল্টায় প্রতি ফেজে মাত্র ৬১৬ μF প্রয়োজন, যেখানে স্টারে লাগবে ১,৮৪৮ μF। ডেল্টায় ডাই-ইলেকট্রিক উপাদান দুই-তৃতীয়াংশ কম লাগে। তবে ১১ kV বা ৩৩ kV হাই-ভোল্টেজ সিস্টেমে ইনসুলেশনের ওপর চাপ কমাতে স্টার সংযোগ ব্যবহার করা হয়।'
      }
    },
    {
      id: 'sec-ch13-l03-standards',
      title: {
        en: 'Standards, Inrush Protection & Switching Specifications',
        hi: 'मानक, इनरश सुरक्षा एवं स्विचिंग विनिर्देश',
        bn: 'স্ট্যান্ডার্ড, ইনরাশ কারেন্ট সুরক্ষা ও সুইচিং স্পেসিফিকেশন'
      },
      content: {
        en: 'Capacitor banks must comply with international standards (IEC 60831-1/2 for LV, IEC 60871 for HV):\n\n1. Voltage and Current Withstand Tolerances:\n- Continuous Overvoltage: Must withstand 1.10 · V_rated for up to 8 hours in every 24 hours (to tolerate utility light-load voltage rises).\n- Peak Transient Overvoltage: Must tolerate 1.30 · V_rated for 1 minute.\n- Continuous Overcurrent: Must tolerate 1.30 to 1.50 · I_rated continuously to accommodate harmonic currents without thermal dielectric breakdown.\n\n2. Inrush Current Limiting and AC-6b Contactors:\nWhen switching parallel capacitor stages onto an already energized bus (back-to-back switching), the impedance between adjacent banks is merely the short busbar inductance (fractions of a microhenry). The peak inrush current can exceed 200 · I_n with frequencies of 5–15 kHz.\nTo mitigate this, panels must use:\n- AC-6b rated contactors: These incorporate auxiliary early-make contacts with series resistance wires that absorb the initial inrush surge for 2–5 milliseconds before the main silver-alloy contacts close.\n- Inrush damping air-core reactors: 0.2–0.5% series reactors connected in series with each capacitor branch to limit inrush current to < 30 · I_n.\n\n3. Fuse Selection:\nHigh-Rupturing Capacity (HRC) fuses protecting capacitor stages must be rated between 1.6 · I_n and 1.8 · I_n to prevent nuisance tripping caused by charging inrush currents and harmonic content.',
        hi: 'कैपेसिटर बैंक के लिए आवश्यक मानक (IEC 60831):\n\n1. ओवरवोल्टेज और ओवरकरंट सहनशीलता:\n- रेटेड वोल्टेज का 110% प्रतिदिन 8 घंटे तक सहन करने में सक्षम होना चाहिए।\n- हार्मोनिक धाराओं को सहन करने के लिए रेटेड करंट का 130% से 150% निरंतर वहन करने योग्य होना चाहिए।\n\n2. AC-6b कांटेक्टर और इनरश करंट सुरक्षा:\nसमानांतर चरणों को चालू करते समय 100 से 200 गुना तेज इनरश करंट बह सकता है। साधारण कांटेक्टर खराब होने से बचाने के लिए प्री-इंसर्शन डैम्पिंग रेसिस्टर युक्त AC-6b कांटेक्टर अनिवार्य हैं।\n\n3. HRC फ्यूज रेटिंग: इनरश करंट से ट्रिपिंग रोकने के लिए फ्यूज को रेटेड करंट के 1.6 से 1.8 गुना पर चुना जाता है।',
        bn: 'ক্যাপাসিটর ব্যাংকের আন্তর্জাতিক মান (IEC 60831):\n\n১. ভোল্টেজ ও কারেন্ট সহনশীলতা:\n- রেটেড ভোল্টেজের ১১০% প্রতিদিন ৮ ঘণ্টা পর্যন্ত সহ্য করার ক্ষমতা থাকতে হবে।\n- হারমোনিকস কারেন্টের কারণে রেটেড কারেন্টের ১৩০% থেকে ১৫০% অবিচ্ছিন্নভাবে বহনের ক্ষমতা থাকা আবশ্যক।\n\n২. AC-6b কন্টাক্টর ও ইনরাশ প্রোটেকশন:\nক্যাপাসিটর চালুর সময় ১০০-২০০ গুণের বিপজ্জনক ক্ষণস্থায়ী ইনরাশ কারেন্ট ঠেকাতে ড্যাম্পিং তারযুক্ত বিশেষায়িত AC-6b কন্টাক্টর ব্যবহার করা হয়।\n\n৩. HRC ফিউজ সাইজিং: আকস্মিক ইনরাশ ট্রিপিং এড়াতে ক্যাপাসিটরের ফিউজ রেটিং রেটেড কারেন্টের ১.৬ থেকে ১.৮ গুণ নির্ধারণ করা হয়।'
      }
    }
  ],
  examples: [
    {
      id: 'ex-ch13-l03-01',
      title: {
        en: 'Three-Phase 500 kW Plant Capacitor Bank Sizing & Component Sizing',
        hi: 'तीन-फेज 500 kW प्लांट कैपेसिटर बैंक साइज़िंग एवं घटक गणना',
        bn: '৩-ফেজ ৫০০ kW প্ল্যান্টের ক্যাপাসিটর ব্যাংক সাইজিং ও কম্পোনেন্ট হিসাব'
      },
      problem: {
        en: 'An industrial factory draws a continuous active load of 500 kW at 415 V, 50 Hz, with a poor power factor of 0.68 lagging. The management wants to improve the power factor to 0.98 lagging to qualify for utility rebates. Determine:\n1. The required capacitor bank rating (Q_C) in kVAR.\n2. The capacitance per phase (in μF) assuming a Delta (Δ) connected bank.\n3. The rated line current drawn by the capacitor bank.\n4. The minimum HRC backup fuse rating.',
        hi: 'एक औद्योगिक संयंत्र 415 V, 50 Hz पर 0.68 लैगिंग पावर फैक्टर के साथ 500 kW का निरंतर भार खींचता है। प्रबंधन पावर फैक्टर को 0.98 लैगिंग तक सुधारना चाहता है। ज्ञात कीजिए:\n1. आवश्यक कैपेसिटर बैंक रेटिंग (Q_C) kVAR में।\n2. डेल्टा कनेक्शन मानते हुए प्रति फेज धारिता (μF में)।\n3. कैपेसिटर बैंक द्वारा खींची जाने वाली रेटेड लाइन धारा।\n4. अनुशंसित HRC बैकअप फ्यूज रेटिंग।',
        bn: 'একটি শিল্প কারখানা ৪১৫ V, ৫০ Hz লাইনে ০.৬৮ ল্যাগিং পাওয়ার ফ্যাক্টরে ৫০০ kW লোড পরিচালনা করে। পাওয়ার ফ্যাক্টর ০.৯৮ ল্যাগিং-এ উন্নীত করতে হবে। নির্ণয় করুন:\n১. প্রয়োজনীয় ক্যাপাসিটর ব্যাংকের ক্ষমতা (Q_C, kVAR)।\n২. ডেল্টা সংযোগে প্রতি ফেজের ক্যাপাসিট্যান্স (μF)।\n৩. ক্যাপাসিটর ব্যাংকের রেটেড লাইন কারেন্ট।\n৪. নূন্যতম HRC ফিউজ রেটিং।'
      },
      solution: {
        en: 'Step 1: Calculate required kVAR (Q_C):\nInitial phase angle: ϕ₁ = arccos(0.68) = 47.16°\ntan(ϕ₁) = tan(47.16°) = 1.0785\nTarget phase angle: ϕ₂ = arccos(0.98) = 11.48°\ntan(ϕ₂) = tan(11.48°) = 0.2031\nQ_C = P · [tan(ϕ₁) - tan(ϕ₂)] = 500 kW · [1.0785 - 0.2031] = 500 · 0.8754 = 437.7 kVAR\nSelect standard commercial rating: 450 kVAR bank (consisting of 9 steps of 50 kVAR).\n\nStep 2: Calculate Delta capacitance per phase (C_Δ):\nUsing exact calculated Q_C = 437.7 kVAR = 437,700 VAR:\nC_Δ = Q_C / (3 · 2π · f · V_L²)\nC_Δ = 437,700 / (3 · 2 · π · 50 · 415²)\nC_Δ = 437,700 / (300 · π · 172,225) = 437,700 / 162,319,234 = 2.6965 × 10⁻³ F = 2,696.5 μF per phase.\n(If using standard 450 kVAR bank: C_Δ = 2,772 μF per phase).\n\nStep 3: Calculate rated line current of the 450 kVAR bank:\nI_C = Q_C / (√3 · V_L) = 450,000 VA / (√3 · 415 V) = 450,000 / 718.8 = 626.0 A\n\nStep 4: Select HRC fuse rating:\nStandard engineering safety multiplier for capacitors is 1.65 to 1.80 · I_C:\nI_fuse = 1.65 · 626 A = 1,033 A => Select standard 1,000 A or 1,200 A main HRC fuse link (or 9 individual stage fuses of 1.65 · 69.5 A ≈ 125 A per 50 kVAR step).',
        hi: 'चरण 1: आवश्यक kVAR की गणना:\nϕ₁ = arccos(0.68) = 47.16°, tan(ϕ₁) = 1.0785\nϕ₂ = arccos(0.98) = 11.48°, tan(ϕ₂) = 0.2031\nQ_C = 500 · (1.0785 - 0.2031) = 500 · 0.8754 = 437.7 kVAR (मानक बैंक: 450 kVAR)।\n\nचरण 2: डेल्टा धारिता प्रति फेज (C_Δ):\nC_Δ = 437,700 / (3 · 2π · 50 · 415²) = 2,696.5 μF प्रति फेज।\n\nचरण 3: रेटेड लाइन धारा (450 kVAR के लिए):\nI_C = 450,000 / (√3 · 415) = 626.0 A\n\nचरण 4: HRC फ्यूज चयन:\nI_fuse = 1.65 · 626 A = 1,033 A (मुख्य फ्यूज: 1,000 A या 1,200 A)।',
        bn: 'ধাপ ১: প্রয়োজনীয় kVAR নির্ণয়:\nϕ₁ = arccos(০.৬৮) = ৪৭.১৬°, tan(ϕ₁) = ১.০৭৮৫\nϕ₂ = arccos(০.৯৮) = ১১.৪৮°, tan(ϕ₂) = ০.২০৩১\nQ_C = ৫০০ · (১.০৭৮৫ - ০.২০৩১) = ৪৩৭.৭ kVAR (স্ট্যান্ডার্ড সাইজ: ৪৫০ kVAR)।\n\nধাপ ২: ডেল্টায় প্রতি ফেজে ধারকত্ব:\nC_Δ = ৪৩৭,৭০০ / (৩ · ২π · ৫০ · ৪১৫²) = ২,৬৯৬.৫ μF প্রতি ফেজে।\n\nধাপ ৩: রেটেড লাইন কারেন্ট:\nI_C = ৪৫০,০০০ / (√৩ · ৪১৫) = ৬২৬.০ A\n\nধাপ ৪: ফিউজ রেটিং:\nI_fuse = ১.৬৫ · ৬২৬ = ১,০৩৩ A (স্ট্যান্ডার্ড ১,০০০ A বা ১,২০০ A মূল ফিউজ)।'
      }
    },
    {
      id: 'ex-ch13-l03-02',
      title: {
        en: 'IEC 60831 Discharge Resistor Calculation for Safety De-energization',
        hi: 'सुरक्षित डिस्चार्ज हेतु IEC 60831 डिस्चार्ज रेसिस्टर गणना',
        bn: 'নিরাপদ ডিসচার্জের জন্য IEC 60831 ডিসচার্জ রেজিস্টরের হিসাব'
      },
      problem: {
        en: 'A 50 kVAR, 415 V, 50 Hz Delta-connected capacitor step has a capacitance of C_Δ = 308 μF per phase. Calculate the maximum discharge resistor resistance (R_dis) that must be permanently connected across each phase to discharge the residual DC terminal voltage from peak voltage (V_peak = √2 · 415 V = 587 V) down to a safe touch potential of 50 V within 60 seconds as mandated by IEC 60831-1.',
        hi: 'एक 50 kVAR, 415 V, 50 Hz डेल्टा-कनेक्टेड कैपेसिटर चरण की धारिता C_Δ = 308 μF प्रति फेज है। प्रत्येक फेज के आर-पार लगाए जाने वाले डिस्चार्ज रेसिस्टर का अधिकतम मान (R_dis) ज्ञात कीजिए ताकि IEC 60831-1 के अनुसार 60 सेकंड के भीतर अवशिष्ट वोल्टेज 587 V से घटकर सुरक्षित 50 V तक आ जाए।',
        bn: 'একটি ৫০ kVAR, ৪১৫ V, ৫০ Hz ডেল্টা ক্যাপাসিটর ধাপের প্রতি ফেজ ধারকত্ব C_Δ = ৩০৮ μF। IEC 60831-1 অনুসারে ৬০ সেকেন্ডের মধ্যে অবশিষ্ট ভোল্টেজ ৫৮৭ V থেকে নিরাপদ ৫০ ভোল্টে নামিয়ে আনতে প্রতিটি ফেজে সর্বোচ্চ কত মানের ডিসচার্জ রেজিস্টর (R_dis) লাগাতে হবে?'
      },
      solution: {
        en: 'Step 1: Understand capacitor RC exponential discharge law:\nV(t) = V_0 · e^(-t / RC)\nRearranging for R:\ne^(t / RC) = V_0 / V(t)\nt / RC = ln(V_0 / V(t))\nR ≤ t / [C · ln(V_0 / V(t))]\n\nStep 2: Identify parameter values:\nInitial peak voltage V_0 = √2 · 415 V = 586.9 V\nTarget safe voltage V(t) = 50 V\nTime limit t = 60 s\nCapacitance per phase C = 308 μF = 308 × 10⁻⁶ F\n\nStep 3: Compute discharge resistance:\nVoltage ratio = 586.9 / 50 = 11.738\nln(11.738) = 2.4628\nR_dis ≤ 60 / [308 × 10⁻⁶ · 2.4628] = 60 / 0.0007585 = 79,103 Ω ≈ 79.1 kΩ\nSelect standard commercial resistor: 68 kΩ or 75 kΩ (rated for continuous wattage P = V_rms² / R = 415² / 68,000 = 2.53 W, choose a 5 W wirewound resistor).\n\nConclusion: A 68 kΩ, 5 W resistor across each phase guarantees the capacitor discharges safely below 50 V in under 60 seconds, preventing fatal electric shocks to maintenance personnel.',
        hi: 'चरण 1: डिस्चार्ज सूत्र V(t) = V_0 · e^(-t / RC)\nR ≤ t / [C · ln(V_0 / V(t))]\n\nचरण 2: मान:\nV_0 = 586.9 V, V(t) = 50 V, t = 60 सेकंड, C = 308 μF\nln(586.9 / 50) = ln(11.738) = 2.4628\n\nचरण 3: गणना:\nR_dis ≤ 60 / (308 × 10⁻⁶ · 2.4628) = 79.1 kΩ\nमानक प्रतिरोधक: 68 kΩ, 5 W वायरवाउंड रेसिस्टर।\n\nनिष्कर्ष: 68 kΩ का प्रतिरोधक कैपेसिटर को 60 सेकंड में 50 V से नीचे डिस्चार्ज कर देता है, जिससे ऑपरेटर को करंट लगने का खतरा समाप्त हो जाता है।',
        bn: 'ধাপ ১: সূত্র R ≤ t / [C · ln(V_0 / V(t))]\n\nধাপ ২: মানসমূহ:\nV_0 = ৫৮৬.৯ V, V(t) = ৫০ V, t = ৬০ সেকেন্ড, C = ৩০৮ μF\nln(৫৮৬.৯ / ৫০) = ২.৪৬২৮\n\nধাপ ৩: গণনা:\nR_dis ≤ ৬০ / (৩০৮ × ১০⁻⁶ · ২.৪৬২৮) = ৭৯.১ kΩ\nবাণিজ্যিক নির্বাচন: ৬৮ kΩ, ৫ ওয়াট ওয়্যারউইন্ড রেজিস্টর।\n\nফলাফল: ৬৮ kΩ রেজিস্টর ব্যবহার করলে ৬০ সেকেন্ডের মধ্যে ভোল্টেজ ৫০ ভোল্টের নিচে নেমে আসে, ফলে রক্ষণাবেক্ষণকারী কর্মীরা নিরাপদ থাকে।'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Textile Spinning Mill Central Capacitor Sizing: Calculating bulk kVAR requirements for mills running hundreds of small ring-frame induction motors simultaneously.',
      'Water Pumping Substation Power Factor Penalty Elimination: Sizing a dedicated 120 kVAR Delta capacitor bank across municipal intake water pump motors to eliminate local utility penalties.',
      'Cement Plant Ball Mill Drives: Sizing 11 kV Star-connected capacitor banks equipped with neutral unbalance protection relays for heavy grinding ball mills.'
    ],
    hi: [
      'कपड़ा कताई मिल कैपेसिटर साइज़िंग: सैकड़ों छोटी इंडक्शन मोटरों को संभालने के लिए मुख्य बसबार पर सही kVAR बैंक की गणना।',
      'वाटर पंपिंग स्टेशन जुर्माना निवारण: नगर निगम के वाटर पंपों पर 120 kVAR डेल्टा बैंक लगाकर बिजली बिल पेनल्टी से मुक्ति।',
      'सीमेंट प्लांट बॉल मिल: भारी ग्राइंडिंग मोटरों के लिए न्यूट्रल अनबैलेंस सुरक्षा से युक्त 11 kV स्टार-कनेक्टेड कैपेसिटर बैंकों का आकार तय करना।'
    ],
    bn: [
      'টেক্সটাইল স্পিনিং মিল: শত শত ছোট রিং-ফ্রেম ইন্ডাকশন মোটরের সার্বিক রিঅ্যাক্টিভ পাওয়ারের জন্য মূল প্যানেলে সঠিক kVAR ব্যাংক সাইজিং।',
      'ওয়াটার পাম্পিং সাবস্টেশন: পানি সরবরাহকারী পাম্প মোটরে ১২০ kVAR ডেল্টা ব্যাংক স্থাপন করে ইউটিলিটি জরিমানা বন্ধ করা।',
      'সিমেন্ট কারখানা বল মিল: ভারী ক্রাশিং মোটরের জন্য ১১ kV স্টার সংযুক্ত হাই-ভোল্টেজ ক্যাপাসিটর ব্যাংক ডিজাইন।'
    ]
  },
  importantPoints: {
    en: [
      'In a 3-phase system, a Delta capacitor bank requires only 1/3 the capacitance of a Star bank: C_Δ = C_Y / 3 for identical kVAR rating.',
      'IEC 60831 mandates that every low-voltage capacitor have internal or external discharge resistors reducing terminal voltage to ≤ 50 V within 3 minutes.',
      'Standard motor contactors must NEVER be used to switch capacitor banks; specialized AC-6b contactors with pre-insertion damping resistors are required.'
    ],
    hi: [
      '3-फेज सिस्टम में समान kVAR के लिए डेल्टा बैंक में स्टार बैंक की तुलना में केवल एक तिहाई धारिता की आवश्यकता होती है: C_Δ = C_Y / 3।',
      'IEC 60831 के तहत लो-वोल्टेज कैपेसिटर में 3 मिनट के भीतर वोल्टेज को ≤ 50 V तक डिस्चार्ज करने के लिए रेसिस्टर होना अनिवार्य है।',
      'कैपेसिटर स्विच करने के लिए साधारण मोटर कांटेक्टर का उपयोग कभी न करें; डैम्पिंग रेसिस्टर युक्त विशेष AC-6b कांटेक्टर ही उपयोग करें।'
    ],
    bn: [
      'একই kVAR ক্ষমতার জন্য ৩-ফেজ সিস্টেমে ডেল্টা ব্যাংকে স্টার ব্যাংকের মাত্র এক-তৃতীয়াংশ ক্যাপাসিট্যান্স লাগে: C_Δ = C_Y / ৩।',
      'IEC 60831 স্ট্যান্ডার্ড অনুযায়ী ৩ মিনিটের মধ্যে টার্মিনাল ভোল্টেজ ≤ ৫০ V তে নামিয়ে আনতে ডিসচার্জ রেজিস্টর থাকা বাধ্যতামূলক।',
      'ক্যাপাসিটর ব্যাংক অন-অফ করার জন্য সাধারণ কন্টাক্টর নিষিদ্ধ; প্রাক-সংযোগ ড্যাম্পিং রেজিস্টরযুক্ত AC-6b কন্টাক্টর আবশ্যক।'
    ]
  },
  commonMistakes: {
    en: [
      'Mistake: Sizing capacitor banks using arithmetic power formula Q = S₁ - S₂ instead of Q = P · [tan(ϕ₁) - tan(ϕ₂)]. Correction: Sizing based on apparent power kVA difference undersizes the capacitor bank because power components are orthogonal vectors, not scalars.',
      'Mistake: Touching capacitor terminals immediately after opening the isolator. Correction: Residual DC charge up to ~600 V persists across capacitor terminals until discharge resistors bleed the charge. Always wait at least 3 to 5 minutes and verify with an approved multimeter.'
    ],
    hi: [
      'त्रुटि: Q = P · [tan(ϕ₁) - tan(ϕ₂)] के स्थान पर सीधे kVA का अंतर Q = S₁ - S₂ मान लेना। सुधार: आभासी शक्ति का सीधा अंतर कैपेसिटर को कम आकार का बना देगा क्योंकि ये लंबवत सदिश होते हैं।',
      'त्रुटि: आइसोलेटर बंद करते ही कैपेसिटर टर्मिनलों को छू लेना। सुधार: टर्मिनलों पर 600 V DC तक खतरनाक चार्ज बना रहता है। हमेशा 3 से 5 मिनट प्रतीक्षा करें और डिस्चार्ज की पुष्टि के बाद ही छुएं।'
    ],
    bn: [
      'ভুল: Q = P · [tan(ϕ₁) - tan(ϕ₂)] এর পরিবর্তে সরাসরি আপাত ক্ষমতার বিয়োগফল Q = S₁ - S₂ ধরে সাইজিং করা। সংশোধন: kVA এর সরাসরি বিয়োগফল ক্যাপাসিটরকে ছোট করে ফেলবে কারণ এরা সমকোণী ভেক্টর।',
      'ভুল: মেইন সুইচ অফ করার সাথে সাথেই ক্যাপাসিটরের টার্মিনাল স্পর্শ করা। সংশোধন: ক্যাপাসিটরে প্রায় ৬০০ V পর্যন্ত বিপজ্জনক ডিসি ভোল্টেজ জমা থাকে। সর্বদা ৩ থেকে ৫ মিনিট অপেক্ষা করুন এবং মিটার দিয়ে ভোল্টেজ পরীক্ষা করে নিন।'
    ]
  },
  keyTakeaways: {
    en: [
      'Capacitor sizing formula: Q_C = P · [tan(arccos(PF₁)) - tan(arccos(PF₂))].',
      'Low-voltage capacitor banks utilize Delta connection to minimize dielectric capacitance requirements by 66%.',
      'Inrush suppression via AC-6b contactors and discharge resistors are vital for equipment safety and longevity.'
    ],
    hi: [
      'कैपेसिटर साइज़िंग सूत्र: Q_C = P · [tan(ϕ₁) - tan(ϕ₂)]।',
      'कम वोल्टेज पर आवश्यक धारिता को 66% तक घटाने के लिए डेल्टा कनेक्शन का उपयोग किया जाता है।',
      'AC-6b कांटेक्टर और डिस्चार्ज रेसिस्टर उपकरणों की सुरक्षा और लंबी उम्र के लिए अनिवार्य हैं।'
    ],
    bn: [
      'ক্যাপাসিটর ব্যাংক সাইজিং সূত্র: Q_C = P · [tan(ϕ₁) - tan(ϕ₂)]।',
      'লো-ভোল্টেজ সিস্টেমে ক্যাপাসিট্যান্সের পরিমাণ ৬৬% কমাতে ডেল্টা সংযোগ ব্যবহৃত হয়।',
      'ইনরাশ কারেন্ট রোধে AC-6b কন্টাক্টর এবং সুরক্ষায় ডিসচার্জ রেজিস্টর অপরিহার্য।'
    ]
  },
  practiceQuestions: [
    {
      id: 'pq-ch13-l03-01',
      question: {
        en: 'A 3-phase factory draws 240 kW at 415 V, 50 Hz, with a power factor of 0.75 lagging. If a 120 kVAR Delta-connected capacitor bank is installed, what will be the resulting power factor?',
        hi: 'एक 3-फेज कारखाना 415 V, 50 Hz पर 0.75 लैगिंग पावर फैक्टर के साथ 240 kW लोड खींचता है। यदि 120 kVAR का डेल्टा कैपेसिटर बैंक लगाया जाए, तो नया पावर फैक्टर क्या होगा?',
        bn: 'একটি ৩-ফেজ কারখানা ৪১৫ V, ৫০ Hz এ ০.৭৫ ল্যাগিং পাওয়ার ফ্যাক্টরে ২৪০ kW লোড বহন করে। এতে ১২০ kVAR এর একটি ডেল্টা ক্যাপাসিটর ব্যাংক যুক্ত করলে নতুন পাওয়ার ফ্যাক্টর কত হবে?'
      },
      hint: {
        en: 'Compute initial Q₁ = P · tan(arccos(0.75)), subtract Q_C = 120 kVAR to find Q_net, then calculate PF_new = cos(arctan(Q_net / P)).',
        hi: 'प्रारंभिक Q₁ = P · tan(ϕ₁) निकालें, उसमें से Q_C = 120 kVAR घटाकर Q_net प्राप्त करें, फिर PF = cos(arctan(Q_net / P)) की गणना करें।',
        bn: 'প্রাথমিক Q₁ = P · tan(ϕ₁) বের করুন, তা থেকে Q_C = ১২০ kVAR বিয়োগ করে নেট Q_net নির্ণয় করুন এবং তারপর PF = cos(arctan(Q_net / P)) গণনা করুন।'
      }
    },
    {
      id: 'pq-ch13-l03-02',
      question: {
        en: 'Why is a Star configuration with a floating or grounded neutral preferred over Delta for high-voltage (11 kV and 33 kV) utility capacitor banks despite requiring three times higher capacitance?',
        hi: 'तीन गुना अधिक धारिता की आवश्यकता होने के बावजूद हाई-वोल्टेज (11 kV एवं 33 kV) यूटिलिटी कैपेसिटर बैंकों के लिए डेल्टा की तुलना में फ्लोटिंग या ग्राउंडेड न्यूट्रल वाला स्टार कॉन्फ़िगरेशन क्यों पसंद किया जाता है?',
        bn: '৩ গুণ বেশি ক্যাপাসিট্যান্স লাগা সত্ত্বেও হাই-ভোল্টেজ (১১ kV ও ৩৩ kV) গ্রিড সাবস্টেশনের জন্য ডেল্টার পরিবর্তে স্টার সংযোগ কেন অগ্রাধিকার পায়?'
      },
      hint: {
        en: 'Compare the dielectric insulation voltage stress (V_L vs V_L/√3), container bushing voltage ratings, and neutral unbalance protection schemes.',
        hi: 'इंसुलेशन वोल्टेज तनाव (V_L बनाम V_L/√3), बुशिंग रेटिंग और न्यूट्रल अनबैलेंस फॉल्ट डिटेक्शन पर विचार करें।',
        bn: 'ডাই-ইলেকট্রিক ইনসুলেশনের ভোল্টেজ চাপ (V_L বনাম V_L/√৩), বুশিং খরচ এবং নিউট্রাল আনব্যালেন্স প্রোটেকশন ব্যবস্থার সুবিধা বিবেচনা করুন।'
      }
    }
  ],
  mcqs: [
    {
      id: 'mcq-ch13-l03-01',
      question: {
        en: 'What is the correct mathematical formula to calculate required capacitor bank rating Q_C to improve power factor from cos(ϕ₁) to cos(ϕ₂) for real load P?',
        hi: 'वास्तविक भार P के लिए पावर फैक्टर को cos(ϕ₁) से cos(ϕ₂) तक सुधारने हेतु आवश्यक कैपेसिटर बैंक रेटिंग Q_C की गणना का सही सूत्र क्या है?',
        bn: 'P সক্রিয় লোডের জন্য পাওয়ার ফ্যাক্টর cos(ϕ₁) থেকে cos(ϕ₂) এ উন্নীত করতে প্রয়োজনীয় ক্যাপাসিটর kVAR নির্ণয়ের সঠিক সূত্র কোনটি?'
      },
      options: [
        { en: 'Q_C = P · [tan(ϕ₁) - tan(ϕ₂)]', hi: 'Q_C = P · [tan(ϕ₁) - tan(ϕ₂)]', bn: 'Q_C = P · [tan(ϕ₁) - tan(ϕ₂)]' },
        { en: 'Q_C = P · [cos(ϕ₁) - cos(ϕ₂)]', hi: 'Q_C = P · [cos(ϕ₁) - cos(ϕ₂)]', bn: 'Q_C = P · [cos(ϕ₁) - cos(ϕ₂)]' },
        { en: 'Q_C = P · [sin(ϕ₁) + sin(ϕ₂)]', hi: 'Q_C = P · [sin(ϕ₁) + sin(ϕ₂)]', bn: 'Q_C = P · [sin(ϕ₁) + sin(ϕ₂)]' },
        { en: 'Q_C = P / [tan(ϕ₁) · tan(ϕ₂)]', hi: 'Q_C = P / [tan(ϕ₁) · tan(ϕ₂)]', bn: 'Q_C = P / [tan(ϕ₁) · tan(ϕ₂)]' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Initial reactive power is Q₁ = P · tan(ϕ₁) and target uncompensated reactive power is Q₂ = P · tan(ϕ₂). The capacitor must supply the difference: Q_C = Q₁ - Q₂ = P · [tan(ϕ₁) - tan(ϕ₂)].',
        hi: 'प्रारंभिक प्रतिघाती शक्ति Q₁ = P · tan(ϕ₁) और अंतिम Q₂ = P · tan(ϕ₂) होती है। कैपेसिटर को इनका अंतर देना होता है: Q_C = P · [tan(ϕ₁) - tan(ϕ₂)]।',
        bn: 'প্রাথমিক রিঅ্যাক্টিভ পাওয়ার Q₁ = P · tan(ϕ₁) এবং চূড়ান্ত Q₂ = P · tan(ϕ₂)। ক্যাপাসিটরকে এদের পার্থক্য মেটাতে হয়: Q_C = P · [tan(ϕ₁) - tan(ϕ₂)]।'
      }
    },
    {
      id: 'mcq-ch13-l03-02',
      question: {
        en: 'For the same 3-phase line voltage and same total kVAR output, how does the required capacitance per phase of a Star bank (C_Y) compare to a Delta bank (C_Δ)?',
        hi: 'समान 3-फेज लाइन वोल्टेज और समान kVAR आउटपुट के लिए स्टार बैंक की प्रति फेज धारिता (C_Y) डेल्टा बैंक (C_Δ) से किस प्रकार संबंधित है?',
        bn: 'একই ৩-ফেজ লাইন ভোল্টেজ ও kVAR এর জন্য স্টার ব্যাংকের প্রতি ফেজ ক্যাপাসিট্যান্স (C_Y) ডেল্টা ব্যাংকের (C_Δ) সাথে কীভাবে সম্পর্কিত?'
      },
      options: [
        { en: 'C_Y = 3 · C_Δ (Star requires 3 times more capacitance than Delta)', hi: 'C_Y = 3 · C_Δ (स्टार में डेल्टा से 3 गुना अधिक धारिता चाहिए)', bn: 'C_Y = ৩ · C_Δ (স্টারে ডেল্টার চেয়ে ৩ গুণ বেশি ক্যাপাসিট্যান্স লাগে)' },
        { en: 'C_Y = C_Δ / 3 (Star requires 1/3 the capacitance of Delta)', hi: 'C_Y = C_Δ / 3 (स्टार में डेल्टा की तुलना में 1/3 धारिता चाहिए)', bn: 'C_Y = C_Δ / ৩ (স্টারে ডেল্টার এক-তৃতীয়াংশ ক্যাপাসিট্যান্স লাগে)' },
        { en: 'C_Y = √3 · C_Δ', hi: 'C_Y = √3 · C_Δ', bn: 'C_Y = √৩ · C_Δ' },
        { en: 'C_Y = C_Δ (They require identical capacitance)', hi: 'C_Y = C_Δ (दोनों में समान धारिता चाहिए)', bn: 'C_Y = C_Δ (উভয় ক্ষেত্রে সমান ক্যাপাসিট্যান্স লাগে)' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'In Star, voltage across each unit is V_L / √3, producing 1/3 the kVAR of a Delta unit of equal Farads (Q ∝ V²). To produce equal total kVAR, Star needs 3 times the capacitance: C_Y = 3 · C_Δ.',
        hi: 'स्टार में वोल्टेज V_L / √3 होता है, जिससे प्रति माइक्रोफैराड आउटपुट 1/3 रह जाता है। अतः समान kVAR हेतु स्टार में 3 गुना धारिता लगानी पड़ती है: C_Y = 3 · C_Δ।',
        bn: 'স্টারে প্রতিটি ক্যাপাসিটরে ভোল্টেজ V_L / √৩ হওয়ায় আউটপুট এক-তৃতীয়াংশ হয়। সমপরিমাণ kVAR পেতে স্টারে ৩ গুণ বেশি ক্যাপাসিট্যান্স প্রয়োজন: C_Y = ৩ · C_Δ।'
      }
    },
    {
      id: 'mcq-ch13-l03-03',
      question: {
        en: 'According to IEC 60831, what is the mandatory requirement for capacitor discharge resistors on low-voltage capacitor banks?',
        hi: 'IEC 60831 के अनुसार लो-वोल्टेज कैपेसिटर बैंकों पर डिस्चार्ज रेसिस्टर हेतु क्या अनिवार्य शर्त है?',
        bn: 'IEC 60831 স্ট্যান্ডার্ড অনুসারে লো-ভোল্টেজ ক্যাপাসিটর ব্যাংকের ডিসচার্জ রেজিস্টরের বাধ্যতামূলক শর্ত কী?'
      },
      options: [
        { en: 'They must reduce residual DC terminal voltage to ≤ 50 V within 3 minutes of disconnection', hi: 'सप्लाई कटने के 3 मिनट के भीतर अवशिष्ट वोल्टेज को ≤ 50 V तक कम करना अनिवार्य है', bn: 'সংযোগ বিচ্ছিন্ন করার ৩ মিনিটের মধ্যে অবশিষ্ট ডিসি ভোল্টেজ ≤ ৫০ ভোল্টে নামিয়ে আনা আবশ্যক' },
        { en: 'They must instantly short-circuit the capacitor within 1 microsecond', hi: 'उन्हें 1 माइक्रोसेकंड के भीतर कैपेसिटर को तुरंत शॉर्ट-सर्किट करना चाहिए', bn: '১ মাইক্রোসেকেন্ডের মধ্যে ক্যাপাসিটরকে সরাসরি শর্ট-সার্কিট করতে হবে' },
        { en: 'They must maintain terminal voltage at 230 V continuously', hi: 'उन्हें टर्मिनल वोल्टेज को लगातार 230 V पर बनाए रखना चाहिए', bn: 'টার্মিনাল ভোল্টেজ সর্বদা ২৩০ ভোল্টে স্থির রাখতে হবে' },
        { en: 'They are only required if line frequency exceeds 400 Hz', hi: 'इनकी आवश्यकता केवल तभी होती है जब लाइन आवृत्ति 400 Hz से अधिक हो', bn: 'কেবলমাত্র ৪০০ Hz এর বেশি কম্পাঙ্কে এদের প্রয়োজন হয়' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'IEC 60831 mandates that every LV power capacitor incorporate discharge resistors capable of reducing residual terminal voltage from √2 · V_n down to 50 V or lower within 3 minutes for personnel safety.',
        hi: 'मानक IEC 60831 के अनुसार सुरक्षा सुनिश्चित करने के लिए कैपेसिटर का वोल्टेज 3 मिनट में घटकर 50 V या उससे कम हो जाना चाहिए।',
        bn: 'IEC 60831 নিয়ম অনুযায়ী কর্মীদের নিরাপত্তার স্বার্থে সংযোগ বিচ্ছিন্ন করার ৩ মিনিটের মধ্যে টার্মিনাল ভোল্টেজ ৫০ ভোল্ট বা তার নিচে নেমে আসা বাধ্যতামূলক।'
      }
    },
    {
      id: 'mcq-ch13-l03-04',
      question: {
        en: 'Why do conventional AC-3 motor contactors fail prematurely when used to switch parallel capacitor bank steps?',
        hi: 'समानांतर कैपेसिटर चरणों को स्विच करने के लिए उपयोग किए जाने पर पारंपरिक AC-3 मोटर कांटेक्टर समय से पहले खराब क्यों हो जाते हैं?',
        bn: 'সমান্তরাল ক্যাপাসিটর ধাপ অন-অফ করতে সাধারণ AC-3 মোটর কন্টাক্টর ব্যবহার করলে তা দ্রুত নষ্ট হয় কেন?'
      },
      options: [
        { en: 'Severe high-frequency inrush currents (100–200·I_n) cause arc flashover and weld the contact tips together', hi: 'तीव्र उच्च-आवृत्ति इनरश धाराएं (100–200·I_n) संपर्क युक्तियों को वेल्ड करके चिपका देती हैं', bn: 'তীব্র উচ্চ-কম্পাঙ্কের ইনরাশ কারেন্টের (১০০-২০০·I_n) কারণে স্পার্কিং হয় এবং কন্টাক্ট পয়েন্টগুলো গলে জোড়া লেগে যায়' },
        { en: 'The contactor operating coils burn out due to low power factor', hi: 'कम पावर फैक्टर के कारण कांटेक्टर की ऑपरेटिंग कॉइल जल जाती है', bn: 'লো পাওয়ার ফ্যাক্টরের কারণে কন্টাক্টরের অপারেটিং কয়েল পুড়ে যায়' },
        { en: 'DC reverse currents flow back into the AC supply grid', hi: 'डीसी रिवर्स धाराएं वापस एसी आपूर्ति ग्रिड में बहती हैं', bn: 'ডিসি রিভার্স কারেন্ট ব্যাক করে গ্রিডে প্রবেশ করে' },
        { en: 'AC-3 contactors only operate on direct current', hi: 'AC-3 कांटेक्टर केवल दिष्ट धारा पर कार्य करते हैं', bn: 'AC-3 কন্টাক্টর কেবল ডিসি লাইনে কাজ করে' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Back-to-back switching of energized capacitor banks draws peak inrush currents up to 100–200 times rated current at frequencies of several kilohertz. This instantaneous energy creates severe contact pitting and welds standard AC-3 contactor contacts closed.',
        hi: 'कैपेसिटर चालू करते समय रेटेड मान से 100 से 200 गुना तेज इनरश करंट बहता है, जिससे साधारण AC-3 कांटेक्टर के संपर्क वेल्ड होकर आपस में चिपक जाते हैं।',
        bn: 'ক্যাপাসিটর অন করার সময় রেটেড কারেন্টের ১০০-২০০ গুণ বেশি তীব্র ইনরাশ কারেন্ট প্রবাহিত হয়, যা সাধারণ কন্টাক্টরের সিলভার টিপস গলিয়ে একসঙ্গে জোড়া লাগিয়ে দেয়।'
      }
    },
    {
      id: 'mcq-ch13-l03-05',
      question: {
        en: 'What mechanism do specialized AC-6b capacitor duty contactors use to suppress high switching inrush currents?',
        hi: 'विशेष AC-6b कैपेसिटर ड्यूटी कांटेक्टर उच्च इनरश धारा को दबाने के लिए किस तंत्र का उपयोग करते हैं?',
        bn: 'বিশেষায়িত AC-6b ক্যাপাসিটর ডিউটি কন্টাক্টর ক্ষতিকর ইনরাশ কারেন্ট রোধ করতে কোন প্রযুক্তি ব্যবহার করে?'
      },
      options: [
        { en: 'Early-make auxiliary contacts with series damping wire resistors that absorb inrush before main contacts close', hi: 'श्रृंखला डैम्पिंग रेसिस्टर युक्त अर्ली-मेक सहायक संपर्क जो मुख्य संपर्कों के बंद होने से पहले इनरश को अवशोषित करते हैं', bn: 'প্রাক-সংযোগ অক্সিলিয়ারি কন্টাক্ট এবং সিরিজ ড্যাম্পিং রেজিস্টর যা মূল কন্টাক্ট লাগার আগেই ইনরাশ কারেন্ট শুষে নেয়' },
        { en: 'Oil-filled vacuum chambers that quench the arc', hi: 'तेल से भरे वैक्यूम कक्ष जो स्पार्क को बुझाते हैं', bn: 'তেল-পূর্ণ ভ্যাকুয়াম চেম্বার যা আর্ক নিভিয়ে দেয়' },
        { en: 'Step-up voltage boosters integrated inside the contactor core', hi: 'कांटेक्टर कोर के अंदर एकीकृत स्टेप-अप वोल्टेज बूस्टर', bn: 'কন্টাক্টরের ভেতরে বসানো স্টেপ-আপ ভোল্টেজ বুস্টার' },
        { en: 'Mechanical flywheels that slowly ramp up contactor speed', hi: 'यांत्रिक फ्लाईव्हील जो कांटेक्टर की गति को धीरे-धीरे बढ़ाते हैं', bn: 'মেকানিক্যাল ফ্লাইহুইল যা ধীরে ধীরে কন্টাক্টরের গতি বাড়ায়' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'AC-6b contactors have auxiliary contact blocks that close 2–5 milliseconds ahead of the main power contacts, inserting current-limiting damping resistors into the circuit to safely absorb inrush energy.',
        hi: 'AC-6b कांटेक्टरों में सहायक संपर्क होते हैं जो मुख्य संपर्कों से 2-5 मिलीसेकंड पहले जुड़ते हैं और डैम्पिंग प्रतिरोधकों द्वारा इनरश धारा को सुरक्षित रूप से सीमित करते हैं।',
        bn: 'AC-6b কন্টাক্টরে সহায়ক কন্টাক্ট থাকে যা মূল সংযোগের ২-৫ মিলিসেকেন্ড আগে যুক্ত হয়ে ড্যাম্পিং রেজিস্টরের মাধ্যমে ইনরাশ কারেন্টকে নিরাপদ মাত্রায় নামিয়ে আনে।'
      }
    },
    {
      id: 'mcq-ch13-l03-06',
      question: {
        en: 'According to industrial power capacitor standards, what continuous overcurrent must a capacitor withstand to tolerate harmonic currents?',
        hi: 'औद्योगिक पावर कैपेसिटर मानकों के अनुसार हार्मोनिक धाराओं को सहन करने के लिए कैपेसिटर को कितने निरंतर ओवरकरंट को सहन करना चाहिए?',
        bn: 'শিল্প ক্যাপাসিটর মান অনুযায়ী হারমোনিক কারেন্ট সহ্য করার জন্য একটি ক্যাপাসিটরের কতটুকু অবিচ্ছিন্ন ওভারকারেন্ট সহনশীলতা থাকতে হবে?'
      },
      options: [
        { en: 'At least 130% to 150% of its rated nominal current continuously', hi: 'लगातार अपने रेटेड नाममात्र धारा का कम से कम 130% से 150%', bn: 'অবিচ্ছিন্নভাবে এর রেটেড কারেন্টের কমপক্ষে ১৩০% থেকে ১৫০%' },
        { en: 'Exactly 100% with zero tolerance', hi: 'शून्य सहनशीलता के साथ ठीक 100%', bn: 'কোনো অতিরিক্ত কারেন্ট সহ্য করার ক্ষমতা থাকে না' },
        { en: 'Over 500% continuous current', hi: '500% से अधिक निरंतर धारा', bn: '৫০০% এর বেশি অবিচ্ছিন্ন কারেন্ট' },
        { en: 'Only 50% of rated nominal current', hi: 'रेटेड धारा का केवल 50%', bn: 'রেটেড কারেন্টের মাত্র ৫০%' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'IEC 60831-1 specifies that LV power capacitors must be designed for continuous operation at 1.30 times the rated nominal current (and up to 1.50 times factoring manufacturing capacitance tolerances) to accommodate harmonic currents without thermal degradation.',
        hi: 'IEC 60831-1 के अनुसार कैपेसिटर को बिना खराब हुए हार्मोनिक्स को वहन करने के लिए रेटेड करंट के 1.30 से 1.50 गुना तक निरंतर कार्य करने के लिए डिज़ाइन किया जाना चाहिए।',
        bn: 'IEC 60831-1 অনুসারে হারমোনিকসের কারণে সৃষ্ট অতিরিক্ত তাপ সহ্য করতে ক্যাপাসিটরকে রেটেড কারেন্টের ১৩০% থেকে ১৫০% অবিচ্ছিন্নভাবে বহনের উপযোগী করে তৈরি করতে হয়।'
      }
    },
    {
      id: 'mcq-ch13-l03-07',
      question: {
        en: 'A 415 V, 50 Hz system has a load of 100 kW at 0.707 lagging PF. If the PF is raised to 1.0 (unity), what kVAR capacitor bank is needed?',
        hi: '415 V, 50 Hz सिस्टम में 0.707 लैगिंग PF पर 100 kW का लोड है। यदि PF को 1.0 (यूनिटी) तक सुधारा जाए, तो कितने kVAR का कैपेसिटर बैंक चाहिए?',
        bn: '৪১৫ V, ৫০ Hz লাইনে ১০০ kW লোড ০.৭০৭ ল্যাগিং PF এ চলছে। PF কে ১.০ (ইউনিটি) তে নিতে কত kVAR ক্যাপাসিটর ব্যাংক প্রয়োজন?'
      },
      options: [
        { en: '100 kVAR', hi: '100 kVAR', bn: '১০০ kVAR' },
        { en: '70.7 kVAR', hi: '70.7 kVAR', bn: '৭০.৭ kVAR' },
        { en: '141.4 kVAR', hi: '141.4 kVAR', bn: '১৪১.৪ kVAR' },
        { en: '50 kVAR', hi: '50 kVAR', bn: '৫০ kVAR' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'ϕ₁ = arccos(0.707) = 45°, tan(45°) = 1.0. For unity PF, ϕ₂ = 0°, tan(0°) = 0. Q_C = P · [tan(ϕ₁) - tan(ϕ₂)] = 100 kW · [1.0 - 0] = 100 kVAR.',
        hi: 'ϕ₁ = 45°, tan(45°) = 1.0। यूनिटी PF पर ϕ₂ = 0°, tan(0°) = 0। Q_C = 100 · (1.0 - 0) = 100 kVAR।',
        bn: 'ϕ₁ = arccos(০.৭০৭) = ৪৫°, tan(৪৫°) = ১.০। ইউনিটি PF এ tan(০°) = ০। সুতরাং Q_C = ১০০ · (১.০ - ০) = ১০০ kVAR।'
      }
    },
    {
      id: 'mcq-ch13-l03-08',
      question: {
        en: 'What sizing multiplier is typically applied when selecting HRC backup fuses for a capacitor bank branch circuit?',
        hi: 'कैपेसिटर बैंक शाखा परिपथ के लिए HRC बैकअप फ्यूज चुनते समय आमतौर पर कौन सा गुणक लागू किया जाता है?',
        bn: 'ক্যাপাসিটর ব্যাংক সার্কিটের HRC ফিউজ নির্ধারণে সাধারণত রেটেড কারেন্টের কত গুণ মাল্টিপ্লায়ার ধরা হয়?'
      },
      options: [
        { en: '1.6 to 1.8 times the capacitor nominal rated line current', hi: 'कैपेसिटर के नाममात्र रेटेड लाइन करंट का 1.6 से 1.8 गुना', bn: 'ক্যাপাসিটরের রেটেড লাইন কারেন্টের ১.৬ থেকে ১.৮ গুণ' },
        { en: 'Exactly 0.8 times nominal current', hi: 'नाममात्र धारा का ठीक 0.8 गुना', bn: 'রেটেড কারেন্টের ঠিক ০.৮ গুণ' },
        { en: '5.0 to 6.0 times nominal current', hi: 'नाममात्र धारा का 5.0 से 6.0 गुना', bn: 'রেটেড কারেন্টের ৫.০ থেকে ৬.০ গুণ' },
        { en: 'Fuses must never be used with capacitor banks', hi: 'कैपेसिटर बैंकों के साथ फ्यूज का उपयोग कभी नहीं किया जाना चाहिए', bn: 'ক্যাপাসিটর ব্যাংকে কোনো ফিউজ ব্যবহার করা নিষেধ' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'To prevent spurious fuse blowing during normal switching inrush transients and to accommodate continuous harmonic overcurrents, HRC fuse links are sized between 1.60 and 1.80 times the nominal capacitor branch current.',
        hi: 'सामान्य स्विचिंग इनरश और हार्मोनिक धाराओं के कारण फ्यूज को बेवजह उड़ने से रोकने के लिए HRC फ्यूज को रेटेड करंट के 1.6 से 1.8 गुना पर चुना जाता है।',
        bn: 'সুইচিং ইনরাশ কারেন্ট এবং হারমোনিকস কারেন্টের কারণে আকস্মিক ফিউজ ব্লো হওয়া রোধ করতে HRC ফিউজকে রেটেড কারেন্টের ১.৬০ থেকে ১.৮০ গুণ সাইজ করা হয়।'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-ch13-capacitor-bank-sizing',
      title: {
        en: '3-Phase Delta Capacitor Bank Sizing Schematic',
        hi: '3-फेज डेल्टा कैपेसिटर बैंक साइज़िंग आरेख',
        bn: '৩-ফেজ ডেল্টা ক্যাপাসিটর ব্যাংক সাইজিং ডায়াগ্রাম'
      },
      caption: {
        en: '3-phase delta-connected power factor capacitor bank with HRC fuse protection, discharge resistors, and current calculations.',
        hi: 'HRC फ्यूज सुरक्षा, डिस्चार्ज प्रतिरोधक, और धारा गणना के साथ 3-फेज डेल्टा-कनेक्टेड पावर फैक्टर कैपेसिटर बैंक।',
        bn: 'HRC ফিউজ সুরক্ষা, ডিসচার্জ রোধক এবং কারেন্ট গণনা সহ ৩-ফেজ ডেল্টা-সংযুক্ত পাওয়ার ফ্যাক্টর ক্যাপাসিটর ব্যাংক।'
      },
      svgType: 'circuit-ch13-capacitor-bank-sizing'
    }
  ]
};
