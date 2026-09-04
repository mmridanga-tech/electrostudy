import { Lesson } from '../types';

export const LESSON_NON_SINUSOIDAL_HARMONICS: Lesson = {
  id: 'lsn-ch12-non-sinusoidal-harmonics',
  topicId: 'tp-reactance',
  chapterId: 'ch-ac-circuits',
  order: 8,
  title: {
    en: 'Non-Sinusoidal AC Waveforms & Harmonics',
    hi: 'गैर-ज्यावक्रीय एसी तरंगरूप एवं हार्मोनिक्स',
    bn: 'নন-সাইনুসয়েডাল এসি তরঙ্গরূপ ও হারমোনিক্স'
  },
  description: {
    en: 'Analyze non-sinusoidal AC periodic waveforms using Fourier series decomposition into fundamental and harmonic components. Master the calculation of true RMS values, harmonic impedances, power expressions, triplen harmonic accumulation in neutral conductors, and transformer core/stray-load heating effects caused by industrial non-linear loads.',
    hi: 'फूरियर श्रेणी अपघटन का उपयोग करके गैर-ज्यावक्रीय आवर्ती एसी तरंगरूपों का मौलिक एवं हार्मोनिक घटकों में विश्लेषण करें। ट्रू आरएमएस मान, हार्मोनिक प्रतिबाधा, शक्ति समीकरण, न्यूट्रल चालकों में ट्रिपलेन हार्मोनिक संचय, एवं गैर-रैखिक भारों के कारण ट्रांसफार्मर कोर और स्ट्रे-लोड हीटिंग प्रभावों की गणना में महारत हासिल करें।',
    bn: 'ফুরিয়ার রূপান্তরের মাধ্যমে নন-সাইনুসয়েডাল পর্যাবৃত্ত এসি তরঙ্গরূপকে মৌলিক ও হারমোনিক উপাংশে বিশ্লেষণ করুন। ট্রু আরএমএস মান, হারমোনিক প্রতিবাধা, ক্ষমতা সমীকরণ, নিউট্রাল কন্ডাক্টরে ট্রিপলেন হারমোনিক সঞ্চয়ন এবং নন-লিনিয়ার লোডের কারণে ট্রান্সফরমার অতিরিক্ত গরম হওয়ার প্রভাব গণনা শিখুন।'
  },
  estimatedMinutes: 45,
  easyExplanation: {
    en: 'In an ideal power grid, voltage and current are pure sine waves oscillating at 50 Hz or 60 Hz. However, modern electronics—such as laptop chargers, LED drivers, variable-frequency drives (VFDs), and rectifiers—draw current in sharp, abrupt pulses rather than smooth waves. According to Fourier theorem, any distorted repeating wave is mathematically identical to a pure fundamental sine wave added together with higher-frequency sine waves called "harmonics" (integer multiples of the fundamental: 3rd at 150 Hz, 5th at 250 Hz, etc.). These harmonics distort the electrical network, increase heating in transformers and motors, and cause massive currents to circulate in neutral wires.',
    hi: 'एक आदर्श बिजली ग्रिड में वोल्टेज और धारा 50 Hz या 60 Hz पर शुद्ध ज्यावक्रीय (sine) तरंगें होती हैं। लेकिन कंप्यूटर, एलईडी लाइट्स, और वीएफडी (VFDs) जैसे आधुनिक इलेक्ट्रॉनिक उपकरण धारा को एक निरंतर तरंग के बजाय झटकेदार दालों (pulses) में खींचते हैं। फूरियर प्रमेय के अनुसार, किसी भी विकृत आवर्ती तरंग को एक मौलिक ज्यावक्रीय तरंग और उसके पूर्णांक गुणज आवृत्तियों वाली उच्च तरंगों (हार्मोनिक्स: जैसे तीसरी 150 Hz पर, पाँचवीं 250 Hz पर) के योग के रूप में दर्शाया जा सकता है। ये हार्मोनिक्स ट्रांसफार्मर को अत्यधिक गर्म करते हैं और न्यूट्रल तारों में खतरनाक धाराएं प्रवाहित करते हैं।',
    bn: 'একটি আদর্শ বিদ্যুৎ গ্রিডে ভোল্টেজ ও কারেন্ট ৫০ হার্জে বিশুদ্ধ সাইন ওয়েভ হিসেবে প্রবাহিত হয়। কিন্তু কম্পিউটার, এলইডি বাল্ব ও মোটরের ভিএফডি (VFD) ড্রাইভের মতো আধুনিক নন-লিনিয়ার লোডগুলো একটানা কারেন্টের বদলে হঠাৎ হঠাৎ স্পন্দনে বিদ্যুৎ টানে। ফুরিয়ার নীতি অনুসারে, যেকোনো বিকৃত পর্যায়বৃত্ত তরঙ্গকে একটি মূল কম্পাঙ্কের সাইন ওয়েভ এবং তার গুণিতক কম্পাঙ্কের উচ্চতর তরঙ্গ বা "হারমোনিক্স" (যেমন ৩য় হারমোনিক ১৫০ Hz, ৫ম হারমোনিক ২৫০ Hz) এর সমষ্টি হিসেবে প্রকাশ করা যায়। এই হারমোনিক্সের কারণে ট্রান্সফরমার অতিরিক্ত গরম হয় এবং নিউট্রাল তারে অনাকাঙ্ক্ষিত ভারী কারেন্ট প্রবাহিত হয়।'
  },
  detailedExplanation: {
    en: '1. Fourier Series Representation of Non-Sinusoidal Periodic Waveforms:\nAny single-valued periodic function f(t) satisfying Dirichlet conditions with period T = 2π/ω can be expanded into an infinite series of sinusoids:\nf(t) = a_0 + Σ [a_n cos(nωt) + b_n sin(nωt)] = c_0 + Σ c_n sin(nωt + θ_n)\nwhere:\n- c_0 = a_0 is the DC component (average value over one cycle),\n- c_1 sin(ωt + θ_1) is the FUNDAMENTAL component (n = 1) oscillating at system base frequency (e.g., 50 Hz),\n- c_n sin(nωt + θ_n) represents the n-th HARMONIC component oscillating at frequency f_n = n · f_1 with peak amplitude c_n = √(a_n² + b_n²).\n\n2. Waveform Symmetries and Harmonic Content:\n- Even Symmetry (f(t) = f(-t)): Contains only cosine terms (b_n = 0). Mirror symmetry about the vertical axis.\n- Odd Symmetry (f(t) = -f(-t)): Contains only sine terms (a_n = 0, a_0 = 0). Inversion symmetry through origin.\n- Half-Wave Symmetry (f(t) = -f(t + T/2)): Typical of AC power waveforms where positive and negative half-cycles are mirror images. ALL EVEN HARMONICS VANISH (a_2k = b_2k = 0). The waveform contains ONLY ODD HARMONICS (1st, 3rd, 5th, 7th, 9th, ...).\n\n3. True RMS Value of a Distorted Periodic Waveform:\nThe root-mean-square value of a multi-frequency periodic signal is obtained by integrating the square of the instantaneous value over a period:\nV_rms = √[ (1/T) ∫ v²(t) dt ] = √[ V_dc² + V_{1,rms}² + V_{2,rms}² + V_{3,rms}² + ... + V_{n,rms}² ]\nFor peak amplitudes V_{n,max}: V_{n,rms} = V_{n,max} / √2, hence:\nV_rms = √[ V_0² + (1/2) Σ V_{n,max}² ]\nSimilarly for current: I_rms = √[ I_0² + Σ I_{n,rms}² ].\nNote: Ordinary average-responding multimeters will report erroneous readings; only TRUE RMS meters with wide bandwidth measure this accurately.\n\n4. Frequency-Dependent Branch Impedance to Harmonics:\nIn a circuit containing R, L, and C, each harmonic experiences a completely different impedance because reactance is frequency-dependent:\n- Resistance: R_n = R (neglecting skin/proximity effect at low harmonics)\n- Inductive Reactance: X_{L,n} = n · ωL = n · X_{L,1} (increases linearly with harmonic order n)\n- Capacitive Reactance: X_{C,n} = 1 / (nωC) = X_{C,1} / n (decreases inversely with harmonic order n)\nComplex impedance for n-th harmonic: Z_n = R + j [nωL - 1/(nωC)] = |Z_n| ∠φ_n.\nHarmonic current phasor: I_n = V_n / Z_n.\nCrucial insight: Inductors attenuate high-frequency current harmonics, while capacitors AMPLIFY high-frequency current harmonics!\n\n5. Non-Sinusoidal Active, Reactive & Apparent Power:\nAverage active power is transmitted ONLY by interactions between voltage and current components of the SAME frequency:\nP = V_0 I_0 + Σ [V_{n,rms} · I_{n,rms} · cos(θ_n - φ_n)] = P_0 + P_1 + P_2 + ... + P_n\nCross-frequency terms (e.g., V_1 · I_3) integrate to exactly zero net active work over a fundamental period.\n\n6. Triplen Harmonics in Three-Phase Four-Wire Systems:\nTriplen harmonics are odd multiples of the third harmonic (order n = 3, 9, 15, 21, ...). In a balanced 3-phase system:\n- Fundamental phase displacement: 120° apart (positive sequence).\n- 3rd harmonic phase displacement: 3 × 120° = 360° = 0° (ZERO SEQUENCE).\nBecause they are completely in phase with each other, triplen harmonic currents do NOT cancel at the neutral star-point. Instead, they ADD ARITHMETICALLY in the neutral conductor:\nI_N(t) = i_a(t) + i_b(t) + i_c(t) ≈ 3 · I_{3,rms} (for dominant 3rd harmonic).\nIn office buildings and data centers with dense single-phase SMPS loads, neutral current frequently reaches 150% to 175% of phase current, leading to overheated neutrals and building electrical fires.\n\n7. Transformer Heating Implications:\nNon-sinusoidal currents produce two major excess loss mechanisms in transformers:\n- Winding Eddy Current Losses: Scale proportionally to the square of frequency and current (P_EC ∝ Σ I_n² · n²).\n- Stray Load Losses in structural clamps and tank walls: Scale as P_OSL ∝ Σ I_n² · n^0.8.\nStandard distribution transformers can rapidly suffer insulation breakdown and thermal runaway under non-linear loading unless derated or designed as K-factor rated transformers.',
    hi: '1. फूरियर श्रेणी: किसी भी आवर्ती गैर-ज्यावक्रीय तरंग f(t) को मौलिक और उच्च हार्मोनिक्स के योग के रूप में लिखा जा सकता है: f(t) = c_0 + Σ c_n sin(nωt + θ_n)।\n2. सममिति: अर्ध-तरंग सममिति (Half-wave symmetry) में सभी सम हार्मोनिक्स (even harmonics) शून्य होते हैं, केवल विषम हार्मोनिक्स (1, 3, 5, 7...) उपस्थित रहते हैं।\n3. ट्रू आरएमएस (True RMS): V_rms = √[ V_dc² + V_{1,rms}² + V_{2,rms}² + ... + V_{n,rms}² ]।\n4. आवृत्ति-निर्भर प्रतिबाधा: n-वें हार्मोनिक के लिए X_{L,n} = n·ωL और X_{C,n} = 1/(n·ωC)। प्रेरक उच्च आवृत्तियों को रोकता है जबकि संधारित्र उन्हें आसानी से गुजरने देता है।\n5. शक्ति: कुल सक्रिय शक्ति केवल समान आवृत्ति वाले वोल्टेज और करंट घटकों के गुणनफल का योग होती है: P = Σ V_{n,rms} · I_{n,rms} · cos(φ_n)। विभिन्न आवृत्तियों के बीच औसत शक्ति शून्य होती है।\n6. ट्रिपलेन हार्मोनिक्स (3, 9, 15...): 3-फेज 4-तार प्रणाली में ट्रिपलेन हार्मोनिक्स एक ही कला (phase) में होते हैं, अतः वे न्यूट्रल तार में निरस्त होने के बजाय जुड़ जाते हैं: I_N ≈ 3 · I_3।\n7. ट्रांसफार्मर हीटिंग: भंवर धारा हानियाँ हार्मोनिक कोटि के वर्ग (n²) के समानुपाती होती हैं, जिससे कोर एवं वाइंडिंग अत्यधिक गर्म हो जाती हैं।',
    bn: '১. ফুরিয়ার রূপান্তর: যেকোনো নন-সাইনুসয়েডাল পর্যাবৃত্ত তরঙ্গকে মৌলিক কম্পাঙ্ক ও তার গুণিতক হারমোনিক উপাংশে প্রকাশ করা যায়: f(t) = c_0 + Σ c_n sin(nωt + θ_n)।\n২. সিমেট্রি: হাফ-ওয়েভ সিমেট্রি থাকলে সমস্ত ইভেন হারমোনিক বিলুপ্ত হয়, শুধুমাত্র অড হারমোনিক (১ম, ৩য়, ৫ম, ৭ম...) বজায় থাকে।\n৩. ট্রু আরএমএস (True RMS): V_rms = √[ V_dc² + V_{1,rms}² + V_{2,rms}² + ... + V_{n,rms}² ]।\n৪. কম্পাঙ্ক-নির্ভর রিঅ্যাক্ট্যান্স: n-তম হারমোনিকের জন্য X_{L,n} = n·ωL এবং X_{C,n} = ১/(n·ωC)।\n৫. পাওয়ার: মোট সক্রিয় ক্ষমতা শুধুমাত্র একই কম্পাঙ্কের ভোল্টেজ ও কারেন্টের গুণফলের যোগফল: P = Σ V_{n,rms} · I_{n,rms} · cos(φ_n)। ভিন্ন কম্পাঙ্কের মধ্যে গড় শক্তি শূন্য হয়।\n৬. ট্রিপলেন হারমোনিক্স (৩, ৯, ১৫...): ৩-ফেজ ৪-ওয়্যার ব্যবস্থায় ৩য় হারমোনিকসমূহ সমদশার হওয়ায় নিউট্রাল তারে একে অপরের সাথে যোগ হয়: I_N ≈ ৩ · I_3। এতে নিউট্রাল তার অতিউত্তপ্ত হয়।\n৭. ট্রান্সফরমার হিটিং: এডি কারেন্ট লস কম্পাঙ্কের বর্গের (n²) সমানুপাতিক হওয়ায় ট্রান্সফরমারের ওয়াইন্ডিং অতিরিক্ত গরম হয়ে পুড়ে যেতে পারে।'
  },
  formulas: [
    {
      id: 'f-fourier-expansion',
      symbol: 'f(t)',
      expression: 'f(t) = V_0 + \\sum_{n=1}^{\\infty} \\sqrt{2} V_{n,rms} \\sin(n\\omega t + \\theta_n)',
      title: {
        en: 'Fourier Harmonic Series Expansion',
        hi: 'फूरियर हार्मोनिक श्रेणी विस्तार',
        bn: 'ফুরিয়ার হারমোনিক সিরিজ বিস্তৃতি'
      },
      description: {
        en: 'Decomposes a periodic non-sinusoidal AC waveform into its DC offset, fundamental sine, and integer harmonic components.',
        hi: 'आवर्ती गैर-ज्यावक्रीय एसी तरंगरूप को डीसी ऑफसेट, मौलिक तरंग और पूर्णांक हार्मोनिक घटकों में विभाजित करता है।',
        bn: 'পর্যাবৃত্ত নন-সাইনুসয়েডাল এসি তরঙ্গকে ডিসি অফসেট, ফান্ডামেন্টাল এবং গুণিতক হারমোনিক উপাংশে বিশ্লেষণ করে।'
      },
      variables: [
        { symbol: 'V_0', name: { en: 'DC component average value (V)', hi: 'डीसी घटक औसत मान (V)', bn: 'ডিসি উপাংশ গড় মান (V)' } },
        { symbol: 'V_{n,rms}', name: { en: 'RMS magnitude of n-th harmonic (V)', hi: 'n-वें हार्मोनिक का RMS मान (V)', bn: 'n-তম হারমোনিকের আরএমএস মান (V)' } },
        { symbol: 'n', name: { en: 'Harmonic order (1 = fundamental, 3, 5, 7...)', hi: 'हार्मोनिक क्रम (1, 3, 5, 7...)', bn: 'হারমোনিক ক্রম (১, ৩, ৫, ৭...)' } }
      ]
    },
    {
      id: 'f-true-rms',
      symbol: 'V_{rms}',
      expression: 'V_{rms} = \\sqrt{V_0^2 + V_{1,rms}^2 + V_{2,rms}^2 + V_{3,rms}^2 + \\dots + V_{n,rms}^2}',
      title: {
        en: 'True RMS of Non-Sinusoidal Waveform',
        hi: 'गैर-ज्यावक्रीय तरंग का ट्रू आरएमएस मान',
        bn: 'নন-সাইনুসয়েডাল তরঙ্গের ট্রু আরএমএস মান'
      },
      description: {
        en: 'Computes total effective RMS value by orthogonal root-sum-square combination of all constituent harmonics.',
        hi: 'सभी घटक हार्मोनिक्स के वर्ग-योग-मूल संयोजन द्वारा कुल प्रभावी आरएमएस मान की गणना करता है।',
        bn: 'সমস্ত হারমোনিক উপাংশের বর্গের সমষ্টির বর্গমূল করে মোট কার্যকরী আরএমএস মান নির্ণয় করে।'
      },
      variables: [
        { symbol: 'V_{rms}', name: { en: 'Total true RMS voltage (V)', hi: 'कुल ट्रू आरएमएस वोल्टेज (V)', bn: 'মোট ট্রু আরএমএস ভোল্টেজ (V)' } },
        { symbol: 'V_{1,rms}', name: { en: 'Fundamental component RMS voltage (V)', hi: 'मौलिक घटक आरएमएस वोल्टेज (V)', bn: 'ফান্ডামেন্টাল উপাংশের আরএমএস ভোল্টেজ (V)' } }
      ]
    },
    {
      id: 'f-harmonic-impedance',
      symbol: 'Z_n',
      expression: '\\mathbf{Z}_n = R + j\\left(n\\omega L - \\frac{1}{n\\omega C}\\right)',
      title: {
        en: 'Harmonic-Dependent Complex Impedance',
        hi: 'हार्मोनिक-निर्भर सम्मिश्र प्रतिबाधा',
        bn: 'হারমোনিক-নির্ভর জটিল প্রতিবাধা'
      },
      description: {
        en: 'Calculates the branch impedance seen by the n-th harmonic current component.',
        hi: 'n-वें हार्मोनिक धारा घटक द्वारा अनुभव की जाने वाली शाखा प्रतिबाधा की गणना करता है।',
        bn: 'n-তম হারমোনিক কারেন্ট যে শাখা প্রতিবাধার সম্মুখীন হয় তা নির্ণয় করে।'
      },
      variables: [
        { symbol: 'n\\omega L', name: { en: 'Harmonic inductive reactance (Ω)', hi: 'हार्मोनिक प्रेरकीय प्रतिघात (Ω)', bn: 'হারমোনিক আবেশীয় রিঅ্যাক্ট্যান্স (Ω)' } },
        { symbol: '\\frac{1}{n\\omega C}', name: { en: 'Harmonic capacitive reactance (Ω)', hi: 'हार्मोनिक धारितीय प्रतिघात (Ω)', bn: 'হারমোনিক ধারকীয় রিঅ্যাক্ট্যান্স (Ω)' } }
      ]
    },
    {
      id: 'f-triplen-neutral-current',
      symbol: 'I_N',
      expression: 'I_N \\approx 3 \\sqrt{I_{3,rms}^2 + I_{9,rms}^2 + I_{15,rms}^2 + \\dots}',
      title: {
        en: 'Triplen Harmonic Neutral Current',
        hi: 'ट्रिपलेन हार्मोनिक न्यूट्रल धारा',
        bn: 'ট্রিপলেন হারমোনিক নিউট্রাল কারেন্ট'
      },
      description: {
        en: 'Zero-sequence triplen harmonics add arithmetically in 3-phase 4-wire neutral conductors.',
        hi: '3-फेज 4-तार न्यूट्रल चालकों में शून्य-अनुक्रम ट्रिपलेन हार्मोनिक्स अंकगणितीय रूप से जुड़ते हैं।',
        bn: '৩-ফেজ ৪-ওয়্যার নিউট্রাল তারে জিরো-সিকোয়েন্স ট্রিপলেন হারমোনিক্সের সমষ্টি নির্ণয় করে।'
      },
      variables: [
        { symbol: 'I_N', name: { en: 'Total neutral conductor current RMS (A)', hi: 'कुल न्यूट्रल चालक धारा RMS (A)', bn: 'মোট নিউট্রাল কন্ডাক্টর কারেন্ট আরএমএস (A)' } },
        { symbol: 'I_{3,rms}', name: { en: 'Third-harmonic current RMS per phase (A)', hi: 'प्रति फेज तृतीय हार्मोनिक धारा RMS (A)', bn: 'প্রতি ফেজের ৩য় হারমোনিক কারেন্ট আরএমএস (A)' } }
      ]
    }
  ],
  workedExamples: [
    {
      id: 'ex-ch12-l08-01',
      problem: {
        en: 'A non-sinusoidal periodic voltage is represented by the Fourier equation:\nv(t) = 100 + 141.4\\sin(314t) + 42.4\\sin(942t + 30^\\circ) + 28.3\\sin(1570t - 20^\\circ) \\text{ V}\nis applied across a series branch consisting of a resistor R = 10 Ω and an inductor L = 31.83 mH. Determine:\n(a) The true RMS value of the applied voltage.\n(b) The mathematical expression for the instantaneous branch current i(t).\n(c) The total true RMS current I_rms.\n(d) The total active power P dissipated in the circuit.',
        hi: 'एक गैर-ज्यावक्रीय आवर्ती वोल्टेज v(t) = 100 + 141.4 sin(314t) + 42.4 sin(942t + 30°) + 28.3 sin(1570t - 20°) V को R = 10 Ω एवं L = 31.83 mH वाली श्रेणी शाखा पर लगाया जाता है। ज्ञात कीजिए:\n(a) प्रयुक्त वोल्टेज का ट्रू आरएमएस मान।\n(b) तात्कालिक धारा i(t) का गणितीय समीकरण।\n(c) कुल ट्रू आरएमएस धारा I_rms।\n(d) परिपथ में व्यय कुल सक्रिय शक्ति P।',
        bn: 'একটি নন-সাইনুসয়েডাল ভোল্টেজ v(t) = ১০০ + ১৪১.৪ sin(৩১৪t) + ৪২.৪ sin(৯৪২t + ৩০°) + ২৮.৩ sin(১৫৭০t - ২০°) V একটি শ্রেণি বর্তনীতে (R = ১০ Ω ও L = ৩১.৮৩ mH) প্রয়োগ করা হলো। নির্ণয় করুন:\n(ক) মোট ট্রু আরএমএস ভোল্টেজ।\n(খ) তাৎক্ষণিক কারেন্ট i(t) এর সমীকরণ।\n(গ) মোট ট্রু আরএমএস কারেন্ট I_rms।\n(ঘ) বর্তনীতে মোট সক্রিয় ক্ষমতা P।'
      },
      formula: {
        en: 'V_rms = \\sqrt{V_0^2 + V_{1,rms}^2 + V_{3,rms}^2 + V_{5,rms}^2}\nZ_n = R + j(n\\omega L)\nI_{n,max} = V_{n,max} / |Z_n|, \\quad \\phi_n = \\arctan(n\\omega L / R)\nP = V_0 I_0 + \\sum V_{n,rms} I_{n,rms} \\cos(\\phi_n) = I_{rms}^2 R',
        hi: 'V_rms = \\sqrt{V_0^2 + V_{1,rms}^2 + V_{3,rms}^2 + V_{5,rms}^2}, Z_n = R + j(n\\omega L), P = I_{rms}^2 R।',
        bn: 'V_rms = \\sqrt{V_0^2 + V_{1,rms}^2 + V_{3,rms}^2 + V_{5,rms}^2}, Z_n = R + j(n\\omega L), P = I_{rms}^2 R।'
      },
      substitution: {
        en: 'Step 1: RMS Voltage Calculation\n- DC component: V_0 = 100 V\n- Fundamental (ω = 314 rad/s, 50 Hz): V_{1,max} = 141.4 V ⟹ V_{1,rms} = 141.4 / √2 = 100 V\n- 3rd harmonic (3ω = 942 rad/s, 150 Hz): V_{3,max} = 42.4 V ⟹ V_{3,rms} = 42.4 / √2 = 30 V\n- 5th harmonic (5ω = 1570 rad/s, 250 Hz): V_{5,max} = 28.3 V ⟹ V_{5,rms} = 28.3 / √2 = 20 V\nV_rms = √(100² + 100² + 30² + 20²) = √(10000 + 10000 + 900 + 400) = √21300 = 145.95 V.\n\nStep 2: Harmonic Impedances and Currents\n- For DC (ω = 0): Inductor is a short circuit (X_{L,0} = 0). Z_0 = R = 10 Ω.\n  I_0 = V_0 / R = 100 / 10 = 10 A.\n- For Fundamental (n = 1, ω = 314 rad/s):\n  X_{L,1} = 314 × 0.03183 = 10 Ω.\n  Z_1 = 10 + j10 = 14.142 ∠45° Ω.\n  I_{1,max} = 141.4 / 14.142 = 10 A (I_{1,rms} = 7.071 A), phase angle = 0° - 45° = -45°.\n- For 3rd Harmonic (n = 3, 3ω = 942 rad/s):\n  X_{L,3} = 3 × 10 = 30 Ω.\n  Z_3 = 10 + j30 = 31.623 ∠71.565° Ω.\n  I_{3,max} = 42.4 / 31.623 = 1.341 A (I_{3,rms} = 0.948 A), phase angle = 30° - 71.57° = -41.57°.\n- For 5th Harmonic (n = 5, 5ω = 1570 rad/s):\n  X_{L,5} = 5 × 10 = 50 Ω.\n  Z_5 = 10 + j50 = 50.99 ∠78.69° Ω.\n  I_{5,max} = 28.3 / 50.99 = 0.555 A (I_{5,rms} = 0.392 A), phase angle = -20° - 78.69° = -98.69°.\n\nInstantaneous current expression:\ni(t) = 10 + 10\\sin(314t - 45^\\circ) + 1.341\\sin(942t - 41.57^\\circ) + 0.555\\sin(1570t - 98.69^\\circ) \\text{ A}.\n\nStep 3: Total True RMS Current\nI_rms = √(I_0² + I_{1,rms}² + I_{3,rms}² + I_{5,rms}²)\nI_rms = √(10² + 7.071² + 0.948² + 0.392²) = √(100 + 50 + 0.899 + 0.154) = √151.05 = 12.29 A.\n\nStep 4: Total Active Power\nP = I_rms² · R = (12.29)² × 10 = 151.05 × 10 = 1510.5 W (or 1.511 kW).\nInductor consumes 0 average power across all harmonics.',
        hi: '(a) V_rms = √(100² + 100² + 30² + 20²) = 145.95 V।\n(b) i(t) = 10 + 10 sin(314t - 45°) + 1.341 sin(942t - 41.57°) + 0.555 sin(1570t - 98.69°) A।\n(c) I_rms = √(10² + 7.071² + 0.948² + 0.392²) = 12.29 A।\n(d) P = I_rms² × R = 151.05 × 10 = 1510.5 W।',
        bn: '(ক) V_rms = √(১০০² + ১০০² + ৩০² + ২০²) = ১৪৫.৯৫ V।\n(খ) i(t) = ১০ + ১০ sin(৩১৪t - ৪৫°) + ১.৩৪১ sin(৯৪২t - ৪১.৫৭°) + ০.৫৫৫ sin(১৫৭০t - ৯৮.৬৯°) A।\n(গ) I_rms = √(১০² + ৭.০৭১² + ০.৯৪৮² + ০.৩৯২²) = ১২.২৯ A।\n(ঘ) P = I_rms² × R = ১৫১.০৫ × ১০ = ১৫১০.৫ W।'
      },
      calculation: {
        en: 'The calculation demonstrates how inductive reactance scales linearly with harmonic order (10 Ω, 30 Ω, 50 Ω), causing the inductor to naturally suppress high-frequency harmonic currents.',
        hi: 'यह गणना दर्शाती है कि हार्मोनिक क्रम के साथ प्रेरक प्रतिघात 10 Ω से 50 Ω तक बढ़ता है, जिससे प्रेरक उच्च आवृत्ति हार्मोनिक धाराओं को स्वाभाविक रूप से दबा देता है।',
        bn: 'এই গণনা দেখায় কীভাবে হারমোনিক ক্রম বৃদ্ধির সাথে ইন্ডাকট্যান্স রিঅ্যাক্ট্যান্স বাড়ে (১০ Ω, ৩০ Ω, ৫০ Ω), যা উচ্চ কম্পাঙ্কের হারমোনিক কারেন্টকে স্বতঃস্ফূর্তভাবে ফিল্টার করে।'
      },
      finalAnswer: {
        en: 'V_rms = 145.95 V; i(t) = 10 + 10sin(314t-45°) + 1.341sin(942t-41.57°) + 0.555sin(1570t-98.69°) A; I_rms = 12.29 A; P = 1510.5 W',
        hi: 'V_rms = 145.95 V; i(t) दिया गया समीकरण; I_rms = 12.29 A; P = 1510.5 W',
        bn: 'V_rms = ১৪৫.৯৫ V; i(t) প্রদত্ত সমীকরণ; I_rms = ১২.২৯ A; P = ১৫১০.৫ W'
      }
    },
    {
      id: 'ex-ch12-l08-02',
      problem: {
        en: 'A commercial office building is fed by a 3-phase 4-wire, 415 V/240 V, 50 Hz system. The non-linear IT and LED lighting loads on each phase draw a balanced line current containing substantial triplen and odd harmonics. Measurements on each phase show:\n- Fundamental (50 Hz): I_{1,rms} = 120 A\n- 3rd harmonic (150 Hz): I_{3,rms} = 48 A (40% of fundamental)\n- 5th harmonic (250 Hz): I_{5,rms} = 24 A (20% of fundamental)\n- 7th harmonic (350 Hz): I_{7,rms} = 12 A (10% of fundamental)\n- 9th harmonic (450 Hz): I_{9,rms} = 6 A (5% of fundamental)\nCalculate:\n(a) Total true RMS current drawn per phase.\n(b) Total true RMS current flowing in the neutral conductor I_N.\n(c) The ratio of neutral current to phase current (I_N / I_phase), and explain why the neutral wire is at risk of burnout if sized at 100% rated ampacity.',
        hi: 'एक वाणिज्यिक कार्यालय भवन 3-फेज 4-तार प्रणाली पर कार्य करता है। प्रत्येक फेज पर गैर-रैखिक लोड द्वारा ली जाने वाली धारा में हार्मोनिक्स निम्न प्रकार हैं: मौलिक 120 A, 3rd 48 A, 5th 24 A, 7th 12 A, 9th 6 A। गणना कीजिए:\n(a) प्रति फेज कुल ट्रू आरएमएस धारा।\n(b) न्यूट्रल चालक में प्रवाहित कुल आरएमएस धारा I_N।\n(c) न्यूट्रल और फेज धारा का अनुपात (I_N / I_phase) और व्याख्या करें कि मानक 100% न्यूट्रल के जलने का खतरा क्यों है।',
        bn: 'একটি বাণিজ্যিক ভবনের ৩-ফেজ ৪-ওয়্যার লাইনে প্রতি ফেজে কারেন্ট ও হারমোনিক্স হলো: ফান্ডামেন্টাল ১২০ A, ৩য় ৪৮ A, ৫ম ২৪ A, ৭ম ১২ A, ৯ম ৬ A। নির্ণয় করুন:\n(ক) প্রতি ফেজের মোট ট্রু আরএমএস কারেন্ট।\n(খ) নিউট্রাল তারে প্রবাহিত মোট আরএমএস কারেন্ট I_N।\n(গ) নিউট্রাল ও ফেজ কারেন্টের অনুপাত (I_N / I_phase) এবং ১০০% সাইজযুক্ত নিউট্রাল তার পুড়ে যাওয়ার ঝুঁকি ব্যাখ্যা করুন।'
      },
      formula: {
        en: 'I_{phase,rms} = \\sqrt{I_{1,rms}^2 + I_{3,rms}^2 + I_{5,rms}^2 + I_{7,rms}^2 + I_{9,rms}^2}\nFor balanced 3-phase system, fundamental and non-triplen harmonics (5th, 7th) sum to zero in neutral.\nTriplen harmonics (3rd, 9th) are zero-sequence and add in phase:\nI_N = 3 \\sqrt{I_{3,rms}^2 + I_{9,rms}^2}',
        hi: 'I_{phase} = \\sqrt{\\sum I_n^2}, I_N = 3 \\sqrt{I_3^2 + I_9^2}।',
        bn: 'I_{phase} = \\sqrt{\\sum I_n^2}, I_N = ৩ \\sqrt{I_3^2 + I_9^2}।'
      },
      substitution: {
        en: 'Step 1: Total Phase RMS Current\nI_{phase} = √(120² + 48² + 24² + 12² + 6²)\nI_{phase} = √(14400 + 2304 + 576 + 144 + 36) = √17460 = 132.14 A.\n\nStep 2: Neutral Current Calculation\nIn a balanced system:\n- 1st harmonic (50 Hz): Displaced by 120° ⟹ vector sum in neutral = 0 A.\n- 5th harmonic (250 Hz): Negative sequence (displaced by 5 × 120° = -120°) ⟹ vector sum = 0 A.\n- 7th harmonic (350 Hz): Positive sequence (displaced by 7 × 120° = +120°) ⟹ vector sum = 0 A.\n- 3rd harmonic (150 Hz): Displaced by 3 × 120° = 360° = 0° (in phase in all 3 phases).\n  Scalar sum in neutral = 3 × I_{3,rms} = 3 × 48 = 144 A.\n- 9th harmonic (450 Hz): Displaced by 9 × 120° = 1080° = 0° (in phase in all 3 phases).\n  Scalar sum in neutral = 3 × I_{9,rms} = 3 × 6 = 18 A.\nTotal neutral RMS current:\nI_N = √[(3 × 48)² + (3 × 6)²] = √(144² + 18²) = √(20736 + 324) = √21060 = 145.12 A.\n\nStep 3: Loading Ratio & Safety Implications\nRatio = I_N / I_{phase} = 145.12 / 132.14 = 1.098 (109.8% of phase current!).\nEven though the 3 phases are perfectly balanced, the neutral current is 145.12 A, which is 13 A higher than any phase conductor current. If a standard 100% or 50% undersized neutral cable was installed, it will experience continuous overheating, melting insulation and posing an imminent fire hazard. Modern electrical codes (NEC / IS 732) mandate a 200% oversized neutral for high-triplen harmonic environments.',
        hi: '(a) I_{phase} = √(14400 + 2304 + 576 + 144 + 36) = 132.14 A।\n(b) I_N = √[(3×48)² + (3×6)²] = √(144² + 18²) = 145.12 A।\n(c) अनुपात = 145.12 / 132.14 = 1.098 (109.8%)। 3-फेज संतुलित होने पर भी न्यूट्रल धारा फेज धारा से 13 A अधिक है। अतः 200% आकार का न्यूट्रल अनिवार्य है।',
        bn: '(ক) I_{phase} = √(১৪৪০০ + ২৩০৪ + ৫৭৬ + ১৪৪ + ৩৬) = ১৩২.১৪ A।\n(খ) I_N = √[(৩×৪৮)² + (৩×৬)²] = √(১৪৪² + ১৮²) = ১৪৫.১২ A।\n(গ) অনুপাত = ১৪৫.১২ / ১৩২.১৪ = ১.০৯৮ (১০৯.৮%)। সম্পূর্ণ ব্যালান্সড লোড হওয়া সত্ত্বেও নিউট্রাল কারেন্ট ফেজ কারেন্টের চেয়ে বেশি। ফলে নিউট্রাল তার পুড়ে যাওয়ার ঝুঁকি এড়াতে ২০০% ডাবল-সাইজ নিউট্রাল তার ব্যবহার বাধ্যতামূলক।'
      },
      calculation: {
        en: 'Triplen harmonics (3rd, 9th, 15th) are zero-sequence currents that cannot cancel in a star neutral point; they add co-phasally, leading to dangerous neutral conductor overcurrent.',
        hi: 'ट्रिपलेन हार्मोनिक्स (3rd, 9th) शून्य-अनुक्रम घटक होते हैं जो न्यूट्रल में निरस्त नहीं होते बल्कि सीधे जुड़ते हैं, जिससे न्यूट्रल में अत्यधिक धारा बहती है।',
        bn: 'ট্রিপলেন হারমোনিকগুলো (৩য়, ৯ম) জিরো-সিকোয়েন্স কারেন্ট হওয়ায় নিউট্রালে বাতিল না হয়ে সমদশায় যোগ হয়, যার ফলে নিউট্রাল তারে অতিরিক্ত কারেন্ট প্রবাহিত হয়।'
      },
      finalAnswer: {
        en: 'I_{phase} = 132.14 A; I_N = 145.12 A; Ratio I_N/I_{phase} = 109.8% (requires 200% double-sized neutral)',
        hi: 'I_{phase} = 132.14 A; I_N = 145.12 A; अनुपात = 109.8% (200% न्यूट्रल आवश्यक)',
        bn: 'I_{phase} = ১৩২.১৪ A; I_N = ১৪৫.১২ A; অনুপাত = ১০৯.৮% (২০০% ডাবল নিউট্রাল আবশ্যক)'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Variable Frequency Drives (VFDs) and Inverters: Industrial three-phase 6-pulse diode rectifiers generate dominant 5th, 7th, 11th, and 13th current harmonics (6k ± 1), requiring tuned harmonic trap filters or active front ends to prevent utility penalties.',
      'Data Centers and Modern Office Buildings: Switched-mode power supplies (SMPS) in servers, PCs, and LED driver modules inject massive 3rd harmonics (up to 80% of fundamental) into power distribution units (PDUs), mandating double-capacity neutral conductors.',
      'Transformer K-Factor Selection: Power engineers select K-13 or K-20 rated distribution transformers with interleaved electrostatic shielding and doubled neutral lugs to prevent catastrophic thermal failure when supplying harmonic-rich loads.'
    ],
    hi: [
      'वेरिएबल फ्रीक्वेंसी ड्राइव (VFD): औद्योगिक 6-पल्स रेक्टिफायर मुख्य रूप से 5वीं, 7वीं, 11वीं और 13वीं हार्मोनिक्स उत्पन्न करते हैं, जिन्हें ग्रिड पेनल्टी से बचने के लिए ट्यून्ड फिल्टर द्वारा फ़िल्टर किया जाता है।',
      'डेटा सेंटर एवं आधुनिक कार्यालय: कंप्यूटर और एलईडी लाइटों के एसएमपीएस (SMPS) भारी मात्रा में 3rd हार्मोनिक्स उत्पन्न करते हैं, जिससे न्यूट्रल केबलों को दोगुना (200%) मोटा करना अनिवार्य होता है।',
      'के-फैक्टर ट्रांसफार्मर चयन: हार्मोनिक हीटिंग को सहन करने के लिए इंजीनियर K-13 या K-20 रेटेड ट्रांसफार्मर स्थापित करते हैं।'
    ],
    bn: [
      'ভেরিয়েবল ফ্রিকোয়েন্সি ড্রাইভ (VFD): শিল্পকারখানার ৬-পালস রেকটিফায়ার ৫ম, ৭ম, ১১তম হারমোনিক তৈরি করে, যা ফিল্টার না করলে গ্রিডের মারাত্মক ক্ষতি হয়।',
      'ডেটা সেন্টার ও আধুনিক অফিস ভবন: কম্পিউটার ও এলইডি লাইটের এসএমপিএস (SMPS) প্রচুর ৩য় হারমোনিক তৈরি করে, যার কারণে নিউট্রাল তারকে দ্বিগুণ মোটা (২০০%) করা হয়।',
      'কে-ফ্যাক্টর ট্রান্সফরমার: হারমোনিক জনিত অতিরিক্ত গরম থেকে রক্ষা পেতে ডেটা সেন্টারে K-13 বা K-20 রেটেড বিশেষ ট্রান্সফরমার ব্যবহার করা হয়।'
    ]
  },
  importantPoints: {
    en: [
      'Waveforms with half-wave symmetry (f(t) = -f(t + T/2)) contain ONLY ODD HARMONICS (1st, 3rd, 5th, 7th, ...); all even harmonics are identically zero.',
      'True RMS value requires the square root of the sum of the squares of DC and all individual harmonic RMS values: V_rms = √(V_0² + Σ V_{n,rms}²).',
      'In balanced three-phase four-wire networks, triplen harmonics (3, 9, 15, ...) are zero-sequence, adding in-phase in the neutral wire to produce currents that often exceed line current.',
      'Inductive reactance increases with harmonic order (X_L = nωL), attenuating high frequencies, whereas capacitive reactance decreases (X_C = 1/nωC), drawing dangerously high harmonic currents.'
    ],
    hi: [
      'हाफ-वेव सममिति वाली तरंगों में केवल विषम हार्मोनिक्स (1, 3, 5, 7...) होते हैं; सभी सम हार्मोनिक्स शून्य होते हैं।',
      'ट्रू आरएमएस मान सभी हार्मोनिक्स के आरएमएस मानों के वर्ग योग का वर्गमूल होता है: V_rms = √(V_0² + Σ V_{n,rms}²)।',
      'संतुलित 3-फेज प्रणाली में, 3rd और 9th हार्मोनिक्स न्यूट्रल में जुड़ जाते हैं, जिससे न्यूट्रल धारा फेज धारा से भी अधिक हो सकती है।',
      'प्रेरक उच्च आवृत्ति हार्मोनिक्स को रोकता है, जबकि संधारित्र उच्च आवृत्ति हार्मोनिक्स के लिए लगभग शॉर्ट सर्किट बन जाता है।'
    ],
    bn: [
      'হাফ-ওয়েভ সিমেট্রি থাকলে তরঙ্গে কেবল বিজোড় হারমোনিক (১ম, ৩য়, ৫ম, ৭ম...) থাকে; জোড় হারমোনিকগুলো শূন্য হয়।',
      'ট্রু আরএমএস মান পেতে ডিসি ও প্রতিটি হারমোনিক আরএমএস মানের বর্গের সমষ্টির বর্গমূল নিতে হয়: V_rms = √(V_0² + Σ V_{n,rms}²)।',
      'ব্যালান্সড ৩-ফেজ লাইনে ৩য় হারমোনিকগুলো নিউট্রালে একত্রিত হয়ে ফেজ কারেন্টের চেয়েও বেশি কারেন্ট তৈরি করতে পারে।',
      'ইন্ডাক্টর উচ্চ কম্পাঙ্কের হারমোনিক কারেন্ট কমায়, কিন্তু ক্যাপাসিটরের রিঅ্যাক্ট্যান্স কমে যাওয়ায় তা বিপজ্জনক মাত্রায় হারমোনিক কারেন্ট টানে।'
    ]
  },
  commonMistakes: {
    en: [
      'Mistake: Adding peak or RMS values arithmetically (e.g., V_rms = V_1 + V_3 + V_5). Correction: Orthogonal frequency components must be added via root-sum-square: V_rms = √(V_1² + V_3² + V_5²).',
      'Mistake: Assuming that balanced 3-phase loads guarantee zero neutral current. Correction: Non-linear balanced loads produce triplen harmonics that add in phase, causing massive neutral currents even with perfect phase balance.',
      'Mistake: Measuring non-sinusoidal currents with an ordinary average-calibrated multimeter. Correction: Standard meters assume a pure sinusoidal form factor (1.11) and can have errors up to 40%; a wideband TRUE RMS meter is mandatory.'
    ],
    hi: [
      'त्रुटि: हार्मोनिक आरएमएस मानों को सीधे जोड़ना (V_rms = V_1 + V_3)। सुधार: विभिन्न आवृत्तियों के आरएमएस मानों को वर्ग-योग-मूल √(V_1² + V_3²) द्वारा ही जोड़ा जा सकता है।',
      'त्रुटि: यह मानना कि संतुलित 3-फेज में न्यूट्रल धारा हमेशा शून्य होती है। सुधार: नॉन-लीनियर लोड में 3rd हार्मोनिक्स न्यूट्रल में जुड़कर भारी धारा बनाते हैं।',
      'त्रुटि: सामान्य मल्टीमीटर से गैर-ज्यावक्रीय धारा मापना। सुधार: साधारण मीटर 40% तक गलत मान दे सकते हैं; हमेशा True RMS मीटर का उपयोग करें।'
    ],
    bn: [
      'ভুল: হারমোনিক ভোল্টেজগুলোকে সরাসরি যোগ করা (যেমন V_rms = V_1 + V_3)। সংশোধন: বিভিন্ন কম্পাঙ্কের উপাদানগুলোকে সর্বদা রুট-সাম-স্কয়ার √(V_1² + V_3²) পদ্ধতিতে যোগ করতে হয়।',
      'ভুল: মনে করা যে ৩-ফেজ ব্যালান্সড লোড থাকলে নিউট্রাল কারেন্ট সর্বদা শূন্য হবে। সংশোধন: নন-লিনিয়ার লোডে ৩য় হারমোনিক সমদশায় যোগ হয়ে নিউট্রালে বিশাল কারেন্ট সৃষ্টি করে।',
      'ভুল: সাধারণ এনালগ বা এভারেজ ডিজিটাল মাল্টিমিটার দিয়ে নন-সাইনুসয়েডাল কারেন্ট মাপা। সংশোধন: সাধারণ মিটারে ৪০% পর্যন্ত ভুল রিডিং আসতে পারে; ট্রু আরএমএস (True RMS) মিটার আবশ্যক।'
    ]
  },
  keyTakeaways: {
    en: [
      'Non-linear loads distort sinusoidal AC waveforms into periodic signals rich in odd harmonics.',
      'True RMS calculation accounts for all harmonic heating effects via V_rms = √(V_0² + Σ V_{n,rms}²).',
      'Triplen harmonics (3rd, 9th) are zero-sequence currents that accumulate in 3-phase neutral conductors, requiring oversized neutral wiring.',
      'Harmonic impedances vary with frequency: inductive reactance scales with n while capacitive reactance scales with 1/n.'
    ],
    hi: [
      'गैर-रैखिक भार ज्यावक्रीय एसी तरंग को विकृत कर विषम हार्मोनिक्स उत्पन्न करते हैं।',
      'ट्रू आरएमएस मान सभी हार्मोनिक्स के तापन प्रभाव को समाहित करता है: V_rms = √(V_0² + Σ V_{n,rms}²)।',
      'ट्रिपलेन हार्मोनिक्स (3rd, 9th) न्यूट्रल तार में जुड़कर अत्यधिक धारा बनाते हैं, जिससे न्यूट्रल तार को मोटा करना आवश्यक होता है।',
      'हार्मोनिक प्रतिबाधा आवृत्ति के साथ बदलती है: प्रेरक उच्च आवृत्तियों को रोकता है जबकि संधारित्र उन्हें सुगमता प्रदान करता है।'
    ],
    bn: [
      'নন-লিনিয়ার লোড খাঁটি সাইন ওয়েভকে বিকৃত করে বহু বিজোড় হারমোনিক তৈরি করে।',
      'ট্রু আরএমএস সূত্র V_rms = √(V_0² + Σ V_{n,rms}²) দিয়ে সমস্ত হারমোনিকের সঠিক কার্যকর মান পাওয়া যায়।',
      '৩-ফেজ নিউট্রাল তারে ৩য় ও ৯ম হারমোনিক একত্রিত হওয়ায় নিউট্রাল তার ফেজ তারের চেয়েও বেশি উত্তপ্ত হতে পারে।',
      'কম্পাঙ্ক বৃদ্ধির সাথে ইন্ডাকট্যান্স রিঅ্যাক্ট্যান্স বাড়ে এবং ক্যাপাসিট্যান্স রিঅ্যাক্ট্যান্স দ্রুত হ্রাস পায়।'
    ]
  },
  practiceQuestions: [
    {
      id: 'pq-ch12-l08-01',
      question: {
        en: 'A distorted AC current waveform is represented by i(t) = 20 sin(ωt) + 6 sin(3ωt) + 4 sin(5ωt) A. Calculate its True RMS value.',
        hi: 'एक विकृत एसी धारा i(t) = 20 sin(ωt) + 6 sin(3ωt) + 4 sin(5ωt) A है। इसका ट्रू आरएमएस मान ज्ञात कीजिए।',
        bn: 'একটি বিকৃত এসি কারেন্ট i(t) = ২০ sin(ωt) + ৬ sin(৩ωt) + ৪ sin(৫ωt) A হলে এর ট্রু আরএমএস মান কত?'
      },
      hint: {
        en: 'I_rms = √[(I_{1,max}² + I_{3,max}² + I_{5,max}²) / 2] = √[(20² + 6² + 4²) / 2] = √[452 / 2] = √226 = 15.03 A.',
        hi: 'I_rms = √[(20² + 6² + 4²) / 2] = √226 = 15.03 A।',
        bn: 'I_rms = √[(২০² + ৬² + ৪²) / ২] = √২২৬ = ১৫.০৩ A।'
      }
    },
    {
      id: 'pq-ch12-l08-02',
      question: {
        en: 'Why do pure power capacitors draw excessively high currents when exposed to non-sinusoidal voltages containing 11th and 13th harmonics?',
        hi: '11वीं और 13वीं हार्मोनिक्स युक्त वोल्टेज के संपर्क में आने पर संधारित्र अत्यधिक उच्च धारा क्यों खींचते हैं?',
        bn: '১১তম ও ১৩তম হারমোনিকযুক্ত ভোল্টেজে ক্যাপাসিটর অতিরিক্ত উচ্চ কারেন্ট টানে কেন?'
      },
      hint: {
        en: 'Capacitive reactance decreases inversely with harmonic order: X_{C,n} = X_{C,1} / n. For the 13th harmonic, impedance is reduced to only 1/13th of its fundamental value, causing I_{13} = 13 · ωC · V_{13}.',
        hi: 'संधारित्र का प्रतिघात X_{C,n} = X_{C,1} / n होता है। 13वें हार्मोनिक पर प्रतिबाधा 13 गुना कम हो जाती है, जिससे धारा बहुत बढ़ जाती है।',
        bn: 'হারমোনিক ক্রম বৃদ্ধির সাথে ক্যাপাসিটিভ রিঅ্যাক্ট্যান্স X_{C,n} = X_{C,১} / n হারে কমে যায়। ১৩তম হারমোনিকের ক্ষেত্রে ইম্পিডেন্স ১৩ গুণ কমে যাওয়ায় বিপুল কারেন্ট প্রবাহিত হয়।'
      }
    }
  ],
  mcqs: [
    {
      id: 'mcq-ch12-l08-01',
      question: {
        en: 'What types of harmonics are present in a periodic AC waveform that possesses strict half-wave symmetry (f(t) = -f(t + T/2))?',
        hi: 'सख्त अर्ध-तरंग सममिति (Half-wave symmetry: f(t) = -f(t + T/2)) रखने वाली आवर्ती एसी तरंग में किस प्रकार के हार्मोनिक्स उपस्थित होते हैं?',
        bn: 'কঠোর হাফ-ওয়েভ সিমেট্রি (f(t) = -f(t + T/২)) বিশিষ্ট পর্যায়বৃত্ত এসি তরঙ্গে কোন ধরনের হারমোনিক উপস্থিত থাকে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Only even harmonics (2nd, 4th, 6th...)', hi: 'केवल सम हार्मोनिक्स (2nd, 4th, 6th...)', bn: 'শুধুমাত্র জোড় হারমোনিক (২য়, ৪র্থ, ৬ষ্ঠ...)' } },
        { id: 'opt-2', text: { en: 'Only odd harmonics (1st, 3rd, 5th...)', hi: 'केवल विषम हार्मोनिक्स (1st, 3rd, 5th...)', bn: 'শুধুমাত্র বিজোড় হারমোনিক (১ম, ৩য়, ৫ম...)' } },
        { id: 'opt-3', text: { en: 'Both even and odd harmonics in equal proportion', hi: 'सम और विषम दोनों हार्मोनिक्स समान अनुपात में', bn: 'জোড় ও বিজোড় উভয় হারমোনিক সমান অনুপাতে' } },
        { id: 'opt-4', text: { en: 'Only triplen harmonics', hi: 'केवल ट्रिपलेन हार्मोनिक्स', bn: 'শুধুমাত্র ট্রিপলেন হারমোনিক' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'In Fourier analysis, half-wave symmetry guarantees that the negative half-cycle is the inverted replica of the positive half-cycle, causing all even harmonic Fourier coefficients to integrate to zero. Only odd harmonics survive.',
        hi: 'फूरियर विश्लेषण में हाफ-वेव सममिति के कारण सभी सम हार्मोनिक गुणांक शून्य हो जाते हैं। तरंग में केवल विषम हार्मोनिक्स (1, 3, 5, 7...) ही शेष रहते हैं।',
        bn: 'ফুরিয়ার বিশ্লেষণে হাফ-ওয়েভ সিমেট্রি নিশ্চিত করে যে সমস্ত জোড় হারমোনিক বিলুপ্ত হবে এবং তরঙ্গে কেবল বিজোড় হারমোনিক (১ম, ৩য়, ৫ম...) উপস্থিত থাকবে।'
      }
    },
    {
      id: 'mcq-ch12-l08-02',
      question: {
        en: 'An alternating voltage is defined as v(t) = 120 + 100 sin(ωt) + 40 sin(3ωt) V. What is its True RMS value?',
        hi: 'एक प्रत्यावर्ती वोल्टेज v(t) = 120 + 100 sin(ωt) + 40 sin(3ωt) V है। इसका ट्रू आरएमएस मान क्या है?',
        bn: 'একটি ভোল্টেজ v(t) = ১২০ + ১০০ sin(ωt) + ৪০ sin(৩ωt) V হলে এর ট্রু আরএমএস মান কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '260.0 V', hi: '260.0 V', bn: '২৬০.০ V' } },
        { id: 'opt-2', text: { en: '142.13 V', hi: '142.13 V', bn: '১৪২.১৩ V' } },
        { id: 'opt-3', text: { en: '184.39 V', hi: '184.39 V', bn: '১৮৪.৩৯ V' } },
        { id: 'opt-4', text: { en: '120.0 V', hi: '120.0 V', bn: '১২০.০ V' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'V_rms = √[V_dc² + (V_{1,max}² + V_{3,max}²)/2] = √[120² + (100² + 40²)/2] = √[14400 + (10000 + 1600)/2] = √[14400 + 5800] = √20200 = 142.13 V.',
        hi: 'V_rms = √[120² + (100² + 40²)/2] = √[14400 + 5800] = √20200 = 142.13 V।',
        bn: 'V_rms = √[১২০² + (১০০² + ৪০²)/২] = √[১৪৪০০ + ৫৮০০] = √২০২০০ = ১৪২.১৩ V।'
      }
    },
    {
      id: 'mcq-ch12-l08-03',
      question: {
        en: 'In a balanced three-phase four-wire electrical system supplying non-linear single-phase loads, why does the 3rd harmonic current accumulate in the neutral conductor?',
        hi: 'गैर-रैखिक सिंगल-फेज लोड वाले संतुलित 3-फेज 4-तार सिस्टम में, तीसरी हार्मोनिक धारा न्यूट्रल चालक में क्यों जमा होती है?',
        bn: '৩-ফেজ ৪-ওয়্যার সিস্টেমে ৩য় হারমোনিক কারেন্ট নিউট্রাল কন্ডাক্টরে কেন বাতিল না হয়ে জমা হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Because 3rd harmonics are 120° out of phase and cancel destructively', hi: 'क्योंकि 3rd हार्मोनिक्स 120° फेज अंतर पर होते हैं', bn: 'কারণ ৩য় হারমোনিক ১২০° দশা পার্থক্যে থাকে' } },
        { id: 'opt-2', text: { en: 'Because 3rd harmonics have zero-sequence characteristics and are in-phase across all three phases (3 × 120° = 360° = 0°)', hi: 'क्योंकि 3rd हार्मोनिक्स शून्य-अनुक्रम होते हैं और तीनों फेजों में समान कला में होते हैं (3 × 120° = 360° = 0°)', bn: 'কারণ ৩য় হারমোনিক জিরো-সিকোয়েন্স বিশিষ্ট এবং তিনটি ফেজেই সমদশায় থাকে (৩ × ১২০° = ৩৬০° = ০°)' } },
        { id: 'opt-3', text: { en: 'Because neutral conductors have negative resistance at 150 Hz', hi: 'क्योंकि न्यूट्रल चालक में 150 Hz पर ऋणात्मक प्रतिरोध होता है', bn: 'কারণ নিউট্রাল তারে ১৫০ হার্জে ঋণাত্মক রোধ থাকে' } },
        { id: 'opt-4', text: { en: 'Because the skin effect eliminates the return path in the phase wires', hi: 'क्योंकि त्वचा प्रभाव फेज तारों में रिटर्न पाथ समाप्त कर देता है', bn: 'কারণ স্কিন ইফেক্ট ফেজ তারে রিটার্ন পাথ নষ্ট করে' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'The phase displacement between phase conductors is 120°. For the 3rd harmonic, the phase angle becomes 3 × 120° = 360° = 0°. Thus, all three 3rd harmonic phase currents are identical in phase and add up directly in the neutral: I_N(3rd) = 3 · I_3.',
        hi: 'तीसरी हार्मोनिक के लिए कला कोण 3 × 120° = 360° = 0° हो जाता है। अतः तीनों फेजों की 3rd हार्मोनिक धाराएं एक ही दिशा में होती हैं और न्यूट्रल में सीधे जुड़कर 3 गुना हो जाती हैं।',
        bn: '৩য় হারমোনিকের দশা কোণ ৩ × ১২০° = ৩৬০° = ০° হওয়ায় তিনটি ফেজের ৩য় হারমোনিক কারেন্ট সমদশায় থাকে এবং নিউট্রালে সরাসরি যোগ হয়ে ৩ গুণ হয় (I_N = ৩ × I_3)।'
      }
    },
    {
      id: 'mcq-ch12-l08-04',
      question: {
        en: 'A non-sinusoidal voltage containing a fundamental and a 5th harmonic is applied to an RL branch. How does the inductive reactance to the 5th harmonic compare to the fundamental inductive reactance?',
        hi: 'फंडामेंटल और 5वीं हार्मोनिक वाले वोल्टेज को RL शाखा पर लगाया जाता है। 5वीं हार्मोनिक के लिए प्रेरकीय प्रतिघात (X_L5) फंडामेंटल (X_L1) की तुलना में कितना होगा?',
        bn: 'ফান্ডামেন্টাল ও ৫ম হারমোনিক বিশিষ্ট ভোল্টেজ একটি RL সার্কিটে দিলে ৫ম হারমোনিকের জন্য আবেশীয় রিঅ্যাক্ট্যান্স (X_L5) ফান্ডামেন্টালের তুলনায় কেমন হবে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'It is 1/5th of the fundamental reactance', hi: 'यह मौलिक प्रतिघात का 1/5 गुना होगा', bn: 'এটি ফান্ডামেন্টাল রিঅ্যাক্ট্যান্সের ১/৫ অংশ হবে' } },
        { id: 'opt-2', text: { en: 'It is 5 times greater than the fundamental reactance', hi: 'यह मौलिक प्रतिघात से 5 गुना अधिक होगा', bn: 'এটি ফান্ডামেন্টাল রিঅ্যাক্ট্যান্সের চেয়ে ৫ গুণ বেশি হবে' } },
        { id: 'opt-3', text: { en: 'It is 25 times greater than the fundamental reactance', hi: 'यह 25 गुना अधिक होगा', bn: 'এটি ২৫ গুণ বেশি হবে' } },
        { id: 'opt-4', text: { en: 'It remains exactly the same', hi: 'यह बिल्कुल समान रहेगा', bn: 'এটি একই থাকবে' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'Inductive reactance is directly proportional to frequency: X_L = nωL. For the 5th harmonic (n = 5), X_{L,5} = 5 · X_{L,1}, which naturally attenuates high-frequency current harmonics.',
        hi: 'प्रेरकीय प्रतिघात आवृत्ति के सीधे समानुपाती होता है: X_L = nωL। 5वें हार्मोनिक (n = 5) के लिए X_L5 = 5 × X_L1 होता है।',
        bn: 'ইন্ডাকটিভ রিঅ্যাক্ট্যান্স কম্পাঙ্কের সমানুপাতিক: X_L = nωL। ৫ম হারমোনিকের (n = ৫) জন্য রিঅ্যাক্ট্যান্স মূল রিঅ্যাক্ট্যান্সের ৫ গুণ বেশি হয় (X_L5 = ৫ × X_L1)।'
      }
    },
    {
      id: 'mcq-ch12-l08-05',
      question: {
        en: 'Why do distribution transformers experience severe overheating when supplying harmonic-rich non-linear industrial loads?',
        hi: 'हार्मोनिक-युक्त गैर-रैखिक औद्योगिक भार की आपूर्ति करते समय वितरण ट्रांसफार्मर अत्यधिक गर्म क्यों हो जाते हैं?',
        bn: 'হারমোনিক সমৃদ্ধ নন-লিনিয়ার লোড চালালে ডিস্ট্রিবিউশন ট্রান্সফরমার মারাত্মকভাবে অতিরিক্ত উত্তপ্ত হয় কেন?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Winding eddy current losses increase proportionally to the square of harmonic frequency (n²)', hi: 'वाइंडिंग भंवर धारा हानियाँ हार्मोनिक आवृत्ति के वर्ग (n²) के समानुपाती बढ़ती हैं', bn: 'ওয়াইন্ডিং এডি কারেন্ট লস হারমোনিক কম্পাঙ্কের বর্গের (n²) সমানুপাতিক হারে বৃদ্ধি পায়' } },
        { id: 'opt-2', text: { en: 'Dielectric strength of transformer oil increases infinitely', hi: 'ट्रांसफार्मर तेल की परावैद्युत सामर्थ्य असीमित हो जाती है', bn: 'ট্রান্সফরমার তেলের ডাই-ইলেকট্রিক শক্তি বৃদ্ধি পায়' } },
        { id: 'opt-3', text: { en: 'The transformer core demagnetizes completely at high frequencies', hi: 'ट्रांसफार्मर कोर उच्च आवृत्तियों पर पूरी तरह से विचुंबकित हो जाता है', bn: 'উচ্চ কম্পাঙ্কে ট্রান্সফরমারের কোর চৌম্বকত্ব হারায়' } },
        { id: 'opt-4', text: { en: 'Primary winding resistance drops to zero', hi: 'प्राथमिक वाइंडिंग का प्रतिरोध शून्य हो जाता है', bn: 'প্রাইমারি ওয়াইন্ডিং রোধ শূন্য হয়ে যায়' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Winding eddy current loss is given by P_{EC} ∝ Σ I_n² · n². Because losses scale with n², even moderate percentages of high-frequency harmonics (e.g., 5th, 7th, 11th) cause severe localized heating in transformer windings.',
        hi: 'भंवर धारा हानि P_{EC} ∝ Σ I_n² · n² होती है। आवृत्ति के वर्ग (n²) के साथ हानि बढ़ने के कारण उच्च हार्मोनिक्स ट्रांसफार्मर को अत्यधिक गर्म कर देते हैं।',
        bn: 'ওয়াইন্ডিং এডি কারেন্ট লস P_{EC} ∝ Σ I_n² · n² সূত্র মেনে চলে। কম্পাঙ্কের বর্গের (n²) সমানুপাতিক হওয়ায় উচ্চতর হারমোনিক্স ট্রান্সফরমারের ভেতর বিপুল অতিরিক্ত তাপ তৈরি করে।'
      }
    },
    {
      id: 'mcq-ch12-l08-06',
      question: {
        en: 'If a voltage v(t) = V_1 sin(ωt) + V_3 sin(3ωt) is applied to a load drawing current i(t) = I_1 sin(ωt - φ_1) + I_5 sin(5ωt - φ_5), what is the average active power consumed by the 5th harmonic current component?',
        hi: 'यदि v(t) = V_1 sin(ωt) + V_3 sin(3ωt) वोल्टेज पर धारा i(t) = I_1 sin(ωt - φ_1) + I_5 sin(5ωt - φ_5) हो, तो 5वें हार्मोनिक घटक द्वारा व्यय औसत सक्रिय शक्ति क्या है?',
        bn: 'যদি v(t) = V_1 sin(ωt) + V_3 sin(3ωt) ভোল্টেজে i(t) = I_1 sin(ωt - φ_1) + I_5 sin(5ωt - φ_5) কারেন্ট চলে, তবে ৫ম হারমোনিক কারেন্ট উপাংশ কত গড় সক্রিয় ক্ষমতা খরচ করবে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'V_3 · I_5 · cos(φ_5) W', hi: 'V_3 · I_5 · cos(φ_5) W', bn: 'V_3 · I_5 · cos(φ_5) W' } },
        { id: 'opt-2', text: { en: 'Zero (0 W)', hi: 'शून्य (0 W)', bn: 'শূন্য (০ W)' } },
        { id: 'opt-3', text: { en: '0.5 · V_1 · I_5 W', hi: '0.5 · V_1 · I_5 W', bn: '০.৫ · V_1 · I_5 W' } },
        { id: 'opt-4', text: { en: 'Infinity', hi: 'अनंत', bn: 'অসীম' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'Active average power can only be produced by voltage and current components of the EXACT SAME frequency. Cross-frequency products (such as V_1 × I_5 or V_3 × I_5) integrate to exactly zero net work over a period. Since there is no 5th harmonic voltage (V_5 = 0), the 5th harmonic power is exactly 0 W.',
        hi: 'सक्रिय शक्ति केवल समान आवृत्ति वाले वोल्टेज और धारा घटकों के बीच उत्पन्न होती है। चूंकि 5वां वोल्टेज घटक शून्य (V_5 = 0) है, इसलिए 5वीं हार्मोनिक शक्ति ठीक 0 W होगी।',
        bn: 'সক্রিয় গড় ক্ষমতা কেবল একই কম্পাঙ্কের ভোল্টেজ ও কারেন্টের পারস্পরিক গুণফল থেকে আসে। ভিন্ন কম্পাঙ্কের গড় মান শূন্য। এখানে ৫ম হারমোনিক ভোল্টেজ না থাকায় (V_5 = ০) এর গড় ক্ষমতা ঠিক ০ ওয়াট।'
      }
    },
    {
      id: 'mcq-ch12-l08-07',
      question: {
        en: 'What harmonic frequencies are generated by a standard industrial three-phase 6-pulse diode bridge rectifier?',
        hi: 'एक मानक औद्योगिक 3-फेज 6-पल्स डायोड ब्रिज रेक्टिफायर द्वारा कौन सी हार्मोनिक आवृत्तियाँ उत्पन्न होती हैं?',
        bn: 'একটি সাধারণ ইন্ডাস্ট্রিয়াল ৩-ফেজ ৬-পালস ডায়োড ব্রিজ রেকটিফায়ার কোন কোন হারমোনিক কম্পাঙ্ক তৈরি করে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Even harmonics: 2nd, 4th, 6th, 8th...', hi: 'सम हार्मोनिक्स: 2nd, 4th, 6th, 8th...', bn: 'জোড় হারমোনিক: ২য়, ৪র্থ, ৬ষ্ঠ, ৮ম...' } },
        { id: 'opt-2', text: { en: 'Characteristic harmonics given by h = 6k ± 1 (5th, 7th, 11th, 13th, 17th, 19th...)', hi: 'h = 6k ± 1 द्वारा दिए जाने वाले हार्मोनिक्स (5th, 7th, 11th, 13th...)', bn: 'h = ৬k ± ১ নিয়ম অনুসারে বৈশিষ্ট্যপূর্ণ হারমোনিক (৫ম, ৭ম, ১১তম, ১৩তম...)' } },
        { id: 'opt-3', text: { en: 'Only triplen harmonics (3rd, 9th, 15th...)', hi: 'केवल ट्रिपलेन हार्मोनिक्स (3rd, 9th, 15th...)', bn: 'শুধুমাত্র ট্রিপলেন হারমোনিক (৩য়, ৯ম, ১৫তম...)' } },
        { id: 'opt-4', text: { en: 'Sub-harmonics below 10 Hz only', hi: 'केवल 10 Hz से नीचे के उप-हार्मोनिक्स', bn: 'কেবল ১০ হার্জের নিচের সাব-হারমোনিক' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'For a p-pulse converter, the AC line characteristic current harmonics satisfy h = k·p ± 1 for integer k ≥ 1. For a 6-pulse bridge, p = 6, producing h = 6(1) ± 1 = 5th and 7th; h = 6(2) ± 1 = 11th and 13th; h = 6(3) ± 1 = 17th and 19th, etc. Triplen harmonics are trapped inside the 3-phase bridge.',
        hi: 'p-पल्स कन्वर्टर के लिए एसी लाइन हार्मोनिक्स h = k·p ± 1 होते हैं। 6-पल्स ब्रिज के लिए (p = 6): 5वीं, 7वीं, 11वीं, 13वीं... हार्मोनिक्स उत्पन्न होती हैं।',
        bn: 'p-পালস কনভার্টারের জন্য এসি লাইন হারমোনিক সূত্র হলো h = k·p ± ১। ৬-পালস ব্রিজের ক্ষেত্রে (p = ৬) তৈরি হয় ৫ম, ৭ম, ১১তম, ১৩তম ইত্যাদি হারমোনিক্স।'
      }
    },
    {
      id: 'mcq-ch12-l08-08',
      question: {
        en: 'A pure power factor correction capacitor bank is connected across an AC bus with harmonic distortion. Under what condition can severe harmonic resonance occur?',
        hi: 'हार्मोनिक विरूपण वाले एसी बस पर एक शुद्ध पावर फैक्टर सुधार कैपेसिटर बैंक जुड़ा हुआ है। किस स्थिति में गंभीर हार्मोनिक अनुनाद (Resonance) हो सकता है?',
        bn: 'হারমোনিকযুক্ত এসি লাইনে পাওয়ার ফ্যাক্টর কারেকশন ক্যাপাসিটর ব্যাংক বসালে কোন পরিস্থিতিতে মারাত্মক হারমোনিক রেজোন্যান্স সৃষ্টি হতে পারে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'When the inductive reactance of the supply transformer equals the capacitive reactance of the capacitor bank at a prominent harmonic frequency (e.g., 5th harmonic: 5ωL = 1/(5ωC))', hi: 'जब प्रमुख हार्मोनिक आवृत्ति पर ट्रांसफार्मर का प्रेरक प्रतिघात कैपेसिटर के धारितीय प्रतिघात के बराबर हो जाता है (5ωL = 1/(5ωC))', bn: 'যখন কোনো প্রধান হারমোনিক কম্পাঙ্কে সাপ্লাই ট্রান্সফরমারের ইন্ডাকট্যান্স ও ক্যাপাসিটরের রিঅ্যাক্ট্যান্স সমান হয়ে সমান্তরাল রেজোন্যান্স ঘটে (৫ωL = ১/(৫ωC))' } },
        { id: 'opt-2', text: { en: 'When the line voltage drops to zero', hi: 'जब लाइन वोल्टेज शून्य हो जाए', bn: 'যখন লাইন ভোল্টেজ শূন্যে নেমে আসে' } },
        { id: 'opt-3', text: { en: 'When the load power factor is exactly unity (1.0)', hi: 'जब लोड पावर फैक्टर ठीक 1.0 हो', bn: 'যখন লোডের পাওয়ার ফ্যাক্টর ঠিক ১.০ হয়' } },
        { id: 'opt-4', text: { en: 'Only when DC voltage is applied to the capacitor', hi: 'केवल जब कैपेसिटर पर डीसी वोल्टेज लगाया जाए', bn: 'শুধুমাত্র ক্যাপাসিটরে ডিসি ভোল্টেজ প্রয়োগ করলে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Parallel resonance occurs when the upstream transformer leakage inductance and the shunt capacitor bank form a parallel LC tank whose natural resonant frequency coincides with a major load harmonic frequency (e.g., 250 Hz for 5th harmonic). This creates a very high impedance tank that magnifies harmonic voltages and blows capacitor fuses.',
        hi: 'समानांतर अनुनाद तब होता है जब ट्रांसफार्मर का रिसाव प्रेरकत्व और शंट कैपेसिटर बैंक मिलकर एक ऐसा टैंक बनाते हैं जिसकी प्राकृतिक आवृत्ति लोड की प्रमुख हार्मोनिक आवृत्ति (जैसे 5वीं हार्मोनिक पर 250 Hz) से मेल खाती है। इससे वोल्टेज में भारी वृद्धि होती है।',
        bn: 'সাপ্লাই ট্রান্সফরমারের লিকেজ ইন্ডাকট্যান্স ও শান্ট ক্যাপাসিটরের প্রাকৃতিক রেজোন্যান্ট কম্পাঙ্ক যখন কোনো লোড হারমোনিকের (যেমন ৫ম হারমোনিক ২৫০ Hz) সাথে মিলে যায়, তখন প্যারালাল রেজোন্যান্সের ফলে মারাত্মক ওভার-ভোল্টেজ ও ক্যাপাসিটর বিস্ফোরণ ঘটে।'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-ch12-l08-01',
      title: {
        en: 'Non-Sinusoidal Waveform Fourier Spectrum & Triplen Neutral Accumulation',
        hi: 'गैर-ज्यावक्रीय तरंगरूप फूरियर स्पेक्ट्रम एवं ट्रिपलेन न्यूट्रल संचय',
        bn: 'নন-সাইনুসয়েডাল তরঙ্গ ফুরিয়ার স্পেকট্রাম ও ট্রিপলেন নিউট্রাল সঞ্চয়ন'
      },
      caption: {
        en: 'Decomposition of a distorted non-sinusoidal AC periodic waveform into fundamental, 3rd, 5th, and 7th harmonic Fourier sinusoids with zero-sequence neutral accumulation.',
        hi: 'विकृत एसी आवर्ती तरंग का मौलिक, 3rd, 5th, एवं 7th हार्मोनिक्स में फूरियर अपघटन एवं न्यूट्रल में ट्रिपलेन संचय।',
        bn: 'বিকৃত এসি তরঙ্গরূপের মৌলিক, ৩য়, ৫ম ও ৭ম হারমোনিক উপাংশে ফুরিয়ার বিশ্লেষণ এবং নিউট্রালে ট্রিপলেন হারমোনিক সঞ্চয়নের স্কিম্যাটিক।'
      },
      svgType: 'circuit-ch12-non-sinusoidal-harmonics'
    }
  ]
};
