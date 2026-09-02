import { Lesson } from '../types';

export const LESSON_ELEMENTARY_AC_GENERATOR: Lesson = {
  id: 'lsn-ch10-elementary-ac-generator',
  topicId: 'ch10-elementary-ac-generator',
  chapterId: 'ch-em-induction',
  order: 11,
  title: {
    en: 'Elementary AC Generator: Slip Rings & Sine Wave Generation',
    hi: 'प्राथमिक एसी जनरेटर: स्लिप रिंग्स एवं ज्या-तरंग उत्पत्ति',
    bn: 'মৌলিক এসি জেনারেটর: স্লিপ রিংস ও সাইন ওয়েভ উৎপত্তি'
  },
  description: {
    en: 'Complete analysis of rotating loop dynamics in a uniform magnetic field, motional EMF derivation e = NBAω sin(ωt), instantaneous orientation, continuous slip rings, and alternating polarity.',
    hi: 'समान चुंबकीय क्षेत्र में घूर्णन लूप गतिशीलता, गतिक ईएमएफ व्युत्पत्ति e = NBAω sin(ωt), तात्कालिक अभिविन्यास, सतत स्लिप रिंग्स तथा प्रत्यावर्ती ध्रुवता का संपूर्ण विश्लेषण।',
    bn: 'সুষম চৌম্বক ক্ষেত্রে ঘূর্ণনশীল লুপের গতিবিদ্যা, গতিশীল ইএমএফ সমীকরণ e = NBAω sin(ωt), তাৎক্ষণিক অবস্থান, স্লিপ রিংস এবং দিক-পরিবর্তনশীল ভোল্টেজের বিশদ বিশ্লেষণ।'
  },
  estimatedMinutes: 30,
  easyExplanation: {
    en: "An AC generator (alternator) turns mechanical rotation into electricity. Picture a rectangular loop of copper spinning inside the jaws of a magnet. As the loop spins, it cuts magnetic lines of force. During the first half-turn, side A moves upward while side B moves downward, pumping electrons in one direction. In the next half-turn, side A moves downward and side B moves upward, pulling electrons in the opposite direction. Because the coil ends are connected to smooth, continuous brass 'slip rings', this back-and-forth electron dance is delivered directly to the outside world as an alternating sine wave!",
    hi: 'एक एसी जनरेटर (अल्टरनेटर) यांत्रिक ऊर्जा (घूर्णन) को बिजली में बदलता है। एक चुंबक के दो ध्रुवों के बीच तांबे के आयताकार लूप को घूमने की कल्पना करें। जैसे ही लूप घूमता है, वह चुंबकीय रेखाओं को काटता है। पहले आधे चक्कर में, लूप की एक भुजा ऊपर और दूसरी नीचे जाती है, जिससे धारा एक दिशा में बहती है। अगले आधे चक्कर में भुजाओं की गति उलट जाती है, जिससे धारा विपरीत दिशा में बहने लगती है। चूंकि तार के सिरे गोल पीतल की "स्लिप रिंग्स" से जुड़े होते हैं, इसलिए बाहर के परिपथ में शुद्ध प्रत्यावर्ती ज्या-तरंग (Sine Wave) प्राप्त होती है!',
    bn: 'একটি এসি জেনারেটর যান্ত্রিক শক্তিকে বিদ্যুৎ শক্তিতে রূপান্তর করে। চুম্বকের দুই মেরুর মাঝে একটি তামার তারের কুণ্ডলী ঘুরতে থাকলে তা চৌম্বক বলরেখা ছেদ করে। প্রথম অর্ধ-ঘূর্ণনে কয়েলের একটি বাহু ওপরে এবং অপর বাহু নিচে গতিশীল থাকায় বিদ্যুৎপ্রবাহ এক অভিমুখে চলে। পরবর্তী অর্ধ-ঘূর্ণনে বাহু দুটির গতির দিক উল্টে যাওয়ায় বিদ্যুৎপ্রবাহও বিপরীত দিকে প্রবাহিত হয়। কয়েলের দুই প্রান্ত মসৃণ ব্রাসের "স্লিপ রিং"-এর সাথে সংযুক্ত থাকায় বহিস্থ লোডে বিশুদ্ধ দিক-পরিবর্তী সাইন ওয়েভ ভোল্টেজ পাওয়া যায়।'
  },
  detailedExplanation: {
    en: `1. Principle of Operation & Geometry:
An elementary AC generator consists of:
- A uniform magnetic field of flux density B (Tesla) established between North and South poles.
- A rectangular armature coil of N turns, length l (axial length along the rotation axis), and width w (coil breadth), rotating with constant angular velocity ω (rad/s).
- Total loop area A = l · w.
- Two continuous, concentric copper/brass slip rings keyed to the shaft, electrically connected to the coil ends and contacting stationary carbon brushes.

2. Derivation of Instantaneous Magnetic Flux Φ(t):
Let θ be the angle between the surface normal vector n̂ of the coil and the magnetic flux density vector B:
- At time t = 0, let the coil plane be perpendicular to the magnetic field (θ = 0 rad), so maximum flux Φ_max = B · A threads through the loop.
- As the armature rotates at constant angular speed ω:
  θ(t) = ωt
- The magnetic flux linking the coil at any instant t is:
  Φ(t) = B · A · cos(ωt)

3. Derivation of Induced EMF via Faraday's Law:
By Faraday's Law of Electromagnetic Induction:
  e(t) = - N · (dΦ / dt) = - N · d/dt [B · A · cos(ωt)]
  e(t) = - N · B · A · (-ω · sin(ωt))
  e(t) = N · B · A · ω · sin(ωt) = E_m · sin(ωt)
where the peak (maximum) induced voltage is:
  E_m = N · B · A · ω = 2π · f · N · B · A (Volts)

4. Alternative Motional EMF Derivation (v × B):
The linear tangential velocity of coil sides is:
  v = ω · (w / 2)
The motional EMF induced in each active conductor of length l cutting perpendicular flux is:
  e_side = B · l · v · sin(θ)
Because both active coil sides are connected in series aiding:
  e_turn = 2 · B · l · v · sin(θ) = 2 · B · l · [ω · (w / 2)] · sin(ωt) = B · (l · w) · ω · sin(ωt) = B · A · ω · sin(ωt)
For N turns, e(t) = N · B · A · ω · sin(ωt), matching Faraday's Law precisely.

5. Key Angular Orientations & Waveform Cycle:
- At θ = 0° (Coil plane perpendicular to B): Flux is maximum, but rate of change dΦ/dt = 0 (conductors slide parallel to field lines, cutting zero flux). e(0) = 0 V.
- At θ = 90° (Coil plane parallel to B): Flux through loop is zero, but cutting speed is maximum (dΦ/dt is maximum). e(90°) = +E_m.
- At θ = 180°: Flux is maximum negative, cutting rate dΦ/dt = 0. e(180°) = 0 V.
- At θ = 270°: Coil plane parallel to B in reversed orientation. e(270°) = -E_m.
- At θ = 360°: Cycle completes, returning to zero.

6. Role of Slip Rings vs. Commutator:
Continuous slip rings maintain constant metallic contact with their designated coil terminal. As the coil flips relative to the magnetic field, the external circuit terminal voltage intrinsically reverses polarity, yielding alternating current (AC).`,

    hi: `1. कार्य सिद्धांत एवं संरचना:
प्राथमिक एसी जनरेटर में एकसमान चुंबकीय क्षेत्र B में N फेरों और A क्षेत्रफल वाला एक आयताकार लूप कोणीय वेग ω (rad/s) से घूमता है।
- कॉइल के दोनों सिरे दो ठोस पीतल की स्लिप रिंग्स (Slip Rings) से जुड़े होते हैं।
- स्थिर कार्बन ब्रश इन रिंग्स पर फिसलते हुए बाहरी लोड को धारा प्रदान करते हैं।

2. प्रेरित ईएमएफ का गणितीय निगमन:
किसी क्षण t पर लूप से गुजरने वाला चुंबकीय फ्लक्स:
  Φ(t) = B · A · cos(ωt)
फैराडे के नियम के अनुसार:
  e(t) = - N · (dΦ / dt) = - N · d/dt [B · A · cos(ωt)]
  e(t) = N · B · A · ω · sin(ωt)
  e(t) = E_m · sin(ωt)
जहाँ शिखर वोल्टेज:
  E_m = N · B · A · ω = 2π · f · N · B · A (वोल्ट)

3. महत्वपूर्ण स्थितियां:
- θ = 0° (कॉइल चुंबकीय क्षेत्र के लंबवत): फ्लक्स अधिकतम होता है, किंतु तार रेखाओं के समानांतर गति करते हैं जिससे फ्लक्स काटने की दर शून्य होती है। e = 0 V।
- θ = 90° (कॉइल चुंबकीय क्षेत्र के समानांतर): फ्लक्स शून्य होता है, किंतु फ्लक्स काटने की गति अधिकतम होती है। e = +E_m।
- θ = 180°: फ्लक्स फिर विपरीत दिशा में अधिकतम, e = 0 V।
- θ = 270°: प्रेरित वोल्टेज ऋणात्मक शिखर पर पहुंचता है, e = -E_m।`,

    bn: `১. কার্যপদ্ধতি ও গঠন:
মৌলিক এসি জেনারেটরে সুষম চৌম্বক ক্ষেত্র B-এর মাঝে N পাক ও A ক্ষেত্রফল বিশিষ্ট কুণ্ডলী কৌণিক বেগ ω-তে ঘোরে। কুণ্ডলীর দুই প্রান্ত দুটি অবিচ্ছিন্ন ব্রাসের স্লিপ রিং-এর সাথে যুক্ত থাকে যা স্থির কার্বন ব্রাশের মাধ্যমে লোডে বিদ্যুৎ পাঠায়।

২. সমীকরণ প্রতিপাদন:
যে কোনো মুহূর্ত t-তে চৌম্বক ফ্লাক্স:
  Φ(t) = B · A · cos(ωt)
ফ্যারাডের সূত্রানুসারে আবিষ্ট ইএমএফ:
  e(t) = - N · (dΦ / dt) = N · B · A · ω · sin(ωt) = E_m · sin(ωt)
যেখানে শীর্ষ মান:
  E_m = N · B · A · ω`
  },
  formulas: [
    {
      id: 'f-ac-gen-instantaneous-emf',
      symbol: 'e(t)',
      expression: 'e(t) = E_m · sin(ωt) = N · B · A · ω · sin(ωt)',
      title: {
        en: 'Instantaneous Induced AC Voltage',
        hi: 'तात्कालिक प्रेरित एसी वोल्टेज',
        bn: 'তাৎক্ষণিক আবিষ্ট এসি ভোল্টেজ'
      },
      description: {
        en: 'Sinusoidal voltage produced by a rotating loop in a uniform magnetic field',
        hi: 'समान चुंबकीय क्षेत्र में घूर्णन लूप द्वारा उत्पन्न ज्यावक्रीय वोल्टेज',
        bn: 'সুষম চৌম্বক ক্ষেত্রে ঘূর্ণনশীল লুপ দ্বারা উৎপন্ন সাইনুসয়ডাল ভোল্টেজ'
      },
      variables: [
        { symbol: 'e(t)', name: { en: 'Instantaneous EMF (V)', hi: 'तात्कालिक ईएमएफ (V)', bn: 'তাৎক্ষণিক ইএমএফ (V)' } },
        { symbol: 'E_m', name: { en: 'Peak EMF (V): N · B · A · ω', hi: 'शिखर ईएमएफ (V)', bn: 'শীর্ষ ইএমএফ (V)' } },
        { symbol: 'N', name: { en: 'Number of turns', hi: 'फेरों की संख्या', bn: 'কুণ্ডলীর পাকসংখ্যা' } },
        { symbol: 'B', name: { en: 'Flux density (Tesla)', hi: 'फ्लक्स घनत्व (T)', bn: 'ফ্লাক্স ঘনত্ব (T)' } },
        { symbol: 'A', name: { en: 'Coil area l · w (m²)', hi: 'लूप क्षेत्रफल (m²)', bn: 'কয়েলের ক্ষেত্রফল (m²)' } },
        { symbol: 'ω', name: { en: 'Angular velocity 2πf (rad/s)', hi: 'कोणीय वेग (rad/s)', bn: 'কৌণিক বেগ (rad/s)' } }
      ]
    },
    {
      id: 'f-ac-gen-frequency-speed-relation',
      symbol: 'f',
      expression: 'f = (P · N_s) / 120',
      title: {
        en: 'Electrical Frequency vs. Mechanical Speed',
        hi: 'विद्युत आवृत्ति बनाम यांत्रिक गति',
        bn: 'বৈদ্যুতিক কম্পাঙ্ক বনাম যান্ত্রিক গতি'
      },
      description: {
        en: 'Relationship between electrical output frequency, number of machine magnetic poles, and rotor speed',
        hi: 'उत्पन्न विद्युत आवृत्ति, चुंबकीय ध्रुवों की संख्या एवं घूर्णक गति के बीच संबंध',
        bn: 'উৎপন্ন বৈদ্যুতিক কম্পাঙ্ক, মেশিনের মেরু সংখ্যা এবং রোটর গতির মধ্যকার সম্পর্ক'
      },
      variables: [
        { symbol: 'f', name: { en: 'Electrical frequency (Hz)', hi: 'विद्युत आवृत्ति (Hz)', bn: 'বৈদ্যুতিক কম্পাঙ্ক (Hz)' } },
        { symbol: 'P', name: { en: 'Total number of magnetic poles', hi: 'चुंबकीय ध्रुवों की संख्या', bn: 'চৌম্বক মেরুর সংখ্যা' } },
        { symbol: 'N_s', name: { en: 'Synchronous speed (RPM)', hi: 'तुल्यकालिक गति (RPM)', bn: 'সিঙ্ক্রোনাস গতি (RPM)' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-ac-gen-slipring-detail',
      title: {
        en: 'Slip Rings Mechanics & Continuous Contact Physics',
        hi: 'स्लिप रिंग्स यांत्रिकी एवं सतत संपर्क भौतिकी',
        bn: 'স্লিপ রিংস মেকানিক্স ও নিরবচ্ছিন্ন সংযোগ পদার্থবিদ্যা'
      },
      content: {
        en: `Why do slip rings generate alternating current (AC)?
- A slip ring is a continuous 360° conductive cylinder permanently brazed or soldered to one specific terminal of the rotating coil.
- Ring 1 is always connected to Coil Terminal A.
- Ring 2 is always connected to Coil Terminal B.
- Carbon brushes ride continuously on each respective ring.
- Therefore, when Terminal A turns positive (during 0° to 180°), Brush 1 is positive.
- When Terminal A flips to the opposite magnetic pole (during 180° to 360°), Terminal A physically becomes negative, so Brush 1 immediately becomes negative!
- The external circuit faithfully mirrors the internal alternating dynamics of the armature.`,
        hi: `स्लिप रिंग्स से प्रत्यावर्ती धारा (AC) क्यों प्राप्त होती है?
- स्लिप रिंग 360° की एक अखंड धातु की वलय होती है जो कॉइल के एक विशिष्ट सिरे से स्थायी रूप से जुड़ी होती है।
- रिंग 1 हमेशा कॉइल सिरे A से और रिंग 2 हमेशा सिरे B से जुड़ी रहती है।
- जब सिरा A उत्तरी ध्रुव के नीचे होता है, तो ब्रश 1 धनात्मक होता है।
- जब आधा चक्कर पूरा होने पर सिरा A दक्षिणी ध्रुव के नीचे चला जाता है, तो सिरा A स्वतः ऋणात्मक बन जाता है, जिससे ब्रश 1 भी ऋणात्मक हो जाता है।
- इस प्रकार बाहरी लोड में धारा की दिशा प्रत्येक आधे चक्र में उलटती रहती है।`,
        bn: `স্লিপ রিং কেন এসি উৎপন্ন করে?
- প্রতিটি স্লিপ রিং কয়েলের একটি নির্দিষ্ট প্রান্তের সাথে স্থায়ীভাবে সংযুক্ত থাকে।
- কয়েলের যে প্রান্তটি যখন যে মেরুর অধীনে থাকে, তখন সেখানে তৈরি হওয়া পোলারিটি সরাসরি ব্রাশের মাধ্যমে বাইরে পরিবাহিত হয়।
- ফলে কয়েলটি অর্ধ-ঘূর্ণন অতিক্রম করার সাথে সাথেই বহিস্থ বর্তনীতেও ভোল্টেজের দিক উল্টে যায়, যা খাঁটি অল্টারনেটিং কারেন্ট তৈরি করে।`
      },
      schematicId: 'circuit-ch10-ac-generator-slip-rings'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-acgen-1',
      problem: {
        en: 'A 2-pole rectangular armature coil has N = 100 turns, axial length L = 0.25 m, and width W = 0.15 m (area A = 0.0375 m²). It rotates at 3000 RPM in a uniform radial magnetic field of flux density B = 0.8 T. Determine: (a) The angular velocity ω, (b) The generated AC frequency f, (c) The peak induced EMF E_m, (d) The RMS voltage collected at the slip rings, and (e) The instantaneous EMF when the coil plane is inclined at 30° to the magnetic field lines.',
        hi: 'एक 2-ध्रुव आयताकार आर्मेचर कॉइल में N = 100 फेरे, लंबाई L = 0.25 m और चौड़ाई W = 0.15 m (क्षेत्रफल A = 0.0375 m²) हैं। यह 0.8 T के एकसमान चुंबकीय क्षेत्र में 3000 RPM पर घूमती है। ज्ञात कीजिए: (a) कोणीय वेग ω, (b) उत्पन्न एसी आवृत्ति f, (c) शिखर प्रेरित ईएमएफ E_m, (d) स्लिप रिंगों पर प्राप्त RMS वोल्टेज, तथा (e) तात्कालिक ईएमएफ जब कॉइल का तल चुंबकीय क्षेत्र से 30° पर झुका हो।',
        bn: 'একটি ২-মেরু বিশিষ্ট আয়তাকার আর্মেচার কয়েলের পাকসংখ্যা N = ১০০, দৈর্ঘ্য L = ০.২৫ m এবং প্রস্থ W = ০.১৫ m (ক্ষেত্রফল A = ০.০৩৭৫ m²)। এটি ০.৮ T সুষম চৌম্বক ক্ষেত্রে ৩০০০ RPM গতিতে ঘুরছে। নির্ণয় কর: (a) কৌণিক বেগ ω, (b) উৎপন্ন এসি কম্পাঙ্ক f, (c) শীর্ষ আবিষ্ট ইএমএফ E_m, (d) স্লিপ রিং থেকে সংগৃহীত RMS ভোল্টেজ, এবং (e) কয়েলের তল চৌম্বক বলরেখার সাথে ৩০° কোণে থাকলে তাৎক্ষণিক ইএমএফ।'
      },
      givenValues: {
        en: 'N = 100, A = 0.0375 m², B = 0.8 T, N_speed = 3000 RPM, P = 2 poles',
        hi: 'N = 100, A = 0.0375 m², B = 0.8 T, N_speed = 3000 RPM, P = 2 poles',
        bn: 'N = ১০০, A = ০.০৩৭৫ m², B = ০.৮ T, গতি = ৩০০০ RPM, P = ২ মেরু'
      },
      solution: {
        en: `1. Calculate angular velocity:
   ω = 2π · N_speed / 60 = 2π · 3000 / 60 = 100π ≈ 314.16 rad/s
2. Calculate electrical frequency:
   f = (P · N_speed) / 120 = (2 · 3000) / 120 = 50 Hz
3. Calculate peak induced EMF:
   E_m = N · B · A · ω = 100 · 0.8 T · 0.0375 m² · 314.16 rad/s
   E_m = 3 · 314.16 = 942.48 V
4. Calculate RMS voltage:
   E_rms = E_m / √2 = 942.48 / 1.4142 ≈ 666.4 V
5. Calculate instantaneous EMF when coil plane is at 30° to the magnetic field:
   Angle θ of coil normal to field lines = 90° - 30° = 60°
   e = E_m · sin(60°) = 942.48 · (√3 / 2) = 942.48 · 0.8660 ≈ 816.2 V`,
        hi: `1. कोणीय वेग:
   ω = 2π × 3000 / 60 = 100π ≈ 314.16 rad/s
2. विद्युत आवृत्ति:
   f = (P × N) / 120 = (2 × 3000) / 120 = 50 Hz
3. शिखर ईएमएफ:
   E_m = N × B × A × ω = 100 × 0.8 × 0.0375 × 314.16 = 942.48 V
4. RMS वोल्टेज:
   E_rms = E_m / √2 = 942.48 / 1.4142 ≈ 666.4 V
5. तात्कालिक ईएमएफ (θ = 90° - 30° = 60°):
   e = E_m × sin(60°) = 942.48 × 0.8660 ≈ 816.2 V`,
        bn: `১. কৌণিক বেগ:
   ω = ২π × ৩০০০ / ৬০ = ১০০π ≈ ৩১৪.১৬ rad/s
২. বৈদ্যুতিক কম্পাঙ্ক:
   f = (P × N) / ১২০ = (২ × ৩০০০) / ১২০ = ৫০ Hz
৩. শীর্ষ ইএমএফ:
   E_m = N × B × A × ω = ১০০ × ০.৮ × ০.০৩৭৫ × ৩১৪.১৬ = ৯৪২.৪৮ V
৪. RMS ভোল্টেজ:
   E_rms = E_m / √২ = ৯৪২.৪৮ / ১.৪১৪২ ≈ ৬৬৬.৪ V
৫. তাৎক্ষণিক ইএমএফ (θ = ৯০° - ৩০° = ৬০°):
   e = E_m × sin(৬০°) = ৯৪২.৪৮ × ০.৮৬৬০ ≈ ৮১৬.২ V`
      },
      finalAnswer: {
        en: 'f = 50 Hz; E_m = 942.5 V; E_rms = 666.4 V; e(30°) = 816.2 V',
        hi: 'f = 50 Hz; E_m = 942.5 V; E_rms = 666.4 V; e(30°) = 816.2 V',
        bn: 'f = ৫০ Hz; E_m = ৯৪২.৫ V; E_rms = ৬৬৬.৪ V; e(৩০°) = ৮১৬.২ V'
      }
    },
    {
      id: 'ex-acgen-2',
      problem: {
        en: 'A hydroelectric power station uses a low-speed water turbine rotating at 187.5 RPM. To supply power into a national grid operating at 50 Hz, calculate: (a) The required number of magnetic poles P on the rotor, (b) The number of pole pairs, and (c) The new shaft speed required if the generator were connected to a 60 Hz grid.',
        hi: 'एक जलविद्युत स्टेशन 187.5 RPM पर चलने वाले कम गति के टर्बाइन का उपयोग करता है। 50 Hz राष्ट्रीय ग्रिड को बिजली देने के लिए ज्ञात कीजिए: (a) रोटर पर आवश्यक चुंबकीय ध्रुवों P की संख्या, (b) ध्रुव युग्मों की संख्या, तथा (c) यदि जनरेटर को 60 Hz ग्रिड से जोड़ा जाए तो आवश्यक नई शाफ्ट गति।',
        bn: 'একটি জলবিদ্যুৎ কেন্দ্রে ১৮৭.৫ RPM ঘূর্ণনগতির কম-গতির টারবাইন ব্যবহৃত হয়। ৫০ Hz জাতীয় গ্রিডে বিদ্যুৎ সরবরাহের জন্য নির্ণয় কর: (a) রোটরে প্রয়োজনীয় চৌম্বক মেরুসংখ্যা P, (b) মেরু জোড়ার সংখ্যা, এবং (c) জেনারেটরটি ৬০ Hz গ্রিডে সংযুক্ত করতে হলে প্রয়োজনীয় নতুন ঘূর্ণনগতি।'
      },
      givenValues: {
        en: 'N_s = 187.5 RPM, f₁ = 50 Hz, f₂ = 60 Hz',
        hi: 'N_s = 187.5 RPM, f₁ = 50 Hz, f₂ = 60 Hz',
        bn: 'N_s = ১৮৭.৫ RPM, f₁ = ৫০ Hz, f₂ = ৬০ Hz'
      },
      solution: {
        en: `1. Relationship between frequency, poles, and shaft speed:
   f = (P · N_s) / 120
2. Rearrange for pole count P:
   P = (120 · f) / N_s
3. Substitute f = 50 Hz and N_s = 187.5 RPM:
   P = (120 · 50) / 187.5 = 6000 / 187.5 = 32 poles
4. Calculate pole pairs:
   p = P / 2 = 32 / 2 = 16 pole pairs
5. Speed for 60 Hz with the same 32-pole rotor:
   N_s2 = (120 · f₂) / P = (120 · 60) / 32 = 7200 / 32 = 225 RPM`,
        hi: `1. सूत्र:
   f = (P × N_s) / 120
2. ध्रुवों P की गणना:
   P = (120 × f) / N_s = (120 × 50) / 187.5 = 6000 / 187.5 = 32 ध्रुव
3. ध्रुव युग्म:
   p = P / 2 = 32 / 2 = 16 ध्रुव युग्म
4. 60 Hz ग्रिड के लिए गति:
   N_s2 = (120 × 60) / 32 = 7200 / 32 = 225 RPM`,
        bn: `১. সূত্র:
   f = (P × N_s) / ১২০
২. মেরুসংখ্যা P নির্ণয়:
   P = (১২০ × f) / N_s = (১২০ × ৫০) / ১৮৭.৫ = ৬০০০ / ১৮৭.৫ = ৩২ মেরু
৩. মেরু জোড়া:
   p = P / ২ = ৩২ / ২ = ১৬ জোড়া
৪. ৬০ Hz গ্রিডের জন্য গতি:
   N_s2 = (১২০ × ৬০) / ৩২ = ৭২০০ / ৩২ = ২২৫ RPM`
      },
      finalAnswer: {
        en: 'Number of poles P = 32 (16 pole pairs); Required speed for 60 Hz = 225 RPM',
        hi: 'ध्रुवों की संख्या P = 32 (16 ध्रुव युग्म); 60 Hz के लिए आवश्यक गति = 225 RPM',
        bn: 'মেরুসংখ্যা P = ৩২ (১৬ জোড়া মেরু); ৬০ Hz-এর জন্য প্রয়োজনীয় গতি = ২২৫ RPM'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Hydroelectric Power Alternators: Large salient-pole multipole synchronous generators generate 50/60 Hz bulk electric power driven by water turbines.',
      'Thermal & Nuclear Turbo-Generators: 2-pole and 4-pole high-speed cylindrical rotors driven by steam turbines run at 3000 RPM (50 Hz) or 3600 RPM (60 Hz).',
      'Wind Turbine Synchronous & DFIG Alternators: Gearbox-coupled or direct-drive permanent-magnet generators generate variable AC converted into grid-compliant power.',
      'Automotive Alternators: Compact 3-phase AC generators driven by the engine belt supply vehicle electrical systems after internal diode bridge rectification.',
      'Portable Emergency Backup Generators: Single-phase petrol/diesel generators provide reliable 230 V, 50 Hz power for hospitals, homes, and construction sites.'
    ],
    hi: [
      'जलविद्युत स्टेशन अल्टरनेटर: पानी के टर्बाइनों द्वारा संचालित बड़े बहु-ध्रुवीय तुल्यकालिक जनरेटर राष्ट्रीय ग्रिड के लिए थोक बिजली बनाते हैं।',
      'थर्मल एवं परमाणु टर्बो-जनरेटर: भाप टर्बाइनों द्वारा 3000 RPM पर चलने वाले बेलनाकार 2-ध्रुव उच्च गति अल्टरनेटर।',
      'पवन टर्बाइन जनरेटर: पवन ऊर्जा को प्रत्यावर्ती धारा में बदलकर आधुनिक ग्रिड में बिजली भेजने वाले स्थायी चुंबक जनरेटर।',
      'ऑटोमोटिव अल्टरनेटर: इंजन बेल्ट द्वारा संचालित 3-फेज जनरेटर जो वाहन की बैटरी चार्ज करने हेतु आंतरिक डायोड से डीसी प्रदान करते हैं।',
      'पोर्टेबल आपातकालीन जनरेटर: अस्पतालों और घरों के लिए विश्वसनीय 230 V, 50 Hz आपूर्ति देने वाले पेट्रोल/डीजल जनरेटर सेट।'
    ],
    bn: [
      'জলবিদ্যুৎ কেন্দ্র অল্টারনেটর: পানির টারবাইন চালিত বহু-মেরুবিশিষ্ট সিনক্রোনাস জেনারেটর যা গ্রিডের জন্য ৫০/৬০ Hz বিদ্যুৎ উৎপাদন করে।',
      'তাপ ও পারমাণবিক টার্বো-জেনারেটর: বাষ্প টারবাইন দ্বারা ৩০০০ RPM গতিতে আবর্তিত উচ্চগতির ২-মেরু বিশিষ্ট বিশাল বিদ্যুৎ জেনারেটর।',
      'বায়ুকল জেনারেটর: বাতাসের গতিশক্তিকে অল্টারনেটিং কারেন্টে রূপান্তর করে গ্রিডে বিদ্যুৎ সরবরাহকারী পার্মানেন্ট ম্যাগনেট অল্টারনেটর।',
      'অটোমোবাইল অল্টারনেটর: গাড়ির ইঞ্জিনে সংযুক্ত ৩-ফেজ এসি জেনারেটর যা ডায়োডের মাধ্যমে ডিসি বানিয়ে ব্যাটারি চার্জ রাখে।',
      'বহনযোগ্য ইমার্জেন্সি জেনারেটর: হাসপাতাল ও বাসাবাড়িতে বিদ্যুৎ বিভ্রাটের সময় নিরবচ্ছিন্ন ২৩০ V, ৫০ Hz বিদ্যুৎ সরবরাহকারী ডিজেল/পেট্রোল সেট।'
    ]
  },
  importantPoints: {
    en: [
      'Operating principle: Electromagnetic dynamic induction where conductor loop cuts magnetic lines of force (e = 2BLv·sinθ).',
      'Synchronous frequency equation: f = (P · N) / 120, connecting grid electrical frequency directly to shaft speed (RPM) and pole count.',
      'Zero EMF condition: When the coil plane is perpendicular to magnetic flux lines (θ = 0° or 180°), flux linkage is maximum but rate of cutting dΦ/dt is zero.',
      'Peak EMF condition: When the coil plane is parallel to magnetic flux lines (θ = 90° or 270°), conductors cut flux at maximum velocity perpendicular to the field.',
      'Slip rings preserve alternating waveform: Continuous metal rings maintain permanent connection with the same coil terminals, delivering the true alternating sinusoid to stationary brushes.',
      'Commercial alternators invert topology: Stators hold high-voltage AC armature windings, while low-voltage DC electromagnets rotate on the rotor to avoid heavy, sparking slip rings.'
    ],
    hi: [
      'कार्य सिद्धांत: विद्युत चुंबकीय गतिक प्रेरण जहां चालक लूप चुंबकीय बल रेखाओं को काटता है (e = 2BLv·sinθ)।',
      'तुल्यकालिक आवृत्ति सूत्र: f = (P · N) / 120, जो ग्रिड आवृत्ति को सीधे शाफ्ट RPM और ध्रुवों की संख्या से जोड़ता है।',
      'शून्य ईएमएफ स्थिति: जब कॉइल चुंबकीय बल रेखाओं के लंबवत (θ = 0°) होती है, तो फ्लक्स जुड़ाव अधिकतम होता है परंतु काटने की दर dΦ/dt शून्य होती है।',
      'शिखर ईएमएफ स्थिति: जब कॉइल चुंबकीय क्षेत्र के समानांतर (θ = 90°) होती है, तो चालक लंबवत रूप से अधिकतम वेग से बल रेखाओं को काटते हैं।',
      'स्लिप रिंग्स प्रत्यावर्ती तरंग को सुरक्षित रखती हैं: दो सतत छल्ले कॉइल सिरों से स्थायी संपर्क बनाए रखते हैं, जिससे लोड में शुद्ध ज्यावक्रीय एसी प्राप्त होती है।',
      'व्यावसायिक अल्टरनेटर की उल्टी संरचना: उच्च वोल्टेज आर्मेचर स्टेटर पर स्थिर रहता है, जबकि कम वोल्टेज वाला डीसी इलेक्ट्रोमैग्नेट रोटर पर घूमता है।'
    ],
    bn: [
      'কাজের মূলনীতি: গতিশীল ইলেক্ট্রোম্যাগনেটিক আবেশ যেখানে পরিবাহী লুপ চৌম্বক বলরেখা ছেদ করে ভোল্টেজ তৈরি করে (e = 2BLv·sinθ)।',
      'সিনক্রোনাস কম্পাঙ্ক সমীকরণ: f = (P · N) / ১২০, যা বৈদ্যুতিক কম্পাঙ্ককে সরাসরি শ্যাফটের RPM এবং মেরুসংখ্যার সাথে সম্পর্কিত করে।',
      'শূন্য ইএমএফ এর অবস্থান: যখন কয়েলের তল চৌম্বক বলরেখার সাথে লম্ব (θ = ০°) থাকে, ফ্লাক্স সর্বাধিক হলেও ফ্লাক্স ছেদের হার dΦ/dt শূন্য হয়।',
      'সর্বোচ্চ ইএমএফ এর অবস্থান: যখন কয়েলের তল বলরেখার সমান্তরাল (θ = ৯০°) থাকে, পরিবাহী তারগুলো সর্বোচ্চ বেগে বলরেখা ছেদ করে।',
      'স্লিপ রিং অল্টারনেটিং প্রবাহ অক্ষুণ্ণ রাখে: দুটি অবিচ্ছিন্ন ব্রাস রিং কয়েলের দুই প্রান্তের স্থায়ী সংযোগ বজায় রেখে সাইনুসয়ডাল এসি আউটপুট নিশ্চিত করে।',
      'শিল্পক্ষেত্রের অল্টারনেটরে বিপরীত বিন্যাস: উচ্চ-ভোল্টেজ আর্মেচারকে স্থির স্টেটরে রাখা হয় এবং কম-ভোল্টেজের ডিসি ফিল্ড চুম্বককে রোটরে ঘোরানো হয়।'
    ]
  },
  commonMistakes: {
    en: [
      'Confusing magnetic flux Φ with rate of change of flux dΦ/dt: Believing EMF is maximum when flux enclosed by the coil is maximum (in reality, induced EMF is zero when flux is maximum).',
      'Forgetting the 120 constant in f = PN/120: Using 60 instead of 120 when speed is expressed in revolutions per minute (RPM) and P represents total poles.',
      'Confusing peak voltage E_m with RMS voltage E_rms: Generators produce peak voltage E_m = NBAω, but AC voltmeters and rating plates designate RMS values (E_m / √2).',
      'Believing slip rings rectify AC into DC: Continuous slip rings preserve AC; rectification requires a segmented commutator or solid-state diodes.'
    ],
    hi: [
      'चुंबकीय फ्लक्स Φ और फ्लक्स परिवर्तन की दर dΦ/dt में भ्रम: यह मानना कि जब फ्लक्स अधिकतम होता है तब ईएमएफ अधिकतम होता है (वास्तव में तब ईएमएफ शून्य होता है)।',
      'f = PN/120 में 120 नियतांक भूलना: RPM में गति होने पर 60 का उपयोग करना जबकि P कुल ध्रुवों की संख्या है।',
      'शिखर वोल्टेज E_m और RMS वोल्टेज E_rms में भ्रम: ज्यावक्रीय आउटपुट में RMS मान शिखर मान का 1/√2 (0.707) होता है।',
      'यह सोचना कि स्लिप रिंग एसी को डीसी में बदलती है: स्लिप रिंग शुद्ध एसी देती है; डीसी प्राप्त करने के लिए स्प्लिट-रिंग कम्यूटेटर आवश्यक है।'
    ],
    bn: [
      'চৌম্বক ফ্লাক্স Φ এবং ফ্লাক্স পরিবর্তনের হার dΦ/dt-র মাঝে গোলমাল: ভাবা যে ফ্লাক্স সর্বোচ্চ হলেই ভোল্টেজ সর্বোচ্চ হবে (প্রকৃতপক্ষে তখন আবিষ্ট ভোল্টেজ শূন্য হয়)।',
      'f = PN/১২০ সূত্রে ১২০-এর ভুল প্রয়োগ: ঘূর্ণনগতি RPM-এ থাকলে ৬০ দিয়ে ভাগ করার ভুল, যেখানে P হলো মোট মেরুসংখ্যা।',
      'শীর্ষ ভোল্টেজ E_m ও RMS ভোল্টেজের বিভ্রাট: সমীকরণ সরাসরি শীর্ষ ভোল্টেজ NBAω দেয়, কিন্তু পরিমাপক মিটারগুলো RMS (E_m / √২) মান প্রদর্শন করে।',
      'স্লিপ রিং এসিকে ডিসিতে রূপান্তরিত করে বলে ভুল ভাবা: অবিচ্ছিন্ন স্লিপ রিং খাঁটি এসি সরবরাহ করে; ডিসি পেতে হলে স্প্লিট-রিং কমিউটেটর আবশ্যক।'
    ]
  },
  keyTakeaways: {
    en: [
      'An AC generator converts mechanical rotary kinetic energy into sinusoidal electrical power through electromagnetic induction.',
      'The generated voltage waveform is given by e(t) = E_m · sin(ωt), with peak voltage E_m = N · B · A · ω.',
      'Electrical frequency is locked to mechanical rotational speed and pole count by the synchronous relation f = PN/120.',
      'Continuous copper slip rings with stationary carbon brushes allow polarity reversal every half cycle, delivering alternating current to the load.',
      'Modern high-capacity power plant alternators feature stationary armatures and rotating magnetic fields for superior electrical insulation and mechanical robustness.'
    ],
    hi: [
      'एसी जनरेटर विद्युत चुंबकीय प्रेरण के माध्यम से यांत्रिक घूर्णन ऊर्जा को ज्यावक्रीय विद्युत ऊर्जा में परिवर्तित करता है।',
      'उत्पन्न वोल्टेज तरंग e(t) = E_m · sin(ωt) होती है, जहां शिखर वोल्टेज E_m = N · B · A · ω है।',
      'विद्युत आवृत्ति शाफ्ट की घूर्णन गति और ध्रुवों की संख्या से सीधे जुड़ी होती है: f = PN/120।',
      'सतत स्लिप रिंग्स प्रत्येक आधे चक्र में ध्रुवीयता बदलने की अनुमति देती हैं, जिससे बाहरी लोड को प्रत्यावर्ती धारा मिलती है।',
      'आधुनिक बिजली संयंत्रों के अल्टरनेटरों में बेहतर इंसुलेशन के लिए स्थिर स्टेटर आर्मेचर और घूमने वाले चुंबकीय क्षेत्र का उपयोग किया जाता है।'
    ],
    bn: [
      'এসি জেনারেটর ইলেক্ট্রোম্যাগনেটিক আবেশের মাধ্যমে যান্ত্রিক ঘূর্ণন শক্তিকে সাইনুসয়ডাল বৈদ্যুতিক শক্তিতে রূপান্তর করে।',
      'উৎপন্ন ভোল্টেজ তরঙ্গমালা e(t) = E_m · sin(ωt), যার সর্বোচ্চ শীর্ষ মান E_m = N · B · A · ω।',
      'উৎপন্ন বিদ্যুৎ কম্পাঙ্ক রোটরের ঘূর্ণনগতি ও মেরুসংখ্যার সাথে সরাসরি সম্পর্কিত: f = PN/১২০।',
      'অবিচ্ছিন্ন স্লিপ রিং ও কার্বন ব্রাশ প্রতি অর্ধ-চক্রে পোলারিটি পরিবর্তনের ধারাবাহিকতা বজায় রেখে বহিস্থ লোডে এসি কারেন্ট পাঠায়।',
      'আধুনিক বিদ্যুৎ উৎপাদন কেন্দ্রের বিশাল অল্টারনেটরে উন্নত নিরোধক নিরাপত্তার সুবিধার্থে আর্মেচারকে স্থির এবং চুম্বককে ঘূর্ণনশীল রাখা হয়।'
    ]
  },
  mcqs: [
    {
      id: 'q-acgen-1',
      question: {
        en: 'At what angular position of the rotating loop is the instantaneous induced EMF at its maximum peak value?',
        hi: 'घूर्णन लूप की किस कोणीय स्थिति पर तात्कालिक प्रेरित ईएमएफ अपने अधिकतम शिखर मान पर होता है?',
        bn: 'ঘূর্ণনশীল লুপের কোন কৌণিক অবস্থানে তাৎক্ষণিক আবিষ্ট ইএমএফ এর মান সর্বোচ্চ শিখরে পৌঁছায়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'When the coil plane is perpendicular to magnetic field lines (θ = 0°)', hi: 'जब कॉइल का तल चुंबकीय बल रेखाओं के लंबवत हो (θ = 0°)', bn: 'যখন কয়েলের তল চৌম্বক বলরেখার সাথে লম্বভাবে থাকে (θ = ০°)' } },
        { id: 'opt-2', text: { en: 'When the coil plane is parallel to magnetic field lines (θ = 90°)', hi: 'जब कॉइल का तल चुंबकीय बल रेखाओं के समानांतर हो (θ = 90°)', bn: 'যখন কয়েলের তল চৌম্বক বলরেখার সমান্তরাল থাকে (θ = ৯০°)' } },
        { id: 'opt-3', text: { en: 'When flux linkage through the coil is at its maximum', hi: 'जब कॉइल से संबद्ध कुल फ्लक्स अधिकतम हो', bn: 'যখন কয়েলের মধ্য দিয়ে অতিক্রান্ত ফ্লাক্স সর্বোচ্চ হয়' } },
        { id: 'opt-4', text: { en: 'At θ = 45° only', hi: 'केवल θ = 45° पर', bn: 'শুধুমাত্র θ = ৪৫° অবস্থানে' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'When the coil plane is parallel to the magnetic field (θ = 90°), the conductors move perpendicular to lines of force at maximum velocity, cutting flux at the maximum rate (dΦ/dt is maximum), giving e = E_m.',
        hi: 'जब कॉइल चुंबकीय क्षेत्र के समानांतर होती है (θ = 90°), तो चालक बल रेखाओं को लंबवत रूप से अधिकतम वेग से काटते हैं, जिससे dΦ/dt अधिकतम होता है और e = E_m प्राप्त होता है।',
        bn: 'কয়েলের তল যখন চৌম্বক ক্ষেত্রের সমান্তরাল থাকে (θ = ৯০°), তখন পরিবাহী তারগুলো সর্বোচ্চ গতিতে বলরেখা ছেদ করে (dΦ/dt সর্বোচ্চ), ফলে e = E_m হয়।'
      }
    },
    {
      id: 'q-acgen-2',
      question: {
        en: 'A 4-pole AC synchronous generator rotates at 1,500 RPM. What is the frequency of the generated AC voltage?',
        hi: 'एक 4-ध्रुवीय एसी जनरेटर 1,500 RPM पर घूमता है। उत्पन्न एसी वोल्टेज की आवृत्ति क्या होगी?',
        bn: 'একটি ৪-মেরু বিশিষ্ট এসি জেনারেটর ১,৫০০ RPM গতিতে ঘুরছে। উৎপন্ন এসি ভোল্টেজের কম্পাঙ্ক কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '25 Hz', hi: '25 Hz', bn: '২৫ Hz' } },
        { id: 'opt-2', text: { en: '50 Hz', hi: '50 Hz', bn: '৫০ Hz' } },
        { id: 'opt-3', text: { en: '60 Hz', hi: '60 Hz', bn: '৬০ Hz' } },
        { id: 'opt-4', text: { en: '100 Hz', hi: '100 Hz', bn: '১০০ Hz' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'Using f = (P · N_s) / 120: f = (4 × 1500) / 120 = 6000 / 120 = 50 Hz.',
        hi: 'सूत्र f = (P · N_s) / 120 के अनुसार: f = (4 × 1500) / 120 = 50 Hz।',
        bn: 'f = (P · N_s) / ১২০ সূত্রানুসারে: f = (৪ × ১৫০০) / ১২০ = ৫০ Hz।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch10-l11-1',
      question: {
        en: 'A rectangular coil of 100 turns, length 0.3 m, and width 0.2 m rotates at 3,000 RPM in a uniform magnetic field of 0.5 T. Calculate the peak value (E_m) and RMS value (E_rms) of the induced EMF.',
        hi: '100 फेरों, 0.3 m लंबाई और 0.2 m चौड़ाई वाली आयताकार कॉइल 0.5 T के समान चुंबकीय क्षेत्र में 3,000 RPM पर घूमती है। प्रेरित ईएमएफ का शिखर मान (E_m) और आरएमएस मान (E_rms) ज्ञात कीजिए।',
        bn: '১০০ পাকের একটি আয়তাকার কয়েলের দৈর্ঘ্য ০.৩ মিটার এবং প্রস্থ ০.২ মিটার। এটি ০.৫ টেসলা সুষম চৌম্বক ক্ষেত্রে ৩,০০০ RPM গতিতে ঘুরলে আবিষ্ট ভোল্টেজের শীর্ষ মান (E_m) এবং RMS মান (E_rms) নির্ণয় করুন।'
      },
      hint: {
        en: 'Area A = l × w = 0.06 m². Angular speed ω = 2π × (3000 / 60) = 100π rad/s. E_m = N · B · A · ω. E_rms = E_m / √2.',
        hi: 'क्षेत्रफल A = 0.06 m²। ω = 2π × (3000 / 60) = 314.16 rad/s। E_m = N · B · A · ω। E_rms = E_m / √2।',
        bn: 'ক্ষেত্রফল A = ০.০৬ m²। ω = ৩১৪.১৬ rad/s। E_m = N · B · A · ω। E_rms = E_m / √২।'
      },
      answerKey: {
        en: 'E_m = 100 × 0.5 × 0.06 × (100π) = 300π ≈ 942.48 V. E_rms = 942.48 / √2 ≈ 666.4 V.',
        hi: 'E_m = 100 × 0.5 × 0.06 × 314.16 = 942.48 V। E_rms = 942.48 / 1.414 = 666.4 V।',
        bn: 'E_m = ১০০ × ০.৫ × ০.০৬ × ৩১৪.১৬ = ৯৪২.৪৮ ভোল্ট। E_rms = ৯৪২.৪৮ / ১.৪১৪ = ৬৬৬.৪ ভোল্ট।'
      }
    }
  ]
};
