import { Lesson } from '../types';

export const LESSON_PASSIVE_FILTERS_BODE: Lesson = {
  id: 'lsn-ch12-bode-plots-frequency-response',
  topicId: 'tp-rlc-circuit',
  chapterId: 'ch-ac-circuits',
  order: 6,
  title: {
    en: 'Passive Filters & Frequency Response (Bode Plots)',
    hi: 'निष्क्रिय फिल्टर एवं आवृत्ति अनुक्रिया (बोडे प्लॉट)',
    bn: 'প্যাসিভ ফিল্টার ও কম্পাঙ্ক প্রতিক্রিয়া (বোড প্লট)'
  },
  description: {
    en: 'Design and synthesize passive low-pass, high-pass, band-pass, and band-stop (notch) filters using RC, RL, and RLC networks. Master network transfer functions H(jω), half-power cutoff frequencies (-3 dB points), roll-off slopes (-20 dB/dec, -40 dB/dec), and asymptotic Bode magnitude and phase plotting.',
    hi: 'RC, RL, एवं RLC नेटवर्कों का उपयोग करके निष्क्रिय लो-पास, हाई-पास, बैंड-पास, एवं बैंड-स्टॉप (नॉच) फिल्टरों का डिजाइन करें। नेटवर्क ट्रांसफर फंक्शन H(jω), अर्ध-शक्ति कटऑफ आवृत्तियों (-3 dB बिंदु), रोल-ऑफ ढलानों (-20 dB/dec, -40 dB/dec), और असममित बोडे परिमाण एवं कला आलेखों में पारंगत हों।',
    bn: 'RC, RL ও RLC নেটওয়ার্ক ব্যবহার করে প্যাসিভ লো-পাস, হাই-পাস, ব্যান্ড-পাস এবং ব্যান্ড-স্টপ (নচ) ফিল্টার ডিজাইন করুন। নেটওয়ার্ক ট্রান্সফার ফাংশন H(jω), অর্ধ-ক্ষমতা কাট-অফ কম্পাঙ্ক (-৩ dB বিন্দু), রোল-অফ ঢাল এবং বোড ম্যাগনিটিউড ও ফেজ প্লট পুঙ্খানুপুঙ্খভাবে শিখুন।'
  },
  estimatedMinutes: 42,
  easyExplanation: {
    en: 'An electrical filter is a frequency-selective circuit that allows signals in certain frequency bands to pass through while blocking or attenuating unwanted frequencies (such as noise or hum). A Low-Pass Filter (LPF) passes DC and low frequencies while attenuating high frequencies; a High-Pass Filter (HPF) does the exact opposite. Band-Pass Filters pass only frequencies near a center frequency, while Band-Stop (notch) filters reject a specific interference frequency (like 50 Hz/60 Hz power-line hum). Engineers evaluate filter performance using Bode plots—graphs of logarithmic gain in decibels (dB) versus logarithmic frequency—revealing the cutoff frequency (where output power drops by 50% or -3 dB) and the roll-off steepness.',
    hi: 'एक विद्युत फिल्टर एक आवृत्ति-चयनात्मक परिपथ है जो कुछ आवृत्तियों के संकेतों को गुजरने देता है जबकि अवांछित आवृत्तियों (जैसे शोर या हम) को रोकता है। लो-पास फिल्टर (LPF) कम आवृत्तियों को जाने देता है और उच्च आवृत्तियों को रोकता है; हाई-पास फिल्टर (HPF) इसका ठीक उल्टा करता है। बैंड-पास केवल एक निश्चित बैंड को पास करता है, जबकि बैंड-स्टॉप किसी विशिष्ट हस्तक्षेप (जैसे 50 Hz एसी शोर) को ब्लॉक करता है। इंजीनियर बोडे प्लॉट (Bode Plot) का उपयोग करके फिल्टर के प्रदर्शन का विश्लेषण करते हैं।',
    bn: 'বৈদ্যুতিক ফিল্টার হলো একটি কম্পাঙ্ক-নির্বাচনী বর্তনী যা নির্দিষ্ট কম্পাঙ্কের সংকেত পার হতে দেয় এবং অনাকাঙ্ক্ষিত কম্পাঙ্ককে (যেমন নয়েজ) আটকে দেয়। লো-পাস ফিল্টার (LPF) কম কম্পাঙ্ক পার করে এবং উচ্চ কম্পাঙ্ক রোধ করে; হাই-পাস ফিল্টার (HPF) এর বিপরীত কাজ করে। ব্যান্ড-পাস কেবল নির্দিষ্ট ব্যান্ড পার করে এবং ব্যান্ড-স্টপ ফিল্টার কোনো নির্দিষ্ট অনাকাঙ্ক্ষিত কম্পাঙ্ককে বাধা দেয়। বোড প্লটের সাহায্যে গেইন (dB) এবং ফেজের পরিবর্তন দেখে ফিল্টারের কার্যকারিতা পরিমাপ করা হয়।'
  },
  detailedExplanation: {
    en: '1. Network Transfer Functions:\nIn linear AC circuits, the sinusoidal steady-state transfer function relates output phasor V_out(jω) to input phasor V_in(jω):\nH(jω) = V_out(jω) / V_in(jω) = |H(jω)| e^{j∠H(jω)}.\n- Magnitude response: Gain |H(jω)| = |V_out| / |V_in|.\n- Decibel gain: Gain_{dB} = 20 log_{10} |H(jω)|.\n- Phase response: θ(ω) = ∠H(jω) = ∠V_out - ∠V_in.\n\n2. First-Order Passive Filters:\n- First-Order RC Low-Pass Filter (R in series, C across output):\n  H(jω) = (1 / jωC) / [R + (1 / jωC)] = 1 / (1 + jωRC) = 1 / [1 + j(ω/ω_c)].\n  Cutoff frequency: ω_c = 1 / (RC) rad/s  ⇒  f_c = 1 / (2πRC) Hz.\n  At ω = ω_c: |H(jω_c)| = 1 / √2 ≈ 0.7071 (-3.01 dB), phase ∠H = -45°.\n  High frequencies (ω >> ω_c): |H| ≈ ω_c / ω, rolling off at -20 dB/decade (-6 dB/octave).\n- First-Order RC High-Pass Filter (C in series, R across output):\n  H(jω) = R / [R + (1 / jωC)] = jωRC / (1 + jωRC) = j(ω/ω_c) / [1 + j(ω/ω_c)].\n  Cutoff frequency: ω_c = 1 / (RC) rad/s.\n  At ω = ω_c: |H| = 1 / √2 (-3 dB), phase ∠H = +45°.\n  Low frequencies (ω << ω_c): rolls off at +20 dB/decade.\n\n3. Second-Order Filters (Series RLC):\n- Band-Pass Filter (output taken across resistor R):\n  H(jω) = R / [R + j(ωL - 1/ωC)] = 1 / [1 + j Q (ω/ω_0 - ω_0/ω)].\n  Resonant center frequency: ω_0 = 1 / √(LC).\n  Quality factor: Q = (ω_0 L) / R = 1 / (ω_0 R C) = (1/R) √(L/C).\n  Bandwidth: BW = ω_2 - ω_1 = ω_0 / Q rad/s  ⇒  Δf = f_0 / Q Hz.\n  Upper and lower half-power frequencies: ω_{1,2} = ∓ (R / 2L) + √[(R / 2L)^2 + ω_0^2].\n- Band-Stop / Notch Filter (output taken across series LC combination):\n  H(jω) = [j(ωL - 1/ωC)] / [R + j(ωL - 1/ωC)].\n  At resonance ω = ω_0: LC impedance is zero, so V_out = 0 (infinite notch attenuation).\n\n4. Asymptotic Bode Plots:\nBode magnitude graphs plot Gain in dB on a linear y-axis versus frequency ω on a logarithmic x-axis.\n- Low-Pass asymptote: 0 dB horizontal line for ω < ω_c; straight line sloping downward at -20 dB/decade for ω > ω_c.\n- Maximum asymptotic error occurs at the corner frequency ω = ω_c, where actual response is exactly -3.01 dB below the asymptote.\n- Phase asymptote: 0° for ω ≤ 0.1 ω_c; -45° at ω = ω_c; -90° for ω ≥ 10 ω_c.',
    hi: '1. ट्रांसफर फंक्शन H(jω) = V_out / V_in। डेसिबल गेन: Gain_dB = 20 log10 |H(jω)|।\n2. प्रथम-कोटि RC फिल्टर:\n- लो-पास: H(jω) = 1 / (1 + jωRC), कटऑफ ω_c = 1/(RC)। कटऑफ पर गेन -3 dB और फेज -45° होता है। रोल-ऑफ -20 dB/decade है।\n- हाई-पास: H(jω) = jωRC / (1 + jωRC), कटऑफ ω_c = 1/(RC)।\n3. द्वितीय-कोटि RLC फिल्टर:\n- बैंड-पास (आउटपुट R पर): केंद्र आवृत्ति ω_0 = 1/√(LC), क्वालिटी फैक्टर Q = (1/R)√(L/C), बैंडविड्थ BW = ω_0 / Q।\n- बैंड-स्टॉप (आउटपुट LC पर): अनुनाद पर आउटपुट शून्य हो जाता है (नॉच फिल्टर)।\n4. बोडे प्लॉट: लॉग आवृत्ति के विरुद्ध dB गेन का ग्राफ। कटऑफ आवृत्ति पर वास्तविक वक्र असममित रेखा से ठीक 3 dB नीचे होता है।',
    bn: '১. ট্রান্সফার ফাংশন H(jω) = V_out / V_in। ডেসিবেল গেইন: Gain_dB = ২০ log10 |H(jω)|।\n২. প্রথম-ক্রমের RC ফিল্টার:\n- লো-পাস: H(jω) = ১ / (১ + jωRC), কাট-অফ কম্পাঙ্ক ω_c = ১/(RC)। কাট-অফে গেইন -৩ dB ও ফেজ -৪৫°। রোল-অফ -২০ dB/decade।\n- হাই-পাস: H(jω) = jωRC / (১ + jωRC)।\n৩. দ্বিতীয়-ক্রমের RLC ফিল্টার:\n- ব্যান্ড-পাস: কেন্দ্র কম্পাঙ্ক ω_0 = ১/√(LC), কোয়ালিটি ফ্যাক্টর Q = (১/R)√(L/C), ব্যান্ডউইথ BW = ω_0 / Q।\n- ব্যান্ড-স্টপ: কেন্দ্র কম্পাঙ্কে আউটপুট শূন্য হয়।\n৪. বোড প্লট: লগ কম্পাঙ্কের বিপরীতে dB গেইনের গ্রাফ। কাট-অফে প্রকৃত প্রতিক্রিয়া অ্যাসিম্পটোট থেকে ৩ dB নিচে থাকে।'
  },
  formulas: [
    {
      id: 'f-rc-cutoff-freq',
      symbol: 'f_c',
      expression: 'f_c = \\frac{1}{2\\pi R C}, \\quad \\omega_c = \\frac{1}{RC}',
      title: {
        en: 'Half-Power Cutoff Frequency (First-Order RC)',
        hi: 'अर्ध-शक्ति कटऑफ आवृत्ति (प्रथम-कोटि RC)',
        bn: 'অর্ধ-ক্ষমতা কাট-অফ কম্পাঙ্ক (প্রথম-ক্রম RC)'
      },
      description: {
        en: 'The frequency where filter output voltage drops to 1/√2 (0.707) of maximum, or -3 dB in power.',
        hi: 'वह आवृत्ति जहाँ आउटपुट वोल्टेज अधिकतम मान का 1/√2 (0.707) या शक्ति में -3 dB रह जाती है।',
        bn: 'যে কম্পাঙ্কে আউটপুট ভোল্টেজ সর্বোচ্চ মানের ১/√২ (০.৭০৭) বা শক্তিতে -৩ dB হ্রাস পায়।'
      },
      variables: [
        { symbol: 'f_c', name: { en: 'Cutoff frequency (Hz)', hi: 'कटऑफ आवृत्ति (Hz)', bn: 'কাট-অফ কম্পাঙ্ক (Hz)' } },
        { symbol: 'R', name: { en: 'Filter resistance (Ω)', hi: 'फिल्टर प्रतिरोध (Ω)', bn: 'ফিল্টার রোধ (Ω)' } },
        { symbol: 'C', name: { en: 'Filter capacitance (F)', hi: 'फिल्टर धारिता (F)', bn: 'ফিল্টার ধারকত্ব (F)' } }
      ]
    },
    {
      id: 'f-bode-decibel-gain',
      symbol: '|H|_{dB}',
      expression: '|H(j\\omega)|_{dB} = 20 \\log_{10} \\left| \\frac{\\mathbf{V}_{out}}{\\mathbf{V}_{in}} \\right|',
      title: {
        en: 'Decibel Voltage Gain',
        hi: 'डेसिबल वोल्टेज गेन',
        bn: 'ডেসিবেল ভোল্টেজ গেইন'
      },
      description: {
        en: 'Logarithmic representation of voltage transfer ratio on Bode plots.',
        hi: 'बोडे प्लॉट पर वोल्टेज ट्रांसफर अनुपात का लघुगणकीय निरूपण।',
        bn: 'বোড প্লটে ভোল্টেজ রূপান্তর অনুপাতের লগারিদমিক প্রকাশ।'
      },
      variables: [
        { symbol: '|H|_{dB}', name: { en: 'Gain in decibels (dB)', hi: 'डेसिबल में गेन (dB)', bn: 'ডেসিবেলে গেইন (dB)' } }
      ]
    },
    {
      id: 'f-rlc-bandwidth-q',
      symbol: 'BW',
      expression: 'BW = \\Delta \\omega = \\frac{\\omega_0}{Q} = \\frac{R}{L}, \\quad Q = \\frac{\\omega_0 L}{R} = \\frac{1}{R}\\sqrt{\\frac{L}{C}}',
      title: {
        en: 'Bandwidth and Quality Factor of Series RLC Filter',
        hi: 'श्रेणी RLC फिल्टर की बैंडविड्थ एवं क्वालिटी फैक्टर',
        bn: 'শ্রেণি RLC ফিল্টারের ব্যান্ডউইথ ও কোয়ালিটি ফ্যাক্টর'
      },
      description: {
        en: 'Relates resonant frequency, filter selectivity Q, and -3 dB bandwidth.',
        hi: 'अनुनादी आवृत्ति, फिल्टर चयनात्मकता Q, एवं -3 dB बैंडविड्थ को संबंधित करता है।',
        bn: 'অনুরণন কম্পাঙ্ক, নির্বাচনী গুণাগুণ Q এবং -৩ dB ব্যান্ডউইথ নির্দেশ করে।'
      },
      variables: [
        { symbol: 'BW', name: { en: 'Bandwidth (rad/s)', hi: 'बैंडविड्थ (rad/s)', bn: 'ব্যান্ডউইথ (rad/s)' } },
        { symbol: 'Q', name: { en: 'Quality factor (dimensionless)', hi: 'क्वालिटी फैक्टर (विमाहीन)', bn: 'কোয়ালিটি ফ্যাক্টর (মাত্রাহীন)' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-ch12-l06-filter-types',
      title: {
        en: 'Comparison of Passive Filter Types and Characteristics',
        hi: 'निष्क्रिय फिल्टर प्रकारों एवं विशेषताओं की तुलना',
        bn: 'প্যাসিভ ফিল্টারের প্রকারভেদ ও বৈশিষ্ট্যের তুলনা'
      },
      content: {
        en: 'Passive filters rely solely on passive components (resistors, inductors, capacitors) without external power supplies or amplifiers:\n\n1. Low-Pass Filter (LPF):\nPasses signals from DC up to cutoff frequency f_c; attenuates higher frequencies. Essential as anti-aliasing filters before ADC samplers and power supply ripple filters.\n\n2. High-Pass Filter (HPF):\nBlocks DC and low frequencies while passing frequencies above f_c. Ubiquitous as DC-blocking coupling capacitors between audio stages and high-frequency antenna feeds.\n\n3. Band-Pass Filter (BPF):\nPasses a specific frequency window [f_1, f_2] around center frequency f_0 while attenuating both lower and higher frequencies. Crucial for radio tuner station selection and musical equalizers.\n\n4. Band-Stop / Notch Filter (BSF):\nRejects a narrow band of frequencies around f_0 while passing all lower and higher frequencies. Widely deployed to eliminate 50 Hz/60 Hz mains interference in biomedical instrumentation (ECG/EEG).',
        hi: 'निष्क्रिय फिल्टर केवल प्रतिरोधकों, प्रेरकों और संधारित्रों पर निर्भर करते हैं:\n1. लो-पास (LPF): DC से f_c तक जाने देता है, उच्च आवृत्तियों को रोकता है (एंटी-अलियासिंग एवं पावर सप्लाई)।\n2. हाई-पास (HPF): DC को रोकता है और f_c से अधिक आवृत्तियों को जाने देता है (DC ब्लॉकिंग)।\n3. बैंड-पास (BPF): केंद्र f_0 के चारों ओर एक संकीर्ण बैंड पास करता है (रेडियो ट्यूनर)।\n4. बैंड-स्टॉप/नॉच (BSF): किसी विशिष्ट अवांछित आवृत्ति (जैसे 50 Hz पावर हम) को नष्ट करता है (ईसीजी मशीनें)।',
        bn: 'প্যাসিভ ফিল্টারে কেবল রোধক, আবেশক ও ধারক ব্যবহৃত হয়:\n১. লো-পাস: ডিসি থেকে f_c পর্যন্ত পার করে, উচ্চ কম্পাঙ্ক রোধ করে।\n২. হাই-পাস: ডিসি ব্লক করে এবং f_c এর উপরের কম্পাঙ্ক পার করে।\n৩. ব্যান্ড-পাস: কেন্দ্র কম্পাঙ্কের চারপাশে নির্দিষ্ট ব্যান্ড পার করে (রেডিও টিউনার)।\n৪. ব্যান্ড-স্টপ/নচ: কোনো নির্দিষ্ট ক্ষতিকর কম্পাঙ্ক (যেমন ৫০ Hz নয়েজ) আটকে দেয়।'
      }
    },
    {
      id: 'sec-ch12-l06-bode-rules',
      title: {
        en: 'Rules for Asymptotic Bode Construction',
        hi: 'असममित बोडे आलेख निर्माण के नियम',
        bn: 'বোড প্লট অঙ্কনের নিয়মাবলী'
      },
      content: {
        en: 'Constructing Bode magnitude and phase curves without a computer relies on asymptotic approximations:\n\n1. Identify Break/Corner Frequencies (Poles and Zeros):\n- Each real pole (1 + jω/ω_p) introduces a downward slope of -20 dB/decade (-6 dB/octave) at frequencies above ω_p.\n- Each real zero (1 + jω/ω_z) introduces an upward slope of +20 dB/decade (+6 dB/octave) above ω_z.\n\n2. Octave vs. Decade:\n- A decade is a 10-fold frequency factor (e.g., 100 Hz to 1000 Hz). Slope = -20 dB/decade.\n- An octave is a 2-fold frequency factor (e.g., 100 Hz to 200 Hz). Slope = -6.02 dB/octave.\n\n3. Actual vs. Asymptotic Response:\n- At the corner frequency ω = ω_c: the actual magnitude is exactly 20 log10(1/√2) = -3.01 dB.\n- One octave below (ω = 0.5 ω_c): actual response is -1.0 dB.\n- One octave above (ω = 2 ω_c): actual response is -7.0 dB (-1 dB below the -6 dB asymptote).\n- Phase response: changes linearly by -45°/decade between 0.1 ω_c and 10 ω_c, passing through -45° at exactly ω_c.',
        hi: 'बोडे प्लॉट निर्माण के नियम:\n1. प्रत्येक पोल (Pole) आवृत्ति ω_p के ऊपर -20 dB/decade की ढलान लाता है।\n2. प्रत्येक जीरो (Zero) आवृत्ति ω_z के ऊपर +20 dB/decade की ढलान लाता है।\n3. कॉर्नर आवृत्ति पर वास्तविक मान असममित रेखा से ठीक -3.01 dB नीचे होता है।\n4. फेज कॉर्नर आवृत्ति पर ठीक -45° होता है और 0.1 ω_c से 10 ω_c के बीच बदलता है।',
        bn: 'বোড প্লট তৈরির নিয়মাবলী:\n১. প্রতিটি পোল ω_p এর উপরে -২০ dB/decade ঢাল তৈরি করে।\n২. প্রতিটি জিরো ω_z এর উপরে +২০ dB/decade ঢাল তৈরি করে।\n৩. কাট-অফ কম্পাঙ্কে প্রকৃত মান অ্যাসিম্পটোট থেকে হুবহু -৩.০১ dB নিচে থাকে।\n৪. ফেজ কাট-অফে ঠিক -৪৫° হয় এবং ০.১ ω_c থেকে ১০ ω_c এর মধ্যে পরিবর্তিত হয়।'
      }
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch12-l06-01',
      problem: {
        en: 'An audio engineer needs to design a first-order passive RC low-pass filter to attenuate high-frequency radio noise above the audible spectrum. The required -3 dB cutoff frequency is f_c = 20 kHz. A standard capacitor C = 10 nF is available. Calculate: (a) the required resistance R, (b) the filter transfer function H(jω), (c) the magnitude response |H| in dB at f = 20 kHz, (d) the magnitude response in dB at f = 200 kHz (one decade above cutoff), and (e) the phase angle at f = 200 kHz.',
        hi: 'एक ऑडियो इंजीनियर को 20 kHz की -3 dB कटऑफ आवृत्ति वाला प्रथम-कोटि RC लो-पास फिल्टर डिजाइन करना है। उपलब्ध संधारित्र C = 10 nF है। ज्ञात कीजिए: (a) आवश्यक प्रतिरोध R, (b) ट्रांसफर फंक्शन H(jω), (c) 20 kHz पर dB गेन, (d) 200 kHz पर dB गेन, एवं (e) 200 kHz पर कला कोण।',
        bn: 'একজন অডিও ইঞ্জিনিয়ারকে ২০ kHz কাট-অফ কম্পাঙ্কের প্রথম-ক্রমের RC লো-পাস ফিল্টার ডিজাইন করতে হবে। ধারক C = ১০ nF। নির্ণয় করুন: (ক) প্রয়োজনীয় রোধ R, (খ) ট্রান্সফার ফাংশন H(jω), (গ) ২০ kHz এ dB গেইন, (ঘ) ২০০ kHz এ dB গেইন এবং (ঙ) ২০০ kHz এ ফেজ কোণ।'
      },
      formula: {
        en: 'f_c = 1 / (2πRC) ⇒ R = 1 / (2π f_c C).\nω_c = 2π f_c = 1.2566 × 10^5 rad/s.\nH(jω) = 1 / [1 + j(f / f_c)].\n|H(jf)| = 1 / sqrt[1 + (f / f_c)^2].\n|H|_{dB} = 20 log10 |H|.\n∠H(jf) = -arctan(f / f_c).',
        hi: 'R = 1 / (2π f_c C), H(jω) = 1 / [1 + j(f/f_c)], |H|_dB = 20 log10 |H|, ∠H = -arctan(f/f_c)।',
        bn: 'R = ১ / (২π f_c C), H(jω) = ১ / [১ + j(f/f_c)], |H|_dB = ২০ log10 |H|, ∠H = -arctan(f/f_c)।'
      },
      substitution: {
        en: '(a) R = 1 / (2π · 20000 · 10 × 10^-9) = 1 / (1.2566 × 10^-3) = 795.8 Ω ≈ 796 Ω (nearest standard 1% resistor: 806 Ω).\n(b) H(jω) = 1 / [1 + j(ω / 125,664)].\n(c) At f = 20 kHz (f / f_c = 1):\n|H| = 1 / sqrt(1 + 1^2) = 1 / √2 = 0.7071.\n|H|_{dB} = 20 log10(0.7071) = -3.01 dB.\n(d) At f = 200 kHz (f / f_c = 10):\n|H| = 1 / sqrt(1 + 10^2) = 1 / sqrt(101) = 1 / 10.05 = 0.0995.\n|H|_{dB} = 20 log10(0.0995) = -20.04 dB.\n(e) At f = 200 kHz:\n∠H = -arctan(10) = -84.29°.',
        hi: '(a) R = 1 / (2π × 20000 × 10^-8) = 795.8 Ω।\n(b) H(jω) = 1 / [1 + j(f / 20 kHz)]।\n(c) 20 kHz पर: |H|_dB = 20 log10(1/√2) = -3.01 dB।\n(d) 200 kHz पर (1 दशक ऊपर): |H|_dB = 20 log10(1/√101) = -20.04 dB।\n(e) कला कोण = -arctan(10) = -84.29°।',
        bn: '(ক) R = ১ / (২π × ২০০০০ × ১০^-৮) = ৭৯৫.৮ Ω।\n(খ) H(jω) = ১ / [১ + j(f / ২০ kHz)]।\n(গ) ২০ kHz এ: |H|_dB = ২০ log10(১/√২) = -৩.০১ dB।\n(ঘ) ২০০ kHz এ: |H|_dB = ২০ log10(১/√১০১) = -২০.০৪ dB।\n(ঙ) ফেজ কোণ = -arctan(১০) = -৮৪.২৯°।'
      },
      calculation: {
        en: 'Notice that from 20 kHz (-3 dB) to 200 kHz (-20 dB), the gain drops by 17 dB. Above 200 kHz, the response follows the exact -20 dB/decade asymptotic slope.',
        hi: '20 kHz से 200 kHz तक गेन लगभग 17 dB घटता है, और आगे -20 dB/decade की ढलान पर चलता है।',
        bn: '২০ kHz থেকে ২০০ kHz পর্যন্ত গেইন প্রায় ১৭ dB কমে এবং পরবর্তীতে -২০ dB/decade ঢালে অগ্রসর হয়।'
      },
      finalAnswer: {
        en: 'R = 796 Ω; H(jω) = 1 / [1 + j(f / 20 kHz)]; at 20 kHz: -3.01 dB; at 200 kHz: -20.04 dB and -84.29° phase',
        hi: 'R = 796 Ω; H(jω) = 1 / [1 + j(f / 20 kHz)]; 20 kHz पर: -3.01 dB; 200 kHz पर: -20.04 dB एवं -84.29°',
        bn: 'R = ৭৯৬ Ω; H(jω) = ১ / [১ + j(f / ২০ kHz)]; ২০ kHz এ: -৩.০১ dB; ২০০ kHz এ: -২০.০৪ dB ও -৮৪.২৯°'
      }
    },
    {
      id: 'ex-ch12-l06-02',
      problem: {
        en: 'A series RLC band-pass filter has R = 20 Ω, L = 5 mH, and C = 0.2 μF. The output voltage is taken across the resistor. Calculate: (a) the resonant center frequency f_0 in Hz, (b) the quality factor Q, (c) the bandwidth BW in Hz, and (d) the half-power cutoff frequencies f_1 and f_2.',
        hi: 'एक श्रेणी RLC बैंड-पास फिल्टर में R = 20 Ω, L = 5 mH, और C = 0.2 μF है। आउटपुट प्रतिरोधक पर लिया गया है। ज्ञात कीजिए: (a) अनुनादी केंद्र आवृत्ति f_0, (b) क्वालिटी फैक्टर Q, (c) बैंडविड्थ BW, एवं (d) अर्ध-शक्ति कटऑफ आवृत्तियाँ f_1 एवं f_2।',
        bn: 'একটি শ্রেণি RLC ব্যান্ড-পাস ফিল্টারে R = ২০ Ω, L = ৫ mH এবং C = ০.২ μF। রোধকের আড়াআড়ি আউটপুট নেওয়া হয়েছে। নির্ণয় করুন: (ক) কেন্দ্র কম্পাঙ্ক f_0, (খ) কোয়ালিটি ফ্যাক্টর Q, (গ) ব্যান্ডউইথ BW এবং (ঘ) অর্ধ-ক্ষমতা কাট-অফ কম্পাঙ্ক f_1 ও f_2।'
      },
      formula: {
        en: 'ω_0 = 1 / sqrt(LC), f_0 = ω_0 / (2π).\nQ = (ω_0 L) / R.\nBW_{Hz} = f_0 / Q = R / (2πL).\nf_{1,2} = f_0 sqrt[1 + (1 / (2Q))^2] ∓ (BW / 2) ≈ f_0 ∓ (BW / 2) for Q ≥ 5.',
        hi: 'ω_0 = 1 / sqrt(LC), Q = ω_0 L / R, BW = f_0 / Q, f_{1,2} ≈ f_0 ∓ BW/2।',
        bn: 'ω_0 = ১ / রুট(LC), Q = ω_0 L / R, BW = f_0 / Q, f_{1,2} ≈ f_0 ∓ BW/২।'
      },
      substitution: {
        en: '(a) ω_0 = 1 / sqrt(5 × 10^-3 · 0.2 × 10^-6) = 1 / sqrt(10^-9) = 1 / (3.1623 × 10^-5) = 31,623 rad/s.\nf_0 = 31,623 / (2π) = 5,033 Hz = 5.033 kHz.\n(b) Q = (ω_0 L) / R = (31,623 · 5 × 10^-3) / 20 = 158.11 / 20 = 7.906 ≈ 7.91.\n(c) Bandwidth in Hz:\nBW_{Hz} = f_0 / Q = 5,033 / 7.906 = 636.6 Hz.\nAlternatively: BW_{Hz} = R / (2πL) = 20 / (2π · 0.005) = 20 / 0.031416 = 636.6 Hz.\n(d) Half-power frequencies (since Q = 7.91 > 5, narrow-band approximation holds):\nf_1 ≈ f_0 - BW/2 = 5,033 - (636.6 / 2) = 5,033 - 318.3 = 4,714.7 Hz ≈ 4.715 kHz.\nf_2 ≈ f_0 + BW/2 = 5,033 + 318.3 = 5,351.3 Hz ≈ 5.351 kHz.\nExact formula check: sqrt(f_1 · f_2) = sqrt(4714.7 · 5351.3) = 5023 Hz ≈ 5033 Hz.',
        hi: '(a) ω_0 = 31,623 rad/s ⇒ f_0 = 5,033 Hz = 5.033 kHz।\n(b) Q = (31623 × 0.005) / 20 = 7.91।\n(c) BW = 5033 / 7.91 = 636.6 Hz।\n(d) f_1 = 5033 - 318.3 = 4,714.7 Hz (4.715 kHz)।\nf_2 = 5033 + 318.3 = 5,351.3 Hz (5.351 kHz)।',
        bn: '(ক) ω_0 = ৩১,৬২৩ rad/s ⇒ f_0 = ৫,০৩৩ Hz = ৫.০৩৩ kHz।\n(খ) Q = (৩১,৬২৩ × ০.০০৫) / ২০ = ৭.৯১।\n(গ) BW = ৫,০৩৩ / ৭.৯১ = ৬৩৬.৬ Hz।\n(ঘ) f_1 = ৫,০৩৩ - ৩১৮.৩ = ৪,৭১৪.৭ Hz (৪.৭১৫ kHz)।\nf_2 = ৫,০৩৩ + ৩১৮.৩ = ৫,৩৫১.৩ Hz (৫.৩৫১ kHz)।'
      },
      calculation: {
        en: 'The filter offers sharp selectivity (Q = 7.91) centered tightly at 5.03 kHz with a narrow passband spanning 4.71 kHz to 5.35 kHz.',
        hi: 'यह फिल्टर 5.03 kHz पर तीव्र चयनात्मकता (Q = 7.91) प्रदान करता है।',
        bn: 'ফিল্টারটি ৫.০৩ kHz এ তীক্ষ্ণ নির্বাচনী গুণাগুণ (Q = ৭.৯১) প্রদর্শন করে।'
      },
      finalAnswer: {
        en: 'f_0 = 5.033 kHz; Q = 7.91; BW = 636.6 Hz; f_1 = 4.715 kHz; f_2 = 5.351 kHz',
        hi: 'f_0 = 5.033 kHz; Q = 7.91; BW = 636.6 Hz; f_1 = 4.715 kHz; f_2 = 5.351 kHz',
        bn: 'f_0 = ৫.০৩৩ kHz; Q = ৭.৯১; BW = ৬৩৬.৬ Hz; f_1 = ৪.৭১৫ kHz; f_2 = ৫.৩৫১ kHz'
      },
      }
  ],
  practicalApplications: {
    en: [
      'Loudspeaker Crossover Networks: High-fidelity audio enclosures split the audio spectrum using an LC low-pass filter to send low frequencies (< 2.5 kHz) to the heavy woofer, and an LC high-pass filter to send treble frequencies (> 2.5 kHz) to the delicate tweeter.',
      'Power Supply DC Rectifier Smoothing Filters: AC-to-DC converters use low-pass LC choke-input or capacitor-input pi filters with cutoff frequencies far below 100/120 Hz to eliminate rectifier ripple voltage and deliver smooth DC to microelectronics.'
    ],
    hi: [
      'लाउडस्पीकर क्रॉसओवर नेटवर्क: हाई-फाई स्पीकर बॉक्स ध्वनि आवृत्तियों को अलग करने के लिए क्रॉसओवर फिल्टर का उपयोग करते हैं: कम आवृत्तियाँ वूफर को और उच्च आवृत्तियाँ ट्वीटर को भेजी जाती हैं।',
      'पावर सप्लाई डीसी रेक्टिफायर स्मूथिंग फिल्टर: एसी-से-डीसी कन्वर्टर 100/120 Hz रिपल वोल्टेज को खत्म करने और माइक्रोइलेक्ट्रॉनिक को स्थिर डीसी प्रदान करने के लिए लो-पास फिल्टर का उपयोग करते हैं।'
    ],
    bn: [
      'লাউডস্পিকার ক্রসওভার নেটওয়ার্ক: হাই-ফাই স্পিকার বক্সে ক্রসওভার ফিল্টার ব্যবহার করে নিম্ন কম্পাঙ্ক উফারে এবং উচ্চ কম্পাঙ্ক টুইটারে পাঠিয়ে নির্ভুল শব্দ তৈরি করা হয়।',
      'পাওয়ার সাপ্লাই ডিসি রেকটিফায়ার ফিল্টার: এসি-টু-ডিসি কনভার্টারে লো-পাস পাই ফিল্টার ব্যবহার করে ১০০/১২০ Hz রিপল দূর করে স্থিতিশীল ডিসি সরবরাহ নিশ্চিত করা হয়।'
    ]
  },
  importantPoints: {
    en: [
      'At the half-power cutoff frequency f_c, the voltage gain is exactly 1/√2 (-3.01 dB) and the phase shift of a first-order filter is exactly ±45°.',
      'Each pole in a filter transfer function adds -20 dB/decade to the high-frequency roll-off slope (1st-order: -20 dB/dec; 2nd-order: -40 dB/dec; 4th-order: -80 dB/dec).'
    ],
    hi: [
      'अर्ध-शक्ति कटऑफ आवृत्ति f_c पर वोल्टेज गेन ठीक 1/√2 (-3.01 dB) होता है और प्रथम-कोटि फिल्टर का कलांतर ठीक ±45° होता है।',
      'फिल्टर ट्रांसफर फंक्शन में प्रत्येक पोल उच्च-आवृत्ति रोल-ऑफ ढलान में -20 dB/decade जोड़ता है (प्रथम-कोटि: -20 dB/dec; द्वितीय-कोटि: -40 dB/dec)।'
    ],
    bn: [
      'কাট-অফ কম্পাঙ্ক f_c তে ভোল্টেজ গেইন ঠিক ১/√২ (-৩.০১ dB) এবং প্রথম-ক্রমের ফিল্টারের ফেজ শিফট ঠিক ±৪৫° হয়।',
      'ফিল্টারের প্রতিটি পোল উচ্চ-কম্পাঙ্কের রোল-অফ ঢালে -২০ dB/decade যুক্ত করে (১ম-ক্রম: -২০ dB/dec; ২য়-ক্রম: -৪০ dB/dec)।'
    ]
  },
  commonMistakes: {
    en: [
      'Mistake: Confusing angular frequency ω (in rad/s) with cyclic frequency f (in Hz), leading to a factor of 2π error in cutoff calculations. Correction: Always remember: ω_c = 1/(RC) is in rad/s. To find f_c in Hz, you must divide by 2π: f_c = 1 / (2πRC).'
    ],
    hi: [
      'त्रुटि: कोणीय आवृत्ति ω (rad/s) और चक्रीय आवृत्ति f (Hz) में भ्रमित होना, जिससे 2π का गुणन त्रुटि हो जाती है। सुधार: हमेशा याद रखें: ω_c = 1/(RC) rad/s में होता है। Hz में f_c के लिए 2π से भाग दें: f_c = 1 / (2πRC)।'
    ],
    bn: [
      'ভুল: কৌণিক কম্পাঙ্ক ω (rad/s) এবং সাধারণ কম্পাঙ্ক f (Hz) গুলিয়ে ফেলে ২π এর ভুল করা। সংশোধন: সর্বদা মনে রাখুন: ω_c = ১/(RC) rad/s এককে। Hz এ f_c পেতে ২π দিয়ে ভাগ করতে হবে: f_c = ১ / (২πRC)।'
    ]
  },
  keyTakeaways: {
    en: [
      'Bode plots provide a complete logarithmic visualization of filter magnitude and phase. First-order RC filters provide -20 dB/dec attenuation above f_c = 1/(2πRC).'
    ],
    hi: [
      'बोडे प्लॉट फिल्टर के परिमाण और कला का संपूर्ण लघुगणकीय दृश्य प्रदान करते हैं। प्रथम-कोटि RC फिल्टर f_c = 1/(2πRC) के ऊपर -20 dB/dec का क्षीणन देते हैं।'
    ],
    bn: [
      'বোড প্লট ফিল্টারের বিস্তার ও ফেজের স্পষ্ট ধারণা দেয়। প্রথম-ক্রমের RC ফিল্টার f_c = ১/(২πRC) এর উপরে -২০ dB/dec ক্ষয় প্রদান করে।'
    ]
  },
  practiceQuestions: [
    {
      id: 'pq-ch12-l06-01',
      question: {
        en: 'Calculate the cutoff frequency f_c of a first-order RL low-pass filter having R = 100 Ω and L = 25 mH.',
        hi: 'R = 100 Ω और L = 25 mH वाले प्रथम-कोटि RL लो-पास फिल्टर की कटऑफ आवृत्ति f_c ज्ञात कीजिए।',
        bn: 'R = ১০০ Ω এবং L = ২৫ mH বিশিষ্ট প্রথম-ক্রমের RL লো-পাস ফিল্টারের কাট-অফ কম্পাঙ্ক f_c গণনা করুন।'
      },
      hint: {
        en: 'ω_c = R / L = 100 / 0.025 = 4000 rad/s. f_c = 4000 / (2π) = 636.6 Hz.',
        hi: 'ω_c = R / L = 4000 rad/s। f_c = 4000 / (2π) = 636.6 Hz।',
        bn: 'ω_c = R / L = ৪০০০ rad/s। f_c = ৪০০০ / (২π) = ৬৩৬.৬ Hz।'
      }
    },
    {
      id: 'pq-ch12-l06-02',
      question: {
        en: 'What is the attenuation in dB of a second-order low-pass filter at a frequency two decades above its cutoff frequency (f = 100 f_c)?',
        hi: 'एक द्वितीय-कोटि लो-पास फिल्टर का इसकी कटऑफ आवृत्ति से दो दशक ऊपर (f = 100 f_c) dB में क्षीणन क्या होगा?',
        bn: 'একটি দ্বিতীয়-ক্রমের লো-পাস ফিল্টারে কাট-অফ কম্পাঙ্কের দুই দশক উপরে (f = ১০০ f_c) dB তে ক্ষয় কত হবে?'
      },
      hint: {
        en: 'A 2nd-order filter rolls off at -40 dB/decade. Two decades corresponds to 2 × (-40 dB) = -80 dB attenuation.',
        hi: 'द्वितीय-कोटि फिल्टर -40 dB/decade से गिरता है। दो दशकों के लिए: 2 × (-40) = -80 dB।',
        bn: '২য়-ক্রমের ফিল্টারের ঢাল -৪০ dB/decade। দুই দশকে ক্ষয় হবে ২ × (-৪০) = -৮০ dB।'
      }
    }
  ],
  mcqs: [
    {
      id: 'mcq-ch12-l06-01',
      question: {
        en: 'What is the voltage gain |H(jω)| in decibels at the half-power cutoff frequency f_c of any first-order passive filter?',
        hi: 'किसी प्रथम-कोटि निष्क्रिय फिल्टर की अर्ध-शक्ति कटऑफ आवृत्ति f_c पर डेसिबल में वोल्टेज गेन |H(jω)| क्या होता है?',
        bn: 'যেকোনো প্রথম-ক্রমের প্যাসিভ ফিল্টারের কাট-অফ কম্পাঙ্ক f_c তে ডেসিবেলে ভোল্টেজ গেইন |H(jω)| কত হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: '0 dB', hi: '0 dB', bn: '০ dB' } },
        { id: 'opt-2', text: { en: '-3.01 dB', hi: '-3.01 dB', bn: '-৩.০১ dB' } },
        { id: 'opt-3', text: { en: '-6.02 dB', hi: '-6.02 dB', bn: '-৬.০২ dB' } },
        { id: 'opt-4', text: { en: '-20 dB', hi: '-20 dB', bn: '-২০ dB' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'At cutoff, |H| = 1/√2 ≈ 0.7071. In decibels: 20 log10(1/√2) = -3.01 dB (half power).',
        hi: 'कटऑफ पर |H| = 1/√2 होता है, जो 20 log10(1/√2) = -3.01 dB के बराबर है।',
        bn: 'কাট-অফে |H| = ১/√২ হয়, যা ডেসিবেলে ২০ log10(১/√২) = -৩.০১ dB।'
      }
    },
    {
      id: 'mcq-ch12-l06-02',
      question: {
        en: 'What is the high-frequency roll-off rate (asymptotic slope) of a single-pole (first-order) RC low-pass filter?',
        hi: 'एकल-पोल (प्रथम-कोटि) RC लो-पास फिल्टर की उच्च-आवृत्ति रोल-ऑफ दर क्या होती है?',
        bn: 'একক-পোল (প্রথম-ক্রম) RC লো-পাস ফিল্টারের উচ্চ-কম্পাঙ্কের রোল-অফ ঢাল কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '-6 dB/decade', hi: '-6 dB/decade', bn: '-৬ dB/decade' } },
        { id: 'opt-2', text: { en: '-12 dB/decade', hi: '-12 dB/decade', bn: '-১২ dB/decade' } },
        { id: 'opt-3', text: { en: '-20 dB/decade (-6 dB/octave)', hi: '-20 dB/decade (-6 dB/octave)', bn: '-২০ dB/decade (-৬ dB/octave)' } },
        { id: 'opt-4', text: { en: '-40 dB/decade', hi: '-40 dB/decade', bn: '-৪০ dB/decade' } }
      ],
      correctOptionId: 'opt-3',
      explanation: {
        en: 'A single real pole rolls off inversely with frequency (1/ω), which is -20 dB per decade (a 10x frequency increase decreases gain by a factor of 10 = -20 dB).',
        hi: 'एकल पोल आवृत्ति के व्युत्क्रमानुपाती (1/ω) होता है, जिससे -20 dB प्रति दशक की ढलान मिलती है।',
        bn: 'একক পোল কম্পাঙ্কের ব্যস্তানুপাতে পরিবর্তিত হয়ে প্রতি দশকে -২০ dB ঢাল তৈরি করে।'
      }
    },
    {
      id: 'mcq-ch12-l06-03',
      question: {
        en: 'What is the phase shift between output and input voltages at the cutoff frequency f_c of a first-order RC LOW-PASS filter?',
        hi: 'प्रथम-कोटि RC लो-पास फिल्टर की कटऑफ आवृत्ति f_c पर आउटपुट और इनपुट वोल्टेज के बीच कलांतर क्या होता है?',
        bn: 'প্রথম-ক্রমের RC লো-পাস ফিল্টারের কাট-অফ কম্পাঙ্ক f_c তে আউটপুট ও ইনপুট ভোল্টেজের মাঝে ফেজ পার্থক্য কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '0°', hi: '0°', bn: '০°' } },
        { id: 'opt-2', text: { en: '-45° (lagging)', hi: '-45° (पश्चगामी)', bn: '-৪৫° (ল্যাগিং)' } },
        { id: 'opt-3', text: { en: '+45° (leading)', hi: '+45° (अग्रगामी)', bn: '+৪৫° (লিডিং)' } },
        { id: 'opt-4', text: { en: '-90°', hi: '-90°', bn: '-৯০°' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'H(jω_c) = 1 / (1 + j1). Phase = 0° - arctan(1) = -45° (output lags input by 45°).',
        hi: 'H(jω_c) = 1 / (1 + j1) से कला कोण = -arctan(1) = -45° होता है।',
        bn: 'H(jω_c) = ১ / (১ + j১) থেকে ফেজ কোণ = -arctan(১) = -৪৫° পাওয়া যায়।'
      }
    },
    {
      id: 'mcq-ch12-l06-04',
      question: {
        en: 'In a series RLC band-pass filter with output taken across resistor R, what is the output voltage at the exact resonant frequency ω_0 = 1/√(LC)?',
        hi: 'प्रतिरोधक R पर आउटपुट वाले श्रेणी RLC बैंड-पास फिल्टर में अनुनादी आवृत्ति ω_0 पर आउटपुट वोल्टेज क्या होता है?',
        bn: 'রোধক R এর আড়াআড়ি আউটপুটযুক্ত শ্রেণি RLC ব্যান্ড-পাস ফিল্টারে ঠিক অনুরণন কম্পাঙ্কে আউটপুট ভোল্টেজ কত হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Zero', hi: 'शून्य', bn: 'শূন্য' } },
        { id: 'opt-2', text: { en: '0.707 V_in', hi: '0.707 V_in', bn: '০.৭০৭ V_in' } },
        { id: 'opt-3', text: { en: 'Equal to V_in (gain = 1 or 0 dB)', hi: 'V_in के बराबर (गेन = 1 या 0 dB)', bn: 'V_in এর সমান (গেইন = ১ বা ০ dB)' } },
        { id: 'opt-4', text: { en: 'Infinite', hi: 'अनंत', bn: 'অসীম' } }
      ],
      correctOptionId: 'opt-3',
      explanation: {
        en: 'At resonance, inductor and capacitor reactances cancel exactly (jωL + 1/jωC = 0). The entire input voltage drops across R, so V_out = V_in (0 dB attenuation).',
        hi: 'अनुनाद पर प्रेरक और संधारित्र के प्रतिघात एक-दूसरे को रद्द कर देते हैं, जिससे पूरा इनपुट R पर मिलता है (V_out = V_in)।',
        bn: 'অনুরণনে আবেশক ও ধারকের প্রতিঘাত পরস্পরকে নাকচ করে দেয়, ফলে সম্পূর্ণ ইনপুট ভোল্টেজ R এ পাওয়া যায় (V_out = V_in)।'
      }
    },
    {
      id: 'mcq-ch12-l06-05',
      question: {
        en: 'How does doubling the quality factor Q of a band-pass filter affect its fractional bandwidth BW?',
        hi: 'बैंड-पास फिल्टर के क्वालिटी फैक्टर Q को दोगुना करने से इसकी बैंडविड्थ BW पर क्या प्रभाव पड़ता है?',
        bn: 'ব্যান্ড-পাস ফিল্টারের কোয়ালিটি ফ্যাক্টর Q দ্বিগুণ করলে এর ব্যান্ডউইথ BW কীভাবে পরিবর্তিত হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Bandwidth doubles', hi: 'बैंडविड्थ दोगुनी हो जाती है', bn: 'ব্যান্ডউইথ দ্বিগুণ হয়' } },
        { id: 'opt-2', text: { en: 'Bandwidth is halved (filter becomes narrower/more selective)', hi: 'बैंडविड्थ आधी हो जाती है (अधिक चयनात्मक)', bn: 'ব্যান্ডউইথ অর্ধেক হয় (বেশি সিলেক্টিভ)' } },
        { id: 'opt-3', text: { en: 'Bandwidth quadruples', hi: 'बैंडविड्थ चार गुना हो जाती है', bn: 'ব্যান্ডউইথ চারগুণ হয়' } },
        { id: 'opt-4', text: { en: 'Bandwidth is unchanged', hi: 'बैंडविड्थ अपरिवर्तित रहती है', bn: 'ব্যান্ডউইথ অপরিবর্তিত থাকে' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'Since BW = ω_0 / Q, bandwidth is inversely proportional to Q. Doubling Q halves the bandwidth, making the passband sharper.',
        hi: 'BW = ω_0 / Q होने के कारण Q दोगुना करने से बैंडविड्थ आधी हो जाती है।',
        bn: 'যেহেতু BW = ω_0 / Q, তাই Q দ্বিগুণ করলে ব্যান্ডউইথ অর্ধেক হয়ে যায়।'
      }
    },
    {
      id: 'mcq-ch12-l06-06',
      question: {
        en: 'In an asymptotic Bode magnitude plot, what is the discrepancy (error) between the straight-line asymptotes and the true curve at the corner frequency ω_c?',
        hi: 'असममित बोडे परिमाण आलेख में कॉर्नर आवृत्ति ω_c पर सीधी असममित रेखा और वास्तविक वक्र के बीच कितना अंतर (त्रुटि) होता है?',
        bn: 'বোড ম্যাগনিটিউড প্লটে কাট-অফ কম্পাঙ্ক ω_c তে সরলরৈখিক অ্যাসিম্পটোট ও প্রকৃত বক্ররেখার মধ্যে পার্থক্য (ত্রুটি) কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '0 dB (no error)', hi: '0 dB (कोई त्रुटि नहीं)', bn: '০ dB (কোনো ভুল নেই)' } },
        { id: 'opt-2', text: { en: '3.01 dB', hi: '3.01 dB', bn: '৩.০১ dB' } },
        { id: 'opt-3', text: { en: '6.02 dB', hi: '6.02 dB', bn: '৬.০২ dB' } },
        { id: 'opt-4', text: { en: '20 dB', hi: '20 dB', bn: '২০ dB' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'The low-frequency asymptote is 0 dB and high-frequency asymptote is 0 dB at ω = ω_c. The true response is -3.01 dB, yielding an exact maximum asymptotic error of 3.01 dB.',
        hi: 'कॉर्नर आवृत्ति पर असममित मान 0 dB होता है जबकि वास्तविक मान -3.01 dB होता है, अतः त्रुटि ठीक 3.01 dB है।',
        bn: 'কাট-অফে অ্যাসিম্পটোটের মান ০ dB এবং প্রকৃত মান -৩.০১ dB, তাই সর্বোচ্চ পার্থক্য ৩.০১ dB।'
      }
    },
    {
      id: 'mcq-ch12-l06-07',
      question: {
        en: 'Which filter configuration eliminates a single specific interference frequency (such as 50 Hz power-line hum) while passing all other frequencies?',
        hi: 'कौन सा फिल्टर विन्यास अन्य सभी आवृत्तियों को पारित करते हुए एकल विशिष्ट हस्तक्षेप आवृत्ति (जैसे 50 Hz पावर हम) को समाप्त करता है?',
        bn: 'কোন ফিল্টারটি অন্যান্য সব কম্পাঙ্ক পার করে কেবল একটি নির্দিষ্ট অনাকাঙ্ক্ষিত কম্পাঙ্ককে (যেমন ৫০ Hz নয়েজ) আটকে দেয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Low-Pass Filter', hi: 'लो-पास फिल्टर', bn: 'লো-পাস ফিল্টার' } },
        { id: 'opt-2', text: { en: 'High-Pass Filter', hi: 'हाई-पास फिल्टर', bn: 'হাই-পাস ফিল্টার' } },
        { id: 'opt-3', text: { en: 'Band-Stop / Notch Filter', hi: 'बैंड-स्टॉप / नॉच फिल्टर', bn: 'ব্যান্ড-স্টপ / নচ ফিল্টার' } },
        { id: 'opt-4', text: { en: 'All-Pass Filter', hi: 'ऑल-पास फिल्टर', bn: 'অল-পাস ফিল্টার' } }
      ],
      correctOptionId: 'opt-3',
      explanation: {
        en: 'A Band-Stop (or Notch) filter introduces an infinite attenuation dip at its resonant center frequency ω_0 to reject unwanted single-frequency hum.',
        hi: 'बैंड-स्टॉप (नॉच) फिल्टर अपनी अनुनादी आवृत्ति पर तीव्र क्षीणन उत्पन्न करके अवांछित आवृत्ति को रोकता है।',
        bn: 'ব্যান্ড-স্টপ (নচ) ফিল্টার নির্দিষ্ট রেজোন্যান্ট কম্পাঙ্কে তীব্র বাধা সৃষ্টি করে অনাকাঙ্ক্ষিত নয়েজ দূর করে।'
      }
    },
    {
      id: 'mcq-ch12-l06-08',
      question: {
        en: 'A second-order RLC filter has an asymptotic high-frequency roll-off rate of:',
        hi: 'एक द्वितीय-कोटि RLC फिल्टर की असममित उच्च-आवृत्ति रोल-ऑफ दर होती है:',
        bn: 'একটি দ্বিতীয়-ক্রমের RLC ফিল্টারের অ্যাসিম্পটোটিক উচ্চ-কম্পাঙ্ক রোল-অফ ঢাল কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '-10 dB/decade', hi: '-10 dB/decade', bn: '-১০ dB/decade' } },
        { id: 'opt-2', text: { en: '-20 dB/decade', hi: '-20 dB/decade', bn: '-২০ dB/decade' } },
        { id: 'opt-3', text: { en: '-40 dB/decade (-12 dB/octave)', hi: '-40 dB/decade (-12 dB/octave)', bn: '-৪০ dB/decade (-১২ dB/octave)' } },
        { id: 'opt-4', text: { en: '-80 dB/decade', hi: '-80 dB/decade', bn: '-৮০ dB/decade' } }
      ],
      correctOptionId: 'opt-3',
      explanation: {
        en: 'With two reactive elements (L and C), the denominator transfer function contains (jω)^2 = -ω^2. Gain drops proportionally to 1/ω^2, which corresponds to -40 dB/decade (-12 dB/octave).',
        hi: 'दो ऊर्जा संग्राहक तत्वों (L एवं C) के कारण हर में ω^2 आता है, जिससे -40 dB/decade की तीव्र ढलान मिलती है।',
        bn: 'দুটি শক্তি সঞ্চয়ী উপাদান (L ও C) থাকার কারণে হরে ω^২ আসে, যা -৪০ dB/decade রোল-অফ প্রদান করে।'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-ch12-l06-01',
      title: {
        en: 'Passive Filter Topologies and Asymptotic Bode Responses',
        hi: 'परिपथ योजनाबद्ध आरेख',
        bn: 'বর্তনী স্কিম্যাটিক চিত্র'
      },
      caption: {
        en: 'Passive Filter Topologies and Asymptotic Bode Responses',
        hi: 'निष्क्रिय फिल्टर विन्यास एवं असममित बोडे अनुक्रियाएँ',
        bn: 'প্যাসিভ ফিল্টার বর্তনী ও বোড প্রতিক্রিয়া'
      },
      svgType: 'circuit-ch12-bode-plots-frequency-response'
    }
  ]
};
