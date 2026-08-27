import { Lesson } from '../types';

export const LESSON_ENERGY_STORED_CAPACITOR: Lesson = {
  id: 'lsn-ch7-energy-stored-capacitor',
  topicId: 'ch7-energy-stored-capacitor',
  chapterId: 'ch-capacitors',
  order: 8,
  title: {
    en: 'Energy Stored in a Capacitor & Electrostatic Energy Density',
    hi: 'संधारित्र में संचित ऊर्जा एवं स्थिरवैद्युत ऊर्जा घनत्व',
    bn: 'ক্যাপাসিটরে সঞ্চিত শক্তি ও স্থিরতড়িৎ এনার্জি ডেনসিটি'
  },
  description: {
    en: 'Derivation of electrostatic energy formulas (E = ½ C·V² = ½ Q·V = Q² / 2C), electrostatic energy density (u = ½ ε·E²), and heat loss during capacitor sharing.',
    hi: 'स्थिरवैद्युत ऊर्जा सूत्र (E = ½ C·V²), ऊर्जा घनत्व (u = ½ ε·E²) एवं संधारित्रों के बीच आवेश साझाकरण में ऊर्जा हानि।',
    bn: 'স্থিরবৈদ্যুতিক শক্তি সমীকরণ (E = ½ C·V² = ½ Q·V = Q² / 2C), এনার্জি ডেনসিটি (u = ½ ε·E²) ও চার্জ শেয়ারিংয়ে শক্তির অপচয়।'
  },
  easyExplanation: {
    en: 'Charging a capacitor is like compressing a spring. As you push more electrons onto the plates against the repulsive electric field, you do mechanical-electrical work. That energy is stored safely in the electric field inside the dielectric and can be released in a fraction of a millisecond.',
    hi: 'कैपेसिटर को चार्ज करना एक स्प्रिंग को दबाने जैसा है। जैसे-जैसे आप प्रतिकर्षण बल के विरुद्ध अधिक आवेश धकेलते हैं, कार्य संचित होता जाता है। यह ऊर्जा डाइइलेक्ट्रिक के विद्युत क्षेत्र में सुरक्षित रहती है और मिलीसेकंड में मुक्त हो सकती है।',
    bn: 'ক্যাপাসিটর চার্জ করা যেন একটি স্প্রিংকে সংকুচিত করে শক্তি জমা করার মতো। বিকর্ষণ বলের বিরুদ্ধে পাতের উপর ইলেকট্রন জমা করতে যে বৈদ্যুতিক কার্য করা হয়, তা ডাই-ইলেকট্রিকের তড়িৎ ক্ষেত্রে বিভব শক্তি হিসেবে জমা থাকে এবং মাইক্রোসেকেন্ডেই দ্রুত নির্গত হতে পারে।'
  },
  detailedExplanation: {
    en: `1. Mathematical Derivation of Stored Energy:
Let a capacitor of capacitance C have instantaneous charge 'q' and voltage 'v = q/C' at any instant during charging.
Small incremental work done to add an infinitesimal charge 'dq' against voltage v is:
dW = v · dq = (q / C) · dq
Integrating total work from uncharged state (q = 0) to full charge (q = Q):
W = ∫[0 to Q] (q / C) dq = (1 / C) · [ q² / 2 ][0 to Q] = Q² / (2 · C)

Using Q = C · V:
W = ½ · C · V² [Joules]
W = ½ · Q · V [Joules]
W = Q² / (2 · C) [Joules]

2. Electrostatic Energy Density (u):
Energy density is the electrostatic potential energy stored per unit volume (m³) of the dielectric space between plates:
Volume = Area × Distance = A · d
u = Total Energy / Volume = (½ · C · V²) / (A · d)
Substituting C = (ε · A) / d and V = E · d:
u = ½ · [ (ε · A / d) · (E · d)² ] / (A · d)
u = ½ · ε · E² = ½ · ε0 · εr · E² [Joules / m³]
Or in terms of flux density: u = ½ · (D² / ε) = ½ · D · E.

3. Energy Loss During Capacitor Sharing (Re-distribution):
When a charged capacitor C1 (at voltage V1) is connected to an uncharged capacitor C2:
- Common final voltage: V_common = (C1 · V1) / (C1 + C2)
- Total initial energy: U_initial = ½ · C1 · V1²
- Total final energy: U_final = ½ · (C1 + C2) · V_common²
- Net Energy Lost (dissipated entirely as heat and electromagnetic sparks):
ΔU = ½ · [ (C1 · C2) / (C1 + C2) ] · (V1 - V2)²
Note: Exactly 50% of the energy drawn from a battery is lost as heat in the charging resistance, regardless of how small the resistance is!`,
    hi: `1. संचित ऊर्जा सूत्र का निगमन:
dW = v · dq = (q / C) · dq
कुल कार्य (ऊर्जा): W = ½ · C · V² = ½ · Q · V = Q² / (2 · C) [जूल]

2. ऊर्जा घनत्व (Energy Density, u):
डाइइलेक्ट्रिक के प्रति इकाई आयतन में संचित ऊर्जा:
u = ½ · ε0 · εr · E² [जूल / m³]

3. आवेश साझाकरण में ऊर्जा हानि (Energy Loss in Sharing):
जब C1 और C2 को जोड़ा जाता है, तो तारों के प्रतिरोध और चिंगारी में नष्ट ऊर्जा:
ΔU = ½ · [ (C1 · C2) / (C1 + C2) ] · (V1 - V2)²
बैटरी से ली गई कुल ऊर्जा का ठीक 50% भाग चार्जिंग प्रतिरोध में ऊष्मा बनकर नष्ट हो जाता है।`,
    bn: `১. সঞ্চিত শক্তির সমীকরণ প্রতিপাদন:
dW = v · dq = (q / C) · dq
মোট কৃতকার্য (শক্তি): W = ½ · C · V² = ½ · Q · V = Q² / (2 · C) [জুল]

২. স্থিরতড়িৎ এনার্জি ডেনসিটি (u):
ক্যাপাসিটরের ডাই-ইলেকট্রিকের প্রতি একক আয়তনে সঞ্চিত শক্তি:
u = ½ · ε0 · εr · E² [Joule / m³]

৩. চার্জ শেয়ারিংয়ে শক্তির অপচয়:
দুটি ক্যাপাসিটর C1 এবং C2 যুক্ত করলে তারের রোধ ও স্পার্কিংয়ে যে শক্তি তাপ হিসেবে অপচয় হয়:
ΔU = ½ · [ (C1 · C2) / (C1 + C2) ] · (V1 - V2)²
ব্যাটারি থেকে উত্তোলিত মোট শক্তির ঠিক ৫০% অংশ চার্জিং রোধে তাপ হিসেবে অপচয় ঘটে।`
  },
  formulas: [
    {
      expression: 'W = ½ · C · V² = ½ · Q · V = Q² / (2 · C)',
      description: {
        en: 'Electrostatic potential energy stored in a capacitor in Joules',
        hi: 'संधारित्र में संचित स्थिरवैद्युत ऊर्जा (जूल में)',
        bn: 'ক্যাপাসিটরে সঞ্চিত স্থিরবৈদ্যুতিক শক্তি (জুল এককে)'
      }
    },
    {
      expression: 'u = ½ · ε0 · εr · E²',
      description: {
        en: 'Electrostatic energy density per unit volume (J/m³)',
        hi: 'प्रति इकाई आयतन ऊर्जा घनत्व',
        bn: 'প্রতি একক আয়তনে এনার্জি ডেনসিটি'
      }
    },
    {
      expression: 'ΔU = ½ · [ (C1 · C2) / (C1 + C2) ] · (V1 - V2)²',
      description: {
        en: 'Energy dissipated during charge sharing between two capacitors',
        hi: 'आवेश साझाकरण के दौरान नष्ट ऊर्जा',
        bn: 'চার্জ শেয়ারিংয়ের সময় অপচয় হওয়া শক্তি'
      }
    }
  ],
  practicalApplications: [
    {
      en: 'Medical defibrillators storing 200J to 360J to deliver rapid life-saving cardiac shock pulses',
      hi: 'हार्ट अटैक के दौरान जीवन रक्षक शॉक देने हेतु मेडिकल डिफाइब्रिलेटर (200J - 360J)',
      bn: 'হৃদরোগীদের জীবন রক্ষার্থে ২০০-৩৬০ জুল উচ্চ শক্তির দ্রুত শক প্রদানের জন্য মেডিকেল ডিফিব্রিলেটর'
    },
    {
      en: 'Camera xenon flash units releasing high-current pulses in under 1 millisecond',
      hi: 'कैमरा फ्लैश लाइट में 1 मिलीसेकंड में तीव्र रोशनी उत्पन्न करने हेतु डिस्चार्ज',
      bn: 'ক্যামেরা জেনন ফ্ল্যাশে মিলি সেকেন্ডের ভগ্নাংশে তীব্র আলো তৈরিতে ক্যাপাসিটর ডিসচার্জ'
    },
    {
      en: 'Pulsed power lasers and electromagnetic railgun energy banks',
      hi: 'पल्स पावर लेजर एवं रेलगन ऊर्जा बैंक',
      bn: 'পালসড লেজার ও ইলেক্ট্রোম্যাগনেটিক রেইলগান এনার্জি ব্যাংক'
    }
  ],
  importantPoints: {
    en: [
      'Energy stored scales quadratically with voltage: Doubling the voltage quadruples the stored energy (E ∝ V²)',
      'When charging a capacitor from a constant voltage source V, total energy delivered by source is Q·V, while capacitor stores only ½·Q·V (50% is always lost as heat)',
      'High-voltage capacitor banks retain dangerous charges for hours; ALWAYS use a rated bleeder resistor to discharge before servicing'
    ],
    hi: [
      'ऊर्जा वोल्टेज के वर्ग के समानुपाती होती है: वोल्टेज दोगुना करने पर ऊर्जा 4 गुना बढ़ जाती है (E ∝ V²)',
      'बैटरी कुल Q·V ऊर्जा देती है, लेकिन कैपेसिटर केवल ½·Q·V संचित करता है (50% हमेशा ऊष्मा में बदलता है)',
      'हाई-वोल्टेज कैपेसिटर घंटों तक खतरनाक चार्ज बनाए रखते हैं; छूने से पहले ब्लीडर प्रतिरोधक से डिस्चार्ज करें'
    ],
    bn: [
      'শক্তি ভোল্টেজের বর্গের সমানুপাতিক: ভোল্টেজ দ্বিগুণ করলে সঞ্চিত শক্তি ৪ গুণ বৃদ্ধি পায় (E ∝ V²)',
      'ব্যাটারি মোট Q·V শক্তি সরবরাহ করলেও ক্যাপাসিটর মাত্র ½·Q·V শক্তি জমা করতে পারে (বাকি ৫০% রোধে তাপ হয়)',
      'উচ্চ ভোল্টেজ ক্যাপাসিটর দীর্ঘক্ষণ বিপজ্জনক চার্জ ধরে রাখে; কাজ করার আগে ব্লিডার রেজিস্টর দিয়ে ডিসচার্জ করতে হবে'
    ]
  },
  commonMistakes: {
    en: [
      'Forgetting the ½ factor in the formula (writing C·V² instead of ½·C·V²)',
      'Assuming that 100% of the energy supplied by a DC source is stored in the capacitor'
    ],
    hi: [
      'सूत्र में ½ लगाना भूल जाना (½·C·V² के स्थान पर केवल C·V² लिखना)',
      'यह मानना कि बैटरी की 100% ऊर्जा कैपेसिटर में सुरक्षित जमा हो जाती है'
    ],
    bn: [
      'সূত্রে ½ দিতে ভুলে যাওয়া (½·C·V² এর বদলে কেবল C·V² লেখা)',
      'মনে করা যে ডিসি উৎসের শতভাগ শক্তিই ক্যাপাসিটরে অক্ষত জমা থাকে'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch7-8-1',
      question: {
        en: 'A 100 μF capacitor is charged to a potential difference of 400 V. The electrostatic energy stored in it is:',
        hi: 'एक 100 μF का संधारित्र 400 V के विभवांतर तक आवेशित है। इसमें संचित स्थिरवैद्युत ऊर्जा होगी:',
        bn: 'একটি 100 μF ক্যাপাসিটরকে 400 V বিভব পার্থক্যে চার্জ করা হলো। এতে সঞ্চিত স্থিরবৈদ্যুতিক শক্তি কত?'
      },
      options: [
        { id: 'opt-a', text: { en: '4 Joules', hi: '4 जूल', bn: '৪ জুল' } },
        { id: 'opt-b', text: { en: '8 Joules', hi: '8 जूल', bn: '৮ জুল' } },
        { id: 'opt-c', text: { en: '16 Joules', hi: '16 जूल', bn: '১৬ জুল' } },
        { id: 'opt-d', text: { en: '80 Joules', hi: '80 जूल', bn: '৮০ জুল' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'W = ½ · C · V² = 0.5 · (100 × 10⁻⁶ F) · (400 V)² = 0.5 · 10⁻⁴ · 160,000 = 8 Joules.',
        hi: 'W = ½ × 100 × 10⁻⁶ × (400)² = 0.5 × 10⁻⁴ × 160000 = 8 जूल।',
        bn: 'W = ½ × C × V² = ০.৫ × (১০০ × 10⁻⁶ F) × (৪০০ V)² = ৮ জুল।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch7-8-1',
      question: {
        en: 'A defibrillator capacitor of 32 μF delivers 360 Joules of electrical energy to a patient during cardiac arrest. Find the voltage to which the capacitor was initially charged.',
        hi: 'एक 32 μF का डिफाइब्रिलेटर कैपेसिटर 360 जूल ऊर्जा प्रदान करता है। ज्ञात करें कि कैपेसिटर को कितने वोल्टेज तक चार्ज किया गया था।',
        bn: 'একটি ৩২ μF ডিফিব্রিলেটর ক্যাপাসিটর রোগীর শরীরে ৩৬০ জুল শক্তি প্রদান করে। ক্যাপাসিটরটি কত ভোল্টেজে চার্জ করা হয়েছিল?'
      },
      hint: {
        en: 'Rearrange W = ½ C V² to find V = √(2W / C).',
        hi: 'V = √(2W / C) सूत्र का प्रयोग करें।',
        bn: 'V = √(2W / C) সূত্র ব্যবহার করে ভোল্টেজ বের করুন।'
      },
      answerKey: {
        en: 'V = √[ (2 × 360 J) / (32 × 10⁻⁶ F) ] = √[ 720 / (32 × 10⁻⁶) ] = √[ 22,500,000 ] = 4,743.4 V (≈ 4.74 kV).',
        hi: 'V = √(720 / 32×10⁻⁶) = 4,743.4 V (लगभग 4.74 kV).',
        bn: 'V = √[ (২ × ৩৬০) / (৩২ × 10⁻⁶) ] = √[ ২২,৫০০,০০০ ] = ৪,৭৪৩.৪ ভোল্ট (প্রায় ৪.৭৪ kV)।'
      }
    }
  ]
};
