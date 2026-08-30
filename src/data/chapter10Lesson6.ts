import { Lesson } from '../types';

export const LESSON_SELF_INDUCTION_INDUCTANCE: Lesson = {
  id: 'lsn-ch10-self-induction-inductance',
  topicId: 'ch10-self-induction-inductance',
  chapterId: 'ch-em-induction',
  order: 6,
  title: {
    en: 'Self-Induction, Self-Inductance & Inductor Energy Storage',
    hi: 'स्व-प्रेरण, स्व-प्रेरकत्व (L) एवं प्रेरक ऊर्जा संचयन',
    bn: 'স্ব-আবেশ, স্ব-আবেশাঙ্ক (L) ও ইন্ডাক্টরে শক্তি সঞ্চয়'
  },
  description: {
    en: 'Deeply explore self-induction, self-induced back-EMF, coefficient of self-inductance L, definition of the Henry (H), mathematical derivation of e = -L di/dt, solenoid inductance formula (L = μN²A/l), magnetic energy storage (W = ½LI²), RL transient current growth and decay, time constant τ = L/R, 63.2% / 36.8% benchmarks, inductive kick (flyback) voltage spikes, and flyback protection.',
    hi: 'स्व-प्रेरण, स्व-प्रेरित बैक-EMF, स्व-प्रेरकत्व गुणांक L, हेनरी (H) की परिभाषा, e = -L di/dt का गणितीय निगमन, परिनालिका प्रेरकत्व सूत्र (L = μN²A/l), चुंबकीय ऊर्जा संचयन (W = ½LI²), RL क्षणिक धारा वृद्धि एवं क्षय, समय स्थिरांक τ = L/R, 63.2% / 36.8% मानक तथा फ्लाईबैक सुरक्षा का विस्तृत अध्ययन।',
    bn: 'স্ব-আবেশ, স্ব-আবিষ্ট ব্যাক-ইএমএফ, স্ব-আবেশ গুণাঙ্ক L, হেনরি (H) এর সংজ্ঞা, e = -L di/dt সমীকরণ প্রতিপাদন, সোলেনয়েড আবেশাঙ্ক সূত্র (L = μN²A/l), চৌম্বক শক্তি সঞ্চয় (W = ½LI²), RL ট্রানজিয়েন্ট কারেন্ট বৃদ্ধি ও ক্ষয়, সময় ধ্রুবক τ = L/R, ৬৩.২% ও ৩৬.৮% মান এবং ফ্লাইব্যাক ভোল্টেজ স্পাইক রোধের বিশদ পাঠ।'
  },
  estimatedMinutes: 35,
  easyExplanation: {
    en: "Imagine trying to push a heavy stone flywheel. At first, its heavy inertia resists your push and takes time to speed up. Once spinning, if you try to stop it abruptly, it pushes back with immense force! An electrical inductor does the exact same thing to electric current. When you increase current through a coil, it creates an opposing 'Back-EMF' to fight the change. When you turn the power off, the collapsing magnetic field releases stored energy, generating a fierce voltage surge to keep current flowing! This property of a coil opposing any change in its own current is called 'Self-Induction'.",
    hi: 'कल्पना कीजिए कि आप एक भारी पत्थर के पहिये (फ्लाईव्हील) को धक्का दे रहे हैं। शुरुआत में उसका जड़त्व आपकी गति का विरोध करता है और घूमने में समय लेता है। लेकिन एक बार जब वह तेजी से घूमने लगता है और आप उसे अचानक रोकना चाहते हैं, तो वह भारी बल के साथ आगे धकेलता है! एक विद्युत प्रेरक (Inductor) विद्युत धारा के साथ बिल्कुल यही करता है। जब आप कुंडली में धारा बढ़ाते हैं, तो वह एक विरोधी बैक-EMF बनाकर बदलाव का विरोध करती है। जब आप स्विच बंद करते हैं, तो उसका चुंबकीय क्षेत्र टूटकर ऊर्जा छोड़ता है ताकि धारा बहती रहे! कुंडली के इस गुण को "स्व-प्रेरण" (Self-Induction) कहते हैं।',
    bn: 'মনে করুন একটি ভারী পাথরের চাকা আপনি ঘোরাতে চেষ্টা করছেন। শুরুতে তার জড়তার কারণে চাকাটি ঘুরতে চায় না এবং গতি পেতে সময় নেয়। আবার যখন চাকাটি ঘুরতে থাকে এবং আপনি হঠাৎ থামাতে যান, তখন এটি প্রচণ্ড শক্তিতে ঘুরতে থাকার চেষ্টা করে! বৈদ্যুতিক ইন্ডাক্টরও কারেন্টের সাথে হুবহু এই কাজটিই করে। কয়েলে কারেন্ট বাড়াতে গেলে এটি একটি বাধা সৃষ্টিকারী ব্যাক-ইএমএফ (Back-EMF) তৈরি করে কারেন্ট বাড়তে বাধা দেয়। আবার সুইচ বন্ধ করে দিলে এর চৌম্বক ক্ষেত্রে জমানো শক্তি হঠাৎ নির্গত হয়ে কারেন্ট চালু রাখার চেষ্টা করে! নিজের কারেন্ট পরিবর্তনের বিরুদ্ধে কয়েলের এই বাধাদানকারী বৈশিষ্ট্যকেই "স্ব-আবেশ" (Self-Induction) বলে।'
  },
  detailedExplanation: {
    en: `1. Definition of Self-Induction & Physical Phenomenon:
Self-Induction is the fundamental electromagnetic property of an electric circuit or coil by which it opposes any change (increase or decrease) in the electric current flowing through itself, by inducing an internal electromotive force known as Self-Induced EMF or Counter-EMF (Back-EMF).

2. Mechanism of Self-Induced EMF:
- When an electric current i(t) flows through a coil of N turns, it sets up a proportional magnetic flux: Φ ∝ i.
- If the current changes with time (di/dt ≠ 0), the magnetic flux changes at the rate dΦ/dt.
- Since this changing flux links the turns of the very same coil, by Faraday’s Law, an EMF is self-induced:
    e_s = - N · \\frac{d\\Phi}{dt}
- By Lenz’s Law, this self-induced EMF acts in the direction opposing the change in current.

3. Definition of Self-Inductance (L) & The Henry:
Total magnetic flux linkages λ = N · Φ are directly proportional to current i:
    N · Φ = L · i
where L is the constant of proportionality termed the Coefficient of Self-Inductance (or simply Self-Inductance).
- Definition 1 (Flux Linkage per Ampere): L = (N · Φ) / i [Weber-turns per Ampere].
- Definition 2 (Induced Back-EMF per Unit Rate of Current Change):
    e = - \\frac{d(N\\Phi)}{dt} = - L · \\frac{di}{dt}  ==>  |L| = \\frac{|e|}{|di/dt|}
- Definition of One Henry (1 H): A coil possesses a self-inductance of 1 Henry if an EMF of 1 Volt is self-induced across its terminals when the current through it changes at a uniform rate of 1 Ampere per second (1 H = 1 V·s/A = 1 Wb-t/A = 1 Ω·s).

4. Derivation of Self-Inductance of a Long Solenoid:
Consider a long air-cored or ferromagnetic solenoid of length l, cross-sectional area A, having N total turns:
- Magnetic field strength inside the solenoid: H = (N · i) / l.
- Magnetic flux density: B = μ · H = μ · (N · i) / l, where μ = μ₀ · μ_r.
- Total magnetic flux through cross-section: Φ = B · A = [μ · (N · i) · A] / l.
- Substituting Φ into L = (N · Φ) / i:
    L = \\frac{N · \\left(\\frac{\\mu · N · i · A}{l}\\right)}{i} = \\frac{\\mu · N^2 · A}{l} = \\frac{\\mu_0 · \\mu_r · N^2 · A}{l}
- In terms of core Reluctance (S = l / (μA)):
    L = \\frac{N^2}{S}

5. Energy Stored in the Magnetic Field of an Inductor:
To establish a current I against self-induced back-EMF e = L (di/dt), the source must deliver instantaneous electrical power:
    p(t) = e · i = \\left(L · \\frac{di}{dt}\\right) · i
- The differential work done in time dt is: dW = p(t) · dt = L · i · di.
- Total energy stored in the magnetic field as current rises from 0 to I:
    W = \\int_{0}^{I} L · i · di = L · \\left[ \\frac{i^2}{2} \\right]_{0}^{I} = \\frac{1}{2} · L · I^2  [Joules, J]

6. DC Series R-L Transient Response:
- (A) Growth of Current (Switch ON to DC Voltage V):
    V = i · R + L · \\frac{di}{dt}
    i(t) = I_0 · \\left(1 - e^{-t / \\tau}\\right) = \\frac{V}{R} · \\left(1 - e^{-t / (L/R)}\\right)
    - At t = 0: i(0) = 0 A, v_L(0) = V (Inductor acts as an open circuit).
    - At t = τ = L/R: i(τ) = I_0(1 - e⁻¹) = I_0(1 - 0.368) = 0.632 · I_0 (Current reaches 63.2% of steady state).
    - At t = 5τ: i(5τ) = I_0(1 - e⁻⁵) = 0.993 · I_0 ≈ I_0 (Steady-state reached; inductor acts as a pure short circuit).
- (B) Decay of Current (Freewheeling / Discharge):
    i(t) = I_0 · e^{-t / \\tau}
    - At t = τ = L/R: i(τ) = 0.368 · I_0 (Current decays to 36.8% of initial value).

7. Inductive Kick (Flyback Voltage Spike) & Diode Snubber Protection:
When an inductive circuit carrying current I_0 is abruptly opened (dt → 0), di/dt becomes enormous and negative:
    v_{kick} = - L · \\left(\\frac{-I_0}{\\Delta t}\\right) \\gg V_{supply}
- This induces destructive kilovolt arcs across mechanical switch contacts or punches through driving transistors (MOSFETs/BJTs).
- Protection: A reverse-biased Flyback (Freewheeling) Diode connected in parallel across the inductive coil provides a safe circulating discharge path, dissipating stored magnetic energy harmlessly as heat across coil resistance (I²Rt).`,

    hi: `1. स्व-प्रेरण की परिभाषा एवं भौतिक क्रिया:
स्व-प्रेरण विद्युत परिपथ या कुंडली का वह मौलिक गुण है जिसके द्वारा वह अपने अंदर बहने वाली धारा में किसी भी परिवर्तन (वृद्धि या कमी) का विरोध करती है। इसके लिए वह अपने सिरों पर एक विरोधी ईएमएफ उत्पन्न करती है जिसे "स्व-प्रेरित ईएमएफ" (Self-Induced EMF या Back-EMF) कहते हैं।

2. स्व-प्रेरकत्व (L) एवं हेनरी की परिभाषा:
- फ्लक्स लिंकेज NΦ = L · i ==> L = (NΦ) / i।
- स्व-प्रेरित EMF: e = -L · (di/dt)।
- 1 हेनरी (1 H): यदि किसी कुंडली में धारा 1 एम्पीयर/सेकंड की दर से बदलने पर 1 वोल्ट का बैक-EMF उत्पन्न हो, तो उसका स्व-प्रेरकत्व 1 हेनरी कहलाता है।

3. परिनालिका का स्व-प्रेरकत्व सूत्र:
- L = (μ₀ · μ_r · N² · A) / l = N² / S।

4. प्रेरक में संचित चुंबकीय ऊर्जा:
- W = ½ · L · I² (जूल)।

5. RL परिपथ में धारा वृद्धि एवं समय स्थिरांक (τ = L/R):
- धारा वृद्धि: i(t) = I₀ (1 - e^(-t/τ))।
- 1 समय स्थिरांक (t = 1τ) पर धारा अपने अधिकतम मान का 63.2% प्राप्त कर लेती है।
- 5 समय स्थिरांक (t = 5τ) पर धारा 99.3% होकर स्थिर अवस्था में पहुंच जाती है।
- धारा क्षय: i(t) = I₀ · e^(-t/τ) (1τ पर 36.8% शेष)।

6. फ्लाईबैक वोल्टेज स्पाइक एवं सुरक्षा:
कुंडली का स्विच अचानक बंद करने पर di/dt अत्यधिक होने से विशाल वोल्टेज स्पाइक उत्पन्न होता है। ट्रांजिस्टर और स्विच को जलने से बचाने के लिए समानांतर में फ्लाईबैक डायोड (Freewheeling Diode) लगाया जाता है।`,

    bn: `১. স্ব-আবেশের সংজ্ঞা:
কোনো কয়েলে কারেন্টের মান পরিবর্তনের (বৃদ্ধি বা হ্রাস) বিরুদ্ধে কয়েলটির নিজস্ব বাধার সৃষ্টি করার ধর্মকেই স্ব-আবেশ (Self-Induction) বলে। এর ফলে কয়েলে যে বিপরীতমুখী ভোল্টেজ আবিষ্ট হয় তাকে স্ব-আবিষ্ট ব্যাক-ইএমএফ (Back-EMF) বলে।

২. স্ব-আবেশাঙ্ক (L) ও হেনরির সংজ্ঞা:
- মোট ফ্লাক্স লিংকেজ NΦ = L · i ==> L = (NΦ) / i।
- আবিষ্ট ব্যাক-ইএমএফ: e = -L (di/dt)।
- ১ হেনরি (1 H): কোনো কয়েলে কারেন্ট ১ অ্যাম্পিয়ার/সেকেন্ড হারে পরিবর্তিত হলে যদি ১ ভোল্ট ব্যাক-ইএমএফ আবিষ্ট হয়, তবে ঐ কয়েলের স্ব-আবেশাঙ্ককে ১ হেনরি বলা হয়।

৩. সোলেনয়েডের আবেশাঙ্ক সমীকরণ:
- L = (μ₀ · μ_r · N² · A) / l = N² / S।

৪. সঞ্চিত চৌম্বক শক্তি:
- W = ½ · L · I² (জুল)।

৫. RL সার্কিট ট্রানজিয়েন্ট ও সময় ধ্রুবক (τ = L/R):
- কারেন্ট বৃদ্ধি: i(t) = I₀ (১ - e^(-t/τ))।
- ১ সময় ধ্রুবকে (t = ১τ) কারেন্ট তার সর্বোচ্চ মানের ৬৩.২% এ পৌঁছায়।
- ৫ সময় ধ্রুবকে (t = ৫τ) কারেন্ট ৯৯.৩% হয়ে স্থির অবস্থায় পৌঁছায়।
- কারেন্ট ক্ষয়: i(t) = I₀ · e^(-t/τ) (১τ তে ৩৬.৮% অবশিষ্ট থাকে)।

৬. ফ্লাইব্যাক ভোল্টেজ স্পাইক ও সুরক্ষা:
ইন্ডাক্টিভ সার্কিট হঠাৎ বিচ্ছিন্ন করলে di/dt এর মান বিশাল হয়ে ক্ষতিকারক ভোল্টেজ স্পাইক তৈরি করে। ট্রানজিস্টর ও সুইচ রক্ষায় কয়েলের সমান্তরালে ফ্লাইব্যাক ডায়োড ব্যবহার করা হয়।`
  },
  formulas: [
    {
      id: 'eq-self-induced-emf',
      expression: 'e = - L · \\frac{di}{dt}',
      description: {
        en: 'Self-induced back-EMF equation relating induced voltage to rate of change of current.',
        hi: 'धारा परिवर्तन की दर एवं स्व-प्रेरित बैक-EMF का संबंध सूत्र।',
        bn: 'কারেন্ট পরিবর্তনের হার ও স্ব-আবিষ্ট ব্যাক-ইএমএফ-এর সম্পর্ক সমীকরণ।'
      },
      variables: [
        { symbol: 'e', name: { en: 'Self-induced EMF (Volts, V)', hi: 'स्व-प्रेरित ईएमएफ (V)', bn: 'স্ব-আবিষ্ট ইএমএফ (V)' } },
        { symbol: 'L', name: { en: 'Self-Inductance (Henrys, H)', hi: 'स्व-प्रेरकत्व (हेनरी, H)', bn: 'স্ব-আবেশাঙ্ক (হেনরি, H)' } },
        { symbol: 'di/dt', name: { en: 'Rate of change of current (Amperes/second, A/s)', hi: 'धारा परिवर्तन की दर (A/s)', bn: 'কারেন্ট পরিবর্তনের হার (A/s)' } }
      ]
    },
    {
      id: 'eq-solenoid-inductance',
      expression: 'L = \\frac{\\mu_0 · \\mu_r · N^2 · A}{l} = \\frac{N^2}{S}',
      description: {
        en: 'Self-inductance of a long solenoid based on geometrical dimensions and magnetic permeability.',
        hi: 'ज्यामितीय विमाओं एवं पारगम्यता के आधार पर परिनालिका का स्व-प्रेरकत्व सूत्र।',
        bn: 'জ্যামিতিক পরিমাপ ও চৌম্বক প্রবেশ্যতার ভিত্তিতে সোলেনয়েডের স্ব-আবেশাঙ্ক সূত্র।'
      },
      variables: [
        { symbol: 'μ₀', name: { en: 'Permeability of free space (4π × 10⁻⁷ H/m)', hi: 'निर्वात की पारगम्यता (4π × 10⁻⁷ H/m)', bn: 'শূন্যস্থানের প্রবেশ্যতা (৪π × ১০⁻⁷ H/m)' } },
        { symbol: 'μ_r', name: { en: 'Relative permeability of core material', hi: 'कोर पदार्थ की आपेक्षिक पारगम्यता', bn: 'কোর উপাদানের আপেক্ষিক প্রবেশ্যতা' } },
        { symbol: 'N', name: { en: 'Total number of coil turns', hi: 'कुल फेरों की संख्या', bn: 'মোট প্যাঁচ সংখ্যা' } },
        { symbol: 'A', name: { en: 'Cross-sectional area of core (m²)', hi: 'क्रोड का अनुप्रस्थ काट क्षेत्रफल (m²)', bn: 'কোরের প্রস্থচ্ছেদের ক্ষেত্রফল (m²)' } },
        { symbol: 'l', name: { en: 'Length of solenoid (m)', hi: 'परिनालिका की लंबाई (m)', bn: 'সোলেনয়েডের দৈর্ঘ্য (m)' } }
      ]
    },
    {
      id: 'eq-inductor-stored-energy',
      expression: 'W = \\frac{1}{2} · L · I^2',
      description: {
        en: 'Total magnetic potential energy stored in the magnetic field of an inductor carrying steady current I.',
        hi: 'स्थिर धारा I ले जा रहे प्रेरक के चुंबकीय क्षेत्र में संचित कुल चुंबकीय ऊर्जा।',
        bn: 'স্থির কারেন্ট I বহনকারী ইন্ডাক্টরের চৌম্বক ক্ষেত্রে সঞ্চিত মোট চৌম্বক বিভব শক্তি।'
      },
      variables: [
        { symbol: 'W', name: { en: 'Stored Magnetic Energy (Joules, J)', hi: 'संचित चुंबकीय ऊर्जा (जूल)', bn: 'সঞ্চিত চৌম্বক শক্তি (জুল)' } },
        { symbol: 'I', name: { en: 'Current flowing through inductor (Amperes, A)', hi: 'प्रेरक में प्रवाहित धारा (एम्पीयर)', bn: 'ইন্ডাক্টরে প্রবাহিত কারেন্ট (অ্যাম্পিয়ার)' } }
      ]
    },
    {
      id: 'eq-rl-time-constant',
      expression: '\\tau = \\frac{L}{R}',
      description: {
        en: 'Time constant of a series RL circuit defining the rate of current growth and decay.',
        hi: 'श्रेणी RL परिपथ का समय स्थिरांक जो धारा वृद्धि एवं क्षय की दर निर्धारित करता है।',
        bn: 'সিরিজ RL সার্কিটের সময় ধ্রুবক যা কারেন্ট বৃদ্ধি ও ক্ষয়ের গতি নির্ধারণ করে।'
      },
      variables: [
        { symbol: 'τ', name: { en: 'Time Constant (Seconds, s)', hi: 'समय स्थिरांक (सेकंड)', bn: 'সময় ধ্রুবক (সেকেন্ড)' } },
        { symbol: 'R', name: { en: 'Circuit Series Resistance (Ohms, Ω)', hi: 'परिपथ श्रेणी प्रतिरोध (ओम)', bn: 'সার্কিটের সিরিজ রোধ (ওহম)' } }
      ]
    },
    {
      id: 'eq-rl-current-growth',
      expression: 'i(t) = \\frac{V}{R} · \\left(1 - e^{-t / \\tau}\\right)',
      description: {
        en: 'Instantaneous current during the energization (growth) transient in a series RL circuit.',
        hi: 'श्रेणी RL परिपथ में धारा वृद्धि (चार्जिंग) के दौरान तात्कालिक धारा समीकरण।',
        bn: 'সিরিজ RL সার্কিটে কারেন্ট বৃদ্ধি (চার্জিং) চলাকালীন তাৎক্ষণিক কারেন্ট সমীকরণ।'
      },
      variables: [
        { symbol: 'V', name: { en: 'Applied DC Supply Voltage (Volts, V)', hi: 'प्रयुक्त डीसी वोल्टेज (V)', bn: 'প্রযুক্ত ডিসি ভোল্টেজ (V)' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-self-induction-derivation',
      title: {
        en: 'Mathematical Derivation of Solenoid Inductance & Energy Formula',
        hi: 'परिनालिका प्रेरकत्व एवं ऊर्जा सूत्र का गणितीय निगमन',
        bn: 'সোলেনয়েড আবেশাঙ্ক ও শক্তি সূত্রের গাণিতিক প্রতিপাদন'
      },
      content: {
        en: `Derivation of Solenoid Inductance (L = μN²A/l):
1. Magnetic field inside long solenoid: B = μ · (N · I / l).
2. Magnetic flux through each turn: Φ = B · A = (μ · N · I · A) / l.
3. Total flux linkage: λ = N · Φ = (μ · N² · I · A) / l.
4. By definition, L = λ / I = (μ · N² · A) / l. (Proven).

Derivation of Stored Energy (W = ½LI²):
1. Back-EMF e = L (di/dt).
2. Instantaneous input power p = e · i = L · i · (di/dt).
3. Incremental energy dW = p · dt = L · i · di.
4. Integrate from 0 to I: W = ∫₀ᴵ L · i · di = ½ · L · I². (Proven).`,
        hi: `परिनालिका प्रेरकत्व का निगमन:
1. परिनालिका में चुंबकीय क्षेत्र: B = μ · (N · I / l)।
2. प्रत्येक फेरे का फ्लक्स: Φ = B · A = (μ · N · I · A) / l।
3. कुल फ्लक्स लिंकेज: λ = N · Φ = (μ · N² · I · A) / l।
4. प्रेरकत्व की परिभाषा से: L = λ / I = (μ · N² · A) / l (इति सिद्धम्)।

संचित ऊर्जा का निगमन:
1. बैक-EMF e = L (di/dt)।
2. शक्ति p = e · i = L · i · (di/dt)।
3. ऊर्जा dW = p · dt = L · i · di।
4. समाकलन करने पर: W = ∫₀ᴵ L · i · di = ½ · L · I² (इति सिद्धम्)।`,
        bn: `সোলেনয়েড আবেশাঙ্কের প্রতিপাদন:
১. সোলেনয়েডের অভ্যন্তরে ক্ষেত্র: B = μ · (N · I / l)।
২. প্রতিটি প্যাঁচের ফ্লাক্স: Φ = B · A = (μ · N · I · A) / l।
৩. মোট ফ্লাক্স লিংকেজ: λ = N · Φ = (μ · N² · I · A) / l।
৪. আবেশাঙ্কের সংজ্ঞানুযায়ী: L = λ / I = (μ · N² · A) / l (প্রমাণিত)।

সঞ্চিত শক্তির প্রতিপাদন:
১. ব্যাক-EMF e = L (di/dt)।
২. ক্ষমতা p = e · i = L · i · (di/dt)।
৩. শক্তি dW = p · dt = L · i · di।
৪. সমাকলন করে পাই: W = ∫₀ᴵ L · i · di = ½ · L · I² (প্রমাণিত)।`
      },
      schematicId: 'circuit-ch10-self-induction-rl-transient',
      keyEquations: ['L = \\frac{\\mu_0 \\mu_r N^2 A}{l}', 'W = \\frac{1}{2} L I^2', '\\tau = \\frac{L}{R}']
    }
  ],
  diagrams: [
    {
      id: 'diag-self-induction-transient',
      title: {
        en: 'RL Circuit Current Growth, Time Constant τ, and Flyback Spark Mechanism',
        hi: 'RL परिपथ धारा वृद्धि, समय स्थिरांक τ एवं फ्लाईबैक स्पार्क क्रियाविधि',
        bn: 'RL সার্কিটে কারেন্ট বৃদ্ধি, সময় ধ্রুবক τ ও ফ্লাইব্যাক স্পার্ক পদ্ধতি'
      },
      caption: {
        en: 'DC RL circuit transient showing current exponential growth to I₀=V/R, 63.2% rise at t=τ, and back-EMF inductive kick.',
        hi: 'डीसी RL परिपथ में घातीय धारा वृद्धि, t=τ पर 63.2% मान तथा बैक-EMF वोल्टेज किक।',
        bn: 'ডিসি RL সার্কিটে এক্সপোনেনশিয়াল কারেন্ট বৃদ্ধি, t=τ তে ৬৩.২% মান এবং ব্যাক-EMF ভোল্টেজ স্পাইক।'
      },
      svgType: 'circuit-ch10-self-induction-rl-transient'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-self-1',
      problem: {
        en: 'A solenoid of length 0.5 m has 1000 turns wound uniformly on an iron core of relative permeability μ_r = 800 and cross-sectional area 20 cm² (2.0 × 10⁻³ m²). Calculate: (a) The self-inductance L of the solenoid. (b) The self-induced back-EMF if current drops from 5.0 A to 0.0 A in 20 milliseconds.',
        hi: '0.5 मीटर लंबी परिनालिका में 800 आपेक्षिक पारगम्यता (μ_r) और 20 सेमी² अनुप्रस्थ क्षेत्रफल वाले लोहे के कोर पर 1000 फेरे लपेटे गए हैं। गणना कीजिए: (a) परिनालिका का स्व-प्रेरकत्व L, (b) यदि धारा 20 मिलीसेकंड में 5.0 A से घटकर शून्य हो जाए तो प्रेरित बैक-EMF।',
        bn: '০.৫ মিটার দীর্ঘ একটি সোলেনয়েডে ৮০০ আপেক্ষিক প্রবেশ্যতা (μ_r) এবং ২০ সেমি² প্রস্থচ্ছেদ বিশিষ্ট লোহার কোরের ওপর ১০০০টি প্যাঁচ রয়েছে। নির্ণয় করো: (ক) সোলেনয়েডের স্ব-আবেশাঙ্ক L, (খ) কারেন্ট ২০ মিলি-সেকেন্ডে ৫.০ A থেকে ০.০ A-তে নেমে আসলে আবিষ্ট ব্যাক-ইএমএফ।'
      },
      givenValues: {
        'l': '0.5 m',
        'N': '1000 turns',
        'μ_r': '800',
        'μ_0': '4π × 10⁻⁷ H/m ≈ 1.2566 × 10⁻⁶ H/m',
        'A': '20 cm² = 20 × 10⁻⁴ m² = 2.0 × 10⁻³ m²',
        'di': '0.0 A - 5.0 A = -5.0 A',
        'dt': '20 ms = 0.020 s'
      },
      solution: {
        en: `Step 1: Calculate Self-Inductance L
Formula: L = (μ₀ · μ_r · N² · A) / l
L = [(4π × 10⁻⁷) × 800 × (1000)² × (2.0 × 10⁻³)] / 0.5
L = [(1.25664 × 10⁻⁶) × 800 × 1,000,000 × (2.0 × 10⁻³)] / 0.5
L = [2.0106] / 0.5 = 4.021 Henrys (≈ 4.02 H).

Step 2: Calculate Self-Induced Back-EMF
Formula: e = - L · (di / dt)
di/dt = (-5.0 A) / (0.020 s) = -250.0 A/s
e = - (4.021 H) × (-250.0 A/s) = +1,005.25 Volts.`,
        hi: `चरण 1: स्व-प्रेरकत्व L की गणना
सूत्र: L = (μ₀ · μ_r · N² · A) / l
L = [(4π × 10⁻⁷) × 800 × 1000² × (2.0 × 10⁻³)] / 0.5
L = 2.0106 / 0.5 = 4.021 हेनरी (≈ 4.02 H)।

चरण 2: स्व-प्रेरित बैक-EMF की गणना
सूत्र: e = - L · (di / dt)
di/dt = -5.0 / 0.020 = -250.0 A/s
e = - (4.021) × (-250.0) = +1005.25 वोल्ट।`,
        bn: `ধাপ ১: স্ব-আবেশাঙ্ক L নির্ণয়
সূত্র: L = (μ₀ · μ_r · N² · A) / l
L = [(৪π × ১০⁻⁷) × ৮০০ × ১০০০² × (২.০ × ১০⁻³)] / ০.৫
L = ২.০১০৬ / ০.৫ = ৪.০২১ হেনরি (≈ ৪.০২ H)।

ধাপ ২: স্ব-আবিষ্ট ব্যাক-ইএমএফ নির্ণয়
সূত্র: e = - L · (di / dt)
di/dt = (-৫.০) / (০.০২০) = -২৫০.০ A/s
e = - (৪.০২১) × (-২৫০.০) = +১০০৫.২৫ ভোল্ট।`
      },
      finalAnswer: {
        en: '(a) Self-Inductance L = 4.02 H, (b) Self-Induced EMF e = +1,005.25 V',
        hi: '(a) स्व-प्रेरकत्व L = 4.02 H, (b) प्रेरित बैक-EMF e = +1,005.25 V',
        bn: '(ক) স্ব-আবেশাঙ্ক L = ৪.০২ H, (খ) আবিষ্ট ব্যাক-ইএমএফ e = +১০০৫.২৫ V'
      }
    },
    {
      id: 'ex-self-2',
      problem: {
        en: 'A relay coil has an inductance of 2.5 H and resistance of 25 Ω. It is connected across a 50 V DC power supply. Calculate: (a) The time constant τ of the circuit. (b) The steady-state final current I₀. (c) The stored magnetic energy at steady state. (d) The instantaneous current at t = 0.10 seconds after closing the switch.',
        hi: 'एक रिले कुंडली का प्रेरकत्व 2.5 H और प्रतिरोध 25 Ω है। इसे 50 V DC आपूर्ति से जोड़ा गया है। गणना कीजिए: (a) परिपथ का समय स्थिरांक τ, (b) स्थिर अवस्था अंतिम धारा I₀, (c) स्थिर अवस्था में संचित चुंबकीय ऊर्जा, (d) स्विच बंद करने के 0.10 सेकंड बाद तात्कालिक धारा।',
        bn: 'একটি রিলে কয়েলের আবেশাঙ্ক ২.৫ H এবং রোধ ২৫ Ω। এটি ৫০ V ডিসি সরবরাহের সাথে সংযুক্ত। নির্ণয় করো: (ক) সার্কিটের সময় ধ্রুবক τ, (খ) স্থির অবস্থার কারেন্ট I₀, (গ) স্থির অবস্থায় সঞ্চিত চৌম্বক শক্তি, (ঘ) সুইচ অন করার ০.১০ সেকেন্ড পর তাৎক্ষণিক কারেন্ট।'
      },
      givenValues: {
        'L': '2.5 H',
        'R': '25 Ω',
        'V': '50 V',
        't': '0.10 s'
      },
      solution: {
        en: `Step 1: Calculate Time Constant (τ)
τ = L / R = 2.5 H / 25 Ω = 0.10 seconds.

Step 2: Calculate Steady-State Final Current (I₀)
I₀ = V / R = 50 V / 25 Ω = 2.0 Amperes.

Step 3: Calculate Stored Magnetic Energy (W)
W = ½ · L · I₀² = 0.5 × 2.5 H × (2.0 A)² = 0.5 × 2.5 × 4.0 = 5.0 Joules.

Step 4: Calculate Current at t = 0.10 s (which is t = 1τ)
Formula: i(t) = I₀ · (1 - e^(-t / τ))
Since t = 0.10 s = 1τ:
i(0.10s) = 2.0 A × (1 - e⁻¹) = 2.0 × (1 - 0.36788) = 2.0 × 0.63212 = 1.264 Amperes.`,
        hi: `चरण 1: समय स्थिरांक (τ)
τ = L / R = 2.5 / 25 = 0.10 सेकंड।

चरण 2: स्थिर अवस्था धारा (I₀)
I₀ = V / R = 50 / 25 = 2.0 एम्पीयर।

चरण 3: संचित चुंबकीय ऊर्जा (W)
W = ½ · L · I₀² = 0.5 × 2.5 × (2.0)² = 5.0 जूल।

चरण 4: t = 0.10 सेकंड (t = 1τ) पर धारा
i(t) = I₀ · (1 - e^(-1)) = 2.0 × 0.63212 = 1.264 एम्पीयर।`,
        bn: `ধাপ ১: সময় ধ্রুবক (τ) নির্ণয়
τ = L / R = ২.৫ / ২৫ = ০.১০ সেকেন্ড।

ধাপ ২: স্থির অবস্থার কারেন্ট (I₀)
I₀ = V / R = ৫০ / ২৫ = ২.০ অ্যাম্পিয়ার।

ধাপ ৩: সঞ্চিত চৌম্বক শক্তি (W)
W = ½ · L · I₀² = ০.৫ × ২.৫ × (২.০)² = ৫.০ জুল।

ধাপ ৪: t = ০.১০ সেকেন্ডে (t = ১τ) কারেন্ট
i(t) = I₀ · (১ - e⁻¹) = ২.০ × ০.৬৩২১২ = ১.২৬৪ অ্যাম্পিয়ার।`
      },
      finalAnswer: {
        en: '(a) τ = 0.10 s, (b) I₀ = 2.0 A, (c) Stored Energy W = 5.0 J, (d) i(0.10s) = 1.264 A (63.2% of I₀)',
        hi: '(a) τ = 0.10 s, (b) I₀ = 2.0 A, (c) संचित ऊर्जा W = 5.0 J, (d) i(0.10s) = 1.264 A (I₀ का 63.2%)',
        bn: '(ক) τ = ০.১০ s, (খ) I₀ = ২.০ A, (গ) সঞ্চিত শক্তি W = ৫.০ J, (ঘ) i(০.১০s) = ১.২৬৪ A (I₀ এর ৬৩.২%)'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Electromagnetic Relays & Solenoid Valves: Industrial automation relies on high-inductance coils to actuate mechanical plungers and high-power contactors.',
      'Flyback Diodes in Microcontroller & Motor Drivers: Arduino and PLC outputs use antiparallel freewheeling diodes across DC motors and relays to prevent back-EMF spikes from destroying switching MOSFETs.',
      'Fluorescent Lamp Inductive Ballasts (Chokes): Provide high starting strike voltage (~1 kV) via sudden current interruption, then limit steady-state operating lamp current smoothly.',
      'Switched-Mode Power Supply (SMPS) Energy Storage: High-frequency inductors store energy as ½LI² during the ON-cycle and release it to the load capacitor during the OFF-cycle in Buck, Boost, and Buck-Boost converters.',
      'Superconducting Magnetic Energy Storage (SMES): Zero-resistance cryogenic superconducting coils store gigajoules of electrical energy in magnetic fields to stabilize power grid fluctuations with instant sub-millisecond response.'
    ],
    hi: [
      'विद्युत-चुंबकीय रिले एवं सोलेनोइड वाल्व: औद्योगिक स्वचालन में भारी संपर्ककर्ताओं को चालू करने के लिए उच्च प्रेरकत्व कुंडलियों का उपयोग।',
      'फ्लाईबैक डायोड सुरक्षा: माइक्रोकंट्रोलर और मोटर ड्राइवर सर्किट में बैक-EMF स्पार्क से स्विचिंग ट्रांजिस्टर को बचाना।',
      'फ्लोरोसेंट लैंप चोक (Ballast): ट्यूबलाइट शुरू करने के लिए उच्च वोल्टेज स्पाइक बनाना और चालू रहने पर धारा को नियंत्रित रखना।',
      'एसएमपीएस (SMPS) में ऊर्जा भंडारण: बक एवं बूस्ट कन्वर्टर्स में ½LI² ऊर्जा संचित कर स्थिर डीसी वोल्टेज आउटपुट देना।',
      'सुपरकंडक्टिंग मैग्नेटिक एनर्जी स्टोरेज (SMES): ग्रिड में मिलीसेकंड में भारी विद्युत ऊर्जा आपूर्ति के लिए शून्य-प्रतिरोध कुंडलियों का उपयोग।'
    ],
    bn: [
      'ইলেক্ট্রোম্যাগনেটিক রিলে ও সোলেনয়েড ভালভ: ইন্ডাস্ট্রিয়াল অটোমেশনে ভারী কন্টাক্টর ও মেকানিক্যাল ভালভ নিয়ন্ত্রণে উচ্চ আবেশাঙ্কের ব্যবহার।',
      'ফ্লাইব্যাক ডায়োড সুরক্ষা: মোটর ড্রাইভার ও মাইক্রোকন্ট্রোলারে ক্ষতিকর ব্যাক-ইএমএফ স্পাইক থেকে মসফেট/ট্রানজিস্টর রক্ষা।',
      'ফ্লুরোসেন্ট ল্যাম্প চোক কয়েল: টিউবলাইটের স্টার্টিংয়ে উচ্চ ভোল্টেজ তৈরি এবং চলমান অবস্থায় কারেন্ট স্থিতিশীল রাখা।',
      'এসএমপিএস ও বাক/বুস্ট কনভার্টার: উচ্চ ফ্রিকোয়েন্সি ইন্ডাক্টরে ½LI² শক্তি সঞ্চয় করে মসৃণ ডিসি ভোল্টেজ সরবরাহ।',
      'সুপারকন্ডাক্টিং এনার্জি স্টোরেজ (SMES): পাওয়ার গ্রিডের স্থিতিশীলতা রক্ষায় অতি-দ্রুত মেগাওয়াট শক্তি সঞ্চয় ও নির্গমন।'
    ]
  },
  importantPoints: {
    en: [
      'Self-inductance L represents the electrical inertia of a circuit; it strictly opposes any change in current, NOT the current itself.',
      'The induced counter-EMF is given by e = -L (di/dt); it is zero during constant steady DC (di/dt = 0).',
      'Inductance depends exclusively on physical geometry (N, A, l) and magnetic core permeability (μ), NOT on the applied current.',
      'In a series RL circuit, the current rises to 63.2% of its maximum value in one time constant τ = L/R, and reaches steady state after approximately 5τ (99.3%).',
      'Magnetic energy is stored in the volume of the magnetic field: W = ½LI² Joules.'
    ],
    hi: [
      'स्व-प्रेरकत्व L परिपथ का विद्युत जड़त्व है; यह धारा के मान का नहीं बल्कि धारा में होने वाले परिवर्तन का विरोध करता है।',
      'विरोधी बैक-EMF e = -L (di/dt) होता है; स्थिर डीसी (di/dt = 0) में यह शून्य होता है।',
      'प्रेरकत्व केवल ज्यामितीय संरचना (N, A, l) और कोर की पारगम्यता (μ) पर निर्भर करता है, प्रवाहित धारा पर नहीं।',
      'श्रेणी RL परिपथ में धारा 1 समय स्थिरांक τ = L/R में 63.2% तक पहुंचती है और 5τ में स्थिर (99.3%) हो जाती है।',
      'चुंबकीय क्षेत्र में संचित ऊर्जा का मान W = ½LI² जूल होता है।'
    ],
    bn: [
      'স্ব-আবেশাঙ্ক L হলো বর্তনীর বৈদ্যুতিক জড়তা; এটি কারেন্টের মানের নয়, বরং কারেন্ট পরিবর্তনের তীব্র বিরোধিতা করে।',
      'ব্যাক-ইএমএফ e = -L (di/dt); স্থির ডিসি অবস্থায় (di/dt = ০) ব্যাক-ইএমএফ সম্পূর্ণ শূন্য থাকে।',
      'আবেশাঙ্ক সম্পূর্ণরূপে কয়েলের জ্যামিতিক গঠন (N, A, l) ও কোরের প্রবেশ্যতার (μ) ওপর নির্ভরশীল, কারেন্টের ওপর নয়।',
      'সিরিজ RL সার্কিটে ১ সময় ধ্রুবকে (τ = L/R) কারেন্ট ৬৩.২% বৃদ্ধি পায় এবং প্রায় ৫τ তে স্থির অবস্থায় (৯৯.৩%) পৌঁছায়।',
      'ইন্ডাক্টরের চৌম্বক ক্ষেত্রে সঞ্চিত শক্তি W = ½LI² জুল।'
    ]
  },
  commonMistakes: {
    en: [
      'Confusing Inductance (L in Henrys) with Inductive Reactance (X_L = 2πfL in Ohms): L is a fixed physical structural property, while X_L is frequency-dependent AC impedance.',
      'Assuming an inductor dissipates energy like a resistor: An ideal inductor stores energy in its magnetic field during current buildup and returns it to the circuit during current decay; its average power dissipation is ZERO.',
      'Forgetting that opening an inductive switch causes di/dt → -∞: Always anticipate severe inductive kick voltage spikes when switching off inductive loads.',
      'Thinking doubling turns doubles inductance: Since L ∝ N², doubling the number of turns quadruples (×4) the inductance!'
    ],
    hi: [
      'प्रेरकत्व (L, हेनरी) एवं प्रेरणिक प्रतिघात (X_L, ओम) में भ्रम: L एक स्थायी भौतिक गुण है जबकि X_L = 2πfL आवृत्ति पर निर्भर करता है।',
      'प्रेरक को प्रतिरोधक की तरह ऊर्जा नष्ट करने वाला मानना: आदर्श प्रेरक केवल ऊर्जा संचित करता है और औसत शक्ति क्षय शून्य होता है।',
      'स्विच खोलने पर वोल्टेज स्पाइक को नजरअंदाज करना: प्रेरक भार को बंद करते समय सदैव फ्लाईबैक डायोड सुरक्षा लगानी चाहिए।',
      'फेरों की संख्या दोगुनी करने पर L दोगुना समझना: चूंकि L ∝ N² होता है, फेरे दोगुने करने से प्रेरकत्व 4 गुना बढ़ जाता है!'
    ],
    bn: [
      'আবেশাঙ্ক (L, হেনরি) ও ইন্ডাক্টিভ রিঅ্যাকট্যান্স (X_L, ওহম) গুলিয়ে ফেলা: L একটি স্থায়ী বৈশিষ্ট্য, আর X_L = ২πfL ফ্রিকোয়েন্সির ওপর নির্ভরশীল।',
      'ইন্ডাক্টর রোধের মতো শক্তি অপচয় করে ভাবা: আদর্শ ইন্ডাক্টর চৌম্বক ক্ষেত্রে শক্তি সঞ্চয় ও ফেরত দেয়; এর গড় ক্ষমতা অপচয় শূন্য।',
      'সুইচ অফের সময় ভোল্টেজ স্পাইক ভুলে যাওয়া: ইন্ডাক্টিভ লোড বন্ধের সময় di/dt তীব্র ঋণাত্মক হওয়ায় মারাত্মক স্পার্ক সৃষ্টি হয়।',
      'প্যাঁচ সংখ্যা দ্বিগুণ করলে L দ্বিগুণ হবে ভাবা: যেহেতু L ∝ N², তাই প্যাঁচ দ্বিগুণ করলে আবেশাঙ্ক চারগুণ (৪ গুণ) বৃদ্ধি পায়!'
    ]
  },
  mcqs: [
    {
      id: 'mcq-self-1',
      question: {
        en: 'If the number of turns in an iron-cored solenoid is doubled while keeping length and area constant, its self-inductance becomes:',
        hi: 'यदि लंबाई और क्षेत्रफल स्थिर रखते हुए किसी परिनालिका के फेरों की संख्या दोगुनी कर दी जाए, तो उसका स्व-प्रेरकत्व हो जाएगा:',
        bn: 'দৈর্ঘ্য ও ক্ষেত্রফল অপরিবর্তিত রেখে একটি সোলেনয়েডের প্যাঁচ সংখ্যা দ্বিগুণ করা হলে তার স্ব-আবেশাঙ্ক হবে:'
      },
      options: [
        { id: 'opt-a', text: { en: 'Doubled (2×)', hi: 'दोगुना (2×)', bn: 'দ্বিগুণ (২×)' } },
        { id: 'opt-b', text: { en: 'Quadrupled (4×)', hi: 'चार गुना (4×)', bn: 'চারগুণ (৪×)' } },
        { id: 'opt-c', text: { en: 'Halved (½×)', hi: 'आधा (½×)', bn: 'অর্ধেক (½×)' } },
        { id: 'opt-d', text: { en: 'Unchanged (1×)', hi: 'अपरिवर्तित (1×)', bn: 'অপরিবর্তিত (১×)' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'Self-inductance of a solenoid is proportional to the square of the number of turns (L ∝ N²). Therefore, doubling N makes L = (2N)² = 4N² (4 times original value).',
        hi: 'स्व-प्रेरकत्व फेरों की संख्या के वर्ग के आनुपातिक होता है (L ∝ N²)। अतः N को दोगुना करने पर L = (2N)² = 4 गुना हो जाता है।',
        bn: 'সোলেনয়েডের আবেশাঙ্ক প্যাঁচ সংখ্যার বর্গের সমানুপাতিক (L ∝ N²)। সুতরাং N দ্বিগুণ করলে L = (২N)² = ৪ গুণ হবে।'
      }
    },
    {
      id: 'mcq-self-2',
      question: {
        en: 'In a series RL circuit connected to a DC supply, what percentage of the maximum steady-state current is reached after one time constant (t = τ)?',
        hi: 'डीसी आपूर्ति से जुड़े श्रेणी RL परिपथ में एक समय स्थिरांक (t = τ) के बाद अधिकतम स्थिर धारा का कितना प्रतिशत प्राप्त होता है?',
        bn: 'ডিসি সাপ্লাইয়ে যুক্ত একটি সিরিজ RL সার্কিটে এক সময় ধ্রুবক (t = τ) পর সর্বোচ্চ স্থির কারেন্টের কত শতাংশ পৌঁছায়?'
      },
      options: [
        { id: 'opt-a', text: { en: '50.0%', hi: '50.0%', bn: '৫০.০%' } },
        { id: 'opt-b', text: { en: '63.2%', hi: '63.2%', bn: '৬৩.২%' } },
        { id: 'opt-c', text: { en: '86.5%', hi: '86.5%', bn: '৮৬.৫%' } },
        { id: 'opt-d', text: { en: '99.3%', hi: '99.3%', bn: '৯৯.৩%' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'At t = τ, i(τ) = I₀(1 - e⁻¹) = I₀(1 - 0.3679) = 0.6321 · I₀, which equals exactly 63.2% of the maximum steady-state current.',
        hi: 't = τ पर, i(τ) = I₀(1 - e⁻¹) = 0.6321 · I₀, जो कि अधिकतम स्थिर धारा का ठीक 63.2% होता है।',
        bn: 't = τ তে, i(τ) = I₀(১ - e⁻¹) = ০.৬৩২১ · I₀, যা সর্বোচ্চ স্থির কারেন্টের ঠিক ৬৩.২%।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-self-1',
      question: {
        en: 'Explain the function of a freewheeling (flyback) diode connected across a DC relay coil and what happens if it is omitted.',
        hi: 'डीसी रिले कुंडली के समानांतर जुड़े फ्रीव्हीलिंग (फ्लाईबैक) डायोड के कार्य को समझाइए और बताइए कि यदि इसे न लगाया जाए तो क्या होगा।',
        bn: 'একটি ডিসি রিলে কয়েলের সমান্তরালে যুক্ত ফ্রি-হুইলিং (ফ্লাইব্যাক) ডায়োডের কার্যকারিতা ব্যাখ্যা করো এবং এটি না থাকলে কী ঘটবে তা বলো।'
      },
      hint: {
        en: 'Consider the inductive kick formula e = -L(di/dt) when the control switch opens rapidly.',
        hi: 'कंट्रोल स्विच तेजी से खुलने पर इंडक्टिव किक सूत्र e = -L(di/dt) पर विचार करें।',
        bn: 'কন্ট্রোল সুইচ দ্রুত বন্ধ করার সময় e = -L(di/dt) ব্যাক-ভোল্টেজ স্পাইক বিবেচনা করো।'
      },
      answerKey: {
        en: 'When the switch controlling a relay coil opens, current attempts to drop to zero instantaneously (dt → 0). This creates an enormous di/dt, inducing a destructive high-voltage back-EMF spike (often hundreds or thousands of volts, -L di/dt) with reverse polarity. A freewheeling flyback diode is placed in parallel (reverse-biased during normal operation). When the switch opens, the reverse spike forward-biases the diode, clamping the voltage safely to ~0.7V and allowing stored magnetic energy to circulate and dissipate safely across coil resistance as heat, protecting driving transistors and switch contacts from destruction.',
        hi: 'जब रिले का स्विच बंद किया जाता है तो di/dt बहुत अधिक हो जाता है जिससे सैकड़ों वोल्ट का खतरनाक बैक-EMF स्पाइक बनता है। समानांतर लगा फ्लाईबैक डायोड इस स्पाइक को फॉरवर्ड-बायस होकर सुरक्षित रूप से डिस्चार्ज कर देता है और वोल्टेज को ~0.7V पर सीमित कर स्विचिंग ट्रांजिस्टर को जलने से बचाता है।',
        bn: 'রিলে কয়েলের সুইচ হঠাৎ বন্ধ করলে di/dt তীব্র হয়ে শত শত ভোল্টের মারাত্মক ব্যাক-ইএমএফ স্পাইক তৈরি করে। সমান্তরালে যুক্ত ফ্লাইব্যাক ডায়োড এই স্পাইকের সময় ফরওয়ার্ড-বায়াসড হয়ে ভোল্টেজকে ~০.৭V এ বেঁধে রাখে এবং সঞ্চিত চৌম্বক শক্তিকে নিরাপদে কয়েলের ভেতর দিয়ে ক্ষয় হতে দেয়, ফলে ড্রাইভার ট্রানজিস্টর ও সুইচ পুড়ে যাওয়া থেকে রক্ষা পায়।'
      }
    }
  ]
};
