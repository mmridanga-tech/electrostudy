import { Lesson } from '../types';

export const LESSON_FLEMINGS_RIGHT_HAND_RULE: Lesson = {
  id: 'lsn-ch10-flemings-right-hand-rule',
  topicId: 'ch10-flemings-right-hand-rule',
  chapterId: 'ch-em-induction',
  order: 3,
  title: {
    en: 'Fleming’s Right-Hand Rule & Direction of Induced EMF',
    hi: 'फ्लेमिंग का दाएं हाथ का नियम एवं प्रेरित ईएमएफ की दिशा',
    bn: 'ফ্লেমিংয়ের ডান হস্ত নিয়ম ও আবিষ্ট ইএমএফ-এর অভিমুখ'
  },
  description: {
    en: 'Comprehensive study of Fleming’s Right-Hand Rule (Generator Rule), 3D orthogonal vector triad (Thumb: Motion, Forefinger: Field, Middle finger: Induced Current), motional EMF equation e = B l v sin θ, and generator vs motor action comparison.',
    hi: 'फ्लेमिंग के दाएं हाथ के नियम (जनरेटर नियम), 3D लंबवत सदिश त्रिक (अंगूठा: गति, तर्जनी: चुंबकीय क्षेत्र, मध्यमा: प्रेरित धारा), गतिक ईएमएफ समीकरण e = B l v sin θ, तथा जनरेटर बनाम मोटर क्रिया का तुलनात्मक अध्ययन।',
    bn: 'ফ্লেমিংয়ের ডান হস্ত নিয়ম (জেনারেটর নিয়ম), ত্রিমাত্রিক লম্ব ভেক্টর ত্রয়ী (বৃদ্ধাঙ্গুলি: গতি, তর্জনী: চৌম্বক ক্ষেত্র, মধ্যমা: আবিষ্ট তড়িৎপ্রবাহ), গতিজনিত ইএমএফ সমীকরণ e = B l v sin θ এবং জেনারেটর বনাম মোটর ক্রিয়ার তুলনামূলক পর্যালোচনা।'
  },
  estimatedMinutes: 30,
  easyExplanation: {
    en: "Think of your right hand as an electrical compass for power generators! Stretch out your Thumb, Forefinger, and Middle finger so they all make 90-degree right angles with each other. Point your Forefinger in the direction of the magnetic Field (North to South), point your Thumb in the direction the wire is Moving (Motion), and your Middle finger will naturally reveal the direction the induced Current flows!",
    hi: 'अपने दाएं हाथ को जनरेटर का चुंबकीय कम्पास समझें! अपने अंगूठे, तर्जनी (Forefinger) और मध्यमा (Middle finger) को इस प्रकार फैलाएं कि वे तीनों एक-दूसरे के साथ 90 डिग्री का कोण बनाएं। तर्जनी को चुंबकीय क्षेत्र (उत्तर से दक्षिण) की ओर रखें, अंगूठे को तार की गति की दिशा में रखें, तो आपकी मध्यमा अपने आप प्रेरित धारा की दिशा बताएगी!',
    bn: 'আপনার ডান হাতকে জেনারেটরের দিকনির্ণায়ক কম্পাস হিসেবে ভাবুন! বৃদ্ধাঙ্গুলি, তর্জনী এবং মধ্যমাকে পরস্পরের সাথে সমকোণে (৯০°) প্রসারিত করুন। তর্জনীকে চৌম্বক ক্ষেত্রের দিকে (উত্তর থেকে দক্ষিণ) এবং বৃদ্ধাঙ্গুলিকে তারের গতির দিকে রাখলে মধ্যমা স্বয়ংক্রিয়ভাবে আবিষ্ট তড়িৎপ্রবাহের সঠিক দিক নির্দেশ করবে!'
  },
  detailedExplanation: {
    en: `1. Historical Development & Introduction (John Ambrose Fleming, 1885):
Sir John Ambrose Fleming developed visual mnemonic hand rules to assist electrical engineers and students in determining directional vector cross products for electromagnetic machinery:
- Fleming's Right-Hand Rule: Applied strictly to GENERATORS and dynamically induced motional EMF where mechanical motion cutting a magnetic field produces electrical current.
- Fleming's Left-Hand Rule: Applied strictly to MOTORS where an existing electrical current placed in a magnetic field experiences mechanical force and motion.

2. Geometric Orientation & Vector Definitions:
Hold the Thumb, Forefinger, and Middle finger of the RIGHT hand mutually perpendicular to each other in three dimensions (forming a Cartesian orthogonal coordinate basis [x, y, z]):
- Thumb (Father / Force / Motion): Points along the velocity vector (v) representing the direction of physical motion or thrust of the conductor.
- Forefinger (Mother / Magnetic Field): Points along the magnetic flux density vector (B) directed from North pole to South pole.
- Middle Finger (Child / Current / EMF): Points along the direction of the dynamically induced conventional electric current (I) or induced motional electromotive force (e).

3. Motional EMF Mathematical Formulation:
When a straight conducting wire of active length l moves with velocity v across a uniform magnetic field B at an angle θ with respect to the field lines:
  e = B · l · v · sin(θ)

- Vector Cross-Product Formulation:
  The Lorentz force acting on mobile conduction electrons (charge q = -e) inside the moving conductor is:
  F_m = q · (v × B)
  This magnetic force separates positive and negative charges across the ends of the conductor until an internal electrostatic electric field E_ind balances the magnetic force:
  q · E_ind = - q · (v × B)  ==>  E_ind = -(v × B)
  The total induced line integral EMF across conductor endpoints is:
  e = ∫ (v × B) · dl = (v × B) · l = B · l · v · sin(θ)

4. Angular Orientation Effects:
- Case 1 (θ = 90°, Perpendicular Cutting): When the conductor moves completely perpendicular to the flux lines (sin 90° = 1), the rate of flux cutting is maximized, yielding maximum induced EMF: e_max = B · l · v.
- Case 2 (θ = 0° or 180°, Parallel Motion): When the conductor moves parallel or anti-parallel to the magnetic flux lines (sin 0° = 0), it cuts zero flux lines, inducing zero EMF: e = 0 V.
- Case 3 (Arbitrary Angle θ): The effective velocity component cutting perpendicular to flux lines is v_perp = v · sin(θ).

5. Generator vs Motor Rule Comparison:
- Right-Hand Rule (Generator): Input = Motion (v) + Field (B)  -->  Output = Induced Current (I).
- Left-Hand Rule (Motor): Input = Electric Current (I) + Field (B)  -->  Output = Mechanical Force / Motion (F).`,

    hi: `1. फ्लेमिंग के दाएं हाथ के नियम का परिचय (सर जॉन एम्ब्रोस फ्लेमिंग):
फ्लेमिंग का दाएं हाथ का नियम विशेष रूप से विद्युत जनरेटरों (Generators) में प्रेरित ईएमएफ एवं प्रेरित धारा की दिशा निर्धारित करने के लिए प्रयुक्त होता है:
- दायां हाथ = जनरेटर नियम (यांत्रिक गति + चुंबकीय क्षेत्र → प्रेरित विद्युत धारा)।
- बायां हाथ = मोटर नियम (विद्युत धारा + चुंबकीय क्षेत्र → यांत्रिक बल)।

2. त्रिविमीय (3D) नियम विन्यास:
दाएं हाथ के अंगूठे, तर्जनी और मध्यमा को परस्पर 90° पर लंबवत फैलाएं:
- अंगूठा (Thumb): चालक की गति (Motion / Velocity v) की दिशा दर्शाता है।
- तर्जनी (Forefinger): चुंबकीय क्षेत्र (Magnetic Field B, उत्तर से दक्षिण) की दिशा दर्शाती है।
- मध्यमा (Middle Finger): प्रेरित धारा (Induced Current I) अथवा प्रेरित ईएमएफ (e) की दिशा दर्शाती है।

3. गतिक ईएमएफ (Motional EMF) का गणितीय सूत्र:
जब l लंबाई का चालक B फ्लक्स घनत्व वाले चुंबकीय क्षेत्र में v वेग से क्षेत्र से θ कोण पर गति करता है:
  e = B · l · v · sin(θ)

4. कोण (θ) का प्रभाव:
- θ = 90° (लंबवत गति): sin 90° = 1, अधिकतम ईएमएफ: e_max = B · l · v।
- θ = 0° (समानांतर गति): sin 0° = 0, शून्य ईएमएफ: e = 0 V (कोई बल रेखा नहीं कटती)।
- किसी अन्य कोण θ पर: e = B · l · v · sin(θ)।`,

    bn: `১. ফ্লেমিংয়ের ডান হস্ত নিয়মের ভূমিকা:
স্যার জন অ্যামব্রোজ ফ্লেমিং জেনারেটরে আবিষ্ট তড়িৎপ্রবাহের দিক সহজে নির্ণয়ের জন্য এই নিয়ম প্রণয়ন করেন:
- ডান হস্ত নিয়ম = জেনারেটর নীতি (গতি + ক্ষেত্র → আবিষ্ট তড়িৎপ্রবাহ)।
- বাম হস্ত নিয়ম = মোটর নীতি (তড়িৎপ্রবাহ + ক্ষেত্র → যান্ত্রিক বল)।

২. ত্রিমাত্রিক ওরিয়েন্টেশন:
ডান হাতের বৃদ্ধাঙ্গুলি, তর্জনী ও মধ্যমাকে পরস্পরের সমকোণে (৯০°) প্রসারিত করলে:
- বৃদ্ধাঙ্গুলি (Thumb): পরিবাহীর গতির অভিমুখ (Motion/Velocity v) নির্দেশ করে।
- তর্জনী (Forefinger): চৌম্বক ক্ষেত্রের অভিমুখ (Magnetic Field B, উত্তর থেকে দক্ষিণ) নির্দেশ করে।
- মধ্যমা (Middle Finger): আবিষ্ট তড়িৎপ্রবাহ (Induced Current I) বা আবিষ্ট ইএমএফ-এর অভিমুখ নির্দেশ করে।

৩. গতিজনিত ইএমএফ-এর গাণিতিক সমীকরণ:
একটি l দৈর্ঘ্যের পরিবাহী তার B চৌম্বক ক্ষেত্রে v বেগে θ কোণে গতিশীল হলে আবিষ্ট ইএমএফ:
  e = B · l · v · sin(θ)

৪. কোণ θ এর প্রভাব:
- θ = ৯০° (লম্বভাবে ছেদন): sin ৯০° = ১, সর্বোচ্চ ইএমএফ e_max = B · l · v।
- θ = ০° (সমান্তরাল গতি): sin ০° = ০, আবিষ্ট ইএমএফ e = ০ ভোল্ট।`
  },
  formulas: [
    {
      id: 'f-fleming-motional-emf',
      symbol: 'e',
      expression: 'e = B · l · v · sin(θ)',
      title: {
        en: 'Dynamically Induced Motional EMF',
        hi: 'गतिक रूप से प्रेरित ईएमएफ',
        bn: 'গতিজনিত আবিষ্ট ইএমএফ'
      },
      description: {
        en: 'EMF induced in a straight conductor cutting magnetic flux lines at angle θ',
        hi: 'चुंबकीय बल रेखाओं को θ कोण पर काटने वाले सीधे चालक में प्रेरित ईएमएफ',
        bn: 'চৌম্বক বলরেখাকে θ কোণে ছেদনকারী সরল পরিবাহীতে আবিষ্ট ইএমএফ'
      },
      variables: [
        { symbol: 'e', name: { en: 'Induced Motional EMF (Volts, V)', hi: 'प्रेरित गतिक ईएमएफ (वोल्ट)', bn: 'আবিষ্ট গতিজনিত ইএমএফ (ভোল্ট)' } },
        { symbol: 'B', name: { en: 'Magnetic Flux Density (Tesla, T = Wb/m²)', hi: 'चुंबकीय फ्लक्स घनत्व (Tesla)', bn: 'চৌম্বক ফ্লাক্স ঘনত্ব (Tesla)' } },
        { symbol: 'l', name: { en: 'Active length of conductor in field (m)', hi: 'क्षेत्र में चालक की प्रभावी लंबाई (m)', bn: 'ক্ষেত্রে পরিবাহীর কার্যকর দৈর্ঘ্য (m)' } },
        { symbol: 'v', name: { en: 'Velocity of conductor (m/s)', hi: 'चालक का वेग (m/s)', bn: 'পরিবাহীর বেগ (m/s)' } },
        { symbol: 'θ', name: { en: 'Angle between velocity vector v and field B (degrees)', hi: 'वेग सदिश v तथा चुंबकीय क्षेत्र B के बीच का कोण', bn: 'বেগ ভেক্টর v এবং ক্ষেত্র B-এর মধ্যবর্তী কোণ' } }
      ]
    },
    {
      id: 'f-fleming-vector-lorentz',
      symbol: 'e',
      expression: 'e = ∮ (v × B) · dl',
      title: {
        en: 'Vector Motional EMF (Lorentz Formulation)',
        hi: 'सदिश गतिक ईएमएफ (लोरेंट्ज़ रूप)',
        bn: 'ভেক্টর গতিজনিত ইএমএফ (লোরেন্ৎজ রূপ)'
      },
      description: {
        en: 'General 3D vector line integral of electric field generated by motion across magnetic field',
        hi: 'चुंबकीय क्षेत्र में गति द्वारा उत्पन्न विद्युत क्षेत्र का 3D सदिश रेखा समाकलन',
        bn: 'চৌম্বক ক্ষেত্রে গতির ফলে সৃষ্ট বৈদ্যুতিক ক্ষেত্রের ত্রিমাত্রিক ভেক্টর রেখা সমাকলন'
      },
      variables: [
        { symbol: 'v × B', name: { en: 'Cross product of velocity and magnetic field vector', hi: 'वेग और चुंबकीय क्षेत्र का सदिश गुणनफल', bn: 'বেগ ও চৌম্বক ক্ষেত্র ভেক্টরের ক্রস গুণফল' } },
        { symbol: 'dl', name: { en: 'Differential conductor path vector', hi: 'अवकल चालक पथ सदिश', bn: 'ডিফারেনশিয়াল পরিবাহী পথ ভেক্টর' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-fleming-vector-derivation',
      title: {
        en: 'Electrodynamic Derivation of Motional EMF via Lorentz Force',
        hi: 'लोरेंट्ज़ बल द्वारा गतिक ईएमएफ की विद्युत गतिक व्युत्पत्ति',
        bn: 'লোরেন্ৎজ বলের মাধ্যমে গতিজনিত ইএমএফ-এর তাত্ত্বিক প্রতিপাদন'
      },
      content: {
        en: `Consider a straight conductor of length l oriented along the z-axis, moving with velocity v = v_x i + v_y j in a magnetic field B = B_y j:
1. Every free electron inside the metal possessing charge -q experiences a magnetic Lorentz force:
   F_m = -q (v × B)
2. This force drives conduction electrons toward one end of the conductor, accumulating negative charge at terminal A and leaving a positive charge deficit at terminal B.
3. This charge accumulation creates an electrostatic counter electric field E_ind directed from B to A:
   F_e = -q E_ind
4. At dynamic equilibrium, the net force on internal electrons becomes zero:
   F_net = F_m + F_e = -q (v × B) - q E_ind = 0  ==>  E_ind = -(v × B)
5. The potential difference or Motional EMF induced across the conductor terminals from end 1 to end 2 is:
   e = - ∫_1^2 E_ind · dl = ∫_1^2 (v × B) · dl = (v × B) · l
6. Expanding the scalar triple product:
   e = |v| |B| sin(θ) |l| cos(0°) = B · l · v · sin(θ)

Where θ is the angle between velocity vector v and magnetic field vector B. This proves the classical generator EMF equation directly from first principles!`,
        hi: `B चुंबकीय क्षेत्र में v वेग से गतिमान l लंबाई के चालक पर विचार करें:
1. मुक्त इलेक्ट्रॉनों पर लोरेंट्ज़ बल: F_m = -q (v × B)
2. इलेक्ट्रॉन एक सिरे पर जमा होकर आवेश पृथक्करण उत्पन्न करते हैं जिससे आंतरिक विद्युत क्षेत्र E_ind बनता है।
3. साम्यावस्था पर: E_ind = -(v × B)
4. प्रेरित ईएमएफ: e = ∫ (v × B) · dl = B · l · v · sin(θ)
यह सिद्ध करता है कि लोरेंट्ज़ चुंबकीय बल ही चालकों में गतिक ईएमएफ उत्पन्न करता है।`,
        bn: `চৌম্বক ক্ষেত্র B-তে v বেগে গতিশীল l দৈর্ঘ্যের পরিবাহীতে:
১. মুক্ত ইলেকট্রনে লোরেন্ৎজ বল: F_m = -q (v × B)
২. ইলেকট্রন প্রান্তে জমা হয়ে বিভব পার্থক্য সৃষ্টি করে।
৩. সাম্যাবস্থায়: E_ind = -(v × B)
৪. আবিষ্ট ইএমএফ: e = ∫ (v × B) · dl = B · l · v · sin(θ)
এটি প্রমাণ করে যে লোরেন্ৎজ চৌম্বক বলই জেনারেটরে গতিজনিত ইএমএফ সৃষ্টি করে।`
      },
      schematicId: 'circuit-ch10-fleming-right-hand-rule',
      keyEquations: [
        'F_m = q · (v × B)',
        'e = ∫ (v × B) · dl',
        'e = B · l · v · sin(θ)'
      ]
    }
  ],
  solvedExamples: [
    {
      id: 'ex-fleming-1',
      problem: {
        en: 'An aircraft with a wingspan of 40 meters flies horizontally due North at a speed of 900 km/h in a region where the vertical component of Earth’s magnetic field is 4.0 × 10⁻⁵ Tesla (directed downwards). Calculate the motional electromotive force induced across its wingtips, and determine which wingtip is at higher electrical potential.',
        hi: '40 मीटर विंगस्पैन वाला एक विमान 900 km/h की गति से क्षैतिज रूप से उत्तर दिशा में उड़ता है। उस स्थान पर पृथ्वी के चुंबकीय क्षेत्र का ऊर्ध्वाधर घटक 4.0 × 10⁻⁵ Tesla (नीचे की ओर) है। विमान के पंखों के सिरों के बीच प्रेरित गतिक ईएमएफ की गणना कीजिए तथा बताइए कि कौन सा पंख उच्च विभव पर होगा।',
        bn: '৪০ মিটার উইংস্প্যান বিশিষ্ট একটি উড়োজাহাজ ৯০০ km/h বেগে অনুভূমিকভাবে উত্তর দিকে উড়ে যাচ্ছে। ঐ স্থানে পৃথিবীর চৌম্বক ক্ষেত্রের উলম্ব উপাংশ ৪.০ × ১০⁻⁵ Tesla (নিম্নমুখী)। ডানার দুই প্রান্তের মধ্যবর্তী আবিষ্ট গতিজনিত ইএমএফ নির্ণয় করুন এবং কোন ডানা উচ্চ বিভবে থাকবে তা চিহ্নিত করুন।'
      },
      givenValues: {
        'Conductor Length (l)': '40 m (wingspan)',
        'Speed (v)': '900 km/h = 900 × (1000 / 3600) = 250 m/s',
        'Vertical Field (B_v)': '4.0 × 10⁻⁵ T',
        'Angle (θ)': '90° (perpendicular cutting)'
      },
      solution: {
        en: `Step 1: Convert velocity from km/h to m/s:
  v = 900 × (5 / 18) = 250 m/s.

Step 2: Apply the Motional EMF equation:
  e = B · l · v · sin(θ)
  e = (4.0 × 10⁻⁵ T) × (40 m) × (250 m/s) × sin(90°)
  e = (4.0 × 10⁻⁵) × (10,000) × 1.0 = 0.40 Volts.

Step 3: Determine Potential Polarity using Fleming's Right-Hand Rule:
  - Forefinger (Field B) points DOWNWARDS into the ground.
  - Thumb (Motion v) points NORTHWARDS.
  - Middle finger (Induced current / positive charge push) points toward the EAST (Right wing).
  - Therefore, positive charge is driven to the Eastern wingtip (Starboard), making the Eastern wingtip at higher electrical potential.`,
        hi: `चरण 1: वेग को m/s में बदलें:
  v = 900 × (5/18) = 250 m/s।

चरण 2: गतिक ईएमएफ सूत्र लागू करें:
  e = B · l · v · sin(90°) = (4.0 × 10⁻⁵) × 40 × 250 × 1 = 0.40 वोल्ट।

चरण 3: फ्लेमिंग के दाएं हाथ के नियम द्वारा ध्रुवता:
  - तर्जनी: नीचे की ओर (पृथ्वी में)।
  - अंगूठा: उत्तर दिशा में।
  - मध्यमा: पूर्व दिशा (दाएं पंख) की ओर।
  अतः पूर्वी पंख का सिरा उच्च विभव पर होगा।`,
        bn: `ধাপ ১: বেগের রূপান্তর:
  v = ৯০০ × (৫/১৮) = ২৫০ m/s।

ধাপ ২: গতিজনিত ইএমএফ নির্ণয়:
  e = B · l · v · sin(৯০°) = (৪.০ × ১০⁻⁵) × ৪০ × ২৫০ × ১ = ০.৪০ ভোল্ট।

ধাপ ৩: ফ্লেমিংয়ের ডান হস্ত নিয়ম দ্বারা পোলারিটি:
  - তর্জনী: মাটির দিকে (নিম্নমুখী)।
  - বৃদ্ধাঙ্গুলি: উত্তর দিকে।
  - মধ্যমা: পূর্ব দিকে (ডান ডানা)।
  সুতরাং পূর্ব দিকের ডানার প্রান্ত উচ্চ বৈদ্যুতিক বিভবে থাকবে।`
      },
      finalAnswer: {
        en: 'The induced EMF is 0.40 V (400 mV), with the East wingtip at higher potential.',
        hi: 'प्रेरित ईएमएफ 0.40 V (400 mV) है तथा पूर्वी पंख उच्च विभव पर होगा।',
        bn: 'আবিষ্ট ইএমএফ হলো ০.৪০ V এবং পূর্ব ডানা উচ্চ বিভবে থাকবে।'
      }
    },
    {
      id: 'ex-fleming-2',
      problem: {
        en: 'A 0.50 m long conductor moves with a velocity of 8.0 m/s in a uniform magnetic field of 1.5 Tesla. Calculate the induced EMF when the conductor moves: (a) perpendicular to the field (θ = 90°), (b) at an angle of 30° to the field, and (c) parallel to the field (θ = 0°).',
        hi: '1.5 Tesla के एकसमान चुंबकीय क्षेत्र में 0.50 m लंबा चालक 8.0 m/s के वेग से गति करता है। प्रेरित ईएमएफ की गणना कीजिए जब चालक: (a) क्षेत्र के लंबवत हो (θ = 90°), (b) क्षेत्र से 30° के कोण पर गति करे, तथा (c) क्षेत्र के समानांतर गति करे (θ = 0°)।',
        bn: '১.৫ Tesla সুষম চৌম্বক ক্ষেত্রে ০.৫০ m দৈর্ঘ্যের একটি পরিবাহী ৮.০ m/s বেগে গতিশীল। আবিষ্ট ইএমএফ নির্ণয় করুন যখন পরিবাহীটি: (ক) ক্ষেত্রের লম্বভাবে চলে (θ = ৯০°), (খ) ক্ষেত্রের সাথে ৩০° কোণে চলে, এবং (গ) ক্ষেত্রের সমান্তরালে চলে (θ = ০°)।'
      },
      givenValues: {
        'Length (l)': '0.50 m',
        'Velocity (v)': '8.0 m/s',
        'Field (B)': '1.5 T'
      },
      solution: {
        en: `(a) Perpendicular motion (θ = 90°):
  e = B · l · v · sin(90°) = 1.5 T × 0.50 m × 8.0 m/s × 1.0 = 6.0 Volts.

(b) Motion at angle θ = 30°:
  e = B · l · v · sin(30°) = 1.5 T × 0.50 m × 8.0 m/s × 0.5 = 3.0 Volts.

(c) Parallel motion (θ = 0°):
  e = B · l · v · sin(0°) = 1.5 T × 0.50 m × 8.0 m/s × 0 = 0.0 Volts.`,
        hi: `(a) लंबवत गति (θ = 90°):
  e = 1.5 × 0.50 × 8.0 × 1.0 = 6.0 वोल्ट।

(b) 30° के कोण पर (θ = 30°):
  e = 1.5 × 0.50 × 8.0 × 0.5 = 3.0 वोल्ट।

(c) समानांतर गति (θ = 0°):
  e = 1.5 × 0.50 × 8.0 × 0 = 0.0 वोल्ट।`,
        bn: `(ক) লম্ব গতি (θ = ৯০°):
  e = ১.৫ × ০.৫০ × ৮.০ × ১.০ = ৬.০ ভোল্ট।

(খ) ৩০° কোণে গতি (θ = ৩০°):
  e = ১.৫ × ০.৫০ × ৮.০ × ০.৫ = ৩.০ ভোল্ট।

(গ) সমান্তরাল গতি (θ = ০°):
  e = ১.৫ × ০.৫০ × ৮.০ × ০ = ০.০ ভোল্ট।`
      },
      finalAnswer: {
        en: '(a) 6.0 V, (b) 3.0 V, (c) 0.0 V.',
        hi: '(a) 6.0 V, (b) 3.0 V, (c) 0.0 V।',
        bn: '(ক) ৬.০ V, (খ) ৩.০ V, (গ) ০.০ V।'
      }
    }
  ],
  workedExamples: [
    {
      id: 'wex-fleming-1',
      problem: {
        en: 'A 0.50 m long conductor moves with a velocity of 8.0 m/s in a uniform magnetic field of 1.5 Tesla at θ = 30°. Calculate the induced EMF.',
        hi: '1.5 T के चुंबकीय क्षेत्र में 0.50 m लंबा चालक 8.0 m/s के वेग से 30° के कोण पर गति करता है। प्रेरित ईएमएफ ज्ञात कीजिए।',
        bn: '১.৫ T ক্ষেত্রে ০.৫০ m পরিবাহী ৮.০ m/s বেগে ৩০° কোণে গতিশীল হলে আবিষ্ট ইএমএফ কত?'
      },
      givenValues: {
        'l': '0.50 m',
        'v': '8.0 m/s',
        'B': '1.5 T',
        'θ': '30°'
      },
      solution: {
        en: 'e = B l v sin(θ) = 1.5 × 0.50 × 8.0 × sin(30°) = 6.0 × 0.5 = 3.0 V.',
        hi: 'e = 1.5 × 0.50 × 8.0 × 0.5 = 3.0 V।',
        bn: 'e = ১.৫ × ০.৫০ × ৮.০ × ০.৫ = ৩.০ V।'
      },
      finalAnswer: {
        en: 'e = 3.0 V',
        hi: 'e = 3.0 V',
        bn: 'e = ৩.০ V'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Synchronous Turbo-Alternators in Power Plants: High-speed rotating rotor poles sweep magnetic field lines across stationary stator conductors, inducing massive grid voltages (e.g. 11 kV to 24 kV).',
      'Automotive DC Alternators: The vehicle engine spins a rotor coil whose rotating field induces 3-phase AC voltage in the stator, which is rectified to 14 V DC to charge the car battery.',
      'Bicycle Bottle Dynamos: A friction wheel against the tire spins a permanent magnet past iron-cored coils, inducing AC lighting voltage based on Fleming’s Right-Hand Rule.',
      'Electromagnetic Flowmeters: Conductive liquid (like blood, chemical slurry, or water) flows through an external magnetic field, generating a transverse motional EMF proportional to flow velocity.',
      'Aircraft Wing Potential Sensors: Measuring the motional voltage induced across an airplane fuselage during flight through Earth’s geomagnetic field.'
    ],
    hi: [
      'विद्युत संयंत्रों में सिंक्रोनस टर्बो-अल्टरनेटर: घूमते हुए रोटर पोल स्टेटर चालकों में फ्लक्स काटकर विशाल ग्रिड वोल्टेज (11 kV से 24 kV) प्रेरित करते हैं।',
      'ऑटोमोबाइल डीसी अल्टरनेटर: कार का इंजन रोटर को घुमाता है जिससे स्टेटर में 3-फेज एसी वोल्टेज प्रेरित होता है, जो कार की बैटरी चार्ज करता है।',
      'साइकिल बोतल डायनेमो: पहिया घूमने से चुंबक घूमता है और कुंडली में प्रकाश के लिए वोल्टेज प्रेरित करता है।',
      'विद्युत चुंबकीय प्रवाहमापी (Flowmeters): चुंबकीय क्षेत्र से गुजरने वाले चालक तरल में वेग के समानुपाती गतिक ईएमएफ बनता है जिससे प्रवाह की गति मापी जाती है।',
      'विमान पंख विभव संवेदक: पृथ्वी के भू-चुंबकीय क्षेत्र में उड़ते समय विमान के पंखों पर बने वोल्टेज को मापना।'
    ],
    bn: [
      'বিদ্যুৎকেন্দ্রের সিনক্রোনাস টার্বো-অল্টারনেটর: ঘূর্ণনশীল রোটর পোল স্ট্যাটর পরিবাহীতে ফ্লাক্স ছেদন করে গ্রিডের বিশাল ভোল্টেজ (১১ kV - ২৪ kV) উৎপন্ন করে।',
      'গাড়ির অল্টারনেটর: গাড়ির ইঞ্জিন রোটর ঘুরিয়ে ৩-ফেজ এসি তৈরি করে যা রেকটিফায়ার দ্বারা ব্যাটারি চার্জ করে।',
      'সাইকেল ডায়নামো: চাকার ঘূর্ণনে চুম্বক ঘুরে তারকুণ্ডলীতে আলো জ্বালানোর ভোল্টেজ আবিষ্ট করে।',
      'তড়িৎচৌম্বকীয় ফ্লোমিটার: চৌম্বক ক্ষেত্রে পরিবাহী তরল প্রবাহিত হলে বেগের সমানুপাতিক গতিজনিত ইএমএফ তৈরি করে প্রবাহ হার পরিমাপ করে।',
      'উড়োজাহাজের উইং পোটেনশিয়াল সেন্সর: ভূ-চৌম্বক ক্ষেত্রে ওড়ার সময় ডানায় আবিষ্ট ভোল্টেজ মনিটর করা।'
    ]
  },
  importantPoints: {
    en: [
      'Fleming’s Right-Hand Rule is exclusively for Generators: Remember mnemonic "R-G" (Right-Generator) and "L-M" (Left-Motor).',
      'All three fingers must be mutually perpendicular (90°): Any non-perpendicular alignment leads to erroneous vector direction predictions.',
      'Peak induced EMF occurs at θ = 90°: Motional EMF e = B l v sin(θ) reaches its maximum value when the conductor slices directly across the flux lines.',
      'Zero EMF occurs during parallel motion (θ = 0°): When sliding along the lines of force, no lines are cut, resulting in e = 0 V.'
    ],
    hi: [
      'फ्लेमिंग का दायां हाथ नियम केवल जनरेटर के लिए है: याद रखें दायां = जनरेटर (Right = Generator) और बायां = मोटर (Left = Motor)।',
      'तीनों अंगुलियां परस्पर 90° पर लंबवत होनी चाहिए।',
      'अधिकतम ईएमएफ θ = 90° पर होता है: जब चालक फ्लक्स रेखाओं को लंबवत काटता है तो e_max = B l v होता है।',
      'समानांतर गति (θ = 0°) पर शून्य ईएमएफ: जब चालक रेखाओं के समानांतर चलता है, तो कोई फ्लक्स नहीं कटता (e = 0)।'
    ],
    bn: [
      'ফ্লেমিংয়ের ডান হস্ত নিয়ম শুধুমাত্র জেনারেটরের জন্য প্রযোজ্য: মনে রাখুন ডান = জেনারেটর এবং বাম = মোটর।',
      'তিনটি আঙুলই পরস্পরের সাথে ৯০° সমকোণে থাকতে হবে।',
      'সর্বোচ্চ ইএমএফ θ = ৯০° এ ঘটে: পরিবাহী লম্বভাবে বলরেখা ছেদন করলে e_max = B l v হয়।',
      'সমান্তরাল গতিতে (θ = ০°) ইএমএফ শূন্য: বলরেখার সমান্তরালে চললে কোনো বলরেখা কাটা পড়ে না (e = ০ V)।'
    ]
  },
  commonMistakes: {
    en: [
      'Swapping Left and Right hands: Using the left hand instead of the right hand gives the exact opposite current direction.',
      'Confusing Forefinger and Middle finger: Forefinger is always Field (B); Middle finger is always Current (I).',
      'Using the full conductor length instead of active length: Only the portion of the wire physically immersed inside the magnetic field generates motional EMF.',
      'Forgetting the sin(θ) factor: Calculating e = B l v when the conductor moves at an oblique angle (e.g. 45° or 30°) rather than perpendicular.'
    ],
    hi: [
      'दाएं और बाएं हाथ में गलती: दाएं हाथ की जगह बाएं हाथ का प्रयोग करने से धारा की दिशा ठीक उल्टी प्राप्त होती है।',
      'तर्जनी और मध्यमा में भ्रम: तर्जनी सदैव चुंबकीय क्षेत्र (B) और मध्यमा सदैव धारा (I) दर्शाती है।',
      'सक्रिय लंबाई की जगह कुल लंबाई लेना: केवल वही भाग ईएमएफ बनाता है जो चुंबकीय क्षेत्र के अंदर मौजूद है।',
      'sin(θ) घटक भूल जाना: जब चालक तिरछा चल रहा हो तो sin(θ) का गुणा न करना।'
    ],
    bn: [
      'ডান ও বাম হাত উল্টে ফেলা: জেনারেটরে ডান হাতের বদলে বাম হাত ব্যবহার করলে বিপরীত অভিমুখ পাওয়া যায়।',
      'তর্জনী ও মধ্যমায় ভুল করা: তর্জনী সর্বদা চৌম্বক ক্ষেত্র (B) এবং মধ্যমা সর্বদা আবিষ্ট প্রবাহ (I)।',
      'কার্যকর দৈর্ঘ্যের বদলে মোট দৈর্ঘ্য ব্যবহার করা: কেবল চৌম্বক ক্ষেত্রের ভেতরের তারের অংশটুকুই ইএমএফ সৃষ্টি করে।',
      'sin(θ) উপাদান ভুলে যাওয়া: তির্যক গতির ক্ষেত্রে sin(θ) গুণ না করা।'
    ]
  },
  mcqs: [
    {
      id: "mcq-ch10-l3-1",
      question: {
        en: "In Fleming’s Right-Hand Rule, what does the Forefinger represent?",
        hi: "फ्लेमिंग के दाएं हाथ के नियम में तर्जनी (Forefinger) क्या दर्शाती है?",
        bn: "ফ্লেমিংয়ের ডান হস্ত নিয়মে তর্জনী কী নির্দেশ করে?"
      },
      options: [
        { id: "opt-1", text: { en: "Direction of Motion of conductor", hi: "चालक की गति की दिशा", bn: "পরিবাহীর গতির অভিমুখ" } },
        { id: "opt-2", text: { en: "Direction of Magnetic Field (North to South)", hi: "चुंबकीय क्षेत्र की दिशा (उत्तर से दक्षिण)", bn: "চৌম্বক ক্ষেত্রের অভিমুখ (উত্তর থেকে দক্ষিণ)" } },
        { id: "opt-3", text: { en: "Direction of Induced Current", hi: "प्रेरित धारा की दिशा", bn: "আবিষ্ট তড়িৎপ্রবাহের অভিমুখ" } },
        { id: "opt-4", text: { en: "Direction of Gravitational force", hi: "गुरुत्वाकर्षण बल की दिशा", bn: "অভিকর্ষজ বলের অভিমুখ" } }
      ],
      correctOptionId: "opt-2",
      explanation: {
        en: "In Fleming’s Right-Hand Rule: Forefinger = Field (B), Thumb = Motion (v), Middle finger = Induced Current (I).",
        hi: "फ्लेमिंग के नियम में: तर्जनी = चुंबकीय क्षेत्र (B), अंगूठा = गति (v), मध्यमा = प्रेरित धारा (I)।",
        bn: "ফ্লেমিংয়ের নিয়মে: তর্জনী = চৌম্বক ক্ষেত্র (B), বৃদ্ধাঙ্গুলি = গতি (v), মধ্যমা = আবিষ্ট প্রবাহ (I)।"
      }
    },
    {
      id: "mcq-ch10-l3-2",
      question: {
        en: "Under which condition is the motional EMF induced in a moving conductor exactly ZERO?",
        hi: "किस स्थिति में गतिमान चालक में प्रेरित गतिक ईएमएफ ठीक शून्य (Zero) होता है?",
        bn: "কোন অবস্থায় গতিশীল পরিবাহীতে আবিষ্ট গতিজনিত ইএমএফ ঠিক শূন্য হয়?"
      },
      options: [
        { id: "opt-1", text: { en: "When the conductor moves perpendicular to the magnetic field (θ = 90°)", hi: "जब चालक चुंबकीय क्षेत्र के लंबवत चलता है (θ = 90°)", bn: "যখন পরিবাহী চৌম্বক ক্ষেত্রের লম্বভাবে চলে (θ = ৯০°)" } },
        { id: "opt-2", text: { en: "When the conductor moves parallel to the magnetic field lines (θ = 0°)", hi: "जब चालक चुंबकीय क्षेत्र रेखाओं के समानांतर चलता है (θ = 0°)", bn: "যখন পরিবাহী চৌম্বক বলরেখার সমান্তরালে চলে (θ = ০°)" } },
        { id: "opt-3", text: { en: "When the magnetic field density is 2.0 Tesla", hi: "जब चुंबकीय फ्लक्स घनत्व 2.0 Tesla हो", bn: "যখন চৌম্বক ফ্লাক্স ঘনত্ব ২.০ Tesla হয়" } },
        { id: "opt-4", text: { en: "When the velocity of the conductor is 100 m/s", hi: "जब चालक का वेग 100 m/s हो", bn: "যখন পরিবাহীর বেগ ১০০ m/s হয়" } }
      ],
      correctOptionId: "opt-2",
      explanation: {
        en: "When moving parallel (θ = 0°), sin(0°) = 0, so e = B l v sin(0°) = 0 V because no magnetic lines of force are cut.",
        hi: "समानांतर गति (θ = 0°) में sin(0°) = 0 होता है, अतः कोई फ्लक्स रेखा नहीं कटती और प्रेरित ईएमएफ शून्य होता है।",
        bn: "সমান্তরাল গতিতে (θ = ০°) sin(০°) = ০ হওয়ায় কোনো বলরেখা ছেদন হয় না, ফলে আবিষ্ট ইএমএফ শূন্য হয়।"
      }
    },
    {
      id: "mcq-ch10-l3-3",
      question: {
        en: "A straight wire of length 2 meters moves at a speed of 10 m/s perpendicular to a uniform magnetic field of 0.5 Tesla. The induced EMF is:",
        hi: "2 मीटर लंबा एक सीधा तार 0.5 Tesla के एकसमान चुंबकीय क्षेत्र के लंबवत 10 m/s की गति से चलता है। प्रेरित ईएमएफ होगा:",
        bn: "২ মিটার দীর্ঘ একটি সোজা তার ০.৫ Tesla সুষম চৌম্বক ক্ষেত্রের লম্বভাবে ১০ m/s বেগে গতিশীল। আবিষ্ট ইএমএফ কত?"
      },
      options: [
        { id: "opt-1", text: { en: "5.0 Volts", hi: "5.0 वोल्ट", bn: "৫.০ ভোল্ট" } },
        { id: "opt-2", text: { en: "10.0 Volts", hi: "10.0 वोल्ट", bn: "১০.০ ভোল্ট" } },
        { id: "opt-3", text: { en: "20.0 Volts", hi: "20.0 वोल्ट", bn: "২০.০ ভোল্ট" } },
        { id: "opt-4", text: { en: "0.1 Volts", hi: "0.1 वोल्ट", bn: "০.১ ভোল্ট" } }
      ],
      correctOptionId: "opt-2",
      explanation: {
        en: "e = B · l · v · sin(90°) = 0.5 T × 2 m × 10 m/s × 1.0 = 10.0 Volts.",
        hi: "e = B · l · v · sin(90°) = 0.5 × 2 × 10 × 1 = 10.0 वोल्ट।",
        bn: "e = B · l · v · sin(৯০°) = ০.৫ × ২ × ১০ × ১ = ১০.০ ভোল্ট।"
      }
    },
    {
      id: "mcq-ch10-l03-04",
      question: {
        en: "Fleming’s Right-Hand Rule is specifically applied to find the direction of induced current in which type of electrical apparatus?",
        hi: "फ्लेमिंग का दायां हाथ नियम विशेष रूप से किस प्रकार के विद्युत उपकरण में प्रेरित धारा की दिशा ज्ञात करने के लिए लगाया जाता है?",
        bn: "ফ্লেমিংয়ের ডান হস্ত নিয়ম বিশেষভাবে কোন ধরনের বৈদ্যুতিক যন্ত্রে আবিষ্ট কারেন্টের দিক নির্ণয়ে ব্যবহৃত হয়?"
      },
      options: [
        { id: "opt-1", text: { en: "Electrical generators (dynamos and alternators)", hi: "विद्युत जनरेटर (डायनेमो और अल्टरनेटर)", bn: "বৈদ্যুতিক জেনারেটর (ডায়নামো ও অল্টারনেটর)" } },
        { id: "opt-2", text: { en: "Electric motors providing mechanical drive", hi: "विद्युत मोटरें जो यांत्रिक गति देती हैं", bn: "বৈদ্যুতিক মোটর যা যান্ত্রিক ঘূর্ণন তৈরি করে" } },
        { id: "opt-3", text: { en: "Electrostatic air filters", hi: "स्थिरवैद्युत वायु शोधक", bn: "ইলেক্ট্রোস্ট্যাটিক এয়ার ফিল্টার" } },
        { id: "opt-4", text: { en: "Chemical lead-acid storage batteries", hi: "रासायनिक लेड-एसिड बैटरी", bn: "রাসায়নিক লেড-অ্যাসিড ব্যাটারি" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Fleming’s Right-Hand Rule is specifically designed for generators (dynamo rule), determining induced current from conductor motion across a magnetic field.",
        hi: "फ्लेमिंग का दायां हाथ नियम विशेष रूप से जनरेटर (डायनेमो) के लिए बनाया गया है, जो गति और चुंबकीय क्षेत्र से प्रेरित धारा की दिशा बताता है।",
        bn: "ফ্লেমিংয়ের ডান হস্ত নিয়মটি বিশেষভাবে জেনারেটরের ক্ষেত্রে প্রযোজ্য, যা চৌম্বক ক্ষেত্রে পরিবাহীর গতির ফলে সৃষ্ট আবিষ্ট কারেন্টের দিক নির্দেশ করে।"
      }
    },
    {
      id: "mcq-ch10-l03-05",
      question: {
        en: "When setting up Fleming’s Right-Hand Rule, the relative spatial orientation between the thumb, forefinger, and middle finger must be:",
        hi: "फ्लेमिंग के दाएं हाथ के नियम को लागू करते समय अंगूठे, तर्जनी और मध्यमा के बीच पारस्परिक स्थिति क्या होनी चाहिए?",
        bn: "ফ্লেমিংয়ের ডান হস্ত নিয়ম প্রয়োগের সময় বৃদ্ধাঙ্গুলি, তর্জনী ও মধ্যমার মধ্যকার পারস্পরিক অবস্থান কেমন হতে হয়?"
      },
      options: [
        { id: "opt-1", text: { en: "Mutually perpendicular (at right angles, 90° to each other)", hi: "परस्पर लंबवत (एक-दूसरे से 90° के समकोण पर)", bn: "পরস্পর সমকোণে (একে অপরের সাথে ৯০° কোণে)" } },
        { id: "opt-2", text: { en: "Parallel in the same plane at 45°", hi: "एक ही तल में 45° पर समानांतर", bn: "একই তলে ৪৫° কোণে সমান্তরাল" } },
        { id: "opt-3", text: { en: "Folded tightly into a closed fist", hi: "मुट्ठी के रूप में कसकर बंद", bn: "মুষ্টিবদ্ধ অবস্থায় ভাঁজ করা" } },
        { id: "opt-4", text: { en: "Collinear along a single straight axis", hi: "एक ही सीधी रेखा के अनुदिश", bn: "একটি সরলরেখা বরাবর" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "The thumb (motion), forefinger (magnetic field), and middle finger (induced current) must be held mutually orthogonal at 90° angles to represent 3D Cartesian coordinates.",
        hi: "अंगूठा (गति), तर्जनी (चुंबकीय क्षेत्र) और मध्यमा (प्रेरित धारा) तीनों को परस्पर 90° के समकोण पर रखना अनिवार्य है।",
        bn: "বৃদ্ধাঙ্গুলি (গতি), তর্জনী (চৌম্বক ক্ষেত্র) এবং মধ্যমা (আবিষ্ট কারেন্ট)-এই তিনটিকে পরস্পরের সাথে সমকোণে (৯০°) ধরে রাখতে হয়।"
      }
    },
    {
      id: "mcq-ch10-l03-06",
      question: {
        en: "A horizontal conductor aligned North-South is moved vertically upwards through a uniform horizontal magnetic field pointing from East to West. In what direction does induced current flow?",
        hi: "उत्तर-दक्षिण दिशा में रखे एक क्षैतिज चालक को पूर्व से पश्चिम की ओर दिष्ट समान चुंबकीय क्षेत्र में लंबवत ऊपर की ओर ले जाया जाता है। प्रेरित धारा किस दिशा में बहेगी?",
        bn: "উত্তর-দক্ষিণ বরাবর রাখা একটি অনুভূমিক পরিবাহীকে পূর্ব থেকে পশ্চিমে ক্রিয়াশীল সুষম চৌম্বক ক্ষেত্রে খাড়া ওপরের দিকে গতিশীল করা হলো। আবিষ্ট কারেন্ট কোন দিকে প্রবাহিত হবে?"
      },
      options: [
        { id: "opt-1", text: { en: "From South to North along the conductor", hi: "चालक में दक्षिण से उत्तर की ओर", bn: "পরিবাহীর মধ্য দিয়ে দক্ষিণ থেকে উত্তর দিকে" } },
        { id: "opt-2", text: { en: "From North to South along the conductor", hi: "चालक में उत्तर से दक्षिण की ओर", bn: "পরিবাহীর মধ্য দিয়ে উত্তর থেকে দক্ষিণ দিকে" } },
        { id: "opt-3", text: { en: "Vertically downward into the ground", hi: "लंबवत नीचे जमीन की ओर", bn: "খাড়া নিচের দিকে মাটির ভেতরে" } },
        { id: "opt-4", text: { en: "Directly toward the East", hi: "सीधे पूर्व दिशा की ओर", bn: "সরাসরি পূর্ব দিকে" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Using Fleming’s Right-Hand Rule: Thumb points Upwards (motion), Forefinger points West (field). The middle finger naturally points North (induced current flows from South to North).",
        hi: "फ्लेमिंग के दाएं हाथ के नियम से: अंगूठा ऊपर (गति), तर्जनी पश्चिम (क्षेत्र)। तब मध्यमा उत्तर की ओर इंगित करती है (धारा दक्षिण से उत्तर की ओर बहेगी)।",
        bn: "ফ্লেমিংয়ের ডান হস্ত নিয়ম অনুসারে: বৃদ্ধাঙ্গুলি ওপরের দিকে (গতি), তর্জনী পশ্চিম দিকে (ক্ষেত্র)। তখন মধ্যমা উত্তর নির্দেশ করে (কারেন্ট দক্ষিণ থেকে উত্তরে প্রবাহিত হবে)।"
      }
    },
    {
      id: "mcq-ch10-l03-07",
      question: {
        en: "What is the primary fundamental distinction between Fleming’s Right-Hand Rule and Fleming’s Left-Hand Rule?",
        hi: "फ्लेमिंग के दाएं हाथ के नियम और बाएं हाथ के नियम के बीच मुख्य मौलिक अंतर क्या है?",
        bn: "ফ্লেমিংয়ের ডান হস্ত নিয়ম এবং বাম হস্ত নিয়মের মধ্যকার প্রধান মৌলিক পার্থক্য কোনটি?"
      },
      options: [
        { id: "opt-1", text: { en: "Right-Hand Rule determines induced current in generators; Left-Hand Rule determines mechanical force in motors", hi: "दायां हाथ नियम जनरेटर में प्रेरित धारा ज्ञात करता है; बायां हाथ नियम मोटर में यांत्रिक बल ज्ञात करता है", bn: "ডান হস্ত নিয়ম জেনারেটরে আবিষ্ট কারেন্ট নির্ণয় করে; বাম হস্ত নিয়ম মোটরে যান্ত্রিক বল নির্ণয় করে" } },
        { id: "opt-2", text: { en: "Right-Hand Rule applies only to DC; Left-Hand Rule applies only to AC", hi: "दायां हाथ नियम केवल डीसी पर और बायां हाथ केवल एसी पर लागू होता है", bn: "ডান হস্ত নিয়ম শুধু ডিসিতে এবং বাম হস্ত শুধু এসিতে প্রযোজ্য" } },
        { id: "opt-3", text: { en: "Right-Hand Rule is for electrostatic charges; Left-Hand Rule is for magnetic poles", hi: "दायां हाथ नियम आवेशों के लिए है और बायां हाथ चुंबकीय ध्रुवों के लिए", bn: "ডান হস্ত নিয়ম স্থির আধানের জন্য এবং বাম হস্ত চৌম্বক মেরুর জন্য" } },
        { id: "opt-4", text: { en: "They are completely identical and can be used interchangeably", hi: "दोनों बिल्कुल समान हैं और एक-दूसरे के स्थान पर प्रयुक्त हो सकते हैं", bn: "উভয় নিয়ম সম্পূর্ণ অভিন্ন এবং পারস্পরিকভাবে পরিবর্তনযোগ্য" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Fleming’s Right-Hand Rule governs electrical generation (finding induced current), whereas Fleming’s Left-Hand Rule governs motorized electromagnetic actuation (finding mechanical thrust).",
        hi: "दायां हाथ नियम जनरेटर प्रभाव (विद्युत उत्पादन) के लिए है, जबकि बायां हाथ नियम मोटर प्रभाव (यांत्रिक बल) के लिए है।",
        bn: "ফ্লেমিংয়ের ডান হস্ত নিয়ম জেনারেটরের ক্ষেত্রে (কারেন্ট উৎপাদন) এবং বাম হস্ত নিয়ম মোটরের ক্ষেত্রে (যান্ত্রিক বল) প্রযোজ্য।"
      }
    },
    {
      id: "mcq-ch10-l03-08",
      question: {
        en: "A straight wire of active length 0.4 m moves at 15 m/s through a uniform magnetic field B = 0.8 T at an angle of 30° to the flux lines. What is the induced EMF?",
        hi: "0.4 m सक्रिय लंबाई का एक सीधा तार 0.8 T के समान चुंबकीय क्षेत्र में फ्लक्स रेखाओं से 30° के कोण पर 15 m/s से गति करता है। प्रेरित EMF क्या है?",
        bn: "০.৪ মিটার কার্যকরী দৈর্ঘ্যের একটি সোজা তার ০.৮ টেসলার সুষম চৌম্বক ক্ষেত্রে ফ্লাক্স রেখার সাথে ৩০° কোণে ১৫ m/s বেগে গতিশীল। আবিষ্ট EMF কত?"
      },
      options: [
        { id: "opt-1", text: { en: "4.8 V", hi: "4.8 V", bn: "৪.৮ V" } },
        { id: "opt-2", text: { en: "2.4 V", hi: "2.4 V", bn: "২.৪ V" } },
        { id: "opt-3", text: { en: "1.2 V", hi: "1.2 V", bn: "১.২ V" } },
        { id: "opt-4", text: { en: "0.6 V", hi: "0.6 V", bn: "০.৬ V" } }
      ],
      correctOptionId: "opt-2",
      explanation: {
        en: "e = B · l · v · sin(θ) = 0.8 T × 0.4 m × 15 m/s × sin(30°) = 4.8 × 0.5 = 2.4 V.",
        hi: "e = B · l · v · sin(θ) = 0.8 × 0.4 × 15 × sin(30°) = 4.8 × 0.5 = 2.4 V।",
        bn: "e = B · l · v · sin(θ) = ০.৮ × ০.৪ × ১৫ × sin(৩০°) = ৪.৮ × ০.৫ = ২.৪ V।"
      }
    }
  ],
  mcqQuestions: [
    {
      id: "mcq-ch10-l3-1",
      question: {
        en: "In Fleming’s Right-Hand Rule, what does the Forefinger represent?",
        hi: "फ्लेमिंग के दाएं हाथ के नियम में तर्जनी (Forefinger) क्या दर्शाती है?",
        bn: "ফ্লেমিংয়ের ডান হস্ত নিয়মে তর্জনী কী নির্দেশ করে?"
      },
      options: [
        { id: "opt-1", text: { en: "Direction of Motion of conductor", hi: "चालक की गति की दिशा", bn: "পরিবাহীর গতির অভিমুখ" } },
        { id: "opt-2", text: { en: "Direction of Magnetic Field (North to South)", hi: "चुंबकीय क्षेत्र की दिशा (उत्तर से दक्षिण)", bn: "চৌম্বক ক্ষেত্রের অভিমুখ (উত্তর থেকে দক্ষিণ)" } },
        { id: "opt-3", text: { en: "Direction of Induced Current", hi: "प्रेरित धारा की दिशा", bn: "আবিষ্ট তড়িৎপ্রবাহের অভিমুখ" } },
        { id: "opt-4", text: { en: "Direction of Gravitational force", hi: "गुरुत्वाकर्षण बल की दिशा", bn: "অভিকর্ষজ বলের অভিমুখ" } }
      ],
      correctOptionId: "opt-2",
      explanation: {
        en: "In Fleming’s Right-Hand Rule: Forefinger = Field (B), Thumb = Motion (v), Middle finger = Induced Current (I).",
        hi: "फ्लेमिंग के नियम में: तर्जनी = चुंबकीय क्षेत्र (B), अंगूठा = गति (v), मध्यमा = प्रेरित धारा (I)।",
        bn: "ফ্লেমিংয়ের নিয়মে: তর্জনী = চৌম্বক ক্ষেত্র (B), বৃদ্ধাঙ্গুলি = গতি (v), মধ্যমা = আবিষ্ট প্রবাহ (I)।"
      }
    },
    {
      id: "mcq-ch10-l3-2",
      question: {
        en: "Under which condition is the motional EMF induced in a moving conductor exactly ZERO?",
        hi: "किस स्थिति में गतिमान चालक में प्रेरित गतिक ईएमएफ ठीक शून्य (Zero) होता है?",
        bn: "কোন অবস্থায় গতিশীল পরিবাহীতে আবিষ্ট গতিজনিত ইএমএফ ঠিক শূন্য হয়?"
      },
      options: [
        { id: "opt-1", text: { en: "When the conductor moves perpendicular to the magnetic field (θ = 90°)", hi: "जब चालक चुंबकीय क्षेत्र के लंबवत चलता है (θ = 90°)", bn: "যখন পরিবাহী চৌম্বক ক্ষেত্রের লম্বভাবে চলে (θ = ৯০°)" } },
        { id: "opt-2", text: { en: "When the conductor moves parallel to the magnetic field lines (θ = 0°)", hi: "जब चालक चुंबकीय क्षेत्र रेखाओं के समानांतर चलता है (θ = 0°)", bn: "যখন পরিবাহী চৌম্বক বলরেখার সমান্তরালে চলে (θ = ০°)" } },
        { id: "opt-3", text: { en: "When the magnetic field density is 2.0 Tesla", hi: "जब चुंबकीय फ्लक्स घनत्व 2.0 Tesla हो", bn: "যখন চৌম্বক ফ্লাক্স ঘনত্ব ২.০ Tesla হয়" } },
        { id: "opt-4", text: { en: "When the velocity of the conductor is 100 m/s", hi: "जब चालक का वेग 100 m/s हो", bn: "যখন পরিবাহীর বেগ ১০০ m/s হয়" } }
      ],
      correctOptionId: "opt-2",
      explanation: {
        en: "When moving parallel (θ = 0°), sin(0°) = 0, so e = B l v sin(0°) = 0 V because no magnetic lines of force are cut.",
        hi: "समानांतर गति (θ = 0°) में sin(0°) = 0 होता है, अतः कोई फ्लक्स रेखा नहीं कटती और प्रेरित ईएमएफ शून्य होता है।",
        bn: "সমান্তরাল গতিতে (θ = ০°) sin(০°) = ০ হওয়ায় কোনো বলরেখা ছেদন হয় না, ফলে আবিষ্ট ইএমএফ শূন্য হয়।"
      }
    },
    {
      id: "mcq-ch10-l3-3",
      question: {
        en: "A straight wire of length 2 meters moves at a speed of 10 m/s perpendicular to a uniform magnetic field of 0.5 Tesla. The induced EMF is:",
        hi: "2 मीटर लंबा एक सीधा तार 0.5 Tesla के एकसमान चुंबकीय क्षेत्र के लंबवत 10 m/s की गति से चलता है। प्रेरित ईएमएफ होगा:",
        bn: "২ মিটার দীর্ঘ একটি সোজা তার ০.৫ Tesla সুষম চৌম্বক ক্ষেত্রের লম্বভাবে ১০ m/s বেগে গতিশীল। আবিষ্ট ইএমএফ কত?"
      },
      options: [
        { id: "opt-1", text: { en: "5.0 Volts", hi: "5.0 वोल्ट", bn: "৫.০ ভোল্ট" } },
        { id: "opt-2", text: { en: "10.0 Volts", hi: "10.0 वोल्ट", bn: "১০.০ ভোল্ট" } },
        { id: "opt-3", text: { en: "20.0 Volts", hi: "20.0 वोल्ट", bn: "২০.০ ভোল্ট" } },
        { id: "opt-4", text: { en: "0.1 Volts", hi: "0.1 वोल्ट", bn: "০.১ ভোল্ট" } }
      ],
      correctOptionId: "opt-2",
      explanation: {
        en: "e = B · l · v · sin(90°) = 0.5 T × 2 m × 10 m/s × 1.0 = 10.0 Volts.",
        hi: "e = B · l · v · sin(90°) = 0.5 × 2 × 10 × 1 = 10.0 वोल्ट।",
        bn: "e = B · l · v · sin(৯০°) = ০.৫ × ২ × ১০ × ১ = ১০.০ ভোল্ট।"
      }
    },
    {
      id: "mcq-ch10-l03-04",
      question: {
        en: "Fleming’s Right-Hand Rule is specifically applied to find the direction of induced current in which type of electrical apparatus?",
        hi: "फ्लेमिंग का दायां हाथ नियम विशेष रूप से किस प्रकार के विद्युत उपकरण में प्रेरित धारा की दिशा ज्ञात करने के लिए लगाया जाता है?",
        bn: "ফ্লেমিংয়ের ডান হস্ত নিয়ম বিশেষভাবে কোন ধরনের বৈদ্যুতিক যন্ত্রে আবিষ্ট কারেন্টের দিক নির্ণয়ে ব্যবহৃত হয়?"
      },
      options: [
        { id: "opt-1", text: { en: "Electrical generators (dynamos and alternators)", hi: "विद्युत जनरेटर (डायनेमो और अल्टरनेटर)", bn: "বৈদ্যুতিক জেনারেটর (ডায়নামো ও অল্টারনেটর)" } },
        { id: "opt-2", text: { en: "Electric motors providing mechanical drive", hi: "विद्युत मोटरें जो यांत्रिक गति देती हैं", bn: "বৈদ্যুতিক মোটর যা যান্ত্রিক ঘূর্ণন তৈরি করে" } },
        { id: "opt-3", text: { en: "Electrostatic air filters", hi: "स्थिरवैद्युत वायु शोधक", bn: "ইলেক্ট্রোস্ট্যাটিক এয়ার ফিল্টার" } },
        { id: "opt-4", text: { en: "Chemical lead-acid storage batteries", hi: "रासायनिक लेड-एसिड बैटरी", bn: "রাসায়নিক লেড-অ্যাসিড ব্যাটারি" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Fleming’s Right-Hand Rule is specifically designed for generators (dynamo rule), determining induced current from conductor motion across a magnetic field.",
        hi: "फ्लेमिंग का दायां हाथ नियम विशेष रूप से जनरेटर (डायनेमो) के लिए बनाया गया है, जो गति और चुंबकीय क्षेत्र से प्रेरित धारा की दिशा बताता है।",
        bn: "ফ্লেমিংয়ের ডান হস্ত নিয়মটি বিশেষভাবে জেনারেটরের ক্ষেত্রে প্রযোজ্য, যা চৌম্বক ক্ষেত্রে পরিবাহীর গতির ফলে সৃষ্ট আবিষ্ট কারেন্টের দিক নির্দেশ করে।"
      }
    },
    {
      id: "mcq-ch10-l03-05",
      question: {
        en: "When setting up Fleming’s Right-Hand Rule, the relative spatial orientation between the thumb, forefinger, and middle finger must be:",
        hi: "फ्लेमिंग के दाएं हाथ के नियम को लागू करते समय अंगूठे, तर्जनी और मध्यमा के बीच पारस्परिक स्थिति क्या होनी चाहिए?",
        bn: "ফ্লেমিংয়ের ডান হস্ত নিয়ম প্রয়োগের সময় বৃদ্ধাঙ্গুলি, তর্জনী ও মধ্যমার মধ্যকার পারস্পরিক অবস্থান কেমন হতে হয়?"
      },
      options: [
        { id: "opt-1", text: { en: "Mutually perpendicular (at right angles, 90° to each other)", hi: "परस्पर लंबवत (एक-दूसरे से 90° के समकोण पर)", bn: "পরস্পর সমকোণে (একে অপরের সাথে ৯০° কোণে)" } },
        { id: "opt-2", text: { en: "Parallel in the same plane at 45°", hi: "एक ही तल में 45° पर समानांतर", bn: "একই তলে ৪৫° কোণে সমান্তরাল" } },
        { id: "opt-3", text: { en: "Folded tightly into a closed fist", hi: "मुट्ठी के रूप में कसकर बंद", bn: "মুষ্টিবদ্ধ অবস্থায় ভাঁজ করা" } },
        { id: "opt-4", text: { en: "Collinear along a single straight axis", hi: "एक ही सीधी रेखा के अनुदिश", bn: "একটি সরলরেখা বরাবর" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "The thumb (motion), forefinger (magnetic field), and middle finger (induced current) must be held mutually orthogonal at 90° angles to represent 3D Cartesian coordinates.",
        hi: "अंगूठा (गति), तर्जनी (चुंबकीय क्षेत्र) और मध्यमा (प्रेरित धारा) तीनों को परस्पर 90° के समकोण पर रखना अनिवार्य है।",
        bn: "বৃদ্ধাঙ্গুলি (গতি), তর্জনী (চৌম্বক ক্ষেত্র) এবং মধ্যমা (আবিষ্ট কারেন্ট)-এই তিনটিকে পরস্পরের সাথে সমকোণে (৯০°) ধরে রাখতে হয়।"
      }
    },
    {
      id: "mcq-ch10-l03-06",
      question: {
        en: "A horizontal conductor aligned North-South is moved vertically upwards through a uniform horizontal magnetic field pointing from East to West. In what direction does induced current flow?",
        hi: "उत्तर-दक्षिण दिशा में रखे एक क्षैतिज चालक को पूर्व से पश्चिम की ओर दिष्ट समान चुंबकीय क्षेत्र में लंबवत ऊपर की ओर ले जाया जाता है। प्रेरित धारा किस दिशा में बहेगी?",
        bn: "উত্তর-দক্ষিণ বরাবর রাখা একটি অনুভূমিক পরিবাহীকে পূর্ব থেকে পশ্চিমে ক্রিয়াশীল সুষম চৌম্বক ক্ষেত্রে খাড়া ওপরের দিকে গতিশীল করা হলো। আবিষ্ট কারেন্ট কোন দিকে প্রবাহিত হবে?"
      },
      options: [
        { id: "opt-1", text: { en: "From South to North along the conductor", hi: "चालक में दक्षिण से उत्तर की ओर", bn: "পরিবাহীর মধ্য দিয়ে দক্ষিণ থেকে উত্তর দিকে" } },
        { id: "opt-2", text: { en: "From North to South along the conductor", hi: "चालक में उत्तर से दक्षिण की ओर", bn: "পরিবাহীর মধ্য দিয়ে উত্তর থেকে দক্ষিণ দিকে" } },
        { id: "opt-3", text: { en: "Vertically downward into the ground", hi: "लंबवत नीचे जमीन की ओर", bn: "খাড়া নিচের দিকে মাটির ভেতরে" } },
        { id: "opt-4", text: { en: "Directly toward the East", hi: "सीधे पूर्व दिशा की ओर", bn: "সরাসরি পূর্ব দিকে" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Using Fleming’s Right-Hand Rule: Thumb points Upwards (motion), Forefinger points West (field). The middle finger naturally points North (induced current flows from South to North).",
        hi: "फ्लेमिंग के दाएं हाथ के नियम से: अंगूठा ऊपर (गति), तर्जनी पश्चिम (क्षेत्र)। तब मध्यमा उत्तर की ओर इंगित करती है (धारा दक्षिण से उत्तर की ओर बहेगी)।",
        bn: "ফ্লেমিংয়ের ডান হস্ত নিয়ম অনুসারে: বৃদ্ধাঙ্গুলি ওপরের দিকে (গতি), তর্জনী পশ্চিম দিকে (ক্ষেত্র)। তখন মধ্যমা উত্তর নির্দেশ করে (কারেন্ট দক্ষিণ থেকে উত্তরে প্রবাহিত হবে)।"
      }
    },
    {
      id: "mcq-ch10-l03-07",
      question: {
        en: "What is the primary fundamental distinction between Fleming’s Right-Hand Rule and Fleming’s Left-Hand Rule?",
        hi: "फ्लेमिंग के दाएं हाथ के नियम और बाएं हाथ के नियम के बीच मुख्य मौलिक अंतर क्या है?",
        bn: "ফ্লেমিংয়ের ডান হস্ত নিয়ম এবং বাম হস্ত নিয়মের মধ্যকার প্রধান মৌলিক পার্থক্য কোনটি?"
      },
      options: [
        { id: "opt-1", text: { en: "Right-Hand Rule determines induced current in generators; Left-Hand Rule determines mechanical force in motors", hi: "दायां हाथ नियम जनरेटर में प्रेरित धारा ज्ञात करता है; बायां हाथ नियम मोटर में यांत्रिक बल ज्ञात करता है", bn: "ডান হস্ত নিয়ম জেনারেটরে আবিষ্ট কারেন্ট নির্ণয় করে; বাম হস্ত নিয়ম মোটরে যান্ত্রিক বল নির্ণয় করে" } },
        { id: "opt-2", text: { en: "Right-Hand Rule applies only to DC; Left-Hand Rule applies only to AC", hi: "दायां हाथ नियम केवल डीसी पर और बायां हाथ केवल एसी पर लागू होता है", bn: "ডান হস্ত নিয়ম শুধু ডিসিতে এবং বাম হস্ত শুধু এসিতে প্রযোজ্য" } },
        { id: "opt-3", text: { en: "Right-Hand Rule is for electrostatic charges; Left-Hand Rule is for magnetic poles", hi: "दायां हाथ नियम आवेशों के लिए है और बायां हाथ चुंबकीय ध्रुवों के लिए", bn: "ডান হস্ত নিয়ম স্থির আধানের জন্য এবং বাম হস্ত চৌম্বক মেরুর জন্য" } },
        { id: "opt-4", text: { en: "They are completely identical and can be used interchangeably", hi: "दोनों बिल्कुल समान हैं और एक-दूसरे के स्थान पर प्रयुक्त हो सकते हैं", bn: "উভয় নিয়ম সম্পূর্ণ অভিন্ন এবং পারস্পরিকভাবে পরিবর্তনযোগ্য" } }
      ],
      correctOptionId: "opt-1",
      explanation: {
        en: "Fleming’s Right-Hand Rule governs electrical generation (finding induced current), whereas Fleming’s Left-Hand Rule governs motorized electromagnetic actuation (finding mechanical thrust).",
        hi: "दायां हाथ नियम जनरेटर प्रभाव (विद्युत उत्पादन) के लिए है, जबकि बायां हाथ नियम मोटर प्रभाव (यांत्रिक बल) के लिए है।",
        bn: "ফ্লেমিংয়ের ডান হস্ত নিয়ম জেনারেটরের ক্ষেত্রে (কারেন্ট উৎপাদন) এবং বাম হস্ত নিয়ম মোটরের ক্ষেত্রে (যান্ত্রিক বল) প্রযোজ্য।"
      }
    },
    {
      id: "mcq-ch10-l03-08",
      question: {
        en: "A straight wire of active length 0.4 m moves at 15 m/s through a uniform magnetic field B = 0.8 T at an angle of 30° to the flux lines. What is the induced EMF?",
        hi: "0.4 m सक्रिय लंबाई का एक सीधा तार 0.8 T के समान चुंबकीय क्षेत्र में फ्लक्स रेखाओं से 30° के कोण पर 15 m/s से गति करता है। प्रेरित EMF क्या है?",
        bn: "০.৪ মিটার কার্যকরী দৈর্ঘ্যের একটি সোজা তার ০.৮ টেসলার সুষম চৌম্বক ক্ষেত্রে ফ্লাক্স রেখার সাথে ৩০° কোণে ১৫ m/s বেগে গতিশীল। আবিষ্ট EMF কত?"
      },
      options: [
        { id: "opt-1", text: { en: "4.8 V", hi: "4.8 V", bn: "৪.৮ V" } },
        { id: "opt-2", text: { en: "2.4 V", hi: "2.4 V", bn: "২.৪ V" } },
        { id: "opt-3", text: { en: "1.2 V", hi: "1.2 V", bn: "১.২ V" } },
        { id: "opt-4", text: { en: "0.6 V", hi: "0.6 V", bn: "০.৬ V" } }
      ],
      correctOptionId: "opt-2",
      explanation: {
        en: "e = B · l · v · sin(θ) = 0.8 T × 0.4 m × 15 m/s × sin(30°) = 4.8 × 0.5 = 2.4 V.",
        hi: "e = B · l · v · sin(θ) = 0.8 × 0.4 × 15 × sin(30°) = 4.8 × 0.5 = 2.4 V।",
        bn: "e = B · l · v · sin(θ) = ০.৮ × ০.৪ × ১৫ × sin(৩০°) = ৪.৮ × ০.৫ = ২.৪ V।"
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch10-l3-1',
      question: {
        en: 'A 1.2 m long copper rod oriented horizontally along the East-West axis falls freely under gravity (g = 9.8 m/s²) from rest for 2.0 seconds in a region where the horizontal component of Earth’s magnetic field is 3.0 × 10⁻⁵ Tesla pointing North. Calculate the instantaneous induced EMF across the rod after 2.0 seconds.',
        hi: 'पूर्व-पश्चिम दिशा में रखी 1.2 m लंबी तांबे की छड़ 2.0 सेकंड तक गुरुत्वाकर्षण (g = 9.8 m/s²) के अधीन विराम से स्वतंत्र रूप से गिरती है। उस स्थान पर पृथ्वी के चुंबकीय क्षेत्र का क्षैतिज घटक 3.0 × 10⁻⁵ Tesla (उत्तर की ओर) है। 2.0 सेकंड बाद छड़ में प्रेरित तात्कालिक ईएमएफ की गणना कीजिए।',
        bn: 'পূর্ব-পশ্চিম বরাবর রাখা ১.২ m তামার দণ্ড স্থির অবস্থা থেকে অভিকর্ষের অধীনে (g = ৯.৮ m/s²) ২.০ সেকেন্ড ধরে মুক্তভাবে পড়ে। ভূ-চৌম্বক ক্ষেত্রের আনুভূমিক উপাংশ ৩.০ × ১০⁻⁵ Tesla (উত্তরমুখী)। ২.০ সেকেন্ড পর আবিষ্ট তাৎক্ষণিক ইএমএফ নির্ণয় করুন।'
      },
      hint: {
        en: 'Calculate instantaneous velocity v = g · t = 9.8 × 2.0 = 19.6 m/s. Then use e = B_h · l · v · sin(90°).',
        hi: 'तात्कालिक वेग v = g · t = 9.8 × 2.0 = 19.6 m/s निकालें। फिर e = B · l · v सूत्र लगाएं।',
        bn: 'তাৎক্ষণিক বেগ v = g · t = ৯.৮ × ২.০ = ১৯.৬ m/s নির্ণয় করে e = B · l · v প্রয়োগ করুন।'
      },
      answerKey: {
        en: 'v = 9.8 × 2.0 = 19.6 m/s. e = (3.0 × 10⁻⁵ T) × (1.2 m) × (19.6 m/s) = 7.056 × 10⁻⁴ Volts ≈ 0.706 mV (or 705.6 µV).',
        hi: 'v = 19.6 m/s। e = 3.0 × 10⁻⁵ × 1.2 × 19.6 = 7.056 × 10⁻⁴ V ≈ 0.706 mV।',
        bn: 'v = ১৯.৬ m/s। e = ৩.০ × ১০⁻⁵ × ১.২ × ১৯.৬ = ৭.০৫৬ × ১০⁻⁴ V ≈ ০.৭০৬ mV।'
      }
    },
    {
      id: 'pq-ch10-l3-2',
      question: {
        en: 'State why Fleming’s Right-Hand Rule is termed the "Generator Rule" whereas Fleming’s Left-Hand Rule is termed the "Motor Rule". Give the energy transformation for each.',
        hi: 'स्पष्ट कीजिए कि फ्लेमिंग के दाएं हाथ के नियम को "जनरेटर नियम" तथा बाएं हाथ के नियम को "मोटर नियम" क्यों कहा जाता है। दोनों के लिए ऊर्जा रूपांतरण बताइए।',
        bn: 'ফ্লেমিংয়ের ডান হস্ত নিয়মকে "জেনারেটর নিয়ম" এবং বাম হস্ত নিয়মকে "মোটর নিয়ম" কেন বলা হয় ব্যাখ্যা করুন। উভয়ের শক্তি রূপান্তর উল্লেখ করুন।'
      },
      hint: {
        en: 'Consider the inputs and outputs: Generator takes mechanical input to produce electrical output; Motor takes electrical input to produce mechanical output.',
        hi: 'इनपुट और आउटपुट पर विचार करें: जनरेटर यांत्रिक ऊर्जा को विद्युत ऊर्जा में बदलता है; मोटर विद्युत ऊर्जा को यांत्रिक ऊर्जा में बदलती है।',
        bn: 'ইনপুট ও আউটপুট বিবেচনা করুন: জেনারেটর যান্ত্রিক শক্তিকে বিদ্যুৎ শক্তিতে রূপান্তর করে; মোটর বিদ্যুৎ শক্তিকে যান্ত্রিক শক্তিতে রূপান্তর করে।'
      },
      answerKey: {
        en: 'Right-Hand Rule (Generator): Input = Mechanical Motion (v) + Field (B) yielding Electrical Output (Induced EMF/Current). Energy transformation: Mechanical -> Electrical. Left-Hand Rule (Motor): Input = Electric Current (I) + Field (B) yielding Mechanical Output (Force/Torque). Energy transformation: Electrical -> Mechanical.',
        hi: 'दायां हाथ (जनरेटर): यांत्रिक ऊर्जा → विद्युत ऊर्जा (इनपुट: गति + क्षेत्र, आउटपुट: धारा)। बायां हाथ (मोटर): विद्युत ऊर्जा → यांत्रिक ऊर्जा (इनपुट: धारा + क्षेत्र, आउटपुट: बल)।',
        bn: 'ডান হস্ত নিয়ম (জেনারেটর): যান্ত্রিক শক্তি → বৈদ্যুতিক শক্তি (ইনপুট: গতি + ক্ষেত্র, আউটপুট: তড়িৎপ্রবাহ)। বাম হস্ত নিয়ম (মোটর): বৈদ্যুতিক শক্তি → যান্ত্রিক শক্তি (ইনপুট: বিদ্যুৎপ্রবাহ + ক্ষেত্র, আউটপুট: যান্ত্রিক বল)।'
      }
    }
  ]
};
