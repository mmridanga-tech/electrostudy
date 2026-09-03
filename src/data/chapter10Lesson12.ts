import { Lesson } from '../types';

export const LESSON_ELEMENTARY_DC_GENERATOR: Lesson = {
  id: 'lsn-ch10-elementary-dc-generator',
  topicId: 'ch10-elementary-dc-generator',
  chapterId: 'ch-em-induction',
  order: 12,
  title: {
    en: 'Elementary DC Generator: Split-Ring Commutator & Mechanical Rectification',
    hi: 'प्राथमिक डीसी जनरेटर: स्प्लिट-रिंग कम्यूटेटर एवं यांत्रिक दिsectionsष्टकरण',
    bn: 'মৌলিক ডিসি জেনারেটর: স্প্লিট-রিং কমিউটেটর ও যান্ত্রিক রেকটিফিকেশন'
  },
  description: {
    en: 'Principles of direct-current generation, the split-ring commutator acting as a mechanical inverter/rectifier, commutation action at the Magnetic Neutral Plane (MNP), and pulsating DC output.',
    hi: 'दिष्ट धारा (DC) उत्पत्ति के सिद्धांत, यांत्रिक रेक्टिफायर के रूप में स्प्लिट-रिंग कम्यूटेटर, चुंबकीय उदासीन तल (MNP) पर कम्यूटेशन क्रिया एवं स्पंदित डीसी आउटपुट का गहन अध्ययन।',
    bn: 'ডিসি বিদ্যুৎ উৎপাদনের মূলনীতি, মেকানিক্যাল রেকটিফায়ার হিসেবে স্প্লিট-রিং কমিউটেটর, ম্যাগনেটিক নিউট্রাল প্লেন (MNP)-এ কম্যুটেশন প্রক্রিয়া এবং পালসেটিং ডিসির বিশদ আলোচনা।'
  },
  estimatedMinutes: 30,
  easyExplanation: {
    en: "Inside every DC generator, the rotating coil actually produces alternating current (AC)! So how do we get direct current (DC) out of it? The secret is the 'split-ring commutator'—a metal ring sliced in half into two insulated semicircular shoes. Fixed carbon brushes press against these shoes. Exactly when the coil flips over and the induced voltage tries to reverse its direction, the spinning shoes swap which brush they touch! This mechanical switch flips the negative half-cycles upright, turning a back-and-forth AC wave into a pulsating, single-direction direct current (DC).",
    hi: 'हर डीसी जनरेटर के अंदर घूमती हुई कॉइल वास्तव में प्रत्यावर्ती धारा (AC) ही बनाती है! तो हमें बाहर एकदिशीय धारा (DC) कैसे मिलती है? इसका रहस्य है "स्प्लिट-रिंग कम्यूटेटर" (विभक्त वलय)। यह धातु का एक छल्ला होता है जिसे बीच से काटकर दो अलग-अलग अर्धवृत्तों में बांट दिया जाता है। ठीक उस क्षण जब कॉइल उल्टी होती है और करंट की दिशा बदलने वाली होती है, कम्यूटेटर के खंड अपने संपर्क वाले ब्रश को आपस में बदल लेते हैं! यह यांत्रिक स्विच उल्टे चक्र को सीधा कर देता है, जिससे बाहर हमेशा एक ही दिशा में बहने वाली स्पंदित डीसी मिलती है।',
    bn: 'বাস্তবে প্রতিটি ডিসি জেনারেটরের ভেতরে তৈরি হওয়া বিদ্যুৎপ্রবাহ সর্বদা এসি (AC)! তাহলে বাইরে একমুখী ডিসি (DC) পাওয়া যায় কীভাবে? এর চাবিকাঠি হলো "স্প্লিট-রিং কমিউটেটর"। এটি একটি দুই ভাগে বিভক্ত তামার রিং। কয়েলটি ঘুরতে ঘুরতে যে মুহূর্তে তার ভোল্টেজের দিক পরিবর্তন করতে চায়, ঠিক সেই মুহূর্তে ঘূর্ণায়মান কমিউটেটর খণ্ড দুটি স্থির কার্বন ব্রাশের সাথে নিজেদের সংযোগ অদলবদল করে নেয়! এই চতুর যান্ত্রিক সুইচের মাধ্যমে ঋণাত্মক অর্ধ-চক্রটি ধনাত্মকে রূপান্তরিত হয়ে একমুখী পালসেটিং ডিসি ভোল্টেজ উৎপন্ন করে।'
  },
  detailedExplanation: {
    en: `1. The Fundamental Paradox of DC Machines:
All rotating electromagnetic machinery inherently generates alternating EMF (e = -dΦ/dt or e = B·l·v·sin θ) inside the armature conductors because conductors alternately cut North and South magnetic polarities.
A 'DC Generator' is fundamentally an AC alternator equipped with a mechanical inverter/rectifier: the Commutator.

2. Structure of the Split-Ring Commutator:
- A single copper cylinder split into two insulated semicircular segments (Segment 1 and Segment 2), insulated from each other by a high-dielectric mica spacer.
- Segment 1 is permanently soldered to Armature Lead A.
- Segment 2 is permanently soldered to Armature Lead B.
- Two stationary carbon brushes (Brush X and Brush Y) are mounted diametrically opposite each other, pressing firmly against the rotating segments.
- The brushes are aligned along the Magnetic Neutral Plane (MNP).

3. The Commutation Process Across One Full Revolution:
- First Half-Cycle (0° < θ < 180°):
  Side A moves downwards under the North pole, and Side B moves upwards under the South pole. By Fleming's Right-Hand Rule, current flows out of Lead A into Segment 1, which contacts Brush X (making Brush X positive, +). Current returns through Brush Y into Segment 2 and Lead B (making Brush Y negative, -).
- Commutation Instant (θ = 180°, MNP):
  The coil sides move parallel to magnetic field lines (v || B), cutting zero flux lines. The induced EMF momentarily drops to zero (e = 0). At this exact geometric instant, the mica insulation bridge bridges the gap between the brushes. The brush briefly bridges both commutator segments without short-circuiting any voltage, because e = 0.
- Second Half-Cycle (180° < θ < 360°):
  Side A now moves upwards under the South pole, and Side B moves downwards under the North pole. The internal current in the loop reverses direction!
  However, Commutator Segment 1 has rotated away from Brush X and now contacts Brush Y!
  Simultaneously, Segment 2 now contacts Brush X!
  Therefore, external Brush X STILL collects positive current from Segment 2, and Brush Y STILL acts as the negative return.
  Result: The output voltage across the load never drops below zero—it is unidirectional pulsating DC: e_dc(t) = |E_m · sin(ωt)|.

4. Mathematical Analysis of Commutated Waveform:
The instantaneous terminal voltage is the full-wave rectified envelope:
  v_L(t) = E_m · |sin(ωt)|
The average DC output voltage is:
  V_dc,avg = (1/π) · ∫[0 to π] E_m · sin(θ) · dθ = (2 · E_m) / π ≈ 0.6366 · E_m
The RMS value of the output is:
  V_rms = E_m / √2 ≈ 0.7071 · E_m
The Ripple Factor is:
  RF = √[(V_rms / V_dc,avg)² - 1] = √[(0.7071 / 0.6366)² - 1] = √[1.2337 - 1] = 0.4834 (48.3%)

5. Smoothing Ripple in Practical Multi-Segment Machines:
A single loop produces 48.3% ripple, unsuitable for sensitive DC equipment.
Practical DC machines employ:
- Distributed armatures with many coils evenly spaced around the armature circumference (e.g., 24, 48, or 72 slots).
- Multi-segment commutators where each coil is connected to adjacent commutator bars.
- When multiple sinusoidal outputs displaced by angle 2π/N are commutated together, the ripples overlap, producing an almost perfectly flat DC voltage line with less than 1% residual ripple!`,

    hi: `1. डीसी मशीनों का मूलभूत सिद्धांत:
सभी विद्युत जनरेटरों के आर्मेचर चालकों के भीतर स्वाभाविक रूप से प्रत्यावर्ती ईएमएफ (AC) ही उत्पन्न होता है। डीसी जनरेटर वास्तव में एक एसी जनरेटर ही है जिसमें एक घूर्णनशील यांत्रिक रेक्टिफायर—कम्यूटेटर (Commutator)—लगा होता है।

2. स्प्लिट-रिंग कम्यूटेटर की कार्यप्रणाली:
- इसमें एक पीतल या तांबे की रिंग को दो अर्ध-भागों (Segments 1 और 2) में काटा जाता है जिनके बीच अभ्रक (Mica) का इंसुलेशन होता है।
- ब्रश हमेशा चुंबकीय उदासीन तल (MNP) पर स्थापित किए जाते हैं जहाँ प्रेरित ईएमएफ शून्य होता है।
- पहले 180° में, सिरा A सेगमेंट 1 के माध्यम से ब्रश (+) को बिजली देता है।
- जब कॉइल आधा चक्कर पूरा करके अपनी आंतरिक धारा की दिशा बदलती है, तो सेगमेंट 2 घूमकर उसी ब्रश (+) के संपर्क में आ जाता है!
- इस प्रकार बाहरी लोड में धारा की दिशा कभी नहीं बदलती और हमें एकदिशीय स्पंदित डीसी e(t) = |E_m sin(ωt)| प्राप्त होती है।

3. औसत डीसी वोल्टेज:
  V_dc,avg = (2 · E_m) / π ≈ 0.637 · E_m
रिपल कम करने के लिए आधुनिक मोटरों और जनरेटरों में कई कुंडलियां और कई कम्यूटेटर खंड लगाए जाते हैं।`,

    bn: `১. ডিসি জেনারেটরের মূলনীতি:
যেকোনো জেনারেটরের আর্মেচারের অভ্যন্তরে সর্বদা এসি (AC) ভোল্টেজ আবিষ্ট হয়। স্প্লিট-রিং কমিউটেটর একটি মেকানিক্যাল রেকটিফায়ার হিসেবে কাজ করে এই অভ্যন্তরীণ এসি-কে বহিস্থ সার্কিটে একমুখী ডিসি (DC)-তে রূপান্তর করে।

২. কম্যুটেশনের ক্রিয়া:
কয়েলটি যখন ম্যাগনেটিক নিউট্রাল প্লেন (MNP) অতিক্রম করে, তখন আবিষ্ট ভোল্টেজ শূন্য হয়। ঠিক তখনই কমিউটেটর সেগমেন্টগুলো কার্বন ব্রাশের সাথে নিজেদের অবস্থান পরিবর্তন করে নেয়। ফলে বহিস্থ লোডে বিদ্যুৎপ্রবাহের দিক সর্বদা একই থাকে।
গড় ডিসি ভোল্টেজ:
  V_dc,avg = (2 · E_m) / π ≈ ০.৬৩৭ · E_m`
  },
  formulas: [
    {
      id: 'f-dc-gen-average-voltage',
      symbol: 'V_dc,avg',
      expression: 'V_dc,avg = (2 · E_m) / π ≈ 0.637 · E_m',
      title: {
        en: 'Average DC Voltage of Single-Loop Commutated Generator',
        hi: 'सिंगल-लूप कम्यूटेटेड जनरेटर का औसत डीसी वोल्टेज',
        bn: 'সিঙ্গেল-লুপ কমিউটেটেড জেনারেটরের গড় ডিসি ভোল্টেজ'
      },
      description: {
        en: 'Mean DC output voltage obtained by full-wave mechanical rectification with a two-segment commutator',
        hi: 'दो-खंड कम्यूटेटर द्वारा पूर्ण-तरंग यांत्रिक दिष्टकरण से प्राप्त औसत डीसी आउटपुट वोल्टेज',
        bn: 'দ্বি-খণ্ড কমিউটেটর দ্বারা পূর্ণ-তরঙ্গ যান্ত্রিক রেকটিফিকেশনের মাধ্যমে প্রাপ্ত গড় ডিসি ভোল্টেজ'
      },
      variables: [
        { symbol: 'V_dc,avg', name: { en: 'Average DC output (V)', hi: 'औसत डीसी वोल्टेज (V)', bn: 'গড় ডিসি ভোল্টেজ (V)' } },
        { symbol: 'E_m', name: { en: 'Peak induced voltage (V)', hi: 'शिखर प्रेरित वोल्टेज (V)', bn: 'শীর্ষ আবিষ্ট ভোল্টেজ (V)' } }
      ]
    },
    {
      id: 'f-dc-gen-general-emf-equation',
      symbol: 'E_g',
      expression: 'E_g = (P · Φ · Z · N) / (60 · A)',
      title: {
        en: 'General DC Generator EMF Equation',
        hi: 'डीसी जनरेटर का सामान्य ईएमएफ समीकरण',
        bn: 'ডিসি জেনারেটরের সাধারণ ইএমএফ সমীকরণ'
      },
      description: {
        en: 'Generated voltage in practical multi-conductor DC machines (Lap and Wave windings)',
        hi: 'व्यावहारिक बहु-चालक डीसी मशीनों में उत्पन्न वोल्टेज (लैप एवं वेव वाइंडिंग)',
        bn: 'বাস্তব বহু-পরিবাহী ডিসি মেশিনে উৎপন্ন ভোল্টেজ (ল্যাপ ও ওয়েভ ওয়াইন্ডিং)'
      },
      variables: [
        { symbol: 'E_g', name: { en: 'Generated DC voltage (V)', hi: 'उत्पन्न डीसी वोल्टेज (V)', bn: 'উৎপন্ন ডিসি ভোল্টেজ (V)' } },
        { symbol: 'P', name: { en: 'Number of field poles', hi: 'ध्रुवों की संख्या', bn: 'মেরুর সংখ্যা' } },
        { symbol: 'Φ', name: { en: 'Flux per pole (Webers)', hi: 'प्रति ध्रुव फ्लक्स (Wb)', bn: 'প্রতি মেরুতে ফ্লাক্স (Wb)' } },
        { symbol: 'Z', name: { en: 'Total active armature conductors', hi: 'कुल सक्रिय आर्मेचर चालक', bn: 'মোট সক্রিয় আর্মেচার কন্ডাক্টর' } },
        { symbol: 'N', name: { en: 'Armature rotational speed (RPM)', hi: 'घूर्णन गति (RPM)', bn: 'ঘূর্ণন গতি (RPM)' } },
        { symbol: 'A', name: { en: 'Parallel armature paths (A = P for Lap, A = 2 for Wave)', hi: 'समानांतर पथों की संख्या', bn: 'সমান্তরাল পথের সংখ্যা' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-mnp-brush-alignment',
      title: {
        en: 'Magnetic Neutral Plane (MNP) & Sparkless Commutation',
        hi: 'चुंबकीय उदासीन तल (MNP) एवं स्पार्क-रहित कम्यूटेशन',
        bn: 'ম্যাগনেটিক নিউট্রাল প্লেন (MNP) ও স্পার্কহীন কম্যুটেশন'
      },
      content: {
        en: `Why MUST brushes be placed along the Magnetic Neutral Plane (MNP)?
1. The MNP is defined as the geometric plane perpendicular to magnetic field lines where the rate of flux cutting by conductors is exactly zero (dΦ/dt = 0).
2. Consequently, the motional EMF induced in the coil when its conductors pass through the MNP is precisely 0 Volts.
3. As the split-ring segments rotate, each brush briefly touches both segments simultaneously (bridging the mica gap).
4. If this transition occurs at the MNP, the bridged coil has e = 0 V, so the short-circuit circulating current is zero, preventing destructive sparking.
5. If brushes are shifted away from the MNP, a significant voltage exists across the shorted coil, creating intense electrical arcs, pitting the commutator copper, and causing brush wear.`,
        hi: `ब्रश को हमेशा चुंबकीय उदासीन तल (MNP) पर क्यों रखा जाना चाहिए?
1. MNP वह तल है जो चुंबकीय बल रेखाओं के लंबवत होता है जहाँ चालकों द्वारा फ्लक्स काटने की दर शून्य (dΦ/dt = 0) होती है।
2. जब कॉइल MNP से गुजरती है, तो उसमें प्रेरित ईएमएफ ठीक 0 वोल्ट होता है।
3. घूर्णन के दौरान जब ब्रश कम्यूटेटर के दोनों खंडों को एक साथ छूता है, तो कॉइल क्षण भर के लिए शॉर्ट-सर्किट होती है।
4. यदि यह क्रिया MNP पर होती है, तो वोल्टेज शून्य होने के कारण कोई करंट स्पार्क नहीं बनता।
5. यदि ब्रश MNP से हटे हों, तो कॉइल में वोल्टेज होने से भारी स्पार्किंग होती है जिससे कम्यूटेटर जल सकता है।`,
        bn: `ব্রাশ কেন সর্বদা MNP-তে স্থাপন করতে হয়?
১. MNP হলো বলরেখার সাথে লম্ব এমন একটি তল যেখানে কন্ডাক্টর দ্বারা ফ্লাক্স ছেদের হার শূন্য (e = ০ V)।
২. কম্যুটেশনের সময় ব্রাশ যখন দুটি সেগমেন্টকে একসাথে স্পর্শ করে, তখন কয়েল শর্ট-সার্কিট হলেও ভোল্টেজ শূন্য থাকায় কোনো ক্ষতিকর স্পার্কিং সৃষ্টি হয় না।`
      },
      schematicId: 'circuit-ch10-dc-generator-split-commutator'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-dcgen-1',
      problem: {
        en: 'A 2-pole elementary single-loop DC generator has a coil of N = 250 turns enclosing an area A = 0.04 m². It rotates in a uniform magnetic field of flux density B = 0.6 T at a speed of 1200 RPM. A 2-segment split-ring commutator collects the output. Determine: (a) The angular velocity ω, (b) The peak induced EMF E_m, (c) The average DC voltage E_dc delivered across the brushes, and (d) The ripple frequency of the output voltage.',
        hi: 'एक 2-ध्रुव एकल-लूप डीसी जनरेटर में N = 250 फेरों वाली कॉइल है जिसका क्षेत्रफल A = 0.04 m² है। यह 0.6 T के एकसमान चुंबकीय क्षेत्र में 1200 RPM पर घूमती है। 2-खंडीय स्प्लिट-रिंग कम्यूटेटर आउटपुट एकत्र करता है। ज्ञात कीजिए: (a) कोणीय वेग ω, (b) शिखर ईएमएफ E_m, (c) ब्रशों पर प्राप्त औसत डीसी वोल्टेज E_dc, तथा (d) आउटपुट वोल्टेज की रिपल आवृत्ति।',
        bn: 'একটি ২-মেরু বিশিষ্ট সিঙ্গেল-লুপ ডিসি জেনারেটরের কয়েলের পাকসংখ্যা N = ২৫০ এবং ক্ষেত্রফল A = ০.০৪ m²। এটি ০.৬ T সুষম চৌম্বক ক্ষেত্রে ১২০০ RPM গতিতে আবর্তিত হয়। ২-খণ্ড বিশিষ্ট স্প্লিট-রিং কমিউটেটর আউটপুট সংগ্রহ করে। নির্ণয় কর: (a) কৌণিক বেগ ω, (b) শীর্ষ আবিষ্ট ইএমএফ E_m, (c) ব্রাশের দুই প্রান্তে প্রাপ্ত গড় ডিসি ভোল্টেজ E_dc, এবং (d) আউটপুট ভোল্টেজের রিপল কম্পাঙ্ক।'
      },
      givenValues: {
        en: 'N = 250, A = 0.04 m², B = 0.6 T, N_speed = 1200 RPM, P = 2 poles',
        hi: 'N = 250, A = 0.04 m², B = 0.6 T, N_speed = 1200 RPM, P = 2 poles',
        bn: 'N = ২৫০, A = ০.০৪ m², B = ০.৬ T, গতি = ১২০০ RPM, P = ২ মেরু'
      },
      solution: {
        en: `1. Calculate angular velocity:
   ω = 2π · N_speed / 60 = 2π · 1200 / 60 = 40π ≈ 125.66 rad/s
2. Calculate peak generated EMF:
   E_m = N · B · A · ω = 250 · 0.6 · 0.04 · 125.66
   E_m = 6.0 · 125.66 = 753.98 V ≈ 754.0 V
3. Calculate average DC voltage (full-wave rectified sinusoid):
   E_dc = (2 / π) · E_m = (2 / 3.14159) · 753.98 ≈ 0.6366 · 753.98 ≈ 480.0 V
4. Calculate fundamental electrical AC frequency:
   f = (P · N_speed) / 120 = (2 · 1200) / 120 = 20 Hz
5. Calculate DC output ripple frequency:
   Because the commutator inverts every negative half-cycle (full-wave mechanical rectification):
   f_ripple = 2 · f = 2 · 20 Hz = 40 Hz`,
        hi: `1. कोणीय वेग:
   ω = 2π × 1200 / 60 = 40π ≈ 125.66 rad/s
2. शिखर ईएमएफ:
   E_m = N × B × A × ω = 250 × 0.6 × 0.04 × 125.66 ≈ 754.0 V
3. औसत डीसी वोल्टेज:
   E_dc = (2 / π) × E_m = 0.6366 × 754.0 ≈ 480.0 V
4. मूल एसी आवृत्ति:
   f = (2 × 1200) / 120 = 20 Hz
5. रिपल आवृत्ति:
   f_ripple = 2 × f = 2 × 20 = 40 Hz`,
        bn: `১. কৌণিক বেগ:
   ω = ২π × ১২০০ / ৬০ = ৪০π ≈ ১২৫.৬৬ rad/s
২. শীর্ষ ইএমএফ:
   E_m = N × B × A × ω = ২৫০ × ০.৬ × ০.০৪ × ১২৫.৬৬ ≈ ৭৫৪.০ V
৩. গড় ডিসি ভোল্টেজ:
   E_dc = (২ / π) × E_m = ০.৬৩৬৬ × ৭৫৪.০ ≈ ৪৮০.০ V
৪. মৌলিক এসি কম্পাঙ্ক:
   f = (২ × ১২০০) / ১২০ = ২০ Hz
৫. রিপল কম্পাঙ্ক:
   f_ripple = ২ × f = ২ × ২০ = ৪০ Hz`
      },
      finalAnswer: {
        en: 'Peak EMF E_m = 754.0 V; Average DC Voltage E_dc = 480.0 V; Ripple Frequency = 40 Hz',
        hi: 'शिखर ईएमएफ E_m = 754.0 V; औसत डीसी वोल्टेज E_dc = 480.0 V; रिपल आवृत्ति = 40 Hz',
        bn: 'শীর্ষ ইএমএফ E_m = ৭৫৪.০ V; গড় ডিসি ভোল্টেজ E_dc = ৪৮০.০ V; রিপল কম্পাঙ্ক = ৪০ Hz'
      }
    },
    {
      id: 'ex-dcgen-2',
      problem: {
        en: 'A 4-pole commercial DC generator has an armature with Z = 480 conductors driven at N = 1500 RPM. The useful magnetic flux per pole is Φ = 0.025 Wb (25 mWb). Calculate the generated open-circuit voltage E_g: (a) When the armature is lap-wound (number of parallel paths A = P = 4), and (b) When the armature is wave-wound (number of parallel paths A = 2).',
        hi: '4-ध्रुव वाले डीसी जनरेटर के आर्मेचर में Z = 480 चालक हैं और यह 1500 RPM पर चलता है। प्रति ध्रुव उपयोगी चुंबकीय फ्लक्स Φ = 0.025 Wb (25 mWb) है। उत्पन्न वोल्टेज E_g ज्ञात कीजिए: (a) जब आर्मेचर लैप-वाउंड हो (समानांतर पथ A = P = 4), तथा (b) जब आर्मेचर वेव-वाउंड हो (समानांतर पथ A = 2)।',
        bn: 'একটি ৪-মেরু ডিসি জেনারেটরের আর্মেচারে মোট Z = ৪৮০ টি কন্ডাক্টর রয়েছে এবং এটি ১৫০০ RPM গতিতে চালিত। প্রতি মেরুতে কার্যকর চৌম্বক ফ্লাক্স Φ = ০.০২৫ Wb (২৫ mWb)। আবিষ্ট ভোল্টেজ E_g নির্ণয় কর: (a) যখন আর্মেচার ল্যাপ-ওয়াইন্ডিংযুক্ত (সমান্তরাল পথ A = P = ৪), এবং (b) যখন আর্মেচার ওয়েভ-ওয়াইন্ডিংযুক্ত (সমান্তরাল পথ A = ২)।'
      },
      givenValues: {
        en: 'P = 4 poles, Z = 480 conductors, N = 1500 RPM, Φ = 0.025 Wb',
        hi: 'P = 4, Z = 480, N = 1500 RPM, Φ = 0.025 Wb',
        bn: 'P = ৪, Z = ৪৮০, N = ১৫০০ RPM, Φ = ০.০২৫ Wb'
      },
      solution: {
        en: `1. State the standard DC Machine EMF Equation:
   E_g = (Φ · P · N · Z) / (60 · A)
2. Case (a): Lap-wound armature:
   For simplex lap winding, parallel paths A = P = 4.
   E_g(lap) = (0.025 · 4 · 1500 · 480) / (60 · 4)
   E_g(lap) = (0.025 · 1500 · 480) / 60 = 18000 / 60 = 300 V
3. Case (b): Wave-wound armature:
   For simplex wave winding, parallel paths A = 2 regardless of pole count.
   E_g(wave) = (0.025 · 4 · 1500 · 480) / (60 · 2)
   E_g(wave) = 72000 / 120 = 600 V
4. Physical conclusion:
   Wave winding connects more conductors in series, producing higher voltage (600 V vs 300 V), whereas lap winding provides more parallel paths, suited for high-current applications.`,
        hi: `1. डीसी मशीन ईएमएफ सूत्र:
   E_g = (Φ × P × N × Z) / (60 × A)
2. स्थिति (a): लैप-वाइंडिंग (A = P = 4):
   E_g(lap) = (0.025 × 4 × 1500 × 480) / (60 × 4) = 300 V
3. स्थिति (b): वेव-वाइंडिंग (A = 2):
   E_g(wave) = (0.025 × 4 × 1500 × 480) / (60 × 2) = 600 V
4. निष्कर्ष:
   वेव वाइंडिंग उच्च वोल्टेज (600 V) प्रदान करती है, जबकि लैप वाइंडिंग अधिक समानांतर पथों के कारण उच्च धारा के लिए उपयुक्त होती है।`,
        bn: `১. ডিসি জেনারেটর ইএমএফ সমীকরণ:
   E_g = (Φ × P × N × Z) / (৬০ × A)
২. ক্ষেত্র (a): ল্যাপ-ওয়াইন্ডিং (A = P = ৪):
   E_g(lap) = (০.০২৫ × ৪ × ১৫০০ × ৪৮০) / (৬০ × ৪) = ৩০০ V
৩. ক্ষেত্র (b): ওয়েভ-ওয়াইন্ডিং (A = ২):
   E_g(wave) = (০.০২৫ × ৪ × ১৫০০ × ৪৮০) / (৬০ × ২) = ৬০০ V
৪. পর্যবেক্ষণ:
   ওয়েভ ওয়াইন্ডিং বেশি কন্ডাক্টর শ্রেণীতে যুক্ত করায় উচ্চ ভোল্টেজ (৬০০ V) দেয়, আর ল্যাপ ওয়াইন্ডিং বেশি সমান্তরাল পথ থাকায় উচ্চ কারেন্টের জন্য আদর্শ।`
      },
      finalAnswer: {
        en: 'Lap-wound E_g = 300 V; Wave-wound E_g = 600 V',
        hi: 'लैप-वाउंड E_g = 300 V; वेव-वाउंड E_g = 600 V',
        bn: 'ল্যাপ-ওয়াইন্ডিং E_g = ৩০০ V; ওয়েভ-ওয়াইন্ডিং E_g = ৬০০ V'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Synchronous Alternator Field Exciters: Shaft-mounted DC shunt generators provide steady DC current to the rotor field windings of grid power alternators.',
      'Industrial Electroplating & Electrolysis: High-current, low-voltage DC generators deliver pure unidirectional current for chromium, copper, and zinc plating baths.',
      'DC Arc Welding Generators: Specially designed differential compound generators supply high welding current with falling voltage-current characteristics for arc stability.',
      'Locomotive & Electric Traction Dynamos: Historical and heavy industrial diesel-electric locomotives utilized engine-driven DC generators to power axle traction motors.',
      'Substation Battery Bank Charging: DC shunt generators provide smooth direct current to keep 110 V / 220 V emergency substation battery banks fully charged.'
    ],
    hi: [
      'अल्टरनेटर फील्ड उत्तेजक (Exciters): मुख्य ग्रिड अल्टरनेटर के रोटर वाइंडिंग को स्थिर डीसी धारा प्रदान करने वाले डीसी शंट जनरेटर।',
      'इलेक्ट्रोप्लेटिंग और विद्युत-अपघटन: तांबा, क्रोमियम और जस्ता चढ़ाने वाले टैंकों के लिए उच्च धारा कम वोल्टेज डीसी जनरेटर।',
      'आर्क वेल्डिंग डीसी जनरेटर: स्थिर वेल्डिंग आर्क बनाए रखने के लिए विशेष विभेदक कम्पाउंड डीसी जनरेटर।',
      'डीजल-इलेक्ट्रिक लोकोमोटिव: भारी ट्रेनों के पहियों को घुमाने वाली डीसी मोटरों को बिजली देने वाले इंजन-चालित डायनेमो।',
      'सबस्टेशन बैटरी बैंक चार्जिंग: आपातकालीन बैकअप बैटरियों को निरंतर 110 V / 220 V डीसी आपूर्ति से चार्ज रखना।'
    ],
    bn: [
      'অল্টারনেটরের এক্সাইটার: বিদ্যুৎ কেন্দ্রের বৃহৎ সিনক্রোনাস অল্টারনেটরের রোটরে ডিসি চৌম্বক ক্ষেত্র সরবরাহের কাজে ব্যবহৃত শান্ট জেনারেটর।',
      'ইলেক্ট্রোপ্লেটিং ও তড়িৎ-বিশ্লেষণ: ক্রোমিয়াম বা তামার প্রলেপ দেওয়ার কারখানায় উচ্চ-কারেন্ট স্বল্প-ভোল্টেজের টেকসই ডিসি সরবরাহ।',
      'আর্ক ওয়েল্ডিং জেনারেটর: স্থির বৈদ্যুতিক আর্ক বজায় রাখতে সক্ষম বিশেষ ডিফারেনশিয়াল কম্পাউন্ড ডিসি জেনারেটর।',
      'ডিজেল-ইলেকট্রিক লোকোমোটিভ: ট্রেনের চাকায় যুক্ত ডিসি ট্র্যাকশন মোটরগুলোকে শক্তিশালী বিদ্যুৎ জোগাতে ইঞ্জিন-চালিত ডায়নামো।',
      'সাবস্টেশন ব্যাটারি চার্জিং: বিদ্যুৎ সাবস্টেশনের জরুরি ব্যাকআপ ব্যাটারি ব্যাংককে সার্বক্ষণিক চার্জিত রাখতে ব্যবহৃত ডিসি জেনারেটর।'
    ]
  },
  importantPoints: {
    en: [
      'Intrinsic armature voltage is always AC: Armature conductors rotate through alternating North and South magnetic polarities, naturally generating an alternating sinusoidal EMF.',
      'Split-ring commutator as mechanical rectifier: The split ring swaps brush contacts every 180° of rotation precisely at the magnetic neutral plane, ensuring load current flows in one direction only.',
      'Average DC voltage: For an elementary single-loop generator, E_dc = (2 / π) · E_m ≈ 0.637 E_m.',
      'Magnetic Neutral Plane (MNP) alignment: Brushes must contact segments along the MNP where conductors move parallel to flux lines and induced EMF is zero, preventing destructive contact arcing.',
      'Ripple reduction via multi-segment commutator: Real DC generators use dozens of armature coils connected to a cylindrical multi-bar commutator to yield virtually ripple-free, flat DC.',
      'General EMF equation: E_g = (Φ · P · N · Z) / (60 · A), showing generated voltage depends on flux per pole, speed, total conductors, and parallel path configuration.'
    ],
    hi: [
      'आर्मेचर के भीतर स्वाभाविक वोल्टेज सदैव AC होता है: चालक बारी-बारी से N और S ध्रुवों से गुजरते हैं, जिससे स्वाभाविक रूप से प्रत्यावर्ती ईएमएफ ही उत्पन्न होता है।',
      'कम्यूटेटर यांत्रिक रेक्टिफायर का कार्य करता है: स्प्लिट-रिंग चुंबकीय उदासीन तल (MNP) पर प्रत्येक 180° बाद ब्रश संपर्क उलट देता है जिससे लोड में केवल डीसी बहती है।',
      'औसत डीसी वोल्टेज: सिंगल-लूप जनरेटर के लिए औसत डीसी वोल्टेज E_dc = (2 / π) · E_m ≈ 0.637 E_m होता है।',
      'चुंबकीय उदासीन तल (MNP) पर ब्रश की स्थिति: जब चालक फ्लक्स रेखाओं के समानांतर चलते हैं (e = 0), तब ब्रश खंडों को छूते हैं ताकि स्पार्किंग न हो।',
      'बहु-खंड कम्यूटेटर से रिपल में कमी: वास्तविक जनरेटर में कई कॉइल और कई कम्यूटेटर पट्टियां होती हैं, जिससे एकसमान चिकनी डीसी प्राप्त होती है।',
      'सामान्य ईएमएफ सूत्र: E_g = (Φ · P · N · Z) / (60 · A), जो गति, फ्लक्स, फेरों और समानांतर पथों (A) पर निर्भर करता है।'
    ],
    bn: [
      'আর্মেচারের ভেতরে উৎপন্ন ভোল্টেজ প্রকৃতপক্ষে এসি: পরিবাহীগুলো ক্রমান্বয়ে উত্তর ও দক্ষিণ মেরুর নিচ দিয়ে ঘুরতে থাকায় ভেতরে খাঁটি এসি আবিষ্ট হয়।',
      'কমিউটেটর হলো একটি যান্ত্রিক রেকটিফায়ার: স্প্লিট-রিং প্রতি ১৮০° ঘূর্ণন পর পর (MNP তলে) সংযোগ পরিবর্তন করে বহিস্থ লোডে কারেন্টের দিক একমুখী রাখে।',
      'গড় ডিসি ভোল্টেজ: একক লুপ জেনারেটরের জন্য গড় ডিসি ভোল্টেজ E_dc = (২ / π) · E_m ≈ ০.৬৩৭ E_m।',
      'ম্যাগনেটিক নিউট্রাল প্লেনে (MNP) ব্রাশ স্থাপন: যেখানে কন্ডাক্টরের আবিষ্ট ভোল্টেজ শূন্য (e = ০), সেখানে ব্রাশ স্পর্শ করলে শর্ট-সার্কিট স্পার্কিং সৃষ্টি হয় না।',
      'বহু-খণ্ড কমিউটেটরে রিপল দূরীকরণ: বাণিজ্যিক জেনারেটরে বহু কয়েল ও বহু কমিউটেটর সেগমেন্ট ব্যবহার করে প্রায় স্থির, মসৃণ ডিসি নিশ্চিত করা হয়।',
      'সাধারণ ইএমএফ সূত্র: E_g = (Φ · P · N · Z) / (৬০ · A), যা ফ্লাক্স, গতি, মোট কন্ডাক্টর সংখ্যা ও সমান্তরাল পথের ওপর নির্ভরশীল।'
    ]
  },
  commonMistakes: {
    en: [
      'Assuming the armature conductors generate DC directly: Conductor EMF is physically alternating; DC appears only externally across the commutator brushes.',
      'Confusing average DC voltage with RMS voltage: An ordinary moving-coil DC voltmeter indicates the average value E_dc = 0.637 E_m, whereas thermal or true-RMS meters measure E_rms = 0.707 E_m.',
      'Shifting brushes off the Magnetic Neutral Plane: Offsetting brushes causes commutation when coil EMF is non-zero, resulting in destructive sparking, commutator pitted bars, and brush burn.',
      'Confusing simplex lap winding (A = P) with simplex wave winding (A = 2): Lap winding provides as many parallel paths as poles, whereas wave winding always provides only two parallel paths.'
    ],
    hi: [
      'यह मानना कि आर्मेचर चालक सीधे डीसी बनाते हैं: चालक के भीतर धारा विशुद्ध एसी होती है; केवल कम्यूटेटर के बाद बाहरी परिपथ में डीसी प्राप्त होती है।',
      'औसत डीसी वोल्टेज और RMS वोल्टेज में अंतर न समझना: डीसी वोल्टमीटर औसत मान (0.637 E_m) मापता है, जबकि RMS मान 0.707 E_m होता है।',
      'ब्रशों को चुंबकीय उदासीन तल (MNP) से हटा देना: ऐसा करने पर ब्रशों के नीचे भारी चिंगारियां निकलती हैं और कम्यूटेटर की तांबे की पट्टियां जल जाती हैं।',
      'लैप वाइंडिंग (A = P) और वेव वाइंडिंग (A = 2) में भ्रम: लैप वाइंडिंग में ध्रुवों के बराबर समानांतर पथ होते हैं, जबकि वेव वाइंडिंग में सदैव केवल 2 समानांतर पथ होते हैं।'
    ],
    bn: [
      'আর্মেচার কয়েল সরাসরি ডিসি তৈরি করে বলে ধারণা করা: কয়েলের ভেতরে ভোল্টেজ সম্পূর্ণ এসি; কমিউটেটরের যান্ত্রিক রেকটিফিকেশনের ফলেই কেবল বাইরে ডিসি পাওয়া যায়।',
      'গড় ডিসি ভোল্টেজ ও RMS ভোল্টেজের বিভ্রাট: সাধারণ ডিসি মিটার গড় মান (০.৬৩৭ E_m) পরিমাপ করে, পক্ষান্তরে RMS মান হলো ০.৭০৭ E_m।',
      'MNP তল ছাড়া অন্য স্থানে ব্রাশ স্থাপন করা: এর ফলে কয়েলে ভোল্টেজ বিদ্যমান থাকা অবস্থায় কম্যুটেশন ঘটে এবং তীব্র বৈদ্যুতিক স্পার্কিংয়ে কমিউটেটর ক্ষতিগ্রস্ত হয়।',
      'ল্যাপ ওয়াইন্ডিং (A = P) ও ওয়েভ ওয়াইন্ডিং (A = ২)-এর সমান্তরাল পথ গুলিয়ে ফেলা: ল্যাপে মেরুসংখ্যার সমান পথ থাকে, কিন্তু ওয়েভে সর্বদা মাত্র ২টি সমান্তরাল পথ থাকে।'
    ]
  },
  keyTakeaways: {
    en: [
      'An elementary DC generator uses a split-ring commutator to convert alternating induced EMF into unidirectional pulsating DC.',
      'The split-ring commutator reverses the armature coil connection to the stationary brushes every half revolution as coil sides swap magnetic poles.',
      'The average DC output voltage is E_dc = (2 / π) · E_m ≈ 0.637 E_m for a single full-wave rectified loop.',
      'Brushes must ride strictly on the Magnetic Neutral Plane (MNP) where instantaneous EMF is zero to achieve sparkless commutation.',
      'Commercial machines utilize multi-turn distributed windings and multi-bar commutators to suppress ripple and satisfy the EMF equation E_g = (Φ·P·N·Z) / (60·A).'
    ],
    hi: [
      'डीसी जनरेटर स्प्लिट-रिंग कम्यूटेटर का उपयोग करके आंतरिक प्रत्यावर्ती ईएमएफ को एकदिशीय स्पंदित डीसी में परिवर्तित करता है।',
      'कम्यूटेटर प्रत्येक आधे चक्कर में ब्रश कनेक्शन को उलट देता है जब कॉइल के किनारे विपरीत चुंबकीय ध्रुवों के नीचे पहुंचते हैं।',
      'सिंगल-लूप जनरेटर के लिए औसत डीसी वोल्टेज E_dc = (2 / π) · E_m ≈ 0.637 E_m होता है।',
      'स्पार्क-मुक्त कम्यूटेशन के लिए ब्रशों को सदैव चुंबकीय उदासीन तल (MNP) पर टिका होना चाहिए जहां वोल्टेज शून्य होता है।',
      'व्यावसायिक जनरेटर एकसमान निर्बाध डीसी आउटपुट प्रदान करने के लिए बहु-खंड कम्यूटेटर और वितरित वाइंडिंग का उपयोग करते हैं।'
    ],
    bn: [
      'ডিসি জেনারেটর স্প্লিট-রিং কমিউটেটর ব্যবহারের মাধ্যমে কয়েলের অভ্যন্তরীণ দিক-পরিবর্তী এসিকে একমুখী স্পন্দিত ডিসিতে রূপান্তর করে।',
      'কয়েলের পরিবাহীগুলো যখন বিপরীত মেরুতে প্রবেশ করে, কমিউটেটর ঠিক তখনই ব্রাশের সাথে সংযোগ অদলবদল করে দেয়।',
      'একটি একক লুপ ডিসি জেনারেটরের গড় আউটপুট ভোল্টেজ E_dc = (২ / π) · E_m ≈ ০.৬৩৭ E_m।',
      'স্পার্কহীন কম্যুটেশন অর্জনের জন্য ব্রাশগুলোকে অবশ্যই ম্যাগনেটিক নিউট্রাল প্লেনে (MNP) স্থাপন করতে হবে।',
      'শিল্পক্ষেত্রের আধুনিক ডিসি জেনারেটরে একাধিক কয়েল ও বহু-খণ্ড বিশিষ্ট কমিউটেটর দিয়ে পুরোপুরি সমতল, মসৃণ ডিসি বিদ্যুৎ তৈরি করা হয়।'
    ]
  },
  mcqs: [
    {
      id: "q-dcgen-1",
      question: {
        en: "What type of voltage is intrinsically generated inside the armature conductors of any rotating DC generator?",
        hi: "किसी भी घूर्णनशील डीसी जनरेटर के आर्मेचर चालकों के भीतर स्वाभाविक रूप से किस प्रकार का वोल्टेज उत्पन्न होता है?",
        bn: "ঘূর্ণনশীল যে কোনো ডিসি জেনারেটরের আর্মেচার কন্ডাক্টরের অভ্যন্তরে প্রকৃতপক্ষে কোন ধরনের ভোল্টেজ আবিষ্ট হয়?"
      },
      options: [
        { id: "opt-1", text: { en: "Pure steady ripple-free Direct Current (DC)", hi: "शुद्ध स्थिर रिपल-रहित दिष्ट धारा (DC)", bn: "বিশুদ্ধ স্থির রিপলহীন ডিসি ভোল্টেজ" } },
        { id: "opt-2", text: { en: "Alternating Current (AC)", hi: "प्रत्यावर्ती धारा (AC)", bn: "অল্টারনেটিং বা দিক-পরিবর্তী ভোল্টেজ (AC)" } },
        { id: "opt-3", text: { en: "Square wave DC", hi: "वर्गाकार तरंग DC", bn: "স্কয়ার ওয়েভ ডিসি" } },
        { id: "opt-4", text: { en: "Triangular wave voltage", hi: "त्रिभुजाकार तरंग वोल्टेज", bn: "ত্রিভুজাকার ভোল্টেজ" } }
      ],
      correctOptionId: "opt-2",
      explanation: {
        en: "Inside every rotating generator armature, conductors cut alternating North and South polarities, so the intrinsically generated EMF is always alternating (AC). The commutator mechanically rectifies it to DC at the output terminals.",
        hi: "आर्मेचर चालक बारी-बारी से उत्तरी और दक्षिणी ध्रुवों के नीचे से गुजरते हैं, इसलिए अंदर हमेशा एसी ही उत्पन्न होती है। कम्यूटेटर इसे बाहर डीसी में बदलता है।",
        bn: "আর্মেচার কন্ডাক্টরগুলো পালাক্রমে উত্তর ও দক্ষিণ মেরুর মধ্য দিয়ে যাওয়ায় ভেতরে সর্বদা এসি উৎপন্ন হয়। কমিউটেটর যান্ত্রিকভাবে একে বাইরে ডিসিতে রূপান্তর করে।"
      }
    },
    {
      id: "q-dcgen-2",
      question: {
        en: "What is the average DC voltage of a single-loop generator whose peak AC voltage is 100 V?",
        hi: "100 V शिखर वोल्टेज वाले सिंगल-लूप जनरेटर का औसत डीसी वोल्टेज क्या होगा?",
        bn: "শীর্ষ ভোল্টেজ ১০০ ভোল্ট হলে একটি সিঙ্গেল-লুপ জেনারেটরের গড় ডিসি ভোল্টেজ কত হবে?"
      },
      options: [
        { id: "opt-1", text: { en: "50.0 V", hi: "50.0 V", bn: "৫০.০ V" } },
        { id: "opt-2", text: { en: "63.7 V", hi: "63.7 V", bn: "৬৩.৭ V" } },
        { id: "opt-3", text: { en: "70.7 V", hi: "70.7 V", bn: "৭০.৭ V" } },
        { id: "opt-4", text: { en: "100.0 V", hi: "100.0 V", bn: "১০০.০ V" } }
      ],
      correctOptionId: "opt-2",
      explanation: {
        en: "V_dc,avg = (2 · E_m) / π = (2 × 100) / 3.1416 ≈ 63.66 V ≈ 63.7 V.",
        hi: "V_dc,avg = (2 · E_m) / π = (2 × 100) / 3.1416 ≈ 63.7 V।",
        bn: "V_dc,avg = (২ · E_m) / π = (২ × ১০০) / ৩.১৪১৬ ≈ ৬৩.৭ ভোল্ট।"
      }
    },
    {
      id: "mcq-ch10-l12-03",
      question: {
        en: "What is the primary operational function of the split-ring commutator in an elementary DC generator?",
        hi: "एक बुनियादी डीसी जनरेटर में स्प्लिट-रिंग कम्यूटेटर का मुख्य कार्य क्या है?",
        bn: "একটি প্রাথমিক ডিসি জেনারেটরে স্প্লিট-রিং কমিউটেটরের মূল কার্যকরী ভূমিকা কোনটি?"
      },
      options: [
        { id: "opt-1", text: { en: "It mechanically rectifies internal AC into pulsating unidirectional DC by reversing the coil connection to the external circuit every half-turn", hi: "यह प्रत्येक आधे चक्कर में बाहरी परिपथ से कनेक्शन को बदलकर आंतरिक एसी को एकदिशीय डीसी में यांत्रिक रूप से रेक्टिफाई करता है", bn: "এটি প্রতি অর্ধ-ঘূর্ণনে সংযোগ উল্টে দিয়ে অভ্যন্তরীণ এসি ভোল্টেজকে বহিঃস্থ বর্তনীর জন্য একমুখী ডিসি ভোল্টেজে রূপান্তর করে" } },
        { id: "opt-2", text: { en: "It increases the magnetic flux of the stator", hi: "यह स्टेटर के चुंबकीय फ्लक्स को बढ़ाता है", bn: "এটি স্টেটের চৌম্বক ফ্লাক্স বৃদ্ধি করে" } },
        { id: "opt-3", text: { en: "It steps up the generated voltage by 100 times", hi: "यह उत्पन्न वोल्टेज को 100 गुना बढ़ाता है", bn: "এটি উৎপন্ন ভোল্টেজ ১০০ গুণ বাড়িয়ে দেয়" } },
        { id: "opt-4", text: { en: "It provides cooling air to the bearings", hi: "यह बियरिंग्स को ठंडी हवा देता है", bn: "এটি বিয়ারিংয়ে ঠান্ডা বাতাস জোগায়" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "The commutator acts as a mechanical synchronous inverter/rectifier switch that swaps brush connections at the magnetic neutral plane, keeping the output terminal polarity constant.",
        hi: "कम्यूटेटर यांत्रिक रेक्टिफायर के रूप में कार्य करता है जो ब्रश कनेक्शन को ठीक समय पर बदलकर बाहरी लोड को हमेशा एक ही दिशा में धारा देता है।",
        bn: "কমিউটেটর একটি যান্ত্রিক রেকটিফায়ার হিসেবে কাজ করে যা ব্রাশ সংযোগ অদলবদল করে বহিঃস্থ লোডে সর্বদা একইমুখী ডিসি কারেন্ট নিশ্চিত করে।"
      }
    },
    {
      id: "mcq-ch10-l12-04",
      question: {
        en: "At what precise moment during armature rotation do the stationary carbon brushes cross the insulating gap between commutator segments?",
        hi: "आर्मेचर के घूमने के दौरान स्थिर कार्बन ब्रश कम्यूटेटर सेगमेंट के बीच की इंसुलेटिंग गैप को ठीक किस समय पार करते हैं?",
        bn: "আর্মেচার ঘূর্ণনের সময় স্থির কার্বন ব্রাশগুলো ঠিক কোন মুহূর্তে কমিউটেটর সেগমেন্টের মধ্যবর্তী ইনসুলেটিং ফাঁক অতিক্রম করে?"
      },
      options: [
        { id: "opt-1", text: { en: "When the coil passes through the Magnetic Neutral Axis (MNA) where induced EMF is instantaneously zero", hi: "जब कॉइल चुंबकीय तटस्थ अक्ष (MNA) से गुजरती है जहाँ प्रेरित EMF शून्य होता है", bn: "কয়েলটি যখন ম্যাগনেটিক নিউট্রাল অক্ষ (MNA) অতিক্রম করে যেখানে আবিষ্ট EMF শূন্য থাকে" } },
        { id: "opt-2", text: { en: "When induced EMF is at its maximum peak value", hi: "जब प्रेरित EMF अधिकतम शिखर पर होता है", bn: "যখন আবিষ্ট EMF সর্বোচ্চ শীর্ষ মানে থাকে" } },
        { id: "opt-3", text: { en: "When armature speed reaches zero", hi: "जब आर्मेचर की गति शून्य होती है", bn: "যখন আর্মেচারের গতি শূন্যে নেমে আসে" } },
        { id: "opt-4", text: { en: "Continuously at all angles without pause", hi: "बिना रुके हर कोण पर लगातार", bn: "কোনো বিরতি ছাড়া সমস্ত কোণ জুড়ে" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Commutation occurs at the Magnetic Neutral Axis where coil EMF is zero. This prevents momentary short-circuit spark damage across the brush face.",
        hi: "कम्यूटेशन न्यूट्रल अक्ष (MNA) पर होता है जहाँ EMF शून्य होता है ताकि ब्रश शॉर्ट होने पर स्पार्किंग न हो।",
        bn: "কমিউটেশন ম্যাগনেটিক নিউট্রাল অক্ষে (MNA) ঘটে যেখানে EMF শূন্য থাকে, ফলে ব্রাশ শর্ট হলেও স্পার্কিং হয় না।"
      }
    },
    {
      id: "mcq-ch10-l12-05",
      question: {
        en: "How is the high ripple voltage of an elementary single-coil DC generator smoothed into virtually steady DC in practical industrial machines?",
        hi: "एक साधारण सिंगल-कॉइल डीसी जनरेटर के अत्यधिक रिपल (कंपन) को व्यावहारिक मशीनों में स्थिर डीसी में कैसे बदला जाता है?",
        bn: "একটি সাধারণ সিঙ্গেল-কয়েল ডিসি জেনারেটরের অতিরিক্ত রিপল ভোল্টেজকে বাস্তব শিল্প জেনারেটরে কীভাবে মসৃণ ডিসিতে পরিণত করা হয়?"
      },
      options: [
        { id: "opt-1", text: { en: "By using many armature coils distributed around the periphery connected to a multi-segment commutator", hi: "परिधि पर कई कॉइल्स को बांटकर उन्हें बहु-सेगमेंट कम्यूटेटर से जोड़कर", bn: "পরিধি জুড়ে বহুসংখ্যক আর্মেচার কয়েল স্থাপন করে বহু-সেগমেন্ট বিশিষ্ট কমিউটেটরে যুক্ত করার মাধ্যমে" } },
        { id: "opt-2", text: { en: "By increasing brush spring tension tenfold", hi: "ब्रश के स्प्रिंग का तनाव 10 गुना बढ़ाकर", bn: "ব্রাশের স্প্রিং টান ১০ গুণ বৃদ্ধি করে" } },
        { id: "opt-3", text: { en: "By immersing the commutator in lubricating oil", hi: "कम्यूटेटर को तेल में डुबोकर", bn: "কমিউটেটরকে তেলে ডুবিয়ে রেখে" } },
        { id: "opt-4", text: { en: "By spinning the generator backward", hi: "जनरेटर को उल्टी दिशा में चलाकर", bn: "জেনারেটরকে উল্টো দিকে ঘুরিয়ে" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Distributing dozens of overlapping coils around the armature core connects each coil to its own commutator bar pair, producing overlapping sine waves that sum into an almost flat DC line with <1% ripple.",
        hi: "अनेक कॉइल्स और बहु-सेगमेंट कम्यूटेटर का उपयोग करने से अलग-अलग तरंगें जुड़कर लगभग पूर्णतः स्थिर डीसी वोल्टेज बनाती हैं।",
        bn: "একাধিক কয়েল ও বহু-সেগমেন্টের কমিউটেটর ব্যবহার করলে উপরিপাতিত তরঙ্গের সমষ্টি প্রায় সম্পূর্ণ সোজা ও মসৃণ ডিসি লাইন দেয়।"
      }
    },
    {
      id: "mcq-ch10-l12-06",
      question: {
        en: "What detrimental physical effect occurs during heavy load operation of a DC generator if armature reaction is not compensated?",
        hi: "यदि आर्मेचर प्रतिक्रिया की भरपाई न की जाए, तो डीसी जनरेटर पर भारी लोड पड़ने पर कौन सा हानिकारक प्रभाव पड़ता है?",
        bn: "আর্মেচার প্রতিক্রিয়া প্রশমিত না করা হলে ভারী লোডের সময় ডিসি জেনারেটরে কোন ক্ষতিকর প্রভাব দেখা যায়?"
      },
      options: [
        { id: "opt-1", text: { en: "The magnetic neutral axis shifts in the direction of rotation, causing severe sparking at the brushes", hi: "चुंबकीय तटस्थ अक्ष घूमने की दिशा में खिसक जाता है, जिससे ब्रश पर भारी स्पार्किंग होती है", bn: "ম্যাগনেটিক নিউট্রাল অক্ষ ঘূর্ণনের দিকে সরে যায়, ফলে ব্রাশে তীব্র ক্ষতিকর স্পার্কিং হয়" } },
        { id: "opt-2", text: { en: "The commutator segments turn permanently into glass", hi: "कम्यूटेटर सेगमेंट कांच बन जाते हैं", bn: "কমিউটেটরের তামার পাত কাচে রূপান্তরিত হয়" } },
        { id: "opt-3", text: { en: "The field magnets demagnetize completely in 1 millisecond", hi: "चुंबक 1 मिलीसेकंड में पूरी तरह निष्क्रिय हो जाते हैं", bn: "১ মিলিসেকেন্ডে ফিল্ড ম্যাগনেট অকেজো হয়" } },
        { id: "opt-4", text: { en: "Output voltage drops to exactly zero volts immediately", hi: "आउटपुट तुरंत शून्य वोल्ट हो जाता है", bn: "আউটপুট সাথে সাথে শূন্য ভোল্ট হয়ে যায়" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Armature cross-magnetization distorts the main flux and shifts the Magnetic Neutral Axis (MNA) forward in the direction of rotation, shorting coils with active EMF and producing destructive brush sparking.",
        hi: "आर्मेचर धारा मुख्य फ्लक्स को विकृत कर देती है जिससे MNA घूमने की दिशा में आगे बढ़ जाता है और ब्रश पर भारी स्पार्क होता है।",
        bn: "আর্মেচার কারেন্ট মূল ফ্লাক্সকে বিকৃত করে MNA কে ঘূর্ণনের দিকে সরিয়ে দেয়, ফলে কয়েলে ভোল্টেজ থাকা অবস্থাতেই ব্রাশ শর্ট হয়ে স্পার্ক সৃষ্টি হয়।"
      }
    },
    {
      id: "mcq-ch10-l12-07",
      question: {
        en: "What auxiliary components are installed in modern DC generators between the main poles to eliminate brush sparking caused by armature reaction and coil inductance?",
        hi: "आर्मेचर प्रतिक्रिया और कॉइल प्रेरकत्व से होने वाली स्पार्किंग को रोकने के लिए आधुनिक डीसी मशीनों में मुख्य ध्रुवों के बीच कौन से घटक लगाए जाते हैं?",
        bn: "আর্মেচার প্রতিক্রিয়া ও কয়েল আবেশাঙ্কের কারণে সৃষ্ট স্পার্কিং রোধে আধুনিক ডিসি মেশিনে প্রধান মেরুগুলোর মাঝে কী বসানো হয়?"
      },
      options: [
        { id: "opt-1", text: { en: "Interpoles (commutating poles) carrying armature current in series", hi: "इंटरपोल (कम्यूटेटिंग पोल) जो श्रेणीक्रम में आर्मेचर धारा ले जाते हैं", bn: "ইন্টারপোল (বা কমিউটেটিং পোল) যা আর্মেচার কারেন্টের সাথে শ্রেণীতে যুক্ত থাকে" } },
        { id: "opt-2", text: { en: "High-speed centrifugal water sprinklers", hi: "पानी छिड़कने वाले स्प्रिंकलर", bn: "উচ্চগতির পানি ছিটানোর স্প্রিংকলার" } },
        { id: "opt-3", text: { en: "Permanent rubber dampers", hi: "स्थायी रबर डैम्पर", bn: "স্থায়ী রাবার ড্যাম্পার" } },
        { id: "opt-4", text: { en: "Ceramic spark plugs", hi: "सिरेमिक स्पार्क प्लग", bn: "সিরামিক স্পার্ক প্লাগ" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Interpoles (commutating poles) are narrow auxiliary poles positioned between the main poles to neutralize cross-magnetization and induce a rotational EMF that cancels the reactance voltage L(di/dt).",
        hi: "इंटरपोल मुख्य ध्रुवों के बीच लगाए जाते हैं जो आर्मेचर फ्लक्स को संतुलित करके स्पार्क-रहित कम्यूटेशन प्रदान करते हैं।",
        bn: "প্রধান মেরুগুলোর মাঝে ইন্টারপোল বসানো হয় যা আড়াআড়ি ফ্লাক্স প্রশমিত করে এবং বিক্রিয়া ভোল্টেজ বাতিল করে নিখুঁত স্পার্কহীন কমিউটেশন দেয়।"
      }
    },
    {
      id: "mcq-ch10-l12-08",
      question: {
        en: "A single-loop DC generator produces a peak alternating voltage of E_m = 150 V. After split-ring mechanical rectification, what is the average value (V_dc) of the pulsating output waveform?",
        hi: "एक सिंगल-लूप डीसी जनरेटर 150 V का शिखर एसी वोल्टेज बनाता है। कम्यूटेटर रेक्टिफिकेशन के बाद औसत डीसी वोल्टेज क्या होगा?",
        bn: "একটি সিঙ্গেল-লুপ ডিসি জেনারেটরে শীর্ষ এসি ভোল্টেজ E_m = ১৫০ V। স্প্লিট-রিং রেকটিফিকেশনের পর স্পন্দিত ডিসি আউটপুটের গড় মান (V_dc) কত?"
      },
      options: [
        { id: "opt-1", text: { en: "95.5 V", hi: "95.5 V", bn: "৯৫.৫ V" } },
        { id: "opt-2", text: { en: "106.1 V", hi: "106.1 V", bn: "১০৬.১ V" } },
        { id: "opt-3", text: { en: "75.0 V", hi: "75.0 V", bn: "৭৫.০ V" } },
        { id: "opt-4", text: { en: "150.0 V", hi: "150.0 V", bn: "১৫০.০ V" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "V_avg = (2 / π) · E_m = (2 / 3.14159) × 150 V ≈ 0.6366 × 150 ≈ 95.5 V.",
        hi: "औसत वोल्टेज V_avg = (2 / π) · E_m = 0.637 × 150 = 95.5 V।",
        bn: "গড় ভোল্টেজ V_avg = (২ / π) · E_m = ০.৬৩৭ × ১৫০ = ৯৫.৫ V।"
      }
    }
  ],
  mcqQuestions: [
    {
      id: "q-dcgen-1",
      question: {
        en: "What type of voltage is intrinsically generated inside the armature conductors of any rotating DC generator?",
        hi: "किसी भी घूर्णनशील डीसी जनरेटर के आर्मेचर चालकों के भीतर स्वाभाविक रूप से किस प्रकार का वोल्टेज उत्पन्न होता है?",
        bn: "ঘূর্ণনশীল যে কোনো ডিসি জেনারেটরের আর্মেচার কন্ডাক্টরের অভ্যন্তরে প্রকৃতপক্ষে কোন ধরনের ভোল্টেজ আবিষ্ট হয়?"
      },
      options: [
        { id: "opt-1", text: { en: "Pure steady ripple-free Direct Current (DC)", hi: "शुद्ध स्थिर रिपल-रहित दिष्ट धारा (DC)", bn: "বিশুদ্ধ স্থির রিপলহীন ডিসি ভোল্টেজ" } },
        { id: "opt-2", text: { en: "Alternating Current (AC)", hi: "प्रत्यावर्ती धारा (AC)", bn: "অল্টারনেটিং বা দিক-পরিবর্তী ভোল্টেজ (AC)" } },
        { id: "opt-3", text: { en: "Square wave DC", hi: "वर्गाकार तरंग DC", bn: "স্কয়ার ওয়েভ ডিসি" } },
        { id: "opt-4", text: { en: "Triangular wave voltage", hi: "त्रिभुजाकार तरंग वोल्टेज", bn: "ত্রিভুজাকার ভোল্টেজ" } }
      ],
      correctOptionId: "opt-2",
      explanation: {
        en: "Inside every rotating generator armature, conductors cut alternating North and South polarities, so the intrinsically generated EMF is always alternating (AC). The commutator mechanically rectifies it to DC at the output terminals.",
        hi: "आर्मेचर चालक बारी-बारी से उत्तरी और दक्षिणी ध्रुवों के नीचे से गुजरते हैं, इसलिए अंदर हमेशा एसी ही उत्पन्न होती है। कम्यूटेटर इसे बाहर डीसी में बदलता है।",
        bn: "আর্মেচার কন্ডাক্টরগুলো পালাক্রমে উত্তর ও দক্ষিণ মেরুর মধ্য দিয়ে যাওয়ায় ভেতরে সর্বদা এসি উৎপন্ন হয়। কমিউটেটর যান্ত্রিকভাবে একে বাইরে ডিসিতে রূপান্তর করে।"
      }
    },
    {
      id: "q-dcgen-2",
      question: {
        en: "What is the average DC voltage of a single-loop generator whose peak AC voltage is 100 V?",
        hi: "100 V शिखर वोल्टेज वाले सिंगल-लूप जनरेटर का औसत डीसी वोल्टेज क्या होगा?",
        bn: "শীর্ষ ভোল্টেজ ১০০ ভোল্ট হলে একটি সিঙ্গেল-লুপ জেনারেটরের গড় ডিসি ভোল্টেজ কত হবে?"
      },
      options: [
        { id: "opt-1", text: { en: "50.0 V", hi: "50.0 V", bn: "৫০.০ V" } },
        { id: "opt-2", text: { en: "63.7 V", hi: "63.7 V", bn: "৬৩.৭ V" } },
        { id: "opt-3", text: { en: "70.7 V", hi: "70.7 V", bn: "৭০.৭ V" } },
        { id: "opt-4", text: { en: "100.0 V", hi: "100.0 V", bn: "১০০.০ V" } }
      ],
      correctOptionId: "opt-2",
      explanation: {
        en: "V_dc,avg = (2 · E_m) / π = (2 × 100) / 3.1416 ≈ 63.66 V ≈ 63.7 V.",
        hi: "V_dc,avg = (2 · E_m) / π = (2 × 100) / 3.1416 ≈ 63.7 V।",
        bn: "V_dc,avg = (২ · E_m) / π = (২ × ১০০) / ৩.১৪১৬ ≈ ৬৩.৭ ভোল্ট।"
      }
    },
    {
      id: "mcq-ch10-l12-03",
      question: {
        en: "What is the primary operational function of the split-ring commutator in an elementary DC generator?",
        hi: "एक बुनियादी डीसी जनरेटर में स्प्लिट-रिंग कम्यूटेटर का मुख्य कार्य क्या है?",
        bn: "একটি প্রাথমিক ডিসি জেনারেটরে স্প্লিট-রিং কমিউটেটরের মূল কার্যকরী ভূমিকা কোনটি?"
      },
      options: [
        { id: "opt-1", text: { en: "It mechanically rectifies internal AC into pulsating unidirectional DC by reversing the coil connection to the external circuit every half-turn", hi: "यह प्रत्येक आधे चक्कर में बाहरी परिपथ से कनेक्शन को बदलकर आंतरिक एसी को एकदिशीय डीसी में यांत्रिक रूप से रेक्टिफाई करता है", bn: "এটি প্রতি অর্ধ-ঘূর্ণনে সংযোগ উল্টে দিয়ে অভ্যন্তরীণ এসি ভোল্টেজকে বহিঃস্থ বর্তনীর জন্য একমুখী ডিসি ভোল্টেজে রূপান্তর করে" } },
        { id: "opt-2", text: { en: "It increases the magnetic flux of the stator", hi: "यह स्टेटर के चुंबकीय फ्लक्स को बढ़ाता है", bn: "এটি স্টেটের চৌম্বক ফ্লাক্স বৃদ্ধি করে" } },
        { id: "opt-3", text: { en: "It steps up the generated voltage by 100 times", hi: "यह उत्पन्न वोल्टेज को 100 गुना बढ़ाता है", bn: "এটি উৎপন্ন ভোল্টেজ ১০০ গুণ বাড়িয়ে দেয়" } },
        { id: "opt-4", text: { en: "It provides cooling air to the bearings", hi: "यह बियरिंग्स को ठंडी हवा देता है", bn: "এটি বিয়ারিংয়ে ঠান্ডা বাতাস জোগায়" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "The commutator acts as a mechanical synchronous inverter/rectifier switch that swaps brush connections at the magnetic neutral plane, keeping the output terminal polarity constant.",
        hi: "कम्यूटेटर यांत्रिक रेक्टिफायर के रूप में कार्य करता है जो ब्रश कनेक्शन को ठीक समय पर बदलकर बाहरी लोड को हमेशा एक ही दिशा में धारा देता है।",
        bn: "কমিউটেটর একটি যান্ত্রিক রেকটিফায়ার হিসেবে কাজ করে যা ব্রাশ সংযোগ অদলবদল করে বহিঃস্থ লোডে সর্বদা একইমুখী ডিসি কারেন্ট নিশ্চিত করে।"
      }
    },
    {
      id: "mcq-ch10-l12-04",
      question: {
        en: "At what precise moment during armature rotation do the stationary carbon brushes cross the insulating gap between commutator segments?",
        hi: "आर्मेचर के घूमने के दौरान स्थिर कार्बन ब्रश कम्यूटेटर सेगमेंट के बीच की इंसुलेटिंग गैप को ठीक किस समय पार करते हैं?",
        bn: "আর্মেচার ঘূর্ণনের সময় স্থির কার্বন ব্রাশগুলো ঠিক কোন মুহূর্তে কমিউটেটর সেগমেন্টের মধ্যবর্তী ইনসুলেটিং ফাঁক অতিক্রম করে?"
      },
      options: [
        { id: "opt-1", text: { en: "When the coil passes through the Magnetic Neutral Axis (MNA) where induced EMF is instantaneously zero", hi: "जब कॉइल चुंबकीय तटस्थ अक्ष (MNA) से गुजरती है जहाँ प्रेरित EMF शून्य होता है", bn: "কয়েলটি যখন ম্যাগনেটিক নিউট্রাল অক্ষ (MNA) অতিক্রম করে যেখানে আবিষ্ট EMF শূন্য থাকে" } },
        { id: "opt-2", text: { en: "When induced EMF is at its maximum peak value", hi: "जब प्रेरित EMF अधिकतम शिखर पर होता है", bn: "যখন আবিষ্ট EMF সর্বোচ্চ শীর্ষ মানে থাকে" } },
        { id: "opt-3", text: { en: "When armature speed reaches zero", hi: "जब आर्मेचर की गति शून्य होती है", bn: "যখন আর্মেচারের গতি শূন্যে নেমে আসে" } },
        { id: "opt-4", text: { en: "Continuously at all angles without pause", hi: "बिना रुके हर कोण पर लगातार", bn: "কোনো বিরতি ছাড়া সমস্ত কোণ জুড়ে" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Commutation occurs at the Magnetic Neutral Axis where coil EMF is zero. This prevents momentary short-circuit spark damage across the brush face.",
        hi: "कम्यूटेशन न्यूट्रल अक्ष (MNA) पर होता है जहाँ EMF शून्य होता है ताकि ब्रश शॉर्ट होने पर स्पार्किंग न हो।",
        bn: "কমিউটেশন ম্যাগনেটিক নিউট্রাল অক্ষে (MNA) ঘটে যেখানে EMF শূন্য থাকে, ফলে ব্রাশ শর্ট হলেও স্পার্কিং হয় না।"
      }
    },
    {
      id: "mcq-ch10-l12-05",
      question: {
        en: "How is the high ripple voltage of an elementary single-coil DC generator smoothed into virtually steady DC in practical industrial machines?",
        hi: "एक साधारण सिंगल-कॉइल डीसी जनरेटर के अत्यधिक रिपल (कंपन) को व्यावहारिक मशीनों में स्थिर डीसी में कैसे बदला जाता है?",
        bn: "একটি সাধারণ সিঙ্গেল-কয়েল ডিসি জেনারেটরের অতিরিক্ত রিপল ভোল্টেজকে বাস্তব শিল্প জেনারেটরে কীভাবে মসৃণ ডিসিতে পরিণত করা হয়?"
      },
      options: [
        { id: "opt-1", text: { en: "By using many armature coils distributed around the periphery connected to a multi-segment commutator", hi: "परिधि पर कई कॉइल्स को बांटकर उन्हें बहु-सेगमेंट कम्यूटेटर से जोड़कर", bn: "পরিধি জুড়ে বহুসংখ্যক আর্মেচার কয়েল স্থাপন করে বহু-সেগমেন্ট বিশিষ্ট কমিউটেটরে যুক্ত করার মাধ্যমে" } },
        { id: "opt-2", text: { en: "By increasing brush spring tension tenfold", hi: "ब्रश के स्प्रिंग का तनाव 10 गुना बढ़ाकर", bn: "ব্রাশের স্প্রিং টান ১০ গুণ বৃদ্ধি করে" } },
        { id: "opt-3", text: { en: "By immersing the commutator in lubricating oil", hi: "कम्यूटेटर को तेल में डुबोकर", bn: "কমিউটেটরকে তেলে ডুবিয়ে রেখে" } },
        { id: "opt-4", text: { en: "By spinning the generator backward", hi: "जनरेटर को उल्टी दिशा में चलाकर", bn: "জেনারেটরকে উল্টো দিকে ঘুরিয়ে" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Distributing dozens of overlapping coils around the armature core connects each coil to its own commutator bar pair, producing overlapping sine waves that sum into an almost flat DC line with <1% ripple.",
        hi: "अनेक कॉइल्स और बहु-सेगमेंट कम्यूटेटर का उपयोग करने से अलग-अलग तरंगें जुड़कर लगभग पूर्णतः स्थिर डीसी वोल्टेज बनाती हैं।",
        bn: "একাধিক কয়েল ও বহু-সেগমেন্টের কমিউটেটর ব্যবহার করলে উপরিপাতিত তরঙ্গের সমষ্টি প্রায় সম্পূর্ণ সোজা ও মসৃণ ডিসি লাইন দেয়।"
      }
    },
    {
      id: "mcq-ch10-l12-06",
      question: {
        en: "What detrimental physical effect occurs during heavy load operation of a DC generator if armature reaction is not compensated?",
        hi: "यदि आर्मेचर प्रतिक्रिया की भरपाई न की जाए, तो डीसी जनरेटर पर भारी लोड पड़ने पर कौन सा हानिकारक प्रभाव पड़ता है?",
        bn: "আর্মেচার প্রতিক্রিয়া প্রশমিত না করা হলে ভারী লোডের সময় ডিসি জেনারেটরে কোন ক্ষতিকর প্রভাব দেখা যায়?"
      },
      options: [
        { id: "opt-1", text: { en: "The magnetic neutral axis shifts in the direction of rotation, causing severe sparking at the brushes", hi: "चुंबकीय तटस्थ अक्ष घूमने की दिशा में खिसक जाता है, जिससे ब्रश पर भारी स्पार्किंग होती है", bn: "ম্যাগনেটিক নিউট্রাল অক্ষ ঘূর্ণনের দিকে সরে যায়, ফলে ব্রাশে তীব্র ক্ষতিকর স্পার্কিং হয়" } },
        { id: "opt-2", text: { en: "The commutator segments turn permanently into glass", hi: "कम्यूटेटर सेगमेंट कांच बन जाते हैं", bn: "কমিউটেটরের তামার পাত কাচে রূপান্তরিত হয়" } },
        { id: "opt-3", text: { en: "The field magnets demagnetize completely in 1 millisecond", hi: "चुंबक 1 मिलीसेकंड में पूरी तरह निष्क्रिय हो जाते हैं", bn: "১ মিলিসেকেন্ডে ফিল্ড ম্যাগনেট অকেজো হয়" } },
        { id: "opt-4", text: { en: "Output voltage drops to exactly zero volts immediately", hi: "आउटपुट तुरंत शून्य वोल्ट हो जाता है", bn: "আউটপুট সাথে সাথে শূন্য ভোল্ট হয়ে যায়" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Armature cross-magnetization distorts the main flux and shifts the Magnetic Neutral Axis (MNA) forward in the direction of rotation, shorting coils with active EMF and producing destructive brush sparking.",
        hi: "आर्मेचर धारा मुख्य फ्लक्स को विकृत कर देती है जिससे MNA घूमने की दिशा में आगे बढ़ जाता है और ब्रश पर भारी स्पार्क होता है।",
        bn: "আর্মেচার কারেন্ট মূল ফ্লাক্সকে বিকৃত করে MNA কে ঘূর্ণনের দিকে সরিয়ে দেয়, ফলে কয়েলে ভোল্টেজ থাকা অবস্থাতেই ব্রাশ শর্ট হয়ে স্পার্ক সৃষ্টি হয়।"
      }
    },
    {
      id: "mcq-ch10-l12-07",
      question: {
        en: "What auxiliary components are installed in modern DC generators between the main poles to eliminate brush sparking caused by armature reaction and coil inductance?",
        hi: "आर्मेचर प्रतिक्रिया और कॉइल प्रेरकत्व से होने वाली स्पार्किंग को रोकने के लिए आधुनिक डीसी मशीनों में मुख्य ध्रुवों के बीच कौन से घटक लगाए जाते हैं?",
        bn: "আর্মেচার প্রতিক্রিয়া ও কয়েল আবেশাঙ্কের কারণে সৃষ্ট স্পার্কিং রোধে আধুনিক ডিসি মেশিনে প্রধান মেরুগুলোর মাঝে কী বসানো হয়?"
      },
      options: [
        { id: "opt-1", text: { en: "Interpoles (commutating poles) carrying armature current in series", hi: "इंटरपोल (कम्यूटेटिंग पोल) जो श्रेणीक्रम में आर्मेचर धारा ले जाते हैं", bn: "ইন্টারপোল (বা কমিউটেটিং পোল) যা আর্মেচার কারেন্টের সাথে শ্রেণীতে যুক্ত থাকে" } },
        { id: "opt-2", text: { en: "High-speed centrifugal water sprinklers", hi: "पानी छिड़कने वाले स्प्रिंकलर", bn: "উচ্চগতির পানি ছিটানোর স্প্রিংকলার" } },
        { id: "opt-3", text: { en: "Permanent rubber dampers", hi: "स्थायी रबर डैम्पर", bn: "স্থায়ী রাবার ড্যাম্পার" } },
        { id: "opt-4", text: { en: "Ceramic spark plugs", hi: "सिरेमिक स्पार्क प्लग", bn: "সিরামিক স্পার্ক প্লাগ" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Interpoles (commutating poles) are narrow auxiliary poles positioned between the main poles to neutralize cross-magnetization and induce a rotational EMF that cancels the reactance voltage L(di/dt).",
        hi: "इंटरपोल मुख्य ध्रुवों के बीच लगाए जाते हैं जो आर्मेचर फ्लक्स को संतुलित करके स्पार्क-रहित कम्यूटेशन प्रदान करते हैं।",
        bn: "প্রধান মেরুগুলোর মাঝে ইন্টারপোল বসানো হয় যা আড়াআড়ি ফ্লাক্স প্রশমিত করে এবং বিক্রিয়া ভোল্টেজ বাতিল করে নিখুঁত স্পার্কহীন কমিউটেশন দেয়।"
      }
    },
    {
      id: "mcq-ch10-l12-08",
      question: {
        en: "A single-loop DC generator produces a peak alternating voltage of E_m = 150 V. After split-ring mechanical rectification, what is the average value (V_dc) of the pulsating output waveform?",
        hi: "एक सिंगल-लूप डीसी जनरेटर 150 V का शिखर एसी वोल्टेज बनाता है। कम्यूटेटर रेक्टिफिकेशन के बाद औसत डीसी वोल्टेज क्या होगा?",
        bn: "একটি সিঙ্গেল-লুপ ডিসি জেনারেটরে শীর্ষ এসি ভোল্টেজ E_m = ১৫০ V। স্প্লিট-রিং রেকটিফিকেশনের পর স্পন্দিত ডিসি আউটপুটের গড় মান (V_dc) কত?"
      },
      options: [
        { id: "opt-1", text: { en: "95.5 V", hi: "95.5 V", bn: "৯৫.৫ V" } },
        { id: "opt-2", text: { en: "106.1 V", hi: "106.1 V", bn: "১০৬.১ V" } },
        { id: "opt-3", text: { en: "75.0 V", hi: "75.0 V", bn: "৭৫.০ V" } },
        { id: "opt-4", text: { en: "150.0 V", hi: "150.0 V", bn: "১৫০.০ V" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "V_avg = (2 / π) · E_m = (2 / 3.14159) × 150 V ≈ 0.6366 × 150 ≈ 95.5 V.",
        hi: "औसत वोल्टेज V_avg = (2 / π) · E_m = 0.637 × 150 = 95.5 V।",
        bn: "গড় ভোল্টেজ V_avg = (২ / π) · E_m = ০.৬৩৭ × ১৫০ = ৯৫.৫ V।"
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch10-l12-1',
      question: {
        en: 'A 4-pole DC generator has a lap-wound armature with 480 conductors. If the flux per pole is 0.025 Wb and it is driven at 1,200 RPM, calculate the generated EMF E_g.',
        hi: 'एक 4-ध्रुवीय डीसी जनरेटर के लैप-वाउंड आर्मेचर में 480 चालक हैं। यदि प्रति ध्रुव फ्लक्स 0.025 Wb है और यह 1,200 RPM पर घूमता है, तो उत्पन्न ईएमएफ E_g की गणना कीजिए।',
        bn: 'একটি ৪-মেরু বিশিষ্ট ডিসি জেনারেটরে ল্যাপ ওয়াইন্ডিংযুক্ত আর্মেচারে ৪৮০টি পরিবাহী আছে। প্রতি মেরুতে ফ্লাক্স ০.০২৫ ওয়েবার এবং গতি ১,২০০ RPM হলে উৎপন্ন ইএমএফ E_g নির্ণয় করুন।'
      },
      hint: {
        en: 'For a lap-wound machine, parallel paths A = P = 4. Use E_g = (P · Φ · Z · N) / (60 · A).',
        hi: 'लैप वाइंडिंग के लिए A = P = 4। सूत्र E_g = (P · Φ · Z · N) / (60 · A) का उपयोग करें।',
        bn: 'ল্যাপ ওয়াইন্ডিংয়ের ক্ষেত্রে A = P = ৪। সূত্র E_g = (P · Φ · Z · N) / (৬০ · A) ব্যবহার করুন।'
      },
      answerKey: {
        en: 'E_g = (4 × 0.025 × 480 × 1200) / (60 × 4) = 57,600 / 240 = 240 Volts.',
        hi: 'E_g = (4 × 0.025 × 480 × 1200) / (60 × 4) = 240 वोल्ट।',
        bn: 'E_g = (৪ × ০.০২৫ × ৪৮০ × ১২০০) / (৬০ × ৪) = ২৪০ ভোল্ট।'
      }
    }
  ]
};
