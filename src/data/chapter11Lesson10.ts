import { Lesson } from '../types';

export const LESSON_OBLIQUE_INCIDENCE_SNELL_BREWSTER: Lesson = {
  "id": "lsn-ch11-oblique-incidence-snell-brewster",
  "topicId": "ch11-oblique-incidence-snell-brewster",
  "chapterId": "ch-em-waves",
  "order": 10,
  "title": {
    "en": "Oblique Incidence, Snell’s Law, Total Internal Reflection & Brewster’s Angle",
    "hi": "तिर्यक आपतन, स्नेल का नियम, पूर्ण आंतरिक परावर्तन एवं ब्रूस्टर कोण",
    "bn": "তির্যক আপাতন, স্নেলের সূত্র, পূর্ণ অভ্যন্তরীণ প্রতিফলন ও ব্রূস্টার কোণ"
  },
  "description": {
    "en": "Comprehensive theory of plane waves striking planar boundaries at oblique incidence, phase-matching boundary conditions, Snell’s laws of reflection and refraction, perpendicular (TE / s-pol) and parallel (TM / p-pol) polarizations, Fresnel reflection/transmission coefficients, critical angle θ_c, evanescent field decay in Total Internal Reflection (TIR), and Brewster angle θ_B.",
    "hi": "समतल परिसीमाओं पर तिर्यक आपतन, कला-सुमेलन सीमा शर्तें, स्नेल का परावर्तन एवं अपवर्तन नियम, लंबवत (TE/s-pol) एवं समांतर (TM/p-pol) ध्रुवीकरण, फ्रेस्नेल गुणांक, पूर्ण आंतरिक परावर्तन (TIR) में क्रांतिक कोण θ_c व अवमंदित तरंगें, तथा ब्रूस्टर कोण θ_B का संपूर्ण अध्ययन।",
    "bn": "সমতল সীমানায় তির্যক আপাতন, দশা-সমন্বয় সীমানা শর্ত, স্নেলের প্রতিফলন ও প্রতিসরণ সূত্র, লম্ব (TE/s-pol) ও সমান্তরাল (TM/p-pol) সমবর্তন, ফ্রেনেল গুণাঙ্ক, পূর্ণ অভ্যন্তরীণ প্রতিফলনের (TIR) সংকট কোণ θ_c ও ক্ষীয়মাণ তরঙ্গ, এবং ব্রূস্টার কোণ θ_B এর পূর্ণাঙ্গ তত্ত্ব।"
  },
  "estimatedMinutes": 50,
  "easyExplanation": {
    "en": "When a beam of light or a radio signal hits a lake surface or a glass window at an angle (rather than straight on), fascinating things happen. First, the light bends: this is Snell's law of refraction, which explains why a straw in a glass of water looks broken. Second, depending on whether the wave's electric vibrations lie parallel or perpendicular to the surface, the reflection amount varies drastically. At one special magic angle called Brewster's angle, light polarized parallel to the plane of incidence cannot bounce back at all—zero percent reflects and 100% enters the glass! This is why polarizing sunglasses eliminate bright glare off sunny asphalt roads and water. Finally, when light travels inside glass or water toward air and hits the boundary at an angle steeper than the Critical Angle, it cannot escape into the air at all; 100% of the light bounces back inside with zero loss. This Total Internal Reflection (TIR) is the secret engine powering modern fiber-optic high-speed internet!",
    "hi": "जब प्रकाश या रेडियो तरंग किसी कांच या पानी की सतह से किसी तिरछे कोण पर टकराती है, तो प्रकाश अपने मार्ग से मुड़ जाता है: इसे स्नेल का अपवर्तन नियम कहते हैं। एक विशेष कोण ऐसा होता है जिसे ब्रूस्टर कोण कहा जाता है, जिस पर समानांतर ध्रुवीकृत प्रकाश का परावर्तन बिल्कुल शून्य (0%) हो जाता है और वह पूरा का पूरा कांच में प्रवेश कर जाता है। यही कारण है कि धूप के चश्मे सड़क और पानी की चमक (ग्लेयर) को पूरी तरह रोक देते हैं। इसके अलावा, जब प्रकाश सघन माध्यम (कांच या पानी) से विरल माध्यम (हवा) की ओर जाते हुए क्रांतिक कोण से अधिक कोण पर टकराता है, तो प्रकाश बाहर निकलने के बजाय 100% अंदर ही परावर्तित हो जाता है। इसे पूर्ण आंतरिक परावर्तन (TIR) कहते हैं, जिसके आधार पर आज के आधुनिक ऑप्टिकल फाइबर इंटरनेट कार्य करते हैं।",
    "bn": "যখন কোনো আলো বা বেতার তরঙ্গ পানি বা কাচের পৃষ্ঠে তির্যকভাবে আঘাত করে, তখন তা দিক পরিবর্তন করে: এটি স্নেলের প্রতিসরণ সূত্র। একটি বিশেষ কোণে সমান্তরাল সমবর্তিত আলোর প্রতিফলন সম্পূর্ণ শূন্য (০%) হয়ে যায়—এটিকে ব্রূস্টার কোণ বলা হয়। এই নীতির কারণেই পোলারাইজড সানগ্লাস রাস্তা ও পানির চকচকে প্রতিফলন আটকে দেয়। তদুপরি, যখন আলো ঘন মাধ্যম (যেমন কাচ বা পানি) থেকে হালকা মাধ্যমে (বাতাস) যাওয়ার সময় সংকট কোণের চেয়ে বেশি কোণে আপতিত হয়, তখন আলো আর বাইরে বের হতে পারে না; ১০০% আলো ভেতরেই প্রতিফলিত হয়ে ফিরে আসে। এই পূর্ণ অভ্যন্তরীণ প্রতিফলন (TIR) প্রযুক্তির ওপর ভিত্তি করেই আজকের দ্রুতগতির ফাইবার অপটিক ইন্টারনেট কাজ করে।"
  },
  "detailedExplanation": {
    "en": "At oblique incidence, a uniform plane wave strikes a planar interface (z = 0) with angle of incidence θ_i measured relative to the surface normal (z-axis). The plane containing the incident wave vector k_i and the surface normal a_z is called the Plane of Incidence (typically chosen as the x-z plane).\n\n1. Phase Matching Condition and Snell’s Laws:\nFor tangential boundary conditions to be satisfied at every point on the interface (for all x, y and t), the spatial phase variations along the boundary must be identical for all three waves (incident, reflected, transmitted):\nk_ix = k_rx = k_tx\nβ1 sin(θ_i) = β1 sin(θ_r) = β2 sin(θ_t)\n\n• Law of Reflection: θ_r = θ_i (Angle of reflection equals angle of incidence).\n• Snell’s Law of Refraction: β1 sin(θ_i) = β2 sin(θ_t).\nFor non-magnetic media (μ1 = μ2 = μ0):\n√εr1 sin(θ_i) = √εr2 sin(θ_t)  ⟹  n1 sin(θ_i) = n2 sin(θ_t).\n\n2. Polarizations at Oblique Incidence:\nAny arbitrary oblique wave is broken down into two distinct fundamental polarizations:\n(a) Perpendicular Polarization (also called TE - Transverse Electric, or s-polarization / senkrecht):\nThe electric field vector E is strictly perpendicular to the plane of incidence (parallel to interface y-axis: E = E_y a_y).\nFresnel reflection and transmission coefficients for Perpendicular (TE) polarization:\nΓ_perp = (η2 cos θ_i - η1 cos θ_t) / (η2 cos θ_i + η1 cos θ_t)\nτ_perp = (2 η2 cos θ_i) / (η2 cos θ_i + η1 cos θ_t) = 1 + Γ_perp\n\n(b) Parallel Polarization (also called TM - Transverse Magnetic, or p-polarization / parallel):\nThe electric field vector E lies inside the plane of incidence, while the magnetic field vector H is perpendicular to it (H = H_y a_y).\nFresnel reflection and transmission coefficients for Parallel (TM) polarization:\nΓ_par = (η2 cos θ_t - η1 cos θ_i) / (η2 cos θ_t + η1 cos θ_i)\nτ_par = (2 η2 cos θ_i) / (η2 cos θ_t + η1 cos θ_i)\nNote the relation: 1 + Γ_par = τ_par (cos θ_t / cos θ_i).\n\n3. Brewster's Angle (Polarizing Angle θ_B):\nFor Parallel (TM) polarization, there exists a unique angle of incidence at which the numerator of Γ_par vanishes (η2 cos θ_t = η1 cos θ_i), resulting in ZERO reflection (Γ_par = 0):\nFor non-magnetic media (μ1 = μ2 = μ0):\ntan(θ_B) = √(ε2 / ε1) = n2 / n1.\nAt θ_i = θ_B, an unpolarized wave reflecting off the surface produces a reflected wave that is 100% perpendicularly polarized (TE)! Notice that for non-magnetic dielectrics, no Brewster angle exists for perpendicular (TE) polarization.\nAlso, at Brewster angle: θ_B + θ_t = 90° (reflected and transmitted rays are exactly perpendicular to each other).\n\n4. Total Internal Reflection (TIR) and Evanescent Waves:\nWhen a wave propagates from an optically denser medium to a rarer medium (n1 > n2, or ε1 > ε2), the transmitted wave bends away from the normal (θ_t > θ_i).\nAs θ_i increases, θ_t reaches 90° at the Critical Angle θ_c:\nsin(θ_c) = n2 / n1 = √(εr2 / εr1).\nFor any incidence angle θ_i > θ_c, sin(θ_t) > 1, so cos(θ_t) = √(1 - sin² θ_t) = -j √(sin² θ_t - 1) becomes purely imaginary!\nConsequences of TIR:\n• |Γ_perp| = 1.0 and |Γ_par| = 1.0: Exactly 100% of incident power is reflected back into Medium 1.\n• Transmitted wave becomes an Evanescent Wave: E_t ~ e^(-α2 z) e^(-j β2x x), decaying exponentially with depth z into Medium 2 with zero time-average power flow across the boundary into the second medium (S_z = 0)!",
    "hi": "तिर्यक आपतन पर जब समतल तरंग किसी परिसीमा से θ_i कोण पर टकराती है, तो सतह पर कला सुमेलन से स्नेल के नियम प्राप्त होते हैं:\n• परावर्तन कोण = आपतन कोण (θ_r = θ_i)\n• स्नेल का अपवर्तन नियम: n1 sin(θ_i) = n2 sin(θ_t)\n\nध्रुवीकरण के दो मुख्य प्रकार:\n1. लंबवत ध्रुवीकरण (TE): विद्युत क्षेत्र आपतन तल के लंबवत होता है।\n2. समांतर ध्रुवीकरण (TM): विद्युत क्षेत्र आपतन तल में स्थित होता है।\n\nब्रूस्टर कोण (θ_B): वह विशेष आपतन कोण जिस पर TM ध्रुवीकरण का परावर्तन शून्य (Γ_par = 0) हो जाता है: tan(θ_B) = n2 / n1।\n\nपूर्ण आंतरिक परावर्तन (TIR): जब तरंग सघन से विरल माध्यम में जाती है और आपतन कोण क्रांतिक कोण sin(θ_c) = n2/n1 से अधिक होता है, तो 100% तरंग परावर्तित हो जाती है।",
    "bn": "তির্যক আপাতনে তরঙ্গ সীমানায় θ_i কোণে আঘাত করলে দশা সমন্বয় শর্ত থেকে স্নেলের সূত্রাবলি পাওয়া যায়:\n• প্রতিফলন সূত্র: θ_r = θ_i\n• স্নেলের প্রতিসরণ সূত্র: n1 sin(θ_i) = n2 sin(θ_t)\n\nদুটি প্রধান সমবর্তন:\n১. লম্ব সমবর্তন (TE): তড়িৎ ক্ষেত্র আপাতন তলের সাথে লম্ব থাকে।\n২. সমান্তরাল সমবর্তন (TM): তড়িৎ ক্ষেত্র আপাতন তলে অবস্থান করে।\n\nব্রূস্টার কোণ (θ_B): যে কোণে TM সমবর্তনের প্রতিফলন সম্পূর্ণ শূন্য হয়ে যায়: tan(θ_B) = n2 / n1।\n\nপূর্ণ অভ্যন্তরীণ প্রতিফলন (TIR): ঘন থেকে হালকা মাধ্যমে যাওয়ার সময় আপাতন কোণ সংকট কোণ sin(θ_c) = n2/n1 এর চেয়ে বড় হলে ১০০% তরঙ্গ প্রতিফলিত হয়।"
  },
  "formulas": [
    {
      "id": "f-snell-law",
      "symbol": "n1 sin(θ_i) = n2 sin(θ_t)",
      "expression": "β1 sin(θ_i) = β2 sin(θ_t)  ⟹  n1 sin(θ_i) = n2 sin(θ_t)",
      "title": {
        "en": "Snell’s Law of Refraction",
        "hi": "स्नेल का अपवर्तन नियम",
        "bn": "স্নেলের প্রতিসরণ সূত্র"
      },
      "description": {
        "en": "Phase-matching condition along a planar boundary relating angle of incidence θ_i and angle of refraction θ_t.",
        "hi": "समतल अंतरापृष्ठ पर आपतन कोण θ_i और अपवर्तन कोण θ_t को जोड़ने वाला कला-सुमेलन समीकरण।",
        "bn": "সমতল সীমানায় আপাতন কোণ θ_i এবং প্রতিসরণ কোণ θ_t এর মধ্যকার দশা সমন্বয় সমীকরণ।"
      },
      "variables": [
        {
          "symbol": "n1, n2",
          "name": {
            "en": "Refractive indices n = √ε_r",
            "hi": "अपवर्तनांक n = √ε_r",
            "bn": "প্রতিসরাঙ্ক n = √ε_r"
          }
        },
        {
          "symbol": "θ_i",
          "name": {
            "en": "Angle of incidence",
            "hi": "आपतन कोण",
            "bn": "আপাতন কোণ"
          }
        },
        {
          "symbol": "θ_t",
          "name": {
            "en": "Angle of refraction (transmission)",
            "hi": "अपवर्तन कोण",
            "bn": "প্রতিসরণ কোণ"
          }
        }
      ]
    },
    {
      "id": "f-critical-angle",
      "symbol": "θ_c",
      "expression": "sin(θ_c) = n2 / n1 = √(ε_r2 / ε_r1)   (for n1 > n2)",
      "title": {
        "en": "Critical Angle for Total Internal Reflection",
        "hi": "पूर्ण आंतरिक परावर्तन का क्रांतिक कोण",
        "bn": "পূর্ণ অভ্যন্তরীণ প্রতিফলনের সংকট কোণ"
      },
      "description": {
        "en": "Minimum angle of incidence in denser medium beyond which wave transmission ceases and Total Internal Reflection occurs.",
        "hi": "सघन माध्यम में वह न्यूनतम आपतन कोण जिससे अधिक कोण पर पारगमन रुक जाता है और पूर्ण आंतरिक परावर्तन होता है।",
        "bn": "ঘন মাধ্যমে সর্বনিম্ন আপাতন কোণ যার চেয়ে বেশি কোণে সঞ্চালন বন্ধ হয়ে পূর্ণ অভ্যন্তরীণ প্রতিফলন ঘটে।"
      },
      "variables": [
        {
          "symbol": "θ_c",
          "name": {
            "en": "Critical angle (degrees)",
            "hi": "क्रांतिक कोण",
            "bn": "সংকট কোণ"
          }
        }
      ]
    },
    {
      "id": "f-brewster-angle",
      "symbol": "θ_B",
      "expression": "tan(θ_B) = n2 / n1 = √(ε_r2 / ε_r1)   (Parallel / TM polarization)",
      "title": {
        "en": "Brewster Angle (Polarizing Angle)",
        "hi": "ब्रूस्टर कोण (ध्रुवण कोण)",
        "bn": "ব্রূস্টার কোণ (সমবর্তন কোণ)"
      },
      "description": {
        "en": "Angle of incidence at which the reflection coefficient for parallel-polarized waves is identically zero (Γ_par = 0).",
        "hi": "वह आपतन कोण जिस पर समांतर ध्रुवीकृत तरंगों का परावर्तन गुणांक शून्य (Γ_par = 0) होता है।",
        "bn": "যে আপাতন কোণে সমান্তরাল সমবর্তিত তরঙ্গের প্রতিফলন গুণাঙ্ক সম্পূর্ণ শূন্য হয় (Γ_par = ০)।"
      },
      "variables": [
        {
          "symbol": "θ_B",
          "name": {
            "en": "Brewster angle (degrees)",
            "hi": "ब्रूस्टर कोण",
            "bn": "ব্রূস্টার কোণ"
          }
        }
      ]
    },
    {
      "id": "f-fresnel-coefficients",
      "symbol": "Γ_perp, Γ_par",
      "expression": "Γ_perp = (η2 cos θ_i - η1 cos θ_t)/(η2 cos θ_i + η1 cos θ_t),   Γ_par = (η2 cos θ_t - η1 cos θ_i)/(η2 cos θ_t + η1 cos θ_i)",
      "title": {
        "en": "Fresnel Reflection Coefficients (TE and TM)",
        "hi": "फ्रेस्नेल परावर्तन गुणांक (TE एवं TM)",
        "bn": "ফ্রেনেল প্রতিফলন গুণাঙ্ক (TE ও TM)"
      },
      "description": {
        "en": "Amplitude reflection coefficients for perpendicular and parallel linear polarizations as a function of incidence angle.",
        "hi": "आपतन कोण के फलन के रूप में लंबवत एवं समांतर ध्रुवीकरण के परावर्तन गुणांक।",
        "bn": "আপাতন কোণের প্রেক্ষিতে লম্ব ও সমান্তরাল সমবর্তনের প্রতিফলন গুণাঙ্ক।"
      },
      "variables": [
        {
          "symbol": "Γ_perp",
          "name": {
            "en": "Perpendicular (TE) reflection coefficient",
            "hi": "लंबवत परावर्तन गुणांक",
            "bn": "লম্ব প্রতিফলন গুণাঙ্ক"
          }
        },
        {
          "symbol": "Γ_par",
          "name": {
            "en": "Parallel (TM) reflection coefficient",
            "hi": "समांतर परावर्तन गुणांक",
            "bn": "সমান্তরাল প্রতিফলন গুণাঙ্ক"
          }
        }
      ]
    }
  ],
  "sections": [
    {
      "id": "sec-phase-matching-snell",
      "title": {
        "en": "1. Boundary Phase Matching and Snell's Geometric Laws",
        "hi": "1. सीमा कला सुमेलन एवं स्नेल के ज्यामितीय नियम",
        "bn": "১. সীমানা দশা সমন্বয় এবং স্নেলের জ্যামিতিক সূত্র"
      },
      "content": {
        "en": "When a uniform plane wave strikes a planar interface at angle θ_i, the spatial oscillation along the surface (x-axis) is described by e^(-j β1 x sin θ_i). To satisfy Maxwell's boundary conditions everywhere along the interface at all moments in time, the spatial frequency of the reflected wave (e^(-j β1 x sin θ_r)) and transmitted wave (e^(-j β2 x sin θ_t)) must match exactly:\n\nβ1 sin(θ_i) = β1 sin(θ_r) = β2 sin(θ_t)\n\nFrom the first equality, since the incident and reflected waves are in the exact same medium (same β1), θ_r = θ_i: the angle of reflection equals the angle of incidence.\n\nFrom the second equality, dividing by frequency ω yields (1/v1) sin θ_i = (1/v2) sin θ_t. Multiplying by the speed of light c gives Snell's law: n1 sin(θ_i) = n2 sin(θ_t).",
        "hi": "जब समतल तरंग अंतरापृष्ठ पर आपतित होती है, तो सतह के अनुदिश कला परिवर्तन को बराबर होना आवश्यक है। इससे दो मूलभूत नियम प्राप्त होते हैं:\n1. परावर्तन कोण = आपतन कोण (θ_r = θ_i)\n2. स्नेल का नियम: n1 sin(θ_i) = n2 sin(θ_t)",
        "bn": "যখন একটি সমতল তরঙ্গ সীমানায় আঘাত করে, তখন সীমানা বরাবর দশা পরিবর্তন অপরিবর্তিত থাকতে হয়। এর ফলে দুটি মৌলিক সূত্র পাওয়া যায়:\n১. প্রতিফলন কোণ = আপাতন কোণ (θ_r = θ_i)\n২. স্নেলের সূত্র: n1 sin(θ_i) = n2 sin(θ_t)"
      },
      "schematicId": "circuit-ch11-oblique-incidence-snell-brewster"
    },
    {
      "id": "sec-brewster-tir-mechanisms",
      "title": {
        "en": "2. Brewster’s Polarizing Angle and Total Internal Reflection (TIR)",
        "hi": "2. ब्रूस्टर का ध्रुवण कोण एवं पूर्ण आंतरिक परावर्तन (TIR)",
        "bn": "২. ব্রূস্টারের সমবর্তন কোণ এবং পূর্ণ অভ্যন্তরীণ প্রতিফলন (TIR)"
      },
      "content": {
        "en": "Two crucial physical singularities occur at oblique dielectric interfaces:\n\n1. Brewster Angle (θ_B):\nWhen an incident wave is TM (parallel) polarized, the oscillating atomic electric dipoles inside Medium 2 are aligned parallel to the direction of the reflected wave! Because oscillating dipoles radiate zero power along their dipole axis, no reflected wave can physically be produced: Γ_par = 0.\nThis occurs when θ_i + θ_t = 90°, leading directly to tan(θ_B) = n2 / n1.\nIf unpolarized light hits a dielectric boundary at θ_B, the reflected beam contains zero parallel polarization, leaving it 100% linearly polarized with E orthogonal to the plane of incidence.\n\n2. Total Internal Reflection (TIR):\nWhen n1 > n2 and θ_i exceeds the Critical Angle θ_c = arcsin(n2 / n1), refraction into Medium 2 becomes evanescent. The field does not propagate deeper into Medium 2; instead, its amplitude decays exponentially as e^(-α2 z), carrying zero net time-averaged power across the boundary. All incident power bounces back into Medium 1 (|Γ| = 1.0), forming the physical bedrock of optical fiber waveguides, laser prisms, and endoscopes.",
        "hi": "1. ब्रूस्टर कोण पर आपतित TM तरंग के लिए परावर्तित किरण की दिशा में माध्यम 2 के दोलनकारी द्विध्रुव संरेखित हो जाते हैं, जो अपनी अक्ष पर कोई विकिरण उत्सर्जित नहीं करते। अतः परावर्तन शून्य हो जाता है: tan(θ_B) = n2 / n1।\n2. पूर्ण आंतरिक परावर्तन (TIR) तब होता है जब n1 > n2 हो और आपतन कोण θ_i > θ_c हो। इसमें 100% प्रकाश वापस पहले माध्यम में लौट आता है, जो ऑप्टिकल फाइबर का आधार है।",
        "bn": "১. ব্রূস্টার কোণে TM তরঙ্গের ক্ষেত্রে দ্বিতীয় মাধ্যমের পরমাণুগুলি এমনভাবে স্পন্দিত হয় যে তাদের অক্ষ বরাবর কোনো শক্তি নির্গত হতে পারে না, ফলে প্রতিফলন সম্পূর্ণ শূন্য হয়: tan(θ_B) = n2 / n1।\n২. পূর্ণ অভ্যন্তরীণ প্রতিফলন (TIR) ঘটে যখন n1 > n2 এবং θ_i > θ_c হয়। এতে ১০০% আলো প্রতিফলিত হয়ে ফিরে আসে, যা অপটিক্যাল ফাইবার যোগাযোগের মূল ভিত্তি।"
      }
    }
  ],
  "diagrams": [
    {
      "id": "diag-ch11-oblique-incidence-snell-brewster",
      "title": {
        "en": "Oblique Incidence Ray Tracing: Snell Refraction, Brewster Brewster Null & TIR Evanescent Field",
        "hi": "तिर्यक आपतन किरण आरेख: स्नेल अपवर्तन, ब्रूस्टर शून्य एवं TIR अवमंदित क्षेत्र",
        "bn": "তির্যক আপাতন রশ্মি চিত্র: স্নেলের প্রতিসরণ, ব্রূস্টার শূন্য প্রতিফলন এবং TIR ক্ষীয়মাণ ক্ষেত্র"
      },
      "caption": {
        "en": "Comprehensive ray geometry showing incident, reflected, and transmitted wavevectors, parallel (TM) and perpendicular (TE) electric field vectors, Brewster angle condition (θ_i + θ_t = 90°), and TIR evanescent decay.",
        "hi": "आपतित, परावर्तित एवं पारगमित तरंग सदिश, TE एवं TM विद्युत क्षेत्र, ब्रूस्टर कोण शर्त (θ_i + θ_t = 90°) तथा TIR में अवमंदित तरंग क्षय का समग्र किरण आरेख।",
        "bn": "আপতিত, প্রতিফলিত ও সঞ্চালিত তরঙ্গ ভেক্টর, TE ও TM তড়িৎ ক্ষেত্র, ব্রূস্টার শর্ত (θ_i + θ_t = ৯০°) এবং TIR এ ক্ষীয়মাণ তরঙ্গের রশ্মি নকশা।"
      },
      "svgType": "circuit-ch11-oblique-incidence-snell-brewster"
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-ch11-l10-01",
      "problem": {
        "en": "An optical silica fiber has core refractive index n1 = 1.480 and cladding refractive index n2 = 1.450. Calculate: (a) the Critical Angle θ_c for Total Internal Reflection at the core-cladding boundary, (b) the Numerical Aperture (NA) of the fiber in air, and (c) the Brewster angle θ_B if light were launched at the flat input face from air (n = 1.0) into the core.",
        "hi": "एक सिलिका ऑप्टिकल फाइबर के कोर का अपवर्तनांक n1 = 1.480 तथा क्लैडिंग का n2 = 1.450 है। ज्ञात कीजिए: (a) कोर-क्लैडिंग परिसीमा पर क्रांतिक कोण θ_c, (b) हवा में फाइबर का संख्यात्मक द्वारक (NA), तथा (c) हवा से कोर में प्रवेश पर ब्रूस्टर कोण θ_B।",
        "bn": "একটি অপটিক্যাল ফাইবার কোরের প্রতিসরাঙ্ক n1 = ১.৪৮০ এবং ক্ল্যাডিংয়ের n2 = ১.৪৫০। নির্ণয় করুন: (a) কোর-ক্ল্যাডিং সীমানায় সংকট কোণ θ_c, (b) বাতাসে ফাইবারের নিউমেরিক্যাল অ্যাপারচার (NA), এবং (c) বাতাস থেকে কোরে প্রবেশের ব্রূস্টার কোণ θ_B।"
      },
      "solution": {
        "en": "Step 1: Calculate Critical Angle θ_c at the core-cladding interface:\nsin(θ_c) = n2 / n1 = 1.450 / 1.480 = 0.97973.\nθ_c = arcsin(0.97973) = 78.44°.\nLight must strike the cladding at an angle greater than 78.44° to remain totally internally reflected inside the core.\n\nStep 2: Calculate Numerical Aperture (NA):\nNA = √(n1² - n2²) = √[(1.480)² - (1.450)²] = √[2.1904 - 2.1025] = √0.0879 = 0.2965.\nThe maximum acceptance angle in air is θ_acc = arcsin(NA) = arcsin(0.2965) = 17.25°.\n\nStep 3: Calculate Brewster angle at input face (air to core):\ntan(θ_B) = n_core / n_air = 1.480 / 1.000 = 1.480.\nθ_B = arctan(1.480) = 55.95°.",
        "hi": "चरण 1: क्रांतिक कोण θ_c = arcsin(1.450 / 1.480) = arcsin(0.9797) = 78.44°।\nचरण 2: संख्यात्मक द्वारक NA = √(1.48² - 1.45²) = √0.0879 = 0.2965।\nस्वीकार्य कोण θ_acc = arcsin(0.2965) = 17.25°।\nचरण 3: ब्रूस्टर कोण tan(θ_B) = 1.48 / 1 ⟹ θ_B = 55.95°।",
        "bn": "ধাপ ১: সংকট কোণ θ_c = arcsin(১.৪৫০ / ১.৪৮০) = ৭৮.৪৪°।\nধাপ ২: নিউমেরিক্যাল অ্যাপারচার NA = √(১.৪৮² - ১.৪৫²) = ০.২৯৬৫।\nগ্রহণে গ্রহণযোগ্য কোণ θ_acc = arcsin(০.২৯৬৫) = ১৭.২৫°।\nধাপ ৩: ব্রূস্টার কোণ tan(θ_B) = ১.৪৮ / ১ ⟹ θ_B = ৫৫.৯৫°।"
      }
    },
    {
      "id": "ex-ch11-l10-02",
      "problem": {
        "en": "Unpolarized sunlight in air (n1 = 1.0) reflects off the flat surface of a swimming pool (fresh water, n2 = 1.333). Calculate: (a) the Brewster angle θ_B of the water, (b) the angle of refraction θ_t at this incidence, and (c) describe the polarization of the reflected glare.",
        "hi": "हवा (n1 = 1.0) में अध्रुवीकृत सूर्य का प्रकाश पानी (n2 = 1.333) की सपाट सतह से परावर्तित होता है। ज्ञात कीजिए: (a) पानी का ब्रूस्टर कोण θ_B, (b) इस कोण पर अपवर्तन कोण θ_t, तथा (c) परावर्तित चमक के ध्रुवीकरण की प्रकृति।",
        "bn": "বাতাসে (n1 = ১.০) অসমবর্তিত সূর্যের আলো পানির (n2 = ১.৩৩৩) সমতল পৃষ্ঠে প্রতিফলিত হয়। নির্ণয় করুন: (a) পানির ব্রূস্টার কোণ θ_B, (b) এই কোণে প্রতিসরণ কোণ θ_t, এবং (c) প্রতিফলিত ঝলকানির সমবর্তন প্রকৃতি।"
      },
      "solution": {
        "en": "Step 1: Calculate Brewster's angle:\ntan(θ_B) = n2 / n1 = 1.333 / 1.000 = 1.3333.\nθ_B = arctan(1.3333) = 53.13° (approximately 53°).\n\nStep 2: Calculate refraction angle θ_t:\nBy Snell's law: n1 sin θ_B = n2 sin θ_t\nsin θ_t = (1.000 / 1.3333) sin(53.13°) = (0.750) × 0.8000 = 0.6000.\nθ_t = arcsin(0.6000) = 36.87°.\nNotice that θ_B + θ_t = 53.13° + 36.87° = 90.00° exactly.\n\nStep 3: Polarization state of reflected glare:\nBecause sunlight is unpolarized (equal 50% TM and 50% TE power), at θ_i = 53.13°, the TM component experiences 0% reflection (Γ_par = 0). Thus, 100% of the reflected ray consists of purely TE (perpendicular) polarized light, aligned parallel to the horizontal water surface. Polarized sunglasses with vertical transmission axes completely block this horizontal glare.",
        "hi": "चरण 1: ब्रूस्टर कोण tan(θ_B) = 1.333 ⟹ θ_B = 53.13°।\nचरण 2: अपवर्तन कोण θ_t = 90° - 53.13° = 36.87°।\nचरण 3: परावर्तित चमक पूर्णतः 100% क्षैतिज रेखीय ध्रुवीकृत होती है, जिसे ऊर्ध्वाधर पोलराइड धूप का चश्मा पूरी तरह रोक देता है।",
        "bn": "ধাপ ১: ব্রূস্টার কোণ tan(θ_B) = ১.৩৩৩ ⟹ θ_B = ৫৩.১৩°।\nধাপ ২: প্রতিসরণ কোণ θ_t = ৯০° - ৫৩.১৩° = ৩৬.৮৭°।\nধাপ ৩: প্রতিফলিত আলো বিশুদ্ধভাবে ১০০% অনুভূমিক রৈখিক সমবর্তিত হয়, যা উল্লম্ব পোলারাইজড সানগ্লাস দিয়ে সম্পূর্ণ দূর করা যায়।"
      }
    }
  ],
  "practicalApplications": {
    "en": [
      "Fiber-Optic Communications: Core-cladding boundaries utilize Total Internal Reflection (TIR) with zero transmission loss to guide multi-terabit data over thousands of kilometers.",
      "Polarized Glare-Reducing Eyewear: Polaroid lenses block horizontally polarized light reflected from horizontal surfaces (water, wet roads) at or near Brewster's angle.",
      "Laser Brewster Windows: Gas and solid-state laser cavity tubes use Brewster-cut end windows to eliminate reflection losses for parallel-polarized laser beams, maximizing optical gain.",
      "Prism Binoculars & Periscopes: Porro and roof prisms use 100% Total Internal Reflection instead of silvered mirrors, achieving 99.9% transmission without tarnishing or peeling.",
      "Evanescent Wave Biosensors: Total internal reflection fluorescence (TIRF) microscopy exploits evanescent decay (penetration depth ~100 nm) to image single cell membranes without background noise."
    ],
    "hi": [
      "ऑप्टिकल फाइबर संचार: कोर-क्लैडिंग परिसीमा पर पूर्ण आंतरिक परावर्तन (TIR) द्वारा बिना किसी हानि के हजारों किलोमीटर तक डेटा संचरित होता है।",
      "ग्लेयर-रोधी धूप का चश्मा: ब्रूस्टर कोण पर पानी और सड़क से परावर्तित क्षैतिज प्रकाश को पोलराइड चश्मे पूरी तरह रोक देते हैं।",
      "लेजर ब्रूस्टर खिड़कियां: लेजर ट्यूबों के सिरों पर ब्रूस्टर कोण वाली खिड़कियां लगाई जाती हैं ताकि शून्य परावर्तन के साथ अधिकतम शक्ति प्राप्त हो सके।",
      "प्रिज्म दूरबीन: साधारण दर्पणों की जगह 100% TIR प्रिज्मों का उपयोग किया जाता है जिससे कोई परावर्तन हानि नहीं होती।",
      "अवमंदित तरंग बायो-सेंसर: TIRF माइक्रोस्कोपी में केवल 100 nm गहराई तक जाने वाली अवमंदित तरंगों से कोशिकाओं की स्पष्ट तस्वीरें ली जाती हैं।"
    ],
    "bn": [
      "ফাইবার অপটিক যোগাযোগ: কোর-ক্ল্যাডিং সীমানায় পূর্ণ অভ্যন্তরীণ প্রতিফলনের (TIR) মাধ্যমে কোনো অপচয় ছাড়াই টেরাবিট ডেটা হাজার কিলোমিটার দূরে পাঠানো যায়।",
      "পোলারাইজড সানগ্লাস: ব্রূস্টার কোণে পানির উপরিভাগ থেকে প্রতিফলিত অনুভূমিক ঝলকানি দূর করতে উল্লম্ব ফিল্টার ব্যবহৃত হয়।",
      "লেজার ব্রূস্টার উইন্ডো: লেজার টিউবে ব্রূস্টার কোণে উইন্ডো স্থাপন করে প্রতিফলন সম্পূর্ণ শূন্য করে লেজার বিমের শক্তি বৃদ্ধি করা হয়।",
      "প্রিজম বাইনোকুলার: আয়নার পরিবর্তে প্রিজমের ১০০% পূর্ণ অভ্যন্তরীণ প্রতিফলন ব্যবহার করে উজ্জ্বল প্রতিবিম্ব তৈরি করা হয়।",
      "ইভানেসেন্ট তরঙ্গ বায়ো-সেন্সর: TIRF অণুবীক্ষণ যন্ত্রে জীবকোষের সূক্ষ্ম পর্দার ছবি তুলতে ক্ষীয়মাণ তরঙ্গের ব্যবহার করা হয়।"
    ]
  },
  "importantPoints": {
    "en": [
      "At any planar boundary, phase matching requires the tangential wave vector components to be equal: k_ix = k_rx = k_tx.",
      "Snell's law n1 sin(θ_i) = n2 sin(θ_t) is a direct consequence of continuous electromagnetic boundary conditions across space and time.",
      "At Brewster’s angle θ_B, parallel (TM) polarization reflection is identically zero: tan(θ_B) = n2 / n1.",
      "Total Internal Reflection occurs only when transitioning from a denser to rarer medium (n1 > n2) at angles exceeding Critical Angle θ_c = arcsin(n2 / n1).",
      "During TIR, an evanescent wave penetrates into Medium 2 whose field decays exponentially with depth, transmitting zero net time-averaged power across the boundary."
    ],
    "hi": [
      "सीमा पर कला सुमेलन के लिए स्पर्शज्या तरंग सदिश घटक बराबर होने चाहिए: k_ix = k_rx = k_tx।",
      "स्नेल का नियम मैक्सवेल की सीमा शर्तों का प्रत्यक्ष परिणाम है।",
      "ब्रूस्टर कोण पर TM ध्रुवीकरण का परावर्तन शून्य होता है: tan(θ_B) = n2 / n1।",
      "पूर्ण आंतरिक परावर्तन केवल सघन से विरल माध्यम (n1 > n2) में क्रांतिक कोण θ_c = arcsin(n2 / n1) से अधिक कोण पर होता है।",
      "TIR के दौरान विरल माध्यम में अवमंदित तरंग प्रवेश करती है जो चरघातांकी रूप से क्षय होती है और शून्य नेट शक्ति ले जाती है।"
    ],
    "bn": [
      "সীমানায় দশা সমন্বয়ের জন্য স্পর্শকীয় তরঙ্গ ভেক্টর সমান হতে হয়: k_ix = k_rx = k_tx।",
      "স্নেলের সূত্র হলো ম্যাক্সওয়েলের সীমানা শর্তের প্রত্যক্ষ গাণিতিক প্রকাশ।",
      "ব্রূস্টার কোণে TM সমবর্তনের প্রতিফলন সম্পূর্ণ শূন্য হয়: tan(θ_B) = n2 / n1।",
      "পূর্ণ অভ্যন্তরীণ প্রতিফলন শুধুমাত্র ঘন থেকে হালকা মাধ্যমে (n1 > n2) সংকট কোণ θ_c = arcsin(n2 / n1) এর বেশি কোণে ঘটে।",
      "TIR এর সময় হালকা মাধ্যমে ক্ষীয়মাণ তরঙ্গ প্রবেশ করে যা সূচকীয় হারে কমে যায় এবং কোনো নিট ক্ষমতা পরিবহন করে না।"
    ]
  },
  "commonMistakes": {
    "en": [
      "Confusing TE (Perpendicular) and TM (Parallel) polarization vectors relative to the plane of incidence.",
      "Assuming Brewster's angle exists for both TE and TM modes in standard non-magnetic dielectrics (it exists ONLY for TM / parallel polarization).",
      "Thinking Total Internal Reflection can occur when going from a rarer to denser medium (n1 < n2)—TIR is physically impossible unless n1 > n2.",
      "Believing that an evanescent wave in TIR transports power deep into Medium 2; in reality, its time-average real Poynting flux into Medium 2 is exactly zero."
    ],
    "hi": [
      "आपतन तल के सापेक्ष TE (लंबवत) और TM (समांतर) ध्रुवीकरण सदिशों में भ्रमित होना।",
      "यह मान लेना कि सामान्य परावैद्युतों में TE और TM दोनों के लिए ब्रूस्टर कोण होता है (यह केवल TM के लिए होता है)।",
      "विरल से सघन माध्यम में जाते समय TIR की अपेक्षा करना (TIR केवल n1 > n2 होने पर ही संभव है)।",
      "यह समझना कि TIR में अवमंदित तरंग दूसरे माध्यम में शक्ति ले जाती है; वास्तव में समय-औसत शक्ति शून्य होती है।"
    ],
    "bn": [
      "আপাতন তলের সাপেক্ষে TE (লম্ব) এবং TM (সমান্তরাল) সমবর্তন নিয়ে দ্বিধাদ্বন্দ্ব সৃষ্টি করা।",
      "মনে করা যে স্বাভাবিক ডাইইলেকট্রিকে TE ও TM উভয়ের জন্যই ব্রূস্টার কোণ থাকে (এটি কেবল TM এর জন্য বিদ্যমান)।",
      "হালকা থেকে ঘন মাধ্যমে যাওয়ার সময় TIR আশা করা (TIR কেবল n1 > n2 হলেই সম্ভব)।",
      "মনে করা যে TIR এর ক্ষীয়মাণ তরঙ্গ দ্বিতীয় মাধ্যমে শক্তি সঞ্চালন করে; বাস্তবে সময়-গড় ক্ষমতা শূন্য।"
    ]
  },
  "keyTakeaways": {
    "en": [
      "Phase matching along boundary interfaces is the unifying root of Snell's reflection and refraction laws.",
      "TM polarization experiences zero reflection at Brewster angle θ_B = arctan(n2/n1), completely polarizing reflected unpolarized light.",
      "Total Internal Reflection provides 100% loss-free wave confinement, forming the physical backbone of fiber optics.",
      "Evanescent waves decay exponentially within a fraction of a wavelength, enabling nanometer-scale near-field optical sensing."
    ],
    "hi": [
      "सीमा पर कला सुमेलन ही स्नेल के परावर्तन और अपवर्तन नियमों का मूल आधार है।",
      "TM ध्रुवीकरण ब्रूस्टर कोण θ_B पर शून्य परावर्तन अनुभव करता है, जिससे परावर्तित प्रकाश पूर्णतः ध्रुवीकृत हो जाता है।",
      "पूर्ण आंतरिक परावर्तन बिना किसी हानि के 100% प्रकाश को बांधे रखता है, जो फाइबर ऑप्टिक्स की रीढ़ है।",
      "अवमंदित तरंगें एक तरंगदैर्ध्य से भी कम दूरी में क्षय हो जाती हैं, जिससे नैनो-स्केल नियर-फील्ड सेंसिंग संभव होती है।"
    ],
    "bn": [
      "সীমানা বরাবর দশা সমন্বয়ই স্নেলের প্রতিফলন ও প্রতিসরণ সূত্রের মূল ভিত্তি।",
      "ব্রূস্টার কোণে TM সমবর্তনের প্রতিফলন শূন্য হওয়ায় প্রতিফলিত আলো সম্পূর্ণ রৈখিক সমবর্তিত হয়।",
      "পূর্ণ অভ্যন্তরীণ প্রতিফলন ১০০% ক্ষতিহীনভাবে তরঙ্গ পরিচালনা করে, যা অপটিক্যাল ফাইবারের মূল ভিত্তি।",
      "ক্ষীয়মাণ তরঙ্গ ক্ষুদ্র দূরত্বের মধ্যেই সূচকীয় হারে মিলিয়ে যায়, যা ন্যানো-স্কেল সেন্সিং প্রযুক্তিতে ব্যবহৃত হয়।"
    ]
  },
  "mcqs": [
    {
      "id": "mcq-ch11-l10-01",
      "question": {
        "en": "At what angle of incidence does parallel (TM) polarized light experience zero reflection from a non-magnetic dielectric boundary?",
        "hi": "किस आपतन कोण पर समांतर (TM) ध्रुवीकृत प्रकाश का परावैद्युत सीमा से परावर्तन शून्य होता है?",
        "bn": "কোন আপাতন কোণে অচৌম্বক ডাইইলেকট্রিক সীমানা থেকে সমান্তরাল (TM) সমবর্তিত আলোর প্রতিফলন শূন্য হয়?"
      },
      "options": [
        {
          "id": "opt-1",
          "text": {
            "en": "Critical angle θ_c",
            "hi": "क्रांतिक कोण θ_c",
            "bn": "সংকট কোণ θ_c"
          }
        },
        {
          "id": "opt-2",
          "text": {
            "en": "Brewster angle θ_B = arctan(n2 / n1)",
            "hi": "ब्रूस्टर कोण θ_B = arctan(n2 / n1)",
            "bn": "ব্রূস্টার কোণ θ_B = arctan(n2 / n1)"
          }
        },
        {
          "id": "opt-3",
          "text": {
            "en": "Normal incidence (0°)",
            "hi": "अभिलंबवत आपतन (0°)",
            "bn": "লম্ব আপাতন (০°)"
          }
        },
        {
          "id": "opt-4",
          "text": {
            "en": "Grazing incidence (90°)",
            "hi": "स्पर्शीय आपतन (90°)",
            "bn": "স্পর্শকীয় আপাতন (৯০°)"
          }
        }
      ],
      "correctOptionId": "opt-2",
      "explanation": {
        "en": "At Brewster angle θ_B = arctan(n2/n1), Γ_par = 0, meaning zero parallel-polarized reflection.",
        "hi": "ब्रूस्टर कोण θ_B = arctan(n2/n1) पर Γ_par = 0 होता है, अर्थात समांतर ध्रुवीकृत तरंग का शून्य परावर्तन होता है।",
        "bn": "ব্রূস্টার কোণ θ_B = arctan(n2/n1) এ Γ_par = ০ হয়, যার অর্থ সমান্তরাল আলোর প্রতিফলন শূন্য।"
      }
    },
    {
      "id": "mcq-ch11-l10-02",
      "question": {
        "en": "What is the relation between angle of incidence θ_i and angle of transmission θ_t at Brewster's angle?",
        "hi": "ब्रूस्टर कोण पर आपतन कोण θ_i और पारगमन कोण θ_t के बीच क्या संबंध होता है?",
        "bn": "ব্রূস্টার কোণে আপাতন কোণ θ_i এবং প্রতিসরণ কোণ θ_t এর মধ্যকার সম্পর্ক কী?"
      },
      "options": [
        {
          "id": "opt-1",
          "text": {
            "en": "θ_i = θ_t",
            "hi": "θ_i = θ_t",
            "bn": "θ_i = θ_t"
          }
        },
        {
          "id": "opt-2",
          "text": {
            "en": "θ_i + θ_t = 90°",
            "hi": "θ_i + θ_t = 90°",
            "bn": "θ_i + θ_t = ৯০°"
          }
        },
        {
          "id": "opt-3",
          "text": {
            "en": "θ_i + θ_t = 180°",
            "hi": "θ_i + θ_t = 180°",
            "bn": "θ_i + θ_t = ১৮০°"
          }
        },
        {
          "id": "opt-4",
          "text": {
            "en": "θ_i - θ_t = 45°",
            "hi": "θ_i - θ_t = 45°",
            "bn": "θ_i - θ_t = ৪৫°"
          }
        }
      ],
      "correctOptionId": "opt-2",
      "explanation": {
        "en": "At Brewster's angle, the reflected and transmitted rays are exactly perpendicular to each other, so θ_B + θ_t = 90°.",
        "hi": "ब्रूस्टर कोण पर परावर्तित और अपवर्तित किरणें परस्पर 90° के लंबवत होती हैं, अतः θ_B + θ_t = 90°।",
        "bn": "ব্রূস্টার কোণে প্রতিফলিত ও প্রতিসরিত রশ্মি পরস্পর লম্ব হয়, তাই θ_B + θ_t = ৯০°।"
      }
    },
    {
      "id": "mcq-ch11-l10-03",
      "question": {
        "en": "Under what condition can Total Internal Reflection (TIR) occur at a boundary between Medium 1 and Medium 2?",
        "hi": "माध्यम 1 और माध्यम 2 की सीमा पर पूर्ण आंतरिक परावर्तन (TIR) किस स्थिति में हो सकता है?",
        "bn": "১ম ও ২য় মাধ্যমের সীমানায় পূর্ণ অভ্যন্তরীণ প্রতিফলন (TIR) কোন শর্তে ঘটা সম্ভব?"
      },
      "options": [
        {
          "id": "opt-1",
          "text": {
            "en": "n1 < n2 and θ_i < θ_c",
            "hi": "n1 < n2 और θ_i < θ_c",
            "bn": "n1 < n2 এবং θ_i < θ_c"
          }
        },
        {
          "id": "opt-2",
          "text": {
            "en": "n1 > n2 and θ_i > θ_c",
            "hi": "n1 > n2 और θ_i > θ_c",
            "bn": "n1 > n2 এবং θ_i > θ_c"
          }
        },
        {
          "id": "opt-3",
          "text": {
            "en": "n1 = n2 at any angle",
            "hi": "n1 = n2 किसी भी कोण पर",
            "bn": "যেকোনো কোণে n1 = n2"
          }
        },
        {
          "id": "opt-4",
          "text": {
            "en": "Only when medium 2 is a metal",
            "hi": "केवल तब जब माध्यम 2 धातु हो",
            "bn": "কেবলমাত্র ২য় মাধ্যম ধাতু হলে"
          }
        }
      ],
      "correctOptionId": "opt-2",
      "explanation": {
        "en": "TIR requires: (1) travelling from optically denser to rarer medium (n1 > n2), and (2) incidence angle exceeding the critical angle (θ_i > θ_c).",
        "hi": "TIR के लिए दो शर्तें आवश्यक हैं: (1) सघन से विरल माध्यम (n1 > n2), तथा (2) आपतन कोण क्रांतिक कोण से अधिक (θ_i > θ_c)।",
        "bn": "TIR এর জন্য দুটি শর্ত পূরণ হতে হয়: (১) ঘন থেকে হালকা মাধ্যম (n1 > n2), এবং (২) আপাতন কোণ সংকট কোণের চেয়ে বড় (θ_i > θ_c)।"
      }
    },
    {
      "id": "mcq-ch11-l10-04",
      "question": {
        "en": "What is the nature of the electromagnetic wave in Medium 2 during Total Internal Reflection?",
        "hi": "पूर्ण आंतरिक परावर्तन के दौरान माध्यम 2 में विद्युत चुंबकीय तरंग की प्रकृति कैसी होती है?",
        "bn": "পূর্ণ অভ্যন্তরীণ প্রতিফলনের সময় ২য় মাধ্যমে তড়িৎচৌম্বক তরঙ্গের প্রকৃতি কেমন হয়?"
      },
      "options": [
        {
          "id": "opt-1",
          "text": {
            "en": "A uniform plane wave propagating normally into Medium 2",
            "hi": "माध्यम 2 में सीधे आगे बढ़ने वाली समतल तरंग",
            "bn": "২য় মাধ্যমে লম্বভাবে সঞ্চালিত সমতল তরঙ্গ"
          }
        },
        {
          "id": "opt-2",
          "text": {
            "en": "An evanescent wave that decays exponentially with zero time-average power penetration",
            "hi": "एक अवमंदित तरंग जो चरघातांकी रूप से घटती है और शून्य समय-औसत शक्ति ले जाती है",
            "bn": "একটি ক্ষীয়মাণ তরঙ্গ যা সূচকীয় হারে হ্রাস পায় এবং কোনো নিট ক্ষমতা পরিবহন করে না"
          }
        },
        {
          "id": "opt-3",
          "text": {
            "en": "Zero electric and magnetic field everywhere in Medium 2",
            "hi": "माध्यम 2 में प्रत्येक स्थान पर पूर्ण शून्य क्षेत्र",
            "bn": "২য় মাধ্যমে তড়িৎ ও চৌম্বক ক্ষেত্র সম্পূর্ণ অনুপস্থিত"
          }
        },
        {
          "id": "opt-4",
          "text": {
            "en": "A circular standing wave",
            "hi": "वृत्तीय अप्रगामी तरंग",
            "bn": "বৃত্তীয় স্থির তরঙ্গ"
          }
        }
      ],
      "correctOptionId": "opt-2",
      "explanation": {
        "en": "During TIR, fields in Medium 2 are evanescent: they decay exponentially perpendicular to the boundary, transporting zero net power across the interface.",
        "hi": "TIR में माध्यम 2 में अवमंदित तरंग होती है जो सीमा के लंबवत चरघातांकी रूप से घटती है और शून्य नेट शक्ति पार ले जाती है।",
        "bn": "TIR এর সময় ২য় মাধ্যমে ক্ষীয়মাণ তরঙ্গ তৈরি হয় যা লম্ব দূরত্বে সূচকীয় হারে কমে যায় এবং কোনো নিট ক্ষমতা সঞ্চালন করে না।"
      }
    },
    {
      "id": "mcq-ch11-l10-05",
      "question": {
        "en": "What is the critical angle θ_c for a glass (n1 = 1.50) to air (n2 = 1.00) interface?",
        "hi": "कांच (n1 = 1.50) से हवा (n2 = 1.00) अंतरापृष्ठ के लिए क्रांतिक कोण θ_c क्या है?",
        "bn": "কাচ (n1 = ১.৫০) থেকে বাতাস (n2 = ১.০০) সীমানার সংকট কোণ θ_c কত?"
      },
      "options": [
        {
          "id": "opt-1",
          "text": {
            "en": "30.0°",
            "hi": "30.0°",
            "bn": "৩০.০°"
          }
        },
        {
          "id": "opt-2",
          "text": {
            "en": "41.8°",
            "hi": "41.8°",
            "bn": "৪১.৮°"
          }
        },
        {
          "id": "opt-3",
          "text": {
            "en": "56.3°",
            "hi": "56.3°",
            "bn": "৫৬.৩°"
          }
        },
        {
          "id": "opt-4",
          "text": {
            "en": "60.0°",
            "hi": "60.0°",
            "bn": "৬০.০°"
          }
        }
      ],
      "correctOptionId": "opt-2",
      "explanation": {
        "en": "sin(θ_c) = n2 / n1 = 1.00 / 1.50 = 0.6667. θ_c = arcsin(0.6667) = 41.81°.",
        "hi": "sin(θ_c) = 1.0 / 1.5 = 0.6667 ⟹ θ_c = arcsin(0.6667) = 41.8°।",
        "bn": "sin(θ_c) = ১.০ / ১.৫ = ০.৬৬৬৭ ⟹ θ_c = arcsin(০.৬৬৬৭) = ৪১.৮°।"
      }
    },
    {
      "id": "mcq-ch11-l10-06",
      "question": {
        "en": "What is the Brewster angle for light in air (n1 = 1.00) striking diamond (n2 = 2.42)?",
        "hi": "हवा (n1 = 1.00) से हीरे (n2 = 2.42) पर आपतित प्रकाश के लिए ब्रूस्टर कोण क्या है?",
        "bn": "বাতাস (n1 = ১.০০) থেকে হীরকে (n2 = ২.৪২) আপতিত আলোর ব্রূস্টার কোণ কত?"
      },
      "options": [
        {
          "id": "opt-1",
          "text": {
            "en": "24.4°",
            "hi": "24.4°",
            "bn": "২৪.৪°"
          }
        },
        {
          "id": "opt-2",
          "text": {
            "en": "45.0°",
            "hi": "45.0°",
            "bn": "৪৫.০°"
          }
        },
        {
          "id": "opt-3",
          "text": {
            "en": "67.5°",
            "hi": "67.5°",
            "bn": "৬৭.৫°"
          }
        },
        {
          "id": "opt-4",
          "text": {
            "en": "75.2°",
            "hi": "75.2°",
            "bn": "৭৫.২°"
          }
        }
      ],
      "correctOptionId": "opt-3",
      "explanation": {
        "en": "tan(θ_B) = n2 / n1 = 2.42 / 1.00 = 2.42. θ_B = arctan(2.42) = 67.55°.",
        "hi": "tan(θ_B) = 2.42 / 1 = 2.42 ⟹ θ_B = arctan(2.42) = 67.5°।",
        "bn": "tan(θ_B) = ২.৪২ / ১ = ২.৪২ ⟹ θ_B = arctan(২.৪২) = ৬৭.৫°।"
      }
    },
    {
      "id": "mcq-ch11-l10-07",
      "question": {
        "en": "Why does no Brewster angle exist for perpendicular (TE) polarization on non-magnetic dielectrics?",
        "hi": "अचुंबकीय परावैद्युतों पर लंबवत (TE) ध्रुवीकरण के लिए ब्रूस्टर कोण क्यों नहीं होता?",
        "bn": "অচৌম্বক ডাইইলেকট্রিকে লম্ব (TE) সমবর্তনের জন্য ব্রূস্টার কোণ কেন থাকে না?"
      },
      "options": [
        {
          "id": "opt-1",
          "text": {
            "en": "Because magnetic permeability is identical across both media (μ1 = μ2 = μ0)",
            "hi": "क्योंकि दोनों माध्यमों की चुंबकशीलता समान होती है (μ1 = μ2 = μ0)",
            "bn": "কারণ উভয় মাধ্যমের চৌম্বক প্রবেশ্যতা সমান (μ1 = μ2 = μ0)"
          }
        },
        {
          "id": "opt-2",
          "text": {
            "en": "Because perpendicular waves travel at the speed of sound",
            "hi": "क्योंकि लंबवत तरंगें ध्वनि की गति से चलती हैं",
            "bn": "কারণ লম্ব তরঙ্গ শব্দের বেগে চলে"
          }
        },
        {
          "id": "opt-3",
          "text": {
            "en": "Because reflection is always 100% for TE waves",
            "hi": "क्योंकि TE तरंगों का परावर्तन सदैव 100% होता है",
            "bn": "কারণ TE তরঙ্গের প্রতিফলন সর্বদা ১০০% হয়"
          }
        },
        {
          "id": "opt-4",
          "text": {
            "en": "Because Snell's law does not apply to TE waves",
            "hi": "क्योंकि स्नेल का नियम TE पर लागू नहीं होता",
            "bn": "কারণ স্নেলের সূত্র TE তরঙ্গে খাটে না"
          }
        }
      ],
      "correctOptionId": "opt-1",
      "explanation": {
        "en": "For TE polarization, zero reflection requires μ2 cos θ_i = μ1 cos θ_t. For non-magnetic media (μ1 = μ2), this would require cos θ_i = cos θ_t (θ_i = θ_t), which is impossible when n1 ≠ n2.",
        "hi": "TE के लिए शून्य परावर्तन हेतु μ2 cos θ_i = μ1 cos θ_t चाहिए। चूंकि μ1 = μ2 है, अतः n1 ≠ n2 होने पर यह संभव नहीं है।",
        "bn": "TE তে শূন্য প্রতিফলনের জন্য μ2 cos θ_i = μ1 cos θ_t প্রয়োজন। μ1 = μ2 অচৌম্বক মাধ্যমে n1 ≠ n2 হলে এটি অসম্ভব।"
      }
    },
    {
      "id": "mcq-ch11-l10-08",
      "question": {
        "en": "In Perpendicular (TE) polarization, the electric field vector E is:",
        "hi": "लंबवत (TE) ध्रुवीकरण में विद्युत क्षेत्र सदिश E होता है:",
        "bn": "লম্ব (TE) সমবর্তনে তড়িৎ ক্ষেত্র ভেক্টর E থাকে:"
      },
      "options": [
        {
          "id": "opt-1",
          "text": {
            "en": "Parallel to the plane of incidence",
            "hi": "आपतन तल के समानांतर",
            "bn": "আপাতন তলের সমান্তরালে"
          }
        },
        {
          "id": "opt-2",
          "text": {
            "en": "Perpendicular to the plane of incidence",
            "hi": "आपतन तल के लंबवत",
            "bn": "আপাতন তলের সাথে লম্বভাবে"
          }
        },
        {
          "id": "opt-3",
          "text": {
            "en": "Parallel to the propagation direction k",
            "hi": "संचरण दिशा k के समानांतर",
            "bn": "গতির অভিমুখ k এর সমান্তরালে"
          }
        },
        {
          "id": "opt-4",
          "text": {
            "en": "Rotating in a circle",
            "hi": "एक वृत्त में घूर्णन करता हुआ",
            "bn": "বৃত্তাকার পথে ঘূর্ণায়মান"
          }
        }
      ],
      "correctOptionId": "opt-2",
      "explanation": {
        "en": "By definition, Perpendicular (TE / s-pol) means the electric field is strictly orthogonal (perpendicular) to the plane of incidence (lying parallel to the interface).",
        "hi": "परिभाषा के अनुसार TE ध्रुवीकरण में विद्युत क्षेत्र आपतन तल के लंबवत तथा अंतरापृष्ठ के समानांतर होता है।",
        "bn": "সংজ্ঞানুসারে TE সমবর্তনে তড়িৎ ক্ষেত্র সর্বদা আপাতন তলের সাথে লম্বভাবে অবস্থান করে।"
      }
    }
  ],
  "practiceQuestions": [
    {
      "id": "pq-ch11-l10-01",
      "question": {
        "en": "A ray of light traveling in water (n1 = 1.333) strikes a glass plate (n2 = 1.500) submerged in the water at an angle of incidence of 40°. Calculate: (a) the angle of refraction θ_t in the glass, (b) the Brewster angle for this interface, and (c) state whether Total Internal Reflection is possible at this boundary.",
        "hi": "पानी (n1 = 1.333) में गतिमान प्रकाश की किरण पानी में डूबी कांच की प्लेट (n2 = 1.500) पर 40° के आपतन कोण पर टकराती है। ज्ञात कीजिए: (a) अपवर्तन कोण θ_t, (b) ब्रूस्टर कोण, तथा (c) क्या इस सीमा पर TIR संभव है?",
        "bn": "পানিতে (n1 = ১.৩৩৩) চলমান আলোক রশ্মি পানিতে নিমজ্জিত কাচ পাতে (n2 = ১.৫০০) ৪০° আপাতন কোণে আঘাত করে। নির্ণয় করুন: (a) কাচে প্রতিসরণ কোণ θ_t, (b) ব্রূস্টার কোণ, এবং (c) এই সীমানায় TIR ঘটা সম্ভব কি না।"
      },
      "hint": {
        "en": "Use Snell's law n1 sin θ_i = n2 sin θ_t. tan θ_B = n2 / n1. Check if n1 > n2 for TIR.",
        "hi": "1.333 sin(40°) = 1.500 sin(θ_t)। tan(θ_B) = 1.500 / 1.333।",
        "bn": "১.৩৩৩ sin(৪০°) = ১.৫০০ sin(θ_t)। tan(θ_B) = ১.৫০০ / ১.৩৩৩।"
      },
      "answerKey": {
        "en": "(a) By Snell's law: sin(θ_t) = (n1 / n2) sin(θ_i) = (1.333 / 1.500) sin(40°) = (0.8887) × (0.6428) = 0.5712. θ_t = arcsin(0.5712) = 34.83°. (b) tan(θ_B) = n2 / n1 = 1.500 / 1.333 = 1.1253 ⟹ θ_B = arctan(1.1253) = 48.37°. (c) No, TIR is physically impossible because the light is traveling from a rarer medium into a denser medium (n1 < n2).",
        "hi": "(a) θ_t = 34.83°; (b) ब्रूस्टर कोण θ_B = 48.37°; (c) नहीं, क्योंकि n1 < n2 है अतः TIR असंभव है।",
        "bn": "(a) θ_t = ৩৪.৮৩°; (b) ব্রূস্টার কোণ θ_B = ৪৮.৩৭°; (c) না, কারণ n1 < n2 হওয়ায় TIR সম্ভব নয়।"
      }
    },
    {
      "id": "pq-ch11-l10-02",
      "question": {
        "en": "A diver underwater shines a flashlight upward toward the smooth water surface (n1 = 1.333) into air (n2 = 1.000). Calculate: (a) the Critical Angle θ_c at which no light escapes into the air, and (b) the angle of refraction in air if the flashlight is aimed at 35° to the normal.",
        "hi": "पानी (n1 = 1.333) के भीतर एक गोताखोर हवा (n2 = 1.000) की ओर टॉर्च चमकाता है। ज्ञात कीजिए: (a) क्रांतिक कोण θ_c, तथा (b) यदि टॉर्च को अभिलंब से 35° पर रखा जाए तो हवा में अपवर्तन कोण।",
        "bn": "পানির নিচে (n1 = ১.৩৩৩) থাকা একজন ডুবুরি বাতাস (n2 = ১.০০০) অভিমুখে টর্চ জ্বালায়। নির্ণয় করুন: (a) সংকট কোণ θ_c, এবং (b) অভিলম্বের সাথে ৩৫° কোণে আলো ফেললে বাতাসে প্রতিসরণ কোণ কত হবে।"
      },
      "hint": {
        "en": "sin(θ_c) = n2 / n1 = 1.0 / 1.333. Apply Snell's law for θ_i = 35°.",
        "hi": "sin(θ_c) = 1 / 1.333 = 0.75। sin(θ_t) = 1.333 sin(35°)।",
        "bn": "sin(θ_c) = ১ / ১.৩৩৩ = ০.৭৫। sin(θ_t) = ১.৩৩৩ sin(৩৫°)।"
      },
      "answerKey": {
        "en": "(a) sin(θ_c) = n2 / n1 = 1.000 / 1.3333 = 0.7500. θ_c = arcsin(0.7500) = 48.59°. (b) For θ_i = 35° (which is < θ_c): sin(θ_t) = (n1 / n2) sin(θ_i) = (1.3333 / 1.000) sin(35°) = 1.3333 × 0.5736 = 0.7648. θ_t = arcsin(0.7648) = 49.89°.",
        "hi": "(a) क्रांतिक कोण θ_c = 48.59°; (b) हवा में अपवर्तन कोण θ_t = 49.89°।",
        "bn": "(a) সংকট কোণ θ_c = ৪৮.৫৯°; (b) বাতাসে প্রতিসরণ কোণ θ_t = ৪৯.৮৯°।"
      }
    },
    {
      "id": "pq-ch11-l10-03",
      "question": {
        "en": "Prove mathematically that at Brewster's angle, the sum of the incidence angle and transmission angle satisfies θ_B + θ_t = 90° for non-magnetic dielectrics.",
        "hi": "गणितीय रूप से सिद्ध कीजिए कि अचुंबकीय परावैद्युतों के लिए ब्रूस्टर कोण पर θ_B + θ_t = 90° होता है।",
        "bn": "গাণিতিকভাবে প্রমাণ করুন যে অচৌম্বক ডাইইলেকট্রিকে ব্রূস্টার কোণে θ_B + θ_t = ৯০° হয়।"
      },
      "hint": {
        "en": "Combine tan(θ_B) = sin(θ_B)/cos(θ_B) with Snell's law n1 sin(θ_B) = n2 sin(θ_t).",
        "hi": "tan(θ_B) = n2 / n1 तथा Snell के नियम n1 sin θ_B = n2 sin θ_t की तुलना करें।",
        "bn": "tan(θ_B) = n2 / n1 এবং স্নেলের সূত্র n1 sin θ_B = n2 sin θ_t তুলনা করুন।"
      },
      "answerKey": {
        "en": "By Brewster's law: n2 / n1 = tan(θ_B) = sin(θ_B) / cos(θ_B).\nBy Snell's law: n2 / n1 = sin(θ_B) / sin(θ_t).\nEquating both expressions:\nsin(θ_B) / cos(θ_B) = sin(θ_B) / sin(θ_t)  ⟹  sin(θ_t) = cos(θ_B).\nSince cos(θ_B) = sin(90° - θ_B), we have:\nsin(θ_t) = sin(90° - θ_B)  ⟹  θ_t = 90° - θ_B  ⟹  θ_B + θ_t = 90°.\nThis proves the reflected and transmitted rays are precisely perpendicular.",
        "hi": "tan(θ_B) = sin(θ_B)/cos(θ_B) = n2/n1। स्नेल के नियम से n2/n1 = sin(θ_B)/sin(θ_t)। दोनों की तुलना से sin(θ_t) = cos(θ_B) = sin(90° - θ_B) प्राप्त होता है, अतः θ_B + θ_t = 90° सिद्ध होता है।",
        "bn": "tan(θ_B) = sin(θ_B)/cos(θ_B) = n2/n1। স্নেলের সূত্র থেকে n2/n1 = sin(θ_B)/sin(θ_t)। তুলনা করলে sin(θ_t) = cos(θ_B) = sin(৯০° - θ_B), সুতরাং θ_B + θ_t = ৯০° প্রমাণিত।"
      }
    },
    {
      "id": "pq-ch11-l10-04",
      "question": {
        "en": "Describe how optical step-index fibers use Total Internal Reflection to guide light, defining core, cladding, acceptance angle, and numerical aperture.",
        "hi": "वर्णन कीजिए कि स्टेप-इंडेक्स ऑप्टिकल फाइबर प्रकाश को निर्देशित करने के लिए पूर्ण आंतरिक परावर्तन का उपयोग कैसे करते हैं; कोर, क्लैडिंग, स्वीकार्य कोण एवं संख्यात्मक द्वारक को परिभाषित कीजिए।",
        "bn": "স্টেপ-ইনডেক্স ফাইবার অপটিক কীভাবে আলো পরিবহনে পূর্ণ অভ্যন্তরীণ প্রতিফলন ব্যবহার করে ব্যাখ্যা করুন; কোর, ক্ল্যাডিং, গ্রহণযোগ্য কোণ এবং নিউমেরিক্যাল অ্যাপারচার সংজ্ঞায়িত করুন।"
      },
      "hint": {
        "en": "Core has index n1, cladding has slightly lower index n2. NA = √(n1² - n2²).",
        "hi": "कोर का अपवर्तनांक n1 क्लैडिंग n2 से अधिक होता है। NA = √(n1² - n2²)।",
        "bn": "কোরের প্রতিসরাঙ্ক n1 ক্ল্যাডিং n2 এর চেয়ে বেশি থাকে। NA = √(n1² - n2²)।"
      },
      "answerKey": {
        "en": "A step-index fiber consists of a cylindrical glass core of refractive index n1 surrounded by an outer glass cladding of lower refractive index n2 (n1 > n2). Light launched into the fiber end face within the Acceptance Cone (half-angle θ_acc = arcsin(NA)) strikes the core-cladding boundary at angles exceeding the Critical Angle θ_c. It undergoes continuous Total Internal Reflection (TIR) with zero power escaping into the cladding, propagating through zig-zag reflections. The Numerical Aperture NA = √(n1² - n2²) measures the light-gathering power of the fiber.",
        "hi": "स्टेप-इंडेक्स फाइबर में n1 अपवर्तनांक का कोर होता है जिसके चारों ओर कम अपवर्तनांक n2 की क्लैडिंग होती है। स्वीकार्य कोण θ_acc के भीतर प्रवेश करने वाला प्रकाश कोर-क्लैडिंग सीमा पर क्रांतिक कोण से अधिक कोण पर टकराता है और TIR द्वारा बिना हानि के आगे बढ़ता है। संख्यात्मक द्वारक NA = √(n1² - n2²) प्रकाश एकत्र करने की क्षमता को मापता है।",
        "bn": "স্টেপ-ইনডেক্স ফাইবারে n1 প্রতিসরাঙ্কের কোরের বাইরে কম প্রতিসরাঙ্ক n2 এর ক্ল্যাডিং থাকে। গ্রহণযোগ্য কোণ θ_acc এর মধ্যে প্রবেশকারী আলো কোর-ক্ল্যাডিং সীমানায় সংকট কোণের চেয়ে বেশি কোণে আপতিত হয়ে ক্ষতিহীনভাবে পূর্ণ অভ্যন্তরীণ প্রতিফলনের (TIR) মাধ্যমে সঞ্চালিত হয়। সংখ্যাत्मक অ্যাপারচার NA = √(n1² - n2²) ফাইবারের আলো সংগ্রহের ক্ষমতা নির্দেশ করে।"
      }
    },
    {
      "id": "pq-ch11-l10-05",
      "question": {
        "en": "Explain why Polaroid sunglasses are effective at eliminating glare from wet asphalt and water, and identify why they fail to eliminate glare from metallic surfaces.",
        "hi": "समझाइए कि पोलराइड धूप का चश्मा गीली सड़क और पानी की चमक को समाप्त करने में प्रभावी क्यों है, और यह धातु की सतहों से चमक को समाप्त करने में विफल क्यों रहता है।",
        "bn": "পোলারয়েড সানগ্লাস ভেজা রাস্তা ও পানির ঝলকানি দূর করতে কেন কার্যকর এবং ধাতব পৃষ্ঠের ঝলকানি দূর করতে এটি কেন ব্যর্থ হয় ব্যাখ্যা করুন।"
      },
      "hint": {
        "en": "Water and asphalt are dielectrics with a Brewster angle producing horizontally polarized glare. Metals have complex refractive indices without a Brewster zero.",
        "hi": "पानी और डामर परावैद्युत हैं जिनका ब्रूस्टर कोण होता है। धातुओं में ब्रूस्टर कोण नहीं होता क्योंकि उनका परावर्तन शून्य नहीं होता।",
        "bn": "পানি ও পিচ রাস্তা ডাইইলেকট্রিক হওয়ায় ব্রূস্টার কোণে অনুভূমিক সমবর্তিত আলো প্রতিফলিত করে। ধাতুর ক্ষেত্রে ব্রূস্টার প্রতিফলন শূন্য হয় না।"
      },
      "answerKey": {
        "en": "Sunlight reflecting off horizontal dielectric surfaces like water, snow, and wet roads at near-Brewster angles (~53° for water) has its parallel (TM) component largely transmitted into the water, leaving the reflected glare almost 100% horizontally polarized (TE). Polaroid sunglasses possess vertical transmission axes, completely absorbing this horizontal glare. In contrast, metals have massive electrical conductivity (complex refractive index) and lack a true Brewster angle: both TM and TE waves reflect strongly with elliptical phase shifts, so metallic glare cannot be extinguished by a linear polarizing filter.",
        "hi": "समतल परावैद्युत सतहों (पानी, सड़क) से ब्रूस्टर कोण के निकट परावर्तित चमक 100% क्षैतिज रूप से ध्रुवीकृत होती है। पोलराइड चश्मे के ऊर्ध्वाधर लेंस इसे पूरी तरह सोख लेते हैं। इसके विपरीत, धातुएं चालक होती हैं जिनका सम्मिश्र अपवर्तनांक होता है और कोई वास्तविक ब्रूस्टर कोण नहीं होता; अतः धातु से परावर्तित प्रकाश को साधारण पोलराइज्ड चश्मे से समाप्त नहीं किया जा सकता।",
        "bn": "পানি ও ভেজা পিচ রাস্তার মতো সমতল ডাইইলেকট্রিক থেকে ব্রূস্টার কোণে প্রতিফলিত আলো প্রায় ১০০% অনুভূমিক সমবর্তিত থাকে। পোলারয়েড চশমার উল্লম্ব ফিল্টার এই অনুভূমিক ঝলকানি পুরোপুরি আটকে দেয়। অন্যদিকে, ধাতুর উচ্চ পরিবাহিতা থাকায় কোনো ব্রূস্টার শূন্য থাকে না; ফলে ধাতব প্রতিফলন উপবৃত্তীয় সমবর্তিত হওয়ায় সাধারণ পোলারয়েড চশমা দিয়ে তা দূর করা যায় না।"
      }
    }
  ]
};
