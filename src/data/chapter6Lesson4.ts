import { Lesson } from '../types';

export const LESSON_DC_GENERATOR_EMF: Lesson = {
  id: 'lsn-ch6-dc-generator-emf',
  topicId: 'ch6-dc-generator-emf',
  chapterId: 'ch-electrical-machines',
  order: 12,
  title: {
    en: 'DC Generator EMF Equation & Generation Principle',
    hi: 'डीसी जनरेटर EMF समीकरण एवं जनरेशन सिद्धांत',
    bn: 'ডিসি জেনারেটরের EMF সমীকরণ ও জেনারেশন নীতি'
  },
  description: {
    en: 'Mathematical derivation of the DC generator EMF equation, Faraday induction, Fleming right-hand rule, simplex lap and wave windings, and terminal voltage relations.',
    hi: 'डीसी जनरेटर EMF समीकरण का गणितीय निगमन, फैराडे का प्रेरण नियम, फ्लेमिंग का दायां हाथ नियम, लैप एवं वेव वाइंडिंग तथा टर्मिनल वोल्टेज संबंध।',
    bn: 'ডিসি জেনারেটর EMF সমীকরণের গাণিতিক প্রতিপাদন, ফ্যারাডের আবেশ সূত্র, ফ্লেমিংয়ের ডান হাত নিয়ম, ল্যাপ ও ওয়েভ ওয়াইন্ডিং এবং টার্মিনাল ভোল্টেজ সম্পর্ক।'
  },
  estimatedMinutes: 30,
  easyExplanation: {
    en: 'A DC generator converts mechanical rotation into DC electrical voltage. When prime-mover engine power spins the armature copper conductors across magnetic field poles, an electromotive force (EMF) is induced according to Faraday\'s law. The total induced voltage equals the voltage generated per conductor multiplied by the number of conductors connected in series in each parallel electrical path: Eg = (P · Φ · Z · N) / (60 · A).',
    hi: 'डीसी जनरेटर यांत्रिक घूर्णन को डीसी विद्युत वोल्टेज में बदलता है। जब प्राइम मूवर आर्मेचर के कॉपर चालकों को चुंबकीय ध्रुवों के बीच घुमाता है, तो फैराडे के नियम अनुसार विद्युतवाहक बल (EMF) उत्पन्न होता है। कुल वोल्टेज प्रत्येक समानांतर पथ में जुड़े श्रेणी चालकों के योग के बराबर होता है: Eg = (P · Φ · Z · N) / (60 · A)।',
    bn: 'ডিসি জেনারেটর যান্ত্রিক ঘূর্ণনকে ডিসি বৈদ্যুতিক ভোল্টেজে রূপান্তরিত করে। যখন প্রাইম মুভার আর্মেচারের কপার কন্ডাক্টরগুলিকে চৌম্বক মেরুর মধ্যে ঘোরায়, তখন ফ্যারাডের সূত্রানুসারে তড়িচ্চালক বল (EMF) আবিষ্ট হয়। মোট উৎপাদিত ভোল্টেজ প্রতিটি সমান্তরাল পথের শ্রেণীবদ্ধ কন্ডাক্টরের সংখ্যার গুণফলের সমান: Eg = (P · Φ · Z · N) / (60 · A)।'
  },
  detailedExplanation: {
    en: `1. Physical Principle of EMF Generation in DC Machines:
When armature conductors rotate within the stationary magnetic field established by field poles:
- Dynamic Electromotive Force (EMF) is induced across each conductor of active length 'l' moving with linear velocity 'v' perpendicular to magnetic flux density 'B':
  e_inst = B · l · v · sin(θ) [Volts]
- Direction of Induced Current: Determined by Fleming's Right-Hand Rule:
  * Forefinger: Magnetic Field direction (North to South).
  * Thumb: Motion / Velocity vector of the conductor.
  * Middle finger: Direction of Induced Current / EMF.

2. Step-by-Step Mathematical Derivation of DC Generator EMF Equation:
Let:
- P = Number of field poles in the stator frame
- Φ = Magnetic flux produced per pole in Webers (Wb)
- Z = Total number of active armature conductors (Z = 2 · number of coils · turns per coil)
- N = Armature rotational speed in revolutions per minute (RPM)
- A = Number of parallel electrical paths through the armature winding
- ω_m = Mechanical angular speed of rotor = (2π · N) / 60 [rad/s]

Step 1: Flux cut by ONE conductor in ONE complete revolution (360° mechanical):
In one complete revolution, a single conductor sweeps across all 'P' magnetic poles.
Therefore, the total magnetic flux cut by one conductor:
dΦ = P · Φ [Webers]

Step 2: Time taken to complete one revolution:
Since the armature rotates at N revolutions in 60 seconds:
Time for 1 revolution (dt) = 60 / N [seconds]

Step 3: Average EMF induced in a SINGLE conductor:
According to Faraday's Law of Electromagnetic Induction (e_avg = dΦ / dt):
e_conductor = (P · Φ) / (60 / N) = (P · Φ · N) / 60 [Volts per conductor]

Step 4: Total Generated Armature EMF (E_g or E_a):
The total Z conductors are divided equally into 'A' parallel paths.
Number of conductors connected in series per parallel path = Z / A.
Because all parallel paths are in parallel across the brushes, the generator terminal EMF equals the total EMF generated across one path:
E_g = (Conductors in series per path) · (EMF per conductor)
E_g = (Z / A) · (P · Φ · N / 60)
E_g = (P · Φ · Z · N) / (60 · A) [Volts]

3. Constant Form & Electromagnetic Torque Relation:
E_g can be expressed in terms of angular velocity ω_m = 2πN / 60:
E_g = [ (P · Z) / (2π · A) ] · Φ · ω_m = K_a · Φ · ω_m
Where the Machine Armature Constant K_a = (P · Z) / (2π · A).
Note that electromagnetic torque is simultaneously: T_e = K_a · Φ · I_a.
Thus, Developed Power: P_dev = E_g · I_a = T_e · ω_m.

4. Armature Winding Types and Parallel Paths (A):
A. Simplex Lap Winding:
- Coils overlap adjacent coils; finish end of one coil connects to the start end of the next adjacent coil.
- Number of parallel paths: A = P (always equal to the number of poles).
- Generated EMF: E_g = (Φ · Z · N) / 60 [independent of pole count P].
- Current per path: I_path = I_a / P.
- Optimal for: Low voltage, high current industrial generators (e.g. electroplating, welding).
- Equalizer rings are mandatory in Lap windings to equalize unbalance currents caused by slight air-gap asymmetries under different poles.

B. Simplex Wave (Series) Winding:
- Coils advance forward like waves; coil ends connect to commutator segments spaced approximately two pole pitches apart.
- Number of parallel paths: A = 2 (always exactly 2 paths, regardless of how many poles P the machine has).
- Generated EMF: E_g = (P · Φ · Z · N) / 120 [Volts].
- Current per path: I_path = I_a / 2.
- Optimal for: High voltage, low current power generators (e.g. railway traction, high-voltage DC distribution).
- Equalizer rings are NOT required because both paths contain conductors distributed under all poles equally.

5. Terminal Voltage vs Generated EMF:
Under load conditions, the terminal voltage V across output terminals is less than generated internal EMF E_g due to internal voltage drops:
V = E_g - (I_a · R_a) - V_brush
Where:
- I_a · R_a = Armature winding ohmic resistance drop (typically 2% to 5% of rated V)
- V_brush = Contact voltage drop across carbon brushes (typically 1.0 V to 2.0 V total across both brushes).`,
    hi: `1. डीसी जनरेटर में EMF जनरेशन का भौतिक सिद्धांत:
जब स्टेटर के चुंबकीय ध्रुवों के बीच आर्मेचर चालक घूमते हैं, तो फैराडे के विद्युतचुंबकीय प्रेरण के नियमानुसार डायनामिक EMF उत्पन्न होता है:
e = B · l · v · sin(θ) [वोल्ट]
प्रेरित धारा की दिशा फ्लेमिंग के दाएँ हाथ के नियम (Fleming's Right-Hand Rule) द्वारा ज्ञात की जाती है।

2. EMF समीकरण का चरणबद्ध निगमन:
मान लीजिए:
- P = चुंबकीय ध्रुवों (Poles) की संख्या
- Φ = प्रति पोल चुंबकीय फ्लक्स (Webers)
- Z = कुल आर्मेचर चालकों की संख्या (Z = 2 · कॉइल की संख्या · प्रति कॉइल टर्न)
- N = आर्मेचर की घूर्णन गति (RPM)
- A = समानांतर पथों की संख्या

चरण 1: एक चालक द्वारा 1 चक्कर में काटा गया फ्लक्स:
dΦ = P · Φ [वेबर]

चरण 2: 1 चक्कर पूरा करने में लगा समय:
dt = 60 / N [सेकंड]

चरण 3: एक चालक में उत्पन्न औसत EMF:
e_avg = dΦ / dt = (P · Φ · N) / 60 [वोल्ट]

चरण 4: कुल उत्पन्न EMF (E_g):
प्रति समानांतर पथ में श्रेणी में जुड़े चालकों की संख्या = Z / A।
अतः कुल उत्पन्न आर्मेचर EMF:
E_g = (Z / A) · (P · Φ · N / 60)
E_g = (P · Φ · Z · N) / (60 · A) [वोल्ट]

3. लैप बनाम वेव वाइंडिंग में समानांतर पथ (A):
A. लैप वाइंडिंग (Lap Winding):
- समानांतर पथ: A = P (ध्रुवों की संख्या के बराबर)।
- EMF: E_g = (Φ · Z · N) / 60।
- उपयोग: कम वोल्टेज एवं उच्च धारा (Low Voltage, High Current)।

B. वेव वाइंडिंग (Wave Winding):
- समानांतर पथ: A = 2 (सदैव 2 पथ)।
- EMF: E_g = (P · Φ · Z · N) / 120।
- उपयोग: उच्च वोल्टेज एवं निम्न धारा (High Voltage, Low Current)।

4. टर्मिनल वोल्टेज समीकरण:
V = E_g - I_a · R_a - V_brush
जहाँ I_a · R_a आर्मेचर प्रतिरोध ड्रॉप है और V_brush कार्बन ब्रश ड्रॉप (लगभग 2V) है।`,
    bn: `১. ডিসি জেনারেটরে EMF উৎপাদনের ভৌত নীতি:
যখন আর্মেচার পরিবাহীগুলি চৌম্বক মেরুর মধ্য দিয়ে ঘোরে, তখন ফ্যারাডের তড়িচ্চুম্বকীয় আবেশের সূত্রানুসারে গতিশীল EMF আবিষ্ট হয়:
e = B · l · v · sin(θ) [ভোল্ট]
আবিষ্ট কারেন্টের দিক ফ্লেমিংয়ের ডান হাত নিয়ম দ্বারা নির্ধারিত হয়।

২. EMF সমীকরণ প্রতিপাদন:
ধরি:
- P = মোট চৌম্বক মেরু (Poles) সংখ্যা
- Φ = প্রতি পোলে চৌম্বক ফ্লাক্স (Wb)
- Z = মোট সক্রিয় আর্মেচার কন্ডাক্টর সংখ্যা
- N = আর্মেচারের ঘূর্ণন গতি (RPM)
- A = সমান্তরাল পথের সংখ্যা

ধাপ ১: ১টি কন্ডাক্টর কর্তৃক ১টি ঘূর্ণনে কর্তিত ফ্লাক্স:
dΦ = P · Φ [ওয়েবার]

ধাপ ২: ১টি ঘূর্ণনের সময়কাল:
dt = ৬০ / N [সেকেন্ড]

ধাপ ৩: ১টি কন্ডাক্টরে উৎপন্ন গড় EMF:
e_avg = dΦ / dt = (P · Φ · N) / ৬০ [ভোল্ট]

ধাপ ৪: মোট উৎপন্ন EMF (E_g):
প্রতি সমান্তরাল পথে শ্রেণীবদ্ধ কন্ডাক্টর সংখ্যা = Z / A।
অতএব, মোট উৎপাদিত EMF:
E_g = (Z / A) · (P · Φ · N / ৬০)
E_g = (P · Φ · Z · N) / (৬০ · A) [ভোল্ট]

৩. ল্যাপ বনাম ওয়েভ ওয়াইন্ডিং:
A. ল্যাপ ওয়াইন্ডিং: A = P (পোলের সমান পথ)। কম ভোল্টেজ ও উচ্চ কারেন্টের জন্য প্রযোজ্য।
B. ওয়েভ ওয়াইন্ডিং: A = ২ (সর্বদা ২টি পথ)। উচ্চ ভোল্টেজ ও কম কারেন্টের জন্য প্রযোজ্য।

৪. টার্মিনাল ভোল্টেজ সম্পর্ক:
V = E_g - I_a · R_a - V_brush`
  },
  formulas: [
    {
      id: 'f-dc-gen-emf',
      symbol: 'E_g',
      expression: 'E_g = \\frac{P \\cdot \\Phi \\cdot Z \\cdot N}{60 \\cdot A}',
      title: {
        en: 'General DC Generator EMF Equation',
        hi: 'सामान्य डीसी जनरेटर EMF समीकरण',
        bn: 'সাধারণ ডিসি জেনারেটর EMF সমীকরণ'
      },
      description: {
        en: 'Generated electromotive force in armature winding where P=poles, Φ=flux/pole (Wb), Z=total conductors, N=RPM, A=parallel paths.',
        hi: 'आर्मेचर वाइंडिंग में उत्पन्न विद्युतवाहक बल जहाँ P=ध्रुव, Φ=फ्लक्स प्रति ध्रुव (Wb), Z=कुल चालक, N=गति (RPM), A=समानांतर पथ।',
        bn: 'আর্মেচার ওয়াইন্ডিংয়ে উৎপন্ন EMF যেখানে P=পোল, Φ=প্রতি পোলে ফ্লাক্স (Wb), Z=মোট কন্ডাক্টর, N=গতি (RPM), A=সমান্তরাল পথ।'
      },
      variables: [
        { symbol: 'E_g', name: { en: 'Generated EMF (V)', hi: 'उत्पन्न ईएमएफ (V)', bn: 'উৎপন্ন ইএমএফ (V)' } },
        { symbol: 'P', name: { en: 'Number of Poles', hi: 'ध्रुवों की संख्या', bn: 'পোলের সংখ্যা' } },
        { symbol: 'Φ', name: { en: 'Flux per Pole (Wb)', hi: 'प्रति ध्रुव फ्लक्स (Wb)', bn: 'প্রতি পোলে ফ্লাক্স (Wb)' } },
        { symbol: 'Z', name: { en: 'Total Armature Conductors', hi: 'कुल आर्मेचर चालक', bn: 'মোট আর্মেচার কন্ডাক্টর' } },
        { symbol: 'N', name: { en: 'Speed (RPM)', hi: 'गति (RPM)', bn: 'গতি (RPM)' } },
        { symbol: 'A', name: { en: 'Parallel Paths (A=P for Lap, A=2 for Wave)', hi: 'समानांतर पथ (लैप: A=P, वेव: A=2)', bn: 'সমান্তরাল পথ (ল্যাপ: A=P, ওয়েভ: A=২)' } }
      ]
    },
    {
      id: 'f-dc-gen-lap-emf',
      symbol: 'E_{g(lap)}',
      expression: 'E_{g(lap)} = \\frac{\\Phi \\cdot Z \\cdot N}{60}',
      title: {
        en: 'EMF for Lap Wound Armature (A = P)',
        hi: 'लैप वाउंड आर्मेचर हेतु EMF (A = P)',
        bn: 'ল্যাপ ওয়াইন্ডিংযুক্ত আর্মেচারের EMF (A = P)'
      },
      description: {
        en: 'For simplex lap winding, A = P; therefore the number of poles cancels out in the numerator and denominator.',
        hi: 'सिंप्लेक्स लैप वाइंडिंग में A = P होने के कारण ध्रुवों की संख्या अंश और हर में कट जाती है।',
        bn: 'সিমপ্লেক্স ল্যাপ ওয়াইন্ডিংয়ে A = P হওয়ায় লব ও হরে পোলের সংখ্যা কেটে যায়।'
      }
    },
    {
      id: 'f-dc-gen-wave-emf',
      symbol: 'E_{g(wave)}',
      expression: 'E_{g(wave)} = \\frac{P \\cdot \\Phi \\cdot Z \\cdot N}{120}',
      title: {
        en: 'EMF for Wave Wound Armature (A = 2)',
        hi: 'वेव वाउंड आर्मेचर हेतु EMF (A = 2)',
        bn: 'ওয়েভ ওয়াইন্ডিংযুক্ত আর্মেচারের EMF (A = ২)'
      },
      description: {
        en: 'For simplex wave winding, parallel paths A = 2 regardless of the number of magnetic poles.',
        hi: 'सिंप्लेक्स वेव वाइंडिंग में ध्रुवों की संख्या चाहे जो हो, समानांतर पथ सदैव A = 2 होते हैं।',
        bn: 'সিমপ্লেক্স ওয়েভ ওয়াইন্ডিংয়ে পোলের সংখ্যা যাই হোক না কেন সমান্তরাল পথ সর্বদা A = ২ থাকে।'
      }
    },
    {
      id: 'f-dc-gen-terminal-v',
      symbol: 'V',
      expression: 'V = E_g - I_a \\cdot R_a - V_{brush}',
      title: {
        en: 'Terminal Voltage Equation',
        hi: 'टर्मिनल वोल्टेज समीकरण',
        bn: 'টার্মিনাল ভোল্টেজ সমীকরণ'
      },
      description: {
        en: 'Available terminal voltage across load equals generated EMF minus armature resistance drop and brush contact drop.',
        hi: 'लोड पर उपलब्ध टर्मिनल वोल्टेज उत्पन्न EMF में से आर्मेचर प्रतिरोध ड्रॉप तथा ब्रश ड्रॉप घटाने पर प्राप्त होता है।',
        bn: 'লোডে প্রাপ্ত টার্মিনাল ভোল্টেজ হলো উৎপন্ন EMF বিয়োগ আর্মেচার রোধ ড্রপ ও ব্রাশ কন্টাক্ট ড্রপ।'
      }
    }
  ],
  sections: [
    {
      id: 'sec-emf-principle',
      title: {
        en: '1. Electromagnetic Induction & Conductor Dynamics',
        hi: '1. विद्युतचुंबकीय प्रेरण एवं चालक गतिकी',
        bn: '১. তড়িচ্চুম্বকীয় আবেশ ও কন্ডাক্টর গতিবিদ্যা'
      },
      content: {
        en: 'When a mechanical prime mover (diesel engine, steam turbine, or hydro turbine) turns the rotor shaft, copper conductors embedded in armature slots slice through the stationary magnetic flux paths established between field poles. The instantaneous dynamic EMF induced in each active conductor segment follows Faraday\'s law: e = B · l · v. As the conductor rotates under alternating North and South poles, an alternating EMF wave is induced within the coils, which is commutated into unidirectional DC by the split copper commutator bars and stationary carbon brushes.',
        hi: 'जब प्राइम मूवर (डीजल इंजन या टर्बाइन) रोटर शाफ्ट को घुमाता है, तो आर्मेचर स्लॉट्स में रखे कॉपर चालक फील्ड पोल्स द्वारा स्थापित चुंबकीय फ्लक्स रेखाओं को काटते हैं। प्रत्येक चालक में फैराडे के नियम e = B · l · v के अनुसार EMF प्रेरित होता है। N और S पोल के नीचे घूमने पर कॉइल में प्रत्यावर्ती (AC) EMF बनता है, जिसे कम्यूटेटर और कार्बन ब्रश मिलकर डीसी (DC) में बदल देते हैं।',
        bn: 'যখন প্রাইম মুভার আর্মেচার রোটরকে ঘোরায়, তখন আর্মেচার স্লটে থাকা কপার কন্ডাক্টরগুলি ফিল্ড পোলের মধ্যবর্তী চৌম্বক ফ্লাক্সকে কর্তন করে। প্রতিটি কন্ডাক্টরে ফ্যারাডের নিয়ম e = B · l · v অনুসারে EMF আবিষ্ট হয়। কয়েলে উৎপন্ন পরিবর্তী AC ভোল্টেজকে কমিউটেটর ও কার্বন ব্রাশের সাহায্যে একমুখী DC ভোল্টেজে রূপান্তর করা হয়।'
      },
      schematicId: 'dc-generator-emf',
      keyEquations: ['e_{inst} = B \\cdot l \\cdot v', 'd\\Phi = P \\cdot \\Phi', 'dt = \\frac{60}{N}', 'e_{conductor} = \\frac{P \\cdot \\Phi \\cdot N}{60}']
    },
    {
      id: 'sec-derivation-steps',
      title: {
        en: '2. Complete Mathematical Derivation of E_g',
        hi: '2. E_g का संपूर्ण गणितीय निगमन',
        bn: '২. E_g এর সম্পূর্ণ গাণিতিক প্রতিপাদন'
      },
      content: {
        en: 'Consider a DC machine with P poles, each having a useful magnetic flux of Φ Webers. In one full revolution (360° mechanical), each armature conductor passes under all P poles, cutting total flux dΦ = P · Φ Webers. If the armature rotates at N revolutions per minute, time taken for 1 revolution is dt = 60 / N seconds. Average EMF generated in one conductor: e_avg = dΦ / dt = (P · Φ · N) / 60 Volts. Since total Z conductors are partitioned into A identical parallel circuits, the number of series conductors per path is Z / A. Summing the voltages along one path yields: E_g = (Z / A) · (P · Φ · N / 60) = (P · Φ · Z · N) / (60 · A) Volts.',
        hi: 'P ध्रुवों वाली डीसी मशीन में प्रत्येक पोल का फ्लक्स Φ वेबर है। एक पूरे चक्कर में एक चालक सभी P ध्रुवों से गुजरता है और कुल dΦ = P · Φ वेबर फ्लक्स काटता है। N चक्कर प्रति मिनट पर 1 चक्कर का समय dt = 60 / N सेकंड है। एक चालक में औसत EMF = (P · Φ · N) / 60 वोल्ट। कुल Z चालकों को A समानांतर पथों में बाँटने पर प्रति पथ श्रेणी चालकों की संख्या Z / A होती है। अतः कुल उत्पन्न EMF: E_g = (P · Φ · Z · N) / (60 · A) वोल्ट प्राप्त होता है।',
        bn: 'P পোলযুক্ত ডিসি মেশিনে প্রতিটি পোলের ফ্লাক্স Φ ওয়েবার। ১টি পূর্ণ ঘূর্ণনে ১টি কন্ডাক্টর P টি পোল অতিক্রম করে মোট dΦ = P · Φ ওয়েবার ফ্লাক্স কর্তন করে। N আরপিএম গতিতে ১টি ঘূর্ণনের সময়কাল dt = ৬০ / N সেকেন্ড। ১টি কন্ডাক্টরে গড় EMF = (P · Φ · N) / ৬০ ভোল্ট। মোট Z কন্ডাক্টর A টি সমান্তরাল পথে বিভক্ত থাকায় প্রতি পথে শ্রেণীবদ্ধ কন্ডাক্টর সংখ্যা Z / A। সুতরাং মোট আবিষ্ট EMF: E_g = (P · Φ · Z · N) / (৬০ · A) ভোল্ট।'
      },
      keyEquations: ['E_g = \\frac{P \\cdot \\Phi \\cdot Z \\cdot N}{60 \\cdot A}', 'E_g = K_a \\cdot \\Phi \\cdot \\omega_m', 'K_a = \\frac{P \\cdot Z}{2\\pi \\cdot A}']
    },
    {
      id: 'sec-lap-vs-wave',
      title: {
        en: '3. Lap vs Wave Armature Windings',
        hi: '3. लैप बनाम वेव आर्मेचर वाइंडिंग तुलना',
        bn: '৩. ল্যাপ বনাম ওয়েভ আর্মেচার ওয়াইন্ডিং তুলনা'
      },
      content: {
        en: 'The number of parallel electrical circuits A determines whether a machine is configured for high current or high voltage. In Lap Winding, A = P. Because conductors are divided into many parallel streams, each branch carries a smaller fraction of the armature current (I_a / P), making Lap ideal for heavy-current industrial machines (electro-refining, smelting). In Wave Winding, A = 2 regardless of pole count. All conductors are placed into just two long series branches, maximizing generated voltage (E_g = P·Φ·Z·N / 120), making Wave winding standard for high-voltage and traction applications.',
        hi: 'समानांतर पथों की संख्या A यह तय करती है कि मशीन उच्च धारा हेतु बनी है या उच्च वोल्टेज हेतु। लैप वाइंडिंग में A = P होता है, जिससे प्रत्येक शाखा में धारा I_a / P बहती है; यह उच्च धारा (High Current) अनुप्रयोगों जैसे इलेक्ट्रोप्लेटिंग हेतु आदर्श है। वेव वाइंडिंग में सदैव A = 2 होता है, जिससे सभी चालक केवल 2 लंबी श्रेणियों में जुड़कर उच्च वोल्टेज पैदा करते हैं (E_g = P·Φ·Z·N / 120)। यह ट्रैक्शन और उच्च वोल्टेज जनरेटरों में प्रयुक्त होती है।',
        bn: 'সমান্তরাল পথের সংখ্যা A নির্ধারণ করে মেশিনটি উচ্চ ভোল্টেজ না উচ্চ কারেন্টের জন্য উপযুক্ত। ল্যাপ ওয়াইন্ডিংয়ে A = P হওয়ায় প্রতিটি শাখায় কম কারেন্ট (I_a / P) প্রবাহিত হয়, যা উচ্চ কারেন্ট অ্যাপ্লিকেশনে ব্যবহৃত হয়। ওয়েভ ওয়াইন্ডিংয়ে সর্বদা A = ২ হওয়ায় কন্ডাক্টরগুলি মাত্র ২টি দীর্ঘ সারিতে যুক্ত থেকে সর্বোচ্চ ভোল্টেজ উৎপন্ন করে (E_g = P·Φ·Z·N / ১২০)। এটি ট্র্যাকশন ও উচ্চ ভোল্টেজ সরবরাহে আদর্শ।'
      },
      keyEquations: ['A_{lap} = P \\implies E_g = \\frac{\\Phi Z N}{60}', 'A_{wave} = 2 \\implies E_g = \\frac{P \\Phi Z N}{120}', 'I_{path(lap)} = \\frac{I_a}{P}', 'I_{path(wave)} = \\frac{I_a}{2}']
    }
  ],
  diagrams: [
    {
      id: 'diag-dc-generator-emf',
      title: {
        en: 'DC Generator Dynamic EMF Generation & Armature Paths',
        hi: 'डीसी जनरेटर डायनामिक EMF जनरेशन एवं आर्मेचर पथ',
        bn: 'ডিসি জেনারেটরের ডায়নামিক EMF উৎপাদন ও আর্মেচার পথ'
      },
      caption: {
        en: 'Rotating armature conductor cutting magnetic flux between stator poles with Fleming Right-Hand Rule and Lap/Wave parallel paths.',
        hi: 'फ्लेमिंग के दाएँ हाथ नियम तथा लैप/वेव समानांतर पथों के साथ स्टेटर पोल्स के बीच फ्लक्स काटता आर्मेचर चालक।',
        bn: 'ফ্লেমিংয়ের ডান হাত নিয়ম এবং ল্যাপ/ওয়েভ সমান্তরাল পথসহ স্টেটর পোলের মাঝে ফ্লাক্স কর্তনকারী আর্মেচার কন্ডাক্টর।'
      },
      svgType: 'dc-generator-emf'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-dc-gen-1',
      problem: {
        en: 'A 4-pole DC generator has an armature with 50 slots, each slot containing 20 conductors. The magnetic flux per pole is 0.025 Wb. If the armature is driven at a speed of 1200 RPM, calculate the generated EMF when the armature winding is: (a) Lap connected, and (b) Wave connected.',
        hi: 'एक 4-पोल डीसी जनरेटर के आर्मेचर में 50 स्लॉट हैं और प्रत्येक स्लॉट में 20 चालक हैं। प्रति पोल चुंबकीय फ्लक्स 0.025 Wb है। यदि आर्मेचर 1200 RPM की गति पर घूम रहा है, तो उत्पन्न EMF ज्ञात कीजिए जब आर्मेचर वाइंडिंग: (a) लैप कनेक्टेड हो, तथा (b) वेव कनेक्टेड हो।',
        bn: 'একটি ৪-পোল ডিসি জেনারেটরের আর্মেচারে ৫০টি স্লট রয়েছে এবং প্রতি স্লটে ২০টি কন্ডাক্টর আছে। প্রতি পোলে চৌম্বক ফ্লাক্স ০.০২৫ Wb। আর্মেচারটি ১২০০ RPM গতিতে ঘুরলে উৎপন্ন EMF নির্ণয় করো যখন ওয়াইন্ডিংটি: (a) ল্যাপ কানেক্টেড, এবং (b) ওয়েভ কানেক্টেড।'
      },
      givenValues: {
        'Number of Poles (P)': '4',
        'Slots': '50 slots',
        'Conductors per Slot': '20',
        'Total Conductors (Z)': '50 × 20 = 1000 conductors',
        'Flux per Pole (Φ)': '0.025 Wb',
        'Speed (N)': '1200 RPM'
      },
      solution: {
        en: `1. Calculate Total Conductors:
Z = 50 slots × 20 conductors/slot = 1000 conductors.

2. Case (a): Lap Connected (A = P = 4):
Using EMF equation: E_g = (P · Φ · Z · N) / (60 · A)
Since A = P = 4:
E_g(lap) = (4 · 0.025 · 1000 · 1200) / (60 · 4)
E_g(lap) = (0.025 · 1000 · 1200) / 60
E_g(lap) = 30000 / 60 = 500 Volts.

3. Case (b): Wave Connected (A = 2):
Since A = 2:
E_g(wave) = (P · Φ · Z · N) / (60 · 2)
E_g(wave) = (4 · 0.025 · 1000 · 1200) / 120
E_g(wave) = 120000 / 120 = 1000 Volts.

Conclusion: Wave winding produces double the voltage (1000 V vs 500 V) with the same flux, speed, and copper conductor count.`,
        hi: `1. कुल चालक (Z) की गणना:
Z = 50 स्लॉट × 20 चालक/स्लॉट = 1000 चालक।

2. स्थिति (a): लैप कनेक्टेड (A = P = 4):
E_g = (P · Φ · Z · N) / (60 · A)
E_g(lap) = (4 · 0.025 · 1000 · 1200) / (60 · 4) = 500 वोल्ट।

3. स्थिति (b): वेव कनेक्टेड (A = 2):
E_g(wave) = (4 · 0.025 · 1000 · 1200) / (60 · 2) = 1000 वोल्ट।`,
        bn: `১. মোট কন্ডাক্টর সংখ্যা:
Z = ৫০ × ২০ = ১০০০ কন্ডাক্টর।

২. (a) ল্যাপ কানেক্টেড (A = P = ৪):
E_g(lap) = (৪ · ০.০২৫ · ১০০০ · ১২০০) / (৬০ · ৪) = ৫০০ ভোল্ট।

৩. (b) ওয়েভ কানেক্টেড (A = ২):
E_g(wave) = (৪ · ০.০২৫ · ১০০০ · ১২০০) / (৬০ · ২) = ১০০০ ভোল্ট।`
      },
      finalAnswer: {
        en: '(a) E_g(lap) = 500 V, (b) E_g(wave) = 1000 V',
        hi: '(a) E_g(लैप) = 500 V, (b) E_g(वेव) = 1000 V',
        bn: '(a) E_g(ল্যাপ) = ৫০০ V, (b) E_g(ওয়েভ) = ১০০০ V'
      }
    },
    {
      id: 'ex-dc-gen-2',
      problem: {
        en: 'A 6-pole, wave-wound DC shunt generator has 600 armature conductors and delivers a load current of 80 A at a terminal voltage of 220 V. The armature resistance is 0.15 Ω, shunt field resistance is 110 Ω, and brush contact drop is 1 V per brush (2 V total). If the magnetic flux per pole is 0.02 Wb, calculate: (a) Generated EMF (E_g), and (b) Speed of rotation in RPM.',
        hi: 'एक 6-पोल, वेव-वाउंड डीसी शंट जनरेटर में 600 आर्मेचर चालक हैं और यह 220 V टर्मिनल वोल्टेज पर 80 A लोड धारा की आपूर्ति करता है। आर्मेचर प्रतिरोध 0.15 Ω, शंट फील्ड प्रतिरोध 110 Ω तथा प्रति ब्रश ड्रॉप 1 V (कुल 2 V) है। यदि प्रति पोल फ्लक्स 0.02 Wb है, तो ज्ञात कीजिए: (a) उत्पन्न EMF (E_g), एवं (b) घूर्णन गति (RPM)।',
        bn: 'একটি ৬-পোল, ওয়েভ-ওয়াইন্ডিং ডিসি শান্ট জেনারেটরে ৬০০টি আর্মেচার কন্ডাক্টর রয়েছে এবং এটি ২২০ V টার্মিনাল ভোল্টেজে ৮০ A লোড কারেন্ট সরবরাহ করে। আর্মেচার রোধ ০.১৫ Ω, শান্ট ফিল্ড রোধ ১১০ Ω এবং প্রতি ব্রাশে ভোল্টেজ ড্রপ ১ V (মোট ২ V)। প্রতি পোলে ফ্লাক্স ০.০২ Wb হলে নির্ণয় করো: (a) উৎপন্ন EMF (E_g), এবং (b) ঘূর্ণন গতি (RPM)।'
      },
      givenValues: {
        'Poles (P)': '6',
        'Winding': 'Wave (A = 2)',
        'Conductors (Z)': '600',
        'Terminal Voltage (V)': '220 V',
        'Load Current (I_L)': '80 A',
        'Armature Resistance (R_a)': '0.15 Ω',
        'Field Resistance (R_sh)': '110 Ω',
        'Brush Drop (V_brush)': '2 × 1 = 2 V',
        'Flux per Pole (Φ)': '0.02 Wb'
      },
      solution: {
        en: `1. Calculate Shunt Field Current:
I_sh = V / R_sh = 220 V / 110 Ω = 2 A.

2. Calculate Total Armature Current:
I_a = I_L + I_sh = 80 A + 2 A = 82 A.

3. Calculate Generated EMF (E_g):
E_g = V + (I_a · R_a) + V_brush
E_g = 220 + (82 · 0.15) + 2 = 220 + 12.3 + 2 = 234.3 Volts.

4. Calculate Speed (N) using EMF Equation:
E_g = (P · Φ · Z · N) / (60 · A)
234.3 = (6 · 0.02 · 600 · N) / (60 · 2)
234.3 = (72 · N) / 120 = 0.6 · N
N = 234.3 / 0.6 = 390.5 RPM.`,
        hi: `1. शंट फील्ड धारा (I_sh):
I_sh = 220 / 110 = 2 A।

2. कुल आर्मेचर धारा (I_a):
I_a = I_L + I_sh = 80 + 2 = 82 A।

3. उत्पन्न EMF (E_g):
E_g = V + I_a·R_a + V_brush = 220 + (82 × 0.15) + 2 = 234.3 V।

4. गति (N) की गणना:
E_g = (P · Φ · Z · N) / (60 · A)
234.3 = (6 × 0.02 × 600 × N) / (60 × 2) = 0.6 · N
N = 234.3 / 0.6 = 390.5 RPM।`,
        bn: `১. শান্ট ফিল্ড কারেন্ট:
I_sh = ২২০ / ১১০ = ২ A।

২. মোট আর্মেচার কারেন্ট:
I_a = ৮০ + ২ = ৮২ A।

৩. উৎপন্ন EMF (E_g):
E_g = ২২০ + (৮২ × ০.১৫) + ২ = ২৩৪.৩ V।

৪. গতি (N) নির্ণয়:
২৩৪.৩ = (৬ × ০.০২ × ৬০০ × N) / (৬০ × ২)
২৩৪.৩ = ০.৬ · N
N = ২৩৪.৩ / ০.৬ = ৩৯০.৫ RPM।`
      },
      finalAnswer: {
        en: '(a) Generated EMF E_g = 234.3 V, (b) Armature Speed N = 390.5 RPM',
        hi: '(a) उत्पन्न EMF E_g = 234.3 V, (b) आर्मेचर गति N = 390.5 RPM',
        bn: '(a) উৎপন্ন EMF E_g = ২৩৪.৩ V, (b) আর্মেচার গতি N = ৩৯০.৫ RPM'
      }
    }
  ],
  practicalApplications: {
    en: [
      'High-Current Lap Generators: Used in commercial electroplating baths, chlor-alkali electrolysis, and heavy DC electric arc welding plants.',
      'High-Voltage Wave Generators: Applied in diesel-electric locomotives, DC rail transit substations, and long-distance DC power grids.',
      'Shaft-Driven Auxiliary Exciters: Employed to excite the rotor magnetic fields of massive 500 MW thermal and hydroelectric synchronous alternators.',
      'Tachometer Generators: Precision miniature DC generators providing linear voltage proportional to shaft RPM for closed-loop motion control.',
      'Variable-Speed Wind Turbines: Direct-drive permanent magnet DC/synchronous generators in remote off-grid renewable energy stations.'
    ],
    hi: [
      'उच्च धारा लैप जनरेटर: इलेक्ट्रोप्लेटिंग, धातु शोधन तथा भारी डीसी इलेक्ट्रिक आर्क वेल्डिंग में प्रयुक्त।',
      'उच्च वोल्टेज वेव जनरेटर: डीजल-इलेक्ट्रिक लोकोमोटिव तथा डीसी रेलवे सबस्टेशनों में प्रयुक्त।',
      'सिंक्रोनस अल्टरनेटर एक्साइटर: बड़े थर्मल व हाइड्रो पावर प्लांट अल्टरनेटर के रोटर को डीसी उत्तेजन देने हेतु।',
      'टैकोमीटर जनरेटर: गति के समानुपाती वोल्टेज देकर मोटर की घूर्णन गति मापने वाले सटीक उपकरण।',
      'पवन ऊर्जा जनरेटर: सुदूर ऑफ-ग्रिड नवीकरणीय बिजली उत्पादन में प्रयुक्त।'
    ],
    bn: [
      'উচ্চ কারেন্ট ল্যাপ জেনারেটর: ইলেক্ট্রোডিপোজিশন, মেটাল প্লেটিং ও ভারী ডিসি আর্ক ওয়েল্ডিং শিল্পে ব্যবহৃত।',
      'উচ্চ ভোল্টেজ ওয়েভ জেনারেটর: ডিজেল-ইলেকট্রিক ট্রেন ইঞ্জিন ও ডিসি ট্র্যাকশন সাবস্টেশনে ব্যবহৃত।',
      'অল্টারনেটর এক্সাইটার: তাপ ও জলবিদ্যুৎ কেন্দ্রের বিশাল সিনক্রোনাস জেনারেটরের ফিল্ডে ডিসি সরবরাহে ব্যবহৃত।',
      'ট্যাকোমিটার জেনারেটর: ঘূর্ণন গতির সমানুপাতিক ভোল্টেজ উৎপাদন করে মোটর স্পিড পরিমাপে ব্যবহৃত।',
      'উইন্ড টারবাইন জেনারেটর: অফ-গ্রিড নবায়নযোগ্য বিদ্যুৎ উৎপাদনে ব্যবহৃত।'
    ]
  },
  importantPoints: {
    en: [
      'The DC generator EMF equation is Eg = (P · Φ · Z · N) / (60 · A) Volts.',
      'In Lap Winding, parallel paths A = P; in Wave Winding, A = 2 regardless of pole count P.',
      'For a given machine, P, Z, and A are fixed during manufacturing, so Eg ∝ Φ · N.',
      'Wave winding produces higher voltage than Lap winding for identical speed, poles, flux, and conductor count.',
      'Equalizer rings are required only in Lap windings to circulate unbalance currents caused by unequal air-gaps under different poles.',
      'Terminal voltage under load is always less than induced EMF: V = Eg - Ia·Ra - V_brush.'
    ],
    hi: [
      'डीसी जनरेटर का EMF सूत्र Eg = (P · Φ · Z · N) / (60 · A) वोल्ट होता है।',
      'लैप वाइंडिंग में समानांतर पथ A = P होते हैं, जबकि वेव वाइंडिंग में सदैव A = 2 होते हैं।',
      'निर्मित मशीन के लिए P, Z और A स्थिर रहते हैं, अतः Eg ∝ Φ · N।',
      'समान चालकों और गति पर वेव वाइंडिंग लैप वाइंडिंग की तुलना में अधिक वोल्टेज पैदा करती है।',
      'इक्वलाइज़र रिंग्स (Equalizer Rings) की आवश्यकता केवल लैप वाइंडिंग में होती है।',
      'लोड पर टर्मिनल वोल्टेज उत्पन्न EMF से सदैव कम होता है: V = Eg - Ia·Ra - V_brush।'
    ],
    bn: [
      'ডিসি জেনারেটরের EMF সূত্র হলো Eg = (P · Φ · Z · N) / (৬০ · A) ভোল্ট।',
      'ল্যাপ ওয়াইন্ডিংয়ে সমান্তরাল পথ A = P এবং ওয়েভ ওয়াইন্ডিংয়ে সর্বদা A = ২।',
      'মেশিন তৈরির পর P, Z এবং A স্থির থাকায় উৎপন্ন ভোল্টেজ Eg ∝ Φ · N।',
      'একই শর্তে ওয়েভ ওয়াইন্ডিং ল্যাপ ওয়াইন্ডিংয়ের চেয়ে বেশি ভোল্টেজ দেয়।',
      'ইকুয়ালাইজার রিং শুধুমাত্র ল্যাপ ওয়াইন্ডিংয়ে প্রয়োজন হয়।',
      'লোড অবস্থায় টার্মিনাল ভোল্টেজ সর্বদা উৎপন্ন EMF অপেক্ষা কম হয়: V = Eg - Ia·Ra - V_brush।'
    ]
  },
  commonMistakes: {
    en: [
      'Confusing total conductors Z with number of coils or slots. Remember Z = 2 × total coils × turns per coil.',
      'Assuming A = P for Wave winding. For simplex Wave winding, A is always 2 regardless of how many poles P the machine has.',
      'Forgetting the factor 60 in the denominator when speed is given in RPM. (If speed is in rev/s, denominator is A, not 60·A).',
      'Neglecting the brush voltage drop (typically 2 V total) in terminal voltage calculations.',
      'Applying Fleming\'s Left-Hand rule instead of Fleming\'s Right-Hand rule for generator action.'
    ],
    hi: [
      'कुल चालक Z को स्लॉट या कॉइल संख्या समझ बैठना। Z = 2 × कॉइल संख्या × टर्न प्रति कॉइल।',
      'वेव वाइंडिंग में A = P मान लेना। वेव वाइंडिंग में A सदैव 2 होता है।',
      'गति RPM में होने पर हर में 60 भूल जाना।',
      'टर्मिनल वोल्टेज गणना में कार्बन ब्रश ड्रॉप (लगभग 2V) को अनदेखा करना।',
      'जनरेटर क्रिया में दाएँ हाथ के नियम के बजाय बाएँ हाथ के नियम का उपयोग करना।'
    ],
    bn: [
      'মোট কন্ডাক্টর Z-কে কয়েল বা স্লট সংখ্যা মনে করা। Z = ২ × মোট কয়েল × প্রতি কয়েলে প্যাঁচ সংখ্যা।',
      'ওয়েভ ওয়াইন্ডিংয়ে A = P ধরা। ওয়েভ ওয়াইন্ডিংয়ে সর্বদা A = ২।',
      'গতি RPM এককে থাকলে হরে ৬০ গুণ করতে ভুলে যাওয়া।',
      'টার্মিনাল ভোল্টেজ গণনায় ব্রাশ ড্রপ (২ V) বাদ না দেওয়া।',
      'জেনারেটরের ক্ষেত্রে ডান হাত নিয়মের বদলে ভুলবশত বাম হাত নিয়ম প্রয়োগ করা।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-dc-gen-1',
      question: {
        en: 'In a DC generator, if the number of poles is 6 and the armature is wave wound, what is the number of parallel paths (A)?',
        hi: 'एक 6-पोल वेव-वाउंड डीसी जनरेटर में समानांतर पथों (A) की संख्या कितनी होगी?',
        bn: 'একটি ৬-পোল ওয়েভ-ওয়াইন্ডিং ডিসি জেনারেটরে সমান্তরাল পথের সংখ্যা (A) কত হবে?'
      },
      options: [
        { id: 'opt-1', text: { en: '6', hi: '6', bn: '৬' } },
        { id: 'opt-2', text: { en: '2', hi: '2', bn: '২' } },
        { id: 'opt-3', text: { en: '12', hi: '12', bn: '১২' } },
        { id: 'opt-4', text: { en: '3', hi: '3', bn: '৩' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'For any simplex wave-wound armature, the number of parallel paths is always A = 2, regardless of the number of poles.',
        hi: 'सिंप्लेक्स वेव-वाउंड आर्मेचर में ध्रुवों की संख्या चाहे जो हो, समानांतर पथों की संख्या सदैव A = 2 होती है।',
        bn: 'সিমপ্লেক্স ওয়েভ ওয়াইন্ডিংয়ে পোলের সংখ্যা যাই হোক না কেন, সমান্তরাল পথ সর্বদা A = ২ থাকে।'
      }
    },
    {
      id: 'mcq-dc-gen-2',
      question: {
        en: 'If the rotational speed of a DC generator is doubled and the magnetic flux per pole is halved, the generated EMF will:',
        hi: 'यदि डीसी जनरेटर की घूर्णन गति दोगुनी कर दी जाए और प्रति पोल फ्लक्स आधा कर दिया जाए, तो उत्पन्न EMF:',
        bn: 'ডিসি জেনারেটরের ঘূর্ণন গতি দ্বিগুণ এবং প্রতি পোলে ফ্লাক্স অর্ধেক করা হলে, উৎপাদিত EMF:'
      },
      options: [
        { id: 'opt-1', text: { en: 'Be doubled', hi: 'दोगुना हो जाएगा', bn: 'দ্বিগুণ হবে' } },
        { id: 'opt-2', text: { en: 'Be halved', hi: 'आधा हो जाएगा', bn: 'অর্ধেক হবে' } },
        { id: 'opt-3', text: { en: 'Remain unchanged', hi: 'अपरिवर्तित रहेगा', bn: 'অপরিবর্তিত থাকবে' } },
        { id: 'opt-4', text: { en: 'Become four times', hi: 'चार गुना हो जाएगा', bn: 'চার গুণ হবে' } }
      ],
      correctOptionId: 'opt-3',
      explanation: {
        en: 'Generated EMF is directly proportional to the product of flux and speed: Eg ∝ Φ · N. When N becomes 2N and Φ becomes Φ/2, the product (2N) · (Φ/2) = Φ · N remains constant.',
        hi: 'उत्पन्न EMF फ्लक्स और गति के गुणनफल के समानुपाती होता है: Eg ∝ Φ · N। (2N) × (Φ/2) = Φ · N होने से EMF अपरिवर्तित रहेगा।',
        bn: 'উৎপন্ন EMF হলো ফ্লাক্স ও গতির গুণফলের সমানুপাতিক: Eg ∝ Φ · N। (2N) × (Φ/2) = Φ · N অপরিবর্তিত থাকে।'
      }
    },
    {
      id: 'mcq-dc-gen-3',
      question: {
        en: 'Which rule is used to determine the direction of induced EMF and current in a DC generator conductor?',
        hi: 'डीसी जनरेटर चालक में प्रेरित EMF एवं धारा की दिशा ज्ञात करने के लिए किस नियम का उपयोग किया जाता है?',
        bn: 'ডিসি জেনারেটর কন্ডাক্টরে আবিষ্ট EMF ও কারেন্টের দিক নির্ধারণে কোন সূত্র ব্যবহার করা হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: "Fleming's Right-Hand Rule", hi: "फ्लेमिंग का दायाँ हाथ नियम", bn: "ফ্লেমিংয়ের ডান হাত নিয়ম" } },
        { id: 'opt-2', text: { en: "Fleming's Left-Hand Rule", hi: "फ्लेमिंग का बायाँ हाथ नियम", bn: "ফ্লেমিংয়ের বাম হাত নিয়ম" } },
        { id: 'opt-3', text: { en: "Ampere's Circuital Law", hi: "एम्पीयर का परिपथीय नियम", bn: "অ্যাম্পিয়ারের সার্কিটাল সূত্র" } },
        { id: 'opt-4', text: { en: "Coulomb's Law", hi: "कूलॉम का नियम", bn: "কুলম্বের সূত্র" } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: "Fleming's Right-Hand Rule applies to generators (mechanical motion generating electricity), whereas Fleming's Left-Hand Rule applies to motors.",
        hi: 'फ्लेमिंग का दायाँ हाथ नियम जनरेटरों पर लागू होता है, जबकि बायाँ हाथ नियम मोटरों के लिए होता है।',
        bn: 'ফ্লেমিংয়ের ডান হাত নিয়ম জেনারেটরে এবং বাম হাত নিয়ম মোটরে প্রযোজ্য।'
      }
    },
    {
      id: 'mcq-dc-gen-4',
      question: {
        en: 'For low-voltage, high-current applications, which type of armature winding is preferred?',
        hi: 'कम वोल्टेज एवं उच्च धारा अनुप्रयोगों के लिए किस प्रकार की आर्मेचर वाइंडिंग को प्राथमिकता दी जाती है?',
        bn: 'কম ভোল্টেজ ও উচ্চ কারেন্ট অ্যাপ্লিকেশনের জন্য কোন ধরণের আর্মেচার ওয়াইন্ডিং উপযুক্ত?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Simplex Wave Winding', hi: 'सिंप्लेक्स वेव वाइंडिंग', bn: 'সিমপ্লেক্স ওয়েভ ওয়াইন্ডিং' } },
        { id: 'opt-2', text: { en: 'Simplex Lap Winding', hi: 'सिंप्लेक्स लैप वाइंडिंग', bn: 'সিমপ্লেক্স ল্যাপ ওয়াইন্ডিং' } },
        { id: 'opt-3', text: { en: 'Open Coil Winding', hi: 'ओपन कॉइल वाइंडिंग', bn: 'ওপেন কয়েল ওয়াইন্ডিং' } },
        { id: 'opt-4', text: { en: 'Concentrated Winding', hi: 'कंसेंट्रेटेड वाइंडिंग', bn: 'কনসেন্ট্রেটেড ওয়াইন্ডিং' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'Lap winding provides A = P parallel paths, dividing the total current among P branches, making it ideal for high current.',
        hi: 'लैप वाइंडिंग में A = P समानांतर पथ होते हैं, जो भारी धारा को कई शाखाओं में बाँटते हैं।',
        bn: 'ল্যাপ ওয়াইন্ডিংয়ে A = P সমান্তরাল পথ থাকায় মোট কারেন্ট বিভক্ত হয়ে সহজে উচ্চ কারেন্ট সরবরাহ করে।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-dc-gen-1',
      question: {
        en: 'An 8-pole DC shunt generator has 720 wave-connected armature conductors. The flux per pole is 0.03 Wb and the speed is 750 RPM. If the armature resistance is 0.25 Ω and the load current is 50 A, determine the terminal voltage (neglect brush drop).',
        hi: 'एक 8-पोल डीसी शंट जनरेटर में 720 वेव-कनेक्टेड आर्मेचर चालक हैं। प्रति पोल फ्लक्स 0.03 Wb तथा गति 750 RPM है। यदि आर्मेचर प्रतिरोध 0.25 Ω एवं लोड धारा 50 A है, तो टर्मिनल वोल्टेज ज्ञात कीजिए (ब्रश ड्रॉप नगण्य मानें)।',
        bn: 'একটি ৮-পোল ডিসি শান্ট জেনারেটরে ৭২০টি ওয়েভ-সংযুক্ত আর্মেচার কন্ডাক্টর রয়েছে। প্রতি পোলে ফ্লাক্স ০.০৩ Wb এবং গতি ৭৫০ RPM। আর্মেচার রোধ ০.২৫ Ω ও লোড কারেন্ট ৫০ A হলে টার্মিনাল ভোল্টেজ নির্ণয় করো (ব্রাশ ড্রপ অগ্রাহ্য করো)।'
      },
      hint: {
        en: 'Use Eg = (P · Φ · Z · N) / (60 · A) with A = 2, then calculate V = Eg - (Ia · Ra). Assume Ia ≈ I_load if field current is negligible.',
        hi: 'A = 2 के साथ Eg = (P · Φ · Z · N) / (60 · A) का प्रयोग करें, फिर V = Eg - (Ia · Ra) निकालें।',
        bn: 'A = ২ সহ Eg = (P · Φ · Z · N) / (৬০ · A) ব্যবহার করো, তারপর V = Eg - (Ia · Ra) বের করো।'
      },
      answerKey: {
        en: 'Eg = (8 × 0.03 × 720 × 750) / (60 × 2) = 1080 V. Terminal Voltage V = 1080 - (50 × 0.25) = 1080 - 12.5 = 1067.5 V.',
        hi: 'Eg = (8 × 0.03 × 720 × 750) / 120 = 1080 V. V = 1080 - (50 × 0.25) = 1067.5 V.',
        bn: 'Eg = (৮ × ০.০৩ × ৭২০ × ৭৫০) / ১২০ = ১০৮০ V। টার্মিনাল ভোল্টেজ V = ১০৮০ - (৫০ × ০.২৫) = ১০৬৭.৫ V।'
      }
    },
    {
      id: 'pq-dc-gen-2',
      question: {
        en: 'Explain why equalizer connections are used in lap wound DC generators but not in wave wound DC generators.',
        hi: 'स्पष्ट कीजिए कि लैप वाउंड डीसी जनरेटर में इक्वलाइज़र कनेक्शन क्यों प्रयुक्त होते हैं जबकि वेव वाउंड जनरेटर में नहीं?',
        bn: 'ব্যাখ্যা করো কেন ল্যাপ ওয়াইন্ডিং ডিসি জেনারেটরে ইকুয়ালাইজার সংযোগ ব্যবহৃত হয় কিন্তু ওয়েভ ওয়াইন্ডিংয়ে হয় না।'
      },
      hint: {
        en: 'Focus on air-gap wear, slight magnetic unbalance under different poles, and how conductors in each path are physically distributed across poles.',
        hi: 'विभिन्न ध्रुवों के नीचे असमान एयर-गैप और समानांतर पथों में चालकों के वितरण पर ध्यान केंद्रित करें।',
        bn: 'বিভিন্ন পোলের নিচে অসমান এয়ার-গ্যাপ এবং সমান্তরাল পথে কন্ডাক্টরের বিন্যাসের ওপর ভিত্তি করে লেখো।'
      },
      answerKey: {
        en: 'In lap windings, conductors of a specific parallel path lie under only one pair of adjacent poles. Unequal air-gaps cause unequal induced EMFs, driving destructive circulating currents across brushes. Equalizer rings bypass these circulating currents internally away from brushes. In wave windings, conductors in both paths are distributed equally under all poles around the entire periphery, inherently equalizing induced voltages.',
        hi: 'लैप वाइंडिंग में प्रत्येक समानांतर पथ केवल एक जोड़ी पोल के नीचे होता है। एयर-गैप असमान होने पर अलग-अलग पथों में EMF अलग होता है, जिससे ब्रशों पर स्पार्किंग कराने वाली सर्कुलेटिंग धाराएं बहती हैं। इक्वलाइज़र रिंग इन धाराओं को ब्रश से दूर रखती हैं। वेव वाइंडिंग में दोनों पथों के चालक सभी पोलों के नीचे समान रूप से फैले होते हैं, अतः EMF स्वतः संतुलित रहता है।',
        bn: 'ল্যাপ ওয়াইন্ডিংয়ে প্রতিটি সমান্তরাল পথ কেবল একটি সংলগ্ন পোল জোড়ার নিচে থাকে। এয়ার-গ্যাপের তারতম্যে ভোল্টেজ অসমান হয়ে ক্ষতিকর কারেন্ট তৈরি করে। ইকুয়ালাইজার রিং এই কারেন্টকে ব্রাশ এড়িয়ে প্রবাহিত করে। ওয়েভ ওয়াইন্ডিংয়ে প্রতিটি পথের কন্ডাক্টর সব পোলের নিচে সমভাবে বিস্তৃত থাকায় ভোল্টেজ নিজে থেকেই ভারসাম্যপূর্ণ থাকে।'
      }
    }
  ]
};
