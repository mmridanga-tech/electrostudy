import { Lesson } from '../types';

export const LESSON_ELECTRIC_FIELD_POTENTIAL: Lesson = {
  id: 'lsn-ch7-electric-field-potential',
  topicId: 'ch7-electric-field-potential',
  chapterId: 'ch-capacitors',
  order: 1,
  title: {
    en: 'Electric Field, Potential & Gauss\'s Law',
    hi: 'विद्युत क्षेत्र, विभव एवं गाउस का नियम',
    bn: 'তড়িৎ ক্ষেত্র, বিভব ও গাউসের সূত্র'
  },
  description: {
    en: 'Coulomb\'s law, electric field intensity, electrostatic potential, electric flux, and Gauss\'s law in electrostatic systems.',
    hi: 'कूलॉम का नियम, विद्युत क्षेत्र तीव्रता, स्थिरवैद्युत विभव, विद्युत फ्लक्स एवं गाउस का नियम।',
    bn: 'কুলম্বের সূত্র, তড়িৎ ক্ষেত্রের প্রাবল্য, স্থিরবৈদ্যুতিক বিভব, তড়িৎ ফ্লাক্স এবং গাউসের সূত্র।'
  },
  easyExplanation: {
    en: 'Just as the Earth has a gravitational field that pulls masses, an electric charge creates an invisible "electric field" in space that exerts a force on any other charge placed in it. Electrostatic potential is the electric pressure or energy per unit charge at any point.',
    hi: 'जैसे पृथ्वी का गुरुत्वाकर्षण क्षेत्र द्रव्यमान को खींचता है, वैसे ही एक विद्युत आवेश अंतरिक्ष में एक अदृश्य "विद्युत क्षेत्र" बनाता है जो किसी अन्य आवेश पर बल लगाता है। स्थिरवैद्युत विभव किसी बिंदु पर प्रति इकाई आवेश की ऊर्जा है।',
    bn: 'যেমন পৃথিবীর মহাকর্ষীয় ক্ষেত্র ভরকে আকর্ষণ করে, তেমনই একটি তড়িৎ আধান তার চারপাশের স্থানে একটি অদৃশ্য "তড়িৎ ক্ষেত্র" তৈরি করে যা অন্য কোনো আধানের উপর বল প্রয়োগ করে। তড়িৎ বিভব হলো কোনো বিন্দুতে একক আধানের স্থিরবৈদ্যুতিক শক্তি।'
  },
  detailedExplanation: {
    en: `1. Coulomb's Law of Electrostatics:
The electrostatic force (F) between two point charges Q1 and Q2 separated by distance r in a medium of permittivity ε is directly proportional to the product of the charges and inversely proportional to the square of the distance:
F = (1 / (4 · π · ε)) · (|Q1 · Q2| / r²) [Newtons]
Where ε = ε0 · εr (ε0 = 8.854 × 10⁻¹² F/m, εr is relative permittivity).

2. Electric Field Intensity (E):
Electric field strength at a point is defined as the force experienced per unit positive test charge placed at that point:
E = F / q = Q / (4 · π · ε · r²) [Volts/meter or Newtons/Coulomb]
Field lines originate from positive charges and terminate on negative charges.

3. Electric Potential (V):
Electric potential at a point is the work done in bringing a unit positive charge from infinity to that point against electrostatic forces:
V = W / q = Q / (4 · π · ε · r) [Volts]
The relationship between electric field and potential gradient is:
E = -dV / dr (Field points in the direction of steepest potential decrease).

4. Electric Flux (Ψ or Φ) and Flux Density (D):
Electric flux (Ψ) is the total number of electrostatic lines of force passing through a surface (in Coulombs):
Ψ = Q [Coulombs]
Electric flux density (D) is the flux per unit normal area:
D = Q / A = ε · E [Coulombs/m²]

5. Gauss's Law:
Gauss's theorem states that the total electric flux outward through any closed imaginary surface (Gaussian surface) is equal to the net charge enclosed divided by permittivity:
∮ E · dA = Q_enclosed / ε = (1/ε) · ∫ ρ_v dV`,
    hi: `1. कूलॉम का स्थिरवैद्युत नियम:
दो स्थिर बिंदु आवेशों Q1 और Q2 के बीच लगने वाला आकर्षण या प्रतिकर्षण बल दोनों आवेशों के गुणनफल के समानुपाती तथा उनके बीच की दूरी r के वर्ग के व्युत्क्रमानुपाती होता है:
F = (1 / (4 · π · ε)) · (|Q1 · Q2| / r²) [न्यूटन]

2. विद्युत क्षेत्र की तीव्रता (E):
विद्युत क्षेत्र में किसी बिंदु पर रखे एकांक धनावेश पर लगने वाले स्थिरवैद्युत बल को विद्युत क्षेत्र की तीव्रता कहते हैं:
E = F / q = Q / (4 · π · ε · r²) [V/m या N/C]

3. विद्युत विभव (V):
एकांक धनावेश को अनंत से विद्युत क्षेत्र के किसी बिंदु तक लाने में किए गए कार्य को उस बिंदु का विद्युत विभव कहते हैं:
V = W / q = Q / (4 · π · ε · r) [वोल्ट]
विद्युत क्षेत्र और विभव प्रवणता का संबंध: E = -dV/dr.

4. विद्युत फ्लक्स (Ψ) एवं फ्लक्स घनत्व (D):
किसी सतह से लंबवत गुजरने वाली विद्युत बल रेखाओं की कुल संख्या को विद्युत फ्लक्स कहते हैं। फ्लक्स घनत्व D = ε · E [C/m²]।

5. गाउस का नियम (Gauss's Law):
किसी बंद काल्पनिक सतह (गाउसीय पृष्ठ) से गुजरने वाला कुल विद्युत फ्लक्स उस सतह द्वारा परिबद्ध कुल आवेश का 1/ε गुना होता है: ∮ E · dA = Q_enclosed / ε.`,
    bn: `১. কুলম্বের স্থিরতড়িৎ সূত্র:
দুটি বিন্দু আধান Q1 এবং Q2-এর মধ্যবর্তী স্থিরবৈদ্যুতিক আকর্ষণ বা বিকর্ষণ বল আধানদ্বয়ের গুণফলের সমানুপাতিক এবং তাদের মধ্যবর্তী দূরত্বের বর্গের ব্যস্তানুপাতিক:
F = (1 / (4 · π · ε)) · (|Q1 · Q2| / r²) [নিউটন]
যেখানে ε = ε0 · εr (শূন্য মাধ্যমের ভেদ্যতা ε0 = 8.854 × 10⁻¹² F/m)।

২. তড়িৎ ক্ষেত্রের প্রাবল্য (Electric Field Intensity, E):
তড়িৎ ক্ষেত্রের কোনো বিন্দুতে একটি একক ধনাত্মক আধান স্থাপন করলে সেটি যে বল অনুভব করে, তাকে ওই বিন্দুর তড়িৎ প্রাবল্য বলে:
E = F / q = Q / (4 · π · ε · r²) [ভোল্ট/মিটার অথবা N/C]

৩. তড়িৎ বিভব (Electric Potential, V):
অসীম দূরত্ব থেকে একটি একক ধনাত্মক আধানকে তড়িৎ ক্ষেত্রের কোনো বিন্দুতে আনতে যে পরিমাণ কার্য করতে হয়:
V = W / q = Q / (4 · π · ε · r) [ভোল্ট]
তড়িৎ ক্ষেত্র ও বিভব পার্থক্যের সম্পর্ক: E = -dV/dr।

৪. তড়িৎ ফ্লাক্স (Electric Flux, Ψ) ও ফ্লাক্স ঘনত্ব (D):
কোনো ক্ষেত্রফলের মধ্য দিয়ে অতিক্রান্ত মোট তড়িৎ বলরেখাকে তড়িৎ ফ্লাক্স (Ψ = Q) বলে। তড়িৎ ফ্লাক্স ঘনত্ব D = ε · E [Coulombs/m²]।

৫. গাউসের সূত্র (Gauss's Law):
যেকোনো বদ্ধ তলের (Gaussian Surface) মধ্য দিয়ে নির্গত মোট তড়িৎ ফ্লাক্স ওই তল দ্বারা আবদ্ধ মোট আধানের 1/ε গুণ: ∮ E · dA = Q_enclosed / ε।`
  },
  formulas: [
    {
      expression: 'F = (Q1 · Q2) / (4 · π · ε · r²)',
      description: {
        en: 'Coulomb\'s Law electrostatic force between two charges',
        hi: 'दो आवेशों के बीच कूलॉम स्थिरवैद्युत बल',
        bn: 'দুটি আধানের মধ্যে কুলম্বের স্থিরবৈদ্যুতিক বল'
      }
    },
    {
      expression: 'E = -dV / dr = V / d',
      description: {
        en: 'Uniform electric field between parallel plates with distance d',
        hi: 'समानांतर प्लेटों के बीच एकसमान विद्युत क्षेत्र',
        bn: 'সমান্তরাল পাতের মধ্যবর্তী সুষম তড়িৎ ক্ষেত্র'
      }
    },
    {
      expression: 'D = ε0 · εr · E',
      description: {
        en: 'Electric flux density relation with field intensity and permittivity',
        hi: 'विद्युत फ्लक्स घनत्व और क्षेत्र तीव्रता का संबंध',
        bn: 'তড়িৎ ফ্লাক্স ঘনত্ব ও ক্ষেত্র প্রাবল্যের সম্পর্ক'
      }
    }
  ],
  practicalApplications: {
    en: [
      'High-voltage insulator design to prevent dielectric breakdown from intense electric fields',
      'Electrostatic precipitators in thermal power stations to filter dust and fly ash from flue gases',
      'Cathode Ray Oscilloscopes (CRO) and inkjet printer droplet deflection',
      'High-voltage capacitor plate separation and stress grading in underground cables'
    ],
    hi: [
      'अत्यधिक विद्युत क्षेत्र के कारण इन्सुलेटर विफलता को रोकने के लिए हाई-वोल्टेज इन्सुलेटर डिजाइन',
      'ताप विद्युत संयंत्रों में चिमनी से निकलने वाले धुएं से धूल छानने हेतु इलेक्ट्रोस्टैटिक प्रीसिपिटेटर',
      'सीआरओ एवं इंकजेट प्रिंटर में इलेक्ट्रोस्टैटिक विक्षेपण प्रणाली',
      'भूमिगत केबलों में वोल्टेज तनाव ग्रेडिंग एवं संधारित्र प्लेट डिज़ाइन'
    ],
    bn: [
      'উচ্চ ভোল্টেজের ইনসুলেটর ডিজাইন যাতে তীব্র তড়িৎ ক্ষেত্রে ডাই-ইলেকট্রিক ব্রেকডাউন না ঘটে',
      'থার্মাল পাওয়ার প্লান্টে ধোঁয়া থেকে ছাই ও ধূলিকণা পরিষ্কার করতে ইলেকট্রোস্ট্যাটিক প্রিসিপিটেটর',
      'সিআরও এবং ইঙ্কজেট প্রিন্টারে আধানযুক্ত কণার গতিপথ নিয়ন্ত্রণ',
      'আন্ডারগ্রাউন্ড পাওয়ার ক্যাবলে ভোল্টেজ স্ট্রেস গ্রেডিং ও ক্যাপাসিটর প্লেট বিন্যাস'
    ]
  },
  importantPoints: {
    en: [
      'Electric field lines never cross each other and enter conductors perpendicular to the surface',
      'Inside a hollow charged conductor in electrostatic equilibrium, E = 0 (Electrostatic Shielding)',
      'Potential difference is a scalar quantity, while Electric Field intensity is a vector quantity'
    ],
    hi: [
      'विद्युत बल रेखाएं कभी एक-दूसरे को नहीं काटतीं और चालक की सतह पर सदैव लंबवत होती हैं',
      'स्थिरवैद्युत संतुलन में किसी खोखले चालक के अंदर विद्युत क्षेत्र शून्य (E = 0) होता है (फैराडे केज)',
      'विद्युत विभव एक अदिश राशि है जबकि विद्युत क्षेत्र तीव्रता एक सदिश राशि है'
    ],
    bn: [
      'তড়িৎ বলরেখা কখনো পরস্পরকে ছেদ করে না এবং পরিবাহীর পৃষ্ঠে লম্বভাবে অবস্থান করে',
      'স্থিরতড়িৎ ভারসাম্যে থাকা ফাঁপা পরিবাহীর ভেতরে তড়িৎ ক্ষেত্র সর্বদা শূন্য হয় (E = 0)',
      'তড়িৎ বিভব হলো স্কেলার রাশি কিন্তু তড়িৎ ক্ষেত্রের প্রাবল্য একটি ভেক্টর রাশি'
    ]
  },
  commonMistakes: {
    en: [
      'Confusing Electric Potential (Scalar, Volts) with Electric Field (Vector, V/m)',
      'Forgetting that relative permittivity of vacuum/air is εr = 1, while for dielectric materials εr > 1'
    ],
    hi: [
      'विद्युत विभव (अदिश, वोल्ट) और विद्युत क्षेत्र (सदिश, V/m) में भ्रमित होना',
      'यह भूल जाना कि निर्वात के लिए सापेक्ष पारगम्यता εr = 1 होती है और परावैद्युत पदार्थों के लिए εr > 1'
    ],
    bn: [
      'তড়িৎ বিভব (স্কেলার, ভোল্ট) এবং তড়িৎ প্রাবল্য (ভেক্টর, V/m)-কে এক মনে করা',
      'বায়ু বা শূন্যস্থানের আপেক্ষিক ভেদ্যতা εr = 1 এবং অন্যান্য ডাই-ইলেকট্রিকের জন্য εr > 1 তা ভুলে যাওয়া'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch7-1-1',
      question: {
        en: 'The electric field intensity inside a hollow uniformly charged spherical conductor is:',
        hi: 'एक खोखले समान रूप से आवेशित गोलाकार चालक के भीतर विद्युत क्षेत्र की तीव्रता होती है:',
        bn: 'একটি ফাঁপা সুষমভাবে আহিত গোলাকার পরিবাহীর অভ্যন্তরে তড়িৎ ক্ষেত্রের প্রাবল্য কত?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Zero', hi: 'शून्य', bn: 'শূন্য' } },
        { id: 'opt-b', text: { en: 'Directly proportional to radius', hi: 'त्रिज्या के समानुपाती', bn: 'ব্যাসার্ধের সমানুপাতিক' } },
        { id: 'opt-c', text: { en: 'Inversely proportional to radius', hi: 'त्रिज्या के व्युत्क्रमानुपाती', bn: 'ব্যাসার্ধের ব্যস্তানুপাতিক' } },
        { id: 'opt-d', text: { en: 'Infinite', hi: 'अनंत', bn: 'অসীম' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'By Gauss\'s Law, because no charge is enclosed inside the interior hollow cavity of a conductor in static equilibrium, E = 0 throughout the interior.',
        hi: 'गाउस के नियम के अनुसार, चालक के अंदर कोई आवेश परिबद्ध नहीं होता है, इसलिए स्थिर संतुलन में आंतरिक विद्युत क्षेत्र शून्य (E = 0) होता है।',
        bn: 'গাউসের সূত্রানুযায়ী, স্থিরতড়িৎ অবস্থায় পরিবাহীর অভ্যন্তরীণ ফাঁপা অংশে কোনো আবদ্ধ আধান না থাকায় তড়িৎ প্রাবল্য শূন্য (E = 0) হয়।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch7-1-1',
      question: {
        en: 'Two parallel conducting plates separated by 5 mm of air have a potential difference of 250 V. Calculate the electric field intensity between them.',
        hi: 'हवा में 5 mm की दूरी पर स्थित दो समानांतर प्लेटों के बीच 250 V का विभवांतर है। उनके बीच विद्युत क्षेत्र तीव्रता की गणना करें।',
        bn: 'বায়ুতে 5 mm দূরত্বে থাকা দুটি সমান্তরাল পাতের মধ্যে বিভব পার্থক্য 250 V হলে তাদের মধ্যবর্তী তড়িৎ ক্ষেত্রের প্রাবল্য কত?'
      },
      hint: {
        en: 'Use E = V / d, converting distance from mm to meters.',
        hi: 'E = V / d सूत्र का प्रयोग करें, दूरी को mm से मीटर में बदलें।',
        bn: 'E = V / d সূত্র ব্যবহার করুন এবং দূরত্ব mm থেকে মিটারে রূপান্তর করুন।'
      },
      answerKey: {
        en: 'E = 250 V / 0.005 m = 50,000 V/m (50 kV/m).',
        hi: 'E = 250 / 0.005 = 50,000 V/m (50 kV/m).',
        bn: 'E = 250 V / 0.005 m = 50,000 V/m (50 kV/m)।'
      }
    }
  ]
};
