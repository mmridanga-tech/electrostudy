# -*- coding: utf-8 -*-
from create_lessons_part2 import save_lesson

lesson14 = {
  "id": "lsn-ch11-antenna-fundamentals-link-budget",
  "topicId": "ch11-antenna-fundamentals-link-budget",
  "chapterId": "ch-em-waves",
  "order": 14,
  "title": {
    "en": "Antenna Fundamentals: Dipoles, Radiation Resistance & Wireless Link Budget",
    "hi": "एंटीना मूलभूत सिद्धांत: द्विध्रुव, विकिरण प्रतिरोध एवं वायरलेस लिंक बजट",
    "bn": "অ্যান্টেনার মৌলিক নীতি: ডাইপোল, বিকিরণ রোধ এবং ওয়্যারলেস লিংক বাজেট"
  },
  "description": {
    "en": "Electrodynamics of radiation from time-varying sources, infinitesimal Hertzian dipole and half-wave dipole, near-field vs. far-field Fraunhofer boundary (2D²/λ), radiation resistance R_rad = 73.1 Ω, antenna gain, directivity, effective aperture A_e, Friis free-space transmission equation, and end-to-end RF wireless link budget.",
    "hi": "समय-परिवर्ती स्रोतों से विद्युत चुंबकीय विकिरण की गतिशीलता, हर्ट्ज़ियन द्विध्रुव एवं अर्ध-तरंग (हाफ-वेव) द्विध्रुव, निकट-क्षेत्र बनाम सुदूर-क्षेत्र फ्रौनहोफर सीमा (2D²/λ), विकिरण प्रतिरोध R_rad = 73.1 Ω, एंटीना लब्धि (गैन), दिशिकता, प्रभावी द्वारक A_e, फ्रीस मुक्त-आकाश संचरण समीकरण तथा संपूर्ण वायरलेस लिंक बजट।",
    "bn": "সময়-পরিবর্তনশীল উৎস থেকে তড়িৎচৌম্বকীয় বিকিরণের তত্ত্ব, হার্টজিয়ান ডাইপোল ও অর্ধ-তরঙ্গ ডাইপোল অ্যান্টেনা, নিকট-ক্ষেত্র বনাম দূর-ক্ষেত্র ফ্রনহফার সীমানা (2D²/λ), বিকিরণ রোধ R_rad = ৭৩.১ Ω, অ্যান্টেনা গেইন, নির্দেশকতা, কার্যকর অ্যাপারচার A_e, ফ্রিইস মুক্ত-স্থান সঞ্চালন সমীকরণ এবং সম্পূর্ণ ওয়্যারলেস আরএফ লিংক বাজেট।"
  },
  "estimatedMinutes": 55,
  "easyExplanation": {
    "en": "How does a smartphone in your pocket send an Instagram photo to a cell tower miles away through thin air without a single wire? The secret is an Antenna! An antenna is essentially a magical converter: it turns electrical AC currents jiggling inside a circuit into free-flying electromagnetic waves that shoot off into space, and vice versa. Imagine shaking the end of a rope up and down: rhythmic ripples travel away down the rope. In an antenna, electrons are accelerated back and forth millions or billions of times every second, causing their electric and magnetic field lines to pinch off, detach, and fly away into the universe as radio waves. To make this process efficient, engineers design antennas to be 'resonant'—most famously the half-wave dipole (λ/2 long), which has an intrinsic radiation resistance of ~73 Ohms. To calculate if your signal will actually reach the distant receiver, telecommunications engineers use the 'Friis Link Budget' formula, balancing transmitter power, antenna boost gains, distance path loss, and receiver sensitivity!",
    "hi": "आपकी जेब में रखा स्मार्टफोन बिना किसी तार के मीलों दूर स्थित मोबाइल टावर तक फोटो कैसे भेज देता है? इसका रहस्य है 'एंटीना'! एंटीना एक जादुई कनवर्टर की भांति कार्य करता है: यह सर्किट में दौड़ने वाले प्रत्यावर्ती विद्युत करंट (AC) को अंतरिक्ष में उड़ने वाली विद्युत चुंबकीय तरंगों में बदल देता है, और रिसीवर पर ठीक इसका उल्टा करता है। जब आप एक रस्सी को ऊपर-नीचे हिलाते हैं, तो रस्सी पर लहरें आगे बढ़ती हैं। इसी प्रकार एंटीना में जब इलेक्ट्रॉन प्रति सेकंड अरबों बार आगे-पीछे त्वरित होते हैं, तो उनसे विद्युत क्षेत्र की रेखाएं टूटकर अलग हो जाती हैं और अंतरिक्ष में तरंग बनकर उड़ जाती हैं। सबसे लोकप्रिय एंटीना 'अर्ध-तरंग द्विध्रुव' (हाफ-वेव डायपोल) है, जिसका विकिरण प्रतिरोध लगभग 73 ओम होता है। यह जांचने के लिए कि क्या सिग्नल टावर तक सही पहुंचेगा, इंजीनियर 'फ्रीस लिंक बजट' सूत्र का उपयोग करते हैं जो पावर, एंटीना गैन और दूरी के नुकसान की गणना करता है।",
    "bn": "আপনার পকেটের স্মার্টফোনটি কীভাবে কোনো তার ছাড়াই কয়েক মাইল দূরের মোবাইল টাওয়ারে ছবি পাঠিয়ে দেয়? এর মূল রহস্য হলো 'অ্যান্টেনা'! অ্যান্টেনা মূলত একটি রূপান্তরকারী যন্ত্র: এটি তারের ভেতরের পরিবর্তনশীল বিদ্যুৎ প্রবাহকে মুক্ত স্থানে ভাসমান তড়িৎচৌম্বকীয় তরঙ্গে রূপান্তর করে এবং গ্রাহক প্রান্তে উল্টো কাজটি করে। একটি দড়ি ধরে ঝাঁকালে যেমন তরঙ্গের সৃষ্টি হয়, তেমনই অ্যান্টেনার মধ্যে যখন ইলেকট্রন সেকেন্ডে কোটি কোটি বার ওঠানামা করে, তখন তড়িৎ ও চৌম্বক ক্ষেত্র আলাদা হয়ে মহাকাশে তরঙ্গরূপে ছড়িয়ে পড়ে। সবচেয়ে বহুল ব্যবহৃত অ্যান্টেনা হলো 'অর্ধ-তরঙ্গ ডাইপোল' (λ/২ দীর্ঘ), যার বিকিরণ রোধ প্রায় ৭৩ ওহম। সংকেতটি গন্তব্যে পৌঁছাবে কিনা তা নিশ্চিত করতে প্রকৌশলীরা 'ফ্রিইস লিংক বাজেট' সমীকরণ দিয়ে ট্রান্সমিটার পাওয়ার, অ্যান্টেনা গেইন ও দূরত্বের অপচয় হিসাব করেন।"
  },
  "detailedExplanation": {
    "en": "Antennas are the foundational transducers connecting guided electronic circuits to unbounded electromagnetic radiation.\n\n1. Radiation Mechanism from Accelerating Charges:\nStatic charges produce static Coulomb electric fields (E ~ 1/r²). Constant velocity currents produce magnetostatic fields (B ~ 1/r). Neither radiates energy! Only ACCELERATING charges generate time-varying fields whose energy detaches from the source and propagates outward into the far field as radiation (E, H ~ 1/r).\n\n2. Field Regions & Fraunhofer Far-Field Distance:\nAround any radiating antenna of maximum physical aperture dimension D, space is demarcated into three regions:\n• Reactive Near-Field (r < 0.62 √(D³/λ)): Stored electrostatic and magnetostatic energy dominates; fields decay as 1/r³ and 1/r².\n• Radiating Near-Field (Fresnel region) (0.62 √(D³/λ) < r < 2D²/λ): Radiation pattern varies with distance r.\n• Far-Field (Fraunhofer region) (r ≥ 2D²/λ):\nThe fields become locally transverse TEM plane waves, radial Poynting flux is strictly real (outward energy propagation), and the angular radiation pattern is completely independent of distance r. All antenna gain and link budget formulas apply strictly in the Far Field!\n\n3. The Half-Wave Dipole Antenna (L = λ/2):\nA thin center-fed wire of total physical length L = λ / 2 resonates with a standing wave current distribution:\nI(z) = I_0 cos(k z) = I_0 cos(2π z / λ)   for -λ/4 ≤ z ≤ λ/4.\nIn the far field (r ≫ λ), the radiated fields are:\nE_θ(r, θ) = j [ (η0 I_0) / (2π r) ] · [ cos((π/2) cos θ) / sin θ ] · e^(-j k r).\n\nKey Parameters of the Center-Fed Half-Wave Dipole:\n• Total Radiated Power: P_rad = (1/2) I_0² · R_rad = 36.56 I_0².\n• Radiation Resistance: R_rad = 73.1 Ω (terminal impedance Z_in ≈ 73 + j42.5 Ω; trimmed by ~5% to λ/2 to resonance R_in ≈ 70 Ω with 0 imaginary reactance!).\n• Directivity: D_0 = 1.643 (or 2.15 dBi).\n• Half-Power Beamwidth (HPBW): ~78° in the E-plane, 360° omnidirectional in the H-plane.\n\n4. Antenna Directivity, Gain & Effective Aperture:\n• Directivity D(θ, φ) = 4π U(θ, φ) / P_rad.\n• Gain G = η_rad · D, where radiation efficiency η_rad = R_rad / (R_rad + R_loss).\n• Effective Aperture A_e: The equivalent physical area that intercepts power from an incident plane wave:\nA_e = (λ² / 4π) · G.\n\n5. The Friis Transmission Formula:\nFor line-of-sight propagation between two aligned antennas separated by distance R in the far field:\nP_r = P_t · G_t · G_r · ( λ / (4π R) )²,\nwhere P_r is received power, P_t is transmitted power, G_t is transmit antenna gain, G_r is receive antenna gain, and (λ / (4π R))² is the Free-Space Path Loss (FSPL).\n\nIn decibel (dB) logarithmic form, the RF Wireless Link Budget is:\nP_r(dBm) = P_t(dBm) + G_t(dBi) + G_r(dBi) - FSPL(dB) - L_misc(dB),\nwhere FSPL(dB) = 20 log10(R) + 20 log10(f) + 20 log10(4π / c) = 32.44 + 20 log10(R_km) + 20 log10(f_MHz).",
    "hi": "एंटीना सर्किट के विद्युत करंट को अंतरिक्ष में विद्युत चुंबकीय तरंगों में बदलता है।\n1. त्वरित आवेश ही विद्युत चुंबकीय विकिरण उत्पन्न करते हैं।\n2. फ्रौनहोफर सुदूर-क्षेत्र (Far-field) सीमा: R ≥ 2 D² / λ।\n3. अर्ध-तरंग द्विध्रुव (Half-wave dipole): लंबाई L = λ / 2, विकिरण प्रतिरोध R_rad = 73.1 Ω, दिशिकता D = 1.64 (2.15 dBi)।\n4. प्रभावी द्वारक: A_e = (λ² / 4π) G।\n5. फ्रीस संचरण समीकरण (Friis Formula):\nP_r = P_t G_t G_r [ λ / (4π R) ]²।\nडेसिबल (dB) में लिंक बजट:\nP_r(dBm) = P_t(dBm) + G_t(dBi) + G_r(dBi) - FSPL(dB)।",
    "bn": "অ্যান্টেনা বর্তনীর বৈদ্যুতিক প্রবাহকে মুক্ত স্থানের তড়িৎচৌম্বকীয় তরঙ্গে রূপান্তরিত করে।\n১. কেবল ত্বরণশীল আধানই তড়িৎচৌম্বকীয় বিকিরণ ঘটাতে পারে।\n২. দূর-ক্ষেত্র (Far-field) ফ্রনহফার দূরত্ব: R ≥ ২ D² / λ।\n৩. অর্ধ-তরঙ্গ ডাইপোল: দৈর্ঘ্য L = λ / ২, বিকিরণ রোধ R_rad = ৭৩.১ Ω, নির্দেশকতা D = ১.৬৪ (২.১৫ dBi)।\n৪. কার্যকর অ্যাপারচার: A_e = (λ² / ৪π) G।\n৫. ফ্রিইস সঞ্চালন সমীকরণ (Friis Equation):\nP_r = P_t G_t G_r [ λ / (৪π R) ]²।\nডেসিবেলে আরএফ লিংক বাজেট:\nP_r(dBm) = P_t(dBm) + G_t(dBi) + G_r(dBi) - FSPL(dB)।"
  },
  "formulas": [
    {
      "id": "f-fraunhofer-distance",
      "symbol": "R_ff",
      "expression": "R_ff = (2 · D²) / λ",
      "title": {
        "en": "Fraunhofer Far-Field Boundary Distance",
        "hi": "फ्रौनहोफर सुदूर-क्षेत्र सीमा दूरी",
        "bn": "ফ্রনহফার দূর-ক্ষেত্র সীমানা দূরত্ব"
      },
      "description": {
        "en": "Minimum radial distance from an antenna of maximum aperture dimension D to ensure phase curvature across the aperture is less than π/8 (22.5°).",
        "hi": "एंटीना से वह न्यूनतम दूरी जहां तरंग अग्र पूरी तरह से समतल (Plane wave) बन जाता है।",
        "bn": "অ্যান্টেনা থেকে যে ন্যূনতম দূরত্বে তরঙ্গ সম্পূর্ণ সমতল তরঙ্গে পরিণত হয়।"
      },
      "variables": [
        { "symbol": "R_ff", "name": { "en": "Far-field Fraunhofer boundary distance (m)", "hi": "सुदूर-क्षेत्र सीमा दूरी", "bn": "দূর-ক্ষেত্র দূরত্ব" } },
        { "symbol": "D", "name": { "en": "Maximum linear dimension of antenna aperture (m)", "hi": "एंटीना का अधिकतम रैखिक आकार", "bn": "অ্যান্টেনার সর্বোচ্চ রৈখিক মাপ" } },
        { "symbol": "λ", "name": { "en": "Carrier wavelength (m)", "hi": "तरंगदैर्ध्य", "bn": "তরঙ্গদৈর্ঘ্য" } }
      ]
    },
    {
      "id": "f-radiation-resistance",
      "symbol": "R_rad",
      "expression": "P_rad = (1/2) · I_0² · R_rad   ⟹   R_rad = (2 · P_rad) / I_0²",
      "title": {
        "en": "Antenna Radiation Resistance",
        "hi": "एंटीना विकिरण प्रतिरोध",
        "bn": "অ্যান্টেনা বিকিরণ রোধ"
      },
      "description": {
        "en": "Fictitious equivalent electrical resistance that dissipates exactly the same amount of power as real electromagnetic energy radiated into space.",
        "hi": "काल्पनिक तुल्य प्रतिरोध जो अंतरिक्ष में विकिरित वास्तविक शक्ति के बराबर ऊर्जा की खपत दर्शाता है।",
        "bn": "কাল্পনিক সমতুল্য রোধ যা অ্যান্টেনা কর্তৃক মহাশূন্যে বিকিরিত শক্তির সমপরিমাণ ক্ষমতা নির্দেশ করে।"
      },
      "variables": [
        { "symbol": "R_rad", "name": { "en": "Radiation resistance (73.1 Ω for λ/2 dipole)", "hi": "विकिरण प्रतिरोध (Ω)", "bn": "বিকিরণ রোধ (Ω)" } },
        { "symbol": "P_rad", "name": { "en": "Total time-averaged radiated power (Watts)", "hi": "कुल विकिरित शक्ति", "bn": "মোট বিকিরিত ক্ষমতা" } },
        { "symbol": "I_0", "name": { "en": "Peak feed-point input current (Amperes)", "hi": "शिखर इनपुट करंट", "bn": "শীর্ষ ইনপুট কারেন্ট" } }
      ]
    },
    {
      "id": "f-effective-aperture",
      "symbol": "A_e",
      "expression": "A_e = (λ² / 4π) · G",
      "title": {
        "en": "Effective Area / Aperture of an Antenna",
        "hi": "एंटीना का प्रभावी क्षेत्रफल (द्वारक)",
        "bn": "অ্যান্টেনার কার্যকর ক্ষেত্রফল বা অ্যাপারচার"
      },
      "description": {
        "en": "Equivalent geometric area capturing electromagnetic power flux density from an incoming radio wave.",
        "hi": "आने वाली तरंग के फ्लक्स घनत्व से शक्ति ग्रहण करने वाला समतुल्य ज्यामितीय क्षेत्रफल।",
        "bn": "আগত তরঙ্গের শক্তি ঘনত্ব থেকে ক্ষমতা গ্রহণকারী কার্যকর জ্যামিতিক ক্ষেত্রফল।"
      },
      "variables": [
        { "symbol": "A_e", "name": { "en": "Effective aperture (m²)", "hi": "प्रभावी द्वारक", "bn": "কার্যকর অ্যাপারচার" } },
        { "symbol": "G", "name": { "en": "Antenna power gain (dimensionless)", "hi": "एंटीना लब्धि", "bn": "অ্যান্টেনা গেইন" } },
        { "symbol": "λ", "name": { "en": "Wavelength (m)", "hi": "तरंगदैर्ध्य", "bn": "তরঙ্গদৈর্ঘ্য" } }
      ]
    },
    {
      "id": "f-friis-transmission",
      "symbol": "P_r",
      "expression": "P_r = P_t · G_t · G_r · [ λ / (4π R) ]²",
      "title": {
        "en": "Friis Free-Space Transmission Formula",
        "hi": "फ्रीस मुक्त-आकाश संचरण सूत्र",
        "bn": "ফ্রিইস মুক্ত-স্থান সঞ্চালন সমীকরণ"
      },
      "description": {
        "en": "Calculates power delivered to a load at the receiver antenna from a transmitter antenna separated by distance R.",
        "hi": "R दूरी पर स्थित रिसीवर एंटीना द्वारा प्राप्त शक्ति की गणना करने वाला मूलभूत सूत्र।",
        "bn": "R দূরত্বে অবস্থিত রিসিভার অ্যান্টেনা দ্বারা গৃহীত ক্ষমতার পরিমাণ নির্ণয়ের মৌলিক সূত্র।"
      },
      "variables": [
        { "symbol": "P_r", "name": { "en": "Received RF power (W)", "hi": "प्राप्त शक्ति", "bn": "গৃহীত ক্ষমতা" } },
        { "symbol": "P_t", "name": { "en": "Transmitter input power (W)", "hi": "प्रेषित शक्ति", "bn": "প্রেরিত ক্ষমতা" } },
        { "symbol": "G_t, G_r", "name": { "en": "Transmitter & receiver antenna gains", "hi": "ट्रांसमीटर एवं रिसीवर एंटीना गैन", "bn": "ট্রান্সমিটার ও রিসিভারের অ্যান্টেনা গেইন" } },
        { "symbol": "R", "name": { "en": "Separation distance between antennas (m)", "hi": "दूरी", "bn": "দূরত্ব" } }
      ]
    }
  ],
  "sections": [
    {
      "id": "sec-radiation-dipoles",
      "title": {
        "en": "1. Electrodynamic Radiation & The Half-Wave Dipole",
        "hi": "1. विद्युत गतिकीय विकिरण एवं अर्ध-तरंग द्विध्रुव",
        "bn": "১. তড়িৎ-গতিশীল বিকিরণ এবং অর্ধ-তরঙ্গ ডাইপোল"
      },
      "content": {
        "en": "An accelerating electrical charge radiates power proportional to the square of its acceleration: P = (q² a²) / (6 π ε0 c³) (Larmor's formula). In an AC antenna, charge oscillates sinusoidally with frequency ω, causing maximum acceleration at the wire tips.\n\nThe Half-Wave Dipole (L = λ/2) is the canonical reference antenna across all radio engineering:\n• Physical Structure: Two collinear conducting rods of length λ/4 fed at the center by a balanced transmission line.\n• Current & Voltage Distribution: Current is maximum at the feed-point (I_in = I_0) and vanishes at the open ends (I = 0). Voltage is minimum at the feed and maximum at the tips.\n• Far-field Radiation Pattern: Forms an omnidirectional 'doughnut' torus centered on the antenna axis. In the plane perpendicular to the wire (azimuth / H-plane), radiation is completely uniform (circle). In the elevation plane (E-plane), radiation follows |cos((π/2) cos θ) / sin θ|², forming two symmetric lobes with nulls along the wire axis (θ = 0° and 180°).\n• Input Impedance: At exact length L = 0.500 λ, Z_in = 73.1 + j 42.5 Ω. By trimming the physical length slightly to ~0.48 λ, the inductive reactance cancels out, presenting a purely resistive 70–73 Ω load that matches standard 75 Ω coaxial cables or 50 Ω cables with a simple balun matching network!",
        "hi": "त्वरित आवेश लार्मर सूत्र (P ∝ a²) के अनुसार शक्ति विकिरित करता है। अर्ध-तरंग द्विध्रुव (L = λ/2) सबसे आधारभूत एंटीना है।\nइसके केंद्र में करंट अधिकतम और किनारों पर शून्य होता है। इसका विकिरण पैटर्न डोनट (टोरस) जैसा होता है।\nइसका विकिरण प्रतिरोध R_rad = 73.1 Ω होता है। लंबाई को 0.48 λ तक थोड़ा छोटा करने पर यह शुद्ध 70-73 ओम का प्रतिरोधी लोड बन जाता है जो समाक्षीय केबल से पूर्णतः मेल खाता है।",
        "bn": "ত্বরণশীল আধান লারমর সূত্রানুসারে (P ∝ a²) শক্তি বিকিরণ করে। অর্ধ-তরঙ্গ ডাইপোল (L = λ/২) হলো অ্যান্টেনা বিজ্ঞানের মূল ভিত্তি।\nএর কেন্দ্রে কারেন্ট সর্বোচ্চ এবং প্রান্তে শূন্য থাকে। এর রেডিয়েশন প্যাটার্ন দেখতে একটি ডোনাটের মতো হয়।\nএর বিকিরণ রোধ R_rad = ৭৩.১ Ω। তারের দৈর্ঘ্য সামান্য কমিয়ে ০.৪৮ λ করলে এটি বিশুদ্ধ ৭০-৭৩ ওহম রোধে পরিণত হয় এবং কোঅ্যাক্সিয়াল কেবলের সাথে চমৎকার ম্যাচ করে।"
      },
      "schematicId": "circuit-ch11-antenna-fundamentals-link-budget"
    },
    {
      "id": "sec-link-budget",
      "title": {
        "en": "2. Free-Space Path Loss & End-to-End RF Link Budget",
        "hi": "2. मुक्त-आकाश पथ हानि एवं संपूर्ण RF लिंक बजट",
        "bn": "২. মুক্ত-স্থান পথ অপচয় এবং সম্পূর্ণ আরএফ লিংক বাজেট"
      },
      "content": {
        "en": "A wireless link budget accounts for all gains and losses from the transmitter power amplifier up to the receiver demodulator:\n\n1. Free-Space Path Loss (FSPL):\nAs a wave expands spherically from an isotropic antenna, power spreads over surface area 4π R². When intercepted by an aperture of area A_e = λ² / (4π), the ratio of received power to transmitted power produces the classic inverse-square attenuation known as FSPL:\nFSPL = ( 4π R / λ )² = ( 4π R f / c )².\n\nIn decibels:\nFSPL(dB) = 20 log10(R_meters) + 20 log10(f_Hz) - 147.55 dB\nFSPL(dB) = 32.44 + 20 log10(R_km) + 20 log10(f_MHz).\nNotice that path loss increases by 6 dB every time distance doubles (2x distance), and also increases by 6 dB every time carrier frequency doubles!\n\n2. Link Margin & Receiver Sensitivity:\nA wireless receiver requires a minimum signal power level, termed Receiver Sensitivity (P_sens), to overcome thermal Johnson noise (N0 = k_B T B) and achieve a minimum Signal-to-Noise Ratio (SNR):\nLink Margin (dB) = P_rx(dBm) - P_sens(dBm) ≥ 10 to 20 dB (safety margin for fading).",
        "hi": "लिंक बजट ट्रांसमीटर से रिसीवर तक सभी लाभों (Gains) और हानियों (Losses) का गणितीय लेखा-जोखा है।\nमुक्त आकाश पथ हानि (FSPL) दूरी और आवृत्ति दोनों के वर्ग के साथ बढ़ती है:\nFSPL(dB) = 32.44 + 20 log10(R_km) + 20 log10(f_MHz)।\nदूरी दोगुनी होने पर हानि 6 dB बढ़ जाती है। प्राप्त सिग्नल और रिसीवर की संवेदनशीलता के बीच का अंतर 'लिंक मार्जिन' कहलाता है।",
        "bn": "লিংক বাজেট হলো ট্রান্সমিটার থেকে রিসিভার পর্যন্ত সমস্ত লাভ ও অপচয়ের সামগ্রিক হিসাব।\nমুক্ত স্থানের পথ অপচয় (FSPL) দূরত্ব ও কম্পাঙ্ক উভয়ের সাথেই বৃদ্ধি পায়:\nFSPL(dB) = ৩২.৪৪ + ২০ log10(R_km) + ২০ log10(f_MHz)।\nদূরত্ব দ্বিগুণ হলে সংকেত ৬ dB হ্রাস পায়। প্রাপ্ত ক্ষমতা ও রিসিভার সংবেদনশীলতার মধ্যকার ব্যবধানকে 'লিংক মার্জিন' বলে।"
      }
    }
  ],
  "diagrams": [
    {
      "id": "diag-ch11-antenna-fundamentals-link-budget",
      "title": {
        "en": "Half-Wave Dipole 3D Toroidal Radiation Pattern, Current Standing Waves & Friis Link Budget",
        "hi": "अर्ध-तरंग द्विध्रुव 3D टोरॉयडल विकिरण पैटर्न, करंट अप्रगामी तरंगें एवं फ्रीस लिंक बजट",
        "bn": "অর্ধ-তরঙ্গ ডাইপোলের ত্রিমাত্রিক ডোনাট বিকিরণ প্যাটার্ন, স্থির কারেন্ট তরঙ্গ ও ফ্রিইস লিংক বাজেট"
      },
      "caption": {
        "en": "Complete technical schematic featuring half-wave dipole current/voltage distribution, toroidal 3D E/H radiation pattern, near/far-field zones, and Friis wireless link budget block diagram with TX/RX gains and FSPL curve.",
        "hi": "हाफ-वेव डायपोल करंट वितरण, 3D विकिरण डोनट पैटर्न, निकट एवं सुदूर क्षेत्र सीमाएं तथा TX/RX गैन और FSPL सहित फ्रीस लिंक बजट का विस्तृत आरेख।",
        "bn": "হাফ-ওয়েভ ডাইপোলের কারেন্ট বিন্যাস, ৩ডি ডোনাট রেডিয়েশন প্যাটার্ন, ফিল্ড অঞ্চল এবং ট্রান্সমিটার-রিসিভার গেইন সহ ফ্রিইস লিংক বাজেটের সম্পূর্ণ চিত্র।"
      },
      "svgType": "circuit-ch11-antenna-fundamentals-link-budget"
    }
  ],
  "solvedExamples": [
    {
      "id": "ex-ch11-l14-01",
      "problem": {
        "en": "A deep-space probe orbiting Mars transmits telemetry back to an Earth station antenna at a frequency of f = 8.4 GHz (X-band). The distance from Mars to Earth is R = 2.25 × 10⁸ km (2.25 × 10¹¹ m). The probe's parabolic dish antenna has a gain G_t = 38 dBi and transmits P_t = 20 Watts. The NASA Deep Space Network (DSN) 70-meter ground station dish has a gain G_r = 74 dBi. Calculate: (a) the free space wavelength λ, (b) the Free-Space Path Loss (FSPL) in dB, (c) the received power P_r at Earth in dBm and in Watts, and (d) if the DSN receiver sensitivity is -155 dBm, determine the link margin.",
        "hi": "मंगल ग्रह की कक्षा में एक अंतरिक्ष यान f = 8.4 GHz पर पृथ्वी तक सिग्नल भेजता है। मंगल से पृथ्वी की दूरी R = 2.25 × 10⁸ km है। यान का एंटीना गैन G_t = 38 dBi तथा शक्ति 20 W है। पृथ्वी के 70 मीटर डिश का गैन G_r = 74 dBi है। ज्ञात कीजिए: (a) तरंगदैर्ध्य λ, (b) FSPL (dB में), (c) पृथ्वी पर प्राप्त शक्ति P_r (dBm और Watts में), तथा (d) यदि संवेदनशीलता -155 dBm हो तो लिंक मार्जिन।",
        "bn": "মঙ্গল গ্রহ থেকে একটি মহাকাশযান f = ৮.৪ GHz কম্পাঙ্কে পৃথিবীতে টেলিমেট্রি পাঠায়। দূরত্ব R = ২.২৫ × ১০⁸ কিমি। যানের অ্যান্টেনা গেইন ৩৮ dBi এবং ক্ষমতা ২০ ওয়াট। পৃথিবীর ৭০ মিটার ডিশের গেইন ৭৪ dBi। নির্ণয় করুন: (a) তরঙ্গদৈর্ঘ্য λ, (b) FSPL (dB তে), (c) প্রাপ্ত ক্ষমতা P_r (dBm এবং ওয়াটে), এবং (d) রিসিভারের সংবেদনশীলতা -১৫৫ dBm হলে লিংক মার্জিন কত?"
      },
      "solution": {
        "en": "Given:\nf = 8.4 × 10⁹ Hz, R = 2.25 × 10¹¹ m, P_t = 20 W, G_t = 38 dBi, G_r = 74 dBi.\n\n(a) Wavelength λ:\nλ = c / f = (3.0 × 10⁸ m/s) / (8.4 × 10⁹ Hz) = 0.03571 m = 3.571 cm.\n\n(b) Free-Space Path Loss (FSPL):\nFSPL = (4π R / λ)²\n4π R / λ = (4 × π × 2.25 × 10¹¹) / 0.03571 = (2.8274 × 10¹²) / 0.03571 = 7.917 × 10¹³.\nFSPL(dB) = 20 log10(7.917 × 10¹³) = 20 × (13.8986) = 277.97 dB ≈ 278.0 dB.\nAlternatively: FSPL = 32.44 + 20 log10(2.25 × 10⁸) + 20 log10(8400) = 32.44 + 167.04 + 78.49 = 277.97 dB.\n\n(c) Received Power P_r:\nTransmitter power in dBm:\nP_t(dBm) = 10 log10(P_t / 1 mW) = 10 log10(20,000 mW) = +43.01 dBm.\nLink Budget Formula:\nP_r(dBm) = P_t(dBm) + G_t(dBi) + G_r(dBi) - FSPL(dB)\nP_r(dBm) = 43.01 + 38.0 + 74.0 - 277.97 = 155.01 - 277.97 = -122.96 dBm ≈ -123 dBm.\nIn Watts:\nP_r = 10^((-122.96 - 30) / 10) = 10^(-15.296) = 5.06 × 10⁻¹⁶ Watts (about 0.5 femtowatts!).\n\n(d) Link Margin:\nLink Margin = P_r - P_sens = -123 dBm - (-155 dBm) = +32 dB.\nThe link has an outstanding 32 dB margin, ensuring flawless data reception across 225 million kilometers of interplanetary space!",
        "hi": "(a) λ = 3.57 cm।\n(b) FSPL = 32.44 + 20 log(2.25×10⁸) + 20 log(8400) = 278.0 dB।\n(c) P_t = +43 dBm। P_r = 43 + 38 + 74 - 278 = -123 dBm (5.06 × 10⁻¹⁶ W)।\n(d) लिंक मार्जिन = -123 - (-155) = +32 dB।",
        "bn": "(a) λ = ৩.৫৭ সেমি।\n(b) FSPL = ২৭৮.০ dB।\n(c) P_t = +৪৩ dBm। P_r = ৪৩ + ৩৮ + ৭৪ - ২৭৮ = -১২৩ dBm (৫.০৬ × ১০⁻১৬ ওয়াট)।\n(d) লিংক মার্জিন = -১২৩ - (-১৫৫) = +৩২ dB।"
      }
    },
    {
      "id": "ex-ch11-l14-02",
      "problem": {
        "en": "A parabolic dish radar antenna has a physical aperture diameter D = 2.4 meters and operates at f = 10 GHz (λ = 3.0 cm). (a) Calculate the Fraunhofer far-field boundary distance R_ff. (b) If the antenna aperture efficiency is η_ap = 60%, find its effective aperture A_e, its directivity gain G in dBi, and its half-power beamwidth (HPBW).",
        "hi": "एक परवलयाकार रडार एंटीना का व्यास D = 2.4 मीटर है और यह 10 GHz (λ = 3.0 cm) पर कार्य करता है। ज्ञात कीजिए: (a) फ्रौनहोफर सुदूर-क्षेत्र सीमा R_ff, (b) 60% द्वारक दक्षता पर प्रभावी द्वारक A_e, इसका लाभ G (dBi में) तथा बीम-चौड़ाई (HPBW)।",
        "bn": "একটি প্যারাবলিক ডিশ রাডার অ্যান্টেনার ব্যাস D = ২.৪ মিটার এবং এটি ১০ GHz (λ = ৩.০ সেমি) কম্পাঙ্কে কাজ করে। নির্ণয় করুন: (a) ফ্রনহফার দূর-ক্ষেত্র সীমানা R_ff, (b) ৬০% দক্ষতায় কার্যকর অ্যাপারচার A_e, গেইন G (dBi তে) এবং বিম-প্রস্থ (HPBW)।"
      },
      "solution": {
        "en": "Given: D = 2.4 m, f = 10 × 10⁹ Hz, λ = c / f = 0.030 m, η_ap = 0.60.\n\n(a) Far-field Fraunhofer boundary:\nR_ff = 2 D² / λ = (2 × (2.4)²) / 0.030 = (2 × 5.76) / 0.030 = 11.52 / 0.030 = 384 meters.\nMeasurements closer than 384 meters are in the near field.\n\n(b) Antenna parameters:\nPhysical area of circular aperture: A_phys = π (D/2)² = π (1.2)² = 1.44 π = 4.524 m².\nEffective aperture: A_e = η_ap × A_phys = 0.60 × 4.524 = 2.714 m².\nGain formula: G = 4π A_e / λ² = (4 × π × 2.714) / (0.030)² = 34.109 / 0.0009 = 37,899.\nIn dBi: G_dBi = 10 log10(37,899) = 45.79 dBi ≈ 45.8 dBi.\nEstimated Half-Power Beamwidth (HPBW):\nHPBW ≈ 70° × (λ / D) = 70° × (0.030 / 2.4) = 70° × 0.0125 = 0.875° (a razor-thin 0.88° pencil beam!).",
        "hi": "(a) R_ff = 2 D² / λ = 2 × (2.4)² / 0.03 = 384 मीटर।\n(b) भौतिक क्षेत्रफल = 4.52 m²। A_e = 0.60 × 4.52 = 2.71 m²।\nG = 4π A_e / λ² = 37,899 = 45.8 dBi। बीम-चौड़ाई = 70° × (0.03 / 2.4) = 0.88°।",
        "bn": "(a) R_ff = ২ D² / λ = ২ × (২.৪)² / ০.০৩ = ৩৮৪ মিটার।\n(b) ভৌতিক ক্ষেত্রফল = ৪.৫২ m²। A_e = ০.৬০ × ৪.৫২ = ২.৭১ m²।\nG = ৪π A_e / λ² = ৩৭,৮৯৯ = ৪৫.৮ dBi। বিম-প্রস্থ = ৭০° × (০.০৩ / ২.৪) = ০.৮৮°।"
      }
    }
  ],
  "practicalApplications": {
    "en": [
      "Mobile Cellular Telecommunications: 4G LTE and 5G base station tower arrays utilize multi-element cross-polarized dipole arrays with beamforming to serve thousands of smartphones simultaneously.",
      "Deep Space Communication: NASA's Deep Space Network (DSN) employs 70-meter parabolic Cassegrain dish antennas with cryogenically cooled receivers to establish gigabit links with probes exploring Saturn and interstellar space.",
      "Automotive Collision-Avoidance Radar: 77 GHz microstrip patch antenna arrays integrated into vehicle bumpers detect pedestrians and braking cars within milliseconds.",
      "Satellite TV Direct-to-Home (DTH): Offset parabolic reflector dishes focus 12 GHz Ku-band downlinks onto high-gain horn feeds to decode high-definition television.",
      "Wi-Fi & IoT Smart Home Devices: Compact printed inverted-F antennas (PIFA) embedded inside smart thermostats, laptops, and watches communicate across rooms at 2.4 GHz."
    ],
    "hi": [
      "मोबाइल सेलुलर नेटवर्क: 4G और 5G टावर स्मार्टफोन से जुड़ने के लिए बीमफॉर्मिंग और क्रॉस-पोलराइज्ड डायपोल एरे का उपयोग करते हैं।",
      "गहरे अंतरिक्ष संचार: नासा का डीप स्पेस नेटवर्क (DSN) अरबों किलोमीटर दूर स्थित उपग्रहों से संपर्क के लिए 70-मीटर विशालकाय डिश एंटेना का उपयोग करता है।",
      "ऑटोमोटिव रडार: कारों में लगे 77 GHz माइक्रोस्ट्रिप एंटीना आगे आने वाली बाधाओं को पहचानकर ऑटोमैटिक ब्रेक लगाते हैं।",
      "डीटीएच सैटेलाइट टीवी: घरों की छतों पर लगी छतरी (डिश एंटीना) 12 GHz Ku-बैंड सिग्नलों को रिसीव करके टीवी पर दिखाती है।",
      "स्मार्टफोन एवं लैपटॉप वाई-फाई: कॉम्पैक्ट प्रिंटेड इनवर्टेड-एफ एंटीना (PIFA) मोबाइल और लैपटॉप के अंदर छुपे रहते हैं और 2.4/5 GHz पर डेटा भेजते हैं।"
    ],
    "bn": [
      "মোবাইল নেটওয়ার্ক: 4G ও 5G টাওয়ারে বহু-উপাদানবিশিষ্ট ডাইপোল অ্যারে দিয়ে একই সাথে হাজার হাজার ফোনে সংকেত পাঠানো হয়।",
      "মহাকাশ যোগাযোগ: নাসার ডিপ স্পেস নেটওয়ার্ক (DSN) সৌরজগতের দূরবর্তী প্রান্তে সংকেত পাঠাতে ৭০ মিটার ব্যাসের দানবীয় অ্যান্টেনা ব্যবহার করে।",
      "গাড়ির সংঘর্ষ-নিবারক রাডার: ৭৭ GHz মাইক্রোস্ট্রিপ প্যাচ অ্যান্টেনা গাড়ির বাম্পারে থেকে পথচারী ও বাধা শনাক্ত করে স্বয়ংক্রিয় ব্রেক চাপে।",
      "ডিটিএইচ স্যাটেলাইট টিভি: ১২ GHz Ku-ব্যান্ডের স্যাটেলাইট সংকেত গ্রহণ করতে ডিশ অ্যান্টেনা ব্যবহৃত হয়।",
      "স্মার্টফোন ওয়াই-ফাই: মোবাইল ফোন ও ল্যাপটপের ভেতরে ক্ষুদ্রাকার প্রিন্টেড অ্যান্টেনা (PIFA) দিয়ে ইন্টারনেটের সাথে যুক্ত থাকা হয়।"
    ]
  },
  "importantPoints": {
    "en": [
      "Accelerating charges are the sole physical source of electromagnetic radiation; steady DC currents and static charges never radiate.",
      "The Fraunhofer far-field boundary begins at distance R = 2 D² / λ, beyond which the angular radiation pattern is independent of distance.",
      "The ideal thin half-wave dipole has a radiation resistance of R_rad = 73.1 Ω and a directivity of 1.64 (2.15 dBi).",
      "Antenna effective aperture A_e and power gain G are strictly bound by the universal relation A_e = (λ² / 4π) G.",
      "Free-Space Path Loss (FSPL) scales with the square of distance (R²) and the square of frequency (f²), causing 6 dB of additional loss for every doubling of distance."
    ],
    "hi": [
      "केवल त्वरित आवेश ही विद्युत चुंबकीय विकिरण उत्पन्न करते हैं; स्थिर आवेश या स्थिर DC करंट कभी विकिरण नहीं करते।",
      "फ्रौनहोफर सुदूर-क्षेत्र सीमा R = 2 D² / λ से शुरू होती है, जिसके आगे विकिरण पैटर्न दूरी पर निर्भर नहीं करता।",
      "आदर्श हाफ-वेव डायपोल का विकिरण प्रतिरोध R_rad = 73.1 Ω और दिशिकता 1.64 (2.15 dBi) होती है।",
      "एंटीना का प्रभावी द्वारक और गैन A_e = (λ² / 4π) G द्वारा संबंधित हैं।",
      "मुक्त आकाश पथ हानि दूरी और आवृत्ति दोनों के वर्ग के साथ बढ़ती है (दूरी दोगुनी = 6 dB अतिरिक्त हानि)।"
    ],
    "bn": [
      "কেবল ত্বরণশীল আধানই বিকিরণ সৃষ্টি করতে পারে; স্থির চার্জ বা সমপ্রবাহ (DC) কখনোই বিকিরণ ঘটায় না।",
      "ফ্রনহফার দূর-ক্ষেত্র সীমানা R = ২ D² / λ থেকে শুরু হয়, যার বাইরে রেডিয়েশন প্যাটার্ন দূরত্বের ওপর নির্ভর করে না।",
      "আদর্শ হাফ-ওয়েভ ডাইপোলের বিকিরণ রোধ R_rad = ৭৩.১ Ω এবং নির্দেশকতা ১.৬৪ (২.১৫ dBi)।",
      "অ্যান্টেনার কার্যকর ক্ষেত্রফল এবং গেইন A_e = (λ² / ৪π) G সমীকরণ দ্বারা অটুটভাবে যুক্ত।",
      "মুক্ত স্থানের পথ অপচয় দূরত্ব ও কম্পাঙ্ক উভয়ের বর্গের সমানুপাতিক (দূরত্ব দ্বিগুণ হলে ৬ dB বেশি ক্ষতি)।"
    ]
  },
  "commonMistakes": {
    "en": [
      "Assuming radiation resistance is an actual ohmic resistance that turns electrical power into heat; radiation resistance represents pure, useful electromagnetic energy launched into space.",
      "Evaluating antenna gain or applying the Friis equation inside the near-field region (r < 2D²/λ), where field patterns are unstable and wave impedance is non-standard.",
      "Confusing directivity (pure geometric focusing of radiated power) with antenna gain (which accounts for ohmic heating efficiency: G = η D).",
      "Forgetting that doubling the communication distance drops received power by a factor of 4 (-6 dB), not a factor of 2."
    ],
    "hi": [
      "विकिरण प्रतिरोध को ऊष्मा में ऊर्जा नष्ट करने वाला वास्तविक प्रतिरोध समझना; यह वास्तव में अंतरिक्ष में विकिरित उपयोगी ऊर्जा का प्रतिनिधित्व करता है।",
      "निकट-क्षेत्र (Near-field, r < 2D²/λ) में फ्रीस समीकरण लगाना, जहां तरंगें समतल नहीं होती हैं।",
      "दिशिकता (Directivity) और गैन (Gain) को समान समझना; गैन में चालक की आंतरिक दक्षता भी शामिल होती है (G = η D)।",
      "यह भूल जाना कि दूरी दोगुनी करने पर प्राप्त शक्ति आधी नहीं, बल्कि एक-चौथाई (-6 dB) हो जाती है।"
    ],
    "bn": [
      "বিকিরণ রোধকে তাপ অপচয়কারী সাধারণ রোধ মনে করা; এটি আসলে মহাশূন্যে সফলভাবে প্রেরিত কার্যকর শক্তির পরিমাপ।",
      "নিকট-ক্ষেত্রে (Near-field, r < ২D²/λ) ফ্রিইস সমীকরণ প্রয়োগ করা, যেখানে সমতল তরঙ্গ থাকে না।",
      "নির্দেশকতা (Directivity) ও গেইন (Gain) গুলিয়ে ফেলা; গেইনে অভ্যন্তরীণ পরিবাহী অপচয়ের হিসাব থাকে (G = η D)।",
      "দূরত্ব দ্বিগুণ করলে সংকেত অর্ধেক নয়, বরং এক-চতুর্থাংশ (-৬ dB) হ্রাস পায় তা ভুলে যাওয়া।"
    ]
  },
  "keyTakeaways": {
    "en": [
      "Antennas are bidirectional electrodynamic transformers matching guided circuit currents to unbounded traveling waves.",
      "The half-wave dipole provides a universal resonant reference with R_rad = 73.1 Ω and doughnut-shaped radiation.",
      "Far-field communications operate strictly in the Fraunhofer zone where spherical wavefronts approximate plane waves.",
      "The Friis transmission equation governs wireless range, dictating that high frequencies and long distances require high-gain antennas to maintain link budget margin."
    ],
    "hi": [
      "एंटीना परिपथ के विद्युत करंट और अंतरिक्ष में उड़ने वाली तरंगों के बीच सेतु का कार्य करता है।",
      "हाफ-वेव डायपोल 73.1 ओम विकिरण प्रतिरोध और डोनट आकार के पैटर्न के साथ एक वैश्विक संदर्भ एंटीना है।",
      "वायरलेस संचार सुदूर-क्षेत्र (Fraunhofer zone) में संचालित होता है।",
      "फ्रीस समीकरण सिद्ध करता है कि उच्च आवृत्तियों और लंबी दूरियों के लिए उच्च-गैन वाले एंटीना अनिवार्य हैं।"
    ],
    "bn": [
      "অ্যান্টেনা বর্তনীর বিদ্যুৎ প্রবাহ ও মহাশূন্যের তরঙ্গের মধ্যকার দ্বিমুখী সেতুবন্ধন।",
      "হাফ-ওয়েভ ডাইপোল হলো ৭৩.১ ওহম বিকিরণ রোধবিশিষ্ট বিশ্বজনীন মানদণ্ড।",
      "সমস্ত বাস্তব ওয়্যারলেস যোগাযোগ ফ্রনহফার দূর-ক্ষেত্রে সংঘটিত হয়।",
      "ফ্রিইস সমীকরণ নির্দেশ করে যে উচ্চ কম্পাঙ্ক ও দীর্ঘ দূরত্বের জন্য উচ্চ-গেইনের অ্যান্টেনা অপরিহার্য।"
    ]
  },
  "mcqs": [
    {
      "id": "mcq-ch11-l14-01",
      "question": {
        "en": "What type of electrical charge motion is required to generate electromagnetic radiation into space?",
        "hi": "अंतरिक्ष में विद्युत चुंबकीय विकिरण उत्पन्न करने के लिए विद्युत आवेश की किस प्रकार की गति आवश्यक है?",
        "bn": "মহাশূন্যে তড়িৎচৌম্বকীয় বিকিরণ সৃষ্টি করতে বৈদ্যুতিক আধানের কী ধরনের গতি প্রয়োজন?"
      },
      "options": [
        { "id": "opt-1", "text": { "en": "A stationary charge at rest", "hi": "विरामावस्था में स्थित स्थिर आवेश", "bn": "স্থির অবস্থায় থাকা আধান" } },
        { "id": "opt-2", "text": { "en": "A charge moving at constant uniform linear velocity", "hi": "एकसमान वेग से गतिमान आवेश", "bn": "সমবেগে চলমান আধান" } },
        { "id": "opt-3", "text": { "en": "An accelerating or oscillating charge", "hi": "त्वरित अथवा दोलनशील आवेश", "bn": "ত্বরণশীল বা স্পন্দনশীল আধান" } },
        { "id": "opt-4", "text": { "en": "A charge placed inside a battery", "hi": "बैटरी के अंदर रखा आवेश", "bn": "ব্যাটারির ভেতরে থাকা চার্জ" } }
      ],
      "correctOptionId": "opt-3",
      "explanation": {
        "en": "According to Maxwell's equations and Larmor's theorem, only accelerating (or decelerating/oscillating) charges radiate electromagnetic waves.",
        "hi": "मैक्सवेल के नियमों के अनुसार केवल त्वरित या दोलनशील आवेश ही विद्युत चुंबकीय तरंगें विकिरित कर सकते हैं।",
        "bn": "ম্যাক্সওয়েলের সূত্রানুসারে কেবল ত্বরণশীল বা স্পন্দনশীল আধান থেকেই তড়িৎচৌম্বকীয় বিকিরণ নিঃসৃত হয়।"
      }
    },
    {
      "id": "mcq-ch11-l14-02",
      "question": {
        "en": "What is the theoretical radiation resistance of an ideal center-fed half-wave dipole (L = λ/2) in free space?",
        "hi": "मुक्त आकाश में एक आदर्श केंद्र-पोषित अर्ध-तरंग द्विध्रुव (L = λ/2) का सैद्धांतिक विकिरण प्रतिरोध कितना होता है?",
        "bn": "মুক্ত স্থানে একটি আদর্শ অর্ধ-তরঙ্গ ডাইপোল (L = λ/২) অ্যান্টেনার তাত্ত্বিক বিকিরণ রোধ কত?"
      },
      "options": [
        { "id": "opt-1", "text": { "en": "377 Ω", "hi": "377 Ω", "bn": "৩৭৭ Ω" } },
        { "id": "opt-2", "text": { "en": "73.1 Ω", "hi": "73.1 Ω", "bn": "৭৩.১ Ω" } },
        { "id": "opt-3", "text": { "en": "50.0 Ω", "hi": "50.0 Ω", "bn": "৫০.০ Ω" } },
        { "id": "opt-4", "text": { "en": "0 Ω", "hi": "0 Ω", "bn": "০ Ω" } }
      ],
      "correctOptionId": "opt-2",
      "explanation": {
        "en": "Integrating the far-field Poynting vector over a sphere yields P_rad = 36.56 I_0², which gives R_rad = 2 P_rad / I_0² = 73.13 Ω.",
        "hi": "हाफ-वेव डायपोल के लिए विकिरण प्रतिरोध R_rad = 73.13 Ω होता है।",
        "bn": "হাফ-ওয়েভ ডাইপোলের ক্ষেত্রে বিকিরণ রোধ R_rad = ৭৩.১৩ ওহম।"
      }
    },
    {
      "id": "mcq-ch11-l14-03",
      "question": {
        "en": "What is the shape of the 3D radiation pattern produced by a half-wave dipole aligned along the vertical z-axis?",
        "hi": "ऊर्ध्वाधर z-अक्ष पर स्थित एक अर्ध-तरंग द्विध्रुव का 3D विकिरण पैटर्न किस आकार का होता है?",
        "bn": "উল্লম্ব z-অক্ষ বরাবর স্থাপিত একটি অর্ধ-তরঙ্গ ডাইপোলের ত্রিমাত্রिक রেডিয়েশন প্যাটার্ন কেমন আকারের হয়?"
      },
      "options": [
        { "id": "opt-1", "text": { "en": "A narrow pencil beam pointing straight up", "hi": "सीधे ऊपर की ओर केंद्रित एक संकीर्ण बीम", "bn": "সোজা ওপরের দিকে নির্দেশিত সরু পেনসিল বিম" } },
        { "id": "opt-2", "text": { "en": "A doughnut (torus) with zero radiation along the wire axis", "hi": "डोनट (टोरस) आकार, जिसमें तार के अक्ष के अनुदिश शून्य विकिरण होता है", "bn": "একটি ডোনাট (টোরাস), যার তারের অক্ষ বরাবর বিকিরণ শূন্য থাকে" } },
        { "id": "opt-3", "text": { "en": "A perfect isotropic sphere radiating equally in all directions", "hi": "सभी दिशाओं में समान रूप से विकिरित होने वाला एक गोला", "bn": "সবদিকে সমান বিকিরণকারী একটি নিখুঁত গোলক" } },
        { "id": "opt-4", "text": { "en": "A cube with six equal faces", "hi": "छह फलकों वाला एक घन", "bn": "ছয়টি তলবিশিষ্ট একটি ঘনক" } }
      ],
      "correctOptionId": "opt-2",
      "explanation": {
        "en": "The radiation pattern is omnidirectional in azimuth and figure-eight in elevation, creating a 3D doughnut shape with nulls at θ = 0° and 180° along the wire.",
        "hi": "विकिरण पैटर्न एक डोनट के आकार का होता है, जिसमें तार के दोनों सिरों की दिशा में कोई विकिरण नहीं होता (Null)।",
        "bn": "রেডিয়েশন প্যাটার্নটি ডোনাটের মতো হয়, যেখানে তারের দুই প্রান্তের দিকে কোনো বিকিরণ নির্গত হয় না।"
      }
    },
    {
      "id": "mcq-ch11-l14-04",
      "question": {
        "en": "What is the Fraunhofer far-field boundary distance for an antenna with maximum dimension D = 1.0 m operating at f = 3.0 GHz (λ = 0.10 m)?",
        "hi": "आवृत्ति f = 3.0 GHz (λ = 0.10 m) पर 1.0 मीटर आकार वाले एंटीना के लिए फ्रौनहोफर सुदूर-क्षेत्र दूरी R_ff क्या है?",
        "bn": "f = ৩.০ GHz (λ = ০.১০ m) কম্পাঙ্কে D = ১.০ মিটার বিশিষ্ট অ্যান্টেনার ফ্রনহফার দূর-ক্ষেত্র সীমানা দূরত্ব কত?"
      },
      "options": [
        { "id": "opt-1", "text": { "en": "2.0 meters", "hi": "2.0 मीटर", "bn": "২.০ মিটার" } },
        { "id": "opt-2", "text": { "en": "10.0 meters", "hi": "10.0 मीटर", "bn": "১০.০ মিটার" } },
        { "id": "opt-3", "text": { "en": "20.0 meters", "hi": "20.0 मीटर", "bn": "২০.০ মিটার" } },
        { "id": "opt-4", "text": { "en": "200.0 meters", "hi": "200.0 मीटर", "bn": "২০০.০ মিটার" } }
      ],
      "correctOptionId": "opt-3",
      "explanation": {
        "en": "R_ff = 2 D² / λ = 2 × (1.0)² / 0.10 = 2.0 / 0.10 = 20.0 meters.",
        "hi": "R_ff = 2 D² / λ = 2 × (1.0)² / 0.10 = 20.0 मीटर।",
        "bn": "R_ff = ২ D² / λ = ২ × (১.০)² / ০.১০ = ২০.০ মিটার।"
      }
    },
    {
      "id": "mcq-ch11-l14-05",
      "question": {
        "en": "If the distance between a transmitter and a receiver in free space is doubled (2× R), how does the received power change according to the Friis transmission formula?",
        "hi": "यदि ट्रांसमीटर और रिसीवर के बीच की दूरी को दोगुना कर दिया जाए, तो प्राप्त शक्ति में क्या परिवर्तन होगा?",
        "bn": "ট্রান্সমিটার এবং রিসিভারের মধ্যকার দূরত্ব দ্বিগুণ করা হলে গৃহীত ক্ষমতা কীভাবে পরিবর্তিত হবে?"
      },
      "options": [
        { "id": "opt-1", "text": { "en": "Decreases by half (-3 dB)", "hi": "आधा घट जाती है (-3 dB)", "bn": "অর্ধেক হ্রাস পায় (-৩ dB)" } },
        { "id": "opt-2", "text": { "en": "Decreases to one-fourth (-6 dB)", "hi": "एक-चौथाई रह जाती है (-6 dB)", "bn": "এক-চতুর্থাংশ হয়ে যায় (-৬ dB)" } },
        { "id": "opt-3", "text": { "en": "Doubles (+3 dB)", "hi": "दोगुनी हो जाती है (+3 dB)", "bn": "দ্বিগুণ বৃদ্ধি পায় (+৩ dB)" } },
        { "id": "opt-4", "text": { "en": "Remains unchanged", "hi": "अपरिवर्तित रहती है", "bn": "অপরিবর্তিত থাকে" } }
      ],
      "correctOptionId": "opt-2",
      "explanation": {
        "en": "Since received power varies inversely with distance squared (P_r ∝ 1/R²), doubling the distance reduces power by (1/2)² = 1/4, which corresponds to exactly -6.02 dB.",
        "hi": "P_r ∝ 1/R² होने के कारण दूरी दोगुनी करने पर शक्ति 1/4 (अर्थात् -6 dB) रह जाती है।",
        "bn": "P_r ∝ ১/R² হওয়ায় দূরত্ব দ্বিগুণ করলে ক্ষমতা ১/৪ অংশ (ঠিক -৬ dB) হয়ে যায়।"
      }
    },
    {
      "id": "mcq-ch11-l14-06",
      "question": {
        "en": "What is the peak directivity D_0 of an ideal half-wave dipole in linear ratio and in dBi?",
        "hi": "एक आदर्श हाफ-वेव डायपोल की अधिकतम दिशिकता (Directivity) रैखिक अनुपात और dBi में कितनी होती है?",
        "bn": "একটি আদর্শ হাফ-ওয়েভ ডাইপোলের সর্বোচ্চ নির্দেশকতা রৈখিক মানে এবং dBi তে কত?"
      },
      "options": [
        { "id": "opt-1", "text": { "en": "1.00 (0 dBi)", "hi": "1.00 (0 dBi)", "bn": "১.০০ (০ dBi)" } },
        { "id": "opt-2", "text": { "en": "1.50 (1.76 dBi)", "hi": "1.50 (1.76 dBi)", "bn": "১.৫০ (১.৭৬ dBi)" } },
        { "id": "opt-3", "text": { "en": "1.64 (2.15 dBi)", "hi": "1.64 (2.15 dBi)", "bn": "১.৬৪ (২.১৫ dBi)" } },
        { "id": "opt-4", "text": { "en": "3.00 (4.77 dBi)", "hi": "3.00 (4.77 dBi)", "bn": "৩.০০ (৪.৭৭ dBi)" } }
      ],
      "correctOptionId": "opt-3",
      "explanation": {
        "en": "The half-wave dipole directivity is D_0 = 1.643. In decibels over an isotropic radiator: 10 log10(1.643) = 2.15 dBi.",
        "hi": "हाफ-वेव डायपोल की दिशिकता 1.64 होती है, जो 10 log10(1.64) = 2.15 dBi के बराबर है।",
        "bn": "হাফ-ওয়েভ ডাইপোলের নির্দেশকতা ১.৬৪, যা ১০ log10(১.৬৪) = ২.১৫ dBi।"
      }
    },
    {
      "id": "mcq-ch11-l14-07",
      "question": {
        "en": "What is the universal relationship between an antenna's effective aperture A_e and its power gain G?",
        "hi": "एंटीना के प्रभावी द्वारक A_e और इसकी लब्धि G के बीच सार्वभौमिक संबंध क्या है?",
        "bn": "অ্যান্টেনার কার্যকর অ্যাপারচার A_e এবং এর গেইন G এর মধ্যকার সার্বজনীন সম্পর্ক কোনটি?"
      },
      "options": [
        { "id": "opt-1", "text": { "en": "A_e = (λ² / 4π) · G", "hi": "A_e = (λ² / 4π) · G", "bn": "A_e = (λ² / ৪π) · G" } },
        { "id": "opt-2", "text": { "en": "A_e = 4π λ² · G", "hi": "A_e = 4π λ² · G", "bn": "A_e = ৪π λ² · G" } },
        { "id": "opt-3", "text": { "en": "A_e = G / λ²", "hi": "A_e = G / λ²", "bn": "A_e = G / λ²" } },
        { "id": "opt-4", "text": { "en": "A_e = λ · G", "hi": "A_e = λ · G", "bn": "A_e = λ · G" } }
      ],
      "correctOptionId": "opt-1",
      "explanation": {
        "en": "By electromagnetic reciprocity, every antenna satisfies the universal relationship A_e = (λ² / 4π) G.",
        "hi": "विद्युत चुंबकीय पारस्परिकता के अनुसार A_e = (λ² / 4π) G सदैव सत्य होता है।",
        "bn": "তড়িৎচৌম্বকীয় পারস্পরিকতা তত্ত্বানুসারে A_e = (λ² / ৪π) G সর্বদা প্রযোজ্য।"
      }
    },
    {
      "id": "mcq-ch11-l14-08",
      "question": {
        "en": "In a wireless RF link budget, what does a positive 'Link Margin' (e.g. +15 dB) signify?",
        "hi": "वायरलेस RF लिंक बजट में एक धनात्मक 'लिंक मार्जिन' (जैसे +15 dB) क्या दर्शाता है?",
        "bn": "একটি ওয়্যারলেস আরএফ লিংক বাজেটে ধনাত্মক 'লিংক মার্জিন' (যেমন +১৫ dB) কী নির্দেশ করে?"
      },
      "options": [
        { "id": "opt-1", "text": { "en": "The link has failed completely and cannot communicate", "hi": "लिंक पूरी तरह विफल हो गया है और संपर्क नहीं हो सकता", "bn": "লিংকটি সম্পূর্ণ ব্যর্থ হয়েছে এবং যোগাযোগ সম্ভব নয়" } },
        { "id": "opt-2", "text": { "en": "The received signal is 15 dB stronger than the minimum required receiver sensitivity, ensuring reliable connection despite fading", "hi": "प्राप्त सिग्नल आवश्यक न्यूनतम संवेदनशीलता से 15 dB अधिक मजबूत है, जो सिग्नल उतार-चढ़ाव में भी स्थिर संपर्क सुनिश्चित करता है", "bn": "গৃহীত সংকেত রিসিভারের ন্যূনতম সংবেদনশীলতার চেয়ে ১৫ dB শক্তিশালী, যা ফেডিং সত্ত্বেও স্থিতিশীল যোগাযোগ নিশ্চিত করে" } },
        { "id": "opt-3", "text": { "en": "The transmitter is overheating by 15 degrees Celsius", "hi": "ट्रांसमीटर 15 डिग्री सेल्सियस अधिक गर्म हो रहा है", "bn": "ট্রান্সমিটার ১৫ ডিগ্রি সেলসিয়াস অতিরিক্ত উত্তপ্ত হচ্ছে" } },
        { "id": "opt-4", "text": { "en": "The antenna has rotated by 15 degrees", "hi": "एंटीना 15 डिग्री घूम गया है", "bn": "অ্যান্টেনা ১৫ ডিগ্রি ঘুরে গেছে" } }
      ],
      "correctOptionId": "opt-2",
      "explanation": {
        "en": "Link Margin = P_received - P_sensitivity. A positive margin indicates extra power buffer against atmospheric rain fading, multipath interference, and antenna misalignment.",
        "hi": "लिंक मार्जिन = प्राप्त सिग्नल - न्यूनतम संवेदनशीलता। धनात्मक मान मौसम खराब होने पर भी स्थिर संचार की गारंटी देता है।",
        "bn": "লিংক মার্জিন = প্রাপ্ত ক্ষমতা - ন্যূনতম সংবেদনশীলতা। ধনাত্মক মান নির্দেশ করে যে সংকেতটি বিরূপ আবহাওয়াতেও অক্ষুণ্ণ থাকবে।"
      }
    }
  ],
  "practiceQuestions": [
    {
      "id": "pq-ch11-l14-01",
      "question": {
        "en": "An outdoor point-to-point microwave link connects two corporate buildings 5.0 km apart operating at 5.8 GHz. The transmitter delivers P_t = 250 mW (+24 dBm) into a directional antenna with gain G_t = 23 dBi. The receiver antenna also has G_r = 23 dBi. Cable losses are 2 dB at each side. (a) Calculate the Free-Space Path Loss (FSPL) in dB. (b) Determine the received power P_r in dBm. (c) If receiver sensitivity is -88 dBm, calculate the link margin.",
        "hi": "5.8 GHz पर 5.0 किमी दूरी पर स्थित दो भवनों के बीच माइक्रोवेव लिंक है। ट्रांसमीटर शक्ति 250 mW (+24 dBm) है, G_t = 23 dBi, G_r = 23 dBi तथा दोनों तरफ केबल हानि 2 dB है। ज्ञात कीजिए: (a) FSPL (dB में), (b) प्राप्त शक्ति P_r (dBm में), तथा (c) यदि संवेदनशीलता -88 dBm हो तो लिंक मार्जिन।",
        "bn": "৫.৮ GHz এ ৫.০ কিমি দূরবর্তী দুটি ভবনের মধ্যে মাইক্রোওয়েভ লিংক স্থাপন করা হয়েছে। ট্রান্সমিটার ক্ষমতা ২৫০ mW (+২৪ dBm), G_t = ২৩ dBi, G_r = ২৩ dBi এবং উভয় পাশে কেবলের অপচয় ২ dB। নির্ণয় করুন: (a) FSPL (dB তে), (b) প্রাপ্ত ক্ষমতা P_r (dBm এ), এবং (c) রিসিভার সংবেদনশীলতা -৮৮ dBm হলে লিংক মার্জিন কত?"
      },
      "hint": {
        "en": "FSPL = 32.44 + 20 log10(R_km) + 20 log10(f_MHz). f = 5800 MHz.",
        "hi": "FSPL = 32.44 + 20 log10(5) + 20 log10(5800) = 32.44 + 13.98 + 75.27 = 121.7 dB।",
        "bn": "FSPL = ৩২.৪৪ + ২০ log10(৫) + ২০ log10(৫৮০০) = ১২১.৭ dB।"
      },
      "answerKey": {
        "en": "(a) FSPL(dB) = 32.44 + 20 log10(5.0) + 20 log10(5800) = 32.44 + 13.979 + 75.269 = 121.69 dB ≈ 121.7 dB.\n(b) Total Received Power:\nP_r(dBm) = P_t + G_t + G_r - L_cable_tx - L_cable_rx - FSPL\nP_r(dBm) = +24 + 23 + 23 - 2 - 2 - 121.7 = 66 - 121.7 = -55.7 dBm.\n(c) Link Margin:\nLink Margin = P_r - P_sens = -55.7 dBm - (-88.0 dBm) = +32.3 dB.\nThe link has a very robust 32.3 dB fade margin.",
        "hi": "(a) FSPL = 121.7 dB; (b) P_r = 24 + 23 + 23 - 4 - 121.7 = -55.7 dBm; (c) लिंक मार्जिन = -55.7 - (-88) = +32.3 dB।",
        "bn": "(a) FSPL = ১২১.৭ dB; (b) P_r = ২৪ + ২৩ + ২৩ - ৪ - ১২১.৭ = -৫৫.৭ dBm; (c) লিংক মার্জিন = -৫৫.৭ - (-৮৮) = +৩২.৩ dB।"
      }
    },
    {
      "id": "pq-ch11-l14-02",
      "question": {
        "en": "A center-fed half-wave dipole in air carries a peak terminal current I_0 = 2.0 A at 150 MHz. Calculate: (a) the physical length of the antenna L, (b) the total power radiated P_rad, (c) the peak electric field strength E_θ at distance r = 10 km in the equatorial plane (θ = 90°), and (d) the radiation efficiency if the ohmic wire resistance is R_loss = 1.5 Ω.",
        "hi": "150 MHz पर एक हाफ-वेव डायपोल में शिखर इनपुट करंट I_0 = 2.0 A है। ज्ञात कीजिए: (a) एंटीना की लंबाई L, (b) कुल विकिरित शक्ति P_rad, (c) विषुवतीय तल (θ = 90°) में r = 10 km पर विद्युत क्षेत्र की तीव्रता E_θ, तथा (d) यदि तार का हानि प्रतिरोध R_loss = 1.5 Ω हो तो विकिरण दक्षता।",
        "bn": "১৫০ MHz কম্পাঙ্কে একটি হাফ-ওয়েভ ডাইপোলে শীর্ষ ইনপুট কারেন্ট I_0 = ২.০ A। নির্ণয় করুন: (a) অ্যান্টেনার দৈর্ঘ্য L, (b) মোট বিকিরিত ক্ষমতা P_rad, (c) θ = ৯০° তলে r = ১০ কিমি দূরত্বে তড়িৎ ক্ষেত্রের প্রাবল্য E_θ, এবং (d) তারের অভ্যন্তরীণ রোধ R_loss = ১.৫ Ω হলে বিকিরণ দক্ষতা কত?"
      },
      "hint": {
        "en": "λ = c / f. L = λ / 2. P_rad = 0.5 I_0² R_rad. E = (60 I_0) / r for half-wave dipole at θ = 90°. η = R_rad / (R_rad + R_loss).",
        "hi": "λ = 3×10⁸ / 150×10⁶ = 2.0 m। L = 1.0 m। P_rad = 0.5 × (2)² × 73.1 = 146.2 W।",
        "bn": "λ = ৩×১০⁸ / ১৫০×১০⁶ = ২.০ m। L = ১.০ m। P_rad = ০.৫ × (২)² × ৭৩.১ = ১৪৬.২ W।"
      },
      "answerKey": {
        "en": "(a) λ = c / f = 3.0 × 10⁸ / 1.5 × 10⁸ = 2.0 m. Antenna physical length L = λ / 2 = 1.0 meter.\n(b) P_rad = (1/2) I_0² R_rad = (1/2) × (2.0)² × 73.13 Ω = 2 × 73.13 = 146.26 Watts.\n(c) At θ = 90°: E_θ = (η0 I_0) / (2π r) = (120π × 2.0) / (2π × 10,000) = (60 × 2.0) / 10,000 = 120 / 10,000 = 0.012 V/m = 12.0 mV/m.\n(d) Radiation efficiency: η_rad = R_rad / (R_rad + R_loss) = 73.13 / (73.13 + 1.5) = 73.13 / 74.63 = 0.9799 ≈ 98.0%.",
        "hi": "(a) L = 1.0 m; (b) P_rad = 146.3 W; (c) E = 12.0 mV/m; (d) विकिरण दक्षता = 73.1 / 74.6 = 98.0%।",
        "bn": "(a) L = ১.০ m; (b) P_rad = ১৪৬.৩ W; (c) E = ১২.০ mV/m; (d) বিকিরণ দক্ষতা = ৭৩.১ / ৭৪.৬ = ৯৮.০%।"
      }
    },
    {
      "id": "pq-ch11-l14-03",
      "question": {
        "en": "Explain the physical difference between the Reactive Near-Field, Radiating Near-Field (Fresnel), and Far-Field (Fraunhofer) regions around an antenna. Why must antenna pattern measurements be performed strictly in the Fraunhofer region?",
        "hi": "एंटीना के चारों ओर प्रतिक्रियाशील निकट-क्षेत्र, विकिरक निकट-क्षेत्र (फ्रेस्नेल), तथा सुदूर-क्षेत्र (फ्रौनहोफर) के बीच भौतिक अंतर स्पष्ट कीजिए। एंटीना पैटर्न मापन केवल फ्रौनहोफर क्षेत्र में ही क्यों किए जाने चाहिए?",
        "bn": "অ্যান্টেনার চারপাশের প্রতিক্রিয়াশীল নিকট-ক্ষেত্র, বিকিরক নিকট-ক্ষেত্র (ফ্রেনেল) এবং দূর-ক্ষেত্র (ফ্রনহফার) অঞ্চলের মধ্যকার ভৌত পার্থক্য আলোচনা করুন। অ্যান্টেনা প্যাটার্ন পরিমাপ কেন কেবল ফ্রনহফার অঞ্চলেই করতে হয়?"
      },
      "hint": {
        "en": "Stored inductive/capacitive energy dominates in reactive near-field. Curvature of wavefront across aperture dominates in radiating near-field. In far field, spherical waves become locally planar with orthogonal E and H.",
        "hi": "निकट क्षेत्र में संचित ऊर्जा होती है जो अंतरिक्ष में नहीं जाती। सुदूर क्षेत्र (r > 2D²/λ) में तरंगे समतल बन जाती हैं और पैटर्न दूरी से स्वतंत्र हो जाता है।",
        "bn": "নিকট-ক্ষেত্রে সঞ্চিত শক্তি থাকে যা বিকিরিত হয় না। দূর-ক্ষেত্রে (r > ২D²/λ) তরঙ্গ পুরোপুরি সমতলে রূপ নেয় এবং প্যাটার্ন দূরত্বের ওপর নির্ভরশীল থাকে না।"
      },
      "answerKey": {
        "en": "1. Reactive Near-Field (r < 0.62 √(D³/λ)): Stored electrostatic and magnetostatic energy dominates. Fields oscillate back and forth into the antenna without radiating into space, decaying rapidly as 1/r³ and 1/r².\n2. Radiating Near-Field (Fresnel region) (0.62 √(D³/λ) < r < 2D²/λ): Radiated fields dominate over stored fields, but the distance from different points on the antenna aperture to the observer varies enough that spherical wave phase curvature creates interference ripples that change the radiation pattern as a function of distance r.\n3. Far-Field (Fraunhofer region) (r ≥ 2D²/λ): The rays from all points on the aperture are effectively parallel (phase deviation across the aperture is strictly less than π/8 radians or 22.5°). The wavefronts are locally uniform TEM plane waves with wave impedance η0 = 377 Ω. The angular radiation pattern shape is completely stationary and invariant with distance r. Therefore, antenna directivity, beamwidth, and gain are only physically valid in this Fraunhofer zone.",
        "hi": "1. प्रतिक्रियाशील निकट-क्षेत्र: यहां ऊर्जा संचित रहती है और 1/r³ के अनुसार घटती है।\n2. विकिरक निकट-क्षेत्र: विकिरण शुरू होता है परंतु तरंगों का वक्रता प्रभाव पैटर्न को दूरी के साथ बदलता रहता है।\n3. फ्रौनहोफर सुदूर-क्षेत्र (r ≥ 2D²/λ): यहां किरणें समानांतर हो जाती हैं और तरंगें समतल बन जाती हैं। विकिरण पैटर्न दूरी के साथ नहीं बदलता, इसलिए सभी लाभ और दिशिकता मापन इसी क्षेत्र में किए जाते हैं।",
        "bn": "১. প্রতিক্রিয়াশীল নিকট-ক্ষেত্র: এখানে তড়িৎ ও চৌম্বক শক্তি সঞ্চিত থাকে এবং দূরত্ব বৃদ্ধির সাথে ১/r³ হারে দ্রুত ক্ষয়প্রাপ্ত হয়।\n২. বিকিরক নিকট-ক্ষেত্র: বিকিরণ শুরু হলেও তরঙ্গের বক্রতার কারণে প্যাটার্ন দূরত্বের সাথে পরিবর্তিত হতে থাকে।\n৩. ফ্রনহফার দূর-ক্ষেত্র (r ≥ ২D²/λ): এখানে সমস্ত রশ্মি সমান্তরাল হয়ে নিখুঁত সমতল তরঙ্গে রূপ নেয়। রেডিয়েশন প্যাটার্ন দূরত্বের ওপর নির্ভরশীল থাকে না, ফলে সমস্ত অ্যান্টেনা গেইন পরিমাপ এই দূর-ক্ষেত্রেই সম্পন্ন করতে হয়।"
      }
    },
    {
      "id": "pq-ch11-l14-04",
      "question": {
        "en": "Derive the Friis transmission formula P_r = P_t G_t G_r (λ / (4π R))² from first principles of power flux density and effective antenna aperture.",
        "hi": "शक्ति फ्लक्स घनत्व एवं प्रभावी एंटीना द्वारक के मूल सिद्धांतों से फ्रीस संचरण सूत्र P_r = P_t G_t G_r (λ / (4π R))² का निगमन कीजिए।",
        "bn": "শক্তি ফ্লাক্স ঘনত্ব এবং অ্যান্টেনার কার্যকর অ্যাপারচারের মৌলিক নীতি থেকে ফ্রিইস সঞ্চালন সমীকরণ P_r = P_t G_t G_r (λ / (৪π R))² প্রতিপাদন করুন।"
      },
      "hint": {
        "en": "Start with power density S = P_t G_t / (4π R²), then received power P_r = S · A_e,r with A_e,r = (λ² / 4π) G_r.",
        "hi": "S = P_t G_t / (4π R²) से शुरू करें। फिर P_r = S × A_e,r रखें जहां A_e,r = (λ² / 4π) G_r।",
        "bn": "S = P_t G_t / (৪π R²) দিয়ে শুরু করে P_r = S × A_e,r বসান যেখানে A_e,r = (λ² / ৪π) G_r।"
      },
      "answerKey": {
        "en": "Step 1: If an isotropic transmitter radiates power P_t uniformly over a sphere of radius R, the power density is S_iso = P_t / (4π R²).\nStep 2: A directional transmitter with gain G_t concentrates power in the target direction, increasing the power flux density to:\nS = P_t · G_t / ( 4π R² )   [W/m²].\nStep 3: The receiving antenna intercepts this power flux with its effective aperture area A_e,r:\nP_r = S · A_e,r = [ (P_t · G_t) / (4π R²) ] · A_e,r.\nStep 4: According to electromagnetic antenna theory, the effective aperture of the receiver is related to its gain G_r by A_e,r = (λ² / 4π) · G_r.\nSubstituting A_e,r yields:\nP_r = [ (P_t · G_t) / (4π R²) ] · [ (λ² · G_r) / (4π) ] = P_t · G_t · G_r · [ λ² / (16 π² R²) ]\nP_r = P_t · G_t · G_r · [ λ / (4π R) ]².\nThis completes the derivation.",
        "hi": "चरण 1: फ्लक्स घनत्व S = P_t G_t / (4π R²) W/m²।\nचरण 2: प्राप्त शक्ति P_r = S × A_e,r।\nचरण 3: A_e,r = (λ² / 4π) G_r रखने पर:\nP_r = [ P_t G_t / (4π R²) ] × [ (λ² G_r) / 4π ] = P_t G_t G_r [ λ / (4π R) ]²। सिद्ध हुआ।",
        "bn": "ধাপ ১: শক্তি ফ্লাক্স ঘনত্ব S = P_t G_t / (৪π R²) W/m²।\nধাপ ২: গৃহীত ক্ষমতা P_r = S × A_e,r।\nধাপ ৩: A_e,r = (λ² / ৪π) G_r প্রতিস্থাপন করলে পাওয়া যায়:\nP_r = [ P_t G_t / (৪π R²) ] × [ (λ² G_r) / ৪π ] = P_t G_t G_r [ λ / (৪π R) ]²। প্রতিপাদন সম্পন্ন হলো।"
      }
    },
    {
      "id": "pq-ch11-l14-05",
      "question": {
        "en": "Why do high-frequency wireless systems (such as 60 GHz WiGig or 28 GHz 5G) require phased-array beamforming antennas compared to low-frequency FM radio broadcast towers at 100 MHz?",
        "hi": "100 MHz के FM रेडियो प्रसारण टावरों की तुलना में उच्च-आवृत्ति प्रणालियों (जैसे 28 GHz 5G या 60 GHz WiGig) को फेज़्ड-एरे बीमफॉर्मिंग एंटेना की आवश्यकता क्यों होती है?",
        "bn": "১০০ MHz এর FM রেডিও ব্রডকাস্ট টাওয়ারের তুলনায় উচ্চ-কম্পাঙ্কের ব্যবস্থায় (যেমন ২৮ GHz 5G বা ৬০ GHz WiGig) কেন ফেজড-অ্যারে বিমফর্মিং অ্যান্টেনা প্রয়োজন হয়?"
      },
      "hint": {
        "en": "FSPL scales with f²; antenna effective aperture A_e = (λ² / 4π) G shrinks dramatically at millimeter wavelengths unless gain G is increased via multi-element arrays.",
        "hi": "FSPL आवृत्ति के वर्ग (f²) के साथ बढ़ती है और प्रभावी द्वारक घट जाता है। उच्च लाभ (Gain) प्राप्त करने के लिए बीमफॉर्मिंग आवश्यक है।",
        "bn": "FSPL কম্পাঙ্কের বর্গের (f²) সাথে বৃদ্ধি পায় এবং অ্যাপারচার সংকুচিত হয়। সংকেতের ঘাটতি পূরণে উচ্চ গেইনের বিমফর্মিং জরুরি।"
      },
      "answerKey": {
        "en": "From the Friis formula, path loss increases with the square of frequency (f²). Specifically, the effective aperture of an omnidirectional receiving antenna (A_e = λ² / 4π) shrinks dramatically as wavelength drops from 3 meters at 100 MHz down to just 5 millimeters at 60 GHz (a factor of 360,000× reduction in intercept area!). Consequently, received power drops by ~55 dB if isotropic antennas are used at both ends. To overcome this massive geometric path loss, millimeter-wave systems cannot rely on omnidirectional broadcasting; instead, they must concentrate RF energy into tight, high-gain pencil beams using electronically steered Phased Array Antennas (beamforming). These arrays provide 20 to 30 dBi of gain, restoring link budget margin and dynamically tracking mobile user devices.",
        "hi": "फ्रीस सूत्र के अनुसार पथ हानि आवृत्ति के वर्ग (f²) के साथ बढ़ती है। 100 MHz से 60 GHz पर जाने पर तरंगदैर्ध्य छोटी हो जाने से एंटीना का प्रभावी क्षेत्रफल 3,60,000 गुना घट जाता है, जिससे सिग्नल 55 dB कमजोर हो जाता है। इस भारी नुकसान की भरपाई के लिए 5G और वाई-गिग प्रणालियां बीमफॉर्मिंग फेज़्ड-एरे एंटेना का उपयोग करती हैं जो ऊर्जा को एक संकीर्ण लेज़र जैसी बीम में केंद्रित करके यूजर तक पहुंचाती हैं।",
        "bn": "ফ্রিইস সূত্রানুসারে অপচয় কম্পাঙ্কের বর্গের (f²) সমানুপাতিক। ১০০ MHz থেকে ৬০ GHz এ গেলে অ্যান্টেনার কার্যকর ক্ষেত্রফল ৩,৬০,০০০ গুণ সংকুচিত হয়ে যায়, যার ফলে সংকেত প্রায় ৫৫ dB হ্রাস পায়। এই বিশাল ক্ষতি পূরণ করতে ৫G মিলিমিটার-ওয়েভে চারদিকে না ছড়িয়ে ফেজড-অ্যারে বিমফর্মিং দিয়ে শক্তির লেজার সদৃশ সংকীর্ণ উচ্চ-গেইন বিম তৈরি করে সরাসরি ডিভাইসের দিকে পাঠানো হয়।"
      }
    }
  ]
}

save_lesson('src/data/chapter11Lesson14.ts', 'LESSON_ANTENNA_FUNDAMENTALS_LINK_BUDGET', lesson14)
print("Lesson 14 generated.")
