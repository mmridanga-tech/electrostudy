import { Lesson } from '../types';

export const LESSON_RESONANT_FREQUENCY_Q: Lesson = {
  id: 'lsn-ch5-resonant-frequency-q',
  topicId: 'ch5-resonant-frequency-q',
  chapterId: 'ch-alternating-current',
  order: 15,
  title: {
    en: 'Resonant Frequency, Q-Factor & Bandwidth',
    hi: 'अनुनादी आवृत्ति, Q-फैक्टर एवं बैंडविड्थ',
    bn: 'রেজোন্যান্ট ফ্রিকোয়েন্সি, Q-ফ্যাক্টর ও ব্যান্ডউইথ'
  },
  description: {
    en: 'Master the rigorous mathematical derivations and physical insights governing Resonant Frequency (fr), Quality Factor (Q), Circuit Selectivity, Bandwidth (BW = fr/Q = R/(2πL)), Half-Power (-3dB) Frequencies (f1, f2), and geometric symmetry in series and parallel AC resonant circuits.',
    hi: 'सीरीज एवं पैरेलल एसी अनुनादी परिपथों में अनुनादी आवृत्ति (fr), गुणवत्ता गुणांक (Q-Factor), परिपथ चयनात्मकता (Selectivity), बैंडविड्थ (BW = fr/Q = R/(2πL)), अर्ध-शक्ति (-3dB) आवृत्तियों (f1, f2), और ज्यामितीय समरूपता के सटीक गणितीय व्युत्पत्ति एवं भौतिक सिद्धांतों में महारत हासिल करें।',
    bn: 'সিরিজ ও প্যারালাল এসি রেজোন্যান্ট সার্কিটে রেজোন্যান্ট ফ্রিকোয়েন্সি (fr), কোয়ালিটি ফ্যাক্টর (Q-Factor), সার্কিট সিলেক্টিভিটি, ব্যান্ডউইথ (BW = fr/Q = R/(2πL)), হাফ-পাওয়ার (-3dB) ফ্রিকোয়েন্সি (f1, f2) এবং জ্যামিতিক প্রতিসাম্যের পুঙ্খানুপুঙ্খ গাণিতিক প্রতিপাদন ও বাস্তবিক বিশ্লেষণে দক্ষতা অর্জন করুন।'
  },
  easyExplanation: {
    en: 'In an AC resonant circuit, Q-Factor (Quality Factor) measures the sharpness of resonance and energy efficiency (ratio of stored reactive energy to dissipated resistive heat). A high Q means very sharp selectivity, narrow bandwidth (BW = fr / Q), and large voltage/current magnification. The Bandwidth (BW) is the frequency interval between the two Half-Power (-3 dB) frequencies f1 and f2 where circuit power drops to 50% (P = Pmax / 2) and current drops to 70.7% (I = Imax / √2). Lowering circuit resistance R increases Q, sharpens the response, and narrows bandwidth.',
    hi: 'एसी अनुनादी परिपथ में, Q-फैक्टर (गुणवत्ता गुणांक) अनुनाद की तीक्ष्णता (sharpness) और ऊर्जा दक्षता का पैमाना है (संग्रहीत रिएक्टिव ऊर्जा और नष्ट हुई ऊष्मीय ऊर्जा का अनुपात)। उच्च Q का अर्थ है अत्यधिक तीक्ष्ण चयनात्मकता, संकीर्ण बैंडविड्थ (BW = fr / Q), और उच्च वोल्टेज/धारा प्रवर्धन। बैंडविड्थ (BW) दो अर्ध-शक्ति आवृत्तियों f1 और f2 के बीच का अंतर है जहाँ शक्ति 50% (P = Pmax / 2) और धारा 70.7% (I = Imax / √2) हो जाती है। प्रतिरोध R कम करने से Q बढ़ता है और चयनात्मकता तीव्र होती है।',
    bn: 'একটি এসি রেজোন্যান্ট সার্কিটে Q-ফ্যাক্টর (কোয়ালিটি ফ্যাক্টর) রেজোন্যান্সের তীক্ষ্ণতা এবং শক্তির সঞ্চয় দক্ষতার পরিমাপ করে। উচ্চ Q-এর অর্থ হলো অত্যন্ত তীক্ষ্ণ সিলেক্টিভিটি, সংকীর্ণ ব্যান্ডউইথ (BW = fr / Q), এবং উচ্চ ভোল্টেজ বিবর্ধন। ব্যান্ডউইথ (BW) হলো দুটি হাফ-পাওয়ার ফ্রিকোয়েন্সি f1 ও f2 এর মধ্যবর্তী ব্যবধান যেখানে সার্কিট পাওয়ার ৫০% (P = Pmax / 2) এবং কারেন্ট ৭০.৭% (I = Imax / √2) এ নেমে আসে। রোধ R কমালে Q বৃদ্ধি পায়, ব্যান্ডউইথ সরু হয় এবং সিলেক্টিভিটি নিখুঁত হয়।'
  },
  detailedExplanation: {
    en: '1. Resonant Frequency Derivation:\nIn a series RLC circuit, total impedance is Z = R + j(ωL - 1/(ωC)). At resonance (ω = ω_r), the reactive term vanishes:\nω_r L = 1 / (ω_r C)  ==>  ω_r² = 1 / (L · C)\nAngular resonant frequency: ω_r = 1 / √(LC)  [rad/s]\nCyclic resonant frequency: f_r = ω_r / (2π) = 1 / (2π √(LC))  [Hz]\n\n2. The Physical Meaning & Definition of Quality Factor (Q):\nThe Q-factor is fundamentally defined from energy thermodynamics:\nQ = 2π · [ Maximum Energy Stored in LC Fields / Energy Dissipated in Resistor per Cycle ]\nIn a series RLC circuit:\n- Maximum energy stored: W_max = (1/2) · L · I_max²\n- Energy dissipated per period T: W_diss = (1/2) · I_max² · R · (2π / ω_r)\n- Ratio: Q = ω_r L / R = 1 / (ω_r C R)\nSubstituting ω_r = 1 / √(LC):\nQ = (1 / R) · √(L / C)\n*Insights: Q is inversely proportional to resistance R. To obtain a high Q (sharp selectivity), minimize loop resistance R or increase the L/C ratio.*\n\n3. Voltage Magnification Property in Series RLC:\nAt series resonance, circuit current is I_0 = V / R. The voltage drop across the inductor is:\n|V_L| = I_0 · XL = (V / R) · (ω_r L) = [ (ω_r L) / R ] · V = Q · V\nSimilarly, across the capacitor:\n|V_C| = I_0 · XC = (V / R) · [ 1 / (ω_r C) ] = Q · V\n*Therefore, Q represents the Voltage Magnification Factor at resonance: V_L = V_C = Q · V_source.*\n\n4. Half-Power Frequencies (f1 and f2) & The -3 dB Bandwidth:\nWhen the frequency shifts away from f_r, total current drops because net reactance |XL - XC| > 0. The half-power frequencies f1 (lower cutoff) and f2 (upper cutoff) are defined where:\n- Active power drops to half of resonant maximum: P(f) = (1/2) · P_max\n- Circuit current drops to 1/√2 (70.71%) of resonant maximum: I(f) = I_0 / √2 = 0.7071 · I_0\n- In decibels: 20 · log10(I / I_0) = 20 · log10(1 / √2) = -3.01 dB (hence called "-3 dB cutoff points").\n- Net Reactance Condition: |XL - XC| = R, making total impedance |Z| = √(R² + R²) = √2 · R, with phase angle φ = ±45° (PF = 0.7071).\n\n5. Bandwidth (BW) Mathematical Formulations:\nThe bandwidth is defined as the frequency span between upper and lower half-power frequencies:\nBW = Δf = f2 - f1  [Hz]\nRigorous derivation yields:\nBW = f_r / Q = R / (2π L)  [Hz]\nAngular bandwidth: Δω = ω2 - ω1 = ω_r / Q = R / L  [rad/s]\n\n6. Exact vs Symmetrical Cutoff Frequency Formulations:\n- Exact Formulas (valid for all Q values):\nf1 = f_r · [ √(1 + 1/(4Q²)) - 1/(2Q) ]\nf2 = f_r · [ √(1 + 1/(4Q²)) + 1/(2Q) ]\n- Geometric Mean Property (Exact for all Q):\nf_r = √(f1 · f2)  ==>  The resonant frequency is always the exact GEOMETRIC MEAN of the half-power frequencies.\n- High-Q Approximation (valid when Q ≥ 10):\nWhen Q is large, the response is nearly arithmetically symmetrical about f_r:\nf1 ≈ f_r - (BW / 2) = f_r · [ 1 - 1/(2Q) ]\nf2 ≈ f_r + (BW / 2) = f_r · [ 1 + 1/(2Q) ]\n\n7. Selectivity vs Circuit Resistance:\n- High Q (Low R): Narrow bandwidth, very steep resonance peak, excellent ability to isolate a single desired station from adjacent radio channels (High Selectivity).\n- Low Q (High R): Wide bandwidth, flat/broad resonance peak, poor channel discrimination (Low Selectivity).\n\n8. Common Pitfalls:\n- Confusing arithmetic mean with geometric mean: f_r = √(f1 · f2), NOT (f1 + f2)/2 (though approximately equal for Q > 10).\n- Forgetting that Q in a series circuit is (1/R)·√(L/C), whereas in a parallel RLC circuit Q is R·√(C/L).\n- Assuming voltage across inductor/capacitor cannot exceed supply voltage: in high-Q circuits, VL and VC can exceed supply voltage by 50x to 100x!',
    hi: '1. अनुनादी आवृत्ति का व्युत्पत्ति:\nसीरीज RLC परिपथ में कुल प्रतिबाधा Z = R + j(ωL - 1/ωC)। अनुनाद पर रिएक्टिव भाग शून्य होता है:\nω_r = 1 / √(LC) [rad/s] तथा f_r = 1 / (2π √(LC)) [Hz]\n\n2. गुणवत्ता गुणांक (Q-Factor):\nQ = 2π × (अधिकतम संचित ऊर्जा / प्रति चक्र व्यय ऊर्जा)\nQ = ω_r L / R = 1 / (ω_r C R) = (1/R) · √(L/C)\n(प्रतिरोध R कम होने पर Q बढ़ता है)।\n\n3. वोल्टेज प्रवर्धन (Voltage Magnification):\nसीरीज अनुनाद पर इंडक्टर और कैपेसिटर के सिरों पर वोल्टेज:\nVL = VC = Q · V_source\n\n4. अर्ध-शक्ति आवृत्तियां (f1, f2) एवं 3-dB बैंडविड्थ:\nवे आवृत्तियां जहाँ शक्ति घटकर P_max/2 (50%) और धारा I_0/√2 (70.7%) रह जाती है।\n- शर्त: |XL - XC| = R तथा |Z| = √2 R (फेज कोण φ = ±45°)।\n\n5. बैंडविड्थ सूत्र:\nBW = f2 - f1 = f_r / Q = R / (2π L) [Hz]\n\n6. अर्ध-शक्ति आवृत्तियों के सूत्र:\n- सटीक ज्यामितीय माध्य: f_r = √(f1 · f2)\n- उच्च Q (Q ≥ 10) के लिए सन्निकटन:\nf1 ≈ f_r - BW/2\nf2 ≈ f_r + BW/2\n\n7. चयनात्मकता (Selectivity):\n- उच्च Q (कम R): संकीर्ण बैंडविड्थ, तीक्ष्ण वक्र, उच्च चयनात्मकता।\n- निम्न Q (अधिक R): चौड़ी बैंडविड्थ, चपटा वक्र, निम्न चयनात्मकता।',
    bn: '১. রেজোন্যান্ট ফ্রিকোয়েন্সির প্রতিপাদন:\nসিরিজ RLC সার্কিটে মোট ইম্পিড্যান্স Z = R + j(ωL - 1/ωC)। রেজোন্যান্সে রিঅ্যাকট্যান্স শূন্য হয়:\nω_r = 1 / √(LC) [rad/s] এবং f_r = 1 / (2π √(LC)) [Hz]\n\n২. কোয়ালিটি ফ্যাক্টর (Q-Factor):\nQ = 2π × (সর্বোচ্চ সঞ্চিত শক্তি / প্রতি চক্রে অপচয়কৃত শক্তি)\nQ = ω_r L / R = 1 / (ω_r C R) = (1/R) · √(L/C)\n\n৩. ভোল্টেজ বিবর্ধন (Voltage Magnification):\nসিরিজ রেজোন্যান্সে আবেশক ও ধারকের ভোল্টেজ সাপ্লাই ভোল্টেজের Q গুণ হয়:\nVL = VC = Q · V_source\n\n৪. হাফ-পাওয়ার ফ্রিকোয়েন্সি (f1, f2) ও -3 dB ব্যান্ডউইথ:\nযে ফ্রিকোয়েন্সিতে পাওয়ার P_max/2 (৫০%) এবং কারেন্ট I_0/√2 (৭০.৭%) হয়।\n- শর্ত: |XL - XC| = R এবং |Z| = √2 R (ফেজ কোণ φ = ±৪৫°)।\n\n৫. ব্যান্ডউইথ সূত্র:\nBW = f2 - f1 = f_r / Q = R / (2π L) [Hz]\n\n৬. হাফ-পাওয়ার ফ্রিকোয়েন্সি সূত্র:\n- সঠিক জ্যামিতিক গড়: f_r = √(f1 · f2)\n- উচ্চ Q (Q ≥ 10) এর জন্য:\nf1 ≈ f_r - BW/2\nf2 ≈ f_r + BW/2\n\n৭. সিলেক্টিভিটি (Selectivity):\n- উচ্চ Q (কম R): সরু ব্যান্ডউইথ, তীক্ষ্ণ কার্ভ, উন্নত স্টেশন নির্বাচন ক্ষমতা।\n- নিম্ন Q (বেশি R): চওড়া ব্যান্ডউইথ, সমতল কার্ভ, দুর্বল সিলেক্টিভিটি।'
  },
  formulas: [
    {
      symbol: 'Q',
      expression: 'Q = \\frac{\\omega_r L}{R} = \\frac{1}{\\omega_r C R} = \\frac{1}{R}\\sqrt{\\frac{L}{C}}',
      description: {
        en: 'Quality Factor (Q-factor) for Series RLC Resonant Circuit (Dimensionless)',
        hi: 'सीरीज RLC अनुनादी परिपथ हेतु गुणवत्ता गुणांक (Q-Factor) (विमाहीन)',
        bn: 'সিরিজ RLC রেজোন্যান্ট সার্কিটের কোয়ালিটি ফ্যাক্টর (Q-Factor) (এককবিহীন)'
      }
    },
    {
      symbol: 'BW',
      expression: 'BW = f_2 - f_1 = \\frac{f_r}{Q} = \\frac{R}{2\\pi L}',
      description: {
        en: 'Half-Power Bandwidth in Hertz (Hz)',
        hi: 'हर्ट्ज (Hz) में अर्ध-शक्ति बैंडविड्थ',
        bn: 'হার্টজে (Hz) হাফ-পাওয়ার ব্যান্ডউইথ'
      }
    },
    {
      symbol: 'V_L, V_C',
      expression: 'V_L = V_C = Q \\cdot V_{source}',
      description: {
        en: 'Voltage Magnification across Inductor and Capacitor at Resonance',
        hi: 'अनुनाद पर इंडक्टर एवं कैपेसिटर पर वोल्टेज प्रवर्धन (VL = VC = Q·V)',
        bn: 'রেজোন্যান্সে আবেশক ও ধারকের ভোল্টেজ বিবর্ধন (VL = VC = Q·V)'
      }
    },
    {
      symbol: 'I_{half}',
      expression: 'I(f_1) = I(f_2) = \\frac{I_0}{\\sqrt{2}} = 0.7071 \\cdot I_0',
      description: {
        en: 'Circuit Current at Half-Power (-3 dB) Frequencies f1 and f2',
        hi: 'अर्ध-शक्ति (-3 dB) आवृत्तियों f1 और f2 पर परिपथ धारा (0.7071 · I_0)',
        bn: 'হাফ-পাওয়ার (-3 dB) ফ্রিকোয়েন্সি f1 ও f2 তে সার্কিট কারেন্ট (0.7071 · I_0)'
      }
    },
    {
      symbol: 'f_r(mean)',
      expression: 'f_r = \\sqrt{f_1 \\cdot f_2}',
      description: {
        en: 'Geometric Mean Property of Resonant Frequency (Hz)',
        hi: 'अनुनादी आवृत्ति का ज्यामितीय माध्य नियम (fr = √(f1·f2))',
        bn: 'রেজোন্যান্ট ফ্রিকোয়েন্সির জ্যামিতিক গড় ধর্ম (fr = √(f1·f2))'
      }
    },
    {
      symbol: 'f_1, f_2',
      expression: 'f_{1,2} = f_r \\left[ \\sqrt{1 + \\frac{1}{4Q^2}} \\mp \\frac{1}{2Q} \\right] \\approx f_r \\mp \\frac{BW}{2}',
      description: {
        en: 'Lower (f1) and Upper (f2) Cutoff Frequencies (Hz)',
        hi: 'निम्न (f1) एवं उच्च (f2) कटऑफ आवृत्तियां (Hz)',
        bn: 'নিম্ন (f1) ও উচ্চ (f2) কাটঅফ ফ্রিকোয়েন্সি (Hz)'
      }
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch5-l15-1',
      problem: {
        en: 'A series RLC circuit has resistance R = 4 Ω, inductance L = 20 mH, and capacitance C = 0.5 µF connected to a variable frequency AC source. Calculate: (a) Resonant frequency f_r, (b) Quality factor Q of the circuit, (c) Bandwidth BW in Hz, (d) Lower and upper half-power cutoff frequencies f1 and f2.',
        hi: 'एक सीरीज RLC परिपथ में R = 4 Ω, L = 20 mH, और C = 0.5 µF एक परिवर्ती आवृत्ति एसी स्रोत से जुड़े हैं। गणना करें: (a) अनुनादी आवृत्ति f_r, (b) परिपथ का गुणवत्ता गुणांक Q, (c) बैंडविड्थ BW (Hz में), (d) निम्न एवं उच्च अर्ध-शक्ति कटऑफ आवृत्तियां f1 और f2।',
        bn: 'একটি সিরিজ RLC সার্কিটে R = 4 Ω, L = 20 mH, এবং C = 0.5 µF একটি পরিবর্তনশীল এসি উৎসে যুক্ত। নির্ণয় করুন: (a) রেজোন্যান্ট ফ্রিকোয়েন্সি f_r, (b) সার্কিটের কোয়ালিটি ফ্যাক্টর Q, (c) ব্যান্ডউইথ BW (Hz), (d) নিম্ন ও উচ্চ হাফ-পাওয়ার কাটঅফ ফ্রিকোয়েন্সি f1 ও f2।'
      },
      givenValues: {
        'R': '4 Ω',
        'L': '20 mH = 0.020 H',
        'C': '0.5 µF = 5.0 × 10⁻⁷ F'
      },
      solution: {
        en: 'Step 1: Calculate Resonant Frequency f_r\nL · C = 0.020 · 5.0 × 10⁻⁷ = 1.0 × 10⁻⁸ s²\n√(LC) = √(10⁻⁸) = 10⁻⁴ s = 0.0001 s\nf_r = 1 / (2 · π · 10⁻⁴) = 10,000 / (2π) = 1,591.55 Hz = 1.5915 kHz\n\nStep 2: Calculate Quality Factor Q\n√(L / C) = √(0.020 / (5.0 × 10⁻⁷)) = √(40,000) = 200 Ω (Characteristic Impedance Z_c)\nQ = (1 / R) · √(L / C) = (1 / 4) · 200 = 50.0\n(Check: Q = 2π f_r L / R = 2 · π · 1591.55 · 0.020 / 4 = 200 / 4 = 50.0)\n\nStep 3: Calculate Bandwidth BW\nBW = f_r / Q = 1,591.55 / 50.0 = 31.83 Hz\n(Check: BW = R / (2π L) = 4 / (2 · π · 0.020) = 4 / 0.12566 = 31.83 Hz)\n\nStep 4: Calculate Half-Power Cutoff Frequencies f1 and f2\nSince Q = 50 >> 10, symmetric approximation is exceptionally accurate:\nΔf / 2 = BW / 2 = 31.83 / 2 = 15.915 Hz\nf1 = f_r - (BW / 2) = 1,591.55 - 15.915 = 1,575.635 Hz ≈ 1,575.64 Hz\nf2 = f_r + (BW / 2) = 1,591.55 + 15.915 = 1,607.465 Hz ≈ 1,607.47 Hz\nGeometric Mean Check: √(f1 · f2) = √(1575.635 · 1607.465) = √(2,532,778) = 1,591.47 Hz ≈ f_r.',
        hi: 'चरण 1: अनुनादी आवृत्ति f_r\nf_r = 1 / (2π √(0.020 × 5×10⁻⁷)) = 10000 / 2π = 1591.55 Hz\n\nचरण 2: गुणवत्ता गुणांक Q\nQ = (1 / 4) × √(0.020 / 5×10⁻⁷) = 200 / 4 = 50.0\n\nचरण 3: बैंडविड्थ BW\nBW = f_r / Q = 1591.55 / 50 = 31.83 Hz\n\nचरण 4: कटऑफ आवृत्तियां\nf1 = 1591.55 - 15.915 = 1575.64 Hz\nf2 = 1591.55 + 15.915 = 1607.47 Hz।',
        bn: 'ধাপ ১: রেজোন্যান্ট ফ্রিকোয়েন্সি f_r\nf_r = 10000 / 2π = 1591.55 Hz\n\nধাপ ২: কোয়ালিটি ফ্যাক্টর Q\nQ = 200 / 4 = 50.0\n\nধাপ ৩: ব্যান্ডউইথ BW\nBW = 1591.55 / 50 = 31.83 Hz\n\nধাপ ৪: কাটঅফ ফ্রিকোয়েন্সি\nf1 = 1591.55 - 15.915 = 1575.64 Hz\nf2 = 1591.55 + 15.915 = 1607.47 Hz।'
      },
      finalAnswer: {
        en: 'f_r = 1,591.55 Hz (1.592 kHz), Q = 50.0, BW = 31.83 Hz, f1 = 1,575.64 Hz, f2 = 1,607.47 Hz',
        hi: 'f_r = 1,591.55 Hz, Q = 50.0, BW = 31.83 Hz, f1 = 1,575.64 Hz, f2 = 1,607.47 Hz',
        bn: 'f_r = 1,591.55 Hz, Q = 50.0, BW = 31.83 Hz, f1 = 1,575.64 Hz, f2 = 1,607.47 Hz'
      }
    },
    {
      id: 'ex-ch5-l15-2',
      problem: {
        en: 'A series RLC circuit with R = 10 Ω has a resonant frequency f_r = 100 kHz and a bandwidth BW = 2 kHz when energized by a V = 20 V rms source. Determine: (a) Circuit Q-factor, (b) Inductance L and Capacitance C, (c) Resonant maximum current I_max, (d) Circuit current at the half-power frequencies f1 and f2, (e) Maximum voltage across inductor V_L at resonance.',
        hi: 'एक सीरीज RLC परिपथ (R = 10 Ω) की अनुनादी आवृत्ति f_r = 100 kHz तथा बैंडविड्थ BW = 2 kHz है जब इसे 20 V rms स्रोत से जोड़ा जाता है। ज्ञात करें: (a) परिपथ का Q-फैक्टर, (b) प्रेरकत्व L एवं धारिता C, (c) अधिकतम अनुनादी धारा I_max, (d) अर्ध-शक्ति आवृत्तियों पर परिपथ धारा, (e) अनुनाद पर इंडक्टर का अधिकतम वोल्टेज V_L।',
        bn: 'একটি সিরিজ RLC সার্কিটের (R = 10 Ω) রেজোন্যান্ট ফ্রিকোয়েন্সি f_r = 100 kHz এবং ব্যান্ডউইথ BW = 2 kHz যখন এটি 20 V rms উৎসে চালিত হয়। নির্ণয় করুন: (a) সার্কিট Q-ফ্যাক্টর, (b) আবেশক L ও ধারক C, (c) সর্বোচ্চ রেজোন্যান্ট কারেন্ট I_max, (d) হাফ-পাওয়ার ফ্রিকোয়েন্সিতে সার্কিট কারেন্ট, (e) রেজোন্যান্সে আবেশকের সর্বোচ্চ ভোল্টেজ V_L।'
      },
      givenValues: {
        'R': '10 Ω',
        'f_r': '100 kHz = 100,000 Hz',
        'BW': '2 kHz = 2,000 Hz',
        'V_source': '20 V rms'
      },
      solution: {
        en: 'Step 1: Calculate Quality Factor Q\nQ = f_r / BW = 100,000 Hz / 2,000 Hz = 50.0\n\nStep 2: Calculate Inductance L and Capacitance C\nFrom BW = R / (2π L):\nL = R / (2 · π · BW) = 10 / (2 · π · 2000) = 10 / 12566.37 = 7.9577 × 10⁻⁴ H = 0.7958 mH = 795.8 µH\nFrom ω_r² = 1 / (LC):\nC = 1 / [ (2 · π · 100,000)² · 7.9577 × 10⁻⁴ ] = 1 / [ 3.9478 × 10¹¹ · 7.9577 × 10⁻⁴ ] = 1 / 3.14159 × 10⁸ = 3.183 × 10⁻⁹ F = 3.183 nF\n\nStep 3: Calculate Resonant Maximum Current I_max\nI_max = V / R = 20 V / 10 Ω = 2.00 A\n\nStep 4: Calculate Current at Half-Power Cutoffs f1 and f2\nI_half = I_max / √2 = 2.00 / 1.4142 = 1.414 A (Phase angle φ = -45° at f1 and +45° at f2)\n\nStep 5: Calculate Inductor Voltage VL at Resonance\nVL = Q · V_source = 50.0 · 20 V = 1,000.0 V = 1.00 kV\n(Check: XL = 2π · 100000 · 7.9577×10⁻⁴ = 500.0 Ω. VL = I_max · XL = 2.00 · 500 = 1000 V).',
        hi: 'चरण 1: Q-फैक्टर की गणना\nQ = 100,000 / 2,000 = 50.0\n\nचरण 2: L और C का मान\nL = 10 / (2π × 2000) = 0.7958 mH (795.8 µH)\nC = 3.183 nF\n\nचरण 3: अनुनादी धारा I_max\nI_max = 20 / 10 = 2.0 A\n\nचरण 4: अर्ध-शक्ति धारा\nI_half = 2.0 / √2 = 1.414 A\n\nचरण 5: इंडक्टर वोल्टेज VL\nVL = Q × V = 50 × 20 = 1000 V (1 kV)।',
        bn: 'ধাপ ১: Q-ফ্যাক্টর নির্ণয়\nQ = 100,000 / 2,000 = 50.0\n\nধাপ ২: L ও C এর মান\nL = 0.7958 mH (795.8 µH), C = 3.183 nF\n\nধাপ ৩: রেজোন্যান্ট কারেন্ট I_max = 2.0 A\n\nধাপ ৪: হাফ-পাওয়ার কারেন্ট I_half = 1.414 A\n\nধাপ ৫: আবেশক ভোল্টেজ VL = Q × V = 1000 V (1 kV)।'
      },
      finalAnswer: {
        en: 'Q = 50.0, L = 795.8 µH, C = 3.183 nF, I_max = 2.0 A, I_half = 1.414 A, VL = 1,000 V (1 kV)',
        hi: 'Q = 50.0, L = 795.8 µH, C = 3.183 nF, I_max = 2.0 A, I_half = 1.414 A, VL = 1,000 V (1 kV)',
        bn: 'Q = 50.0, L = 795.8 µH, C = 3.183 nF, I_max = 2.0 A, I_half = 1.414 A, VL = 1,000 V (1 kV)'
      }
    },
    {
      id: 'ex-ch5-l15-3',
      problem: {
        en: 'An experimental RF tuned receiver circuit exhibits half-power cutoff frequencies at f1 = 455.0 kHz and f2 = 475.0 kHz. Determine: (a) The exact resonant frequency f_r using the geometric mean property, (b) The bandwidth BW in kHz, (c) The circuit Q-factor, (d) Compare exact f_r with the arithmetic mean and explain.',
        hi: 'एक प्रयोगात्मक आरएफ ट्यून्ड रिसीवर परिपथ की अर्ध-शक्ति कटऑफ आवृत्तियां f1 = 455.0 kHz तथा f2 = 475.0 kHz हैं। ज्ञात करें: (a) ज्यामितीय माध्य नियम से सटीक अनुनादी आवृत्ति f_r, (b) बैंडविड्थ BW (kHz में), (c) परिपथ का Q-फैक्टर, (d) सटीक f_r की समांतर माध्य से तुलना।',
        bn: 'একটি পরীক্ষামূলক আরএফ টিউনড রিসিভার সার্কিটে হাফ-পাওয়ার কাটঅফ ফ্রিকোয়েন্সি f1 = 455.0 kHz এবং f2 = 475.0 kHz পাওয়া গেছে। নির্ণয় করুন: (a) জ্যামিতিক গড় সূত্রে সঠিক রেজোন্যান্ট ফ্রিকোয়েন্সি f_r, (b) ব্যান্ডউইথ BW (kHz), (c) সার্কিটের Q-ফ্যাক্টর, (d) সঠিক f_r এর সাথে পাটিগণিতীয় গড়ের তুলনা।'
      },
      givenValues: {
        'f1': '455.0 kHz = 455,000 Hz',
        'f2': '475.0 kHz = 475,000 Hz'
      },
      solution: {
        en: 'Step 1: Calculate Exact Resonant Frequency f_r (Geometric Mean)\nf_r = √(f1 · f2) = √(455.0 kHz · 475.0 kHz) = √(216,125) = 464.892 kHz\n\nStep 2: Calculate Bandwidth BW\nBW = f2 - f1 = 475.0 kHz - 455.0 kHz = 20.0 kHz\n\nStep 3: Calculate Circuit Q-Factor\nQ = f_r / BW = 464.892 kHz / 20.0 kHz = 23.245\n\nStep 4: Compare with Arithmetic Mean\nf_arithmetic = (455.0 + 475.0) / 2 = 930.0 / 2 = 465.000 kHz\nDifference = 465.000 - 464.892 = 0.108 kHz (only 0.023% discrepancy).\nBecause Q = 23.2 > 10, the resonance curve is highly symmetrical on a linear frequency axis, and the arithmetic mean approximates the true geometric mean with negligible error.',
        hi: 'चरण 1: सटीक अनुनादी आवृत्ति f_r (ज्यामितीय माध्य)\nf_r = √(455.0 × 475.0) = √216125 = 464.892 kHz\n\nचरण 2: बैंडविड्थ BW\nBW = 475.0 - 455.0 = 20.0 kHz\n\nचरण 3: Q-फैक्टर\nQ = 464.892 / 20.0 = 23.245\n\nचरण 4: समांतर माध्य से तुलना\nf_arithmetic = (455 + 475)/2 = 465.000 kHz (अंतर केवल 0.108 kHz है, क्योंकि Q > 10 है)।',
        bn: 'ধাপ ১: সঠিক রেজোন্যান্ট ফ্রিকোয়েন্সি f_r (জ্যামিতিক গড়)\nf_r = √(455.0 × 475.0) = 464.892 kHz\n\nধাপ ২: ব্যান্ডউইথ BW\nBW = 475.0 - 455.0 = 20.0 kHz\n\nধাপ ৩: Q-ফ্যাক্টর\nQ = 464.892 / 20.0 = 23.245\n\nধাপ ৪: পাটিগণিতীয় গড়ের সাথে তুলনা\nf_arithmetic = (455 + 475)/2 = 465.000 kHz (পার্থক্য মাত্র 0.108 kHz, কারণ Q > 10)।'
      },
      finalAnswer: {
        en: 'Exact f_r = 464.89 kHz, BW = 20.0 kHz, Q = 23.25, Arithmetic mean = 465.0 kHz (Discrepancy = 0.023%)',
        hi: 'सटीक f_r = 464.89 kHz, BW = 20.0 kHz, Q = 23.25, समांतर माध्य = 465.0 kHz',
        bn: 'সঠিক f_r = 464.89 kHz, BW = 20.0 kHz, Q = 23.25, পাটিগণিতীয় গড় = 465.0 kHz'
      }
    },
    {
      id: 'ex-ch5-l15-4',
      problem: {
        en: 'A coil having resistance R = 2.5 Ω and inductance L = 80 mH is connected in series with a capacitor C = 2 µF across a standard 230 V, 50 Hz power main. (a) Is the circuit at resonance at 50 Hz? (b) If a variable frequency AC source of 230 V is adjusted to the circuit\'s resonant frequency, calculate Q-factor, resonant current I_0, and the actual voltages across the inductor and capacitor. (c) Why must components be rated well above 230 V?',
        hi: 'एक कॉइल (R = 2.5 Ω, L = 80 mH) C = 2 µF के कैपेसिटर के साथ श्रेणी में 230 V, 50 Hz सप्लाई से जुड़ी है। (a) क्या यह 50 Hz पर अनुनाद में है? (b) यदि 230 V परिवर्ती स्रोत को अनुनादी आवृत्ति पर सेट किया जाए, तो Q-फैक्टर, धारा I_0, तथा L और C पर वोल्टेज की गणना करें। (c) घटकों की वोल्टेज रेटिंग 230 V से बहुत अधिक क्यों होनी चाहिए?',
        bn: 'একটি কয়েল (R = 2.5 Ω, L = 80 mH) এবং একটি ধারক C = 2 µF একটি 230 V, 50 Hz লাইনে যুক্ত। (a) সার্কিটটি কি 50 Hz এ রেজোন্যান্সে আছে? (b) যদি 230 V পরিবর্তনশীল উৎসের কম্পাঙ্ক রেজোন্যান্সে নেওয়া হয়, তবে Q-ফ্যাক্টর, কারেন্ট I_0 এবং L ও C এর ভোল্টেজ কত হবে? (c) কেন কম্পোনেন্টের ভোল্টেজ রেটিং 230 V এর চেয়ে অনেক বেশি হতে হয়?'
      },
      givenValues: {
        'R': '2.5 Ω',
        'L': '80 mH = 0.080 H',
        'C': '2 µF = 2 × 10⁻⁶ F',
        'V_source': '230 V'
      },
      solution: {
        en: 'Step 1: Determine Resonant Frequency f_r\nL · C = 0.080 · 2 × 10⁻⁶ = 1.6 × 10⁻⁷ s²\n√(LC) = √(16 × 10⁻⁸) = 4.0 × 10⁻⁴ s\nf_r = 1 / (2 · π · 4.0 × 10⁻⁴) = 2500 / (2π) = 397.89 Hz\nAnswer to (a): No, the natural resonant frequency is 397.89 Hz, not 50 Hz.\n\nStep 2: Calculate Q-Factor at Resonant Frequency\n√(L / C) = √(0.080 / 2×10⁻⁶) = √(40,000) = 200 Ω\nQ = (1 / R) · √(L / C) = 200 / 2.5 = 80.0\n\nStep 3: Calculate Resonant Current\nI_0 = V / R = 230 V / 2.5 Ω = 92.0 A\n\nStep 4: Calculate Inductor and Capacitor Voltages\nVL = VC = Q · V_source = 80.0 · 230 V = 18,400 V = 18.40 kV!\n(Check: XL = 2π · 397.89 · 0.080 = 200.0 Ω. VL = 92.0 A · 200.0 Ω = 18,400 V).\n\nStep 5: Engineering Safety Evaluation\nEven though the supply voltage is only 230 V, the internal reactive voltages reach 18.4 kilovolts due to the high quality factor Q = 80. Standard 230 V insulation would instantly suffer catastrophic dielectric breakdown.',
        hi: 'चरण 1: अनुनादी आवृत्ति f_r\nf_r = 1 / (2π √(0.08 × 2×10⁻⁶)) = 397.89 Hz (अतः 50 Hz पर परिपथ अनुनाद में नहीं है)।\n\nचरण 2: Q-फैक्टर\nQ = 200 / 2.5 = 80.0\n\nचरण 3: अनुनादी धारा\nI_0 = 230 / 2.5 = 92.0 A\n\nचरण 4: वोल्टेज प्रवर्धन\nVL = VC = 80 × 230 = 18,400 V = 18.4 kV!\n\nचरण 5: सुरक्षा निष्कर्ष\n230 V स्रोत होने के बावजूद आंतरिक वोल्टेज 18.4 kV तक पहुँच जाता है, अतः सामान्य 230V इंसुलेशन तुरंत जल जाएगा।',
        bn: 'ধাপ ১: রেজোন্যান্ট ফ্রিকোয়েন্সি f_r\nf_r = 397.89 Hz (সুতরাং 50 Hz এ রেজোন্যান্স নেই)।\n\nধাপ ২: Q-ফ্যাক্টর\nQ = 200 / 2.5 = 80.0\n\nধাপ ৩: রেজোন্যান্ট কারেন্ট\nI_0 = 230 / 2.5 = 92.0 A\n\nধাপ ৪: ভোল্টেজ বিবর্ধন\nVL = VC = 80 × 230 = 18,400 V = 18.4 kV!\n\nধাপ ৫: নিরাপত্তা মূল্যায়ন\nমাত্র 230 V সরবরাহ সত্ত্বেও অভ্যন্তরীণ রিঅ্যাক্টিভ ভোল্টেজ 18.4 kV তে পৌঁছায়, যার জন্য অতি উচ্চ ভোল্টেজ রেটিং প্রয়োজন।'
      },
      finalAnswer: {
        en: '(a) Not at resonance at 50 Hz (f_r = 397.89 Hz); (b) Q = 80.0, I_0 = 92.0 A, VL = VC = 18.40 kV; (c) High Q multiplies supply voltage by 80x producing dangerous 18.4 kV dielectric stress.',
        hi: '(a) 50 Hz पर अनुनाद नहीं है (f_r = 397.89 Hz); (b) Q = 80.0, I_0 = 92.0 A, VL = VC = 18.40 kV; (c) उच्च Q के कारण वोल्टेज 80 गुना बढ़कर 18.4 kV हो जाता है।',
        bn: '(a) 50 Hz এ রেজোন্যান্স নেই (f_r = 397.89 Hz); (b) Q = 80.0, I_0 = 92.0 A, VL = VC = 18.40 kV; (c) উচ্চ Q এর কারণে অভ্যন্তরীণ ভোল্টেজ ৮০ গুণ বেড়ে ১৮.৪ kV তে পৌঁছায়।'
      }
    },
    {
      id: 'ex-ch5-l15-5',
      problem: {
        en: 'A series resonant circuit with fixed inductance L = 10 mH and capacitance C = 100 nF is tested with three different resistors: Case A (R = 2 Ω), Case B (R = 10 Ω), and Case C (R = 50 Ω). For all three cases, determine: (a) Resonant frequency f_r, (b) Q-factor, (c) Bandwidth BW, (d) Analyze the impact of resistance on circuit selectivity.',
        hi: 'एक सीरीज अनुनादी परिपथ (L = 10 mH, C = 100 nF) को तीन अलग-अलग प्रतिरोधों के साथ परखा जाता है: स्थिति A (R = 2 Ω), स्थिति B (R = 10 Ω), तथा स्थिति C (R = 50 Ω)। तीनों स्थितियों के लिए ज्ञात करें: (a) अनुनादी आवृत्ति f_r, (b) Q-फैक्टर, (c) बैंडविड्थ BW, (d) चयनात्मकता पर प्रभाव का विश्लेषण।',
        bn: 'একটি সিরিজ রেজোন্যান্ট সার্কিট (L = 10 mH, C = 100 nF) তিনটি ভিন্ন রোধ দিয়ে পরীক্ষা করা হলো: কেস A (R = 2 Ω), কেস B (R = 10 Ω), এবং কেস C (R = 50 Ω)। তিনটি ক্ষেত্রে নির্ণয় করুন: (a) রেজোন্যান্ট ফ্রিকোয়েন্সি f_r, (b) Q-ফ্যাক্টর, (c) ব্যান্ডউইথ BW, (d) সিলেক্টিভিটির ওপর রোধের প্রভাব।'
      },
      givenValues: {
        'L': '10 mH = 0.010 H',
        'C': '100 nF = 10⁻⁷ F',
        'RA': '2 Ω',
        'RB': '10 Ω',
        'RC': '50 Ω'
      },
      solution: {
        en: 'Step 1: Calculate Resonant Frequency f_r (Invariant for all three cases)\nL · C = 0.010 · 10⁻⁷ = 10⁻⁹ s²\n√(LC) = √(10 × 10⁻¹⁰) = 3.162277 × 10⁻⁵ s\nf_r = 1 / (2 · π · 3.162277 × 10⁻⁵) = 5,032.92 Hz = 5.033 kHz\nCharacteristic Impedance Z_c = √(L / C) = √(0.010 / 10⁻⁷) = √100,000 = 316.23 Ω\n\nStep 2: Case A (R = 2 Ω - Low Resistance)\nQ_A = Z_c / RA = 316.23 / 2 = 158.11\nBW_A = f_r / Q_A = 5032.92 / 158.11 = 31.83 Hz\nResponse: Extremely sharp, razor-thin peak, supreme selectivity.\n\nStep 3: Case B (R = 10 Ω - Medium Resistance)\nQ_B = Z_c / RB = 316.23 / 10 = 31.62\nBW_B = f_r / Q_B = 5032.92 / 31.62 = 159.15 Hz\nResponse: Moderately sharp peak, 5x wider bandwidth than Case A.\n\nStep 4: Case C (R = 50 Ω - High Resistance)\nQ_C = Z_c / RC = 316.23 / 50 = 6.32\nBW_C = f_r / Q_C = 5032.92 / 6.32 = 795.77 Hz\nResponse: Flat, broad curve, sluggish response, poor channel discrimination.\n\nSummary Comparison:\nIncreasing resistance by 25x (from 2 Ω to 50 Ω) drops Q from 158.1 to 6.3 and expands bandwidth 25-fold (from 31.8 Hz to 795.8 Hz), proving that lower loop resistance is essential for high selectivity.',
        hi: 'चरण 1: अनुनादी आवृत्ति f_r (तीनों के लिए समान)\nf_r = 5032.92 Hz = 5.033 kHz, Z_c = 316.23 Ω\n\nचरण 2: स्थिति A (R = 2 Ω)\nQ_A = 316.23 / 2 = 158.11\nBW_A = 31.83 Hz (अत्यधिक तीव्र चयनात्मकता)\n\nचरण 3: स्थिति B (R = 10 Ω)\nQ_B = 316.23 / 10 = 31.62\nBW_B = 159.15 Hz\n\nचरण 4: स्थिति C (R = 50 Ω)\nQ_C = 316.23 / 50 = 6.32\nBW_C = 795.77 Hz (चपटा वक्र, दुर्बल चयनात्मकता)।',
        bn: 'ধাপ ১: রেজোন্যান্ট ফ্রিকোয়েন্সি f_r = 5032.92 Hz, Z_c = 316.23 Ω\n\nধাপ ২: কেস A (R = 2 Ω)\nQ_A = 158.11, BW_A = 31.83 Hz (অত্যন্ত তীক্ষ্ণ সিলেক্টিভিটি)\n\nধাপ ৩: কেস B (R = 10 Ω)\nQ_B = 31.62, BW_B = 159.15 Hz\n\nধাপ ৪: কেস C (R = 50 Ω)\nQ_C = 6.32, BW_C = 795.77 Hz (সমতল কার্ভ, দুর্বল সিলেক্টিভিটি)।'
      },
      finalAnswer: {
        en: 'f_r = 5.033 kHz. Case A (R=2Ω): Q=158.1, BW=31.8 Hz; Case B (R=10Ω): Q=31.6, BW=159.2 Hz; Case C (R=50Ω): Q=6.3, BW=795.8 Hz',
        hi: 'f_r = 5.033 kHz। स्थिति A: Q=158.1, BW=31.8 Hz; स्थिति B: Q=31.6, BW=159.2 Hz; स्थिति C: Q=6.3, BW=795.8 Hz',
        bn: 'f_r = 5.033 kHz। কেস A: Q=158.1, BW=31.8 Hz; কেস B: Q=31.6, BW=159.2 Hz; কেস C: Q=6.3, BW=795.8 Hz'
      }
    }
  ],
  importantPoints: {
    en: [
      'Quality Factor Q measures resonant energy storage vs dissipation: Q = (ω_r L)/R = (1/R)·√(L/C) for series RLC.',
      'Bandwidth is inversely proportional to Q: BW = f_r / Q = R / (2π L). Lower resistance yields narrower bandwidth and higher selectivity.',
      'At the half-power cutoff frequencies (f1 and f2), circuit power is 50% (P = Pmax/2), current is 70.7% (I = Imax/√2), and net reactance equals resistance (|XL - XC| = R).',
      'The resonant frequency is always the exact GEOMETRIC MEAN of the half-power frequencies: f_r = √(f1 · f2).',
      'In a high-Q series RLC circuit, voltages across the inductor and capacitor are magnified by factor Q: VL = VC = Q · V_source.'
    ],
    hi: [
      'गुणवत्ता गुणांक Q संचित ऊर्जा और व्यय ऊर्जा का अनुपात है: Q = (ω_r L)/R = (1/R)·√(L/C)।',
      'बैंडविड्थ Q के व्युत्क्रमानुपाती होती है: BW = f_r / Q = R / (2π L)। कम प्रतिरोध से संकीर्ण बैंडविड्थ और उच्च चयनात्मकता प्राप्त होती है।',
      'अर्ध-शक्ति कटऑफ आवृत्तियों (f1, f2) पर शक्ति 50% (P = Pmax/2), धारा 70.7% (I = Imax/√2), तथा रिएक्टेंस प्रतिरोध के बराबर (|XL - XC| = R) होता है।',
      'अनुनादी आवृत्ति अर्ध-शक्ति आवृत्तियों का सटीक ज्यामितीय माध्य होती है: f_r = √(f1 · f2)।',
      'सीरीज अनुनाद में इंडक्टर और कैपेसिटर पर वोल्टेज सप्लाई वोल्टेज से Q गुना प्रवर्धित हो जाता है: VL = VC = Q · V।'
    ],
    bn: [
      'কোয়ালিটি ফ্যাক্টর Q হলো সঞ্চিত ও অপচয়কৃত শক্তির অনুপাত: Q = (ω_r L)/R = (1/R)·√(L/C)।',
      'ব্যান্ডউইথ Q এর ব্যস্তানুপাতিক: BW = f_r / Q = R / (2π L)। কম রোধে সরু ব্যান্ডউইথ ও উচ্চ সিলেক্টিভিটি পাওয়া যায়।',
      'হাফ-পাওয়ার কাটঅফ ফ্রিকোয়েন্সিতে (f1, f2) পাওয়ার ৫০% (P = Pmax/2), কারেন্ট ৭০.৭% (I = Imax/√2), এবং নেট রিঅ্যাকট্যান্স রোধের সমান (|XL - XC| = R) হয়।',
      'রেজোন্যান্ট ফ্রিকোয়েন্সি হলো হাফ-পাওয়ার ফ্রিকোয়েন্সিদ্বয়ের সঠিক জ্যামিতিক গড়: f_r = √(f1 · f2)।',
      'সিরিজ রেজোন্যান্সে আবেশক ও ধারকের ভোল্টেজ সাপ্লাই ভোল্টেজের Q গুণ বিবর্ধিত হয়: VL = VC = Q · V।'
    ]
  },
  practicalApplications: {
    en: [
      'Radio Communication Receivers: High-Q band-pass filters isolate weak desired signals (e.g. 10 kHz AM channel spacing) while rejecting strong adjacent broadcast stations.',
      'Quartz Crystal Oscillators: Utilizing mechanical piezoelectric resonance with ultra-high Q (> 100,000) for microsecond-precise clock generation in microcontrollers and computers.',
      'RFID Tag Readers: Resonant antenna loops tuned to 13.56 MHz (NFC) with optimized Q to transfer data and magnetic power simultaneously.',
      'Audio Equalizers & Crossovers: Parametric EQ circuits with adjustable Q knobs allowing sound engineers to boost or cut narrow audio bands without altering neighboring frequencies.'
    ],
    hi: [
      'रेडियो संचार रिसीवर: उच्च-Q बैंड-पास फिल्टर निकटवर्ती चैनलों को रोककर केवल वांछित रेडियो सिग्नल का चयन करते हैं।',
      'क्वार्ट्ज क्रिस्टल ऑसिलेटर: माइक्रोकंट्रोलर और घड़ियों में अत्यंत उच्च Q (> 100,000) के साथ सटीक समय संकेत उत्पन्न करना।',
      'आरएफआईडी एवं एनएफसी रीडर: 13.56 MHz पर ट्यून की गई उच्च-Q एंटीना कॉइल जो डेटा और पावर दोनों स्थानांतरित करती है।',
      'ऑडियो इक्वलाइज़र: एडजस्टेबल Q नॉब वाले पैरामीट्रिक EQ सर्किट जो विशिष्ट ऑडियो फ्रीक्वेंसी बैंड को सटीक रूप से बदलते हैं।'
    ],
    bn: [
      'রেডিও যোগাযোগ রিসিভার: উচ্চ-Q ব্যান্ড-পাস ফিল্টার কাঙ্ক্ষিত চ্যানেল নির্বাচন ও নিকটস্থ অনাকাঙ্ক্ষিত স্টেশন বর্জন করে।',
      'কোয়ার্টজ ক্রিস্টাল অসিলেটর: মাইক্রোকন্ট্রোলার ও কম্পিউটারে চরম উচ্চ Q (> ১০০,০০০) সম্পন্ন অত্যন্ত নিখুঁত ক্লক সিগন্যাল তৈরি।',
      'RFID ও NFC রিডার: 13.56 MHz ফ্রিকোয়েন্সিতে অপ্টিমাইজড Q সম্পন্ন অ্যান্টেনা কয়েলের মাধ্যমে ডেটা ও পাওয়ার স্থানান্তর।',
      'অডিও ইকুয়ালাইজার: প্যারামেট্রিক EQ-তে পরিবর্তনশীল Q এর সাহায্যে নির্দিষ্ট অডিও ব্যান্ড বুস্ট বা কাট করা।'
    ]
  },
  commonMistakes: {
    en: [
      'Calculating resonant frequency as arithmetic mean: f_r = (f1 + f2)/2 is only an approximation valid for Q > 10. The true exact relationship is geometric mean: f_r = √(f1 · f2).',
      'Confusing Q-factor formulas: for series RLC, Q = (1/R)·√(L/C), but for parallel RLC, Q = R·√(C/L).',
      'Thinking that increasing circuit resistance R sharpens the resonant response. In fact, increasing R lowers Q and broadens the bandwidth, making the circuit less selective.',
      'Forgetting that at the half-power frequencies, current is NOT half of maximum; it is 1/√2 = 0.7071 of maximum current (because Power = I²R drops by half when current drops by √2).'
    ],
    hi: [
      'अनुनादी आवृत्ति को समांतर माध्य समझ लेना: f_r = (f1 + f2)/2 केवल उच्च Q के लिए सन्निकटन है। सही सूत्र ज्यामितीय माध्य f_r = √(f1 · f2) है।',
      'सीरीज और पैरेलल के Q सूत्रों में भ्रम: सीरीज में Q = (1/R)√(L/C) और पैरेलल में Q = R√(C/L) होता है।',
      'यह सोचना कि प्रतिरोध R बढ़ाने से चयनात्मकता बढ़ती है। वास्तव में R बढ़ाने से Q घटता है और बैंडविड्थ चौड़ी हो जाती है।',
      'यह मान लेना कि हाफ-पावर फ्रीक्वेंसी पर धारा आधी हो जाती है। वास्तव में धारा 1/√2 = 70.7% होती है (क्योंकि P = I²R)।'
    ],
    bn: [
      'রেজোন্যান্ট ফ্রিকোয়েন্সিকে পাটিগণিতীয় গড় মনে করা: f_r = (f1 + f2)/2 কেবল উচ্চ Q এর জন্য কার্যকর। সঠিক সূত্র হলো জ্যামিতিক গড় f_r = √(f1 · f2)।',
      'সিরিজ ও প্যারালালের Q সূত্রে গোলমাল করা: সিরিজে Q = (1/R)√(L/C) আর প্যারালালে Q = R√(C/L)।',
      'মনে করা যে রোধ R বাড়ালে সিলেক্টিভিটি বাড়ে। আসলে R বাড়ালে Q কমে এবং ব্যান্ডউইথ চওড়া হয়ে সিলেক্টিভিটি হ্রাস পায়।',
      'হাফ-পাওয়ার ফ্রিকোয়েন্সিতে কারেন্ট অর্ধেক ভাবা। প্রকৃতপক্ষে কারেন্ট ১/√২ = ৭০.৭১% হয়।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch5-l15-1',
      question: {
        en: 'The Quality Factor (Q) of a series RLC circuit can be increased by:',
        hi: 'एक सीरीज RLC परिपथ के गुणवत्ता गुणांक (Q) को बढ़ाया जा सकता है:',
        bn: 'একটি সিরিজ RLC সার্কিটের কোয়ালিটি ফ্যাক্টর (Q) বৃদ্ধি করা যায়:'
      },
      options: [
        { id: 'opt-a', text: { en: 'Increasing resistance R', hi: 'प्रतिरोध R को बढ़ाकर', bn: 'রোধ R বৃদ্ধি করে' } },
        { id: 'opt-b', text: { en: 'Decreasing resistance R', hi: 'प्रतिरोध R को घटाकर', bn: 'রোধ R কমিয়ে' } },
        { id: 'opt-c', text: { en: 'Decreasing inductance L', hi: 'प्रेरकत्व L को घटाकर', bn: 'আবেশক L কমিয়ে' } },
        { id: 'opt-d', text: { en: 'Increasing capacitance C', hi: 'धारिता C को बढ़ाकर', bn: 'ধারকত্ব C বৃদ্ধি করে' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'Since Q = (1/R)·√(L/C) = ω_r L / R, Q is inversely proportional to resistance R. Decreasing R directly increases the Q-factor, narrowing bandwidth and sharpening selectivity.',
        hi: 'चूँकि Q = (1/R)·√(L/C) है, अतः प्रतिरोध R को घटाने से Q-फैक्टर बढ़ता है।',
        bn: 'যেহেতু Q = (1/R)·√(L/C), তাই রোধ R কমালে সরাসরি Q-ফ্যাক্টর বৃদ্ধি পায়।'
      }
    },
    {
      id: 'mcq-ch5-l15-2',
      question: {
        en: 'At the half-power cutoff frequencies f1 and f2 of a series resonant circuit, the circuit current is:',
        hi: 'एक सीरीज अनुनादी परिपथ की अर्ध-शक्ति कटऑफ आवृत्तियों f1 और f2 पर परिपथ धारा होती है:',
        bn: 'একটি সিরিজ রেজোন্যান্ট সার্কিটের হাফ-পাওয়ার কাটঅফ ফ্রিকোয়েন্সি f1 ও f2 তে সার্কিট কারেন্ট হয়:'
      },
      options: [
        { id: 'opt-a', text: { en: '0.500 of resonant current (I_0 / 2)', hi: 'अनुनादी धारा का 0.500 (I_0 / 2)', bn: 'রেজোন্যান্ট কারেন্টের ০.৫০০ (I_0 / 2)' } },
        { id: 'opt-b', text: { en: '0.707 of resonant current (I_0 / √2)', hi: 'अनुनादी धारा का 0.707 (I_0 / √2)', bn: 'রেজোন্যান্ট কারেন্টের ০.৭০৭ (I_0 / √২)' } },
        { id: 'opt-c', text: { en: '1.414 times resonant current (√2 · I_0)', hi: 'अनुनादी धारा का 1.414 गुना (√2 · I_0)', bn: 'রেজোন্যান্ট কারেন্টের ১.৪১৪ গুণ (√২ · I_0)' } },
        { id: 'opt-d', text: { en: 'Zero (0 A)', hi: 'शून्य (0 A)', bn: 'শূন্য (0 A)' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'Power is P = I²R. For power to drop to half of maximum (P = Pmax / 2), current must drop to I = I_0 / √2 = 0.7071 · I_0.',
        hi: 'शक्ति P = I²R होती है। शक्ति आधी होने के लिए धारा I = I_0 / √2 = 0.7071 · I_0 होनी चाहिए।',
        bn: 'পাওয়ার P = I²R। পাওয়ার অর্ধেক (Pmax / 2) হতে হলে কারেন্ট I = I_0 / √2 = ০.৭০৭১ · I_0 হতে হয়।'
      }
    },
    {
      id: 'mcq-ch5-l15-3',
      question: {
        en: 'If a series resonant circuit has a resonant frequency f_r = 10 kHz and a bandwidth BW = 200 Hz, its Quality Factor Q is:',
        hi: 'यदि एक सीरीज अनुनादी परिपथ की अनुनादी आवृत्ति f_r = 10 kHz तथा बैंडविड्थ BW = 200 Hz है, तो इसका गुणवत्ता गुणांक Q है:',
        bn: 'যদি একটি সিরিজ রেজোন্যান্ট সার্কিটের রেজোন্যান্ট ফ্রিকোয়েন্সি f_r = 10 kHz এবং ব্যান্ডউইথ BW = 200 Hz হয়, তবে এর কোয়ালিটি ফ্যাক্টর Q কত?'
      },
      options: [
        { id: 'opt-a', text: { en: '20', hi: '20', bn: '২০' } },
        { id: 'opt-b', text: { en: '50', hi: '50', bn: '৫০' } },
        { id: 'opt-c', text: { en: '2000', hi: '2000', bn: '২০০০' } },
        { id: 'opt-d', text: { en: '0.02', hi: '0.02', bn: '০.০২' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'Q = f_r / BW = 10,000 Hz / 200 Hz = 50.',
        hi: 'Q = f_r / BW = 10,000 / 200 = 50।',
        bn: 'Q = f_r / BW = 10,000 / 200 = ৫০।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch5-l15-1',
      question: {
        en: 'A series RLC circuit with R = 5 Ω, L = 50 mH, and C = 2 µF is supplied by a 100 V variable-frequency AC source. Calculate: (a) Resonant frequency f_r, (b) Circuit Q-factor, (c) Bandwidth BW in Hz, (d) Voltages VL and VC at resonance.',
        hi: 'एक सीरीज RLC परिपथ (R = 5 Ω, L = 50 mH, C = 2 µF) 100 V परिवर्ती-आवृत्ति एसी स्रोत से संचालित है। गणना करें: (a) अनुनादी आवृत्ति f_r, (b) परिपथ का Q-फैक्टर, (c) बैंडविड्थ BW (Hz में), (d) अनुनाद पर VL एवं VC वोल्टेज।',
        bn: 'একটি সিরিজ RLC সার্কিট (R = 5 Ω, L = 50 mH, C = 2 µF) একটি 100 V পরিবর্তনশীল এসি উৎসে চালিত। নির্ণয় করুন: (a) রেজোন্যান্ট ফ্রিকোয়েন্সি f_r, (b) সার্কিট Q-ফ্যাক্টর, (c) ব্যান্ডউইথ BW (Hz), (d) রেজোন্যান্সে VL ও VC ভোল্টেজ।'
      },
      hint: {
        en: 'LC = 0.050 · 2×10⁻⁶ = 10⁻⁷. f_r = 1/(2π√10⁻⁷) = 503.29 Hz. √(L/C) = √(0.05/2×10⁻⁶) = √25000 = 158.11 Ω. Q = 158.11 / 5 = 31.62. BW = 503.29 / 31.62 = 15.92 Hz. VL = VC = Q · V = 31.62 · 100 = 3162 V.',
        hi: 'f_r = 503.29 Hz, Q = 31.62, BW = 15.92 Hz, VL = VC = 31.62 × 100 = 3162 V।',
        bn: 'f_r = 503.29 Hz, Q = 31.62, BW = 15.92 Hz, VL = VC = 31.62 × 100 = 3162 V।'
      },
      answerKey: {
        en: '(a) f_r = 1 / [ 2 · π · √(0.050 · 2×10⁻⁶) ] = 1 / [ 2 · π · 3.1623×10⁻⁴ ] = 503.29 Hz.\n(b) Q = (1 / R) · √(L / C) = (1 / 5) · √(0.050 / 2×10⁻⁶) = (1 / 5) · 158.114 = 31.62.\n(c) Bandwidth BW = f_r / Q = 503.29 / 31.62 = 15.92 Hz (or BW = R / (2π L) = 5 / (2 · π · 0.050) = 15.92 Hz).\n(d) Voltages at Resonance: VL = VC = Q · V_source = 31.62 · 100 V = 3,162.28 V = 3.162 kV.',
        hi: '(a) f_r = 503.29 Hz।\n(b) Q-फैक्टर = 31.62।\n(c) बैंडविड्थ BW = 15.92 Hz।\n(d) VL = VC = 3,162.28 V (3.162 kV)।',
        bn: '(a) f_r = 503.29 Hz।\n(b) Q-ফ্যাক্টর = 31.62।\n(c) ব্যান্ডউইথ BW = 15.92 Hz।\n(d) VL = VC = 3,162.28 V (3.162 kV)।'
      }
    },
    {
      id: 'pq-ch5-l15-2',
      question: {
        en: 'A broadcast antenna filter must have a resonant frequency f_r = 1.0 MHz and a bandwidth BW = 10 kHz. If the inductor is L = 100 µH: (a) Find the required Q-factor, (b) Find the maximum allowable series resistance R, (c) Calculate the required tuning capacitor C.',
        hi: 'एक ब्रॉडकास्ट एंटीना फिल्टर की अनुनादी आवृत्ति f_r = 1.0 MHz तथा बैंडविड्थ BW = 10 kHz होनी चाहिए। यदि प्रेरक L = 100 µH है: (a) आवश्यक Q-फैक्टर ज्ञात करें, (b) अधिकतम अनुमेय सीरीज प्रतिरोध R ज्ञात करें, (c) आवश्यक ट्यूनिंग कैपेसिटर C की गणना करें।',
        bn: 'একটি ব্রডকাস্ট অ্যান্টেনা ফিল্টারের রেজোন্যান্ট ফ্রিকোয়েন্সি f_r = 1.0 MHz এবং ব্যান্ডউইথ BW = 10 kHz হতে হবে। যদি আবেশক L = 100 µH হয়: (a) প্রয়োজনীয় Q-ফ্যাক্টর নির্ণয় করুন, (b) সর্বোচ্চ অনুমোদিত সিরিজ রোধ R নির্ণয় করুন, (c) প্রয়োজনীয় টিউনিং ধারক C এর মান বের করুন।'
      },
      hint: {
        en: 'Q = f_r / BW = 10⁶ / 10⁴ = 100. R = 2π · BW · L = 2π · 10000 · 100×10⁻⁶ = 6.283 Ω. C = 1 / (4π² f_r² L) = 1 / (4π² · 10¹² · 10⁻⁴) = 253.3 pF.',
        hi: 'Q = 10⁶ / 10⁴ = 100। R = 2π × 10000 × 10⁻⁴ = 6.283 Ω। C = 253.3 pF।',
        bn: 'Q = 10⁶ / 10⁴ = 100। R = 6.283 Ω। C = 253.3 pF।'
      },
      answerKey: {
        en: '(a) Q = f_r / BW = 1,000,000 Hz / 10,000 Hz = 100.0.\n(b) From BW = R / (2π L):\nR = 2 · π · BW · L = 2 · π · 10,000 · 100 × 10⁻⁶ = 2 · π · 1.0 = 6.283 Ω.\n(c) From ω_r² = 1 / (LC):\nC = 1 / [ (2 · π · 10⁶)² · 100 × 10⁻⁶ ] = 1 / [ 3.94784 × 10¹³ · 10⁻⁴ ] = 1 / (3.94784 × 10⁹) = 2.533 × 10⁻¹⁰ F = 253.3 pF.',
        hi: '(a) Q = 100.0।\n(b) अधिकतम प्रतिरोध R = 6.283 Ω।\n(c) आवश्यक कैपेसिटेंस C = 253.3 pF।',
        bn: '(a) Q = 100.0।\n(b) সর্বোচ্চ রোধ R = 6.283 Ω।\n(c) প্রয়োজনীয় ধারকত্ব C = 253.3 pF।'
      }
    }
  ]
};
