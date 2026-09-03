# -*- coding: utf-8 -*-
from create_lessons_part2 import save_lesson

lesson9 = {
  "id": "lsn-ch11-normal-incidence-reflection",
  "topicId": "ch11-normal-incidence-reflection",
  "chapterId": "ch-em-waves",
  "order": 9,
  "title": {
    "en": "Reflection & Refraction at Normal Incidence: Dielectrics & Conductors",
    "hi": "अभिलंबवत आपतन पर परावर्तन एवं अपवर्तन: परावैद्युत एवं चालक",
    "bn": "লম্ব আপাতনে প্রতিফলন ও প্রতিসরণ: ডাইইলেকট্রিক ও পরিবাহী"
  },
  "description": {
    "en": "Rigorous electromagnetic analysis of uniform plane waves impinging perpendicularly (θ = 0°) on planar interfaces between different media, boundary conditions, intrinsic impedance matching, reflection coefficient (Γ), transmission coefficient (τ), standing waves, and Standing Wave Ratio (SWR).",
    "hi": "विभिन्न माध्यमों के समतल अंतरापृष्ठों पर लंबवत (θ = 0°) आपतित समतल तरंगों का विश्लेषण, सीमा शर्तें, आंतरिक प्रतिबाधा सुमेलन, परावर्तन गुणांक (Γ), पारगमन गुणांक (τ), अप्रगामी तरंगें एवं स्थायी तरंग अनुपात (SWR)।",
    "bn": "বিভিন্ন মাধ্যমের সমতল সীমানায় লম্বভাবে (θ = ০°) আপতিত সমতল তরঙ্গের বিশ্লেষণ, সীমানা শর্ত, অন্তর্নিহিত প্রতিবন্ধকতা সমন্বয়, প্রতিফলন গুণাঙ্ক (Γ), সঞ্চালন গুণাঙ্ক (τ), স্থির তরঙ্গ এবং স্থির তরঙ্গ অনুপাত (SWR)।"
  },
  "estimatedMinutes": 45,
  "easyExplanation": {
    "en": "When an electromagnetic wave travelling through one medium (like air) suddenly encounters a different medium (like glass, water, or a solid metal sheet), it cannot simply pass through unaffected. Part of the wave bounces backwards into the first medium as a reflected wave, while the remainder continues forward into the second medium as a transmitted wave. This happens because each material has its own characteristic wave resistance, known as intrinsic impedance (η). If the two media have matching impedances (η1 = η2), the wave passes straight through with zero reflection! But if the wave strikes a perfect metal conductor (where η2 = 0), 100% of the wave is bounced back, creating a pure standing wave with zero-motion spots called nodes. By coating optical lenses with a special quarter-wavelength thin layer of matching dielectric, reflections can be completely cancelled out—this is how anti-glare camera lenses and eyewear work.",
    "hi": "जब कोई विद्युत चुंबकीय तरंग एक माध्यम (जैसे हवा) से चलकर दूसरे माध्यम (जैसे कांच, पानी या धातु की दीवार) से टकराती है, तो उसका एक भाग टकराकर वापस लौट जाता है (परावर्तित तरंग), जबकि शेष भाग दूसरे माध्यम में प्रवेश कर जाता है (पारगमित तरंग)। ऐसा इसलिए होता है क्योंकि प्रत्येक पदार्थ की अपनी आंतरिक तरंग प्रतिबाधा (η) होती है। यदि दोनों माध्यमों की प्रतिबाधा समान हो (η1 = η2), तो कोई परावर्तन नहीं होता और 100% ऊर्जा आर-पार निकल जाती है। परंतु यदि तरंग किसी आदर्श चालक (धातु) से टकराए, तो 100% तरंग वापस लौट आती है और एक अप्रगामी (स्थिर) तरंग बनाती है। कैमरों और चश्मों के लेंसों पर क्वार्टर-वेव पतली परत चढ़ाकर परावर्तन को पूरी तरह समाप्त किया जाता है।",
    "bn": "যখন কোনো তড়িৎচৌম্বকীয় তরঙ্গ এক মাধ্যম (যেমন বাতাস) থেকে গিয়ে অন্য কোনো মাধ্যমে (যেমন কাচ, পানি বা ধাতব পাত) আঘাত করে, তখন তরঙ্গের একটি অংশ প্রতিফলিত হয়ে প্রথম মাধ্যমে ফিরে আসে এবং বাকি অংশ সঞ্চালিত হয়ে দ্বিতীয় মাধ্যমে প্রবেশ করে। এর মূল কারণ হলো প্রতিটি মাধ্যমের নিজস্ব চরিত্রগত তরঙ্গ প্রতিবন্ধকতা (η) থাকে। দুটি মাধ্যমের প্রতিবন্ধকতা সমান হলে কোনো প্রতিফলন হয় না। কিন্তু যদি তরঙ্গটি একটি নিখুঁত ধাতব পরিবাহীতে আঘাত করে, তবে সম্পূর্ণ তরঙ্গটিই প্রতিফলিত হয় এবং স্থির তরঙ্গের সৃষ্টি করে। ক্যামেরার লেন্সে এক-চতুর্থাংশ তরঙ্গদৈর্ঘ্যের আবরণ দিয়ে আলোর প্রতিফলন সম্পূর্ণ দূর করা হয়।"
  },
  "detailedExplanation": {
    "en": "Consider a uniform plane wave propagating in Medium 1 (permittivity ε1, permeability μ1, intrinsic impedance η1) traveling in the +z direction toward a planar boundary located at z = 0. Beyond the boundary lies Medium 2 (ε2, μ2, η2) occupying the semi-infinite region z > 0.\n\nAt normal incidence, the wave vector k is perpendicular to the boundary plane (z = 0).\n\n1. Field Equations:\n• Incident Wave (z ≤ 0, travelling +z):\n  E_i(z) = E_i0 e^(-j β1 z) a_x\n  H_i(z) = (E_i0 / η1) e^(-j β1 z) a_y\n\n• Reflected Wave (z ≤ 0, travelling -z):\n  E_r(z) = E_r0 e^(+j β1 z) a_x\n  H_r(z) = -(E_r0 / η1) e^(+j β1 z) a_y  [note minus sign to satisfy S_r = E_r × H_r along -a_z]\n\n• Transmitted Wave (z ≥ 0, travelling +z):\n  E_t(z) = E_t0 e^(-j β2 z) a_x\n  H_t(z) = (E_t0 / η2) e^(-j β2 z) a_y\n\n2. Boundary Conditions at z = 0:\nIn the absence of surface charges or surface conduction currents on a dielectric interface:\n• Tangential Electric Field Continuity: E_i0 + E_r0 = E_t0\n• Tangential Magnetic Field Continuity: (E_i0 - E_r0) / η1 = E_t0 / η2\n\n3. Reflection and Transmission Coefficients:\nSolving these simultaneous equations yields:\n• Reflection Coefficient (Γ):\n  Γ = E_r0 / E_i0 = (η2 - η1) / (η2 + η1)\n• Transmission Coefficient (τ):\n  τ = E_t0 / E_i0 = 2 η2 / (η2 + η1)\n\nFundamental Identity: 1 + Γ = τ.\n\n4. Power Conservation:\nThe time-average incident, reflected, and transmitted power densities are:\nS_i = ½ |E_i0|² / η1\nS_r = ½ |E_r0|² / η1 = |Γ|² S_i\nS_t = ½ |E_t0|² / η2 = (η1 / η2) |τ|² S_i\n\nReflectance R and Transmittance T:\nR = S_r / S_i = |Γ|²\nT = S_t / S_i = (η1 / η2) |τ|²\nConservation of energy guarantees: R + T = |Γ|² + (η1 / η2) |τ|² = 1.0 (100%).\n\n5. Standing Waves and SWR in Medium 1:\nThe superposition of the incident and reflected waves in Medium 1 creates a partial standing wave pattern:\nE_1(z) = E_i0 [ e^(-j β1 z) + Γ e^(+j β1 z) ]\n• Maximum Electric Field: |E_1|max = |E_i0| (1 + |Γ|)\n• Minimum Electric Field: |E_1|min = |E_i0| (1 - |Γ|)\n\nStanding Wave Ratio (SWR or VSWR):\nSWR = |E_1|max / |E_1|min = (1 + |Γ|) / (1 - |Γ|),   1 ≤ SWR ≤ ∞.\n\n6. Special Boundary Cases:\n(a) Matched Media (η2 = η1): Γ = 0, τ = 1, SWR = 1.0 (No reflection, pure traveling wave).\n(b) Perfect Electric Conductor (PEC, σ2 ⟶ ∞, η2 = 0):\nΓ = (0 - η1) / (0 + η1) = -1.0.\nτ = 0 (zero field penetration into conductor).\nSWR = (1 + 1) / (1 - 1) = ∞.\nTotal electric field in Medium 1:\nE_1(z) = E_i0 [ e^(-j β1 z) - e^(+j β1 z) ] = -j 2 E_i0 sin(β1 z) a_x.\nThis is a pure standing wave! Electric field nodes (|E| = 0) occur at z = -m λ1/2, with an electric node pinned directly on the conductor surface at z = 0.",
    "hi": "जब समतल तरंग दो माध्यमों के अंतरापृष्ठ (z = 0) पर अभिलंबवत टकराती है, तो परिसीमा शर्तों के अनुसार स्पर्शज्या विद्युत एवं चुंबकीय क्षेत्र सतत रहते हैं।\n\nपरावर्तन गुणांक: Γ = (η2 - η1) / (η2 + η1)\nपारगमन गुणांक: τ = 2 η2 / (η2 + η1) = 1 + Γ\n\nऊर्जा संरक्षण: |Γ|² + (η1 / η2) |τ|² = 1\nस्थायी तरंग अनुपात (SWR): SWR = (1 + |Γ|) / (1 - |Γ|)\n\nआदर्श चालक (PEC) के लिए η2 = 0 होने के कारण Γ = -1 तथा τ = 0 होता है, जिससे 100% परावर्तन होता है और माध्यम 1 में शुद्ध अप्रगामी तरंग बनती है।",
    "bn": "যখন কোনো সমতল তরঙ্গ দুটি মাধ্যমের সীমানায় (z = ০) লম্বভাবে আপতিত হয়, তখন সীমানা শর্ত অনুসারে স্পর্শকীয় তড়িৎ ও চৌম্বক ক্ষেত্র নিরবচ্ছিন্ন থাকে।\n\nপ্রতিফলন গুণাঙ্ক: Γ = (η2 - η1) / (η2 + η1)\nসঞ্চালন গুণাঙ্ক: τ = ২ η2 / (η2 + η1) = ১ + Γ\n\nশক্তি সংরক্ষণ: |Γ|² + (η1 / η2) |τ|² = ১\nস্থির তরঙ্গ অনুপাত: SWR = (১ + |Γ|) / (১ - |Γ|)\n\nআদর্শ পরিবাহীতে η2 = ০ হওয়ায় Γ = -১ এবং τ = ০ হয়, ফলে সম্পূর্ণ প্রতিফলন ঘটে এবং প্রথম মাধ্যমে বিশুদ্ধ স্থির তরঙ্গ সৃষ্টি হয়।"
  },
  "formulas": [
    {
      "id": "f-reflection-coefficient",
      "symbol": "Γ",
      "expression": "Γ = (η2 - η1) / (η2 + η1),   -1 ≤ Γ ≤ +1 (for lossless media)",
      "title": {
        "en": "Normal Incidence Reflection Coefficient",
        "hi": "अभिलंबवत आपतन परावर्तन गुणांक",
        "bn": "লম্ব আপাতন প্রতিফলন গুণাঙ্ক"
      },
      "description": {
        "en": "Ratio of reflected electric field phasor to incident electric field phasor at the boundary surface.",
        "hi": "सीमा सतह पर परावर्तित विद्युत क्षेत्र फेजर और आपतित फेजर का अनुपात।",
        "bn": "সীমানা তলে প্রতিফলিত তড়িৎ ক্ষেত্র ও আপতিত তড়িৎ ক্ষেত্রের অনুপাত।"
      },
      "variables": [
        { "symbol": "Γ", "name": { "en": "Reflection coefficient (dimensionless)", "hi": "परावर्तन गुणांक", "bn": "প্রতিফলন গুণাঙ্ক" } },
        { "symbol": "η1", "name": { "en": "Intrinsic impedance of Medium 1 (Ω)", "hi": "माध्यम 1 की प्रतिबाधा (Ω)", "bn": "১ম মাধ্যমের প্রতিবন্ধকতা (Ω)" } },
        { "symbol": "η2", "name": { "en": "Intrinsic impedance of Medium 2 (Ω)", "hi": "माध्यम 2 की प्रतिबाधा (Ω)", "bn": "২য় মাধ্যমের প্রতিবন্ধকতা (Ω)" } }
      ]
    },
    {
      "id": "f-transmission-coefficient",
      "symbol": "τ",
      "expression": "τ = (2 η2) / (η2 + η1) = 1 + Γ",
      "title": {
        "en": "Normal Incidence Transmission Coefficient",
        "hi": "अभिलंबवत आपतन पारगमन गुणांक",
        "bn": "লম্ব আপাতন সঞ্চালন গুণাঙ্ক"
      },
      "description": {
        "en": "Ratio of transmitted electric field phasor to incident electric field phasor at the boundary surface.",
        "hi": "सीमा सतह पर पारगमित विद्युत क्षेत्र फेजर और आपतित फेजर का अनुपात।",
        "bn": "সীমানা তলে সঞ্চালিত তড়িৎ ক্ষেত্র ও আপতিত তড়িৎ ক্ষেত্রের অনুপাত।"
      },
      "variables": [
        { "symbol": "τ", "name": { "en": "Transmission coefficient (dimensionless)", "hi": "पारगमन गुणांक", "bn": "সঞ্চালন গুণাঙ্ক" } }
      ]
    },
    {
      "id": "f-swr-standing-wave-ratio",
      "symbol": "SWR (s)",
      "expression": "SWR = |E|max / |E|min = (1 + |Γ|) / (1 - |Γ|),   1 ≤ SWR ≤ ∞",
      "title": {
        "en": "Standing Wave Ratio (SWR)",
        "hi": "स्थायी तरंग अनुपात (SWR)",
        "bn": "স্থির তরঙ্গ অনুপাত (SWR)"
      },
      "description": {
        "en": "Ratio of maximum standing wave field amplitude to minimum field amplitude in Medium 1.",
        "hi": "माध्यम 1 में अधिकतम एवं न्यूनतम विद्युत क्षेत्र आयाम का अनुपात।",
        "bn": "১ম মাধ্যমে সর্বোচ্চ ও সর্বনিম্ন তড়িৎ ক্ষেত্র বিস্তারের অনুপাত।"
      },
      "variables": [
        { "symbol": "SWR", "name": { "en": "Standing wave ratio (dimensionless, ≥ 1)", "hi": "स्थायी तरंग अनुपात", "bn": "স্থির তরঙ্গ অনুপাত" } },
        { "symbol": "|Γ|", "name": { "en": "Magnitude of reflection coefficient", "hi": "परावर्तन गुणांक का परिमाण", "bn": "প্রতিফলন গুণাঙ্কের মান" } }
      ]
    },
    {
      "id": "f-quarter-wave-antireflection",
      "symbol": "η_coat",
      "expression": "η_coat = √(η1 · η2),   d = λ_coat / 4 = c / (4 f √ε_r,coat)",
      "title": {
        "en": "Quarter-Wave Anti-Reflection Coating Condition",
        "hi": "क्वार्टर-वेव एंटी-रिफ्लेक्शन कोटिंग शर्त",
        "bn": "কোয়ার্টার-ওয়েভ প্রতিফলন-রোধী আবরণ শর্ত"
      },
      "description": {
        "en": "Geometric mean impedance and quarter-wave thickness required to produce 100% destructive interference of reflected waves.",
        "hi": "परावर्तित तरंगों के पूर्ण विनाशी व्यतिकरण द्वारा परावर्तन शून्य करने के लिए आवश्यक प्रतिबाधा एवं मोटाई।",
        "bn": "প্রতিফলিত তরঙ্গের ধ্বংসাত্মক ব্যতিচারের মাধ্যমে শূন্য প্রতিফলন অর্জনের জন্য প্রয়োজনীয় প্রতিবন্ধকতা ও পুরুত্ব।"
      },
      "variables": [
        { "symbol": "η_coat", "name": { "en": "Intrinsic impedance of coating layer (Ω)", "hi": "कोटिंग परत की प्रतिबाधा", "bn": "আবরণ স্তরের প্রতিবন্ধকতা" } },
        { "symbol": "d", "name": { "en": "Physical thickness of coating layer (m)", "hi": "कोटिंग की मोटाई", "bn": "আবরণের পুরুত্ব" } }
      ]
    }
  ],
  "sections": [
    {
      "id": "sec-boundary-matching",
      "title": {
        "en": "1. Electromagnetic Boundary Continuity & Field Matching",
        "hi": "1. विद्युत चुंबकीय सीमा सातत्य एवं क्षेत्र सुमेलन",
        "bn": "১. তড়িৎচৌম্বকীয় সীমানা অবিচ্ছিন্নতা ও ক্ষেত্র সমন্বয়"
      },
      "content": {
        "en": "Maxwell's curl equations require tangential electric fields (E_tan) to be continuous across any interface devoid of magnetic charge. Similarly, tangential magnetic fields (H_tan) must be continuous across any non-conducting boundary devoid of linear surface current density J_s:\n\nE_i(0) + E_r(0) = E_t(0)\nH_i(0) + H_r(0) = H_t(0)\n\nBecause H is related to E through intrinsic impedance (H_i = E_i / η1, H_r = -E_r / η1, H_t = E_t / η2), replacing H yields:\n(E_i0 - E_r0) / η1 = E_t0 / η2\n\nDividing by E_i0 and defining reflection coefficient Γ = E_r0 / E_i0 and transmission coefficient τ = E_t0 / E_i0 produces the classic Fresnel normal equations:\nΓ = (η2 - η1) / (η2 + η1)\nτ = 2 η2 / (η2 + η1)\n\nNotice that if Medium 2 has higher intrinsic impedance than Medium 1 (η2 > η1, as when entering a lower-permittivity medium), Γ is positive: the reflected electric field is in phase with the incident field. If η2 < η1 (as when entering glass or water from air), Γ is negative: the reflected electric field undergoes an immediate 180° (π radian) phase reversal!",
        "hi": "मैक्सवेल समीकरणों के अनुसार किसी भी अंतरापृष्ठ पर स्पर्शज्या विद्युत क्षेत्र सतत रहता है। इसी प्रकार यदि सतह पर कोई मुक्त चालक धारा न हो तो स्पर्शज्या चुंबकीय क्षेत्र भी सतत रहता है।\n\nयदि η2 > η1 हो, तो Γ धनात्मक होता है और परावर्तित तरंग समान कला में लौटती है।\nयदि η2 < η1 हो (जैसे हवा से कांच में प्रवेश), तो Γ ऋणात्मक होता है और परावर्तित विद्युत क्षेत्र 180° के कलान्तर के साथ उल्टा होकर लौटता है।",
        "bn": "ম্যাক্সওয়েলের সূত্রানুসারে যেকোনো সীমানায় স্পর্শকীয় তড়িৎ ক্ষেত্র নিরবচ্ছিন্ন থাকে। মুক্ত কারেন্ট না থাকলে স্পর্শকীয় চৌম্বক ক্ষেত্রও নিরবচ্ছিন্ন থাকে।\n\nযদি η2 > η1 হয়, তবে Γ ধনাত্মক হয় এবং প্রতিফলিত তরঙ্গ একই দশায় ফিরে আসে।\nযদি η2 < η1 হয় (যেমন বাতাস থেকে কাচে প্রবেশ), তবে Γ ঋণাত্মক হয় এবং প্রতিফলিত তড়িৎ ক্ষেত্রে ১৮০° দশা পরিবর্তন ঘটে।"
      },
      "schematicId": "circuit-ch11-normal-incidence-reflection"
    },
    {
      "id": "sec-standing-wave-swr",
      "title": {
        "en": "2. Formation of Standing Waves and SWR Metrics",
        "hi": "2. स्थायी तरंगों का निर्माण एवं SWR मापदंड",
        "bn": "২. স্থির তরঙ্গের সৃষ্টি ও SWR পরিমাপক"
      },
      "content": {
        "en": "When a wave strikes a boundary with |Γ| > 0, the reflected wave travels backward along -z and interferes with the ongoing forward incident wave in Medium 1.\n\nAt spatial locations where the forward and backward traveling waves are exactly in phase, their amplitudes add constructively:\n|E|max = |E_i0| + |E_r0| = |E_i0| (1 + |Γ|).\nAt positions a quarter-wavelength away, they are 180° out of phase and interfere destructively:\n|E|min = |E_i0| - |E_r0| = |E_i0| (1 - |Γ|).\n\nThe ratio of these envelope peaks to troughs defines the Standing Wave Ratio (SWR):\nSWR = |E|max / |E|min = (1 + |Γ|) / (1 - |Γ|).\n\nPractical SWR interpretation in RF and power engineering:\n• SWR = 1.0: Perfect match (Γ = 0). Zero standing wave, 100% forward power transmission.\n• SWR < 1.5: Excellent RF antenna matching, negligible reflected heating.\n• SWR = 2.0: Acceptable limit for most wireless transmitters (|Γ| = 0.333, 11.1% power reflected).\n• SWR = ∞: Total reflection (|Γ| = 1.0). Pure standing wave, zero net power delivered to Medium 2.",
        "hi": "जब तरंग किसी परावर्तक सतह से टकराती है, तो आगे जाने वाली और पीछे लौटने वाली तरंगों के व्यतिकरण से अप्रगामी (स्थिर) तरंग बनती है।\n\nजहाँ दोनों तरंगें समान कला में मिलती हैं, वहाँ अधिकतम विद्युत क्षेत्र |E|max = E_i0(1 + |Γ|) बनता है (प्रस्पंद)।\nजहाँ वे विपरीत कला में मिलती हैं, वहाँ न्यूनतम विद्युत क्षेत्र |E|min = E_i0(1 - |Γ|) बनता है (निस्पंद)।\n\nSWR = |E|max / |E|min = (1 + |Γ|) / (1 - |Γ|)।\nRF इंजीनियरिंग में SWR = 1 आदर्श सुमेलन को दर्शाता है, जबकि SWR = ∞ पूर्ण परावर्तन को व्यक्त करता है।",
        "bn": "যখন কোনো তরঙ্গ প্রতিফলিত হয়, তখন সম্মুখগামী ও পশ্চাৎগামী তরঙ্গের ব্যতিচারের ফলে প্রথম মাধ্যমে স্থির তরঙ্গের সৃষ্টি হয়।\n\nযেসব স্থানে তরঙ্গদ্বয় সমদশায় মিলিত হয়, সেখানে সর্বোচ্চ তড়িৎ ক্ষেত্র |E|max = E_i0(১ + |Γ|) পাওয়া যায়।\nযেসব স্থানে বিপরীত দশায় মিলিত হয়, সেখানে সর্বনিম্ন তড়িৎ ক্ষেত্র |E|min = E_i0(১ - |Γ|) পাওয়া যায়।\n\nSWR = |E|max / |E|min = (১ + |Γ|) / (১ - |Γ|)।\nবেতার প্রকৌশলে SWR = ১.০ নিখুঁত সমন্বয় নির্দেশ করে এবং SWR = ∞ সম্পূর্ণ প্রতিফলন নির্দেশ করে।"
      }
    }
  ],
  "diagrams": [
    {
      "id": "diag-ch11-normal-incidence-reflection",
      "title": {
        "en": "Normal Incidence Plane Wave Boundary Reflection, Transmission & Standing Wave Envelope",
        "hi": "अभिलंबवत आपतन तरंग सीमा परावर्तन, पारगमन एवं स्थायी तरंग आवरण",
        "bn": "লম্ব আপাতন সমতল তরঙ্গের প্রতিফলন, সঞ্চালন ও স্থির তরঙ্গের বিস্তার চিত্র"
      },
      "caption": {
        "en": "Schematic diagram depicting incident wave E_i, reflected wave E_r, transmitted wave E_t across interface z = 0, with standing wave envelope nodes and antinodes in Medium 1.",
        "hi": "अंतरापृष्ठ z = 0 पर आपतित तरंग E_i, परावर्तित तरंग E_r, पारगमित तरंग E_t तथा माध्यम 1 में स्थायी तरंग के प्रस्पंदों और निस्पंदों का योजनाबद्ध आरेख।",
        "bn": "z = ০ সীমানায় আপতিত তরঙ্গ E_i, প্রতিফলিত তরঙ্গ E_r, সঞ্চালিত তরঙ্গ E_t এবং ১ম মাধ্যমে স্থির তরঙ্গের নোড ও অ্যান্টি-নোডের নকশা।"
      },
      "svgType": "circuit-ch11-normal-incidence-reflection"
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-ch11-l09-01",
      "problem": {
        "en": "A 10 GHz uniform plane wave in free space (Medium 1: εr1 = 1.0, μr1 = 1.0) strikes normal to the flat surface of a non-magnetic lossless glass slab (Medium 2: εr2 = 2.25, μr2 = 1.0). The incident electric field amplitude is E_i0 = 50 V/m. Calculate: (a) the intrinsic impedance of both media, (b) the reflection and transmission coefficients, (c) the Standing Wave Ratio (SWR) in air, and (d) the percentage of incident power reflected back into the air.",
        "hi": "मुक्त अंतरिक्ष (माध्यम 1: εr1 = 1.0) में 10 GHz की समतल तरंग कांच (माध्यम 2: εr2 = 2.25) की सपाट सतह पर अभिलंबवत टकराती है। आपतित विद्युत क्षेत्र आयाम 50 V/m है। ज्ञात कीजिए: (a) दोनों माध्यमों की प्रतिबाधा, (b) परावर्तन एवं पारगमन गुणांक, (c) हवा में SWR, तथा (d) परावर्तित शक्ति का प्रतिशत।",
        "bn": "শূন্য মাধ্যমে (১ম মাধ্যম: εr1 = ১.০) ১০ GHz কম্পাঙ্কের সমতল তরঙ্গ কাচের (২য় মাধ্যম: εr2 = ২.২৫) সমতল পৃষ্ঠে লম্বভাবে আঘাত করে। আপতিত বিস্তার ৫০ V/m। নির্ণয় করুন: (a) উভয় মাধ্যমের প্রতিবন্ধকতা, (b) প্রতিফলন ও সঞ্চালন গুণাঙ্ক, (c) বাতাসে SWR, এবং (d) প্রতিফলিত ক্ষমতার শতকরা হার।"
      },
      "solution": {
        "en": "Step 1: Compute intrinsic wave impedances:\n• Medium 1 (Free Space): η1 = η0 ≈ 376.73 Ω ≈ 120π Ω.\n• Medium 2 (Glass): η2 = η0 / √(εr2) = 376.73 / √(2.25) = 376.73 / 1.5 = 251.15 Ω.\n\nStep 2: Calculate reflection coefficient (Γ):\nΓ = (η2 - η1) / (η2 + η1) = (251.15 - 376.73) / (251.15 + 376.73) = -125.58 / 627.88 = -0.200.\n(The negative sign signifies an exact 180° phase flip of the reflected electric field).\n\nStep 3: Calculate transmission coefficient (τ):\nτ = 1 + Γ = 1 + (-0.200) = +0.800.\n(Alternatively: τ = 2 η2 / (η1 + η2) = 2(251.15) / 627.88 = 502.30 / 627.88 = 0.800).\n\nStep 4: Calculate Standing Wave Ratio (SWR):\nSWR = (1 + |Γ|) / (1 - |Γ|) = (1 + 0.200) / (1 - 0.200) = 1.20 / 0.80 = 1.50.\n\nStep 5: Calculate reflected power percentage:\nPower Reflectance R = |Γ|² = (-0.200)² = 0.040 = 4.0%.\nTherefore, exactly 4.0% of the incident power is reflected back, and 96.0% is transmitted into the glass.",
        "hi": "चरण 1: प्रतिबाधा ज्ञात करें:\nη1 = 377 Ω। η2 = 377 / √2.25 = 377 / 1.5 = 251.3 Ω।\n\nचरण 2: परावर्तन गुणांक:\nΓ = (251.3 - 377) / (251.3 + 377) = -125.7 / 628.3 = -0.20।\n\nचरण 3: पारगमन गुणांक:\nτ = 1 + Γ = 1 - 0.20 = 0.80।\n\nचरण 4: स्थायी तरंग अनुपात:\nSWR = (1 + 0.2) / (1 - 0.2) = 1.2 / 0.8 = 1.50।\n\nचरण 5: परावर्तित शक्ति = |Γ|² = (-0.2)² = 0.04 = 4.0%।",
        "bn": "ধাপ ১: প্রতিবন্ধকতা নির্ণয়:\nη1 = ৩৭৭ Ω। η2 = ৩৭৭ / √২.২৫ = ২৫১.৩ Ω।\n\nধাপ ২: প্রতিফলন গুণাঙ্ক:\nΓ = (২৫১.৩ - ৩৭৭) / (২৫১.৩ + ৩৭৭) = -০.২০।\n\nধাপ ৩: সঞ্চালন গুণাঙ্ক:\nτ = ১ + Γ = ১ - ০.২০ = ০.৮০।\n\nধাপ ৪: SWR = (১ + ০.২) / (১ - ০.২) = ১.৫।\n\nধাপ ৫: প্রতিফলিত ক্ষমতা = |Γ|² = (-০.২)² = ০.০৪ = ৪.০%।"
      }
    },
    {
      "id": "ex-ch11-l09-02",
      "problem": {
        "en": "A 5 GHz plane wave in air strikes normal to a flat perfect electric conductor (PEC). The incident wave amplitude is E_i0 = 100 V/m. (a) Write the expressions for the total electric and magnetic fields in air. (b) Find the location of the first three electric field nodes (zeros) in front of the conductor.",
        "hi": "हवा में 5 GHz की समतल तरंग एक पूर्ण विद्युत चालक (PEC) पर लंबवत टकराती है। आपतित आयाम 100 V/m है। (a) कुल विद्युत एवं चुंबकीय क्षेत्र के व्यंजक लिखिए। (b) चालक के सामने प्रथम तीन विद्युत क्षेत्र निस्पंदों (शून्यों) की स्थिति ज्ञात कीजिए।",
        "bn": "বাতাসে ৫ GHz সমতল তরঙ্গ একটি নিখুঁত বৈদ্যুতিক পরিবাহীতে (PEC) লম্বভাবে আঘাত করে। আপতিত বিস্তার ১০০ V/m। (a) বাতাসে মোট তড়িৎ ও চৌম্বক ক্ষেত্রের সমীকরণ লিখুন। (b) পরিবাহীর সামনে প্রথম তিনটি তড়িৎ ক্ষেত্র নোডের (শূন্য বিন্দুর) অবস্থান নির্ণয় করুন।"
      },
      "solution": {
        "en": "Step 1: Compute wavelength and phase constant in air:\nf = 5 × 10⁹ Hz,   c = 3.0 × 10⁸ m/s.\nλ1 = c / f = (3.0 × 10⁸) / (5 × 10⁹) = 0.060 m = 6.0 cm.\nβ1 = 2π / λ1 = 2π / 0.060 = 104.72 rad/m.\n\nStep 2: Apply PEC boundary conditions (η2 = 0 ⟹ Γ = -1.0):\nTotal Electric Field in Air (z ≤ 0):\nE1(z, t) = Re{ E_i0 [ e^(-j β1 z) - e^(+j β1 z) ] e^(j ωt) } ax\nE1(z, t) = 2 E_i0 sin(β1 z) sin(ωt) ax = 200 sin(104.72 z) sin(ωt) ax V/m.\n\nTotal Magnetic Field in Air (z ≤ 0):\nH1(z, t) = 2 (E_i0 / η0) cos(β1 z) cos(ωt) ay = 2 (100 / 377) cos(β1 z) cos(ωt) ay = 0.531 cos(104.72 z) cos(ωt) ay A/m.\n\nStep 3: Locate the electric field nodes (where sin(β1 z) = 0):\nβ1 z = -m π ⟹ z_node = -m (λ1 / 2) for m = 0, 1, 2, 3...\n• First node (m = 0): z = 0.0 cm (directly on the conductor surface, enforcing E_tan = 0).\n• Second node (m = 1): z = -λ1 / 2 = -6.0 / 2 = -3.0 cm.\n• Third node (m = 2): z = -λ1 = -6.0 cm.",
        "hi": "चरण 1: तरंगदैर्ध्य λ = c / f = 3×10⁸ / 5×10⁹ = 0.06 m = 6.0 cm।\nचरण 2: PEC के लिए Γ = -1।\nकुल विद्युत क्षेत्र: E1(z, t) = 200 sin(β1 z) sin(ωt) ax V/m (शुद्ध अप्रगामी तरंग)।\n\nचरण 3: निस्पंदों की स्थिति (z = -m λ/2):\n• प्रथम निस्पंद: z = 0 cm (चालक की सतह पर)।\n• द्वितीय निस्पंद: z = -3.0 cm।\n• तृतीय निस्पंद: z = -6.0 cm।",
        "bn": "ধাপ ১: তরঙ্গদৈর্ঘ্য λ = ৩×১০⁸ / ৫×১০⁹ = ০.০৬ m = ৬.০ cm।\nধাপ ২: PEC এর জন্য Γ = -১।\nমোট তড়িৎ ক্ষেত্র: E1(z, t) = ২০০ sin(β1 z) sin(ωt) ax V/m।\n\nধাপ ৩: নোডের অবস্থান (z = -m λ/২):\n• ১ম নোড: z = ০ সেমি (পরিবাহীর পৃষ্ঠে)।\n• ২য় নোড: z = -৩.০ সেমি।\n• ৩য় নোড: z = -৬.০ সেমি।"
      }
    }
  ],
  "practicalApplications": {
    "en": [
      "Anti-Reflective Optical Coatings: MgF2 coating of thickness d = λ/4 on glass cameras and glasses eliminates surface reflections via destructive interference.",
      "Stealth Aircraft & Radar Absorbent Materials (RAM): Engineered coatings match free space impedance to absorb radar waves without reflecting them back to enemy radar stations.",
      "Microwave Radomes: Fiberglass enclosures protecting aircraft radar antennas are designed with half-wavelength thickness (d = λ/2) to achieve 100% transmission transparency.",
      "Solar Cell Efficiency: Silicon solar panels (refractive index n ≈ 3.5) use silicon nitride (Si3N4, n ≈ 2.0) quarter-wave coatings to reduce reflection from 30% down to under 2%.",
      "Ultrasonic Medical Imaging: Impedance-matching gel applied to patient skin eliminates the severe acoustic impedance mismatch between air and human tissue."
    ],
    "hi": [
      "एंटी-रिफ्लेक्टिव लेंस कोटिंग: कैमरों और चश्मों पर MgF2 की λ/4 मोटी परत विनाशी व्यतिकरण द्वारा परावर्तन को समाप्त करती है।",
      "स्टील्थ विमान एवं रडार अवशोषक पदार्थ (RAM): रडार तरंगों को वापस परावर्तित होने से रोकने के लिए प्रतिबाधा सुमेलित कोटिंग का उपयोग किया जाता है।",
      "माइक्रोवेव रेडोम: विमान के रडार एंटेना की सुरक्षा करने वाले आवरण λ/2 मोटाई के बनाए जाते हैं ताकि 100% तरंगें पार हो सकें।",
      "सोलर सेल दक्षता: सिलिकॉन सोलर पैनलों पर परावर्तन को 30% से घटाकर 2% से कम करने के लिए एंटी-रिफ्लेक्टिव कोटिंग लगाई जाती है।",
      "अल्ट्रासाउंड मेडिकल स्कैनिंग: हवा और त्वचा के बीच प्रतिबाधा असुमेलन दूर करने के लिए कपलिंग जेल का प्रयोग किया जाता है।"
    ],
    "bn": [
      "অ্যান্টি-রিফ্লেক্টিভ লেন্স কোটিং: ক্যামেরা ও চশমার কাচে λ/৪ পুরুত্বের প্রলেপ দিয়ে আলোর প্রতিফলন সম্পূর্ণ দূর করা হয়।",
      "স্টিলথ যুদ্ধবিমান ও রাডার শোষক পদার্থ (RAM): শত্রু রাডারে তরঙ্গের প্রতিফলন শূন্য করতে বিশেষ উপাদান ব্যবহৃত হয়।",
      "মাইক্রোওয়েভ র‍্যাডোম: রাডার অ্যান্টেনার প্রতিরক্ষামূলক ঢাকনা λ/২ পুরুত্বে তৈরি করা হয় যাতে ১০০% সংকেত সঞ্চালিত হয়।",
      "সৌর প্যানেলের কার্যক্ষমতা বৃদ্ধি: সিলিকন সৌর কোষে প্রতিফলন ৩০% থেকে কমিয়ে ২% এর নিচে নামাতে কোটিং দেওয়া হয়।",
      "মেডিকেল আল্ট্রাসাউন্ড: ত্বক ও বাতাসের মধ্যে প্রতিবন্ধকতা অমিল দূর করতে বিশেষ আল্ট্রাসাউন্ড জেল ব্যবহার করা হয়।"
    ]
  },
  "importantPoints": {
    "en": [
      "At normal incidence on a lossless dielectric interface, 1 + Γ = τ always holds true.",
      "Conservation of energy requires that Reflectance R = |Γ|² and Transmittance T = (η1/η2)|τ|² satisfy R + T = 1.0.",
      "Reflection from an optically denser medium (η2 < η1) introduces an instantaneous 180° phase shift in the reflected electric field.",
      "At a perfect electric conductor (PEC), reflection coefficient Γ = -1 and transmission coefficient τ = 0, creating a pure standing wave with SWR = ∞.",
      "Electric field nodes (zeros) on a PEC occur at z = -m λ/2, while magnetic field antinodes (maxima) occur at the exact same spots."
    ],
    "hi": [
      "हानिरहित परावैद्युत अंतरापृष्ठ पर अभिलंबवत आपतन के लिए सदैव 1 + Γ = τ सत्य रहता है।",
      "ऊर्जा संरक्षण के अनुसार परावर्तन R = |Γ|² तथा पारगमन T मिलकर सदैव 1.0 (100%) होते हैं।",
      "अधिक सघन माध्यम (η2 < η1) से परावर्तन होने पर विद्युत क्षेत्र में 180° का कला परिवर्तन होता है।",
      "आदर्श चालक (PEC) पर Γ = -1 तथा τ = 0 होता है, जिससे SWR = ∞ वाली शुद्ध अप्रगामी तरंग बनती है।",
      "चालक की सतह (z = 0) पर कुल विद्युत क्षेत्र सदैव शून्य (निस्पंद) होता है।"
    ],
    "bn": [
      "অপচয়হীন মাধ্যমে লম্ব আপাতনের ক্ষেত্রে সর্বদা ১ + Γ = τ বজায় থাকে।",
      "শক্তির নিত্যতা অনুসারে প্রতিফলন R = |Γ|² এবং সঞ্চালন T এর যোগফল সর্বদা ১.০ (১০০%)।",
      "অপেক্ষাকৃত ঘন মাধ্যম (η2 < η1) থেকে প্রতিফলিত হলে তড়িৎ ক্ষেত্রে ১৮০° দশা পরিবর্তন ঘটে।",
      "আদর্শ পরিবাহীতে (PEC) Γ = -১ এবং τ = ০ হওয়ায় SWR = ∞ বিশিষ্ট স্থির তরঙ্গ গঠিত হয়।",
      "পরিবাহীর পৃষ্ঠে (z = ০) মোট তড়িৎ ক্ষেত্র সর্বদা শূন্য (নোড) থাকে।"
    ]
  },
  "commonMistakes": {
    "en": [
      "Confusing power transmission T with field transmission coefficient τ (T = (η1/η2) τ², NOT simply τ²).",
      "Forgetting the 180° phase flip (negative sign in Γ) when reflecting from a higher permittivity medium (glass, water).",
      "Assuming SWR can be less than 1.0; by definition SWR = |E|max / |E|min ≥ 1.0.",
      "Believing that electric field is maximum at a conductor surface, when in fact boundary conditions force E_tan = 0 at the conductor wall (a node)."
    ],
    "hi": [
      "पारगमित शक्ति T को केवल τ² समझ लेना, जबकि T = (η1/η2) τ² होता है।",
      "सघन माध्यम (जैसे कांच) से परावर्तन के समय 180° कला परिवर्तन (Γ का ऋणात्मक चिन्ह) भूल जाना।",
      "SWR का मान 1.0 से कम मान लेना; परिभाषा के अनुसार SWR सदैव ≥ 1.0 होता है।",
      "यह सोचना कि चालक सतह पर विद्युत क्षेत्र अधिकतम होगा, जबकि सतह पर यह अनिवार्यतः शून्य होता है।"
    ],
    "bn": [
      "ক্ষমতা সঞ্চালন T কে শুধুমাত্র τ² মনে করা, প্রকৃতপক্ষে T = (η1/η2) τ²।",
      "ঘন মাধ্যম থেকে প্রতিফলনের সময় ১৮০° দশা পরিবর্তন (Γ এর ঋণাত্মক চিহ্ন) ভুলে যাওয়া।",
      "SWR এর মান ১.০ এর কম হতে পারে মনে করা; সংজ্ঞানুসারে SWR সর্বদা ≥ ১.০।",
      "পরিবাহী তলে তড়িৎ ক্ষেত্র সর্বোচ্চ মনে করা, অথচ সীমানা শর্তানুসারে পরিবাহী পৃষ্ঠে E সর্বদা শূন্য।"
    ]
  },
  "keyTakeaways": {
    "en": [
      "Impedance mismatch between media dictates the amplitude of reflected waves: Γ = (η2 - η1) / (η2 + η1).",
      "Total reflection at a conductor forms standing waves whose nodes are spaced every half-wavelength.",
      "Standing Wave Ratio (SWR) measures the severity of reflection, ranging from 1.0 (perfect match) to ∞ (total reflection).",
      "Quarter-wave matching layers provide a universal engineering method to eliminate reflections across optics, RF, and acoustics."
    ],
    "hi": [
      "माध्यमों के बीच प्रतिबाधा असुमेलन ही परावर्तित तरंग के आयाम को निर्धारित करता है: Γ = (η2 - η1) / (η2 + η1)।",
      "चालक से पूर्ण परावर्तन होने पर अप्रगामी तरंगें बनती हैं जिनके निस्पंद प्रत्येक आधी तरंगदैर्ध्य (λ/2) पर स्थित होते हैं।",
      "SWR परावर्तन की तीव्रता का मापदंड है, जो 1.0 (पूर्ण सुमेलन) से अनंत (पूर्ण परावर्तन) तक होता है।",
      "क्वार्टर-वेव सुमेलन परतें प्रकाशिकी, रेडियो तरंगों और ध्वनिकी में परावर्तन को पूरी तरह समाप्त करने की सार्वभौमिक तकनीक हैं।"
    ],
    "bn": [
      "মাধ্যমের প্রতিবন্ধকতা অমিলই প্রতিফলিত তরঙ্গের বিস্তার নির্ধারণ করে: Γ = (η2 - η1) / (η2 + η1)।",
      "পরিবাহী থেকে সম্পূর্ণ প্রতিফলনের ফলে স্থির তরঙ্গ গঠিত হয় যার নোডগুলি প্রতি অর্ধেক তরঙ্গদৈর্ঘ্যে (λ/২) অবস্থান করে।",
      "SWR প্রতিফলনের তীব্রতা নির্দেশ করে, যার মান ১.০ (আদর্শ মিল) থেকে অসীম (সম্পূর্ণ প্রতিফলন) পর্যন্ত হতে পারে।",
      "কোয়ার্টার-ওয়েভ ম্যাচিং স্তর আলোকবিজ্ঞান ও বেতার প্রকৌশলে প্রতিফলন দূর করার কার্যকর বৈজ্ঞানিক পদ্ধতি।"
    ]
  },
  "mcqs": [
    {
      "id": "mcq-ch11-l09-01",
      "question": {
        "en": "What is the reflection coefficient Γ when a uniform plane wave strikes normal to a Perfect Electric Conductor (PEC)?",
        "hi": "जब एक समतल तरंग पूर्ण विद्युत चालक (PEC) पर अभिलंबवत टकराती है, तो परावर्तन गुणांक Γ क्या होता है?",
        "bn": "যখন একটি সমতল তরঙ্গ নিখুঁত পরিবাহীতে (PEC) লম্বভাবে আঘাত করে, তখন প্রতিফলন গুণাঙ্ক Γ কত?"
      },
      "options": [
        { "id": "opt-1", "text": { "en": "0 (zero reflection)", "hi": "0 (शून्य परावर्तन)", "bn": "০ (শূন্য প্রতিফলন)" } },
        { "id": "opt-2", "text": { "en": "+1.0 (in-phase reflection)", "hi": "+1.0 (समान कला परावर्तन)", "bn": "+১.০ (সমদশা প্রতিফলন)" } },
        { "id": "opt-3", "text": { "en": "-1.0 (180° out-of-phase reflection)", "hi": "-1.0 (180° विपरीत कला परावर्तन)", "bn": "-১.০ (১৮০° বিপরীত দশা প্রতিফলন)" } },
        { "id": "opt-4", "text": { "en": "+0.5", "hi": "+0.5", "bn": "+০.৫" } }
      ],
      "correctOptionId": "opt-3",
      "explanation": {
        "en": "Inside a PEC, intrinsic impedance η2 = 0. Therefore Γ = (0 - η1) / (0 + η1) = -1.0. The negative sign represents a complete 180° phase reversal.",
        "hi": "PEC के लिए आंतरिक प्रतिबाधा η2 = 0 होती है। अतः Γ = (0 - η1) / (0 + η1) = -1.0, जो 180° कला परिवर्तन दर्शाता है।",
        "bn": "PEC এর জন্য প্রতিবন্ধকতা η2 = ০। ফলে Γ = (০ - η1) / (০ + η1) = -১.০, যা ১৮০° দশা পরিবর্তন নির্দেশ করে।"
      }
    },
    {
      "id": "mcq-ch11-l09-02",
      "question": {
        "en": "What is the Standing Wave Ratio (SWR) when 100% of the wave is transmitted with zero reflection (|Γ| = 0)?",
        "hi": "जब शून्य परावर्तन (|Γ| = 0) के साथ 100% तरंग पारगमित होती है, तो SWR क्या होता है?",
        "bn": "যখন শূন্য প্রতিফলনের সাথে (|Γ| = ০) ১০০% তরঙ্গ সঞ্চালিত হয়, তখন SWR কত?"
      },
      "options": [
        { "id": "opt-1", "text": { "en": "0", "hi": "0", "bn": "০" } },
        { "id": "opt-2", "text": { "en": "1.0", "hi": "1.0", "bn": "১.০" } },
        { "id": "opt-3", "text": { "en": "Infinity (∞)", "hi": "अनंत (∞)", "bn": "অসীম (∞)" } },
        { "id": "opt-4", "text": { "en": "0.5", "hi": "0.5", "bn": "০.৫" } }
      ],
      "correctOptionId": "opt-2",
      "explanation": {
        "en": "SWR = (1 + |Γ|) / (1 - |Γ|) = (1 + 0) / (1 - 0) = 1.0 (representing a pure traveling wave with no standing wave peaks or nulls).",
        "hi": "SWR = (1 + 0) / (1 - 0) = 1.0, जो शुद्ध प्रगामी तरंग को दर्शाता है जिसमें कोई स्थायी प्रस्पंद नहीं बनता।",
        "bn": "SWR = (১ + ০) / (১ - ০) = ১.০, যা বিশুদ্ধ চলমান তরঙ্গ নির্দেশ করে।"
      }
    },
    {
      "id": "mcq-ch11-l09-03",
      "question": {
        "en": "If a wave in air (η1 = 377 Ω) enters a dielectric with η2 = 188.5 Ω, what is the reflection coefficient Γ?",
        "hi": "यदि हवा (η1 = 377 Ω) से तरंग एक परावैद्युत (η2 = 188.5 Ω) में प्रवेश करती है, तो परावर्तन गुणांक Γ क्या होगा?",
        "bn": "যদি বাতাস (η1 = ৩৭৭ Ω) থেকে একটি তরঙ্গ ডাইইলেকট্রিকে (η2 = ১৮৮.৫ Ω) প্রবেশ করে, তবে প্রতিফলন গুণাঙ্ক Γ কত?"
      },
      "options": [
        { "id": "opt-1", "text": { "en": "+0.333", "hi": "+0.333", "bn": "+০.৩৩৩" } },
        { "id": "opt-2", "text": { "en": "-0.333", "hi": "-0.333", "bn": "-০.৩৩৩" } },
        { "id": "opt-3", "text": { "en": "-0.500", "hi": "-0.500", "bn": "-০.৫০০" } },
        { "id": "opt-4", "text": { "en": "+0.667", "hi": "+0.667", "bn": "+০.৬৬৭" } }
      ],
      "correctOptionId": "opt-2",
      "explanation": {
        "en": "Γ = (η2 - η1) / (η2 + η1) = (188.5 - 377) / (188.5 + 377) = -188.5 / 565.5 = -1/3 ≈ -0.333.",
        "hi": "Γ = (188.5 - 377) / (188.5 + 377) = -188.5 / 565.5 = -0.333।",
        "bn": "Γ = (১৮৮.৫ - ৩৭৭) / (১৮৮.৫ + ৩৭৭) = -১৮৮.৫ / ৫৬৫.৫ = -০.৩৩৩।"
      }
    },
    {
      "id": "mcq-ch11-l09-04",
      "question": {
        "en": "What is the relationship between the reflection coefficient Γ and transmission coefficient τ at normal incidence?",
        "hi": "अभिलंबवत आपतन पर परावर्तन गुणांक Γ और पारगमन गुणांक τ के बीच क्या संबंध होता है?",
        "bn": "লম্ব আপাতনে প্রতিফলন গুণাঙ্ক Γ এবং সঞ্চালন গুণাঙ্ক τ এর মধ্যকার সম্পর্ক কী?"
      },
      "options": [
        { "id": "opt-1", "text": { "en": "Γ + τ = 1", "hi": "Γ + τ = 1", "bn": "Γ + τ = ১" } },
        { "id": "opt-2", "text": { "en": "1 + Γ = τ", "hi": "1 + Γ = τ", "bn": "১ + Γ = τ" } },
        { "id": "opt-3", "text": { "en": "Γ² + τ² = 1", "hi": "Γ² + τ² = 1", "bn": "Γ² + τ² = ১" } },
        { "id": "opt-4", "text": { "en": "τ - Γ = 2", "hi": "τ - Γ = 2", "bn": "τ - Γ = ২" } }
      ],
      "correctOptionId": "opt-2",
      "explanation": {
        "en": "By boundary continuity of tangential electric field: E_i + E_r = E_t. Dividing by E_i gives 1 + (E_r/E_i) = (E_t/E_i) ⟹ 1 + Γ = τ.",
        "hi": "स्पर्शज्या विद्युत क्षेत्र सातत्य के अनुसार: E_i + E_r = E_t, जिसे E_i से विभाजित करने पर 1 + Γ = τ प्राप्त होता है।",
        "bn": "স্পর্শকীয় তড়িৎ ক্ষেত্রের সীমানা শর্তানুসারে: E_i + E_r = E_t, যাকে E_i দ্বারা ভাগ করলে পাওয়া যায় ১ + Γ = τ।"
      }
    },
    {
      "id": "mcq-ch11-l09-05",
      "question": {
        "en": "Where do the electric field nodes (zeros) occur when a plane wave reflects normally from a flat perfect conductor at z = 0?",
        "hi": "जब एक समतल तरंग z = 0 पर स्थित पूर्ण चालक से टकराती है, तो विद्युत क्षेत्र निस्पंद (शून्य) कहाँ बनते हैं?",
        "bn": "z = ০ তে অবস্থিত নিখুঁত পরিবাহী থেকে সমতল তরঙ্গ প্রতিফলিত হলে তড়িৎ ক্ষেত্র নোডগুলি কোথায় গঠিত হয়?"
      },
      "options": [
        { "id": "opt-1", "text": { "en": "At z = -m λ/4 (for odd m)", "hi": "z = -m λ/4 पर (विषम m के लिए)", "bn": "z = -m λ/৪ এ (বিজোড় m এর জন্য)" } },
        { "id": "opt-2", "text": { "en": "At z = -m λ/2 (for integer m = 0, 1, 2...)", "hi": "z = -m λ/2 पर (पूर्णांक m = 0, 1, 2...)", "bn": "z = -m λ/২ এ (পূর্ণসংখ্যা m = ০, ১, ২...)" } },
        { "id": "opt-3", "text": { "en": "Only at z = -∞", "hi": "केवल z = -∞ पर", "bn": "কেবলমাত্র z = -∞ তে" } },
        { "id": "opt-4", "text": { "en": "At z = -m λ/8", "hi": "z = -m λ/8 पर", "bn": "z = -m λ/৮ এ" } }
      ],
      "correctOptionId": "opt-2",
      "explanation": {
        "en": "The standing wave field is E1 = -j 2 E_i0 sin(β1 z). Zeros occur where β1 z = -m π ⟹ (2π/λ) z = -m π ⟹ z = -m λ/2 (including z = 0 at the conductor).",
        "hi": "विद्युत क्षेत्र sin(β1 z) के अनुसार शून्य होता है, अतः निस्पंद प्रत्येक आधी तरंगदैर्ध्य z = -m λ/2 पर स्थित होते हैं।",
        "bn": "তড়িৎ ক্ষেত্র sin(β1 z) এর কারণে শূন্য হয়, ফলে নোডগুলি প্রতি অর্ধ-তরঙ্গদৈর্ঘ্যে z = -m λ/২ তে অবস্থিত।"
      }
    },
    {
      "id": "mcq-ch11-l09-06",
      "question": {
        "en": "If the reflection coefficient of a boundary is Γ = -0.5, what is the Standing Wave Ratio (SWR)?",
        "hi": "यदि किसी अंतरापृष्ठ का परावर्तन गुणांक Γ = -0.5 है, तो SWR क्या होगा?",
        "bn": "একটি সীমানার প্রতিফলন গুণাঙ্ক Γ = -০.৫ হলে SWR কত?"
      },
      "options": [
        { "id": "opt-1", "text": { "en": "1.5", "hi": "1.5", "bn": "১.৫" } },
        { "id": "opt-2", "text": { "en": "2.0", "hi": "2.0", "bn": "২.০" } },
        { "id": "opt-3", "text": { "en": "3.0", "hi": "3.0", "bn": "৩.০" } },
        { "id": "opt-4", "text": { "en": "0.333", "hi": "0.333", "bn": "০.৩৩৩" } }
      ],
      "correctOptionId": "opt-3",
      "explanation": {
        "en": "SWR = (1 + |Γ|) / (1 - |Γ|) = (1 + 0.5) / (1 - 0.5) = 1.5 / 0.5 = 3.0.",
        "hi": "SWR = (1 + 0.5) / (1 - 0.5) = 1.5 / 0.5 = 3.0।",
        "bn": "SWR = (১ + ০.৫) / (১ - ০.৫) = ১.৫ / ০.৫ = ৩.০।"
      }
    },
    {
      "id": "mcq-ch11-l09-07",
      "question": {
        "en": "To achieve zero reflection using a quarter-wave matching dielectric layer between Medium 1 (η1) and Medium 2 (η2), the intrinsic impedance of the layer must be:",
        "hi": "माध्यम 1 (η1) और माध्यम 2 (η2) के बीच क्वार्टर-वेव परत द्वारा शून्य परावर्तन हेतु परत की प्रतिबाधा होनी चाहिए:",
        "bn": "১ম মাধ্যম (η1) ও ২য় মাধ্যমের (η2) মাঝে কোয়ার্টার-ওয়েভ স্তরের মাধ্যমে শূন্য প্রতিফলন পেতে স্তরের প্রতিবন্ধকতা হতে হবে:"
      },
      "options": [
        { "id": "opt-1", "text": { "en": "(η1 + η2) / 2", "hi": "(η1 + η2) / 2", "bn": "(η1 + η2) / ২" } },
        { "id": "opt-2", "text": { "en": "√(η1 · η2)", "hi": "√(η1 · η2)", "bn": "√(η1 · η2)" } },
        { "id": "opt-3", "text": { "en": "η2 - η1", "hi": "η2 - η1", "bn": "η2 - η1" } },
        { "id": "opt-4", "text": { "en": "(η1 · η2) / (η1 + η2)", "hi": "(η1 · η2) / (η1 + η2)", "bn": "(η1 · η2) / (η1 + η2)" } }
      ],
      "correctOptionId": "opt-2",
      "explanation": {
        "en": "The quarter-wave transformer impedance is the geometric mean of the two media impedances: η_layer = √(η1 · η2).",
        "hi": "क्वार्टर-वेव ट्रांसफार्मर परत की प्रतिबाधा दोनों माध्यमों की प्रतिबाधाओं का गुणोत्तर माध्य होती है: η_layer = √(η1 · η2)।",
        "bn": "কোয়ার্টার-ওয়েভ ট্রান্সফরমার স্তরের প্রতিবন্ধকতা হলো উভয় মাধ্যমের প্রতিবন্ধকতার জ্যামিতিক গড়: η_layer = √(η1 · η2)।"
      }
    },
    {
      "id": "mcq-ch11-l09-08",
      "question": {
        "en": "What percentage of incident power is transmitted into a medium if the reflection coefficient is |Γ| = 0.40?",
        "hi": "यदि परावर्तन गुणांक |Γ| = 0.40 है, तो आपतित शक्ति का कितने प्रतिशत भाग दूसरे माध्यम में पारगमित होगा?",
        "bn": "প্রতিফলন গুণাঙ্ক |Γ| = ০.৪০ হলে কত শতাংশ আপতিত ক্ষমতা দ্বিতীয় মাধ্যমে সঞ্চালিত হবে?"
      },
      "options": [
        { "id": "opt-1", "text": { "en": "60%", "hi": "60%", "bn": "৬০%" } },
        { "id": "opt-2", "text": { "en": "84%", "hi": "84%", "bn": "৮৪%" } },
        { "id": "opt-3", "text": { "en": "16%", "hi": "16%", "bn": "১৬%" } },
        { "id": "opt-4", "text": { "en": "40%", "hi": "40%", "bn": "৪০%" } }
      ],
      "correctOptionId": "opt-2",
      "explanation": {
        "en": "Reflected power fraction R = |Γ|² = (0.40)² = 0.16 (16%). By conservation of energy, Transmitted power T = 1 - R = 1 - 0.16 = 0.84 = 84%.",
        "hi": "परावर्तित शक्ति R = |Γ|² = (0.40)² = 0.16 (16%)। ऊर्जा संरक्षण से पारगमित शक्ति T = 1 - 0.16 = 0.84 (84%)।",
        "bn": "প্রতিফলিত ক্ষমতা R = |Γ|² = (০.৪০)² = ০.১৬ (১৬%)। শক্তি সংরক্ষণ অনুযায়ী সঞ্চালিত ক্ষমতা T = ১ - ০.১৬ = ০.৮৪ = ৮৪%।"
      }
    }
  ],
  "practiceQuestions": [
    {
      "id": "pq-ch11-l09-01",
      "question": {
        "en": "A 1 GHz plane wave travels in air and impinges normally on fresh water (assume lossless at this frequency with εr = 81, μr = 1.0). Calculate: (a) the intrinsic impedance of water, (b) the reflection coefficient Γ, (c) the SWR in air, and (d) the percentage of incident power that penetrates into the water.",
        "hi": "हवा में 1 GHz की समतल तरंग ताजे पानी (εr = 81) पर अभिलंबवत टकराती है। ज्ञात कीजिए: (a) पानी की प्रतिबाधा, (b) परावर्तन गुणांक Γ, (c) हवा में SWR, तथा (d) पानी में प्रवेश करने वाली शक्ति का प्रतिशत।",
        "bn": "বাতাসে ১ GHz সমতল তরঙ্গ বিশুদ্ধ পানিতে (εr = ৮১) লম্বভাবে আঘাত করে। নির্ণয় করুন: (a) পানির প্রতিবন্ধকতা, (b) প্রতিফলন গুণাঙ্ক Γ, (c) বাতাসে SWR, এবং (d) পানিতে প্রবেশকারী ক্ষমতার শতকরা হার।"
      },
      "hint": {
        "en": "η_water = η0 / √εr = 376.73 / 9. Power penetrated = 1 - |Γ|².",
        "hi": "η_water = 377 / √81 = 377 / 9 = 41.9 Ω। प्रवेश करने वाली शक्ति = 1 - |Γ|²।",
        "bn": "η_water = ৩৭৭ / √৮১ = ৩৭৭ / ৯ = ৪১.৯ Ω। প্রবেশকারী ক্ষমতা = ১ - |Γ|²।"
      },
      "answerKey": {
        "en": "(a) η2 = 376.73 / √81 = 376.73 / 9 = 41.86 Ω. (b) Γ = (41.86 - 376.73) / (41.86 + 376.73) = -334.87 / 418.59 = -0.800. (c) SWR = (1 + 0.80) / (1 - 0.80) = 1.80 / 0.20 = 9.00. (d) Power reflected = |Γ|² = (-0.80)² = 0.64 (64%). Power penetrating water = 1 - 0.64 = 0.36 = 36.0%.",
        "hi": "(a) η2 = 41.86 Ω; (b) Γ = -0.80; (c) SWR = 9.0; (d) पानी में प्रवेश करने वाली शक्ति = 36.0%।",
        "bn": "(a) η2 = ৪১.৮৬ Ω; (b) Γ = -০.৮০; (c) SWR = ৯.০; (d) পানিতে প্রবেশকারী ক্ষমতা = ৩৬.০%।"
      }
    },
    {
      "id": "pq-ch11-l09-02",
      "question": {
        "en": "A glass lens (εr = 2.25) is to be coated with a thin film of magnesium fluoride (MgF2, εr = 1.90) to minimize reflection at yellow-green light (wavelength λ0 = 550 nm in air). Calculate: (a) the optimal quarter-wave physical thickness of the coating, and (b) whether the impedance of MgF2 matches the theoretical ideal condition η_film = √(η_air · η_glass).",
        "hi": "कांच के लेंस (εr = 2.25) पर पीले-हरे प्रकाश (λ0 = 550 nm) के परावर्तन को न्यूनतम करने के लिए MgF2 (εr = 1.90) की कोटिंग की जाती है। ज्ञात कीजिए: (a) कोटिंग की क्वार्टर-वेव मोटाई, तथा (b) क्या MgF2 की प्रतिबाधा आदर्श शर्त को पूरा करती है?",
        "bn": "হলুদ-সবুজ আলোতে (বাতাসে λ0 = ৫৫০ nm) প্রতিফলন ন্যূনতম করতে কাচের লেন্সে (εr = ২.২৫) MgF2 (εr = ১.৯০) এর প্রলেপ দেওয়া হবে। নির্ণয় করুন: (a) প্রলেপের আদর্শ পুরুত্ব, এবং (b) MgF2 এর প্রতিবন্ধকতা তাত্ত্বিক শর্ত পূরণ করে কি না।"
      },
      "hint": {
        "en": "d = λ_film / 4 = λ0 / (4 √εr_film). Ideal refractive index n_film = √(n_air · n_glass).",
        "hi": "d = λ0 / (4 √εr_film)। आदर्श n_film = √(1 × 1.5) = 1.225।",
        "bn": "d = λ0 / (৪ √εr_film)। আদর্শ n_film = √(১ × ১.৫) = ১.২২৫।"
      },
      "answerKey": {
        "en": "(a) Wavelength in MgF2 film: λ_film = λ0 / √εr = 550 nm / √1.90 = 550 / 1.3784 = 399.0 nm. Physical thickness d = λ_film / 4 = 399.0 / 4 = 99.75 nm ≈ 100 nm. (b) Ideal dielectric constant: ε_ideal = √(ε_air · ε_glass) = √(1.0 × 2.25) = 1.50. MgF2 has εr = 1.90 (n = 1.38), which is close to the ideal n = 1.225, reducing glass reflectance from 4.0% down to under 1.2%.",
        "hi": "(a) मोटाई d = 550 / (4 × √1.90) = 99.8 nm। (b) आदर्श n = 1.225 की तुलना में MgF2 का n = 1.38 है, जो परावर्तन को 4% से घटाकर 1.2% कर देता है।",
        "bn": "(a) পুরুত্ব d = ৫৫০ / (৪ × √১.৯০) = ৯৯.৮ nm। (b) আদর্শ n = ১.২২৫ এর কাছাকাছি MgF2 এর n = ১.৩৮ থাকায় প্রতিফলন ৪% থেকে কমে ১.২% হয়।"
      }
    },
    {
      "id": "pq-ch11-l09-03",
      "question": {
        "en": "A transmission line has a Standing Wave Ratio SWR = 2.0. Determine: (a) the magnitude of the reflection coefficient |Γ|, (b) the percentage of forward power reflected, and (c) the Return Loss (RL) in decibels.",
        "hi": "एक ट्रांसमिशन लाइन का SWR = 2.0 है। ज्ञात कीजिए: (a) परावर्तन गुणांक का परिमाण |Γ|, (b) परावर्तित शक्ति का प्रतिशत, तथा (c) dB में रिटर्न लॉस (RL)।",
        "bn": "একটি ট্রান্সমিশন লাইনের SWR = ২.০। নির্ণয় করুন: (a) প্রতিফলন গুণাঙ্কের মান |Γ|, (b) প্রতিফলিত ক্ষমতার শতকরা হার, এবং (c) ডেসিবেলে রিটার্ন লস (RL)।"
      },
      "hint": {
        "en": "|Γ| = (SWR - 1) / (SWR + 1). Return Loss RL = -20 log₁₀|Γ|.",
        "hi": "|Γ| = (2 - 1) / (2 + 1) = 1/3 = 0.333। RL = -20 log₁₀(0.333)।",
        "bn": "|Γ| = (২ - ১) / (২ + ১) = ১/৩ = ০.৩৩৩। RL = -২০ log₁₀(০.৩৩৩)।"
      },
      "answerKey": {
        "en": "(a) |Γ| = (SWR - 1) / (SWR + 1) = (2.0 - 1) / (2.0 + 1) = 1/3 ≈ 0.333. (b) Reflected power fraction = |Γ|² = (1/3)² = 1/9 = 0.1111 = 11.11% power reflected. (c) Return Loss RL = -20 log₁₀|Γ| = -20 log₁₀(0.3333) = +9.54 dB.",
        "hi": "(a) |Γ| = 0.333; (b) परावर्तित शक्ति = 11.11%; (c) रिटर्न लॉस = 9.54 dB।",
        "bn": "(a) |Γ| = ০.৩৩৩; (b) প্রতিফলিত ক্ষমতা = ১১.১১%; (c) রিটার্ন লস = ৯.৫৪ dB।"
      }
    },
    {
      "id": "pq-ch11-l09-04",
      "question": {
        "en": "Explain why the electric field is strictly zero inside a perfect electric conductor (PEC), and describe how this forces the tangential electric field immediately outside the boundary to be zero.",
        "hi": "समझाइए कि पूर्ण विद्युत चालक (PEC) के भीतर विद्युत क्षेत्र शून्य क्यों होता है, और यह चालक के ठीक बाहर स्पर्शज्या विद्युत क्षेत्र को शून्य होने के लिए कैसे बाध्य करता है।",
        "bn": "নিখুঁত পরিবাহীর (PEC) ভেতরে তড়িৎ ক্ষেত্র কেন সম্পূর্ণ শূন্য থাকে ব্যাখ্যা করুন এবং এটি পরিবাহী তলের ঠিক বাইরে স্পর্শকীয় তড়িৎ ক্ষেত্রকে কীভাবে শূন্য করতে বাধ্য করে তা লিখুন।"
      },
      "hint": {
        "en": "Infinite conductivity σ ⟶ ∞ means any finite current requires zero internal field (E = J/σ = 0). Apply Faraday loop across boundary.",
        "hi": "σ = ∞ होने पर आंतरिक E = 0 होता है। अंतरापृष्ठ पर फैराडे लूप लगाकर स्पर्शज्या सातत्य की जांच करें।",
        "bn": "σ = ∞ হওয়ায় অভ্যন্তরীণ E = ০। সীমানা বরাবর ফ্যারাডে লুপ বিবেচনা করে স্পর্শকীয় সাতত্য পরীক্ষা করুন।"
      },
      "answerKey": {
        "en": "In a perfect electric conductor (σ ⟶ ∞), any non-zero interior electric field would drive infinite conduction current, generating infinite energy, which is physically impossible. Therefore, E = 0 strictly inside a PEC. By applying Faraday’s induction law ∮ E · dl = -∂Φ/∂t around a narrow rectangular Stokes loop straddling the boundary surface (with height approaching zero), the loop integral reduces to (E_tan,outside - E_tan,inside) × length = 0. Since E_tan,inside = 0, it follows that E_tan,outside must equal zero at the conductor surface.",
        "hi": "PEC में चालकता अनंत होती है, जिससे E = J/σ = 0 हो जाता है। सीमा पर फैराडे के बंद लूप समाकलन से सिद्ध होता है कि स्पर्शज्या विद्युत क्षेत्र दोनों तरफ समान होना चाहिए। चूंकि चालक के भीतर E = 0 है, अतः सतह के ठीक बाहर भी स्पर्शज्या विद्युत क्षेत्र शून्य (E_tan = 0) होना अनिवार्य है।",
        "bn": "PEC এর পরিবাহিতা অসীম হওয়ায় অভ্যন্তরীণ তড়িৎ ক্ষেত্র E = ০ হয়। সীমানায় ফ্যারাডের লুপ সমাকলন প্রয়োগ করলে দেখা যায় উভয় পাশের স্পর্শকীয় তড়িৎ ক্ষেত্র সমান। পরিবাহীর ভেতরে E = ০ হওয়ায় বাইরেও স্পর্শকীয় তড়িৎ ক্ষেত্র অবশ্যই শূন্য (E_tan = ০) হবে।"
      }
    },
    {
      "id": "pq-ch11-l09-05",
      "question": {
        "en": "Prove that the sum of power reflectance R = |Γ|² and power transmittance T = (η1/η2) |τ|² is identically equal to 1.0 for any lossless dielectric interface at normal incidence.",
        "hi": "सिद्ध कीजिए कि किसी हानिरहित परावैद्युत अंतरापृष्ठ पर अभिलंबवत आपतन के लिए R + T = |Γ|² + (η1/η2)|τ|² = 1.0 होता है।",
        "bn": "প্রমাণ করুন যে অপচয়হীন মাধ্যমে লম্ব আপাতনের ক্ষেত্রে R + T = |Γ|² + (η1/η2)|τ|² = ১.০ হয়।"
      },
      "hint": {
        "en": "Substitute Γ = (η2 - η1)/(η2 + η1) and τ = 2η2/(η2 + η1) into R + T.",
        "hi": "Γ और τ का मान (η2 - η1)/(η2 + η1) और 2η2/(η2 + η1) रखकर विस्तार करें।",
        "bn": "Γ ও τ এর মান প্রতিস্থাপন করে সরলীকরণ করুন।"
      },
      "answerKey": {
        "en": "Let D = η2 + η1. Then Γ = (η2 - η1)/D and τ = 2η2/D.\nR = |Γ|² = (η2 - η1)² / D² = (η2² - 2 η1 η2 + η1²) / D².\nT = (η1/η2) |τ|² = (η1/η2) [4 η2² / D²] = (4 η1 η2) / D².\nAdding R and T:\nR + T = [ (η2² - 2 η1 η2 + η1²) + 4 η1 η2 ] / D² = (η2² + 2 η1 η2 + η1²) / D² = (η2 + η1)² / D² = D² / D² = 1.0.\nThis rigorously proves exact conservation of electromagnetic power flow.",
        "hi": "R = (η2 - η1)² / (η1 + η2)² तथा T = 4 η1 η2 / (η1 + η2)²। दोनों को जोड़ने पर अंश में (η1 + η2)² प्राप्त होता है, जो हर से कटकर ठीक 1.0 आ जाता है। यह ऊर्जा संरक्षण को सिद्ध करता है।",
        "bn": "R = (η2 - η1)² / (η1 + η2)² এবং T = ৪ η1 η2 / (η1 + η2)²। যোগ করলে লব ও হর উভয়েই (η1 + η2)² হয়, যার মান ১.০। এটি শক্তির নিত্যতা প্রমাণ করে।"
      }
    }
  ]
}

save_lesson('src/data/chapter11Lesson9.ts', 'LESSON_NORMAL_INCIDENCE_REFLECTION', lesson9)
print("Lesson 9 generated.")
