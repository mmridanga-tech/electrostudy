import { Lesson } from '../types';

export const LESSON_EM_FIELD_FUNDAMENTALS: Lesson = {
  id: 'lsn-ch11-field-fundamentals',
  topicId: 'ch11-field-fundamentals',
  chapterId: 'ch-em-waves',
  order: 1,
  title: {
    en: 'Electromagnetic Field Fundamentals',
    hi: 'विद्युत चुंबकीय क्षेत्र के मूलभूत सिद्धांत',
    bn: 'তড়িৎচুম্বকীয় ক্ষেত্রের মৌলিক ভিত্তি'
  },
  description: {
    en: 'Comprehensive foundation of electric and magnetic fields, field intensities (E and H), flux densities (D and B), vector field properties, the superposition principle, and the unifying Lorentz force.',
    hi: 'विद्युत एवं चुंबकीय क्षेत्रों, क्षेत्र तीव्रताओं (E एवं H), फ्लक्स घनत्वों (D एवं B), सदिश क्षेत्र विशेषताओं, अध्यारोपण सिद्धांत तथा एकीकृत लोरेंट्ज़ बल का व्यापक आधारभूत अध्ययन।',
    bn: 'তড়িৎ ও চৌম্বক ক্ষেত্র, ক্ষেত্র প্রাবল্য (E ও H), ফ্লাক্স ঘনত্ব (D ও B), ভেক্টর ক্ষেত্রের বৈশিষ্ট্য, উপরিপাতন নীতি এবং ঐক্যবদ্ধ লোরেন্টজ বলের বিশদ মৌলিক পাঠ।'
  },
  estimatedMinutes: 35,
  easyExplanation: {
    en: 'Imagine space filled with invisible forces. A stationary electric charge creates an electric field (E) that pushes other charges. When that charge moves, it also generates a magnetic field (B) that exerts force on other moving charges. Together, electric and magnetic fields form a single, coupled entity: the electromagnetic field. Electric field intensity E measures force per unit charge, while magnetic field intensity H measures the magnetizing effort. The Lorentz force equation F = q(E + v × B) unites how both fields simultaneously govern the motion of charged particles in space.',
    hi: 'कल्पना कीजिए कि अंतरिक्ष अदृश्य बलों से भरा हुआ है। एक स्थिर विद्युत आवेश विद्युत क्षेत्र (E) उत्पन्न करता है जो अन्य आवेशों को आकर्षित या प्रतिकर्षित करता है। जब वही आवेश गति करता है, तो वह चुंबकीय क्षेत्र (B) भी उत्पन्न करता है जो अन्य गतिमान आवेशों पर बल लगाता है। दोनों मिलकर विद्युत चुंबकीय क्षेत्र बनाते हैं। विद्युत क्षेत्र तीव्रता E प्रति एकांक आवेश पर लगने वाला बल है, जबकि चुंबकीय क्षेत्र तीव्रता H चुंबकन सामर्थ्य है। लोरेंट्ज़ बल समीकरण F = q(E + v × B) दर्शाता है कि दोनों क्षेत्र मिलकर आवेशित कणों की गति को कैसे नियंत्रित करते हैं।',
    bn: 'কল্পনা করুন মহাশূন্য অদৃশ্য বলে পরিপূর্ণ। একটি স্থির তড়িৎ আধান একটি তড়িৎ ক্ষেত্র (E) তৈরি করে যা অন্যান্য আধানকে বল প্রয়োগ করে। যখন সেই আধানটি গতিশীল হয়, তখন এটি একটি চৌম্বক ক্ষেত্রও (B) সৃষ্টি করে যা অন্যান্য গতিশীল আধানের উপর বল প্রয়োগ করে। উভয় ক্ষেত্র একত্রে তড়িৎচৌম্বক ক্ষেত্র গঠন করে। তড়িৎ ক্ষেত্র প্রাবল্য E প্রতি একক আধানে বল নির্দেশ করে, এবং চৌম্বক প্রাবল্য H চুম্বকায়ন ক্ষমতা নির্দেশ করে। লোরেন্টজ বল সমীকরণ F = q(E + v × B) ব্যাখ্যা করে কীভাবে উভয় ক্ষেত্র মিলে মহাকাশে আধানের গতি নিয়ন্ত্রণ করে।'
  },
  detailedExplanation: {
    en: 'Electromagnetics is the branch of physics and electrical engineering that studies electric charges at rest and in motion. Electrostatics deals with static electric fields produced by stationary charges, described by Coulomb’s law and Gauss’s law. Magnetostatics deals with steady magnetic fields produced by constant currents, described by the Biot-Savart law and Ampere’s circuital law. In dynamic regimes, time-varying electric and magnetic fields become intimately coupled as described by Maxwell’s equations.\n\nThe electric field intensity E (vector, V/m or N/C) at a point is defined as the force experienced per unit positive test charge: E = lim(q0->0) F/q0. The electric flux density or displacement field D (vector, C/m²) accounts for the dielectric medium: D = ε E = ε0 εr E.\n\nThe magnetic flux density B (vector, Tesla or Wb/m²) represents the actual magnetic field inside a medium that interacts with moving charges. The magnetic field intensity H (vector, A/m) represents the external magnetizing effort independent of medium magnetization: B = μ H = μ0 μr H.\n\nThe principle of superposition states that the total field created by multiple charges or currents is the vector sum of individual fields: E_net = Σ E_i and B_net = Σ B_i. Field lines provide intuitive graphical representations: electric field lines originate on positive charges and terminate on negative charges, whereas magnetic flux lines always form continuous, closed loops with no beginning or end (affirming the absence of isolated magnetic monopoles). When a particle with charge q moves with velocity v through both fields, the total Lorentz force is F = q(E + v × B).',
    hi: 'विद्युत चुंबकत्व भौतिकी और इलेक्ट्रिकल इंजीनियरिंग की वह शाखा है जो स्थिर तथा गतिमान आवेशों का अध्ययन करती है। स्थिरवैद्युतिकी स्थिर आवेशों द्वारा उत्पन्न विद्युत क्षेत्रों का अध्ययन करती है, जिसे कूलॉम के नियम और गॉस के नियम द्वारा समझाया जाता है। चुंबकस्थैतिकी स्थिर धाराओं द्वारा उत्पन्न चुंबकीय क्षेत्रों का अध्ययन करती है। समय के साथ परिवर्तित होने वाले क्षेत्रों में, विद्युत और चुंबकीय क्षेत्र आपस में युग्मित हो जाते हैं जैसा कि मैक्सवेल के समीकरणों द्वारा वर्णित है।\n\nविद्युत क्षेत्र तीव्रता E किसी बिंदु पर प्रति एकांक धनात्मक परीक्षण आवेश द्वारा अनुभव किया गया बल है: E = F/q। विद्युत फ्लक्स घनत्व D = ε E माध्यम के परावैद्युतांक पर निर्भर करता है।\n\nचुंबकीय फ्लक्स घनत्व B माध्यम के भीतर वास्तविक चुंबकीय क्षेत्र को दर्शाता है (टेस्ला में)। चुंबकीय क्षेत्र तीव्रता H (A/m) चुंबकन प्रभाव को दर्शाती है: B = μ H।\n\nअध्यारोपण का सिद्धांत बताता है कि कई आवेशों या धाराओं द्वारा उत्पन्न कुल क्षेत्र व्यक्तिगत क्षेत्रों का सदिश योग होता है। जब q आवेश v वेग से दोनों क्षेत्रों में गति करता है, तो कुल लोरेंट्ज़ बल F = q(E + v × B) होता है।',
    bn: 'ইলেক্ট্রোম্যাগনেটিক্স হলো পদার্থবিদ্যা এবং তড়িৎ প্রকৌশলের সেই শাখা যা স্থির এবং গতিশীল আধান নিয়ে আলোচনা করে। স্থির তড়িৎবিদ্যা স্থির আধানের ক্ষেত্র পর্যালোচনা করে, যা কুলম্ব ও গাউসের সূত্র দ্বারা নিয়ন্ত্রিত। স্থির চুম্বকবিদ্যা অপরিবর্তনশীল তড়িৎ প্রবাহ দ্বারা সৃষ্ট চৌম্বক ক্ষেত্র পর্যালোচনা করে। পরিবর্তনশীল ক্ষেত্রে, তড়িৎ ও চৌম্বক ক্ষেত্র একে অপরের সাথে যুগলবদ্ধ হয়।\n\nতড়িৎ ক্ষেত্র প্রাবল্য E হলো প্রতি একক ধনাত্মক আধানের উপর প্রযুক্ত বল: E = F/q। তড়িৎ ফ্লাক্স ঘনত্ব D = ε E মাধ্যমের ডাইইলেক্ট্রিক বৈশিষ্ট্যের উপর নির্ভরশীল।\n\nচৌম্বক ফ্লাক্স ঘনত্ব B (টেসলা বা Wb/m²) মাধ্যমে ক্রিয়াশীল চৌম্বক বল নির্দেশ করে, এবং চৌম্বক ক্ষেত্র প্রাবল্য H (A/m) চুম্বকায়ন তীব্রতা নির্দেশ করে: B = μ H।\n\nউপরিবাতন নীতি অনুসারে একাধিক আধানের লব্ধি ক্ষেত্র হলো পৃথক ক্ষেত্রগুলির ভেক্টর যোগফল। একটি আধান q যখন v বেগে উভয় ক্ষেত্রে চলে, তখন মোট বল হলো লোরেন্টজ বল: F = q(E + v × B)।'
  },
  formulas: [
    {
      id: 'f-electric-field-intensity',
      symbol: 'E',
      expression: 'E = F / q',
      title: {
        en: 'Electric Field Intensity',
        hi: 'विद्युत क्षेत्र तीव्रता',
        bn: 'তড়িৎ ক্ষেত্র প্রাবল্য'
      },
      description: {
        en: 'Vector force exerted per unit positive test charge in an electric field.',
        hi: 'विद्युत क्षेत्र में प्रति एकांक धनात्मक परीक्षण आवेश पर लगने वाला सदिश बल।',
        bn: 'তড়িৎ ক্ষেত্রে প্রতি একক ধনাত্মক আধানের উপর প্রযুক্ত ভেক্টর বল।'
      },
      variables: [
        { symbol: 'E', name: { en: 'Electric field intensity (V/m or N/C)', hi: 'विद्युत क्षेत्र तीव्रता (V/m या N/C)', bn: 'তড়িৎ ক্ষেত্র প্রাবল্য (V/m বা N/C)' } },
        { symbol: 'F', name: { en: 'Electrostatic force (N)', hi: 'स्थिरवैद्युत बल (N)', bn: 'স্থিরতড়িৎ বল (N)' } },
        { symbol: 'q', name: { en: 'Test charge magnitude (C)', hi: 'परीक्षण आवेश परिमाण (C)', bn: 'পরীক্ষা আধান মান (C)' } }
      ]
    },
    {
      id: 'f-constitutive-relations-d-b',
      symbol: 'D, B',
      expression: 'D = ε E,  B = μ H',
      title: {
        en: 'Constitutive Medium Relations',
        hi: 'माध्यम के संरचक संबंध',
        bn: 'মাধ্যমের গঠনমূলক সম্পর্ক'
      },
      description: {
        en: 'Links flux densities (D, B) to field intensities (E, H) via permittivity and permeability.',
        hi: 'परावैद्युतांक और चुंबकशीलता के माध्यम से फ्लक्स घनत्वों को क्षेत्र तीव्रताओं से जोड़ता है।',
        bn: 'পরাবৈদ্যুতিক ধ্রুবক ও ভেদ্যতার মাধ্যমে ফ্লাক্স ঘনত্ব ও ক্ষেত্র প্রাবল্যকে সম্পর্কিত করে।'
      },
      variables: [
        { symbol: 'D', name: { en: 'Electric flux density (C/m²)', hi: 'विद्युत फ्लक्स घनत्व (C/m²)', bn: 'তড়িৎ ফ্লাক্স ঘনত্ব (C/m²)' } },
        { symbol: 'E', name: { en: 'Electric field intensity (V/m)', hi: 'विद्युत क्षेत्र तीव्रता (V/m)', bn: 'তড়িৎ ক্ষেত্র প্রাবল্য (V/m)' } },
        { symbol: 'B', name: { en: 'Magnetic flux density (Tesla, T)', hi: 'चुंबकीय फ्लक्स घनत्व (टेस्ला, T)', bn: 'চৌম্বক ফ্লাক্স ঘনত্ব (টেসলা, T)' } },
        { symbol: 'H', name: { en: 'Magnetic field intensity (A/m)', hi: 'चुंबकीय क्षेत्र तीव्रता (A/m)', bn: 'চৌম্বক ক্ষেত্র প্রাবল্য (A/m)' } },
        { symbol: 'ε', name: { en: 'Permittivity of medium (F/m)', hi: 'माध्यम का परावैद्युतांक (F/m)', bn: 'মাধ্যমের ভেদ্যতা (F/m)' } },
        { symbol: 'μ', name: { en: 'Permeability of medium (H/m)', hi: 'माध्यम की चुंबकशीलता (H/m)', bn: 'মাধ্যমের প্রবেশ্যতা (H/m)' } }
      ]
    },
    {
      id: 'f-lorentz-force',
      symbol: 'F_L',
      expression: 'F = q(E + v × B)',
      title: {
        en: 'Lorentz Force Equation',
        hi: 'लोरेंट्ज़ बल समीकरण',
        bn: 'লোরেন্টজ বল সমীকরণ'
      },
      description: {
        en: 'Total electromagnetic vector force acting on a point charge moving with velocity v.',
        hi: 'v वेग से गतिमान बिंदु आवेश पर लगने वाला कुल विद्युत चुंबकीय सदिश बल।',
        bn: 'v বেগে গতিশীল একটি বিন্দু আধানের উপর ক্রিয়াশীল মোট তড়িৎচৌম্বক বল।'
      },
      variables: [
        { symbol: 'F', name: { en: 'Total vector force (N)', hi: 'कुल सदिश बल (N)', bn: 'মোট ভেক্টর বল (N)' } },
        { symbol: 'q', name: { en: 'Charge (C)', hi: 'आवेश (C)', bn: 'আধান (C)' } },
        { symbol: 'v', name: { en: 'Velocity vector (m/s)', hi: 'वेग सदिश (m/s)', bn: 'বেগ ভেক্টর (m/s)' } },
        { symbol: 'E', name: { en: 'Electric field (V/m)', hi: 'विद्युत क्षेत्र (V/m)', bn: 'তড়িৎ ক্ষেত্র (V/m)' } },
        { symbol: 'B', name: { en: 'Magnetic field (T)', hi: 'चुंबकीय क्षेत्र (T)', bn: 'চৌম্বক ক্ষেত্র (T)' } }
      ]
    },
    {
      id: 'f-superposition-fields',
      symbol: 'E_net, B_net',
      expression: 'E_net = Σ E_i,  B_net = Σ B_i',
      title: {
        en: 'Principle of Vector Superposition',
        hi: 'सदिश अध्यारोपण सिद्धांत',
        bn: 'ভেক্টর উপরিপাতন নীতি'
      },
      description: {
        en: 'The net field produced at any point in space is the linear vector sum of fields produced by individual source charges and currents.',
        hi: 'अंतरिक्ष के किसी बिंदु पर कुल क्षेत्र अलग-अलग आवेशों और धाराओं द्वारा उत्पन्न क्षेत्रों का सदिश योग होता है।',
        bn: 'মহাকাশের যেকোনো বিন্দুতে লব্ধি ক্ষেত্র হলো স্বতন্ত্র উৎস আধান ও তড়িৎ প্রবাহ দ্বারা সৃষ্ট ক্ষেত্রসমূহের ভেক্টর যোগফল।'
      },
      variables: [
        { symbol: 'E_net', name: { en: 'Net electric field vector (V/m)', hi: 'कुल विद्युत क्षेत्र सदिश (V/m)', bn: 'লব্ধি তড়িৎ ক্ষেত্র ভেক্টর (V/m)' } },
        { symbol: 'B_net', name: { en: 'Net magnetic flux density vector (T)', hi: 'कुल चुंबकीय फ्लक्स घनत्व सदिश (T)', bn: 'লব্ধি চৌম্বক ফ্লাক্স ঘনত্ব ভেক্টর (T)' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-field-concept',
      title: {
        en: '1. The Physical Concept of Electric and Magnetic Fields',
        hi: '1. विद्युत एवं चुंबकीय क्षेत्रों की भौतिक अवधारणा',
        bn: '১. তড়িৎ ও চৌম্বক ক্ষেত্রের ভৌত ধারণা'
      },
      content: {
        en: 'In classical physics, action-at-a-distance was replaced by field theory. A field is a physical condition in space created by a source that can exert force on a receiver. A charge q1 creates an electric field E throughout space; when a second charge q2 enters this region, it experiences a force F = q2 E directly mediated by the local field at its position. Similarly, a current element I dl creates a magnetic field B according to the Biot-Savart law. The magnetic field exerts a force dF = I (dl × B) on another current element or F = q(v × B) on an individual moving charge. The electric field does work on charges (changing their kinetic energy), whereas the magnetic force is always perpendicular to velocity (v × B), doing zero work and deflecting direction without changing particle speed.',
        hi: 'शास्त्रीय भौतिकी में, क्षेत्र सिद्धांत ने दूरी पर क्रिया की जगह ली। एक स्रोत अंतरिक्ष में एक भौतिक अवस्था (क्षेत्र) उत्पन्न करता है जो अन्य कणों पर बल लगाता है। आवेश q1 अंतरिक्ष में विद्युत क्षेत्र E उत्पन्न करता है, और जब q2 इसमें आता है तो स्थानीय क्षेत्र के कारण उस पर F = q2 E बल लगता है। इसी प्रकार, धारावाही चालक चुंबकीय क्षेत्र B उत्पन्न करता है। विद्युत क्षेत्र आवेशों पर कार्य करता है, जबकि चुंबकीय बल वेग के लंबवत (v × B) होने के कारण शून्य कार्य करता है और केवल कण की दिशा बदलता है।',
        bn: 'চিরায়ত পদার্থবিদ্যায় দূরবর্তী ক্রিয়ার পরিবর্তে ক্ষেত্র তত্ত্ব প্রতিষ্ঠিত হয়। কোনো উৎস মহাকাশে যে ভৌত অবস্থা তৈরি করে তাকে ক্ষেত্র বলে। q1 আধান মহাকাশে E ক্ষেত্র তৈরি করে; অপর আধান q2 সেই অঞ্চলে এলে F = q2 E বল অনুভব করে। একইভাবে তড়িৎবাহী তার চৌম্বক ক্ষেত্র B তৈরি করে। তড়িৎ ক্ষেত্র আধানের উপর কাজ সম্পাদন করতে পারে, কিন্তু চৌম্বক বল সর্বদা বেগের সাথে লম্ব (v × B) হওয়ায় কোনো কাজ করে না, কেবল গতিপথের দিক পরিবর্তন করে।'
      },
      schematicId: 'circuit-ch11-field-fundamentals'
    },
    {
      id: 'sec-flux-and-intensity',
      title: {
        en: '2. Field Intensities vs Flux Densities',
        hi: '2. क्षेत्र तीव्रता बनाम फ्लक्स घनत्व',
        bn: '২. ক্ষেত্র প্রাবল্য বনাম ফ্লাক্স ঘনত্ব'
      },
      content: {
        en: 'A foundational distinction in electrical engineering is between intensity vectors (E and H) and density/flux vectors (D and B).\n\n• E (Electric Field Intensity, V/m): The force per unit charge. Determined by the voltage gradient between points: E = -∇V.\n• D (Electric Flux Density or Displacement, C/m²): Represents total electric flux lines per unit area. D = ε0 E + P, where P is dielectric polarization.\n• H (Magnetic Field Intensity, A/m): The magnetizing effort produced by free electric currents, independent of the magnetic properties of the surrounding material.\n• B (Magnetic Flux Density, Tesla = Wb/m²): The real magnetic field lines per unit area inside the material, including the alignment of magnetic atomic dipoles: B = μ0(H + M), where M is magnetization.\n\nIn linear, isotropic media, D = ε E and B = μ H. In vacuum, ε = ε0 = 8.854 × 10⁻¹² F/m and μ = μ0 = 4π × 10⁻⁷ H/m.',
        hi: 'इलेक्ट्रिकल इंजीनियरिंग में क्षेत्र तीव्रता (E एवं H) और फ्लक्स घनत्व (D एवं B) के बीच का अंतर अत्यंत महत्वपूर्ण है:\n\n• E (विद्युत क्षेत्र तीव्रता, V/m): प्रति इकाई आवेश पर बल। वोल्टेज प्रवणता: E = -∇V।\n• D (विद्युत फ्लक्स घनत्व, C/m²): प्रति इकाई क्षेत्रफल में कुल विद्युत फ्लक्स रेखाएं: D = ε E।\n• H (चुंबकीय क्षेत्र तीव्रता, A/m): स्वतंत्र धाराओं द्वारा उत्पन्न चुंबकन प्रयास।\n• B (चुंबकीय फ्लक्स घनत्व, टेस्ला): पदार्थ के भीतर कुल चुंबकीय रेखाएं: B = μ H।\n\nनिर्वात में ε0 = 8.854 × 10⁻¹² F/m और μ0 = 4π × 10⁻⁷ H/m होता है।',
        bn: 'তড়িৎ প্রকৌশলে ক্ষেত্র প্রাবল্য (E ও H) এবং ফ্লাক্স ঘনত্বের (D ও B) পার্থক্য অতি মৌলিক:\n\n• E (তড়িৎ ক্ষেত্র প্রাবল্য, V/m): একক আধানে বল। ভোল্টেজ গ্রেডিয়েন্ট: E = -∇V।\n• D (তড়িৎ ফ্লাক্স ঘনত্ব, C/m²): প্রতি একক ক্ষেত্রফলে মোট তড়িৎ ফ্লাক্স রেখা: D = ε E।\n• H (চৌম্বক ক্ষেত্র প্রাবল্য, A/m): মুক্ত তড়িৎ প্রবাহ দ্বারা সৃষ্ট চুম্বকায়ন প্রচেষ্টা।\n• B (চৌম্বক ফ্লাক্স ঘনত্ব, টেসলা): মাধ্যমের অভ্যন্তরে মোট চৌম্বক রেখা: B = μ H।\n\nশূন্যস্থানে ε0 = ৮.৮৫৪ × ১০⁻¹² F/m এবং μ0 = ৪π × ১০⁻⁷ H/m।'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-field-fundamentals',
      title: {
        en: 'Electric and Magnetic Vector Fields & Lorentz Deflection',
        hi: 'विद्युत एवं चुंबकीय सदिश क्षेत्र तथा लोरेंट्ज़ विक्षेपण',
        bn: 'তড়িৎ ও চৌম্বক ভেক্টর ক্ষেত্র এবং লোরেন্টজ বিক্ষেপ'
      },
      caption: {
        en: 'Schematic representation of electric field vectors diverging from a positive charge, closed concentric magnetic field lines around a current conductor, and particle trajectory under Lorentz force F = q(E + v × B).',
        hi: 'धनात्मक आवेश से अपसरित होते विद्युत क्षेत्र सदिश, धारावाही चालक के चारों ओर संकेंद्रीय संवृत चुंबकीय क्षेत्र रेखाएं, तथा लोरेंट्ज़ बल के तहत आवेशित कण का प्रक्षेपवक्र।',
        bn: 'ধনাত্মক আধান থেকে প্রসারিত তড়িৎ ক্ষেত্র ভেক্টর, তড়িৎ পরিবাহীর চারপাশে আবদ্ধ সমকেন্দ্রিক চৌম্বক ক্ষেত্র রেখা এবং লোরেন্টজ বলের অধীনে আধানের গতিপথ।'
      },
      svgType: 'circuit-ch11-field-fundamentals'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-lorentz-force-calc',
      problem: {
        en: 'A proton (charge q = 1.602 × 10⁻¹⁹ C) enters a region of crossed fields with a velocity v = 2.5 × 10⁵ m/s along the +x direction. An electric field E = 12 kV/m acts along the +y direction, and a uniform magnetic field B = 0.048 T acts along the +z direction. Calculate: (a) the electrostatic force, (b) the magnetic force, and (c) the net vector Lorentz force on the proton.',
        hi: 'एक प्रोटॉन (आवेश q = 1.602 × 10⁻¹⁹ C) +x दिशा में v = 2.5 × 10⁵ m/s के वेग से एक क्रॉस-फील्ड क्षेत्र में प्रवेश करता है। +y दिशा में विद्युत क्षेत्र E = 12 kV/m तथा +z दिशा में एकसमान चुंबकीय क्षेत्र B = 0.048 T कार्यरत है। गणना कीजिए: (a) स्थिरवैद्युत बल, (b) चुंबकीय बल, तथा (c) प्रोटॉन पर कुल लोरेंट्ज़ सदिश बल।',
        bn: 'একটি প্রোটন (আধান q = ১.৬০২ × ১০⁻¹৯ C) +x অক্ষ বরাবর v = ২.৫ × ১০⁵ m/s বেগে একটি ক্রসড ফিল্ড অঞ্চলে প্রবেশ করে। +y দিক বরাবর একটি তড়িৎ ক্ষেত্র E = ১২ kV/m এবং +z দিক বরাবর একটি সুষম চৌম্বক ক্ষেত্র B = ০.০৪৮ T ক্রিয়াশীল। নির্ণয় করুন: (a) স্থিরতড়িৎ বল, (b) চৌম্বক বল, এবং (c) প্রোটনের উপর ক্রিয়াশীল লব্ধি লোরেন্টজ বল।'
      },
      solution: {
        en: 'Step 1: Electrostatic force calculation:\nF_E = q · E = (1.602 × 10⁻¹⁹ C) · (12,000 V/m ĵ) = 1.922 × 10⁻¹⁵ N ĵ (+y direction).\n\nStep 2: Magnetic force calculation:\nF_B = q · (v × B) = (1.602 × 10⁻¹⁹ C) · [(2.5 × 10⁵ m/s î) × (0.048 T k̂)]\nSince î × k̂ = -ĵ:\nF_B = (1.602 × 10⁻¹⁹) · (1.20 × 10⁴) · (-ĵ) = -1.922 × 10⁻¹⁵ N ĵ (-y direction).\n\nStep 3: Net Lorentz force:\nF_net = F_E + F_B = (1.922 × 10⁻¹⁵ ĵ) + (-1.922 × 10⁻¹⁵ ĵ) = 0 N.\n\nPhysical Interpretation: The electrostatic upward force is precisely balanced by the magnetic downward force (v = E/B = 12,000 / 0.048 = 2.5 × 10⁵ m/s). This is the exact condition for a velocity selector used in mass spectrometers.',
        hi: 'चरण 1: स्थिरवैद्युत बल:\nF_E = q · E = (1.602 × 10⁻¹⁹ C) · (12,000 V/m) = 1.922 × 10⁻¹⁵ N (+y दिशा में)।\n\nचरण 2: चुंबकीय बल:\nF_B = q(v × B) = (1.602 × 10⁻¹⁹) · (2.5 × 10⁵ î × 0.048 k̂) = -1.922 × 10⁻¹⁵ N (-y दिशा में)।\n\nचरण 3: कुल लोरेंट्ज़ बल:\nF_net = F_E + F_B = 0 N।\n\nनिष्कर्ष: स्थिरवैद्युत ऊपर की ओर बल चुंबकीय नीचे की ओर बल द्वारा पूरी तरह संतुलित है। यह मास स्पेक्ट्रोमीटर में प्रयुक्त वेग चयनकर्ता (वेलोसिटी सेलेक्टर) की सटीक स्थिति है।',
        bn: 'ধাপ ১: স্থিরতড়িৎ বল:\nF_E = q · E = (১.৬০২ × ১০⁻¹৯ C) · (১২,০০০ V/m) = ১.৯২২ × ১০⁻১৫ N (+y অভিমুখে)।\n\nধাপ ২: চৌম্বক বল:\nF_B = q(v × B) = (১.৬০২ × ১০⁻¹৯) · (২.৫ × ১০⁵ î × ০.০৪৮ k̂) = -১.৯২২ × ১০⁻১৫ N (-y অভিমুখে)।\n\nধাপ ৩: লব্ধি লোরেন্টজ বল:\nF_net = F_E + F_B = ০ N।\n\nভৌত তাৎপর্য: উপরের দিকে প্রযুক্ত স্থিরতড়িৎ বল এবং নিচের দিকে প্রযুক্ত চৌম্বক বল পরস্পরকে সম্পূর্ণ প্রশমিত করে (v = E/B)। এটি ভর বর্ণালীমাপকে ব্যবহৃত বেগ নির্বাচকের মূল শর্ত।'
      },
      givenValues: {
        'q': '1.602 × 10⁻¹⁹ C',
        'v': '2.5 × 10⁵ m/s î',
        'E': '12,000 V/m ĵ',
        'B': '0.048 T k̂'
      },
      finalAnswer: {
        en: 'F_E = +1.922 × 10⁻¹⁵ N ĵ,  F_B = -1.922 × 10⁻¹⁵ N ĵ,  F_net = 0 N (undeflected straight motion)',
        hi: 'F_E = +1.922 × 10⁻¹⁵ N ĵ,  F_B = -1.922 × 10⁻¹⁵ N ĵ,  F_net = 0 N (सीधी रेखा में अविक्षेपित गति)',
        bn: 'F_E = +১.৯২২ × ১০⁻১৫ N ĵ,  F_B = -১.৯২২ × ১০⁻১৫ N ĵ,  F_net = ০ N (অবিক্ষিপ্ত সরলরৈখিক গতি)'
      }
    },
    {
      id: 'ex-medium-constitutive-calc',
      problem: {
        en: 'A high-voltage transformer oil has a relative permittivity εr = 2.25 and relative permeability μr = 1.0. Inside this dielectric, an electric field intensity E = 45 kV/m and magnetic field intensity H = 350 A/m exist. Determine: (a) the electric flux density D, (b) the magnetic flux density B, and (c) the ratio of D/E and B/H.',
        hi: 'एक उच्च वोल्टेज ट्रांसफार्मर तेल का आपेक्षिक परावैद्युतांक εr = 2.25 तथा आपेक्षिक चुंबकशीलता μr = 1.0 है। इस माध्यम में विद्युत क्षेत्र तीव्रता E = 45 kV/m तथा चुंबकीय क्षेत्र तीव्रता H = 350 A/m है। ज्ञात कीजिए: (a) विद्युत फ्लक्स घनत्व D, (b) चुंबकीय फ्लक्स घनत्व B, तथा (c) अनुपात D/E और B/H।',
        bn: 'একটি উচ্চ ভোল্টেজ ট্রান্সফরমার তেলের আপেক্ষিক পরাবৈদ্যুতিক ধ্রুবক εr = ২.২৫ এবং আপেক্ষিক প্রবেশ্যতা μr = ১.০। এই ডাইইলেক্ট্রিকে তড়িৎ ক্ষেত্র প্রাবল্য E = ৪৫ kV/m এবং চৌম্বক ক্ষেত্র প্রাবল্য H = ৩৫০ A/m বিদ্যমান। নির্ণয় করুন: (a) তড়িৎ ফ্লাক্স ঘনত্ব D, (b) চৌম্বক ফ্লাক্স ঘনত্ব B, এবং (c) D/E ও B/H অনুপাত।'
      },
      solution: {
        en: 'Step 1: Compute medium permittivity and electric flux density:\nε = εr · ε0 = 2.25 · (8.854 × 10⁻¹² F/m) = 1.992 × 10⁻¹¹ F/m.\nD = ε · E = (1.992 × 10⁻¹¹ F/m) · (45,000 V/m) = 8.965 × 10⁻⁷ C/m² = 0.8965 μC/m².\n\nStep 2: Compute medium permeability and magnetic flux density:\nμ = μr · μ0 = 1.0 · (4π × 10⁻⁷ H/m) = 1.2566 × 10⁻⁶ H/m.\nB = μ · H = (1.2566 × 10⁻⁶ H/m) · (350 A/m) = 4.398 × 10⁻⁴ Tesla = 0.4398 mT = 0.44 mT.\n\nStep 3: Evaluate ratios:\nD/E = ε = 1.992 × 10⁻¹¹ F/m.\nB/H = μ = 1.2566 × 10⁻⁶ H/m.',
        hi: 'चरण 1: परावैद्युतांक एवं D की गणना:\nε = 2.25 · (8.854 × 10⁻¹²) = 1.992 × 10⁻¹¹ F/m।\nD = ε · E = (1.992 × 10⁻¹¹) · 45,000 = 8.965 × 10⁻⁷ C/m² = 0.897 μC/m²।\n\nचरण 2: चुंबकशीलता एवं B की गणना:\nμ = 1.0 · (4π × 10⁻⁷) = 1.257 × 10⁻⁶ H/m।\nB = μ · H = (1.257 × 10⁻⁶) · 350 = 4.398 × 10⁻⁴ T = 0.44 mT।\n\nचरण 3: अनुपात:\nD/E = ε = 1.992 × 10⁻¹¹ F/m, B/H = μ = 1.257 × 10⁻⁶ H/m।',
        bn: 'ধাপ ১: পরাবৈদ্যুতিক ধ্রুবক ও D নির্ণয়:\nε = ২.২৫ · (৮.৮৫৪ × ১০⁻¹²) = ১.৯৯২ × ১০⁻১১ F/m।\nD = ε · E = (১.৯৯২ × ১০⁻১১) · ৪৫,০০০ = ৮.৯৬৫ × ১০⁻৭ C/m² = ০.৮৯৭ μC/m²।\n\nধাপ ২: প্রবেশ্যতা ও B নির্ণয়:\nμ = ১.০ · (৪π × ১০⁻৭) = ১.২৫৭ × ১০⁻৬ H/m।\nB = μ · H = (১.২৫৭ × ১০⁻৬) · ৩৫০ = ৪.৩৯৮ × ১০⁻৪ T = ০.৪৪ mT।\n\nধাপ ৩: অনুপাত:\nD/E = ε = ১.৯৯২ × ১০⁻১১ F/m, B/H = μ = ১.২৫৭ × ১০⁻৬ H/m।'
      },
      givenValues: {
        'εr': '2.25',
        'μr': '1.0',
        'E': '45 kV/m',
        'H': '350 A/m'
      },
      finalAnswer: {
        en: 'D = 0.8965 μC/m²,  B = 0.4398 mT (4.4 × 10⁻⁴ T),  D/E = 1.992 × 10⁻¹¹ F/m,  B/H = 1.257 × 10⁻⁶ H/m',
        hi: 'D = 0.8965 μC/m²,  B = 0.4398 mT,  D/E = 1.992 × 10⁻¹¹ F/m,  B/H = 1.257 × 10⁻⁶ H/m',
        bn: 'D = ০.৮৯৬৫ μC/m²,  B = ০.৪৩৯৮ mT,  D/E = ১.৯৯২ × ১০⁻১১ F/m,  B/H = ১.২৫৭ × ১০⁻৬ H/m'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Cathode Ray Oscilloscopes (CRO) & Electron Microscopes: Utilizing electrostatic deflection plates (E) and electromagnetic deflection coils (B) via the Lorentz force equation to steer electron beams.',
      'High-Voltage Power Cable Insulation: Calculating electric flux density D and field stress E to prevent dielectric breakdown in coaxial cross-linked polyethylene (XLPE) cables.',
      'Cyclotrons and Particle Accelerators: Employing high-frequency alternating electric fields to accelerate ions and strong static magnetic fields to bend their trajectories into expanding spirals.',
      'Hall Effect Current Sensors: Measuring transverse magnetic fields B across semiconductor chips to provide non-contact, galvanically isolated DC and AC current sensing.',
      'Mass Spectrometers & Velocity Selectors: Balancing perpendicular electric and magnetic forces (E = v B) to isolate isotopes and ions with specific charge-to-mass ratios.'
    ],
    hi: [
      'सीआरओ एवं इलेक्ट्रॉन माइक्रोस्कोप: इलेक्ट्रॉन बीम को नियंत्रित करने हेतु लोरेंट्ज़ बल का उपयोग करके इलेक्ट्रोस्टैटिक विक्षेपण प्लेटों और चुंबकीय कॉइल्स का संचालन।',
      'उच्च वोल्टेज केबल इन्सुलेशन: परावैद्युत विखंडन (डाइइलेक्ट्रिक ब्रेकडाउन) को रोकने के लिए विद्युत फ्लक्स घनत्व D और क्षेत्र तनाव E की सटीक गणना।',
      'साइक्लोट्रॉन एवं कण त्वरक: आयनों को त्वरित करने के लिए उच्च-आवृत्ति प्रत्यावर्ती विद्युत क्षेत्र और उन्हें वृत्ताकार पथ में मोड़ने हेतु चुंबकीय क्षेत्र का उपयोग।',
      'हॉल प्रभाव करंट सेंसर: गैर-संपर्क और गैल्वेनिक रूप से पृथक धारा मापन के लिए अर्धचालकों में चुंबकीय फ्लक्स घनत्व B का मापन।',
      'द्रव्यमान स्पेक्ट्रोमीटर: विशिष्ट वेग वाले आयनों को अलग करने के लिए परस्पर लंबवत विद्युत और चुंबकीय बलों का संतुलन (v = E/B)।'
    ],
    bn: [
      'ক্যাথোড রে অসিলোস্কোপ (CRO) ও ইলেকট্রন অণুবীক্ষণ যন্ত্র: লোরেন্টজ বলের মাধ্যমে ইলেকট্রন বিমকে নিখুঁতভাবে নিয়ন্ত্রণ করতে স্থিরতড়িৎ ও চৌম্বক বলের যৌথ প্রয়োগ।',
      'উচ্চ-ভোল্টেজ ক্যাবল ইনসুলেশন: ডাইইলেক্ট্রিক ব্রেকডাউন প্রতিরোধে তড়িৎ ফ্লাক্স ঘনত্ব D এবং ফিল্ড স্ট্রেস E এর সঠিক প্রকৌশল হিসাব।',
      'সাইক্লোট্রন ও কণা ত্বরণকারী যন্ত্র: কণা ত্বরান্বিত করতে পরিবর্তনশীল তড়িৎ ক্ষেত্র এবং বৃত্তাকার ট্র্যাজেক্টোরি বজায় রাখতে শক্তিশালী চৌম্বক ক্ষেত্র ব্যবহার।',
      'হল ইফেক্ট কারেন্ট সেন্সর: স্পর্শহীন এবং নিরাপদ তড়িৎ প্রবাহ পরিমাপের জন্য অর্ধপরিবাহীতে চৌম্বক ফ্লাক্স ঘনত্ব B পরিমাপ।',
      'ভর বর্ণালীমাপক ও বেগ নির্বাচক: নির্দিষ্ট আধান-ভর অনুপাতের আয়ন পৃথকীকরণে লম্ব তড়িৎ ও চৌম্বক বলের সাম্যাবস্থা (v = E/B) প্রয়োগ।'
    ]
  },
  importantPoints: {
    en: [
      'Electric field intensity E has units of Volts per meter (V/m) or Newtons per Coulomb (N/C); both are dimensionally identical.',
      'Magnetic flux density B is measured in Tesla (T) or Wb/m²; magnetic field intensity H is measured in Amperes per meter (A/m).',
      'The magnetic force F_B = q(v × B) is always perpendicular to particle velocity, doing ZERO physical work and changing only direction, never speed.',
      'Electric flux density D is independent of dielectric medium polarizability when defined directly by free enclosed charges, whereas E depends on medium permittivity ε.',
      'Magnetic field lines always form closed, continuous loops because isolated magnetic monopoles do not exist in classical physics (∇ · B = 0).',
      'The superposition principle applies strictly to linear media where permittivity ε and permeability μ are constant and independent of field magnitude.'
    ],
    hi: [
      'विद्युत क्षेत्र तीव्रता E की इकाई वोल्ट प्रति मीटर (V/m) या न्यूटन प्रति कूलॉम (N/C) होती है; दोनों विमीय रूप से समान हैं।',
      'चुंबकीय फ्लक्स घनत्व B टेस्ला (T) या Wb/m² में मापा जाता है; चुंबकीय क्षेत्र तीव्रता H की इकाई एम्पीयर प्रति मीटर (A/m) है।',
      'चुंबकीय बल F_B = q(v × B) हमेशा कण के वेग के लंबवत होता है, इसलिए यह शून्य कार्य करता है और केवल दिशा बदलता है, चाल नहीं।',
      'विद्युत फ्लक्स घनत्व D मुक्त आवेशों द्वारा निर्धारित होता है, जबकि E माध्यम के परावैद्युतांक ε पर निर्भर करता है।',
      'चुंबकीय क्षेत्र रेखाएं हमेशा संवृत लूप बनाती हैं क्योंकि प्रकृति में पृथक चुंबकीय एकल ध्रुव (मोनोपोल) नहीं पाए जाते (∇ · B = 0)।',
      'अध्यारोपण का सिद्धांत केवल रेखीय माध्यमों (Linear Media) में लागू होता है जहां ε और μ स्थिर रहते हैं।'
    ],
    bn: [
      'তড়িৎ ক্ষেত্র প্রাবল্য E এর একক ভোল্ট প্রতি মিটার (V/m) বা নিউটন প্রতি কুলম্ব (N/C); উভয়ই মাত্রাগতভাবে অভিন্ন।',
      'চৌম্বক ফ্লাক্স ঘনত্ব B পরিমাপ করা হয় টেসলা (T) বা Wb/m²-এ; চৌম্বক ক্ষেত্র প্রাবল্য H পরিমাপ করা হয় অ্যাম্পিয়ার প্রতি মিটারে (A/m)।',
      'চৌম্বক বল F_B = q(v × B) সর্বদা কণার বেগের সাথে লম্ব হওয়ায় কোনো কার্য সম্পাদন করে না, কেবল অভিমুখ পরিবর্তন করে, দ্রুতি নয়।',
      'মুক্ত আধানের উপস্থিতিতে তড়িৎ ফ্লাক্স ঘনত্ব D মাধ্যমের পোলারাইজেশনের উপর নির্ভর করে না, তবে E মাধ্যম ভেদ্যতার (ε) উপর নির্ভরশীল।',
      'চৌম্বক বলরেখা সর্বদা বদ্ধ লুপ তৈরি করে কারণ চিরায়ত পদার্থবিদ্যায় বিচ্ছিন্ন চৌম্বক একক মেরুর কোনো অস্তিত্ব নেই (∇ · B = 0)।',
      'উপরিবাতন নীতি কেবল রৈখিক মাধ্যমে কঠোরভাবে প্রযোজ্য যেখানে ε এবং μ ক্ষেত্রের তীব্রতার উপর নির্ভরশীল নয়।'
    ]
  },
  commonMistakes: {
    en: [
      'Confusing magnetic flux density B (Tesla) with magnetic field intensity H (A/m); B represents real force-inducing flux including material magnetization, while H represents applied magnetizing drive.',
      'Assuming that a magnetic field accelerates a charged particle by increasing its speed; magnetic force only alters the velocity vector direction because F is strictly orthogonal to v.',
      'Treating field superposition as scalar addition rather than full vector addition of three-dimensional components (Ex, Ey, Ez).',
      'Believing electric field lines can form closed loops in electrostatic conditions; electrostatic lines always begin on positive charges and terminate on negative charges.'
    ],
    hi: [
      'चुंबकीय फ्लक्स घनत्व B (टेस्ला) और चुंबकीय क्षेत्र तीव्रता H (A/m) को एक ही समझ लेना; B वास्तविक फ्लक्स है जबकि H लागू किया गया चुंबकन प्रयास है।',
      'यह मानना कि चुंबकीय क्षेत्र आवेशित कण की गति (स्पीड) बढ़ाता है; चुंबकीय बल वेग के लंबवत होने के कारण केवल दिशा बदलता है, गतिज ऊर्जा नहीं।',
      'क्षेत्रों के अध्यारोपण को सदिश योग (Vector addition) के बजाय अदिश योग (Scalar addition) की तरह जोड़ना।',
      'यह सोचना कि स्थिरवैद्युत क्षेत्र रेखाएं बंद लूप बना सकती हैं; स्थिरवैद्युत रेखाएं हमेशा धनावेश से शुरू होकर ऋणावेश पर समाप्त होती हैं।'
    ],
    bn: [
      'চৌম্বক ফ্লাক্স ঘনত্ব B (টেসলা) এবং চৌম্বক ক্ষেত্র প্রাবল্য H (A/m) কে গুলিয়ে ফেলা; B হলো মোট কার্যকরী ফ্লাক্স এবং H হলো প্রযুক্ত চুম্বকায়ন বল।',
      'মনে করা যে চৌম্বক ক্ষেত্র আধানের দ্রুতি বৃদ্ধি করে; যেহেতু বল বেগের লম্ব, তাই এটি কেবল দিক পরিবর্তন করে, দ্রুতি বা গতিশক্তি পরিবর্তন করতে পারে না।',
      'ত্রিমাত্রিক ভেক্টর যোগফলের পরিবর্তে ক্ষেত্রগুলির সাধারণ স্কেলার যোগফল করা।',
      'স্থির তড়িৎ ক্ষেত্রে বলরেখা বদ্ধ লুপ তৈরি করে বলে ভুল ধারণা রাখা; স্থির তড়িৎ বলরেখা সর্বদা ধনাত্মক আধানে শুরু হয়ে ঋণাত্মক আধানে শেষ হয়।'
    ]
  },
  keyTakeaways: {
    en: [
      'Electric fields (E) originate from static or moving electric charges; magnetic fields (B) originate strictly from moving charges or currents.',
      'The Lorentz equation F = q(E + v × B) completely describes the instantaneous force exerted by electromagnetic fields on any charge.',
      'D = ε E and B = μ H are constitutive relations that bridge abstract field intensities with physical flux densities inside matter.',
      'In a region with crossed fields where E = v B and E ⟂ B ⟂ v, a moving charge experiences zero net force and travels in an undeflected straight path.',
      'Field superposition allows complex electromagnetic problems to be solved by summing the vector contributions of elementary point charges and current filaments.'
    ],
    hi: [
      'विद्युत क्षेत्र (E) स्थिर या गतिमान आवेशों से उत्पन्न होते हैं; चुंबकीय क्षेत्र (B) केवल गतिमान आवेशों या धाराओं से उत्पन्न होते हैं।',
      'लोरेंट्ज़ समीकरण F = q(E + v × B) विद्युत चुंबकीय क्षेत्रों द्वारा आवेश पर लगने वाले तात्कालिक बल का पूर्ण विवरण देता है।',
      'D = ε E और B = μ H संरचक संबंध हैं जो पदार्थ के भीतर क्षेत्र तीव्रताओं को भौतिक फ्लक्स घनत्वों से जोड़ते हैं।',
      'क्रॉस्ड फील्ड में जब E = v B तथा E ⟂ B ⟂ v हो, तो आवेश पर कुल बल शून्य होता है और वह सीधी रेखा में बिना विक्षेपित हुए गति करता है।',
      'अध्यारोपण सिद्धांत कई आवेशों और धाराओं के जटिल क्षेत्रों को व्यक्तिगत सदिश योग द्वारा हल करने में सक्षम बनाता है।'
    ],
    bn: [
      'তড়িৎ ক্ষেত্র (E) স্থির বা গতিশীল যেকোনো আধান সৃষ্টি করতে পারে; চৌম্বক ক্ষেত্র (B) কেবল গতিশীল আধান বা তড়িৎ প্রবাহ দ্বারা সৃষ্টি হয়।',
      'লোরেন্টজ সমীকরণ F = q(E + v × B) যেকোনো আধানের উপর প্রযুক্ত তাৎক্ষণিক তড়িৎচৌম্বক বলের পূর্ণাঙ্গ বিবরণ প্রদান করে।',
      'D = ε E এবং B = μ H হলো মাধ্যমের মৌলিক সমীকরণ যা ক্ষেত্র প্রাবল্যকে বস্তুর অভ্যন্তরীণ ফ্লাক্স ঘনত্বের সাথে যুক্ত করে।',
      'পরস্পর লম্ব ক্রসড ফিল্ড অঞ্চলে যখন E = v B হয়, তখন আধানের উপর লব্ধি বল শূন্য হয় এবং এটি কোনো বিক্ষেপ ছাড়াই সরলরেখায় চলে।',
      'উপরিবাতন নীতির সাহায্যে জটিল আধান বিন্যাসের লব্ধি ক্ষেত্র প্রতিটি বিন্দুর ভেক্টর যোগফল নিয়ে সহজে নির্ণয় করা যায়।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch11-l01-01',
      question: {
        en: 'What is the SI unit of electric field intensity E?',
        hi: 'विद्युत क्षेत्र तीव्रता E का SI मात्रक क्या है?',
        bn: 'তড়িৎ ক্ষেত্র প্রাবল্য E এর SI একক কী?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Volt-meter (V·m)', hi: 'वोल्ट-मीटर (V·m)', bn: 'ভোল্ট-মিটার (V·m)' } },
        { id: 'opt-b', text: { en: 'Volt per meter (V/m) or Newton per Coulomb (N/C)', hi: 'वोल्ट प्रति मीटर (V/m) या न्यूटन प्रति कूलॉम (N/C)', bn: 'ভোল্ট প্রতি মিটার (V/m) বা নিউটন প্রতি কুলম্ব (N/C)' } },
        { id: 'opt-c', text: { en: 'Coulomb per square meter (C/m²)', hi: 'कूलॉम प्रति वर्ग मीटर (C/m²)', bn: 'কুলম্ব প্রতি বর্গমিটার (C/m²)' } },
        { id: 'opt-d', text: { en: 'Tesla (T)', hi: 'टेस्ला (T)', bn: 'টেসলা (T)' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'Electric field intensity is force per unit charge (N/C) or negative potential gradient (V/m). Both units are physically identical.',
        hi: 'विद्युत क्षेत्र तीव्रता प्रति इकाई आवेश बल (N/C) या विभव प्रवणता (V/m) होती है। दोनों मात्रक समान हैं।',
        bn: 'তড়িৎ ক্ষেত্র প্রাবল্য হলো প্রতি একক আধানে প্রযুক্ত বল (N/C) বা বিভব গ্র্যাডিয়েন্ট (V/m)। উভয় একক সমতুল্য।'
      }
    },
    {
      id: 'mcq-ch11-l01-02',
      question: {
        en: 'How much work is done by a static magnetic field on a charge moving through it?',
        hi: 'एक स्थिर चुंबकीय क्षेत्र द्वारा उसमें गतिमान आवेश पर कितना कार्य किया जाता है?',
        bn: 'একটি স্থির চৌম্বক ক্ষেত্রের মধ্য দিয়ে গতিশীল কোনো আধানের উপর কৃতকার্য কত?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Always zero Joules', hi: 'सदैव शून्य जूल', bn: 'সর্বদা শূন্য জুল' } },
        { id: 'opt-b', text: { en: 'q · v · B Joules', hi: 'q · v · B जूल', bn: 'q · v · B জুল' } },
        { id: 'opt-c', text: { en: 'Proportional to charge velocity squared', hi: 'आवेश के वेग के वर्ग के समानुपाती', bn: 'আধানের বেগের বর্গের সমানুপাতিক' } },
        { id: 'opt-d', text: { en: 'Depends on the angle of entry only', hi: 'केवल प्रवेश कोण पर निर्भर करता है', bn: 'কেবলমাত্র প্রবেশ কোণের উপর নির্ভর করে' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'The magnetic force F_B = q(v × B) is always orthogonal to the instantaneous velocity vector v. Since dW = F · dl = F · (v dt) = 0, the work done is strictly zero.',
        hi: 'चुंबकीय बल F_B = q(v × B) हमेशा तात्क्षणिक वेग सदिश v के लंबवत होता है। इसलिए F · v = 0 होने के कारण किया गया कार्य सदैव शून्य होता है।',
        bn: 'চৌম্বক বল F_B = q(v × B) সর্বদা তাৎক্ষণিক বেগ ভেক্টর v এর সাথে লম্ব থাকে। তাই F · v = ০ হওয়ায় কৃতকার্য সর্বদা শূন্য হয়।'
      }
    },
    {
      id: 'mcq-ch11-l01-03',
      question: {
        en: 'Which constitutive equation links magnetic flux density B to magnetic field intensity H in a linear isotropic medium?',
        hi: 'एक रेखीय समदैशिक माध्यम में कौन सा संरचक समीकरण चुंबकीय फ्लक्स घनत्व B को चुंबकीय क्षेत्र तीव्रता H से जोड़ता है?',
        bn: 'একটি রৈখিক সমসারক মাধ্যমে কোন সম্পর্কটি চৌম্বক ফ্লাক্স ঘনত্ব B এবং চৌম্বক প্রাবল্য H এর মধ্যে সংযোগ স্থাপন করে?'
      },
      options: [
        { id: 'opt-a', text: { en: 'B = H / μ', hi: 'B = H / μ', bn: 'B = H / μ' } },
        { id: 'opt-b', text: { en: 'B = μ · H', hi: 'B = μ · H', bn: 'B = μ · H' } },
        { id: 'opt-c', text: { en: 'B = ε · H', hi: 'B = ε · H', bn: 'B = ε · H' } },
        { id: 'opt-d', text: { en: 'B = μ₀ / H', hi: 'B = μ₀ / H', bn: 'B = μ₀ / H' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'In linear isotropic media, magnetic flux density B is directly proportional to magnetic field intensity H via the permeability μ of the medium: B = μ H = μ0 μr H.',
        hi: 'रेखीय माध्यमों में चुंबकीय फ्लक्स घनत्व B = μ H = μ0 μr H होता है, जहाँ μ माध्यम की पारगम्यता है।',
        bn: 'রৈখিক মাধ্যমে চৌম্বক ফ্লাক্স ঘনত্ব B সরাসরি চৌম্বক প্রাবল্য H এর সমানুপাতিক: B = μ H = μ0 μr H।'
      }
    },
    {
      id: 'mcq-ch11-l01-04',
      question: {
        en: 'In a velocity selector with crossed perpendicular fields E and B, what speed v must an ion have to pass through undeflected?',
        hi: 'क्रॉस्ड लंबवत E और B क्षेत्रों वाले एक वेग चयनकर्ता में, किस गति v पर आयन बिना विक्षेपित हुए गुजरेगा?',
        bn: 'পরস্পর লম্ব E ও B বিশিষ্ট বেগ নির্বাচকে কোন দ্রুতিতে v একটি আয়ন অবিক্ষিপ্ত অবস্থায় নির্গত হবে?'
      },
      options: [
        { id: 'opt-a', text: { en: 'v = B / E', hi: 'v = B / E', bn: 'v = B / E' } },
        { id: 'opt-b', text: { en: 'v = E / B', hi: 'v = E / B', bn: 'v = E / B' } },
        { id: 'opt-c', text: { en: 'v = E · B', hi: 'v = E · B', bn: 'v = E · B' } },
        { id: 'opt-d', text: { en: 'v = √(E / B)', hi: 'v = √(E / B)', bn: 'v = √(E / B)' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'Undeflected motion requires q E = q v B, which yields v = E / B.',
        hi: 'बिना विक्षेपित गति के लिए q E = q v B होना आवश्यक है, जिससे v = E / B प्राप्त होता है।',
        bn: 'অবিক্ষিপ্ত গতির শর্ত হলো q E = q v B, যা থেকে পাওয়া যায় v = E / B।'
      }
    },
    {
      id: 'mcq-ch11-l01-05',
      question: {
        en: 'What does the electric displacement field D represent physically?',
        hi: 'विद्युत विस्थापन क्षेत्र D भौतिक रूप से क्या दर्शाता है?',
        bn: 'তড়িৎ সরণ ক্ষেত্র D ভৌতভাবে কী নির্দেশ করে?'
      },
      options: [
        { id: 'opt-a', text: { en: 'The force exerted on magnetic poles', hi: 'चुंबकीय ध्रुवों पर लगने वाला बल', bn: 'চৌম্বক মেরুর উপর প্রযুক্ত বল' } },
        { id: 'opt-b', text: { en: 'Electric flux per unit area originating from free charges (C/m²)', hi: 'मुक्त आवेशों से उत्पन्न प्रति इकाई क्षेत्रफल विद्युत फ्लक्स (C/m²)', bn: 'মুক্ত আধান থেকে নির্গত প্রতি একক ক্ষেত্রফলে তড়িৎ ফ্লাক্স (C/m²)' } },
        { id: 'opt-c', text: { en: 'Total electric current in a wire', hi: 'तार में कुल विद्युत धारा', bn: 'তারের মোট তড়িৎ প্রবাহ' } },
        { id: 'opt-d', text: { en: 'Potential energy per unit charge', hi: 'प्रति इकाई आवेश स्थितिज ऊर्जा', bn: 'একক আধানে বিভব শক্তি' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'Electric displacement D = ε E represents the electric flux density in Coulombs per square meter (C/m²), governed directly by free charges.',
        hi: 'विद्युत विस्थापन D = ε E प्रति वर्ग मीटर कूलॉम (C/m²) में विद्युत फ्लक्स घनत्व को दर्शाता है, जो मुक्त आवेशों द्वारा नियंत्रित होता है।',
        bn: 'তড়িৎ সরণ D = ε E প্রতি বর্গমিটারে কুলম্ব (C/m²) এককে তড়িৎ ফ্লাক্স ঘনত্ব নির্দেশ করে, যা সরাসরি মুক্ত আধান দ্বারা নির্ধারিত।'
      }
    },
    {
      id: 'mcq-ch11-l01-06',
      question: {
        en: 'Why do magnetic field lines always form closed continuous loops?',
        hi: 'चुंबकीय क्षेत्र रेखाएं सदैव संवृत सतत लूप क्यों बनाती हैं?',
        bn: 'চৌম্বক বলরেখা সর্বদা কেন অবিচ্ছিন্ন বদ্ধ লুপ তৈরি করে?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Because electric fields are conservative', hi: 'क्योंकि विद्युत क्षेत्र संरक्षी होते हैं', bn: 'কারণ তড়িৎ ক্ষেত্র সংরক্ষণশীল' } },
        { id: 'opt-b', text: { en: 'Because magnetic flux density is zero everywhere', hi: 'क्योंकि चुंबकीय फ्लक्स घनत्व हर जगह शून्य होता है', bn: 'কারণ চৌম্বক ফ্লাক্স ঘনত্ব সর্বত্র শূন্য' } },
        { id: 'opt-c', text: { en: 'Because isolated magnetic monopoles do not exist (∇ · B = 0)', hi: 'क्योंकि पृथक चुंबकीय एकल ध्रुव (मोनोपोल) अस्तित्व में नहीं हैं (∇ · B = 0)', bn: 'কারণ বিচ্ছিন্ন চৌম্বক একক মেরুর কোনো অস্তিত্ব নেই (∇ · B = 0)' } },
        { id: 'opt-d', text: { en: 'Because electric charges attract each other', hi: 'क्योंकि विद्युत आवेश एक दूसरे को आकर्षित करते हैं', bn: 'কারণ তড়িৎ আধান পরস্পরকে আকর্ষণ করে' } }
      ],
      correctOptionId: 'opt-c',
      explanation: {
        en: 'Gauss’s law for magnetism states ∇ · B = 0, meaning net magnetic flux through any closed surface is zero because isolated magnetic monopoles do not exist.',
        hi: 'चुंबकत्व के लिए गॉस का नियम ∇ · B = 0 बताता है कि किसी भी बंद सतह से कुल फ्लक्स शून्य होता है क्योंकि चुंबकीय मोनोपोल नहीं होते।',
        bn: 'চৌম্বক গাউসের সূত্র ∇ · B = ০ নির্দেশ করে যে যেকোনো বদ্ধ তলে মোট চৌম্বক ফ্লাক্স শূন্য, কারণ বিচ্ছিন্ন চৌম্বক একক মেরুর অস্তিত্ব নেই।'
      }
    },
    {
      id: 'mcq-ch11-l01-07',
      question: {
        en: 'If an electron moves parallel to a uniform magnetic field (angle θ = 0°), what magnetic force does it experience?',
        hi: 'यदि कोई इलेक्ट्रॉन एकसमान चुंबकीय क्षेत्र के समानांतर (कोण θ = 0°) गति करता है, तो वह कितना चुंबकीय बल अनुभव करता है?',
        bn: 'যদি একটি ইলেকট্রন সুষম চৌম্বক ক্ষেত্রের সমান্তরালে (কোণ θ = ০°) গতিশীল হয়, তবে এটি কী পরিমাণ চৌম্বক বল অনুভব করবে?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Maximum force q · v · B', hi: 'अधिकतम बल q · v · B', bn: 'সর্বোচ্চ বল q · v · B' } },
        { id: 'opt-b', text: { en: 'Zero force (0 N)', hi: 'शून्य बल (0 N)', bn: 'শূন্য বল (০ N)' } },
        { id: 'opt-c', text: { en: 'Half of maximum force', hi: 'अधिकतम बल का आधा', bn: 'সর্বোচ্চ বলের অর্ধেক' } },
        { id: 'opt-d', text: { en: 'Negative infinite force', hi: 'ऋणात्मक अनंत बल', bn: 'ঋণাত্মক অসীম বল' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'The magnetic force magnitude is F = |q| v B sin(θ). For motion parallel to the field, θ = 0° and sin(0°) = 0, resulting in zero magnetic force.',
        hi: 'चुंबकीय बल F = q v B sin(θ) होता है। समानांतर गति के लिए θ = 0° तथा sin(0°) = 0 होने से बल शून्य होता है।',
        bn: 'চৌম্বক বলের মান F = |q| v B sin(θ)। সমান্তরাল গতির ক্ষেত্রে θ = ০° এবং sin(০°) = ০, ফলে চৌম্বক বল শূন্য হয়।'
      }
    },
    {
      id: 'mcq-ch11-l01-08',
      question: {
        en: 'Which fundamental principle permits determining the net field by summing individual field vectors?',
        hi: 'कौन सा मौलिक सिद्धांत व्यक्तिगत क्षेत्र सदिशों को जोड़कर कुल क्षेत्र ज्ञात करने की अनुमति देता है?',
        bn: 'কোন মৌলিক নীতির ভিত্তিতে পৃথক পৃথক ক্ষেত্র ভেক্টর যোগ করে লব্ধি ক্ষেত্র নির্ণয় করা যায়?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Principle of Superposition', hi: 'अध्यारोपण का सिद्धांत (Principle of Superposition)', bn: 'উপরিবাতন নীতি (Principle of Superposition)' } },
        { id: 'opt-b', text: { en: 'Huygens Principle of wavelets', hi: 'हाइगेंस का तरंग सिद्धांत', bn: 'হাইগেনসের তরঙ্গ নীতি' } },
        { id: 'opt-c', text: { en: 'Le Chatelier Principle', hi: 'ला शातेलिए का नियम', bn: 'লা শাতেলীয়ের নীতি' } },
        { id: 'opt-d', text: { en: 'Pauli Exclusion Principle', hi: 'पाउली का अपवर्जन नियम', bn: 'পাউলির অপবর্জন নীতি' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'The Principle of Superposition states that in linear media, the resultant electric or magnetic field at any point is the vector sum of the fields produced by each source independently.',
        hi: 'अध्यारोपण का सिद्धांत बताता है कि रेखीय माध्यमों में किसी बिंदु पर परिणामी क्षेत्र प्रत्येक स्रोत द्वारा स्वतंत्र रूप से उत्पन्न क्षेत्रों का सदिश योग होता है।',
        bn: 'উপরিবাতন নীতি অনুসারে রৈখিক মাধ্যমে যেকোনো বিন্দুতে লব্ধি ক্ষেত্র হলো প্রতিটি স্বতন্ত্র উৎসের সৃষ্ট ক্ষেত্রের ভেক্টর যোগফল।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch11-l01-01',
      question: {
        en: 'An alpha particle (q = +3.2 × 10⁻¹⁹ C) moves at 4.0 × 10⁵ m/s perpendicular to a uniform magnetic field of 0.75 T. Calculate the magnetic force magnitude and the radius of its circular orbit if its mass is 6.64 × 10⁻²⁷ kg.',
        hi: 'एक अल्फा कण (q = +3.2 × 10⁻¹⁹ C) 0.75 T के एकसमान चुंबकीय क्षेत्र के लंबवत 4.0 × 10⁵ m/s से गति करता है। यदि इसका द्रव्यमान 6.64 × 10⁻²⁷ kg है, तो चुंबकीय बल तथा इसकी वृत्ताकार कक्षा की त्रिज्या ज्ञात कीजिए।',
        bn: 'একটি আলফা কণা (q = +৩.২ × ১০⁻১৯ C) ০.৭৫ T সুষম চৌম্বক ক্ষেত্রের সাথে লম্বভাবে ৪.০ × ১০⁵ m/s বেগে গতিশীল। কণাটির ভর ৬.৬৪ × ১০⁻২৭ kg হলে চৌম্বক বলের মান ও বৃত্তাকার কক্ষপথের ব্যাসার্ধ নির্ণয় করুন।'
      },
      hint: {
        en: 'Use F = q v B and set it equal to centripetal force m v² / r to find radius r = m v / (q B).',
        hi: 'F = q v B का उपयोग करें और इसे अभिकेन्द्रीय बल m v² / r के बराबर रखकर r = m v / (q B) निकालें।',
        bn: 'F = q v B সমীকরণ ব্যবহার করে কেন্দ্রমুখী বল m v² / r এর সমান ধরে ব্যাসার্ধ r = m v / (q B) নির্ণয় করুন।'
      },
      answerKey: {
        en: 'F = 9.6 × 10⁻¹⁴ N,  r = 1.107 cm (0.01107 m).',
        hi: 'F = 9.6 × 10⁻¹⁴ N,  r = 1.107 सेमी (0.01107 m)।',
        bn: 'F = ৯.৬ × ১০⁻১৪ N,  r = ১.১০৭ সেমি (০.০১১০৭ m)।'
      }
    },
    {
      id: 'pq-ch11-l01-02',
      question: {
        en: 'Distinguish clearly between field intensity (E, H) and flux density (D, B), stating their units and physical significance.',
        hi: 'क्षेत्र तीव्रता (E, H) और फ्लक्स घनत्व (D, B) के बीच उनकी इकाइयों और भौतिक महत्व को बताते हुए स्पष्ट अंतर समझाइए।',
        bn: 'ক্ষেত্র প্রাবল্য (E, H) এবং ফ্লাক্স ঘনত্বের (D, B) মধ্যে তাদের একক ও ভৌত তাৎপর্য উল্লেখপূর্বক পরিষ্কার পার্থক্য লিখুন।'
      },
      hint: {
        en: 'Recall that E and H measure driving force/effort, whereas D and B measure response/lines per area in a medium.',
        hi: 'याद रखें कि E और H प्रेरक बल को मापते हैं, जबकि D और B माध्यम में प्रति इकाई क्षेत्रफल फ्लक्स रेखाओं को मापते हैं।',
        bn: 'মনে রাখবেন E ও H চালিকা বল নির্দেশ করে, অন্যদিকে D ও B মাধ্যমে প্রতি ক্ষেত্রফলে ফ্লাক্স রেখা নির্দেশ করে।'
      },
      answerKey: {
        en: 'E (V/m) is force per unit charge; D (C/m²) is flux density from free charge. H (A/m) is magnetizing drive from current; B (Tesla) is actual magnetic flux density in the material (B = μ H).',
        hi: 'E (V/m) प्रति इकाई आवेश बल है; D (C/m²) मुक्त आवेश फ्लक्स घनत्व है। H (A/m) धारा द्वारा चुंबकन प्रयास है; B (T) पदार्थ में वास्तविक फ्लक्स घनत्व है।',
        bn: 'E (V/m) একক আধানে বল; D (C/m²) মুক্ত আধানের ফ্লাক্স ঘনত্ব। H (A/m) তড়িৎ প্রবাহের চুম্বকায়ন প্রচেষ্টা; B (T) মাধ্যমের মোট চৌম্বক ফ্লাক্স ঘনত্ব।'
      }
    },
    {
      id: 'pq-ch11-l01-03',
      question: {
        en: 'State the vector form of the Lorentz force law and explain why only the electric term can alter a particle’s kinetic energy.',
        hi: 'लोरेंट्ज़ बल नियम का सदिश रूप लिखिए और समझाइए कि केवल विद्युत घटक ही कण की गतिज ऊर्जा में परिवर्तन क्यों कर सकता है।',
        bn: 'লোরেন্টজ বল সূত্রের ভেক্টর রূপটি লিখুন এবং ব্যাখ্যা করুন কেন কেবল তড়িৎ অংশটি কণার গতিশক্তি পরিবর্তন করতে পারে।'
      },
      hint: {
        en: 'Consider the dot product of force with velocity F · v.',
        hi: 'बल और वेग के अदिश गुणनफल F · v पर विचार करें।',
        bn: 'বল এবং বেগের ডট গুণন F · v বিবেচনা করুন।'
      },
      answerKey: {
        en: 'F = q(E + v × B). Because (v × B) · v = 0 identically, magnetic power is zero (P_B = F_B · v = 0). Only P_E = q E · v ≠ 0 can perform work to alter kinetic energy.',
        hi: 'F = q(E + v × B)। चूंकि (v × B) · v = 0 होता है, चुंबकीय बल द्वारा किया गया कार्य शून्य होता है। केवल q E · v गतिज ऊर्जा बदल सकता है।',
        bn: 'F = q(E + v × B)। যেহেতু (v × B) · v = ০, তাই চৌম্বক ক্ষমতা শূন্য। কেবল তড়িৎ বল q E · v কার্য সম্পাদন করে গতিশক্তি পরিবর্তন করতে পারে।'
      }
    },
    {
      id: 'pq-ch11-l01-04',
      question: {
        en: 'Two point charges +4 μC and -1 μC are located at x = 0 and x = 30 cm respectively. At what point on the x-axis is the net electric field zero?',
        hi: 'दो बिंदु आवेश +4 μC और -1 μC क्रमशः x = 0 और x = 30 cm पर स्थित हैं। x-अक्ष पर किस बिंदु पर कुल विद्युत क्षेत्र शून्य होगा?',
        bn: '+৪ μC এবং -১ μC মানের দুটি বিন্দু আধান যথাক্রমে x = ০ এবং x = ৩০ সেমি বিন্দুতে অবস্থিত। x-অক্ষের কোন বিন্দুতে লব্ধি তড়িৎ ক্ষেত্র শূন্য হবে?'
      },
      hint: {
        en: 'The null point must lie outside the charges, to the right of the smaller magnitude negative charge (x > 30 cm).',
        hi: 'शून्य बिंदु छोटे परिमाण वाले ऋणावेश के दाईं ओर (x > 30 सेमी) स्थित होना चाहिए।',
        bn: 'লব্ধি শূন্য বিন্দুটি ক্ষুদ্রতর ঋণাত্মক আধানের ডানপাশে (x > ৩০ সেমি) অবস্থিত হতে হবে।'
      },
      answerKey: {
        en: 'Equating E1 = E2: k(4)/(x²) = k(1)/(x - 0.30)² => 2/(x) = 1/(x - 0.30) => 2x - 0.60 = x => x = 0.60 m = 60 cm on the x-axis.',
        hi: 'E1 = E2 रखने पर: 2/x = 1/(x - 0.30) => x = 0.60 m = 60 सेमी पर।',
        bn: 'E1 = E2 স্থাপন করে: ২/x = ১/(x - ০.৩০) => x = ০.৬০ মিটার = ৬০ সেমি বিন্দুতে।'
      }
    },
    {
      id: 'pq-ch11-l01-05',
      question: {
        en: 'A ceramic capacitor dielectric has relative permittivity εr = 85. If an electric field of 2.0 MV/m is applied across it, calculate the polarization charge density and total displacement D.',
        hi: 'एक सिरेमिक संधारित्र परावैद्युत का आपेक्षिक परावैद्युतांक εr = 85 है। यदि इस पर 2.0 MV/m का विद्युत क्षेत्र लगाया जाए, तो ध्रुवीकरण आवेश घनत्व तथा कुल विस्थापन D की गणना कीजिए।',
        bn: 'একটি সিরামিক ধারক ডাইইলেক্ট্রিকের আপেক্ষিক ভেদ্যতা εr = ৮৫। যদি এর উপর ২.০ MV/m তড়িৎ ক্ষেত্র প্রযুক্ত হয়, তবে মেরুকরণ আধান ঘনত্ব এবং মোট সরণ D নির্ণয় করুন।'
      },
      hint: {
        en: 'Use D = ε0 εr E and Polarization P = ε0(εr - 1)E.',
        hi: 'D = ε0 εr E और P = ε0(εr - 1)E का उपयोग करें।',
        bn: 'D = ε0 εr E এবং P = ε0(εr - ১)E সূত্র ব্যবহার করুন।'
      },
      answerKey: {
        en: 'D = (8.854 × 10⁻¹²)(85)(2.0 × 10⁶) = 1.505 × 10⁻³ C/m² = 1.505 mC/m². P = (8.854 × 10⁻¹²)(84)(2.0 × 10⁶) = 1.487 mC/m².',
        hi: 'D = 1.505 mC/m², P = 1.487 mC/m²।',
        bn: 'D = ১.৫০৫ mC/m², P = ১.৪৮৭ mC/m²।'
      }
    }
  ]
};
