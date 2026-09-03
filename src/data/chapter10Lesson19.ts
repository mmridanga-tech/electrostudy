import { Lesson } from '../types';

export const LESSON_LINEAR_INDUCTION_MAGNETIC_LEVITATION: Lesson = {
  id: 'lsn-ch10-linear-induction-magnetic-levitation',
  topicId: 'ch10-linear-induction-magnetic-levitation',
  chapterId: 'ch-em-induction',
  order: 19,
  title: {
    en: 'Linear Induction Motors & Maglev',
    hi: 'रैखिक प्रेरण मोटर (LIM), चुंबकीय उत्तोलन (Maglev) एवं विद्युत-गतिक निलंबन',
    bn: 'লিনিয়ার ইন্ডাকশন মোটর (LIM), ম্যাগনেটিক লেভিটেশন (ম্যাগলেভ) ও ইডিএস'
  },
  description: {
    en: 'Flat-stator linear induction motors (LIM), traveling magnetic wave velocity (vs = 2fτ), linear slip, normal and thrust forces, electrodynamic suspension (EDS) via Lenz repulsion, and frictionless Maglev high-speed rail.',
    hi: 'समतल-स्टेटर रैखिक प्रेरण मोटर (LIM), गतिमान चुंबकीय तरंग वेग (vs = 2fτ), रैखिक स्लिप, प्रणोद एवं सामान्य बल, लेन्ज प्रतिकर्षण द्वारा विद्युत-गतिक निलंबन (EDS), एवं घर्षण-रहित मैग्लेव हाई-स्पीड ट्रेनें।',
    bn: 'ফ্ল্যাট-স্টেটর লিনিয়ার ইন্ডাকশন মোটর (LIM), চলমান চৌম্বক তরঙ্গের বেগ (vs = 2fτ), লিনিয়ার স্লিপ, থ্রাস্ট বল, লেঞ্জের বিকর্ষণ ভিত্তিক ইলেক্ট্রো-ডায়নামিক সাসপেনশন (EDS) ও ঘর্ষণহীন হাই-স্পিড ম্যাগলেভ ট্রেন।'
  },
  estimatedMinutes: 35,
  easyExplanation: {
    en: 'Imagine taking a conventional rotating electric motor, cutting its round cylindrical stator open with a saw, and unrolling it perfectly flat onto the ground! Instead of spinning in a circle, the three-phase alternating currents now produce a magnetic wave that sweeps smoothly down the track in a straight line at hundreds of kilometers per hour! When a conductive aluminum reaction plate (mounted on a train bogie) rests above this track, the sweeping magnetic wave slices through the aluminum. By Faraday’s and Lenz’s laws, the induced currents produce a magnetic field that fights the motion, dragging the train forward along the track with massive thrust—without any wheels spinning, gears grinding, or physical contact! Even more astonishing: at high speeds, the induced currents in the track push back so violently against onboard superconducting magnets that the multi-ton train actually floats 10 centimeters above the concrete guideway in mid-air (Magnetic Levitation)!',
    hi: 'कल्पना कीजिए कि एक गोल घूमने वाली मोटर को बीच से काटकर जमीन पर एक सीधे पट्टे की तरह बिछा दिया जाए! गोल घूमने के बजाय, अब 3-फेज की बिजली एक ऐसी चुंबकीय लहर बनाती है जो पटरी पर सीधी रेखा में सैकड़ों किमी/घंटा की रफ्तार से दौड़ती है! जब ट्रेन के नीचे लगी एल्युमिनियम की प्लेट इस लहर के ऊपर आती है, तो फैराडे और लेन्ज के नियम से उस प्लेट में ऐसी धाराएं बनती हैं जो ट्रेन को भारी जोर से आगे धकेलती हैं—बिना किसी पहिए के घूमे या पटरी को छुए! इतना ही नहीं, तेज गति पर पटरी में बनने वाली भंवर धाराएं ट्रेन के चुंबकों को इतनी ताकत से पीछे धकेलती हैं कि कई टन भारी पूरी ट्रेन पटरी से 10 सेंटीमीटर ऊपर हवा में तैरने लगती है (मैग्लेव)!',
    bn: 'কল্পনা করুন একটি সাধারণ ঘূর্ণায়মান মোটরের গোল রিং কেটে সোজা করে ট্র্যাকে বিছিয়ে দেওয়া হলো! এখন গোল ঘোরার বদলে ৩-ফেজ কারেন্ট একটি চৌম্বক তরঙ্গ তৈরি করে যা সোজা ট্র্যাকে ঘণ্টায় শত শত কিলোমিটার বেগে ধাবিত হয়! ট্রেনের নিচে থাকা একটি সাধারণ অ্যালুমিনিয়াম প্লেটের ওপর দিয়ে এই চৌম্বক তরঙ্গ প্রবাহিত হলে ফ্যারাডে ও লেঞ্জের সূত্রানুযায়ী তীব্র বল তৈরি হয় যা কোনো চাকা বা গিয়ার ছাড়াই পুরো ট্রেনটিকে তীব্র শক্তিতে সামনে ছুটিয়ে নিয়ে যায়! আরও বিস্ময়কর বিষয় হলো: উচ্চ গতিতে ট্র্যাকে উৎপন্ন আবিষ্ট কারেন্ট ট্রেনের চৌম্বককে এত তীব্রভাবে বিকর্ষণ করে যে পুরো বিশালাকার ট্রেনটি মাটি বা ট্র্যাক থেকে ১০ সেন্টিমিটার ওপরে শূন্যে ভেসে থাকে (ম্যাগনেটিক লেভিটেশন বা ম্যাগলেভ)!'
  },
  detailedExplanation: {
    en: `1. Topological Evolution from Rotary to Linear Induction Motor:
A Linear Induction Motor (LIM) is conceptually derived by cutting a conventional rotary squirrel-cage induction motor along an axial radial plane and unrolling both stator and rotor flat:
- The rotary stator becomes the primary winding (often embedded in the guideway or vehicle chassis).
- The squirrel-cage rotor becomes the secondary reaction plate (typically a sheet of high-conductivity aluminum or copper bonded to a solid ferromagnetic steel backing plate for magnetic flux return).
- In a Single-Sided Linear Induction Motor (SLIM), one primary faces a secondary across an air gap g.
- In a Double-Sided Linear Induction Motor (DLIM), two primaries sandwich a conductive secondary sheet, neutralizing normal attractive forces.

2. Linear Traveling Magnetic Wave Velocity:
When a balanced 3-phase AC supply of frequency f excites a linear distributed winding with pole pitch τ (center-to-center distance between adjacent opposite magnetic poles N and S):
- The spatial magnetic flux density wave moves along the linear coordinate x:
  B(x, t) = B_max · cos( (π / τ) · x - 2π · f · t )
- The linear synchronous velocity v_s is given directly by:
  v_s = 2 · f · τ (meters/second)
- Converting to kilometers per hour:
  v_s (km/h) = 3.6 × (2 · f · τ) = 7.2 · f · τ

3. Linear Slip and Electromagnetic Thrust Force:
If the secondary vehicle moves at physical forward velocity v, the linear slip s is:
  s = (v_s - v) / v_s
- By Faraday's law of induction, the relative velocity (v_s - v) cuts the conductive reaction plate, inducing an electric field:
  E = (v_s - v) · B = s · v_s · B
- The induced secondary eddy current density is:
  J = σ · E = σ · s · v_s · B
- According to Lorentz force law, the longitudinal propulsion thrust F_x is:
  F_x = ∫ (J × B)_x dV ∝ (s · B² · A) / R_2
where A is active pole surface area and R_2 is secondary sheet resistance.

4. Normal Forces in Linear Motors:
Unlike rotary machines where radial magnetic forces are symmetric and cancel across the shaft, linear motors experience unbalanced z-axis normal forces:
- Static Magnetic Attraction (F_attract): The ferromagnetic steel backing is pulled strongly toward the primary core due to Maxwell stress:
  F_attract ≈ (B² · A) / (2 · μ_0)
- Dynamic Electrodynamic Repulsion (F_repel): High-frequency induced eddy currents in the aluminum face oppose the entering flux (Lenz's law), creating an upward levitating push that scales with slip velocity.
- Net normal force F_z transitions from strong attraction at low speeds to net repulsion at high slip frequencies.

5. Electrodynamic Suspension (EDS) Maglev (JR Yamanashi / Chuo Shinkansen):
In Electrodynamic Suspension (EDS) Maglev trains:
- Powerful onboard Superconducting Magnets (SCM) producing 4 to 5 Tesla fields travel along a guideway lined with passive figure-eight (null-flux) ground coils.
- At standstill (v = 0), no flux changes (dΦ/dt = 0), so levitation force is strictly zero; the train deploys retractable rubber landing gear wheels.
- As vehicle velocity exceeds the "take-off speed" (v_transition ≈ 100–150 km/h), the rapid flux transition induces intense eddy currents in the guideway coils.
- By Lenz's law, these induced currents generate opposing magnetic poles that repel the vehicle magnets upward, levitating the 500-ton train by 10 to 15 cm into stable airborne suspension!
- Lift-to-Drag Ratio (L/D) increases with speed, offering unparalleled stability at record-breaking speeds up to 603 km/h.`,
    hi: 'रैखिक प्रेरण मोटर (LIM) एवं मैग्लेव का विस्तृत इंजीनियरिंग विश्लेषण: रोटरी से लीनियर मोटर का विकास, गतिमान तरंग वेग v_s = 2fτ, रैखिक स्लिप एवं प्रणोद बल (F_x), सामान्य आकर्षण बनाम प्रतिकर्षण बल, तथा 603 किमी/घंटा की गति वाली जापानी मैग्लेव ट्रेनों में शून्य-फ्लक्स इलेक्ट्रोडायनामिक निलंबन (EDS)।',
    bn: 'লিনিয়ার ইন্ডাকশন মোটর (LIM) ও ম্যাগলেভের বিস্তারিত বিশ্লেষণ: ঘূর্ণনশীল মোটর থেকে লিনিয়ার মোটরের উৎপত্তি, ট্রাভেলিং ওয়েভ বেগ v_s = 2fτ, লিনিয়ার স্লিপ ও থ্রাস্ট বল, আকর্ষণ বনাম বিকর্ষণ বলের রূপান্তর এবং জাপানি ম্যাগলেভ ট্রেনের শূন্য-ফ্লাক্স ইলেক্ট্রো-ডায়নামিক সাসপেনশন (EDS)।'
  },
  formulas: [
    {
      id: 'f-ch10-l19-1',
      formula: 'v_s = 2 · f · τ',
      description: {
        en: 'Linear synchronous wave speed (m/s), where f is supply frequency (Hz) and τ is the pole pitch (meters).',
        hi: 'रैखिक तुल्यकालिक तरंग गति (m/s), जहाँ f आपूर्ति आवृत्ति तथा τ पोल पिच (मीटर) है।',
        bn: 'লিনিয়ার সিনক্রোনাস বেগ (m/s), যেখানে f হলো কম্পাঙ্ক এবং τ হলো পোল পিচ (মিটার)।'
      }
    },
    {
      id: 'f-ch10-l19-2',
      formula: 's = (v_s - v) / v_s',
      description: {
        en: 'Linear fractional slip between synchronous wave velocity v_s and actual vehicle velocity v.',
        hi: 'तुल्यकालिक वेग v_s एवं वास्तविक वाहन वेग v के बीच रैखिक स्लिप (Slip)।',
        bn: 'সিনক্রোনাস বেগ v_s এবং গাড়ির প্রকৃত বেগ v এর মধ্যকার লিনিয়ার স্লিপ।'
      }
    },
    {
      id: 'f-ch10-l19-3',
      formula: 'F_thrust = (m · I_2² · R_2) / (s · v_s)',
      description: {
        en: 'Propulsion thrust force (Newtons) generated by secondary reaction plate eddy current dissipation.',
        hi: 'द्वितीयक रिएक्शन प्लेट में भंवर-धारा जूल अपव्यय द्वारा उत्पन्न प्रणोद बल (न्यूटन)।',
        bn: 'সেকেন্ডারি অ্যালুমিনিয়াম প্লেটে এডি কারেন্টের মাধ্যমে উৎপন্ন থ্রাস্ট বা চালিকা বল (নিউটন)।'
      }
    },
    {
      id: 'f-ch10-l19-4',
      formula: 'F_lift = F_lift,max · [ (v / v_0)² / (1 + (v / v_0)²) ]',
      description: {
        en: 'Electrodynamic Suspension (EDS) levitation lift force as a function of forward velocity v and transition speed v_0.',
        hi: 'विद्युत-गतिक निलंबन (EDS) उत्तोलन बल: आगे के वेग v तथा संक्रमण वेग v_0 का संबंध।',
        bn: 'ইলেক্ট্রো-ডায়নামিক সাসপেনশন (EDS) লিফট বলের সাথে অগ্রগামী বেগ v এবং ট্রানজিশন বেগ v_0 এর সমীকরণ।'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-ch10-l19-1',
      title: {
        en: 'Linear Induction Motor Track Stator & Maglev Reaction Bogie Cross-Section',
        hi: 'रैखिक प्रेरण मोटर ट्रैक स्टेटर एवं मैग्लेव रिएक्शन बोगी का अनुप्रस्थ काट',
        bn: 'লিনিয়ার ইন্ডাকশন মোটর ট্র্যাক স্টেটর এবং ম্যাগলেভ রিঅ্যাকশন বগির প্রস্থচ্ছেদ'
      },
      caption: {
        en: 'Three-phase primary stator track coils producing linear traveling wave with pole pitch τ, driving secondary aluminum reaction plate on steel backing across air gap g.',
        hi: 'पोल पिच τ वाली 3-फेज स्टेटर कुंडलियां जो वायु-अंतराल g के पार एल्युमिनियम रिएक्शन प्लेट को रैखिक गति प्रदान करती हैं।',
        bn: 'পোল পিচ τ বিশিষ্ট ৩-ফেজ স্টেটর কয়েল যা এয়ার-গ্যাপ g ভেদ করে অ্যালুমিনিয়াম প্লেটে লিনিয়ার থ্রাস্ট তৈরি করে।'
      },
      svgType: 'circuit-ch10-linear-induction-maglev'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch10-l19-1',
      problem: {
        en: 'A 3-phase Linear Induction Motor (LIM) propelling an automated rapid-transit airport shuttle has a pole pitch of τ = 0.30 meters. The variable-frequency inverter supplies a current of f = 50 Hz. Calculate: (a) The linear synchronous speed v_s in meters per second and in km/h, and (b) If the vehicle is cruising at v = 90 km/h, calculate the operating linear slip s.',
        hi: 'एक एयरपोर्ट शटल की 3-फेज रैखिक प्रेरण मोटर (LIM) की पोल पिच τ = 0.30 मीटर है। इन्वर्टर 50 Hz की आवृत्ति देता है। ज्ञात कीजिए: (a) रैखिक तुल्यकालिक गति v_s (m/s एवं km/h में), तथा (b) यदि वाहन 90 km/h की गति से चल रहा हो, तो रैखिक स्लिप s ज्ञात कीजिए।',
        bn: 'একটি বিমানবন্দর শাটলের ৩-ফেজ লিনিয়ার ইন্ডাকশন মোটরের (LIM) পোল পিচ τ = ০.৩০ মিটার। ইনভার্টারের কম্পাঙ্ক f = ৫০ Hz। নির্ণয় করুন: (a) লিনিয়ার সিনক্রোনাস বেগ v_s (m/s এবং km/h এককে), এবং (b) গাড়িটি ৯০ km/h বেগে চললে এর লিনিয়ার স্লিপ s কত?'
      },
      solution: {
        en: `Part (a): Calculate linear synchronous speed v_s:
  v_s = 2 · f · τ
  v_s = 2 × (50 Hz) × (0.30 m) = 30 m/s.
Convert to km/h:
  v_s (km/h) = 30 m/s × 3.6 = 108 km/h.

Part (b): Calculate operating linear slip s:
Convert vehicle velocity to m/s:
  v = 90 km/h / 3.6 = 25 m/s.
Now apply the linear slip definition:
  s = (v_s - v) / v_s
  s = (30 m/s - 25 m/s) / 30 m/s
  s = 5 / 30 = 0.1667 (or 16.67% slip).`,
        hi: 'भाग (a): v_s = 2·f·τ = 2 × 50 × 0.30 = 30 m/s = 108 km/h। भाग (b): v = 90 / 3.6 = 25 m/s। स्लिप s = (30 - 25) / 30 = 5/30 = 0.1667 (16.67%)।',
        bn: 'অংশ (a): v_s = ২·f·τ = ২ × ৫০ × ০.৩০ = ৩০ m/s = ১০৮ km/h। অংশ (b): v = ৯০ / ৩.৬ = ২৫ m/s। স্লিপ s = (৩০ - ২৫) / ৩০ = ৫/৩০ = ০.১৬৬৭ (১৬.৬৭%)।'
      },
      finalAnswer: {
        en: '(a) v_s = 30 m/s (108 km/h), (b) s = 0.167 (16.7%)',
        hi: '(a) v_s = 30 m/s (108 km/h), (b) s = 0.167 (16.7%)',
        bn: '(a) v_s = ৩০ m/s (১০৮ km/h), (b) s = ০.১৬৭ (১৬.৭%)'
      }
    },
    {
      id: 'ex-ch10-l19-2',
      problem: {
        en: 'A high-speed bullet Maglev train uses an onboard Linear Synchronous/Induction drive. The track has a pole pitch of τ = 0.45 meters. What inverter output frequency f (in Hz) is required to drive the synchronous traveling magnetic wave at a top speed of 540 km/h?',
        hi: 'एक हाई-स्पीड बुलेट मैग्लेव ट्रेन की ट्रैक पोल पिच τ = 0.45 मीटर है। चुंबकीय तरंग को 540 km/h की शीर्ष गति से दौड़ाने के लिए इन्वर्टर की आपूर्ति आवृत्ति f (Hz में) क्या होनी चाहिए?',
        bn: 'একটি বুলেট ম্যাগলেভ ট্রেনের ট্র্যাকের পোল পিচ τ = ০.৪৫ মিটার। ট্রেনের চৌম্বক তরঙ্গকে ৫৪০ km/h শীর্ষ বেগে চালনা করতে ইনভার্টারের আউটপুট কম্পাঙ্ক f (Hz এককে) কত হতে হবে?'
      },
      solution: {
        en: `Step 1: Convert desired velocity from km/h to m/s:
  v_s = 540 km/h / 3.6 = 150 m/s.

Step 2: Relate linear synchronous speed to frequency and pole pitch:
  v_s = 2 · f · τ

Step 3: Solve for frequency f:
  f = v_s / (2 · τ)
  f = (150 m/s) / (2 × 0.45 m)
  f = 150 / 0.90 = 166.67 Hz.

Conclusion: The track variable-frequency drive must generate 166.7 Hz three-phase currents to propel the Maglev train at 540 km/h.`,
        hi: 'चरण 1: गति को m/s में बदलें: v_s = 540 / 3.6 = 150 m/s। चरण 2: f = v_s / (2·τ) = 150 / (2 × 0.45) = 150 / 0.9 = 166.67 Hz।',
        bn: 'ধাপ ১: বেগকে m/s এককে রূপান্তর: v_s = ৫৪০ / ৩.৬ = ১৫০ m/s। ধাপ ২: f = v_s / (২·τ) = ১৫০ / (২ × ০.৪৫) = ১৫০ / ০.৯ = ১৬৬.৬৭ Hz।'
      },
      finalAnswer: {
        en: 'f = 166.67 Hz (approx 167 Hz)',
        hi: 'f = 166.67 Hz (लगभग 167 Hz)',
        bn: 'f = ১৬৬.৬৭ Hz (প্রায় ১৬৭ Hz)'
      }
    }
  ],
  practicalApplications: [
    {
      en: 'High-Speed Maglev Passenger Rail: Friction-free levitation and linear motor propulsion powering the Shanghai Transrapid (430 km/h) and Japanese JR Yamanashi Maglev (603 km/h).',
      hi: 'हाई-स्पीड मैग्लेव ट्रेनें: शंघाई ट्रांसरेपिड (430 km/h) एवं जापानी मैग्लेव (603 km/h) जो बिना पहियों के हवा में तैरती हैं।',
      bn: 'উচ্চগতির ম্যাগলেভ ট্রেন: সাংহাই ট্রান্সর‍্যাপিড (৪৩০ km/h) এবং জাপানি ম্যাগলেভ (৬০৩ km/h) যা ঘর্ষণহীনভাবে শূন্যে ভেসে চলে।'
    },
    {
      en: 'Urban Automated People Movers (APMs): Airport terminal transit trains and metro lines (e.g., Vancouver SkyTrain, Tokyo Toei Oedo Line) climbing steep 6% grades unhindered by wet wheel slippage.',
      hi: 'शहरी ऑटोमेटेड ट्रेनें: वैंकूवर स्काईट्रेन एवं टोक्यो मेट्रो जो गीली पटरियों पर पहियों के फिसले बिना 6% तीव्र ढलान पर आसानी से चढ़ती हैं।',
      bn: 'শহুরে ট্রানজিট ট্রেন: ভ্যাঙ্কুভার স্কাইট্রেন যেখানে চাকার পিচ্ছিলতার ভয় ছাড়া খাড়া ঢালে লিনিয়ার মোটরে মসৃণভাবে ওঠা যায়।'
    },
    {
      en: 'Aircraft Carrier Electromagnetic Launch Systems (EMALS): US Navy catapults accelerating a 35-ton fighter jet from 0 to 260 km/h in 2.5 seconds using multi-megawatt linear induction drives.',
      hi: 'विमानवाहक पोत इलेक्ट्रोमैग्नेटिक गुलेल (EMALS): 35 टन के लड़ाकू विमान को केवल 2.5 सेकंड में 260 किमी/घंटा की गति से उड़ाना।',
      bn: 'বিমানবাহী জাহাজের EMALS ক্যাটাপল্ট: মাত্র ২.৫ সেকেন্ডে ৩৫ টনের যুদ্ধবিমানকে ০ থেকে ২৬০ km/h বেগে নিক্ষেপ করার লিনিয়ার ড্রাইভ।'
    },
    {
      en: 'Amusement Park Coaster Launchers: Linear induction motors propelling modern roller coasters from dead standstill to 160 km/h in 3 seconds without mechanical chains.',
      hi: 'एम्यूजमेंट पार्क रोलर कोस्टर: बिना चेन के रोलर कोस्टर को 3 सेकंड में 160 km/h की गति देने वाली LIM मोटरें।',
      bn: 'রোলার কোস্টার লঞ্চার: কোনো মেকানিক্যাল চেইন ছাড়া ৩ সেকেন্ডে রোলার কোস্টারকে ১৬০ km/h গতি প্রদানকারী লিনিয়ার মোটর।'
    },
    {
      en: 'Automated Factory Conveyors & Baggage Handling: Cleanroom semiconductor wafer shuttles and high-speed airport baggage sorters with zero particulate friction dust.',
      hi: 'स्वच्छ कारखाने एवं एयरपोर्ट बैगेज हैंडलिंग: बिना घर्षण और बिना धूल के चिप्स एवं सामान ले जाने वाले स्वचालित शटल।',
      bn: 'অটোমেটেড কনভেয়র ও ব্যাগেজ হ্যান্ডলিং: কোনো ধূলিকণা বা ঘর্ষণ ছাড়া বিমানবন্দর ও সেমিকন্ডাক্টর কারখানার দ্রুতগতির শাটল।'
    }
  ],
  importantPoints: [
    {
      en: 'A Linear Induction Motor (LIM) unrolls rotary stator coils onto a flat line: the traveling magnetic wave speed is v_s = 2·f·τ.',
      hi: 'रैखिक प्रेरण मोटर (LIM) स्टेटर को सीधा खोल देती है: चुंबकीय तरंग का वेग v_s = 2·f·τ होता है।',
      bn: 'লিনিয়ার ইন্ডাকশন মোটর স্টেটরের বৃত্তাকার রূপকে সোজা ট্র্যাকে পরিণত করে: তরঙ্গের বেগ v_s = ২·f·τ।'
    },
    {
      en: 'Propulsion thrust requires non-zero slip (s > 0): if vehicle speed equals synchronous speed (v = v_s), relative flux cutting is zero (dΦ/dt = 0), and thrust collapses to zero.',
      hi: 'प्रणोद (Thrust) के लिए स्लिप अनिवार्य है (s > 0): यदि ट्रेन की गति तरंग के बराबर हो जाए (v = v_s), तो थ्रस्ट शून्य हो जाएगा।',
      bn: 'থ্রাস্ট বলের জন্য স্লিপ থাকা আবশ্যক (s > ০): ট্রেনের বেগ তরঙ্গের সমান হলে (v = v_s) ফ্লাক্স পরিবর্তন শূন্য হয় এবং থ্রাস্ট বল মিলিয়ে যায়।'
    },
    {
      en: 'Normal attraction forces in Single-Sided LIMs pull the secondary iron backing violently toward the primary stator; double-sided designs cancel this magnetic attraction.',
      hi: 'सिंगल-साइडेड LIM में लोहा स्टेटर की तरफ तेजी से खिंचता है; डबल-साइडेड डिजाइन इस खिंचाव को संतुलित कर रद्द कर देता है।',
      bn: 'সিঙ্গেল-সাইডেড LIM-এ লোহার ব্যাকপ্লেট স্টেটরকে তীব্রভাবে আকর্ষণ করে; ডাবল-সাইডেড নকশায় এই আকর্ষণ বল প্রশমিত হয়।'
    },
    {
      en: 'Electrodynamic Suspension (EDS) Maglev produces ZERO levitation lift at standstill (v = 0): the train requires auxiliary landing wheels until reaching transition speed (~100 km/h).',
      hi: 'EDS मैग्लेव स्थिर अवस्था (v = 0) में शून्य उत्तोलन देता है: 100 किमी/घंटा की गति तक ट्रेन को रबर के पहियों पर चलना पड़ता है।',
      bn: 'স্থির অবস্থায় (v = ০) EDS ম্যাগলেভে কোনো উত্তোলক বল থাকে না: ১০০-১৫০ km/h গতি অর্জন না করা পর্যন্ত ট্রেনটি চাকার ওপর চলে।'
    },
    {
      en: 'LIMs eliminate mechanical adhesion limits: unlike steel-wheel trains that slip on icy rails, LIMs exert full traction regardless of track moisture or oil.',
      hi: 'LIM में पहियों का घर्षण नहीं होता: गीली या बर्फीली पटरियों पर भी ट्रेन बिना फिसले पूरा जोर लगा सकती है।',
      bn: 'LIM-এ চাকার ঘর্ষণের সীমাবদ্ধতা নেই: বরফ বা ভেজা ট্র্যাকেও ট্রেন কোনো স্লিপিং ছাড়া পূর্ণ শক্তিতে ছুটে চলে।'
    },
    {
      en: 'End Effects: Unlike rotary machines that form a closed magnetic loop, a linear stator has open entry and exit ends that distort flux distribution and reduce efficiency at high speeds.',
      hi: 'एंड इफेक्ट्स: रोटरी मोटर के विपरीत, लीनियर मोटर के दोनों सिरे खुले होते हैं जिससे उच्च गति पर फ्लक्स में विकृति आती है।',
      bn: 'এন্ড ইফেক্টস: রোটরি মোটরের মতো বদ্ধ লুপ না থাকায় লিনিয়ার মোটরের দুই প্রান্তের খোলা সীমানায় চৌম্বক ফ্লাক্স কিছুটা বিকৃত হয়।'
    }
  ],
  commonMistakes: [
    {
      en: 'Thinking linear motors require a physical cable or gear rack: LIMs generate thrust purely through contactless electromagnetic induction across an open air gap.',
      hi: 'यह सोचना कि ट्रेन किसी केबल या गियर से खिंचती है: यह पूरी तरह हवा के पार विद्युत-चुंबकीय प्रेरण से आगे बढ़ती है।',
      bn: 'ভাবা যে ট্রেনটি কোনো তার বা গিয়ার দিয়ে টানা হয়: এটি সম্পূর্ণ স্পর্শহীনভাবে শূন্যে চৌম্বক আবেশের সাহায্যে চলে।'
    },
    {
      en: 'Assuming an EDS Maglev train can levitate while parked at a passenger station: By Faraday’s law, without motion (v = 0), dΦ/dt = 0, so levitation is zero; stations require mechanical wheels or EMS attractive levitation.',
      hi: 'यह मानना कि EDS मैग्लेव स्टेशन पर खड़ी रहते हुए भी हवा में तैरती है: बिना गति के कोई भंवर धारा नहीं बनती, अतः स्टेशन पर पहियों की आवश्यकता होती है।',
      bn: 'স্টেশনে থেমে থাকা অবস্থায়ও EDS ম্যাগলেভ শূন্যে ভাসবে মনে করা: গতি না থাকলে কোনো আবেশ হয় না, তাই স্টেশনে চাকায় ভর দিতে হয়।'
    },
    {
      en: 'Confusing Electrodynamic Suspension (EDS, repulsive) with Electromagnetic Suspension (EMS, attractive): EDS uses superconducting magnets repelling track coils; EMS uses electromagnets attracted upward to a steel rail.',
      hi: 'EDS (प्रतिकर्षण) और EMS (आकर्षण) में भ्रम: EDS में चुंबक पटरी को दूर धकेलते हैं, जबकि EMS में चुंबक पटरी को ऊपर की ओर खींचते हैं।',
      bn: 'EDS (বিকর্ষণ ভিত্তিক) ও EMS (আকর্ষণ ভিত্তিক) গুলিয়ে ফেলা: EDS ট্র্যাকে বিকর্ষণ সৃষ্টি করে এবং EMS স্টিল রেলের দিকে নিজেকে টেনে শূন্যে রাখে।'
    },
    {
      en: 'Forgetting that reversing the phase sequence of the 3-phase supply reverses the direction of the traveling wave, acting as a powerful non-wearing regenerative brake.',
      hi: 'यह भूलना कि 3-फेज के तारों को आपस में बदलने से चुंबकीय तरंग उल्टी दिशा में दौड़ने लगती है और ट्रेन बिना घिसे रुक जाती है।',
      bn: '৩-ফেজের ফেজ পরিবর্তন করলে ট্রাভেলিং ওয়েভের দিক উল্টে যায় এবং চমৎকার ব্রেকিং সৃষ্টি হয় তা ভুলে যাওয়া।'
    }
  ],
  keyTakeaways: [
    {
      en: 'Linear Induction Motors (LIMs) produce linear mechanical motion directly from three-phase AC without gears, belts, or rotary-to-linear linkages.',
      hi: 'रैखिक प्रेरण मोटरें (LIM) बिना किसी गियर या बेल्ट के 3-फेज एसी से सीधे सीधी रेखा में गति उत्पन्न करती हैं।',
      bn: 'লিনিয়ার ইন্ডাকশন মোটর কোনো গিয়ার বা চাকা ছাড়াই ৩-ফেজ এসি থেকে সরাসরি সরলরৈখিক গতি তৈরি করে।'
    },
    {
      en: 'Synchronous speed is v_s = 2·f·τ; speed is smoothly modulated over wide ranges by controlling inverter frequency f.',
      hi: 'तुल्यकालिक गति v_s = 2·f·τ होती है; इन्वर्टर आवृत्ति f को बदलकर गति को आसानी से नियंत्रित किया जा सकता है।',
      bn: 'সিনক্রোনাস বেগ v_s = ২·f·τ; ইনভার্টারের কম্পাঙ্ক f পরিবর্তন করে ট্রেনের গতি নিখুঁতভাবে নিয়ন্ত্রণ করা হয়।'
    },
    {
      en: 'Propulsion thrust arises from Lenz reaction forces between the traveling magnetic wave and eddy currents induced in the conductive secondary plate.',
      hi: 'प्रणोद बल गतिमान चुंबकीय तरंग एवं एल्युमिनियम प्लेट में बनी भंवर धाराओं के बीच लेन्ज प्रतिक्रिया से उत्पन्न होता है।',
      bn: 'ট্রাভেলিং ওয়েভ ও সেকেন্ডারি অ্যালুমিনিয়াম প্লেটে উৎপন্ন এডি কারেন্টের মধ্যকার লেঞ্জের প্রতিক্রিয়ায় থ্রাস্ট বল তৈরি হয়।'
    },
    {
      en: 'Electrodynamic Suspension (EDS) achieves natural, failsafe magnetic levitation at high speeds via eddy-current repulsion between onboard magnets and ground coils.',
      hi: 'EDS प्रणाली उच्च गति पर ट्रेन के चुंबकों और पटरी के बीच भंवर-धारा प्रतिकर्षण द्वारा स्थिर और सुरक्षित उत्तोलन प्रदान करती है।',
      bn: 'EDS প্রযুক্তি উচ্চ গতিতে ট্র্যাক ও ট্রেনের মধ্যকার এডি কারেন্ট বিকর্ষণের সাহায্যে নিরাপদ ও ঘর্ষণহীন লেভিটেশন প্রদান করে।'
    },
    {
      en: 'Maglev rail eliminates friction, mechanical wheel wear, acoustic wheel-rail roar, and weather-dependent adhesion limits, unlocking 600+ km/h ground transport.',
      hi: 'मैग्लेव ट्रेनें पहियों के घिसाव, शोर एवं फिसलन को पूरी तरह समाप्त कर 600+ किमी/घंटा की गति को संभव बनाती हैं।',
      bn: 'ম্যাগলেভ ট্রেন চাকার ক্ষয়, রেলের শব্দ ও পিচ্ছিলতা দূর করে ৬০০+ km/h গতিতে পরিবেশবান্ধব যাতায়াত নিশ্চিত করে।'
    }
  ],
  mcqs: [
    {
      id: "mcq-ch10-l19-1",
      question: {
        en: "What is the mathematical formula for the linear synchronous traveling magnetic wave speed (v_s) in a Linear Induction Motor with pole pitch τ and frequency f?",
        hi: "पोल पिच τ तथा आवृत्ति f वाले रैखिक प्रेरण मोटर में गतिमान चुंबकीय तरंग के वेग (v_s) का सूत्र क्या है?",
        bn: "পোল পিচ τ এবং কম্পাঙ্ক f বিশিষ্ট লিনিয়ার ইন্ডাকশন মোটরের ট্রাভেলিং চৌম্বক তরঙ্গের গতিবেগের (v_s) সূত্র কোনটি?"
      },
      options: [
        { id: "opt-1", text: { en: "v_s = 2 · f · τ", hi: "v_s = 2 · f · τ", bn: "v_s = ২ · f · τ" } },
        { id: "opt-2", text: { en: "v_s = f / (2 · τ)", hi: "v_s = f / (2 · τ)", bn: "v_s = f / (২ · τ)" } },
        { id: "opt-3", text: { en: "v_s = √(2 · f · τ)", hi: "v_s = √(2 · f · τ)", bn: "v_s = √(২ · f · τ)" } },
        { id: "opt-4", text: { en: "v_s = 120 · f / P", hi: "v_s = 120 · f / P", bn: "v_s = ১২০ · f / P" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "In one full electrical AC cycle (period T = 1/f), the traveling wave advances a distance equal to two pole pitches (2τ). Thus, speed v_s = distance / time = 2τ / (1/f) = 2·f·τ.",
        hi: "एक पूर्ण एसी चक्र में तरंग दो पोल पिचों (2τ) की दूरी तय करती है। अतः v_s = 2·f·τ।",
        bn: "একটি পূর্ণ এসি চক্রে তরঙ্গটি দুটি পোল পিচের সমান দূরত্ব (২τ) অতিক্রম করে। অতএব বেগ v_s = ২·f·τ।"
      }
    },
    {
      id: "mcq-ch10-l19-2",
      question: {
        en: "What happens to the forward propulsion thrust of a Linear Induction Motor if the vehicle travels at the exact synchronous speed of the traveling wave (v = v_s, slip s = 0)?",
        hi: "यदि वाहन ठीक चुंबकीय तरंग के तुल्यकालिक वेग से चलने लगे (v = v_s, स्लिप s = 0), तो मोटर के प्रणोद बल (Thrust) का क्या होगा?",
        bn: "গাড়িটি যদি চৌম্বক তরঙ্গের সমান সিনক্রোনাস বেগে চলে (v = v_s, স্লিপ s = ০), তবে লিনিয়ার মোটরের থ্রাস্ট বলের কী পরিবর্তন ঘটবে?"
      },
      options: [
        { id: "opt-1", text: { en: "Thrust drops to strictly zero because relative flux cutting (dΦ/dt) is zero, inducing no secondary eddy currents", hi: "थ्रस्ट पूरी तरह शून्य हो जाता है क्योंकि आपेक्षिक गति शून्य होने से कोई भंवर धारा नहीं बनती", bn: "থ্রাস্ট বল পুরোপুরি শূন্য হয়ে যাবে কারণ আপেক্ষিক গতি শূন্য হওয়ায় কোনো এডি কারেন্ট উৎপন্ন হয় না" } },
        { id: "opt-2", text: { en: "Thrust instantly becomes infinite", hi: "थ्रस्ट अनंत हो जाता है", bn: "থ্রাস্ট বল অসীম হয়ে যাবে" } },
        { id: "opt-3", text: { en: "The motor begins rotating backward in a circle", hi: "मोटर उल्टी दिशा में गोल घूमने लगती है", bn: "মোটরটি উল্টো দিকে গোল ঘুরতে থাকে" } },
        { id: "opt-4", text: { en: "The vehicle lifts vertically into outer space", hi: "ट्रेन अंतरिक्ष में उड़ जाती है", bn: "গাড়িটি মহাশূন্যে উড়ে যায়" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Induction requires relative velocity (v_s - v > 0) to cut flux lines and induce EMF. At zero slip (s = 0), dΦ/dt = 0, no secondary current flows, and Lorentz thrust vanishes.",
        hi: "प्रेरण के लिए आपेक्षिक गति आवश्यक है। स्लिप शून्य होने पर कोई ईएमएफ या करंट नहीं बनता, जिससे थ्रस्ट शून्य हो जाता है।",
        bn: "আবেশের জন্য আপেক্ষিক গতি অপরিহার্য। স্লিপ শূন্য হলে কোনো ভোল্টেজ বা কারেন্ট আবিষ্ট হয় না, ফলে লোরেন্টজ থ্রাস্ট শূন্য হয়।"
      }
    },
    {
      id: "mcq-ch10-l19-3",
      question: {
        en: "Why do Electrodynamic Suspension (EDS) Maglev trains (such as the Japanese JR Yamanashi train) require retractable wheels at low speeds under 100 km/h?",
        hi: "EDS मैग्लेव ट्रेनों को 100 किमी/घंटा से कम गति पर मुड़ने वाले रबर पहियों की आवश्यकता क्यों होती है?",
        bn: "১০০ km/h এর নিচে কম গতিতে চলার সময় জাপানি EDS ম্যাগলেভ ট্রেনের কেন চাকার প্রয়োজন হয়?"
      },
      options: [
        { id: "opt-1", text: { en: "At low speeds, the rate of flux change (dΦ/dt) in the track coils is insufficient to induce repulsive currents strong enough to lift the train’s weight", hi: "कम गति पर पटरी की कुंडलियों में फ्लक्स परिवर्तन की दर इतनी कम होती है कि ट्रेन को उठाने लायक पर्याप्त प्रतिकर्षण बल नहीं बन पाता", bn: "কম গতিতে ট্র্যাকে ফ্লাক্স পরিবর্তনের হার (dΦ/dt) এত কম থাকে যে ট্রেনের ওজনকে শূন্যে ভাসানোর মতো পর্যাপ্ত বিকর্ষণ বল তৈরি হয় না" } },
        { id: "opt-2", text: { en: "To physically crank the superconducting magnets like a bicycle", hi: "साइकिल की तरह चुंबकों को घुमाने के लिए", bn: "চৌম্বকগুলোকে সাইকেলের মতো ঘোরানোর জন্য" } },
        { id: "opt-3", text: { en: "To keep the air conditioning compressor running", hi: "एसी चलाने के लिए", bn: "এসি সচল রাখার জন্য" } },
        { id: "opt-4", text: { en: "Because magnets lose their magnetic field at low speeds", hi: "क्योंकि कम गति पर चुंबकत्व समाप्त हो जाता है", bn: "কারণ কম গতিতে চুম্বকত্ব হারিয়ে যায়" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "EDS levitation force is dynamically induced by motion: F_lift ∝ v² / (v² + v_0²). At standstill (v = 0), lift is zero. The train takes off on rubber wheels until reaching transition speed (~100–150 km/h).",
        hi: "EDS उत्तोलन गति पर निर्भर करता है। शून्य गति पर कोई लिफ्ट नहीं होती, अतः 100-150 km/h की गति तक पहियों का उपयोग किया जाता है।",
        bn: "EDS লেভিটেশন গতির ওপর নির্ভরশীল। স্থির অবস্থায় কোনো লিফট থাকে না, তাই ১০০-১৫০ km/h গতি না পাওয়া পর্যন্ত চাকায় চলতে হয়।"
      }
    },
    {
      id: "mcq-ch10-l19-4",
      question: {
        en: "What is the construction of the typical secondary reaction plate mounted on the track or bogie of a Single-Sided Linear Induction Motor (SLIM)?",
        hi: "सिंगल-साइडेड रैखिक प्रेरण मोटर (SLIM) की द्वितीयक रिएक्शन प्लेट की बनावट कैसी होती है?",
        bn: "সিঙ্গেল-সাইডেড লিনিয়ার ইন্ডাকশন মোটরের (SLIM) সেকেন্ডারি রিঅ্যাকশন প্লেটের গঠন কেমন হয়?"
      },
      options: [
        { id: "opt-1", text: { en: "A highly conductive aluminum or copper top sheet bonded to a solid ferromagnetic steel backing plate", hi: "एक अत्यधिक चालक एल्युमिनियम या तांबे की चादर जो ठोस फेरोमैग्नेटिक स्टील प्लेट के ऊपर जुड़ी होती है", bn: "একটি উচ্চ পরিবাহী অ্যালুমিনিয়াম বা তামার পাত যা নিচে থাকা সলিড স্টিল ব্যাকপ্লেটের সাথে যুক্ত থাকে" } },
        { id: "opt-2", text: { en: "A fragile hollow glass sheet filled with helium gas", hi: "हीलियम गैस से भरी कांच की शीट", bn: "হিলিয়াম গ্যাসে পূর্ণ ভঙ্গুর কাচের শিট" } },
        { id: "opt-3", text: { en: "A thick sheet of vulcanized rubber", hi: "रबर की मोटी चादर", bn: "ভালকানাইজড রবারের মোটা শিট" } },
        { id: "opt-4", text: { en: "A diamond crystal lattice with zero free electrons", hi: "बिना मुक्त इलेक्ट्रॉनों वाला हीरा", bn: "মুক্ত ইলেকট্রনহীন হীরার পাত" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "The aluminum sheet provides low electrical resistance for high induced eddy currents (thrust), while the steel backing provides a high-permeability magnetic path to close the magnetic flux loop.",
        hi: "एल्युमिनियम भंवर धाराओं (थ्रस्ट) के लिए कम प्रतिरोध देता है, तथा स्टील की प्लेट चुंबकीय फ्लक्स के रास्ते को पूरा करने के लिए उच्च चुंबकशीलता देती है।",
        bn: "অ্যালুমিনিয়াম পাত এডি কারেন্ট পরিবহনে কম রোধ প্রদান করে এবং স্টিলের ব্যাকপ্লেট চৌম্বক ফ্লাক্সের পথ সম্পূর্ণ করে।"
      }
    },
    {
      id: "mcq-ch10-l19-5",
      question: {
        en: "How can a Linear Induction Motor be immediately converted into a powerful contactless regenerative brake to slow down a speeding train?",
        hi: "तेज गति से दौड़ती ट्रेन को धीमा करने के लिए रैखिक प्रेरण मोटर को संपर्क-रहित रीजनरेटिव ब्रेक में कैसे बदला जाता है?",
        bn: "দ্রুতগামী ট্রেন থামাতে লিনিয়ার ইন্ডাকশন মোটরকে কীভাবে তাৎক্ষণিকভাবে কন্ট্যাক্টলেস রিজেনারেটিভ ব্রেকে রূপান্তর করা যায়?"
      },
      options: [
        { id: "opt-1", text: { en: "Reverse the phase sequence of the 3-phase AC supply (e.g., swap Phase A and Phase B), driving the traveling wave in reverse and creating negative slip", hi: "3-फेज आपूर्ति के किन्हीं दो फेजों को आपस में बदल दें, जिससे चुंबकीय तरंग उल्टी दिशा में दौड़ने लगती है और ऋणात्मक स्लिप से भारी ब्रेकिंग बल बनता है", bn: "৩-ফেজ সরবরাহের দুটি ফেজ পরস্পর বদলে দিয়ে ট্রাভেলিং ওয়েভকে উল্টো দিকে চালনা করা, যা নেগেটিভ স্লিপের মাধ্যমে ব্রেকিং সৃষ্টি করে" } },
        { id: "opt-2", text: { en: "Pour sand onto the stator coils", hi: "स्टेटर कुंडलियों पर रेत डालना", bn: "কয়েলে বালু ঢেলে দেওয়া" } },
        { id: "opt-3", text: { en: "Disconnect all cables and let gravity stop the train", hi: "सारे तार काट देना", bn: "সব তার বিচ্ছিন্ন করা" } },
        { id: "opt-4", text: { en: "Paint the aluminum plate with red paint", hi: "एल्युमिनियम प्लेट पर लाल रंग पोतना", bn: "প্লেটে লাল রং দেওয়া" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Swapping two phases reverses the direction of the linear traveling wave. The slip becomes s > 1 (plugging/counter-braking), generating immense reverse Lorentz thrust that rapidly decelerates the vehicle without mechanical wear.",
        hi: "दो फेजों को बदलने से चुंबकीय तरंग उल्टी दौड़ने लगती है। इससे भारी विपरीत थ्रस्ट उत्पन्न होता है जो ट्रेन को तुरंत रोक देता है।",
        bn: "দুটি ফেজ বদলে দিলে ট্রাভেলিং তরঙ্গ উল্টো দিকে ছুটে চলে। ফলে তীব্র বিপরীত লোরেন্টজ বল তৈরি হয়ে ট্রেনকে কোনো মেকানিক্যাল ঘর্ষণ ছাড়াই থামিয়ে দেয়।"
      }
    },
    {
      id: "mcq-ch10-l19-6",
      question: {
        en: "What distinct parasitic phenomenon occurs in Linear Induction Motors due to the open physical ends of the linear stator core?",
        hi: "रैखिक स्टेटर कोर के दोनों सिरे खुले होने के कारण रैखिक प्रेरण मोटरों में कौन सी विशिष्ट परजीवी घटना (Parasitic Phenomenon) होती है?",
        bn: "লিনিয়ার স্টেটর কোরের দুই প্রান্ত উন্মুক্ত থাকার কারণে লিনিয়ার মোটরে কোন ক্ষতিকর পরজীবী ঘটনাটি ঘটে?"
      },
      options: [
        { id: "opt-1", text: { en: "Longitudinal End Effects: Discontinuous entry and exit transients that distort magnetic flux and degrade power factor at high speeds", hi: "अनुदैर्ध्य एंड इफेक्ट्स (End Effects): प्रवेश और निकास पर फ्लक्स में विकृति, जो उच्च गति पर दक्षता घटाती है", bn: "লঙ্গিচিউডিনাল এন্ড ইফেক্টস: প্রবেশ ও প্রস্থান মুখে ফ্লাক্সের বিকৃতি যা উচ্চ গতিতে মোটরের দক্ষতা কমিয়ে দেয়" } },
        { id: "opt-2", text: { en: "Spontaneous combustion of the stator iron", hi: "स्टेटर लोहे में स्वतः आग लगना", bn: "স্টেটরে আপনা-আপনি আগুন ধরা" } },
        { id: "opt-3", text: { en: "Complete loss of Earth’s gravitational field", hi: "पृथ्वी के गुरुत्वाकर्षण का समाप्त हो जाना", bn: "অভিকর্ষ বলের বিলুপ্তি" } },
        { id: "opt-4", text: { en: "Generation of high-intensity ultrasonic music", hi: "अल्ट्रासोनिक संगीत बजना", bn: "শব্দ তৈরি হওয়া" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Unlike closed rotary cylinders, linear stators have distinct leading and trailing edges. When the secondary plate enters the stator, transient counter-currents are induced that weaken the main flux, known as \"end effects\".",
        hi: "रोटरी मोटर के विपरीत, लीनियर मोटर के सिरे खुले होते हैं। जब प्लेट स्टेटर में प्रवेश करती है तो एंड इफेक्ट्स के कारण मुख्य फ्लक्स कमजोर हो जाता है।",
        bn: "বৃত্তাকার মোটরের মতো রিং না থাকায় লিনিয়ার মোটরের দুই প্রান্ত উন্মুক্ত থাকে, ফলে নতুন উপাদান প্রবেশের মুখে ফ্লাক্স বিকৃত হয় যাকে এন্ড ইফেক্ট বলে।"
      }
    },
    {
      id: "mcq-ch10-l19-7",
      question: {
        en: "Why are Linear Induction Motors ideally suited for steep incline mountain railways and automated airport transit lines compared to conventional wheel-driven electric locomotives?",
        hi: "पारंपरिक पहिया चालित ट्रेनों की तुलना में खड़ी ढलान वाले पर्वतीय मार्गों एवं एयरपोर्ट ट्रेनों के लिए रैखिक प्रेरण मोटरें (LIM) क्यों बेहतर हैं?",
        bn: "খাড়া পাহাড়ি রেলপথ এবং বিমানবন্দর ট্রানজিটের জন্য প্রচলিত চাকা-চালিত ট্রেনের চেয়ে লিনিয়ার ইন্ডাকশন মোটর কেন বেশি উপযোগী?"
      },
      options: [
        { id: "opt-1", text: { en: "LIM traction is generated magnetically across the air gap, entirely independent of wheel-rail friction adhesion, preventing slippage in rain, snow, or steep grades (up to 8%)", hi: "LIM का खिंचाव हवा के आर-पार चुंबकीय रूप से बनता है, यह पहियों के घर्षण पर निर्भर नहीं करता, जिससे बारिश, बर्फ या 8% ढलान पर भी पहिये नहीं फिसलते", bn: "LIM ট্র্যাকশন চৌম্বকীয়ভাবে উৎপন্ন হয় যা চাকার ঘর্ষণের ওপর নির্ভরশীল নয়, ফলে বৃষ্টি, বরফ বা ৮% খাড়া ঢালেও কোনো চাকা পিছলে যায় না" } },
        { id: "opt-2", text: { en: "They weigh 100 times more than conventional trains", hi: "ये पारंपरिक ट्रेनों से 100 गुना भारी होती हैं", bn: "এগুলো ১০০ গুণ বেশি ভারী" } },
        { id: "opt-3", text: { en: "They require no electrical power supplies", hi: "इन्हें बिजली की आवश्यकता नहीं होती", bn: "কোনো বিদ্যুৎ প্রয়োজন হয় না" } },
        { id: "opt-4", text: { en: "They produce thick clouds of white steam", hi: "ये सफेद भाप छोड़ती हैं", bn: "এগুলো বাষ্প তৈরি করে" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Conventional steel wheels lose traction on inclines over 3% or when rails are wet/icy. LIMs generate direct linear electromagnetic thrust independent of contact friction.",
        hi: "पारंपरिक पहिये 3% से अधिक ढलान या बारिश में फिसलने लगते हैं। LIM सीधे विद्युत-चुंबकीय बल से चलती है, अतः यह फिसलन से पूरी तरह मुक्त है।",
        bn: "প্রচলিত ট্রেনের চাকা ৩% এর বেশি ঢালে বা ভেজা ট্র্যাকে স্লিপ করে। LIM সরাসরি তড়িৎচৌম্বক বল দিয়ে চলায় খাড়া ঢালেও অনায়াসে চলতে পারে।"
      }
    },
    {
      id: "mcq-ch10-l19-8",
      question: {
        en: "In the US Navy’s aircraft carrier Electromagnetic Aircraft Launch System (EMALS), what replaced the historic high-pressure steam catapults?",
        hi: "अमेरिकी नौसेना के विमानवाहक पोत EMALS में पारंपरिक भाप गुलेल (Steam Catapult) की जगह किसने ले ली है?",
        bn: "মার্কিন বিমানবাহী জাহাজের EMALS সিস্টেমে সনাতন বাষ্পীয় ক্যাটাপল্টের স্থান দখল করেছে কোনটি?"
      },
      options: [
        { id: "opt-1", text: { en: "Multi-megawatt Linear Induction / Synchronous Motors delivering electronically controlled, smooth, precise linear acceleration", hi: "मल्टी-मेगावाट रैखिक प्रेरण/तुल्यकालिक मोटरें जो इलेक्ट्रॉनिक रूप से नियंत्रित एवं सटीक रैखिक त्वरण देती हैं", bn: "মাল্টি-মেগাওয়াট লিনিয়ার ইন্ডাকশন/সিনক্রোনাস মোটর যা সুনির্দিষ্ট ও শক্তিশালী ত্বরণ প্রদান করে" } },
        { id: "opt-2", text: { en: "Giant coiled mechanical steel springs", hi: "विशालकाय स्टील स्प्रिंग्स", bn: "বিশাল মেকানিক্যাল স্প্রিং" } },
        { id: "opt-3", text: { en: "Heavy dynamite explosive charges", hi: "डायनामाइट के धमाके", bn: "ডিনামাইটের বিস্ফোরণ" } },
        { id: "opt-4", text: { en: "Trained marine dolphins pulling ropes", hi: "डॉल्फ़िन द्वारा खींचे जाने वाले रस्से", bn: "ডলফিনের টানা রশি" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "EMALS uses linear electric motor drive carriages along the carrier flight deck. Microprocessor frequency control tunes thrust precisely to aircraft weight, drastically reducing airframe stress.",
        hi: "EMALS भारी लीनियर इलेक्ट्रिक मोटरों का उपयोग करता है जो विमान के वजन के अनुसार बिल्कुल सटीक और चिकना त्वरण प्रदान करती हैं।",
        bn: "EMALS ব্যবস্থায় শক্তিশালী লিনিয়ার মোটর ব্যবহার করা হয় যা বিমানের কাঠামোর কোনো ক্ষতি না করে নিখুঁত ত্বরণে বিমান আকাশে ছুড়ে দেয়।"
      }
    }
  ],
  mcqQuestions: [
    {
      id: "mcq-ch10-l19-1",
      question: {
        en: "What is the mathematical formula for the linear synchronous traveling magnetic wave speed (v_s) in a Linear Induction Motor with pole pitch τ and frequency f?",
        hi: "पोल पिच τ तथा आवृत्ति f वाले रैखिक प्रेरण मोटर में गतिमान चुंबकीय तरंग के वेग (v_s) का सूत्र क्या है?",
        bn: "পোল পিচ τ এবং কম্পাঙ্ক f বিশিষ্ট লিনিয়ার ইন্ডাকশন মোটরের ট্রাভেলিং চৌম্বক তরঙ্গের গতিবেগের (v_s) সূত্র কোনটি?"
      },
      options: [
        { id: "opt-1", text: { en: "v_s = 2 · f · τ", hi: "v_s = 2 · f · τ", bn: "v_s = ২ · f · τ" } },
        { id: "opt-2", text: { en: "v_s = f / (2 · τ)", hi: "v_s = f / (2 · τ)", bn: "v_s = f / (২ · τ)" } },
        { id: "opt-3", text: { en: "v_s = √(2 · f · τ)", hi: "v_s = √(2 · f · τ)", bn: "v_s = √(২ · f · τ)" } },
        { id: "opt-4", text: { en: "v_s = 120 · f / P", hi: "v_s = 120 · f / P", bn: "v_s = ১২০ · f / P" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "In one full electrical AC cycle (period T = 1/f), the traveling wave advances a distance equal to two pole pitches (2τ). Thus, speed v_s = distance / time = 2τ / (1/f) = 2·f·τ.",
        hi: "एक पूर्ण एसी चक्र में तरंग दो पोल पिचों (2τ) की दूरी तय करती है। अतः v_s = 2·f·τ।",
        bn: "একটি পূর্ণ এসি চক্রে তরঙ্গটি দুটি পোল পিচের সমান দূরত্ব (২τ) অতিক্রম করে। অতএব বেগ v_s = ২·f·τ।"
      }
    },
    {
      id: "mcq-ch10-l19-2",
      question: {
        en: "What happens to the forward propulsion thrust of a Linear Induction Motor if the vehicle travels at the exact synchronous speed of the traveling wave (v = v_s, slip s = 0)?",
        hi: "यदि वाहन ठीक चुंबकीय तरंग के तुल्यकालिक वेग से चलने लगे (v = v_s, स्लिप s = 0), तो मोटर के प्रणोद बल (Thrust) का क्या होगा?",
        bn: "গাড়িটি যদি চৌম্বক তরঙ্গের সমান সিনক্রোনাস বেগে চলে (v = v_s, স্লিপ s = ০), তবে লিনিয়ার মোটরের থ্রাস্ট বলের কী পরিবর্তন ঘটবে?"
      },
      options: [
        { id: "opt-1", text: { en: "Thrust drops to strictly zero because relative flux cutting (dΦ/dt) is zero, inducing no secondary eddy currents", hi: "थ्रस्ट पूरी तरह शून्य हो जाता है क्योंकि आपेक्षिक गति शून्य होने से कोई भंवर धारा नहीं बनती", bn: "থ্রাস্ট বল পুরোপুরি শূন্য হয়ে যাবে কারণ আপেক্ষিক গতি শূন্য হওয়ায় কোনো এডি কারেন্ট উৎপন্ন হয় না" } },
        { id: "opt-2", text: { en: "Thrust instantly becomes infinite", hi: "थ्रस्ट अनंत हो जाता है", bn: "থ্রাস্ট বল অসীম হয়ে যাবে" } },
        { id: "opt-3", text: { en: "The motor begins rotating backward in a circle", hi: "मोटर उल्टी दिशा में गोल घूमने लगती है", bn: "মোটরটি উল্টো দিকে গোল ঘুরতে থাকে" } },
        { id: "opt-4", text: { en: "The vehicle lifts vertically into outer space", hi: "ट्रेन अंतरिक्ष में उड़ जाती है", bn: "গাড়িটি মহাশূন্যে উড়ে যায়" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Induction requires relative velocity (v_s - v > 0) to cut flux lines and induce EMF. At zero slip (s = 0), dΦ/dt = 0, no secondary current flows, and Lorentz thrust vanishes.",
        hi: "प्रेरण के लिए आपेक्षिक गति आवश्यक है। स्लिप शून्य होने पर कोई ईएमएफ या करंट नहीं बनता, जिससे थ्रस्ट शून्य हो जाता है।",
        bn: "আবেশের জন্য আপেক্ষিক গতি অপরিহার্য। স্লিপ শূন্য হলে কোনো ভোল্টেজ বা কারেন্ট আবিষ্ট হয় না, ফলে লোরেন্টজ থ্রাস্ট শূন্য হয়।"
      }
    },
    {
      id: "mcq-ch10-l19-3",
      question: {
        en: "Why do Electrodynamic Suspension (EDS) Maglev trains (such as the Japanese JR Yamanashi train) require retractable wheels at low speeds under 100 km/h?",
        hi: "EDS मैग्लेव ट्रेनों को 100 किमी/घंटा से कम गति पर मुड़ने वाले रबर पहियों की आवश्यकता क्यों होती है?",
        bn: "১০০ km/h এর নিচে কম গতিতে চলার সময় জাপানি EDS ম্যাগলেভ ট্রেনের কেন চাকার প্রয়োজন হয়?"
      },
      options: [
        { id: "opt-1", text: { en: "At low speeds, the rate of flux change (dΦ/dt) in the track coils is insufficient to induce repulsive currents strong enough to lift the train’s weight", hi: "कम गति पर पटरी की कुंडलियों में फ्लक्स परिवर्तन की दर इतनी कम होती है कि ट्रेन को उठाने लायक पर्याप्त प्रतिकर्षण बल नहीं बन पाता", bn: "কম গতিতে ট্র্যাকে ফ্লাক্স পরিবর্তনের হার (dΦ/dt) এত কম থাকে যে ট্রেনের ওজনকে শূন্যে ভাসানোর মতো পর্যাপ্ত বিকর্ষণ বল তৈরি হয় না" } },
        { id: "opt-2", text: { en: "To physically crank the superconducting magnets like a bicycle", hi: "साइकिल की तरह चुंबकों को घुमाने के लिए", bn: "চৌম্বকগুলোকে সাইকেলের মতো ঘোরানোর জন্য" } },
        { id: "opt-3", text: { en: "To keep the air conditioning compressor running", hi: "एसी चलाने के लिए", bn: "এসি সচল রাখার জন্য" } },
        { id: "opt-4", text: { en: "Because magnets lose their magnetic field at low speeds", hi: "क्योंकि कम गति पर चुंबकत्व समाप्त हो जाता है", bn: "কারণ কম গতিতে চুম্বকত্ব হারিয়ে যায়" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "EDS levitation force is dynamically induced by motion: F_lift ∝ v² / (v² + v_0²). At standstill (v = 0), lift is zero. The train takes off on rubber wheels until reaching transition speed (~100–150 km/h).",
        hi: "EDS उत्तोलन गति पर निर्भर करता है। शून्य गति पर कोई लिफ्ट नहीं होती, अतः 100-150 km/h की गति तक पहियों का उपयोग किया जाता है।",
        bn: "EDS লেভিটেশন গতির ওপর নির্ভরশীল। স্থির অবস্থায় কোনো লিফট থাকে না, তাই ১০০-১৫০ km/h গতি না পাওয়া পর্যন্ত চাকায় চলতে হয়।"
      }
    },
    {
      id: "mcq-ch10-l19-4",
      question: {
        en: "What is the construction of the typical secondary reaction plate mounted on the track or bogie of a Single-Sided Linear Induction Motor (SLIM)?",
        hi: "सिंगल-साइडेड रैखिक प्रेरण मोटर (SLIM) की द्वितीयक रिएक्शन प्लेट की बनावट कैसी होती है?",
        bn: "সিঙ্গেল-সাইডেড লিনিয়ার ইন্ডাকশন মোটরের (SLIM) সেকেন্ডারি রিঅ্যাকশন প্লেটের গঠন কেমন হয়?"
      },
      options: [
        { id: "opt-1", text: { en: "A highly conductive aluminum or copper top sheet bonded to a solid ferromagnetic steel backing plate", hi: "एक अत्यधिक चालक एल्युमिनियम या तांबे की चादर जो ठोस फेरोमैग्नेटिक स्टील प्लेट के ऊपर जुड़ी होती है", bn: "একটি উচ্চ পরিবাহী অ্যালুমিনিয়াম বা তামার পাত যা নিচে থাকা সলিড স্টিল ব্যাকপ্লেটের সাথে যুক্ত থাকে" } },
        { id: "opt-2", text: { en: "A fragile hollow glass sheet filled with helium gas", hi: "हीलियम गैस से भरी कांच की शीट", bn: "হিলিয়াম গ্যাসে পূর্ণ ভঙ্গুর কাচের শিট" } },
        { id: "opt-3", text: { en: "A thick sheet of vulcanized rubber", hi: "रबर की मोटी चादर", bn: "ভালকানাইজড রবারের মোটা শিট" } },
        { id: "opt-4", text: { en: "A diamond crystal lattice with zero free electrons", hi: "बिना मुक्त इलेक्ट्रॉनों वाला हीरा", bn: "মুক্ত ইলেকট্রনহীন হীরার পাত" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "The aluminum sheet provides low electrical resistance for high induced eddy currents (thrust), while the steel backing provides a high-permeability magnetic path to close the magnetic flux loop.",
        hi: "एल्युमिनियम भंवर धाराओं (थ्रस्ट) के लिए कम प्रतिरोध देता है, तथा स्टील की प्लेट चुंबकीय फ्लक्स के रास्ते को पूरा करने के लिए उच्च चुंबकशीलता देती है।",
        bn: "অ্যালুমিনিয়াম পাত এডি কারেন্ট পরিবহনে কম রোধ প্রদান করে এবং স্টিলের ব্যাকপ্লেট চৌম্বক ফ্লাক্সের পথ সম্পূর্ণ করে।"
      }
    },
    {
      id: "mcq-ch10-l19-5",
      question: {
        en: "How can a Linear Induction Motor be immediately converted into a powerful contactless regenerative brake to slow down a speeding train?",
        hi: "तेज गति से दौड़ती ट्रेन को धीमा करने के लिए रैखिक प्रेरण मोटर को संपर्क-रहित रीजनरेटिव ब्रेक में कैसे बदला जाता है?",
        bn: "দ্রুতগামী ট্রেন থামাতে লিনিয়ার ইন্ডাকশন মোটরকে কীভাবে তাৎক্ষণিকভাবে কন্ট্যাক্টলেস রিজেনারেটিভ ব্রেকে রূপান্তর করা যায়?"
      },
      options: [
        { id: "opt-1", text: { en: "Reverse the phase sequence of the 3-phase AC supply (e.g., swap Phase A and Phase B), driving the traveling wave in reverse and creating negative slip", hi: "3-फेज आपूर्ति के किन्हीं दो फेजों को आपस में बदल दें, जिससे चुंबकीय तरंग उल्टी दिशा में दौड़ने लगती है और ऋणात्मक स्लिप से भारी ब्रेकिंग बल बनता है", bn: "৩-ফেজ সরবরাহের দুটি ফেজ পরস্পর বদলে দিয়ে ট্রাভেলিং ওয়েভকে উল্টো দিকে চালনা করা, যা নেগেটিভ স্লিপের মাধ্যমে ব্রেকিং সৃষ্টি করে" } },
        { id: "opt-2", text: { en: "Pour sand onto the stator coils", hi: "स्टेटर कुंडलियों पर रेत डालना", bn: "কয়েলে বালু ঢেলে দেওয়া" } },
        { id: "opt-3", text: { en: "Disconnect all cables and let gravity stop the train", hi: "सारे तार काट देना", bn: "সব তার বিচ্ছিন্ন করা" } },
        { id: "opt-4", text: { en: "Paint the aluminum plate with red paint", hi: "एल्युमिनियम प्लेट पर लाल रंग पोतना", bn: "প্লেটে লাল রং দেওয়া" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Swapping two phases reverses the direction of the linear traveling wave. The slip becomes s > 1 (plugging/counter-braking), generating immense reverse Lorentz thrust that rapidly decelerates the vehicle without mechanical wear.",
        hi: "दो फेजों को बदलने से चुंबकीय तरंग उल्टी दौड़ने लगती है। इससे भारी विपरीत थ्रस्ट उत्पन्न होता है जो ट्रेन को तुरंत रोक देता है।",
        bn: "দুটি ফেজ বদলে দিলে ট্রাভেলিং তরঙ্গ উল্টো দিকে ছুটে চলে। ফলে তীব্র বিপরীত লোরেন্টজ বল তৈরি হয়ে ট্রেনকে কোনো মেকানিক্যাল ঘর্ষণ ছাড়াই থামিয়ে দেয়।"
      }
    },
    {
      id: "mcq-ch10-l19-6",
      question: {
        en: "What distinct parasitic phenomenon occurs in Linear Induction Motors due to the open physical ends of the linear stator core?",
        hi: "रैखिक स्टेटर कोर के दोनों सिरे खुले होने के कारण रैखिक प्रेरण मोटरों में कौन सी विशिष्ट परजीवी घटना (Parasitic Phenomenon) होती है?",
        bn: "লিনিয়ার স্টেটর কোরের দুই প্রান্ত উন্মুক্ত থাকার কারণে লিনিয়ার মোটরে কোন ক্ষতিকর পরজীবী ঘটনাটি ঘটে?"
      },
      options: [
        { id: "opt-1", text: { en: "Longitudinal End Effects: Discontinuous entry and exit transients that distort magnetic flux and degrade power factor at high speeds", hi: "अनुदैर्ध्य एंड इफेक्ट्स (End Effects): प्रवेश और निकास पर फ्लक्स में विकृति, जो उच्च गति पर दक्षता घटाती है", bn: "লঙ্গিচিউডিনাল এন্ড ইফেক্টস: প্রবেশ ও প্রস্থান মুখে ফ্লাক্সের বিকৃতি যা উচ্চ গতিতে মোটরের দক্ষতা কমিয়ে দেয়" } },
        { id: "opt-2", text: { en: "Spontaneous combustion of the stator iron", hi: "स्टेटर लोहे में स्वतः आग लगना", bn: "স্টেটরে আপনা-আপনি আগুন ধরা" } },
        { id: "opt-3", text: { en: "Complete loss of Earth’s gravitational field", hi: "पृथ्वी के गुरुत्वाकर्षण का समाप्त हो जाना", bn: "অভিকর্ষ বলের বিলুপ্তি" } },
        { id: "opt-4", text: { en: "Generation of high-intensity ultrasonic music", hi: "अल्ट्रासोनिक संगीत बजना", bn: "শব্দ তৈরি হওয়া" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Unlike closed rotary cylinders, linear stators have distinct leading and trailing edges. When the secondary plate enters the stator, transient counter-currents are induced that weaken the main flux, known as \"end effects\".",
        hi: "रोटरी मोटर के विपरीत, लीनियर मोटर के सिरे खुले होते हैं। जब प्लेट स्टेटर में प्रवेश करती है तो एंड इफेक्ट्स के कारण मुख्य फ्लक्स कमजोर हो जाता है।",
        bn: "বৃত্তাকার মোটরের মতো রিং না থাকায় লিনিয়ার মোটরের দুই প্রান্ত উন্মুক্ত থাকে, ফলে নতুন উপাদান প্রবেশের মুখে ফ্লাক্স বিকৃত হয় যাকে এন্ড ইফেক্ট বলে।"
      }
    },
    {
      id: "mcq-ch10-l19-7",
      question: {
        en: "Why are Linear Induction Motors ideally suited for steep incline mountain railways and automated airport transit lines compared to conventional wheel-driven electric locomotives?",
        hi: "पारंपरिक पहिया चालित ट्रेनों की तुलना में खड़ी ढलान वाले पर्वतीय मार्गों एवं एयरपोर्ट ट्रेनों के लिए रैखिक प्रेरण मोटरें (LIM) क्यों बेहतर हैं?",
        bn: "খাড়া পাহাড়ি রেলপথ এবং বিমানবন্দর ট্রানজিটের জন্য প্রচলিত চাকা-চালিত ট্রেনের চেয়ে লিনিয়ার ইন্ডাকশন মোটর কেন বেশি উপযোগী?"
      },
      options: [
        { id: "opt-1", text: { en: "LIM traction is generated magnetically across the air gap, entirely independent of wheel-rail friction adhesion, preventing slippage in rain, snow, or steep grades (up to 8%)", hi: "LIM का खिंचाव हवा के आर-पार चुंबकीय रूप से बनता है, यह पहियों के घर्षण पर निर्भर नहीं करता, जिससे बारिश, बर्फ या 8% ढलान पर भी पहिये नहीं फिसलते", bn: "LIM ট্র্যাকশন চৌম্বকীয়ভাবে উৎপন্ন হয় যা চাকার ঘর্ষণের ওপর নির্ভরশীল নয়, ফলে বৃষ্টি, বরফ বা ৮% খাড়া ঢালেও কোনো চাকা পিছলে যায় না" } },
        { id: "opt-2", text: { en: "They weigh 100 times more than conventional trains", hi: "ये पारंपरिक ट्रेनों से 100 गुना भारी होती हैं", bn: "এগুলো ১০০ গুণ বেশি ভারী" } },
        { id: "opt-3", text: { en: "They require no electrical power supplies", hi: "इन्हें बिजली की आवश्यकता नहीं होती", bn: "কোনো বিদ্যুৎ প্রয়োজন হয় না" } },
        { id: "opt-4", text: { en: "They produce thick clouds of white steam", hi: "ये सफेद भाप छोड़ती हैं", bn: "এগুলো বাষ্প তৈরি করে" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Conventional steel wheels lose traction on inclines over 3% or when rails are wet/icy. LIMs generate direct linear electromagnetic thrust independent of contact friction.",
        hi: "पारंपरिक पहिये 3% से अधिक ढलान या बारिश में फिसलने लगते हैं। LIM सीधे विद्युत-चुंबकीय बल से चलती है, अतः यह फिसलन से पूरी तरह मुक्त है।",
        bn: "প্রচলিত ট্রেনের চাকা ৩% এর বেশি ঢালে বা ভেজা ট্র্যাকে স্লিপ করে। LIM সরাসরি তড়িৎচৌম্বক বল দিয়ে চলায় খাড়া ঢালেও অনায়াসে চলতে পারে।"
      }
    },
    {
      id: "mcq-ch10-l19-8",
      question: {
        en: "In the US Navy’s aircraft carrier Electromagnetic Aircraft Launch System (EMALS), what replaced the historic high-pressure steam catapults?",
        hi: "अमेरिकी नौसेना के विमानवाहक पोत EMALS में पारंपरिक भाप गुलेल (Steam Catapult) की जगह किसने ले ली है?",
        bn: "মার্কিন বিমানবাহী জাহাজের EMALS সিস্টেমে সনাতন বাষ্পীয় ক্যাটাপল্টের স্থান দখল করেছে কোনটি?"
      },
      options: [
        { id: "opt-1", text: { en: "Multi-megawatt Linear Induction / Synchronous Motors delivering electronically controlled, smooth, precise linear acceleration", hi: "मल्टी-मेगावाट रैखिक प्रेरण/तुल्यकालिक मोटरें जो इलेक्ट्रॉनिक रूप से नियंत्रित एवं सटीक रैखिक त्वरण देती हैं", bn: "মাল্টি-মেগাওয়াট লিনিয়ার ইন্ডাকশন/সিনক্রোনাস মোটর যা সুনির্দিষ্ট ও শক্তিশালী ত্বরণ প্রদান করে" } },
        { id: "opt-2", text: { en: "Giant coiled mechanical steel springs", hi: "विशालकाय स्टील स्प्रिंग्स", bn: "বিশাল মেকানিক্যাল স্প্রিং" } },
        { id: "opt-3", text: { en: "Heavy dynamite explosive charges", hi: "डायनामाइट के धमाके", bn: "ডিনামাইটের বিস্ফোরণ" } },
        { id: "opt-4", text: { en: "Trained marine dolphins pulling ropes", hi: "डॉल्फ़िन द्वारा खींचे जाने वाले रस्से", bn: "ডলফিনের টানা রশি" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "EMALS uses linear electric motor drive carriages along the carrier flight deck. Microprocessor frequency control tunes thrust precisely to aircraft weight, drastically reducing airframe stress.",
        hi: "EMALS भारी लीनियर इलेक्ट्रिक मोटरों का उपयोग करता है जो विमान के वजन के अनुसार बिल्कुल सटीक और चिकना त्वरण प्रदान करती हैं।",
        bn: "EMALS ব্যবস্থায় শক্তিশালী লিনিয়ার মোটর ব্যবহার করা হয় যা বিমানের কাঠামোর কোনো ক্ষতি না করে নিখুঁত ত্বরণে বিমান আকাশে ছুড়ে দেয়।"
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch10-l19-1',
      question: {
        en: 'A linear induction motor on an automated people mover has a pole pitch of τ = 0.25 m and is driven by an inverter at f = 60 Hz. Calculate: (a) The synchronous velocity v_s in m/s and km/h, and (b) The vehicle actual speed v (km/h) when operating at a linear slip of s = 0.12.',
        hi: 'एक LIM मोटर की पोल पिच τ = 0.25 m तथा आवृत्ति 60 Hz है। ज्ञात कीजिए: (a) तुल्यकालिक गति v_s (m/s एवं km/h), तथा (b) स्लिप s = 0.12 पर ट्रेन की वास्तविक गति v (km/h)।',
        bn: 'একটি LIM মোটরের পোল পিচ τ = ০.২৫ m এবং কম্পাঙ্ক f = ৬০ Hz। নির্ণয় করুন: (a) সিনক্রোনাস বেগ v_s (m/s ও km/h), এবং (b) স্লিপ s = ০.১২ হলে ট্রেনের প্রকৃত বেগ v (km/h)।'
      },
      hint: {
        en: 'Use v_s = 2 · f · τ, and v = v_s · (1 - s).',
        hi: 'v_s = 2·f·τ तथा v = v_s·(1 - s) का प्रयोग करें।',
        bn: 'v_s = ২·f·τ এবং v = v_s·(১ - s) সমীকরণ ব্যবহার করুন।'
      },
      answerKey: {
        en: '(a) v_s = 2 × 60 × 0.25 = 30 m/s = 108 km/h. (b) v = 108 km/h × (1 - 0.12) = 108 × 0.88 = 95.04 km/h (approx 95 km/h, or 26.4 m/s).',
        hi: '(a) v_s = 30 m/s (108 km/h)। (b) v = 108 × (1 - 0.12) = 95.04 km/h।',
        bn: '(a) v_s = ৩০ m/s (১০৮ km/h)। (b) v = ১০৮ × (১ - ০.১২) = ৯৫.০৪ km/h।'
      }
    },
    {
      id: 'pq-ch10-l19-2',
      question: {
        en: 'Explain the physical difference between Electromagnetic Suspension (EMS, attractive levitation) used in the German Transrapid and Electrodynamic Suspension (EDS, repulsive levitation) used in the Japanese JR Yamanashi Maglev.',
        hi: 'जर्मन ट्रांसरेपिड में प्रयुक्त EMS (आकर्षण उत्तोलन) तथा जापानी मैग्लेव में प्रयुक्त EDS (प्रतिकर्षण उत्तोलन) के बीच भौतिक अंतर स्पष्ट कीजिए।',
        bn: 'জার্মান ট্রান্সর‍্যাপিডে ব্যবহৃত EMS (আকর্ষণ ভিত্তিক) এবং জাপানি ম্যাগলেভে ব্যবহৃত EDS (বিকর্ষণ ভিত্তিক) লেভিটেশনের ভৌত পার্থক্য ব্যাখ্যা করুন।'
      },
      hint: {
        en: 'EMS pulls upward toward a ferromagnetic steel guide rail (unstable, requires active electromagnet feedback, levitates at zero speed). EDS pushes upward away from track coils via induced eddy currents (inherently stable, failsafe, requires high forward velocity to generate lift).',
        hi: 'EMS में चुंबक पटरी को ऊपर से अपनी ओर खींचते हैं (शून्य गति पर भी संभव)। EDS में गति के कारण पटरी में भंवर धाराएं चुंबकों को दूर धकेलती हैं (केवल तेज गति पर संभव)।',
        bn: 'EMS চুম্বক রেলকে নিজের দিকে আকর্ষণ করে শূন্যে ঝুলে থাকে (স্থির অবস্থায়ও ভাসে)। EDS গতিশীল অবস্থায় ট্র্যাকে এডি কারেন্ট তৈরি করে ওপরের দিকে বিকর্ষণ বলে ভাসিয়ে রাখে।'
      },
      answerKey: {
        en: 'EMS (Electromagnetic Suspension) uses controlled electromagnets mounted beneath the vehicle that pull upward toward ferromagnetic steel guideway rails via magnetic attraction. It is inherently open-loop unstable, requiring sub-millisecond sensor feedback to maintain a 15 mm air gap, but can levitate at standstill (v = 0). EDS (Electrodynamic Suspension) uses onboard superconducting magnets that induce repulsive eddy currents in passive guideway coils as the train moves. It is inherently stable due to Lenz’s law, creates a generous 100–150 mm air gap, but cannot levitate at low speeds (v < 100 km/h).',
        hi: 'EMS में विद्युत चुंबक पटरी को ऊपर की तरफ खींचते हैं, यह स्थिर अवस्था में भी हवा में उठ सकता है लेकिन इसे बहुत सटीक कंप्यूटर नियंत्रण चाहिए। EDS में ट्रेन के चुंबक गति के दौरान पटरी में भंवर धाराएं बनाते हैं जो ट्रेन को 10-15 सेमी ऊपर धकेलती हैं; यह अत्यंत स्थिर है परंतु कम गति पर पहियों की आवश्यकता होती है।',
        bn: 'EMS চুম্বক আকর্ষণ ব্যবহার করে যা স্টেশনে থেমে থাকা অবস্থায়ও ভাসে, তবে এর জন্য নিখুঁত সেন্সর কন্ট্রোল দরকার হয়। EDS গতিশীল অবস্থায় লেঞ্জের বিকর্ষণ বল ব্যবহার করে ১০-১৫ সেমি ওপরে ভাসে; এটি সম্পূর্ণ স্টেবল কিন্তু কম গতিতে চাকা প্রয়োজন।'
      }
    },
    {
      id: 'pq-ch10-l19-3',
      question: {
        en: 'Why does a double-sided linear induction motor (DLIM) with primaries on both sides of a central aluminum reaction plate virtually eliminate the catastrophic normal attractive forces experienced by single-sided LIMs (SLIMs)?',
        hi: 'डबल-साइडेड रैखिक मोटर (DLIM) में केंद्रीय एल्युमिनियम प्लेट के दोनों तरफ स्टेटर होने से सिंगल-साइडेड मोटर का भारी आकर्षण बल समाप्त क्यों हो जाता है?',
        bn: 'ডাবল-সাইডেড লিনিয়ার মোটরে (DLIM) অ্যালুমিনিয়াম পাতের দুই পাশে স্টেটর থাকার ফলে সিঙ্গেল-সাইডেডের মারাত্মক আকর্ষণ বল কীভাবে বাতিল হয়?'
      },
      hint: {
        en: 'Consider the symmetry of Maxwell stress magnetic attraction: F_attract1 pulls left, F_attract2 pulls right with equal magnitude.',
        hi: 'चुंबकीय आकर्षण की समरूपता पर विचार करें: दोनों तरफ के स्टेटर समान बल से विपरीत दिशा में खींचते हैं।',
        bn: 'ম্যাক্সওয়েল স্ট্রেসের প্রতিসাম্য বিবেচনা করুন: দুই পাশের সমান ও বিপরীতমুখী আকর্ষণ বল পরস্পরকে বাতিল করে দেয়।'
      },
      answerKey: {
        en: 'In a single-sided motor (SLIM), the heavy ferromagnetic steel backing plate is pulled forcefully toward the primary iron core by Maxwell stress (B²A/2μ_0), requiring massive mechanical bearings to prevent the track and bogie from slamming together. In a double-sided motor (DLIM), two identical primaries face each other across the central conductive sheet: their magnetic normal attraction forces are equal in magnitude and opposite in direction, canceling out to zero net transverse normal force.',
        hi: 'सिंगल-साइडेड मोटर में लोहे की प्लेट स्टेटर की तरफ बहुत तेज खिंचती है। डबल-साइडेड मोटर में दोनों तरफ के स्टेटर बराबर और उल्टी दिशा में खिंचाव लगाते हैं, जिससे कुल सामान्य बल शून्य हो जाता है।',
        bn: 'সিঙ্গেল-সাইডেডে স্টিলের প্লেট স্টেটরের দিকে তীব্রভাবে আকৃষ্ট হয়। ডাবল-সাইডেড মোটরে দুই পাশে দুটি অভিন্ন স্টেটর থাকায় তাদের আকর্ষণ বল সমান ও বিপরীতমুখী হয়ে একে অপরকে বাতিল করে দেয়।'
      }
    },
    {
      id: 'pq-ch10-l19-4',
      question: {
        en: 'Calculate the pole pitch τ (in meters) of a linear motor designed to produce a synchronous speed of 360 km/h when powered by a variable-frequency inverter operating at f = 100 Hz.',
        hi: '100 Hz आवृत्ति पर 360 km/h की तुल्यकालिक गति प्राप्त करने के लिए डिजाइन की गई लीनियर मोटर की पोल पिच τ (मीटर में) ज्ञात कीजिए।',
        bn: '১০০ Hz কম্পাঙ্কে ৩৬০ km/h সিনক্রোনাস বেগ অর্জনের জন্য একটি লিনিয়ার মোটরের প্রয়োজনীয় পোল পিচ τ (মিটার এককে) কত?'
      },
      hint: {
        en: 'Convert speed to m/s first (360 / 3.6), then solve for τ = v_s / (2 · f).',
        hi: 'पहले चाल को m/s में बदलें (360/3.6 = 100 m/s), फिर τ = v_s / (2·f) हल करें।',
        bn: 'প্রথমে বেগকে m/s এককে রূপান্তর করুন (৩৬০ / ৩.৬ = ১০০ m/s), তারপর τ = v_s / (২·f) বের করুন।'
      },
      answerKey: {
        en: 'v_s = 360 km/h / 3.6 = 100 m/s. τ = v_s / (2 · f) = (100 m/s) / (2 × 100 Hz) = 100 / 200 = 0.50 meters (50 cm).',
        hi: 'v_s = 100 m/s। τ = 100 / (2 × 100) = 0.50 मीटर (50 सेमी)।',
        bn: 'v_s = ১০০ m/s। τ = ১০০ / (২ × ১০০) = ০.৫০ মিটার (৫০ সেমি)।'
      }
    },
    {
      id: 'pq-ch10-l19-5',
      question: {
        en: 'Explain how electromagnetic regenerative braking in linear motor transit systems recovers energy and feeds it back into the electrical grid during deceleration.',
        hi: 'समझाइए कि लीनियर मोटर ट्रेनों में रीजनरेटिव ब्रेकिंग किस प्रकार गतिज ऊर्जा को बिजली में बदलकर वापस ग्रिड में भेजती है?',
        bn: 'ব্যাখ্যা করুন কীভাবে লিনিয়ার মোটর ট্রেন রিজেনারেটিভ ব্রেকিংয়ের মাধ্যমে গতিশক্তিকে বিদ্যুতে রূপান্তর করে গ্রিডে ফেরত পাঠায়।'
      },
      hint: {
        en: 'When the inverter lowers the traveling wave synchronous speed below the train’s actual speed (v_s < v), the slip becomes negative (s < 0), causing the motor to operate as an induction generator.',
        hi: 'जब इन्वर्टर तरंग की गति को ट्रेन की वास्तविक गति से कम कर देता है (v_s < v), तो स्लिप ऋणात्मक (s < 0) हो जाती है और मोटर जनरेटर बन जाती है।',
        bn: 'যখন ট্রাভেলিং তরঙ্গের গতি ট্রেনের প্রকৃত গতির চেয়ে কমিয়ে দেওয়া হয় (v_s < v), তখন স্লিপ ঋণাত্মক (s < ০) হয় এবং মোটরটি জেনারেটরে পরিণত হয়।'
      },
      answerKey: {
        en: 'When decelerating, the electronic variable-frequency drive reduces the frequency f so that the traveling wave synchronous speed drops below the train’s forward velocity (v_s < v). The slip becomes negative (s < 0). In this negative slip regime, the mechanical kinetic energy of the speeding train drives the machine as an induction generator, inducing electric power back into the stator coils, which is inverted and injected back into the transit electrical power grid, achieving huge energy savings with zero friction brake pad wear.',
        hi: 'ब्रेक लगाते समय इन्वर्टर आवृत्ति को घटा देता है जिससे तरंग की गति ट्रेन से धीमी हो जाती है। ऋणात्मक स्लिप (s < 0) के कारण मोटर जनरेटर की तरह काम करने लगती है और ट्रेन की गतिज ऊर्जा बिजली बनकर वापस ग्रिड में चली जाती है।',
        bn: 'ব্রেক করার সময় ইনভার্টার কম্পাঙ্ক কমিয়ে দিলে তরঙ্গের গতি ট্রেনের চেয়ে কমে যায়, ফলে স্লিপ ঋণাত্মক হয়। এই অবস্থায় মোটরটি জেনারেটর হিসেবে কাজ করে ট্রেনের গতিশক্তিকে বিদ্যুতে রূপান্তর করে গ্রিডে ফেরত পাঠায়।'
      }
    }
  ]
};
