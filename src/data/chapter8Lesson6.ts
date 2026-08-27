import { Lesson } from '../types';

export const LESSON_MAGNETIC_MATERIALS_PERMEABILITY: Lesson = {
  id: 'lsn-ch8-magnetic-materials-permeability',
  topicId: 'ch8-magnetic-materials-permeability',
  chapterId: 'ch-inductors',
  order: 6,
  title: {
    en: 'Magnetic Materials, Permeability & Curie Temperature',
    hi: 'चुंबकीय पदार्थ, पारगम्यता एवं क्यूरी तापमान',
    bn: 'চৌম্বক উপাদান, প্রবেশ্যতা ও কুরি তাপমাত্রা'
  },
  description: {
    en: 'Classification of magnetic materials: diamagnetic, paramagnetic, ferromagnetic, ferrimagnetic, magnetic susceptibility (χ_m), domain theory, and Curie temperature transition.',
    hi: 'चुंबकीय पदार्थों का वर्गीकरण: प्रतिचुंबकीय (Diamagnetic), अनुचुंबकीय (Paramagnetic), लौहचुंबकीय (Ferromagnetic), चुंबकीय सुग्राहिता (χ_m), डोमेन सिद्धांत एवं क्यूरी तापमान।',
    bn: 'চৌম্বক পদার্থের শ্রেণিবিন্যাস: ডায়াম্যাগনেটিক, প্যারাম্যাগনেটিক, ফেরোম্যাগনেটিক, ফেরিম্যাগনেটিক, চৌম্বক সংবেদনশীলতা (χ_m), ডোমেইন তত্ত্ব ও কুরি তাপমাত্রা।'
  },
  easyExplanation: {
    en: 'Not all materials respond to magnets the same way! While copper and wood are weakly repelled or unaffected, iron, nickel, and special ferrites have microscopic "magnetic domains" that line up like millions of tiny compass needles, multiplying the magnetic field strength by thousands of times.',
    hi: 'सभी पदार्थ चुंबक के प्रति एक जैसा व्यवहार नहीं करते! तांबा और लकड़ी लगभग अप्रभावित रहते हैं, जबकि लोहा, निकेल और फेराइट्स में सूक्ष्म "चुंबकीय डोमेन" होते हैं जो लाखों छोटे कंपास की तरह एक सीध में आ जाते हैं और चुंबकीय क्षेत्र को हजारों गुना बढ़ा देते हैं।',
    bn: 'সব উপাদান চুম্বকের সাথে একইভাবে সাড়া দেয় না! তামা ও কাঠ নিরপেক্ষ বা সামান্য বিকর্ষিত হলেও লোহা, নিকেল ও ফেরাইট উপাদানে কোটি কোটি ক্ষুদ্র "চৌম্বক ডোমেইন" থাকে যা সারিবদ্ধ হয়ে চৌম্বক ক্ষেত্রকে হাজার গুণ বাড়িয়ে দেয়।'
  },
  detailedExplanation: {
    en: `1. Origin of Atomic Magnetism:
Magnetism in materials arises from:
1. Orbital motion of electrons around atomic nuclei (orbital magnetic dipole moment).
2. Electron spin about their own axis (spin magnetic dipole moment - dominant source).

2. Classification of Magnetic Materials:
A. Diamagnetic Materials (e.g., Copper, Bismuth, Silicon, Water):
- Atoms have completely filled electron shells (zero net permanent dipole moment).
- In an external field B, an opposing weak induced magnetic moment is created (Lenz's rule at atomic scale).
- Relative Permeability: μr < 1 (slightly less than 1, e.g., 0.99999 for copper).
- Magnetic Susceptibility: χ_m is small and negative (χ_m = μr - 1 ≈ -10⁻⁵). Weakly repelled by magnetic fields.

B. Paramagnetic Materials (e.g., Aluminum, Platinum, Oxygen, Titanium):
- Atoms possess permanent magnetic dipole moments, but thermal agitation keeps them randomly oriented.
- Relative Permeability: μr > 1 (slightly greater than 1, e.g., 1.00002 for aluminum).
- Magnetic Susceptibility: χ_m is small and positive (+10⁻⁵ to +10⁻³). Weakly attracted to magnetic fields.
- Curie's Law for Paramagnetism: χ_m = C / T (Susceptibility decreases with absolute temperature T).

C. Ferromagnetic Materials (e.g., Iron, Silicon Steel, Nickel, Cobalt, Permalloy):
- Possess spontaneous atomic alignment in microscopic regions called Magnetic Domains (10¹² to 10¹⁵ atoms per domain).
- In unmagnetized state, domain orientations cancel out.
- Under an external magnetizing field H, domain walls displace and domains rotate into alignment.
- Relative Permeability: μr ≫ 1 (ranges from 500 to over 200,000). Highly attracted and easily magnetized.

D. Ferrimagnetic Materials / Ferrites (e.g., Manganese-Zinc Ferrite, Nickel-Zinc Ferrite):
- Antiparallel sub-lattice magnetic moments of unequal magnitude.
- High permeability with extremely high electrical resistivity (10⁶ to 10¹⁰ Ω·m), eliminating eddy current losses in high-frequency SMPS inductors and RF transformers.

3. Curie Temperature (T_c):
The critical temperature above which thermal vibrations completely overcome domain alignment forces, causing a ferromagnetic material to lose its ferromagnetism and transition into a simple paramagnetic state:
- Iron (Fe): T_c = 770°C (1043 K)
- Nickel (Ni): T_c = 358°C
- Cobalt (Co): T_c = 1127°C.`,
    hi: `1. चुंबकीय पदार्थों का वर्गीकरण:
- प्रतिचुंबकीय (Diamagnetic): तांबा, बिस्मथ। μr < 1, सुग्राहिता χ_m ऋणात्मक। चुंबकीय क्षेत्र द्वारा दुर्बल रूप से प्रतिकर्षित।
- अनुचुंबकीय (Paramagnetic): एल्युमीनियम, प्लेटिनम। μr > 1, χ_m अल्प धनात्मक। दुर्बल रूप से आकर्षित।
- लौहचुंबकीय (Ferromagnetic): लोहा, सिलिकॉन स्टील, निकेल। μr ≫ 1 (हजारों में)। डोमेन संरचना युक्त, प्रबल रूप से आकर्षित।
- फेराइट्स (Ferrites): उच्च पारगम्यता एवं अत्यधिक उच्च विद्युत प्रतिरोधकता, जो उच्च आवृत्ति SMPS में भंवर धाराओं (Eddy Currents) को रोकते हैं।

2. क्यूरी तापमान (Curie Temperature, Tc):
वह तापमान जिस पर लौहचुंबकीय पदार्थ अपना लौहचुंबकत्व खोकर अनुचुंबकीय (Paramagnetic) बन जाता है:
- लोहा: Tc = 770°C
- निकेल: Tc = 358°C।`,
    bn: `১. চৌম্বক পদার্থের শ্রেণিবিন্যাস:
- ডায়াম্যাগনেটিক: তামা, বিসমাথ, জল। μr < ১, সংবেদনশীলতা χ_m ঋণাত্মক। চৌম্বক ক্ষেত্র দ্বারা মৃদু বিকর্ষিত।
- প্যারাম্যাগনেটিক: অ্যালুমিনিয়াম, প্ল্যাটিনাম। μr > ১, χ_m সামান্য ধনাত্মক। মৃদু আকৃষ্ট।
- ফেরোম্যাগনেটিক: লোহা, নিকেল, কোবাল্ট, সিলিকন স্টিল। μr ≫ ১ (কয়েক হাজার)। ডোমেইন কাঠামোর কারণে তীব্রভাবে আকৃষ্ট।
- ফেরাইট (Ferrites): উচ্চ প্রবেশ্যতা ও অতি উচ্চ রোধ বিশিষ্ট, যা উচ্চ ফ্রিকোয়েন্সির SMPS ইন্ডাক্টরে এডি কারেন্ট লস দূর করে।

২. কুরি তাপমাত্রা (Curie Temperature, Tc):
যে তাপমাত্রায় কোনো ফেরোম্যাগনেটিক পদার্থ তার স্বতঃস্ফূর্ত চুম্বকত্ব হারিয়ে সাধারণ প্যারাম্যাগনেটিকে রূপান্তরিত হয়:
- লোহা: Tc = ৭৭০°C
- নিকেল: Tc = ৩৫৮°C।`
  },
  formulas: [
    {
      expression: 'μ = μ0 · μr',
      description: {
        en: 'Absolute magnetic permeability',
        hi: 'परम चुंबकीय पारगम्यता',
        bn: 'পরম চৌম্বক প্রবেশ্যতা'
      }
    },
    {
      expression: 'χ_m = μr - 1',
      description: {
        en: 'Magnetic susceptibility relation to relative permeability',
        hi: 'चुंबकीय सुग्राहिता एवं सापेक्ष पारगम्यता संबंध',
        bn: 'চৌম্বক সংবেদনশীলতা ও আপেক্ষিক প্রবেশ্যতার সম্পর্ক'
      }
    }
  ],
  workedExamples: [
    {
      problem: {
        en: 'A high-permeability transformer alloy has a relative permeability μr = 45,000. Calculate its magnetic susceptibility χ_m and absolute permeability μ.',
        hi: 'एक उच्च पारगम्यता वाले ट्रांसफॉर्मर मिश्र धातु की सापेक्ष पारगम्यता μr = 45,000 है। इसकी चुंबकीय सुग्राहिता χ_m एवं परम पारगम्यता μ ज्ञात करें।',
        bn: 'একটি উচ্চ প্রবেশ্যতাসম্পন্ন ট্রান্সফরমার সংকর ধাতুর আপেক্ষিক প্রবেশ্যতা μr = ৪৫,০০০। এর চৌম্বক সংবেদনশীলতা χ_m এবং পরম প্রবেশ্যতা μ নির্ণয় করো।'
      },
      solution: {
        en: `Given:
μr = 45,000
μ0 = 4π × 10⁻⁷ H/m ≈ 1.2566 × 10⁻⁶ H/m

Step 1: Calculate Magnetic Susceptibility χ_m:
χ_m = μr - 1 = 45,000 - 1 = 44,999

Step 2: Calculate Absolute Permeability μ:
μ = μ0 · μr = (4π × 10⁻⁷) × 45,000 = 0.05655 H/m (56.55 mH/m).`,
        hi: `चरण 1: सुग्राहिता χ_m = μr - 1 = 45,000 - 1 = 44,999
चरण 2: μ = μ0 · μr = (4π × 10⁻⁷) × 45000 = 0.05655 H/m.`,
        bn: `ধাপ ১: সংবেদনশীলতা χ_m = μr - ১ = ৪৫,০০০ - ১ = ৪৪,৯৯৯
ধাপ ২: μ = μ0 · μr = (৪π × ১০⁻⁷) × ৪৫০০০ = ০.০৫৬৫৫ H/m।`
      }
    }
  ],
  quiz: [
    {
      question: {
        en: 'What happens to a piece of iron when it is heated above its Curie temperature (770°C)?',
        hi: 'जब लोहे को उसके क्यूरी तापमान (770°C) से अधिक गर्म किया जाता है, तो क्या होता है?',
        bn: 'লোহাকে তার কুরি তাপমাত্রার (৭৭০°C) উপরে উত্তপ্ত করলে কী ঘটে?'
      },
      options: {
        en: ['It becomes superconducting', 'It transforms from ferromagnetic to paramagnetic', 'It becomes permanently magnetized', 'Its electrical resistance becomes zero'],
        hi: ['यह सुपरकंडक्टिंग बन जाता है', 'यह लौहचुंबकीय से अनुचुंबकीय में बदल जाता है', 'यह स्थायी रूप से चुंबकित हो जाता है', 'इसका प्रतिरोध शून्य हो जाता है'],
        bn: ['এটি সুপারকন্ডাক্টরে পরিণত হয়', 'এটি ফেরোম্যাগনেটিক থেকে প্যারাম্যাগনেটিকে রূপ নেয়', 'এটি স্থায়ী চুম্বকে পরিণত হয়', 'এর রোধ শূন্য হয়ে যায়']
      },
      correctAnswer: 1,
      explanation: {
        en: 'Above the Curie temperature, thermal kinetic energy destroys the spontaneous magnetic domain alignment, turning ferromagnetic iron into a paramagnetic material.',
        hi: 'क्यूरी तापमान से ऊपर ऊष्मीय ऊर्जा डोमेन संरेखण को नष्ट कर देती है, जिससे लोहा अनुचुंबकीय बन जाता है।',
        bn: 'কুরি তাপমাত্রার উপরে তাপীয় গতিশক্তি ডোমেইন বিন্যাস ভেঙে দেয়, ফলে লোহা প্যারাম্যাগনেটিকে রূপান্তরিত হয়।'
      }
    }
  ],
  flashcards: [
    {
      term: {
        en: 'Magnetic Domains',
        hi: 'चुंबकीय डोमेन',
        bn: 'চৌম্বক ডোমেইন'
      },
      definition: {
        en: 'Microscopic regions in ferromagnetic materials where atomic magnetic moments are spontaneously aligned in parallel.',
        hi: 'लौहचुंबकीय पदार्थों में सूक्ष्म क्षेत्र जहाँ परमाणुओं के चुंबकीय आघूर्ण समानांतर संरेखित होते हैं।',
        bn: 'ফেরোম্যাগনেটিক পদার্থের আণুবীক্ষণিক অঞ্চল যেখানে পরমাণুগুলির চৌম্বক মোমেন্ট স্বতঃস্ফূর্তভাবে সমান্তরালে সারিবদ্ধ থাকে।'
      }
    }
  ]
};
