import { Lesson } from '../types';

export const LESSON_DC_MOTOR_STARTING: Lesson = {
  id: 'lsn-ch6-dc-motor-starting',
  topicId: 'ch6-dc-motor-starting',
  chapterId: 'ch-electrical-machines',
  order: 10,
  title: {
    en: 'DC Motor Starting Methods & Starters',
    hi: 'डीसी मोटर स्टार्टिंग विधियाँ एवं स्टार्टर',
    bn: 'ডিসি মোটর স্টার্টিং পদ্ধতি ও স্টার্টার'
  },
  description: {
    en: 'Why DC motors require starting current limiters, Direct-On-Line starting hazards, comprehensive analysis of 2-point, 3-point, and 4-point manual starters, No-Volt Release (NVR), Overload Release (OLR), protective functions, and common operational faults.',
    hi: 'डीसी मोटरों में स्टार्टिंग करंट सीमित करने की आवश्यकता, डायरेक्ट-ऑन-लाइन स्टार्टिंग के खतरे, 2-पॉइंट, 3-पॉइंट एवं 4-पॉइंट स्टार्टर का विस्तृत विश्लेषण, नो-वोल्ट रिलीज (NVR), ओवरलोड रिलीज (OLR), सुरक्षात्मक कार्य एवं सामान्य दोष।',
    bn: 'ডিসি মোটরে স্টার্টিং কারেন্ট নিয়ন্ত্রণের প্রয়োজনীয়তা, ডিরেক্ট-অন-লাইন স্টার্টিংয়ের বিপদ, ২-পয়েন্ট, ৩-পয়েন্ট ও ৪-পয়েন্ট স্টার্টারের বিস্তারিত বিশ্লেষণ, নো-ভোল্ট রিলিজ (NVR), ওভারলোড রিলিজ (OLR), সুরক্ষা ব্যবস্থা ও সাধারণ ত্রুটি।'
  },
  estimatedMinutes: 38,
  easyExplanation: {
    en: 'When a DC motor is at a complete standstill (speed N = 0), its internal generator action cannot operate yet, so its protective Back EMF is zero (Eb = 0). Because the copper armature winding has an extremely low resistance (often under 0.5 Ω), connecting the motor directly to the full power supply would cause a catastrophic current surge—up to 20 to 30 times rated full-load current! This huge surge would burn the insulation, cause violent sparking at the commutator, and trip building circuit breakers. A DC motor starter solves this by inserting a stepped chain of external resistors into the armature circuit at startup. As the motor accelerates and builds its own Back EMF, the starter handle progressively cuts out the resistors until the motor runs freely on full line voltage.',
    hi: 'जब डीसी मोटर रुकी होती है (गति N = 0), तो उसमें बैक EMF शून्य (Eb = 0) होता है। क्योंकि आर्मेचर वाइंडिंग का प्रतिरोध बहुत कम (लगभग 0.5 Ω से कम) होता है, सीधे 220V सप्लाई से जोड़ने पर 20 से 30 गुना अत्यधिक करंट का झटका लगेगा, जिससे वाइंडिंग जल सकती है और कम्यूटेटर पर भारी स्पार्किंग हो सकती है। डीसी मोटर स्टार्टर स्टार्टिंग के समय आर्मेचर के श्रेणी में कई चरणों में प्रतिरोध जोड़ता है। जैसे-जैसे मोटर तेज होती है और बैक EMF उत्पन्न होने लगता है, स्टार्टर हैंडल धीरे-धीरे इन प्रतिरोधों को हटाता जाता है जब तक कि मोटर पूरी गति पर न पहुँच जाए।',
    bn: 'যখন একটি ডিসি মোটর স্থির অবস্থায় থাকে (গতি N = 0), তখন ব্যাক EMF শূন্য (Eb = 0) থাকে। যেহেতু আর্মেচার ওয়াইন্ডিংয়ের রোধ অত্যন্ত কম (সাধারণত ০.৫ ওহমের নিচে), তাই সরাসরি সম্পূর্ণ ভোল্টেজ প্রয়োগ করলে স্বাভাবিকের চেয়ে ২০ থেকে ৩০ গুণ বেশি ভয়াবহ কারেন্ট প্রবেশ করে! এই অতিরিক্ত কারেন্ট মোটরের ইনসুলেশন পুড়িয়ে ফেলতে পারে এবং কমিউটেটরে তীব্র স্পার্ক তৈরি করতে পারে। একটি ডিসি মোটর স্টার্টার শুরুতে আর্মেচারের সাথে ধাপে ধাপে সিরিজ রোধ যুক্ত করে কারেন্ট নিরাপদ মাত্রায় রাখে। মোটর গতিশীল হয়ে ব্যাক EMF তৈরি করার সাথে সাথে হ্যান্ডেল ঘুরিয়ে রোধগুলো একে একে বিচ্ছিন্ন করে স্বাভাবিক পরিচালন অবস্থায় নেওয়া হয়।'
  },
  detailedExplanation: {
    en: `1. Physical Necessity of DC Motor Starters:
A. The Direct-On-Line (DOL) Starting Problem:
- The fundamental armature electrical equation of any DC motor is:
  V = E_b + I_a · R_a
  => I_a = (V - E_b) / R_a
- At the exact moment of standstill (t = 0, N = 0 RPM):
  * Back EMF: E_b = (P · Φ · Z · N) / (60 · A) = 0 Volts.
  * Starting Armature Current: I_a(start) = V / R_a.
- Example Calculation:
  For a 5 kW, 220 V DC shunt motor with full-load current I_FL = 25 A and armature resistance R_a = 0.4 Ω:
  I_a(start, DOL) = 220 V / 0.4 Ω = 550 Amperes!
  This is 550 / 25 = 22 times (2200%) of rated full-load current.

B. Catastrophic Consequences of Direct Starting:
- 1. Thermal Destruction (Joule Heating): Copper loss scales with current squared (P_loss = I_a² · R_a). A 22× current spike generates (22)² = 484 times the rated thermal heat, instantly charring and short-circuiting armature enamel insulation.
- 2. Commutator Flashover & Mechanical Pitting: Extreme current causes severe continuous arcing beneath the carbon brushes, pitting commutator copper segments and destroying brush holders.
- 3. Mechanical Shock: Starting torque T_a ∝ Φ · I_a surges violently, causing mechanical shock that can sheer shaft couplings, strip gearbox teeth, or snap drive chains.
- 4. Supply Line Voltage Collapse: The sudden 500+ A draw causes massive I·R voltage dips along feeder cables, causing other factory machinery and lighting circuits to flicker or trip off.

C. Current Limiting Solution:
To restrict initial starting current to a safe value (typically 1.25× to 1.5× full-load rated current I_FL):
- Total required initial circuit resistance: R_total = V / I_a(start, safe)
- External starter resistance required: R_starter = R_total - R_a
- As the rotor accelerates, speed N rises => E_b rises => external resistance is cut out in progressive steps (Stud 1 -> Stud 2 -> Stud 3 -> RUN).

2. The 2-Point Starter (For DC Series Motors):
- Terminals: Line (L) and Armature (A).
- Circuit Topology:
  * Terminal L connects to supply via an Overload Release (OLR) coil.
  * The starting handle connects directly to L.
  * Moving the handle across studs progressively cuts out series resistance blocks.
  * In the RUN position, the handle is held against a spring by a No-Volt Release (NVR) electromagnet coil connected in series with the main motor circuit.
- Operating Mechanism:
  * When running, if line power fails or voltage collapses, NVR de-energizes, and a spiral return spring snaps the handle back to OFF.
  * If current surges excessively, the OLR coil pulls an iron armature up, shorting the NVR coil or tripping the circuit.
- Specific Suitability: Used exclusively for DC series motors (traction, cranes) because field and armature carry the exact same line current.

3. The 3-Point Starter (For DC Shunt & Compound Motors):
- Terminals:
  * L (Line): Connected to positive supply terminal via the Overload Release (OLR) coil.
  * A (Armature): Connected to the starter resistance stud chain and the armature terminal.
  * F (Field): Connected to the shunt field winding through the No-Volt Release (NVR) holding coil.
- Starting Sequence:
  * Step 1 (OFF): Handle is held at OFF by a strong spiral spring. Motor is de-energized.
  * Step 2 (Stud 1): Handle contacts Stud 1. Full starter resistance R_st is inserted in series with the armature (I_a = V / (R_a + R_st)). Concurrently, full line voltage is applied across the shunt field via the brass arc to establish maximum starting flux Φ.
  * Step 3 (Studs 2 to 4): As motor accelerates and Back EMF E_b develops, handle is slowly moved forward, cutting out resistance studs.
  * Step 4 (RUN position): All starting resistance is removed (R_st = 0). The soft iron piece on the handle is magnetically held against the No-Volt Coil (NVC) electromagnet against the spiral spring tension.

- Protective Functions:
  * 1. No-Volt Release (NVR / NVC): Connected in series with the shunt field winding. If supply fails or line voltage drops below ~70%, the magnetic pull weakens, and the spiral spring instantly snaps the handle to OFF. This prevents the motor from restarting directly on full line voltage when power is restored.
  * 2. Overload Release (OLR): Connected in the main line circuit. Contains a small electromagnet with a hinged iron armature below it. When load current exceeds the preset threshold, magnetic attraction lifts the armature, shorting the two terminals of the No-Volt Coil. Deprived of current, the NVC loses magnetism, and the handle snaps to OFF.

- Major Limitation of 3-Point Starter:
  * The No-Volt Coil is connected directly in series with the shunt field winding (I_NVC = I_sh).
  * If an operator uses a field rheostat to weaken the field for high-speed operation (Field Speed Control), field current I_sh drops significantly.
  * When I_sh drops too low, the NVC holding force becomes weaker than the spring tension, causing the starter handle to trip prematurely back to OFF even though the motor is not overloaded!

4. The 4-Point Starter (The Modern Solution for Variable Speed Drives):
- Terminals: L (Line), A (Armature), F (Field), and N (Neutral / Line Return).
- Elimination of the 3-Point Defect:
  * The No-Volt holding coil is removed from the field circuit entirely.
  * Instead, the No-Volt Coil is connected in a dedicated independent branch directly across the full supply voltage (V) in series with a fixed current-limiting protection resistor (R_NVC).
  * Terminal F connects purely to the shunt field through the starting studs.
- Key Advantage:
  * Field current I_sh can now be varied widely (weakened with a field rheostat for high speeds) without affecting the holding current of the No-Volt Coil.
  * The NVC maintains constant, reliable magnetic holding force regardless of field rheostat adjustments.

5. Summary Comparison of DC Starters:
- 2-Point: 2 Terminals (L, A), used for Series Motors, NVC in series with main armature current.
- 3-Point: 3 Terminals (L, A, F), used for constant-speed Shunt/Compound motors, NVC in series with Shunt Field.
- 4-Point: 4 Terminals (L, A, F, N), used for variable-speed Shunt/Compound motors, NVC in independent branch across supply.`,
    hi: `1. डीसी मोटर स्टार्टर की भौतिक आवश्यकता:
- डीसी मोटर में आर्मेचर करंट समीकरण: I_a = (V - E_b) / R_a
- मोटर शुरू होते समय (N = 0 RPM):
  * बैक EMF शून्य होता है (E_b = 0)।
  * शुरुआती करंट I_a = V / R_a होता है।
  * क्योंकि R_a बहुत कम (0.2 से 0.5 Ω) होता है, बिना स्टार्टर के करंट फुल-लोड करंट का 15 से 25 गुना हो जाता है!
- खतरे: वाइंडिंग का जलना, कम्यूटेटर पर भारी स्पार्किंग, शाफ्ट कपलिंग का टूटना तथा मेन सप्लाई वोल्टेज का बैठ जाना।
- समाधान: आर्मेचर परिपथ में एक बाहरी स्टार्टर प्रतिरोध (R_starter) जोड़ना जो मोटर की गति बढ़ने के साथ-साथ क्रमबद्ध रूप से हटता जाए।

2. 2-पॉइंट स्टार्टर:
- टर्मिनल: L (लाइन) एवं A (आर्मेचर)।
- उपयोग: विशेष रूप से डीसी सीरीज मोटर (इलेक्ट्रिक ट्रेन, क्रेन) के लिए।
- संरचना: नो-वोल्ट कॉइल (NVC) मुख्य सीरीज परिपथ में जुड़ी होती है।

3. 3-पॉइंट स्टार्टर:
- टर्मिनल: L (लाइन), A (आर्मेचर), F (फील्ड)।
- कार्यप्रणाली:
  * हैंडल को Stud 1 पर ले जाने से पूरा स्टार्टिंग प्रतिरोध आर्मेचर के सीरीज में आ जाता है और फील्ड को पूरी सप्लाई मिलती है।
  * गति बढ़ने पर हैंडल को आगे बढ़ाया जाता है और RUN स्थिति में सारा प्रतिरोध हट जाता है।
  * RUN स्थिति में नो-वोल्ट कॉइल (NVC) हैंडल को चुंबकीय बल से पकड़ कर रखती है।
- सुरक्षा प्रणालियाँ:
  * 1. No-Volt Release (NVR): बिजली जाने पर हैंडल को स्प्रिंग द्वारा OFF स्थिति में वापस खींच लेता है।
  * 2. Overload Release (OLR): अत्यधिक लोड करंट होने पर NVC को शॉर्ट-सर्किट कर हैंडल को ट्रिप कर देता है।
- 3-पॉइंट स्टार्टर की मुख्य कमी:
  * NVC फील्ड वाइंडिंग के सीरीज में जुड़ी होती है। जब फील्ड रियोस्टैट से गति बढ़ाने के लिए फील्ड करंट घटाया जाता है, तो NVC कमजोर होकर हैंडल को छोड़ देती है।

4. 4-पॉइंट स्टार्टर:
- टर्मिनल: L (लाइन), A (आर्मेचर), F (फील्ड), N (न्यूट्रल/रिटर्न)।
- सुधार: No-Volt Coil को फील्ड परिपथ से अलग करके एक स्वतंत्र सुरक्षा प्रतिरोध के साथ सीधे सप्लाई के आर-पार जोड़ा जाता है।
- लाभ: फील्ड करंट को कितना भी कम करने पर NVC की पकड़ कमजोर नहीं होती; अतः यह गति नियंत्रण वाली मोटरों के लिए सर्वोत्तम है।`,
    bn: `১. ডিসি মোটর স্টার্টারের প্রয়োজনীয়তা:
- আর্মেচার কারেন্ট সমীকরণ: I_a = (V - E_b) / R_a
- স্টার্টিং মুহূর্তে (N = 0 RPM):
  * ব্যাক EMF শূন্য থাকে (E_b = 0)।
  * স্টার্টিং কারেন্ট I_a = V / R_a অত্যন্ত উচ্চ হয়।
  * আর্মেচার রোধ (০.২ - ০.৫ ওহম) অত্যন্ত কম হওয়ায় কারেন্ট ফুল-লোড কারেন্টের ১৫ থেকে ২৫ গুণ পর্যন্ত বৃদ্ধি পায়।
- বিপদ: কয়েল ইনসুলেশন পুড়ে যাওয়া, কমিউটেটরে তীব্র আর্কিং, মেকানিক্যাল শকে শ্যাফট ক্ষতিগ্রস্ত হওয়া ও ভোল্টেজ ড্রপ।
- প্রতিকার: শুরুর সময় আর্মেচারের সাথে বহিঃস্থ পরিবর্তনশীল রোধ (R_starter) যুক্ত করা এবং গতি বৃদ্ধির সাথে সাথে তা ক্রমান্বয়ে কমিয়ে শূন্য করা।

২. ২-পয়েন্ট স্টার্টার:
- টার্মিনাল: L (লাইন) ও A (আর্মেচার)।
- ব্যবহার: মূলত ডিসি সিরিজ মোটরের জন্য (ট্র্যাকশন, ক্রেন)।
- নো-ভোল্ট কয়েল (NVC) মূল সিরিজ সার্কিটে সংযুক্ত থাকে।

৩. ৩-পয়েন্ট স্টার্টার:
- টার্মিনাল: L (লাইন), A (আর্মেচার), F (ফিল্ড)।
- স্টার্টিং ধাপ: স্টাড ১-এ সম্পূর্ণ রোধ সংযুক্ত থাকে, মোটর গতিশীল হলে হ্যান্ডেল ঘুরিয়ে স্টাডগুলো অতিক্রম করে RUN পজিশনে রোধ সম্পূর্ণ মুক্ত হয়।
- প্রটেকশন ব্যবস্থা:
  * ১. নো-ভোল্ট রিলিজ (NVR): বিদ্যুৎ চলে গেলে স্প্রিং দ্বারা হ্যান্ডেলকে OFF পজিশনে ফিরিয়ে আনে।
  * ২. ওভারলোড রিলিজ (OLR): অতিরিক্ত লোড কারেন্টে NVC-কে শর্ট করে হ্যান্ডেল ট্রিপ করে।
- সীমাবদ্ধতা: NVC ফিল্ড ওয়াইন্ডিংয়ের সাথে সিরিজে থাকায়, ফিল্ড দুর্বল করে গতি বাড়াতে গেলে NVC দুর্বল হয়ে হ্যান্ডেল ট্রিপ করে দেয়।

৪. ৪-পয়েন্ট স্টার্টার:
- টার্মিনাল: L, A, F, N (নিউট্রাল)।
- সমাধান: নো-ভোল্ট কয়েলকে ফিল্ড সার্কিট থেকে আলাদা করে একটি স্থায়ী রোধের মাধ্যমে সরাসরি সাপ্লাইয়ের আড়াআড়িতে যুক্ত করা হয়।
- সুবিধা: ফিল্ড কারেন্ট কমালেও NVC এর চুম্বকত্ব হ্রাস পায় না, ফলে গতি নিয়ন্ত্রিত মোটরে নির্ভুল কাজ করে।`
  },
  formulas: [
    {
      id: 'f-starting-current-dol',
      symbol: 'I_a(DOL)',
      expression: 'I_a(start) = V / R_a',
      formula: 'I_{a(\\text{start, DOL})} = \\frac{V}{R_a}',
      title: {
        en: 'Direct-On-Line Starting Current (No Starter)',
        hi: 'डायरेक्ट-ऑन-लाइन शुरुआती धारा (बिना स्टार्टर)',
        bn: 'ডিরেক্ট-অন-লাইন স্টার্টিং কারেন্ট (স্টার্টার ছাড়া)'
      },
      description: {
        en: 'Armature current at standstill without external resistance; limited only by small armature winding resistance.',
        hi: 'बिना बाहरी प्रतिरोध के शुरुआती धारा; केवल सूक्ष्म आर्मेचर प्रतिरोध द्वारा सीमित होती है।',
        bn: 'বহিঃস্থ রোধহীন অবস্থায় স্টার্টিং কারেন্ট; যা অত্যন্ত ক্ষুদ্র আর্মেচার রোধ দ্বারা সীমিত থাকে।'
      },
      variables: [
        { symbol: 'V', name: { en: 'Supply voltage (V)', hi: 'सप्लाई वोल्टेज (V)', bn: 'সরবরাহ ভোল্টেজ (V)' } },
        { symbol: 'R_a', name: { en: 'Armature resistance (Ω)', hi: 'आर्मेचर प्रतिरोध (Ω)', bn: 'আর্মেচার রোধ (Ω)' } }
      ]
    },
    {
      id: 'f-starter-res-calc',
      symbol: 'R_starter',
      expression: 'R_starter = (V / I_a(start, safe)) - R_a',
      formula: 'R_{\\text{starter}} = \\frac{V}{I_{a(\\text{start, safe})}} - R_a',
      title: {
        en: 'Required Starter External Resistance',
        hi: 'आवश्यक बाहरी स्टार्टर प्रतिरोध',
        bn: 'প্রয়োজনীয় বহিঃস্থ স্টার্টার রোধ'
      },
      description: {
        en: 'Total external series resistance required to limit standstill armature current to a chosen safe starting limit.',
        hi: 'शुरुआती आर्मेचर धारा को सुरक्षित सीमा तक सीमित करने के लिए आवश्यक कुल बाहरी श्रेणी प्रतिरोध।',
        bn: 'স্টার্টিং কারেন্টকে নিরাপদ সীমায় রাখতে প্রয়োজনীয় মোট বহিঃস্থ সিরিজ রোধ।'
      },
      variables: [
        { symbol: 'I_a(start, safe)', name: { en: 'Safe starting current limit (A)', hi: 'सुरक्षित शुरुआती धारा सीमा (A)', bn: 'নিরাপদ স্টার্টিং কারেন্ট সীমা (A)' } }
      ]
    },
    {
      id: 'f-current-intermediate-stud',
      symbol: 'I_a(stud)',
      expression: 'I_a = (V - E_b) / (R_a + R_stud)',
      formula: 'I_{a(\\text{stud})} = \\frac{V - E_b}{R_a + R_{\\text{stud}}}',
      title: {
        en: 'Armature Current at Intermediate Starter Stud',
        hi: 'मध्यवर्ती स्टार्टर स्टड पर आर्मेचर धारा',
        bn: 'মধ্যবর্তী স্টার্টার স্টাডে আর্মেচার কারেন্ট'
      },
      description: {
        en: 'Dynamic armature current determined by the prevailing Back EMF and the remaining active starter resistance.',
        hi: 'वर्तमान बैक EMF और शेष सक्रिय स्टार्टर प्रतिरोध द्वारा निर्धारित गतिशील आर्मेचर धारा।',
        bn: 'তাত্ক্ষণিক ব্যাক EMF এবং অবশিষ্ট স্টার্টার রোধ দ্বারা নির্ধারিত আর্মেচার কারেন্ট।'
      },
      variables: [
        { symbol: 'E_b', name: { en: 'Back EMF at instantaneous speed (V)', hi: 'तात्कालिक गति पर बैक EMF (V)', bn: 'তাত্ক্ষণিক গতিতে ব্যাক EMF (V)' } },
        { symbol: 'R_stud', name: { en: 'Remaining starter resistance (Ω)', hi: 'शेष स्टार्टर प्रतिरोध (Ω)', bn: 'অবশিষ্ট স্টার্টার রোধ (Ω)' } }
      ]
    },
    {
      id: 'f-4point-nvc-current',
      symbol: 'I_NVC',
      expression: 'I_NVC = V / (R_NVC + R_coil)',
      formula: 'I_{\\text{NVC}} = \\frac{V}{R_{\\text{NVC}} + R_{\\text{coil}}} = \\text{Constant}',
      title: {
        en: '4-Point Starter No-Volt Coil Current',
        hi: '4-पॉइंट स्टार्टर नो-वोल्ट कॉइल धारा',
        bn: '৪-পয়েন্ট স্টার্টার নো-ভোল্ট কয়েল কারেন্ট'
      },
      description: {
        en: 'Constant holding current in a 4-point starter, fully decoupled from shunt field rheostat settings.',
        hi: '4-पॉइंट स्टार्टर में स्थिर होल्डिंग धारा, जो फील्ड रियोस्टैट परिवर्तनों से पूरी तरह स्वतंत्र होती है।',
        bn: '৪-পয়েন্ট স্টার্টারে ধ্রুবক হোল্ডিং কারেন্ট, যা ফিল্ড রিহোস্ট্যাট নিয়ন্ত্রণ থেকে সম্পূর্ণ স্বাধীন।'
      }
    }
  ],
  sections: [
    {
      id: 'sec-starting-fundamentals',
      title: {
        en: 'DC Motor Starters: Physics, Circuits & Protective Mechanics',
        hi: 'डीसी मोटर स्टार्टर: भौतिकी, परिपथ एवं सुरक्षा तंत्र',
        bn: 'ডিসি মোটর স্টার্টার: পদার্থবিজ্ঞান, সার্কিট ও সুরক্ষা মেকানিজম'
      },
      content: {
        en: 'At standstill (N = 0), a DC motor has zero Back EMF (Eb = 0). Since armature resistance Ra is typically 0.2–0.5 Ω, direct line connection produces massive current surges (15–25× full load). Starters introduce graded resistance that is systematically removed as Eb develops. A 2-point starter protects series motors; a 3-point starter provides No-Volt and Overload protection for shunt/compound motors; and a 4-point starter decouples the No-Volt holding coil from the field circuit to support high-speed field-weakening rheostatic control.',
        hi: 'शुरुआत में (N = 0), डीसी मोटर में बैक EMF शून्य होता है। क्योंकि आर्मेचर प्रतिरोध Ra बहुत कम (0.2–0.5 Ω) होता है, डायरेक्ट सप्लाई जोड़ने पर 15–25 गुना अत्यधिक करंट प्रवाहित होता है। स्टार्टर क्रमिक प्रतिरोध जोड़ता है जिसे गति और Eb बढ़ने पर हटा दिया जाता है। 2-पॉइंट स्टार्टर सीरीज मोटर के लिए, 3-पॉइंट स्टार्टर सामान्य शंट/कंपाउंड मोटर के लिए तथा 4-पॉइंट स्टार्टर गति-नियंत्रित शंट मोटर के लिए उपयोग किया जाता है।',
        bn: 'স্থির অবস্থায় (N = 0) ডিসি মোটরে কোনো ব্যাক EMF (Eb = 0) থাকে না। আর্মেচার রোধ Ra অত্যন্ত কম (০.২–০.৫ ওহম) হওয়ায় সরাসরি সংযোগে ১৫–২৫ গুণ কারেন্ট প্রবাহিত হয়। স্টার্টার বহিঃস্থ রোধ যুক্ত করে কারেন্ট সীমিত রাখে। ২-পয়েন্ট স্টার্টার সিরিজ মোটরে, ৩-পয়েন্ট স্টार्टার সাধারণ শান্ট মোটরে এবং ৪-পয়েন্ট স্টার্টার গতি নিয়ন্ত্রিত শান্ট মোটরে ব্যবহৃত হয়।'
      },
      schematicId: 'dc-motor-starter'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-starter-1',
      problem: {
        en: 'A 240 V, 10 kW DC shunt motor has a full-load current of 50 A and an armature resistance of 0.3 Ω. Calculate: (a) Starting current if connected directly to the 240 V supply without a starter, (b) The ratio of starting current to full-load current, and (c) The external starter resistance required to limit starting current to 1.5 times the full-load current.',
        hi: 'एक 240 V, 10 kW डीसी शंट मोटर का फुल-लोड करंट 50 A तथा आर्मेचर प्रतिरोध 0.3 Ω है। गणना कीजिए: (a) बिना स्टार्टर के 240 V सप्लाई से सीधे जोड़ने पर शुरुआती करंट, (b) शुरुआती करंट और फुल-लोड करंट का अनुपात, तथा (c) शुरुआती करंट को फुल-लोड के 1.5 गुना तक सीमित करने हेतु आवश्यक बाहरी स्टार्टर प्रतिरोध।',
        bn: 'একটি ২৪০ V, ১০ kW ডিসি শান্ট মোটরের ফুল-লোড কারেন্ট ৫০ A এবং আর্মেচার রোধ ০.৩ Ω। নির্ণয় করুন: (a) স্টার্টার ছাড়া সরাসরি ২৪০ V লাইনে যুক্ত করলে স্টার্টিং কারেন্ট, (b) স্টার্টিং ও ফুল-লোড কারেন্টের অনুপাত, এবং (c) স্টার্টিং কারেন্টকে ফুল-লোডের ১.৫ গুণে সীমাবদ্ধ রাখতে প্রয়োজনীয় বহিঃস্থ স্টার্টার রোধ।'
      },
      solution: {
        en: `Step 1: Calculate Direct-On-Line (DOL) Starting Current:
At standstill, N = 0 RPM => E_b = 0 V
I_a(start, DOL) = V / R_a = 240 V / 0.3 Ω = 800.0 A

Step 2: Ratio of Starting Current to Full-Load Current:
Ratio = I_a(start, DOL) / I_FL = 800 A / 50 A = 16.0 times (1600%)

Step 3: Calculate Safe Permissible Starting Current:
I_a(start, safe) = 1.5 × I_FL = 1.5 × 50 A = 75.0 A

Step 4: Calculate Total Required Armature Circuit Resistance:
R_total = V / I_a(start, safe) = 240 V / 75.0 A = 3.20 Ω

Step 5: Calculate Required External Starter Resistance:
R_starter = R_total - R_a = 3.20 Ω - 0.30 Ω = 2.90 Ω`,
        hi: `चरण 1: बिना स्टार्टर शुरुआती धारा: I_a = 240 / 0.3 = 800.0 A
चरण 2: अनुपात: 800 A / 50 A = 16.0 गुना
चरण 3: सुरक्षित धारा: 1.5 × 50 = 75.0 A
चरण 4: कुल आवश्यक प्रतिरोध: R_total = 240 / 75 = 3.20 Ω
चरण 5: आवश्यक बाहरी प्रतिरोध: R_starter = 3.20 - 0.30 = 2.90 Ω`,
        bn: `ধাপ ১: স্টার্টার ছাড়া স্টার্টিং কারেন্ট: I_a = ২৪০ / ০.৩ = ৮০০.০ A
ধাপ ২: অনুপাত: ৮০০ A / ৫০ A = ১৬.০ গুণ
ধাপ ৩: নিরাপদ কারেন্ট: ১.৫ × ৫০ = ৭৫.০ A
ধাপ ৪: মোট প্রয়োজনীয় রোধ: R_total = ২৪০ / ৭৫ = ৩.২০ Ω
ধাপ ৫: প্রয়োজনীয় স্টার্টার রোধ: R_starter = ৩.২০ - ০.৩০ = ২.৯০ Ω`
      },
      finalAnswer: {
        en: 'DOL Starting Current = 800 A (16× I_FL); Required Starter Resistance = 2.90 Ω',
        hi: 'बिना स्टार्टर करंट = 800 A (16× I_FL); आवश्यक स्टार्टर प्रतिरोध = 2.90 Ω',
        bn: 'স্টার্টার ছাড়া কারেন্ট = ৮০০ A (১৬× I_FL); প্রয়োজনীয় স্টার্টার রোধ = ২.৯০ Ω'
      }
    },
    {
      id: 'ex-starter-2',
      problem: {
        en: 'A 220 V DC shunt motor with an armature resistance of 0.4 Ω is started using a 4-stud starter with total resistance of 3.6 Ω. (a) Find the initial current on Stud 1. (b) When the motor accelerates and generates a Back EMF of 110 V on Stud 1, what is the current? (c) If the handle is then moved to Stud 2 (cutting starter resistance down to 1.8 Ω), calculate the new instantaneous current spike.',
        hi: 'एक 220 V डीसी शंट मोटर (Ra = 0.4 Ω) को 3.6 Ω कुल प्रतिरोध वाले 4-स्टड स्टार्टर से चालू किया जाता है। (a) स्टड 1 पर शुरुआती करंट ज्ञात कीजिए। (b) जब मोटर त्वरित होकर स्टड 1 पर 110 V बैक EMF उत्पन्न करती है, तो करंट क्या होगा? (c) यदि हैंडल को स्टड 2 पर ले जाया जाए (स्टार्टर प्रतिरोध घटकर 1.8 Ω रह जाए), तो करंट का नया मान क्या होगा?',
        bn: 'একটি ২২০ V ডিসি শান্ট মোটর (Ra = ০.৪ Ω) ৩.৬ Ω মোট রোধযুক্ত স্টার্টার দিয়ে চালু করা হয়। (a) স্টাড ১-এ প্রাথমিক কারেন্ট নির্ণয় করুন। (b) স্টাড ১-এ মোটর ১১০ V ব্যাক EMF তৈরি করলে কারেন্ট কত হবে? (c) হ্যান্ডেলটি স্টাড ২-এ নিলে (স্টার্টার রোধ ১.৮ Ω এ নামলে) তাৎক্ষণিক নতুন কারেন্ট কত হবে?'
      },
      solution: {
        en: `Step 1: Initial Current on Stud 1 at Standstill (E_b = 0 V):
Total circuit resistance: R_total1 = R_a + R_st1 = 0.4 + 3.6 = 4.0 Ω
I_a1(initial) = (V - E_b) / R_total1 = (220 - 0) / 4.0 = 55.0 A

Step 2: Current on Stud 1 after Acceleration (E_b = 110 V):
I_a1(at 110V) = (V - E_b) / R_total1 = (220 - 110) / 4.0 = 110 / 4.0 = 27.5 A

Step 3: New Current immediately upon switching to Stud 2 (E_b remains 110 V momentarily):
New total resistance: R_total2 = R_a + R_st2 = 0.4 + 1.8 = 2.2 Ω
I_a2(spike) = (V - E_b) / R_total2 = (220 - 110) / 2.2 = 110 / 2.2 = 50.0 A`,
        hi: `चरण 1: स्टड 1 पर शुरुआती धारा: I_a1 = 220 / (0.4 + 3.6) = 55.0 A
चरण 2: 110 V बैक EMF पर धारा: I_a1 = (220 - 110) / 4.0 = 27.5 A
चरण 3: स्टड 2 पर स्विच करने पर नई धारा: I_a2 = (220 - 110) / (0.4 + 1.8) = 50.0 A`,
        bn: `ধাপ ১: স্টাড ১-এ প্রাথমিক কারেন্ট: I_a1 = ২২০ / (০.৪ + ৩.৬) = ৫৫.০ A
ধাপ ২: ১১০ V ব্যাক EMF-এ কারেন্ট: I_a1 = (২২০ - ১১০) / ৪.০ = ২৭.৫ A
ধাপ ৩: স্টাড ২-এ সুইচের পর নতুন কারেন্ট: I_a2 = (২২০ - ১১০) / (০.৪ + ১.৮) = ৫০.০ A`
      },
      finalAnswer: {
        en: 'Initial Current = 55.0 A, Current at Eb=110V = 27.5 A, Spike on Stud 2 = 50.0 A',
        hi: 'शुरुआती धारा = 55.0 A, 110V पर धारा = 27.5 A, स्टड 2 पर स्पाइक = 50.0 A',
        bn: 'প্রাথমিক কারেন্ট = ৫৫.০ A, ১১০V-এ কারেন্ট = ২৭.৫ A, স্টাড ২-এ স্পাইক = ৫০.০ A'
      }
    },
    {
      id: 'ex-starter-3',
      problem: {
        en: 'A 200 V DC shunt motor has Ra = 0.5 Ω and rated full-load current of 20 A. During starting, the current is designed to vary between a maximum limit of 30 A (1.5 × I_FL) and a minimum limit of 20 A (1.0 × I_FL). Determine: (a) Total starter resistance, (b) Back EMF developed when current drops to 20 A on the first stud.',
        hi: 'एक 200 V डीसी शंट मोटर में Ra = 0.5 Ω तथा फुल-लोड करंट 20 A है। स्टार्टिंग के दौरान करंट अधिकतम 30 A (1.5 × I_FL) और न्यूनतम 20 A (1.0 × I_FL) के बीच रखने के लिए डिज़ाइन किया गया है। ज्ञात कीजिए: (a) कुल स्टार्टर प्रतिरोध, (b) पहले स्टड पर करंट 20 A तक गिरने पर उत्पन्न बैक EMF।',
        bn: 'একটি ২০০ V ডিসি শান্ট মোটরে Ra = ০.৫ Ω এবং পূর্ণ লোড কারেন্ট ২০ A। স্টার্টিংয়ে কারেন্ট সর্বোচ্চ ৩০ A এবং সর্বনিম্ন ২০ A এর মধ্যে ওঠানামা করে। নির্ণয় করুন: (a) মোট স্টার্টার রোধ, (b) প্রথম স্টাডে কারেন্ট ২০ A এ নামলে উৎপন্ন ব্যাক EMF।'
      },
      solution: {
        en: `Step 1: Calculate Total Circuit Resistance on Stud 1:
Maximum starting current I_max = 30 A at E_b = 0 V:
R_total1 = V / I_max = 200 V / 30 A = 6.667 Ω

Step 2: Calculate Starter Resistance (R_starter):
R_starter = R_total1 - R_a = 6.667 Ω - 0.50 Ω = 6.167 Ω

Step 3: Calculate Back EMF (E_b1) when current drops to I_min = 20 A on Stud 1:
I_min = (V - E_b1) / R_total1
20 A = (200 - E_b1) / 6.667
20 × 6.667 = 200 - E_b1
133.33 = 200 - E_b1
E_b1 = 200 - 133.33 = 66.67 V`,
        hi: `चरण 1: स्टड 1 पर कुल प्रतिरोध: R_total1 = 200 / 30 = 6.667 Ω
चरण 2: स्टार्टर प्रतिरोध: R_starter = 6.667 - 0.5 = 6.167 Ω
चरण 3: बैक EMF: E_b1 = 200 - (20 × 6.667) = 66.67 V`,
        bn: `ধাপ ১: স্টাড ১-এ মোট রোধ: R_total1 = ২০০ / ৩০ = ৬.৬৬৭ Ω
ধাপ ২: স্টার্টার রোধ: R_starter = ৬.৬৬৭ - ০.৫ = ৬.১৬৭ Ω
ধাপ ৩: ব্যাক EMF: E_b1 = ২০০ - (২০ × ৬.৬৬৭) = ৬৬.৬৭ V`
      },
      finalAnswer: {
        en: 'Total Starter Resistance = 6.167 Ω, Back EMF at 20 A = 66.67 V',
        hi: 'कुल स्टार्टर प्रतिरोध = 6.167 Ω, 20 A पर बैक EMF = 66.67 V',
        bn: 'মোট স্টার্টার রোধ = ৬.১৬৭ Ω, ২০ A এ ব্যাক EMF = ৬৬.৬৭ V'
      }
    },
    {
      id: 'ex-starter-4',
      problem: {
        en: 'Explain in detail why a 3-point starter trips prematurely when an engineer inserts resistance into the shunt field circuit to increase motor speed above rated RPM, and describe how a 4-point starter completely cures this operational defect.',
        hi: 'विस्तार से समझाइए कि जब कोई इंजीनियर मोटर की गति बढ़ाने के लिए शंट फील्ड में प्रतिरोध जोड़ता है, तो 3-पॉइंट स्टार्टर समय से पहले ट्रिप क्यों हो जाता है, और 4-पॉइंट स्टार्टर इस दोष को कैसे दूर करता है।',
        bn: 'ব্যাখ্যা করুন কেন মোটরের গতি বাড়াতে শান্ট ফিল্ডে রোধ যোগ করলে ৩-পয়েন্ট স্টার্টার অকালে ট্রিপ করে, এবং ৪-পয়েন্ট স্টার্টার কীভাবে এই ত্রুটি পুরোপুরি সমাধান করে।'
      },
      solution: {
        en: `Step 1: Circuit Configuration in a 3-Point Starter:
In a 3-point starter, the No-Volt Release (NVR) electromagnet holding coil is wired directly in series with the shunt field winding:
I_NVR = I_sh = V / (R_sh + R_rheostat)

Step 2: Consequence of Field Weakening for Speed Control:
To run the motor at speeds above base speed (N ∝ 1/Φ), external resistance R_rheostat is added:
- Field current I_sh drops significantly.
- Consequently, current through the NVR coil (I_NVR) plunges.
- The electromagnetic holding force F_mag ∝ (I_NVR)² collapses below the mechanical restoring tension of the spiral return spring.
- The spring immediately snaps the handle back to OFF, cutting power to the motor erroneously.

Step 3: The 4-Point Starter Solution:
In a 4-point starter, the NVR holding coil is removed from the field circuit entirely and placed in an independent fourth circuit branch (connected between Line L and Neutral N) with its own fixed current-limiting resistor R_NVC:
I_NVR = V / (R_NVC + R_coil) = Constant
- Result: The NVR maintains constant, full magnetic holding force independent of any field rheostat adjustments, allowing smooth high-speed field control without false tripping.`,
        hi: `चरण 1: 3-पॉइंट स्टार्टर में NVR कॉइल सीधे फील्ड वाइंडिंग के सीरीज में जुड़ी होती है (I_NVR = I_sh)।
चरण 2: गति बढ़ाने के लिए फील्ड रियोस्टैट बढ़ाने पर I_sh घट जाता है, जिससे NVR का चुंबकीय बल कमजोर हो जाता है और स्प्रिंग हैंडल को OFF पर खींच लेती है।
चरण 3: 4-पॉइंट स्टार्टर में NVR को फील्ड से अलग करके स्वतंत्र चौथी लाइन (N) के साथ सीधे सप्लाई पर जोड़ा जाता है, जिससे उसका करंट स्थिर रहता है और वह ट्रिप नहीं होता।`,
        bn: `ধাপ ১: ৩-পয়েন্ট স্টার্টারে NVR কয়েল শান্ট ফিল্ড ওয়াইন্ডিংয়ের সাথে সিরিজে থাকে (I_NVR = I_sh)।
ধাপ ২: গতি বৃদ্ধির জন্য ফিল্ড রোধ বাড়ালে I_sh কমে যায়, ফলে NVR এর চৌম্বক বল দুর্বল হয়ে স্প্রিংয়ের টানে হ্যান্ডেল OFF পজিশনে চলে যায়।
ধাপ ৩: ৪-পয়েন্ট স্টার্টারে NVR কয়েলকে ফিল্ড সার্কিট থেকে পৃথক করে সরাসরি সাপ্লাইয়ের (L ও N) আড়াআড়িতে যুক্ত করা হয়, ফলে ফিল্ড নিয়ন্ত্রণের সময়ও হোল্ডিং বল ধ্রুবক থাকে।`
      },
      finalAnswer: {
        en: 'In 3-point starters, field weakening drops NVR current, causing spring-back trips. 4-point starters wire NVR to an independent DC line, making holding force immune to field rheostat settings.',
        hi: '3-पॉइंट में फील्ड करंट घटने से NVR ट्रिप होता है। 4-पॉइंट में NVR स्वतंत्र लाइन से जुड़ा होने के कारण सुरक्षित होल्डिंग बनाए रखता है।',
        bn: '৩-পয়েন্টে ফিল্ড দুর্বল করলে NVR কারেন্ট কমে ট্রিপ করে। ৪-পয়েন্টে NVR পৃথক লাইনে থাকায় নির্ভুল হোল্ডিং বজায় থাকে।'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Industrial DC Shunt Lathe & Spindle Drives: 3-point and 4-point manual starters protect motor armatures from starting current burnout in heavy workshop tools.',
      'Electric Overhead Cranes & Hoists: Heavy-duty 2-point starters limit inrush currents for DC series motors undergoing frequent starts and reversals.',
      'Variable-Speed DC Rolling Mills: 4-point starters permit broad field-weakening speed control without nuisance tripping of the No-Volt holding coil.',
      'Subway Traction Systems: Automatic stepped contactor starters smoothly cut out starting resistors under accelerating train inertia.',
      'Emergency Marine DC Winches: Mechanical No-Volt Release ensures motors never restart unexpectedly when shipboard generator power restores.'
    ],
    hi: [
      'औद्योगिक लेथ एवं स्पिंडल मशीन: 3-पॉइंट एवं 4-पॉइंट स्टार्टर आर्मेचर को स्टार्टिंग में जलने से बचाते हैं।',
      'ओवरहेड क्रेन एवं होइस्ट: 2-पॉइंट स्टार्टर डीसी सीरीज मोटर के भारी शुरुआती करंट को नियंत्रित करते हैं।',
      'रोलिंग मिल एवं मेटल कटिंग: 4-पॉइंट स्टार्टर फील्ड रियोस्टैट द्वारा विस्तृत गति नियंत्रण की सुविधा देते हैं।',
      'मेट्रो एवं रेलवे ट्रैक्शन: स्वचालित कॉन्टैक्टर स्टार्टर ट्रेन के चलने पर धीरे-धीरे प्रतिरोध हटाते हैं।',
      'जहाजी विंच एवं क्रेन: नो-वोल्ट रिलीज बिजली आने पर मोटर को स्वतः चालू होने से रोककर सुरक्षा देती है।'
    ],
    bn: [
      'শিল্প লেদ ও স্পিন্ডল মেশিন: ৩-পয়েন্ট ও ৪-পয়েন্ট স্টার্টার উচ্চ স্টার্টিং কারেন্ট থেকে আর্মেচারকে রক্ষা করে।',
      'ওভারহেড ক্রেন ও হোস্ট: ২-পয়েন্ট স্টার্টার ঘন ঘন স্টার্ট হওয়া ডিসি সিরিজ মোটরের ইনরাশ কারেন্ট নিয়ন্ত্রণ করে।',
      'রোলিং মিল ও ড্রাইভ: ৪-পয়েন্ট স্টার্টার ফিল্ড পরিবর্তনের মাধ্যমে বিস্তৃত গতি নিয়ন্ত্রণ নিশ্চিত করে।',
      'মেট্রো ট্রেন ও ট্র্যাকশন: অটোমেটিক কন্টাক্টর স্টার্টার ট্রেনের গতি বৃদ্ধির সাথে সাথে রোধ অপসারণ করে।',
      'মেরিন উইঞ্চ ও এলিভেটর: নো-ভোল্ট রিলিজ বিদ্যুৎ পুনরায় চালু হলে মোটর হঠাৎ চালুর ঝুঁকি রোধ করে।'
    ]
  },
  importantPoints: {
    en: [
      'At starting (standstill, N = 0), Back EMF Eb is ZERO, so armature starting current is limited purely by tiny winding resistance Ra.',
      'A DC motor starter inserts graded external series resistance into the armature circuit to restrict starting current to 1.25–1.5× rated full load.',
      '2-Point Starters are used for DC series motors; 3-Point Starters for standard constant-speed DC shunt/compound motors.',
      '3-Point Starters trip prematurely during field-weakening speed control because the No-Volt holding coil is wired in series with the field winding.',
      '4-Point Starters solve this limitation by connecting the No-Volt Coil across the full line voltage via a dedicated independent circuit branch.',
      'No-Volt Release (NVR) ensures the motor never restarts spontaneously when line power is restored after an outage.',
      'Overload Release (OLR) magnetically lifts an iron armature to short-circuit the NVC when excessive armature current flows.'
    ],
    hi: [
      'शुरुआत में (N = 0) बैक EMF शून्य होता है, इसलिए करंट केवल सूक्ष्म आर्मेचर प्रतिरोध Ra द्वारा सीमित रहता है।',
      'स्टार्टर शुरुआती करंट को फुल-लोड करंट के 1.25 से 1.5 गुना तक सीमित रखने के लिए बाहरी श्रेणी प्रतिरोध जोड़ता है।',
      '2-पॉइंट स्टार्टर सीरीज मोटर के लिए तथा 3-पॉइंट स्टार्टर स्थिर गति वाली शंट/कंपाउंड मोटर के लिए उपयोग होता है।',
      '3-पॉइंट स्टार्टर में फील्ड कमजोर करने पर NVR कॉइल समय से पहले ट्रिप हो जाती है।',
      '4-पॉइंट स्टार्टर NVR कॉइल को एक स्वतंत्र परिपथ में जोड़कर इस दोष को पूरी तरह समाप्त करता है।',
      'No-Volt Release बिजली जाने पर हैंडल को OFF स्थिति में लाता है ताकि बिजली आने पर मोटर सीधे न चले।',
      'Overload Release अत्यधिक करंट आने पर NVC को शॉर्ट कर मोटर को सुरक्षित बंद कर देता है।'
    ],
    bn: [
      'স্টার্টিংয়ে (N = 0) ব্যাক EMF শূন্য থাকে, ফলে আর্মেচার কারেন্ট শুধুমাত্র অত্যন্ত ক্ষুদ্র রোধ Ra দ্বারা নির্ধারিত হয়।',
      'স্টার্টার স্টার্টিং কারেন্টকে ফুল-লোডের ১.২৫–১.৫ গুণের মধ্যে রাখতে ধাপে ধাপে বহিঃস্থ সিরিজ রোধ যুক্ত করে।',
      '২-পয়েন্ট স্টার্টার সিরিজ মোটরে এবং ৩-পয়েন্ট স্টার্টার সাধারণ শান্ট মোটরে ব্যবহৃত হয়।',
      '৩-পয়েন্ট স্টার্টারে ফিল্ড দুর্বল করে গতি বাড়াতে গেলে NVC দুর্বল হয়ে অপ্রয়োজনীয় ট্রিপ ঘটায়।',
      '৪-পয়েন্ট স্টার্টার NVC-কে একটি স্বাধীন ব্রাঞ্চে যুক্ত করে এই ত্রুটি দূর করে।',
      'নো-ভোল্ট রিলিজ বিদ্যুৎ চলে গেলে হ্যান্ডেলকে OFF করে বিদ্যুৎ ফিরে এলে হঠাৎ চালুর ঝুঁকি রোধ করে।',
      'ওভারলোড রিলিজ অতিরিক্ত কারেন্টে NVC শর্ট করে হ্যান্ডেল ট্রিপ করিয়ে মোটর রক্ষা করে।'
    ]
  },
  commonMistakes: {
    en: [
      'Assuming a starter is needed to provide mechanical torque rather than limit electrical current surge: A DC motor produces immense torque at start; the starter is strictly required to prevent electrical burnout caused by zero Back EMF (Eb = 0).',
      'Holding the manual starter handle in intermediate positions for continuous speed control: Starter resistor elements are rated for short-time starting duty (~10–30 seconds) and will rapidly burn out if used continuously.',
      'Using a 3-point starter on a wide-range field-controlled DC shunt motor: A 4-point starter must be used because field weakening reduces shunt field current below the No-Volt coil holding threshold.',
      'Connecting a 2-point starter to a DC shunt motor: 2-point starters lack separate field terminals and are designed exclusively for series motors where field and armature are in series.'
    ],
    hi: [
      'यह समझना कि स्टार्टर मोटर को टॉर्क देने के लिए चाहिए न कि करंट सीमित करने के लिए: मोटर में शुरुआती टॉर्क स्वाभाविक रूप से अधिक होता है; स्टार्टर शून्य बैक EMF के कारण आर्मेचर को जलने से बचाने के लिए लगाया जाता है।',
      'गति नियंत्रित करने के लिए स्टार्टर हैंडल को बीच के स्टड पर रोके रखना: स्टार्टर प्रतिरोध केवल 10-30 सेकंड के अल्पकालिक कार्य के लिए डिज़ाइन होते हैं, लंबे समय तक रोकने पर वे जल जाएंगे।',
      'फील्ड स्पीड कंट्रोल वाली मोटर में 3-पॉइंट स्टार्टर का उपयोग करना: 4-पॉइंट स्टार्टर का उपयोग किया जाना चाहिए ताकि फील्ड कमजोर होने पर NVR कॉइल ट्रिप न हो।'
    ],
    bn: [
      'মনে করা যে স্টার্টার টর্ক বাড়াতে ব্যবহৃত হয়, কারেন্ট কমাতে নয়: ডিসি মোটরে শুরুর টর্ক এমনিতেই বেশি থাকে; স্টার্টারের একমাত্র উদ্দেশ্য ব্যাক EMF শূন্য থাকায় অতিরিক্ত কারেন্ট থেকে ওয়াইন্ডিং বাঁচানো।',
      'গতি নিয়ন্ত্রণের জন্য স্টার্টার হ্যান্ডেলকে মাঝের কোনো স্টাডে দীর্ঘক্ষণ ধরে রাখা: স্টার্টারের রোধগুলো স্বল্প সময়ের (১০-৩০ সেকেন্ড) জন্য তৈরি; একটানা রাখলে অতিরিক্ত গরমে পুড়ে যাবে।',
      'ফিল্ড স্পিড নিয়ন্ত্রিত মোটরে ৩-পয়েন্ট স্টার্টার ব্যবহার করা: ৪-পয়েন্ট স্টার্টার ব্যবহার করতে হবে যাতে ফিল্ড দুর্বল করলেও NVC বন্ধ না হয়ে যায়।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-starter-1',
      question: {
        en: 'At the exact instant of starting a DC motor, why is the armature current dangerously high in the absence of a starter?',
        hi: 'डीसी मोटर शुरू करने के ठीक उस क्षण, स्टार्टर के अभाव में आर्मेचर धारा खतरनाक रूप से उच्च क्यों होती है?',
        bn: 'ডিসি মোটর চালুর তাৎক্ষণিক মুহূর্তে স্টার্টার না থাকলে আর্মেচার কারেন্ট বিপজ্জনকভাবে বৃদ্ধি পায় কেন?'
      },
      options: [
        {
          id: 'opt-a',
          text: {
            en: 'Because Back EMF (Eb) is zero at standstill (N = 0) and armature resistance (Ra) is very small.',
            hi: 'क्योंकि मोटर स्थिर होने (N = 0) पर बैक EMF शून्य होता है और आर्मेचर प्रतिरोध बहुत कम होता है।',
            bn: 'কারণ স্থির অবস্থায় (N = 0) ব্যাক EMF শূন্য থাকে এবং আর্মেচার রোধ অত্যন্ত কম থাকে।'
          }
        },
        {
          id: 'opt-b',
          text: {
            en: 'Because supply voltage spikes to twice its rated value.',
            hi: 'क्योंकि सप्लाई वोल्टेज अपने रेटेड मान से दोगुना हो जाता है।',
            bn: 'কারণ সরবরাহ ভোল্টেজ দ্বিগুণ হয়ে যায়।'
          }
        },
        {
          id: 'opt-c',
          text: {
            en: 'Because magnetic pole flux is zero at startup.',
            hi: 'क्योंकि शुरुआती समय में चुंबकीय पोल फ्लक्स शून्य होता है।',
            bn: 'কারণ শুরুতে চৌম্বক পোল ফ্লাক্স শূন্য থাকে।'
          }
        },
        {
          id: 'opt-d',
          text: {
            en: 'Because carbon brushes develop infinite contact resistance.',
            hi: 'क्योंकि कार्बन ब्रश अनंत संपर्क प्रतिरोध उत्पन्न करते हैं।',
            bn: 'কারণ কার্বন ব্রাশ অসীম রোধ তৈরি করে।'
          }
        }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'Since Eb = (P·Φ·Z·N)/(60·A), at N = 0 speed, Eb = 0. Therefore Ia = V/Ra. Because Ra is typically 0.2–0.5 Ω, Ia surges to 15–25× full load current.',
        hi: 'चूंकि N = 0 पर Eb = 0 होता है, इसलिए Ia = V/Ra। Ra का मान बहुत कम होने से करंट 15-25 गुना बढ़ जाता है।',
        bn: 'যেহেতু N = 0 তে Eb = 0, তাই Ia = V/Ra। Ra অত্যন্ত কম হওয়ায় কারেন্ট স্বাভাবিকের চেয়ে ১৫-২৫ গুণ বাড়ে।'
      }
    },
    {
      id: 'mcq-starter-2',
      question: {
        en: 'What is the primary operational advantage of a 4-point starter over a conventional 3-point starter in DC shunt motors?',
        hi: 'डीसी शंट मोटर में पारंपरिक 3-पॉइंट स्टार्टर की तुलना में 4-पॉइंट स्टार्टर का प्राथमिक परिचालन लाभ क्या है?',
        bn: 'ডিসি শান্ট মোটরে প্রচলিত ৩-পয়েন্ট স্টার্টারের তুলনায় ৪-পয়েন্ট স্টার্টারের প্রধান পরিচালন সুবিধা কোনটি?'
      },
      options: [
        {
          id: 'opt-a',
          text: {
            en: 'It completely decouples the No-Volt holding coil from the field circuit, preventing false tripping during field-weakening speed control.',
            hi: 'यह नो-वोल्ट होल्डिंग कॉइल को फील्ड परिपथ से पूरी तरह अलग करता है, जिससे गति नियंत्रण के समय स्टार्टर ट्रिप नहीं होता।',
            bn: 'এটি নো-ভোল্ট কয়েলকে ফিল্ড সার্কিট থেকে সম্পূর্ণ পৃথক করে, ফলে ফিল্ড দুর্বল করে গতি নিয়ন্ত্রণের সময় অপ্রয়োজনীয় ট্রিপিং ঘটে না।'
          }
        },
        {
          id: 'opt-b',
          text: {
            en: 'It eliminates the need for an armature resistance entirely.',
            hi: 'यह आर्मेचर प्रतिरोध की आवश्यकता को पूरी तरह समाप्त कर देता है।',
            bn: 'এটি আর্মেচার রোধের প্রয়োজনীয়তা সম্পূর্ণ দূর করে।'
          }
        },
        {
          id: 'opt-c',
          text: {
            en: 'It reverses motor rotation automatically during startup.',
            hi: 'यह स्टार्ट के समय मोटर के घूर्णन की दिशा को स्वचालित रूप से उलट देता है।',
            bn: 'এটি চালুর সময় মোটরের ঘূর্ণন দিক স্বয়ংক্রিয়ভাবে উল্টে দেয়।'
          }
        },
        {
          id: 'opt-d',
          text: {
            en: 'It allows direct connection to AC single-phase supplies.',
            hi: 'यह सीधे AC सिंगल-फेज सप्लाई से जुड़ने की अनुमति देता है।',
            bn: 'এটি সরাসরি এসি সিঙ্গেল ফেজ লাইনে চালানোর সুবিধা দেয়।'
          }
        }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'In a 4-point starter, the NVC branch is wired independently across the supply with a protective resistor, ensuring constant magnetic holding force regardless of field rheostat adjustments.',
        hi: '4-पॉइंट स्टार्टर में NVC शाखा एक स्वतंत्र सुरक्षा प्रतिरोध के साथ सप्लाई पर जुड़ी होती है, जिससे फील्ड बदलने पर भी होल्डिंग बल स्थिर रहता है।',
        bn: '৪-পয়েন্ট স্টার্টারে NVC স্বাধীনভাবে সাপ্লাইয়ে যুক্ত থাকায় ফিল্ড রিহোস্ট্যাট নিয়ন্ত্রণের সময়ও স্থির হোল্ডিং বল বজায় থাকে।'
      }
    },
    {
      id: 'mcq-starter-3',
      question: {
        en: 'How does the Overload Release (OLR) mechanism in a DC motor starter protect the machine during heavy mechanical overloads?',
        hi: 'डीसी मोटर स्टार्टर में ओवरलोड रिलीज (OLR) तंत्र भारी यांत्रिक ओवरलोड के दौरान मशीन की सुरक्षा कैसे करता है?',
        bn: 'ডিসি মোটর স্টার্টারে ওভারলোড রিলিজ (OLR) কীভাবে অতিরিক্ত যান্ত্রিক লোডে মোটরকে সুরক্ষা দেয়?'
      },
      options: [
        {
          id: 'opt-a',
          text: {
            en: 'Excess line current magnetizes the OLR coil to lift an iron armature, short-circuiting the No-Volt coil and releasing the spring-loaded handle to OFF.',
            hi: 'अत्यधिक करंट OLR कॉइल को चुंबकीय बनाकर लोहे के आर्मेचर को उठाता है, जो No-Volt कॉइल को शॉर्ट कर देता है और स्प्रिंग हैंडल को OFF पर खींच लेता है।',
            bn: 'অতিরিক্ত কারেন্ট OLR কয়েলকে চুম্বকায়িত করে একটি আর্মেচারকে আকর্ষণ করে নো-ভোল্ট কয়েলকে শর্ট করে দেয়, ফলে স্প্রিং হ্যান্ডেলটিকে OFF পজিশনে টেনে আনে।'
          }
        },
        {
          id: 'opt-b',
          text: {
            en: 'It physically inserts additional resistance into the field winding.',
            hi: 'यह फील्ड वाइंडिंग में अतिरिक्त प्रतिरोध जोड़ देता है।',
            bn: 'এটি ফিল্ড ওয়াইন্ডিংয়ে অতিরিক্ত রোধ যোগ করে।'
          }
        },
        {
          id: 'opt-c',
          text: {
            en: 'It reverses the supply voltage polarity instantly.',
            hi: 'यह तुरंत सप्लाई वोल्टेज की ध्रुवीयता को उलट देता है।',
            bn: 'এটি তাৎক্ষণিকভাবে সরবরাহ ভোল্টেজের পোলারিটি উল্টে দেয়।'
          }
        },
        {
          id: 'opt-d',
          text: {
            en: 'It locks the motor shaft with a hydraulic brake.',
            hi: 'यह मोटर शाफ्ट को हाइड्रोलिक ब्रेक से लॉक कर देता है।',
            bn: 'এটি হাইড্রোলিক ব্রেক দিয়ে মোটর শ্যাফট লক করে।'
          }
        }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'When line current exceeds the overload setting, the magnetic pull of the OLR coil overcomes gravity/spring tension, lifting the contact piece to bridge the NVC terminals, causing the spring to pull the handle to OFF.',
        hi: 'जब लोड करंट सीमा से अधिक होता है, तो OLR कॉइल NVC टर्मिनलों को शॉर्ट कर देती है, जिससे NVC का आकर्षण समाप्त हो जाता है और स्प्रिंग हैंडल को OFF कर देती है।',
        bn: 'ওভারলোড হলে OLR কয়েলের চৌম্বক টানে আর্মেচার উঠে NVC টার্মিনাল শর্ট করে, ফলে NVC শক্তি হারিয়ে হ্যান্ডেলটিকে স্প্রিংয়ের মাধ্যমে OFF করে।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-starter-1',
      question: {
        en: 'A 230 V DC shunt motor has a full-load armature current of 40 A and an armature resistance of 0.25 Ω. Determine the total resistance of the starter needed to limit the starting current to 1.25 times the full-load value, and calculate the Back EMF developed when the current on the first stud drops to full-load current (40 A).',
        hi: 'एक 230 V डीसी शंट मोटर का फुल-लोड आर्मेचर करंट 40 A तथा आर्मेचर प्रतिरोध 0.25 Ω है। शुरुआती करंट को फुल-लोड मान के 1.25 गुना तक सीमित करने हेतु आवश्यक स्टार्टर का कुल प्रतिरोध ज्ञात कीजिए, तथा पहले स्टड पर करंट फुल-लोड (40 A) तक गिरने पर उत्पन्न बैक EMF की गणना कीजिए।',
        bn: 'একটি ২৩০ V ডিসি শান্ট মোটরের পূর্ণ লোড আর্মেচার কারেন্ট ৪০ A এবং আর্মেচার রোধ ০.২৫ Ω। স্টার্টিং কারেন্টকে ফুল লোডের ১.২৫ গুণে সীমাবদ্ধ রাখতে প্রয়োজনীয় স্টার্টারের মোট রোধ নির্ণয় করুন, এবং প্রথম স্টাডে কারেন্ট ৪০ A এ নামলে উৎপন্ন ব্যাক EMF কত হবে?'
      },
      hint: {
        en: 'Safe starting current I_start = 1.25 × 40 A = 50 A. Find R_total = V / I_start, then R_starter = R_total - Ra. For Back EMF at 40 A: Eb = V - I_a · R_total.',
        hi: 'सुरक्षित धारा I_start = 1.25 × 40 = 50 A। R_total = 230 / 50 = 4.6 Ω। R_starter = 4.6 - 0.25 = 4.35 Ω। 40 A पर Eb = 230 - (40 × 4.6)।',
        bn: 'নিরাপদ কারেন্ট I_start = ১.২৫ × ৪০ = ৫০ A। R_total = ২৩০ / ৫০ = ৪.৬ Ω। R_starter = ৪.৬ - ০.২৫ = ৪.৩৫ Ω। ৪০ A এ Eb = ২৩০ - (৪০ × ৪.৬)।'
      },
      answerKey: {
        en: '1. Safe starting current I_start = 1.25 × 40 A = 50 A.\n2. Total circuit resistance R_total = 230 V / 50 A = 4.60 Ω.\n3. Required starter resistance R_starter = 4.60 Ω - 0.25 Ω = 4.35 Ω.\n4. Back EMF at 40 A: E_b = V - I_a · R_total = 230 - (40 × 4.60) = 230 - 184 = 46.0 V.',
        hi: '1. सुरक्षित शुरुआती धारा = 50 A।\n2. कुल परिपथ प्रतिरोध = 4.60 Ω।\n3. आवश्यक स्टार्टर प्रतिरोध = 4.35 Ω।\n4. 40 A पर बैक EMF = 230 - (40 × 4.60) = 46.0 V।',
        bn: '১. নিরাপদ স্টার্টিং কারেন্ট = ৫০ A।\n২. মোট সার্কিট রোধ = ৪.৬০ Ω।\n৩. প্রয়োজনীয় স্টার্টার রোধ = ৪.৩৫ Ω।\n৪. ৪০ A এ ব্যাক EMF = ২৩০ - (৪০ × ৪.৬০) = ৪৬.০ V।'
      }
    },
    {
      id: 'pq-starter-2',
      question: {
        en: 'Explain why a manual starter handle must never be used as a continuous speed regulator by leaving it positioned on an intermediate resistance stud, and state what type of starter is required for a DC series traction motor.',
        hi: 'स्पष्ट कीजिए कि मैनुअल स्टार्टर हैंडल को किसी बीच के प्रतिरोध स्टड पर छोड़कर निरंतर गति नियामक के रूप में कभी क्यों नहीं इस्तेमाल करना चाहिए, और बताइए कि डीसी सीरीज ट्रैक्शन मोटर के लिए किस प्रकार के स्टार्टर की आवश्यकता होती है।',
        bn: 'ম্যানুয়াল স্টার্টার হ্যান্ডেলকে মাঝের কোনো স্টাডে রেখে গতি নিয়ন্ত্রক হিসেবে একটানা ব্যবহার করা কেন সম্পূর্ণ নিষিদ্ধ, এবং ডিসি সিরিজ ট্র্যাকশন মোটরের জন্য কোন ধরনের স্টার্টার প্রয়োজন তা উল্লেখ করুন।'
      },
      hint: {
        en: 'Starter resistance coils are short-time rated (typically 15 to 30 seconds duty cycle). For series traction motors, 2-point starters (or automatic contactor banks) are used.',
        hi: 'स्टार्टर प्रतिरोध केवल 15 से 30 सेकंड के अल्पकालिक उपयोग हेतु बने होते हैं। सीरीज ट्रैक्शन मोटर के लिए 2-पॉइंट स्टार्टर का उपयोग होता है।',
        bn: 'স্টার্টারের রোধগুলো স্বল্প সময় (১৫–৩০ সেকেন্ড) কাজের জন্য রেটেড। সিরিজ ট্র্যাকশন মোটরে ২-পয়েন্ট স্টার্টার ব্যবহার করা হয়।'
      },
      answerKey: {
        en: '1. Starter resistors are designed solely for short-time duty (15–30 seconds during acceleration). If kept in intermediate positions, the continuous I_a²·R heat dissipation rapidly overheats and destroys the resistor wire elements.\n2. A 2-Point Starter (or automatic stepped contactor controller) is required for DC series traction motors.',
        hi: '1. स्टार्टर प्रतिरोध केवल 15-30 सेकंड के अल्पकालिक कार्य हेतु डिज़ाइन होते हैं। लगातार बीच में छोड़ने पर वे अत्यधिक गर्म होकर जल जाएंगे।\n2. डीसी सीरीज मोटर के लिए 2-पॉइंट स्टार्टर की आवश्यकता होती है।',
        bn: '১. স্টার্টার রোধগুলো কেবল ১৫-৩০ সেকেন্ড সময়ের জন্য নির্মিত। একটানা কারেন্ট চললে অতিরিক্ত তাপে রোধ কয়েলগুলো পুড়ে যাবে।\n২. ডিসি সিরিজ ট্র্যাকশন মোটরের জন্য ২-পয়েন্ট স্টার্টার প্রয়োজন।'
      }
    }
  ]
};
