import { Lesson } from '../types';

export const LESSON_INDUCTION_MOTOR_PRINCIPLE: Lesson = {
  id: 'lsn-ch6-induction-motor-principle',
  topicId: 'ch6-induction-motor-principle',
  order: 20,
  title: {
    en: '3-Phase Induction Motor: Operating Principle, RMF & Slip',
    hi: '3-फेज इंडक्शन मोटर: कार्य सिद्धांत, घूर्णी चुंबकीय क्षेत्र (RMF) एवं स्लिप',
    bn: '৩-ফেজ ইন্ডাকশন মোটর: কার্যপ্রণালী, ঘূর্ণমান চৌম্বক ক্ষেত্র (RMF) ও স্লিপ'
  },
  description: {
    en: 'Comprehensive study of three-phase asynchronous induction motors, generation of Rotating Magnetic Field (RMF) of constant magnitude 1.5 Φm, synchronous speed Ns = 120f/P, rotor induced currents, rotor speed Nr, slip definition s = (Ns - Nr)/Ns, and rotor frequency fr = s·f.',
    hi: 'थ्री-फेज इंडक्शन मोटर, स्थिर परिमाण 1.5 Φm के घूर्णी चुंबकीय क्षेत्र (RMF) का निर्माण, तुल्यकालिक गति Ns = 120f/P, रोटर प्रेरित धारा, रोटर गति Nr, स्लिप s = (Ns - Nr)/Ns एवं रोटर आवृत्ति fr = s·f का विस्तृत अध्ययन।',
    bn: '৩-ফেজ ইন্ডাকশন মোটরের মূলনীতি, ১.৫ Φm ধ্রুবক মানের ঘূর্ণমান চৌম্বক ক্ষেত্র (RMF) সৃষ্টি, সিনক্রোনাস স্পিড Ns = ১২০f/P, রোটর গতি Nr, স্লিপ সমীকরণ s = (Ns - Nr)/Ns এবং রোটর ফ্রিকোয়েন্সি fr = s·f এর পুঙ্খানুপুঙ্খ বিশ্লেষণ।'
  },
  easyExplanation: {
    en: 'An induction motor is often called the "workhorse of industry" because it has no brushes or commutators, making it extremely rugged and reliable. When a 3-phase AC supply is applied to the stator winding, it creates a magnetic field that rotates at synchronous speed (Ns). This rotating field cuts the stationary rotor bars, inducing an electromotive force (EMF) and current according to Faraday\'s law. According to Lenz\'s law, the rotor develops electromagnetic torque and begins to rotate in the same direction to oppose the relative motion. The rotor never quite catches up to the synchronous speed—the small difference in speed is called "slip" (s).',
    hi: 'इंडक्शन मोटर को उद्योगों का "वर्कहॉर्स" कहा जाता है क्योंकि इसमें ब्रश या कम्यूटेटर नहीं होते, जिससे यह अत्यधिक मजबूत और विश्वसनीय होती है। जब स्टेटर वाइंडिंग में 3-फेज AC सप्लाई दी जाती है, तो यह तुल्यकालिक गति (Ns) पर घूमने वाला चुंबकीय क्षेत्र (RMF) बनाती है। यह घूमता क्षेत्र रोटर चालकों को काटता है, जिससे फैराडे के नियमानुसार रोटर में EMF और धारा प्रेरित होती है। लेंज के नियम के अनुसार रोटर सापेक्ष गति का विरोध करने के लिए उसी दिशा में घूमने लगता है। रोटर कभी भी Ns को पूरी तरह नहीं पकड़ पाता—गति के इस अंतर को "स्लिप" (Slip) कहते हैं।',
    bn: 'ইন্ডাকশন মোটরকে শিল্পের "ওয়ার্কহর্স" বলা হয় কারণ এতে কোনো ব্রাশ বা কমিউটেটর না থাকায় এটি অত্যন্ত দীর্ঘস্থায়ী ও নির্ভরযোগ্য। স্টেটরে ৩-ফেজ এসি সরবরাহ দিলে একটি স্থির মানের (১.৫ Φm) ঘূর্ণমান চৌম্বক ক্ষেত্র (RMF) তৈরি হয় যা সিনক্রোনাস গতিতে (Ns) ঘোরে। এই ঘূর্ণায়মান ফ্লাক্স রোটরের কন্ডাক্টরকে কর্তন করে ফ্যারাডের নিয়মে কারেন্ট আবিষ্ট করে। লেঞ্জের সূত্র অনুযায়ী আপেক্ষিক গতি কমাতে রোটর একই দিকে ঘুরতে শুরু করে। রোটর কখনোই সিনক্রোনাস গতিতে পৌঁছাতে পারে না—উভয় গতির অনুপাতিক পার্থক্যকেই "স্লিপ" (s) বলে।'
  },
  detailedExplanation: {
    en: `### 1. Rotating Magnetic Field (RMF) Derivation
When three-phase balanced currents displaced by 120° in time:
- $i_R = I_m \\sin(\\omega t)$
- $i_Y = I_m \\sin(\\omega t - 120^\\circ)$
- $i_B = I_m \\sin(\\omega t - 240^\\circ)$

flow through three-phase spatial windings displaced by 120° in space, the resultant magnetic flux is:
$$\\Phi_r = 1.5 \\Phi_m = \\text{Constant Magnitude}$$
This resultant flux rotates in space at **Synchronous Speed ($N_s$)**:
$$N_s = \\frac{120 \\cdot f}{P} \\quad \\text{[RPM]}$$
where $f$ is supply frequency (Hz) and $P$ is the number of stator poles.

---

### 2. Definition and Calculation of Slip ($s$)
If the rotor rotated at synchronous speed ($N_r = N_s$), there would be no relative motion between the rotating field and rotor conductors $\\implies$ no induced EMF $\\implies$ no torque.
Therefore, an induction motor MUST run at a speed $N_r < N_s$.

* **Fractional Slip ($s$):**
  $$s = \\frac{N_s - N_r}{N_s}$$
* **Percentage Slip (%s):**
  $$\\% s = \\frac{N_s - N_r}{N_s} \\times 100$$
* **Rotor Speed ($N_r$):**
  $$N_r = N_s(1 - s)$$
* **Rotor Induced Frequency ($f_r$):**
  $$f_r = s \\cdot f$$

---

### 3. Operating Modes Based on Slip
1. **Motoring Mode ($0 < s < 1$):** $0 < N_r < N_s$ (Normal operation, delivers mechanical power).
2. **Generating Mode ($s < 0$):** $N_r > N_s$ (Driven by external prime mover above synchronous speed, feeds power back to the grid).
3. **Braking / Plugging Mode ($s > 1$):** Rotor rotates in opposite direction to the rotating magnetic field ($N_r < 0$).`,
    hi: `### 1. घूर्णी चुंबकीय क्षेत्र (RMF)
जब 120° समयांतराल वाली 3-फेज धाराएं 120° स्थान-विस्थापित स्टेटर वाइंडिंग से प्रवाहित होती हैं, तो परिणामी फ्लक्स:
$$\\Phi_r = 1.5 \\Phi_m = \\text{स्थिर मान}$$
यह फ्लक्स स्पेस में **तुल्यकालिक गति ($N_s$)** पर घूमता है:
$$N_s = \\frac{120 \\cdot f}{P} \\quad \\text{[RPM]}$$

### 2. स्लिप (Slip $s$) एवं रोटर आवृत्ति
* **स्लिप सूत्र:**
  $$s = \\frac{N_s - N_r}{N_s}$$
* **रोटर गति:**
  $$N_r = N_s(1 - s)$$
* **रोटर आवृत्ति:**
  $$f_r = s \\cdot f$$`,
    bn: `### ১. ঘূর্ণমান চৌম্বক ক্ষেত্র (RMF)
৩-ফেজ সুষম কারেন্ট ১২০° কৌণিক ব্যবধানে থাকা স্টেটরে প্রবাহিত হলে উৎপন্ন সম্মিলিত ফ্লাক্স:
$$\\Phi_r = ১.৫ \\Phi_m = \\text{ধ্রুবক মান}$$
এই ফ্লাক্স সিনক্রোনাস গতিতে ($N_s$) আবর্তিত হয়:
$$N_s = \\frac{১২০ \\cdot f}{P} \\quad \\text{[RPM]}$$

### ২. স্লিপ ($s$) ও রোটর ফ্রিকোয়েন্সি
* **স্লিপের সূত্র:**
  $$s = \\frac{N_s - N_r}{N_s}$$
* **রোটরের ঘূর্ণন গতি:**
  $$N_r = N_s(১ - s)$$
* **রোটর ফ্রিকোয়েন্সি:**
  $$f_r = s \\cdot f$$`
  },
  keyTakeaways: {
    en: [
      'The resultant magnetic flux produced by a 3-phase stator winding has a constant magnitude of 1.5 Φm and rotates at Ns = 120f/P.',
      'Slip s = (Ns - Nr)/Ns represents the relative speed between the stator magnetic field and the mechanical rotor.',
      'At standstill (starting), Nr = 0, so slip s = 1 and rotor frequency equals line frequency (fr = f).',
      'At full load, slip is typically 2% to 5% (0.02 to 0.05), resulting in a very low rotor frequency (1 to 2.5 Hz at 50 Hz).'
    ],
    hi: [
      '3-फेज स्टेटर वाइंडिंग द्वारा उत्पन्न कुल फ्लक्स 1.5 Φm होता है और Ns = 120f/P गति से घूमता है।',
      'स्लिप s = (Ns - Nr)/Ns स्टेटर फ्लक्स और रोटर के बीच सापेक्ष गति को दर्शाता है।',
      'स्टार्टिंग में Nr = 0 होने पर स्लिप s = 1 और रोटर आवृत्ति लाइन आवृत्ति के बराबर होती है।',
      'फुल लोड पर सामान्य स्लिप 2% से 5% होती है।'
    ],
    bn: [
      '৩-ফেজ স্টেটরে উৎপন্ন সম্মিলিত ফ্লাক্সের মান ১.৫ Φm এবং এটি Ns = ১২০f/P গতিতে আবর্তিত হয়।',
      'স্লিপ s = (Ns - Nr)/Ns রোটর এবং স্টেটর ফিল্ডের মধ্যকার আপেক্ষিক গতি নির্দেশ করে।',
      'মোটর চালুর মুহূর্তে (Standstill) Nr = ০, ফলে স্লিপ s = ১ এবং রোটর ফ্রিকোয়েন্সি মেইন লাইনের সমান (fr = f) থাকে।',
      'পূর্ণ লোডে স্বাভাবিক স্লিপ ২% থেকে ৫% হয়।'
    ]
  },
  formulas: [
    {
      id: 'f-ns',
      name: { en: 'Synchronous Speed', hi: 'तुल्यकालिक गति', bn: 'সিনক্রোনাস স্পিড' },
      formula: 'N_s = \\frac{120 \\cdot f}{P} \\text{ [RPM]}',
      description: {
        en: 'Speed of the rotating magnetic field, where f = supply frequency (Hz) and P = number of stator poles.',
        hi: 'घूर्णी चुंबकीय क्षेत्र की गति, जहाँ f = आवृत्ति और P = पोल संख्या।',
        bn: 'ঘূর্ণমান চৌম্বক ক্ষেত্রের গতি, যেখানে f = ফ্রিকোয়েন্সি ও P = পোল সংখ্যা।'
      }
    },
    {
      id: 'f-slip',
      name: { en: 'Fractional Slip', hi: 'स्लिप', bn: 'স্লিপ' },
      formula: 's = \\frac{N_s - N_r}{N_s}',
      description: {
        en: 'Normalized speed difference between synchronous speed Ns and actual rotor speed Nr.',
        hi: 'तुल्यकालिक गति Ns और वास्तविक रोटर गति Nr के बीच का अंतर।',
        bn: 'সিনক্রোনাস স্পিড Ns ও রোটর স্পিড Nr এর আনুপাতিক পার্থক্য।'
      }
    },
    {
      id: 'f-fr',
      name: { en: 'Rotor Frequency', hi: 'रोटर आवृत्ति', bn: 'রোটর ফ্রিকোয়েন্সি' },
      formula: 'f_r = s \\cdot f',
      description: {
        en: 'Frequency of EMF and current induced in the rotor winding.',
        hi: 'रोटर वाइंडिंग में प्रेरित EMF और धारा की आवृत्ति।',
        bn: 'রোটরে আবিষ্ট EMF ও কারেন্টের ফ্রিকোয়েন্সি।'
      }
    }
  ],
  mcqs: [
    {
      id: 'mcq-im-1',
      question: {
        en: 'A 4-pole, 50 Hz induction motor operates at a full-load speed of 1440 RPM. What is the slip?',
        hi: 'एक 4-पोल, 50 Hz इंडक्शन मोटर 1440 RPM की गति पर चलती है। इसकी स्लिप कितनी होगी?',
        bn: 'একটি ৪-পোল, ৫০ Hz ইন্ডাকশন মোটর ১৪৪০ RPM গতিতে ঘুরছে। এর স্লিপ কত?'
      },
      options: [
        { id: 'a', text: { en: '2%', hi: '2%', bn: '২%' } },
        { id: 'b', text: { en: '4%', hi: '4%', bn: '৪%' } },
        { id: 'c', text: { en: '5%', hi: '5%', bn: '৫%' } },
        { id: 'd', text: { en: '6%', hi: '6%', bn: '৬%' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'Ns = (120 * 50) / 4 = 1500 RPM. Slip s = (1500 - 1440) / 1500 = 60 / 1500 = 0.04 or 4%.',
        hi: 'Ns = (120 * 50) / 4 = 1500 RPM. स्लिप s = (1500 - 1440) / 1500 = 0.04 = 4%.',
        bn: 'Ns = (১২০ * ৫০) / ৪ = ১৫০০ RPM। স্লিপ s = (১৫০০ - ১৪৪০) / ১৫০০ = ৬০ / ১৫০০ = ০.০৪ বা ৪%।'
      }
    }
  ]
};

export const LESSON_INDUCTION_MOTOR_TORQUE_SLIP: Lesson = {
  id: 'lsn-ch6-induction-motor-torque-slip',
  topicId: 'ch6-induction-motor-torque-slip',
  order: 21,
  title: {
    en: 'Induction Motor Torque-Slip Characteristics & Maximum Torque',
    hi: 'इंडक्शन मोटर टॉर्क-स्लिप विशेषताएँ एवं अधिकतम टॉर्क (Pull-out Torque)',
    bn: 'ইন্ডাকশন মোটরের টর্ক-স্লিপ বৈশিষ্ট্য ও সর্বোচ্চ টর্ক (Pull-out Torque)'
  },
  description: {
    en: 'Analysis of torque production in induction motors, electromagnetic torque formula T = (3/ωs)·[s·E2²·R2 / (R2² + (s·X2)²)], starting torque Tst, condition for maximum breakdown torque (R2 = smax·X2), and full torque-speed curve regions.',
    hi: 'इंडक्शन मोटर में टॉर्क समीकरण T = (3/ωs)·[s·E2²·R2 / (R2² + (s·X2)²)], स्टार्टिंग टॉर्क Tst, अधिकतम टॉर्क की शर्त (R2 = smax·X2) और टॉर्क-गति वक्र का विश्लेषण।',
    bn: 'ইন্ডাকশন মোটরের টর্ক উৎপাদন সমীকরণ T = (৩/ωs)·[s·E2²·R2 / (R2² + (s·X2)²)], স্টার্টিং টর্ক Tst, সর্বোচ্চ ব্রেকডাউন টর্কের শর্ত (R2 = smax·X2) এবং টর্ক-স্লিপ গ্রাফের বিভিন্ন অঞ্চলের বিশ্লেষণ।'
  },
  easyExplanation: {
    en: 'The torque developed by an induction motor depends heavily on slip. At low slip (near synchronous speed), the torque is directly proportional to slip (linear region). As slip increases, rotor reactance starts dominating over resistance, causing torque to reach a peak called "Breakdown Torque" or "Pull-Out Torque" (Tmax). If loaded beyond this peak, the motor stalls. Maximum torque occurs when the rotor resistance equals rotor leakage reactance (R2 = s·X2). Adding external resistance in a wound-rotor motor increases starting torque without changing the maximum torque value.',
    hi: 'इंडक्शन मोटर द्वारा उत्पन्न टॉर्क स्लिप पर निर्भर करता है। कम स्लिप पर टॉर्क स्लिप के सीधे समानुपाती होता है। जैसे-जैसे स्लिप बढ़ती है, रोटर रिएक्टेंस प्रतिरोध से अधिक प्रभावी हो जाता है और टॉर्क अपने चरम मान (Maximum Torque / Pull-Out Torque) पर पहुंचता है। अधिकतम टॉर्क तब मिलता है जब रोटर प्रतिरोध रोटर रिएक्टेंस के बराबर होता है (R2 = s·X2)।',
    bn: 'ইন্ডাকশন মোটরের টর্ক স্লিপের উপর গভীরভাবে নির্ভরশীল। কম স্লিপ অঞ্চলে টর্ক স্লিপের সমানুপাতিক (রৈখিক)। স্লিপ বাড়তে থাকলে রোটর রিঅ্যাকট্যান্সের প্রভাব বৃদ্ধি পায় এবং টর্ক সর্বোচ্চ মানে পৌঁছায়, যাকে "ব্রেকডাউন টর্ক" বা "পুল-আউট টর্ক" (Tmax) বলে। রোটর রেজিস্ট্যান্স এবং রোটর রিঅ্যাকট্যান্স সমান হলে (R2 = s·X2) সর্বোচ্চ টর্ক পাওয়া যায়।'
  },
  detailedExplanation: {
    en: `### 1. Torque Equation Derivation
The 3-phase electromagnetic torque is given by:
$$T = \\frac{3}{\\omega_s} \\cdot \\frac{s \\cdot E_2^2 \\cdot R_2}{R_2^2 + (s \\cdot X_2)^2}$$
where:
* $\\omega_s = \\frac{2\\pi N_s}{60}$ (Synchronous angular speed in rad/s)
* $E_2$ = Standstill rotor induced EMF per phase
* $R_2$ = Rotor resistance per phase
* $X_2$ = Standstill rotor leakage reactance per phase

---

### 2. Operating Regions of Torque-Slip Curve
1. **Low Slip Region ($s \\approx 0$):**
   $(s X_2)^2 \\ll R_2^2 \\implies T \\approx \\frac{3}{\\omega_s} \\frac{s E_2^2}{R_2} \\propto s$
   *(Stable operating region, linear characteristic)*

2. **High Slip Region ($s \\approx 1$):**
   $R_2^2 \\ll (s X_2)^2 \\implies T \\approx \\frac{3}{\\omega_s} \\frac{E_2^2 R_2}{s X_2^2} \\propto \\frac{1}{s}$
   *(Unstable operating region)*

---

### 3. Maximum Torque Condition (Pull-Out Torque)
Differentiating torque with respect to slip ($dT/ds = 0$):
$$s_{mT} = \\frac{R_2}{X_2}$$
Substituting $s_{mT}$ into the torque equation yields maximum torque:
$$T_{\\max} = \\frac{3}{\\omega_s} \\cdot \\frac{E_2^2}{2 X_2}$$

> **Critical Observation:** Maximum torque is **independent of rotor resistance ($R_2$)**, but the slip at which maximum torque occurs is directly proportional to $R_2$.`,
    hi: `### 1. टॉर्क समीकरण
$$T = \\frac{3}{\\omega_s} \\cdot \\frac{s \\cdot E_2^2 \\cdot R_2}{R_2^2 + (s \\cdot X_2)^2}$$

### 2. अधिकतम टॉर्क (Pull-Out Torque) की शर्त
$$s_{mT} = \\frac{R_2}{X_2}$$
$$T_{\\max} = \\frac{3}{\\omega_s} \\cdot \\frac{E_2^2}{2 X_2}$$
**महत्वपूर्ण निष्कर्ष:** अधिकतम टॉर्क का मान रोटर प्रतिरोध $R_2$ पर निर्भर नहीं करता, लेकिन जिस स्लिप पर यह मिलता है वह $R_2$ के समानुपाती होती है।`,
    bn: `### ১. টর্ক সমীকরণ
$$T = \\frac{৩}{\\omega_s} \\cdot \\frac{s \\cdot E_2^2 \\cdot R_2}{R_2^2 + (s \\cdot X_2)^2}$$

### ২. সর্বোচ্চ টর্কের শর্ত
$$s_{mT} = \\frac{R_2}{X_2}$$
$$T_{\\max} = \\frac{৩}{\\omega_s} \\cdot \\frac{E_2^2}{২ X_2}$$
**মূল সত্য:** সর্বোচ্চ টর্কের মান রোটর রেজিস্ট্যান্স $R_2$-এর উপর নির্ভর করে না, তবে যে স্লিপে সর্বোচ্চ টর্ক অর্জিত হয় তা $R_2$-এর সমানুপাতিক।`
  },
  keyTakeaways: {
    en: [
      'Torque is directly proportional to slip (T ∝ s) during normal full-load operating conditions.',
      'Condition for maximum torque is R2 = s·X2, where s_max = R2 / X2.',
      'Maximum torque magnitude Tmax = 3·E2² / (2·ωs·X2) is completely independent of rotor resistance R2.',
      'Starting torque is maximized when R2 = X2 (s = 1).'
    ],
    hi: [
      'सामान्य ऑपरेशन में टॉर्क स्लिप के सीधे समानुपाती (T ∝ s) होता है।',
      'अधिकतम टॉर्क की शर्त R2 = s·X2 है।',
      'अधिकतम टॉर्क Tmax का परिमाण रोटर प्रतिरोध R2 से स्वतंत्र होता है।',
      'स्टार्टिंग टॉर्क तब अधिकतम होता है जब R2 = X2 हो।'
    ],
    bn: [
      'স্বাভাবিক লোড অবস্থায় টর্ক স্লিপের সাথে সরাসরি সমানুপাতিক (T ∝ s)।',
      'সর্বোচ্চ টর্কের শর্ত হলো R2 = s·X2, অর্থাৎ sm = R2 / X2।',
      'সর্বোচ্চ টর্ক Tmax-এর মান রোটর রোধ R2-এর উপর নির্ভর করে না।',
      'স্টার্টিং টর্ক সর্বোচ্চ করতে R2 = X2 হতে হবে।'
    ]
  },
  formulas: [
    {
      id: 'f-tmax',
      name: { en: 'Maximum Breakdown Torque', hi: 'अधिकतम टॉर्क', bn: 'সর্বোচ্চ টর্ক' },
      formula: 'T_{\\max} = \\frac{3}{2 \\cdot \\omega_s} \\cdot \\frac{E_2^2}{X_2}',
      description: {
        en: 'Peak torque capability of the induction motor.',
        hi: 'इंडक्शन मोटर की अधिकतम टॉर्क क्षमता।',
        bn: 'ইন্ডাকশন মোটরের সর্বোচ্চ টর্ক উৎপাদন ক্ষমতা।'
      }
    }
  ]
};

export const LESSON_INDUCTION_MOTOR_STARTERS: Lesson = {
  id: 'lsn-ch6-induction-motor-starters-speed',
  topicId: 'ch6-induction-motor-starters-speed',
  order: 22,
  title: {
    en: 'Induction Motor Starters (DOL, Star-Delta, Auto-Xfmr) & Speed Control',
    hi: 'इंडक्शन मोटर स्टार्टर (DOL, स्टार-डेल्टा, ऑटो-ट्रांसफॉर्मर) एवं गति नियंत्रण',
    bn: 'ইন্ডাকশন মোটর স্টার্টার (DOL, স্টার-ডেল্টা, অটো-ট্রান্সফরমার) ও গতি নিয়ন্ত্রণ'
  },
  description: {
    en: 'Industrial starting techniques to limit 5-8x starting current surges: Direct-On-Line (DOL), Star-Delta starter (reduces starting current & torque by factor of 3), Auto-transformer starter, Rotor Resistance starter (Wound Rotor), and modern VFD (V/f speed control).',
    hi: 'उच्च स्टार्टिंग धारा को सीमित करने के लिए स्टार्टर विधियाँ: DOL, स्टार-डेल्टा (धारा एवं टॉर्क 1/3 हो जाता है), ऑटो-ट्रांसफॉर्मर, रोटर प्रतिरोध स्टार्टर एवं आधुनिक VFD (V/f गति नियंत्रण)।',
    bn: 'উচ্চ ৫-৮ গুণ স্টার্টিং কারেন্ট নিয়ন্ত্রণে বিভিন্ন স্টার্টার: ডিরেক্ট-অন-লাইন (DOL), স্টার-ডেল্টা (কারেন্ট ও টর্ক ১/৩ ভাগে নামে), অটো-ট্রান্সফরমার স্টার্টার এবং আধুনিক ভিএফডি (V/f গতি নিয়ন্ত্রণ)।'
  },
  easyExplanation: {
    en: 'At starting, an induction motor acts like a short-circuited transformer and draws 5 to 8 times its rated full-load current. For small motors (< 5 HP), Direct-On-Line (DOL) starting is acceptable. For medium and large motors, Star-Delta starters are used: the stator is connected in Star during starting (drawing 1/√3 voltage and 1/3 starting current/torque) and switches to Delta once running. Speed of an induction motor can be controlled by varying supply frequency and voltage using Variable Frequency Drives (VFDs) maintaining constant V/f ratio to prevent core saturation.',
    hi: 'स्टार्टिंग के समय इंडक्शन मोटर शॉर्ट-सर्किटेड ट्रांसफॉर्मर की तरह व्यवहार करती है और 5 से 8 गुना धारा खींचती है। 5 HP से छोटी मोटरों के लिए DOL स्टार्टर इस्तेमाल होता है। बड़ी मोटरों के लिए स्टार-डेल्टा स्टार्टर उपयोग किया जाता है, जिससे स्टार्टिंग धारा और टॉर्क 1/3 रह जाते हैं। गति नियंत्रण के लिए VFD द्वारा V/f अनुपात को स्थिर रखा जाता है।',
    bn: 'চালুর মুহূর্তে ইন্ডাকশন মোটর শর্ট-সার্কিট ট্রান্সফরমারের মতো আচরণ করে এবং রেটেড কারেন্টের ৫-৮ গুণ বিদ্যুৎ টানে। ছোট মোটরে (< ৫ HP) DOL স্টার্টার ব্যবহার করা হয়। মাঝারি ও বড় মোটরে স্টার-ডেল্টা স্টার্টার প্রয়োগ করা হয় যা স্টার্টিং কারেন্ট ও টর্ককে ১/৩ ভাগে কমিয়ে দেয়। গতি নিয়ন্ত্রণে আধুনিক ভিএফডি (VFD) ড্রাইভ দ্বারা V/f অনুপাত ধ্রুবক রাখা হয়।'
  },
  detailedExplanation: {
    en: `### 1. Star-Delta Starter Comparison
* In Star connection:
  $$V_{\\text{phase, star}} = \\frac{V_L}{\\sqrt{3}}$$
  $$I_{\\text{start, star}} = \\frac{1}{3} I_{\\text{start, delta}}$$
  $$T_{\\text{start, star}} = \\frac{1}{3} T_{\\text{start, delta}}$$

### 2. V/f Speed Control (Variable Frequency Drives)
The magnetic flux is proportional to voltage over frequency:
$$\\Phi_m \\propto \\frac{V}{f}$$
To maintain rated electromagnetic torque without saturating the magnetic core, voltage $V$ and frequency $f$ are varied proportionally (constant $V/f$ ratio).`,
    hi: `### स्टार-डेल्टा स्टार्टर
$$I_{\\text{start, star}} = \\frac{1}{3} I_{\\text{start, delta}}$$
$$T_{\\text{start, star}} = \\frac{1}{3} T_{\\text{start, delta}}$$`,
    bn: `### স্টার-ডেল্টা স্টার্টার
$$I_{\\text{start, star}} = \\frac{১}{৩} I_{\\text{start, delta}}$$
$$T_{\\text{start, star}} = \\frac{১}{৩} T_{\\text{start, delta}}$$`
  },
  keyTakeaways: {
    en: [
      'Star-Delta starter reduces starting line current and starting torque to 1/3 (33.3%) of their direct on-line values.',
      'Auto-transformer starter provides adjustable voltage taps (e.g. 50%, 65%, 80%).',
      'V/f speed control maintains maximum torque capacity and prevents magnetic core saturation.'
    ],
    hi: [
      'स्टार-डेल्टा स्टार्टर स्टार्टिंग धारा और टॉर्क को 1/3 कर देता है।',
      'V/f स्पीड कंट्रोल अधिकतम टॉर्क क्षमता बनाए रखता है और कोर सैचुरेशन रोकता है।'
    ],
    bn: [
      'স্টার-ডেল্টা স্টার্টার স্টার্টিং কারেন্ট ও টর্ককে DOL মানের ১/৩ (৩৩.৩%) অংশে কমিয়ে দেয়।',
      'V/f গতি নিয়ন্ত্রণ পদ্ধতি কোরের স্যাচুরেশন রোধ করে এবং টর্ক ক্ষমতা অক্ষুণ্ণ রাখে।'
    ]
  },
  formulas: [
    {
      id: 'f-stardelta',
      name: { en: 'Star-Delta Current Ratio', hi: 'स्टार-डेल्टा धारा अनुपात', bn: 'স্টার-ডেল্টা কারেন্ট অনুপাত' },
      formula: 'I_{\\text{start(Star)}} = \\frac{1}{3} \\cdot I_{\\text{start(Delta)}}',
      description: {
        en: 'Reduction factor of starting current using star-delta switching.',
        hi: 'स्टार-डेल्टा स्टार्टिंग धारा में 1/3 की कमी।',
        bn: 'স্টার-ডেল্টা সুইচিংয়ে স্টার্টিং কারেন্ট ১/৩ গুণ হ্রাস পায়।'
      }
    }
  ]
};

export const LESSON_SYNCHRONOUS_MACHINES: Lesson = {
  id: 'lsn-ch6-synchronous-generator-motor',
  topicId: 'ch6-synchronous-generator-motor',
  order: 23,
  title: {
    en: 'Synchronous Machines: Alternator EMF, Voltage Regulation & V-Curves',
    hi: 'सिंक्रोनस मशीनें: अल्टरनेटर EMF, वोल्टेज रेगुलेशन एवं मोटर V-वक्र',
    bn: 'সিনক্রোনাস মেশিন: অল্টারনেটর EMF, ভোল্টেজ রেগুলেশন ও সিনক্রোনাস মোটর V-কার্ভ'
  },
  description: {
    en: 'Fundamental principles of Synchronous Generators (Alternators) and Synchronous Motors: generated EMF equation Eph = 4.44·Kc·Kd·f·T·Φ, synchronous reactance Xs = Xl + Xa, voltage regulation methods (Synchronous Impedance EMF, MMF, and Potier Triangle), synchronous motor V-curves, inverted V-curves (power factor vs field excitation), and synchronous condensers.',
    hi: 'सिंक्रोनस जनरेटर (अल्टरनेटर) एवं सिंक्रोनस मोटर: उत्पन्न EMF समीकरण Eph = 4.44·Kc·Kd·f·T·Φ, सिंक्रोनस रिएक्टेंस Xs, वोल्टेज रेगुलेशन विधियाँ (EMF, MMF, पोतियर), मोटर V-वक्र एवं सिंक्रोनस कंडेनसर।',
    bn: 'সিনক্রোনাস জেনারেটর (অল্টারনেটর) ও সিনক্রোনাস মোটরের কার্যনীতি: উৎপন্ন EMF সমীকরণ Eph = ৪.৪৪·Kc·Kd·f·T·Φ, সিনক্রোনাস রিঅ্যাকট্যান্স Xs, ভোল্টেজ রেগুলেশন নির্ণয় পদ্ধতি (EMF, MMF, পোটিয়ার ত্রিভুজ), সিনক্রোনাস মোটরের V-কার্ভ ও পাওয়ার ফ্যাক্টর উন্নয়নে সিনক্রোনাস কনডেনসার।'
  },
  easyExplanation: {
    en: 'A synchronous machine runs at strictly constant synchronous speed (Ns = 120f/P) regardless of the mechanical load. As an Alternator, it converts mechanical energy to AC electricity in power stations worldwide. As a Synchronous Motor, it is not self-starting, but once locked into synchronism, it has a remarkable property: by varying its DC field excitation, its operating power factor can be smoothly controlled from lagging (under-excited) through unity to leading (over-excited). Over-excited synchronous motors running without mechanical load are called "Synchronous Condensers" and are used across power grids for power factor correction.',
    hi: 'सिंक्रोनस मशीन हमेशा स्थिर तुल्यकालिक गति (Ns = 120f/P) पर चलती है। अल्टरनेटर के रूप में यह बिजली उत्पादन का मुख्य स्रोत है। सिंक्रोनस मोटर की खासियत यह है कि इसकी DC फील्ड उत्तेजना (Excitation) बदलकर इसके पावर फैक्टर को लैगिंग, यूनिटी और लीडिंग बनाया जा सकता है। ओवर-एक्साइटेड सिंक्रोनस मोटर को बिना लोड के ग्रिड में पावर फैक्टर सुधारने के लिए "सिंक्रोनस कंडेनसर" के रूप में इस्तेमाल किया जाता है।',
    bn: 'সিনক্রোনাস মেশিন লোড যাই হোক না কেন সর্বদা নিখুঁত ধ্রুবক সিনক্রোনাস গতিতে (Ns = ১২০f/P) ঘোরে। অল্টারনেটর হিসেবে এটি বিদ্যুৎ কেন্দ্রের প্রধান বিদ্যুৎ উৎপাদক। সিনক্রোনাস মোটরের অনন্য বৈশিষ্ট্য হলো, এর ডিসি ফিল্ড এক্সাইটেশন পরিবর্তন করে এর পাওয়ার ফ্যাক্টর ল্যাগিং, ইউনিটি কিংবা লিডিং করা যায়। পাওয়ার গ্রিডে কোনো মেকানিক্যাল লোড ছাড়া ওভার-এক্সাইটেড অবস্থায় চলা সিনক্রোনাস মোটরকে "সিনক্রোনাস কনডেনসার" বলে যা পাওয়ার ফ্যাক্টর সংশোধনে ব্যবহৃত হয়।'
  },
  detailedExplanation: {
    en: `### 1. Alternator EMF Equation
$$E_{\\text{ph}} = 4.44 \\cdot K_c \\cdot K_d \\cdot f \\cdot T_{\\text{ph}} \\cdot \\Phi$$
where:
* $K_c = \\cos(\\alpha / 2)$ = Pitch factor / Chording factor
* $K_d = \\frac{\\sin(m\\beta/2)}{m \\sin(\\beta/2)}$ = Distribution factor
* $T_{\\text{ph}}$ = Turns per phase

---

### 2. Synchronous Motor V-Curves & Inverted V-Curves
* **V-Curve:** Plot of Armature Current ($I_a$) vs DC Field Current ($I_f$) for constant mechanical loads.
  - **Under-excitation ($I_f < I_{f0}$):** Lagging power factor (motor absorbs reactive power).
  - **Normal excitation ($I_f = I_{f0}$):** Unity power factor (minimum armature current).
  - **Over-excitation ($I_f > I_{f0}$):** Leading power factor (motor supplies reactive power).
* **Inverted V-Curve:** Plot of Power Factor ($\cos \\phi$) vs DC Field Current ($I_f$), showing a peak at unity power factor.`,
    hi: `### अल्टरनेटर EMF समीकरण
$$E_{\\text{ph}} = 4.44 \\cdot K_c \\cdot K_d \\cdot f \\cdot T_{\\text{ph}} \\cdot \\Phi$$

### V-वक्र (V-Curves)
* **अंडर-एक्साइटेड:** लैगिंग पावर फैक्टर।
* **नॉर्मल एक्साइटेड:** यूनिटी पावर फैक्टर (न्यूनतम आर्मेचर धारा)।
* **ओवर-एक्साइटेड:** लीडिंग पावर फैक्टर (पावर फैक्टर सुधार के लिए उपयुक्त)।`,
    bn: `### অল্টারনেটর EMF সমীকরণ
$$E_{\\text{ph}} = ৪.৪৪ \\cdot K_c \\cdot K_d \\cdot f \\cdot T_{\\text{ph}} \\cdot \\Phi$$

### V-কার্ভ (V-Curves)
* **আন্ডার-এক্সাইটেড:** ল্যাগিং পাওয়ার ফ্যাক্টর।
* **নরমাল এক্সাইটেড:** ইউনিটি পাওয়ার ফ্যাক্টর (ন্যূনতম আর্মেচার কারেন্ট)।
* **ওভার-এক্সাইটেড:** লিডিং পাওয়ার ফ্যাক্টর (গ্রিডের পাওয়ার ফ্যাক্টর বৃদ্ধিতে উপযোগী)।`
  },
  keyTakeaways: {
    en: [
      'Alternator generated EMF is reduced by pitch factor Kc and distribution factor Kd to produce a pure sinusoidal output.',
      'Synchronous motors run at strictly constant speed Ns = 120f/P from zero to pull-out torque.',
      'V-Curves show that over-excitation causes a synchronous motor to operate at a leading power factor.',
      'Synchronous condensers are un-loaded over-excited synchronous motors used to inject reactive power and improve grid voltage.'
    ],
    hi: [
      'सिंक्रोनस मोटर हमेशा Ns गति पर चलती है।',
      'V-वक्र दर्शाते हैं कि ओवर-एक्साइटेशन पर मोटर लीडिंग पावर फैक्टर पर कार्य करती है।',
      'सिंक्रोनस कंडेनसर ग्रिड में पावर फैक्टर सुधारने के लिए इस्तेमाल होते हैं।'
    ],
    bn: [
      'সিনক্রোনাস মোটর যেকোনো স্বাভাবিক লোডে সর্বদা Ns = ১২০f/P গতিতে চলে।',
      'V-কার্ভ প্রমাণ করে ওভার-এক্সাইটেশনে সিনক্রোনাস মোটর লিডিং পাওয়ার ফ্যাক্টরে চলে।',
      'পাওয়ার গ্রিডে পাওয়ার ফ্যাক্টর উন্নয়নের জন্য আনলোডেড সিনক্রোনাস কনডেনসার ব্যবহৃত হয়।'
    ]
  },
  formulas: [
    {
      id: 'f-alt-emf',
      name: { en: 'Alternator EMF Equation', hi: 'अल्टरनेटर EMF समीकरण', bn: 'অল্টারনেটর EMF সমীকরণ' },
      formula: 'E_{\\text{ph}} = 4.44 \\cdot K_c \\cdot K_d \\cdot f \\cdot T_{\\text{ph}} \\cdot \\Phi',
      description: {
        en: 'RMS induced phase EMF of synchronous alternator.',
        hi: 'अल्टरनेटर में प्रति-फेज उत्पन्न RMS EMF।',
        bn: 'সিনক্রোনাস অল্টারনেটরে প্রতি ফেজে আবিষ্ট RMS EMF।'
      }
    }
  ]
};

export const LESSON_SINGLE_PHASE_SPECIAL_MOTORS: Lesson = {
  id: 'lsn-ch6-single-phase-special-motors',
  topicId: 'ch6-single-phase-special-motors',
  order: 24,
  title: {
    en: 'Single-Phase Motors & Special Electrical Machines (Stepper, BLDC, Universal)',
    hi: 'सिंगल-फेज मोटरें एवं विशेष विद्युत मशीनें (स्टेपर, BLDC, यूनिवर्सल मोटर)',
    bn: 'সিঙ্গেল-ফেজ মোটর ও বিশেষ বৈদ্যুতিক মেশিন (স্টেপার, BLDC, ইউনিভার্সাল মোটর)'
  },
  description: {
    en: 'Double revolving field theory, Split-phase, Capacitor-start, Capacitor-run, Permanent Split Capacitor (PSC), Shaded-pole motors, Universal AC/DC series motor, Stepper motors (VR, PM, Hybrid), and Brushless DC (BLDC) motors in modern electric vehicles and robotics.',
    hi: 'डबल रिवॉल्विंग फील्ड थ्योरी, स्प्लिट-फेज, कैपेसिटर स्टार्ट/रन, शेडेड पोल, यूनिवर्सल एसी/डीसी मोटर, स्टेपर मोटर एवं रोबोटिक्स व इलेक्ट्रिक वाहनों में BLDC मोटर।',
    bn: 'ডাবল রিভলভিং ফিল্ড তত্ত্ব, স্প্লিট-ফেজ, ক্যাপাসিটর স্টার্ট ও রান মোটর, শেডেড-পোল মোটর, ইউনিভার্সাল এসি/ডিসি মোটর, স্টেপার মোটর এবং আধুনিক রোবোটিক্স ও ইভিতে ব্যবহৃত BLDC মোটরের বিশদ বিবরণ।'
  },
  easyExplanation: {
    en: 'Single-phase induction motors are NOT self-starting because a single-phase alternating field produces two equal and opposite rotating magnetic fields (Double Revolving Field Theory), giving zero net starting torque. To make them start, an auxiliary winding with a phase-shifting capacitor or shaded pole is added. Special motors like Universal Motors run on both AC and DC (used in mixers and drills), Stepper Motors rotate in precise angular steps (used in 3D printers and CNC), and BLDC motors provide high efficiency and electronic commutation in electric vehicles and drones.',
    hi: 'सिंगल-फेज इंडक्शन मोटर सेल्फ-स्टार्टिंग नहीं होती क्योंकि इसमें दो विपरीत दिशा में घूमने वाले फ्लक्स उत्पन्न होते हैं जिससे नेट स्टार्टिंग टॉर्क शून्य होता है। इसे शुरू करने के लिए कैपेसिटर या शेडेड पोल द्वारा फेज स्प्लिट किया जाता है। यूनिवर्सल मोटर AC और DC दोनों पर चलती है (मिक्सर ग्राइंडर), स्टेपर मोटर सटीक कोणों पर घूमती है और BLDC मोटर रोबोटिक्स एवं इलेक्ट्रिक वाहनों में प्रयुक्त होती है।',
    bn: 'সিঙ্গেল-ফেজ ইন্ডাকশন মোটর নিজে নিজে চালু হতে পারে না (Not self-starting) কারণ এতে দুটি সমান ও বিপরীত ঘূর্ণমান ক্ষেত্র তৈরি হওয়ায় প্রারম্ভিক নিট টর্ক শূন্য হয়। চালু করার জন্য ক্যাপাসিটর দিয়ে ফেজ বিভক্ত করা হয়। ইউনিভার্সাল মোটর এসি ও ডিসি উভয়েই চলে, স্টেপার মোটর নিখুঁত কোণে ঘোরে এবং বিএলডিসি (BLDC) মোটর আধুনিক ইলেকট্রিক গাড়ি ও ড্রোনে ব্যবহৃত হয়।'
  },
  detailedExplanation: {
    en: `### 1. Double Revolving Field Theory
A stationary alternating flux $\\Phi = \\Phi_m \\cos(\\omega t)$ can be mathematically resolved into two oppositely rotating components:
$$\\Phi_f = \\frac{1}{2}\\Phi_m \\quad \\text{(Forward rotating field at } +N_s\\text{)}$$
$$\\Phi_b = \\frac{1}{2}\\Phi_m \\quad \\text{(Backward rotating field at } -N_s\\text{)}$$
At standstill ($N_r = 0$), forward slip $s_f = 1$ and backward slip $s_b = 2 - s_f = 1$. The forward torque equals the backward torque $\\implies T_{\\text{start}} = 0$.

---

### 2. Special Machine Classifications
1. **Universal Motor:** Series wound commutator motor running on both AC and DC with very high starting torque and high operating speeds (up to 20,000 RPM).
2. **Stepper Motor:** Brushless DC motor that divides a full rotation into a number of equal steps ($\theta_s = \\frac{360^\\circ}{m \\cdot N_r}$).
3. **BLDC Motor (Brushless DC):** Permanent magnet rotor with electronic inverter commutation, high power density, and over 90% efficiency.`,
    hi: `### डबल रिवॉल्विंग फील्ड थ्योरी
$$\\Phi_f = \\frac{1}{2}\\Phi_m \\quad \\text{(फॉरवर्ड फील्ड)}$$
$$\\Phi_b = \\frac{1}{2}\\Phi_m \\quad \\text{(बैकवर्ड फील्ड)}$$
स्टार्टिंग में फॉरवर्ड और बैकवर्ड टॉर्क बराबर होने के कारण नेट टॉर्क शून्य होता है।`,
    bn: `### ডাবল রিভলভিং ফিল্ড তত্ত্ব
$$\\Phi_f = \\frac{১}{২}\\Phi_m \\quad \\text{(সম্মুখমুখী ক্ষেত্র)}$$
$$\\Phi_b = \\frac{১}{২}\\Phi_m \\quad \\text{(বিপরীতমুখী ক্ষেত্র)}$$
চালুর মুহূর্তে দুটি বিপরীত টর্ক সমান হওয়ায় নিট স্টার্টিং টর্ক শূন্য হয়।`
  },
  keyTakeaways: {
    en: [
      'Single-phase induction motors have zero starting torque due to equal and opposite forward and backward rotating fields.',
      'Capacitors in auxiliary winding create a 90° phase displacement to establish a rotating magnetic field.',
      'Universal motors operate on both AC and DC supplies with high speed and high power-to-weight ratio.',
      'BLDC motors utilize electronic inverter commutation eliminating mechanical brushes.'
    ],
    hi: [
      'सिंगल फेज इंडक्शन मोटर में स्टार्टिंग टॉर्क शून्य होता है।',
      'कैपेसिटर द्वारा फेज विस्थापन करके स्टार्टिंग टॉर्क बनाया जाता है।',
      'यूनिवर्सल मोटर AC और DC दोनों पर कार्य करती है।'
    ],
    bn: [
      'সিঙ্গেল-ফেজ ইন্ডাকশন মোটরের স্টার্টিং টর্ক শূন্য থাকে।',
      'ক্যাপাসিটর ব্যবহারের মাধ্যমে ৯০° ফেজ ব্যবধান সৃষ্টি করে স্টার্টিং টর্ক তৈরি করা হয়।',
      'ইউনিভার্সাল মোটর এসি ও ডিসি উভয় সাপ্লাইতেই উচ্চ গতিতে চলে।'
    ]
  },
  formulas: [
    {
      id: 'f-step-angle',
      name: { en: 'Stepper Motor Step Angle', hi: 'स्टेपर मोटर स्टेप कोण', bn: 'স্টেপার মোটরের স্টেপ অ্যাঙ্গেল' },
      formula: '\\beta = \\frac{N_s - N_r}{N_s \\cdot N_r} \\times 360^\\circ',
      description: {
        en: 'Resolution step angle per input pulse.',
        hi: 'प्रति पल्स स्टेप कोण।',
        bn: 'প্রতি পালসে মোটরের ঘূর্ণন কোণ।'
      }
    }
  ]
};
