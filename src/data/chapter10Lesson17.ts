import { Lesson } from '../types';

export const LESSON_INDUCTION_HEATING_MELTING: Lesson = {
  id: 'lsn-ch10-induction-heating-melting',
  topicId: 'ch10-induction-heating-melting',
  chapterId: 'ch-em-induction',
  order: 17,
  title: {
    en: 'Induction Heating & Melting',
    hi: 'औद्योगिक प्रेरण तापन, सतह कठोरीकरण एवं प्रेरण भट्टियां',
    bn: 'শিল্প আবেশ উত্তাপন, পৃষ্ঠ দৃঢ়ীকরণ ও ইন্ডাকশন ফার্নেস'
  },
  description: {
    en: 'Principles of high-frequency electromagnetic induction heating, skin depth equation, eddy-current Joule losses in conductive workpieces, hysteresis heating, coreless induction melting furnaces, and metallurgy safety.',
    hi: 'उच्च-आवृत्ति विद्युत-चुंबकीय प्रेरण तापन, स्किन डेप्थ समीकरण, चालक वर्कपीस में भंवर-धारा जूल हानियां, शैथिल्य तापन, कोरलेस प्रेरण गलन भट्टियां एवं सुरक्षा सिद्धांतों का संपूर्ण अध्ययन।',
    bn: 'উচ্চ-কম্পাঙ্ক তড়িৎচৌম্বকীয় আবেশ উত্তাপন, স্কিন ডেপথ সমীকরণ, পরিবাহী ওয়ার্কপিসে এডি-কারেন্ট জুল অপচয়, হিস্টেরেসিস উত্তাপন, কোরলেস ইন্ডাকশন ফার্নেস ও ধাতববিদ্যার নিরাপত্তা বিশ্লেষণ।'
  },
  estimatedMinutes: 35,
  easyExplanation: {
    en: 'How can you heat a solid steel rod until it glows blinding white hot and melts into liquid metal in seconds without any flames, gases, or physical contact? The secret is Induction Heating! An alternating current flowing through a copper coil creates an intense, rapidly flipping magnetic field. When a piece of metal is placed inside this coil, the fluctuating magnetic field drives massive swirling electrical whirlpools—eddy currents—directly inside the metal. Because the metal resists this current flow, the electrical energy instantly turns into fiery heat by Joule dissipation (I²R). High frequencies squeeze these currents into an ultra-thin surface skin, allowing manufacturers to harden the outer surface of gears and crankshafts while keeping the inner core tough and flexible!',
    hi: 'बिना किसी आग, गैस या सीधे संपर्क के, एक ठोस लोहे की छड़ को कुछ ही सेकंड में लाल-तप्त कर पिघलाया कैसे जा सकता है? इसका रहस्य है प्रेरण तापन (Induction Heating)! जब एक तांबे की कुण्डली में उच्च-आवृत्ति वाली प्रत्यावर्ती धारा (AC) बहती है, तो वह एक तीव्र और तेजी से बदलने वाला चुंबकीय क्षेत्र बनाती है। जब इस कुण्डली के अंदर किसी धातु को रखा जाता है, तो फैराडे के नियम से उस धातु के भीतर भारी भंवर धाराएं (Eddy Currents) घूमने लगती हैं। धातु के अपने प्रतिरोध के कारण यह धारा तुरंत प्रचंड जूल ऊष्मा (I²R) में बदल जाती है। उच्च आवृत्ति के कारण यह ऊष्मा केवल बाहरी सतह पर केंद्रित रहती है, जिससे गियर और पहियों की सतह को कठोर बनाया जाता है जबकि उनका भीतरी भाग लचीला और मजबूत बना रहता है!',
    bn: 'কোনো আগুন, গ্যাস বা স্পর্শ ছাড়াই কীভাবে একটি শক্ত ইস্পাতের রড কয়েক সেকেন্ডে তীব্র উত্তপ্ত হয়ে তরলে পরিণত হতে পারে? এর মূল রহস্য হলো আবেশ উত্তাপন (Induction Heating)! তামার কয়েলে উচ্চ-কম্পাঙ্কের এসি কারেন্ট পাঠালে একটি অতি দ্রুত পরিবর্তনশীল তীব্র চৌম্বক ক্ষেত্র তৈরি হয়। এর ভেতরে কোনো ধাতব বস্তু রাখলে ফ্যারাডের সূত্রানুযায়ী ধাতুর অভ্যন্তরে তীব্র ঘূর্ণি বা এডি কারেন্ট উৎপন্ন হয়। ধাতুর নিজস্ব বৈদ্যুতিক রোধের ফলে বিপুল পরিমাণ জুল তাপ (I²R) সৃষ্টি হয়। উচ্চ কম্পাঙ্কের কারণে বিদ্যুৎ কেবল ধাতুর ওপরের পাতলা স্তরে সীমাবদ্ধ থাকে, যাকে স্কিন ইফেক্ট বলে। এর মাধ্যমে গিয়ার ও শ্যাফটের বাইরের অংশ কঠিন বা হার্ডেনিং করা যায় অথচ ভেতরের কোর শক্ত ও নমনীয় থাকে!'
  },
  detailedExplanation: {
    en: `1. Fundamental Electromagnetic Mechanism:
Induction heating utilizes Faraday's law of electromagnetic induction, Ampère's circuital law, and Joule's first law of electric heating:
- An alternating current I_coil(t) = I_0 sin(ωt) excites a work coil (usually water-cooled copper tubing), generating an alternating axial magnetic field H(t) inside the coil bore.
- By Maxwell-Faraday's equation: ∇ × E = -∂B/∂t, the time-varying magnetic flux induces a solenoidal electric field E within any electrically conductive workpiece placed inside the coil.
- According to Ohm's law in point form, this electric field drives closed eddy current loops of current density J = σ · E = (1/ρ) · E.
- The volumetric power density dissipated as thermal heat is:
  p_v = J · E = J² / σ = σ · E² (Watts/m³)
- In ferromagnetic materials below the Curie temperature (T_Curie ≈ 770°C for carbon steel), additional thermal energy is generated per AC cycle by magnetic hysteresis loss:
  P_h = η_h · f · B_max^1.6 · Volume (Watts)

2. Skin Effect & Penetration Depth (δ):
Due to the self-induced magnetic counter-flux created by the eddy currents (Lenz's law), the alternating magnetic field and current density are attenuated exponentially from the cylinder outer surface toward its central axis:
  J(r) = J_surface · exp(-(R - r) / δ)
The skin depth (or depth of penetration) δ is formally defined as the depth at which the current density drops to 1/e (approximately 36.8%) of its surface value:
  δ = √( ρ / (π · f · μ) ) = √( ρ / (π · f · μ_0 · μ_r) ) (meters)
where:
- ρ is the electrical resistivity of the workpiece (Ω·m)
- f is the excitation frequency (Hz)
- μ_0 = 4π × 10⁻⁷ H/m (vacuum permeability)
- μ_r is the relative magnetic permeability of the workpiece

3. Frequency Selection for Industrial Heat Treatment:
- Low Frequencies (50 Hz – 1 kHz): Deep penetration depth (δ ≈ 10 – 35 mm). Ideal for coreless induction melting furnaces, bulk through-heating of large steel billets for forging, and rail preheating.
- Medium Frequencies (1 kHz – 10 kHz): Moderate penetration depth (δ ≈ 2 – 8 mm). Used for deep case hardening of heavy automotive gears, axle shafts, and tube seam annealing.
- High / Radio Frequencies (100 kHz – 450 kHz): Extremely shallow penetration depth (δ ≈ 0.1 – 1.0 mm). Used for rapid shallow surface hardening of gear teeth, surgical blades, and precision tool edges where the ductile core must remain unaffected.

4. The Curie Point Transition (T_Curie):
When ferromagnetic steel is heated past its Curie temperature (~770°C):
- The atomic magnetic dipoles lose their spontaneous alignment due to thermal agitation.
- The relative permeability abruptly collapses from μ_r ≈ 100–500 down to μ_r = 1.0 (paramagnetic state).
- By the skin depth formula, as μ drops by a factor of 100–400, the penetration depth δ immediately widens by a factor of 10–20:
  δ_hot / δ_cold = √(μ_cold / μ_hot) ≈ √200 ≈ 14.1
- The power supply must adapt its frequency or resonant matching network to maintain efficient heating above the Curie point.

5. Coreless Induction Melting Furnaces:
- A refractory crucible holds the scrap metal charge, surrounded coaxially by a multi-turn water-cooled copper coil.
- Strong electromagnetic Lorentz forces (J × B) generate intense electromagnetic stirring within the molten liquid metal, ensuring uniform thermal distribution and homogeneous alloy composition without mechanical stirrers.
- Energy efficiency typically exceeds 75–85%, vastly cleaner and faster than fossil-fuel arc or gas furnaces.`,
    hi: 'प्रेरण तापन का विस्तृत इंजीनियरिंग विश्लेषण: फैराडे के नियम, एम्पीयर के नियम एवं जूल के तापन नियम का संयुक्त प्रभाव। स्किन डेप्थ δ = √(ρ / πfμ) का गणितीय निगमन। 770°C पर क्यूरी तापमान संक्रमण (Curie Transition) तथा चुंबकशीलता μ_r का पतन। कोरलेस इंडक्शन भट्टियों में विद्युत-चुंबकीय मथने की क्रिया (Electromagnetic Stirring) एवं धातु विज्ञान सुरक्षा।',
    bn: 'ইন্ডাকশন হিটিংয়ের বিস্তারিত ইঞ্জিনিয়ারিং বিশ্লেষণ: ফ্যারাডের সূত্র, অ্যাম্পিয়ারের সূত্র ও জুলের সূত্রের সমন্বিত রূপ। স্কিন ডেপথের সমীকরণ δ = √(ρ / πfμ)। ৭৭০°C তাপমাত্রায় কুরি পয়েন্টে রূপান্তর এবং ভেদ্যতার হ্রাস। কোরলেস ইন্ডাকশন ফার্নেসে ইলেক্ট্রোম্যাগনেটিক স্টিয়ারিং এবং উচ্চ-কম্পাঙ্ক ধাতুবিদ্যার নিরাপত্তা।'
  },
  formulas: [
    {
      id: 'f-ch10-l17-1',
      formula: 'δ = √( ρ / (π · f · μ_0 · μ_r) )',
      description: {
        en: 'Skin depth (depth of penetration) in meters, where current density drops to 36.8% of surface value.',
        hi: 'स्किन डेप्थ (प्रवेश गहराई) मीटर में, जहाँ धारा घनत्व सतह के मान का 36.8% रह जाता है।',
        bn: 'স্কিন ডেপথ (প্রবেশ গভীরতা) মিটারে, যেখানে কারেন্ট ডেনসিটি পৃষ্ঠতলের মানের ৩৬.৮%-এ নেমে আসে।'
      }
    },
    {
      id: 'f-ch10-l17-2',
      formula: 'P_eddy = ∫ (J² / σ) dV = k_e · B_max² · f² · t² · V',
      description: {
        en: 'Eddy current Joule heating power dissipated in the conductive workpiece volume.',
        hi: 'चालक वर्कपीस आयतन में भंवर-धारा जूल तापन शक्ति का व्यय।',
        bn: 'পরিবাহী ওয়ার্কপিসের আয়তনে ক্ষয়প্রাপ্ত এডি কারেন্ট জুল উত্তাপন ক্ষমতা।'
      }
    },
    {
      id: 'f-ch10-l17-3',
      formula: 'P_surface = (1/2) · R_s · H_0² · A = (1/2) · √(π·f·μ·ρ) · H_0² · A',
      description: {
        en: 'High-frequency surface power density transfer into cylindrical workpiece of surface area A.',
        hi: 'बेलनाकार वर्कपीस की सतह पर उच्च-आवृत्ति शक्ति अंतरण घनत्व।',
        bn: 'উচ্চ-কম্পাঙ্কে বেলনাকার ধাতব বস্তুর পৃষ্ঠে শক্তি স্থানান্তর ঘনত্ব।'
      }
    },
    {
      id: 'f-ch10-l17-4',
      formula: 'dT/dt = (P_induced - P_loss) / (m · c_p)',
      description: {
        en: 'Rate of temperature rise as a function of net induced power, mass m, and specific heat capacity c_p.',
        hi: 'तापमान वृद्धि की दर: प्रेरित शक्ति, द्रव्यमान m तथा विशिष्ट ऊष्मा c_p का संबंध।',
        bn: 'তাপমাত্রা বৃদ্ধির হার: নেট আবিষ্ট ক্ষমতা, ভর m এবং আপেক্ষিক তাপ c_p-এর অনুপাত।'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-ch10-l17-1',
      title: {
        en: 'High-Frequency Induction Heating Coil & Workpiece Billet Cross-Section',
        hi: 'उच्च-आवृत्ति प्रेरण तापन कुण्डली एवं वर्कपीस बिलेट का अनुप्रस्थ काट',
        bn: 'উচ্চ-কম্পাঙ্ক ইন্ডাকশন হিটিং কয়েল এবং ওয়ার্কপিস বিলেটের প্রস্থচ্ছেদ'
      },
      caption: {
        en: 'Water-cooled copper tubing carrying high-frequency alternating current surrounding a steel billet, showing skin depth penetration and concentrated surface eddy currents.',
        hi: 'स्टील बिलेट के चारों ओर जल-शीतलित तांबे की कुण्डली, जो स्किन डेप्थ एवं सतह पर केंद्रित भंवर धाराओं को प्रदर्शित करती है।',
        bn: 'ওয়াটার-কুল্ড তামার কয়েল ও স্টিল বিলেটের প্রস্থচ্ছেদ যা স্কিন ডেপথ ও পৃষ্ঠতলে এডি কারেন্টের ঘনত্ব প্রদর্শন করে।'
      },
      svgType: 'circuit-ch10-induction-heating-coil-workpiece'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch10-l17-1',
      problem: {
        en: 'Calculate the theoretical skin depth δ (in mm) for a carbon steel workpiece heated during surface hardening at an excitation frequency of f = 200 kHz. Assume cold steel properties: resistivity ρ = 1.8 × 10⁻⁷ Ω·m and relative permeability μ_r = 150. (μ_0 = 4π × 10⁻⁷ H/m).',
        hi: 'सतह कठोरीकरण (Surface Hardening) के दौरान f = 200 kHz की आवृत्ति पर कार्बन स्टील वर्कपीस के लिए सैद्धांतिक स्किन डेप्थ δ (mm में) की गणना कीजिए। दिया है: ρ = 1.8 × 10⁻⁷ Ω·m तथा μ_r = 150।',
        bn: 'পৃষ্ঠ দৃঢ়ীকরণ (Surface Hardening) প্রক্রিয়ায় f = ২০০ kHz কম্পাঙ্কে একটি কার্বন স্টিল ওয়ার্কপিসের তাত্ত্বিক স্কিন ডেপথ δ (mm এককে) নির্ণয় করুন। দেওয়া আছে: ρ = ১.৮ × ১০⁻⁷ Ω·m এবং μ_r = ১৫০।'
      },
      solution: {
        en: `Step 1: Identify given parameters:
- Frequency f = 200,000 Hz = 2 × 10⁵ Hz
- Electrical resistivity ρ = 1.8 × 10⁻⁷ Ω·m
- Relative magnetic permeability μ_r = 150
- Permeability of free space μ_0 = 4π × 10⁻⁷ H/m
- Total magnetic permeability μ = μ_0 · μ_r = (4π × 10⁻⁷) × 150 = 1.885 × 10⁻⁴ H/m

Step 2: Apply the skin depth formula:
  δ = √( ρ / (π · f · μ) )
  δ = √( 1.8 × 10⁻⁷ / (π × 2 × 10⁵ × 1.885 × 10⁻⁴) )
  δ = √( 1.8 × 10⁻⁷ / 1.1844 × 10² )
  δ = √( 1.520 × 10⁻⁹ ) = 3.899 × 10⁻⁵ meters

Step 3: Convert meters to millimeters:
  δ = 3.899 × 10⁻⁵ m × 1,000 mm/m = 0.039 mm (or approx 39 µm).

Conclusion: At 200 kHz, eddy current heating is confined to an ultra-thin skin layer of under 0.04 mm, allowing extreme precision surface hardening without heating the core!`,
        hi: 'चरण 1: सूत्र δ = √(ρ / (π·f·μ_0·μ_r)) लागू करें। चरण 2: मान रखें: δ = √(1.8×10⁻⁷ / (π × 2×10⁵ × 4π×10⁻⁷ × 150)) = 0.039 mm।',
        bn: 'ধাপ ১: সূত্র δ = √(ρ / (π·f·μ_0·μ_r))। মান বসিয়ে পাওয়া যায়: δ = ০.০৩৯ মিলিমিটার (৩৯ মাইক্রন)।'
      },
      finalAnswer: {
        en: 'δ = 0.039 mm (39 µm)',
        hi: 'δ = 0.039 mm (39 µm)',
        bn: 'δ = ০.০৩৯ mm (৩৯ µm)'
      }
    },
    {
      id: 'ex-ch10-l17-2',
      problem: {
        en: 'In an industrial coreless induction melting furnace, a 50 kg charge of aluminum scrap at 25°C is melted to molten liquid at 660°C. The specific heat of aluminum is c_p = 900 J/(kg·°C) and its latent heat of fusion is L_f = 397 kJ/kg. If the induction power supply delivers a net effective heating power of 120 kW into the charge, calculate the minimum time in minutes required to melt the batch.',
        hi: 'एक औद्योगिक प्रेरण भट्टी में 25°C पर रखे 50 किग्रा एल्युमीनियम स्क्रैप को 660°C पर पिघलाया जाता है। एल्युमीनियम की विशिष्ट ऊष्मा c_p = 900 J/(kg·°C) तथा गलन की गुप्त ऊष्मा L_f = 397 kJ/kg है। यदि 120 kW की प्रभावी शक्ति दी जाती है, तो पिघलने में लगने वाले न्यूनतम समय (मिनटों में) की गणना कीजिए।',
        bn: 'একটি শিল্প ইন্ডাকশন ফার্নেসে ২৫°C তাপমাত্রার ৫০ কেজি অ্যালুমিনিয়াম স্ক্র্যাপকে ৬৬০°C তাপমাত্রায় গলানো হয়। অ্যালুমিনিয়ামের আপেক্ষিক তাপ ৯০০ J/(kg·°C) এবং গলনের সুপ্ততাপ ৩৯৭ kJ/kg। ফার্নেসে ১২০ kW কার্যকর ক্ষমতা প্রয়োগ করলে পুরো চার্জটি গলাতে কত মিনিট সময় লাগবে?'
      },
      solution: {
        en: `Step 1: Calculate sensible heat required to raise temperature from 25°C to 660°C:
  ΔT = 660°C - 25°C = 635°C
  Q_sensible = m · c_p · ΔT = 50 kg × 900 J/(kg·°C) × 635°C
  Q_sensible = 28,575,000 Joules = 28.575 MJ

Step 2: Calculate latent heat required for phase change (solid to liquid at 660°C):
  Q_latent = m · L_f = 50 kg × 397,000 J/kg = 19,850,000 Joules = 19.85 MJ

Step 3: Total thermal energy required Q_total:
  Q_total = Q_sensible + Q_latent = 28.575 MJ + 19.85 MJ = 48.425 MJ = 48,425,000 Joules

Step 4: Calculate time required at 120 kW (120,000 J/s):
  t = Q_total / Power = 48,425,000 J / 120,000 W = 403.54 seconds
  t_minutes = 403.54 / 60 ≈ 6.73 minutes (approx 6 minutes 44 seconds).`,
        hi: 'चरण 1: संवेद्य ऊष्मा Q1 = m·c·ΔT = 50 × 900 × 635 = 28.575 MJ। चरण 2: गुप्त ऊष्मा Q2 = m·L = 50 × 397,000 = 19.85 MJ। कुल ऊष्मा Q = 48.425 MJ। समय t = 48.425 MJ / 120 kW = 403.5 सेकंड = 6.73 मिनट।',
        bn: 'ধাপ ১: সংবেদনশীল তাপ Q1 = ৫০ × ৯০০ × ৬৩৫ = ২৮.৫৭৫ MJ। ধাপ ২: সুপ্ততাপ Q2 = ৫০ × ৩৯৭ kJ/kg = ১৯.৮৫ MJ। মোট তাপ = ৪৮.৪২৫ MJ। সময় t = ৪৮.৪২৫ MJ / ১২০ kW = ৪০৩.৫ সেকেন্ড ≈ ৬.৭৩ মিনিট।'
      },
      finalAnswer: {
        en: 't = 6.73 minutes (approx 6 minutes 44 seconds)',
        hi: 't = 6.73 मिनट (लगभग 6 मिनट 44 सेकंड)',
        bn: 't = ৬.৭৩ মিনিট (প্রায় ৬ মিনিট ৪৪ সেকেন্ড)'
      }
    }
  ],
  practicalApplications: [
    {
      en: 'Automotive Surface Case Hardening: Camshafts, crankpins, and ring gears undergo 200 kHz surface induction heating followed by immediate water quenching to produce ultra-hard martensitic surfaces with ductile shock-resistant cores.',
      hi: 'ऑटोमोटिव सतह कठोरीकरण: क्रैंकशाफ्ट एवं गियर के दांतों को 200 kHz प्रेरण तापन से गर्म कर तुरंत पानी से ठंडा (क्वेंच) किया जाता है।',
      bn: 'অটোমোবাইল সারফেস হার্ডেনিং: ক্যামশ্যাফট ও গিয়ারের দাঁত ২০০ kHz কম্পাঙ্কে উত্তপ্ত করে তাৎক্ষণিক পানিতে ঠান্ডা করে অত্যন্ত টেকসই করা হয়।'
    },
    {
      en: 'Coreless Induction Melting Furnaces: Clean, emission-free recycling and melting of high-purity specialty steels, superalloys, and gold/platinum in vacuum or inert gas atmospheres.',
      hi: 'कोरलेस प्रेरण गलन भट्टियां: वैक्यूम या अक्रिय गैस वातावरण में मिश्र धातुओं, स्टील एवं कीमती धातुओं का स्वच्छ एवं धुआं-रहित गलन।',
      bn: 'কোরলেস ইন্ডাকশন মেল্টিং ফার্নেস: কোনো ধোঁয়া বা দূষণ ছাড়া উচ্চ-বিশুদ্ধতার ইস্পাত, সোনা ও প্লাটিনাম গলানোর আধুনিক ফার্নেস।'
    },
    {
      en: 'High-Frequency Tube & Pipe Seam Welding: Longitudinal edges of rolled steel sheets are induced with high-frequency currents (400 kHz) that concentrate heat purely at the mating seam edges before pressure forging rollers fuse them.',
      hi: 'हाई-फ्रीक्वेंसी पाइप सीम वेल्डिंग: 400 kHz धारा से पाइप के किनारों को गर्म करके दबाव रोलर्स द्वारा जोड़ दिया जाता है।',
      bn: 'হাই-ফ্রিকোয়েন্সি পাইপ ওয়েল্ডিং: ৪০০ kHz কম্পাঙ্কে পাইপের প্রান্ত গলিয়ে চাপ দিয়ে ঝালাই বা ফিউশন করা হয়।'
    },
    {
      en: 'Induction Cooktops: Domestic glass-ceramic stoves drive 25 kHz eddy currents directly inside ferromagnetic iron skillet bottoms, leaving the glass surface safe and cool.',
      hi: 'घरेलू इंडक्शन चूल्हा: 25 kHz की धारा से लोहे के बर्तन के पेंदे में सीधे भंवर धाराएं बनाकर खाना पकाना।',
      bn: 'গৃহস্থালি ইন্ডাকশন কুকার: ২৫ kHz কম্পাঙ্কের মাধ্যমে সরাসরি ফ্রাইপ্যানের লোহার তলায় এডি কারেন্ট দিয়ে রান্না করা।'
    },
    {
      en: 'Tamper-Evident Induction Cap Sealing: Medical and beverage bottle aluminum foil liners are heated through sealed plastic caps to hermetically melt polymer seals onto bottle necks.',
      hi: 'दवा एवं पेय बोतलों की इंडक्शन सीलिंग: प्लास्टिक ढक्कन के ऊपर से एल्यूमीनियम फॉयल को गर्म कर बोतल के मुंह पर सील करना।',
      bn: 'ইন্ডাকশন ক্যাপ সিলিং: প্লাস্টিকের ছিপির মধ্য দিয়ে অ্যালুমিনিয়াম ফয়েল উত্তপ্ত করে ওষুধের বোতল সিল করা।'
    }
  ],
  importantPoints: [
    {
      en: 'Skin depth is inversely proportional to the square root of frequency: quadrupling the frequency halves the heating penetration depth (δ ∝ 1/√f).',
      hi: 'स्किन डेप्थ आवृत्ति के वर्गमूल के व्युत्क्रमानुपाती होती है: आवृत्ति 4 गुना करने पर गहराई आधी रह जाती है (δ ∝ 1/√f)।',
      bn: 'স্কিন ডেপথ কম্পাঙ্কের বর্গমূলের ব্যস্তানুপাতিক: কম্পাঙ্ক ৪ গুণ বৃদ্ধি করলে উত্তাপনের গভীরতা অর্ধেক হয়ে যায় (δ ∝ ১/√f)।'
    },
    {
      en: 'Copper work coils MUST be continuously water-cooled with deionized water because intense coil currents generate substantial I²R internal heat.',
      hi: 'कॉपर वर्क कॉइल को विआयनीकृत पानी से लगातार ठंडा किया जाना अनिवार्य है ताकि वह अत्यधिक करंट से पिघल न जाए।',
      bn: 'তামার কয়েলটি অবশ্যই পানি দিয়ে নিরবচ্ছিন্নভাবে ঠান্ডা রাখতে হয় নতুবা তীব্র I²R তাপে কয়েল গলে যাবে।'
    },
    {
      en: 'At the Curie temperature (~770°C for carbon steel), relative permeability drops from μ_r ≈ 200 to μ_r = 1, abruptly causing skin depth to increase by over tenfold.',
      hi: 'क्यूरी तापमान (770°C) पर स्टील की चुंबकशीलता μ_r गिरकर 1 हो जाती है, जिससे स्किन डेप्थ अचानक 10 गुना से अधिक बढ़ जाती है।',
      bn: 'কুরি তাপমাত্রায় (৭৭০°C) স্টিলের ভেদ্যতা μ_r কমে ১ হয়, ফলে স্কিন ডেপথ হঠাৎ ১০ গুণের বেশি বেড়ে যায়।'
    },
    {
      en: 'Electromagnetic stirring in induction melting furnaces eliminates the need for mechanical impellers and guarantees alloy homogeneity.',
      hi: 'प्रेरण गलन भट्टियों में विद्युत-चुंबकीय मथने की क्रिया (Stirring) यांत्रिक पंखों के बिना समान मिश्रण सुनिश्चित करती है।',
      bn: 'ইন্ডাকশন ফার্নেসে ইলেক্ট্রোম্যাগনেটিক স্টিয়ারিং কোনো যান্ত্রিক নাড়ানি ছাড়াই সংকর ধাতুর সমসত্ত্ব মিশ্রণ নিশ্চিত করে।'
    },
    {
      en: 'Non-ferromagnetic metals (aluminum, copper) can be induction heated, but require higher frequencies and currents because they lack magnetic hysteresis heating.',
      hi: 'अचुंबकीय धातुओं (एल्युमिनियम, तांबा) को भी गर्म किया जा सकता है, लेकिन इनमें हिस्टेरेसिस न होने के कारण उच्च आवृत्ति की आवश्यकता होती है।',
      bn: 'অচৌম্বক ধাতু (অ্যালুমিনিয়াম, তামা) আবেশে উত্তপ্ত হয়, তবে হিস্টেরেসিস না থাকায় এতে উচ্চতর কম্পাঙ্ক প্রয়োজন।'
    },
    {
      en: 'High-frequency stray fields require magnetic shunts (laminated silicon steel packets) to prevent stray heating of structural furnace support beams.',
      hi: 'भट्टी के बाहरी ढांचे को गर्म होने से बचाने के लिए सिलिकॉन-स्टील लैमिनेटेड चुंबकीय शंट लगाए जाते हैं।',
      bn: 'ফার্নেসের বাইরের কাঠামোকে উত্তাপমুক্ত রাখতে সিলিকন-স্টিল ল্যামিনেটেড ম্যাগনেটিক শান্ট ব্যবহার করা হয়।'
    }
  ],
  commonMistakes: [
    {
      en: 'Confusing induction heating with resistive conduction heating: Induction heating generates heat directly INSIDE the workpiece via eddy currents; heat is not conducted across the air gap from the coil.',
      hi: 'प्रेरण तापन को सामान्य हीटर तार समझना: प्रेरण में कुण्डली वर्कपीस को छूती नहीं है; ऊष्मा धातु के अंदर भंवर धाराओं से सीधे उत्पन्न होती है।',
      bn: 'প্রচলিত হিটারের সাথে আবেশ উত্তাপন গুলিয়ে ফেলা: কয়েল থেকে তাপে পরিবাহিত হয় না, বরং ধাতুর ভেতরে সরাসরি এডি কারেন্ট দিয়ে তাপ উৎপন্ন হয়।'
    },
    {
      en: 'Assuming higher frequency always melts metal faster: Excessively high frequency concentrates heat strictly on the outer millimeter, risking surface evaporation while leaving the inner billet cold.',
      hi: 'यह सोचना कि उच्च आवृत्ति से हमेशा धातु तेजी से पिघलती है: अत्यधिक उच्च आवृत्ति से केवल ऊपरी छिलका जल जाता है और भीतरी भाग ठंडा रहता है।',
      bn: 'উচ্চ কম্পাঙ্ক সবসময় দ্রুত গলন ঘটায় মনে করা: অতিরিক্ত উচ্চ কম্পাঙ্কে কেবল পৃষ্ঠতল গলে যায় কিন্তু ভেতরের কোর ঠান্ডা থেকে যায়।'
    },
    {
      en: 'Forgetting that water cooling failure on an induction coil causes rapid catastrophic melting of the copper coil in less than 30 seconds.',
      hi: 'यह भूलना कि यदि कॉइल का पानी बंद हो जाए तो 30 सेकंड के अंदर कॉइल पिघलकर फट सकती है।',
      bn: 'কুলিং পানির প্রবাহ বন্ধ হলে ৩০ সেকেন্ডের মধ্যে তামার কয়েল পুড়ে ধ্বংস হতে পারে তা খেয়াল না রাখা।'
    },
    {
      en: 'Assuming non-magnetic stainless steel cannot be induction heated: Austenitic stainless steel has high electrical resistivity and heats vigorously via eddy currents despite μ_r ≈ 1.',
      hi: 'यह मानना कि स्टेनलेस स्टील गर्म नहीं हो सकता: उच्च प्रतिरोधकता के कारण स्टेनलेस स्टील भंवर धाराओं से बहुत तेजी से गर्म होता है।',
      bn: 'স্টেইনলেস স্টিল আবেশে উত্তপ্ত হয় না ভাবা: উচ্চ রোধের কারণে স্টেইনলেস স্টিল এডি কারেন্টে দারুণভাবে উত্তপ্ত হয়।'
    }
  ],
  keyTakeaways: [
    {
      en: 'Induction heating is a contactless process that transforms high-frequency magnetic energy into internal thermal energy via eddy-current Joule dissipation.',
      hi: 'प्रेरण तापन एक संपर्क-रहित प्रक्रिया है जो भंवर-धारा जूल अपव्यय के माध्यम से चुंबकीय ऊर्जा को आंतरिक ऊष्मा में बदलती है।',
      bn: 'আবেশ উত্তাপন হলো একটি স্পর্শহীন প্রক্রিয়া যা এডি কারেন্ট জুল অপচয়ের মাধ্যমে চৌম্বক শক্তিকে অভ্যন্তরীণ তাপে রূপান্তর করে।'
    },
    {
      en: 'Skin depth (δ = √(ρ / πfμ)) dictates the radial heat distribution: select high frequency for surface hardening and low frequency for through-heating or melting.',
      hi: 'स्किन डेप्थ (δ = √(ρ / πfμ)) ऊष्मा वितरण तय करती है: सतह के लिए उच्च आवृत्ति तथा गलन के लिए निम्न आवृत्ति चुनें।',
      bn: 'স্কিন ডেপথ উত্তাপের গভীরতা নির্ধারণ করে: পৃষ্ঠ দৃঢ়ীকরণে উচ্চ কম্পাঙ্ক এবং গভীর গলনে নিম্ন কম্পাঙ্ক বেছে নিন।'
    },
    {
      en: 'Ferromagnetic workpieces benefit from both hysteresis losses and eddy currents up to 770°C; past the Curie point, heating proceeds solely by eddy currents at increased skin depth.',
      hi: '770°C तक स्टील हिस्टेरेसिस और भंवर धाराओं दोनों से गर्म होता है; क्यूरी बिंदु के बाद केवल भंवर धाराओं से तापन जारी रहता है।',
      bn: '৭৭০°C পর্যন্ত স্টিল হিস্টেরেসিস ও এডি কারেন্ট উভয় দ্বারাই উত্তপ্ত হয়; কুরি বিন্দুর পর কেবল এডি কারেন্টে উত্তপ্ত হয়।'
    },
    {
      en: 'Hollow copper work coils must circulate cooling water to remove immense internal resistive losses.',
      hi: 'खोखली तांबे की कुंडलियों में आंतरिक तापन रोकने के लिए ठंडा पानी प्रवाहित करना आवश्यक है।',
      bn: 'অভ্যন্তরীণ তাপ অপসারণের জন্য ফাঁপা তামার কয়েলের ভেতর শীতল পানি সঞ্চালন বাধ্যতামূলক।'
    },
    {
      en: 'Coreless induction furnaces provide rapid, energy-efficient melting with natural electromagnetic alloy stirring and zero greenhouse emissions at point of use.',
      hi: 'कोरलेस प्रेरण भट्टियां प्राकृतिक चुंबकीय मिश्रण के साथ स्वच्छ, कुशल एवं धुआं-मुक्त धातु गलन प्रदान करती हैं।',
      bn: 'কোরলেস ইন্ডাকশন ফার্নেস প্রাকৃতিক ইলেক্ট্রোম্যাগনেটিক স্টিয়ারিংসহ দ্রুত ও দূষণহীন ধাতু গলন নিশ্চিত করে।'
    }
  ],
  mcqs: [
    {
      id: 'mcq-ch10-l17-1',
      question: {
        en: 'What is the primary mechanism of heat generation in a conductive metallic workpiece during electromagnetic induction heating?',
        hi: 'विद्युत-चुंबकीय प्रेरण तापन के दौरान चालक धातु वर्कपीस में ऊष्मा उत्पादन का प्राथमिक तंत्र क्या है?',
        bn: 'তড়িৎচৌম্বকীয় আবেশ উত্তাপনের সময় পরিবাহী ধাতব বস্তুতে তাপ উৎপাদনের প্রাথমিক প্রক্রিয়া কোনটি?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Joule heating produced by induced closed-loop eddy currents (I²R losses)', hi: 'प्रेरित बंद-लूप भंवर धाराओं द्वारा उत्पन्न जूल तापन (I²R हानियां)', bn: 'আবিষ্ট লুপ এডি কারেন্ট দ্বারা উৎপন্ন জুল তাপ (I²R অপচয়)' } },
        { id: 'opt-2', text: { en: 'Thermal conduction of hot gases leaking from the copper coil', hi: 'तांबे की कुण्डली से गर्म गैसों का रिसाव', bn: 'কয়েল থেকে নির্গত গরম গ্যাসের পরিচলন' } },
        { id: 'opt-3', text: { en: 'Nuclear fission of surface atoms in the billet', hi: 'बिलेट के सतही परमाणुओं का परमाणु विखंडन', bn: 'পৃষ্ঠতলের পরমাণুর পারমাণবিক বিভাজন' } },
        { id: 'opt-4', text: { en: 'Frictional rubbing between coil turns and the workpiece', hi: 'कुण्डली और वर्कपीस के बीच घर्षण', bn: 'কয়েল এবং ধাতব বস্তুর পারস্পরিক ঘর্ষণ' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'The alternating magnetic field induces closed eddy currents inside the conductive metal; electrical resistance converts this current into intense Joule heat (P = I²R).',
        hi: 'बदलता चुंबकीय क्षेत्र धातु के अंदर भंवर धाराएं प्रेरित करता है; धातु का प्रतिरोध इसे जूल ऊष्मा (I²R) में बदल देता है।',
        bn: 'পরিবর্তনশীল চৌম্বক ক্ষেত্র ধাতুতে এডি কারেন্ট আবিষ্ট করে; ধাতুর রোধের ফলে জুল তাপ (I²R) উৎপন্ন হয়।'
      }
    },
    {
      id: 'mcq-ch10-l17-2',
      question: {
        en: 'If the alternating frequency of an induction heating power supply is increased by a factor of 4, the skin depth δ in the workpiece will:',
        hi: 'यदि प्रेरण तापन विद्युत आपूर्ति की आवृत्ति को 4 गुना बढ़ा दिया जाए, तो स्किन डेप्थ δ होगी:',
        bn: 'একটি ইন্ডাকশন হিটিং পাওয়ার সাপ্লাইয়ের কম্পাঙ্ক ৪ গুণ বৃদ্ধি করা হলে স্কিন ডেপথ δ কত হবে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Halve (decrease to 1/2 of original)', hi: 'आधी रह जाएगी (1/2)', bn: 'অর্ধেক হবে (আগের মানের ১/২)' } },
        { id: 'opt-2', text: { en: 'Double (increase by 2x)', hi: 'दोगुनी हो जाएगी (2x)', bn: 'দ্বিগুণ হবে (২ গুণ বৃদ্ধি)' } },
        { id: 'opt-3', text: { en: 'Quarter (decrease to 1/4 of original)', hi: 'एक-चौथाई रह जाएगी (1/4)', bn: 'এক-চতুর্থাংশ হবে (১/৪)' } },
        { id: 'opt-4', text: { en: 'Remain strictly unchanged', hi: 'अपरिवर्तित रहेगी', bn: 'সম্পূর্ণ অপরিবর্তিত থাকবে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Skin depth is inversely proportional to the square root of frequency: δ ∝ 1/√f. Increasing f by 4 reduces δ to 1/√4 = 1/2 of its initial value.',
        hi: 'स्किन डेप्थ आवृत्ति के वर्गमूल के व्युत्क्रमानुपाती होती है: δ ∝ 1/√f। आवृत्ति 4 गुना करने पर गहराई 1/√4 = 1/2 रह जाती है।',
        bn: 'স্কিন ডেপথ কম্পাঙ্কের বর্গমূলের ব্যস্তানুপাতিক (δ ∝ ১/√f)। কম্পাঙ্ক ৪ গুণ বাড়ালে গভীরতা ১/√৪ = ১/২ হয়ে যায়।'
      }
    },
    {
      id: 'mcq-ch10-l17-3',
      question: {
        en: 'What critical physical transition occurs when a carbon steel billet in an induction furnace passes through its Curie temperature (~770°C)?',
        hi: 'जब प्रेरण भट्टी में कार्बन स्टील बिलेट अपने क्यूरी तापमान (~770°C) से ऊपर जाता है तो कौन सा महत्वपूर्ण भौतिक परिवर्तन होता है?',
        bn: 'একটি কার্বন স্টিল বিলেট ইন্ডাকশন ফার্নেসে কুরি তাপমাত্রা (~৭৭০°C) অতিক্রম করলে কোন ভৌত পরিবর্তনটি ঘটে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Relative permeability collapses from μ_r ≈ 150 to μ_r = 1, abruptly increasing skin depth and halting hysteresis heating', hi: 'चुंबकशीलता μ_r ≈ 150 से गिरकर 1 हो जाती है, स्किन डेप्थ बढ़ जाती है और हिस्टेरेसिस तापन समाप्त हो जाता है', bn: 'আপেক্ষিক ভেদ্যতা μ_r ১৫০ থেকে কমে ১ হয়, স্কিন ডেপথ হঠাৎ বৃদ্ধি পায় এবং হিস্টেরেসিস বন্ধ হয়' } },
        { id: 'opt-2', text: { en: 'The metal instantly freezes into diamond ice', hi: 'धातु तुरंत हीरे की तरह जम जाती है', bn: 'ধাতুটি তাৎক্ষণিকভাবে কঠিনে জমে যায়' } },
        { id: 'opt-3', text: { en: 'The electrical conductivity becomes infinite (superconducting)', hi: 'विद्युत चालकता अनंत (अतिचालक) हो जाती है', bn: 'বৈদ্যুতিক পরিবাহিতা অসীম হয়ে সুপারকন্ডাক্টরে রূপ নেয়' } },
        { id: 'opt-4', text: { en: 'Eddy currents reverse and flow into the power grid', hi: 'भंवर धाराएं ग्रिड में वापस बहने लगती हैं', bn: 'এডি কারেন্ট উল্টো দিকে প্রবাহিত হয়' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'At the Curie point, ferromagnetic steel becomes paramagnetic (μ_r = 1). Since δ ∝ 1/√μ, the skin depth widens significantly, and hysteresis losses vanish.',
        hi: 'क्यूरी बिंदु पर स्टील अचुंबकीय (μ_r = 1) हो जाता है। अतः स्किन डेप्थ बढ़ जाती है तथा हिस्टेरेसिस हानियां समाप्त हो जाती हैं।',
        bn: 'কুরি তাপমাত্রায় স্টিল প্যারাচৌম্বক হয় (μ_r = ১)। ফলে স্কিন ডেপথ বাড়ে এবং হিস্টেরেসিস ক্ষয় সম্পূর্ণ বন্ধ হয়।'
      }
    },
    {
      id: 'mcq-ch10-l17-4',
      question: {
        en: 'Why is water-cooling continuously pumped through the primary copper work coil in an induction furnace?',
        hi: 'प्रेरण भट्टी की प्राथमिक कॉपर कुण्डली में लगातार ठंडा पानी क्यों प्रवाहित किया जाता है?',
        bn: 'ইন্ডাকশন ফার্নেসের প্রধান তামার কয়েলের ভেতর দিয়ে কেন সার্বক্ষণিক শীতল পানি প্রবাহিত করা হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'To remove internal I²R Joule heating from heavy coil currents and prevent the copper coil from melting', hi: 'भारी धारा के कारण होने वाले I²R तापन को हटाकर तांबे की कुण्डली को पिघलने से बचाने के लिए', bn: 'তীব্র কারেন্টের কারণে উৎপন্ন I²R তাপ অপসারণ করে তামার কয়েল গলে যাওয়া প্রতিরোধ করতে' } },
        { id: 'opt-2', text: { en: 'To chemically lubricate the workpiece inside', hi: 'वर्कपीस को रासायनिक रूप से चिकना करने के लिए', bn: 'ওয়ার্কপিসকে পিচ্ছিল করার জন্য' } },
        { id: 'opt-3', text: { en: 'To amplify the magnetic flux by 100 times', hi: 'चुंबकीय फ्लक्स को 100 गुना बढ़ाने के लिए', bn: 'চৌম্বক ফ্লাক্স ১০০ গুণ বৃদ্ধি করতে' } },
        { id: 'opt-4', text: { en: 'To prevent electrical current from flowing in the coil', hi: 'कुण्डली में करंट को बहने से रोकने के लिए', bn: 'কয়েলে বিদ্যুৎ প্রবাহ বন্ধ করতে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Hundreds of amperes of high-frequency current flow through the coil, creating high I²R copper losses. Forced deionized water cooling prevents the coil from self-destructing.',
        hi: 'सैकड़ों एम्पीयर की उच्च-आवृत्ति धारा कॉपर में भारी I²R ऊष्मा बनाती है। पानी का शीतलन कुण्डली को जलने से बचाता है।',
        bn: 'কয়েলের ভেতর দিয়ে শত শত অ্যাম্পিয়ার কারেন্ট প্রবাহিত হওয়ায় উৎপন্ন তীব্র I²R তাপ অপসারণে পানি কুলিং আবশ্যক।'
      }
    },
    {
      id: 'mcq-ch10-l17-5',
      question: {
        en: 'Which frequency range is best suited for deep through-heating of large steel billets prior to heavy mechanical forging?',
        hi: 'भारी यांत्रिक फोर्जिंग से पहले बड़े स्टील बिलेट को गहराई तक गर्म करने के लिए कौन सी आवृत्ति सबसे उपयुक्त है?',
        bn: 'ভারী ফোরজিংয়ের আগে বড় স্টিল বিলেটের গভীরে সমভাবে উত্তপ্ত করার জন্য কোন কম্পাঙ্ক পরিসর সবচেয়ে উপযুক্ত?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Low frequency: 50 Hz to 1 kHz', hi: 'निम्न आवृत्ति: 50 Hz से 1 kHz', bn: 'নিম্ন কম্পাঙ্ক: ৫০ Hz থেকে ১ kHz' } },
        { id: 'opt-2', text: { en: 'Ultra-high frequency: 10 MHz to 30 MHz', hi: 'अति-उच्च आवृत्ति: 10 MHz से 30 MHz', bn: 'অতি-উচ্চ কম্পাঙ্ক: ১০ MHz থেকে ৩০ MHz' } },
        { id: 'opt-3', text: { en: 'Pure direct current (0 Hz DC)', hi: 'शुद्ध दिष्ट धारा (0 Hz DC)', bn: 'বিশুদ্ধ ডিসি (০ Hz)' } },
        { id: 'opt-4', text: { en: 'Microwave frequency: 2.45 GHz', hi: 'माइक्रोवेव आवृत्ति: 2.45 GHz', bn: 'মাইক্রোওয়েভ কম্পাঙ্ক: ২.৪৫ GHz' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Low frequencies (50 Hz – 1 kHz) have a large skin depth (δ ≈ 15–35 mm), ensuring heat penetrates all the way to the core rather than staying on the surface.',
        hi: 'निम्न आवृत्तियों में स्किन डेप्थ अधिक होती है, जिससे ऊष्मा केवल सतह पर न रहकर पूरे कोर तक समान रूप से पहुंचती है।',
        bn: 'নিম্ন কম্পাঙ্কে স্কিন ডেপথ অনেক বেশি (১৫-৩৫ মিমি) হওয়ায় উত্তাপ কেবল পৃষ্ঠে না থেকে ভেতরের কোরেও প্রবেশ করে।'
      }
    },
    {
      id: 'mcq-ch10-l17-6',
      question: {
        en: 'What beneficial hydrodynamic effect occurs naturally in coreless induction melting furnaces due to the interaction of induced currents with the magnetic field?',
        hi: 'कोरलेस प्रेरण गलन भट्टी में प्रेरित धाराओं एवं चुंबकीय क्षेत्र की पारस्परिक क्रिया से कौन सा प्राकृतिक लाभ मिलता है?',
        bn: 'কোরলেস ইন্ডাকশন মেল্টিং ফার্নেসে আবিষ্ট কারেন্ট ও চৌম্বক ক্ষেত্রের মিথস্ক্রিয়ায় কোন প্রাকৃতিক সুবিধা পাওয়া যায়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Electromagnetic stirring (Lorentz J × B forces) that automatically homogenizes the molten alloy without mechanical impellers', hi: 'विद्युत-चुंबकीय मथना (लॉरेंट्ज़ J × B बल) जो बिना किसी यांत्रिक पंखे के पिघली धातु को एकसमान मिला देता है', bn: 'তড়িৎচৌম্বকীয় নাড়াচাড়া (লোরেন্টজ J × B বল) যা কোনো যান্ত্রিক নাড়ানি ছাড়াই সংকর ধাতু সমসত্ত্ব করে' } },
        { id: 'opt-2', text: { en: 'Solidification of metal at room temperature', hi: 'कमरे के तापमान पर धातु का जमना', bn: 'স্বাভাবিক তাপমাত্রায় ধাতু জমে যাওয়া' } },
        { id: 'opt-3', text: { en: 'Instant elimination of all atmospheric air in the room', hi: 'कमरे की सारी हवा का नष्ट हो जाना', bn: 'ঘরের সমস্ত বাতাস নাই হয়ে যাওয়া' } },
        { id: 'opt-4', text: { en: 'Formation of permanent diamond coatings', hi: 'स्थायी हीरे की परत बनना', bn: 'হীরার প্রলেপ সৃষ্টি হওয়া' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'The Lorentz force density f = J × B exerts inward and axial forces on the liquid metal pool, continuously stirring the melt for perfect chemical uniformity.',
        hi: 'लॉरेंट्ज़ बल पिघली धातु पर अंदरूनी और ऊर्ध्वाधर बल लगाता है, जिससे धातु स्वतः मिलकर पूर्णतः समरूप बन जाती है।',
        bn: 'লোরেন্টজ বল (J × B) তরল ধাতুতে অবিরাম আলোড়ন তৈরি করে, যা সংকর ধাতুর প্রতিটি উপাদানের সমসত্ত্ব মিশ্রণ নিশ্চিত করে।'
      }
    },
    {
      id: 'mcq-ch10-l17-7',
      question: {
        en: 'What is the purpose of installing vertically laminated silicon steel magnetic shunts around the outside of an industrial induction melting furnace?',
        hi: 'औद्योगिक प्रेरण भट्टी के बाहर लंबवत लैमिनेटेड सिलिकॉन स्टील चुंबकीय शंट लगाने का क्या उद्देश्य है?',
        bn: 'শিল্প ইন্ডাকশন ফার্নেসের বাইরের অংশে লম্বভাবে ল্যামিনেটেড সিলিকন স্টিল ম্যাগনেটিক শান্ট বসানোর উদ্দেশ্য কী?'
      },
      options: [
        { id: 'opt-1', text: { en: 'To capture stray external magnetic flux and prevent dangerous eddy-current overheating of the structural steel furnace frame', hi: 'आवारा चुंबकीय फ्लक्स को कैद करके भट्टी के बाहरी स्टील फ्रेम को गर्म होकर पिघलने से बचाना', bn: 'বাইরের স্ট্রে চৌম্বক ফ্লাক্স আটকে দিয়ে কাঠামোর স্টিল ফ্রেমকে বিপজ্জনক এডি উত্তাপন থেকে রক্ষা করা' } },
        { id: 'opt-2', text: { en: 'To increase the noise of the furnace for operator alert', hi: 'ऑपरेटर को सचेत करने के लिए आवाज बढ़ाना', bn: 'শব্দ বৃদ্ধি করে অপারেটরকে সতর্ক করা' } },
        { id: 'opt-3', text: { en: 'To convert AC electricity directly into light', hi: 'एसी बिजली को सीधे रोशनी में बदलना', bn: 'এসি কারেন্টকে সরাসরি আলোতে রূপান্তর করা' } },
        { id: 'opt-4', text: { en: 'To chemically deoxidize the molten aluminum slag', hi: 'पिघले एल्युमिनियम को रासायनिक रूप से साफ करना', bn: 'রাসায়নিকভাবে স্লাগ পরিষ্কার করা' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Without magnetic shunts, intense stray AC magnetic fields would induce heavy eddy currents in the structural support beams, bolts, and chassis, causing hazardous overheating.',
        hi: 'बिना शंट के आवारा चुंबकीय फ्लक्स बाहरी लोहे के खंभों और नट-बोल्ट में भंवर धाराएं बनाकर उन्हें अत्यधिक गर्म कर देगा।',
        bn: 'ম্যাগনেটিক শান্ট না থাকলে স্ট্রে ফ্লাক্স কাঠামোর স্টিল বিমে এডি কারেন্ট তৈরি করে মারাত্মক অগ্নিকাণ্ড বা বিকৃতি ঘটাবে।'
      }
    },
    {
      id: 'mcq-ch10-l17-8',
      question: {
        en: 'Why is an induction furnace widely considered superior to fossil-fuel coal/gas cupola furnaces in modern foundries?',
        hi: 'आधुनिक फाउंड्री में प्रेरण भट्टी को कोयला/गैस भट्टियों की तुलना में श्रेष्ठ क्यों माना जाता है?',
        bn: 'আধুনিক ঢালাই কারখানায় কয়লা বা গ্যাস ফার্নেসের চেয়ে ইন্ডাকশন ফার্নেসকে কেন উন্নত বিবেচনা করা হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Zero on-site combustion emissions, higher energy efficiency (>80%), precise temperature control, and rapid melting', hi: 'शून्य धुआं/उत्सर्जन, 80% से अधिक उच्च ऊर्जा दक्षता, सटीक तापमान नियंत्रण एवं तीव्र गलन', bn: 'কোনো নির্গমন দূষণ নেই, ৮০% এর বেশি উচ্চ দক্ষতা, নিখুঁত তাপমাত্রা নিয়ন্ত্রণ ও দ্রুত গলন' } },
        { id: 'opt-2', text: { en: 'It operates without any source of electricity', hi: 'यह बिना किसी बिजली के चलती है', bn: 'এটি কোনো বিদ্যুৎ ছাড়াই চলে' } },
        { id: 'opt-3', text: { en: 'It turns iron into pure gold automatically', hi: 'यह लोहे को सोने में बदल देती है', bn: 'এটি লোহাকে সোনায় রূপান্তর করে' } },
        { id: 'opt-4', text: { en: 'It requires zero water or insulation maintenance', hi: 'इसमें किसी रखरखाव की आवश्यकता नहीं होती', bn: 'এতে কোনো রক্ষণাবেক্ষণের প্রয়োজন হয় না' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Induction furnaces eliminate fossil fuel combustion and smoke, achieve over 80% thermal efficiency, and allow precise electronic power modulation.',
        hi: 'प्रेरण भट्टियां धुएं और प्रदूषण को समाप्त करती हैं, 80% से अधिक ऊर्जा दक्षता देती हैं तथा सटीक तापमान नियंत्रण प्रदान करती हैं।',
        bn: 'ইন্ডাকশন ফার্নেসে কোনো ধোঁয়া বা গ্যাস নির্গমন হয় না, ৮০% এর বেশি শক্তি সাশ্রয়ী এবং সুনির্দিষ্টভাবে তাপমাত্রা নিয়ন্ত্রণ করা যায়।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch10-l17-1',
      question: {
        en: 'A copper cylinder of resistivity ρ = 1.7 × 10⁻⁸ Ω·m and relative permeability μ_r = 1.0 is placed in an induction coil operating at f = 10 kHz. Calculate the penetration skin depth δ in millimeters. (μ_0 = 4π × 10⁻⁷ H/m).',
        hi: 'एक तांबे के बेलन (ρ = 1.7 × 10⁻⁸ Ω·m, μ_r = 1.0) को 10 kHz की प्रेरण कुण्डली में रखा गया है। स्किन डेप्थ δ की गणना मिलीमीटर में कीजिए।',
        bn: 'একটি তামার সিলিন্ডার (ρ = ১.৭ × ১০⁻⁸ Ω·m, μ_r = ১.০) ১০ kHz কম্পাঙ্কের ইন্ডাকশন কয়েলে রাখা হলো। স্কিন ডেপথ δ মিলিমিটারে নির্ণয় করুন।'
      },
      hint: {
        en: 'Use δ = √(ρ / (π · f · μ_0 · μ_r)). Remember to convert the resulting meters into millimeters by multiplying by 1,000.',
        hi: 'δ = √(ρ / (π·f·μ_0·μ_r)) का प्रयोग करें और मीटर को मिलीमीटर में बदलने के लिए 1000 से गुणा करें।',
        bn: 'δ = √(ρ / (π·f·μ_0·μ_r)) সূত্র ব্যবহার করে প্রাপ্ত মানকে ১০০০ দিয়ে গুণ করে মিমি-তে আনুন।'
      },
      answerKey: {
        en: 'δ = √( 1.7×10⁻⁸ / (π × 10,000 × 4π×10⁻⁷ × 1) ) = √( 1.7×10⁻⁸ / 3.948×10⁻² ) = √( 4.306×10⁻⁷ ) = 6.56 × 10⁻⁴ m = 0.656 mm (approx 0.66 mm).',
        hi: 'δ = 0.656 mm (लगभग 0.66 mm)।',
        bn: 'δ = ০.৬৫৬ মিলিমিটার (প্রায় ০.৬৬ mm)।'
      }
    },
    {
      id: 'pq-ch10-l17-2',
      question: {
        en: 'Explain why surface case hardening of an automotive transmission gear requires a high frequency (e.g., 250 kHz), whereas forging a thick railway axle billet requires a low frequency (e.g., 1 kHz).',
        hi: 'समझाइए कि ऑटोमोबाइल गियर की सतह को कठोर करने के लिए उच्च आवृत्ति (250 kHz) क्यों आवश्यक है, जबकि रेलवे एक्सल के मोटे बिलेट को गर्म करने के लिए निम्न आवृत्ति (1 kHz) क्यों चाहिए?',
        bn: 'ব্যাখ্যা করুন কেন অটোমোবাইল গিয়ারের পৃষ্ঠ দৃঢ়ীকরণে উচ্চ কম্পাঙ্ক (২৫০ kHz) প্রয়োজন, অথচ রেলওয়ে এক্সেলের মোটা রড ফোরজিংয়ে নিম্ন কম্পাঙ্ক (১ kHz) প্রয়োজন।'
      },
      hint: {
        en: 'Relate the skin depth formula δ ∝ 1/√f to the desired thermal boundary condition (surface-only versus uniform through-heating).',
        hi: 'स्किन डेप्थ सूत्र δ ∝ 1/√f तथा तापन की गहराई (केवल सतह बनाम पूरे आयतन में तापन) के संबंध पर विचार करें।',
        bn: 'স্কিন ডেপথ সমীকরণ δ ∝ ১/√f এবং উত্তাপের গভীরতার (কেবল পৃষ্ঠ বনাম পুরো কোর) পারস্পরিক সম্পর্ক তুলে ধরুন।'
      },
      answerKey: {
        en: 'At 250 kHz, skin depth is fractions of a millimeter (δ < 0.2 mm), confining heat strictly to the gear tooth exterior while keeping the inner core tough and ductile. At 1 kHz, skin depth is tens of millimeters (δ ≈ 15–25 mm), allowing deep through-heating across the entire billet diameter for uniform forging plastic deformation.',
        hi: '250 kHz पर स्किन डेप्थ 0.2 mm से भी कम होती है, जिससे केवल दांतों की बाहरी सतह कठोर होती है और कोर लचीला रहता है। 1 kHz पर स्किन डेप्थ 15-25 mm होती है, जिससे पूरा बिलेट समान रूप से गर्म होता है।',
        bn: '২৫০ kHz-এ স্কিন ডেপথ খুবই কম (< ০.২ mm), ফলে কেবল বাইরের অংশ গরম ও কঠিন হয়। ১ kHz-এ স্কিন ডেপথ অনেক গভীর (১৫-২৫ mm), যা পুরো রডটিকে সমভাবে উত্তপ্ত করে ফোরজিংয়ের উপযোগী করে।'
      }
    },
    {
      id: 'pq-ch10-l17-3',
      question: {
        en: 'An induction heating inverter delivers 40 kW of electrical power to an induction coil. The water cooling system carries away 6 kW of heat from the coil, and 4 kW is lost to ambient thermal radiation and convection. Calculate the net heating efficiency η (%) of the system transferring power into the workpiece.',
        hi: 'एक प्रेरण तापन इन्वर्टर कुण्डली को 40 kW शक्ति प्रदान करता है। जल शीतलन प्रणाली 6 kW ऊष्मा बाहर निकालती है तथा 4 kW विकिरण से नष्ट होती है। वर्कपीस में शक्ति अंतरण की शुद्ध तापन दक्षता η (%) ज्ञात कीजिए।',
        bn: 'একটি ইন্ডাকশন হিটিং ইনভার্টার কয়েলে ৪০ kW বিদ্যুৎ ক্ষমতা সরবরাহ করে। পানির কুলিং সিস্টেম ৬ kW তাপ সরিয়ে নেয় এবং ৪ kW তাপ বিকিরণে অপচয় হয়। ওয়ার্কপিসে শক্তি স্থানান্তরের কার্যকর দক্ষতা η (%) নির্ণয় করুন।'
      },
      hint: {
        en: 'P_workpiece = P_total - P_coil_loss - P_ambient_loss. Efficiency η = (P_workpiece / P_total) × 100%.',
        hi: 'P_workpiece = P_total - P_coil_loss - P_ambient_loss। दक्षता η = (P_workpiece / P_total) × 100%।',
        bn: 'P_ওয়ার্কপিস = P_মোট - P_কয়েল_লস - P_পরিবেশ_লস। কর্মদক্ষতা η = (P_ওয়ার্কপিস / P_মোট) × ১০০%।'
      },
      answerKey: {
        en: 'P_workpiece = 40 kW - 6 kW - 4 kW = 30 kW. Efficiency η = (30 kW / 40 kW) × 100% = 75.0%.',
        hi: 'P_workpiece = 40 - 6 - 4 = 30 kW। दक्षता η = (30 / 40) × 100 = 75.0%।',
        bn: 'P_ওয়ার্কপিস = ৪০ - ৬ - ৪ = ৩০ kW। দক্ষতা η = (৩০ / ৪০) × ১০০ = ৭৫.০%।'
      }
    },
    {
      id: 'pq-ch10-l17-4',
      question: {
        en: 'Why is an induction cooktop unable to heat ordinary borosilicate glassware, ceramic pots, or pure aluminum cookware with standard low-frequency drivers?',
        hi: 'घरेलू इंडक्शन चूल्हा साधारण कांच, चीनी मिट्टी या बिना फेरोमैग्नेटिक बेस वाले एल्युमिनियम बर्तनों को गर्म क्यों नहीं कर पाता?',
        bn: 'ঘরোয়া ইন্ডাকশন কুকার কেন সাধারণ কাচ, চিনামাটির পাত্র বা সাধারণ অ্যালুমিনিয়ামের হাঁড়ি উত্তপ্ত করতে পারে না?'
      },
      hint: {
        en: 'Consider the requirements for induction: electrical conductivity (σ > 0) to support eddy currents, and high permeability (μ_r >> 1) for strong magnetic flux coupling.',
        hi: 'प्रेरण के लिए आवश्यक शर्तों पर विचार करें: भंवर धाराओं के लिए विद्युत चालकता (σ > 0) तथा उच्च चुंबकशीलता (μ_r >> 1)।',
        bn: 'আবেশের জন্য দুটি শর্ত প্রয়োজন: এডি কারেন্ট পরিবহনের জন্য উচ্চ পরিবাহিতা এবং চৌম্বক সংযোগের জন্য উচ্চ ভেদ্যতা (μ_r)।'
      },
      answerKey: {
        en: 'Glass and ceramics are electrical insulators (resistivity ρ → ∞); therefore, no eddy currents can be induced (J = σE = 0). Non-magnetic aluminum has low resistivity and μ_r = 1, resulting in poor magnetic coupling and insufficient surface resistance at standard 25 kHz cooktop frequencies.',
        hi: 'कांच और सिरेमिक कुचालक होते हैं, अतः इनमें कोई भंवर धारा नहीं बन सकती। एल्युमिनियम की चुंबकशीलता 1 होती है, जिससे 25 kHz पर पर्याप्त प्रतिरोध और तापन नहीं मिलता।',
        bn: 'কাচ ও চিনামাটি অন্তরক হওয়ায় এতে কোনো এডি কারেন্ট উৎপন্ন হয় না। অ্যালুমিনিয়ামের আপেক্ষিক ভেদ্যতা ১ এবং রোধ খুবই কম হওয়ায় সাধারণ ২৫ kHz ফ্রিকোয়েন্সিতে পর্যাপ্ত তাপ উৎপন্ন হয় না।'
      }
    },
    {
      id: 'pq-ch10-l17-5',
      question: {
        en: 'Describe the safety hazard associated with placing a metallic wristwatch, steel ring, or conductive tool inside or near an energized 50 kW induction heating work coil.',
        hi: '50 kW की चालू प्रेरण तापन कुण्डली के पास धात्विक घड़ी, स्टील की अंगूठी या लोहे का औजार ले जाने से उत्पन्न सुरक्षा खतरे का वर्णन कीजिए।',
        bn: 'একটি ৫০ kW সক্রিয় ইন্ডাকশন হিটিং কয়েলের কাছে ধাতব ঘড়ি, আঙুলের আংটি বা লোহার যন্ত্রপাতি নিয়ে গেলে কী ধরনের মারাত্মক বিপদ ঘটতে পারে?'
      },
      hint: {
        en: 'The alternating magnetic field does not distinguish between a workpiece billet and jewelry worn on the operator’s hand.',
        hi: 'बदलता चुंबकीय क्षेत्र वर्कपीस और हाथ में पहनी अंगूठी के बीच कोई अंतर नहीं करता।',
        bn: 'পরিবর্তনশীল চৌম্বক ক্ষেত্র কাজের ধাতু এবং মানুষের হাতে থাকা আংটি বা ঘড়ির মাঝে কোনো পার্থক্য বোঝে না।'
      },
      answerKey: {
        en: 'The high-frequency alternating magnetic field instantly induces intense eddy currents inside the metal ring or watch. Within 1 to 2 seconds, the jewelry heats to hundreds of degrees Celsius, causing catastrophic third-degree skin burns and flesh necrosis. Operators must never wear rings, watches, or metal jewelry near induction coils.',
        hi: 'चुंबकीय क्षेत्र अंगूठी या घड़ी में तुरंत तीव्र भंवर धाराएं बना देता है। 1-2 सेकंड में धातु सैकड़ों डिग्री गर्म होकर त्वचा और उंगलियों को बुरी तरह जला देती है। ऑपरेटरों को आभूषण उतारकर ही काम करना चाहिए।',
        bn: 'কয়েলের তীব্র চৌম্বক ক্ষেত্র ১-২ সেকেন্ডের ভেতর আংটি বা ঘড়িতে তীব্র এডি কারেন্ট সৃষ্টি করে শত শত ডিগ্রি তাপমাত্রায় পৌঁছে দেয়, যার ফলে হাত মারাত্মকভাবে পুড়ে যায়। তাই আবেশ কয়েলের কাছে সব ধাতব অলঙ্কার নিষিদ্ধ।'
      }
    }
  ]
};
