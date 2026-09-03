import { Lesson } from '../types';

export const LESSON_EM_WAVE_PROPAGATION: Lesson = {
  id: 'lsn-ch11-wave-propagation-plane-waves',
  topicId: 'ch11-wave-propagation-plane-waves',
  chapterId: 'ch-em-waves',
  order: 7,
  title: {
    en: 'Electromagnetic Wave Propagation & Uniform Plane Waves',
    hi: 'विद्युत चुंबकीय तरंग संचरण एवं एकसमान समतल तरंगें',
    bn: 'তড়িৎচুম্বকীয় তরঙ্গ সঞ্চালন ও সমরূপ সমতল তরঙ্গ'
  },
  description: {
    en: 'Rigorous derivation of the electromagnetic wave equation from Maxwell’s equations, uniform plane wave (UPW) transverse electromagnetic (TEM) propagation, intrinsic impedance, phase velocity, Poynting power flow density, and skin depth in lossy conducting media.',
    hi: 'मैक्सवेल के समीकरणों से विद्युत चुंबकीय तरंग समीकरण की सटीक व्युत्पत्ति, एकसमान समतल तरंग (UPW) अनुप्रस्थ विद्युत चुंबकीय (TEM) संचरण, आंतरिक प्रतिबाधा, कला वेग, पॉइंटिंग शक्ति प्रवाह घनत्व तथा क्षयकारी चालक माध्यमों में स्किन गहराई।',
    bn: 'ম্যাক্সওয়েলের সমীকরণ থেকে তড়িৎচৌম্বকীয় তরঙ্গ সমীকরণের গাণিতিক প্রতিপাদন, সমরূপ সমতল তরঙ্গের (UPW) অনুপ্রস্থ তড়িৎচৌম্বক (TEM) সঞ্চালন, সহজাত প্রতিবন্ধকতা, দশা বেগ, পয়েন্টিং শক্তি প্রবাহ ঘনত্ব এবং ক্ষয়যুক্ত পরিবাহী মাধ্যমে স্কিন গভীরতা।'
  },
  estimatedMinutes: 45,
  easyExplanation: {
    en: 'Once an electric field oscillates, Faraday’s law states that it creates an oscillating magnetic field. In turn, Maxwell’s displacement current law states that this changing magnetic field generates an oscillating electric field further along in space. Like an endless relay race, the electric and magnetic fields continually recreate each other and travel through pure empty space without needing any physical medium or wires! In a uniform plane wave, the electric field and magnetic field always vibrate at right angles (90°) to each other and at right angles to the direction the wave is traveling—forming a Transverse Electromagnetic (TEM) wave. The ratio of the electric field strength to the magnetic field strength in empty space is always a universal constant called the wave impedance (approx. 377 Ω), and the wave carries energy through space described by the Poynting vector.',
    hi: 'जब एक विद्युत क्षेत्र दोलन करता है, तो फैराडे के नियम के अनुसार वह एक दोलनकारी चुंबकीय क्षेत्र उत्पन्न करता है। बदले में, मैक्सवेल के नियम के अनुसार वह बदलता चुंबकीय क्षेत्र आगे अंतरिक्ष में पुनः एक नया विद्युत क्षेत्र उत्पन्न करता है। एक निरंतर रिले दौड़ की तरह, विद्युत और चुंबकीय क्षेत्र एक दूसरे को उत्पन्न करते हुए बिना किसी भौतिक माध्यम या तार के निर्वात में आगे बढ़ते रहते हैं! एकसमान समतल तरंग में विद्युत क्षेत्र और चुंबकीय क्षेत्र परस्पर 90° पर और तरंग संचरण की दिशा के लंबवत कंपन करते हैं—इसे अनुप्रस्थ विद्युत चुंबकीय (TEM) तरंग कहते हैं। अंतरिक्ष में विद्युत और चुंबकीय क्षेत्र का अनुपात सदैव स्थिर रहता है जिसे तरंग प्रतिबाधा (~377 Ω) कहा जाता है, और तरंग ऊर्जा ले जाती है जिसे पॉइंटिंग सदिश द्वारा दर्शाया जाता है।',
    bn: 'যখন একটি তড়িৎ ক্ষেত্র স্পন্দিত হয়, তখন ফ্যারাডের সূত্রানুসারে তা একটি পরিবর্তনশীল চৌম্বক ক্ষেত্র তৈরি করে। আবার ম্যাক্সওয়েলের সূত্রানুসারে সেই পরিবর্তনশীল চৌম্বক ক্ষেত্র শূন্যস্থানের পরবর্তী অংশে একটি নতুন তড়িৎ ক্ষেত্র তৈরি করে। একটি অবিরাম রিলে রেসের মতো, তড়িৎ ও চৌম্বক ক্ষেত্র একে অপরকে অবিরত পুনরুজ্জীবিত করে মহাশূন্যের মধ্য দিয়ে কোনো মাধ্যম ছাড়াই সামনের দিকে ধাবিত হয়! একটি সমরূপ সমতল তরঙ্গে তড়িৎ ক্ষেত্র এবং চৌম্বক ক্ষেত্র পরস্পরের সাথে ৯০° কোণে এবং তরঙ্গের গতির অভিমুখের সাথে লম্বভাবে স্পন্দিত হয়—যাকে অনুপ্রস্থ তড়িৎচৌম্বক (TEM) তরঙ্গ বলা হয়। শূন্য মাধ্যমে এদের ক্ষেত্র প্রাবল্যের অনুপাত সর্বদা নির্দিষ্ট থাকে যা তরঙ্গ প্রতিবন্ধকতা (~৩৭৭ Ω) নামে পরিচিত, এবং এটি পয়েন্টিং ভেক্টরের মাধ্যমে শক্তি পরিবহন করে।'
  },
  detailedExplanation: {
    en: "The existence of electromagnetic waves is the crowning achievement of Maxwell's field theory. In a source-free region (free charge density ρ = 0, conduction current density J = 0), Maxwell’s two curl equations are:\n1. ∇ × E = -μ ∂H/∂t\n2. ∇ × H = ε ∂E/∂t\n\nTaking the curl of both sides of Faraday’s law yields:\n∇ × (∇ × E) = -μ ∂/∂t (∇ × H) = -μ ∂/∂t [ε ∂E/∂t] = -με ∂²E/∂t².\nUsing the fundamental vector identity ∇ × (∇ × E) = ∇(∇ · E) - ∇²E, and since ∇ · E = ρ/ε = 0, we arrive directly at the homogeneous vector wave equation (d'Alembert wave equation):\n∇²E - με ∂²E/∂t² = 0.\nSimilarly, taking the curl of the Ampere-Maxwell law yields the magnetic wave equation:\n∇²H - με ∂²H/∂t² = 0.\n\nComparing this with the classical wave equation ∂²ψ/∂z² = (1/v²) ∂²ψ/∂t², the propagation velocity (phase velocity) is:\nv_p = 1 / √(με) = c / √(μ_r ε_r).\nIn vacuum (μ_r = 1, ε_r = 1), v_p = c = 1 / √(μ0 ε0) ≈ 2.99792458 × 10⁸ m/s.\n\nUniform Plane Waves (UPW):\nA wave is termed a uniform plane wave if its wavefronts (surfaces of constant phase) form infinite flat planes, and field amplitudes are completely uniform across every wavefront plane. For a wave traveling in the +z direction, fields depend only on z and time t:\nE(z, t) = E0 cos(ωt - βz) ax\nH(z, t) = (E0 / η) cos(ωt - βz) ay\nwhere β = ω √(με) = 2π / λ is the phase constant (wavenumber), and η = √(μ / ε) is the intrinsic impedance of the medium. For free space, η0 = √(μ0 / ε0) ≈ 120π Ω ≈ 376.73 Ω ≈ 377 Ω.\nBecause E has only an x-component, H has only a y-component, and both lie perpendicular to the z-propagation direction with Ez = Hz = 0, uniform plane waves are strictly Transverse Electromagnetic (TEM).\n\nPropagation in Lossy / Conducting Media:\nWhen a medium possesses finite electrical conductivity σ > 0, the total current consists of conduction and displacement terms: J_total = (σ + jωε) E. The complex propagation constant is:\nγ = α + jβ = √[jωμ(σ + jωε)]\nHere, α is the attenuation constant (Np/m), causing exponential decay of field amplitude: E(z) = E0 e^(-αz) e^(-jβz) ax.\nThe distance over which the wave amplitude attenuates to 1/e (approximately 36.8%) of its initial value is defined as the Skin Depth (penetration depth):\nδ = 1 / α = √(2 / (ω μ σ)).\nFor a good conductor (σ >> ωε), α ≈ β ≈ √(ω μ σ / 2), and η_c ≈ (1 + j) √(ω μ / 2σ).\n\nPoynting Vector & Power Flow:\nThe instantaneous power flow density vector is defined by John Henry Poynting (1884) as:\nS = E × H (W/m²).\nFor time-harmonic fields represented by phasors, the time-averaged power flow density is:\nS_avg = ½ Re(E × H*) = ½ (|E0|² / η) az (W/m²).\nThis expresses the real electromagnetic power radiated through unit surface area in the direction of wave propagation.",
    hi: "विद्युत चुंबकीय तरंगों का अस्तित्व मैक्सवेल के क्षेत्र सिद्धांत की सबसे महान उपलब्धि है। स्रोत-मुक्त क्षेत्र में (ρ = 0, J = 0), मैक्सवेल के दो कर्ल समीकरण ∇ × E = -μ ∂H/∂t और ∇ × H = ε ∂E/∂t होते हैं।\n\nफैराडे के नियम का कर्ल लेने पर:\n∇ × (∇ × E) = ∇(∇ · E) - ∇²E = -με ∂²E/∂t²\nचूंकि ∇ · E = 0 है, अतः हमें सदिश तरंग समीकरण प्राप्त होता है:\n∇²E - με ∂²E/∂t² = 0\nइसी प्रकार चुंबकीय क्षेत्र के लिए: ∇²H - με ∂²H/∂t² = 0।\n\nशास्त्रीय तरंग समीकरण से तुलना करने पर तरंग संचरण का कला वेग निकलता है:\nv_p = 1 / √(με) = c / √(μ_r ε_r)।\nनिर्वात में यह प्रकाश की चाल c ≈ 3 × 10⁸ m/s के बराबर होता है।\n\nएकसमान समतल तरंगें (UPW):\nजब तरंगाग्र अनंत समतल होते हैं और उन पर क्षेत्र का परिमाण एकसमान रहता है, तो उसे एकसमान समतल तरंग कहते हैं। +z दिशा में गतिमान तरंग के लिए:\nE(z, t) = E0 cos(ωt - βz) ax\nH(z, t) = (E0 / η) cos(ωt - βz) ay\nयहाँ β = ω √(με) = 2π/λ कला नियतांक है, और η = √(μ/ε) माध्यम की आंतरिक प्रतिबाधा है। मुक्त अंतरिक्ष में η0 ≈ 377 Ω (120π Ω) होती है। चूंकि विद्युत और चुंबकीय क्षेत्र संचरण दिशा z के लंबवत होते हैं (Ez = Hz = 0), अतः यह अनुप्रस्थ विद्युत चुंबकीय (TEM) तरंग है।\n\nक्षयकारी चालक माध्यमों में संचरण:\nयदि चालकता σ > 0 हो, तो संचरण स्थिरांक सम्मिश्र हो जाता है: γ = α + jβ = √[jωμ(σ + jωε)]। यहाँ α क्षीणन गुणांक है जिसके कारण आयाम e^(-αz) के रूप में घटता है। जिस दूरी पर आयाम घटकर 1/e (36.8%) रह जाता है, उसे स्किन गहराई कहते हैं: δ = 1/α = √(2 / (ω μ σ))।\n\nपॉइंटिंग सदिश एवं शक्ति प्रवाह:\nऊर्जा प्रवाह घनत्व पॉइंटिंग सदिश S = E × H (W/m²) द्वारा दिया जाता है। समय-औसत शक्ति प्रवाह घनत्व S_avg = ½ Re(E × H*) = ½ (|E0|² / η) az होता है।",
    bn: "তড়িৎচৌম্বকীয় তরঙ্গের অস্তিত্ব ম্যাক্সওয়েল তত্ত্বের শ্রেষ্ঠতম আবিষ্কার। কোনো উৎসবিহীন অঞ্চলে (ρ = ০, J = ০), ম্যাক্সওয়েলের দুটি কার্ল সমীকরণ হলো ∇ × E = -μ ∂H/∂t এবং ∇ × H = ε ∂E/∂t।\n\nফ্যারাডের সমীকরণের কার্ল নিলে:\n∇ × (∇ × E) = ∇(∇ · E) - ∇²E = -με ∂²E/∂t²\nযেহেতু ∇ · E = ০, তাই সরাসরি ভেক্টর তরঙ্গ সমীকরণ পাওয়া যায়:\n∇²E - με ∂²E/∂t² = ০\nএকইভাবে চৌম্বক ক্ষেত্রের জন্য: ∇²H - με ∂²H/∂t² = ০।\n\nচিরায়ত তরঙ্গ সমীকরণের সাথে তুলনা করলে তরঙ্গের বিস্তার বেগ (দশা বেগ) পাওয়া যায়:\nv_p = ১ / √(με) = c / √(μ_r ε_r)।\nশূন্য মাধ্যমে এটি আলোর গতিবেগ c ≈ ৩ × ১০⁸ m/s এর সমান।\n\nসমরূপ সমতল তরঙ্গ (UPW):\nযে তরঙ্গের তরঙ্গমুখগুলি সমতল এবং সম্পূর্ণ তলে ক্ষেত্রের বিস্তার সুষম থাকে, তাকে সমরূপ সমতল তরঙ্গ বলে। +z দিকে গমনকারী তরঙ্গের ক্ষেত্রে:\nE(z, t) = E0 cos(ωt - βz) ax\nH(z, t) = (E0 / η) cos(ωt - βz) ay\nএখানে β = ω √(με) = ২π/λ হলো দশা ধ্রুবক, এবং η = √(μ/ε) হলো মাধ্যমের সহজাত তরঙ্গ প্রতিবন্ধকতা। শূন্য মাধ্যমে η0 ≈ ৩৭৭ Ω (১২০π Ω)। যেহেতু E এবং H উভয়ই গতির অভিমুখ z এর সাথে লম্ব (Ez = Hz = ০), তাই এটি একটি বিশুদ্ধ অনুপ্রস্থ তড়িৎচৌম্বকীয় (TEM) তরঙ্গ।\n\nক্ষয়যুক্ত পরিবাহী মাধ্যমে সঞ্চালন:\nপরিবাহিতা σ > ০ হলে জটিল সঞ্চালন ধ্রুবক γ = α + jβ = √[jωμ(σ + jωε)]। এখানে α হলো ক্ষয় ধ্রুবক, ফলে বিস্তার e^(-αz) হারে হ্রাস পায়। যে দূরত্বে তরঙ্গের মান প্রারম্ভিক মানের ১/e (৩৬.৮%) অংশে নেমে আসে, তাকে স্কিন গভীরতা (Skin Depth) বলে: δ = ১/α = √(২ / (ω μ σ))।\n\nপয়েন্টিং ভেক্টর ও শক্তি প্রবাহ:\nতড়িৎচৌম্বকীয় শক্তির প্রবাহের ঘনত্ব জন হেনরি পয়েন্টিং উদ্ভাবিত পয়েন্টিং ভেক্টর S = E × H (W/m²) দ্বারা প্রকাশিত হয়। পর্যায়কাল-গড় শক্তি প্রবাহের ঘনত্ব S_avg = ½ Re(E × H*) = ½ (|E0|² / η) az ওয়াট/বর্গমিটার।"
  },
  formulas: [
    {
      id: 'f-helmholtz-wave-equation',
      symbol: '∇²E',
      expression: '∇²E - με ∂²E/∂t² = 0  ⟶  ∇²E + k²E = 0 (phasor)',
      title: {
        en: 'Homogeneous Vector Wave Equation (Helmholtz Equation)',
        hi: 'समांगी सदिश तरंग समीकरण (हेल्महोल्ट्ज़ समीकरण)',
        bn: 'সুষম ভেক্টর তরঙ্গ সমীকরণ (হেলমহোল্টজ সমীকরণ)'
      },
      description: {
        en: 'Governing differential wave equation describing the spatial propagation and temporal oscillation of electric and magnetic fields in source-free media.',
        hi: 'स्रोत-मुक्त माध्यम में विद्युत और चुंबकीय क्षेत्रों के स्थानिक संचरण एवं कालिक दोलन का मूल अवकल समीकरण।',
        bn: 'উৎসবিহীন মাধ্যমে তড়িৎ ও চৌম্বক ক্ষেত্রের স্থানিক বিস্তার এবং কালিক স্পন্দন নির্দেশকারী মৌলিক তরঙ্গ সমীকরণ।'
      },
      variables: [
        { symbol: '∇²', name: { en: 'Vector Laplacian operator (∂²/∂x² + ∂²/∂y² + ∂²/∂z²)', hi: 'लाप्लासियन संकारक', bn: 'ল্যাপ্লাসিয়ান অপারেটর' } },
        { symbol: 'μ', name: { en: 'Magnetic permeability of medium (H/m)', hi: 'माध्यम की चुंबकशीलता', bn: 'মাধ্যমের চৌম্বক প্রবেশ্যতা' } },
        { symbol: 'ε', name: { en: 'Electric permittivity of medium (F/m)', hi: 'माध्यम का परावैद्युतांक', bn: 'মাধ্যমের বৈদ্যুতিক ভেদ্যতা' } },
        { symbol: 'k', name: { en: 'Wavenumber k = ω √(με) = ω / v_p (rad/m)', hi: 'तरंग संख्या', bn: 'তরঙ্গ সংখ্যা' } }
      ]
    },
    {
      id: 'f-phase-velocity-wavenumber',
      symbol: 'v_p, β',
      expression: 'v_p = 1 / √(με) = c / √(μ_r ε_r),   β = ω / v_p = 2π / λ',
      title: {
        en: 'Phase Velocity and Phase Constant (Wavenumber)',
        hi: 'कला वेग एवं कला नियतांक (तरंग संख्या)',
        bn: 'দশা বেগ ও দশা ধ্রুবক (তরঙ্গ সংখ্যা)'
      },
      description: {
        en: 'Speed of propagation of equiphase wavefronts and spatial rate of phase progression in radians per meter.',
        hi: 'समान कला वाले तरंगाग्रों की संचरण गति तथा प्रति मीटर कला परिवर्तन की दर।',
        bn: 'সমদশা সম্পন্ন তরঙ্গমুখের বিস্তার বেগ এবং প্রতি মিটারে দশার পরিবর্তনের হার।'
      },
      variables: [
        { symbol: 'v_p', name: { en: 'Phase velocity (m/s)', hi: 'कला वेग (m/s)', bn: 'দশা বেগ (m/s)' } },
        { symbol: 'c', name: { en: 'Speed of light in vacuum (2.998 × 10⁸ m/s)', hi: 'निर्वात में प्रकाश की चाल', bn: 'শূন্যে আলোর দ্রুতি' } },
        { symbol: 'β', name: { en: 'Phase constant or wavenumber (rad/m)', hi: 'कला नियतांक (rad/m)', bn: 'দশা ধ্রুবক (rad/m)' } },
        { symbol: 'λ', name: { en: 'Wavelength in medium λ = v_p / f (m)', hi: 'तरंगदैर्ध्य', bn: 'তরঙ্গদৈর্ঘ্য' } }
      ]
    },
    {
      id: 'f-intrinsic-wave-impedance',
      symbol: 'η',
      expression: 'η = √(μ / ε) = |E| / |H|,   η₀ = √(μ₀ / ε₀) ≈ 120π ≈ 376.73 Ω',
      title: {
        en: 'Intrinsic Wave Impedance of Medium',
        hi: 'माध्यम की आंतरिक तरंग प्रतिबाधा',
        bn: 'মাধ্যমের সহজাত তরঙ্গ প্রতিবন্ধকতা'
      },
      description: {
        en: 'The ratio of transverse electric field intensity to transverse magnetic field intensity in a traveling plane wave, measured in Ohms.',
        hi: 'गतिमान समतल तरंग में अनुप्रस्थ विद्युत क्षेत्र और चुंबकीय क्षेत्र की तीव्रताओं का अनुपात (ओम में)।',
        bn: 'চলমান সমতল তরঙ্গে অনুপ্রস্থ তড়িৎ ক্ষেত্র এবং চৌম্বক ক্ষেত্রের তীব্রতার অনুপাত (ওহম এককে)।'
      },
      variables: [
        { symbol: 'η', name: { en: 'Intrinsic impedance (Ω)', hi: 'आंतरिक प्रतिबाधा (Ω)', bn: 'সহজাত প্রতিবন্ধকতা (Ω)' } },
        { symbol: 'η₀', name: { en: 'Free-space wave impedance (377 Ω)', hi: 'निर्वात की तरंग प्रतिबाधा (377 Ω)', bn: 'শূন্য মাধ্যমের প্রতিবন্ধকতা (৩৭৭ Ω)' } },
        { symbol: 'E', name: { en: 'Electric field amplitude (V/m)', hi: 'विद्युत क्षेत्र आयाम (V/m)', bn: 'তড়িৎ ক্ষেত্র বিস্তার (V/m)' } },
        { symbol: 'H', name: { en: 'Magnetic field intensity amplitude (A/m)', hi: 'चुंबकीय क्षेत्र तीव्रता आयाम (A/m)', bn: 'চৌম্বক তীব্রতা বিস্তার (A/m)' } }
      ]
    },
    {
      id: 'f-complex-propagation-constant',
      symbol: 'γ',
      expression: 'γ = α + jβ = √[jωμ(σ + jωε)]',
      title: {
        en: 'Complex Propagation Constant in Lossy Media',
        hi: 'क्षयकारी माध्यम में सम्मिश्र संचरण नियतांक',
        bn: 'ক্ষয়যুক্ত মাধ্যমে জটিল সঞ্চালন ধ্রুবক'
      },
      description: {
        en: 'Unified constant combining spatial attenuation rate α (Np/m) and phase progression rate β (rad/m) in conducting media.',
        hi: 'चालक माध्यमों में स्थानिक क्षीणन दर α तथा कला संचरण दर β को संयोजित करने वाला सम्मिश्र स्थिरांक।',
        bn: 'পরিবাহী মাধ্যমে স্থানিক ক্ষয় হার α এবং দশা সঞ্চালন হার β এর সম্মিলিত গাণিতিক রূপ।'
      },
      variables: [
        { symbol: 'γ', name: { en: 'Complex propagation constant (m⁻¹)', hi: 'सम्मिश्र संचरण नियतांक', bn: 'জটিল সঞ্চালন ধ্রুবক' } },
        { symbol: 'α', name: { en: 'Attenuation constant (Np/m or dB/m)', hi: 'क्षीणन नियतांक', bn: 'ক্ষয় ধ্রুবক' } },
        { symbol: 'β', name: { en: 'Phase constant (rad/m)', hi: 'कला नियतांक', bn: 'দশা ধ্রুবক' } },
        { symbol: 'σ', name: { en: 'Medium conductivity (S/m)', hi: 'माध्यम की चालकता', bn: 'মাধ্যমের পরিবাহিতা' } }
      ]
    },
    {
      id: 'f-skin-depth',
      symbol: 'δ',
      expression: 'δ = 1 / α = √(2 / (ω μ σ)) = 1 / √(π f μ σ)',
      title: {
        en: 'Skin Depth (Penetration Depth) in Good Conductors',
        hi: 'अच्छे चालकों में स्किन गहराई (भेदन गहराई)',
        bn: 'উত্তম পরিবাহীতে স্কিন গভীরতা (অনুপ্রবেশ গভীরতা)'
      },
      description: {
        en: 'Depth into a conducting boundary where electromagnetic wave amplitude falls to 1/e (36.8%) of its surface value.',
        hi: 'चालक के भीतर वह गहराई जिस पर तरंग का आयाम घटकर सतह के मान का 1/e (36.8%) रह जाता है।',
        bn: 'পরিবাহীর অভ্যন্তরে যে দূরত্বে তড়িৎচৌম্বকীয় তরঙ্গের বিস্তার তার পৃষ্ঠের মানের ১/e (৩৬.৮%) ভাগে নেমে আসে।'
      },
      variables: [
        { symbol: 'δ', name: { en: 'Skin depth (m or μm)', hi: 'स्किन गहराई', bn: 'স্কিন গভীরতা' } },
        { symbol: 'f', name: { en: 'Wave frequency (Hz)', hi: 'तरंग आवृत्ति (Hz)', bn: 'তরঙ্গ কম্পাঙ্ক (Hz)' } },
        { symbol: 'σ', name: { en: 'Electrical conductivity (S/m)', hi: 'विद्युत चालकता', bn: 'তড়িৎ পরিবাহিতা' } },
        { symbol: 'μ', name: { en: 'Magnetic permeability (H/m)', hi: 'चुंबकशीलता', bn: 'চৌম্বক প্রবেশ্যতা' } }
      ]
    },
    {
      id: 'f-poynting-vector-power',
      symbol: 'S, S_avg',
      expression: 'S = E × H,   S_avg = ½ Re(E × H*) = ½ (|E₀|² / η) a_k (W/m²)',
      title: {
        en: 'Poynting Vector and Time-Averaged Power Density',
        hi: 'पॉइंटिंग सदिश एवं समय-औसत शक्ति घनत्व',
        bn: 'পয়েন্টিং ভেক্টর ও সময়-গড় শক্তি ঘনত্ব'
      },
      description: {
        en: 'Directional electromagnetic power flux density transporting energy through space per unit cross-sectional area.',
        hi: 'प्रति इकाई अनुप्रस्थ क्षेत्रफल से अंतरिक्ष में ऊर्जा ले जाने वाली दिशात्मक शक्ति फ्लक्स घनत्व।',
        bn: 'প্রতি একক প্রস্থচ্ছেদের মধ্য দিয়ে মহাশূন্যে শক্তি বহনকারী দিকনির্দেশক শক্তি ফ্লাক্স ঘনত্ব।'
      },
      variables: [
        { symbol: 'S', name: { en: 'Instantaneous Poynting vector (W/m²)', hi: 'तात्क्षणिक पॉइंटिंग सदिश (W/m²)', bn: 'তাৎক্ষণিক পয়েন্টিং ভেক্টর (W/m²)' } },
        { symbol: 'S_avg', name: { en: 'Time-averaged power density vector (W/m²)', hi: 'समय-औसत शक्ति घनत्व', bn: 'সময়-গড় শক্তি ঘনত্ব' } },
        { symbol: 'E₀', name: { en: 'Peak electric field magnitude (V/m)', hi: 'शिखर विद्युत क्षेत्र परिमाण', bn: 'সর্বোচ্চ তড়িৎ ক্ষেত্র বিস্তার' } },
        { symbol: 'a_k', name: { en: 'Unit vector in propagation direction', hi: 'संचरण दिशा में एकांक सदिश', bn: 'সঞ্চালন অভিমুখে একক ভেক্টর' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-wave-equation-derivation',
      title: {
        en: '1. Derivation of the Electromagnetic Wave Equation',
        hi: '1. विद्युत चुंबकीय तरंग समीकरण की व्युत्पत्ति',
        bn: '১. তড়িৎচৌম্বকীয় তরঙ্গ সমীকরণের গাণিতিক প্রতিপাদন'
      },
      content: {
        en: 'In 1865, James Clerk Maxwell performed one of the greatest mathematical unifications in scientific history by combining Faraday’s induction law with his newly completed Ampere-Maxwell law in source-free space (charge density ρ = 0, current density J = 0):\n\nStep 1: Take the curl of Faraday’s Law:\n∇ × E = -μ ∂H/∂t\n∇ × (∇ × E) = ∇ × (-μ ∂H/∂t) = -μ ∂/∂t (∇ × H)\n\nStep 2: Substitute the source-free Ampere-Maxwell law (∇ × H = ε ∂E/∂t):\n∇ × (∇ × E) = -μ ∂/∂t (ε ∂E/∂t) = -με ∂²E/∂t²\n\nStep 3: Apply the vector identity ∇ × (∇ × E) = ∇(∇ · E) - ∇²E:\nSince the medium is electrically neutral (ρ = 0), Gauss’s law guarantees ∇ · E = 0. Therefore:\n-∇²E = -με ∂²E/∂t²  ⟹  ∇²E - με ∂²E/∂t² = 0\n\nIdentical steps applied to ∇ × H yield:\n∇²H - με ∂²H/∂t² = 0\n\nThis is the classic three-dimensional wave equation. Its solutions propagate outward as ripples in the electromagnetic fabric of spacetime with phase velocity v_p = 1 / √(με). In vacuum, substituting μ0 = 4π × 10⁻⁷ H/m and ε0 = 8.854 × 10⁻¹² F/m produces v_p = 2.998 × 10⁸ m/s—exactly the speed of light!',
        hi: '1865 में जेम्स क्लर्क मैक्सवेल ने स्रोत-मुक्त स्थान (ρ = 0, J = 0) में फैराडे के प्रेरण नियम और एम्पीयर-मैक्सवेल नियम को मिलाकर आधुनिक भौतिकी का सबसे महत्वपूर्ण समीकरण व्युत्पन्न किया:\n\nचरण 1: फैराडे नियम का कर्ल लेना:\n∇ × E = -μ ∂H/∂t ⟹ ∇ × (∇ × E) = -μ ∂/∂t (∇ × H)\n\nचरण 2: एम्पीयर-मैक्सवेल नियम (∇ × H = ε ∂E/∂t) का मान रखना:\n∇ × (∇ × E) = -με ∂²E/∂t²\n\nचरण 3: सदिश सर्वसमिका ∇ × (∇ × E) = ∇(∇ · E) - ∇²E का उपयोग करना:\nचूंकि मुक्त आवेश शून्य है (ρ = 0), अतः ∇ · E = 0। इससे हमें प्राप्त होता है:\n∇²E - με ∂²E/∂t² = 0\n\nयही सदिश तरंग समीकरण है जिसकी संचरण चाल v_p = 1 / √(με) होती है। निर्वात में इसका मान ठीक प्रकाश की चाल c ≈ 3 × 10⁸ m/s के बराबर आता है, जिससे यह ऐतिहासिक सत्य सिद्ध हुआ कि प्रकाश मूलतः एक विद्युत चुंबकीय तरंग है।',
        bn: '১৮৬৫ সালে জেমস ক্লার্ক ম্যাক্সওয়েল শূন্য মাধ্যমে (ρ = ০, J = ০) ফ্যারাডের আবেশ সূত্র এবং অ্যাম্পিয়ার-ম্যাক্সওয়েল সূত্রকে সমন্বয় করে পদার্থবিজ্ঞানের ইতিহাসে এক যুগান্তকারী সমীকরণ প্রতিষ্ঠা করেন:\n\nধাপ ১: ফ্যারাডের সূত্রের কার্ল গ্রহণ:\n∇ × E = -μ ∂H/∂t ⟹ ∇ × (∇ × E) = -μ ∂/∂t (∇ × H)\n\nধাপ ২: অ্যাম্পিয়ার-ম্যাক্সওয়েল সূত্র (∇ × H = ε ∂E/∂t) প্রতিস্থাপন:\n∇ × (∇ × E) = -με ∂²E/∂t²\n\nধাপ ৩: ভেক্টর অভেদ ∇ × (∇ × E) = ∇(∇ · E) - ∇²E প্রয়োগ:\nযেহেতু মুক্ত আধান নেই (ρ = ০), তাই গাউসের সূত্রানুসারে ∇ · E = ০। ফলে পাওয়া যায়:\n∇²E - με ∂²E/∂t² = ০\n\nএটিই ত্রিমাত্রিক ভেক্টর তরঙ্গ সমীকরণ যার বিস্তার দ্রুতি v_p = ১ / √(με)। শূন্যস্থানে μ0 ও ε0 এর মান বসালে দ্রুতি আসে ঠিক ২.৯৯৮ × ১০⁸ m/s—যা নিখুঁতভাবে আলোর গতির সমান!'
      },
      schematicId: 'circuit-ch11-wave-propagation-plane-waves'
    },
    {
      id: 'sec-upw-tem-characteristics',
      title: {
        en: '2. Uniform Plane Waves (UPW) and Transverse Electromagnetic (TEM) Nature',
        hi: '2. एकसमान समतल तरंगें (UPW) एवं अनुप्रस्थ विद्युत चुंबकत्व (TEM)',
        bn: '২. সমরূপ সমতল তরঙ্গ (UPW) এবং অনুপ্রস্থ তড়িৎচৌম্বক (TEM) প্রকৃতি'
      },
      content: {
        en: 'A Uniform Plane Wave (UPW) is an idealized wave model where field vectors lie in flat planar wavefronts orthogonal to the propagation vector, with field magnitude constant at every point on each wavefront plane.\n\nKey Attributes of Uniform Plane Waves:\n1. Transverse Electromagnetic (TEM) Structure: The electric field E, magnetic field H, and wave propagation direction k are mutually orthogonal: E ⟂ H ⟂ k. For a wave traveling along +z:\n   • E(z, t) = E0 cos(ωt - βz) ax\n   • H(z, t) = H0 cos(ωt - βz) ay\n   • Ez = 0 and Hz = 0 (no longitudinal components exist along the travel axis).\n\n2. In-Phase Oscillation: In any lossless dielectric medium (conductivity σ = 0), the electric and magnetic fields attain their crests, troughs, and zero-crossings simultaneously in space and time.\n\n3. Intrinsic Wave Impedance (η): The ratio of electric field strength to magnetic field intensity is independent of position and time, given by the characteristic impedance of the medium:\n   η = E0 / H0 = √(μ / ε) [Ohms, Ω].\n   In free space: η0 = √(μ0 / ε0) = √[(4π × 10⁻⁷) / (8.854 × 10⁻¹²)] ≈ 376.73 Ω ≈ 120π Ω ≈ 377 Ω.\n   Thus, an electric field wave of 377 V/m in air is accompanied by a magnetic field intensity of exactly 1.0 A/m (or B = μ0 H = 1.257 μT).\n\n4. Cross-Product Poynting Rule: The direction of wave propagation is given by the cross product of unit vectors: a_k = a_E × a_H. For ax × ay = az, energy flows strictly in the +z direction.',
        hi: 'एकसमान समतल तरंग (UPW) एक आदर्श तरंग मॉडल है जिसमें विद्युत और चुंबकीय क्षेत्र तरंगाग्र समतल में स्थित होते हैं और पूरे समतल पर उनका परिमाण एकसमान रहता है।\n\nमुख्य विशेषताएं:\n1. TEM संरचना: विद्युत क्षेत्र E, चुंबकीय क्षेत्र H और संचरण दिशा k परस्पर लंबवत होते हैं (E ⟂ H ⟂ k)। z-दिशा में गतिमान तरंग के लिए Ez = 0 तथा Hz = 0 होता है।\n2. समान कला: हानिरहित माध्यम (σ = 0) में E और H तरंगें समय और स्थान में एक साथ अपने शिखर और शून्य मान पर पहुँचती हैं।\n3. आंतरिक तरंग प्रतिबाधा (η): E और H के परिमाण का अनुपात माध्यम की आंतरिक प्रतिबाधा कहलाता है: η = E/H = √(μ/ε)। निर्वात में η0 ≈ 377 Ω होती है। 377 V/m के विद्युत क्षेत्र के साथ 1 A/m का चुंबकीय क्षेत्र मौजूद रहता है।\n4. संचरण दिशा: ऊर्जा संचरण की दिशा a_k = a_E × a_H द्वारा निर्धारित होती है (ax × ay = az)।',
        bn: 'সমরূপ সমতল তরঙ্গ (UPW) হলো এমন একটি তরঙ্গ যাতে ক্ষেত্র ভেক্টরগুলি তরঙ্গের গতির অভিমুখের সাথে লম্ব সমতল তরঙ্গমুখে অবস্থান করে এবং যেকোনো নির্দিষ্ট সমতলে তরঙ্গের বিস্তার পুরোপুরি সুষম থাকে।\n\nপ্রধান বৈশিষ্ট্যসমূহ:\n১. TEM গঠন: তড়িৎ ক্ষেত্র E, চৌম্বক ক্ষেত্র H এবং সঞ্চালনের অভিমুখ k পরস্পর লম্ব (E ⟂ H ⟂ k)। z-অক্ষ বরাবর চলমান তরঙ্গে Ez = ০ এবং Hz = ০।\n২. সমদশা স্পন্দন: অপচয়হীন ডাইইলেক্ট্রিকে (σ = ০) E এবং H ক্ষেত্র যুগপৎ তাদের সর্বোচ্চ ও সর্বনিম্ন মানে পৌঁছায়।\n৩. সহজাত তরঙ্গ প্রতিবন্ধকতা (η): E ও H ক্ষেত্রের অনুপাত মাধ্যমভেদে ধ্রুব থাকে: η = E/H = √(μ/ε)। শূন্য মাধ্যমে η0 ≈ ৩৭৭ Ω (১২০π Ω)। অর্থাৎ বায়ুতে ৩৭৭ V/m তড়িৎ ক্ষেত্রের সাথে ঠিক ১.০ A/m চৌম্বক প্রাবল্য বিদ্যমান থাকে।\n৪. শক্তি প্রবাহের দিক: তরঙ্গ সঞ্চালনের দিক ভেক্টর গুণন a_k = a_E × a_H দ্বারা নির্ধারিত হয় (ax × ay = az)।'
      }
    },
    {
      id: 'sec-lossy-media-skin-depth',
      title: {
        en: '3. Propagation in Lossy Media, Attenuation, and Skin Depth',
        hi: '3. क्षयकारी माध्यमों में संचरण, क्षीणन एवं स्किन गहराई',
        bn: '৩. ক্ষয়যুক্ত মাধ্যমে সঞ্চালন, অবক্ষয় এবং স্কিন গভীরতা'
      },
      content: {
        en: 'In real-world materials with non-zero electrical conductivity (σ > 0), such as seawater, earth soil, or metallic conductors, the alternating electric field drives conduction currents J_c = σ E. This dissipates electromagnetic energy as Joule heat (σ |E|²), causing the wave amplitude to decay exponentially as it penetrates the medium.\n\nComplex Propagation Constant (γ):\nγ = α + jβ = √[jωμ (σ + jωε)]\n• Attenuation Constant (α, Np/m): Dictates the exponential spatial decay e^(-αz).\n• Phase Constant (β, rad/m): Dictates spatial phase shift and wavelength λ = 2π/β.\n\nLoss Tangent Criterion:\nThe loss tangent tan(θ) = σ / (ωε) classifies the material:\n• Good Dielectrics (σ << ωε, tan θ << 1): Conduction is negligible. α ≈ (σ/2) √(μ/ε), β ≈ ω √(με).\n• Good Conductors (σ >> ωε, tan θ >> 1): Conduction currents completely overpower displacement currents. Here:\n  α ≈ β ≈ √(ω μ σ / 2) = √(π f μ σ)\n  Complex intrinsic impedance: η_c ≈ (1 + j) √(ω μ / 2σ) = √(ω μ / σ) ∠45°.\n  In conductors, the magnetic field lags the electric field by 45°!\n\nSkin Depth (δ):\nSkin depth is defined as the penetration distance z = δ at which field amplitude decays to 1/e (≈ 36.8%) of its surface level:\nδ = 1 / α = 1 / √(π f μ σ) = √(2 / (ω μ σ)).\nFor copper (σ = 5.8 × 10⁷ S/m, μr = 1):\n• At 50 Hz power frequency: δ ≈ 9.38 mm.\n• At 1 MHz RF radio: δ ≈ 66 μm.\n• At 10 GHz microwave: δ ≈ 0.66 μm.\nAt microwave frequencies, alternating current is confined strictly to an ultra-thin surface layer less than a micron thick, explaining why RF coaxial cables and microwave waveguides are hollow or silver-plated!',
        hi: 'वास्तविक पदार्थों (जैसे तांबा, समुद्र का पानी या मिट्टी) में चालकता σ > 0 होने के कारण चालन धारा J = σ E उत्पन्न होती है, जिससे तरंग ऊर्जा जूल ऊष्मा के रूप में नष्ट होती है और तरंग का आयाम चरघातांकी रूप से e^(-αz) घटता है।\n\nहानि स्पर्शज्या (Loss Tangent): tan(θ) = σ / (ωε)\n• अच्छे परावैद्युत (σ << ωε): क्षीणन बहुत कम होता है।\n• अच्छे चालक (σ >> ωε): यहाँ α ≈ β ≈ √(π f μ σ) होता है। चालक में चुंबकीय क्षेत्र विद्युत क्षेत्र से 45° पीछे रहता है।\n\nस्किन गहराई (δ = 1/α):\nवह गहराई जहाँ तरंग का आयाम घटकर सतह के मान का 1/e (~36.8%) रह जाता है: δ = 1 / √(π f μ σ)।\nतांबे के लिए:\n• 50 Hz पर: δ ≈ 9.38 mm\n• 1 MHz पर: δ ≈ 66 μm\n• 10 GHz पर: δ ≈ 0.66 μm।\nउच्च आवृत्तियों पर धारा केवल तार की अत्यधिक पतली बाहरी सतह पर ही बहती है। इसी कारण उच्च आवृत्ति के घटकों पर चांदी की पॉलिश की जाती है।',
        bn: 'বাস্তব পদার্থে (যেমন তামা, সমুদ্রের জল বা মাটি) পরিবাহিতা σ > ০ হওয়ায় তড়িৎ ক্ষেত্র চালনা প্রবাহ J = σ E সৃষ্টি করে, যা জুল তাপে পরিণত হয়ে তরঙ্গের শক্তি হ্রাস করে। তরঙ্গের বিস্তার e^(-αz) হারে দ্রুত ক্ষীণ হয়।\n\nলস ট্যানজেন্ট: tan(θ) = σ / (ωε)\n• উত্তম ডাইইলেক্ট্রিক (σ << ωε): ক্ষয় নগণ্য।\n• উত্তম পরিবাহী (σ >> ωε): এখানে α ≈ β ≈ √(π f μ σ)। পরিবাহীর ভেতর চৌম্বক ক্ষেত্র তড়িৎ ক্ষেত্র অপেক্ষা ৪৫° পিছিয়ে থাকে।\n\nস্কিন গভীরতা (δ = ১/α):\nপরিবাহীর অভ্যন্তরে যে দূরত্বে তরঙ্গের মান পৃষ্ঠের মানের ১/e (~৩৬.৮%) অংশে হ্রাস পায়: δ = ১ / √(π f μ σ)।\nতামার ক্ষেত্রে:\n• ৫০ Hz পাওয়ার ফ্রিকোয়েন্সিতে: δ ≈ ৯.৩৮ mm\n• ১ MHz রেডিও ফ্রিকোয়েন্সিতে: δ ≈ ৬৬ μm\n• ১০ GHz মাইক্রোওয়েভে: δ ≈ ০.৬৬ μm।\nউচ্চ কম্পাঙ্কে কারেন্ট কেবল পরিবাহীর উপরিভাগের একটি অতি সূক্ষ্ম স্তরে সীমাবদ্ধ থাকে। এই কারণেই মাইক্রোওয়েভ ওয়েভগাইড ও আরএফ সংযোগে রূপার প্রলেপ দেওয়া হয়।'
      }
    },
    {
      id: 'sec-poynting-vector-spectrum',
      title: {
        en: '4. Poynting Energy Flow and the Electromagnetic Spectrum',
        hi: '4. पॉइंटिंग ऊर्जा प्रवाह एवं विद्युत चुंबकीय स्पेक्ट्रम',
        bn: '৪. পয়েন্টিং শক্তি প্রবাহ এবং তড়িৎচৌম্বক বর্ণালী'
      },
      content: {
        en: 'Electromagnetic waves are not merely abstract mathematical disturbances; they carry real physical momentum and energy across spacetime.\n\nThe Poynting Theorem:\nFrom Maxwell’s equations, Poynting proved the continuity of electromagnetic power:\n- ∇ · (E × H) = ∂/∂t [½ ε E² + ½ μ H²] + J · E\nThis states that the net electromagnetic power flowing into a volume equals the rate of increase of stored energy plus the ohmic dissipation (Joule heat J · E).\n\nThe Poynting Vector S = E × H defines instantaneous power flux density (W/m²). For sinusoidal fields, the time-average power flux density is:\nS_avg = ½ Re(E × H*) = ½ (|E0|² / η) a_k.\n\nThe Electromagnetic Spectrum:\nAll electromagnetic waves travel at the speed of light in vacuum (c ≈ 3 × 10⁸ m/s) governed by c = f λ, spanning over 20 orders of magnitude:\n1. Radio Waves (f < 3 GHz, λ > 10 cm): AM/FM radio, VHF/UHF television, cellular LTE.\n2. Microwaves (3 GHz – 300 GHz, λ: 10 cm – 1 mm): 5G communications, WiFi 6E, satellite links, radar, microwave ovens.\n3. Infrared (300 GHz – 430 THz, λ: 1 mm – 700 nm): Thermal radiation, fiber optic telecommunications (1310/1550 nm), night vision.\n4. Visible Light (430 THz – 750 THz, λ: 700 nm – 400 nm): Red to violet wavelengths detected by the human retina.\n5. Ultraviolet (750 THz – 30 PHz, λ: 400 nm – 10 nm): Sterilization, photolithography in semiconductor fabrication.\n6. X-Rays (30 PHz – 30 EHz, λ: 10 nm – 0.01 nm): Medical imaging, crystallography.\n7. Gamma Rays (f > 30 EHz, λ < 0.01 nm): Nuclear decay, cosmic gamma ray bursts, cancer radiotherapy.',
        hi: 'विद्युत चुंबकीय तरंगें केवल अमूर्त तरंगें नहीं हैं; वे वास्तविक भौतिक ऊर्जा और संवेग का वहन करती हैं।\n\nपॉइंटिंग प्रमेय:\n- ∇ · (E × H) = ∂/∂t [½ ε E² + ½ μ H²] + J · E\nयह दर्शाता है कि किसी आयतन में प्रवेश करने वाली विद्युत चुंबकीय शक्ति संचित ऊर्जा में वृद्धि और जूल ऊष्मा हानि के योग के बराबर होती है। समय-औसत शक्ति प्रवाह S_avg = ½ (|E0|² / η) az (W/m²) होता है।\n\nविद्युत चुंबकीय स्पेक्ट्रम:\nसभी तरंगें निर्वात में प्रकाश की चाल c = f λ से चलती हैं:\n1. रेडियो तरंगें (f < 3 GHz): एएम/एफएम, टीवी, मोबाइल संचार।\n2. माइक्रोवेव (3 GHz - 300 GHz): 5G, वाई-फाई, रडार, सैटेलाइट लिंक।\n3. अवरक्त (Infrared): थर्मल इमेजिंग, ऑप्टिकल फाइबर (1550 nm)।\n4. दृश्य प्रकाश (400 nm - 700 nm): मानव नेत्र द्वारा देखे जाने वाले रंग।\n5. पराबैंगनी (Ultraviolet): रोगाणुनाशन, सेमीकंडक्टर निर्माण।\n6. एक्स-रे: चिकित्सा इमेजिंग, क्रिस्टलोग्राफी।\n7. गामा किरणें: परमाणु क्षय, कैंसर रेडियोथेरेपी।',
        bn: 'তড়িৎচৌম্বকীয় তরঙ্গ মহাশূন্যের মধ্য দিয়ে বাস্তব শক্তি এবং ভরবেগ পরিবহন করে।\n\nপয়েন্টিং উপপাদ্য:\n- ∇ · (E × H) = ∂/∂t [½ ε E² + ½ μ H²] + J · E\nএটি শক্তি সংরক্ষণ নীতির তড়িৎচৌম্বকীয় রূপ। পয়েন্টিং ভেক্টর S = E × H তাৎক্ষণিক শক্তি প্রবাহ ঘনত্ব এবং সময়-গড় শক্তি ঘনত্ব S_avg = ½ (|E0|² / η) az ওয়াট/বর্গমিটার।\n\nতড়িৎচৌম্বক বর্ণালী:\nশূন্যস্থানে সমস্ত তরঙ্গ c = f λ সমীকরণ মেনে আলোর দ্রুতিতে সঞ্চালিত হয়:\n১. রেডিও তরঙ্গ (f < ৩ GHz): মোবাইল ফোন, এফএম ও টিভি ব্রডকাস্ট।\n২. মাইক্রোওয়েভ (৩ GHz - ৩০০ GHz): ৫জি, ওয়াই-ফাই, রাডার ও স্যাটেলাইট।\n৩. অবলোহিত (Infrared): অপটিক্যাল ফাইবার (১৫৫০ nm), থার্মাল ক্যামেরা।\n৪. দৃশ্যমান আলো (৪০০ nm - ৭০০ nm): মানব চক্ষুর সংবেদনশীল বর্ণালী।\n৫. অতিবেগুনী (Ultraviolet): জীবাণুনাশক বাতি, চিপ ফ্যাব্রিকেশন।\n৬. এক্স-রে: চিকিৎসা বিজ্ঞানে হাড়ের ছবি, ক্রিস্টাল পরীক্ষা।\n৭. গামা রশ্মি: পারমাণবিক বিকিরণ, ক্যান্সার চিকিৎসায় রেডিওথেরাপি।'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-uniform-plane-wave',
      title: {
        en: 'Orthogonal Field Structure of a Uniform Plane Wave (TEM)',
        hi: 'एकसमान समतल तरंग (TEM) की लंबवत क्षेत्र संरचना',
        bn: 'সমরূপ সমতল তরঙ্গের (TEM) পরস্পর লম্ব ক্ষেত্র বিন্যাস'
      },
      caption: {
        en: 'Electric field vector E oscillates along the x-axis, magnetic field vector H oscillates along the y-axis, and energy propagates along the z-axis (S = E × H), illustrating the pure Transverse Electromagnetic (TEM) mode with wave impedance η0 = 377 Ω.',
        hi: 'विद्युत क्षेत्र E x-अक्ष पर, चुंबकीय क्षेत्र H y-अक्ष पर दोलन करता है, और ऊर्जा z-अक्ष (S = E × H) पर संचरित होती है। यह तरंग प्रतिबाधा η0 = 377 Ω के साथ शुद्ध TEM मोड प्रदर्शित करता है।',
        bn: 'তড়িৎ ক্ষেত্র E x-অক্ষ বরাবর, চৌম্বক ক্ষেত্র H y-অক্ষ বরাবর স্পন্দিত হয় এবং শক্তি z-অক্ষ বরাবর (S = E × H) সঞ্চালিত হয়, যা η0 = ৩৭৭ Ω প্রতিবন্ধকতার সাথে বিশুদ্ধ TEM মোড প্রদর্শন করে।'
      },
      svgType: 'circuit-ch11-wave-propagation-plane-waves'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-free-space-upw-fields-power',
      problem: {
        en: 'A 100 MHz uniform plane wave propagates through free space along the +z direction. Its electric field is given by E(z, t) = 150 cos(ωt - βz) ax (V/m). Calculate: (a) the phase constant β and wavelength λ, (b) the magnetic field intensity phasor and time-domain expression H(z, t), and (c) the time-averaged Poynting power density vector S_avg.',
        hi: 'एक 100 MHz एकसमान समतल तरंग +z दिशा में निर्वात में संचरित होती है। इसका विद्युत क्षेत्र E(z, t) = 150 cos(ωt - βz) ax (V/m) है। ज्ञात कीजिए: (a) कला नियतांक β एवं तरंगदैर्ध्य λ, (b) चुंबकीय क्षेत्र तीव्रता H(z, t), तथा (c) समय-औसत पॉइंटिंग शक्ति घनत्व S_avg।',
        bn: 'একটি ১০০ MHz সমরূপ সমতল তরঙ্গ শূন্য মাধ্যমে +z অক্ষ বরাবর অগ্রসর হচ্ছে। এর তড়িৎ ক্ষেত্র E(z, t) = ১৫০ cos(ωt - βz) ax (V/m)। নির্ণয় করুন: (a) দশা ধ্রুবক β এবং তরঙ্গদৈর্ঘ্য λ, (b) চৌম্বক ক্ষেত্র তীব্রতা H(z, t), এবং (c) সময়-গড় পয়েন্টিং শক্তি ঘনত্ব S_avg।'
      },
      solution: {
        en: 'Step 1: Calculate angular frequency ω, phase constant β, and wavelength λ in free space:\n• Frequency f = 100 × 10⁶ Hz = 100 MHz.\n• Angular frequency ω = 2π f = 2π × 100 × 10⁶ = 6.283 × 10⁸ rad/s.\n• Speed of light in vacuum c = 3.0 × 10⁸ m/s.\n• Phase constant β = ω / c = (6.283 × 10⁸) / (3.0 × 10⁸) = 2.0944 rad/m = (2π / 3) rad/m.\n• Wavelength λ = c / f = (3.0 × 10⁸) / (100 × 10⁶) = 3.0 meters.\n\nStep 2: Determine Magnetic Field Intensity H(z, t):\n• Intrinsic impedance of free space η0 = √(μ0 / ε0) ≈ 376.73 Ω ≈ 120π Ω ≈ 377 Ω.\n• Amplitude of H: H0 = E0 / η0 = 150 / 377 = 0.3979 A/m ≈ 0.40 A/m.\n• By the right-hand rule for wave propagation along +z: a_k = a_E × a_H ⟹ az = ax × ay. Thus H is polarized in the +ay direction.\n• Time-domain expression:\n  H(z, t) = 0.398 cos(ωt - 2.094 z) ay (A/m).\n\nStep 3: Calculate Time-Averaged Poynting Power Density S_avg:\n• S_avg = ½ Re(E × H*) = ½ (E0 · H0) az\n• S_avg = ½ (150 V/m) · (0.398 A/m) az = 29.85 az W/m².\nAlternatively:\n• S_avg = ½ (|E0|² / η0) az = ½ (150² / 376.73) az = ½ (22500 / 376.73) az = 29.86 az W/m².',
        hi: 'चरण 1: f = 100 MHz, c = 3 × 10⁸ m/s\n• ω = 2π(100 × 10⁶) = 6.283 × 10⁸ rad/s\n• β = ω / c = 2.094 rad/m\n• λ = c / f = 3.0 m।\nचरण 2: η0 ≈ 377 Ω\n• H0 = E0 / η0 = 150 / 377 = 0.398 A/m\n• दिशा: az = ax × ay, अतः H y-अक्ष पर है: H(z, t) = 0.398 cos(ωt - 2.094 z) ay A/m।\nचरण 3: S_avg = ½ (E0²/η0) az = ½ (22500 / 377) az = 29.86 az W/m²।',
        bn: 'ধাপ ১: f = ১০০ MHz, c = ৩ × ১০⁸ m/s\n• ω = ২π × ১০⁸ = ৬.২৮৩ × ১০⁸ rad/s\n• β = ω / c = ২.০৯৪ rad/m\n• λ = c / f = ৩.০ মিটার।\nধাপ ২: শূন্য মাধ্যমের প্রতিবন্ধকতা η0 ≈ ৩৭৭ Ω\n• H0 = ১৫০ / ৩৭৭ = ০.৩৯৮ A/m\n• দিক: az = ax × ay, তাই H y-অক্ষে অবস্থিত: H(z, t) = ০.৩৯৮ cos(ωt - ২.০৯৪ z) ay A/m।\nধাপ ৩: সময়-গড় শক্তি ঘনত্ব S_avg = ½ (১৫০² / ৩৭৭) az = ২৯.৮৬ az W/m²।'
      },
      givenValues: {
        'f': '100 MHz',
        'E': '150 cos(ωt - βz) ax V/m',
        'c': '3.0 × 10⁸ m/s',
        'η0': '377 Ω'
      },
      finalAnswer: {
        en: 'β = 2.094 rad/m;  λ = 3.0 m;  H(z, t) = 0.398 cos(ωt - 2.094 z) ay A/m;  S_avg = 29.86 az W/m²',
        hi: 'β = 2.094 rad/m;  λ = 3.0 m;  H(z, t) = 0.398 cos(ωt - 2.094 z) ay A/m;  S_avg = 29.86 az W/m²',
        bn: 'β = ২.০৯৪ rad/m;  λ = ৩.০ m;  H(z, t) = ০.৩৯৮ cos(ωt - ২.০৯৪ z) ay A/m;  S_avg = ২৯.৮৬ az W/m²'
      }
    },
    {
      id: 'ex-lossless-dielectric-propagation',
      problem: {
        en: 'A 2.45 GHz WiFi / microwave signal propagates through a non-magnetic lossless dielectric substrate (Teflon / PCB substrate) with relative permittivity εr = 2.25 and μr = 1.0. If the peak electric field in the dielectric is 60 V/m, determine: (a) the phase velocity v_p, (b) the wavelength in the dielectric λ_d compared to vacuum wavelength λ0, (c) the intrinsic impedance of the substrate η, and (d) the magnetic field intensity amplitude H0.',
        hi: 'एक 2.45 GHz वाई-फाई/माइक्रोवेव सिग्नल एक अचुंबकीय परावैद्युत सबस्ट्रेट (εr = 2.25, μr = 1.0) में संचरित होता है। यदि परावैद्युत में शिखर विद्युत क्षेत्र 60 V/m है, तो ज्ञात कीजिए: (a) कला वेग v_p, (b) माध्यम में तरंगदैर्ध्य λ_d, (c) सबस्ट्रेट की आंतरिक प्रतिबाधा η, तथा (d) चुंबकीय क्षेत्र आयाम H0।',
        bn: 'একটি ২.৪৫ GHz ওয়াই-ফাই সংকেত একটি অচৌম্বকীয় ডাইইলেক্ট্রিক স্তরের (εr = ২.২৫, μr = ১.০) মধ্য দিয়ে সঞ্চালিত হচ্ছে। ডাইইলেক্ট্রিকে সর্বোচ্চ তড়িৎ ক্ষেত্র ৬০ V/m হলে নির্ণয় করুন: (a) দশা বেগ v_p, (b) মাধ্যমে তরঙ্গদৈর্ঘ্য λ_d, (c) স্তরের অভ্যন্তরীণ প্রতিবন্ধকতা η, এবং (d) চৌম্বক ক্ষেত্র বিস্তার H0।'
      },
      solution: {
        en: 'Step 1: Calculate phase velocity v_p:\n• Refractive index of substrate n = √(εr μr) = √(2.25 × 1.0) = 1.50.\n• Phase velocity v_p = c / n = (3.0 × 10⁸ m/s) / 1.50 = 2.0 × 10⁸ m/s (two-thirds of the speed of light in vacuum).\n\nStep 2: Calculate wavelengths:\n• In vacuum: λ0 = c / f = (3.0 × 10⁸) / (2.45 × 10⁹) = 0.1224 m = 12.24 cm.\n• In dielectric substrate: λ_d = v_p / f = (2.0 × 10⁸) / (2.45 × 10⁹) = 0.0816 m = 8.16 cm.\n• Ratio: λ_d = λ0 / √εr = 12.24 cm / 1.5 = 8.16 cm (the wave compresses spatially by 33.3%!).\n\nStep 3: Calculate intrinsic wave impedance η:\n• η = √(μ / ε) = √(μ0 / (ε0 εr)) = η0 / √εr\n• η = 376.73 Ω / √2.25 = 376.73 / 1.50 = 251.15 Ω ≈ 251.2 Ω.\n\nStep 4: Calculate magnetic field intensity H0:\n• H0 = E0 / η = (60 V/m) / (251.15 Ω) = 0.2389 A/m ≈ 0.239 A/m.',
        hi: 'चरण 1: n = √2.25 = 1.5\n• v_p = c / 1.5 = (3 × 10⁸) / 1.5 = 2.0 × 10⁸ m/s।\nचरण 2: λ0 = (3 × 10⁸) / (2.45 × 10⁹) = 12.24 cm\n• λ_d = 12.24 / 1.5 = 8.16 cm।\nचरण 3: η = 377 / 1.5 = 251.3 Ω।\nचरण 4: H0 = 60 / 251.3 = 0.239 A/m।',
        bn: 'ধাপ ১: প্রতিসরাঙ্ক n = √২.২৫ = ১.৫\n• v_p = c / ১.৫ = ২.০ × ১০⁸ m/s।\nধাপ ২: শূন্যে তরঙ্গদৈর্ঘ্য λ0 = ১২.২৪ cm, মাধ্যমে λ_d = ১২.২৪ / ১.৫ = ৮.১৬ cm।\nধাপ ৩: মাধ্যমের প্রতিবন্ধকতা η = ৩৭৭ / ১.৫ = ২৫১.৩ Ω।\nধাপ ৪: চৌম্বক তীব্রতা H0 = ৬০ / ২৫১.৩ = ০.২৩৯ A/m।'
      },
      givenValues: {
        'f': '2.45 GHz',
        'εr': '2.25',
        'μr': '1.0',
        'E0': '60 V/m'
      },
      finalAnswer: {
        en: 'v_p = 2.0 × 10⁸ m/s;  λ_d = 8.16 cm (λ0 = 12.24 cm);  η = 251.2 Ω;  H0 = 0.239 A/m',
        hi: 'v_p = 2.0 × 10⁸ m/s;  λ_d = 8.16 cm;  η = 251.2 Ω;  H0 = 0.239 A/m',
        bn: 'v_p = ২.০ × ১০⁸ m/s;  λ_d = ৮.১৬ cm;  η = ২৫১.২ Ω;  H0 = ০.২৩৯ A/m'
      }
    },
    {
      id: 'ex-copper-skin-depth-attenuation',
      problem: {
        en: 'Standard annealed copper has electrical conductivity σ = 5.8 × 10⁷ S/m and relative permeability μr = 1.0. Calculate the skin depth δ, attenuation constant α, and the magnitude of the surface intrinsic impedance |η_c| of copper at: (a) a power utility frequency of 50 Hz, and (b) an ultra-high frequency (UHF) mobile band frequency of 1.0 GHz. Compare the results and discuss the engineering implication for conductor thickness.',
        hi: 'तांबे की विद्युत चालकता σ = 5.8 × 10⁷ S/m तथा μr = 1.0 है। (a) 50 Hz पावर ग्रिड आवृत्ति पर, तथा (b) 1.0 GHz मोबाइल बैंड आवृत्ति पर तांबे की स्किन गहराई δ, क्षीणन नियतांक α एवं आंतरिक प्रतिबाधा |η_c| ज्ञात कीजिए।',
        bn: 'তামার তড়িৎ পরিবাহিতা σ = ৫.৮ × ১০⁷ S/m এবং μr = ১.০। (a) ৫০ Hz পাওয়ার গ্রিড ফ্রিকোয়েন্সিতে, এবং (b) ১.০ GHz মোবাইল ব্যান্ড ফ্রিকোয়েন্সিতে তামার স্কিন গভীরতা δ, ক্ষয় ধ্রুবক α এবং অভ্যন্তরীণ প্রতিবন্ধকতা |η_c| নির্ণয় করুন।'
      },
      solution: {
        en: 'Step 1: Formula for good conductors (σ >> ωε):\n• Skin depth: δ = 1 / √(π f μ0 σ)\n• Attenuation constant: α = 1 / δ\n• Intrinsic impedance: η_c = (1 + j) / (σ δ) ⟹ |η_c| = √2 / (σ δ) = √(ω μ0 / σ).\n\nStep 2: Case (a) - Frequency f = 50 Hz:\n• Denominator factor: π f μ0 σ = π × 50 × (4π × 10⁻⁷) × (5.8 × 10⁷) = 11,448.2\n• Skin depth δ = 1 / √11,448.2 = 1 / 106.996 = 0.009346 m ≈ 9.35 mm.\n• Attenuation constant α = 1 / δ = 107 Np/m.\n• |η_c| = √2 / [(5.8 × 10⁷)(0.00935)] = 1.414 / 542,300 = 2.61 × 10⁻⁶ Ω = 2.61 μΩ.\n\nStep 3: Case (b) - Frequency f = 1.0 GHz = 1.0 × 10⁹ Hz:\n• Denominator factor: π × 10⁹ × (4π × 10⁻⁷) × (5.8 × 10⁷) = 2.2896 × 10¹¹\n• Skin depth δ = 1 / √(2.2896 × 10¹¹) = 1 / 478,502 = 2.09 × 10⁻⁶ m ≈ 2.09 μm (microns)!\n• Attenuation constant α = 1 / δ = 4.785 × 10⁵ Np/m = 478,500 Np/m.\n• |η_c| = √[(2π × 10⁹ × 4π × 10⁻⁷) / (5.8 × 10⁷)] = √(7895.7 / 5.8 × 10⁷) = √0.0001361 = 0.01167 Ω = 11.67 mΩ.\n\nEngineering Implication:\nAt 50 Hz, the skin depth of 9.35 mm allows substantial current penetration throughout normal copper busbars and cables. At 1.0 GHz, the skin depth collapses to barely 2.09 microns! Any copper thicker than ~10 μm at 1 GHz provides zero electrical benefit; hence RF transmission lines, cavity resonators, and waveguides use hollow silver-plated tubes rather than solid copper rods.',
        hi: 'चरण 1: अच्छे चालकों के लिए सूत्र: δ = 1 / √(π f μ0 σ), α = 1/δ, |η_c| = √2 / (σ δ)।\nचरण 2: 50 Hz पर:\n• δ = 9.35 mm, α = 107 Np/m, |η_c| = 2.61 μΩ।\nचरण 3: 1.0 GHz पर:\n• δ = 2.09 μm (माइक्रोन!), α = 478,500 Np/m, |η_c| = 11.67 mΩ।\nइंजीनियरिंग निष्कर्ष: 1 GHz पर धारा केवल 2 माइक्रोन की सतह पर बहती है, इसलिए RF घटक खोखले और चांदी लेपित बनाए जाते हैं।',
        bn: 'ধাপ ১: উত্তম পরিবাহীর ক্ষেত্রে: δ = ১ / √(π f μ0 σ), α = ১/δ, |η_c| = √২ / (σ δ)।\nধাপ ২: ৫০ Hz কম্পাঙ্কে:\n• δ = ৯.৩৫ mm, α = ১০৭ Np/m, |η_c| = ২.৬১ μΩ।\nধাপ ৩: ১.০ GHz কম্পাঙ্কে:\n• δ = ২.০৯ μm (মাইক্রন!), α = ৪,৭৮,৫০০ Np/m, |η_c| = ১১.৬৭ mΩ।\nপ্রকৌশল সিদ্ধান্ত: ১ GHz কম্পাঙ্কে বিদ্যুৎ প্রবাহ মাত্র ২ মাইক্রন গভীরতায় সীমাবদ্ধ থাকে, তাই উচ্চ ফ্রিকোয়েন্সির যন্ত্রাংশে নিরেট তামার পরিবর্তে ফাঁপা ও রূপার প্রলেপযুক্ত নল ব্যবহৃত হয়।'
      },
      givenValues: {
        'σ': '5.8 × 10⁷ S/m',
        'μr': '1.0',
        'f_power': '50 Hz',
        'f_rf': '1.0 GHz'
      },
      finalAnswer: {
        en: 'At 50 Hz: δ = 9.35 mm, α = 107 Np/m, |η_c| = 2.61 μΩ;  At 1.0 GHz: δ = 2.09 μm, α = 4.79 × 10⁵ Np/m, |η_c| = 11.67 mΩ',
        hi: '50 Hz पर: δ = 9.35 mm, |η_c| = 2.61 μΩ;  1.0 GHz पर: δ = 2.09 μm, |η_c| = 11.67 mΩ',
        bn: '৫০ Hz-এ: δ = ৯.৩৫ mm, |η_c| = ২.৬১ μΩ;  ১.০ GHz-এ: δ = ২.০৯ μm, |η_c| = ১১.৬৭ mΩ'
      }
    }
  ],
  practicalApplications: {
    en: [
      '5G/6G & WiFi Wireless Telecommunications: Antenna arrays emit uniform plane waves in the far-field zone (Fraunhofer region) carrying gigabit data over electromagnetic carrier frequencies.',
      'Satellite Telemetry & Deep-Space Probes: Space probes (e.g. Voyager, Mars Rovers) transmit data across billions of kilometers of vacuum where electromagnetic waves maintain unattenuated propagation (α = 0).',
      'RADAR & Stealth Aircraft Design: Stealth aircraft are shaped to deflect plane wave reflections away from enemy radar receivers, combined with radar-absorbing coatings engineered to match free space impedance η0.',
      'Microwave Heating & Industrial RF Drying: Microwave ovens use 2.45 GHz waves that penetrate food to a controlled skin depth, causing rapid dielectric rotation and heating of polar water molecules.',
      'Electromagnetic Waveguide & RF Coaxial Shielding: Utilizing the skin depth phenomenon (δ < 3 μm at GHz frequencies) to achieve 100% electromagnetic shielding with thin metallic foil layers.'
    ],
    hi: [
      '5G/6G एवं वाई-फाई दूरसंचार: एंटीना एरे दूरस्थ क्षेत्र (Fraunhofer region) में एकसमान समतल तरंगें प्रसारित करते हैं जो उच्च गति डेटा का वहन करती हैं।',
      'उपग्रह टेलीमेट्री एवं अंतरिक्ष यान: अंतरिक्ष यान (जैसे वोयाजर और मार्स रोवर) निर्वात में अरबों किलोमीटर दूर तक सिग्नल भेजते हैं जहाँ तरंग का क्षीणन शून्य (α = 0) होता है।',
      'रडार एवं स्टील्थ विमान: स्टील्थ विमानों की सतह रडार तरंगों को अवशोषित करने और मुक्त अंतरिक्ष प्रतिबाधा η0 से मिलान करने के लिए विशेष सामग्रियों से ढकी होती है।',
      'माइक्रोवेव तापन एवं औद्योगिक सुखाना: माइक्रोवेव ओवन 2.45 GHz की तरंगों का उपयोग करते हैं जो भोजन में निश्चित गहराई तक प्रवेश कर जल अणुओं को गर्म करती हैं।',
      'वेवगाइड एवं आरएफ कोएक्सियल शील्डिंग: उच्च आवृत्ति पर स्किन गहराई (δ < 3 μm) का उपयोग करके पतली धातु की पन्नी से 100% विद्युत चुंबकीय सुरक्षा प्राप्त करना।'
    ],
    bn: [
      '৫জি/৬জি ও ওয়াই-ফাই তারহীন যোগাযোগ: দূরবর্তী অঞ্চলে (Fraunhofer zone) অ্যান্টেনা দ্বারা সমরূপ সমতল তরঙ্গ বিকিরণ করে গিগাবিট গতির ডেটা আদান-প্রদান।',
      'স্যাটেলাইট ও গভীর মহাকাশ গবেষণা: মহাকাশযানসমূহ (যেমন ভয়েজার) মহাশূন্যের মধ্য দিয়ে কোটি কোটি কিলোমিটার দূর থেকে সংকেত পাঠায় যেখানে কোনো তরঙ্গ ক্ষয় হয় না (α = ০)।',
      'রাডার ও স্টিলথ যুদ্ধবিমান: স্টিলথ বিমানে সমতল তরঙ্গের প্রতিফলন এড়াতে বিশেষ জ্যামিতিক নকশা এবং শূন্য মাধ্যমের প্রতিবন্ধকতা η0 এর সাথে সমন্বিত তরঙ্গ শোষণকারী উপাদান ব্যবহার করা হয়।',
      'মাইক্রোওয়েভ ওভেন ও খাদ্য প্রক্রিয়াকরণ: ২.৪৫ GHz মাইক্রোওয়েভ খাদ্যবস্তুর ভেতরে নির্দিষ্ট স্কিন গভীরতা পর্যন্ত প্রবেশ করে পানির অণুগুলিকে উত্তপ্ত করে।',
      'আরএফ ওয়েভগাইড ও শিল্ডিং: গিগাহার্টজ ফ্রিকোয়েন্সিতে অতি ক্ষুদ্র স্কিন গভীরতার (δ < ৩ μm) সুযোগ নিয়ে পাতলা ধাতব ফয়েল দিয়ে সম্পূর্ণ ইএমআই শিল্ডিং নিশ্চিতকরণ।'
    ]
  },
  importantPoints: {
    en: [
      'In source-free lossless media (ρ = 0, J = 0), Maxwell’s equations combine into the vector Helmholtz wave equation: ∇²E - με ∂²E/∂t² = 0.',
      'Uniform plane waves are strictly Transverse Electromagnetic (TEM): the electric field, magnetic field, and propagation vector are mutually perpendicular (E ⟂ H ⟂ k).',
      'The intrinsic wave impedance of free space is η0 = √(μ0 / ε0) ≈ 376.73 Ω ≈ 120π Ω ≈ 377 Ω.',
      'In lossless dielectrics, the electric field E and magnetic field H oscillate strictly in phase, with peak amplitude ratio E0 / H0 = η.',
      'The Poynting vector S = E × H quantifies directional electromagnetic power flow density in Watts per square meter (W/m²).',
      'In good conductors, skin depth collapses rapidly as frequency increases: δ = 1 / √(π f μ σ), confining high-frequency currents to an ultra-thin surface layer.'
    ],
    hi: [
      'स्रोत-मुक्त हानिरहित माध्यम में मैक्सवेल समीकरण सदिश तरंग समीकरण ∇²E - με ∂²E/∂t² = 0 बनाते हैं।',
      'एकसमान समतल तरंगें विशुद्ध रूप से अनुप्रस्थ (TEM) होती हैं: E, H और संचरण दिशा परस्पर लंबवत होते हैं।',
      'मुक्त अंतरिक्ष की आंतरिक तरंग प्रतिबाधा η0 = √(μ0 / ε0) ≈ 377 Ω (120π Ω) होती है।',
      'हानिरहित माध्यम में E और H समान कला में दोलन करते हैं और उनका अनुपात E0 / H0 = η होता है।',
      'पॉइंटिंग सदिश S = E × H विद्युत चुंबकीय शक्ति प्रवाह घनत्व (W/m²) को दर्शाता है।',
      'अच्छे चालकों में उच्च आवृत्ति पर स्किन गहराई अत्यधिक घट जाती है: δ = 1 / √(π f μ σ), जिससे धारा केवल बाहरी सतह पर सीमित रहती है।'
    ],
    bn: [
      'উৎসবিহীন মাধ্যমে ম্যাক্সওয়েলের সমীকরণ থেকে হেলমহোল্টজ তরঙ্গ সমীকরণ ∇²E - με ∂²E/∂t² = ০ পাওয়া যায়।',
      'সমরূপ সমতল তরঙ্গ বিশুদ্ধ অনুপ্রস্থ (TEM) প্রকৃতির: তড়িৎ ক্ষেত্র, চৌম্বক ক্ষেত্র এবং তরঙ্গের দিক পরস্পর লম্ব (E ⟂ H ⟂ k)।',
      'শূন্য মাধ্যমের সহজাত তরঙ্গ প্রতিবন্ধকতা η0 = √(μ0 / ε0) ≈ ৩৭৭ Ω (১২০π Ω)।',
      'অপচয়হীন ডাইইলেক্ট্রিকে E এবং H ক্ষেত্র একই দশায় স্পন্দিত হয় এবং তাদের বিস্তারের অনুপাত E0 / H0 = η।',
      'পয়েন্টিং ভেক্টর S = E × H প্রতি বর্গমিটারে প্রবাহিত তড়িৎচৌম্বক শক্তি ঘনত্ব (W/m²) নির্দেশ করে।',
      'উচ্চ কম্পাঙ্কে উত্তম পরিবাহীর স্কিন গভীরতা দ্রুত হ্রাস পায়: δ = ১ / √(π f μ σ), ফলে কারেন্ট কেবল পৃষ্ঠের সূক্ষ্ম স্তরে প্রবাহিত হয়।'
    ]
  },
  commonMistakes: {
    en: [
      'Assuming that electromagnetic waves require a physical material medium (like sound waves in air); Maxwell proved that EM waves propagate autonomously through pure vacuum.',
      'Believing that E and H are out of phase in a lossless dielectric; in lossless media, E and H are strictly in phase (phase difference is 0°). They are only out of phase (by 45°) in good conductors.',
      'Confusing phase velocity v_p with the speed of light c; v_p = c / √(εr μr), so wave speed is always lower than c inside any dielectric material (n > 1).',
      'Forgetting the factor of ½ when calculating the time-averaged Poynting vector for sinusoidal field amplitudes: S_avg = ½ Re(E × H*), not E0 × H0.',
      'Thinking that skin depth increases with frequency; skin depth δ is inversely proportional to the square root of frequency (δ ∝ 1/√f), so it decreases dramatically as frequency rises.'
    ],
    hi: [
      'यह मान लेना कि विद्युत चुंबकीय तरंगों को चलने के लिए ध्वनि की तरह किसी माध्यम की आवश्यकता होती है; वे निर्वात में स्वतंत्र रूप से चलती हैं।',
      'हानिरहित परावैद्युत में E और H को कला से बाहर (out of phase) मानना; हानिरहित माध्यम में वे बिल्कुल समान कला (0°) में होते हैं।',
      'कला वेग v_p को निर्वात में प्रकाश की चाल c के समान मान लेना; किसी भी माध्यम में v_p = c / √εr प्रकाश की चाल से कम होता है।',
      'समय-औसत पॉइंटिंग सदिश की गणना करते समय 1/2 का गुणक भूल जाना: S_avg = ½ (E0²/η), न कि E0²/η।',
      'यह सोचना कि आवृत्ति बढ़ने पर स्किन गहराई बढ़ती है; वास्तव में δ आवृत्ति के वर्गमूल के व्युत्क्रमानुपाती (1/√f) होती है, अतः आवृत्ति बढ़ने पर घटती है।'
    ],
    bn: [
      'মনে করা যে শব্দের মতো তড়িৎচৌম্বক তরঙ্গের বিস্তারের জন্যও কোনো জড় মাধ্যমের প্রয়োজন হয়; প্রকৃতপক্ষে এরা শূন্য মাধ্যমে বাধাহীনভাবে চলে।',
      'অপচয়হীন মাধ্যমে E এবং H এর মধ্যে দশা পার্থক্য আছে বলে মনে করা; অপচয়হীন ডাইইলেক্ট্রিকে E ও H এর দশা পার্থক্য শূন্য (০°)।',
      'মাধ্যমের দশা বেগ v_p এবং শূন্যে আলোর বেগ c কে একই মনে করা; ডাইইলেক্ট্রিকে তরঙ্গের দ্রুতি সর্বদা হ্রাস পায় (v_p = c / √εr)।',
      'সময়-গড় পয়েন্টিং ভেক্টর নির্ণয়ের সময় ১/২ গুণকটি বাদ দেওয়া; সাইনুসয়েডাল তরঙ্গে S_avg = ½ (E0²/η)।',
      'ধারণা করা যে কম্পাঙ্ক বাড়লে স্কিন গভীরতা বাড়ে; প্রকৃতপক্ষে স্কিন গভীরতা কম্পাঙ্কের বর্গমূলের ব্যস্তানুপাতিক (δ ∝ ১/√f), তাই কম্পাঙ্ক বাড়লে গভীরতা দ্রুত হ্রাস পায়।'
    ]
  },
  keyTakeaways: {
    en: [
      'Maxwell’s equations predict that coupled electric and magnetic disturbances propagate autonomously through space as electromagnetic waves.',
      'In vacuum, the propagation speed v_p = 1 / √(μ0 ε0) precisely matches the speed of light c ≈ 3.0 × 10⁸ m/s.',
      'Uniform plane waves exhibit a transverse electromagnetic (TEM) structure where E, H, and the propagation vector k form an orthogonal right-handed triad.',
      'The intrinsic impedance of free space η0 ≈ 377 Ω sets the universal amplitude ratio between electric and magnetic fields in vacuum.',
      'The Poynting vector S = E × H quantifies directional electromagnetic energy transport.',
      'In conducting media, waves attenuate exponentially within the skin depth δ = 1 / √(π f μ σ), restricting high-frequency currents to conductor surfaces.'
    ],
    hi: [
      'मैक्सवेल समीकरण भविष्यवाणी करते हैं कि युग्मित विद्युत और चुंबकीय क्षेत्र तरंगों के रूप में अंतरिक्ष में संचरित होते हैं।',
      'निर्वात में तरंग की चाल v_p = 1 / √(μ0 ε0) ठीक प्रकाश की चाल c ≈ 3.0 × 10⁸ m/s के बराबर होती है।',
      'एकसमान समतल तरंगें TEM संरचना प्रदर्शित करती हैं जहाँ E, H और संचरण दिशा परस्पर 90° पर होते हैं।',
      'मुक्त अंतरिक्ष की आंतरिक प्रतिबाधा η0 ≈ 377 Ω निर्वात में E और H के बीच सार्वभौमिक अनुपात तय करती है।',
      'पॉइंटिंग सदिश S = E × H दिशात्मक विद्युत चुंबकीय ऊर्जा प्रवाह को मापता है।',
      'चालक माध्यम में तरंगें स्किन गहराई δ = 1 / √(π f μ σ) के भीतर समाप्त हो जाती हैं, जिससे उच्च आवृत्ति धाराएं केवल सतह पर बहती हैं।'
    ],
    bn: [
      'ম্যাক্সওয়েলের সমীকরণসমূহ নির্দেশ করে যে যুগলবদ্ধ তড়িৎ ও চৌম্বক ক্ষেত্র মহাশূন্যে তড়িৎচৌম্বকীয় তরঙ্গ হিসেবে স্বতঃস্ফূর্তভাবে অগ্রসর হয়।',
      'শূন্য মাধ্যমে তরঙ্গের বেগ v_p = ১ / √(μ0 ε0) আলোর প্রকৃত দ্রুতি c ≈ ৩.০ × ১০⁸ m/s এর নিখুঁত সমতুল্য।',
      'সমরূপ সমতল তরঙ্গ একটি বিশুদ্ধ TEM গঠন মেনে চলে যেখানে E, H এবং সঞ্চালন অভিমুখ k একটি লম্ব ত্রিমাত্রিক সেট গঠন করে।',
      'শূন্য মাধ্যমের তরঙ্গ প্রতিবন্ধকতা η0 ≈ ৩৭৭ Ω শূন্যে তড়িৎ ও চৌম্বক ক্ষেত্রের মৌলিক বিস্তারের অনুপাত নির্ধারণ করে।',
      'পয়েন্টিং ভেক্টর S = E × H তড়িৎচৌম্বকীয় শক্তির দিকনির্দেশক পরিবহন পরিমাপ করে।',
      'পরিবাহী মাধ্যমে তরঙ্গ অতি দ্রুত ক্ষয়প্রাপ্ত হয় এবং স্কিন গভীরতা δ = ১ / √(π f μ σ) এর মধ্যে সীমাবদ্ধ থাকে।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch11-l07-01',
      question: {
        en: 'What is the phase velocity of an electromagnetic wave in a non-magnetic lossless medium with relative permittivity εr = 4.0?',
        hi: 'सापेक्ष परावैद्युतांक εr = 4.0 वाले एक अचुंबकीय हानिरहित माध्यम में विद्युत चुंबकीय तरंग का कला वेग क्या होगा?',
        bn: 'আপেক্ষিক ভেদ্যতা εr = ৪.০ বিশিষ্ট একটি অচৌম্বক অপচয়হীন মাধ্যমে তড়িৎচৌম্বক তরঙ্গের দশা বেগ কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '3.0 × 10⁸ m/s', hi: '3.0 × 10⁸ m/s', bn: '৩.০ × ১০⁸ m/s' } },
        { id: 'opt-2', text: { en: '1.5 × 10⁸ m/s', hi: '1.5 × 10⁸ m/s', bn: '১.৫ × ১০⁸ m/s' } },
        { id: 'opt-3', text: { en: '0.75 × 10⁸ m/s', hi: '0.75 × 10⁸ m/s', bn: '০.৭৫ × ১০⁸ m/s' } },
        { id: 'opt-4', text: { en: '6.0 × 10⁸ m/s', hi: '6.0 × 10⁸ m/s', bn: '৬.০ × ১০⁸ m/s' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'Phase velocity v_p = c / √(μr εr) = (3.0 × 10⁸) / √(1.0 × 4.0) = (3.0 × 10⁸) / 2 = 1.5 × 10⁸ m/s.',
        hi: 'कला वेग v_p = c / √εr = (3 × 10⁸) / √4 = 1.5 × 10⁸ m/s।',
        bn: 'দশা বেগ v_p = c / √εr = (৩ × ১০⁸) / √৪ = ১.৫ × ১০⁸ m/s।'
      }
    },
    {
      id: 'mcq-ch11-l07-02',
      question: {
        en: 'What is the intrinsic wave impedance of free space (vacuum)?',
        hi: 'मुक्त अंतरिक्ष (निर्वात) की आंतरिक तरंग प्रतिबाधा कितनी होती है?',
        bn: 'শূন্য মাধ্যমের সহজাত তরঙ্গ প্রতিবন্ধকতা কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '50 Ω', hi: '50 Ω', bn: '৫০ Ω' } },
        { id: 'opt-2', text: { en: '75 Ω', hi: '75 Ω', bn: '৭৫ Ω' } },
        { id: 'opt-3', text: { en: '120π Ω ≈ 377 Ω', hi: '120π Ω ≈ 377 Ω', bn: '১২০π Ω ≈ ৩৭৭ Ω' } },
        { id: 'opt-4', text: { en: '3.0 × 10⁸ Ω', hi: '3.0 × 10⁸ Ω', bn: '৩.০ × ১০⁸ Ω' } }
      ],
      correctOptionId: 'opt-3',
      explanation: {
        en: 'The intrinsic impedance of free space is η0 = √(μ0 / ε0) ≈ 120π Ω ≈ 376.73 Ω ≈ 377 Ω.',
        hi: 'निर्वात की आंतरिक प्रतिबाधा η0 = √(μ0 / ε0) ≈ 120π Ω ≈ 377 Ω होती है।',
        bn: 'শূন্য মাধ্যমের প্রতিবন্ধকতা η0 = √(μ0 / ε0) ≈ ১২০π Ω ≈ ৩৭৭ Ω।'
      }
    },
    {
      id: 'mcq-ch11-l07-03',
      question: {
        en: 'In a uniform plane wave traveling in the +z direction, if E is polarized along the x-axis, along which direction does H oscillate?',
        hi: '+z दिशा में गतिमान एकसमान समतल तरंग में, यदि E x-अक्ष पर ध्रुवित है, तो H किस दिशा में दोलन करेगा?',
        bn: '+z অক্ষ বরাবর চলমান একটি সমরূপ সমতল তরঙ্গে তড়িৎ ক্ষেত্র E যদি x-অক্ষে সমবর্তিত হয়, তবে H কোন দিকে স্পন্দিত হবে?'
      },
      options: [
        { id: 'opt-1', text: { en: '+x direction', hi: '+x दिशा', bn: '+x দিক' } },
        { id: 'opt-2', text: { en: '+y direction', hi: '+y दिशा', bn: '+y দিক' } },
        { id: 'opt-3', text: { en: '+z direction', hi: '+z दिशा', bn: '+z দিক' } },
        { id: 'opt-4', text: { en: '-x direction', hi: '-x दिशा', bn: '-x দিক' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'Poynting vector direction az = a_E × a_H. Since ax × ay = az, H must oscillate along the +y direction.',
        hi: 'az = ax × ay के अनुसार H को +y दिशा में होना चाहिए।',
        bn: 'az = ax × ay সমীকরণ অনুযায়ী H অবশ্যই +y অক্ষে স্পন্দিত হবে।'
      }
    },
    {
      id: 'mcq-ch11-l07-04',
      question: {
        en: 'What is the phase difference between electric field E and magnetic field H in a lossless dielectric medium?',
        hi: 'एक हानिरहित परावैद्युत माध्यम में विद्युत क्षेत्र E और चुंबकीय क्षेत्र H के बीच कलांतर कितना होता है?',
        bn: 'একটি অপচয়হীন ডাইইলেক্ট্রিক মাধ্যমে তড়িৎ ক্ষেত্র E এবং চৌম্বক ক্ষেত্র H এর মধ্যবর্তী দশা পার্থক্য কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '0° (strictly in phase)', hi: '0° (समान कला में)', bn: '০° (সম্পূর্ণ সমদশা)' } },
        { id: 'opt-2', text: { en: '45°', hi: '45°', bn: '৪৫°' } },
        { id: 'opt-3', text: { en: '90° (in quadrature)', hi: '90° (चतुर्थांश कला में)', bn: '৯০° (সমকোণে)' } },
        { id: 'opt-4', text: { en: '180°', hi: '180°', bn: '১৮০°' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'In lossless dielectrics, intrinsic impedance η is purely real, so E and H oscillate strictly in phase (phase difference is 0°).',
        hi: 'हानिरहित माध्यम में आंतरिक प्रतिबाधा पूर्णतः वास्तविक होती है, अतः E और H पूर्णतः समान कला (0°) में होते हैं।',
        bn: 'অপচয়হীন মাধ্যমে তরঙ্গ প্রতিবন্ধকতা সম্পূর্ণ বাস্তব সংখ্যা হওয়ায় E এবং H এর দশা পার্থক্য ০° (সমদশা)।'
      }
    },
    {
      id: 'mcq-ch11-l07-05',
      question: {
        en: 'How does skin depth δ depend on the wave frequency f in a good conductor?',
        hi: 'एक अच्छे चालक में स्किन गहराई δ तरंग आवृत्ति f पर किस प्रकार निर्भर करती है?',
        bn: 'একটি উত্তম পরিবাহীতে স্কিন গভীরতা δ তরঙ্গের কম্পাঙ্ক f এর উপর কীভাবে নির্ভর করে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Directly proportional to f (δ ∝ f)', hi: 'f के समानुपाती', bn: 'f এর সমানুপাতিক' } },
        { id: 'opt-2', text: { en: 'Inversely proportional to f (δ ∝ 1/f)', hi: 'f के व्युत्क्रमानुपाती', bn: 'f এর ব্যস্তানুপাতিক' } },
        { id: 'opt-3', text: { en: 'Inversely proportional to the square root of f (δ ∝ 1/√f)', hi: 'f के वर्गमूल के व्युत्क्रमानुपाती (δ ∝ 1/√f)', bn: 'f এর বর্গমূলের ব্যস্তানুপাতিক (δ ∝ ১/√f)' } },
        { id: 'opt-4', text: { en: 'Independent of frequency f', hi: 'आवृत्ति से स्वतंत्र', bn: 'কম্পাঙ্কের উপর নির্ভরশীল নয়' } }
      ],
      correctOptionId: 'opt-3',
      explanation: {
        en: 'Skin depth in a good conductor is δ = 1 / √(π f μ σ), which is inversely proportional to the square root of frequency (δ ∝ 1/√f).',
        hi: 'स्किन गहराई δ = 1 / √(π f μ σ) होती है, जो आवृत्ति के वर्गमूल के व्युत्क्रमानुपाती (1/√f) है।',
        bn: 'স্কিন গভীরতা δ = ১ / √(π f μ σ), যা কম্পাঙ্কের বর্গমূলের ব্যস্তানুপাতিক (δ ∝ ১/√f)।'
      }
    },
    {
      id: 'mcq-ch11-l07-06',
      question: {
        en: 'The Poynting vector S represents which physical quantity?',
        hi: 'पॉइंटिंग सदिश S किस भौतिक राशि को दर्शाता है?',
        bn: 'পয়েন্টিং ভেক্টর S কোন ভৌত রাশিকে প্রকাশ করে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Electric charge density per unit volume (C/m³)', hi: 'प्रति एकांक आयतन आवेश घनत्व', bn: 'প্রতি একক আয়তনে আধান ঘনত্ব' } },
        { id: 'opt-2', text: { en: 'Power flow density vector (W/m²)', hi: 'शक्ति प्रवाह घनत्व सदिश (W/m²)', bn: 'শক্তি প্রবাহ ঘনত্ব ভেক্টর (W/m²)' } },
        { id: 'opt-3', text: { en: 'Magnetic force per unit length (N/m)', hi: 'प्रति एकांक लंबाई चुंबकीय बल', bn: 'প্রতি একক দৈর্ঘ্যে চৌম্বক বল' } },
        { id: 'opt-4', text: { en: 'Stored electrostatic energy (Joules)', hi: 'संचित स्थिरवैद्युत ऊर्जा (J)', bn: 'সঞ্চিত স্থিরবৈদ্যুতিক শক্তি (J)' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'The Poynting vector S = E × H has units of (V/m) × (A/m) = W/m², representing directional electromagnetic power flux density.',
        hi: 'पॉइंटिंग सदिश S = E × H शक्ति प्रवाह घनत्व (W/m²) को दर्शाता है।',
        bn: 'পয়েন্টিং ভেক্টর S = E × H এর একক W/m², যা দিকনির্দেশক শক্তি প্রবাহ ঘনত্ব নির্দেশ করে।'
      }
    },
    {
      id: 'mcq-ch11-l07-07',
      question: {
        en: 'If a plane wave has peak electric field amplitude E0 = 100 V/m in free space, what is the peak magnetic field intensity H0?',
        hi: 'यदि निर्वात में समतल तरंग का शिखर विद्युत क्षेत्र E0 = 100 V/m है, तो शिखर चुंबकीय क्षेत्र तीव्रता H0 क्या होगी?',
        bn: 'শূন্য মাধ্যমে একটি সমতল তরঙ্গের শীর্ষ তড়িৎ ক্ষেত্র বিস্তার E0 = ১০০ V/m হলে, শীর্ষ চৌম্বক তীব্রতা H0 কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '37,700 A/m', hi: '37,700 A/m', bn: '৩৭,৭০০ A/m' } },
        { id: 'opt-2', text: { en: '0.265 A/m', hi: '0.265 A/m', bn: '০.২৬৫ A/m' } },
        { id: 'opt-3', text: { en: '100 A/m', hi: '100 A/m', bn: '১০০ A/m' } },
        { id: 'opt-4', text: { en: '3.77 A/m', hi: '3.77 A/m', bn: '৩.৭৭ A/m' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'H0 = E0 / η0 = (100 V/m) / (376.73 Ω) ≈ 0.265 A/m.',
        hi: 'H0 = E0 / η0 = 100 / 377 ≈ 0.265 A/m।',
        bn: 'H0 = E0 / η0 = ১০০ / ৩৭৭ ≈ ০.২৬৫ A/m।'
      }
    },
    {
      id: 'mcq-ch11-l07-08',
      question: {
        en: 'Which spectral band of electromagnetic radiation has wavelengths between 400 nm and 700 nm?',
        hi: 'विद्युत चुंबकीय विकिरण का कौन सा स्पेक्ट्रल बैंड 400 nm से 700 nm के बीच की तरंगदैर्ध्य रखता है?',
        bn: 'তড়িৎচৌম্বক বর্ণালীর কোন অংশের তরঙ্গদৈর্ঘ্য ৪০০ nm থেকে ৭০০ nm এর মধ্যে থাকে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Microwaves', hi: 'माइक्रोवेव', bn: 'মাইক্রোওয়েভ' } },
        { id: 'opt-2', text: { en: 'X-Rays', hi: 'एक्स-रे', bn: 'এক্স-রে' } },
        { id: 'opt-3', text: { en: 'Visible Light', hi: 'दृश्य प्रकाश', bn: 'দৃশ্যমান আলো' } },
        { id: 'opt-4', text: { en: 'Infrared', hi: 'अवरक्त', bn: 'অবলোহিত' } }
      ],
      correctOptionId: 'opt-3',
      explanation: {
        en: 'Visible light encompasses the human retinal detection spectrum spanning wavelengths from violet (~400 nm) to red (~700 nm).',
        hi: 'दृश्य प्रकाश 400 nm (बैंगनी) से 700 nm (लाल) तक फैला होता है जिसे मानव आंखें देख सकती हैं।',
        bn: 'দৃশ্যমান আলোর তরঙ্গদৈর্ঘ্য ৪০০ nm (বেগুনী) থেকে ৭০০ nm (লাল) পর্যন্ত বিস্তৃত।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch11-l07-01',
      question: {
        en: 'A uniform plane wave in free space has electric field E(z, t) = 200 cos(6π × 10⁸ t - βz) ax V/m. Calculate: (a) the frequency f, (b) the wavelength λ, (c) the phase constant β, and (d) the time-average power carried per square meter across a 5 m² plane aperture orthogonal to the z-axis.',
        hi: 'निर्वात में एकसमान समतल तरंग का विद्युत क्षेत्र E(z, t) = 200 cos(6π × 10⁸ t - βz) ax V/m है। ज्ञात कीजिए: (a) आवृत्ति f, (b) तरंगदैर्ध्य λ, (c) कला नियतांक β, तथा (d) z-अक्ष के लंबवत 5 m² क्षेत्रफल से गुजरने वाली कुल समय-औसत शक्ति।',
        bn: 'শূন্য মাধ্যমে একটি সমরূপ সমতল তরঙ্গের তড়িৎ ক্ষেত্র E(z, t) = ২০০ cos(৬π × ১০⁸ t - βz) ax V/m। নির্ণয় করুন: (a) কম্পাঙ্ক f, (b) তরঙ্গদৈর্ঘ্য λ, (c) দশা ধ্রুবক β, এবং (d) z-অক্ষের সাথে লম্ব ৫ m² ক্ষেত্রফলের মধ্য দিয়ে প্রবাহিত মোট সময়-গড় ক্ষমতা।'
      },
      hint: {
        en: 'ω = 6π × 10⁸ rad/s. f = ω / 2π. λ = c / f. S_avg = ½ |E0|² / η0. Total power P = S_avg × Area.',
        hi: 'f = ω / 2π = 300 MHz। λ = c / f। S_avg = ½ E0²/377। कुल शक्ति = S_avg × 5।',
        bn: 'f = ω / ২π = ৩০০ MHz। λ = c / f। S_avg = ½ E0²/৩৭৭। মোট ক্ষমতা = S_avg × ৫।'
      },
      answerKey: {
        en: '(a) f = ω / 2π = (6π × 10⁸) / (2π) = 300 MHz = 3.0 × 10⁸ Hz. (b) λ = c / f = (3.0 × 10⁸) / (3.0 × 10⁸) = 1.0 meter. (c) β = 2π / λ = 2π rad/m ≈ 6.283 rad/m. (d) S_avg = ½ (E0² / η0) = ½ (200² / 376.73) = 40,000 / 753.46 = 53.09 W/m². Total power P = S_avg × Area = 53.09 W/m² × 5 m² = 265.45 Watts.',
        hi: 'f = 300 MHz;  λ = 1.0 m;  β = 6.283 rad/m;  कुल शक्ति P = 265.45 W।',
        bn: 'f = ৩০০ MHz;  λ = ১.০ m;  β = ৬.২৮৩ rad/m;  মোট ক্ষমতা P = ২৬৫.৪৫ ওয়াট।'
      }
    },
    {
      id: 'pq-ch11-l07-02',
      question: {
        en: 'Explain why microwave ovens operate at 2.45 GHz rather than at a much higher frequency (such as 100 GHz) or a much lower frequency (such as 10 kHz), relating your answer to penetration depth and skin depth in food.',
        hi: 'समझाइए कि माइक्रोवेव ओवन बहुत उच्च आवृत्ति (100 GHz) या बहुत कम आवृत्ति (10 kHz) के बजाय 2.45 GHz पर क्यों काम करते हैं, भोजन में भेदन गहराई के संदर्भ में उत्तर दीजिए।',
        bn: 'খাবারের অভ্যন্তরে অনুপ্রবেশ গভীরতা ও স্কিন গভীরতার আলোকে ব্যাখ্যা করুন কেন মাইক্রোওয়েভ ওভেন অতি উচ্চ কম্পাঙ্ক (১০০ GHz) বা অতি নিম্ন কম্পাঙ্কের (১০ kHz) পরিবর্তে ২.৪৫ GHz-এ পরিচালিত হয়।'
      },
      hint: {
        en: 'At 100 GHz, skin depth is fractions of a millimeter (only the surface burns). At 10 kHz, penetration depth is meters (waves pass right through without being absorbed). 2.45 GHz matches a few centimeters of penetration.',
        hi: '100 GHz पर केवल बाहरी सतह जल जाएगी। 10 kHz पर तरंग बिना अवशोषित हुए पार निकल जाएगी। 2.45 GHz पर गहराई 2-4 सेमी होती है जो एक समान पकाने के लिए आदर्श है।',
        bn: '১০০ GHz-এ কেবল উপরিভাগ পুড়ে যাবে। ১০ kHz-এ তরঙ্গ কোনো শোষণ ছাড়াই বেরিয়ে যাবে। ২.৪৫ GHz-এ অনুপ্রবেশ গভীরতা ২-৪ সেমি যা নিখুঁতভাবে রান্নার উপযোগী।'
      },
      answerKey: {
        en: 'In food with high moisture, penetration depth is determined by dielectric loss tangent and attenuation constant α. At 100 GHz, attenuation is so severe that the penetration depth is less than 1 mm; only the outermost microscopic skin of the food would absorb heat, leaving the interior raw and cold. Conversely, at 10 kHz, the attenuation is negligible, meaning microwave radiation passes almost completely through food without heating it. At 2.45 GHz, the penetration depth in water and typical foods is approximately 2 to 4 centimeters. This allows electromagnetic waves to penetrate deeply enough into the bulk interior of chicken, potatoes, and liquids to produce rapid, volumetric heating without scorching the exterior.',
        hi: '2.45 GHz पर भोजन में भेदन गहराई 2 से 4 सेमी होती है, जिससे भोजन अंदर तक समान रूप से पकता है। 100 GHz पर गहराई केवल 1 मिमी से कम होती है (सतह जल जाएगी और अंदर कच्चा रहेगा)। 10 kHz पर विकिरण अवशोषित ही नहीं होगा। अतः 2.45 GHz आदर्श संतुलन प्रदान करता है।',
        bn: '২.৪৫ GHz কম্পাঙ্কে খাদ্যে তরঙ্গের অনুপ্রবেশ গভীরতা প্রায় ২ থেকে ৪ সেন্টিমিটার। ফলে মাইক্রোওয়েভ খাদ্যের ভেতরের গভীরে প্রবেশ করে সুষমভাবে তাপ উৎপন্ন করতে পারে। ১০০ GHz-এ গভীরতা ১ মিলিমিটারেরও কম হওয়ায় শুধু ওপরের ত্বক পুড়ে যাবে আর ভেতর কাঁচা থাকবে। আবার ১০ kHz-এ কোনো তাপই উৎপন্ন হবে না।'
      }
    },
    {
      id: 'pq-ch11-l07-03',
      question: {
        en: 'Sea water has conductivity σ = 4.0 S/m and relative permittivity εr = 81 at a submarine communication frequency of f = 20 kHz (VLF band). (a) Is sea water a good conductor or a good dielectric at this frequency? (b) Calculate the skin depth δ. (c) If a submarine antenna requires a signal amplitude of at least 1% of the surface value, what is the maximum depth to which it can submerge?',
        hi: 'समुद्री जल की चालकता σ = 4.0 S/m तथा εr = 81 है (f = 20 kHz पर)। (a) क्या यह अच्छा चालक है या अच्छा परावैद्युत? (b) स्किन गहराई δ ज्ञात कीजिए। (c) यदि पनडुब्बी को सतह के मान का 1% सिग्नल चाहिए, तो वह अधिकतम कितनी गहराई तक जा सकती है?',
        bn: 'সাবমেরিন যোগাযোগের কম্পাঙ্ক f = ২০ kHz-এ সমুদ্রের জলের পরিবাহিতা σ = ৪.০ S/m এবং আপেক্ষিক ভেদ্যতা εr = ৮১। (a) এটি কি উত্তম পরিবাহী নাকি উত্তম ডাইইলেক্ট্রিক? (b) স্কিন গভীরতা δ হিসাব করুন। (c) সাবমেরিনে সিগন্যালের মান পৃষ্ঠের মানের ন্যূনতম ১% প্রয়োজন হলে এটি সর্বোচ্চ কত গভীরে নামতে পারবে?'
      },
      hint: {
        en: 'Check loss tangent σ / (ω ε). If >> 1, it is a good conductor. δ = 1 / √(π f μ0 σ). Signal amplitude decay: e^(-z/δ) = 0.01 ⟹ z = δ ln(100) ≈ 4.6 δ.',
        hi: 'loss tangent σ/(ωε) = 4 / (2π × 20000 × 81 × 8.854×10⁻¹²) = 44,400 >> 1 (उत्तम चालक)। z = 4.605 δ।',
        bn: 'লস ট্যানজেন্ট σ/(ωε) >> ১ হওয়ায় এটি উত্তম পরিবাহী। δ = ১ / √(π f μ0 σ)। z = ৪.৬০৫ δ।'
      },
      answerKey: {
        en: '(a) Loss tangent: tan θ = σ / (ω ε0 εr) = 4.0 / [2π × (20 × 10³) × (8.854 × 10⁻¹²) × 81] = 4.0 / (9.02 × 10⁻⁵) = 44,345 >> 1. Since tan θ >> 1, seawater is an excellent conductor at 20 kHz.\n(b) Skin depth: δ = 1 / √(π f μ0 σ) = 1 / √[π × (20 × 10³) × (4π × 10⁻⁷) × 4.0] = 1 / √0.3158 = 1 / 0.562 = 1.779 meters.\n(c) Maximum depth for 1% signal: E(z) / E0 = e^(-z/δ) = 0.01 ⟹ -z/δ = ln(0.01) = -4.605 ⟹ z = 4.605 × δ = 4.605 × 1.779 m = 8.19 meters. (This explains why submarines must trail antenna buoys near the surface for VLF radio reception!).',
        hi: '(a) tan θ = 44,345 >> 1 (अत्यंत अच्छा चालक)। (b) स्किन गहराई δ = 1.78 मीटर। (c) अधिकतम गहराई z = 4.605 × 1.78 = 8.19 मीटर।',
        bn: '(a) লস ট্যানজেন্ট ৪৪,৩৪৫ >> ১ (অত্যন্ত ভালো পরিবাহী)। (b) স্কিন গভীরতা δ = ১.৭৮ মিটার। (c) সর্বোচ্চ গভীরতা z = ৪.৬০৫ × ১.৭৮ = ৮.১৯ মিটার।'
      }
    },
    {
      id: 'pq-ch11-l07-04',
      question: {
        en: 'A solar radiation flux of S_avg = 1360 W/m² (the solar constant) reaches the top of Earth’s atmosphere as an electromagnetic wave. Assuming it is modeled as an equivalent uniform plane wave in free space: (a) calculate the peak electric field amplitude E0, and (b) calculate the peak magnetic field intensity amplitude H0.',
        hi: 'पृथ्वी के वायुमंडल के शीर्ष पर सूर्य से S_avg = 1360 W/m² का सौर स्थिरांक विद्युत चुंबकीय तरंग के रूप में पहुँचता है। इसे निर्वात में एकसमान समतल तरंग मानते हुए: (a) शिखर विद्युत क्षेत्र E0, तथा (b) शिखर चुंबकीय क्षेत्र H0 ज्ञात कीजिए।',
        bn: 'পৃথিবীর বায়ুমণ্ডলের উপরিভাগে সৌর বিকিরণ ফ্লাক্স S_avg = ১৩৬০ W/m² (সৌর ধ্রুবক) এসে পৌঁছায়। একে শূন্য মাধ্যমে সমরূপ সমতল তরঙ্গ ধরে: (a) সর্বোচ্চ তড়িৎ ক্ষেত্র E0, এবং (b) সর্বোচ্চ চৌম্বক প্রাবল্য H0 নির্ণয় করুন।'
      },
      hint: {
        en: 'S_avg = ½ E0² / η0. E0 = √(2 η0 S_avg). H0 = E0 / η0.',
        hi: 'E0 = √(2 × 377 × 1360)। H0 = E0 / 377।',
        bn: 'E0 = √(২ × ৩৭৭ × ১৩৬০)। H0 = E0 / ৩৭৭।'
      },
      answerKey: {
        en: '(a) S_avg = ½ (|E0|² / η0) ⟹ |E0|² = 2 η0 S_avg = 2 × 376.73 Ω × 1360 W/m² = 1,024,705.6 (V/m)² ⟹ E0 = √1,024,705.6 = 1012.28 V/m ≈ 1012 V/m.\n(b) H0 = E0 / η0 = (1012.28 V/m) / (376.73 Ω) = 2.687 A/m ≈ 2.69 A/m. Corresponding magnetic flux density B0 = μ0 H0 = (4π × 10⁻⁷) × 2.687 = 3.376 μT.',
        hi: 'E0 = 1012 V/m;  H0 = 2.69 A/m;  B0 = 3.38 μT।',
        bn: 'E0 = ১০১২ V/m;  H0 = ২.৬৯ A/m;  B0 = ৩.৩৮ μT।'
      }
    },
    {
      id: 'pq-ch11-l07-05',
      question: {
        en: 'Explain why cellular phone signals (e.g., 900 MHz or 1800 MHz) are able to penetrate concrete building walls, while visible light (f ≈ 5 × 10¹⁴ Hz) is completely blocked, even though both are electromagnetic waves.',
        hi: 'समझाइए कि मोबाइल फोन सिग्नल (900 MHz या 1800 MHz) कंक्रीट की दीवारों के आर-पार निकल जाते हैं, जबकि दृश्य प्रकाश (5 × 10¹⁴ Hz) पूरी तरह रुक जाता है, भले ही दोनों विद्युत चुंबकीय तरंगें हैं।',
        bn: 'ব্যাখ্যা করুন কেন মোবাইল ফোনের সিগন্যাল (৯০০ MHz বা ১৮০০ MHz) কংক্রিটের দেয়াল ভেদ করতে পারে কিন্তু দৃশ্যমান আলো (f ≈ ৫ × ১০¹⁴ Hz) পুরোপুরি বাধাগ্রস্ত হয়, যদিও উভয়ই তড়িৎচৌম্বকীয় তরঙ্গ।'
      },
      hint: {
        en: 'Skin depth and absorption depend on conductivity and atomic/molecular resonances. At RF, concrete conductivity σ is very low and wavelength is 16–33 cm, allowing wave transmission. At optical frequencies, interband absorption and molecular electron transitions cause total opacity.',
        hi: 'कंक्रीट में रेडियो तरंगों के लिए तरंगदैर्ध्य 16-33 सेमी होती है और अवशोषण कम होता है। दृश्य प्रकाश की आवृत्ति पर परमाणुओं में इलेक्ट्रॉनिक संक्रमण के कारण प्रकाश पूर्णतः अवशोषित और प्रकीर्णित हो जाता है।',
        bn: 'রেডিও কম্পাঙ্কে কংক্রিটের শোষণ অত্যন্ত কম এবং তরঙ্গদৈর্ঘ্য ১৬-৩৩ সেমি। দৃশ্যমান আলোর ফ্রিকোয়েন্সিতে পদার্থের ইলেকট্রনীয় অনুরণনের কারণে আলো সম্পূর্ণরূপে শোষিত ও বিক্ষিপ্ত হয়।'
      },
      answerKey: {
        en: 'The interaction of electromagnetic waves with matter depends on the ratio of wavelength to material microstructure and the frequency-dependent complex permittivity. At cellular radio frequencies (900–1800 MHz), the wavelength λ is between 16.7 cm and 33.3 cm—much larger than the grain size of concrete aggregates. Furthermore, dry concrete has low conductivity (σ ≈ 10⁻³ S/m) and low dielectric loss at UHF, resulting in a large skin depth of several meters, which allows RF waves to penetrate typical 20 cm walls with only moderate attenuation (e.g. 10–20 dB). Conversely, visible light has a sub-micron wavelength (~500 nm) that matches electronic transition energy bands in the silicate, calcium, and iron atoms of concrete. Strong interband absorption and multiple Mie scattering by microscopic grains render concrete completely opaque to optical frequencies.',
        hi: 'सेलुलर रेडियो तरंगों की तरंगदैर्ध्य 16 से 33 सेमी होती है और सूखे कंक्रीट में उनकी स्किन गहराई कई मीटर होती है, जिससे वे 20 सेमी की दीवार को आसानी से पार कर लेते हैं। इसके विपरीत दृश्य प्रकाश (500 nm) कंक्रीट के परमाणुओं में इलेक्ट्रॉनिक ऊर्जा स्तरों से टकराकर पूरी तरह अवशोषित और प्रकीर्णित हो जाता है।',
        bn: 'সেলুলার রেডিও তরঙ্গের তরঙ্গদৈর্ঘ্য ১৬ থেকে ৩৩ সেমি এবং কংক্রিটে এর স্কিন গভীরতা কয়েক মিটার, ফলে ২০ সেমি পুরু দেয়াল ভেদ করে সিগন্যাল অতিক্রম করতে পারে। অন্যদিকে দৃশ্যমান আলোর অতি ক্ষুদ্র তরঙ্গদৈর্ঘ্য (৫০০ nm) কংক্রিটের পরমাণুগুলির ইলেকট্রনীয় ব্যান্ডে সরাসরি শোষিত হয় এবং পৃষ্ঠ থেকে বিক্ষিপ্ত হয়ে সম্পূর্ণ অস্বচ্ছতা সৃষ্টি করে।'
      }
    }
  ]
};
