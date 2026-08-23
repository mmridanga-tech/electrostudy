import { Lesson } from '../types';

export const LESSON_DC_MOTOR_TYPES: Lesson = {
  id: 'lsn-ch6-dc-motor-types',
  topicId: 'ch6-dc-motor-types',
  chapterId: 'ch-electrical-machines',
  order: 9,
  title: {
    en: 'Types of DC Motors & Characteristics',
    hi: 'डीसी मोटर के प्रकार एवं उनकी विशेषताएँ',
    bn: 'ডিসি মোটরের প্রকারভেদ ও বৈশিষ্ট্যসমূহ'
  },
  description: {
    en: 'Comparative analysis of DC Shunt, Series, Cumulative Compound, and Differential Compound motors; characteristic curves (N-Ia, Ta-Ia, N-Ta), starting torque capabilities, why series motors must never be started without load, and engineering applications.',
    hi: 'डीसी शंट, सीरीज, कम्युलेटिव कंपाउंड एवं डिफरेंशियल कंपाउंड मोटरों का तुलनात्मक विश्लेषण; अभिलाक्षणिक वक्र (N-Ia, Ta-Ia, N-Ta), शुरुआती टॉर्क क्षमता, सीरीज मोटर को कभी बिना लोड चालू न करने का कारण तथा अनुप्रयोग।',
    bn: 'ডিসি শান্ট, সিরিজ, কিউমুলেটিভ কম্পাউন্ড এবং ডিফারেনশিয়াল কম্পাউন্ড মোটরের তুলনামূলক বিশ্লেষণ; বৈশিষ্ট্য রেখা (N-Ia, Ta-Ia, N-Ta), প্রারম্ভিক টর্ক ক্ষমতা, সিরিজ মোটরকে নো-লোডে না চালানোর কারণ এবং শিল্প প্রয়োগ।'
  },
  estimatedMinutes: 36,
  easyExplanation: {
    en: 'Different industrial machines require different motor torque and speed characteristics. A DC Shunt Motor maintains virtually constant speed under varying loads, making it ideal for precision factory machine tools. A DC Series Motor produces immense starting torque that scales with the square of current (T ∝ Ia²), but speeds up dangerously if disconnected from its load—making it essential for heavy cranes and electric trains. Compound Motors blend both behaviors, delivering heavy starting torque with a safe, bounded maximum speed.',
    hi: 'विभिन्न औद्योगिक मशीनों को अलग-अलग गति और टॉर्क विशेषताओं की आवश्यकता होती है। डीसी शंट मोटर लोड बदलने पर भी लगभग स्थिर गति बनाए रखती है, जिससे यह लेथ मशीन और पंपों के लिए आदर्श है। डीसी सीरीज मोटर धारा के वर्ग के समानुपाती (T ∝ Ia²) अत्यधिक शुरुआती टॉर्क उत्पन्न करती है, परंतु बिना लोड के इसकी गति खतरनाक रूप से बढ़ जाती है—अतः यह क्रेन और ट्रेनों के लिए उपयुक्त है। कंपाउंड मोटर दोनों के गुणों को मिलाकर उच्च टॉर्क और सुरक्षित अधिकतम गति प्रदान करती है।',
    bn: 'বিভিন্ন শিল্প অ্যাপ্লিকেশনে ভিন্ন ধরনের টর্ক ও গতির প্রয়োজন হয়। ডিসি শান্ট মোটর লোড পরিবর্তনের সাথেও প্রায় ধ্রুব গতি বজায় রাখে, যা লেদ মেশিন ও পাম্পের জন্য উপযোগী। ডিসি সিরিজ মোটর অত্যন্ত উচ্চ স্টার্টিং টর্ক (T ∝ Ia²) উৎপন্ন করে, কিন্তু লোডহীন অবস্থায় এর গতি বিপজ্জনকভাবে বেড়ে যায়—তাই এটি ভারী ক্রেন ও বৈদ্যুতিক ট্রেনের জন্য ব্যবহৃত হয়। কম্পাউন্ড মোটর দুটি গুণের সমন্বয় ঘটিয়ে উচ্চ টর্ক এবং নিরাপদ সর্বোচ্চ গতি প্রদান করে।'
  },
  detailedExplanation: {
    en: `1. DC Shunt Motor:
A. Circuit Topology & Governing Physics:
- Field winding (many turns of fine copper wire, high resistance R_sh) is connected in parallel directly across supply voltage V.
- Shunt Field Current: I_sh = V / R_sh (Constant for a fixed supply voltage).
- Field Flux: Φ = Constant (independent of load demand).
- Armature Current: I_a = I_L - I_sh.
- Back EMF: E_b = V - I_a · R_a.

B. Characteristic Curves of Shunt Motor:
- 1. Torque vs Armature Current (T_a vs I_a):
  Since Φ is constant, T_a = K_t · Φ · I_a ∝ I_a.
  Graph: A straight line passing through the origin.
- 2. Speed vs Armature Current (N vs I_a):
  Speed equation: N = K · (V - I_a · R_a) / Φ.
  Since Φ is constant and R_a is very small (0.1–0.5 Ω), the term I_a · R_a represents only a tiny drop (typically 3% to 5% from no-load to full-load).
  Graph: Nearly horizontal with a slight downward droop (Excellent speed regulation).
- 3. Speed vs Torque (N vs T_a):
  Directly reflects N vs I_a; speed drops slightly as load torque increases.
- Applications: Lathe spindles, centrifugal pumps, fans, blowers, milling machines, paper mills.

2. DC Series Motor:
A. Circuit Topology & Governing Physics:
- Field winding (few turns of thick copper wire, low resistance R_se) is connected in series with the armature.
- Field current equals armature current: I_se = I_a = I_L.
- Flux is directly proportional to load current before magnetic saturation: Φ ∝ I_a.

B. Characteristic Curves of Series Motor:
- 1. Torque vs Armature Current (T_a vs I_a):
  T_a = K_t · Φ · I_a = K_t · (c · I_a) · I_a ∝ I_a² (Below saturation).
  Graph: Parabolic curve up to saturation; straight line after saturation.
  Delivers tremendous starting torque (300% to 500% of rated torque).
- 2. Speed vs Armature Current (N vs I_a):
  N = K · (V - I_a · (R_a + R_se)) / Φ ≈ K · V / (c · I_a) ∝ 1 / I_a.
  Graph: Rectangular hyperbola.
- 3. Speed vs Torque (N vs T_a):
  Since T_a ∝ I_a² => I_a ∝ √T_a, substituting gives: N ∝ 1 / √T_a.

C. CRITICAL SAFETY RULE: Why a DC Series Motor Must NEVER be Started on No-Load:
- At no-load, load current I_a is nearly zero.
- Consequently, series flux Φ becomes extremely weak (only tiny residual flux exists).
- Since N ∝ E_b / Φ, when Φ -> 0, rotational speed N surges to dangerously high levels (N -> ∞).
- The extreme centrifugal forces at such runaway speed will violently fling conductors out of armature slots, destroy the commutator, shatter bearings, and tear the motor apart.
- Requirement: Series motors MUST ALWAYS be directly geared or solidly coupled to their mechanical load. Never use belt drives, as a slipping or snapped belt triggers catastrophic overspeed.
- Applications: Electric locomotives, subway traction, heavy cranes, winches, hoists, automobile starter motors.

3. DC Compound Motor:
Combines both Shunt (fine wire parallel) and Series (thick wire series) field windings on each magnetic pole.

A. Cumulative Compound Motor:
- Series field MMF aids (adds to) the shunt field MMF: Φ_total = Φ_sh + Φ_se.
- Characteristics:
  * Has high starting torque (due to series field boosting flux with heavy starting current).
  * Has a safe, bounded maximum no-load speed (due to constant shunt field maintaining baseline flux).
- Applications: Rolling mills, metal punch presses, shears, elevators, reciprocating compressors.

B. Differential Compound Motor:
- Series field MMF opposes (subtracts from) the shunt field MMF: Φ_total = Φ_sh - Φ_se.
- Characteristics:
  * As load increases, series flux weakens total net flux (Φ drops).
  * Dropping flux causes motor speed N to rise under load.
  * Under heavy overloading, total flux may reverse or drop to near zero, causing unstable speed runaway and excessive current tripping.
- Applications: Extremely rare; specialized laboratory test benches or experimental constant-speed drives.

4. Speed Regulation Comparison:
Speed Regulation (%) = [ (N_NL - N_FL) / N_FL ] × 100%
- DC Shunt: ~3% to 5% (Very Good / Constant Speed)
- Cumulative Compound: ~10% to 25% (Drooping / Stable)
- DC Series: Highly variable (Cannot define no-load speed safely).`,
    hi: `1. डीसी शंट मोटर:
- संरचना: फील्ड वाइंडिंग आर्मेचर के समानांतर में जुड़ी होती है (Ish = V / Rsh = स्थिर)।
- फ्लक्स: Φ स्थिर रहता है।
- विशेषताएँ:
  * टॉर्क बनाम धारा (Ta vs Ia): सीधी रेखा (Ta ∝ Ia)।
  * गति बनाम धारा (N vs Ia): गति लगभग स्थिर रहती है (केवल 3-5% ड्रॉप)।
  * इसे "स्थिर गति मोटर" (Constant Speed Motor) कहा जाता है।
- अनुप्रयोग: लेथ मशीन, खराद, पंखे, ब्लोअर, सेंट्रीफ्यूगल पंप, मिलिंग मशीन।

2. डीसी सीरीज मोटर:
- संरचना: फील्ड वाइंडिंग आर्मेचर के श्रेणी (Series) में जुड़ी होती है (Ise = Ia = IL)।
- फ्लक्स: संतृप्ति से पहले धारा के समानुपाती होता है (Φ ∝ Ia)।
- विशेषताएँ:
  * टॉर्क बनाम धारा (Ta vs Ia): संतृप्ति से पहले परवलयिक वक्र (Ta ∝ Ia²), अत्यधिक शुरुआती टॉर्क!
  * गति बनाम धारा (N vs Ia): अतिपरवलय (Hyperbola), N ∝ 1/Ia।
- महत्वपूर्ण सुरक्षा चेतावनी: सीरीज मोटर को कभी बिना लोड चालू नहीं करना चाहिए!
  बिना लोड पर Ia बहुत कम होने से फ्लक्स Φ शून्य के करीब हो जाता है, जिससे गति N = Eb/Φ खतरनाक रूप से बढ़कर मोटर को तोड़ सकती है।
- अनुप्रयोग: इलेक्ट्रिक ट्रेन (ट्रैक्शन), क्रेन, होइस्ट, लिफ्ट, कार स्टार्टर मोटर।

3. डीसी कंपाउंड मोटर:
- A. कम्युलेटिव कंपाउंड मोटर: सीरीज फील्ड फ्लक्स शंट फील्ड फ्लक्स की सहायता करता है (Φ = Φsh + Φse)।
  * उच्च शुरुआती टॉर्क मिलता है तथा बिना लोड पर भी गति सुरक्षित सीमा में रहती है।
  * अनुप्रयोग: रोलिंग मिल, पंचिंग प्रेस, मेटल शीयर, भारी लिफ्ट।
- B. डिफरेंशियल कंपाउंड मोटर: सीरीज फील्ड फ्लक्स शंट फ्लक्स का विरोध करता है (Φ = Φsh - Φse)।
  * लोड बढ़ने पर गति बढ़ती है जो अस्थिरता पैदा करती है; इसका उपयोग बहुत दुर्लभ है।`,
    bn: `১. ডিসি শান্ট মোটর:
- গঠন: ফিল্ড ওয়াইন্ডিং আর্মেচারের সমান্তরালে সংযুক্ত থাকে (Ish = V / Rsh = ধ্রুবক)।
- ফ্লাক্স: ফ্লাক্স Φ প্রায় স্থির থাকে।
- বৈশিষ্ট্য:
  * টর্ক বনাম কারেন্ট (Ta ∝ Ia): মূলবিন্দুগামী সরলরেখা।
  * গতি বনাম কারেন্ট: প্রায় অনুভূমিক রেখা (লোড বৃদ্ধিতে গতি মাত্র ৩-৫% হ্রাস পায়)।
  * পরিচিতি: "কনস্ট্যান্ট স্পিড মোটর"।
- প্রয়োগ: লেদ মেশিন, মিলিং মেশিন, সেন্ট্রিফিউগাল পাম্প ও ব্লোয়ার।

২. ডিসি সিরিজ মোটর:
- গঠন: ফিল্ড ওয়াইন্ডিং আর্মেচারের সাথে সিরিজে যুক্ত থাকে (Ise = Ia = IL)।
- ফ্লাক্স: স্যাচুরেশনের পূর্বে ফ্লাক্স কারেন্টের সমানুপাতিক (Φ ∝ Ia)।
- বৈশিষ্ট্য:
  * টর্ক বনাম কারেন্ট: প্যারাবোলিক বা পরাবৃত্তাকার (Ta ∝ Ia²), অত্যন্ত উচ্চ প্রারম্ভিক টর্ক!
  * গতি বনাম কারেন্ট: আয়তাকার হাইপারবোলা (N ∝ 1/Ia)।
- জরুরি নিরাপত্তা নিয়ম: নো-লোডে সিরিজ মোটর কখনই চালু করা যাবে না!
  নো-লোডে কারেন্ট Ia অত্যন্ত কম হওয়ায় ফ্লাক্স Φ প্রায় শূন্য হয়ে যায়, ফলে গতি N ∝ 1/Φ বিপজ্জনকভাবে অসীমের দিকে ধাবিত হয়ে মোটর ভেঙে ফেলতে পারে।
- প্রয়োগ: বৈদ্যুতিক ট্রেন (ট্র্যাকশন), ক্রেন, হোস্ট, এলিভেটর ও অটোমোবাইল স্টার্টার।

৩. ডিসি কম্পাউন্ড মোটর:
- ক. কিউমুলেটিভ কম্পাউন্ড মোটর: সিরিজ ফিল্ড ফ্লাক্স শান্ট ফ্লাক্সের সাথে যোগ হয় (Φ = Φsh + Φse)।
  * উচ্চ স্টার্টিং টর্ক প্রদান করে এবং নো-লোডেও নিরাপদ শীর্ষ গতি বজায় রাখে।
  * প্রয়োগ: রোলিং মিল, মেটাল পাঞ্চ প্রেস ও ভারী এলিভেটর।
- খ. ডিফারেনশিয়াল কম্পাউন্ড মোটর: সিরিজ ফিল্ড ফ্লাক্স শান্ট ফ্লাক্সের বিরোধিতা করে (Φ = Φsh - Φse)।
  * লোড বৃদ্ধিতে গতি বেড়ে যায় যা অস্থিতিশীল; ব্যবহার অত্যন্ত সীমিত।`
  },
  formulas: [
    {
      id: 'f-shunt-torque-prop',
      symbol: 'T_a(shunt)',
      expression: 'T_a ∝ I_a',
      formula: 'T_{a(\\text{shunt})} = K_t \\cdot \\Phi_{sh} \\cdot I_a \\propto I_a',
      title: {
        en: 'Shunt Motor Torque Proportionality',
        hi: 'शंट मोटर टॉर्क समानुपात',
        bn: 'শান্ট মোটর টর্ক সমানুপাত'
      },
      description: {
        en: 'In a shunt motor with constant field flux, developed torque scales linearly with armature current.',
        hi: 'स्थिर फील्ड फ्लक्स वाली शंट मोटर में विकसित टॉर्क आर्मेचर धारा के सीधे रेखीय समानुपाती होता है।',
        bn: 'ধ্রুব ফ্লাক্সযুক্ত শান্ট মোটরে উৎপন্ন টর্ক আর্মেচার কারেন্টের সাথে সরলরেখায় বৃদ্ধি পায়।'
      }
    },
    {
      id: 'f-series-torque-prop',
      symbol: 'T_a(series)',
      expression: 'T_a ∝ I_a²  (before saturation)',
      formula: 'T_{a(\\text{series})} = K_t \\cdot c \\cdot I_a^2 \\propto I_a^2',
      title: {
        en: 'Series Motor Torque Proportionality',
        hi: 'सीरीज मोटर टॉर्क समानुपात',
        bn: 'সিরিজ মোটর টর্ক সমানুপাত'
      },
      description: {
        en: 'In an unsaturated series motor where flux scales with current (Φ ∝ Ia), torque is proportional to the square of armature current.',
        hi: 'संतृप्ति से पूर्व सीरीज मोटर में फ्लक्स धारा के समानुपाती होने के कारण टॉर्क आर्मेचर धारा के वर्ग के समानुपाती होता है।',
        bn: 'স্যাচুরেশনের পূর্বে ফ্লাক্স কারেন্টের সমানুপাতিক হওয়ায় সিরিজ মোটরের টর্ক কারেন্টের বর্গের সমানুপাতিক হয়।'
      }
    },
    {
      id: 'f-series-speed-prop',
      symbol: 'N(series)',
      expression: 'N ∝ 1 / I_a  (before saturation)',
      formula: 'N_{\\text{series}} \\approx \\frac{K \\cdot V}{c \\cdot I_a} \\propto \\frac{1}{I_a}',
      title: {
        en: 'Series Motor Speed Hyperbola',
        hi: 'सीरीज मोटर गति अतिपरवलय',
        bn: 'সিরিজ মোটর গতি হাইপারবোলা'
      },
      description: {
        en: 'Speed varies inversely with load current, accelerating toward dangerous speeds at zero load current.',
        hi: 'गति लोड धारा के व्युत्क्रमानुपाती होती है, जो शून्य लोड पर अत्यधिक खतरनाक गति तक पहुँच जाती है।',
        bn: 'গতি লোড কারেন্টের ব্যস্তানুপাতিক হওয়ায় শূন্য লোডে বিপজ্জনক মাত্রায় বৃদ্ধি পায়।'
      }
    },
    {
      id: 'f-speed-regulation-formula',
      symbol: '%Reg',
      expression: '% Speed Regulation = [ (N_NL - N_FL) / N_FL ] × 100%',
      formula: '\\%\\text{Speed Reg} = \\frac{N_{NL} - N_{FL}}{N_{FL}} \\times 100\\%',
      title: {
        en: 'Speed Regulation Percentage',
        hi: 'गति विनियमन प्रतिशत',
        bn: 'গতি নিয়ন্ত্রণ শতাংশ'
      },
      description: {
        en: 'Metric of speed drop between no-load and full-load operating points.',
        hi: 'नो-लोड और फुल-लोड परिचालन बिंदुओं के बीच गति में परिवर्तन का प्रतिशत माप।',
        bn: 'নো-লোড ও ফুল-লোডের মধ্যে গতি পরিবর্তনের শতকরা হার।'
      },
      variables: [
        { symbol: 'N_NL', name: { en: 'No-load speed (RPM)', hi: 'नो-लोड गति (RPM)', bn: 'নো-লোড গতি (RPM)' } },
        { symbol: 'N_FL', name: { en: 'Full-load speed (RPM)', hi: 'फुल-लोड गति (RPM)', bn: 'ফুল-লোড গতি (RPM)' } }
      ]
    },
    {
      id: 'f-cumulative-flux',
      symbol: 'Φ_total(cum)',
      expression: 'Φ_total = Φ_sh + Φ_se',
      formula: '\\Phi_{\\text{total}} = \\Phi_{sh} + \\Phi_{se}',
      title: {
        en: 'Cumulative Compound Total Flux',
        hi: 'कम्युलेटिव कंपाउंड कुल फ्लक्स',
        bn: 'কিউমুলেটিভ কম্পাউন্ড মোট ফ্লাক্স'
      },
      description: {
        en: 'Net magnetic pole flux produced by additive MMF of shunt and series field coils.',
        hi: 'शंट एवं सीरीज फील्ड कॉइल के जुड़ने वाले MMF द्वारा उत्पन्न कुल पोल फ्लक्स।',
        bn: 'শান্ট ও সিরিজ কয়েলের সমষ্টিগত MMF দ্বারা সৃষ্ট মোট চৌম্বক ফ্লাক্স।'
      }
    },
    {
      id: 'f-differential-flux',
      symbol: 'Φ_total(diff)',
      expression: 'Φ_total = Φ_sh - Φ_se',
      formula: '\\Phi_{\\text{total}} = \\Phi_{sh} - \\Phi_{se}',
      title: {
        en: 'Differential Compound Total Flux',
        hi: 'डिफरेंशियल कंपाउंड कुल फ्लक्स',
        bn: 'ডিফারেনশিয়াল কম্পাউন্ড মোট ফ্লাক্স'
      },
      description: {
        en: 'Net flux where series field opposes the shunt field, leading to speed instability under heavy loads.',
        hi: 'कुल फ्लक्स जिसमें सीरीज फील्ड शंट फील्ड का विरोध करती है, जिससे भारी लोड पर गति अस्थिर हो जाती है।',
        bn: 'মোট ফ্লাক্স যেখানে সিরিজ ফিল্ড শান্ট ফিল্ডকে বাধা দেয়, যা ভারী লোডে গতিকে অস্থিতিশীল করে।'
      }
    }
  ],
  sections: [
    {
      id: 'sec-motor-types',
      title: {
        en: 'DC Motor Topologies & Speed-Torque Comparative Characteristics',
        hi: 'डीसी मोटर टोपोलॉजी एवं गति-टॉर्क तुलनात्मक विशेषताएँ',
        bn: 'ডিসি মোটরের গঠন কাঠামো ও স্পিড-টর্ক তুলনামূলক বৈশিষ্ট্য'
      },
      content: {
        en: 'DC motors are classified into Shunt, Series, and Compound configurations based on field and armature winding interconnections. A DC Shunt Motor offers steady speed regulation (N vs T curve is nearly flat), making it the standard choice for machine tools. A DC Series Motor features a drooping hyperbolic speed curve but tremendous starting torque (T ∝ Ia²), ideal for electric locomotives and cranes. Cumulative Compound Motors bridge both worlds by providing high starting torque with a bounded no-load speed ceiling.',
        hi: 'फील्ड और आर्मेचर वाइंडिंग के संयोजन के आधार पर डीसी मोटरों को शंट, सीरीज और कंपाउंड में वर्गीकृत किया जाता है। डीसी शंट मोटर लगभग स्थिर गति प्रदान करती है (N-T वक्र सपाट होता है), जो मशीन टूल्स के लिए उपयुक्त है। डीसी सीरीज मोटर का गति वक्र गिरता हुआ अतिपरवलय होता है किंतु शुरुआती टॉर्क अत्यधिक (T ∝ Ia²) होता है, जो ट्रेनों और क्रेन के लिए आदर्श है। कम्युलेटिव कंपाउंड मोटर उच्च टॉर्क और सुरक्षित नो-लोड गति दोनों प्रदान करती है।',
        bn: 'ফিল্ড ও আর্মেচার ওয়াইন্ডিংয়ের সংযোগ বিন্যাসের ওপর ভিত্তি করে ডিসি মোটরকে শান্ট, সিরিজ এবং কম্পাউন্ডে ভাগ করা হয়। শান্ট মোটর প্রায় ধ্রুব গতি বজায় রাখে যা মেশিন টুলে ব্যবহারের উপযোগী। সিরিজ মোটরের গতি লোড বৃদ্ধির সাথে হ্রাস পেলেও এর প্রারম্ভিক টর্ক (T ∝ Ia²) অত্যন্ত বেশি হওয়ায় ট্রেন ও ক্রেনে ব্যবহৃত হয়। কিউমুলেটিভ কম্পাউন্ড মোটর উভয় সুবিধার সমন্বয় ঘটায়।'
      },
      schematicId: 'dc-motor-types'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-motor-types-1',
      problem: {
        en: 'A 220 V DC series motor runs at 800 RPM while drawing a current of 25 A. The total motor resistance (Ra + Rse) is 0.6 Ω. If the load torque is halved, calculate the new motor speed and new current drawn, assuming the magnetic circuit is operating in its unsaturated linear region (Φ ∝ Ia).',
        hi: 'एक 220 V डीसी सीरीज मोटर 25 A धारा लेते हुए 800 RPM पर चलती है। कुल मोटर प्रतिरोध (Ra + Rse) 0.6 Ω है। यदि लोड टॉर्क आधा कर दिया जाए, तो नई गति एवं नई धारा ज्ञात कीजिए (मान लें कि चुंबकीय परिपथ असंतृप्त रेखीय क्षेत्र में कार्य कर रहा है, Φ ∝ Ia)।',
        bn: 'একটি ২২০ V ডিসি সিরিজ মোটর ২৫ A কারেন্টে ৮০০ RPM গতিতে চলে। মোট রোধ (Ra + Rse) ০.৬ Ω। লোড টর্ক অর্ধেক করা হলে নতুন গতি ও নতুন কারেন্ট নির্ণয় করুন (অসম্পৃক্ত চৌম্বক ফ্লাক্স Φ ∝ Ia ধরে)।'
      },
      solution: {
        en: `Step 1: Calculate Initial Back EMF (E_b1):
Given: V = 220 V, I_a1 = 25 A, R_total = 0.6 Ω, N_1 = 800 RPM
E_b1 = V - I_a1 · R_total = 220 - (25 × 0.6) = 220 - 15 = 205.0 V

Step 2: Relate New Current to Torque Reduction:
For series motor in unsaturated region: T_a ∝ I_a²
T_a2 / T_a1 = (I_a2 / I_a1)² = 0.50
I_a2 / I_a1 = √0.50 = 0.7071
I_a2 = 25 A × 0.7071 = 17.678 A

Step 3: Calculate New Back EMF (E_b2):
E_b2 = V - I_a2 · R_total = 220 - (17.678 × 0.6) = 220 - 10.607 = 209.39 V

Step 4: Relate Speed to Back EMF and Flux:
Since N ∝ E_b / Φ and Φ ∝ I_a:
N_2 / N_1 = (E_b2 / E_b1) × (I_a1 / I_a2)
N_2 = 800 × (209.39 / 205.0) × (25 / 17.678) = 800 × 1.0214 × 1.4142 = 1155.6 RPM`,
        hi: `चरण 1: प्रारंभिक Back EMF: E_b1 = 220 - (25 × 0.6) = 205.0 V
चरण 2: नई धारा: I_a2 = 25 × √0.5 = 17.68 A
चरण 3: नया Back EMF: E_b2 = 220 - (17.68 × 0.6) = 209.39 V
चरण 4: नई गति: N_2 = 800 × (209.39 / 205.0) × (25 / 17.68) = 1155.6 RPM`,
        bn: `ধাপ ১: প্রাথমিক Back EMF: E_b1 = ২২০ - (২৫ × ০.৬) = ২০৫.০ V
ধাপ ২: নতুন কারেন্ট: I_a2 = ২৫ × √০.৫ = ১৭.৬৮ A
ধাপ ৩: নতুন Back EMF: E_b2 = ২২০ - (১৭.৬৮ × ০.৬) = ২০৯.৩৯ V
ধাপ ৪: নতুন গতি: N_2 = ৮০০ × (২০৯.৩৯ / ২০৫.০) × (২৫ / ১৭.৬৮) = ১১৫৫.৬ RPM`
      },
      finalAnswer: {
        en: 'New Current I_a2 = 17.68 A, New Speed N_2 = 1155.6 RPM',
        hi: 'नई धारा I_a2 = 17.68 A, नई गति N_2 = 1155.6 RPM',
        bn: 'নতুন কারেন্ট I_a2 = ১৭.৬৮ A, নতুন গতি N_2 = ১১৫৫.৬ RPM'
      }
    },
    {
      id: 'ex-motor-types-2',
      problem: {
        en: 'A 240 V DC shunt motor runs at 1050 RPM on no-load taking a current of 4.0 A. At rated full load, it takes 44.0 A. The armature resistance is 0.3 Ω and shunt field resistance is 120 Ω. Calculate: (a) No-load Back EMF, (b) Full-load Back EMF, (c) Full-load speed, and (d) Percentage speed regulation.',
        hi: 'एक 240 V डीसी शंट मोटर नो-लोड पर 4.0 A धारा लेते हुए 1050 RPM पर चलती है। फुल लोड पर यह 44.0 A धारा लेती है। आर्मेचर प्रतिरोध 0.3 Ω तथा शंट फील्ड प्रतिरोध 120 Ω है। गणना कीजिए: (a) नो-लोड बैक EMF, (b) फुल-लोड बैक EMF, (c) फुल-लोड गति, तथा (d) प्रतिशत गति विनियमन।',
        bn: 'একটি ২৪০ V ডিসি শান্ট মোটর নো-লোডে ৪.০ A কারেন্টে ১০৫০ RPM গতিতে চলে। ফুল লোডে এটি ৪৪.০ A কারেন্ট টানে। আর্মেচার রোধ ০.৩ Ω ও শান্ট ফিল্ড রোধ ১২০ Ω হলে নির্ণয় করুন: (a) নো-লোড ব্যাক EMF, (b) ফুল-লোড ব্যাক EMF, (c) ফুল-লোড গতি এবং (d) শতকরা স্পিড রেগুলেশন।'
      },
      solution: {
        en: `Step 1: Calculate Shunt Field Current (I_sh):
I_sh = V / R_sh = 240 / 120 = 2.0 A

Step 2: No-Load Conditions:
Total current I_NL = 4.0 A => Armature current I_a(NL) = I_NL - I_sh = 4.0 - 2.0 = 2.0 A
E_b(NL) = V - I_a(NL) · R_a = 240 - (2.0 × 0.3) = 240 - 0.6 = 239.4 V
N_NL = 1050 RPM

Step 3: Full-Load Conditions:
Total current I_FL = 44.0 A => Armature current I_a(FL) = I_FL - I_sh = 44.0 - 2.0 = 42.0 A
E_b(FL) = V - I_a(FL) · R_a = 240 - (42.0 × 0.3) = 240 - 12.6 = 227.4 V

Step 4: Calculate Full-Load Speed (N_FL):
Since field flux is constant:
N_FL = N_NL · (E_b(FL) / E_b(NL)) = 1050 × (227.4 / 239.4) = 997.37 RPM

Step 5: Calculate Percentage Speed Regulation:
% Speed Reg = [ (N_NL - N_FL) / N_FL ] × 100%
% Speed Reg = [ (1050 - 997.37) / 997.37 ] × 100% = (52.63 / 997.37) × 100% = 5.28%`,
        hi: `चरण 1: फील्ड धारा: I_sh = 240 / 120 = 2.0 A
चरण 2: नो-लोड: I_a(NL) = 2.0 A => E_b(NL) = 240 - 0.6 = 239.4 V
चरण 3: फुल-लोड: I_a(FL) = 42.0 A => E_b(FL) = 240 - 12.6 = 227.4 V
चरण 4: फुल-लोड गति: N_FL = 1050 × (227.4 / 239.4) = 997.37 RPM
चरण 5: गति विनियमन: %Reg = (52.63 / 997.37) × 100% = 5.28%`,
        bn: `ধাপ ১: ফিল্ড কারেন্ট: I_sh = ২৪০ / ১২০ = ২.০ A
ধাপ ২: নো-লোড: I_a(NL) = ২.০ A => E_b(NL) = ২৪০ - ০.৬ = ২৩৯.৪ V
ধাপ ৩: ফুল-লোড: I_a(FL) = ৪২.০ A => E_b(FL) = ২৪০ - ১২.৬ = ২২৭.৪ V
ধাপ ৪: ফুল-লোড গতি: N_FL = ১০৫০ × (২২৭.৪ / ২৩৯.৪) = ৯৯৭.৩৭ RPM
ধাপ ৫: স্পিড রেগুলেশন: %Reg = (৫২.৬৩ / ৯৯৭.৩৭) × ১০০% = ৫.২৮%`
      },
      finalAnswer: {
        en: 'E_b(NL) = 239.4 V, E_b(FL) = 227.4 V, N_FL = 997.37 RPM, Speed Regulation = 5.28%',
        hi: 'E_b(NL) = 239.4 V, E_b(FL) = 227.4 V, N_FL = 997.37 RPM, गति विनियमन = 5.28%',
        bn: 'E_b(NL) = ২৩৯.৪ V, E_b(FL) = ২২৭.৪ V, N_FL = ৯৯৭.৩৭ RPM, স্পিড রেগুলেশন = ৫.২৮%'
      }
    },
    {
      id: 'ex-motor-types-3',
      problem: {
        en: 'A 230 V cumulative compound DC motor runs at 1200 RPM when taking an armature current of 30 A. The shunt field produces a flux of 0.02 Wb per pole, while the series field adds 0.005 Wb per pole at this current. Total resistance (Ra + Rse) = 0.5 Ω. If the load is increased such that armature current rises to 50 A (increasing series field flux proportionally to 0.00833 Wb), find the new operating speed.',
        hi: 'एक 230 V कम्युलेटिव कंपाउंड डीसी मोटर 30 A आर्मेचर धारा पर 1200 RPM पर चलती है। शंट फील्ड 0.02 Wb फ्लक्स तथा सीरीज फील्ड 0.005 Wb फ्लक्स उत्पन्न करता है। कुल प्रतिरोध (Ra + Rse) = 0.5 Ω है। यदि लोड बढ़ने पर धारा 50 A हो जाए (सीरीज फ्लक्स 0.00833 Wb हो जाए), तो नई गति ज्ञात कीजिए।',
        bn: 'একটি ২৩০ V কিউমুলেটিভ কম্পাউন্ড মোটর ৩০ A কারেন্টে ১২০০ RPM গতিতে চলে। শান্ট ফিল্ড ফ্লাক্স ০.০২ Wb এবং সিরিজ ফিল্ড ফ্লাক্স ০.০০৫ Wb। মোট রোধ (Ra + Rse) = ০.৫ Ω। কারেন্ট বেড়ে ৫০ A হলে (সিরিজ ফ্লাক্স ০.০০৮৩৩ Wb) নতুন গতি নির্ণয় করুন।'
      },
      solution: {
        en: `Step 1: Initial Operating Condition:
V = 230 V, I_a1 = 30 A, N_1 = 1200 RPM, R_total = 0.5 Ω
Total initial flux Φ_1 = Φ_sh + Φ_se1 = 0.02 + 0.005 = 0.025 Wb
Initial Back EMF: E_b1 = V - I_a1 · R_total = 230 - (30 × 0.5) = 230 - 15 = 215.0 V

Step 2: New Operating Condition:
I_a2 = 50 A
Total new flux Φ_2 = Φ_sh + Φ_se2 = 0.02 + 0.00833 = 0.02833 Wb
New Back EMF: E_b2 = V - I_a2 · R_total = 230 - (50 × 0.5) = 230 - 25 = 205.0 V

Step 3: Calculate New Speed (N_2):
N_2 / N_1 = (E_b2 / E_b1) × (Φ_1 / Φ_2)
N_2 = 1200 × (205.0 / 215.0) × (0.025 / 0.02833) = 1200 × 0.95349 × 0.88246 = 1009.6 RPM`,
        hi: `चरण 1: प्रारंभिक फ्लक्स Φ_1 = 0.02 + 0.005 = 0.025 Wb, E_b1 = 230 - 15 = 215.0 V
चरण 2: नया फ्लक्स Φ_2 = 0.02 + 0.00833 = 0.02833 Wb, E_b2 = 230 - 25 = 205.0 V
चरण 3: नई गति: N_2 = 1200 × (205 / 215) × (0.025 / 0.02833) = 1009.6 RPM`,
        bn: `ধাপ ১: প্রাথমিক ফ্লাক্স Φ_1 = ০.০২৫ Wb, E_b1 = ২১৫.০ V
ধাপ ২: নতুন ফ্লাক্স Φ_2 = ০.০২৮৩৩ Wb, E_b2 = ২০৫.০ V
ধাপ ৩: নতুন গতি: N_2 = ১২০০ × (২০৫ / ২১৫) × (০.০২৫ / ০.০২৮৩৩) = ১০০৯.৬ RPM`
      },
      finalAnswer: {
        en: 'Initial Flux Φ_1 = 0.025 Wb, New Flux Φ_2 = 0.02833 Wb, New Speed N_2 = 1009.6 RPM',
        hi: 'प्रारंभिक फ्लक्स Φ_1 = 0.025 Wb, नया फ्लक्स Φ_2 = 0.02833 Wb, नई गति N_2 = 1009.6 RPM',
        bn: 'প্রাথমিক ফ্লাক্স Φ_1 = ০.০২৫ Wb, নতুন ফ্লাক্স Φ_2 = ০.০২৮৩৩ Wb, নতুন গতি N_2 = ১০০৯.৬ RPM'
      }
    },
    {
      id: 'ex-motor-types-4',
      problem: {
        en: 'Explain why a belt-driven mechanical coupling is strictly prohibited for a DC series motor, and show mathematically what happens to the rotational speed if the belt snaps during operation.',
        hi: 'स्पष्ट कीजिए कि डीसी सीरीज मोटर के लिए बेल्ट ड्राइव का उपयोग सख्त वर्जित क्यों है, और गणितीय रूप से दर्शाइए कि यदि चलते समय बेल्ट टूट जाए तो घूर्णन गति पर क्या प्रभाव पड़ेगा।',
        bn: 'ব্যাখ্যা করুন কেন ডিসি সিরিজ মোটরে বেল্ট ড্রাইভ ব্যবহার সম্পূর্ণ নিষিদ্ধ, এবং গাণিতিকভাবে দেখান যে অপারেশনের সময় বেল্ট ছিঁড়ে গেলে মোটরের গতিতে কী ঘটবে।'
      },
      solution: {
        en: `Step 1: Understand the Series Motor Speed Equation:
Speed equation: N = K · (V - I_a · R_total) / Φ
In a series motor, field coils are in series with armature, so field flux Φ is generated solely by load current: Φ = c · I_a.
Thus, N ≈ (K · V) / (c · I_a)

Step 2: Physical Consequence of a Snapped Belt:
When a belt snaps, the mechanical load is instantly decoupled:
- Mechanical load torque drops to zero (T_load = 0).
- Armature current I_a plunges to a tiny no-load value (I_a -> 0).
- Consequently, magnetic flux Φ plunges toward zero (Φ -> Φ_residual ≈ 0).

Step 3: Mathematical Limit:
As I_a -> 0 and Φ -> 0:
lim(Φ -> 0) [ N = E_b / Φ ] -> ∞ (Overspeed Runaway!)

Step 4: Mechanical Disaster:
The extreme centrifugal force (F_c = m · ω² · r) at runaway speed shears armature windings, shatters commutator segments, and causes catastrophic destruction. Hence, series motors MUST ALWAYS use positive direct gearing or solid flange couplings.`,
        hi: `चरण 1: गति समीकरण: N = K · (V - Ia·R) / Φ ≈ K·V / (c·Ia)
चरण 2: बेल्ट टूटने पर लोड शून्य हो जाता है (Ia → 0)।
चरण 3: फ्लक्स Φ → 0 होने से गति N = Eb / Φ अनंत (∞) की ओर भागती है।
चरण 4: अत्यधिक सेंट्रीफ्यूगल बल (m·ω²·r) रोटर वाइंडिंग और कम्यूटेटर को तोड़कर नष्ट कर देता है। अतः केवल डायरेक्ट गियरिंग अनिवार्य है।`,
        bn: `ধাপ ১: গতি সমীকরণ: N ≈ K·V / (c·Ia)
ধাপ ২: বেল্ট ছিঁড়ে গেলে লোড শূন্য হয়ে যায় (Ia → 0)।
ধাপ ৩: ফলে ফ্লাক্স Φ → 0 হওয়ায় গতি N = Eb / Φ অসীমের দিকে ধাবিত হয়।
ধাপ ৪: তীব্র সেন্ট্রিফিউগাল বল মোটরের রোটর ওয়াইন্डिंग ও কমিউটেটর উড়িয়ে ধ্বংস করে দেয়। তাই কেবল সরাসরি গিয়ার সংযোগ বাধ্যতামূলক।`
      },
      finalAnswer: {
        en: 'At no-load Φ -> 0, driving N -> ∞. Severe centrifugal force destroys the rotor; direct gearing is mandatory.',
        hi: 'नो-लोड पर Φ → 0 जिससे N → ∞। अत्यधिक सेंट्रीफ्यूगल बल रोटर को नष्ट कर देगा; डायरेक्ट गियरिंग अनिवार्य है।',
        bn: 'নো-লোডে Φ → 0 হওয়ায় N → ∞। তীব্র সেন্ট্রিফিউগাল বল রোটর ধ্বংস করে; ডিরেক্ট গিয়ার সংযোগ বাধ্যতামূলক।'
      }
    },
    {
      id: 'ex-motor-types-5',
      problem: {
        en: 'A 200 V DC shunt motor has an armature resistance of 0.25 Ω and runs at 1000 RPM while drawing 20 A. What additional resistance must be placed in series with the armature to reduce the speed to 750 RPM if the load torque remains constant?',
        hi: 'एक 200 V डीसी शंट मोटर का आर्मेचर प्रतिरोध 0.25 Ω है और यह 20 A लेते हुए 1000 RPM पर चलती है। यदि लोड टॉर्क स्थिर रहे, तो गति को 750 RPM तक घटाने के लिए आर्मेचर के श्रेणी में कितना अतिरिक्त प्रतिरोध जोड़ना होगा?',
        bn: 'একটি ২০০ V ডিসি শান্ট মোটরের আর্মেচার রোধ ০.২৫ Ω এবং ২০ A কারেন্টে ১০০০ RPM গতিতে চলে। লোড টর্ক স্থির রেখে গতি ৭৫০ RPM এ নামাতে আর্মেচারের সিরিজে কত অতিরিক্ত রোধ যোগ করতে হবে?'
      },
      solution: {
        en: `Step 1: Initial Condition:
V = 200 V, I_a1 = 20 A, R_a = 0.25 Ω, N_1 = 1000 RPM
E_b1 = V - I_a1 · R_a = 200 - (20 × 0.25) = 200 - 5.0 = 195.0 V

Step 2: Condition for Constant Torque:
Since Torque T ∝ Φ · I_a and field flux Φ is constant:
I_a2 = I_a1 = 20 A

Step 3: Calculate Required Back EMF (E_b2) for N_2 = 750 RPM:
Since N ∝ E_b (constant flux):
E_b2 / E_b1 = N_2 / N_1
E_b2 = E_b1 · (N_2 / N_1) = 195.0 × (750 / 1000) = 146.25 V

Step 4: Calculate Total Required Armature Circuit Resistance (R_total):
E_b2 = V - I_a2 · R_total
146.25 = 200 - 20 · R_total
20 · R_total = 200 - 146.25 = 53.75
R_total = 53.75 / 20 = 2.6875 Ω

Step 5: Calculate External Added Series Resistance (R_ext):
R_total = R_a + R_ext
R_ext = R_total - R_a = 2.6875 Ω - 0.25 Ω = 2.4375 Ω`,
        hi: `चरण 1: प्रारंभिक E_b1 = 200 - (20 × 0.25) = 195.0 V
चरण 2: स्थिर टॉर्क हेतु नई धारा I_a2 = 20 A
चरण 3: नया बैक EMF (750 RPM हेतु): E_b2 = 195 × (750 / 1000) = 146.25 V
चरण 4: कुल आवश्यक प्रतिरोध: R_total = (200 - 146.25) / 20 = 2.6875 Ω
चरण 5: अतिरिक्त श्रेणी प्रतिरोध: R_ext = 2.6875 - 0.25 = 2.4375 Ω`,
        bn: `ধাপ ১: প্রাথমিক E_b1 = ২০০ - (২০ × ০.২৫) = ১৯৫.০ V
ধাপ ২: ধ্রুব টর্কের জন্য I_a2 = ২০ A
ধাপ ৩: নতুন ব্যাক EMF: E_b2 = ১৯৫ × (৭৫০ / ১০০০) = ১৪৬.২৫ V
ধাপ ৪: মোট রোধ: R_total = (২০০ - ১৪৬.২৫) / ২০ = ২.৬৮৭৫ Ω
ধাপ ৫: অতিরিক্ত সিরিজ রোধ: R_ext = ২.৬৮৭৫ - ০.২৫ = ২.৪৩৭৫ Ω`
      },
      finalAnswer: {
        en: 'Required External Armature Resistance R_ext = 2.4375 Ω',
        hi: 'आवश्यक अतिरिक्त आर्मेचर प्रतिरोध R_ext = 2.4375 Ω',
        bn: 'প্রয়োজনীয় অতিরিক্ত আর্মেচার রোধ R_ext = ২.৪৩৭৫ Ω'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Electric Train Locomotives & Tramways: DC Series motors provide massive starting torque (T ∝ Ia²) to overcome heavy static train inertia.',
      'Precision Lathe & Milling Machines: DC Shunt motors maintain tight speed regulation (<5% drop) across varying cutting tool feed rates.',
      'Heavy Industrial Metal Punch Presses & Shears: Cumulative Compound motors supply heavy torque peaks while storing kinetic energy in heavy flywheels without overspeeding.',
      'Centrifugal Water Pumps & Industrial Exhaust Fans: DC Shunt motors deliver constant-speed fluid pumping with high operating efficiency.',
      'Automotive Starter Motors: Compact high-torque DC series motors crank internal combustion engines instantly against high compression resistance.'
    ],
    hi: [
      'इलेक्ट्रिक ट्रेन एवं ट्रामवे: डीसी सीरीज मोटर भारी ट्रेन के जड़त्व को दूर करने हेतु विशाल शुरुआती टॉर्क (T ∝ Ia²) प्रदान करती है।',
      'लेथ एवं मिलिंग मशीन: डीसी शंट मोटर धातु कटाई के दौरान अत्यंत स्थिर गति (<5% परिवर्तन) बनाए रखती है।',
      'हैवी पंचिंग प्रेस एवं रोलिंग मिल: कम्युलेटिव कंपाउंड मोटर फ्लाईव्हील के साथ मिलकर भारी टॉर्क झटके सहन करती है।',
      'सेंट्रीफ्यूगल पंप एवं एग्जॉस्ट फैन: डीसी शंट मोटर निरंतर और स्थिर गति पर जल व वायु प्रवाह बनाए रखती है।',
      'कार स्टार्टर मोटर: उच्च टॉर्क सीरीज मोटर इंजन को चालू करने हेतु तुरंत क्रैंकिंग टॉर्क देती है।'
    ],
    bn: [
      'বৈদ্যুতিক ট্রেন ও ট্রাম: ভারী ট্রেনের জড়তা কাটিয়ে চালু করতে ডিসি সিরিজ মোটর বিশাল প্রারম্ভিক টর্ক (T ∝ Ia²) সরবরাহ করে।',
      'প্রিসিশন লেদ ও মিলিং মেশিন: কাটিং টুলের বিভিন্ন লোডেও ডিসি শান্ট মোটর স্থির গতি (<৫% ড্রপ) বজায় রাখে।',
      'মেটাল পাঞ্চ প্রেস ও রোলিং মিল: কিউমুলেটিভ কম্পাউন্ড মোটর ফ্লাইহুইলের সাথে যুক্ত হয়ে ভারী টর্ক শক সহজে সামলায়।',
      'সেন্ট্রিফিউগাল পাম্প ও শিল্প ফ্যান: শান্ট মোটর একটানা স্থির গতিতে তরল ও বায়ু পাম্পিং নিশ্চিত করে।',
      'গাড়ির ইঞ্জিন স্টার্টার: উচ্চ টর্কের ডিসি সিরিজ মোটর ইঞ্জিনকে দ্রুত ঘোরাতে তাৎক্ষণিক ক্র্যাঙ্কিং টর্ক দেয়।'
    ]
  },
  importantPoints: {
    en: [
      'DC Shunt Motor is known as a "Constant Speed Motor" because speed drops by only 3% to 5% from no-load to full-load.',
      'DC Series Motor produces torque proportional to the square of current (Ta ∝ Ia²) before magnetic core saturation.',
      'DC Series Motor MUST NEVER be started on no-load or connected via belt drives due to catastrophic overspeed runaway (N -> ∞ as Φ -> 0).',
      'Cumulative Compound Motors provide the best of both worlds: high starting torque plus a safe bounded no-load top speed.',
      'Differential Compound Motors are virtually never used commercially because weakening flux under heavy load causes hazardous speed instability.'
    ],
    hi: [
      'डीसी शंट मोटर को "स्थिर गति मोटर" कहा जाता है क्योंकि नो-लोड से फुल-लोड तक गति में केवल 3-5% का अंतर आता है।',
      'डीसी सीरीज मोटर संतृप्ति से पूर्व धारा के वर्ग के समानुपाती (Ta ∝ Ia²) टॉर्क उत्पन्न करती है।',
      'डीसी सीरीज मोटर को कभी बिना लोड या बेल्ट ड्राइव से नहीं चलाना चाहिए क्योंकि फ्लक्स शून्य होने पर गति असीमित (N → ∞) हो जाती है।',
      'कम्युलेटिव कंपाउंड मोटर उच्च शुरुआती टॉर्क और सुरक्षित अधिकतम गति दोनों प्रदान करती है।',
      'डिफरेंशियल कंपाउंड मोटर का उपयोग व्यावहारिक रूप से नहीं किया जाता क्योंकि लोड बढ़ने पर फ्लक्स घटने से गति अस्थिर हो जाती है।'
    ],
    bn: [
      'ডিসি শান্ট মোটরকে "ধ্রুব গতির মোটর" বলা হয় কারণ নো-লোড থেকে ফুল-লোডে গতি মাত্র ৩-৫% কমে।',
      'স্যাচুরেশনের পূর্বে সিরিজ মোটরের টর্ক কারেন্টের বর্গের সমানুপাতিক (Ta ∝ Ia²)।',
      'নো-লোডে বা বেল্ট ড্রাইভে সিরিজ মোটর চালানো কঠোরভাবে নিষিদ্ধ কারণ ফ্লাক্স শূন্য হয়ে গতি অসীম (N → ∞) হতে পারে।',
      'কিউমুলেটিভ কম্পাউন্ড মোটর উচ্চ স্টার্টিং টর্ক এবং নিরাপদ সর্বোচ্চ নো-লোড গতির সমন্বয় ঘটায়।',
      'ডিফারেনশিয়াল কম্পাউন্ড মোটর বাণিজ্যিকভাবে ব্যবহৃত হয় না কারণ লোড বৃদ্ধিতে ফ্লাক্স হ্রাস পেয়ে গতি অস্থিতিশীল হয়।'
    ]
  },
  commonMistakes: {
    en: [
      'Attempting to Run Series Motors on No-Load: Believing a motor will just spin quietly unloaded; series motors accelerate violently until self-destruction.',
      'Assuming Shunt Motor Speed Increases under Heavy Load: Thinking Ia increases speed; Back EMF drops, so speed slightly droops.',
      'Confusing Cumulative and Differential Compounding: Cumulative adds flux (Φsh + Φse), whereas Differential subtracts flux (Φsh - Φse).',
      'Using Belt Drives on Series Motors: Belts can slip or snap, leaving the series motor in an unloaded runaway condition.'
    ],
    hi: [
      'सीरीज मोटर को बिना लोड चलाने का प्रयास: यह सोचना कि मोटर शांति से घूमेगी; बिना लोड पर सीरीज मोटर अत्यधिक गति पकड़कर टूट जाती है।',
      'शंट मोटर की गति लोड बढ़ने पर बढ़ना मानना: लोड बढ़ने से बैक EMF थोड़ा घटता है, जिससे गति थोड़ी घटती है, बढ़ती नहीं।',
      'कम्युलेटिव एवं डिफरेंशियल कंपाउंडिंग में भ्रम: कम्युलेटिव में फ्लक्स जुड़ता है (Φsh + Φse), जबकि डिफरेंशियल में घटता है (Φsh - Φse)।',
      'सीरीज मोटर पर बेल्ट ड्राइव का उपयोग: बेल्ट फिसलने या टूटने पर मोटर तुरंत अनियंत्रित होकर नष्ट हो सकती है।'
    ],
    bn: [
      'নো-লোডে সিরিজ মোটর চালানোর চেষ্টা: নো-লোডে সিরিজ মোটর নিয়ন্ত্রণের বাইরে গিয়ে তীব্র গতিতে ধ্বংস হয়ে যায়।',
      'লোড বাড়লে শান্ট মোটরের গতি বাড়বে ভাবা: লোড বৃদ্ধির সাথে ব্যাক EMF কিছুটা কমে যাওয়ায় গতি সামান্য হ্রাস পায়।',
      'কিউমুলেটিভ ও ডিফারেনশিয়াল সংযোগে ভুল: কিউমুলেটিভে ফ্লাক্স যোগ হয় (Φsh + Φse) এবং ডিফারেনশিয়ালে বিয়োগ হয় (Φsh - Φse)।',
      'সিরিজ মোটরে বেল্ট ড্রাইভ ব্যবহার: বেল্ট ছিঁড়ে গেলে লোডমুক্ত অবস্থায় মোটর ধ্বংসাত্মক গতি লাভ করে।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-motor-types-1',
      question: {
        en: 'Which type of DC motor is most suitable for electric traction systems and heavy cranes?',
        hi: 'इलेक्ट्रिक ट्रैक्शन सिस्टम एवं भारी क्रेन के लिए कौन सी डीसी मोटर सर्वाधिक उपयुक्त है?',
        bn: 'বৈদ্যুতিক ট্র্যাকশন সিস্টেম এবং ভারী ক্রেনের জন্য কোন ধরনের ডিসি মোটর সবচেয়ে উপযুক্ত?'
      },
      options: [
        { id: 'opt-a', text: { en: 'DC Series Motor', hi: 'डीसी सीरीज मोटर', bn: 'ডিসি সিরিজ মোটর' } },
        { id: 'opt-b', text: { en: 'DC Shunt Motor', hi: 'डीसी शंट मोटर', bn: 'ডিসি শান্ট মোটর' } },
        { id: 'opt-c', text: { en: 'Differential Compound Motor', hi: 'डिफरेंशियल कंपाउंड मोटर', bn: 'ডিফারেনশিয়াল কম্পাউন্ড মোটর' } },
        { id: 'opt-d', text: { en: 'Permanent Magnet Stepper Motor', hi: 'परमानेंट मैग्नेट स्टेपर मोटर', bn: 'স্থায়ী চুম্বক স্টেপার মোটর' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'A DC Series motor develops massive starting torque proportional to the square of current (Ta ∝ Ia²), providing the immense breakaway force required by trains and cranes.',
        hi: 'डीसी सीरीज मोटर धारा के वर्ग के समानुपाती (Ta ∝ Ia²) अत्यधिक शुरुआती टॉर्क उत्पन्न करती है, जो ट्रेन और क्रेन को चालू करने हेतु आवश्यक है।',
        bn: 'ডিসি সিরিজ মোটর কারেন্টের বর্গের সমানুপাতিক (Ta ∝ Ia²) উচ্চ স্টার্টিং টর্ক প্রদান করায় এটি ট্রেন ও ক্রেনের জন্য সেরা।'
      }
    },
    {
      id: 'mcq-motor-types-2',
      question: {
        en: 'Why is a DC series motor strictly forbidden from being started without a mechanical load?',
        hi: 'डीसी सीरीज मोटर को यांत्रिक लोड के बिना चालू करना सख्त वर्जित क्यों है?',
        bn: 'যান্ত্রিক লোড ছাড়া ডিসি সিরিজ মোটর চালু করা কঠোরভাবে নিষিদ্ধ কেন?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Its rotational speed accelerates dangerously toward infinity due to near-zero field flux', hi: 'शून्य के करीब फ्लक्स होने के कारण इसकी गति खतरनाक रूप से अनंत की ओर बढ़ती है', bn: 'প্রায় শূন্য ফ্লাক্সের কারণে এর ঘূর্ণন গতি বিপজ্জনকভাবে অসীমের দিকে বৃদ্ধি পায়' } },
        { id: 'opt-b', text: { en: 'Its Back EMF drops permanently to zero', hi: 'इसका बैक EMF हमेशा के लिए शून्य हो जाता है', bn: 'এর ব্যাক EMF স্থায়ীভাবে শূন্য হয়ে যায়' } },
        { id: 'opt-c', text: { en: 'It draws infinitely high current from the supply at no load', hi: 'यह नो-लोड पर सप्लाई से अनंत धारा खींचती है', bn: 'এটি নো-লোডে সাপ্লাই থেকে অসীম কারেন্ট টানে' } },
        { id: 'opt-d', text: { en: 'Its direction of rotation automatically reverses', hi: 'इसकी घूर्णन दिशा अपने आप उलट जाती है', bn: 'এর ঘূর্ণন দিক স্বয়ংক্রিয়ভাবে বিপরীত হয়' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'At no-load, current Ia -> 0, making series field flux Φ -> 0. Since speed N ∝ Eb / Φ, near-zero flux triggers catastrophic overspeed runaway (N -> ∞) that tears the rotor apart.',
        hi: 'नो-लोड पर धारा Ia → 0 होने से फ्लक्स Φ → 0 हो जाता है। चूँकि N ∝ Eb / Φ होता है, मोटर अत्यधिक गति पकड़कर नष्ट हो सकती है।',
        bn: 'নো-লোডে কারেন্ট Ia → 0 হওয়ায় ফ্লাক্স Φ → 0 হয়। যেহেতু গতি N ∝ Eb / Φ, তাই অতি উচ্চ ঘূর্ণন গতিতে রোটর ভেঙে ধ্বংস হয়ে যায়।'
      }
    },
    {
      id: 'mcq-motor-types-3',
      question: {
        en: 'Which DC motor is best categorized as a "Constant Speed Motor" across varying mechanical loads?',
        hi: 'परिवर्तनीय यांत्रिक लोड पर किस डीसी मोटर को "स्थिर गति मोटर" (Constant Speed Motor) के रूप में वर्गीकृत किया जाता है?',
        bn: 'পরিবর্তনশীল লোডে কোন ডিসি মোটরকে "ধ্রুব গতির মোটর" হিসেবে চিহ্নিত করা হয়?'
      },
      options: [
        { id: 'opt-a', text: { en: 'DC Shunt Motor', hi: 'डीसी शंट मोटर', bn: 'ডিসি শান্ট মোটর' } },
        { id: 'opt-b', text: { en: 'DC Series Motor', hi: 'डीसी सीरीज मोटर', bn: 'ডিসি সিরিজ মোটর' } },
        { id: 'opt-c', text: { en: 'Differential Compound Motor', hi: 'डिफरेंशियल कंपाउंड मोटर', bn: 'ডিফারেনশিয়াল কম্পাউন্ড মোটর' } },
        { id: 'opt-d', text: { en: 'Universal AC/DC Motor', hi: 'यूनिवर्सल एसी/डीसी मोटर', bn: 'ইউনিভার্সাল এসি/ডিসি মোটর' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'A DC shunt motor has a constant field flux (Ish = V/Rsh). As load increases, speed droops by only 3% to 5%, providing excellent speed regulation.',
        hi: 'डीसी शंट मोटर का फील्ड फ्लक्स स्थिर रहता है। लोड बढ़ने पर इसकी गति में केवल 3-5% की मामूली गिरावट आती है, जिससे यह स्थिर गति देती है।',
        bn: 'ডিসি শান্ট মোটরে ফ্লাক্স ধ্রুব থাকে। লোড বৃদ্ধিতে এর গতি মাত্র ৩-৫% হ্রাস পাওয়ায় এটি উৎকৃষ্ট গতি নিয়ন্ত্রণ প্রদান করে।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-motor-types-1',
      question: {
        en: 'A 240 V DC series motor has a total resistance of 0.4 Ω (Ra = 0.25 Ω, Rse = 0.15 Ω). When running at 600 RPM, it draws 40 A. If the mechanical load is reduced such that the current drops to 20 A, calculate the new motor speed assuming the magnetic circuit is operating below saturation (Φ ∝ Ia).',
        hi: 'एक 240 V डीसी सीरीज मोटर का कुल प्रतिरोध 0.4 Ω (Ra = 0.25 Ω, Rse = 0.15 Ω) है। 600 RPM पर यह 40 A धारा लेती है। यदि लोड कम होने से धारा 20 A रह जाए, तो नई गति ज्ञात कीजिए (मान लें चुंबकीय परिपथ संतृप्त नहीं है, Φ ∝ Ia)।',
        bn: 'একটি ২৪০ V ডিসি সিরিজ মোটরের মোট রোধ ০.৪ Ω। ৬০০ RPM গতিতে এটি ৪০ A কারেন্ট টানে। লোড কমে কারেন্ট ২০ A হলে নতুন গতি কত হবে? (অসম্পৃক্ত ফ্লাক্স Φ ∝ Ia ধরে)।'
      },
      hint: {
        en: 'Calculate Eb1 = 240 - (40 × 0.4) = 224 V. Then Eb2 = 240 - (20 × 0.4) = 232 V. Use N2 = N1 × (Eb2 / Eb1) × (Ia1 / Ia2).',
        hi: 'Eb1 = 240 - (40 × 0.4) = 224 V ज्ञात करें। फिर Eb2 = 240 - (20 × 0.4) = 232 V। सूत्र N2 = N1 × (Eb2 / Eb1) × (Ia1 / Ia2) का प्रयोग करें।',
        bn: 'Eb1 = ২৪০ - (৪০ × ০.৪) = ২২৪ V এবং Eb2 = ২৪০ - (২০ × ০.৪) = ২৩২ V বের করুন। এরপর N2 = N1 × (Eb2 / Eb1) × (Ia1 / Ia2) সূত্র ব্যবহার করুন।'
      },
      answerKey: {
        en: 'Eb1 = 240 - (40 × 0.4) = 224 V. Eb2 = 240 - (20 × 0.4) = 232 V. Since N ∝ Eb / Φ and Φ ∝ Ia: N2 = 600 × (232 / 224) × (40 / 20) = 600 × 1.0357 × 2.0 = 1242.86 RPM.',
        hi: 'Eb1 = 224 V, Eb2 = 232 V। N2 = 600 × (232 / 224) × (40 / 20) = 1242.86 RPM।',
        bn: 'Eb1 = ২২৪ V, Eb2 = ২৩২ V। N2 = ৬০০ × (২৩২ / ২২৪) × (৪০ / ২০) = ১২৪২.৮৬ RPM।'
      }
    },
    {
      id: 'pq-motor-types-2',
      question: {
        en: 'Compare the torque-speed characteristics of DC Shunt, DC Series, and Cumulative Compound motors. Detail why cumulative compound motors are chosen for rolling mills and heavy punch presses.',
        hi: 'डीसी शंट, डीसी सीरीज एवं कम्युलेटिव कंपाउंड मोटरों के टॉर्क-गति अभिलक्षणों की तुलना कीजिए। समझाइए कि रोलिंग मिल एवं भारी पंचिंग प्रेस हेतु कम्युलेटिव कंपाउंड मोटर क्यों चुनी जाती है।',
        bn: 'ডিসি শান্ট, সিরিজ এবং কিউমুলেটিভ কম্পাউন্ড মোটরের টর্ক-গতি বৈশিষ্ট্যের তুলনা করুন। রোলিং মিল এবং পাঞ্চ প্রেসে কেন কিউমুলেটিভ কম্পাউন্ড মোটর ব্যবহৃত হয় তা ব্যাখ্যা করুন।'
      },
      hint: {
        en: 'Discuss how cumulative compounding provides high series-field torque during punch impact while shunt field caps maximum speed when the workpiece passes.',
        hi: 'वर्णन करें कि पंचिंग के झटके के समय सीरीज फील्ड उच्च टॉर्क देती है तथा पंच खाली होने पर शंट फील्ड गति को सीमित रखती है।',
        bn: 'ব্যাখ্যা করুন পাঞ্চিং ইমপ্যাক্টের সময় সিরিজ ফিল্ড উচ্চ টর্ক দেয় এবং কাজ শেষ হলে শান্ট ফিল্ড সর্বোচ্চ গতি নিয়ন্ত্রণ করে।'
      },
      answerKey: {
        en: '1. Comparison: (a) Shunt Motor: Flat N-T characteristic (3–5% drop), low starting torque (1.5× rated), constant speed. (b) Series Motor: Hyperbolic drooping N-T curve, massive starting torque (3–5× rated), dangerous runaway at no-load. (c) Cumulative Compound Motor: Moderately drooping N-T curve (10–25% drop), high starting torque, perfectly safe bounded no-load speed. 2. Rolling Mills & Punch Presses: During metal stamping/punching, mechanical load spikes violently for fractions of a second. The cumulative series field automatically strengthens flux, providing heavy surge torque while slowing the motor slightly to allow an attached heavy flywheel to release its stored kinetic energy. Between punches, when the load drops to zero, the shunt field maintains a safe, bounded speed, preventing destructive runaway.',
        hi: '1. तुलना: (a) शंट मोटर: सपाट N-T वक्र, स्थिर गति, सामान्य शुरुआती टॉर्क। (b) सीरीज मोटर: गिरता हुआ N-T वक्र, विशाल शुरुआती टॉर्क, बिना लोड पर खतरनाक गति। (c) कम्युलेटिव कंपाउंड मोटर: मध्यम गिरता वक्र, उच्च शुरुआती टॉर्क, सुरक्षित नो-लोड गति। 2. रोलिंग मिल एवं पंच प्रेस: धातु काटते समय अचानक भारी लोड का झटका लगता है। कम्युलेटिव सीरीज फील्ड तुरंत टॉर्क बढ़ाती है और गति को थोड़ा धीमा करती है जिससे भारी फ्लाईव्हील अपनी गतिज ऊर्जा छोड़ देता है। कटाई के बाद जब लोड हटता है तो शंट फील्ड गति को सुरक्षित सीमा में रखती है।',
        bn: '১. তুলনা: (a) শান্ট মোটর: ফ্ল্যাট N-T কার্ভ, প্রায় স্থির গতি, সাধারণ স্টার্টিং টর্ক। (b) সিরিজ মোটর: হাইপারবোলিক কার্ভ, অত্যন্ত উচ্চ স্টার্টিং টর্ক, নো-লোডে বিপজ্জনক ওভারস্পিড। (c) কিউমুলেটিভ কম্পাউন্ড মোটর: মাঝারি ড্রপিং কার্ভ, উচ্চ স্টার্টিং টর্ক, নিরাপদ সর্বোচ্চ নো-লোড গতি। ২. রোলিং মিল ও পাঞ্চ প্রেস: মেটাল পাঞ্চিংয়ের সময় হঠাৎ তীব্র টর্ক স্পাইক হয়। কিউমুলেটিভ সিরিজ ফিল্ড তাৎক্ষণিকভাবে ফ্লাক্স ও টর্ক বাড়িয়ে দেয় এবং মোটরের গতি কিছুটা কমিয়ে যুক্ত ফ্লাইহুইল থেকে সঞ্চিত গতিশক্তি নির্গমনে সহায়তা করে। পাঞ্চিং সম্পন্ন হলে শান্ট ফিল্ড গতিকে নিরাপদ সীমার মধ্যে রাখে।'
      }
    }
  ]
};
