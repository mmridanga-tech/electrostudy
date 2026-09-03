import { Lesson } from '../types';

export const LESSON_FARADAY_LAW_FIELD: Lesson = {
  id: 'lsn-ch11-faraday-law',
  topicId: 'ch11-faraday-law',
  chapterId: 'ch-em-waves',
  order: 4,
  title: {
    en: "Faraday's Law of Induction (Field Formulation)",
    hi: 'फैराडे का प्रेरण नियम (क्षेत्र निरूपण)',
    bn: 'ফ্যারাডের আবেশ সূত্র (ক্ষেত্র রূপ)'
  },
  description: {
    en: "Transitioning electromagnetic induction from circuit loops to localized field theory: induced non-conservative electric fields, curl of electric field ∇ × E = -∂B/∂t, transformer versus motional EMF, and energy conservation.",
    hi: 'विद्युत चुंबकीय प्रेरण को परिपथ लूप से स्थानीय क्षेत्र सिद्धांत में स्थानांतरित करना: प्रेरित गैर-संरक्षी विद्युत क्षेत्र, विद्युत क्षेत्र का कर्ल ∇ × E = -∂B/∂t, ट्रांसफार्मर बनाम गतिज ईएमएफ, तथा ऊर्जा संरक्षण।',
    bn: 'তড়িৎচৌম্বকীয় আবেশকে বর্তনী লুপ থেকে স্থানিক ক্ষেত্র তত্ত্বে রূপান্তর: আবিষ্ট অসংরক্ষণশীল তড়িৎ ক্ষেত্র, তড়িৎ ক্ষেত্রের কার্ল ∇ × E = -∂B/∂t, ট্রান্সফরমার বনাম গতিশীল ইএমএফ এবং শক্তির নিত্যতা।'
  },
  estimatedMinutes: 35,
  easyExplanation: {
    en: "In Chapter 10, we learned that moving a magnet near a coil of wire induces a voltage that drives an electric current. But what if there is no physical wire at all? Faraday's Law in field theory reveals a profound truth about the fabric of empty space: whenever a magnetic field changes with time, it spontaneously creates a swirling, circular electric field in the empty space surrounding it! If a conductor happens to be placed there, its free electrons are swept along by this induced electric field. Faraday's Law in vector field form is written as ∮ E · dl = -dΦ_B/dt (or ∇ × E = -∂B/∂t). The negative sign (Lenz's Law) guarantees that this induced field always opposes the change that caused it, preserving the principle of conservation of energy.",
    hi: 'अध्याय 10 में हमने पढ़ा कि कुंडली के पास चुंबक घुमाने से वोल्टेज प्रेरित होता है। लेकिन क्या होगा यदि वहां कोई तार ही न हो? क्षेत्र सिद्धांत में फैराडे का नियम अंतरिक्ष का एक गहरा सत्य उजागर करता है: जब भी कोई चुंबकीय क्षेत्र समय के साथ बदलता है, तो वह अपने चारों ओर खाली अंतरिक्ष में एक भंवरदार (संवृत) विद्युत क्षेत्र उत्पन्न करता है! यदि वहां कोई चालक रखा हो, तो उसके इलेक्ट्रॉन इस प्रेरित विद्युत क्षेत्र द्वारा गति करने लगते हैं। सदिश रूप में यह ∮ E · dl = -dΦ_B/dt अथवा ∇ × E = -∂B/∂t लिखा जाता है। ऋणात्मक चिह्न (लेन्ज़ का नियम) ऊर्जा संरक्षण को सुनिश्चित करता है।',
    bn: '১০ম অধ্যায়ে আমরা জেনেছি তারের কুণ্ডলীর কাছে চুম্বক নাড়াচাড়া করলে ভোল্টেজ তৈরি হয়। কিন্তু যদি কোনো তার না থাকে? ক্ষেত্র তত্ত্বে ফ্যারাডের সূত্র একটি গভীর সত্য প্রকাশ করে: যখনই কোনো স্থানে সময়ের সাথে চৌম্বক ক্ষেত্র পরিবর্তিত হয়, তখনই তার চারপাশের শূন্যস্থানে একটি ঘূর্ণনশীল বৃত্তাকার তড়িৎ ক্ষেত্র সৃষ্টি হয়! কোনো পরিবাহী সেখানে থাকলে তার মুক্ত ইলেকট্রনগুলি এই আবিষ্ট তড়িৎ ক্ষেত্র দ্বারা প্রবাহিত হয়। ভেক্টর রূপে এটি হলো ∮ E · dl = -dΦ_B/dt বা ∇ × E = -∂B/∂t। ঋণাত্মক চিহ্নটি (লেনজের সূত্র) নিশ্চিত করে যে এই আবেশ সর্বদা মূল পরিবর্তনের বিরোধিতা করে এবং শক্তির নিত্যতা বজায় রাখে।'
  },
  detailedExplanation: {
    en: "Faraday's discovery of electromagnetic induction (1831) was originally formulated for closed wire circuits: the induced electromotive force (EMF) e is proportional to the negative time rate of change of magnetic flux linkage: e = -N dΦ_B/dt.\n\nIn Maxwell's field theory, EMF around any closed mathematical contour C is defined as the line integral of the electric field vector:\nEMF = ∮_C E · dl.\nThe magnetic flux through any open surface S bounded by contour C is:\nΦ_B = ∫_S B · dA.\n\nEquating these two physical quantities yields the Integral Form of Faraday's Law:\n∮_C E · dl = - d/dt ∫_S B · dA.\n\nApplying Stokes' Theorem transforms the closed contour integral into a surface integral:\n∮_C E · dl = ∫_S (∇ × E) · dA = - ∫_S (∂B / ∂t) · dA.\nSince this relationship holds for any arbitrary surface, the integrands must be identical everywhere, establishing the Differential (Point) Form of Faraday's Law:\n∇ × E = - ∂B / ∂t.\n\nProfound Physical Implications:\n1. Non-Conservative Electric Field: In static electrostatics, ∇ × E = 0, meaning the electrostatic field is conservative and has zero circulation (∮ E · dl = 0). But in the presence of a time-varying magnetic field (∂B/∂t ≠ 0), the induced electric field is non-conservative with non-zero curl! Its field lines form closed, continuous loops with no beginning or end.\n2. Two Mechanisms of Induction:\n   • Transformer Action: The circuit or contour is completely stationary, and the magnetic field changes with time: e_tr = -∫ (∂B/∂t) · dA. This drives power transformers, induction cooktops, and betatrons.\n   • Motional Induction: A conductor moves with velocity v through a static or constant magnetic field: charges experience the magnetic Lorentz force q(v × B), producing an effective motional electric field E_m = v × B. The motional EMF is e_m = ∮ (v × B) · dl. This drives dynamos and rotating alternators.\n   • General Case: When a moving circuit traverses a time-varying field, both mechanisms superimpose:\n     e_total = ∮ (v × B) · dl - ∫_S (∂B/∂t) · dA.\n3. Energy Conservation and Lenz's Law: The minus sign dictates that the magnetic field created by the induced current opposes the original flux change. If the sign were positive, an initial flux change would induce a current reinforcing that change, causing runaway energy creation from nothing, violating the First Law of Thermodynamics.",
    hi: 'फैराडे का नियम मूल रूप से बंद परिपथों के लिए e = -N dΦ_B/dt के रूप में दिया गया था। मैक्सवेल के क्षेत्र सिद्धांत में इसे स्थानीय सदिश क्षेत्र के रूप में ढाला गया:\nEMF = ∮_C E · dl = - d/dt ∫_S B · dA।\n\nस्टोक्स प्रमेय से इसका अवकल रूप प्राप्त होता है:\n∇ × E = - ∂B / ∂t।\n\nमहत्वपूर्ण निष्कर्ष:\n1. गैर-संरक्षी विद्युत क्षेत्र: स्थिरवैद्युतिकी में ∇ × E = 0 (संरक्षी) होता है। परंतु परिवर्ती चुंबकीय क्षेत्र में प्रेरित विद्युत क्षेत्र गैर-संरक्षी होता है और इसकी बल रेखाएं बंद लूप बनाती हैं।\n2. प्रेरण के दो तंत्र:\n   • ट्रांसफार्मर क्रिया: स्थिर परिपथ तथा समय-परिवर्ती चुंबकीय क्षेत्र: e = -∫ (∂B/∂t) · dA।\n   • गतिज प्रेरण: चुंबकीय क्षेत्र में v वेग से गतिमान चालक: e = ∮ (v × B) · dl।\n3. लेन्ज़ का नियम: ऋणात्मक चिह्न यह सुनिश्चित करता है कि प्रेरित प्रभाव अपने कारण का विरोध करे, जो ऊर्जा संरक्षण का सार्वभौमिक नियम है।',
    bn: 'ফ্যারাডের সূত্র মূলত বর্তনীর জন্য e = -N dΦ_B/dt হিসেবে তৈরি হয়েছিল। ম্যাক্সওয়েলের ক্ষেত্র তত্ত্বে এটিকে স্থানিক ভেক্টর ক্ষেত্রে রূপান্তর করা হয়:\nEMF = ∮_C E · dl = - d/dt ∫_S B · dA।\n\nস্টোকসের উপপাদ্য প্রয়োগ করে অবকল রূপ পাওয়া যায়:\n∇ × E = - ∂B / ∂t।\n\nগুরুত্বপূর্ণ ভৌত দিকসমূহ:\n১. অসংরক্ষণশীল তড়িৎ ক্ষেত্র: স্থিরতড়িৎ বিজ্ঞানে ∇ × E = ০ হওয়ায় ক্ষেত্রটি সংরক্ষণশীল। কিন্তু পরিবর্তনশীল চৌম্বক ক্ষেত্রে আবিষ্ট তড়িৎ ক্ষেত্র অসংরক্ষণশীল হয় এবং এর বলরেখা বদ্ধ লুপ তৈরি করে।\n২. আবেশের দুটি প্রক্রিয়া:\n   • ট্রান্সফরমার ক্রিয়া: স্থির পরিবাহী এবং পরিবর্তনশীল চৌম্বক ক্ষেত্র: e = -∫ (∂B/∂t) · dA।\n   • গতিশীল আবেশ: চৌম্বক ক্ষেত্রে v বেগে চলমান পরিবাহী: e = ∮ (v × B) · dl।\n৩. লেনজের সূত্র: ঋণাত্মক চিহ্নটি নির্দেশ করে আবিষ্ট প্রবাহ মূল কারণের বিরোধিতা করে, যা শক্তির নিত্যতা সূত্র মেনে চলে।'
  },
  formulas: [
    {
      id: 'f-faraday-integral-field',
      symbol: '∮ E · dl',
      expression: '∮ E · dl = - d/dt ∫ B · dA = - dΦ_B / dt',
      title: {
        en: "Faraday's Law (Integral Field Form)",
        hi: 'फैराडे का नियम (समाकल क्षेत्र रूप)',
        bn: 'ফ্যারাডের সূত্র (সমাকলন ক্ষেত্র রূপ)'
      },
      description: {
        en: 'The circulation of the electric field around any closed contour equals the negative rate of change of magnetic flux enclosed.',
        hi: 'किसी बंद समोच्च के परितः विद्युत क्षेत्र का परिसंचरण परिबद्ध चुंबकीय फ्लक्स के परिवर्तन की ऋणात्मक दर के बराबर होता है।',
        bn: 'যেকোনো বদ্ধ পথ বরাবর তড়িৎ ক্ষেত্রের সঞ্চালন আবদ্ধ চৌম্বক ফ্লাক্স পরিবর্তনের ঋণাত্মক হারের সমান।'
      },
      variables: [
        { symbol: 'E', name: { en: 'Induced electric field vector (V/m)', hi: 'प्रेरित विद्युत क्षेत्र सदिश (V/m)', bn: 'আবিষ্ট তড়িৎ ক্ষেত্র ভেক্টর (V/m)' } },
        { symbol: 'dl', name: { en: 'Differential path length element (m)', hi: 'अवकल पथ तत्व (m)', bn: 'ক্ষুদ্র পথ উপাদান (m)' } },
        { symbol: 'Φ_B', name: { en: 'Magnetic flux (Wb)', hi: 'चुंबकीय फ्लक्स (वेबर)', bn: 'চৌম্বক ফ্লাক্স (ওয়েবার)' } },
        { symbol: 'B', name: { en: 'Magnetic flux density (Tesla, T)', hi: 'चुंबकीय फ्लक्स घनत्व (T)', bn: 'চৌম্বক ফ্লাক্স ঘনত্ব (T)' } }
      ]
    },
    {
      id: 'f-faraday-differential-field',
      symbol: '∇ × E',
      expression: '∇ × E = - ∂B / ∂t',
      title: {
        en: "Faraday's Law (Differential / Point Form)",
        hi: 'फैराडे का नियम (अवकल / बिंदु रूप)',
        bn: 'ফ্যারাডের সূত্র (ব্যবকলন / বিন্দু রূপ)'
      },
      description: {
        en: 'The curl of the electric field at any point in space equals the negative partial time derivative of the magnetic flux density.',
        hi: 'अंतरिक्ष के किसी भी बिंदु पर विद्युत क्षेत्र का कर्ल चुंबकीय फ्लक्स घनत्व के ऋणात्मक आंशिक समय अवकलज के बराबर होता है।',
        bn: 'মহাকাশের যেকোনো বিন্দুতে তড়িৎ ক্ষেত্রের কার্ল চৌম্বক ফ্লাক্স ঘনত্বের ঋণাত্মক সময় ব্যবকলনের সমান।'
      },
      variables: [
        { symbol: '∇ × E', name: { en: 'Curl of electric field (V/m²)', hi: 'विद्युत क्षेत्र का कर्ल', bn: 'তড়িৎ ক্ষেত্রের কার্ল' } },
        { symbol: '∂B/∂t', name: { en: 'Time rate of change of magnetic flux density (T/s)', hi: 'चुंबकीय फ्लक्स घनत्व के परिवर्तन की दर (T/s)', bn: 'চৌম্বক ফ্লাক্স ঘনত্ব পরিবর্তনের হার (T/s)' } }
      ]
    },
    {
      id: 'f-motional-emf-field',
      symbol: 'e_motional',
      expression: 'e = ∮ (v × B) · dl',
      title: {
        en: 'Motional Electromotive Force',
        hi: 'गतिज विद्युत वाहक बल',
        bn: 'গতিশীল তড়িচ্চালক বল'
      },
      description: {
        en: 'EMF induced along a moving conducting path traversing through a magnetic field.',
        hi: 'चुंबकीय क्षेत्र में गतिमान चालक पथ के अनुदिश प्रेरित विद्युत वाहक बल।',
        bn: 'চৌম্বক ক্ষেত্রের মধ্য দিয়ে গতিশীল কোনো পরিবাহী পথে আবিষ্ট তড়িচ্চালক বল।'
      },
      variables: [
        { symbol: 'e', name: { en: 'Motional EMF (Volts, V)', hi: 'गतिज ईएमएफ (वोल्ट, V)', bn: 'গতিশীল ইএমএফ (ভোল্ট, V)' } },
        { symbol: 'v', name: { en: 'Conductor velocity vector (m/s)', hi: 'चालक का वेग सदिश (m/s)', bn: 'পরিবাহীর বেগ ভেক্টর (m/s)' } },
        { symbol: 'B', name: { en: 'Magnetic field vector (T)', hi: 'चुंबकीय क्षेत्र सदिश (T)', bn: 'চৌম্বক ক্ষেত্র ভেক্টর (T)' } }
      ]
    },
    {
      id: 'f-induced-circular-e',
      symbol: 'E_induced',
      expression: 'E = (r / 2) · |dB / dt| [for r ≤ R]',
      title: {
        en: 'Induced Tangential Electric Field in Circular Region',
        hi: 'वृत्ताकार क्षेत्र में प्रेरित स्पर्शरेखीय विद्युत क्षेत्र',
        bn: 'বৃত্তাকার অঞ্চলে আবিষ্ট স্পর্শকীয় তড়িৎ ক্ষেত্র'
      },
      description: {
        en: 'Tangential electric field induced at radius r inside a cylindrical region of radius R with changing axial magnetic field dB/dt.',
        hi: 'परिवर्ती अक्षीय चुंबकीय क्षेत्र वाले बेलनाकार क्षेत्र के भीतर r त्रिज्या पर प्रेरित स्पर्शरेखीय विद्युत क्षेत्र।',
        bn: 'পরিবর্তনশীল অক্ষীয় চৌম্বক ক্ষেত্র বিশিষ্ট চোঙাকৃতি অঞ্চলে r ব্যাসার্ধে আবিষ্ট স্পর্শকীয় তড়িৎ ক্ষেত্র।'
      },
      variables: [
        { symbol: 'E', name: { en: 'Induced tangential electric field (V/m)', hi: 'प्रेरित स्पर्शरेखीय विद्युत क्षेत्र (V/m)', bn: 'আবিষ্ট স্পর্শকীয় তড়িৎ ক্ষেত্র (V/m)' } },
        { symbol: 'r', name: { en: 'Radial distance from cylindrical axis (m)', hi: 'अक्ष से दूरी (m)', bn: 'অক্ষ থেকে দূরত্ব (m)' } },
        { symbol: 'dB/dt', name: { en: 'Rate of change of magnetic field (T/s)', hi: 'चुंबकीय क्षेत्र परिवर्तन की दर', bn: 'চৌম্বক ক্ষেত্র পরিবর্তনের হার' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-field-induction-concept',
      title: {
        en: '1. The Induced Electric Field in Free Space',
        hi: '1. मुक्त अंतरिक्ष में प्रेरित विद्युत क्षेत्र',
        bn: '১. মুক্ত মহাশূন্যে আবিষ্ট তড়িৎ ক্ষেত্র'
      },
      content: {
        en: 'A common misconception is that a physical metallic loop is required for induction to take place. In reality, a time-varying magnetic field creates an electric field everywhere in space, whether matter is present or not. A metallic loop merely acts as a detector: its free conduction electrons respond to the preexisting circulating electric field.\n\nUnlike electrostatic fields produced by point charges, which radiate outward and possess zero circulation (∮ E_static · dl = 0), the induced electric field lines are continuous closed circles centered on the changing magnetic flux. Because the field is non-conservative, the concept of a single-valued electrostatic potential V breaks down: the potential difference between two points depends on the specific physical path taken between them!',
        hi: 'एक आम गलतफहमी यह है कि प्रेरण होने के लिए धातु के तार के लूप की आवश्यकता होती है। वास्तव में, समय-परिवर्ती चुंबकीय क्षेत्र अंतरिक्ष में हर जगह विद्युत क्षेत्र उत्पन्न करता है, चाहे वहां पदार्थ हो या न हो। धातु का तार केवल एक संसूचक की तरह कार्य करता है।\n\nस्थिरवैद्युत क्षेत्रों के विपरीत (जो आवेशों से निकलते हैं और संवृत लूप नहीं बनाते), प्रेरित विद्युत क्षेत्र रेखाएं संवृत वृत्त बनाती हैं। चूंकि यह क्षेत्र गैर-संरक्षी होता है, इसलिए दो बिंदुओं के बीच का विभवांतर लिए गए पथ पर निर्भर करता है!',
        bn: 'একটি প্রচলিত ভুল ধারণা হলো আবেশ ঘটার জন্য ধাতব তারের লুপ থাকা আবশ্যক। বাস্তবে, পরিবর্তনশীল চৌম্বক ক্ষেত্র মহাশূন্যের সর্বত্র তড়িৎ ক্ষেত্র সৃষ্টি করে, সেখানে কোনো বস্তু থাকুক বা না থাকুক। ধাতব তার কেবল একটি সনাক্তকারী হিসেবে কাজ করে।\n\nস্থিরতড়িৎ বলরেখার মতো না হয়ে আবিষ্ট তড়িৎ বলরেখাগুলি বদ্ধ বৃত্ত তৈরি করে। যেহেতু এই ক্ষেত্রটি অসংরক্ষণশীল, তাই দুটি বিন্দুর মধ্যবর্তী বিভব পার্থক্য নির্বাচিত পথের উপর নির্ভর করে!'
      },
      schematicId: 'circuit-ch11-faraday-law'
    },
    {
      id: 'sec-transformer-vs-motional',
      title: {
        en: '2. Transformer Action versus Motional Induction',
        hi: '2. ट्रांसफार्मर क्रिया बनाम गतिज प्रेरण',
        bn: '২. ট্রান্সফরমার ক্রিয়া বনাম গতিশীল আবেশ'
      },
      content: {
        en: 'Electrical power conversion relies on the two fundamental manifestations of Faraday’s Law:\n• Transformer Action (Stationary Geometry): A primary AC winding produces a time-varying flux dΦ/dt in a ferromagnetic core. A secondary stationary winding wrapped around the same core intercepts this flux, inducing an alternating voltage proportional to turns ratio: e = -N dΦ/dt. No mechanical motion is involved.\n• Motional Induction (Dynamic Geometry): Turbine-driven rotor coils rotate through fixed magnetic poles in an alternator. The conductor velocity v creates a motional field E = v × B, driving massive AC currents into electrical grids worldwide.\nBoth phenomena are unified under the single comprehensive law: ∮ E · dl = -dΦ/dt.',
        hi: 'विद्युत शक्ति उत्पादन और रूपांतरण फैराडे के नियम के दो मूल रूपों पर निर्भर करता है:\n• ट्रांसफार्मर क्रिया (स्थिर संरचना): प्राथमिक एसी वाइंडिंग कोर में परिवर्ती फ्लक्स dΦ/dt उत्पन्न करती है, जो स्थिर द्वितीयक वाइंडिंग में e = -N dΦ/dt वोल्टेज प्रेरित करता है। इसमें कोई यांत्रिक गति नहीं होती।\n• गतिज प्रेरण (गतिशील संरचना): टरबाइन द्वारा संचालित जनरेटर में कंडक्टर निश्चित चुंबकीय ध्रुवों के बीच घूमते हैं, जिससे E = v × B क्षेत्र उत्पन्न होता है।\nदोनों प्रभाव ∮ E · dl = -dΦ/dt द्वारा एकीकृत हैं।',
        bn: 'বৈদ্যুতিক শক্তি রূপান্তর ফ্যারাডের সূত্রের দুটি মূল রূপের উপর প্রতিষ্ঠিত:\n• ট্রান্সফরমার ক্রিয়া (স্থির কাঠামো): প্রাইমারি ওয়াইন্ডিং কোরে পরিবর্তনশীল ফ্লাক্স dΦ/dt সৃষ্টি করে, যা সেকেন্ডারি কয়েলে e = -N dΦ/dt ভোল্টেজ আবিষ্ট করে। এতে কোনো যান্ত্রিক ঘূর্ণন থাকে না।\n• গতিশীল আবেশ (ঘূর্ণনশীল কাঠামো): টারবাইন চালিত জেনারেটরে তারের কুণ্ডলী স্থির চৌম্বক ক্ষেত্রের মধ্যে ঘোরে, যা E = v × B ক্ষেত্র তৈরি করে গ্রিডে বিদ্যুৎ পাঠায়।\nউভয় প্রক্রিয়াই ∮ E · dl = -dΦ/dt সমীকরণ দ্বারা আবদ্ধ।'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-faraday-law',
      title: {
        en: "Faraday Induction: Circulating Electric Field & Transformer Core",
        hi: 'फैराडे प्रेरण: परिसंचारी विद्युत क्षेत्र एवं ट्रांसफार्मर कोर',
        bn: 'ফ্যারাডে আবেশ: ঘূর্ণনশীল তড়িৎ ক্ষেত্র ও ট্রান্সফরমার কোর'
      },
      caption: {
        en: "Cylindrical magnetic flux region with increasing dB/dt creating concentric circular non-conservative electric field lines E, alongside a magnetic core coupling primary and secondary transformer coils.",
        hi: 'बढ़ते dB/dt वाला बेलनाकार चुंबकीय क्षेत्र संकेंद्रीय वृत्ताकार गैर-संरक्षी विद्युत क्षेत्र रेखाएं E उत्पन्न करता है, साथ ही ट्रांसफार्मर कोर द्वारा प्राथमिक और द्वितीयक कॉइल का युग्मन।',
        bn: 'ক্রমবর্ধমান dB/dt বিশিষ্ট চোঙাকৃতি চৌম্বক ক্ষেত্র যা সমকেন্দ্রিক বৃত্তাকার অসংরক্ষণশীল তড়িৎ বলরেখা E সৃষ্টি করছে, এবং ট্রান্সফরমার কোরের মাধ্যমে প্রাইমারি ও সেকেন্ডারি কয়েলের সংযুক্তি।'
      },
      svgType: 'circuit-ch11-faraday-law'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-induced-tangential-e-field',
      problem: {
        en: 'A long cylindrical electromagnet of radius R = 6.0 cm produces a uniform axial magnetic field that increases at a constant rate dB/dt = 15.0 T/s. Calculate the magnitude of the induced electric field E at: (a) r = 3.0 cm from the central axis (inside the magnetic zone), and (b) r = 12.0 cm from the central axis (outside the magnetic zone).',
        hi: 'R = 6.0 सेमी त्रिज्या का एक लंबा बेलनाकार विद्युत चुंबक एकसमान अक्षीय चुंबकीय क्षेत्र उत्पन्न करता है जो dB/dt = 15.0 T/s की स्थिर दर से बढ़ रहा है। प्रेरित विद्युत क्षेत्र E का परिमाण ज्ञात कीजिए: (a) केंद्रीय अक्ष से r = 3.0 सेमी दूरी पर (क्षेत्र के भीतर), और (b) r = 12.0 सेमी दूरी पर (क्षेत्र के बाहर)।',
        bn: 'R = ৬.০ সেমি ব্যাসার্ধের একটি দীর্ঘ চোঙাকৃতি তড়িচ্চুম্বক সুষম অক্ষীয় চৌম্বক ক্ষেত্র তৈরি করে যা dB/dt = ১৫.০ T/s হারে বৃদ্ধি পাচ্ছে। আবিষ্ট তড়িৎ ক্ষেত্র E এর মান নির্ণয় করুন: (a) কেন্দ্রীয় অক্ষ থেকে r = ৩.০ সেমি দূরত্বে (চৌম্বক অঞ্চলের অভ্যন্তরে), এবং (b) অক্ষ থেকে r = ১২.০ সেমি দূরত্বে (চৌম্বক অঞ্চলের বাইরে)।'
      },
      solution: {
        en: 'Step 1: Choose a circular contour of radius r concentric with the cylinder. By symmetry, E is tangential and uniform along the circle of circumference 2π r.\n∮ E · dl = E · (2π r) = |dΦ_B / dt|.\n\nStep 2: Inside the magnetic field region (r = 3.0 cm = 0.030 m < R):\nEnclosed area A_enc = π r².\nEnclosed flux rate |dΦ_B/dt| = (dB/dt) · (π r²).\nE · (2π r) = (dB/dt) · (π r²)\nE(r) = (r / 2) · (dB/dt)\nE(3 cm) = (0.030 m / 2) · (15.0 T/s) = 0.225 V/m.\n\nStep 3: Outside the magnetic field region (r = 12.0 cm = 0.120 m > R = 0.060 m):\nThe magnetic flux is confined entirely within radius R = 0.060 m.\nEnclosed area with magnetic field A_magnetic = π R².\nEnclosed flux rate |dΦ_B/dt| = (dB/dt) · (π R²).\nE · (2π r) = (dB/dt) · (π R²)\nE(r) = (R² / (2 r)) · (dB/dt)\nE(12 cm) = [(0.060)² / (2 · 0.120)] · 15.0 = [0.0036 / 0.240] · 15.0 = 0.015 · 15.0 = 0.225 V/m.\n\nPhysical Insight: Outside the magnetic field where B = 0 and dB/dt = 0, a non-zero induced electric field E still exists! This proves that localized changing magnetic flux creates a circulating electric field extending far into surrounding empty space.',
        hi: 'चरण 1: r त्रिज्या का वृत्ताकार लूप: E(2π r) = |dΦ_B / dt|।\nचरण 2: चुंबकीय क्षेत्र के भीतर (r = 3 सेमी < R):\nE = (r / 2)(dB/dt) = (0.03 / 2)(15) = 0.225 V/m।\nचरण 3: चुंबकीय क्षेत्र के बाहर (r = 12 सेमी > R):\nE = (R² / 2r)(dB/dt) = (0.06² / (2 × 0.12))(15) = 0.225 V/m।\nनिष्कर्ष: B = 0 वाले बाहरी क्षेत्र में भी प्रेरित विद्युत क्षेत्र मौजूद रहता है!',
        bn: 'ধাপ ১: r ব্যাসার্ধের বৃত্তাকার লুপে: E(২π r) = |dΦ_B / dt|।\nধাপ ২: চৌম্বক অঞ্চলের ভেতরে (r = ৩ সেমি < R):\nE = (r / ২)(dB/dt) = (০.০৩ / ২)(১৫) = ০.২২৫ V/m।\nধাপ ৩: চৌম্বক অঞ্চলের বাইরে (r = ১২ সেমি > R):\nE = (R² / ২r)(dB/dt) = (০.০৬² / (২ × ০.১২))(১৫) = ০.২২৫ V/m।\nভৌত উপলব্ধি: যেখানে চৌম্বক ক্ষেত্র B = ০ সেখানেও আবিষ্ট তড়িৎ ক্ষেত্র E বিদ্যমান থাকে!'
      },
      givenValues: {
        'R': '6.0 cm (0.060 m)',
        'dB/dt': '15.0 T/s',
        'r1': '3.0 cm (0.030 m)',
        'r2': '12.0 cm (0.120 m)'
      },
      finalAnswer: {
        en: 'E(inside, r = 3.0 cm) = 0.225 V/m;  E(outside, r = 12.0 cm) = 0.225 V/m (tangential closed loops)',
        hi: 'E(भीतर, r = 3.0 सेमी) = 0.225 V/m;  E(बाहर, r = 12.0 सेमी) = 0.225 V/m',
        bn: 'E(ভেতরে, r = ৩.০ সেমি) = ০.২২৫ V/m;  E(বাইরে, r = ১২.০ সেমি) = ০.২২৫ V/m'
      }
    },
    {
      id: 'ex-betatron-acceleration-condition',
      problem: {
        en: 'In an electron accelerator (betatron), an electron orbits at fixed radius r0 = 0.85 m in a time-varying magnetic field. Show that to maintain a constant orbital radius while accelerating, the average magnetic flux density <B> over the orbit area must equal twice the instantaneous magnetic flux density B0 at the orbit circumference (<B> = 2 B0). If the central magnetic flux increases at dΦ/dt = 42.5 Wb/s, calculate the induced accelerating electric field E experienced by the electron.',
        hi: 'एक बीटाट्रॉन में एक इलेक्ट्रॉन r0 = 0.85 मीटर की स्थिर कक्षा में त्वरित होता है। सिद्ध कीजिए कि स्थिर त्रिज्या बनाए रखने के लिए कक्षा क्षेत्र पर औसत फ्लक्स घनत्व <B> परिधि पर फ्लक्स घनत्व B0 का दोगुना (<B> = 2 B0) होना चाहिए। यदि dΦ/dt = 42.5 Wb/s है, तो इलेक्ट्रॉन द्वारा अनुभव किया गया त्वरित विद्युत क्षेत्र E ज्ञात कीजिए।',
        bn: 'একটি বিটাট্রন কণা ত্বরণকারীতে একটি ইলেকট্রন r0 = ০.৮৫ মিটার স্থির ব্যাসার্ধের কক্ষপথে আবর্তিত হয়। প্রমাণ করুন যে স্থির ব্যাসার্ধ বজায় রেখে ত্বরান্বিত করতে কক্ষপথের গড় ফ্লাক্স ঘনত্ব <B> পরিধির ফ্লাক্স ঘনত্ব B0 এর দ্বিগুণ হতে হবে (<B> = ২ B0)। যদি dΦ/dt = ৪২.৫ Wb/s হয়, তবে ইলেকট্রনের উপর প্রযুক্ত আবিষ্ট ত্বরণ সৃষ্টিকারী তড়িৎ ক্ষেত্র E নির্ণয় করুন।'
      },
      solution: {
        en: 'Step 1: Derivation of the Betatron 2:1 Condition:\nThe induced electric field accelerating the electron around the circular orbit of circumference 2π r0 is:\n∮ E · dl = E · (2π r0) = dΦ/dt => E = (1 / 2π r0) · (dΦ/dt).\nThe accelerating tangential force is F = e E = (e / 2π r0) · (dΦ/dt) = dp/dt (rate of change of momentum).\nIntegrating gives momentum p = (e / 2π r0) · Φ.\nFor stable circular motion in magnetic field B0 at radius r0, magnetic centripetal guidance requires p = e B0 r0.\nEquating the two expressions for momentum:\n(e / 2π r0) · Φ = e B0 r0 => Φ = 2π r0² B0.\nSince total flux Φ = <B> · (π r0²), we have:\n<B> · (π r0²) = 2π r0² B0 => <B> = 2 B0 (the 2:1 Betatron condition).\n\nStep 2: Numerical evaluation of accelerating field E:\nE = (1 / 2π r0) · (dΦ/dt) = (42.5 Wb/s) / [2 · π · 0.85 m] = 42.5 / 5.3407 = 7.958 V/m ≈ 7.96 V/m.',
        hi: 'चरण 1: बीटाट्रॉन 2:1 शर्त की व्युत्पत्ति:\nE = (1 / 2π r0)(dΦ/dt)।\nसंवेग p = (e / 2π r0)Φ।\nवृत्ताकार कक्षा में स्थिरता हेतु p = e B0 r0।\nदोनों की तुलना से: Φ = 2π r0² B0। चूंकि Φ = <B>(π r0²), अतः <B> = 2 B0 प्राप्त होता है।\nचरण 2: विद्युत क्षेत्र की गणना:\nE = 42.5 / (2π × 0.85) = 7.96 V/m।',
        bn: 'ধাপ ১: বিটাট্রন ২:১ শর্ত প্রতিপাদন:\nE = (১ / ২π r0)(dΦ/dt)।\nভরবেগ p = (e / ২π r0)Φ।\nবৃত্তীয় কক্ষপথে চুম্বকীয় শর্ত p = e B0 r0।\nউভয় সমীকরণ তুলনা করে: Φ = ২π r0² B0। যেহেতু Φ = <B>(π r0²), অতএব <B> = ২ B0 প্রমাণিত।\nধাপ ২: তড়িৎ ক্ষেত্র গণনা:\nE = ৪২.৫ / (২π × ০.৮৫) = ৭.৯৬ V/m।'
      },
      givenValues: {
        'r0': '0.85 m',
        'dΦ/dt': '42.5 Wb/s'
      },
      finalAnswer: {
        en: '<B> = 2 B0 rigorously verified;  Accelerating electric field E = 7.96 V/m along orbit',
        hi: '<B> = 2 B0 सत्यापित;  त्वरित विद्युत क्षेत्र E = 7.96 V/m',
        bn: '<B> = ২ B0 প্রমাণিত;  ত্বরণ সৃষ্টিকারী তড়িৎ ক্ষেত্র E = ৭.৯৬ V/m'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Power Grid Transformers: Transferring gigawatts of electrical energy between transmission voltages (e.g. 400 kV to 33 kV) using stationary core induction ∇ × E = -∂B/∂t.',
      'Induction Cooktops: Generating high-frequency changing magnetic fields (20–40 kHz) that induce circulating electric eddy currents in ferromagnetic cookware bases.',
      'Electromagnetic Braking Systems: High-speed trains (TGV, Shinkansen) utilize induced eddy currents in rail fins to provide wear-free, contactless braking.',
      'Betatron Electron Accelerators: Accelerating relativistic electron beams to 300 MeV using induced circular non-conservative electric fields.',
      'Wireless Inductive Power Transfer: Charging electric vehicles and mobile devices through air gaps via coupled time-varying magnetic flux.'
    ],
    hi: [
      'पावर ग्रिड ट्रांसफार्मर: स्थिर कोर प्रेरण ∇ × E = -∂B/∂t का उपयोग करके ट्रांसमिशन वोल्टेज (400 kV से 33 kV) के बीच भारी ऊर्जा स्थानांतरित करना।',
      'इंडक्शन कुकटॉप: उच्च-आवृत्ति चुंबकीय क्षेत्र (20-40 kHz) उत्पन्न करना जो बर्तनों के आधार में भंवर धाराएं प्रेरित करके ताप उत्पन्न करते हैं।',
      'इलेक्ट्रोमैग्नेटिक ब्रेकिंग सिस्टम: हाई-स्पीड ट्रेनें घर्षण-रहित और सुरक्षित ब्रेकिंग प्रदान करने के लिए पटरियों में प्रेरित भंवर धाराओं का उपयोग करती हैं।',
      'बीटाट्रॉन इलेक्ट्रॉन त्वरक: प्रेरित वृत्ताकार गैर-संरक्षी विद्युत क्षेत्रों का उपयोग करके इलेक्ट्रॉनों को 300 MeV तक त्वरित करना।',
      'वायरलेस इंडक्टिव पावर ट्रांसफर: चुंबकीय फ्लक्स युग्मन द्वारा इलेक्ट्रिक वाहनों और स्मार्टफोन को बिना तार के चार्ज करना।'
    ],
    bn: [
      'পাওয়ার গ্রিড ট্রান্সফরমার: স্থির কোরে ফ্যারাডে আবেশ ∇ × E = -∂B/∂t প্রয়োগ করে গিগাওয়াট বিদ্যুৎ উচ্চ ভোল্টেজ থেকে বিতরণ ভোল্টেজে রূপান্তর।',
      'ইনডাকশন কুকার: উচ্চ ফ্রিকোয়েন্সির চৌম্বক ক্ষেত্র তৈরি করে পাত্রের তলায় ঘূর্ণি প্রবাহ সৃষ্টির মাধ্যমে রান্না সম্পন্ন করা।',
      'ইলেক্ট্রোম্যাগনেটিক ব্রেকিং সিস্টেম: বুলেট ট্রেনে ঘর্ষণহীন এবং কার্যকর গতি নিয়ন্ত্রণের জন্য লাইনে আবিষ্ট এডি কারেন্ট ব্যবহার।',
      'বিটাট্রন কণা ত্বরণকারী: আবিষ্ট অসংরক্ষণশীল বৃত্তাকার তড়িৎ ক্ষেত্র ব্যবহার করে ইলেকট্রনকে ৩০০ MeV পর্যন্ত শক্তিতে উন্নীত করা।',
      'ওয়্যারলেস পাওয়ার ট্রান্সফার: চৌম্বক ফ্লাক্স লিংকেজের মাধ্যমে বৈদ্যুতিক গাড়ি ও স্মার্টফোন তারহীন পদ্ধতিতে চার্জিং।'
    ]
  },
  importantPoints: {
    en: [
      'Faraday’s law in differential form is ∇ × E = -∂B/∂t, proving that time-varying magnetic fields are the curl sources of electric fields.',
      'An induced electric field produced by ∂B/∂t is strictly non-conservative (∮ E · dl ≠ 0) and cannot be defined by a single scalar electrostatic potential.',
      'The negative sign in Faraday’s law embodies Lenz’s Law, guaranteeing thermodynamic energy conservation.',
      'Induced electric fields exist in empty vacuum even if no physical metallic wires or test charges are present.',
      'Transformer EMF involves stationary conductors in time-varying fields, whereas motional EMF involves moving conductors traversing magnetic fields.',
      'The magnetic field lines of an induced electric field form continuous closed concentric rings centered on the axis of magnetic flux change.'
    ],
    hi: [
      'अवकल रूप में फैराडे का नियम ∇ × E = -∂B/∂t है, जो सिद्ध करता है कि समय-परिवर्ती चुंबकीय क्षेत्र विद्युत क्षेत्र के घूर्णी स्रोत हैं।',
      '∂B/∂t द्वारा उत्पन्न प्रेरित विद्युत क्षेत्र पूरी तरह से गैर-संरक्षी (∮ E · dl ≠ 0) होता है और इसे अदिश विभव से परिभाषित नहीं किया जा सकता।',
      'फैराडे के नियम में ऋणात्मक चिह्न लेन्ज़ के नियम को दर्शाता है, जो ऊर्जा संरक्षण को सुनिश्चित करता है।',
      'प्रेरित विद्युत क्षेत्र निर्वात में भी मौजूद रहता है, भले ही वहां कोई धातु का तार या आवेश न हो।',
      'ट्रांसफार्मर ईएमएफ में चालक स्थिर रहते हैं जबकि चुंबकीय क्षेत्र बदलता है; गतिज ईएमएफ में चालक चुंबकीय क्षेत्र में गति करते हैं।',
      'प्रेरित विद्युत क्षेत्र की रेखाएं संवृत संकेंद्रीय छल्ले बनाती हैं जिनका केंद्र चुंबकीय फ्लक्स अक्ष होता है।'
    ],
    bn: [
      'অবকল রূপে ফ্যারাডের সূত্র হলো ∇ × E = -∂B/∂t, যা প্রমাণ করে যে পরিবর্তনশীল চৌম্বক ক্ষেত্র তড়িৎ ক্ষেত্রের ঘূর্ণনশীল উৎস।',
      '∂B/∂t দ্বারা সৃষ্ট আবিষ্ট তড়িৎ ক্ষেত্র কঠোরভাবে অসংরক্ষণশীল (∮ E · dl ≠ ০) এবং কোনো একক স্কেলার বিভব দ্বারা সংজ্ঞায়িত নয়।',
      'ফ্যারাডের সূত্রের ঋণাত্মক চিহ্নটি লেনজের সূত্রের প্রতিফলন, যা তাপগতীয় শক্তির নিত্যতা নিশ্চিত করে।',
      'কোনো পরিবাহী তার বা আধান না থাকলেও শূন্যস্থানে আবিষ্ট তড়িৎ ক্ষেত্র সৃষ্টি হতে পারে।',
      'ট্রান্সফরমার ইএমএফ এ পরিবাহী স্থির থাকে ও ক্ষেত্র পরিবর্তিত হয়; অন্যদিকে গতিশীল ইএমএফ এ পরিবাহী চৌম্বক ক্ষেত্রে সচল থাকে।',
      'আবিষ্ট তড়িৎ বলরেখাগুলি চৌম্বক ফ্লাক্স পরিবর্তনের অক্ষকে কেন্দ্র করে অবিচ্ছিন্ন বদ্ধ বৃত্ত গঠন করে।'
    ]
  },
  commonMistakes: {
    en: [
      'Believing that electric fields can only be created by electric charges; time-changing magnetic flux ∂B/∂t creates electric fields without any charges present.',
      'Applying electrostatic potential formulas (like V = k Q / r) to induced electric fields; because ∇ × E ≠ 0, electrostatic potential is undefined for induced fields.',
      'Confusing the origin of transformer EMF (due to ∂B/∂t on stationary electrons) with motional EMF (due to magnetic Lorentz force v × B on moving conductors).',
      'Ignoring the negative sign (Lenz’s law) during numerical calculations of induced EMF and current direction.'
    ],
    hi: [
      'यह मानना कि विद्युत क्षेत्र केवल आवेशों द्वारा उत्पन्न हो सकते हैं; समय-परिवर्ती चुंबकीय क्षेत्र बिना किसी आवेश के भी विद्युत क्षेत्र बना सकता है।',
      'प्रेरित विद्युत क्षेत्र में स्थिरवैद्युत विभव सूत्रों (जैसे V = k Q / r) को लागू करना; ∇ × E ≠ 0 होने पर विभव परिभाषित नहीं होता।',
      'ट्रांसफार्मर ईएमएफ (स्थिर इलेक्ट्रॉनों पर ∂B/∂t) और गतिज ईएमएफ (चालक की गति v × B) के मूल कारण को एक ही समझ लेना।',
      'ईएमएफ और धारा की दिशा की गणना करते समय ऋणात्मक चिह्न (लेन्ज़ का नियम) की उपेक्षा करना।'
    ],
    bn: [
      'মনে করা যে কেবল তড়িৎ আধানই তড়িৎ ক্ষেত্র তৈরি করতে পারে; পরিবর্তনশীল চৌম্বক ক্ষেত্র কোনো আধান ছাড়াই শূন্যস্থানে তড়িৎ ক্ষেত্র তৈরি করে।',
      'আবিষ্ট তড়িৎ ক্ষেত্রে স্থিরতড়িৎ বিভবের সূত্র প্রয়োগ করা; যেহেতু ∇ × E ≠ ০, তাই এখানে প্রচলিত বিভব অকার্যকর।',
      'ট্রান্সফরমার ইএমএফ (∂B/∂t জনিত) এবং গতিশীল ইএমএফ (v × B জনিত) এর উৎপত্তিকে একাকার করে ফেলা।',
      'আবিষ্ট ভোল্টেজ ও প্রবাহের দিক নির্ণয়ে লেনজের সূত্রের ঋণাত্মক চিহ্নকে উপেক্ষা করা।'
    ]
  },
  keyTakeaways: {
    en: [
      "Faraday's Law in differential form ∇ × E = -∂B/∂t establishes the fundamental electromagnetic coupling from changing magnetic fields to circulating electric fields.",
      'The induced electric field is non-conservative: work done along a closed loop is non-zero, creating a net EMF = ∮ E · dl.',
      'Lenz’s Law is an unavoidable consequence of conservation of energy: nature resists magnetic flux changes.',
      'Both transformer induction (stationary coils) and motional induction (spinning generators) are unified under Faraday’s comprehensive law.',
      'This law forms the third equation of Maxwell’s electromagnetic field theory, providing the fundamental mechanism that generates electric fields in traveling electromagnetic waves.'
    ],
    hi: [
      'अवकल रूप में फैराडे का नियम ∇ × E = -∂B/∂t परिवर्ती चुंबकीय क्षेत्र से परिसंचारी विद्युत क्षेत्र के मौलिक युग्मन को स्थापित करता है।',
      'प्रेरित विद्युत क्षेत्र गैर-संरक्षी होता है: एक बंद लूप के अनुदिश किया गया कार्य अशून्य होता है, जो शुद्ध ईएमएफ उत्पन्न करता है।',
      'लेन्ज़ का नियम ऊर्जा संरक्षण का अपरिहार्य परिणाम है: प्रकृति चुंबकीय फ्लक्स परिवर्तन का विरोध करती है।',
      'ट्रांसफार्मर प्रेरण (स्थिर कॉइल) और गतिज प्रेरण (घूर्णनशील जनरेटर) दोनों फैराडे के नियम के तहत एकीकृत हैं।',
      'यह नियम मैक्सवेल के विद्युत चुंबकीय क्षेत्र सिद्धांत का तीसरा समीकरण है, जो विद्युत चुंबकीय तरंगों के प्रसार का आधार है।'
    ],
    bn: [
      'ফ্যারাডের অবকল রূপ ∇ × E = -∂B/∂t পরিবর্তনশীল চৌম্বক ক্ষেত্র থেকে ঘূর্ণনশীল তড়িৎ ক্ষেত্র সৃষ্টির মূল ভিত্তি স্থাপন করে।',
      'আবিষ্ট তড়িৎ ক্ষেত্র অসংরক্ষণশীল: বদ্ধ লুপে কৃতকার্য অশূন্য হওয়ায় এটি নেট তড়িচ্চালক বল (EMF) সৃষ্টি করে।',
      'লেনজের সূত্র শক্তির নিত্যতার অনিবার্য প্রকাশ: প্রকৃতি সর্বদা ফ্লাক্স পরিবর্তনের বিরোধিতা করে।',
      'ট্রান্সফরমার আবেশ (স্থির কুণ্ডলী) এবং গতিশীল আবেশ (ঘূর্ণনশীল জেনারেটর) উভয়ই ফ্যারাডের সূত্রের অধীন।',
      'এটি ম্যাক্সওয়েলের চারটি সূত্রের তৃতীয়টি, যা মহাশূন্যে তড়িৎচৌম্বক তরঙ্গ বিস্তারের চালিকাশক্তি।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch11-l04-01',
      question: {
        en: 'What is the differential form of Faraday’s Law of Electromagnetic Induction?',
        hi: 'विद्युत चुंबकीय प्रेरण के फैराडे नियम का अवकल रूप क्या है?',
        bn: 'তড়িৎচৌম্বকীয় আবেশের ফ্যারাডের সূত্রের অবকল রূপ কোনটি?'
      },
      options: [
        { id: 'opt-a', text: { en: '∇ · E = -∂B/∂t', hi: '∇ · E = -∂B/∂t', bn: '∇ · E = -∂B/∂t' } },
        { id: 'opt-b', text: { en: '∇ × E = -∂B/∂t', hi: '∇ × E = -∂B/∂t', bn: '∇ × E = -∂B/∂t' } },
        { id: 'opt-c', text: { en: '∇ × E = +∂B/∂t', hi: '∇ × E = +∂B/∂t', bn: '∇ × E = +∂B/∂t' } },
        { id: 'opt-d', text: { en: '∇ × B = -∂E/∂t', hi: '∇ × B = -∂E/∂t', bn: '∇ × B = -∂E/∂t' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: "Faraday's Law in point form states that the curl of the electric field equals the negative time rate of change of magnetic flux density: ∇ × E = -∂B/∂t.",
        hi: 'फैराडे के नियम का अवकल रूप बताता है कि विद्युत क्षेत्र का कर्ल चुंबकीय फ्लक्स घनत्व के परिवर्तन की ऋणात्मक दर के बराबर होता है: ∇ × E = -∂B/∂t।',
        bn: 'ফ্যারাডের সূত্রের অবকল রূপানুযায়ী তড়িৎ ক্ষেত্রের কার্ল চৌম্বক ফ্লাক্স ঘনত্ব পরিবর্তনের ঋণাত্মক হারের সমান: ∇ × E = -∂B/∂t।'
      }
    },
    {
      id: 'mcq-ch11-l04-02',
      question: {
        en: 'How does an induced electric field produced by a changing magnetic field differ from an electrostatic field?',
        hi: 'परिवर्ती चुंबकीय क्षेत्र द्वारा उत्पन्न प्रेरित विद्युत क्षेत्र स्थिरवैद्युत क्षेत्र से किस प्रकार भिन्न होता है?',
        bn: 'পরিবর্তনশীল চৌম্বক ক্ষেত্র দ্বারা আবিষ্ট তড়িৎ ক্ষেত্র স্থিরতড়িৎ ক্ষেত্র থেকে কীভাবে পৃথক?'
      },
      options: [
        { id: 'opt-a', text: { en: 'The induced field is non-conservative with non-zero curl (∇ × E ≠ 0)', hi: 'प्रेरित क्षेत्र अशून्य कर्ल (∇ × E ≠ 0) के साथ गैर-संरक्षी होता है', bn: 'আবিষ্ট ক্ষেত্রটি অসংরক্ষণশীল এবং এর কার্ল অশূন্য (∇ × E ≠ 0)' } },
        { id: 'opt-b', text: { en: 'The induced field exerts zero force on electric charges', hi: 'प्रेरित क्षेत्र आवेशों पर शून्य बल लगाता है', bn: 'আবিষ্ট ক্ষেত্র আধানের উপর কোনো বল প্রয়োগ করে না' } },
        { id: 'opt-c', text: { en: 'The induced field can only exist inside solid metals', hi: 'प्रेरित क्षेत्र केवल ठोस धातुओं के भीतर ही रह सकता है', bn: 'আবিষ্ট ক্ষেত্র কেবল কঠিন ধাতুর অভ্যন্তরেই থাকতে পারে' } },
        { id: 'opt-d', text: { en: 'The induced field has no units in SI', hi: 'प्रेरित क्षेत्र की SI में कोई इकाई नहीं होती', bn: 'আবিষ্ট ক্ষেত্রের SI তে কোনো একক নেই' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'Electrostatic fields are conservative (∇ × E = 0, closed line integral is zero). Induced electric fields are non-conservative (∇ × E = -∂B/∂t ≠ 0), meaning their closed line integral yields a net EMF.',
        hi: 'स्थिरवैद्युत क्षेत्र संरक्षी होते हैं (∇ × E = 0)। प्रेरित विद्युत क्षेत्र गैर-संरक्षी होते हैं (∇ × E ≠ 0), जिससे बंद पथ का समाकल नेट ईएमएफ देता है।',
        bn: 'স্থিরতড়িৎ ক্ষেত্র সংরক্ষণশীল (∇ × E = ০)। আবিষ্ট তড়িৎ ক্ষেত্র অসংরক্ষণশীল (∇ × E ≠ ০), যার ফলে আবদ্ধ পথের সমাকলন নেট ইএমএফ প্রদান করে।'
      }
    },
    {
      id: 'mcq-ch11-l04-03',
      question: {
        en: 'What fundamental law of physics is enforced by the negative sign in Faraday’s Law e = -dΦ/dt?',
        hi: 'फैराडे के नियम e = -dΦ/dt में ऋणात्मक चिह्न द्वारा भौतिकी का कौन सा मौलिक नियम लागू होता है?',
        bn: 'ফ্যারাডের সূত্রের e = -dΦ/dt ঋণাত্মক চিহ্ন দ্বারা পদার্থবিজ্ঞানের কোন মৌলিক নীতি নিশ্চিত হয়?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Conservation of Linear Momentum', hi: 'रेखीय संवेग का संरक्षण', bn: 'রৈখিক ভরবেগের নিত্যতা' } },
        { id: 'opt-b', text: { en: 'Conservation of Energy (Lenz’s Law)', hi: 'ऊर्जा का संरक्षण (लेन्ज़ का नियम)', bn: 'শক্তির নিত্যতা (লেনজের সূত্র)' } },
        { id: 'opt-b', text: { en: 'Conservation of Baryon Number', hi: 'बेरियन संख्या का संरक्षण', bn: 'ব্যারিয়ন সংখ্যার নিত্যতা' } },
        { id: 'opt-d', text: { en: 'Second Law of Thermodynamics (Entropy)', hi: 'ऊष्मागतिकी का दूसरा नियम (एंट्रॉपी)', bn: 'তাপগতিবিদ্যার দ্বিতীয় সূত্র' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'The negative sign represents Lenz’s law: the induced EMF always opposes the change in flux. If it reinforced the change, infinite free energy would be created, violating conservation of energy.',
        hi: 'ऋणात्मक चिह्न लेन्ज़ के नियम को दर्शाता है: प्रेरित ईएमएफ सदैव फ्लक्स परिवर्तन का विरोध करता है। यदि यह विरोध न करता तो अनंत ऊर्जा उत्पन्न होने लगती, जो ऊर्जा संरक्षण का उल्लंघन है।',
        bn: 'ঋণাত্মক চিহ্নটি লেনজের সূত্রের প্রকাশক: আবিষ্ট ইএমএফ সর্বদা ফ্লাক্স পরিবর্তনের বিরোধিতা করে। অন্যথায় অনন্ত শক্তি তৈরি হতো যা শক্তির নিত্যতা লঙ্ঘন করতো।'
      }
    },
    {
      id: 'mcq-ch11-l04-04',
      question: {
        en: 'A straight conducting rod of length L moves with constant velocity v perpendicular to a uniform magnetic field B. What is the motional EMF induced across its ends?',
        hi: 'L लंबाई की एक सीधी चालक छड़ एकसमान चुंबकीय क्षेत्र B के लंबवत v वेग से गति करती है। इसके सिरों पर प्रेरित गतिज ईएमएफ क्या होगा?',
        bn: 'L দৈর্ঘ্যের একটি সরল পরিবাহী দণ্ড সুষম চৌম্বক ক্ষেত্র B এর লম্ব বরাবর v বেগে গতিশীল। এর দুই প্রান্তে আবিষ্ট গতিশীল ইএমএফ কত?'
      },
      options: [
        { id: 'opt-a', text: { en: 'e = B · L · v', hi: 'e = B · L · v', bn: 'e = B · L · v' } },
        { id: 'opt-b', text: { en: 'e = B · L / v', hi: 'e = B · L / v', bn: 'e = B · L / v' } },
        { id: 'opt-c', text: { en: 'e = B² · L · v', hi: 'e = B² · L · v', bn: 'e = B² · L · v' } },
        { id: 'opt-d', text: { en: 'Zero', hi: 'शून्य', bn: 'শূন্য' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'For mutually perpendicular velocity, field, and rod length, motional EMF is e = ∮ (v × B) · dl = v B L.',
        hi: 'परस्पर लंबवत वेग, क्षेत्र तथा छड़ की लंबाई के लिए गतिज ईएमएफ e = B L v होता है।',
        bn: 'পরস্পর লম্ব বেগ, ক্ষেত্র ও দণ্ডের দৈর্ঘ্যের জন্য গতিশীল ইএমএফ e = B L v।'
      }
    },
    {
      id: 'mcq-ch11-l04-05',
      question: {
        en: 'Inside a cylindrical region of radius R, the magnetic field is uniform and changes at rate dB/dt. At distance r from the axis (r < R), how does the induced electric field magnitude E vary with r?',
        hi: 'R त्रिज्या के बेलनाकार क्षेत्र के भीतर अक्ष से r दूरी पर (r < R) प्रेरित विद्युत क्षेत्र E किस प्रकार बदलता है?',
        bn: 'R ব্যাসার্ধের চোঙাকৃতি অঞ্চলে অক্ষ থেকে r দূরত্বে (r < R) আবিষ্ট তড়িৎ ক্ষেত্র E কীভাবে পরিবর্তিত হয়?'
      },
      options: [
        { id: 'opt-a', text: { en: 'E ∝ 1 / r', hi: 'E ∝ 1 / r', bn: 'E ∝ 1 / r' } },
        { id: 'opt-b', text: { en: 'E ∝ r (linearly increases from center)', hi: 'E ∝ r (केंद्र से रैखिक रूप से बढ़ता है)', bn: 'E ∝ r (কেন্দ্র থেকে রৈখিকভাবে বাড়ে)' } },
        { id: 'opt-c', text: { en: 'E ∝ r²', hi: 'E ∝ r²', bn: 'E ∝ r²' } },
        { id: 'opt-d', text: { en: 'E is constant', hi: 'E स्थिर रहता है', bn: 'E ধ্রুবক থাকে' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'By Faraday’s law, E · (2π r) = (dB/dt) · (π r²), which yields E = (r / 2) · (dB/dt), demonstrating linear proportionality to r (E ∝ r).',
        hi: 'E(2π r) = (dB/dt)(π r²) से E = (r / 2)(dB/dt) प्राप्त होता है, जो r के सीधे समानुपाती है।',
        bn: 'E(২π r) = (dB/dt)(π r²) থেকে পাওয়া যায় E = (r / ২)(dB/dt), যা r এর সমানুপাতিক (E ∝ r)।'
      }
    },
    {
      id: 'mcq-ch11-l04-06',
      question: {
        en: 'What mathematical theorem transforms Faraday’s integral law ∮ E · dl = -d/dt ∫ B · dA into its differential form ∇ × E = -∂B/∂t?',
        hi: 'कौन सा गणितीय प्रमेय फैराडे के समाकल नियम ∮ E · dl = -d/dt ∫ B · dA को अवकल रूप ∇ × E = -∂B/∂t में बदलता है?',
        bn: 'কোন গাণিতিক উপপাদ্যটি ফ্যারাডের সমাকলন সূত্র ∮ E · dl = -d/dt ∫ B · dA কে অবকল রূপ ∇ × E = -∂B/∂t এ রূপান্তরিত করে?'
      },
      options: [
        { id: 'opt-a', text: { en: "Stokes' Theorem", hi: 'स्टोक्स का प्रमेय', bn: 'স্টোকসের উপপাদ্য' } },
        { id: 'opt-b', text: { en: 'Divergence Theorem', hi: 'डाइवर्जेंस प्रमेय', bn: 'ডাইভারজেন্স উপপاد্য' } },
        { id: 'opt-c', text: { en: 'Fourier Transform Theorem', hi: 'फोरियर रूपांतरण प्रमेय', bn: 'ফুরিয়ার রূপান্তর উপপাদ্য' } },
        { id: 'opt-d', text: { en: 'Poynting Theorem', hi: 'पॉइंटिंग प्रमेय', bn: 'পয়েন্টিং উপপাদ্য' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: "Stokes' Theorem equates the closed line integral ∮ E · dl to the surface integral of its curl ∫ (∇ × E) · dA.",
        hi: 'स्टोक्स प्रमेय बंद रेखीय समाकल ∮ E · dl को उसके कर्ल के पृष्ठ समाकल ∫ (∇ × E) · dA के बराबर रखता है।',
        bn: 'স্টোকসের উপপাদ্য বদ্ধ রৈখিক সমাকলন ∮ E · dl কে তার কার্লের পৃষ্ঠ সমাকলন ∫ (∇ × E) · dA এর সাথে সম্পর্কিত করে।'
      }
    },
    {
      id: 'mcq-ch11-l04-07',
      question: {
        en: 'Why is electrostatic potential difference undefined between two points in the presence of an induced electric field?',
        hi: 'प्रेरित विद्युत क्षेत्र की उपस्थिति में दो बिंदुओं के बीच स्थिरवैद्युत विभवांतर अपरिभाषित क्यों होता है?',
        bn: 'আবিষ্ট তড়িৎ ক্ষেত্রের উপস্থিতিতে দুটি বিন্দুর মধ্যে স্থিরতড়িৎ বিভব পার্থক্য কেন অনির্দিষ্ট?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Because electric charge ceases to exist', hi: 'क्योंकि विद्युत आवेश समाप्त हो जाता है', bn: 'কারণ তড়িৎ আধানের অস্তিত্ব থাকে না' } },
        { id: 'opt-b', text: { en: 'Because the field is non-conservative and the line integral ∫ E · dl is path-dependent', hi: 'क्योंकि क्षेत्र गैर-संरक्षी है और रेखीय समाकल ∫ E · dl पथ पर निर्भर करता है', bn: 'কারণ ক্ষেত্রটি অসংরক্ষণশীল এবং রৈখিক সমাকলন ∫ E · dl নির্বাচিত পথের উপর নির্ভরশীল' } },
        { id: 'opt-c', text: { en: 'Because resistance of wire becomes infinite', hi: 'क्योंकि तार का प्रतिरोध अनंत हो जाता है', bn: 'কারণ তারের রোধ অসীম হয়ে যায়' } },
        { id: 'opt-d', text: { en: 'Because the magnetic field is zero', hi: 'क्योंकि चुंबकीय क्षेत्र शून्य होता है', bn: 'কারণ চৌম্বক ক্ষেত্র শূন্য' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'Potential can only be uniquely defined for conservative fields (∇ × E = 0). When ∇ × E = -∂B/∂t ≠ 0, work done moving between two points depends on the path taken.',
        hi: 'विभव केवल संरक्षी क्षेत्रों के लिए ही परिभाषित होता है। जब ∇ × E ≠ 0 हो, तो दो बिंदुओं के बीच किया गया कार्य चुने गए पथ पर निर्भर करता है।',
        bn: 'বিভব কেবল সংরক্ষণশীল ক্ষেত্রে সুনির্দিষ্ট থাকে। যখন ∇ × E ≠ ০ হয়, তখন কৃতকার্য পথের উপর নির্ভরশীল হওয়ায় একক বিভব সংজ্ঞায়িত করা যায় না।'
      }
    },
    {
      id: 'mcq-ch11-l04-08',
      question: {
        en: 'A stationary coil of 200 turns encloses a magnetic flux that drops uniformly from 0.80 Wb to 0.20 Wb in 50 milliseconds. What is the induced EMF across the coil?',
        hi: '200 फेरों वाली एक स्थिर कुंडली में चुंबकीय फ्लक्स 50 मिलीसेकंड में 0.80 Wb से घटकर 0.20 Wb हो जाता है। प्रेरित ईएमएफ क्या होगा?',
        bn: '২০০ পাকের একটি স্থির কুণ্ডলীতে চৌম্বক ফ্লাক্স ৫০ মিলি সেকেন্ডে ০.৮০ Wb থেকে কমে ০.২০ Wb হয়। কুণ্ডলীতে আবিষ্ট ইএমএফ কত?'
      },
      options: [
        { id: 'opt-a', text: { en: '2400 V', hi: '2400 V', bn: '২৪০০ V' } },
        { id: 'opt-b', text: { en: '120 V', hi: '120 V', bn: '১২০ V' } },
        { id: 'opt-c', text: { en: '24 V', hi: '24 V', bn: '২৪ V' } },
        { id: 'opt-d', text: { en: '600 V', hi: '600 V', bn: '৬০০ V' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: '|e| = N |ΔΦ / Δt| = 200 · |(0.20 - 0.80) / 0.050| = 200 · (0.60 / 0.050) = 200 · 12 = 2400 Volts (2.4 kV).',
        hi: '|e| = N |ΔΦ / Δt| = 200 × (0.60 / 0.050) = 2400 V (2.4 kV)।',
        bn: '|e| = N |ΔΦ / Δt| = ২০০ × (০.৬০ / ০.০৫০) = ২৪০০ V (২.৪ kV)।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch11-l04-01',
      question: {
        en: 'A magnetic field in a region is given by B(t) = (0.50 t² - 2.0 t) k̂ Tesla. A circular loop of radius r = 10 cm lies in the xy-plane. Find the induced EMF in the loop at time t = 4.0 s.',
        hi: 'एक क्षेत्र में चुंबकीय क्षेत्र B(t) = (0.50 t² - 2.0 t) k̂ टेस्ला है। r = 10 सेमी त्रिज्या का एक वृत्ताकार लूप xy-समतल में स्थित है। t = 4.0 s पर लूप में प्रेरित ईएमएफ ज्ञात कीजिए।',
        bn: 'একটি অঞ্চলে চৌম্বক ক্ষেত্র B(t) = (০.৫০ t² - ২.০ t) k̂ টেসলা। xy-সমতলে r = ১০ সেমি ব্যাসার্ধের একটি বৃত্তাকার লুপ রাখা আছে। t = ৪.০ সেকেন্ডে লুপে আবিষ্ট ইএমএফ নির্ণয় করুন।'
      },
      hint: {
        en: 'Area A = π r² = π(0.10)². Flux Φ(t) = B(t) · A. Differentiate with respect to t: dB/dt = 1.0 t - 2.0.',
        hi: 'क्षेत्रफल A = π(0.10)²। dB/dt = 1.0 t - 2.0 निकालें और t = 4 पर मान रखें।',
        bn: 'ক্ষেত্রফল A = π(০.১০)²। dB/dt = ১.০ t - ২.০ বের করে t = ৪ সেকেন্ড বসান।'
      },
      answerKey: {
        en: 'At t = 4 s: dB/dt = 1.0(4.0) - 2.0 = 2.0 T/s. |e| = A · (dB/dt) = π(0.01)(2.0) = 0.0628 V = 62.8 mV.',
        hi: '|e| = 62.8 mV।',
        bn: '|e| = ৬২.৮ mV।'
      }
    },
    {
      id: 'pq-ch11-l04-02',
      question: {
        en: 'State Faraday’s law of induction in differential form and explain what it reveals about the relationship between electricity and magnetism.',
        hi: 'फैराडे के प्रेरण नियम को अवकल रूप में लिखिए और समझाइए कि यह विद्युत और चुंबकत्व के संबंध के बारे में क्या उजागर करता है।',
        bn: 'ফ্যারাডের আবেশ সূত্রকে অবকল রূপে লিখুন এবং ব্যাখ্যা করুন এটি তড়িৎ ও চুম্বকত্বের সম্পর্ক বিষয়ে কী প্রকাশ করে।'
      },
      hint: {
        en: 'Consider ∇ × E = -∂B/∂t and note how it connects a time-varying magnetic field directly to an electric field.',
        hi: '∇ × E = -∂B/∂t पर विचार करें और देखें कि यह परिवर्ती चुंबकीय क्षेत्र को विद्युत क्षेत्र से कैसे जोड़ता है।',
        bn: '∇ × E = -∂B/∂t বিবেচনা করুন এবং লক্ষ্য করুন কীভাবে এটি পরিবর্তনশীল চৌম্বক ক্ষেত্রকে তড়িৎ ক্ষেত্রের সাথে সরাসরি যুক্ত করে।'
      },
      answerKey: {
        en: '∇ × E = -∂B/∂t. It reveals that magnetic and electric fields are not independent phenomena: a changing magnetic field acts as a physical vortex source that creates an electric field in empty space.',
        hi: '∇ × E = -∂B/∂t। यह सिद्ध करता है कि समय-परिवर्ती चुंबकीय क्षेत्र अंतरिक्ष में विद्युत क्षेत्र का निर्माण करता है, जिससे विद्युत और चुंबकत्व एक ही सिक्के के दो पहलू सिद्ध होते हैं।',
        bn: '∇ × E = -∂B/∂t। এটি প্রমাণ করে যে পরিবর্তনশীল চৌম্বক ক্ষেত্র মহাশূন্যে ঘূর্ণনশীল তড়িৎ ক্ষেত্র তৈরি করে, যা নির্দেশ করে এরা মূলত একই তড়িৎচৌম্বকীয় সত্তার দুটি রূপ।'
      }
    },
    {
      id: 'pq-ch11-l04-03',
      question: {
        en: 'A square wire loop of side s = 20 cm with electrical resistance R = 0.50 Ω moves at constant speed v = 5.0 m/s into a uniform magnetic field B = 0.60 T perpendicular to the plane of the loop. Calculate: (a) the induced EMF, (b) the induced current, and (c) the external mechanical force required to maintain constant speed.',
        hi: 'भुजा s = 20 सेमी और प्रतिरोध R = 0.50 Ω का एक वर्गाकार लूप v = 5.0 m/s की स्थिर चाल से B = 0.60 T के लंबवत चुंबकीय क्षेत्र में प्रवेश करता है। ज्ञात कीजिए: (a) प्रेरित ईएमएफ, (b) प्रेरित धारा, और (c) स्थिर चाल बनाए रखने के लिए आवश्यक बाह्य यांत्रिक बल।',
        bn: 'বাহুর দৈর্ঘ্য s = ২০ সেমি এবং রোধ R = ০.৫০ Ω বিশিষ্ট একটি বর্গাকার লুপ v = ৫.০ m/s সুষম দ্রুতিতে B = ০.৬০ T লম্ব চৌম্বক ক্ষেত্রে প্রবেশ করছে। নির্ণয় করুন: (a) আবিষ্ট ইএমএফ, (b) আবিষ্ট কারেন্ট, এবং (c) ধ্রুব দ্রুতি বজায় রাখতে প্রয়োজনীয় বহিরাগত যান্ত্রিক বল।'
      },
      hint: {
        en: 'Use e = B s v, I = e / R, and mechanical retarding force F = I s B.',
        hi: 'e = B s v, I = e / R तथा मंदक बल F = I s B का उपयोग करें।',
        bn: 'e = B s v, I = e / R এবং বাধাদানকারী বল F = I s B সূত্র ব্যবহার করুন।'
      },
      answerKey: {
        en: '(a) e = (0.60)(0.20)(5.0) = 0.60 V. (b) I = 0.60 / 0.50 = 1.20 A. (c) F_ext = I s B = (1.20)(0.20)(0.60) = 0.144 N (opposing motion). Mechanical power F·v = 0.144 · 5.0 = 0.72 W equals electrical power I²R = (1.20)²(0.50) = 0.72 W.',
        hi: '(a) e = 0.60 V। (b) I = 1.20 A। (c) F = 0.144 N। यांत्रिक शक्ति विद्युत शक्ति I²R = 0.72 W के ठीक बराबर है।',
        bn: '(a) e = ০.৬০ V। (b) I = ১.২০ A। (c) F = ০.১৪৪ N। যান্ত্রিক ক্ষমতা ও বৈদ্যুতিক ক্ষমতা I²R = ০.৭২ W পরস্পর সমান।'
      }
    },
    {
      id: 'pq-ch11-l04-04',
      question: {
        en: 'Contrast transformer EMF and motional EMF, explaining their mathematical expressions and physical causes.',
        hi: 'ट्रांसफार्मर ईएमएफ और गतिज ईएमएफ के बीच उनके गणितीय व्यंजकों और भौतिक कारणों की व्याख्या करते हुए अंतर स्पष्ट कीजिए।',
        bn: 'ট্রান্সফরমার ইএমএফ এবং গতিশীল ইএমএফ এর মধ্যে গাণিতিক রাশিমালা ও ভৌত কারণ উল্লেখ করে তুলনা করুন।'
      },
      hint: {
        en: 'Identify which term involves ∂B/∂t and which involves v × B.',
        hi: 'पहचानें कि किसमें ∂B/∂t और किसमें v × B शामिल है।',
        bn: 'কোনটিতে ∂B/∂t এবং কোনটিতে v × B কার্যকর তা চিহ্নিত করুন।'
      },
      answerKey: {
        en: 'Transformer EMF e_tr = -∫ (∂B/∂t) · dA occurs in stationary conductors when the magnetic field changes over time. Motional EMF e_m = ∮ (v × B) · dl occurs when a conductor physically moves through a magnetic field due to the magnetic Lorentz force. In general: e = ∮ (v × B) · dl - ∫ (∂B/∂t) · dA.',
        hi: 'ट्रांसफार्मर ईएमएफ e_tr = -∫ (∂B/∂t) · dA स्थिर चालकों में समय-परिवर्ती क्षेत्र के कारण होता है। गतिज ईएमएफ e_m = ∮ (v × B) · dl चुंबकीय क्षेत्र में गतिमान चालक पर लोरेंट्ज़ बल के कारण होता है।',
        bn: 'ট্রান্সফরমার ইএমএফ e_tr = -∫ (∂B/∂t) · dA স্থির পরিবাহীতে সময়ের সাথে চৌম্বক পরিবর্তনের ফলে ঘটে। গতিশীল ইএমএফ e_m = ∮ (v × B) · dl চৌম্বক ক্ষেত্রে পরিবাহীর গতির ফলে লোরেন্টজ বলের কারণে ঘটে।'
      }
    },
    {
      id: 'pq-ch11-l04-05',
      question: {
        en: 'An alternating magnetic flux Φ(t) = Φ0 sin(ω t) with Φ0 = 0.025 Wb and frequency f = 50 Hz links a coil of N = 400 turns. Find the expression for induced EMF e(t) and calculate its RMS value.',
        hi: 'एक प्रत्यावर्ती चुंबकीय फ्लक्स Φ(t) = Φ0 sin(ω t) (जहाँ Φ0 = 0.025 Wb, f = 50 Hz) N = 400 फेरों की कुंडली से जुड़ा है। e(t) का व्यंजक ज्ञात कीजिए तथा इसका RMS मान निकालिए।',
        bn: 'একটি পরিবর্তনশীল চৌম্বক ফ্লাক্স Φ(t) = Φ0 sin(ω t) (যেখানে Φ0 = ০.০২৫ Wb, f = ৫০ Hz) N = ৪০০ পাকের কুণ্ডলীর সাথে যুক্ত। আবিষ্ট ইএমএফ e(t) এর সমীকরণ ও এর RMS মান নির্ণয় করুন।'
      },
      hint: {
        en: 'e(t) = -N dΦ/dt = -N Φ0 ω cos(ω t). Peak voltage E_max = N Φ0 (2π f), RMS voltage E_rms = E_max / √2 = 4.44 f N Φ0.',
        hi: 'e(t) = -N Φ0 (2π f) cos(2π f t)। E_rms = 4.44 f N Φ0 का उपयोग करें।',
        bn: 'e(t) = -N Φ0 (২π f) cos(২π f t)। E_rms = ৪.৪৪ f N Φ0 সূত্র প্রয়োগ করুন।'
      },
      answerKey: {
        en: 'ω = 2π(50) = 314.16 rad/s. E_max = 400 · 0.025 · 314.16 = 3141.6 V. e(t) = -3141.6 cos(314.16 t) V. E_rms = E_max / √2 = 4.44 · 50 · 400 · 0.025 = 2220 Volts (2.22 kV).',
        hi: 'e(t) = -3141.6 cos(314.16 t) V, E_rms = 2220 V (2.22 kV)।',
        bn: 'e(t) = -৩১৪১.৬ cos(৩১৪.১৬ t) V, E_rms = ২২২০ V (২.২২ kV)।'
      }
    }
  ]
};
