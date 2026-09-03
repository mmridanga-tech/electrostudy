import { Lesson } from '../types';

export const LESSON_DISPLACEMENT_CURRENT: Lesson = {
  id: 'lsn-ch11-displacement-current',
  topicId: 'ch11-displacement-current',
  chapterId: 'ch-em-waves',
  order: 5,
  title: {
    en: "Displacement Current & The Ampere-Maxwell Law",
    hi: 'विस्थापन धारा एवं एम्पीयर-मैक्सवेल नियम',
    bn: 'সরণ প্রবাহ ও অ্যাম্পিয়ার-ম্যাক্সওয়েল সূত্র'
  },
  description: {
    en: "Resolution of the capacitor charging paradox, charge continuity equation, mathematical formulation of displacement current density J_d = ∂D/∂t, Ampere-Maxwell law, and electromagnetic symmetry.",
    hi: 'संधारित्र आवेशन विरोधाभास का समाधान, आवेश सातत्य समीकरण, विस्थापन धारा घनत्व J_d = ∂D/∂t का गणितीय निरूपण, एम्पीयर-मैक्सवेल नियम तथा विद्युत चुंबकीय सममिति।',
    bn: 'ক্যাপাসিটর চার্জিং দ্বন্দ্বের সমাধান, আধানের অবিচ্ছিন্নতা সমীকরণ, সরণ প্রবাহ ঘনত্ব J_d = ∂D/∂t এর গাণিতিক প্রতিপাদন, অ্যাম্পিয়ার-ম্যাক্সওয়েল সূত্র এবং তড়িৎচৌম্বকীয় প্রতিসাম্য।'
  },
  estimatedMinutes: 40,
  easyExplanation: {
    en: "When you charge a capacitor, electric current flows through the connecting wires, creating a circular magnetic field around them. But between the capacitor plates, there is only an insulating gap (or vacuum)—no actual electrons can jump across. If classical Ampere's Law were strictly true, the magnetic field would suddenly drop to zero in the gap, breaking mathematical continuity. In 1861, James Clerk Maxwell realized that although no physical electrons flow through the gap, the electric field between the plates is rapidly growing with time! He showed that this changing electric field acts exactly like a real current, which he named the 'Displacement Current' (I_d = ε₀ dΦ_E/dt). Just as a changing magnetic field creates an electric field (Faraday's Law), a changing electric field creates a magnetic field (Maxwell's Law). This beautiful reciprocal symmetry allowed electromagnetic waves to propagate across the universe.",
    hi: 'जब आप किसी संधारित्र को आवेशित करते हैं, तो जोड़ने वाले तारों में धारा बहती है और चारों ओर चुंबकीय क्षेत्र बनता है। परंतु संधारित्र की प्लेटों के बीच केवल खाली स्थान या कुचालक होता है—कोई वास्तविक इलेक्ट्रॉन आर-पार नहीं कूदता। शास्त्रीय एम्पीयर नियम के अनुसार प्लेटों के बीच चुंबकीय क्षेत्र शून्य हो जाना चाहिए था, जो एक बड़ा विरोधाभास था। 1861 में जेम्स क्लर्क मैक्सवेल ने महसूस किया कि भले ही वहां कोई इलेक्ट्रॉन न बह रहा हो, परंतु प्लेटों के बीच विद्युत क्षेत्र समय के साथ तेजी से बढ़ रहा है! उन्होंने सिद्ध किया कि यह समय-परिवर्ती विद्युत क्षेत्र बिल्कुल वास्तविक धारा की तरह व्यवहार करता है, जिसे उन्होंने \'विस्थापन धारा\' कहा: I_d = ε₀ dΦ_E/dt। जैसे बदलता चुंबकीय क्षेत्र विद्युत क्षेत्र बनाता है, वैसे ही बदलता विद्युत क्षेत्र चुंबकीय क्षेत्र बनाता है। इसी खोज से प्रकाश और विद्युत चुंबकीय तरंगों के अस्तित्व का रहस्य खुला।',
    bn: 'যখন কোনো ক্যাপাসিটর চার্জ করা হয়, তখন তারের মধ্য দিয়ে কারেন্ট প্রবাহিত হয়ে চারপাশে চৌম্বক ক্ষেত্র তৈরি করে। কিন্তু ক্যাপাসিটরের পাতের মাঝে শূন্যস্থান বা ইনসুলেটর থাকায় কোনো ইলেকট্রন পার হতে পারে না। চিরায়ত অ্যাম্পিয়ারের সূত্র অনুসারে পাতের মাঝে চৌম্বক ক্ষেত্র হঠাৎ শূন্য হয়ে যাওয়ার কথা, যা একটি বড় বৈজ্ঞানিক সমস্যা ছিল। ১৮৬১ সালে জেমস ক্লার্ক ম্যাক্সওয়েল উপলব্ধি করেন যে কোনো ইলেকট্রন প্রবাহিত না হলেও পাতের মাঝে তড়িৎ ক্ষেত্র সময়ের সাথে দ্রুত বাড়ছে! তিনি দেখান যে এই পরিবর্তনশীল তড়িৎ ক্ষেত্র হুবহু বাস্তব কারেন্টের মতোই চৌম্বক ক্ষেত্র তৈরি করে, যার নাম তিনি দেন \'সরণ প্রবাহ\' (I_d = ε₀ dΦ_E/dt)। যেভাবে পরিবর্তনশীল চৌম্বক ক্ষেত্র তড়িৎ ক্ষেত্র তৈরি করে (ফ্যারাডের সূত্র), ঠিক সেভাবেই পরিবর্তনশীল তড়িৎ ক্ষেত্র চৌম্বক ক্ষেত্র তৈরি করে। এই প্রতিসাম্যই মহাশূন্যে তড়িৎচৌম্বক তরঙ্গের পথ তৈরি করে দেয়।'
  },
  detailedExplanation: {
    en: "The historical catalyst that transformed 19th-century electromagnetism into modern field theory was the Capacitor Charging Paradox. Consider a capacitor being charged by a time-varying conduction current I_c(t) = dq/dt. Apply Ampere's Circuital Law ∮ H · dl = I_enc to a closed circular contour C encircling the feed wire.\n\nContradiction in Classical Ampere’s Law:\n• Surface S1 (flat disk capping contour C, intersected by the wire): Pierced by conduction current I_c, giving ∮ H · dl = I_c.\n• Surface S2 (bulging bag-like surface having the same boundary contour C, but bulging outward to pass between the two capacitor plates): No conduction current pierces S2 because charges cannot jump the dielectric gap (J = 0), giving ∮ H · dl = 0.\nBecause Stokes' theorem requires the line integral around contour C to be independent of the choice of spanning surface, classical Ampere's law produces a severe mathematical inconsistency: I_c = 0!\n\nMathematical Inconsistency via Vector Calculus:\nTake the divergence of classical Ampere's law: ∇ · (∇ × H) = ∇ · J. The divergence of any curl is identically zero: ∇ · (∇ × H) ≡ 0. Thus, classical Ampere's law demands ∇ · J = 0 (solenoidal current). However, the fundamental law of Charge Conservation (Continuity Equation) states: ∇ · J = - ∂ρ / ∂t.\nWhen charges accumulate on capacitor plates (∂ρ/∂t ≠ 0), classical Ampere's law fails catastrophically.\n\nMaxwell's Resolution:\nMaxwell substituted Gauss's Law (ρ = ∇ · D) into the continuity equation:\n∇ · J = - ∂/∂t (∇ · D) = - ∇ · (∂D / ∂t)\nRearranging terms:\n∇ · [J + (∂D / ∂t)] = 0.\nThis proves that the total vector sum [J + ∂D/∂t] is always solenoidal and divergence-free everywhere in the universe! Maxwell identified the term ∂D/∂t as the Displacement Current Density:\nJ_d = ∂D / ∂t = ε0 (∂E / ∂t) + ∂P / ∂t.\n\nThe Ampere-Maxwell Law:\nIn differential form: ∇ × H = J + ∂D / ∂t = J_c + ε (∂E / ∂t).\nIn integral form: ∮_C H · dl = ∫_S (J + ∂D / ∂t) · dA = I_conduction + ε0 (dΦ_E / dt).\n\nEquivalence Across Capacitor Gap:\nBetween ideal parallel plates of area A and charge q:\nElectric flux is Φ_E = E A = (q / ε0 A) A = q / ε0.\nDisplacement current is: I_d = ε0 (dΦ_E / dt) = ε0 · d/dt (q / ε0) = dq / dt = I_c.\nThus, conduction current in the wire transforms seamlessly into an identical displacement current in the gap, preserving complete circuit continuity: I_c = I_d = C (dV/dt).",
    hi: 'शास्त्रीय विद्युत चुंबकत्व को आधुनिक क्षेत्र सिद्धांत में बदलने वाला मुख्य कारक संधारित्र आवेशन विरोधाभास था। जब संधारित्र को धारा I_c(t) = dq/dt से आवेशित किया जाता है, तो तार के चारों ओर एम्पीयर नियम ∮ H · dl लगाने पर:\n• सपाट सतह S1 तार को काटती है: ∮ H · dl = I_c।\n• उभरी हुई सतह S2 प्लेटों के बीच से गुजरती है जहाँ चालक तार नहीं है: ∮ H · dl = 0।\nएक ही लूप के लिए दो अलग-अलग उत्तर आना एक गंभीर गणितीय विरोधाभास था।\n\nसदिश कलन द्वारा असंगति:\nचूंकि किसी भी कर्ल का डाइवर्जेंस सदैव शून्य होता है: ∇ · (∇ × H) = 0, अतः यह ∇ · J = 0 की मांग करता है। परंतु आवेश संरक्षण का नियम है: ∇ · J = -∂ρ/∂t।\nमैक्सवेल ने गॉस नियम (ρ = ∇ · D) को सातत्य समीकरण में रखकर दिखाया कि:\n∇ · [J + ∂D/∂t] = 0।\nमैक्सवेल ने ∂D/∂t को \'विस्थापन धारा घनत्व\' (J_d) का नाम दिया।\n\nएम्पीयर-मैक्सवेल नियम:\nअवकल रूप: ∇ × H = J + ∂D/∂t\nसमाकल रूप: ∮ H · dl = I_c + ε0 (dΦ_E / dt)।\n\nसंधारित्र में I_d = I_c = C (dV/dt) होता है, जिससे परिपथ की निरंतरता बनी रहती है।',
    bn: 'ক্যাপাসিটর চার্জিং দ্বন্দ্ব ছিল ক্লাসিক্যাল বিদ্যুৎচৌম্বকীয় তত্ত্বের প্রধান সংকট। তারের মধ্য দিয়ে কারেন্ট I_c প্রবাহিত হওয়ার সময় এ্যাম্পিয়ারের সূত্র ∮ H · dl প্রয়োগ করলে:\n• সমতল তল S1 তারকে ছেদ করে: ∮ H · dl = I_c।\n• পাতের মধ্যবর্তী তল S2 তে কোনো তার নেই: ∮ H · dl = ০।\nএকই লুপের জন্য দুটি ভিন্ন মান আসা একটি স্পষ্ট অসামঞ্জস্য।\n\nভেক্টর ক্যালকুলাসের অসঙ্গতি:\nযেকোনো কার্লের ডাইভারজেন্স শূন্য: ∇ · (∇ × H) = ০, যা দাবি করে ∇ · J = ০। কিন্তু আধানের অবিচ্ছিন্নতা সূত্র হলো ∇ · J = -∂ρ/∂t।\nম্যাক্সওয়েল গাউসের সূত্র (ρ = ∇ · D) ব্যবহার করে প্রমাণ করেন:\n∇ · [J + ∂D/∂t] = ০।\nএখানে ∂D/∂t হলো \'সরণ প্রবাহ ঘনত্ব\' (J_d)।\n\nঅ্যাম্পিয়ার-ম্যাক্সওয়েল সূত্র:\nঅবকল রূপ: ∇ × H = J + ∂D/∂t\nসমাকলন রূপ: ∮ H · dl = I_c + ε0 (dΦ_E / dt)।\n\nক্যাপাসিটরে I_d = I_c = C (dV/dt) হওয়ায় বর্তনীর সম্পূর্ণ ধারাবাহিকতা অক্ষুণ্ণ থাকে।'
  },
  formulas: [
    {
      id: 'f-displacement-current-density',
      symbol: 'J_d',
      expression: 'J_d = ∂D / ∂t = ε₀ (∂E / ∂t)',
      title: {
        en: 'Displacement Current Density',
        hi: 'विस्थापन धारा घनत्व',
        bn: 'সরণ প্রবাহ ঘনত্ব'
      },
      description: {
        en: 'The effective electric current density produced by a time-varying electric displacement or electric field.',
        hi: 'समय-परिवर्ती विद्युत विस्थापन अथवा विद्युत क्षेत्र द्वारा उत्पन्न प्रभावी धारा घनत्व।',
        bn: 'সময়-পরিবর্তনশীল তড়িৎ সরণ বা তড়িৎ ক্ষেত্র দ্বারা সৃষ্ট কার্যকর তড়িৎ প্রবাহ ঘনত্ব।'
      },
      variables: [
        { symbol: 'J_d', name: { en: 'Displacement current density vector (A/m²)', hi: 'विस्थापन धारा घनत्व सदिश (A/m²)', bn: 'সরণ প্রবাহ ঘনত্ব ভেক্টর (A/m²)' } },
        { symbol: 'D', name: { en: 'Electric displacement field (C/m²)', hi: 'विद्युत विस्थापन क्षेत्र (C/m²)', bn: 'তড়িৎ সরণ ক্ষেত্র (C/m²)' } },
        { symbol: 'E', name: { en: 'Electric field vector (V/m)', hi: 'विद्युत क्षेत्र सदिश (V/m)', bn: 'তড়িৎ ক্ষেত্র ভেক্টর (V/m)' } },
        { symbol: 'ε₀', name: { en: 'Permittivity of vacuum (8.854 × 10⁻¹² F/m)', hi: 'निर्वात का परावैद्युतांक', bn: 'শূন্যস্থানের ভেদ্যতা' } }
      ]
    },
    {
      id: 'f-ampere-maxwell-integral',
      symbol: '∮ H · dl',
      expression: '∮ H · dl = I_c + ε₀ (dΦ_E / dt)',
      title: {
        en: 'Ampere-Maxwell Law (Integral Form)',
        hi: 'एम्पीयर-मैक्सवेल नियम (समाकल रूप)',
        bn: 'অ্যাম্পিয়ার-ম্যাক্সওয়েল সূত্র (সমাকলন রূপ)'
      },
      description: {
        en: 'Magnetic circulation along a closed contour equals total conduction current plus displacement current crossing the bounded surface.',
        hi: 'किसी बंद समोच्च के अनुदिश चुंबकीय परिसंचरण कुल चालन धारा और विस्थापन धारा के योग के बराबर होता है।',
        bn: 'যেকোনো বদ্ধ পথ বরাবর চৌম্বক সঞ্চালন পরিবাহী প্রবাহ ও সরণ প্রবাহের যোগফলের সমান।'
      },
      variables: [
        { symbol: '∮ H · dl', name: { en: 'Magnetic field circulation (A)', hi: 'चुंबकीय क्षेत्र परिसंचरण (A)', bn: 'চৌম্বক ক্ষেত্র সঞ্চালন (A)' } },
        { symbol: 'I_c', name: { en: 'Conduction current piercing surface (A)', hi: 'चालन धारा (A)', bn: 'পরিবাহী প্রবাহ (A)' } },
        { symbol: 'Φ_E', name: { en: 'Electric flux through surface (V·m)', hi: 'विद्युत फ्लक्स (V·m)', bn: 'তড়িৎ ফ্লাক্স (V·m)' } }
      ]
    },
    {
      id: 'f-ampere-maxwell-differential',
      symbol: '∇ × H',
      expression: '∇ × H = J_c + ∂D / ∂t = J_c + ε (∂E / ∂t)',
      title: {
        en: 'Ampere-Maxwell Law (Differential / Point Form)',
        hi: 'एम्पीयर-मैक्सवेल नियम (अवकल रूप)',
        bn: 'অ্যাম্পিয়ার-ম্যাক্সওয়েল সূত্র (ব্যবকলন রূপ)'
      },
      description: {
        en: 'The curl of magnetic field intensity equals the sum of conduction current density and displacement current density.',
        hi: 'चुंबकीय क्षेत्र तीव्रता का कर्ल चालन धारा घनत्व और विस्थापन धारा घनत्व के योग के बराबर होता है।',
        bn: 'চৌম্বক ক্ষেত্র প্রাবল্যের কার্ল পরিবাহী প্রবাহ ঘনত্ব ও সরণ প্রবাহ ঘনত্বের যোগফলের সমান।'
      },
      variables: [
        { symbol: '∇ × H', name: { en: 'Curl of magnetic field intensity (A/m²)', hi: 'चुंबकीय क्षेत्र तीव्रता का कर्ल', bn: 'চৌম্বক ক্ষেত্র প্রাবল্যের কার্ল' } },
        { symbol: 'J_c', name: { en: 'Conduction current density (A/m²)', hi: 'चालन धारा घनत्व (A/m²)', bn: 'পরিবাহী প্রবাহ ঘনত্ব (A/m²)' } },
        { symbol: '∂D/∂t', name: { en: 'Displacement current density (A/m²)', hi: 'विस्थापन धारा घनत्व (A/m²)', bn: 'সরণ প্রবাহ ঘনত্ব (A/m²)' } }
      ]
    },
    {
      id: 'f-capacitor-displacement-current',
      symbol: 'I_d',
      expression: 'I_d = C · (dV / dt) = I_c',
      title: {
        en: 'Displacement Current in a Capacitor',
        hi: 'संधारित्र में विस्थापन धारा',
        bn: 'ক্যাপাসিটরে সরণ প্রবাহ'
      },
      description: {
        en: 'Total displacement current passing across capacitor dielectric plates equals capacitance multiplied by the voltage slew rate.',
        hi: 'संधारित्र प्लेटों के बीच कुल विस्थापन धारा धारिता और वोल्टेज परिवर्तन दर के गुणनफल के बराबर होती है।',
        bn: 'ক্যাপাসিটরের ডাইইলেক্ট্রিকের মধ্য দিয়ে মোট সরণ প্রবাহ হলো ধারকত্ব ও ভোল্টেজ পরিবর্তনের হারের গুণফল।'
      },
      variables: [
        { symbol: 'I_d', name: { en: 'Total displacement current (A)', hi: 'कुल विस्थापन धारा (A)', bn: 'মোট সরণ প্রবাহ (A)' } },
        { symbol: 'C', name: { en: 'Capacitance (Farads, F)', hi: 'धारिता (F)', bn: 'ধারকত্ব (F)' } },
        { symbol: 'dV/dt', name: { en: 'Rate of change of voltage across plates (V/s)', hi: 'वोल्टेज परिवर्तन दर (V/s)', bn: 'ভোল্টেজ পরিবর্তনের হার (V/s)' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-capacitor-paradox-analysis',
      title: {
        en: '1. The Capacitor Paradox and Circuit Continuity',
        hi: '1. संधारित्र विरोधाभास एवं परिपथ सातत्य',
        bn: '১. ক্যাপাসিটর প্যারাডক্স ও বর্তনীর ধারাবাহিকতা'
      },
      content: {
        en: 'Before Maxwell, electrical engineers viewed circuits purely through moving particles of matter: conduction current represented physical mobile electrons bouncing through a metallic lattice. A capacitor represented an absolute dead-end break where conduction current plunged to zero.\n\nMaxwell’s insight revolutionized physics by recognizing that energy and current are field phenomena. Although physical electrons stop at the metallic plate faces, their accumulated charge builds an intense time-varying electric field E(t) across the insulating gap. This changing electric flux dΦ_E/dt generates an identical displacement current I_d = ε0 dΦ_E/dt that bridges the gap seamlessly. In the wires, 100% of the current is conduction current; between the plates, 100% is displacement current; and throughout the entire closed circuit, total current I_total = I_c + I_d is strictly continuous.',
        hi: 'मैक्सवेल से पहले विद्युत धारा को केवल धातु में इलेक्ट्रॉनों की गति माना जाता था। संधारित्र को एक ऐसा रुकावट माना जाता था जहाँ धारा शून्य हो जाती है।\n\nमैक्सवेल ने क्रांति लाते हुए समझाया कि धारा और ऊर्जा वास्तव में क्षेत्र परिघटनाएं हैं। यद्यपि इलेक्ट्रॉन प्लेटों पर रुक जाते हैं, परंतु उनका संचित आवेश प्लेटों के बीच तीव्र समय-परिवर्ती विद्युत क्षेत्र E(t) बनाता है। यह बदलता फ्लक्स ठीक उतनी ही विस्थापन धारा I_d = ε0 dΦ_E/dt उत्पन्न करता है। तारों में धारा चालन रूप में होती है और प्लेटों के बीच विस्थापन रूप में; पूरे परिपथ में कुल धारा I_total = I_c + I_d सदैव निरंतर रहती है।',
        bn: 'ম্যাক্সওয়েলের আগে তড়িৎ প্রবাহকে কেবল ধাতব তারে ইলেকট্রনের প্রবাহ ভাবা হতো। ক্যাপাসিটরকে মনে করা হতো একটি বিচ্ছিন্ন স্থান যেখানে কারেন্ট সম্পূর্ণ শূন্য হয়ে যায়।\n\nম্যাক্সওয়েল উপলব্ধি করেন যে কারেন্ট মূলত ক্ষেত্রীয় ঘটনা। ইলেকট্রন পাতে থেমে গেলেও তাদের জমা আধান পাতের মাঝে দ্রুত পরিবর্তনশীল তড়িৎ ক্ষেত্র E(t) তৈরি করে। এই পরিবর্তনশীল ফ্লাক্স সমপরিমাণ সরণ প্রবাহ I_d = ε0 dΦ_E/dt সৃষ্টি করে। ফলে তারে ১০০% চালন কারেন্ট এবং পাতের মাঝে ১০০% সরণ কারেন্ট প্রবাহিত হয়ে পুরো বর্তনীতে মোট কারেন্ট I_total = I_c + I_d সম্পূর্ণ অবিচ্ছিন্ন থাকে।'
      },
      schematicId: 'circuit-ch11-displacement-current'
    },
    {
      id: 'sec-field-reciprocal-symmetry',
      title: {
        en: '2. Electromagnetic Reciprocity and the Birth of Wave Theory',
        hi: '2. विद्युत चुंबकीय पारस्परिकता एवं तरंग सिद्धांत का जन्म',
        bn: '২. তড়িৎচৌম্বকীয় পারস্পরিক প্রতিসাম্য ও তরঙ্গ তত্ত্বের উৎপত্তি'
      },
      content: {
        en: 'Maxwell’s correction unlocked a magnificent mathematical and physical symmetry:\n• Faraday’s Law: A changing magnetic field creates a circulating electric field: ∇ × E = -∂B/∂t.\n• Ampere-Maxwell Law: A changing electric field creates a circulating magnetic field: ∇ × B = μ0 ε0 (∂E/∂t) (in source-free vacuum).\n\nNotice the reciprocal elegance: an oscillating electric field creates an oscillating magnetic field, which in turn recreates the oscillating electric field, and so on ad infinitum! This dynamic mutual regeneration enables localized electromagnetic energy to detach from antennas and propagate self-sustainingly across billions of light years of empty space without requiring any wires or physical material medium.',
        hi: 'मैक्सवेल के संशोधन ने एक अत्यंत सुंदर भौतिक सममिति स्थापित की:\n• फैराडे का नियम: बदलता चुंबकीय क्षेत्र विद्युत क्षेत्र बनाता है: ∇ × E = -∂B/∂t।\n• एम्पीयर-मैक्सवेल नियम: बदलता विद्युत क्षेत्र चुंबकीय क्षेत्र बनाता है: ∇ × B = μ0 ε0 (∂E/∂t)।\n\nयह पारस्परिकता दर्शाती है कि दोलायमान विद्युत क्षेत्र चुंबकीय क्षेत्र बनाता है, और चुंबकीय क्षेत्र पुनः विद्युत क्षेत्र बनाता है। इस परस्पर पुनर्जनन के कारण विद्युत चुंबकीय ऊर्जा तारों के बिना भी पूरे ब्रह्मांड में प्रकाश की गति से यात्रा कर सकती है।',
        bn: 'ম্যাক্সওয়েলের এই সংযোজন একটি অপূর্ব ভৌত প্রতিসাম্য উন্মোচন করে:\n• ফ্যারাডের সূত্র: পরিবর্তনশীল চৌম্বক ক্ষেত্র তড়িৎ ক্ষেত্র তৈরি করে: ∇ × E = -∂B/∂t।\n• অ্যাম্পিয়ার-ম্যাক্সওয়েল সূত্র: পরিবর্তনশীল তড়িৎ ক্ষেত্র চৌম্বক ক্ষেত্র তৈরি করে: ∇ × B = μ0 ε0 (∂E/∂t)।\n\nএই পারস্পরিক সম্পর্ক নির্দেশ করে: পরিবর্তনশীল তড়িৎ ক্ষেত্র চৌম্বক ক্ষেত্র তৈরি করে, যা আবার পরিবর্তনশীল তড়িৎ ক্ষেত্র তৈরি করে! এই অবিরাম প্রক্রিয়ার ফলেই মহাশূন্যে কোনো মাধ্যম ছাড়াই আলোর বেগে তড়িৎচৌম্বক তরঙ্গ ছড়িয়ে পড়তে পারে।'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-displacement-current',
      title: {
        en: "Capacitor Charging Circuit: Conduction vs Displacement Current",
        hi: 'संधारित्र आवेशन परिपथ: चालन बनाम विस्थापन धारा',
        bn: 'ক্যাপাসিটর চার্জিং বর্তনী: পরিবাহী বনাম সরণ প্রবাহ'
      },
      caption: {
        en: "Parallel plate capacitor being charged by conduction current I_c, displaying Gaussian-Amperian surfaces S1 (wire) and S2 (gap), uniform displacement current J_d = ε0 ∂E/∂t, and the resulting circular magnetic field lines B.",
        hi: 'चालन धारा I_c द्वारा आवेशित होता समानांतर प्लेट संधारित्र, सतहें S1 और S2, प्लेटों के बीच विस्थापन धारा घनत्व J_d, तथा उत्पन्न वृत्ताकार चुंबकीय क्षेत्र B।',
        bn: 'পরিবাহী প্রবাহ I_c দ্বারা চার্জিত সমান্তরাল পাত ধারক, তল S1 ও S2, পাতের মাঝে সুষম সরণ প্রবাহ J_d এবং এর ফলে উৎপন্ন বৃত্তাকার চৌম্বক বলরেখা B।'
      },
      svgType: 'circuit-ch11-displacement-current'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-circular-capacitor-magnetic-field',
      problem: {
        en: 'A parallel plate capacitor consists of two circular metal plates of radius R = 8.0 cm separated by an air gap d = 3.0 mm. The capacitor is being charged such that the conduction current in the connecting lead wires is a constant I_c = 1.80 A. Determine: (a) the displacement current density J_d between the plates, (b) the time rate of change of electric field dE/dt, and (c) the induced magnetic field B inside the plates at radial distance r = 4.0 cm from the central axis.',
        hi: 'त्रिज्या R = 8.0 सेमी तथा वायु अंतराल d = 3.0 मिमी की दो वृत्ताकार प्लेटों वाला संधारित्र 1.80 A की स्थिर चालन धारा से आवेशित किया जा रहा है। ज्ञात कीजिए: (a) प्लेटों के बीच विस्थापन धारा घनत्व J_d, (b) विद्युत क्षेत्र परिवर्तन दर dE/dt, तथा (c) केंद्रीय अक्ष से r = 4.0 सेमी की दूरी पर प्रेरित चुंबकीय क्षेत्र B।',
        bn: 'R = ৮.০ সেমি ব্যাসার্ধ এবং d = ৩.০ মিমি বায়ু ব্যবধান বিশিষ্ট দুটি বৃত্তাকার পাতের একটি ধারক I_c = ১.৮০ A স্থির পরিবাহী প্রবাহ দ্বারা চার্জ করা হচ্ছে। নির্ণয় করুন: (a) পাতদ্বয়ের মাঝে সরণ প্রবাহ ঘনত্ব J_d, (b) তড়িৎ ক্ষেত্র পরিবর্তনের হার dE/dt, এবং (c) অক্ষ থেকে r = ৪.০ সেমি ব্যাসার্ধীয় দূরত্বে আবিষ্ট চৌম্বক ক্ষেত্র B।'
      },
      solution: {
        en: 'Step 1: Compute plate area A:\nA = π R² = π · (0.080 m)² = 0.020106 m².\n\nStep 2: Total displacement current between plates equals conduction current:\nI_d = I_c = 1.80 A.\nDisplacement current density J_d is uniformly distributed across plate area A:\nJ_d = I_d / A = 1.80 A / 0.020106 m² = 89.52 A/m².\n\nStep 3: Calculate time rate of change of electric field dE/dt:\nSince J_d = ε0 (dE/dt):\ndE/dt = J_d / ε0 = (89.52 A/m²) / (8.854 × 10⁻¹² F/m) = 1.011 × 10¹³ V/(m·s) = 10.11 TV/(m·s).\n\nStep 4: Compute induced magnetic field B at r = 4.0 cm = 0.040 m (r < R):\nBy the Ampere-Maxwell Law along a circular path of radius r:\n∮ B · dl = μ0 · I_d,enclosed\nB · (2π r) = μ0 · [J_d · (π r²)] = μ0 · J_d · π r²\nB(r) = (μ0 · J_d · r) / 2 = (μ0 · I_c · r) / (2 π R²)\nEvaluating:\nB(0.04 m) = (4π × 10⁻⁷ · 89.52 · 0.040) / 2 = (4π × 10⁻⁷ · 1.80 · 0.040) / [2 π · (0.080)²]\nB = (2 × 10⁻⁷ · 1.80 · 0.040) / 0.0064 = (1.44 × 10⁻⁷) / 0.0064 = 2.25 × 10⁻⁵ Tesla = 22.5 μT.',
        hi: 'चरण 1: क्षेत्रफल A = π(0.08)² = 0.0201 m²।\nचरण 2: J_d = I_c / A = 1.80 / 0.0201 = 89.52 A/m²।\nचरण 3: dE/dt = J_d / ε0 = 89.52 / (8.854 × 10⁻¹²) = 1.01 × 10¹³ V/(m·s)।\nचरण 4: r = 4.0 सेमी पर B:\nB = (μ0 I_c r) / (2π R²) = (2 × 10⁻⁷ × 1.80 × 0.04) / (0.08)² = 2.25 × 10⁻⁵ T = 22.5 μT।',
        bn: 'ধাপ ১: ক্ষেত্রফল A = π(০.০৮)² = ০.০২০১ m²।\nধাপ ২: J_d = I_c / A = ১.৮০ / ০.০২০১ = ৮৯.৫২ A/m²।\nধাপ ৩: dE/dt = J_d / ε0 = ৮৯.৫২ / (৮.৮৫৪ × ১০⁻১২) = ১.০১ × ১০¹³ V/(m·s)।\nধাপ ৪: r = ৪.০ সেমিতে B:\nB = (μ0 I_c r) / (২π R²) = (২ × ১০⁻৭ × ১.৮০ × ০.০৪) / (০.০৮)² = ২.২৫ × ১০⁻৫ T = ২২.৫ μT।'
      },
      givenValues: {
        'R': '8.0 cm (0.080 m)',
        'd': '3.0 mm',
        'I_c': '1.80 A',
        'r': '4.0 cm (0.040 m)',
        'ε0': '8.854 × 10⁻¹² F/m'
      },
      finalAnswer: {
        en: 'J_d = 89.52 A/m²;  dE/dt = 1.01 × 10¹³ V/(m·s);  B(r = 4.0 cm) = 22.5 μT',
        hi: 'J_d = 89.52 A/m²;  dE/dt = 1.01 × 10¹³ V/(m·s);  B(r = 4.0 सेमी) = 22.5 μT',
        bn: 'J_d = ৮৯.৫২ A/m²;  dE/dt = ১.০১ × ১০¹³ V/(m·s);  B(r = ৪.০ সেমি) = ২২.৫ μT'
      }
    },
    {
      id: 'ex-ac-displacement-current-dielectric',
      problem: {
        en: 'A high-voltage ceramic capacitor of capacitance C = 470 pF with relative permittivity εr = 85 is driven by an alternating voltage v(t) = 3500 sin(2π · 100 × 10³ t) Volts (frequency f = 100 kHz). Calculate: (a) the peak conduction current I_c,max in the terminal leads, (b) the peak displacement current I_d,max across the ceramic dielectric, and (c) the phase relationship between the applied voltage and the displacement current.',
        hi: 'आपेक्षिक परावैद्युतांक εr = 85 तथा धारिता C = 470 pF का एक सिरेमिक संधारित्र v(t) = 3500 sin(2π · 100 kHz t) वोल्ट से जुड़ा है। ज्ञात कीजिए: (a) लीड तारों में शिखर चालन धारा I_c,max, (b) सिरेमिक परावैद्युत में शिखर विस्थापन धारा I_d,max, तथा (c) वोल्टेज और विस्थापन धारा के बीच कला संबंध।',
        bn: 'আপেক্ষিক ভেদ্যতা εr = ৮৫ এবং ধারকত্ব C = ৪৭০ pF বিশিষ্ট একটি সিরামিক ধারক v(t) = ৩৫০০ sin(২π · ১০০ kHz t) ভোল্ট এসি উৎসের সাথে যুক্ত। নির্ণয় করুন: (a) তারে শীর্ষ পরিবাহী প্রবাহ I_c,max, (b) সিরামিক ডাইইলেক্ট্রিকে শীর্ষ সরণ প্রবাহ I_d,max, এবং (c) ভোল্টেজ ও সরণ প্রবাহের মধ্যকার দশা পার্থক্য।'
      },
      solution: {
        en: 'Step 1: Compute angular frequency ω:\nω = 2π f = 2 · π · 100,000 Hz = 628,318.5 rad/s = 6.283 × 10⁵ rad/s.\n\nStep 2: Conduction current in leads is I_c(t) = C (dv/dt):\nv(t) = V0 sin(ω t),  where V0 = 3500 V.\ndv/dt = V0 ω cos(ω t).\nI_c(t) = C V0 ω cos(ω t) = I_c,max cos(ω t).\nI_c,max = C V0 ω = (470 × 10⁻¹² F) · (3500 V) · (6.283 × 10⁵ rad/s) = 1.033 A.\n\nStep 3: Displacement current I_d across the dielectric:\nBy electromagnetic continuity, I_d(t) = I_c(t) at every instant.\nTherefore, I_d,max = I_c,max = 1.033 A.\n\nStep 4: Phase relationship:\nv(t) = 3500 sin(ω t)\nI_d(t) = 1.033 cos(ω t) = 1.033 sin(ω t + 90°)\nThe displacement current leads the applied voltage by exactly 90° (π/2 radians), matching standard capacitive impedance behavior.',
        hi: 'चरण 1: ω = 2π(100 kHz) = 6.283 × 10⁵ rad/s।\nचरण 2: I_c,max = C V0 ω = (470 × 10⁻¹²)(3500)(6.283 × 10⁵) = 1.033 A।\nचरण 3: I_d,max = I_c,max = 1.033 A (परिपथ सातत्य से)।\nचरण 4: कला संबंध: धारा I_d(t) = 1.033 cos(ω t) वोल्टेज से 90° (π/2 रेडियन) आगे (lead) चलती है।',
        bn: 'ধাপ ১: ω = ২π(১০০ kHz) = ৬.২৮৩ × ১০⁵ rad/s।\nধাপ ২: I_c,max = C V0 ω = (৪৭০ × ১০⁻১২)(৩৫০০)(৬.২৮৩ × ১০⁵) = ১.০৩৩ A।\nধাপ ৩: I_d,max = I_c,max = ১.০৩৩ A (বর্তনী ধারাবাহিকতা অনুসারে)।\nধাপ ৪: দশা সম্পর্ক: সরণ প্রবাহ I_d ভোল্টেজ থেকে ৯০° (π/২ রেডিয়ান) এগিয়ে (lead করে)।'
      },
      givenValues: {
        'C': '470 pF',
        'εr': '85',
        'V0': '3500 V',
        'f': '100 kHz (10⁵ Hz)'
      },
      finalAnswer: {
        en: 'I_c,max = 1.033 A;  I_d,max = 1.033 A;  Displacement current leads applied voltage by 90° (π/2 rad)',
        hi: 'I_c,max = 1.033 A;  I_d,max = 1.033 A;  विस्थापन धारा वोल्टेज से 90° अग्रगामी है',
        bn: 'I_c,max = ১.০৩৩ A;  I_d,max = ১.০৩৩ A;  সরণ প্রবাহ ভোল্টেজ থেকে ৯০° দশায় এগিয়ে থাকে'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Radio Frequency (RF) Antenna Transmission: Antennas launch electromagnetic waves into free space where conduction current J_c = 0 and displacement current J_d = ε0 ∂E/∂t carries 100% of wave power.',
      'High-Frequency AC Capacitor Operation: Ensuring continuous impedance matching and displacement current flow across dielectric filters in DC-DC converters.',
      'Microwave Heating: Rapidly alternating electric fields at 2.45 GHz create intense displacement currents and molecular dipole relaxation in food moisture.',
      'Fiber Optic Waveguides: Light propagation along silica fiber cores is governed by displacement current density terms oscillating at 193 THz.',
      'Printed Circuit Board (PCB) High-Speed Signal Integrity: Modeling parasitic displacement current leakage across adjacent microstrip traces to prevent high-frequency crosstalk.'
    ],
    hi: [
      'रेडियो आवृत्ति (RF) एंटीना ट्रांसमिशन: एंटीना मुक्त अंतरिक्ष में विद्युत चुंबकीय तरंगें छोड़ते हैं जहाँ चालन धारा शून्य होती है और केवल विस्थापन धारा J_d तरंग ऊर्जा ले जाती है।',
      'उच्च आवृत्ति एसी संधारित्र संचालन: डीसी-डीसी कन्वर्टर्स में ढांकता हुआ फिल्टर में निरंतर विस्थापन धारा प्रवाह सुनिश्चित करना।',
      'माइक्रोवेव हीटिंग: 2.45 GHz पर तेजी से बदलता विद्युत क्षेत्र भोजन में तीव्र विस्थापन धारा और द्विध्रुव घूर्णन द्वारा ताप उत्पन्न करता है।',
      'फाइबर ऑप्टिक वेवगाइड: सिलिका फाइबर में 193 THz पर दोलन करने वाले विस्थापन धारा पदों द्वारा प्रकाश का संचरण होता है।',
      'पीसीबी सिग्नल अखंडता: उच्च-आवृत्ति क्रॉसटॉक को रोकने के लिए निकटवर्ती सर्किट ट्रैक के बीच परजीवी विस्थापन धारा रिसाव का विश्लेषण।'
    ],
    bn: [
      'রেডিও ফ্রিকোয়েন্সি (RF) অ্যান্টেনা ট্রান্সমিশন: অ্যান্টেনা মহাশূন্যে তরঙ্গ নির্গমন করে যেখানে কোনো পরিবাহী প্রবাহ থাকে না, ১০০% শক্তি সরণ প্রবাহ J_d দ্বারা পরিবাহিত হয়।',
      'উচ্চ-ফ্রিকোয়েন্সি এসি ক্যাপাসিটর পরিচালনা: সুইচ মোড কনভার্টারে ডাইইলেক্ট্রিকের মধ্য দিয়ে অবিচ্ছিন্ন সরণ প্রবাহ নিশ্চিতকরণ।',
      'মাইক্রোওয়েভ হিটিং: ২.৪৫ GHz কম্পাঙ্কে দ্রুত পরিবর্তনশীল তড়িৎ ক্ষেত্র সরণ প্রবাহ তৈরি করে জলের অণুর ঘূর্ণনের মাধ্যমে তাপ উৎপন্ন করে।',
      'ফাইবার অপটিক ওয়েভগাইড: অপটিক্যাল ফাইবার কোরের মধ্য দিয়ে ১৯৩ THz কম্পাঙ্কের সরণ প্রবাহের সাহায্যে আলোর সিগন্যাল ভ্রমণ করে।',
      'উচ্চ গতির পিসিবি সার্কিট ডিজাইন: পাশাপাশি ট্র্যাকিং তারের মধ্যে প্যারাসিটিক সরণ প্রবাহ লিকেজ নিয়ন্ত্রণ করে সিগন্যাল বিকৃতি রোধ।'
    ]
  },
  importantPoints: {
    en: [
      'Displacement current is NOT a flow of physical charged particles; it is the magnetic source effect produced by a time-varying electric field.',
      'The displacement current density vector is J_d = ∂D/∂t = ε0 (∂E/∂t) + ∂P/∂t.',
      'The Ampere-Maxwell Law in differential form is ∇ × H = J_c + ∂D/∂t, making it fully compatible with the charge continuity equation ∇ · J = -∂ρ/∂t.',
      'Inside a charging capacitor, total displacement current equals total conduction current in the feed wires: I_d = I_c.',
      'Displacement current generates a circulating magnetic field B exactly like real conduction current.',
      'The combination of Faraday’s law (∂B/∂t produces E) and the Ampere-Maxwell law (∂E/∂t produces B) enables the propagation of electromagnetic waves through pure vacuum.'
    ],
    hi: [
      'विस्थापन धारा वास्तविक आवेशित कणों का प्रवाह नहीं है; यह समय-परिवर्ती विद्युत क्षेत्र द्वारा उत्पन्न चुंबकीय प्रभाव है।',
      'विस्थापन धारा घनत्व सदिश J_d = ∂D/∂t = ε0 (∂E/∂t) + ∂P/∂t होता है।',
      'अवकल रूप में एम्पीयर-मैक्सवेल नियम ∇ × H = J_c + ∂D/∂t है, जो आवेश सातत्य समीकरण ∇ · J = -∂ρ/∂t के पूर्णतः अनुकूल है।',
      'आवेशित होते संधारित्र के भीतर कुल विस्थापन धारा बाहरी तारों की चालन धारा के ठीक बराबर होती है: I_d = I_c।',
      'विस्थापन धारा बिल्कुल वास्तविक चालन धारा की भांति अपने चारों ओर वृत्ताकार चुंबकीय क्षेत्र B बनाती है।',
      'फैराडे के नियम और एम्पीयर-मैक्सवेल नियम के परस्पर युग्मन से ही निर्वात में विद्युत चुंबकीय तरंगों का संचरण संभव होता है।'
    ],
    bn: [
      'সরণ প্রবাহ কোনো বাস্তব আধান কণার শারীরিক প্রবাহ নয়; এটি সময়-পরিবর্তনশীল তড়িৎ ক্ষেত্র দ্বারা সৃষ্ট চৌম্বক প্রভাব।',
      'সরণ প্রবাহ ঘনত্ব ভেক্টর হলো J_d = ∂D/∂t = ε0 (∂E/∂t) + ∂P/∂t।',
      'অ্যাম্পিয়ার-ম্যাক্সওয়েল সূত্রের অবকল রূপ ∇ × H = J_c + ∂D/∂t আধানের অবিচ্ছিন্নতা সমীকরণ ∇ · J = -∂ρ/∂t এর সাথে সম্পূর্ণ সামঞ্জস্যপূর্ণ।',
      'চার্জিত ক্যাপাসিটরের অভ্যন্তরে মোট সরণ প্রবাহ তারের পরিবাহী প্রবাহের হুবহু সমান: I_d = I_c।',
      'সরণ প্রবাহ বাস্তব কারেন্টের মতোই চারপাশে ঘূর্ণনশীল চৌম্বক ক্ষেত্র B তৈরি করতে সক্ষম।',
      'ফ্যারাডের সূত্র ও অ্যাম্পিয়ার-ম্যাক্সওয়েল সূত্রের যুগল মেলবন্ধনই শূন্য মাধ্যমে তড়িৎচৌম্বক তরঙ্গের বিস্তারের মূল রহস্য।'
    ]
  },
  commonMistakes: {
    en: [
      'Assuming displacement current produces Joule heating (I²R losses); since displacement current involves no physical charge collisions with a crystal lattice, ideal vacuum displacement current dissipates zero heat.',
      'Thinking displacement current exists only inside capacitors; any time-varying electric field anywhere in the universe (such as sunlight propagating through deep space) constitutes displacement current.',
      'Forgetting the permittivity factor ε0 when computing J_d from ∂E/∂t in vacuum.',
      'Believing classical Ampere’s law is valid for high frequencies; classical Ampere’s law is strictly limited to static DC or slowly varying low-frequency quasi-static regimes.'
    ],
    hi: [
      'यह मान लेना कि विस्थापन धारा जूल तापन (I²R हानि) उत्पन्न करती है; चूंकि इसमें कोई भौतिक कण नहीं टकराते, अतः निर्वात विस्थापन धारा कोई ऊष्मा नष्ट नहीं करती।',
      'यह सोचना कि विस्थापन धारा केवल संधारित्र के भीतर ही होती है; ब्रह्मांड में कहीं भी समय-परिवर्ती विद्युत क्षेत्र विस्थापन धारा का प्रतिनिधित्व करता है।',
      'निर्वात में ∂E/∂t से J_d निकालते समय परावैद्युतांक ε0 को शामिल करना भूल जाना।',
      'यह विश्वास करना कि शास्त्रीय एम्पीयर नियम उच्च आवृत्तियों पर भी काम करता है; यह केवल स्थिर DC के लिए ही सही है।'
    ],
    bn: [
      'মনে করা যে সরণ প্রবাহেও জুল তাপীয় অপচয় (I²R লস) ঘটে; কোনো কণার সংঘর্ষ না থাকায় আদর্শ শূন্যস্থানে সরণ প্রবাহে কোনো তাপ অপচয় হয় না।',
      'ভেবে নেওয়া যে সরণ প্রবাহ কেবল ক্যাপাসিটরের মধ্যেই সীমাবদ্ধ; মহাশূন্যে যেকোনো পরিবর্তনশীল তড়িৎ ক্ষেত্রই প্রকৃতপক্ষে সরণ প্রবাহ।',
      'শূন্য মাধ্যমে ∂E/∂t থেকে J_d গণনার সময় ভেদ্যতা ধ্রুবক ε0 গুণ করতে ভুলে যাওয়া।',
      'উচ্চ কম্পাঙ্কে চিরায়ত অ্যাম্পিয়ারের সূত্র প্রযোজ্য হবে বলে ভুল বিশ্বাস করা; এটি কেবল ডিসি বা ধীর গতির ক্ষেত্রে সীমাবদ্ধ।'
    ]
  },
  keyTakeaways: {
    en: [
      "Maxwell's displacement current J_d = ∂D/∂t resolved the capacitor paradox and unified charge conservation with electrodynamics.",
      'The Ampere-Maxwell Law ∇ × H = J_c + ∂D/∂t proves that both electric currents and changing electric fields act as sources of magnetic fields.',
      'Across a capacitor dielectric gap, displacement current exactly equals the terminal conduction current: I_d = C dV/dt = I_c.',
      'Displacement current creates real, measurable magnetic fields detected experimentally using search coils.',
      'The reciprocal coupling between Faraday’s Law and the Ampere-Maxwell Law forms the complete mathematical basis for electromagnetic wave propagation.'
    ],
    hi: [
      'मैक्सवेल की विस्थापन धारा J_d = ∂D/∂t ने संधारित्र विरोधाभास को सुलझाया और आवेश संरक्षण को विद्युतगतिकी से जोड़ा।',
      'एम्पीयर-मैक्सवेल नियम ∇ × H = J_c + ∂D/∂t सिद्ध करता है कि विद्युत धारा और बदलता विद्युत क्षेत्र दोनों चुंबकीय क्षेत्र के स्रोत हैं।',
      'संधारित्र के ढांकता हुआ अंतराल में विस्थापन धारा ठीक चालन धारा के बराबर होती है: I_d = C dV/dt = I_c।',
      'विस्थापन धारा वास्तविक, मापने योग्य चुंबकीय क्षेत्र उत्पन्न करती है।',
      'फैराडे के नियम और एम्पीयर-मैक्सवेल नियम का परस्पर संबंध विद्युत चुंबकीय तरंगों के अस्तित्व का मूल आधार है।'
    ],
    bn: [
      'ম্যাক্সওয়েলের সরণ প্রবাহ J_d = ∂D/∂t ক্যাপাসিটর প্যারাডক্স দূর করে আধান সংরক্ষণকে পূর্ণতা দিয়েছে।',
      'অ্যাম্পিয়ার-ম্যাক্সওয়েল সূত্র ∇ × H = J_c + ∂D/∂t প্রমাণ করে যে পরিবাহী প্রবাহ এবং পরিবর্তনশীল তড়িৎ ক্ষেত্র উভয়ই চৌম্বক ক্ষেত্রের উৎস।',
      'ক্যাপাসিটরের পাতের মাঝে সরণ প্রবাহ প্রান্তীয় পরিবাহী প্রবাহের নিখুঁত সমান: I_d = C dV/dt = I_c।',
      'সরণ প্রবাহ বাস্তব পরিমাপযোগ্য চৌম্বক ক্ষেত্র তৈরি করে যা পরীক্ষামূলকভাবে প্রমাণিত।',
      'ফ্যারাডের সূত্র ও অ্যাম্পিয়ার-ম্যাক্সওয়েল সূত্রের পারস্পরিক সংযুক্তি তড়িৎচৌম্বক তরঙ্গ বিস্তারের ভিত্তিপ্রস্তর।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch11-l05-01',
      question: {
        en: 'What is the mathematical expression for the displacement current density J_d in terms of electric displacement D?',
        hi: 'विद्युत विस्थापन D के पदों में विस्थापन धारा घनत्व J_d का गणितीय व्यंजक क्या है?',
        bn: 'তড়িৎ সরণ D এর সাপেক্ষে সরণ প্রবাহ ঘনত্ব J_d এর গাণিতিক সমীকরণ কোনটি?'
      },
      options: [
        { id: 'opt-a', text: { en: 'J_d = ∇ · D', hi: 'J_d = ∇ · D', bn: 'J_d = ∇ · D' } },
        { id: 'opt-b', text: { en: 'J_d = ∂D / ∂t', hi: 'J_d = ∂D / ∂t', bn: 'J_d = ∂D / ∂t' } },
        { id: 'opt-c', text: { en: 'J_d = ∇ × D', hi: 'J_d = ∇ × D', bn: 'J_d = ∇ × D' } },
        { id: 'opt-d', text: { en: 'J_d = -∇ D', hi: 'J_d = -∇ D', bn: 'J_d = -∇ D' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'Displacement current density is defined as the time rate of change of electric displacement: J_d = ∂D/∂t (or ε0 ∂E/∂t in vacuum).',
        hi: 'विस्थापन धारा घनत्व को विद्युत विस्थापन के समय परिवर्तन की दर के रूप में परिभाषित किया जाता है: J_d = ∂D/∂t।',
        bn: 'সরণ প্রবাহ ঘনত্বকে তড়িৎ সরণের সময় পরিবর্তনের হার হিসেবে সংজ্ঞায়িত করা হয়: J_d = ∂D/∂t।'
      }
    },
    {
      id: 'mcq-ch11-l05-02',
      question: {
        en: 'What is the differential form of the Ampere-Maxwell Law?',
        hi: 'एम्पीयर-मैक्सवेल नियम का अवकल रूप क्या है?',
        bn: 'অ্যাম্পিয়ার-ম্যাক্সওয়েল সূত্রের অবকল রূপ কোনটি?'
      },
      options: [
        { id: 'opt-a', text: { en: '∇ × H = J_c + ∂D/∂t', hi: '∇ × H = J_c + ∂D/∂t', bn: '∇ × H = J_c + ∂D/∂t' } },
        { id: 'opt-b', text: { en: '∇ · H = J_c + ∂D/∂t', hi: '∇ · H = J_c + ∂D/∂t', bn: '∇ · H = J_c + ∂D/∂t' } },
        { id: 'opt-c', text: { en: '∇ × E = J_c - ∂B/∂t', hi: '∇ × E = J_c - ∂B/∂t', bn: '∇ × E = J_c - ∂B/∂t' } },
        { id: 'opt-d', text: { en: '∇ × H = J_c - ∂D/∂t', hi: '∇ × H = J_c - ∂D/∂t', bn: '∇ × H = J_c - ∂D/∂t' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'The Ampere-Maxwell law states that the curl of magnetic field intensity equals conduction current density plus displacement current density: ∇ × H = J_c + ∂D/∂t.',
        hi: 'एम्पीयर-मैक्सवेल नियम बताता है कि चुंबकीय क्षेत्र तीव्रता का कर्ल चालन धारा घनत्व और विस्थापन धारा घनत्व के योग के बराबर होता है: ∇ × H = J_c + ∂D/∂t।',
        bn: 'অ্যাম্পিয়ার-ম্যাক্সওয়েল সূত্রানুযায়ী চৌম্বক প্রাবল্যের কার্ল হলো পরিবাহী প্রবাহ ঘনত্ব ও সরণ প্রবাহ ঘনত্বের সমষ্টি: ∇ × H = J_c + ∂D/∂t।'
      }
    },
    {
      id: 'mcq-ch11-l05-03',
      question: {
        en: 'During the charging of a parallel-plate capacitor, how does the total displacement current I_d between the plates compare to the conduction current I_c in the connecting wires?',
        hi: 'समानांतर प्लेट संधारित्र के आवेशन के दौरान प्लेटों के बीच कुल विस्थापन धारा I_d जोड़ने वाले तारों की चालन धारा I_c से किस प्रकार संबंधित होती है?',
        bn: 'সমান্তরাল পাত ধারক চার্জ করার সময় পাতের মধ্যবর্তী মোট সরণ প্রবাহ I_d সংযোগকারী তারের পরিবাহী প্রবাহ I_c এর সাথে কীভাবে সম্পর্কিত?'
      },
      options: [
        { id: 'opt-a', text: { en: 'I_d is strictly zero', hi: 'I_d सर्वथा शून्य होती है', bn: 'I_d সর্বদা শূন্য থাকে' } },
        { id: 'opt-b', text: { en: 'I_d is exactly equal to I_c (I_d = I_c)', hi: 'I_d बिल्कुल I_c के बराबर होती है (I_d = I_c)', bn: 'I_d হুবহু I_c এর সমান (I_d = I_c)' } },
        { id: 'opt-c', text: { en: 'I_d is much greater than I_c', hi: 'I_d का मान I_c से बहुत अधिक होता है', bn: 'I_d এর মান I_c এর চেয়ে অনেক বেশি' } },
        { id: 'opt-d', text: { en: 'I_d is 180° out of phase with I_c', hi: 'I_d और I_c में 180° का कला अंतर होता है', bn: 'I_d ও I_c এর মধ্যে ১৮০° দশা পার্থক্য থাকে' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'By circuit continuity, I_d = ε0 (dΦ_E/dt) = dq/dt = I_c. The displacement current in the gap matches the conduction current in the leads perfectly at all times.',
        hi: 'परिपथ सातत्य से I_d = dq/dt = I_c। प्लेटों के बीच विस्थापन धारा हर क्षण तारों की चालन धारा के पूर्णतः बराबर होती है।',
        bn: 'বর্তনী ধারাবাহিকতা অনুসারে I_d = dq/dt = I_c। পাতের মাঝে সরণ প্রবাহ সর্বদা তারের পরিবাহী প্রবাহের সম্পূর্ণ সমান থাকে।'
      }
    },
    {
      id: 'mcq-ch11-l05-04',
      question: {
        en: 'What fundamental equation of electrodynamics compelled Maxwell to modify classical Ampere’s Law?',
        hi: 'विद्युतगतिकी के किस मौलिक समीकरण ने मैक्सवेल को शास्त्रीय एम्पीयर नियम को संशोधित करने के लिए विवश किया?',
        bn: 'তড়িৎগতিবিদ্যার কোন মৌলিক সমীকরণ ম্যাক্সওয়েলকে চিরায়ত অ্যাম্পিয়ারের সূত্র সংশোধনে বাধ্য করেছিল?'
      },
      options: [
        { id: 'opt-a', text: { en: 'The Continuity Equation for Electric Charge (∇ · J = -∂ρ/∂t)', hi: 'विद्युत आवेश का सातत्य समीकरण (∇ · J = -∂ρ/∂t)', bn: 'তড়িৎ আধানের অবিচ্ছিন্নতা সমীকরণ (∇ · J = -∂ρ/∂t)' } },
        { id: 'opt-b', text: { en: "Newton's Third Law of Motion", hi: 'न्यूटन का गति का तीसरा नियम', bn: 'নিউটনের গতির তৃতীয় সূত্র' } },
        { id: 'opt-c', text: { en: "Snell's Law of Refraction", hi: 'स्नेल का अपवर्तन नियम', bn: 'স্নেলের প্রতিসরণ সূত্র' } },
        { id: 'opt-d', text: { en: "Coulomb's Law of Electrostatic Force", hi: 'कूलॉम का स्थिरवैद्युत बल नियम', bn: 'কুলম্বের স্থিরতড়িৎ বল সূত্র' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'Because ∇ · (∇ × H) ≡ 0, classical Ampere’s law demanded ∇ · J = 0, directly contradicting the Continuity Equation ∇ · J = -∂ρ/∂t for time-varying charges.',
        hi: '∇ · (∇ × H) ≡ 0 होने से शास्त्रीय नियम ∇ · J = 0 मांगता था, जो सातत्य समीकरण ∇ · J = -∂ρ/∂t का सीधा खंडन करता था।',
        bn: 'যেহেতু ∇ · (∇ × H) ≡ ০, তাই চিরায়ত সূত্র ∇ · J = ০ দাবি করতো, যা পরিবর্তনশীল আধানের অবিচ্ছিন্নতা সমীকরণ ∇ · J = -∂ρ/∂t এর সাথে সাংঘর্ষিক ছিল।'
      }
    },
    {
      id: 'mcq-ch11-l05-05',
      question: {
        en: 'A parallel plate capacitor of area A and plate separation d is filled with vacuum. If the voltage across it changes at rate dV/dt, what is the displacement current density J_d between the plates?',
        hi: 'क्षेत्रफल A और प्लेट पृथक्करण d वाले एक निर्वात संधारित्र में वोल्टेज dV/dt की दर से बदलता है। प्लेटों के बीच विस्थापन धारा घनत्व J_d क्या होगा?',
        bn: 'A ক্ষেত্রফল এবং d দূরত্ব বিশিষ্ট একটি বায়ু ধারকের ভোল্টেজ dV/dt হারে পরিবর্তিত হচ্ছে। পাতদ্বয়ের মাঝে সরণ প্রবাহ ঘনত্ব J_d কত হবে?'
      },
      options: [
        { id: 'opt-a', text: { en: 'J_d = (ε₀ / d) · (dV / dt)', hi: 'J_d = (ε₀ / d) · (dV / dt)', bn: 'J_d = (ε₀ / d) · (dV / dt)' } },
        { id: 'opt-b', text: { en: 'J_d = ε₀ · d · (dV / dt)', hi: 'J_d = ε₀ · d · (dV / dt)', bn: 'J_d = ε₀ · d · (dV / dt)' } },
        { id: 'opt-c', text: { en: 'J_d = (ε₀ · A / d) · (dV / dt)', hi: 'J_d = (ε₀ · A / d) · (dV / dt)', bn: 'J_d = (ε₀ · A / d) · (dV / dt)' } },
        { id: 'opt-d', text: { en: 'Zero', hi: 'शून्य', bn: 'শূন্য' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'Electric field is E = V / d, so dE/dt = (1/d) · (dV/dt). Since J_d = ε0 (dE/dt), we get J_d = (ε0 / d) · (dV/dt). Note that total current is I_d = J_d · A = (ε0 A / d)(dV/dt) = C (dV/dt).',
        hi: 'E = V / d होने से dE/dt = (1/d)(dV/dt)। अतः J_d = ε0(dE/dt) = (ε0 / d)(dV/dt)।',
        bn: 'E = V / d হওয়ায় dE/dt = (১/d)(dV/dt)। অতএব J_d = ε0(dE/dt) = (ε0 / d)(dV/dt)।'
      }
    },
    {
      id: 'mcq-ch11-l05-06',
      question: {
        en: 'Does displacement current passing through an ideal vacuum produce Joule heat (I²R thermal loss)?',
        hi: 'क्या आदर्श निर्वात से गुजरने वाली विस्थापन धारा जूल ऊष्मा (I²R तापीय हानि) उत्पन्न करती है?',
        bn: 'আদর্শ শূন্যস্থানের মধ্য দিয়ে প্রবাহিত সরণ প্রবাহ কি জুল তাপ (I²R অপচয়) সৃষ্টি করে?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Yes, exactly like conduction current', hi: 'हाँ, बिल्कुल चालन धारा की तरह', bn: 'হ্যাঁ, হুবহু পরিবাহী প্রবাহের মতো' } },
        { id: 'opt-b', text: { en: 'No, because there are no physical charge carriers or lattice collisions to cause ohmic dissipation', hi: 'नहीं, क्योंकि इसमें कोई भौतिक आवेश वाहक या जाली टकराव नहीं होते जिससे ओमिक क्षय हो', bn: 'না, কারণ কোনো বাস্তব আধান বাহক বা পরমাণুর সংঘর্ষ থাকে না যা রোধীয় অপচয় ঘটাতে পারে' } },
        { id: 'opt-c', text: { en: 'Yes, but only at microwave frequencies', hi: 'हाँ, लेकिन केवल माइक्रोवेव आवृत्तियों पर', bn: 'হ্যাঁ, তবে কেবল মাইক্রোওয়েভ ফ্রিকোয়েন্সিতে' } },
        { id: 'opt-d', text: { en: 'It cools the environment instead', hi: 'इसके बजाय यह पर्यावरण को ठंडा करती है', bn: 'বরং এটি পরিবেশকে শীতল করে' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'Displacement current is the time derivative of an electric field, not drifting mobile electrons encountering resistance. In ideal vacuum, resistance is zero and no thermal dissipation occurs.',
        hi: 'विस्थापन धारा विद्युत क्षेत्र का समय अवकलज है, न कि प्रतिरोध का सामना करने वाले इलेक्ट्रॉन। आदर्श निर्वात में प्रतिरोध शून्य होता है और कोई तापीय हानि नहीं होती।',
        bn: 'সরণ প্রবাহ হলো তড়িৎ ক্ষেত্রের সময় পরিবর্তন, কোনো রোধের মুখোমুখি হওয়া ইলেকট্রন প্রবাহ নয়। তাই শূন্যস্থানে কোনো তাপীয় অপচয় হয় না।'
      }
    },
    {
      id: 'mcq-ch11-l05-07',
      question: {
        en: 'What type of magnetic field is produced inside the circular gap between capacitor plates while they are charging?',
        hi: 'संधारित्र प्लेटों के आवेशन के दौरान उनके बीच के वृत्ताकार अंतराल में किस प्रकार का चुंबकीय क्षेत्र उत्पन्न होता है?',
        bn: 'ক্যাপাসিটর চার্জ হওয়ার সময় এর বৃত্তাকার পাতের অন্তর্বর্তী স্থানে কোন ধরনের চৌম্বক ক্ষেত্র তৈরি হয়?'
      },
      options: [
        { id: 'opt-a', text: { en: 'A uniform constant magnetic field along the axis', hi: 'अक्ष के अनुदिश एकसमान स्थिर चुंबकीय क्षेत्र', bn: 'অক্ষ বরাবর সুষম ধ্রুবক চৌম্বক ক্ষেত্র' } },
        { id: 'opt-b', text: { en: 'Circulating concentric rings of magnetic field B centered on the cylinder axis', hi: 'बेलन अक्ष पर केंद्रित चुंबकीय क्षेत्र B के परिसंचारी संकेंद्रीय छल्ले', bn: 'সিলিন্ডার অক্ষকে কেন্দ্র করে চৌম্বক ক্ষেত্র B এর সমকেন্দ্রিক বৃত্তাকার বলরেখা' } },
        { id: 'opt-c', text: { en: 'Zero magnetic field everywhere', hi: 'हर जगह शून्य चुंबकीय क्षेत्र', bn: 'সর্বত্র শূন্য চৌম্বক ক্ষেত্র' } },
        { id: 'opt-d', text: { en: 'A purely radial magnetic field pointing away from center', hi: 'केंद्र से दूर जाती विशुद्ध त्रिज्य चुंबकीय रेखाएं', bn: 'কেন্দ্র থেকে বাইরের দিকে প্রসারিত ব্যাসার্ধীয় চৌম্বক রেখা' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'Displacement current density J_d acts as a distributed current along the axial direction, producing concentric circular magnetic field lines B around the central axis: B(r) = (μ0 J_d r)/2.',
        hi: 'विस्थापन धारा अक्षीय दिशा में धारा की तरह कार्य करती है, जिससे अक्ष के चारों ओर संकेंद्रीय वृत्ताकार चुंबकीय क्षेत्र रेखाएं बनती हैं।',
        bn: 'সরণ প্রবাহ অক্ষীয় দিকে একটি বিস্তৃত প্রবাহের মতো কাজ করে, ফলে কেন্দ্রীয় অক্ষের চারপাশে সমকেন্দ্রিক বৃত্তাকার চৌম্বক বলরেখা গঠিত হয়।'
      }
    },
    {
      id: 'mcq-ch11-l05-08',
      question: {
        en: 'In pure vacuum with zero free charge (ρ = 0) and zero conduction current (J_c = 0), what does the Ampere-Maxwell Law reduce to?',
        hi: 'मुक्त आवेश (ρ = 0) और चालन धारा (J_c = 0) रहित शुद्ध निर्वात में एम्पीयर-मैक्सवेल नियम का रूप क्या होता है?',
        bn: 'মুক্ত আধানহীন (ρ = ০) এবং পরিবাহী প্রবাহহীন (J_c = ০) বিশুদ্ধ শূন্যস্থানে অ্যাম্পিয়ার-ম্যাক্সওয়েল সূত্রের রূপ কী হয়?'
      },
      options: [
        { id: 'opt-a', text: { en: '∇ × B = μ₀ ε₀ (∂E / ∂t)', hi: '∇ × B = μ₀ ε₀ (∂E / ∂t)', bn: '∇ × B = μ₀ ε₀ (∂E / ∂t)' } },
        { id: 'opt-b', text: { en: '∇ × B = 0', hi: '∇ × B = 0', bn: '∇ × B = 0' } },
        { id: 'opt-c', text: { en: '∇ · B = μ₀ ε₀ E', hi: '∇ · B = μ₀ ε₀ E', bn: '∇ · B = μ₀ ε₀ E' } },
        { id: 'opt-d', text: { en: '∇ × E = μ₀ ε₀ (∂B / ∂t)', hi: '∇ × E = μ₀ ε₀ (∂B / ∂t)', bn: '∇ × E = μ₀ ε₀ (∂B / ∂t)' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'Setting J_c = 0 into ∇ × B = μ0(J_c + ε0 ∂E/∂t) leaves ∇ × B = μ0 ε0 (∂E/∂t). This represents the magnetic curl source in propagating vacuum electromagnetic waves.',
        hi: 'J_c = 0 रखने पर ∇ × B = μ0 ε0 (∂E/∂t) प्राप्त होता है, जो निर्वात में विद्युत चुंबकीय तरंग प्रसार का समीकरण है।',
        bn: 'J_c = ০ বসালে ∇ × B = μ0 ε0 (∂E/∂t) পাওয়া যায়, যা মহাশূন্যে তড়িৎচৌম্বক তরঙ্গ বিস্তারের সমীকরণ প্রকাশ করে।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch11-l05-01',
      question: {
        en: 'A parallel plate capacitor with plate area A = 0.040 m² has an electric field increasing at dE/dt = 2.5 × 10¹² V/(m·s). Find: (a) the displacement current density J_d, and (b) the total displacement current I_d.',
        hi: 'A = 0.040 m² प्लेट क्षेत्रफल वाले संधारित्र में विद्युत क्षेत्र dE/dt = 2.5 × 10¹² V/(m·s) की दर से बढ़ रहा है। ज्ञात कीजिए: (a) विस्थापन धारा घनत्व J_d, और (b) कुल विस्थापन धारा I_d।',
        bn: 'A = ০.০৪০ m² ক্ষেত্রফল বিশিষ্ট সমান্তরাল পাত ধারকে তড়িৎ ক্ষেত্র dE/dt = ২.৫ × ১০¹² V/(m·s) হারে বাড়ছে। নির্ণয় করুন: (a) সরণ প্রবাহ ঘনত্ব J_d, এবং (b) মোট সরণ প্রবাহ I_d।'
      },
      hint: {
        en: 'Use J_d = ε0 (dE/dt) with ε0 = 8.854 × 10⁻¹² F/m, and I_d = J_d · A.',
        hi: 'J_d = ε0 (dE/dt) तथा I_d = J_d · A सूत्रों का उपयोग करें।',
        bn: 'J_d = ε0 (dE/dt) এবং I_d = J_d · A সমীকরণ প্রয়োগ করুন।'
      },
      answerKey: {
        en: '(a) J_d = (8.854 × 10⁻¹²)(2.5 × 10¹²) = 22.135 A/m². (b) I_d = (22.135 A/m²)(0.040 m²) = 0.8854 A = 885.4 mA.',
        hi: '(a) J_d = 22.14 A/m²। (b) I_d = 0.885 A (885.4 mA)।',
        bn: '(a) J_d = ২২.১৪ A/m²। (b) I_d = ০.৮৮৫ A (৮৮৫.৪ mA)।'
      }
    },
    {
      id: 'pq-ch11-l05-02',
      question: {
        en: 'Derive the continuity equation ∇ · J = -∂ρ/∂t from Maxwell’s equations and charge conservation, and show why classical Ampere’s Law required modification.',
        hi: 'मैक्सवेल समीकरणों और आवेश संरक्षण से सातत्य समीकरण ∇ · J = -∂ρ/∂t व्युत्पन्न कीजिए, तथा दर्शाइए कि शास्त्रीय एम्पीयर नियम में संशोधन की आवश्यकता क्यों थी।',
        bn: 'ম্যাক্সওয়েলের সমীকরণ ও আধানের নিত্যতা থেকে অবিচ্ছিন্নতা সমীকরণ ∇ · J = -∂ρ/∂t প্রতিপাদন করুন এবং দেখান কেন চিরায়ত অ্যাম্পিয়ারের সূত্র সংশোধনের প্রয়োজন হয়েছিল।'
      },
      hint: {
        en: 'Take the divergence of ∇ × H = J and note that ∇ · (∇ × H) ≡ 0.',
        hi: '∇ × H = J का डाइवर्जेंस लें और ध्यान दें कि किसी भी कर्ल का डाइवर्जेंस शून्य होता है।',
        bn: '∇ × H = J এর ডাইভারজেন্স নিন এবং খেয়াল করুন যেকোনো কার্লের ডাইভারজেন্স সর্বদা শূন্য।'
      },
      answerKey: {
        en: 'Taking the divergence of classical Ampere’s law ∇ × H = J gives ∇ · (∇ × H) = ∇ · J. Since ∇ · (∇ × H) ≡ 0, this requires ∇ · J = 0. But conservation of charge requires ∇ · J = -∂ρ/∂t. When charges accumulate, ∂ρ/∂t ≠ 0, leading to a contradiction. Adding ∂D/∂t makes ∇ · [J + ∂D/∂t] = -∂ρ/∂t + ∂(∇·D)/∂t = -∂ρ/∂t + ∂ρ/∂t = 0, restoring total mathematical consistency.',
        hi: 'शास्त्रीय नियम ∇ · J = 0 देता है जो ∇ · J = -∂ρ/∂t का विरोध करता है। ∂D/∂t जोड़ने पर ∇ · [J + ∂D/∂t] = 0 प्राप्त होता है जो पूर्णतः संगत है।',
        bn: 'চিরায়ত সূত্রে ∇ · J = ০ পাওয়া যায় যা আধান সংরক্ষণের ∇ · J = -∂ρ/∂t এর সাথে দ্বন্দ্ব তৈরি করে। ∂D/∂t যোগ করলে ∇ · [J + ∂D/∂t] = ০ হয় এবং সমীকরণটি সম্পূর্ণ নির্ভুল রূপ পায়।'
      }
    },
    {
      id: 'pq-ch11-l05-03',
      question: {
        en: 'A 10.0 μF capacitor is connected to an AC source V(t) = 150 sin(120π t) Volts. Calculate the instantaneous displacement current at t = 2.5 milliseconds.',
        hi: '10.0 μF का संधारित्र एक एसी स्रोत V(t) = 150 sin(120π t) वोल्ट से जुड़ा है। t = 2.5 मिलीसेकंड पर तात्कालिक विस्थापन धारा ज्ञात कीजिए।',
        bn: '১০.০ μF এর একটি ধারক V(t) = ১৫০ sin(১২০π t) ভোল্ট এসি উৎসের সাথে যুক্ত। t = ২.৫ মিলি সেকেন্ডে তাৎক্ষণিক সরণ প্রবাহ নির্ণয় করুন।'
      },
      hint: {
        en: 'Use I_d(t) = C (dV/dt) = C V0 ω cos(ω t). Compute ω = 120π = 377 rad/s.',
        hi: 'I_d(t) = C V0 ω cos(ω t) का उपयोग करें जहाँ ω = 120π = 377 rad/s है।',
        bn: 'I_d(t) = C V0 ω cos(ω t) ব্যবহার করুন যেখানে ω = ১২০π = ৩৭৭ rad/s।'
      },
      answerKey: {
        en: 'ω = 376.99 rad/s. I_max = (10 × 10⁻⁶)(150)(376.99) = 0.5655 A. At t = 0.0025 s: angle = 120π(0.0025) = 0.30π rad = 54°. I_d(2.5 ms) = 0.5655 · cos(54°) = 0.5655 · 0.5878 = 0.3324 A = 332.4 mA.',
        hi: 'I_d(2.5 ms) = 332.4 mA।',
        bn: 'I_d(২.৫ ms) = ৩৩২.৪ mA।'
      }
    },
    {
      id: 'pq-ch11-l05-04',
      question: {
        en: 'Explain how Maxwell’s addition of displacement current completed the symmetry of electromagnetic field equations.',
        hi: 'व्याख्या कीजिए कि मैक्सवेल द्वारा विस्थापन धारा जोड़ने से विद्युत चुंबकीय क्षेत्र समीकरणों की सममिति किस प्रकार पूर्ण हुई।',
        bn: 'ব্যাখ্যা করুন কীভাবে ম্যাক্সওয়েল কর্তৃক সরণ প্রবাহের সংযোজন তড়িৎচৌম্বক সমীকরণগুলির প্রতিসাম্য পূর্ণ করেছিল।'
      },
      hint: {
        en: 'Compare ∇ × E = -∂B/∂t with ∇ × B = μ0 ε0 ∂E/∂t.',
        hi: '∇ × E = -∂B/∂t की तुलना ∇ × B = μ0 ε0 ∂E/∂t से करें।',
        bn: '∇ × E = -∂B/∂t এর সাথে ∇ × B = μ0 ε0 ∂E/∂t তুলনা করুন।'
      },
      answerKey: {
        en: 'Faraday’s law established that a changing magnetic field induces a circulating electric field (curl E = -∂B/∂t). Maxwell’s displacement current established the reciprocal partner: a changing electric field induces a circulating magnetic field (curl B = μ0 ε0 ∂E/∂t). This reciprocal relationship provides the mechanism for electromagnetic waves to propagate autonomously through space.',
        hi: 'फैराडे ने दिखाया कि बदलता चुंबकीय क्षेत्र विद्युत क्षेत्र बनाता है। मैक्सवेल की विस्थापन धारा ने इसका पूरक स्थापित किया: बदलता विद्युत क्षेत्र चुंबकीय क्षेत्र बनाता है। यह सममिति विद्युत चुंबकीय तरंगों के अस्तित्व का मूल आधार है।',
        bn: 'ফ্যারাডের সূত্র প্রমাণ করেছিল যে পরিবর্তনশীল চৌম্বক ক্ষেত্র তড়িৎ ক্ষেত্র তৈরি করে। ম্যাক্সওয়েলের সরণ প্রবাহ এর পরিপূরক সত্য প্রতিষ্ঠা করে: পরিবর্তনশীল তড়িৎ ক্ষেত্র চৌম্বক ক্ষেত্র তৈরি করে। এই দ্বিপাক্ষিক প্রতিসাম্যই মহাশূন্যে তরঙ্গের স্বতঃস্ফূর্ত চলাচলের ভিত্তি।'
      }
    },
    {
      id: 'pq-ch11-l05-05',
      question: {
        en: 'In a region of space, the electric field is given by E(t) = E0 sin(ω t) ĵ. Using the Ampere-Maxwell law in vacuum, find the resulting magnetic field B(x, t), assuming B(0, t) = 0.',
        hi: 'अंतरिक्ष के एक क्षेत्र में विद्युत क्षेत्र E(t) = E0 sin(ω t) ĵ है। निर्वात में एम्पीयर-मैक्सवेल नियम से परिणामी चुंबकीय क्षेत्र B(x, t) ज्ञात कीजिए (मानें B(0, t) = 0)।',
        bn: 'মহাকাশের একটি অঞ্চলে তড়িৎ ক্ষেত্র E(t) = E0 sin(ω t) ĵ দেওয়া আছে। শূন্য মাধ্যমে অ্যাম্পিয়ার-ম্যাক্সওয়েল সূত্র ব্যবহার করে চৌম্বক ক্ষেত্র B(x, t) নির্ণয় করুন (ধরি B(0, t) = 0)।'
      },
      hint: {
        en: 'Use ∇ × B = μ0 ε0 (∂E/∂t). For 1D variation in x, (∂Bz/∂x) - (∂Bx/∂z) = μ0 ε0 ∂Ey/∂t.',
        hi: '∇ × B = μ0 ε0 (∂E/∂t) का उपयोग करें और x के सापेक्ष समाकलन करें।',
        bn: '∇ × B = μ0 ε0 (∂E/∂t) সমীকরণ প্রয়োগ করে x এর সাপেক্ষে সমাকলন করুন।'
      },
      answerKey: {
        en: '∂E/∂t = E0 ω cos(ω t) ĵ. Since ∇ × B = (∂Bz/∂x - ∂Bx/∂z) ĵ (assuming fields point in orthogonal directions), ∂Bz/∂x = μ0 ε0 E0 ω cos(ω t). Integrating with respect to x yields Bz(x, t) = μ0 ε0 E0 ω x cos(ω t) k̂.',
        hi: 'Bz(x, t) = μ0 ε0 E0 ω x cos(ω t) k̂।',
        bn: 'Bz(x, t) = μ0 ε0 E0 ω x cos(ω t) k̂।'
      }
    }
  ]
};
