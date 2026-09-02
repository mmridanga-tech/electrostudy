import { Lesson } from '../types';

export const LESSON_COEFFICIENT_OF_COUPLING: Lesson = {
  id: 'lsn-ch10-coefficient-of-coupling',
  topicId: 'ch10-coefficient-of-coupling',
  chapterId: 'ch-em-induction',
  order: 8,
  title: {
    en: 'Coefficient of Coupling & Leakage Flux',
    hi: 'युग्मन गुणांक (k) एवं क्षरण फ्लक्स (Leakage Flux)',
    bn: 'কাপলিং গুণাঙ্ক (k) ও লিকেজ ফ্লাক্স (Leakage Flux)'
  },
  description: {
    en: 'In-depth engineering analysis of the Coefficient of Coupling (k = M / √(L₁L₂)), magnetic leakage flux (Φ_l), and mutual flux (Φ_m). Covers physical meaning of k (0 ≤ k ≤ 1), tightly coupled vs loosely coupled circuits, geometric orientation and core permeability factors, leakage reactance impacts on transformer regulation and induction machines, and modern design techniques for minimizing magnetic leakage (interleaved shell-type windings and laminated high-μ cores).',
    hi: 'युग्मन गुणांक (k = M / √(L₁L₂)), चुंबकीय क्षरण फ्लक्स (Φ_l) एवं पारस्परिक उपयोगी फ्लक्स (Φ_m) का गहन इंजीनियरिंग विश्लेषण। k के भौतिक अर्थ (0 ≤ k ≤ 1), दृढ़ बनाम शिथिल युग्मित परिपथ, कुंडलियों की सापेक्ष स्थिति व कोर चुंबकशीलता का प्रभाव, ट्रांसफॉर्मर वोल्टेज रेगुलेशन व मशीनों पर क्षरण प्रतिघात का प्रभाव तथा चुंबकीय क्षरण घटाने की उन्नत तकनीकें।',
    bn: 'কাপলিং গুণাঙ্ক (k = M / √(L₁L₂)), চৌম্বকীয় লিকেজ ফ্লাক্স (Φ_l) এবং কার্যকরী পারস্পরিক ফ্লাক্সের (Φ_m) বিশদ প্রকৌশল বিশ্লেষণ। k এর ভৌত তাৎপর্য (০ ≤ k ≤ ১), দৃঢ় বনাম শিথিল কাপলড সার্কিট, কয়েলের অবস্থান ও কোর ভেদ্যতার প্রভাব, ভোল্টেজ রেগুলেশনে লিকেজ রিঅ্যাক্ট্যান্সের প্রভাব এবং ইন্টারলিভড ওয়াইন্ডিং ও উচ্চ ভেদ্যতার কোরের মাধ্যমে লিকেজ কমানোর আধুনিক পদ্ধতিসমূহ।'
  },
  estimatedMinutes: 30,
  easyExplanation: {
    en: "Imagine shining a flashlight at a friend through a window. Most of the light beams pass straight through to your friend (this is the Mutual Flux), but some light scatters sideways into the trees and never reaches them (this is the Leakage Flux). The Coefficient of Coupling (k) is simply the fraction of magnetic flashlight beams that successfully reach the second coil! In a high-quality closed iron core transformer, k is over 0.98 (almost 99% of flux is shared). In wireless phone chargers separated by air and phone cases, k is only around 0.40 to 0.60. Keeping k as close to 1 as possible makes electrical machines super-efficient.",
    hi: 'कल्पना कीजिए कि आप टॉर्च की रोशनी से किसी खिड़की के पार खड़े दोस्त को संकेत दे रहे हैं। रोशनी की अधिकांश किरणें सीधे दोस्त तक पहुंचती हैं (यह है पारस्परिक उपयोगी फ्लक्स - Mutual Flux), लेकिन कुछ किरणें किनारे बिखरकर हवा में खो जाती हैं और दोस्त तक नहीं पहुंचतीं (यह है क्षरण फ्लक्स - Leakage Flux)। "युग्मन गुणांक" (Coefficient of Coupling - k) केवल यही बताता है कि पहली कुंडली के कुल चुंबकीय फ्लक्स का कितना प्रतिशत हिस्सा दूसरी कुंडली तक सफलतापूर्वक पहुंच पाया! एक बढ़िया आयरन-कोर ट्रांसफॉर्मर में k का मान 0.98 से 0.99 तक होता है, जबकि वायरलेस मोबाइल चार्जर में यह 0.40 से 0.60 के बीच होता है।',
    bn: 'কল্পনা করুন টর্চলাইট দিয়ে জানালার ওপারে থাকা বন্ধুর দিকে আলো ফেলার কথা। বেশিরভাগ আলো সরাসরি বন্ধুর গায়ে পড়ে (এটি হলো মিউচুয়াল ফ্লাক্স), কিন্তু কিছু আলো চারপাশের বাতাসে ছড়িয়ে পড়ে বন্ধুর কাছে পৌঁছায় না (এটি হলো লিকেজ ফ্লাক্স)। "কাপলিং গুণাঙ্ক" (Coefficient of Coupling - k) মূলত নির্দেশ করে প্রথম কয়েলের মোট চৌম্বক ফ্লাক্সের কত শতাংশ সফলভাবে দ্বিতীয় কয়েলের সাথে যুক্ত হতে পেরেছে! উন্নত আয়রন কোর ট্রান্সফরমারে k-এর মান ০.৯৮ থেকে ০.৯৯ পর্যন্ত হয়, আর ওয়্যারলেস চার্জারে বাতাসের দূরত্বের কারণে k-এর মান ০.৪০ থেকে ০.৬০ এর মতো হয়।'
  },
  detailedExplanation: {
    en: `1. Total Flux Breakdown (Mutual Flux vs Leakage Flux):
When an electric current I₁ flows through Coil 1, it generates a total magnetic flux Φ₁_total. This total flux divides into two distinct physical components:
    \\Phi_{1\\text{_total}} = \\Phi_{12} + \\Phi_{l1}
- Mutual Flux (Φ₁₂ or Φ_m): The fraction of magnetic flux that completely traverses the core and links ALL turns of Coil 2. This flux is responsible for mutual induction and energy transfer.
- Leakage Flux (Φ_l1): The fraction of magnetic flux that completes its magnetic circuit through surrounding air or insulation without linking Coil 2. Leakage flux represents stored reactive energy that does not contribute to power transfer.

2. Mathematical Definition of Coupling Coefficient (k):
Let k₁ be the fraction of Coil 1 flux linking Coil 2:
    k₁ = \\frac{\\Phi_{12}}{\\Phi_{1\\text{_total}}}
Let k₂ be the fraction of Coil 2 flux linking Coil 1:
    k₂ = \\frac{\\Phi_{21}}{\\Phi_{2\\text{_total}}}
The geometric mean of these coupling fractions is defined as the Coefficient of Coupling (k):
    k = \\sqrt{k₁ · k₂}

3. Rigorous Derivation of k = M / √(L₁ · L₂):
Recall self-inductances and mutual inductance:
- L₁ = (N₁ · Φ₁_total) / I₁  ==>  Φ₁_total = (L₁ · I₁) / N₁
- L₂ = (N₂ · Φ₂_total) / I₂  ==>  Φ₂_total = (L₂ · I₂) / N₂
- Mutual inductance from Coil 1 to 2: M = (N₂ · Φ₁₂) / I₁ = (N₂ · k₁ · Φ₁_total) / I₁ = k₁ · \\frac{N₂}{N₁} · L₁
- Mutual inductance from Coil 2 to 1: M = (N₁ · Φ₂₁) / I₂ = (N₁ · k₂ · Φ₂_total) / I₂ = k₂ · \\frac{N₁}{N₂} · L₂
Multiplying the two expressions for M:
    M · M = M² = \\left(k₁ · \\frac{N₂}{N₁} · L₁\\right) · \\left(k₂ · \\frac{N₁}{N₂} · L₂\\right) = k₁ · k₂ · L₁ · L₂ = k² · L₁ · L₂
Taking the square root on both sides:
    M = k · \\sqrt{L₁ · L₂}  \\implies  k = \\frac{M}{\\sqrt{L₁ · L₂}}

4. Range and Engineering Regimes of k (0 ≤ k ≤ 1):
- Ideal / Perfect Coupling (k = 1.0):
  Zero leakage flux (Φ_l = 0). 100% of flux produced by Coil 1 links Coil 2. Achieved approximately in high-permeability, closed toroidal or shell-type silicon-steel transformers.
- Tight Coupling (0.90 ≤ k ≤ 0.99):
  Standard power transformers, audio transformers, and distribution units. Minimal leakage flux, high energy transfer efficiency.
- Loose Coupling (k < 0.50):
  Air-cored coils, radio frequency (RF) tuning transformers, induction heating coils, and wireless inductive power chargers (Qi standard).
- Zero Coupling (k = 0.0):
  Coils positioned at 90° (orthogonal) to each other or placed infinitely far apart, resulting in zero mutual flux linkage and zero mutual inductance (M = 0).

5. Physical Factors Determining Coefficient of Coupling:
- Separation Distance: As distance (d) between coils increases, leakage flux into air increases rapidly, causing k to drop exponentially.
- Core Material & Permeability (μ_r): High relative permeability (e.g. CRGO silicon steel with μ_r ≈ 4,000–8,000) confines magnetic flux within the core path, raising k above 0.98.
- Relative Orientation: Placing two solenoids coaxial achieves maximum k; placing them perpendicular (axes at 90°) reduces k to near 0.
- Winding Geometry: Concentric cylindrical windings (secondary wound directly over primary) and interleaved pancake/sandwich windings achieve the highest k and minimum leakage.

6. Detrimental Effects & Practical Uses of Leakage Flux:
- Negative Effects in Transformers: Leakage flux gives rise to Leakage Reactance (X_l = 2πf·L_leakage), causing internal voltage drops (poor voltage regulation) and reactive power consumption under load.
- Beneficial Uses: In electric arc welding transformers and fluorescent lamp ballasts, deliberate high leakage inductance is engineered to limit short-circuit currents and stabilize electric arcs.`,
    hi: `1. कुल फ्लक्स का विभाजन (पारस्परिक उपयोगी फ्लक्स बनाम क्षरण फ्लक्स):
जब प्राथमिक कुंडली में धारा प्रवाहित होती है, तो उत्पन्न कुल फ्लक्स दो भागों में बंटता है:
    Φ₁_total = Φ₁₂ (पारस्परिक फ्लक्स) + Φ_l1 (क्षरण फ्लक्स)
- पारस्परिक फ्लक्स (Mutual Flux Φ₁₂): वह फ्लक्स जो कोर से होकर द्वितीयक कुंडली के सभी फेरों से सम्बद्ध होता है और ऊर्जा स्थानांतरित करता है।
- क्षरण फ्लक्स (Leakage Flux Φ_l1): वह अवांछित फ्लक्स जो द्वितीयक कुंडली को छुए बिना आसपास की हवा या इंसुलेशन से अपना लूप पूरा कर लेता है।

2. युग्मन गुणांक (k) का गणितीय निगमन:
    k = \\frac{M}{\\sqrt{L₁ · L₂}}  \\quad (0 \\le k \\le 1)

3. k के विभिन्न मानों का वर्गीकरण:
- आदर्श युग्मन (k = 1.0): शून्य क्षरण फ्लक्स, 100% चुंबकीय ऊर्जा स्थानांतरण (आदर्श ट्रांसफॉर्मर)।
- दृढ़ युग्मन (0.90 ≤ k ≤ 0.99): मानक पावर एवं वितरण ट्रांसफॉर्मर (न्यूनतम क्षरण)।
- शिथिल युग्मन (k < 0.50): वायु-कोर आरएफ परिपथ एवं वायरलेस मोबाइल चार्जर।
- शून्य युग्मन (k = 0.0): लंबवत (90°) रखी कुंडलियां या अत्यंत दूर स्थित कुंडलियां।

4. युग्मन गुणांक को प्रभावित करने वाले कारक:
- कुंडलियों के बीच दूरी (दूरी बढ़ने पर k घटता है)।
- कोर की चुंबकशीलता (उच्च μ_r कोर फ्लक्स को कोर के भीतर बांधे रखती है, जिससे k बढ़ता है)।
- सापेक्ष अभिविन्यास (समाक्षीय स्थिति में k अधिकतम, 90° पर न्यूनतम)।
- वाइंडिंग ज्यामिति (सकेंद्री अथवा सैंडविच वाइंडिंग से k 0.99 तक पहुंचता है)।

5. क्षरण फ्लक्स के प्रभाव:
- क्षरण फ्लक्स के कारण "क्षरण प्रतिघात" (Leakage Reactance) उत्पन्न होता है, जो वोल्टेज रेगुलेशन को प्रभावित करता है।`,
    bn: `১. মোট ফ্লাক্সের বিভাজন (মিউচুয়াল ফ্লাক্স বনাম লিকেজ ফ্লাক্স):
প্রাইমারি কয়েলে বিদ্যুৎ প্রবাহের ফলে সৃষ্ট মোট ফ্লাক্স দুটি অংশে বিভক্ত হয়:
    Φ₁_total = Φ₁₂ (যৌথ ফ্লাক্স) + Φ_l1 (লিকেজ ফ্লাক্স)
- মিউচুয়াল ফ্লাক্স (Φ₁₂): যে ফ্লাক্স কোর দিয়ে প্রবাহিত হয়ে সেকেন্ডারি কয়েলকে পুরোপুরি ছেদ করে শক্তি স্থানান্তর করে।
- লিকেজ ফ্লাক্স (Φ_l1): যে ফ্লাক্স সেকেন্ডারিতে না পৌঁছে আশেপাশের বাতাস বা ইনসুলেশনের মধ্য দিয়ে ফিরে আসে।

২. কাপলিং গুণাঙ্ক (k) প্রতিপাদন:
    k = \\frac{M}{\\sqrt{L₁ · L₂}}  \\quad (০ \\le k \\le ১)

৩. k এর মানের প্রকৌশল তাৎপর্য:
- আদর্শ কাপলিং (k = ১.০): শূন্য লিকেজ ফ্লাক্স, ১০০% ফ্লাক্স স্থানান্তর।
- টাইট কাপলিং (০.৯০ ≤ k ≤ ০.৯৯): পাওয়ার ও ডিস্ট্রিবিউশন ট্রান্সফরমার।
- লুজ কাপলিং (k < ০.৫০): ওয়্যারলেস চার্জার ও এয়ার কোর আরএফ কয়েল।
- শূন্য কাপলিং (k = ০.০): পরস্পর ৯০° কোণে থাকা কয়েল (কোনো আবেশ নেই)।

৪. k নিয়ন্ত্রক উপাদানসমূহ:
- কয়েলের মধ্যবর্তী দূরত্ব, কোরের চৌম্বক ভেদ্যতা (μ_r), অক্ষীয় কোণ এবং ওয়াইন্ডিং স্থাপন কৌশল (কনসেন্ট্রিক ও স্যান্ডউইচ)।

৫. লিকেজ ফ্লাক্সের প্রভাব:
- লিকেজ ফ্লাক্স সার্কিটে লিকেজ রিঅ্যাক্ট্যান্স সৃষ্টি করে, যার ফলে লোড বৃদ্ধির সাথে সাথে টার্মিনাল ভোল্টেজ হ্রাস পায়।`
  },
  formulas: [
    {
      id: 'f-ch10-coupling-coefficient',
      symbol: 'k',
      expression: 'k = M / √(L₁ · L₂) = √((Φ₁₂ / Φ₁_total) · (Φ₂₁ / Φ₂_total))',
      title: {
        en: 'Coefficient of Coupling Formula',
        hi: 'युग्मन गुणांक सूत्र',
        bn: 'কাপলিং গুণাঙ্ক সূত্র'
      },
      description: {
        en: 'Dimensionless ratio representing the fraction of total primary magnetic flux linked to the secondary coil.',
        hi: 'विमाहीन अनुपात जो प्राथमिक कुंडली के कुल फ्लक्स में से द्वितीयक से जुड़े फ्लक्स के अंश को दर्शाता है।',
        bn: 'মাত্রাহীন অনুপাত যা নির্দেশ করে প্রাইমারি কয়েলের মোট ফ্লাক্সের কত অংশ সেকেন্ডারির সাথে যুক্ত হয়।'
      },
      variables: [
        { symbol: 'k', name: { en: 'Coefficient of coupling (0 ≤ k ≤ 1)', hi: 'युग्मन गुणांक (0 ≤ k ≤ 1)', bn: 'কাপলিং গুণাঙ্ক (০ ≤ k ≤ ১)' } },
        { symbol: 'M', name: { en: 'Mutual inductance (H)', hi: 'अन्योन्य प्रेरकत्व (H)', bn: 'পারস্পরিক আবেশাঙ্ক (H)' } },
        { symbol: 'L₁, L₂', name: { en: 'Self-inductances of coils (H)', hi: 'कुंडलियों का स्व-प्रेरकत्व (H)', bn: 'কয়েলদ্বয়ের স্ব-আবেশাঙ্ক (H)' } }
      ]
    },
    {
      id: 'f-ch10-flux-balance',
      symbol: 'Φ_total',
      expression: 'Φ₁_total = Φ_mutual + Φ_leakage = Φ₁₂ + Φ_l1',
      title: {
        en: 'Total Primary Magnetic Flux Balance',
        hi: 'कुल प्राथमिक चुंबकीय फ्लक्स संतुलन',
        bn: 'মোট প্রাইমারি চৌম্বক ফ্লাক্স সমতা'
      },
      description: {
        en: 'Total flux is the direct arithmetic sum of useful power-transferring mutual flux and air-scattered leakage flux.',
        hi: 'कुल फ्लक्स उपयोगी पारस्परिक फ्लक्स एवं हवा में बिखरे क्षरण फ्लक्स का सीधा बीजगणितीय योग होता है।',
        bn: 'মোট ফ্লাক্স হলো দরকারী মিউচুয়াল ফ্লাক্স এবং বাতাসে ছড়িয়ে পড়া লিকেজ ফ্লাক্সের যোগফল।'
      },
      variables: [
        { symbol: 'Φ_mutual', name: { en: 'Core mutual linking flux (Wb)', hi: 'कोर पारस्परिक फ्लक्स (Wb)', bn: 'কোর মিউচুয়াল ফ্লাক্স (Wb)' } },
        { symbol: 'Φ_leakage', name: { en: 'Non-linking leakage flux (Wb)', hi: 'क्षरण फ्लक्स (Wb)', bn: 'লিকেজ ফ্লাক্স (Wb)' } }
      ]
    },
    {
      id: 'f-ch10-leakage-inductance',
      symbol: 'L_leakage',
      expression: 'L_leakage = (1 - k) · L₁',
      title: {
        en: 'Leakage Inductance Formula',
        hi: 'क्षरण प्रेरकत्व सूत्र',
        bn: 'লিকেজ আবেশাঙ্ক সূত্র'
      },
      description: {
        en: 'Inductance associated purely with non-linking leakage magnetic flux paths.',
        hi: 'असंलग्न क्षरण चुंबकीय फ्लक्स पथों से संबंधित प्रेरकत्व।',
        bn: 'অসংযুক্ত লিকেজ ফ্লাক্সের কারণে সৃষ্ট স্বতন্ত্র আবেশাঙ্ক।'
      },
      variables: [
        { symbol: 'L_leakage', name: { en: 'Leakage inductance (H)', hi: 'क्षरण प्रेरकत्व (H)', bn: 'লিকেজ আবেশাঙ্ক (H)' } }
      ]
    }
  ],
  solvedExamples: [
    {
      problem: {
        en: 'A primary coil of self-inductance L₁ = 0.8 H and a secondary coil of self-inductance L₂ = 0.2 H have a mutual inductance M = 0.36 H. Calculate: (a) The coefficient of coupling k, and (b) The percentage of primary flux that forms magnetic leakage flux.',
        hi: 'प्राथमिक कुंडली का स्व-प्रेरकत्व L₁ = 0.8 H तथा द्वितीयक का L₂ = 0.2 H है और उनका अन्योन्य प्रेरकत्व M = 0.36 H है। ज्ञात कीजिए: (a) युग्मन गुणांक k, तथा (b) प्राथमिक फ्लक्स का कितना प्रतिशत क्षरण फ्लक्स बनता है।',
        bn: 'প্রাইমারি কয়েলের স্ব-আবেশাঙ্ক L₁ = ০.৮ H এবং সেকেন্ডারির L₂ = ০.২ H, তাদের পারস্পরিক আবেশাঙ্ক M = ০.৩৬ H। নির্ণয় কর: (a) কাপলিং গুণাঙ্ক k, এবং (b) প্রাইমারি ফ্লাক্সের কত শতাংশ লিকেজ ফ্লাক্সে পরিণত হয়।'
      },
      givenValues: {
        en: 'L₁ = 0.8 H, L₂ = 0.2 H, M = 0.36 H',
        hi: 'L₁ = 0.8 H, L₂ = 0.2 H, M = 0.36 H',
        bn: 'L₁ = ০.৮ H, L₂ = ০.২ H, M = ০.৩৬ H'
      },
      solution: {
        en: `1. Calculate geometric mean inductance:
   √(L₁ · L₂) = √(0.8 · 0.2) = √(0.16) = 0.40 H
2. Calculate coefficient of coupling k:
   k = M / √(L₁ · L₂) = 0.36 / 0.40 = 0.90
3. Calculate leakage percentage:
   Coupled flux fraction = k = 0.90 (90%)
   Leakage flux fraction = (1 - k) = 1 - 0.90 = 0.10 (10%)`,
        hi: `1. ज्यामितीय माध्य प्रेरकत्व की गणना:
   √(L₁ · L₂) = √(0.8 · 0.2) = √(0.16) = 0.40 H
2. युग्मन गुणांक k की गणना:
   k = M / √(L₁ · L₂) = 0.36 / 0.40 = 0.90
3. क्षरण फ्लक्स प्रतिशत की गणना:
   युग्मित फ्लक्स = 90%
   क्षरण फ्लक्स = (1 - 0.90) = 10%`,
        bn: `১. জ্যামিতিক গড় আবেশাঙ্ক নির্ণয়:
   √(L₁ · L₂) = √(০.৮ · ০.২) = √(০.১৬) = ০.৪০ H
২. কাপলিং গুণাঙ্ক k নির্ণয়:
   k = M / √(L₁ · L₂) = ০.৩৬ / ০.৪০ = ০.৯০
৩. লিকেজ ফ্লাক্সের শতকরা হার:
   কাপলড ফ্লাক্স = ৯০%
   লিকেজ ফ্লাক্স = (১ - ০.৯০) = ১০%`
      },
      finalAnswer: {
        en: 'Coefficient of coupling k = 0.90; Leakage flux percentage = 10%',
        hi: 'युग्मन गुणांक k = 0.90; क्षरण फ्लक्स प्रतिशत = 10%',
        bn: 'কাপলিং গুণাঙ্ক k = ০.৯০; লিকেজ ফ্লাক্সের শতকরা হার = ১০%'
      }
    }
  ],
  practicalApplications: {
    en: [
      'High-Efficiency Power Transformers: Built with concentric windings on closed silicon-steel cores to achieve k > 0.99, maximizing voltage regulation.',
      'Arc Welding Transformers: Intentionally designed with movable magnetic shunts to reduce k to ~0.7, providing drooping voltage to stabilize the arc.'
    ],
    hi: [
      'उच्च-दक्षता पावर ट्रांसफॉर्मर: बंद सिलिकॉन स्टील कोर पर सकेंद्री वाइंडिंग द्वारा k > 0.99 प्राप्त किया जाता है।',
      'आर्क वेल्डिंग ट्रांसफॉर्मर: चल चुंबकीय शंट द्वारा k को घटाकर लगभग 0.7 किया जाता है ताकि वेल्डिंग आर्क स्थिर रहे।'
    ],
    bn: [
      'উচ্চ-দক্ষতাসম্পন্ন পাওয়ার ট্রান্সফরমার: সিলিকন স্টিল কোরে কনসেন্ট্রিক ওয়াইন্ডিং ব্যবহার করে k > ০.৯৯ নিশ্চিত করা হয়।',
      'আর্ক ওয়েল্ডিং ট্রান্সফরমার: মুভেবল ম্যাগনেটিক শান্ট দিয়ে k কমিয়ে প্রায় ০.৭ এ রাখা হয় যাতে ওয়েল্ডিং আর্ক স্থির থাকে।'
    ]
  },
  importantPoints: {
    en: [
      'The coefficient of coupling k is strictly bounded between 0 and 1 (0 ≤ k ≤ 1). It can never be negative or exceed 1.',
      'High core permeability (μ_r >> 1) dramatically increases k by offering a low-reluctance path that captures almost all magnetic flux.'
    ],
    hi: [
      'युग्मन गुणांक k का मान सदैव 0 और 1 के बीच होता है (0 ≤ k ≤ 1)। यह कभी ऋणात्मक या 1 से अधिक नहीं हो सकता।',
      'उच्च कोर चुंबकशीलता (μ_r >> 1) कम रिलक्टेंस मार्ग प्रदान करके लगभग सभी फ्लक्स को कोर में बांधकर k के मान को बढ़ाती है।'
    ],
    bn: [
      'কাপলিং গুণাঙ্ক k-এর মান কঠোরভাবে ০ ও ১ এর মধ্যে সীমাবদ্ধ (০ ≤ k ≤ ১)। এটি কখনো ঋণাত্মক বা ১-এর বেশি হতে পারে না।',
      'উচ্চ কোর ভেদ্যতা (μ_r >> ১) নিম্ন রিলাকট্যান্স পথ তৈরি করে প্রায় সমস্ত ফ্লাক্স কোরে আবদ্ধ রাখে এবং k বৃদ্ধি করে।'
    ]
  },
  commonMistakes: {
    en: [
      'Believing that leakage flux dissipates real active power as heat: Leakage flux stores REACTIVE energy (L_l); it causes voltage drop, not direct I²R copper loss.'
    ],
    hi: [
      'यह समझना कि क्षरण फ्लक्स वास्तविक सक्रिय ऊर्जा का ह्रास करता है: क्षरण फ्लक्स केवल प्रतिघाती ऊर्जा संचित करता है।'
    ],
    bn: [
      'মনে করা যে লিকেজ ফ্লাক্স তাপ হিসেবে সক্রিয় বিদ্যুৎ শক্তি ক্ষয় করে: লিকেজ ফ্লাক্স মূলত রিঅ্যাক্টিভ শক্তি সঞ্চয় করে ভোল্টেজ ড্রপ ঘটায়।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch10-k1',
      question: {
        en: 'What is the maximum theoretical value of the coefficient of coupling (k)?',
        hi: 'युग्मन गुणांक (k) का अधिकतम सैद्धांतिक मान क्या होता है?',
        bn: 'কাপলিং গুণাঙ্কের (k) সর্বোচ্চ তাত্ত্বিক মান কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '0.5', hi: '0.5', bn: '০.৫' } },
        { id: 'opt-2', text: { en: '1.0', hi: '1.0', bn: '১.০' } },
        { id: 'opt-3', text: { en: 'Infinity', hi: 'अनंत', bn: 'অসীম' } },
        { id: 'opt-4', text: { en: '100', hi: '100', bn: '১০০' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'Under perfect ideal coupling with zero leakage flux, k reaches its maximum limit of 1.0 (100%).',
        hi: 'शून्य क्षरण फ्लक्स युक्त पूर्ण आदर्श युग्मन में k का अधिकतम मान 1.0 (100%) होता है।',
        bn: 'শূন্য লিকেজ ফ্লাক্সযুক্ত নিখুঁত আদর্শ কাপলিংয়ে k এর সর্বোচ্চ মান ১.০ (১০০%) হয়।'
      }
    },
    {
      id: 'mcq-ch10-k2',
      question: {
        en: 'If two identical coils of self-inductance L each are placed perpendicular (at 90°) to each other, their mutual inductance M will be:',
        hi: 'यदि L स्व-प्रेरकत्व वाली दो समान कुंडलियां एक-दूसरे के लंबवत (90° पर) रखी जाएं, तो उनका अन्योन्य प्रेरकत्व M होगा:',
        bn: 'প্রতিটি L স্ব-আবেশাঙ্কযুক্ত দুটি কয়েল পরস্পর ৯০° কোণে লম্বভাবে স্থাপন করলে তাদের পারস্পরিক আবেশাঙ্ক M হবে:'
      },
      options: [
        { id: 'opt-1', text: { en: 'L', hi: 'L', bn: 'L' } },
        { id: 'opt-2', text: { en: 'L / 2', hi: 'L / 2', bn: 'L / ২' } },
        { id: 'opt-3', text: { en: 'Zero (0)', hi: 'शून्य (0)', bn: 'শূন্য (০)' } },
        { id: 'opt-4', text: { en: '2L', hi: '2L', bn: '২L' } }
      ],
      correctOptionId: 'opt-3',
      explanation: {
        en: 'At 90° orientation, magnetic flux from one coil is parallel to the plane of the other, resulting in zero linked flux (k = 0, M = 0).',
        hi: '90° अभिविन्यास पर एक कुंडली का फ्लक्स दूसरी के समतल के समानांतर होता है, अतः सम्बद्ध फ्लक्स शून्य होता है (k = 0, M = 0)।',
        bn: '৯০° কোণে একটি কয়েলের ফ্লাক্স অন্য কয়েলের তলের সমান্তরাল হয়, ফলে কোনো ফ্লাক্স লিংক হয় না (k = ০, M = ০)।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch10-k1',
      question: {
        en: 'Explain why distribution transformers are constructed with interleaved or concentric windings rather than placing primary and secondary coils on completely separate limbs.',
        hi: 'व्याख्या कीजिए कि वितरण ट्रांसफॉर्मर में प्राथमिक व द्वितीयक कुंडलियों को अलग-अलग भुजाओं पर रखने के बजाय सकेंद्री या सैंडविच रूप में क्यों लपेटा जाता है।',
        bn: 'ব্যাখ্যা কর কেন ডিস্ট্রিবিউশন ট্রান্সফরমারে প্রাইমারি ও সেকেন্ডারি কয়েল পৃথক বাহুতে না রেখে কনসেন্ট্রিক বা স্যান্ডউইচ আকারে প্যাঁচানো হয়।'
      }
    }
  ]
};
