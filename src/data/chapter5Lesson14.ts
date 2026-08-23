import { Lesson } from '../types';

export const LESSON_RESONANCE: Lesson = {
  id: 'lsn-ch5-resonance',
  topicId: 'ch5-resonance',
  chapterId: 'ch-alternating-current',
  order: 14,
  title: {
    en: 'Series & Parallel Resonance',
    hi: 'सीरीज एवं पैरेलल रेजोनेंस (अनुनाद)',
    bn: 'সিরিজ ও প্যারালাল রেজোন্যান্স (অনুনাদ)'
  },
  description: {
    en: 'Deep-dive into the fundamental phenomenon of electrical resonance in AC circuits: inductive and capacitive reactance cancellation, impedance extremes, current peaks and nulls, series voltage magnification, parallel tank dynamics, and comprehensive comparative analysis.',
    hi: 'एसी परिपथों में विद्युत अनुनाद (Resonance) की मौलिक परिघटना का गहन अध्ययन: इंडक्टिव एवं कैपेसिटिव रिएक्टेंस का निरस्तीकरण, प्रतिबाधा के चरम मान, धारा शिखर एवं न्यूनतम मान, सीरीज वोल्टेज प्रवर्धन, पैरेलल टैंक परिपथ और व्यापक तुलनात्मक विश्लेषण।',
    bn: 'এসি সার্কিটে বৈদ্যুতিক রেজোন্যান্সের (অনুনাদ) গভীর বিশ্লেষণ: ইন্ডাক্টিভ ও ক্যাপাসিটিভ রিঅ্যাকট্যান্সের পরস্পর বাতিল হওয়া, ইম্পিড্যান্সের চরম মান, কারেন্ট পিক ও মিনিমাম, সিরিজ ভোল্টেজ বিবর্ধন, প্যারালাল ট্যাঙ্ক সার্কিট এবং বিস্তারিত তুলনামূলক পর্যালোচনা।'
  },
  easyExplanation: {
    en: 'Resonance in an AC circuit occurs at a specific frequency where inductive reactance (which grows with frequency) exactly balances and cancels capacitive reactance (which drops with frequency). In a Series RLC circuit, this cancellation makes net reactance zero, lowering impedance to pure resistance (Z = R) and producing MAXIMUM current (Acceptor circuit). In a Parallel RLC/tank circuit, net reactive susceptance cancels, making impedance MAXIMUM and line current MINIMUM (Rejector circuit). In both cases, the circuit behaves purely resistively with Unity Power Factor (PF = 1.0).',
    hi: 'एसी परिपथ में अनुनाद (Resonance) उस विशिष्ट आवृत्ति पर होता है जहाँ इंडक्टिव रिएक्टेंस (जो आवृत्ति बढ़ने पर बढ़ता है) और कैपेसिटिव रिएक्टेंस (जो आवृत्ति बढ़ने पर घटता है) परिमाण में बिल्कुल बराबर होकर एक-दूसरे को निरस्त कर देते हैं। सीरीज RLC परिपथ में इस निरस्तीकरण से कुल प्रतिबाधा न्यूनतम (Z = R) और धारा अधिकतम हो जाती है (एक्सेप्टर परिपथ)। पैरेलल RLC परिपथ में प्रतिबाधा अधिकतम और कुल लाइन धारा न्यूनतम हो जाती है (रिजेक्टर परिपथ)। दोनों स्थितियों में परिपथ यूनिटी पावर फैक्टर (PF = 1.0) पर कार्य करता है।',
    bn: 'এসি সার্কিটে রেজোন্যান্স বা অনুনাদ ঘটে এমন এক নির্দিষ্ট কম্পাঙ্কে যেখানে ইন্ডাক্টিভ রিঅ্যাকট্যান্স (যা কম্পাঙ্ক বাড়লে বাড়ে) এবং ক্যাপাসিটিভ রিঅ্যাকট্যান্স (যা কম্পাঙ্ক বাড়লে কমে) পরস্পর সমান হয়ে একে অপরকে বাতিল করে দেয়। সিরিজ RLC সার্কিটে মোট ইম্পিড্যান্স সর্বনিম্ন (Z = R) এবং কারেন্ট সর্বোচ্চ হয় (এক্সেপ্টর সার্কিট)। অপরদিকে প্যারালাল RLC সার্কিটে ইম্পিড্যান্স সর্বোচ্চ এবং লাইন কারেন্ট সর্বনিম্ন হয় (রিজেক্টর সার্কিট)। উভয় ক্ষেত্রে সার্কিটটি ইউনিটি পাওয়ার ফ্যাক্টরে (PF = 1.0) বিশুদ্ধ রোধীর মতো আচরণ করে।'
  },
  detailedExplanation: {
    en: '1. The Physical Concept of Resonance:\nElectrical resonance occurs when an AC circuit containing both inductive (L) and capacitive (C) energy-storage elements exhibits equal and opposite reactive effects at a specific excitation frequency f_r. At this frequency, magnetic energy stored in the inductor and electric energy stored in the capacitor oscillate back and forth between each other at their natural oscillation rate, so the external AC supply needs to deliver only the active power dissipated by circuit resistance (R).\n\n2. Resonance Condition in Series RLC Circuit:\nIn a series RLC branch:\nZ = R + j(XL - XC) = R + j(2πfL - 1/(2πfC))\nResonance occurs when the imaginary part of total impedance equals zero:\nXL = XC  ==>  2πf_r L = 1 / (2πf_r C)\nSolving for resonant frequency f_r:\nf_r = 1 / (2π √(LC))  [Hz]\nAngular resonant frequency:\nω_r = 2π f_r = 1 / √(LC)  [rad/s]\n\n3. Series Resonance Characteristics (Acceptor Circuit):\n- Reactance: Net reactance X = XL - XC = 0 Ω.\n- Impedance: Minimum possible, purely resistive Z_0 = R ∠ 0° Ω.\n- Circuit Current: Maximum possible, I_0 = V / R (limited solely by resistance R, NOT infinite).\n- Phase Angle: φ = 0°, Current and supply voltage are in perfect phase.\n- Power Factor: Exactly unity, PF = cos(0°) = 1.0.\n- Reactive Power: Net reactive power Q = 0 VAR.\n- Voltage Magnification: While V_L and V_C are 180° out of phase and cancel across the source (VL + VC = 0), individual component voltages can be tens or hundreds of times larger than supply voltage V: |VL| = |VC| = Q · V.\n\n4. Resonance Condition in Parallel RLC / Tank Circuit:\nIn a parallel network of conductance G and susceptance B:\nY = G + j(BC - BL) = G + j(ωC - 1/(ωL))\nParallel resonance occurs when net reactive susceptance equals zero: B_net = 0 (BC = BL).\n- Resonant Frequency (Ideal parallel LC): f_r = 1 / (2π √(LC)).\n- For a practical coil (R in series with L) in parallel with ideal C:\nf_r = [1 / (2π)] · √[ (1/LC) - (R²/L²) ]\n\n5. Parallel Resonance Characteristics (Rejector Circuit):\n- Admittance: Minimum possible, Y_0 = G = C·R / L [Siemens].\n- Dynamic Impedance: Maximum possible, Z_0 = Rd = L / (C·R) [Ω].\n- Line Current from Supply: Minimum possible, I_0 = V / Rd.\n- Circulating Tank Current: High resonant currents circulate internally between L and C branches (Current Magnification: I_tank = Q · I_line).\n- Power Factor: Unity (PF = 1.0).\n\n6. Frequency Response & Regimes:\n- Below Resonance (f < f_r):\n  * Series: XC > XL ==> Capacitive dominant (Current leads voltage, Leading PF).\n  * Parallel: BL > BC ==> Inductive dominant (Line current lags voltage).\n- At Resonance (f = f_r):\n  * Series & Parallel: XL = XC / BC = BL ==> Purely resistive, PF = 1.0.\n- Above Resonance (f > f_r):\n  * Series: XL > XC ==> Inductive dominant (Current lags voltage, Lagging PF).\n  * Parallel: BC > BL ==> Capacitive dominant (Line current leads voltage).\n\n7. Comprehensive Series vs Parallel Resonance Comparison:\n- Minimum Impedance (Z = R) vs Maximum Impedance (Z = L/(CR)).\n- Maximum Line Current (I = V/R) vs Minimum Line Current (I = V/Rd).\n- Voltage Magnification (VL = VC = Q·V) vs Current Magnification (I_tank = Q·I_line).\n- Series is called "Acceptor Circuit" (passes desired f_r, rejects others).\n- Parallel is called "Rejector / Tank Circuit" (rejects f_r from line, passes all others).\n\n8. Common Pitfalls:\n- Assuming current at series resonance is always infinite; it is finite and strictly governed by I_0 = V / R.\n- Assuming parallel impedance is infinite in real circuits; practical coil resistance R bounds dynamic resistance to Rd = L / (C·R).\n- Confusing frequency behavior below f_r: series circuits are capacitive at low frequencies, while parallel circuits are inductive.',
    hi: '1. अनुनाद (Resonance) की भौतिक अवधारणा:\nविद्युत अनुनाद एसी परिपथ की वह स्थिति है जहाँ इंडक्टिव (L) और कैपेसिटिव (C) ऊर्जा-भंडारण घटकों के रिएक्टिव प्रभाव एक निश्चित आवृत्ति f_r पर बिल्कुल बराबर और विपरीत होकर निरस्त हो जाते हैं। इस आवृत्ति पर इंडक्टर और कैपेसिटर के मध्य ऊर्जा का आंतरिक दोलन होता है और स्रोत को केवल प्रतिरोध (R) में नष्ट होने वाली शक्ति देनी पड़ती है।\n\n2. सीरीज अनुनाद की शर्तें:\nसीरीज RLC परिपथ में कुल प्रतिबाधा Z = R + j(XL - XC)।\nअनुनाद पर: XL = XC ==> 2πf_r L = 1 / (2πf_r C)\nअनुनादी आवृत्ति: f_r = 1 / (2π √(LC)) [Hz]\n\n3. सीरीज अनुनाद की विशेषताएं (एक्सेप्टर परिपथ):\n- शुद्ध रिएक्टेंस: X = XL - XC = 0 Ω।\n- प्रतिबाधा: न्यूनतम (Z_0 = R), शुद्ध प्रतिरोधी।\n- धारा: अधिकतम (I_0 = V / R)।\n- पावर फैक्टर: 1.0 (यूनिटी)।\n- वोल्टेज प्रवर्धन: VL = VC = Q · V (सप्लाई वोल्टेज से कई गुना अधिक हो सकता है)।\n\n4. पैरेलल अनुनाद की शर्तें (रिजेक्टर परिपथ):\nप्रवेश्यता Y = G + j(BC - BL)।\nअनुनाद पर: BC = BL ==> कुल ससेप्टेंस शून्य।\nगतिशील प्रतिरोध: Rd = L / (C · R)।\n\n5. पैरेलल अनुनाद की विशेषताएं:\n- प्रवेश्यता: न्यूनतम (Y_0 = G)।\n- प्रतिबाधा: अधिकतम (Z_0 = Rd = L / (CR))।\n- स्रोत धारा: न्यूनतम (I_0 = V / Rd)।\n- टैंक धारा: L और C के बीच उच्च धारा दोलन (करंट प्रवर्धन)।\n- पावर फैक्टर: 1.0 (यूनिटी)।\n\n6. आवृत्ति क्षेत्र (Regimes):\n- f < f_r: सीरीज परिपथ कैपेसिटिव (लीडिंग PF) होता है; पैरेलल परिपथ इंडक्टिव होता है।\n- f = f_r: शुद्ध प्रतिरोधी, PF = 1.0।\n- f > f_r: सीरीज परिपथ इंडक्टिव (लैगिंग PF) होता है; पैरेलल परिपथ कैपेसिटिव होता है।\n\n7. सीरीज बनाम पैरेलल तुलना:\n- सीरीज: न्यूनतम प्रतिबाधा (R), अधिकतम धारा, वोल्टेज प्रवर्धन (एक्सेप्टर)।\n- पैरेलल: अधिकतम प्रतिबाधा (L/CR), न्यूनतम धारा, करंट प्रवर्धन (रिजेक्टर)।',
    bn: '১. রেজোন্যান্সের ভৌত ধারণা:\nবৈদ্যুতিক রেজোন্যান্স হলো এমন একটি অবস্থা যেখানে একটি নির্দিষ্ট কম্পাঙ্ক f_r-এ ইন্ডাক্টর (L) ও ক্যাপাসিটরের (C) প্রতিক্রিয়াশীল প্রভাব সমান ও বিপরীত হয়ে পরস্পরকে সম্পূর্ণ নাকচ করে দেয়। ফলে সার্কিটে কোনো নেট রিঅ্যাকট্যান্স থাকে না এবং সার্কিটটি বিশুদ্ধ রোধের ন্যায় আচরণ করে।\n\n২. সিরিজ রেজোন্যান্সের শর্ত:\nZ = R + j(XL - XC)।\nরেজোন্যান্সে: XL = XC ==> 2πf_r L = 1 / (2πf_r C)\nরেজোন্যান্ট কম্পাঙ্ক: f_r = 1 / (2π √(LC)) [Hz]\n\n৩. সিরিজ রেজোন্যান্সের বৈশিষ্ট্য (এক্সেপ্টর সার্কিট):\n- নেট রিঅ্যাকট্যান্স: X = 0 Ω।\n- ইম্পিড্যান্স: সর্বনিম্ন (Z_0 = R)।\n- কারেন্ট: সর্বোচ্চ (I_0 = V / R)।\n- পাওয়ার ফ্যাক্টর: ইউনিটি (PF = 1.0)।\n- ভোল্টেজ বিবর্ধন: VL = VC = Q · V।\n\n৪. প্যারালাল রেজোন্যান্সের শর্ত (রিজেক্টর সার্কিট):\nY = G + j(BC - BL)।\nরেজোন্যান্সে: BC = BL ==> নেট সাসিপ্ট্যান্স শূন্য।\nডায়নামিক রোধ: Rd = L / (C · R)।\n\n৫. প্যারালাল রেজোন্যান্সের বৈশিষ্ট্য:\n- অ্যাডমিট্যান্স: সর্বনিম্ন (Y = G)।\n- ইম্পিড্যান্স: সর্বোচ্চ (Z_0 = Rd = L / (CR))।\n- লাইন কারেন্ট: সর্বনিম্ন (I_0 = V / Rd)।\n- ট্যাঙ্ক কারেন্ট: L ও C এর মাঝে উচ্চ কারেন্ট সঞ্চালন (কারেন্ট বিবর্ধন)।\n- পাওয়ার ফ্যাক্টর: ইউনিটি (PF = 1.0)।\n\n৬. কম্পাঙ্ক আচরণ:\n- f < f_r: সিরিজ সার্কিট ক্যাপাসিটিভ (লিডিং); প্যারালাল সার্কিট ইন্ডাক্টিভ।\n- f = f_r: বিশুদ্ধ রোধীয়, PF = 1.0।\n- f > f_r: সিরিজ সার্কিট ইন্ডাক্টিভ (ল্যাগিং); প্যারালাল সার্কিট ক্যাপাসিটিভ।\n\n৭. সিরিজ বনাম প্যারালাল তুলনা:\n- সিরিজ: সর্বনিম্ন ইম্পিড্যান্স, সর্বোচ্চ কারেন্ট, ভোল্টেজ বিবর্ধন (এক্সেপ্টর)।\n- প্যারালাল: সর্বোচ্চ ইম্পিড্যান্স, সর্বনিম্ন লাইন কারেন্ট, কারেন্ট বিবর্ধন (রিজেক্টর)।'
  },
  formulas: [
    {
      symbol: 'f_r',
      expression: 'f_r = \\frac{1}{2\\pi\\sqrt{L \\cdot C}}',
      description: {
        en: 'Resonant Frequency for LC Circuits (Hertz, Hz)',
        hi: 'LC परिपथों के लिए अनुनादी आवृत्ति (Hertz, Hz)',
        bn: 'LC সার্কিটের রেজোন্যান্ট ফ্রিকোয়েন্সি (Hertz, Hz)'
      }
    },
    {
      symbol: '\\omega_r',
      expression: '\\omega_r = 2\\pi f_r = \\frac{1}{\\sqrt{L \\cdot C}}',
      description: {
        en: 'Angular Resonant Frequency (rad/s)',
        hi: 'कोणीय अनुनादी आवृत्ति (rad/s)',
        bn: 'কৌণিক রেজোন্যান্ট কম্পাঙ্ক (rad/s)'
      }
    },
    {
      symbol: 'Z_0(series)',
      expression: 'Z_0 = R \\angle 0^\\circ',
      description: {
        en: 'Minimum Impedance at Series Resonance (Purely Resistive, Ω)',
        hi: 'सीरीज अनुनाद पर न्यूनतम प्रतिबाधा (शुद्ध प्रतिरोधी, Ω)',
        bn: 'সিরিজ রেজোন্যান্সে সর্বনিম্ন ইম্পিড্যান্স (বিশুদ্ধ রোধীয়, Ω)'
      }
    },
    {
      symbol: 'I_0(series)',
      expression: 'I_0 = \\frac{V_{source}}{R}',
      description: {
        en: 'Maximum Circuit Current at Series Resonance (Amperes, A)',
        hi: 'सीरीज अनुनाद पर अधिकतम परिपथ धारा (Amperes, A)',
        bn: 'সিরিজ রেজোন্যান্সে সর্বোচ্চ সার্কিট কারেন্ট (Amperes, A)'
      }
    },
    {
      symbol: 'R_d(parallel)',
      expression: 'R_d = \\frac{L}{C \\cdot R}',
      description: {
        en: 'Dynamic Resistance / Maximum Impedance at Parallel Resonance (Ω)',
        hi: 'पैरेलल अनुनाद पर गतिशील प्रतिरोध / अधिकतम प्रतिबाधा (Ω)',
        bn: 'প্যারালাল রেজোন্যান্সে ডায়নামিক রোধ / সর্বোচ্চ ইম্পিড্যান্স (Ω)'
      }
    },
    {
      symbol: 'I_0(parallel)',
      expression: 'I_0 = \\frac{V}{R_d} = \\frac{V \\cdot C \\cdot R}{L}',
      description: {
        en: 'Minimum Supply Line Current at Parallel Resonance (Amperes, A)',
        hi: 'पैरेलल अनुनाद पर न्यूनतम आपूर्ति लाइन धारा (Amperes, A)',
        bn: 'প্যারালাল রেজোন্যান্সে সর্বনিম্ন সাপ্লাই লাইন কারেন্ট (Amperes, A)'
      }
    },
    {
      symbol: 'PF_{res}',
      expression: '\\cos \\varphi = 1.0 \\quad (\\varphi = 0^\\circ)',
      description: {
        en: 'Unity Power Factor at Resonance for Series & Parallel Circuits',
        hi: 'सीरीज एवं पैरेलल परिपथों हेतु अनुनाद पर यूनिटी पावर फैक्टर (PF = 1.0)',
        bn: 'সিরিজ ও প্যারালাল সার্কিটে রেজোন্যান্সে ইউনিটি পাওয়ার ফ্যাক্টর (PF = 1.0)'
      }
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch5-l14-1',
      problem: {
        en: 'A tuning circuit in an AM radio receiver uses an inductor with inductance L = 250 µH and a variable tuning capacitor set to C = 400 pF. Calculate: (a) The angular resonant frequency ω_r in rad/s, (b) The cyclic resonant frequency f_r in kHz.',
        hi: 'एक एएम रेडियो रिसीवर के ट्यूनिंग परिपथ में L = 250 µH का प्रेरक और C = 400 pF का परिवर्ती कैपेसिटर लगा है। गणना करें: (a) कोणीय अनुनादी आवृत्ति ω_r (rad/s में), (b) अनुनादी आवृत्ति f_r (kHz में)।',
        bn: 'একটি এএম রেডিও রিসিভারের টিউনিং সার্কিটে L = 250 µH আবেশক এবং C = 400 pF ধারক ব্যবহৃত হয়েছে। নির্ণয় করুন: (a) কৌণিক রেজোন্যান্ট কম্পাঙ্ক ω_r (rad/s), (b) রেজোন্যান্ট ফ্রিকোয়েন্সি f_r (kHz)।'
      },
      givenValues: {
        'Inductance (L)': '250 µH = 2.5 × 10⁻⁴ H',
        'Capacitance (C)': '400 pF = 4.0 × 10⁻¹⁰ F'
      },
      solution: {
        en: 'Step 1: Compute Product L · C\nL · C = (2.5 × 10⁻⁴ H) · (4.0 × 10⁻¹⁰ F) = 10.0 × 10⁻¹⁴ = 1.0 × 10⁻¹³ s²\n\nStep 2: Calculate Square Root √(L · C)\n√(L · C) = √(1.0 × 10⁻¹³) = √(10 × 10⁻¹⁴) = √10 × 10⁻⁷ = 3.162277 × 10⁻⁷ s\n\nStep 3: Calculate Angular Resonant Frequency ω_r\nω_r = 1 / (3.162277 × 10⁻⁷) = 3,162,277 rad/s = 3.162 × 10⁶ rad/s\n\nStep 4: Calculate Cyclic Resonant Frequency f_r\nf_r = ω_r / (2 · π) = 3,162,277 / 6.283185 = 503,292 Hz = 503.29 kHz\n(This lies squarely in the standard AM broadcast band 530 kHz - 1700 kHz).',
        hi: 'चरण 1: L × C गुणनफल\nL × C = 2.5 × 10⁻⁴ × 4.0 × 10⁻¹⁰ = 1.0 × 10⁻¹³ s²\n\nचरण 2: वर्गमूल √(L · C)\n√(L · C) = 3.1623 × 10⁻⁷ s\n\nचरण 3: कोणीय आवृत्ति ω_r\nω_r = 1 / (3.1623 × 10⁻⁷) = 3.162 × 10⁶ rad/s\n\nचरण 4: अनुनादी आवृत्ति f_r\nf_r = 3,162,277 / 2π = 503.29 kHz।',
        bn: 'ধাপ ১: L × C গুণফল\nL × C = 2.5 × 10⁻⁴ × 4.0 × 10⁻¹⁰ = 1.0 × 10⁻¹³ s²\n\nধাপ ২: বর্গমূল √(L · C)\n√(L · C) = 3.1623 × 10⁻⁷ s\n\nধাপ ৩: কৌণিক কম্পাঙ্ক ω_r\nω_r = 3.162 × 10⁶ rad/s\n\nধাপ ৪: রেজোন্যান্ট ফ্রিকোয়েন্সি f_r\nf_r = 3,162,277 / 2π = 503.29 kHz।'
      },
      finalAnswer: {
        en: 'ω_r = 3.162 × 10⁶ rad/s, f_r = 503.29 kHz',
        hi: 'ω_r = 3.162 × 10⁶ rad/s, f_r = 503.29 kHz',
        bn: 'ω_r = 3.162 × 10⁶ rad/s, f_r = 503.29 kHz'
      }
    },
    {
      id: 'ex-ch5-l14-2',
      problem: {
        en: 'A series RLC circuit has resistance R = 5 Ω, inductance L = 100 mH, and capacitance C = 10 µF connected across a 50 V rms variable-frequency AC supply. At resonance, determine: (a) Resonant frequency f_r, (b) Circuit impedance Z_0, (c) Resonant current I_0, (d) Voltage across the resistor V_R, (e) Inductive reactance XL and voltage across the inductor V_L, (f) Capacitive reactance XC and voltage across capacitor V_C, (g) Power factor and active power dissipated.',
        hi: 'एक सीरीज RLC परिपथ में R = 5 Ω, L = 100 mH, तथा C = 10 µF हैं जो 50 V rms परिवर्ती-आवृत्ति एसी स्रोत से जुड़े हैं। अनुनाद पर ज्ञात करें: (a) अनुनादी आवृत्ति f_r, (b) परिपथ प्रतिबाधा Z_0, (c) अनुनादी धारा I_0, (d) प्रतिरोधक पर वोल्टेज V_R, (e) प्रेरक पर वोल्टेज V_L, (f) संधारित्र पर वोल्टेज V_C, (g) पावर फैक्टर तथा सक्रिय शक्ति।',
        bn: 'একটি সিরিজ RLC সার্কিটে R = 5 Ω, L = 100 mH, এবং C = 10 µF একটি 50 V rms পরিবর্তনশীল কম্পাঙ্কের এসি উৎসের সাথে যুক্ত। রেজোন্যান্সে নির্ণয় করুন: (a) রেজোন্যান্ট ফ্রিকোয়েন্সি f_r, (b) ইম্পিড্যান্স Z_0, (c) রেজোন্যান্ট কারেন্ট I_0, (d) রোধকের ভোল্টেজ V_R, (e) আবেশকের ভোল্টেজ V_L, (f) ধারকের ভোল্টেজ V_C, (g) পাওয়ার ফ্যাক্টর ও সক্রিয় ক্ষমতা।'
      },
      givenValues: {
        'R': '5 Ω',
        'L': '100 mH = 0.100 H',
        'C': '10 µF = 10⁻⁵ F',
        'Supply Voltage (V)': '50 V rms'
      },
      solution: {
        en: 'Step 1: Calculate Resonant Frequency f_r\nL · C = 0.100 · 10⁻⁵ = 10⁻⁶ s²\n√(LC) = √(10⁻⁶) = 10⁻³ s = 0.001 s\nf_r = 1 / (2 · π · 10⁻³) = 1000 / (2π) = 159.155 Hz\n\nStep 2: Circuit Impedance at Resonance\nZ_0 = R + j(XL - XC) = 5 + j0 = 5.00 Ω (Purely resistive)\n\nStep 3: Resonant Current\nI_0 = V / Z_0 = 50 V / 5 Ω = 10.00 A\n\nStep 4: Voltage across Resistor\nV_R = I_0 · R = 10 A · 5 Ω = 50.0 V (= Supply Voltage V)\n\nStep 5: Reactances and Reactive Voltages\nXL = 2 · π · (159.155) · 0.100 = 100.0 Ω\nXC = 1 / (2 · π · 159.155 · 10⁻⁵) = 100.0 Ω (Confirming XL = XC = 100 Ω)\nVL = I_0 · XL = 10 A · 100 Ω = 1000.0 V = 1.00 kV\nVC = I_0 · XC = 10 A · 100 Ω = 1000.0 V = 1.00 kV\n*Note Voltage Magnification Factor: Q = VL / V = 1000 / 50 = 20! Inductor and capacitor voltages are 20 times the supply voltage!*\n\nStep 6: Power Factor & Power Dissipation\nPF = cos(0°) = 1.0 (Unity)\nP = I_0² · R = (10)² · 5 = 100 · 5 = 500.0 W\nReactive Power Q_net = I_0²(XL - XC) = 0 VAR.',
        hi: 'चरण 1: अनुनादी आवृत्ति f_r\nf_r = 1 / (2π √(0.1 × 10⁻⁵)) = 1000 / 2π = 159.15 Hz\n\nचरण 2: प्रतिबाधा Z_0\nZ_0 = R = 5.0 Ω\n\nचरण 3: अनुनादी धारा I_0\nI_0 = 50 / 5 = 10.0 A\n\nचरण 4: वोल्टेज वितरण\nV_R = 10 × 5 = 50 V\nXL = XC = 100 Ω\nVL = 10 × 100 = 1000 V (1 kV)\nVC = 10 × 100 = 1000 V (1 kV)\n(वोल्टेज प्रवर्धन Q = 1000 / 50 = 20)\n\nचरण 5: शक्ति एवं PF\nPF = 1.0, P = (10)² × 5 = 500 W।',
        bn: 'ধাপ ১: রেজোন্যান্ট ফ্রিকোয়েন্সি f_r\nf_r = 1000 / 2π = 159.15 Hz\n\nধাপ ২: ইম্পিড্যান্স Z_0 = R = 5.0 Ω\n\nধাপ ৩: কারেন্ট I_0 = 50 / 5 = 10.0 A\n\nধাপ ৪: ভোল্টেজ বিতরণ\nV_R = 50 V, XL = XC = 100 Ω\nVL = VC = 1000 V (1 kV) (বিবর্ধন ফ্যাক্টর Q = 20)\n\nধাপ ৫: পাওয়ার ও PF\nPF = 1.0, P = 500 W।'
      },
      finalAnswer: {
        en: 'f_r = 159.15 Hz, Z_0 = 5.0 Ω, I_0 = 10.0 A, V_R = 50 V, VL = VC = 1000 V, PF = 1.0, P = 500 W',
        hi: 'f_r = 159.15 Hz, Z_0 = 5.0 Ω, I_0 = 10.0 A, V_R = 50 V, VL = VC = 1000 V, PF = 1.0, P = 500 W',
        bn: 'f_r = 159.15 Hz, Z_0 = 5.0 Ω, I_0 = 10.0 A, V_R = 50 V, VL = VC = 1000 V, PF = 1.0, P = 500 W'
      }
    },
    {
      id: 'ex-ch5-l14-3',
      problem: {
        en: 'A series RLC circuit with R = 20 Ω, L = 50 mH, and C = 20 µF is driven at three test frequencies: (1) f1 = 100 Hz, (2) f2 = 159.15 Hz, and (3) f3 = 300 Hz. Determine: (a) The resonant frequency f_r of the circuit, (b) The circuit regime (capacitive, resonant, or inductive) and phase angle at each frequency.',
        hi: 'एक सीरीज RLC परिपथ (R = 20 Ω, L = 50 mH, C = 20 µF) को तीन आवृत्तियों पर संचालित किया जाता है: (1) f1 = 100 Hz, (2) f2 = 159.15 Hz, (3) f3 = 300 Hz। ज्ञात करें: (a) परिपथ की अनुनादी आवृत्ति f_r, (b) प्रत्येक आवृत्ति पर परिपथ की परिचालन स्थिति और फेज कोण।',
        bn: 'একটি সিরিজ RLC সার্কিট (R = 20 Ω, L = 50 mH, C = 20 µF) তিনটি ভিন্ন কম্পাঙ্কে চালনা করা হয়: (১) f1 = 100 Hz, (২) f2 = 159.15 Hz, (৩) f3 = 300 Hz। নির্ণয় করুন: (a) সার্কিটের রেজোন্যান্ট ফ্রিকোয়েন্সি f_r, (b) প্রতিটি কম্পাঙ্কে সার্কিটের চরিত্র (ক্যাপাসিটিভ, রেজোন্যান্ট, নাকি ইন্ডাক্টিভ) এবং ফেজ কোণ।'
      },
      givenValues: {
        'R': '20 Ω',
        'L': '50 mH = 0.050 H',
        'C': '20 µF = 2 × 10⁻⁵ F'
      },
      solution: {
        en: 'Step 1: Calculate Resonant Frequency f_r\nL · C = 0.050 · 2 × 10⁻⁵ = 10⁻⁶ s²\n√(LC) = 10⁻³ s\nf_r = 1 / (2π · 10⁻³) = 159.155 Hz\n\nStep 2: Evaluate at Frequency 1 (f1 = 100 Hz < f_r)\nXL(100) = 2 · π · 100 · 0.050 = 31.42 Ω\nXC(100) = 1 / (2 · π · 100 · 2×10⁻⁵) = 79.58 Ω\nX_net = 31.42 - 79.58 = -48.16 Ω (XC > XL)\nθ = tan⁻¹(-48.16 / 20) = -67.45°\nRegime: Capacitive Dominant (Current leads voltage by 67.45°, Leading PF = 0.383).\n\nStep 3: Evaluate at Frequency 2 (f2 = 159.15 Hz = f_r)\nXL(159.15) = 2 · π · 159.155 · 0.050 = 50.00 Ω\nXC(159.15) = 1 / (2 · π · 159.155 · 2×10⁻⁵) = 50.00 Ω\nX_net = 50.00 - 50.00 = 0 Ω\nθ = 0.00°\nRegime: Resonant Condition (Purely resistive, Unity PF = 1.0, minimum impedance Z = 20 Ω).\n\nStep 4: Evaluate at Frequency 3 (f3 = 300 Hz > f_r)\nXL(300) = 2 · π · 300 · 0.050 = 94.25 Ω\nXC(300) = 1 / (2 · π · 300 · 2×10⁻⁵) = 26.53 Ω\nX_net = 94.25 - 26.53 = +67.72 Ω (XL > XC)\nθ = tan⁻¹(+67.72 / 20) = +73.55°\nRegime: Inductive Dominant (Current lags voltage by 73.55°, Lagging PF = 0.283).',
        hi: 'चरण 1: अनुनादी आवृत्ति f_r\nf_r = 159.15 Hz\n\nचरण 2: f1 = 100 Hz पर (f < f_r)\nXL = 31.42 Ω, XC = 79.58 Ω (XC > XL)\nस्थिति: कैपेसिटिव प्रधान (θ = -67.45°, लीडिंग PF)।\n\nचरण 3: f2 = 159.15 Hz पर (f = f_r)\nXL = XC = 50.0 Ω (X = 0)\nस्थिति: अनुनाद (θ = 0°, यूनिटी PF = 1.0)।\n\nचरण 4: f3 = 300 Hz पर (f > f_r)\nXL = 94.25 Ω, XC = 26.53 Ω (XL > XC)\nस्थिति: इंडक्टिव प्रधान (θ = +73.55°, लैगिंग PF)।',
        bn: 'ধাপ ১: রেজোন্যান্ট ফ্রিকোয়েন্সি f_r = 159.15 Hz\n\nধাপ ২: f1 = 100 Hz এ (f < f_r)\nXL = 31.42 Ω, XC = 79.58 Ω (XC > XL)\nআচরণ: ক্যাপাসিটিভ প্রধান (θ = -67.45°, লিডিং PF)।\n\nধাপ ৩: f2 = 159.15 Hz এ (f = f_r)\nXL = XC = 50.0 Ω (X = 0)\nআচরণ: রেজোন্যান্স (θ = 0°, ইউনিটি PF = 1.0)।\n\nধাপ ৪: f3 = 300 Hz এ (f > f_r)\nXL = 94.25 Ω, XC = 26.53 Ω (XL > XC)\nআচরণ: ইন্ডাক্টিভ প্রধান (θ = +73.55°, ল্যাগিং PF)।'
      },
      finalAnswer: {
        en: 'f_r = 159.15 Hz. At 100 Hz: Capacitive (θ = -67.45°); At 159.15 Hz: Resonant (θ = 0°); At 300 Hz: Inductive (θ = +73.55°)',
        hi: 'f_r = 159.15 Hz। 100 Hz पर: कैपेसिटिव (θ = -67.45°); 159.15 Hz पर: अनुनाद (θ = 0°); 300 Hz पर: इंडक्टिव (θ = +73.55°)',
        bn: 'f_r = 159.15 Hz। 100 Hz এ: ক্যাপাসিটিভ (θ = -67.45°); 159.15 Hz এ: রেজোন্যান্স (θ = 0°); 300 Hz এ: ইন্ডাক্টিভ (θ = +73.55°)'
      }
    },
    {
      id: 'ex-ch5-l14-4',
      problem: {
        en: 'A practical parallel resonant circuit consists of an inductive coil having resistance R = 10 Ω and inductance L = 20 mH connected in parallel with a capacitor C = 5 µF across a 100 V AC supply. Calculate: (a) The resonant frequency f_r of the practical tank circuit, (b) The dynamic resistance Rd at resonance, (c) The minimum line current I_0 supplied by the source, (d) The circulating tank current through the capacitor branch.',
        hi: 'एक व्यावहारिक पैरेलल अनुनादी परिपथ में R = 10 Ω और L = 20 mH की एक कॉइल C = 5 µF के कैपेसिटर के समानांतर 100 V एसी स्रोत से जुड़ी है। गणना करें: (a) व्यावहारिक टैंक परिपथ की अनुनादी आवृत्ति f_r, (b) अनुनाद पर गतिशील प्रतिरोध Rd, (c) स्रोत द्वारा आपूर्ति की गई न्यूनतम लाइन धारा I_0, (d) कैपेसिटर शाखा से प्रवाहित होने वाली परिसंचारी टैंक धारा।',
        bn: 'একটি বাস্তব প্যারালাল রেজোন্যান্ট সার্কিটে R = 10 Ω ও L = 20 mH এর একটি কয়েল C = 5 µF ধারকের সাথে সমান্তরালে 100 V এসি উৎসের সাথে যুক্ত। নির্ণয় করুন: (a) ট্যাঙ্ক সার্কিটের রেজোন্যান্ট ফ্রিকোয়েন্সি f_r, (b) রেজোন্যান্সে ডায়নামিক রোধ Rd, (c) সোর্স থেকে প্রবাহিত সর্বনিম্ন লাইন কারেন্ট I_0, (d) ধারক শাখার মধ্য দিয়ে প্রবাহিত অভ্যন্তরীণ ট্যাঙ্ক কারেন্ট।'
      },
      givenValues: {
        'R': '10 Ω',
        'L': '20 mH = 0.020 H',
        'C': '5 µF = 5 × 10⁻⁶ F',
        'Supply Voltage (V)': '100 V rms'
      },
      solution: {
        en: 'Step 1: Calculate Resonant Frequency f_r (Practical Coil Tank)\n1 / (L · C) = 1 / (0.020 · 5 × 10⁻⁶) = 1 / 10⁻⁷ = 10,000,000 = 10⁷ s⁻²\nR² / L² = (10)² / (0.020)² = 100 / 0.0004 = 250,000 = 0.25 × 10⁶ s⁻²\nDifference: (1/LC) - (R²/L²) = 10,000,000 - 250,000 = 9,750,000 s⁻²\nSquare Root: √9,750,000 = 3,122.499 rad/s\nf_r = 3,122.499 / (2 · π) = 496.96 Hz\n(Note: Ideal LC resonant frequency would be 1/(2π√LC) = 503.29 Hz; coil resistance slightly lowers the parallel resonant frequency).\n\nStep 2: Calculate Dynamic Resistance Rd\nRd = L / (C · R) = 0.020 / (5 × 10⁻⁶ · 10) = 0.020 / (5 × 10⁻⁵) = 400.0 Ω\n\nStep 3: Calculate Minimum Source Line Current I_0\nI_0 = V / Rd = 100 V / 400 Ω = 0.250 A = 250 mA (Purely in-phase with V, PF = 1.0)\n\nStep 4: Calculate Circulating Tank Current in Capacitor Branch\nXC = 1 / (2 · π · 496.96 · 5 × 10⁻⁶) = 64.05 Ω\nI_C = V / XC = 100 V / 64.05 Ω = 1.561 A\n*Note Current Magnification: Circulating branch current (1.561 A) is over 6.2 times larger than the supply line current (0.250 A)!*',
        hi: 'चरण 1: व्यावहारिक टैंक अनुनादी आवृत्ति f_r\n1/LC = 10⁷, R²/L² = 2.5 × 10⁵\nω_r = √(10⁷ - 2.5×10⁵) = 3122.5 rad/s\nf_r = 3122.5 / 2π = 496.96 Hz\n\nचरण 2: गतिशील प्रतिरोध Rd\nRd = L / (CR) = 0.020 / (5×10⁻⁶ × 10) = 400.0 Ω\n\nचरण 3: न्यूनतम लाइन धारा I_0\nI_0 = 100 / 400 = 0.25 A (250 mA)\n\nचरण 4: परिसंचारी कैपेसिटर धारा I_C\nXC = 64.05 Ω\nI_C = 100 / 64.05 = 1.561 A (लाइन धारा से 6.2 गुना अधिक!)।',
        bn: 'ধাপ ১: বাস্তব ট্যাঙ্ক রেজোন্যান্ট ফ্রিকোয়েন্সি f_r\nω_r = √(10⁷ - 2.5×10⁵) = 3122.5 rad/s\nf_r = 3122.5 / 2π = 496.96 Hz\n\nধাপ ২: ডায়নামিক রোধ Rd\nRd = L / (CR) = 400.0 Ω\n\nধাপ ৩: সর্বনিম্ন লাইন কারেন্ট I_0\nI_0 = 100 / 400 = 0.25 A (250 mA)\n\nধাপ ৪: অভ্যন্তরীণ ট্যাঙ্ক কারেন্ট I_C\nI_C = 100 / 64.05 = 1.561 A (লাইন কারেন্টের চেয়ে ৬.২ গুণ বড়)।'
      },
      finalAnswer: {
        en: 'f_r = 496.96 Hz, Rd = 400.0 Ω, I_0 = 0.250 A (250 mA), I_C = 1.561 A (Current magnification = 6.24)',
        hi: 'f_r = 496.96 Hz, Rd = 400.0 Ω, I_0 = 0.250 A (250 mA), I_C = 1.561 A (करंट प्रवर्धन = 6.24)',
        bn: 'f_r = 496.96 Hz, Rd = 400.0 Ω, I_0 = 0.250 A (250 mA), I_C = 1.561 A (কারেন্ট বিবর্ধন = ৬.২৪)'
      }
    }
  ],
  importantPoints: {
    en: [
      'Series resonance produces minimum impedance (Z = R) and maximum current; it is called an Acceptor Circuit.',
      'Parallel resonance produces maximum dynamic impedance (Rd = L/(CR)) and minimum line current; it is called a Rejector Circuit.',
      'At resonance, the power factor of both series and parallel circuits is strictly unity (PF = 1.0) because net reactance/susceptance is zero.',
      'Below resonance (f < f_r), series circuits are capacitive-dominant (leading PF) and parallel circuits are inductive-dominant.',
      'Above resonance (f > f_r), series circuits are inductive-dominant (lagging PF) and parallel circuits are capacitive-dominant.',
      'Series resonance allows severe Voltage Magnification (VL = VC = Q·V), whereas parallel resonance allows severe Current Magnification (I_tank = Q·I_line).'
    ],
    hi: [
      'सीरीज अनुनाद न्यूनतम प्रतिबाधा (Z = R) और अधिकतम धारा उत्पन्न करता है; इसे एक्सेप्टर परिपथ कहते हैं।',
      'पैरेलल अनुनाद अधिकतम गतिशील प्रतिबाधा (Rd = L/(CR)) और न्यूनतम लाइन धारा उत्पन्न करता है; इसे रिजेक्टर परिपथ कहते हैं।',
      'अनुनाद पर सीरीज और पैरेलल दोनों परिपथों का पावर फैक्टर निश्चित रूप से 1.0 (यूनिटी) होता है।',
      'अनुनादी आवृत्ति से कम (f < f_r) पर सीरीज परिपथ कैपेसिटिव तथा पैरेलल परिपथ इंडक्टिव होता है।',
      'अनुनादी आवृत्ति से अधिक (f > f_r) पर सीरीज परिपथ इंडक्टिव तथा पैरेलल परिपथ कैपेसिटिव होता है।',
      'सीरीज अनुनाद में वोल्टेज प्रवर्धन (VL = VC = Q·V) और पैरेलल अनुनाद में करंट प्रवर्धन (I_tank = Q·I_line) होता है।'
    ],
    bn: [
      'সিরিজ রেজোন্যান্সে সর্বনিম্ন ইম্পিড্যান্স (Z = R) এবং সর্বোচ্চ কারেন্ট পাওয়া যায়; একে এক্সেপ্টর সার্কিট বলে।',
      'প্যারালাল রেজোন্যান্সে সর্বোচ্চ ডায়নামিক ইম্পিড্যান্স (Rd = L/(CR)) এবং সর্বনিম্ন লাইন কারেন্ট পাওয়া যায়; একে রিজেক্টর সার্কিট বলে।',
      'রেজোন্যান্সে উভয় সার্কিটের পাওয়ার ফ্যাক্টর সবসময় ইউনিটি (PF = 1.0) হয়।',
      'রেজোন্যান্ট কম্পাঙ্কের নিচে (f < f_r) সিরিজ সার্কিট ক্যাপাসিটিভ এবং প্যারালাল সার্কিট ইন্ডাক্টিভ আচরণ করে।',
      'রেজোন্যান্ট কম্পাঙ্কের উপরে (f > f_r) সিরিজ সার্কিট ইন্ডাক্টিভ এবং প্যারালাল সার্কিট ক্যাপাসিটিভ আচরণ করে।',
      'সিরিজ রেজোন্যান্সে ভোল্টেজ বিবর্ধন (VL = VC = Q·V) এবং প্যারালাল রেজোন্যান্সে কারেন্ট বিবর্ধন (I_tank = Q·I_line) ঘটে।'
    ]
  },
  practicalApplications: {
    en: [
      'Radio and Television Receivers: Series and parallel LC resonant tanks select desired carrier frequencies while rejecting adjacent interfering channels.',
      'Induction Heating Inverters: Series and parallel resonant converters maximize power delivery to metal workpieces with zero-voltage-switching (ZVS) efficiency.',
      'Wireless Power Transfer (Qi Charging): High-Q series-parallel resonant magnetic coils transfer energy efficiently across air gaps.',
      'Harmonic Trap Filters: Parallel resonant trap filters block specific harmonic distortion frequencies (e.g. 5th and 7th harmonics) from polluting the electrical grid.'
    ],
    hi: [
      'रेडियो एवं टीवी रिसीवर: सीरीज और पैरेलल ट्यून्ड परिपथ वांछित सिग्नल आवृत्ति का चयन करते हैं और अन्य चैनलों को अस्वीकार करते हैं।',
      'इंडक्शन हीटिंग इनवर्टर: शून्य वोल्टेज स्विचिंग (ZVS) दक्षता के साथ धातु को गर्म करने के लिए अनुनादी कन्वर्टर का उपयोग।',
      'वायरलेस पावर ट्रांसफर: उच्च-Q अनुनादी कॉइल्स हवा के माध्यम से वायरलेस चार्जिंग में ऊर्जा स्थानांतरित करती हैं।',
      'हार्मोनिक ट्रैप फिल्टर: पावर ग्रिड से विशिष्ट अवांछित हार्मोनिक आवृत्तियों को हटाने के लिए पैरेलल ट्रैप फिल्टर।'
    ],
    bn: [
      'রেডিও ও টেলিভিশন রিসিভার: সিরিজ ও প্যারালাল রেজোন্যান্ট সার্কিটের মাধ্যমে কাঙ্ক্ষিত স্টেশন নির্বাচন এবং অনাকাঙ্ক্ষিত চ্যানেল বর্জন।',
      'ইন্ডাকশন হিটিং ইনভার্টার: উচ্চ দক্ষতায় ধাতু উত্তপ্ত করার জন্য রেজোন্যান্ট পাওয়ার ইলেকট্রনিক্স সার্কিট।',
      'ওয়্যারলেস পাওয়ার ট্রান্সফার: উচ্চ-Q রেজোন্যান্ট ম্যাগনেটিক কয়েলের মাধ্যমে দূরবর্তী তারবিহীন চার্জিং।',
      'হারমোনিক ট্র্যাপ ফিল্টার: পাওয়ার গ্রিড থেকে ক্ষতিকর হারমোনিক্স অপসারণে প্যারালাল রেজোন্যান্ট ফিল্টার।'
    ]
  },
  commonMistakes: {
    en: [
      'Believing that series resonance causes infinite current. In reality, the current is finite and strictly limited by the total loop resistance: I_0 = V / R.',
      'Believing that parallel resonance has infinite impedance in real hardware. Coil winding resistance (R) causes finite dynamic resistance Rd = L / (C·R).',
      'Ignoring voltage magnification in high-Q series circuits: capacitors and inductors can easily breakdown from dielectric overvoltage (VL = VC = Q·V) even on low supply voltages.',
      'Confusing the response below resonance: a series RLC circuit is capacitive at low frequencies (XC is large), NOT inductive.'
    ],
    hi: [
      'यह मान लेना कि सीरीज अनुनाद पर धारा अनंत हो जाती है। वास्तव में धारा परिपथ के कुल प्रतिरोध (R) द्वारा सीमित रहती है: I = V / R।',
      'यह सोचना कि वास्तविक पैरेलल परिपथ में प्रतिबाधा अनंत होती है। कॉइल के आंतरिक प्रतिरोध के कारण यह Rd = L / (CR) तक सीमित रहती है।',
      'सीरीज अनुनाद में वोल्टेज प्रवर्धन (VL = VC = Q·V) की उपेक्षा करना, जिससे कम सप्लाई वोल्टेज पर भी कैपेसिटर का ब्रेकडाउन हो सकता है।',
      'अनुनाद से कम आवृत्ति पर भ्रमित होना: सीरीज परिपथ कम आवृत्ति पर कैपेसिटिव होता है, इंडक्टिव नहीं।'
    ],
    bn: [
      'মনে করা যে সিরিজ রেজোন্যান্সে কারেন্ট অসীম হয়। প্রকৃতপক্ষে কারেন্ট সার্কিটের রোধ দ্বারা নির্দিষ্ট সীমার মধ্যে থাকে: I = V / R।',
      'বাস্তব প্যারালাল সার্কিটে ইম্পিড্যান্স অসীম মনে করা। কয়েলের অভ্যন্তরীণ রোধের কারণে এটি Rd = L / (CR) দ্বারা নির্ধারিত হয়।',
      'উচ্চ-Q সিরিজ সার্কিটে ভোল্টেজ বিবর্ধন অগ্রাহ্য করা, যার ফলে কম ভোল্টেজ উৎসেও ক্যাপাসিটর নষ্ট হতে পারে।',
      'কম্পাঙ্কের আচরণে বিভ্রান্ত হওয়া: রেজোন্যান্ট কম্পাঙ্কের নিচে সিরিজ সার্কিট ক্যাপাসিটিভ আচরণ করে।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch5-l14-1',
      question: {
        en: 'At series resonance, the total impedance of a series RLC circuit is:',
        hi: 'सीरीज अनुनाद पर, एक सीरीज RLC परिपथ की कुल प्रतिबाधा होती है:',
        bn: 'সিরিজ রেজোন্যান্সে একটি সিরিজ RLC সার্কিটের মোট ইম্পিড্যান্স হয়:'
      },
      options: [
        { id: 'opt-a', text: { en: 'Zero (0 Ω)', hi: 'शून्य (0 Ω)', bn: 'শূন্য (0 Ω)' } },
        { id: 'opt-b', text: { en: 'Minimum and equal to R', hi: 'न्यूनतम और R के बराबर', bn: 'সর্বনিম্ন এবং R এর সমান' } },
        { id: 'opt-c', text: { en: 'Maximum and equal to L/(CR)', hi: 'अधिकतम और L/(CR) के बराबर', bn: 'সর্বোচ্চ এবং L/(CR) এর সমান' } },
        { id: 'opt-d', text: { en: 'Infinite (∞ Ω)', hi: 'अनंत (∞ Ω)', bn: 'অসীম (∞ Ω)' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'At series resonance, XL = XC so net reactance is zero. The impedance reaches its minimum value Z_0 = R ∠ 0° Ω and is purely resistive.',
        hi: 'सीरीज अनुनाद पर XL = XC होता है जिससे नेट रिएक्टेंस शून्य हो जाता है और प्रतिबाधा न्यूनतम Z = R हो जाती है।',
        bn: 'সিরিজ রেজোন্যান্সে XL = XC হওয়ায় নেট রিঅ্যাকট্যান্স শূন্য হয় এবং ইম্পিড্যান্স সর্বনিম্ন Z = R হয়।'
      }
    },
    {
      id: 'mcq-ch5-l14-2',
      question: {
        en: 'If the supply frequency f to a series RLC circuit is LESS than the resonant frequency f_r (f < f_r), the circuit behaves as:',
        hi: 'यदि एक सीरीज RLC परिपथ की आपूर्ति आवृत्ति f अनुनादी आवृत्ति f_r से कम (f < f_r) है, तो परिपथ व्यवहार करता है:',
        bn: 'যদি একটি সিরিজ RLC সার্কিটের সাপ্লাই ফ্রিকোয়েন্সি f রেজোন্যান্ট ফ্রিকোয়েন্সি f_r এর চেয়ে কম (f < f_r) হয়, তবে সার্কিটটি কেমন আচরণ করে?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Capacitive dominant (Current leads voltage)', hi: 'कैपेसिटिव प्रधान (धारा वोल्टेज से लीड करती है)', bn: 'ক্যাপাসিটিভ প্রধান (কারেন্ট ভোল্টেজের চেয়ে এগিয়ে থাকে)' } },
        { id: 'opt-b', text: { en: 'Inductive dominant (Current lags voltage)', hi: 'इंडक्टिव प्रधान (धारा वोल्टेज से लैग करती है)', bn: 'ইন্ডাক্টিভ প্রধান (কারেন্ট ভোল্টেজের চেয়ে পিছিয়ে থাকে)' } },
        { id: 'opt-c', text: { en: 'Purely resistive (PF = 1.0)', hi: 'शुद्ध प्रतिरोधी (PF = 1.0)', bn: 'বিশুদ্ধ রোধীয় (PF = 1.0)' } },
        { id: 'opt-d', text: { en: 'Open circuit with zero current', hi: 'शून्य धारा के साथ ओपन सर्किट', bn: 'ওপেন সার্কিট' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'When f < f_r, XC = 1/(2πfC) becomes larger than XL = 2πfL. The net reactance is capacitive (negative), causing circuit current to lead supply voltage.',
        hi: 'जब f < f_r होता है, तो XC > XL हो जाता है। अतः परिपथ कैपेसिटिव प्रधान व्यवहार करता है और धारा वोल्टेज से लीड करती है।',
        bn: 'যখন f < f_r হয়, তখন XC > XL হয়। ফলে সার্কিটটি ক্যাপাসিটিভ প্রধান আচরণ করে এবং কারেন্ট ভোল্টেজকে লিড করে।'
      }
    },
    {
      id: 'mcq-ch5-l14-3',
      question: {
        en: 'In an idealized parallel LC tank circuit at resonance, the dynamic impedance Rd and supply line current I_line are respectively:',
        hi: 'एक आदर्श पैरेलल LC टैंक परिपथ में अनुनाद पर, गतिशील प्रतिबाधा Rd और आपूर्ति लाइन धारा I_line क्रमशः होती हैं:',
        bn: 'একটি আদর্শ প্যারালাল LC ট্যাঙ্ক সার্কিটে রেজোন্যান্সে ডায়নামিক ইম্পিড্যান্স Rd এবং সাপ্লাই লাইন কারেন্ট I_line যথাক্রমে কেমন হয়?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Minimum impedance, Maximum line current', hi: 'न्यूनतम प्रतिबाधा, अधिकतम लाइन धारा', bn: 'সর্বনিম্ন ইম্পিড্যান্স, সর্বোচ্চ লাইন কারেন্ট' } },
        { id: 'opt-b', text: { en: 'Maximum impedance (L/CR), Minimum line current', hi: 'अधिकतम प्रतिबाधा (L/CR), न्यूनतम लाइन धारा', bn: 'সর্বোচ্চ ইম্পিড্যান্স (L/CR), সর্বনিম্ন লাইন কারেন্ট' } },
        { id: 'opt-c', text: { en: 'Zero impedance, Infinite line current', hi: 'शून्य प्रतिबाधा, अनंत लाइन धारा', bn: 'শূন্য ইম্পিড্যান্স, অসীম লাইন কারেন্ট' } },
        { id: 'opt-d', text: { en: 'Purely inductive impedance, Zero active power', hi: 'शुद्ध इंडक्टिव प्रतिबाधा, शून्य सक्रिय शक्ति', bn: 'বিশুদ্ধ ইন্ডাক্টিভ ইম্পিড্যান্স' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'A parallel resonant network is a Rejector Circuit: total admittance is minimized (Y = G), resulting in maximum dynamic impedance Rd = L / (C·R) and minimum supply line current I_0 = V / Rd.',
        hi: 'पैरेलल अनुनादी परिपथ एक रिजेक्टर परिपथ है: प्रतिबाधा अधिकतम (Rd = L/(CR)) और लाइन धारा न्यूनतम होती है।',
        bn: 'প্যারালাল রেজোন্যান্ট সার্কিট একটি রিজেক্টর সার্কিট: এর ইম্পিড্যান্স সর্বোচ্চ (Rd = L/(CR)) এবং লাইন কারেন্ট সর্বনিম্ন হয়।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch5-l14-1',
      question: {
        en: 'A series RLC circuit consists of R = 8 Ω, L = 0.5 H, and a variable capacitor C connected across a 230 V, 50 Hz AC mains. Determine: (a) The capacitance value C required to achieve series resonance at 50 Hz, (b) The circuit current at resonance, (c) The voltage across the capacitor V_C at resonance.',
        hi: 'एक सीरीज RLC परिपथ में R = 8 Ω, L = 0.5 H और एक परिवर्ती कैपेसिटर C 230 V, 50 Hz एसी मेन्स से जुड़े हैं। ज्ञात करें: (a) 50 Hz पर सीरीज अनुनाद प्राप्त करने के लिए आवश्यक धारिता C, (b) अनुनाद पर परिपथ धारा, (c) अनुनाद पर कैपेसिटर के सिरों का वोल्टेज V_C।',
        bn: 'একটি সিরিজ RLC সার্কিটে R = 8 Ω, L = 0.5 H এবং একটি পরিবর্তনশীল ধারক C একটি 230 V, 50 Hz এসি উৎসের সাথে যুক্ত। নির্ণয় করুন: (a) 50 Hz এ সিরিজ রেজোন্যান্স পাওয়ার জন্য প্রয়োজনীয় ধারকত্ব C, (b) রেজোন্যান্সে সার্কিট কারেন্ট, (c) রেজোন্যান্সে ধারকের ভোল্টেজ V_C।'
      },
      hint: {
        en: 'At 50 Hz resonance: 2πfL = 1/(2πfC) ==> C = 1 / (4π² f² L). XL = 2π(50)(0.5) = 157.08 Ω. I_0 = 230 / 8 = 28.75 A. VC = I_0 · XC = 28.75 · 157.08 V.',
        hi: 'C = 1 / (4π² f² L)। 50 Hz पर XL = 157.08 Ω। I_0 = 230 / 8 = 28.75 A। VC = 28.75 × 157.08 V।',
        bn: 'C = 1 / (4π² f² L)। 50 Hz এ XL = 157.08 Ω। I_0 = 230 / 8 = 28.75 A। VC = 28.75 × 157.08 V।'
      },
      answerKey: {
        en: '(a) C = 1 / [ 4 · π² · (50)² · 0.5 ] = 1 / [ 4 · 9.8696 · 2500 · 0.5 ] = 1 / 49348 = 2.0265 × 10⁻⁵ F = 20.265 µF.\n(b) At resonance, Z_0 = R = 8.0 Ω.\nCircuit Current I_0 = V / R = 230 / 8 = 28.75 A.\n(c) Capacitive Reactance XC = 1 / (2π · 50 · 20.265×10⁻⁶) = 157.08 Ω (equal to XL = 2π(50)(0.5) = 157.08 Ω).\nVoltage across Capacitor V_C = I_0 · XC = 28.75 A · 157.08 Ω = 4,516.05 V = 4.516 kV.\n(Notice high voltage magnification: Q = 4516 / 230 = 19.63).',
        hi: '(a) C = 20.265 µF।\n(b) अनुनादी धारा I_0 = 28.75 A।\n(c) कैपेसिटर वोल्टेज V_C = 28.75 × 157.08 = 4,516.05 V (4.516 kV)।',
        bn: '(a) C = 20.265 µF।\n(b) রেজোন্যান্ট কারেন্ট I_0 = 28.75 A।\n(c) ক্যাপাসিটর ভোল্টেজ V_C = 4,516.05 V (4.516 kV)।'
      }
    },
    {
      id: 'pq-ch5-l14-2',
      question: {
        en: 'A parallel circuit comprises Branch 1 with a coil of resistance R = 5 Ω and inductance L = 40 mH, and Branch 2 with an ideal capacitor C = 25 µF connected across a 120 V AC source. Calculate: (a) The dynamic impedance Rd of the tank circuit at resonance, (b) The minimum line current supplied at resonance, (c) The active power absorbed by the circuit at resonance.',
        hi: 'एक समानांतर परिपथ में शाखा 1 में R = 5 Ω और L = 40 mH की एक कॉइल है, तथा शाखा 2 में C = 25 µF का आदर्श कैपेसिटर 120 V एसी स्रोत से जुड़ा है। गणना करें: (a) अनुनाद पर गतिशील प्रतिबाधा Rd, (b) अनुनाद पर न्यूनतम आपूर्ति लाइन धारा, (c) अनुनाद पर परिपथ द्वारा अवशोषित सक्रिय शक्ति।',
        bn: 'একটি সমান্তরাল সার্কিটের শাখা ১ এ R = 5 Ω ও L = 40 mH কয়েল এবং শাখা ২ এ C = 25 µF ধারক একটি 120 V এসি উৎসে যুক্ত। নির্ণয় করুন: (a) রেজোন্যান্সে ডায়নামিক ইম্পিড্যান্স Rd, (b) রেজোন্যান্সে সর্বনিম্ন লাইন কারেন্ট, (c) রেজোন্যান্সে সার্কিটের মোট সক্রিয় ক্ষমতা।'
      },
      hint: {
        en: 'Rd = L / (C · R) = 0.040 / (25×10⁻⁶ · 5). I_0 = V / Rd. P = V · I_0 · cos(0°) = V² / Rd.',
        hi: 'Rd = L / (CR) = 0.040 / (25×10⁻⁶ × 5) = 320 Ω। I_0 = 120 / 320 = 0.375 A। P = V × I_0।',
        bn: 'Rd = L / (CR) = 320 Ω। I_0 = 120 / 320 = 0.375 A। P = V × I_0।'
      },
      answerKey: {
        en: '(a) Dynamic Impedance Rd = L / (C · R) = 0.040 H / (25 × 10⁻⁶ F · 5 Ω) = 0.040 / (1.25 × 10⁻⁴) = 320.0 Ω.\n(b) Minimum Supply Line Current I_0 = V / Rd = 120 V / 320 Ω = 0.375 A = 375 mA (in phase with voltage, PF = 1.0).\n(c) Active Power absorbed P = V · I_0 = 120 V · 0.375 A = 45.0 W (or P = V² / Rd = 14400 / 320 = 45.0 W).',
        hi: '(a) गतिशील प्रतिबाधा Rd = 320.0 Ω।\n(b) न्यूनतम लाइन धारा I_0 = 0.375 A (375 mA)।\n(c) सक्रिय शक्ति P = 45.0 W।',
        bn: '(a) ডায়নামিক ইম্পিড্যান্স Rd = 320.0 Ω।\n(b) সর্বনিম্ন লাইন কারেন্ট I_0 = 0.375 A (375 mA)।\n(c) সক্রিয় ক্ষমতা P = 45.0 W।'
      }
    }
  ]
};
