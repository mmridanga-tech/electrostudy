import { Lesson } from '../types';

export const LESSON_DC_MOTOR_SPEED_CONTROL: Lesson = {
  id: 'lsn-ch6-dc-motor-speed-control',
  topicId: 'ch6-dc-motor-speed-control',
  chapterId: 'ch-electrical-machines',
  order: 11,
  title: {
    en: 'DC Motor Speed Control Methods',
    hi: 'डीसी मोटर गति नियंत्रण विधियाँ',
    bn: 'ডিসি মোটরের গতি নিয়ন্ত্রণ পদ্ধতি'
  },
  description: {
    en: 'Comprehensive analysis of DC motor speed control: Speed equation derivation, Flux Control (Field Rheostat method for speeds above base speed), Armature Resistance Control (Rheostatic method for speeds below base speed), Armature Voltage Control (Ward-Leonard System), solid-state chopper/converter drives, and Constant Torque vs Constant Power operating regions.',
    hi: 'डीसी मोटर गति नियंत्रण का विस्तृत विश्लेषण: गति समीकरण का निगमन, फ्लक्स नियंत्रण (बेस गति से ऊपर के लिए फील्ड रियोस्टैट विधि), आर्मेचर प्रतिरोध नियंत्रण (बेस गति से नीचे के लिए रियोस्टैटिक विधि), आर्मेचर वोल्टेज नियंत्रण (वार्ड-लियोनार्ड प्रणाली), सॉलिड-स्टेट चॉपर/कन्वर्टर ड्राइव एवं स्थिर टॉर्क बनाम स्थिर शक्ति प्रचालन क्षेत्र।',
    bn: 'ডিসি মোটরের গতি নিয়ন্ত্রণের বিশদ বিশ্লেষণ: গতি সমীকরণ প্রতিপাদন, ফ্লাক্স নিয়ন্ত্রণ (বেস গতির উপরে ফিল্ড রিহোস্ট্যাট পদ্ধতি), আর্মেচার রোধ নিয়ন্ত্রণ (বেস গতির নিচে রিহোস্ট্যাটিক পদ্ধতি), আর্মেচার ভোল্টেজ নিয়ন্ত্রণ (ওয়ার্ড-লিওনার্ড সিস্টেম), সলিড-স্টেট চপার/কনভার্টার ড্রাইভ এবং ধ্রুবক টর্ক বনাম ধ্রুবক পাওয়ার কার্যসীমা।'
  },
  estimatedMinutes: 40,
  easyExplanation: {
    en: 'Controlling the rotational speed of a DC motor is remarkably flexible and intuitive because it stems directly from the motor speed equation: Speed N is directly proportional to Back EMF (Eb) and inversely proportional to magnetic flux (Φ). By adjusting two external circuit parameters, we can achieve full-range speed control: 1) To run faster than rated base speed, we add resistance in the field circuit to weaken the magnetic field (Flux Weakening Control). With less magnetic resistance to rotation, the rotor speeds up. 2) To run slower than rated base speed, we either add resistance in series with the armature to reduce the voltage reaching the rotor, or smoothly vary the applied armature voltage using a dedicated generator set (Ward-Leonard System) or modern solid-state electronics. This wide, precise control range makes DC motors legendary in heavy industrial machinery.',
    hi: 'डीसी मोटर की गति को नियंत्रित करना बहुत सरल और लचीला है क्योंकि गति N सीधे बैक EMF (Eb) के समानुपाती और चुंबकीय फ्लक्स (Φ) के व्युत्क्रमानुपाती होती है। दो मुख्य तरीकों से गति नियंत्रित की जाती है: 1) बेस गति से तेज चलाने के लिए, फील्ड परिपथ में प्रतिरोध जोड़कर चुंबकीय फ्लक्स को कमजोर किया जाता है (फ्लक्स नियंत्रण)। 2) बेस गति से धीमी गति पर चलाने के लिए, आर्मेचर के सीरीज में प्रतिरोध जोड़कर वोल्टेज घटाया जाता है, या फिर वार्ड-लियोनार्ड सिस्टम अथवा आधुनिक इलेक्ट्रॉनिक कन्वर्टर्स द्वारा आर्मेचर वोल्टेज को नियंत्रित किया जाता है।',
    bn: 'ডিসি মোটরের ঘূর্ণন গতি নিয়ন্ত্রণ অত্যন্ত নমনীয় ও কার্যকর কারণ গতি N সরাসরি ব্যাক EMF (Eb) এর সমানুপাতিক এবং চৌম্বক ফ্লাক্স (Φ) এর ব্যস্তানুপাতিক। মূলত দুটি প্রধান পদ্ধতিতে গতি নিয়ন্ত্রণ করা হয়: ১) স্বাভাবিক বেস গতির চেয়ে বেশি গতিতে চালাতে ফিল্ডে রোধ যুক্ত করে চৌম্বক ফ্লাক্স দুর্বল করা হয় (ফ্লাক্স কন্ট্রোল)। ২) বেস গতির চেয়ে কম গতিতে চালাতে আর্মেচারের সাথে সিরিজ রোধ যুক্ত করে অথবা ওয়ার্ড-লিওনার্ড সিস্টেম/সলিড-স্টেট ড্রাইভের সাহায্যে আর্মেচার ভোল্টেজ মসৃণভাবে পরিবর্তন করা হয়।'
  },
  detailedExplanation: {
    en: `1. Mathematical Derivation of the Fundamental Speed Equation:
From the Back EMF equation of a DC machine:
E_b = (P · Φ · Z · N) / (60 · A) [Volts]
Solving explicitly for rotational speed N (RPM):
N = [ (60 · A) / (P · Z) ] · (E_b / Φ)

Since for any manufactured motor, the number of poles (P), total armature conductors (Z), and parallel paths (A) are fixed physical constants:
Let machine speed constant K_n = (60 · A) / (P · Z) = 1 / K_e
Therefore:
N = K_n · (E_b / Φ)
Substitute Back EMF balance: E_b = V - I_a · R_a
N = K_n · [ (V - I_a · R_a) / Φ ]

This master equation reveals the THREE fundamental physical mechanisms for speed regulation:
- A. Variation of Magnetic Flux per Pole (Φ) -> Flux / Field Control.
- B. Variation of Armature Circuit Resistance (R_a) -> Rheostatic / Armature Resistance Control.
- C. Variation of Applied Armature Terminal Voltage (V) -> Armature Voltage Control (Ward-Leonard / Converter Control).

2. Method 1: Field Control (Flux Weakening Method):
A. Operating Principle:
- A variable rheostat (R_ext) is connected in series with the shunt field winding.
- By increasing R_ext, the field current decreases: I_sh = V / (R_sh + R_ext).
- Reduced field current reduces the magnetic flux Φ per pole.
- Since N ∝ 1/Φ, rotational speed N increases ABOVE rated base speed (N_base).

B. Step-by-Step Physics of Acceleration:
- 1. When Φ is abruptly reduced, E_b = K_e · Φ · N instantaneously drops.
- 2. Armature current surges: I_a = (V - E_b) / R_a.
- 3. Developed torque T_a = K_t · Φ · I_a increases because I_a increases by a much larger percentage than Φ decreases.
- 4. Excess motor torque over load torque accelerates the armature until E_b builds back up to restore torque equilibrium at a higher stable RPM.

C. Characteristics & Operating Region:
- Speed Range: Always ABOVE base speed (typically 1.0× to 3.0× N_base).
- Nature of Drive: Constant Power Drive (P = T_a · ω = Constant).
  * As speed increases, maximum permissible torque decreases proportionally to prevent armature thermal overloading (T_a ∝ 1/N).
- Efficiency: Extremely high (90–95%) because field current is very small (1–3% of total line current), meaning I_sh² · R_ext losses are negligible.
- Limitations: Top speed is limited by mechanical centrifugal stress on rotor windings, commutation sparking (weak main field increases armature reaction distortion), and minimum flux needed for stable operation.

3. Method 2: Armature Resistance Control (Rheostatic Method):
A. Operating Principle:
- A heavy-duty variable controller rheostat (R_ext) is connected in series with the armature.
- The speed equation becomes:
  N = K_n · [ (V - I_a · (R_a + R_ext)) / Φ ]
- As R_ext is increased, the internal voltage drop I_a · (R_a + R_ext) increases, leaving less Back EMF E_b for rotation.
- Speed N drops proportionally BELOW rated base speed.

B. Characteristics & Operating Region:
- Speed Range: Exclusively BELOW base speed (0 to N_base).
- Nature of Drive: Constant Torque Drive.
  * Armature current I_a can be maintained at full rated value without overheating: T_max = K_t · Φ · I_rated = Constant.
  * Output power capability scales linearly with speed: P_out ∝ N.
- Major Drawbacks:
  * 1. Huge Energy Waste: Massive I_a² · R_ext heating losses occur directly in the series rheostat. At half speed (50% N_base), 50% of the input power is dissipated as wasted heat in the resistor!
  * 2. Poor Speed Regulation: The speed drop depends directly on load current I_a. If load torque fluctuates, the motor speed swings wildly.

4. Method 3: Armature Voltage Control (The Ward-Leonard System):
A. System Architecture:
- Consists of three machines:
  * 1. A constant-speed AC drive motor (3-phase induction or synchronous motor).
  * 2. A separately excited DC Generator (G) driven by the AC motor.
  * 3. The main variable-speed DC Work Motor (M) whose armature is connected directly across Generator G.
  * 4. A small DC exciter supplying constant field excitation to both G and M.
- Control Operation:
  * By adjusting a small field rheostat on Generator G, the generator output voltage V_G applied to Motor M is smoothly varied from 0 to +V_rated (and reversed to -V_rated by reversing generator field polarity).
  * Motor M field is maintained at full strength Φ_rated during this voltage control phase (0 to N_base).
  * For speeds above N_base, generator voltage is held at V_rated, and motor field rheostat is adjusted for flux weakening (N_base to 3× N_base).

B. Advantages of Ward-Leonard System:
- Unmatched speed control range: Smooth, stepless control from 0 RPM to maximum speed in BOTH clockwise and counter-clockwise directions without power contactors.
- Inherent Four-Quadrant Operation: Enables motoring and regenerative braking in both forward and reverse directions.
- High Efficiency compared to rheostatic control: Energy is converted electromagnetically rather than dissipated in giant resistors.
- Modern Replacement: Modern industrial drives achieve identical performance using Solid-State Thyristor/IGBT DC Choppers and Phase-Controlled Rectifiers.

5. Operating Regions: Constant Torque vs. Constant Power:
- Region 1 (Below Base Speed: 0 to N_base):
  * Method: Armature Voltage Control (V varies, Φ = Φ_rated).
  * Torque: Constant (T_max = K_t · Φ · I_rated).
  * Power: Linearly proportional to speed (P = T · ω ∝ N).
- Region 2 (Above Base Speed: N_base to N_max):
  * Method: Field Weakening Control (V = V_rated, Φ reduced).
  * Torque: Decreases inversely with speed (T ∝ 1/N).
  * Power: Constant (P = T · ω = Constant).`,
    hi: `1. गति समीकरण का गणितीय निगमन:
- बैक EMF समीकरण: E_b = (P · Φ · Z · N) / (60 · A)
- गति N के लिए हल करने पर:
  N = [ (60 · A) / (P · Z) ] · (E_b / Φ) = K_n · [ (V - I_a · R_a) / Φ ]
- गति नियंत्रण के तीन मूल तरीके:
  1. फील्ड फ्लक्स (Φ) में परिवर्तन -> फील्ड नियंत्रण (बेस गति से ऊपर)।
  2. आर्मेचर प्रतिरोध (Ra) में परिवर्तन -> रियोस्टैटिक नियंत्रण (बेस गति से नीचे)।
  3. आर्मेचर वोल्टेज (V) में परिवर्तन -> वोल्टेज नियंत्रण / वार्ड-लियोनार्ड (शून्य से बेस गति तक)।

2. फील्ड नियंत्रण विधि (फ्लक्स दुर्बलीकरण):
- सिद्धांत: शंट फील्ड के सीरीज में रियोस्टैट लगाकर फील्ड करंट (Ish) और फ्लक्स (Φ) घटाया जाता है।
- चूंकि N ∝ 1/Φ, गति बेस गति से ऊपर बढ़ जाती है।
- विशेषता: स्थिर शक्ति प्रचालन (Constant Power Drive)।
- दक्षता: बहुत उच्च (90-95%) क्योंकि फील्ड करंट बहुत कम होता है।

3. आर्मेचर प्रतिरोध नियंत्रण विधि:
- सिद्धांत: आर्मेचर के सीरीज में भारी प्रतिरोध जोड़कर आर्मेचर पर मिलने वाले वोल्टेज और Back EMF को घटाया जाता है।
- गति बेस गति से नीचे प्राप्त होती है।
- विशेषता: स्थिर टॉर्क प्रचालन (Constant Torque Drive)।
- कमियाँ: भारी I²R ऊर्जा हानि (कम गति पर दक्षता बहुत कम होती है) तथा लोड बदलने पर गति में भारी उतार-चढ़ाव।

4. वार्ड-लियोनार्ड वोल्टेज नियंत्रण प्रणाली:
- संरचना: एक AC मोटर एक DC जनरेटर को घुमाती है। जनरेटर का आउटपुट सीधे मुख्य DC मोटर को दिया जाता है।
- लाभ: शून्य से बेस गति तक दोनों दिशाओं में बिना झटके के स्मूथ गति नियंत्रण, रीजेनरेटिव ब्रेकिंग की सुविधा।
- आधुनिक रूप: आज इसके स्थान पर थाइरिस्टर/आईजीबीटी बेस्ड इलेक्ट्रॉनिक ड्राइव का उपयोग किया जाता है।

5. दो प्रमुख प्रचालन क्षेत्र:
- बेस गति से नीचे: स्थिर टॉर्क क्षेत्र (Constant Torque Region) — वोल्टेज नियंत्रण।
- बेस गति से ऊपर: स्थिर शक्ति क्षेत्र (Constant Power Region) — फील्ड दुर्बलीकरण।`,
    bn: `১. মৌলিক গতি সমীকরণ প্রতিপাদন:
- ব্যাক EMF: E_b = (P · Φ · Z · N) / (60 · A)
- গতি N এর সমীকরণ: N = K_n · [ (V - I_a · R_a) / Φ ]
- গতি নিয়ন্ত্রণের ৩টি পদ্ধতি:
  ১. ফিল্ড ফ্লাক্স (Φ) পরিবর্তন -> ফিল্ড নিয়ন্ত্রণ (বেস গতির উপরে)।
  ২. আর্মেচার রোধ (Ra) পরিবর্তন -> আর্মেচার রোধ নিয়ন্ত্রণ (বেস গতির নিচে)।
  ৩. আর্মেচার ভোল্টেজ (V) পরিবর্তন -> ওয়ার্ড-লিওনার্ড সিস্টেম (০ থেকে বেস গতি)।

২. ফিল্ড নিয়ন্ত্রণ পদ্ধতি (ফ্লাক্স উইকনিং):
- শান্ট ফিল্ডে রিহোস্ট্যাট যুক্ত করে কারেন্ট Ish কমালে ফ্লাক্স Φ হ্রাস পায়।
- N ∝ 1/Φ হওয়ায় মোটরের গতি বেস গতির উপরে বৃদ্ধি পায়।
- বৈশিষ্ট্য: ধ্রুবক পাওয়ার ড্রাইভ (Constant Power Drive)।
- দক্ষতা: অত্যন্ত উচ্চ (৯০–৯৫%) কারণ ফিল্ড সার্কিটে ক্ষয় অতি সামান্য।

৩. আর্মেচার রোধ নিয়ন্ত্রণ পদ্ধতি:
- আর্মেচারের সাথে সিরিজে পরিবর্তনশীল রোধ যোগ করে ভোল্টেজ ড্রপ বাড়ানো হয়।
- ফলে ব্যাক EMF হ্রাস পেয়ে গতি বেস গতির নিচে নেমে আসে।
- বৈশিষ্ট্য: ধ্রুবক টর্ক ড্রাইভ (Constant Torque Drive)।
- অসুবিধা: উচ্চ I²R তাপীয় শক্তি অপচয় এবং লোড পরিবর্তনে গতির অস্থিরতা।

৪. ওয়ার্ড-লিওনার্ড ভোল্টেজ নিয়ন্ত্রণ পদ্ধতি:
- একটি এসি মোটর দ্বারা চালিত ডিসি জেনারেটরের ভোল্টেজ নিয়ন্ত্রণ করে সরাসরি মূল ডিসি মোটরের গতি মসৃণভাবে শূন্য থেকে বেস গতি পর্যন্ত উভয় দিকে নিয়ন্ত্রণ করা হয়।
- সুবিধা: অসাধারণ রেঞ্জ, রিজেনারেটিভ ব্রেকিং এবং উচ্চ দক্ষতা। বর্তমানে থাইরিস্টর চপার ড্রাইভ এর আধুনিক বিকল্প।

৫. দুটি কার্যসীমা:
- বেস গতির নিচে: Constant Torque Region (আর্মেচার ভোল্টেজ নিয়ন্ত্রণ)।
- বেস গতির উপরে: Constant Power Region (ফিল্ড ফ্লাক্স নিয়ন্ত্রণ)।`
  },
  formulas: [
    {
      id: 'f-dc-speed-equation',
      symbol: 'N',
      expression: 'N = K_n · (V - I_a · R_a) / Φ',
      formula: 'N = K_n \\cdot \\frac{V - I_a \\cdot R_a}{\\Phi} = \\frac{60 \\cdot A}{P \\cdot Z} \\cdot \\frac{E_b}{\\Phi}',
      title: {
        en: 'Fundamental DC Motor Speed Equation',
        hi: 'मूल डीसी मोटर गति समीकरण',
        bn: 'মৌলিক ডিসি মোটর গতি সমীকরণ'
      },
      description: {
        en: 'Expresses motor rotational speed in terms of Back EMF, machine geometric constants, and magnetic flux per pole.',
        hi: 'बैक EMF, मशीन स्थिरांक एवं चुंबकीय फ्लक्स के संदर्भ में मोटर की घूर्णन गति व्यक्त करता है।',
        bn: 'ব্যাক EMF, মেশিন কনস্ট্যান্ট এবং চৌম্বক ফ্লাক্সের সাপেক্ষে মোটরের ঘূর্ণন গতি প্রকাশ করে।'
      },
      variables: [
        { symbol: 'N', name: { en: 'Rotational speed (RPM)', hi: 'घूर्णन गति (RPM)', bn: 'ঘূর্ণন গতি (RPM)' } },
        { symbol: 'E_b', name: { en: 'Back EMF (V)', hi: 'बैक EMF (V)', bn: 'ব্যাক EMF (V)' } },
        { symbol: 'Φ', name: { en: 'Magnetic flux per pole (Wb)', hi: 'प्रति पोल चुंबकीय फ्लक्स (Wb)', bn: 'প্রতি পোল চৌম্বক ফ্লাক্স (Wb)' } }
      ]
    },
    {
      id: 'f-speed-ratio-comparison',
      symbol: 'N2 / N1',
      expression: 'N2 / N1 = (Eb2 / Eb1) · (Φ1 / Φ2)',
      formula: '\\frac{N_2}{N_1} = \\left( \\frac{E_{b2}}{E_{b1}} \\right) \\cdot \\left( \\frac{\\Phi_1}{\\Phi_2} \\right) = \\left( \\frac{V - I_{a2} R_{a2}}{V - I_{a1} R_{a1}} \\right) \\cdot \\left( \\frac{\\Phi_1}{\\Phi_2} \\right)',
      title: {
        en: 'Speed Ratio Comparison Formula',
        hi: 'गति अनुपात तुलना सूत्र',
        bn: 'গতি অনুপাত তুলনা সূত্র'
      },
      description: {
        en: 'Relates speeds between two operating conditions under varying flux, armature resistance, or applied terminal voltage.',
        hi: 'विभिन्न फ्लक्स, आर्मेचर प्रतिरोध या वोल्टेज स्थितियों के तहत दो गति मानों के बीच संबंध।',
        bn: 'ভিন্ন ফ্লাক্স, আর্মেচার রোধ বা ভোল্টেজ অবস্থায় দুটি গতির মধ্যকার সম্পর্ক।'
      }
    },
    {
      id: 'f-armature-rheostat-drop',
      symbol: 'Eb(rheo)',
      expression: 'Eb2 = V - Ia · (Ra + R_ext)',
      formula: 'E_{b2} = V - I_a \\cdot (R_a + R_{\\text{ext}})',
      title: {
        en: 'Back EMF with External Armature Resistance',
        hi: 'बाहरी आर्मेचर प्रतिरोध के साथ बैक EMF',
        bn: 'বহিঃস্থ আর্মেচার রোধসহ ব্যাক EMF'
      },
      description: {
        en: 'Determines reduced Back EMF when external rheostatic resistance is inserted into the armature circuit.',
        hi: 'आर्मेचर परिपथ में बाहरी प्रतिरोध जोड़ने पर घटा हुआ बैक EMF निर्धारित करता है।',
        bn: 'আর্মেচার সার্কিটে বহিঃস্থ রোধ যুক্ত করলে হ্রাসকৃত ব্যাক EMF নির্ধারণ করে।'
      },
      variables: [
        { symbol: 'R_ext', name: { en: 'External series resistance (Ω)', hi: 'बाहरी श्रेणी प्रतिरोध (Ω)', bn: 'বহিঃস্থ সিরিজ রোধ (Ω)' } }
      ]
    },
    {
      id: 'f-torque-power-relation',
      symbol: 'P_mech',
      expression: 'P = T · ω = T · (2πN / 60)',
      formula: 'P_{\\text{mech}} = T_a \\cdot \\omega = T_a \\cdot \\left( \\frac{2\\pi \\cdot N}{60} \\right)',
      title: {
        en: 'Mechanical Power vs Torque and Speed',
        hi: 'यांत्रिक शक्ति बनाम टॉर्क एवं गति',
        bn: 'যান্ত্রিক শক্তি বনাম টর্ক ও গতি'
      },
      description: {
        en: 'Fundamental relationship governing Constant Torque (P ∝ N) and Constant Power (T ∝ 1/N) operating regimes.',
        hi: 'स्थिर टॉर्क (P ∝ N) तथा स्थिर शक्ति (T ∝ 1/N) प्रचालन क्षेत्रों को नियंत्रित करने वाला संबंध।',
        bn: 'ধ্রুবক টর্ক (P ∝ N) এবং ধ্রুবক পাওয়ার (T ∝ 1/N) কার্যসীমা নির্দেশক সম্পর্ক।'
      }
    }
  ],
  sections: [
    {
      id: 'sec-speed-control-mechanisms',
      title: {
        en: 'Speed Control Paradigms: Field Weakening, Rheostatic & Ward-Leonard',
        hi: 'गति नियंत्रण प्रणालियाँ: फील्ड दुर्बलीकरण, रियोस्टैटिक एवं वार्ड-लियोनार्ड',
        bn: 'গতি নিয়ন্ত্রণ পদ্ধতি: ফিল্ড দুর্বলকরণ, রিহোস্ট্যাটিক ও ওয়ার্ড-লিওনার্ড'
      },
      content: {
        en: 'DC motor speed N is governed by N = K_n · (Eb / Φ). Field control inserts resistance in the shunt field to weaken flux Φ, delivering highly efficient speeds above base speed in a Constant Power regime. Armature resistance control adds series resistance to drop Eb, yielding speeds below base speed in a Constant Torque regime at the expense of high I²R losses. Armature voltage control (Ward-Leonard system) delivers smooth, stepless 4-quadrant speed control from zero to base speed at high efficiency.',
        hi: 'डीसी मोटर की गति N = Kn · (Eb / Φ) द्वारा नियंत्रित होती है। फील्ड नियंत्रण द्वारा फ्लक्स Φ को घटाकर बेस गति से ऊपर अत्यधिक दक्षता के साथ स्थिर शक्ति क्षेत्र में गति बढ़ाई जाती है। आर्मेचर प्रतिरोध नियंत्रण द्वारा बेस गति से नीचे स्थिर टॉर्क क्षेत्र में गति घटाई जाती है, लेकिन इसमें ऊर्जा हानि अधिक होती है। वार्ड-लियोनार्ड प्रणाली आर्मेचर वोल्टेज बदलकर शून्य से बेस गति तक अत्यंत स्मूथ एवं दक्ष नियंत्रण प्रदान करती है।',
        bn: 'ডিসি মোটরের গতি N = Kn · (Eb / Φ) সমীকরণ মেনে চলে। ফিল্ড নিয়ন্ত্রণে ফ্লাক্স Φ কমিয়ে বেস গতির উপরে অত্যন্ত দক্ষতায় ধ্রুবক পাওয়ার অঞ্চলে গতি বাড়ানো হয়। আর্মেচার রোধ নিয়ন্ত্রণে ভোল্টেজ কমিয়ে বেস গতির নিচে ধ্রুবক টর্ক অঞ্চলে গতি কমানো হয়। ওয়ার্ড-লিওনার্ড সিস্টেমে ভোল্টেজ মসৃণভাবে পরিবর্তন করে শূন্য থেকে বেস গতি পর্যন্ত উচ্চ দক্ষতায় গতি নিয়ন্ত্রণ করা যায়।'
      },
      schematicId: 'dc-motor-speed-control'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-speed-1',
      problem: {
        en: 'A 250 V DC shunt motor runs at 1000 RPM while taking an armature current of 30 A. The armature resistance is 0.5 Ω. Calculate the speed if an external resistance of 2.0 Ω is inserted into the armature circuit, assuming the load torque remains constant and field flux is unchanged.',
        hi: 'एक 250 V डीसी शंट मोटर 30 A आर्मेचर करंट लेते हुए 1000 RPM पर चलती है। आर्मेचर प्रतिरोध 0.5 Ω है। यदि आर्मेचर परिपथ में 2.0 Ω का बाहरी प्रतिरोध जोड़ दिया जाए, तो मोटर की नई गति ज्ञात कीजिए, यह मानते हुए कि लोड टॉर्क स्थिर है और फील्ड फ्लक्स अपरिवर्तित है।',
        bn: 'একটি ২৫০ V ডিসি শান্ট মোটর ৩০ A আর্মেচার কারেন্ট নিয়ে ১০০০ RPM গতিতে ঘোরে। আর্মেচার রোধ ০.৫ Ω। আর্মেচার সার্কিটে ২.০ Ω বহিঃস্থ রোধ যুক্ত করলে নতুন গতি কত হবে? (ধরে নিন লোড টর্ক ও ফিল্ড ফ্লাক্স অপরিবর্তিত)।'
      },
      solution: {
        en: `Step 1: Calculate Initial Back EMF (E_b1):
E_b1 = V - I_a1 · R_a = 250 V - (30 A × 0.5 Ω) = 250 - 15 = 235.0 V
Initial Speed N1 = 1000 RPM

Step 2: Determine Armature Current at New Condition:
Since Torque T ∝ Φ · I_a, and both Torque and Flux are constant:
I_a2 = I_a1 = 30.0 A

Step 3: Calculate New Back EMF (E_b2) with External Resistance:
Total armature circuit resistance: R_total = R_a + R_ext = 0.5 + 2.0 = 2.5 Ω
E_b2 = V - I_a2 · R_total = 250 V - (30 A × 2.5 Ω) = 250 - 75 = 175.0 V

Step 4: Calculate New Speed (N2):
Since Φ1 = Φ2:
N2 / N1 = E_b2 / E_b1
N2 = N1 × (E_b2 / E_b1) = 1000 × (175.0 / 235.0) = 744.68 RPM`,
        hi: `चरण 1: प्रारंभिक Back EMF: E_b1 = 250 - (30 × 0.5) = 235.0 V
चरण 2: स्थिर टॉर्क के कारण नई धारा: I_a2 = 30.0 A
चरण 3: नया Back EMF: E_b2 = 250 - (30 × 2.5) = 175.0 V
चरण 4: नई गति: N2 = 1000 × (175 / 235) = 744.68 RPM`,
        bn: `ধাপ ১: প্রাথমিক Back EMF: E_b1 = ২৫০ - (৩০ × ০.৫) = ২৩৫.০ V
ধাপ ২: ধ্রুবক টর্কের জন্য নতুন কারেন্ট: I_a2 = ৩০.০ A
ধাপ ৩: নতুন Back EMF: E_b2 = ২৫০ - (৩০ × ২.৫) = ১৭৫.০ V
ধাপ ৪: নতুন গতি: N2 = ১০০০ × (১৭৫ / ২৩৫) = ৭৪৪.৬৮ RPM`
      },
      finalAnswer: {
        en: 'New Speed N2 = 744.68 RPM (Speed reduced by 25.5% below base speed)',
        hi: 'नई गति N2 = 744.68 RPM (बेस गति से 25.5% कम)',
        bn: 'নতুন গতি N2 = ৭৪৪.৬৮ RPM (বেস গতির চেয়ে ২৫.৫% কম)'
      }
    },
    {
      id: 'ex-speed-2',
      problem: {
        en: 'A 220 V DC shunt motor runs at 800 RPM taking an armature current of 25 A. Armature resistance is 0.4 Ω. If the magnetic flux is reduced by 20% by weakening the field, and the load torque remains constant, calculate: (a) New armature current I_a2, (b) New Back EMF E_b2, and (c) New motor speed N2.',
        hi: 'एक 220 V डीसी शंट मोटर 25 A आर्मेचर करंट लेकर 800 RPM पर चलती है। आर्मेचर प्रतिरोध 0.4 Ω है। यदि फील्ड कमजोर करके चुंबकीय फ्लक्स 20% घटा दिया जाए तथा लोड टॉर्क स्थिर रहे, तो गणना कीजिए: (a) नया आर्मेचर करंट I_a2, (b) नया बैक EMF E_b2, तथा (c) नई मोटर गति N2।',
        bn: 'একটি ২২০ V ডিসি শান্ট মোটর ২৫ A আর্মেচার কারেন্ট নিয়ে ৮০০ RPM গতিতে চলে। আর্মেচার রোধ ০.৪ Ω। ফিল্ড দুর্বল করে ফ্লাক্স ২০% কমালে এবং লোড টর্ক অপরিবর্তিত থাকলে নির্ণয় করুন: (a) নতুন আর্মেচার কারেন্ট I_a2, (b) নতুন ব্যাক EMF E_b2, এবং (c) নতুন গতি N2।'
      },
      solution: {
        en: `Step 1: Calculate Initial Back EMF (E_b1):
E_b1 = V - I_a1 · R_a = 220 V - (25 A × 0.4 Ω) = 220 - 10 = 210.0 V

Step 2: Calculate New Armature Current for Constant Torque:
Torque T ∝ Φ · I_a => Φ1 · I_a1 = Φ2 · I_a2
Given Φ2 = 0.80 · Φ1:
I_a2 = I_a1 × (Φ1 / Φ2) = 25 A × (1 / 0.80) = 31.25 A

Step 3: Calculate New Back EMF (E_b2):
E_b2 = V - I_a2 · R_a = 220 V - (31.25 A × 0.4 Ω) = 220 - 12.5 = 207.5 V

Step 4: Calculate New Rotational Speed (N2):
N2 / N1 = (E_b2 / E_b1) × (Φ1 / Φ2)
N2 = 800 × (207.5 / 210.0) × (1 / 0.80)
N2 = 800 × 0.9881 × 1.25 = 988.10 RPM`,
        hi: `चरण 1: प्रारंभिक Back EMF: E_b1 = 220 - (25 × 0.4) = 210.0 V
चरण 2: नया आर्मेचर करंट: I_a2 = 25 / 0.80 = 31.25 A
चरण 3: नया Back EMF: E_b2 = 220 - (31.25 × 0.4) = 207.5 V
चरण 4: नई गति: N2 = 800 × (207.5 / 210.0) × (1 / 0.80) = 988.10 RPM`,
        bn: `ধাপ ১: প্রাথমিক Back EMF: E_b1 = ২২০ - (২৫ × ০.৪) = ২১০.০ V
ধাপ ২: নতুন আর্মেচার কারেন্ট: I_a2 = ২৫ / ০.৮০ = ৩১.২৫ A
ধাপ ৩: নতুন Back EMF: E_b2 = ২২০ - (৩১.২৫ × ০.৪) = ২০৭.৫ V
ধাপ ৪: নতুন গতি: N2 = ৮০০ × (২০৭.৫ / ২১০.০) × (১ / ০.৮০) = ৯৮৮.১০ RPM`
      },
      finalAnswer: {
        en: 'New Current I_a2 = 31.25 A, Back EMF E_b2 = 207.5 V, New Speed N2 = 988.10 RPM',
        hi: 'नया करंट I_a2 = 31.25 A, नया Back EMF = 207.5 V, नई गति N2 = 988.10 RPM',
        bn: 'নতুন কারেন্ট I_a2 = ৩১.২৫ A, নতুন Back EMF = ২০৭.৫ V, নতুন গতি N2 = ৯৮৮.১০ RPM'
      }
    },
    {
      id: 'ex-speed-3',
      problem: {
        en: 'A 230 V DC series motor runs at 750 RPM when drawing 40 A from the supply. Resistance of the armature is 0.3 Ω and series field resistance is 0.2 Ω. Calculate the speed when the current drops to 20 A, assuming the magnetic circuit is unsaturated (flux is directly proportional to current).',
        hi: 'एक 230 V डीसी सीरीज मोटर 40 A करंट लेते हुए 750 RPM पर चलती है। आर्मेचर प्रतिरोध 0.3 Ω तथा सीरीज फील्ड प्रतिरोध 0.2 Ω है। जब करंट घटकर 20 A हो जाए, तो गति की गणना कीजिए, यह मानते हुए कि चुंबकीय परिपथ असंतृप्त है (फ्लक्स धारा के समानुपाती है)।',
        bn: 'একটি ২৩০ V ডিসি সিরিজ মোটর ৪০ A কারেন্ট নিয়ে ৭৫০ RPM এ চলে। আর্মেচার রোধ ০.৩ Ω এবং সিরিজ ফিল্ড রোধ ০.২ Ω। কারেন্ট কমে ২০ A হলে মোটরের গতি কত হবে? (ধরে নিন ম্যাগনেটিক সার্কিট আনস্যাচুরেটেড এবং ফ্লাক্স কারেন্টের সমানুপাতিক)।'
      },
      solution: {
        en: `Step 1: Calculate Total Internal Resistance:
R_total = R_a + R_se = 0.3 + 0.2 = 0.50 Ω

Step 2: Calculate Initial Back EMF (E_b1) at I1 = 40 A:
E_b1 = V - I1 · R_total = 230 V - (40 A × 0.5 Ω) = 230 - 20 = 210.0 V

Step 3: Calculate Second Back EMF (E_b2) at I2 = 20 A:
E_b2 = V - I2 · R_total = 230 V - (20 A × 0.5 Ω) = 230 - 10 = 220.0 V

Step 4: Determine Flux Ratio:
Since flux is unsaturated: Φ ∝ I => Φ1 / Φ2 = I1 / I2 = 40 / 20 = 2.0

Step 5: Calculate New Speed (N2):
N2 / N1 = (E_b2 / E_b1) × (Φ1 / Φ2)
N2 = 750 × (220.0 / 210.0) × (40 / 20)
N2 = 750 × 1.0476 × 2.0 = 1571.43 RPM`,
        hi: `चरण 1: कुल प्रतिरोध: R_total = 0.3 + 0.2 = 0.50 Ω
चरण 2: प्रारंभिक Back EMF: E_b1 = 230 - (40 × 0.5) = 210.0 V
चरण 3: नया Back EMF: E_b2 = 230 - (20 × 0.5) = 220.0 V
चरण 4: फ्लक्स अनुपात: Φ1 / Φ2 = 40 / 20 = 2.0
चरण 5: नई गति: N2 = 750 × (220 / 210) × 2.0 = 1571.43 RPM`,
        bn: `ধাপ ১: মোট রোধ: R_total = ০.৩ + ০.২ = ০.৫০ Ω
ধাপ ২: প্রাথমিক Back EMF: E_b1 = ২৩০ - (৪০ × ০.৫) = ২১০.০ V
ধাপ ৩: নতুন Back EMF: E_b2 = ২৩০ - (২০ × ০.৫) = ২২০.০ V
ধাপ ৪: ফ্লাক্স অনুপাত: Φ1 / Φ2 = ৪০ / ২০ = ২.০
ধাপ ৫: নতুন গতি: N2 = ৭৫০ × (২২০ / ২১০) × ২.০ = ১৫৭১.৪৩ RPM`
      },
      finalAnswer: {
        en: 'New Speed N2 = 1571.43 RPM (Speed more than doubles as series current halves)',
        hi: 'नई गति N2 = 1571.43 RPM (करंट आधा होने पर गति दोगुनी से अधिक हो जाती है)',
        bn: 'নতুন গতি N2 = ১৫৭১.৪৩ RPM (কারেন্ট অর্ধেক হলে গতি দ্বিগুণেরও বেশি হয়)'
      }
    },
    {
      id: 'ex-speed-4',
      problem: {
        en: 'A 200 V DC shunt motor runs at 1200 RPM drawing 20 A. Armature resistance is 0.4 Ω. It is required to reduce the speed to 600 RPM while driving a load where load torque is proportional to the square of speed (T_L ∝ N²). Calculate the value of external resistance that must be connected in series with the armature.',
        hi: 'एक 200 V डीसी शंट मोटर 20 A करंट लेकर 1200 RPM पर चलती है। Ra = 0.4 Ω। गति को 600 RPM तक कम करने के लिए आर्मेचर के सीरीज में कितना बाहरी प्रतिरोध जोड़ना होगा, यदि लोड टॉर्क गति के वर्ग के समानुपाती (T_L ∝ N²) है?',
        bn: 'একটি ২০০ V ডিসি শান্ট মোটর ২০ A কারেন্ট নিয়ে ১২০০ RPM গতিতে ঘোরে। Ra = ০.৪ Ω। গতি ৬০০ RPM এ নামিয়ে আনতে আর্মেচারের সাথে সিরিজে কত রোধ যোগ করতে হবে, যদি লোড টর্ক গতির বর্গের সমানুপাতিক (T_L ∝ N²) হয়?'
      },
      solution: {
        en: `Step 1: Calculate Initial Back EMF (E_b1):
E_b1 = V - I_a1 · R_a = 200 V - (20 A × 0.4 Ω) = 200 - 8 = 192.0 V

Step 2: Determine New Armature Current (I_a2):
Since T ∝ Φ · I_a and Φ is constant (shunt motor with unchanged field), T ∝ I_a.
Given T_L ∝ N²:
I_a2 / I_a1 = T2 / T1 = (N2 / N1)² = (600 / 1200)² = (0.5)² = 0.25
I_a2 = 0.25 × 20 A = 5.0 A

Step 3: Calculate Required New Back EMF (E_b2):
Since Φ is constant:
E_b2 / E_b1 = N2 / N1 = 600 / 1200 = 0.50
E_b2 = 0.50 × 192.0 V = 96.0 V

Step 4: Calculate Total Required Armature Resistance:
E_b2 = V - I_a2 · R_total
96.0 = 200 - (5.0 × R_total)
5.0 × R_total = 200 - 96.0 = 104.0
R_total = 104.0 / 5.0 = 20.80 Ω

Step 5: Calculate External Series Resistance (R_ext):
R_ext = R_total - R_a = 20.80 Ω - 0.40 Ω = 20.40 Ω`,
        hi: `चरण 1: प्रारंभिक Back EMF: E_b1 = 200 - (20 × 0.4) = 192.0 V
चरण 2: नया आर्मेचर करंट (T ∝ N²): I_a2 = 20 × (600/1200)² = 5.0 A
चरण 3: नया Back EMF: E_b2 = 192 × (600/1200) = 96.0 V
चरण 4: कुल प्रतिरोध: R_total = (200 - 96) / 5.0 = 20.80 Ω
चरण 5: बाहरी प्रतिरोध: R_ext = 20.80 - 0.40 = 20.40 Ω`,
        bn: `ধাপ ১: প্রাথমিক Back EMF: E_b1 = ২০০ - (২০ × ০.৪) = ১৯২.০ V
ধাপ ২: নতুন কারেন্ট (T ∝ N²): I_a2 = ২০ × (৬০০/১২০০)² = ৫.০ A
ধাপ ৩: নতুন Back EMF: E_b2 = ১৯২ × (৬০০/১২০০) = ৯৬.০ V
ধাপ ৪: মোট রোধ: R_total = (২০০ - ৯৬) / ৫.০ = ২০.৮০ Ω
ধাপ ৫: বহিঃস্থ রোধ: R_ext = ২০.৮০ - ০.৪০ = ২০.৪০ Ω`
      },
      finalAnswer: {
        en: 'Required External Resistance R_ext = 20.40 Ω (New Current = 5.0 A)',
        hi: 'आवश्यक बाहरी प्रतिरोध R_ext = 20.40 Ω (नया करंट = 5.0 A)',
        bn: 'প্রয়োজনীয় বহিঃস্থ রোধ R_ext = ২০.৪০ Ω (নতুন কারেন্ট = ৫.০ A)'
      }
    },
    {
      id: 'ex-speed-5',
      problem: {
        en: 'Contrast the power and torque capabilities of a DC motor operated below base speed using Armature Voltage Control versus above base speed using Field Flux Weakening, highlighting why one is Constant Torque and the other is Constant Power.',
        hi: 'आर्मेचर वोल्टेज नियंत्रण (बेस गति से नीचे) तथा फील्ड फ्लक्स दुर्बलीकरण (बेस गति से ऊपर) के तहत डीसी मोटर की शक्ति और टॉर्क क्षमताओं की तुलना कीजिए, और स्पष्ट कीजिए कि एक स्थिर टॉर्क और दूसरा स्थिर शक्ति क्यों है।',
        bn: 'বেস গতির নিচে আর্মেচার ভোল্টেজ নিয়ন্ত্রণ এবং বেস গতির উপরে ফিল্ড ফ্লাক্স দুর্বলীকরণের ক্ষেত্রে ডিসি মোটরের পাওয়ার ও টর্ক ক্ষমতার তুলনা করুন এবং ব্যাখ্যা করুন কেন একটি ধ্রুবক টর্ক ও অপরটি ধ্রুবক পাওয়ার অঞ্চল।'
      },
      solution: {
        en: `1. Region Below Base Speed (Armature Voltage Control, 0 to N_base):
- Flux is maintained at rated maximum (Φ = Φ_rated).
- Terminal voltage V is varied from 0 to V_rated.
- Maximum permissible continuous armature current is limited by conductor thermal rating (I_a = I_rated).
- Developed Torque: T_max = K_t · Φ_rated · I_rated = Constant.
- Output Power: P = T · ω = T_max · (2πN / 60) ∝ N (Power increases linearly with speed).
- Conclusion: Constant Torque Operation.

2. Region Above Base Speed (Field Flux Weakening, N_base to N_max):
- Applied terminal voltage is kept at maximum rated limit (V = V_rated).
- Field flux Φ is reduced below rated value by adding field rheostat resistance.
- As flux weakens, speed rises (N ∝ 1/Φ).
- Since I_a cannot exceed thermal limit I_rated:
  * Maximum torque decreases inversely with speed: T_max = K_t · Φ · I_rated ∝ 1/N.
- Output Power: P = T_max · ω = (Constant / N) · N = Constant.
- Conclusion: Constant Power Operation.`,
        hi: `1. बेस गति से नीचे (वोल्टेज नियंत्रण): फ्लक्स Φ स्थिर रहता है, टॉर्क T = Kt·Φ·Ia स्थिर रहता है (Constant Torque), जबकि शक्ति P = T·ω गति के साथ रैखिक रूप से बढ़ती है।
2. बेस गति से ऊपर (फील्ड नियंत्रण): वोल्टेज स्थिर रहता है, फ्लक्स घटने से गति बढ़ती है और टॉर्क T ∝ 1/N घटता है, जिससे कुल शक्ति P = T·ω स्थिर रहती है (Constant Power)।`,
        bn: `১. বেস গতির নিচে (ভোল্টেজ নিয়ন্ত্রণ): ফ্লাক্স Φ রেটেড থাকে, ফলে টর্ক T = Kt·Φ·Ia ধ্রুবক থাকে (Constant Torque), কিন্তু পাওয়ার গতি বৃদ্ধির সাথে বাড়ে (P ∝ N)।
২. বেস গতির উপরে (ফিল্ড নিয়ন্ত্রণ): ভোল্টেজ অপরিবর্তিত থাকে, ফ্লাক্স কমলে গতি বাড়ে এবং টর্ক T ∝ 1/N হারে কমে, ফলে মোট পাওয়ার P = T·ω ধ্রুবক থাকে (Constant Power)।`
      },
      finalAnswer: {
        en: 'Below base speed: Constant Torque (P ∝ N) via Voltage Control. Above base speed: Constant Power (T ∝ 1/N) via Field Weakening.',
        hi: 'बेस गति से नीचे: स्थिर टॉर्क (P ∝ N); बेस गति से ऊपर: स्थिर शक्ति (T ∝ 1/N)।',
        bn: 'বেস গতির নিচে: ধ্রুবক টর্ক (P ∝ N); বেস গতির উপরে: ধ্রুবক পাওয়ার (T ∝ 1/N)।'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Steel Reversing Rolling Mills: Ward-Leonard and 4-quadrant thyristor DC drives provide instantaneous forward/reverse speed control under massive shock loads.',
      'Electric Elevators & Mine Hoists: Precise armature voltage control enables feather-smooth deceleration, accurate floor leveling, and regenerative lowering of heavy cabs.',
      'Paper & Textile Continuous Mills: Field-weakening control ensures synchronized multi-roller tension without stretching delicate paper webs.',
      'High-Speed Lathe & CNC Spindles: Constant power field control delivers high speeds for light finishing passes and high torque at low speeds for roughing cuts.',
      'Electric Train Locomotives: Series-parallel motor groupings combined with field diverter shunts provide multi-stage traction acceleration.'
    ],
    hi: [
      'स्टील रोलिंग मिल: वार्ड-लियोनार्ड एवं थाइरिस्टर ड्राइव भारी लोड में दोनों दिशाओं में तुरंत गति नियंत्रण प्रदान करते हैं।',
      'इलेक्ट्रिक लिफ्ट एवं माइन होइस्ट: आर्मेचर वोल्टेज नियंत्रण से लिफ्ट बिना झटके के सटीक तल पर रुकती है।',
      'कागज एवं कपड़ा मिल: फील्ड दुर्बलीकरण नियंत्रण विभिन्न रोलर्स के बीच धागे या कागज का तनाव एकसमान रखता है।',
      'सीएनसी एवं लेथ मशीन: हाई-स्पीड फिनिशिंग के लिए फील्ड नियंत्रण तथा भारी कटिंग के लिए कम गति पर वोल्टेज नियंत्रण।',
      'रेलवे इलेक्ट्रिक इंजन: सीरीज-पैरेलल मोटर संयोजन एवं फील्ड डायवर्टर ट्रैक्शन के दौरान गति बढ़ाते हैं।'
    ],
    bn: [
      'স্টিল রোলিং মিল: ওয়ার্ড-লিওনার্ড ও থাইরিস্টর ডিসি ড্রাইভ উভয় দিকে তাৎক্ষণিক গতি পরিবর্তন নিশ্চিত করে।',
      'লিফট ও মাইন হোস্ট: আর্মেচার ভোল্টেজ নিয়ন্ত্রণের মাধ্যমে ঝাঁকুনিহীন মসৃণ চলাচল ও সঠিক লেভেলে থামানো যায়।',
      'কাগজ ও টেক্সটাইল মিল: ফিল্ড নিয়ন্ত্রণ পদ্ধতির সাহায্যে একাধিক রোলারের মধ্যে সুনির্দিষ্ট টান বজায় রাখা হয়।',
      'লেদ ও সিএনসি স্পিন্ডল: উচ্চ গতির ফিনিশিং এবং কম গতিতে ভারী কাটিংয়ের জন্য উপযুক্ত টর্ক-পাওয়ার প্রদান করে।',
      'রেলওয়ে ইঞ্জিন: সিরিজ-প্যারালাল গ্রুপিং ও ফিল্ড ডাইভার্টারের মাধ্যমে ট্রেনের মসৃণ ত্বরণ নিশ্চিত করা হয়।'
    ]
  },
  importantPoints: {
    en: [
      'The speed equation N = K_n · (V - Ia·Ra) / Φ defines the three fundamental control methods: Field, Armature Resistance, and Armature Voltage.',
      'Field Control (Flux Weakening) operates exclusively ABOVE base speed and offers high efficiency (~90–95%) in a Constant Power regime.',
      'Armature Resistance Control operates exclusively BELOW base speed in a Constant Torque regime but suffers severe I²R energy waste and poor speed regulation.',
      'Armature Voltage Control (Ward-Leonard system or Chopper) operates from 0 to base speed with smooth stepless variation, high efficiency, and full regenerative braking capability.',
      'Below Base Speed is the Constant Torque region (P ∝ N); Above Base Speed is the Constant Power region (T ∝ 1/N).',
      'In DC series motors, speed can also be varied by Field Diverters, Armature Diverters, Tapped Field coils, or Series-Parallel motor reconfiguration.'
    ],
    hi: [
      'गति समीकरण N = Kn · (V - Ia·Ra) / Φ गति नियंत्रण के तीन मूल तरीकों को स्पष्ट करता है।',
      'फील्ड नियंत्रण (फ्लक्स दुर्बलीकरण) बेस गति से ऊपर कार्य करता है और स्थिर शक्ति क्षेत्र में 90-95% उच्च दक्षता देता है।',
      'आर्मेचर प्रतिरोध नियंत्रण बेस गति से नीचे स्थिर टॉर्क क्षेत्र में कार्य करता है, परंतु इसमें भारी ऊर्जा हानि होती है।',
      'वार्ड-लियोनार्ड वोल्टेज नियंत्रण शून्य से बेस गति तक अत्यंत स्मूथ, दक्ष एवं दोनों दिशाओं में नियंत्रण देता है।',
      'बेस गति से नीचे स्थिर टॉर्क क्षेत्र (P ∝ N) तथा बेस गति से ऊपर स्थिर शक्ति क्षेत्र (T ∝ 1/N) होता है।',
      'सीरीज मोटरों में फील्ड डायवर्टर, टैप्ड फील्ड या सीरीज-पैरेलल संयोजन द्वारा भी गति नियंत्रित की जाती है।'
    ],
    bn: [
      'গতি সমীকরণ N = Kn · (V - Ia·Ra) / Φ গতির তিনটি প্রধান নিয়ন্ত্রণ পদ্ধতি নির্দেশ করে।',
      'ফিল্ড নিয়ন্ত্রণ কেবল বেস গতির উপরে কাজ করে এবং ধ্রুবক পাওয়ার অঞ্চলে উচ্চ দক্ষতা (৯০-৯৫%) প্রদান করে।',
      'আর্মেচার রোধ নিয়ন্ত্রণ বেস গতির নিচে ধ্রুবক টর্ক অঞ্চলে কাজ করে, তবে প্রচুর I²R শক্তি অপচয় ঘটায়।',
      'ওয়ার্ড-লিওনার্ড ভোল্টেজ নিয়ন্ত্রণ ০ থেকে বেস গতি পর্যন্ত মসৃণ ও দক্ষ ৪-কোয়াড্র্যান্ট নিয়ন্ত্রণ নিশ্চিত করে।',
      'বেস গতির নিচে Constant Torque অঞ্চল (P ∝ N) এবং বেস গতির উপরে Constant Power অঞ্চল (T ∝ 1/N)।',
      'ডিসি সিরিজ মোটরে ফিল্ড ডাইভার্টার, ট্যাপড ফিল্ড বা সিরিজ-প্যারালাল সংযোগের মাধ্যমেও গতি নিয়ন্ত্রণ করা যায়।'
    ]
  },
  commonMistakes: {
    en: [
      'Thinking field weakening decreases motor speed below base speed: Field weakening reduces Φ, which causes speed N to INCREASE above base speed (N ∝ 1/Φ). It cannot reduce speed below base value.',
      'Assuming armature rheostatic control is energy-efficient at low speeds: At low speeds, a large voltage drop occurs across the series rheostat, dissipating a massive portion of input power as wasted I²R heat.',
      'Believing the motor can deliver full rated torque at speeds well above base speed: Above base speed, magnetic flux is reduced; because T = Kt·Φ·Ia, permissible torque decreases inversely with speed (Constant Power mode).'
    ],
    hi: [
      'यह समझना कि फील्ड कमजोर करके मोटर की गति बेस गति से कम की जा सकती है: फ्लक्स घटने से गति बढ़ती है (N ∝ 1/Φ), अतः यह केवल बेस गति से ऊपर के लिए उपयुक्त है।',
      'कम गति पर आर्मेचर रियोस्टैट विधि को ऊर्जा-दक्ष मानना: कम गति पर अधिकांश ऊर्जा रियोस्टैट में गर्मी के रूप में व्यर्थ नष्ट हो जाती है।'
    ],
    bn: [
      'মনে করা যে ফিল্ড দুর্বল করে বেস গতির নিচে গতি কমানো যায়: ফ্লাক্স কমলে গতি বৃদ্ধি পায় (N ∝ 1/Φ), তাই এটি কেবল বেস গতির উপরের জন্য প্রযোজ্য।',
      'আর্মেচার রোধ নিয়ন্ত্রণকে কম গতিতে শক্তি-সাশ্রয়ী মনে করা: কম গতিতে ইনপুট পাওয়ারের একটি বিশাল অংশ রোধে তাপ হিসেবে অপচয় হয়।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-speed-1',
      question: {
        en: 'Which method of speed control for a DC shunt motor is most suitable for operating above rated base speed with very high electrical efficiency?',
        hi: 'डीसी शंट मोटर में उच्च विद्युत दक्षता के साथ रेटेड बेस गति से ऊपर संचालन के लिए कौन सी गति नियंत्रण विधि सबसे उपयुक्त है?',
        bn: 'ডিসি শান্ট মোটরে অত্যন্ত উচ্চ বৈদ্যুতিক দক্ষতায় স্বাভাবিক বেস গতির উপরে পরিচালনার জন্য কোন গতি নিয়ন্ত্রণ পদ্ধতি সবচেয়ে উপযুক্ত?'
      },
      options: [
        {
          id: 'opt-a',
          text: {
            en: 'Field Flux Control (Field Rheostat Method)',
            hi: 'फील्ड फ्लक्स नियंत्रण (फील्ड रियोस्टैट विधि)',
            bn: 'ফিল্ড ফ্লাক্স নিয়ন্ত্রণ (ফিল্ড রিহোস্ট্যাট পদ্ধতি)'
          }
        },
        {
          id: 'opt-b',
          text: {
            en: 'Armature Series Resistance Control',
            hi: 'आर्मेचर श्रेणी प्रतिरोध नियंत्रण',
            bn: 'আর্মেচার সিরিজ রোধ নিয়ন্ত্রণ'
          }
        },
        {
          id: 'opt-c',
          text: {
            en: 'Supply Frequency Variation',
            hi: 'सप्लाई आवृत्ति परिवर्तन',
            bn: 'সরবরাহ ফ্রিকোয়েন্সি পরিবর্তন'
          }
        },
        {
          id: 'opt-d',
          text: {
            en: 'Brush Shift against rotation',
            hi: 'घूर्णन के विपरीत ब्रश शिफ्टिंग',
            bn: 'ঘূর্ণনের বিপরীতে ব্রাশ স্থান পরিবর্তন'
          }
        }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'Field control weakens flux Φ, causing N to rise above base speed (N ∝ 1/Φ). Because field current is only 1–3% of total current, power loss in the rheostat is negligible, giving 90–95% efficiency.',
        hi: 'फील्ड नियंत्रण में फ्लक्स घटने से गति बेस गति से ऊपर बढ़ती है। फील्ड करंट बहुत कम होने से रियोस्टैट में नुकसान नगण्य होता है।',
        bn: 'ফিল্ড নিয়ন্ত্রণে ফ্লাক্স কমায় গতি বাড়ে। ফিল্ড কারেন্ট মোট কারেন্টের মাত্র ১-৩% হওয়ায় ক্ষয় খুব কম এবং দক্ষতা ৯০-৯৫% হয়।'
      }
    },
    {
      id: 'mcq-speed-2',
      question: {
        en: 'In a Ward-Leonard speed control system, how is the speed of the main DC work motor controlled from zero up to rated base speed?',
        hi: 'वार्ड-लियोनार्ड गति नियंत्रण प्रणाली में मुख्य डीसी मोटर की गति को शून्य से बेस गति तक कैसे नियंत्रित किया जाता है?',
        bn: 'ওয়ার্ড-লিওনার্ড গতি নিয়ন্ত্রণ পদ্ধতিতে মূল ডিসি মোটরের গতি শূন্য থেকে বেস গতি পর্যন্ত কীভাবে নিয়ন্ত্রণ করা হয়?'
      },
      options: [
        {
          id: 'opt-a',
          text: {
            en: 'By smoothly varying the output voltage of the DC generator via its field excitation while keeping the motor field at rated flux.',
            hi: 'डीसी जनरेटर के फील्ड उत्तेजन को बदलकर उसके आउटपुट वोल्टेज को सुचारू रूप से बदलकर, जबकि मोटर फील्ड को रेटेड फ्लक्स पर रखा जाता है।',
            bn: 'মোটর ফিল্ডকে রেটেড ফ্লাক্সে রেখে জেনারেটরের ফিল্ড পরিবর্তনের মাধ্যমে তার আউটপুট ভোল্টেজ মসৃণভাবে পরিবর্তন করে।'
          }
        },
        {
          id: 'opt-b',
          text: {
            en: 'By inserting heavy water-cooled resistors in the motor armature circuit.',
            hi: 'मोटर आर्मेचर परिपथ में भारी जल-शीतित प्रतिरोध जोड़कर।',
            bn: 'মোটর আর্মেচার সার্কিটে ভারী রেজিস্টর যুক্ত করে।'
          }
        },
        {
          id: 'opt-c',
          text: {
            en: 'By varying the frequency of the AC generator.',
            hi: 'AC जनरेटर की आवृत्ति बदलकर।',
            bn: 'এসি জেনারেটরের ফ্রিকোয়েন্সি পরিবর্তন করে।'
          }
        },
        {
          id: 'opt-d',
          text: {
            en: 'By physically changing the number of motor poles during rotation.',
            hi: 'घूर्णन के दौरान मोटर के पोलों की संख्या बदलकर।',
            bn: 'ঘূর্ণনরত অবস্থায় মোটরের পোলের সংখ্যা পরিবর্তন করে।'
          }
        }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'From 0 to base speed, the generator output voltage is smoothly increased from 0 to V_rated by adjusting generator field excitation, achieving seamless Armature Voltage Control.',
        hi: 'शून्य से बेस गति तक, जनरेटर फील्ड को नियंत्रित करके जनरेटर आउटपुट वोल्टेज को 0 से V_rated तक बढ़ाया जाता है।',
        bn: '০ থেকে বেস গতি পর্যন্ত জেনারেটরের ফিল্ড নিয়ন্ত্রণের মাধ্যমে ভোল্টেজ ০ থেকে রেটেড পর্যন্ত মসৃণভাবে বাড়ানো হয়।'
      }
    },
    {
      id: 'mcq-speed-3',
      question: {
        en: 'What characterizes the operating capability of a DC motor when operating in the speed range above rated base speed (Field Weakening Region)?',
        hi: 'रेटेड बेस गति से ऊपर के गति क्षेत्र (फील्ड दुर्बलीकरण क्षेत्र) में प्रचालन करते समय डीसी मोटर की क्या विशेषता होती है?',
        bn: 'রেটেড বেস গতির উপরের গতিসীমায় (ফিল্ড দুর্বলকরণ অঞ্চল) কাজ করার সময় ডিসি মোটরের বৈশিষ্ট্য কোনটি?'
      },
      options: [
        {
          id: 'opt-a',
          text: {
            en: 'Constant Power drive capability where maximum permissible torque decreases inversely with speed (T ∝ 1/N).',
            hi: 'स्थिर शक्ति (Constant Power) क्षमता, जहाँ अधिकतम अनुमेय टॉर्क गति के व्युत्क्रमानुपाती (T ∝ 1/N) घटता है।',
            bn: 'ধ্রুবক পাওয়ার (Constant Power) ক্ষমতা, যেখানে অনুমোদিত সর্বোচ্চ টর্ক গতির ব্যস্তানুপাতে (T ∝ 1/N) হ্রাস পায়।'
          }
        },
        {
          id: 'opt-b',
          text: {
            en: 'Constant Torque drive capability where output power increases with the cube of speed.',
            hi: 'स्थिर टॉर्क क्षमता जहाँ आउटपुट शक्ति गति के घन के साथ बढ़ती है।',
            bn: 'ধ্রুবক টর্ক ক্ষমতা যেখানে পাওয়ার গতির ঘনকের সাথে বৃদ্ধি পায়।'
          }
        },
        {
          id: 'opt-c',
          text: {
            en: 'Zero Back EMF generation at all operating points.',
            hi: 'सभी प्रचालन बिंदुओं पर शून्य बैक EMF उत्पन्न होना।',
            bn: 'সকল অপারেটিং পয়েন্টে শূন্য ব্যাক EMF তৈরি হওয়া।'
          }
        },
        {
          id: 'opt-d',
          text: {
            en: 'Unlimited torque production without thermal heating.',
            hi: 'बिना गर्म हुए असीमित टॉर्क उत्पादन।',
            bn: 'তাপ উৎপন্ন না করে সীমাহীন টর্ক তৈরি।'
          }
        }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'Above base speed, V is constant and Φ is reduced. Since Ia is thermally limited to rated value, Torque T = Kt·Φ·Ia decreases as 1/N, keeping Power P = T·ω constant (Constant Power drive).',
        hi: 'बेस गति से ऊपर फ्लक्स घटने से टॉर्क T ∝ 1/N घटता है, जिससे शक्ति P = T·ω स्थिर रहती है (Constant Power)।',
        bn: 'বেস গতির উপরে ফ্লাক্স কমায় টর্ক T ∝ 1/N হারে কমে এবং মোট পাওয়ার P = T·ω ধ্রুবক থাকে।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-speed-1',
      question: {
        en: 'A 240 V DC shunt motor runs at 900 RPM taking an armature current of 20 A. Armature resistance is 0.35 Ω. Calculate the speed when an external resistance of 1.65 Ω is added in series with the armature, if the load torque is halved (T2 = 0.5 × T1).',
        hi: 'एक 240 V डीसी शंट मोटर 20 A आर्मेचर करंट लेते हुए 900 RPM पर चलती है। Ra = 0.35 Ω। जब आर्मेचर के सीरीज में 1.65 Ω का बाहरी प्रतिरोध जोड़ा जाता है और लोड टॉर्क आधा कर दिया जाता है (T2 = 0.5 × T1), तो नई गति की गणना कीजिए।',
        bn: 'একটি ২৪০ V ডিসি শান্ট মোটর ২০ A আর্মেচার কারেন্ট নিয়ে ৯০০ RPM এ ঘোরে। Ra = ০.৩৫ Ω। আর্মেচারের সাথে ১.৬৫ Ω বহিঃস্থ রোধ যুক্ত করলে এবং লোড টর্ক অর্ধেক (T2 = ০.৫ × T1) হলে নতুন গতি কত হবে?'
      },
      hint: {
        en: '1) Find initial Back EMF Eb1 = V - Ia1·Ra. 2) Since torque halves and Φ is constant, Ia2 = 0.5 × 20 A = 10 A. 3) Find Eb2 = V - Ia2·(Ra + Rext). 4) N2 = N1 × (Eb2 / Eb1).',
        hi: '1) Eb1 = 240 - (20 × 0.35) = 233 V। 2) टॉर्क आधा होने पर Ia2 = 10 A। 3) Eb2 = 240 - [10 × (0.35 + 1.65)] = 220 V। 4) N2 = 900 × (220 / 233)।',
        bn: '১) Eb1 = ২৪০ - (২০ × ০.৩৫) = ২৩৩ V। ২) টর্ক অর্ধেক হলে Ia2 = ১০ A। ৩) Eb2 = ২৪০ - [১০ × (০.৩৫ + ১.৬৫)] = ২২০ V। ৪) N2 = ৯০০ × (২২০ / ২৩৩)।'
      },
      answerKey: {
        en: '1. Initial Back EMF Eb1 = 240 - (20 × 0.35) = 233.0 V.\n2. New Armature Current Ia2 = 0.5 × 20 A = 10.0 A.\n3. Total resistance R_total = 0.35 + 1.65 = 2.0 Ω.\n4. New Back EMF Eb2 = 240 - (10.0 × 2.0) = 220.0 V.\n5. New Speed N2 = 900 × (220.0 / 233.0) = 849.79 RPM.',
        hi: '1. प्रारंभिक Back EMF = 233.0 V।\n2. नया करंट = 10.0 A।\n3. नया Back EMF = 220.0 V।\n4. नई गति N2 = 849.79 RPM।',
        bn: '১. প্রাথমিক Back EMF = ২৩৩.০ V।\n২. নতুন আর্মেচার কারেন্ট = ১০.০ A।\n৩. নতুন Back EMF = ২২০.০ V।\n৪. নতুন গতি N2 = ৮৪৯.৭৯ RPM।'
      }
    },
    {
      id: 'pq-speed-2',
      question: {
        en: 'Explain why Armature Resistance Control is unsuitable for low-speed continuous operation in heavy industrial applications, and describe the modern solid-state alternative.',
        hi: 'स्पष्ट कीजिए कि भारी औद्योगिक अनुप्रयोगों में कम गति पर निरंतर संचालन के लिए आर्मेचर प्रतिरोध नियंत्रण अनुपयुक्त क्यों है, और आधुनिक सॉलिड-स्टेट विकल्प का वर्णन कीजिए।',
        bn: 'শিল্পে কম গতিতে একটানা পরিচালনার জন্য আর্মেচার রোধ নিয়ন্ত্রণ পদ্ধতি কেন অনুপযুক্ত এবং আধুনিক সলিড-স্টেট বিকল্পটির বর্ণনা দিন।'
      },
      hint: {
        en: 'Discuss I²R heat dissipation losses in external resistors, poor speed regulation under varying loads, and modern DC Choppers / PWM Thyristor drives.',
        hi: 'प्रतिरोध में भारी I²R ऊष्मा हानि, लोड बदलने पर गति में अस्थिरता तथा आधुनिक DC Chopper/Thyristor ड्राइव के बारे में बताइए।',
        bn: 'বহিঃস্থ রোধে প্রচুর I²R তাপ অপচয়, লোড পরিবর্তনে গতির ওঠানামা এবং আধুনিক ডিসি চপার/থাইরিস্টর ড্রাইভের ভূমিকা উল্লেখ করুন।'
      },
      answerKey: {
        en: '1. Armature Resistance Control suffers from very poor efficiency at reduced speeds because massive power (Ia²·Rext) is dissipated as waste heat in the series resistors (e.g., 50% loss at half speed), and exhibits poor speed regulation (speed fluctuates wildly with load changes).\n2. Modern industrial installations replace rheostats with Solid-State DC Choppers (IGBT/MOSFET PWM controllers) or Phase-Controlled Thyristor Rectifiers that vary average armature voltage with over 95% efficiency.',
        hi: '1. आर्मेचर प्रतिरोध विधि में कम गति पर भारी ऊर्जा हानि (Ia²·R) होती है और लोड बदलने पर गति बहुत बदलती है।\n2. आधुनिक उद्योगों में इसके स्थान पर सॉलिड-स्टेट DC चॉपर (IGBT/PWM) या थाइरिस्टर कन्वर्टर का उपयोग किया जाता है जो 95% से अधिक दक्षता के साथ वोल्टेज नियंत्रित करते हैं।',
        bn: '১. আর্মেচার রোধ নিয়ন্ত্রণে কম গতিতে প্রচুর শক্তি (Ia²·Rext) তাপে নষ্ট হয় এবং লোড পরিবর্তনে গতি অস্থির হয়ে পড়ে।\n২. আধুনিক শিল্পে এর পরিবর্তে সলিড-স্টেট ডিসি চপার (IGBT/PWM) বা থাইরিস্টর রেকটিফায়ার ব্যবহার করে ৯৫% এর বেশি দক্ষতায় গতি নিয়ন্ত্রণ করা হয়।'
      }
    }
  ]
};
