import { Lesson } from '../types';

export const LESSON_SERIES_RL_RC: Lesson = {
  id: 'lsn-ch5-series-rl-rc',
  topicId: 'ch5-series-rl-rc',
  chapterId: 'ch-alternating-current',
  order: 10,
  title: {
    en: 'Series RL and RC Circuits',
    hi: 'सीरीज RL एवं RC परिपथ',
    bn: 'সিরিজ RL ও RC সার্কিট'
  },
  description: {
    en: 'Comprehensive analysis of series RL and RC AC circuits, covering impedance calculation, phase angles, voltage triangles, phasor diagrams, power factor, and power components.',
    hi: 'सीरीज RL और RC एसी परिपथों का विस्तृत विश्लेषण, प्रतिबाधा गणना, फेज कोण, वोल्टेज त्रिभुज, फेजर आरेख, पावर फैक्टर और शक्ति घटकों का अध्ययन।',
    bn: 'সিরিজ RL ও RC এসি সার্কিটের বিশদ বিশ্লেষণ, ইম্পিড্যান্স নির্ণয়, ফেজ কোণ, ভোল্টেজ ত্রিভুজ, ফেজর ডায়াগ্রাম, পাওয়ার ফ্যাক্টর ও বিভিন্ন ক্ষমতার হিসাব।'
  },
  easyExplanation: {
    en: 'In a series RL circuit, resistance opposes current without phase shift while inductance causes current to lag the voltage by angle φ. In a series RC circuit, capacitance causes current to lead the voltage by angle φ. The combined opposition is called Impedance (Z).',
    hi: 'सीरीज RL परिपथ में प्रतिरोध बिना फेज अंतर के धारा का विरोध करता है जबकि प्रेरकत्व धारा को वोल्टेज से φ कोण से पश्चगामी (लैग) बनाता है। सीरीज RC परिपथ में धारिता धारा को वोल्टेज से φ कोण से अग्रगामी (लीड) बनाती है। कुल संयुक्त विरोध को प्रतिबाधा (Impedance, Z) कहते हैं।',
    bn: 'সিরিজ RL সার্কিটে রোধ কোনো ফেজ পার্থক্য ছাড়া কারেন্টকে বাধা দেয় এবং ইন্ডাকট্যান্স কারেন্টকে ভোল্টেজ থেকে φ কোণে পশ্চাৎপদ (ল্যাগ) করে। সিরিজ RC সার্কিটে ক্যাপাসিট্যান্স কারেন্টকে ভোল্টেজ থেকে φ কোণে অগ্রগামী (লিড) করে। সম্মিলিত বাধাকে ইম্পিড্যান্স (Z) বলা হয়।'
  },
  detailedExplanation: {
    en: '1. Series RL Circuit Fundamentals:\nA series RL circuit consists of a pure resistor of resistance R (Ω) connected in series with a pure inductor of inductance L (H) across an alternating voltage supply v(t) = Vm sin(ωt).\n\n2. Voltage and Current Relationships in Series RL:\n- The same alternating current i(t) = Im sin(ωt - φ) flows through both components.\n- Voltage drop across resistor: VR = I · R (in phase with current i).\n- Voltage drop across inductor: VL = I · XL (leads current i by 90° or π/2 rad).\n- Inductive Reactance: XL = 2πfL (Ω).\n\n3. Series RL Impedance and Phasor Voltage Triangle:\n- Total Phasor Supply Voltage: V = VR + jVL = I(R + jXL).\n- Supply Voltage Magnitude: V = √(VR² + VL²).\n- Complex Impedance: Z = R + jXL.\n- Impedance Magnitude: |Z| = √(R² + XL²).\n- Phase Angle: φ = tan⁻¹(XL / R), where 0° < φ < 90°.\n- The current lags the supply voltage by phase angle φ.\n- Power Factor: cos φ = VR / V = R / |Z| (Lagging).\n\n4. Series RC Circuit Fundamentals:\nA series RC circuit consists of a pure resistor R (Ω) and a pure capacitor of capacitance C (F) connected in series across an AC source.\n- Voltage drop across capacitor: VC = I · XC (lags current i by 90°).\n- Capacitive Reactance: XC = 1 / (2πfC) (Ω).\n- Total Phasor Supply Voltage: V = VR - jVC = I(R - jXC).\n- Voltage Magnitude: V = √(VR² + VC²).\n- Complex Impedance: Z = R - jXC.\n- Impedance Magnitude: |Z| = √(R² + XC²).\n- Phase Angle: φ = -tan⁻¹(XC / R), where -90° < φ < 0°.\n- The current leads the supply voltage by |φ|.\n- Power Factor: cos φ = VR / V = R / |Z| (Leading).\n\n5. AC Power Components in RL and RC Circuits:\n- Active / Real Power: P = V · I · cos φ = I² · R (Watts, W) — dissipated entirely in resistor.\n- Reactive Power: Q = V · I · sin |φ| = I² · X (Volt-Amperes Reactive, VAR) — stored/exchanged by reactive element (Inductive Q > 0, Capacitive Q < 0).\n- Apparent Power: S = V · I = I² · |Z| = √(P² + Q²) (Volt-Amperes, VA).\n\n6. Frequency Dependence:\n- In RL circuits, increasing frequency f increases XL (XL ∝ f), increasing |Z|, reducing current I, and increasing lag angle φ.\n- In RC circuits, increasing frequency f decreases XC (XC ∝ 1/f), reducing |Z|, increasing current I, and decreasing lead angle |φ|.',
    hi: '1. सीरीज RL परिपथ:\nसीरीज RL परिपथ में शुद्ध प्रतिरोध R एवं शुद्ध प्रेरक L श्रेणीक्रम में एसी स्रोत से जुड़े होते हैं। परिपथ में समान धारा I प्रवाहित होती है।\n- प्रतिरोध पर वोल्टेज पात: VR = I · R (धारा I की सीध में)\n- प्रेरक पर वोल्टेज पात: VL = I · XL (धारा I से 90° अग्रगामी)\n- इंडक्टिव रिएक्टेंस: XL = 2πfL (Ω)\n- कुल आपूर्ति वोल्टेज: V = √(VR² + VL²)\n- सम्मिश्र प्रतिबाधा: Z = R + jXL; परिमाण: |Z| = √(R² + XL²)\n- फेज कोण: φ = tan⁻¹(XL / R) (धारा वोल्टेज से φ कोण से लैग करती है)\n- पावर फैक्टर: cos φ = R / |Z| (पश्चगामी / Lagging)\n\n2. सीरीज RC परिपथ:\n- संधारित्र पर वोल्टेज पात: VC = I · XC (धारा I से 90° पश्चगामी)\n- कैपेसिटिव रिएक्टेंस: XC = 1 / (2πfC) (Ω)\n- कुल आपूर्ति वोल्टेज: V = √(VR² + VC²)\n- सम्मिश्र प्रतिबाधा: Z = R - jXC; परिमाण: |Z| = √(R² + XC²)\n- फेज कोण: φ = -tan⁻¹(XC / R) (धारा वोल्टेज से |φ| कोण से लीड करती है)\n- पावर फैक्टर: cos φ = R / |Z| (अग्रगामी / Leading)\n\n3. शक्ति घटक:\n- सक्रिय शक्ति (Active Power): P = VI cos φ = I²R (Watts)\n- प्रतिक्रियाशील शक्ति (Reactive Power): Q = VI sin φ = I²X (VAR)\n- आभासी शक्ति (Apparent Power): S = VI = √(P² + Q²) (VA)',
    bn: '১. সিরিজ RL সার্কিট:\nএকটি বিশুদ্ধ রোধক R এবং একটি আবেশক L সিরিজে যুক্ত থাকলে একই কারেন্ট I প্রবাহিত হয়।\n- রোধের ভোল্টেজ ড্রপ: VR = I · R (কারেন্টের সাথে সমদশা)\n- আবেশকের ভোল্টেজ ড্রপ: VL = I · XL (কারেন্ট থেকে ৯০° অগ্রবর্তী)\n- ইন্ডাক্টিভ রিঅ্যাকট্যান্স: XL = 2πfL (Ω)\n- মোট সাপ্লাই ভোল্টেজ: V = √(VR² + VL²)\n- মোট ইম্পিড্যান্স: Z = R + jXL; মান |Z| = √(R² + XL²)\n- ফেজ কোণ: φ = tan⁻¹(XL / R) (কারেন্ট ভোল্টেজ থেকে φ কোণে ল্যাগ করে)\n- পাওয়ার ফ্যাক্টর: cos φ = R / |Z| (ল্যাগিং)\n\n২. সিরিজ RC সার্কিট:\n- ধারকের ভোল্টেজ ড্রপ: VC = I · XC (কারেন্ট থেকে ৯০° পিছিয়ে)\n- ক্যাপাসিটিভ রিঅ্যাকট্যান্স: XC = 1 / (2πfC) (Ω)\n- মোট সাপ্লাই ভোল্টেজ: V = √(VR² + VC²)\n- মোট ইম্পিড্যান্স: Z = R - jXC; মান |Z| = √(R² + XC²)\n- ফেজ কোণ: φ = -tan⁻¹(XC / R) (কারেন্ট ভোল্টেজ থেকে |φ| কোণে লিড করে)\n- পাওয়ার ফ্যাক্টর: cos φ = R / |Z| (লিডিং)\n\n৩. পাওয়ারের উপাদান:\n- সক্রিয় ক্ষমতা (Active Power): P = VI cos φ = I²R (W)\n- প্রতিক্রিয়াশীল ক্ষমতা (Reactive Power): Q = VI sin φ = I²X (VAR)\n- আপাত ক্ষমতা (Apparent Power): S = VI = √(P² + Q²) (VA)'
  },
  formulas: [
    {
      symbol: 'XL',
      expression: 'XL = 2πfL',
      description: {
        en: 'Inductive Reactance (Ω)',
        hi: 'इंडक्टिव रिएक्टेंस (Ω)',
        bn: 'ইন্ডাক্টিভ রিঅ্যাকট্যান্স (Ω)'
      }
    },
    {
      symbol: 'XC',
      expression: 'XC = 1 / (2πfC)',
      description: {
        en: 'Capacitive Reactance (Ω)',
        hi: 'कैपेसिटिव रिएक्टेंस (Ω)',
        bn: 'ক্যাপাসিটিভ রিঅ্যাকট্যান্স (Ω)'
      }
    },
    {
      symbol: 'Z_RL',
      expression: '|Z_RL| = √(R² + XL²)',
      description: {
        en: 'Series RL Impedance Magnitude (Ω)',
        hi: 'सीरीज RL प्रतिबाधा परिमाण (Ω)',
        bn: 'সিরিজ RL ইম্পিড্যান্স মান (Ω)'
      }
    },
    {
      symbol: 'Z_RC',
      expression: '|Z_RC| = √(R² + XC²)',
      description: {
        en: 'Series RC Impedance Magnitude (Ω)',
        hi: 'सीरीज RC प्रतिबाधा परिमाण (Ω)',
        bn: 'সিরিজ RC ইম্পিড্যান্স মান (Ω)'
      }
    },
    {
      symbol: 'φ',
      expression: 'φ = ±tan⁻¹(X / R)',
      description: {
        en: 'Phase Angle between Voltage and Current',
        hi: 'वोल्टेज एवं धारा के मध्य फेज कोण',
        bn: 'ভোল্টেজ ও কারেন্টের মধ্যবর্তী ফেজ কোণ'
      }
    },
    {
      symbol: 'PF',
      expression: 'cos φ = R / |Z|',
      description: {
        en: 'Power Factor of the Circuit',
        hi: 'परिपथ का पावर फैक्टर',
        bn: 'সার্কিটের পাওয়ার ফ্যাক্টর'
      }
    },
    {
      symbol: 'P',
      expression: 'P = V · I · cos φ = I² · R',
      description: {
        en: 'Active / Real Power (Watts, W)',
        hi: 'सक्रिय वास्तविक शक्ति (Watts, W)',
        bn: 'সক্রিয় ক্ষমতা (Watts, W)'
      }
    },
    {
      symbol: 'Q',
      expression: 'Q = V · I · sin |φ| = I² · X',
      description: {
        en: 'Reactive Power (VAR)',
        hi: 'प्रतिक्रियाशील शक्ति (VAR)',
        bn: 'প্রতিক্রিয়াশীল ক্ষমতা (VAR)'
      }
    },
    {
      symbol: 'S',
      expression: 'S = V · I = √(P² + Q²)',
      description: {
        en: 'Apparent Power (Volt-Amperes, VA)',
        hi: 'आभासी शक्ति (Volt-Amperes, VA)',
        bn: 'আপাত ক্ষমতা (Volt-Amperes, VA)'
      }
    }
  ],
  practicalApplications: {
    en: [
      'AC Induction Motor equivalent circuits (modeled as series RL representing stator resistance and leakage reactance).',
      'RC Phase-Shift and timing networks in electronic oscillators, snubber circuits, and thyristor triggering.',
      'Low-pass and High-pass passive RL / RC audio filters for frequency separation and noise rejection.',
      'AC power factor correction and line reactor protection against high-frequency switching transients.'
    ],
    hi: [
      'एसी इंडक्शन मोटर तुल्यकालिक परिपथ (स्टेटर प्रतिरोध एवं लीकेज रिएक्टेंस को दर्शाने वाला RL मॉडल)।',
      'इलेक्ट्रॉनिक ऑसिलेटर्स, स्नबर परिपथों और थाइरिस्टर ट्रिगरिंग में RC फेज-शिफ्ट और टाइमिंग नेटवर्क।',
      'ध्वनि पृथक्करण और शोर निवारण हेतु लो-पास एवं हाई-पास पैसिव RL / RC ऑडियो फिल्टर।',
      'पावर फैक्टर सुधार एवं स्विचिंग ट्रांजिएंट्स से सुरक्षा के लिए लाइन रिएक्टर।'
    ],
    bn: [
      'এসি ইনডাকশন মোটর সমতুল্য সার্কিট (স্টেটর রোধ ও লিকেজ রিঅ্যাকট্যান্স নির্দেশক RL মডেল)।',
      'ইলেকট্রনিক অসিলেটর ও থাইরিস্টর ট্রিগারিং-এ RC ফেজ-শিফট ও টাইমিং নেটওয়ার্ক।',
      'অডিও ও সিগন্যাল প্রক্রিয়াকরণে লো-পাস এবং হাই-পাস প্যাসিভ RL/RC ফিল্টার।',
      'পাওয়ার ফ্যাক্টর উন্নয়ন এবং সুইচিং ট্রানজিয়েন্ট সুরক্ষায় লাইন রিঅ্যাক্টর।'
    ]
  },
  importantPoints: {
    en: [
      'In pure resistors, voltage and current are always strictly in phase (φ = 0°, PF = 1.0).',
      'In series RL circuits, current LAGS the supply voltage by φ = tan⁻¹(XL / R) (0° < φ < 90°).',
      'In series RC circuits, current LEADS the supply voltage by |φ| = tan⁻¹(XC / R) (-90° < φ < 0°).',
      'The supply voltage is the phasor (vector) sum of component drops: V = √(VR² + VL²) or V = √(VR² + VC²), NEVER the direct arithmetic sum.',
      'Only resistance dissipates real electrical energy as heat (P = I²R); pure inductors and capacitors consume zero net average active power over full cycles.'
    ],
    hi: [
      'शुद्ध प्रतिरोध में वोल्टेज और धारा सदैव एक ही फेज में होते हैं (φ = 0°, PF = 1.0)।',
      'सीरीज RL परिपथ में धारा आपूर्ति वोल्टेज से φ = tan⁻¹(XL / R) कोण से लैग (पश्चगामी) करती है।',
      'सीरीज RC परिपथ में धारा आपूर्ति वोल्टेज से |φ| = tan⁻¹(XC / R) कोण से लीड (अग्रगामी) करती है।',
      'कुल आपूर्ति वोल्टेज घटकों के वोल्टेज का फेजर योग V = √(VR² + VX²) होता है, सीधा अंकगणितीय योग नहीं।',
      'केवल प्रतिरोध ही ऊष्मा के रूप में वास्तविक विद्युत ऊर्जा खर्च करता है (P = I²R); शुद्ध प्रेरक एवं संधारित्र शून्य औसत सक्रिय शक्ति खर्च करते हैं।'
    ],
    bn: [
      'বিশুদ্ধ রোধে ভোল্টেজ ও কারেন্ট সর্বদা একই দশায় থাকে (φ = ০°, PF = ১.০)।',
      'সিরিজ RL সার্কিটে কারেন্ট মোট ভোল্টেজ থেকে φ = tan⁻¹(XL / R) কোণে পশ্চাৎপদ (ল্যাগ) থাকে।',
      'সিরিজ RC সার্কিটে কারেন্ট মোট ভোল্টেজ থেকে |φ| = tan⁻¹(XC / R) কোণে অগ্রবর্তী (লিড) থাকে।',
      'মোট সাপ্লাই ভোল্টেজ হলো উপাদানগুলোর ভোল্টেজ ড্রপের ভেক্টর যোগফল: V = √(VR² + VX²); কখনো সাধারণ পাটিগণিতীয় যোগফল নয়।',
      'কেবল রোধই বাস্তব সক্রিয় ক্ষমতা (P = I²R) তাপ হিসেবে গ্রহণ করে; বিশুদ্ধ আবেশক ও ধারকের গড় সক্রিয় ক্ষমতা শূন্য।'
    ]
  },
  commonMistakes: {
    en: [
      'Mistake: Adding resistor and inductor/capacitor voltages algebraically (e.g., VR + VL = 120V + 160V = 280V). Correction: They are 90° out of phase, so V = √(120² + 160²) = 200V.',
      'Mistake: Thinking RC circuit power factor is lagging. Correction: Capacitive current leads voltage, making the power factor LEADING.',
      'Mistake: Omitting frequency when calculating reactance. Correction: XL = 2πfL and XC = 1/(2πfC) are strongly frequency-dependent.',
      'Mistake: Forgetting that reactive power Q does not do mechanical work but is essential for creating alternating magnetic/electric fields.'
    ],
    hi: [
      'गलती: VR और VL को सीधे जोड़ना (जैसे 120V + 160V = 280V)। सुधार: इनके बीच 90° का फेज अंतर होता है, अतः V = √(120² + 160²) = 200V।',
      'गलती: RC परिपथ के पावर फैक्टर को लैगिंग समझना। सुधार: कैपेसिटिव धारा वोल्टेज से आगे चलती है, अतः पावर फैक्टर लीडिंग (अग्रगामी) होता है।',
      'गलती: रिएक्टेंस गणना में आवृत्ति को छोड़ देना। सुधार: XL = 2πfL और XC = 1/(2πfC) सीधे आवृत्ति पर निर्भर करते हैं।',
      'गलती: यह सोचना कि रिएक्टिव शक्ति कार्य करती है; यह चुंबकीय/विद्युत क्षेत्र बनाने हेतु आवश्यक होती है।'
    ],
    bn: [
      'ভুল: VR এবং VL সরাসরি বীজগণিতীয় যোগ করা (যেমন ১২০V + ১৬০V = ২৮০V)। সংশোধন: এদের মধ্যে ৯০° ফেজ কোণ থাকায় V = √(১২০² + ১৬০²) = ২০০V।',
      'ভুল: RC সার্কিটের পাওয়ার ফ্যাক্টরকে ল্যাগিং মনে করা। সংশোধন: ক্যাপাসিটিভ কারেন্ট ভোল্টেজকে লিড করায় এটি লিডিং পাওয়ার ফ্যাক্টর।',
      'ভুল: রিঅ্যাকট্যান্স গণনায় ফ্রিকোয়েন্সি বিবেচনা না করা। সংশোধন: XL = 2πfL এবং XC = 1/(2πfC) ফ্রিকোয়েন্সির উপর নির্ভরশীল।',
      'ভুল: রিঅ্যাক্টিভ ক্ষমতা Q দ্বারা প্রত্যক্ষ যান্ত্রিক কাজ হয় মনে করা; এটি কেবল ফিল্ড তৈরিতে শক্তি আদান-প্রদান করে।'
    ]
  },
  solvedExamples: [
    {
      id: 'ex-ch5-l10-1',
      problem: {
        en: 'A coil having a resistance of 30 Ω and an inductance of 0.1273 H is connected across a 200 V, 50 Hz single-phase AC supply. Calculate: (a) Inductive reactance XL, (b) Circuit impedance magnitude |Z|, (c) Circuit current I, (d) Phase angle φ, (e) Power factor cos φ, and (f) Active power P.',
        hi: '30 Ω प्रतिरोध और 0.1273 H प्रेरकत्व वाली एक कॉइल 200 V, 50 Hz सिंगल-फेज एसी आपूर्ति से जुड़ी है। गणना करें: (a) इंडक्टिव रिएक्टेंस XL, (b) परिपथ प्रतिबाधा |Z|, (c) परिपथ धारा I, (d) फेज कोण φ, (e) पावर फैक्टर cos φ, एवं (f) सक्रिय शक्ति P।',
        bn: '৩০ Ω রোধ এবং ০.১২৭৩ H আবেশক বিশিষ্ট একটি কয়েল ২০০ V, ৫০ Hz সিঙ্গেল-ফেজ এসি উৎসের সাথে যুক্ত। নির্ণয় করুন: (a) ইন্ডাক্টিভ রিঅ্যাকট্যান্স XL, (b) সার্কিট ইম্পিড্যান্স |Z|, (c) সার্কিট কারেন্ট I, (d) ফেজ কোণ φ, (e) পাওয়ার ফ্যাক্টর cos φ, এবং (f) সক্রিয় ক্ষমতা P।'
      },
      solution: {
        en: 'Given:\n- R = 30 Ω, L = 0.1273 H, f = 50 Hz, V = 200 V\n\n1. Inductive Reactance:\nXL = 2πfL = 2 × π × 50 × 0.1273 = 40.00 Ω\n\n2. Impedance:\n|Z| = √(R² + XL²) = √(30² + 40²) = √2500 = 50.00 Ω\nZ = 30 + j40 Ω = 50.00 ∠ 53.13° Ω\n\n3. Current:\nI = V / |Z| = 200 / 50.00 = 4.00 A\n\n4. Phase Angle & Power Factor:\nφ = tan⁻¹(XL / R) = tan⁻¹(40 / 30) = 53.13° (Lagging)\nPF = cos(53.13°) = 30 / 50 = 0.60 (Lagging)\n\n5. Power:\nP = V · I · cos φ = 200 × 4.00 × 0.60 = 480.0 W\nQ = I² · XL = 4² × 40 = 640.0 VAR\nS = V · I = 200 × 4 = 800.0 VA',
        hi: 'दिया गया है:\n- R = 30 Ω, L = 0.1273 H, f = 50 Hz, V = 200 V\n\n1. इंडक्टिव रिएक्टेंस:\nXL = 2πfL = 2 × π × 50 × 0.1273 = 40.00 Ω\n\n2. प्रतिबाधा:\n|Z| = √(30² + 40²) = 50.00 Ω\n\n3. धारा:\nI = 200 / 50 = 4.00 A\n\n4. फेज कोण एवं पावर फैक्टर:\nφ = tan⁻¹(40/30) = 53.13° (पश्चगामी), PF = cos(53.13°) = 0.60 (पश्चगामी)\n\n5. शक्ति:\nP = 200 × 4 × 0.60 = 480.0 W, Q = 640.0 VAR, S = 800.0 VA',
        bn: 'প্রদত্ত:\n- R = ৩০ Ω, L = ০.১২৭৩ H, f = ৫০ Hz, V = ২০০ V\n\n১. ইন্ডাক্টিভ রিঅ্যাকট্যান্স:\nXL = 2πfL = ২ × π × ৫০ × ০.১২৭৩ = ৪০.০০ Ω\n\n২. ইম্পিড্যান্স:\n|Z| = √(৩০² + ৪০²) = ৫০.০০ Ω\n\n৩. কারেন্ট:\nI = ২০০ / ৫০ = ৪.০০ A\n\n৪. ফেজ কোণ ও পাওয়ার ফ্যাক্টর:\nφ = ৫৩.১৩° (ল্যাগিং), PF = ০.৬০ (ল্যাগিং)\n\n৫. ক্ষমতা:\nP = ৪৮০.০ W, Q = ৬৪০.০ VAR, S = ৮০০.০ VA'
      },
      givenValues: {
        'Resistance (R)': '30 Ω',
        'Inductance (L)': '0.1273 H',
        'Frequency (f)': '50 Hz',
        'Voltage (V)': '200 V'
      },
      finalAnswer: {
        en: 'XL = 40.0 Ω, |Z| = 50.0 Ω, I = 4.0 A, φ = 53.13° (lagging), PF = 0.60 (lagging), P = 480.0 W',
        hi: 'XL = 40.0 Ω, |Z| = 50.0 Ω, I = 4.0 A, φ = 53.13° (पश्चगामी), PF = 0.60 (पश्चगामी), P = 480.0 W',
        bn: 'XL = ৪০.০ Ω, |Z| = ৫০.০ Ω, I = ৪.০ A, φ = ৫৩.১৩° (ল্যাগিং), PF = ০.৬০ (ল্যাগিং), P = ৪৮০.০ W'
      }
    },
    {
      id: 'ex-ch5-l10-2',
      problem: {
        en: 'For the series RL circuit (R = 30 Ω, XL = 40 Ω, I = 4.0 A, V = 200 V), calculate the voltage drops across resistor (VR) and inductor (VL), and verify the supply voltage using phasor sum.',
        hi: 'सीरीज RL परिपथ (R = 30 Ω, XL = 40 Ω, I = 4.0 A, V = 200 V) के लिए प्रतिरोधक (VR) और प्रेरक (VL) पर वोल्टेज पात की गणना करें तथा फेजर योग द्वारा आपूर्ति वोल्टेज सत्यापित करें।',
        bn: 'সিরিজ RL সার্কিটের (R = ৩০ Ω, XL = ৪০ Ω, I = ৪.০ A, V = ২০০ V) জন্য রোধের (VR) এবং আবেশকের (VL) ভোল্টেজ ড্রপ নির্ণয় করুন এবং ভেক্টর যোগফল দ্বারা মোট ভোল্টেজ যাচাই করুন।'
      },
      solution: {
        en: '1. Voltage Drops:\nVR = I · R = 4.00 A × 30 Ω = 120.0 V\nVL = I · XL = 4.00 A × 40 Ω = 160.0 V\n\n2. Phasor Sum Verification:\nV = √(VR² + VL²) = √(120.0² + 160.0²) = √(14400 + 25600) = √40000 = 200.0 V (Matches given supply voltage).\n\n3. Note on Algebraic Sum:\nAlgebraic sum = 120 + 160 = 280 V ≠ 200 V. Algebraic addition fails because VR and VL are 90° out of phase.',
        hi: '1. वोल्टेज पात:\nVR = 4.00 × 30 = 120.0 V\nVL = 4.00 × 40 = 160.0 V\n\n2. फेजर योग:\nV = √(120.0² + 160.0²) = √40000 = 200.0 V\n\n3. अंकगणितीय जोड़ (120 + 160 = 280 V) 90° फेज अंतर के कारण लागू नहीं होता।',
        bn: '১. ভোল্টেজ ড্রপ:\nVR = ৪.০০ × ৩০ = ১২০.০ V\nVL = ৪.০০ × ৪০ = ১৬০.০ V\n\n২. ভেক্টর যোগফল:\nV = √(১২০.০² + ১৬০.০²) = √৪০০০০ = ২০০.০ V\n\n৩. পাটিগণিতীয় যোগ (১২০ + ১৬০ = ২৮০ V) ৯০° ফেজ পার্থক্যের কারণে প্রযোজ্য নয়।'
      },
      givenValues: {
        'R': '30 Ω',
        'XL': '40 Ω',
        'Current (I)': '4.0 A'
      },
      finalAnswer: {
        en: 'VR = 120.0 V, VL = 160.0 V, Phasor V = 200.0 V',
        hi: 'VR = 120.0 V, VL = 160.0 V, फेजर V = 200.0 V',
        bn: 'VR = ১২০.০ V, VL = ১৬০.০ V, মোট ভোল্টেজ V = ২০০.০ V'
      }
    },
    {
      id: 'ex-ch5-l10-3',
      problem: {
        en: 'A resistor R = 40 Ω is connected in series with a capacitor C = 106.1 µF across a 250 V, 50 Hz AC source. Calculate: (a) Capacitive Reactance XC, (b) Impedance magnitude |Z|, (c) Circuit current I, (d) Phase angle φ, (e) Power factor, and (f) Active power P.',
        hi: 'एक प्रतिरोध R = 40 Ω एक संधारित्र C = 106.1 µF के साथ 250 V, 50 Hz एसी स्रोत के श्रेणीक्रम में जुड़ा है। गणना करें: (a) XC, (b) |Z|, (c) I, (d) φ, (e) पावर फैक्टर, एवं (f) सक्रिय शक्ति P।',
        bn: 'একটি রোধ R = ৪০ Ω এবং একটি ধারক C = ১০৬.১ µF সিরিজে ২৫০ V, ৫০ Hz এসি উৎসে যুক্ত। নির্ণয় করুন: (a) XC, (b) |Z|, (c) I, (d) φ, (e) পাওয়ার ফ্যাক্টর, এবং (f) P।'
      },
      solution: {
        en: 'Given:\n- R = 40 Ω, C = 106.1 × 10⁻⁶ F, f = 50 Hz, V = 250 V\n\n1. Capacitive Reactance:\nXC = 1 / (2πfC) = 1 / (2 × π × 50 × 106.1 × 10⁻⁶) = 30.00 Ω\n\n2. Impedance:\n|Z| = √(R² + XC²) = √(40² + 30²) = √2500 = 50.00 Ω\nZ = 40 - j30 Ω = 50.00 ∠ -36.87° Ω\n\n3. Current:\nI = V / |Z| = 250 / 50.00 = 5.00 A\n\n4. Phase Angle & Power Factor:\nφ = -tan⁻¹(XC / R) = -tan⁻¹(30 / 40) = -36.87° (Current leads voltage by 36.87°)\nPF = cos(-36.87°) = 40 / 50 = 0.80 (Leading)\n\n5. Power:\nP = I² · R = 5.00² × 40 = 1000.0 W\nQ = I² · XC = 5.00² × 30 = 750.0 VAR (Capacitive)\nS = V · I = 250 × 5.00 = 1250.0 VA',
        hi: 'दिया गया है:\n- R = 40 Ω, C = 106.1 µF, f = 50 Hz, V = 250 V\n\n1. कैपेसिटिव रिएक्टेंस: XC = 1 / (2π × 50 × 106.1 × 10⁻⁶) = 30.00 Ω\n2. प्रतिबाधा: |Z| = √(40² + 30²) = 50.00 Ω\n3. धारा: I = 250 / 50 = 5.00 A\n4. फेज कोण एवं PF: φ = -36.87° (अग्रगामी), PF = 0.80 (अग्रगामी / Leading)\n5. शक्ति: P = 5² × 40 = 1000.0 W',
        bn: 'প্রদত্ত:\n- R = ৪০ Ω, C = ১০৬.১ µF, f = ৫০ Hz, V = ২৫০ V\n\n১. XC = ১ / (২π × ৫০ × ১০৬.১ × ১০⁻⁶) = ৩০.০০ Ω\n২. |Z| = √(৪০² + ৩০²) = ৫০.০০ Ω\n৩. I = ২৫০ / ৫০ = ৫.০০ A\n৪. φ = -৩৬.৮৭° (লিডিং), PF = ০.৮০ (লিডিং)\n৫. P = ৫² × ৪০ = ১০০০.০ W'
      },
      givenValues: {
        'Resistance (R)': '40 Ω',
        'Capacitance (C)': '106.1 µF',
        'Supply Voltage (V)': '250 V',
        'Frequency (f)': '50 Hz'
      },
      finalAnswer: {
        en: 'XC = 30.0 Ω, |Z| = 50.0 Ω, I = 5.0 A, φ = -36.87° (leading), PF = 0.80 (leading), P = 1000.0 W',
        hi: 'XC = 30.0 Ω, |Z| = 50.0 Ω, I = 5.0 A, φ = -36.87° (अग्रगामी), PF = 0.80 (अग्रगामी), P = 1000.0 W',
        bn: 'XC = ৩০.০ Ω, |Z| = ৫০.০ Ω, I = ৫.০ A, φ = -৩৬.৮৭° (লিডিং), PF = ০.৮০ (লিডিং), P = ১০০০.০ W'
      }
    }
  ],
  mcqs: [
    {
      id: 'mcq-ch5-l10-1',
      question: {
        en: 'In a series RL circuit connected to a sinusoidal AC source, the phase relationship between supply voltage and circuit current is:',
        hi: 'साइनसॉइडल एसी स्रोत से जुड़े सीरीज RL परिपथ में आपूर्ति वोल्टेज और परिपथ धारा के बीच फेज संबंध होता है:',
        bn: 'একটি সাইনুসয়েডাল এসি উৎসে যুক্ত সিরিজ RL সার্কিটে সাপ্লাই ভোল্টেজ ও কারেন্টের মধ্যকার ফেজ সম্পর্ক হলো:'
      },
      options: [
        { id: 'opt-a', text: { en: 'Current leads supply voltage by 90°', hi: 'धारा आपूर्ति वोल्टेज से 90° अग्रगामी (लीड) होती है', bn: 'কারেন্ট সাপ্লাই ভোল্টেজ থেকে ৯০° লিড করে' } },
        { id: 'opt-b', text: { en: 'Current lags supply voltage by an angle φ between 0° and 90°', hi: 'धारा आपूर्ति वोल्टेज से 0° और 90° के बीच कोण φ से पश्चगामी (लैग) होती है', bn: 'কারেন্ট সাপ্লাই ভোল্টেজ থেকে ০° ও ৯০° এর মধ্যবর্তী φ কোণে ল্যাগ করে' } },
        { id: 'opt-c', text: { en: 'Current is in phase with supply voltage (φ = 0°)', hi: 'धारा आपूर्ति वोल्टेज के समान फेज में होती है (φ = 0°)', bn: 'কারেন্ট ও সাপ্লাই ভোল্টেজ সমদশায় থাকে (φ = ০°)' } },
        { id: 'opt-d', text: { en: 'Current lags supply voltage by exactly 180°', hi: 'धारा आपूर्ति वोल्टेज से ठीक 180° पश्चगामी होती है', bn: 'কারেন্ট সাপ্লাই ভোল্টেজ থেকে ঠিক ১৮০° ল্যাগ করে' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'In a series RL circuit, the resistance keeps VR in phase with I while the inductor causes VL to lead I by 90°. The resultant voltage leads current by φ = tan⁻¹(XL/R), meaning current lags voltage by angle φ (where 0° < φ < 90°).',
        hi: 'सीरीज RL परिपथ में प्रतिरोध के कारण VR धारा I की सीध में रहता है जबकि प्रेरक के कारण VL धारा से 90° आगे रहता है। परिणामी आपूर्ति वोल्टेज धारा से φ = tan⁻¹(XL/R) आगे रहता है, जिसका अर्थ है कि धारा वोल्टेज से φ कोण से लैग करती है।',
        bn: 'সিরিজ RL সার্কিটে রোধের জন্য VR কারেন্টের সাথে সমদশায় থাকে কিন্তু আবেশকের জন্য VL কারেন্ট থেকে ৯০° এগিয়ে থাকে। মোট ভোল্টেজ কারেন্ট থেকে φ = tan⁻¹(XL/R) কোণে এগিয়ে থাকে, অর্থাৎ কারেন্ট ভোল্টেজ থেকে φ কোণে ল্যাগ করে।'
      }
    },
    {
      id: 'mcq-ch5-l10-2',
      question: {
        en: 'A series RC circuit with R = 30 Ω and XC = 40 Ω is supplied by a 100 V AC source. The power factor and its nature are:',
        hi: 'R = 30 Ω और XC = 40 Ω वाला एक सीरीज RC परिपथ 100 V एसी स्रोत से जुड़ा है। पावर फैक्टर और उसकी प्रकृति होगी:',
        bn: 'R = ৩০ Ω এবং XC = ৪০ Ω বিশিষ্ট একটি সিরিজ RC সার্কিট ১০০ V এসি উৎসে যুক্ত। পাওয়ার ফ্যাক্টর ও তার প্রকৃতি হলো:'
      },
      options: [
        { id: 'opt-a', text: { en: '0.60 Lagging', hi: '0.60 पश्चगामी (Lagging)', bn: '০.৬০ ল্যাগিং' } },
        { id: 'opt-b', text: { en: '0.75 Leading', hi: '0.75 अग्रगामी (Leading)', bn: '০.৭৫ লিডিং' } },
        { id: 'opt-c', text: { en: '0.60 Leading', hi: '0.60 अग्रगामी (Leading)', bn: '০.৬০ লিডিং' } },
        { id: 'opt-d', text: { en: '0.80 Lagging', hi: '0.80 पश्चगामी (Lagging)', bn: '০.৮০ ল্যাগিং' } }
      ],
      correctOptionId: 'opt-c',
      explanation: {
        en: '|Z| = √(30² + 40²) = 50 Ω. Power Factor = cos φ = R / |Z| = 30 / 50 = 0.60. Because it is a capacitive circuit (RC), the current leads the voltage, so the power factor is 0.60 Leading.',
        hi: '|Z| = √(30² + 40²) = 50 Ω। पावर फैक्टर = cos φ = R / |Z| = 30 / 50 = 0.60। चूँकि यह कैपेसिटिव परिपथ (RC) है, धारा वोल्टेज से लीड करती है, इसलिए पावर फैक्टर 0.60 Leading (अग्रगामी) होगा।',
        bn: '|Z| = √(৩০² + ৪০²) = ৫০ Ω। পাওয়ার ফ্যাক্টর = cos φ = R / |Z| = ৩০ / ৫০ = ০.৬০। যেহেতু এটি ধারকীয় (RC) সার্কিট, কারেন্ট ভোল্টেজকে লিড করে, তাই পাওয়ার ফ্যাক্টর ০.৬০ লিডিং।'
      }
    },
    {
      id: 'mcq-ch5-l10-3',
      question: {
        en: 'In a series RL circuit, the measured voltage across the resistor is 60 V and across the inductor is 80 V. The total supply voltage is:',
        hi: 'एक सीरीज RL परिपथ में प्रतिरोधक पर मापा गया वोल्टेज 60 V तथा प्रेरक पर 80 V है। कुल आपूर्ति वोल्टेज होगा:',
        bn: 'একটি সিরিজ RL সার্কিটে রোধকের আড়াআড়িতে ভোল্টেজ ৬০ V এবং আবেশকের আড়াআড়িতে ৮০ V পরিমাপ করা হলো। মোট সাপ্লাই ভোল্টেজ হলো:'
      },
      options: [
        { id: 'opt-a', text: { en: '140 V', hi: '140 V', bn: '১৪০ V' } },
        { id: 'opt-b', text: { en: '100 V', hi: '100 V', bn: '১০০ V' } },
        { id: 'opt-c', text: { en: '20 V', hi: '20 V', bn: '২০ V' } },
        { id: 'opt-d', text: { en: '70 V', hi: '70 V', bn: '৭০ V' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'Because VR and VL are 90° out of phase, total voltage is the phasor sum: V = √(VR² + VL²) = √(60² + 80²) = √(3600 + 6400) = √10000 = 100 V. Algebraic addition (60 + 80 = 140 V) is incorrect for AC.',
        hi: 'चूँकि VR और VL के बीच 90° का फेज अंतर होता है, कुल वोल्टेज फेजर योग द्वारा प्राप्त होता है: V = √(60² + 80²) = √10000 = 100 V। अंकगणितीय जोड़ (60 + 80 = 140 V) गलत है।',
        bn: 'যেহেতু VR এবং VL এর মধ্যে ৯০° ফেজ ব্যবধান থাকে, তাই মোট ভোল্টেজ হলো ভেক্টর যোগফল: V = √(৬০² + ৮০²) = √১০০০০ = ১০০ V। পাটিগণিতীয় যোগ (৬০ + ৮০ = ১৪০ V) এসি সার্কিটে ভুল।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch5-l10-1',
      question: {
        en: 'A non-inductive resistor of 10 Ω is in series with a choke coil of resistance 5 Ω and inductance 0.04 H. The combination is connected to a 230 V, 50 Hz AC supply. Calculate: (a) Total resistance and inductive reactance, (b) Circuit impedance magnitude, (c) Current and power factor, (d) Voltage across the non-inductive resistor, and (e) Voltage across the choke coil.',
        hi: '10 Ω का एक अन-इंडक्टिव प्रतिरोधक 5 Ω प्रतिरोध और 0.04 H प्रेरकत्व वाली एक चोक कॉइल के साथ श्रेणी में जुड़ा है। संयोजन को 230 V, 50 Hz एसी आपूर्ति से जोड़ा गया है। गणना करें: (a) कुल प्रतिरोध और इंडक्टिव रिएक्टेंस, (b) परिपथ प्रतिबाधा, (c) धारा एवं पावर फैक्टर, (d) अन-इंडक्टिव प्रतिरोधक पर वोल्टेज, एवं (e) चोक कॉइल पर वोल्टेज।',
        bn: '১০ Ω মানের একটি নন-ইন্ডাক্টিভ রোধ ৫ Ω রোধ ও ০.০৪ H আবেশক যুক্ত একটি চোক কয়েলের সাথে সিরিজে যুক্ত। এই সমবায়কে ২৩০ V, ৫০ Hz এসি উৎসে সংযুক্ত করা হলো। নির্ণয় করুন: (a) মোট রোধ ও ইন্ডাক্টিভ রিঅ্যাকট্যান্স, (b) সার্কিট ইম্পিড্যান্স, (c) কারেন্ট ও পাওয়ার ফ্যাক্টর, (d) নন-ইন্ডাক্টিভ রোধের ভোল্টেজ, এবং (e) চোক কয়েলের ভোল্টেজ।'
      },
      hint: {
        en: 'Total R = 10 + 5 = 15 Ω. XL = 2π × 50 × 0.04 = 12.57 Ω. |Z| = √(15² + 12.57²) = 19.57 Ω. I = 230 / 19.57 = 11.75 A. For choke coil alone, Z_choke = √(5² + 12.57²) = 13.53 Ω, so V_choke = 11.75 × 13.53 = 159.0 V.',
        hi: 'कुल R = 15 Ω, XL = 12.57 Ω, |Z| = 19.57 Ω, I = 11.75 A, PF = 15 / 19.57 = 0.766 (lagging), V_R = 11.75 × 10 = 117.5 V, V_choke = 11.75 × √(5² + 12.57²) = 159.0 V।',
        bn: 'মোট R = ১৫ Ω, XL = ১২.৫৭ Ω, |Z| = ১৯.৫৭ Ω, I = ১১.৭৫ A, PF = ০.৭৬৬ (ল্যাগিং), V_R = ১১৭.৫ V, V_choke = ১৫৯.০ V।'
      },
      answerKey: {
        en: '(a) Total R = 10 + 5 = 15.00 Ω. Inductive Reactance XL = 2π × 50 × 0.04 = 12.57 Ω.\n(b) Total Impedance |Z| = √(15.00² + 12.57²) = √(225 + 158.0) = √383.0 = 19.57 Ω.\n(c) Circuit Current I = 230 / 19.57 = 11.75 A. Power Factor = R_total / |Z| = 15 / 19.57 = 0.766 (Lagging).\n(d) Voltage across 10 Ω resistor = I × 10 = 11.75 × 10 = 117.5 V.\n(e) Choke Impedance Z_choke = √(5² + 12.57²) = √(25 + 158.0) = 13.53 Ω. Voltage across choke coil = I × Z_choke = 11.75 × 13.53 = 158.98 V ≈ 159.0 V.',
        hi: '(a) कुल प्रतिरोध R = 15.00 Ω, इंडक्टिव रिएक्टेंस XL = 12.57 Ω।\n(b) कुल प्रतिबाधा |Z| = 19.57 Ω।\n(c) धारा I = 11.75 A, पावर फैक्टर = 0.766 (पश्चगामी)।\n(d) 10 Ω प्रतिरोधक पर वोल्टेज = 117.5 V।\n(e) चोक कॉइल पर वोल्टेज = 159.0 V।',
        bn: '(a) মোট রোধ R = ১৫.০০ Ω, ইন্ডাক্টিভ রিঅ্যাকট্যান্স XL = ১২.৫৭ Ω।\n(b) মোট ইম্পিড্যান্স |Z| = ১৯.৫৭ Ω।\n(c) কারেন্ট I = ১১.৭৫ A, পাওয়ার ফ্যাক্টর = ০.৭৬৬ (ল্যাগিং)।\n(d) ১০ Ω রোধের ভোল্টেজ = ১১৭.৫ V।\n(e) চোক কয়েলের ভোল্টেজ = ১৫৯.০ V।'
      }
    },
    {
      id: 'pq-ch5-l10-2',
      question: {
        en: 'A 240 V, 50 Hz AC supply is connected across a series RC circuit drawing a current of 4 A and consuming 384 W of active power. Determine: (a) Power factor of the circuit, (b) Resistance R, (c) Capacitive Reactance XC and capacitance C, and (d) Reactive power Q and Apparent power S.',
        hi: 'एक 240 V, 50 Hz एसी आपूर्ति एक सीरीज RC परिपथ से जुड़ी है जो 4 A धारा लेती है और 384 W सक्रिय शक्ति खर्च करती है। ज्ञात करें: (a) परिपथ का पावर फैक्टर, (b) प्रतिरोध R, (c) कैपेसिटिव रिएक्टेंस XC एवं धारिता C, एवं (d) प्रतिक्रियाशील शक्ति Q एवं आभासी शक्ति S।',
        bn: 'একটি ২৪০ V, ৫০ Hz এসি উৎসে একটি সিরিজ RC সার্কিট যুক্ত যা ৪ A কারেন্ট গ্রহণ করে এবং ৩৮৪ W সক্রিয় ক্ষমতা ব্যয় করে। নির্ণয় করুন: (a) সার্কিটের পাওয়ার ফ্যাক্টর, (b) রোধ R, (c) ক্যাপাসিটিভ রিঅ্যাকট্যান্স XC ও ধারকত্ব C, এবং (d) প্রতিক্রিয়াশীল ক্ষমতা Q ও আপাত ক্ষমতা S।'
      },
      hint: {
        en: 'S = V × I = 240 × 4 = 960 VA. PF = P / S = 384 / 960 = 0.40 (Leading). P = I²R → R = 384 / 16 = 24 Ω. |Z| = V / I = 240 / 4 = 60 Ω. XC = √(60² - 24²) = 55.0 Ω. C = 1 / (2π × 50 × 55) = 57.87 µF.',
        hi: 'S = 960 VA, PF = 384 / 960 = 0.40 (Leading), R = 384 / 16 = 24 Ω, |Z| = 60 Ω, XC = 55.0 Ω, C = 57.87 µF, Q = I²XC = 880 VAR।',
        bn: 'S = ৯৬০ VA, PF = ০.৪০ (লিডিং), R = ২৪ Ω, |Z| = ৬০ Ω, XC = ৫৫.০ Ω, C = ৫৭.৮৭ µF, Q = ৮৮০ VAR।'
      },
      answerKey: {
        en: '(a) Apparent Power S = V × I = 240 × 4 = 960.0 VA. Power Factor = P / S = 384 / 960 = 0.40 (Leading, because it is an RC circuit).\n(b) Active power P = I² · R → R = P / I² = 384 / 4² = 384 / 16 = 24.00 Ω.\n(c) Total Impedance |Z| = V / I = 240 / 4 = 60.00 Ω. Capacitive Reactance XC = √(|Z|² - R²) = √(60² - 24²) = √(3600 - 576) = √3024 = 55.00 Ω. Capacitance C = 1 / (2πf · XC) = 1 / (2π × 50 × 55.00) = 1 / 17278.76 = 57.87 × 10⁻⁶ F = 57.87 µF.\n(d) Reactive Power Q = I² · XC = 4² × 55.00 = 880.0 VAR (Capacitive). Apparent Power S = 960.0 VA.',
        hi: '(a) पावर फैक्टर = P / S = 384 / 960 = 0.40 (अग्रगामी / Leading)।\n(b) प्रतिरोध R = 24.00 Ω।\n(c) कैपेसिटिव रिएक्टेंस XC = 55.00 Ω, धारिता C = 57.87 µF।\n(d) प्रतिक्रियाशील शक्ति Q = 880.0 VAR, आभासी शक्ति S = 960.0 VA।',
        bn: '(a) পাওয়ার ফ্যাক্টর = ০.৪০ (লিডিং)।\n(b) রোধ R = ২৪.০০ Ω।\n(c) ক্যাপাসিটিভ রিঅ্যাকট্যান্স XC = ৫৫.০০ Ω, ধারকত্ব C = ৫৭.৮৭ µF।\n(d) প্রতিক্রিয়াশীল ক্ষমতা Q = ৮৮০.০ VAR, আপাত ক্ষমতা S = ৯৬০.০ VA।'
      }
    }
  ]
};
