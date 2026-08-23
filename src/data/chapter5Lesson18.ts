import { Lesson } from '../types';

export const LESSON_THREE_PHASE_INTRO: Lesson = {
  id: 'lsn-ch5-three-phase-intro',
  topicId: 'ch5-three-phase-intro',
  chapterId: 'ch-alternating-current',
  order: 18,
  title: {
    en: 'Introduction to Three-Phase AC Systems',
    hi: 'थ्री-फेज एसी सिस्टम का परिचय',
    bn: 'থ্রি-ফেজ এসি সিস্টেমের পরিচিতি'
  },
  estimatedMinutes: 50,
  easyExplanation: {
    en: 'A Three-Phase AC system generates and delivers electrical energy using three separate sinusoidal alternating voltages that have the exact same peak magnitude and frequency but are uniformly displaced in phase by 120° (2π/3 radians). Three-phase systems are universally used worldwide for power generation, transmission, and heavy industrial drives because they provide constant instantaneous power, generate a self-starting rotating magnetic field in motors, and save 25% conductor copper compared to equivalent single-phase systems.',
    hi: 'थ्री-फेज एसी प्रणाली तीन अलग-अलग साइनसॉइडल एसी वोल्टेजों का उपयोग करके विद्युत ऊर्जा उत्पन्न और वितरित करती है, जिनका परिमाण और आवृत्ति समान होती है लेकिन वे एक दूसरे से 120° (2π/3 रेडियन) के कला कोण पर विस्थापित होते हैं। दुनिया भर में विद्युत उत्पादन, संचरण और औद्योगिक मोटरों के लिए 3-फेज प्रणाली का उपयोग किया जाता है क्योंकि यह स्थिर शक्ति प्रदान करती है, मोटरों में स्वतः-प्रारंभिक घूर्णी चुंबकीय क्षेत्र बनाती है और तारों में 25% तांबे की बचत करती है।',
    bn: 'একটি থ্রি-ফেজ এসি ব্যবস্থায় তিনটি পৃথক সাইনুসয়েডাল ভোল্টেজ ব্যবহৃত হয় যাদের মান ও কম্পাঙ্ক হুবহু সমান কিন্তু তারা পরস্পরের সাথে ১২০° কোণে বিন্যস্ত থাকে। বিশ্বব্যাপী বিদ্যুৎ উৎপাদন, সঞ্চালন ও ভারী শিল্পে থ্রি-ফেজ সিস্টেম সর্বজনীনভাবে ব্যবহৃত হয় কারণ এটি নিরবচ্ছিন্ন ধ্রুবক ক্ষমতা প্রদান করে, মোটরে ঘূর্ণনশীল চৌম্বক ক্ষেত্র তৈরি করে এবং সিঙ্গেল ফেজের তুলনায় ২৫% কম পরিবাহী তারের প্রয়োজন হয়।'
  },
  detailedExplanation: {
    en: `1. Generation of Three-Phase EMF:
A 3-phase alternator (synchronous generator) consists of a stator with three identical insulated phase windings (designated R - Red, Y - Yellow, B - Blue or A, B, C) physically spaced 120° apart in space around the cylindrical stator armature.
When the rotor magnetic field rotates at synchronous angular speed ω = 2πf rad/s, it cuts each coil in sequence, inducing three balanced sinusoidal EMFs displaced by 120° in time:
- e_R(t) = Em · sin(ωt) = Em · sin(2πft)  (Reference phase, 0°)
- e_Y(t) = Em · sin(ωt - 120°) = Em · sin(ωt - 2π/3)  (Lags R by 120°)
- e_B(t) = Em · sin(ωt - 240°) = Em · sin(ωt + 120°)  (Lags R by 240° or leads by 120°)

2. Phasor Representation & Vector Sum:
In phasor notation with VR as reference:
- V_R = V_ph ∠0° = V_ph + j0
- V_Y = V_ph ∠-120° = V_ph (-0.5 - j0.866)
- V_B = V_ph ∠-240° = V_ph ∠+120° = V_ph (-0.5 + j0.866)
At every instant of time, the sum of balanced three-phase voltages is strictly zero:
e_R(t) + e_Y(t) + e_B(t) = 0
and phasor sum: V_R + V_Y + V_B = 0

3. Phase Sequence:
The order in which the voltages attain their maximum positive peak values is called the Phase Sequence.
- Standard / Positive Sequence: R → Y → B (clockwise phasor rotation).
- Reverse / Negative Sequence: R → B → Y (counter-clockwise phasor rotation).
Importance: Phase sequence dictates the physical direction of rotation of 3-phase induction motors (swapping any two supply terminals reverses motor rotation) and is critical for paralleling alternators and transformers.

4. Decisive Advantages of 3-Phase Systems Over 1-Phase Systems:
- Constant Instantaneous Power: In single-phase systems, power pulsates at 2f (dropping to zero twice every cycle), causing mechanical vibration in motors. In a balanced 3-phase system, total instantaneous power is perfectly constant: p_total(t) = 3 · V_ph · I_ph · cos φ, producing smooth, vibration-free torque.
- Conductor Material Savings: For transmitting a given amount of power over a given distance at a given line voltage and loss, a 3-phase 3-wire system requires only 75% (3/4) of the conductor copper/aluminum weight required by a single-phase 2-wire system.
- Self-Starting Motors: 3-phase stator windings produce a uniform constant-magnitude rotating magnetic field (RMF) of magnitude 1.5·Fm spinning at synchronous speed Ns = 120f / P, allowing 3-phase induction motors to start naturally without capacitors, centrifugal switches, or split-phase windings.
- Higher Machine Output: A 3-phase generator or motor built on the same physical frame size yields approximately 1.5 times (50% more) power output than a single-phase machine of identical dimensions.
- Dual Operating Voltages: A 3-phase 4-wire Star system provides two distinct voltage levels simultaneously: Line-to-Line voltage (415 V for heavy machinery and 3-phase loads) and Line-to-Neutral voltage (415 / √3 = 240 V for standard single-phase residential appliances).`,
    hi: `1. थ्री-फेज EMF का उत्पादन:
थ्री-फेज जनरेटर के स्टेटर में तीन समान वाइंडिंग (R, Y, B) को अंतरिक्ष में परस्पर 120° पर स्थापित किया जाता है। जब रोटर का चुंबकीय क्षेत्र घूमता है, तो फैराडे के नियम के अनुसार तीन वोल्टेज उत्पन्न होते हैं:
- e_R(t) = Em · sin(ωt) (संदर्भ फेज, 0°)
- e_Y(t) = Em · sin(ωt - 120°) (R से 120° पीछे)
- e_B(t) = Em · sin(ωt - 240°) = Em · sin(ωt + 120°)

2. फेजर रूप एवं तात्कालिक योग:
किसी भी क्षण संतुलित थ्री-फेज वोल्टेजों का योग शून्य होता है:
e_R(t) + e_Y(t) + e_B(t) = 0
तथा फेजर योग: V_R + V_Y + V_B = 0

3. फेज अनुक्रम (Phase Sequence):
वह क्रम जिसमें वोल्टेजेस अपने अधिकतम धनात्मक शिखर मान पर पहुँचते हैं, फेज सीक्वेंस कहलाता है (मानक क्रम: R-Y-B)। किसी भी दो तारों को आपस में बदलने से 3-फेज मोटर की घूमने की दिशा उलट जाती है।

4. 1-फेज की तुलना में 3-फेज के प्रमुख लाभ:
- स्थिर शक्ति प्रवाह: 3-फेज में कुल तात्कालिक शक्ति स्थिर रहती है (p = 3·Vph·Iph·cos φ), जिससे मोटरों में कंपन नहीं होता।
- 25% तांबे (चालक सामग्री) की बचत।
- स्वतः-प्रारंभिक (Self-starting) मोटरें: 3-फेज वाइंडिंग 1.5·Fm मान का निरंतर घूमने वाला चुंबकीय क्षेत्र (RMF) बनाती हैं।
- समान आकार की मशीन से 50% अधिक शक्ति आउटपुट।
- दोहरी वोल्टेज उपलब्धता (स्टार सिस्टम में 415 V लाइन वोल्टेज और 240 V फेज वोल्टेज एक साथ मिलते हैं)।`,
    bn: `১. থ্রি-ফেজ EMF উৎপাদন:
একটি ৩-ফেজ জেনারেটরের স্ট্যাটরে তিনটি কয়েল (R, Y, B) পরস্পরের সাথে ১২০° কোণে স্থাপন করা হয়। চৌম্বক ক্ষেত্র আবর্তিত হলে তিনটি সমান কিন্তু ১২০° দশা পার্থক্যের ভোল্টেজ উৎপন্ন হয়:
- e_R(t) = Em · sin(ωt)
- e_Y(t) = Em · sin(ωt - ১২০°)
- e_B(t) = Em · sin(ωt - ২৪০°)

২. তাৎক্ষণিক ও ফেজর যোগফল:
যেকোনো মুহূর্তে সুষম ৩-ফেজ ভোল্টেজের যোগফল সর্বদা শূন্য:
e_R(t) + e_Y(t) + e_B(t) = ০ এবং V_R + V_Y + V_B = ০

৩. ফেজ সিকোয়েন্স (Phase Sequence):
যে ক্রমে ভোল্টেজগুলো সর্বোচ্চ মানে পৌঁছায় তাকে ফেজ সিকোয়েন্স বলে (স্ট্যান্ডার্ড ক্রম: R-Y-B)। যেকোনো দুটি ফেজের সংযোগ বদলালে মোটরের ঘূর্ণন দিক বিপরীত হয়ে যায়।

৪. সিঙ্গেল ফেজের তুলনায় ৩-ফেজের প্রধান সুবিধাসমূহ:
- নিরবচ্ছিন্ন ধ্রুবক পাওয়ার: ৩-ফেজে মোট ক্ষমতা সময়ের সাথে পরিবর্তিত হয় না, ফলে মোটর মসৃণভাবে ঘোরে।
- ২৫% পরিবাহী তারের সাশ্রয় (একই পাওয়ার প্রেরণে)।
- সেলফ-স্টার্টিং মোটর: ৩-ফেজ ঘূর্ণনশীল চৌম্বক ক্ষেত্র (RMF) তৈরি করে যা স্বয়ংক্রিয়ভাবে মোটর চালু করে।
- একই আকারের মেশিনে ৫০% বেশি আউটপুট পাওয়া যায়।
- ডুয়াল ভোল্টেজ সুবিধা: স্টার সিস্টেমে ৪১৫ V (লাইন) ও ২৪০ V (ফেজ) উভয়ই পাওয়া যায়।`
  },
  sections: [
    {
      id: 'sec-three-phase-math-proof',
      title: {
        en: 'Mathematical Proof: Constant Instantaneous Power',
        hi: 'गणितीय प्रमाण: स्थिर तात्कालिक शक्ति',
        bn: 'গাণিতিক প্রমাণ: ধ্রুবক তাৎক্ষণিক ক্ষমতা'
      },
      content: {
        en: 'For a balanced 3-phase load with phase voltage V and phase current I lagging by φ: pR(t) = V·I[cos φ - cos(2ωt - φ)], pY(t) = V·I[cos φ - cos(2ωt - 240° - φ)], pB(t) = V·I[cos φ - cos(2ωt + 240° - φ)]. Summing the three, the second harmonic terms cancel completely: p_total(t) = 3 · V · I · cos φ = Constant! This completely eliminates mechanical vibration in large industrial rotating machinery.',
        hi: 'संतुलित 3-फेज भार में प्रत्येक फेज की तात्कालिक शक्ति का योग करने पर 2ωt वाले दोलनकारी पद पूरी तरह कट जाते हैं: p_total(t) = 3 · V · I · cos φ = स्थिर! इससे मोटरों में यांत्रिक कंपन समाप्त हो जाता है।',
        bn: 'সুষম ৩-ফেজ লোডে তিনটি ফেজের তাৎক্ষণিক ক্ষমতার যোগফল হিসাব করলে ২ωt বিশিষ্ট সাইনুসয়েডাল অংশগুলো পরস্পরকে নিষ্ক্রিয় করে: p_total(t) = ৩ · V · I · cos φ = ধ্রুবক! ফলে মোটরে কোনো যান্ত্রিক কম্পন তৈরি হয় না।'
      },
      schematicId: 'circuit-three-phase-intro',
      keyEquations: [
        'e_R(t) + e_Y(t) + e_B(t) = 0',
        '\\mathbf{V}_R + \\mathbf{V}_Y + \\mathbf{V}_B = 0',
        'p_{\\text{total}}(t) = p_R(t) + p_Y(t) + p_B(t) = 3 \\cdot V_{\\text{ph}} \\cdot I_{\\text{ph}} \\cdot \\cos\\phi = \\text{Constant}'
      ]
    },
    {
      id: 'sec-phase-sequence-effects',
      title: {
        en: 'Phase Sequence & Interconnection Principles',
        hi: 'फेज अनुक्रम एवं अंतर-संयोजन के सिद्धांत',
        bn: 'ফেজ সিকোয়েন্স ও আন্তঃসংযোগ নীতি'
      },
      content: {
        en: 'Phase sequence R-Y-B indicates that VR leads VY by 120°, which in turn leads VB by 120°. Reversing the sequence to R-B-Y reverses the direction of the stator rotating magnetic field from clockwise to anti-clockwise. Interconnecting 3 coils requires only 3 or 4 line wires (Star or Delta) instead of 6 individual leads, vastly simplifying electrical infrastructure.',
        hi: 'R-Y-B क्रम दर्शाता है कि VR, VY से 120° आगे है। क्रम को R-B-Y में बदलने से मोटर के घूमने की दिशा बदल जाती है। 3 कॉइलों को स्टार या डेल्टा में जोड़ने से 6 तारों की जगह केवल 3 या 4 तारों से काम चल जाता है।',
        bn: 'R-Y-B সিকোয়েন্স নির্দেশ করে VR ভোল্টেজ VY থেকে ১২০° এগিয়ে। সিকোয়েন্স R-B-Y করলে ঘূর্ণন দিক উল্টে যায়। স্টার বা ডেল্টা সংযোগের ফলে ৬টি পৃথক তারের পরিবর্তে মাত্র ৩ বা ৪টি তারের মাধ্যমে সম্পূর্ণ বিদ্যুৎ সরবরাহ করা সম্ভব হয়।'
      },
      schematicId: 'circuit-three-phase-intro',
      keyEquations: [
        'V_{RY} = V_R - V_Y = \\sqrt{3} \\cdot V_{\\text{ph}} \\angle 30^\\circ',
        'P_{\\text{3-phase}} = \\sqrt{3} \\cdot V_L \\cdot I_L \\cdot \\cos\\phi',
        'Q_{\\text{3-phase}} = \\sqrt{3} \\cdot V_L \\cdot I_L \\cdot \\sin\\phi',
        'S_{\\text{3-phase}} = \\sqrt{3} \\cdot V_L \\cdot I_L'
      ]
    }
  ],
  formulas: [
    {
      symbol: 'e_R(t)',
      expression: 'e_R(t) = E_m \\cdot \\sin(\\omega t)',
      description: {
        en: 'Instantaneous EMF of Red (Reference) Phase',
        hi: 'रेड (संदर्भ) फेज का तात्कालिक विद्युत वाहक बल',
        bn: 'রেড (রেফারেন্স) ফেজের তাৎক্ষণিক EMF'
      }
    },
    {
      symbol: 'e_Y(t)',
      expression: 'e_Y(t) = E_m \\cdot \\sin(\\omega t - 120^\\circ)',
      description: {
        en: 'Instantaneous EMF of Yellow Phase (lags Red by 120°)',
        hi: 'येलो फेज का तात्कालिक EMF (रेड से 120° पीछे)',
        bn: 'ইয়েলো ফেজের তাৎক্ষণিক EMF (রেড থেকে ১২০° পশ্চাদবর্তী)'
      }
    },
    {
      symbol: 'e_B(t)',
      expression: 'e_B(t) = E_m \\cdot \\sin(\\omega t - 240^\\circ) = E_m \\cdot \\sin(\\omega t + 120^\\circ)',
      description: {
        en: 'Instantaneous EMF of Blue Phase (lags Red by 240° or leads by 120°)',
        hi: 'ब्लू फेज का तात्कालिक EMF (रेड से 240° पीछे)',
        bn: 'ব্লু ফেজের তাৎক্ষণিক EMF (রেড থেকে ২৪০° পশ্চাদবর্তী)'
      }
    },
    {
      symbol: 'P_3ph',
      expression: 'P_{3\\phi} = 3 \\cdot V_{\\text{ph}} \\cdot I_{\\text{ph}} \\cdot \\cos\\phi = \\sqrt{3} \\cdot V_L \\cdot I_L \\cdot \\cos\\phi',
      description: {
        en: 'Total Active Power in a Balanced 3-Phase Circuit (Watts / kW)',
        hi: 'संतुलित 3-फेज परिपथ में कुल सक्रिय शक्ति (Watts / kW)',
        bn: 'সুষম ৩-ফেজ সার্কিটের মোট সক্রিয় ক্ষমতা (Watts / kW)'
      },
      variables: [
        { symbol: 'VL', name: { en: 'Line-to-Line Voltage (V)', hi: 'लाइन-से-लाइन वोल्टेज (V)', bn: 'লাইন-টু-লাইন ভোল্টেজ (V)' } },
        { symbol: 'IL', name: { en: 'Line Current (A)', hi: 'लाइन धारा (A)', bn: 'লাইন কারেন্ট (A)' } },
        { symbol: 'Vph', name: { en: 'Phase Voltage (V)', hi: 'फेज वोल्टेज (V)', bn: 'ফেজ ভোল্টেজ (V)' } },
        { symbol: 'Iph', name: { en: 'Phase Current (A)', hi: 'फेज धारा (A)', bn: 'ফেজ কারেন্ট (A)' } },
        { symbol: 'cos φ', name: { en: 'Load Phase Power Factor', hi: 'भार पावर फैक्टर', bn: 'লোড পাওয়ার ফ্যাক্টর' } }
      ]
    },
    {
      symbol: 'S_3ph',
      expression: 'S_{3\\phi} = \\sqrt{3} \\cdot V_L \\cdot I_L = 3 \\cdot V_{\\text{ph}} \\cdot I_{\\text{ph}}',
      description: {
        en: 'Total Apparent Power in a Balanced 3-Phase Circuit (VA / kVA)',
        hi: 'संतुलित 3-फेज परिपथ में कुल आभासी शक्ति (VA / kVA)',
        bn: 'সুষম ৩-ফেজ সার্কিটের মোট অ্যাপারেন্ট ক্ষমতা (VA / kVA)'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-three-phase-intro',
      title: {
        en: 'Three-Phase 120° Waveforms and Rotating Phasors',
        hi: 'थ्री-फेज 120° वेवफॉर्म एवं घूर्णी फेजर',
        bn: 'থ্রি-ফেজ ১২০° ওয়েভফর্ম ও ঘূর্ণনশীল ফেজর'
      },
      caption: {
        en: 'Balanced 3-Phase Sinusoidal Waveforms (R-Red, Y-Yellow, B-Blue) separated by 120° electrical angle, phasor constellation, and Star/Delta topologies.',
        hi: '120° कला कोण पर संतुलित 3-फेज वेवफॉर्म (R, Y, B), फेजर आरेख और स्टार/डेल्टा संयोजन।',
        bn: '১২০° ফেজ ব্যবধানে সুষম ৩-ফেজ ওয়েভফর্ম (R, Y, B), ফেজর ডায়াগ্রাম এবং স্টার/ডেল্টা সংযোগ।'
      },
      svgType: 'circuit-three-phase-intro'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-18-1',
      problem: {
        en: 'Three alternating voltages are given by eR = 325·sin(314t) V, eY = 325·sin(314t - 120°) V, and eB = 325·sin(314t - 240°) V. Find: (a) The peak and RMS value of each phase voltage, (b) Frequency of the supply, (c) The instantaneous value of each phase voltage at time t = 5 ms, (d) Verify that the sum of the instantaneous voltages at t = 5 ms is zero.',
        hi: 'तीन प्रत्यावर्ती वोल्टेज eR = 325·sin(314t) V, eY = 325·sin(314t - 120°) V, और eB = 325·sin(314t - 240°) V द्वारा दिए गए हैं। ज्ञात करें: (a) शिखर और RMS वोल्टेज, (b) आवृत्ति, (c) t = 5 ms पर प्रत्येक वोल्टेज का तात्कालिक मान, (d) सत्यापित करें कि t = 5 ms पर इनका योग शून्य है।',
        bn: 'তিনটি ভোল্টেজ eR = ৩২৫·sin(৩১৪t) V, eY = ৩২৫·sin(৩১৪t - ১২০°) V, এবং eB = ৩২৫·sin(৩১৪t - ২৪০°) V। নির্ণয় কর: (a) পিক ও RMS ভোল্টেজ, (b) ফ্রিকোয়েন্সি, (c) t = ৫ ms এ প্রতিটি ভোল্টেজের তাৎক্ষণিক মান, (d) প্রমাণ কর যে t = ৫ ms এ মোট ভোল্টেজ শূন্য।'
      },
      givenValues: {
        'Em': '325 V',
        'ω': '314 rad/s',
        't': '5 ms = 0.005 s'
      },
      solution: {
        en: `Step 1: Calculate Peak and RMS Voltages:
Peak voltage Em = 325 V.
RMS phase voltage V_RMS = Em / √2 = 325 / 1.4142 = 229.8 V ≈ 230 V.

Step 2: Calculate Supply Frequency f:
ω = 2πf = 314 rad/s ⇒ f = 314 / (2 × 3.1416) = 50 Hz.

Step 3: Calculate electrical angle θ at t = 5 ms:
θ = ωt = 314 × 0.005 = 1.57 radians = 90.0° (since 1.57 rad × 180 / π = 90°).

Step 4: Compute Instantaneous Voltages at t = 5 ms:
- e_R(5ms) = 325 · sin(90°) = 325 × 1.0 = +325.0 V.
- e_Y(5ms) = 325 · sin(90° - 120°) = 325 · sin(-30°) = 325 × (-0.5) = -162.5 V.
- e_B(5ms) = 325 · sin(90° - 240°) = 325 · sin(-150°) = 325 × (-0.5) = -162.5 V.

Step 5: Verify Sum of Instantaneous Voltages:
Sum = e_R + e_Y + e_B = (+325.0) + (-162.5) + (-162.5) = 325.0 - 325.0 = 0.0 V (Verified perfectly!).`,
        hi: `चरण 1: Em = 325 V, RMS V = 325 / √2 = 230 V।
चरण 2: आवृत्ति f = 314 / 2π = 50 Hz।
चरण 3: t = 5 ms पर कोण θ = 314 × 0.005 rad = 90°।
चरण 4:
e_R = 325 · sin(90°) = +325.0 V।
e_Y = 325 · sin(-30°) = -162.5 V।
e_B = 325 · sin(-150°) = -162.5 V।
चरण 5: योग = 325 - 162.5 - 162.5 = 0.0 V (सत्यापित)।`,
        bn: `ধাপ ১: পিক ভোল্টেজ Em = ৩২৫ V, RMS ভোল্টেজ V = ২৩০ V।
ধাপ ২: ফ্রিকোয়েন্সি f = ৫০ Hz।
ধাপ ৩: t = ৫ ms এ কোণ θ = ৯০°।
ধাপ ৪:
e_R = ৩২৫ × sin(৯০°) = +৩২৫.০ V।
e_Y = ৩২৫ × sin(-৩০°) = -১৬২.৫ V।
e_B = ৩২৫ × sin(-১৫০°) = -১৬২.৫ V।
ধাপ ৫: মোট যোগফল = ৩২৫.০ - ১৬২.৫ - ১৬২.৫ = ০.০ V (প্রমাণিত)।`
      },
      finalAnswer: {
        en: 'Em = 325 V, V_RMS = 230 V, f = 50 Hz; at t=5ms: eR = +325 V, eY = -162.5 V, eB = -162.5 V, Sum = 0 V.',
        hi: 'Em = 325 V, V_RMS = 230 V, f = 50 Hz; eR = +325 V, eY = -162.5 V, eB = -162.5 V, योग = 0 V।',
        bn: 'Em = ৩২৫ V, V_RMS = ২৩০ V, f = ৫০ Hz; eR = +৩২৫ V, eY = -১৬২.৫ V, eB = -১৬২.৫ V, মোট = ০ V।'
      }
    },
    {
      id: 'ex-18-2',
      problem: {
        en: 'A balanced 3-phase 415 V (Line-to-Line), 50 Hz system delivers power to a balanced load. The line current drawn is 25 A at a power factor of 0.85 lagging. Calculate: (a) Total 3-phase Active Power P, (b) Total 3-phase Reactive Power Q, (c) Total 3-phase Apparent Power S.',
        hi: 'एक संतुलित 3-फेज 415 V, 50 Hz प्रणाली एक संतुलित भार को शक्ति देती है। 0.85 लैगिंग पावर फैक्टर पर लाइन धारा 25 A है। गणना करें: (a) कुल 3-फेज सक्रिय शक्ति P, (b) कुल प्रतिक्रियाशील शक्ति Q, (c) कुल आभासी शक्ति S।',
        bn: 'একটি সুষম ৩-ফেজ ৪১৫ V, ৫০ Hz ব্যবস্থা একটি লোডে বিদ্যুৎ সরবরাহ করে। ০.৮৫ ল্যাগিং PF-এ লাইন কারেন্ট ২৫ A। নির্ণয় কর: (a) মোট সক্রিয় ক্ষমতা P, (b) মোট রিঅ্যাক্টিভ ক্ষমতা Q, (c) মোট অ্যাপারেন্ট ক্ষমতা S।'
      },
      givenValues: {
        'VL': '415 V',
        'IL': '25 A',
        'cos φ': '0.85 lagging'
      },
      solution: {
        en: `Step 1: Calculate Total 3-Phase Apparent Power S:
S = √3 · VL · IL = √3 × 415 × 25 = 1.73205 × 10375 = 17,970 VA = 17.97 kVA.

Step 2: Calculate Total 3-Phase Active Power P:
P = √3 · VL · IL · cos φ = S · cos φ = 17.97 × 0.85 = 15.275 kW = 15,275 W.

Step 3: Calculate Total 3-Phase Reactive Power Q:
Phase angle φ = cos⁻¹(0.85) = 31.79°.
sin φ = sin(31.79°) = √(1 - 0.85²) = √(1 - 0.7225) = √0.2775 = 0.5268.
Q = √3 · VL · IL · sin φ = S · sin φ = 17.97 × 0.5268 = 9.467 kVAR = 9467 VAR.
(Verification: √(P² + Q²) = √(15.275² + 9.467²) = √(233.32 + 89.62) = √322.94 = 17.97 kVA).`,
        hi: `चरण 1: कुल आभासी शक्ति S = √3 × 415 × 25 = 17.97 kVA।
चरण 2: कुल सक्रिय शक्ति P = S × 0.85 = 15.275 kW।
चरण 3: sin φ = 0.5268, कुल प्रतिक्रियाशील शक्ति Q = S × 0.5268 = 9.467 kVAR।`,
        bn: `ধাপ ১: মোট আপাত ক্ষমতা S = √৩ × ৪১৫ × ২৫ = ১৭.৯৭ kVA।
ধাপ ২: মোট সক্রিয় ক্ষমতা P = ১৭.৯৭ × ০.৮৫ = ১৫.২৭৫ kW।
ধাপ ৩: sin φ = ০.৫২৬৮, মোট রিঅ্যাক্টিভ ক্ষমতা Q = ১৭.৯৭ × ০.৫২৬৮ = ৯.৪৬৭ kVAR।`
      },
      finalAnswer: {
        en: 'Active Power P = 15.275 kW, Reactive Power Q = 9.467 kVAR, Apparent Power S = 17.97 kVA.',
        hi: 'P = 15.275 kW, Q = 9.467 kVAR, S = 17.97 kVA।',
        bn: 'P = ১৫.২৭৫ kW, Q = ৯.৪৬৭ kVAR, S = ১৭.৯৭ kVA।'
      }
    },
    {
      id: 'ex-18-3',
      problem: {
        en: 'Compare the total copper conductor volume required to transmit a power of P = 100 kW over a transmission distance of 10 km with line loss of 5 kW at unity power factor between: (a) Single-phase 2-wire system at 400 V, and (b) Three-phase 3-wire system at 400 V line voltage.',
        hi: '100 kW की शक्ति को 10 km की दूरी पर 5 kW लाइन हानि के साथ 400 V पर संचारित करने के लिए (a) सिंगल-फेज 2-वायर और (b) 3-फेज 3-वायर प्रणाली में तांबे के चालक के आयतन की तुलना करें।',
        bn: '১০০ kW ক্ষমতা ১০ কিমি দূরত্বে ৫ kW লাইভ লস সহ ৪০০ V-এ পাঠাতে (a) সিঙ্গেল ফেজ ২-ওয়্যার এবং (b) ৩-ফেজ ৩-ওয়্যার ব্যবস্থায় তামার আয়তনের তুলনা কর।'
      },
      givenValues: {
        'P': '100 kW = 100,000 W',
        'V': '400 V',
        'Loss Ploss': '5 kW = 5,000 W',
        'Distance L': '10 km'
      },
      solution: {
        en: `Case (a): Single-Phase 2-Wire System:
Current I1 = P / V = 100,000 / 400 = 250 A.
Total line loss in 2 wires: Ploss = 2 · I1² · R1 = 5000 W.
Resistance per wire R1 = 5000 / (2 × 250²) = 5000 / (2 × 62,500) = 5000 / 125,000 = 0.040 Ω.
Conductor cross-sectional area A1 = ρ · L / R1.
Total volume for 2 wires: Vol_1ph = 2 · (A1 · L) = 2 · (ρ L² / R1) = 2 · (ρ L² / 0.040) = 50 · ρ L².

Case (b): Three-Phase 3-Wire System:
Current I3 = P / (√3 · VL) = 100,000 / (√3 × 400) = 100,000 / 692.82 = 144.34 A.
Total line loss in 3 wires: Ploss = 3 · I3² · R3 = 5000 W.
Resistance per wire R3 = 5000 / (3 × 144.34²) = 5000 / (3 × 20,833.3) = 5000 / 62,500 = 0.080 Ω.
Conductor area A3 = ρ · L / R3.
Total volume for 3 wires: Vol_3ph = 3 · (A3 · L) = 3 · (ρ L² / R3) = 3 · (ρ L² / 0.080) = 37.5 · ρ L².

Comparison Ratio:
Ratio = Vol_3ph / Vol_1ph = 37.5 / 50.0 = 0.75 = 75%.
Conclusion: The 3-phase 3-wire system saves 25% of copper conductor material compared to the single-phase system!`,
        hi: `सिंगल-फेज 2-वायर: धारा I1 = 250 A, R1 = 0.04 Ω, कुल आयतन ∝ 50.0।
3-फेज 3-वायर: धारा I3 = 144.34 A, R3 = 0.08 Ω, कुल आयतन ∝ 37.5।
अनुपात = 37.5 / 50.0 = 0.75 (75%)।
निष्कर्ष: 3-फेज प्रणाली 25% तांबे के तार की बचत करती है!`,
        bn: `সিঙ্গেল ফেজ ২-ওয়্যার: কারেন্ট I1 = ২৫০ A, মোট আয়তন ∝ ৫০.০।
৩-ফেজ ৩-ওয়্যার: কারেন্ট I3 = ১৪৪.৩৪ A, মোট আয়তন ∝ ৩৭.৫।
অনুপাত = ৩৭.৫ / ৫০.০ = ০.৭৫ (৭৫%)।
উপসংহার: ৩-ফেজ ব্যবস্থা ২৫% কপার পরিবাহী সাশ্রয় করে!`
      },
      finalAnswer: {
        en: 'Conductor Volume Ratio (3-Phase / 1-Phase) = 0.75 (3-Phase requires 25% less conductor material).',
        hi: 'आयतन अनुपात (3-फेज / 1-फेज) = 0.75 (3-फेज में 25% कम तांबे की आवश्यकता होती है)।',
        bn: 'কপার পরিবাহীর অনুপাত = ০.৭৫ (৩-ফেজে ২৫% কম কপার তার লাগে)।'
      }
    }
  ],
  practicalApplications: {
    en: [
      'National Power Grids: Electric power generation (Hydro, Thermal, Nuclear) and Extra High Voltage (EHV) transmission (400 kV, 765 kV) operate exclusively on 3-phase AC networks.',
      'Industrial Heavy Machinery: Heavy induction motors in manufacturing, elevators, pumps, rolling mills, and HVAC chillers require 3-phase power for self-starting rotating magnetic fields.',
      'Data Centers & Server Racks: High-density server cabinets utilize 3-phase 415 V power distribution units (PDUs) to balance high computing power loads evenly across phases.',
      'Electric Trains and Traction: High-speed electric locomotives draw power from overhead catenary lines stepped down and converted into 3-phase AC for variable-frequency induction traction motors.'
    ],
    hi: [
      'राष्ट्रीय पावर ग्रिड: थर्मल, हाइड्रो और न्यूक्लियर पावर प्लांट से 400 kV/765 kV ट्रांसमिशन लाइनों में विशेष रूप से 3-फेज प्रणाली का उपयोग होता है।',
      'औद्योगिक मशीनरी: कारखानों की भारी इंडक्शन मोटरें, पंप, क्रेन और लिफ्ट 3-फेज पावर पर चलते हैं।',
      'डेटा सेंटर: सर्वर रैक को संतुलित बिजली देने के लिए 3-फेज पीडीयू का उपयोग किया जाता है।',
      'इलेक्ट्रिक रेलवे: आधुनिक हाई-स्पीड ट्रेनें ट्रैक्शन मोटरों को चलाने के लिए 3-फेज इनवर्टर ड्राइव का उपयोग करती हैं।'
    ],
    bn: [
      'জাতীয় বিদ্যুৎ গ্রিড: বিদ্যুৎ উৎপাদন কেন্দ্র এবং হাই-ভোল্টেজ সঞ্চালন লাইনে সর্বজনীনভাবে ৩-ফেজ ব্যবস্থা ব্যবহৃত হয়।',
      'ভারী শিল্প কলকারখানা: কারখানার বড় মোটর, পাম্প ও লিফট চালনায় ৩-ফেজ বিদ্যুৎ অপরিহার্য।',
      'ডাটা সেন্টার: আধুনিক সার্ভার র্যাকগুলোতে সুষম বিদ্যুৎ বণ্টনে ৩-ফেজ PDU ব্যবহৃত হয়।',
      'বৈদ্যুতিক ট্রেন: আধুনিক ট্রেনের ট্র্যাকশন মোটরগুলো ৩-ফেজ ইনভার্টার দ্বারা পরিচালিত হয়।'
    ]
  },
  importantPoints: {
    en: [
      'Three balanced sinusoidal voltages have identical peak amplitude Em, identical frequency f, and are mutually displaced by 120° in time phase.',
      'The algebraic sum of balanced instantaneous voltages is zero at every instant of time: eR(t) + eY(t) + eB(t) = 0.',
      'Total instantaneous power in a balanced 3-phase system is perfectly constant with time (p = 3·Vph·Iph·cos φ), producing constant pulseless torque in motors.',
      'Phase sequence (e.g. R-Y-B) defines the order of positive voltage peaks; reversing any two phase connections reverses motor rotation direction.',
      '3-phase transmission saves 25% conductor weight compared to single-phase transmission for equivalent power and line losses.'
    ],
    hi: [
      'तीनों संतुलित वोल्टेजों का आयाम और आवृत्ति समान होती है और वे परस्पर 120° पर विस्थापित होते हैं।',
      'संतुलित वोल्टेजों का तात्कालिक योग हर क्षण शून्य होता है: eR + eY + eB = 0।',
      'संतुलित 3-फेज में कुल तात्कालिक शक्ति स्थिर रहती है, जिससे मोटरों में कंपन रहित टॉर्क मिलता है।',
      'फेज सीक्वेंस R-Y-B होता है; किन्हीं दो फेजों को आपस में बदलने से मोटर के घूमने की दिशा बदल जाती है।',
      '3-फेज ट्रांसमिशन में 1-फेज की तुलना में 25% कम तार की आवश्यकता होती है।'
    ],
    bn: [
      'তিনটি সুষম ভোল্টেজের মান ও কম্পাঙ্ক সমান এবং তাদের মধ্যকার দশা পার্থক্য ১২০°।',
      'যেকোনো মুহূর্তে সুষম ৩-ফেজ ভোল্টেজের তাৎক্ষণিক যোগফল সর্বদা শূন্য (eR + eY + eB = ০)।',
      'সুষম ৩-ফেজ সার্কিটে মোট ক্ষমতা সর্বদা ধ্রুবক থাকে, ফলে মোটর মসৃণভাবে ঘোরে।',
      'স্ট্যান্ডার্ড ফেজ সিকোয়েন্স R-Y-B; যেকোনো দুটি ফেজ অদলবদল করলে মোটর উল্টো ঘোরে।',
      '৩-ফেজ সঞ্চালন লাইনে সিঙ্গেল ফেজের চেয়ে ২৫% কম কপার তার প্রয়োজন হয়।'
    ]
  },
  commonMistakes: {
    en: [
      'Confusing Phase Voltage with Line Voltage: Vph is the voltage across one single coil winding; VL is the voltage measured between two outer line conductors. In Star, VL = √3·Vph.',
      'Assuming total power is 3 · VL · IL · cos φ: The correct formula is P = √3 · VL · IL · cos φ (using line values) OR P = 3 · Vph · Iph · cos φ (using phase values). Never mix the two.',
      'Neglecting the 120° phase shift: Adding phase quantities as scalar numbers instead of using vector/phasor addition with 120° angles.',
      'Thinking single-phase power is constant: Single-phase power pulsates at 100 Hz (double line frequency); only balanced polyphase power is constant.'
    ],
    hi: [
      'फेज वोल्टेज और लाइन वोल्टेज में भ्रम: Vph एक वाइंडिंग का वोल्टेज है, जबकि VL दो लाइन तारों के बीच का वोल्टेज है। स्टार में VL = √3·Vph होता है।',
      'शक्ति सूत्र में गलती: सही सूत्र P = √3·VL·IL·cos φ (लाइन मान) या P = 3·Vph·Iph·cos φ (फेज मान) है। दोनों को आपस में न मिलाएँ।',
      '120° फेज अंतर को अनदेखा करना: फेजरों को सीधे अंकगणित की तरह जोड़ना गलत है, हमेशा सदिश विधि अपनाएँ।',
      'सिंगल-फेज पावर को स्थिर समझना: सिंगल-फेज पावर 100 Hz पर दोलन करती है, केवल 3-फेज पावर स्थिर होती है।'
    ],
    bn: [
      'ফেজ ও লাইন ভোল্টেজ গুলিয়ে ফেলা: Vph হলো একটি কয়েলের ভোল্টেজ এবং VL হলো দুটি লাইনের মধ্যবর্তী ভোল্টেজ। স্টারে VL = √৩·Vph।',
      'পাওয়ার সূত্রে ভুল: লাইন মান দিয়ে P = √৩·VL·IL·cos φ এবং ফেজ মান দিয়ে P = ৩·Vph·Iph·cos φ।',
      '১২০° ফেজ কোণ ভুলে স্কেলার যোগ করা: ফেজ রাশিগুলোকে অবশ্যই ভেক্টর নিয়মে যোগ করতে হবে।',
      'সিঙ্গেল ফেজ ক্ষমতাকে ধ্রুবক ভাবা: সিঙ্গেল ফেজ পাওয়ার ১০০ Hz এ স্পন্দিত হয়, কেবল ৩-ফেজ পাওয়ার ধ্রুবক।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-18-1',
      question: {
        en: 'What is the electrical phase displacement between the three phases in a standard balanced 3-phase AC system?',
        hi: 'एक मानक संतुलित 3-फेज एसी प्रणाली में तीनों फेजों के बीच विद्युत कला विस्थापन कितना होता है?',
        bn: 'একটি স্ট্যান্ডার্ড সুষম ৩-ফেজ এসি সিস্টেমে তিনটি ফেজের মধ্যকার ফেজ পার্থক্য কত?'
      },
      options: [
        { id: 'opt-a', text: { en: '90° (π/2 radians)', hi: '90° (π/2 रेडियन)', bn: '৯০° (π/২ রেডিয়ান)' } },
        { id: 'opt-b', text: { en: '120° (2π/3 radians)', hi: '120° (2π/3 रेडियन)', bn: '১২০° (২π/৩ রেডিয়ান)' } },
        { id: 'opt-c', text: { en: '180° (π radians)', hi: '180° (π रेडियन)', bn: '১৮০° (π রেডিয়ান)' } },
        { id: 'opt-d', text: { en: '360° (2π radians)', hi: '360° (2π रेडियन)', bn: '৩৬০° (২π রেডিয়ান)' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'The three stator windings in a 3-phase generator are symmetrically spaced 360° / 3 = 120° apart in space and time.',
        hi: '3-फेज जनरेटर में तीनों वाइंडिंग 360° / 3 = 120° के अंतराल पर स्थापित होती हैं।',
        bn: '৩-ফেজ জেনারেটরে কয়েলগুলো ৩৬০° / ৩ = ১২০° ব্যবধানে বিন্যস্ত থাকে।'
      }
    },
    {
      id: 'mcq-18-2',
      question: {
        en: 'What is the sum of the instantaneous voltages eR(t) + eY(t) + eB(t) in a balanced 3-phase system at any given moment?',
        hi: 'संतुलित 3-फेज प्रणाली में किसी भी क्षण तात्कालिक वोल्टेजों eR + eY + eB का योग क्या होता है?',
        bn: 'সুষম ৩-ফেজ সিস্টেমে যেকোনো মুহূর্তে তাৎক্ষণিক ভোল্টেজ eR + eY + eB-এর যোগফল কত?'
      },
      options: [
        { id: 'opt-a', text: { en: '3 · Em', hi: '3 · Em', bn: '৩ · Em' } },
        { id: 'opt-b', text: { en: '√3 · Em', hi: '√3 · Em', bn: '√৩ · Em' } },
        { id: 'opt-c', text: { en: 'Zero (0)', hi: 'शून्य (0)', bn: 'শূন্য (০)' } },
        { id: 'opt-d', text: { en: 'Em / √3', hi: 'Em / √3', bn: 'Em / √৩' } }
      ],
      correctOptionId: 'opt-c',
      explanation: {
        en: 'Because the three sinusoidal waves are displaced by exactly 120°, their algebraic sum at every instant is identically zero.',
        hi: '120° विस्थापन के कारण तीनों साइनसॉइडल तरंगों का तात्कालिक योग प्रत्येक क्षण शून्य होता है।',
        bn: '১২০° ফেজ ব্যবধানের কারণে যেকোনো মুহূর্তে এদের বীজগাণিতিক যোগফল শূন্য হয়।'
      }
    },
    {
      id: 'mcq-18-3',
      question: {
        en: 'How much conductor copper material is saved by using a 3-phase 3-wire system compared to an equivalent single-phase 2-wire system?',
        hi: 'समतुल्य सिंगल-फेज 2-वायर प्रणाली की तुलना में 3-फेज 3-वायर प्रणाली का उपयोग करके कितने प्रतिशत तांबे के तार की बचत होती है?',
        bn: 'সিঙ্গেল ফেজ ২-ওয়্যার ব্যবস্থার তুলনায় ৩-ফেজ ৩-ওয়্যার ব্যবস্থায় কত শতাংশ কপার তার সাশ্রয় হয়?'
      },
      options: [
        { id: 'opt-a', text: { en: '10%', hi: '10%', bn: '১০%' } },
        { id: 'opt-b', text: { en: '25%', hi: '25%', bn: '২৫%' } },
        { id: 'opt-c', text: { en: '50%', hi: '50%', bn: '৫০%' } },
        { id: 'opt-d', text: { en: '75%', hi: '75%', bn: '৭৫%' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'A 3-phase 3-wire system requires only 75% of the conductor material of a single-phase system, resulting in a 25% savings in copper/aluminum.',
        hi: '3-फेज 3-वायर प्रणाली में सिंगल-फेज की तुलना में केवल 75% चालक सामग्री लगती है, जिससे 25% तांबे की बचत होती है।',
        bn: '৩-ফেজ ৩-ওয়্যার ব্যবস্থায় সিঙ্গেল ফেজের ৭৫% পরিবাহী লাগে, ফলে ২৫% কপার সাশ্রয় হয়।'
      }
    },
    {
      id: 'mcq-18-4',
      question: {
        en: 'What happens to a 3-phase induction motor when any two of the three supply lines (e.g. Red and Yellow) are interchanged?',
        hi: 'जब 3-फेज इंडक्शन मोटर के किन्हीं दो सप्लाई तारों (जैसे रेड और येलो) को आपस में बदल दिया जाता है तो क्या होता है?',
        bn: '৩-ফেজ ইন্ডাকশন মোটরের যেকোনো দুটি তার (যেমন রেড ও ইয়েলো) অদলবদল করলে কী ঘটে?'
      },
      options: [
        { id: 'opt-a', text: { en: 'The motor burns out instantly', hi: 'मोटर तुरंत जल जाती है', bn: 'মোটর সাথে সাথে পুড়ে যায়' } },
        { id: 'opt-b', text: { en: 'The motor rotation speed doubles', hi: 'मोटर की गति दोगुनी हो जाती है', bn: 'মোটরের গতি দ্বিগুণ হয়' } },
        { id: 'opt-c', text: { en: 'The direction of rotation of the motor is reversed', hi: 'मोटर के घूमने की दिशा उलट जाती है', bn: 'মোটরের ঘূর্ণন দিক বিপরীত হয়ে যায়' } },
        { id: 'opt-d', text: { en: 'The motor refuses to start', hi: 'मोटर शुरू होने से इनकार कर देती है', bn: 'মোটর চালু হতে পারে না' } }
      ],
      correctOptionId: 'opt-c',
      explanation: {
        en: 'Interchanging any two supply lines reverses the phase sequence (from R-Y-B to R-B-Y), reversing the rotation of the stator rotating magnetic field and the motor rotor.',
        hi: 'किन्हीं दो फेजों को आपस में बदलने से फेज सीक्वेंस उलट जाता है, जिससे मोटर की घूर्णन दिशा विपरीत हो जाती है।',
        bn: 'যেকোনো দুটি ফেজ অদলবদল করলে ফেজ সিকোয়েন্স বিপরীত হয় এবং মোটরের ঘূর্ণন দিক উল্টে যায়।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'prac-18-1',
      question: {
        en: 'A balanced 3-phase Star-connected system has a line voltage of VL = 415 V, 50 Hz. Calculate: (a) The phase voltage Vph, (b) The line current when supplying a balanced 3-phase load of 30 kW at 0.8 lagging power factor, (c) The total apparent power S.',
        hi: 'एक संतुलित 3-फेज स्टार प्रणाली में लाइन वोल्टेज VL = 415 V, 50 Hz है। गणना करें: (a) फेज वोल्टेज Vph, (b) 0.8 लैगिंग PF पर 30 kW लोड की लाइन धारा, (c) कुल आभासी शक्ति S।',
        bn: 'একটি সুষম ৩-ফেজ স্টার সিস্টেমে লাইন ভোল্টেজ VL = ৪১৫ V, ৫০ Hz। নির্ণয় কর: (a) ফেজ ভোল্টেজ Vph, (b) ০.৮ ল্যাগিং PF-এ ৩০ kW লোডের লাইন কারেন্ট, (c) মোট অ্যাপারেন্ট ক্ষমতা S।'
      },
      hint: {
        en: 'In Star, Vph = VL / √3. Power P = √3 · VL · IL · cos φ ⇒ IL = P / (√3 · VL · cos φ).',
        hi: 'स्टार में Vph = VL / √3। IL = P / (√3 · VL · cos φ) का प्रयोग करें।',
        bn: 'স্টারে Vph = VL / √৩। IL = P / (√৩ · VL · cos φ) ব্যবহার করুন।'
      },
      answerKey: {
        en: '(a) Phase Voltage Vph = 415 / √3 = 239.6 V ≈ 240 V.\n(b) Line Current IL = P / (√3 · VL · cos φ) = 30,000 / (1.732 × 415 × 0.8) = 30,000 / 575.0 = 52.17 A.\n(c) Total Apparent Power S = √3 · VL · IL = 1.732 × 415 × 52.17 = 37,500 VA = 37.5 kVA (or S = P / cos φ = 30 / 0.8 = 37.5 kVA).',
        hi: '(a) Vph = 239.6 V (240 V)। (b) IL = 52.17 A। (c) S = 37.5 kVA।',
        bn: '(a) Vph = ২৩৯.৬ V (২৪০ V)। (b) IL = ৫২.১৭ A। (c) S = ৩৭.৫ kVA।'
      }
    },
    {
      id: 'prac-18-2',
      question: {
        en: 'Write down the three balanced sinusoidal voltage expressions for an AC supply having an RMS phase voltage of 240 V at 60 Hz with Red phase as reference. Calculate the instantaneous voltages of all three phases at time t = 2.778 ms (which corresponds to 60° electrical angle).',
        hi: '240 V RMS, 60 Hz सप्लाई के लिए तीन संतुलित वोल्टेज समीकरण लिखें। t = 2.778 ms (60° कोण) पर तीनों फेजों के तात्कालिक मान ज्ञात करें।',
        bn: '২৪০ V RMS, ৬০ Hz সাপ্লাইয়ের জন্য তিনটি সুষম ভোল্টেজ সমীকরণ লেখ। t = ২.৭৭৮ ms (৬০° কোণ) এ তিনটি ফেজের তাৎক্ষণিক ভোল্টেজ নির্ণয় কর।'
      },
      hint: {
        en: 'Em = 240 × √2 = 339.41 V. ω = 2π × 60 = 377 rad/s. Angle θ = 377 × 0.002778 rad = 1.047 rad = 60°.',
        hi: 'Em = 339.41 V। eR = 339.41·sin(60°), eY = 339.41·sin(60° - 120°), eB = 339.41·sin(60° - 240°)।',
        bn: 'Em = ৩৩৯.৪১ V। eR = ৩৩৯.৪১·sin(৬০°), eY = ৩৩৯.৪১·sin(৬০° - ১২০°), eB = ৩৩৯.৪১·sin(৬০° - ২৪০°)।'
      },
      answerKey: {
        en: '(a) Equations:\neR(t) = 339.41 · sin(377t) V\neY(t) = 339.41 · sin(377t - 120°) V\neB(t) = 339.41 · sin(377t - 240°) V\n\n(b) At t = 2.778 ms (θ = 60°):\neR = 339.41 × sin(60°) = 339.41 × 0.8660 = +293.94 V\neY = 339.41 × sin(60° - 120°) = 339.41 × sin(-60°) = -293.94 V\neB = 339.41 × sin(60° - 240°) = 339.41 × sin(-180°) = 0.0 V\nSum = (+293.94) + (-293.94) + 0.0 = 0.0 V.',
        hi: 'eR = +293.94 V, eY = -293.94 V, eB = 0.0 V, योग = 0 V।',
        bn: 'eR = +২৯৩.৯৪ V, eY = -২৯৩.৯৪ V, eB = ০.০ V, মোট = ০ V।'
      }
    }
  ]
};
