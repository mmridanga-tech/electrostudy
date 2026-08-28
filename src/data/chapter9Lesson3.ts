import { Lesson } from '../types';

export const LESSON_MAGNETIC_VS_ELECTRIC: Lesson = {
  id: 'lsn-ch9-mag-vs-elec-circuit',
  topicId: 'tp-mag-vs-elec-circuit',
  chapterId: 'ch-magnetic-circuits',
  order: 8,
  title: {
    en: 'Magnetic Circuit vs Electric Circuit Analogy & Series Magnetic Circuits',
    hi: 'चुंबकीय परिपथ बनाम विद्युत परिपथ सादृश्य एवं श्रेणी चुंबकीय परिपथ',
    bn: 'চৌম্বক সার্কিট বনাম বৈদ্যুতিক সার্কিটের তুলনা এবং সিরিজ ম্যাগনেটিক সার্কিট'
  },
  description: {
    en: 'Complete comparative matrix between Electric Circuits (EMF, I, R, Conductivity) and Magnetic Circuits (MMF, Φ, Reluctance, Permeability), composite series magnetic paths, and air-gap calculations.',
    hi: 'विद्युत परिपथ (EMF, धारा I, प्रतिरोध R) और चुंबकीय परिपथ (MMF, फ्लक्स Φ, रिलक्टेंस S) की विस्तृत तुलना, संयुक्त श्रेणी परिपथ एवं एयर गैप गणना।',
    bn: 'বৈদ্যুতিক সার্কিট (EMF, I, R, পরিবাহিতা) ও চৌম্বক সার্কিটের (MMF, Φ, রিলাকট্যান্স, পারমিয়াবিলিটি) বিস্তারিত তুলনামূলক ছক এবং এয়ার গ্যাপ সহ সিরিজ ম্যাগনেটিক সার্কিট।'
  },
  easyExplanation: {
    en: 'While electric current represents real moving electrons that dissipate energy continuously as heat (I²R), magnetic flux is a state of magnetic stress created in a medium that requires energy ONLY to establish, not to maintain!',
    hi: 'विद्युत धारा में वास्तव में इलेक्ट्रॉन बहते हैं और I²R ऊर्जा ऊष्मा के रूप में लगातार नष्ट होती है, जबकि चुंबकीय फ्लक्स केवल माध्यम में उत्पन्न एक चुंबकीय तनाव है—इसे बनाए रखने के लिए ऊर्जा व्यय नहीं होती!',
    bn: 'বৈদ্যুতিক সার্কিটে ইলেকট্রন সত্যি সত্যি প্রবাহিত হয় এবং ক্রমাগত I²R হিসেবে তাপ শক্তি অপচয় হয়। কিন্তু চৌম্বক ফ্লাক্স হলো মাধ্যমের ভেতর সৃষ্ট একধরনের চৌম্বকীয় টান বা স্ট্রেস—এটি একবার সৃষ্টি করতে শক্তির প্রয়োজন হলেও ধরে রাখতে কোনো ক্রমাগত শক্তির অপচয় হয় না!'
  },
  detailedExplanation: {
    en: `1. Comprehensive Comparison Matrix:

- Driving Force: EMF (Volts) <==> MMF = N·I (Ampere-turns)
- Flow / Field: Electric Current I (Amperes) <==> Magnetic Flux Φ (Webers)
- Opposition: Resistance R = ρ·l/A (Ohms) <==> Reluctance S = l/(μ·A) (AT/Wb)
- Property: Conductivity σ (S/m) <==> Permeability μ (H/m)
- Governing Law: Ohm's Law (I = EMF / R) <==> Hopkinson's Law (Φ = MMF / S)
- Energy: Continuous I²R heat loss <==> Energy stored in field (1/2 L I²), zero continuous maintenance power
- Confinement: Current confined tightly by insulators <==> High flux leakage occurs into surrounding air

2. Series Composite Magnetic Circuit with Air Gap:
- In transformers and motors, magnetic cores contain an iron section and an air gap.
- Total Reluctance: S_total = S_iron + S_gap = (l_iron / (μ0 · μr · A)) + (l_gap / (μ0 · A))
- Total MMF Required: MMF_total = Φ · S_total = H_iron · l_iron + H_gap · l_gap`,
    hi: `1. विद्युत और चुंबकीय परिपथ तुलना:
- EMF (वोल्ट) <==> MMF (AT)
- धारा I (Ampere) <==> फ्लक्स Φ (Weber)
- प्रतिरोध R (Ω) <==> रिलक्टेंस S (AT/Wb)
- चालकता σ <==> पारगम्यता µ

2. एयर गैप सहित कुल MMF:
- MMF = Φ · (S_iron + S_air_gap) = H_iron · l_iron + H_air · l_air`,
    bn: `১. বৈদ্যুতিক বনাম চৌম্বক সার্কিট তুলনা:
- চালিকাশক্তি: EMF (ভোল্ট) <==> MMF (অ্যাম্পিয়ার-টার্ন)
- প্রবাহ: কারেন্ট I (অ্যাম্পিয়ার) <==> ফ্লাক্স Φ (ওয়েবার)
- বাধা: রোধ R (ওহম) <==> রিলাকট্যান্স S (AT/Wb)
- বৈশিষ্ট্য: পরিবাহিতা σ <==> পারমিয়াবিলিটি µ
- শক্তির ব্যয়: কারেন্টে ক্রমাগত তাপ ক্ষয় হয় (I²R), কিন্তু স্থির ফ্লাক্স বজায় রাখতে কোনো ক্রমাগত শক্তি ক্ষয় হয় না।

২. এয়ার গ্যাপ সহ সিরিজ সার্কিট:
- মোট রিলাকট্যান্স S_total = S_iron + S_gap
- মোট প্রয়োজনীয় MMF = Φ · S_total = H_iron · l_iron + H_gap · l_gap`
  },
  formulas: [
    {
      expression: 'S_total = S_iron + S_gap = l_iron / (μ0 μr A) + l_gap / (μ0 A)',
      description: {
        en: 'Total reluctance of a composite magnetic circuit with air gap',
        hi: 'एयर गैप वाले संयुक्त चुंबकीय परिपथ का कुल रिलक्टेंस',
        bn: 'এয়ার গ্যাপ সহ যৌগিক চৌম্বক সার্কিটের মোট রিলাকট্যান্স'
      }
    },
    {
      expression: 'MMF_total = H_iron · l_iron + H_gap · l_gap',
      description: {
        en: 'Total Ampere-turns required for composite circuit',
        hi: 'संयुक्त परिपथ के लिए आवश्यक कुल एम्पीयर-टर्न',
        bn: 'যৌগিক সার্কিটের জন্য প্রয়োজনীয় মোট অ্যাম্পিয়ার-টার্ন'
      }
    }
  ],
  workedExamples: [
    {
      problem: {
        en: 'A magnetic core has reluctance S1 = 400,000 AT/Wb and an air gap with reluctance S2 = 100,000 AT/Wb. Find total reluctance.',
        hi: 'एक चुंबकीय कोर का रिलक्टेंस S1 = 400,000 AT/Wb और एयर गैप का S2 = 100,000 AT/Wb है। कुल रिलक्टेंस ज्ञात करें।',
        bn: 'একটি চৌম্বক কোরের রিলাকট্যান্স S1 = ৪০০,০০০ AT/Wb এবং এয়ার গ্যাপের রিলাকট্যান্স S2 = ১০০,০০০ AT/Wb হলে মোট রিলাকট্যান্স কত?'
      },
      solution: {
        en: 'S_total = S1 + S2 = 400,000 + 100,000 = 500,000 AT/Wb.',
        hi: 'S_total = 400,000 + 100,000 = 500,000 AT/Wb।',
        bn: 'S_total = ৪০০,০০০ + ১০০,০০০ = ৫০০,০০০ AT/Wb।'
      }
    }
  ]
};
