import { Lesson } from '../types';

export const LESSON_DYNAMICALLY_INDUCED_EMF: Lesson = {
  id: 'lsn-ch10-dynamically-induced-emf',
  topicId: 'ch10-dynamically-induced-emf',
  chapterId: 'ch-em-induction',
  order: 4,
  title: {
    en: 'Dynamically Induced (Motional) EMF & Generator Principles',
    hi: 'गतिक रूप से प्रेरित ईएमएफ (Motional EMF) एवं जनरेटर सिद्धांत',
    bn: 'গতিশীলভাবে আবিষ্ট ইএমএফ (Motional EMF) ও জেনারেটর নীতি'
  },
  description: {
    en: 'Master dynamically induced motional EMF generated when a conductor physically cuts through magnetic flux lines. Explore Lorentz force, charge separation, the complete mathematical derivation of e = B·l·v·sin(θ), angular dependencies, Fleming’s Right-Hand Rule correlation, rotating armatures, and DC generator working principles.',
    hi: 'जब कोई चालक भौतिक रूप से चुंबकीय फ्लक्स रेखाओं को काटता है तो उत्पन्न गतिक प्रेरित ईएमएफ (Motional EMF) का विस्तृत अध्ययन। लोरेंट्ज़ बल, आवेश पृथक्करण, e = B·l·v·sin(θ) का पूर्ण गणितीय निगमन, कोणीय निर्भरता, फ्लेमिंग के दाएं हाथ का नियम, घूर्णनशील आर्मेचर एवं डीसी जनरेटर कार्य सिद्धांत।',
    bn: 'চৌম্বক ফ্লাক্স কর্তনকারী গতিশীল পরিবাহীতে সৃষ্ট মোশনাল ইএমএফ-এর বিশদ পাঠ। লোরেন্টজ বল, চার্জ পৃথকীকরণ, e = B·l·v·sin(θ) সূত্রের পূর্ণ গাণিতিক প্রতিপাদন, কৌণিক নির্ভরতা, ফ্লেমিংয়ের ডানহস্ত নিয়ম, ঘূর্ণনশীল আর্মেচার ও ডিসি জেনারেটরের কার্যপ্রণালী।'
  },
  estimatedMinutes: 32,
  easyExplanation: {
    en: "Imagine walking a metal broom through a dense waterfall. The broom bristles sweep through and cut the streams of water. In electrical physics, when a straight copper wire sweeps across magnetic field lines at velocity v, the magnetic field pushes free electrons inside the wire toward one end. This separation creates a positive charge at one end and a negative charge at the other, establishing a voltage called 'Dynamically Induced EMF' or 'Motional EMF'! If you connect a lightbulb to both ends, current flows smoothly—this is the fundamental principle behind all electric generators on Earth!",
    hi: 'कल्पना कीजिए कि आप एक तांबे की छड़ को घने झरने के पानी की धार के आर-पार तेजी से घुमाते हैं। भौतिकी में, जब कोई चालक तार किसी चुंबकीय क्षेत्र में गति करता है, तो चुंबकीय क्षेत्र तार के अंदर मौजूद स्वतंत्र इलेक्ट्रॉनों को एक सिरे की ओर धकेल देता है। इससे एक सिरे पर धनात्मक और दूसरे पर ऋणात्मक आवेश जमा हो जाता है, जिससे दोनों सिरों के बीच वोल्टेज बनता है। इसे ही "गतिक रूप से प्रेरित ईएमएफ" (Dynamically Induced EMF) कहते हैं! यही सिद्धांत दुनिया के सभी बिजली जनरेटरों का आधार है।',
    bn: 'মনে করুন একটি তামার তারকে আপনি শক্তিশালী চৌম্বক বলরেখার ভেতর দিয়ে দ্রুত গতিতে টেনে নিচ্ছেন। তারটি যখন চৌম্বক বলরেখাগুলো কাটে (Flux Cutting), তখন চৌম্বক বল তারের ভেতরের মুক্ত ইলেকট্রনগুলোকে এক প্রান্তে ঠেলে পাঠায়। এর ফলে তারের এক প্রান্ত ধনাত্মক এবং অপর প্রান্ত ঋণাত্মক হয়ে একটি ভোল্টেজ বা বিভব পার্থক্য সৃষ্টি করে। একেই বলে "গতিশীলভাবে আবিষ্ট ইএমএফ" (Motional EMF)! এই মৌলিক নীতির ওপর ভিত্তি করেই বিশ্বের সমস্ত বিদ্যুৎ উৎপাদনকারী জেনারেটর কাজ করে।'
  },
  detailedExplanation: {
    en: `1. Definition & Fundamental Nature of Dynamically Induced EMF:
Dynamically Induced EMF (also termed Motional EMF) is the electromotive force generated in a physical conductor when there is relative physical motion between the conductor and a stationary magnetic field, causing the conductor to cut through magnetic flux lines.

2. Microscopic Mechanism & Lorentz Force:
Inside any metallic conductor of length 'l', there are countless free conduction electrons (charge q = -e).
- When the conductor moves with velocity vector v in a magnetic field of flux density B, each free electron experiences a magnetic Lorentz force:
    F_m = q · (v × B)
- In scalar magnitude: F_m = q · v · B · sin(θ), where θ is the angle between the velocity vector v and the magnetic field vector B.
- This magnetic force drives negative charges (electrons) toward one terminal of the conductor, leaving an uncompensated positive ionic charge at the opposite terminal.
- This charge separation creates an internal electrostatic electric field E_ind directed from positive to negative terminal.
- The resulting electrostatic force F_e = q · E_ind opposes further magnetic charge accumulation. Equilibrium is attained when:
    F_e = F_m  ==>  q · E_ind = q · v · B · sin(θ)  ==>  E_ind = v · B · sin(θ)
- The resulting potential difference (EMF) across length l is:
    e = ∫ E_ind · dl = B · l · v · sin(θ)

3. Mathematical Derivation using Rate of Change of Flux (Faraday's Framework):
Consider a straight conducting rod of active length 'l' sliding with velocity 'v' perpendicular to parallel conducting rails separated by distance 'l' in a uniform perpendicular magnetic field B (into the page, θ = 90°).
- In a differential time interval dt, the rod moves a distance dx = v · dt.
- The differential area swept by the conductor is: dA = l · dx = l · (v · dt).
- The magnetic flux cut in time dt is: dΦ = B · dA = B · l · v · dt.
- By Faraday's Law of Electromagnetic Induction, the magnitude of induced EMF is:
    e = dΦ / dt = (B · l · v · dt) / dt = B · l · v
- If the velocity vector v makes an angle θ with the magnetic field lines B:
    e = B · l · v · sin(θ)

4. Analysis of Cutting Angle (θ):
- Case 1: θ = 90° (Conductor moves perpendicular to field lines):
    sin(90°) = 1.0  ==>  e_max = B · l · v  (Maximum possible EMF; maximum rate of flux cutting).
- Case 2: θ = 0° or 180° (Conductor moves parallel/antiparallel to field lines):
    sin(0°) = 0  ==>  e = 0  (Zero EMF; conductor glides along field lines without cutting any flux).
- Case 3: θ = 30° / 45° / 60°:
    e = B · l · v · sin(θ)  (Only the perpendicular velocity component v_perp = v · sin θ cuts flux).

5. Direction Determination — Fleming's Right-Hand Rule:
Stretch the Thumb, Index (Forefinger), and Middle finger of the right hand mutually perpendicular at 90°:
- Thumb points in the direction of Motion / Velocity (v) of conductor.
- Forefinger points in the direction of Magnetic Field (B, North to South).
- Middle finger indicates the direction of Induced Current (I) and induced positive terminal polarity.

6. Rotating Conductor in DC Generator Armature:
In real DC generators and AC alternators, conductors are housed in armature slots rotating circularly in a magnetic field:
- As the coil rotates at angular speed ω (rad/s), the angle θ between conductor velocity and field varies as θ = ωt.
- Instantaneous induced EMF in each active conductor side: e(t) = B · l · v · sin(ωt).
- Total induced armature voltage is the series summation of all active conductors: E_a = (P · Φ · Z · N) / (60 · A).

7. Technical Comparison: Motional EMF vs Transformer EMF:
- Motional (Dynamic) EMF requires physical mechanical motion (v > 0) in a steady magnetic field (dB/dt = 0). Energy conversion: Mechanical to Electrical.
- Transformer (Static) EMF requires a stationary conductor (v = 0) linked by a time-varying magnetic field (dB/dt ≠ 0). Energy conversion: Electrical to Electrical.`,

    hi: `1. गतिक रूप से प्रेरित ईएमएफ की परिभाषा एवं मूल प्रकृति:
जब किसी स्थिर चुंबकीय क्षेत्र और चालक के बीच सापेक्ष भौतिक गति होती है, जिसके कारण चालक चुंबकीय फ्लक्स रेखाओं को काटता है (Flux Cutting), तो चालक के सिरों पर उत्पन्न विद्युत वाहक बल को "गतिक रूप से प्रेरित ईएमएफ" (Dynamically / Motional Induced EMF) कहते हैं।

2. सूक्ष्मदर्शीय क्रियाविधि एवं लोरेंट्ज़ बल:
लंबाई 'l' के धातु चालक में अनगिनत मुक्त इलेक्ट्रॉन (आवेश q = -e) होते हैं।
- जब चालक B फ्लक्स घनत्व वाले चुंबकीय क्षेत्र में v वेग से गति करता है, तो प्रत्येक इलेक्ट्रॉन पर चुंबकीय लोरेंट्ज़ बल लगता है:
    F_m = q · (v × B) = q · v · B · sin(θ)
- यह बल इलेक्ट्रॉनों को चालक के एक सिरे पर धकेल देता है, जिससे दूसरा सिरा धनात्मक हो जाता है।
- इस आवेश पृथक्करण से एक आंतरिक विद्युत क्षेत्र E_ind उत्पन्न होता है।
- संतुलन अवस्था में: q · E_ind = q · v · B · sin(θ) ==> E_ind = v · B · sin(θ)
- अतः चालक के दोनों सिरों के मध्य कुल प्रेरित EMF:
    e = B · l · v · sin(θ)

3. फैराडे के नियम द्वारा गणितीय निगमन:
- dt समय में चालक द्वारा तय की गई दूरी dx = v · dt।
- चालक द्वारा काटा गया क्षेत्रफल dA = l · dx = l · v · dt।
- dt समय में काटा गया फ्लक्स dΦ = B · dA = B · l · v · dt।
- फैराडे के नियमानुसार प्रेरित EMF:
    e = dΦ / dt = B · l · v · sin(θ)

4. कर्तन कोण (θ) का विश्लेषण:
- स्थिति 1: θ = 90° (चालक क्षेत्र के लंबवत गति करता है): sin(90°) = 1 ==> e = B · l · v (अधिकतम EMF)।
- स्थिति 2: θ = 0° या 180° (चालक क्षेत्र के समानांतर गति करता है): sin(0°) = 0 ==> e = 0 (शून्य EMF)।

5. दिशा निर्धारण (फ्लेमिंग का दायां हाथ नियम):
अंगूठा चालक की गति (v), तर्जनी चुंबकीय क्षेत्र (B), तथा मध्यमा प्रेरित धारा (I) की दिशा दर्शाती है।

6. जनरेटर सिद्धांत:
घूर्णन करते हुए आर्मेचर में v = ωr होता है, जिससे ज्यावक्रीय (Sinusoidal) EMF e(t) = E_m sin(ωt) उत्पन्न होता है।`,

    bn: `১. গতিশীলভাবে আবিষ্ট ইএমএফ-এর সংজ্ঞা:
যখন কোনো স্থির চৌম্বক ক্ষেত্রের মধ্যে একটি পরিবাহী শারীরিকভাবে গতিশীল হয়ে চৌম্বক বলরেখা ছেদ করে (Flux Cutting), তখন পরিবাহীর দুই প্রান্তে যে ভোল্টেজ আবিষ্ট হয় তাকে গতিশীল বা মোশনাল ইএমএফ (Dynamically Induced EMF) বলে।

২. লোরেন্টজ বল ও চার্জ পৃথকীকরণ:
- পরিবাহী যখন B ক্ষেত্রে v বেগে গতিশীল হয়, তখন মুক্ত ইলেকট্রনের ওপর লোরেন্টজ বল কাজ করে: F_m = q(v × B)।
- এই বল ইলেকট্রনগুলোকে পরিবাহীর এক প্রান্তে জমা করে, ফলে অপর প্রান্তে ধনাত্মক চার্জ সৃষ্টি হয়।
- সাম্যাবস্থায় অভ্যন্তরীণ বৈদ্যুতিক বল ও চৌম্বক বল সমান হয়: qE = qvB sin(θ) ==> E = vB sin(θ)।
- দুই প্রান্তের বিভব পার্থক্য বা আবিষ্ট EMF: e = B · l · v · sin(θ)।

৩. গাণিতিক প্রতিপাদন:
- dt সময়ে পরিবাহীর অতিক্রান্ত দূরত্ব dx = v · dt।
- অতিক্রান্ত ক্ষেত্রফল dA = l · dx = l · v · dt।
- কর্তিত ফ্লাক্স dΦ = B · dA = B · l · v · dt।
- ফ্যারাডের সূত্রানুযায়ী: e = dΦ / dt = B · l · v · sin(θ)।

৪. কোণ θ এর প্রভাব:
- θ = ৯০° হলে: sin(৯০°) = ১ ==> e_max = B · l · v (সর্বোচ্চ ইএমএফ)।
- θ = ০° বা ১৮০° হলে: sin(০°) = ০ ==> e = ০ (কোনো ফ্লাক্স কর্তন হয় না, ইএমএফ শূন্য)।

৫. ফ্লেমিংয়ের ডানহস্ত নিয়ম:
বৃদ্ধাঙ্গুলি গতির দিক (v), তর্জনী চৌম্বক ক্ষেত্র (B), এবং মধ্যমা আবিষ্ট কারেন্টের দিক (I) নির্দেশ করে।`
  },
  formulas: [
    {
      id: 'eq-motional-emf-general',
      expression: 'e = B · l · v · sin(θ)',
      description: {
        en: 'General formula for dynamically induced motional EMF in a straight conductor cutting magnetic flux at angle θ.',
        hi: 'चुंबकीय फ्लक्स को θ कोण पर काटते हुए सीधे चालक में गतिक रूप से प्रेरित ईएमएफ का सामान्य सूत्र।',
        bn: 'θ কোণে চৌম্বক ফ্লাক্স কর্তনকারী সোজা পরিবাহীতে আবিষ্ট মোশনাল ইএমএফ-এর সাধারণ সূত্র।'
      },
      variables: [
        { symbol: 'e', name: { en: 'Dynamically Induced EMF (Volts, V)', hi: 'गतिक प्रेरित ईएमएफ (वोल्ट)', bn: 'গতিশীল আবিষ্ট ইএমএফ (ভোল্ট)' } },
        { symbol: 'B', name: { en: 'Magnetic Flux Density (Tesla, T or Wb/m²)', hi: 'चुंबकीय फ्लक्स घनत्व (टेस्ला)', bn: 'চৌম্বক ফ্লাক্স ঘনত্ব (টেসলা)' } },
        { symbol: 'l', name: { en: 'Active length of conductor in magnetic field (meters, m)', hi: 'चालक की सक्रिय लंबाई (मीटर)', bn: 'পরিবাহীর সক্রিয় দৈর্ঘ্য (মিটার)' } },
        { symbol: 'v', name: { en: 'Linear velocity of conductor (m/s)', hi: 'चालक का रेखीय वेग (मी/से)', bn: 'পরিবাহীর রৈখিক বেগ (মি/সে)' } },
        { symbol: 'θ', name: { en: 'Angle between velocity vector v and magnetic field vector B (degrees)', hi: 'वेग सदिश v एवं चुंबकीय क्षेत्र B के मध्य कोण', bn: 'বেগ ভেক্টর v এবং চৌম্বক ক্ষেত্র B এর মধ্যবর্তী কোণ' } }
      ]
    },
    {
      id: 'eq-motional-emf-perpendicular',
      expression: 'e_{max} = B · l · v',
      description: {
        en: 'Peak dynamically induced EMF when conductor moves strictly perpendicular to magnetic field (θ = 90°, sin 90° = 1).',
        hi: 'जब चालक चुंबकीय क्षेत्र के पूर्णतः लंबवत गति करता है तब अधिकतम प्रेरित ईएमएफ (θ = 90°)।',
        bn: 'যখন পরিবাহী চৌম্বক ক্ষেত্রের সাথে সম্পূর্ণ লম্বভাবে গতিশীল হয় তখন সর্বোচ্চ আবিষ্ট ইএমএফ (θ = ৯০°)।'
      },
      variables: [
        { symbol: 'e_{max}', name: { en: 'Maximum Motional EMF (V)', hi: 'अधिकतम गतिक EMF (V)', bn: 'সর্বোচ্চ মোশনাল EMF (V)' } }
      ]
    },
    {
      id: 'eq-induced-current-load',
      expression: 'i = \\frac{e}{R + r} = \\frac{B · l · v · \\sin(\\theta)}{R + r}',
      description: {
        en: 'Induced current flowing through a closed circuit of external load resistance R and internal conductor resistance r.',
        hi: 'बाह्य लोड प्रतिरोध R एवं आंतरिक प्रतिरोध r वाले बंद परिपथ में प्रवाहित प्रेरित धारा।',
        bn: 'বহিঃস্থ রোধ R ও অভ্যন্তরীণ রোধ r বিশিষ্ট বদ্ধ বর্তনীতে প্রবাহিত আবিষ্ট কারেন্ট।'
      },
      variables: [
        { symbol: 'i', name: { en: 'Induced Current (Amperes, A)', hi: 'प्रेरित धारा (एम्पीयर)', bn: 'আবিষ্ট কারেন্ট (অ্যাম্পিয়ার)' } },
        { symbol: 'R', name: { en: 'External Load Resistance (Ohms, Ω)', hi: 'बाह्य लोड प्रतिरोध (ओम)', bn: 'বহিঃস্থ লোড রোধ (ওহম)' } },
        { symbol: 'r', name: { en: 'Internal Resistance of moving conductor (Ohms, Ω)', hi: 'चालक का आंतरिक प्रतिरोध (ओम)', bn: 'পরিবাহীর অভ্যন্তরীণ রোধ (ওহম)' } }
      ]
    },
    {
      id: 'eq-opposing-lorentz-force',
      expression: 'F_{opp} = B · i · l · \\sin(\\theta) = \\frac{B^2 · l^2 · v · \\sin^2(\\theta)}{R + r}',
      description: {
        en: 'Counter-electromagnetic force (Lenz opposing mechanical force) resisting the motion of the conductor.',
        hi: 'चालक की गति का विरोध करने वाला विरोधी विद्युत-चुंबकीय बल (लेंज विरोधी यांत्रिक बल)।',
        bn: 'পরিবাহীর গতির বিরুদ্ধে বাধাদানকারী বিপরীত তড়িৎচৌম্বক বল (লেনজের যান্ত্রিক বাধা)।'
      },
      variables: [
        { symbol: 'F_{opp}', name: { en: 'Opposing Mechanical Force (Newtons, N)', hi: 'विरोधी यांत्रिक बल (न्यूटन)', bn: 'বিপরীতমুখী যান্ত্রিক বল (নিউটন)' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-motional-emf-derivation',
      title: {
        en: 'Step-by-Step Derivation of e = B · l · v · sin(θ)',
        hi: 'e = B · l · v · sin(θ) का चरणबद्ध निगमन',
        bn: 'e = B · l · v · sin(θ) সূত্রের ধাপভিত্তিক প্রতিপাদন'
      },
      content: {
        en: `Derivation Process:
1. Consider a straight conducting rod of length l placed on horizontal conducting rails in a uniform magnetic field B directed perpendicularly into the plane.
2. Let the rod move rightward with constant velocity v for an infinitesimal time dt.
3. In time dt, displacement dx = v · dt.
4. Area swept by the rod: dA = l · dx = l · v · dt.
5. The incremental flux cut: dΦ = B · dA = B · l · v · dt.
6. According to Faraday's Second Law, the magnitude of induced EMF is e = dΦ / dt.
7. Substituting dΦ: e = (B · l · v · dt) / dt = B · l · v.
8. If the rod velocity v is inclined at angle θ with respect to field B, only the normal component of velocity v_n = v · sin(θ) cuts flux lines:
   ==> e = B · l · v · sin(θ) (Proven).`,
        hi: `निगमन प्रक्रिया:
1. मान लीजिए l लंबाई की चालक छड़ एकसमान चुंबकीय क्षेत्र B में क्षैतिज पटरियों पर रखी है।
2. dt समय में छड़ का विस्थापन dx = v · dt होता है।
3. छड़ द्वारा तय क्षेत्रफल dA = l · dx = l · v · dt।
4. काटा गया फ्लक्स dΦ = B · dA = B · l · v · dt।
5. फैराडे के नियम से प्रेरित EMF e = dΦ / dt।
6. मान रखने पर: e = (B · l · v · dt) / dt = B · l · v।
7. जब वेग सदिश v चुंबकीय क्षेत्र से θ कोण पर हो:
   ==> e = B · l · v · sin(θ) (इति सिद्धम्)।`,
        bn: `প্রতিপাদন পদ্ধতি:
১. ধরা যাক l দৈর্ঘ্যের একটি সোজা পরিবাহী দণ্ড সুষম চৌম্বক ক্ষেত্র B এর লম্বভাবে স্থাপিত।
২. dt সময়ে পরিবাহীর সরণ dx = v · dt।
৩. পরিবাহী কর্তৃক কর্তিত ক্ষেত্রফল dA = l · dx = l · v · dt।
৪. কর্তিত ফ্লাক্স dΦ = B · dA = B · l · v · dt।
৫. ফ্যারাডের সূত্র অনুযায়ী: e = dΦ / dt।
৬. মান বসিয়ে পাই: e = (B · l · v · dt) / dt = B · l · v।
৭. গতিবেগ v যদি চৌম্বক ক্ষেত্রের সাথে θ কোণে আনত থাকে:
   ==> e = B · l · v · sin(θ) (প্রমাণিত)।`
      },
      schematicId: 'circuit-ch10-dynamically-induced-emf',
      keyEquations: ['e = B · l · v · sin(\\theta)', 'd\\Phi = B · l · v · dt', 'F_{opp} = B · i · l']
    }
  ],
  diagrams: [
    {
      id: 'diag-dynamically-induced-emf',
      title: {
        en: 'Dynamically Induced Motional EMF Circuit & Lorentz Separation',
        hi: 'गतिक प्रेरित ईएमएफ परिपथ एवं लोरेंट्ज़ आवेश पृथक्करण',
        bn: 'গতিশীল আবিষ্ট মোশনাল ইএমএফ বর্তনী ও লোরেন্টজ চার্জ পৃথকীকরণ'
      },
      caption: {
        en: 'Conductor moving across uniform magnetic field lines generating motional EMF e = B·l·v·sin(θ) and closed-loop current i = e/R.',
        hi: 'एकसमान चुंबकीय क्षेत्र में गतिमान चालक द्वारा उत्पन्न गतिक EMF एवं बंद परिपथ धारा i = e/R।',
        bn: 'সুষম চৌম্বক ক্ষেত্রে গতিশীল পরিবাহী দ্বারা মোশনাল ইএমএফ ও বদ্ধ লুপে কারেন্ট প্রবাহ।'
      },
      svgType: 'circuit-ch10-dynamically-induced-emf'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-dyn-1',
      problem: {
        en: 'A copper conductor of active length 0.8 m moves with a linear speed of 25 m/s perpendicularly through a uniform magnetic field of flux density 1.5 Tesla. Calculate: (a) The dynamically induced EMF in the conductor. (b) The induced current if the conductor is connected across an external load of 4.8 Ω (assume negligible internal resistance). (c) The opposing mechanical force acting on the conductor.',
        hi: '0.8 मीटर सक्रिय लंबाई का तांबे का चालक 1.5 टेस्ला के एकसमान चुंबकीय क्षेत्र में 25 मीटर/सेकंड के वेग से लंबवत गति करता है। गणना कीजिए: (a) चालक में गतिक प्रेरित ईएमएफ, (b) 4.8 Ω लोड जोड़ने पर प्रेरित धारा, (c) चालक पर लगने वाला विरोधी यांत्रिक बल।',
        bn: '০.৮ মিটার দৈর্ঘ্যের একটি তামার পরিবাহী ১.৫ টেসলা সুষম চৌম্বক ক্ষেত্রে লম্বভাবে ২৫ মি/সে বেগে গতিশীল। নির্ণয় করো: (ক) আবিষ্ট মোশনাল ইএমএফ, (খ) ৪.৮ ওহম লোড যুক্ত করলে আবিষ্ট কারেন্ট, (গ) পরিবাহীর ওপর প্রযুক্ত বিপরীতমুখী যান্ত্রিক বল।'
      },
      givenValues: {
        'l': '0.8 m',
        'v': '25 m/s',
        'B': '1.5 T',
        'θ': '90° (sin 90° = 1.0)',
        'R': '4.8 Ω'
      },
      solution: {
        en: `Step 1: Calculate Dynamically Induced EMF (e)
Formula: e = B · l · v · sin(θ)
Since motion is perpendicular, θ = 90° ==> sin(90°) = 1.0
e = 1.5 T × 0.8 m × 25 m/s × 1.0 = 30.0 Volts.

Step 2: Calculate Induced Current (i)
Formula: i = e / R
i = 30.0 V / 4.8 Ω = 6.25 Amperes.

Step 3: Calculate Opposing Mechanical Lorentz Force (F_opp)
Formula: F_opp = B · i · l · sin(θ)
F_opp = 1.5 T × 6.25 A × 0.8 m × 1.0 = 7.50 Newtons.`,
        hi: `चरण 1: गतिक प्रेरित ईएमएफ (e) की गणना
सूत्र: e = B · l · v · sin(θ)
चूंकि गति लंबवत है, θ = 90° ==> sin(90°) = 1.0
e = 1.5 × 0.8 × 25 × 1.0 = 30.0 वोल्ट।

चरण 2: प्रेरित धारा (i) की गणना
सूत्र: i = e / R
i = 30.0 / 4.8 = 6.25 एम्पीयर।

चरण 3: विरोधी यांत्रिक बल (F_opp) की गणना
सूत्र: F_opp = B · i · l · sin(θ)
F_opp = 1.5 × 6.25 × 0.8 = 7.50 न्यूटन।`,
        bn: `ধাপ ১: আবিষ্ট মোশনাল ইএমএফ (e) নির্ণয়
সূত্র: e = B · l · v · sin(θ)
যেহেতু গতি লম্বভাবে, θ = ৯০° ==> sin(৯০°) = ১.০
e = ১.৫ × ০.৮ × ২৫ × ১.০ = ৩০.০ ভোল্ট।

ধাপ ২: আবিষ্ট কারেন্ট (i) নির্ণয়
সূত্র: i = e / R
i = ৩০.০ / ৪.৮ = ৬.২৫ অ্যাম্পিয়ার।

ধাপ ৩: বিপরীতমুখী যান্ত্রিক বল (F_opp) নির্ণয়
সূত্র: F_opp = B · i · l · sin(θ)
F_opp = ১.৫ × ৬.২৫ × ০.৮ = ৭.৫০ নিউটন।`
      },
      finalAnswer: {
        en: '(a) Induced EMF e = 30.0 V, (b) Current i = 6.25 A, (c) Opposing Force F = 7.50 N',
        hi: '(a) प्रेरित EMF e = 30.0 V, (b) धारा i = 6.25 A, (c) विरोधी बल F = 7.50 N',
        bn: '(ক) আবিষ্ট EMF e = ৩০.০ V, (খ) কারেন্ট i = ৬.২৫ A, (গ) বিপরীত বল F = ৭.৫০ N'
      }
    },
    {
      id: 'ex-dyn-2',
      problem: {
        en: 'An aircraft with an aluminum wingspan of 40 meters flies horizontally at a speed of 900 km/h (250 m/s) in a region where the vertical component of the Earth’s magnetic field is 4.0 × 10⁻⁵ Tesla. Calculate the potential difference induced between the two wingtips.',
        hi: '40 मीटर पंख फैलाव (wingspan) वाला एक विमान 900 किमी/घंटा (250 मी/से) की गति से क्षैतिज उड़ान भर रहा है। यदि पृथ्वी के चुंबकीय क्षेत्र का ऊर्ध्वाधर घटक 4.0 × 10⁻⁵ टेस्ला हो, तो दोनों पंखों के सिरों के मध्य प्रेरित विभवांतर ज्ञात कीजिए।',
        bn: '৪০ মিটার পাখার বিস্তার বিশিষ্ট একটি উড়োজাহাজ ৯০০ কিমি/ঘণ্টা (২৫০ মি/সে) গতিতে অনুভূমিকভাবে উড়ছে। ভূপৃষ্ঠের উল্লম্ব চৌম্বক ক্ষেত্র ৪.০ × ১০⁻⁵ টেসলা হলে দুই ডানার প্রান্তদ্বয়ের মধ্যে আবিষ্ট বিভব পার্থক্য নির্ণয় করো।'
      },
      givenValues: {
        'l': '40 m',
        'v': '900 km/h = 900 × (5/18) = 250 m/s',
        'B_v': '4.0 × 10⁻⁵ T',
        'θ': '90° (horizontal flight cuts vertical field perpendicularly)'
      },
      solution: {
        en: `Formula: e = B_v · l · v · sin(θ)
Substitute values:
e = (4.0 × 10⁻⁵ T) × (40 m) × (250 m/s) × sin(90°)
e = (4.0 × 10⁻⁵) × 10,000 × 1.0 = 0.40 Volts (400 mV).`,
        hi: `सूत्र: e = B_v · l · v · sin(θ)
मान रखने पर:
e = (4.0 × 10⁻⁵) × 40 × 250 × 1.0
e = 0.40 वोल्ट (400 मिलीवोल्ट)।`,
        bn: `সূত্র: e = B_v · l · v · sin(θ)
মান বসিয়ে:
e = (৪.০ × ১০⁻⁵) × ৪০ × ২৫০ × ১.০
e = ০.৪০ ভোল্ট (৪০০ মিলিভোল্ট)।`
      },
      finalAnswer: {
        en: 'Induced Wingtip Voltage e = 0.40 V (400 mV)',
        hi: 'पंखों के सिरों पर प्रेरित वोल्टेज e = 0.40 V (400 mV)',
        bn: 'ডানার প্রান্তদ্বয়ে আবিষ্ট ভোল্টেজ e = ০.৪০ V (৪০০ mV)'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Hydroelectric and Turbo-Generators: Giant rotating rotor coils cut stator magnetic flux to generate megawatts of electric power at grid stations.',
      'Electromagnetic Flowmeters: Conductive fluid (such as blood or industrial slurry) flows through pipe in magnetic field, generating motional voltage proportional to flow velocity without intrusive mechanical impellers.',
      'DC Tachogenerators: Precision permanent-magnet DC generators output linear voltage directly proportional to rotational shaft speed for industrial motor speed feedback loops.',
      'Eddy Current Rail Braking: High-speed trains drop electromagnets near the metal rail; the relative motion cuts flux, inducing eddy currents whose opposing Lorentz force decelerates the train frictionlessly.',
      'Automotive Alternators: Rotational energy from car engine drives rotor magnetic field past stationary stator conductors to charge 12V lead-acid batteries and power onboard electronics.'
    ],
    hi: [
      'जलविद्युत एवं टर्बो-जनरेटर: बड़े पैमाने पर विद्युत उत्पादन के लिए चुंबकीय फ्लक्स को काटकर मेगावाट बिजली उत्पन्न करना।',
      'विद्युत-चुंबकीय फ्लोमीटर (Flowmeters): पाइप में बहने वाले चालक द्रव की गति से प्रेरित वोल्टेज मापकर द्रव प्रवाह दर ज्ञात करना।',
      'डीसी टैको-जनरेटर (Tachogenerators): मोटर शाफ्ट की घूर्णन गति के सीधे आनुपातिक वोल्टेज उत्पन्न कर सटीक स्पीड फीडबैक देना।',
      'एडी करंट रेल ब्रेकिंग (Eddy Current Braking): तेज गति ट्रेनों में बिना घर्षण के पहियों को रोकने के लिए लोरेंट्ज़ विरोधी बल का उपयोग।',
      'वाहन अल्टरनेटर (Automotive Alternators): कार इंजन की यांत्रिक ऊर्जा से बैटरी चार्ज करने हेतु बिजली बनाना।'
    ],
    bn: [
      'হাইড্রোইলেকট্রিক ও টার্বো-জেনারেটর: পাওয়ার প্ল্যান্টে বৃহৎ পরিবাহী কয়েল দ্বারা ফ্লাক্স কর্তন করে মেগাওয়াট বিদ্যুৎ উৎপাদন।',
      'তড়িৎচৌম্বক ফ্লোমিটার: পাইপের মধ্য দিয়ে পরিবাহী তরল প্রবাহিত হলে মোশনাল ভোল্টেজ পরিমাপ করে নির্ভুল প্রবাহ হার নির্ধারণ।',
      'ডিসি ট্যাকোজেনারেটর: মোটরের ঘূর্ণন গতির সরাসরি সমানুপাতিক ভোল্টেজ তৈরি করে ইন্ডাস্ট্রিয়াল স্পিড কন্ট্রোল নিশ্চিত করা।',
      'এডি কারেন্ট রেল ব্রেকিং: বুলেট ট্রেনে কোনো ঘর্ষণ ও ক্ষয় ছাড়াই লোরেন্টজ বাধার সাহায্যে মসৃণ ব্রেকিং ব্যবস্থা।',
      'অটোমোবাইল অল্টারনেটর: গাড়ির ইঞ্জিনের যান্ত্রিক শক্তি থেকে ১২ ভোল্ট ব্যাটারি চার্জ ও বৈদ্যুতিক যন্ত্রপাতি চালানো।'
    ]
  },
  importantPoints: {
    en: [
      'Dynamically induced EMF requires real physical relative velocity v > 0 between the conductor and magnetic field.',
      'The formula e = B · l · v · sin(θ) yields maximum voltage when θ = 90° (orthogonal cutting) and identically zero when θ = 0° or 180° (parallel motion).',
      'The direction of induced current and polarity is uniquely resolved by Fleming’s Right-Hand Rule (Thumb = Motion, Forefinger = Field, Middle = Current).',
      'Opposing Lorentz force F_opp = B·i·l·sin(θ) always mechanically resists the external driving force, perfectly upholding the Law of Conservation of Energy.',
      'In a rotating coil, motional EMF alternates sinusoidally: e(t) = E_m sin(ωt).'
    ],
    hi: [
      'गतिक प्रेरित ईएमएफ के लिए चालक और चुंबकीय क्षेत्र के बीच वास्तविक भौतिक सापेक्ष गति (v > 0) अनिवार्य है।',
      'सूत्र e = B · l · v · sin(θ) में θ = 90° पर अधिकतम EMF और θ = 0° या 180° (समानांतर गति) पर शून्य EMF प्राप्त होता है।',
      'प्रेरित धारा की दिशा फ्लेमिंग के दाएं हाथ के नियम (अंगूठा = गति, तर्जनी = क्षेत्र, मध्यमा = धारा) द्वारा तय होती है।',
      'विरोधी बल F_opp = B·i·l हमेशा गति का विरोध करता है, जो ऊर्जा संरक्षण नियम की पूर्ण पुष्टि करता है।',
      'घूर्णन कुंडली में उत्पन्न EMF ज्यावक्रीय (Sinusoidal) रूप में बदलता है: e(t) = E_m sin(ωt)।'
    ],
    bn: [
      'গতিশীলভাবে আবিষ্ট ইএমএফ সৃষ্টির জন্য পরিবাহী ও চৌম্বক ক্ষেত্রের মাঝে আপেক্ষিক বেগ (v > ০) থাকা আবশ্যক।',
      'e = B · l · v · sin(θ) সূত্রে θ = ৯০° হলে সর্বোচ্চ ভোল্টেজ এবং θ = ০° বা ১৮০° হলে শূন্য ভোল্টেজ পাওয়া যায়।',
      'আবিষ্ট কারেন্টের দিক ফ্লেমিংয়ের ডানহস্ত নিয়ম (বৃদ্ধাঙ্গুলি = গতি, তর্জনী = ক্ষেত্র, মধ্যমা = কারেন্ট) দ্বারা নির্ধারিত হয়।',
      'বিপরীতমুখী লোরেন্টজ বল F = B·i·l সর্বদা বাহ্যিক যান্ত্রিক বলের বিরুদ্ধে বাধা দেয়, যা শক্তি সংরক্ষণ নীতি প্রমাণ করে।',
      'ঘূর্ণায়মান কয়েলে আবিষ্ট ইএমএফ সাইন তরঙ্গ আকারে পরিবর্তিত হয়: e(t) = E_m sin(ωt)।'
    ]
  },
  commonMistakes: {
    en: [
      'Confusing angle θ: θ must be the angle between the velocity vector v and magnetic field B, NOT the angle with the conductor length.',
      'Assuming an open-circuit conductor experiences an opposing mechanical force: In an open circuit, i = 0, so F_opp = B·(0)·l = 0; only terminal voltage exists.',
      'Applying Fleming’s Left-Hand Rule to generator action: Left-Hand Rule is for Motors (Force output); Right-Hand Rule is for Generators (Induced EMF output).',
      'Forgetting that unit of length must be in meters (m) and velocity in meters per second (m/s), not cm or km/h.'
    ],
    hi: [
      'कोण θ में भ्रम: θ वेग सदिश v एवं चुंबकीय क्षेत्र B के बीच का कोण है, चालक की लंबाई के साथ नहीं।',
      'खुले परिपथ में विरोधी बल मानना: खुले परिपथ में धारा i = 0 होती है, अतः विरोधी बल शून्य होता है, केवल वोल्टेज मौजूद रहता है।',
      'जनरेटर में फ्लेमिंग का बायां हाथ नियम लगाना: बायां हाथ मोटरों के लिए और दायां हाथ जनरेटरों के लिए होता है।',
      'इकाइयों में गलती: लंबाई सदैव मीटर (m) और वेग मीटर/सेकंड (m/s) में होना चाहिए।'
    ],
    bn: [
      'কোণ θ নিয়ে ভুল ধারণা: θ হলো বেগ ভেক্টর v ও চৌম্বক ক্ষেত্র B এর মধ্যবর্তী কোণ, পরিবাহীর দৈর্ঘ্যের সাথে কোণ নয়।',
      'উন্মুক্ত বর্তনীতে বিপরীত বল আছে মনে করা: উন্মুক্ত বর্তনীতে কারেন্ট i = ০, তাই বিপরীত যান্ত্রিক বলও শূন্য হয়।',
      'জেনারেটরে বামহস্ত নিয়ম প্রয়োগ করা: বামহস্ত নিয়ম মোটরের জন্য এবং ডানহস্ত নিয়ম জেনারেটরের জন্য প্রযোজ্য।',
      'একক রূপান্তরে ভুল: দৈর্ঘ্য সবসময় মিটারে এবং গতিবেগ মি/সে এককে হিসাব করতে হবে।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-dyn-1',
      question: {
        en: 'A conductor of length 1.2 m moves with velocity 15 m/s parallel to magnetic field lines of 0.8 T (θ = 0°). What is the dynamically induced EMF?',
        hi: '1.2 मीटर लंबा चालक 0.8 टेस्ला के चुंबकीय क्षेत्र के समानांतर 15 मी/से के वेग से गति करता है (θ = 0°)। प्रेरित EMF क्या होगा?',
        bn: '১.২ মিটার দৈর্ঘ্যের একটি পরিবাহী ০.৮ টেসলা চৌম্বক ক্ষেত্রের সমান্তরালে ১৫ মি/সে বেগে গতিশীল (θ = ০°)। আবিষ্ট ইএমএফ কত?'
      },
      options: [
        { id: 'opt-a', text: { en: '14.4 V', hi: '14.4 V', bn: '১৪.৪ V' } },
        { id: 'opt-b', text: { en: '0.0 V', hi: '0.0 V', bn: '০.০ V' } },
        { id: 'opt-c', text: { en: '18.0 V', hi: '18.0 V', bn: '১৮.০ V' } },
        { id: 'opt-d', text: { en: '7.2 V', hi: '7.2 V', bn: '৭.২ V' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'When a conductor moves parallel to magnetic field lines (θ = 0°), sin(0°) = 0. Therefore, e = B · l · v · sin(0°) = 0 V. No magnetic flux lines are cut.',
        hi: 'जब चालक चुंबकीय क्षेत्र के समानांतर गति करता है (θ = 0°), तो sin(0°) = 0 होता है। अतः e = 0 V क्योंकि कोई फ्लक्स रेखा नहीं कटती।',
        bn: 'যখন পরিবাহী চৌম্বক ক্ষেত্রের সমান্তরালে চলে (θ = ০°), তখন sin(০°) = ০। ফলে e = B · l · v · sin(০°) = ০ V। কোনো ফ্লাক্স কর্তন হয় না।'
      }
    },
    {
      id: 'mcq-dyn-2',
      question: {
        en: 'Which rule is universally used to find the direction of dynamically induced current in a generator armature conductor?',
        hi: 'जनरेटर आर्मेचर चालक में प्रेरित धारा की दिशा ज्ञात करने के लिए किस नियम का उपयोग किया जाता है?',
        bn: 'জেনারেটর আর্মেচার পরিবাহীতে আবিষ্ট কারেন্টের দিক নির্ণয়ে কোন নিয়মটি ব্যবহৃত হয়?'
      },
      options: [
        { id: 'opt-a', text: { en: "Fleming's Left-Hand Rule", hi: 'फ्लेमिंग का बायां हाथ नियम', bn: 'ফ্লেমিংয়ের বামহস্ত নিয়ম' } },
        { id: 'opt-b', text: { en: "Fleming's Right-Hand Rule", hi: 'फ्लेमिंग का दायां हाथ नियम', bn: 'ফ্লেমিংয়ের ডানহস্ত নিয়ম' } },
        { id: 'opt-c', text: { en: "Ampere's Circuital Law", hi: 'एम्पीयर का परिपथीय नियम', bn: 'অ্যাম্পিয়ারের সার্কিটাল সূত্র' } },
        { id: 'opt-d', text: { en: "Coulomb's Law", hi: 'कूलॉम का नियम', bn: 'কুলম্বের সূত্র' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: "Fleming's Right-Hand Rule is dedicated to generators (Motional EMF: Thumb = Motion, Index = Field B, Middle = Induced Current I). Fleming's Left-Hand Rule is for motor torque.",
        hi: 'फ्लेमिंग का दायां हाथ नियम जनरेटरों में प्रेरित धारा एवं EMF की दिशा ज्ञात करने के लिए प्रयुक्त होता है।',
        bn: 'ফ্লেমিংয়ের ডানহস্ত নিয়ম জেনারেটরে আবিষ্ট কারেন্টের দিক নির্ণয়ে ব্যবহৃত হয় (বৃদ্ধাঙ্গুলি = গতি, তর্জনী = ক্ষেত্র, মধ্যমা = আবিষ্ট কারেন্ট)।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-dyn-1',
      question: {
        en: 'A 0.5 m long conductor moves at 20 m/s across a magnetic field of 2.0 T at an angle of 30° to the field lines. Find the induced EMF and explain why it is half of the maximum possible EMF.',
        hi: '0.5 मीटर लंबा चालक 2.0 टेस्ला के चुंबकीय क्षेत्र में क्षेत्र रेखाओं से 30° के कोण पर 20 मी/से के वेग से गति करता है। प्रेरित EMF ज्ञात कीजिए और समझाइए कि यह अधिकतम मान का आधा क्यों है।',
        bn: '০.৫ মিটার দীর্ঘ পরিবাহী ২.০ টেসলা চৌম্বক ক্ষেত্রে বলরেখার সাথে ৩০° কোণে ২০ মি/সে বেগে গতিশীল। আবিষ্ট EMF নির্ণয় করো এবং ব্যাখ্যা করো কেন এটি সর্বোচ্চ মানের অর্ধেক।'
      },
      hint: {
        en: 'Use e = B · l · v · sin(30°). Note that sin(30°) = 0.5.',
        hi: 'e = B · l · v · sin(30°) का प्रयोग करें। ध्यान दें कि sin(30°) = 0.5 होता है।',
        bn: 'e = B · l · v · sin(৩০°) সূত্র ব্যবহার করো। sin(৩০°) = ০.৫।'
      },
      answerKey: {
        en: 'e = 2.0 × 0.5 × 20 × sin(30°) = 20 × 0.5 = 10.0 Volts. It is exactly half of e_max (20 V) because sin(30°) = 0.5, meaning only half of the velocity vector effectively cuts perpendicular flux lines.',
        hi: 'e = 2.0 × 0.5 × 20 × 0.5 = 10.0 वोल्ट। यह अधिकतम EMF (20 V) का आधा है क्योंकि sin(30°) = 0.5 होता है।',
        bn: 'e = ২.০ × ০.৫ × ২০ × ০.৫ = ১০.০ ভোল্ট। sin(৩০°) = ০.৫ হওয়ায় বেগের মাত্র অর্ধেক উপাংশ ফ্লাক্স কাটে, ফলে এটি সর্বোচ্চ মান (২০ V) এর অর্ধেক।'
      }
    }
  ]
};
