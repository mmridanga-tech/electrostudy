import { Lesson } from '../types';

export const LESSON_MAXWELLS_EQUATIONS: Lesson = {
  id: 'lsn-ch11-maxwell-equations',
  topicId: 'ch11-maxwell-equations',
  chapterId: 'ch-em-waves',
  order: 6,
  title: {
    en: "Maxwell's Equations & Boundary Conditions",
    hi: 'मैक्सवेल के समीकरण एवं सीमांत शर्तें',
    bn: 'ম্যাক্সওয়েলের সমীকরণসমূহ ও সীমান্ত শর্তাবলী'
  },
  description: {
    en: "The unified foundation of classical electrodynamics: all four Maxwell equations in differential, integral, and phasor forms, non-existence of magnetic monopoles, free-space reductions, and interface boundary conditions.",
    hi: 'शास्त्रीय विद्युतगतिकी की एकीकृत नींव: अवकल, समाकल एवं फेजर रूपों में मैक्सवेल के चारों समीकरण, चुंबकीय एकध्रुव की अनुपस्थिति, मुक्त-अंतरिक्ष रूप तथा अंतरापृष्ठीय सीमांत शर्तें।',
    bn: 'চিরায়ত তড়িৎগতিবিদ্যার সমন্বিত ভিত্তি: অবকল, সমাকলন ও ফেজর রূপে ম্যাক্সওয়েলের চারটি সমীকরণ, চৌম্বক একক মেরুর অনুপস্থিতি, শূন্য মাধ্যমের সমীকরণ এবং বিভেদতলের সীমান্ত শর্তাবলী।'
  },
  estimatedMinutes: 45,
  easyExplanation: {
    en: "Just as Newton's three laws govern all mechanical motion, Maxwell's four equations govern every electrical, magnetic, and optical phenomenon in the entire universe. Formulated together, they describe:\n1. How electric charges create electric fields (Gauss's Law for Electricity).\n2. Why magnetic monopoles do not exist and magnetic field lines always form closed unbroken loops (Gauss's Law for Magnetism).\n3. How a changing magnetic field creates an electric field (Faraday's Law of Induction).\n4. How electric currents and changing electric fields create magnetic fields (Ampere-Maxwell Law).\nWhen light or radio waves strike the boundary between two materials (like air and glass), these four equations dictate exactly how the wave reflects and refracts through electromagnetic boundary conditions.",
    hi: 'जिस प्रकार न्यूटन के तीन नियम संपूर्ण यांत्रिकी को नियंत्रित करते हैं, उसी प्रकार मैक्सवेल के चार समीकरण ब्रह्मांड की प्रत्येक विद्युत, चुंबकीय और प्रकाशीय परिघटना को नियंत्रित करते हैं:\n1. विद्युत आवेश विद्युत क्षेत्र कैसे बनाते हैं (विद्युत का गॉस नियम)।\n2. चुंबकीय एकल ध्रुव क्यों नहीं होते और चुंबकीय रेखाएं बंद लूप क्यों बनाती हैं (चुंबकत्व का गॉस नियम)।\n3. बदलता चुंबकीय क्षेत्र विद्युत क्षेत्र कैसे उत्पन्न करता है (फैराडे का प्रेरण नियम)।\n4. धाराएं और बदलते विद्युत क्षेत्र चुंबकीय क्षेत्र कैसे बनाते हैं (एम्पीयर-मैक्सवेल नियम)।\nजब प्रकाश या रेडियो तरंगें दो माध्यमों (जैसे हवा और कांच) की सीमा पर टकराती हैं, तो ये समीकरण सीमांत शर्तों के माध्यम से उनके परावर्तन और अपवर्तन का सटीक निर्धारण करते हैं।',
    bn: 'যেভাবে নিউটনের তিনটি সূত্র সমগ্র বলবিদ্যা নিয়ন্ত্রণ করে, ঠিক তেমনি ম্যাক্সওয়েলের চারটি সমীকরণ মহাবিশ্বের সমস্ত বৈদ্যুতিক, চৌম্বকীয় ও আলোকীয় ঘটনাকে ব্যাখ্যা করে:\n১. কীভাবে তড়িৎ আধান তড়িৎ ক্ষেত্র সৃষ্টি করে (স্থিরতড়িতের গাউসের সূত্র)।\n২. কেন চৌম্বক একক মেরুর কোনো অস্তিত্ব নেই এবং বলরেখা সর্বদা বদ্ধ লুপ গঠন করে (চুম্বকত্বের গাউসের সূত্র)।\n৩. কীভাবে পরিবর্তনশীল চৌম্বক ক্ষেত্র তড়িৎ ক্ষেত্র উৎপন্ন করে (ফ্যারাডের আবেশ সূত্র)।\n৪. কীভাবে তড়িৎ প্রবাহ এবং পরিবর্তনশীল তড়িৎ ক্ষেত্র চৌম্বক ক্ষেত্র সৃষ্টি করে (অ্যাম্পিয়ার-ম্যাক্সওয়েল সূত্র)।\nআলো বা রেডিও তরঙ্গ যখন দুটি মাধ্যমের বিভেদতলে আপতিত হয়, তখন এই চারটি সমীকরণই তাদের প্রতিফলন ও প্রতিসরণের সীমান্ত শর্ত নির্ধারণ করে।'
  },
  detailedExplanation: {
    en: "James Clerk Maxwell synthesized the independent experimental discoveries of Coulomb, Gauss, Ampere, and Faraday into a coherent set of four partial differential equations in 1865. Together with the Lorentz force equation F = q(E + v × B), they provide a complete, relativistic description of classical electromagnetism.\n\nTHE CANONICAL FOUR MAXWELL EQUATIONS:\n\n1. Gauss's Law for Electricity:\n   • Differential: ∇ · D = ρ_v   (or ∇ · E = ρ / ε0 in vacuum)\n   • Integral: ∮_S D · dA = Q_free,enc\n   • Physical Meaning: Electric charges act as divergent sources (positive) or convergent sinks (negative) of electric displacement flux.\n\n2. Gauss's Law for Magnetism:\n   • Differential: ∇ · B = 0\n   • Integral: ∮_S B · dA = 0\n   • Physical Meaning: There are no isolated magnetic charges (magnetic monopoles) in nature. Magnetic flux lines are continuously unbroken closed loops without beginning or end.\n\n3. Faraday's Law of Electromagnetic Induction:\n   • Differential: ∇ × E = - ∂B / ∂t\n   • Integral: ∮_C E · dl = - d/dt ∫_S B · dA\n   • Physical Meaning: A time-varying magnetic field induces a non-conservative, circulating vortex electric field.\n\n4. Ampere-Maxwell Law:\n   • Differential: ∇ × H = J_c + ∂D / ∂t   (or ∇ × B = μ0 J_c + μ0 ε0 ∂E/∂t in vacuum)\n   • Integral: ∮_C H · dl = ∫_S (J_c + ∂D / ∂t) · dA\n   • Physical Meaning: Both conduction electric currents and time-varying electric displacement fields produce circulating magnetic fields.\n\nFREE-SPACE (SOURCE-FREE) FORM:\nIn empty vacuum far away from charges (ρ = 0) and currents (J = 0):\n1. ∇ · E = 0\n2. ∇ · B = 0\n3. ∇ × E = - ∂B / ∂t\n4. ∇ × B = μ0 ε0 ∂E / ∂t\nTaking the curl of Eq. 3 and substituting Eq. 4 yields the electromagnetic wave equation: ∇²E = μ0 ε0 (∂²E / ∂t²), proving that light is an electromagnetic wave traveling at speed c = 1 / √(μ0 ε0).\n\nTIME-HARMONIC (PHASOR) FORM:\nAssuming sinusoidal steady-state fields with time dependence e^(jω t):\n1. ∇ · D = ρ_v\n2. ∇ · B = 0\n3. ∇ × E = - j ω B\n4. ∇ × H = J_c + j ω D\n\nELECTROMAGNETIC BOUNDARY CONDITIONS:\nAcross an interface between Medium 1 (ε1, μ1, σ1) and Medium 2 (ε2, μ2, σ2):\n• Normal D: D_1n - D_2n = ρ_s  (If interface has no free surface charge: D_1n = D_2n, or ε1 E_1n = ε2 E_2n)\n• Tangential E: E_1t - E_2t = 0  (Tangential E is strictly continuous across all interfaces)\n• Normal B: B_1n - B_2n = 0  (Normal B is strictly continuous across all interfaces)\n• Tangential H: H_1t - H_2t = J_s  (If interface has no surface conduction current: H_1t = H_2t).",
    hi: 'जेम्स क्लर्क मैक्सवेल ने 1865 में कूलॉम, गॉस, एम्पीयर और फैराडे के नियमों को चार आंशिक अवकल समीकरणों के एक सुसंगत समूह में एकीकृत किया।\n\nमैक्सवेल के चार मौलिक समीकरण:\n1. विद्युत का गॉस नियम: ∇ · D = ρ_v (समाकल: ∮ D · dA = Q_free)। आवेश विद्युत क्षेत्र रेखाओं के स्रोत या सिंक हैं।\n2. चुंबकत्व का गॉस नियम: ∇ · B = 0 (समाकल: ∮ B · dA = 0)। चुंबकीय एकल ध्रुव का कोई अस्तित्व नहीं है; रेखाएं सदैव संवृत लूप बनाती हैं।\n3. फैराडे का प्रेरण नियम: ∇ × E = -∂B/∂t। समय-परिवर्ती चुंबकीय क्षेत्र विद्युत क्षेत्र उत्पन्न करता है।\n4. एम्पीयर-मैक्सवेल नियम: ∇ × H = J + ∂D/∂t। चालन धारा और बदलता विद्युत क्षेत्र चुंबकीय क्षेत्र बनाते हैं।\n\nमुक्त अंतरिक्ष में (ρ = 0, J = 0):\n∇ × E = -∂B/∂t और ∇ × B = μ0 ε0 ∂E/∂t से तरंग समीकरण ∇²E = μ0 ε0 ∂²E/∂t² प्राप्त होता है, जिससे प्रकाश की चाल c = 1/√(μ0 ε0) निकलती है।\n\nसीमांत शर्तें:\n• स्पर्शरेखीय E निरंतर रहता है: E_1t = E_2t\n• लंबवत B निरंतर रहता है: B_1n = B_2n\n• लंबवत D में विच्छिन्नता पृष्ठीय आवेश के बराबर होती है: D_1n - D_2n = ρ_s\n• स्पर्शरेखीय H में विच्छिन्नता पृष्ठीय धारा के बराबर होती है: H_1t - H_2t = J_s।',
    bn: '১৮৬৫ সালে জেমস ক্লার্ক ম্যাক্সওয়েল কুলম্ব, গাউস, অ্যাম্পিয়ার ও ফ্যারাডের আবিষ্কারগুলিকে চারটি সুষম সমীকরণে রূপ দেন।\n\nম্যাক্সওয়েলের চারটি সমীকরণ:\n১. তড়িৎ গাউসের সূত্র: ∇ · D = ρ_v (সমাকলন: ∮ D · dA = Q_free)। আধান তড়িৎ ক্ষেত্রের উৎস।\n২. চুম্বকত্বের গাউসের সূত্র: ∇ · B = ০ (সমাকলন: ∮ B · dA = ০)। প্রকৃতিতে বিচ্ছিন্ন চৌম্বক একক মেরুর অস্তিত্ব নেই; বলরেখা সর্বদা বদ্ধ লুপ তৈরি করে।\n৩. ফ্যারাডের আবেশ সূত্র: ∇ × E = -∂B/∂t। পরিবর্তনশীল চৌম্বক ক্ষেত্র তড়িৎ ক্ষেত্র উৎপন্ন করে।\n৪. অ্যাম্পিয়ার-ম্যাক্সওয়েল সূত্র: ∇ × H = J + ∂D/∂t। পরিবাহী কারেন্ট ও পরিবর্তনশীল তড়িৎ ক্ষেত্র উভয়ই চৌম্বক ক্ষেত্র সৃষ্টি করে।\n\nশূন্য মাধ্যমে (ρ = ০, J = ০):\nএখান থেকে সরাসরি তরঙ্গ সমীকরণ ∇²E = μ0 ε0 ∂²E/∂t² পাওয়া যায়, যা নির্দেশ করে আলোর গতিবেগ c = ১/√(μ0 ε0)।\n\nসীমান্ত শর্তাবলী:\n• স্পর্শকীয় E সর্বদা অবিচ্ছিন্ন: E_1t = E_2t\n• লম্ব B সর্বদা অবিচ্ছিন্ন: B_1n = B_2n\n• লম্ব D এর বিচ্যুতি পৃষ্ঠ আধানের সমান: D_1n - D_2n = ρ_s\n• স্পর্শকীয় H এর বিচ্যুতি পৃষ্ঠ প্রবাহের সমান: H_1t - H_2t = J_s।'
  },
  formulas: [
    {
      id: 'f-maxwell-set-differential',
      symbol: 'M_diff',
      expression: '∇·D = ρ,  ∇·B = 0,  ∇×E = -∂B/∂t,  ∇×H = J + ∂D/∂t',
      title: {
        en: "Maxwell's Equations (Complete Differential Set)",
        hi: 'मैक्सवेल समीकरण (पूर्ण अवकल समूह)',
        bn: 'ম্যাক্সওয়েল সমীকরণ (পূর্ণাঙ্গ ব্যবকলন রূপ)'
      },
      description: {
        en: 'The four fundamental microscopic point-form partial differential equations of classical electrodynamics.',
        hi: 'शास्त्रीय विद्युतगतिकी के चार मौलिक बिंदु-रूप आंशिक अवकल समीकरण।',
        bn: 'চিরায়ত তড়িৎগতিবিদ্যার চারটি মৌলিক বিন্দু-ভিত্তিক আংশিক ব্যবকলনীয় সমীকরণ।'
      },
      variables: [
        { symbol: '∇·D = ρ', name: { en: "Gauss's law for electricity", hi: 'विद्युत का गॉस नियम', bn: 'তড়িতের গাউসীয় সূত্র' } },
        { symbol: '∇·B = 0', name: { en: "Gauss's law for magnetism (no monopoles)", hi: 'चुंबकत्व का गॉस नियम', bn: 'চুম্বকত্বের গাউসীয় সূত্র' } },
        { symbol: '∇×E = -∂B/∂t', name: { en: "Faraday's induction law", hi: 'फैराडे का प्रेरण नियम', bn: 'ফ্যারাডের আবেশ সূত্র' } },
        { symbol: '∇×H = J + ∂D/∂t', name: { en: 'Ampere-Maxwell circuital law', hi: 'एम्पीयर-मैक्सवेल नियम', bn: 'অ্যাম্পিয়ার-ম্যাক্সওয়েল সূত্র' } }
      ]
    },
    {
      id: 'f-maxwell-set-integral',
      symbol: 'M_integral',
      expression: '∮ D·dA = Q,  ∮ B·dA = 0,  ∮ E·dl = -dΦ_B/dt,  ∮ H·dl = I_c + dΦ_D/dt',
      title: {
        en: "Maxwell's Equations (Complete Integral Set)",
        hi: 'मैक्सवेल समीकरण (पूर्ण समाकल समूह)',
        bn: 'ম্যাক্সওয়েল সমীকরণ (পূর্ণাঙ্গ সমাকলন রূপ)'
      },
      description: {
        en: 'The macroscopic global integral forms describing total fluxes across closed surfaces and circulations along closed contours.',
        hi: 'संवृत सतहों से कुल फ्लक्स एवं संवृत लूपों के अनुदिश परिसंचरण को दर्शाने वाले समाकल रूप।',
        bn: 'বদ্ধ তলের মোট ফ্লাক্স এবং বদ্ধ পথের সঞ্চালন নির্দেশকারী ম্যাক্রোস্কোপিক সমাকলন রূপ।'
      },
      variables: [
        { symbol: 'Q', name: { en: 'Net enclosed free electric charge (C)', hi: 'कुल परिबद्ध मुक्त आवेश (C)', bn: 'মোট আবদ্ধ মুক্ত আধান (C)' } },
        { symbol: 'Φ_B', name: { en: 'Enclosed magnetic flux (Wb)', hi: 'परिबद्ध चुंबकीय फ्लक्स', bn: 'আবদ্ধ চৌম্বক ফ্লাক্স' } },
        { symbol: 'I_c', name: { en: 'Conduction current (A)', hi: 'चालन धारा', bn: 'পরিবাহী প্রবাহ' } }
      ]
    },
    {
      id: 'f-boundary-conditions',
      symbol: 'BC',
      expression: 'E₁ₜ = E₂ₜ,  B₁ₙ = B₂ₙ,  D₁ₙ - D₂ₙ = ρₛ,  H₁ₜ - H₂ₜ = Jₛ',
      title: {
        en: 'Electromagnetic Interface Boundary Conditions',
        hi: 'विद्युत चुंबकीय अंतरापृष्ठ सीमांत शर्तें',
        bn: 'তড়িৎচৌম্বক বিভেদতল সীমান্ত শর্তাবলী'
      },
      description: {
        en: 'Continuity and discontinuity conditions for tangential and normal field components across the boundary between two media.',
        hi: 'दो माध्यमों के बीच की सीमा पर स्पर्शरेखीय और लंबवत क्षेत्र घटकों की निरंतरता शर्तें।',
        bn: 'দুটি মাধ্যমের বিভেদতলে স্পর্শকীয় এবং লম্ব উপাংশের ধারাবাহিকতা ও বিচ্যুতির শর্তাবলী।'
      },
      variables: [
        { symbol: 'E_t', name: { en: 'Tangential electric field (continuous)', hi: 'स्पर्शरेखीय विद्युत क्षेत्र (सतत)', bn: 'স্পর্শকীয় তড়িৎ ক্ষেত্র (অবিচ্ছিন্ন)' } },
        { symbol: 'B_n', name: { en: 'Normal magnetic flux density (continuous)', hi: 'लंबवत चुंबकीय फ्लक्स घनत्व (सतत)', bn: 'লম্ব চৌম্বক ফ্লাক্স ঘনত্ব (অবিচ্ছিন্ন)' } },
        { symbol: 'ρ_s', name: { en: 'Surface free charge density (C/m²)', hi: 'पृष्ठीय मुक्त आवेश घनत्व', bn: 'পৃষ্ঠীয় মুক্ত আধান ঘনত্ব' } },
        { symbol: 'J_s', name: { en: 'Surface conduction current density (A/m)', hi: 'पृष्ठीय धारा घनत्व', bn: 'পৃষ্ঠীয় পরিবাহী প্রবাহ ঘনত্ব' } }
      ]
    },
    {
      id: 'f-speed-of-light-maxwell',
      symbol: 'c',
      expression: 'c = 1 / √(μ₀ ε₀) ≈ 2.998 × 10⁸ m/s',
      title: {
        en: 'Speed of Light in Vacuum from Maxwell Constants',
        hi: 'मैक्सवेल नियतांकों से निर्वात में प्रकाश की चाल',
        bn: 'ম্যাক্সওয়েল ধ্রুবক থেকে শূন্য মাধ্যমে আলোর গতিবেগ'
      },
      description: {
        en: 'Speed of electromagnetic wave propagation in vacuum determined purely from static electric permittivity and magnetic permeability.',
        hi: 'स्थिरवैद्युत परावैद्युतांक और चुंबकीय पारगम्यता से निर्धारित निर्वात में विद्युत चुंबकीय तरंग की चाल।',
        bn: 'স্থির বৈদ্যুতিক ভেদ্যতা ও চৌম্বক প্রবেশ্যতা থেকে নির্ধারিত শূন্য মাধ্যমে তরঙ্গের গতিবেগ।'
      },
      variables: [
        { symbol: 'c', name: { en: 'Speed of light in vacuum (m/s)', hi: 'प्रकाश की चाल (m/s)', bn: 'আলোর বেগ (m/s)' } },
        { symbol: 'μ₀', name: { en: 'Magnetic permeability of vacuum (4π × 10⁻⁷ H/m)', hi: 'निर्वात की चुंबकशीलता', bn: 'শূন্যস্থানের চৌম্বক প্রবেশ্যতা' } },
        { symbol: 'ε₀', name: { en: 'Electric permittivity of vacuum (8.854 × 10⁻¹² F/m)', hi: 'निर्वात का परावैद्युतांक', bn: 'শূন্যস্থানের বৈদ্যুতিক ভেদ্যতা' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-four-equations-harmony',
      title: {
        en: "1. The Unified Structure of Maxwell's Equations",
        hi: '1. मैक्सवेल समीकरणों की एकीकृत संरचना',
        bn: '১. ম্যাক্সওয়েলের সমীকরণসমূহের সমন্বিত রূপ'
      },
      content: {
        en: "Maxwell's synthesis demonstrated that electricity and magnetism are not separate forces, but twin components of a single unified entity: the electromagnetic field. The four equations exhibit profound mathematical elegance through paired divergence and curl operations:\n• Divergence Equations (Gauss's laws): ∇ · D = ρ describes longitudinal scalar charge sources; ∇ · B = 0 guarantees the non-existence of magnetic monopoles.\n• Curl Equations (Faraday & Ampere-Maxwell): ∇ × E = -∂B/∂t and ∇ × H = J + ∂D/∂t describe transverse rotational vortices, providing mutual regeneration in time and space.\nBy taking the divergence of both curl equations, the conservation of electric charge ∇ · J = -∂ρ/∂t and the absence of magnetic charge ∇ · (∂B/∂t) = 0 are automatically satisfied.",
        hi: 'मैक्सवेल के एकीकरण ने सिद्ध किया कि विद्युत और चुंबकत्व अलग नहीं हैं, बल्कि एक ही विद्युत चुंबकीय क्षेत्र के दो पहलू हैं। ये चार समीकरण डाइवर्जेंस और कर्ल संक्रियाओं के माध्यम से सुंदर सममिति प्रस्तुत करते हैं:\n• डाइवर्जेंस समीकरण: ∇ · D = ρ आवेश स्रोतों को दर्शाता है; ∇ · B = 0 चुंबकीय एकल ध्रुवों की अनुपस्थिति सुनिश्चित करता है।\n• कर्ल समीकरण: ∇ × E = -∂B/∂t और ∇ × H = J + ∂D/∂t अनुप्रस्थ भंवरों का वर्णन करते हैं जो अंतरिक्ष में एक दूसरे को पुनः उत्पन्न करते हैं।\nइन समीकरणों का डाइवर्जेंस लेने पर आवेश संरक्षण का नियम स्वतः संतुष्ट हो जाता है।',
        bn: 'ম্যাক্সওয়েলের সমন্বয় প্রমাণ করে যে বিদ্যুৎ ও চুম্বকত্ব ভিন্ন কোনো শক্তি নয়, বরং একই তড়িৎচৌম্বক ক্ষেত্রের দুটি রূপ। চারটি সমীকরণ ডাইভারজেন্স ও কার্ল অপারেশনের মাধ্যমে গভীর গাণিতিক ভারসাম্য প্রকাশ করে:\n• ডাইভারজেন্স সমীকরণ: ∇ · D = ρ আধানের উপস্থিতি নির্দেশ করে; ∇ · B = ০ চৌম্বক একক মেরুর অনুপস্থিতি নিশ্চিত করে।\n• কার্ল সমীকরণ: ∇ × E = -∂B/∂t এবং ∇ × H = J + ∂D/∂t ঘূর্ণনশীল ক্ষেত্রগুলিকে ব্যাখ্যা করে যা স্থান ও কালের মধ্য দিয়ে একে অপরকে অবিরাম পুনরুজ্জীবিত করে।\nউভয় কার্ল সমীকরণের ডাইভারজেন্স নিলে আধান সংরক্ষণ সূত্র স্বয়ংক্রিয়ভাবে প্রমাণিত হয়।'
      },
      schematicId: 'circuit-ch11-maxwell-equations'
    },
    {
      id: 'sec-boundary-conditions-optics',
      title: {
        en: '2. Boundary Conditions and Snell’s Law of Refraction',
        hi: '2. सीमांत शर्तें एवं स्नेल का अपवर्तन नियम',
        bn: '২. সীমান্ত শর্তাবলী ও স্নেলের প্রতিসরণ সূত্র'
      },
      content: {
        en: 'When electromagnetic waves encounter the boundary between two differing media (such as an air-dielectric boundary in an optical lens or radome), boundary conditions derived from Maxwell’s equations dictate field behavior:\n1. Tangential E Continuity (E_1t = E_2t): By integrating Faraday’s law around an infinitesimal rectangular loop straddling the interface, E_1t = E_2t is proved. This continuity directly forces the angles of incidence and transmission to obey Snell’s Law: k_1 sin(θ_i) = k_2 sin(θ_t) => n1 sin(θ_i) = n2 sin(θ_t).\n2. Normal B Continuity (B_1n = B_2n): By integrating ∇ · B = 0 across a pillbox straddling the boundary, normal magnetic flux density is strictly continuous across all materials.\n3. Perfect Electrical Conductor (PEC) Boundary: Inside an ideal conductor, all dynamic fields are zero (E = 0, H = 0). Consequently, at the conductor surface, the tangential electric field must be zero (E_t = 0), and normal magnetic field must be zero (B_n = 0), forcing all incident wave energy to be 100% reflected.',
        hi: 'जब विद्युत चुंबकीय तरंगें दो माध्यमों की सीमा पर टकराती हैं, तो मैक्सवेल समीकरणों से निकली सीमांत शर्तें उनके व्यवहार को नियंत्रित करती हैं:\n1. स्पर्शरेखीय E की निरंतरता (E_1t = E_2t): फैराडे नियम से सिद्ध होता है कि E_t दोनों माध्यमों में बराबर होता है। यही स्थिति स्नेल के अपवर्तन नियम n1 sin(θ_i) = n2 sin(θ_t) को जन्म देती है।\n2. लंबवत B की निरंतरता (B_1n = B_2n): ∇ · B = 0 से लंबवत चुंबकीय फ्लक्स सभी पदार्थों में निरंतर रहता है।\n3. आदर्श चालक (PEC) की सीमा: एक आदर्श चालक के भीतर E = 0 और B = 0 होता है। अतः चालक की सतह पर स्पर्शरेखीय विद्युत क्षेत्र शून्य (E_t = 0) होता है, जिसके कारण आपतित तरंग 100% परावर्तित हो जाती है।',
        bn: 'যখন তড়িৎচৌম্বক তরঙ্গ দুটি মাধ্যমের সীমানায় পৌঁছায়, তখন ম্যাক্সওয়েলের সমীকরণ থেকে প্রাপ্ত সীমান্ত শর্তাবলী তাদের গতিবিধি নির্ধারণ করে:\n১. স্পর্শকীয় E এর অবিচ্ছিন্নতা (E_1t = E_2t): ফ্যারাডের সূত্র থেকে প্রমাণিত হয় যে E_t বিভেদতলের উভয় পাশে সমান। এই শর্তটিই স্নেলের প্রতিসরণ সূত্র n1 sin(θ_i) = n2 sin(θ_t) প্রতিষ্ঠা করে।\n২. লম্ব B এর অবিচ্ছিন্নতা (B_1n = B_2n): ∇ · B = ০ সমীকরণ থেকে লম্ব চৌম্বক ফ্লাক্স সব মাধ্যমে সম্পূর্ণ অবিচ্ছিন্ন থাকে।\n৩. আদর্শ পরিবাহী (PEC) সীমানা: আদর্শ পরিবাহীর ভেতরে E = ০ এবং B = ০। ফলে পরিবাহীর পৃষ্ঠে স্পর্শকীয় তড়িৎ ক্ষেত্র শূন্য (E_t = ০) হতে বাধ্য হয়, যার কারণে আপতিত তরঙ্গ ১০০% প্রতিফলিত হয়ে ফিরে আসে।'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-maxwell-equations',
      title: {
        en: "Maxwell's Four Pillars and Interface Boundary Conditions",
        hi: 'मैक्सवेल के चार स्तंभ एवं अंतरापृष्ठ सीमांत शर्तें',
        bn: 'ম্যাক্সওয়েলের চারটি স্তম্ভ ও বিভেদতল সীমান্ত শর্তাবলী'
      },
      caption: {
        en: "Unified visual layout of the four Maxwell equations flanking a dielectric boundary, illustrating pillbox integration for normal D and B, and Stokes contour integration for tangential E and H.",
        hi: 'डाइइलेक्ट्रिक सीमा के चारों ओर मैक्सवेल के चार समीकरण, लंबवत घटकों D और B के लिए पिलबॉक्स समाकलन, तथा स्पर्शरेखीय E और H के लिए स्टोक्स समोच्च समाकलन।',
        bn: 'ডাইইলেক্ট্রিক বিভেদতলে ম্যাক্সওয়েলের চারটি সমীকরণ, লম্ব উপাদান D ও B এর জন্য পিলবক্স সমাকলন এবং স্পর্শকীয় E ও H এর জন্য স্টোকস সমাকলনের সমন্বিত রূপ।'
      },
      svgType: 'circuit-ch11-maxwell-equations'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-dielectric-boundary-refraction',
      problem: {
        en: 'An interface between air (Medium 1: εr1 = 1.0, μr1 = 1.0) and glass (Medium 2: εr2 = 4.0, μr2 = 1.0) lies in the xy-plane (z = 0). The electric field in air immediately above the boundary is E1 = 150 ax + 200 ay + 300 az (V/m). There is no free surface charge on the interface (ρ_s = 0). Calculate: (a) the electric field E2 in the glass immediately below the boundary, (b) the angle θ1 that E1 makes with the surface normal (z-axis), and (c) the angle θ2 that E2 makes with the surface normal.',
        hi: 'वायु (माध्यम 1: εr1 = 1.0) और कांच (माध्यम 2: εr2 = 4.0) के बीच की सीमा z = 0 समतल पर है। सीमा के ठीक ऊपर वायु में विद्युत क्षेत्र E1 = 150 ax + 200 ay + 300 az (V/m) है। सीमा पर कोई मुक्त आवेश नहीं है (ρ_s = 0)। ज्ञात कीजिए: (a) कांच में विद्युत क्षेत्र E2, (b) E1 का अभिलंब (z-अक्ष) से कोण θ1, तथा (c) E2 का अभिलंब से कोण θ2।',
        bn: 'বায়ু (মাধ্যম ১: εr1 = ১.০) এবং কাঁচের (মাধ্যম ২: εr2 = ৪.০) মধ্যবর্তী বিভেদতলটি z = ০ সমতলে অবস্থিত। বায়ুতে বিভেদতলের ঠিক উপরে তড়িৎ ক্ষেত্র E1 = ১৫০ ax + ২০০ ay + ৩০০ az (V/m)। তলে কোনো মুক্ত আধান নেই (ρ_s = ০)। নির্ণয় করুন: (a) কাঁচে তড়িৎ ক্ষেত্র E2, (b) উল্লম্বের (z-অক্ষ) সাথে E1 এর কোণ θ1, এবং (c) উল্লম্বের সাথে E2 এর কোণ θ2।'
      },
      solution: {
        en: 'Step 1: Identify tangential and normal components at interface z = 0 (surface normal is n̂ = az):\nTangential components lie in the xy-plane: E_1t = 150 ax + 200 ay V/m.\nNormal component is along the z-axis: E_1n = 300 az V/m.\n\nStep 2: Apply Boundary Conditions:\n1. Tangential E is continuous: E_2t = E_1t = 150 ax + 200 ay V/m.\n2. Normal D is continuous (since ρ_s = 0): D_2n = D_1n\n   ε2 E_2n = ε1 E_1n\n   E_2n = (ε1 / ε2) · E_1n = (εr1 / εr2) · E_1n = (1.0 / 4.0) · 300 az = 75 az V/m.\n\nTherefore, the electric field inside the glass is:\nE2 = 150 ax + 200 ay + 75 az (V/m).\n\nStep 3: Compute refraction angles with the surface normal (z-axis):\n• In Medium 1 (air):\n  |E_1t| = √(150² + 200²) = √(22500 + 40000) = √62500 = 250 V/m.\n  E_1n = 300 V/m.\n  tan(θ1) = |E_1t| / E_1n = 250 / 300 = 0.8333 => θ1 = arctan(0.8333) = 39.81°.\n• In Medium 2 (glass):\n  |E_2t| = 250 V/m.\n  E_2n = 75 V/m.\n  tan(θ2) = |E_2t| / E_2n = 250 / 75 = 3.3333 => θ2 = arctan(3.3333) = 73.30°.\n\nLaw of Electrostatic Refraction: tan(θ1) / tan(θ2) = (E_2n / E_1n) = ε1 / ε2 = 1/4 = 0.25 (verified!).',
        hi: 'चरण 1: स्पर्शरेखीय घटक xy-समतल में हैं: E_1t = 150 ax + 200 ay। लंबवत घटक z-दिशा में है: E_1n = 300 az।\nचरण 2: सीमांत शर्तें लागू करना:\n• E_t सतत है: E_2t = 150 ax + 200 ay V/m।\n• D_n सतत है (ρ_s = 0): E_2n = (ε1 / ε2) E_1n = (1/4)(300) = 75 az V/m।\nअतः E2 = 150 ax + 200 ay + 75 az V/m।\nचरण 3: कोण गणना:\n• tan(θ1) = 250 / 300 = 0.833 => θ1 = 39.81°।\n• tan(θ2) = 250 / 75 = 3.333 => θ2 = 73.30°।',
        bn: 'ধাপ ১: স্পর্শকীয় উপাংশ E_1t = ১৫০ ax + ২০০ ay এবং লম্ব উপাংশ E_1n = ৩০০ az।\nধাপ ২: সীমান্ত শর্তাবলী প্রয়োগ:\n• E_t অবিচ্ছিন্ন: E_2t = ১৫০ ax + ২০০ ay V/m।\n• D_n অবিচ্ছিন্ন (ρ_s = ০): E_2n = (১/৪)(৩০০) = ৭৫ az V/m।\nঅতএব E2 = ১৫০ ax + ২০০ ay + ৭৫ az V/m।\nধাপ ৩: কোণ নির্ণয়:\n• tan(θ1) = ২৫০ / ৩০০ = ০.৮৩৩ => θ1 = ৩৯.৮১°।\n• tan(θ2) = ২৫০ / ৭৫ = ৩.৩৩৩ => θ2 = ৭৩.৩০°।'
      },
      givenValues: {
        'εr1': '1.0',
        'εr2': '4.0',
        'E1': '150 ax + 200 ay + 300 az V/m',
        'ρ_s': '0'
      },
      finalAnswer: {
        en: 'E2 = 150 ax + 200 ay + 75 az V/m;  θ1 = 39.81°;  θ2 = 73.30°',
        hi: 'E2 = 150 ax + 200 ay + 75 az V/m;  θ1 = 39.81°;  θ2 = 73.30°',
        bn: 'E2 = ১৫০ ax + ২০০ ay + ৭৫ az V/m;  θ1 = ৩৯.৮১°;  θ2 = ৭৩.৩০°'
      }
    },
    {
      id: 'ex-phasor-maxwell-wave-impedance',
      problem: {
        en: 'A plane electromagnetic wave propagates in free space along the +z direction. In phasor notation, its electric field is E = E0 e^(-j k z) ax. (a) Using Faraday’s law ∇ × E = -j ω B, determine the corresponding magnetic field phasor H. (b) Calculate the ratio of peak electric field to peak magnetic field intensity (E0 / H0), known as the intrinsic wave impedance of free space η0.',
        hi: 'एक समतल विद्युत चुंबकीय तरंग +z दिशा में निर्वात में संचरित होती है। फेजर रूप में इसका विद्युत क्षेत्र E = E0 e^(-j k z) ax है। (a) फैराडे नियम ∇ × E = -j ω B से चुंबकीय क्षेत्र H ज्ञात कीजिए। (b) E0 / H0 का अनुपात ज्ञात कीजिए, जिसे निर्वात की आंतरिक प्रतिबाधा η0 कहा जाता है।',
        bn: 'একটি সমতল তড়িৎচৌম্বক তরঙ্গ শূন্য মাধ্যমে +z অক্ষ বরাবর অগ্রসর হচ্ছে। ফেজর রূপে এর তড়িৎ ক্ষেত্র E = E0 e^(-j k z) ax। (a) ফ্যারাডের সূত্র ∇ × E = -j ω B ব্যবহার করে চৌম্বক ক্ষেত্র H নির্ণয় করুন। (b) E0 / H0 অনুপাতটি হিসাব করুন, যা শূন্য মাধ্যমের অভ্যন্তরীণ তরঙ্গ প্রতিবন্ধকতা η0 নামে পরিচিত।'
      },
      solution: {
        en: 'Step 1: Evaluate the curl of the electric field ∇ × E:\nGiven E = (E0 e^(-j k z), 0, 0).\n∇ × E = | ax  ay  az |\n        | ∂x  ∂y  ∂z |\n        | Ex   0   0 |\n∇ × E = ax(0) - ay(0 - ∂Ex/∂z) + az(0) = ay (∂Ex/∂z).\n∂Ex/∂z = ∂/∂z [E0 e^(-j k z)] = - j k E0 e^(-j k z).\nTherefore, ∇ × E = - j k E0 e^(-j k z) ay.\n\nStep 2: Equate to - j ω B = - j ω μ0 H:\n- j k E0 e^(-j k z) ay = - j ω μ0 H\nCanceling -j and dividing by ω μ0:\nH = [k E0 / (ω μ0)] e^(-j k z) ay.\n\nStep 3: Relate wavenumber k to frequency ω:\nIn free space, k = ω / c = ω √(μ0 ε0).\nSubstituting k into the amplitude of H:\nH0 = [ω √(μ0 ε0) · E0] / (ω μ0) = E0 · √(ε0 / μ0).\nThus H = H0 e^(-j k z) ay = [E0 / η0] e^(-j k z) ay.\n\nStep 4: Compute intrinsic impedance of free space η0:\nη0 = E0 / H0 = √(μ0 / ε0) = √[(4π × 10⁻⁷ H/m) / (8.854 × 10⁻¹² F/m)] = √141,855.9 ≈ 376.73 Ω ≈ 120π Ω ≈ 377 Ω.\n\nCrucial Observation: E is polarized along ax, H is polarized along ay, and wave travels along az = ax × ay. The fields are mutually orthogonal and in phase!',
        hi: 'चरण 1: ∇ × E = - j k E0 e^(-j k z) ay।\nचरण 2: - j ω μ0 H = - j k E0 e^(-j k z) ay => H = (k / ω μ0) E0 e^(-j k z) ay।\nचरण 3: चूंकि k = ω/c = ω√(μ0 ε0), अतः H0 = E0 √(ε0 / μ0) = E0 / η0।\nचरण 4: η0 = √(μ0 / ε0) = 377 Ω (120π Ω)। E, H और संचरण दिशा परस्पर लंबवत हैं।',
        bn: 'ধাপ ১: ∇ × E = - j k E0 e^(-j k z) ay।\nধাপ ২: - j ω μ0 H = - j k E0 e^(-j k z) ay থেকে H = (k / ω μ0) E0 e^(-j k z) ay।\nধাপ ৩: যেহেতু k = ω/c = ω√(μ0 ε0), তাই H0 = E0 √(ε0 / μ0) = E0 / η0।\nধাপ ৪: শূন্য মাধ্যমের প্রতিবন্ধকতা η0 = √(μ0 / ε0) = ৩৭৭ Ω (১২০π Ω)। E, H এবং তরঙ্গের দিক পরস্পর লম্ব।'
      },
      givenValues: {
        'E': 'E0 e^(-j k z) ax',
        'k': 'ω / c',
        'μ0': '4π × 10⁻⁷ H/m',
        'ε0': '8.854 × 10⁻¹² F/m'
      },
      finalAnswer: {
        en: 'H = (E0 / η0) e^(-j k z) ay;  Wave impedance η0 = √(μ0 / ε0) ≈ 377 Ω (120π Ω)',
        hi: 'H = (E0 / η0) e^(-j k z) ay;  आंतरिक प्रतिबाधा η0 = 377 Ω',
        bn: 'H = (E0 / η0) e^(-j k z) ay;  তরঙ্গ প্রতিবন্ধকতা η0 = ৩৭৭ Ω'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Radar Stealth Design (RADAR Cross Section Reduction): Applying boundary condition E_t = 0 on metallic aircraft fuselages and using dielectric radar-absorbent materials (RAM) to minimize backscattered reflections.',
      'Fiber Optic Core Waveguiding: Total internal reflection in telecommunications optical fibers is derived from Maxwell’s tangential E and normal D boundary conditions.',
      'Electromagnetic Compatibility (EMC) Enclosure Design: Ensuring shielding seams and ventilation holes do not permit high-frequency magnetic field leakage (∇ · B = 0).',
      'Satellite Dish Parabolic Reflectors: Reflecting gigahertz microwaves into prime focal feed horns based on the boundary condition of tangential E cancellation on metallic dish surfaces.',
      'Superconducting Meissner Effect: In type-I superconductors, normal and tangential magnetic flux is expelled completely from the interior (B = 0), matching Maxwellian boundary equations.'
    ],
    hi: [
      'रडार स्टील्थ डिजाइन: धातु के विमान पर सीमांत शर्त E_t = 0 लागू करना और रडार अवशोषक सामग्री (RAM) द्वारा परावर्तन को न्यूनतम करना।',
      'फाइबर ऑप्टिक वेवगाइडिंग: दूरसंचार फाइबर में पूर्ण आंतरिक परावर्तन मैक्सवेल की E_t और D_n सीमांत शर्तों से निर्धारित होता है।',
      'ईएमसी शील्डिंग डिजाइन: यह सुनिश्चित करना कि जोड़ों और छिद्रों से उच्च आवृत्ति चुंबकीय क्षेत्र का रिसाव न हो (∇ · B = 0)।',
      'सैटेलाइट डिश परावर्तक: धातु की सतह पर स्पर्शरेखीय E के रद्दीकरण के आधार पर माइक्रोवेव तरंगों को रिसीवर हॉर्न पर केंद्रित करना।',
      'माइजनर प्रभाव (अतिचालकता): सुपरकंडक्टर्स के भीतर चुंबकीय क्षेत्र पूर्णतः शून्य (B = 0) हो जाता है, जो मैक्सवेल सीमा समीकरणों से मेल खाता है।'
    ],
    bn: [
      'রাডার স্টিলথ প্রযুক্তি: বিমানের ধাতব পৃষ্ঠে E_t = ০ শর্ত প্রয়োগ করে এবং তরঙ্গ শোষণকারী উপাদান (RAM) ব্যবহার করে প্রতিফলন ন্যূনতম করা।',
      'অপটিক্যাল ফাইবার যোগাযোগ: ফাইবার কোরে আলোর পূর্ণ অভ্যন্তরীণ প্রতিফলন ম্যাক্সওয়েলের E_t এবং D_n সীমান্ত শর্তাবলী থেকে প্রতিপাদিত হয়।',
      'ইলেক্ট্রোম্যাগনেটিক কম্প্যাটিবিলিটি (EMC) শিল্ডিং: উচ্চ-ফ্রিকোয়েন্সি চৌম্বক লিকেজ রোধে ঘেরাও বাক্স নকশাকরণ (∇ · B = ০)।',
      'স্যাটেলাইট ডিশ অ্যান্টেনা: ধাতব পৃষ্ঠের সীমান্ত শর্তাবলী কাজে লাগিয়ে গিগাহার্টজ মাইক্রোওয়েভকে রিসিভারে কেন্দ্রীভূত করা।',
      'সুপারকন্ডাক্টর মাইসনার প্রভাব: টাইপ-১ সুপারকন্ডাক্টরের অভ্যন্তর থেকে চৌম্বক ফ্লাক্স সম্পূর্ণ বিতাড়িত হওয়া (B = ০) ম্যাক্সওয়েল সীমান্ত শর্ত দ্বারা ব্যাখ্যা করা যায়।'
    ]
  },
  importantPoints: {
    en: [
      'Maxwell’s equations completely describe all macroscopic classical electromagnetic phenomena in the universe.',
      'Gauss’s law for magnetism ∇ · B = 0 states that isolated magnetic monopoles do not exist; magnetic field lines are always continuous closed loops.',
      'In source-free vacuum (ρ = 0, J = 0), Maxwell’s equations combine into the classical electromagnetic wave equation with wave speed c = 1 / √(μ0 ε0).',
      'Tangential electric field is always strictly continuous across any material interface: E_1t = E_2t.',
      'Normal magnetic flux density is always strictly continuous across any material interface: B_1n = B_2n.',
      'The intrinsic wave impedance of free space is η0 = √(μ0 / ε0) ≈ 376.73 Ω ≈ 120π Ω ≈ 377 Ω.'
    ],
    hi: [
      'मैक्सवेल के समीकरण ब्रह्मांड की सभी शास्त्रीय विद्युत चुंबकीय परिघटनाओं का पूर्ण विवरण देते हैं।',
      'चुंबकत्व का गॉस नियम ∇ · B = 0 बताता है कि प्रकृति में एकल चुंबकीय ध्रुव नहीं होते; चुंबकीय रेखाएं सदैव संवृत लूप बनाती हैं।',
      'मुक्त निर्वात (ρ = 0, J = 0) में मैक्सवेल समीकरण तरंग समीकरण में बदल जाते हैं जिसकी चाल c = 1 / √(μ0 ε0) होती है।',
      'स्पर्शरेखीय विद्युत क्षेत्र किसी भी पदार्थ की सीमा पर सदैव सतत रहता है: E_1t = E_2t।',
      'लंबवत चुंबकीय फ्लक्स घनत्व किसी भी सीमा पर सदैव सतत रहता है: B_1n = B_2n।',
      'निर्वात की आंतरिक तरंग प्रतिबाधा η0 = √(μ0 / ε0) ≈ 377 Ω (120π Ω) होती है।'
    ],
    bn: [
      'ম্যাক্সওয়েলের চারটি সমীকরণ সমগ্র চিরায়ত বিদ্যুৎচুম্বকীয় জগতের মূল চালিকাশক্তি।',
      'চুম্বকত্বের গাউসীয় সূত্র ∇ · B = ০ নির্দেশ করে প্রকৃতিতে কোনো বিচ্ছিন্ন চৌম্বক একক মেরু নেই; বলরেখা সর্বদা বদ্ধ লুপ।',
      'উৎসবিহীন শূন্যস্থানে (ρ = ০, J = ০) সমীকরণগুলি তরঙ্গ সমীকরণে রূপান্তরিত হয় যার বেগ c = ১ / √(μ0 ε0)।',
      'স্পর্শকীয় তড়িৎ ক্ষেত্র যেকোনো মাধ্যমের বিভেদতলে সর্বদা অবিচ্ছিন্ন থাকে: E_1t = E_2t।',
      'লম্ব চৌম্বক ফ্লাক্স ঘনত্ব যেকোনো মাধ্যমের বিভেদতলে সর্বদা অবিচ্ছিন্ন থাকে: B_1n = B_2n।',
      'শূন্য মাধ্যমের সহজাত তরঙ্গ প্রতিবন্ধকতা হলো η0 = √(μ0 / ε0) ≈ ৩৭৭ Ω (১২০π Ω)।'
    ]
  },
  commonMistakes: {
    en: [
      'Writing ∇ · B = ρ_m (magnetic charge); no isolated magnetic charge has ever been discovered in nature, so ∇ · B is always strictly zero.',
      'Confusing the boundary condition for normal D with normal E; D_1n - D_2n = ρ_s is the fundamental condition, which translates to ε1 E_1n - ε2 E_2n = ρ_s.',
      'Assuming tangential magnetic field H_t is always continuous; H_1t = H_2t ONLY when there is no surface conduction current (J_s = 0).',
      'Forgetting that the intrinsic wave impedance of free space η0 is in units of Ohms (Ω).'
    ],
    hi: [
      '∇ · B = ρ_m (चुंबकीय आवेश) लिखना; प्रकृति में चुंबकीय एकल ध्रुव नहीं होते, अतः ∇ · B सदैव शून्य होता है।',
      'लंबवत D और लंबवत E की सीमांत शर्त में भ्रमित होना; मूल शर्त D_1n - D_2n = ρ_s है, जो ε1 E_1n - ε2 E_2n = ρ_s बनती है।',
      'यह मान लेना कि स्पर्शरेखीय H सदैव सतत रहता है; H_1t = H_2t केवल तभी होता है जब पृष्ठीय धारा J_s = 0 हो।',
      'यह भूल जाना कि मुक्त अंतरिक्ष की आंतरिक प्रतिबाधा η0 का मात्रक ओम (Ω) होता है।'
    ],
    bn: [
      '∇ · B = ρ_m লেখা; প্রকৃতিতে কোনো একক চৌম্বক মেরু নেই, তাই ∇ · B সর্বদা কঠোরভাবে শূন্য।',
      'লম্ব D এবং লম্ব E এর সীমান্ত শর্তকে গুলিয়ে ফেলা; মূল শর্ত D_1n - D_2n = ρ_s, যা ε1 E_1n - ε2 E_2n = ρ_s হয়।',
      'স্পর্শকীয় H সর্বদা অবিচ্ছিন্ন থাকবে বলে ধরে নেওয়া; H_1t = H_2t কেবল তখনই সত্য যখন কোনো পৃষ্ঠ পরিবাহী কারেন্ট না থাকে (J_s = ০)।',
      'শূন্য মাধ্যমের তরঙ্গ প্রতিবন্ধকতা η0 এর একক যে ওহম (Ω) তা বিবেচনায় না রাখা।'
    ]
  },
  keyTakeaways: {
    en: [
      "Maxwell's equations provide the complete, unified mathematical framework for classical electromagnetism and electrodynamics.",
      'The four equations unify electrostatics (Gauss), magnetostatics (Gauss for B), induction (Faraday), and electromagnetic wave generation (Ampere-Maxwell).',
      'The non-existence of magnetic monopoles (∇ · B = 0) requires magnetic flux to always recirculate in continuous solenoidal paths.',
      'Electromagnetic boundary conditions are derived directly from the integral forms of Maxwell’s equations by shrinking pillboxes and Stokes loops across interfaces.',
      'Maxwell discovered that light itself is an electromagnetic wave by demonstrating that 1 / √(μ0 ε0) equals the measured speed of light.'
    ],
    hi: [
      'मैक्सवेल के समीकरण शास्त्रीय विद्युत चुंबकत्व के लिए संपूर्ण और एकीकृत गणितीय ढांचा प्रदान करते हैं।',
      'ये चार समीकरण स्थिरवैद्युतिकी, चुंबकस्थैतिकी, प्रेरण और विद्युत चुंबकीय तरंगों के निर्माण को एक सूत्र में पिरोते हैं।',
      'चुंबकीय एकल ध्रुवों की अनुपस्थिति (∇ · B = 0) के कारण चुंबकीय फ्लक्स सदैव संवृत पथों में ही घूमता है।',
      'विद्युत चुंबकीय सीमांत शर्तें मैक्सवेल के समाकल रूपों से सीधे व्युत्पन्न होती हैं।',
      'मैक्सवेल ने यह सिद्ध करके प्रकाश की प्रकृति का अनावरण किया कि 1 / √(μ0 ε0) प्रकाश की मापी गई चाल के ठीक बराबर है।'
    ],
    bn: [
      'ম্যাক্সওয়েলের সমীকরণসমূহ চিরায়ত বিদ্যুৎ ও চুম্বকত্ব তত্ত্বের সম্পূর্ণ সমন্বিত গাণিতিক ভিত্তি।',
      'চারটি সমীকরণ স্থিরতড়িৎ, স্থিরচুম্বকত্ব, আবেশ এবং তড়িৎচৌম্বক তরঙ্গের বিস্তারকে একক সূত্রে একত্রিত করে।',
      'চৌম্বক একক মেরুর অনুপস্থিতি (∇ · B = ০) নিশ্চিত করে যে চৌম্বক বলরেখা সর্বদা অবিচ্ছিন্ন বদ্ধ লুপ তৈরি করে।',
      'ম্যাক্সওয়েলের সমাকলন সমীকরণগুলি থেকেই বিভেদতলের সীমান্ত শর্তাবলী সরাসরি প্রতিপাদিত হয়।',
      'ম্যাক্সওয়েল আবিষ্কার করেন যে আলো মূলত একটি তড়িৎচৌম্বকীয় তরঙ্গ, কারণ ১ / √(μ0 ε0) এর মান আলোর নির্ণীত বেগের হুবহু সমান।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch11-l06-01',
      question: {
        en: 'Which Maxwell equation mathematically asserts that isolated magnetic monopoles do not exist in nature?',
        hi: 'मैक्सवेल का कौन सा समीकरण गणितीय रूप से यह पुष्टि करता है कि प्रकृति में एकल चुंबकीय ध्रुव नहीं पाए जाते?',
        bn: 'ম্যাক্সওয়েলের কোন সমীকরণটি গাণিতিকভাবে নিশ্চিত করে যে প্রকৃতিতে বিচ্ছিন্ন চৌম্বক একক মেরুর অস্তিত্ব নেই?'
      },
      options: [
        { id: 'opt-a', text: { en: '∇ · D = ρ_v', hi: '∇ · D = ρ_v', bn: '∇ · D = ρ_v' } },
        { id: 'opt-b', text: { en: '∇ · B = 0', hi: '∇ · B = 0', bn: '∇ · B = 0' } },
        { id: 'opt-c', text: { en: '∇ × E = -∂B/∂t', hi: '∇ × E = -∂B/∂t', bn: '∇ × E = -∂B/∂t' } },
        { id: 'opt-d', text: { en: '∇ × H = J + ∂D/∂t', hi: '∇ × H = J + ∂D/∂t', bn: '∇ × H = J + ∂D/∂t' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: '∇ · B = 0 states that the divergence of the magnetic flux density is zero everywhere, meaning magnetic field lines have no divergent source or sink points (no magnetic monopoles).',
        hi: '∇ · B = 0 बताता है कि चुंबकीय फ्लक्स घनत्व का डाइवर्जेंस सदैव शून्य होता है, अर्थात चुंबकीय रेखाओं का कोई स्वतंत्र स्रोत या सिंक (एकल ध्रुव) नहीं होता।',
        bn: '∇ · B = ০ নির্দেশ করে যে চৌম্বক ফ্লাক্স ঘনত্বের ডাইভারজেন্স সর্বত্র শূন্য, অর্থাৎ চৌম্বক বলরেখার কোনো বিচ্ছিন্ন উৎস বা গ্রাহক বিন্দু (একক মেরু) নেই।'
      }
    },
    {
      id: 'mcq-ch11-l06-02',
      question: {
        en: 'Across an interface separating two different dielectric media with no free surface charge (ρ_s = 0), which field component is strictly continuous?',
        hi: 'मुक्त पृष्ठीय आवेश रहित (ρ_s = 0) दो परावैद्युत माध्यमों की सीमा पर कौन सा क्षेत्र घटक सदैव सतत (continuous) रहता है?',
        bn: 'কোনো মুক্ত পৃষ্ঠ আধানবিহীন (ρ_s = ০) দুটি ভিন্ন ডাইইলেক্ট্রিক মাধ্যমের বিভেদতলে কোন ক্ষেত্র উপাংশটি সর্বদা অবিচ্ছিন্ন থাকে?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Both Tangential E (E_t) and Normal D (D_n)', hi: 'स्पर्शरेखीय E (E_t) और लंबवत D (D_n) दोनों', bn: 'স্পর্শকীয় E (E_t) এবং লম্ব D (D_n) উভয়ই' } },
        { id: 'opt-b', text: { en: 'Only Normal E (E_n)', hi: 'केवल लंबवत E (E_n)', bn: 'কেবলমাত্র লম্ব E (E_n)' } },
        { id: 'opt-c', text: { en: 'Neither component is continuous', hi: 'कोई भी घटक सतत नहीं होता', bn: 'কোনো উপাংশই অবিচ্ছিন্ন নয়' } },
        { id: 'opt-d', text: { en: 'Only Tangential D (D_t)', hi: 'केवल स्पर्शरेखीय D (D_t)', bn: 'কেবলমাত্র স্পর্শকীয় D (D_t)' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'Faraday’s law demands that tangential E is ALWAYS continuous (E_1t = E_2t). Gauss’s law demands D_1n - D_2n = ρ_s; since ρ_s = 0, normal D is also strictly continuous (D_1n = D_2n).',
        hi: 'फैराडे नियम से स्पर्शरेखीय E सदैव सतत रहता है (E_1t = E_2t)। गॉस नियम से D_1n - D_2n = ρ_s; चूंकि ρ_s = 0 है, अतः लंबवत D भी पूर्णतः सतत रहता है।',
        bn: 'ফ্যারাডের সূত্রানুযায়ী স্পর্শকীয় E সর্বদা অবিচ্ছিন্ন (E_1t = E_2t)। গাউসের সূত্রানুযায়ী D_1n - D_2n = ρ_s; যেহেতু ρ_s = ০, তাই লম্ব D ও সম্পূর্ণ অবিচ্ছিন্ন (D_1n = D_2n)।'
      }
    },
    {
      id: 'mcq-ch11-l06-03',
      question: {
        en: 'What is the theoretical value of the intrinsic wave impedance of free space η0?',
        hi: 'मुक्त अंतरिक्ष की आंतरिक तरंग प्रतिबाधा η0 का सैद्धांतिक मान क्या है?',
        bn: 'শূন্য মাধ্যমের অভ্যন্তরীণ তরঙ্গ প্রতিবন্ধকতা η0 এর তাত্ত্বিক মান কত?'
      },
      options: [
        { id: 'opt-a', text: { en: '50 Ω', hi: '50 Ω', bn: '৫০ Ω' } },
        { id: 'opt-b', text: { en: '120π Ω ≈ 377 Ω', hi: '120π Ω ≈ 377 Ω', bn: '১২০π Ω ≈ ৩৭৭ Ω' } },
        { id: 'opt-c', text: { en: '3.0 × 10⁸ Ω', hi: '3.0 × 10⁸ Ω', bn: '৩.০ × ১০⁸ Ω' } },
        { id: 'opt-d', text: { en: 'Zero Ω', hi: 'शून्य Ω', bn: 'শূন্য Ω' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'η0 = √(μ0 / ε0) = √[(4π × 10⁻⁷) / (8.854 × 10⁻¹²)] ≈ 376.73 Ω ≈ 120π Ω ≈ 377 Ω.',
        hi: 'η0 = √(μ0 / ε0) ≈ 377 Ω (अथवा 120π Ω)।',
        bn: 'η0 = √(μ0 / ε0) ≈ ৩৭৭ Ω (বা ১২০π Ω)।'
      }
    },
    {
      id: 'mcq-ch11-l06-04',
      question: {
        en: 'In sinusoidal phasor notation with time dependence e^(jω t), what does the partial time derivative ∂/∂t become?',
        hi: 'e^(jω t) समय निर्भरता वाले ज्यावक्रीय फेजर संकेतन में आंशिक समय अवकलज ∂/∂t क्या बन जाता है?',
        bn: 'e^(jω t) সময় নির্ভরতা বিশিষ্ট সাইনুসয়েডাল ফেজর পদ্ধতিতে আংশিক সময় ব্যবকলন ∂/∂t কী রূপ নেয়?'
      },
      options: [
        { id: 'opt-a', text: { en: '-ω²', hi: '-ω²', bn: '-ω²' } },
        { id: 'opt-b', text: { en: 'j ω', hi: 'j ω', bn: 'j ω' } },
        { id: 'opt-c', text: { en: '1 / (j ω)', hi: '1 / (j ω)', bn: '১ / (j ω)' } },
        { id: 'opt-d', text: { en: 'Zero', hi: 'शून्य', bn: 'শূন্য' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'Differentiating e^(jω t) with respect to t yields j ω e^(jω t). Thus, ∂/∂t is replaced by algebraic multiplication by j ω.',
        hi: 'e^(jω t) का t के सापेक्ष अवकलन करने पर j ω प्राप्त होता है, अतः ∂/∂t का स्थान j ω ले लेता है।',
        bn: 'e^(jω t) কে t এর সাপেক্ষে ব্যবকলন করলে j ω পাওয়া যায়, তাই ∂/∂t এর স্থলে j ω গুণ হয়।'
      }
    },
    {
      id: 'mcq-ch11-l06-05',
      question: {
        en: 'At the boundary of an ideal Perfect Electric Conductor (PEC), what is the condition on the tangential electric field E_t?',
        hi: 'एक आदर्श विद्युत चालक (PEC) की सतह पर स्पर्शरेखीय विद्युत क्षेत्र E_t की क्या शर्त होती है?',
        bn: 'একটি আদর্শ নিখুঁত পরিবাহীর (PEC) সীমানায় স্পর্শকীয় তড়িৎ ক্ষেত্র E_t এর শর্ত কী?'
      },
      options: [
        { id: 'opt-a', text: { en: 'E_t = 0 (strictly zero)', hi: 'E_t = 0 (सर्वथा शून्य)', bn: 'E_t = ০ (সর্বদা শূন্য)' } },
        { id: 'opt-b', text: { en: 'E_t is infinite', hi: 'E_t अनंत होता है', bn: 'E_t অসীম হয়' } },
        { id: 'opt-c', text: { en: 'E_t equals 377 V/m', hi: 'E_t का मान 377 V/m होता है', bn: 'E_t এর মান ৩৭৭ V/m হয়' } },
        { id: 'opt-d', text: { en: 'E_t is independent of frequency', hi: 'E_t आवृत्ति से स्वतंत्र है', bn: 'E_t ফ্রিকোয়েন্সির উপর নির্ভরশীল নয়' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'Inside an ideal conductor, E = 0. Since tangential E is continuous across any boundary, the tangential electric field immediately outside the conductor must also be zero: E_t = 0.',
        hi: 'आदर्श चालक के भीतर E = 0 होता है। स्पर्शरेखीय E के सतत होने के कारण चालक की सतह पर भी E_t = 0 होना अनिवार्य है।',
        bn: 'আদর্শ পরিবাহীর অভ্যন্তরে E = ০। স্পর্শকীয় E অবিচ্ছিন্ন হওয়ায় পরিবাহীর পৃষ্ঠের ঠিক বাইরেও E_t = ০ হতে বাধ্য।'
      }
    },
    {
      id: 'mcq-ch11-l06-06',
      question: {
        en: 'Which pair of vector operations applied to Maxwell’s equations demonstrates that electric charge is strictly conserved (∇ · J = -∂ρ/∂t)?',
        hi: 'मैक्सवेल समीकरणों पर कौन सी सदिश संक्रिया यह सिद्ध करती है कि विद्युत आवेश पूर्णतः संरक्षित है (∇ · J = -∂ρ/∂t)?',
        bn: 'ম্যাক্সওয়েলের সমীকরণে কোন ভেক্টর অপারেশন প্রয়োগ করলে প্রমাণিত হয় যে তড়িৎ আধান কঠোরভাবে সংরক্ষিত (∇ · J = -∂ρ/∂t)?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Taking the divergence of the Ampere-Maxwell law: ∇ · (∇ × H)', hi: 'एम्पीयर-मैक्सवेल नियम का डाइवर्जेंस लेना: ∇ · (∇ × H)', bn: 'অ্যাম্পিয়ার-ম্যাক্সওয়েল সূত্রের ডাইভারজেন্স নেওয়া: ∇ · (∇ × H)' } },
        { id: 'opt-b', text: { en: 'Taking the curl of Gauss’s law: ∇ × (∇ · D)', hi: 'गॉस के नियम का कर्ल लेना: ∇ × (∇ · D)', bn: 'গাউসের সূত্রের কার্ল নেওয়া: ∇ × (∇ · D)' } },
        { id: 'opt-c', text: { en: 'Taking the Laplacian of the magnetic field: ∇² B', hi: 'चुंबकीय क्षेत्र का लाप्लासियन लेना: ∇² B', bn: 'চৌম্বক ক্ষেত্রের ল্যাপ্লাসিয়ান নেওয়া: ∇² B' } },
        { id: 'opt-d', text: { en: 'Integrating Faraday’s law over infinite volume', hi: 'अनंत आयतन पर फैराडे नियम का समाकलन करना', bn: 'অসীম আয়তনে ফ্যারাডের সূত্রের সমাকলন করা' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: '∇ · (∇ × H) = 0. Applying this to ∇ × H = J + ∂D/∂t yields 0 = ∇ · J + ∂(∇ · D)/∂t. Substituting Gauss’s Law (∇ · D = ρ) yields ∇ · J + ∂ρ/∂t = 0, which is the exact Continuity Equation.',
        hi: '∇ · (∇ × H) = 0 होता है। एम्पीयर-मैक्सवेल नियम का डाइवर्जेंस लेने और ∇ · D = ρ रखने पर ∇ · J + ∂ρ/∂t = 0 प्राप्त होता है।',
        bn: '∇ · (∇ × H) = ০। অ্যাম্পিয়ার-ম্যাক্সওয়েল সমীকরণে ডাইভারজেন্স নিয়ে ∇ · D = ρ বসালে সরাসরি ∇ · J + ∂ρ/∂t = ০ সমীকরণটি পাওয়া যায়।'
      }
    },
    {
      id: 'mcq-ch11-l06-07',
      question: {
        en: 'Across an interface between two non-magnetic materials with relative permittivities εr1 = 2.0 and εr2 = 8.0, the normal electric field in medium 1 is E1n = 120 V/m. If ρ_s = 0, what is E2n in medium 2?',
        hi: 'εr1 = 2.0 और εr2 = 8.0 वाले दो अचुंबकीय पदार्थों की सीमा पर माध्यम 1 में लंबवत विद्युत क्षेत्र E1n = 120 V/m है (ρ_s = 0)। माध्यम 2 में E2n क्या होगा?',
        bn: 'εr1 = ২.০ এবং εr2 = ৮.০ বিশিষ্ট দুটি অচৌম্বক মাধ্যমের বিভেদতলে মাধ্যম ১ এ লম্ব তড়িৎ ক্ষেত্র E1n = ১২০ V/m (ρ_s = ০)। মাধ্যম ২ এ E2n কত হবে?'
      },
      options: [
        { id: 'opt-a', text: { en: '480 V/m', hi: '480 V/m', bn: '৪৮০ V/m' } },
        { id: 'opt-b', text: { en: '30 V/m', hi: '30 V/m', bn: '৩০ V/m' } },
        { id: 'opt-c', text: { en: '120 V/m', hi: '120 V/m', bn: '১২০ V/m' } },
        { id: 'opt-d', text: { en: 'Zero', hi: 'शून्य', bn: 'শূন্য' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'Since ρ_s = 0, D_1n = D_2n => ε1 E1n = ε2 E2n => E2n = (εr1 / εr2) · E1n = (2.0 / 8.0) · 120 = 0.25 · 120 = 30 V/m.',
        hi: 'D_1n = D_2n से ε1 E1n = ε2 E2n। अतः E2n = (2/8)(120) = 30 V/m।',
        bn: 'D_1n = D_2n থেকে ε1 E1n = ε2 E2n। অতএব E2n = (২/৮)(১২০) = ৩০ V/m।'
      }
    },
    {
      id: 'mcq-ch11-l06-08',
      question: {
        en: 'What is the relationship between the speed of light c, the permeability of free space μ0, and the permittivity of free space ε0?',
        hi: 'प्रकाश की चाल c, निर्वात की चुंबकशीलता μ0 और परावैद्युतांक ε0 के बीच क्या संबंध है?',
        bn: 'আলোর বেগ c, শূন্যস্থানের প্রবেশ্যতা μ0 এবং ভেদ্যতা ε0 এর মধ্যকার সম্পর্ক কোনটি?'
      },
      options: [
        { id: 'opt-a', text: { en: 'c = √(μ₀ · ε₀)', hi: 'c = √(μ₀ · ε₀)', bn: 'c = √(μ₀ · ε₀)' } },
        { id: 'opt-b', text: { en: 'c = 1 / √(μ₀ · ε₀)', hi: 'c = 1 / √(μ₀ · ε₀)', bn: 'c = 1 / √(μ₀ · ε₀)' } },
        { id: 'opt-c', text: { en: 'c = μ₀ / ε₀', hi: 'c = μ₀ / ε₀', bn: 'c = μ₀ / ε₀' } },
        { id: 'opt-d', text: { en: 'c = 1 / (μ₀ · ε₀)', hi: 'c = 1 / (μ₀ · ε₀)', bn: 'c = 1 / (μ₀ · ε₀)' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: "Maxwell derived the speed of electromagnetic waves as c = 1 / √(μ0 ε0), matching the experimental speed of light c ≈ 3.0 × 10⁸ m/s.",
        hi: 'मैक्सवेल ने विद्युत चुंबकीय तरंगों की चाल c = 1 / √(μ0 ε0) व्युत्पन्न की, जो प्रकाश की चाल के बराबर है।',
        bn: 'ম্যাক্সওয়েল প্রমাণ করেন যে তড়িৎচৌম্বক তরঙ্গের বেগ c = ১ / √(μ0 ε0), যা আলোর বেগের সমান।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch11-l06-01',
      question: {
        en: 'Write all four Maxwell’s equations in integral form and state the physical law or principle represented by each.',
        hi: 'मैक्सवेल के चारों समीकरणों को समाकल रूप में लिखिए तथा प्रत्येक द्वारा दर्शाए गए भौतिक नियम या सिद्धांत का उल्लेख कीजिए।',
        bn: 'ম্যাক্সওয়েলের চারটি সমীকরণকে সমাকলন রূপে লিখুন এবং প্রতিটির দ্বারা প্রকাশিত ভৌত নীতি উল্লেখ করুন।'
      },
      hint: {
        en: 'List ∮ D·dA, ∮ B·dA, ∮ E·dl, and ∮ H·dl.',
        hi: '∮ D·dA, ∮ B·dA, ∮ E·dl, तथा ∮ H·dl को सूचीबद्ध करें।',
        bn: '∮ D·dA, ∮ B·dA, ∮ E·dl, এবং ∮ H·dl তালিকাভুক্ত করুন।'
      },
      answerKey: {
        en: '1. ∮ D · dA = Q_enc (Gauss’s Law for Electricity: charges are flux sources). 2. ∮ B · dA = 0 (Gauss’s Law for Magnetism: no magnetic monopoles). 3. ∮ E · dl = -d/dt ∫ B · dA (Faraday’s Law: changing magnetic flux induces circulating EMF). 4. ∮ H · dl = ∫ (J + ∂D/∂t) · dA (Ampere-Maxwell Law: currents and changing electric flux create magnetic circulation).',
        hi: '1. ∮ D · dA = Q (गॉस नियम: आवेश फ्लक्स स्रोत हैं)। 2. ∮ B · dA = 0 (चुंबकत्व का गॉस नियम: एकल ध्रुव अनुपस्थित)। 3. ∮ E · dl = -dΦ_B/dt (फैराडे नियम: परिवर्ती फ्लक्स ईएमएफ बनाता है)। 4. ∮ H · dl = I_c + dΦ_D/dt (एम्पीयर-मैक्सवेल नियम)।',
        bn: '১. ∮ D · dA = Q (তড়িৎ গাউসীয় সূত্র)। ২. ∮ B · dA = ০ (চুম্বকত্বের গাউসীয় সূত্র: একক মেরু নেই)। ৩. ∮ E · dl = -dΦ_B/dt (ফ্যারাডের আবেশ সূত্র)। ৪. ∮ H · dl = I_c + dΦ_D/dt (অ্যাম্পিয়ার-ম্যাক্সওয়েল সূত্র)।'
      }
    },
    {
      id: 'pq-ch11-l06-02',
      question: {
        en: 'A magnetic field in a lossless medium (μr = 1, εr = 9) is B = B0 cos(ω t - k z) ay. Using Maxwell’s equations, find the corresponding electric field vector E(z, t).',
        hi: 'एक हानिरहित माध्यम (μr = 1, εr = 9) में चुंबकीय क्षेत्र B = B0 cos(ω t - k z) ay है। मैक्सवेल समीकरणों से विद्युत क्षेत्र सदिश E(z, t) ज्ञात कीजिए।',
        bn: 'ক্ষয়হীন মাধ্যমে (μr = ১, εr = ৯) চৌম্বক ক্ষেত্র B = B0 cos(ω t - k z) ay। ম্যাক্সওয়েলের সমীকরণ ব্যবহার করে সংশ্লিষ্ট তড়িৎ ক্ষেত্র ভেক্টর E(z, t) নির্ণয় করুন।'
      },
      hint: {
        en: 'Use ∇ × E = -∂B/∂t. Since B has only ay component, ∂B/∂t = -ω B0 sin(ω t - k z) ay.',
        hi: '∇ × E = -∂B/∂t का उपयोग करें जहाँ ∂B/∂t = -ω B0 sin(ω t - k z) ay है।',
        bn: '∇ × E = -∂B/∂t প্রয়োগ করুন যেখানে ∂B/∂t = -ω B0 sin(ω t - k z) ay।'
      },
      answerKey: {
        en: '∇ × E = (∂Ex/∂z) ay - (∂Ey/∂z) ax = -∂B/∂t = + ω B0 sin(ω t - k z) ay. Thus ∂Ex/∂z = ω B0 sin(ω t - k z). Integrating with respect to z gives Ex(z, t) = - (ω / k) B0 cos(ω t - k z) ax. Since wave speed v = ω / k = c / √εr = c / 3, Ex = - v B0 cos(ω t - k z) ax.',
        hi: 'E(z, t) = - (ω / k) B0 cos(ω t - k z) ax = - (c / 3) B0 cos(ω t - k z) ax।',
        bn: 'E(z, t) = - (ω / k) B0 cos(ω t - k z) ax = - (c / ৩) B0 cos(ω t - k z) ax।'
      }
    },
    {
      id: 'pq-ch11-l06-03',
      question: {
        en: 'State the four electromagnetic boundary conditions across an interface between two different materials and explain how they are mathematically derived.',
        hi: 'दो विभिन्न पदार्थों की सीमा पर चार विद्युत चुंबकीय सीमांत शर्तें लिखिए और समझाइए कि वे गणितीय रूप से कैसे व्युत्पन्न होती हैं।',
        bn: 'দুটি ভিন্ন মাধ্যমের বিভেদতলে চারটি তড়িৎচৌম্বক সীমান্ত শর্ত উল্লেখ করুন এবং ব্যাখ্যা করুন কীভাবে এগুলি গাণিতিকভাবে প্রতিপাদিত হয়।'
      },
      hint: {
        en: 'Shrink Gaussian pillboxes across the boundary for divergence equations; shrink Stokes contours across the boundary for curl equations.',
        hi: 'डाइवर्जेंस समीकरणों के लिए पिलबॉक्स की ऊंचाई शून्य की ओर ले जाएं; कर्ल समीकरणों के लिए आयताकार लूप की ऊंचाई शून्य की ओर ले जाएं।',
        bn: 'ডাইভারজেন্সের জন্য পিলবক্সের উচ্চতা এবং কার্লের জন্য আয়তাকার লুপের প্রস্থ শূন্যের দিকে সংকুচিত করুন।'
      },
      answerKey: {
        en: '1. D_1n - D_2n = ρ_s (from ∮ D·dA = Q across pillbox of height h -> 0). 2. B_1n - B_2n = 0 (from ∮ B·dA = 0 across pillbox). 3. E_1t - E_2t = 0 (from ∮ E·dl = -dΦ/dt along rectangle of height h -> 0, where flux through narrow loop vanishes). 4. H_1t - H_2t = J_s (from ∮ H·dl = I_enc along rectangle of height h -> 0).',
        hi: '1. D_1n - D_2n = ρ_s (पिलबॉक्स से)। 2. B_1n = B_2n (पिलबॉक्स से)। 3. E_1t = E_2t (स्टोक्स आयत से)। 4. H_1t - H_2t = J_s (स्टोक्स आयत से)।',
        bn: '১. D_1n - D_2n = ρ_s (পিলবক্স থেকে)। ২. B_1n = B_2n (পিলবক্স থেকে)। ৩. E_1t = E_2t (স্টোকস আয়ত থেকে)। ৪. H_1t - H_2t = J_s (স্টোকস আয়ত থেকে)।'
      }
    },
    {
      id: 'pq-ch11-l06-04',
      question: {
        en: 'The boundary between region 1 (z > 0, εr1 = 3.0) and region 2 (z < 0, εr2 = 5.0) carries a surface charge density ρ_s = 4.0 nC/m². If D1 = 15 ax - 20 ay + 30 az (nC/m²), find D2 in region 2.',
        hi: 'क्षेत्र 1 (z > 0, εr1 = 3.0) और क्षेत्र 2 (z < 0, εr2 = 5.0) के बीच की सीमा पर पृष्ठीय आवेश घनत्व ρ_s = 4.0 nC/m² है। यदि D1 = 15 ax - 20 ay + 30 az (nC/m²) है, तो क्षेत्र 2 में D2 ज्ञात कीजिए।',
        bn: 'অঞ্চল ১ (z > ০, εr1 = ৩.০) এবং অঞ্চল ২ (z < ০, εr2 = ৫.০) এর বিভেদতলে পৃষ্ঠ আধান ঘনত্ব ρ_s = ৪.০ nC/m²। যদি D1 = ১৫ ax - ২০ ay + ৩০ az (nC/m²) হয়, তবে অঞ্চল ২ এ D2 নির্ণয় করুন।'
      },
      hint: {
        en: 'Normal is along az. D_1n - D_2n = ρ_s => D_2n = D_1n - ρ_s. For tangential components, E_t is continuous: D_2t = (εr2 / εr1) D_1t.',
        hi: 'D_2n = D_1n - ρ_s। स्पर्शरेखीय घटक: D_2t = (εr2 / εr1) D_1t।',
        bn: 'D_2n = D_1n - ρ_s। স্পর্শকীয় উপাংশ: D_2t = (εr2 / εr1) D_1t।'
      },
      answerKey: {
        en: 'D_1n = 30 az nC/m². D_2n = D_1n - ρ_s = 30 - 4.0 = 26.0 az nC/m². Tangential component D_1t = 15 ax - 20 ay. Since E_1t = E_2t, D_2t = (ε2 / ε1) D_1t = (5.0 / 3.0)(15 ax - 20 ay) = 25 ax - 33.33 ay nC/m². Total D2 = 25 ax - 33.33 ay + 26 az (nC/m²).',
        hi: 'D2 = 25 ax - 33.33 ay + 26 az (nC/m²)।',
        bn: 'D2 = ২৫ ax - ৩৩.৩৩ ay + ২৬ az (nC/m²)।'
      }
    },
    {
      id: 'pq-ch11-l06-05',
      question: {
        en: 'Explain why the speed of light c can be calculated purely from electrostatic and magnetostatic laboratory experiments without ever measuring a moving light beam.',
        hi: 'समझाइए कि गतिमान प्रकाश पुंज को मापे बिना केवल स्थिरवैद्युत और चुंबकस्थैतिक प्रयोगशाला प्रयोगों से प्रकाश की चाल c की गणना कैसे की जा सकती है।',
        bn: 'ব্যাখ্যা করুন কেন কোনো চলমান আলোক রশ্মি পরিমাপ না করেই কেবল স্থিরতড়িৎ ও স্থিরচৌম্বক গবেষণাগার পরীক্ষার মাধ্যমে আলোর গতিবেগ c নির্ণয় করা সম্ভব।'
      },
      hint: {
        en: 'ε0 is measured from capacitor geometry; μ0 is defined from force between current-carrying wires. Maxwell showed c = 1 / √(μ0 ε0).',
        hi: 'ε0 संधारित्र से मापा जाता है और μ0 धाराओं के बीच बल से। मैक्सवेल ने c = 1 / √(μ0 ε0) संबंध सिद्ध किया।',
        bn: 'ε0 ধারকের জ্যামিতি থেকে এবং μ0 তড়িৎবাহী তারের মধ্যবর্তী বল থেকে পরিমাপ করা হয়। ম্যাক্সওয়েল প্রমাণ করেন c = ১ / √(μ0 ε0)।'
      },
      answerKey: {
        en: 'Permittivity ε0 is determined statically by measuring the capacitance of known plate geometry in vacuum. Permeability μ0 is determined from the magnetic force between parallel DC current wires (Ampere’s experiment). By combining the curl of Faraday’s law with the Ampere-Maxwell law in source-free vacuum, the wave equation yields wave velocity c = 1 / √(μ0 ε0). Substituting the laboratory values of ε0 and μ0 gives exactly 2.998 × 10⁸ m/s, demonstrating that optics is fundamentally an electromagnetic phenomenon.',
        hi: 'ε0 संधारित्र धारिता से और μ0 धारावाही तारों के बीच बल से मापा जाता है। तरंग समीकरण से v = 1 / √(μ0 ε0) प्राप्त होता है, जिसका मान ठीक 3 × 10⁸ m/s आता है। इससे सिद्ध हुआ कि प्रकाश मूलतः एक विद्युत चुंबकीय तरंग है।',
        bn: 'ε0 ধারকের স্থির ধারকত্ব থেকে এবং μ0 দুটি তারের চৌম্বক বল থেকে নির্ণয় করা যায়। শূন্য মাধ্যমে ম্যাক্সওয়েলের সমীকরণ থেকে তরঙ্গ বেগ আসে c = ১ / √(μ0 ε0)। এই স্থির মান দুটি বসালে ঠিক ৩ × ১০⁸ m/s বেগ পাওয়া যায়, যা প্রমাণ করে আলো মূলত একটি তড়িৎচৌম্বকীয় তরঙ্গ।'
      }
    }
  ]
};
