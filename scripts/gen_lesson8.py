# -*- coding: utf-8 -*-
from create_lessons_part2 import save_lesson

lesson8 = {
  "id": "lsn-ch11-wave-polarization",
  "topicId": "ch11-wave-polarization",
  "chapterId": "ch-em-waves",
  "order": 8,
  "title": {
    "en": "Wave Polarization: Linear, Circular & Elliptical Polarization",
    "hi": "तरंग ध्रुवीकरण: रेखीय, वृत्तीय एवं दीर्घवृत्तीय ध्रुवीकरण",
    "bn": "তরঙ্গ সমবর্তন: রৈখিক, বৃত্তীয় ও উপবৃত্তীয় সমবর্তন"
  },
  "description": {
    "en": "Comprehensive study of electromagnetic wave polarization states, temporal locus of the electric field vector in the transverse plane, axial ratio (AR), right-hand and left-hand circular/elliptical polarization (RHCP/LHCP), Jones vectors, and antenna polarization matching loss.",
    "hi": "विद्युत चुंबकीय तरंग ध्रुवीकरण अवस्थाओं, अनुप्रस्थ तल में विद्युत क्षेत्र सदिश के कालिक प्रक्षेपवक्र, अक्षीय अनुपात (AR), दक्षिणावर्त एवं वामावर्त वृत्तीय/दीर्घवृत्तीय ध्रुवीकरण (RHCP/LHCP), जोन्स सदिश तथा एंटीना ध्रुवीकरण सुमेलन हानि का गहन अध्ययन।",
    "bn": "তড়িৎচৌম্বকীয় তরঙ্গের সমবর্তন অবস্থা, অনুপ্রস্থ তলে তড়িৎ ক্ষেত্র ভেক্টরের কালিক সঞ্চারপথ, অক্ষীয় অনুপাত (AR), ডানহাতি ও বামহাতি বৃত্তীয়/উপবৃত্তীয় সমবর্তন (RHCP/LHCP), জোন্স ভেক্টর এবং অ্যান্টেনা সমবর্তন সমন্বয় অপচয়ের পূর্ণাঙ্গ আলোচনা।"
  },
  "estimatedMinutes": 45,
  "easyExplanation": {
    "en": "Imagine looking head-on at an oncoming light or radio wave as it travels straight toward your eye. The tip of the electric field arrow vibrates as the wave flies by. If the arrow simply moves back and forth along a single straight line (like up and down, or tilted at 45 degrees), the wave is linearly polarized. If the arrow sweeps out a perfect circle with constant length as time passes, spinning either clockwise or counter-clockwise, the wave is circularly polarized. If the arrow traces out an oval or ellipse with varying length and direction, it is elliptically polarized—which is actually the general parent case of all polarizations! In mobile and satellite communications, using circular polarization (RHCP or LHCP) prevents signal dropouts when you tilt your phone or when satellite signals pass through the spinning ionosphere.",
    "hi": "कल्पना कीजिए कि आप अपनी ओर सीधे आ रही प्रकाश या रेडियो तरंग को सामने से देख रहे हैं। तरंग के आगे बढ़ने पर उसके विद्युत क्षेत्र का तीर दोलन करता है। यदि तीर केवल एक सीधी रेखा में आगे-पीछे गति करता है (जैसे केवल ऊपर-नीचे या 45° झुकी रेखा पर), तो तरंग रेखीय ध्रुवीकृत होती है। यदि तीर स्थिर लंबाई के साथ समय के साथ एक पूर्ण वृत्त में घूमता है (घड़ी की दिशा या विपरीत दिशा में), तो तरंग वृत्तीय ध्रुवीकृत कहलाती है। यदि यह एक अंडाकार या दीर्घवृत्त बनाता है, तो यह दीर्घवृत्तीय ध्रुवीकृत होती है। सैटेलाइट एवं मोबाइल संचार में वृत्तीय ध्रुवीकरण का उपयोग किया जाता है ताकि फोन या एंटीना को किसी भी कोण पर घुमाने पर सिग्नल कमजोर न पड़े।",
    "bn": "মনে করুন আপনার দিকে ধাবমান একটি বেতার বা আলোক তরঙ্গের ঠিক মুখোমুখি আপনি তাকিয়ে আছেন। তরঙ্গটি অতিক্রম করার সময় তার তড়িৎ ক্ষেত্রের তীরচিহ্নটি স্পন্দিত হয়। তীরচিহ্নটি যদি কেবল একটি সরলরেখা বরাবর ওঠানামা করে (যেমন উল্লম্বভাবে বা ৪৫° কোণে), তবে তা রৈখিক সমবর্তিত তরঙ্গ। যদি তীরচিহ্নটি সমান দৈর্ঘ্য বজায় রেখে সময়ের সাথে সাথে বৃত্তাকারে ঘুরতে থাকে (ঘড়ির কাঁটার দিকে বা বিপরীত দিকে), তবে তা বৃত্তীয় সমবর্তিত তরঙ্গ। আর যদি এটি একটি উপবৃত্ত বা ওভাল পথ তৈরি করে, তবে তা উপবৃত্তীয় সমবর্তিত তরঙ্গ। স্যাটেলাইট ও মোবাইল যোগাযোগে বৃত্তীয় সমবর্তন ব্যবহার করা হয় যাতে অ্যান্টেনার অবস্থান বা আয়নমণ্ডলের প্রভাবে সংকেত দুর্বল না হয়।"
  },
  "detailedExplanation": {
    "en": "Polarization of a uniform plane wave describes the time-varying behavior and spatial trajectory traced out by the tip of the instantaneous electric field vector E(z, t) at a fixed point in space within the transverse plane perpendicular to the direction of propagation.\n\nConsider a uniform plane wave propagating in the +z direction in a lossless isotropic medium. Its general transverse electric field is decomposed into two orthogonal components along the x and y axes:\nE(z, t) = E_x(z, t) a_x + E_y(z, t) a_y\nwhere:\nE_x(z, t) = E_0x cos(ωt - βz)\nE_y(z, t) = E_0y cos(ωt - βz + δ)\nHere, E_0x and E_0y are real positive field amplitudes, and δ is the phase lead of the y-component relative to the x-component.\n\nAt a fixed plane (conveniently chosen at z = 0):\nE_x(t) = E_0x cos(ωt)\nE_y(t) = E_0y cos(ωt + δ)\n\nEliminating the time parameter ωt yields the quadratic equation of an ellipse:\n(E_x / E_0x)² + (E_y / E_0y)² - 2 (E_x / E_0x) (E_y / E_0y) cos(δ) = sin²(δ)\n\n1. Linear Polarization:\nA wave is linearly polarized if the locus of E(t) is a straight line. This occurs if and only if:\n• δ = 0, ±π, ±2π, ... (δ = mπ for integer m).\nIf δ = 0, E_y / E_x = E_0y / E_0x (in-phase, straight line in quadrants I and III with slope tan θ = E_0y / E_0x).\nIf δ = ±π, E_y / E_x = -E_0y / E_0x (out-of-phase, straight line in quadrants II and IV).\n• Or if one of the components is zero (E_0x = 0 or E_0y = 0).\n\n2. Circular Polarization:\nA wave is circularly polarized if the locus of E(t) traces a circle of constant radius E_0x = E_0y = E_0. The two mandatory conditions are:\n(a) Equal orthogonal amplitudes: E_0x = E_0y = E_0\n(b) Phase quadrature: δ = ±π/2 ± 2mπ (i.e., exactly 90° phase difference).\n\nHandedness Convention (IEEE Standard):\nViewing along the direction of wave propagation (+z axis):\n• Left-Hand Circular Polarization (LHCP): As time increases, the tip of E rotates counter-clockwise (in direction of fingers of left hand with thumb along +z). This corresponds to δ = +π/2: E_y leads E_x by 90°.\n• Right-Hand Circular Polarization (RHCP): As time increases, the tip of E rotates clockwise (fingers of right hand with thumb along +z). This corresponds to δ = -π/2: E_y lags E_x by 90°.\n\n3. Elliptical Polarization (The General State):\nIf the conditions for linear or circular polarization are not met (e.g., E_0x ≠ E_0y with δ ≠ 0, π, or equal amplitudes with δ ≠ ±π/2), the vector tip traces an ellipse.\nKey parameters characterizing the polarization ellipse:\n• Axial Ratio (AR): Ratio of the major semi-axis (OA) to the minor semi-axis (OB):\nAR = OA / OB,   1 ≤ AR ≤ ∞.\nFor circular polarization, AR = 1 (0 dB).\nFor linear polarization, AR = ∞.\n• Tilt Angle (ψ): The inclination of the major axis relative to the x-axis:\ntan(2ψ) = [2 E_0x E_0y cos(δ)] / (E_0x² - E_0y²).\n\nPolarization Loss Factor (PLF):\nWhen an incident wave with unit polarization vector e_w impinges on an antenna with receiving polarization vector e_a, the power coupling efficiency is:\nPLF = |e_w · e_a*|² = cos²(θ_misalignment).\nIf a vertically polarized wave (e_w = a_y) is received by a horizontally polarized dipole (e_a = a_x), PLF = |a_y · a_x|² = 0 (complete signal blackout: infinite cross-polarization loss!). However, receiving a circularly polarized wave using a linearly polarized antenna always yields PLF = 0.5 (-3 dB loss), regardless of antenna orientation.",
    "hi": "ध्रुवीकरण किसी समतल तरंग के अनुप्रस्थ तल में समय के साथ विद्युत क्षेत्र सदिश E(z, t) के सिरे द्वारा बनाए गए प्रक्षेपवक्र को दर्शाता है।\n\n+z दिशा में गतिमान तरंग के लिए:\nE(z, t) = E_0x cos(ωt - βz) ax + E_0y cos(ωt - βz + δ) ay\n\n1. रेखीय ध्रुवीकरण: जब दोनों घटकों में कलान्तर δ = 0 या ±π हो, तो E का सिरा एक सीधी रेखा का निर्माण करता है।\n2. वृत्तीय ध्रुवीकरण: जब दोनों घटकों का आयाम बराबर हो (E_0x = E_0y) तथा कलान्तर ठीक 90° (δ = ±π/2) हो। यदि δ = -π/2 हो तो तरंग दक्षिणावर्त (RHCP) तथा δ = +π/2 हो तो वामावर्त (LHCP) होती है।\n3. दीर्घवृत्तीय ध्रुवीकरण: सामान्य अवस्था जिसमें विद्युत क्षेत्र का सिरा दीर्घवृत्त बनाता है। इसका अक्षीय अनुपात AR = दीर्घ अक्ष / लघु अक्ष होता है।\n\nध्रुवीकरण हानि गुणांक (PLF): जब किसी एंटीना का ध्रुवीकरण आने वाली तरंग से मेल नहीं खाता, तो प्राप्त शक्ति में कमी आती है: PLF = |e_w · e_a*|²।",
    "bn": "সমবর্তন হলো তরঙ্গের গতি অভিমুখে লম্ব তলে সময়ের সাপেক্ষে তড়িৎ ক্ষেত্র ভেক্টর E এর শীর্ষবিন্দুর পরিক্রমণ পথ।\n\n+z অভিমুখে সঞ্চালনরত তরঙ্গের ক্ষেত্রে:\nE(z, t) = E_0x cos(ωt - βz) ax + E_0y cos(ωt - βz + δ) ay\n\n১. রৈখিক সমবর্তন: যদি দুটি উপাংশের মধ্যে দশা পার্থক্য δ = ০ বা ±π হয়, তবে তড়িৎ ক্ষেত্র একটি সরলরেখায় স্পন্দিত হয়।\n২. বৃত্তীয় সমবর্তন: যদি দুটি উপাংশের বিস্তার সমান হয় (E_0x = E_0y) এবং দশা পার্থক্য ঠিক ৯০° (δ = ±π/২) হয়। δ = -π/২ হলে ডানহাতি (RHCP) এবং δ = +π/২ হলে বামহাতি (LHCP) বৃত্তীয় সমবর্তন ঘটে।\n৩. উপবৃত্তীয় সমবর্তন: সাধারণ ক্ষেত্রে যখন ক্ষেত্রটির সঞ্চারপথ উপবৃত্তাকার হয়। এর অক্ষীয় অনুপাত AR = বৃহৎ অক্ষ / ক্ষুদ্র অক্ষ।\n\nপোলারাইজেশন লস ফ্যাক্টর (PLF): আগত তরঙ্গ ও গ্রাহক অ্যান্টেনার সমবর্তন অমিলের কারণে শক্তি হ্রাস পায়: PLF = |e_w · e_a*|²।"
  },
  "formulas": [
    {
      "id": "f-general-polarization-field",
      "symbol": "E(z, t)",
      "expression": "E(z, t) = E_0x cos(ωt - βz) a_x + E_0y cos(ωt - βz + δ) a_y",
      "title": {
        "en": "General Transverse Wave Instantaneous Electric Field",
        "hi": "सामान्य अनुप्रस्थ तरंग तात्क्षणिक विद्युत क्षेत्र",
        "bn": "সাধারণ অনুপ্রস্থ তরঙ্গের তাৎক্ষণিক তড়িৎ ক্ষেত্র"
      },
      "description": {
        "en": "Mathematical expression representing any arbitrary polarization state as two orthogonal spatial components with relative phase difference δ.",
        "hi": "किसी भी मनमाने ध्रुवीकरण अवस्था को दर्शाने वाला समीकरण जिसमें दो लंबवत घटक एवं सापेक्ष कलान्तर δ होता है।",
        "bn": "যেকোনো সমবর্তন অবস্থাকে দুটি লম্ব উপাংশ এবং আপেক্ষিক দশা পার্থক্য δ দ্বারা প্রকাশের সমীকরণ।"
      },
      "variables": [
        { "symbol": "E_0x", "name": { "en": "Peak x-component amplitude (V/m)", "hi": "x-घटक का शिखर आयाम", "bn": "x-উপাংশের শীর্ষ বিস্তার" } },
        { "symbol": "E_0y", "name": { "en": "Peak y-component amplitude (V/m)", "hi": "y-घटक का शिखर आयाम", "bn": "y-উপাংশের শীর্ষ বিস্তার" } },
        { "symbol": "δ", "name": { "en": "Phase difference δ = φ_y - φ_x (radians)", "hi": "कलान्तर (रेडियन)", "bn": "দশা পার্থক্য (রেডিয়ান)" } },
        { "symbol": "β", "name": { "en": "Phase constant β = 2π / λ (rad/m)", "hi": "कला नियतांक", "bn": "দশা ধ্রুবক" } }
      ]
    },
    {
      "id": "f-axial-ratio",
      "symbol": "AR",
      "expression": "AR = (Major Semi-Axis OA) / (Minor Semi-Axis OB) ≥ 1,   AR(dB) = 20 log₁₀(AR)",
      "title": {
        "en": "Axial Ratio (AR) of Polarization Ellipse",
        "hi": "ध्रुवीकरण दीर्घवृत्त का अक्षीय अनुपात (AR)",
        "bn": "সমবর্তন উপবৃত্তের অক্ষীয় অনুপাত (AR)"
      },
      "description": {
        "en": "Figure of merit measuring polarization purity. AR = 1 (0 dB) for pure circular polarization, and AR = ∞ for linear polarization.",
        "hi": "ध्रुवीकरण शुद्धता का मापदंड। शुद्ध वृत्तीय ध्रुवीकरण के लिए AR = 1 (0 dB) तथा रेखीय ध्रुवीकरण के लिए AR = ∞ होता है।",
        "bn": "সমবর্তনের বিশুদ্ধতা পরিমাপক। বিশুদ্ধ বৃত্তীয় সমবর্তনে AR = ১ (০ dB) এবং রৈখিক সমবর্তনে AR = ∞।"
      },
      "variables": [
        { "symbol": "AR", "name": { "en": "Axial ratio (dimensionless, ≥ 1)", "hi": "अक्षीय अनुपात", "bn": "অক্ষীয় অনুপাত" } },
        { "symbol": "OA", "name": { "en": "Length of semi-major axis", "hi": "दीर्घ अर्ध-अक्ष की लंबाई", "bn": "অর্ধ-মুখ্য অক্ষের দৈর্ঘ্য" } },
        { "symbol": "OB", "name": { "en": "Length of semi-minor axis", "hi": "लघु अर्ध-अक्ष की लंबाई", "bn": "অর্ধ-গৌণ অক্ষের দৈর্ঘ্য" } }
      ]
    },
    {
      "id": "f-tilt-angle",
      "symbol": "ψ",
      "expression": "tan(2ψ) = [2 E_0x E_0y cos(δ)] / (E_0x² - E_0y²)",
      "title": {
        "en": "Tilt / Orientation Angle of Polarization Ellipse",
        "hi": "ध्रुवीकरण दीर्घवृत्त का झुकाव कोण (ψ)",
        "bn": "সমবর্তন উপবৃত্তের নতি কোণ (ψ)"
      },
      "description": {
        "en": "Angle of rotation of the major ellipse axis with respect to the horizontal x-axis (-π/2 ≤ ψ ≤ π/2).",
        "hi": "क्षैतिज x-अक्ष के सापेक्ष दीर्घवृत्त के मुख्य अक्ष का घूर्णन कोण।",
        "bn": "অনুভূমিক x-অক্ষের সাপেক্ষে উপবৃত্তের প্রধান অক্ষের ঘূর্ণন কোণ।"
      },
      "variables": [
        { "symbol": "ψ", "name": { "en": "Tilt angle (degrees or radians)", "hi": "झुकाव कोण", "bn": "নতি কোণ" } }
      ]
    },
    {
      "id": "f-plf-polarization-loss",
      "symbol": "PLF",
      "expression": "PLF = |e_w · e_a*|² = cos²(θ_m),   Loss(dB) = -10 log₁₀(PLF)",
      "title": {
        "en": "Polarization Loss Factor (PLF)",
        "hi": "ध्रुवीकरण हानि गुणांक (PLF)",
        "bn": "পোলারাইজেশন লস ফ্যাক্টর (PLF)"
      },
      "description": {
        "en": "Fraction of power transferred from an incoming electromagnetic wave to a receiving antenna due to alignment of their polarization unit vectors.",
        "hi": "आने वाली तरंग एवं ग्राही एंटीना के ध्रुवीकरण सदिशों के संरेखन के कारण स्थानांतरित शक्ति का अनुपात।",
        "bn": "আগত তরঙ্গ এবং গ্রাহক অ্যান্টেনার সমবর্তন ভেক্টরের মিলের কারণে সঞ্চালিত ক্ষমতার অনুপাত।"
      },
      "variables": [
        { "symbol": "PLF", "name": { "en": "Power transfer ratio (0 to 1)", "hi": "शक्ति स्थानांतरण अनुपात", "bn": "ক্ষমতা সঞ্চালন অনুপাত" } },
        { "symbol": "e_w", "name": { "en": "Unit polarization vector of incoming wave", "hi": "तरंग का एकांक ध्रुवीकरण सदिश", "bn": "তরঙ্গের একক সমবর্তন ভেক্টর" } },
        { "symbol": "e_a", "name": { "en": "Unit polarization vector of receiving antenna", "hi": "एंटीना का एकांक ध्रुवीकरण सदिश", "bn": "অ্যান্টেনার একক সমবর্তন ভেক্টর" } }
      ]
    }
  ],
  "sections": [
    {
      "id": "sec-polarization-mechanics",
      "title": {
        "en": "1. The Geometry of Transverse Field Polarization",
        "hi": "1. अनुप्रस्थ क्षेत्र ध्रुवीकरण की ज्यामिति",
        "bn": "১. অনুপ্রস্থ ক্ষেত্র সমবর্তনের জ্যামিতি"
      },
      "content": {
        "en": "Because uniform plane waves are strictly Transverse Electromagnetic (TEM), their electric field vector has no longitudinal z-component (E_z = 0) and is entirely confined to the orthogonal transverse (x-y) plane.\n\nAt any observation point along the propagation path, the x and y electric field components execute independent simple harmonic motions. As time advances, the resultant vector E(t) = E_x(t) a_x + E_y(t) a_y sweeps out a trajectory on the x-y plane, analogous to Lissajous figures in oscilloscopes.\n\nIf the two orthogonal components are in phase (δ = 0) or directly 180° out of phase (δ = π), the resultant vector maintains a fixed geometric orientation angle in space, simply breathing in and out in magnitude: this is Linear Polarization.\n\nWhen a 90° phase shift (quadrature, δ = ±90°) is introduced between equal-amplitude orthogonal components, the field magnitude remains completely constant: |E(t)| = √(E_0² cos²(ωt) + E_0² sin²(ωt)) = E_0. The vector rotates smoothly at angular frequency ω around a circle of radius E_0: this is Circular Polarization.",
        "hi": "चूंकि समतल तरंगें अनुप्रस्थ (TEM) होती हैं, अतः उनका विद्युत क्षेत्र संचरण दिशा z में शून्य होता है (E_z = 0) और केवल x-y तल में सीमित रहता है।\n\nदोनों लंबवत घटकों के दोलन से x-y तल में जो आकृति बनती है, वह ध्रुवीकरण कहलाती है। यदि दोनों घटक समान कला में हों (δ = 0) तो परिणामी सदिश एक निश्चित सीधी रेखा में रहता है—यह रेखीय ध्रुवीकरण है।\nयदि दोनों घटकों के आयाम बराबर हों और उनके बीच 90° का कलान्तर हो, तो विद्युत क्षेत्र का परिमाण स्थिर रहता है और वह एक समान वृत्त में घूमता है—यह वृत्तीय ध्रुवीकरण है।",
        "bn": "যেহেতু সমতল তরঙ্গ অনুপ্রস্থ (TEM), তাই এর তড়িৎ ক্ষেত্রের গতির অভিমুখে কোনো উপাংশ থাকে না (E_z = ০) এবং এটি সম্পূর্ণ x-y তলে সীমাবদ্ধ থাকে।\n\nx ও y উপাংশের পর্যায়বৃত্ত গতির ফলে x-y তলে তড়িৎ ক্ষেত্র ভেক্টর যে সঞ্চারপথ রচনা করে, তাই তরঙ্গের সমবর্তন। যদি দুটি উপাংশের দশা সমান হয় (δ = ০), তবে ভেক্টরটি নির্দিষ্ট সরলরেখায় থাকে—এটি রৈখিক সমবর্তন।\nযদি দুটি উপাংশের বিস্তার সমান এবং দশা পার্থক্য ৯০° হয়, তবে তড়িৎ ক্ষেত্রের মোট মান সর্বদা স্থির থাকে এবং তা বৃত্তাকার পথে ঘোরে—এটি বৃত্তীয় সমবর্তন।"
      },
      "schematicId": "circuit-ch11-wave-polarization"
    },
    {
      "id": "sec-handedness-rhcp-lhcp",
      "title": {
        "en": "2. IEEE Handedness Conventions: RHCP vs LHCP",
        "hi": "2. IEEE दक्षिणावर्त एवं वामावर्त नियम: RHCP बनाम LHCP",
        "bn": "২. আইইইই নিয়ম: ডানহাতি (RHCP) বনাম বামহাতি (LHCP)"
      },
      "content": {
        "en": "Handedness determination requires strict adherence to international engineering standards (IEEE Standard 145-1993 for Definitions of Terms for Antennas):\n\nRule: Align your thumb in the direction of wave propagation (+z axis). Look at the wave as it travels away from you:\n• If the electric vector rotates in the direction of your right-hand fingers (clockwise), the wave is Right-Hand Circularly Polarized (RHCP).\n• If the electric vector rotates in the direction of your left-hand fingers (counter-clockwise), the wave is Left-Hand Circularly Polarized (LHCP).\n\nMathematical signature:\n• For wave propagating along +z:\n  E(z, t) = E_0 [cos(ωt - βz) a_x + sin(ωt - βz) a_y]  ⟹  LHCP (counter-clockwise at z=0: x = cos, y = sin).\n  E(z, t) = E_0 [cos(ωt - βz) a_x - sin(ωt - βz) a_y]  ⟹  RHCP (clockwise at z=0: x = cos, y = -sin).\n\nCrucial Antenna Rule: An RHCP receiving antenna cannot receive an LHCP wave! The theoretical isolation is infinite (PLF = 0), which enables satellite systems (such as GPS, Starlink, DTH TV) to reuse the exact same frequency band twice by transmitting RHCP on one channel and LHCP on another (polarization frequency reuse).",
        "hi": "IEEE मानक 145-1993 के अनुसार दक्षिणावर्त एवं वामावर्त ध्रुवीकरण का निर्धारण किया जाता है:\n\nनियम: अपना अंगूठा तरंग संचरण दिशा (+z) में रखें। यदि विद्युत क्षेत्र दाहिने हाथ की उंगलियों की दिशा (घड़ी की दिशा) में घूमता है, तो यह RHCP है। यदि यह बाएं हाथ की उंगलियों की दिशा में घूमता है, तो यह LHCP है।\n\nमहत्वपूर्ण एंटीना नियम: एक RHCP एंटीना LHCP तरंग को ग्रहण नहीं कर सकता (हानि = अनंत dB)। उपग्रह संचार (जैसे GPS, DTH टीवी) में एक ही आवृत्ति पर दोहरे चैनल भेजने के लिए RHCP और LHCP दोनों का उपयोग किया जाता है।",
        "bn": "আইইইই মান অনুযায়ী সমবর্তনের ঘূর্ণন দিক নির্ধারণ করা হয়:\n\nনিয়ম: আপনার বুড়ো আঙুল তরঙ্গের গতি অভিমুখে (+z) স্থাপন করুন। তড়িৎ ক্ষেত্র যদি ডান হাতের আঙুলের দিকে (ক্লকওয়াইজ) ঘোরে, তবে তা RHCP। আর যদি বাম হাতের আঙুলের দিকে (অ্যান্টি-ক্লকওয়াইজ) ঘোরে, তবে তা LHCP।\n\nঅ্যান্টেনার কার্যনীতি: একটি RHCP অ্যান্টেনা কখনোই LHCP তরঙ্গ গ্রহণ করতে পারে না। উপগ্রহ যোগাযোগে (যেমন জিপিএস ও স্যাটেলাইট টিভি) একই ফ্রিকোয়েন্সিতে দুটি আলাদা চ্যানেল প্রেরণে RHCP ও LHCP ব্যবহৃত হয়।"
      }
    }
  ],
  "diagrams": [
    {
      "id": "diag-ch11-wave-polarization",
      "title": {
        "en": "Lissajous Polarization Locus: Linear, Circular (RHCP/LHCP) & Elliptical",
        "hi": "लिस्साजू ध्रुवीकरण प्रक्षेपवक्र: रेखीय, वृत्तीय (RHCP/LHCP) एवं दीर्घवृत्तीय",
        "bn": "লিসাজাস সমবর্তন সঞ্চারপথ: রৈখিক, বৃত্তীয় (RHCP/LHCP) ও উপবৃত্তীয়"
      },
      "caption": {
        "en": "Electric field locus in the transverse x-y plane comparing linear alignment (δ = 0°), circular rotation (equal amplitudes, δ = 90°), and tilted elliptical locus with axial ratio AR and tilt angle ψ.",
        "hi": "अनुप्रस्थ x-y तल में विद्युत क्षेत्र का प्रक्षेपवक्र: रेखीय (δ = 0°), वृत्तीय (समान आयाम, δ = 90°) तथा अक्षीय अनुपात AR एवं झुकाव कोण ψ युक्त दीर्घवृत्त।",
        "bn": "অনুপ্রস্থ x-y তলে তড়িৎ ক্ষেত্রের সঞ্চারপথ: রৈখিক (δ = ০°), বৃত্তীয় (সমান বিস্তার, δ = ৯০°) এবং অক্ষীয় অনুপাত AR ও নতি কোণ ψ সহ উপবৃত্ত।"
      },
      "svgType": "circuit-ch11-wave-polarization"
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-ch11-l08-01",
      "problem": {
        "en": "An electromagnetic wave propagating in free space has the phasor electric field: E(z) = [ (4 - j3) a_x + (3 + j4) a_y ] e^(-j β z) V/m. (a) Determine the amplitude of the x and y components. (b) Find the phase difference between the components. (c) Identify the exact polarization state and handedness.",
        "hi": "मुक्त अंतरिक्ष में संचरित तरंग का फेजर विद्युत क्षेत्र E(z) = [ (4 - j3) ax + (3 + j4) ay ] e^(-jβz) V/m है। (a) x एवं y घटकों का आयाम ज्ञात कीजिए। (b) कलान्तर ज्ञात कीजिए। (c) ध्रुवीकरण अवस्था एवं दिशा की पहचान कीजिए।",
        "bn": "শূন্য মাধ্যমে সঞ্চালনরত একটি তরঙ্গের ফেজর তড়িৎ ক্ষেত্র E(z) = [ (৪ - j৩) ax + (৩ + j৪) ay ] e^(-jβz) V/m। (a) x ও y উপাংশের বিস্তার নির্ণয় করুন। (b) দশা পার্থক্য নির্ণয় করুন। (c) সুনির্দিষ্ট সমবর্তন অবস্থা ও দিক চিহ্নিত করুন।"
      },
      "solution": {
        "en": "Step 1: Express each phasor in polar form (magnitude and phase angle):\n• E_x0 = 4 - j3 ⟹ |E_x0| = √(4² + (-3)²) = √(16 + 9) = √25 = 5.0 V/m.\n  Phase angle φ_x = arctan(-3 / 4) = -36.87° (-0.6435 rad).\n• E_y0 = 3 + j4 ⟹ |E_y0| = √(3² + 4²) = √(9 + 16) = √25 = 5.0 V/m.\n  Phase angle φ_y = arctan(4 / 3) = +53.13° (+0.9273 rad).\n\nStep 2: Check amplitude equality:\n|E_x0| = |E_y0| = 5.0 V/m. Condition (a) for circular polarization is fully satisfied.\n\nStep 3: Calculate the relative phase difference δ = φ_y - φ_x:\nδ = 53.13° - (-36.87°) = +90.0° (+π/2 rad).\nCondition (b) for circular polarization is satisfied (quadrature phase).\n\nStep 4: Determine handedness:\nBecause δ = +90°, the y-component leads the x-component by 90°. In the time domain:\nE_x(t) = 5 cos(ωt - 36.87°)\nE_y(t) = 5 cos(ωt + 53.13°) = -5 sin(ωt - 36.87°).\nAs time increases, the vector tip rotates counter-clockwise when viewed looking along the +z propagation direction. Hence, the wave is Left-Hand Circularly Polarized (LHCP).",
        "hi": "चरण 1: ध्रुवीय रूप में मान निकालें:\n|E_x0| = √(4² + 3²) = 5 V/m, कोण φ_x = -36.87°।\n|E_y0| = √(3² + 4²) = 5 V/m, कोण φ_y = +53.13°।\n\nचरण 2: आयाम की तुलना:\n|E_x0| = |E_y0| = 5 V/m (समान आयाम)।\n\nचरण 3: कलान्तर:\nδ = φ_y - φ_x = 53.13° - (-36.87°) = +90°।\n\nचरण 4: निष्कर्ष:\nचूंकि आयाम समान हैं और कलान्तर +90° है, अतः यह वामावर्त वृत्तीय ध्रुवीकृत (LHCP) तरंग है।",
        "bn": "ধাপ ১: পোলার মানে রূপান্তর:\n|E_x0| = √(৪² + ৩²) = ৫ V/m, কোণ φ_x = -৩৬.৮৭°।\n|E_y0| = √(৩² + ৪²) = ৫ V/m, কোণ φ_y = +৫৩.১৩°।\n\nধাপ ২: বিস্তার সমান: |E_x0| = |E_y0| = ৫ V/m।\n\nধাপ ৩: দশা পার্থক্য: δ = ৫৩.১৩° - (-৩৬.৮৭°) = +৯০°।\n\nধাপ ৪: সিদ্ধান্ত: বিস্তার সমান এবং দশা পার্থক্য +৯০° হওয়ায় এটি বামহাতি বৃত্তীয় সমবর্তিত (LHCP) তরঙ্গ।"
      }
    },
    {
      "id": "ex-ch11-l08-02",
      "problem": {
        "en": "A circularly polarized satellite broadcast wave carries power density 100 μW/m². A ground receiving station uses a half-wave dipole antenna that is linearly polarized. Calculate: (a) the Polarization Loss Factor (PLF), (b) the polarization loss in decibels (dB), and (c) the available power density captured by the dipole.",
        "hi": "एक वृत्तीय ध्रुवीकृत उपग्रह तरंग 100 μW/m² शक्ति घनत्व ले जा रही है। ग्राउंड स्टेशन रेखीय ध्रुवीकृत हाफ-वेव डाइपोल एंटीना का उपयोग करता है। ज्ञात कीजिए: (a) PLF, (b) dB में ध्रुवीकरण हानि, तथा (c) डाइपोल द्वारा ग्रहण किया गया शक्ति घनत्व।",
        "bn": "একটি বৃত্তীয় সমবর্তিত স্যাটেলাইট সম্প্রচার তরঙ্গ ১০০ μW/m² ক্ষমতা ঘনত্ব বহন করছে। ভূ-স্টেশনে একটি রৈখিক সমবর্তিত হাফ-ওয়েভ ডাইপোল অ্যান্টেনা ব্যবহৃত হচ্ছে। নির্ণয় করুন: (a) PLF, (b) ডেসিবেলে সমবর্তন অপচয়, এবং (c) অ্যান্টেনা কর্তৃক গৃহীত ক্ষমতা ঘনত্ব।"
      },
      "solution": {
        "en": "Step 1: Represent the wave and antenna unit polarization vectors:\nFor an RHCP or LHCP wave:\ne_w = (1 / √2) (a_x ± j a_y).\nFor a linearly polarized dipole aligned along the x-axis:\ne_a = a_x.\n\nStep 2: Compute Polarization Loss Factor (PLF):\nPLF = |e_w · e_a*|² = |(1 / √2) (a_x · a_x) |² = |1 / √2|² = 1/2 = 0.50.\n\nStep 3: Convert PLF to decibels:\nLoss(dB) = -10 log₁₀(PLF) = -10 log₁₀(0.5) = -10 (-0.3010) = 3.01 dB.\n\nStep 4: Calculate received power density:\nS_rec = PLF × S_inc = 0.50 × 100 μW/m² = 50 μW/m².\n\nConclusion: A linear antenna receives exactly half (-3 dB) of the power of a circularly polarized wave regardless of the antenna's roll angle, explaining why linear dipoles can receive satellite telemetry without precise rotational tracking.",
        "hi": "चरण 1: एकांक सदिश e_w = (ax ± j ay)/√2 तथा e_a = ax।\nचरण 2: PLF = |1/√2|² = 0.50 (50%)।\nचरण 3: हानि(dB) = -10 log₁₀(0.5) = 3.01 dB।\nचरण 4: प्राप्त शक्ति = 0.5 × 100 = 50 μW/m²।",
        "bn": "ধাপ ১: একক ভেক্টর e_w = (ax ± j ay)/√২ এবং e_a = ax।\nধাপ ২: PLF = |১/√২|² = ০.৫০ (৫০%)।\nধাপ ৩: অপচয়(dB) = -১০ log₁₀(০.৫) = ৩.০১ dB।\nধাপ ৪: গৃহীত ক্ষমতা = ০.৫ × ১০০ = ৫০ μW/m²।"
      }
    }
  ],
  "practicalApplications": {
    "en": [
      "GPS & Satellite Navigation: GPS L1/L2 signals use Right-Hand Circular Polarization (RHCP) to eliminate Faraday rotation fading caused by Earth's ionosphere.",
      "Polarized Sunglasses: Vertically polarized lenses block horizontally polarized glare reflected off roads, water, and snow.",
      "FM Radio & DTH Broadcasting: FM broadcast stations use circular polarization so car whip antennas receive equal power regardless of driving angle.",
      "3D Cinema Glasses: Modern 3D theaters use orthogonal circular polarizations (RHCP for right eye, LHCP for left eye) so tilting your head does not cause cross-eye ghosting.",
      "Radar Target Discrimination: Weather radars transmit dual linear (H and V) pulses to distinguish rain droplets (spherical) from hail and aircraft."
    ],
    "hi": [
      "जीपीएस एवं उपग्रह नेविगेशन: पृथ्वी के आयनमंडल में फैराडे घूर्णन प्रभाव से बचने के लिए GPS सिग्नलों में RHCP का उपयोग किया जाता है।",
      "ध्रुवीकृत धूप का चश्मा: पानी और सड़क से परावर्तित क्षैतिज चकाचौंध को रोकने के लिए ऊर्ध्वाधर ध्रुवीकृत लेंस का प्रयोग होता है।",
      "एफएम रेडियो प्रसारण: कारों में किसी भी दिशा में समान सिग्नल प्राप्त करने के लिए वृत्तीय ध्रुवीकरण प्रयुक्त होता है।",
      "3D सिनेमा चश्मा: सिर झुकाने पर भी 3D प्रभाव स्पष्ट रखने के लिए RHCP और LHCP वृत्तीय ध्रुवीकरण का उपयोग किया जाता है।",
      "मौसम रडार: बारिश की बूंदों और ओलों के बीच अंतर पहचानने के लिए दोहरे ध्रुवीकरण (Dual-Pol) रडार का उपयोग होता है।"
    ],
    "bn": [
      "জিপিএস স্যাটেলাইট নেভিগেশন: আয়নমণ্ডলের ফ্যারাডে ঘূর্ণন এড়াতে জিপিএস সংকেতে RHCP বৃত্তীয় সমবর্তন ব্যবহৃত হয়।",
      "পোলারাইজড সানগ্লাস: রাস্তা ও পানির উপরিভাগ থেকে প্রতিফলিত অনুভূমিক প্রতিফলন বা ঝলকানি দূর করতে উল্লম্ব ফিল্টার ব্যবহৃত হয়।",
      "এফএম রেডিও সম্প্রচার: চলন্ত গাড়িতে অ্যান্টেনার দিক পরিবর্তন সত্ত্বেও সংকেত স্থির রাখতে বৃত্তীয় সমবর্তন ব্যবহৃত হয়।",
      "থ্রি-ডি সিনেমা চশমা: মাথা নাড়ালেও পরিষ্কার ত্রিমাত্রিক ছবি দেখতে ডান ও বাম চোখের জন্য RHCP ও LHCP ফিল্টার ব্যবহৃত হয়।",
      "ওয়েদার রাডার: বৃষ্টি, শিলাবৃষ্টি ও মেঘের কণা আলাদা করতে ডুয়াল-পোলারাইজেশন রাডার ব্যবহৃত হয়।"
    ]
  },
  "importantPoints": {
    "en": [
      "Linear polarization requires phase difference δ = 0 or ±π, or one component must be zero.",
      "Circular polarization strictly requires equal orthogonal amplitudes (E_0x = E_0y) AND a 90° phase difference (δ = ±π/2).",
      "Axial Ratio (AR) equals 1 (0 dB) for circular, and ∞ for linear polarization.",
      "Polarization Loss Factor between orthogonal polarizations (e.g. vertical vs horizontal, or RHCP vs LHCP) is identically zero (-∞ dB).",
      "A linearly polarized antenna receiving a circularly polarized wave suffers an exact 3 dB (50%) power loss."
    ],
    "hi": [
      "रेखीय ध्रुवीकरण के लिए कलान्तर δ = 0 या ±π होना अनिवार्य है।",
      "वृत्तीय ध्रुवीकरण के लिए दोनों लंबवत घटकों का आयाम बराबर तथा कलान्तर ठीक 90° (δ = ±π/2) होना चाहिए।",
      "अक्षीय अनुपात (AR) वृत्तीय ध्रुवीकरण के लिए 1 (0 dB) तथा रेखीय ध्रुवीकरण के लिए अनंत होता है।",
      "परस्पर लंबवत ध्रुवीकरणों (जैसे RHCP एवं LHCP) के बीच शक्ति स्थानांतरण शून्य होता है।",
      "वृत्तीय तरंग को रेखीय एंटीना द्वारा ग्रहण करने पर ठीक 3 dB (50%) शक्ति की हानि होती है।"
    ],
    "bn": [
      "রৈখিক সমবর্তনের জন্য দশা পার্থক্য δ = ০ অথবা ±π হতে হবে।",
      "বৃত্তীয় সমবর্তনের জন্য উভয় লম্ব উপাংশের বিস্তার সমান এবং দশা পার্থক্য ঠিক ৯০° (δ = ±π/২) হতে হবে।",
      "অক্ষীয় অনুপাত (AR) বৃত্তীয় সমবর্তনে ১ (০ dB) এবং রৈখিক সমবর্তনে অসীম।",
      "পরস্পর লম্ব সমবর্তনের মধ্যে (যেমন RHCP বনাম LHCP) কোনো শক্তি সঞ্চালিত হয় না (০ ওয়াট)।",
      "একটি বৃত্তীয় তরঙ্গ রৈখিক অ্যান্টেনা দ্বারা গ্রহণ করলে ঠিক ৩ dB (৫০%) শক্তি অপচয় হয়।"
    ]
  },
  "commonMistakes": {
    "en": [
      "Assuming circular polarization only requires 90° phase difference, forgetting that orthogonal amplitudes must also be strictly equal (otherwise it is elliptical).",
      "Confusing LHCP and RHCP by looking in the wrong direction (IEEE standard looks in the direction of wave propagation).",
      "Thinking that cross-polarized antennas (e.g., vertical antenna receiving horizontal wave) can receive reduced signal—in theory, the coupling is identically zero.",
      "Confusing Axial Ratio (AR) with Standing Wave Ratio (SWR): AR measures polarization ellipticity, while SWR measures transmission line reflection."
    ],
    "hi": [
      "यह मान लेना कि केवल 90° कलान्तर से वृत्तीय ध्रुवीकरण बन जाता है, जबकि दोनों घटकों का आयाम भी बराबर होना आवश्यक है।",
      "गलत दिशा से देखकर RHCP और LHCP में भ्रमित होना (IEEE नियम तरंग संचरण की दिशा में देखने पर आधारित है)।",
      "यह सोचना कि लंबवत एंटीना क्षैतिज तरंग से थोड़ा सिग्नल पकड़ सकता है—सैद्धांतिक रूप से यह पूर्णतः शून्य होता है।",
      "अक्षीय अनुपात (AR) और स्थायी तरंग अनुपात (SWR) को एक ही समझना।"
    ],
    "bn": [
      "ভুল ধারণা যে শুধু ৯০° দশা পার্থক্য থাকলেই বৃত্তীয় সমবর্তন হবে, বিস্তার সমান না হলে তা উপবৃত্তীয় হয়ে যায়।",
      "ভুল দিক থেকে পর্যবেক্ষণ করে RHCP ও LHCP গুলিয়ে ফেলা (আইইইই নিয়মে তরঙ্গের গতির দিকে তাকাতে হয়)।",
      "মনে করা যে আড়াআড়ি সমবর্তনে কিছুটা সংকেত পাওয়া যায়—তাত্ত্বিকভাবে এটি সম্পূর্ণ শূন্য।",
      "অক্ষীয় অনুপাত (AR) এবং স্থায়ী তরঙ্গ অনুপাত (SWR) কে একই মনে করা।"
    ]
  },
  "keyTakeaways": {
    "en": [
      "Polarization defines the spatial orientation and motion of the electric field vector in the transverse plane.",
      "All polarization states are special cases of elliptical polarization, characterized by Axial Ratio (AR) and Tilt Angle (ψ).",
      "Circular polarization provides orientation-independent reception, vital for mobile and aerospace systems.",
      "Polarization matching between transmitting wave and receiving antenna is vital to avoid devastating cross-polarization dropouts."
    ],
    "hi": [
      "ध्रुवीकरण अनुप्रस्थ तल में विद्युत क्षेत्र सदिश के स्थानिक अभिविन्यास और घूर्णन को दर्शाता है।",
      "सभी ध्रुवीकरण अवस्थाएं दीर्घवृत्तीय ध्रुवीकरण की ही विशेष स्थितियां हैं।",
      "वृत्तीय ध्रुवीकरण मोबाइल और उपग्रह संचार में कोण-मुक्त सिग्नल रिसेप्शन प्रदान करता है।",
      "सिग्नल के पूर्ण ह्रास से बचने के लिए एंटीना और तरंग का ध्रुवीकरण सुमेलित होना आवश्यक है।"
    ],
    "bn": [
      "সমবর্তন হলো অনুপ্রস্থ তলে তড়িৎ ক্ষেত্র ভেক্টরের স্থানিক দিক এবং ঘূর্ণন আচরণ।",
      "সকল সমবর্তন মূলত উপবৃত্তীয় সমবর্তনের বিশেষ রূপ, যা অক্ষীয় অনুপাত (AR) দ্বারা নির্ধারিত হয়।",
      "বৃত্তীয় সমবর্তন যেকোনো কোণে সমান সংকেত গ্রহণের সুবিধা দেয়, যা স্যাটেলাইট যোগাযোগের জন্য অপরিহার্য।",
      "তীব্র সংকেত অপচয় রোধে প্রেরক তরঙ্গ ও গ্রাহক অ্যান্টেনার সমবর্তন মেলানো অত্যন্ত জরুরি।"
    ]
  },
  "mcqs": [
    {
      "id": "mcq-ch11-l08-01",
      "question": {
        "en": "What conditions must be satisfied simultaneously for an electromagnetic wave to be circularly polarized?",
        "hi": "किसी विद्युत चुंबकीय तरंग के वृत्तीय ध्रुवीकृत होने के लिए कौन सी शर्तें एक साथ पूरी होनी चाहिए?",
        "bn": "একটি তড়িৎচৌম্বক তরঙ্গের বৃত্তীয় সমবর্তিত হওয়ার জন্য কোন শর্তগুলি একসাথে পূরণ হতে হবে?"
      },
      "options": [
        { "id": "opt-1", "text": { "en": "Equal orthogonal amplitudes and 0° phase difference", "hi": "समान लंबवत आयाम और 0° कलान्तर", "bn": "সমান লম্ব বিস্তার এবং ০° দশা পার্থক্য" } },
        { "id": "opt-2", "text": { "en": "Equal orthogonal amplitudes and 90° (π/2) phase difference", "hi": "समान लंबवत आयाम और 90° (π/2) कलान्तर", "bn": "সমান লম্ব বিস্তার এবং ৯০° (π/২) দশা পার্থক্য" } },
        { "id": "opt-3", "text": { "en": "Unequal orthogonal amplitudes and 90° phase difference", "hi": "असमान लंबवत आयाम और 90° कलान्तर", "bn": "অসমান লম্ব বিস্তার এবং ৯০° দশা পার্থক্য" } },
        { "id": "opt-4", "text": "Equal amplitudes and 180° phase difference" }
      ],
      "correctOptionId": "opt-2",
      "explanation": {
        "en": "Circular polarization requires both: (1) equal orthogonal amplitudes (E_0x = E_0y), and (2) phase difference δ = ±90° (quadrature).",
        "hi": "वृत्तीय ध्रुवीकरण के लिए दोनों शर्तें आवश्यक हैं: (1) समान आयाम (E_0x = E_0y), और (2) कलान्तर δ = ±90°।",
        "bn": "বৃত্তীয় সমবর্তনের জন্য দুটি শর্তই আবশ্যক: (১) সমান লম্ব বিস্তার (E_0x = E_0y), এবং (২) দশা পার্থক্য δ = ±৯০°।"
      }
    },
    {
      "id": "mcq-ch11-l08-02",
      "question": {
        "en": "What is the Axial Ratio (AR) of a purely circularly polarized wave?",
        "hi": "एक शुद्ध वृत्तीय ध्रुवीकृत तरंग का अक्षीय अनुपात (AR) कितना होता है?",
        "bn": "একটি বিশুদ্ধ বৃত্তীয় সমবর্তিত তরঙ্গের অক্ষীয় অনুপাত (AR) কত?"
      },
      "options": [
        { "id": "opt-1", "text": { "en": "0 (or -∞ dB)", "hi": "0 (या -∞ dB)", "bn": "০ (বা -∞ dB)" } },
        { "id": "opt-2", "text": { "en": "1 (or 0 dB)", "hi": "1 (या 0 dB)", "bn": "১ (বা ০ dB)" } },
        { "id": "opt-3", "text": { "en": "√2 (or 3 dB)", "hi": "√2 (या 3 dB)", "bn": "√২ (বা ৩ dB)" } },
        { "id": "opt-4", "text": { "en": "Infinity (∞)", "hi": "अनंत (∞)", "bn": "অসীম (∞)" } }
      ],
      "correctOptionId": "opt-2",
      "explanation": {
        "en": "For a circle, major axis = minor axis = radius, so AR = Major / Minor = 1. In decibels: 20 log₁₀(1) = 0 dB.",
        "hi": "वृत्त के लिए दीर्घ अक्ष और लघु अक्ष दोनों त्रिज्या के बराबर होते हैं, अतः AR = 1 (0 dB)।",
        "bn": "বৃত্তের ক্ষেত্রে মুখ্য অক্ষ ও গৌণ অক্ষ সমান হওয়ায় AR = ১ (বা ০ dB)।"
      }
    },
    {
      "id": "mcq-ch11-l08-03",
      "question": {
        "en": "If a wave's electric field is given by E(z, t) = [3 cos(ωt - βz) ax - 3 cos(ωt - βz) ay] V/m, what is its polarization?",
        "hi": "यदि विद्युत क्षेत्र E(z, t) = [3 cos(ωt - βz) ax - 3 cos(ωt - βz) ay] V/m है, तो इसका ध्रुवीकरण क्या है?",
        "bn": "যদি তড়িৎ ক্ষেত্র E(z, t) = [৩ cos(ωt - βz) ax - ৩ cos(ωt - βz) ay] V/m হয়, তবে এর সমবর্তন কী রূপ?"
      },
      "options": [
        { "id": "opt-1", "text": { "en": "Right-hand circular", "hi": "दक्षिणावर्त वृत्तीय", "bn": "ডানহাতি বৃত্তীয়" } },
        { "id": "opt-2", "text": { "en": "Left-hand circular", "hi": "वामावर्त वृत्तीय", "bn": "বামহাতি বৃত্তীয়" } },
        { "id": "opt-3", "text": { "en": "Linear, oriented at -45° to the x-axis", "hi": "रेखीय, x-अक्ष से -45° पर स्थित", "bn": "রৈখিক, x-অক্ষের সাথে -৪৫° কোণে" } },
        { "id": "opt-4", "text": { "en": "Elliptical", "hi": "दीर्घवृत्तीय", "bn": "উপবৃত্তীয়" } }
      ],
      "correctOptionId": "opt-3",
      "explanation": {
        "en": "Both components share the exact same temporal phase (with a minus sign meaning δ = 180°). The ratio E_y / E_x = -1 is constant at all times, tracing a straight line tilted at -45°.",
        "hi": "दोनों घटकों की कला समान है (ऋणात्मक चिन्ह अर्थात 180° कलान्तर)। E_y / E_x = -1 सदैव स्थिर रहता है, अतः यह -45° पर रेखीय ध्रुवीकृत है।",
        "bn": "উভয় উপাংশের দশা একই এবং অনুপাত E_y / E_x = -১ সর্বদা অপরিবর্তিত থাকে, ফলে এটি -৪৫° কোণে রৈখিক সমবর্তিত।"
      }
    },
    {
      "id": "mcq-ch11-l08-04",
      "question": {
        "en": "What is the theoretical power received when an RHCP antenna is illuminated by a pure LHCP wave?",
        "hi": "जब एक RHCP एंटीना पर शुद्ध LHCP तरंग आपतित होती है, तो सैद्धांतिक रूप से कितनी शक्ति प्राप्त होगी?",
        "bn": "একটি RHCP অ্যান্টেনার ওপর বিশুদ্ধ LHCP তরঙ্গ আপতিত হলে তাত্ত্বিকভাবে কত ক্ষমতা গৃহীত হবে?"
      },
      "options": [
        { "id": "opt-1", "text": { "en": "100% of incident power", "hi": "आपतित शक्ति का 100%", "bn": "আপতিত ক্ষমতার ১০০%" } },
        { "id": "opt-2", "text": { "en": "50% (-3 dB)", "hi": "50% (-3 dB)", "bn": "৫০% (-৩ dB)" } },
        { "id": "opt-3", "text": { "en": "0% (infinite cross-polarization loss)", "hi": "0% (अनंत क्रॉस-ध्रुवीकरण हानि)", "bn": "০% (সম্পূর্ণ বিচ্ছিন্নতা)" } },
        { "id": "opt-4", "text": { "en": "70.7% (-1.5 dB)", "hi": "70.7% (-1.5 dB)", "bn": "৭০.৭% (-১.৫ dB)" } }
      ],
      "correctOptionId": "opt-3",
      "explanation": {
        "en": "RHCP and LHCP are completely orthogonal polarization states. Their inner product is zero, resulting in PLF = 0 (total cross-polarization isolation).",
        "hi": "RHCP और LHCP परस्पर लंबवत ध्रुवीकरण अवस्थाएं हैं। इनका आंतरिक गुणनफल शून्य होता है, अतः शक्ति स्थानांतरण 0% होता है।",
        "bn": "RHCP এবং LHCP পরস্পর অর্থোগোনাল সমবর্তন অবস্থা। এদের গুণফল শূন্য হওয়ায় গৃহীত ক্ষমতা ০%।"
      }
    },
    {
      "id": "mcq-ch11-l08-05",
      "question": {
        "en": "Why do GPS satellites transmit Right-Hand Circularly Polarized (RHCP) waves rather than linearly polarized waves?",
        "hi": "GPS उपग्रह रेखीय ध्रुवीकृत तरंगों के बजाय RHCP तरंगें क्यों प्रसारित करते हैं?",
        "bn": "জিপিএস স্যাটেলাইট রৈখিক তরঙ্গের পরিবর্তে RHCP তরঙ্গ কেন সম্প্রচার করে?"
      },
      "options": [
        { "id": "opt-1", "text": { "en": "Circular waves travel faster through space than linear waves", "hi": "वृत्तीय तरंगें अंतरिक्ष में रेखीय तरंगों से तेज चलती हैं", "bn": "বৃত্তীয় তরঙ্গ মহাশূন্যে রৈখিক তরঙ্গের চেয়ে দ্রুত চলে" } },
        { "id": "opt-2", "text": { "en": "To overcome ionospheric Faraday rotation and avoid receiver orientation dependency", "hi": "आयनमंडलीय फैराडे घूर्णन को निष्प्रभावी करने तथा रिसीवर अभिविन्यास पर निर्भरता समाप्त करने हेतु", "bn": "আয়নমণ্ডলের ফ্যারাডে ঘূর্ণন দূর করতে এবং রিসিভারের কোণ পরিবর্তনের প্রভাব এড়াতে" } },
        { "id": "opt-3", "text": { "en": "Circular waves have zero attenuation in rain", "hi": "बारिश में वृत्तीय तरंगों का क्षीणन शून्य होता है", "bn": "বৃষ্টিতে বৃত্তীয় তরঙ্গের কোনো ক্ষয় হয় না" } },
        { "id": "opt-4", "text": { "en": "To reduce satellite transmitter power by 90%", "hi": "उपग्रह ट्रांसमीटर शक्ति को 90% घटाने के लिए", "bn": "স্যাটেলাইটের শক্তি ৯০% কমাতে" } }
      ],
      "correctOptionId": "opt-2",
      "explanation": {
        "en": "Faraday rotation in Earth's magnetized ionosphere unpredictably rotates the angle of linear waves, which would cause severe fading. Circular polarization is immune to rotation angle fading.",
        "hi": "आयनमंडल में फैराडे प्रभाव रेखीय तरंग के ध्रुवीकरण कोण को घुमा देता है जिससे सिग्नल गायब हो सकता है। वृत्तीय ध्रुवीकरण इस प्रभाव से अप्रभावित रहता है।",
        "bn": "আয়নমণ্ডলে ফ্যারাডে ঘূর্ণনের ফলে রৈখিক তরঙ্গের কোণ বদলে যায়। বৃত্তীয় সমবর্তন ব্যবহারে এই সিগন্যাল ক্ষয় এড়ানো সম্ভব হয়।"
      }
    },
    {
      "id": "mcq-ch11-l08-06",
      "question": {
        "en": "A linearly polarized dipole antenna receives a circularly polarized wave. What is the polarization mismatch loss?",
        "hi": "एक रेखीय ध्रुवीकृत डाइपोल एंटीना एक वृत्तीय तरंग ग्रहण करता है। ध्रुवीकरण असुमेलन हानि कितनी होगी?",
        "bn": "একটি রৈখিক ডাইপোল অ্যান্টেনা বৃত্তীয় তরঙ্গ গ্রহণ করলে সমবর্তন অমিলজনিত অপচয় কত?"
      },
      "options": [
        { "id": "opt-1", "text": { "en": "0 dB (no loss)", "hi": "0 dB (कोई हानि नहीं)", "bn": "০ dB (কোনো অপচয় নেই)" } },
        { "id": "opt-2", "text": { "en": "3.01 dB (half power)", "hi": "3.01 dB (आधी शक्ति)", "bn": "৩.০১ dB (অর্ধেক ক্ষমতা)" } },
        { "id": "opt-3", "text": { "en": "6.02 dB (quarter power)", "hi": "6.02 dB (चौथाई शक्ति)", "bn": "৬.০২ dB (এক-চতুর্থাংশ ক্ষমতা)" } },
        { "id": "opt-4", "text": { "en": "Infinite dB (total loss)", "hi": "अनंत dB (पूर्ण हानि)", "bn": "অসীম dB (সম্পূর্ণ অপচয়)" } }
      ],
      "correctOptionId": "opt-2",
      "explanation": {
        "en": "PLF = |(1/√2) (ax · ax)|² = 0.5. In decibels: -10 log₁₀(0.5) = 3.01 dB (exactly half power).",
        "hi": "PLF = 0.5 होता है, जो -10 log₁₀(0.5) = 3.01 dB (ठीक आधी शक्ति) के बराबर है।",
        "bn": "PLF = ০.৫, যা ডেসিবেলে -১০ log₁₀(০.৫) = ৩.০১ dB (ঠিক অর্ধেক ক্ষমতা)।"
      }
    },
    {
      "id": "mcq-ch11-l08-07",
      "question": {
        "en": "If E_0x = 10 V/m, E_0y = 5 V/m, and phase difference δ = 90°, the wave is:",
        "hi": "यदि E_0x = 10 V/m, E_0y = 5 V/m तथा कलान्तर δ = 90° हो, तो तरंग है:",
        "bn": "যদি E_0x = ১০ V/m, E_0y = ৫ V/m এবং দশা পার্থক্য δ = ৯০° হয়, তবে তরঙ্গটি:"
      },
      "options": [
        { "id": "opt-1", "text": { "en": "Circularly polarized", "hi": "वृत्तीय ध्रुवीकृत", "bn": "বৃত্তীয় সমবর্তিত" } },
        { "id": "opt-2", "text": { "en": "Linearly polarized", "hi": "रेखीय ध्रुवीकृत", "bn": "রৈখিক সমবর্তিত" } },
        { "id": "opt-3", "text": { "en": "Elliptically polarized with major axis along x", "hi": "दीर्घवृत्तीय ध्रुवीकृत जिसका मुख्य अक्ष x के अनुदिश है", "bn": "উপবৃত্তীয় সমবর্তিত যার মুখ্য অক্ষ x বরাবর" } },
        { "id": "opt-4", "text": { "en": "Unpolarized", "hi": "अध्रुवीकृत", "bn": "অসমবর্তিত" } }
      ],
      "correctOptionId": "opt-3",
      "explanation": {
        "en": "Because δ = 90° but the amplitudes are unequal (E_0x ≠ E_0y), the trajectory is an ellipse aligned with the coordinate axes, with major axis = 10 V/m along x.",
        "hi": "चूंकि कलान्तर 90° है परंतु आयाम असमान हैं (10 ≠ 5), अतः यह दीर्घवृत्तीय ध्रुवीकृत तरंग है जिसका मुख्य अक्ष x के अनुदिश है।",
        "bn": "যেহেতু দশা পার্থক্য ৯০° কিন্তু বিস্তার অসমান (১০ ≠ ৫), তাই এটি উপবৃত্তীয় সমবর্তিত তরঙ্গ যার মুখ্য অক্ষ x বরাবর।"
      }
    },
    {
      "id": "mcq-ch11-l08-08",
      "question": {
        "en": "What is the polarization state of light reflected off a flat glass surface at Brewster's angle?",
        "hi": "ब्रूस्टर कोण पर सपाट कांच की सतह से परावर्तित प्रकाश की ध्रुवीकरण अवस्था क्या होती है?",
        "bn": "ব্রূস্টার কোণে সমতল কাচের পৃষ্ঠ থেকে প্রতিফলিত আলোর সমবর্তন অবস্থা কী?"
      },
      "options": [
        { "id": "opt-1", "text": { "en": "100% Circularly polarized", "hi": "100% वृत्तीय ध्रुवीकृत", "bn": "১০০% বৃত্তীয় সমবর্তিত" } },
        { "id": "opt-2", "text": { "en": "100% Linearly polarized perpendicular to the plane of incidence", "hi": "आपतन तल के लंबवत 100% रेखीय ध्रुवीकृत", "bn": "আপাতন তলের সাথে লম্বভাবে ১০০% রৈখিক সমবর্তিত" } },
        { "id": "opt-3", "text": { "en": "100% Linearly polarized parallel to the plane of incidence", "hi": "आपतन तल के समानांतर 100% रेखीय ध्रुवीकृत", "bn": "আপাতন তলের সমান্তরালে ১০০% রৈখিক সমবর্তিত" } },
        { "id": "opt-4", "text": { "en": "Completely unpolarized", "hi": "पूर्णतः अध्रुवीकृत", "bn": "সম্পূর্ণ অসমবর্তিত" } }
      ],
      "correctOptionId": "opt-2",
      "explanation": {
        "en": "At Brewster's angle, parallel (TM) polarized light undergoes zero reflection (100% transmitted). Consequently, the reflected wave consists purely of perpendicular (TE / s-pol) linearly polarized light.",
        "hi": "ब्रूस्टर कोण पर समांतर (TM) ध्रुवीकृत प्रकाश का परावर्तन शून्य होता है, अतः परावर्तित प्रकाश 100% लंबवत (TE) रेखीय ध्रुवीकृत होता है।",
        "bn": "ব্রূস্টার কোণে সমান্তরাল (TM) আলোর প্রতিফলন শূন্য হয়, ফলে প্রতিফলিত আলো বিশুদ্ধভাবে আপাতন তলের লম্ব বরাবর রৈখিক সমবর্তিত হয়।"
      }
    }
  ],
  "practiceQuestions": [
    {
      "id": "pq-ch11-l08-01",
      "question": {
        "en": "A uniform plane wave has electric field E(z, t) = 20 cos(ωt - βz) ax + 20 sin(ωt - βz) ay V/m. Identify: (a) the polarization state, (b) the handedness, (c) the axial ratio in dB, and (d) the instantaneous magnitude of E.",
        "hi": "विद्युत क्षेत्र E(z, t) = 20 cos(ωt - βz) ax + 20 sin(ωt - βz) ay V/m है। ज्ञात कीजिए: (a) ध्रुवीकरण अवस्था, (b) घूर्णन दिशा, (c) dB में अक्षीय अनुपात, तथा (d) तात्क्षणिक परिमाण।",
        "bn": "তড়িৎ ক্ষেত্র E(z, t) = ২০ cos(ωt - βz) ax + ২০ sin(ωt - βz) ay V/m। নির্ণয় করুন: (a) সমবর্তন অবস্থা, (b) ঘূর্ণনের দিক, (c) dB এককে অক্ষীয় অনুপাত, এবং (d) তাৎক্ষণিক মান।"
      },
      "hint": {
        "en": "sin(θ) = cos(θ - π/2). Calculate |E| = √(Ex² + Ey²). For handedness, evaluate at z = 0 as t advances.",
        "hi": "sin(θ) = cos(θ - π/2)। |E| = √(20² cos² + 20² sin²) = 20 V/m।",
        "bn": "sin(θ) = cos(θ - π/২)। |E| = √(২০² cos² + ২০² sin²) = ২০ V/m।"
      },
      "answerKey": {
        "en": "(a) Circularly polarized. (b) Left-Hand Circularly Polarized (LHCP) because y leads x by +90°. (c) Axial ratio AR = 1.0 (0 dB). (d) Instantaneous magnitude |E(t)| = √(20² cos² + 20² sin²) = 20.0 V/m (constant at all times).",
        "hi": "(a) वृत्तीय ध्रुवीकृत; (b) LHCP (वामावर्त); (c) AR = 0 dB; (d) |E| = 20 V/m (स्थिर)।",
        "bn": "(a) বৃত্তীয় সমবর্তিত; (b) LHCP (বামহাতি); (c) AR = ০ dB; (d) |E| = ২০ V/m (সর্বদা স্থির)।"
      }
    },
    {
      "id": "pq-ch11-l08-02",
      "question": {
        "en": "A transmitter antenna emits an elliptically polarized wave with major semi-axis 12 V/m and minor semi-axis 4 V/m. Calculate: (a) the Axial Ratio (AR) in linear and decibel units, and (b) whether this wave would qualify as circularly polarized under commercial antenna specifications requiring AR < 3 dB.",
        "hi": "एक एंटीना 12 V/m दीर्घ अक्ष और 4 V/m लघु अक्ष वाली दीर्घवृत्तीय तरंग उत्सर्जित करता है। ज्ञात कीजिए: (a) अक्षीय अनुपात (AR) रैखिक एवं dB में, तथा (b) क्या यह AR < 3 dB की वाणिज्यिक शर्त पूरी करता है?",
        "bn": "একটি অ্যান্টেনা ১২ V/m বৃহৎ অক্ষ এবং ৪ V/m ক্ষুদ্র অক্ষ বিশিষ্ট উপবৃত্তীয় তরঙ্গ নির্গমন করে। নির্ণয় করুন: (a) রৈখিক ও dB এককে অক্ষীয় অনুপাত (AR), এবং (b) এটি বাণিজ্যিক AR < ৩ dB মানদণ্ড পূরণ করে কি না।"
      },
      "hint": {
        "en": "AR = Major / Minor. AR(dB) = 20 log₁₀(AR). Compare with 3 dB threshold.",
        "hi": "AR = 12 / 4 = 3.0। AR(dB) = 20 log₁₀(3)।",
        "bn": "AR = ১২ / ৪ = ৩.০। AR(dB) = ২০ log₁₀(৩)।"
      },
      "answerKey": {
        "en": "(a) AR = 12 / 4 = 3.0 (dimensionless). In decibels: AR(dB) = 20 log₁₀(3.0) = 20 × 0.4771 = 9.54 dB. (b) No, 9.54 dB is significantly greater than the 3 dB limit, indicating strong ellipticity rather than acceptable circular polarization.",
        "hi": "(a) AR = 3.0 = 9.54 dB। (b) नहीं, 9.54 dB > 3 dB होने के कारण यह वृत्तीय ध्रुवीकरण के योग्य नहीं है।",
        "bn": "(a) AR = ৩.০ = ৯.৫৪ dB। (b) না, ৯.৫৪ dB > ৩ dB হওয়ায় এটি গ্রহণযোগ্য বৃত্তীয় সমবর্তন নয়।"
      }
    },
    {
      "id": "pq-ch11-l08-03",
      "question": {
        "en": "Explain the operational principle of polarized 3D cinema glasses, including why circular polarization is preferred over linear polarization for movie theaters.",
        "hi": "3D सिनेमा चश्मे के कार्य सिद्धांत की व्याख्या कीजिए, और बताइए कि सिनेमाघरों में रेखीय के बजाय वृत्तीय ध्रुवीकरण को प्राथमिकता क्यों दी जाती है।",
        "bn": "থ্রি-ডি সিনেমা চশমার কার্যনীতি ব্যাখ্যা করুন এবং চলচ্চিত্রে রৈখিকের চেয়ে বৃত্তীয় সমবর্তন কেন শ্রেয় তা লিখুন।"
      },
      "hint": {
        "en": "Consider head tilt and cross-talk (ghosting) between left and right eye images with linear vs circular filters.",
        "hi": "दर्शकों के सिर झुकाने पर रेखीय फिल्टरों में क्रॉस-टॉक (धुंधलापन) की समस्या पर विचार करें।",
        "bn": "মাথা কাত করলে রৈখিক ফিল্টারে দুই চোখের ছবির মিশ্রণ বা ঘোস্টিং সমস্যার কথা বিবেচনা করুন।"
      },
      "answerKey": {
        "en": "The projector alternates frames using RHCP for the right eye and LHCP for the left eye. The viewer wears glasses where the right lens passes only RHCP and the left lens passes only LHCP, isolating the stereoscopic perspectives. Circular polarization is preferred because if a viewer tilts their head sideways, the circular handedness remains unchanged (zero cross-talk), whereas linear polarization would experience severe cross-talk (ghosting) proportional to sin²(tilt angle).",
        "hi": "प्रोजेक्टर दाहिनी आंख के लिए RHCP और बाईं आंख के लिए LHCP तरंगें भेजता है। चश्मे के लेंस संबंधित ध्रुवीकरण को अलग कर देते हैं। वृत्तीय ध्रुवीकरण में सिर झुकाने पर भी क्रॉस-टॉक नहीं होता, जबकि रेखीय में गंभीर धुंधलापन (घोस्टिंग) उत्पन्न होता है।",
        "bn": "প্রজেক্টর ডান চোখের জন্য RHCP এবং বাম চোখের জন্য LHCP তরঙ্গ পাঠায়। চশমা জোড়া যথাযথ চোখকে সঠিক ছবি দেখতে দেয়। মাথা কাত করলেও বৃত্তীয় সমবর্তনে কোনো তারতম্য হয় না, কিন্তু রৈখিক সমবর্তনে ছবির মিশ্রণ ঘটে ঘোস্টিং সৃষ্টি হয়।"
      }
    },
    {
      "id": "pq-ch11-l08-04",
      "question": {
        "en": "A linearly polarized wave with electric field inclined at 30° to the vertical is received by a strictly vertical dipole antenna. Calculate the percentage of power lost due to polarization mismatch.",
        "hi": "ऊर्ध्वाधर से 30° पर झुकी एक रेखीय ध्रुवीकृत तरंग को ऊर्ध्वाधर डाइपोल एंटीना द्वारा ग्रहण किया जाता है। ध्रुवीकरण असुमेलन के कारण कितने प्रतिशत शक्ति नष्ट होगी?",
        "bn": "উল্লম্বের সাথে ৩০° কোণে হেলে থাকা একটি রৈখিক তরঙ্গ একটি উল্লম্ব ডাইপোল অ্যান্টেনা দ্বারা গৃহীত হয়। সমবর্তন অমিলের কারণে কত শতাংশ ক্ষমতা অপচয় হবে?"
      },
      "hint": {
        "en": "PLF = cos²(θ_misalignment). Lost power percentage = (1 - PLF) × 100%.",
        "hi": "PLF = cos²(30°) = (√3/2)² = 0.75। नष्ट शक्ति = (1 - 0.75) × 100%।",
        "bn": "PLF = cos²(৩০°) = (√৩/২)² = ০.৭৫। অপচয় = (১ - ০.৭৫) × ১০০%।"
      },
      "answerKey": {
        "en": "Misalignment angle θ = 30°. PLF = cos²(30°) = (√3 / 2)² = 3/4 = 0.75 (75% power received). Lost power percentage = (1 - PLF) × 100% = (1 - 0.75) × 100% = 25.0% lost (equivalent to a 1.25 dB loss).",
        "hi": "प्राप्त शक्ति = 75%, अतः नष्ट शक्ति = 25.0% (1.25 dB हानि)।",
        "bn": "গৃহীত ক্ষমতা = ৭৫%, ফলে অপচয় = ২৫.০% (১.২৫ dB অপচয়)।"
      }
    },
    {
      "id": "pq-ch11-l08-05",
      "question": {
        "en": "Define the polarization ellipse parameters: tilt angle ψ and ellipticity angle χ. Write down the relations connecting them to axial ratio AR.",
        "hi": "ध्रुवीकरण दीर्घवृत्त प्राचलों को परिभाषित कीजिए: झुकाव कोण ψ एवं दीर्घवृत्तता कोण χ। अक्षीय अनुपात AR से इनका संबंध लिखिए।",
        "bn": "সমবর্তন উপবৃত্তের প্যারামিটারগুলি সংজ্ঞায়িত করুন: নতি কোণ ψ এবং উপবৃত্তীয় কোণ χ। এদের সাথে অক্ষীয় অনুপাত AR এর সম্পর্ক লিখুন।"
      },
      "hint": {
        "en": "AR = |cot(χ)|, where tan(χ) = ± Minor/Major axis. Handedness is positive for LHCP and negative for RHCP.",
        "hi": "tan(χ) = ± लघु अक्ष / दीर्घ अक्ष। AR = 1 / |tan(χ)|।",
        "bn": "tan(χ) = ± গৌণ অক্ষ / মুখ্য অক্ষ। AR = ১ / |tan(χ)|।"
      },
      "answerKey": {
        "en": "1. Tilt angle ψ (-90° ≤ ψ ≤ 90°) is the angle between the major axis of the polarization ellipse and the reference x-axis. 2. Ellipticity angle χ (-45° ≤ χ ≤ 45°) is defined by tan(χ) = ± OB/OA = ± 1/AR, where the sign indicates handedness (+ for LHCP, - for RHCP). Circular polarization corresponds to χ = ±45° (AR = 1), and linear polarization corresponds to χ = 0° (AR = ∞).",
        "hi": "1. झुकाव कोण ψ मुख्य अक्ष का x-अक्ष से कोण है। 2. दीर्घवृत्तता कोण χ के लिए tan(χ) = ± 1/AR होता है। वृत्तीय के लिए χ = ±45° तथा रेखीय के लिए χ = 0° होता है।",
        "bn": "১. নতি কোণ ψ হলো মুখ্য অক্ষ ও x-অক্ষের মধ্যবর্তী কোণ। ২. উপবৃত্তীয় কোণ χ এর ক্ষেত্রে tan(χ) = ± ১/AR। বৃত্তীয় সমবর্তনে χ = ±৪৫° এবং রৈখিক সমবর্তনে χ = ০°।"
      }
    }
  ]
}

save_lesson('src/data/chapter11Lesson8.ts', 'LESSON_WAVE_POLARIZATION', lesson8)
print("Lesson 8 generated.")
