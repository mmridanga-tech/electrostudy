import { Lesson } from '../types';

export const LESSON_PASSIVE_FILTERS_DESIGN: Lesson = {
  id: 'lsn-ch12-passive-filters-design',
  topicId: 'tp-rc-circuit',
  chapterId: 'ch-ac-circuits',
  order: 5,
  title: {
    en: 'Passive AC Filter Design',
    hi: 'निष्क्रिय एसी फिल्टर डिजाइन',
    bn: 'প্যাসিভ এসি ফিল্টার ডিজাইন'
  },
  description: {
    en: 'Design, analyze, and synthesize passive frequency-selective analog filters using first-order RC/RL and second-order RLC networks. Master low-pass, high-pass, band-pass, and band-stop (notch) topologies, half-power cutoff (-3 dB) calculations, roll-off slopes (-20 dB/dec, -40 dB/dec), and practical audio/RF filtering applications.',
    hi: 'प्रथम-कोटि RC/RL और द्वितीय-कोटि RLC नेटवर्कों का उपयोग करके निष्क्रिय आवृत्ति-चयनात्मक एनालॉग फिल्टरों का डिजाइन, विश्लेषण एवं संश्लेषण करें। लो-पास, हाई-पास, बैंड-पास और बैंड-स्टॉप (नॉच) टोपोलॉजी, अर्ध-शक्ति कटऑफ (-3 dB) गणना, रोल-ऑफ ढलानों (-20 dB/dec, -40 dB/dec), एवं व्यावहारिक ऑडियो/आरएफ अनुप्रयोगों में महारत हासिल करें।',
    bn: 'প্রথম-ক্রমের RC/RL এবং দ্বিতীয়-ক্রমের RLC নেটওয়ার্ক ব্যবহার করে প্যাসিভ অ্যানালগ ফিল্টার ডিজাইন ও বিশ্লেষণ করুন। লো-পাস, হাই-পাস, ব্যান্ড-পাস ও ব্যান্ড-স্টপ (নচ) বর্তনী, অর্ধ-ক্ষমতা কাট-অফ (-৩ dB) গণনা, রোল-অফ ঢাল (-২০ dB/dec, -৪০ dB/dec) এবং ব্যবহারিক অডিও ও রেডিও ফিল্টারিং নিখুঁতভাবে শিখুন।'
  },
  estimatedMinutes: 40,
  easyExplanation: {
    en: 'An electrical filter is a frequency-selective circuit that allows desired frequency components of a signal to pass through to the load while attenuating or blocking unwanted frequencies (such as electromagnetic noise, power-line hum, or harmonic distortion). Passive filters are built exclusively from passive linear components—resistors (R), inductors (L), and capacitors (C)—without requiring external DC power supplies or active amplifying elements like op-amps or transistors. A Low-Pass Filter (LPF) allows DC and low frequencies to pass while attenuating high frequencies; a High-Pass Filter (HPF) blocks low frequencies and passes high frequencies; a Band-Pass Filter (BPF) isolates a specific frequency band around a center frequency; and a Band-Stop (Notch) Filter removes a specific troublesome frequency (like 50 Hz or 60 Hz hum) while passing everything else. The critical dividing boundary is the half-power cutoff frequency (-3 dB point), where the output power drops to exactly 50% of the maximum passband power.',
    hi: 'एक विद्युत फिल्टर एक आवृत्ति-चयनात्मक परिपथ है जो किसी संकेत के वांछित आवृत्तियों को लोड तक पहुँचने देता है जबकि अवांछित आवृत्तियों (जैसे शोर, 50 Hz पावर हम, या हार्मोनिक्स) को रोकता या क्षीण करता है। निष्क्रिय (पैसिव) फिल्टर केवल प्रतिरोधक (R), प्रेरक (L) और संधारित्र (C) जैसे निष्क्रिय घटकों से बनाए जाते हैं, जिनके संचालन के लिए किसी बाहरी डीसी बिजली आपूर्ति या ट्रांजिस्टर/ऑप-ऐम्प की आवश्यकता नहीं होती। लो-पास फिल्टर कम आवृत्तियों को जाने देता है, हाई-पास फिल्टर उच्च आवृत्तियों को जाने देता है, बैंड-पास एक संकीर्ण बैंड का चयन करता है, और बैंड-स्टॉप (नॉच) फिल्टर किसी अवांछित आवृत्ति को समाप्त करता है। इसकी सबसे महत्वपूर्ण सीमा अर्ध-शक्ति कटऑफ आवृत्ति (-3 dB बिंदु) होती है, जहाँ आउटपुट शक्ति घटकर आधी (50%) रह जाती है।',
    bn: 'বৈদ্যুতিক ফিল্টার হলো একটি কম্পাঙ্ক-নির্বাচনী বর্তনী যা সংকেতের কাঙ্ক্ষিত কম্পাঙ্কসমূহকে লোডে পৌঁছাতে দেয় এবং অনাকাঙ্ক্ষিত কম্পাঙ্ককে (যেমন নয়েজ বা ৫০ Hz বৈদ্যুতিক হাম) প্রতিহত করে। প্যাসিভ ফিল্টার কেবলমাত্র রোধক (R), আবেশক (L) ও ধারক (C) দিয়ে তৈরি হয় এবং এদের পরিচালনার জন্য কোনো অতিরিক্ত ডিসি পাওয়ার সাপ্লাই বা ট্রানজিস্টরের প্রয়োজন হয় না। লো-পাস ফিল্টার নিম্ন কম্পাঙ্ক পার করে, হাই-পাস ফিল্টার উচ্চ কম্পাঙ্ক পার করে, ব্যান্ড-পাস ফিল্টার একটি নির্দিষ্ট কম্পাঙ্ক ব্যান্ড নির্বাচন করে এবং ব্যান্ড-স্টপ (নচ) ফিল্টার নির্দিষ্ট একটি অপ্রয়োজনীয় কম্পাঙ্ককে আটকে দেয়। সবচেয়ে গুরুত্বপূর্ণ সীমা হলো অর্ধ-ক্ষমতা কাট-অফ কম্পাঙ্ক (-৩ dB বিন্দু), যেখানে আউটপুট ক্ষমতা সর্বাধিক ক্ষমতার ঠিক অর্ধেক (৫০%) হয়ে যায়।'
  },
  detailedExplanation: {
    en: '1. Fundamentals & Classification of Passive Filters:\nPassive analog filters use combinations of resistors, inductors, and capacitors to shape signal spectra without external DC biasing:\n- Low-Pass Filter (LPF): Passband from DC (ω = 0) up to cutoff frequency ω_c; stopband for ω > ω_c.\n- High-Pass Filter (HPF): Stopband from DC to ω_c; passband for ω > ω_c.\n- Band-Pass Filter (BPF): Passband centered around resonant frequency ω_0 between lower cutoff ω_1 and upper cutoff ω_2; stopband elsewhere.\n- Band-Stop / Notch Filter (BSF): Passes all frequencies except a narrow notch band between ω_1 and ω_2 centered at ω_0.\n\n2. First-Order RC Passive Filters:\n- First-Order RC Low-Pass Filter (Series Resistor R, Shunt Capacitor C across V_out):\n  By voltage divider action: H(jω) = V_out(jω) / V_in(jω) = (1 / jωC) / [R + (1 / jωC)] = 1 / (1 + jωRC).\n  Cutoff angular frequency: ω_c = 1 / (RC) rad/s  ⇒  f_c = 1 / (2πRC) Hz.\n  Normalized transfer function: H(jω) = 1 / [1 + j(ω / ω_c)].\n  Magnitude: |H(jω)| = 1 / √(1 + (ω/ω_c)²).\n  Phase: ∠H(jω) = -arctan(ω / ω_c).\n  At DC (ω = 0): |H| = 1 (0 dB), phase = 0°.\n  At cutoff (ω = ω_c): |H| = 1/√2 ≈ 0.7071 (-3.01 dB), phase = -45° (output lags input by 45°).\n  At high frequencies (ω >> ω_c): |H| ≈ ω_c / ω, rolling off at -20 dB/decade (-6 dB/octave), phase approaches -90°.\n\n- First-Order RC High-Pass Filter (Series Capacitor C, Shunt Resistor R across V_out):\n  H(jω) = R / [R + (1 / jωC)] = jωRC / (1 + jωRC) = j(ω / ω_c) / [1 + j(ω / ω_c)].\n  Magnitude: |H(jω)| = (ω / ω_c) / √(1 + (ω/ω_c)²).\n  Phase: ∠H(jω) = 90° - arctan(ω / ω_c).\n  At DC (ω = 0): |H| = 0 (-∞ dB), capacitor is an open circuit.\n  At cutoff (ω = ω_c): |H| = 1/√2 (-3.01 dB), phase = +45° (output leads input by 45°).\n  At high frequencies (ω >> ω_c): |H| = 1 (0 dB), phase = 0°.\n  Low-frequency stopband rolls off at +20 dB/decade.\n\n3. First-Order RL Passive Filters:\n- RL Low-Pass Filter (Series Inductor L, Shunt Resistor R across V_out):\n  H(jω) = R / (R + jωL) = 1 / [1 + jω(L/R)].\n  Cutoff frequency: ω_c = R / L rad/s  ⇒  f_c = R / (2πL) Hz.\n- RL High-Pass Filter (Series Resistor R, Shunt Inductor L across V_out):\n  H(jω) = jωL / (R + jωL) = j(ω / ω_c) / [1 + j(ω / ω_c)], with ω_c = R / L.\n\n4. The Half-Power (-3 dB) Cutoff Criterion:\nAt ω = ω_c, the voltage ratio is |V_out / V_in| = 1 / √2 = 0.7071.\nDelivered power to a resistive load is P_out = V_out² / R_L = (V_in / √2)² / R_L = 0.5 × (V_in² / R_L) = 0.5 P_in.\nIn decibels: Gain_dB = 20 log10(1 / √2) = -10 log10(2) ≈ -3.01 dB.\nHence the cutoff frequency is universally termed the half-power frequency or -3 dB frequency.\n\n5. Second-Order RLC Filter Networks:\nBy incorporating two independent energy-storage elements (L and C), second-order filters achieve sharper roll-offs (-40 dB/decade or -12 dB/octave) and can form resonant band-pass and band-stop responses:\n- Series RLC Band-Pass Filter (Output taken across resistor R):\n  H(jω) = R / [R + j(ωL - 1/ωC)] = 1 / [1 + j Q (ω/ω_0 - ω_0/ω)].\n  Resonant center frequency: ω_0 = 1 / √(LC) rad/s  ⇒  f_0 = 1 / (2π√(LC)) Hz.\n  Quality factor: Q = (ω_0 L) / R = 1 / (ω_0 R C) = (1/R) √(L/C).\n  Bandwidth: BW = ω_2 - ω_1 = ω_0 / Q rad/s  ⇒  Δf = f_0 / Q Hz.\n  At resonance (ω = ω_0): reactances cancel (X_L = X_C), Z_tank = R, |H| = 1 (0 dB maximum passband gain), and phase = 0°.\n- Series RLC Band-Stop / Notch Filter (Output taken across series LC branch or shunt LC tank):\n  H(jω) = [j(ωL - 1/ωC)] / [R + j(ωL - 1/ωC)].\n  At resonance (ω = ω_0): the series LC combination acts as a dead short-circuit (Z_LC = 0), forcing V_out = 0 (infinite attenuation notch). Frequencies far above or below resonance pass unhindered.\n\n6. Practical Engineering Considerations:\n- Filter Loading Effects: Connecting a low-impedance load R_L to a passive filter alters its cutoff frequency and reduces passband gain. To avoid loading distortion, design filter impedances such that R_L >> Z_filter_out.\n- Component Tolerances: Real-world resistors (±1% to ±5%) and capacitors (±5% to ±20%) shift the actual cutoff frequency away from nominal calculations.\n- High-frequency parasitics: Real inductors possess winding capacitance (causing self-resonance), and electrolytic capacitors exhibit equivalent series resistance (ESR) and inductance (ESL) that degrade high-frequency stopband attenuation.',
    hi: '1. निष्क्रिय फिल्टरों का वर्गीकरण: LPF (कम आवृत्ति पास), HPF (उच्च आवृत्ति पास), BPF (बैंड-पास), BSF (बैंड-स्टॉप/नॉच)।\n2. प्रथम-कोटि RC फिल्टर:\n- लो-पास: H(jω) = 1 / (1 + jωRC), कटऑफ ω_c = 1/(RC) rad/s या f_c = 1/(2πRC) Hz। कटऑफ पर गेन 1/√2 (-3.01 dB) और कला कोण -45° होता है। उच्च आवृत्ति पर रोल-ऑफ -20 dB/decade होता है।\n- हाई-पास: H(jω) = jωRC / (1 + jωRC), कटऑफ पर गेन -3.01 dB और कला +45° होती है।\n3. प्रथम-कोटि RL फिल्टर: कटऑफ ω_c = R/L rad/s, f_c = R/(2πL) Hz।\n4. अर्ध-शक्ति (-3 dB) बिंदु: कटऑफ पर आउटपुट शक्ति घटकर ठीक 50% रह जाती है (20 log10(1/√2) = -3.01 dB)।\n5. द्वितीय-कोटि RLC फिल्टर: दो ऊर्जा-संग्राहक घटकों के कारण -40 dB/decade की तीव्र ढलान मिलती है।\n- सीरीज RLC बैंड-पास (आउटपुट R पर): केंद्र आवृत्ति f_0 = 1/(2π√LC), क्वालिटी फैक्टर Q = (1/R)√(L/C), बैंडविड्थ BW = f_0 / Q। अनुनाद पर गेन 1 (0 dB) होता है।\n- बैंड-स्टॉप / नॉच (आउटपुट LC पर): अनुनाद पर LC शॉर्ट सर्किट बनकर आउटपुट शून्य कर देता है (50/60 Hz हम को रोकने के लिए आदर्श)।\n6. व्यावहारिक सीमाएँ: लोड प्रतिरोध जोड़ने पर फिल्टर की कटऑफ आवृत्ति विस्थापित हो सकती है, इसलिए बफरिंग या उच्च लोड प्रतिबाधा आवश्यक होती है।',
    bn: '১. প্যাসিভ ফিল্টারের শ্রেণিবিভাগ: LPF (কম কম্পাঙ্ক পার করে), HPF (উচ্চ কম্পাঙ্ক পার করে), BPF (ব্যান্ড-পাস), BSF (ব্যান্ড-স্টপ/নচ ফিল্টার)।\n২. প্রথম-ক্রমের RC ফিল্টার:\n- লো-পাস: H(jω) = ১ / (১ + jωRC), কাট-অফ কম্পাঙ্ক ω_c = ১/(RC) rad/s বা f_c = ১/(২πRC) Hz। কাট-অফে গেইন ১/√২ (-৩.০১ dB) ও ফেজ -৪৫°। উচ্চ কম্পাঙ্কে রোল-অফ -২০ dB/decade।\n- হাই-পাস: H(jω) = jωRC / (১ + jωRC), কাট-অফে গেইন -৩.০১ dB ও ফেজ +৪৫°।\n৩. প্রথম-ক্রমের RL ফিল্টার: কাট-অফ কম্পাঙ্ক ω_c = R/L rad/s বা f_c = R/(২πL) Hz।\n৪. অর্ধ-ক্ষমতা (-৩ dB) বিন্দু: কাট-অফ কম্পাঙ্কে আউটপুট ক্ষমতা ইনপুট ক্ষমতার ঠিক অর্ধেক (৫০%) হয়, যা ডেসিবেলে -৩.০১ dB।\n৫. দ্বিতীয়-ক্রমের RLC ফিল্টার: দুটি প্রতিক্রিয়াশীল উপাদানের কারণে এর রোল-অফ -৪০ dB/decade।\n- সিরিজ RLC ব্যান্ড-পাস (আউটপুট R এ): কেন্দ্র কম্পাঙ্ক f_0 = ১/(২π√LC), কোয়ালিটি ফ্যাক্টর Q = (১/R)√(L/C), ব্যান্ডউইথ BW = f_0 / Q।\n- ব্যান্ড-স্টপ/নচ (আউটপুট LC তে): কেন্দ্র কম্পাঙ্কে আউটপুট শূন্য হয়ে নির্দিষ্ট অনাকাঙ্ক্ষিত নয়েজ দূর করে।\n৬. ব্যবহারিক সীমাবদ্ধতা: ফিল্টারের সাথে কম মানের লোড যুক্ত করলে কাট-অফ পরিবর্তন হতে পারে (লোডিং এফেক্ট)।'
  },
  formulas: [
    {
      id: 'f-rc-cutoff',
      symbol: 'f_c',
      expression: 'f_c = \\frac{1}{2\\pi R C}, \\quad \\omega_c = \\frac{1}{RC}',
      title: {
        en: 'First-Order RC Cutoff Frequency',
        hi: 'प्रथम-कोटि RC कटऑफ आवृत्ति',
        bn: 'প্রথম-ক্রম RC কাট-অফ কম্পাঙ্ক'
      },
      description: {
        en: 'Defines the half-power (-3 dB) boundary frequency for first-order RC low-pass and high-pass filters.',
        hi: 'प्रथम-कोटि RC लो-पास एवं हाई-पास फिल्टरों के लिए अर्ध-शक्ति (-3 dB) सीमांत आवृत्ति को परिभाषित करता है।',
        bn: 'প্রথম-ক্রমের RC লো-পাস ও হাই-পাস ফিল্টারের অর্ধ-ক্ষমতা (-৩ dB) কাট-অফ কম্পাঙ্ক নির্ধারণ করে।'
      },
      variables: [
        { symbol: 'f_c', name: { en: 'Cutoff frequency (Hz)', hi: 'कटऑफ आवृत्ति (Hz)', bn: 'কাট-অফ কম্পাঙ্ক (Hz)' } },
        { symbol: 'ω_c', name: { en: 'Angular cutoff frequency (rad/s)', hi: 'कोणीय कटऑफ आवृत्ति (rad/s)', bn: 'কৌণিক কাট-অফ কম্পাঙ্ক (rad/s)' } },
        { symbol: 'R', name: { en: 'Filter resistance (Ω)', hi: 'फिल्टर प्रतिरोध (Ω)', bn: 'ফিল্টার রোধ (Ω)' } },
        { symbol: 'C', name: { en: 'Filter capacitance (F)', hi: 'फिल्टर धारिता (F)', bn: 'ফিল্টার ধারকত্ব (F)' } }
      ]
    },
    {
      id: 'f-rl-cutoff',
      symbol: 'f_c',
      expression: 'f_c = \\frac{R}{2\\pi L}, \\quad \\omega_c = \\frac{R}{L}',
      title: {
        en: 'First-Order RL Cutoff Frequency',
        hi: 'प्रथम-कोटि RL कटऑफ आवृत्ति',
        bn: 'প্রথম-ক্রম RL কাট-অফ কম্পাঙ্ক'
      },
      description: {
        en: 'Defines the half-power cutoff frequency for first-order RL filter configurations.',
        hi: 'प्रथम-कोटि RL फिल्टर विन्यासों के लिए अर्ध-शक्ति कटऑफ आवृत्ति निर्धारित करता है।',
        bn: 'প্রথম-ক্রমের RL ফিল্টারের অর্ধ-ক্ষমতা কাট-অফ কম্পাঙ্ক নির্ণয় করে।'
      },
      variables: [
        { symbol: 'f_c', name: { en: 'Cutoff frequency (Hz)', hi: 'कटऑफ आवृत्ति (Hz)', bn: 'কাট-অফ কম্পাঙ্ক (Hz)' } },
        { symbol: 'R', name: { en: 'Filter resistance (Ω)', hi: 'फिल्टर प्रतिरोध (Ω)', bn: 'ফিল্টার রোধ (Ω)' } },
        { symbol: 'L', name: { en: 'Filter inductance (H)', hi: 'फिल्टर प्रेरकत्व (H)', bn: 'ফিল্টার আবেশকত্ব (H)' } }
      ]
    },
    {
      id: 'f-rlc-resonant-freq',
      symbol: 'f_0',
      expression: 'f_0 = \\frac{1}{2\\pi \\sqrt{LC}}, \\quad \\omega_0 = \\frac{1}{\\sqrt{LC}}',
      title: {
        en: 'Resonant Center Frequency (Second-Order RLC)',
        hi: 'अनुनादी केंद्र आवृत्ति (द्वितीय-कोटि RLC)',
        bn: 'অনুরণন কেন্দ্র কম্পাঙ্ক (দ্বিতীয়-ক্রম RLC)'
      },
      description: {
        en: 'Center frequency of maximum transmission for band-pass filters and maximum attenuation for notch filters.',
        hi: 'बैंड-पास फिल्टरों के लिए अधिकतम पारगमन एवं नॉच फिल्टरों के लिए अधिकतम क्षीणन की केंद्र आवृत्ति।',
        bn: 'ব্যান্ড-পাস ফিল্টারের সর্বোচ্চ সংকেত প্রবাহ এবং নচ ফিল্টারের সর্বোচ্চ বাধার কেন্দ্র কম্পাঙ্ক।'
      },
      variables: [
        { symbol: 'f_0', name: { en: 'Resonant center frequency (Hz)', hi: 'अनुनादी केंद्र आवृत्ति (Hz)', bn: 'অনুরণন কেন্দ্র কম্পাঙ্ক (Hz)' } },
        { symbol: 'L', name: { en: 'Inductance (H)', hi: 'प्रेरकत्व (H)', bn: 'আবেশকত্ব (H)' } },
        { symbol: 'C', name: { en: 'Capacitance (F)', hi: 'धारिता (F)', bn: 'ধারকত্ব (F)' } }
      ]
    },
    {
      id: 'f-quality-factor-bw',
      symbol: 'Q',
      expression: 'Q = \\frac{\\omega_0 L}{R} = \\frac{1}{\\omega_0 R C} = \\frac{1}{R}\\sqrt{\\frac{L}{C}}, \\quad \\text{BW} = \\frac{f_0}{Q}',
      title: {
        en: 'Quality Factor (Q) and Filter Bandwidth',
        hi: 'क्वालिटी फैक्टर (Q) एवं फिल्टर बैंडविड्थ',
        bn: 'কোয়ালিটি ফ্যাক্টর (Q) ও ফিল্টার ব্যান্ডউইথ'
      },
      description: {
        en: 'Characterizes filter frequency selectivity; higher Q yields a narrower half-power passband.',
        hi: 'फिल्टर की आवृत्ति चयनात्मकता को दर्शाता है; उच्च Q संकीर्ण एवं तीक्ष्ण बैंडविड्थ प्रदान करता है।',
        bn: 'ফিল্টারের কম্পাঙ্ক নির্বাচন সক্ষমতা প্রকাশ করে; উচ্চ Q মান সংকীর্ণ ও নিখুঁত ব্যান্ডউইথ তৈরি করে।'
      },
      variables: [
        { symbol: 'Q', name: { en: 'Quality factor (dimensionless)', hi: 'क्वालिटी फैक्टर (विमाहीन)', bn: 'কোয়ালিটি ফ্যাক্টর (মাত্রাহীন)' } },
        { symbol: 'BW', name: { en: 'Half-power bandwidth (Hz)', hi: 'अर्ध-शक्ति बैंडविड्थ (Hz)', bn: 'অর্ধ-ক্ষমতা ব্যান্ডউইথ (Hz)' } },
        { symbol: 'R, L, C', name: { en: 'Circuit parameters (Ω, H, F)', hi: 'परिपथ घटक (Ω, H, F)', bn: 'বর্তনী উপাদান (Ω, H, F)' } }
      ]
    },
    {
      id: 'f-decibel-gain-filter',
      symbol: '|H|_{dB}',
      expression: '|H(j\\omega)|_{dB} = 20 \\log_{10} \\left| \\frac{\\mathbf{V}_{out}}{\\mathbf{V}_{in}} \\right|',
      title: {
        en: 'Filter Decibel Voltage Gain',
        hi: 'फिल्टर डेसिबल वोल्टेज गेन',
        bn: 'ফিল্টার ডেসিবেল ভোল্টেজ গেইন'
      },
      description: {
        en: 'Logarithmic ratio of output voltage to input voltage, measuring passband gain and stopband attenuation.',
        hi: 'आउटपुट और इनपुट वोल्टेज का लघुगणकीय अनुपात, जो गेन और क्षीणन को मापता है।',
        bn: 'আউটপুট ও ইনপুট ভোল্টেজের লগারিদমিক অনুপাত, যা গেইন ও ক্ষয় পরিমাপ করে।'
      },
      variables: [
        { symbol: '|H|_{dB}', name: { en: 'Voltage gain in decibels (dB)', hi: 'डेसिबल में वोल्टेज गेन (dB)', bn: 'ডেসিবেলে ভোল্টেজ গেইন (dB)' } },
        { symbol: 'V_out, V_in', name: { en: 'Output and input voltage phasors (V)', hi: 'आउटपुट एवं इनपुट वोल्टेज (V)', bn: 'আউটপুট ও ইনপুট ভোল্টেজ (V)' } }
      ]
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch12-l05-01',
      title: {
        en: 'Design of a First-Order RC Low-Pass Filter for Audio Crossover',
        hi: 'ऑडियो क्रॉसओवर के लिए प्रथम-कोटि RC लो-पास फिल्टर का डिजाइन',
        bn: 'অডিও ক্রসওভারের জন্য প্রথম-ক্রম RC লো-পাস ফিল্টার ডিজাইন'
      },
      problem: {
        en: 'An audio engineer needs to design a first-order RC low-pass filter to feed a subwoofer with a cutoff frequency of f_c = 2.5 kHz using an available precision resistor of R = 1.2 kΩ. Calculate: (a) The required capacitor value C, (b) The voltage gain |H| in dB and phase angle at f = 2.5 kHz, and (c) The attenuation in dB at a high-frequency interference frequency of f = 25 kHz (one decade above cutoff).',
        hi: 'एक ऑडियो इंजीनियर को R = 1.2 kΩ के प्रतिरोधक का उपयोग करके f_c = 2.5 kHz कटऑफ आवृत्ति वाला प्रथम-कोटि RC लो-पास फिल्टर डिजाइन करना है। गणना करें: (a) आवश्यक संधारित्र मान C, (b) f = 2.5 kHz पर dB में वोल्टेज गेन और कला कोण, और (c) f = 25 kHz पर क्षीणन (dB में)।',
        bn: 'একজন অডিও প্রকৌশলীকে R = ১.২ kΩ রোধ ব্যবহার করে f_c = ২.৫ kHz কাট-অফ কম্পাঙ্কের একটি প্রথম-ক্রম RC লো-পাস ফিল্টার ডিজাইন করতে হবে। নির্ণয় করুন: (a) প্রয়োজনীয় ধারকত্ব C, (b) f = ২.৫ kHz এ dB তে ভোল্টেজ গেইন ও ফেজ কোণ, এবং (c) f = ২৫ kHz কম্পাঙ্কে সংকেত ক্ষয় (dB তে)।'
      },
      solution: {
        en: 'Step 1: Calculate capacitance C:\nf_c = 1 / (2π R C)  ⇒  C = 1 / (2π · R · f_c)\nC = 1 / (2 · π · 1200 Ω · 2500 Hz) = 1 / (1.88496 × 10^7) ≈ 5.305 × 10^-8 F = 53.05 nF.\nA standard commercial value of 56 nF or parallel 47 nF + 6.8 nF can be used.\n\nStep 2: Gain and Phase at cutoff f = 2.5 kHz (f/f_c = 1):\n|H(jω_c)| = 1 / √(1 + (f/f_c)²) = 1 / √(1 + 1) = 1 / √2 ≈ 0.7071.\nGain_dB = 20 log10(0.7071) = -3.01 dB.\nPhase angle = -arctan(f/f_c) = -arctan(1) = -45.0° (output lags input by 45°).\n\nStep 3: Attenuation at f = 25 kHz (f/f_c = 10):\n|H(j·25 kHz)| = 1 / √(1 + 10²) = 1 / √101 ≈ 1 / 10.0499 = 0.0995.\nGain_dB = 20 log10(0.0995) ≈ -20.04 dB.\nNotice that one decade above cutoff, the filter provides exactly ~20 dB of attenuation (-20 dB/decade roll-off).',
        hi: 'चरण 1: धारिता C = 1 / (2π · 1200 · 2500) ≈ 53.05 nF।\nचरण 2: कटऑफ आवृत्ति f = 2.5 kHz पर: |H| = 1/√2 = 0.7071, गेन = -3.01 dB, कला = -45°।\nचरण 3: f = 25 kHz (एक दशक ऊपर) पर: |H| = 1/√(1 + 10^2) = 0.0995, गेन = -20.04 dB। (रोल-ऑफ -20 dB/decade)।',
        bn: 'ধাপ ১: ধারকত্ব C = ১ / (২π · ১২০০ · ২৫০০) ≈ ৫৩.০৫ nF।\nধাপ ২: কাট-অফে f = ২.৫ kHz: |H| = ১/√২ = ০.৭০৭১, গেইন = -৩.০১ dB, ফেজ = -৪৫°।\nধাপ ৩: f = ২৫ kHz (এক দশক উপরে): |H| = ১/√(১ + ১০^২) = ০.০৯৯৫, গেইন = -২০.০৪ dB (-২০ dB/decade ঢাল)।'
      }
    },
    {
      id: 'ex-ch12-l05-02',
      title: {
        en: 'Second-Order Series RLC Band-Pass Filter Analysis',
        hi: 'द्वितीय-कोटि श्रेणी RLC बैंड-पास फिल्टर का विश्लेषण',
        bn: 'দ্বিতীয়-ক্রম শ্রেণি RLC ব্যান্ড-পাস ফিল্টার বিশ্লেষণ'
      },
      problem: {
        en: 'A series RLC band-pass filter is designed with R = 50 Ω, L = 2.5 mH, and C = 10 nF, with the output taken across resistor R. Determine: (a) The resonant center frequency f_0, (b) The quality factor Q, (c) The half-power bandwidth Δf, and (d) The lower and upper cutoff frequencies f_1 and f_2.',
        hi: 'R = 50 Ω, L = 2.5 mH और C = 10 nF वाला एक श्रेणी RLC बैंड-पास फिल्टर बनाया गया है (आउटपुट R पर)। ज्ञात करें: (a) अनुनादी केंद्र आवृत्ति f_0, (b) क्वालिटी फैक्टर Q, (c) बैंडविड्थ Δf, और (d) निचली एवं ऊपरी कटऑफ आवृत्तियाँ f_1 और f_2।',
        bn: 'R = ৫০ Ω, L = ২.৫ mH এবং C = ১০ nF বিশিষ্ট একটি শ্রেণি RLC ব্যান্ড-পাস ফিল্টারে (আউটপুট R এ) নির্ণয় করুন: (a) কেন্দ্র অনুরণন কম্পাঙ্ক f_0, (b) কোয়ালিটি ফ্যাক্টর Q, (c) অর্ধ-ক্ষমতা ব্যান্ডউইথ Δf, এবং (d) নিম্ন ও উচ্চ কাট-অফ কম্পাঙ্ক f_1 ও f_2।'
      },
      solution: {
        en: 'Step 1: Calculate center frequency f_0:\nω_0 = 1 / √(L C) = 1 / √[(2.5 × 10^-3 H) · (10 × 10^-9 F)] = 1 / √(2.5 × 10^-11) = 1 / (5 × 10^-6) = 200,000 rad/s = 200 krad/s.\nf_0 = ω_0 / (2π) = 200,000 / (2π) ≈ 31,831 Hz = 31.83 kHz.\n\nStep 2: Calculate Quality Factor Q:\nQ = (ω_0 L) / R = (200,000 rad/s · 0.0025 H) / 50 Ω = 500 / 50 = 10.0.\nAlternatively: Q = (1/R) √(L/C) = (1/50) √(0.0025 / 10^-8) = (1/50) √250,000 = 500 / 50 = 10.0.\n\nStep 3: Calculate Bandwidth Δf:\nΔf = f_0 / Q = 31,831 Hz / 10.0 = 3,183.1 Hz ≈ 3.18 kHz.\n\nStep 4: Calculate lower and upper half-power frequencies f_1 and f_2:\nSince Q ≥ 5 (high-Q approximation):\nf_1 ≈ f_0 - Δf / 2 = 31,831 - 1,591.5 = 30,239.5 Hz ≈ 30.24 kHz.\nf_2 ≈ f_0 + Δf / 2 = 31,831 + 1,591.5 = 33,422.5 Hz ≈ 33.42 kHz.\nExact geometric mean check: √(f_1 · f_2) = √(30,239.5 · 33,422.5) ≈ 31,791 Hz (within 0.1% of f_0).',
        hi: 'चरण 1: केंद्र आवृत्ति: ω_0 = 1/√(2.5×10^-3 · 10×10^-9) = 200,000 rad/s, f_0 = 200,000/(2π) ≈ 31.83 kHz।\nचरण 2: क्वालिटी फैक्टर: Q = (ω_0 L) / R = (200,000 · 0.0025) / 50 = 10.0।\nचरण 3: बैंडविड्थ: Δf = f_0 / Q = 31.83 kHz / 10 = 3.18 kHz।\nचरण 4: कटऑफ आवृत्तियाँ: f_1 ≈ 30.24 kHz, f_2 ≈ 33.42 kHz।',
        bn: 'ধাপ ১: কেন্দ্র কম্পাঙ্ক: ω_0 = ১/√(LC) = ২০০,০০০ rad/s, f_0 ≈ ৩১.৮৩ kHz।\nধাপ ২: কোয়ালিটি ফ্যাক্টর: Q = (ω_0 L) / R = ৫০০ / ৫০ = ১০.০।\nধাপ ৩: ব্যান্ডউইথ: Δf = ৩১.৮৩ / ১০ = ৩.১৮ kHz।\nধাপ ৪: কাট-অফ কম্পাঙ্কসমূহ: f_1 ≈ ৩০.২৪ kHz, f_2 ≈ ৩৩.৪২ kHz।'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Audio Loudspeaker Crossover Networks: Passive RC and LC crossovers route high frequencies to tweeters (HPF) and low frequencies to subwoofers/woofers (LPF) without active electronics.',
      'DC Power Supply Ripple Suppression: Shunt smoothing capacitors and series choke inductors form passive low-pass filters that eliminate 100 Hz/120 Hz rectifier ripple voltages.',
      '50 Hz / 60 Hz Power-Line Interference Notch Filters: Tuned LC band-stop traps reject electromagnetic mains hum in sensitive bio-potential monitors (ECG/EEG) and guitar amplifiers.',
      'Anti-Aliasing Pre-Filters for Analog-to-Digital Converters (ADCs): Low-pass filters attenuate input signal frequencies above the Nyquist limit (f_s / 2) to prevent irreversible frequency folding distortion in digital sampling.'
    ],
    hi: [
      'ऑडियो लाउडस्पीकर क्रॉसओवर नेटवर्क: निष्क्रिय क्रॉसओवर उच्च आवृत्तियों को ट्वीटर (HPF) और निम्न आवृत्तियों को वूफर (LPF) में भेजते हैं।',
      'डीसी बिजली आपूर्ति रिपल दमन: शंट कैपेसिटर और सीरीज चोक मिलकर दिष्टकारी आउटपुट से 100/120 Hz रिपल को समाप्त करते हैं।',
      '50 Hz / 60 Hz पावर-लाइन हस्तक्षेप नॉच फिल्टर: ट्यून किए गए LC बैंड-स्टॉप फिल्टर ईसीजी/ईईजी और ऑडियो एम्पलीफायरों में 50/60 Hz की हम को हटाते हैं।',
      'एडीसी के लिए एंटी-अलियासिंग प्री-फिल्टर: नाइक्विस्ट सीमा (f_s / 2) से अधिक आवृत्तियों को रोककर डिजिटल सैंपलिंग में अलियासिंग दोष से बचाते हैं।'
    ],
    bn: [
      'অডিও লাউডস্পিকার ক্রসওভার নেটওয়ার্ক: প্যাসিভ ক্রসওভার উচ্চ কম্পাঙ্ক টুইটারে এবং নিম্ন কম্পাঙ্ক উফারে প্রেরণ করে।',
      'ডিসি পাওয়ার সাপ্লাই রিপল ফিল্টারিং: সিরিজ চোখ এবং শান্ট ক্যাপাসিটর লো-পাস ফিল্টার গঠন করে ডিসি ভোল্টেজ থেকে রিপল দূর করে।',
      '৫০/৬০ Hz মেইনস নয়েজ নচ ফিল্টার: টিউনিং করা LC ব্যান্ড-স্টপ ফিল্টার সংবেদনশীল ইসিজি ও অডিও বর্তনী থেকে ৫০/৬০ Hz নয়েজ ফিল্টার করে।',
      'এডিসি-র জন্য অ্যান্টি-অ্যালিয়াসিং প্রি-ফিল্টার: ডিজিটাল স্যাম্পলিংয়ে অ্যালিয়াসিং ত্রুটি দূর করতে নাইকুইস্ট কম্পাঙ্কের উপরের সংকেতকে আটকে দেয়।'
    ]
  },
  importantPoints: [
    {
      en: 'At the cutoff frequency f_c, output voltage drops to 1/√2 (70.71%) of the passband value, representing the half-power (-3.01 dB) point.',
      hi: 'कटऑफ आवृत्ति f_c पर आउटपुट वोल्टेज 70.71% (1/√2) रह जाता है, जो अर्ध-शक्ति (-3.01 dB) बिंदु है।',
      bn: 'কাট-অফ কম্পাঙ্ক f_c তে আউটপুট ভোল্টেজ সর্বোচ্চ মানের ৭০.৭১% এ নেমে আসে, যা অর্ধ-ক্ষমতা (-৩.০১ dB) বিন্দু।'
    },
    {
      en: 'First-order filters roll off at -20 dB/decade (-6 dB/octave); second-order RLC filters roll off at -40 dB/decade (-12 dB/octave).',
      hi: 'प्रथम-कोटि फिल्टर -20 dB/decade की दर से गिरते हैं, जबकि द्वितीय-कोटि फिल्टर -40 dB/decade की तीव्र दर से गिरते हैं।',
      bn: 'প্রথম-ক্রম ফিল্টারের ঢাল -২০ dB/decade এবং দ্বিতীয়-ক্রম ফিল্টারের ঢাল -৪০ dB/decade।'
    },
    {
      en: 'The phase shift of a first-order RC low-pass filter is 0° at DC, exactly -45° at cutoff, and asymptotically reaches -90° at high frequencies.',
      hi: 'प्रथम-कोटि RC लो-पास फिल्टर का कला कोण डीसी पर 0°, कटऑफ पर -45° और उच्च आवृत्तियों पर -90° होता है।',
      bn: 'প্রথম-ক্রম RC লো-পাস ফিল্টারের ফেজ ডিসিতে ০°, কাট-অফে ঠিক -৪৫° এবং উচ্চ কম্পাঙ্কে -৯০° হয়।'
    },
    {
      en: 'In a series RLC band-pass filter, the output MUST be taken across resistor R; taking the output across the series LC combination yields a notch (band-stop) filter.',
      hi: 'श्रेणी RLC बैंड-पास फिल्टर में आउटपुट R पर लिया जाता है; LC पर आउटपुट लेने से नॉच (बैंड-स्टॉप) फिल्टर बनता है।',
      bn: 'শ্রেণি RLC ব্যান্ড-পাস ফিল্টারে আউটপুট R এর আড়াআড়ি নিতে হয়; LC এর আড়াআড়ি নিলে ব্যান্ড-স্টপ ফিল্টার তৈরি হয়।'
    }
  ],
  commonMistakes: [
    {
      en: 'Assuming output power is zero at the cutoff frequency—output power is 50% (-3 dB), not zero.',
      hi: 'यह मान लेना कि कटऑफ पर आउटपुट शक्ति शून्य हो जाती है—वास्तव में यह 50% (-3 dB) होती है।',
      bn: 'ভুল ধারণা যে কাট-অফ কম্পাঙ্কে ক্ষমতা শূন্য হয়ে যায়—প্রকৃতপক্ষে ক্ষমতা অর্ধেক (৫০%) থাকে।'
    },
    {
      en: 'Ignoring the loading effect: connecting a load resistor R_L that is comparable to or smaller than filter resistor R alters both the cutoff frequency and passband gain.',
      hi: 'लोडिंग प्रभाव को नजरअंदाज करना: फिल्टर प्रतिरोध के समान लोड लगाने से कटऑफ आवृत्ति बदल जाती है।',
      bn: 'লোডিং প্রভাব উপেক্ষা করা: ফিল্টারের সমমানের বা কম মানের লোড যুক্ত করলে কাট-অফ কম্পাঙ্ক পরিবর্তিত হয়।'
    },
    {
      en: 'Confusing octave (factor of 2 in frequency) with decade (factor of 10 in frequency): -6 dB/octave equals -20 dB/decade.',
      hi: 'ऑक्टेव (आवृत्ति का 2 गुना) और डिकेड (आवृत्ति का 10 गुना) में भ्रमित होना: -6 dB/octave = -20 dB/decade।',
      bn: 'অক্টেভ (কম্পাঙ্কের ২ গুণ) এবং ডেকেড (কম্পাঙ্কের ১০ গুণ) গুলিয়ে ফেলা: -৬ dB/octave = -২০ dB/decade।'
    }
  ],
  keyTakeaways: [
    {
      en: 'Cutoff frequency f_c marks the transition between passband and stopband where power is halved (-3 dB).',
      hi: 'कटऑफ आवृत्ति f_c पासबैंड और स्टॉपबैंड के बीच की सीमा है जहाँ शक्ति आधी (-3 dB) हो जाती है।',
      bn: 'কাট-অফ কম্পাঙ্ক f_c হলো পাসব্যান্ড ও স্টপব্যান্ডের সংযোগস্থল যেখানে ক্ষমতা অর্ধেকে নেমে আসে।'
    },
    {
      en: 'Passive RC low-pass filters have f_c = 1 / (2πRC); passive RL low-pass filters have f_c = R / (2πL).',
      hi: 'RC लो-पास का कटऑफ f_c = 1/(2πRC) और RL का f_c = R/(2πL) होता है।',
      bn: 'RC লো-পাসের কাট-অফ f_c = ১/(২πRC) এবং RL এর f_c = R/(২πL)।'
    },
    {
      en: 'Bandwidth of a resonant band-pass filter is inversely proportional to quality factor: BW = f_0 / Q.',
      hi: 'अनुनादी बैंड-पास फिल्टर की बैंडविड्थ क्वालिटी फैक्टर के व्युत्क्रमानुपाती होती है: BW = f_0 / Q।',
      bn: 'ব্যান্ড-পাস ফিল্টারের ব্যান্ডউইথ কোয়ালিটি ফ্যাক্টরের ব্যস্তানুপাতিক: BW = f_0 / Q।'
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch12-l05-01',
      question: {
        en: 'A high-pass RC filter has R = 10 kΩ and C = 100 nF. Calculate its cutoff frequency f_c and its phase shift at f = 159 Hz.',
        hi: 'R = 10 kΩ और C = 100 nF वाले एक हाई-पास RC फिल्टर की कटऑफ आवृत्ति f_c और f = 159 Hz पर कलांतर ज्ञात करें।',
        bn: 'R = ১০ kΩ এবং C = ১০০ nF বিশিষ্ট একটি হাই-পাস RC ফিল্টারের কাট-অফ কম্পাঙ্ক f_c এবং f = ১৫৯ Hz এ ফেজ পার্থক্য নির্ণয় করুন।'
      },
      hint: {
        en: 'f_c = 1 / (2π · 10^4 · 10^-7) ≈ 159.15 Hz. At f = f_c, an RC high-pass filter exhibits a phase lead of +45°.',
        hi: 'f_c = 1/(2πRC) ≈ 159.15 Hz। कटऑफ पर हाई-पास फिल्टर +45° अग्रगामी कला प्रदान करता है।',
        bn: 'f_c = ১/(২πRC) ≈ ১৫৯.১৫ Hz। কাট-অফ কম্পাঙ্কে হাই-পাস ফিল্টারের ফেজ লিড +৪৫°।'
      }
    },
    {
      id: 'pq-ch12-l05-02',
      question: {
        en: 'Why do cascaded passive RC filter stages fail to produce ideal cumulative roll-offs (-40 dB/dec for two stages) unless buffer amplifiers are inserted between them?',
        hi: 'कैस्केड किए गए दो निष्क्रिय RC चरण बफर एम्पलीफायर के बिना -40 dB/dec की आदर्श ढलान क्यों नहीं दे पाते?',
        bn: 'বাফার অ্যামপ্লিফায়ার ছাড়া দুটি প্যাসিভ RC ফিল্টার পরপর যুক্ত করলে কেন আদর্শ -৪০ dB/dec ঢাল পাওয়া যায় না?'
      },
      hint: {
        en: 'The input impedance of the second RC stage loads the output of the first stage, pulling down the effective impedance and altering both poles. Active op-amp buffers isolate stages to eliminate loading.',
        hi: 'दूसरे चरण की इनपुट प्रतिबाधा पहले चरण के आउटपुट को लोड करती है, जिससे ध्रुव (poles) विस्थापित हो जाते हैं।',
        bn: 'দ্বিতীয় ধাপের ইনপুট রোধ প্রথম ধাপকে লোড করে, ফলে কাট-অফ কম্পাঙ্ক পরিবর্তিত হয়ে যায়।'
      }
    }
  ],
  mcqs: [
    {
      id: 'mcq-ch12-l05-01',
      question: {
        en: 'What is the voltage gain in decibels (|H|_{dB}) at the half-power cutoff frequency f_c of any first-order passive filter?',
        hi: 'किसी प्रथम-कोटि निष्क्रिय फिल्टर की अर्ध-शक्ति कटऑफ आवृत्ति f_c पर डेसिबल में वोल्टेज गेन क्या होता है?',
        bn: 'যেকোনো প্রথম-ক্রমের প্যাসিভ ফিল্টারের কাট-অফ কম্পাঙ্ক f_c তে ডেসিবেলে ভোল্টেজ গেইন কত হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: '0 dB', hi: '0 dB', bn: '০ dB' } },
        { id: 'opt-2', text: { en: '-3.01 dB', hi: '-3.01 dB', bn: '-৩.০১ dB' } },
        { id: 'opt-3', text: { en: '-6.02 dB', hi: '-6.02 dB', bn: '-৬.০২ dB' } },
        { id: 'opt-4', text: { en: '-20 dB', hi: '-20 dB', bn: '-২০ dB' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'At the cutoff frequency, the voltage ratio is |V_out / V_in| = 1 / √2 ≈ 0.7071. In decibels: 20 log10(1 / √2) = -3.01 dB, which corresponds to exactly half power (P_out = 0.5 P_in).',
        hi: 'कटऑफ आवृत्ति पर वोल्टेज अनुपात 1/√2 होता है। डेसिबल में 20 log10(1/√2) = -3.01 dB होता है, जो शक्ति का आधा मान है।',
        bn: 'কাট-অফ কম্পাঙ্কে ভোল্টেজ অনুপাত ১/√২ হয়। ডেসিবেলে ২০ log10(১/√২) = -৩.০১ dB, যা ঠিক অর্ধেক ক্ষমতা নির্দেশ করে।'
      }
    },
    {
      id: 'mcq-ch12-l05-02',
      question: {
        en: 'What is the asymptotic high-frequency roll-off rate of a first-order RC low-pass filter?',
        hi: 'प्रथम-कोटि RC लो-पास फिल्टर की उच्च-आवृत्ति रोल-ऑफ दर क्या होती है?',
        bn: 'প্রথম-ক্রম RC লো-পাস ফিল্টারের উচ্চ-কম্পাঙ্ক রোল-অফ ঢাল কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '-6 dB/decade', hi: '-6 dB/decade', bn: '-৬ dB/decade' } },
        { id: 'opt-2', text: { en: '-12 dB/decade', hi: '-12 dB/decade', bn: '-১২ dB/decade' } },
        { id: 'opt-3', text: { en: '-20 dB/decade (-6 dB/octave)', hi: '-20 dB/decade (-6 dB/octave)', bn: '-২০ dB/decade (-৬ dB/octave)' } },
        { id: 'opt-4', text: { en: '-40 dB/decade', hi: '-40 dB/decade', bn: '-৪০ dB/decade' } }
      ],
      correctOptionId: 'opt-3',
      explanation: {
        en: 'For ω >> ω_c, |H(jω)| ≈ ω_c / ω. A 10x increase in frequency (one decade) decreases gain by a factor of 10, which equals 20 log10(0.1) = -20 dB/decade (or -6 dB/octave).',
        hi: 'उच्च आवृत्ति पर गेन 1/ω के अनुपात में घटता है, जिससे -20 dB प्रति दशक (-6 dB/octave) की गिरावट मिलती है।',
        bn: 'উচ্চ কম্পাঙ্কে গেইন ১/ω হারে কমে, ফলে প্রতি দশকে -২০ dB (বা প্রতি অক্টেভে -৬ dB) ঢাল পাওয়া যায়।'
      }
    },
    {
      id: 'mcq-ch12-l05-03',
      question: {
        en: 'What is the phase shift of the output voltage relative to the input voltage at the cutoff frequency f_c of a first-order RC LOW-PASS filter?',
        hi: 'प्रथम-कोटि RC लो-पास फिल्टर की कटऑफ आवृत्ति पर आउटपुट और इनपुट के बीच कलांतर क्या होता है?',
        bn: 'প্রথম-ক্রম RC লো-পাস ফিল্টারের কাট-অফ কম্পাঙ্কে ইনপুটের সাপেক্ষে আউটপুটের ফেজ পার্থক্য কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '0°', hi: '0°', bn: '০°' } },
        { id: 'opt-2', text: { en: '-45° (output lags input by 45°)', hi: '-45° (आउटपुट 45° पश्चगामी)', bn: '-৪৫° (আউটপুট ৪৫° পিছিয়ে)' } },
        { id: 'opt-3', text: { en: '+45° (output leads input by 45°)', hi: '+45° (आउटपुट 45° अग्रगामी)', bn: '+৪৫° (আউটপুট ৪৫° এগিয়ে)' } },
        { id: 'opt-4', text: { en: '-90°', hi: '-90°', bn: '-৯০°' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'Since H(jω_c) = 1 / (1 + j1), the phase angle is ∠H = -arctan(1) = -45°, meaning output voltage lags input voltage by exactly 45°.',
        hi: 'H(jω_c) = 1 / (1 + j1) होने से कला कोण -arctan(1) = -45° होता है (आउटपुट पश्चगामी)।',
        bn: 'H(jω_c) = ১ / (১ + j১) হওয়ায় ফেজ কোণ -arctan(১) = -৪৫° হয়, অর্থাৎ আউটপুট ৪৫° ল্যাগ করে।'
      }
    },
    {
      id: 'mcq-ch12-l05-04',
      question: {
        en: 'In a series RLC network used as a BAND-PASS filter, where must the output voltage V_out be taken from?',
        hi: 'बैंड-पास फिल्टर के रूप में प्रयुक्त श्रेणी RLC नेटवर्क में आउटपुट वोल्टेज कहाँ से लिया जाता है?',
        bn: 'ব্যান্ড-পাস ফিল্টার হিসেবে ব্যবহৃত শ্রেণি RLC নেটওয়ার্কে আউটপুট ভোল্টেজ কোথা থেকে নেওয়া হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Across the inductor L only', hi: 'केवल प्रेरक L पर', bn: 'কেবল আবেশক L এ' } },
        { id: 'opt-2', text: { en: 'Across the capacitor C only', hi: 'केवल संधारित्र C पर', bn: 'কেবল ধারক C তে' } },
        { id: 'opt-3', text: { en: 'Across the resistor R', hi: 'प्रतिरोधक R पर', bn: 'রোধক R এর আড়াআড়ি' } },
        { id: 'opt-4', text: { en: 'Across the series combination of L and C', hi: 'L एवं C के श्रेणी संयोजन पर', bn: 'L ও C এর শ্রেণি সংযোগের আড়াআড়ি' } }
      ],
      correctOptionId: 'opt-3',
      explanation: {
        en: 'At resonance, L and C reactances cancel (X_L = X_C). Current is maximum and the entire input voltage appears across R, yielding maximum band-pass gain |H| = 1. Taking output across LC would yield a notch filter.',
        hi: 'अनुनाद पर L और C के प्रतिघात रद्द हो जाते हैं और पूरा वोल्टेज R पर मिलता है, जिससे बैंड-पास फिल्टर बनता है।',
        bn: 'অনুরণন অবস্থায় L ও C এর প্রতিঘাত বাতিল হয়ে সর্বোচ্চ কারেন্ট R এ প্রবাহিত হয় এবং সম্পূর্ণ ভোল্টেজ R এ পাওয়া যায়।'
      }
    },
    {
      id: 'mcq-ch12-l05-05',
      question: {
        en: 'How does increasing the quality factor Q of a band-pass filter affect its frequency selectivity and bandwidth BW?',
        hi: 'बैंड-पास फिल्टर के क्वालिटी फैक्टर Q को बढ़ाने से इसकी चयनात्मकता एवं बैंडविड्थ BW पर क्या प्रभाव पड़ता है?',
        bn: 'ব্যান্ড-পাস ফিল্টারের কোয়ালিটি ফ্যাক্টর Q বাড়ালে এর সিলেক্টিভিটি ও ব্যান্ডউইথ BW কীভাবে পরিবর্তিত হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Bandwidth widens and selectivity degrades', hi: 'बैंडविड्थ चौड़ी होती है और चयनात्मकता घटती है', bn: 'ব্যান্ডউইথ বৃদ্ধি পায় এবং সিলেক্টিভিটি কমে' } },
        { id: 'opt-2', text: { en: 'Bandwidth narrows (BW = f_0 / Q) and selectivity improves', hi: 'बैंडविड्थ संकीर्ण होती है (BW = f_0 / Q) और चयनात्मकता बढ़ती है', bn: 'ব্যান্ডউইথ সংকীর্ণ হয় (BW = f_0 / Q) এবং সিলেক্টিভিটি উন্নত হয়' } },
        { id: 'opt-3', text: { en: 'Bandwidth remains unchanged while center frequency shifts', hi: 'बैंडविड्थ अपरिवर्तित रहती है पर केंद्र आवृत्ति बदलती है', bn: 'ব্যান্ডউইথ অপরিবর্তিত থাকে কিন্তু কেন্দ্র কম্পাঙ্ক সরে যায়' } },
        { id: 'opt-4', text: { en: 'Center frequency doubles', hi: 'केंद्र आवृत्ति दोगुनी हो जाती है', bn: 'কেন্দ্র কম্পাঙ্ক দ্বিগুণ হয়' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'Since BW = f_0 / Q, a higher quality factor produces a narrower bandwidth, resulting in sharper passband selectivity and better rejection of adjacent frequencies.',
        hi: 'BW = f_0 / Q के अनुसार, उच्च Q मान बैंडविड्थ को संकीर्ण और फिल्टर को अधिक चयनात्मक बनाता है।',
        bn: 'BW = f_0 / Q সমীকরণ অনুসারে, উচ্চ Q মান ব্যান্ডউইথ সংকীর্ণ করে ফিল্টারকে আরও তীক্ষ্ণ ও সংবেদনশীল করে।'
      }
    },
    {
      id: 'mcq-ch12-l05-06',
      question: {
        en: 'Which passive filter topology is specifically designed to eliminate a single troublesome interference frequency (such as 50 Hz or 60 Hz mains hum) while transmitting all other frequencies?',
        hi: 'कौन सी निष्क्रिय फिल्टर टोपोलॉजी अन्य सभी आवृत्तियों को पारित करते हुए एकल अवांछित आवृत्ति (जैसे 50 Hz पावर हम) को समाप्त करने के लिए बनाई जाती है?',
        bn: 'অন্যান্য সব কম্পাঙ্ক পার করে কেবল একটি নির্দিষ্ট অনাকাঙ্ক্ষিত কম্পাঙ্ককে (যেমন ৫০/৬০ Hz মেইনস হাম) দূর করতে কোন ফিল্টার ব্যবহৃত হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Low-Pass Filter (LPF)', hi: 'लो-पास फिल्टर (LPF)', bn: 'লো-পাস ফিল্টার (LPF)' } },
        { id: 'opt-2', text: { en: 'High-Pass Filter (HPF)', hi: 'हाई-पास फिल्टर (HPF)', bn: 'হাই-পাস ফিল্টার (HPF)' } },
        { id: 'opt-3', text: { en: 'Band-Stop / Notch Filter', hi: 'बैंड-स्टॉप / नॉच फिल्टर', bn: 'ব্যান্ড-স্টপ / নচ ফিল্টার' } },
        { id: 'opt-4', text: { en: 'All-Pass Phase Shifter', hi: 'ऑल-पास फेज शिफ्टर', bn: 'অল-পাস ফেজ শিফটার' } }
      ],
      correctOptionId: 'opt-3',
      explanation: {
        en: 'A Band-Stop (or Notch) filter introduces a deep transmission null (notch) at its resonant center frequency ω_0 to reject a specific interference frequency while preserving all adjacent spectrum.',
        hi: 'बैंड-स्टॉप (नॉच) फिल्टर अपनी केंद्र आवृत्ति पर तीव्र क्षीणन उत्पन्न करके अवांछित आवृत्ति को रोकता है।',
        bn: 'ব্যান্ড-স্টপ (নচ) ফিল্টার নির্দিষ্ট রেজোন্যান্ট কম্পাঙ্কে তীব্র বাধা সৃষ্টি করে অনাকাঙ্ক্ষিত শব্দ দূর করে।'
      }
    },
    {
      id: 'mcq-ch12-l05-07',
      question: {
        en: 'What is the cutoff frequency f_c of a first-order RL low-pass filter consisting of series inductor L and shunt load resistor R?',
        hi: 'श्रेणी प्रेरक L और शंट लोड प्रतिरोधक R वाले प्रथम-कोटि RL लो-पास फिल्टर की कटऑफ आवृत्ति f_c क्या है?',
        bn: 'শ্রেণি আবেশক L এবং শান্ট রোধক R বিশিষ্ট প্রথম-ক্রম RL লো-পাস ফিল্টারের কাট-অফ কম্পাঙ্ক f_c কত?'
      },
      options: [
        { id: 'opt-1', text: { en: 'f_c = 1 / (2π R L)', hi: 'f_c = 1 / (2π R L)', bn: 'f_c = ১ / (২π R L)' } },
        { id: 'opt-2', text: { en: 'f_c = R / (2π L)', hi: 'f_c = R / (2π L)', bn: 'f_c = R / (২π L)' } },
        { id: 'opt-3', text: { en: 'f_c = 2π L / R', hi: 'f_c = 2π L / R', bn: 'f_c = ২π L / R' } },
        { id: 'opt-4', text: { en: 'f_c = 1 / (2π √(RL))', hi: 'f_c = 1 / (2π √(RL))', bn: 'f_c = ১ / (২π √(RL))' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'For an RL filter, the corner occurs when inductive reactance equals resistance: ω_c L = R  ⇒  ω_c = R / L  ⇒  f_c = R / (2π L).',
        hi: 'RL परिपथ में कटऑफ तब होता है जब ω_c L = R होता है, जिससे f_c = R / (2π L) मिलता है।',
        bn: 'RL ফিল্টারে কাট-অফ ঘটে যখন ω_c L = R হয়, ফলে f_c = R / (২π L) পাওয়া যায়।'
      }
    },
    {
      id: 'mcq-ch12-l05-08',
      question: {
        en: 'A second-order RLC filter exhibits an asymptotic high-frequency roll-off rate of:',
        hi: 'एक द्वितीय-कोटि RLC फिल्टर की असममित उच्च-आवृत्ति रोल-ऑफ दर होती है:',
        bn: 'একটি দ্বিতীয়-ক্রমের RLC ফিল্টারের অ্যাসিম্পটোটিক উচ্চ-কম্পাঙ্ক রোল-অফ ঢাল কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '-10 dB/decade', hi: '-10 dB/decade', bn: '-১০ dB/decade' } },
        { id: 'opt-2', text: { en: '-20 dB/decade (-6 dB/octave)', hi: '-20 dB/decade (-6 dB/octave)', bn: '-২০ dB/decade (-৬ dB/octave)' } },
        { id: 'opt-3', text: { en: '-40 dB/decade (-12 dB/octave)', hi: '-40 dB/decade (-12 dB/octave)', bn: '-৪০ dB/decade (-১২ dB/octave)' } },
        { id: 'opt-4', text: { en: '-60 dB/decade', hi: '-60 dB/decade', bn: '-৬০ dB/decade' } }
      ],
      correctOptionId: 'opt-3',
      explanation: {
        en: 'Because a second-order network possesses two reactive storage elements (L and C), its denominator contains s² = (jω)² = -ω². At high frequencies, gain drops as 1/ω², yielding an attenuation slope of -40 dB/decade (-12 dB/octave).',
        hi: 'दो ऊर्जा-संग्राहक तत्वों (L एवं C) के कारण हर में ω² आता है, जिससे -40 dB/decade (-12 dB/octave) की ढलान मिलती है।',
        bn: 'দুটি শক্তি সঞ্চয়ী উপাদান (L ও C) থাকার কারণে হরে ω² আসে, যা -৪০ dB/decade (-১২ dB/octave) রোল-অফ প্রদান করে।'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-ch12-l05-01',
      title: {
        en: 'Passive AC Filter Topologies (LPF, HPF, BPF, Notch)',
        hi: 'निष्क्रिय एसी फिल्टर टोपोलॉजी (LPF, HPF, BPF, नॉच)',
        bn: 'প্যাসিভ এসি ফিল্টার বর্তনীসমূহ (LPF, HPF, BPF, নচ)'
      },
      caption: {
        en: 'Passive AC Filter Topologies & Responses: 1st-order RC/RL and 2nd-order RLC with -3 dB half-power cutoff frequencies and roll-off slopes.',
        hi: 'निष्क्रिय एसी फिल्टर टोपोलॉजी एवं अनुक्रियाएँ: 1st-ऑर्डर RC/RL एवं 2nd-ऑर्डर RLC -3 dB अर्ध-शक्ति कटऑफ और रोल-ऑफ ढलानों के साथ।',
        bn: 'প্যাসিভ এসি ফিল্টার বর্তনী ও প্রতিক্রিয়া: প্রথম ও দ্বিতীয়-ক্রমের ফিল্টারের -৩ dB অর্ধ-ক্ষমতা কাট-অফ ও রোল-অফ।'
      },
      svgType: 'circuit-ch12-passive-filters-design'
    }
  ]
};

// Legacy compatibility export
export const LESSON_IDEAL_TRANSFORMERS_PUZ = LESSON_PASSIVE_FILTERS_DESIGN;
