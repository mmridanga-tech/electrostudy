import { Lesson } from '../types';

export const LESSON_SKIN_EFFECT_PROXIMITY_EFFECT: Lesson = {
  id: 'lsn-ch10-skin-effect-proximity-effect',
  topicId: 'ch10-skin-effect-proximity-effect',
  chapterId: 'ch-em-induction',
  order: 13,
  title: {
    en: 'High-Frequency Induction: Skin Effect, Skin Depth (δ) & Proximity Effect',
    hi: 'उच्च-आवृत्ति प्रेरण: स्किन प्रभाव, स्किन डेप्थ (δ) एवं प्रॉक्सिमिटी प्रभाव',
    bn: 'উচ্চ-কম্পাঙ্কের আবেশ: স্কিন ইফেক্ট, স্কিন ডেপথ (δ) ও প্রক্সিমিটি ইফেক্ট'
  },
  description: {
    en: 'Comprehensive physical and mathematical study of self-shielding eddy currents, classical skin depth formula δ = √(ρ/(πfμ)), current crowding, AC-to-DC resistance ratio, Litz wire, and tubular conductors.',
    hi: 'आंतरिक भंवर धाराओं, शास्त्रीय स्किन डेप्थ सूत्र δ = √(ρ/(πfμ)), धारा संकुलन, AC बनाम DC प्रतिरोध अनुपात, लिट्ज़ वायर तथा खोखले नलिकाकार चालकों का गहन अध्ययन।',
    bn: 'অভ্যন্তরীণ এডি প্রবাহ, ক্লাসিক্যাল স্কিন ডেপথ সমীকরণ δ = √(ρ/(πfμ)), বিদ্যুৎ সঞ্চার বিকৃতি, এসি বনাম ডিসি রোধ অনুপাত, লিটজ ওয়্যার ও ফাঁপা পরিবাহীর বিশদ বিশ্লেষণ।'
  },
  estimatedMinutes: 32,
  easyExplanation: {
    en: "When direct current (DC) flows down a copper wire, electrons spread out completely evenly across the entire cross-section. But when alternating current (AC) flows, the changing magnetic field inside the wire induces counter-voltages right in the wire's center! This chokes the center, forcing the alternating current to crowd into a thin outer crust or 'skin' near the surface. At high frequencies, the wire's solid core is essentially dead weight carrying almost zero current, vastly increasing the wire's AC resistance. When neighboring wires run side by side, their magnetic fields warp each other's currents even further—a phenomenon called the proximity effect.",
    hi: 'जब किसी तार में डीसी (DC) धारा बहती है, तो इलेक्ट्रॉन पूरे तार में एक समान रूप से फैलकर बहते हैं। लेकिन जब एसी (AC) धारा बहती है, तो तार के अंदर उत्पन्न होने वाला बदलता चुंबकीय क्षेत्र तार के ठीक केंद्र में विपरीत वोल्टेज बना देता है! इससे तार का केंद्र बंद हो जाता है और सारी धारा तार की बाहरी सतह (त्वचा या Skin) की तरफ धकेल दी जाती है। इसे "स्किन प्रभाव" (Skin Effect) कहते हैं। उच्च आवृत्ति पर तार का आंतरिक भाग बेकार हो जाता है। जब दो तार पास-पास रखे जाते हैं, तो उनका चुंबकीय क्षेत्र एक-दूसरे की धारा को और अधिक सिकोड़ देता है—इसे "प्रॉक्सिमिटी प्रभाव" कहते हैं।',
    bn: 'ডিসি কারেন্ট চলার সময় তারের সমগ্র প্রস্থচ্ছেদ জুড়ে বিদ্যুৎ সমানভাবে প্রবাহিত হয়। কিন্তু এসি কারেন্টের ক্ষেত্রে তারের অভ্যন্তরে সৃষ্ট পরিবর্তনশীল চৌম্বক ক্ষেত্র তারের ঠিক কেন্দ্রে বিপরীত ভোল্টেজ সৃষ্টি করে! ফলে কেন্দ্র দিয়ে কারেন্ট যাওয়া বাধাগ্রস্ত হয় এবং সকল ইলেকট্রন তারের বাইরের পৃষ্ঠ বা ত্বকের দিকে সরে আসে। একে "স্কিন ইফেক্ট" বলে। এর ফলে তারের কার্যকর রোধ (AC Resistance) উল্লেখযোগ্যভাবে বৃদ্ধি পায়। পাশাপাশি দুটি পরিবাহী তার থাকলে তাদের মধ্যকার পারস্পরিক চৌম্বক বিকৃতিকে "প্রক্সিমিটি ইফেক্ট" বলা হয়।'
  },
  detailedExplanation: {
    en: `1. Physical Origin of Skin Effect:
Consider a solid cylindrical conductor carrying alternating current i(t) = I_m · sin(ωt):
- The conductor can be thought of as composed of countless concentric cylindrical shells.
- Filaments situated near the center of the conductor are linked by BOTH internal magnetic flux AND external magnetic flux.
- Filaments located near the outer surface are linked ONLY by external flux.
- Consequently, the self-inductance L and inductive reactance X_L = 2πfL of the central filaments are substantially greater than those of the outer filaments.
- Because all filaments are in parallel across the same terminal voltage, current chooses the path of minimum impedance (Z = R + jX_L). Thus, current avoids the high-reactance center and crowds into the outer surface skin.

2. Mathematical Formulation of Skin Depth (δ):
Solving Maxwell's equations (the Helmholtz wave diffusion equation) inside a conducting medium:
  ∇²J = μ · σ · (∂J / ∂t)
For a semi-infinite planar conductor, the current density J(x) decays exponentially with depth x from the surface:
  J(x) = J_0 · e^(-x / δ) · cos(ωt - x / δ)
where the 'Skin Depth' (or standard penetration depth) δ is defined as the depth at which the current density drops to 1/e (approx. 36.8%) of its surface value J_0:
  δ = √( 2 / (ω · μ · σ) ) = √( ρ / (π · f · μ) )
where:
- ρ = 1/σ = electrical resistivity (Ω·m)
- f = frequency (Hz)
- μ = μ_0 · μ_r = magnetic permeability of the conductor (H/m)
- For annealed copper at 20°C (ρ = 1.72 × 10⁻⁸ Ω·m, μ_r = 1):
  δ_copper ≈ 66.1 / √f  (in millimeters)

3. Quantitative Skin Depth Benchmarks for Copper:
- At f = 50 Hz: δ ≈ 9.35 mm
- At f = 60 Hz: δ ≈ 8.53 mm
- At f = 1 kHz: δ ≈ 2.09 mm
- At f = 100 kHz: δ ≈ 0.209 mm (209 µm)
- At f = 1 MHz: δ ≈ 0.066 mm (66 µm)
- At f = 10 GHz (Microwave radar): δ ≈ 0.66 µm!

4. The AC-to-DC Resistance Ratio (R_ac / R_dc):
Because current is confined to a thin annular sheath of thickness δ, the effective conduction area shrinks:
- For thick conductors (radius r >> δ):
  A_eff ≈ 2π · r · δ
  R_ac ≈ ρ · l / (2π · r · δ)
- While DC resistance utilizes the full circle:
  R_dc = ρ · l / (π · r²)
- The resistance ratio becomes:
  R_ac / R_dc ≈ r / (2 · δ)
This explains why large solid copper cables at high frequencies experience immense I²R heating.

5. Proximity Effect:
When two or more parallel conductors carry alternating currents in close proximity, the magnetic flux established by one conductor cuts the body of the neighboring conductor, generating localized eddy currents that displace current density further:
- Opposing Currents (Go-and-return pair): Currents repel magnetically, crowding into the inner adjacent surfaces of the conductors.
- Same-Direction Currents (Parallel feeders): Currents attract magnetically, crowding into the outermost remote edges of the conductors.
In both cases, current distribution is severely distorted, further escalating the effective AC resistance: R_eff > R_skin > R_dc.

6. Engineering Mitigation Strategies:
- Litz Wire (Litzendraht): Hundreds of ultra-fine copper strands, individually insulated with enamel and braided in a transposition pattern so each strand occupies all positions equally. Eliminates skin and proximity effects up to 1-2 MHz.
- Hollow Conductors: High-voltage substation busbars and RF induction heating coils use hollow copper tubing since a solid core would carry zero current and waste costly metal.
- ACSR Transmission Lines: High-voltage overhead lines use steel strands in the center (for tensile strength) surrounded by outer aluminum strands (carrying the AC current).`,

    hi: `1. स्किन प्रभाव की भौतिक उत्पत्ति:
जब किसी ठोस बेलनाकार तार में एसी धारा बहती है, तो तार के केंद्र में आंतरिक फ्लक्स लिंकेज बाहरी सतह की तुलना में बहुत अधिक होता है।
- केंद्र में अधिक प्रेरक प्रतिघात (X_L = 2πfL) होने के कारण धारा केंद्र से हटकर न्यूनतम प्रतिबाधा वाले बाहरी किनारे (सतह) पर केंद्रित हो जाती है।

2. स्किन डेप्थ सूत्र:
  δ = √( 2 / (ω · μ · σ) ) = √( ρ / (π · f · μ) )
तांबे के लिए 20°C पर:
- 50 Hz पर: δ ≈ 9.35 mm
- 100 kHz पर: δ ≈ 0.21 mm
- 1 MHz पर: δ ≈ 0.066 mm (66 माइक्रोन)

3. एसी प्रतिरोध में वृद्धि:
सतह पर धारा सिमट जाने से प्रभावी चालक क्षेत्रफल घट जाता है, जिससे R_ac > R_dc हो जाता है।

4. प्रॉक्सिमिटी प्रभाव (Proximity Effect):
जब दो समानांतर चालक पास-पास होते हैं, तो उनका चुंबकीय क्षेत्र एक-दूसरे के अंदर धारा वितरण को विकृत कर देता है। विपरीत दिशा वाली धाराओं में करंट आमने-सामने वाली सतहों पर इकट्ठा हो जाता है।

5. इंजीनियरिंग समाधान:
- लिट्ज़ वायर (Litz Wire): अलग-अलग वार्निश किए गए सैकड़ों पतले तारों की बुनाई।
- खोखले पाइप (Hollow Tubing): सबस्टेशनों में खोखले तांबे या एल्यूमीनियम के पाइपों का उपयोग किया जाता है।
- ACSR चालक: केंद्र में मजबूत स्टील और बाहर बिजली ढोने वाला एल्यूमीनियम।`,

    bn: `১. স্কিন ইফেক্টের মূল কারণ:
তারের কেন্দ্রের ভেতরের ফ্লাক্স লিংকেজ বাইরের পৃষ্ঠের চেয়ে বেশি হওয়ায় কেন্দ্রের ইন্ডাকট্যান্স ও রিঅ্যাকট্যান্স (X_L) অনেক বেড়ে যায়। ফলে এসি বিদ্যুৎপ্রবাহ কেন্দ্র পরিহার করে বাইরের ত্বকের ওপর ভিড় জমায়।

২. স্কিন ডেপথের সমীকরণ:
  δ = √( ρ / (π · f · μ) )
তামার ক্ষেত্রে ৫০ হার্টজে স্কিন ডেপথ প্রায় ৯.৩৫ মিমি, কিন্তু ১ মেগাহার্টজে তা মাত্র ৬৬ মাইক্রনে নেমে আসে!

৩. প্রক্সিমিটি ইফেক্ট ও সমাধান:
পাশাপাশি দুটি পরিবাহীর পারস্পরিক চৌম্বক বিকৃতির কারণে কারেন্ট অসমভাবে বণ্টিত হয়। এর প্রতিকারে লিটজ ওয়্যার (Litz Wire), ফাঁপা পাইপ এবং ACSR পরিবাহী ব্যবহৃত হয়।`
  },
  formulas: [
    {
      id: 'f-skin-depth-standard',
      symbol: 'δ',
      expression: 'δ = √( ρ / (π · f · μ) ) = √( 2 / (ω · μ · σ) )',
      title: {
        en: 'Standard Skin Depth (Penetration Depth)',
        hi: 'मानक स्किन डेप्थ (प्रवेशन गहराई)',
        bn: 'আদর্শ স্কিন ডেপথ (ভেদন গভীরতা)'
      },
      description: {
        en: 'Depth below the conductor surface at which current density falls to 1/e (36.8%) of its surface value',
        hi: 'चालक की सतह से वह गहराई जहाँ धारा घनत्व घटकर सतह के मान का 1/e (36.8%) रह जाता है',
        bn: 'পরিবাহীর পৃষ্ঠ থেকে যে গভীরতায় কারেন্ট ঘনত্ব হ্রাস পেয়ে পৃষ্ঠের মানের ১/e (৩৬.৮%) হয়'
      },
      variables: [
        { symbol: 'δ', name: { en: 'Skin depth (meters, m)', hi: 'स्किन डेप्थ (m)', bn: 'স্কিন ডেপথ (মিটার)' } },
        { symbol: 'ρ', name: { en: 'Resistivity of conductor (Ω·m)', hi: 'विद्युत प्रतिरोधकता (Ω·m)', bn: 'রোধ ক্ষমতা (Ω·m)' } },
        { symbol: 'f', name: { en: 'AC frequency (Hz)', hi: 'प्रत्यावर्ती आवृत्ति (Hz)', bn: 'এসি কম্পাঙ্ক (Hz)' } },
        { symbol: 'μ', name: { en: 'Permeability μ_0 · μ_r (H/m)', hi: 'चुंबकीय पारगम्यता (H/m)', bn: 'চৌম্বক প্রবেশ্যতা (H/m)' } },
        { symbol: 'σ', name: { en: 'Conductivity 1/ρ (S/m)', hi: 'विद्युत चालकता (S/m)', bn: 'পরিবাহিতা (S/m)' } }
      ]
    },
    {
      id: 'f-skin-resistance-ratio',
      symbol: 'R_ac / R_dc',
      expression: 'R_ac / R_dc ≈ r / (2 · δ)   (for r >> δ)',
      title: {
        en: 'High-Frequency AC to DC Resistance Ratio',
        hi: 'उच्च-आवृत्ति एसी बनाम डीसी प्रतिरोध अनुपात',
        bn: 'উচ্চ-কম্পাঙ্কে এসি বনাম ডিসি রোধ অনুপাত'
      },
      description: {
        en: 'Factor by which effective conductor resistance increases due to skin effect at high frequencies',
        hi: 'वह अनुपात जिससे उच्च आवृत्ति पर स्किन प्रभाव के कारण प्रभावी प्रतिरोध बढ़ जाता है',
        bn: 'স্কিন ইফেক্টের কারণে উচ্চ কম্পাঙ্কে কার্যকরী রোধ বৃদ্ধির অনুপাত'
      },
      variables: [
        { symbol: 'R_ac', name: { en: 'Effective AC resistance (Ω)', hi: 'प्रभावी एसी प्रतिरोध (Ω)', bn: 'কার্যকর এসি রোধ (Ω)' } },
        { symbol: 'R_dc', name: { en: 'Pure DC resistance (Ω)', hi: 'शुद्ध डीसी प्रतिरोध (Ω)', bn: 'বিশুদ্ধ ডিসি রোধ (Ω)' } },
        { symbol: 'r', name: { en: 'Conductor radius (m)', hi: 'चालक की त्रिज्या (m)', bn: 'পরিবাহীর ব্যাসার্ধ (m)' } },
        { symbol: 'δ', name: { en: 'Skin depth at frequency f (m)', hi: 'आवृत्ति f पर स्किन डेप्थ (m)', bn: 'কম্পাঙ্ক f-এ স্কিন ডেপথ (m)' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-skin-litz-wire-tech',
      title: {
        en: 'Litz Wire Topology & Frequency Optimization',
        hi: 'लिट्ज़ वायर टोपोलॉजी एवं आवृत्ति अनुकूलन',
        bn: 'লিটজ ওয়্যার টপোলজি ও কম্পাঙ্ক অপটিমাইজেশন'
      },
      content: {
        en: `Why standard stranded cable fails at high frequency:
- In ordinary stranded wire, strands touch each other uninsulated, acting electrically as one single solid thick conductor.
- In Litz wire (from German Litzendraht, woven wire):
  1. Each micro-strand is individually coated with thin polyurethane enamel insulation.
  2. The strands are braided such that every strand regularly alternates between the interior and exterior of the bundle.
  3. The strand diameter d_strand is chosen such that d_strand < 2 · δ at the operating frequency.
  4. This forces equal current sharing and suppresses eddy current loops between strands, maintaining R_ac ≈ R_dc up to ~2 MHz.`,
        hi: `साधारण स्ट्रैंडेड केबल उच्च आवृत्ति पर क्यों विफल हो जाती है?
- साधारण केबल में तार आपस में नंगे जुड़े होते हैं, जिससे वे एक ही मोटे ठोस तार की तरह व्यवहार करते हैं।
- लिट्ज़ वायर में प्रत्येक सूक्ष्म तार पर इनेमल की परत चढ़ी होती है और उन्हें विशेष रूप से बुना जाता है ताकि प्रत्येक तार अंदर और बाहर समान रूप से घूमे। इससे उच्च आवृत्ति पर भी प्रतिरोध नहीं बढ़ता।`,
        bn: `সাধারণ স্ট্র্যান্ডেড তার উচ্চ কম্পাঙ্কে কাজ করে না কেন?
- সাধারণ তারের স্ট্র্যান্ডগুলো অন্তরিত না থাকায় তারা একটি নিরেট মোটা তারের মতো আচরণ করে।
- লিটজ তারের প্রতিটি সূক্ষ্ম তার আলাদাভাবে এনামেলযুক্ত থাকে এবং বিশেষ বিন্যাসে বোনা থাকে, ফলে স্কিন ইফেক্ট দূরীভূত হয়।`
      },
      schematicId: 'circuit-ch10-skin-proximity-current-profile'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-skin-1',
      problem: {
        en: 'A copper conductor has electrical resistivity ρ = 1.72 × 10⁻⁸ Ω·m and relative magnetic permeability μ_r = 1.0 (μ_0 = 4π × 10⁻⁷ H/m). Calculate the skin depth δ in the copper conductor at: (a) Power line frequency f₁ = 50 Hz, (b) Switch-mode power supply frequency f₂ = 100 kHz, and (c) Radio frequency f₃ = 10 MHz.',
        hi: 'एक तांबे के चालक की विद्युत प्रतिरोधकता ρ = 1.72 × 10⁻⁸ Ω·m और सापेक्ष पारगम्यता μ_r = 1.0 (μ_0 = 4π × 10⁻⁷ H/m) है। तांबे में स्किन डेप्थ δ की गणना कीजिए: (a) पावर लाइन आवृत्ति f₁ = 50 Hz पर, (b) स्विच-मोड पावर सप्लाई आवृत्ति f₂ = 100 kHz पर, तथा (c) रेडियो आवृत्ति f₃ = 10 MHz पर।',
        bn: 'একটি তামার পরিবাহীর রোধাঙ্ক ρ = ১.৭২ × ১০⁻⁸ Ω·m এবং আপেক্ষিক চৌম্বক প্রবেশ্যতা μ_r = ১.০ (μ_0 = ৪π × ১০⁻⁷ H/m)। তামার স্কিন ডেপথ δ নির্ণয় কর: (a) পাওয়ার লাইন কম্পাঙ্ক f₁ = ৫০ Hz-এ, (b) এসএমপিএস কম্পাঙ্ক f₂ = ১০০ kHz-এ, এবং (c) রেডিও কম্পাঙ্ক f₃ = ১০ MHz-এ।'
      },
      givenValues: {
        en: 'ρ = 1.72 × 10⁻⁸ Ω·m, μ = 4π × 10⁻⁷ H/m, f₁ = 50 Hz, f₂ = 10⁵ Hz, f₃ = 10⁷ Hz',
        hi: 'ρ = 1.72 × 10⁻⁸ Ω·m, μ = 4π × 10⁻⁷ H/m, f₁ = 50 Hz, f₂ = 10⁵ Hz, f₃ = 10⁷ Hz',
        bn: 'ρ = ১.৭২ × ১০⁻⁸ Ω·m, μ = ৪π × ১০⁻⁷ H/m, f₁ = ৫০ Hz, f₂ = ১০⁵ Hz, f₃ = ১০⁷ Hz'
      },
      solution: {
        en: `1. Skin depth fundamental formula:
   δ = √(ρ / (π · f · μ))
2. Simplify the copper material constant:
   √(ρ / (π · μ_0)) = √((1.72 × 10⁻⁸) / (π · 4π × 10⁻⁷)) = √(1.72 × 10⁻¹ / (4π²)) = 0.0660 m
   Therefore, δ ≈ 0.0660 / √f meters = 66.0 / √f mm
3. Case (a) at f₁ = 50 Hz:
   δ₁ = 66.0 / √50 = 66.0 / 7.071 ≈ 9.33 mm
4. Case (b) at f₂ = 100 kHz = 100,000 Hz:
   δ₂ = 66.0 / √100,000 = 66.0 / 316.23 ≈ 0.209 mm = 209 μm
5. Case (c) at f₃ = 10 MHz = 10,000,000 Hz:
   δ₃ = 66.0 / √10,000,000 = 66.0 / 3162.3 ≈ 0.0209 mm = 20.9 μm`,
        hi: `1. स्किन डेप्थ सूत्र:
   δ = √(ρ / (π × f × μ))
2. तांबे के लिए सरलीकरण:
   δ ≈ 66.0 / √f mm
3. (a) 50 Hz पर:
   δ₁ = 66.0 / √50 = 66.0 / 7.071 ≈ 9.33 mm
4. (b) 100 kHz पर:
   δ₂ = 66.0 / √100000 = 66.0 / 316.23 ≈ 0.209 mm (209 μm)
5. (c) 10 MHz पर:
   δ₃ = 66.0 / √10000000 = 66.0 / 3162.3 ≈ 0.0209 mm (20.9 μm)`,
        bn: `১. স্কিন ডেপথ সমীকরণ:
   δ = √(ρ / (π × f × μ))
২. তামার উপাদানের ধ্রুবক:
   δ ≈ ৬৬.০ / √f mm
৩. (a) ৫০ Hz এ:
   δ₁ = ৬৬.০ / √৫০ = ৬৬.০ / ৭.০৭১ ≈ ৯.৩৩ mm
৪. (b) ১০০ kHz এ:
   δ₂ = ৬৬.০ / √১০০০০০ = ৬৬.০ / ৩১৬.২৩ ≈ ০.২০৯ mm (২০৯ μm)
৫. (c) ১০ MHz এ:
   δ₃ = ৬৬.০ / √১০০০০০০০ = ৬৬.০ / ৩১৬২.৩ ≈ ০.০২০৯ mm (২০.৯ μm)`
      },
      finalAnswer: {
        en: 'δ(50 Hz) = 9.33 mm; δ(100 kHz) = 0.209 mm (209 μm); δ(10 MHz) = 20.9 μm',
        hi: 'δ(50 Hz) = 9.33 mm; δ(100 kHz) = 0.209 mm (209 μm); δ(10 MHz) = 20.9 μm',
        bn: 'δ(৫০ Hz) = ৯.৩৩ mm; δ(১০০ kHz) = ০.২০৯ mm (২০৯ μm); δ(১০ MHz) = ২০.৯ μm'
      }
    },
    {
      id: 'ex-skin-2',
      problem: {
        en: 'A solid cylindrical copper wire has radius r = 6 mm and length L = 100 m (ρ = 1.72 × 10⁻⁸ Ω·m). At an operating frequency of 100 kHz, the skin depth is δ = 0.21 mm. (a) Calculate the pure DC resistance R_dc, (b) Using the thin annular shell approximation (A_ac ≈ 2π · r · δ for δ ≪ r), calculate the effective AC resistance R_ac at 100 kHz, and (c) Determine the ratio R_ac / R_dc.',
        hi: 'एक ठोस बेलनाकार तांबे के तार की त्रिज्या r = 6 mm और लंबाई L = 100 m (ρ = 1.72 × 10⁻⁸ Ω·m) है। 100 kHz आवृत्ति पर स्किन डेप्थ δ = 0.21 mm है। ज्ञात कीजिए: (a) शुद्ध डीसी प्रतिरोध R_dc, (b) पतले छल्ले के सन्निकटन (A_ac ≈ 2π · r · δ) का उपयोग करके प्रभावी एसी प्रतिरोध R_ac, तथा (c) अनुपात R_ac / R_dc।',
        bn: 'একটি নিরেট তামার তারের ব্যাসার্ধ r = ৬ mm এবং দৈর্ঘ্য L = ১০০ m (ρ = ১.৭২ × ১০⁻⁸ Ω·m)। ১০০ kHz কম্পাঙ্কে স্কিন ডেপথ δ = ০.২১ mm। নির্ণয় কর: (a) বিশুদ্ধ ডিসি রোধ R_dc, (b) পাতলা অ্যানুলার শেল সন্নিকটীকরণ (A_ac ≈ ২π · r · δ) দ্বারা কার্যকর এসি রোধ R_ac, এবং (c) অনুপাত R_ac / R_dc।'
      },
      givenValues: {
        en: 'r = 0.006 m, L = 100 m, ρ = 1.72 × 10⁻⁸ Ω·m, δ = 0.00021 m',
        hi: 'r = 0.006 m, L = 100 m, ρ = 1.72 × 10⁻⁸ Ω·m, δ = 0.00021 m',
        bn: 'r = ০.০০৬ m, L = ১০০ m, ρ = ১.৭২ × ১০⁻⁸ Ω·m, δ = ০.০০০২১ m'
      },
      solution: {
        en: `1. Calculate total conductor cross-sectional area and DC resistance:
   A_dc = π · r² = π · (0.006)² = 1.131 × 10⁻⁴ m²
   R_dc = (ρ · L) / A_dc = (1.72 × 10⁻⁸ · 100) / (1.131 × 10⁻⁴) = 0.0152 Ω = 15.2 mΩ
2. Calculate effective AC conducting area at 100 kHz:
   Since δ (0.21 mm) ≪ r (6 mm), current flows strictly in an outer cylindrical shell of thickness δ:
   A_ac ≈ 2π · r · δ = 2π · 0.006 m · 0.00021 m = 7.917 × 10⁻⁶ m²
3. Calculate high-frequency AC resistance:
   R_ac = (ρ · L) / A_ac = (1.72 × 10⁻⁸ · 100) / (7.917 × 10⁻⁶) = 0.2173 Ω = 217.3 mΩ
4. Calculate resistance inflation ratio:
   R_ac / R_dc ≈ A_dc / A_ac = (π · r²) / (2π · r · δ) = r / (2 · δ)
   R_ac / R_dc = 6 mm / (2 · 0.21 mm) = 6 / 0.42 ≈ 14.3
   (Over 93% of the copper cross-section carries virtually no current!)`,
        hi: `1. डीसी प्रतिरोध की गणना:
   A_dc = π × r² = π × (0.006)² = 1.131 × 10⁻⁴ m²
   R_dc = (1.72 × 10⁻⁸ × 100) / (1.131 × 10⁻⁴) = 0.0152 Ω (15.2 mΩ)
2. 100 kHz पर प्रभावी एसी चालक क्षेत्रफल:
   A_ac ≈ 2π × r × δ = 2π × 0.006 × 0.00021 = 7.917 × 10⁻⁶ m²
3. एसी प्रतिरोध:
   R_ac = (1.72 × 10⁻⁸ × 100) / (7.917 × 10⁻⁶) = 0.2173 Ω (217.3 mΩ)
4. प्रतिरोध अनुपात:
   R_ac / R_dc = r / (2 × δ) = 6 / (2 × 0.21) ≈ 14.3 गुना वृद्धि!`,
        bn: `১. ডিসি রোধ নির্ণয়:
   A_dc = π × r² = π × (০.০০৬)² = ১.১৩১ × ১০⁻⁴ m²
   R_dc = (১.৭২ × ১০⁻⁸ × ১০০) / (১.১৩১ × ১০⁻⁴) = ০.০১৫২ Ω (১৫.২ mΩ)
২. ১০০ kHz এ কার্যকর পরিবাহী ক্ষেত্রফল:
   A_ac ≈ ২π × r × δ = ২π × ০.০০৬ × ০.০০০২১ = ৭.৯১৭ × ১০⁻⁶ m²
৩. উচ্চ-কম্পাঙ্ক এসি রোধ:
   R_ac = (১.৭২ × ১০⁻⁸ × ১০০) / (৭.৯১৭ × ১০⁻⁶) = ০.২১৭৩ Ω (২১৭.৩ mΩ)
৪. রোধ বৃদ্ধির অনুপাত:
   R_ac / R_dc = r / (২ × δ) = ৬ / (২ × ০.২১) ≈ ১৪.৩ গুণ বৃদ্ধি!`
      },
      finalAnswer: {
        en: 'R_dc = 15.2 mΩ; R_ac = 217.3 mΩ; Resistance Ratio R_ac / R_dc = 14.3 (1430% of DC)',
        hi: 'R_dc = 15.2 mΩ; R_ac = 217.3 mΩ; अनुपात R_ac / R_dc = 14.3 (14.3 गुना)',
        bn: 'R_dc = ১৫.২ mΩ; R_ac = ২১৭.৩ mΩ; অনুপাত R_ac / R_dc = ১৪.৩ গুণ'
      }
    }
  ],
  practicalApplications: {
    en: [
      'High-Frequency Switch-Mode Power Supplies (SMPS): Using braided, individually enamelled Litz wire in ferrite transformers to prevent extreme overheating.',
      'Overhead ACSR Transmission Lines: Utilizing high-tensile galvanized steel strands in the center where current density is low, surrounded by outer aluminum strands carrying the current.',
      'Induction Heating Coils: Fabricated from hollow copper tubing with internal forced water cooling, utilizing only the outer skin where high-frequency current flows.',
      'RF Transmitter Antennas & Tank Coils: Employing large-diameter silver-plated tubular conductors because silver provides maximum surface conductivity for skin currents.',
      'Microwave Waveguides & Cavity Resonators: Mirror-polished silver or gold inner plating to channel GHz electromagnetic waves through microscopic skin layers with minimal attenuation.'
    ],
    hi: [
      'स्विच-मोड पावर सप्लाई (SMPS): फेराइट ट्रांसफॉर्मर वाइंडिंग में अत्यधिक गर्म होने से बचाने के लिए इंसुलेटेड लिट्ज़ वायर का उपयोग।',
      'ओवरहेड ACSR ट्रांसमिशन लाइनें: केंद्र में उच्च-शक्ति स्टील कोर और परिधि पर एल्यूमीनियम कंडक्टर, क्योंकि स्किन इफेक्ट के कारण धारा सतह पर बहती है।',
      'इंडक्शन हीटिंग कॉइल: अंदर से जल-शीतित खोखले तांबे के पाइपों का उपयोग, क्योंकि धारा केवल बाहरी सतह पर प्रवाहित होती है।',
      'रेडियो ट्रांसमीटर एंटीना: तांबे की खोखली नलियों पर चांदी की परत चढ़ाना ताकि त्वचा धारा न्यूनतम प्रतिरोध के साथ प्रवाहित हो सके।',
      'माइक्रोवेव वेवगाइड और गुहाएं: गीगाहर्ट्ज तरंगों को न्यूनतम ऊर्जा हानि के साथ निर्देशित करने के लिए आंतरिक सतह पर सोने या चांदी की पॉलिश।'
    ],
    bn: [
      'উচ্চ-কম্পাঙ্কের SMPS ট্রান্সফরমার: ওয়াইন্ডিংয়ে অতিরিক্ত গরম হওয়া রোধে বহু-স্ট্র্যান্ডের অন্তরিত লিটজ তারের ব্যবহার।',
      'ওভারহেড ACSR সঞ্চালন লাইন: তারের কেন্দ্রভাগে শক্তি বৃদ্ধির জন্য ইস্পাত কোর এবং বাইরের স্তরে বিদ্যুৎ পরিবহনের জন্য অ্যালুমিনিয়াম তার রাখা হয়।',
      'ইন্ডাকশন হিটিং কয়েল: অভ্যন্তরীণ পানি-শীতলীকৃত ফাঁপা তামার পাইপ ব্যবহার করা হয়, কারণ উচ্চ কম্পাঙ্কের কারেন্ট কেবল বাইরের ত্বকে চলে।',
      'আরএফ ট্রান্সমিটার কয়েল ও অ্যান্টেনা: ফাঁপা পাইপের ওপর সিলভার বা রুপার প্রলেপ দেওয়া হয় যাতে পৃষ্ঠের পরিবাহিতা সর্বোচ্চ থাকে।',
      'মাইক্রোওয়েভ ওয়েভগাইড: অতি ক্ষুদ্র স্কিন ডেপথের সুযোগ নিয়ে ন্যূনতম ক্ষয়ে গিগাহার্টজ সিগন্যাল পাঠাতে ভেতরের দেয়ালে সোনা বা রুপার প্রলেপ দেওয়া হয়।'
    ]
  },
  importantPoints: {
    en: [
      'Skin depth formula: δ = √(ρ / (π · f · μ)), defining the depth at which current density falls to 1/e (approx. 36.8%) of its surface value.',
      'Physical origin: Internal time-varying magnetic flux linkages produce higher self-inductance at the center of the wire, creating greater inductive reactance (X_L = ωL) that forces current toward the outer perimeter.',
      'Current density distribution: Conductor current density decays exponentially from the perimeter inward according to J(x) = J_0 · e^(-x/δ).',
      'Proximity effect distortion: Alternating magnetic fields from neighboring conductors push current to the outer edges (opposing currents) or facing surfaces (aiding currents), further constricting effective area.',
      'Litz wire principle: Fine strands woven so that each strand continuously cycles between the inner core and outer boundary, equalizing inductive reactance across all parallel paths.',
      'High-frequency material economy: Because the core of a thick conductor carries virtually zero current at radio frequencies, hollow tubes provide equal electrical performance at a fraction of the weight.'
    ],
    hi: [
      'स्किन डेप्थ सूत्र: δ = √(ρ / (π · f · μ)), जो वह गहराई है जहां धारा घनत्व सतह के मान का 1/e (लगभग 36.8%) रह जाता है।',
      'भौतिक कारण: आंतरिक चुंबकीय फ्लक्स के कारण तार के केंद्र में स्व-प्रेरकत्व (L) अधिक होता है, जिससे केंद्र में प्रतिघात (X_L) बढ़ने से धारा सतह की ओर विस्थापित हो जाती है।',
      'धारा घनत्व वितरण: सतह से केंद्र की ओर धारा घनत्व चरघातांकी रूप से घटता है: J(x) = J_0 · e^(-x/δ)।',
      'प्रॉक्सिमिटी प्रभाव: पास के तारों का चुंबकीय क्षेत्र धारा के वितरण को और अधिक विकृत करता है, जिससे एसी प्रतिरोध और बढ़ जाता है।',
      'लिट्ज़ वायर सिद्धांत: महीन एनामेल्ड तारों की विशेष बुनाई जिससे प्रत्येक तार समय-समय पर परिधि और केंद्र में आता है, जिससे प्रेरकत्व संतुलित रहता है।',
      'सामग्री की बचत: उच्च आवृत्ति पर केंद्र में धारा शून्य होने के कारण ठोस तार के स्थान पर खोखले पाइप समान विद्युत क्षमता देते हैं।'
    ],
    bn: [
      'স্কিন ডেপথ সূত্র: δ = √(ρ / (π · f · μ)), যা নির্দেশ করে পরিবাহীর বাইরের পৃষ্ঠ থেকে কত গভীরে কারেন্ট ঘনত্ব পৃষ্ঠের মানের ১/e (প্রায় ৩৬.৮%) অংশে নেমে আসে।',
      'উৎপত্তির কারণ: অভ্যন্তরীণ পরিবর্তনশীল চৌম্বক ফ্লাক্সের দরুন তারের কেন্দ্রে স্বকীয় আবেশাঙ্ক বেশি থাকে, ফলে কেন্দ্রীয় উচ্চ রিঅ্যাক্ট্যান্স কারেন্টকে পরিধির দিকে ঠেলে দেয়।',
      'কারেন্ট ঘনত্ব বিন্যাস: পৃষ্ঠ থেকে ভেতরের দিকে বিদ্যুৎ ঘনত্ব সূচকীয় হারে হ্রাস পায়: J(x) = J_0 · e^(-x/δ)।',
      'প্রক্সিমিটি ইফেক্ট: পাশাপাশি থাকা একাধিক তারের পারস্পরিক চৌম্বক ক্ষেত্র কারেন্ট প্রবাহকে একপাশে ঠেলে সংকুচিত করে কার্যকর রোধ আরও বাড়িয়ে তোলে।',
      'লিটজ তারের কৌশল: সূক্ষ্ম অন্তরিত তারগুলোকে এমনভাবে বোনা হয় যেন প্রতিটি তার সমানুপাতে কেন্দ্র ও পরিধির মধ্য দিয়ে অবস্থান পরিবর্তন করে।',
      'ফাঁপা পরিবাহীর উপযোগিতা: রেডিও কম্পাঙ্কে তারের কেন্দ্রে কারেন্ট প্রায় শূন্য থাকায় নিরেট তারের বদলে ফাঁপা নল ব্যবহারে ওজন ও খরচ বহুলাংশে কমে।'
    ]
  },
  commonMistakes: {
    en: [
      'Assuming skin effect occurs in DC circuits: Skin effect requires time-varying magnetic flux linkages (dΦ/dt); in DC circuits, current density across the entire conductor cross-section is completely uniform.',
      'Believing standard uninsulated stranded wire mitigates skin effect: Because uninsulated strands make continuous electrical contact, they act identically to a single solid thick conductor; strands must be individually insulated (Litz wire).',
      'Thinking skin depth δ is an abrupt boundary: Current does not abruptly stop at depth δ; it decays continuously, with ~63.2% of current flowing in the first layer of thickness δ and ~98% within 4δ.',
      'Ignoring proximity effect in compact transformer windings: In multi-layer high-frequency transformers, proximity effect between adjacent conductor layers often elevates AC resistance far more than simple skin effect alone.'
    ],
    hi: [
      'यह मानना कि स्किन इफेक्ट डीसी परिपथों में भी होता है: स्किन इफेक्ट केवल परिवर्तनशील चुंबकीय फ्लक्स (AC) के कारण होता है; डीसी में धारा पूरे अनुप्रस्थ काट में एकसमान बहती है।',
      'सोचना कि साधारण स्ट्रैंडेड तार स्किन इफेक्ट रोकते हैं: नंगे तार आपस में छूने के कारण एक ही मोटे ठोस तार की तरह काम करते हैं; प्रत्येक तार पर अलग इंसुलेशन (लिट्ज़ वायर) होना अनिवार्य है।',
      'स्किन डेप्थ δ को एक कठोर सीमा रेखा समझना: धारा अचानक नहीं रुकती बल्कि गहराई के साथ चरघातांकी रूप से घटती है।',
      'ट्रांसफॉर्मर वाइंडिंग में प्रॉक्सिमिटी प्रभाव को नजरअंदाज करना: पास-पास लिपटी वाइंडिंग में प्रॉक्सिमिटी प्रभाव स्किन इफेक्ट की तुलना में एसी प्रतिरोध को कहीं अधिक बढ़ा देता है।'
    ],
    bn: [
      'ডিসি বর্তনীতেও স্কিন ইফেক্ট ঘটে বলে ভুল ধারণা: স্কিন ইফেক্ট কেবল পরিবর্তনশীল চৌম্বক ফ্লাক্সের (AC) কারণে হয়; ডিসিতে সমগ্র প্রস্থচ্ছেদ জুড়ে বিদ্যুৎ সমানভাবে প্রবাহিত হয়।',
      'সাধারণ স্ট্র্যান্ডেড তার স্কিন ইফেক্ট দূর করে বলে মনে করা: অনাবৃত তারগুলো পরস্পরের সংস্পর্শে থাকায় একটি নিরেট মোটা তারের মতোই আচরণ করে; পৃথক এনামেল অন্তরণ (লিটজ তার) অত্যাবশ্যক।',
      'স্কিন ডেপথ δ কে একটি বিচ্ছিন্ন সীমারেখা মনে করা: কারেন্ট δ গভীরতায় হঠাৎ বন্ধ হয়ে যায় না, বরং তা সূচকীয় হারে কমে পৃষ্ঠের ৩৬.৮% এ পৌঁছায়।',
      'ঘন ট্রান্সফরমার ওয়াইন্ডিংয়ে প্রক্সিমিটি প্রভাব উপেক্ষা করা: ঘন সন্নিবিষ্ট বহুস্তরী কয়েলে স্কিন ইফেক্টের চেয়ে প্রক্সিমিটি ইফেক্ট কার্যকর এসি রোধকে বহুগুণ বাড়িয়ে দেয়।'
    ]
  },
  keyTakeaways: {
    en: [
      'Skin effect forces alternating current to crowd into the outermost perimeter of a conductor, reducing the effective conducting cross-section.',
      'AC resistance increases significantly with frequency (R_ac > R_dc), escalating I²R resistive heating in power lines and high-frequency magnetics.',
      'Skin depth δ is inversely proportional to the square root of frequency (δ ∝ 1/√f), shrinking from 9.3 mm at 50 Hz to 21 μm at 10 MHz in copper.',
      'Proximity effect causes additional current crowding due to mutual magnetic interference between adjacent parallel conductors.',
      'Mitigation techniques include Litz wire (individually insulated woven strands), hollow tubular conductors, surface silver plating, and composite ACSR cables.'
    ],
    hi: [
      'स्किन इफेक्ट प्रत्यावर्ती धारा को चालक की बाहरी सतह पर प्रवाहित होने के लिए मजबूर करता है, जिससे प्रभावी चालक क्षेत्रफल घट जाता है।',
      'आवृत्ति बढ़ने के साथ एसी प्रतिरोध तेजी से बढ़ता है (R_ac > R_dc), जिससे उच्च आवृत्ति पर भारी I²R तापीय हानि होती है।',
      'स्किन डेप्थ δ आवृत्ति के वर्गमूल के व्युत्क्रमानुपाती होती है (δ ∝ 1/√f); तांबे में यह 50 Hz पर 9.3 mm से घटकर 10 MHz पर 21 μm रह जाती है।',
      'प्रॉक्सिमिटी प्रभाव आस-पास के चालकों के आपसी चुंबकीय क्षेत्र के कारण धारा वितरण को और अधिक असंतुलित कर देता है।',
      'उपायों में लिट्ज़ वायर, खोखले पाइप कंडक्टर, सतह पर चांदी की परत और ACSR ट्रांसमिशन केबल शामिल हैं।'
    ],
    bn: [
      'স্কিন ইফেক্ট অল্টারনেটিং কারেন্টকে পরিবাহীর সবচেয়ে বাইরের পৃষ্ঠভাগে প্রবাহিত হতে বাধ্য করে, ফলে কার্যকর পরিবাহী ক্ষেত্রফল কমে যায়।',
      'কম্পাঙ্ক বৃদ্ধির সাথে সাথে কার্যকর এসি রোধ দ্রুত বাড়ে (R_ac > R_dc), যা উচ্চ কম্পাঙ্কের যন্ত্রপাতিতে তীব্র I²R তাপীয় অপচয় ঘটায়।',
      'স্কিন ডেপথ δ কম্পাঙ্কের বর্গমূলের ব্যস্তানুপাতিক (δ ∝ ১/√f); তামায় ৫০ Hz এ এটি ৯.৩ mm হলেও ১০ MHz এ মাত্র ২১ μm এ নেমে আসে।',
      'প্রক্সিমিটি ইফেক্টের কারণে পাশাপাশি থাকা পরিবাহীগুলোর পারস্পরিক চৌম্বক ক্ষেত্র কারেন্ট বন্টনকে আরও অসম করে তোলে।',
      'প্রতিকারমূলক কৌশলের মধ্যে রয়েছে লিটজ ওয়্যার, ফাঁপা নলাকার পরিবাহী, সিলভার প্লেটিং এবং মিশ্র ACSR ট্রান্সমিশন কেবল।'
    ]
  },
  mcqs: [
    {
      id: 'q-skin-1',
      question: {
        en: 'As the frequency of an AC current increases by a factor of 100, the skin depth δ in a copper conductor becomes:',
        hi: 'यदि एसी धारा की आवृत्ति 100 गुना बढ़ जाए, तो तांबे के चालक में स्किन डेप्थ δ हो जाएगी:',
        bn: 'এসি কারেন্টের কম্পাঙ্ক ১০০ গুণ বৃদ্ধি পেলে তামার পরিবাহীতে স্কিন ডেপথ δ হবে:'
      },
      options: [
        { id: 'opt-1', text: { en: '100 times larger', hi: '100 गुना बड़ी', bn: '১০০ গুণ বড়' } },
        { id: 'opt-2', text: { en: '10 times smaller (0.1x)', hi: '10 गुना छोटी (0.1x)', bn: '১০ গুণ ছোট (০.১x)' } },
        { id: 'opt-3', text: { en: '100 times smaller (0.01x)', hi: '100 गुना छोटी (0.01x)', bn: '১০০ গুণ ছোট (০.০১x)' } },
        { id: 'opt-4', text: { en: 'Unchanged', hi: 'अपरिवर्तित', bn: 'অপরিবর্তিত' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'Skin depth is inversely proportional to the square root of frequency: δ ∝ 1/√f. If frequency increases 100x, δ shrinks by 1/√100 = 1/10 (0.1x).',
        hi: 'स्किन डेप्थ आवृत्ति के वर्गमूल के व्युत्क्रमानुपाती होती है: δ ∝ 1/√f। आवृत्ति 100 गुना होने पर δ घटकर 1/√100 = 1/10 (10 गुना छोटी) रह जाती है।',
        bn: 'স্কিন ডেপথ কম্পাঙ্কের বর্গমূলের ব্যস্তানুপাতিক: δ ∝ ১/√f। কম্পাঙ্ক ১০০ গুণ বৃদ্ধি পেলে δ হ্রাস পেয়ে ১/√১০০ = ১/১০ (১০ গুণ ছোট) হয়ে যায়।'
      }
    },
    {
      id: 'q-skin-2',
      question: {
        en: 'Why do overhead high-voltage AC transmission lines utilize ACSR conductors with a central steel core?',
        hi: 'ओवरहेड हाई-वोल्टेज एसी ट्रांसमिशन लाइनों में केंद्रीय स्टील कोर वाले ACSR चालकों का उपयोग क्यों किया जाता है?',
        bn: 'ওভারহেড হাই-ভোল্টেজ এসি সঞ্চালন লাইনে কেন্দ্রে স্টিল কোরযুক্ত ACSR পরিবাহী ব্যবহারের কারণ কী?'
      },
      options: [
        { id: 'opt-1', text: { en: 'The skin effect pushes current to the outer aluminum, allowing cheap high-strength steel to provide mechanical tension without high loss', hi: 'स्किन प्रभाव धारा को बाहरी एल्यूमीनियम में धकेल देता है, जिससे सस्ता मजबूत स्टील बिना हानि के यांत्रिक शक्ति देता है', bn: 'স্কিন ইফেক্ট কারেন্টকে বাইরের অ্যালুমিনিয়ামে ঠেলে দেয়, ফলে ভেতরের সাশ্রয়ী স্টিল ক্ষতি ছাড়াই যান্ত্রিক শক্তি জোগায়' } },
        { id: 'opt-2', text: { en: 'Steel is a better electrical conductor than copper at 50 Hz', hi: 'स्टील 50 Hz पर तांबे से बेहतर विद्युत चालक है', bn: '৫০ হার্টজে স্টিল তামার চেয়ে ভালো পরিবাহী' } },
        { id: 'opt-3', text: { en: 'The steel completely eliminates dielectric corona discharge', hi: 'स्टील कोरोना डिस्चार्ज को पूरी तरह समाप्त कर देता है', bn: 'স্টিল করোনা ডিসচার্জ সম্পূর্ণ দূর করে' } },
        { id: 'opt-4', text: { en: 'Steel prevents inductive lightning strikes', hi: 'स्टील आकाशीय बिजली को रोकता है', bn: 'স্টিল বজ্রপাত প্রতিরোধ করে' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Because skin effect pushes current away from the center toward the outer aluminum strands, the inner steel core carries minimal current. This allows heavy-duty steel to provide tensile strength across long tower spans while aluminum handles current efficiently.',
        hi: 'स्किन प्रभाव के कारण करंट केंद्र से हटकर बाहर एल्यूमीनियम में बहता है, इसलिए आंतरिक स्टील बिना बिजली हानि के टावरों के बीच तार को मजबूत यांत्रिक तनाव प्रदान करता है।',
        bn: 'স্কিন ইফেক্টের কারণে কেন্দ্রে বিদ্যুৎপ্রবাহ প্রায় শূন্য থাকায় ভেতরের স্টিল কোর কেবল যান্ত্রিক শক্তি জোগায় এবং বাইরের অ্যালুমিনিয়াম পরিবাহী দক্ষতার সাথে বিদ্যুৎ বহন করে।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch10-l13-1',
      question: {
        en: 'Calculate the skin depth in a copper conductor (ρ = 1.72 × 10⁻⁸ Ω·m, μ_r = 1, μ_0 = 4π × 10⁻⁷ H/m) operating at an induction heating frequency of 250 kHz.',
        hi: '250 kHz प्रेरण तापन आवृत्ति पर कार्यरत तांबे के चालक (ρ = 1.72 × 10⁻⁸ Ω·m, μ_r = 1) में स्किन डेप्थ की गणना कीजिए।',
        bn: '২৫০ kHz ইনডাকশন হিটিং কম্পাঙ্কে তামার পরিবাহীতে (ρ = ১.৭২ × ১০⁻⁸ Ω·m, μ_r = ১) স্কিন ডেপথ কত হবে নির্ণয় করুন।'
      },
      hint: {
        en: 'Use δ = √(ρ / (π · f · μ)). Notice f = 250,000 Hz, μ = 4π × 10⁻⁷ H/m.',
        hi: 'सूत्र δ = √(ρ / (π · f · μ)) का उपयोग करें। f = 250,000 Hz, μ = 4π × 10⁻⁷ H/m।',
        bn: 'সূত্র δ = √(ρ / (π · f · μ)) ব্যবহার করুন। f = ২৫০,০০০ Hz।'
      },
      answerKey: {
        en: 'δ = √[ 1.72 × 10⁻⁸ / (π × 250,000 × 4π × 10⁻⁷) ] = √[ 1.72 × 10⁻⁸ / 0.98696 ] = √[ 1.7427 × 10⁻⁸ ] ≈ 1.32 × 10⁻⁴ m = 0.132 mm (132 µm).',
        hi: 'δ = √[ 1.72 × 10⁻⁸ / 0.987 ] ≈ 0.132 mm (132 माइक्रोन)।',
        bn: 'δ = √[ ১.৭২ × ১০⁻⁸ / ০.৯৮৭ ] ≈ ০.১৩২ মিমি (১৩২ মাইক্রন)।'
      }
    }
  ]
};
