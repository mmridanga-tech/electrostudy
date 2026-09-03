import { Lesson } from '../types';

export const LESSON_HOMOPOLAR_GENERATORS_DISCS: Lesson = {
  id: 'lsn-ch10-homopolar-generators-discs',
  topicId: 'ch10-homopolar-generators-discs',
  chapterId: 'ch-em-induction',
  order: 14,
  title: {
    en: 'Faraday’s Disc & Homopolar Generators: Pure Unidirectional DC Induction',
    hi: 'फैराडे डिस्क एवं होमोपोलर जनरेटर: शुद्ध एकदिशीय डीसी प्रेरण',
    bn: 'ফ্যারাডে ডিস্ক ও হোমোপোলার জেনারেটর: বিশুদ্ধ ডিসি আবেশ'
  },
  description: {
    en: 'Thorough investigation of Faraday’s 1831 homopolar disc, radial Lorentz EMF derivation E = ½BωR², un-commutated ripple-free DC, the Faraday paradox, and megawatt pulsed power systems.',
    hi: 'फैराडे की 1831 होमोपोलर डिस्क, त्रिज्यीय लॉरेंट्ज़ ईएमएफ व्युत्पत्ति E = ½BωR², बिना कम्यूटेटर के रिपल-रहित शुद्ध डीसी, फैराडे विरोधाभास तथा मेगावाट पल्स पावर प्रणालियों का गहन अध्ययन।',
    bn: 'ফ্যারাডের ১৮৩১ সালের হোমোপোলার ডিস্ক, রেডিয়াল লরেঞ্জ ইএমএফ প্রতিপাদন E = ½BωR², কমিউটেটরহীন বিশুদ্ধ ডিসি, ফ্যারাডে প্যারাডক্স এবং মেগাওয়াট পালস পাওয়ার সিস্টেমের বিশদ বিশ্লেষণ।'
  },
  estimatedMinutes: 30,
  easyExplanation: {
    en: "Normally, generators produce alternating current (AC) because a wire loop flips between North and South magnetic poles. But in late 1831, Michael Faraday invented a machine that generates 100% pure, ripple-free Direct Current (DC) with zero commutator switches! He mounted a solid copper disc between the poles of a horseshoe magnet and spun it. As the disc spins, every radial spoke cuts magnetic lines in the same direction, continuously pushing electrons from the center axle toward the outer rim. Brushes touching the axle and rim pick up steady, smooth DC electricity.",
    hi: 'सामान्य जनरेटर प्रत्यावर्ती धारा (AC) बनाते हैं क्योंकि तार के लूप को बारी-बारी से उत्तरी और दक्षिणी ध्रुवों के बीच घूमना पड़ता है। लेकिन 1831 में माइकल फैराडे ने एक ऐसी मशीन बनाई जो बिना किसी कम्यूटेटर के 100% शुद्ध और स्थिर डीसी (DC) बिजली पैदा करती है! उन्होंने एक गोल तांबे की चकती (डिस्क) को चुंबक के ध्रुवों के बीच घुमाया। जैसे ही चकती घूमती है, केंद्र से किनारे की ओर जाने वाली प्रत्येक त्रिज्या चुंबकीय रेखाओं को एक ही दिशा में काटती है। इससे इलेक्ट्रॉन धुरी से बाहरी किनारे की ओर बहने लगते हैं, जिससे शुद्ध डीसी वोल्टेज प्राप्त होता है।',
    bn: 'সাধারণ জেনারেটরে কয়েল উত্তর ও দক্ষিণ মেরুর মাঝে আবর্তিত হওয়ায় এসি কারেন্ট তৈরি হয়। কিন্তু ১৮৩১ সালে মাইকেল ফ্যারাডে এমন এক জেনারেটর উদ্ভাবন করেন যা কোনো কমিউটেটর ছাড়াই ১০০% বিশুদ্ধ ও রিপলহীন ডিসি (DC) বিদ্যুৎ উৎপাদন করে! একটি তামার বৃত্তাকার চাকতিকে সমান্তরাল চৌম্বক ক্ষেত্রে ঘোরালে চাকতির কেন্দ্রবিন্দু থেকে পরিধির দিকে ইলেকট্রন প্রবাহিত হতে থাকে। চাকতির অক্ষ এবং পরিধিতে কার্বন ব্রাশ স্পর্শ করিয়ে অতি উচ্চমাত্রার একমুখী ডিসি বিদ্যুৎ আহরণ করা হয়।'
  },
  detailedExplanation: {
    en: `1. Historical Breakthrough:
In late 1831, shortly after discovering electromagnetic induction, Michael Faraday constructed the world's very first electrical generator: the 'Faraday Disc' (also called a Homopolar, Unipolar, or Acyclic Generator).
Unlike loop generators where flux linkage alternates periodically (yielding AC), the Faraday disc maintains a constant topological orientation with respect to a stationary magnetic field, producing pure, un-rectified DC.

2. Physical Operation & Lorentz Force Mechanism:
Consider a solid conducting disc of radius R and thickness w, rotating with constant angular velocity ω in a uniform axial magnetic field B perpendicular to the disc face:
- At any point at radial distance r from the center (0 ≤ r ≤ R), the linear tangential velocity is:
  v(r) = ω · r
- The magnetic field vector B points axially (perpendicular to the plane of the disc).
- Conduction electrons in the metal experience a magnetic Lorentz force directed radially outward:
  F_m = q · (v × B)
- The motional electric field established inside the disc is:
  E_mot = v × B = (ω · r) · B  (directed radially outward)

3. Mathematical Derivation of Terminal EMF:
The total induced electromotive force between the central rotational axle (r = 0) and the outer perimeter rim (r = R) is obtained by integrating along a radial spoke:
  E = ∫[0 to R] (v × B) · dr = ∫[0 to R] (ω · r · B) · dr
  E = B · ω · ∫[0 to R] r · dr = B · ω · [r² / 2][0 to R]
  E = (1/2) · B · ω · R² (Volts)

Alternative Expression in terms of Rotational Frequency f (rev/sec):
Since ω = 2πf and disc surface area A = πR²:
  E = (1/2) · B · (2πf) · R² = B · (πR²) · f = B · A · f (Volts)
Notice that B · A is the total magnetic flux Φ threading through the disc. Therefore:
  E = Φ · f (Volts)
Every second, the radial contact line sweeps through the flux Φ exactly f times!

4. Unique Electrical Characteristics:
- Commutator-Free: The output is naturally DC with absolute zero ripple (0.00% harmonic distortion).
- Low Voltage, Extremely High Current: Because it is a single-stage solid conductor (effective N = 1), the generated voltage is typically low (1 V to 50 V). However, because internal resistance is microscopic (often < 10⁻⁵ Ω), homopolar generators can deliver enormous currents of 50,000 A to 1,000,000+ A!

5. The Famous Faraday Paradox:
Faraday investigated what happens when the magnet rotates:
- Case 1 (Stationary magnet, rotating disc): Galvanometer deflects (EMF generated).
- Case 2 (Rotating magnet, stationary disc): Galvanometer shows ZERO deflection!
- Case 3 (Rotating magnet AND rotating disc together): Galvanometer deflects!
Resolution via Special Relativity & Maxwell's Electrodynamics:
The magnetic lines of force do not rotate with the magnet. The induced EMF arises from the relative motion of the disc conductors cutting the stationary field, combined with the return circuit wiring which remains stationary in the laboratory frame.

6. Modern Engineering Applications:
- Electromagnetic Railguns & Coilguns: Requiring megawatt pulses of mega-ampere current over milliseconds.
- Continuous DC Welding & Pipe Manufacturing: Submerged arc welding requiring tens of thousands of ripple-free amperes.
- Liquid Metal Brushes: Using sodium-potassium (NaK) eutectic or gallium-indium alloys to overcome high-speed sliding brush resistance.`,

    hi: `1. ऐतिहासिक पृष्ठभूमि:
1831 में माइकल फैराडे ने दुनिया के पहले विद्युत जनरेटर "फैराडे डिस्क" का आविष्कार किया। इसमें किसी कम्यूटेटर की आवश्यकता नहीं होती और यह बिना किसी तरंग (रिपल) के शुद्ध डीसी वोल्टेज उत्पन्न करता है।

2. ईएमएफ का गणितीय निगमन:
त्रिज्या R की एक तांबे की डिस्क को कोणीय वेग ω से एकसमान चुंबकीय क्षेत्र B में घुमाया जाता है।
केंद्र से r दूरी पर स्पर्शरेखीय वेग v = ω·r होता है।
इलेक्ट्रॉनों पर लगने वाला लॉरेंट्ज़ बल: F = q(v × B)।
केंद्र (r = 0) से बाहरी किनारे (r = R) के बीच कुल प्रेरित वोल्टेज:
  E = ∫[0 to R] (ω · r · B) dr = ½ · B · ω · R² (वोल्ट)
आवृत्ति f के पदों में:
  E = B · A · f  (जहाँ A = πR² चकती का क्षेत्रफल है)

3. विद्युत विशेषताएं:
- कम वोल्टेज, अत्यधिक उच्च धारा: वोल्टेज 2 से 20 वोल्ट होता है, किंतु धारा 10,000 से 1,000,000 एम्पीयर तक हो सकती है!
- अनुप्रयोग: रेलगन (पल्स पावर), इलेक्ट्रोकेमिकल शोधन तथा औद्योगिक पाइप वेल्डिंग।`,

    bn: `১. ঐতিহাসিক পটভূমি:
১৮৩১ সালে মাইকেল ফ্যারাডে বিশ্বের প্রথম বিদ্যুৎ উৎপাদক "ফ্যারাডে ডিস্ক" তৈরি করেন। এটি কোনো রূপান্তরকারী বা কমিউটেটর ছাড়াই সরাসরি খাঁটি ডিসি ভোল্টেজ উৎপন্ন করে।

২. সমীকরণ প্রতিপাদন:
R ব্যাসার্ধের চাকতি ω কৌণিক বেগে B চৌম্বক ক্ষেত্রে আবর্তিত হলে কেন্দ্র ও পরিধির মধ্যে আবিষ্ট ইএমএফ:
  E = ½ · B · ω · R² (ভোল্ট)
কম্পাঙ্ক f-এর সাপেক্ষে:
  E = B · A · f (যেখানে A = πR²)`
  },
  formulas: [
    {
      id: 'f-homopolar-disc-emf',
      symbol: 'E',
      expression: 'E = ½ · B · ω · R² = B · π · R² · f = Φ · f',
      title: {
        en: 'Homopolar Faraday Disc Induced EMF',
        hi: 'होमोपोलर फैराडे डिस्क प्रेरित ईएमएफ',
        bn: 'হোমোপোলার ফ্যারাডে ডিস্ক আবিষ্ট ইএমএফ'
      },
      description: {
        en: 'Open-circuit DC voltage induced radially between the central axle and outer perimeter rim of a rotating disc',
        hi: 'घूर्णनशील डिस्क की केंद्रीय धुरी एवं बाहरी परिधि के बीच त्रिज्यीय रूप से प्रेरित ओपन-सर्किट डीसी वोल्टेज',
        bn: 'ঘূর্ণনশীল চাকতির কেন্দ্রীয় অক্ষ ও বাইরের পরিধির মধ্যবর্তী রেডিয়াল মুক্ত-বর্তনীর আবিষ্ট ডিসি ভোল্টেজ'
      },
      variables: [
        { symbol: 'E', name: { en: 'Generated DC voltage (V)', hi: 'प्रेरित डीसी वोल्टेज (V)', bn: 'উৎপন্ন ডিসি ভোল্টেজ (V)' } },
        { symbol: 'B', name: { en: 'Axial magnetic flux density (T)', hi: 'अक्षीय फ्लक्स घनत्व (T)', bn: 'অক্ষীয় ফ্লাক্স ঘনত্ব (T)' } },
        { symbol: 'ω', name: { en: 'Angular velocity (rad/s)', hi: 'कोणीय वेग (rad/s)', bn: 'কৌণিক বেগ (rad/s)' } },
        { symbol: 'R', name: { en: 'Disc outer radius (m)', hi: 'डिस्क की त्रिज्या (m)', bn: 'চাকতির ব্যাসার্ধ (m)' } },
        { symbol: 'f', name: { en: 'Rotational speed in rev/sec (N/60)', hi: 'घूर्णन गति (चक्कर/सेकंड)', bn: 'ঘূর্ণন গতি (ঘূর্ণন/সেকেন্ড)' } },
        { symbol: 'Φ', name: { en: 'Total magnetic flux cutting disc (Wb)', hi: 'कुल चुंबकीय फ्लक्स (Wb)', bn: 'মোট চৌম্বক ফ্লাক্স (Wb)' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-faraday-paradox-detail',
      title: {
        en: 'Resolution of the Faraday Paradox in Modern Physics',
        hi: 'आधुनिक भौतिकी में फैराडे विरोधाभास का समाधान',
        bn: 'আধুনিক পদার্থবিদ্যায় ফ্যারাডে প্যারাডক্সের সমাধান'
      },
      content: {
        en: `The paradox: If you spin a cylindrical permanent magnet on its own symmetry axis, does its magnetic field spin with it?
1. If the field spun, a stationary wire nearby would experience a moving field and produce an EMF, but experimental measurements show zero EMF!
2. In classical electromagnetism, fields are not physical solid bodies attached to matter; they are local tensor properties of space-time.
3. In relativistic electrodynamics, a co-rotating observer inside the magnet measures a radial electrostatic polarization due to Lorentz transformation of fields: E' = v × B.
4. When the disc spins, conduction electrons inside the disc move through the laboratory magnetic field, driving them outward toward the rim. The stationary external leads complete the circuit, registering the full Lorentz voltage.`,
        hi: `फैराडे विरोधाभास का रहस्य:
क्या चुंबक को घुमाने पर उसका चुंबकीय क्षेत्र भी साथ घूमता है?
1. प्रयोग दिखाते हैं कि अकेले चुंबक को घुमाने पर पास रखे स्थिर तार में कोई करंट पैदा नहीं होता।
2. आधुनिक भौतिकी और सापेक्षता के अनुसार, चुंबकीय क्षेत्र कोई ठोस वस्तु नहीं है जो पदार्थ से बंधी हो। यह अंतरिक्ष का एक गुण है।
3. वोल्टेज तभी बनता है जब डिस्क के चालक चुंबकीय क्षेत्र के सापेक्ष गति करते हैं और स्थिर बाहरी परिपथ तार सर्किट को पूरा करता है।`,
        bn: `ফ্যারাডে প্যারাডক্সের সমাধান:
চৌম্বক ক্ষেত্র কোনো কঠিন বস্তু নয় যা চুম্বকের সাথে ঘুরবে। চাকতির অভ্যন্তরীণ ইলেকট্রন যখন স্থির চৌম্বক ক্ষেত্রের মধ্য দিয়ে গতিশীল হয়, তখনই লরেঞ্জ বলের কারণে কেন্দ্র থেকে পরিধিতে বিভব পার্থক্য তৈরি হয়।`
      },
      schematicId: 'circuit-ch10-faraday-homopolar-disc'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-homopolar-1',
      problem: {
        en: 'A solid copper disc has outer radius R_o = 0.5 m, axle radius R_i = 0.05 m, and axial thickness t = 15 mm. It rotates at 3000 RPM in a uniform perpendicular axial magnetic field B = 1.8 T. (a) Derive and calculate the open-circuit radial induced EMF E_oc between axle and rim. (b) If copper resistivity ρ = 1.72 × 10⁻⁸ Ω·m, calculate the radial internal resistance R_disc = [ρ / (2π · t)] · ln(R_o / R_i). (c) If an external pulsed load resistor R_L = 50 μΩ is connected via liquid-metal contacts having contact resistance R_c = 10 μΩ, calculate the peak pulse current I_pulse and peak delivered power P_L.',
        hi: 'एक ठोस तांबे की डिस्क की बाहरी त्रिज्या R_o = 0.5 m, धुरी की त्रिज्या R_i = 0.05 m तथा मोटाई t = 15 mm है। यह 1.8 T के एकसमान चुंबकीय क्षेत्र में 3000 RPM पर घूमती है। (a) अक्ष और परिधि के बीच ओपन-सर्किट प्रेरित ईएमएफ E_oc की गणना कीजिए। (b) तांबे की प्रतिरोधकता ρ = 1.72 × 10⁻⁸ Ω·m मानते हुए डिस्क का आंतरिक त्रिज्यीय प्रतिरोध R_disc ज्ञात कीजिए। (c) यदि बाहरी लोड R_L = 50 μΩ और लिक्विड मेटल ब्रश संपर्क प्रतिरोध R_c = 10 μΩ हो, तो स्पंद धारा I_pulse तथा आउटपुट शक्ति P_L ज्ञात कीजिए।',
        bn: 'একটি নিরেট তামার চাকতির বহিঃব্যাসার্ধ R_o = ০.৫ m, ভেতরের অক্ষীয় ব্যাসার্ধ R_i = ০.০৫ m এবং পুরুত্ব t = ১৫ mm। এটি ১.৮ T সুষম অক্ষীয় চৌম্বক ক্ষেত্রে ৩০০০ RPM গতিতে ঘোরে। (a) অক্ষ ও পরিধির মধ্যবর্তী ওপেন-সার্কিট আবিষ্ট ইএমএফ E_oc নির্ণয় কর। (b) তামার রোধাঙ্ক ρ = ১.৭২ × ১০⁻⁸ Ω·m হলে ডিস্কের অভ্যন্তরীণ রেডিয়াল রোধ R_disc নির্ণয় কর। (c) তরল-ধাতব ব্রাশের সংস্পর্শ রোধ R_c = ১০ μΩ এবং বহিঃস্থ লোড রোধ R_L = ৫০ μΩ হলে স্পন্দ কারেন্ট I_pulse ও সরবরাহকৃত ক্ষমতা P_L নির্ণয় কর।'
      },
      givenValues: {
        en: 'R_o = 0.5 m, R_i = 0.05 m, t = 0.015 m, N = 3000 RPM, B = 1.8 T, ρ = 1.72 × 10⁻⁸ Ω·m, R_L = 50 μΩ, R_c = 10 μΩ',
        hi: 'R_o = 0.5 m, R_i = 0.05 m, t = 0.015 m, N = 3000 RPM, B = 1.8 T, ρ = 1.72 × 10⁻⁸ Ω·m, R_L = 50 μΩ, R_c = 10 μΩ',
        bn: 'R_o = ০.৫ m, R_i = ০.০৫ m, t = ০.০১৫ m, N = ৩০০০ RPM, B = ১.৮ T, ρ = ১.৭২ × ১০⁻⁸ Ω·m, R_L = ৫০ μΩ, R_c = ১০ μΩ'
      },
      solution: {
        en: `1. Calculate angular velocity:
   ω = 2π · N / 60 = 2π · 3000 / 60 = 100π ≈ 314.16 rad/s
2. Calculate open-circuit radial motional EMF:
   E_oc = ∫[R_i to R_o] (v × B) dr = ∫[R_i to R_o] (ω · r · B) dr
   E_oc = ½ · B · ω · (R_o² - R_i²)
   E_oc = 0.5 · 1.8 · 314.16 · (0.5² - 0.05²)
   E_oc = 0.9 · 314.16 · (0.25 - 0.0025) = 282.744 · 0.2475 ≈ 69.98 V ≈ 70.0 V
3. Calculate disc radial internal resistance:
   R_disc = [ρ / (2π · t)] · ln(R_o / R_i)
   R_disc = [(1.72 × 10⁻⁸) / (2π · 0.015)] · ln(0.5 / 0.05)
   R_disc = (1.825 × 10⁻⁷) · ln(10) = 1.825 × 10⁻⁷ · 2.3026 ≈ 0.420 × 10⁻⁶ Ω = 0.42 μΩ
4. Calculate total circuit resistance and pulse current:
   R_total = R_disc + R_c + R_L = 0.42 μΩ + 10 μΩ + 50 μΩ = 60.42 μΩ = 6.042 × 10⁻⁵ Ω
   I_pulse = E_oc / R_total = 69.98 V / (6.042 × 10⁻⁵ Ω) ≈ 1,158,225 A ≈ 1.158 MA (Mega-Amperes!)
5. Calculate delivered load power:
   P_L = I² · R_L = (1.1582 × 10⁶ A)² · (50 × 10⁻⁶ Ω) ≈ 6.707 × 10⁷ W = 67.1 MW`,
        hi: `1. कोणीय वेग:
   ω = 2π × 3000 / 60 = 100π ≈ 314.16 rad/s
2. ओपन-सर्किट प्रेरित ईएमएफ:
   E_oc = ½ × B × ω × (R_o² - R_i²)
   E_oc = 0.5 × 1.8 × 314.16 × (0.25 - 0.0025) ≈ 70.0 V
3. डिस्क का आंतरिक प्रतिरोध:
   R_disc = [ρ / (2π × t)] × ln(R_o / R_i) = 0.42 μΩ
4. कुल प्रतिरोध और करंट:
   R_total = 0.42 + 10 + 50 = 60.42 μΩ
   I_pulse = 70.0 V / (60.42 × 10⁻⁶ Ω) ≈ 1.158 MA (मेगा-एम्पीयर!)
5. लोड शक्ति:
   P_L = I² × R_L ≈ 67.1 MW`,
        bn: `১. কৌণিক বেগ:
   ω = ২π × ৩০০০ / ৬০ = ১০০π ≈ ৩১৪.১৬ rad/s
২. ওপেন-সার্কিট আবিষ্ট ইএমএফ:
   E_oc = ½ × B × ω × (R_o² - R_i²)
   E_oc = ০.৫ × ১.৮ × ৩১৪.১৬ × (০.২৫ - ০.০০২৫) ≈ ৭০.০ V
৩. চাকতির অভ্যন্তরীণ রোধ:
   R_disc = [ρ / (২π × t)] × ln(R_o / R_i) = ০.৪২ μΩ
৪. মোট রোধ ও স্পন্দ কারেন্ট:
   R_total = ০.৪২ + ১০ + ৫০ = ৬০.৪২ μΩ
   I_pulse = ৭০.০ V / (৬০.৪২ × ১০⁻⁶ Ω) ≈ ১.১৫৮ MA (মেগা-অ্যাম্পিয়ার!)
৫. সরবরাহকৃত ক্ষমতা:
   P_L = I² × R_L ≈ ৬৭.১ MW`
      },
      finalAnswer: {
        en: 'E_oc = 70.0 V; R_disc = 0.42 μΩ; I_pulse = 1.158 MA; P_L = 67.1 MW',
        hi: 'E_oc = 70.0 V; R_disc = 0.42 μΩ; I_pulse = 1.158 MA; P_L = 67.1 MW',
        bn: 'E_oc = ৭০.০ V; R_disc = ০.৪২ μΩ; I_pulse = ১.১৫৮ MA; P_L = ৬৭.১ MW'
      }
    },
    {
      id: 'ex-homopolar-2',
      problem: {
        en: 'A cylindrical permanent magnet has field B = 0.8 T and radius R = 0.2 m. An adjacent identical copper disc spins at angular velocity ω = 200 rad/s. A stationary laboratory voltmeter is connected between the center axle and the rim brush. Analyze and calculate the measured terminal voltage V for the three classical Faraday paradox cases: (1) Stationary magnet, rotating disc. (2) Rotating magnet, stationary disc. (3) Rigidly bonded magnet and disc rotating together. Explain the physical mechanism resolving Case (3).',
        hi: 'एक बेलनाकार चुंबक (B = 0.8 T, त्रिज्या R = 0.2 m) और पास रखी तांबे की डिस्क ω = 200 rad/s पर घूम सकती है। प्रयोगशाला में स्थिर वोल्टमीटर अक्ष और परिधि से जुड़ा है। फैराडे विरोधाभास की तीन स्थितियों के लिए टर्मिनल वोल्टेज V की गणना करें: (1) स्थिर चुंबक, घूमती डिस्क। (2) घूमता चुंबक, स्थिर डिस्क। (3) चुंबक और डिस्क दोनों एक साथ घूम रहे हैं।',
        bn: 'একটি বেলনাকার স্থায়ী চুম্বকের চৌম্বক ক্ষেত্র B = ০.৮ T এবং ব্যাসার্ধ R = ০.২ m। একটি অনুরূপ তামার চাকতি ω = ২০০ rad/s কৌণিক বেগে ঘুরতে পারে। ল্যাবরেটরিতে একটি স্থির ভোল্টমিটার কেন্দ্র ও পরিধির ব্রাশে যুক্ত। ফ্যারাডে প্যারাডক্সের ৩টি ক্ষেত্রে পরিমাপকৃত ভোল্টেজ V নির্ণয় কর: (১) স্থির চুম্বক, ঘূর্ণনশীল চাকতি। (২) ঘূর্ণনশীল চুম্বক, স্থির চাকতি। (৩) চুম্বক ও চাকতি উভয়ই একসাথে ঘূর্ণনশীল।'
      },
      givenValues: {
        en: 'B = 0.8 T, R = 0.2 m, ω = 200 rad/s',
        hi: 'B = 0.8 T, R = 0.2 m, ω = 200 rad/s',
        bn: 'B = ০.৮ T, R = ০.২ m, ω = ২০০ rad/s'
      },
      solution: {
        en: `1. Calculate the magnitude of the theoretical Faraday radial EMF:
   V_calc = ½ · B · ω · R² = 0.5 · 0.8 · 200 · (0.2)² = 80 · 0.04 = 3.20 V
2. Evaluate Case (1): Magnet stationary, disc rotates:
   Conduction electrons inside the disc move with velocity v = ω · r through the laboratory B-field.
   Lorentz force F = q(v × B) drives electrons radially inward/outward.
   Measured voltage V₁ = +3.20 V.
3. Evaluate Case (2): Magnet rotates, disc is stationary:
   An axisymmetric rotating magnet has steady field symmetry; ∂B/∂t = 0 everywhere.
   By Maxwell's equation ∇ × E = -∂B/∂t = 0, no electric field is induced in space.
   Since the disc electrons are stationary (v = 0), Lorentz force is zero.
   Measured voltage V₂ = 0.00 V.
4. Evaluate Case (3): Magnet and disc rotate together:
   Electrons in the rotating disc still move at velocity v = ω · r relative to the laboratory frame.
   The external measuring voltmeter leads and brushes are stationary in the laboratory frame.
   Therefore, the disc maintains the radial Lorentz polarization E = v × B, driving current through the stationary external loop.
   Measured voltage V₃ = +3.20 V.
5. Physical conclusion:
   Magnetic field lines are not rigid physical spokes that rotate with the magnet. Voltage depends on conductor velocity through the field in the frame where the external measuring circuit resides.`,
        hi: `1. सैद्धांतिक फैराडे त्रिज्यीय ईएमएफ:
   V_calc = ½ × B × ω × R² = 0.5 × 0.8 × 200 × 0.04 = 3.20 V
2. स्थिति (1): चुंबक स्थिर, डिस्क घूर्णनशील:
   डिस्क के इलेक्ट्रॉन v = ωr वेग से गति करते हैं। लोरेंत्ज़ बल F = q(v × B) त्रिज्यीय वोल्टेज बनाता है।
   मापा गया वोल्टेज V₁ = +3.20 V।
3. स्थिति (2): चुंबक घूर्णनशील, डिस्क स्थिर:
   चुंबक के घूमने से अंतरिक्ष में B का मान नहीं बदलता (∂B/∂t = 0)। डिस्क स्थिर होने से v = 0, अतः लोरेंत्ज़ बल शून्य होता है।
   मापा गया वोल्टेज V₂ = 0.00 V।
4. स्थिति (3): चुंबक और डिस्क दोनों एक साथ घूमते हैं:
   प्रयोगशाला फ्रेम के सापेक्ष डिस्क के इलेक्ट्रॉन अभी भी गति में हैं, जबकि बाहरी मीटर के तार स्थिर हैं। परिपथ पूरा होने से पूरा वोल्टेज प्राप्त होता है।
   मापा गया वोल्टेज V₃ = +3.20 V।
5. निष्कर्ष: चुंबकीय क्षेत्र चुंबक के साथ नहीं घूमता; वोल्टेज चालक की सापेक्ष गति पर निर्भर करता है।`,
        bn: `১. তাত্ত্বিক ফ্যারাডে রেডিয়াল ইএমএফ:
   V_calc = ½ × B × ω × R² = ০.৫ × ০.৮ × ২০০ × ০.০৪ = ৩.২০ V
২. ক্ষেত্র (১): চুম্বক স্থির, চাকতি ঘুরছে:
   চাকতির মুক্ত ইলেকট্রন ল্যাবরেটরি চৌম্বক ক্ষেত্রের মধ্য দিয়ে v = ωr বেগে চলায় লরেঞ্জ বল অনুভব করে।
   প্রাপ্ত ভোল্টেজ V₁ = +৩.২০ V।
৩. ক্ষেত্র (২): চুম্বক ঘুরছে, চাকতি স্থির:
   প্রতিসম চুম্বক ঘোরার ফলে স্থানিক চৌম্বক ক্ষেত্রে কোনো পরিবর্তন ঘটে না (∂B/∂t = ০)। চাকতির ইলেকট্রন স্থির (v = ০) থাকায় কোনো লরেঞ্জ বল নেই।
   প্রাপ্ত ভোল্টেজ V₂ = ০.০০ V।
৪. ক্ষেত্র (৩): চুম্বক ও চাকতি একসাথে ঘুরছে:
   ল্যাবরেটরি কাঠামোর সাপেক্ষে চাকতির ইলেকট্রনগুলো চলমান এবং বহিস্থ তার ও ভোল্টমিটার স্থির। ফলে পুরো লরেঞ্জ পটেনশিয়াল বাইরে পরিমাপ করা যায়।
   প্রাপ্ত ভোল্টেজ V₃ = +৩.২০ V।
৫. সিদ্ধান্ত: চৌম্বক বলরেখা কোনো ঘূর্ণনশীল কঠিন দণ্ড নয়; ল্যাবরেটরি কাঠামোর সাপেক্ষে ইলেকট্রনের গতির ফলেই ভোল্টেজ তৈরি হয়।`
      },
      finalAnswer: {
        en: 'Case 1: V₁ = 3.20 V; Case 2: V₂ = 0.00 V; Case 3: V₃ = 3.20 V',
        hi: 'स्थिति 1: V₁ = 3.20 V; स्थिति 2: V₂ = 0.00 V; स्थिति 3: V₃ = 3.20 V',
        bn: 'ক্ষেত্র ১: V₁ = ৩.২০ V; ক্ষেত্র ২: V₂ = ০.০০ V; ক্ষেত্র ৩: V₃ = ৩.২০ V'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Electromagnetic Railgun Pulsed Power: High-speed homopolar generators store megajoules of rotational kinetic energy discharged as megampere current pulses.',
      'Tokamak Fusion Toroidal Field Excitation: Supplying millions of amperes of smooth direct current to magnetize plasma confinement coils in nuclear fusion experiments.',
      'Heavy Industrial Pipe & Rail Flash Butt Welding: Delivering 50 kA to 200 kA low-voltage DC for instantaneous localized metal fusion without transformer saturation.',
      'Electrochemical Aluminum & Chlorine Reduction: Providing continuous high-current DC directly without costly AC-to-DC diode rectification systems.',
      'Homopolar Superconducting Ship Propulsion Motors: Quiet, low-RPM, high-torque direct-drive marine motors utilizing superconducting field coils and liquid metal brushes.'
    ],
    hi: [
      'इलेक्ट्रोमैग्नेटिक रेलगन पल्स पावर: मेगाजूल गतिज ऊर्जा को कुछ मिलीसेकंड में मेगा-एम्पीयर करंट पल्स के रूप में विसर्जित करने वाले जनरेटर।',
      'टोकामक संलयन (Fusion) अनुसंधान: प्लाज्मा को नियंत्रित करने वाले विशाल सुपरकंडक्टिंग मैग्नेट को लाखों एम्पीयर डीसी धारा प्रदान करना।',
      'औद्योगिक पाइप और रेल पटरी वेल्डिंग: ट्रांसफॉर्मर सैचुरेशन के बिना तत्काल धातुओं को जोड़ने के लिए 50 kA से 200 kA की भारी डीसी धारा।',
      'विद्युत-रासायनिक एल्यूमीनियम निष्कर्षण: बिना किसी रेक्टिफायर के सीधे हजारों एम्पीयर शुद्ध डीसी प्राप्त करना।',
      'सुपरकंडक्टिंग नौसेना पोत प्रणोदन: शांत, कंपन-रहित उच्च-टॉर्क डायरेक्ट-ड्राइव समुद्री मोटरें।'
    ],
    bn: [
      'ইলেক্ট্রোম্যাগনেটিক রেলগানের পালস পাওয়ার: মেগাজুল গতিশক্তি সংরক্ষণ করে কয়েক মিলিসেকেন্ডে মেগা-অ্যাম্পিয়ার বিদ্যুৎ স্পন্দ সরবরাহকারী জেনারেটর।',
      'টোকামাক ফিউশন প্লাজমা নিয়ন্ত্রণ: পারমাণবিক ফিউশন চুল্লির শক্তিশালী চৌম্বক কয়েলে অবিচ্ছিন্ন লক্ষ লক্ষ অ্যাম্পিয়ার ডিসি বিদ্যুৎ সরবরাহ।',
      'ভারী রেললাইন ও পাইপ ওয়েল্ডিং: অতি স্বল্প ভোল্টেজে ৫০ kA থেকে ২০০ kA ডিসি কারেন্ট সরবরাহ করে তাৎক্ষণিক ধাতু গলিয়ে জোড়া লাগানো।',
      'অ্যালুমিনিয়াম ও ক্লোরিন তড়িৎ-বিশ্লেষণ: কোনো রেকটিফায়ার ডায়োড ছাড়াই সরাসরি হাজার হাজার অ্যাম্পিয়ার বিশুদ্ধ ডিসি উৎপাদন।',
      'সুপারকন্ডাক্টিং নৌযান মোটর: কম RPM এবং উচ্চ টর্কের নিরবচ্ছিন্ন সামুদ্রিক জাহাজ চালনা মোটর।'
    ]
  },
  importantPoints: {
    en: [
      'Pure natural DC: The Faraday disc is the only rotating generator that produces naturally pure, ripple-free DC without commutators, diodes, or rectifiers.',
      'Radial motional EMF equation: E = ½ · B · ω · (R_o² - R_i²), derived from integrating the Lorentz motional field v × B from the axle to the outer perimeter.',
      'Extremely low internal impedance: Because the armature is a thick solid metal disc or cylinder, internal resistance is sub-micro-ohm (R_int < 1 μΩ).',
      'Liquid metal brush technology: Conventional solid carbon brushes burn up at megampere current levels; commercial homopolar machines utilize liquid NaK or Galinstan sliding contacts.',
      'Resolution of the Faraday paradox: Rotating an axisymmetric permanent magnet does not drag its magnetic field along; induced EMF depends on the motion of conductor charges relative to the laboratory reference frame.',
      'Kinetic energy pulse extraction: Homopolar generators commonly double as inertial flywheels, converting mechanical kinetic energy into electrical energy in tens of milliseconds.'
    ],
    hi: [
      'प्राकृतिक शुद्ध डीसी: फैराडे डिस्क एकमात्र ऐसा घूर्णन जनरेटर है जो बिना किसी कम्यूटेटर या डायोड के स्वाभाविक शुद्ध रिपल-रहित डीसी उत्पन्न करता है।',
      'त्रिज्यीय प्रेरित ईएमएफ सूत्र: E = ½ · B · ω · (R_o² - R_i²), जो अक्ष से परिधि तक v × B के समाकलन से प्राप्त होता है।',
      'अत्यंत कम आंतरिक प्रतिरोध: ठोस धातु की डिस्क होने के कारण आंतरिक प्रतिरोध माइक्रो-ओम (μΩ) के स्तर पर होता है।',
      'लिक्विड मेटल ब्रश: लाखों एम्पीयर धारा प्रवाहित करने पर ठोस ब्रश जल जाते हैं, इसलिए तरल सोडियम-पोटेशियम (NaK) या गैलिंस्टन का उपयोग किया जाता है।',
      'फैराडे विरोधाभास का रहस्य: चुंबकीय क्षेत्र चुंबक के साथ नहीं घूमता; वोल्टेज प्रयोगशाला संदर्भ फ्रेम में चालक इलेक्ट्रॉनों की गति पर निर्भर करता है।',
      'फ्लाईव्हील ऊर्जा भंडारण: होमोपोलर रोटर विशाल गतिज ऊर्जा को संचित करके कुछ मिलीसेकंड में मेगा-एम्पीयर पल्स में बदल देते हैं।'
    ],
    bn: [
      'প্রাকৃতিক বিশুদ্ধ ডিসি: ফ্যারাডে ডিস্ক একমাত্র জেনারেটর যা কোনো কমিউটেটর বা ডায়োড ছাড়াই প্রাকৃতিকভাবে রিপলহীন বিশুদ্ধ ডিসি ভোল্টেজ উৎপন্ন করে।',
      'রেডিয়াল আবিষ্ট ইএমএফ সমীকরণ: E = ½ · B · ω · (R_o² - R_i²), যা কেন্দ্র থেকে পরিধি পর্যন্ত v × B এর যোগজীকরণ থেকে আসে।',
      'অত্যন্ত নগণ্য অভ্যন্তরীণ রোধ: সম্পূর্ণ নিরেট ধাতব চাকতি হওয়ায় এর অভ্যন্তরীণ রোধ মাইক্রো-ওহমেরও নিচে থাকে (R_int < ১ μΩ)।',
      'তরল ধাতব ব্রাশ প্রযুক্তি: মেগা-অ্যাম্পিয়ার কারেন্টে কঠিন কার্বন ব্রাশ গলে বাষ্পীভূত হয়ে যায়, তাই তরল সোডিয়াম-পটাসিয়াম বা গ্যালিনস্টান ব্যবহৃত হয়।',
      'ফ্যারাডে প্যারাডক্সের মূল কথা: প্রতিসম চুম্বক ঘোরার সাথে সাথে চৌম্বক ক্ষেত্র ঘোরে না; ল্যাবরেটরি কাঠামোর সাপেক্ষে কন্ডাক্টরের ইলেকট্রন প্রবাহই ভোল্টেজ তৈরি করে।',
      'ফ্লাইহুইল গতিশক্তি নির্গমন: হোমোপোলার রোটর একটি ভারী ফ্লাইহুইল হিসেবে কাজ করে সঞ্চিত মেগাজুল শক্তিকে মুহূর্তে মেগা-অ্যাম্পিয়ার পালসে পরিণত করে।'
    ]
  },
  commonMistakes: {
    en: [
      'Expecting AC voltage from a Faraday disc: Because conductor elements cut magnetic flux lines in a constant directional orientation without reversing poles, the generated voltage is 100% unidirectional DC.',
      'Assuming that rotating a symmetric magnet induces voltage in a stationary disc: Spinning an axisymmetric magnet produces zero change in magnetic field (∂B/∂t = 0), yielding zero voltage in stationary conductors.',
      'Believing rotating both magnet and disc together produces zero voltage: Co-rotation yields full open-circuit voltage because conduction electrons in the spinning disc move relative to the stationary external voltmeter loop in the lab frame.',
      'Using conventional carbon brushes for pulse discharge: Solid carbon brushes possess too much contact resistance and mechanical friction to survive megampere discharge pulses without catastrophic contact destruction.'
    ],
    hi: [
      'फैराडे डिस्क से एसी वोल्टेज की उम्मीद करना: चालक कभी भी अपनी दिशा नहीं बदलते, इसलिए आउटपुट शत-प्रतिशत शुद्ध डीसी होता है।',
      'यह मानना कि केवल चुंबक घुमाने से स्थिर डिस्क में वोल्टेज बनेगा: सममित चुंबक को घुमाने पर चुंबकीय क्षेत्र स्थिर रहता है (∂B/∂t = 0), इसलिए कोई ईएमएफ नहीं बनता।',
      'सोचना कि चुंबक और डिस्क दोनों को एक साथ घुमाने पर वोल्टेज शून्य हो जाएगा: दोनों को साथ घुमाने पर भी पूरा वोल्टेज मिलता है क्योंकि बाहरी मीटर के तार स्थिर होते हैं।',
      'मेगा-एम्पीयर डिस्चार्ज के लिए कार्बन ब्रश का उपयोग: कार्बन ब्रशों का संपर्क प्रतिरोध अधिक होता है और वे लाखों एम्पीयर धारा से तुरंत जलकर नष्ट हो जाते हैं।'
    ],
    bn: [
      'ফ্যারাডে ডিস্ক থেকে এসি ভোল্টেজ প্রত্যাশা করা: পরিবাহী উপাদানগুলো দিক পরিবর্তন না করে অবিচ্ছিন্নভাবে বলরেখা কাটায় এর আউটপুট শতভাগ বিশুদ্ধ ডিসি।',
      'কেবলমাত্র প্রতিসম চুম্বক ঘোরালে স্থির চাকতিতে ভোল্টেজ সৃষ্টি হবে ভাবা: অক্ষীয় প্রতিসম চুম্বক ঘোরালে স্থানিক ফ্লাক্সের কোনো পরিবর্তন হয় না (∂B/∂t = ০), ফলে আবিষ্ট ভোল্টেজ শূন্য।',
      'চুম্বক ও চাকতি একসাথে ঘুরলে ভোল্টেজ শূন্য হবে মনে করা: উভয়কে একসাথে ঘোরালেও পুরো ভোল্টেজ পাওয়া যায়, কারণ বহিস্থ পরিমাপক তার ল্যাবরেটরি কাঠামোতে স্থির থাকে।',
      'মেগা-অ্যাম্পিয়ার পালস প্রবাহে সাধারণ কার্বন ব্রাশ ব্যবহার করা: সাধারণ কঠিন ব্রাশের উচ্চ রোধের কারণে মেগা-অ্যাম্পিয়ার কারেন্টে তা তৎক্ষণাৎ পুড়ে ছাই হয়ে যায়।'
    ]
  },
  keyTakeaways: {
    en: [
      'The homopolar (Faraday disc) generator induces radial motional EMF across a spinning conductive disc in a uniform axial magnetic field.',
      'The open-circuit output voltage is E = ½ · B · ω · (R_o² - R_i²), providing inherently pure, ripple-free DC without any commutator or rectifiers.',
      'Extremely low internal bulk resistance allows generation of massive currents ranging from tens of kiloamperes to over a megampere.',
      'The Faraday paradox proves that magnetic fields do not physically rotate with material magnets; induced EMF arises from electron motion through the field relative to the laboratory frame.',
      'Modern applications center on high-energy pulsed power, electromagnetic projectile launchers (railguns), Tokamak fusion coils, and pulse resistance welding.'
    ],
    hi: [
      'होमोपोलर (फैराडे डिस्क) जनरेटर एकसमान चुंबकीय क्षेत्र में घूमती धातु डिस्क में त्रिज्यीय गतिज ईएमएफ उत्पन्न करता है।',
      'ओपन-सर्किट वोल्टेज E = ½ · B · ω · (R_o² - R_i²) होता है, जो बिना कम्यूटेटर के शुद्ध रिपल-रहित डीसी प्रदान करता है।',
      'अत्यंत कम आंतरिक प्रतिरोध के कारण यह जनरेटर दसियों किलो-एम्पीयर से लेकर मेगा-एम्पीयर तक की भारी धाराएं प्रदान कर सकता है।',
      'फैराडे विरोधाभास साबित करता है कि चुंबकीय क्षेत्र चुंबक के साथ भौतिक रूप से नहीं घूमता; वोल्टेज लोरेंत्ज़ बल द्वारा उत्पन्न होता है।',
      'आधुनिक अनुप्रयोगों में विद्युत-चुंबकीय रेलगन, परमाणु संलयन अनुसंधान टोकामक और भारी प्रतिरोध वेल्डिंग शामिल हैं।'
    ],
    bn: [
      'হোমোপোলার (ফ্যারাডে ডিস্ক) জেনারেটর সুষম অক্ষীয় চৌম্বক ক্ষেত্রে ঘূর্ণায়মান ধাতব চাকতিতে রেডিয়াল গতিজ ইএমএফ আবিষ্ট করে।',
      'ওপেন-সার্কিট আউটপুট ভোল্টেজ E = ½ · B · ω · (R_o² - R_i²), যা কোনো কমিউটেটর ছাড়াই শতভাগ রিপলমুক্ত ডিসি দেয়।',
      'চরম ক্ষুদ্র অভ্যন্তরীণ রোধের কারণে এটি কয়েক কিলো-অ্যাম্পিয়ার থেকে শুরু করে ১ মেগা-অ্যাম্পিয়ারের বেশি বিদ্যুৎ সরবরাহ করতে সক্ষম।',
      'ফ্যারাডে প্যারাডক্স প্রমাণ করে যে চৌম্বক ক্ষেত্র পদার্থের সাথে ঘোরে না; ল্যাবরেটরি কাঠামোর সাপেক্ষে ইলেকট্রনের গতির ফলেই ভোল্টেজ উৎপন্ন হয়।',
      'আধুনিককালে এটি ইলেক্ট্রোম্যাগনেটিক রেলগান, টোকামাক ফিউশন রিঅ্যাক্টর এবং উচ্চ-ক্ষমতার রেজিস্ট্যান্স ওয়েল্ডিংয়ে অপরিহার্য।'
    ]
  },
  mcqs: [
    {
      id: "q-homopolar-1",
      question: {
        en: "A copper disc of radius 0.4 m rotates at 1,800 RPM in a uniform perpendicular magnetic field of 1.5 T. What is the induced radial EMF?",
        hi: "0.4 m त्रिज्या की तांबे की डिस्क 1.5 T के समान चुंबकीय क्षेत्र में 1,800 RPM पर घूमती है। प्रेरित त्रिज्यीय ईएमएफ क्या होगा?",
        bn: "০.৪ মিটার ব্যাসার্ধের একটি তামার চাকতি ১.৫ টেসলা সুষম চৌম্বক ক্ষেত্রে ১,৮০০ RPM গতিতে ঘুরলে আবিষ্ট রেডিয়াল ইएमএফ কত হবে?"
      },
      options: [
        { id: "opt-1", text: { en: "11.3 V", hi: "11.3 V", bn: "১১.৩ V" } },
        { id: "opt-2", text: { en: "22.6 V", hi: "22.6 V", bn: "২২.৬ V" } },
        { id: "opt-3", text: { en: "45.2 V", hi: "45.2 V", bn: "৪৫.২ V" } },
        { id: "opt-4", text: { en: "113.1 V", hi: "113.1 V", bn: "১১৩.১ V" } }
      ],
      correctOptionId: "opt-2",
      explanation: {
        en: "ω = 2π × (1800 / 60) = 60π ≈ 188.5 rad/s. E = ½ · B · ω · R² = 0.5 × 1.5 × 188.5 × (0.4)² = 0.75 × 188.5 × 0.16 = 22.62 V.",
        hi: "ω = 60π ≈ 188.5 rad/s। E = ½ · B · ω · R² = 0.5 × 1.5 × 188.5 × 0.16 ≈ 22.6 V।",
        bn: "ω = ১৮৮.৫ rad/s। E = ½ · B · ω · R² = ০.৫ × ১.৫ × ১৮৮.৫ × ০.১৬ ≈ ২২.৬ ভোল্ট।"
      }
    },
    {
      id: "q-homopolar-2",
      question: {
        en: "Which unique feature distinguishes a homopolar generator from conventional DC generators?",
        hi: "कौन सी अनूठी विशेषता होमोपोलर जनरेटर को पारंपरिक डीसी जनरेटर से अलग करती है?",
        bn: "কোন বিশেষ বৈশিষ্ট্যটি হোমোপোলার জেনারেটরকে প্রচলিত ডিসি জেনারেটর থেকে সম্পূর্ণ পৃথক করে?"
      },
      options: [
        { id: "opt-1", text: { en: "It produces natural, ripple-free DC without any commutator or semiconductor diodes", hi: "यह बिना किसी कम्यूटेटर या डायोड के स्वाभाविक रिपल-रहित डीसी बनाता है", bn: "এটি কোনো প্রকার কমিউটেটর বা ডায়োড ছাড়াই প্রাকৃতিকভাবে রিপলহীন ডিসি তৈরি করে" } },
        { id: "opt-2", text: { en: "It generates thousands of volts from a single turn", hi: "यह एक ही फेरे से हजारों वोल्ट पैदा करता है", bn: "এটি একক পাকে হাজার হাজার ভোল্ট তৈরি করে" } },
        { id: "opt-3", text: { en: "It requires zero mechanical input torque", hi: "इसे शून्य यांत्रिक टॉर्क की आवश्यकता होती है", bn: "এতে কোনো যান্ত্রিক ইনপুট টর্কের প্রয়োজন হয় না" } },
        { id: "opt-4", text: { en: "It operates only in cryogenic liquid helium", hi: "यह केवल क्रायोजेनिक तरल हीलियम में कार्य करता है", bn: "এটি কেবল তরল হিলিয়ামে কাজ করে" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Because the conductors cut a unidirectional magnetic field continuously in the same orientation, it produces pure DC directly from rotation without needing commutators.",
        hi: "चालक लगातार एक ही दिशा में चुंबकीय क्षेत्र को काटते हैं, इसलिए यह बिना कम्यूटेटर के सीधे शुद्ध डीसी उत्पन्न करता है।",
        bn: "কন্ডাক্টরগুলো অবিচ্ছিন্নভাবে একই দিকবিন্যাসে চৌম্বক বলরেখা ছেদ করায় কমিউটেটর ছাড়াই সরাসরি বিশুদ্ধ ডিসি উৎপন্ন হয়।"
      }
    },
    {
      id: "mcq-ch10-l14-03",
      question: {
        en: "A Faraday disc generator of radius R rotates at angular velocity ω in a uniform magnetic field B parallel to its rotation axis. What is the induced radial EMF between the center axle and outer rim?",
        hi: "घूर्णन अक्ष के समानांतर चुंबकीय क्षेत्र B में ω कोणीय वेग से घूमने वाली R त्रिज्या की फैराडे डिस्क के केंद्र और बाहरी किनारे के बीच कितना EMF प्रेरित होता है?",
        bn: "ঘূর্ণন অক্ষের সমান্তরাল সুষম চৌম্বক ক্ষেত্র B তে ω কৌণিক বেগে ঘূর্ণায়মান R ব্যাসার্ধের ফ্যারাডে ডিস্কের কেন্দ্র ও পরিধির মধ্যে আবিষ্ট রেডিয়াল EMF কত?"
      },
      options: [
        { id: "opt-1", text: { en: "E = ½ · B · ω · R²", hi: "E = ½ · B · ω · R²", bn: "E = ½ · B · ω · R²" } },
        { id: "opt-2", text: { en: "E = B · ω · R", hi: "E = B · ω · R", bn: "E = B · ω · R" } },
        { id: "opt-3", text: { en: "E = 2 · B · ω · R²", hi: "E = 2 · B · ω · R²", bn: "E = ২ · B · ω · R²" } },
        { id: "opt-4", text: { en: "E = π · B · ω · R²", hi: "E = π · B · ω · R²", bn: "E = π · B · ω · R²" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Integrating motional EMF along the radius: E = ∫₀ᴿ (v × B) dr = ∫₀ᴿ (ω r B) dr = ½ B ω R².",
        hi: "त्रिज्या के अनुदिश समाकलन करने पर: E = ∫₀ᴿ ω r B dr = ½ B ω R²।",
        bn: "ব্যাসার্ধ বরাবর সমাকলন করে পাওয়া যায়: E = ∫₀ᴿ ω r B dr = ½ B ω R²।"
      }
    },
    {
      id: "mcq-ch10-l14-04",
      question: {
        en: "Why is a homopolar generator often called an \"acyclic generator\"?",
        hi: "होमोपोलर जनरेटर को अक्सर \"एसाइक्लिक जनरेटर\" (अचक्रीय जनरेटर) क्यों कहा जाता है?",
        bn: "হোমোপোলার জেনারেটরকে প্রায়শই \"অ্যাসাইক্লিক জেনারেটর\" বলা হয় কেন?"
      },
      options: [
        { id: "opt-1", text: { en: "Because it generates pure continuous DC directly without any cyclic AC variations or periodic wave reversals", hi: "क्योंकि यह बिना किसी चक्रीय प्रत्यावर्ती बदलाव या तरंग के सीधे शुद्ध निरंतर डीसी बनाता है", bn: "কারণ এটি কোনো পর্যায়বৃত্ত এসি তরঙ্গের পরিবর্তন বা দিকবদল ছাড়াই সরাসরি বিশুদ্ধ নিরবচ্ছিন্ন ডিসি তৈরি করে" } },
        { id: "opt-2", text: { en: "Because it cannot be driven by bicycle pedals", hi: "क्योंकि इसे साइकिल के पैडल से नहीं चलाया जा सकता", bn: "কারণ এটি সাইকেলের প্যাডেল দিয়ে চালানো যায় না" } },
        { id: "opt-3", text: { en: "Because it has no circular parts", hi: "क्योंकि इसमें कोई गोल भाग नहीं होता", bn: "কারণ এতে কোনো বৃত্তাকার অংশ থাকে না" } },
        { id: "opt-4", text: { en: "Because it operates only once in a lifetime", hi: "क्योंकि यह जीवन में केवल एक बार चलता है", bn: "কারণ এটি জীবনে কেবল একবার কাজ করতে পারে" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Unlike heteropolar machines that alternate between North and South poles generating cyclic AC, homopolar machines cut flux of single polarity constantly, yielding true acyclic (non-cyclic) DC.",
        hi: "पारंपरिक मशीनों में उत्तर-दक्षिण ध्रुव बदलने से एसी बनता है, जबकि इसमें सदैव एक ही ध्रुवता का फ्लक्स कटने से बिना किसी चक्र के सीधी डीसी मिलती है।",
        bn: "গতানুগতিক মেশিনের মতো উত্তর-দক্ষিণ মেরুর পরিবর্তন না হয়ে এতে সর্বদা একই মেরুর ফ্লাক্স কাটা পড়ে, ফলে কোনো সাইকেল ছাড়া বিশুদ্ধ ডিসি পাওয়া যায়।"
      }
    },
    {
      id: "mcq-ch10-l14-05",
      question: {
        en: "What typical electrical characteristics define the output of industrial homopolar generators?",
        hi: "औद्योगिक होमोपोलर जनरेटर के आउटपुट की विशिष्ट विद्युत विशेषताएं क्या हैं?",
        bn: "শিল্পে ব্যবহৃত হোমোপোলার জেনারেটরের আউটপুটের বৈশিষ্ট্য কেমন হয়?"
      },
      options: [
        { id: "opt-1", text: { en: "Very low voltage (a few volts) combined with astronomical direct currents (tens of thousands of amperes)", hi: "बहुत कम वोल्टेज (कुछ वोल्ट) के साथ अत्यधिक विशाल धारा (हजारों एम्पियर)", bn: "খুব কম ভোল্টেজ (কয়েক ভোল্ট) কিন্তু অবিশ্বাস্য উচ্চমাত্রার ডিসি কারেন্ট (হাজার হাজার অ্যাম্পিয়ার)" } },
        { id: "opt-2", text: { en: "Megavolt voltage with microampere currents", hi: "मेगावोल्ट वोल्टेज और माइक्रोएम्पियर धारा", bn: "মেগাভোল্ট উচ্চ ভোল্টেজ ও মাইক্রোঅ্যাম্পিয়ার স্বল্প কারেন্ট" } },
        { id: "opt-3", text: { en: "High-frequency AC at 400 Hz", hi: "400 Hz पर उच्च-आवृत्ति एसी", bn: "৪০০ Hz কম্পাঙ্কের উচ্চমাত্রার এসি" } },
        { id: "opt-4", text: { en: "Three-phase balanced power", hi: "तीन-फेज संतुलित बिजली", bn: "থ্রি-ফেজ ভারসাম্যপূর্ণ বিদ্যুৎ" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Because a single disc acts as a single turn (low EMF, typically 1 to 50 V) with negligible internal solid copper resistance, it can deliver immense continuous currents (50,000 to 250,000 A) for electroplating and railguns.",
        hi: "एकल डिस्क केवल एक फेरे की तरह कार्य करती है (कम वोल्टेज), परंतु इसका आंतरिक प्रतिरोध नगण्य होने से यह लाखों एम्पियर धारा दे सकती है।",
        bn: "একটি ডিস্ক মাত্র একটি পাক হিসেবে কাজ করায় ভোল্টেজ কম থাকে, তবে অভ্যন্তরীণ রোধ নগণ্য হওয়ায় এটি ৫০,০০০ থেকে ২,৫০,০০০ অ্যাম্পিয়ার পর্যন্ত তীব্র কারেন্ট দিতে পারে।"
      }
    },
    {
      id: "mcq-ch10-l14-06",
      question: {
        en: "What technological challenge historically limited the efficiency of high-current homopolar generators?",
        hi: "ऐतिहासिक रूप से उच्च-धारा होमोपोलर जनरेटर की दक्षता को किस तकनीकी चुनौती ने सीमित किया?",
        bn: "ঐতিহাসিকভাবে উচ্চ-কারেন্টের হোমোপোলার জেনারেটরের কর্মদক্ষতাকে কোন প্রযুক্তিগত বাধা সীমিত করেছিল?"
      },
      options: [
        { id: "opt-1", text: { en: "High contact resistance, friction wear, and voltage drop across sliding brushes carrying massive currents on the outer disc rim", hi: "डिस्क के बाहरी किनारे पर भारी धारा ले जाने वाले घिसने वाले ब्रशों में उच्च संपर्क प्रतिरोध और घर्षण", bn: "ডিস্কের বাইরের প্রান্তে বিপুল কারেন্ট পরিচালনাকারী স্লাইডিং ব্রাশের উচ্চ রোধ, ঘর্ষণ ক্ষয় এবং ভোল্টেজ ড্রপ" } },
        { id: "opt-2", text: { en: "Lamination delamination inside the copper disc", hi: "तांबे की डिस्क के अंदर लैमिनेशन का उखड़ना", bn: "তামার ডিস্কের ভেতরের ল্যামিনেশন খুলে যাওয়া" } },
        { id: "opt-3", text: { en: "Inability of permanent magnets to attract iron", hi: "स्थायी चुंबकों का लोहे को न खींच पाना", bn: "স্থায়ী চুম্বক লোহার আকর্ষণ ক্ষমতা হারানো" } },
        { id: "opt-4", text: { en: "Dielectric breakdown of the air gap at 5 volts", hi: "5 वोल्ट पर हवा का ब्रेकडाउन होना", bn: "৫ ভোল্টেই বাতাসের ডাইইলেক্ট্রিক ব্রেকডাউন হওয়া" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Extracting 100,000 A across sliding solid carbon brushes incurs enormous I²R contact losses and severe brush wear. Modern high-power units resolved this using liquid metal sliding contacts (such as liquid sodium-potassium NaK or liquid gallium).",
        hi: "घूमते किनारे पर भारी धारा निकालने के लिए पारंपरिक ब्रश घिस जाते हैं और भारी वोल्टेज ड्रॉप होता है; आधुनिक मशीनों में इसके लिए तरल धातु संपर्क का उपयोग किया जाता है।",
        bn: "ঘূর্ণনশীল প্রান্ত থেকে হাজার হাজার অ্যাম্পিয়ার কারেন্ট তুলতে সাধারণ ব্রাশ দ্রুত ক্ষয় হয় ও প্রচুর শক্তি অপচয় করে; আধুনিক ব্যবস্থায় তরল ধাতু কন্টাক্ট ব্যবহৃত হয়।"
      }
    },
    {
      id: "mcq-ch10-l14-07",
      question: {
        en: "In Faraday’s paradox, if a cylindrical permanent magnet and a coaxial conductive copper disc are mechanically locked together and rotated simultaneously about their common axis, what happens?",
        hi: "फैराडे के विरोधाभास में, यदि एक बेलनाकार चुंबक और तांबे की डिस्क को आपस में जोड़कर एक साथ घुमाया जाए, तो क्या होता है?",
        bn: "ফ্যারাডের প্যারাডক্সে, যদি একটি সিলিন্ড্রিক্যাল স্থায়ী চুম্বক এবং তামার ডিস্ককে একত্রে আটকে একই অক্ষের চারদিকে একসাথে ঘোরানো হয়, তবে কী ঘটবে?"
      },
      options: [
        { id: "opt-1", text: { en: "A motional EMF is still induced across the disc radii, measurable by stationary brushes connected to an external meter", hi: "डिस्क के किनारों पर अभी भी गतिज EMF प्रेरित होता है, जिसे स्थिर ब्रशों द्वारा मापा जा सकता है", bn: "ডিস্কের ব্যাসার্ধ জুড়ে এখনও গতিজ EMF আবিষ্ট হয়, যা স্থির ব্রাশের সাহায্যে বহিস্থ মিটারে মাপা যায়" } },
        { id: "opt-2", text: { en: "Zero EMF is induced because there is no relative motion between disc and magnet", hi: "शून्य EMF प्रेरित होता है क्योंकि डिस्क और चुंबक के बीच कोई सापेक्ष गति नहीं है", bn: "কোনো EMF উৎপন্ন হয় না কারণ ডিস্ক ও চুম্বকের মধ্যে কোনো আপেক্ষিক গতি নেই" } },
        { id: "opt-3", text: { en: "The magnet loses its magnetic field permanently", hi: "चुंबक का चुंबकत्व हमेशा के लिए समाप्त हो जाता है", bn: "চুম্বক তার চুম্বকত্ব চিরতরে হারিয়ে ফেলে" } },
        { id: "opt-4", text: { en: "The disc explodes due to electrostatic pressure", hi: "स्थिरवैद्युत दाब से डिस्क फट जाती है", bn: "স্থিরবৈদ্যুতিক চাপে ডিস্কটি বিস্ফোরিত হয়" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "In relativistic electrodynamics, the magnetic field lines do not rotate with the magnet. The rotating disc conductors move across the stationary spatial field, developing radial Lorentz force and EMF.",
        hi: "सापेक्षिकता के अनुसार चुंबकीय क्षेत्र चुंबक के साथ नहीं घूमता; अतः घूमता हुआ चालक क्षेत्र को काटता है और EMF उत्पन्न होता है।",
        bn: "তত্ত্বানুযায়ী চৌম্বক ক্ষেত্র চুম্বকের সাথে ঘোরে না; ফলে ঘূর্ণায়মান পরিবাহী স্থির ক্ষেত্রকে ছেদ করে পূর্ণ EMF তৈরি করে।"
      }
    },
    {
      id: "mcq-ch10-l14-08",
      question: {
        en: "A copper disc of diameter 0.6 m spins at 3,000 RPM in a uniform axial field of 2.0 T. What is the open-circuit voltage generated between the central shaft and the edge?",
        hi: "0.6 m व्यास की एक तांबे की डिस्क 2.0 T के अक्षीय चुंबकीय क्षेत्र में 3,000 RPM पर घूमती है। केंद्र और किनारे के बीच उत्पन्न वोल्टेज क्या है?",
        bn: "০.৬ মিটার ব্যাসের একটি তামার ডিস্ক ২.০ টেসলা চৌম্বক ক্ষেত্রে ৩,০০০ RPM গতিতে ঘুরছে। কেন্দ্র ও পরিধির মধ্যে উৎপন্ন ভোল্টেজ কত?"
      },
      options: [
        { id: "opt-1", text: { en: "28.27 V", hi: "28.27 V", bn: "২৮.২৭ V" } },
        { id: "opt-2", text: { en: "56.55 V", hi: "56.55 V", bn: "৫৬.৫৫ V" } },
        { id: "opt-3", text: { en: "14.14 V", hi: "14.14 V", bn: "১৪.১৪ V" } },
        { id: "opt-4", text: { en: "113.1 V", hi: "113.1 V", bn: "১১৩.১ V" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Radius R = 0.6 / 2 = 0.3 m. Angular speed ω = 2π × (3000 / 60) = 100π ≈ 314.16 rad/s. E = ½ · B · ω · R² = 0.5 × 2.0 × (100π) × (0.3)² = 100π × 0.09 = 9π ≈ 28.27 V.",
        hi: "R = 0.3 m, ω = 100π rad/s। E = ½ · B · ω · R² = 0.5 × 2 × 314.16 × 0.09 = 28.27 V।",
        bn: "R = ০.৩ মি, ω = ১০০π rad/s। E = ½ · B · ω · R² = ০.৫ × ২ × ৩১৪.১৬ × ০.০৯ = ২৮.২৭ V।"
      }
    }
  ],
  mcqQuestions: [
    {
      id: "q-homopolar-1",
      question: {
        en: "A copper disc of radius 0.4 m rotates at 1,800 RPM in a uniform perpendicular magnetic field of 1.5 T. What is the induced radial EMF?",
        hi: "0.4 m त्रिज्या की तांबे की डिस्क 1.5 T के समान चुंबकीय क्षेत्र में 1,800 RPM पर घूमती है। प्रेरित त्रिज्यीय ईएमएफ क्या होगा?",
        bn: "০.৪ মিটার ব্যাসার্ধের একটি তামার চাকতি ১.৫ টেসলা সুষম চৌম্বক ক্ষেত্রে ১,৮০০ RPM গতিতে ঘুরলে আবিষ্ট রেডিয়াল ইएमএফ কত হবে?"
      },
      options: [
        { id: "opt-1", text: { en: "11.3 V", hi: "11.3 V", bn: "১১.৩ V" } },
        { id: "opt-2", text: { en: "22.6 V", hi: "22.6 V", bn: "২২.৬ V" } },
        { id: "opt-3", text: { en: "45.2 V", hi: "45.2 V", bn: "৪৫.২ V" } },
        { id: "opt-4", text: { en: "113.1 V", hi: "113.1 V", bn: "১১৩.১ V" } }
      ],
      correctOptionId: "opt-2",
      explanation: {
        en: "ω = 2π × (1800 / 60) = 60π ≈ 188.5 rad/s. E = ½ · B · ω · R² = 0.5 × 1.5 × 188.5 × (0.4)² = 0.75 × 188.5 × 0.16 = 22.62 V.",
        hi: "ω = 60π ≈ 188.5 rad/s। E = ½ · B · ω · R² = 0.5 × 1.5 × 188.5 × 0.16 ≈ 22.6 V।",
        bn: "ω = ১৮৮.৫ rad/s। E = ½ · B · ω · R² = ০.৫ × ১.৫ × ১৮৮.৫ × ০.১৬ ≈ ২২.৬ ভোল্ট।"
      }
    },
    {
      id: "q-homopolar-2",
      question: {
        en: "Which unique feature distinguishes a homopolar generator from conventional DC generators?",
        hi: "कौन सी अनूठी विशेषता होमोपोलर जनरेटर को पारंपरिक डीसी जनरेटर से अलग करती है?",
        bn: "কোন বিশেষ বৈশিষ্ট্যটি হোমোপোলার জেনারেটরকে প্রচলিত ডিসি জেনারেটর থেকে সম্পূর্ণ পৃথক করে?"
      },
      options: [
        { id: "opt-1", text: { en: "It produces natural, ripple-free DC without any commutator or semiconductor diodes", hi: "यह बिना किसी कम्यूटेटर या डायोड के स्वाभाविक रिपल-रहित डीसी बनाता है", bn: "এটি কোনো প্রকার কমিউটেটর বা ডায়োড ছাড়াই প্রাকৃতিকভাবে রিপলহীন ডিসি তৈরি করে" } },
        { id: "opt-2", text: { en: "It generates thousands of volts from a single turn", hi: "यह एक ही फेरे से हजारों वोल्ट पैदा करता है", bn: "এটি একক পাকে হাজার হাজার ভোল্ট তৈরি করে" } },
        { id: "opt-3", text: { en: "It requires zero mechanical input torque", hi: "इसे शून्य यांत्रिक टॉर्क की आवश्यकता होती है", bn: "এতে কোনো যান্ত্রিক ইনপুট টর্কের প্রয়োজন হয় না" } },
        { id: "opt-4", text: { en: "It operates only in cryogenic liquid helium", hi: "यह केवल क्रायोजेनिक तरल हीलियम में कार्य करता है", bn: "এটি কেবল তরল হিলিয়ামে কাজ করে" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Because the conductors cut a unidirectional magnetic field continuously in the same orientation, it produces pure DC directly from rotation without needing commutators.",
        hi: "चालक लगातार एक ही दिशा में चुंबकीय क्षेत्र को काटते हैं, इसलिए यह बिना कम्यूटेटर के सीधे शुद्ध डीसी उत्पन्न करता है।",
        bn: "কন্ডাক্টরগুলো অবিচ্ছিন্নভাবে একই দিকবিন্যাসে চৌম্বক বলরেখা ছেদ করায় কমিউটেটর ছাড়াই সরাসরি বিশুদ্ধ ডিসি উৎপন্ন হয়।"
      }
    },
    {
      id: "mcq-ch10-l14-03",
      question: {
        en: "A Faraday disc generator of radius R rotates at angular velocity ω in a uniform magnetic field B parallel to its rotation axis. What is the induced radial EMF between the center axle and outer rim?",
        hi: "घूर्णन अक्ष के समानांतर चुंबकीय क्षेत्र B में ω कोणीय वेग से घूमने वाली R त्रिज्या की फैराडे डिस्क के केंद्र और बाहरी किनारे के बीच कितना EMF प्रेरित होता है?",
        bn: "ঘূর্ণন অক্ষের সমান্তরাল সুষম চৌম্বক ক্ষেত্র B তে ω কৌণিক বেগে ঘূর্ণায়মান R ব্যাসার্ধের ফ্যারাডে ডিস্কের কেন্দ্র ও পরিধির মধ্যে আবিষ্ট রেডিয়াল EMF কত?"
      },
      options: [
        { id: "opt-1", text: { en: "E = ½ · B · ω · R²", hi: "E = ½ · B · ω · R²", bn: "E = ½ · B · ω · R²" } },
        { id: "opt-2", text: { en: "E = B · ω · R", hi: "E = B · ω · R", bn: "E = B · ω · R" } },
        { id: "opt-3", text: { en: "E = 2 · B · ω · R²", hi: "E = 2 · B · ω · R²", bn: "E = ২ · B · ω · R²" } },
        { id: "opt-4", text: { en: "E = π · B · ω · R²", hi: "E = π · B · ω · R²", bn: "E = π · B · ω · R²" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Integrating motional EMF along the radius: E = ∫₀ᴿ (v × B) dr = ∫₀ᴿ (ω r B) dr = ½ B ω R².",
        hi: "त्रिज्या के अनुदिश समाकलन करने पर: E = ∫₀ᴿ ω r B dr = ½ B ω R²।",
        bn: "ব্যাসার্ধ বরাবর সমাকলন করে পাওয়া যায়: E = ∫₀ᴿ ω r B dr = ½ B ω R²।"
      }
    },
    {
      id: "mcq-ch10-l14-04",
      question: {
        en: "Why is a homopolar generator often called an \"acyclic generator\"?",
        hi: "होमोपोलर जनरेटर को अक्सर \"एसाइक्लिक जनरेटर\" (अचक्रीय जनरेटर) क्यों कहा जाता है?",
        bn: "হোমোপোলার জেনারেটরকে প্রায়শই \"অ্যাসাইক্লিক জেনারেটর\" বলা হয় কেন?"
      },
      options: [
        { id: "opt-1", text: { en: "Because it generates pure continuous DC directly without any cyclic AC variations or periodic wave reversals", hi: "क्योंकि यह बिना किसी चक्रीय प्रत्यावर्ती बदलाव या तरंग के सीधे शुद्ध निरंतर डीसी बनाता है", bn: "কারণ এটি কোনো পর্যায়বৃত্ত এসি তরঙ্গের পরিবর্তন বা দিকবদল ছাড়াই সরাসরি বিশুদ্ধ নিরবচ্ছিন্ন ডিসি তৈরি করে" } },
        { id: "opt-2", text: { en: "Because it cannot be driven by bicycle pedals", hi: "क्योंकि इसे साइकिल के पैडल से नहीं चलाया जा सकता", bn: "কারণ এটি সাইকেলের প্যাডেল দিয়ে চালানো যায় না" } },
        { id: "opt-3", text: { en: "Because it has no circular parts", hi: "क्योंकि इसमें कोई गोल भाग नहीं होता", bn: "কারণ এতে কোনো বৃত্তাকার অংশ থাকে না" } },
        { id: "opt-4", text: { en: "Because it operates only once in a lifetime", hi: "क्योंकि यह जीवन में केवल एक बार चलता है", bn: "কারণ এটি জীবনে কেবল একবার কাজ করতে পারে" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Unlike heteropolar machines that alternate between North and South poles generating cyclic AC, homopolar machines cut flux of single polarity constantly, yielding true acyclic (non-cyclic) DC.",
        hi: "पारंपरिक मशीनों में उत्तर-दक्षिण ध्रुव बदलने से एसी बनता है, जबकि इसमें सदैव एक ही ध्रुवता का फ्लक्स कटने से बिना किसी चक्र के सीधी डीसी मिलती है।",
        bn: "গতানুগতিক মেশিনের মতো উত্তর-দক্ষিণ মেরুর পরিবর্তন না হয়ে এতে সর্বদা একই মেরুর ফ্লাক্স কাটা পড়ে, ফলে কোনো সাইকেল ছাড়া বিশুদ্ধ ডিসি পাওয়া যায়।"
      }
    },
    {
      id: "mcq-ch10-l14-05",
      question: {
        en: "What typical electrical characteristics define the output of industrial homopolar generators?",
        hi: "औद्योगिक होमोपोलर जनरेटर के आउटपुट की विशिष्ट विद्युत विशेषताएं क्या हैं?",
        bn: "শিল্পে ব্যবহৃত হোমোপোলার জেনারেটরের আউটপুটের বৈশিষ্ট্য কেমন হয়?"
      },
      options: [
        { id: "opt-1", text: { en: "Very low voltage (a few volts) combined with astronomical direct currents (tens of thousands of amperes)", hi: "बहुत कम वोल्टेज (कुछ वोल्ट) के साथ अत्यधिक विशाल धारा (हजारों एम्पियर)", bn: "খুব কম ভোল্টেজ (কয়েক ভোল্ট) কিন্তু অবিশ্বাস্য উচ্চমাত্রার ডিসি কারেন্ট (হাজার হাজার অ্যাম্পিয়ার)" } },
        { id: "opt-2", text: { en: "Megavolt voltage with microampere currents", hi: "मेगावोल्ट वोल्टेज और माइक्रोएम्पियर धारा", bn: "মেগাভোল্ট উচ্চ ভোল্টেজ ও মাইক্রোঅ্যাম্পিয়ার স্বল্প কারেন্ট" } },
        { id: "opt-3", text: { en: "High-frequency AC at 400 Hz", hi: "400 Hz पर उच्च-आवृत्ति एसी", bn: "৪০০ Hz কম্পাঙ্কের উচ্চমাত্রার এসি" } },
        { id: "opt-4", text: { en: "Three-phase balanced power", hi: "तीन-फेज संतुलित बिजली", bn: "থ্রি-ফেজ ভারসাম্যপূর্ণ বিদ্যুৎ" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Because a single disc acts as a single turn (low EMF, typically 1 to 50 V) with negligible internal solid copper resistance, it can deliver immense continuous currents (50,000 to 250,000 A) for electroplating and railguns.",
        hi: "एकल डिस्क केवल एक फेरे की तरह कार्य करती है (कम वोल्टेज), परंतु इसका आंतरिक प्रतिरोध नगण्य होने से यह लाखों एम्पियर धारा दे सकती है।",
        bn: "একটি ডিস্ক মাত্র একটি পাক হিসেবে কাজ করায় ভোল্টেজ কম থাকে, তবে অভ্যন্তরীণ রোধ নগণ্য হওয়ায় এটি ৫০,০০০ থেকে ২,৫০,০০০ অ্যাম্পিয়ার পর্যন্ত তীব্র কারেন্ট দিতে পারে।"
      }
    },
    {
      id: "mcq-ch10-l14-06",
      question: {
        en: "What technological challenge historically limited the efficiency of high-current homopolar generators?",
        hi: "ऐतिहासिक रूप से उच्च-धारा होमोपोलर जनरेटर की दक्षता को किस तकनीकी चुनौती ने सीमित किया?",
        bn: "ঐতিহাসিকভাবে উচ্চ-কারেন্টের হোমোপোলার জেনারেটরের কর্মদক্ষতাকে কোন প্রযুক্তিগত বাধা সীমিত করেছিল?"
      },
      options: [
        { id: "opt-1", text: { en: "High contact resistance, friction wear, and voltage drop across sliding brushes carrying massive currents on the outer disc rim", hi: "डिस्क के बाहरी किनारे पर भारी धारा ले जाने वाले घिसने वाले ब्रशों में उच्च संपर्क प्रतिरोध और घर्षण", bn: "ডিস্কের বাইরের প্রান্তে বিপুল কারেন্ট পরিচালনাকারী স্লাইডিং ব্রাশের উচ্চ রোধ, ঘর্ষণ ক্ষয় এবং ভোল্টেজ ড্রপ" } },
        { id: "opt-2", text: { en: "Lamination delamination inside the copper disc", hi: "तांबे की डिस्क के अंदर लैमिनेशन का उखड़ना", bn: "তামার ডিস্কের ভেতরের ল্যামিনেশন খুলে যাওয়া" } },
        { id: "opt-3", text: { en: "Inability of permanent magnets to attract iron", hi: "स्थायी चुंबकों का लोहे को न खींच पाना", bn: "স্থায়ী চুম্বক লোহার আকর্ষণ ক্ষমতা হারানো" } },
        { id: "opt-4", text: { en: "Dielectric breakdown of the air gap at 5 volts", hi: "5 वोल्ट पर हवा का ब्रेकडाउन होना", bn: "৫ ভোল্টেই বাতাসের ডাইইলেক্ট্রিক ব্রেকডাউন হওয়া" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Extracting 100,000 A across sliding solid carbon brushes incurs enormous I²R contact losses and severe brush wear. Modern high-power units resolved this using liquid metal sliding contacts (such as liquid sodium-potassium NaK or liquid gallium).",
        hi: "घूमते किनारे पर भारी धारा निकालने के लिए पारंपरिक ब्रश घिस जाते हैं और भारी वोल्टेज ड्रॉप होता है; आधुनिक मशीनों में इसके लिए तरल धातु संपर्क का उपयोग किया जाता है।",
        bn: "ঘূর্ণনশীল প্রান্ত থেকে হাজার হাজার অ্যাম্পিয়ার কারেন্ট তুলতে সাধারণ ব্রাশ দ্রুত ক্ষয় হয় ও প্রচুর শক্তি অপচয় করে; আধুনিক ব্যবস্থায় তরল ধাতু কন্টাক্ট ব্যবহৃত হয়।"
      }
    },
    {
      id: "mcq-ch10-l14-07",
      question: {
        en: "In Faraday’s paradox, if a cylindrical permanent magnet and a coaxial conductive copper disc are mechanically locked together and rotated simultaneously about their common axis, what happens?",
        hi: "फैराडे के विरोधाभास में, यदि एक बेलनाकार चुंबक और तांबे की डिस्क को आपस में जोड़कर एक साथ घुमाया जाए, तो क्या होता है?",
        bn: "ফ্যারাডের প্যারাডক্সে, যদি একটি সিলিন্ড্রিক্যাল স্থায়ী চুম্বক এবং তামার ডিস্ককে একত্রে আটকে একই অক্ষের চারদিকে একসাথে ঘোরানো হয়, তবে কী ঘটবে?"
      },
      options: [
        { id: "opt-1", text: { en: "A motional EMF is still induced across the disc radii, measurable by stationary brushes connected to an external meter", hi: "डिस्क के किनारों पर अभी भी गतिज EMF प्रेरित होता है, जिसे स्थिर ब्रशों द्वारा मापा जा सकता है", bn: "ডিস্কের ব্যাসার্ধ জুড়ে এখনও গতিজ EMF আবিষ্ট হয়, যা স্থির ব্রাশের সাহায্যে বহিস্থ মিটারে মাপা যায়" } },
        { id: "opt-2", text: { en: "Zero EMF is induced because there is no relative motion between disc and magnet", hi: "शून्य EMF प्रेरित होता है क्योंकि डिस्क और चुंबक के बीच कोई सापेक्ष गति नहीं है", bn: "কোনো EMF উৎপন্ন হয় না কারণ ডিস্ক ও চুম্বকের মধ্যে কোনো আপেক্ষিক গতি নেই" } },
        { id: "opt-3", text: { en: "The magnet loses its magnetic field permanently", hi: "चुंबक का चुंबकत्व हमेशा के लिए समाप्त हो जाता है", bn: "চুম্বক তার চুম্বকত্ব চিরতরে হারিয়ে ফেলে" } },
        { id: "opt-4", text: { en: "The disc explodes due to electrostatic pressure", hi: "स्थिरवैद्युत दाब से डिस्क फट जाती है", bn: "স্থিরবৈদ্যুতিক চাপে ডিস্কটি বিস্ফোরিত হয়" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "In relativistic electrodynamics, the magnetic field lines do not rotate with the magnet. The rotating disc conductors move across the stationary spatial field, developing radial Lorentz force and EMF.",
        hi: "सापेक्षिकता के अनुसार चुंबकीय क्षेत्र चुंबक के साथ नहीं घूमता; अतः घूमता हुआ चालक क्षेत्र को काटता है और EMF उत्पन्न होता है।",
        bn: "তত্ত্বানুযায়ী চৌম্বক ক্ষেত্র চুম্বকের সাথে ঘোরে না; ফলে ঘূর্ণায়মান পরিবাহী স্থির ক্ষেত্রকে ছেদ করে পূর্ণ EMF তৈরি করে।"
      }
    },
    {
      id: "mcq-ch10-l14-08",
      question: {
        en: "A copper disc of diameter 0.6 m spins at 3,000 RPM in a uniform axial field of 2.0 T. What is the open-circuit voltage generated between the central shaft and the edge?",
        hi: "0.6 m व्यास की एक तांबे की डिस्क 2.0 T के अक्षीय चुंबकीय क्षेत्र में 3,000 RPM पर घूमती है। केंद्र और किनारे के बीच उत्पन्न वोल्टेज क्या है?",
        bn: "০.৬ মিটার ব্যাসের একটি তামার ডিস্ক ২.০ টেসলা চৌম্বক ক্ষেত্রে ৩,০০০ RPM গতিতে ঘুরছে। কেন্দ্র ও পরিধির মধ্যে উৎপন্ন ভোল্টেজ কত?"
      },
      options: [
        { id: "opt-1", text: { en: "28.27 V", hi: "28.27 V", bn: "২৮.২৭ V" } },
        { id: "opt-2", text: { en: "56.55 V", hi: "56.55 V", bn: "৫৬.৫৫ V" } },
        { id: "opt-3", text: { en: "14.14 V", hi: "14.14 V", bn: "১৪.১৪ V" } },
        { id: "opt-4", text: { en: "113.1 V", hi: "113.1 V", bn: "১১৩.১ V" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Radius R = 0.6 / 2 = 0.3 m. Angular speed ω = 2π × (3000 / 60) = 100π ≈ 314.16 rad/s. E = ½ · B · ω · R² = 0.5 × 2.0 × (100π) × (0.3)² = 100π × 0.09 = 9π ≈ 28.27 V.",
        hi: "R = 0.3 m, ω = 100π rad/s। E = ½ · B · ω · R² = 0.5 × 2 × 314.16 × 0.09 = 28.27 V।",
        bn: "R = ০.৩ মি, ω = ১০০π rad/s। E = ½ · B · ω · R² = ০.৫ × ২ × ৩১৪.১৬ × ০.০৯ = ২৮.২৭ V।"
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch10-l14-1',
      question: {
        en: 'A homopolar disc generator designed for pulse welding has a disc radius of 0.5 m, rotates at 3,600 RPM, and operates in a 2.0 T magnetic field. If its total internal resistance is 50 micro-ohms (50 μΩ), calculate the open-circuit voltage and maximum short-circuit current.',
        hi: 'वेल्डिंग के लिए बनाए गए एक होमोपोलर जनरेटर की डिस्क त्रिज्या 0.5 m, गति 3,600 RPM और चुंबकीय क्षेत्र 2.0 T है। यदि आंतरिक प्रतिरोध 50 μΩ है, तो ओपन-सर्किट वोल्टेज और अधिकतम शॉर्ट-सर्किट धारा ज्ञात कीजिए।',
        bn: 'পালস ওয়েল্ডিংয়ের জন্য ব্যবহৃত একটি হোমোপোলার ডিস্কের ব্যাসার্ধ ০.৫ মিটার, গতি ৩,৬০০ RPM এবং চৌম্বক ক্ষেত্র ২.০ টেসলা। অভ্যন্তরীণ রোধ ৫০ মাইক্রো-ওহম (৫০ μΩ) হলে ওপেন-সার্কিট ভোল্টেজ ও শর্ট-সার্কিট কারেন্ট নির্ণয় করুন।'
      },
      hint: {
        en: 'ω = 2π × (3600 / 60) = 120π rad/s. E = ½ · B · ω · R². I_sc = E / R_int.',
        hi: 'ω = 120π = 377 rad/s। E = ½ · B · ω · R²। I_sc = E / R_int।',
        bn: 'ω = ৩৭৭ rad/s। E = ½ · B · ω · R²। I_sc = E / R_int।'
      },
      answerKey: {
        en: 'E = 0.5 × 2.0 × (120π) × (0.5)² = 0.5 × 2.0 × 376.99 × 0.25 = 94.25 Volts. Maximum short-circuit current: I_sc = 94.25 V / (50 × 10⁻⁶ Ω) = 1,885,000 Amperes (1.885 Mega-Amps)!',
        hi: 'E = 94.25 V। I_sc = 94.25 / (50 × 10⁻⁶) = 1,885,000 A (1.885 MA)!',
        bn: 'E = ৯৪.২৫ ভোল্ট। I_sc = ৯৪.২৫ / (৫০ × ১০⁻⁶) = ১,৮৮৫,০০০ অ্যাম্পিয়ার (১.৮৮৫ মেগা-অ্যাম্পিয়ার)!'
      }
    }
  ]
};
