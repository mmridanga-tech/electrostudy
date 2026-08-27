import { Lesson } from '../types';

export const LESSON_SUPERCAPACITORS_ENERGY_STORAGE: Lesson = {
  id: 'lsn-ch7-supercapacitors-energy-storage',
  topicId: 'ch7-supercapacitors-energy-storage',
  chapterId: 'ch-capacitors',
  order: 19,
  title: {
    en: 'Supercapacitors, Ultracapacitors & Advanced Energy Storage',
    hi: 'सुपरकैपेसिटर, अल्ट्राकैपेसिटर एवं आधुनिक ऊर्जा भंडारण',
    bn: 'সুপারক্যাপাসিটর, আল্ট্রাক্যাপাসিটর ও আধুনিক শক্তি সংরক্ষণ'
  },
  description: {
    en: 'Electric Double Layer Capacitors (EDLC), pseudocapacitance, activated carbon electrodes, Ragone plot (energy density vs power density), hybrid energy systems in EVs, and regenerative braking.',
    hi: 'इलेक्ट्रिक डबल लेयर कैपेसिटर (EDLC), स्यूडो-कैपेसिटेंस, सक्रिय कार्बन इलेक्ट्रोड, रैगोन प्लॉट (ऊर्जा घनत्व बनाम शक्ति घनत्व) एवं इलेक्ट्रिक वाहनों में रीजेनरेटिव ब्रेकिंग।',
    bn: 'ইলেকট্রিক ডাবল লেয়ার ক্যাপাসিটর (EDLC), সিউডোক্যাপাসিট্যান্স, অ্যাক্টিভেটেড কার্বন ইলেক্ট্রোড, র্যাগোন প্লট (শক্তি বনাম ক্ষমতা ঘনত্ব) এবং ইভিতে রিজেনারেটিভ ব্রেকিং।'
  },
  easyExplanation: {
    en: 'A supercapacitor (or ultracapacitor) bridges the gap between conventional capacitors and rechargeable chemical batteries. While normal capacitors store tiny microfarads (μF), supercapacitors achieve thousands of Farads (up to 3000 F in a single cell!) using microscopic porous carbon that provides enormous surface area. They charge in seconds, deliver massive instantaneous power, and endure over 1,000,000 charge cycles without degrading.',
    hi: 'सुपरकैपेसिटर (अल्ट्राकैपेसिटर) साधारण कैपेसिटर और केमिकल बैटरी के बीच की कड़ी हैं। जहां सामान्य कैपेसिटर माइक्रोफैरड (μF) में होते हैं, वहीं सुपरकैपेसिटर हजारों फैरड (3000 F तक) की ऊर्जा स्टोर कर सकते हैं। इनमें अत्यधिक छिद्रयुक्त सक्रिय कार्बन का उपयोग होता है जिससे विशाल सतह क्षेत्र मिलता है। ये कुछ ही सेकंड में फुल चार्ज हो जाते हैं और 10 लाख से अधिक बार बिना खराब हुए चार्ज-डिस्चार्ज हो सकते हैं।',
    bn: 'সুপারক্যাপাসিটর বা আল্ট্রাক্যাপাসিটর হলো সাধারণ ক্যাপাসিটর ও রিচার্জেবল ব্যাটারির মাঝামাঝি একটি অত্যাধুনিক যন্ত্র। সাধারণ ক্যাপাসিটর মাইক্রোফ্যারাড (μF) চার্জ ধরে রাখলেও সুপারক্যাপাসিটর হাজার হাজার ফ্যারাড (একক সেলে ৩০০০ ফ্যারাড পর্যন্ত) শক্তি জমা রাখে। এগুলো কয়েক সেকেন্ডে চার্জ হতে পারে, বিপুল পরিমাণ শক্তি তাৎক্ষণিক সরবরাহ করতে পারে এবং ১০ লাখবারের বেশি চার্জ-ডিসচার্জ সাইকেল সহ্য করতে পারে।'
  },
  detailedExplanation: {
    en: `1. Physical Working Principle of Supercapacitors:
Unlike conventional dielectric capacitors that rely on physical solid insulators, supercapacitors store energy through two primary mechanisms:
- Electric Double-Layer Capacitance (EDLC):
  * Purely electrostatic charge accumulation at the electrode-electrolyte interface.
  * Formed by a microscopic Helmholtz double layer with separation distance d < 1 nanometer (sub-atomic scale!).
  * Utilizes activated porous carbon or graphene electrodes with an immense effective surface area (1000 to 2500 m²/gram — a teaspoon has the surface area of a football stadium!).
  * Formula: C = ε · A / d (Extreme A and tiny nanometer d yield gigantic capacitance in Farads).
- Pseudocapacitance:
  * Fast, reversible faradaic redox reactions, electrosorption, or intercalation on the surface of transition metal oxides (RuO2, MnO2) or conductive polymers.

2. Comparison: Conventional Capacitors vs. Supercapacitors vs. Lithium Batteries:
- Specific Energy Density (Wh/kg):
  * Conventional Capacitor: 0.01 - 0.1 Wh/kg (very low).
  * Supercapacitor: 5 - 15 Wh/kg (moderate, ~10% of batteries).
  * Li-ion Battery: 150 - 260 Wh/kg (very high).
- Specific Power Density (W/kg):
  * Conventional Capacitor: >100,000 W/kg (ultra-fast burst).
  * Supercapacitor: 1,000 - 10,000 W/kg (huge peak discharge).
  * Li-ion Battery: 200 - 1,000 W/kg (limited by chemical diffusion).
- Charge/Discharge Time:
  * Supercapacitor: 1 to 30 seconds.
  * Li-ion Battery: 30 minutes to 4 hours.
- Cycle Life:
  * Supercapacitor: 1,000,000+ cycles (15-20 years lifespan, no chemical breakdown).
  * Li-ion Battery: 500 to 2,000 cycles (degrades in 3-5 years).
- Operating Temperature Range:
  * Supercapacitors operate reliably from -40°C to +65°C without thermal runaway hazard.

3. Cell Voltage Limitation and Series Balancing:
- Due to the breakdown voltage of liquid electrolytes, a single EDLC cell is rated for only 2.7 V to 3.0 V DC.
- To achieve higher voltages (e.g., 48V for mild hybrids or 750V for electric trains), hundreds of cells must be connected in series.
- Because individual cell leakage currents and tolerances vary, active or passive voltage balancing resistor/op-amp circuits are mandatory to prevent single-cell overvoltage destruction.`,
    hi: `1. सुपरकैपेसिटर का कार्य सिद्धांत:
- इलेक्ट्रिक डबल लेयर कैपेसिटेंस (EDLC): इलेक्ट्रोड और इलेक्ट्रोलाइट के बीच 1 नैनोमीटर से भी कम दूरी (हेल्महोल्ट्ज़ लेयर) पर चार्ज जमा होता है।
- एक्टिवेटेड कार्बन या ग्राफीन का उपयोग करने से 1 ग्राम में 2000 वर्ग मीटर तक का विशाल सतह क्षेत्र मिलता है।
- सूत्र: C = ε · A / d (विशाल A और नैनोमीटर d मिलकर हजारों फैरड बनाते हैं)।

2. बैटरी बनाम सुपरकैपेसिटर:
- सुपरकैपेसिटर कुछ सेकंड में चार्ज हो जाता है (10,000 W/kg शक्ति घनत्व)।
- इसकी लाइफ 10,00,000 (10 लाख) साइकिल होती है, जबकि बैटरी 1000-2000 साइकिल में खराब हो जाती है।
- यह -40°C से +65°C के चरम तापमान पर भी काम करता है।

3. सेल वोल्टेज एवं बैलेंसिंग:
एक सुपरकैपेसिटर सेल का वोल्टेज केवल 2.7V से 3.0V होता है। उच्च वोल्टेज के लिए कई सेलों को सीरीज में जोड़ा जाता है और वोल्टेज बैलेंसिंग सर्किट लगाना अनिवार्य होता है।`,
    bn: `১. সুপারক্যাপাসিটরের কার্যপদ্ধতি (EDLC):
- ইলেকট্রিক ডাবল লেয়ার ক্যাপাসিটেন্সে কোনো রাসায়নিক পরিবর্তন ছাড়াই ইলেক্ট্রোডের পৃষ্ঠতলে ১ ন্যানোমিটারের চেয়ে কম দূরত্বের হেলমহোল্টজ স্তরে চার্জ জমা হয়।
- অ্যাক্টিভেটেড কার্বন ব্যবহারের ফলে মাত্র ১ গ্রাম উপাদানে প্রায় ২০০০ বর্গমিটার ক্ষেত্রফল পাওয়া যায়।
- সূত্র: C = ε · A / d (বিপুল ক্ষেত্রফল A এবং ন্যানোমিটার দূরত্ব d এর কারণে হাজার হাজার ফ্যারাড ক্যাপাসিট্যান্স তৈরি হয়)।

২. ব্যাটারির সাথে তুলনা:
- পাওয়ার ডেনসিটি: ব্যাটারির চেয়ে ১০ গুণ বেশি দ্রুত শক্তি নির্গমন করতে পারে।
- আয়ুষ্কাল: ১০ লাখেরও বেশি চার্জ-ডিসচার্জ সাইকেল (১৫-২০ বছর টেকে)।
- চার্জিং সময়: মাত্র কয়েক সেকেন্ড থেকে ১ মিনিটের মধ্যে ফুল চার্জ হয়।

৩. সেল ভোল্টেজ ও ব্যালেন্সিং:
একটি সেলের সর্বোচ্চ ভোল্টেজ মাত্র ২.৭V - ৩.০V। উচ্চ ভোল্টেজ তৈরি করতে একাধিক সেল সিরিজে যুক্ত করার সময় ভোল্টেজ ব্যালেন্সিং সার্কিট ব্যবহার করা বাধ্যতামূলক।`
  },
  formulas: [
    {
      expression: 'E = \\frac{1}{2} \\cdot C \\cdot (V_{max}^2 - V_{min}^2) \\quad \\text{[Joules]}',
      description: {
        en: 'Usable energy extracted from supercapacitor discharged from Vmax to Vmin',
        hi: 'सुपरकैपेसिटर से Vmax से Vmin तक डिस्चार्ज के दौरान प्राप्त उपयोगी ऊर्जा (जूल में)',
        bn: 'Vmax থেকে Vmin এ ডিসচার্জের সময় সুপারক্যাপাসিটর থেকে প্রাপ্ত কার্যকর শক্তি (জুল এককে)'
      }
    },
    {
      expression: 'E_{Wh} = \\frac{\\frac{1}{2} \\cdot C \\cdot (V_{max}^2 - V_{min}^2)}{3600}',
      description: {
        en: 'Usable energy storage in Watt-hours (Wh)',
        hi: 'वाट-घंटे (Wh) में उपयोगी ऊर्जा भंडारण सूत्र',
        bn: 'ওয়াট-আওয়ার (Wh) এককে শক্তি সংরক্ষণ নির্ণয়ের সূত্র'
      }
    },
    {
      expression: 'P_{max} = \\frac{V_{cell}^2}{4 \\cdot \\text{ESR}}',
      description: {
        en: 'Matched-load peak instantaneous power delivery capability',
        hi: 'मैच्ड-लोड अधिकतम तात्कालिक शक्ति क्षमता (वाट में)',
        bn: 'সর্বোচ্চ তাৎক্ষণিক আউটপুট পাওয়ার ডেলিভারি ক্ষমতা'
      }
    }
  ],
  practicalApplications: [
    {
      en: 'Electric vehicle (EV) and metro train regenerative braking kinetic energy capture systems',
      hi: 'इलेक्ट्रिक वाहनों एवं मेट्रो ट्रेनों में रीजेनरेटिव ब्रेकिंग से ऊर्जा संग्रह',
      bn: 'ইলেকট্রিক গাড়ি ও মেট্রো রেলে ব্রেকিংয়ের গতিশক্তি পুনরায় বৈদ্যুতিক শক্তিতে রূপান্তর করে জমা রাখা'
    },
    {
      en: 'Wind turbine pitch control emergency backup power supplies during power grid blackouts',
      hi: 'पवन चक्कियों में ग्रिड फेल होने पर ब्लेड एंगल सुरक्षित करने हेतु बैकअप पावर',
      bn: 'উইন্ড টারবাইনের জরুরি ব্যাকআপ পাওয়ারে যাতে গ্রিড বন্ধ হলেও ব্লেড নিরাপদ রাখা যায়'
    },
    {
      en: 'High-power hybrid engine cold cranking starters for heavy trucks, diesel locomotives, and military tanks in arctic sub-zero conditions (-40°C)',
      hi: 'भारी ट्रकों एवं लोकोमोटिव्स के लिए अत्यधिक ठंड (-40°C) में इंजन स्टार्टर',
      bn: 'প্রচণ্ড ঠান্ডায় ভারী ট্রাক ও ট্রেনের ডিজেল ইঞ্জিন দ্রুত স্টার্ট করার সুপারক্যাপাসিটর বুস্টার'
    }
  ],
  importantPoints: {
    en: [
      'Supercapacitors possess very high power density (fast discharge) but lower energy density than lithium batteries',
      'They endure over 1,000,000 cycles with virtually zero maintenance because energy storage is physical/electrostatic, not chemical',
      'Single-cell voltage is limited to ~2.7V - 3.0V DC; series strings require active cell voltage balancing'
    ],
    hi: [
      'सुपरकैपेसिटर की पावर डेंसिटी (त्वरित करंट देने की क्षमता) बहुत अधिक होती है, लेकिन ऊर्जा घनत्व बैटरी से कम होता है',
      'ये 10 लाख से अधिक बार चार्ज हो सकते हैं क्योंकि इसमें कोई रासायनिक गिरावट नहीं होती',
      'एक सेल केवल 2.7V से 3.0V का होता है; सीरीज में जोड़ने पर वोल्टेज बैलेंसिंग आवश्यक है'
    ],
    bn: [
      'সুপারক্যাপাসিটরের পাওয়ার ডেনসিটি বিপুল হলেও ব্যাটারির তুলনায় সামগ্রিক শক্তি ধারণ ক্ষমতা কম',
      'যেহেতু কোনো রাসায়নিক ক্ষয় হয় না, তাই এগুলো ১০ লাখবারেরও বেশি সাইকেলে অক্ষত থাকে',
      'প্রতিটি সেল সর্বোচ্চ ২.৭V - ৩.০V সহ্য করতে পারে; তাই সিরিজে লাগালে সেল ভোল্টেজ ব্যালেন্সিং আবশ্যক'
    ]
  },
  commonMistakes: {
    en: [
      'Discharging a supercapacitor down to 0V expecting full energy; DC-DC converters cannot operate below ~Vmax/2 (75% energy extracted by Vmax/2)',
      'Over-volting single cells beyond 3.0V, which instantly causes electrolyte gassing and explosive venting'
    ],
    hi: [
      'यह सोचना कि पूरी ऊर्जा निकालने के लिए 0V तक डिस्चार्ज करना होगा (Vmax/2 पर ही 75% ऊर्जा निकल जाती है)',
      'सेल पर 3.0V से अधिक वोल्टेज देना, जिससे इलेक्ट्रोलाइट गैस बनकर फट सकता है'
    ],
    bn: [
      'মনে করা ক্যাপাসিটর ০V তে নামালে তবেই কাজ করে (মূলত ভোল্টেজ অর্ধেকে নামলেই ৭৫% শক্তি পাওয়া হয়ে যায়)',
      'একক সেলে ৩.০V এর বেশি ভোল্টেজ প্রয়োগ করা, যার ফলে ইলেক্ট্রোলাইট গ্যাসে রূপান্তরিত হয়ে ব্লাস্ট হতে পারে'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch7-19-1',
      question: {
        en: 'A 3000 F supercapacitor is discharged from its full rated voltage of 2.8 V down to 1.4 V (50% voltage). What percentage of its total stored electrical energy has been delivered to the load?',
        hi: 'एक 3000 F का सुपरकैपेसिटर 2.8 V से डिस्चार्ज होकर 1.4 V (50% वोल्टेज) पर आ जाता है। इसने अपनी कुल संचित ऊर्जा का कितना प्रतिशत लोड को दे दिया है?',
        bn: 'একটি ৩০০০ F সুপারক্যাপাসিটর তার পূর্ণ ২.৮ V থেকে ডিসচার্জ হয়ে ১.৪ V (৫০% ভোল্টেজ) এ নেমে আসল। এটি তার মোট সঞ্চিত শক্তির শতকরা কত ভাগ লোডে সরবরাহ করেছে?'
      },
      options: [
        { id: 'opt-a', text: { en: '50%', hi: '50%', bn: '৫০%' } },
        { id: 'opt-b', text: { en: '75%', hi: '75%', bn: '৭৫%' } },
        { id: 'opt-c', text: { en: '25%', hi: '25%', bn: '২৫%' } },
        { id: 'opt-d', text: { en: '87.5%', hi: '87.5%', bn: '৮৭.৫%' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'Energy E ∝ V². Initial E1 = ½ · C · (2.8)². Final E2 = ½ · C · (1.4)² = ½ · C · (2.8 / 2)² = E1 / 4. Therefore, Energy delivered = E1 - E1/4 = 0.75 · E1 (75% of energy is delivered when voltage drops to half!).',
        hi: 'ऊर्जा E ∝ V² होती है। वोल्टेज आधा (1/2) होने पर बची हुई ऊर्जा (1/2)² = 1/4 (25%) रह जाती है, यानी 75% ऊर्जा लोड को मिल चुकी है।',
        bn: 'শক্তি E ∝ V²। ভোল্টেজ অর্ধেক (১/২) হলে অবশিষ্ট শক্তি (১/২)² = ১/৪ (২৫%) থাকে, অর্থাৎ ৭৫% শক্তি লোডে সরবরাহ হয়ে গেছে।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch7-19-1',
      question: {
        en: 'An electric city bus regenerative braking module uses a bank of supercapacitors with an equivalent capacitance of 150 F rated at 48 V DC. If the bank is charged from 24 V to 48 V during braking, calculate: (a) Total electrical energy recovered in Joules (kJ), (b) Recovered energy in Watt-hours (Wh), (c) Average charging power if braking takes 12 seconds.',
        hi: 'एक इलेक्ट्रिक बस का 150 F (48 V) सुपरकैपेसिटर बैंक ब्रेकिंग के दौरान 24 V से 48 V तक चार्ज होता है। ज्ञात करें: (a) संचित ऊर्जा (kJ), (b) ऊर्जा (Wh में), (c) 12 सेकंड ब्रेकिंग में औसत चार्जिंग पावर (kW)।',
        bn: 'একটি ইলেকট্রিক বাসের ১৫০ F (৪৮ V) সুপারক্যাপাসিটর ব্যাংক ব্রেকিংয়ের সময় ২৪ V থেকে ৪৮ V এ চার্জ হলো। নির্ণয় করুন: (a) সংগৃহীত শক্তি (kJ), (b) সংগৃহীত শক্তি (Wh এককে), (c) ১২ সেকেন্ড ব্রেকিংয়ের জন্য গড় চার্জিং ক্ষমতা (kW)।'
      },
      hint: {
        en: 'ΔE = ½ · C · (V2² - V1²). Convert Joules to Wh by dividing by 3600. Power P = ΔE / time.',
        hi: 'ΔE = ½ × 150 × (48² - 24²)। Wh = जूल / 3600। P = ΔE / 12।',
        bn: 'ΔE = ½ × ১৫০ × (৪৮² - ২৪²)। Wh = জুল / ৩৬০০। P = ΔE / ১২।'
      },
      answerKey: {
        en: '(a) ΔE = ½ × 150 × (48² - 24²) = 75 × (2304 - 576) = 75 × 1728 = 129,600 Joules = 129.6 kJ. (b) Energy in Wh = 129,600 / 3600 = 36.0 Wh. (c) Average Power = 129,600 J / 12 s = 10,800 Watts = 10.8 kW.',
        hi: '(a) ΔE = 129.6 kJ, (b) ऊर्जा = 36.0 Wh, (c) औसत चार्जिंग पावर = 10.8 kW।',
        bn: '(a) ΔE = ১২৯.৬ kJ, (b) শক্তি = ৩৬.০ Wh, (c) গড় ক্ষমতা = ১০.৮ kW।'
      }
    }
  ]
};
