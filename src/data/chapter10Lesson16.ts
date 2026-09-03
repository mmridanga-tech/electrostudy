import { Lesson } from '../types';

export const LESSON_ELECTROMAGNETIC_BRAKING_DAMPING: Lesson = {
  id: 'lsn-ch10-electromagnetic-braking-damping',
  topicId: 'ch10-electromagnetic-braking-damping',
  chapterId: 'ch-em-induction',
  order: 16,
  title: {
    en: 'Electromagnetic Braking, Eddy Current Damping & Train Retarders',
    hi: 'विद्युत चुंबकीय ब्रेकिंग, भंवर धारा डैम्पिंग एवं ट्रेन मंदक',
    bn: 'তড়িৎচৌম্বকীয় ব্রেকিং, এডি কারেন্ট ড্যাম্পিং ও ট্রেন রিটার্ডার'
  },
  description: {
    en: 'Comprehensive principles of non-contact kinetic energy dissipation, Lenz’s law opposing torque, linear velocity braking law F_b ∝ B²·v, PMMC deadbeat damping, and high-speed rail eddy brakes.',
    hi: 'बिना संपर्क के गतिज ऊर्जा अपव्यय, लेंज नियम विरोधी टॉर्क, रेखीय वेग ब्रेकिंग नियम F_b ∝ B²·v, PMMC डेडबीट डैम्पिंग तथा हाई-स्पीड रेलगाड़ियों में भंवर धारा ब्रेक का विस्तृत अध्ययन।',
    bn: 'ঘর্ষণহীন গতিশক্তি রূপান্তর, লেনজের সূত্রের বিরোধী টর্ক, বেগ-নির্ভর ব্রেকিং সূত্র F_b ∝ B²·v, PMMC মিটারের ডেডবিট ড্যাম্পিং ও দ্রুতগামী ট্রেনের এডি ব্রেকের বিশদ বিশ্লেষণ।'
  },
  estimatedMinutes: 30,
  easyExplanation: {
    en: "Have you ever wondered how 300 km/h bullet trains and towering roller coasters stop smoothly without squealing friction brake pads? They use electromagnetic braking! When a spinning metal disc or aluminum fin glides through a magnetic field, the changing flux instantly whips up eddy currents inside the metal. According to Lenz's Law, these swirling currents create their own magnetic field that pushes stubbornly backward against the moving magnet, creating an invisible, powerful magnetic drag. The faster the disc moves, the harder the brake pushes back. Because nothing touches, there is zero friction, zero dust, and zero brake wear!",
    hi: 'क्या आपने कभी सोचा है कि 300 किमी/घंटा की गति से दौड़ने वाली बुलेट ट्रेनें और विशाल रोलर कोस्टर बिना घिसे और बिना ब्रेक शू जले इतनी आसानी से कैसे रुक जाते हैं? वे विद्युत चुंबकीय ब्रेकिंग (Electromagnetic Braking) का उपयोग करते हैं! जब कोई घूमती हुई धातु की डिस्क चुंबकीय क्षेत्र से गुजरती है, तो धातु के अंदर भंवर धाराएं (Eddy Currents) बहने लगती हैं। लेंज के नियम के अनुसार, ये धाराएं एक ऐसा चुंबकीय बल बनाती हैं जो गति की ठीक उल्टी दिशा में धक्का मारता है। इससे एक अदृश्य, शक्तिशाली ब्रेक लगता है। चूंकि कोई भी पुर्जा आपस में नहीं टकराता, इसलिए इसमें शून्य घिसाव और शून्य शोर होता है!',
    bn: '৩০০ কিমি/ঘণ্টার বুলেট ট্রেন বা বিশালাকার রোলার কোস্টার কীভাবে কোনো ব্রেক প্যাডের ঘর্ষণ ছাড়াই নিঃশব্দে থেমে যায়? এর উত্তর হলো ইলেক্ট্রোম্যাগনেটিক ব্রেকিং! যখন একটি ধাতব চাকতি বা অ্যালুমিনিয়ামের পাত কোনো চৌম্বক ক্ষেত্রের মধ্য দিয়ে যায়, তখন ধাতুর ভেতর তাৎক্ষণিকভাবে এডি কারেন্ট সৃষ্টি হয়। লেনজের সূত্রানুসারে এই এডি কারেন্ট এমন একটি নিজস্ব চৌম্বক ক্ষেত্র তৈরি করে যা গতির বিপরীত দিকে তীব্র বাধা বল প্রয়োগ করে। কোনো শারীরিক সংস্পর্শ না থাকায় এতে ব্রেক প্যাডের কোনো ক্ষয় হয় না এবং কোনো শব্দ বা ধূলিকণা সৃষ্টি হয় না!'
  },
  detailedExplanation: {
    en: `1. Fundamental Physics & Lenz's Law Opposition:
Electromagnetic braking operates on Faraday's Law of Induction and the Lorentz force equation:
- A conductive, non-ferromagnetic disc (copper or aluminum) of conductivity σ and thickness w rotates at angular speed ω with linear perimeter velocity v.
- An electromagnet or permanent magnet applies a localized magnetic field B perpendicular to the disc face over a pole shoe area A_pole.
- As a segment of the disc enters the magnetic field:
  Flux through that patch increases (dΦ/dt > 0). By Lenz's Law, induced eddy currents circulate in a direction whose self-field opposes the applied field.
- As the segment exits the magnetic field:
  Flux decreases (dΦ/dt < 0). Induced eddy currents reverse direction to sustain the collapsing flux.
- Conduction electrons carrying current density J experience a magnetic Lorentz force per unit volume:
  f_lorentz = J × B
- By the Right-Hand Rule, J × B is directed exactly opposite to the velocity vector v of the disc!
- Result: An invisible, non-contact retarding force (braking torque) that transforms the vehicle's kinetic energy entirely into Joule thermal dissipation (I²R) within the disc.

2. Derivation of the Velocity-Dependent Braking Force:
Let a conductive sheet move at velocity v through a magnetic field B:
- Induced motional electric field: E = v × B = v · B
- By Ohm's Law in point form: J = σ · E = σ · v · B
- The opposing braking force on volume V_active = A_pole · w is:
  F_b = ∫ (J × B) · dV = J · B · V_active = (σ · v · B) · B · (A_pole · w)
  F_b = k_b · σ · A_pole · w · B² · v = c_b · B² · v (Newtons)
where c_b is a geometric constant depending on pole aspect ratio and sheet boundaries.

3. Vital Consequences of the Linear Velocity Law (F_b ∝ v):
- Self-Regulating Smooth Deceleration: At high speeds v, braking force F_b is enormous. As the vehicle slows down, F_b smoothly decreases in direct proportion to velocity, guaranteeing a jerk-free, ultra-comfortable stop without sudden lurching.
- Instantaneous Braking Power:
  P_b = F_b · v = c_b · B² · v² (Watts)
  At 300 km/h, braking power is 9 times higher than at 100 km/h!
- The Zero-Speed Standstill Limitation:
  Notice that as v → 0, F_b → 0.
  An electromagnetic eddy current brake CANNOT physically bring a vehicle to a 100% mechanical standstill, nor can it hold a vehicle parked on a steep incline. Therefore, electromagnetic brakes are strictly 'retarders' and dynamic service brakes; they must always be paired with a traditional mechanical friction brake for parking and final lock-up below ~5 km/h.

4. Industrial & Practical Implementations:
- High-Speed Rail (TGV, ICE 3, Shinkansen): Track retarders deploy electromagnets just 7 mm above the solid steel rails. Eddy currents induced directly in the track rail provide 150 kN of braking without wearing the wheels.
- Heavy Trucks & Buses (Telma Retarders): Heavy vehicles descending alpine grades risk 'brake fade' (where friction pads overheat and catch fire). Electromagnetic retarders absorb 80% of mountain braking duty safely.
- Roller Coasters: Neodymium permanent magnet fins mounted on the track induce eddy currents in copper fins under the train cars. Because permanent magnets require zero electricity, the brake is 100% fail-safe even during total power grid blackouts!
- Galvanometer & PMMC Damping: Moving coil meters wrap their winding around a light aluminum former. As the needle deflects, eddy currents in the aluminum former produce 'deadbeat damping'—stopping needle oscillation in less than 0.2 seconds.`,

    hi: `1. भौतिक सिद्धांत एवं लेंज नियम:
विद्युत चुंबकीय ब्रेकिंग फैराडे और लॉरेंट्ज़ बल के सिद्धांत पर कार्य करती है:
- जब कोई चालक धातु (तांबा या एल्यूमीनियम) किसी चुंबकीय क्षेत्र B में वेग v से गति करता है, तो उसमें भंवर धाराएं (J = σ·v·B) उत्पन्न हो जाती हैं।
- इन धाराओं पर चुंबकीय क्षेत्र द्वारा एक लॉरेंट्ज़ बल (F = J × B) लगाया जाता है जो गति की ठीक विपरीत दिशा में कार्य करता है।
- गतिज ऊर्जा सीधे डिस्क के अंदर जूल ऊष्मा (I²R) में बदलकर बिखर जाती है।

2. ब्रेकिंग बल का सूत्र:
  F_b = c_b · σ · B² · v (न्यूटन)
ब्रेकिंग शक्ति:
  P_b = F_b · v = c_b · σ · B² · v² (वाट)

3. मुख्य विशेषताएं एवं सीमाएं:
- गति के समानुपाती: गति जितनी तेज होगी, ब्रेक उतना ही मजबूत लगेगा।
- शून्य गति पर अप्रभावी: जब गति v = 0 हो जाती है, तो ब्रेकिंग बल F_b भी शून्य हो जाता है। अतः गाड़ी को ढलान पर पूरी तरह पार्क रखने के लिए यांत्रिक हैंडब्रेक की आवश्यकता हमेशा बनी रहती है।
- शून्य घिसाव: पुर्जों के बीच कोई रगड़ न होने से ब्रेक कभी घिसते या जलते नहीं हैं।

4. अनुप्रयोग:
- बुलेट ट्रेन ट्रैक ब्रेक, रोलर कोस्टर (स्थायी चुंबक), भारी ट्रकों के टेलमा रिटार्डर एवं गैल्वेनोमीटर में सुई का दोलन रोकने (डेडबीट डैम्पिंग) हेतु।`,

    bn: `১. মূলনীতি ও লেনজের সূত্র:
চৌম্বক ক্ষেত্রে পরিবাহী চাকতি ঘুরলে আবিষ্ট এডি কারেন্ট লরেঞ্জ বলের (F = J × B) মাধ্যমে গতির উল্টো দিকে বাধা সৃষ্টি করে। ফলে কোনো ঘর্ষণ ছাড়াই গতিশক্তি তাপে রূপান্তরিত হয়।

২. ব্রেকিং বলের সূত্র:
  F_b = c_b · σ · B² · v
ব্রেকিং ক্ষমতা:
  P_b = c_b · σ · B² · v²

৩. বৈশিষ্ট্য ও সীমাবদ্ধতা:
- বেগ যত বেশি, ব্রেকিং বল তত তীব্র।
- গাড়ি সম্পূর্ণ থেমে গেলে (v = ০) ব্রেকিং বল শূন্য হয়ে যায়। তাই পার্কিংয়ের জন্য মেকানিক্যাল ব্রেকের প্রয়োজন হয়।
- বুলেট ট্রেন, রোলার কোস্টার এবং পিএমএমসি মিটারের ডেডবিট ড্যাম্পিংয়ে এটি ব্যবহৃত হয়।`
  },
  formulas: [
    {
      id: 'f-em-braking-force-law',
      symbol: 'F_b',
      expression: 'F_b = c_b · σ · B² · v',
      title: {
        en: 'Electromagnetic Eddy Current Braking Force Law',
        hi: 'विद्युत चुंबकीय भंवर धारा ब्रेकिंग बल नियम',
        bn: 'তড়িৎচৌম্বকীয় এডি কারেন্ট ব্রেকিং বল সূত্র'
      },
      description: {
        en: 'Opposing retarding force generated by eddy currents, proportional to conductivity, square of magnetic field, and velocity',
        hi: 'भंवर धाराओं द्वारा उत्पन्न विरोधी मंदक बल, जो चालकता, चुंबकीय क्षेत्र के वर्ग एवं वेग के समानुपाती होता है',
        bn: 'এডি কারেন্ট দ্বারা সৃষ্ট বিরোধী বাধা বল, যা পরিবাহিতা, চৌম্বক ক্ষেত্রের বর্গ ও বেগের সমানুপাতিক'
      },
      variables: [
        { symbol: 'F_b', name: { en: 'Braking retarding force (N)', hi: 'मंदक ब्रेकिंग बल (N)', bn: 'ব্রেকিং বাধা বল (নিউটন)' } },
        { symbol: 'c_b', name: { en: 'Geometric pole footprint constant (m³)', hi: 'ज्यामितीय नियतांक (m³)', bn: 'জ্যামিতিক ধ্রুবক (m³)' } },
        { symbol: 'σ', name: { en: 'Electrical conductivity of metal (S/m)', hi: 'विद्युत चालकता (S/m)', bn: 'ধাতুর পরিবাহিতা (S/m)' } },
        { symbol: 'B', name: { en: 'Applied magnetic flux density (T)', hi: 'लागू फ्लक्स घनत्व (T)', bn: 'প্রযুক্ত ফ্লাক্স ঘনত্ব (T)' } },
        { symbol: 'v', name: { en: 'Linear relative velocity (m/s)', hi: 'सापेक्ष रेखीय वेग (m/s)', bn: 'আপেক্ষিক রৈখিক বেগ (m/s)' } }
      ]
    },
    {
      id: 'f-em-braking-power-dissipation',
      symbol: 'P_b',
      expression: 'P_b = F_b · v = c_b · σ · B² · v²',
      title: {
        en: 'Dynamic Braking Power Dissipation (Quadratic in Velocity)',
        hi: 'गतिक ब्रेकिंग शक्ति व्यय (वेग में द्विघात)',
        bn: 'ডায়নামিক ব্রেকিং শক্তি রূপান্তর (বেগের বর্গের সমানুপাতিক)'
      },
      description: {
        en: 'Rate of kinetic energy converted into thermal Joule heat per second',
        hi: 'प्रति सेकंड ऊष्मा में परिवर्तित होने वाली गतिज ऊर्जा की दर',
        bn: 'প্রতি সেকেন্ডে তাপে রূপান্তরিত গতিশক্তির হার'
      },
      variables: [
        { symbol: 'P_b', name: { en: 'Thermal dissipation power (Watts)', hi: 'ऊष्मा शक्ति (वाट)', bn: 'তাপীয় অপচয় ক্ষমতা (ওয়াট)' } },
        { symbol: 'v', name: { en: 'Velocity (m/s)', hi: 'गति (m/s)', bn: 'বেগ (m/s)' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-pmmc-deadbeat-damping',
      title: {
        en: 'Eddy Current Damping in PMMC Instruments',
        hi: 'PMMC उपकरणों में भंवर धारा डैम्पिंग (शमन)',
        bn: 'PMMC মিটারে এডি কারেন্ট ড্যাম্পিং'
      },
      content: {
        en: `Why analog electrical meters (PMMC) use aluminum formers:
1. When current enters a galvanometer or PMMC meter, the moving coil deflects due to motor torque.
2. Because of mechanical inertia, the needle would overshoot and oscillate back and forth for several seconds before settling, making quick readings impossible.
3. To eliminate oscillations, the coil is wound on a lightweight aluminum frame (former).
4. As the aluminum frame pivots between the permanent magnet poles, eddy currents are induced inside the closed aluminum loop.
5. By Lenz's Law, these eddy currents produce a damping torque proportional to angular speed (T_d = c · dθ/dt) that strictly opposes the motion.
6. When the needle is moving fast, damping torque is strong; when the needle reaches steady state (dθ/dt = 0), damping torque drops to zero.
7. This produces ideal 'deadbeat damping'—the needle sweeps directly to the exact value in a fraction of a second without a single overshoot!`,
        hi: `एनालॉग मीटरों (PMMC) में एल्यूमीनियम फ्रेम क्यों होता है?
1. धारा प्रवाहित होने पर मीटर की सुई विक्षेपित होती है, किंतु जड़त्व के कारण वह आगे-पीछे कांपती रहती है।
2. इस दोलन को रोकने के लिए कॉइल को एक हल्के एल्यूमीनियम फ्रेम पर लपेटा जाता है।
3. चुंबक के बीच घूमते ही एल्यूमीनियम में भंवर धाराएं उत्पन्न हो जाती हैं।
4. लेंज के नियम के अनुसार ये धाराएं गति का कड़ा विरोध करती हैं (T_d ∝ dθ/dt)।
5. जैसे ही सुई रुकती है, डैम्पिंग टॉर्क शून्य हो जाता है। इससे सुई बिना किसी कंपकंपी के तुरंत सही मान पर स्थिर हो जाती है—इसे "डेडबीट डैम्पिंग" कहते हैं।`,
        bn: `PMMC মিটারে অ্যালুমিনিয়াম ফ্রেম ব্যবহারের কারণ:
কয়েলের সাথে সংযুক্ত কাঁটার জড়তাজনিত দোলন দূর করতে কয়েলটি একটি হালকা অ্যালুমিনিয়াম ফর্মারের ওপর প্যাঁচানো হয়। ফর্মারটি চুম্বকের ভেতর ঘুরলে তাতে এডি কারেন্ট সৃষ্টি হয় যা কাঁটার অতিরিক্ত দোলন নিমেষে থামিয়ে সুনির্দিষ্ট মানে স্থির করে দেয় (ডেডবিট ড্যাম্পিং)।`
      },
      schematicId: 'circuit-ch10-em-braking-damping-retarder'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-embraking-1',
      problem: {
        en: 'A high-speed train car uses linear eddy current track brakes. When activated, four electromagnet modules project an axial magnetic field B = 0.9 T into the conductive steel rail head over a pole area A = 0.08 m² with active depth t = 25 mm (conductivity σ = 5.0 × 10⁶ S/m). The train moves at initial velocity v_0 = 72 m/s (259.2 km/h). Accounting for the realistic closed-loop eddy return path geometry factor k_g = 0.05, determine: (a) The retarding braking force F_b produced by a single brake module, (b) The total braking force and initial deceleration of the 45,000 kg train car equipped with 4 modules, and (c) The instantaneous electrical heat power P_b dissipated in the rails.',
        hi: 'एक हाई-स्पीड ट्रेन कार ट्रैक में भंवर धारा ब्रेक का उपयोग करती है। चार मॉड्यूल 0.9 T का चुंबकीय क्षेत्र 0.08 m² क्षेत्रफल और 25 mm गहराई में रेल पर डालते हैं (चालकता σ = 5.0 × 10⁶ S/m)। ट्रेन 72 m/s (259.2 km/h) की गति से चल रही है। ज्यामितीय कारक k_g = 0.05 मानते हुए ज्ञात कीजिए: (a) एक मॉड्यूल द्वारा लगाया गया ब्रेकिंग बल F_b, (b) 45,000 kg की ट्रेन कार के 4 मॉड्यूल द्वारा कुल बल और प्रारंभिक मंदन (deceleration), तथा (c) रेल में उत्पन्न तात्कालिक ऊष्मा शक्ति P_b।',
        bn: 'একটি দ্রুতগামী ট্রেনের বগিতে লিনিয়ার এডি কারেন্ট ট্র্যাক ব্রেক রয়েছে। সক্রিয় অবস্থায় ৪টি মডিউল ০.৯ T চৌম্বক ক্ষেত্র ০.০৮ m² ক্ষেত্রফল এবং ২৫ mm গভীরতার ইস্পাত লাইনে প্রয়োগ করে (পরিবাহিতা σ = ৫.০ × ১০⁶ S/m)। ট্রেনের প্রারম্ভিক বেগ v_0 = ৭২ m/s (২৫৯.২ km/h)। জ্যামিতিক গুণক k_g = ০.০৫ বিবেচনা করে নির্ণয় কর: (a) একটি একক মডিউলের মন্দনকারী ব্রেকিং বল F_b, (b) ৪৫,০০০ kg ওজনের বগিতে ৪টি মডিউল দ্বারা মোট ব্রেকিং বল ও প্রারম্ভিক ত্বরণ হ্রাস (মন্দন), এবং (c) লাইনে তাপে রূপান্তরিত তাৎক্ষণিক বিদ্যুৎ ক্ষমতা P_b।'
      },
      givenValues: {
        en: 'B = 0.9 T, A = 0.08 m², t = 0.025 m, σ = 5.0 × 10⁶ S/m, v_0 = 72 m/s, k_g = 0.05, M = 45,000 kg, 4 modules',
        hi: 'B = 0.9 T, A = 0.08 m², t = 0.025 m, σ = 5.0 × 10⁶ S/m, v_0 = 72 m/s, k_g = 0.05, M = 45000 kg, 4 मॉड्यूल',
        bn: 'B = ০.৯ T, A = ০.০৮ m², t = ০.০২৫ m, σ = ৫.০ × ১০⁶ S/m, v_0 = ৭২ m/s, k_g = ০.০৫, M = ৪৫,০০০ kg, ৪টি মডিউল'
      },
      solution: {
        en: `1. Calculate active conductive interaction volume:
   Vol = A · t = 0.08 m² · 0.025 m = 0.002 m³
2. Calculate braking force per unit using the linear eddy formulation:
   F_b = k_g · σ · B² · Vol · v_0
   F_b = 0.05 · (5.0 × 10⁶) · (0.9)² · 0.002 · 72
   F_b = 0.05 · (5.0 × 10⁶) · 0.81 · 0.002 · 72
   F_b = 250,000 · 0.81 · 0.144 = 29,160 N = 29.16 kN per module
3. Calculate total braking force for 4 modules:
   F_total = 4 · F_b = 4 · 29,160 N = 116,640 N = 116.64 kN
4. Calculate vehicle deceleration rate:
   a_dec = F_total / M = 116,640 N / 45,000 kg = 2.592 m/s² ≈ 2.59 m/s²
   (Comfortable, highly effective high-speed emergency rail deceleration!)
5. Calculate instantaneous dissipated electrical thermal power:
   P_b = F_total · v_0 = 116,640 N · 72 m/s = 8,398,080 W ≈ 8.40 MW`,
        hi: `1. सक्रिय चालक आयतन:
   Vol = A × t = 0.08 × 0.025 = 0.002 m³
2. प्रति मॉड्यूल ब्रेकिंग बल:
   F_b = k_g × σ × B² × Vol × v_0
   F_b = 0.05 × (5.0 × 10⁶) × (0.9)² × 0.002 × 72 = 29,160 N = 29.16 kN
3. 4 मॉड्यूल का कुल ब्रेकिंग बल:
   F_total = 4 × 29.16 kN = 116.64 kN
4. मंदन दर:
   a_dec = 116,640 N / 45,000 kg = 2.592 m/s²
5. तात्कालिक ऊष्मा शक्ति:
   P_b = 116,640 N × 72 m/s ≈ 8.40 MW`,
        bn: `১. সক্রিয় পরিবাহী আয়তন:
   Vol = A × t = ০.০৮ × ০.০২৫ = ০.০০২ m³
২. প্রতি মডিউলে ব্রেকিং বল:
   F_b = k_g × σ × B² × Vol × v_0
   F_b = ০.০৫ × (৫.০ × ১০⁶) × (০.৯)² × ০.০০২ × ৭২ = ২৯,১৬০ N = ২৯.১৬ kN
৩. ৪টি মডিউলের মোট ব্রেকিং বল:
   F_total = ৪ × ২৯.১৬ kN = ১১৬.৬৪ kN
৪. গাড়ির মন্দন:
   a_dec = ১১৬,৬৪০ N / ৪৫,০০০ kg = ২.৫৯২ m/s² ≈ ২.৫৯ m/s²
৫. লাইনে অপচয়িত তাপীয় ক্ষমতা:
   P_b = ১১৬,৬৪০ N × ৭২ m/s ≈ ৮.৪০ MW`
      },
      finalAnswer: {
        en: 'F_total = 116.64 kN; Deceleration a = 2.59 m/s²; Thermal Power P_b = 8.40 MW',
        hi: 'कुल बल F_total = 116.64 kN; मंदन a = 2.59 m/s²; तापीय शक्ति P_b = 8.40 MW',
        bn: 'মোট বল F_total = ১১৬.৬৪ kN; মন্দন a = ২.৫৯ m/s²; তাপীয় ক্ষমতা P_b = ৮.৪০ MW'
      }
    },
    {
      id: 'ex-embraking-2',
      problem: {
        en: 'A permanent-magnet moving-coil (PMMC) galvanometer has a moving coil wound on a lightweight rectangular aluminum former of length L = 30 mm and width W = 25 mm. The closed aluminum former frame has an electrical resistance R_frame = 1.5 mΩ (1.5 × 10⁻³ Ω). The radial uniform magnetic flux density in the meter air gap is B = 0.4 T. (a) Derive the expression for the damping torque T_d as a function of the angular velocity ω = dθ/dt. (b) Calculate the numerical damping coefficient c_d = T_d / ω. (c) If the pointer swings at ω = 12 rad/s as it passes toward its equilibrium mark, calculate the instantaneous damping torque T_d. (d) Explain why this damping creates zero steady-state pointer reading error.',
        hi: 'एक PMMC गैल्वेनोमीटर में एल्यूमीनियम फ्रेम की लंबाई L = 30 mm और चौड़ाई W = 25 mm है। बंद फ्रेम का प्रतिरोध R_frame = 1.5 mΩ है। एयर गैप में चुंबकीय फ्लक्स घनत्व B = 0.4 T है। (a) कोणीय वेग ω = dθ/dt के फलन के रूप में डैम्पिंग टॉर्क T_d का सूत्र व्युत्पन्न कीजिए। (b) डैम्पिंग गुणांक c_d = T_d / ω की गणना कीजिए। (c) यदि संतुलन की ओर बढ़ते समय सुई का वेग ω = 12 rad/s हो, तो तात्कालिक टॉर्क T_d ज्ञात कीजिए। (d) समझाइए कि यह डैम्पिंग स्थिर अवस्था में शून्य त्रुटि क्यों सुनिश्चित करती है।',
        bn: 'একটি PMMC গ্যালভানোমিটারের কয়েলটি L = ৩০ mm দৈর্ঘ্য এবং W = ২৫ mm প্রস্থ বিশিষ্ট আয়তাকার অ্যালুমিনিয়াম ফর্মারের ওপর জড়ানো। ফ্রেমটির নিজস্ব রোধ R_frame = ১.৫ mΩ। এয়ার গ্যাপে সুষম চৌম্বক ফ্লাক্স ঘনত্ব B = ০.৪ T। (a) কৌণিক বেগ ω = dθ/dt এর সাপেক্ষে ড্যাম্পিং টর্ক T_d এর সমীকরণ প্রতিপাদন কর। (b) ড্যাম্পিং সহগ c_d = T_d / ω নির্ণয় কর। (c) সাম্যাবস্থার দিকে যাওয়ার সময় কাঁটার কৌণিক বেগ ω = ১২ rad/s হলে তাৎক্ষণিক ড্যাম্পিং টর্ক T_d নির্ণয় কর। (d) ব্যাখ্যা কর কেন এই ড্যাম্পিং নির্দেশকের স্থির অবস্থায় কোনো পাঠ্য ত্রুটি সৃষ্টি করে না।'
      },
      givenValues: {
        en: 'L = 0.030 m, W = 0.025 m, R_frame = 1.5 × 10⁻³ Ω, B = 0.4 T, ω = 12 rad/s',
        hi: 'L = 0.030 m, W = 0.025 m, R_frame = 1.5 × 10⁻³ Ω, B = 0.4 T, ω = 12 rad/s',
        bn: 'L = ০.০৩০ m, W = ০.০২৫ m, R_frame = ১.৫ × ১০⁻³ Ω, B = ০.৪ T, ω = ১২ rad/s'
      },
      solution: {
        en: `1. Calculate former cross-sectional area:
   A = L · W = 0.030 m · 0.025 m = 7.5 × 10⁻⁴ m²
2. Derive induced EMF and eddy current in the moving former:
   Linear velocity of the two active sides of the frame: v = ω · (W / 2)
   Induced motional EMF across both sides:
   e = 2 · (B · L · v) = 2 · B · L · (ω · W / 2) = B · (L · W) · ω = B · A · ω
   Circulating eddy current in the short-circuited aluminum loop:
   I_eddy = e / R_frame = (B · A · ω) / R_frame
3. Derive damping torque expression and calculate damping coefficient c_d:
   T_d = I_eddy · B · A = [(B · A · ω) / R_frame] · B · A = (B² · A² / R_frame) · ω
   c_d = T_d / ω = (B² · A²) / R_frame
   c_d = [(0.4)² · (7.5 × 10⁻⁴)²] / (1.5 × 10⁻³)
   c_d = [0.16 · (5.625 × 10⁻⁷)] / (1.5 × 10⁻³) = (9.0 × 10⁻⁸) / (1.5 × 10⁻³) = 6.0 × 10⁻⁵ N·m·s/rad
4. Calculate instantaneous damping torque at ω = 12 rad/s:
   T_d = c_d · ω = (6.0 × 10⁻⁵ N·m·s/rad) · (12 rad/s) = 7.20 × 10⁻⁴ N·m = 0.72 mN·m
5. Physical conclusion on steady-state accuracy:
   When the meter needle reaches its final measured rest position, angular velocity is zero (ω = dθ/dt = 0).
   Consequently, e = 0, I_eddy = 0, and T_d = 0. The damping force vanishes completely at rest, introducing zero frictional offset error and enabling absolute reading accuracy!`,
        hi: `1. फ्रेम का क्षेत्रफल:
   A = L × W = 0.030 × 0.025 = 7.5 × 10⁻⁴ m²
2. प्रेरित ईएमएफ और भंवर धारा:
   e = B × A × ω
   I_eddy = (B × A × ω) / R_frame
3. डैम्पिंग टॉर्क और गुणांक c_d:
   T_d = (B² × A² / R_frame) × ω
   c_d = [(0.4)² × (7.5 × 10⁻⁴)²] / (1.5 × 10⁻³) = 6.0 × 10⁻⁵ N·m·s/rad
4. 12 rad/s पर तात्कालिक टॉर्क:
   T_d = 6.0 × 10⁻⁵ × 12 = 7.20 × 10⁻⁴ N·m = 0.72 mN·m
5. निष्कर्ष: जब सुई रुकती है (ω = 0), तो T_d = 0 हो जाता है। अतः यह डैम्पिंग बिना किसी घर्षण त्रुटि के सुई को सटीक मान पर स्थिर करती है।`,
        bn: `১. ফর্মারের ক্ষেত্রফল:
   A = L × W = ০.০৩০ × ০.০২৫ = ৭.৫ × ১০⁻⁴ m²
২. আবিষ্ট ইএমএফ ও এডি কারেন্ট:
   e = B × A × ω
   I_eddy = (B × A × ω) / R_frame
৩. ড্যাম্পিং টর্ক ও সহগ c_d:
   T_d = (B² × A² / R_frame) × ω
   c_d = [(০.৪)² × (৭.৫ × ১০⁻⁴)²] / (১.৫ × ১০⁻³) = ৬.০ × ১০⁻⁵ N·m·s/rad
৪. ১২ rad/s গতিতে তাৎক্ষণিক টর্ক:
   T_d = ৬.০ × ১০⁻⁵ × ১২ = ৭.২০ × ১০⁻⁴ N·m = ০.৭২ mN·m
৫. পাঠ্যের নিখুঁততা: যখন কাঁটা স্থির মানে পৌঁছায় (ω = ০), তখন আবিষ্ট ভোল্টেজ ও ড্যাম্পিং বল পুরোপুরি শূন্য হয়ে যায়। ফলে কোনো ঘর্ষণজনিত পাঠ্য ত্রুটি থাকে না।`
      },
      finalAnswer: {
        en: 'c_d = 6.0 × 10⁻⁵ N·m·s/rad; T_d(12 rad/s) = 0.72 mN·m; Zero error at rest (ω = 0)',
        hi: 'c_d = 6.0 × 10⁻⁵ N·m·s/rad; T_d = 0.72 mN·m; विश्राम अवस्था में शून्य त्रुटि',
        bn: 'c_d = ৬.০ × ১০⁻⁵ N·m·s/rad; T_d = ০.৭২ mN·m; স্থির অবস্থায় ত্রুটি শূন্য'
      }
    }
  ],
  practicalApplications: {
    en: [
      'High-Speed Bullet Train Linear Eddy Brakes: Shinkansen, ICE 3, and TGV trains employ track-mounted eddy current brakes for wear-free deceleration from 300+ km/h.',
      'Amusement Park Roller Coaster Final Drop Brakes: Passive copper or aluminum fins mounted under coaster cars slicing through permanent neodymium magnet tracks guarantee 100% fail-safe stopping without electricity.',
      'Moving-Coil Galvanometer & PMMC Instrument Damping: Aluminum coil formers eliminate needle hunting and oscillation, bringing the pointer to a deadbeat rest in milliseconds.',
      'Commercial Heavy Truck & Bus Transmission Retarders: Telma electromagnetic retarders absorb downhill gravitational kinetic energy without burning or wearing mechanical brake pads.',
      'Gym Exercise Rowing Machines & Ergometers: Silent, infinitely adjustable, non-wearing magnetic resistance providing smooth physiological load curves.'
    ],
    hi: [
      'हाई-स्पीड बुलेट ट्रेन ट्रैक ब्रेक: शिंकानसेन और ICE 3 ट्रेनें 300+ km/h की गति से बिना किसी घर्षण घिसावट के रुकने के लिए ट्रैक-माउंटेड भंवर धारा ब्रेक का उपयोग करती हैं।',
      'रोलर कोस्टर अंतिम ब्रेक: रोलर कोस्टर की गाड़ियों में तांबे के पंख लगे होते हैं जो शक्तिशाली नियोडिमियम चुंबकों के बीच से गुजरकर बिना बिजली के 100% सुरक्षित रूप से रुकते हैं।',
      'गैल्वेनोमीटर और PMMC मीटर में डेडबीट डैम्पिंग: एल्यूमीनियम का फ्रेम सुई के दोलन को तुरंत समाप्त करके उसे कुछ ही मिलीसेकंड में सही पाठ्यांक पर रोक देता है।',
      'भारी ट्रकों और बसों के ट्रांसमिशन रिटार्डर: टेलमा इलेक्ट्रोमैग्नेटिक रिटार्डर पहाड़ी ढलानों पर बिना ब्रेक पैड को गर्म किए वाहनों की गति को नियंत्रित रखते हैं।',
      'जिम एक्सरसाइज साइकिल और रोइंग मशीनें: बिना आवाज वाली, घिसावट-रहित और सुचारू प्रतिरोध प्रदान करने वाली चुंबकीय ब्रेकिंग।'
    ],
    bn: [
      'উচ্চগতির বুলেট ট্রেনের ট্র্যাক ব্রেক: শিনকানসেন ও ICE 3 দ্রুতগামী ট্রেনগুলো ৩০০+ km/h গতি থেকে সম্পূর্ণ ঘর্ষণহীনভাবে থামতে এডি কারেন্ট ট্র্যাক ব্রেক ব্যবহার করে।',
      'অ্যামিউজমেন্ট পার্কের রোলার কোস্টার ব্রেক: গাড়ির নিচে তামার ফিন স্থায়ী নিওডিমিয়াম চুম্বকের মধ্য দিয়ে চলার ফলে বিদ্যুৎ বিভ্রাটেও শতভাগ নিরাপদে ট্রেনটি থেমে যায়।',
      'গ্যালভানোমিটার ও PMMC মিটারের ডেডবিট ড্যাম্পিং: অ্যালুমিনিয়াম ফর্মার কাঁটার অবাঞ্ছিত দোলন থামিয়ে চোখের পলকে সুনির্দিষ্ট পাঠে স্থির করে।',
      'ভারী ট্রাক ও বাসের ইলেক্ট্রোম্যাগনেটিক রিটার্ডার: তেলমা রিটার্ডার পাহাড়ি উতরাইতে মেকানিক্যাল ব্রেক প্যাডকে অতিরিক্ত উত্তপ্ত না করে গতি নিয়ন্ত্রণে রাখে।',
      'জিম ও ব্যায়ামাগারের রোয়িং মেশিন: কোনো ঘর্ষণজনিত ক্ষয় ছাড়াই দীর্ঘস্থায়ী ও মসৃণ শারীরিক কসরতের জন্য ব্যবহৃত চৌম্বকীয় এডি কারেন্ট রেজিস্ট্যান্স।'
    ]
  },
  importantPoints: {
    en: [
      'Fundamental mechanism: Motion of a bulk conductor through a magnetic field induces circulating eddy currents whose opposing magnetic fields create a retarding Lorentz force (Lenz’s law).',
      'Linear speed dependency: At moderate operational speeds, retarding force and braking torque are strictly proportional to velocity: F_b ∝ B² · σ · v and T_b ∝ B² · σ · ω.',
      'Frictionless & wear-free: Because there is zero physical mechanical contact, electromagnetic brakes eliminate pad wear, brake dust pollution, maintenance downtime, and thermal brake fade.',
      'Zero braking force at standstill: Because braking force requires conductor motion relative to the field (dΦ/dt ∝ v), F_b drops to zero when v = 0; thus, a mechanical friction brake is always required for parking.',
      'Deadbeat damping principle: In measuring instruments, eddy current damping provides critical damping (damping torque proportional to dθ/dt), preventing needle oscillation without introducing steady-state friction bias.',
      'Energy dissipation mechanism: Kinetic energy of the moving vehicle or rotor is converted directly into Joule heat (I²R) within the conducting track, disc, or drum.'
    ],
    hi: [
      'मूल सिद्धांत: चुंबकीय क्षेत्र में गतिमान चालक में उत्पन्न भंवर धाराएं लेंज के नियम के अनुसार गति का विरोध करने वाला विरोधी लोरेंत्ज़ बल बनाती हैं।',
      'रैखिक गति निर्भरता: मध्यम गति पर ब्रेकिंग बल और टॉर्क वेग के सीधे समानुपाती होते हैं: F_b ∝ B² · σ · v तथा T_b ∝ B² · σ · ω।',
      'घर्षण-रहित और घिसावट-मुक्त: कोई भौतिक संपर्क न होने के कारण यह ब्रेक कभी नहीं घिसते और इनमें ब्रेक पैड जलने या खराब होने की कोई समस्या नहीं होती।',
      'स्थिर अवस्था में शून्य बल: चूंकि बल गति पर निर्भर करता है, इसलिए वाहन के रुकते ही (v = 0) ब्रेकिंग बल शून्य हो जाता है; अतः पार्किंग के लिए मैकेनिकल ब्रेक आवश्यक है।',
      'डेडबीट डैम्पिंग: उपकरणों में भंवर धारा डैम्पिंग सुई के दोलन को तुरंत रोकती है और रुकने पर शून्य टॉर्क पैदा करके माप को शत-प्रतिशत सटीक रखती है।',
      'ऊर्जा का रूपांतरण: गतिज ऊर्जा सीधे चालक के भीतर जूल तापीय ऊर्जा (I²R) में परिवर्तित होकर वातावरण में विकिरित हो जाती है।'
    ],
    bn: [
      'মূল কৌশল: চৌম্বক ক্ষেত্রে পরিবাহীর গতির ফলে সৃষ্ট এডি কারেন্ট লেনজের সূত্র মতে গতির বিপরীতে একটি শক্তিশালী লরেঞ্জ মন্দন বল সৃষ্টি করে।',
      'বেগের সাথে রৈখিক সম্পর্ক: স্বাভাবিক গতিসীমার মধ্যে ব্রেকিং বল ও টর্ক বেগের সরাসরি সমানুপাতিক: F_b ∝ B² · σ · v এবং T_b ∝ B² · σ · ω।',
      'সম্পূর্ণ ঘর্ষণহীন ও ক্ষয়হীন: কোনো যান্ত্রিক ঘর্ষণীয় সংস্পর্শ না থাকায় ব্রেক প্যাড ক্ষয় হয় না, কোনো ব্রেক ডাস্ট দূষণ হয় না এবং ব্রেক ফেড ঘটে না।',
      'স্থির অবস্থায় শূন্য বল: আপেক্ষিক গতির ওপর আবেশ নির্ভরশীল হওয়ায় বেগ শূন্য হলে (v = ০) বাধা বলও শূন্য হয়ে যায়; ফলে গাড়ি পার্কিংয়ে যান্ত্রিক ব্রেক অপরিহার্য।',
      'ডেডবিট ড্যাম্পিং নীতি: পরিমাপক যন্ত্রে এডি কারেন্ট কাঁটার অপ্রয়োজনীয় কাঁপন থামিয়ে দেয় এবং স্থির অবস্থায় বল শূন্য হওয়ায় কোনো পাঠ্য ত্রুটি থাকে না।',
      'শক্তি রূপান্তর: গতিশীল বস্তুর গতিশক্তি পরিবাহীর অভ্যন্তরে সরাসরি জুল তাপে (I²R) রূপান্তরিত হয়ে বায়ুমণ্ডলে ছড়িয়ে পড়ে।'
    ]
  },
  commonMistakes: {
    en: [
      'Assuming eddy current brakes can hold a parked vehicle on an incline: When velocity v = 0, induced EMF and eddy currents are exactly zero, producing zero holding force; a mechanical parking lock is mandatory.',
      'Believing eddy current braking works only on iron or magnetic materials: Non-magnetic high conductors like copper and aluminum produce the strongest eddy current braking because of their superior electrical conductivity (σ).',
      'Confusing eddy current damping with mechanical friction: Friction exerts a static resistance that causes pointer sticking and zero-point errors; eddy current damping vanishes at rest (dθ/dt = 0), guaranteeing zero reading bias.',
      'Neglecting heat dissipation at sustained high speeds: While brake pads do not wear, all dissipated kinetic energy becomes intense Joule heat in the rails or rotor disc, which can cause thermal expansion or stress if uncooled.'
    ],
    hi: [
      'यह सोचना कि भंवर धारा ब्रेक ढलान पर वाहन को पार्क रख सकते हैं: शून्य गति पर (v = 0) कोई धारा नहीं बहती, इसलिए होल्डिंग बल शून्य होता है; पार्किंग के लिए मैकेनिकल ब्रेक अनिवार्य है।',
      'यह मानना कि यह ब्रेक केवल लोहे पर ही काम करते हैं: तांबा और एल्यूमीनियम जैसे गैर-चुंबकीय चालक अपनी उच्च चालकता के कारण सबसे मजबूत ब्रेकिंग उत्पन्न करते हैं।',
      'भंवर धारा डैम्पिंग को घर्षण डैम्पिंग समझना: घर्षण के कारण सुई अटक सकती है, जबकि भंवर धारा डैम्पिंग रुकने पर पूरी तरह समाप्त हो जाती है और माप को सही रखती है।',
      'लगातार ब्रेकिंग में गर्मी को नजरअंदाज करना: सारी गतिज ऊर्जा तापीय ऊर्जा (Joule Heat) में बदलती है, जिससे उचित शीतलन न होने पर डिस्क या रेल अत्यधिक गर्म हो सकती है।'
    ],
    bn: [
      'এডি কারেন্ট ব্রেক ঢালু রাস্তায় গাড়ি পার্ক করে ধরে রাখতে পারবে ভাবা: যখন বেগ v = ০, তখন এডি কারেন্ট ও বল সম্পূর্ণ শূন্য হয়; তাই পার্কিংয়ের জন্য যান্ত্রিক ব্রেক আবশ্যক।',
      'কেবলমাত্র লোহা বা চৌম্বক পদার্থে এডি কারেন্ট ব্রেক কার্যকর ভাবা: তামা ও অ্যালুমিনিয়ামের উচ্চ বৈদ্যুতিক পরিবাহিতার (σ) কারণে এগুলোতে সবচেয়ে শক্তিশালী ব্রেকিং সৃষ্টি হয়।',
      'এডি কারেন্ট ড্যাম্পিংকে সাধারণ ঘর্ষণের সাথে গুলিয়ে ফেলা: যান্ত্রিক ঘর্ষণ কাঁটাকে আটকে রেখে ত্রুটি ঘটায়, কিন্তু এডি ড্যাম্পিং কাঁটা থামার সাথে সাথে সম্পূর্ণ বিলুপ্ত হয়ে নির্ভুল পাঠ দেয়।',
      'উচ্চগতির তাপ অপচয় উপেক্ষা করা: যান্ত্রিক ঘর্ষণ না হলেও সমস্ত গতিশক্তি পরিবাহীর ভেতরে তীব্র জুল তাপে পরিণত হয়, যা নিরসনের জন্য কার্যকর বায়ু চলাচল দরকার।'
    ]
  },
  keyTakeaways: {
    en: [
      'Electromagnetic eddy current braking converts mechanical kinetic energy directly into thermal Joule dissipation via induced currents according to Lenz’s law.',
      'Braking torque is proportional to the square of magnetic flux density, material conductivity, and velocity (T_b ∝ B² · σ · ω), delivering smooth, wear-free deceleration.',
      'Because braking force requires relative motion (F_b = 0 when v = 0), eddy current brakes are fail-safe at speed but require auxiliary mechanical brakes for standstill parking.',
      'In analog electrical meters (PMMC), eddy currents in the aluminum coil former provide ideal deadbeat damping, bringing the needle to rest without oscillation or friction error.',
      'Widespread applications include high-speed train track brakes (Shinkansen, ICE), roller coaster fail-safe arrestors, heavy truck transmission retarders, and gym ergometers.'
    ],
    hi: [
      'विद्युत चुंबकीय भंवर धारा ब्रेक लेंज के नियम के अनुसार गतिज ऊर्जा को बिना घर्षण के सीधे जूल तापीय ऊर्जा में बदल देते हैं।',
      'ब्रेकिंग टॉर्क चुंबकीय फ्लक्स घनत्व के वर्ग, चालकता और वेग के समानुपाती (T_b ∝ B² · σ · ω) होता है, जो बिना झटके के चिकनी ब्रेकिंग देता है।',
      'स्थिर अवस्था में बल शून्य (v = 0 पर F = 0) होने के कारण यह ब्रेक वाहन को पार्क रखने के लिए मैकेनिकल ब्रेक के साथ संयुक्त रूप से उपयोग किए जाते हैं।',
      'एनालॉग PMMC मीटरों में एल्यूमीनियम फ्रेम पर भंवर धाराएं सुई को बिना किसी कंपकंपी या त्रुटि के तुरंत सही मान पर रोक देती हैं।',
      'इसके प्रमुख उपयोगों में हाई-स्पीड बुलेट ट्रेन, रोलर कोस्टर, भारी ट्रकों के टेलमा रिटार्डर और जिम की एक्सरसाइज मशीनें शामिल हैं।'
    ],
    bn: [
      'ইলেক্ট্রোম্যাগনেটিক এডি কারেন্ট ব্রেকিং লেনজের সূত্র কাজে লাগিয়ে কোনো প্রকার যান্ত্রিক ক্ষয় ছাড়াই গতিশক্তিকে সরাসরি জুল তাপে রূপান্তর করে।',
      'ব্রেকিং টর্ক চৌম্বক ক্ষেত্রের বর্গ, পরিবাহিতা এবং বেগের সমানুপাতিক (T_b ∝ B² · σ · ω), যা সম্পূর্ণ মসৃণ ও দীর্ঘস্থায়ী মন্দন প্রদান করে।',
      'স্থির অবস্থায় বাধা বল শূন্য (v = ০ তে F = ০) হওয়ায় এটি পার্কিং ব্রেক হিসেবে একা কাজ করতে পারে না এবং মেকানিক্যাল ব্রেকের সহায়তা নেয়।',
      'অ্যানালগ PMMC মিটারে অ্যালুমিনিয়াম ফর্মারের এডি কারেন্ট কাঁটার অতিরিক্ত দোলন দূর করে কোনো পাঠ্য ত্রুটি ছাড়াই তৎক্ষণাৎ কাঁটাকে স্থির করে।',
      'এর প্রধান ব্যবহারের মধ্যে রয়েছে উচ্চগতির বুলেট ট্রেন, রোলার কোস্টার ড্রপ ব্রেক, ভারী ট্রাকের রিটার্ডার এবং জিম ব্যায়ামাগারের আর্দ্রতাহীন রেজিস্ট্যান্স।'
    ]
  },
  mcqs: [
    {
      id: "q-embraking-1",
      question: {
        en: "Why is an electromagnetic eddy current brake incapable of holding a stationary vehicle parked on an incline?",
        hi: "विद्युत चुंबकीय भंवर धारा ब्रेक किसी स्थिर वाहन को ढलान पर खड़ा (पार्क) रखने में असमर्थ क्यों होता है?",
        bn: "একটি ইলেক্ট্রোম্যাগনেটিক এডি কারেন্ট ব্রেক কেন কোনো স্থির গাড়িকে ঢালু রাস্তায় পার্ক করে আটকে রাখতে পারে না?"
      },
      options: [
        { id: "opt-1", text: { en: "Because the braking force is proportional to velocity (F_b ∝ v); when v = 0, braking force is exactly zero", hi: "क्योंकि ब्रेकिंग बल वेग के समानुपाती (F_b ∝ v) होता है; जब v = 0 हो, तो बल ठीक शून्य होता है", bn: "কারণ ব্রেকিং বল বেগের সমানুপাতিক (F_b ∝ v); যখন v = ০, তখন বাধা বল সম্পূর্ণ শূন্য" } },
        { id: "opt-2", text: { en: "Because magnetic fields cannot penetrate copper at zero speed", hi: "क्योंकि शून्य गति पर चुंबकीय क्षेत्र तांबे में प्रवेश नहीं कर सकता", bn: "কারণ শূন্য গতিতে চৌম্বক ক্ষেত্র তামার ভেতর প্রবেশ করতে পারে না" } },
        { id: "opt-3", text: { en: "Because gravity cancels electromagnetic induction", hi: "क्योंकि गुरुत्वाकर्षण प्रेरण को रद्द कर देता है", bn: "কারণ মহাকর্ষ বল আবেশকে অকার্যকর করে" } },
        { id: "opt-4", text: { en: "Because the vehicle battery explodes at zero speed", hi: "क्योंकि शून्य गति पर बैटरी फट जाती है", bn: "কারণ শূন্য গতিতে ব্যাটারি বিস্ফোরিত হয়" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "By Faraday’s and Lenz’s laws, eddy currents are induced only when there is relative motion (dΦ/dt ≠ 0). At zero velocity (v = 0), no currents are induced, resulting in zero braking force. A mechanical friction brake is mandatory for parking.",
        hi: "भंवर धाराएं केवल सापेक्ष गति (dΦ/dt) होने पर ही उत्पन्न होती हैं। जब गति शून्य होती है, तो कोई धारा या बल उत्पन्न नहीं होता।",
        bn: "ফ্যারাডের সূত্র অনুযায়ী আপেক্ষিক গতি থাকলেই কেবল এডি কারেন্ট তৈরি হয়। স্থির অবস্থায় (v = ০) কোনো বাধা বল থাকে না, তাই মেকানিক্যাল পার্কিং ব্রেক প্রয়োজন।"
      }
    },
    {
      id: "q-embraking-2",
      question: {
        en: "If the excitation magnetic field B in an eddy current brake is doubled (2B) while vehicle velocity remains constant, the retarding force F_b will:",
        hi: "यदि वाहन का वेग स्थिर रखते हुए भंवर धारा ब्रेक के चुंबकीय क्षेत्र B को दोगुना (2B) कर दिया जाए, तो मंदक बल F_b होगा:",
        bn: "গাড়ির বেগ অপরিবর্তিত রেখে এডি কারেন্ট ব্রেকের চৌম্বক ক্ষেত্র B দ্বিগুণ (2B) করা হলে বাধা বল F_b কত হবে?"
      },
      options: [
        { id: "opt-1", text: { en: "Double (2x)", hi: "दोगुना (2x)", bn: "দ্বিগুণ (2x)" } },
        { id: "opt-2", text: { en: "Quadruple (4x)", hi: "चार गुना (4x)", bn: "চার গুণ (4x)" } },
        { id: "opt-3", text: { en: "Halve (0.5x)", hi: "आधा (0.5x)", bn: "অর্ধেক (0.5x)" } },
        { id: "opt-4", text: { en: "Remain identical", hi: "समान रहेगा", bn: "একই থাকবে" } }
      ],
      correctOptionId: "opt-2",
      explanation: {
        en: "Braking force is proportional to the square of magnetic flux density: F_b ∝ B². Doubling B results in (2)² = 4 times the retarding force.",
        hi: "ब्रेकिंग बल चुंबकीय क्षेत्र के वर्ग (F_b ∝ B²) के समानुपाती होता है। अतः B दोगुना करने पर बल (2)² = 4 गुना हो जाता है।",
        bn: "ব্রেকিং বল চৌম্বক ক্ষেত্রের বর্গের সমানুপাতিক (F_b ∝ B²)। B দ্বিগুণ করলে বাধা বল (২)² = ৪ গুণ বৃদ্ধি পায়।"
      }
    },
    {
      id: "mcq-ch10-l16-03",
      question: {
        en: "In an electromagnetic linear eddy current rail brake, how is the retarding braking force applied to the speeding train?",
        hi: "इलेक्ट्रोमैग्नेटिक लीनियर भंवर धारा रेल ब्रेक में, तेज गति वाली ट्रेन पर मंदक ब्रेकिंग बल कैसे लगाया जाता है?",
        bn: "একটি ইলেক্ট্রোম্যাগনেটিক লিনিয়ার এডি কারেন্ট রেল ব্রেকের ক্ষেত্রে গতিশীল ট্রেনের ওপর মন্দন সৃষ্টিকারী ব্রেকিং বল কীভাবে প্রযুক্ত হয়?"
      },
      options: [
        { id: "opt-1", text: { en: "Electromagnets suspended just above the steel rail induce eddy currents in the rail head as they move; interaction between rail eddy currents and the magnet poles creates a contactless drag force", hi: "पटरी के ठीक ऊपर लटके चुंबक गति करते समय पटरी में भंवर धाराएं बनाते हैं; इनकी अंतःक्रिया से बिना छुए खिंचाव बल लगता है", bn: "রেললাইনের ঠিক ওপরে ঝুলন্ত চুম্বক গতির সময় লাইনে এডি কারেন্ট সৃষ্টি করে; এদের মিথস্ক্রিয়ায় স্পর্শহীন ড্র্যাগ বল উৎপন্ন হয়" } },
        { id: "opt-2", text: { en: "Steel brake shoes clamp down mechanically with hydraulic pistons onto the rail head", hi: "स्टील के ब्रेक पैड हाइड्रोलिक दबाव से सीधे पटरी को दबाते हैं", bn: "ইস্পাতের ব্রেক শু হাইড্রোলিক চাপে সরাসরি রেললাইনে চেপে বসে" } },
        { id: "opt-3", text: { en: "Parachutes deploy from the rear train car", hi: "ट्रेन के पीछे से पैराशूट खुल जाते हैं", bn: "ট্রেনের পেছন থেকে প্যারাসুট খুলে দেওয়া হয়" } },
        { id: "opt-4", text: { en: "The steel rail is melted into liquid by direct laser fire", hi: "लेजर से पटरी को पिघला दिया जाता है", bn: "লেজার দিয়ে রেললাইন গলিয়ে দেওয়া হয়" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "The electromagnetic brake sits ~7 mm above the rail. At high speed, the moving magnetic poles induce strong eddy currents in the solid rail head; by Lenz’s law, this produces a powerful horizontal retarding force without mechanical friction.",
        hi: "पटरी से 7 mm ऊपर स्थित चुंबक पटरी में भंवर धाराएं बनाते हैं जो गति का विरोध करके ट्रेन को बिना छुए रोकती हैं।",
        bn: "রেললাইনের ৭ মিমি ওপরে থাকা চুম্বক লাইনে এডি কারেন্ট আবিষ্ট করে লেনজের সূত্রানুযায়ী স্পর্শ ছাড়াই শক্তিশালী মন্দন বল তৈরি করে।"
      }
    },
    {
      id: "mcq-ch10-l16-04",
      question: {
        en: "In a disc-type eddy current dynamometer used for engine power testing, what happens to the mechanical brake power absorbed from the engine shaft?",
        hi: "इंजन पावर परीक्षण में प्रयुक्त डिस्क-प्रकार के भंवर धारा डायनेमोमीटर में, इंजन शाफ्ट से अवशोषित यांत्रिक शक्ति का क्या होता है?",
        bn: "ইঞ্জিনের ক্ষমতা পরীক্ষায় ব্যবহৃত ডিস্ক-টাইপ এডি কারেন্ট ডায়নামোমিটারে ইঞ্জিনের শ্যাফ্ট থেকে শোষিত যান্ত্রিক শক্তির কী পরিণতি ঘটে?"
      },
      options: [
        { id: "opt-1", text: { en: "It is converted entirely into Joule heat (I²R) in the conductive metal rotor, which is continuously removed by cooling water", hi: "यह धातु के रोटर में पूरी तरह जूल ऊष्मा (I²R) में बदल जाती है, जिसे बहते पानी से ठंडा किया जाता है", bn: "এটি ধাতব রটারে সম্পূর্ণরূপে জুল তাপে (I²R) রূপান্তরিত হয়, যা সঞ্চালিত শীতল পানি দ্বারা নিরবচ্ছিন্নভাবে অপসারিত হয়" } },
        { id: "opt-2", text: { en: "It is converted into chemical diesel fuel and stored in tanks", hi: "यह डीजल ईंधन में बदल जाती है", bn: "এটি রাসায়নিক ডিজেলে রূপান্তরিত হয়ে ট্যাংকে জমা হয়" } },
        { id: "opt-3", text: { en: "It disappears into the fourth dimension without any temperature rise", hi: "बिना तापमान बढ़े गायब हो जाती है", bn: "কোনো তাপমাত্রা বৃদ্ধি ছাড়াই অদৃশ্য হয়ে যায়" } },
        { id: "opt-4", text: { en: "It charges the vehicle headlights directly with static electricity", hi: "यह हेडलाइट को स्थिर बिजली से जलाती है", bn: "এটি স্থির বিদ্যুৎ দিয়ে হেডলাইট জ্বালায়" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "100% of the shaft mechanical power is dissipated as electrical eddy currents and Joule heating inside the spinning rotor disc, requiring cooling water jackets to prevent overheating.",
        hi: "पूरी यांत्रिक शक्ति रोटर में भंवर धाराओं और जूल ऊष्मा में बदल जाती है, जिसे ठंडा रखने के लिए पानी की आवश्यकता होती है।",
        bn: "সমস্ত যান্ত্রিক ক্ষমতা রটারে এডি কারেন্ট ও জুল তাপে রূপান্তরিত হয়, ফলে অতিরিক্ত উত্তাপ সরাতে শীতল জল সরবরাহ করতে হয়।"
      }
    },
    {
      id: "mcq-ch10-l16-05",
      question: {
        en: "What mathematical characteristic describes the relationship between the retarding torque T_b and rotor speed ω in an eddy current brake at low-to-moderate speeds?",
        hi: "निम्न से मध्यम गति पर भंवर धारा ब्रेक में मंदक टॉर्क T_b और गति ω के बीच कौन सा गणितीय संबंध होता है?",
        bn: "স্বল্প থেকে মাঝারি গতিতে একটি এডি কারেন্ট ব্রেকে মন্দন সৃষ্টিকারী টর্ক T_b এবং রটারের গতি ω এর মধ্যকার গাণিতিক সম্পর্ক কেমন?"
      },
      options: [
        { id: "opt-1", text: { en: "Linear proportionality: T_b ∝ ω (smooth viscous damping behavior)", hi: "रैखिक समानुपात: T_b ∝ ω (सुचारू श्यान अवमंदन व्यवहार)", bn: "সরল সমানুপাতিক: T_b ∝ ω (মসৃণ সান্দ্র ড্যাম্পিং বৈশিষ্ট্য)" } },
        { id: "opt-2", text: { en: "Inverse square relationship: T_b ∝ 1 / ω²", hi: "व्युत्क्रम वर्ग संबंध: T_b ∝ 1 / ω²", bn: "ব্যস্তানুপাতিক বর্গ সম্পর্ক: T_b ∝ ১ / ω²" } },
        { id: "opt-3", text: { en: "Independent of speed (constant Coulomb friction)", hi: "गति से स्वतंत्र (स्थिर घर्षण)", bn: "গতির ওপর সম্পূর্ণ নিরপেক্ষ" } },
        { id: "opt-4", text: { en: "Exponential growth: T_b ∝ e^(100 ω)", hi: "घातांकीय वृद्धि: T_b ∝ e^(100 ω)", bn: "সূচকীয় বৃদ্ধি: T_b ∝ e^(১০০ ω)" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "At speeds below peak torque, induced EMF e ∝ ω, induced eddy current I ∝ ω, and braking torque T = F·r ∝ I·B ∝ ω, providing ideal linear viscous damping.",
        hi: "कम गति पर EMF गति के समानुपाती होता है, अतः धारा और टॉर्क भी गति के सीधे समानुपाती (T ∝ ω) होते हैं।",
        bn: "মাঝারি গতি পর্যন্ত EMF বেগের সমানুপাতিক, তাই কারেন্ট ও ব্রেকিং টর্ক উভয়ই রটারের গতির সাথে সরল সমানুপাতিক (T ∝ ω) থাকে।"
      }
    },
    {
      id: "mcq-ch10-l16-06",
      question: {
        en: "Why does the braking torque of a high-speed eddy current brake eventually peak and then decrease at extreme rotational speeds?",
        hi: "अत्यधिक उच्च घूर्णन गति पर भंवर धारा ब्रेक का ब्रेकिंग टॉर्क चरम पर पहुंचकर फिर घटने क्यों लगता है?",
        bn: "অতিরিক্ত উচ্চ ঘূর্ণন গতিতে একটি এডি কারেন্ট ব্রেকের টর্ক সর্বোচ্চ সীমায় পৌঁছে আবার কমতে শুরু করে কেন?"
      },
      options: [
        { id: "opt-1", text: { en: "Rotor inductive reactance (ωL) begins to dominate over resistance R, causing eddy currents to lag in space and demagnetize the excitation poles", hi: "रोटर का प्रेरक प्रतिघात (ωL) प्रतिरोध पर हावी हो जाता है, जिससे भंवर धाराएं पीछे छूटकर मुख्य ध्रुवों को कमजोर कर देती हैं", bn: "রটারের ইনডাক্টিভ রিঅ্যাক্ট্যান্স (ωL) রোধের চেয়ে প্রভাবশালী হয়ে ওঠে, ফলে এডি কারেন্ট ফেজে পিছিয়ে পড়ে মূল মেরুকে ডিম্যাগনেটাইজ করে" } },
        { id: "opt-2", text: { en: "The copper disc freezes solid from cold winds", hi: "ठंडी हवा से तांबे की डिस्क जम जाती है", bn: "ঠান্ডা বাতাসে তামার ডিস্ক বরফ হয়ে জমে যায়" } },
        { id: "opt-3", text: { en: "The electromagnets reverse their battery connections automatically", hi: "चुंबक की ध्रुवता अपने आप बदल जाती है", bn: "চুম্বকের ব্যাটারি সংযোগ আপনা-আপনি উল্টে যায়" } },
        { id: "opt-4", text: { en: "Gravity stops functioning at high speeds", hi: "उच्च गति पर गुरुत्वाकर्षण काम करना बंद कर देता है", bn: "উচ্চ গতিতে মহাকর্ষ কাজ করা বন্ধ করে দেয়" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "At extreme frequencies (ω → ∞), the self-inductance L of the eddy paths causes eddy currents to lag by up to 90°, creating an armature reaction that opposes and pushes the main flux out of the rotor.",
        hi: "अत्यधिक गति पर भंवर धाराओं का प्रेरकत्व (L) हावी हो जाता है, जिससे धाराएं कला में पिछड़कर मुख्य चुंबकीय क्षेत्र को दबा देती हैं और टॉर्क गिर जाता है।",
        bn: "অতি উচ্চ গতিতে এডি পথের আবেশাঙ্ক (L) প্রভাবশালী হয়ে ওঠে, ফলে কারেন্ট ফেজে পিছিয়ে পড়ে মূল ফ্লাক্সকে বিকৃত ও দুর্বল করে দেয়।"
      }
    },
    {
      id: "mcq-ch10-l16-07",
      question: {
        en: "What critical safety role do permanent magnet eddy current retarders serve on heavy mountain descent trucks and highway tour buses?",
        hi: "पहाड़ी ढलानों पर उतरने वाले भारी ट्रकों और बसों में स्थायी चुंबक भंवर धारा मंदक कौन सी महत्वपूर्ण सुरक्षा भूमिका निभाते हैं?",
        bn: "পাহাড়ি খাড়া ঢালে ভারী ট্রাক ও বাসের ক্ষেত্রে স্থায়ী চুম্বক এডি কারেন্ট রিটার্ডার কোন অত্যন্ত গুরুত্বপূর্ণ নিরাপত্তা নিশ্চিত করে?"
      },
      options: [
        { id: "opt-1", text: { en: "They provide continuous, wear-free baseline retarding on long downhill grades, preventing mechanical friction brakes from overheating and failing (brake fade)", hi: "वे लंबी ढलानों पर बिना घिसाव के निरंतर गति को नियंत्रित रखते हैं, जिससे घर्षण ब्रेक गर्म होकर फेल होने से बच जाते हैं", bn: "দীর্ঘ পাহাড়ি অবতরণে এরা ঘর্ষণহীন ব্রেকিং প্রদান করে, ফলে সাধারণ ব্রেক অতিরিক্ত উত্তপ্ত হয়ে বিকল (ব্রেক ফেড) হওয়া থেকে রক্ষা পায়" } },
        { id: "opt-2", text: { en: "They steer the front wheels away from cliff edges automatically", hi: "वे ढलान के किनारों से पहियों को दूर मोड़ते हैं", bn: "তারা নিজে থেকেই চাকা ঘুরিয়ে খাঁদ থেকে বাঁচায়" } },
        { id: "opt-3", text: { en: "They pump diesel fuel back into the fuel tank", hi: "वे डीजल को वापस टैंक में भरते हैं", bn: "তারা ডিজেল পুনরায় ট্যাংকে ফেরত পাঠায়" } },
        { id: "opt-4", text: { en: "They lift the vehicle completely off the road surface into the air", hi: "वे गाड़ी को हवा में उड़ा देते हैं", bn: "তারা গাড়িকে রাস্তা থেকে বাতাসে ভাসিয়ে রাখে" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Extended braking down steep mountain passes overheats conventional brake pads, causing complete hydraulic brake fade. An auxiliary eddy current retarder absorbs the descent energy magnetically, keeping primary friction brakes cold and ready for emergency stops.",
        hi: "लगातार ब्रेक लगाने से पारंपरिक ब्रेक गर्म होकर काम करना बंद कर देते हैं। भंवर मंदक चुंबकीय रूप से वाहन की गति धीमी रखकर ब्रेक को सुरक्षित रखते हैं।",
        bn: "টানা ব্রেক কষলে প্রচলিত ব্রেক প্যাড অতি-উত্তপ্ত হয়ে ব্যর্থ হয়; এডি কারেন্ট রিটার্ডার চৌম্বকীয়ভাবে গাড়ি নিয়ন্ত্রণ করে মূল ব্রেক প্যাডকে নিরাপদ রাখে।"
      }
    },
    {
      id: "mcq-ch10-l16-08",
      question: {
        en: "In high-speed roller coasters, how do fail-safe permanent magnet eddy current brake fins stop the train safely even during a total electrical power outage?",
        hi: "हाई-स्पीड रोलर कोस्टर में स्थायी चुंबक भंवर धारा ब्रेक फिन बिजली गुल होने पर भी ट्रेन को सुरक्षित रूप से कैसे रोकते हैं?",
        bn: "উচ্চগতির রোলার কোস্টারে সম্পূর্ণ বিদ্যুৎ বিপর্যয়ের মধ্যেও স্থায়ী চুম্বক এডি কারেন্ট ব্রেক ফিন কীভাবে রোলার কোস্টারকে নিরাপদে থামিয়ে দেয়?"
      },
      options: [
        { id: "opt-1", text: { en: "They utilize rare-earth permanent magnets that require zero external electrical power, creating passive braking force purely from train motion", hi: "वे स्थायी चुंबकों का उपयोग करते हैं जिन्हें किसी बिजली की जरूरत नहीं होती; ट्रेन की गति से स्वतः ब्रेक लगता है", bn: "এতে কোনো বৈদ্যুতিক শক্তি লাগে না কারণ স্থায়ী চুম্বক কেবল ট্রেনের গতির সাহায্যেই নিষ্ক্রিয়ভাবে ব্রেকিং বল সৃষ্টি করে" } },
        { id: "opt-2", text: { en: "Backup diesel generators take 2 minutes to start", hi: "बैकअप जनरेटर 2 मिनट में चालू होते हैं", bn: "ব্যাকআপ জেনারেটর ২ মিনিটে চালু হয়" } },
        { id: "opt-3", text: { en: "They drop massive steel anchor hooks into concrete troughs", hi: "वे कंक्रीट में लोहे का लंगर गिराते हैं", bn: "কংক্রিটের ট্রাফে লোহার নোঙর ফেলে" } },
        { id: "opt-4", text: { en: "They inflate large rubber balloons under the track", hi: "वे पटरी के नीचे रबर के गुब्बारे फुलाते हैं", bn: "রেললাইনের নিচে রাবারের বেলুন ফুলিয়ে" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Permanent magnet eddy current brakes are 100% passive and fail-safe. Pure copper or aluminum fins passing between permanent neodymium magnet arrays automatically generate opposing Lorentz braking forces without needing sensors, computers, or external power.",
        hi: "स्थायी चुंबक ब्रेक पूरी तरह निष्क्रिय और सुरक्षित होते हैं। ट्रेन के गुजरते ही तांबे के फिन में स्वतः भंवर धाराएं बनती हैं और ट्रेन बिना बिजली के रुक जाती है।",
        bn: "স্থায়ী চুম্বক ব্রেক শতভাগ নিষ্ক্রিয় ও নির্ভরযোগ্য। বিদ্যুৎ সংযোগ না থাকলেও তামার ফিন চুম্বকের মধ্য দিয়ে যাওয়ামাত্রই স্বতঃস্ফূর্তভাবে মন্দন বল সৃষ্টি করে।"
      }
    }
  ],
  mcqQuestions: [
    {
      id: "q-embraking-1",
      question: {
        en: "Why is an electromagnetic eddy current brake incapable of holding a stationary vehicle parked on an incline?",
        hi: "विद्युत चुंबकीय भंवर धारा ब्रेक किसी स्थिर वाहन को ढलान पर खड़ा (पार्क) रखने में असमर्थ क्यों होता है?",
        bn: "একটি ইলেক্ট্রোম্যাগনেটিক এডি কারেন্ট ব্রেক কেন কোনো স্থির গাড়িকে ঢালু রাস্তায় পার্ক করে আটকে রাখতে পারে না?"
      },
      options: [
        { id: "opt-1", text: { en: "Because the braking force is proportional to velocity (F_b ∝ v); when v = 0, braking force is exactly zero", hi: "क्योंकि ब्रेकिंग बल वेग के समानुपाती (F_b ∝ v) होता है; जब v = 0 हो, तो बल ठीक शून्य होता है", bn: "কারণ ব্রেকিং বল বেগের সমানুপাতিক (F_b ∝ v); যখন v = ০, তখন বাধা বল সম্পূর্ণ শূন্য" } },
        { id: "opt-2", text: { en: "Because magnetic fields cannot penetrate copper at zero speed", hi: "क्योंकि शून्य गति पर चुंबकीय क्षेत्र तांबे में प्रवेश नहीं कर सकता", bn: "কারণ শূন্য গতিতে চৌম্বক ক্ষেত্র তামার ভেতর প্রবেশ করতে পারে না" } },
        { id: "opt-3", text: { en: "Because gravity cancels electromagnetic induction", hi: "क्योंकि गुरुत्वाकर्षण प्रेरण को रद्द कर देता है", bn: "কারণ মহাকর্ষ বল আবেশকে অকার্যকর করে" } },
        { id: "opt-4", text: { en: "Because the vehicle battery explodes at zero speed", hi: "क्योंकि शून्य गति पर बैटरी फट जाती है", bn: "কারণ শূন্য গতিতে ব্যাটারি বিস্ফোরিত হয়" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "By Faraday’s and Lenz’s laws, eddy currents are induced only when there is relative motion (dΦ/dt ≠ 0). At zero velocity (v = 0), no currents are induced, resulting in zero braking force. A mechanical friction brake is mandatory for parking.",
        hi: "भंवर धाराएं केवल सापेक्ष गति (dΦ/dt) होने पर ही उत्पन्न होती हैं। जब गति शून्य होती है, तो कोई धारा या बल उत्पन्न नहीं होता।",
        bn: "ফ্যারাডের সূত্র অনুযায়ী আপেক্ষিক গতি থাকলেই কেবল এডি কারেন্ট তৈরি হয়। স্থির অবস্থায় (v = ০) কোনো বাধা বল থাকে না, তাই মেকানিক্যাল পার্কিং ব্রেক প্রয়োজন।"
      }
    },
    {
      id: "q-embraking-2",
      question: {
        en: "If the excitation magnetic field B in an eddy current brake is doubled (2B) while vehicle velocity remains constant, the retarding force F_b will:",
        hi: "यदि वाहन का वेग स्थिर रखते हुए भंवर धारा ब्रेक के चुंबकीय क्षेत्र B को दोगुना (2B) कर दिया जाए, तो मंदक बल F_b होगा:",
        bn: "গাড়ির বেগ অপরিবর্তিত রেখে এডি কারেন্ট ব্রেকের চৌম্বক ক্ষেত্র B দ্বিগুণ (2B) করা হলে বাধা বল F_b কত হবে?"
      },
      options: [
        { id: "opt-1", text: { en: "Double (2x)", hi: "दोगुना (2x)", bn: "দ্বিগুণ (2x)" } },
        { id: "opt-2", text: { en: "Quadruple (4x)", hi: "चार गुना (4x)", bn: "চার গুণ (4x)" } },
        { id: "opt-3", text: { en: "Halve (0.5x)", hi: "आधा (0.5x)", bn: "অর্ধেক (0.5x)" } },
        { id: "opt-4", text: { en: "Remain identical", hi: "समान रहेगा", bn: "একই থাকবে" } }
      ],
      correctOptionId: "opt-2",
      explanation: {
        en: "Braking force is proportional to the square of magnetic flux density: F_b ∝ B². Doubling B results in (2)² = 4 times the retarding force.",
        hi: "ब्रेकिंग बल चुंबकीय क्षेत्र के वर्ग (F_b ∝ B²) के समानुपाती होता है। अतः B दोगुना करने पर बल (2)² = 4 गुना हो जाता है।",
        bn: "ব্রেকিং বল চৌম্বক ক্ষেত্রের বর্গের সমানুপাতিক (F_b ∝ B²)। B দ্বিগুণ করলে বাধা বল (২)² = ৪ গুণ বৃদ্ধি পায়।"
      }
    },
    {
      id: "mcq-ch10-l16-03",
      question: {
        en: "In an electromagnetic linear eddy current rail brake, how is the retarding braking force applied to the speeding train?",
        hi: "इलेक्ट्रोमैग्नेटिक लीनियर भंवर धारा रेल ब्रेक में, तेज गति वाली ट्रेन पर मंदक ब्रेकिंग बल कैसे लगाया जाता है?",
        bn: "একটি ইলেক্ট্রোম্যাগনেটিক লিনিয়ার এডি কারেন্ট রেল ব্রেকের ক্ষেত্রে গতিশীল ট্রেনের ওপর মন্দন সৃষ্টিকারী ব্রেকিং বল কীভাবে প্রযুক্ত হয়?"
      },
      options: [
        { id: "opt-1", text: { en: "Electromagnets suspended just above the steel rail induce eddy currents in the rail head as they move; interaction between rail eddy currents and the magnet poles creates a contactless drag force", hi: "पटरी के ठीक ऊपर लटके चुंबक गति करते समय पटरी में भंवर धाराएं बनाते हैं; इनकी अंतःक्रिया से बिना छुए खिंचाव बल लगता है", bn: "রেললাইনের ঠিক ওপরে ঝুলন্ত চুম্বক গতির সময় লাইনে এডি কারেন্ট সৃষ্টি করে; এদের মিথস্ক্রিয়ায় স্পর্শহীন ড্র্যাগ বল উৎপন্ন হয়" } },
        { id: "opt-2", text: { en: "Steel brake shoes clamp down mechanically with hydraulic pistons onto the rail head", hi: "स्टील के ब्रेक पैड हाइड्रोलिक दबाव से सीधे पटरी को दबाते हैं", bn: "ইস্পাতের ব্রেক শু হাইড্রোলিক চাপে সরাসরি রেললাইনে চেপে বসে" } },
        { id: "opt-3", text: { en: "Parachutes deploy from the rear train car", hi: "ट्रेन के पीछे से पैराशूट खुल जाते हैं", bn: "ট্রেনের পেছন থেকে প্যারাসুট খুলে দেওয়া হয়" } },
        { id: "opt-4", text: { en: "The steel rail is melted into liquid by direct laser fire", hi: "लेजर से पटरी को पिघला दिया जाता है", bn: "লেজার দিয়ে রেললাইন গলিয়ে দেওয়া হয়" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "The electromagnetic brake sits ~7 mm above the rail. At high speed, the moving magnetic poles induce strong eddy currents in the solid rail head; by Lenz’s law, this produces a powerful horizontal retarding force without mechanical friction.",
        hi: "पटरी से 7 mm ऊपर स्थित चुंबक पटरी में भंवर धाराएं बनाते हैं जो गति का विरोध करके ट्रेन को बिना छुए रोकती हैं।",
        bn: "রেললাইনের ৭ মিমি ওপরে থাকা চুম্বক লাইনে এডি কারেন্ট আবিষ্ট করে লেনজের সূত্রানুযায়ী স্পর্শ ছাড়াই শক্তিশালী মন্দন বল তৈরি করে।"
      }
    },
    {
      id: "mcq-ch10-l16-04",
      question: {
        en: "In a disc-type eddy current dynamometer used for engine power testing, what happens to the mechanical brake power absorbed from the engine shaft?",
        hi: "इंजन पावर परीक्षण में प्रयुक्त डिस्क-प्रकार के भंवर धारा डायनेमोमीटर में, इंजन शाफ्ट से अवशोषित यांत्रिक शक्ति का क्या होता है?",
        bn: "ইঞ্জিনের ক্ষমতা পরীক্ষায় ব্যবহৃত ডিস্ক-টাইপ এডি কারেন্ট ডায়নামোমিটারে ইঞ্জিনের শ্যাফ্ট থেকে শোষিত যান্ত্রিক শক্তির কী পরিণতি ঘটে?"
      },
      options: [
        { id: "opt-1", text: { en: "It is converted entirely into Joule heat (I²R) in the conductive metal rotor, which is continuously removed by cooling water", hi: "यह धातु के रोटर में पूरी तरह जूल ऊष्मा (I²R) में बदल जाती है, जिसे बहते पानी से ठंडा किया जाता है", bn: "এটি ধাতব রটারে সম্পূর্ণরূপে জুল তাপে (I²R) রূপান্তরিত হয়, যা সঞ্চালিত শীতল পানি দ্বারা নিরবচ্ছিন্নভাবে অপসারিত হয়" } },
        { id: "opt-2", text: { en: "It is converted into chemical diesel fuel and stored in tanks", hi: "यह डीजल ईंधन में बदल जाती है", bn: "এটি রাসায়নিক ডিজেলে রূপান্তরিত হয়ে ট্যাংকে জমা হয়" } },
        { id: "opt-3", text: { en: "It disappears into the fourth dimension without any temperature rise", hi: "बिना तापमान बढ़े गायब हो जाती है", bn: "কোনো তাপমাত্রা বৃদ্ধি ছাড়াই অদৃশ্য হয়ে যায়" } },
        { id: "opt-4", text: { en: "It charges the vehicle headlights directly with static electricity", hi: "यह हेडलाइट को स्थिर बिजली से जलाती है", bn: "এটি স্থির বিদ্যুৎ দিয়ে হেডলাইট জ্বালায়" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "100% of the shaft mechanical power is dissipated as electrical eddy currents and Joule heating inside the spinning rotor disc, requiring cooling water jackets to prevent overheating.",
        hi: "पूरी यांत्रिक शक्ति रोटर में भंवर धाराओं और जूल ऊष्मा में बदल जाती है, जिसे ठंडा रखने के लिए पानी की आवश्यकता होती है।",
        bn: "সমস্ত যান্ত্রিক ক্ষমতা রটারে এডি কারেন্ট ও জুল তাপে রূপান্তরিত হয়, ফলে অতিরিক্ত উত্তাপ সরাতে শীতল জল সরবরাহ করতে হয়।"
      }
    },
    {
      id: "mcq-ch10-l16-05",
      question: {
        en: "What mathematical characteristic describes the relationship between the retarding torque T_b and rotor speed ω in an eddy current brake at low-to-moderate speeds?",
        hi: "निम्न से मध्यम गति पर भंवर धारा ब्रेक में मंदक टॉर्क T_b और गति ω के बीच कौन सा गणितीय संबंध होता है?",
        bn: "স্বল্প থেকে মাঝারি গতিতে একটি এডি কারেন্ট ব্রেকে মন্দন সৃষ্টিকারী টর্ক T_b এবং রটারের গতি ω এর মধ্যকার গাণিতিক সম্পর্ক কেমন?"
      },
      options: [
        { id: "opt-1", text: { en: "Linear proportionality: T_b ∝ ω (smooth viscous damping behavior)", hi: "रैखिक समानुपात: T_b ∝ ω (सुचारू श्यान अवमंदन व्यवहार)", bn: "সরল সমানুপাতিক: T_b ∝ ω (মসৃণ সান্দ্র ড্যাম্পিং বৈশিষ্ট্য)" } },
        { id: "opt-2", text: { en: "Inverse square relationship: T_b ∝ 1 / ω²", hi: "व्युत्क्रम वर्ग संबंध: T_b ∝ 1 / ω²", bn: "ব্যস্তানুপাতিক বর্গ সম্পর্ক: T_b ∝ ১ / ω²" } },
        { id: "opt-3", text: { en: "Independent of speed (constant Coulomb friction)", hi: "गति से स्वतंत्र (स्थिर घर्षण)", bn: "গতির ওপর সম্পূর্ণ নিরপেক্ষ" } },
        { id: "opt-4", text: { en: "Exponential growth: T_b ∝ e^(100 ω)", hi: "घातांकीय वृद्धि: T_b ∝ e^(100 ω)", bn: "সূচকীয় বৃদ্ধি: T_b ∝ e^(১০০ ω)" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "At speeds below peak torque, induced EMF e ∝ ω, induced eddy current I ∝ ω, and braking torque T = F·r ∝ I·B ∝ ω, providing ideal linear viscous damping.",
        hi: "कम गति पर EMF गति के समानुपाती होता है, अतः धारा और टॉर्क भी गति के सीधे समानुपाती (T ∝ ω) होते हैं।",
        bn: "মাঝারি গতি পর্যন্ত EMF বেগের সমানুপাতিক, তাই কারেন্ট ও ব্রেকিং টর্ক উভয়ই রটারের গতির সাথে সরল সমানুপাতিক (T ∝ ω) থাকে।"
      }
    },
    {
      id: "mcq-ch10-l16-06",
      question: {
        en: "Why does the braking torque of a high-speed eddy current brake eventually peak and then decrease at extreme rotational speeds?",
        hi: "अत्यधिक उच्च घूर्णन गति पर भंवर धारा ब्रेक का ब्रेकिंग टॉर्क चरम पर पहुंचकर फिर घटने क्यों लगता है?",
        bn: "অতিরিক্ত উচ্চ ঘূর্ণন গতিতে একটি এডি কারেন্ট ব্রেকের টর্ক সর্বোচ্চ সীমায় পৌঁছে আবার কমতে শুরু করে কেন?"
      },
      options: [
        { id: "opt-1", text: { en: "Rotor inductive reactance (ωL) begins to dominate over resistance R, causing eddy currents to lag in space and demagnetize the excitation poles", hi: "रोटर का प्रेरक प्रतिघात (ωL) प्रतिरोध पर हावी हो जाता है, जिससे भंवर धाराएं पीछे छूटकर मुख्य ध्रुवों को कमजोर कर देती हैं", bn: "রটারের ইনডাক্টিভ রিঅ্যাক্ট্যান্স (ωL) রোধের চেয়ে প্রভাবশালী হয়ে ওঠে, ফলে এডি কারেন্ট ফেজে পিছিয়ে পড়ে মূল মেরুকে ডিম্যাগনেটাইজ করে" } },
        { id: "opt-2", text: { en: "The copper disc freezes solid from cold winds", hi: "ठंडी हवा से तांबे की डिस्क जम जाती है", bn: "ঠান্ডা বাতাসে তামার ডিস্ক বরফ হয়ে জমে যায়" } },
        { id: "opt-3", text: { en: "The electromagnets reverse their battery connections automatically", hi: "चुंबक की ध्रुवता अपने आप बदल जाती है", bn: "চুম্বকের ব্যাটারি সংযোগ আপনা-আপনি উল্টে যায়" } },
        { id: "opt-4", text: { en: "Gravity stops functioning at high speeds", hi: "उच्च गति पर गुरुत्वाकर्षण काम करना बंद कर देता है", bn: "উচ্চ গতিতে মহাকর্ষ কাজ করা বন্ধ করে দেয়" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "At extreme frequencies (ω → ∞), the self-inductance L of the eddy paths causes eddy currents to lag by up to 90°, creating an armature reaction that opposes and pushes the main flux out of the rotor.",
        hi: "अत्यधिक गति पर भंवर धाराओं का प्रेरकत्व (L) हावी हो जाता है, जिससे धाराएं कला में पिछड़कर मुख्य चुंबकीय क्षेत्र को दबा देती हैं और टॉर्क गिर जाता है।",
        bn: "অতি উচ্চ গতিতে এডি পথের আবেশাঙ্ক (L) প্রভাবশালী হয়ে ওঠে, ফলে কারেন্ট ফেজে পিছিয়ে পড়ে মূল ফ্লাক্সকে বিকৃত ও দুর্বল করে দেয়।"
      }
    },
    {
      id: "mcq-ch10-l16-07",
      question: {
        en: "What critical safety role do permanent magnet eddy current retarders serve on heavy mountain descent trucks and highway tour buses?",
        hi: "पहाड़ी ढलानों पर उतरने वाले भारी ट्रकों और बसों में स्थायी चुंबक भंवर धारा मंदक कौन सी महत्वपूर्ण सुरक्षा भूमिका निभाते हैं?",
        bn: "পাহাড়ি খাড়া ঢালে ভারী ট্রাক ও বাসের ক্ষেত্রে স্থায়ী চুম্বক এডি কারেন্ট রিটার্ডার কোন অত্যন্ত গুরুত্বপূর্ণ নিরাপত্তা নিশ্চিত করে?"
      },
      options: [
        { id: "opt-1", text: { en: "They provide continuous, wear-free baseline retarding on long downhill grades, preventing mechanical friction brakes from overheating and failing (brake fade)", hi: "वे लंबी ढलानों पर बिना घिसाव के निरंतर गति को नियंत्रित रखते हैं, जिससे घर्षण ब्रेक गर्म होकर फेल होने से बच जाते हैं", bn: "দীর্ঘ পাহাড়ি অবতরণে এরা ঘর্ষণহীন ব্রেকিং প্রদান করে, ফলে সাধারণ ব্রেক অতিরিক্ত উত্তপ্ত হয়ে বিকল (ব্রেক ফেড) হওয়া থেকে রক্ষা পায়" } },
        { id: "opt-2", text: { en: "They steer the front wheels away from cliff edges automatically", hi: "वे ढलान के किनारों से पहियों को दूर मोड़ते हैं", bn: "তারা নিজে থেকেই চাকা ঘুরিয়ে খাঁদ থেকে বাঁচায়" } },
        { id: "opt-3", text: { en: "They pump diesel fuel back into the fuel tank", hi: "वे डीजल को वापस टैंक में भरते हैं", bn: "তারা ডিজেল পুনরায় ট্যাংকে ফেরত পাঠায়" } },
        { id: "opt-4", text: { en: "They lift the vehicle completely off the road surface into the air", hi: "वे गाड़ी को हवा में उड़ा देते हैं", bn: "তারা গাড়িকে রাস্তা থেকে বাতাসে ভাসিয়ে রাখে" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Extended braking down steep mountain passes overheats conventional brake pads, causing complete hydraulic brake fade. An auxiliary eddy current retarder absorbs the descent energy magnetically, keeping primary friction brakes cold and ready for emergency stops.",
        hi: "लगातार ब्रेक लगाने से पारंपरिक ब्रेक गर्म होकर काम करना बंद कर देते हैं। भंवर मंदक चुंबकीय रूप से वाहन की गति धीमी रखकर ब्रेक को सुरक्षित रखते हैं।",
        bn: "টানা ব্রেক কষলে প্রচলিত ব্রেক প্যাড অতি-উত্তপ্ত হয়ে ব্যর্থ হয়; এডি কারেন্ট রিটার্ডার চৌম্বকীয়ভাবে গাড়ি নিয়ন্ত্রণ করে মূল ব্রেক প্যাডকে নিরাপদ রাখে।"
      }
    },
    {
      id: "mcq-ch10-l16-08",
      question: {
        en: "In high-speed roller coasters, how do fail-safe permanent magnet eddy current brake fins stop the train safely even during a total electrical power outage?",
        hi: "हाई-स्पीड रोलर कोस्टर में स्थायी चुंबक भंवर धारा ब्रेक फिन बिजली गुल होने पर भी ट्रेन को सुरक्षित रूप से कैसे रोकते हैं?",
        bn: "উচ্চগতির রোলার কোস্টারে সম্পূর্ণ বিদ্যুৎ বিপর্যয়ের মধ্যেও স্থায়ী চুম্বক এডি কারেন্ট ব্রেক ফিন কীভাবে রোলার কোস্টারকে নিরাপদে থামিয়ে দেয়?"
      },
      options: [
        { id: "opt-1", text: { en: "They utilize rare-earth permanent magnets that require zero external electrical power, creating passive braking force purely from train motion", hi: "वे स्थायी चुंबकों का उपयोग करते हैं जिन्हें किसी बिजली की जरूरत नहीं होती; ट्रेन की गति से स्वतः ब्रेक लगता है", bn: "এতে কোনো বৈদ্যুতিক শক্তি লাগে না কারণ স্থায়ী চুম্বক কেবল ট্রেনের গতির সাহায্যেই নিষ্ক্রিয়ভাবে ব্রেকিং বল সৃষ্টি করে" } },
        { id: "opt-2", text: { en: "Backup diesel generators take 2 minutes to start", hi: "बैकअप जनरेटर 2 मिनट में चालू होते हैं", bn: "ব্যাকআপ জেনারেটর ২ মিনিটে চালু হয়" } },
        { id: "opt-3", text: { en: "They drop massive steel anchor hooks into concrete troughs", hi: "वे कंक्रीट में लोहे का लंगर गिराते हैं", bn: "কংক্রিটের ট্রাফে লোহার নোঙর ফেলে" } },
        { id: "opt-4", text: { en: "They inflate large rubber balloons under the track", hi: "वे पटरी के नीचे रबर के गुब्बारे फुलाते हैं", bn: "রেললাইনের নিচে রাবারের বেলুন ফুলিয়ে" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Permanent magnet eddy current brakes are 100% passive and fail-safe. Pure copper or aluminum fins passing between permanent neodymium magnet arrays automatically generate opposing Lorentz braking forces without needing sensors, computers, or external power.",
        hi: "स्थायी चुंबक ब्रेक पूरी तरह निष्क्रिय और सुरक्षित होते हैं। ट्रेन के गुजरते ही तांबे के फिन में स्वतः भंवर धाराएं बनती हैं और ट्रेन बिना बिजली के रुक जाती है।",
        bn: "স্থায়ী চুম্বক ব্রেক শতভাগ নিষ্ক্রিয় ও নির্ভরযোগ্য। বিদ্যুৎ সংযোগ না থাকলেও তামার ফিন চুম্বকের মধ্য দিয়ে যাওয়ামাত্রই স্বতঃস্ফূর্তভাবে মন্দন বল সৃষ্টি করে।"
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch10-l16-1',
      question: {
        en: 'An electromagnetic truck retarder generates a retarding force of 12,000 N when the vehicle is traveling at 72 km/h (20 m/s). Calculate the thermal power in kilowatts being dissipated as heat in the retarder rotors.',
        hi: 'एक विद्युत चुंबकीय ट्रक रिटार्डर 72 किमी/घंटा (20 m/s) की गति पर 12,000 N का मंदक बल लगाता है। रिटार्डर रोटार में ऊष्मा के रूप में व्यय होने वाली शक्ति (kW में) की गणना कीजिए।',
        bn: 'একটি ভারী ট্রাকের ইলেক্ট্রোম্যাগনেটিক রিটার্ডার ৭২ কিমি/ঘণ্টা (২০ মি/সে) বেগে চলার সময় ১২,০০০ নিউটন বাধা বল তৈরি করে। রিটার্ডারের রোটরে তাপে রূপান্তরিত হওয়া শক্তির পরিমাণ কিলোওয়াটে (kW) নির্ণয় করুন।'
      },
      hint: {
        en: 'Power P_b = F_b · v. Remember 1 kW = 1,000 W.',
        hi: 'शक्ति P_b = F_b · v। 1 kW = 1,000 W।',
        bn: 'ক্ষমতা P_b = F_b · v। ১ kW = ১,০০০ ওয়াট।'
      },
      answerKey: {
        en: 'P_b = F_b × v = 12,000 N × 20 m/s = 240,000 Watts = 240 kW.',
        hi: 'P_b = 12,000 N × 20 m/s = 240,000 वाट = 240 kW।',
        bn: 'P_b = ১২,০০০ × ২০ = ২৪০,০০০ ওয়াট = ২৪০ kW।'
      }
    }
  ]
};
