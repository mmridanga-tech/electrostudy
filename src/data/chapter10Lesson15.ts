import { Lesson } from '../types';

export const LESSON_INDUCTION_COILS_TRANSFORMERS: Lesson = {
  id: 'lsn-ch10-induction-coils-transformers',
  topicId: 'ch10-induction-coils-transformers',
  chapterId: 'ch-em-induction',
  order: 15,
  title: {
    en: 'Induction Coils, Ruhmkorff Spark Coils & Transformer Action Principles',
    hi: 'प्रेरण कुंडलियां, रूह्मकॉर्फ स्पार्क कॉइल एवं ट्रांसफार्मर क्रिया सिद्धांत',
    bn: 'আবেশ কয়েল, রুমকর্ফ স্পার্ক কয়েল ও ট্রান্সফরমারের কার্যনীতি'
  },
  description: {
    en: 'Operational physics of Ruhmkorff coils, mechanical interrupter dynamics, inductive kick suppression by quench capacitors, extreme step-up voltage pulses, and evolution to AC transformers.',
    hi: 'रूह्मकॉर्फ कॉइल की कार्यप्रणाली, यांत्रिक इंटरप्टर गतिशीलता, शमन कैपेसिटर द्वारा स्पार्क रोकथाम, अत्यधिक उच्च वोल्टेज स्पंदन तथा आधुनिक एसी ट्रांसफार्मर का विकास।',
    bn: 'রুমকর্ফ কয়েলের পদার্থবিদ্যা, মেকানিক্যাল ইন্টারাপ্টারের গতিবিদ্যা, ক্যাপাসিটর দ্বারা স্পার্ক দমন, চরম উচ্চ-ভোল্টেজ স্পন্দন এবং আধুনিক এসি ট্রান্সফরমারের বিবর্তন।'
  },
  estimatedMinutes: 32,
  easyExplanation: {
    en: "Before modern power plants existed, inventors needed a way to produce massive lightning-like voltages from modest 6-volt batteries. In 1851, Heinrich Ruhmkorff perfected the 'Induction Coil'. It wrapped a few turns of thick wire (the primary) and thousands of turns of hair-thin wire (the secondary) around an iron core. A springy vibrating metal hammer automatically clicked on and off, snapping the battery current dozens of times per second. When the switch broke open, the magnetic field collapsed almost instantly, shooting the voltage in the secondary coil from 6 volts up to 50,000 volts—leaping across open air as bright purple sparks! This direct ancestor of the car ignition coil paved the way for modern AC transformers.",
    hi: 'आधुनिक बिजली ग्रिड बनने से पहले वैज्ञानिकों को 6 वोल्ट की साधारण बैटरी से 50,000 वोल्ट के बिजली के झटके पैदा करने की तकनीक चाहिए थी। 1851 में हेनरिक रूह्मकॉर्फ ने "इंडक्शन कॉइल" (प्रेरण कुंडली) को सिद्ध किया। इसमें एक लोहे के कोर पर मोटे तार के कुछ फेरे (प्राथमिक) और पतले तार के हजारों फेरे (द्वितीयक) लपेटे जाते थे। एक कंपन करने वाला यांत्रिक हथौड़ा बैटरी के करंट को सेकंड में सैकड़ों बार अचानक काटता था। करंट कटते ही चुंबकीय क्षेत्र बिजली की गति से ढह जाता था, जिससे द्वितीयक कुंडली में 50,000 वोल्ट का जोरदार स्पंदन उत्पन्न होता था जो हवा में नीली चिंगारियां फेंक देता था!',
    bn: 'আধুনিক পাওয়ার গ্রিড আবিষ্কারের পূর্বে সাধারণ ৬ ভোল্ট ব্যাটারি থেকে ৫০,০০০ ভোল্টের বজ্রপাতের মতো স্পার্ক তৈরির কৌশল ছিল রুমকর্ফ ইন্ডাকশন কয়েল। ১৮৫১ সালে উদ্ভাবিত এই যন্ত্রে একটি লোহার কোরে মোটা তারের প্রাইমারি এবং হাজার হাজার পাকের সরু তারের সেকেন্ডারি কয়েল প্যাঁচানো থাকত। একটি কম্পনশীল মেকানিক্যাল হ্যামার সেকেন্ডে বহুবার ব্যাটারির সংযোগ দ্রুত বিচ্ছিন্ন করত। সংযোগ বিচ্ছিন্ন হওয়ার মুহূর্তে চৌম্বক ক্ষেত্র নিমেষে ভেঙে পড়ায় সেকেন্ডারি কয়েলে ৫০,০০০ ভোল্টের বিশাল স্পন্দন সৃষ্টি হতো, যা বায়ুর মধ্য দিয়ে উজ্জ্বল বেগুনি স্পার্ক তৈরি করত।'
  },
  detailedExplanation: {
    en: `1. Physical Architecture of the Ruhmkorff Coil:
- Soft Iron Core: A bundle of insulated soft iron wires (not a solid rod, to prevent eddy current damping).
- Primary Winding: 100 to 300 turns of thick, heavy-gauge copper wire designed to carry several amperes of current with low resistance.
- Secondary Winding: 50,000 to 200,000 turns of ultra-fine, silk- or enamel-insulated copper wire wound in pie-shaped disc sections to withstand extreme interlaminar dielectric stress.
- Mechanical Interrupter (Hammer/Trembler Break): An armature spring with a soft iron hammer positioned opposite the core face, opening tungsten/platinum contacts when magnetized.
- Quench Capacitor (C): Connected in parallel directly across the breaker contacts (typically 0.1 to 2 μF).
- Adjustable Spark Gap: Pointed bronze or tungsten electrodes separated by 1 cm to 30 cm of ambient air.

2. Cycle of Operation & Asymmetric dI/dt Dynamics:
- The 'Make' Phase (Switch Closes):
  Current begins rising in the primary:
  i_p(t) = (V_batt / R) · (1 - e^(-t / τ_make))
  where τ_make = L_p / R. Because inductance L_p opposes current growth, the rate of current rise (dI/dt)_make is moderate.
  The induced secondary voltage e_s = -M · (dI/dt)_make is only a few hundred volts—insufficient to jump the spark gap.
- The 'Break' Phase (Switch Snaps Open):
  As current reaches near peak, the magnetized iron core attracts the hammer, violently snatching the contacts apart.
  The current tries to stop instantaneously.
  Without a capacitor, current would arc across the contacts, burning them and prolonging the magnetic collapse (dI/dt remains low).
- The Crucial Role of the Quench Capacitor:
  The capacitor absorbs the inductive surge:
  i_p rapidly charges C instead of forming an arc.
  Once charged, C discharges backwards through L_p, creating an LC resonant quarter-cycle demagnetization that plunges the core flux to zero (and even slightly reverses it) in a few microseconds:
  (dI/dt)_break >> 100 · (dI/dt)_make
- The resulting secondary induced voltage pulse:
  e_s(break) = - M · (dI/dt)_break = - N_s · (dΦ / dt)_break
  skyrockets into tens of kilovolts (20 kV to 100+ kV), easily breaking down the dielectric strength of air (30 kV/cm) and detonating bright, continuous sparks!

3. Mathematical Formulation of Induced Secondary Pulse:
Energy stored in primary magnetic field just before break:
  W_mag = (1/2) · L_p · I_peak²
Neglecting losses, during contact separation this magnetic energy transfers into electrostatic energy of the capacitor C and secondary self-capacitance C_s:
  (1/2) · L_p · I_peak² ≈ (1/2) · C_eff · V_peak²
The maximum secondary voltage achieved is:
  V_sec,max ≈ I_peak · √( L_s / C_eff )
Demonstrating that smaller parasitic capacitance and faster magnetic interruption directly multiply the peak breakdown voltage!

4. Historical Legacy & Evolution to Modern Transformers:
- The Ruhmkorff coil powered Heinrich Hertz's 1887 discovery of electromagnetic radio waves, Wilhelm Röntgen's 1895 discovery of X-rays, and J.J. Thomson's 1897 discovery of the electron in Crookes tubes.
- In the 1880s, engineers realized that replacing the interrupted DC battery with continuous alternating current (AC) eliminated mechanical breaker contacts altogether. Lucien Gaulard, John Gibbs, and the Hungarian Ganz team (Zipernowsky, Déri, Bláthy) developed closed-core AC power transformers, establishing modern AC power grids.
- Modern Descendants: Automotive Kettering ignition coils (triggering spark plugs in gasoline internal combustion engines), electric fence energizers, and cattle prods.`,

    hi: `1. रूह्मकॉर्फ कॉइल की संरचना:
- कोर: भंवर धाराओं को रोकने के लिए पतले लोहे के तारों का गुच्छा।
- प्राथमिक वाइंडिंग: मोटे तार के कुछ सौ फेरे।
- द्वितीयक वाइंडिंग: अत्यंत पतले तार के 50,000 से 200,000 फेरे।
- यांत्रिक इंटरप्टर (हथौड़ा): कोर के चुंबक बनते ही संपर्कों को तेजी से खोलता है।
- शमन कैपेसिटर (Quench Capacitor): संपर्कों के समानांतर लगा कैपेसिटर जो स्पार्किंग को रोकता है और चुंबकीय क्षेत्र को माइक्रोसेकंड में शून्य कर देता है।

2. कार्यप्रणाली एवं विषम dI/dt:
- संपर्क जुड़ने पर धारा धीरे-धीरे बढ़ती है, जिससे द्वितीयक में वोल्टेज कम रहता है।
- संपर्क टूटते ही कैपेसिटर के कारण प्राथमिक धारा अत्यधिक तेजी से गिरती है ((dI/dt)_break बहुत बड़ा होता है)।
- फैराडे के नियम e_s = -M(dI/dt) के अनुसार, द्वितीयक कुंडली में 20,000 से 100,000 वोल्ट का विशाल स्पंदन उत्पन्न होता है जो हवा में चिंगारी पैदा कर देता है।

3. आधुनिक महत्व:
यह आधुनिक ऑटोमोबाइल इग्निशन कॉइल (स्पार्क प्लग) और एसी पावर ट्रांसफार्मर का जनक है।`,

    bn: `১. রুমকর্ফ কয়েলের গঠন ও মেকানিক্স:
নরম লোহার তারের কোরের ওপর মোটা তারের প্রাইমারি এবং হাজার হাজার পাকের সরু তারের সেকেন্ডারি কয়েল প্যাঁচানো থাকে। একটি মেকানিক্যাল হ্যামার সেকেন্ডে বহুবার সার্কিট ব্রেক করে।

২. ক্যাপাসিটরের ভূমিকা ও চরম dI/dt:
কানেকশন বিচ্ছিন্ন হওয়ার সময় ব্রেকে স্পার্কিং রোধ করতে একটি প্যারালাল ক্যাপাসিটর ব্যবহৃত হয়। এটি চৌম্বক ক্ষেত্রকে অত্যন্ত দ্রুত (কয়েক মাইক্রোসেকেন্ডে) ভেঙে ফেলে। ফলে (dI/dt) চরম আকার ধারণ করে এবং সেকেন্ডারিতে ৫০,০০০+ ভোল্ট আবিষ্ট হয়ে স্পার্ক গ্যাপে স্ফুলিঙ্গ ঘটায়।`
  },
  formulas: [
    {
      id: 'f-induction-coil-secondary-voltage',
      symbol: 'e_s(break)',
      expression: 'e_s(break) = - M · |dI_p / dt|_break = - N_s · (dΦ / dt)',
      title: {
        en: 'Peak Secondary Voltage on Interrupter Break',
        hi: 'इंटरप्टर टूटने पर शिखर द्वितीयक वोल्टेज',
        bn: 'ইন্টারাপ্টার বিচ্ছিন্নকালে শীর্ষ সেকেন্ডারি ভোল্টেজ'
      },
      description: {
        en: 'Massive step-up voltage induced in the secondary winding during rapid magnetic field collapse at contact break',
        hi: 'संपर्क विच्छेद पर चुंबकीय क्षेत्र के त्वरित ढहने के दौरान द्वितीयक कुंडली में प्रेरित विशाल स्टेप-अप वोल्टेज',
        bn: 'সংযোগ বিচ্ছিন্নকালে চৌম্বক ক্ষেত্রের আকস্মিক পতনের সময় সেকেন্ডারি কয়েলে আবিষ্ট তীব্র হাই-ভোল্টেজ'
      },
      variables: [
        { symbol: 'e_s(break)', name: { en: 'Peak secondary breakdown voltage (V)', hi: 'शिखर द्वितीयक वोल्टेज (V)', bn: 'শীর্ষ সেকেন্ডারি ভোল্টেজ (V)' } },
        { symbol: 'M', name: { en: 'Mutual inductance between windings (H)', hi: 'अन्योन्य प्रेरकत्व (H)', bn: 'পারস্পরিক আবেশাঙ্ক (H)' } },
        { symbol: 'dI_p / dt', name: { en: 'Primary current interruption rate (A/s)', hi: 'प्राथमिक धारा पतन दर (A/s)', bn: 'প্রাইমারি কারেন্ট পতনের হার (A/s)' } },
        { symbol: 'N_s', name: { en: 'Secondary turns (typically 10⁴ to 10⁵)', hi: 'द्वितीयक फेरों की संख्या', bn: 'সেকেন্ডারি কয়েলের পাকসংখ্যা' } }
      ]
    },
    {
      id: 'f-induction-coil-energy-balance',
      symbol: 'V_s,max',
      expression: 'V_s,max ≈ I_p,peak · √( L_s / C_eff )',
      title: {
        en: 'Inductive Energy to Electrostatic Peak Conversion',
        hi: 'प्रेरक ऊर्जा से स्थिरविद्युत शिखर रूपांतरण',
        bn: 'চৌম্বকীয় শক্তি থেকে ইলেক্ট্রোস্ট্যাটিক শীর্ষ রূপান্তর'
      },
      description: {
        en: 'Peak secondary voltage derived from magnetic-to-capacitive resonance conservation of energy',
        hi: 'ऊर्जा संरक्षण से प्राप्त अधिकतम द्वितीयक शिखर वोल्टेज',
        bn: 'শক্তি সংরক্ষণ নীতির মাধ্যমে সেকেন্ডারি শীর্ষ ভোল্টেজ'
      },
      variables: [
        { symbol: 'V_s,max', name: { en: 'Maximum secondary peak voltage (V)', hi: 'अधिकतम द्वितीयक वोल्टेज (V)', bn: 'সর্বোচ্চ সেকেন্ডারি ভোল্টেজ (V)' } },
        { symbol: 'I_p,peak', name: { en: 'Peak primary current prior to break (A)', hi: 'विच्छेद से पूर्व प्राथमिक धारा (A)', bn: 'বিচ্ছিন্নতার পূর্বে সর্বোচ্চ প্রাইমারি কারেন্ট (A)' } },
        { symbol: 'L_s', name: { en: 'Secondary winding self-inductance (H)', hi: 'द्वितीयक स्व-प्रेरकत्व (H)', bn: 'সেকেন্ডারি কয়েলের স্ব-আবেশাঙ্ক (H)' } },
        { symbol: 'C_eff', name: { en: 'Effective secondary lump capacitance (F)', hi: 'प्रभावी द्वितीयक धारिता (F)', bn: 'কার্যকর সেকেন্ডারি ধারকত্ব (F)' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-quench-capacitor-detail',
      title: {
        en: 'Armand Fizeau’s Quench Capacitor: The Spark Secret',
        hi: 'अरमांड फिजो का शमन कैपेसिटर: स्पार्क का रहस्य',
        bn: 'আরমান্ড ফিজোর কোয়েঞ্চ ক্যাপাসিটর: স্পার্কের রহস্য'
      },
      content: {
        en: `Why an induction coil fails completely without a capacitor:
1. When Heinrich Ruhmkorff built his first coils in 1851, the secondary sparks were weak (barely a few millimeters long).
2. The problem: When the hammer contacts separated, an intense electric arc jumped across the opening contacts. This continuous arc acted as a conducting plasma bridge, allowing primary current to decay slowly and destroying the breaker contacts through pitting.
3. In 1853, French physicist Armand Fizeau placed a paper-and-tinfoil capacitor across the breaker contacts.
4. The capacitor offered an uncharged, low-impedance alternate path. The inductive kick charged the capacitor rather than ionizing air between the contacts.
5. With the arc quenched instantly, the primary current plummeted in microseconds, instantly multiplying the secondary voltage by 10 to 20 times and producing 15-centimeter lightning sparks!`,
        hi: `कैपेसिटर के बिना इंडक्शन कॉइल क्यों विफल हो जाती है?
1. 1851 में रूह्मकॉर्फ के शुरुआती मॉडलों में चिंगारी बहुत छोटी होती थी क्योंकि संपर्क खुलते ही उनके बीच एक बड़ा स्पार्क बन जाता था जो करंट को धीरे-धीरे बंद होने देता था।
2. 1853 में अरमांड फिजो ने संपर्कों के आर-पार एक कैपेसिटर लगाया।
3. कैपेसिटर ने संपर्कों के बीच के स्पार्क को सोख लिया, जिससे प्राथमिक धारा बिजली की गति से शून्य हो गई।
4. इसके कारण द्वितीयक वोल्टेज 20 गुना बढ़ गया और लंबी-लंबी चिंगारियां निकलने लगीं।`,
        bn: `ক্যাপাসিটর ছাড়া কেন ইন্ডাকশন কয়েল ব্যর্থ হয়?
যোগাযোগ বিচ্ছিন্ন হওয়ার সময় কার্বন ব্রাশের মাঝে যে আর্ক তৈরি হয়, তা কারেন্টকে ধীরে ধীরে কমতে বাধ্য করত। ১৮৫৩ সালে ফিজো একটি প্যারালাল ক্যাপাসিটর যুক্ত করেন। এটি আর্ক দমন করে প্রাইমারি কারেন্টকে কয়েক মাইক্রোসেকেন্ডে শূন্য করে ফেলে, ফলে সেকেন্ডারি ভোল্টেজ বহুগুণ বৃদ্ধি পায়।`
      },
      schematicId: 'circuit-ch10-induction-coil-ruhmkorff'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-indcoil-1',
      problem: {
        en: 'A Ruhmkorff induction coil has a primary winding with N_p = 200 turns, resistance R_p = 1.2 Ω, and inductance L_p = 15 mH. The secondary winding has N_s = 50,000 turns with mutual inductance M = 3.5 H. The primary is supplied from a 12 V accumulator. When the interrupter contacts open, the parallel Fizeau quench capacitor (C = 0.25 μF) forces the primary current to collapse from its steady-state value to zero in Δt = 80 μs. Determine: (a) The steady-state primary current I_p0, (b) The average rate of current collapse (dI_p / dt)_break, (c) The peak induced secondary voltage e_s(peak), and (d) The theoretical maximum spark discharge gap in dry air (dielectric strength = 30 kV/cm).',
        hi: 'एक रूह्मकॉर्फ इंडक्शन कॉइल में प्राथमिक वाइंडिंग N_p = 200 फेरे, प्रतिरोध R_p = 1.2 Ω और प्रेरकत्व L_p = 15 mH है। द्वितीयक वाइंडिंग में N_s = 50,000 फेरे और पारस्परिक प्रेरकत्व M = 3.5 H है। प्राथमिक को 12 V बैटरी से जोड़ा गया है। इंटरप्टर खुलने पर कैपेसिटर प्राथमिक धारा को Δt = 80 μs में शून्य कर देता है। ज्ञात कीजिए: (a) स्थिर प्राथमिक धारा I_p0, (b) धारा पतन की दर (dI_p / dt), (c) शिखर द्वितीयक वोल्टेज e_s(peak), तथा (d) शुष्क वायु में अधिकतम स्पार्क की लंबाई (परावैद्युत शक्ति = 30 kV/cm)।',
        bn: 'একটি রুমকরফ ইন্ডাকশন কয়েলের প্রাইমারি ওয়াইন্ডিংয়ে পাকসংখ্যা N_p = ২০০, রোধ R_p = ১.২ Ω এবং আবেশাঙ্ক L_p = ১৫ mH। সেকেন্ডারি ওয়াইন্ডিংয়ে পাকসংখ্যা N_s = ৫০,০০০ এবং পারস্পরিক আবেশাঙ্ক M = ৩.৫ H। প্রাইমারিতে ১২ V ব্যাটারি যুক্ত। ইন্টারাপ্টার বিচ্ছিন্ন হলে প্যারালাল ক্যাপাসিটর প্রাইমারি কারেন্টকে Δt = ৮০ μs সময়ে শূন্য করে ফেলে। নির্ণয় কর: (a) স্থির প্রাইমারি কারেন্ট I_p0, (b) কারেন্ট পতনের হার (dI_p / dt), (c) সেকেন্ডারিতে আবিষ্ট শীর্ষ ভোল্টেজ e_s(peak), এবং (d) শুষ্ক বাতাসে স্পার্কের সর্বোচ্চ দৈর্ঘ্য (বাতাসের পরাবৈদ্যুতিক শক্তি = ৩০ kV/cm)।'
      },
      givenValues: {
        en: 'N_p = 200, R_p = 1.2 Ω, L_p = 15 mH, N_s = 50,000, M = 3.5 H, V_dc = 12 V, Δt = 80 μs, E_breakdown = 30 kV/cm',
        hi: 'N_p = 200, R_p = 1.2 Ω, L_p = 15 mH, N_s = 50000, M = 3.5 H, V_dc = 12 V, Δt = 80 μs, E_breakdown = 30 kV/cm',
        bn: 'N_p = ২০০, R_p = ১.২ Ω, L_p = ১৫ mH, N_s = ৫০,০০০, M = ৩.৫ H, V_dc = ১২ V, Δt = ৮০ μs, E_breakdown = ৩০ kV/cm'
      },
      solution: {
        en: `1. Calculate steady-state primary current:
   I_p0 = V_dc / R_p = 12 V / 1.2 Ω = 10.0 A
2. Calculate rate of primary current collapse at break:
   |dI_p / dt| = ΔI / Δt = 10.0 A / (80 × 10⁻⁶ s) = 1.25 × 10⁵ A/s (125,000 A/s)
3. Calculate peak secondary induced high EMF:
   e_s(peak) = M · |dI_p / dt| = 3.5 H · (1.25 × 10⁵ A/s) = 437,500 V = 437.5 kV
4. Calculate maximum theoretical spark discharge gap:
   d_spark = e_s(peak) / E_breakdown = 437.5 kV / (30 kV/cm) ≈ 14.58 cm
   (A lightning-like continuous spark nearly 15 cm long across the discharge sphere electrodes!)`,
        hi: `1. प्राथमिक स्थिर धारा:
   I_p0 = 12 V / 1.2 Ω = 10.0 A
2. धारा पतन की दर:
   |dI_p / dt| = 10.0 A / (80 × 10⁻⁶ s) = 1.25 × 10⁵ A/s
3. शिखर द्वितीयक ईएमएफ:
   e_s(peak) = M × |dI_p / dt| = 3.5 H × 1.25 × 10⁵ A/s = 437,500 V = 437.5 kV
4. स्पार्क की अधिकतम लंबाई:
   d_spark = 437.5 kV / (30 kV/cm) ≈ 14.6 cm`,
        bn: `১. প্রাইমারির স্থির বিদ্যুৎ প্রবাহ:
   I_p0 = ১২ V / ১.২ Ω = ১০.০ A
২. বিচ্ছিন্নকালে কারেন্ট পতনের হার:
   |dI_p / dt| = ১০.০ A / (৮০ × ১০⁻⁶ s) = ১.২৫ × ১০⁵ A/s
৩. সেকেন্ডারিতে শীর্ষ আবিষ্ট ভোল্টেজ:
   e_s(peak) = M × |dI_p / dt| = ৩.৫ H × ১.২৫ × ১০⁵ A/s = ৪৩৭,৫০০ V = ৪৩৭.৫ kV
৪. স্পার্কের সর্বোচ্চ দৈর্ঘ্য:
   d_spark = ৪৩৭.৫ kV / (৩০ kV/cm) ≈ ১৪.৫৮ cm`
      },
      finalAnswer: {
        en: 'I_p0 = 10.0 A; |dI_p/dt| = 1.25 × 10⁵ A/s; e_s(peak) = 437.5 kV; Spark Length = 14.6 cm',
        hi: 'I_p0 = 10.0 A; |dI_p/dt| = 1.25 × 10⁵ A/s; e_s(peak) = 437.5 kV; स्पार्क लंबाई = 14.6 cm',
        bn: 'I_p0 = ১০.০ A; |dI_p/dt| = ১.২৫ × ১০⁵ A/s; e_s(peak) = ৪৩৭.৫ kV; স্পার্কের দৈর্ঘ্য = ১৪.৬ cm'
      }
    },
    {
      id: 'ex-indcoil-2',
      problem: {
        en: 'A 25 kVA, 2200 V / 220 V, 50 Hz single-phase step-down distribution transformer has primary winding resistance R₁ = 2.4 Ω and secondary winding resistance R₂ = 0.025 Ω. Open-circuit core loss is P_core = 220 W. Determine: (a) The transformation turns ratio a = N₁ / N₂, (b) The total equivalent resistance R_eq1 referred to the primary winding, (c) Full-load primary and secondary rated currents, and (d) The full-load copper loss P_cu(fl) and full-load efficiency η at unity power factor (cos φ = 1.0).',
        hi: 'एक 25 kVA, 2200 V / 220 V, 50 Hz सिंगल-फेज स्टेप-डाउन ट्रांसफॉर्मर का प्राथमिक प्रतिरोध R₁ = 2.4 Ω और द्वितीयक प्रतिरोध R₂ = 0.025 Ω है। कोर हानि P_core = 220 W है। ज्ञात कीजिए: (a) रूपांतरण अनुपात a = N₁ / N₂, (b) प्राथमिक के संदर्भ में कुल समतुल्य प्रतिरोध R_eq1, (c) पूर्ण-भार प्राथमिक और द्वितीयक धाराएं, तथा (d) पूर्ण-भार तांबे की हानि P_cu(fl) एवं इकाई शक्ति गुणांक (cos φ = 1.0) पर दक्षता η।',
        bn: 'একটি ২৫ kVA, ২২০০ V / ২২০ V, ৫০ Hz সিঙ্গেল-ফেজ স্টেপ-ডাউন ট্রান্সফরমারের প্রাইমারি ওয়াইন্ডিং রোধ R₁ = ২.৪ Ω এবং সেকেন্ডারি ওয়াইন্ডিং রোধ R₂ = ০.০২৫ Ω। কোর অপচয় P_core = ২২০ W। নির্ণয় কর: (a) রূপান্তর অনুপাত a = N₁ / N₂, (b) প্রাইমারির সাপেক্ষে মোট সমতুল্য রোধ R_eq1, (c) পূর্ণ-ভার প্রাইমারি ও সেকেন্ডারি কারেন্ট, এবং (d) পূর্ণ-ভার কপার অপচয় P_cu(fl) ও একক পাওয়ার ফ্যাক্টরে কর্মদক্ষতা η।'
      },
      givenValues: {
        en: 'S = 25 kVA, V₁ = 2200 V, V₂ = 220 V, R₁ = 2.4 Ω, R₂ = 0.025 Ω, P_core = 220 W, cos φ = 1.0',
        hi: 'S = 25 kVA, V₁ = 2200 V, V₂ = 220 V, R₁ = 2.4 Ω, R₂ = 0.025 Ω, P_core = 220 W, cos φ = 1.0',
        bn: 'S = ২৫ kVA, V₁ = ২২০০ V, V₂ = ২২০ V, R₁ = ২.৪ Ω, R₂ = ০.০২৫ Ω, P_core = ২২০ W, cos φ = ১.০'
      },
      solution: {
        en: `1. Calculate transformation turns ratio:
   a = V₁ / V₂ = 2200 V / 220 V = 10.0
2. Calculate total equivalent resistance referred to primary:
   R_eq1 = R₁ + a² · R₂ = 2.4 Ω + (10)² · 0.025 Ω = 2.4 Ω + 2.5 Ω = 4.90 Ω
3. Calculate rated full-load currents:
   I₁ = S / V₁ = 25,000 VA / 2200 V ≈ 11.36 A
   I₂ = S / V₂ = 25,000 VA / 220 V ≈ 113.64 A
4. Calculate full-load copper loss:
   P_cu(fl) = I₁² · R_eq1 = (11.364 A)² · 4.90 Ω = 129.14 · 4.90 ≈ 632.8 W
5. Calculate total losses and full-load efficiency:
   P_total_loss = P_core + P_cu(fl) = 220 W + 632.8 W = 852.8 W
   P_out = S · cos φ = 25,000 W
   P_in = P_out + P_total_loss = 25,000 + 852.8 = 25,852.8 W
   η = (P_out / P_in) · 100% = (25,000 / 25,852.8) · 100% ≈ 96.7%`,
        hi: `1. रूपांतरण अनुपात:
   a = 2200 / 220 = 10.0
2. प्राथमिक के संदर्भ में समतुल्य प्रतिरोध:
   R_eq1 = R₁ + a² × R₂ = 2.4 + (100 × 0.025) = 4.90 Ω
3. पूर्ण-भार धाराएं:
   I₁ = 25000 / 2200 ≈ 11.36 A
   I₂ = 25000 / 220 ≈ 113.64 A
4. तांबे की हानि:
   P_cu(fl) = I₁² × R_eq1 = (11.364)² × 4.90 ≈ 632.8 W
5. कुल हानि और दक्षता:
   कुल हानि = 220 + 632.8 = 852.8 W
   दक्षता η = (25000 / 25852.8) × 100% ≈ 96.7%`,
        bn: `১. রূপান্তর অনুপাত:
   a = ২২০০ / ২২০ = ১০.০
২. প্রাইমারিতে রূপান্তরিত মোট সমতুল্য রোধ:
   R_eq1 = R₁ + a² × R₂ = ২.৪ + (১০০ × ০.০২৫) = ৪.৯০ Ω
৩. পূর্ণ-ভার কারেন্ট:
   I₁ = ২৫০০০ / ২২০০ ≈ ১১.৩৬ A
   I₂ = ২৫০০০ / ২২০ ≈ ১১৩.৬৪ A
৪. পূর্ণ-ভার কপার অপচয়:
   P_cu(fl) = I₁² × R_eq1 = (১১.৩৬৪)² × ৪.৯০ ≈ ৬৩২.৮ W
৫. মোট অপচয় ও কর্মদক্ষতা:
   মোট অপচয় = ২২০ + ৬৩২.৮ = ৮৫২.৮ W
   দক্ষতা η = (২৫০০০ / ২৫৮৫২.৮) × ১০০% ≈ ৯৬.৭%`
      },
      finalAnswer: {
        en: 'Turns ratio a = 10; R_eq1 = 4.90 Ω; P_cu = 632.8 W; Efficiency η = 96.7%',
        hi: 'फेरा अनुपात a = 10; R_eq1 = 4.90 Ω; कॉपर हानि P_cu = 632.8 W; दक्षता η = 96.7%',
        bn: 'পাক অনুপাত a = ১০; R_eq1 = ৪.৯০ Ω; কপার অপচয় P_cu = ৬৩২.৮ W; কর্মদক্ষতা η = ৯৬.৭%'
      }
    }
  ],
  practicalApplications: {
    en: [
      'High-Voltage Electrical Grid Transmission: Step-up power transformers increase generation voltage up to 765 kV to minimize line current and long-distance I²R transmission losses.',
      'Automotive Spark Ignition Coils: Modern solid-state Ruhmkorff coils step up 12 V battery pulses to 35,000 V to ignite gasoline-air mixtures in internal combustion engines.',
      'Medical X-Ray & Particle Accelerator Supplies: Multi-stage step-up transformers generate 50 kV to 150 kV to accelerate electron beams toward tungsten anode targets.',
      'High-Frequency Switch-Mode Power Supplies (SMPS): Ferrite-core planar transformers provide galvanic safety isolation and voltage conversion in laptops and servers.',
      'Instrument Transformers (CT & PT): Protective current and potential transformers scale down dangerous thousands-of-amperes and kilovolts to safe 5 A and 110 V levels for metering.'
    ],
    hi: [
      'पावर ग्रिड ट्रांसमिशन: ट्रांसमिशन लाइनों में I²R ऊर्जा हानि को कम करने के लिए वोल्टेज को 765 kV तक बढ़ाने वाले स्टेप-अप पावर ट्रांसफॉर्मर।',
      'गाड़ियों की स्पार्क इग्निशन कॉइल: पेट्रोल इंजनों में स्पार्क प्लग के लिए 12 V को 35,000 V में बदलने वाली आधुनिक रूह्मकॉर्फ इंडक्शन कॉइल।',
      'एक्स-रे और मेडिकल उपकरण: टंगस्टन एनोड पर इलेक्ट्रॉनों को त्वरित करने के लिए 50 kV से 150 kV उत्पन्न करने वाले हाई-वोल्टेज ट्रांसफॉर्मर।',
      'कंप्यूटर व चार्जर SMPS ट्रांसफॉर्मर: फेराइट कोर वाले ट्रांसफॉर्मर जो उच्च आवृत्ति (100 kHz) पर लघु आकार में विद्युत अलगाव और वोल्टेज नियंत्रण देते हैं।',
      'इंस्ट्रूमेंट ट्रांसफॉर्मर (CT और PT): ग्रिड मीटरिंग के लिए हजारों वोल्ट और करंट को सुरक्षित 110 V और 5 A स्तरों पर घटाने वाले उपकरण।'
    ],
    bn: [
      'বিদ্যুৎ গ্রিড সঞ্চালন ব্যবস্থা: সঞ্চালন তারে I²R অপচয় কমাতে জেনারেশন ভোল্টেজকে ৭৬৫ kV পর্যন্ত ধাপে ধাপে বৃদ্ধির জন্য স্টেপ-আপ ট্রান্সফরমার।',
      'গাড়ির ইঞ্জিন ইগনিশন কয়েল: পেট্রোল ইঞ্জিনের স্পার্ক প্লাগে স্পার্ক তৈরিতে ১২ V ব্যাটারি ভোল্টেজকে ৩৫,০০০ ভোল্টে রূপান্তরকারী আধুনিক রুমকরফ কয়েল।',
      'মেডিকেল এক্স-রে উচ্চ-ভোল্টেজ সরবরাহ: টাংস্টেন টার্গেটে ইলেকট্রন নিক্ষেপের জন্য ৫০ kV থেকে ১৫০ kV ভোল্টেজ তৈরির স্টেপ-আপ ট্রান্সফরমার।',
      'কম্পিউটার ও মোবাইল চার্জারের SMPS: ফেরাইট কোরের উচ্চ-কম্পাঙ্ক ট্রান্সফরমার যা নিরাপদ গ্যালভানিক আইসোলেশন ও ভোল্টেজ রূপান্তর প্রদান করে।',
      'ইন্সট্রুমেন্ট ট্রান্সফরমার (CT ও PT): সাবস্টেশন মিটারের সুরক্ষার জন্য বিপজ্জনক উচ্চ ভোল্টেজ ও কারেন্টকে নিরাপদ ১১০ V ও ৫ A মাত্রায় নামিয়ে আনা।'
    ]
  },
  importantPoints: {
    en: [
      'Mutual induction foundation: A changing current in the primary winding produces a changing magnetic flux that links the secondary winding, inducing voltage: e_s = -M(dI_p/dt).',
      'Ruhmkorff break asymmetry: Current rises slowly at contact "make" governed by the L/R time constant, but collapses almost instantaneously at contact "break" aided by the quench capacitor, producing extreme (dI/dt)_break and high spark voltage.',
      'Quench capacitor mechanism: Absorbs inductive energy at contact opening, preventing destructive contact arcing and accelerating primary flux collapse.',
      'Transformer voltage and current transformation ratios: V_s / V_p = N_s / N_p = a; I_p / I_s = N_s / N_p = a, conserving apparent power (V_p·I_p = V_s·I_s).',
      'Impedance reflection principle: A load impedance Z_L connected across the secondary reflects into the primary circuit as Z_in = a² · Z_L = (N_p / N_s)² · Z_L.',
      'Condition for maximum efficiency: Maximum operating efficiency occurs at the load level where variable copper winding losses equal fixed magnetic core losses: P_cu = P_core.'
    ],
    hi: [
      'पारस्परिक प्रेरण का मूल सिद्धांत: प्राथमिक में बदलती धारा बदलते चुंबकीय फ्लक्स के माध्यम से द्वितीयक में ईएमएफ प्रेरित करती है: e_s = -M(dI_p/dt)।',
      'रूह्मकॉर्फ कॉइल की विषमता: संपर्क जुड़ते समय धारा L/R के कारण धीरे-धीरे बढ़ती है, लेकिन खुलते समय कैपेसिटर की सहायता से कुछ ही माइक्रोसेकंड में शून्य हो जाती है, जिससे विशाल वोल्टेज पैदा होता है।',
      'क्वेंच कैपेसिटर का कार्य: संपर्क खुलते समय संपर्कों के बीच चिंगारी बनने से रोकता है और प्राथमिक फ्लक्स को तेजी से समाप्त करता है।',
      'ट्रांसफॉर्मर अनुपात सूत्र: V_s / V_p = N_s / N_p = I_p / I_s, जो शक्ति संरक्षण के नियम पर आधारित है।',
      'प्रतिबाधा परावर्तन: द्वितीयक में लगा लोड Z_L प्राथमिक में फेरों के अनुपात के वर्ग से गुणा होकर दिखाई देता है: Z_in = a² · Z_L।',
      'अधिकतम दक्षता की शर्त: ट्रांसफॉर्मर की दक्षता तब उच्चतम होती है जब परिवर्तनीय कॉपर हानि स्थिर कोर हानि के बराबर हो जाती है: P_cu = P_core।'
    ],
    bn: [
      'পারস্পরিক আবেশের মূল ভিত্তি: প্রাইমারির পরিবর্তনশীল কারেন্ট দ্বারা সৃষ্ট চৌম্বক ফ্লাক্স সেকেন্ডারিকে ছেদ করে ভোল্টেজ আবিষ্ট করে: e_s = -M(dI_p/dt)।',
      'রুমকরফ বিচ্ছিন্নতার অসমতা: সংযোগের সময় L/R সময় ধ্রুবকের কারণে কারেন্ট ধীরে বাড়লেও, বিচ্ছেদের সময় ক্যাপাসিটরের সহায়তায় মুহূর্তে শূন্য হওয়ায় dI/dt তীব্র রূপ নেয়।',
      'কোয়েঞ্চ ক্যাপাসিটরের গুরুত্ব: সংযোগ খোলার সময় স্পার্কিং শোষণ করে কন্টাক্ট পয়েন্টকে ক্ষয় থেকে বাঁচায় এবং ফ্লাক্সের দ্রুত পতন ঘটায়।',
      'ট্রান্সফরমার রূপান্তর অনুপাত: V_s / V_p = N_s / N_p = I_p / I_s = a, যা আপাত ক্ষমতার সংরক্ষণশীলতা (V_p·I_p = V_s·I_s) নিশ্চিত করে।',
      'ইম্পিডেন্স রূপান্তর নিয়ম: সেকেন্ডারির লোড ইম্পিডেন্স Z_L প্রাইমারিতে পাকসংখ্যার অনুপাতের বর্গের গুণিতক হিসেবে প্রতিফলিত হয়: Z_in = a² · Z_L।',
      'সর্বোচ্চ কর্মদক্ষতার শর্ত: যখন চলক কপার অপচয় স্থির কোর অপচয়ের সমান হয় (P_cu = P_core), তখনই ট্রান্সফরমার সর্বোচ্চ দক্ষতায় চলে।'
    ]
  },
  commonMistakes: {
    en: [
      'Connecting a transformer to a pure steady DC supply: Steady DC has zero rate of change of flux (dΦ/dt = 0), producing zero induced back-EMF; the primary winding draws massive short-circuit current and burns out.',
      'Assuming the Ruhmkorff coil produces equal voltages during contact make and break: The voltage at "make" is tiny and cannot cross the spark gap; only the rapid current collapse at "break" delivers the high-voltage spark.',
      'Omitting the quench capacitor across the interrupter contacts: Without the capacitor, an electric arc bridges the parting contacts, prolonging current decay, destroying contact points, and collapsing secondary voltage.',
      'Thinking transformer efficiency is highest at 100% full load: Efficiency peaks when variable copper losses equal fixed core losses, which designers typically locate at 60%–80% of rated full load for distribution transformers.'
    ],
    hi: [
      'ट्रांसफॉर्मर को शुद्ध डीसी आपूर्ति से जोड़ना: डीसी में फ्लक्स परिवर्तन की दर शून्य होती है (dΦ/dt = 0), जिससे कोई बैक-ईएमएफ नहीं बनता और प्राथमिक वाइंडिंग जलकर खाक हो जाती है।',
      'यह सोचना कि रूह्मकॉर्फ कॉइल जुड़ने और टूटने पर समान वोल्टेज बनाती है: जुड़ते समय वोल्टेज बहुत कम होता है; केवल टूटने (break) पर ही अत्यधिक हाई-वोल्टेज स्पार्क उत्पन्न होता है।',
      'इंटरप्टर के आर-पार कैपेसिटर न लगाना: कैपेसिटर न होने पर संपर्कों पर भारी आर्क बन जाता है जो धारा के पतन को धीमा कर देता है और वोल्टेज नहीं बढ़ पाता।',
      'यह मानना कि ट्रांसफॉर्मर की दक्षता सदैव 100% लोड पर ही अधिकतम होती है: दक्षता तब अधिकतम होती है जब कॉपर हानि कोर हानि के बराबर हो, जो आमतौर पर 60% से 80% लोड पर रखी जाती है।'
    ],
    bn: [
      'ট্রান্সফরমারে সরাসরি ডিসি ভোল্টেজ প্রয়োগ করা: স্থির ডিসিতে ফ্লাক্স পরিবর্তনের হার শূন্য (dΦ/dt = ০), ফলে কোনো ব্যাক-ইএমএফ থাকে না এবং অতিরিক্ত কারেন্টে কয়েল সঙ্গে সঙ্গে পুড়ে যায়।',
      'রুমকরফ কয়েলে সংযোগ ও বিচ্ছিন্নকালে সমান ভোল্টেজ তৈরি হয় ভাবা: সংযোগকালে ভোল্টেজ খুবই কম থাকে; কেবলমাত্র বিচ্ছিন্নকালে (break) অতি দ্রুত কারেন্ট পতনের ফলে উচ্চ ভোল্টেজ স্পার্ক সৃষ্টি হয়।',
      'ইন্টারাপ্টারের সমান্তরালে ক্যাপাসিটর বাদ দেওয়া: ক্যাপাসিটর না থাকলে কন্টাক্ট পয়েন্টে দীর্ঘস্থায়ী আর্ক তৈরি হয়, যা কারেন্ট পতনকে বিলম্বিত করে সেকেন্ডারি ভোল্টেজ কমিয়ে দেয়।',
      'ট্রান্সফরমারের কর্মদক্ষতা সর্বদা পূর্ণ লোডে সর্বোচ্চ হবে মনে করা: যখন কপার অপচয় কোর অপচয়ের সমান হয়, তখনই দক্ষতা সর্বোচ্চ হয়—যা সাধারণত ৬০% থেকে ৮০% লোডে অর্জন করা হয়।'
    ]
  },
  keyTakeaways: {
    en: [
      'The Ruhmkorff induction coil transforms low-voltage DC into tens of kilovolts using mechanical contact interruption and a parallel quench capacitor.',
      'The secondary high-voltage pulse occurs almost exclusively at contact "break" because current collapse rate is hundreds of times steeper than current rise rate at "make".',
      'AC power transformers operate via mutual electromagnetic induction on a closed magnetic core, stepping voltage up or down according to V_s / V_p = N_s / N_p.',
      'Transformers conserve apparent power: voltage step-up produces an equal and opposite current step-down (I_p / I_s = N_s / N_p).',
      'Real transformer losses consist of constant core losses (hysteresis and eddy currents) and variable copper winding losses (I²R), reaching peak efficiency when P_cu = P_core.'
    ],
    hi: [
      'रूह्मकॉर्फ इंडक्शन कॉइल यांत्रिक इंटरप्टर और कैपेसिटर की मदद से कम वोल्टेज डीसी को हजारों वोल्ट के स्पार्क में बदलती है।',
      'हाई-वोल्टेज स्पार्क लगभग पूरी तरह से संपर्क टूटने (break) पर ही उत्पन्न होता है क्योंकि धारा टूटने की दर जुड़ने की तुलना में सैकड़ों गुना तेज होती है।',
      'एसी ट्रांसफॉर्मर बंद चुंबकीय कोर पर पारस्परिक प्रेरण द्वारा कार्य करते हैं और वोल्टेज को फेरों के अनुपात V_s / V_p = N_s / N_p के अनुसार घटाते या बढ़ाते हैं।',
      'ट्रांसफॉर्मर शक्ति का संरक्षण करते हैं: वोल्टेज बढ़ने पर धारा उसी अनुपात में घट जाती है (I_p / I_s = N_s / N_p)।',
      'वास्तविक ट्रांसफॉर्मर में निश्चित कोर हानि और लोड पर निर्भर कॉपर हानि होती है; दक्षता तब अधिकतम होती है जब P_cu = P_core हो।'
    ],
    bn: [
      'রুমকরফ ইন্ডাকশন কয়েল মেকানিক্যাল ইন্টারাপ্টার ও কোয়েঞ্চ ক্যাপাসিটর ব্যবহার করে স্বল্প ভোল্টেজ ডিসিকে হাজার হাজার ভোল্টের উচ্চ স্পার্কে পরিণত করে।',
      'উচ্চ ভোল্টেজ স্পার্ক মূলত সংযোগ বিচ্ছিন্নকালে (break) ঘটে, কারণ কারেন্ট পতনের হার সংযোগের সময় কারেন্ট বৃদ্ধির চেয়ে শতগুণ বেশি খাড়া হয়।',
      'এসি ট্রান্সফরমার বদ্ধ চৌম্বক কোরে পারস্পরিক আবেশের মাধ্যমে পাকসংখ্যার অনুপাত V_s / V_p = N_s / N_p অনুযায়ী ভোল্টেজ পরিবর্তন করে।',
      'ট্রান্সফরমার ক্ষমতা সংরক্ষণ করে: ভোল্টেজ ধাপে বৃদ্ধি পেলে বিদ্যুৎ প্রবাহ সমহারে ধাপে হ্রাস পায় (I_p / I_s = N_s / N_p)।',
      'বাস্তব ট্রান্সফরমারের অপচয় স্থির কোর অপচয় এবং লোড-নির্ভর কপার অপচয়ের সমষ্টি; যখন P_cu = P_core হয় তখন ট্রান্সফরমার সর্বোচ্চ কর্মদক্ষতা লাভ করে।'
    ]
  },
  mcqs: [
    {
      id: "q-indcoil-1",
      question: {
        en: "Why is the high-voltage spark produced predominantly at the \"break\" (contact opening) rather than at the \"make\" (contact closing) of the interrupter?",
        hi: "इंटरप्टर के \"जुड़ने\" (make) के बजाय \"टूटने\" (break) पर मुख्य रूप से हाई-वोल्टेज स्पार्क क्यों उत्पन्न होता है?",
        bn: "ইন্টারাপ্টার \"যুক্ত\" হওয়ার সময়ের চেয়ে \"বিচ্ছিন্ন\" (break) হওয়ার সময় প্রধানত কেন অতি উচ্চ ভোল্টেজ স্পার্ক সৃষ্টি হয়?"
      },
      options: [
        { id: "opt-1", text: { en: "Because (dI/dt) at contact break is hundreds of times faster than (dI/dt) at contact make", hi: "क्योंकि संपर्क टूटने पर धारा परिवर्तन की दर (dI/dt) जुड़ने की तुलना में सैकड़ों गुना तेज होती है", bn: "কারণ সংযোগ বিচ্ছিন্নকালে কারেন্ট পরিবর্তনের হার (dI/dt) সংযোগকালের চেয়ে শতগুণ দ্রুত হয়" } },
        { id: "opt-2", text: { en: "Because battery voltage doubles during contact opening", hi: "क्योंकि संपर्क खुलने पर बैटरी का वोल्टेज दोगुना हो जाता है", bn: "কারণ সংযোগ খোলার সময় ব্যাটারি ভোল্টেজ দ্বিগুণ হয়" } },
        { id: "opt-3", text: { en: "Because the secondary winding changes direction at break", hi: "क्योंकि टूटने पर द्वितीयक वाइंडिंग अपनी दिशा बदल लेती है", bn: "কারণ বিচ্ছিন্নকালে সেকেন্ডারি ওয়াইন্ডিং দিক পরিবর্তন করে" } },
        { id: "opt-4", text: { en: "Because the iron core loses its mass at break", hi: "क्योंकि लोहे का कोर अपना द्रव्यमान खो देता है", bn: "কারণ বিচ্ছিন্নকালে লোহার কোর ভর হারায়" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "At \"make\", primary current rises slowly governed by τ = L/R. At \"break\", aided by the quench capacitor, current collapses virtually instantaneously, resulting in an enormous dI/dt that multiplies e_s = -M(dI/dt).",
        hi: "जुड़ते समय धारा τ = L/R के कारण धीरे-धीरे बढ़ती है। टूटते समय कैपेसिटर की सहायता से धारा कुछ ही माइक्रोसेकंड में शून्य हो जाती है, जिससे dI/dt अत्यधिक विशाल हो जाता है।",
        bn: "সংযোগের সময় L/R টাইম কনস্ট্যান্টের কারণে কারেন্ট ধীরে বৃদ্ধি পায়। কিন্তু বিচ্ছিন্নকালে ক্যাপাসিটরের সহায়তায় কয়েক মাইক্রোসেকেন্ডে কারেন্ট শূন্য হওয়ায় dI/dt অত্যন্ত তীব্র হয়।"
      }
    },
    {
      id: "q-indcoil-2",
      question: {
        en: "What critical role does the parallel capacitor serve across the mechanical interrupter contacts?",
        hi: "यांत्रिक इंटरप्टर संपर्कों के समानांतर लगा कैपेसिटर क्या महत्वपूर्ण कार्य करता है?",
        bn: "মেকানিক্যাল ইন্টারাপ্টার কন্টাক্টের সমান্তরালে যুক্ত ক্যাপাসিটরের প্রধান ভূমিকা কী?"
      },
      options: [
        { id: "opt-1", text: { en: "It absorbs the inductive kick to extinguish contact arcing and accelerates primary current collapse", hi: "यह संपर्कों के बीच के स्पार्क को बुझाता है और धारा पतन को अत्यधिक तीव्र बनाता है", bn: "এটি কন্টাক্টের মধ্যকার ক্ষতিকর আর্ক নিভিয়ে দেয় এবং প্রাইমারি কারেন্ট পতনকে দ্রুততর করে" } },
        { id: "opt-2", text: { en: "It converts the direct current into 50 Hz sine wave AC", hi: "यह डीसी को 50 Hz साइन वेव एसी में बदलता है", bn: "এটি ডিসিকে ৫০ হার্টজ সাইন ওয়েভ এসিতে রূপান্তর করে" } },
        { id: "opt-3", text: { en: "It steps down the secondary voltage for user safety", hi: "यह सुरक्षा के लिए द्वितीयक वोल्टेज को घटाता है", bn: "এটি নিরাপত্তার জন্য সেকেন্ডারি ভোল্টেজ হ্রাস করে" } },
        { id: "opt-4", text: { en: "It permanently magnetizes the soft iron core", hi: "यह लोहे के कोर को स्थायी रूप से चुंबकित करता है", bn: "এটি কোরের লোহাকে স্থায়ীভাবে চুম্বক করে" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "The quench capacitor suppresses destructive contact arcing by absorbing the inductive energy, preventing a plasma channel and collapsing the core flux in microseconds.",
        hi: "कैपेसिटर संपर्कों पर स्पार्क नहीं बनने देता, जिससे प्राथमिक धारा अत्यंत तेजी से गिरती है और द्वितीयक में प्रचंड वोल्टेज उत्पन्न होता है।",
        bn: "ক্যাপাসিটর কন্টাক্টের মাঝে আর্ক দমন করে প্রাইমারি কারেন্টকে তাৎক্ষণিকভাবে শূন্যে নামিয়ে আনে।"
      }
    },
    {
      id: "mcq-ch10-l15-03",
      question: {
        en: "A classic Ruhmkorff induction coil transforms low-voltage DC from a 12 V battery into tens of thousands of volts because:",
        hi: "एक क्लासिक रुहमकॉर्फ इंडक्शन कॉइल 12 V की बैटरी को हजारों वोल्ट में बदल देती है क्योंकि:",
        bn: "একটি ক্লাসিক রুহমকরফ ইন্ডাকশন কয়েল ১২ V ব্যাটারির ডিসিকে হাজার হাজার ভোল্টে রূপান্তর করে কারণ:"
      },
      options: [
        { id: "opt-1", text: { en: "The secondary has a massive number of turns (thousands of turns of fine wire) and primary current is interrupted with extreme rapidity (high dI/dt)", hi: "द्वितीयक में बहुत अधिक फेरे (हजारों महीन फेरे) होते हैं और संपर्क टूटने पर धारा की पतन दर (dI/dt) अत्यंत तीव्र होती है", bn: "সেকেন্ডারিতে বিপুল সংখ্যক পাক (হাজার হাজার সরু তারের পাক) থাকে এবং সংযোগ বিচ্ছিন্নকালে কারেন্টের পতন হার (dI/dt) অত্যন্ত তীব্র হয়" } },
        { id: "opt-2", text: { en: "The battery produces infinite power during contact make", hi: "बैटरी संपर्क बनते समय अनंत शक्ति बनाती है", bn: "সংযোগ তৈরির সময় ব্যাটারি অসীম শক্তি তৈরি করে" } },
        { id: "opt-3", text: { en: "The iron core becomes a permanent superconductor", hi: "लोहे का कोर स्थायी अतिचालक बन जाता है", bn: "লোহার কোরটি স্থায়ী সুপারকন্ডাক্টর হয়ে যায়" } },
        { id: "opt-4", text: { en: "The spark creates free nuclear energy", hi: "स्पार्क से परमाणु ऊर्जा निकलती है", bn: "স্পার্ক থেকে পারমাণবিক শক্তি নির্গত হয়" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "e₂ = -M (di₁/dt). The secondary has tens of thousands of turns (huge M), and the spring interrupter assisted by the quenching capacitor cuts the primary current in microseconds, creating astronomical di₁/dt and high spark voltages.",
        hi: "e₂ = -M (di/dt) सूत्र के अनुसार भारी संख्या में फेरों (बड़ा M) और माइक्रोसेकंड में धारा गिरने से हजारों वोल्ट का स्पार्क उत्पन्न होता है।",
        bn: "e₂ = -M (di/dt) সূত্রানুযায়ী সেকেন্ডারির বিপুল পাকসংখ্যা (উচ্চ M) এবং ক্যাপাসিটরের সহায়তায় মাইক্রোসেকেন্ডে কারেন্ট পতনের ফলে তীব্র ভোল্টেজ সৃষ্টি হয়।"
      }
    },
    {
      id: "mcq-ch10-l15-04",
      question: {
        en: "In internal combustion gasoline engines, how does the automotive ignition coil apply the Ruhmkorff induction coil principle?",
        hi: "पेट्रोल इंजनों में ऑटोमोटिव इग्निशन कॉइल रुहमकॉर्फ इंडक्शन कॉइल सिद्धांत को कैसे लागू करती है?",
        bn: "পেট্রোল ইঞ্জিনে অটোমোটিভ ইগনিশন কয়েল কীভাবে রুহমকরফ আবেশ কয়েলের নীতি প্রয়োগ করে?"
      },
      options: [
        { id: "opt-1", text: { en: "It steps up 12 V battery DC to 20–40 kV by interrupting primary current via an electronic switch (or breaker points) to fire the spark plug", hi: "यह इलेक्ट्रॉनिक स्विच द्वारा 12 V प्राथमिक धारा को काटकर 20-40 kV बनाती है जिससे स्पार्क प्लग में चिंगारी कूदती है", bn: "এটি ইলেকট্রনিক সুইচের মাধ্যমে ১২ V প্রাইমারি কারেন্ট আকস্মিক বন্ধ করে ২০-৪০ kV তৈরি করে স্পার্ক প্লাগে স্ফুলিঙ্গ ঘটায়" } },
        { id: "opt-2", text: { en: "It uses sound waves to detonate the fuel vapor", hi: "यह ध्वनि तरंगों से ईंधन जलाती है", bn: "এটি শব্দ তরঙ্গের সাহায্যে জ্বালানি বাষ্পে বিস্ফোরণ ঘটায়" } },
        { id: "opt-3", text: { en: "It converts gasoline into electric current directly", hi: "यह पेट्रोल को सीधे बिजली में बदलती है", bn: "এটি পেট্রোলকে সরাসরি বৈদ্যুতিক কারেন্টে রূপান্তর করে" } },
        { id: "opt-4", text: { en: "It cools the engine block with electrostatic charges", hi: "यह इंजन को स्थिर आवेशों से ठंडा करती है", bn: "এটি স্থির আধানের সাহায্যে ইঞ্জিন ব্লককে ঠান্ডা রাখে" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "The car ignition coil charges from the 12V battery; when the engine control unit (ECU) abruptly opens the primary transistor switch, the collapsing flux induces 25,000+ volts in the secondary to ionize the spark plug gap.",
        hi: "इग्निशन कॉइल 12V से चार्ज होती है; जब ट्रांजिस्टर प्राथमिक धारा काटता है, तो फ्लक्स गिरने से 25 kV से अधिक वोल्टेज बनकर स्पार्क प्लग पर चिंगारी बनाता है।",
        bn: "ইগনিশন কয়েল ১২V এ চার্জ হয়; ট্রানজিস্টর প্রাইমারি কারেন্ট হঠাৎ বন্ধ করামাত্র ফ্লাক্স ধসে পড়ে সেকেন্ডারিতে ২৫,০০০+ ভোল্ট তৈরি করে প্লাগে স্পার্ক ঘটায়।"
      }
    },
    {
      id: "mcq-ch10-l15-05",
      question: {
        en: "Why is the secondary winding of a high-voltage induction coil typically divided into dozens of separate insulated pies (pancakes) rather than wound continuously end-to-end?",
        hi: "उच्च-वोल्टेज इंडक्शन कॉइल की द्वितीयक वाइंडिंग को एक सिरे से दूसरे सिरे तक लगातार लपेटने के बजाय अलग-अलग पैनकेक (पाई) सेक्शन में क्यों बांटा जाता है?",
        bn: "উচ্চ-ভোল্টেজের আবেশ কয়েলের সেকেন্ডারি ওয়াইন্ডিংকে এক প্রান্ত থেকে অন্য প্রান্তে সরাসরি না পেঁচিয়ে কেন বহুসংখ্যক আলাদা প্যানকেক (পাই) অংশে বিভক্ত করা হয়?"
      },
      options: [
        { id: "opt-1", text: { en: "To divide the massive total voltage across many insulation partitions, preventing dielectric breakdown between adjacent layers", hi: "भारी कुल वोल्टेज को कई छोटे हिस्सों में बांटने के लिए ताकि आसन्न परतों के बीच इंसुलेशन न फटे", bn: "বিপুল মোট ভোল্টেজকে অনেকগুলো অন্তরিত খণ্ডে ভাগ করে রাখতে যাতে পাশাপাশি স্তরের মাঝে ডাইইলেক্ট্রিক ব্রেকডাউন না ঘটে" } },
        { id: "opt-2", text: { en: "To allow the coil to be folded into a pocket", hi: "कॉइल को मोड़कर जेब में रखने के लिए", bn: "কয়েলটি ভাঁজ করে পকেটে রাখার জন্য" } },
        { id: "opt-3", text: { en: "To make the copper wire lighter in weight", hi: "तार का वजन कम करने के लिए", bn: "তামার তারের ওজন হালকা করার জন্য" } },
        { id: "opt-4", text: { en: "To eliminate the magnetic field completely", hi: "चुंबकीय क्षेत्र को पूरी तरह समाप्त करने के लिए", bn: "চৌম্বক ক্ষেত্রকে সম্পূর্ণরূপে নিশ্চিহ্ন করতে" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "A 50,000 V winding wound in continuous layers would subject adjacent bottom and top turns to thousands of volts of stress, causing immediate insulation puncture. Sectional pie winding keeps layer-to-layer voltage safely under 1,000 V.",
        hi: "लगातार लपेटने पर परतों के बीच हजारों वोल्ट का तनाव आ जाता है और इंसुलेशन जल जाता है; पैनकेक वाइंडिंग से परतों के बीच वोल्टेज सुरक्षित स्तर पर रहता है।",
        bn: "টানা ল্যাপটালে পাশাপাশি স্তরের মাঝে হাজার হাজার ভোল্টের চাপ তৈরি হয়ে ইনসুলেশন পুড়ে যায়; প্যানকেক বিন্যাস স্তরের মধ্যবর্তী ভোল্টেজ নিরাপদ সীমার মধ্যে রাখে।"
      }
    },
    {
      id: "mcq-ch10-l15-06",
      question: {
        en: "What occurs if the buffer capacitor connected across the mechanical interrupter points of an induction coil is completely disconnected?",
        hi: "यदि इंडक्शन कॉइल के मैकेनिकल ब्रेकर संपर्कों पर लगा बफर कैपेसिटर पूरी तरह हटा दिया जाए तो क्या होगा?",
        bn: "যদি একটি আবেশ কয়েলের মেকানিক্যাল ব্রেকার কন্টাক্টের সাথে যুক্ত বাফার ক্যাপাসিটরটি সম্পূর্ণ বিচ্ছিন্ন করে দেওয়া হয় তবে কী ঘটবে?"
      },
      options: [
        { id: "opt-1", text: { en: "A heavy destructive arc forms across the opening contact points, primary current collapses slowly, and the secondary spark shrinks drastically or disappears", hi: "संपर्कों पर तेज विनाशकारी स्पार्क बनेगा, प्राथमिक धारा धीरे-धीरे गिरेगी, और द्वितीयक का स्पार्क बहुत छोटा या समाप्त हो जाएगा", bn: "কন্টাক্ট পয়েন্টে মারাত্মক আর্ক তৈরি হবে, প্রাইমারি কারেন্ট খুব ধীরে কমবে এবং সেকেন্ডারির উচ্চ-ভোল্টেজ স্পার্ক প্রায় মিলিয়ে যাবে" } },
        { id: "opt-2", text: { en: "The secondary spark length triples in size", hi: "द्वितीयक स्पार्क तीन गुना बड़ा हो जाएगा", bn: "সেকেন্ডারির স্পার্কের দৈর্ঘ্য তিন গুণ বৃদ্ধি পাবে" } },
        { id: "opt-3", text: { en: "The battery starts recharging itself automatically", hi: "बैटरी अपने आप चार्ज होने लगेगी", bn: "ব্যাটারি আপনা-আপনি পুনরায় চার্জ হতে শুরু করবে" } },
        { id: "opt-4", text: { en: "The iron core melts into liquid within 1 second", hi: "कोर 1 सेकंड में पिघल जाएगा", bn: "১ সেকেন্ডের মধ্যে লোহার কোর গলে তরল হবে" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "The capacitor absorbs the inductive kickback energy at break, quenching the contact arc instantly. Without it, the arc sustains current flow, reducing dI/dt to a crawl and killing the secondary induced EMF.",
        hi: "कैपेसिटर संपर्कों पर स्पार्क को तुरंत बुझा देता है जिससे धारा तेजी से गिरती है; इसके बिना स्पार्क जलता रहता है और आउटपुट वोल्टेज बहुत घट जाता है।",
        bn: "ক্যাপাসিটর কন্টাক্টের আর্ক সাথে সাথে নিভিয়ে দিয়ে কারেন্ট দ্রুত হ্রাস করে; এটি না থাকলে আর্ক জ্বলতে থাকে এবং সেকেন্ডারির ভোল্টেজ বিনষ্ট হয়।"
      }
    },
    {
      id: "mcq-ch10-l15-07",
      question: {
        en: "How does an AC power transformer fundamentally differ in construction and operation from a classical DC induction coil?",
        hi: "एक एसी पावर ट्रांसफॉर्मर शास्त्रीय डीसी इंडक्शन कॉइल से बनावट और कार्य में मौलिक रूप से कैसे भिन्न है?",
        bn: "একটি এসি পাওয়ার ট্রান্সফরমার চিরায়ত ডিসি আবেশ কয়েল থেকে গঠন ও কাজের দিক দিয়ে কীভাবে মৌলিকভাবে পৃথক?"
      },
      options: [
        { id: "opt-1", text: { en: "The transformer uses a closed magnetic iron core driven by continuous AC without any mechanical interrupter, whereas the induction coil uses an open iron core with a pulsing DC mechanical breaker", hi: "ट्रांसफॉर्मर बंद लोहे के कोर और निरंतर एसी पर बिना किसी यांत्रिक ब्रेकर के काम करता है, जबकि इंडक्शन कॉइल खुले कोर और डीसी ब्रेकर का उपयोग करती है", bn: "ট্রান্সফরমার বদ্ধ লোহার কোর ও অবিরাম এসিতে কোনো মেকানিক্যাল ব্রেকার ছাড়া চলে, আর আবেশ কয়েল খোলা কোর ও ডিসি ব্রেকার দিয়ে কাজ করে" } },
        { id: "opt-2", text: { en: "Transformers operate only on liquid mercury", hi: "ट्रांसफॉर्मर केवल पारे पर काम करते हैं", bn: "ট্রান্সফরমার কেবল তরল পারদে চলে" } },
        { id: "opt-3", text: { en: "Induction coils can only produce 12 volts", hi: "इंडक्शन कॉइल केवल 12 वोल्ट बना सकती हैं", bn: "আবেশ কয়েল কেবল ১২ ভোল্ট তৈরি করতে পারে" } },
        { id: "opt-4", text: { en: "Transformers have zero turns on their secondary", hi: "ट्रांसफॉर्मर की द्वितीयक में शून्य फेरे होते हैं", bn: "ট্রান্সফরমারের সেকেন্ডারিতে শূন্য পাক থাকে" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Transformers require time-harmonic alternating current through continuous closed low-reluctance magnetic cores. Ruhmkorff coils utilize open-ended iron wire bundles driven by interrupted direct current pulses.",
        hi: "ट्रांसफॉर्मर बंद कोर पर निरंतर एसी से चलते हैं, जबकि इंडक्शन कॉइल खुले कोर पर रुक-रुक कर चलने वाली डीसी से चलती है।",
        bn: "ট্রান্সফরমার বদ্ধ কোরে নিরবচ্ছিন্ন এসির সাহায্যে কাজ করে, যেখানে আবেশ কয়েল খোলা কোরে স্পন্দিত ডিসি ও মেকানিক্যাল ব্রেকার ব্যবহার করে।"
      }
    },
    {
      id: "mcq-ch10-l15-08",
      question: {
        en: "In historic physics laboratories, Heinrich Hertz used a Ruhmkorff induction coil to achieve what monumental scientific breakthrough in 1887?",
        hi: "1887 में हेनरिक हर्ट्ज़ ने रुहमकॉर्फ इंडक्शन कॉइल का उपयोग करके कौन सी ऐतिहासिक वैज्ञानिक खोज की थी?",
        bn: "১৮৮৭ সালে হাইনরিখ হার্টজ রুহমকরফ আবেশ কয়েল ব্যবহার করে কোন ঐতিহাসিক বৈজ্ঞানিক সাফল্য অর্জন করেছিলেন?"
      },
      options: [
        { id: "opt-1", text: { en: "The first experimental generation, transmission, and detection of electromagnetic radio waves in space", hi: "अंतरिक्ष में विद्युत-चुंबकीय रेडियो तरंगों का पहला प्रायोगिक उत्पादन, प्रसारण और संसूचन", bn: "মহাশূন্যে তড়িৎচৌম্বকীয় বেতার তরঙ্গের প্রথম পরীক্ষামূলক সৃষ্টি, সঞ্চালন ও শনাক্তকরণ" } },
        { id: "opt-2", text: { en: "The discovery of the electron charge using oil drops", hi: "तेल की बूंदों से इलेक्ट्रॉन आवेश की खोज", bn: "তেলের ফোঁটা দিয়ে ইলেকট্রন আধানের আবিষ্কার" } },
        { id: "opt-3", text: { en: "The invention of the chemical lead-acid storage battery", hi: "लेड-एसिड स्टोरेज बैटरी का आविष्कार", bn: "লেড-অ্যাসিড ব্যাটারির উদ্ভাবন" } },
        { id: "opt-4", text: { en: "The synthesis of artificial diamonds from coal", hi: "कोयले से कृत्रिम हीरे बनाना", bn: "কয়লা থেকে কৃত্রিম হীরা তৈরি" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Hertz used a high-voltage Ruhmkorff coil connected to a spark gap to prove James Clerk Maxwell’s theoretical prediction of electromagnetic waves, launching the modern wireless era.",
        hi: "हर्ट्ज़ ने रुहमकॉर्फ कॉइल के स्पार्क गैप से मैक्सवेल की विद्युत-चुंबकीय तरंगों की प्रायोगिक पुष्टि की, जिसने रेडियो संचार की नींव रखी।",
        bn: "হার্টজ রুহমকরফ কয়েল দিয়ে স্পার্ক তৈরি করে ম্যাক্সওয়েলের ভবিষ্যৎবাণী করা তড়িৎচৌম্বকীয় তরঙ্গের বাস্তব প্রমাণ দেন, যা বেতার প্রযুক্তির সূচনা করে।"
      }
    }
  ],
  mcqQuestions: [
    {
      id: "q-indcoil-1",
      question: {
        en: "Why is the high-voltage spark produced predominantly at the \"break\" (contact opening) rather than at the \"make\" (contact closing) of the interrupter?",
        hi: "इंटरप्टर के \"जुड़ने\" (make) के बजाय \"टूटने\" (break) पर मुख्य रूप से हाई-वोल्टेज स्पार्क क्यों उत्पन्न होता है?",
        bn: "ইন্টারাপ্টার \"যুক্ত\" হওয়ার সময়ের চেয়ে \"বিচ্ছিন্ন\" (break) হওয়ার সময় প্রধানত কেন অতি উচ্চ ভোল্টেজ স্পার্ক সৃষ্টি হয়?"
      },
      options: [
        { id: "opt-1", text: { en: "Because (dI/dt) at contact break is hundreds of times faster than (dI/dt) at contact make", hi: "क्योंकि संपर्क टूटने पर धारा परिवर्तन की दर (dI/dt) जुड़ने की तुलना में सैकड़ों गुना तेज होती है", bn: "কারণ সংযোগ বিচ্ছিন্নকালে কারেন্ট পরিবর্তনের হার (dI/dt) সংযোগকালের চেয়ে শতগুণ দ্রুত হয়" } },
        { id: "opt-2", text: { en: "Because battery voltage doubles during contact opening", hi: "क्योंकि संपर्क खुलने पर बैटरी का वोल्टेज दोगुना हो जाता है", bn: "কারণ সংযোগ খোলার সময় ব্যাটারি ভোল্টেজ দ্বিগুণ হয়" } },
        { id: "opt-3", text: { en: "Because the secondary winding changes direction at break", hi: "क्योंकि टूटने पर द्वितीयक वाइंडिंग अपनी दिशा बदल लेती है", bn: "কারণ বিচ্ছিন্নকালে সেকেন্ডারি ওয়াইন্ডিং দিক পরিবর্তন করে" } },
        { id: "opt-4", text: { en: "Because the iron core loses its mass at break", hi: "क्योंकि लोहे का कोर अपना द्रव्यमान खो देता है", bn: "কারণ বিচ্ছিন্নকালে লোহার কোর ভর হারায়" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "At \"make\", primary current rises slowly governed by τ = L/R. At \"break\", aided by the quench capacitor, current collapses virtually instantaneously, resulting in an enormous dI/dt that multiplies e_s = -M(dI/dt).",
        hi: "जुड़ते समय धारा τ = L/R के कारण धीरे-धीरे बढ़ती है। टूटते समय कैपेसिटर की सहायता से धारा कुछ ही माइक्रोसेकंड में शून्य हो जाती है, जिससे dI/dt अत्यधिक विशाल हो जाता है।",
        bn: "সংযোগের সময় L/R টাইম কনস্ট্যান্টের কারণে কারেন্ট ধীরে বৃদ্ধি পায়। কিন্তু বিচ্ছিন্নকালে ক্যাপাসিটরের সহায়তায় কয়েক মাইক্রোসেকেন্ডে কারেন্ট শূন্য হওয়ায় dI/dt অত্যন্ত তীব্র হয়।"
      }
    },
    {
      id: "q-indcoil-2",
      question: {
        en: "What critical role does the parallel capacitor serve across the mechanical interrupter contacts?",
        hi: "यांत्रिक इंटरप्टर संपर्कों के समानांतर लगा कैपेसिटर क्या महत्वपूर्ण कार्य करता है?",
        bn: "মেকানিক্যাল ইন্টারাপ্টার কন্টাক্টের সমান্তরালে যুক্ত ক্যাপাসিটরের প্রধান ভূমিকা কী?"
      },
      options: [
        { id: "opt-1", text: { en: "It absorbs the inductive kick to extinguish contact arcing and accelerates primary current collapse", hi: "यह संपर्कों के बीच के स्पार्क को बुझाता है और धारा पतन को अत्यधिक तीव्र बनाता है", bn: "এটি কন্টাক্টের মধ্যকার ক্ষতিকর আর্ক নিভিয়ে দেয় এবং প্রাইমারি কারেন্ট পতনকে দ্রুততর করে" } },
        { id: "opt-2", text: { en: "It converts the direct current into 50 Hz sine wave AC", hi: "यह डीसी को 50 Hz साइन वेव एसी में बदलता है", bn: "এটি ডিসিকে ৫০ হার্টজ সাইন ওয়েভ এসিতে রূপান্তর করে" } },
        { id: "opt-3", text: { en: "It steps down the secondary voltage for user safety", hi: "यह सुरक्षा के लिए द्वितीयक वोल्टेज को घटाता है", bn: "এটি নিরাপত্তার জন্য সেকেন্ডারি ভোল্টেজ হ্রাস করে" } },
        { id: "opt-4", text: { en: "It permanently magnetizes the soft iron core", hi: "यह लोहे के कोर को स्थायी रूप से चुंबकित करता है", bn: "এটি কোরের লোহাকে স্থায়ীভাবে চুম্বক করে" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "The quench capacitor suppresses destructive contact arcing by absorbing the inductive energy, preventing a plasma channel and collapsing the core flux in microseconds.",
        hi: "कैपेसिटर संपर्कों पर स्पार्क नहीं बनने देता, जिससे प्राथमिक धारा अत्यंत तेजी से गिरती है और द्वितीयक में प्रचंड वोल्टेज उत्पन्न होता है।",
        bn: "ক্যাপাসিটর কন্টাক্টের মাঝে আর্ক দমন করে প্রাইমারি কারেন্টকে তাৎক্ষণিকভাবে শূন্যে নামিয়ে আনে।"
      }
    },
    {
      id: "mcq-ch10-l15-03",
      question: {
        en: "A classic Ruhmkorff induction coil transforms low-voltage DC from a 12 V battery into tens of thousands of volts because:",
        hi: "एक क्लासिक रुहमकॉर्फ इंडक्शन कॉइल 12 V की बैटरी को हजारों वोल्ट में बदल देती है क्योंकि:",
        bn: "একটি ক্লাসিক রুহমকরফ ইন্ডাকশন কয়েল ১২ V ব্যাটারির ডিসিকে হাজার হাজার ভোল্টে রূপান্তর করে কারণ:"
      },
      options: [
        { id: "opt-1", text: { en: "The secondary has a massive number of turns (thousands of turns of fine wire) and primary current is interrupted with extreme rapidity (high dI/dt)", hi: "द्वितीयक में बहुत अधिक फेरे (हजारों महीन फेरे) होते हैं और संपर्क टूटने पर धारा की पतन दर (dI/dt) अत्यंत तीव्र होती है", bn: "সেকেন্ডারিতে বিপুল সংখ্যক পাক (হাজার হাজার সরু তারের পাক) থাকে এবং সংযোগ বিচ্ছিন্নকালে কারেন্টের পতন হার (dI/dt) অত্যন্ত তীব্র হয়" } },
        { id: "opt-2", text: { en: "The battery produces infinite power during contact make", hi: "बैटरी संपर्क बनते समय अनंत शक्ति बनाती है", bn: "সংযোগ তৈরির সময় ব্যাটারি অসীম শক্তি তৈরি করে" } },
        { id: "opt-3", text: { en: "The iron core becomes a permanent superconductor", hi: "लोहे का कोर स्थायी अतिचालक बन जाता है", bn: "লোহার কোরটি স্থায়ী সুপারকন্ডাক্টর হয়ে যায়" } },
        { id: "opt-4", text: { en: "The spark creates free nuclear energy", hi: "स्पार्क से परमाणु ऊर्जा निकलती है", bn: "স্পার্ক থেকে পারমাণবিক শক্তি নির্গত হয়" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "e₂ = -M (di₁/dt). The secondary has tens of thousands of turns (huge M), and the spring interrupter assisted by the quenching capacitor cuts the primary current in microseconds, creating astronomical di₁/dt and high spark voltages.",
        hi: "e₂ = -M (di/dt) सूत्र के अनुसार भारी संख्या में फेरों (बड़ा M) और माइक्रोसेकंड में धारा गिरने से हजारों वोल्ट का स्पार्क उत्पन्न होता है।",
        bn: "e₂ = -M (di/dt) সূত্রানুযায়ী সেকেন্ডারির বিপুল পাকসংখ্যা (উচ্চ M) এবং ক্যাপাসিটরের সহায়তায় মাইক্রোসেকেন্ডে কারেন্ট পতনের ফলে তীব্র ভোল্টেজ সৃষ্টি হয়।"
      }
    },
    {
      id: "mcq-ch10-l15-04",
      question: {
        en: "In internal combustion gasoline engines, how does the automotive ignition coil apply the Ruhmkorff induction coil principle?",
        hi: "पेट्रोल इंजनों में ऑटोमोटिव इग्निशन कॉइल रुहमकॉर्फ इंडक्शन कॉइल सिद्धांत को कैसे लागू करती है?",
        bn: "পেট্রোল ইঞ্জিনে অটোমোটিভ ইগনিশন কয়েল কীভাবে রুহমকরফ আবেশ কয়েলের নীতি প্রয়োগ করে?"
      },
      options: [
        { id: "opt-1", text: { en: "It steps up 12 V battery DC to 20–40 kV by interrupting primary current via an electronic switch (or breaker points) to fire the spark plug", hi: "यह इलेक्ट्रॉनिक स्विच द्वारा 12 V प्राथमिक धारा को काटकर 20-40 kV बनाती है जिससे स्पार्क प्लग में चिंगारी कूदती है", bn: "এটি ইলেকট্রনিক সুইচের মাধ্যমে ১২ V প্রাইমারি কারেন্ট আকস্মিক বন্ধ করে ২০-৪০ kV তৈরি করে স্পার্ক প্লাগে স্ফুলিঙ্গ ঘটায়" } },
        { id: "opt-2", text: { en: "It uses sound waves to detonate the fuel vapor", hi: "यह ध्वनि तरंगों से ईंधन जलाती है", bn: "এটি শব্দ তরঙ্গের সাহায্যে জ্বালানি বাষ্পে বিস্ফোরণ ঘটায়" } },
        { id: "opt-3", text: { en: "It converts gasoline into electric current directly", hi: "यह पेट्रोल को सीधे बिजली में बदलती है", bn: "এটি পেট্রোলকে সরাসরি বৈদ্যুতিক কারেন্টে রূপান্তর করে" } },
        { id: "opt-4", text: { en: "It cools the engine block with electrostatic charges", hi: "यह इंजन को स्थिर आवेशों से ठंडा करती है", bn: "এটি স্থির আধানের সাহায্যে ইঞ্জিন ব্লককে ঠান্ডা রাখে" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "The car ignition coil charges from the 12V battery; when the engine control unit (ECU) abruptly opens the primary transistor switch, the collapsing flux induces 25,000+ volts in the secondary to ionize the spark plug gap.",
        hi: "इग्निशन कॉइल 12V से चार्ज होती है; जब ट्रांजिस्टर प्राथमिक धारा काटता है, तो फ्लक्स गिरने से 25 kV से अधिक वोल्टेज बनकर स्पार्क प्लग पर चिंगारी बनाता है।",
        bn: "ইগনিশন কয়েল ১২V এ চার্জ হয়; ট্রানজিস্টর প্রাইমারি কারেন্ট হঠাৎ বন্ধ করামাত্র ফ্লাক্স ধসে পড়ে সেকেন্ডারিতে ২৫,০০০+ ভোল্ট তৈরি করে প্লাগে স্পার্ক ঘটায়।"
      }
    },
    {
      id: "mcq-ch10-l15-05",
      question: {
        en: "Why is the secondary winding of a high-voltage induction coil typically divided into dozens of separate insulated pies (pancakes) rather than wound continuously end-to-end?",
        hi: "उच्च-वोल्टेज इंडक्शन कॉइल की द्वितीयक वाइंडिंग को एक सिरे से दूसरे सिरे तक लगातार लपेटने के बजाय अलग-अलग पैनकेक (पाई) सेक्शन में क्यों बांटा जाता है?",
        bn: "উচ্চ-ভোল্টেজের আবেশ কয়েলের সেকেন্ডারি ওয়াইন্ডিংকে এক প্রান্ত থেকে অন্য প্রান্তে সরাসরি না পেঁচিয়ে কেন বহুসংখ্যক আলাদা প্যানকেক (পাই) অংশে বিভক্ত করা হয়?"
      },
      options: [
        { id: "opt-1", text: { en: "To divide the massive total voltage across many insulation partitions, preventing dielectric breakdown between adjacent layers", hi: "भारी कुल वोल्टेज को कई छोटे हिस्सों में बांटने के लिए ताकि आसन्न परतों के बीच इंसुलेशन न फटे", bn: "বিপুল মোট ভোল্টেজকে অনেকগুলো অন্তরিত খণ্ডে ভাগ করে রাখতে যাতে পাশাপাশি স্তরের মাঝে ডাইইলেক্ট্রিক ব্রেকডাউন না ঘটে" } },
        { id: "opt-2", text: { en: "To allow the coil to be folded into a pocket", hi: "कॉइल को मोड़कर जेब में रखने के लिए", bn: "কয়েলটি ভাঁজ করে পকেটে রাখার জন্য" } },
        { id: "opt-3", text: { en: "To make the copper wire lighter in weight", hi: "तार का वजन कम करने के लिए", bn: "তামার তারের ওজন হালকা করার জন্য" } },
        { id: "opt-4", text: { en: "To eliminate the magnetic field completely", hi: "चुंबकीय क्षेत्र को पूरी तरह समाप्त करने के लिए", bn: "চৌম্বক ক্ষেত্রকে সম্পূর্ণরূপে নিশ্চিহ্ন করতে" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "A 50,000 V winding wound in continuous layers would subject adjacent bottom and top turns to thousands of volts of stress, causing immediate insulation puncture. Sectional pie winding keeps layer-to-layer voltage safely under 1,000 V.",
        hi: "लगातार लपेटने पर परतों के बीच हजारों वोल्ट का तनाव आ जाता है और इंसुलेशन जल जाता है; पैनकेक वाइंडिंग से परतों के बीच वोल्टेज सुरक्षित स्तर पर रहता है।",
        bn: "টানা ল্যাপটালে পাশাপাশি স্তরের মাঝে হাজার হাজার ভোল্টের চাপ তৈরি হয়ে ইনসুলেশন পুড়ে যায়; প্যানকেক বিন্যাস স্তরের মধ্যবর্তী ভোল্টেজ নিরাপদ সীমার মধ্যে রাখে।"
      }
    },
    {
      id: "mcq-ch10-l15-06",
      question: {
        en: "What occurs if the buffer capacitor connected across the mechanical interrupter points of an induction coil is completely disconnected?",
        hi: "यदि इंडक्शन कॉइल के मैकेनिकल ब्रेकर संपर्कों पर लगा बफर कैपेसिटर पूरी तरह हटा दिया जाए तो क्या होगा?",
        bn: "যদি একটি আবেশ কয়েলের মেকানিক্যাল ব্রেকার কন্টাক্টের সাথে যুক্ত বাফার ক্যাপাসিটরটি সম্পূর্ণ বিচ্ছিন্ন করে দেওয়া হয় তবে কী ঘটবে?"
      },
      options: [
        { id: "opt-1", text: { en: "A heavy destructive arc forms across the opening contact points, primary current collapses slowly, and the secondary spark shrinks drastically or disappears", hi: "संपर्कों पर तेज विनाशकारी स्पार्क बनेगा, प्राथमिक धारा धीरे-धीरे गिरेगी, और द्वितीयक का स्पार्क बहुत छोटा या समाप्त हो जाएगा", bn: "কন্টাক্ট পয়েন্টে মারাত্মক আর্ক তৈরি হবে, প্রাইমারি কারেন্ট খুব ধীরে কমবে এবং সেকেন্ডারির উচ্চ-ভোল্টেজ স্পার্ক প্রায় মিলিয়ে যাবে" } },
        { id: "opt-2", text: { en: "The secondary spark length triples in size", hi: "द्वितीयक स्पार्क तीन गुना बड़ा हो जाएगा", bn: "সেকেন্ডারির স্পার্কের দৈর্ঘ্য তিন গুণ বৃদ্ধি পাবে" } },
        { id: "opt-3", text: { en: "The battery starts recharging itself automatically", hi: "बैटरी अपने आप चार्ज होने लगेगी", bn: "ব্যাটারি আপনা-আপনি পুনরায় চার্জ হতে শুরু করবে" } },
        { id: "opt-4", text: { en: "The iron core melts into liquid within 1 second", hi: "कोर 1 सेकंड में पिघल जाएगा", bn: "১ সেকেন্ডের মধ্যে লোহার কোর গলে তরল হবে" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "The capacitor absorbs the inductive kickback energy at break, quenching the contact arc instantly. Without it, the arc sustains current flow, reducing dI/dt to a crawl and killing the secondary induced EMF.",
        hi: "कैपेसिटर संपर्कों पर स्पार्क को तुरंत बुझा देता है जिससे धारा तेजी से गिरती है; इसके बिना स्पार्क जलता रहता है और आउटपुट वोल्टेज बहुत घट जाता है।",
        bn: "ক্যাপাসিটর কন্টাক্টের আর্ক সাথে সাথে নিভিয়ে দিয়ে কারেন্ট দ্রুত হ্রাস করে; এটি না থাকলে আর্ক জ্বলতে থাকে এবং সেকেন্ডারির ভোল্টেজ বিনষ্ট হয়।"
      }
    },
    {
      id: "mcq-ch10-l15-07",
      question: {
        en: "How does an AC power transformer fundamentally differ in construction and operation from a classical DC induction coil?",
        hi: "एक एसी पावर ट्रांसफॉर्मर शास्त्रीय डीसी इंडक्शन कॉइल से बनावट और कार्य में मौलिक रूप से कैसे भिन्न है?",
        bn: "একটি এসি পাওয়ার ট্রান্সফরমার চিরায়ত ডিসি আবেশ কয়েল থেকে গঠন ও কাজের দিক দিয়ে কীভাবে মৌলিকভাবে পৃথক?"
      },
      options: [
        { id: "opt-1", text: { en: "The transformer uses a closed magnetic iron core driven by continuous AC without any mechanical interrupter, whereas the induction coil uses an open iron core with a pulsing DC mechanical breaker", hi: "ट्रांसफॉर्मर बंद लोहे के कोर और निरंतर एसी पर बिना किसी यांत्रिक ब्रेकर के काम करता है, जबकि इंडक्शन कॉइल खुले कोर और डीसी ब्रेकर का उपयोग करती है", bn: "ট্রান্সফরমার বদ্ধ লোহার কোর ও অবিরাম এসিতে কোনো মেকানিক্যাল ব্রেকার ছাড়া চলে, আর আবেশ কয়েল খোলা কোর ও ডিসি ব্রেকার দিয়ে কাজ করে" } },
        { id: "opt-2", text: { en: "Transformers operate only on liquid mercury", hi: "ट्रांसफॉर्मर केवल पारे पर काम करते हैं", bn: "ট্রান্সফরমার কেবল তরল পারদে চলে" } },
        { id: "opt-3", text: { en: "Induction coils can only produce 12 volts", hi: "इंडक्शन कॉइल केवल 12 वोल्ट बना सकती हैं", bn: "আবেশ কয়েল কেবল ১২ ভোল্ট তৈরি করতে পারে" } },
        { id: "opt-4", text: { en: "Transformers have zero turns on their secondary", hi: "ट्रांसफॉर्मर की द्वितीयक में शून्य फेरे होते हैं", bn: "ট্রান্সফরমারের সেকেন্ডারিতে শূন্য পাক থাকে" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Transformers require time-harmonic alternating current through continuous closed low-reluctance magnetic cores. Ruhmkorff coils utilize open-ended iron wire bundles driven by interrupted direct current pulses.",
        hi: "ट्रांसफॉर्मर बंद कोर पर निरंतर एसी से चलते हैं, जबकि इंडक्शन कॉइल खुले कोर पर रुक-रुक कर चलने वाली डीसी से चलती है।",
        bn: "ট্রান্সফরমার বদ্ধ কোরে নিরবচ্ছিন্ন এসির সাহায্যে কাজ করে, যেখানে আবেশ কয়েল খোলা কোরে স্পন্দিত ডিসি ও মেকানিক্যাল ব্রেকার ব্যবহার করে।"
      }
    },
    {
      id: "mcq-ch10-l15-08",
      question: {
        en: "In historic physics laboratories, Heinrich Hertz used a Ruhmkorff induction coil to achieve what monumental scientific breakthrough in 1887?",
        hi: "1887 में हेनरिक हर्ट्ज़ ने रुहमकॉर्फ इंडक्शन कॉइल का उपयोग करके कौन सी ऐतिहासिक वैज्ञानिक खोज की थी?",
        bn: "১৮৮৭ সালে হাইনরিখ হার্টজ রুহমকরফ আবেশ কয়েল ব্যবহার করে কোন ঐতিহাসিক বৈজ্ঞানিক সাফল্য অর্জন করেছিলেন?"
      },
      options: [
        { id: "opt-1", text: { en: "The first experimental generation, transmission, and detection of electromagnetic radio waves in space", hi: "अंतरिक्ष में विद्युत-चुंबकीय रेडियो तरंगों का पहला प्रायोगिक उत्पादन, प्रसारण और संसूचन", bn: "মহাশূন্যে তড়িৎচৌম্বকীয় বেতার তরঙ্গের প্রথম পরীক্ষামূলক সৃষ্টি, সঞ্চালন ও শনাক্তকরণ" } },
        { id: "opt-2", text: { en: "The discovery of the electron charge using oil drops", hi: "तेल की बूंदों से इलेक्ट्रॉन आवेश की खोज", bn: "তেলের ফোঁটা দিয়ে ইলেকট্রন আধানের আবিষ্কার" } },
        { id: "opt-3", text: { en: "The invention of the chemical lead-acid storage battery", hi: "लेड-एसिड स्टोरेज बैटरी का आविष्कार", bn: "লেড-অ্যাসিড ব্যাটারির উদ্ভাবন" } },
        { id: "opt-4", text: { en: "The synthesis of artificial diamonds from coal", hi: "कोयले से कृत्रिम हीरे बनाना", bn: "কয়লা থেকে কৃত্রিম হীরা তৈরি" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Hertz used a high-voltage Ruhmkorff coil connected to a spark gap to prove James Clerk Maxwell’s theoretical prediction of electromagnetic waves, launching the modern wireless era.",
        hi: "हर्ट्ज़ ने रुहमकॉर्फ कॉइल के स्पार्क गैप से मैक्सवेल की विद्युत-चुंबकीय तरंगों की प्रायोगिक पुष्टि की, जिसने रेडियो संचार की नींव रखी।",
        bn: "হার্টজ রুহমকরফ কয়েল দিয়ে স্পার্ক তৈরি করে ম্যাক্সওয়েলের ভবিষ্যৎবাণী করা তড়িৎচৌম্বকীয় তরঙ্গের বাস্তব প্রমাণ দেন, যা বেতার প্রযুক্তির সূচনা করে।"
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch10-l15-1',
      question: {
        en: 'An induction coil has a mutual inductance of M = 2.5 H. If a primary current of 6.0 A is completely interrupted in 40 microseconds (40 × 10⁻⁶ s), calculate the average peak EMF induced in the secondary winding.',
        hi: 'एक इंडक्शन कॉइल का अन्योन्य प्रेरकत्व M = 2.5 H है। यदि 6.0 A की प्राथमिक धारा 40 माइक्रोसेकंड (40 × 10⁻⁶ s) में पूरी तरह कट जाती है, तो द्वितीयक कुंडली में प्रेरित औसत शिखर ईएमएफ की गणना कीजिए।',
        bn: 'একটি ইন্ডাকশন কয়েলের পারস্পরিক আবেশাঙ্ক M = ২.৫ হেনরি। যদি ৬.০ অ্যাম্পিয়ার প্রাইমারি কারেন্ট ৪০ মাইক্রোসেকেন্ডে (৪০ × ১০⁻⁶ সেকেন্ড) সম্পূর্ণ বিচ্ছিন্ন হয়, তবে সেকেন্ডারি কয়েলে আবিষ্ট গড় শীর্ষ ভোল্টেজ কত হবে?'
      },
      hint: {
        en: 'Use e_s = M · (ΔI / Δt). Here ΔI = 6.0 A and Δt = 40 × 10⁻⁶ s.',
        hi: 'सूत्र e_s = M · (ΔI / Δt) का उपयोग करें। ΔI = 6.0 A, Δt = 40 × 10⁻⁶ s।',
        bn: 'e_s = M · (ΔI / Δt) সূত্র ব্যবহার করুন।'
      },
      answerKey: {
        en: 'e_s = 2.5 × (6.0 / (40 × 10⁻⁶)) = 2.5 × 150,000 = 375,000 Volts (375 kV)!',
        hi: 'e_s = 2.5 × 150,000 = 375,000 वोल्ट (375 kV)!',
        bn: 'e_s = ২.৫ × ১৫০,০০০ = ৩৭৫,০০০ ভোল্ট (৩৭৫ কিলোভোল্ট)!'
      }
    }
  ]
};
