import { Lesson } from '../types';

export const LESSON_DC_MOTOR_BRAKING: Lesson = {
  id: 'lsn-ch6-dc-motor-braking',
  topicId: 'ch6-dc-motor-braking',
  chapterId: 'ch-electrical-machines',
  order: 12,
  title: {
    en: 'DC Motor Braking & Industrial Drives',
    hi: 'डीसी मोटर ब्रेकिंग एवं औद्योगिक ड्राइव',
    bn: 'ডিসি মোটর ব্রেকিং ও ইন্ডাস্ট্রিয়াল ড্রাইভ'
  },
  description: {
    en: 'Comprehensive engineering analysis of electric braking for DC machines: Regenerative Braking with power recovery to supply mains, Rheostatic/Dynamic Braking with kinetic energy dissipation, Plugging (Reverse Voltage Braking) with maximum retarding torque, mechanical vs electrical braking trade-offs, and industrial drive safety interlocks.',
    hi: 'डीसी मशीनों की विद्युत ब्रेकिंग का विस्तृत इंजीनियरिंग विश्लेषण: रीजेनरेटिव ब्रेकिंग (सप्लाई में ऊर्जा पुनर्प्राप्ति), रियोस्टैटिक/डायनामिक ब्रेकिंग (गतिज ऊर्जा का ताप में रूपांतरण), प्लगिंग (विपरीत वोल्टेज ब्रेकिंग), यांत्रिक बनाम विद्युत ब्रेकिंग एवं औद्योगिक ड्राइव सुरक्षा इंटरलॉक।',
    bn: 'ডিসি মোটরের বৈদ্যুতিক ব্রেকিংয়ের বিশদ প্রকৌশল বিশ্লেষণ: রিজেনারেটিভ ব্রেকিং (সাপ্লাই লাইনে বিদ্যুৎ পুনরুদ্ধার), রিহোস্ট্যাটিক/ডায়নামিক ব্রেকিং (গতিশক্তি তাপে রূপান্তর), প্লাগিং বা রিভার্স ভোল্টেজ ব্রেকিং (সর্বোচ্চ ব্রেকিং টর্ক), মেকানিক্যাল বনাম ইলেকট্রিক্যাল ব্রেকিং এবং শিল্প ড্রাইভ নিরাপত্তা।'
  },
  estimatedMinutes: 38,
  easyExplanation: {
    en: 'In industrial machinery like electric trains, cranes, and rolling mills, stopping a spinning motor quickly and smoothly using mechanical friction brake pads causes severe wear, heat buildup, and frequent maintenance failures. Electric braking turns the motor into an active generator that opposes motion. There are three primary methods: 1) Regenerative Braking: When an overhauling load (like a train going downhill or a crane lowering a heavy container) speeds up the motor so its Back EMF exceeds line voltage (Eb > V), power flows backward into the supply grid, providing natural holding brakes while saving electric energy. 2) Dynamic (Rheostatic) Braking: The motor is disconnected from the supply and reconnected across a braking resistor bank; the spinning rotor acts as a generator, converting rotational kinetic energy into heat until the motor stops. 3) Plugging (Reverse Current): Armature connections are instantly reversed, making Back EMF and supply voltage act in series (V + Eb), delivering huge braking torque for emergency rapid stops.',
    hi: 'इलेक्ट्रिक ट्रेनों, क्रेन और भारी रोलिंग मिलों में घूमती हुई मोटर को तुरंत रोकने के लिए केवल यांत्रिक ब्रेक लगाने से घिसाव और आग का खतरा रहता है। विद्युत ब्रेकिंग में मोटर को ही जनरेटर बना दिया जाता है जो गति का विरोध करता है। इसके तीन मुख्य तरीके हैं: 1) रीजेनरेटिव ब्रेकिंग: जब ट्रेन ढलान पर उतरती है या क्रेन भारी लोड नीचे उतारती है, तो मोटर तेज घूमने से उसका बैक EMF सप्लाई वोल्टेज से अधिक (Eb > V) हो जाता है, जिससे बिजली वापस ग्रिड में जाने लगती है और भारी ब्रेकिंग मिलती है। 2) डायनामिक ब्रेकिंग: मोटर को सप्लाई से हटाकर एक बाहरी प्रतिरोध से जोड़ दिया जाता है; जनरेटर बनी मोटर अपनी गतिज ऊर्जा को प्रतिरोध में गर्मी बनाकर शांत हो जाती है। 3) प्लगिंग: आर्मेचर के टर्मिनलों को तुरंत उल्टा कर दिया जाता है जिससे V और Eb मिलकर अत्यधिक मजबूत ब्रेकिंग टॉर्क पैदा करते हैं जो मोटर को तुरंत रोक देता है।',
    bn: 'ট্রেন, ক্রেন বা রোলিং মিলের মতো ভারী শিল্পে যান্ত্রিক ব্রেক প্যাড দ্রুত ক্ষয়প্রাপ্ত হয় ও অতিরিক্ত গরম হয়ে নষ্ট হয়। বৈদ্যুতিক ব্রেকিংয়ে মোটরকে একটি জেনারেটরে রূপান্তর করে ঘূর্ণনের বিপরীত বল প্রয়োগ করা হয়। এর তিনটি প্রধান রূপ রয়েছে: ১) রিজেনারেটিভ ব্রেকিং: ট্রেন যখন ঢালু পথে নামে বা ক্রেন ভারী লোড নিচে নামায়, তখন মোটরের গতি বেড়ে ব্যাক EMF সরবরাহ ভোল্টেজকে ছাড়িয়ে যায় (Eb > V), ফলে বিদ্যুৎ গ্রিডে ফেরত যায় এবং শক্তি সাশ্রয়ী ব্রেকিং ঘটে। ২) ডায়নামিক ব্রেকিং: মোটরকে বিদ্যুৎ লাইন থেকে বিচ্ছিন্ন করে একটি ব্রেকিং রোধে যুক্ত করা হয়, ফলে ঘূর্ণন গতিশক্তি বিদ্যুতে রূপান্তরিত হয়ে রোধে তাপে পরিণত হয়ে মোটর থেমে যায়। ৩) প্লাগিং: আর্মেচার সংযোগ তাৎক্ষণিকভাবে উল্টে দিলে সাপ্লাই ও ব্যাক EMF একত্রে (V + Eb) শক্তিশালী বিপরীতমুখী টর্ক তৈরি করে দ্রুত জরুরি ব্রেক নিশ্চিত করে।'
  },
  detailedExplanation: {
    en: `1. Engineering Necessity & Physics of Electric Braking:
A. Limitations of Mechanical (Friction) Braking:
- Mechanical shoe/disc brakes suffer severe friction pad wear, surface scoring, and high thermal stress under frequent cycling (e.g., trains stopping every 2 minutes, crane hoists lowering cargo).
- Non-smooth deceleration causes violent mechanical jerks on drive couplings.
- Mechanical brakes cannot recover the kinetic energy of rotating masses.

B. The Principle of Electrical Braking:
- In any electrical braking method, the machine is operated such that the electromagnetic torque T_a opposes the direction of rotation (T_braking = -T_motion).
- Rotational kinetic energy (E_k = 0.5 · J · ω²) is converted into electrical energy and either returned to the DC bus or dissipated in resistor banks.
- Mechanical friction brakes are retained strictly for holding the stationary rotor at complete zero speed (Holding Parking Brakes).

2. Method 1: Regenerative Braking (Energy Recovery):
A. Operating Condition:
- Regenerative braking occurs naturally when the motor is driven mechanically by an active overhauling load (e.g., an electric locomotive descending a steep gradient, or an elevator counterweight driving the motor) at a speed higher than the ideal no-load speed (N > N_0).
- Back EMF exceeds the supply line voltage: E_b > V.

B. Circuit Physics & Power Flow:
- Armature current reverses direction:
  I_a = (E_b - V) / R_a
- Because current reverses while field flux Φ maintains the same polarity:
  T_a = K_t · Φ · (-I_a) = -T_braking
- The machine acts as a DC Generator delivering electrical power back to the supply mains:
  P_regen = V · I_a [Watts]
- Advantages:
  * Zero energy wasted as heat; massive energy recovery and power bill savings.
  * Smooth, automatic speed limiting during downhill runs.
- Limitation:
  * Cannot stop the motor down to 0 RPM because as speed drops, E_b falls below V, and regenerative action ceases.

3. Method 2: Dynamic / Rheostatic Braking:
A. Circuit Reconfiguration:
- The motor armature is quickly disconnected from the DC supply mains and immediately reconnected across a variable braking resistor bank (R_B).
- The field winding remains connected to the supply (separately excited) to maintain strong flux Φ.

B. Electrical Dynamics:
- The spinning armature generates Back EMF E_b, which drives a reverse braking current through the local loop:
  I_braking = E_b / (R_a + R_B) = (K_e · Φ · N) / (R_a + R_B)
- Braking Torque developed:
  T_braking = K_t · Φ · I_braking = [ K_t · K_e · Φ² · N ] / (R_a + R_B)
- As the rotor slows down (N decreases), E_b and I_braking decrease continuously.
- Braking torque smoothly tapers to zero as the motor reaches standstill.
- Energy Transformation: 100% of the rotational kinetic energy (0.5 · J · ω²) is dissipated as safe I²R heat in the external braking resistor.

4. Method 3: Plugging (Reverse Voltage Braking):
A. Operating Mechanism:
- The armature terminal connections are abruptly reversed while the motor is spinning at full speed.
- The field winding connection remains untouched so that flux direction Φ is preserved.

B. Extreme Voltage & Current Conditions:
- In normal motoring: Applied voltage V opposes Back EMF E_b (Net voltage = V - E_b).
- During plugging: Applied voltage V and Back EMF E_b ACT IN THE SAME DIRECTION (in series additive aiding):
  V_total = V + E_b ≈ 2 · V
- Without an external current-limiting plugging resistor (R_plug), armature current would reach catastrophic levels:
  I_plug(uncontrolled) = (V + E_b) / R_a ≈ (2 × 230 V) / 0.3 Ω = 1533 A!
- Therefore, a heavy series plugging resistor (R_plug) MUST be simultaneously inserted into the circuit:
  I_plug = (V + E_b) / (R_a + R_plug)
- Developed Braking Torque:
  T_braking = K_t · Φ · I_plug (Opposes rotation violently).

C. Critical Operational Safety Interlock:
- When the motor reaches zero speed (N = 0 RPM), if power is not instantly disconnected, the motor will immediately accelerate in the REVERSE direction!
- An automatic centrifugal switch or reverse-rotation relay (Anti-Plugging Switch) must automatically de-energize the main contactor the instant speed hits zero.

5. Comprehensive Comparative Summary:
- Regenerative Braking: E_b > V, power returned to grid, highly energy-efficient, cannot stop machine to 0 RPM.
- Dynamic Braking: Armature disconnected from line and connected across R_B, kinetic energy -> heat, smooth deceleration, stops near 0 RPM.
- Plugging: Armature reversed, net voltage V + E_b, consumes power from line while braking, maximum braking torque, requires anti-plugging disconnect at zero speed.`,
    hi: `1. विद्युत ब्रेकिंग का इंजीनियरिंग सिद्धांत:
- यांत्रिक ब्रेक में घर्षण पैड घिसते हैं, अत्यधिक गर्मी उत्पन्न होती है और तेज झटके लगते हैं।
- विद्युत ब्रेकिंग में मोटर को जनरेटर की तरह चलाकर गति के विपरीत दिशा में टॉर्क (T_braking) उत्पन्न किया जाता है।
- घूर्णन की गतिज ऊर्जा (0.5·J·ω²) को विद्युत ऊर्जा में बदलकर ग्रिड में भेजा जाता है या प्रतिरोध में नष्ट किया जाता है।

2. रीजेनरेटिव ब्रेकिंग (Regenerative Braking):
- स्थिति: जब मोटर किसी ढलान पर उतरती है या क्रेन द्वारा लोड नीचे उतारा जाता है, तो गति बढ़ने से Back EMF सप्लाई वोल्टेज से अधिक हो जाता है (Eb > V)।
- करंट की दिशा उलट जाती है: I_a = (E_b - V) / R_a।
- मोटर जनरेटर बनकर बिजली वापस सप्लाई ग्रिड को देती है।
- लाभ: बिजली की बचत और शून्य ऊर्जा अपव्यय। सीमा: यह मोटर को पूरी तरह 0 RPM पर नहीं रोक सकती।

3. डायनामिक / रियोस्टैटिक ब्रेकिंग (Dynamic Braking):
- विधि: आर्मेचर को मुख्य सप्लाई से काटकर एक बाहरी ब्रेकिंग प्रतिरोध (R_B) से जोड़ दिया जाता है, जबकि फील्ड को चालू रखा जाता है।
- आर्मेचर में बैक EMF के कारण विपरीत करंट बहता है: I_B = Eb / (Ra + R_B)।
- गतिज ऊर्जा पूरी तरह प्रतिरोध में गर्मी के रूप में विसर्जित हो जाती है और मोटर शांत गति से रुकती है।

4. प्लगिंग (Plugging - रिवर्स वोल्टेज ब्रेकिंग):
- विधि: मोटर के चलते समय आर्मेचर के टर्मिनलों को तुरंत उल्टा कर दिया जाता है।
- वोल्टेज की स्थिति: सप्लाई वोल्टेज V और बैक EMF Eb दोनों एक ही दिशा में जुड़ जाते हैं (V + Eb ≈ 2V)।
- अत्यधिक करंट से बचने के लिए भारी श्रेणी प्रतिरोध (R_plug) जोड़ना अनिवार्य है: I_plug = (V + Eb) / (Ra + R_plug)।
- अत्यधिक मजबूत ब्रेकिंग टॉर्क मिलता है।
- सुरक्षा आवश्यकता: गति शून्य (N = 0) होते ही सप्लाई काटनी होती है (एंटी-प्लगिंग स्विच), अन्यथा मोटर उल्टी दिशा में घूमने लगेगी!`,
    bn: `১. বৈদ্যুতিক ব্রেকিংয়ের প্রকৌশল গুরুত্ব:
- যান্ত্রিক ঘর্ষণ ব্রেকে প্যাড দ্রুত ক্ষয় হয়, তাপ উৎপন্ন হয় এবং যান্ত্রিক ঝাঁকুনি তৈরি হয়।
- বৈদ্যুতিক ব্রেকিংয়ে মোটরকে জেনারেটর হিসেবে পরিচালনা করে বিপরীতমুখী ব্রেকিং টর্ক তৈরি করা হয়।
- মোটরের গতিশক্তি (০.৫·J·ω²) বিদ্যুতে রূপান্তরিত হয়ে লাইনে ফেরত যায় বা রোধে তাপ হিসেবে নির্গত হয়।

২. রিজেনারেটিভ ব্রেকিং (Regenerative Braking):
- শর্ত: ট্রেন ঢালু পথে নামার সময় বা ক্রেন লোড নামানোর সময় গতি বৃদ্ধি পেয়ে ব্যাক EMF সাপ্লাই ভোল্টেজকে ছাড়িয়ে যায় (Eb > V)।
- আর্মেচার কারেন্টের দিক উল্টে যায়: I_a = (E_b - V) / R_a।
- মোটর জেনারেটর হিসেবে কাজ করে সরাসরি পাওয়ার গ্রিডে বিদ্যুৎ ফেরত দেয়।
- সুবিধা: চমৎকার শক্তি সাশ্রয়। সীমাবদ্ধতা: মোটরকে শূন্য গতিতে থামাতে পারে না।

৩. ডায়নামিক বা রিহোস্ট্যাটিক ব্রেকিং (Dynamic Braking):
- আর্মেচারকে লাইন থেকে বিচ্ছিন্ন করে একটি ব্রেকিং রোধে (R_B) যুক্ত করা হয়।
- ব্যাক EMF বিপরীত কারেন্ট প্রবাহিত করে: I_B = Eb / (Ra + R_B)।
- সমস্ত ঘূর্ণন গতিশক্তি ব্রেকিং রোধে তাপে পরিণত হয়ে মোটর মসৃণভাবে থেমে যায়।

৪. প্লাগিং (Plugging - রিভার্স ভোল্টেজ ব্রেকিং):
- চলমান অবস্থায় আর্মেচারের টার্মিনাল উল্টে দেওয়া হয়।
- মোট কার্যকর ভোল্টেজ হয় (V + Eb ≈ 2V)।
- তীব্র কারেন্ট রোধে অতিরিক্ত সিরিজ রোধ যুক্ত করা বাধ্যতামূলক: I_plug = (V + Eb) / (Ra + R_plug)।
- অত্যন্ত শক্তিশালী ব্রেকিং টর্ক পাওয়া যায়।
- সতর্কতা: শূন্য গতিতে (N = 0) পৌঁছামাত্র এন্টি-প্লাগিং রিলে দ্বারা সংযোগ বিচ্ছিন্ন করতে হবে, নতুবা মোটর বিপরীত দিকে ঘুরতে শুরু করবে!`
  },
  formulas: [
    {
      id: 'f-regen-braking-current',
      symbol: 'I_a(regen)',
      expression: 'I_a = (E_b - V) / R_a',
      formula: 'I_{a(\\text{regen})} = \\frac{E_b - V}{R_a} \\quad (E_b > V)',
      title: {
        en: 'Regenerative Braking Current',
        hi: 'रीजेनरेटिव ब्रेकिंग धारा',
        bn: 'রিজেনারেটিভ ব্রেকিং কারেন্ট'
      },
      description: {
        en: 'Reverse armature current returning power to the DC supply mains when Back EMF exceeds terminal voltage.',
        hi: 'सप्लाई मेंस को बिजली लौटाने वाली विपरीत आर्मेचर धारा जब बैक EMF टर्मिनल वोल्टेज से अधिक हो जाता है।',
        bn: 'ব্যাক EMF টার্মিনাল ভোল্টেজ অপেক্ষা বেশি হলে পাওয়ার সাপ্লাইয়ে ফেরত যাওয়া বিপরীতমুখী আর্মেচার কারেন্ট।'
      },
      variables: [
        { symbol: 'E_b', name: { en: 'Generated Back EMF (V)', hi: 'प्रेरित बैक EMF (V)', bn: 'উৎপন্ন ব্যাক EMF (V)' } },
        { symbol: 'V', name: { en: 'Line supply voltage (V)', hi: 'लाइन सप्लाई वोल्टेज (V)', bn: 'লাইন সাপ্লাই ভোল্টেজ (V)' } }
      ]
    },
    {
      id: 'f-dynamic-braking-current',
      symbol: 'I_B(dynamic)',
      expression: 'I_B = E_b / (R_a + R_B)',
      formula: 'I_{B(\\text{dynamic})} = \\frac{E_b}{R_a + R_B} = \\frac{K_e \\cdot \\Phi \\cdot N}{R_a + R_B}',
      title: {
        en: 'Dynamic (Rheostatic) Braking Current',
        hi: 'डायनामिक (रियोस्टैटिक) ब्रेकिंग धारा',
        bn: 'ডায়নামিক (রিহোস্ট্যাটিক) ব্রেকিং কারেন্ট'
      },
      description: {
        en: 'Braking current circulating through the local braking resistor loop driven by the rotor Back EMF.',
        hi: 'रोटर बैक EMF द्वारा संचालित स्थानीय ब्रेकिंग प्रतिरोध लूप में बहने वाली ब्रेकिंग धारा।',
        bn: 'রোটার ব্যাক EMF দ্বারা স্থানীয় ব্রেকিং রোধ সার্কিটে প্রবাহিত ব্রেকিং কারেন্ট।'
      },
      variables: [
        { symbol: 'R_B', name: { en: 'External braking resistor (Ω)', hi: 'बाहरी ब्रेकिंग प्रतिरोध (Ω)', bn: 'বহিঃস্থ ব্রেকিং রোধ (Ω)' } }
      ]
    },
    {
      id: 'f-plugging-braking-current',
      symbol: 'I_plug',
      expression: 'I_plug = (V + E_b) / (R_a + R_plug)',
      formula: 'I_{\\text{plug}} = \\frac{V + E_b}{R_a + R_{\\text{plug}}}',
      title: {
        en: 'Plugging (Reverse Voltage) Braking Current',
        hi: 'प्लगिंग (रिवर्स वोल्टेज) ब्रेकिंग धारा',
        bn: 'প্লাগিং (রিভার্স ভোল্টেজ) ব্রেকিং কারেন্ট'
      },
      description: {
        en: 'Instantaneous current during reverse-voltage plugging under additive supply and Back EMF potentials.',
        hi: 'सप्लाई और बैक EMF के योगात्मक प्रभाव के तहत रिवर्स-वोल्टेज प्लगिंग के दौरान तात्कालिक धारा।',
        bn: 'সাপ্লাই ও ব্যাক EMF এর সম্মিলিত প্রভাবে রিভার্স ভোল্টেজ প্লাগিংয়ের সময় প্রবাহিত কারেন্ট।'
      },
      variables: [
        { symbol: 'R_plug', name: { en: 'Plugging current-limiting resistor (Ω)', hi: 'प्लगिंग धारा-सीमित प्रतिरोध (Ω)', bn: 'প্লাগিং কারেন্ট সীমাবদ্ধকারী রোধ (Ω)' } }
      ]
    },
    {
      id: 'f-braking-torque-dynamic',
      symbol: 'T_braking',
      expression: 'T_B = K_t · Φ · I_braking',
      formula: 'T_{\\text{braking}} = K_t \\cdot \\Phi \\cdot I_{\\text{braking}} = \\frac{K_t \\cdot K_e \\cdot \\Phi^2 \\cdot N}{R_a + R_B}',
      title: {
        en: 'Instantaneous Dynamic Braking Torque',
        hi: 'तात्कालिक डायनामिक ब्रेकिंग टॉर्क',
        bn: 'তাত্ক্ষণিক ডায়নামিক ব্রেকিং টর্ক'
      },
      description: {
        en: 'Retarding electromagnetic torque directly proportional to flux squared and instantaneous rotational speed.',
        hi: 'मंदक विद्युत-चुंबकीय टॉर्क जो फ्लक्स के वर्ग और तात्कालिक गति के समानुपाती होता है।',
        bn: 'গতির বিপরীতমুখী ইলেক্ট্রোম্যাগনেটিক টর্ক যা ফ্লাক্সের বর্গ এবং ঘূর্ণন গতির সমানুপাতিক।'
      }
    }
  ],
  sections: [
    {
      id: 'sec-braking-modes',
      title: {
        en: 'Electric Braking Principles: Regenerative, Dynamic & Plugging',
        hi: 'विद्युत ब्रेकिंग सिद्धांत: रीजेनरेटिव, डायनामिक एवं प्लगिंग',
        bn: 'বৈদ্যুতিক ব্রেকিং নীতি: রিজেনারেটিভ, ডায়নামিক ও প্লাগিং'
      },
      content: {
        en: 'Electric braking eliminates mechanical wear by converting rotational kinetic energy into electrical energy. Regenerative braking feeds power back to the supply mains when overhauling loads make Eb > V. Dynamic braking dissipates kinetic energy into an external resistor bank RB. Plugging reverses armature polarity, creating an additive potential (V + Eb) that produces massive deceleration torque, requiring an automatic anti-plugging relay to disconnect power at standstill.',
        hi: 'विद्युत ब्रेकिंग यांत्रिक घिसाव को रोकती है। रीजेनरेटिव ब्रेकिंग ढलान वाले लोड में Eb > V होने पर बिजली ग्रिड को लौटाती है। डायनामिक ब्रेकिंग गतिज ऊर्जा को बाहरी प्रतिरोध में गर्मी बनाकर नष्ट करती है। प्लगिंग आर्मेचर को उल्टा करके (V + Eb) का अत्यधिक ब्रेकिंग टॉर्क देती है, जिसमें शून्य गति पर मोटर को रोकने के लिए एंटी-प्लगिंग रिले की आवश्यकता होती है।',
        bn: 'বৈদ্যুতিক ব্রেকিং যান্ত্রিক ক্ষয় রোধ করে। রিজেনারেটিভ ব্রেকিং ওভারহলিং লোডে Eb > V হলে বিদ্যুৎ গ্রিডে ফেরত পাঠায়। ডায়নামিক ব্রেকিং গতিশক্তিকে বহিঃস্থ রোধে তাপে রূপান্তর করে। প্লাগিং আর্মেচার পোলারিটি উল্টে (V + Eb) এর মাধ্যমে সর্বোচ্চ ব্রেকিং টর্ক তৈরি করে, যা শূন্য গতিতে বন্ধ করতে অ্যান্টি-প্লাগিং রিলে আবশ্যক করে।'
      },
      schematicId: 'dc-motor-braking'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-braking-1',
      problem: {
        en: 'A 220 V DC shunt motor runs at 1000 RPM taking an armature current of 50 A. Armature resistance is 0.2 Ω. If dynamic (rheostatic) braking is applied by disconnecting from the supply and connecting across a 3.8 Ω braking resistor, calculate: (a) Initial braking current, (b) Initial braking torque expressed as a percentage of full-load motoring torque, assuming field flux remains constant.',
        hi: 'एक 220 V डीसी शंट मोटर 50 A आर्मेचर करंट लेकर 1000 RPM पर चलती है। Ra = 0.2 Ω। यदि मोटर को सप्लाई से अलग करके 3.8 Ω के ब्रेकिंग प्रतिरोध से जोड़कर डायनामिक ब्रेकिंग लगाई जाए, तो गणना कीजिए: (a) प्रारंभिक ब्रेकिंग करंट, (b) फुल-लोड मोटरिंग टॉर्क के प्रतिशत के रूप में प्रारंभिक ब्रेकिंग टॉर्क।',
        bn: 'একটি ২২০ V ডিসি শান্ট মোটর ৫০ A আর্মেচার কারেন্ট নিয়ে ১০০০ RPM এ ঘোরে। Ra = ০.২ Ω। সাপ্লাই বিচ্ছিন্ন করে ৩.৮ Ω ব্রেকিং রোধের সাথে যুক্ত করে ডায়নামিক ব্রেকিং প্রয়োগ করলে নির্ণয় করুন: (a) প্রাথমিক ব্রেকিং কারেন্ট, (b) পূর্ণ লোড মোটর টর্কের শতকরা হিসেবে প্রাথমিক ব্রেকিং টর্ক।'
      },
      solution: {
        en: `Step 1: Calculate Normal Motoring Back EMF (E_b):
E_b = V - I_a · R_a = 220 V - (50 A × 0.2 Ω) = 220 - 10 = 210.0 V

Step 2: Calculate Initial Dynamic Braking Current (I_B):
At the instant of switching (speed is still 1000 RPM, E_b = 210 V):
Total loop resistance: R_loop = R_a + R_B = 0.2 Ω + 3.8 Ω = 4.0 Ω
I_B = E_b / R_loop = 210.0 V / 4.0 Ω = 52.5 A

Step 3: Calculate Braking Torque as Percentage of Full-Load Torque:
Since Torque T ∝ Φ · I_a, and field flux Φ is constant:
T_braking / T_motoring = I_B / I_a(motoring) = 52.5 A / 50.0 A = 1.05
Braking Torque = 105.0% of rated full-load motoring torque.`,
        hi: `चरण 1: सामान्य Back EMF: E_b = 220 - (50 × 0.2) = 210.0 V
चरण 2: प्रारंभिक ब्रेकिंग धारा: I_B = 210 / (0.2 + 3.8) = 52.5 A
चरण 3: टॉर्क प्रतिशत: (52.5 / 50.0) × 100 = 105.0%`,
        bn: `ধাপ ১: সাধারণ Back EMF: E_b = ২২০ - (৫০ × ০.২) = ২১০.০ V
ধাপ ২: প্রাথমিক ব্রেকিং কারেন্ট: I_B = ২১০ / (০.২ + ৩.৮) = ৫২.৫ A
ধাপ ৩: টর্কের শতকরা হার: (৫২.৫ / ৫০.০) × ১০০ = ১০৫.০%`
      },
      finalAnswer: {
        en: 'Initial Braking Current = 52.5 A; Initial Braking Torque = 105.0% of rated motoring torque',
        hi: 'प्रारंभिक ब्रेकिंग धारा = 52.5 A; प्रारंभिक ब्रेकिंग टॉर्क = 105.0%',
        bn: 'প্রাথমিক ব্রেকিং কারেন্ট = ৫২.৫ A; প্রাথমিক ব্রেকিং টর্ক = ১০৫.০%'
      }
    },
    {
      id: 'ex-braking-2',
      problem: {
        en: 'A 240 V DC shunt motor runs at 900 RPM drawing 40 A. Armature resistance is 0.3 Ω. The motor is plugged (armature reversed). Calculate the external series resistance that must be inserted into the armature circuit to limit the initial plugging current to twice the rated full-load current (80 A).',
        hi: 'एक 240 V डीसी शंट मोटर 40 A करंट लेकर 900 RPM पर चलती है। Ra = 0.3 Ω। मोटर को प्लग (आर्मेचर उल्टा) किया जाता है। शुरुआती प्लगिंग करंट को फुल-लोड करंट के दोगुने (80 A) तक सीमित करने के लिए आर्मेचर परिपथ में कितना बाहरी प्रतिरोध जोड़ना होगा?',
        bn: 'একটি ২৪০ V ডিসি শান্ট মোটর ৪০ A কারেন্ট নিয়ে ৯০০ RPM এ চলে। Ra = ০.৩ Ω। মোটরটিতে প্লাগিং করা হলো। প্রাথমিক প্লাগিং কারেন্টকে পূর্ণ লোড কারেন্টের দ্বিগুণে (৮০ A) সীমাবদ্ধ রাখতে আর্মেচার সার্কিটে কত বহিঃস্থ রোধ যুক্ত করতে হবে?'
      },
      solution: {
        en: `Step 1: Calculate Normal Running Back EMF (E_b):
E_b = V - I_a · R_a = 240 V - (40 A × 0.3 Ω) = 240 - 12 = 228.0 V

Step 2: Total Effective Voltage during Plugging:
V_total = V + E_b = 240 V + 228.0 V = 468.0 V

Step 3: Calculate Required Total Circuit Resistance for I_plug = 80 A:
R_total = V_total / I_plug = 468.0 V / 80.0 A = 5.85 Ω

Step 4: Calculate External Plugging Series Resistance (R_plug):
R_plug = R_total - R_a = 5.85 Ω - 0.30 Ω = 5.55 Ω`,
        hi: `चरण 1: सामान्य Back EMF: E_b = 240 - (40 × 0.3) = 228.0 V
चरण 2: प्लगिंग में कुल वोल्टेज: V_total = 240 + 228 = 468.0 V
चरण 3: कुल आवश्यक प्रतिरोध: R_total = 468 / 80 = 5.85 Ω
चरण 4: बाहरी प्लगिंग प्रतिरोध: R_plug = 5.85 - 0.30 = 5.55 Ω`,
        bn: `ধাপ ১: স্বাভাবিক Back EMF: E_b = ২৪০ - (৪০ × ০.৩) = ২২৮.০ V
ধাপ ২: প্লাগিংয়ে মোট কার্যকর ভোল্টেজ: V_total = ২৪০ + ২২৮ = ৪৬৮.০ V
ধাপ ৩: মোট প্রয়োজনীয় রোধ: R_total = ৪৬৮ / ৮০ = ৫.৮৫ Ω
ধাপ ৪: প্রয়োজনীয় বহিঃস্থ রোধ: R_plug = ৫.৮৫ - ০.৩০ = ৫.৫৫ Ω`
      },
      finalAnswer: {
        en: 'Required External Plugging Resistance R_plug = 5.55 Ω (Total Net Voltage = 468 V)',
        hi: 'आवश्यक बाहरी प्लगिंग प्रतिरोध = 5.55 Ω (कुल वोल्टेज = 468 V)',
        bn: 'প্রয়োজনীয় বহিঃস্থ প্লাগিং রোধ = ৫.৫৫ Ω (মোট কার্যকর ভোল্টেজ = ৪৬৮ V)'
      }
    },
    {
      id: 'ex-braking-3',
      problem: {
        en: 'A 500 V DC locomotive motor descends a steep hill at a speed where its generated Back EMF rises to 540 V. The armature circuit resistance is 0.25 Ω. Calculate: (a) The regenerated current sent back into the 500 V DC overhead catenary wire, (b) The electrical power returned to the grid (in kW), and (c) The retarding mechanical braking power developed (in kW).',
        hi: 'एक 500 V डीसी लोकोमोटिव मोटर एक खड़ी ढलान पर ऐसी गति से उतरती है जहाँ उसका बैक EMF बढ़कर 540 V हो जाता है। आर्मेचर प्रतिरोध 0.25 Ω है। गणना कीजिए: (a) 500 V ओवरहेड लाइन को वापस भेजी गई रीजेनरेटेड धारा, (b) ग्रिड को लौटाई गई विद्युत शक्ति (kW में), तथा (c) विकसित मंदक यांत्रिक ब्रेकिंग शक्ति (kW में)।',
        bn: 'একটি ৫০০ V ডিসি লোকোমোটিভ মোটর খাড়া ঢাল বেয়ে নামার সময় ব্যাক EMF বৃদ্ধি পেয়ে ৫৪০ V হয়। আর্মেচার রোধ ০.২৫ Ω। নির্ণয় করুন: (a) ৫০০ V ওভারহেড লাইনে ফেরত পাঠানো কারেন্ট, (b) গ্রিডে পুনরুদ্ধারকৃত বৈদ্যুতিক ক্ষমতা (kW), এবং (c) উৎপন্ন যান্ত্রিক ব্রেকিং ক্ষমতা (kW)।'
      },
      solution: {
        en: `Step 1: Calculate Regenerated Armature Current:
Since E_b = 540 V > V = 500 V, current flows into the supply line:
I_a(regen) = (E_b - V) / R_a = (540 - 500) / 0.25 = 40 / 0.25 = 160.0 A

Step 2: Electrical Power Returned to the Grid:
P_grid = V · I_a = 500 V × 160.0 A = 80,000 W = 80.0 kW

Step 3: Total Retarding Mechanical Power Converted by Rotor:
P_mech(braking) = E_b · I_a = 540 V × 160.0 A = 86,400 W = 86.4 kW
(Note: The difference 86.4 kW - 80.0 kW = 6.4 kW is dissipated as internal I²Ra heat in the armature: 160² × 0.25 = 6400 W).`,
        hi: `चरण 1: रीजेनरेटेड धारा: I_a = (540 - 500) / 0.25 = 160.0 A
चरण 2: ग्रिड को वापस शक्ति: P = 500 × 160 = 80.0 kW
चरण 3: कुल यांत्रिक ब्रेकिंग शक्ति: P_mech = 540 × 160 = 86.4 kW`,
        bn: `ধাপ ১: ফেরত পাঠানো কারেন্ট: I_a = (৫৪০ - ৫০০) / ০.২৫ = ১৬০.০ A
ধাপ ২: গ্রিডে ফেরত বৈদ্যুতিক ক্ষমতা: P = ৫০০ × ১৬০ = ৮০.০ kW
ধাপ ৩: মোট যান্ত্রিক ব্রেকিং ক্ষমতা: P_mech = ৫৪০ × ১৬০ = ৮৬.৪ kW`
      },
      finalAnswer: {
        en: 'Regenerated Current = 160.0 A; Power Returned to Grid = 80.0 kW; Retarding Mechanical Power = 86.4 kW',
        hi: 'रीजेनरेटेड धारा = 160.0 A; ग्रिड को शक्ति = 80.0 kW; यांत्रिक ब्रेकिंग शक्ति = 86.4 kW',
        bn: 'পুনরুদ্ধারকৃত কারেন্ট = ১৬০.০ A; গ্রিডে ফেরত ক্ষমতা = ৮০.০ kW; যান্ত্রিক ব্রেকিং ক্ষমতা = ৮৬.৪ kW'
      }
    },
    {
      id: 'ex-braking-4',
      problem: {
        en: 'Describe the complete sequence of events when an industrial crane hoists and lowers a heavy shipping container using regenerative braking, detailing why regenerative braking is impossible below synchronous/no-load speed without an active power converter.',
        hi: 'जब एक औद्योगिक क्रेन रीजेनरेटिव ब्रेकिंग का उपयोग करके भारी कंटेनर को उठाती और नीचे उतारती है, तो पूरी प्रक्रिया का वर्णन कीजिए और स्पष्ट कीजिए कि बिना पावर कन्वर्टर के नो-लोड गति से नीचे रीजेनरेटिव ब्रेकिंग क्यों असंभव है।',
        bn: 'একটি শিল্প ক্রেন যখন রিজেনারেটিভ ব্রেকিং ব্যবহার করে ভারী কন্টেইনার তোলে ও নামায়, তখন সম্পূর্ণ প্রক্রিয়াটির বিশদ বিবরণ দিন এবং ব্যাখ্যা করুন কেন কনভার্টার ছাড়া নো-লোড গতির নিচে রিজেনারেটিভ ব্রেকিং সম্ভব নয়।'
      },
      solution: {
        en: `1. Hoisting Phase (Motoring Mode):
- The DC motor operates as a regular motor, drawing electric power from the DC supply bus.
- Electromagnetic torque T_a acts upward against gravity, lifting the load at steady speed.

2. Lowering Phase with Regenerative Braking:
- The heavy gravitational pull of the container pulls the winch drum downward, acting as an overhauling mechanical prime mover driving the rotor shaft.
- As downward speed accelerates, generated Back EMF rises until E_b > V_line.
- Armature current reverses into the supply line (I_a = (E_b - V)/R_a).
- This reverse current creates an upward retarding electromagnetic torque that holds the descending container at a safe, steady terminal lowering velocity.
- Rotational potential energy of the descending container is converted into electricity fed back to the factory grid.

3. Why Regeneration Fails at Low Speeds without Choppers:
- Since E_b = K_e · Φ · N, as rotational speed N drops below the base no-load speed N_0, Back EMF drops below line voltage (E_b < V).
- When E_b < V, current cannot naturally flow uphill into the higher voltage DC bus.
- In modern crane drives, a bidirectional PWM DC-DC Boost Chopper steps up the low Back EMF to overcome the bus voltage, extending regenerative capability down to near-zero speed.`,
        hi: `1. उठाते समय (मोटरिंग): मोटर सप्लाई से करंट लेकर गुरुत्वाकर्षण के विपरीत टॉर्क देकर लोड उठाती है।
2. नीचे उतारते समय (रीजेनरेशन): भारी लोड मोटर को तेजी से घुमाता है जिससे Eb > V हो जाता है। करंट उल्टा होकर बिजली ग्रिड को लौटती है और सुरक्षित गति पर लोड उतरता है।
3. कम गति पर सीमा: कम गति पर Eb < V हो जाता है, जिससे प्राकृतिक रूप से बिजली वापस नहीं जा सकती। आधुनिक ड्राइव में बूस्ट कन्वर्टर लगाकर कम गति पर भी रीजेनरेशन संभव किया जाता है।`,
        bn: `১. ওঠানোর সময় (মোটরিং): মোটর বিদ্যুৎ গ্রহণ করে অভিকর্ষের বিরুদ্ধে লোড উপরে তোলে।
২. নামানোর সময় (রিজেনারেশন): লোডের ভারে মোটর দ্রুত ঘুরে Eb > V তৈরি করে। উল্টো কারেন্ট প্রবাহিত হয়ে গ্রিডে বিদ্যুৎ ফেরত যায় এবং নিয়ন্ত্রিত গতিতে লোড নিচে নামে।
৩. কম গতিতে সীমাবদ্ধতা: গতি কমলে Eb < V হওয়ায় প্রাকৃতিকভাবে গ্রিডে কারেন্ট যেতে পারে না। আধুনিক সিস্টেমে বুস্ট চপারের মাধ্যমে ভোল্টেজ বাড়িয়ে কম গতিতেও রিজেনারেশন চালু রাখা হয়।`
      },
      finalAnswer: {
        en: 'Lowering loads drive the rotor so Eb > V, returning power to the grid. Below base speed, Eb < V prevents natural current flow unless a boost converter is used.',
        hi: 'उतारते समय Eb > V होने से बिजली ग्रिड में जाती है। बेस गति से नीचे Eb < V होने पर बिना बूस्ट कन्वर्टर के रीजेनरेशन नहीं हो सकता।',
        bn: 'লোড নামানোর সময় Eb > V হয়ে বিদ্যুৎ গ্রিডে ফেরত যায়। বেস গতির নিচে Eb < V হওয়ায় বুস্ট কনভার্টার ছাড়া বিদ্যুৎ ফেরত যাওয়া অসম্ভব।'
      }
    }
  ],
  practicalApplications: {
    en: [
      'High-Speed Electric Locomotives & Metro Trains: Regenerative braking captures up to 30% of total kinetic braking energy, returning power to overhead wires for accelerating nearby trains.',
      'Harbor Container Cranes & Industrial Hoists: Regenerative lowering securely holds 40-ton containers during rapid descent while regenerating electrical energy.',
      'Emergency Lathe & Industrial Spindle Stops: Rapid plugging circuits stop heavy rotating chucks within fraction of a second in the event of an operator emergency safety trip.',
      'Mine Shaft Cages & Elevators: Dynamic rheostatic braking banks ensure fail-safe controlled deceleration even if mains power grid collapses entirely.',
      'Electric Vehicles (EVs) & Battery Hybrid Drives: Bidirectional 4-quadrant motor controllers recharge the battery pack during braking and hill descents.'
    ],
    hi: [
      'हाई-स्पीड इलेक्ट्रिक ट्रेन एवं मेट्रो: रीजेनरेटिव ब्रेकिंग 30% गतिज ऊर्जा को वापस ओवरहेड वायर में भेजती है।',
      'कंटेनर क्रेन एवं पोर्ट होइस्ट: भारी कंटेनर को नीचे उतारते समय रीजेनरेटिव ब्रेकिंग सुरक्षित नियंत्रण एवं बिजली बचत देती है।',
      'लेथ मशीन एवं आपातकालीन स्टॉप: दुर्घटना के समय प्लगिंग द्वारा भारी स्पिंडल को एक सेकंड से कम समय में रोक दिया जाता है।',
      'माइन शाफ्ट एवं लिफ्ट: ग्रिड फेल होने पर भी डायनामिक ब्रेकिंग सुरक्षित रूप से लिफ्ट को रोकती है।',
      'इलेक्ट्रिक गाड़ियाँ (EV): ब्रेक लगाने पर बैटरी पैक को रीजेनरेटिव पावर से चार्ज किया जाता है।'
    ],
    bn: [
      'মেট্রো রেল ও ইলেকট্রিক ট্রেন: রিজেনারেটিভ ব্রেকিং প্রায় ৩০% ব্রেকিং শক্তি ওভারহেড লাইনে ফেরত পাঠায়।',
      'পোর্ট ক্রেন ও ভারী হোস্ট: ৪০ টন কন্টেইনার নামানোর সময় গতি নিয়ন্ত্রণ ও বিদ্যুৎ সাশ্রয় নিশ্চিত করে।',
      'লেদ মেশিন ও ইমার্জেন্সি স্টপ: জরুরি অবস্থায় প্লাগিং সার্কিট এক সেকেন্ডের ভগ্নাংশে স্পিন্ডল থামিয়ে দেয়।',
      'মাইন লিফট ও ড্রাইভ: বিদ্যুৎ চলে গেলেও ডায়নামিক ব্রেকিং নিরাপদে ক্যাব থামিয়ে দেয়।',
      'ইলেকট্রিক ভেহিকেল (EV): ব্রেক করার সময় রিজেনারেটিভ পদ্ধতিতে ব্যাটারি চার্জ হয়।'
    ]
  },
  importantPoints: {
    en: [
      'Electrical braking converts kinetic energy into electrical energy, eliminating mechanical brake pad friction wear and thermal burnout.',
      'Regenerative Braking occurs when an overhauling load drives the motor at speeds where Back EMF exceeds line voltage (Eb > V), returning power to the DC supply mains.',
      'Dynamic (Rheostatic) Braking disconnects the armature from the supply and reconnects it across a local braking resistor RB, dissipating 100% of kinetic energy as heat.',
      'Plugging reverses the armature terminal polarity while running, creating an additive circuit voltage (V + Eb ≈ 2V) and delivering maximum retarding braking torque.',
      'Plugging MUST always include an external current-limiting resistor (R_plug) and an automatic Anti-Plugging Switch to prevent the motor from reversing at zero speed.',
      'Mechanical friction brakes are still required in all industrial installations as static holding/parking brakes once the motor reaches complete standstill (0 RPM).'
    ],
    hi: [
      'विद्युत ब्रेकिंग गतिज ऊर्जा को विद्युत ऊर्जा में बदलकर यांत्रिक घिसाव को पूरी तरह समाप्त करती है।',
      'रीजेनरेटिव ब्रेकिंग में जब Eb > V होता है, तो ऊर्जा सीधे बिजली ग्रिड को लौटाई जाती है।',
      'डायनामिक ब्रेकिंग में आर्मेचर को सप्लाई से हटाकर बाहरी प्रतिरोध से जोड़ दिया जाता है, जिससे ऊर्जा गर्मी में बदल जाती है।',
      'प्लगिंग में आर्मेचर उल्टा करने पर कुल वोल्टेज (V + Eb ≈ 2V) हो जाता है, जिससे अत्यधिक मजबूत ब्रेकिंग मिलती है।',
      'प्लगिंग में करंट सीमित करने के लिए भारी श्रेणी प्रतिरोध और शून्य गति पर रोकने के लिए एंटी-प्लगिंग स्विच अनिवार्य है।',
      'पूरी तरह 0 RPM पर रुकने के बाद मोटर को रोके रखने के लिए यांत्रिक पार्किंग ब्रेक आवश्यक होते हैं।'
    ],
    bn: [
      'বৈদ্যুতিক ব্রেকিং গতিশক্তিকে বিদ্যুতে রূপান্তর করে যান্ত্রিক ব্রেকের ক্ষয় দূর করে।',
      'রিজেনারেটিভ ব্রেকিংয়ে ওভারহলিং লোডে Eb > V হলে বিদ্যুৎ সরাসরি সাপ্লাই লাইনে ফেরত যায়।',
      'ডায়নামিক ব্রেকিংয়ে আর্মেচারকে সাপ্লাই থেকে খুলে ব্রেকিং রোধে যুক্ত করে গতিশক্তি তাপে রূপান্তর করা হয়।',
      'প্লাগিংয়ে আর্মেচার উল্টে দিলে ভোল্টেজ (V + Eb ≈ 2V) হয়ে সর্বোচ্চ ব্রেকিং টর্ক পাওয়া যায়।',
      'প্লাগিংয়ে সিরিজ রোধ এবং শূন্য গতিতে সংযোগ বিচ্ছিন্ন করতে অ্যান্টি-প্লাগিং সুইচ আবশ্যক।',
      'মোটর পুরোপুরি স্থির (০ RPM) হওয়ার পর ধরে রাখতে মেকানিক্যাল পার্কিং ব্রেক প্রয়োজন।'
    ]
  },
  commonMistakes: {
    en: [
      'Assuming regenerative braking can bring a DC motor to a complete standstill (0 RPM): As speed decreases, generated Back EMF drops below line voltage (Eb < V), stopping regenerative power flow. A mechanical holding brake or dynamic brake is required for the final stop.',
      'Forgetting to insert a series limiting resistor during plugging: During plugging, the total circuit voltage is V + Eb (nearly double line voltage). Without an external series resistor, destructive flashover and winding burnout will occur.',
      'Omitting an anti-plugging switch relay: Without an anti-plugging relay to disconnect power precisely at 0 RPM, the motor will accelerate at full torque in the reverse direction instead of stopping.'
    ],
    hi: [
      'यह समझना कि रीजेनरेटिव ब्रेकिंग मोटर को पूरी तरह 0 RPM पर रोक सकती है: कम गति पर Eb < V हो जाता है, जिससे रीजेनरेशन रुक जाता है। पूरी तरह रोकने के लिए यांत्रिक ब्रेक जरूरी है।',
      'प्लगिंग के समय बाहरी श्रेणी प्रतिरोध लगाना भूल जाना: प्लगिंग में वोल्टेज (V + Eb) दोगुना हो जाता है, बिना प्रतिरोध के भारी शॉर्ट सर्किट और वाइंडिंग जल सकती है।'
    ],
    bn: [
      'মনে করা যে রিজেনারেটিভ ব্রেকিং দিয়ে মোটরকে সম্পূর্ণ শূন্য গতিতে (০ RPM) থামানো যায়: গতি কমলে Eb < V হয়ে যায়, ফলে রিজেনারেশন বন্ধ হয়। সম্পূর্ণ থামাতে মেকানিক্যাল ব্রেক আবশ্যক।',
      'প্লাগিংয়ে অতিরিক্ত সিরিজ রোধ বাদ দেওয়া: প্লাগিংয়ে ভোল্টেজ (V + Eb) দ্বিগুণ হয়; অতিরিক্ত রোধ ছাড়া তীব্র কারেন্টে ওয়াইন্ডিং পুড়ে যাবে।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-braking-1',
      question: {
        en: 'Under which specific operating condition does Regenerative Braking occur naturally in a DC motor drive?',
        hi: 'किस विशिष्ट प्रचालन स्थिति के तहत डीसी मोटर ड्राइव में रीजेनरेटिव ब्रेकिंग स्वाभाविक रूप से होती है?',
        bn: 'কোন নির্দিষ্ট অপারেটিং অবস্থায় ডিসি মোটর ড্রাইভে প্রাকৃতিকভাবে রিজেনারেটিভ ব্রেকিং সংঘটিত হয়?'
      },
      options: [
        {
          id: 'opt-a',
          text: {
            en: 'When an overhauling load drives the motor such that its rotational Back EMF exceeds the supply line voltage (Eb > V).',
            hi: 'जब कोई ओवरहॉलिंग लोड मोटर को इस प्रकार चलाता है कि उसका बैक EMF सप्लाई वोल्टेज से अधिक हो जाता है (Eb > V)।',
            bn: 'যখন কোনো ওভারহলিং লোড মোটরকে এমন গতিতে ঘোরায় যাতে উৎপন্ন ব্যাক EMF সাপ্লাই ভোল্টেজকে ছাড়িয়ে যায় (Eb > V)।'
          }
        },
        {
          id: 'opt-b',
          text: {
            en: 'When the field winding is completely disconnected from the power source.',
            hi: 'जब फील्ड वाइंडिंग को बिजली स्रोत से पूरी तरह काट दिया जाता है।',
            bn: 'যখন ফিল্ড ওয়াইন্ডিংকে পাওয়ার সোর্স থেকে সম্পূর্ণ বিচ্ছিন্ন করা হয়।'
          }
        },
        {
          id: 'opt-c',
          text: {
            en: 'When supply voltage is increased to three times its rated value.',
            hi: 'जब सप्लाई वोल्टेज को उसके रेटेड मान से तीन गुना बढ़ा दिया जाता है।',
            bn: 'যখন সরবরাহ ভোল্টেজ রেটেড মানের তিন গুণ করা হয়।'
          }
        },
        {
          id: 'opt-d',
          text: {
            en: 'When the armature resistance increases to infinity.',
            hi: 'जब आर्मेचर प्रतिरोध बढ़कर अनंत हो जाता है।',
            bn: 'যখন আর্মেচার রোধ বৃদ্ধি পেয়ে অসীম হয়।'
          }
        }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'When Eb > V, armature current reverses (Ia = (Eb - V)/Ra), returning power to the supply and generating retarding braking torque.',
        hi: 'जब Eb > V होता है, तो करंट की दिशा उलट जाती है और मोटर ग्रिड को बिजली लौटाते हुए ब्रेकिंग टॉर्क पैदा करती है।',
        bn: 'যখন Eb > V হয়, কারেন্টের দিক উল্টে গ্রিডে বিদ্যুৎ ফেরত যায় এবং গতি প্রতিরোধকারী ব্রেকিং টর্ক তৈরি হয়।'
      }
    },
    {
      id: 'mcq-braking-2',
      question: {
        en: 'During the Plugging (Reverse Voltage) braking method of a DC motor, what is the net voltage acting across the armature circuit?',
        hi: 'डीसी मोटर की प्लगिंग (रिवर्स वोल्टेज) ब्रेकिंग विधि के दौरान आर्मेचर परिपथ के आर-पार कुल प्रभावी वोल्टेज क्या होता है?',
        bn: 'ডিসি মোটরে প্লাগিং (রিভার্স ভোল্টেজ) ব্রেকিং পদ্ধতির সময় আর্মেচার সার্কিটে মোট কার্যকর ভোল্টেজ কত হয়?'
      },
      options: [
        {
          id: 'opt-a',
          text: {
            en: 'V + Eb (Supply voltage and Back EMF add in series, approximately doubling the circuit potential).',
            hi: 'V + Eb (सप्लाई वोल्टेज और बैक EMF श्रेणी में जुड़ जाते हैं, जिससे कुल वोल्टेज लगभग दोगुना हो जाता है)।',
            bn: 'V + Eb (সাপ্লাই ভোল্টেজ এবং ব্যাক EMF সিরিজে যুক্ত হয়ে কার্যকর ভোল্টেজ প্রায় দ্বিগুণ করে)।'
          }
        },
        {
          id: 'opt-b',
          text: {
            en: 'V - Eb (The standard motoring difference voltage).',
            hi: 'V - Eb (मानक मोटरिंग अंतर वोल्टेज)।',
            bn: 'V - Eb (স্বাভাবিক মোটরিং ভোল্টেজ পার্থক্য)।'
          }
        },
        {
          id: 'opt-c',
          text: {
            en: 'Zero Volts.',
            hi: 'शून्य वोल्ट।',
            bn: 'শূন্য ভোল্ট।'
          }
        },
        {
          id: 'opt-d',
          text: {
            en: 'Eb / 2.',
            hi: 'Eb / 2।',
            bn: 'Eb / ২।'
          }
        }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'Because armature polarity is reversed while rotor continues spinning, Back EMF and line supply act in the same direction, giving V_net = V + Eb.',
        hi: 'आर्मेचर उल्टा होने पर बैक EMF और सप्लाई वोल्टेज एक ही दिशा में जुड़ जाते हैं, जिससे कुल वोल्टेज V + Eb हो जाता है।',
        bn: 'আর্মেচার টার্মিনাল উল্টে দিলে ব্যাক EMF ও সাপ্লাই ভোল্টেজ একই দিকে যুক্ত হয়ে মোট কার্যকর ভোল্টেজ V + Eb হয়।'
      }
    },
    {
      id: 'mcq-braking-3',
      question: {
        en: 'What is the purpose of an Anti-Plugging Switch (Zero-Speed Contactor) in an industrial DC motor reverse-voltage braking control system?',
        hi: 'औद्योगिक डीसी मोटर रिवर्स-वोल्टेज ब्रेकिंग कंट्रोल सिस्टम में एंटी-प्लगिंग स्विच (जीरो-स्पीड कॉन्टैक्टर) का क्या उद्देश्य है?',
        bn: 'শিল্প ডিসি মোটর রিভার্স ভোল্টেজ ব্রেকিং সিস্টেমে অ্যান্টি-প্লাগিং সুইচের (জিরো স্পিড কন্টাক্টর) কাজ কী?'
      },
      options: [
        {
          id: 'opt-a',
          text: {
            en: 'To automatically disconnect power the instant the rotor decelerates to zero speed, preventing the motor from reversing its rotation.',
            hi: 'जैसे ही रोटर शून्य गति पर आता है, तुरंत बिजली काट देना ताकि मोटर उल्टी दिशा में न घूमने लगे।',
            bn: 'রোটরের গতি শূন্যে পৌঁছামাত্র বিদ্যুৎ সংযোগ বিচ্ছিন্ন করা, যাতে মোটরটি বিপরীত দিকে ঘুরতে শুরু না করে।'
          }
        },
        {
          id: 'opt-b',
          text: {
            en: 'To continuously lubricate the carbon brushes.',
            hi: 'कार्बन ब्रश को लगातार चिकनाई देना।',
            bn: 'কার্বন ব্রাশে নিয়মিত লুব্রিকেশন করা।'
          }
        },
        {
          id: 'opt-c',
          text: {
            en: 'To convert single-phase AC to 3-phase AC.',
            hi: 'सिंगल-फेज AC को 3-फेज AC में बदलना।',
            bn: 'সিঙ্গেল ফেজ এসিকে ৩-ফেজ এসিতে রূপান্তর করা।'
          }
        },
        {
          id: 'opt-d',
          text: {
            en: 'To increase the field flux by 500%.',
            hi: 'फील्ड फ्लक्स को 500% बढ़ाना।',
            bn: 'ফিল্ড ফ্লাক্স ৫০০% বৃদ্ধি করা।'
          }
        }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'Without an anti-plugging relay to open the contactor at zero speed, the reversed supply polarity would cause the motor to accelerate up to full speed in the reverse direction.',
        hi: 'यदि शून्य गति पर बिजली न काटी जाए, तो उल्टी ध्रुवीयता के कारण मोटर उल्टी दिशा में पूरी गति से चलने लगेगी।',
        bn: 'শূন্য গতিতে সংযোগ না কাটলে বিপরীত পোলারিটির কারণে মোটর বিপরীত দিকে সম্পূর্ণ গতিতে চলতে শুরু করবে।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-braking-1',
      question: {
        en: 'A 230 V DC shunt motor runs at 1200 RPM drawing 30 A. Armature resistance is 0.25 Ω. Calculate: (a) Initial braking current if dynamic braking is applied with an external 4.75 Ω resistor, (b) Initial braking current if plugged with an external series resistor of 5.75 Ω.',
        hi: 'एक 230 V डीसी शंट मोटर 30 A करंट लेकर 1200 RPM पर चलती है। Ra = 0.25 Ω। गणना कीजिए: (a) 4.75 Ω के बाहरी प्रतिरोध के साथ डायनामिक ब्रेकिंग लगाने पर प्रारंभिक ब्रेकिंग करंट, (b) 5.75 Ω के बाहरी प्रतिरोध के साथ प्लगिंग करने पर प्रारंभिक ब्रेकिंग करंट।',
        bn: 'একটি ২৩০ V ডিসি শান্ট মোটর ৩০ A কারেন্ট নিয়ে ১২০০ RPM এ ঘোরে। Ra = ০.২৫ Ω। নির্ণয় করুন: (a) ৪.৭৫ Ω বহিঃস্থ রোধসহ ডায়নামিক ব্রেকিংয়ে প্রাথমিক কারেন্ট, (b) ৫.৭৫ Ω বহিঃস্থ রোধসহ প্লাগিংয়ে প্রাথমিক কারেন্ট।'
      },
      hint: {
        en: '1) Find Eb = V - Ia·Ra = 230 - (30 × 0.25) = 222.5 V. 2) Dynamic: IB = Eb / (Ra + RB). 3) Plugging: Iplug = (V + Eb) / (Ra + Rplug).',
        hi: '1) Eb = 230 - 7.5 = 222.5 V। 2) डायनामिक: 222.5 / (0.25 + 4.75) = 44.5 A। 3) प्लगिंग: (230 + 222.5) / (0.25 + 5.75) = 75.42 A।',
        bn: '১) Eb = ২৩০ - ৭.৫ = ২২২.৫ V। ২) ডায়নামিক: ২২২.৫ / (০.২৫ + ৪.৭৫) = ৪৪.৫ A। ৩) প্লাগিং: (২৩০ + ২২২.৫) / (০.২৫ + ৫.৭৫) = ৭৫.৪২ A।'
      },
      answerKey: {
        en: '1. Running Back EMF Eb = 230 - (30 × 0.25) = 222.5 V.\n2. Dynamic Braking Current IB = 222.5 V / (0.25 + 4.75) Ω = 222.5 / 5.0 = 44.50 A.\n3. Plugging Braking Current Iplug = (230 + 222.5) V / (0.25 + 5.75) Ω = 452.5 / 6.0 = 75.42 A.',
        hi: '1. Back EMF = 222.5 V।\n2. डायनामिक ब्रेकिंग धारा = 44.50 A।\n3. प्लगिंग ब्रेकिंग धारा = 75.42 A।',
        bn: '১. Back EMF = ২২২.৫ V।\n২. ডায়নামিক ব্রেকিং কারেন্ট = ৪৪.৫০ A।\n৩. প্লাগিং ব্রেকিং কারেন্ট = ৭৫.৪২ A।'
      }
    },
    {
      id: 'pq-braking-2',
      question: {
        en: 'Explain why pure electric braking methods must always be supplemented by mechanical friction holding brakes in real-world industrial installations such as passenger elevators and mine winders.',
        hi: 'स्पष्ट कीजिए कि यात्री लिफ्ट और माइन वाइंडर्स जैसे वास्तविक औद्योगिक प्रतिष्ठानों में शुद्ध विद्युत ब्रेकिंग विधियों के साथ यांत्रिक फ्रिक्शन होल्डिंग ब्रेक लगाना हमेशा क्यों अनिवार्य है।',
        bn: 'যাত্রী লিফট এবং মাইন ওয়াইন্ডারের মতো বাস্তব শিল্প ক্ষেত্রে বিশুদ্ধ বৈদ্যুতিক ব্রেকিংয়ের পাশাপাশি যান্ত্রিক ঘর্ষণ হোল্ডিং ব্রেক থাকা কেন সর্বদা বাধ্যতামূলক তা ব্যাখ্যা করুন।'
      },
      hint: {
        en: 'Consider what happens at zero speed (Eb = 0, so braking torque collapses to zero), and what happens during a total power failure on a suspended vertical elevator cab.',
        hi: 'शून्य गति पर Eb = 0 होने से टॉर्क समाप्त हो जाने तथा बिजली गुल होने पर लटकी हुई लिफ्ट की सुरक्षा पर विचार कीजिए।',
        bn: 'শূন্য গতিতে Eb = 0 হওয়ায় ব্রেকিং টর্ক শূন্য হওয়া এবং বিদ্যুৎ চলে গেলে ঝুলন্ত লিফটের সুরক্ষার বিষয়টি বিবেচনা করুন।'
      },
      answerKey: {
        en: '1. As motor speed approaches zero, Back EMF collapses to zero (Eb -> 0), meaning all electromagnetic braking torques (regenerative and dynamic) vanish at standstill, leaving the shaft unconstrained.\n2. In vertical hoists, cranes, and passenger elevators, suspended loads would immediately drop under gravity without a mechanical spring-set, electrically released friction brake (Holding / Parking Brake) that firmly locks the drum at zero speed and provides fail-safe emergency holding upon sudden grid power failure.',
        hi: '1. शून्य गति पर बैक EMF शून्य हो जाने से विद्युत ब्रेकिंग टॉर्क समाप्त हो जाता है।\n2. लिफ्ट या क्रेन में लटके हुए भार को शून्य गति पर रोके रखने और बिजली जाने पर गिरने से बचाने के लिए यांत्रिक पार्किंग ब्रेक अनिवार्य होते हैं।',
        bn: '১. শূন্য গতিতে ব্যাক EMF শূন্য হওয়ায় সব ধরনের ইলেক্ট্রোম্যাগনেটিক ব্রেকিং টর্ক বিলুপ্ত হয়।\n২. লিফট বা ক্রেনে ঝুলন্ত লোড যাতে অভিকর্ষের টানে নিচে না পড়ে এবং বিদ্যুৎ চলে গেলেও যেন নিরাপদে আটকে থাকে, সেজন্য মেকানিক্যাল পার্কিং ব্রেক অপরিহার্য।'
      }
    }
  ]
};
