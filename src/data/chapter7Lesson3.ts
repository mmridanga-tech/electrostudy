import { Lesson } from '../types';

export const LESSON_DIELECTRICS_PERMITTIVITY: Lesson = {
  id: 'lsn-ch7-dielectrics-permittivity',
  topicId: 'ch7-dielectrics-permittivity',
  chapterId: 'ch-capacitors',
  order: 3,
  title: {
    en: 'Dielectric Materials, Relative Permittivity & Polarization',
    hi: 'परावैद्युत पदार्थ, सापेक्ष पारगम्यता एवं ध्रुवण',
    bn: 'ডাই-ইলেকট্রিক উপাদান, আপেক্ষিক ভেদ্যতা ও পোলারাইজেশন'
  },
  description: {
    en: 'Dielectric constant (εr), electric dipole polarization, dielectric strength (kV/mm), dielectric loss, and common insulating materials in capacitors.',
    hi: 'डाइइलेक्ट्रिक स्थिरांक (εr), विद्युत द्विध्रुव ध्रुवण, परावैद्युत सामर्थ्य (kV/mm), परावैद्युत हानि एवं प्रमुख इन्सुलेटिंग सामग्री।',
    bn: 'ডাই-ইলেকট্রিক ধ্রুবক (εr), বৈদ্যুতিক ডাইপোল পোলারাইজেশন, ডাই-ইলেকট্রিক শক্তি (kV/mm) ও ক্যাপাসিটরে ব্যবহৃত ইনসুলেটর।'
  },
  easyExplanation: {
    en: 'A dielectric is an electrical insulator that cannot conduct direct current, but when placed inside an electric field, its microscopic atoms stretch and polarize. This atomic alignment opposes the external field, allowing the capacitor to store substantially more charge at the same voltage.',
    hi: 'डाइइलेक्ट्रिक एक विद्युत रोधी (इन्सुलेटर) है जो डीसी का चालन नहीं करता, लेकिन विद्युत क्षेत्र में रखने पर इसके परमाणु ध्रुवित हो जाते हैं। यह आंतरिक ध्रुवण बाहरी क्षेत्र का विरोध करता है जिससे समान वोल्टेज पर बहुत अधिक आवेश संचित हो पाता है।',
    bn: 'ডাই-ইলেকট্রিক হলো এমন একটি অপরিবাহী (ইনসুলেটর) যার মধ্য দিয়ে সরাসরি বিদ্যুৎ প্রবাহিত হতে পারে না, কিন্তু তড়িৎ ক্ষেত্রের প্রভাবে এর অণু-পরমাণুগুলো প্রসারিত ও পোলারাইজড হয়ে যায়। ফলে একই ভোল্টেজে ক্যাপাসিটর বহু গুণ বেশি আধান জমা রাখতে পারে।'
  },
  detailedExplanation: {
    en: `1. What is a Dielectric Material?
A dielectric is an electrically insulating material with very high resistivity (poor free-electron conductivity) that can sustain an internal electrostatic field with minimal leakage.

2. Dielectric Polarization:
When an external electric field (E0) is applied across a dielectric:
- Positive atomic nuclei are displaced slightly in the direction of the field.
- Negative electron clouds are pulled in the opposite direction.
- This creates electric dipoles throughout the material.
- The bound surface charges induce an internal opposing electric field (E_pol), reducing the net electric field inside the medium:
E_net = E0 - E_pol = E0 / εr.

3. Relative Permittivity (Dielectric Constant, εr):
Relative permittivity (εr or K) is the factor by which the capacitance increases when vacuum between plates is replaced by that dielectric:
εr = C_dielectric / C_vacuum = ε / ε0
Where ε0 = 8.854 × 10⁻¹² F/m (Permittivity of free space).

Typical values of Relative Permittivity (εr):
- Vacuum: 1.0000
- Air: 1.0006 (treated as 1 in engineering)
- Paper / Transformer Oil: 2.2 to 4.5
- Mica: 6.0 to 8.0
- Glass: 5.0 to 10.0
- Ceramic (Barium Titanate): 1,000 to 10,000+
- Water (pure): 80.0

4. Dielectric Strength (Breakdown Strength):
Dielectric strength is the maximum electric field gradient (E_max) a dielectric material can withstand without undergoing destructive electric breakdown (sparking):
Dielectric Strength = V_breakdown / thickness [kV/mm or MV/m]
Values:
- Air: ~3 kV/mm (at atmospheric pressure)
- Transformer Oil: 20–30 kV/mm
- Paper (impregnated): 15–20 kV/mm
- Mica: 60–120 kV/mm
- Ceramic: 10–30 kV/mm
- Polypropylene film: 400–600 kV/mm

5. Dielectric Losses & Loss Angle (tan δ):
In AC circuits, the microscopic flipping of dipoles in each half cycle produces heat dissipation due to molecular friction. This is quantified by the dissipation factor or loss tangent (tan δ). Low tan δ is essential for high-frequency RF and power capacitors.`,
    hi: `1. परावैद्युत पदार्थ क्या है?
परावैद्युत वे कुचालक पदार्थ होते हैं जिनमें मुक्त इलेक्ट्रॉन नगण्य होते हैं, लेकिन वे विद्युत क्षेत्र में आवेश और ऊर्जा को स्थिरवैद्युत रूप में संचित करने की क्षमता रखते हैं।

2. परावैद्युत ध्रुवण (Dielectric Polarization):
विद्युत क्षेत्र लगाने पर परावैद्युत के अणुओं के धनावेश क्षेत्र की दिशा में और ऋणावेश विपरीत दिशा में थोड़े विस्थापित हो जाते हैं। इससे प्रेरित द्विध्रुव बनते हैं जो आंतरिक विरोधी विद्युत क्षेत्र पैदा करते हैं: E_net = E0 / εr।

3. सापेक्ष पारगम्यता (Dielectric Constant, εr):
εr = C_dielectric / C_vacuum = ε / ε0
- वायु / निर्वात: 1
- अभ्रक (Mica): 6 - 8
- पेपर: 3 - 4
- सेरामिक (Titanate): 1000 - 10000

4. परावैद्युत सामर्थ्य (Dielectric Strength):
वह अधिकतम विद्युत क्षेत्र जिसे कोई कुचालक बिना पंचर (ब्रेकडाउन) हुए सहन कर सके:
डाइइलेक्ट्रिक स्ट्रेंथ = V_breakdown / d [kV/mm]।`,
    bn: `১. ডাই-ইলেকট্রিক উপাদান কী?
ডাই-ইলেকট্রিক হলো উচ্চ রোধসম্পন্ন অপরিবাহী পদার্থ যা তড়িৎ পরিবাহী মুক্ত ইলেকট্রনবিহীন হলেও স্থিরবৈদ্যুতিক ক্ষেত্রকে সমর্থন করে এবং শক্তি সঞ্চয় করে।

২. ডাই-ইলেকট্রিক পোলারাইজেশন:
বাইরের তড়িৎ ক্ষেত্র (E0) প্রয়োগ করলে পরমাণুর নিউক্লিয়াস ক্ষেত্রের দিকে এবং ইলেকট্রন মেঘ বিপরীত দিকে সরে গিয়ে আণবিক ডাইপোল গঠন করে। এর ফলে মাধ্যমের ভেতরের কার্যকর তড়িৎ ক্ষেত্র কমে যায়: E_net = E0 / εr।

৩. আপেক্ষিক ভেদ্যতা বা ডাই-ইলেকট্রিক ধ্রুবক (εr):
εr = C_dielectric / C_vacuum = ε / ε0
- শূন্যস্থান বা বাতাস: ১
- মাইকা (অভ্র): ৬ - ৮
- সিরামিক: ১০০০ - ১০০০০ (উচ্চ ধারণক্ষমতা)

৪. ডাই-ইলেকট্রিক শক্তি (Dielectric Strength):
কোনো ইনসুলেটর উপাদান নষ্ট বা পাংচার না হয়ে সর্বোচ্চ যে পরিমাণ বৈদ্যুতিক চাপ সহ্য করতে পারে:
ডাই-ইলেকট্রিক শক্তি = V_breakdown / d [kV/mm]।`
  },
  formulas: [
    {
      expression: 'εr = C / C0 = ε / ε0',
      description: {
        en: 'Relative permittivity definition comparing capacitance with dielectric to vacuum',
        hi: 'शून्य के सापेक्ष परावैद्युत स्थिरांक अनुपात',
        bn: 'শূন্যস্থানের সাপেক্ষে ডাই-ইলেকট্রিক ধ্রুবকের অনুপাত'
      }
    },
    {
      expression: 'Dielectric Strength = V_breakdown / d',
      description: {
        en: 'Maximum electric field before breakdown in Volts per meter (kV/mm)',
        hi: 'ब्रेकडाउन से पूर्व अधिकतम सहनीय विद्युत क्षेत्र',
        bn: 'ব্রেকডাউনের পূর্বে সর্বোচ্চ সহনশীল বৈদ্যুতিক চাপ'
      }
    }
  ],
  practicalApplications: [
    {
      en: 'High-capacitance ceramic and electrolytic capacitor miniaturization using high-εr materials',
      hi: 'उच्च εr सामग्री का उपयोग कर सूक्ष्म सेरामिक और इलेक्ट्रोलाइटिक कैपेसिटर निर्माण',
      bn: 'উচ্চ ডাই-ইলেকট্রিক ধ্রুবকযুক্ত সিরামিক ব্যবহার করে ক্ষুদ্র আকারের উচ্চ ক্যাপাসিটর তৈরি'
    },
    {
      en: 'Transformer and high-voltage power cable oil insulation to prevent flashovers',
      hi: 'ट्रांसफॉर्मर और पावर केबल में फ्लैशओवर रोकने हेतु तेल इन्सुलेशन',
      bn: 'ট্রান্সফরমার ও উচ্চ ভোল্টেজ ক্যাবলে ফ্ল্যাশওভার রোধে ইনসুলেটিং তেলের ব্যবহার'
    }
  ],
  importantPoints: {
    en: [
      'Inserting a dielectric increases capacitance by a factor of εr (C = εr · C0)',
      'Dielectric strength limits the MAXIMUM working voltage of a capacitor for a given plate spacing',
      'Ceramic materials allow ultra-high capacitance in tiny SMD package footprints due to εr values exceeding 5,000'
    ],
    hi: [
      'डाइइलेक्ट्रिक डालने से धारिता εr गुना बढ़ जाती है (C = εr · C0)',
      'डाइइलेक्ट्रिक स्ट्रेंथ कैपेसिटर के अधिकतम सुरक्षित कार्यशील वोल्टेज को निर्धारित करती है',
      'सेरामिक सामग्री का εr 5000 से अधिक होने के कारण छोटे SMD कैपेसिटर में विशाल धारिता मिलती है'
    ],
    bn: [
      'ডাই-ইলেকট্রিক প্রবেশ করালে ক্যাপাসিট্যান্স εr গুণ বৃদ্ধি পায় (C = εr · C0)',
      'ডাই-ইলেকট্রিক শক্তি একটি নির্দিষ্ট প্লেট দূরত্বের জন্য ক্যাপাসিটরের সর্বোচ্চ নিরাপদ ভোল্টেজ নির্ধারণ করে',
      'উচ্চ εr-এর কারণে সিরামিক ক্যাপাসিটর আকারে অতি ক্ষুদ্র হয়েও বিশাল ক্যাপাসিট্যান্স দিতে পারে'
    ]
  },
  commonMistakes: {
    en: [
      'Confusing Dielectric Constant (dimensionless ratio εr) with Dielectric Strength (kV/mm breakdown field)',
      'Assuming that dielectric strength remains constant at elevated operating temperatures'
    ],
    hi: [
      'डाइइलेक्ट्रिक कॉन्स्टेंट (विमाहीन अनुपात εr) और डाइइलेक्ट्रिक स्ट्रेंथ (kV/mm) को एक समझना',
      'यह मानना कि उच्च तापमान पर भी डाइइलेक्ट्रिक स्ट्रेंथ अपरिवर्तित रहती है'
    ],
    bn: [
      'ডাই-ইলেকট্রিক ধ্রুবক (এককহীন সংখ্যা εr) এবং ডাই-ইলেকট্রিক শক্তি (kV/mm)-কে এক মনে করা',
      'উচ্চ তাপমাত্রায় ডাই-ইলেকট্রিক শক্তি একই থাকে মনে করা (তাপমাত্রা বাড়লে ডাই-ইলেকট্রিক শক্তি দ্রুত কমে)'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch7-3-1',
      question: {
        en: 'When a dielectric slab with relative permittivity εr = 5 is inserted between the plates of an isolated charged capacitor, the stored electrostatic energy:',
        hi: 'जब एक अलग (आइसोलेटेड) आवेशित संधारित्र की प्लेटों के बीच εr = 5 वाला परावैद्युत डाला जाता है, तो संचित ऊर्जा:',
        bn: 'একটি বিচ্ছিন্ন আহিত ক্যাপাসিটরের পাতের মাঝে εr = 5 ডাই-ইলেকট্রিক প্রবেশ করালে সঞ্চিত শক্তির কী পরিবর্তন হয়?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Increases 5 times', hi: '5 गुना बढ़ जाती है', bn: '৫ গুণ বৃদ্ধি পায়' } },
        { id: 'opt-b', text: { en: 'Decreases to 1/5th', hi: '1/5 हो जाती है', bn: '১/৫ ভাগে কমে যায়' } },
        { id: 'opt-c', text: { en: 'Remains unchanged', hi: 'अपरिवर्तित रहती है', bn: 'অপরিবর্তিত থাকে' } },
        { id: 'opt-d', text: { en: 'Becomes zero', hi: 'शून्य हो जाती है', bn: 'শূন্য হয়ে যায়' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'For an isolated capacitor, charge Q is constant. Since Energy U = Q² / (2C) and C increases to 5C0, the energy decreases to U0 / 5 (the remaining energy does work pulling the slab inward).',
        hi: 'आइसोलेटेड कैपेसिटर में आवेश Q स्थिर रहता है। ऊर्जा U = Q²/(2C) सूत्रानुसार धारिता 5 गुना होने से ऊर्जा 1/5 रह जाती है।',
        bn: 'বিচ্ছিন্ন ক্যাপাসিটরে আধান Q ধ্রুবক। সূত্র U = Q² / (2C) অনুযায়ী ক্যাপাসিট্যান্স ৫ গুণ বাড়লে শক্তি কমে আদি মানের ১/৫ অংশ হয়।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch7-3-1',
      question: {
        en: 'An air-filled capacitor has a capacitance of 15 pF. What will be its capacitance if mica with relative permittivity εr = 6 is inserted between the plates?',
        hi: 'एक वायु संधारित्र की धारिता 15 pF है। यदि प्लेटों के बीच εr = 6 वाला अभ्रक (Mica) भर दिया जाए तो नई धारिता क्या होगी?',
        bn: 'একটি বায়ু ক্যাপাসিটরের ধারকত্ব 15 pF। এর পাতদ্বয়ের মাঝে εr = 6 যুক্ত মাইকা বসালে নতুন ক্যাপাসিট্যান্স কত হবে?'
      },
      hint: {
        en: 'Use C = εr × C0.',
        hi: 'C = εr × C0 का उपयोग करें।',
        bn: 'C = εr × C0 সূত্র প্রয়োগ করুন।'
      },
      answerKey: {
        en: 'C = 6 × 15 pF = 90 pF.',
        hi: 'C = 6 × 15 = 90 pF.',
        bn: 'C = 6 × 15 pF = 90 pF।'
      }
    }
  ]
};
