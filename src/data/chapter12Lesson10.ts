import { Lesson } from '../types';

export const LESSON_AC_LOCUS_DIAGRAMS: Lesson = {
  id: 'lsn-ch12-ac-locus-diagrams',
  topicId: 'tp-power-ac-circuit',
  chapterId: 'ch-ac-circuits',
  order: 10,
  title: {
    en: 'AC Locus Diagrams',
    hi: 'एसी लोकस (बिंदुपथ) आरेख',
    bn: 'এসি লোকাস ডায়াগ্রাম'
  },
  description: {
    en: 'Master the geometric synthesis of impedance (Z), admittance (Y), and current (I) locus diagrams in the complex plane as circuit parameters (R, L, C, or frequency ω) continuously vary. Analyze circular inversion mappings, series RL and RC circuits with variable resistance or reactance, maximum active power conditions, and the foundational Heyland circle diagram for induction machines.',
    hi: 'सम्मिश्र तल में प्रतिबाधा (Z), प्रवेश्यता (Y), एवं धारा (I) लोकस (बिंदुपथ) आरेखों के ज्यामितीय संश्लेषण में महारत हासिल करें जब परिपथ प्राचल (R, L, C या आवृत्ति ω) लगातार बदलते हैं। वृत्ताकार व्युत्क्रमण प्रतिचित्रण (Circular Inversion), परिवर्तनीय प्रतिरोध या प्रतिघात वाले श्रेणी RL एवं RC परिपथ, अधिकतम सक्रिय शक्ति स्थितियाँ, तथा प्रेरण मशीनों के हेयलैंड वृत्त आरेख का विश्लेषण करें।',
    bn: 'জটিল সমতলে প্রতিবাধা (Z), প্রবেশ্যতা (Y) ও কারেন্ট (I) লোকাস ডায়াগ্রামের জ্যামিতিক বিশ্লেষণে দক্ষতা অর্জন করুন যখন বর্তনীর উপাদানসমূহ (R, L, C বা কম্পাঙ্ক ω) ক্রমাগত পরিবর্তিত হয়। বৃত্তাকার বিপরীত ম্যাপিং, পরিবর্তনশীল রোধ বা রিঅ্যাক্ট্যান্স বিশিষ্ট শ্রেণি RL ও RC বর্তনী, সর্বোচ্চ সক্রিয় ক্ষমতার শর্ত এবং ইনডাকশন মেশিনের হেইল্যান্ড সার্কেল ডায়াগ্রাম আয়ত্ত করুন।'
  },
  estimatedMinutes: 45,
  easyExplanation: {
    en: 'When tuning an AC electrical circuit—such as adjusting a rheostat in a motor drive, turning a variable capacitor in a radio receiver, or altering the rotor slip of an induction machine—the voltage and current phasors do not stay fixed. Instead, as one component changes from zero to infinity, the tip of the current phasor traces out a geometric trajectory in the complex plane known as a "Locus Diagram". Because admittance is the mathematical inversion of impedance (Y = 1/Z), complex variable geometry proves that straight-line impedance trajectories always transform into elegant circular arcs or semicircles for current. This allows power engineers to instantly read off maximum power, operating limits, and stability without solving thousands of equations.',
    hi: 'जब किसी एसी सर्किट को ट्यून किया जाता है—जैसे मोटर ड्राइव में रिओस्टेट बदलना, रेडियो में वेरिएबल कैपेसिटर घुमाना, या इंडक्शन मोटर का रोटर स्लिप बदलना—तो वोल्टेज और करंट फेजर स्थिर नहीं रहते। जब कोई घटक शून्य से अनंत तक बदलता है, तो करंट फेजर का सिरा सम्मिश्र तल में एक ज्यामितीय पथ खींचता है जिसे "लोकस (बिंदुपथ) आरेख" कहते हैं। चूंकि प्रवेश्यता प्रतिबाधा का व्युत्क्रम होती है (Y = 1/Z), ज्यामितीय रूप से सीधी रेखा वाली प्रतिबाधा धारा के लिए सुंदर अर्धवृत्तों (semicircles) में बदल जाती है। इससे इंजीनियर बिना जटिल गणनाओं के सीधे अधिकतम शक्ति और स्थिरता बिंदु देख सकते हैं।',
    bn: 'কোনো এসি বর্তনী টিউন করার সময়—যেমন মোটরের স্পিড পরিবর্তনে রিহোস্ট্যাট অ্যাডজাস্ট করা বা রেডিও টিউনারে পরিবর্তনশীল ক্যাপাসিটর ঘোরানো—কারেন্ট ও ভোল্টেজ ফেজর স্থির থাকে না। কোনো উপাদানের মান শূন্য থেকে অসীমে পরিবর্তিত হলে কারেন্ট ফেজরের শীর্ষবিন্দু জটিল সমতলে যে জ্যামিতিক গতিপথ তৈরি করে তাকে "লোকাস ডায়াগ্রাম" বলা হয়। যেহেতু অ্যাডমিট্যান্স হলো ইম্পিডেন্সের উল্টো (Y = ১/Z), কনফরমাল ম্যাপিংয়ের নিয়মে সরলরৈখিক ইম্পিডেন্স লোকাসটি কারেন্টের ক্ষেত্রে একটি নিখুঁত অর্ধবৃত্তে (Semicircle) রূপান্তরিত হয়। এর ফলে প্রকৌশলীরা জটিল সমীকরণ সমাধান ছাড়াই সর্বোচ্চ ক্ষমতা ও স্থিতিশীলতা নির্ধারণ করতে পারেন।'
  },
  detailedExplanation: {
    en: '1. Fundamentals of AC Locus Diagrams:\nA locus diagram is the continuous curve traced by the tip of a complex phasor (Impedance Z, Admittance Y, or Current I) in the Argand plane as one single circuit variable (resistance R, inductive reactance X_L, capacitive reactance X_C, or frequency ω) varies continuously over a specified range (typically from 0 to +∞).\nBecause reference voltage phasor V is usually held fixed along the positive real axis (V = |V| ∠0°), the current phasor is directly proportional to admittance: I = V · Y = |V| · (G + jB).\nHence, the Current Locus is geometrically identical to the Admittance Locus scaled by magnitude |V|.\n\n2. The Circular Inversion Principle (Mapping of 1/Z):\nIn complex analysis, the conformal mapping w = 1/z maps:\n- Any straight line NOT passing through the origin in the z-plane into a CIRCLE passing through the origin in the w-plane.\n- The diameter of this resulting circle is equal to the reciprocal of the perpendicular distance from the origin to the straight line in the z-plane.\n- Semicircles in the 1st quadrant of the z-plane map into semicircles in the 4th quadrant of the w-plane (complex conjugate inversion: 1/(R + jX) = (R - jX)/(R² + X²)).\n\n3. Series RL Circuit with Variable Resistance R (Fixed X_L, 0 ≤ R < ∞):\n- Impedance Equation: Z = R + jX_L. Since X_L is constant, as R increases from 0 to ∞, the tip of Z traces a HORIZONTAL STRAIGHT LINE in the 1st quadrant, parallel to the real axis at height +jX_L.\n- Perpendicular distance from origin to line: d = X_L.\n- Admittance: Y = 1 / (R + jX_L) = (R - jX_L) / (R² + X_L²) = G - jB.\n  Notice that G = R / (R² + X_L²) and B = X_L / (R² + X_L²).\n  Squaring and adding yields: G² + (B - 1/(2X_L))² = (1/(2X_L))².\n- Admittance Locus: A SEMICIRCLE in the 4th quadrant with:\n  - Center: (0, -j 1/(2X_L))\n  - Radius: 1 / (2X_L)\n  - Diameter: 1 / X_L along the negative imaginary axis.\n- Current Locus (I = V · Y):\n  - Semicircle in the 4th quadrant (lagging current) with diameter I_max = |V| / X_L along the -j axis.\n  - At R = 0 (pure inductor): I = |V| / X_L ∠-90° (maximum current, purely reactive, zero real power).\n  - At R = X_L: Power factor angle φ = -45°. Active power is MAXIMUM: P_max = |V|² / (2X_L).\n  - As R → ∞: I → 0 (origin).\n\n4. Series RL Circuit with Variable Reactance X_L (Fixed R, 0 ≤ X_L < ∞):\n- Impedance Equation: Z = R + jX_L. Since R is fixed, as X_L varies from 0 to ∞, the tip of Z traces a VERTICAL STRAIGHT LINE in the 1st quadrant, perpendicular to the real axis at real distance +R.\n- Perpendicular distance from origin: d = R.\n- Admittance & Current Locus: A SEMICIRCLE in the 4th quadrant with:\n  - Diameter: I_max = |V| / R along the POSITIVE REAL AXIS.\n  - Center: (|V| / (2R), 0)\n  - Radius: |V| / (2R)\n  - At X_L = 0 (pure resistor): I = |V| / R ∠0° (maximum current, purely real, in phase with V).\n  - As X_L → ∞: I → 0 along the circular arc.\n\n5. Series RC Circuit with Variable Resistance R (Fixed X_C, 0 ≤ R < ∞):\n- Impedance Equation: Z = R - jX_C. Horizontal straight line in the 4th quadrant at height -jX_C.\n- Current Locus: A SEMICIRCLE in the 1st QUADRANT (leading current) with:\n  - Diameter: I_max = |V| / X_C along the POSITIVE IMAGINARY AXIS.\n  - Center: (0, +j |V| / (2X_C))\n  - At R = 0: I = |V| / X_C ∠+90° (purely capacitive current).\n  - At R = X_C: φ = +45°, P_max = |V|² / (2X_C).\n  - As R → ∞: I → 0.\n\n6. Series RC Circuit with Variable Capacitive Reactance X_C (Fixed R, 0 ≤ X_C < ∞):\n- Impedance Equation: Z = R - jX_C. Vertical line downwards at Re(Z) = R.\n- Current Locus: A SEMICIRCLE in the 1st QUADRANT with:\n  - Diameter: I_max = |V| / R along the POSITIVE REAL AXIS.\n  - Center: (|V| / (2R), 0)\n  - At X_C = 0 (shorted capacitor): I = |V| / R ∠0°.\n  - As X_C → ∞ (open circuit): I → 0.\n\n7. The Heyland Circle Diagram for Three-Phase Induction Motors:\nIn electric machinery, the stator and rotor of an induction motor can be represented as an equivalent transformer circuit where the mechanical load is modeled as a variable resistor R_2\'(1 - s) / s, where s is rotor slip (s = 1 at standstill/locked rotor, s ≈ 0.01 at full load, s = 0 at synchronous speed).\nBecause the equivalent rotor branch is a series RL circuit with variable resistance R(s), the stator input current traces a classic circular locus (Heyland Circle Diagram):\n- Points on the circle directly yield: stator current, rotor current, power factor angle φ, active input power, electromagnetic torque, mechanical shaft output power, rotor copper loss, and efficiency!\n- A single circle diagram constructed from no-load and blocked-rotor tests eliminates the need for destructive high-power dynamometer testing.',
    hi: '1. लोकस आरेख: जब किसी सर्किट का कोई घटक (R, L, C या आवृत्ति) बदलता है, तो सम्मिश्र तल में फेजर के सिरे द्वारा बनाया गया वक्र लोकस आरेख कहलाता है।\n2. वृत्ताकार व्युत्क्रमण नियम: मूल बिंदु से न गुजरने वाली सरल रेखा z-तल में होती है, तो w = 1/z व्युत्क्रमण से वह w-तल में मूल बिंदु से गुजरने वाले एक वृत्त में बदल जाती है।\n3. श्रेणी RL परिपथ (परिवर्तनीय R, स्थिर X_L):\n   - Z लोकस: 1st क्वाड्रेंट में X_L ऊँचाई पर क्षैतिज रेखा।\n   - Current (I) लोकस: 4th क्वाड्रेंट में अर्धवृत्त, जिसका व्यास V / X_L ऋणात्मक काल्पनिक अक्ष (-j) पर होता है।\n   - R = X_L पर अधिकतम शक्ति P_max = V² / (2 X_L) प्राप्त होती है।\n4. श्रेणी RL परिपथ (परिवर्तनीय X_L, स्थिर R):\n   - Z लोकस: R दूरी पर ऊर्ध्वाधर रेखा।\n   - Current लोकस: 4th क्वाड्रेंट में अर्धवृत्त, जिसका व्यास V / R धनात्मक वास्तविक अक्ष पर होता है।\n5. श्रेणी RC परिपथ (परिवर्तनीय R, स्थिर X_C):\n   - Z लोकस: -jX_C पर क्षैतिज रेखा।\n   - Current लोकस: 1st क्वाड्रेंट में अर्धवृत्त (अग्रगामी धारा), व्यास V / X_C +j अक्ष पर।\n6. हेयलैंड वृत्त आरेख (Heyland Circle Diagram): इंडक्शन मोटर के रोटर का भार प्रतिरोध R_2\'(1-s)/s स्लिप s के साथ बदलता है। इससे स्टेटर धारा का लोकस एक वृत्त बनाता है, जिससे बिना लोड टेस्ट के मोटर का टॉर्क, पावर फैक्टर और दक्षता ज्ञात की जा सकती है।',
    bn: '১. লোকাস ডায়াগ্রাম: কোনো সার্কিটের উপাদান (R, L, C বা কম্পাঙ্ক) পরিবর্তিত হলে ফেজরের শীর্ষবিন্দু জটিল তলে যে গতিপথ তৈরি করে তাই লোকাস ডায়াগ্রাম।\n২. বৃত্তাকার বিপরীত নিয়ম (Circular Inversion): z-তলের যেকোনো সরলরেখা w = ১/z ম্যাপিংয়ের মাধ্যমে w-তলে মূলবিন্দুগামী বৃত্তে রূপান্তরিত হয়।\n৩. শ্রেণি RL বর্তনী (পরিবর্তনশীল R, স্থির X_L):\n   - Z লোকাস: ১ম কোয়াড্র্যান্টে অনুভূমিক সরলরেখা।\n   - কারেন্ট লোকাস: ৪র্থ কোয়াড্র্যান্টে একটি অর্ধবৃত্ত, যার ব্যাস V / X_L ঋণাত্মক কাল্পনিক অক্ষে অবস্থিত।\n   - R = X_L হলে সর্বোচ্চ সক্রিয় ক্ষমতা P_max = V² / (২X_L) পাওয়া যায়।\n৪. শ্রেণি RL বর্তনী (পরিবর্তনশীল X_L, স্থির R):\n   - কারেন্ট লোকাস: ৪র্থ কোয়াড্র্যান্টে বাস্তব অক্ষে V / R ব্যাসবিশিষ্ট অর্ধবৃত্ত।\n৫. শ্রেণি RC বর্তনী: পরিবর্তনশীল R এর ক্ষেত্রে ১ম কোয়াড্র্যান্টে (লিডিং কারেন্ট) V / X_C ব্যাসবিশিষ্ট অর্ধবৃত্ত তৈরি হয়।\n৬. হেইল্যান্ড সার্কেল ডায়াগ্রাম: ইন্ডাকশন মোটরের রোটর রেজিস্ট্যান্স স্লিপের সাথে পরিবর্তিত হওয়ায় ইনপুট কারেন্ট একটি বৃত্তাকার লোকাস তৈরি করে, যার সাহায্যে পূর্ণ লোড পরীক্ষা ছাড়াই মোটরের টর্ক ও দক্ষতা নির্ণয় করা যায়।'
  },
  formulas: [
    {
      id: 'f-locus-rl-var-r',
      symbol: 'I(R)',
      expression: '\\mathbf{I} = \\frac{\\mathbf{V}}{R + jX_L} = \\frac{V}{R^2 + X_L^2}(R - jX_L)',
      title: {
        en: 'Current Locus for Series RL with Variable Resistance',
        hi: 'परिवर्तनीय प्रतिरोध वाले श्रेणी RL परिपथ का धारा लोकस',
        bn: 'পরিবর্তনশীল রোধযুক্ত শ্রেণি RL বর্তনীর কারেন্ট লোকাস'
      },
      description: {
        en: 'Defines a circular arc in the fourth quadrant of the complex plane with diameter V / X_L along the negative imaginary axis.',
        hi: 'सम्मिश्र तल के चौथे चतुर्थांश में ऋणात्मक काल्पनिक अक्ष पर V / X_L व्यास वाले एक वृत्ताकार चाप को परिभाषित करता है।',
        bn: 'জটিল সমতলের ৪র্থ কোয়াড্র্যান্টে ঋণাত্মক কাল্পনিক অক্ষে V / X_L ব্যাসের অর্ধবৃত্তাকার পথ নির্দেশ করে।'
      },
      variables: [
        { symbol: 'V', name: { en: 'Applied RMS source voltage (V)', hi: 'प्रयुक्त RMS स्रोत वोल्टेज (V)', bn: 'প্রযুক্ত আরএমএস উৎস ভোল্টেজ (V)' } },
        { symbol: 'X_L', name: { en: 'Fixed inductive reactance (Ω)', hi: 'स्थिर प्रेरकीय प्रतिघात (Ω)', bn: 'স্থির আবেশীয় রিঅ্যাক্ট্যান্স (Ω)' } },
        { symbol: 'R', name: { en: 'Variable branch resistance (0 to ∞ Ω)', hi: 'परिवर्तनीय शाखा प्रतिरोध (0 से ∞ Ω)', bn: 'পরিবর্তনশীল রোধ (০ থেকে ∞ Ω)' } }
      ]
    },
    {
      id: 'f-locus-rl-var-xl',
      symbol: 'I(X_L)',
      expression: '\\mathbf{I} = \\frac{\\mathbf{V}}{R + jX_L} = \\frac{V}{R^2 + X_L^2}(R - jX_L)',
      title: {
        en: 'Current Locus for Series RL with Variable Reactance',
        hi: 'परिवर्तनीय प्रतिघात वाले श्रेणी RL परिपथ का धारा लोकस',
        bn: 'পরিবর্তনশীল রিঅ্যাক্ট্যান্সযুক্ত শ্রেণি RL বর্তনীর কারেন্ট লোকাস'
      },
      description: {
        en: 'Semicircle in the fourth quadrant having its diameter V / R aligned along the positive real axis.',
        hi: 'चौथे चतुर्थांश में अर्धवृत्त जिसका व्यास V / R धनात्मक वास्तविक अक्ष पर स्थित होता है।',
        bn: '৪র্থ কোয়াড্র্যান্টে অর্ধবৃত্ত যার ব্যাস V / R বাস্তব অক্ষের সাথে সমান্তরাল।'
      },
      variables: [
        { symbol: 'R', name: { en: 'Fixed series resistance (Ω)', hi: 'स्थिर श्रेणी प्रतिरोध (Ω)', bn: 'স্থির শ্রেণি রোধ (Ω)' } },
        { symbol: 'X_L', name: { en: 'Variable inductive reactance (0 to ∞ Ω)', hi: 'परिवर्तनीय प्रेरकीय प्रतिघात (Ω)', bn: 'পরিবর্তনশীল আবেশীয় রিঅ্যাক্ট্যান্স (Ω)' } }
      ]
    },
    {
      id: 'f-locus-max-power',
      symbol: 'P_{max}',
      expression: 'P_{max} = \\frac{V^2}{2 X_L} \\quad \\text{at } R = X_L',
      title: {
        en: 'Maximum Power Condition on Semicircular Locus',
        hi: 'अर्धवृत्ताकार लोकस पर अधिकतम शक्ति की स्थिति',
        bn: 'অর্ধবৃত্তাকার লোকাসে সর্বোচ্চ সক্রিয় ক্ষমতার শর্ত'
      },
      description: {
        en: 'Occurs at the highest point of the horizontal current component, corresponding to a 45° phase angle where R = X_L.',
        hi: 'क्षैतिज धारा घटक के उच्चतम बिंदु पर घटित होता है, जो 45° कला कोण के अनुरूप है जहाँ R = X_L होता है।',
        bn: 'অনুভূমিক কারেন্ট উপাংশের সর্বোচ্চ বিন্দুতে ঘটে, যা ৪৫° দশা কোণে R = X_L এর সাথে মিলে যায়।'
      },
      variables: [
        { symbol: 'P_{max}', name: { en: 'Maximum active power dissipated (W)', hi: 'अधिकतम सक्रिय शक्ति व्यय (W)', bn: 'সর্বোচ্চ সক্রিয় ক্ষমতা (W)' } }
      ]
    },
    {
      id: 'f-heyland-circle-diameter',
      symbol: 'I_{sc}',
      expression: 'D_{circle} = I_{sc} = \\frac{V}{X_{eq}}',
      title: {
        en: 'Heyland Circle Diagram Diameter for Induction Motors',
        hi: 'इंडक्शन मोटर के लिए हेयलैंड वृत्त आरेख का व्यास',
        bn: 'ইন্ডাকশন মোটরের হেইল্যান্ড সার্কেল ডায়াগ্রামের ব্যাস'
      },
      description: {
        en: 'The diameter of the stator current circle diagram equals the ideal short-circuit / locked-rotor reactive current.',
        hi: 'स्टेटर करंट वृत्त आरेख का व्यास आदर्श शॉर्ट-सर्किट / लॉक्ड-रोटर प्रतिक्रियाशील धारा के बराबर होता है।',
        bn: 'স্ট্যাটর কারেন্ট সার্কেল ডায়াগ্রামের ব্যাস মোটরের আদর্শ শর্ট-সার্কিট রিঅ্যাক্টিভ কারেন্টের সমান হয়।'
      },
      variables: [
        { symbol: 'X_{eq}', name: { en: 'Total equivalent leakage reactance of motor (Ω)', hi: 'मोटर का कुल तुल्य रिसाव प्रतिघात (Ω)', bn: 'মোটরের মোট তুল্য লিকেজ রিঅ্যাক্ট্যান্স (Ω)' } }
      ]
    }
  ],
  workedExamples: [
    {
      id: 'ex-ch12-l10-01',
      problem: {
        en: 'A series RL branch is energized by a constant sinusoidal voltage source V = 200 ∠0° V at 50 Hz. The inductive reactance is fixed at X_L = 25.0 Ω, while the resistance R is adjustable via a rheostat from 0 Ω to ∞ Ω.\n(a) Derive the parametric equation of the current phasor I in the complex plane.\n(b) Prove that the tip of the current phasor traces a semicircle, and state its diameter, center, and quadrant in the complex plane.\n(c) Calculate the current phasor I, impedance Z, and active power P for R = 0 Ω, R = 25.0 Ω, and R = 75.0 Ω.\n(d) Determine the value of R at which the active power consumed by the circuit reaches its absolute maximum, and compute this maximum active power P_max.\n(e) At what value of R does the circuit operate at a power factor of 0.8 lagging?',
        hi: 'एक श्रेणी RL शाखा को V = 200 ∠0° V, 50 Hz स्रोत से जोड़ा गया है। प्रेरकीय प्रतिघात X_L = 25.0 Ω पर स्थिर है, जबकि प्रतिरोध R 0 से ∞ Ω तक समायोज्य है।\n(a) सम्मिश्र तल में धारा फेजर I का प्राचलिक समीकरण ज्ञात कीजिए।\n(b) सिद्ध कीजिए कि धारा का सिरा एक अर्धवृत्त बनाता है, तथा इसका व्यास, केंद्र और चतुर्थांश बताइए।\n(c) R = 0 Ω, 25 Ω, एवं 75 Ω के लिए I, Z, एवं P ज्ञात कीजिए।\n(d) वह R ज्ञात कीजिए जिस पर सक्रिय शक्ति अधिकतम होती है, और P_max की गणना कीजिए।\n(e) 0.8 लैगिंग पावर फैक्टर के लिए R का मान क्या होगा?',
        bn: 'একটি শ্রেণি RL বর্তনীতে V = ২০০ ∠০° V, ৫০ Hz ভোল্টেজ উৎস যুক্ত। আবেশীয় রিঅ্যাক্ট্যান্স X_L = ২৫.০ Ω স্থির, কিন্তু রোধ R শূন্য থেকে অসীম পর্যন্ত পরিবর্তনশীল।\n(ক) কারেন্ট ফেজরের সমীকরণ নির্ণয় করুন।\n(খ) প্রমাণ করুন যে কারেন্ট লোকাসটি একটি অর্ধবৃত্ত এবং এর ব্যাস, কেন্দ্র ও কোয়াড্র্যান্ট উল্লেখ করুন।\n(গ) R = ০ Ω, ২৫ Ω ও ৭৫ Ω এর জন্য I, Z ও P নির্ণয় করুন।\n(ঘ) বর্তনীতে কোন রোধের মানে সর্বোচ্চ সক্রিয় ক্ষমতা পাওয়া যাবে এবং P_max কত?\n(ঙ) ০.৮ ল্যাগিং পাওয়ার ফ্যাক্টরের জন্য R এর মান কত হবে?'
      },
      formula: {
        en: 'I = V / (R + jX_L) = I_x + j I_y\nI_x = (V · R) / (R^2 + X_L^2)\nI_y = -(V · X_L) / (R^2 + X_L^2)\nEliminating R yields: I_x^2 + [I_y + V/(2X_L)]^2 = [V/(2X_L)]^2\nP = V · I_x = I^2 · R\nP_max occurs when dP/dR = 0 ⟹ R = X_L, giving P_max = V^2 / (2X_L)\ncos(\\phi) = R / \\sqrt{R^2 + X_L^2}',
        hi: 'I_x = VR/(R^2+X_L^2), I_y = -VX_L/(R^2+X_L^2), I_x^2 + (I_y + V/2X_L)^2 = (V/2X_L)^2, P_max = V^2 / (2X_L) जब R = X_L।',
        bn: 'I_x = VR/(R^2+X_L^2), I_y = -VX_L/(R^2+X_L^2), I_x^2 + (I_y + V/২X_L)^2 = (V/২X_L)^2, P_max = V^2 / (২X_L) যখন R = X_L।'
      },
      substitution: {
        en: 'Step 1: Parametric Circle Derivation\nWith V = 200 V and X_L = 25 Ω:\nI = 200 / (R + j25) = 200 (R - j25) / (R² + 25²).\nReal component (horizontal, active current): I_x = 200 R / (R² + 625).\nImaginary component (vertical, reactive current): I_y = -5000 / (R² + 625).\nNote that:\nI_x² + I_y² = 200² (R² + 25²) / (R² + 25²)² = 40,000 / (R² + 625) = -8 · I_y.\nRearranging:\nI_x² + I_y² + 8 I_y = 0  ⟹  I_x² + (I_y + 4)² = 4² = 16.\nThis is the standard equation of a circle of radius r = 4 A centered at (0, -4 A) on the complex plane!\nSince R ≥ 0, I_x ≥ 0 and I_y ≤ 0. Thus, the locus is a SEMICIRCLE in the 4th quadrant (lagging current).\n- Circle Diameter = 2 · r = 8.0 A along the negative imaginary axis (from origin (0,0) to (0, -j8 A)).\n- Diameter = V / X_L = 200 / 25 = 8.0 A.\n\nStep 2: Key Operating Points\n1. At R = 0 Ω (pure inductor):\n   Z = 0 + j25 = 25 ∠90° Ω.\n   I = 200 ∠0° / 25 ∠90° = 8.0 ∠-90° A = 0 - j8 A (bottom-most point of the circle).\n   Active Power: P = 8² × 0 = 0 W.\n2. At R = 25.0 Ω (R = X_L):\n   Z = 25 + j25 = 35.355 ∠45° Ω.\n   I = 200 / 35.355 ∠45° = 5.657 ∠-45° A = 4.0 - j4.0 A (point of maximum active current I_x!).\n   Active Power: P = (5.657)² × 25 = 32 × 25 = 800 W.\n3. At R = 75.0 Ω:\n   Z = 75 + j25 = 79.057 ∠18.43° Ω.\n   I = 200 / 79.057 ∠18.43° = 2.53 ∠-18.43° A = 2.40 - j0.80 A.\n   Active Power: P = (2.53)² × 75 = 480 W.\n\nStep 3: Maximum Active Power Condition\nActive power is P = V · I_x. On the locus diagram, P is directly proportional to the horizontal distance from the imaginary axis (the x-coordinate of the circle).\nThe maximum horizontal displacement of the circle occurs at its rightmost edge, where I_x = radius = 4.0 A:\nP_max = V · I_x,max = 200 V × 4.0 A = 800.0 W.\nThis occurs when the phase angle is φ = 45°, which requires R = X_L = 25.0 Ω.\nVerification: P_max = V² / (2 X_L) = 200² / (2 × 25) = 40,000 / 50 = 800 W (exact!).\n\nStep 4: Operating Point for PF = 0.8 Lagging\nPower factor cos(φ) = 0.8 lagging ⟹ tan(φ) = sin(φ) / cos(φ) = 0.6 / 0.8 = 0.75.\nSince tan(φ) = X_L / R:\nR = X_L / tan(φ) = 25.0 / 0.75 = 33.33 Ω.\nAt R = 33.33 Ω, Z = 33.33 + j25 = 41.67 ∠36.87° Ω.\nI = 200 / 41.67 ∠36.87° = 4.80 ∠-36.87° A = 3.84 - j2.88 A.\nCheck: 3.84² + ( -2.88 + 4 )² = 14.7456 + (1.12)² = 14.7456 + 1.2544 = 16.0 (lies exactly on the circle!).',
        hi: '(a) I = 200/(R + j25) = I_x + j I_y।\n(b) I_x² + (I_y + 4)² = 16। यह (0, -4 A) पर केंद्रित 4 A त्रिज्या वाला एक वृत्त है। व्यास = V/X_L = 8 A। यह चौथे चतुर्थांश में एक अर्धवृत्त है।\n(c) R = 0 पर I = 8∠-90° A (P = 0); R = 25 पर I = 5.66∠-45° A (P = 800 W); R = 75 पर I = 2.53∠-18.43° A (P = 480 W)।\n(d) अधिकतम शक्ति R = X_L = 25 Ω पर होती है, P_max = 200² / (2×25) = 800 W।\n(e) 0.8 लैगिंग के लिए R = 25 / 0.75 = 33.33 Ω।',
        bn: '(ক) I = ২০০/(R + j২৫) = I_x + j I_y।\n(খ) I_x² + (I_y + ৪)² = ১৬। এটি (০, -৪ A) কেন্দ্রে ৪ A ব্যাসার্ধের বৃত্ত। ব্যাস = ৮.০ A। এটি ৪র্থ কোয়াড্র্যান্টে অর্ধবৃত্ত।\n(গ) R = ০ এ I = ৮∠-৯০° A (P = ০); R = ২৫ এ I = ৫.৬৬∠-৪৫° A (P = ৮০০ W); R = ৭৫ এ I = ২.৫৩∠-১৮.৪৩° A (P = ৪৮০ W)।\n(ঘ) সর্বোচ্চ ক্ষমতা ঘটে R = X_L = ২৫ Ω এ, P_max = ২০০² / (২×২৫) = ৮০০ W।\n(ঙ) ০.৮ ল্যাগিংয়ের জন্য R = ২৫ / ০.৭৫ = ৩৩.৩৩ Ω।'
      },
      calculation: {
        en: 'The algebraic elimination of variable R directly yields the circle equation I_x² + (I_y + V/(2X_L))² = (V/(2X_L))², providing graphical insight into current and active power limits.',
        hi: 'प्रतिरोध R को हटाने पर सीधे वृत्त का समीकरण I_x² + (I_y + 4)² = 16 प्राप्त होता है, जो धारा और शक्ति की सीमाओं को स्पष्ट रूप से प्रदर्शित करता है।',
        bn: 'চলক R অপনয়ন করে সরাসরি বৃত্তের সমীকরণ I_x² + (I_y + ৪)² = ১৬ পাওয়া যায়, যা কারেন্ট ও সর্বোচ্চ সক্রিয় ক্ষমতার সীমা জ্যামিতিকভাবে প্রদর্শন করে।'
      },
      finalAnswer: {
        en: 'Circle Equation: I_x² + (I_y + 4)² = 16; Diameter = 8.0 A along -j axis; Center = (0, -4 A); R = 25.0 Ω yields P_max = 800.0 W; PF = 0.8 lagging requires R = 33.33 Ω',
        hi: 'वृत्त: I_x² + (I_y + 4)² = 16; व्यास = 8 A (-j अक्ष); R = 25 Ω पर P_max = 800 W; 0.8 लैगिंग पर R = 33.33 Ω',
        bn: 'বৃত্ত: I_x² + (I_y + ৪)² = ১৬; ব্যাস = ৮.০ A (-j অক্ষ); R = ২৫ Ω এ P_max = ৮০০ W; ০.৮ ল্যাগিংয়ে R = ৩৩.৩৩ Ω'
      }
    },
    {
      id: 'ex-ch12-l10-02',
      problem: {
        en: 'A series RC circuit connected to a constant AC source V = 100 ∠0° V at 50 Hz has a fixed resistor R = 20.0 Ω and a continuously variable capacitor whose reactance X_C can be varied from 0 Ω (shorted capacitor) to ∞ Ω (open circuit).\n(a) Determine the locus of the impedance Z in the complex plane as X_C varies from 0 to ∞.\n(b) Derive the mathematical equation of the current locus phasor I and prove that it forms a semicircle in the first quadrant.\n(c) What are the diameter, radius, and center coordinates of the current semicircle?\n(d) Calculate the magnitude and phase angle of the current when X_C = 0 Ω, X_C = 20.0 Ω, and X_C = 60.0 Ω.\n(e) At what value of X_C is the active power dissipated in the resistor equal to 250 W?',
        hi: 'एक श्रेणी RC परिपथ को V = 100 ∠0° V, 50 Hz स्रोत से जोड़ा गया है। प्रतिरोध R = 20.0 Ω स्थिर है और संधारित्र प्रतिघात X_C 0 से ∞ Ω तक परिवर्तनीय है।\n(a) X_C के 0 से ∞ बदलने पर प्रतिबाधा Z का लोकस बताइए।\n(b) धारा फेजर I के लोकस का समीकरण व्युत्पन्न कीजिए और सिद्ध कीजिए कि यह प्रथम चतुर्थांश में एक अर्धवृत्त बनाता है।\n(c) अर्धवृत्त का व्यास, त्रिज्या और केंद्र निर्देशांक ज्ञात कीजिए।\n(d) X_C = 0 Ω, 20 Ω, एवं 60 Ω के लिए धारा का परिमाण और कला कोण ज्ञात कीजिए।\n(e) किस X_C मान पर प्रतिरोधक में 250 W शक्ति व्यय होगी?',
        bn: 'একটি শ্রেণি RC বর্তনীতে V = ১০০ ∠০° V, ৫০ Hz উৎস যুক্ত। স্থির রোধ R = ২০.০ Ω এবং ধারকীয় রিঅ্যাক্ট্যান্স X_C শূন্য থেকে অসীম পর্যন্ত পরিবর্তনশীল।\n(ক) X_C শূন্য থেকে অসীম হলে প্রতিবাধা Z এর লোকাস কী হবে?\n(খ) কারেন্ট ফেজর I এর সমীকরণ প্রতিপাদন করুন এবং প্রমাণ করুন যে এটি ১ম কোয়াড্র্যান্টে একটি অর্ধবৃত্ত গঠন করে।\n(গ) অর্ধবৃত্তের ব্যাস, ব্যাসার্ধ ও কেন্দ্রের স্থানাঙ্ক কত?\n(ঘ) X_C = ০ Ω, ২০ Ω ও ৬০ Ω এর জন্য কারেন্টের মান ও দশা কোণ নির্ণয় করুন।\n(ঙ) X_C এর কোন মানে রোধে ২৫০ ওয়াট সক্রিয় ক্ষমতা খরচ হবে?'
      },
      formula: {
        en: 'Z = R - jX_C (vertical straight line downwards at Re(Z) = R)\nI = V / (R - jX_C) = V(R + jX_C) / (R^2 + X_C^2) = I_x + j I_y\nI_x = VR / (R^2 + X_C^2), \\quad I_y = VX_C / (R^2 + X_C^2)\nEliminating X_C: (I_x - V/(2R))^2 + I_y^2 = (V/(2R))^2\nP = I^2 · R = I_x · V',
        hi: 'Z = R - jX_C, I_x = VR/(R^2+X_C^2), I_y = VX_C/(R^2+X_C^2), (I_x - V/2R)^2 + I_y^2 = (V/2R)^2, P = I^2 R।',
        bn: 'Z = R - jX_C, I_x = VR/(R^2+X_C^2), I_y = VX_C/(R^2+X_C^2), (I_x - V/২R)^2 + I_y^2 = (V/২R)^2, P = I^2 R।'
      },
      substitution: {
        en: 'Step 1: Impedance Locus\nZ = 20 - jX_C. Since the real part is fixed at Re(Z) = 20 Ω, as X_C varies from 0 to +∞, the tip of the impedance phasor traces a VERTICAL STRAIGHT LINE extending downwards from (20, 0) to (20, -j∞) in the 4th quadrant.\n\nStep 2: Circle Equation Derivation\nWith V = 100 V and R = 20 Ω:\nI_x = 100 × 20 / (400 + X_C²) = 2000 / (400 + X_C²)\nI_y = 100 X_C / (400 + X_C²)\nCompute I_x² + I_y²:\nI_x² + I_y² = 100² (20² + X_C²) / (400 + X_C²)² = 10,000 / (400 + X_C²) = 5 · I_x.\nRearranging:\nI_x² - 5 I_x + I_y² = 0  ⟹  (I_x - 2.5)² + I_y² = 2.5² = 6.25.\nThis represents a circle with:\n- Center: (I_x = 2.5 A, I_y = 0 A) on the positive real axis.\n- Radius: r = 2.5 A.\n- Diameter: D = 5.0 A along the positive real axis (from origin (0,0) to (5.0 A, 0)).\n- Diameter = V / R = 100 / 20 = 5.0 A.\nSince X_C ≥ 0, I_y ≥ 0 (positive imaginary part, leading current). Hence, the locus is a SEMICIRCLE in the 1st QUADRANT.\n\nStep 3: Current Calculations at Key Points\n1. At X_C = 0 Ω (shorted capacitor, purely resistive):\n   Z = 20 ∠0° Ω ⟹ I = 100 / 20 ∠0° = 5.0 ∠0° A (diameter tip on real axis).\n   P = 5² × 20 = 500 W (maximum power possible with fixed R).\n2. At X_C = 20.0 Ω (X_C = R):\n   Z = 20 - j20 = 28.284 ∠-45° Ω.\n   I = 100 / 28.284 ∠-45° = 3.536 ∠+45° A = 2.50 + j2.50 A.\n   P = (3.536)² × 20 = 12.5 × 20 = 250.0 W.\n3. At X_C = 60.0 Ω:\n   Z = 20 - j60 = 63.246 ∠-71.565° Ω.\n   I = 100 / 63.246 ∠-71.565° = 1.581 ∠+71.565° A = 0.50 + j1.50 A.\n   P = (1.581)² × 20 = 50.0 W.\n\nStep 4: Finding X_C for P = 250 W\nWe know P = I² · R = 250 W ⟹ I² = 250 / 20 = 12.5 A² ⟹ I = √12.5 = 3.5355 A.\nSince I = V / |Z|: |Z| = 100 / 3.5355 = 28.284 Ω.\n|Z|² = R² + X_C² ⟹ 28.284² = 20² + X_C² ⟹ 800 = 400 + X_C² ⟹ X_C² = 400 ⟹ X_C = 20.0 Ω.\nThus, exactly at X_C = 20.0 Ω (where the reactive current I_y reaches its maximum of 2.5 A at the top of the semicircle), the power is 250 W.',
        hi: '(a) Z लोकस: (20, 0) से (20, -j∞) तक नीचे की ओर ऊर्ध्वाधर सरल रेखा।\n(b) (I_x - 2.5)² + I_y² = 2.5²। यह प्रथम चतुर्थांश में एक अर्धवृत्त है (अग्रगामी धारा)।\n(c) व्यास = V / R = 5.0 A वास्तविक अक्ष पर, केंद्र = (2.5, 0), त्रिज्या = 2.5 A।\n(d) X_C = 0 पर I = 5.0∠0° A; X_C = 20 पर I = 3.54∠+45° A; X_C = 60 पर I = 1.58∠+71.57° A।\n(e) P = 250 W के लिए X_C = 20.0 Ω।',
        bn: '(ক) Z লোকাস: (২০, ০) থেকে (২০, -j∞) পর্যন্ত নিচের দিকে উল্লম্ব সরলরেখা।\n(খ) (I_x - ২.৫)² + I_y² = ২.৫²। এটি ১ম কোয়াড্র্যান্টে অর্ধবৃত্ত (লিডিং কারেন্ট)।\n(গ) ব্যাস = V / R = ৫.০ A বাস্তব অক্ষে, কেন্দ্র = (২.৫, ০), ব্যাসার্ধ = ২.৫ A।\n(ঘ) X_C = ০ এ I = ৫.০∠০° A; X_C = ২০ এ I = ৩.৫৪∠+৪৫° A; X_C = ৬০ এ I = ১.৫৮∠+৭১.৫৭° A।\n(ঙ) P = ২৫০ W এর জন্য X_C = ২০.০ Ω।'
      },
      calculation: {
        en: 'The derivation shows that varying capacitive reactance in a series RC circuit produces a semicircle in the 1st quadrant whose diameter V/R rests directly on the real axis.',
        hi: 'यह व्युत्पत्ति दर्शाती है कि श्रेणी RC परिपथ में धारितीय प्रतिघात बदलने पर प्रथम चतुर्थांश में एक अर्धवृत्त बनता है जिसका व्यास V/R वास्तविक अक्ष पर होता है।',
        bn: 'এই সমাধান প্রমাণ করে যে শ্রেণি RC বর্তনীতে ক্যাপাসিটিভ রিঅ্যাক্ট্যান্স পরিবর্তন করলে ১ম কোয়াড্র্যান্টে একটি অর্ধবৃত্ত পাওয়া যায় যার ব্যাস V/R সরাসরি বাস্তব অক্ষে অবস্থিত।'
      },
      finalAnswer: {
        en: 'Z Locus: Vertical line at Re(Z) = 20 Ω; Current Circle: (I_x - 2.5)² + I_y² = 6.25 in 1st quadrant; Diameter = 5.0 A along real axis; Center = (2.5 A, 0); X_C = 20.0 Ω gives P = 250.0 W',
        hi: 'Z लोकस: Re(Z) = 20 Ω पर ऊर्ध्वाधर रेखा; वृत्त: (I_x - 2.5)² + I_y² = 6.25 (1st क्वाड्रेंट); व्यास = 5 A; X_C = 20 Ω पर P = 250 W',
        bn: 'Z লোকাস: Re(Z) = ২০ Ω এ উল্লম্ব রেখা; বৃত্ত: (I_x - ২.৫)² + I_y² = ৬.২৫ (১ম কোয়াড্র্যান্ট); ব্যাস = ৫ A; X_C = ২০ Ω এ P = ২৫০ W'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Three-Phase Induction Motor Heyland Circle Diagram: Electrical machine test engineers plot the circular locus of stator current from no-load and locked-rotor tests to extract maximum breakdown torque, starting torque, operating slip, and full-load efficiency across the complete speed range without mechanical loading.',
      'AC Transmission Line Operating Charts: Power systems operators utilize circular power locus diagrams (sending-end and receiving-end circle diagrams) to monitor steady-state transmission stability limits, maximum active power transfer, and reactive power compensation requirements.',
      'RF Impedance Matching and Smith Chart: The famous Smith Chart in microwave engineering is an orthogonal circular locus grid based directly on complex bilinear conformal mapping (reflection coefficient Γ = (Z - Z_0)/(Z + Z_0)), mapping straight impedance lines into circles for antenna tuning.'
    ],
    hi: [
      'इंडक्शन मोटर हेयलैंड वृत्त आरेख: इंजीनियर नो-लोड और लॉक्ड-रोटर परीक्षणों से स्टेटर धारा का वृत्ताकार लोकस खींचते हैं, जिससे बिना मैकेनिकल लोड के मोटर का अधिकतम ब्रेकडाउन टॉर्क, स्टार्टिंग टॉर्क और दक्षता ज्ञात हो जाती है।',
      'एसी ट्रांसमिशन लाइन पावर सर्कल आरेख: पावर ग्रिड ऑपरेटर अधिकतम शक्ति संचरण सीमा और वोल्टेज स्थिरता की निगरानी के लिए सर्कल आरेखों का उपयोग करते हैं।',
      'स्मिथ चार्ट और आरएफ ट्यूनिंग: माइक्रोवेव और आरएफ इंजीनियरिंग में स्मिथ चार्ट जटिल प्रतिबाधा लोकस आरेखों पर आधारित होता है जिसका उपयोग एंटीना मैचिंग के लिए किया जाता है।'
    ],
    bn: [
      'ইন্ডাকশন মোটরের হেইল্যান্ড সার্কেল ডায়াগ্রাম: নো-লোড ও লকড-রোটর পরীক্ষার মাধ্যমে মোটর ইঞ্জিনিয়াররা স্ট্যাটর কারেন্টের সার্কেল ডায়াগ্রাম এঁকে মোটরের ব্রেকডাউন টর্ক, স্টার্টিং টর্ক ও পূর্ণ-লোড দক্ষতা সরাসরি বের করেন।',
      'ট্রান্সমিশন লাইন পাওয়ার সার্কেল ডায়াগ্রাম: বিদ্যুৎ সঞ্চালন লাইনে সর্বোচ্চ পাওয়ার ট্রান্সফার সীমা এবং ভোল্টেজ স্থিতিশীলতা নিশ্চিত করতে পাওয়ার সার্কেল ডায়াগ্রাম ব্যবহৃত হয়।',
      'স্মিথ চার্ট ও আরএফ ম্যাচিং: মাইক্রোওয়েভ ও রেডিও ইঞ্জিনিয়ারিংয়ে স্মিথ চার্ট মূলত ইম্পিডেন্স ও অ্যাডমিট্যান্স লোকাসের একটি সমন্বিত রূপ, যা অ্যান্টেনা ম্যাচিংয়ে বিশ্বব্যাপী ব্যবহৃত হয়।'
    ]
  },
  importantPoints: {
    en: [
      'A straight-line locus in the impedance plane that does not pass through the origin transforms via complex inversion (Y = 1/Z) into a circular arc passing through the origin in the admittance/current plane.',
      'For a series RL circuit with variable resistance R and fixed reactance X_L, the current locus is a semicircle in the fourth quadrant (lagging) with diameter V / X_L along the negative imaginary axis.',
      'For a series RL circuit with variable reactance X_L and fixed resistance R, the current locus is a semicircle in the fourth quadrant with diameter V / R along the positive real axis.',
      'Maximum active power dissipation in a series RL circuit with variable R occurs at R = X_L (phase angle φ = 45°), yielding P_max = V² / (2 X_L).',
      'In a series RC circuit, the current leads the voltage, placing the circular current locus in the first quadrant of the complex plane.'
    ],
    hi: [
      'प्रतिबाधा तल में मूल बिंदु से न गुजरने वाली सरल रेखा व्युत्क्रमण (Y = 1/Z) द्वारा प्रवेश्यता/धारा तल में मूल बिंदु से गुजरने वाले एक वृत्त में बदल जाती है।',
      'परिवर्तनीय R वाले श्रेणी RL परिपथ का धारा लोकस चौथे चतुर्थांश में V / X_L व्यास वाला अर्धवृत्त होता है जो -j अक्ष पर स्थित होता है।',
      'परिवर्तनीय X_L वाले श्रेणी RL परिपथ का धारा लोकस चौथे चतुर्थांश में वास्तविक अक्ष पर V / R व्यास वाला अर्धवृत्त होता है।',
      'परिवर्तनीय R वाले RL परिपथ में अधिकतम शक्ति R = X_L (45° कला कोण) पर होती है, जहाँ P_max = V² / (2 X_L)।',
      'श्रेणी RC परिपथ में धारा अग्रगामी होने के कारण धारा लोकस प्रथम चतुर्थांश में बनता है।'
    ],
    bn: [
      'ইম্পিডেন্স তলের যেকোনো সরলরেখা যা মূলবিন্দুগামী নয়, তা জটিল বিপরীতকরণ (Y = ১/Z) দ্বারা কারেন্ট তলে মূলবিন্দুগামী একটি বৃত্তে রূপান্তরিত হয়।',
      'পরিবর্তনশীল R যুক্ত শ্রেণি RL বর্তনীর কারেন্ট লোকাস ৪র্থ কোয়াড্র্যান্টে ঋণাত্মক কাল্পনিক অক্ষে V / X_L ব্যাসের অর্ধবৃত্ত হয়।',
      'পরিবর্তনশীল X_L যুক্ত শ্রেণি RL বর্তনীর কারেন্ট লোকাস ৪র্থ কোয়াড্র্যান্টে বাস্তব অক্ষে V / R ব্যাসের অর্ধবৃত্ত হয়।',
      'পরিবর্তনশীল R যুক্ত RL বর্তনীতে সর্বোচ্চ ক্ষমতা R = X_L (৪৫° দশা কোণ) অবস্থায় পাওয়া যায়, যেখানে P_max = V² / (২X_L)।',
      'শ্রেণি RC বর্তনীতে কারেন্ট ভোল্টেজের চেয়ে এগিয়ে (লিডিং) থাকায় কারেন্ট লোকাস ১ম কোয়াড্র্যান্টে অবস্থান করে।'
    ]
  },
  commonMistakes: {
    en: [
      'Mistake: Confusing the diameter orientation between variable R and variable X_L. Correction: When R varies (fixed X), diameter is along the imaginary axis (V/X); when X varies (fixed R), diameter is along the real axis (V/R).',
      'Mistake: Plotting the current locus of a series RC circuit in the fourth quadrant. Correction: RC circuits draw leading current (positive imaginary component +jI_y), which strictly places the current locus in the FIRST quadrant.',
      'Mistake: Believing that maximum power occurs at maximum current (R = 0). Correction: At R = 0, current is at its maximum (V/X_L) but the power is exactly zero because the power factor is zero (cos 90° = 0). Maximum active power occurs at R = X_L.'
    ],
    hi: [
      'त्रुटि: परिवर्तनीय R और परिवर्तनीय X_L के व्यास की दिशा में भ्रमित होना। सुधार: R बदलने पर व्यास काल्पनिक अक्ष (V/X) पर होता है; X बदलने पर व्यास वास्तविक अक्ष (V/R) पर होता है।',
      'त्रुटि: श्रेणी RC परिपथ के धारा लोकस को चौथे चतुर्थांश में खींचना। सुधार: RC परिपथ में धारा अग्रगामी (+j) होती है, इसलिए यह प्रथम चतुर्थांश में बनता है।',
      'त्रुटि: यह सोचना कि अधिकतम धारा (R = 0) पर अधिकतम शक्ति मिलती है। सुधार: R = 0 पर धारा अधिकतम होती है लेकिन पावर फैक्टर शून्य होने से शक्ति शून्य होती है। अधिकतम शक्ति R = X_L पर होती है।'
    ],
    bn: [
      'ভুল: পরিবর্তনশীল R এবং পরিবর্তনশীল X_L এর বৃত্তের ব্যাসের দিক নিয়ে বিভ্রান্ত হওয়া। সংশোধন: R পরিবর্তিত হলে ব্যাস কাল্পনিক অক্ষে (V/X) থাকে; আর X পরিবর্তিত হলে ব্যাস বাস্তব অক্ষে (V/R) থাকে।',
      'ভুল: শ্রেণি RC বর্তনীর কারেন্ট লোকাস ৪র্থ কোয়াড্র্যান্টে আঁকা। সংশোধন: RC বর্তনীতে কারেন্ট লিডিং (+j) হওয়ায় লোকাসটি সর্বদা ১ম কোয়াড্র্যান্টে তৈরি হয়।',
      'ভুল: মনে করা যে সর্বোচ্চ কারেন্টে (R = ০) সর্বোচ্চ ক্ষমতা পাওয়া যাবে। সংশোধন: R = ০ হলে কারেন্ট সর্বোচ্চ হলেও পাওয়ার ফ্যাক্টর শূন্য হওয়ায় মোট ক্ষমতা শূন্য হয়। সর্বোচ্চ ক্ষমতা পাওয়া যায় R = X_L অবস্থায়।'
    ]
  },
  keyTakeaways: {
    en: [
      'Locus diagrams track phasor endpoints as a circuit parameter changes continuously from 0 to ∞.',
      'Complex inversion Y = 1/Z maps linear impedance trajectories into circular current arcs.',
      'Series RL with variable R forms a semicircle of diameter V/X_L in the 4th quadrant; P_max = V²/(2X_L) occurs at R = X_L.',
      'Series RC circuits trace semicircular loci in the 1st quadrant due to leading phase angles.',
      'Circle diagrams form the mathematical bedrock for induction machine Heyland diagrams and transmission line power charts.'
    ],
    hi: [
      'लोकस आरेख प्राचल के 0 से ∞ बदलने पर फेजर के सिरे के पथ को ट्रैक करते हैं।',
      'सम्मिश्र व्युत्क्रमण Y = 1/Z सीधी रेखा प्रतिबाधा को वृत्ताकार धारा चाप में बदलता है।',
      'परिवर्तनीय R वाला RL परिपथ चौथे चतुर्थांश में V/X_L व्यास का अर्धवृत्त बनाता है; R = X_L पर P_max = V²/(2X_L) होता है।',
      'श्रेणी RC परिपथ अग्रगामी कला कोण के कारण प्रथम चतुर्थांश में अर्धवृत्त बनाता है।',
      'वृत्त आरेख इंडक्शन मोटर हेयलैंड आरेख और ट्रांसमिशन लाइन चार्ट का गणितीय आधार हैं।'
    ],
    bn: [
      'লোকাস ডায়াগ্রাম কোনো উপাদানের মান ০ থেকে ∞ পরিবর্তনের সাথে সাথে ফেজরের গতিপথ প্রদর্শন করে।',
      'জটিল বিপরীতকরণ Y = ১/Z রৈখিক ইম্পিডেন্সকে বৃত্তাকার কারেন্ট ট্র্যাজেক্টোরিতে রূপান্তর করে।',
      'পরিবর্তনশীল R যুক্ত RL বর্তনী ৪র্থ কোয়াড্র্যান্টে V/X_L ব্যাসের অর্ধবৃত্ত তৈরি করে; R = X_L এ P_max = V²/(২X_L) হয়।',
      'RC বর্তনী লিডিং কারেন্টের কারণে ১ম কোয়াড্র্যান্টে অর্ধবৃত্তাকার লোকাস গঠন করে।',
      'সার্কেল ডায়াগ্রাম হলো ইন্ডাকশন মোটরের হেইল্যান্ড ডায়াগ্রাম এবং ট্রান্সমিশন লাইন চার্টের মূল গাণিতিক ভিত্তি।'
    ]
  },
  practiceQuestions: [
    {
      id: 'pq-ch12-l10-01',
      question: {
        en: 'In a series RL circuit with fixed R = 50 Ω connected to a 230 V, 50 Hz source, the inductance is varied from 0 to ∞. What is the maximum current that can flow in the circuit?',
        hi: '230 V, 50 Hz स्रोत से जुड़े R = 50 Ω वाले श्रेणी RL परिपथ में प्रेरकत्व 0 से ∞ तक बदला जाता है। परिपथ में प्रवाहित होने वाली अधिकतम धारा क्या है?',
        bn: '২৩০ V, ৫০ Hz উৎসে যুক্ত R = ৫০ Ω বিশিষ্ট শ্রেণি RL বর্তনীতে ইন্ডাকট্যান্স ০ থেকে ∞ পর্যন্ত পরিবর্তিত হলে সর্বোচ্চ কত কারেন্ট প্রবাহিত হতে পারে?'
      },
      hint: {
        en: 'Maximum current occurs when X_L = 0 (pure resistance), which corresponds to the diameter tip of the current locus on the real axis: I_max = V / R = 230 / 50 = 4.60 A ∠0°.',
        hi: 'अधिकतम धारा X_L = 0 पर होती है: I_max = V / R = 230 / 50 = 4.60 A।',
        bn: 'সর্বোচ্চ কারেন্ট ঘটে যখন X_L = ০ হয়: I_max = V / R = ২৩০ / ৫০ = ৪.৬০ A।'
      }
    },
    {
      id: 'pq-ch12-l10-02',
      question: {
        en: 'State the geometric meaning of the radius and center of the Heyland circle diagram for a three-phase induction motor.',
        hi: '3-फेज इंडक्शन मोटर के लिए हेयलैंड वृत्त आरेख की त्रिज्या और केंद्र का ज्यामितीय अर्थ बताइए।',
        bn: '৩-ফেজ ইন্ডাকশন মোটরের হেইল্যান্ড সার্কেল ডায়াগ্রামের ব্যাসার্ধ ও কেন্দ্রের জ্যামিতিক তাৎপর্য কী?'
      },
      hint: {
        en: 'The center lies slightly above the horizontal axis by an offset representing no-load core loss and magnetizing current, and the diameter represents the ideal short-circuit / locked-rotor reactive current V / X_eq.',
        hi: 'केंद्र क्षैतिज अक्ष से थोड़ा ऊपर होता है जो कोर हानि और चुंबकन धारा को दर्शाता है, और व्यास आदर्श शॉर्ट-सर्किट धारा V / X_eq को दर्शाता है।',
        bn: 'কেন্দ্রটি নো-লোড কোর লস ও ম্যাগনেটাইজিং কারেন্ট নির্দেশ করতে অনুভূমিক অক্ষের সামান্য উপরে থাকে এবং ব্যাস নির্দেশ করে মোটরের আদর্শ শর্ট-সার্কিট রিঅ্যাক্টিভ কারেন্ট V / X_eq।'
      }
    }
  ],
  mcqs: [
    {
      id: 'mcq-ch12-l10-01',
      question: {
        en: 'In a series RL circuit connected to a constant AC voltage source V ∠0°, the inductive reactance X_L is held constant while resistance R is varied from 0 to ∞. What geometric path does the tip of the current phasor trace in the complex plane?',
        hi: 'एक स्थिर एसी वोल्टेज स्रोत से जुड़े श्रेणी RL परिपथ में प्रेरकीय प्रतिघात X_L स्थिर है जबकि प्रतिरोध R 0 से ∞ तक बदला जाता है। सम्मिश्र तल में धारा फेजर का सिरा कौन सा ज्यामितीय पथ बनाता है?',
        bn: 'স্থির এসি ভোল্টেজ উৎসে যুক্ত একটি শ্রেণি RL বর্তনীতে X_L স্থির রেখে রোধ R শূন্য থেকে অসীম পর্যন্ত পরিবর্তন করা হলে জটিল সমতলে কারেন্ট ফেজরের শীর্ষবিন্দু কোন জ্যামিতিক পথ তৈরি করে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'A straight horizontal line in the first quadrant', hi: 'प्रथम चतुर्थांश में एक सीधी क्षैतिज रेखा', bn: '১ম কোয়াড্র্যান্টে একটি অনুভূমিক সরলরেখা' } },
        { id: 'opt-2', text: { en: 'A semicircle in the fourth quadrant with diameter V / X_L along the negative imaginary axis', hi: 'चौथे चतुर्थांश में एक अर्धवृत्त जिसका व्यास ऋणात्मक काल्पनिक अक्ष पर V / X_L होता है', bn: '৪র্থ কোয়াড্র্যান্টে একটি অর্ধবৃত্ত যার ব্যাস ঋণাত্মক কাল্পনিক অক্ষে V / X_L' } },
        { id: 'opt-3', text: { en: 'A full circle centered at the origin of radius V / R', hi: 'मूल बिंदु पर केंद्रित V / R त्रिज्या का एक पूर्ण वृत्त', bn: 'মূলবিন্দুতে কেন্দ্র করে V / R ব্যাসার্ধের একটি পূর্ণ বৃত্ত' } },
        { id: 'opt-4', text: { en: 'A parabola in the second quadrant', hi: 'दूसरे चतुर्थांश में एक परवलय (Parabola)', bn: '২য় কোয়াড্র্যান্টে একটি প্যারাবোলা' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'The impedance locus is a horizontal line Z = R + jX_L at distance X_L above the real axis. Complex inversion Y = 1/Z maps this line into a circle in the 4th quadrant passing through the origin with diameter V / X_L along the negative imaginary axis: I_x² + (I_y + V/(2X_L))² = (V/(2X_L))².',
        hi: 'प्रतिबाधा लोकस एक क्षैतिज रेखा है। व्युत्क्रमण Y = 1/Z इसे चौथे चतुर्थांश में -j अक्ष पर V / X_L व्यास वाले एक अर्धवृत्त में बदल देता है।',
        bn: 'ইম্পিডেন্স লোকাসটি একটি অনুভূমিক সরলরেখা। জটিল বিপরীতকরণ Y = ১/Z এটিকে ৪র্থ কোয়াড্র্যান্টে ঋণাত্মক কাল্পনিক অক্ষে V / X_L ব্যাস বিশিষ্ট একটি অর্ধবৃত্তে রূপান্তরিত করে।'
      }
    },
    {
      id: 'mcq-ch12-l10-02',
      question: {
        en: 'In a series RL circuit with fixed X_L and variable resistance R, at what value of R is the active power dissipated in the circuit maximized?',
        hi: 'स्थिर X_L और परिवर्तनीय प्रतिरोध R वाले श्रेणी RL परिपथ में, R के किस मान पर परिपथ में व्यय होने वाली सक्रिय शक्ति अधिकतम होती है?',
        bn: 'স্থির X_L এবং পরিবর্তনশীল রোধ R বিশিষ্ট শ্রেণি RL বর্তনীতে R এর কোন মানের জন্য সক্রিয় ক্ষমতা সর্বোচ্চ হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'R = 0 Ω', hi: 'R = 0 Ω', bn: 'R = ০ Ω' } },
        { id: 'opt-2', text: { en: 'R = X_L', hi: 'R = X_L', bn: 'R = X_L' } },
        { id: 'opt-3', text: { en: 'R = 2 X_L', hi: 'R = 2 X_L', bn: 'R = ২ X_L' } },
        { id: 'opt-4', text: { en: 'R → ∞', hi: 'R → ∞', bn: 'R → অসীম' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'Active power is P = V · I_x. On the circular locus, the horizontal component I_x reaches its maximum at the outermost point of the semicircle, where the phase angle is 45° and tan(φ) = X_L / R = 1. Therefore, P is maximized when R = X_L, giving P_max = V² / (2 X_L).',
        hi: 'सक्रिय शक्ति P = V · I_x होती है। वृत्त पर क्षैतिज घटक I_x तब अधिकतम होता है जब कला कोण 45° हो, जिसका अर्थ है R = X_L। तब P_max = V² / (2 X_L) प्राप्त होती है।',
        bn: 'সক্রিয় ক্ষমতা P = V · I_x। সার্কেল লোকাসে অনুভূমিক কারেন্ট উপাংশ I_x সর্বোচ্চ হয় ৪৫° দশা কোণে, যখন tan(φ) = X_L / R = ১ অর্থাৎ R = X_L হয়। তখন P_max = V² / (২X_L)।'
      }
    },
    {
      id: 'mcq-ch12-l10-03',
      question: {
        en: 'In a series RL circuit where resistance R is held constant and inductive reactance X_L is varied from 0 to ∞, where is the diameter of the current semicircle located?',
        hi: 'श्रेणी RL परिपथ में जहाँ प्रतिरोध R स्थिर है और प्रेरकीय प्रतिघात X_L 0 से ∞ तक बदला जाता है, धारा अर्धवृत्त का व्यास कहाँ स्थित होता है?',
        bn: 'শ্রেণি RL বর্তনীতে রোধ R স্থির রেখে আবেশীয় রিঅ্যাক্ট্যান্স X_L শূন্য থেকে অসীম পর্যন্ত পরিবর্তন করা হলে কারেন্ট অর্ধবৃত্তের ব্যাস কোথায় অবস্থিত থাকে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Along the positive real axis, extending from the origin to V / R', hi: 'धनात्मक वास्तविक अक्ष पर, मूल बिंदु से V / R तक', bn: 'বাস্তব অক্ষের উপর, মূলবিন্দু থেকে V / R পর্যন্ত' } },
        { id: 'opt-2', text: { en: 'Along the negative imaginary axis, extending from the origin to -j V / X_L', hi: 'ऋणात्मक काल्पनिक अक्ष पर, मूल बिंदु से -j V / X_L तक', bn: 'ঋণাত্মক কাল্পনিক অক্ষে, মূলবিন্দু থেকে -j V / X_L পর্যন্ত' } },
        { id: 'opt-3', text: { en: 'Along the positive imaginary axis', hi: 'धनात्मक काल्पनिक अक्ष पर', bn: 'ধনাত্মক কাল্পনিক অক্ষে' } },
        { id: 'opt-4', text: { en: 'At an inclined angle of 45° in the second quadrant', hi: 'द्वितीय चतुर्थांश में 45° के झुकाव पर', bn: '২য় কোয়াড্র্যান্টে ৪৫° কোণে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'The impedance locus is a vertical line at Re(Z) = R. By conformal circular inversion, this vertical line at distance R from the origin maps to a circle whose diameter V / R lies along the positive real axis, with center at (V / (2R), 0).',
        hi: 'प्रतिबाधा लोकस Re(Z) = R पर एक ऊर्ध्वाधर रेखा है। व्युत्क्रमण द्वारा यह धनात्मक वास्तविक अक्ष पर V / R व्यास वाले वृत्त में परिवर्तित होती है, जिसका केंद्र (V / 2R, 0) होता है।',
        bn: 'ইম্পিডেন্স লোকাসটি Re(Z) = R এ একটি উল্লম্ব রেখা। কনফরমাল ম্যাপিংয়ের ফলে এটি বাস্তব অক্ষের উপর V / R ব্যাস এবং (V / ২R, ০) কেন্দ্রবিশিষ্ট একটি অর্ধবৃত্তে পরিণত হয়।'
      }
    },
    {
      id: 'mcq-ch12-l10-04',
      question: {
        en: 'Why does the current locus of a series RC circuit lie strictly in the FIRST quadrant of the complex plane?',
        hi: 'श्रेणी RC परिपथ का धारा लोकस सम्मिश्र तल के केवल प्रथम चतुर्थांश (First Quadrant) में ही क्यों स्थित होता है?',
        bn: 'শ্রেণি RC বর্তনীর কারেন্ট লোকাস জটিল সমতলের শুধুমাত্র ১ম কোয়াড্র্যান্টে অবস্থান করে কেন?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Because capacitors store electrostatic charge instead of magnetic flux', hi: 'क्योंकि संधारित्र चुंबकीय प्रवाह के बजाय इलेक्ट्रोस्टैटिक चार्ज संग्रहीत करते हैं', bn: 'কারণ ক্যাপাসিটর চৌম্বক ফ্লাক্সের বদলে চার্জ সঞ্চয় করে' } },
        { id: 'opt-2', text: { en: 'Because current in a capacitive circuit leads the reference voltage (positive phase angle +φ), giving a positive imaginary current component (+j I_y)', hi: 'क्योंकि धारितीय परिपथ में धारा वोल्टेज से अग्रगामी (धनात्मक कला कोण +φ) होती है, जिससे धनात्मक काल्पनिक घटक (+j I_y) प्राप्त होता है', bn: 'কারণ ধারকীয় বর্তনীতে কারেন্ট রেফারেন্স ভোল্টেজের চেয়ে এগিয়ে থাকে (পজিটিভ দশা কোণ +φ), ফলে কাল্পনিক কারেন্ট উপাংশ ধনাত্মক (+j I_y) হয়' } },
        { id: 'opt-3', text: { en: 'Because resistance in an RC circuit is always negative', hi: 'क्योंकि RC परिपथ में प्रतिरोध हमेशा ऋणात्मक होता है', bn: 'কারণ RC বর্তনীতে রোধ সর্বদা ঋণাত্মক থাকে' } },
        { id: 'opt-4', text: { en: 'Because capacitive reactance increases with frequency', hi: 'क्योंकि धारितीय प्रतिघात आवृत्ति के साथ बढ़ता है', bn: 'কারণ কম্পাঙ্কের সাথে ক্যাপাসিটিভ রিঅ্যাক্ট্যান্স বাড়ে' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'In an RC circuit, Z = R - jX_C. Admittance is Y = (R + jX_C) / (R² + X_C²). The imaginary part +jX_C is positive, representing a leading current phasor that resides in the 1st quadrant of the complex plane.',
        hi: 'RC परिपथ में Z = R - jX_C होता है। प्रवेश्यता Y = (R + jX_C)/(R² + X_C²) होती है। काल्पनिक भाग धनात्मक होने के कारण धारा अग्रगामी होती है और 1st क्वाड्रेंट में रहती है।',
        bn: 'RC বর্তনীতে Z = R - jX_C এবং অ্যাডমিট্যান্স Y = (R + jX_C)/(R² + X_C²)। কাল্পনিক অংশটি ধনাত্মক হওয়ায় কারেন্ট লিডিং থাকে এবং ১ম কোয়াড্র্যান্টে অবস্থান করে।'
      }
    },
    {
      id: 'mcq-ch12-l10-05',
      question: {
        en: 'In the Heyland Circle Diagram of a three-phase induction motor, what physical operating condition corresponds to the point on the circle where rotor slip s = 1.0?',
        hi: '3-फेज इंडक्शन मोटर के हेयलैंड वृत्त आरेख में, रोटर स्लिप s = 1.0 वृत्त के किस भौतिक परिचालन बिंदु से मेल खाती है?',
        bn: '৩-ফেজ ইন্ডাকশন মোটরের হেইল্যান্ড সার্কেল ডায়াগ্রামে রোটর স্লিপ s = ১.০ বৃত্তের কোন বাস্তব অপারেটিং অবস্থাকে নির্দেশ করে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Synchronous speed / ideal no-load running (s = 0)', hi: 'तुल्यकालिक गति / आदर्श नो-लोड संचालन (s = 0)', bn: 'সিনক্রোনাস গতি / আদর্শ নো-লোড অবস্থা (s = ০)' } },
        { id: 'opt-2', text: { en: 'Standstill / Locked-Rotor (short-circuit) condition', hi: 'स्टैंडस्टिल / लॉक्ड-रोटर (शॉर्ट-सर्किट) स्थिति', bn: 'লকড-রোটর বা শর্ট-সার্কিট অবস্থা (রোটর স্থির)' } },
        { id: 'opt-3', text: { en: 'Maximum breakdown generator operation', hi: 'अधिकतम ब्रेकडाउन जनरेटर संचालन', bn: 'সর্বোচ্চ ব্রেকডাউন জেনারেটর অবস্থা' } },
        { id: 'opt-4', text: { en: 'Motor running in reverse direction as a brake (s > 1)', hi: 'ब्रेक के रूप में विपरीत दिशा में चलना', bn: 'ব্রেক হিসেবে উল্টো দিকে চলা' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'When the rotor is stationary (standstill/locked-rotor test), the mechanical speed is N = 0, which makes slip s = (N_s - 0) / N_s = 1.0. This corresponds to the locked-rotor point on the Heyland circle diagram.',
        hi: 'जब रोटर रुका हुआ होता है (स्टैंडस्टिल/लॉक्ड रोटर परीक्षण), तो गति N = 0 होती है जिससे स्लिप s = 1.0 हो जाती है। यह हेयलैंड वृत्त पर लॉक्ड-रोटर बिंदु से मेल खाता है।',
        bn: 'রোটর স্থির থাকলে (লকড-রোটর পরীক্ষা) গতি N = ০ হয়, ফলে স্লিপ s = (N_s - ০)/N_s = ১.০ হয়। এটি হেইল্যান্ড বৃত্তে লকড-রোটর বিন্দু নির্দেশ করে।'
      }
    },
    {
      id: 'mcq-ch12-l10-06',
      question: {
        en: 'A series RL circuit connected to a 100 V source has fixed X_L = 10 Ω and variable R. What is the value of the active current component (I_x) when the active power is maximum?',
        hi: '100 V स्रोत से जुड़े श्रेणी RL परिपथ में X_L = 10 Ω और परिवर्तनीय R है। सक्रिय शक्ति अधिकतम होने पर सक्रिय धारा घटक (I_x) का मान क्या है?',
        bn: '১০০ V উৎসে যুক্ত RL বর্তনীতে X_L = ১০ Ω এবং R পরিবর্তনশীল। সর্বোচ্চ সক্রিয় ক্ষমতার সময় সক্রিয় কারেন্ট উপাংশ (I_x) এর মান কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '10.0 A', hi: '10.0 A', bn: '১০.০ A' } },
        { id: 'opt-2', text: { en: '5.0 A', hi: '5.0 A', bn: '৫.০ A' } },
        { id: 'opt-3', text: { en: '2.5 A', hi: '2.5 A', bn: '২.৫ A' } },
        { id: 'opt-4', text: { en: '0 A', hi: '0 A', bn: '০ A' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'The circle diameter is D = V / X_L = 100 / 10 = 10 A. The radius is r = 5.0 A. Maximum active power occurs at the maximum horizontal displacement of the circle, which is equal to its radius: I_x,max = r = 5.0 A. (At this point, R = X_L = 10 Ω, and P_max = 100 × 5.0 = 500 W).',
        hi: 'वृत्त का व्यास D = V / X_L = 100 / 10 = 10 A है, अतः त्रिज्या r = 5.0 A है। अधिकतम शक्ति वृत्त के सबसे बाहरी क्षैतिज बिंदु पर होती है, जो त्रिज्या के बराबर है: I_x = 5.0 A।',
        bn: 'বৃত্তের ব্যাস D = V / X_L = ১০০ / ১০ = ১০ A। ব্যাসার্ধ r = ৫.০ A। সর্বোচ্চ ক্ষমতা অনুভূমিক ব্যাসার্ধের প্রান্তে ঘটে, সুতরাং I_x = ৫.০ A। (P_max = ১০০ × ৫ = ৫০০ W)।'
      }
    },
    {
      id: 'mcq-ch12-l10-07',
      question: {
        en: 'Under conformal mapping in complex analysis, what does a straight line passing through the origin in the Z-plane transform into in the Y-plane (Y = 1/Z)?',
        hi: 'सम्मिश्र विश्लेषण में कंफर्मल मैपिंग के तहत, Z-तल में मूल बिंदु से गुजरने वाली एक सरल रेखा Y-तल (Y = 1/Z) में किसमें परिवर्तित होती है?',
        bn: 'জটিল বিশ্লেষণে কনফরমাল ম্যাপিংয়ে Z-তলে মূলবিন্দুগামী একটি সরলরেখা Y-তলে (Y = ১/Z) কিসে রূপান্তরিত হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'A circle passing through the origin', hi: 'मूल बिंदु से गुजरने वाला एक वृत्त', bn: 'মূলবিন্দুগামী একটি বৃত্ত' } },
        { id: 'opt-2', text: { en: 'Another straight line passing through the origin, reflected across the real axis', hi: 'मूल बिंदु से गुजरने वाली दूसरी सरल रेखा, जो वास्तविक अक्ष पर प्रतिबिंबित होती है', bn: 'মূলবিন্দুগামী আরেকটি সরলরেখা, যা বাস্তব অক্ষের সাপেক্ষে প্রতিবিম্বিত' } },
        { id: 'opt-3', text: { en: 'An ellipse with foci at ±j1', hi: '±j1 पर नाभियों वाला एक दीर्घवृत्त', bn: '±j১ এ ফোকাসযুক্ত একটি উপবৃত্ত' } },
        { id: 'opt-4', text: { en: 'A point at infinity only', hi: 'केवल अनंत पर एक बिंदु', bn: 'শুধুমাত্র অসীমে একটি বিন্দু' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'By the laws of complex inversion w = 1/z: a straight line NOT passing through the origin transforms into a circle passing through the origin. However, a straight line PASSING through the origin (z = r e^{jθ}) inverts into w = (1/r) e^{-jθ}, which is another straight line passing through the origin at the conjugate angle -θ.',
        hi: 'जटिल व्युत्क्रमण w = 1/z के अनुसार: यदि रेखा मूल बिंदु से नहीं गुजरती तो वह वृत्त बनती है। लेकिन यदि रेखा मूल बिंदु से गुजरती है (z = r e^{jθ}), तो उसका व्युत्क्रम w = (1/r) e^{-jθ} भी मूल बिंदु से गुजरने वाली एक सीधी रेखा ही होती है।',
        bn: 'জটিল রূপান্তরে w = ১/z: রেখাটি মূলবিন্দুগামী না হলে বৃত্তে পরিণত হয়। কিন্তু রেখাটি মূলবিন্দুগামী হলে (z = r e^{jθ}) এর বিপরীত রূপ w = (১/r) e^{-jθ} ও মূলবিন্দুগামী আরেকটি সরলরেখাই থাকে।'
      }
    },
    {
      id: 'mcq-ch12-l10-08',
      question: {
        en: 'How can power systems engineers determine the maximum active power transfer capability of a long transmission line using receiving-end circle diagrams?',
        hi: 'पावर सिस्टम इंजीनियर प्राप्त-सिरे (Receiving-end) के वृत्त आरेखों का उपयोग करके एक लंबी ट्रांसमिशन लाइन की अधिकतम सक्रिय शक्ति संचरण क्षमता कैसे निर्धारित कर सकते हैं?',
        bn: 'রিসিভিং-এন্ড সার্কেল ডায়াগ্রাম ব্যবহার করে পাওয়ার সিস্টেম ইঞ্জিনিয়াররা কীভাবে সঞ্চালন লাইনের সর্বোচ্চ সক্রিয় ক্ষমতা সঞ্চালন ক্ষমতা নির্ণয় করেন?'
      },
      options: [
        { id: 'opt-1', text: { en: 'By measuring the horizontal distance from the vertical Q-axis to the rightmost point (tangent) of the receiving-end power circle', hi: 'ऊर्ध्वाधर Q-अक्ष से प्राप्त-सिरे के पावर वृत्त के सबसे दाहिने बिंदु (स्पर्शरेखा) तक की क्षैतिज दूरी को मापकर', bn: 'উল্লম্ব Q-অক্ষ থেকে রিসিভিং-এন্ড পাওয়ার বৃত্তের সর্বডানের বিন্দু পর্যন্ত অনুভূমিক দূরত্ব মেপে' } },
        { id: 'opt-2', text: { en: 'By counting the number of insulators on each transmission tower', hi: 'प्रत्येक ट्रांसमिशन टॉवर पर इंसुलेटर की संख्या गिनकर', bn: 'ট্রান্সমিশন টাওয়ারের ইনসুলেটর সংখ্যা গুনে' } },
        { id: 'opt-3', text: { en: 'By equating active power to zero', hi: 'सक्रिय शक्ति को शून्य के बराबर मानकर', bn: 'সক্রিয় ক্ষমতাকে শূন্য ধরে' } },
        { id: 'opt-4', text: { en: 'By measuring the DC resistance with an ohmmeter', hi: 'ओह्ममीटर से डीसी प्रतिरोध मापकर', bn: 'ওহমমিটার দিয়ে ডিসি রোধ মেপে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'On a receiving-end power circle diagram (plotted on P-Q axes with P horizontal and Q vertical), the receiving-end operating point lies on a circle of radius |V_1 · V_2| / |B|. The maximum active power transfer limit (P_R,max) corresponds to the extreme rightward edge of this circle where dP/dδ = 0 (rotor angle δ = 90°).',
        hi: 'P-Q अक्षों पर खींचे गए रिसीविंग-एंड पावर सर्कल में, अधिकतम सक्रिय शक्ति (P_max) वृत्त के सबसे दाहिने बिंदु की क्षैतिज दूरी से निर्धारित होती है जहाँ पावर एंगल δ = 90° होता है।',
        bn: 'P-Q অক্ষে আঁকা রিসিভিং-এন্ড পাওয়ার সার্কেলে সর্বোচ্চ সক্রিয় ক্ষমতা (P_max) পাওয়া যায় বৃত্তের সর্বডান প্রান্তের অনুভূমিক স্থানাঙ্ক থেকে, যেখানে পাওয়ার অ্যাঙ্গেল δ = ৯০° হয়।'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-ch12-l10-01',
      title: {
        en: 'AC Series RL & RC Impedance-to-Current Locus Circle Diagrams',
        hi: 'एसी श्रेणी RL एवं RC प्रतिबाधा-से-धारा लोकस वृत्त आरेख',
        bn: 'এসি শ্রেণি RL ও RC ইম্পিডেন্স-থেকে-কারেন্ট লোকাস সার্কেল ডায়াগ্রাম'
      },
      caption: {
        en: 'Complex plane mapping showing straight-line impedance loci transforming via circular inversion into 4th quadrant (RL lagging) and 1st quadrant (RC leading) current semicircles.',
        hi: 'सम्मिश्र तल प्रतिचित्रण जो सीधी रेखा प्रतिबाधा लोकस को व्युत्क्रमण द्वारा 4th क्वाड्रेंट (RL लैगिंग) और 1st क्वाड्रेंट (RC लीडिंग) धारा अर्धवृत्तों में रूपांतरित करता है।',
        bn: 'জটিল সমতলে সরলরৈখিক ইম্পিডেন্স লোকাস বিপরীতকরণের মাধ্যমে ৪র্থ কোয়াড্র্যান্টে (RL ল্যাগিং) এবং ১ম কোয়াড্র্যান্টে (RC লিডিং) অর্ধবৃত্তাকার কারেন্ট লোকাসে রূপান্তরের চিত্র।'
      },
      svgType: 'circuit-ch12-ac-locus-diagrams'
    }
  ]
};
