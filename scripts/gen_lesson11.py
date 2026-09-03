# -*- coding: utf-8 -*-
from create_lessons_part2 import save_lesson

lesson11 = {
  "id": "lsn-ch11-skin-depth-conductors-shielding",
  "topicId": "ch11-skin-depth-conductors-shielding",
  "chapterId": "ch-em-waves",
  "order": 11,
  "title": {
    "en": "Skin Depth, Good Conductors, High-Frequency AC Resistance & Electromagnetic Shielding",
    "hi": "त्वचा गहराई (स्किन डेप्थ), अच्छे चालक, उच्च-आवृत्ति AC प्रतिरोध एवं विद्युत चुंबकीय परिरक्षण",
    "bn": "স্কিন ডেপথ, উত্তম পরিবাহী, উচ্চ-কম্পাঙ্ক AC রোধ এবং তড়িৎচৌম্বকীয় শিল্ডিং"
  },
  "description": {
    "en": "In-depth treatment of electromagnetic wave propagation in lossy conductive media (σ ≫ ωε), derivation of attenuation constant α and phase constant β, skin depth δ = √(2 / (ω μ σ)), high-frequency surface impedance Z_s = R_s + j X_s, AC current crowding, RF resistance of copper wires, Faraday cages, and shielding effectiveness (SE).",
    "hi": "चालक माध्यमों (σ ≫ ωε) में विद्युत चुंबकीय तरंग संचरण, अवमंदन स्थिरांक α एवं कला स्थिरांक β का निगमन, त्वचा गहराई (स्किन डेप्थ) δ = √(2 / (ω μ σ)), उच्च-आवृत्ति सतह प्रतिबाधा Z_s = R_s + j X_s, AC धारा संकुलन, तांबे के तारों का RF प्रतिरोध, फैराडे पिंजरा एवं परिरक्षण प्रभावशीलता (SE)।",
    "bn": "পরিবাহী মাধ্যমে (σ ≫ ωε) তড়িৎচৌম্বক তরঙ্গের বিস্তার, ক্ষয় ধ্রুবক α ও দশা ধ্রুবক β এর প্রতিপাদন, স্কিন ডেপথ δ = √(২ / (ω μ σ)), উচ্চ-কম্পাঙ্ক পৃষ্ঠীয় প্রতিবন্ধকতা Z_s = R_s + j X_s, AC তড়িৎ ভিড়, তামার তারের RF রোধ, ফ্যারাডে খাঁচা এবং শিল্ডিং কার্যকারিতা (SE)।"
  },
  "estimatedMinutes": 45,
  "easyExplanation": {
    "en": "If you send a direct current (DC) through a copper wire, the electrons flow smoothly through the entire cross-section of the wire. But when alternating current (AC) at high frequencies (like radio, Wi-Fi, or microwave signals) flows, the changing magnetic fields push the moving electrons outward toward the outer perimeter! At very high frequencies, nearly 100% of the electric current is trapped in a paper-thin outer shell called the 'skin depth' (δ). The center of the wire carries virtually zero current, drastically shrinking the effective wire area and causing the wire's resistance to soar. For example, at 1 GHz in copper, the skin depth is only 2 microns—twenty times thinner than a human hair! This explains why high-frequency coaxial cables often use hollow copper tubes or silver-plated wires. Furthermore, because electromagnetic waves decay so rapidly inside conductors, metal enclosures (Faraday cages) completely block radio signals, keeping airplane passengers safe from lightning strikes and shielding sensitive medical MRI scanners.",
    "hi": "जब हम किसी तांबे के तार में दिष्ट धारा (DC) प्रवाहित करते हैं, तो धारा तार के पूरे अनुप्रस्थ काट क्षेत्रफल से समान रूप से बहती है। परंतु जब रेडियो, वाई-फाई या माइक्रोवेव जैसी उच्च-आवृत्ति वाली प्रत्यावर्ती धारा (AC) बहती है, तो बदलते चुंबकीय क्षेत्र इलेक्ट्रॉनों को तार की बाहरी सतह की ओर धकेल देते हैं! उच्च आवृत्तियों पर लगभग पूरी धारा तार की केवल एक अत्यंत पतली बाहरी परत से ही बहती है, जिसे 'त्वचा गहराई' या स्किन डेप्थ (δ) कहते हैं। तार का आंतरिक भाग लगभग निष्क्रिय रहता है, जिससे तार का प्रभावी प्रतिरोध कई गुना बढ़ जाता है। उदाहरण के लिए, 1 GHz पर तांबे में स्किन डेप्थ केवल 2 माइक्रोन होती है। इसी कारण उच्च-आवृत्ति केबलों में खोखले पाइप या चांदी की परत चढ़ाए गए तारों का उपयोग किया जाता है। साथ ही, धातु की दीवारें (फैराडे पिंजरा) विद्युत चुंबकीय तरंगों को तेजी से सोखकर अंदर जाने से रोक देती हैं।",
    "bn": "যখন কোনো তামার তারের মধ্য দিয়ে ডিসি (DC) কারেন্ট প্রবাহিত হয়, তখন তা তারের পুরো ক্ষেত্রফল জুড়ে সমানভাবে প্রবাহিত হয়। কিন্তু যখন উচ্চ-কম্পাঙ্কের এসি (AC) কারেন্ট (যেমন রেডিও, ওয়াই-ফাই বা মাইক্রোওয়েভ সিগন্যাল) প্রবাহিত হয়, তখন পরিবর্তনশীল চৌম্বক ক্ষেত্র ইলেকট্রনগুলোকে তারের বাইরের পৃষ্ঠের দিকে ঠেলে দেয়! অত্যন্ত উচ্চ কম্পাঙ্কে প্রায় সম্পূর্ণ কারেন্ট তারের বাইরের এক অতি পাতলা স্তরের মধ্য দিয়ে প্রবাহিত হয়, যাকে 'স্কিন ডেপথ' (δ) বলে। তারের কেন্দ্র দিয়ে প্রায় কোনো কারেন্টই প্রবাহিত হয় না, ফলে তারের রোধ নাটকীয়ভাবে বৃদ্ধি পায়। ১ GHz কম্পাঙ্কে তামার স্কিন ডেপথ মাত্র ২ মাইক্রন (একটি মানুষের চুলের চেয়েও পাতলা)। এই কারণে ধাতব প্রাচীর (ফ্যারাডে খাঁচা) রেডিও সংকেত পুরোপুরি আটকে দেয়, যা বিমানকে বজ্রপাত থেকে এবং মেডিকেল এমআরআই (MRI) স্ক্যানারকে বাহ্যিক শব্দ থেকে সুরক্ষিত রাখে।"
  },
  "detailedExplanation": {
    "en": "In a lossy conducting medium characterized by conductivity σ, permittivity ε, and permeability μ, the complex propagation constant γ is given by:\nγ = α + j β = √[ j ω μ (σ + j ω ε) ].\n\n1. Good Conductor Approximation:\nA material is classified as a 'good conductor' when its conduction current density greatly exceeds its displacement current density:\n(σ / ω ε) ≫ 1.\nFor copper (σ = 5.8 × 10⁷ S/m, ε ≈ ε0), this inequality holds up to optical frequencies (~10¹⁶ Hz).\n\nUnder this condition, σ + j ω ε ≈ σ, simplifying the propagation constant:\nγ = √[ j ω μ σ ] = √[ ω μ σ e^(j π/2) ] = √(ω μ σ) e^(j π/4) = √(ω μ σ) [ 1/√2 + j /√2 ]\nγ = √[ π f μ σ ] + j √[ π f μ σ ].\n\nTherefore, the attenuation constant α and phase constant β are identically equal:\nα = β = √(π f μ σ) = √[ ω μ σ / 2 ].\n\n2. Skin Depth (Depth of Penetration δ):\nThe electric field propagating in the +z direction into the conductor attenuates as:\nE(z) = E0 e^(-α z) e^(-j β z).\nThe Skin Depth δ is formally defined as the penetration distance over which the wave amplitude drops by a factor of 1/e (approximately 36.8% of its surface value):\nα δ = 1  ⟹  δ = 1 / α = √( 2 / (ω μ σ) ) = 1 / √( π f μ σ ).\n\nAt a depth of:\n• 1δ: field drops to 36.8% (power drops to e^(-2) = 13.5%)\n• 3δ: field drops to e^(-3) ≈ 4.98% (power drops to 0.25%)\n• 5δ: field drops to e^(-5) ≈ 0.67% (99.99% attenuation; essentially total extinction).\n\n3. High-Frequency Surface Impedance (Z_s):\nThe intrinsic impedance of a good conductor is:\nη = √[ j ω μ / (σ + j ω ε) ] ≈ √[ j ω μ / σ ] = √[ ω μ / σ ] e^(j π/4) = √[ ω μ / (2 σ) ] (1 + j).\nDefining the Surface Resistance R_s:\nR_s = 1 / (σ δ) = √[ π f μ / σ ] Ω/sq.\nThen Z_s = R_s + j X_s = R_s + j R_s = R_s (1 + j).\nThe surface reactance X_s equals the surface resistance R_s, representing the internal inductance of the conductor.\n\n4. AC Resistance of Cylindrical Wires:\nAt direct current (DC), current is uniformly distributed across cross-sectional area A = π a² (radius a):\nR_dc = l / (σ π a²).\nAt high frequencies where wire radius a ≫ δ, current is confined to a thin annular surface ring of thickness δ and perimeter 2π a:\nA_eff ≈ 2π a δ.\nR_ac = l / (σ A_eff) = l / (2π a σ δ) = (R_s · l) / (2π a).\nComparing R_ac to R_dc:\nR_ac / R_dc = [ l / (2π a σ δ) ] / [ l / (σ π a²) ] = a / (2 δ).\nSince δ ∝ 1/√f, the AC resistance scales as:\nR_ac ∝ √f.\nAt 100 MHz, a copper wire can have an AC resistance dozens of times higher than its DC rating!\n\n5. Electromagnetic Shielding Effectiveness (SE):\nA conductive sheet of thickness t attenuates electromagnetic interference (EMI) via three mechanisms:\nSE_total = R + A + B (in decibels, dB)\n• Reflection Loss (R): Power reflected due to the extreme impedance mismatch between air (377 Ω) and metal (Z_s ~ milliohms).\n• Absorption Loss (A): Exponential dissipation of fields passing through thickness t: A = 20 log₁₀(e^(t/δ)) = 8.686 (t / δ) dB.\n• Multiple Reflection Correction (B): Negligible when t > δ.\nTo achieve 87 dB of shielding absorption, a metal wall must be at least 10 skin depths thick (t = 10δ).",
    "hi": "अच्छे चालक (σ ≫ ωε) के लिए अवमंदन स्थिरांक और कला स्थिरांक बराबर होते हैं: α = β = √(π f μ σ)।\n\nत्वचा गहराई (स्किन डेप्थ δ): वह गहराई जिस पर तरंग का आयाम घटकर 1/e (36.8%) रह जाता है:\nδ = √(2 / (ω μ σ)) = 1 / √(π f μ σ)।\n\nसतह प्रतिरोध: R_s = 1 / (σ δ) = √(π f μ / σ)।\nतार का AC प्रतिरोध: R_ac = R_s · l / (2π a)। चूंकि δ ∝ 1/√f है, अतः R_ac ∝ √f होता है।\n\nविद्युत चुंबकीय परिरक्षण (Faraday Cage): धातु की चादरें परावर्तन एवं त्वचा गहराई में अवशोषण (8.686 t/δ dB) द्वारा रेडियो संकेतों को पूरी तरह रोक देती हैं।",
    "bn": "উত্তম পরিবাহীতে (σ ≫ ωε) ক্ষয় ধ্রুবক এবং দশা ধ্রুবক সমান হয়: α = β = √(π f μ σ)।\n\nস্কিন ডেপথ (δ): যে দূরত্বে তরঙ্গের বিস্তার হ্রাস পেয়ে ১/e (৩৬.৮%) তে পৌঁছায়:\nδ = √(২ / (ω μ σ)) = ১ / √(π f μ σ)।\n\nপৃষ্ঠীয় রোধ: R_s = ১ / (σ δ) = √(π f μ / σ)।\nতারের AC রোধ: R_ac = R_s · l / (২π a)। কম্পাঙ্ক বাড়লে δ কমে এবং R_ac ∝ √f হারে বৃদ্ধি পায়।\n\nতড়িৎচৌম্বকীয় শিল্ডিং: ফ্যারাডে খাঁচার মতো ধাতব আবরণ প্রতিফলন এবং শোষণের (৮.৬৮৬ t/δ dB) মাধ্যমে সংকেত সম্পূর্ণভাবে আটকে দেয়।"
  },
  "formulas": [
    {
      "id": "f-skin-depth",
      "symbol": "δ",
      "expression": "δ = √(2 / (ω μ σ)) = 1 / √(π f μ σ)",
      "title": {
        "en": "Skin Depth (Depth of Penetration)",
        "hi": "त्वचा गहराई (स्किन डेप्थ)",
        "bn": "স্কিন ডেপথ"
      },
      "description": {
        "en": "Distance inside a good conductor over which electromagnetic field amplitudes decay to 1/e (~36.8%) of their surface value.",
        "hi": "अच्छे चालक के भीतर वह दूरी जहाँ विद्युत चुंबकीय क्षेत्र का आयाम अपनी मूल सतह मान का 1/e (लगभग 36.8%) रह जाता है।",
        "bn": "উত্তম পরিবাহীর অভ্যন্তরে যে দূরত্বে তড়িৎচৌম্বক ক্ষেত্রের বিস্তার তার পৃষ্ঠীয় মানের ১/e (প্রায় ৩৬.৮%) অংশে নেমে আসে।"
      },
      "variables": [
        { "symbol": "δ", "name": { "en": "Skin depth (m)", "hi": "स्किन डेप्th (m)", "bn": "স্কিন ডেপথ (m)" } },
        { "symbol": "f", "name": { "en": "Frequency (Hz)", "hi": "आवृत्ति (Hz)", "bn": "কম্পাঙ্ক (Hz)" } },
        { "symbol": "σ", "name": { "en": "Conductivity (S/m)", "hi": "चालकता (S/m)", "bn": "পরিবাহিতা (S/m)" } },
        { "symbol": "μ", "name": { "en": "Magnetic permeability (H/m, μ = μr μ0)", "hi": "चुंबकशीलता (H/m)", "bn": "চৌম্বক প্রবেশ্যতা (H/m)" } }
      ]
    },
    {
      "id": "f-surface-resistance",
      "symbol": "R_s",
      "expression": "R_s = 1 / (σ δ) = √(π f μ / σ)   [Ω/square]",
      "title": {
        "en": "Surface Resistance of a Good Conductor",
        "hi": "अच्छे चालक का सतह प्रतिरोध",
        "bn": "উত্তম পরিবাহীর পৃষ্ঠীয় রোধ"
      },
      "description": {
        "en": "Real part of the high-frequency surface impedance Z_s = R_s + j X_s.",
        "hi": "उच्च आवृत्ति सतह प्रतिबाधा Z_s = R_s + j X_s का वास्तविक भाग।",
        "bn": "উচ্চ-কম্পাঙ্ক পৃষ্ঠীয় প্রতিবন্ধকতা Z_s = R_s + j X_s এর বাস্তব অংশ।"
      },
      "variables": [
        { "symbol": "R_s", "name": { "en": "Surface resistance (Ω/sq)", "hi": "सतह प्रतिरोध", "bn": "পৃষ্ঠীয় রোধ" } }
      ]
    },
    {
      "id": "f-ac-resistance-wire",
      "symbol": "R_ac",
      "expression": "R_ac = (R_s · l) / (2 π a) = (l / (2 π a σ δ)) = R_dc · (a / (2 δ))   (for a ≫ δ)",
      "title": {
        "en": "High-Frequency AC Resistance of Cylindrical Wire",
        "hi": "बेलनाकार तार का उच्च-आवृत्ति AC प्रतिरोध",
        "bn": "নলাকার তারের উচ্চ-কম্পাঙ্ক AC রোধ"
      },
      "description": {
        "en": "Effective resistance of a round wire of radius a and length l at radio frequencies where current crowds into skin depth δ.",
        "hi": "रेडियो आवृत्तियों पर त्रिज्या a और लंबाई l वाले गोल तार का प्रभावी प्रतिरोध।",
        "bn": "রেডিও কম্পাঙ্কে a ব্যাসার্ধ এবং l দৈর্ঘ্যের নলাকার তারের কার্যকর রোধ।"
      },
      "variables": [
        { "symbol": "R_ac", "name": { "en": "AC resistance (Ω)", "hi": "AC प्रतिरोध", "bn": "AC রোধ" } },
        { "symbol": "a", "name": { "en": "Wire radius (m)", "hi": "तार की त्रिज्या", "bn": "তারের ব্যাসার্ধ" } },
        { "symbol": "l", "name": { "en": "Wire length (m)", "hi": "तार की लंबाई", "bn": "তারের দৈর্ঘ্য" } }
      ]
    },
    {
      "id": "f-shielding-absorption",
      "symbol": "A_dB",
      "expression": "A_dB = 20 log₁₀(e^(t / δ)) = 8.686 · (t / δ)   [dB]",
      "title": {
        "en": "Shielding Absorption Loss",
        "hi": "परिरक्षण अवशोषण हानि",
        "bn": "শিল্ডিং শোষণ অপচয়"
      },
      "description": {
        "en": "Decibel attenuation due to exponential dissipation across conductive shield thickness t.",
        "hi": "चालक परिरक्षक की मोटाई t में चरघातांकी अवशोषण द्वारा प्राप्त डेसिबल क्षय।",
        "bn": "পরিবাহী শিল্ডের t পুরুত্ব জুড়ে সূচকীয় অপচয়ের কারণে প্রাপ্ত ডেসিবেল ক্ষয়।"
      },
      "variables": [
        { "symbol": "A_dB", "name": { "en": "Absorption loss in decibels (dB)", "hi": "अवशोषण हानि (dB)", "bn": "শোষণ অপচয় (dB)" } },
        { "symbol": "t", "name": { "en": "Shield thickness (m)", "hi": "परिरक्षक की मोटाई (m)", "bn": "শিল্ডের পুরুত্ব (m)" } }
      ]
    }
  ],
  "sections": [
    {
      "id": "sec-skin-effect-physics",
      "title": {
        "en": "1. Electromagnetic Physics of Skin Effect in Good Conductors",
        "hi": "1. अच्छे चालकों में त्वचा प्रभाव (स्किन इफ़ेक्ट) की भौतिकी",
        "bn": "১. উত্তম পরিবাহীতে স্কিন ইফেক্টের তড়িৎচৌंबকীয় পদার্থবিজ্ঞান"
      },
      "content": {
        "en": "When a time-varying magnetic field B(t) oscillates inside a conductor, Faraday's law ∇ × E = -∂B/∂t induces internal circulating eddy currents. According to Lenz's law, these induced currents oppose the primary current at the center of the conductor while reinforcing it along the conductor's outer surface.\n\nAs a consequence, the current density J_z(z) is not uniform; instead, it decays exponentially into the depth z of the conductor:\nJ_z(z) = J_0 e^(-z / δ) e^(-j z / δ).\n\nAt one skin depth (z = δ), the current density has diminished to 1/e ≈ 36.8% of its surface value. At 3δ, it is less than 5%, and at 5δ, less than 0.7%. For engineering calculations, all AC current can be modeled as flowing with uniform surface density J_0 through an equivalent thin skin layer of thickness δ.",
        "hi": "जब चालक में समय के साथ परिवर्ती चुंबकीय क्षेत्र उत्पन्न होता है, तो फैराडे के नियमानुसार भंवर धाराएं (eddy currents) प्रेरित होती हैं। लेन्ज़ के नियमानुसार ये धाराएं केंद्र में मुख्य धारा का विरोध करती हैं और बाहरी सतह पर उसे बढ़ाती हैं।\n\nपरिणामस्वरूप धारा घनत्व सतह से गहराई z में चरघातांकी रूप से घटता है: J_z(z) = J_0 e^(-z/δ)।\n1δ गहराई पर धारा घटकर 36.8% रह जाती है और 5δ पर 1% से भी कम बचती है।",
        "bn": "পরিবাহীতে পরিবর্তনশীল চৌম্বক ক্ষেত্র তৈরি হলে ফ্যারাডের সূত্রানুসারে ঘূর্ণি কারেন্ট (eddy currents) আবিষ্ট হয়। লেঞ্জের সূত্রানুসারে এটি কেন্দ্রের মূল কারেন্টকে বাধা দেয় কিন্তু বাইরের পৃষ্ঠে কারেন্ট বাড়িয়ে দেয়।\n\nফলে কারেন্ট ঘনত্ব পৃষ্ঠ থেকে গভীরে সূচকীয় হারে হ্রাস পায়: J_z(z) = J_0 e^(-z/δ)।\n১δ গভীরতায় কারেন্ট কমে ৩৬.৮% হয় এবং ৫δ তে ১% এর নিচে নেমে যায়।"
      },
      "schematicId": "circuit-ch11-skin-depth-conductors-shielding"
    },
    {
      "id": "sec-shielding-faraday",
      "title": {
        "en": "2. Faraday Cages & Electromagnetic Shielding Effectiveness",
        "hi": "2. फैराडे पिंजरा एवं विद्युत चुंबकीय परिरक्षण प्रभावशीलता",
        "bn": "২. ফ্যারাডে খাঁচা এবং তড়িৎচৌম্বকীয় শিল্ডিং কার্যকারিতা"
      },
      "content": {
        "en": "Electromagnetic Shielding Effectiveness (SE) measures how effectively a metallic barrier prevents electromagnetic radiation from penetrating an enclosed volume:\nSE(dB) = 20 log₁₀( E_incident / E_transmitted ).\n\nShielding relies on two distinct barriers:\n1. Reflection Loss (R): Because the intrinsic impedance of air (η0 = 377 Ω) is vastly greater than the surface impedance of metal (|Z_s| ≈ a few milliohms), over 99.9% of incident RF wave amplitude reflects immediately off the metallic outer surface.\n2. Absorption Loss (A): The small fraction of the wave that penetrates the metal undergoes severe exponential attenuation according to e^(-t / δ). Each skin depth of metal thickness provides an additional 8.686 dB of attenuation.\n\nA copper enclosure just 1 mm thick provides over 100 dB of shielding at 1 MHz, reducing incoming electromagnetic noise power by a factor of 10¹⁰!",
        "hi": "विद्युत चुंबकीय परिरक्षण (SE) यह मापता है कि कोई धातु का आवरण विकिरण को अंदर जाने से कितनी प्रभावी ढंग से रोकता है।\n1. परावर्तन हानि: हवा (377 Ω) और धातु (मिली-ओम) की प्रतिबाधा में भारी अंतर के कारण 99.9% से अधिक तरंग तुरंत सतह से परावर्तित हो जाती है।\n2. अवशोषण हानि: जो थोड़ा भाग अंदर जाता है वह e^(-t/δ) की दर से तेजी से क्षय हो जाता है। प्रत्येक 1δ मोटाई 8.686 dB का अवशोषण प्रदान करती है।",
        "bn": "তড়িৎচৌম্বকীয় শিল্ডিং কার্যকারিতা (SE) পরিমাপ করে একটি ধাতব আবরণ কতটা দক্ষতার সাথে বিকিরণ প্রতিহত করে।\n১. প্রতিফলন ক্ষয়: বাতাস (৩৭৭ Ω) ও ধাতুর (মিলি-ওহম) প্রতিবন্ধকতার বিশাল পার্থক্যের কারণে ৯৯.৯% এর বেশি তরঙ্গ সঙ্গে সঙ্গে প্রতিফলিত হয়।\n২. শোষণ ক্ষয়: ধাতুর অভ্যন্তরে প্রবেশকারী সামান্য তরঙ্গ e^(-t/δ) হারে দ্রুত নিঃশেষ হয়ে যায়। প্রতি ১δ পুরুত্ব ৮.৬৮৬ dB শোষণ প্রদান করে।"
      }
    }
  ],
  "diagrams": [
    {
      "id": "diag-ch11-skin-depth-conductors-shielding",
      "title": {
        "en": "Skin Effect Current Crowding, Exponential Decay Profile & Faraday Shield Attenuation",
        "hi": "त्वचा प्रभाव धारा संकुलन, चरघातांकी क्षय प्रोफ़ाइल एवं फैराडे परिरक्षक क्षय",
        "bn": "স্কিন ইফেক্ট কারেন্ট ঘনত্ব, সূচকীয় ক্ষয় প্রোফাইল এবং ফ্যারাডে শিল্ডের সিগন্যাল ক্ষয়"
      },
      "caption": {
        "en": "Diagram illustrating cross-sectional AC current crowding in a round wire, exponential decay curve J(z) = J0 e^(-z/δ), and Faraday cage shielding reflection plus absorption attenuation.",
        "hi": "गोल तार में AC धारा का बाहरी सतह पर संकेंद्रण, चरघातांकी क्षय वक्र J(z) = J0 e^(-z/δ), तथा फैराडे पिंजरे में परावर्तन एवं अवशोषण का विस्तृत आरेख।",
        "bn": "নলাকার তারের পৃষ্ঠে AC কারেন্ট ভিড়, সূচকীয় ক্ষয় রেখাচিত্র J(z) = J0 e^(-z/δ) এবং ফ্যারাডে খাঁচায় প্রতিফলন ও শোষণের নকশা।"
      },
      "svgType": "circuit-ch11-skin-depth-conductors-shielding"
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-ch11-l11-01",
      "problem": {
        "en": "Calculate the skin depth δ and surface resistance R_s for standard annealed copper (conductivity σ = 5.8 × 10⁷ S/m, μr = 1.0) at: (a) powerline frequency f = 50 Hz, (b) FM radio frequency f = 100 MHz, and (c) microwave frequency f = 10 GHz.",
        "hi": "तांबे (σ = 5.8 × 10⁷ S/m, μr = 1.0) के लिए स्किन डेप्थ δ और सतह प्रतिरोध R_s ज्ञात कीजिए: (a) बिजली आपूर्ति आवृत्ति f = 50 Hz, (b) FM रेडियो आवृत्ति f = 100 MHz, तथा (c) माइक्रोवेव आवृत्ति f = 10 GHz पर।",
        "bn": "তামার (σ = ৫.৮ × ১০⁷ S/m, μr = ১.০) ক্ষেত্রে স্কিন ডেপথ δ এবং পৃষ্ঠীয় রোধ R_s নির্ণয় করুন: (a) বিদ্যুৎ লাইনের কম্পাঙ্ক f = ৫০ Hz, (b) FM রেডিও কম্পাঙ্ক f = ১০০ MHz, এবং (c) মাইক্রোওয়েভ কম্পাঙ্ক f = ১০ GHz এ।"
      },
      "solution": {
        "en": "Formula: δ = 1 / √(π f μ0 σ), where μ0 = 4π × 10⁻⁷ H/m, σ = 5.8 × 10⁷ S/m.\nConstant factor: √(π μ0 σ) = √[ π × (4π × 10⁻⁷) × (5.8 × 10⁷) ] = √[ 2.2898 × 10² ] = 15.132.\nTherefore, for copper: δ = (1 / 15.132) / √f = 0.06608 / √f meters = 66.08 / √f millimeters.\nSurface resistance: R_s = 1 / (σ δ) = √[ π f μ0 / σ ] = 2.608 × 10⁻⁷ √f Ω.\n\n(a) At f = 50 Hz:\nδ = 66.08 / √(50) = 66.08 / 7.071 = 9.345 mm ≈ 9.35 mm.\nR_s = 2.608 × 10⁻⁷ √(50) = 1.84 × 10⁻⁶ Ω = 1.84 μΩ.\n\n(b) At f = 100 MHz (10⁸ Hz):\nδ = 66.08 / √(10⁸) = 66.08 / 10,000 = 6.61 × 10⁻³ mm = 6.61 μm.\nR_s = 2.608 × 10⁻⁷ √(10⁸) = 2.608 × 10⁻³ Ω = 2.61 mΩ.\n\n(c) At f = 10 GHz (10¹⁰ Hz):\nδ = 66.08 / √(10¹⁰) = 66.08 / 100,000 = 6.61 × 10⁻⁴ mm = 0.661 μm = 661 nm.\nR_s = 2.608 × 10⁻⁷ √(10¹⁰) = 0.02608 Ω = 26.1 mΩ.",
        "hi": "(a) 50 Hz पर: δ = 66.1 / √50 = 9.35 mm; R_s = 1.84 μΩ।\n(b) 100 MHz पर: δ = 6.61 μm; R_s = 2.61 mΩ।\n(c) 10 GHz पर: δ = 0.661 μm (661 nm); R_s = 26.1 mΩ।",
        "bn": "(a) ৫০ Hz এ: δ = ৬৬.১ / √৫০ = ৯.৩৫ মিমি; R_s = ১.৮৪ μΩ।\n(b) ১০০ MHz এ: δ = ৬.৬১ μm; R_s = ২.৬১ mΩ।\n(c) ১০ GHz এ: δ = ০.৬৬১ μm (৬৬১ nm); R_s = ২৬.১ mΩ।"
      }
    },
    {
      "id": "ex-ch11-l11-02",
      "problem": {
        "en": "A 100 MHz radio transmitter uses a solid copper wire of radius a = 1.0 mm and length l = 10 m. Calculate: (a) the DC resistance R_dc of the wire, (b) the AC resistance R_ac at 100 MHz, and (c) the ratio R_ac / R_dc.",
        "hi": "100 MHz के एक रेडियो ट्रांसमीटर में 1.0 mm त्रिज्या और 10 m लंबाई के ठोस तांबे के तार का उपयोग किया जाता है। ज्ञात कीजिए: (a) तार का DC प्रतिरोध R_dc, (b) 100 MHz पर AC प्रतिरोध R_ac, तथा (c) R_ac / R_dc का अनुपात।",
        "bn": "১০০ MHz এর একটি রেডিও ট্রান্সমিটারে ১.০ মিমি ব্যাসার্ধ এবং ১০ মিটার দৈর্ঘ্যের তামার তার ব্যবহার করা হয়। নির্ণয় করুন: (a) তারের DC রোধ R_dc, (b) ১০০ MHz এ AC রোধ R_ac, এবং (c) R_ac / R_dc এর অনুপাত।"
      },
      "solution": {
        "en": "Given: a = 1.0 × 10⁻³ m, l = 10 m, σ = 5.8 × 10⁷ S/m.\nFrom Example 1, at 100 MHz, the skin depth of copper is δ = 6.61 × 10⁻⁶ m (6.61 μm), and R_s = 2.61 × 10⁻³ Ω.\n\nStep 1: Calculate DC resistance:\nA_dc = π a² = π (1.0 × 10⁻³)² = 3.1416 × 10⁻⁶ m².\nR_dc = l / (σ A_dc) = 10 / (5.8 × 10⁷ × 3.1416 × 10⁻⁶) = 10 / 182.21 = 0.05488 Ω = 54.9 mΩ.\n\nStep 2: Calculate AC resistance:\nSince a = 1000 μm ≫ δ = 6.61 μm, the thin skin approximation applies:\nR_ac = (R_s · l) / (2π a) = (2.61 × 10⁻³ × 10) / (2π × 1.0 × 10⁻³) = 0.0261 / 0.006283 = 4.154 Ω.\n\nStep 3: Calculate resistance ratio:\nR_ac / R_dc = 4.154 / 0.05488 = 75.7.\nAlternatively, using the formula: R_ac / R_dc = a / (2 δ) = (1.0 × 10⁻³) / (2 × 6.61 × 10⁻⁶) = 1000 / 13.22 = 75.64.\nThe wire's resistance is over 75 times greater at 100 MHz than at DC!",
        "hi": "चरण 1: R_dc = 10 / (5.8×10⁷ × π × 0.001²) = 0.0549 Ω = 54.9 mΩ।\nचरण 2: R_ac = (R_s × l) / (2π a) = (0.00261 × 10) / (2π × 0.001) = 4.15 Ω।\nचरण 3: अनुपात R_ac / R_dc = a / (2δ) = 1000 μm / (2 × 6.61 μm) = 75.6। AC प्रतिरोध DC की तुलना में 75 गुना से अधिक बढ़ जाता है!",
        "bn": "ধাপ ১: R_dc = ১০ / (৫.৮×১০⁷ × π × ০.০০১²) = ০.০৫৪৯ Ω = ৫৪.৯ mΩ।\nধাপ ২: R_ac = (R_s × l) / (২π a) = (০.০০২৬১ × ১০) / (২π × ০.০০১) = ৪.১৫ Ω।\nধাপ ৩: অনুপাত R_ac / R_dc = a / (২δ) = ১০০০ μm / (২ × ৬.৬১ μm) = ৭৫.৬। AC রোধ DC রোধের তুলনায় ৭৫ গুণেরও বেশি!"
      }
    }
  ],
  "practicalApplications": {
    "en": [
      "Silver-Plated RF Conductors: Because high-frequency currents flow only in the outermost few microns, RF cables use inexpensive copper or aluminum coated with a micro-thin silver layer for minimal loss.",
      "Litz Wire in Inductors and Transformers: High-frequency switch-mode power supplies (SMPS) and wireless phone chargers use braided bundles of insulated microscopic strands to defeat skin effect.",
      "Faraday Cages & Lightning Protection: Aircraft aluminum fuselages act as continuous Faraday shields, conducting lightning currents along the outer skin while keeping internal avionics and passengers safe.",
      "MRI Shielded Rooms: Hospital magnetic resonance imaging suites are encased in copper sheets to prevent ambient RF noise (cell towers, Wi-Fi) from distorting delicate tissue imaging.",
      "Microwave Oven Door Screens: Metal mesh with holes far smaller than the 12.2 cm microwave wavelength confines 2.45 GHz radiation safely inside the cooking cavity while allowing visible light (λ ~ 500 nm) to pass."
    ],
    "hi": [
      "सिल्वर-प्लेटेड RF चालक: चूंकि उच्च आवृत्ति पर धारा केवल बाहरी कुछ माइक्रोन में बहती है, अतः कम लागत के लिए तांबे पर चांदी की पतली परत चढ़ा दी जाती है।",
      "लिट्ज़ वायर (Litz Wire): वायरलेस चार्जर और SMPS ट्रांसफार्मर में स्किन प्रभाव को कम करने के लिए बारीक इंसुलेटेड तारों के गुच्छे का उपयोग किया जाता है।",
      "फैराडे पिंजरा एवं आकाशीय बिजली से सुरक्षा: हवाई जहाज की एल्यूमीनियम बॉडी फैराडे पिंजरे का कार्य करती है, जिससे बिजली यात्रियों को बिना नुकसान पहुंचाए बाहर से निकल जाती है।",
      "एमआरआई (MRI) शील्डेड रूम: अस्पताल के एमआरआई रूम में तांबे की चादरें लगाई जाती हैं ताकि मोबाइल और वाई-फाई के सिग्नल मेडिकल जांच में बाधा न डालें।",
      "माइक्रोवेव ओवन का दरवाजा: ओवन के कांच के दरवाजे पर जाली लगी होती है जिसके छेद 12.2 सेमी की माइक्रोवेव तरंगों को बाहर निकलने से रोकते हैं।"
    ],
    "bn": [
      "সিলভার-প্লেটেড RF পরিবাহী: উচ্চ কম্পাঙ্কে কারেন্ট শুধু বাইরের কয়েক মাইক্রনে প্রবাহিত হওয়ায় তামার তারে রুপার পাতলা প্রলেপ দিয়ে অপচয় কমানো হয়।",
      "লিটজ ওয়্যার (Litz Wire): ওয়্যারলেস চার্জার এবং ট্রান্সফরমারে স্কিন ইফেক্ট দূর করতে ইনসুলেটেড ক্ষুদ্র ক্ষুদ্র তারের গুচ্ছ ব্যবহার করা হয়।",
      "ফ্যারাডে খাঁচা ও বজ্রপাত সুরক্ষা: বিমানের অ্যালুমিনিয়াম কাঠামো ফ্যারাডে খাঁচা হিসেবে কাজ করে, ফলে বজ্রপাতের কারেন্ট বাইরে দিয়ে নিরাপদে চলে যায়।",
      "এমআরআই (MRI) কক্ষ শিল্ডিং: বাইরের রেডিও ও মোবাইল সংকেত যেন মেডিকেল ইমেজিংয়ে ব্যাঘাত না ঘটায় সেজন্য কক্ষে তামার পাত দিয়ে শিল্ডিং করা হয়।",
      "মাইক্রোওয়েভ ওভেনের সুরক্ষা জাল: ওভেনের দরজায় থাকা ক্ষুদ্র ছিদ্রযুক্ত ধাতব জাল ২.৪৫ GHz মাইক্রোওয়েভ আটকে দেয় কিন্তু দৃশ্যমান আলো দেখতে দেয়।"
    ]
  },
  "importantPoints": {
    "en": [
      "In good conductors (σ ≫ ωε), the attenuation constant and phase constant are identical: α = β = √(π f μ σ).",
      "Skin depth δ = √(2 / (ω μ σ)) decreases inversely with the square root of frequency (δ ∝ 1/√f).",
      "At high frequencies (wire radius a ≫ δ), AC resistance increases with the square root of frequency: R_ac ∝ √f.",
      "Conductor surface resistance R_s is identically equal to the DC resistance of a flat sheet of length L, width W, and thickness equal to one skin depth δ.",
      "Each skin depth of metallic shield thickness provides 8.686 dB of exponential absorption attenuation."
    ],
    "hi": [
      "अच्छे चालक में अवमंदन स्थिरांक और कला स्थिरांक समान होते हैं: α = β = √(π f μ σ)।",
      "स्किन डेप्थ आवृत्ति के वर्गमूल के व्युत्क्रमानुपाती होती है: δ ∝ 1/√f।",
      "उच्च आवृत्तियों पर तार का AC प्रतिरोध आवृत्ति के वर्गमूल के समानुपाती होता है: R_ac ∝ √f।",
      "चालक का सतह प्रतिरोध R_s एक स्किन डेप्थ δ मोटाई वाली शीट के DC प्रतिरोध के बराबर होता है।",
      "धातु के परिरक्षक की प्रत्येक 1δ मोटाई 8.686 dB का अवशोषण क्षय प्रदान करती है।"
    ],
    "bn": [
      "উত্তম পরিবাহীতে ক্ষয় ধ্রুবক এবং দশা ধ্রুবক অভিন্ন হয়: α = β = √(π f μ σ)।",
      "স্কিন ডেপথ কম্পাঙ্কের বর্গমূলের ব্যস্তানুপাতিক: δ ∝ ১/√f।",
      "উচ্চ কম্পাঙ্কে তারের AC রোধ কম্পাঙ্কের বর্গমূলের সমানুপাতিক হারে বাড়ে: R_ac ∝ √f।",
      "পৃষ্ঠীয় রোধ R_s হলো এক স্কিন ডেপথ δ পুরুত্বের পাতের DC রোধের সমান।",
      "ধাতব শিল্ডের প্রতি ১δ পুরুত্ব ৮.৬৮৬ dB সূচকীয় শোষণ অপচয় নিশ্চিত করে।"
    ]
  },
  "commonMistakes": {
    "en": [
      "Assuming DC resistance applies to high-frequency RF circuits (can underestimate resistance by a factor of 10 to 100).",
      "Believing current in skin effect stops completely at depth δ; in reality, it decays exponentially (36.8% at 1δ, 5% at 3δ, 0.7% at 5δ).",
      "Forgetting that skin depth depends on magnetic permeability μ; ferromagnetic materials like iron (high μr) have extremely tiny skin depths compared to copper.",
      "Thinking Faraday cages require solid thick walls; a fine wire mesh effectively blocks any wavelength much larger than the mesh hole diameter."
    ],
    "hi": [
      "उच्च आवृत्ति RF सर्किट में DC प्रतिरोध लागू मान लेना (जिससे प्रतिरोध 10 से 100 गुना तक कम आंका जा सकता है)।",
      "यह सोचना कि स्किन प्रभाव में δ गहराई पर धारा पूरी तरह समाप्त हो जाती है; वास्तव में यह चरघातांकी रूप से घटती है।",
      "यह भूल जाना कि स्किन डेप्थ चुंबकशीलता μ पर भी निर्भर करती है; लोहे (उच्च μ) में स्किन डेप्थ तांबे की तुलना में बहुत कम होती है।",
      "यह समझना कि फैराडे पिंजरे के लिए ठोस धातु की दीवार चाहिए; तार की बारीक जाली भी उन तरंगों को रोक देती है जिनकी तरंगदैर्ध्य जाली के छेदों से बड़ी हो।"
    ],
    "bn": [
      "উচ্চ-কম্পাঙ্কের RF বর্তনীতে DC রোধ হিসাব করা (এতে রোধ ১০ থেকে ১০০ গুণ পর্যন্ত ভুল হিসাব হতে পারে)।",
      "মনে করা যে δ গভীরতায় কারেন্ট পুরোপুরি বন্ধ হয়ে যায়; প্রকৃতপক্ষে এটি সূচকীয় হারে কমে।",
      "ভুলে যাওয়া যে স্কিন ডেপথ চৌম্বক প্রবেশ্যতা μ এর ওপরও নির্ভরশীল; লোহার মতো বস্তুতে স্কিন ডেপথ তামার চেয়ে অনেক কম হয়।",
      "মনে করা যে ফ্যারাডে খাঁচার জন্য ভারী ধাতব পাত দরকার; তারের ক্ষুদ্র জালও বড় তরঙ্গদৈর্ঘ্যের সিগন্যাল আটকে দিতে পারে।"
    ]
  },
  "keyTakeaways": {
    "en": [
      "Skin effect confines high-frequency currents to a shallow surface layer δ = √(2 / (ω μ σ)).",
      "High-frequency AC resistance increases as √f, necessitating multi-strand Litz wire or silver-plated tubing in RF engineering.",
      "Good conductors possess equal attenuation and phase constants (α = β), producing severe wave damping.",
      "Shielding effectiveness combines high-impedance surface reflection with exponential skin depth absorption to isolate sensitive electronics."
    ],
    "hi": [
      "स्किन प्रभाव उच्च आवृत्ति धाराओं को केवल बाहरी सतह परत δ = √(2 / (ω μ σ)) तक सीमित कर देता है।",
      "उच्च-आवृत्ति AC प्रतिरोध √f की दर से बढ़ता है, जिसके समाधान के लिए लिट्ज़ वायर या सिल्वर-प्लेटेड तारों का उपयोग किया जाता है।",
      "अच्छे चालकों में अवमंदन और कला स्थिरांक बराबर होते हैं (α = β), जिससे तरंगें तेजी से क्षीण हो जाती हैं।",
      "परिरक्षण प्रभावशीलता उच्च परावर्तन और स्किन डेप्थ अवशोषण को मिलाकर इलेक्ट्रॉनिक उपकरणों को बाहरी शोर से बचाती है।"
    ],
    "bn": [
      "স্কিন ইফেক্ট উচ্চ কম্পাঙ্কের কারেন্টকে পৃষ্ঠের অগভীর স্তরে δ = √(২ / (ω μ σ)) আবদ্ধ রাখে।",
      "উচ্চ কম্পাঙ্কে AC রোধ √f হারে বাড়ে, ফলে RF প্রকৌশলে লিটজ ওয়্যার বা সিলভার-কোটেড তার ব্যবহৃত হয়।",
      "উত্তম পরিবাহীতে ক্ষয় ও দশা ধ্রুবক সমান হয় (α = β), যা দ্রুত তরঙ্গ ক্ষয় ঘটায়।",
      "শিল্ডিং কার্যকারিতা পৃষ্ঠীয় প্রতিফলন ও স্কিন ডেপথ শোষণকে কাজে লাগিয়ে সংবেদনশীল সার্কিটকে বাহ্যিক নয়েজ থেকে রক্ষা করে।"
    ]
  },
  "mcqs": [
    {
      "id": "mcq-ch11-l11-01",
      "question": {
        "en": "How does the skin depth δ in a good conductor scale with operating frequency f?",
        "hi": "एक अच्छे चालक में त्वचा गहराई (स्किन डेप्थ) δ प्रचालन आवृत्ति f के साथ कैसे परिवर्तित होती है?",
        "bn": "উত্তম পরিবাহীতে স্কিন ডেপথ δ কার্যনির্বাহী কম্পাঙ্ক f এর সাথে কীভাবে পরিবর্তিত হয়?"
      },
      "options": [
        { "id": "opt-1", "text": { "en": "Proportional to f (δ ∝ f)", "hi": "f के समानुपाती (δ ∝ f)", "bn": "f এর সমানুপাতিক (δ ∝ f)" } },
        { "id": "opt-2", "text": { "en": "Inversely proportional to the square root of f (δ ∝ 1/√f)", "hi": "f के वर्गमूल के व्युत्क्रमानुपाती (δ ∝ 1/√f)", "bn": "f এর বর্গমূলের ব্যস্তানুপাতিক (δ ∝ ১/√f)" } },
        { "id": "opt-3", "text": { "en": "Proportional to f²", "hi": "f² के समानुपाती", "bn": "f² এর সমানুপাতিক" } },
        { "id": "opt-4", "text": { "en": "Independent of frequency", "hi": "आवृत्ति से स्वतंत्र", "bn": "কম্পাঙ্কের ওপর নির্ভরশীল নয়" } }
      ],
      "correctOptionId": "opt-2",
      "explanation": {
        "en": "The skin depth formula is δ = 1 / √(π f μ σ), showing an inverse square root relationship with frequency (δ ∝ 1/√f).",
        "hi": "सूत्र δ = 1 / √(π f μ σ) दर्शाता है कि स्किन डेप्थ आवृत्ति के वर्गमूल के व्युत्क्रमानुपाती होती है।",
        "bn": "সূত্র δ = ১ / √(π f μ σ) অনুসারে স্কিন ডেপথ কম্পাঙ্কের বর্গমূলের ব্যস্তানুপাতিক।"
      }
    },
    {
      "id": "mcq-ch11-l11-02",
      "question": {
        "en": "At a penetration depth of exactly 3 skin depths (z = 3δ), the electric field amplitude inside a conductor is approximately what percentage of its surface value?",
        "hi": "ठीक 3 स्किन डेप्थ (z = 3δ) की गहराई पर चालक के भीतर विद्युत क्षेत्र का आयाम सतह मान का लगभग कितना प्रतिशत होता है?",
        "bn": "ঠিক ৩ স্কিন ডেপথ (z = ৩δ) গভীরতায় পরিবাহীর অভ্যন্তরে তড়িৎ ক্ষেত্রের বিস্তার পৃষ্ঠীয় মানের প্রায় কত শতাংশ হয়?"
      },
      "options": [
        { "id": "opt-1", "text": { "en": "36.8%", "hi": "36.8%", "bn": "৩৬.৮%" } },
        { "id": "opt-2", "text": { "en": "13.5%", "hi": "13.5%", "bn": "১৩.৫%" } },
        { "id": "opt-3", "text": { "en": "4.98% (~5%)", "hi": "4.98% (~5%)", "bn": "৪.৯৮% (~৫%)" } },
        { "id": "opt-4", "text": { "en": "0.67%", "hi": "0.67%", "bn": "০.৬৭%" } }
      ],
      "correctOptionId": "opt-3",
      "explanation": {
        "en": "At z = 3δ, the field amplitude has attenuated by e^(-3) = 1 / 20.086 ≈ 0.0498 = 4.98%.",
        "hi": "z = 3δ पर आयाम e^(-3) = 1 / 20.086 ≈ 4.98% रह जाता है।",
        "bn": "z = ৩δ তে বিস্তার e^(-৩) = ১ / ২০.০৮৬ ≈ ৪.৯৮% এ নেমে আসে।"
      }
    },
    {
      "id": "mcq-ch11-l11-03",
      "question": {
        "en": "Why is the skin depth in iron (ferromagnetic) significantly smaller than in copper at the same frequency?",
        "hi": "समान आवृत्ति पर लोहे (लौहचुंबकीय) में त्वचा गहराई तांबे की तुलना में काफी कम क्यों होती है?",
        "bn": "একই কম্পাঙ্কে লোহার স্কিন ডেপথ তামার চেয়ে উল্লেখযোগ্যভাবে কম হয় কেন?"
      },
      "options": [
        { "id": "opt-1", "text": { "en": "Because iron has much higher magnetic permeability (μ = μr μ0, where μr ≫ 1)", "hi": "क्योंकि लोहे की चुंबकशीलता बहुत अधिक होती है (μr ≫ 1)", "bn": "কারণ লোহার চৌম্বক প্রবেশ্যতা অনেক বেশি (μr ≫ ১)" } },
        { "id": "opt-2", "text": { "en": "Because iron has higher conductivity than copper", "hi": "क्योंकि लोहे की चालकता तांबे से अधिक होती है", "bn": "কারণ লোহার পরিবাহিতা তামার চেয়ে বেশি" } },
        { "id": "opt-3", "text": { "en": "Because iron is heavier than copper", "hi": "क्योंकि लोहा तांबे से भारी होता है", "bn": "কারণ লোহা তামার চেয়ে ভারী" } },
        { "id": "opt-4", "text": { "en": "Because iron has a lower melting point", "hi": "क्योंकि लोहे का गलनांक कम होता है", "bn": "কারণ লোহার গলনাঙ্ক কম" } }
      ],
      "correctOptionId": "opt-1",
      "explanation": {
        "en": "Since δ = 1 / √(π f μ σ), high relative permeability μr in iron (often 100 to 5000) sharply reduces the skin depth.",
        "hi": "चूंकि δ = 1 / √(π f μ σ) है, लोहे की उच्च चुंबकशीलता μr स्किन डेप्थ को अत्यधिक घटा देती है।",
        "bn": "যেহেতু δ = ১ / √(π f μ σ), লোহার উচ্চ আপেক্ষিক প্রবেশ্যতা μr স্কিন ডেপথকে ব্যাপকভাবে হ্রাস করে।"
      }
    },
    {
      "id": "mcq-ch11-l11-04",
      "question": {
        "en": "How does the high-frequency AC resistance of a cylindrical wire vary with frequency when radius a ≫ δ?",
        "hi": "जब तार की त्रिज्या a ≫ δ हो, तो उच्च-आवृत्ति AC प्रतिरोध आवृत्ति के साथ कैसे बदलता है?",
        "bn": "যখন তারের ব্যাসার্ধ a ≫ δ হয়, তখন উচ্চ-কম্পাঙ্ক AC রোধ কম্পাঙ্কের সাথে কীভাবে পরিবর্তিত হয়?"
      },
      "options": [
        { "id": "opt-1", "text": { "en": "R_ac increases linearly with f", "hi": "R_ac आवृत्ति f के रैखिक समानुपाती होता है", "bn": "R_ac কম্পাঙ্ক f এর সাথে রৈখিকভাবে বাড়ে" } },
        { "id": "opt-2", "text": { "en": "R_ac increases proportional to √f", "hi": "R_ac आवृत्ति के वर्गमूल (√f) के समानुपाती बढ़ता है", "bn": "R_ac কম্পাঙ্কের বর্গমূলের (√f) সমানুপাতিক হারে বাড়ে" } },
        { "id": "opt-3", "text": { "en": "R_ac remains constant", "hi": "R_ac स्थिर रहता है", "bn": "R_ac ধ্রুবক থাকে" } },
        { "id": "opt-4", "text": { "en": "R_ac decreases as 1/√f", "hi": "R_ac घटकर 1/√f हो जाता है", "bn": "R_ac কমে ১/√f হয়" } }
      ],
      "correctOptionId": "opt-2",
      "explanation": {
        "en": "Because R_ac ∝ 1/δ and δ ∝ 1/√f, the AC resistance increases directly with the square root of frequency: R_ac ∝ √f.",
        "hi": "चूंकि R_ac ∝ 1/δ और δ ∝ 1/√f है, अतः AC प्रतिरोध आवृत्ति के वर्गमूल के समानुपाती बढ़ता है (R_ac ∝ √f)।",
        "bn": "যেহেতু R_ac ∝ ১/δ এবং δ ∝ ১/√f, তাই AC রোধ কম্পাঙ্কের বর্গমূলের সমানুপাতিক হারে বৃদ্ধি পায়: R_ac ∝ √f।"
      }
    },
    {
      "id": "mcq-ch11-l11-05",
      "question": {
        "en": "How many decibels of absorption attenuation is provided by a metal shield that is exactly 5 skin depths thick (t = 5δ)?",
        "hi": "ठीक 5 स्किन डेप्थ (t = 5δ) मोटी धातु की चादर कितने डेसिबल का अवशोषण क्षय प्रदान करती है?",
        "bn": "ঠিক ৫ স্কিন ডেপথ (t = ৫δ) পুরু ধাতব পাত কত ডেসিবেল শোষণ অপচয় প্রদান করে?"
      },
      "options": [
        { "id": "opt-1", "text": { "en": "8.69 dB", "hi": "8.69 dB", "bn": "৮.৬৯ dB" } },
        { "id": "opt-2", "text": { "en": "20.0 dB", "hi": "20.0 dB", "bn": "২০.০ dB" } },
        { "id": "opt-3", "text": { "en": "43.43 dB", "hi": "43.43 dB", "bn": "৪৩.৪৩ dB" } },
        { "id": "opt-4", "text": { "en": "86.86 dB", "hi": "86.86 dB", "bn": "৮৬.৮৬ dB" } }
      ],
      "correctOptionId": "opt-3",
      "explanation": {
        "en": "Absorption loss is A = 8.686 × (t / δ) dB = 8.686 × 5 = 43.43 dB.",
        "hi": "अवशोषण हानि A = 8.686 × (t/δ) = 8.686 × 5 = 43.43 dB।",
        "bn": "শোষণ অপচয় A = ৮.৬৮৬ × (t/δ) = ৮.৬৮৬ × ৫ = ৪৩.৪৩ dB।"
      }
    },
    {
      "id": "mcq-ch11-l11-06",
      "question": {
        "en": "What is the relationship between attenuation constant α and phase constant β in a good conductor (σ ≫ ωε)?",
        "hi": "एक अच्छे चालक (σ ≫ ωε) में अवमंदन स्थिरांक α और कला स्थिरांक β के बीच क्या संबंध होता है?",
        "bn": "উত্তম পরিবাহীতে (σ ≫ ωε) ক্ষয় ধ্রুবক α এবং দশা ধ্রুবক β এর মধ্যে সম্পর্ক কী?"
      },
      "options": [
        { "id": "opt-1", "text": { "en": "α = 0 and β = ω/c", "hi": "α = 0 एवं β = ω/c", "bn": "α = ০ এবং β = ω/c" } },
        { "id": "opt-2", "text": { "en": "α = β = √(π f μ σ)", "hi": "α = β = √(π f μ σ)", "bn": "α = β = √(π f μ σ)" } },
        { "id": "opt-3", "text": { "en": "α ≫ β", "hi": "α ≫ β", "bn": "α ≫ β" } },
        { "id": "opt-4", "text": { "en": "α = 1/β", "hi": "α = 1/β", "bn": "α = ১/β" } }
      ],
      "correctOptionId": "opt-2",
      "explanation": {
        "en": "For good conductors, the complex propagation constant yields exactly α = β = √(π f μ σ) = √[ ω μ σ / 2 ].",
        "hi": "अच्छे चालक के लिए अवमंदन एवं कला स्थिरांक ठीक बराबर होते हैं: α = β = √(π f μ σ)।",
        "bn": "উত্তম পরিবাহীর জন্য ক্ষয় ধ্রুবক ও দশা ধ্রুবক সমান হয়: α = β = √(π f μ σ)।"
      }
    },
    {
      "id": "mcq-ch11-l11-07",
      "question": {
        "en": "Why do RF engineers use Litz wire (strands of individually insulated thin wires) in high-frequency inductors?",
        "hi": "RF इंजीनियर उच्च-आवृत्ति प्रेरकों में लिट्ज़ वायर (अलग-अलग इंसुलेटेड पतले तारों के गुच्छे) का उपयोग क्यों करते हैं?",
        "bn": "RF প্রকৌশলীরা উচ্চ-কম্পাঙ্কের ইন্ডাক্টরে লিটজ ওয়্যার (আলাদা ইনসুলেটেড সূক্ষ্ম তারের গুচ্ছ) ব্যবহার করেন কেন?"
      },
      "options": [
        { "id": "opt-1", "text": { "en": "To mitigate skin effect and reduce AC resistance by increasing total effective surface area", "hi": "स्किन प्रभाव को कम करने और कुल प्रभावी सतह क्षेत्र बढ़ाकर AC प्रतिरोध घटाने के लिए", "bn": "স্কিন ইফেক্ট কমিয়ে মোট পৃষ্ঠের ক্ষেত্রফল বৃদ্ধি করে AC রোধ হ্রাস করার জন্য" } },
        { "id": "opt-2", "text": { "en": "To increase wire capacitance", "hi": "तार की धारिता बढ़ाने के लिए", "bn": "তারের ধারকত্ব বৃদ্ধি করতে" } },
        { "id": "opt-3", "text": { "en": "To make the wire physically heavier", "hi": "तार को भारी बनाने के लिए", "bn": "তারকে ভারী করতে" } },
        { "id": "opt-4", "text": { "en": "To prevent oxidation at room temperature", "hi": "कमरे के तापमान पर ऑक्सीकरण रोकने के लिए", "bn": "স্বাভাবিক তাপমাত্রায় জারণ রোধ করতে" } }
      ],
      "correctOptionId": "opt-1",
      "explanation": {
        "en": "By dividing a single thick wire into multiple insulated strands whose individual radii are smaller than skin depth δ, current distributes uniformly through each strand, preventing high-frequency resistance spikes.",
        "hi": "एक मोटे तार के स्थान पर स्किन डेप्थ से पतले इंसुलेटेड तारों के गुच्छे का उपयोग करने से धारा समान रूप से बहती है और AC प्रतिरोध घट जाता है।",
        "bn": "একটি মোটা তারের পরিবর্তে স্কিন ডেপথের চেয়ে সূক্ষ্ম ইনসুলেটেড তারের গুচ্ছ ব্যবহার করলে কারেন্ট সমানভাবে প্রবাহিত হয় এবং AC রোধ হ্রাস পায়।"
      }
    },
    {
      "id": "mcq-ch11-l11-08",
      "question": {
        "en": "What is the surface reactance X_s of a good conductor relative to its surface resistance R_s?",
        "hi": "एक अच्छे चालक का सतह प्रतिघात X_s उसके सतह प्रतिरोध R_s के सापेक्ष कितना होता है?",
        "bn": "উত্তম পরিবাহীর পৃষ্ঠীয় রিঅ্যাকট্যান্স X_s তার পৃষ্ঠীয় রোধ R_s এর সাপেক্ষে কত?"
      },
      "options": [
        { "id": "opt-1", "text": { "en": "X_s = 0", "hi": "X_s = 0", "bn": "X_s = ০" } },
        { "id": "opt-2", "text": { "en": "X_s = R_s (inductive reactance equal to resistance)", "hi": "X_s = R_s (प्रतिरोध के बराबर प्रेरकीय प्रतिघात)", "bn": "X_s = R_s (রোধের সমান আবেশীয় রিঅ্যাকট্যান্স)" } },
        { "id": "opt-3", "text": { "en": "X_s = -R_s (capacitive reactance)", "hi": "X_s = -R_s (धारितीय प्रतिघात)", "bn": "X_s = -R_s (ধারকীয় রিঅ্যাকট্যান্স)" } },
        { "id": "opt-4", "text": { "en": "X_s = 2 R_s", "hi": "X_s = 2 R_s", "bn": "X_s = ২ R_s" } }
      ],
      "correctOptionId": "opt-2",
      "explanation": {
        "en": "Because Z_s = √[ j ω μ / σ ] = R_s (1 + j), the surface reactance is identically equal to the surface resistance (X_s = R_s), representing internal inductance.",
        "hi": "चूंकि Z_s = R_s (1 + j) है, अतः सतह प्रतिघात हमेशा सतह प्रतिरोध के ठीक बराबर (X_s = R_s) होता है।",
        "bn": "যেহেতু Z_s = R_s (১ + j), তাই পৃষ্ঠীয় রিঅ্যাকট্যান্স সর্বদা পৃষ্ঠীয় রোধের সমান (X_s = R_s) হয়।"
      }
    }
  ],
  "practiceQuestions": [
    {
      "id": "pq-ch11-l11-01",
      "question": {
        "en": "At a frequency of 2.45 GHz (microwave oven band), calculate the skin depth δ and surface resistance R_s of an aluminum cooking chamber wall (conductivity σ = 3.5 × 10⁷ S/m, μr = 1.0).",
        "hi": "2.45 GHz आवृत्ति पर एल्यूमीनियम (σ = 3.5 × 10⁷ S/m, μr = 1.0) की स्किन डेप्थ δ और सतह प्रतिरोध R_s ज्ञात कीजिए।",
        "bn": "২.৪৫ GHz কম্পাঙ্কে অ্যালুমিনিয়ামের (σ = ৩.৫ × ১০⁷ S/m, μr = ১.০) স্কিন ডেপথ δ এবং পৃষ্ঠীয় রোধ R_s নির্ণয় করুন।"
      },
      "hint": {
        "en": "δ = 1 / √(π f μ0 σ). R_s = 1 / (σ δ).",
        "hi": "δ = 1 / √(π × 2.45×10⁹ × 4π×10⁻⁷ × 3.5×10⁷)।",
        "bn": "δ = ১ / √(π × ২.৪৫×১০⁹ × ৪π×১০⁻⁷ × ৩.৫×১০⁷)।"
      },
      "answerKey": {
        "en": "f = 2.45 × 10⁹ Hz, μ0 = 4π × 10⁻⁷ H/m, σ = 3.5 × 10⁷ S/m.\nπ f μ0 σ = π × (2.45 × 10⁹) × (4π × 10⁻⁷) × (3.5 × 10⁷) = 9.672 × 10¹⁰ + ... = 3.385 × 10¹¹.\n√(π f μ0 σ) = √(3.385 × 10¹¹) = 5.818 × 10⁵ m⁻¹.\nδ = 1 / (5.818 × 10⁵) = 1.719 × 10⁻⁶ m = 1.72 μm.\nSurface resistance: R_s = 1 / (σ δ) = 1 / (3.5 × 10⁷ × 1.719 × 10⁻⁶) = 1 / 60.165 = 0.01662 Ω = 16.62 mΩ.",
        "hi": "स्किन डेप्थ δ = 1.72 μm; सतह प्रतिरोध R_s = 16.6 mΩ।",
        "bn": "স্কিন ডেপথ δ = ১.৭২ μm; পৃষ্ঠীয় রোধ R_s = ১৬.৬ mΩ।"
      }
    },
    {
      "id": "pq-ch11-l11-02",
      "question": {
        "en": "A sensitive military communications bunker must be shielded with copper foil (σ = 5.8 × 10⁷ S/m) against a 10 MHz electromagnetic pulse. If the design specification demands at least 60 dB of absorption loss, what is the minimum required thickness t of the copper foil?",
        "hi": "10 MHz विद्युत चुंबकीय पल्स के विरुद्ध तांबे की पन्नी (σ = 5.8 × 10⁷ S/m) द्वारा कम से कम 60 dB की अवशोषण हानि प्राप्त करने के लिए पन्नी की न्यूनतम मोटाई t क्या होनी चाहिए?",
        "bn": "১০ MHz এর একটি তড়িৎচৌম্বকীয় পাল্স থেকে সুরক্ষিত রাখতে তামার পাত (σ = ৫.৮ × ১০⁷ S/m) দিয়ে কমপক্ষে ৬০ dB শোষণ অপচয় পেতে পাতের ন্যূনতম পুরুত্ব t কত হতে হবে?"
      },
      "hint": {
        "en": "Find δ at 10 MHz. Then set A = 8.686 (t / δ) ≥ 60 dB.",
        "hi": "10 MHz पर δ ज्ञात करें। फिर 8.686 (t/δ) = 60 हल करें।",
        "bn": "১০ MHz এ δ নির্ণয় করুন। এরপর ৮.৬৮৬ (t/δ) = ৬০ সমাধান করুন।"
      },
      "answerKey": {
        "en": "Step 1: Calculate skin depth at 10 MHz:\nδ = 66.08 / √(10⁷) = 66.08 / 3162.28 = 0.0209 mm = 20.9 μm = 2.09 × 10⁻⁵ m.\nStep 2: Solve for thickness t:\nA = 8.686 (t / δ) ≥ 60 dB ⟹ t / δ ≥ 60 / 8.686 = 6.908 skin depths.\nt = 6.908 × δ = 6.908 × (20.9 μm) = 144.4 μm ≈ 0.144 mm.\nA copper foil of thickness 0.15 mm provides the required 60 dB of absorption attenuation.",
        "hi": "10 MHz पर δ = 20.9 μm। आवश्यक स्किन डेप्थ = 60 / 8.686 = 6.91। आवश्यक मोटाई t = 6.91 × 20.9 μm = 144.4 μm (0.144 mm)।",
        "bn": "১০ MHz এ δ = ২০.৯ μm। প্রয়োজনীয় স্কিন ডেপথ = ৬০ / ৮.৬৮৬ = ৬.৯১। ন্যূনতম পুরুত্ব t = ৬.৯১ × ২০.৯ μm = ১৪৪.৪ μm (০.১৪৪ মিমি)।"
      }
    },
    {
      "id": "pq-ch11-l11-03",
      "question": {
        "en": "A copper wire has a diameter of 2.0 mm (radius a = 1.0 mm). At what frequency f does the wire radius equal exactly 5 times the skin depth (a = 5δ)?",
        "hi": "2.0 mm व्यास के तांबे के तार के लिए किस आवृत्ति f पर तार की त्रिज्या स्किन डेप्थ की ठीक 5 गुना (a = 5δ) होगी?",
        "bn": "২.০ মিমি ব্যাসের তামার তারে কোন কম্পাঙ্কে তারের ব্যাসার্ধ ঠিক স্কিন ডেপথের ৫ গুণ (a = ৫δ) হবে?"
      },
      "hint": {
        "en": "Set δ = a / 5 = 0.20 mm. Solve δ = 1 / √(π f μ0 σ) for f.",
        "hi": "δ = 1.0 mm / 5 = 0.20 mm = 2.0 × 10⁻⁴ m। f = 1 / (π μ0 σ δ²) हल करें।",
        "bn": "δ = ১.০ মিমি / ৫ = ০.২০ মিমি = ২.০ × ১০⁻⁴ m। f = ১ / (π μ0 σ δ²) সমাধান করুন।"
      },
      "answerKey": {
        "en": "a = 1.0 mm = 1.0 × 10⁻³ m. Desired skin depth δ = a / 5 = 0.20 × 10⁻³ m = 2.0 × 10⁻⁴ m.\nδ = 1 / √(π f μ0 σ) ⟹ f = 1 / [ π μ0 σ δ² ].\nDenominator: π × (4π × 10⁻⁷) × (5.8 × 10⁷) × (2.0 × 10⁻⁴)²\n= (228.98) × (4.0 × 10⁻⁸) = 9.159 × 10⁻⁶.\nf = 1 / (9.159 × 10⁻⁶) = 109,178 Hz ≈ 109.2 kHz.",
        "hi": "δ = 0.20 mm रखने पर: f = 1 / (π μ0 σ δ²) = 109.2 kHz।",
        "bn": "δ = ০.২০ মিমি ধরে: f = ১ / (π μ0 σ δ²) = ১০৯.২ kHz।"
      }
    },
    {
      "id": "pq-ch11-l11-04",
      "question": {
        "en": "Explain why silver plating is widely applied to copper RF coaxial cables and microwave waveguides, citing skin depth and current distribution.",
        "hi": "स्किन डेप्थ और धारा वितरण का उल्लेख करते हुए समझाइए कि RF समाक्षीय केबलों और वेवगाइड्स पर चांदी की परत क्यों चढ़ाई जाती है।",
        "bn": "স্কিন ডেপথ ও কারেন্ট বণ্টনের আলোকে ব্যাখ্যা করুন কেন RF কোঅ্যাক্সিয়াল কেবল এবং ওয়েভগাইডে রুপার প্রলেপ দেওয়া হয়।"
      },
      "hint": {
        "en": "Silver has higher conductivity (σ = 6.3 × 10⁷ S/m) than copper. RF current is concentrated strictly within δ.",
        "hi": "चांदी की चालकता सबसे अधिक होती है और RF धारा केवल बाहरी कुछ माइक्रोन में बहती है।",
        "bn": "রুপার পরিবাহিতা সর্বোচ্চ এবং RF কারেন্ট শুধু বাইরের কয়েক মাইক্রনে সীমাবদ্ধ থাকে।"
      },
      "answerKey": {
        "en": "At radio and microwave frequencies, skin depth is microscopic (a few microns or less). Consequently, 100% of the electromagnetic current flows strictly in the outermost layer of the metal. By electroplating a thin (e.g. 5–10 μm) layer of silver (which has the highest electrical conductivity of any metal, σ = 6.3 × 10⁷ S/m) over inexpensive copper or brass, the high-frequency current experiences the ultra-low surface resistance of pure silver. This minimizes ohmic attenuation losses while keeping material costs and mechanical weight down.",
        "hi": "माइक्रोवेव आवृत्तियों पर स्किन डेप्थ केवल कुछ माइक्रोन होती है, जिससे पूरी धारा तार की सबसे बाहरी परत में बहती है। सस्ते तांबे पर चांदी (सर्वाधिक चालकता σ = 6.3 × 10⁷ S/m) की 5-10 माइक्रोन पतली परत चढ़ाने से RF धारा को न्यूनतम प्रतिरोध मिलता है। इससे सिग्नल की हानि बहुत घट जाती है और लागत भी कम रहती है।",
        "bn": "উচ্চ কম্পাঙ্কে স্কিন ডেপথ অতি ক্ষুদ্র (কয়েক মাইক্রন) হওয়ায় সম্পূর্ণ কারেন্ট পরিবাহীর একেবারে বাইরের স্তরে প্রবাহিত হয়। সাশ্রয়ী তামার ওপর রুপার (সর্বোচ্চ পরিবাহিতা σ = ৬.৩ × ১০⁷ S/m) ৫-১০ মাইক্রন পাতলা প্রলেপ দিলে RF সিগন্যাল সর্বনিম্ন রোধের সম্মুখীন হয়, ফলে সিগন্যাল অপচয় নাটকীয়ভাবে কমে যায়।"
      }
    },
    {
      "id": "pq-ch11-l11-05",
      "question": {
        "en": "Describe how an aircraft's aluminum skin acts as a protective Faraday cage when struck by lightning, and explain how passengers and flight computers remain unharmed.",
        "hi": "वर्णन कीजिए कि आकाशीय बिजली गिरने पर विमान की एल्यूमीनियम बॉडी एक सुरक्षात्मक फैराडे पिंजरे के रूप में कैसे कार्य करती है, और यात्री तथा कंप्यूटर सुरक्षित कैसे रहते हैं।",
        "bn": "বজ্রপাতের সময় বিমানের অ্যালুমিনিয়াম কাঠামো কীভাবে প্রতিরক্ষামূলক ফ্যারাডে খাঁচা হিসেবে কাজ করে এবং যাত্রী ও কম্পিউটার সুরক্ষিত থাকে তা বর্ণনা করুন।"
      },
      "hint": {
        "en": "Skin depth at lightning frequency and boundary conditions (E = 0 inside closed conductor).",
        "hi": "धातु के बंद आवरण के भीतर विद्युत क्षेत्र शून्य रहता है और बिजली की धारा बाहरी सतह से बहती हुई निकल जाती है।",
        "bn": "বন্ধ ধাতব খোলসের ভেতরে তড়িৎ ক্ষেত্র শূন্য থাকে এবং বজ্রপাতের কারেন্ট বাইরের পৃষ্ঠ দিয়ে চলে যায়।"
      },
      "answerKey": {
        "en": "An airplane’s fuselage forms a continuous conductive metallic shell (Faraday cage). Lightning carries massive currents (~30,000 Amperes) with significant high-frequency components. Due to the skin effect, these high-frequency currents remain strictly confined to the outer surface of the aluminum skin, traversing from the entry point (e.g. nose or wingtip) to an exit point (e.g. tail) and discharging into the atmosphere. Electrostatic and electromagnetic boundary conditions ensure that the electric field inside the hollow conductive cavity is identically zero (E_inside = 0). Thus, passenger cabins and flight control computers experience zero interior voltage gradients, remaining completely safe.",
        "hi": "विमान का ढांचा एक बंद चालक फैराडे पिंजरा होता है। जब आकाशीय बिजली (~30,000 A) गिरती है, तो स्किन प्रभाव के कारण विशाल धारा केवल एल्यूमीनियम की बाहरी सतह से बहती हुई पूंछ या पंख के सिरे से वापस हवा में निकल जाती है। मैक्सवेल की सीमा शर्तों के अनुसार खोखले चालक के भीतर विद्युत क्षेत्र सदैव शून्य रहता है। अतः अंदर बैठे यात्रियों और कंप्यूटरों को कोई झटका नहीं लगता।",
        "bn": "বিমানের বহিরাবরণ একটি নিরবচ্ছিন্ন পরিবাহী ফ্যারাডে খাঁচা গঠন করে। বজ্রপাতের সময় প্রায় ৩০,০০০ অ্যাম্পিয়ার কারেন্ট আঘাত হানলে স্কিন ইফেক্টের কারণে তা বিমানের অ্যালুমিনিয়াম কাঠামোর বাইরের পৃষ্ঠ দিয়ে প্রবাহিত হয়ে লেজ বা ডানার প্রান্ত দিয়ে বাতাসে নিষ্ক্রান্ত হয়। ধাতব খোলসের ভেতরে তড়িৎ ক্ষেত্র সম্পূর্ণ শূন্য থাকায় ভেতরের যাত্রী ও ফ্লাইট কম্পিউটার সম্পূর্ণ নিরাপদ থাকে।"
      }
    }
  ]
}

save_lesson('src/data/chapter11Lesson11.ts', 'LESSON_SKIN_DEPTH_CONDUCTORS_SHIELDING', lesson11)
print("Lesson 11 generated.")
