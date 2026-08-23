import { Lesson } from '../types';

export const LESSON_SERIES_RLC: Lesson = {
  id: 'lsn-ch5-series-rlc',
  topicId: 'ch5-series-rlc',
  chapterId: 'ch-alternating-current',
  order: 11,
  title: {
    en: 'Series RLC Circuit and Resonance',
    hi: 'सीरीज RLC परिपथ एवं अनुनाद',
    bn: 'সিরিজ RLC সার্কিট ও অনুনাদ (রেজোন্যান্স)'
  },
  description: {
    en: 'Comprehensive analysis of series RLC circuits across all three operational regimes (Inductive, Capacitive, and Resonant), with deep mathematical exploration of series resonance, quality factor Q, bandwidth, and voltage magnification.',
    hi: 'तीनों प्रचालन स्थितियों (इंडक्टिव, कैपेसिटिव और अनुनाद) में सीरीज RLC परिपथ का गहन विश्लेषण, सीरीज अनुनाद, क्वालिटी फैक्टर Q, बैंडविड्थ और वोल्टेज आवर्धन का विस्तृत अध्ययन।',
    bn: 'তিনটি অপারেটিং দশায় (ইন্ডাক্টিভ, ক্যাপাসিটিভ ও রেজোন্যান্ট) সিরিজ RLC সার্কিটের বিশদ বিশ্লেষণ, সিরিজ রেজোন্যান্স, কোয়ালিটি ফ্যাক্টর Q, ব্যান্ডউইথ ও ভোল্টেজ ম্যাগনিফিকেশনের বিস্তৃত গাণিতিক আলোচনা।'
  },
  easyExplanation: {
    en: 'In a series RLC circuit, an inductor (which makes current lag) and a capacitor (which makes current lead) oppose each other. When their reactances cancel out (XL = XC), the circuit reaches Series Resonance. At resonance, impedance is at its minimum (Z = R), current is maximum and purely in phase with voltage (PF = 1.0), and dangerous voltage magnification can occur across L and C.',
    hi: 'सीरीज RLC परिपथ में प्रेरक (जो धारा को लैग कराता है) और संधारित्र (जो धारा को लीड कराता है) एक दूसरे के प्रभाव को काटते हैं। जब दोनों का रिएक्टेंस बराबर हो जाता है (XL = XC), तो परिपथ सीरीज अनुनाद (Resonance) की स्थिति में पहुँच जाता है। अनुनाद पर प्रतिबाधा न्यूनतम (Z = R), धारा अधिकतम तथा यूनिटी पावर फैक्टर (PF = 1.0) होता है, और L व C पर वोल्टेज आवर्धित (Magnified) हो सकता है।',
    bn: 'সিরিজ RLC সার্কিটে আবেশক (যা কারেন্টকে ল্যাগ করায়) এবং ধারক (যা কারেন্টকে লিড করায়) পরস্পরের বিপরীত কাজ করে। যখন তাদের রিঅ্যাকট্যান্স সমান হয় (XL = XC), তখন সার্কিটটি সিরিজ রেজোন্যান্সে পৌঁছায়। রেজোন্যান্সে ইম্পিড্যান্স সর্বনিম্ন (Z = R), কারেন্ট সর্বোচ্চ এবং ভোল্টেজের সাথে সমদশায় (PF = ১.০) থাকে, এবং L ও C এর আড়াআড়িতে ভোল্টেজ বহুগুণ বৃদ্ধি (Magnification) পেতে পারে।'
  },
  detailedExplanation: {
    en: '1. Series RLC Circuit Architecture:\nA series RLC circuit consists of a pure resistance R, an inductance L, and a capacitance C connected in series across an alternating sinusoidal voltage source v(t) = Vm sin(ωt).\n\n2. Governing Phasor Relationships:\n- Circuit Current: i(t) = Im sin(ωt - φ) flows commonly through R, L, and C.\n- Resistor Voltage: VR = I · R (in phase with I, angle 0°).\n- Inductor Voltage: VL = I · XL (leads I by +90° or +j direction).\n- Capacitor Voltage: VC = I · XC (lags I by -90° or -j direction).\n- Net Reactive Voltage: VX = VL - VC = I(XL - XC).\n- Total Supply Voltage: V = VR + j(VL - VC) = I [ R + j(XL - XC) ].\n- Voltage Magnitude: V = √(VR² + (VL - VC)²).\n\n3. Complex Impedance and 3 Operational Regimes:\n- Complex Impedance: Z = R + j(XL - XC) = |Z| ∠ φ.\n- Impedance Magnitude: |Z| = √(R² + (XL - XC)²).\n- Phase Angle: φ = tan⁻¹( (XL - XC) / R ).\n- Power Factor: cos φ = R / |Z|.\n\nRegime 1: XL > XC (Inductive Case, f > fr):\n- Net reactance X = XL - XC > 0.\n- φ > 0° (positive): Voltage leads current; Current lags voltage.\n- Power factor is Lagging.\n\nRegime 2: XC > XL (Capacitive Case, f < fr):\n- Net reactance X = XL - XC < 0.\n- φ < 0° (negative): Current leads voltage; Voltage lags current.\n- Power factor is Leading.\n\nRegime 3: XL = XC (Series Resonance, f = fr):\n- Net reactance X = 0.\n- Minimum Impedance: |Z0| = R (Purely resistive).\n- Maximum Current: I0 = V / R.\n- Phase Angle: φ = 0° (Unity Power Factor, cos φ = 1.0).\n- Resonant Frequency: fr = 1 / (2π√(LC)) Hz; ωr = 1 / √(LC) rad/s.\n\n4. Series Resonance Metrics:\n- Quality Factor (Q): Q = (ωr L) / R = 1 / (ωr C R) = (1 / R) √(L / C).\n- Voltage Magnification at Resonance: VL = VC = Q · V_supply.\n- Half-Power Frequencies (f1, f2): Frequencies where current drops to I0 / √2 (0.707 I0) and power drops to Pmax / 2. Here |X| = R, |Z| = √2 R, φ = ±45°, cos φ = 0.707.\n- Bandwidth (BW): BW = f2 - f1 = fr / Q = R / (2πL) Hz.\n- Selectivity: Higher Q yields narrower bandwidth and sharper frequency tuning (ideal for radio receivers).',
    hi: '1. सीरीज RLC परिपथ:\nसीरीज RLC परिपथ में R, L, और C श्रेणी में जुड़े होते हैं। परिपथ में समान धारा I प्रवाहित होती है।\n- VR = I · R (धारा के समान फेज)\n- VL = I · XL (धारा से 90° आगे)\n- VC = I · XC (धारा से 90° पीछे)\n- कुल वोल्टेज: V = √(VR² + (VL - VC)²)\n- सम्मिश्र प्रतिबाधा: Z = R + j(XL - XC); परिमाण |Z| = √(R² + (XL - XC)²)\n- फेज कोण: φ = tan⁻¹( (XL - XC) / R )\n\n2. तीन प्रचालन स्थितियाँ:\n- स्थिति 1: XL > XC (इंडक्टिव, f > fr): धारा वोल्टेज से लैग करती है (Lagging PF)।\n- स्थिति 2: XC > XL (कैपेसिटिव, f < fr): धारा वोल्टेज से लीड करती है (Leading PF)।\n- स्थिति 3: XL = XC (सीरीज अनुनाद / Resonance, f = fr): Xnet = 0, Z = R (न्यूनतम), I = V/R (अधिकतम), PF = 1.0 (यूनिटी)।\n\n3. अनुनाद विशेषताएँ:\n- अनुनादी आवृत्ति: fr = 1 / (2π√(LC))\n- क्वालिटी फैक्टर (Q-Factor): Q = (ωr L)/R = (1/R)√(L/C)\n- वोल्टेज आवर्धन: VL = VC = Q · V\n- बैंडविड्थ: BW = f2 - f1 = fr / Q = R / (2πL)',
    bn: '১. সিরিজ RLC সার্কিট:\nসিরিজ RLC সার্কিটে R, L এবং C সিরিজে যুক্ত থাকে এবং একই কারেন্ট I প্রবাহিত হয়।\n- VR = I · R (কারেন্টের সাথে সমদশা)\n- VL = I · XL (কারেন্ট থেকে ৯০° অগ্রবর্তী)\n- VC = I · XC (কারেন্ট থেকে ৯০° পশ্চাৎপদ)\n- মোট ভোল্টেজ: V = √(VR² + (VL - VC)²)\n- ইম্পিড্যান্স: Z = R + j(XL - XC); মান |Z| = √(R² + (XL - XC)²)\n- ফেজ কোণ: φ = tan⁻¹( (XL - XC) / R )\n\n২. তিনটি অপারেটিং মোড:\n- অবস্থা ১: XL > XC (ইন্ডাক্টিভ, f > fr): কারেন্ট ভোল্টেজ থেকে ল্যাগ করে (Lagging PF)।\n- অবস্থা ২: XC > XL (ক্যাপাসিটিভ, f < fr): কারেন্ট ভোল্টেজকে লিড করে (Leading PF)।\n- অবস্থা ৩: XL = XC (সিরিজ রেজোন্যান্স, f = fr): নেট রিঅ্যাকট্যান্স = ০, Z = R (সর্বনিম্ন), I = V/R (সর্বোচ্চ), PF = ১.০ (ইউনিটি)।\n\n৩. রেজোন্যান্সের বৈশিষ্ট্য:\n- রেজোন্যান্ট ফ্রিকোয়েন্সি: fr = 1 / (2π√(LC))\n- কোয়ালিটি ফ্যাক্টর (Q): Q = (ωr L)/R = (1/R)√(L/C)\n- ভোল্টেজ ম্যাগনিফিকেশন: VL = VC = Q · V\n- ব্যান্ডউইথ: BW = f2 - f1 = fr / Q = R / (2πL)'
  },
  formulas: [
    {
      symbol: 'Z',
      expression: '|Z| = √(R² + (XL - XC)²)',
      description: {
        en: 'Total Series RLC Impedance Magnitude (Ω)',
        hi: 'सीरीज RLC कुल प्रतिबाधा परिमाण (Ω)',
        bn: 'সিরিজ RLC মোট ইম্পিড্যান্স মান (Ω)'
      }
    },
    {
      symbol: 'fr',
      expression: 'fr = 1 / (2π√(LC))',
      description: {
        en: 'Series Resonant Frequency (Hz)',
        hi: 'सीरीज अनुनादी आवृत्ति (Hz)',
        bn: 'সিরিজ রেজোন্যান্ট ফ্রিকোয়েন্সি (Hz)'
      }
    },
    {
      symbol: 'ωr',
      expression: 'ωr = 1 / √(LC)',
      description: {
        en: 'Angular Resonant Frequency (rad/s)',
        hi: 'कोणीय अनुनादी आवृत्ति (rad/s)',
        bn: 'কৌণিক রেজোন্যান্ট কম্পাঙ্ক (rad/s)'
      }
    },
    {
      symbol: 'Q',
      expression: 'Q = (ωr L) / R = (1 / R) √(L / C)',
      description: {
        en: 'Quality Factor of Series Resonant Circuit',
        hi: 'सीरीज अनुनादी परिपथ का क्वालिटी फैक्टर (Q)',
        bn: 'সিরিজ রেজোন্যান্ট সার্কিটের কোয়ালিটি ফ্যাক্টর (Q)'
      }
    },
    {
      symbol: 'BW',
      expression: 'BW = f2 - f1 = fr / Q = R / (2πL)',
      description: {
        en: 'Bandwidth between Half-Power Frequencies (Hz)',
        hi: 'हाफ-पावर आवृत्तियों के बीच बैंडविड्थ (Hz)',
        bn: 'হাফ-পাওয়ার ফ্রিকোয়েন্সির মধ্যবর্তী ব্যান্ডউইথ (Hz)'
      }
    },
    {
      symbol: 'VL_res',
      expression: 'VL = VC = Q · V_supply',
      description: {
        en: 'Reactive Component Voltage at Resonance (Voltage Magnification)',
        hi: 'अनुनाद पर रिएक्टिव घटकों का वोल्टेज (वोल्टेज आवर्धन)',
        bn: 'রেজোন্যান্সে রিঅ্যাক্টিভ উপাদানের ভোল্টেজ (ভোল্টেজ ম্যাগনিফিকেশন)'
      }
    },
    {
      symbol: 'φ',
      expression: 'φ = tan⁻¹((XL - XC) / R)',
      description: {
        en: 'Circuit Phase Angle',
        hi: 'परिपथ फेज कोण',
        bn: 'সার্কিট ফেজ কোণ'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Radio & TV Receiver RF Tuning: Series RLC tanks select desired station carrier frequencies while sharply rejecting adjacent broadcast bands.',
      'Harmonic Notch and Trap Filters in power electronics to eliminate damaging 5th, 7th, or 11th harmonic currents.',
      'Induction Heating systems tuned near resonance to achieve maximum power transfer into metallic workpieces.',
      'Wireless Power Transfer (Qi Charging) where resonant coupling provides high-efficiency power transmission across air gaps.'
    ],
    hi: [
      'रेडियो और टीवी ट्यूनिंग परिपथ: वांछित प्रसारण आवृत्ति का चयन एवं अन्य आवृत्तियों का निवारण।',
      'पावर इलेक्ट्रॉनिक्स में अवांछित 5वीं, 7वीं या 11वीं हार्मोनिक्स को समाप्त करने हेतु हार्मोनिक फिल्टर।',
      'इंडक्शन हीटिंग प्रणालियाँ: अधिकतम शक्ति अंतरण हेतु अनुनाद पर संचालन।',
      'वायरलेस पावर ट्रांसफर (Qi चार्जिंग): उच्च दक्षता हेतु अनुनादी युग्मन।'
    ],
    bn: [
      'রেডিও ও টিভি টিউনার সার্কিট: নির্দিষ্ট স্টেশন নির্বাচন ও অন্য অবাঞ্ছিত ফ্রিকোয়েন্সি প্রত্যাখ্যান।',
      'পাওয়ার সিস্টেমে ক্ষতিকারক হারমোনিক দূরীকরণে নচ ও ট্র্যাপ ফিল্টার।',
      'ইন্ডাকশন হিটিং ব্যবস্থা: সর্বোচ্চ শক্তি স্থানান্তরের জন্য রেজোন্যান্সে পরিচালনা।',
      'ওয়্যারলেস পাওয়ার ট্রান্সফার (মোবাইল চার্জিং): উচ্চ দক্ষতায় শক্তি পাঠাতে রেজোন্যান্ট কাপলিং।'
    ]
  },
  importantPoints: {
    en: [
      'At resonance (fr), XL = XC, so net reactance X = 0 and total impedance is strictly minimum: Z = R.',
      'Because Z is minimum at resonance, current is maximum: I0 = V / R, and power factor is exactly unity (cos φ = 1.0).',
      'The voltages across L and C at resonance can be much higher than the supply voltage (VL = VC = Q · V), which is known as Voltage Magnification (an acceptor circuit characteristic).',
      'Higher Quality Factor (Q) produces a narrower Bandwidth (BW = fr / Q) and higher selectivity.',
      'Below resonance (f < fr), XC > XL and the circuit is capacitive (leading PF); above resonance (f > fr), XL > XC and the circuit is inductive (lagging PF).'
    ],
    hi: [
      'अनुनाद (fr) पर XL = XC होता है, अतः कुल प्रतिबाधा न्यूनतम (Z = R) होती है।',
      'प्रतिबाधा न्यूनतम होने के कारण अनुनाद पर धारा अधिकतम (I = V/R) और पावर फैक्टर 1.0 (यूनिटी) होता है।',
      'अनुनाद पर L और C पर वोल्टेज आपूर्ति वोल्टेज से Q गुना अधिक हो सकता है (VL = VC = Q · V), जिसे वोल्टेज आवर्धन कहते हैं।',
      'उच्च क्वालिटी फैक्टर (Q) से बैंडविड्थ संकीर्ण (BW = fr / Q) और चयनात्मकता (Selectivity) अधिक तीव्र होती है।',
      'अनुनाद से नीचे (f < fr) परिपथ कैपेसिटिव तथा अनुनाद से ऊपर (f > fr) परिपथ इंडक्टिव व्यवहार करता है।'
    ],
    bn: [
      'রেজোন্যান্সে (fr) XL = XC হওয়ায় নেট রিঅ্যাকট্যান্স শূন্য এবং মোট ইম্পিড্যান্স সর্বনিম্ন: Z = R।',
      'ইম্পিড্যান্স সর্বনিম্ন হওয়ায় রেজোন্যান্সে কারেন্ট সর্বোচ্চ: I = V/R এবং পাওয়ার ফ্যাক্টর ১.০ (ইউনিটি)।',
      'রেজোন্যান্সে L ও C এর ভোল্টেজ সাপ্লাই ভোল্টেজের চেয়ে Q গুণ বেশি হতে পারে (VL = VC = Q · V), একে ভোল্টেজ ম্যাগনিফিকেশন বলে।',
      'উচ্চ Q-ফ্যাক্টরে ব্যান্ডউইথ সংকীর্ণ (BW = fr / Q) হয় এবং সার্কিটের সিলেক্টিভিটি বৃদ্ধি পায়।',
      'রেজোন্যান্সের নিচে (f < fr) সার্কিট ক্যাপাসিটিভ (লিডিং) এবং রেজোন্যান্সের উপরে (f > fr) সার্কিট ইন্ডাক্টিভ (ল্যাগিং) থাকে।'
    ]
  },
  commonMistakes: {
    en: [
      'Mistake: Thinking VL + VC = 2 × VL at resonance. Correction: VL and VC are 180° out of phase (+j and -j), so their phasor sum VL + VC = 0 V.',
      'Mistake: Believing current is zero at resonance. Correction: In series resonance, current is MAXIMUM (I = V/R). (Current is minimum in parallel resonance).',
      'Mistake: Calculating Bandwidth as BW = fr × Q instead of BW = fr / Q.',
      'Mistake: Forgetting that component insulation must withstand Q · V_supply at resonance to prevent dielectric breakdown.'
    ],
    hi: [
      'गलती: अनुनाद पर VL + VC को जोड़ना। सुधार: VL और VC के बीच 180° का फेज अंतर होता है, अतः उनका योग VL - VC = 0 होता है।',
      'गलती: अनुनाद पर धारा शून्य मानना। सुधार: सीरीज अनुनाद पर धारा अधिकतम होती है (I = V/R)।',
      'गलती: बैंडविड्थ की गलत गणना (BW = fr × Q लिखना)। सुधार: सही सूत्र BW = fr / Q है।',
      'गलती: L और C पर इंसुलेशन रेटिंग की उपेक्षा करना; अनुनाद पर वोल्टेज Q गुना बढ़ सकता है।'
    ],
    bn: [
      'ভুল: রেজোন্যান্সে VL ও VC সরাসরি যোগ করা। সংশোধন: VL এবং VC ১৮০° বিপরীত দশায় থাকায় ভেক্টর যোগফল শূন্য হয়।',
      'ভুল: সিরিজ রেজোন্যান্সে কারেন্ট শূন্য মনে করা। সংশোধন: সিরিজ রেজোন্যান্সে কারেন্ট সর্বদা সর্বোচ্চ (I = V/R)।',
      'ভুল: ব্যান্ডউইথকে BW = fr × Q লেখা। সংশোধন: সঠিক সূত্র হলো BW = fr / Q।',
      'ভুল: উপাদানের ভোল্টেজ ধারণক্ষমতা বিবেচনা না করা; রেজোন্যান্সে ভোল্টেজ Q গুণ বৃদ্ধি পায়।'
    ]
  },
  solvedExamples: [
    {
      id: 'ex-ch5-l11-1',
      problem: {
        en: 'A series RLC circuit with R = 20 Ω, L = 0.2 H, and C = 50 µF is connected across a 230 V, 50 Hz AC supply. Calculate: (a) Inductive Reactance XL, (b) Capacitive Reactance XC, (c) Net Reactance X, (d) Impedance magnitude |Z|, (e) Circuit Current I, (f) Phase Angle φ and Power Factor, and (g) Component voltages VR, VL, VC.',
        hi: 'R = 20 Ω, L = 0.2 H, और C = 50 µF वाला एक सीरीज RLC परिपथ 230 V, 50 Hz एसी आपूर्ति से जुड़ा है। गणना करें: (a) XL, (b) XC, (c) नेट X, (d) |Z|, (e) धारा I, (f) फेज कोण एवं PF, (g) VR, VL, VC।',
        bn: 'R = ২০ Ω, L = ০.২ H এবং C = ৫০ µF বিশিষ্ট একটি সিরিজ RLC সার্কিট ২৩০ V, ৫০ Hz এসি উৎসের সাথে যুক্ত। নির্ণয় করুন: (a) XL, (b) XC, (c) নেট X, (d) |Z|, (e) কারেন্ট I, (f) ফেজ কোণ ও PF, (g) VR, VL, VC।'
      },
      solution: {
        en: 'Given:\n- R = 20 Ω, L = 0.2 H, C = 50 × 10⁻⁶ F, f = 50 Hz, V = 230 V\n\n1. Reactances:\nXL = 2πfL = 2 × π × 50 × 0.2 = 62.83 Ω\nXC = 1 / (2πfC) = 1 / (2 × π × 50 × 50 × 10⁻⁶) = 63.66 Ω\nNet Reactance X = XL - XC = 62.83 - 63.66 = -0.83 Ω (Capacitive)\n\n2. Impedance:\n|Z| = √(R² + X²) = √(20² + (-0.83)²) = √(400 + 0.69) = √400.69 = 20.02 Ω\n\n3. Current:\nI = V / |Z| = 230 / 20.02 = 11.49 A\n\n4. Phase Angle & Power Factor:\nφ = tan⁻¹(X / R) = tan⁻¹(-0.83 / 20) = -2.38° (Current leads by 2.38°)\nPF = cos(-2.38°) = 20 / 20.02 = 0.999 ≈ 1.00 (Leading, very close to resonance!)\n\n5. Voltages:\nVR = I · R = 11.49 × 20 = 229.8 V\nVL = I · XL = 11.49 × 62.83 = 721.9 V\nVC = I · XC = 11.49 × 63.66 = 731.5 V\nNet reactive voltage VL - VC = 721.9 - 731.5 = -9.6 V\nV_total = √(229.8² + (-9.6)²) = √(52808 + 92) = √52900 = 230.0 V (Verified!)',
        hi: 'दिया गया है:\n- R = 20 Ω, L = 0.2 H, C = 50 µF, f = 50 Hz, V = 230 V\n\n1. XL = 62.83 Ω, XC = 63.66 Ω, Net X = -0.83 Ω\n2. |Z| = √(20² + (-0.83)²) = 20.02 Ω\n3. I = 230 / 20.02 = 11.49 A\n4. φ = -2.38° (अग्रगामी / Leading), PF = 0.999\n5. VR = 229.8 V, VL = 721.9 V, VC = 731.5 V',
        bn: 'প্রদত্ত:\n- R = ২০ Ω, L = ০.২ H, C = ৫০ µF, f = ৫০ Hz, V = ২৩০ V\n\n১. XL = ৬২.৮৩ Ω, XC = ৬৩.৬৬ Ω, Net X = -০.৮৩ Ω (ক্যাপাসিটিভ)\n২. |Z| = √(২০² + (-০.৮৩)²) = ২০.০২ Ω\n৩. I = ২৩০ / ২০.০২ = ১১.৪৯ A\n৪. φ = -২.৩৮° (লিডিং), PF = ০.৯৯৯\n৫. VR = ২২৯.৮ V, VL = ৭২১.৯ V, VC = ৭৩১.৫ V'
      },
      givenValues: {
        'R': '20 Ω',
        'L': '0.2 H',
        'C': '50 µF',
        'V': '230 V',
        'f': '50 Hz'
      },
      finalAnswer: {
        en: 'XL = 62.83 Ω, XC = 63.66 Ω, |Z| = 20.02 Ω, I = 11.49 A, φ = -2.38° (leading), VR = 229.8 V, VL = 721.9 V, VC = 731.5 V',
        hi: 'XL = 62.83 Ω, XC = 63.66 Ω, |Z| = 20.02 Ω, I = 11.49 A, φ = -2.38° (अग्रगामी), VR = 229.8 V, VL = 721.9 V, VC = 731.5 V',
        bn: 'XL = ৬২.৮৩ Ω, XC = ৬৩.৬৬ Ω, |Z| = ২০.০২ Ω, I = ১১.৪৯ A, φ = -২.৩৮° (লিডিং), VR = ২২৯.৮ V, VL = ৭২১.৯ V, VC = ৭৩১.৫ V'
      }
    },
    {
      id: 'ex-ch5-l11-2',
      problem: {
        en: 'A series RLC circuit has R = 10 Ω, L = 0.1 H, and C = 10 µF connected across a variable frequency 100 V AC source. Determine: (a) Series Resonant Frequency fr, (b) Current at resonance I0, (c) Quality Factor Q, (d) Voltages VL and VC at resonance, and (e) Bandwidth BW and half-power frequencies f1 and f2.',
        hi: 'R = 10 Ω, L = 0.1 H, और C = 10 µF वाले सीरीज RLC परिपथ को 100 V परिवर्ती आवृत्ति स्रोत से जोड़ा गया है। ज्ञात करें: (a) अनुनादी आवृत्ति fr, (b) अनुनाद पर धारा I0, (c) क्वालिटी फैक्टर Q, (d) अनुनाद पर VL और VC, (e) बैंडविड्थ BW एवं हाफ-पावर आवृत्तियाँ f1 और f2।',
        bn: 'R = ১০ Ω, L = ০.১ H এবং C = ১০ µF বিশিষ্ট একটি সিরিজ RLC সার্কিট পরিবর্তনশীল ফ্রিকোয়েন্সির ১০০ V এসি উৎসে যুক্ত। নির্ণয় করুন: (a) রেজোন্যান্ট ফ্রিকোয়েন্সি fr, (b) রেজোন্যান্সে কারেন্ট I0, (c) কোয়ালিটি ফ্যাক্টর Q, (d) রেজোন্যান্সে VL ও VC, এবং (e) ব্যান্ডউইথ BW ও হাফ-পাওয়ার ফ্রিকোয়েন্সি f1 ও f2।'
      },
      solution: {
        en: 'Given:\n- R = 10 Ω, L = 0.1 H, C = 10 × 10⁻⁶ F, V = 100 V\n\n1. Resonant Frequency:\nfr = 1 / (2π√(LC)) = 1 / (2π√(0.1 × 10 × 10⁻⁶)) = 1 / (2π√(10⁻⁶)) = 1 / (2π × 10⁻³) = 1000 / (2π) = 159.15 Hz\nωr = 1 / √(10⁻⁶) = 1000 rad/s\n\n2. Current at Resonance:\n|Z0| = R = 10 Ω\nI0 = V / R = 100 / 10 = 10.00 A\n\n3. Quality Factor:\nQ = (ωr L) / R = (1000 × 0.1) / 10 = 100 / 10 = 10.00\nAlternatively: Q = (1/R)√(L/C) = (1/10)√(0.1 / 10⁻⁵) = (1/10)√10000 = 100 / 10 = 10.00\n\n4. Voltages across L and C at Resonance:\nVL = VC = Q · V = 10.00 × 100 V = 1000.0 V (10 times supply voltage!)\nVR = V = 100.0 V\n\n5. Bandwidth and Cutoff Frequencies:\nBW = fr / Q = 159.15 / 10 = 15.92 Hz\nf1 = fr - BW/2 = 159.15 - 7.96 = 151.19 Hz\nf2 = fr + BW/2 = 159.15 + 7.96 = 167.11 Hz',
        hi: 'दिया गया है:\n- R = 10 Ω, L = 0.1 H, C = 10 µF, V = 100 V\n\n1. fr = 159.15 Hz, ωr = 1000 rad/s\n2. अनुनाद पर धारा I0 = 100 / 10 = 10.00 A\n3. Q = (1000 × 0.1) / 10 = 10.00\n4. VL = VC = Q × 100 = 1000.0 V\n5. BW = 159.15 / 10 = 15.92 Hz, f1 = 151.19 Hz, f2 = 167.11 Hz',
        bn: 'প্রদত্ত:\n- R = ১০ Ω, L = ০.১ H, C = ১০ µF, V = ১০০ V\n\n১. fr = ১৫৯.১৫ Hz, ωr = ১০০০ rad/s\n২. রেজোন্যান্সে কারেন্ট I0 = ১০০ / ১০ = ১০.০০ A\n৩. Q = (১০০০ × ০.১) / ১০ = ১০.০০\n৪. VL = VC = ১০ × ১০০ = ১০০০.০ V\n৫. BW = ১৫৯.১৫ / ১০ = ১৫.৯২ Hz, f1 = ১৫১.১৯ Hz, f2 = ১৬৭.১১ Hz'
      },
      givenValues: {
        'R': '10 Ω',
        'L': '0.1 H',
        'C': '10 µF',
        'V': '100 V'
      },
      finalAnswer: {
        en: 'fr = 159.15 Hz, I0 = 10.0 A, Q = 10.0, VL = VC = 1000.0 V, BW = 15.92 Hz (f1 = 151.19 Hz, f2 = 167.11 Hz)',
        hi: 'fr = 159.15 Hz, I0 = 10.0 A, Q = 10.0, VL = VC = 1000.0 V, BW = 15.92 Hz (f1 = 151.19 Hz, f2 = 167.11 Hz)',
        bn: 'fr = ১৫৯.১৫ Hz, I0 = ১০.০ A, Q = ১০.০, VL = VC = ১০০০.০ V, BW = ১৫.৯২ Hz (f1 = ১৫১.১৯ Hz, f2 = ১৬৭.১১ Hz)'
      }
    }
  ],
  mcqs: [
    {
      id: 'mcq-ch5-l11-1',
      question: {
        en: 'In a series RLC circuit, at what condition does series resonance occur?',
        hi: 'एक सीरीज RLC परिपथ में सीरीज अनुनाद किस स्थिति में घटित होता है?',
        bn: 'একটি সিরিজ RLC সার্কিটে কোন শর্তে সিরিজ রেজোন্যান্স ঘটে?'
      },
      options: [
        { id: 'opt-a', text: { en: 'When XL = XC', hi: 'जब XL = XC हो', bn: 'যখন XL = XC হয়' } },
        { id: 'opt-b', text: { en: 'When R = XL + XC', hi: 'जब R = XL + XC हो', bn: 'যখন R = XL + XC হয়' } },
        { id: 'opt-c', text: { en: 'When XL = 0 and XC = 0', hi: 'जब XL = 0 और XC = 0 हो', bn: 'যখন XL = ০ এবং XC = ০ হয়' } },
        { id: 'opt-d', text: { en: 'When current is minimum', hi: 'जब धारा न्यूनतम हो', bn: 'যখন কারেন্ট সর্বনিম্ন হয়' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'Series resonance occurs when the inductive reactance equals the capacitive reactance (XL = XC). At this frequency, net reactance is zero, impedance is minimized to Z = R, and current reaches its maximum value.',
        hi: 'सीरीज अनुनाद तब होता है जब इंडक्टिव रिएक्टेंस और कैपेसिटिव रिएक्टेंस बराबर हो जाते हैं (XL = XC)। इस स्थिति में कुल रिएक्टेंस शून्य हो जाता है और प्रतिबाधा न्यूनतम (Z = R) होती है।',
        bn: 'সিরিজ রেজোন্যান্স ঘটে যখন ইন্ডাক্টিভ রিঅ্যাকট্যান্স এবং ক্যাপাসিটিভ রিঅ্যাকট্যান্স সমান হয় (XL = XC)। এই অবস্থায় নেট রিঅ্যাকট্যান্স শূন্য হয় এবং ইম্পিড্যান্স সর্বনিম্ন (Z = R) হয়ে সর্বোচ্চ কারেন্ট প্রবাহিত হয়।'
      }
    },
    {
      id: 'mcq-ch5-l11-2',
      question: {
        en: 'At series resonance, the impedance of the circuit and the power factor are respectively:',
        hi: 'सीरीज अनुनाद पर परिपथ की प्रतिबाधा और पावर फैक्टर क्रमशः होते हैं:',
        bn: 'সিরিজ রেজোন্যান্সে সার্কিটের ইম্পিড্যান্স এবং পাওয়ার ফ্যাক্টর যথাক্রমে:'
      },
      options: [
        { id: 'opt-a', text: { en: 'Maximum, 0 (Zero)', hi: 'अधिकतम, 0 (शून्य)', bn: 'সর্বোচ্চ, ০ (শূন্য)' } },
        { id: 'opt-b', text: { en: 'Minimum (Z = R), 1.0 (Unity)', hi: 'न्यूनतम (Z = R), 1.0 (यूनिटी)', bn: 'সর্বনিম্ন (Z = R), ১.০ (ইউনিটি)' } },
        { id: 'opt-c', text: { en: 'Zero, 0.707 Lagging', hi: 'शून्य, 0.707 पश्चगामी', bn: 'শূন্য, ০.৭০৭ ল্যাগিং' } },
        { id: 'opt-d', text: { en: 'Infinite, 1.0 (Unity)', hi: 'अनंत, 1.0 (यूनिटी)', bn: 'অসীম, ১.০ (ইউনিটি)' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'At series resonance, XL - XC = 0, so |Z| = √(R² + 0²) = R (minimum possible impedance). Because the circuit is purely resistive, the phase angle φ = 0° and power factor = cos(0°) = 1.0 (Unity).',
        hi: 'सीरीज अनुनाद पर XL - XC = 0, अतः |Z| = R (न्यूनतम प्रतिबाधा)। परिपथ पूर्णतः प्रतिरोधी होने के कारण φ = 0° और पावर फैक्टर cos(0°) = 1.0 (यूनिटी) होता है।',
        bn: 'সিরিজ রেজোন্যান্সে XL - XC = ০ হওয়ায় |Z| = R (সর্বনিম্ন ইম্পিড্যান্স)। সার্কিটটি সম্পূর্ণ রোধকীয় হওয়ায় ফেজ কোণ φ = ০° এবং পাওয়ার ফ্যাক্টর cos(০°) = ১.০ (ইউনিটি)।'
      }
    },
    {
      id: 'mcq-ch5-l11-3',
      question: {
        en: 'If a series RLC circuit has fr = 1000 Hz and Quality Factor Q = 20, what is its bandwidth (BW)?',
        hi: 'यदि किसी सीरीज RLC परिपथ की fr = 1000 Hz और क्वालिटी फैक्टर Q = 20 है, तो इसकी बैंडविड्थ (BW) क्या होगी?',
        bn: 'যদি একটি সিরিজ RLC সার্কিটের fr = ১০০০ Hz এবং কোয়ালিটি ফ্যাক্টর Q = ২০ হয়, তবে এর ব্যান্ডউইথ (BW) কত?'
      },
      options: [
        { id: 'opt-a', text: { en: '20,000 Hz', hi: '20,000 Hz', bn: '২০,০০০ Hz' } },
        { id: 'opt-b', text: { en: '50 Hz', hi: '50 Hz', bn: '৫০ Hz' } },
        { id: 'opt-c', text: { en: '200 Hz', hi: '200 Hz', bn: '২০০ Hz' } },
        { id: 'opt-d', text: { en: '100 Hz', hi: '100 Hz', bn: '১০০ Hz' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'Bandwidth BW = fr / Q = 1000 Hz / 20 = 50 Hz. (Half-power frequency range is f1 = 975 Hz to f2 = 1025 Hz).',
        hi: 'बैंडविड्थ BW = fr / Q = 1000 / 20 = 50 Hz। (हाफ-पावर आवृत्तियाँ 975 Hz से 1025 Hz हैं)।',
        bn: 'ব্যান্ডউইথ BW = fr / Q = ১০০০ / ২০ = ৫০ Hz। (হাফ-পাওয়ার ফ্রিকোয়েন্সি সীমা হলো ৯৭৫ Hz থেকে ১০২৫ Hz)।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch5-l11-1',
      question: {
        en: 'A series RLC circuit with R = 5 Ω, L = 0.05 H, and C = 20 µF is connected across a 100 V AC supply. Calculate: (a) Resonant frequency fr, (b) Quality factor Q, (c) Resonant current I0, (d) Voltage across inductor VL at resonance, and (e) Bandwidth BW.',
        hi: 'R = 5 Ω, L = 0.05 H, और C = 20 µF वाला एक सीरीज RLC परिपथ 100 V एसी आपूर्ति से जुड़ा है। गणना करें: (a) अनुनादी आवृत्ति fr, (b) क्वालिटी फैक्टर Q, (c) अनुनादी धारा I0, (d) अनुनाद पर प्रेरक वोल्टेज VL, एवं (e) बैंडविड्थ BW।',
        bn: 'R = ৫ Ω, L = ০.০৫ H এবং C = ২০ µF বিশিষ্ট একটি সিরিজ RLC সার্কিট ১০০ V এসি উৎসে যুক্ত। নির্ণয় করুন: (a) রেজোন্যান্ট ফ্রিকোয়েন্সি fr, (b) কোয়ালিটি ফ্যাক্টর Q, (c) রেজোন্যান্ট কারেন্ট I0, (d) রেজোন্যান্সে আবেশক ভোল্টেজ VL, এবং (e) ব্যান্ডউইথ BW।'
      },
      hint: {
        en: 'fr = 1 / (2π√(0.05 × 20 × 10⁻⁶)) = 1 / (2π × 10⁻³) = 159.15 Hz. Q = (1/R)√(L/C) = (1/5)√(0.05 / 20×10⁻⁶) = (1/5)√2500 = 50 / 5 = 10. I0 = 100 / 5 = 20 A. VL = Q × 100 = 1000 V. BW = 159.15 / 10 = 15.92 Hz.',
        hi: 'fr = 159.15 Hz, Q = 10, I0 = 20 A, VL = 1000 V, BW = 15.92 Hz।',
        bn: 'fr = ১৫৯.১৫ Hz, Q = ১০, I0 = ২০ A, VL = ১০০০ V, BW = ১৫.৯২ Hz।'
      },
      answerKey: {
        en: '(a) Resonant Frequency fr = 1 / (2π√(LC)) = 1 / (2π × 10⁻³) = 159.15 Hz.\n(b) Quality Factor Q = (1 / R) √(L / C) = (1 / 5) √(0.05 / 20 × 10⁻⁶) = (1 / 5) × 50 = 10.0.\n(c) Resonant Current I0 = V / R = 100 / 5 = 20.0 A.\n(d) Inductor Voltage VL = Q · V = 10.0 × 100 = 1000.0 V (1 kV magnification!).\n(e) Bandwidth BW = fr / Q = 159.15 / 10.0 = 15.92 Hz.',
        hi: '(a) अनुनादी आवृत्ति fr = 159.15 Hz।\n(b) क्वालिटी फैक्टर Q = 10.0।\n(c) अनुनादी धारा I0 = 20.0 A।\n(d) प्रेरक वोल्टेज VL = 1000.0 V (1 kV)।\n(e) बैंडविड्थ BW = 15.92 Hz।',
        bn: '(a) রেজোন্যান্ট ফ্রিকোয়েন্সি fr = ১৫৯.১৫ Hz।\n(b) কোয়ালিটি ফ্যাক্টর Q = ১০.০।\n(c) রেজোন্যান্ট কারেন্ট I0 = ২০.০ A।\n(d) আবেশক ভোল্টেজ VL = ১০০০.০ V (১ kV)।\n(e) ব্যান্ডউইথ BW = ১৫.৯২ Hz।'
      }
    }
  ]
};
